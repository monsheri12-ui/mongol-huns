import * as THREE from 'three';

export const WINDOW={width:3.6,height:2.6,frame:.12,y:2.8,z:12.72,centers:Array.from({length:7},(_,i)=>-12.3+i*4.1)};
export const EXTERIOR_TIMES=['Morning','Day','Evening','Night'];
export function atmosphereState(day=1,progress=0){
  const d=Number.isSafeInteger(day)&&day>0?day:1,p=Number.isFinite(progress)?Math.max(0,Math.min(1,progress)):0;
  const weather=(d-1)%4,phase=p*3,from=Math.min(2,Math.floor(phase)),fraction=phase-from;
  return {weather,phase,season:weather===3?'Winter':'Summer',from,to:from+1,blend:fraction*fraction*(3-2*fraction)};
}

// Both sampled panoramas share a camera and skyline. Winter never samples a
// leafy summer image; the entire landscape, including roofs and branches, changes.
export function createStoreWindows(textures,frameMaterial,sillMaterial){
  const fallback=textures.isTexture?textures:Object.values(textures)[0];
  const group=new THREE.Group(),state={key:'',weather:0,phase:0};
  const uniforms={mapA:{value:fallback},mapB:{value:fallback},blend:{value:0},time:{value:0},weather:{value:0},darkness:{value:0}};
  const material=new THREE.ShaderMaterial({uniforms,toneMapped:false,vertexShader:`varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}`,fragmentShader:`
    uniform sampler2D mapA,mapB;uniform float blend,time,weather,darkness;varying vec2 vUv;
    float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
    vec3 scenery(vec2 uv){return mix(texture2D(mapA,uv).rgb,texture2D(mapB,uv).rgb,blend);}
    vec3 overcast(vec3 c,vec2 uv){
      float grey=dot(c,vec3(.2126,.7152,.0722));
      c=mix(c,vec3(grey)*vec3(.90,.97,1.05),.48)*.78;
      float sky=smoothstep(.59,.78,uv.y)*(1.-darkness*.85);
      return mix(c,vec3(.34,.39,.44),sky*.72);
    }
    // Clear lenses: refraction, a narrow dark rim and a small glint. Independent
    // jitter and per-column speed prevent the old repeating white-dot pattern.
    vec4 beads(vec2 uv,float density,float seed,float moving){
      vec2 scale=vec2(density*4.15,density),grid=uv*scale;
      float column=floor(grid.x),speed=.15+hash(vec2(column,seed))*1.4;
      grid.y+=time*.10*speed*moving;
      vec2 cell=floor(grid),f=fract(grid),center=vec2(.18)+.64*vec2(hash(cell+seed),hash(cell+seed+19.));
      float occupied=step(mix(.91,.94,moving),hash(cell+seed+7.));
      float radius=mix(.055,.17,hash(cell+seed+11.));
      vec2 p=(f-center)/vec2(1.,1.+moving*.75);float r=length(p)/radius;
      float mask=(1.-smoothstep(.65,1.,r))*occupied;
      float rim=smoothstep(.48,.92,r)*mask;
      float glint=(1.-smoothstep(.10,.25,length(p/radius-vec2(-.31,.36))))*occupied;
      float trail=(1.-smoothstep(.006,.018,abs(f.x-center.x)))*smoothstep(.08,.16,f.y-center.y)*(1.-smoothstep(.32,.56,f.y-center.y))*occupied*moving;
      return vec4(p/radius*vec2(.0013,.004)*mask+vec2(trail*.0003,0.),rim+trail*.16,glint*.25);
    }
    float rainStreaks(vec2 uv,float density,float seed){
      float x=(uv.x+uv.y*.017)*density*4.15,column=floor(x),jitter=hash(vec2(column,seed));
      float y=fract(uv.y*(density*.30)+time*(2.1+jitter*3.)+jitter*47.);
      float width=.018+jitter*.025,len=.10+hash(vec2(column,seed+5.))*.20;
      return (1.-smoothstep(width,width+.025,abs(fract(x)-(.15+jitter*.70))))*smoothstep(0.,.025,y)*(1.-smoothstep(len*.6,len,y))*step(.34,jitter);
    }
    float snowLayer(vec2 uv,float density,float speed,float seed){
      vec2 grid=uv*vec2(density*4.15,density);float column=floor(grid.x);
      grid.y+=time*speed*(.6+hash(vec2(column,seed))*.8);
      grid.x+=sin(time*.19+uv.y*4.+seed)*.30+time*.045;
      vec2 cell=floor(grid),center=.16+.68*vec2(hash(cell+seed),hash(cell+seed+31.));
      float size=mix(.018,.078,pow(hash(cell+seed+8.),2.));
      float flake=1.-smoothstep(size*.45,size,length(fract(grid)-center));
      return flake*step(.77,hash(cell+seed+17.))*(.25+.55*hash(cell+seed+23.));
    }
    void main(){
      vec2 uv=vUv;vec3 color=scenery(uv);
      if(weather>.5&&weather<2.5)color=overcast(color,uv);
      if(weather>1.5&&weather<2.5){
        vec4 drops=beads(uv,40.,3.,0.)+beads(uv,11.,57.,1.);
        vec2 refraction=uv+drops.xy;
        color=overcast(scenery(refraction),refraction);
        color*=1.-clamp(drops.z,0.,1.)*.19;
        color+=vec3(.50,.59,.65)*drops.w;
        float lines=rainStreaks(uv,49.,11.)+rainStreaks(uv,79.,42.)*.45;
        color=mix(color,vec3(.51,.59,.64),min(.21,lines*.18));
      }
      if(weather>2.5){
        float snow=snowLayer(uv,22.,.24,8.)+snowLayer(uv,34.,.19,47.)*.65+snowLayer(uv,50.,.15,92.)*.42;
        color=mix(color,vec3(.87,.93,.99),min(.70,snow));
      }
      gl_FragColor=vec4(color,1.);
      #include <colorspace_fragment>
    }`});
  const addBox=(w,h,d,x,y,z,mat)=>{const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);group.add(m);return m;};
  for(const [pane,x] of WINDOW.centers.entries()){
    const geometry=new THREE.PlaneGeometry(WINDOW.width,WINDOW.height),uv=geometry.attributes.uv;
    for(let i=0;i<uv.count;i++)uv.setX(i,(pane%3+1-uv.getX(i))/3);
    const view=new THREE.Mesh(geometry,material);view.position.set(x,WINDOW.y,WINDOW.z);view.rotation.y=Math.PI;view.userData.exterior=true;group.add(view);
    const t=WINDOW.frame,w=WINDOW.width,h=WINDOW.height;
    for(const side of [-1,1])addBox(t,h+2*t,.16,x+side*(w+t)/2,WINDOW.y,12.62,frameMaterial);
    for(const side of [-1,1])addBox(w,t,.16,x,WINDOW.y+side*(h+t)/2,12.62,frameMaterial);
    addBox(.055,h,.12,x,WINDOW.y,12.61,frameMaterial);
    addBox(w+2*t+.10,.11,.43,x,WINDOW.y-h/2-t-.055,12.52,sillMaterial);
  }
  function set(input={}){
    const next=atmosphereState(input.day,input.progress),key=`${next.weather}:${next.phase}`;if(key===state.key)return false;
    Object.assign(state,next,{key});
    uniforms.mapA.value=textures['city'+next.season+EXTERIOR_TIMES[next.from]]||fallback;
    uniforms.mapB.value=textures['city'+next.season+EXTERIOR_TIMES[next.to]]||fallback;
    uniforms.blend.value=next.blend;uniforms.weather.value=next.weather;uniforms.darkness.value=Math.max(0,next.phase-2);return true;
  }
  let accumulator=0;
  function tick(dt,visible,paused,reducedMotion){if(paused||!visible||reducedMotion||state.weather<2)return false;accumulator+=dt;if(accumulator<.04)return false;uniforms.time.value+=accumulator;accumulator=0;return true;}
  set();return {group,set,tick,material,uniforms};
}
