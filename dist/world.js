(()=>{var xu=0,Uc=1,yu=2;var ws=1,vu=2,pr=3,Ti=0,An=1,Qt=2,Ts=0,mr=1,Fc=2,Oc=3,Bc=4,Mu=5;var As=100,Su=101,bu=102,Eu=103,wu=104,Tu=200,Au=201,Ru=202,Cu=203,zc=204,Hc=205,Iu=206,Pu=207,Du=208,Lu=209,Nu=210,Uu=211,Fu=212,Ou=213,Bu=214,yo=0,vo=1,Mo=2,js=3,So=4,bo=5,Eo=6,wo=7,Ko=0,zu=1,Hu=2,Ai=0,kc=1,Gc=2,Vc=3,ba=4,Wc=5,Xc=6,qc=7;var Yc=300,Rs=301,gr=302,Qo=303,jo=304,er=1e3,vi=1001,To=1002,bn=1003,ku=1004;var Ea=1005;var Nn=1006,el=1007;var Vi=1008;var kn=1009,Zc=1010,$c=1011,_r=1012,tl=1013,pi=1014,jn=1015,mi=1016,nl=1017,il=1018,Cs=1020,Jc=35902,Kc=35899,Qc=1021,jc=1022,gi=1023,zi=1026,Wi=1027,sl=1028,rl=1029,as=1030,al=1031;var ol=1033,wa=33776,Ta=33777,Aa=33778,Ra=33779,ll=35840,cl=35841,hl=35842,ul=35843,dl=36196,fl=37492,pl=37496,ml=37488,gl=37489,Ca=37490,_l=37491,xl=37808,yl=37809,vl=37810,Ml=37811,Sl=37812,bl=37813,El=37814,wl=37815,Tl=37816,Al=37817,Rl=37818,Cl=37819,Il=37820,Pl=37821,Dl=36492,Ll=36494,Nl=36495,Ul=36283,Fl=36284,Ia=36285,Ol=36286;var Vr=2300,Ao=2301,_o=2302,bc=2303,Ec=2400,wc=2401,Tc=2402;var Gu=3200;var Pa=0,Vu=1,ei="",Yt="srgb",Wr="srgb-linear",Xr="linear",Ot="srgb";var xo=7680;var Wu=519,Xu=512,qu=513,Yu=514,eh=515,Zu=516,$u=517,th=518,nh=519,Ju=35044;var ih="300 es",Kn=2e3,tr=2001;function bf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ef(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){let i=qr("canvas");return i.style.display="block",i}var Fh={},nr=null;function sh(...i){let e="THREE."+i.shift();nr?nr("log",e,...i):console.log(e,...i)}function Qu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function st(...i){i=Qu(i);let e="THREE."+i.shift();if(nr)nr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ot(...i){i=Qu(i);let e="THREE."+i.shift();if(nr)nr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function gs(...i){let e=i.join(" ");e in Fh||(Fh[e]=!0,st(...i))}function ju(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ed={[yo]:yo,[Mo]:Eo,[So]:So,[js]:bo,[vo]:vo,[Eo]:Mo,[wo]:wo,[bo]:js},Si=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,zr=Math.PI/180,ir=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Cn[i&255]+Cn[i>>8&255]+Cn[i>>16&255]+Cn[i>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function rh(i,e){return(i%e+e)%e}function wf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Tf(i,e,t){return i!==e?(t-i)/(e-i):0}function Hr(i,e,t){return(1-t)*i+t*e}function Af(i,e,t,n){return Hr(i,e,1-Math.exp(-t*n))}function Rf(i,e=1){return e-Math.abs(rh(i,e*2)-e)}function Cf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function If(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Df(i,e){return i+Math.random()*(e-i)}function Lf(i){return i*(.5-Math.random())}function Nf(i){i!==void 0&&(Oh=i);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uf(i){return i*zr}function Ff(i){return i*ir}function Of(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ah(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function oh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function td(i,e){if(e.constructor===Float32Array)return i;let t=oh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function nd(i,e){if(e.constructor===Float32Array)return i;let t=oh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ri={DEG2RAD:zr,RAD2DEG:ir,generateUUID:Is,clamp:vt,euclideanModulo:rh,mapLinear:wf,inverseLerp:Tf,lerp:Hr,damp:Af,pingpong:Rf,smoothstep:Cf,smootherstep:If,randInt:Pf,randFloat:Df,randFloatSpread:Lf,seededRandom:Nf,degToRad:Uf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:ah,setQuaternionFromProperEuler:zf,normalize:nd,denormalize:td},ye=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},bi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(u!==_||l!==d||c!==f||h!==g){let m=l*d+c*f+h*g+u*_;m<0&&(d=-d,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let y=Math.acos(m),S=Math.sin(y);p=Math.sin(p*y)/S,o=Math.sin(o*y)/S,l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o}else{l=l*p+d*o,c=c*p+f*o,h=h*p+g*o,u=u*p+_*o;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return jl.copy(this).projectOnVector(e),this.sub(jl)}reflect(e){return this.sub(jl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jl=new P,Bh=new bi,ht=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],y=s[1],S=s[4],v=s[7],T=s[2],A=s[5],x=s[8];return r[0]=a*_+o*y+l*T,r[3]=a*m+o*S+l*A,r[6]=a*p+o*v+l*x,r[1]=c*_+h*y+u*T,r[4]=c*m+h*S+u*A,r[7]=c*p+h*v+u*x,r[2]=d*_+f*y+g*T,r[5]=d*m+f*S+g*A,r[8]=d*p+f*v+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return gs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ec.makeScale(e,t)),this}rotate(e){return gs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ec.makeRotation(-e)),this}translate(e,t){return gs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ec.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ec=new ht,zh=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hf(){let i={enabled:!0,workingColorSpace:Wr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ot&&(s.r=Bi(s.r),s.g=Bi(s.g),s.b=Bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ot&&(s.r=Qs(s.r),s.g=Qs(s.g),s.b=Qs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ei?Xr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wr]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:zh,fromXYZ:Hh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Ot,toXYZ:zh,fromXYZ:Hh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var Et=Hf();function Bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bs,Ro=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Bs===void 0&&(Bs=qr("canvas")),Bs.width=e.width,Bs.height=e.height;let s=Bs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Bs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Bi(t[n]/255)*255):t[n]=Bi(t[n]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},kf=0,sr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tc(s[a].image)):r.push(tc(s[a]))}else r=tc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function tc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ro.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}var Gf=0,nc=new P,pn=class i extends Si{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,r=Nn,a=Vi,o=gi,l=kn,c=i.DEFAULT_ANISOTROPY,h=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=Is(),this.name="",this.source=new sr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(nc).x}get height(){return this.source.getSize(nc).y}get depth(){return this.source.getSize(nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case er:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case To:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case er:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case To:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Yc;pn.DEFAULT_ANISOTROPY=1;var en=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,v=(f+1)/2,T=(p+1)/2,A=(h+d)/4,x=(u+_)/4,w=(g+m)/4;return S>v&&S>T?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=x/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=w/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=x/r,s=w/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Co=class extends Si{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new sr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Un=class extends Co{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Yr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Io=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Lt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Vf,e,Wf)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),$i.crossVectors(n,Gn),$i.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),$i.crossVectors(n,Gn)),$i.normalize(),Xa.crossVectors(Gn,$i),s[0]=$i.x,s[4]=Xa.x,s[8]=Gn.x,s[1]=$i.y,s[5]=Xa.y,s[9]=Gn.y,s[2]=$i.z,s[6]=Xa.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],y=n[3],S=n[7],v=n[11],T=n[15],A=s[0],x=s[4],w=s[8],O=s[12],I=s[1],U=s[5],H=s[9],Y=s[13],L=s[2],q=s[6],J=s[10],X=s[14],le=s[3],K=s[7],ce=s[11],se=s[15];return r[0]=a*A+o*I+l*L+c*le,r[4]=a*x+o*U+l*q+c*K,r[8]=a*w+o*H+l*J+c*ce,r[12]=a*O+o*Y+l*X+c*se,r[1]=h*A+u*I+d*L+f*le,r[5]=h*x+u*U+d*q+f*K,r[9]=h*w+u*H+d*J+f*ce,r[13]=h*O+u*Y+d*X+f*se,r[2]=g*A+_*I+m*L+p*le,r[6]=g*x+_*U+m*q+p*K,r[10]=g*w+_*H+m*J+p*ce,r[14]=g*O+_*Y+m*X+p*se,r[3]=y*A+S*I+v*L+T*le,r[7]=y*x+S*U+v*q+T*K,r[11]=y*w+S*H+v*J+T*ce,r[15]=y*O+S*Y+v*X+T*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],y=l*f-c*d,S=o*f-c*u,v=o*d-l*u,T=a*f-c*h,A=a*d-l*h,x=a*u-o*h;return t*(_*y-m*S+p*v)-n*(g*y-m*T+p*A)+s*(g*S-_*T+p*x)-r*(g*v-_*A+m*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],y=t*o-n*a,S=t*l-s*a,v=t*c-r*a,T=n*l-s*o,A=n*c-r*o,x=s*c-r*l,w=h*_-u*g,O=h*m-d*g,I=h*p-f*g,U=u*m-d*_,H=u*p-f*_,Y=d*p-f*m,L=y*Y-S*H+v*U+T*I-A*O+x*w;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/L;return e[0]=(o*Y-l*H+c*U)*q,e[1]=(s*H-n*Y-r*U)*q,e[2]=(_*x-m*A+p*T)*q,e[3]=(d*A-u*x-f*T)*q,e[4]=(l*I-a*Y-c*O)*q,e[5]=(t*Y-s*I+r*O)*q,e[6]=(m*v-g*x-p*S)*q,e[7]=(h*x-d*v+f*S)*q,e[8]=(a*H-o*I+c*w)*q,e[9]=(n*I-t*H-r*w)*q,e[10]=(g*A-_*v+p*y)*q,e[11]=(u*v-h*A-f*y)*q,e[12]=(o*O-a*U-l*w)*q,e[13]=(t*U-n*O+s*w)*q,e[14]=(_*S-g*T-m*y)*q,e[15]=(h*T-u*S+d*y)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,y=l*c,S=l*h,v=l*u,T=n.x,A=n.y,x=n.z;return s[0]=(1-(_+p))*T,s[1]=(f+v)*T,s[2]=(g-S)*T,s[3]=0,s[4]=(f-v)*A,s[5]=(1-(d+p))*A,s[6]=(m+y)*A,s[7]=0,s[8]=(g+S)*x,s[9]=(m-y)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=zs.set(s[0],s[1],s[2]).length(),o=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),li.copy(this);let c=1/a,h=1/o,u=1/l;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=h,li.elements[5]*=h,li.elements[6]*=h,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,t.setFromRotationMatrix(li),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Kn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Kn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===tr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Kn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Kn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===tr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zs=new P,li=new Lt,Vf=new P(0,0,0),Wf=new P(1,1,1),$i=new P,Xa=new P,Gn=new P,kh=new Lt,Gh=new bi,Ei=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gh.setFromEuler(this),this.setFromQuaternion(Gh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var rr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xf=0,Vh=new P,Hs=new bi,Li=new Lt,qa=new P,Pr=new P,qf=new P,Yf=new bi,Wh=new P(1,0,0),Xh=new P(0,1,0),qh=new P(0,0,1),Yh={type:"added"},Zf={type:"removed"},ks={type:"childadded",child:null},ic={type:"childremoved",child:null},kt=class i extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Ei,n=new bi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ht}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Wh,e)}rotateY(e){return this.rotateOnAxis(Xh,e)}rotateZ(e){return this.rotateOnAxis(qh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Wh,e)}translateY(e){return this.translateOnAxis(Xh,e)}translateZ(e){return this.translateOnAxis(qh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qa.copy(e):qa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Pr,qa,this.up):Li.lookAt(qa,Pr,this.up),this.quaternion.setFromRotationMatrix(Li),s&&(Li.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(Li),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yh),ks.child=e,this.dispatchEvent(ks),ks.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zf),ic.child=e,this.dispatchEvent(ic),ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yh),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,e,qf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new P(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var tt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},ar=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new tt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},Ya={h:0,s:0,l:0};function sc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Et.workingColorSpace){if(e=rh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=sc(a,r,e+1/3),this.g=sc(a,r,e),this.b=sc(a,r,e-1/3)}return Et.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=id[e.toLowerCase()];return n!==void 0?this.setHex(n,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Et.workingToColorSpace(In.copy(this),e),Math.round(vt(In.r*255,0,255))*65536+Math.round(vt(In.g*255,0,255))*256+Math.round(vt(In.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(In.copy(this),t);let n=In.r,s=In.g,r=In.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=Yt){Et.workingToColorSpace(In.copy(this),e);let t=In.r,n=In.g,s=In.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(Ya);let n=Hr(Ji.h,Ya.h,t),s=Hr(Ji.s,Ya.s,t),r=Hr(Ji.l,Ya.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new at;at.NAMES=id;var Zr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new at(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var _s=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ci=new P,Ni=new P,rc=new P,Ui=new P,Gs=new P,Vs=new P,Zh=new P,ac=new P,oc=new P,lc=new P,cc=new en,hc=new en,uc=new en,es=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ci.subVectors(e,t),s.cross(ci);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ci.subVectors(s,t),Ni.subVectors(n,t),rc.subVectors(e,t);let a=ci.dot(ci),o=ci.dot(Ni),l=ci.dot(rc),c=Ni.dot(Ni),h=Ni.dot(rc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return cc.setScalar(0),hc.setScalar(0),uc.setScalar(0),cc.fromBufferAttribute(e,t),hc.fromBufferAttribute(e,n),uc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(cc,r.x),a.addScaledVector(hc,r.y),a.addScaledVector(uc,r.z),a}static isFrontFacing(e,t,n,s){return ci.subVectors(n,t),Ni.subVectors(e,t),ci.cross(Ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),ci.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Gs.subVectors(s,n),Vs.subVectors(r,n),ac.subVectors(e,n);let l=Gs.dot(ac),c=Vs.dot(ac);if(l<=0&&c<=0)return t.copy(n);oc.subVectors(e,s);let h=Gs.dot(oc),u=Vs.dot(oc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Gs,a);lc.subVectors(e,r);let f=Gs.dot(lc),g=Vs.dot(lc);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vs,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Zh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Zh,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dn=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Za.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(e.matrixWorld),this.union(Za)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),$a.subVectors(this.max,Dr),Ws.subVectors(e.a,Dr),Xs.subVectors(e.b,Dr),qs.subVectors(e.c,Dr),Ki.subVectors(Xs,Ws),Qi.subVectors(qs,Xs),ds.subVectors(Ws,qs);let t=[0,-Ki.z,Ki.y,0,-Qi.z,Qi.y,0,-ds.z,ds.y,Ki.z,0,-Ki.x,Qi.z,0,-Qi.x,ds.z,0,-ds.x,-Ki.y,Ki.x,0,-Qi.y,Qi.x,0,-ds.y,ds.x,0];return!dc(t,Ws,Xs,qs,$a)||(t=[1,0,0,0,1,0,0,0,1],!dc(t,Ws,Xs,qs,$a))?!1:(Ja.crossVectors(Ki,Qi),t=[Ja.x,Ja.y,Ja.z],dc(t,Ws,Xs,qs,$a))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fi=[new P,new P,new P,new P,new P,new P,new P,new P],hi=new P,Za=new Dn,Ws=new P,Xs=new P,qs=new P,Ki=new P,Qi=new P,ds=new P,Dr=new P,$a=new P,Ja=new P,fs=new P;function dc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var hn=new P,Ka=new ye,Jf=0,di=class extends Si{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=jn,this.version=0,this._normalizationScale=e!==void 0?oh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):td(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):nd(e,this.array)}};var $r=class extends di{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Jr=class extends di{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var mt=class extends di{constructor(e,t,n){super(new Float32Array(e),t,n)}},Kf=new Dn,Lr=new P,fc=new P,Hi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);let t=Lr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Lr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(fc)),this.expandByPoint(Lr.copy(e.center).sub(fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Qf=0,Jn=new Lt,pc=new kt,Ys=new P,Vn=new Dn,Nr=new Dn,Sn=new P,tn=class i extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bf(e)?Jr:$r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ht().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jn.makeRotationFromQuaternion(e),this.applyMatrix4(Jn),this}rotateX(e){return Jn.makeRotationX(e),this.applyMatrix4(Jn),this}rotateY(e){return Jn.makeRotationY(e),this.applyMatrix4(Jn),this}rotateZ(e){return Jn.makeRotationZ(e),this.applyMatrix4(Jn),this}translate(e,t,n){return Jn.makeTranslation(e,t,n),this.applyMatrix4(Jn),this}scale(e,t,n){return Jn.makeScale(e,t,n),this.applyMatrix4(Jn),this}lookAt(e){return pc.lookAt(e),pc.updateMatrix(),this.applyMatrix4(pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new mt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Nr.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(Vn.min,Nr.min),Vn.expandByPoint(Sn),Sn.addVectors(Vn.max,Nr.max),Vn.expandByPoint(Sn)):(Vn.expandByPoint(Nr.min),Vn.expandByPoint(Nr.max))}Vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Sn.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),Sn.add(Ys)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new di(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new P,l[O]=new P;let h=new P,u=new P,d=new P,f=new ye,g=new ye,_=new ye,m=new P,p=new P;function y(O,I,U){c[O]=c[I]=c[U]=1,h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,I),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,I),_.fromBufferAttribute(r,U),u.sub(h),d.sub(h),g.sub(f),_.sub(f);let H=1/(g.x*_.y-_.x*g.y);isFinite(H)&&(m.copy(u).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(H),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-_.x).multiplyScalar(H),o[O].add(m),o[I].add(m),o[U].add(m),l[O].add(p),l[I].add(p),l[U].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let O=0,I=S.length;O<I;++O){let U=S[O],H=U.start,Y=U.count;for(let L=H,q=H+Y;L<q;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let v=new P,T=new P,A=new P,x=new P;function w(O){A.fromBufferAttribute(s,O),x.copy(A);let I=o[O];v.copy(I),v.sub(A.multiplyScalar(A.dot(I))).normalize(),T.crossVectors(x,I);let H=T.dot(l[O])<0?-1:1;a.setXYZW(O,v.x,v.y,v.z,H)}for(let O=0,I=n.count;O<I;++O)c[O]&&w(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new di(d,h,u)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var mc=new P,jf=new P,ep=new ht,ui=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=mc.subVectors(n,t).cross(jf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(mc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ep.getNormalMatrix(e),s=this.coplanarPoint(mc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},tp=0,wi=class extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=mr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zc,this.blendDst=Hc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ui().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Oi=new P,gc=new P,Qa=new P,ja=new P,ts=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){gc.copy(e).add(t).multiplyScalar(.5),Qa.copy(t).sub(e).normalize(),ja.copy(this.origin).sub(gc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Qa),o=ja.dot(this.direction),l=-ja.dot(Qa),c=ja.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(gc).addScaledVector(Qa,d),f}intersectSphere(e,t){if(e.radius<0)return null;Oi.subVectors(e.center,this.origin);let n=Oi.dot(this.direction),s=Oi.dot(Oi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,y=n.y-a.y,S=n.z-a.z,v=Math.abs(l),T=Math.abs(c),A=Math.abs(h),x,w,O,I,U,H,Y,L,q,J,X,le;if(v>=T&&v>=A?(O=l,H=u,q=g,le=p,l>=0?(x=c,w=h,I=d,U=f,Y=_,L=m,J=y,X=S):(x=h,w=c,I=f,U=d,Y=m,L=_,J=S,X=y)):T>=A?(O=c,H=d,q=_,le=y,c>=0?(x=h,w=l,I=f,U=u,Y=m,L=g,J=S,X=p):(x=l,w=h,I=u,U=f,Y=g,L=m,J=p,X=S)):(O=h,H=f,q=m,le=S,h>=0?(x=l,w=c,I=u,U=d,Y=g,L=_,J=p,X=y):(x=c,w=l,I=d,U=u,Y=_,L=g,J=y,X=p)),O===0)return null;let K=x/O,ce=w/O,se=1/O,Ue=I-K*H,Ke=U-ce*H,z=Y-K*q,te=L-ce*q,me=J-K*le,Ge=X-ce*le,ae=me*te-Ge*z,ee=Ue*Ge-Ke*me,Dt=z*Ke-te*Ue;if(s){if(ae<0||ee<0||Dt<0)return null}else if((ae<0||ee<0||Dt<0)&&(ae>0||ee>0||Dt>0))return null;let $e=ae+ee+Dt;if($e===0)return null;let lt=se*(ae*H+ee*q+Dt*le);return($e>0?lt<0:lt>0)?null:this.at(lt/$e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$h=new Lt,ps=new ts,eo=new Hi,Jh=new P,to=new P,no=new P,io=new P,_c=new P,so=new P,Kh=new P,ro=new P,We=class extends kt{constructor(e=new tn,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){so.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(_c.fromBufferAttribute(u,e),a?so.addScaledVector(_c,h):so.addScaledVector(_c.sub(t),h))}t.add(so)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(eo.containsPoint(ps.origin)===!1&&(ps.intersectSphere(eo,Jh)===null||ps.origin.distanceToSquared(Jh)>(e.far-e.near)**2))&&($h.copy(r).invert(),ps.copy(e.ray).applyMatrix4($h),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=S;v<T;v+=3){let A=o.getX(v),x=o.getX(v+1),w=o.getX(v+2);s=ao(this,p,e,n,c,h,u,A,x,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=o.getX(m),S=o.getX(m+1),v=o.getX(m+2);s=ao(this,a,e,n,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,T=S;v<T;v+=3){let A=v,x=v+1,w=v+2;s=ao(this,p,e,n,c,h,u,A,x,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let y=m,S=m+1,v=m+2;s=ao(this,a,e,n,c,h,u,y,S,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function np(i,e,t,n,s,r,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;ro.copy(o),ro.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:i}}function ao(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,to),i.getVertexPosition(l,no),i.getVertexPosition(c,io);let h=np(i,e,t,n,to,no,io,Kh);if(h){let u=new P;es.getBarycoord(Kh,to,no,io,u),s&&(h.uv=es.getInterpolatedAttribute(s,o,l,c,u,new ye)),r&&(h.uv1=es.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=es.getInterpolatedAttribute(a,o,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};es.getNormal(to,no,io,d.normal),h.face=d,h.barycoord=u}return h}var Kr=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=bn,h=bn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qr=class extends di{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Zs=new Lt,Qh=new Lt,oo=[],jh=new Dn,ip=new Lt,Ur=new We,Fr=new Hi,Fn=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ip)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),jh.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(jh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Fr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Ur.geometry=this.geometry,Ur.material=this.material,Ur.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fr.copy(this.boundingSphere),Fr.applyMatrix4(n),e.ray.intersectsSphere(Fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),Qh.multiplyMatrices(n,Zs),Ur.matrixWorld=Qh,Ur.raycast(e,oo);for(let a=0,o=oo.length;a<o;a++){let l=oo[a];l.instanceId=r,l.object=this,t.push(l)}oo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Qr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Kr(new Float32Array(s*this.count),s,this.count,sl,jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ms=new Hi,sp=new ye(.5,.5),lo=new P,ns=class{constructor(e=new ui,t=new ui,n=new ui,s=new ui,r=new ui,a=new ui){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],y=r[12],S=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,f-h,p-g,T-y).normalize(),s[1].setComponents(c+a,f+h,p+g,T+y).normalize(),s[2].setComponents(c+o,f+u,p+_,T+S).normalize(),s[3].setComponents(c-o,f-u,p-_,T-S).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,T-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,T-v).normalize(),t===Kn)s[5].setComponents(c+l,f+d,p+m,T+v).normalize();else if(t===tr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=sp.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(lo.x=s.normal.x>0?e.max.x:e.min.x,lo.y=s.normal.y>0?e.max.y:e.min.y,lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},eu=new Lt,Po=class i{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ns),n[s].setFromProjectionMatrix(eu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ns),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var or=class extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Do=new P,Lo=new P,tu=new Lt,Or=new ts,co=new Hi,xc=new P,nu=new P,jr=class extends kt{constructor(e=new tn,t=new or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Do.fromBufferAttribute(t,s-1),Lo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Do.distanceTo(Lo);e.setAttribute("lineDistance",new mt(n,1))}else st("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;tu.copy(s).invert(),Or.copy(e.ray).applyMatrix4(tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),y=h.getX(_+1),S=ho(this,e,Or,l,p,y,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=ho(this,e,Or,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=ho(this,e,Or,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=ho(this,e,Or,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ho(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Do.fromBufferAttribute(o,s),Lo.fromBufferAttribute(o,r),t.distanceSqToSegment(Do,Lo,xc,nu)>n)return;xc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(xc);if(!(c<e.near||c>e.far))return{distance:c,point:nu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ea=class extends pn{constructor(e=[],t=Rs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hn=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends pn{constructor(e,t,n=pi,s,r,a,o=bn,l=bn,c,h=zi,u=1){if(h!==zi&&h!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ta=class extends ki{constructor(e,t=pi,n=Rs,s,r,a=bn,o=bn,l,c=zi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},na=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},un=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(_,m,p,y,S,v,T,A,x,w,O){let I=v/x,U=T/w,H=v/2,Y=T/2,L=A/2,q=x+1,J=w+1,X=0,le=0,K=new P;for(let ce=0;ce<J;ce++){let se=ce*U-Y;for(let Ue=0;Ue<q;Ue++){let Ke=Ue*I-H;K[_]=Ke*y,K[m]=se*S,K[p]=L,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=A>0?1:-1,h.push(K.x,K.y,K.z),u.push(Ue/x),u.push(1-ce/w),X+=1}}for(let ce=0;ce<w;ce++)for(let se=0;se<x;se++){let Ue=d+se+q*ce,Ke=d+se+q*(ce+1),z=d+(se+1)+q*(ce+1),te=d+(se+1)+q*ce;l.push(Ue,Ke,te),l.push(Ke,z,te),le+=6}o.addGroup(f,le,O),f+=le,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},ia=class i extends tn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,u=Math.PI/2*e,d=t,f=2*u+d,g=n*2+r,_=s+1,m=new P,p=new P;for(let y=0;y<=g;y++){let S=0,v=0,T=0,A=0;if(y<=n){let O=y/n,I=O*Math.PI/2;v=-h-e*Math.cos(I),T=e*Math.sin(I),A=-e*Math.cos(I),S=O*u}else if(y<=n+r){let O=(y-n)/r;v=-h+O*t,T=e,A=0,S=u+O*d}else{let O=(y-n-r)/n,I=O*Math.PI/2;v=h+e*Math.sin(I),T=e*Math.cos(I),A=e*Math.sin(I),S=u+d+O*u}let x=Math.max(0,Math.min(1,S/f)),w=0;y===0?w=.5/s:y===g&&(w=-.5/s);for(let O=0;O<=s;O++){let I=O/s,U=I*Math.PI*2,H=Math.sin(U),Y=Math.cos(U);p.x=-T*Y,p.y=v,p.z=T*H,o.push(p.x,p.y,p.z),m.set(-T*Y,A,T*H),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+w,x)}if(y>0){let O=(y-1)*_;for(let I=0;I<s;I++){let U=O+I,H=O+I+1,Y=y*_+I,L=y*_+I+1;a.push(U,H,Y),a.push(H,L,Y)}}}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var On=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;y(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function y(){let v=new P,T=new P,A=0,x=(t-e)/n;for(let w=0;w<=r;w++){let O=[],I=w/r,U=I*(t-e)+e;for(let H=0;H<=s;H++){let Y=H/s,L=Y*l+o,q=Math.sin(L),J=Math.cos(L);T.x=U*q,T.y=-I*n+m,T.z=U*J,u.push(T.x,T.y,T.z),v.set(q,x,J).normalize(),d.push(v.x,v.y,v.z),f.push(Y,1-I),O.push(g++)}_.push(O)}for(let w=0;w<s;w++)for(let O=0;O<r;O++){let I=_[O][w],U=_[O+1][w],H=_[O+1][w+1],Y=_[O][w+1];(e>0||O!==0)&&(h.push(I,U,Y),A+=3),(t>0||O!==r-1)&&(h.push(U,H,Y),A+=3)}c.addGroup(p,A,0),p+=A}function S(v){let T=g,A=new ye,x=new P,w=0,O=v===!0?e:t,I=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let L=H/s*l+o,q=Math.cos(L),J=Math.sin(L);x.x=O*J,x.y=m*I,x.z=O*q,u.push(x.x,x.y,x.z),d.push(0,I,0),A.x=q*.5+.5,A.y=J*.5*I+.5,f.push(A.x,A.y),g++}for(let H=0;H<s;H++){let Y=T+H,L=U+H;v===!0?h.push(L,L+1,Y):h.push(L+1,L,Y),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){st("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ye:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new Lt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},lr=class extends Wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},No=class extends lr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var iu=new P,su=new P,yc=new lh,vc=new lh,Mc=new lh,cr=class extends Wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(su.subVectors(s[0],s[1]).add(s[0]),c=su);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(iu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=iu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),yc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),vc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),Mc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(yc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),vc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Mc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(yc.calc(l),vc.calc(l),Mc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function ru(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rp(i,e){let t=1-i;return t*t*e}function ap(i,e){return 2*(1-i)*i*e}function op(i,e){return i*i*e}function kr(i,e,t,n){return rp(i,e)+ap(i,t)+op(i,n)}function lp(i,e){let t=1-i;return t*t*t*e}function cp(i,e){let t=1-i;return 3*t*t*i*e}function hp(i,e){return 3*(1-i)*i*i*e}function up(i,e){return i*i*i*e}function Gr(i,e,t,n,s){return lp(i,e)+cp(i,t)+hp(i,n)+up(i,s)}var sa=class extends Wn{constructor(e=new ye,t=new ye,n=new ye,s=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,s.x,r.x,a.x,o.x),Gr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gi=class extends Wn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Gr(e,s.x,r.x,a.x,o.x),Gr(e,s.y,r.y,a.y,o.y),Gr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Wn{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hr=class extends Wn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Wn{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xs=class extends Wn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(kr(e,s.x,r.x,a.x),kr(e,s.y,r.y,a.y),kr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(ru(o,l.x,c.x,h.x,u.x),ru(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ye().fromArray(s))}return this}},Uo=Object.freeze({__proto__:null,ArcCurve:No,CatmullRomCurve3:cr,CubicBezierCurve:sa,CubicBezierCurve3:Gi,EllipseCurve:lr,LineCurve:ra,LineCurve3:hr,QuadraticBezierCurve:aa,QuadraticBezierCurve3:xs,SplineCurve:oa}),Fo=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Uo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},la=class extends Fo{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new aa(this.currentPoint.clone(),new ye(e,t),new ye(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new sa(this.currentPoint.clone(),new ye(e,t),new ye(n,s),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new oa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new lr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},fi=class extends la{constructor(e){super(e),this.uuid=Is(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new la().fromJSON(s))}return this}};function dp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=sd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=_p(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,u=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return ca(r,a,t,o,l,c,0),a}function sd(i,e,t,n,s){let r;if(s===Rp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=au(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=au(a/n|0,i[a],i[a+1],r);return r&&ur(r,r.next)&&(ua(r),r=r.next),r}function ys(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ur(t,t.next)||sn(t.prev,t,t.next)===0)){if(ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ca(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Sp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?pp(i,n,s,r):fp(i)){e.push(l.i,i.i,c.i),ua(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=mp(ys(i),e),ca(i,e,t,n,s,r,2)):a===2&&gp(i,e,t,n,s,r):ca(ys(i),e,t,n,s,r,1);break}}}function fp(i){let e=i.prev,t=i,n=i.next;if(sn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Br(s,o,r,l,a,c,g.x,g.y)&&sn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function pp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(sn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=Ac(f,g,e,t,n),y=Ac(_,m,e,t,n),S=i.prevZ,v=i.nextZ;for(;S&&S.z>=p&&v&&v.z<=y;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Br(o,h,l,u,c,d,S.x,S.y)&&sn(S.prev,S,S.next)>=0||(S=S.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Br(o,h,l,u,c,d,v.x,v.y)&&sn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&Br(o,h,l,u,c,d,S.x,S.y)&&sn(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Br(o,h,l,u,c,d,v.x,v.y)&&sn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function mp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ur(n,s)&&ad(n,t,t.next,s)&&ha(n,s)&&ha(s,n)&&(e.push(n.i,t.i,s.i),ua(t),ua(t.next),t=i=s),t=t.next}while(t!==i);return ys(t)}function gp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wp(a,o)){let l=od(a,o);a=ys(a,a.next),l=ys(l,l.next),ca(a,e,t,n,s,r,0),ca(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function _p(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=sd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ep(c))}s.sort(xp);for(let r=0;r<s.length;r++)t=yp(s[r],t);return t}function xp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function yp(i,e){let t=vp(i,e);if(!t)return e;let n=od(t,i);return ys(n,n.next),ys(t,t.next)}function vp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ur(i,t))return t;do{if(ur(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&rd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);ha(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&Mp(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function Mp(i,e){return sn(i.prev,i,e.prev)<0&&sn(e.next,i,i.next)<0}function Sp(i,e,t,n){let s=i;do s.z===0&&(s.z=Ac(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bp(s)}function bp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Ac(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ep(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function rd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Br(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&rd(i,e,t,n,s,r,a,o)}function wp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Tp(i,e)&&(ha(i,e)&&ha(e,i)&&Ap(i,e)&&(sn(i.prev,i,e.prev)||sn(i,e.prev,e))||ur(i,e)&&sn(i.prev,i,i.next)>0&&sn(e.prev,e,e.next)>0)}function sn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ur(i,e){return i.x===e.x&&i.y===e.y}function ad(i,e,t,n){let s=fo(sn(i,e,t)),r=fo(sn(i,e,n)),a=fo(sn(t,n,i)),o=fo(sn(t,n,e));return!!(s!==r&&a!==o||s===0&&uo(i,t,e)||r===0&&uo(i,n,e)||a===0&&uo(t,i,n)||o===0&&uo(t,e,n))}function uo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fo(i){return i>0?1:i<0?-1:0}function Tp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&ad(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ha(i,e){return sn(i.prev,i,i.next)<0?sn(i,e,i.next)>=0&&sn(i,i.prev,e)>=0:sn(i,e,i.prev)<0||sn(i,i.next,e)<0}function Ap(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function od(i,e){let t=Rc(i.i,i.x,i.y),n=Rc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function au(i,e,t,n){let s=Rc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ua(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Rp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Cc=class{static triangulate(e,t,n=2){return dp(e,t,n)}},Mi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];ou(e),lu(n,e);let a=e.length;t.forEach(ou);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,lu(n,t[l]);let o=Cc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function ou(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function lu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var vs=class i extends tn{constructor(e=new fi([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Cp,S,v=!1,T,A,x,w;if(p){S=p.getSpacedPoints(h),v=!0,d=!1;let de=p.isCatmullRomCurve3?p.closed:!1;T=p.computeFrenetFrames(h,de),A=new P,x=new P,w=new P}d||(m=0,f=0,g=0,_=0);let O=o.extractPoints(c),I=O.shape,U=O.holes;if(!Mi.isClockWise(I)){I=I.reverse();for(let de=0,we=U.length;de<we;de++){let Ee=U[de];Mi.isClockWise(Ee)&&(U[de]=Ee.reverse())}}function Y(de){let Ee=10000000000000001e-36,Fe=de[0];for(let ve=1;ve<=de.length;ve++){let ft=ve%de.length,He=de[ft],xt=He.x-Fe.x,yt=He.y-Fe.y,At=xt*xt+yt*yt,B=Math.max(Math.abs(He.x),Math.abs(He.y),Math.abs(Fe.x),Math.abs(Fe.y)),jt=Ee*B*B;if(At<=jt){de.splice(ft,1),ve--;continue}Fe=He}}Y(I),U.forEach(Y);let L=U.length,q=I;for(let de=0;de<L;de++){let we=U[de];I=I.concat(we)}function J(de,we,Ee){return we||ot("ExtrudeGeometry: vec does not exist"),de.clone().addScaledVector(we,Ee)}let X=I.length;function le(de,we,Ee){let Fe,ve,ft,He=de.x-we.x,xt=de.y-we.y,yt=Ee.x-de.x,At=Ee.y-de.y,B=He*He+xt*xt,jt=He*At-xt*yt;if(Math.abs(jt)>Number.EPSILON){let gt=Math.sqrt(B),Bt=Math.sqrt(yt*yt+At*At),Re=we.x-xt/gt,Jt=we.y+He/gt,Xe=Ee.x-At/Bt,it=Ee.y+yt/Bt,C=((Xe-Re)*At-(it-Jt)*yt)/(He*At-xt*yt);Fe=Re+He*C-de.x,ve=Jt+xt*C-de.y;let b=Fe*Fe+ve*ve;if(b<=2)return new ye(Fe,ve);ft=Math.sqrt(b/2)}else{let gt=!1;He>Number.EPSILON?yt>Number.EPSILON&&(gt=!0):He<-Number.EPSILON?yt<-Number.EPSILON&&(gt=!0):Math.sign(xt)===Math.sign(At)&&(gt=!0),gt?(Fe=-xt,ve=He,ft=Math.sqrt(B)):(Fe=He,ve=xt,ft=Math.sqrt(B/2))}return new ye(Fe/ft,ve/ft)}let K=[];for(let de=0,we=q.length,Ee=we-1,Fe=de+1;de<we;de++,Ee++,Fe++)Ee===we&&(Ee=0),Fe===we&&(Fe=0),K[de]=le(q[de],q[Ee],q[Fe]);let ce=[],se,Ue=K.concat();for(let de=0,we=L;de<we;de++){let Ee=U[de];se=[];for(let Fe=0,ve=Ee.length,ft=ve-1,He=Fe+1;Fe<ve;Fe++,ft++,He++)ft===ve&&(ft=0),He===ve&&(He=0),se[Fe]=le(Ee[Fe],Ee[ft],Ee[He]);ce.push(se),Ue=Ue.concat(se)}let Ke;if(m===0)Ke=Mi.triangulateShape(q,U);else{let de=[],we=[];for(let Ee=0;Ee<m;Ee++){let Fe=Ee/m,ve=f*Math.cos(Fe*Math.PI/2),ft=g*Math.sin(Fe*Math.PI/2)+_;for(let He=0,xt=q.length;He<xt;He++){let yt=J(q[He],K[He],ft);ee(yt.x,yt.y,-ve),Fe===0&&de.push(yt)}for(let He=0,xt=L;He<xt;He++){let yt=U[He];se=ce[He];let At=[];for(let B=0,jt=yt.length;B<jt;B++){let gt=J(yt[B],se[B],ft);ee(gt.x,gt.y,-ve),Fe===0&&At.push(gt)}Fe===0&&we.push(At)}}Ke=Mi.triangulateShape(de,we)}let z=Ke.length,te=g+_;for(let de=0;de<X;de++){let we=d?J(I[de],Ue[de],te):I[de];v?(x.copy(T.normals[0]).multiplyScalar(we.x),A.copy(T.binormals[0]).multiplyScalar(we.y),w.copy(S[0]).add(x).add(A),ee(w.x,w.y,w.z)):ee(we.x,we.y,0)}for(let de=1;de<=h;de++)for(let we=0;we<X;we++){let Ee=d?J(I[we],Ue[we],te):I[we];v?(x.copy(T.normals[de]).multiplyScalar(Ee.x),A.copy(T.binormals[de]).multiplyScalar(Ee.y),w.copy(S[de]).add(x).add(A),ee(w.x,w.y,w.z)):ee(Ee.x,Ee.y,u/h*de)}for(let de=m-1;de>=0;de--){let we=de/m,Ee=f*Math.cos(we*Math.PI/2),Fe=g*Math.sin(we*Math.PI/2)+_;for(let ve=0,ft=q.length;ve<ft;ve++){let He=J(q[ve],K[ve],Fe);ee(He.x,He.y,u+Ee)}for(let ve=0,ft=U.length;ve<ft;ve++){let He=U[ve];se=ce[ve];for(let xt=0,yt=He.length;xt<yt;xt++){let At=J(He[xt],se[xt],Fe);v?ee(At.x,At.y+S[h-1].y,S[h-1].x+Ee):ee(At.x,At.y,u+Ee)}}}me(),Ge();function me(){let de=s.length/3;if(d){let we=0,Ee=X*we;for(let Fe=0;Fe<z;Fe++){let ve=Ke[Fe];Dt(ve[2]+Ee,ve[1]+Ee,ve[0]+Ee)}we=h+m*2,Ee=X*we;for(let Fe=0;Fe<z;Fe++){let ve=Ke[Fe];Dt(ve[0]+Ee,ve[1]+Ee,ve[2]+Ee)}}else{for(let we=0;we<z;we++){let Ee=Ke[we];Dt(Ee[2],Ee[1],Ee[0])}for(let we=0;we<z;we++){let Ee=Ke[we];Dt(Ee[0]+X*h,Ee[1]+X*h,Ee[2]+X*h)}}n.addGroup(de,s.length/3-de,0)}function Ge(){let de=s.length/3,we=0;ae(q,we),we+=q.length;for(let Ee=0,Fe=U.length;Ee<Fe;Ee++){let ve=U[Ee];ae(ve,we),we+=ve.length}n.addGroup(de,s.length/3-de,1)}function ae(de,we){let Ee=de.length;for(;--Ee>=0;){let Fe=Ee,ve=Ee-1;ve<0&&(ve=de.length-1);for(let ft=0,He=h+m*2;ft<He;ft++){let xt=X*ft,yt=X*(ft+1),At=we+Fe+xt,B=we+ve+xt,jt=we+ve+yt,gt=we+Fe+yt;$e(At,B,jt,gt)}}}function ee(de,we,Ee){l.push(de),l.push(we),l.push(Ee)}function Dt(de,we,Ee){lt(de),lt(we),lt(Ee);let Fe=s.length/3,ve=y.generateTopUV(n,s,Fe-3,Fe-2,Fe-1);dt(ve[0]),dt(ve[1]),dt(ve[2])}function $e(de,we,Ee,Fe){lt(de),lt(we),lt(Fe),lt(we),lt(Ee),lt(Fe);let ve=s.length/3,ft=y.generateSideWallUV(n,s,ve-6,ve-3,ve-2,ve-1);dt(ft[0]),dt(ft[1]),dt(ft[3]),dt(ft[1]),dt(ft[2]),dt(ft[3])}function lt(de){s.push(l[de*3+0]),s.push(l[de*3+1]),s.push(l[de*3+2])}function dt(de){r.push(de.x),r.push(de.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Ip(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Uo[s.type]().fromJSON(s)),new i(n,e.options)}},Cp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(d,1-g),new ye(_,1-p)]:[new ye(o,1-l),new ye(h,1-u),new ye(f,1-g),new ye(m,1-p)]}};function Ip(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var da=class i extends tn{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=vt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new P,d=new ye,f=new P,g=new P,_=new P,m=0,p=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:m=e[y+1].x-e[y].x,p=e[y+1].y-e[y].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let y=0;y<=t;y++){let S=n+y*h*s,v=Math.sin(S),T=Math.cos(S);for(let A=0;A<=e.length-1;A++){u.x=e[A].x*v,u.y=e[A].y,u.z=e[A].x*T,a.push(u.x,u.y,u.z),d.x=y/t,d.y=A/(e.length-1),o.push(d.x,d.y);let x=l[3*A+0]*v,w=l[3*A+1],O=l[3*A+0]*T;c.push(x,w,O)}}for(let y=0;y<t;y++)for(let S=0;S<e.length-1;S++){let v=S+y*e.length,T=v,A=v+e.length,x=v+e.length+1,w=v+1;r.push(T,A,w),r.push(x,w,A)}this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Nt=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let y=p*d-a;for(let S=0;S<c;S++){let v=S*u-r;g.push(v,-y,0),_.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){let S=y+c*p,v=y+c*(p+1),T=y+1+c*(p+1),A=y+1+c*p;f.push(S,v,A),f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var fa=class i extends tn{constructor(e=new fi([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new mt(s,3)),this.setAttribute("normal",new mt(r,3)),this.setAttribute("uv",new mt(a,2));function c(h){let u=s.length/3,d=h.extractPoints(t),f=d.shape,g=d.holes;Mi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let y=g[m];Mi.isClockWise(y)===!0&&(g[m]=y.reverse())}let _=Mi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let y=g[m];f=f.concat(y)}for(let m=0,p=f.length;m<p;m++){let y=f[m];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,p=_.length;m<p;m++){let y=_[m],S=y[0]+u,v=y[1]+u,T=y[2]+u;n.push(S,v,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Pp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Pp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ms=class i extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new P,d=new P,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let y=[],S=p/n,v=a+S*o,T=e*Math.cos(v),A=Math.sqrt(e*e-T*T),x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let O=w/t,I=s+O*r;u.x=-A*Math.cos(I),u.y=T,u.z=A*Math.sin(I),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(O+x,1-S),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<t;y++){let S=h[p][y+1],v=h[p][y],T=h[p+1][y],A=h[p+1][y+1];(p!==0||a>0)&&f.push(S,v,A),(p!==n-1||l<Math.PI)&&f.push(v,T,A)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(_,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var dr=class i extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],u=[],d=new P,f=new P,g=new P;for(let _=0;_<=n;_++){let m=a+_/n*o;for(let p=0;p<=s;p++){let y=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(y),f.y=(e+t*Math.cos(m))*Math.sin(y),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/s),u.push(_/n)}}for(let _=1;_<=n;_++)for(let m=1;m<=s;m++){let p=(s+1)*_+m-1,y=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,v=(s+1)*_+m;l.push(p,y,v),l.push(y,S,v)}this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var pa=class i extends tn{constructor(e=new xs(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ye,h=new P,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function _(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),y(),p()}function m(S){h=e.getPointAt(S/t,h);let v=a.normals[S],T=a.binormals[S];for(let A=0;A<=s;A++){let x=A/s*Math.PI*2,w=Math.sin(x),O=-Math.cos(x);l.x=O*v.x+w*T.x,l.y=O*v.y+w*T.y,l.z=O*v.z+w*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=t;S++)for(let v=1;v<=s;v++){let T=(s+1)*(S-1)+(v-1),A=(s+1)*S+(v-1),x=(s+1)*S+v,w=(s+1)*(S-1)+v;g.push(T,A,w),g.push(A,x,w)}}function y(){for(let S=0;S<=t;S++)for(let v=0;v<=s;v++)c.x=S/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Uo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ps(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(cu(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(cu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Ln(i){let e={};for(let t=0;t<i.length;t++){let n=Ps(i[t]);for(let s in n)e[s]=n[s]}return e}function cu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Dp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ch(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}var ld={clone:Ps,merge:Ln},Lp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lp,this.fragmentShader=Np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ps(e.uniforms),this.uniformsGroups=Dp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new en().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Lt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Oo=class extends Qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bt=class extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return gs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){gs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ma=class extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pa,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Ko,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bo=class extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},zo=class extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function $s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function po(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var is=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ho=class extends is{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ec,endingEnd:Ec}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case wc:r=e,o=2*t-n;break;case Tc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case wc:a=e,l=2*n-t;break;case Tc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,y=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+y*a[c+T]+S*a[l+T]+v*a[u+T];return r}},ko=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Go=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vo=class extends is{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-t)/(s-t),_=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*_+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],m=a[l+g],p=f*d+g*2,y=u[p],S=u[p+1],v=e*d+g*2,T=h[v],A=h[v+1],x=Fp(n,t,y,T,s);r[g]=cd(x,_,S,A,m)}return r}};function cd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Up(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Fp(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=cd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Up(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=$s(t,this.TimeBufferType),this.values=$s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:$s(e.times,Array),values:$s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),po(e.settings)&&(n.settings={inTangents:$s(e.settings.inTangents,Array),outTangents:$s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Go(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ko(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case Ao:t=this.InterpolantFactoryMethodLinear;break;case _o:t=this.InterpolantFactoryMethodSmooth;break;case bc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return st("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return Ao;case this.InterpolantFactoryMethodSmooth:return _o;case this.InterpolantFactoryMethodBezier:return bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;po(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;po(this.settings)&&(uu(this.settings.inTangents,e),uu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ot("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ot("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ot("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ot("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Ef(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ot("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===_o,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,po(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function uu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Ao;var ss=class extends Xn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Vr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Wo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Wo.prototype.ValueTypeName="color";var Xo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="number";var qo=class extends is{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)bi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ga=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new qo(this.times,this.values,this.getValueSize(),e)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Xn{constructor(e,t,n){super(e,t,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Vr;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Yo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Yo.prototype.ValueTypeName="vector";var Zo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},hd=new Zo,$o=class{constructor(e){this.manager=e!==void 0?e:hd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};$o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ss=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},_a=class extends Ss{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Sc=new Lt,du=new P,fu=new P,xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ns,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;du.setFromMatrixPosition(e.matrixWorld),t.position.copy(du),fu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Sc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Sc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===tr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Sc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},mo=new P,go=new bi,yi=new P,ya=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mo,go,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,yi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(mo,go,yi),yi.x===1&&yi.y===1&&yi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mo,go,yi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ji=new P,pu=new ye,mu=new ye,Pn=class extends ya{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ir*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ir*2*Math.atan(Math.tan(zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ic=class extends xa{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}},bs=class extends Ss{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ic}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Es=class extends ya{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pc=class extends xa{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},va=class extends Ss{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Pc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ma=class extends Ss{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Js=-90,Ks=1,fr=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pn(Js,Ks,e,t);s.layers=this.layers,this.add(s);let r=new Pn(Js,Ks,e,t);r.layers=this.layers,this.add(r);let a=new Pn(Js,Ks,e,t);a.layers=this.layers,this.add(a);let o=new Pn(Js,Ks,e,t);o.layers=this.layers,this.add(o);let l=new Pn(Js,Ks,e,t);l.layers=this.layers,this.add(l);let c=new Pn(Js,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Jo=class extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var hh="\\[\\]\\.:\\/",Op=new RegExp("["+hh+"]","g"),uh="[^"+hh+"]",Bp="[^"+hh.replace("\\.","")+"]",zp=/((?:WC+[\/:])*)/.source.replace("WC",uh),Hp=/(WCOD+)?/.source.replace("WCOD",Bp),kp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",uh),Gp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",uh),Vp=new RegExp("^"+zp+Hp+kp+Gp+"$"),Wp=["material","materials","bones","map"],Dc=class{constructor(e,t,n){let s=n||Kt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Kt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Op,"")}static parseTrackName(e){let t=Vp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Wp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){st("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Kt.Composite=Dc;Kt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Kt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Kt.prototype.GetterByBindingType=[Kt.prototype._getValue_direct,Kt.prototype._getValue_array,Kt.prototype._getValue_arrayElement,Kt.prototype._getValue_toArray];Kt.prototype.SetterByBindingTypeAndVersioning=[[Kt.prototype._setValue_direct,Kt.prototype._setValue_direct_setNeedsUpdate,Kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_array,Kt.prototype._setValue_array_setNeedsUpdate,Kt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_arrayElement,Kt.prototype._setValue_arrayElement_setNeedsUpdate,Kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Kt.prototype._setValue_fromArray,Kt.prototype._setValue_fromArray_setNeedsUpdate,Kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Wx=new Float32Array(1);var gu=new Lt,Sa=class{constructor(e,t,n=0,s=1/0){this.ray=new ts(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new rr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ot("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(e,t=!0,n=[]){return Lc(e,this,n,t),n.sort(_u),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Lc(e[s],this,n,t);return n.sort(_u),n}};function _u(i,e){return i.distance-e.distance}function Lc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Lc(r[a],e,t,!0)}}var Nc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function dh(i,e,t,n){let s=Xp(n);switch(t){case Qc:return i*e;case sl:return i*e/s.components*s.byteLength;case rl:return i*e/s.components*s.byteLength;case as:return i*e*2/s.components*s.byteLength;case al:return i*e*2/s.components*s.byteLength;case jc:return i*e*3/s.components*s.byteLength;case gi:return i*e*4/s.components*s.byteLength;case ol:return i*e*4/s.components*s.byteLength;case wa:case Ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cl:case ul:return Math.max(i,16)*Math.max(e,8)/4;case ll:case hl:return Math.max(i,8)*Math.max(e,8)/2;case dl:case fl:case ml:case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pl:case Ca:case _l:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case vl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case El:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Il:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Pl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Dl:case Ll:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ul:case Fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ia:case Ol:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Xp(i){switch(i){case kn:case Zc:return{byteLength:1,components:1};case _r:case $c:case mi:return{byteLength:2,components:1};case nl:case il:return{byteLength:2,components:4};case pi:case tl:case jn:return{byteLength:4,components:1};case Jc:case Kc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Dd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Yp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Zp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$p=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Jp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,em=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,im=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,am=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,om=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Im=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Um=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,km=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Zm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$m=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ig=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ag=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_g=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Eg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ag=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Ig=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ng=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Og=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,e0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,t0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,n0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,i0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,h0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,d0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,p0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,m0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,g0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,x0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:Zp,alphahash_pars_fragment:$p,alphamap_fragment:Jp,alphamap_pars_fragment:Kp,alphatest_fragment:Qp,alphatest_pars_fragment:jp,aomap_fragment:em,aomap_pars_fragment:tm,batching_pars_vertex:nm,batching_vertex:im,begin_vertex:sm,beginnormal_vertex:rm,bsdfs:am,iridescence_fragment:om,bumpmap_pars_fragment:lm,clipping_planes_fragment:cm,clipping_planes_pars_fragment:hm,clipping_planes_pars_vertex:um,clipping_planes_vertex:dm,color_fragment:fm,color_pars_fragment:pm,color_pars_vertex:mm,color_vertex:gm,common:_m,defaultnormal_vertex:xm,displacementmap_pars_vertex:ym,displacementmap_vertex:vm,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:wm,envmap_common_pars_fragment:Tm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Im,fog_pars_vertex:Pm,fog_fragment:Dm,fog_pars_fragment:Lm,gradientmap_pars_fragment:Nm,lightmap_pars_fragment:Um,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:Hm,lights_toon_pars_fragment:km,lights_phong_fragment:Gm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:Zm,lightprobes_pars_fragment:$m,logdepthbuf_fragment:Jm,logdepthbuf_pars_fragment:Km,logdepthbuf_pars_vertex:Qm,logdepthbuf_vertex:jm,map_fragment:eg,map_pars_fragment:tg,map_particle_fragment:ng,map_particle_pars_fragment:ig,metalnessmap_fragment:sg,metalnessmap_pars_fragment:rg,morphinstance_vertex:ag,morphcolor_vertex:og,morphnormal_vertex:lg,morphtarget_pars_vertex:cg,morphtarget_vertex:hg,normal_fragment_begin:ug,normal_fragment_maps:dg,normal_pars_fragment:fg,normal_pars_vertex:pg,normal_vertex:mg,normalmap_pars_fragment:gg,clearcoat_normal_fragment_begin:_g,clearcoat_normal_fragment_maps:xg,clearcoat_pars_fragment:yg,iridescence_pars_fragment:vg,opaque_fragment:Mg,packing:Sg,premultiplied_alpha_fragment:bg,project_vertex:Eg,dithering_fragment:wg,dithering_pars_fragment:Tg,roughnessmap_fragment:Ag,roughnessmap_pars_fragment:Rg,shadowmap_pars_fragment:Cg,shadowmap_pars_vertex:Ig,shadowmap_vertex:Pg,shadowmask_pars_fragment:Dg,skinbase_vertex:Lg,skinning_pars_vertex:Ng,skinning_vertex:Ug,skinnormal_vertex:Fg,specularmap_fragment:Og,specularmap_pars_fragment:Bg,tonemapping_fragment:zg,tonemapping_pars_fragment:Hg,transmission_fragment:kg,transmission_pars_fragment:Gg,uv_pars_fragment:Vg,uv_pars_vertex:Wg,uv_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:Zg,backgroundCube_vert:$g,backgroundCube_frag:Jg,cube_vert:Kg,cube_frag:Qg,depth_vert:jg,depth_frag:e0,distance_vert:t0,distance_frag:n0,equirect_vert:i0,equirect_frag:s0,linedashed_vert:r0,linedashed_frag:a0,meshbasic_vert:o0,meshbasic_frag:l0,meshlambert_vert:c0,meshlambert_frag:h0,meshmatcap_vert:u0,meshmatcap_frag:d0,meshnormal_vert:f0,meshnormal_frag:p0,meshphong_vert:m0,meshphong_frag:g0,meshphysical_vert:_0,meshphysical_frag:x0,meshtoon_vert:y0,meshtoon_frag:v0,points_vert:M0,points_frag:S0,shadow_vert:b0,shadow_frag:E0,sprite_vert:w0,sprite_frag:T0},Oe={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ii={basic:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Ln([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Ln([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Ln([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new at(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Ln([Oe.points,Oe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Ln([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Ln([Oe.common,Oe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Ln([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Ln([Oe.sprite,Oe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Ln([Oe.common,Oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Ln([Oe.lights,Oe.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ii.physical={uniforms:Ln([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Bl={r:0,b:0,g:0},A0=new Lt,Ld=new ht;Ld.set(-1,0,0,0,1,0,0,0,1);function R0(i,e,t,n,s,r){let a=new at(0),o=s===!0?0:1,l,c,h=null,u=0,d=null;function f(y){let S=y.isScene===!0?y.background:null;if(S&&S.isTexture){let v=y.backgroundBlurriness>0;S=e.get(S,v)}return S}function g(y){let S=!1,v=f(y);v===null?m(a,o):v&&v.isColor&&(m(v,1),S=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,S){let v=f(S);v&&v.isCubeTexture?(c===void 0&&(c=new We(new un(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Ps(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(A0.makeRotationFromEuler(S.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ld),c.material.toneMapped=Et.getTransfer(v.colorSpace)!==Ot,(h!==v||u!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new We(new Nt(2,2),new Qn({name:"BackgroundMaterial",uniforms:Ps(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Et.getTransfer(v.colorSpace)!==Ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||u!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,u=v.version,d=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,S){y.getRGB(Bl,ch(i)),t.buffers.color.setClear(Bl.r,Bl.g,Bl.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,S=1){a.set(y),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:_,dispose:p}}function C0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,H,Y,L,q){let J=!1,X=u(U,L,Y,H);r!==X&&(r=X,c(r.object)),J=f(U,L,Y,q),J&&g(U,L,Y,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,v(U,H,Y,L),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function u(U,H,Y,L){let q=L.wireframe===!0,J=n[H.id];J===void 0&&(J={},n[H.id]=J);let X=U.isInstancedMesh===!0?U.id:0,le=J[X];le===void 0&&(le={},J[X]=le);let K=le[Y.id];K===void 0&&(K={},le[Y.id]=K);let ce=K[q];return ce===void 0&&(ce=d(l()),K[q]=ce),ce}function d(U){let H=[],Y=[],L=[];for(let q=0;q<t;q++)H[q]=0,Y[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:L,object:U,attributes:{},index:null}}function f(U,H,Y,L){let q=r.attributes,J=H.attributes,X=0,le=Y.getAttributes();for(let K in le)if(le[K].location>=0){let se=q[K],Ue=J[K];if(Ue===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(Ue=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(Ue=U.instanceColor)),se===void 0||se.attribute!==Ue||Ue&&se.data!==Ue.data)return!0;X++}return r.attributesNum!==X||r.index!==L}function g(U,H,Y,L){let q={},J=H.attributes,X=0,le=Y.getAttributes();for(let K in le)if(le[K].location>=0){let se=J[K];se===void 0&&(K==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),K==="instanceColor"&&U.instanceColor&&(se=U.instanceColor));let Ue={};Ue.attribute=se,se&&se.data&&(Ue.data=se.data),q[K]=Ue,X++}r.attributes=q,r.attributesNum=X,r.index=L}function _(){let U=r.newAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]=0}function m(U){p(U,0)}function p(U,H){let Y=r.newAttributes,L=r.enabledAttributes,q=r.attributeDivisors;Y[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),q[U]!==H&&(i.vertexAttribDivisor(U,H),q[U]=H)}function y(){let U=r.newAttributes,H=r.enabledAttributes;for(let Y=0,L=H.length;Y<L;Y++)H[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function S(U,H,Y,L,q,J,X){X===!0?i.vertexAttribIPointer(U,H,Y,q,J):i.vertexAttribPointer(U,H,Y,L,q,J)}function v(U,H,Y,L){_();let q=L.attributes,J=Y.getAttributes(),X=H.defaultAttributeValues;for(let le in J){let K=J[le];if(K.location>=0){let ce=q[le];if(ce===void 0&&(le==="instanceMatrix"&&U.instanceMatrix&&(ce=U.instanceMatrix),le==="instanceColor"&&U.instanceColor&&(ce=U.instanceColor)),ce!==void 0){let se=ce.normalized,Ue=ce.itemSize,Ke=e.get(ce);if(Ke===void 0)continue;let z=Ke.buffer,te=Ke.type,me=Ke.bytesPerElement,Ge=te===i.INT||te===i.UNSIGNED_INT||ce.gpuType===tl;if(ce.isInterleavedBufferAttribute){let ae=ce.data,ee=ae.isInterleavedBuffer===!0?ae.stride:ae.itemSize,Dt=ce.offset;if(ae.isInstancedInterleavedBuffer||ae.isInstancedBufferAttribute){for(let $e=0;$e<K.locationSize;$e++)p(K.location+$e,ae.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let $e=0;$e<K.locationSize;$e++)m(K.location+$e);i.bindBuffer(i.ARRAY_BUFFER,z);for(let $e=0;$e<K.locationSize;$e++)S(K.location+$e,Ue/K.locationSize,te,se,ee*me,(Dt+Ue/K.locationSize*$e)*me,Ge)}else{if(ce.isInstancedBufferAttribute){for(let ae=0;ae<K.locationSize;ae++)p(K.location+ae,ce.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ae=0;ae<K.locationSize;ae++)m(K.location+ae);i.bindBuffer(i.ARRAY_BUFFER,z);for(let ae=0;ae<K.locationSize;ae++)S(K.location+ae,Ue/K.locationSize,te,se,Ue*me,Ue/K.locationSize*ae*me,Ge)}}else if(X!==void 0){let se=X[le];if(se!==void 0)switch(se.length){case 2:i.vertexAttrib2fv(K.location,se);break;case 3:i.vertexAttrib3fv(K.location,se);break;case 4:i.vertexAttrib4fv(K.location,se);break;default:i.vertexAttrib1fv(K.location,se)}}}}y()}function T(){O();for(let U in n){let H=n[U];for(let Y in H){let L=H[Y];for(let q in L){let J=L[q];for(let X in J)h(J[X].object),delete J[X];delete L[q]}}delete n[U]}}function A(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let Y in H){let L=H[Y];for(let q in L){let J=L[q];for(let X in J)h(J[X].object),delete J[X];delete L[q]}}delete n[U.id]}function x(U){for(let H in n){let Y=n[H];for(let L in Y){let q=Y[L];if(q[U.id]===void 0)continue;let J=q[U.id];for(let X in J)h(J[X].object),delete J[X];delete q[U.id]}}}function w(U){for(let H in n){let Y=n[H],L=U.isInstancedMesh===!0?U.id:0,q=Y[L];if(q!==void 0){for(let J in q){let X=q[J];for(let le in X)h(X[le].object),delete X[le];delete q[J]}delete Y[L],Object.keys(Y).length===0&&delete n[H]}}}function O(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:w,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:m,disableUnusedAttributes:y}}function I0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function P0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==gi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let w=x===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==kn&&x!==jn&&!w&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(st("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&u===!1;t.reversedDepthBuffer===!0&&u===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&u===!0&&st("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,maxSamples:T,samples:A}}function D0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ui,o=new ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let y=r?0:n,S=y*4,v=p.clippingState||null;l.value=v,v=h(g,d,S,f);for(let T=0;T!==S;++T)v[T]=t[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)a.copy(u[S]).applyMatrix4(y,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Na=class extends Un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ea(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new un(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Ps(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:Ts});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===Vi&&(t.minFilter=Nn),new fr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},ud=256,L0=3,N0=20,Nd=256,Ud=16,U0=3,F0=new P,O0=new at,yr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fr(1,10,null),this._boxMesh=new We(new un(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=F0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let u=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(O0));let m=new fr(n,s,h);return m.position.copy(o),m.update(l,e),l.autoClear=u,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ud,ah(e))}_fromTexture(e,t){e.mapping===Rs||e.mapping===gr?this._setSize(e.image.length===0?ud:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=dd(e,!1,!1),n=Math.log2(e)-L0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=dd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Rs||e.mapping===gr?(this._cubemapMaterial===null&&(this._cubemapMaterial=pd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=fd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=B0(),this._integrationMaterial=z0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Ud);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-U0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Nd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=H0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function dd(i,e,t){return new Na(i,{minFilter:Vi,generateMipmaps:e,type:mi,colorSpace:Wr,depthBuffer:t})}function Ua(i,e,t){return new Qn({name:i,uniforms:e,vertexShader:Mt.cube_vert,fragmentShader:t,side:An,blending:Ts,depthTest:!1,depthWrite:!1})}function B0(){return Ua("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Nd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function z0(){return Ua("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Ud}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function H0(){return Ua("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${N0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function fd(){return Ua("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function pd(){return Ua("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function k0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Qo||f===jo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let _=new Na(g.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Qo||f===jo,_=f===Rs||f===gr;if(g||_){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new yr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let y=d.image;return g&&y&&y.height>0||_&&y&&l(y)?(n===null&&(n=new yr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Qo?d.mapping=Rs:f===jo&&(d.mapping=gr),d}function l(d){let f=0,g=6;for(let _=0;_<g;_++)d[_]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function G0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&gs("WebGLRenderer: "+n+" extension not supported."),s}}}function V0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let m in _)e.update(_[m],i.ARRAY_BUFFER)}function u(g){let _=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let y=_!==null?_.array.length:m.array.length/3-1,S=m.count>=65535?Jr:$r,v=new S(Math.ceil(y/3)*6,1),T=v.array;if(_!==null){let x=_.array;p=_.version;for(let w=0,O=0;w<y;w+=3){let I=x[w+0],U=x[w+1],H=x[w+2];T[O++]=I,T[O++]=U,T[O++]=U,T[O++]=H,T[O++]=H,T[O++]=I}}else{p=m.version;for(let x=0,w=0;x<y;x+=3){let O=x+0,I=x+1,U=x+2;T[w++]=O,T[w++]=I,T[w++]=I,T[w++]=U,T[w++]=U,T[w++]=O}}v.version=p;let A=r.get(g);A&&e.remove(A),r.set(g,v)}function d(g){let _=r.get(g);if(_){let m=g.index;m!==null&&_.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:d,dispose:f}}function W0(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*a,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,f);let _=0;for(let m=0;m<f;m++)_+=d[m];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function X0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function q0(i,e,t){let n=new WeakMap,s=new en;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let O=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let v=o.attributes.position.count*S,T=1;v>e.maxTextureSize&&(T=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let A=new Float32Array(v*T*4*u),x=new Yr(A,v,T,u);x.type=jn,x.needsUpdate=!0;let w=S*4;for(let I=0;I<u;I++){let U=m[I],H=p[I],Y=y[I],L=v*T*4*I;for(let q=0;q<U.count;q++){let J=q*w;f===!0&&(s.fromBufferAttribute(U,q),A[L+J+0]=s.x,A[L+J+1]=s.y,A[L+J+2]=s.z,A[L+J+3]=0),g===!0&&(s.fromBufferAttribute(H,q),A[L+J+4]=s.x,A[L+J+5]=s.y,A[L+J+6]=s.z,A[L+J+7]=0),_===!0&&(s.fromBufferAttribute(Y,q),A[L+J+8]=s.x,A[L+J+9]=s.y,A[L+J+10]=s.z,A[L+J+11]=Y.itemSize===4?s.w:1)}}d={count:u,texture:x,size:new ye(v,T)},n.set(o,d),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Y0(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var Z0={[kc]:"LINEAR_TONE_MAPPING",[Gc]:"REINHARD_TONE_MAPPING",[Vc]:"CINEON_TONE_MAPPING",[ba]:"ACES_FILMIC_TONE_MAPPING",[Xc]:"AGX_TONE_MAPPING",[qc]:"NEUTRAL_TONE_MAPPING",[Wc]:"CUSTOM_TONE_MAPPING"};function $0(i,e,t,n,s,r){let a=new Un(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new tn;h.setAttribute("position",new mt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new mt([0,2,0,0,2,0],2));let u=new Oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new We(h,u),f=new Es(-1,1,1,-1,0,1),g=null,_=null,m=!1,p,y=null,S=[],v=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let x=0;x<S.length;x++){let w=S[x];w.setSize&&w.setSize(T,A)}},this.setEffects=function(T){S=T,v=S.length>0&&S[0].isRenderPass===!0;let A=a.width,x=a.height;S.length>0&&o===null&&(o=new Un(A,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}),l=new Un(A,x,{type:mi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&S.some(O=>O.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new ki(A,x),r===!0&&(c.format=Wi,c.type=Cs)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let O=0;O<S.length;O++){let I=S[O];I.setSize&&I.setSize(A,x),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===Ai&&S.length===0)return!1;if(y=A,A!==null){let x=A.width,w=A.height;(a.width!==x||a.height!==w)&&this.setSize(x,w)}return v===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Ai,!0},this.hasRenderPass=function(){return v},this.end=function(T,A){T.toneMapping=p,m=!0;let x=a,w=o;for(let O=0;O<S.length;O++){let I=S[O];I.enabled!==!1&&(I.render(T,w,x,A),I.needsSwap!==!1&&(x=w,w=w===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,u.defines={},Et.getTransfer(g)===Ot&&(u.defines.SRGB_TRANSFER="");let O=Z0[_];O&&(u.defines[O]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(y),T.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var Fd=new pn,Od=new ki(1,1),Bd=new ta(1),zd=new Yr,Hd=new Io,kd=new ea,md=[],gd=[],_d=new Float32Array(16),xd=new Float32Array(9),yd=new Float32Array(4);function vr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=md[s];if(r===void 0&&(r=new Float32Array(s),md[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function J0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Q0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;yd.set(n),i.uniformMatrix2fv(this.addr,!1,yd),gn(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;xd.set(n),i.uniformMatrix3fv(this.addr,!1,xd),gn(t,n)}}function n_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;_d.set(n),i.uniformMatrix4fv(this.addr,!1,_d),gn(t,n)}}function i_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Gl(i){return i.version===0&&(i.compareFunction=nh,i.needsUpdate=!0),i}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Gl(Od):r=Fd,t.setTexture2D(e||r,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Hd,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Gl(Bd):r=kd,t.setTextureCube(e||r,s)}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zd,s)}function m_(i){switch(i){case 5126:return J0;case 35664:return K0;case 35665:return Q0;case 35666:return j0;case 35674:return e_;case 35675:return t_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}function g_(i,e){i.uniform1fv(this.addr,e)}function __(i,e){let t=vr(e,this.size,2);i.uniform2fv(this.addr,t)}function x_(i,e){let t=vr(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=vr(e,this.size,4);i.uniform4fv(this.addr,t)}function v_(i,e){let t=vr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function M_(i,e){let t=vr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function S_(i,e){let t=vr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function b_(i,e){i.uniform1iv(this.addr,e)}function E_(i,e){i.uniform2iv(this.addr,e)}function w_(i,e){i.uniform3iv(this.addr,e)}function T_(i,e){i.uniform4iv(this.addr,e)}function A_(i,e){i.uniform1uiv(this.addr,e)}function R_(i,e){i.uniform2uiv(this.addr,e)}function C_(i,e){i.uniform3uiv(this.addr,e)}function I_(i,e){i.uniform4uiv(this.addr,e)}function P_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Gl(Od):a=Fd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function D_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Hd,r[a])}function L_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Gl(Bd):a=kd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function N_(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zd,r[a])}function U_(i){switch(i){case 5126:return g_;case 35664:return __;case 35665:return x_;case 35666:return y_;case 35674:return v_;case 35675:return M_;case 35676:return S_;case 5124:case 35670:return b_;case 35667:case 35671:return E_;case 35668:case 35672:return w_;case 35669:case 35673:return T_;case 5125:return A_;case 36294:return R_;case 36295:return C_;case 36296:return I_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return D_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return N_}}var mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m_(t.type)}},gh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},fh=/(\w+)(\])?(\[|\.)?/g;function vd(i,e){i.seq.push(e),i.map[e.id]=e}function F_(i,e,t){let n=i.name,s=n.length;for(fh.lastIndex=0;;){let r=fh.exec(n),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vd(t,c===void 0?new mh(o,i,e):new gh(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new _h(o),vd(t,u)),t=u}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);F_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Md(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var O_=37297,B_=0;function z_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Sd=new ht;function H_(i){Et._getMatrix(Sd,Et.workingColorSpace,i);let e=`mat3( ${Sd.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case Ot:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function bd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+z_(i.getShaderSource(e),o)}else return r}function k_(i,e){let t=H_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var G_={[kc]:"Linear",[Gc]:"Reinhard",[Vc]:"Cineon",[ba]:"ACESFilmic",[Xc]:"AgX",[qc]:"Neutral",[Wc]:"Custom"};function V_(i,e){let t=G_[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var zl=new P;function W_(){Et.getLuminanceCoefficients(zl);let i=zl.x.toFixed(4),e=zl.y.toFixed(4),t=zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function q_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Y_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function La(i){return i!==""}function Ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function wd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Z_=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(Z_,$_)}function $_(i,e){let t=Mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xh(t)}var J_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(J_,K_)}function K_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ad(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Q_={[ws]:"SHADOWMAP_TYPE_PCF",[pr]:"SHADOWMAP_TYPE_VSM"};function j_(i){return Q_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ex={[gr]:"ENVMAP_MODE_REFRACTION"};function tx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ex[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var nx={[Ko]:"ENVMAP_BLENDING_MULTIPLY",[zu]:"ENVMAP_BLENDING_MIX",[Hu]:"ENVMAP_BLENDING_ADD"};function ix(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":nx[i.combine]||"ENVMAP_BLENDING_NONE"}function sx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=j_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=tx(t),u=ix(t),d=X_(t),f=q_(r),g=s.createProgram(),_,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(La).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(La).join(`
`),m.length>0&&(m+=`
`)):(_=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),m=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?V_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),W_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=xh(a),a=Ed(a,t),a=wd(a,t),o=xh(o),o=Ed(o,t),o=wd(o,t),a=Td(a),o=Td(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===ih?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ih?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=p+_+a,S=p+m+o,v=Md(s,s.VERTEX_SHADER,y),T=Md(s,s.FRAGMENT_SHADER,S);s.attachShader(g,v),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(v)||"",Y=s.getShaderInfoLog(T)||"",L=U.trim(),q=H.trim(),J=Y.trim(),X=!0,le=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,T);else{let K=bd(s,v,"vertex"),ce=bd(s,T,"fragment");ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+L+`
`+K+`
`+ce)}else L!==""?st("WebGLProgram: Program Info Log:",L):(q===""||J==="")&&(le=!1);le&&(I.diagnostics={runnable:X,programLog:L,vertexShader:{log:q,prefix:_},fragmentShader:{log:J,prefix:m}})}s.deleteShader(v),s.deleteShader(T),x=new xr(s,g),w=Y_(s,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,O_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=T,this}var rx=0,yh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new vh(e),t.set(e,n)),n}},vh=class{constructor(e){this.id=rx++,this.code=e,this.usedTimes=0}};function ax(i){return i===as||i===Ca||i===Ia}function ox(i,e,t,n,s,r){let a=new rr,o=new yh,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,w,O,I,U,H){let Y=I.fog,L=U.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?I.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,X=e.get(x.envMap||q,J),le=d[x.type],K=n.precision;x.precision!==null&&(K=n.getMaxPrecision(x.precision),K!==x.precision&&st("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));let ce=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,se=ce!==void 0?ce.length:0,Ue=0;L.morphAttributes.position!==void 0&&(Ue=1),L.morphAttributes.normal!==void 0&&(Ue=2),L.morphAttributes.color!==void 0&&(Ue=3);let Ke,z,te,me;if(le){let Ne=Ii[le];Ke=Ne.vertexShader,z=Ne.fragmentShader}else{Ke=x.vertexShader,z=x.fragmentShader;let Ne=o.getVertexShaderStage(x),Ut=o.getFragmentShaderStage(x);o.update(x,Ne,Ut),te=Ne.id,me=Ut.id}let Ge=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),ee=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,$e=!!x.map,lt=!!x.matcap,dt=!!X,de=dt&&X.isPMREMTexture===!0,we=!!x.aoMap,Ee=!!x.lightMap,Fe=!!x.bumpMap&&x.wireframe===!1,ve=!!x.normalMap,ft=!!x.displacementMap,He=!!x.emissiveMap,xt=!!x.metalnessMap,yt=!!x.roughnessMap,At=x.anisotropy>0,B=x.clearcoat>0,jt=x.diffuseRoughness>0,gt=x.dispersion>0,Bt=x.retroreflectivity>0,Re=x.iridescence>0,Jt=x.sheen>0,Xe=x.transmission>0,it=At&&!!x.anisotropyMap,C=B&&!!x.clearcoatMap,b=B&&!!x.clearcoatNormalMap,G=B&&!!x.clearcoatRoughnessMap,xe=jt&&!!x.diffuseRoughnessMap,he=Re&&!!x.iridescenceMap,Ae=Re&&!!x.iridescenceThicknessMap,Pe=Jt&&!!x.sheenColorMap,ne=Jt&&!!x.sheenRoughnessMap,ie=!!x.specularMap,Ce=!!x.specularColorMap,N=!!x.specularIntensityMap,oe=Xe&&!!x.transmissionMap,j=Xe&&!!x.thicknessMap,ge=!!x.gradientMap,be=!!x.alphaMap,Ie=x.alphaTest>0,Je=!!x.alphaHash,pt=!!x.extensions,Me=Ai;x.toneMapped&&(Ge===null||Ge.isXRRenderTarget===!0)&&(Me=i.toneMapping);let je=de?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ut={shaderID:le,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:z,defines:x.defines,customVertexShaderID:te,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:ee,instancingColor:ee&&U.instanceColor!==null,instancingMorph:ee&&U.morphTexture!==null,outputColorSpace:Ge===null?i.outputColorSpace:Ge.isXRRenderTarget===!0?Ge.texture.colorSpace:Et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:$e,matcap:lt,envMap:dt,envMapMode:dt&&X.mapping,envMapPMREM:de,envMapMaxLod:de?je.length-1:null,envMapSize:de?je[0].width:null,aoMap:we,lightMap:Ee,bumpMap:Fe,normalMap:ve,displacementMap:ft,emissiveMap:He,normalMapObjectSpace:ve&&x.normalMapType===Vu,normalMapTangentSpace:ve&&x.normalMapType===Pa,packedNormalMap:ve&&x.normalMapType===Pa&&ax(x.normalMap.format),metalnessMap:xt,roughnessMap:yt,anisotropy:At,anisotropyMap:it,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:b,clearcoatRoughnessMap:G,diffuseRoughness:jt,diffuseRoughnessMap:xe,dispersion:gt,retroreflection:Bt,iridescence:Re,iridescenceMap:he,iridescenceThicknessMap:Ae,sheen:Jt,sheenColorMap:Pe,sheenRoughnessMap:ne,specularMap:ie,specularColorMap:Ce,specularIntensityMap:N,transmission:Xe,transmissionMap:oe,thicknessMap:j,gradientMap:ge,opaque:x.transparent===!1&&x.blending===mr&&x.alphaToCoverage===!1,alphaMap:be,alphaTest:Ie,alphaHash:Je,combine:x.combine,mapUv:$e&&f(x.map.channel),aoMapUv:we&&f(x.aoMap.channel),lightMapUv:Ee&&f(x.lightMap.channel),bumpMapUv:Fe&&f(x.bumpMap.channel),normalMapUv:ve&&f(x.normalMap.channel),displacementMapUv:ft&&f(x.displacementMap.channel),emissiveMapUv:He&&f(x.emissiveMap.channel),metalnessMapUv:xt&&f(x.metalnessMap.channel),roughnessMapUv:yt&&f(x.roughnessMap.channel),anisotropyMapUv:it&&f(x.anisotropyMap.channel),clearcoatMapUv:C&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:b&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:xe&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:he&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ne&&f(x.sheenRoughnessMap.channel),specularMapUv:ie&&f(x.specularMap.channel),specularColorMapUv:Ce&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:oe&&f(x.transmissionMap.channel),thicknessMapUv:j&&f(x.thicknessMap.channel),alphaMapUv:be&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(ve||At),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&($e||be),fog:!!Y,useFog:x.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&ve===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ae,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.filter(Ne=>Ne.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:$e&&x.map.isVideoTexture===!0&&Et.getTransfer(x.map.colorSpace)===Ot,decodeVideoTextureEmissive:He&&x.emissiveMap.isVideoTexture===!0&&Et.getTransfer(x.emissiveMap.colorSpace)===Ot,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Qt,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:pt&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&x.extensions.multiDraw===!0||Dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function _(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let O in x.defines)w.push(O),w.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(m(w,x),p(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapPMREM),x.push(w.envMapMaxLod),x.push(w.envMapSize),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.diffuseRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.numLightProbeGrids),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function p(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function y(x){let w=d[x.type],O;if(w){let I=Ii[w];O=ld.clone(I.uniforms)}else O=x.uniforms;return O}function S(x,w){let O=h.get(w);return O!==void 0?++O.usedTimes:(O=new sx(i,w,x,s),c.push(O),h.set(w,O)),O}function v(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:y,acquireProgram:S,releaseProgram:v,releaseShaderCache:T,programs:c,dispose:A}}function lx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function cx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Rd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,_,m,p){let y=i[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},i[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=_,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,g,_,m,p,y){y.reversedDepth===!0&&(m=-m);let S=o(d,f,g,_,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(d,f,g,_,m,p){let y=o(d,f,g,_,m,p);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function h(d,f){t.length>1&&t.sort(d||cx),n.length>1&&n.sort(f||Rd),s.length>1&&s.sort(f||Rd)}function u(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function hx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cd,i.set(n,[a])):s>=r.length?(a=new Cd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new at};break;case"SpotLight":t={position:new P,direction:new P,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function dx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var fx=0;function px(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function mx(i){let e=new ux,t=dx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Lt,a=new Lt;function o(c){let h=0,u=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,y=0,S=0,v=0,T=0,A=0,x=0,w=0,O=0,I=0;c.sort(px);for(let H=0,Y=c.length;H<Y;H++){let L=c[H],q=L.color,J=L.intensity,X=L.distance,le=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===as?le=L.shadow.map.texture:le=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=q.r*J,u+=q.g*J,d+=q.b*J;else if(L.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(L.sh.coefficients[K],J);I++}else if(L.isSunLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ce=L.shadow,se=t.get(L);se.shadowIntensity=ce.intensity,se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize.copy(ce.mapSize).multiply(ce.getFrameExtents()),n.sunShadow[g]=se,n.sunShadowMap[g]=le;let Ue=ce.getViewportCount();for(let Ke=0;Ke<Ue;Ke++)n.sunShadowMatrix[_+Ke]=ce.getMatrix(Ke),n.sunShadowCascade[_+Ke]=ce._cascadeData[Ke];_+=Ue,g++}n.sun[f]=K,f++}else if(L.isDirectionalLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let ce=L.shadow,se=t.get(L);se.shadowIntensity=ce.intensity,se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,n.directionalShadow[m]=se,n.directionalShadowMap[m]=le,n.directionalShadowMatrix[m]=L.shadow.matrix,T++}n.directional[m]=K,m++}else if(L.isSpotLight){let K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(q).multiplyScalar(J),K.distance=X,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,n.spot[y]=K;let ce=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,ce.updateMatrices(L),L.castShadow&&O++),n.spotLightMatrix[y]=ce.matrix,L.castShadow){let se=t.get(L);se.shadowIntensity=ce.intensity,se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,n.spotShadow[y]=se,n.spotShadowMap[y]=le,x++}y++}else if(L.isRectAreaLight){let K=e.get(L);K.color.copy(q).multiplyScalar(J),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=K,S++}else if(L.isPointLight){let K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){let ce=L.shadow,se=t.get(L);se.shadowIntensity=ce.intensity,se.shadowBias=ce.bias,se.shadowNormalBias=ce.normalBias,se.shadowRadius=ce.radius,se.shadowMapSize=ce.mapSize,se.shadowCameraNear=ce.camera.near,se.shadowCameraFar=ce.camera.far,n.pointShadow[p]=se,n.pointShadowMap[p]=le,n.pointShadowMatrix[p]=L.shadow.matrix,A++}n.point[p]=K,p++}else if(L.isHemisphereLight){let K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(J),K.groundColor.copy(L.groundColor).multiplyScalar(J),n.hemi[v]=K,v++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==y||U.rectAreaLength!==S||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==T||U.numPointShadows!==A||U.numSpotShadows!==x||U.numSpotMaps!==w||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=y,n.rectArea.length=S,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+w-O,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=I,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=y,U.rectAreaLength=S,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=T,U.numPointShadows=A,U.numSpotShadows=x,U.numSpotMaps=w,U.numLightProbes=I,n.version=fx++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let y=0,S=c.length;y<S;y++){let v=c[y];if(v.isSunLight){let T=n.sun[u];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let T=n.directional[d];T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),d++}else if(v.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let T=n.rectArea[_];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),T.halfWidth.set(v.width*.5,0,0),T.halfHeight.set(0,v.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(v.matrixWorld),T.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(v.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Id(i){let e=new mx(i),t=[],n=[],s=[];function r(u){h.camera=u,t.length=0,n.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):t.push(u)}function o(u){n.push(u)}function l(){e.setup(t),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function c(u){e.setupView(t,u)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function gx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Id(i),e.set(s,[o])):r>=a.length?(o=new Id(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var _x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yx=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],vx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Pd=new Lt,Da=new P,ph=new P;function Mx(i,e,t){let n=new ns,s=new ye,r=new ye,a=new en,o=new Bo,l=new zo,c={},h=t.maxTextureSize,u={[Ti]:An,[An]:Ti,[Qt]:Qt},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:_x,fragmentShader:xx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ws;let p=this.type;this.render=function(A,x,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===vu&&(st("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ws);let O=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Ts),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=p!==this.type;Y&&x.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(q=>q.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,q=A.length;L<q;L++){let J=A[L],X=J.shadow;if(X===void 0){st("WebGLShadowMap:",J,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let le=X.getFrameExtents();s.multiply(le),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,X.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=K,X.map===null||Y===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===pr){if(J.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Un(s.x,s.y,{format:as,type:mi,minFilter:Nn,magFilter:Nn,generateMipmaps:!1}),X.map.texture.name=J.name+".shadowMap",X.map.depthTexture=new ki(s.x,s.y,jn),X.map.depthTexture.name=J.name+".shadowMapDepth",X.map.depthTexture.format=zi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=bn,X.map.depthTexture.magFilter=bn}else J.isPointLight?(X.map=new Na(s.x),X.map.depthTexture=new ta(s.x,pi)):(X.map=new Un(s.x,s.y),X.map.depthTexture=new ki(s.x,s.y,pi)),X.map.depthTexture.name=J.name+".shadowMap",X.map.depthTexture.format=zi,this.type===ws?(X.map.depthTexture.compareFunction=K?th:eh,X.map.depthTexture.minFilter=Nn,X.map.depthTexture.magFilter=Nn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=bn,X.map.depthTexture.magFilter=bn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let ce=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();J.isPointLight!==!0&&X.updateMatrices(J,w);let se=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:w.layers;for(let Ue=0;Ue<ce;Ue++){let Ke=X.getCamera(Ue);if(J.isPointLight){let z=X.camera,te=X.matrix,me=J.distance||z.far;me!==z.far&&(z.far=me,z.updateProjectionMatrix()),Da.setFromMatrixPosition(J.matrixWorld),z.position.copy(Da),ph.copy(z.position),ph.add(yx[Ue]),z.up.copy(vx[Ue]),z.lookAt(ph),z.updateMatrixWorld(),te.makeTranslation(-Da.x,-Da.y,-Da.z),Pd.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Pd,z.coordinateSystem,z.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Ue),i.clear();else{Ue===0&&(i.setRenderTarget(X.map),i.clear());let z=X.getViewport(Ue);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),H.viewport(a)}n=X.getFrustum(Ue),v(x,w,Ke,J,se,this.type)}X.isPointLightShadow!==!0&&this.type===pr&&y(X,w),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(O,I,U)};function y(A,x){let w=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null?A.mapPass=new Un(s.x,s.y,{format:as,type:mi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(x,null,w,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(x,null,w,f,_,null)}function S(A,x,w,O){let I=null,U=w.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(U!==void 0)I=U;else if(I=w.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let H=I.uuid,Y=x.uuid,L=c[H];L===void 0&&(L={},c[H]=L);let q=L[Y];q===void 0&&(q=I.clone(),L[Y]=q,x.addEventListener("dispose",T)),I=q}if(I.visible=x.visible,I.wireframe=x.wireframe,O===pr?I.side=x.shadowSide!==null?x.shadowSide:x.side:I.side=x.shadowSide!==null?x.shadowSide:u[x.side],I.alphaMap=x.alphaMap,I.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,I.map=x.map,I.clipShadows=x.clipShadows,I.clippingPlanes=x.clippingPlanes,I.clipIntersection=x.clipIntersection,I.displacementMap=x.displacementMap,I.displacementScale=x.displacementScale,I.displacementBias=x.displacementBias,I.wireframeLinewidth=x.wireframeLinewidth,I.linewidth=x.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let H=i.properties.get(I);H.light=w}return I}function v(A,x,w,O,I,U){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&U===pr)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,A.matrixWorld);let L=e.update(A),q=A.material;if(Array.isArray(q)){let J=L.groups;for(let X=0,le=J.length;X<le;X++){let K=J[X],ce=q[K.materialIndex];if(ce&&ce.visible){let se=S(A,ce,O,U);A.onBeforeShadow(i,A,x,w,L,se,K),i.renderBufferDirect(w,null,L,se,A,K),A.onAfterShadow(i,A,x,w,L,se,K)}}}else if(q.visible){let J=S(A,q,O,U);A.onBeforeShadow(i,A,x,w,L,J,null),i.renderBufferDirect(w,null,L,J,A,null),A.onAfterShadow(i,A,x,w,L,J,null)}}let Y=A.children;for(let L=0,q=Y.length;L<q;L++)v(Y[L],x,w,O,I,U)}function T(A){A.target.removeEventListener("dispose",T);for(let w in c){let O=c[w],I=A.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}}function Sx(i,e){function t(){let N=!1,oe=new en,j=null,ge=new en(0,0,0,0);return{setMask:function(be){j!==be&&!N&&(i.colorMask(be,be,be,be),j=be)},setLocked:function(be){N=be},setClear:function(be,Ie,Je,pt,Me){Me===!0&&(be*=pt,Ie*=pt,Je*=pt),oe.set(be,Ie,Je,pt),ge.equals(oe)===!1&&(i.clearColor(be,Ie,Je,pt),ge.copy(oe))},reset:function(){N=!1,j=null,ge.set(-1,0,0,0)}}}function n(){let N=!1,oe=!1,j=null,ge=null,be=null;return{setReversed:function(Ie){if(oe!==Ie){let Je=e.get("EXT_clip_control");Ie?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),oe=Ie;let pt=be;be=null,this.setClear(pt)}},getReversed:function(){return oe},setTest:function(Ie){Ie?ae(i.DEPTH_TEST):ee(i.DEPTH_TEST)},setMask:function(Ie){j!==Ie&&!N&&(i.depthMask(Ie),j=Ie)},setFunc:function(Ie){if(oe&&(Ie=ed[Ie]),ge!==Ie){switch(Ie){case yo:i.depthFunc(i.NEVER);break;case vo:i.depthFunc(i.ALWAYS);break;case Mo:i.depthFunc(i.LESS);break;case js:i.depthFunc(i.LEQUAL);break;case So:i.depthFunc(i.EQUAL);break;case bo:i.depthFunc(i.GEQUAL);break;case Eo:i.depthFunc(i.GREATER);break;case wo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){be!==Ie&&(be=Ie,oe&&(Ie=1-Ie),i.clearDepth(Ie))},reset:function(){N=!1,j=null,ge=null,be=null,oe=!1}}}function s(){let N=!1,oe=null,j=null,ge=null,be=null,Ie=null,Je=null,pt=null,Me=null;return{setTest:function(je){N||(je?ae(i.STENCIL_TEST):ee(i.STENCIL_TEST))},setMask:function(je){oe!==je&&!N&&(i.stencilMask(je),oe=je)},setFunc:function(je,ut,Ne){(j!==je||ge!==ut||be!==Ne)&&(i.stencilFunc(je,ut,Ne),j=je,ge=ut,be=Ne)},setOp:function(je,ut,Ne){(Ie!==je||Je!==ut||pt!==Ne)&&(i.stencilOp(je,ut,Ne),Ie=je,Je=ut,pt=Ne)},setLocked:function(je){N=je},setClear:function(je){Me!==je&&(i.clearStencil(je),Me=je)},reset:function(){N=!1,oe=null,j=null,ge=null,be=null,Ie=null,Je=null,pt=null,Me=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,S=null,v=null,T=null,A=null,x=null,w=new at(0,0,0),O=0,I=!1,U=null,H=null,Y=null,L=null,q=null,J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,le=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=le>=1):K.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=le>=2);let ce=null,se={},Ue=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),z=new en().fromArray(Ue),te=new en().fromArray(Ke);function me(N,oe,j,ge){let be=new Uint8Array(4),Ie=i.createTexture();i.bindTexture(N,Ie),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Je=0;Je<j;Je++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(oe+Je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return Ie}let Ge={};Ge[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),Ge[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ge[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ge[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(i.DEPTH_TEST),a.setFunc(js),Fe(!1),ve(Uc),ae(i.CULL_FACE),we(Ts);function ae(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ee(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Dt(N,oe){return d[N]!==oe?(i.bindFramebuffer(N,oe),d[N]=oe,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=oe),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function $e(N,oe){let j=g,ge=!1;if(N){j=f.get(oe),j===void 0&&(j=[],f.set(oe,j));let be=N.textures;if(j.length!==be.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ie=0,Je=be.length;Ie<Je;Ie++)j[Ie]=i.COLOR_ATTACHMENT0+Ie;j.length=be.length,ge=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ge=!0);ge&&i.drawBuffers(j)}function lt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let dt={[As]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};dt[Eu]=i.MIN,dt[wu]=i.MAX;let de={[Tu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[zc]:i.SRC_ALPHA,[Nu]:i.SRC_ALPHA_SATURATE,[Du]:i.DST_COLOR,[Iu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[Hc]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Pu]:i.ONE_MINUS_DST_ALPHA,[Uu]:i.CONSTANT_COLOR,[Fu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function we(N,oe,j,ge,be,Ie,Je,pt,Me,je){if(N===Ts){m===!0&&(ee(i.BLEND),m=!1);return}if(m===!1&&(ae(i.BLEND),m=!0),N!==Mu){if(N!==p||je!==I){if((y!==As||T!==As)&&(i.blendEquation(i.FUNC_ADD),y=As,T=As),je)switch(N){case mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Bc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ot("WebGLState: Invalid blending: ",N);break}else switch(N){case mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oc:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bc:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",N);break}S=null,v=null,A=null,x=null,w.set(0,0,0),O=0,p=N,I=je}return}be=be||oe,Ie=Ie||j,Je=Je||ge,(oe!==y||be!==T)&&(i.blendEquationSeparate(dt[oe],dt[be]),y=oe,T=be),(j!==S||ge!==v||Ie!==A||Je!==x)&&(i.blendFuncSeparate(de[j],de[ge],de[Ie],de[Je]),S=j,v=ge,A=Ie,x=Je),(pt.equals(w)===!1||Me!==O)&&(i.blendColor(pt.r,pt.g,pt.b,Me),w.copy(pt),O=Me),p=N,I=!1}function Ee(N,oe){N.side===Qt?ee(i.CULL_FACE):ae(i.CULL_FACE);let j=N.side===An;oe&&(j=!j),Fe(j),N.blending===mr&&N.transparent===!1?we(Ts):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ge=N.stencilWrite;o.setTest(ge),ge&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),He(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ae(i.SAMPLE_ALPHA_TO_COVERAGE):ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function ve(N){N!==xu?(ae(i.CULL_FACE),N!==H&&(N===Uc?i.cullFace(i.BACK):N===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ee(i.CULL_FACE),H=N}function ft(N){N!==Y&&(X&&i.lineWidth(N),Y=N)}function He(N,oe,j){N?(ae(i.POLYGON_OFFSET_FILL),(L!==oe||q!==j)&&(L=oe,q=j,a.getReversed()&&(oe=-oe,j=-j),i.polygonOffset(oe,j))):ee(i.POLYGON_OFFSET_FILL)}function xt(N){N?ae(i.SCISSOR_TEST):ee(i.SCISSOR_TEST)}function yt(N){N===void 0&&(N=i.TEXTURE0+J-1),ce!==N&&(i.activeTexture(N),ce=N)}function At(N,oe,j){j===void 0&&(ce===null?j=i.TEXTURE0+J-1:j=ce);let ge=se[j];ge===void 0&&(ge={type:void 0,texture:void 0},se[j]=ge),(ge.type!==N||ge.texture!==oe)&&(ce!==j&&(i.activeTexture(j),ce=j),i.bindTexture(N,oe||Ge[N]),ge.type=N,ge.texture=oe)}function B(){let N=se[ce];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function jt(){try{i.compressedTexImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function gt(){try{i.compressedTexImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function Bt(){try{i.texSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function Re(){try{i.texSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function Jt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function it(){try{i.texStorage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function b(){try{i.texImage2D(...arguments)}catch(N){ot("WebGLState:",N)}}function G(){try{i.texImage3D(...arguments)}catch(N){ot("WebGLState:",N)}}function xe(N){return u[N]!==void 0?u[N]:i.getParameter(N)}function he(N,oe){u[N]!==oe&&(i.pixelStorei(N,oe),u[N]=oe)}function Ae(N){z.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),z.copy(N))}function Pe(N){te.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),te.copy(N))}function ne(N,oe){let j=c.get(oe);j===void 0&&(j=new WeakMap,c.set(oe,j));let ge=j.get(N);ge===void 0&&(ge=i.getUniformBlockIndex(oe,N.name),i.uniformBlockBinding(oe,ge,ge),j.set(N,ge))}function ie(N,oe,j){let be=c.get(oe).get(N);l[be]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,be,j),l[be]=j)}function Ce(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},ce=null,se={},d={},l={},f=new WeakMap,g=[],_=null,m=!1,p=null,y=null,S=null,v=null,T=null,A=null,x=null,w=new at(0,0,0),O=0,I=!1,U=null,H=null,Y=null,L=null,q=null,z.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ae,disable:ee,bindFramebuffer:Dt,drawBuffers:$e,useProgram:lt,setBlending:we,setMaterial:Ee,setFlipSided:Fe,setCullFace:ve,setLineWidth:ft,setPolygonOffset:He,setScissorTest:xt,activeTexture:yt,bindTexture:At,unbindTexture:B,compressedTexImage2D:jt,compressedTexImage3D:gt,texImage2D:b,texImage3D:G,pixelStorei:he,getParameter:xe,updateUBOMapping:ne,uniformBlockBinding:ie,texStorage2D:it,texStorage3D:C,texSubImage2D:Bt,texSubImage3D:Re,compressedTexSubImage2D:Jt,compressedTexSubImage3D:Xe,scissor:Ae,viewport:Pe,reset:Ce}}function bx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,_=new FinalizationRegistry(C=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,b){return m?new OffscreenCanvas(C,b):qr("canvas")}function y(C,b,G){let xe=1,he=it(C);if((he.width>G||he.height>G)&&(xe=G/Math.max(he.width,he.height)),xe<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ae=Math.floor(xe*he.width),Pe=Math.floor(xe*he.height);d===void 0&&(d=p(Ae,Pe));let ne=b?p(Ae,Pe):d;return ne.width=Ae,ne.height=Pe,ne.getContext("2d").drawImage(C,0,0,Ae,Pe),st("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ae+"x"+Pe+")."),ne}else return"data"in C&&st("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),C;return C}function S(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(C,b,G,xe,he,Ae=!1){if(C!==null){if(i[C]!==void 0)return i[C];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Pe;xe&&(Pe=e.get("EXT_texture_norm16"),Pe||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=b;if(b===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8),G===i.UNSIGNED_SHORT&&Pe&&(ne=Pe.R16_EXT),G===i.SHORT&&Pe&&(ne=Pe.R16_SNORM_EXT)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),b===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8),G===i.UNSIGNED_SHORT&&Pe&&(ne=Pe.RG16_EXT),G===i.SHORT&&Pe&&(ne=Pe.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),b===i.RGB&&(G===i.UNSIGNED_SHORT&&Pe&&(ne=Pe.RGB16_EXT),G===i.SHORT&&Pe&&(ne=Pe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),b===i.RGBA){let ie=Ae?Xr:Et.getTransfer(he);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=ie===Ot?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&Pe&&(ne=Pe.RGBA16_EXT),G===i.SHORT&&Pe&&(ne=Pe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function x(C,b){let G;return C?b===null||b===pi||b===Cs?G=i.DEPTH24_STENCIL8:b===jn?G=i.DEPTH32F_STENCIL8:b===_r&&(G=i.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pi||b===Cs?G=i.DEPTH_COMPONENT24:b===jn?G=i.DEPTH_COMPONENT32F:b===_r&&(G=i.DEPTH_COMPONENT16),G}function w(C,b){return S(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Nn?Math.log2(Math.max(b.width,b.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?b.mipmaps.length:1}function O(C){let b=new WeakRef(C);n.get(C).__ref=b,g.add(b),_.register(C,b,b)}function I(C){let b=n.get(C).__ref;b!==void 0&&(g.delete(b),_.unregister(b))}function U(C){Y(C.target)}function H(C){L(C.target)}function Y(C){C.removeEventListener("dispose",U),I(C),J(C),C.isVideoTexture&&h.delete(C),C.isHTMLTexture&&u.delete(C)}function L(C){C.removeEventListener("dispose",H),I(C),le(C)}function q(){for(let C of g){let b=C.deref();b!==void 0&&(b.isRenderTarget===!0?L(b):Y(b))}g.clear(),u.clear()}function J(C){let b=n.get(C);if(b.__webglInit===void 0)return;let G=C.source,xe=f.get(G);if(xe){let he=xe[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&X(C),Object.keys(xe).length===0&&f.delete(G)}n.remove(C)}function X(C){let b=n.get(C);i.deleteTexture(b.__webglTexture);let G=C.source,xe=f.get(G);delete xe[b.__cacheKey],a.memory.textures--}function le(C){let b=n.get(C);b.__depthDisposeCallback&&b.__depthDisposeCallback();let G=C.depthTexture;if(G&&G.renderTarget===C&&Y(G),C.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let Ae=0;Ae<b.__webglFramebuffer[he].length;Ae++)i.deleteFramebuffer(b.__webglFramebuffer[he][Ae]);else i.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)i.deleteFramebuffer(b.__webglFramebuffer[he]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let xe=C.textures;for(let he=0,Ae=xe.length;he<Ae;he++){let Pe=n.get(xe[he]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(xe[he])}n.remove(C)}let K=0;function ce(){K=0}function se(){return K}function Ue(C){K=C}function Ke(){let C=K;return C>=s.maxTextures&&st("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,C}function z(C){let b=[];return b.push(C.wrapS),b.push(C.wrapT),b.push(C.wrapR||0),b.push(C.magFilter),b.push(C.minFilter),b.push(C.anisotropy),b.push(C.internalFormat),b.push(C.format),b.push(C.type),b.push(C.generateMipmaps),b.push(C.mipmapsAutoUpdate),b.push(C.premultiplyAlpha),b.push(C.flipY),b.push(C.unpackAlignment),b.push(C.colorSpace),b.join()}function te(C,b){let G=n.get(C);if(C.isVideoTexture&&Jt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let xe=C.image;if(xe===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(G,C,b);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function me(C,b){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ee(G,C,b);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function Ge(C,b){let G=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ee(G,C,b);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function ae(C,b){let G=n.get(C);if(C.version>0&&G.__version!==C.version){Fe(G,C,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}let ee={[er]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[To]:i.MIRRORED_REPEAT},Dt={[bn]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[Ea]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[el]:i.LINEAR_MIPMAP_NEAREST,[Vi]:i.LINEAR_MIPMAP_LINEAR},$e={[Xu]:i.NEVER,[nh]:i.ALWAYS,[qu]:i.LESS,[eh]:i.LEQUAL,[Yu]:i.EQUAL,[th]:i.GEQUAL,[Zu]:i.GREATER,[$u]:i.NOTEQUAL};function lt(C,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Nn||b.magFilter===el||b.magFilter===Ea||b.magFilter===Vi||b.minFilter===Nn||b.minFilter===el||b.minFilter===Ea||b.minFilter===Vi)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,ee[b.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,ee[b.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,ee[b.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,Dt[b.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,Dt[b.minFilter]),b.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,$e[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===bn||b.minFilter!==Ea&&b.minFilter!==Vi||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function dt(C,b){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,b.addEventListener("dispose",U),O(b));let xe=b.source,he=f.get(xe);he===void 0&&(he={},f.set(xe,he));let Ae=z(b);if(Ae!==C.__cacheKey){he[Ae]===void 0&&(he[Ae]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),he[Ae].usedTimes++;let Pe=he[C.__cacheKey];Pe!==void 0&&(he[C.__cacheKey].usedTimes--,Pe.usedTimes===0&&X(b)),C.__cacheKey=Ae,C.__webglTexture=he[Ae].texture}return G}function de(C,b,G){return Math.floor(Math.floor(C/G)/b)}function we(C,b,G,xe){let Ae=C.updateRanges;if(Ae.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,G,xe,b.data);else{Ae.sort((N,oe)=>N.start-oe.start);let Pe=0;for(let N=1;N<Ae.length;N++){let oe=Ae[Pe],j=Ae[N],ge=oe.start+oe.count,be=de(j.start,b.width,4),Ie=de(oe.start,b.width,4);j.start<=ge+1&&be===Ie&&de(j.start+j.count-1,b.width,4)===be?oe.count=Math.max(oe.count,j.start+j.count-oe.start):(++Pe,Ae[Pe]=j)}Ae.length=Pe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),ie=t.getParameter(i.UNPACK_SKIP_PIXELS),Ce=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let N=0,oe=Ae.length;N<oe;N++){let j=Ae[N],ge=Math.floor(j.start/4),be=Math.ceil(j.count/4),Ie=ge%b.width,Je=Math.floor(ge/b.width),pt=be,Me=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Je),t.texSubImage2D(i.TEXTURE_2D,0,Ie,Je,pt,Me,G,xe,b.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function Ee(C,b,G){let xe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(xe=i.TEXTURE_3D);let he=dt(C,b),Ae=b.source;t.bindTexture(xe,C.__webglTexture,i.TEXTURE0+G);let Pe=n.get(Ae);if(Ae.version!==Pe.__version||he===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let Me=Et.getPrimaries(Et.workingColorSpace),je=b.colorSpace===ei?null:Et.getPrimaries(b.colorSpace),ut=b.colorSpace===ei||Me===je?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let ie=y(b.image,!1,s.maxTextureSize);ie=Xe(b,ie);let Ce=r.convert(b.format,b.colorSpace),N=r.convert(b.type),oe=A(b.internalFormat,Ce,N,b.normalized,b.colorSpace,b.isVideoTexture);lt(xe,b);let j,ge=b.mipmaps,be=b.isVideoTexture!==!0,Ie=Pe.__version===void 0||he===!0,Je=Ae.dataReady,pt=w(b,ie);if(b.isDepthTexture)oe=x(b.format===Wi,b.type),Ie&&(be?t.texStorage2D(i.TEXTURE_2D,1,oe,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,oe,ie.width,ie.height,0,Ce,N,null));else if(b.isDataTexture)if(ge.length>0){be&&Ie&&t.texStorage2D(i.TEXTURE_2D,pt,oe,ge[0].width,ge[0].height);for(let Me=0,je=ge.length;Me<je;Me++)j=ge[Me],be?Je&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,j.width,j.height,Ce,N,j.data):t.texImage2D(i.TEXTURE_2D,Me,oe,j.width,j.height,0,Ce,N,j.data);b.generateMipmaps=!1}else be?(Ie&&t.texStorage2D(i.TEXTURE_2D,pt,oe,ie.width,ie.height),Je&&we(b,ie,Ce,N)):t.texImage2D(i.TEXTURE_2D,0,oe,ie.width,ie.height,0,Ce,N,ie.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){be&&Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,oe,ge[0].width,ge[0].height,ie.depth);for(let Me=0,je=ge.length;Me<je;Me++)if(j=ge[Me],b.format!==gi)if(Ce!==null)if(be){if(Je)if(b.layerUpdates.size>0){let ut=dh(j.width,j.height,b.format,b.type);for(let Ne of b.layerUpdates){let Ut=j.data.subarray(Ne*ut/j.data.BYTES_PER_ELEMENT,(Ne+1)*ut/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,Ne,j.width,j.height,1,Ce,Ut)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,j.width,j.height,ie.depth,Ce,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Me,oe,j.width,j.height,ie.depth,0,j.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else be?Je&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Me,0,0,0,j.width,j.height,ie.depth,Ce,N,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Me,oe,j.width,j.height,ie.depth,0,Ce,N,j.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{be&&Ie&&t.texStorage2D(i.TEXTURE_2D,pt,oe,ge[0].width,ge[0].height);for(let Me=0,je=ge.length;Me<je;Me++)j=ge[Me],b.format!==gi?Ce!==null?be?Je&&t.compressedTexSubImage2D(i.TEXTURE_2D,Me,0,0,j.width,j.height,Ce,j.data):t.compressedTexImage2D(i.TEXTURE_2D,Me,oe,j.width,j.height,0,j.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):be?Je&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,j.width,j.height,Ce,N,j.data):t.texImage2D(i.TEXTURE_2D,Me,oe,j.width,j.height,0,Ce,N,j.data)}else if(b.isDataArrayTexture)if(be){if(Ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,pt,oe,ie.width,ie.height,ie.depth),Je)if(b.layerUpdates.size>0){let Me=dh(ie.width,ie.height,b.format,b.type);for(let je of b.layerUpdates){let ut=ie.data.subarray(je*Me/ie.data.BYTES_PER_ELEMENT,(je+1)*Me/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,je,ie.width,ie.height,1,Ce,N,ut)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,Ce,N,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,ie.width,ie.height,ie.depth,0,Ce,N,ie.data);else if(b.isData3DTexture)be?(Ie&&t.texStorage3D(i.TEXTURE_3D,pt,oe,ie.width,ie.height,ie.depth),Je&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,Ce,N,ie.data)):t.texImage3D(i.TEXTURE_3D,0,oe,ie.width,ie.height,ie.depth,0,Ce,N,ie.data);else if(b.isFramebufferTexture){if(Ie)if(be)t.texStorage2D(i.TEXTURE_2D,pt,oe,ie.width,ie.height);else{let Me=ie.width,je=ie.height;for(let ut=0;ut<pt;ut++)t.texImage2D(i.TEXTURE_2D,ut,oe,Me,je,0,Ce,N,null),Me>>=1,je>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let Me=i.canvas;if(Me.hasAttribute("layoutsubtree")||Me.setAttribute("layoutsubtree","true"),ie.parentNode!==Me){Me.appendChild(ie),u.add(b),Me.onpaint=je=>{let ut=je.changedElements;for(let Ne of u)ut.includes(Ne.image)&&(Ne.needsUpdate=!0)},Me.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ie);else{let ut=i.RGBA,Ne=i.RGBA,Ut=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ut,Ne,Ut,ie)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ge.length>0){if(be&&Ie){let Me=it(ge[0]);t.texStorage2D(i.TEXTURE_2D,pt,oe,Me.width,Me.height)}for(let Me=0,je=ge.length;Me<je;Me++)j=ge[Me],be?Je&&t.texSubImage2D(i.TEXTURE_2D,Me,0,0,Ce,N,j):t.texImage2D(i.TEXTURE_2D,Me,oe,Ce,N,j);b.generateMipmaps=!1}else if(be){if(Ie){let Me=it(ie);t.texStorage2D(i.TEXTURE_2D,pt,oe,Me.width,Me.height)}Je&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,N,ie)}else t.texImage2D(i.TEXTURE_2D,0,oe,Ce,N,ie);S(b)&&b.mipmapsAutoUpdate===!0&&v(xe),Pe.__version=Ae.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function Fe(C,b,G){if(b.image.length!==6)return;let xe=dt(C,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+G);let Ae=n.get(he);if(he.version!==Ae.__version||xe===!0){t.activeTexture(i.TEXTURE0+G);let Pe=Et.getPrimaries(Et.workingColorSpace),ne=b.colorSpace===ei?null:Et.getPrimaries(b.colorSpace),ie=b.colorSpace===ei||Pe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let Ce=b.isCompressedTexture||b.image[0].isCompressedTexture,N=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let Ne=0;Ne<6;Ne++)!Ce&&!N?oe[Ne]=y(b.image[Ne],!0,s.maxCubemapSize):oe[Ne]=N?b.image[Ne].image:b.image[Ne],oe[Ne]=Xe(b,oe[Ne]);let j=oe[0],ge=r.convert(b.format,b.colorSpace),be=r.convert(b.type),Ie=A(b.internalFormat,ge,be,b.normalized,b.colorSpace),Je=b.isVideoTexture!==!0,pt=Ae.__version===void 0||xe===!0,Me=he.dataReady,je=w(b,j);lt(i.TEXTURE_CUBE_MAP,b);let ut;if(b.isDepthTexture){if(Ie=x(b.format===Wi,b.type),pt)if(Je)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ie,j.width,j.height);else for(let Ne=0;Ne<6;Ne++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ie,j.width,j.height,0,ge,be,null)}else if(Ce){Je&&pt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Ie,j.width,j.height);for(let Ne=0;Ne<6;Ne++){ut=oe[Ne].mipmaps;for(let Ut=0;Ut<ut.length;Ut++){let rn=ut[Ut];b.format!==gi?ge!==null?Je?Me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut,0,0,rn.width,rn.height,ge,rn.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut,Ie,rn.width,rn.height,0,rn.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut,0,0,rn.width,rn.height,ge,be,rn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut,Ie,rn.width,rn.height,0,ge,be,rn.data)}}}else{if(ut=b.mipmaps,Je&&pt){ut.length>0&&je++;let Ne=it(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,je,Ie,Ne.width,Ne.height)}for(let Ne=0;Ne<6;Ne++)if(N){Je?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,oe[Ne].width,oe[Ne].height,ge,be,oe[Ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ie,oe[Ne].width,oe[Ne].height,0,ge,be,oe[Ne].data);for(let Ut=0;Ut<ut.length;Ut++){let qn=ut[Ut].image[Ne].image;Je?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut+1,0,0,qn.width,qn.height,ge,be,qn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut+1,Ie,qn.width,qn.height,0,ge,be,qn.data)}}else{Je?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,0,0,ge,be,oe[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ie,ge,be,oe[Ne]);for(let Ut=0;Ut<ut.length;Ut++){let rn=ut[Ut];Je?Me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut+1,0,0,ge,be,rn.image[Ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ut+1,Ie,ge,be,rn.image[Ne])}}}S(b)&&b.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),Ae.__version=he.version,b.onUpdate&&b.onUpdate(b)}C.__version=b.version}function ve(C,b,G,xe,he,Ae){let Pe=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),ie=A(G.internalFormat,Pe,ne,G.normalized,G.colorSpace),Ce=n.get(b),N=n.get(G);if(N.__renderTarget=b,!Ce.__hasExternalTextures){let oe=Math.max(1,b.width>>Ae),j=Math.max(1,b.height>>Ae);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Ae,ie,oe,j,b.depth,0,Pe,ne,null):t.texImage2D(he,Ae,ie,oe,j,0,Pe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,he,N.__webglTexture,0,Bt(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,he,N.__webglTexture,Ae),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(C,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,C),b.depthBuffer){let xe=b.depthTexture,he=xe&&xe.isDepthTexture?xe.type:null,Ae=x(b.stencilBuffer,he),Pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(b),Ae,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(b),Ae,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,C)}else{let xe=b.textures;for(let he=0;he<xe.length;he++){let Ae=xe[he],Pe=r.convert(Ae.format,Ae.colorSpace),ne=r.convert(Ae.type),ie=A(Ae.internalFormat,Pe,ne,Ae.normalized,Ae.colorSpace);Re(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Bt(b),ie,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt(b),ie,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ie,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function He(C,b,G){let xe=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(b.depthTexture);he.__renderTarget=b;let Ae=xe?b.depthTexture.image[0]:b.depthTexture.image;(!he.__webglTexture||Ae.width!==b.width||Ae.height!==b.height)&&(Ae.width=b.width,Ae.height=b.height,b.depthTexture.needsUpdate=!0),xe?ae(b.depthTexture,0):te(b.depthTexture,0);let Pe=he.__webglTexture,ne=Bt(b),ie=xe?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,Ce=b.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===zi)Re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,ie,Pe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,ie,Pe,0);else if(b.depthTexture.format===Wi)Re(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ce,ie,Pe,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,Ce,ie,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function xt(C){let b=n.get(C),G=C.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==C.depthTexture){let xe=C.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),xe){let he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,xe.removeEventListener("dispose",he)};xe.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=xe}if(C.depthTexture&&!b.__autoAllocateDepthBuffer)if(G)for(let xe=0;xe<6;xe++)He(b.__webglFramebuffer[xe],C,xe);else C.texture.mipmaps.length>0?He(b.__webglFramebuffer[0],C,0):He(b.__webglFramebuffer,C,0);else if(G){b.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[xe]),b.__webglDepthbuffer[xe]===void 0)b.__webglDepthbuffer[xe]=i.createRenderbuffer(),ft(b.__webglDepthbuffer[xe],C,!1);else{let he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Ae)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),ft(b.__webglDepthbuffer,C,!1);else{let he=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Ae)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(C,b,G){let xe=n.get(C);b!==void 0&&ve(xe.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&xt(C)}function At(C){let b=C.texture,G=n.get(C),xe=n.get(b);C.addEventListener("dispose",H),O(C);let he=C.textures,Ae=C.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=b.version,a.memory.textures++),Ae){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let ie=0;ie<b.mipmaps.length;ie++)G.__webglFramebuffer[ne][ie]=i.createFramebuffer()}else G.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<b.mipmaps.length;ne++)G.__webglFramebuffer[ne]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let ne=0,ie=he.length;ne<ie;ne++){let Ce=n.get(he[ne]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Re(C)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<he.length;ne++){let ie=he[ne];G.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);let Ce=r.convert(ie.format,ie.colorSpace),N=r.convert(ie.type),oe=A(ie.internalFormat,Ce,N,ie.normalized,ie.colorSpace,C.isXRRenderTarget===!0),j=Bt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,oe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),lt(i.TEXTURE_CUBE_MAP,b);for(let ne=0;ne<6;ne++)if(b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)ve(G.__webglFramebuffer[ne][ie],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ie);else ve(G.__webglFramebuffer[ne],C,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);S(b)?v(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let ne=0,ie=he.length;ne<ie;ne++){let Ce=he[ne],N=n.get(Ce),oe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(oe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,N.__webglTexture),lt(oe,Ce),ve(G.__webglFramebuffer,C,Ce,i.COLOR_ATTACHMENT0+ne,oe,0),S(Ce)&&v(oe)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,xe.__webglTexture),lt(ne,b),b.mipmaps.length>0)for(let ie=0;ie<b.mipmaps.length;ie++)ve(G.__webglFramebuffer[ie],C,b,i.COLOR_ATTACHMENT0,ne,ie);else ve(G.__webglFramebuffer,C,b,i.COLOR_ATTACHMENT0,ne,0);S(b)?v(ne):b.mipmaps.length>0&&i.texParameteri(ne,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&xt(C)}function B(C){let b=C.textures;for(let G=0,xe=b.length;G<xe;G++){let he=b[G];if(S(he)&&he.mipmapsAutoUpdate===!0){let Ae=T(C),Pe=n.get(he).__webglTexture;t.bindTexture(Ae,Pe),v(Ae),t.unbindTexture()}}}let jt=[];function gt(C){if(C.samples>0){if(Re(C)===!1){let b=C.textures,G=C.width,xe=C.height,he=i.COLOR_BUFFER_BIT,Ae=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(C),ne=b.length>1;if(ne)for(let Ce=0;Ce<b.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ce=0;Ce<b.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);let N=n.get(b[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,G,xe,0,0,G,xe,he,i.NEAREST),l===!0&&(jt.length=0,jt.push(i.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&jt.push(Ae),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let Ce=0;Ce<b.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ce]);let N=n.get(b[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let b=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Bt(C){return Math.min(s.maxSamples,C.samples)}function Re(C){let b=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Jt(C){let b=a.render.frame;h.get(C)!==b&&(h.set(C,b),C.update())}function Xe(C,b){let G=C.colorSpace,xe=C.format,he=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Wr&&G!==ei&&(Et.getTransfer(G)===Ot?(xe!==gi||he!==kn)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",G)),b}function it(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ke,this.resetTextureUnits=ce,this.getTextureUnits=se,this.setTextureUnits=Ue,this.setTexture2D=te,this.setTexture2DArray=me,this.setTexture3D=Ge,this.setTextureCube=ae,this.rebindTextures=yt,this.setupRenderTarget=At,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Re,this.dispose=q}function Ex(i,e){function t(n,s=ei){let r,a=Et.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===il)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Kc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zc)return i.BYTE;if(n===$c)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===tl)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===Qc)return i.ALPHA;if(n===jc)return i.RGB;if(n===gi)return i.RGBA;if(n===zi)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===sl)return i.RED;if(n===rl)return i.RED_INTEGER;if(n===as)return i.RG;if(n===al)return i.RG_INTEGER;if(n===ol)return i.RGBA_INTEGER;if(n===wa||n===Ta||n===Aa||n===Ra)if(a===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===wa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===wa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ll||n===cl||n===hl||n===ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dl||n===fl||n===pl||n===ml||n===gl||n===Ca||n===_l)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===dl||n===fl)return a===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===pl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ml)return r.COMPRESSED_R11_EAC;if(n===gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ca)return r.COMPRESSED_RG11_EAC;if(n===_l)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xl||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl||n===Il||n===Pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===yl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ml)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===El)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Tl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Al)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Rl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Cl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Il)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Pl)return a===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Dl||n===Ll||n===Nl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Dl)return a===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ll)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ul||n===Fl||n===Ia||n===Ol)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ul)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ol)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var wx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new na(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qn({vertexShader:wx,fragmentShader:Tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Nt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Si{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new Mh,p={},y=t.getContextAttributes(),S=null,v=null,T=[],A=[],x=new ye,w=null,O=null,I=new Pn;I.viewport=new en;let U=new Pn;U.viewport=new en;let H=[I,U],Y=new Jo,L=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let te=T[z];return te===void 0&&(te=new ar,T[z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(z){let te=T[z];return te===void 0&&(te=new ar,T[z]=te),te.getGripSpace()},this.getHand=function(z){let te=T[z];return te===void 0&&(te=new ar,T[z]=te),te.getHandSpace()};function J(z){let te=A.indexOf(z.inputSource);if(te===-1)return;let me=T[te];me!==void 0&&(me.update(z.inputSource,z.frame,c||a),me.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",le);for(let z=0;z<T.length;z++){let te=A[z];te!==null&&(A[z]=null,T[z].disconnect(te))}L=null,q=null,m.reset();for(let z in p)delete p[z];if(e.setRenderTarget(S),f=null,d=null,u=null,s=null,v=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(x.width,x.height,!1),O!==null){let z=O.camera;z.fov=O.fov,z.zoom=O.zoom,z.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",X),s.addEventListener("inputsourceschange",le),y.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ge=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=y.stencil?Wi:zi,Ge=y.stencil?Cs:pi);let ee={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ee),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Un(d.textureWidth,d.textureHeight,{format:gi,type:kn,depthTexture:new ki(d.textureWidth,d.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Un(f.framebufferWidth,f.framebufferHeight,{format:gi,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(z){for(let te=0;te<z.removed.length;te++){let me=z.removed[te],Ge=A.indexOf(me);Ge>=0&&(A[Ge]=null,T[Ge].disconnect(me))}for(let te=0;te<z.added.length;te++){let me=z.added[te],Ge=A.indexOf(me);if(Ge===-1){for(let ee=0;ee<T.length;ee++)if(ee>=A.length){A.push(me),Ge=ee;break}else if(A[ee]===null){A[ee]=me,Ge=ee;break}if(Ge===-1)break}let ae=T[Ge];ae&&ae.connect(me)}}function K(z,te){te===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(te.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let te=z.near,me=z.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(me=m.depthFar)),Y.near=U.near=I.near=te,Y.far=U.far=I.far=me,(L!==Y.near||q!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),L=Y.near,q=Y.far),Y.layers.mask=z.layers.mask|6,I.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;let Ge=z.parent,ae=Y.cameras;K(Y,Ge);for(let ee=0;ee<ae.length;ee++)K(ae[ee],Ge);Y.projectionMatrix.copy(I.projectionMatrix),Y.projectionMatrixInverse.copy(I.projectionMatrixInverse),O===null&&z.isPerspectiveCamera&&(O={camera:z,fov:z.fov,zoom:z.zoom}),ce(z,Y,Ge)};function ce(z,te,me){me===null?z.matrix.copy(te.matrixWorld):(z.matrix.copy(me.matrixWorld),z.matrix.invert(),z.matrix.multiply(te.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(te.projectionMatrix),z.projectionMatrixInverse.copy(te.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=ir*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(z){return p[z]};let se=null;function Ue(z,te){if(h=te.getViewerPose(c||a),g=te,h!==null){let me=h.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let Ge=!1;me.length!==Y.cameras.length&&(Y.cameras.length=0,Ge=!0);for(let $e=0;$e<me.length;$e++){let lt=me[$e],dt=null;if(f!==null)dt=f.getViewport(lt);else{let we=u.getViewSubImage(d,lt);dt=we.viewport,$e===0&&(e.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),e.setRenderTarget(v))}let de=H[$e];de===void 0&&(de=new Pn,de.layers.enable($e),de.viewport=new en,H[$e]=de),de.matrix.fromArray(lt.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(lt.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(dt.x,dt.y,dt.width,dt.height),$e===0&&(Y.matrix.copy(de.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ge===!0&&Y.cameras.push(de)}let ae=s.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let $e=u.getDepthInformation(me[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let $e=0;$e<me.length;$e++){let lt=me[$e].camera;if(lt){let dt=p[lt];dt||(dt=new na,p[lt]=dt);let de=u.getCameraImage(lt);dt.sourceTexture=de}}}}for(let me=0;me<T.length;me++){let Ge=A[me],ae=T[me];Ge!==null&&ae!==void 0&&ae.update(Ge,te,c||a)}se&&se(z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}let Ke=new Dd;Ke.setAnimationLoop(Ue),this.setAnimationLoop=function(z){se=z},this.dispose=function(){}}},Ax=new Lt,Gd=new ht;Gd.set(-1,0,0,0,1,0,0,0,1);function Rx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ch(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,y,S,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,v=y.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(v)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Gd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cx(i,e,t,n){let s={},r={};function a(y,S){let v=S.program;n.uniformBlockBinding(y,v,s[y.id])}function o(y,S){let v=s[y.id];v===void 0&&(g(y),v=l(y),s[y.id]=v,y.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(y,T);let A=e.render.frame;r[y.id]!==A&&(c(y),r[y.id]=A)}function l(y){let S=i.createBuffer(),v=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,v,T),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(y){let S=s[y.id],v=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,x=v.length;A<x;A++){let w=v[A];if(Array.isArray(w))for(let O=0,I=w.length;O<I;O++)h(w[O],A,O,T);else h(w,A,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,S,v,T){if(d(y,S,v,T)===!0){let A=y.__offset,x=y.value;if(Array.isArray(x)){let w=0;for(let O=0;O<x.length;O++){let I=x[O],U=_(I,!0);u(I,y.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else u(x,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,y.__data)}}function u(y,S,v){typeof y=="number"||typeof y=="boolean"?S[v]=y:y.isMatrix3?(S[v]=y.elements[0],S[v+1]=y.elements[1],S[v+2]=y.elements[2],S[v+3]=0,S[v+4]=y.elements[3],S[v+5]=y.elements[4],S[v+6]=y.elements[5],S[v+7]=0,S[v+8]=y.elements[6],S[v+9]=y.elements[7],S[v+10]=y.elements[8],S[v+11]=0):ArrayBuffer.isView(y)?S.set(y.subarray(0,S.length-v),v):y.toArray(S,v)}function d(y,S,v,T){let A=y.value,x=S+"_"+v;if(Array.isArray(A)){T[x]===void 0&&(T[x]=[]);let w=T[x],O=!1;for(let I=0;I<A.length;I++)f(A[I],w,I)===!0&&(O=!0);return O}return f(A,T,x)}function f(y,S,v){if(S[v]===void 0)return typeof y=="number"||typeof y=="boolean"?S[v]=y:ArrayBuffer.isView(y)?S[v]=y.slice():S[v]=y.clone(),!0;{let T=S[v];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return S[v]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function g(y){let S=y.uniforms,v=0,T=16;for(let x=0,w=S.length;x<w;x++){let O=Array.isArray(S[x])?S[x]:[S[x]];for(let I=0,U=O.length;I<U;I++){let H=O[I],Y=Array.isArray(H.value)?H.value:[H.value],L=Array.isArray(S[x])||Array.isArray(H.value),q=v;for(let X=0,le=Y.length;X<le;X++){let K=Y[X],ce=_(K,L),se=v%T,Ue=se%ce.boundary,Ke=se+Ue;v+=Ue,Ke!==0&&T-Ke<ce.storage&&(v+=T-Ke),X===0&&(q=v),v+=ce.storage}let J=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new J((v-q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=q}}let A=v%T;return A>0&&(v+=T-A),y.__size=v,y.__cache={},this}function _(y,S){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=16,v.storage=48):y.isMatrix4?(v.boundary=16,v.storage=64):y.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):st("WebGLRenderer: Unsupported uniform value type.",y),S===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(y){let S=y.target;S.removeEventListener("dispose",m),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:p}}var Ix=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ci=null;function Px(){return Ci===null&&(Ci=new Kr(Ix,16,16,as,mi),Ci.name="DFG_LUT",Ci.minFilter=Nn,Ci.magFilter=Nn,Ci.wrapS=vi,Ci.wrapT=vi,Ci.generateMipmaps=!1,Ci.needsUpdate=!0),Ci}var Hl=class{constructor(e={}){let{canvas:t=Ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=kn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([ol,al,rl]),p=new Set([kn,pi,_r,Cs,nl,il]),y=new Uint32Array(4),S=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},T=null,A=null,x=[],w=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,H=null,Y=null,L=null,q=null;this._outputColorSpace=Yt;let J=0,X=0,le=null,K=-1,ce=null,se=new en,Ue=new en,Ke=null,z=new at(0),te=0,me=t.width,Ge=t.height,ae=1,ee=null,Dt=null,$e=new en(0,0,me,Ge),lt=new en(0,0,me,Ge),dt=!1,de=new ns,we=new Po,Ee=!1,Fe=!1,ve=new Lt,ft=new P,He=new en,xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},yt=!1;function At(){return le===null?ae:1}let B=n;function jt(E,F){return t.getContext(E,F)}let gt,Bt,Re,Jt,Xe,it,C,b,G,xe,he,Ae,Pe,ne,ie,Ce,N,oe,j,ge,be,Ie,Je;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),B===null){let F="webgl2";if(B=jt(F,E),B===null)throw jt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}pt()}catch(E){throw t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),ot("WebGLRenderer: "+E.message),E}function pt(){gt=new G0(B),gt.init(),be=new Ex(B,gt),Bt=new P0(B,gt,e,be),Re=new Sx(B,gt),Bt.reversedDepthBuffer&&d&&Re.buffers.depth.setReversed(!0),Y=B.createFramebuffer(),L=B.createFramebuffer(),q=B.createFramebuffer(),Jt=new X0(B),Xe=new lx,it=new bx(B,gt,Re,Xe,Bt,be,Jt),C=new k0(I),b=new Yp(B),Ie=new C0(B,b),G=new V0(B,b,Jt,Ie),xe=new Y0(B,G,b,Ie,Jt),oe=new q0(B,Bt,it),ie=new D0(Xe),he=new ox(I,C,gt,Bt,Ie,ie),Ae=new Rx(I,Xe),Pe=new hx,ne=new gx(gt),N=new R0(I,C,Re,xe,g,l),Ce=new Mx(I,xe,Bt),Je=new Cx(B,Jt,Bt,Re),j=new I0(B,gt,Jt),ge=new W0(B,gt,Jt),Jt.programs=he.programs,I.capabilities=Bt,I.extensions=gt,I.properties=Xe,I.renderLists=Pe,I.shadowMap=Ce,I.state=Re,I.info=Jt}_!==kn&&(O=new $0(_,t.width,t.height,o,s,r));let Me=new Sh(I,B);this.xr=Me,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(me,Ge,!1))},this.getSize=function(E){return E.set(me,Ge)},this.setSize=function(E,F,Z=!0){if(Me.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}me=E,Ge=F,t.width=Math.floor(E*ae),t.height=Math.floor(F*ae),Z===!0&&(t.style.width=E+"px",t.style.height=F+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(me*ae,Ge*ae).floor()},this.setDrawingBufferSize=function(E,F,Z){me=E,Ge=F,ae=Z,t.width=Math.floor(E*Z),t.height=Math.floor(F*Z),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===kn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(se)},this.getViewport=function(E){return E.copy($e)},this.setViewport=function(E,F,Z,k){E.isVector4?$e.set(E.x,E.y,E.z,E.w):$e.set(E,F,Z,k),Re.viewport(se.copy($e).multiplyScalar(At()).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,F,Z,k){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,F,Z,k),Re.scissor(Ue.copy(lt).multiplyScalar(At()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(E){Re.setScissorTest(dt=E)},this.setOpaqueSort=function(E){ee=E},this.setTransparentSort=function(E){Dt=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Z=!0){let k=0;if(E){let V=!1;if(le!==null){let De=le.texture.format;V=m.has(De)}if(V){let De=le.texture.type,Ve=p.has(De),Te=N.getClearColor(),Be=N.getClearAlpha(),Ye=Te.r,ct=Te.g,St=Te.b;Ve?(y[0]=Ye,y[1]=ct,y[2]=St,y[3]=Be,B.clearBufferuiv(B.COLOR,0,y)):(S[0]=Ye,S[1]=ct,S[2]=St,S[3]=Be,B.clearBufferiv(B.COLOR,0,S))}else k|=B.COLOR_BUFFER_BIT}F&&(k|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&B.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),N.dispose(),Pe.dispose(),ne.dispose(),it.dispose(),Xe.dispose(),C.dispose(),xe.dispose(),G.dispose(),Ie.dispose(),Je.dispose(),he.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Yn),Me.removeEventListener("sessionend",Ha),Pi.stop()};function je(E){E.preventDefault(),sh("WebGLRenderer: Context Lost."),U=!0}function ut(){sh("WebGLRenderer: Context Restored."),U=!1;let E=Jt.autoReset,F=Ce.enabled,Z=Ce.autoUpdate,k=Ce.needsUpdate,V=Ce.type;pt(),Jt.autoReset=E,Ce.enabled=F,Ce.autoUpdate=Z,Ce.needsUpdate=k,Ce.type=V}function Ne(E){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ut(E){let F=E.target;F.removeEventListener("dispose",Ut),rn(F)}function rn(E){qn(E),Xe.remove(E)}function qn(E){let F=Xe.get(E).programs;F!==void 0&&(F.forEach(function(Z){he.releaseProgram(Z)}),E.isShaderMaterial&&he.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Z,k,V,De){F===null&&(F=xt);let Ve=V.isMesh&&V.matrixWorld.determinantAffine()<0,Te=Ga(E,F,Z,k,V);Re.setMaterial(k,Ve);let Be=Z.index,Ye=1;if(k.wireframe===!0){if(Be=G.getWireframeAttribute(Z),Be===void 0)return;Ye=2}let ct=Z.drawRange,St=Z.attributes.position,ze=ct.start*Ye,_t=(ct.start+ct.count)*Ye;De!==null&&(ze=Math.max(ze,De.start*Ye),_t=Math.min(_t,(De.start+De.count)*Ye)),Be!==null?(ze=Math.max(ze,0),_t=Math.min(_t,Be.count)):St!=null&&(ze=Math.max(ze,0),_t=Math.min(_t,St.count));let Xt=_t-ze;if(Xt<0||Xt===1/0)return;Ie.setup(V,k,Te,Z,Be);let Ft,zt=j;if(Be!==null&&(Ft=b.get(Be),zt=ge,zt.setIndex(Ft)),V.isMesh)k.wireframe===!0?(Re.setLineWidth(k.wireframeLinewidth*At()),zt.setMode(B.LINES)):zt.setMode(B.TRIANGLES);else if(V.isLine){let yn=k.linewidth;yn===void 0&&(yn=1),Re.setLineWidth(yn*At()),V.isLineSegments?zt.setMode(B.LINES):V.isLineLoop?zt.setMode(B.LINE_LOOP):zt.setMode(B.LINE_STRIP)}else V.isPoints?zt.setMode(B.POINTS):V.isSprite&&zt.setMode(B.TRIANGLES);if(V.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))zt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let yn=V._multiDrawStarts,qe=V._multiDrawCounts,nn=V._multiDrawCount,Rt=Be?b.get(Be).bytesPerElement:1,xi=Xe.get(k).currentProgram.getUniforms();for(let an=0;an<nn;an++)xi.setValue(B,"_gl_DrawID",an),zt.render(yn[an]/Rt,qe[an])}else if(V.isInstancedMesh)zt.renderInstances(ze,Xt,V.count);else if(Z.isInstancedBufferGeometry){let yn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,qe=Math.min(Z.instanceCount,yn);zt.renderInstances(ze,Xt,qe)}else zt.render(ze,Xt)};function Ar(E,F,Z,k){H!==null&&E.isNodeMaterial&&H.setObject(k,E),Ee===!0&&ie.setState(E,Z,!1),E.transparent===!0&&E.side===Qt&&E.forceSinglePass===!1?(E.side=An,E.needsUpdate=!0,si(E,F,k),E.side=Ti,E.needsUpdate=!0,si(E,F,k),E.side=Qt):si(E,F,k)}this.compile=function(E,F,Z=null){Z===null&&(Z=E),H!==null&&H.renderStart(E,F,Z),A=ne.get(Z),A.init(F),w.push(A),Z.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),E!==Z&&E.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),Fe=this.localClippingEnabled,Ee=ie.init(this.clippingPlanes,Fe),Ee===!0&&ie.setGlobalState(this.clippingPlanes,F),H!==null&&Ce.render(A.state.shadowsArray,Z,F);let k=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let De=V.material;if(De)if(Array.isArray(De))for(let Ve=0;Ve<De.length;Ve++){let Te=De[Ve];Ar(Te,Z,F,V),k.add(Te)}else Ar(De,Z,F,V),k.add(De)}),A=w.pop(),H!==null&&H.renderEnd(),k},this.compileAsync=function(E,F,Z=null){let k=this.compile(E,F,Z);return new Promise(V=>{function De(){if(k.forEach(function(Ve){let Be=Xe.get(Ve).currentProgram;(Be===void 0||Be.isReady())&&k.delete(Ve)}),k.size===0){V(E);return}setTimeout(De,10)}gt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Rr=null;function hs(E){Rr&&Rr(E)}function Yn(){Pi.stop()}function Ha(){Pi.start()}let Pi=new Dd;Pi.setAnimationLoop(hs),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){Rr=E,Me.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},Me.addEventListener("sessionstart",Yn),Me.addEventListener("sessionend",Ha),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,F);let Z=Me.enabled===!0&&Me.isPresenting===!0,k=O!==null&&(le===null||Z)&&O.begin(I,le);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(F),F=Me.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,F,le),A=ne.get(E,w.length),A.init(F),A.state.textureUnits=it.getTextureUnits(),w.push(A),ve.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?we.setFromArrayCamera(F):de.setFromProjectionMatrix(ve,Kn,F.reversedDepth),Fe=this.localClippingEnabled,Ee=ie.init(this.clippingPlanes,Fe),T=Pe.get(E,x.length),T.init(),x.push(T),this.info.render.frame++,Me.enabled===!0&&Me.isPresenting===!0){let Ve=I.xr.getDepthSensingMesh();Ve!==null&&Cr(Ve,F,-1/0,I.sortObjects)}Cr(E,F,0,I.sortObjects),T.finish(),H!==null&&H.updateLights(A.state.lightsArray),I.sortObjects===!0&&T.sort(ee,Dt),yt=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,yt&&N.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),Ee===!0&&ie.beginShadows();let V=A.state.shadowsArray;if(Ce.render(V,E,F),Ee===!0&&ie.endShadows(),(k&&O.hasRenderPass())===!1){let Ve=T.opaque,Te=T.transmissive;if(A.setupLights(),F.isArrayCamera){let Be=F.cameras;if(Te.length>0)for(let Ye=0,ct=Be.length;Ye<ct;Ye++){let St=Be[Ye];Ir(Ve,Te,E,St)}yt&&N.render(E);for(let Ye=0,ct=Be.length;Ye<ct;Ye++){let St=Be[Ye];Ls(T,E,St,St.viewport)}}else Te.length>0&&Ir(Ve,Te,E,F),yt&&N.render(E),Ls(T,E,F)}le!==null&&X===0&&(it.updateMultisampleRenderTarget(le),it.updateRenderTargetMipmap(le)),k&&O.end(I),E.isScene===!0&&E.onAfterRender(I,E,F),Ie.resetDefaultState(),K=-1,ce=null,w.pop(),w.length>0?(A=w[w.length-1],it.setTextureUnits(A.state.textureUnits),Ee===!0&&ie.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,H!==null&&H.renderEnd()};function Cr(E,F,Z,k){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){let Ve=F.isArrayCamera?we:de;if(!E.frustumCulled||E.intersectsFrustum(Ve)){k&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ve);let Te=xe.update(E),Be=E.material;Be.visible&&T.push(E,Te,Be,Z,He.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Ve=F.isArrayCamera?we:de;if(!E.frustumCulled||E.intersectsFrustum(Ve)){let Te=xe.update(E),Be=E.material;if(k&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),He.copy(Te.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(ve)),Array.isArray(Be)){let Ye=Te.groups;for(let ct=0,St=Ye.length;ct<St;ct++){let ze=Ye[ct],_t=Be[ze.materialIndex];_t&&_t.visible&&T.push(E,Te,_t,Z,He.z,ze,F)}}else Be.visible&&T.push(E,Te,Be,Z,He.z,null,F)}}}let De=E.children;for(let Ve=0,Te=De.length;Ve<Te;Ve++)Cr(De[Ve],F,Z,k)}function Ls(E,F,Z,k){let{opaque:V,transmissive:De,transparent:Ve}=E;A.setupLightsView(Z),Ee===!0&&ie.setGlobalState(I.clippingPlanes,Z),k&&Re.viewport(se.copy(k)),V.length>0&&Ns(V,F,Z),De.length>0&&Ns(De,F,Z),Ve.length>0&&Ns(Ve,F,Z),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Ir(E,F,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[k.id]===void 0){let ze=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[k.id]=new Un(1,1,{generateMipmaps:!0,type:ze?mi:kn,minFilter:Vi,samples:Math.max(4,Bt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Et.workingColorSpace})}let De=A.state.transmissionRenderTarget[k.id],Ve=k.viewport||se;De.setSize(Ve.z*I.transmissionResolutionScale,Ve.w*I.transmissionResolutionScale);let Te=I.getRenderTarget(),Be=I.getActiveCubeFace(),Ye=I.getActiveMipmapLevel();I.setRenderTarget(De),I.getClearColor(z),te=I.getClearAlpha(),te<1&&I.setClearColor(16777215,.5),I.clear(),yt&&N.render(Z);let ct=I.toneMapping;I.toneMapping=Ai;let St=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),A.setupLightsView(k),Ee===!0&&ie.setGlobalState(I.clippingPlanes,k),Ns(E,Z,k),it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let _t=0,Xt=F.length;_t<Xt;_t++){let Ft=F[_t],{object:zt,geometry:yn,material:qe,group:nn}=Ft;if(qe.side===Qt&&zt.layers.test(k.layers)){let Rt=qe.side;qe.side=An,qe.needsUpdate=!0,Xi(zt,Z,k,yn,qe,nn),qe.side=Rt,qe.needsUpdate=!0,ze=!0}}ze===!0&&(it.updateMultisampleRenderTarget(De),it.updateRenderTargetMipmap(De))}I.setRenderTarget(Te,Be,Ye),I.setClearColor(z,te),St!==void 0&&(k.viewport=St),I.toneMapping=ct}function Ns(E,F,Z){let k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,De=E.length;V<De;V++){let Ve=E[V],{object:Te,geometry:Be,group:Ye}=Ve,ct=Ve.material;ct.allowOverride===!0&&k!==null&&(ct=k),Te.layers.test(Z.layers)&&Xi(Te,F,Z,Be,ct,Ye)}}function Xi(E,F,Z,k,V,De){H!==null&&V.isNodeMaterial&&H.setObject(E,V),E.onBeforeRender(I,F,Z,k,V,De),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(I,F,Z,k,E,De),V.transparent===!0&&V.side===Qt&&V.forceSinglePass===!1?(V.side=An,V.needsUpdate=!0,I.renderBufferDirect(Z,F,k,V,E,De),V.side=Ti,V.needsUpdate=!0,I.renderBufferDirect(Z,F,k,V,E,De),V.side=Qt):I.renderBufferDirect(Z,F,k,V,E,De),E.onAfterRender(I,F,Z,k,V,De)}function ka(E){let F=0;for(let Z of E)Z.texture!==null&&F++;return F}function si(E,F,Z){F.isScene!==!0&&(F=xt);let k=Xe.get(E),V=A.state.lights,De=A.state.shadowsArray,Ve=V.state.version,Te=he.getParameters(E,V.state,De,F,Z,A.state.lightProbeGridArray),Be=he.getProgramCacheKey(Te),Ye=k.programs;k.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let ct=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;k.envMap=C.get(E.envMap||k.environment,ct),k.envMapRotation=k.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ye===void 0&&(E.addEventListener("dispose",Ut),Ye=new Map,k.programs=Ye,k.programVariants=new Map);let St=Ye.get(Be);if(St!==void 0){if(k.currentProgram===St&&k.lightsStateVersion===Ve)return Fs(E,Te),St}else Te.uniforms=he.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,Z,Te),E.onBeforeCompile(Te,I),St=he.acquireProgram(Te,Be),Ye.set(Be,St),k.uniforms=Te.uniforms;let ze=k.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=ie.uniform),Fs(E,Te),k.needsLights=Wa(E),k.lightsStateVersion=Ve,k.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.sunLights.value=V.state.sun,ze.sunLightShadows.value=V.state.sunShadow,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.sunShadowMatrix.value=V.state.sunShadowMatrix,ze.sunShadowCascade.value=V.state.sunShadowCascade,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),k.numLightProbeGrids=ka(A.state.lightProbeGridArray),k.currentProgram=St,k.uniformsList=null,St}function Us(E,F,Z,k,V){let De=Xe.get(E),Ve=De.currentProgram.id+","+k+","+V,Te=De.programVariants.get(Ve);return Te===void 0?(Te=si(E,F,Z),De.programVariants.set(Ve,Te)):(De.currentProgram=Te,De.uniformsList=null,De.outputColorSpace=k,De.toneMapping=V),Te}function us(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=xr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Fs(E,F){let Z=Xe.get(E);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function Ga(E,F,Z,k,V){F.isScene!==!0&&(F=xt),it.resetTextureUnits();let De=F.fog,Ve=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,Te=le===null?I.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Et.workingColorSpace,Be=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ye=C.get(k.envMap||Ve,Be),ct=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,St=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),ze=!!Z.morphAttributes.position,_t=!!Z.morphAttributes.normal,Xt=!!Z.morphAttributes.color,Ft=Ai;k.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Ft=I.toneMapping);let zt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,yn=zt!==void 0?zt.length:0,qe=Xe.get(k),nn=A.state.lights;if(Ee===!0&&(Fe===!0||E!==ce)){let Ht=E===ce&&k.id===K;ie.setState(k,E,Ht)}let Rt=!1,xi=!1;k.version===qe.__version?qe.needsLights&&qe.lightsStateVersion!==nn.state.version||V.isBatchedMesh&&qe.batching===!1||!V.isBatchedMesh&&qe.batching===!0||V.isBatchedMesh&&qe.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&qe.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&qe.instancing===!1||!V.isInstancedMesh&&qe.instancing===!0||V.isSkinnedMesh&&qe.skinning===!1||!V.isSkinnedMesh&&qe.skinning===!0||V.isInstancedMesh&&qe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&qe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&qe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&qe.instancingMorph===!1&&V.morphTexture!==null||qe.envMap!==Ye||k.fog===!0&&qe.fog!==De||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ie.numPlanes||qe.numIntersection!==ie.numIntersection)||qe.vertexAlphas!==ct||qe.vertexTangents!==St||qe.morphTargets!==ze||qe.morphNormals!==_t||qe.morphColors!==Xt||qe.morphTargetsCount!==yn||qe.numLightProbeGrids!==ka(A.state.lightProbeGridArray)?Rt=!0:(qe.outputColorSpace!==Te||qe.toneMapping!==Ft)&&(xi=!0):(Rt=!0,qe.__version=k.version);let an=qe.currentProgram;(Rt===!0||xi===!0)&&(an=xi===!0?Us(k,F,V,Te,Ft):si(k,F,V),H&&k.isNodeMaterial&&H.onUpdateProgram(k,an,qe));let qi=!1,ri=!1,Zn=!1,nt=an.getUniforms(),cn=qe.uniforms;if(Re.useProgram(an.program)&&(qi=!0,ri=!0,Zn=!0),k.id!==K&&(K=k.id,ri=!0),qi||ce!==E){Re.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),nt.setValue(B,"projectionMatrix",E.projectionMatrix),nt.setValue(B,"viewMatrix",E.matrixWorldInverse);let on=nt.map.cameraPosition;on!==void 0&&on.setValue(B,ft.setFromMatrixPosition(E.matrixWorld)),Bt.logarithmicDepthBuffer&&nt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&nt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),ce!==E&&(ce=E,ri=!0,Zn=!0)}if(qe.needsLights&&(nn.state.sunShadowMap.length>0&&nt.setValue(B,"sunShadowMap",nn.state.sunShadowMap,it),nn.state.directionalShadowMap.length>0&&nt.setValue(B,"directionalShadowMap",nn.state.directionalShadowMap,it),nn.state.spotShadowMap.length>0&&nt.setValue(B,"spotShadowMap",nn.state.spotShadowMap,it),nn.state.pointShadowMap.length>0&&nt.setValue(B,"pointShadowMap",nn.state.pointShadowMap,it)),V.isSkinnedMesh){nt.setOptional(B,V,"bindMatrix"),nt.setOptional(B,V,"bindMatrixInverse");let Ht=V.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),nt.setValue(B,"boneTexture",Ht.boneTexture,it))}V.isBatchedMesh&&(nt.setOptional(B,V,"batchingTexture"),nt.setValue(B,"batchingTexture",V._matricesTexture,it),nt.setOptional(B,V,"batchingIdTexture"),nt.setValue(B,"batchingIdTexture",V._indirectTexture,it),nt.setOptional(B,V,"batchingColorTexture"),V._colorsTexture!==null&&nt.setValue(B,"batchingColorTexture",V._colorsTexture,it));let zn=Z.morphAttributes;if((zn.position!==void 0||zn.normal!==void 0||zn.color!==void 0)&&oe.update(V,Z,an),(ri||qe.receiveShadow!==V.receiveShadow)&&(qe.receiveShadow=V.receiveShadow,nt.setValue(B,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Px()),ri){if(nt.setValue(B,"toneMappingExposure",I.toneMappingExposure),qe.needsLights&&Va(cn,Zn),De&&k.fog===!0&&Ae.refreshFogUniforms(cn,De),Ae.refreshMaterialUniforms(cn,k,ae,Ge,A.state.transmissionRenderTarget[E.id]),qe.needsLights&&qe.numLightProbeGrids>0){let Ht=v,on=0;for(let $n of A.state.lightProbeGridArray)$n.texture!==null&&(Ht.textures[on]=$n.texture,Ht.min[on]=$n.boundingBox.min,Ht.max[on]=$n.boundingBox.max,Ht.resolution[on]=$n.resolution,on++);for(let $n in Ht)Ht[$n].length=on;cn.probesSH.value=Ht.textures,cn.probesMin.value=Ht.min,cn.probesMax.value=Ht.max,cn.probesResolution.value=Ht.resolution}xr.upload(B,us(qe),cn,it)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(xr.upload(B,us(qe),cn,it),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&nt.setValue(B,"center",V.center),nt.setValue(B,"modelViewMatrix",V.modelViewMatrix),nt.setValue(B,"normalMatrix",V.normalMatrix),nt.setValue(B,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let Ht=k.uniformsGroups;for(let on=0,$n=Ht.length;on<$n;on++){let M=Ht[on];Je.update(M,an),Je.bind(M,an)}}return an}function Va(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Wa(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return le},this.setRenderTargetTextures=function(E,F,Z){let k=Xe.get(E);k.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Xe.get(E.texture).__webglTexture=F,Xe.get(E.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let Z=Xe.get(E);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Z=0){le=E,J=F,X=Z;let k=null,V=!1,De=!1;if(E){let Te=Xe.get(E);if(Te.__useDefaultFramebuffer!==void 0){Re.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),se.copy(E.viewport),Ue.copy(E.scissor),Ke=E.scissorTest,Re.viewport(se),Re.scissor(Ue),Re.setScissorTest(Ke),K=-1;return}else if(Te.__webglFramebuffer===void 0)it.setupRenderTarget(E);else if(Te.__hasExternalTextures)it.rebindTextures(E,Xe.get(E.texture).__webglTexture,Xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let ct=E.depthTexture;if(Te.__boundDepthTexture!==ct){if(ct!==null&&Xe.has(ct)&&(E.width!==ct.image.width||E.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(E)}}let Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(De=!0);let Ye=Xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ye[F])?k=Ye[F][Z]:k=Ye[F],V=!0):E.samples>0&&it.useMultisampledRTT(E)===!1?k=Xe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ye)?k=Ye[Z]:k=Ye,se.copy(E.viewport),Ue.copy(E.scissor),Ke=E.scissorTest}else se.copy($e).multiplyScalar(ae).floor(),Ue.copy(lt).multiplyScalar(ae).floor(),Ke=dt;if(Z!==0&&(k=Y),Re.bindFramebuffer(B.FRAMEBUFFER,k)&&Re.drawBuffers(E,k),Re.viewport(se),Re.scissor(Ue),Re.setScissorTest(Ke),V){let Te=Xe.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,Z)}else if(De){let Te=F;for(let Be=0;Be<E.textures.length;Be++){let Ye=Xe.get(E.textures[Be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Be,Ye.__webglTexture,Z,Te)}}else if(E!==null&&Z!==0){let Te=Xe.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,Z)}K=-1};function Os(E){let F=Xe.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Bt.textureFormatReadable(E.format),F.__typeReadable=Bt.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Z,k,V,De,Ve,Te=0){if(!(E&&E.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be){Re.bindFramebuffer(B.FRAMEBUFFER,Be);try{let Ye=E.textures[Te],ct=Ye.format,St=Ye.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let ze=Os(Ye);if(ze.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-k&&Z>=0&&Z<=E.height-V&&B.readPixels(F,Z,k,V,be.convert(ct),be.convert(St),De)}finally{let Ye=le!==null?Xe.get(le).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(E,F,Z,k,V,De,Ve,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(Be=Be[Ve],Array.isArray(Be)&&(Be=Be[0])),Be)if(F>=0&&F<=E.width-k&&Z>=0&&Z<=E.height-V){Re.bindFramebuffer(B.FRAMEBUFFER,Be);let Ye=E.textures[Te],ct=Ye.format,St=Ye.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let ze=Os(Ye);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.bufferData(B.PIXEL_PACK_BUFFER,De.byteLength,B.STREAM_READ),B.readPixels(F,Z,k,V,be.convert(ct),be.convert(St),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Xt=le!==null?Xe.get(le).__webglFramebuffer:null;Re.bindFramebuffer(B.FRAMEBUFFER,Xt);let Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ju(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,De),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(_t),B.deleteSync(Ft),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Z=0){let k=Math.pow(2,-Z),V=Math.floor(E.image.width*k),De=Math.floor(E.image.height*k),Ve=F!==null?F.x:0,Te=F!==null?F.y:0;it.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,Ve,Te,V,De),Re.unbindTexture()},this.copyTextureToTexture=function(E,F,Z=null,k=null,V=0,De=0){let Ve,Te,Be,Ye,ct,St,ze,_t,Xt,Ft=E.isCompressedTexture?E.mipmaps[De]:E.image;if(Z!==null)Ve=Z.max.x-Z.min.x,Te=Z.max.y-Z.min.y,Be=Z.isBox3?Z.max.z-Z.min.z:1,Ye=Z.min.x,ct=Z.min.y,St=Z.isBox3?Z.min.z:0;else{let nt=Math.pow(2,-V);Ve=Math.floor(Ft.width*nt),Te=Math.floor(Ft.height*nt),E.isDataArrayTexture?Be=Ft.depth:E.isData3DTexture?Be=Math.floor(Ft.depth*nt):Be=1,Ye=0,ct=0,St=0}k!==null?(ze=k.x,_t=k.y,Xt=k.z):(ze=0,_t=0,Xt=0);let zt=be.convert(F.format),yn=be.convert(F.type),qe;F.isData3DTexture?(it.setTexture3D(F,0),qe=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(it.setTexture2DArray(F,0),qe=B.TEXTURE_2D_ARRAY):(it.setTexture2D(F,0),qe=B.TEXTURE_2D),Re.activeTexture(B.TEXTURE0),Re.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Re.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Re.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=Re.getParameter(B.UNPACK_ROW_LENGTH),Rt=Re.getParameter(B.UNPACK_IMAGE_HEIGHT),xi=Re.getParameter(B.UNPACK_SKIP_PIXELS),an=Re.getParameter(B.UNPACK_SKIP_ROWS),qi=Re.getParameter(B.UNPACK_SKIP_IMAGES);Re.pixelStorei(B.UNPACK_ROW_LENGTH,Ft.width),Re.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ft.height),Re.pixelStorei(B.UNPACK_SKIP_PIXELS,Ye),Re.pixelStorei(B.UNPACK_SKIP_ROWS,ct),Re.pixelStorei(B.UNPACK_SKIP_IMAGES,St);let ri=E.isDataArrayTexture||E.isData3DTexture,Zn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let nt=Xe.get(E),cn=Xe.get(F),zn=Xe.get(nt.__renderTarget),Ht=Xe.get(cn.__renderTarget);Re.bindFramebuffer(B.READ_FRAMEBUFFER,zn.__webglFramebuffer),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let on=0;on<Be;on++)ri&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(E).__webglTexture,V,St+on),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(F).__webglTexture,De,Xt+on)),B.blitFramebuffer(Ye,ct,Ye+Ve,ct+Te,ze,_t,ze+Ve,_t+Te,B.DEPTH_BUFFER_BIT,B.NEAREST);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||Xe.has(E)){let nt=Xe.get(E),cn=Xe.get(F);Re.bindFramebuffer(B.READ_FRAMEBUFFER,L),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let zn=0;zn<Be;zn++)ri?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,nt.__webglTexture,V,St+zn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,nt.__webglTexture,V),Zn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,De,Xt+zn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,De),V!==0?B.blitFramebuffer(Ye,ct,Ye+Ve,ct+Te,ze,_t,ze+Ve,_t+Te,B.COLOR_BUFFER_BIT,B.NEAREST):Zn?B.copyTexSubImage3D(qe,De,ze,_t,Xt+zn,Ye,ct,Ve,Te):B.copyTexSubImage2D(qe,De,ze,_t,Ye,ct,Ve,Te);Re.bindFramebuffer(B.READ_FRAMEBUFFER,null),Re.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Zn?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(qe,De,ze,_t,Xt,Ve,Te,Be,zt,yn,Ft.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(qe,De,ze,_t,Xt,Ve,Te,Be,zt,Ft.data):B.texSubImage3D(qe,De,ze,_t,Xt,Ve,Te,Be,zt,yn,Ft):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,De,ze,_t,Ve,Te,zt,yn,Ft.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,De,ze,_t,Ft.width,Ft.height,zt,Ft.data):B.texSubImage2D(B.TEXTURE_2D,De,ze,_t,Ve,Te,zt,yn,Ft);Re.pixelStorei(B.UNPACK_ROW_LENGTH,nn),Re.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Rt),Re.pixelStorei(B.UNPACK_SKIP_PIXELS,xi),Re.pixelStorei(B.UNPACK_SKIP_ROWS,an),Re.pixelStorei(B.UNPACK_SKIP_IMAGES,qi),De===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(qe),Re.unbindTexture()},this.initRenderTarget=function(E){Xe.get(E).__webglFramebuffer===void 0&&it.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?it.setTextureCube(E,0):E.isData3DTexture?it.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?it.setTexture2DArray(E,0):it.setTexture2D(E,0),Re.unbindTexture()},this.resetState=function(){J=0,X=0,le=null,Re.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}};function Vd(i,e,t=1){let n=new tt,s=new Bn({color:"#d6ebe5",transparent:!0,opacity:.075,depthWrite:!1,roughness:.08,clearcoat:1,side:Qt}),r=new bt({color:"#6e8b80",roughness:.3,metalness:.55}),a=new bt({color:"#c8d9d0",roughness:.23,metalness:.75}),o=new We(new Nt(i-.035,e-.035),s);n.add(o);function l(p,y,S,v,T,A,x){let w=new We(new un(p,y,S),x);return w.position.set(v,T,A),n.add(w),w}for(let p of[-1,1])l(.045,e,.055,p*i/2,0,.02,r),l(i,.045,.055,0,p*e/2,.02,r);let c=i/2-.035,h=e/2-.25,u=l(.022,.27,.028,c,h,.09,a);for(let p of[-.12,.12])l(.024,.022,.085,c,h+p,.045,a);let d=0,f=0,g=new P;function _(p,y,S,v=0){g.set(p,y,S),n.position.copy(g),n.rotation.y=v}function m(p,y=!1){return Math.abs(d-f)<.001?!1:(d=y?f:d+Math.sign(f-d)*Math.min(Math.abs(f-d),p*3.5),n.position.x=g.x+t*i*.88*d,!0)}return{group:n,pane:o,handle:u,closed:g,setClosedPosition:_,tick:m,toggle(){f=f?0:1},open(){f=1},get isOpen(){return d>.97},get opening(){return f===1}}}function Wd(i=8){let e=i;return()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296)}function Xd(i,e=1,t=1){let n=new Hn(i);return n.colorSpace=Yt,n.wrapS=n.wrapT=er,n.repeat.set(e,t),n.anisotropy=8,n}function bh({floor:i=!1}={}){let e=document.createElement("canvas");e.width=e.height=i?1024:512;let t=e.getContext("2d"),n=e.width,s=e.height,r=Wd(i?17:42),a=t.createImageData(n,s),o=s/(i?8:4),l=Array.from({length:i?8:4},()=>r()*12-6);for(let u=0;u<s;u++)for(let d=0;d<n;d++){let f=Math.floor(u/o),g=u%o/o,_=Math.sin(g*92+Math.sin(d*.009+f)*.8)*1.7+Math.sin(g*330+Math.sin(d*.015)*2.5)*1.2,m=(r()-.5)*3.5,p=u%o<2?-23:0,y=l[f]+_+m+p,S=(u*n+d)*4;a.data[S]=204+y,a.data[S+1]=176+y*.85,a.data[S+2]=132+y*.65,a.data[S+3]=255}t.putImageData(a,0,0);for(let u=0;u<(i?8:4);u++){let d=Math.round((u*271+90)%n),f=u*o;if(t.fillStyle="rgba(61,40,20,.18)",t.fillRect(d,f,2,o),u%3===1){let g=(u*197+241)%n,_=f+o*.58;t.save(),t.translate(g,_),t.scale(2.8,.55);for(let m=3;m<22;m+=3)t.strokeStyle=`rgba(68,40,20,${.14-m*.003})`,t.lineWidth=.8,t.beginPath(),t.ellipse(0,0,m,m*.65,0,0,Math.PI*2),t.stroke();t.restore()}}let c=Xd(e,i?11:1,i?9:1),h=c.clone();return h.colorSpace=ei,new bt({map:c,bumpMap:h,bumpScale:i?.009:.004,roughness:i?.58:.68,color:i?"#eddcc6":"#f6dfc4"})}function qd(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createImageData(128,128),n=Wd(44);for(let a=0;a<t.data.length;a+=4){let o=239+(n()-.5)*13;t.data[a]=o,t.data[a+1]=o-5,t.data[a+2]=o-13,t.data[a+3]=255}e.putImageData(t,0,0);let s=Xd(i,8,4),r=s.clone();return r.colorSpace=ei,new bt({map:s,color:"#ddd4bc",bumpMap:r,bumpScale:.018,roughness:.94})}function _n(i,e,t,n,s=.035){let r=Math.min(s,i/4,e/4,t/4),a=new fi,o=-i/2,l=-e/2;a.moveTo(o+r,l),a.lineTo(o+i-r,l),a.quadraticCurveTo(o+i,l,o+i,l+r),a.lineTo(o+i,l+e-r),a.quadraticCurveTo(o+i,l+e,o+i-r,l+e),a.lineTo(o+r,l+e),a.quadraticCurveTo(o,l+e,o,l+e-r),a.lineTo(o,l+r),a.quadraticCurveTo(o,l,o+r,l);let c=new vs(a,{depth:Math.max(.001,t-2*r),bevelEnabled:!0,bevelSize:r*.65,bevelThickness:r,bevelSegments:2,steps:1,curveSegments:5});c.translate(0,0,-t/2+r);let h=c.attributes.uv,u=c.attributes.position;for(let f=0;f<h.count;f++)h.setXY(f,(u.getX(f)+i/2)/i,(u.getY(f)+e/2)/e);let d=new We(c,n);return d.castShadow=!0,d.receiveShadow=!0,d}function os(i,e,t=.18){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,5,32,32,32);r.addColorStop(0,`rgba(27,25,17,${t})`),r.addColorStop(.62,`rgba(27,25,17,${t*.7})`),r.addColorStop(1,"rgba(27,25,17,0)"),s.fillStyle=r,s.fillRect(0,0,64,64);let a=new We(new Nt(i,e),new Zt({map:new Hn(n),transparent:!0,depthWrite:!1,toneMapped:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.012,a}function Dx(i=4){let e=new Map,t=0,n=0,s=!1;function r(){for(s=!1;t<i;){let o=[...e.values()].filter(l=>l.state==="pending").sort((l,c)=>c.priority-l.priority||l.sequence-c.sequence)[0];if(!o)break;o.state="running",t++,Promise.resolve().then(o.run).then(l=>{o.state="done",o.resolve(l)},l=>{o.state="failed",o.reject(l)}).finally(()=>{t--,a()})}}function a(){s||(s=!0,queueMicrotask(r))}return{enqueue(o,l,c=0){let h=e.get(o);if(h&&h.state!=="failed")return h.priority=Math.max(h.priority,c),h.promise;let u={key:o,run:l,priority:c,sequence:n++,state:"pending"};return u.promise=new Promise((d,f)=>{u.resolve=d,u.reject=f}),e.set(o,u),a(),u.promise},promote(o,l=10){let c=e.get(o);c&&c.state==="pending"&&(c.priority=Math.max(c.priority,l),a())},forget(o){let l=e.get(o);return l&&l.state!=="running"&&l.state!=="pending"?e.delete(o):!1},stats(){let o=[...e.values()];return{running:t,pending:o.filter(l=>l.state==="pending").length,done:o.filter(l=>l.state==="done").length,failed:o.filter(l=>l.state==="failed").length}}}}var Mr=Dx(4);function Sr(i,e,t=0,n=12e3){return Mr.enqueue(i,()=>new Promise((s,r)=>{let a=new Image,o,l=c=>{clearTimeout(o),a.onload=a.onerror=null,c?s(a):(a.src="",r(new Error("Image unavailable: "+i)))};a.onload=()=>l(!0),a.onerror=()=>l(!1),a.decoding="async",o=setTimeout(()=>l(!1),n),a.src=e}),t)}function Yd(i=20){let e=new Map,t=new Set;function n(){for(;e.size>i;){let s=[...e.keys()].find(a=>!t.has(a));if(s===void 0)break;let r=e.get(s);e.delete(s),r()}}return{focus(s){t=new Set(s),n()},touch(s,r){e.delete(s),e.set(s,r),n()},size:()=>e.size}}var Eh=Yd(20);function Zd(i){Eh.focus(i)}function Vl(i,e){let t=i.image,n=r=>r?.naturalWidth||r?.width||0,s=r=>r?.naturalHeight||r?.height||0;t&&(n(t)!==n(e)||s(t)!==s(e))&&i.dispose(),i.image=e,i.needsUpdate=!0}function br(i){let e=window.ProducePhotos?.[window.GroceryGame.photoKey(i)];if(e)return e;let t=window.ProductPhotos||{};return t[i.variantId]||t[`${i.productId}-${i.pack}`]||t[i.productId]}function $d(i,e){let t=new pn;t.colorSpace=Yt,t.userData.callbacks=[];let n=window.FastAssets?.products?.[i.id];if(n){t.userData.presentation={aspect:n.aspect,outline:n.outline,sideColor:new at().fromArray(n.sideColor)};let r=!1,a=!1,o=!1,l=null,c=0,h=-1/0,u="",d=new Image;d.onload=()=>{r||(Vl(t,d),window.dispatchEvent(new Event("grocery:texturepreview")))},d.src=n.placeholder;let f=()=>{window.dispatchEvent(new Event("grocery:texturepreview"))},g=()=>{a=!1,Vl(t,l||d),t.userData.quality=l?"shelf":"preview",Mr.forget(u),f()};return t.userData.quality="preview",t.userData.requestDetail=()=>{if(a){Eh.touch(i.id,g);return}o||Date.now()-h<4e3||(o=!0,u="product-detail:"+i.id+":"+c++,Sr(u,n.large,100,2e4).then(_=>{o=!1,a=!0,r=!0,Vl(t,_),t.userData.quality="detail",Eh.touch(i.id,g),f()},()=>{o=!1,h=Date.now()}))},Sr("product:"+i.id,n.small).then(_=>{r=!0,l=_,a||(Vl(t,_),t.userData.quality="shelf"),e(!0)},()=>e(a)),t}let s=new Image;return s.onload=()=>{let r=i.render_crop,a=Array.isArray(r)?r:r?[r.x,r.y,r.x+r.width,r.y+r.height]:[0,0,1,1],o=s.naturalWidth,l=s.naturalHeight,c=typeof window<"u"&&window.innerWidth<=700?320:640,h=Math.min(1,c/Math.max(o*(a[2]-a[0]),l*(a[3]-a[1]))),u=document.createElement("canvas");u.width=Math.max(1,Math.round(o*(a[2]-a[0])*h)),u.height=Math.max(1,Math.round(l*(a[3]-a[1])*h));let d=u.getContext("2d",{willReadFrequently:!0});d.drawImage(s,o*a[0],l*a[1],o*(a[2]-a[0]),l*(a[3]-a[1]),0,0,u.width,u.height);for(let z of i.render_labels||[]){let[te,me,Ge,ae]=z.rect,ee=(te-a[0])/(a[2]-a[0])*u.width,Dt=(me-a[1])/(a[3]-a[1])*u.height,$e=Ge/(a[2]-a[0])*u.width,lt=ae/(a[3]-a[1])*u.height;d.fillStyle="#f7edcc",d.fillRect(ee,Dt,$e,lt),d.strokeStyle="#beaa79",d.lineWidth=1,d.strokeRect(ee,Dt,$e,lt),d.fillStyle="#5e7051",d.font=`${Math.max(5,lt*.55)}px Arial`,d.textAlign="center",d.fillText(z.text,ee+$e/2,Dt+lt*.72,$e-3)}i.render_polygon&&(d.globalCompositeOperation="destination-in",d.beginPath(),i.render_polygon.forEach(([z,te],me)=>{let Ge=(z-a[0])/(a[2]-a[0])*u.width,ae=(te-a[1])/(a[3]-a[1])*u.height;me?d.lineTo(Ge,ae):d.moveTo(Ge,ae)}),d.closePath(),d.fill(),d.globalCompositeOperation="source-over");let f=d.getImageData(0,0,u.width,u.height),g=f.data,_=u.width*u.height,m=new Uint8Array(_),p=new Int32Array(_),y=Uint8Array.from({length:_},(z,te)=>g[te*4+3]),S=0,v=0,T=z=>{if(m[z])return;m[z]=1;let te=z*4,me=Math.min(g[te],g[te+1],g[te+2]),Ge=Math.max(g[te],g[te+1],g[te+2]);(g[te+3]<8||me>228&&Ge-me<24)&&(p[v++]=z)};for(let z=0;z<u.width;z++)T(z),T((u.height-1)*u.width+z);for(let z=0;z<u.height;z++)T(z*u.width),T(z*u.width+u.width-1);for(;S<v;){let z=p[S++],te=z%u.width,me=Math.floor(z/u.width);g[z*4+3]=0,te&&T(z-1),te<u.width-1&&T(z+1),me&&T(z-u.width),me<u.height-1&&T(z+u.width)}let A=new Int32Array(u.height).fill(u.width),x=new Int32Array(u.height).fill(-1),w=new Int32Array(u.width).fill(u.height),O=new Int32Array(u.width).fill(-1);for(let z=0;z<u.height;z++)for(let te=0;te<u.width;te++)g[(z*u.width+te)*4+3]<100||(A[z]=Math.min(A[z],te),x[z]=Math.max(x[z],te),w[te]=Math.min(w[te],z),O[te]=Math.max(O[te],z));for(let z=0;z<u.height;z++)for(let te=0;te<u.width;te++){let me=z*u.width+te;y[me]>100&&g[me*4+3]<8&&te>A[z]+1&&te<x[z]-1&&z>w[te]+1&&z<O[te]-1&&(g[me*4+3]=y[me])}let I=u.width,U=u.height,H=0,Y=0,L=0,q=0,J=0,X=0;for(let z=0;z<u.height;z++)for(let te=0;te<u.width;te++){let me=(z*u.width+te)*4;g[me+3]<100||(I=Math.min(I,te),H=Math.max(H,te),U=Math.min(U,z),Y=Math.max(Y,z),(te+z)%17===0&&Math.min(g[me],g[me+1],g[me+2])<210&&(L+=g[me],q+=g[me+1],J+=g[me+2],X++))}d.putImageData(f,0,0);let le=document.createElement("canvas");le.width=Math.max(1,H-I+1),le.height=Math.max(1,Y-U+1);let K=le.getContext("2d",{willReadFrequently:!0});K.drawImage(u,I,U,le.width,le.height,0,0,le.width,le.height);let ce=K.getImageData(0,0,le.width,le.height).data,se=[],Ue=[],Ke=Math.min(72,le.height);for(let z=0;z<Ke;z++){let te=Math.round(z*(le.height-1)/Math.max(1,Ke-1)),me=le.width,Ge=-1;for(let ae=0;ae<le.width;ae++)ce[(te*le.width+ae)*4+3]>130&&(me=Math.min(me,ae),Ge=Math.max(Ge,ae));Ge>=me&&(se.push([me/le.width-.5,.5-te/le.height]),Ue.push([(Ge+1)/le.width-.5,.5-te/le.height]))}t.image=le,t.userData.presentation={aspect:le.width/le.height,outline:Lx([...Ue,...se.reverse()]),sideColor:X?new at(L/X/255,q/X/255,J/X/255).convertSRGBToLinear():new at("#b2a080")},t.needsUpdate=!0,t.userData.callbacks.forEach(z=>z(t.userData.presentation)),t.userData.callbacks=[],e(!0)},s.onerror=()=>e(!1),s.src=i.path,t}function Lx(i){let e=(s,r,a)=>{let o=a[0]-r[0],l=a[1]-r[1],c=Math.max(0,Math.min(1,((s[0]-r[0])*o+(s[1]-r[1])*l)/(o*o+l*l||1)));return Math.hypot(s[0]-r[0]-c*o,s[1]-r[1]-c*l)},t=s=>{if(s.length<4)return s;let r=0,a=0;for(let o=1;o<s.length-1;o++){let l=e(s[o],s[0],s[s.length-1]);l>r&&(r=l,a=o)}return r>.018?[...t(s.slice(0,a+1)).slice(0,-1),...t(s.slice(a))]:[s[0],s[s.length-1]]},n=Math.floor(i.length/2);return[...t(i.slice(0,n+1)).slice(0,-1),...t([...i.slice(n),i[0]]).slice(0,-1)]}var Nx={milk:[.72,.34,.22],yogurt:[.56,.31,.18],butter:[.28,.48,.14],cheese:[.48,.3,.12],eggs:[.36,.63,.28],flour:[.57,.38,.2],rice:[.57,.38,.2],sugar:[.55,.37,.18],salt:[.49,.34,.16],pasta:[.72,.25,.1],oil:[.73,.25,.18],water:[.7,.25,.18],icecream:[.49,.27,.07]};function ls(i,e,t,n,s){if(i.id==="eggs")return Ux(e,n);let r=new tt,a={bottle:[.73,.28,.18],carton:[.7,.34,.18],can:[.45,.34,.16],jar:[.44,.35,.18],tray:[.42,.65,.16],punnet:[.38,.62,.2],bag:[.61,.45,.16],packet:[.57,.39,.1],box:[.61,.48,.15],flat:[.4,.65,.08],tub:[.39,.45,.18],tube:[.68,.3,.1],roll:[.55,.45,.18],sausage:[.48,.49,.13],pump:[.7,.33,.18],bar:[.28,.45,.12]},[o,l,c]=Nx[i.id]||a[i.shelfKind]||(i.category==="bread"?[.56,.72,.2]:[.43,.64,.16]);c*=["bottle","can","jar","carton","box","tub"].includes(i.shelfKind)||["milk","water","oil","yogurt"].includes(i.id)?.52:.32,i.category==="bread"&&(c=.022),i.id==="milk"&&e.pack===500&&(o*=.76,l*=.82),i.id==="icecream"&&e.pack>=300&&(o=.43,l=.48,c=.04),i.category==="produce"&&i.shelfKind!=="punnet"&&(o=i.id==="pineapple"?.38:i.id==="cabbage"?.3:.24,l=i.id==="banana"?.34:.28,c=.025),l=Math.min(l,n*.83);let h=new Zt({map:t,side:Ti,transparent:!1,alphaTest:.15,alphaToCoverage:!0,toneMapped:!1});h.userData.owned=!0;let u=new We(new Nt(1,1),h);u.castShadow=!0,u.userData.lotId=e.id,r.add(u);let d=new We(new Nt(1,1),h);d.rotation.y=Math.PI,d.castShadow=!0,d.userData.lotId=e.id,r.add(d);let f=new bt({color:"#aa9777",roughness:.86});f.userData.owned=!0;let g=new bt({color:"#aa9777",roughness:.75});g.userData.owned=!0;let _=null,m=null,p=y=>{let S=Math.min(l,o*y.aspect),v=Math.min(o,l/y.aspect);if(u.scale.set(S,v,1),u.position.set(0,v/2,.015),d.scale.set(S,v,1),d.position.set(0,v/2,-c-.015),_&&(r.remove(_),_.geometry.dispose()),y.outline.length>5){let T=new fi(y.outline.map(([x,w])=>new ye(x*S,w*v+v/2))),A=new vs(T,{depth:c,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.0025,bevelSegments:1,steps:1,curveSegments:1});A.translate(0,0,-c),f.color.copy(y.sideColor).multiplyScalar(.92),g.color.copy(y.sideColor),_=new We(A,[g,f]),_.castShadow=!0,_.userData.lotId=e.id,r.add(_)}if(r.userData.dimensions={width:S,height:v,depth:c},i.shelfKind==="punnet"||i.id==="chicken-breast"){m&&(r.remove(m),m.traverse(I=>{I.isMesh&&I.geometry.dispose()})),m=new tt;let T=new bt({color:"#e7f1e6",transparent:!0,opacity:.23,roughness:.23,depthWrite:!1});T.userData.owned=!0;let A=new bt({color:"#adc1b0",transparent:!0,opacity:.72,roughness:.35});A.userData.owned=!0;let x=S*1.14,w=v*1.1,O=new We(new un(x,w,c+.045),T);O.position.set(0,v/2,-c/2),m.add(O);for(let I of[0,w]){let U=new We(new un(x,.012,c+.06),A);U.position.set(0,I-v*.05,-c/2),m.add(U)}for(let I of[-x/2,x/2]){let U=new We(new un(.012,w,c+.06),A);U.position.set(I,v/2,-c/2),m.add(U)}m.traverse(I=>{I.isMesh&&(I.userData.lotId=e.id,I.castShadow=!0)}),r.add(m)}s()};return u.scale.set(l,o,1),u.position.set(0,o/2,.015),d.scale.set(l,o,1),d.position.set(0,o/2,-c-.015),t.userData.presentation?p(t.userData.presentation):t.userData.callbacks.push(p),{group:r,front:u,back:d}}function Ux(i,e,t=!0){let n=new tt,s=Math.min(.66,e*.87),r=s/.66,a=f=>{let g=new bt({color:f,roughness:.88});return g.userData.owned=!0,g},o=a("#d4c7a4"),l=a("#b7a780"),c=_n(.66,.13,.4,o,.026);c.position.y=.07,n.add(c);let h=_n(.67,.018,.41,l,.01);h.position.y=.14,n.add(h);let u=_n(.67,.09,.41,o,.028);u.position.y=.19,n.add(u);for(let f of[-.22,0,.22]){let g=_n(.045,.012,.37,l,.006);g.position.set(f,.238,0),n.add(g)}if(t){let f=document.createElement("canvas");f.width=384,f.height=192;let g=f.getContext("2d");g.fillStyle="#3b604c",g.fillRect(0,0,384,192),g.strokeStyle="#cfb781",g.lineWidth=4,g.strokeRect(10,10,364,172),g.textAlign="center",g.fillStyle="#fff3cf",g.font="bold 52px Arial",g.fillText("\u04E8\u041D\u0414\u04E8\u0413",192,82),g.font="32px Arial",g.fillText("6 \u0448\u0438\u0440\u0445\u044D\u0433",192,135);let _=new Hn(f);_.colorSpace=Yt,_.userData.owned=!0;let m=new Zt({map:_,toneMapped:!1});m.userData.owned=!0;let p=new We(new Nt(.36,.2),m);p.rotation.x=-Math.PI/2,p.position.set(0,.259,0),n.add(p);let y=new We(new Nt(.3,.105),m);y.position.set(0,.16,.231),n.add(y),n.add(Er(.78,.52))}n.updateMatrixWorld(!0);let d=new Dn().setFromObject(n).min.y;return d<0&&n.children.forEach(f=>{f.position.y-=d}),n.scale.setScalar(r),n.traverse(f=>{f.isMesh&&(f.userData.lotId=i.id,f.castShadow=!0,f.receiveShadow=!0)}),n.userData.dimensions={width:s,height:.25*r,depth:.41*r},{group:n,front:c,back:u,lid:u}}function Ds(i,e,t,n,s=!0){i.scale.setScalar(1),i.position.set(0,0,0);let r=i.parent;r?.remove(i),i.updateMatrixWorld(!0);let a=new Dn().setFromObject(i),o=a.getSize(new P),l=Math.min(s?1/0:1,e/Math.max(.001,o.x),t/Math.max(.001,o.y),n/Math.max(.001,o.z));return i.scale.setScalar(l),i.position.set(-(a.min.x+a.max.x)*l/2,-a.min.y*l,-(a.min.z+a.max.z)*l/2),r?.add(i),l}function wh(i,e,t,n,s=()=>{}){let r=new tt,a=n?9:3,o=new Nt(1,1),l=new Zt({map:e,side:Qt,alphaTest:.18,alphaToCoverage:!0,toneMapped:!1});l.userData.owned=!0;let c=new Fn(o,l,a);c.userData.lotId=i.id,r.add(c);let h=()=>{let u=e.userData.presentation?.aspect||1,d=t*(n?.27:.72),f=n?.26:.49,g=Math.min(d,f*u),_=g/u,m=new kt;for(let p=0;p<a;p++){let y=n?Math.floor(p/3):p;m.position.set(n?(p%3-1)*t*.25:(p-1)*t*.09,_/2+.04+(n?(2-y)*.045:0),n?-.2+y*.19:-.12+p*.18),m.rotation.set(0,0,0),m.scale.set(g,_,1),m.updateMatrix(),c.setMatrixAt(p,m.matrix)}c.instanceMatrix.needsUpdate=!0,c.computeBoundingBox(),c.computeBoundingSphere(),s()};return e.userData.presentation?h():(h(),e.userData.callbacks.push(h)),{group:r,front:c}}function Jd(i,e,t,n=()=>{}){let s=new tt,r=new Zt({map:e,side:Qt,alphaTest:.18,alphaToCoverage:!0,toneMapped:!1});r.userData.owned=!0;let a=new Fn(new Nt(1,1),r,t.length);a.userData.lotId=i.id,a.castShadow=!0,s.add(a);let o=()=>{let l=e.userData.presentation?.aspect||1,c=new kt;t.forEach((h,u)=>{let d=Math.min(h.width,h.height*l),f=d/l;c.position.set(h.x,f/2,h.z),c.scale.set(d,f,1),c.updateMatrix(),a.setMatrixAt(u,c.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingBox(),a.computeBoundingSphere(),n()};return e.userData.presentation?o():(o(),e.userData.callbacks.push(o)),{group:s,front:a}}function Er(i,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,5,32,32,31);s.addColorStop(0,"rgba(35,27,16,.37)"),s.addColorStop(.55,"rgba(35,27,16,.18)"),s.addColorStop(1,"rgba(35,27,16,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);let r=new Hn(t);r.userData.owned=!0;let a=new Zt({map:r,transparent:!0,depthWrite:!1});a.userData.owned=!0;let o=new We(new Nt(i,e),a);return o.rotation.x=-Math.PI/2,o.position.y=.009,o.renderOrder=1,o}function Wl(i){return["buuz","bansh"].includes(i.id)?"frozen-dumplings":i.id==="mini-khuushuur"?"frozen-bakery":i.department==="frozen-vegetables"||["frozen-broccoli","frozen-peas","frozen-fries"].includes(i.id)?"frozen-vegetables":i.storage==="frozen"?i.category==="meat"?"frozen-meat":"frozen":i.id==="tilapia"?"frozen":i.category}var Kd=["fish-flounder","shrimp","fish-mackerel","fish-saury","tilapia","frozen-fish","crab-sticks"];function Qd(i){return[...i].sort((e,t)=>{let n=Kd.indexOf(e.key),s=Kd.indexOf(t.key);return(n<0?99:n)-(s<0?99:s)||e.key.localeCompare(t.key)})}function Xl(i){return["produce","ready","pantry-2"].includes(i)}function jd(i,e){let t={x:e.x,z:e.z,rotation:e.rotation};return Xl(i)?[t,{x:e.x-Math.sin(e.rotation)*.56,z:e.z-Math.cos(e.rotation)*.56,rotation:e.rotation+Math.PI}]:[t]}function ef(i,e){let t=Math.abs(Math.sin(e.rotation))<.5;if(!Xl(i))return{x0:e.x-(t?e.width/2+.15:.57),x1:e.x+(t?e.width/2+.15:.57),z0:e.z-(t?.53:e.width/2+.15),z1:e.z+(t?.63:e.width/2+.15)};let n=i==="ready"?-.28:-.265,s=i==="ready"?1.06:.945,r=e.x+Math.sin(e.rotation)*n,a=e.z+Math.cos(e.rotation)*n;return{x0:r-(t?e.width/2+.15:s),x1:r+(t?e.width/2+.15:s),z0:a-(t?s:e.width/2+.15),z1:a+(t?s:e.width/2+.15)}}function Fa(i){let e=new Map;for(let t of i){let n=t.variantId||t.productId;e.has(n)||e.set(n,{key:n,lots:[]}),e.get(n).lots.push(t)}return[...e.values()].sort((t,n)=>t.key.localeCompare(n.key)).map(t=>({...t,lots:t.lots.sort((n,s)=>n.pack-s.pack||n.batch.localeCompare(s.batch))}))}function tf(i,e){let t=Math.max(1,Math.floor((e-.35)/.62))*3,n=Fa(i),s=[];for(let r=0;r<n.length;r+=t){let a=n.slice(r,r+t),o=Math.min(Math.floor(t/3),Math.max(5,Math.ceil(a.length/3)));s.push({families:a,columns:o,spacing:(e-.35)/o})}return s}function nf(i){let e=Fa(i);if(!e.length)return{bins:[],labels:[]};if(e.length>8)throw Error("A freezer chest has eight physical compartments");let t=Array.from({length:8},(a,o)=>({family:e[o%e.length],x:(o%4-1.5)*.78,z:o<4?.29:-.29,y:.815})),n=Math.min(4,e.length),s=e.length<=2?1.2:.7,r=e.map((a,o)=>({family:a,width:s,x:(o%n-(n-1)/2)*(e.length<=2?1.56:.78),y:e.length>4?o<4?.66:.29:.47,z:.69}));return{bins:t,labels:r}}function sf(i,e,t,n=()=>{}){let s=new tt,r=new tt;r.rotation.x=-Math.PI/2,s.add(r);let a,o=()=>{a&&Ds(s,.67,.105,.48,!1),n()};return a=ls(i,e,t,.68,o),r.add(a.group),o(),{group:s,front:a.front}}function rf(i,e){let t=Math.max(9,i.length),n=3,s=Math.ceil(t/n);return Array.from({length:t},(r,a)=>({lot:i[a%i.length],x:(a%n-1)*e*.28,z:-.14+Math.floor(a/n)*Math.min(.19,.45/Math.max(1,s-1)),width:e*.25,height:.24,depth:.15}))}var ni={width:3.6,height:2.6,frame:.12,y:2.8,z:12.72,centers:Array.from({length:7},(i,e)=>-12.3+e*4.1)},ql=["Morning","Day","Evening","Night"];function Th(i=1,e=0){let t=Number.isSafeInteger(i)&&i>0?i:1,n=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0,s=(t-1)%4,r=n*3,a=Math.min(2,Math.floor(r)),o=r-a;return{weather:s,phase:r,season:s===3?"Winter":"Summer",from:a,to:a+1,blend:o*o*(3-2*o)}}function af(i,e,t){let n=i.isTexture?i:Object.values(i)[0],s=new tt,r={key:"",weather:0,phase:0},a={mapA:{value:n},mapB:{value:n},blend:{value:0},time:{value:0},weather:{value:0},darkness:{value:0}},o=new Qn({uniforms:a,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
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
    }`}),l=(d,f,g,_,m,p,y)=>{let S=new We(new un(d,f,g),y);return S.position.set(_,m,p),s.add(S),S};for(let[d,f]of ni.centers.entries()){let g=new Nt(ni.width,ni.height),_=g.attributes.uv;for(let v=0;v<_.count;v++)_.setX(v,(d%3+1-_.getX(v))/3);let m=new We(g,o);m.position.set(f,ni.y,ni.z),m.rotation.y=Math.PI,m.userData.exterior=!0,s.add(m);let p=ni.frame,y=ni.width,S=ni.height;for(let v of[-1,1])l(p,S+2*p,.16,f+v*(y+p)/2,ni.y,12.62,e);for(let v of[-1,1])l(y,p,.16,f,ni.y+v*(S+p)/2,12.62,e);l(.055,S,.12,f,ni.y,12.61,e),l(y+2*p+.1,.11,.43,f,ni.y-S/2-p-.055,12.52,t)}function c(d={}){let f=Th(d.day,d.progress),g=`${f.weather}:${f.phase}`;return g===r.key?!1:(Object.assign(r,f,{key:g}),a.mapA.value=i["city"+f.season+ql[f.from]]||n,a.mapB.value=i["city"+f.season+ql[f.to]]||n,a.blend.value=f.blend,a.weather.value=f.weather,a.darkness.value=Math.max(0,f.phase-2),!0)}let h=0;function u(d,f,g,_){return g||!f||_||r.weather<2||(h+=d,h<.04)?!1:(a.time.value+=h,h=0,!0)}return c(),{group:s,set:c,tick:u,material:o,uniforms:a}}function of(i){let e=Fa(i);return e.length?Array.from({length:8},(t,n)=>({family:e[n%e.length],x:.1275+n%4*.615,z:n<4?.43:-.1,y:n<4?.86:1.04,row:n<4?0:1,column:n%4})):[]}function lf(i,e,t,n=()=>{},s={width:.51,height:.31,depth:.43}){let r=new tt,a=new tt;a.rotation.x=-.92,r.add(a);let o=()=>{a.children.length&&Ds(r,s.width,s.height,s.depth,!1),n()},l=ls(i,e,t,.64,o);return a.add(l.group),o(),{group:r,front:l.front}}var Ah=Object.freeze({basket:Object.freeze({width:.84,depth:.6,bottom:.015,top:.5}),handle:Object.freeze({y:.738,z:.447,width:.738}),floor:-.6,contents:Object.freeze({min:Object.freeze({x:-.302,y:.034,z:-.183}),max:Object.freeze({x:.302,y:.485,z:.203})})});function Ch(i){return i.userData.owned=!0,i}function Oa(i,e,t,n){let s=Ch(new bt({color:e,roughness:t,metalness:n}));return s.name=i,s}function Yl(i,e,t,n,s=8){let r=Ch(new On(1,1,1,s)),a=new Fn(r,n,t.length);a.name=e,a.castShadow=!0,a.receiveShadow=!0;let o=new kt,l=new P,c=new P,h=new P,u=new P(0,1,0);return t.forEach(([d,f,g],_)=>{c.set(...d),h.set(...f),l.subVectors(h,c);let m=l.length();o.position.copy(c).add(h).multiplyScalar(.5),o.quaternion.setFromUnitVectors(u,l.normalize()),o.scale.set(g,m+g*.14,g),o.updateMatrix(),a.setMatrixAt(_,o.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingBox(),a.computeBoundingSphere(),i.add(a),a}function xn(i,e,t,n){i.push([e,t,n])}function Rh(i,e,t,n,s,r,a){let o=[[t-r,s-r,0],[-t+r,s-r,Math.PI/2],[-t+r,n+r,Math.PI],[t-r,n+r,Math.PI*1.5]],l=[];for(let[c,h,u]of o)for(let d=0;d<=6;d++){let f=u+d/6*Math.PI/2;l.push([c+Math.cos(f)*r,e,h+Math.sin(f)*r])}l.forEach((c,h)=>xn(i,c,l[(h+1)%l.length],a))}function Ba(i,e,t,n,s){let r=new Fn(Ch(t),n,s.length);r.name=e,r.castShadow=!0,r.receiveShadow=!0;let a=new kt;return s.forEach(({position:o,rotation:l=[0,0,0],scale:c=[1,1,1]},h)=>{a.position.set(...o),a.rotation.set(...l),a.scale.set(...c),a.updateMatrix(),r.setMatrixAt(h,a.matrix)}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),i.add(r),r}function cf(){let i=new tt;i.name="shopping-cart",i.userData.asset="wire-shopping-cart",i.userData.bounds=Ah;let e=Oa("zinc-plated basket wire","#c7d1d1",.32,.72),t=Oa("polished tubular steel","#d4dddd",.23,.82),n=Oa("dark rubber tyres","#303b39",.87,.02),s=Oa("green rubber handle","#315e4d",.72,.02),r=Oa("caster fork steel","#aebbbb",.39,.65),a=[],o=[],l=[],c=[],h=.023,u=.488,d={x:.33,front:-.205,back:.225},f={x:.41,front:-.29,back:.29};for(let S=0;S<7;S++){let v=S/6,T=Ri.lerp(h,u,v);Rh(a,T,Ri.lerp(d.x,f.x,v),Ri.lerp(d.front,f.front,v),Ri.lerp(d.back,f.back,v),.025,.0026)}Rh(o,u,f.x,f.front,f.back,.035,.01),Rh(o,h,d.x,d.front,d.back,.025,.005);for(let S=0;S<=12;S++){let v=S/12*2-1;for(let T of["front","back"])xn(a,[v*(d.x-.025),h,d[T]],[v*(f.x-.035),u,f[T]],.0025)}for(let S of[-1,1]){for(let v=0;v<=9;v++){let T=v/9;xn(a,[S*d.x,h,Ri.lerp(d.front+.025,d.back-.025,T)],[S*f.x,u,Ri.lerp(f.front+.035,f.back-.035,T)],.0025)}xn(o,[S*.325,h,.212],[S*.404,u,.279],.005),xn(o,[S*.325,h,-.192],[S*.404,u,-.279],.005)}for(let S=0;S<=10;S++){let v=-.302+S*.0604;xn(a,[v,.024,d.front+.025],[v,.024,d.back-.025],.0027)}for(let S=0;S<=7;S++){let v=-.18+S*.0542;xn(a,[-.305,.024,v],[.305,.024,v],.0027)}for(let S of[-1,1]){let v=S*.308;xn(l,[S*.362,.733,.447],[S*.357,.451,.282],.0115),xn(l,[S*.357,.451,.282],[v,-.403,.23],.012),xn(l,[v,-.403,.23],[v,-.435,-.23],.013),xn(l,[v,-.435,-.23],[S*.313,.011,-.183],.01),xn(l,[v,-.435,-.23],[S*.313,.011,.21],.008),xn(l,[S*.325,-.01,-.185],[S*.325,-.01,.205],.008)}xn(l,[-.308,-.403,.23],[.308,-.403,.23],.011),xn(l,[-.308,-.435,-.23],[.308,-.435,-.23],.011);for(let S of[-.2,0,.2])xn(l,[S,-.396,-.207],[S,-.373,.215],.004);xn(l,[-.285,-.385,-.085],[.285,-.385,-.085],.004),xn(c,[-.345,.738,.447],[.345,.738,.447],.022),xn(l,[-.367,.738,.447],[.367,.738,.447],.012),Yl(i,"basket mesh and wire floor",a,e,6),Yl(i,"rounded basket rims",o,t,10),Yl(i,"tubular undercarriage",l,t,10),Yl(i,"green handle grip",c,s,14),Ba(i,"handle rounded end caps",new Ms(.022,12,8),s,[-1,1].map(S=>({position:[S*.345,.738,.447]})));let g=[],_=[],m=[],p=[];for(let S of[-1,1])for(let v of[-.23,.23]){let T=S*.308;g.push({position:[T,-.527,v],rotation:[0,0,Math.PI/2]}),_.push({position:[T,-.527,v],rotation:[0,0,Math.PI/2]});for(let A of[-.029,.029])m.push({position:[T+A,-.481,v+.012],rotation:[.13,0,0]});p.push({position:[T,-.436,v+.01]})}Ba(i,"four rubber caster wheels",new On(.068,.068,.044,18),n,g),Ba(i,"wheel axle hubs",new On(.026,.026,.048,12),r,_),Ba(i,"paired caster forks",new un(.008,.082,.036),r,m),Ba(i,"caster swivel bearings",new On(.018,.018,.025,10),t,p);let y=new tt;return y.name="cart-contents",i.add(y),i.updateMatrixWorld(!0),{group:i,contents:y,contentsBounds:Ah.contents,bounds:Ah}}function hf(){let i=new tt,e=new bt({color:"#426b56",roughness:.42,metalness:.14});e.userData.owned=!0;let t=[],n=(u,d,f=.009)=>t.push([u,d,f]),s=.32;for(let u of[.025,.1,.18,.25,s]){let d=u/s,f=.34+d*.08,g=.23+d*.07;n([-f,u,-g],[f,u,-g],u===s?.016:.008),n([-f,u,g],[f,u,g],u===s?.016:.008),n([-f,u,-g],[-f,u,g],u===s?.016:.008),n([f,u,-g],[f,u,g],u===s?.016:.008)}for(let u=-.32;u<=.33;u+=.08)for(let d of[-1,1])n([u,.025,d*.235],[u*1.2,s,d*.3],.008);for(let u=-.2;u<=.21;u+=.08)for(let d of[-1,1])n([d*.34,.025,u],[d*.42,s,u*1.3],.008);for(let u=-.31;u<=.32;u+=.08)n([u,.025,-.23],[u,.025,.23],.007);for(let u=-.2;u<=.21;u+=.08)n([-.34,.025,u],[.34,.025,u],.007);n([-.42,s,0],[-.29,.55,0],.014),n([-.29,.55,0],[.29,.55,0],.019),n([.29,.55,0],[.42,s,0],.014);let r=new On(1,1,1,8);r.userData.owned=!0;let a=new Fn(r,e,t.length),o=new kt,l=new P,c=new P(0,1,0);t.forEach(([u,d,f],g)=>{let _=new P(...u),m=new P(...d);o.position.copy(_).add(m).multiplyScalar(.5);let p=l.subVectors(m,_).length();o.quaternion.setFromUnitVectors(c,l.normalize()),o.scale.set(f,p,f),o.updateMatrix(),a.setMatrixAt(g,o.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),a.castShadow=!0,a.receiveShadow=!0,i.add(a);let h=new tt;return i.add(h),{group:i,contents:h}}function Ih(i,e,t,n){let s=e<=900&&t>=e,r=n>6?4:3,a=Math.max(1,Math.ceil(n/r)),o=.58,l=i==="cart"?.35:.38,c=i==="cart"?.4:s?.3:.33;return{portrait:s,baseY:i==="cart"?.6:s?.79:.9,slots:Array.from({length:n},(h,u)=>({x:(u%r-(Math.min(r,n)-1)/2)*(o/r),y:i==="cart"?.037:.025,z:(Math.floor(u/r)-(a-1)/2)*(l/a),width:o/r*.9,height:c,depth:l/a*.88}))}}var uf=new Lt,df=new ts,Fx=new P;function ff(i,e,t){return!e||!t||t.isEmpty()?!1:(e.updateWorldMatrix(!0,!1),uf.copy(e.matrixWorld).invert(),df.copy(i).applyMatrix4(uf),df.intersectBox(t,Fx)!==null)}function pf(i,e,t,n){let s=new tt;s.name="transparent-produce-pouch";let r=T=>(T.userData.owned=!0,T),a=[[.06,.33,.25],[.13,.46,.4],[.35,.46,.46],[.59,.43,.4],[.7,.32,.28],[.78,.045,.055]],o=16,l=[],c=[];a.forEach(([T,A,x])=>{for(let w=0;w<o;w++){let O=w/o*Math.PI*2;l.push(Math.cos(O)*A*e,T*t,Math.sin(O)*x*n)}});for(let T=0;T<a.length-1;T++)for(let A=0;A<o;A++){let x=T*o+A,w=T*o+(A+1)%o,O=x+o,I=w+o;c.push(x,O,w,w,O,I)}let h=r(new tn);h.setAttribute("position",new mt(l,3)),h.setIndex(c),h.computeVertexNormals();let u=r(new bt({color:"#9eb5aa",roughness:.32,metalness:0,transparent:!0,opacity:.09,depthWrite:!1,side:Qt,forceSinglePass:!0})),d=new We(h,u);d.renderOrder=2,s.add(d);let f=r(new Nt(e,t,10,10)),g=f.attributes.position;for(let T=0;T<g.count;T++){let A=g.getX(T)/(e*.5),x=g.getY(T)/(t*.5);g.setZ(T,n*(.37+.1*Math.max(0,1-A*A)*Math.max(0,1-x*x)))}f.computeVertexNormals();let _=r(new Zt({map:i,transparent:!0,alphaTest:.015,depthWrite:!1,side:Qt,toneMapped:!1,opacity:.88,forceSinglePass:!0})),m=new We(f,_);m.position.y=t/2,m.renderOrder=3,s.add(m);let p=[[0,.78],[-.32,.71],[-.44,.63],[-.46,.2],[-.43,.08],[0,.045],[.43,.08],[.46,.2],[.44,.63],[.32,.71]].map(([T,A])=>new P(T*e,A*t,n*.475)),y=r(new tn().setFromPoints(new cr(p,!0,"centripetal").getPoints(64))),S=r(new or({color:"#71897b",transparent:!0,opacity:.55,depthWrite:!1})),v=new jr(y,S);return v.renderOrder=4,s.add(v),s}var Zl=class extends _s{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new un;e.deleteAttribute("uv");let t=new bt({side:An}),n=new bt,s=new bs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new We(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Fn(e,n,6),o=new kt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new We(e,wr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new We(e,wr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new We(e,wr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new We(e,wr(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new We(e,wr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new We(e,wr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function wr(i){return new ma({color:0,emissive:16777215,emissiveIntensity:i})}var Ox=new P(0,1,0),Bx=new bt({color:"#392b20",roughness:1}),Dh=new bt({color:"#4e733c",roughness:.68}),Ph=new Map,za;function zx(){if(za)return za;let i=document.createElement("canvas");i.width=128,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"#79906f"),t.addColorStop(.48,"#d1dcc0"),t.addColorStop(.52,"#cad8b7"),t.addColorStop(1,"#74896b"),e.fillStyle=t,e.fillRect(0,0,128,512),e.strokeStyle="#d3ddb9",e.lineWidth=1.2;for(let n=30;n<500;n+=32)for(let s of[-1,1])e.beginPath(),e.moveTo(64,n),e.bezierCurveTo(64+20*s,n+10,64+39*s,n+45,64+58*s,n+58),e.stroke();return e.strokeStyle="#e8eccb",e.lineWidth=2,e.beginPath(),e.moveTo(64,0),e.lineTo(64,512),e.stroke(),za=new Hn(i),za.colorSpace=Yt,za}function gf(i){return Ph.has(i)||Ph.set(i,new Bn({map:zx(),color:i,roughness:.42,clearcoat:.3,clearcoatRoughness:.5,side:Qt})),Ph.get(i)}function mf(i,e,t,n=0){let a=[],o=[],l=[];for(let u=0;u<=20;u++){let d=u/20,f=i.getPoint(d),g=i.getTangent(d),_=new P().crossVectors(g,Ox);_.lengthSq()<.001?_.set(1,0,0):_.normalize();let m=new P().crossVectors(_,g).normalize(),p=Math.pow(Math.sin(Math.PI*d),.78)*e*(.9+.1*Math.sin(d*8));for(let y=0;y<=6;y++){let S=y/6*2-1,v=f.clone().addScaledVector(_,p*S);if(v.addScaledVector(m,(Math.abs(S)**1.8*n-.012*Math.abs(S))*Math.sin(Math.PI*d)),a.push(v.x,v.y,v.z),o.push(y/6,d),u<20&&y<6){let T=u*7+y,A=T+6+1;l.push(T,A,T+1,A,A+1,T+1)}}}let c=new tn;c.setAttribute("position",new mt(a,3)),c.setAttribute("uv",new mt(o,2)),c.setIndex(l),c.computeVertexNormals();let h=new We(c,t);return h.castShadow=!0,h.receiveShadow=!0,h}function $l(i,e,t,n=18){let s=new We(new pa(i,n,e,7,!1),t);return s.castShadow=!0,s}function _f(i,e=.42,t=.28){let n=new tt,s=new Bn({color:i,roughness:.27,metalness:.03,clearcoat:.65,clearcoatRoughness:.28}),r=[[0,0],[.73,0],[.82,.025],[.87,.09],[.96,.65],[1,.91],[.98,1],[.88,1],[.87,.92],[.81,.13],[0,.13]].map(([h,u])=>new ye(h*t,u*e)),a=new We(new da(r,48),s);a.castShadow=!0,a.receiveShadow=!0,n.add(a);let o=new We(new On(t*.86,t*.86,.025,32),Bx);o.position.y=e*.88,n.add(o);let l=new We(new dr(t*.955,.012,8,48),s);l.rotation.x=Math.PI/2,l.position.y=e*.97,n.add(l);let c=new bt({color:"#ad8750",roughness:.35,metalness:.55});for(let h of[.16,.24]){let u=new We(new dr(t*(.87+h*.12),.0035,6,48),c);u.rotation.x=Math.PI/2,u.position.y=e*h,n.add(u)}return n}function Lh({flowers:i=!0,color:e="#dfd3b6",seed:t=0}={}){let n=_f(e),s=["#315d32","#426b35","#365f30","#567a3b"];for(let r=0;r<13;r++){let a=r*2.39996+t*.3,o=r>=8,l=o?.28+r%3*.04:.43+r%4*.052,c=.32+r%5*.045,h=(g,_)=>new P(Math.cos(a)*g,_,Math.sin(a)*g),u=h(.035,.37),d=h(.12,c+.25);n.add($l(new xs(u,h(.06,c+.12),d),.0075,Dh));let f=new Gi(d,h(l*.5,c+.68),h(l*.9,c+.65),h(l,c+(o?.62:.37)));n.add(mf(f,.105+r%3*.017,gf(s[r%s.length]),-.035))}if(i){let r=document.createElement("canvas");r.width=128,r.height=256;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,128,0);o.addColorStop(0,"#d7ddc6"),o.addColorStop(.5,"#fffdf1"),o.addColorStop(1,"#dde1cd"),a.fillStyle=o,a.fillRect(0,0,128,256),a.strokeStyle="#abb98d35",a.lineWidth=.8;for(let u=0;u<10;u++)a.beginPath(),a.moveTo(64,15+u*23),a.bezierCurveTo(49,25+u*23,33,45+u*23,12,56+u*23),a.moveTo(64,15+u*23),a.bezierCurveTo(79,25+u*23,95,45+u*23,116,56+u*23),a.stroke();let l=new Hn(r);l.colorSpace=Yt;let c=new Bn({map:l,color:"#fffcf0",roughness:.4,clearcoat:.15,side:Qt,emissive:"#685e38",emissiveIntensity:.045}),h=new bt({color:"#c8b259",roughness:.8});for(let u=0;u<3;u++){let d=new tt,f=-.4+u*2.12;d.position.set([-.2,.19,.02][u],[1.18,1.02,1.31][u],[.06,-.12,.12][u]),d.rotation.y=Math.PI+(u-1)*.34,d.rotation.z=(u-1)*.12;let g=new P(d.position.x,d.position.y,d.position.z);n.add($l(new Gi(new P(.01,.36,0),new P(.07,.8,.03),g.clone().add(new P(-.03,-.18,.02)),g),.0085,Dh));let _=new Gi(new P(0,-.065,.01),new P(.015,.1,.02),new P(-.03,.28,-.09),new P(.035,.38,-.12));d.add(mf(_,.135,c,.095));let m=new We(new ia(.024,.19,4,10),h);m.position.set(0,.105,.065),m.rotation.x=-.14,d.add(m);let p=new Fn(new Ms(.0035,4,4),h,60),y=new kt;for(let S=0;S<60;S++){let v=S*2.4;y.position.set(Math.cos(v)*.023,.015+S/60*.18,.065+Math.sin(v)*.023),y.updateMatrix(),p.setMatrixAt(S,y.matrix)}d.add(p),n.add(d)}}return n}function xf(){let i=_f("#b88861",.32,.23),e=new bt({color:"#bdad7b",roughness:1});for(let n=0;n<3;n++){let s=n*Math.PI*2/3;i.add($l(new hr(new P(Math.cos(s)*.21,.16,Math.sin(s)*.21),new P(0,1.15,0)),.008,e,1))}let t=new fa(new fi().moveTo(0,0).bezierCurveTo(-.16,.14,-.09,.25,0,.18).bezierCurveTo(.09,.25,.16,.14,0,0),10);for(let n=0;n<6;n++){let s=n*2.4,r=.32+n%2*.16,a=.75+n%3*.18,o=new Gi(new P(0,.25,0),new P(Math.cos(s)*r,.5,Math.sin(s)*r),new P(Math.cos(s)*r,-.45,Math.sin(s)*r),new P(Math.cos(s)*r*.7,-a,Math.sin(s)*r*.7));i.add($l(o,.006,Dh));for(let l=1;l<8;l++){let c=l/8,h=new We(t,gf(l%2?"#52783c":"#648348"));h.position.copy(o.getPoint(c)),h.rotation.set(.2,s+(l%2?.5:-.5),(l%2?1:-1)*.65),h.scale.setScalar(.65+(1-c)*.4),h.castShadow=!0,i.add(h)}}return i}var Nh={cart:{offset:1.15,center:1.07,halfWidth:.36,halfDepth:.39},basket:{offset:1,center:1,halfWidth:.35,halfDepth:.32}},Kl={x0:-15.5,x1:15.5,z0:-12.5,z1:12.5},Tr=1e-6;function yf(i,e,t,n,s=Kl){return i<s.x0+t||i>s.x1-t||e<s.z0+t||e>s.z1-t?!1:!n.some(r=>{let a=i-Math.max(r.x0,Math.min(i,r.x1)),o=e-Math.max(r.z0,Math.min(e,r.z1));return a*a+o*o<t*t-Tr})}function Hx(i,e){let t=i.x-(e.x0+e.x1)/2,n=i.z-(e.z0+e.z1)/2,s=(e.x1-e.x0)/2,r=(e.z1-e.z0)/2,a=Math.cos(i.yaw),o=-Math.sin(i.yaw),l=-Math.sin(i.yaw),c=-Math.cos(i.yaw);return Math.abs(t)<s+Math.abs(a)*i.hw+Math.abs(l)*i.hd-Tr&&Math.abs(n)<r+Math.abs(o)*i.hw+Math.abs(c)*i.hd-Tr&&Math.abs(t*a+n*o)<i.hw+s*Math.abs(a)+r*Math.abs(o)-Tr&&Math.abs(t*l+n*c)<i.hd+s*Math.abs(l)+r*Math.abs(c)-Tr}function kx(i,e,t,n){let s=Nh[n];return s?{x:i-Math.sin(t)*s.center,z:e-Math.cos(t)*s.center,yaw:t,hw:s.halfWidth,hd:s.halfDepth}:null}function Jl(i,e,t,n,s,r=Kl){if(![i,e,t].every(Number.isFinite)||i<r.x0+.32||i>r.x1-.32||e<r.z0+.32||e>r.z1-.32||s.some(h=>{let u=i-Math.max(h.x0,Math.min(i,h.x1)),d=e-Math.max(h.z0,Math.min(e,h.z1));return u*u+d*d<.32*.32-Tr}))return!1;let o=kx(i,e,t,n);if(!o)return!0;let l=Math.abs(Math.cos(t))*o.hw+Math.abs(Math.sin(t))*o.hd,c=Math.abs(Math.sin(t))*o.hw+Math.abs(Math.cos(t))*o.hd;return o.x-l<r.x0||o.x+l>r.x1||o.z-c<r.z0||o.z+c>r.z1?!1:!s.some(h=>Hx(o,h))}function Ql(i,e,t,n,s,r=Kl){let a={...i},o=Math.max(1,Math.ceil(Math.hypot(e,t)/.06));for(let l=0;l<o;l++){let c=a.x+e/o,h=a.z+t/o;Jl(c,a.z,a.yaw,n,s,r)&&(a.x=c),Jl(a.x,h,a.yaw,n,s,r)&&(a.z=h)}return a}function vf(i,e,t,n,s=Kl){let r={...i},a=Math.max(1,Math.ceil(Math.abs(e)/.035));for(let o=0;o<a;o++){let l={...r,yaw:r.yaw+e/a};if(Jl(l.x,l.z,l.yaw,t,n,s)){r=l;continue}let c=!1;for(let h of[.04,.08,.12]){for(let u of[r.yaw+Math.PI,r.yaw-Math.PI/2,r.yaw+Math.PI/2,r.yaw]){let d=r.x-Math.sin(u)*h,f=r.z-Math.cos(u)*h,g=Ql(r,d-r.x,f-r.z,t,n,s);if(!(Math.hypot(g.x-d,g.z-f)>.001)&&Jl(d,f,l.yaw,t,n,s)){r={x:d,z:f,yaw:l.yaw},c=!0;break}}if(c)break}if(!c)break}return r}function Mf({buttons:i,held:e,onPress:t=()=>{},onTap:n=()=>{},windowTarget:s=window,documentTarget:r=document,now:a=()=>performance.now()}){let o=new Map,l=new Set,c=[],h=(_,m,p,y)=>{_.addEventListener(m,p,y),c.push(()=>_.removeEventListener(m,p,y))},u=(_,m)=>{let p=_.getBoundingClientRect();return Number.isFinite(m.clientX)&&Number.isFinite(m.clientY)&&m.clientX>=p.left&&m.clientX<=p.right&&m.clientY>=p.top&&m.clientY<=p.bottom};function d(_,m=!1){let p=o.get(_);if(p){o.delete(_),l.has(_)||e.delete(_);try{p.button.hasPointerCapture?.(p.id)&&p.button.releasePointerCapture(p.id)}catch{}m&&a()-p.at<130&&n(_)}}function f(){for(let _ of[...o.keys()])d(_);for(let _ of l)e.delete(_);l.clear()}function g(_,m){for(let[p,y]of[...o])y.id===_.pointerId&&d(p,m&&u(y.button,_))}h(s,"pointerup",_=>g(_,!0),!0),h(s,"pointercancel",_=>g(_,!1),!0),h(s,"pointermove",_=>{for(let[m,p]of[...o])p.id===_.pointerId&&(!u(p.button,_)||_.pointerType!=="touch"&&_.buttons===0)&&d(m)},!0),h(s,"pointerdown",_=>{if(_.isPrimary!==!1)for(let[m,p]of[...o])p.id!==_.pointerId&&d(m)},!0),h(s,"touchend",_=>{if(!_.touches?.length)for(let[m,p]of[...o])p.type==="touch"&&d(m)},!0),h(s,"touchcancel",f,!0),h(s,"blur",f),h(s,"contextmenu",f,!0),h(r,"visibilitychange",()=>{r.hidden&&f()}),h(s,"keyup",_=>{if(["Space","Enter"].includes(_.code)){for(let m of l)o.has(m)||e.delete(m);l.clear()}},!0);for(let _ of i){let m=_.dataset.walk;h(_,"pointerdown",p=>{if(!(p.button!==void 0&&p.button!==0)){p.preventDefault(),d(m),o.set(m,{id:p.pointerId,type:p.pointerType,at:a(),button:_}),e.add(m),t(m);try{_.setPointerCapture(p.pointerId)}catch{}}}),h(_,"pointerup",p=>g(p,!0)),h(_,"pointercancel",p=>g(p,!1)),h(_,"lostpointercapture",p=>g(p,!1)),h(_,"pointerleave",p=>g(p,!1)),h(_,"keydown",p=>{!p.ctrlKey&&!p.metaKey&&!p.altKey&&["Space","Enter"].includes(p.code)&&(p.preventDefault(),l.add(m),e.add(m),t(m))}),h(_,"keyup",p=>{["Space","Enter"].includes(p.code)&&(l.delete(m),o.has(m)||e.delete(m))}),h(_,"blur",()=>{l.delete(m),o.has(m)||e.delete(m)})}return{release:f,destroy(){f(),c.forEach(_=>_())}}}var Gt=window.GroceryGame,cs=window.GroceryPrices,$t=window.GameWorldBridge,zS=document.getElementById("world"),_i=document.getElementById("world-canvas"),Wt=i=>document.getElementById(i),Sf={width:32,depth:26,halfWidth:16,halfDepth:13},Ct={x:6.5,z:10.8},ii={meat:{name:"\u041C\u0410\u0425, \u0417\u0410\u0413\u0410\u0421",x:-12,z:-12,rotation:0,width:5.1,to:[-12,-9.2],yaw:0},dairy:{name:"\u0421\u04AE\u04AE, \u04E8\u041D\u0414\u04E8\u0413",x:-6,z:-12,rotation:0,width:5.1,to:[-6,-9.2],yaw:0},bread:{name:"\u0428\u0418\u041D\u042D \u0422\u0410\u041B\u0425",x:0,z:-12,rotation:0,width:5.1,to:[0,-9.2],yaw:0},pantry:{name:"\u04E8\u0414\u04E8\u0420 \u0422\u0423\u0422\u041C\u042B\u041D \u0425\u04AE\u041D\u0421",x:6,z:-12,rotation:0,width:5.1,to:[6,-9.2],yaw:0},canned:{name:"\u041B\u0410\u0410\u0417\u0410\u041B\u0421\u0410\u041D \u0425\u04AE\u041D\u0421, \u0421\u041E\u0423\u0421",x:12,z:-12,rotation:0,width:5.1,to:[12,-9.2],yaw:0},frozen:{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u0425\u04AE\u041D\u0421",x:-15,z:-7.5,rotation:Math.PI/2,width:5.1,to:[-12.2,-7.5],yaw:Math.PI/2},cold:{name:"\u0423\u0421, \u0417\u0410\u0419\u0420\u041C\u0410\u0413",x:-15,z:0,rotation:Math.PI/2,width:5.1,to:[-12.45,-1.05],yaw:Math.PI/2,pitch:-.28},household:{name:"\u0410\u0425\u0423\u0419\u041D \u0411\u0410\u0420\u0410\u0410",x:-15,z:7.5,rotation:Math.PI/2,width:5.1,to:[-12.2,7.5],yaw:Math.PI/2},drinks:{name:"\u0423\u041D\u0414\u0410\u0410, \u0416\u04AE\u04AE\u0421",x:15,z:-7.5,rotation:-Math.PI/2,width:5.1,to:[12.2,-7.5],yaw:-Math.PI/2},sweets:{name:"\u0410\u041C\u0422\u0422\u0410\u041D",x:15,z:0,rotation:-Math.PI/2,width:5.1,to:[12.2,0],yaw:-Math.PI/2},alcohol:{name:"\u0421\u041E\u0413\u0422\u0423\u0423\u0420\u0423\u0423\u041B\u0410\u0425 \u0423\u041D\u0414\u0410\u0410",x:15,z:7.5,rotation:-Math.PI/2,width:5.1,to:[12.2,7.5],yaw:-Math.PI/2},produce:{name:"\u0416\u0418\u041C\u0421, \u041D\u041E\u0413\u041E\u041E",x:-6,z:2.3,rotation:0,width:8.6,to:[-6,5.1],yaw:0},ready:{name:"\u0411\u042D\u041B\u042D\u041D \u0425\u041E\u041E\u041B",x:6,z:2.3,rotation:0,width:5.1,to:[6,5.1],yaw:0},"frozen-dumplings":{name:"\u0411\u0423\u0423\u0417, \u0411\u0410\u041D\u0428",x:-12,z:9.65,rotation:Math.PI,width:3.3,to:[-12,7.1],yaw:Math.PI,pitch:-.24,chest:!0},"frozen-bakery":{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u0413\u0423\u0420\u0418\u041B\u0410\u041D \u0411\u04AE\u0422\u042D\u042D\u0413\u0414\u042D\u0425\u04AE\u04AE\u041D",x:-7.8,z:9.65,rotation:Math.PI,width:3.3,to:[-7.8,7.1],yaw:Math.PI,pitch:-.24,chest:!0},"frozen-vegetables":{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u041D\u041E\u0413\u041E\u041E",x:-3.6,z:9.65,rotation:Math.PI,width:3.3,to:[-3.6,7.1],yaw:Math.PI,pitch:-.24,chest:!0},"frozen-meat":{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u041C\u0410\u0425",x:-5.5,z:-4.6,rotation:0,width:3.6,to:[-5.5,-2.1],yaw:0},"pantry-2":{name:"\u0425\u04AE\u041D\u0421, \u0410\u041C\u0422\u041B\u0410\u0413\u0427",category:"pantry",x:5.5,z:-4.6,rotation:0,width:5.1,to:[5.5,-1.6],yaw:0},packing:{name:"\u0411\u042D\u041B\u0422\u0413\u042D\u0425 \u0428\u0418\u0420\u042D\u042D",to:[6.5,8.4],yaw:Math.PI}},Vt;try{Vt=new Hl({canvas:_i,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{Wt("world-error").hidden=!1,Wt("world-loading").hidden=!0}Vt&&Gx().catch(i=>{console.error(i),Wt("world-error").hidden=!1,Wt("world-loading").hidden=!0});async function Gx(){let i=(M,R)=>window.dispatchEvent(new CustomEvent("grocery:prepare",{detail:{stage:M,percent:R}})),e=()=>new Promise(M=>requestAnimationFrame(()=>requestAnimationFrame(M)));i("room",15),await e(),Vt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),Vt.setSize(window.innerWidth,window.innerHeight),Vt.outputColorSpace=Yt,Vt.toneMapping=ba,Vt.toneMappingExposure=1.07,Vt.shadowMap.enabled=!0,Vt.shadowMap.type=ws,Vt.shadowMap.autoUpdate=!1,Vt.shadowMap.needsUpdate=!0;let t=new _s;t.background=new at("#eaf3e9"),t.fog=new Zr("#edf3e5",.0025);let n=new Zl,s=new yr(Vt);t.environment=s.fromScene(n,.04).texture,t.environmentIntensity=.14,typeof n.dispose=="function"&&n.dispose(),s.dispose();let r=new Pn(63,window.innerWidth/window.innerHeight,.08,90);t.add(r),r.position.set(0,1.64,10.8),r.rotation.order="YXZ";let a=-.1,o=-.03,l=()=>$t.transport?.()==="cart"?-.25:$t.transport?.()==="basket"?-.18:-.04,c="",h=[],u=[],d=[],f=[],g=new Map,_=new tt;t.add(_);let m=new Map,p=!0,y=null,S=!1,v=!1,T=null,A="",x=!1;function w(M){x=M,Wt("nearby-panel").classList.toggle("is-expanded",M),Wt("nearby-toggle").setAttribute("aria-expanded",String(M))}let O="",I=performance.now(),U=0,H=!0,Y=0,L=new Set,q=window.matchMedia("(prefers-reduced-motion: reduce)"),J=new Sa,X=new Dn,le=new ye,K=new ye(0,0),ce=new tt;t.add(ce);let se=null,Ue=null,Ke="",z="",te=!1,me=0,Ge={};function ae(M,R=.8,D=0){let $=`${M}:${R}:${D}`;return Ge[$]||=new bt({color:M,roughness:R,metalness:D})}function ee(M,R,D,$,W,re,fe,pe=t,Q=!1){let ue=new We(new un(M,R,D),$);return ue.position.set(W,re,fe),ue.receiveShadow=!0,pe.add(ue),Q&&u.push(ue),ue}function Dt(M,R,D,$,W,re,fe,pe,Q=1){let ue=Vd(re,fe,pe===2?-1:1);return ue.cabinet=R,ue.id=f.length,ue.setClosedPosition(D,$,W,Q<0?Math.PI:0),M.add(ue.group),ue.pane.userData.fridgeDoor=ue.id,ue.handle.userData.fridgeDoor=ue.id,ue.center=new P(D,$,W),M.localToWorld(ue.center),f.push(ue),ue}function $e(M){let R=m.get(M);if(!R)return null;let D=Wl(Gt.BY_ID[R.lot.productId]);return f.filter($=>$.cabinet===D).map($=>({door:$,score:Math.min(...R.positions.map(W=>W.distanceTo($.center)))+.16*r.position.distanceTo($.center)})).sort(($,W)=>$.score-W.score)[0]?.door||null}function lt(M,R,D,$,W,re,fe,pe=t,Q=24){let ue=new We(new On(M,R,D,Q),$);return ue.position.set(W,re,fe),ue.castShadow=!0,ue.receiveShadow=!0,pe.add(ue),ue}function dt(M,R,D){let $=document.createElement("canvas");$.width=M,$.height=R,D($.getContext("2d"),M,R);let W=new Hn($);return W.colorSpace=Yt,W.anisotropy=Math.min(Vt.capabilities.getMaxAnisotropy(),8),W}let de=new We(new Nt(Sf.width,Sf.depth),bh({floor:!0}));de.rotation.x=-Math.PI/2,de.receiveShadow=!0,t.add(de);let we=qd(),Ee=ae("#67947f",.58),Fe=bh(),ve=ae("#d6b473",.3,.45),ft=ae("#fff5dc");ee(32,5.4,.22,we,0,2.7,-12.9,t,!0),ee(.22,5.4,26,we,-15.9,2.7,0,t,!0),ee(.22,5.4,26,we,15.9,2.7,0,t,!0),ee(32,5.4,.22,we,0,2.7,12.9,t,!0),ee(32,1.1,.25,Ee,0,.55,-12.75),ee(.25,1.1,26,Ee,-15.75,.55,0),ee(.25,1.1,26,Ee,15.75,.55,0),ee(32,.2,26,ae("#f7f3e7"),0,5.4,0);for(let M=-12;M<=12;M+=6)ee(.14,.3,26,ae("#dcc8a8"),M,5.2,0);for(let M=-9;M<=9;M+=6)ee(32,.23,.14,ae("#e2cfb0"),0,5.15,M);t.add(new _a("#f1f8ff","#e2d3b8",2.2)),t.add(new Ma("#ffffff",.48));let He=new va("#fff6e5",1.5);He.position.set(-8,12,10),He.castShadow=!0,He.shadow.mapSize.set(2048,2048),He.shadow.camera.left=-21,He.shadow.camera.right=21,He.shadow.camera.top=20,He.shadow.camera.bottom=-20,He.shadow.normalBias=.025,He.shadow.radius=4,t.add(He);for(let[M,[R,D]]of[[-10,-8],[0,-8],[10,-8],[-10,0],[0,0],[10,0],[-10,8],[0,8],[10,8]].entries())if(lt(.025,.025,1.05,ae("#503d29"),R,4.6,D),lt(.11,.5,.3,ae(M%2?"#96b5a2":"#e0cba6",.55,.15),R,3.97,D),lt(.45,.45,.025,new bt({color:"#fff0c5",emissive:"#ffcc77",emissiveIntensity:2}),R,3.81,D),M%2===0){let $=new bs("#fff6e8",7,15,2);$.position.set(R,3.7,D),t.add($)}ee(31.4,.055,.1,ve,0,1.18,-12.72),ee(.1,.055,25.4,ve,-15.72,1.18,0),ee(.1,.055,25.4,ve,15.72,1.18,0);for(let M=-15;M<=15;M+=1.5)ee(.045,1.06,.06,ae("#456b58"),M,.56,-12.69),ee(.045,1.06,.06,ae("#456b58"),M,.56,12.7);for(let M=-12;M<=12;M+=1.5)for(let R of[-15.7,15.7])ee(.06,1.06,.045,ae("#456b58"),R,.56,M);let xt=dt(1024,512,(M,R,D)=>{let $=M.createLinearGradient(0,0,0,D);$.addColorStop(0,"#768bb9"),$.addColorStop(.62,"#e8b69f"),$.addColorStop(1,"#9aafac"),M.fillStyle=$,M.fillRect(0,0,R,D),M.fillStyle="#718097",M.beginPath(),M.moveTo(0,350);for(let W=0;W<=R;W+=60)M.lineTo(W,310+35*Math.sin(W*.012));M.lineTo(R,D),M.lineTo(0,D),M.fill();for(let W=0;W<19;W++){let re=W*62-10,fe=195+W*71%150,pe=32+W*17%37;M.fillStyle=W%2?"#576e85":"#69778c",M.fillRect(re,fe,pe,D-fe);for(let Q=fe+13;Q<D;Q+=22)for(let ue=re+7;ue<re+pe-4;ue+=12)M.fillStyle=(ue+Q)%5<3?"#f6d395":"#94b0b5",M.fillRect(ue,Q,4,7)}}),yt={},At=window.EnvironmentAssets||{},B=new Map;for(let[M,R]of Object.entries(At)){if(!B.has(R.path)){let D=xt.clone(),$=window.FastAssets?.environment?.[M];D.needsUpdate=!0,Sr("environment:"+M,$?window.innerWidth<=700?$.small:$.large:R.path,-20).then(W=>{D.image=W,D.needsUpdate=!0,hs(!0)},()=>hs(!1)),D.colorSpace=Yt,B.set(R.path,D)}yt[M]=B.get(R.path)}let jt=af(Object.keys(yt).length?yt:xt,ae("#3a514d"),Fe);t.add(jt.group);function gt(){let M=$t.atmosphere?.(),R=Th(M?.day,M?.progress);for(let D of[R.from,R.to])Mr.promote("environment:city"+R.season+ql[D],100);jt.set(M)&&(p=!0)}gt();function Bt(M,R,D,$,W,re=24){for(let fe=W;fe>=re;fe-=2){M.font=`700 ${fe}px Arial,sans-serif`;let pe=[],Q="";for(let ue of String(R).split(/\s+/)){let _e=Q?`${Q} ${ue}`:ue;Q&&M.measureText(_e).width>D?(pe.push(Q),Q=ue):Q=_e}if(Q&&pe.push(Q),pe.length<=$&&pe.every(ue=>M.measureText(ue).width<=D))return{lines:pe,size:fe}}return{lines:[String(R)],size:re}}function Re(M,R,D,$,W,re,fe,pe=24){let Q=Bt(M,R,W,re,fe,pe);M.font=`700 ${Q.size}px Arial,sans-serif`,Q.lines.forEach((ue,_e)=>M.fillText(ue,D,$+(_e-(Q.lines.length-1)/2)*Q.size*1.12))}function Jt(M,R,D,$,W=""){M.fillStyle="#fffdf0",M.fillRect(0,0,R,D),M.strokeStyle="#9b824e",M.lineWidth=4,M.strokeRect(5,5,R-10,D-10),M.textAlign="center",M.textBaseline="middle",M.fillStyle="#183f30",Re(M,$,R/2,D*(W?.34:.5),R-50,2,Math.round(D*(W?.36:.43)),18),W&&(M.fillStyle="#465842",Re(M,W,R/2,D*.79,R-50,1,Math.round(D*.26),18))}function Xe(M,R,D,$,W,re,fe,pe=!1){let Q=dt(1024,Math.max(100,Math.round(1024*D/R)),(_e,ke,Se)=>{Jt(_e,ke,Se,M)}),ue=new We(new Nt(R,D),new Zt({map:Q,toneMapped:!1}));return ue.userData.signText=M,ue.position.set($,W,re),fe.add(ue),ue}function it(M,R,D=!1){let $=D?xf():Lh({flowers:!1,color:"#a77953",seed:M});if($.position.set(M,D?3.3:0,R),$.scale.setScalar(D?.9:1.1),t.add($),!D){let W=os(1.6,1.5,.22);W.position.set(M,.013,R),t.add(W)}}it(-14,11.6),it(14,11.6),it(-8,12.2,!0),it(-3.8,12.2,!0);let C={};function b(M){let R=new tt;R.position.set(M.x,0,M.z),R.rotation.y=M.rotation,t.add(R),C.cold=R;let D=ae("#426457",.42,.22),$=ae("#e5eeea",.56),W=ae("#dce8e2",.38,.1);ee(2,3.15,.16,$,-1.5,1.63,-.28,R,!0);for(let Le of[-2.53,-.47])ee(.12,3.25,.95,D,Le,1.63,.04,R,!0);for(let Le of[.4,1.28,2.16])ee(2,.12,1.03,D,-1.5,Le,.05,R,!0),ee(2,.06,.06,ve,-1.5,Le+.015,.62,R),ee(1.9,.025,.07,new Zt({color:"#e7f7ee"}),-1.5,Le+.08,-.1,R);let re=new We(new Nt(1.87,2.78),new Bn({color:"#dce9e7",transparent:!0,opacity:.045,roughness:.1,clearcoat:1,depthWrite:!1,envMapIntensity:.2}));re.position.set(-1.5,1.65,.65),R.add(re);let fe=_n(.035,.32,.07,ve,.008);fe.position.set(-.7,1.6,.71),R.add(fe);let pe=_n(2.7,.52,1.12,W,.045);pe.position.set(1.05,.36,.16),R.add(pe),u.push(pe),ee(2.72,.1,1.15,D,1.05,.12,.16,R),ee(2.46,.045,.98,ae("#dcece9",.7),1.05,.8,.16,R),ee(2.7,.44,.07,W,1.05,.82,.71,R),ee(2.7,.86,.07,W,1.05,1.02,-.39,R);for(let Le of[-.29,2.39]){let et=new tn;et.setAttribute("position",new mt([Le,.6,.71,Le,.6,-.39,Le,1.46,-.39,Le,.6,.71,Le,1.46,-.39,Le,1.04,.71],3)),et.computeVertexNormals(),R.add(new We(et,new bt({color:"#e0ece8",roughness:.4,side:Qt})));let wt=ee(.06,.055,1.18,D,Le,1.25,.16,R);wt.rotation.x=.36}ee(2.7,.055,.055,D,1.05,1.04,.71,R),ee(2.7,.055,.055,D,1.05,1.46,-.39,R);for(let Le=0;Le<2;Le++){let et=new We(new Nt(1.27,1.18),new Bn({color:"#e6f1ee",roughness:.08,transparent:!0,opacity:.035,clearcoat:.35,depthWrite:!1,side:Qt,envMapIntensity:.06}));et.rotation.x=-Math.PI/2+.36,et.position.set(.395+Le*1.31,1.25,.16),R.add(et);let wt=_n(.21,.028,.045,ve,.006);wt.position.set(.395+Le*1.31,1.11,.57),R.add(wt)}let Q=ae("#d4e3df",.35,.22);for(let Le=0;Le<2;Le++)for(let et=0;et<4;et++){let wt=.1275+et*.615,Qe=Le?-.1:.43,rt=Le?1.02:.84;for(let Tt of[-.29,.29])ee(.014,.15,.49,Q,wt+Tt,rt,Qe,R);for(let Tt of[-.245,.245])ee(.58,.018,.014,Q,wt,rt+.075,Qe+Tt,R);for(let Tt=0;Tt<6;Tt++)ee(.012,.14,.012,Q,wt-.25+Tt*.1,rt,Qe+.245,R)}ee(2.46,.018,.04,new Zt({color:"#eefbff"}),1.05,1.39,-.32,R),Xe("\u0417\u0410\u0419\u0420\u041C\u0410\u0413",2.55,.28,1.05,1.91,-.28,R);let ue=dt(128,128,Le=>{Le.strokeStyle="#e1f1eb",Le.lineWidth=5,Le.lineCap="round";for(let et=0;et<6;et++)Le.save(),Le.translate(64,64),Le.rotate(et*Math.PI/3),Le.beginPath(),Le.moveTo(0,0),Le.lineTo(0,-45),Le.moveTo(0,-27),Le.lineTo(-11,-36),Le.moveTo(0,-27),Le.lineTo(11,-36),Le.stroke(),Le.restore()}),_e=new We(new Nt(.24,.24),new Zt({map:ue,transparent:!0,depthWrite:!1}));_e.position.set(2.2,.15,.755),R.add(_e);let ke=_n(M.width+.25,.74,.17,D,.04);ke.position.set(0,3.5,.05),R.add(ke),Xe(M.name,M.width-.15,.46,0,3.51,.151,R).userData.department="cold",h.push({x0:M.x-.55,x1:M.x+.88,z0:M.z-M.width/2-.15,z1:M.z+M.width/2+.15});let Se=os(M.width+1,2.8,.2);Se.position.set(M.x+.2,.013,M.z),Se.rotation.z=M.rotation,t.add(Se)}function G(M,R){let D=new tt;D.position.set(R.x,0,R.z),D.rotation.y=R.rotation,t.add(D);let $=ae("#e4eee7",.42,.08),W=ae("#456e5c",.35,.2);ee(3.3,.65,1.28,$,0,.42,0,D,!0),ee(3.34,.12,1.32,W,0,.12,0,D),ee(3.18,.055,1.18,ae("#cfe3df"),0,.79,0,D);for(let re of[-1.62,1.62])ee(.055,.34,1.28,W,re,.91,0,D);for(let re of[-.63,.63])ee(3.3,.07,.055,W,0,1.07,re,D);for(let re=0;re<2;re++){let fe=new We(new Nt(1.56,1.2),new Bn({color:"#deeee6",transparent:!0,opacity:.035,roughness:.1,depthWrite:!1,side:Qt}));fe.rotation.x=-Math.PI/2,fe.position.set((re-.5)*1.61,1.095,0),D.add(fe),ee(.23,.035,.06,ve,(re-.5)*1.61,1.13,.47,D)}for(let re of[-1.17,-.39,.39,1.17])for(let fe of[-.29,.29]){for(let pe of[-.37,.37])ee(.012,.15,.52,W,re+pe,.9,fe,D);for(let pe of[-.26,.26])ee(.74,.014,.012,W,re,.975,fe+pe,D)}ee(3.15,.025,.05,new Zt({color:"#edfff3"}),0,1.01,-.56,D),Xe(R.name,3.15,.3,0,1.47,-.59,D).userData.department=M,h.push({x0:R.x-1.73,x1:R.x+1.73,z0:R.z-.7,z1:R.z+.7})}function xe(M,R){if(R.chest){G(M,R);return}if(M==="cold"){b(R);return}let D=new tt;D.position.set(R.x,0,R.z),D.rotation.y=R.rotation,t.add(D),C[M]=D;let $=["dairy","cold","meat","frozen","ready"].includes(M),W=Xl(M),re=$?ae("#4b6560",.4,.35):Fe;ee(R.width,3.15,.14,ae($?"#edf4e8":"#e4cfaa"),0,1.62,-.28,D,!0),ee(.15,3.25,W?1.8:.9,re,-R.width/2,1.62,W?-.28:.02,D,!0),ee(.15,3.25,W?1.8:.9,re,R.width/2,1.62,W?-.28:.02,D,!0);for(let Q of[.4,1.28,2.16])ee(R.width,.12,W?1.8:1.05,re,0,Q,W?-.28:.05,D,!0),ee(R.width,.09,.06,ve,0,Q,.6,D),W&&ee(R.width,.09,.06,ve,0,Q,-1.16,D),$&&ee(R.width-.1,.025,.08,new bt({color:"#fffbd6",emissive:"#fff5bb",emissiveIntensity:.8}),0,Q+.08,-.05,D);let fe=_n(R.width+.26,.78,W?.93:.17,$?ae("#31574b",.4,.18):Fe,.04);if(fe.position.set(0,3.5,W?-.28:.05),D.add(fe),Xe(R.name,R.width-.15,.46,0,3.51,W?.2:.151,D).userData.department=M,W){let Q=Xe(R.name,R.width-.15,.46,0,3.51,-.76,D);Q.rotation.y=Math.PI,Q.userData.department=M}ee(R.width+.1,.22,W?1.8:1,$?ae("#3b5c50",.48,.2):Fe,0,.18,W?-.28:.03,D);for(let Q of[.4,1.28,2.16]){let ue=_n(R.width,.06,.07,ve,.012);if(ue.position.set(0,Q+.018,.617),D.add(ue),W){let ke=ue.clone();ke.position.z=-1.177,D.add(ke)}let _e=new We(new Nt(R.width-.18,.025),new Zt({color:$?"#e4eee7":"#ffdfa0"}));_e.position.set(0,Q+.085,-.13),_e.rotation.x=-.6,D.add(_e)}if(M==="frozen"){let Q=Xe("\u0417\u0410\u0413\u0410\u0421\u041D\u042B \u0425\u04E8\u041B\u0414\u04E8\u04E8\u0413\u0427",R.width-.5,.22,0,3.08,.16,D);Q.userData.fishFreezer=!0}if(M==="meat"&&Xe("\u0425\u04E8\u0420\u0413\u04E8\u0421\u04E8\u041D \u041C\u0410\u0425",R.width-.5,.22,0,3.08,.16,D),$){let Q=new Bn({color:"#d4e5dc",roughness:.09,metalness:.03,transparent:!0,opacity:M==="meat"||M==="frozen"?.075:.045,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),ue=3,_e=R.width/ue;for(let ke=0;ke<ue;ke++){let Se=-R.width/2+_e*(ke+.5);if(M==="meat"||M==="frozen"){Dt(D,M,Se,1.63,.68,_e-.04,2.81,ke);continue}let Le=new We(new Nt(_e-.07,2.73),Q);if(Le.position.set(Se,1.63,.64),D.add(Le),W){let rt=Le.clone();rt.position.z=-1.2,rt.rotation.y=Math.PI,D.add(rt)}if(M==="meat"||M==="frozen"){for(let rt of[-1,1])ee(.055,2.81,.055,ae("#718e86",.28,.6),Se+rt*(_e-.04)/2,1.63,.68,D);for(let rt of[-1,1])ee(_e-.04,.055,.055,ae("#718e86",.28,.6),Se,1.63+rt*1.39,.68,D)}ke<ue-1&&ee(.028,2.84,.045,ae("#7f9585",.32,.65),Se+_e/2,1.64,.645,D);let et=Se+_e/2-.025,wt=2.78,Qe=_n(.022,.27,.028,ae("#c4d2cc",.25,.75),.006);Qe.position.set(et,wt,.735),D.add(Qe);for(let rt of[-.12,.12])ee(.024,.022,.085,ae("#c4d2cc",.25,.75),et,wt+rt,.69,D);if(W){ke<ue-1&&ee(.028,2.84,.045,ae("#7f9585",.32,.65),Se+_e/2,1.64,-1.205,D);let rt=Qe.clone();rt.position.z=-1.295,D.add(rt);for(let Tt of[-.12,.12])ee(.024,.022,.085,ae("#c4d2cc",.25,.75),et,wt+Tt,-1.25,D)}}}let pe=os(R.width+1.1,W?3.4:2.6,.2);pe.position.set(R.x,.013,R.z+(W?-.28:.25)),pe.rotation.z=R.rotation,t.add(pe),h.push(ef(M,R))}Object.entries(ii).forEach(([M,R])=>{M!=="packing"&&M!=="frozen-meat"&&xe(M,R)}),ee(3.7,.92,1.3,Fe,Ct.x,.46,Ct.z,t,!0);let he=_n(3.95,.13,1.53,new Bn({color:"#35564d",roughness:.57,clearcoat:.12,clearcoatRoughness:.5,envMapIntensity:.3}),.055);he.position.set(Ct.x,.98,Ct.z),t.add(he),u.push(he),ee(3.7,.04,.04,ve,Ct.x,1.055,Ct.z-.74);let Ae=_n(2.73,.39,.035,ve,.014);Ae.position.set(Ct.x,.43,Ct.z-.724),t.add(Ae);let Pe=Xe("\u0417\u0410\u0425\u0418\u0410\u041B\u0413\u0410 \u0411\u042D\u041B\u0422\u0413\u042D\u0425",2.65,.31,Ct.x,.43,Ct.z-.752,t,!0);Pe.rotation.y=Math.PI,Pe.userData.department="packing";for(let M=0;M<3;M++){let R=_n(1.12,.68,.045,Fe,.028);R.position.set(Ct.x-1.23+M*1.23,.48,Ct.z-.67),t.add(R);let D=_n(.24,.025,.04,ve,.006);D.position.set(Ct.x-1.23+M*1.23,.72,Ct.z-.706),t.add(D)}let ne=os(4.9,2.8,.24);ne.position.set(Ct.x,.013,Ct.z),t.add(ne);let ie=Lh({flowers:!0,color:"#e1d8bf"});ie.scale.setScalar(.76),ie.position.set(Ct.x-.92,1.055,Ct.z+.04),ie.rotation.y=.08,t.add(ie);let Ce=os(.65,.55,.18);Ce.position.set(Ct.x-.92,1.06,Ct.z+.04),t.add(Ce);let N=new tt;t.add(N),N.position.set(Ct.x,1.055,Ct.z);let oe="",j=ee(3.9,1.8,1.5,new Zt({visible:!1}),Ct.x,.9,Ct.z);j.userData.station=!0,d.push(j),h.push({x0:Ct.x-2,x1:Ct.x+2,z0:Ct.z-.8,z1:Ct.z+.8});let ge={x:Ct.x+2.8,z:Ct.z-1.5},be=new bt({color:"#657b69",roughness:.66}),Ie=new bt({color:"#ac7654",roughness:.6}),Je=_n(.7,.82,.63,be,.05);Je.position.set(ge.x,.49,ge.z),t.add(Je);let pt=_n(.8,.1,.73,Ie,.035);pt.position.set(ge.x,.94,ge.z),t.add(pt);for(let M of[-.24,.24]){let R=ee(.1,.09,.12,be,ge.x+M,.06,ge.z+.19);R.castShadow=!0}let Me=Xe("\u041C\u0423\u0423\u0414\u0421\u0410\u041D \u0411\u0410\u0420\u0410\u0410",.59,.22,ge.x,.58,ge.z-.323,t,!0);Me.rotation.y=Math.PI;let je=os(1.2,1.05,.2);je.position.set(ge.x,.014,ge.z),t.add(je);let ut=ee(.84,1.06,.78,new Zt({visible:!1}),ge.x,.53,ge.z);ut.userData.waste=!0,d.push(ut),h.push({x0:ge.x-.44,x1:ge.x+.44,z0:ge.z-.41,z1:ge.z+.41});let Ne=[{x:-5.5,z:-4.6,title:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u041C\u0410\u0425",ids:Gt.PRODUCTS.filter(M=>Wl(M)==="frozen-meat").map(M=>M.id)}];for(let M of Ne){let R=new tt;R.position.set(M.x,0,M.z),t.add(R);let D=ee(3.6,.22,1.38,ae("#d4e2da"),0,.15,0,R,!0);u.push(D),ee(3.6,2.38,.1,ae("#e6eee8"),0,1.38,0,R,!0);for(let re of[-1.78,1.78])ee(.1,2.65,1.38,Ee,re,1.4,0,R,!0);for(let re of[.43,1.2,1.97]){ee(3.6,.09,1.38,ae("#adc5b8"),0,re,0,R,!0);for(let fe of[-.7,.7])ee(3.6,.055,.055,ve,0,re+.02,fe,R)}for(let re of[-1,1])for(let fe=0;fe<3;fe++)Dt(R,"frozen-meat",(fe-1)*1.16,1.47,re*.74,1.13,2.35,fe,re);ee(3.72,.47,.16,Ee,0,2.82,0,R),Xe(M.title,3.4,.31,0,2.83,.1,R).userData.department="frozen-meat";let $=Xe(M.title,3.4,.31,0,2.83,-.1,R);$.rotation.y=Math.PI,$.userData.department="frozen-meat",h.push({x0:M.x-1.86,x1:M.x+1.86,z0:M.z-.78,z1:M.z+.78});let W=os(4.3,2.2,.23);W.position.set(M.x,.012,M.z),t.add(W)}function Ut(M){return br(M)?.path||`assets/products/${M.productId}.webp`}let rn=0,qn=0,Ar=!1,Rr=new Set($t.inventory().filter(M=>!M.hidden).map(M=>br(M)?.id||M.productId)).size+B.size+Object.keys(window.GroceryBagAssets||{}).length;function hs(M){p=!0,rn++,M||qn++,window.dispatchEvent(new CustomEvent("grocery:loadprogress",{detail:{loaded:rn,total:Rr,failed:qn}}))}function Yn(M){let R=br(M),D=R?.id||M.productId;if(g.has(D))return g.get(D);let $=$d(R||{path:Ut(M)},W=>{hs(W)});return $.anisotropy=Math.min(Vt.capabilities.getMaxAnisotropy(),8),g.set(D,$),$}let Ha=dt(256,128,M=>{M.fillStyle="#ad854d",M.fillRect(0,0,256,128);for(let R=0;R<128;R+=12){M.fillStyle=R%24?"#c8a16a":"#b88f57",M.fillRect(0,R,256,8);for(let D=0;D<256;D+=20)M.fillStyle="#8e693d",M.fillRect(D+(R%24?8:0),R,3,12)}}),Pi=new bt({map:Ha,color:"#c9a36d",roughness:.95});function Cr(M,R,D){let $=M==="bread",W=$?Pi:ae("#aa7d48"),re=$?.66:.79,fe=$?.09:.13;ee(R,.035,re,W,0,.017,.1,D);for(let pe of[-1,1])ee(.035,fe,re,W,pe*R/2,fe/2,.1,D);if(ee(R,fe,.035,W,0,fe/2,.1+re/2,D),!$)for(let pe=1;pe<3;pe++)ee(R-.04,.012,.012,ae("#75532e"),0,pe*fe/3,.128+re/2,D)}let Ls=new Map;function Ir(M,R,D,$){M.save(),M.scale(R/1024,D/480),R=1024,D=480;let W=Gt.BY_ID[$.productId],re=$t.russianHints?.();M.fillStyle="#fffef3",M.fillRect(0,0,R,D),M.strokeStyle="#a59165",M.lineWidth=5,M.strokeRect(3,3,R-6,D-6),M.textAlign="center",M.textBaseline="middle";let fe=re?Gt.BREAD_BY_ID[$.variantId]?`${window.GroceryRussian.name($)} \xB7 ${window.GroceryRussian.name(W.id)}`:window.GroceryRussian.name($):Gt.BREAD_BY_ID[$.variantId]?W.name:"";M.fillStyle="#163d2a",Re(M,Gt.lotName($),R/2,fe?104:165,R-64,2,fe?80:102,38),fe&&(M.fillStyle="#3d5238",Re(M,fe,R/2,258,R-64,2,48,32)),M.strokeStyle="#cfbf96",M.lineWidth=2,M.beginPath(),M.moveTo(26,318),M.lineTo(R-26,318),M.stroke();let pe=cs.quote($);if(M.fillStyle="#67522d",M.font="600 36px Arial,sans-serif",M.fillText(pe.bulk?"1 \u043A\u0433":Gt.lotUnit($),R/2,341,R-40),pe.sale){M.fillStyle="#ffe4a0",M.fillRect(6,365,R-12,109),M.fillStyle="#af3d31",M.fillRect(22,387,150,61),M.fillStyle="#fff7e8",M.font="700 44px Arial,sans-serif",M.fillText(`\u2212${pe.percent}%`,97,420,140);let Q=cs.money(pe.regular);M.font="500 52px Arial,sans-serif",M.fillStyle="#726b60",M.fillText(Q,350,420,266);let ue=Math.min(266,M.measureText(Q).width);M.strokeStyle="#847469",M.lineWidth=4,M.beginPath(),M.moveTo(350-ue/2,417),M.lineTo(350+ue/2,417),M.stroke(),M.fillStyle="#9e3028",M.font="800 84px Arial,sans-serif",M.fillText(cs.money(pe.price),760,418,440)}else M.fillStyle="#214c36",M.font="800 84px Arial,sans-serif",M.fillText(cs.money(pe.price),R/2,418,R-60);M.restore()}function Ns(M){let R=cs.quote(M);return R?.sale?`<small class="nearby-sale" data-learning><b>\u2212${R.percent}%</b><del>${cs.money(R.regular)}</del><strong>${cs.money(R.price)}</strong></small>`:""}function Xi(M,R,D,$,W,re){let fe=`${Gt.lotName(M)}:${M.pack}`,pe=Ls.get(fe);if(!pe){let ue=window.innerWidth<=700?512:768,_e=dt(ue,ue*480/1024,(ke,Se,Le)=>Ir(ke,Se,Le,M));pe=new Zt({map:_e,toneMapped:!1}),pe.userData.tagLot=M,Ls.set(fe,pe)}let Q=new We(new Nt(R,R*480/1024),pe);Q.position.set($,W-R*.09,re+.015),Q.userData.lotId=M.id,D.add(Q),d.push(Q)}let ka={"frozen-meat":"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u043C\u0430\u0445","frozen-dumplings":"\u0411\u0443\u0443\u0437, \u0431\u0430\u043D\u0448","frozen-bakery":"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u0433\u0443\u0440\u0438\u043B\u0430\u043D \u0431\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D","frozen-vegetables":"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u043D\u043E\u0433\u043E\u043E","pantry-2":"\u0425\u04AF\u043D\u0441, \u0430\u043C\u0442\u043B\u0430\u0433\u0447",meat:"\u041C\u0430\u0445, \u0437\u0430\u0433\u0430\u0441",dairy:"\u0421\u04AF\u04AF, \u04E9\u043D\u0434\u04E9\u0433",bread:"\u0422\u0430\u043B\u0445",pantry:"\u0425\u04AF\u043D\u0441, \u0446\u0430\u0439",canned:"\u041B\u0430\u0430\u0437\u0430\u043B\u0441\u0430\u043D \u0445\u04AF\u043D\u0441, \u0441\u043E\u0443\u0441",frozen:"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u0445\u04AF\u043D\u0441",cold:"\u0423\u0441, \u0437\u0430\u0439\u0440\u043C\u0430\u0433",household:"\u0410\u0445\u0443\u0439\u043D \u0431\u0430\u0440\u0430\u0430",drinks:"\u0423\u043D\u0434\u0430\u0430, \u0436\u04AF\u04AF\u0441",sweets:"\u0410\u043C\u0442\u0442\u0430\u043D",alcohol:"\u0421\u043E\u0433\u0442\u0443\u0443\u0440\u0443\u0443\u043B\u0430\u0445 \u0443\u043D\u0434\u0430\u0430",produce:"\u0416\u0438\u043C\u0441, \u043D\u043E\u0433\u043E\u043E",ready:"\u0411\u044D\u043B\u044D\u043D \u0445\u043E\u043E\u043B",packing:"\u0411\u044D\u043B\u0442\u0433\u044D\u0445 \u0448\u0438\u0440\u044D\u044D"},si=new Es(-18.5,18.5,15.03125,-15.03125,.1,100);si.position.set(0,38,24),si.lookAt(0,0,0),si.updateMatrixWorld();let Us=null,us=!0;function Fs(M,R,D=.12){let $=new P(M,D,R).project(si);return{left:`${($.x+1)*50}%`,top:`${(1-$.y)*50}%`}}function Ga(){Object.assign(Wt("map-player").style,Fs(r.position.x,r.position.z)),Wt("map-player").style.transform=`translate(-50%,-50%) rotate(${-a}rad)`}function Va(){if(Ga(),document.querySelectorAll("#map-dialog .map-zone").forEach(Q=>{let ue=ii[Q.dataset.mapZone];Object.assign(Q.style,Q.dataset.mapZone==="packing"?Fs(Ct.x,Ct.z,1):Fs(ue.x,ue.z,2.4))}),!us)return;let M=Wt("store-map-canvas"),R=M.width,D=M.height;Us||=new Un(R,D,{depthBuffer:!0}),Us.texture.colorSpace=Yt;let $=Vt.getRenderTarget(),W=[],re=new Dn,fe=new P;t.updateMatrixWorld(!0),t.traverse(Q=>{!Q.isMesh||!Q.visible||(re.setFromObject(Q),re.getCenter(fe),(re.max.y>4.4||Math.abs(fe.z)>12.45||Math.abs(fe.x)>15.65)&&(W.push(Q),Q.visible=!1))}),se?.visible&&(W.push(se),se.visible=!1);let pe=Vt.shadowMap.needsUpdate;try{Vt.shadowMap.needsUpdate=!1,Vt.setRenderTarget(Us),Vt.render(t,si);let Q=new Uint8Array(R*D*4);Vt.readRenderTargetPixels(Us,0,0,R,D,Q);let ue=M.getContext("2d"),_e=ue.createImageData(R,D),ke=R*4;for(let Se=0;Se<D;Se++)_e.data.set(Q.subarray((D-Se-1)*ke,(D-Se)*ke),Se*ke);ue.putImageData(_e,0,0),us=!1}finally{W.forEach(Q=>{Q.visible=!0}),Vt.setRenderTarget($),Vt.shadowMap.needsUpdate=pe,p=!0}}let Wa="";function Os(){let M=$t.russianHints?.(),R=window.GroceryLanguage?.DEPARTMENTS||{},D=`${!!M}:${cs.offerForDay().day}`;if(D!==Wa){Wa=D,t.traverse(W=>{let re=W.userData.department,fe=W.material?.map;if(!re||!fe?.image?.getContext)return;let pe=fe.image,Q=pe.getContext("2d"),ue=pe.width,_e=pe.height;Jt(Q,ue,_e,W.userData.signText,M&&R[re]||""),fe.needsUpdate=!0}),Ls.forEach(W=>{let re=W.map.image;Ir(re.getContext("2d"),re.width,re.height,W.userData.tagLot),W.map.needsUpdate=!0});let $={"frozen-dumplings":"buuz","frozen-bakery":"mini-khuushuur","frozen-vegetables":"frozen-broccoli","frozen-meat":"goat-meat","pantry-2":"rolled-oats",meat:"chicken-thigh",dairy:"milk",bread:"white-bread",pantry:"rice",canned:"canned-tuna",frozen:"shrimp",cold:"icecream",household:"dish-soap",drinks:"fruit-juice",sweets:"milk-biscuits",alcohol:"beer-sengur",produce:"red-apple",ready:"mantuu"};document.querySelectorAll("#map-dialog .zone-links [data-destination]").forEach((W,re)=>{let fe=W.dataset.destination,pe=$[fe];W.innerHTML=`<span class="map-directory-number">${String(re+1).padStart(2,"0")}</span><span class="map-directory-photo" aria-hidden="true">${pe&&Gt.BY_ID[pe]?window.GroceryArt.product(pe):window.GroceryArt.icon("bag")}</span><span class="zone-label" data-learning>${ka[fe]}${M?`<small lang="ru">${R[fe]||""}</small>`:""}</span><span aria-hidden="true">\u2192</span>`}),us=!0,Wt("map-dialog").open&&Va()}O="",A="",U=0,H=!0,p=!0}function E(M){if(!M)return;let R=new Set;M.traverse(D=>{D.geometry&&!R.has(D.geometry)&&(R.add(D.geometry),D.geometry.dispose()),D.isInstancedMesh&&D.dispose(),(Array.isArray(D.material)?D.material:[D.material]).forEach(W=>{W?.userData?.owned&&!R.has(W)&&(R.add(W),W.map?.userData?.owned&&!R.has(W.map)&&(R.add(W.map),W.map.dispose()),W.dispose())})})}function F(M){let R=!!M&&!!ze();R!==te&&(te=R,R&&(L.clear(),y=null,nn()),document.body.classList.toggle("shelf-focus-mode",R),p=!0,H=!0,U=0)}function Z(){if(!se)return;let M=Nh[ze()];if(!M)return;let R=me*2;se.position.set(r.position.x-Math.sin(a)*M.offset+Math.cos(a)*R,Ih(ze(),window.innerWidth,window.innerHeight,0).baseY,r.position.z-Math.cos(a)*M.offset-Math.sin(a)*R),se.rotation.set(0,a-.25*me,0)}function k(M){let R=`pouch:${M}`;if(g.has(R))return g.get(R);let D=window.GroceryBagAssets?.[M],$=new pn;return $.colorSpace=Yt,g.set(R,$),D&&Sr(R,window.FastAssets?.bags?.[M]?.path||D.path,20).then(W=>{$.image=W,$.needsUpdate=!0,hs(!0)},()=>hs(!1)),$}function V(M,R,D,$,W,re,fe,pe){let Q=new tt;Q.position.set(D,$,W),M.add(Q);let ue,_e=Gt.isBulk(R),ke=Yn(R),Se=window.GroceryBag.SAFE,Le=()=>{ue&&(Ds(ue.group,re*(_e?Se.width:1),fe*(_e?Se.height:1),pe*(_e?.6:1)),_e&&(ue.group.position.y+=fe*(1-Se.top-Se.height)),Q.traverse(et=>{et.isMesh&&(et.castShadow=!1,et.receiveShadow=!1)}),p=!0)};return ue=ls(Gt.BY_ID[R.productId],R,ke,re,Le),Q.add(ue.group),_e&&(Q.add(pf(k("tied"),re,fe,pe)),Q.add(Er(re*.92,pe*.9))),Le(),Q}function De(M,R,D,$,W,re,fe,pe,Q){let ue=new tt;ue.position.x=W,M.add(ue);let _e=.48,ke=.62,Se=Qe=>{let rt=new Zt({color:Qe});return rt.userData.owned=!0,rt};ee(re,ke,.025,Se("#c9a26a"),0,ke/2,_e/2,ue),ee(re,ke,.025,Se("#d8b67d"),0,ke/2,-_e/2,ue);for(let Qe of[-1,1])ee(.025,ke,_e,Se(Qe<0?"#b58d57":"#c8a16b"),Qe*re/2,ke/2,0,ue);ee(re,.025,_e,Se("#a78050"),0,.012,0,ue);let Le=dt(384,220,(Qe,rt,Tt)=>{Qe.fillStyle="#fff6df",Qe.fillRect(0,0,rt,Tt),Qe.textAlign="center",Qe.fillStyle="#365340",Qe.font="bold 54px Georgia",Qe.fillText(`\u2116 ${R.number}`,rt/2,72,rt-18),Qe.font="35px Arial",Qe.fillText(R.customer||"",rt/2,133,rt-18),Qe.font="25px Arial",Qe.fillText(`${D+1}/${$}`,rt/2,183)});Le.userData.owned=!0;let et=new Zt({map:Le,toneMapped:!1});et.userData.owned=!0;let wt=new We(new Nt(re*.82,.33),et);if(wt.position.set(0,.33,-_e/2-.016),wt.rotation.y=Math.PI,ue.add(wt),pe)ee(re+.035,.065,_e+.04,Se("#d5b175"),0,ke+.028,0,ue),ee(re*.84,.05,.11,Se("#e4c58c"),0,ke+.083,-.02,ue),ee(.1,.1,_e+.05,Se("#f2dfb4"),0,ke+.06,0,ue);else if(fe){let rt=Math.max(1,Math.ceil(Q.length/2));Q.forEach((Tt,En)=>V(ue,Tt,(En%2-.5)*re*.42,.37,(Math.floor(En/2)-(rt-1)/2)*Math.min(.18,.32/rt),re*.39,.4,Math.min(.15,.33/rt)))}return ue}function Ve(){let M=$t.label?.()||{},R=$t.packingStage?.()||"collecting",D=$t.selected?.()||[],$=$t.delivered?.(),W=JSON.stringify([M.number,M.customer,M.bags,R,$,D.map(re=>re.id)]);if(W!==oe){if(oe=W,E(N),N.clear(),!$){let re=Math.max(1,M.bags||1),fe=Math.min(5,re),pe=Math.min(.82,3.45/fe-.08);for(let Q=0;Q<fe;Q++)De(N,M,Q,re,(Q-(fe-1)/2)*(pe+.09),pe,R==="packed",R==="sealed",R==="packed"?D.filter((ue,_e)=>_e%fe===Q):[])}p=!0}}function Te(){let M=$t.transport?.()||"",R=$t.label?.()||{},D=$t.packingStage?.()||"collecting",$=M?`${M}:${R.number}:${R.customer}:${R.bags}:${D}`:"";if(document.body.dataset.carrier=M,M!==c&&(F(!1),me=0,o=l(),r.rotation.set(o,a,0,"YXZ"),c=M,p=!0),$!==Ke){if(se&&(t.remove(se),E(se)),se=null,Ue=null,Ke=$,z="",M){let pe=M==="cart"?cf():hf();se=pe.group,Ue=pe.contents,X.setFromObject(se).expandByScalar(.12),t.add(se),se.scale.set(.78,1,.9),Z()}Vt.shadowMap.needsUpdate=!0,p=!0}if(Ve(),!Ue)return;let W=$t.carried?.()||[],re=Ih(M,window.innerWidth,window.innerHeight,W.length),fe=W.map(pe=>pe.id).join("|")+":"+re.portrait;fe!==z&&(z=fe,E(Ue),Ue.clear(),W.forEach((pe,Q)=>{let ue=re.slots[Q];V(Ue,pe,ue.x,ue.y,ue.z,ue.width,ue.height,ue.depth)}),p=!0,Vt.shadowMap.needsUpdate=!0)}function Be(M,R,D,$){return wh(M,R,D,$,()=>{p=!0})}function Ye(M,R,D,$,W,re=!1){let fe=new tt,pe,Q=()=>{pe&&(Ds(pe.group,D,$,W,!1),p=!0)};return pe=re?wh(M,R,D,!1,Q):ls(Gt.BY_ID[M.productId],M,R,D,Q),fe.add(pe.group),Q(),{group:fe,front:pe.front}}function ct(){let M=new Set;_.traverse(D=>{if(!D.isMesh)return;D.geometry.dispose(),D.isInstancedMesh&&D.dispose(),(Array.isArray(D.material)?D.material:[D.material]).forEach(W=>{!W||M.has(W)||(M.add(W),W.map?.userData?.owned&&W.map.dispose(),W.userData?.owned&&W.dispose())})}),t.remove(_),_=new tt,t.add(_),d.splice(0,d.length,j,ut),m.clear();let R={};$t.inventory().filter(D=>!D.hidden).forEach(D=>{let $=Wl(Gt.BY_ID[D.productId]);$!=="frozen-meat"&&(R[$]||=[]).push(D)});for(let[D,$]of Object.entries(R)){let W=ii[D];if(!W)continue;let re=new tt;if(re.position.set(W.x,0,W.z),re.rotation.y=W.rotation,_.add(re),$.sort((pe,Q)=>(pe.variantId||pe.productId).localeCompare(Q.variantId||Q.productId)||pe.batch.localeCompare(Q.batch)),W.chest){let pe=nf($);for(let Q of pe.bins){let ue=Math.max(3,Q.family.lots.length);for(let _e=0;_e<ue;_e++){let ke=Q.family.lots[_e%Q.family.lots.length],Se=new tt;Se.position.set(Q.x,Q.y+_e*.014,Q.z),re.add(Se);let Le=Yn(ke),et=sf(Gt.BY_ID[ke.productId],ke,Le,()=>{p=!0});Se.add(et.group);let wt=()=>et.group.traverse(Tt=>{Tt.isMesh&&Tt.userData.lotId&&!d.includes(Tt)&&d.push(Tt)});wt(),Le.userData.presentation||Le.userData.callbacks.push(wt);let Qe=new P;et.front.getWorldPosition(Qe);let rt=m.get(ke.id);rt?(rt.groups.push(Se),rt.positions.push(Qe)):m.set(ke.id,{lot:ke,group:Se,groups:[Se],position:Qe,positions:[Qe]})}}for(let Q of pe.labels)Xi(Q.family.lots[0],Q.width,re,Q.x,Q.y,Q.z);continue}if(D==="cold"){let ue=function(_e,ke,Se,Le,et,wt=!1){let Qe=new tt;Qe.position.set(ke,Se,Le),wt&&(Qe.rotation.x=-Math.PI/2),re.add(Qe);let rt=Yn(_e),Tt=ls(Gt.BY_ID[_e.productId],_e,rt,et,()=>{p=!0});wt&&Tt.group.scale.setScalar(.82),Qe.add(Tt.group),wt||Qe.add(Er(.65,.4));let En=()=>Tt.group.traverse(It=>{It.isMesh&&It.userData.lotId&&!d.includes(It)&&d.push(It)});En(),rt.userData.presentation||rt.userData.callbacks.push(En);let dn=new P;Tt.front.getWorldPosition(dn);let Ze=m.get(_e.id);Ze?(Ze.groups.push(Qe),Ze.positions.push(dn)):m.set(_e.id,{lot:_e,group:Qe,groups:[Qe],position:dn,positions:[dn]})},pe=$.filter(_e=>_e.productId!=="icecream"),Q=$.filter(_e=>_e.productId==="icecream");if(pe.length)for(let _e=0;_e<6;_e++){let ke=pe[_e%pe.length],Se=-1.5+(_e%2?.47:-.47),Le=.465+Math.floor(_e/2)*.88;ue(ke,Se,Le,.4,.78),Xi(ke,.74,re,Se,Le-.07,.69)}for(let _e of of(Q)){let ke=Math.max(3,_e.family.lots.length);for(let Se=0;Se<ke;Se++){let Le=_e.family.lots[Se%_e.family.lots.length],et=new tt;et.position.set(_e.x+(Se%2?.045:-.045),_e.y+Se*.012,_e.z-Math.floor(Se/2)*.035),re.add(et);let wt=lf(Gt.BY_ID[Le.productId],Le,Yn(Le),()=>{p=!0});et.add(wt.group);let Qe=()=>wt.group.traverse(dn=>{dn.isMesh&&dn.userData.lotId&&!d.includes(dn)&&d.push(dn)});Qe();let rt=Yn(Le);rt.userData.presentation||rt.userData.callbacks.push(Qe);let Tt=new P;wt.front.getWorldPosition(Tt);let En=m.get(Le.id);En?(En.groups.push(et),En.positions.push(Tt)):m.set(Le.id,{lot:Le,group:et,groups:[et],position:Tt,positions:[Tt]})}Xi(_e.family.lots[0],.57,re,_e.x,_e.row?.23:.51,.757)}continue}let fe=tf($,W.width);D==="frozen"&&fe.forEach(pe=>{pe.families=Qd(pe.families)}),fe.forEach(({families:pe,columns:Q,spacing:ue},_e)=>{let ke=_e?`${D}-${_e+1}`:D,Se=ii[ke];if(!Se)throw new Error(`No physical shelf for ${D} page${_e+1}`);jd(ke,Se).forEach(Le=>{let et=new tt;et.position.set(Le.x,0,Le.z),et.rotation.y=Le.rotation,_.add(et),Array.from({length:Q*3},(Qe,rt)=>pe[rt%pe.length]).forEach((Qe,rt)=>{let Tt=rt%Q,En=Math.floor(rt/Q),dn=-.5*(Q-1)*ue+Tt*ue,Ze=.465+En*.88,It=new tt;It.position.set(dn,Ze,.12),et.add(It);let wn=Qe.lots.find(fn=>!Gt.isUnfit(fn))||Qe.lots[0];if((["bread","produce"].includes(D)||Gt.isBulk(wn))&&Cr(D,ue*.94,It),D==="produce"){let fn=rf(Qe.lots,ue);for(let qt of Qe.lots){let Pt=new tt;Pt.position.set(0,.04,.12),It.add(Pt);let ai=Yn(qt),Tn=Jd(qt,ai,fn.filter(ln=>ln.lot.id===qt.id),()=>{p=!0});Pt.add(Tn.group);let vn=()=>Tn.group.traverse(ln=>{ln.isMesh&&ln.userData.lotId&&!d.includes(ln)&&d.push(ln)});vn(),ai.userData.presentation||ai.userData.callbacks.push(vn);let Mn=new P;Tn.front.getWorldPosition(Mn);let Rn=m.get(qt.id);Rn?(Rn.groups.push(Pt),Rn.positions.push(Mn)):m.set(qt.id,{lot:qt,group:Pt,groups:[Pt],position:Mn,positions:[Mn]})}}else Qe.lots.forEach((fn,qt)=>{let Pt=new tt,ai=Gt.BY_ID[fn.productId],Tn=Qe.lots.length>1;Pt.position.set(Tn?(qt%2?1:-1)*ue*.14:0,0,Tn?-Math.floor(qt/2)*.13:0),It.add(Pt);let vn=Yn(fn),Mn=ue*(Tn?.69:1),Rn=["meat","frozen"].includes(D),ln=Rn?Ye(fn,vn,Mn*.93,.69,.34):Ye(fn,vn,Mn*.93,.69,.4,D==="sweets");ln.group.position.set(0,["produce","bread"].includes(D)?.04:.012,.12),Pt.add(ln.group);let oi=()=>ln.group.traverse(Zi=>{Zi.isMesh&&Zi.userData.lotId&&!d.includes(Zi)&&d.push(Zi)});oi(),vn.userData.presentation||vn.userData.callbacks.push(oi);let Di=new P;ln.front.getWorldPosition(Di);let Yi=m.get(fn.id);Yi?(Yi.groups.push(Pt),Yi.positions.push(Di)):m.set(fn.id,{lot:fn,group:Pt,groups:[Pt],position:Di,positions:[Di]})});It.add(Er(Math.min(.82,ue*.93),D==="produce"?.6:.42)),Xi(wn,Math.min(ue*.96,1),et,dn,Ze-.07,.68)})})})}for(let D of Ne){let $=D.ids.map(W=>$t.inventory().find(re=>re.productId===W&&!re.hidden&&!Gt.isUnfit(re))).filter(Boolean);if($.length)for(let W=0;W<2;W++)for(let re=0;re<9;re++){let fe=$[(re+W*2)%$.length],pe=Math.floor(re/3),Q=new tt;Q.position.set(D.x+(re%3-1)*1.12,.48+pe*.77,D.z+(W?-.42:.42)),Q.rotation.y=W?Math.PI:0,_.add(Q);let ue=Yn(fe),_e=Ye(fe,ue,1.02,.63,.4,!0);Q.add(_e.group),Q.add(Er(.85,.37)),Xi(fe,1,Q,0,-.06,.3);let ke=()=>_e.group.traverse(et=>{et.isMesh&&et.userData.lotId&&!d.includes(et)&&d.push(et)});ke(),ue.userData.presentation||ue.userData.callbacks.push(ke);let Se=new P;_e.front.getWorldPosition(Se);let Le=m.get(fe.id);Le?(Le.groups.push(Q),Le.positions.push(Se)):m.set(fe.id,{lot:fe,group:Q,groups:[Q],position:Se,positions:[Se]})}}p=!0,U=0,St()}function St(){us=!0;for(let M of m.values())M.groups.forEach(R=>{R.visible=$t.count(M.lot.id)<M.lot.stock});Vt.shadowMap.needsUpdate=!0,p=!0,U=0}let ze=()=>$t.transport?.()||"";function _t(M,R){return yf(M,R,ze()==="cart"?1.5:ze()==="basket"?1.36:.32,h)}function Xt(M){F(!1);let R=vf({x:r.position.x,z:r.position.z,yaw:a},M,ze(),h);r.position.x=R.x,r.position.z=R.z,a=R.yaw,p=!0,U=0}function Ft(M,R){F(!1);let D=Ql({x:r.position.x,z:r.position.z,yaw:a},M,R,ze(),h);r.position.x=D.x,r.position.z=D.z,p=!0}function zt(M,R){let pe=(qt,Pt)=>[Math.max(0,Math.min(66,Math.round((qt- -14.85)/.45))),Math.max(0,Math.min(52,Math.round((Pt- -11.7)/.45)))],Q=(qt,Pt)=>[-14.85+qt*.45,-11.7+Pt*.45],ue=[],_e=r.position.x,ke=r.position.z;if(!_t(_e,ke)){let qt=!1;for(let Pt=.15;Pt<=1.95&&!qt;Pt+=.15)for(let ai of[a+Math.PI,a-Math.PI/2,a+Math.PI/2,a]){let Tn=_e-Math.sin(ai)*Pt,vn=ke-Math.cos(ai)*Pt,Mn=Ql({x:_e,z:ke,yaw:a},Tn-_e,vn-ke,ze(),h);if(Math.hypot(Mn.x-Tn,Mn.z-vn)<.001&&_t(Tn,vn)){ue.push([Tn,vn,a]),_e=Tn,ke=vn,qt=!0;break}}if(!qt)return null}function Se(qt,Pt){let[ai,Tn]=pe(qt,Pt),vn=[];for(let Mn=-2;Mn<=2;Mn++)for(let Rn=-2;Rn<=2;Rn++){let ln=ai+Mn,oi=Tn+Rn;if(ln<0||ln>=67||oi<0||oi>=53)continue;let[Di,Yi]=Q(ln,oi);if(!_t(Di,Yi))continue;let Zi=Math.max(1,Math.ceil(Math.hypot(Di-qt,Yi-Pt)/.06));Array.from({length:Zi+1},(Vx,Uh)=>_t(qt+(Di-qt)*Uh/Zi,Pt+(Yi-Pt)*Uh/Zi)).every(Boolean)&&vn.push({cell:[ln,oi],distance:Math.hypot(Di-qt,Yi-Pt)})}return vn.sort((Mn,Rn)=>Mn.distance-Rn.distance)[0]?.cell}let Le=Se(_e,ke),et=Se(M,R);if(!Le||!et)return null;let[wt,Qe]=Le,[rt,Tt]=et,En=Qe*67+wt,dn=Tt*67+rt,Ze=[En],It=new Map([[En,-1]]);for(let qt=0;qt<Ze.length;qt++){let Pt=Ze[qt];if(Pt===dn)break;let ai=Pt%67,Tn=Math.floor(Pt/67);for(let[vn,Mn]of[[0,-1],[1,0],[0,1],[-1,0]]){let Rn=ai+vn,ln=Tn+Mn,oi=ln*67+Rn;Rn<0||Rn>=67||ln<0||ln>=53||It.has(oi)||!_t(...Q(Rn,ln))||(It.set(oi,Pt),Ze.push(oi))}}if(!It.has(dn))return null;let wn=[],fn=dn;for(;fn!==En;)wn.push(Q(fn%67,Math.floor(fn/67))),fn=It.get(fn);return wn.reverse(),wn.unshift(Q(wt,Qe)),wn.push([M,R]),[...ue,...wn]}let yn=new On(.055,.055,.012,12),qe=new Zt({color:"#f5d99a"});function nn(){ce.clear(),p=!0}function Rt(M){F(!1);let R=ii[M];if(!R)return;let D=zt(...R.to);if(!D){an(window.GroceryLanguage?.isRussian()?"\u041E\u0442\u044A\u0435\u0434\u044C\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0442 \u043F\u043E\u043B\u043A\u0438 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0434\u0435\u043B \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0422\u0430\u0432\u0438\u0443\u0440\u0430\u0430\u0441 \u0431\u0430\u0433\u0430 \u0437\u044D\u0440\u044D\u0433 \u0445\u043E\u043B\u0434\u043E\u043E\u0434 \u0445\u044D\u0441\u0433\u044D\u044D \u0434\u0430\u0445\u0438\u043D \u0441\u043E\u043D\u0433\u043E\u043E\u0440\u043E\u0439.");return}nn(),y={path:D,index:0,yaw:R.yaw,pitch:R.pitch,id:M},D.forEach(([$,W],re)=>{if(re%2)return;let fe=new We(yn,qe);fe.position.set($,.018,W),fe.userData.pathIndex=re,ce.add(fe)}),an(`${R.name} \u0440\u04AF\u04AF \u044F\u0432\u0436 \u0431\u0430\u0439\u043D\u0430\u2026`),L.clear(),p=!0}function xi(M,R){let D=Math.atan2(Math.sin(M-a),Math.cos(M-a));Xt(D*Math.min(1,R*7))}function an(M){let R=window.GroceryLanguage?.isRussian()?window.GroceryLanguage.translateText(M):M;Wt("world-hint").textContent!==R&&(Wt("world-hint").textContent=R)}function qi(M){J.setFromCamera(M,r),J.far=3.55;let R=J.intersectObjects([...d,...f.flatMap($=>$.isOpen?[$.handle]:[$.pane,$.handle])].filter($=>{if(!$.parent)return!1;for(let W=$;W;W=W.parent)if(!W.visible)return!1;return!0}),!1)[0];if(!R)return null;if(R.object.userData.fridgeDoor!==void 0)return{doorId:R.object.userData.fridgeDoor,distance:R.distance};if(R.object.userData.waste)return{waste:!0,distance:R.distance};if(R.object.userData.station)return{station:!0,distance:R.distance};let D=J.intersectObjects(u,!1);return D[0]&&D[0].distance<R.distance-.08?null:{lotId:R.object.userData.lotId,distance:R.distance,carrierOverlap:ff(J.ray,se,X)}}function ri(){let M=r.position,R=Math.hypot(M.x-Ct.x,M.z-(Ct.z-.4))<2.8;R!==S&&(S=R,$t.atStation(R));let D=R?"packing":Object.keys(ii).filter(Ze=>Ze!=="packing").sort((Ze,It)=>Math.hypot(M.x-ii[Ze].to[0],M.z-ii[Ze].to[1])-Math.hypot(M.x-ii[It].to[0],M.z-ii[It].to[1]))[0];O!==D&&(O=D,Wt("location-name").innerHTML=`<span data-learning>${ii[D].name}</span>${$t.russianHints?.()?`<small class="department-ru" lang="ru">${window.GroceryLanguage?.DEPARTMENTS[D]||""}</small>`:""}`);let $=new P(-Math.sin(a),0,-Math.cos(a)),W=[...m.values()].filter(Ze=>Ze.group.visible).map(Ze=>{let It=Ze.positions.map(wn=>({distance:Math.hypot(wn.x-M.x,wn.z-M.z),dot:new P(wn.x-M.x,0,wn.z-M.z).normalize().dot($)})).filter(wn=>wn.dot>.18).sort((wn,fn)=>wn.distance-fn.distance)[0];return It?{...Ze,...It}:null}).filter(Ze=>Ze&&Ze.distance<3.55).sort((Ze,It)=>Ze.distance-It.distance),re=!R&&W.some(Ze=>Ze.dot>.3&&Ze.distance<(v?3.25:2.75));re!==v&&(v=re,document.querySelector(".location-plaque").hidden=!re);let fe=[],pe=new Set;for(let Ze of W){let It=Ze.lot.variantId||Ze.lot.productId;if(!pe.has(It)&&(pe.add(It),fe.push(Ze),fe.length===10))break}Zd(fe.map(({lot:Ze})=>br(Ze)?.id||Ze.productId));for(let{lot:Ze}of fe)Mr.promote("product:"+(br(Ze)?.id||Ze.productId),50),Yn(Ze).userData.requestDetail?.();let Q=fe.map(Ze=>Ze.lot.id+":"+($e(Ze.lot.id)?.isOpen||!1)).join();Q!==A&&(A=Q,Wt("nearby-products").innerHTML=fe.map(({lot:Ze})=>`<button data-world-lot="${Ze.id}">${window.GroceryArt.product(Ze.productId,"",Ze.pack,Gt.photoKey(Ze))}<span><span data-learning>${Gt.lotName(Ze)}</span>${$t.russianHints?.()?`<small class="nearby-ru" lang="ru">${window.GroceryRussian.name(Ze)}${Gt.BREAD_BY_ID[Ze.variantId]?" \xB7 "+window.GroceryRussian.name(Ze.productId):""}</small>`:""}<small>${Gt.isBulk(Ze)?"\u0417\u0430\u0434\u0433\u0430\u0439 \xB7 ":Gt.BY_ID[Ze.productId].category==="produce"?"\u0421\u0430\u0432\u043B\u0430\u0441\u0430\u043D \xB7 ":""}${Gt.lotUnit(Ze)}</small>${Ns(Ze)}</span><span class="nearby-arrow">\u2197</span></button>`).join(""),Wt("nearby-panel").hidden=!fe.length);let ue=window.GroceryLanguage?.isRussian()?"\u0420\u044F\u0434\u043E\u043C \u0441 \u0432\u0430\u043C\u0438":"\u041E\u0439\u0440 \u0431\u0430\u0439\u0433\u0430\u0430 \u0431\u0430\u0440\u0430\u0430",_e=Wt("nearby-products").children.length,ke=[D,_e,x,$t.russianHints?.(),ue].join("|");Wt("nearby-toggle").dataset.contentKey!==ke&&(Wt("nearby-toggle").dataset.contentKey=ke,Wt("nearby-toggle").innerHTML=`<span class="nearby-standard">${ue} \xB7 ${_e}</span><span class="nearby-place"><strong data-learning>${ii[D].name}</strong>${$t.russianHints?.()?`<small lang="ru">${window.GroceryLanguage?.DEPARTMENTS[D]||""}</small>`:""}</span><span class="nearby-caret" aria-hidden="true">${x?"\u2303":"\u2304"}</span>`);let Se=qi(K)||qi(new ye(0,0));if(Se?.lotId){let Ze=$e(Se.lotId);Ze&&!Ze.isOpen&&(Se={doorId:Ze.id,distance:Se.distance})}T=Se;let Le=Se?.lotId&&Gt.isBulk(m.get(Se.lotId).lot)&&Gt.BY_ID[m.get(Se.lotId).lot.productId].category==="produce",et=!y&&Se?.doorId===void 0&&!Se?.station&&!Se?.waste&&fe.some(Ze=>{let It=$e(Ze.lot.id);return!It||It.isOpen});Wt("world-hint").classList.toggle("is-price-help",et),y||an(Se?.waste?window.GroceryLanguage?.isRussian()?"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0434\u043B\u044F \u0431\u0440\u0430\u043A\u0430 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C.":"\u041C\u0443\u0443\u0434\u0441\u0430\u043D \u0431\u0430\u0440\u0430\u0430\u043D\u044B \u0441\u0430\u0432 \xB7 \u0434\u0430\u0440\u0436 \u043D\u044D\u044D\u0433\u044D\u044D\u0440\u044D\u0439.":Se?.doorId!==void 0?window.GroceryLanguage?.isRussian()?"\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443.":"\u0425\u04E9\u0440\u0433\u04E9\u0433\u0447\u04E9\u04E9 \u043D\u044D\u044D\u0433\u044D\u044D\u0434 \u0431\u0430\u0440\u0430\u0430\u0433\u0430\u0430 \u0441\u043E\u043D\u0433\u043E\u043E\u0440\u043E\u0439.":Se?.station?"\u0411\u044D\u043B\u0442\u0433\u044D\u0445 \u0448\u0438\u0440\u044D\u044D \xB7 \u0434\u0430\u0440\u0436 \u0443\u0443\u0442\u0430\u0430 \u0448\u0430\u043B\u0433\u0430\u0430\u0440\u0430\u0439":et?window.GroceryLanguage?.isRussian()?"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0435\u043D\u043D\u0438\u043A, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u043A\u0440\u0443\u043F\u043D\u0435\u0435.":"\u0411\u0430\u0440\u0430\u0430\u0433 \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0436 \u0445\u0430\u0440\u0430\u0445\u044B\u043D \u0442\u0443\u043B\u0434 \u04AF\u043D\u0438\u0439\u043D \u0448\u043E\u0448\u0433\u043E\u043D \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u0430\u0430\u0440\u0430\u0439.":Se?.lotId?`${Gt.lotName(m.get(Se.lotId).lot)} \xB7 ${Le?"\u0433\u0430\u0434\u043D\u0430 \u0431\u0430\u0439\u0434\u043B\u044B\u0433 \u043D\u044C \u0430\u0436\u0438\u0433\u043B\u0430\u0430\u0440\u0430\u0439":"\u0434\u0430\u0440\u0436 \u0448\u043E\u0448\u0433\u044B\u0433 \u043D\u044C \u0445\u0430\u0440\u043D\u0430 \u0443\u0443"}`:"\u0422\u0430\u0432\u0438\u0443\u0440\u0442 \u043E\u0439\u0440\u0442\u043E\u0436, \u0431\u0430\u0440\u0430\u0430\u043D \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u0430\u0430\u0440\u0430\u0439.");let wt=window.GroceryLanguage?.isRussian(),Qe=ze();Wt("world-prompt").classList.toggle("has-context",!!(y||te||Se?.station||Se?.waste||Se?.doorId!==void 0)),te&&an(wt?Qe==="cart"?"\u0422\u0435\u043B\u0435\u0436\u043A\u0430 \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0440\u044F\u0434\u043E\u043C. \u0412\u044B \u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u043B\u043A\u0443.":"\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0440\u044F\u0434\u043E\u043C. \u0412\u044B \u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u043B\u043A\u0443.":Qe==="cart"?"\u0422\u044D\u0440\u044D\u0433 \u0445\u0430\u0436\u0443\u0443\u0434 \u0431\u0430\u0439\u043D\u0430. \u0422\u0430\u0432\u0438\u0443\u0440\u044B\u043D \u0431\u0430\u0440\u0430\u0430\u0433 \u04AF\u0437\u044D\u044D\u0440\u044D\u0439.":"\u0421\u0430\u0433\u0441 \u0445\u0430\u0436\u0443\u0443\u0434 \u0431\u0430\u0439\u043D\u0430. \u0422\u0430\u0432\u0438\u0443\u0440\u044B\u043D \u0431\u0430\u0440\u0430\u0430\u0433 \u04AF\u0437\u044D\u044D\u0440\u044D\u0439.");let rt=!!Qe&&fe.some(Ze=>{let It=$e(Ze.lot.id);return!It||It.isOpen})&&Se?.doorId===void 0&&!Se?.waste&&!Se?.station;Wt("interact-button").hidden=!Se&&!te&&!rt;let Tt=Se?.waste?"\u041C\u0443\u0443\u0434\u0441\u0430\u043D \u0431\u0430\u0440\u0430\u0430\u043D\u044B \u0441\u0430\u0432":Se?.doorId!==void 0?f[Se.doorId].opening?window.GroceryLanguage?.isRussian()?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A":"\u0425\u04E9\u0440\u0433\u04E9\u0433\u0447\u0438\u0439\u0433 \u0445\u0430\u0430\u0445":window.GroceryLanguage?.isRussian()?"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A":"\u0425\u04E9\u0440\u0433\u04E9\u0433\u0447\u0438\u0439\u0433 \u043D\u044D\u044D\u0445":Se?.station?"\u0423\u0443\u0442\u0430\u0430 \u0431\u044D\u043B\u0442\u0433\u044D\u0445":Le?"\u0413\u0430\u0434\u043D\u0430 \u0431\u0430\u0439\u0434\u0430\u043B \u0445\u0430\u0440\u0430\u0445":"\u0428\u043E\u0448\u0433\u043E \u0445\u0430\u0440\u0430\u0445",En=window.GroceryLanguage?.isRussian()?window.GroceryLanguage.translateText(Tt):Tt,dn=te?wt?Qe==="cart"?"\u0412\u0437\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0436\u043A\u0443":"\u0412\u0437\u044F\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443":Qe==="cart"?"\u0422\u044D\u0440\u0433\u044D\u044D \u0430\u0432\u0430\u0445":"\u0421\u0430\u0433\u0441\u0430\u0430 \u0430\u0432\u0430\u0445":rt?wt?"\u041E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u043B\u043A\u0443":"\u0422\u0430\u0432\u0438\u0443\u0440\u044B\u0433 \u04AF\u0437\u044D\u0445":En;Wt("interact-button").textContent!==dn&&(Wt("interact-button").textContent=dn),_i.classList.toggle("can-interact",!!Se),Ga()}function Zn(M){if(!M)return;if(M.lotId&&M.carrierOverlap&&F(!0),(M.station||M.waste)&&F(!1),L.clear(),y=null,nn(),w(!1),M.doorId!==void 0){f[M.doorId].toggle(),A="",p=!0,H=!0;return}let R=M.lotId&&$e(M.lotId);if(R&&!R.isOpen){R.open(),A="",p=!0,H=!0;return}M.waste?$t.openWaste():M.station?$t.openPacking():$t.inspect(M.lotId)}let nt=null;_i.addEventListener("pointerdown",M=>{M.button!==0||nt||(nt={id:M.pointerId,x:M.clientX,y:M.clientY,lastX:M.clientX,lastY:M.clientY,moved:!1},_i.setPointerCapture(M.pointerId),_i.focus({preventScroll:!0}))}),_i.addEventListener("pointermove",M=>{if(K.set(M.clientX/window.innerWidth*2-1,-M.clientY/window.innerHeight*2+1),!nt||nt.id!==M.pointerId){U=0;return}Math.hypot(M.clientX-nt.x,M.clientY-nt.y)>5&&(nt.moved=!0),nt.moved&&(y=null,nn(),Xt(-(M.clientX-nt.lastX)*.0042),o-=(M.clientY-nt.lastY)*.0032,o=Math.max(-.8,Math.min(.7,o)),p=!0,U=0),nt.lastX=M.clientX,nt.lastY=M.clientY}),_i.addEventListener("pointerup",M=>{!nt||nt.id!==M.pointerId||(nt.moved||(le.set(M.clientX/window.innerWidth*2-1,-M.clientY/window.innerHeight*2+1),Zn(qi(le))),nt=null)});let cn=M=>{nt?.id===M.pointerId&&(nt=null)};_i.addEventListener("pointercancel",cn),_i.addEventListener("lostpointercapture",cn),window.addEventListener("keydown",M=>{document.querySelector("dialog[open]")||!window.GroceryInput.gameKey(M)||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(M.code)&&(M.preventDefault(),L.add(M.code),y=null,nn()),(M.code==="KeyE"||M.code==="Enter"&&document.activeElement===_i)&&(M.preventDefault(),Zn(T)))}),window.addEventListener("keyup",M=>L.delete(M.code));let zn,Ht=()=>{L.clear(),zn?.release(),nt=null};window.addEventListener("grocery:releasecontrols",Ht),window.addEventListener("blur",Ht),document.addEventListener("visibilitychange",()=>{Ht(),document.hidden||(I=performance.now(),p=!0)}),_i.addEventListener("webglcontextrestored",()=>{Vt.shadowMap.needsUpdate=!0,p=!0}),zn=Mf({buttons:document.querySelectorAll("[data-walk]"),held:L,onPress:()=>{y=null,nn()},onTap:M=>{if(M==="ArrowLeft")Xt(.18);else if(M==="ArrowRight")Xt(-.18);else{let D=M==="KeyW"?1:M==="KeyS"?-1:0,$=M==="KeyD"?1:M==="KeyA"?-1:0;Ft((-Math.sin(a)*D+Math.cos(a)*$)*.38,(-Math.cos(a)*D-Math.sin(a)*$)*.38)}p=!0,U=0}}),Wt("nearby-toggle").addEventListener("click",()=>{w(!x),U=0,p=!0}),Wt("nearby-products").addEventListener("click",M=>{let R=M.target.closest("[data-world-lot]");R&&m.has(R.dataset.worldLot)&&Zn({lotId:R.dataset.worldLot})}),Wt("interact-button").addEventListener("click",()=>{te?F(!1):ze()&&T?.doorId===void 0&&!T?.station&&!T?.waste?F(!0):Zn(T)}),Wt("map-button").addEventListener("click",()=>requestAnimationFrame(Va)),document.querySelectorAll("[data-destination]").forEach(M=>M.addEventListener("click",()=>{let R=M.dataset.destination;document.querySelectorAll("dialog[open]").forEach(D=>{(D.id==="map-dialog"||D.id==="packing-dialog")&&D.close()}),Rt(R)})),window.addEventListener("grocery:inventory",()=>{ct(),Os(),Te(),gt(),A=""}),window.addEventListener("grocery:cart",()=>{St(),Te()}),window.addEventListener("grocery:texturepreview",()=>{p=!0}),window.addEventListener("grocery:transport",()=>{Te(),gt()}),window.addEventListener("grocery:navigation-hints",Os),window.addEventListener("resize",()=>{Ht(),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),Vt.setSize(window.innerWidth,window.innerHeight),Z(),Te(),p=!0}),window.ShopWorld={navigate:Rt,atStation:()=>S},i("stock",50),await e(),Object.keys(window.GroceryBagAssets||{}).forEach(k),ct(),i("cold",80),await e(),Os(),Te(),ri(),i("bags",95);let on=new P;function $n(M){let R=Math.min(.04,(M-I)/1e3);I=M;let D=!!document.querySelector("dialog[open]")||document.hidden||!document.body.classList.contains("game-started");if(D&&Ht(),!D){let re=(L.has("KeyW")||L.has("ArrowUp")?1:0)-(L.has("KeyS")||L.has("ArrowDown")?1:0),fe=(L.has("KeyD")?1:0)-(L.has("KeyA")?1:0);if(L.has("ArrowLeft")&&Xt(R*1.55),L.has("ArrowRight")&&Xt(-R*1.55),re||fe){let pe=Math.hypot(re,fe);re/=pe,fe/=pe,Ft((-Math.sin(a)*re+Math.cos(a)*fe)*R*2.65,(-Math.cos(a)*re-Math.sin(a)*fe)*R*2.65),Y+=R*10}else if(y){let pe=y.path[y.index];if(pe){let Q=pe[0]-r.position.x,ue=pe[1]-r.position.z,_e=Math.hypot(Q,ue);if(_e<.12)y.index++,ce.children.forEach(ke=>{ke.visible=ke.userData.pathIndex>=y.index});else{let ke=Math.min(_e,R*3.6);xi(Number.isFinite(pe[2])?pe[2]:Math.atan2(-Q,-ue),R),Ft(Q/_e*ke,ue/_e*ke),o+=((y.pitch??l())-o)*Math.min(1,R*4),Y+=R*10}}else xi(y.yaw,R),p=!0,Math.abs(Math.atan2(Math.sin(y.yaw-a),Math.cos(y.yaw-a)))<.025&&(y=null,nn())}r.position.y=1.64+((re||fe||y)&&!q.matches?Math.sin(Y)*.014:0),r.rotation.set(o,a,0,"YXZ"),Z(),(p||U===0)&&(H=!0),H&&M-U>170&&(ri(),U=M,H=!1)}let $=te?1:0,W=q.matches?$:Ri.damp(me,$,12,R);if(Math.abs(W-me)>5e-4&&(me=Math.abs(W-$)<.001?$:W,Z(),p=!0),!D)for(let re of f)re.tick(R,q.matches)&&(p=!0,H=!0);r.getWorldDirection(on),jt.tick(R,on.z>.12,D,q.matches)&&(p=!0),p&&!document.hidden&&(Vt.render(t,r),p=!1,Ar||(Ar=!0,i("ready",100),window.dispatchEvent(new CustomEvent("grocery:worldready",{detail:{failed:qn}})))),requestAnimationFrame($n)}requestAnimationFrame($n)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
