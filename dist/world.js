(()=>{var _u=0,Nc=1,xu=2;var Ts=1,yu=2,mr=3,Ei=0,An=1,jt=2,As=0,gr=1,Uc=2,Fc=3,Oc=4,vu=5;var Rs=100,Mu=101,Su=102,bu=103,Eu=104,wu=200,Tu=201,Au=202,Ru=203,Bc=204,zc=205,Cu=206,Iu=207,Pu=208,Du=209,Lu=210,Nu=211,Uu=212,Fu=213,Ou=214,_o=0,xo=1,yo=2,er=3,vo=4,Mo=5,So=6,bo=7,$o=0,Bu=1,zu=2,wi=0,Hc=1,kc=2,Gc=3,Sa=4,Vc=5,Wc=6,Xc=7;var qc=300,Cs=301,_r=302,Jo=303,Ko=304,tr=1e3,xi=1001,Eo=1002,bn=1003,Hu=1004;var ba=1005;var Un=1006,Qo=1007;var ki=1008;var kn=1009,Yc=1010,Zc=1011,xr=1012,jo=1013,di=1014,Kn=1015,fi=1016,el=1017,tl=1018,Is=1020,$c=35902,Jc=35899,Kc=1021,Qc=1022,pi=1023,Oi=1026,Gi=1027,nl=1028,il=1029,rs=1030,sl=1031;var rl=1033,Ea=33776,wa=33777,Ta=33778,Aa=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37488,pl=37489,Ra=37490,ml=37491,gl=37808,_l=37809,xl=37810,yl=37811,vl=37812,Ml=37813,Sl=37814,bl=37815,El=37816,wl=37817,Tl=37818,Al=37819,Rl=37820,Cl=37821,Il=36492,Pl=36494,Dl=36495,Ll=36283,Nl=36284,Ca=36285,Ul=36286;var Gr=2300,wo=2301,mo=2302,Sc=2303,bc=2400,Ec=2401,wc=2402;var ku=3200;var Ia=0,Gu=1,Qn="",Yt="srgb",Vr="srgb-linear",Wr="linear",Bt="srgb";var go=7680;var Vu=519,Wu=512,Xu=513,qu=514,jc=515,Yu=516,Zu=517,eh=518,th=519,$u=35044;var nh="300 es",$n=2e3,nr=2001;function Mf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){let i=Xr("canvas");return i.style.display="block",i}var Uh={},ir=null;function ih(...i){let e="THREE."+i.shift();ir?ir("log",e,...i):console.log(e,...i)}function Ku(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function at(...i){i=Ku(i);let e="THREE."+i.shift();if(ir)ir("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function ht(...i){i=Ku(i);let e="THREE."+i.shift();if(ir)ir("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _s(...i){let e=i.join(" ");e in Uh||(Uh[e]=!0,at(...i))}function Qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ju={[_o]:_o,[yo]:So,[vo]:vo,[er]:Mo,[xo]:xo,[So]:yo,[bo]:bo,[Mo]:er},vi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fh=1234567,Br=Math.PI/180,sr=180/Math.PI;function Ps(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[n&255]+In[n>>8&255]+In[n>>16&255]+In[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function sh(i,e){return(i%e+e)%e}function bf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ef(i,e,t){return i!==e?(t-i)/(e-i):0}function zr(i,e,t){return(1-t)*i+t*e}function wf(i,e,t,n){return zr(i,e,1-Math.exp(-t*n))}function Tf(i,e=1){return e-Math.abs(sh(i,e*2)-e)}function Af(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Rf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Cf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function If(i,e){return i+Math.random()*(e-i)}function Pf(i){return i*(.5-Math.random())}function Df(i){i!==void 0&&(Fh=i);let e=Fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Lf(i){return i*Br}function Nf(i){return i*sr}function Uf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ff(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function rh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Of(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ah(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ed(i,e){if(e.constructor===Float32Array)return i;let t=ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function td(i,e){if(e.constructor===Float32Array)return i;let t=ah(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ti={DEG2RAD:Br,RAD2DEG:sr,generateUUID:Ps,clamp:vt,euclideanModulo:sh,mapLinear:bf,inverseLerp:Ef,lerp:zr,damp:wf,pingpong:Tf,smoothstep:Af,smootherstep:Rf,randInt:Cf,randFloat:If,randFloatSpread:Pf,seededRandom:Df,degToRad:Lf,radToDeg:Nf,isPowerOfTwo:Uf,ceilPowerOfTwo:Ff,floorPowerOfTwo:rh,setQuaternionFromProperEuler:Of,normalize:td,denormalize:ed},ve=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Mi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(h!==y||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*y;m<0&&(d=-d,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let x=Math.acos(m),b=Math.sin(x);p=Math.sin(p*x)/b,o=Math.sin(o*x)/b,l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+y*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+y*o;let x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Oh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ql.copy(this).projectOnVector(e),this.sub(Ql)}reflect(e){return this.sub(Ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ql=new P,Oh=new Mi,ft=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],x=s[1],b=s[4],v=s[7],A=s[2],R=s[5],_=s[8];return r[0]=a*y+o*x+l*A,r[3]=a*m+o*b+l*R,r[6]=a*p+o*v+l*_,r[1]=c*y+u*x+h*A,r[4]=c*m+u*b+h*R,r[7]=c*p+u*v+h*_,r[2]=d*y+f*x+g*A,r[5]=d*m+f*b+g*R,r[8]=d*p+f*v+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jl.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jl.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jl=new ft,Bh=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bf(){let i={enabled:!0,workingColorSpace:Vr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Bt&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Bt&&(s.r=js(s.r),s.g=js(s.g),s.b=js(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qn?Wr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Vr]:{primaries:e,whitePoint:n,transfer:Wr,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:e,whitePoint:n,transfer:Bt,toXYZ:Bh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),i}var Tt=Bf();function Fi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function js(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zs,To=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{zs===void 0&&(zs=Xr("canvas")),zs.width=e.width,zs.height=e.height;let s=zs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=zs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Fi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Fi(t[n]/255)*255):t[n]=Fi(t[n]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},zf=0,rr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:zf++}),this.uuid=Ps(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ec(s[a].image)):r.push(ec(s[a]))}else r=ec(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ec(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?To.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}var Hf=0,tc=new P,pn=class i extends vi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=xi,s=xi,r=Un,a=ki,o=pi,l=kn,c=i.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=Ps(),this.name="",this.source=new rr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(tc).x}get height(){return this.source.getSize(tc).y}get depth(){return this.source.getSize(tc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tr:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tr:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=qc;pn.DEFAULT_ANISOTROPY=1;var en=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,v=(f+1)/2,A=(p+1)/2,R=(u+d)/4,_=(h+y)/4,w=(g+m)/4;return b>v&&b>A?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=R/n,r=_/n):v>A?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=R/s,r=w/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=w/r),this.set(n,s,r,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ao=class extends vi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new pn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Un,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new rr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fn=class extends Ao{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},qr=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ro=class extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Nt=class i{static{this.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Hs.setFromMatrixColumn(e,0).length(),r=1/Hs.setFromMatrixColumn(e,1).length(),a=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kf,e,Gf)}lookAt(e,t,n){let s=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Zi.crossVectors(n,Gn),Zi.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Zi.crossVectors(n,Gn)),Zi.normalize(),Va.crossVectors(Gn,Zi),s[0]=Zi.x,s[4]=Va.x,s[8]=Gn.x,s[1]=Zi.y,s[5]=Va.y,s[9]=Gn.y,s[2]=Zi.z,s[6]=Va.z,s[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],x=n[3],b=n[7],v=n[11],A=n[15],R=s[0],_=s[4],w=s[8],O=s[12],I=s[1],U=s[5],H=s[9],Z=s[13],D=s[2],q=s[6],K=s[10],X=s[14],re=s[3],J=s[7],le=s[11],he=s[15];return r[0]=a*R+o*I+l*D+c*re,r[4]=a*_+o*U+l*q+c*J,r[8]=a*w+o*H+l*K+c*le,r[12]=a*O+o*Z+l*X+c*he,r[1]=u*R+h*I+d*D+f*re,r[5]=u*_+h*U+d*q+f*J,r[9]=u*w+h*H+d*K+f*le,r[13]=u*O+h*Z+d*X+f*he,r[2]=g*R+y*I+m*D+p*re,r[6]=g*_+y*U+m*q+p*J,r[10]=g*w+y*H+m*K+p*le,r[14]=g*O+y*Z+m*X+p*he,r[3]=x*R+b*I+v*D+A*re,r[7]=x*_+b*U+v*q+A*J,r[11]=x*w+b*H+v*K+A*le,r[15]=x*O+b*Z+v*X+A*he,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15],x=l*f-c*d,b=o*f-c*h,v=o*d-l*h,A=a*f-c*u,R=a*d-l*u,_=a*h-o*u;return t*(y*x-m*b+p*v)-n*(g*x-m*A+p*R)+s*(g*b-y*A+p*_)-r*(g*v-y*R+m*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],x=t*o-n*a,b=t*l-s*a,v=t*c-r*a,A=n*l-s*o,R=n*c-r*o,_=s*c-r*l,w=u*y-h*g,O=u*m-d*g,I=u*p-f*g,U=h*m-d*y,H=h*p-f*y,Z=d*p-f*m,D=x*Z-b*H+v*U+A*I-R*O+_*w;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/D;return e[0]=(o*Z-l*H+c*U)*q,e[1]=(s*H-n*Z-r*U)*q,e[2]=(y*_-m*R+p*A)*q,e[3]=(d*R-h*_-f*A)*q,e[4]=(l*I-a*Z-c*O)*q,e[5]=(t*Z-s*I+r*O)*q,e[6]=(m*v-g*_-p*b)*q,e[7]=(u*_-d*v+f*b)*q,e[8]=(a*H-o*I+c*w)*q,e[9]=(n*I-t*H-r*w)*q,e[10]=(g*R-y*v+p*x)*q,e[11]=(h*v-u*R-f*x)*q,e[12]=(o*O-a*U-l*w)*q,e[13]=(t*U-n*O+s*w)*q,e[14]=(y*b-g*A-m*x)*q,e[15]=(u*A-h*b+d*x)*q,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,y=a*u,m=a*h,p=o*h,x=l*c,b=l*u,v=l*h,A=n.x,R=n.y,_=n.z;return s[0]=(1-(y+p))*A,s[1]=(f+v)*A,s[2]=(g-b)*A,s[3]=0,s[4]=(f-v)*R,s[5]=(1-(d+p))*R,s[6]=(m+x)*R,s[7]=0,s[8]=(g+b)*_,s[9]=(m-x)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Hs.set(s[0],s[1],s[2]).length(),o=Hs.set(s[4],s[5],s[6]).length(),l=Hs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ai.copy(this);let c=1/a,u=1/o,h=1/l;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=$n,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===$n)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===nr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=$n,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===$n)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===nr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Hs=new P,ai=new Nt,kf=new P(0,0,0),Gf=new P(1,1,1),Zi=new P,Va=new P,Gn=new P,Hh=new Nt,kh=new Mi,Si=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kh.setFromEuler(this),this.setFromQuaternion(kh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Si.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vf=0,Gh=new P,ks=new Mi,Pi=new Nt,Wa=new P,Ir=new P,Wf=new P,Xf=new Mi,Vh=new P(1,0,0),Wh=new P(0,1,0),Xh=new P(0,0,1),qh={type:"added"},qf={type:"removed"},Gs={type:"childadded",child:null},nc={type:"childremoved",child:null},Ht=class i extends vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=Ps(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new P,t=new Si,n=new Mi,s=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Nt},normalMatrix:{value:new ft}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Vh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Gh.copy(e).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Wa.copy(e):Wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(Ir,Wa,this.up):Pi.lookAt(Wa,Ir,this.up),this.quaternion.setFromRotationMatrix(Pi),s&&(Pi.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(Pi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ht("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):ht("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qf),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Wf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Xf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ht.DEFAULT_UP=new P(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var st=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yf={type:"move"},or=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new st,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new st,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new st,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new st;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},Xa={h:0,s:0,l:0};function ic(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ct=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Tt.workingColorSpace){if(e=sh(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ic(a,r,e+1/3),this.g=ic(a,r,e),this.b=ic(a,r,e-1/3)}return Tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let n=nd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Tt.workingToColorSpace(Pn.copy(this),e),Math.round(vt(Pn.r*255,0,255))*65536+Math.round(vt(Pn.g*255,0,255))*256+Math.round(vt(Pn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Pn.copy(this),t);let n=Pn.r,s=Pn.g,r=Pn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=Yt){Tt.workingToColorSpace(Pn.copy(this),e);let t=Pn.r,n=Pn.g,s=Pn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(Xa);let n=zr($i.h,Xa.h,t),s=zr($i.s,Xa.s,t),r=zr($i.l,Xa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pn=new ct;ct.NAMES=nd;var Yr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ct(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var xs=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},oi=new P,Di=new P,sc=new P,Li=new P,Vs=new P,Ws=new P,Yh=new P,rc=new P,ac=new P,oc=new P,lc=new en,cc=new en,hc=new en,ji=class i{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){oi.subVectors(s,t),Di.subVectors(n,t),sc.subVectors(e,t);let a=oi.dot(oi),o=oi.dot(Di),l=oi.dot(sc),c=Di.dot(Di),u=Di.dot(sc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Li)===null?!1:Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Li.x),l.addScaledVector(a,Li.y),l.addScaledVector(o,Li.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return lc.setScalar(0),cc.setScalar(0),hc.setScalar(0),lc.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),hc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(lc,r.x),a.addScaledVector(cc,r.y),a.addScaledVector(hc,r.z),a}static isFrontFacing(e,t,n,s){return oi.subVectors(n,t),Di.subVectors(e,t),oi.cross(Di).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),oi.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vs.subVectors(s,n),Ws.subVectors(r,n),rc.subVectors(e,n);let l=Vs.dot(rc),c=Ws.dot(rc);if(l<=0&&c<=0)return t.copy(n);ac.subVectors(e,s);let u=Vs.dot(ac),h=Ws.dot(ac);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),t.copy(n).addScaledVector(Vs,a);oc.subVectors(e,r);let f=Vs.dot(oc),g=Ws.dot(oc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ws,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Yh.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(Yh,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(Vs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ln=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qa.copy(n.boundingBox)),qa.applyMatrix4(e.matrixWorld),this.union(qa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ya.subVectors(this.max,Pr),Xs.subVectors(e.a,Pr),qs.subVectors(e.b,Pr),Ys.subVectors(e.c,Pr),Ji.subVectors(qs,Xs),Ki.subVectors(Ys,qs),fs.subVectors(Xs,Ys);let t=[0,-Ji.z,Ji.y,0,-Ki.z,Ki.y,0,-fs.z,fs.y,Ji.z,0,-Ji.x,Ki.z,0,-Ki.x,fs.z,0,-fs.x,-Ji.y,Ji.x,0,-Ki.y,Ki.x,0,-fs.y,fs.x,0];return!uc(t,Xs,qs,Ys,Ya)||(t=[1,0,0,0,1,0,0,0,1],!uc(t,Xs,qs,Ys,Ya))?!1:(Za.crossVectors(Ji,Ki),t=[Za.x,Za.y,Za.z],uc(t,Xs,qs,Ys,Ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ni=[new P,new P,new P,new P,new P,new P,new P,new P],li=new P,qa=new Ln,Xs=new P,qs=new P,Ys=new P,Ji=new P,Ki=new P,fs=new P,Pr=new P,Ya=new P,Za=new P,ps=new P;function uc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ps.fromArray(i,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var hn=new P,$a=new ve,Zf=0,hi=class extends vi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=Kn,this.version=0,this._normalizationScale=e!==void 0?ah(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):ed(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):td(e,this.array)}};var Zr=class extends hi{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends hi{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var gt=class extends hi{constructor(e,t,n){super(new Float32Array(e),t,n)}},$f=new Ln,Dr=new P,dc=new P,Bi=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):$f.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);let t=Dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add(dc)),this.expandByPoint(Dr.copy(e.center).sub(dc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jf=0,Zn=new Nt,fc=new Ht,Zs=new P,Vn=new Ln,Lr=new Ln,Sn=new P,tn=class i extends vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Ps(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?$r:Zr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ft().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,n){return Zn.makeTranslation(e,t,n),this.applyMatrix4(Zn),this}scale(e,t,n){return Zn.makeScale(e,t,n),this.applyMatrix4(Zn),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ht('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ht("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Sn.addVectors(Vn.min,Lr.min),Vn.expandByPoint(Sn),Sn.addVectors(Vn.max,Lr.max),Vn.expandByPoint(Sn)):(Vn.expandByPoint(Lr.min),Vn.expandByPoint(Lr.max))}Vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Sn.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),Sn.add(Zs)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ht('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ht("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new hi(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let O=0;O<n.count;O++)o[O]=new P,l[O]=new P;let u=new P,h=new P,d=new P,f=new ve,g=new ve,y=new ve,m=new P,p=new P;function x(O,I,U){c[O]=c[I]=c[U]=1,u.fromBufferAttribute(n,O),h.fromBufferAttribute(n,I),d.fromBufferAttribute(n,U),f.fromBufferAttribute(r,O),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,U),h.sub(u),d.sub(u),g.sub(f),y.sub(f);let H=1/(g.x*y.y-y.x*g.y);isFinite(H)&&(m.copy(h).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(H),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-y.x).multiplyScalar(H),o[O].add(m),o[I].add(m),o[U].add(m),l[O].add(p),l[I].add(p),l[U].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let O=0,I=b.length;O<I;++O){let U=b[O],H=U.start,Z=U.count;for(let D=H,q=H+Z;D<q;D+=3)x(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let v=new P,A=new P,R=new P,_=new P;function w(O){R.fromBufferAttribute(s,O),_.copy(R);let I=o[O];v.copy(I),v.sub(R.multiplyScalar(R.dot(I))).normalize(),A.crossVectors(_,I);let H=A.dot(l[O])<0?-1:1;a.setXYZW(O,v.x,v.y,v.z,H)}for(let O=0,I=n.count;O<I;++O)c[O]&&w(O);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new P,r=new P,a=new P,o=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new hi(d,u,h)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pc=new P,Kf=new P,Qf=new ft,ci=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pc.subVectors(n,t).cross(Kf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(pc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Qf.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},jf=0,bi=class extends vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Ps(),this.name="",this.type="Material",this.blending=gr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bc,this.blendDst=zc,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new ci().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ve().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ve().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Ui=new P,mc=new P,Ja=new P,Ka=new P,es=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){mc.copy(e).add(t).multiplyScalar(.5),Ja.copy(t).sub(e).normalize(),Ka.copy(this.origin).sub(mc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ja),o=Ka.dot(this.direction),l=-Ka.dot(Ja),c=Ka.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(mc).addScaledVector(Ja,d),f}intersectSphere(e,t){if(e.radius<0)return null;Ui.subVectors(e.center,this.origin);let n=Ui.dot(this.direction),s=Ui.dot(Ui)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,y=t.y-a.y,m=t.z-a.z,p=n.x-a.x,x=n.y-a.y,b=n.z-a.z,v=Math.abs(l),A=Math.abs(c),R=Math.abs(u),_,w,O,I,U,H,Z,D,q,K,X,re;if(v>=A&&v>=R?(O=l,H=h,q=g,re=p,l>=0?(_=c,w=u,I=d,U=f,Z=y,D=m,K=x,X=b):(_=u,w=c,I=f,U=d,Z=m,D=y,K=b,X=x)):A>=R?(O=c,H=d,q=y,re=x,c>=0?(_=u,w=l,I=f,U=h,Z=m,D=g,K=b,X=p):(_=l,w=u,I=h,U=f,Z=g,D=m,K=p,X=b)):(O=u,H=f,q=m,re=b,u>=0?(_=l,w=c,I=h,U=d,Z=g,D=y,K=p,X=x):(_=c,w=l,I=d,U=h,Z=y,D=g,K=x,X=p)),O===0)return null;let J=_/O,le=w/O,he=1/O,Pe=I-J*H,Ze=U-le*H,z=Z-J*q,ie=D-le*q,me=K-J*re,ke=X-le*re,Se=me*ie-ke*z,xe=Pe*ke-Ze*me,fe=z*Ze-ie*Pe;if(s){if(Se<0||xe<0||fe<0)return null}else if((Se<0||xe<0||fe<0)&&(Se>0||xe>0||fe>0))return null;let $e=Se+xe+fe;if($e===0)return null;let lt=he*(Se*H+xe*q+fe*re);return($e>0?lt<0:lt>0)?null:this.at(lt/$e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zh=new Nt,ms=new es,Qa=new Bi,$h=new P,ja=new P,eo=new P,to=new P,gc=new P,no=new P,Jh=new P,io=new P,We=class extends Ht{constructor(e=new tn,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(gc.fromBufferAttribute(h,e),a?no.addScaledVector(gc,u):no.addScaledVector(gc.sub(t),u))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(Qa.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Qa,$h)===null||ms.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=b;v<A;v+=3){let R=o.getX(v),_=o.getX(v+1),w=o.getX(v+2);s=so(this,p,e,n,c,u,h,R,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=so(this,a,e,n,c,u,h,x,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),b=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,A=b;v<A;v+=3){let R=v,_=v+1,w=v+2;s=so(this,p,e,n,c,u,h,R,_,w),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let x=m,b=m+1,v=m+2;s=so(this,a,e,n,c,u,h,x,b,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ep(i,e,t,n,s,r,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ei,o),l===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,ja),i.getVertexPosition(l,eo),i.getVertexPosition(c,to);let u=ep(i,e,t,n,ja,eo,to,Jh);if(u){let h=new P;ji.getBarycoord(Jh,ja,eo,to,h),s&&(u.uv=ji.getInterpolatedAttribute(s,o,l,c,h,new ve)),r&&(u.uv1=ji.getInterpolatedAttribute(r,o,l,c,h,new ve)),a&&(u.normal=ji.getInterpolatedAttribute(a,o,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new P,materialIndex:0};ji.getNormal(ja,eo,to,d.normal),u.face=d,u.barycoord=h}return u}var Jr=class extends pn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=bn,u=bn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kr=class extends hi{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},$s=new Nt,Kh=new Nt,ro=[],Qh=new Ln,tp=new Nt,Nr=new We,Ur=new Bi,On=class extends We{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Kr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,tp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Qh.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(Qh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Ur.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Ur)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Nr.geometry=this.geometry,Nr.material=this.material,Nr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ur.copy(this.boundingSphere),Ur.applyMatrix4(n),e.ray.intersectsSphere(Ur)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$s),Kh.multiplyMatrices(n,$s),Nr.matrixWorld=Kh,Nr.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){let l=ro[a];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Kr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jr(new Float32Array(s*this.count),s,this.count,nl,Kn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gs=new Bi,np=new ve(.5,.5),ao=new P,ts=class{constructor(e=new ci,t=new ci,n=new ci,s=new ci,r=new ci,a=new ci){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$n,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],x=r[12],b=r[13],v=r[14],A=r[15];if(s[0].setComponents(c-a,f-u,p-g,A-x).normalize(),s[1].setComponents(c+a,f+u,p+g,A+x).normalize(),s[2].setComponents(c+o,f+h,p+y,A+b).normalize(),s[3].setComponents(c-o,f-h,p-y,A-b).normalize(),n)s[4].setComponents(l,d,m,v).normalize(),s[5].setComponents(c-l,f-d,p-m,A-v).normalize();else if(s[4].setComponents(c-l,f-d,p-m,A-v).normalize(),t===$n)s[5].setComponents(c+l,f+d,p+m,A+v).normalize();else if(t===nr)s[5].setComponents(l,d,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=np.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},jh=new Nt,Co=class i{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];jh.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ts),n[s].setFromProjectionMatrix(jh,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new ts),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var lr=class extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ct(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Io=new P,Po=new P,eu=new Nt,Fr=new es,oo=new Bi,_c=new P,tu=new P,Qr=class extends Ht{constructor(e=new tn,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Io.fromBufferAttribute(t,s-1),Po.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Io.distanceTo(Po);e.setAttribute("lineDistance",new gt(n,1))}else at("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;eu.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(eu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=u.getX(y),x=u.getX(y+1),b=lo(this,e,Fr,l,p,x,y);b&&t.push(b)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=lo(this,e,Fr,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=lo(this,e,Fr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=lo(this,e,Fr,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Io.fromBufferAttribute(o,s),Po.fromBufferAttribute(o,r),t.distanceSqToSegment(Io,Po,_c,tu)>n)return;_c.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(_c);if(!(c<e.near||c>e.far))return{distance:c,point:tu.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var jr=class extends pn{constructor(e=[],t=Cs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hn=class extends pn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zi=class extends pn{constructor(e,t,n=di,s,r,a,o=bn,l=bn,c,u=Oi,h=1){if(u!==Oi&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new rr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ea=class extends zi{constructor(e,t=di,n=Cs,s,r,a=bn,o=bn,l,c=Oi){let u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ta=class extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},un=class i extends tn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2));function g(y,m,p,x,b,v,A,R,_,w,O){let I=v/_,U=A/w,H=v/2,Z=A/2,D=R/2,q=_+1,K=w+1,X=0,re=0,J=new P;for(let le=0;le<K;le++){let he=le*U-Z;for(let Pe=0;Pe<q;Pe++){let Ze=Pe*I-H;J[y]=Ze*x,J[m]=he*b,J[p]=D,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[p]=R>0?1:-1,u.push(J.x,J.y,J.z),h.push(Pe/_),h.push(1-le/w),X+=1}}for(let le=0;le<w;le++)for(let he=0;he<_;he++){let Pe=d+he+q*le,Ze=d+he+q*(le+1),z=d+(he+1)+q*(le+1),ie=d+(he+1)+q*le;l.push(Pe,Ze,ie),l.push(Ze,z,ie),re+=6}o.addGroup(f,re,O),f+=re,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},na=class i extends tn{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,g=n*2+r,y=s+1,m=new P,p=new P;for(let x=0;x<=g;x++){let b=0,v=0,A=0,R=0;if(x<=n){let O=x/n,I=O*Math.PI/2;v=-u-e*Math.cos(I),A=e*Math.sin(I),R=-e*Math.cos(I),b=O*h}else if(x<=n+r){let O=(x-n)/r;v=-u+O*t,A=e,R=0,b=h+O*d}else{let O=(x-n-r)/n,I=O*Math.PI/2;v=u+e*Math.sin(I),A=e*Math.cos(I),R=e*Math.sin(I),b=h+d+O*h}let _=Math.max(0,Math.min(1,b/f)),w=0;x===0?w=.5/s:x===g&&(w=-.5/s);for(let O=0;O<=s;O++){let I=O/s,U=I*Math.PI*2,H=Math.sin(U),Z=Math.cos(U);p.x=-A*Z,p.y=v,p.z=A*H,o.push(p.x,p.y,p.z),m.set(-A*Z,R,A*H),m.normalize(),l.push(m.x,m.y,m.z),c.push(I+w,_)}if(x>0){let O=(x-1)*y;for(let I=0;I<s;I++){let U=O+I,H=O+I+1,Z=x*y+I,D=x*y+I+1;a.push(U,H,Z),a.push(H,D,Z)}}}this.setIndex(a),this.setAttribute("position",new gt(o,3)),this.setAttribute("normal",new gt(l,3)),this.setAttribute("uv",new gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var Bn=class i extends tn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,y=[],m=n/2,p=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function x(){let v=new P,A=new P,R=0,_=(t-e)/n;for(let w=0;w<=r;w++){let O=[],I=w/r,U=I*(t-e)+e;for(let H=0;H<=s;H++){let Z=H/s,D=Z*l+o,q=Math.sin(D),K=Math.cos(D);A.x=U*q,A.y=-I*n+m,A.z=U*K,h.push(A.x,A.y,A.z),v.set(q,_,K).normalize(),d.push(v.x,v.y,v.z),f.push(Z,1-I),O.push(g++)}y.push(O)}for(let w=0;w<s;w++)for(let O=0;O<r;O++){let I=y[O][w],U=y[O+1][w],H=y[O+1][w+1],Z=y[O][w+1];(e>0||O!==0)&&(u.push(I,U,Z),R+=3),(t>0||O!==r-1)&&(u.push(U,H,Z),R+=3)}c.addGroup(p,R,0),p+=R}function b(v){let A=g,R=new ve,_=new P,w=0,O=v===!0?e:t,I=v===!0?1:-1;for(let H=1;H<=s;H++)h.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;let U=g;for(let H=0;H<=s;H++){let D=H/s*l+o,q=Math.cos(D),K=Math.sin(D);_.x=O*K,_.y=m*I,_.z=O*q,h.push(_.x,_.y,_.z),d.push(0,I,0),R.x=q*.5+.5,R.y=K*.5*I+.5,f.push(R.x,R.y),g++}for(let H=0;H<s;H++){let Z=A+H,D=U+H;v===!0?u.push(D,D+1,Z):u.push(D+1,D,Z),w+=3}c.addGroup(p,w,v===!0?1:2),p+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ve:new P);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,s=[],r=[],a=[],o=new P,l=new Nt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(vt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(vt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},cr=class extends Wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Do=class extends cr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function oh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var nu=new P,iu=new P,xc=new oh,yc=new oh,vc=new oh,hr=class extends Wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new P){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(iu.subVectors(s[0],s[1]).add(s[0]),c=iu);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(nu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=nu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),xc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,y,m),yc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,y,m),vc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(xc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),yc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),vc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(xc.calc(l),yc.calc(l),vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new P().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function su(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ip(i,e){let t=1-i;return t*t*e}function sp(i,e){return 2*(1-i)*i*e}function rp(i,e){return i*i*e}function Hr(i,e,t,n){return ip(i,e)+sp(i,t)+rp(i,n)}function ap(i,e){let t=1-i;return t*t*t*e}function op(i,e){let t=1-i;return 3*t*t*i*e}function lp(i,e){return 3*(1-i)*i*i*e}function cp(i,e){return i*i*i*e}function kr(i,e,t,n,s){return ap(i,e)+op(i,t)+lp(i,n)+cp(i,s)}var ia=class extends Wn{constructor(e=new ve,t=new ve,n=new ve,s=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Hi=class extends Wn{constructor(e=new P,t=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(kr(e,s.x,r.x,a.x,o.x),kr(e,s.y,r.y,a.y,o.y),kr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends Wn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ur=class extends Wn{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends Wn{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ys=class extends Wn{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Hr(e,s.x,r.x,a.x),Hr(e,s.y,r.y,a.y),Hr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(su(o,l.x,c.x,u.x,h.x),su(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ve().fromArray(s))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:Do,CatmullRomCurve3:hr,CubicBezierCurve:ia,CubicBezierCurve3:Hi,EllipseCurve:cr,LineCurve:sa,LineCurve3:ur,QuadraticBezierCurve:ra,QuadraticBezierCurve3:ys,SplineCurve:aa}),No=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Lo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},oa=class extends No{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new sa(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new ra(this.currentPoint.clone(),new ve(e,t),new ve(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new ia(this.currentPoint.clone(),new ve(e,t),new ve(n,s),new ve(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new aa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new cr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ui=class extends oa{constructor(e){super(e),this.uuid=Ps(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new oa().fromJSON(s))}return this}};function hp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=id(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=mp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,h=l;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>h&&(h=g)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return la(r,a,t,o,l,c,0),a}function id(i,e,t,n,s){let r;if(s===Tp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=ru(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=ru(a/n|0,i[a],i[a+1],r);return r&&dr(r,r.next)&&(ha(r),r=r.next),r}function vs(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(dr(t,t.next)||sn(t.prev,t,t.next)===0)){if(ha(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function la(i,e,t,n,s,r,a){if(!i)return;!a&&r&&vp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?dp(i,n,s,r):up(i)){e.push(l.i,i.i,c.i),ha(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=fp(vs(i),e),la(i,e,t,n,s,r,2)):a===2&&pp(i,e,t,n,s,r):la(vs(i),e,t,n,s,r,1);break}}}function up(i){let e=i.prev,t=i,n=i.next;if(sn(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=d&&g.y>=h&&g.y<=f&&Or(s,o,r,l,a,c,g.x,g.y)&&sn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function dp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(sn(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(u,h,d),y=Math.max(o,l,c),m=Math.max(u,h,d),p=Tc(f,g,e,t,n),x=Tc(y,m,e,t,n),b=i.prevZ,v=i.nextZ;for(;b&&b.z>=p&&v&&v.z<=x;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Or(o,u,l,h,c,d,b.x,b.y)&&sn(b.prev,b,b.next)>=0||(b=b.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Or(o,u,l,h,c,d,v.x,v.y)&&sn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;b&&b.z>=p;){if(b.x>=f&&b.x<=y&&b.y>=g&&b.y<=m&&b!==s&&b!==a&&Or(o,u,l,h,c,d,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;v&&v.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&Or(o,u,l,h,c,d,v.x,v.y)&&sn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function fp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!dr(n,s)&&rd(n,t,t.next,s)&&ca(n,s)&&ca(s,n)&&(e.push(n.i,t.i,s.i),ha(t),ha(t.next),t=i=s),t=t.next}while(t!==i);return vs(t)}function pp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&bp(a,o)){let l=ad(a,o);a=vs(a,a.next),l=vs(l,l.next),la(a,e,t,n,s,r,0),la(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function mp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=id(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Sp(c))}s.sort(gp);for(let r=0;r<s.length;r++)t=_p(s[r],t);return t}function gp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function _p(i,e){let t=xp(i,e);if(!t)return e;let n=ad(t,i);return vs(n,n.next),vs(t,t.next)}function xp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(dr(i,t))return t;do{if(dr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&sd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);ca(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&yp(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function yp(i,e){return sn(i.prev,i,e.prev)<0&&sn(e.next,i,i.next)<0}function vp(i,e,t,n){let s=i;do s.z===0&&(s.z=Tc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mp(s)}function Mp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Tc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Sp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function sd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Or(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&sd(i,e,t,n,s,r,a,o)}function bp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Ep(i,e)&&(ca(i,e)&&ca(e,i)&&wp(i,e)&&(sn(i.prev,i,e.prev)||sn(i,e.prev,e))||dr(i,e)&&sn(i.prev,i,i.next)>0&&sn(e.prev,e,e.next)>0)}function sn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function dr(i,e){return i.x===e.x&&i.y===e.y}function rd(i,e,t,n){let s=ho(sn(i,e,t)),r=ho(sn(i,e,n)),a=ho(sn(t,n,i)),o=ho(sn(t,n,e));return!!(s!==r&&a!==o||s===0&&co(i,t,e)||r===0&&co(i,n,e)||a===0&&co(t,i,n)||o===0&&co(t,e,n))}function co(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function ho(i){return i>0?1:i<0?-1:0}function Ep(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&rd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ca(i,e){return sn(i.prev,i,i.next)<0?sn(i,e,i.next)>=0&&sn(i,i.prev,e)>=0:sn(i,e,i.prev)<0||sn(i,i.next,e)<0}function wp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function ad(i,e){let t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function ru(i,e,t,n){let s=Ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ha(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Tp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Rc=class{static triangulate(e,t,n=2){return hp(e,t,n)}},yi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];au(e),ou(n,e);let a=e.length;t.forEach(au);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,ou(n,t[l]);let o=Rc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function au(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function ou(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ms=class i extends tn{constructor(e=new ui([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new gt(s,3)),this.setAttribute("uv",new gt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,x=t.UVGenerator!==void 0?t.UVGenerator:Ap,b,v=!1,A,R,_,w;if(p){b=p.getSpacedPoints(u),v=!0,d=!1;let ae=p.isCatmullRomCurve3?p.closed:!1;A=p.computeFrenetFrames(u,ae),R=new P,_=new P,w=new P}d||(m=0,f=0,g=0,y=0);let O=o.extractPoints(c),I=O.shape,U=O.holes;if(!yi.isClockWise(I)){I=I.reverse();for(let ae=0,Ae=U.length;ae<Ae;ae++){let be=U[ae];yi.isClockWise(be)&&(U[ae]=be.reverse())}}function Z(ae){let be=10000000000000001e-36,Be=ae[0];for(let Ie=1;Ie<=ae.length;Ie++){let je=Ie%ae.length,Je=ae[je],ut=Je.x-Be.x,St=Je.y-Be.y,wt=ut*ut+St*St,B=Math.max(Math.abs(Je.x),Math.abs(Je.y),Math.abs(Be.x),Math.abs(Be.y)),Kt=be*B*B;if(wt<=Kt){ae.splice(je,1),Ie--;continue}Be=Je}}Z(I),U.forEach(Z);let D=U.length,q=I;for(let ae=0;ae<D;ae++){let Ae=U[ae];I=I.concat(Ae)}function K(ae,Ae,be){return Ae||ht("ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(Ae,be)}let X=I.length;function re(ae,Ae,be){let Be,Ie,je,Je=ae.x-Ae.x,ut=ae.y-Ae.y,St=be.x-ae.x,wt=be.y-ae.y,B=Je*Je+ut*ut,Kt=Je*wt-ut*St;if(Math.abs(Kt)>Number.EPSILON){let _t=Math.sqrt(B),Ft=Math.sqrt(St*St+wt*wt),Le=Ae.x-ut/_t,Wt=Ae.y+Je/_t,tt=be.x-wt/Ft,Ke=be.y+St/Ft,C=((tt-Le)*wt-(Ke-Wt)*St)/(Je*wt-ut*St);Be=Le+Je*C-ae.x,Ie=Wt+ut*C-ae.y;let S=Be*Be+Ie*Ie;if(S<=2)return new ve(Be,Ie);je=Math.sqrt(S/2)}else{let _t=!1;Je>Number.EPSILON?St>Number.EPSILON&&(_t=!0):Je<-Number.EPSILON?St<-Number.EPSILON&&(_t=!0):Math.sign(ut)===Math.sign(wt)&&(_t=!0),_t?(Be=-ut,Ie=Je,je=Math.sqrt(B)):(Be=Je,Ie=ut,je=Math.sqrt(B/2))}return new ve(Be/je,Ie/je)}let J=[];for(let ae=0,Ae=q.length,be=Ae-1,Be=ae+1;ae<Ae;ae++,be++,Be++)be===Ae&&(be=0),Be===Ae&&(Be=0),J[ae]=re(q[ae],q[be],q[Be]);let le=[],he,Pe=J.concat();for(let ae=0,Ae=D;ae<Ae;ae++){let be=U[ae];he=[];for(let Be=0,Ie=be.length,je=Ie-1,Je=Be+1;Be<Ie;Be++,je++,Je++)je===Ie&&(je=0),Je===Ie&&(Je=0),he[Be]=re(be[Be],be[je],be[Je]);le.push(he),Pe=Pe.concat(he)}let Ze;if(m===0)Ze=yi.triangulateShape(q,U);else{let ae=[],Ae=[];for(let be=0;be<m;be++){let Be=be/m,Ie=f*Math.cos(Be*Math.PI/2),je=g*Math.sin(Be*Math.PI/2)+y;for(let Je=0,ut=q.length;Je<ut;Je++){let St=K(q[Je],J[Je],je);xe(St.x,St.y,-Ie),Be===0&&ae.push(St)}for(let Je=0,ut=D;Je<ut;Je++){let St=U[Je];he=le[Je];let wt=[];for(let B=0,Kt=St.length;B<Kt;B++){let _t=K(St[B],he[B],je);xe(_t.x,_t.y,-Ie),Be===0&&wt.push(_t)}Be===0&&Ae.push(wt)}}Ze=yi.triangulateShape(ae,Ae)}let z=Ze.length,ie=g+y;for(let ae=0;ae<X;ae++){let Ae=d?K(I[ae],Pe[ae],ie):I[ae];v?(_.copy(A.normals[0]).multiplyScalar(Ae.x),R.copy(A.binormals[0]).multiplyScalar(Ae.y),w.copy(b[0]).add(_).add(R),xe(w.x,w.y,w.z)):xe(Ae.x,Ae.y,0)}for(let ae=1;ae<=u;ae++)for(let Ae=0;Ae<X;Ae++){let be=d?K(I[Ae],Pe[Ae],ie):I[Ae];v?(_.copy(A.normals[ae]).multiplyScalar(be.x),R.copy(A.binormals[ae]).multiplyScalar(be.y),w.copy(b[ae]).add(_).add(R),xe(w.x,w.y,w.z)):xe(be.x,be.y,h/u*ae)}for(let ae=m-1;ae>=0;ae--){let Ae=ae/m,be=f*Math.cos(Ae*Math.PI/2),Be=g*Math.sin(Ae*Math.PI/2)+y;for(let Ie=0,je=q.length;Ie<je;Ie++){let Je=K(q[Ie],J[Ie],Be);xe(Je.x,Je.y,h+be)}for(let Ie=0,je=U.length;Ie<je;Ie++){let Je=U[Ie];he=le[Ie];for(let ut=0,St=Je.length;ut<St;ut++){let wt=K(Je[ut],he[ut],Be);v?xe(wt.x,wt.y+b[u-1].y,b[u-1].x+be):xe(wt.x,wt.y,h+be)}}}me(),ke();function me(){let ae=s.length/3;if(d){let Ae=0,be=X*Ae;for(let Be=0;Be<z;Be++){let Ie=Ze[Be];fe(Ie[2]+be,Ie[1]+be,Ie[0]+be)}Ae=u+m*2,be=X*Ae;for(let Be=0;Be<z;Be++){let Ie=Ze[Be];fe(Ie[0]+be,Ie[1]+be,Ie[2]+be)}}else{for(let Ae=0;Ae<z;Ae++){let be=Ze[Ae];fe(be[2],be[1],be[0])}for(let Ae=0;Ae<z;Ae++){let be=Ze[Ae];fe(be[0]+X*u,be[1]+X*u,be[2]+X*u)}}n.addGroup(ae,s.length/3-ae,0)}function ke(){let ae=s.length/3,Ae=0;Se(q,Ae),Ae+=q.length;for(let be=0,Be=U.length;be<Be;be++){let Ie=U[be];Se(Ie,Ae),Ae+=Ie.length}n.addGroup(ae,s.length/3-ae,1)}function Se(ae,Ae){let be=ae.length;for(;--be>=0;){let Be=be,Ie=be-1;Ie<0&&(Ie=ae.length-1);for(let je=0,Je=u+m*2;je<Je;je++){let ut=X*je,St=X*(je+1),wt=Ae+Be+ut,B=Ae+Ie+ut,Kt=Ae+Ie+St,_t=Ae+Be+St;$e(wt,B,Kt,_t)}}}function xe(ae,Ae,be){l.push(ae),l.push(Ae),l.push(be)}function fe(ae,Ae,be){lt(ae),lt(Ae),lt(be);let Be=s.length/3,Ie=x.generateTopUV(n,s,Be-3,Be-2,Be-1);yt(Ie[0]),yt(Ie[1]),yt(Ie[2])}function $e(ae,Ae,be,Be){lt(ae),lt(Ae),lt(Be),lt(Ae),lt(be),lt(Be);let Ie=s.length/3,je=x.generateSideWallUV(n,s,Ie-6,Ie-3,Ie-2,Ie-1);yt(je[0]),yt(je[1]),yt(je[3]),yt(je[1]),yt(je[2]),yt(je[3])}function lt(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function yt(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Lo[s.type]().fromJSON(s)),new i(n,e.options)}},Ap={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ve(r,a),new ve(o,l),new ve(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-h),new ve(d,1-g),new ve(y,1-p)]:[new ve(o,1-l),new ve(u,1-h),new ve(f,1-g),new ve(m,1-p)]}};function Rp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ua=class i extends tn{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=vt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,h=new P,d=new ve,f=new P,g=new P,y=new P,m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:y.normalize(),l.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=t;x++){let b=n+x*u*s,v=Math.sin(b),A=Math.cos(b);for(let R=0;R<=e.length-1;R++){h.x=e[R].x*v,h.y=e[R].y,h.z=e[R].x*A,a.push(h.x,h.y,h.z),d.x=x/t,d.y=R/(e.length-1),o.push(d.x,d.y);let _=l[3*R+0]*v,w=l[3*R+1],O=l[3*R+0]*A;c.push(_,w,O)}}for(let x=0;x<t;x++)for(let b=0;b<e.length-1;b++){let v=b+x*e.length,A=v,R=v+e.length,_=v+e.length+1,w=v+1;r.push(A,R,w),r.push(_,w,R)}this.setIndex(r),this.setAttribute("position",new gt(a,3)),this.setAttribute("uv",new gt(o,2)),this.setAttribute("normal",new gt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ut=class i extends tn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let x=p*d-a;for(let b=0;b<c;b++){let v=b*h-r;g.push(v,-x,0),y.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){let b=x+c*p,v=x+c*(p+1),A=x+1+c*(p+1),R=x+1+c*p;f.push(b,v,R),f.push(v,A,R)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var da=class i extends tn{constructor(e=new ui([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new gt(s,3)),this.setAttribute("normal",new gt(r,3)),this.setAttribute("uv",new gt(a,2));function c(u){let h=s.length/3,d=u.extractPoints(t),f=d.shape,g=d.holes;yi.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let x=g[m];yi.isClockWise(x)===!0&&(g[m]=x.reverse())}let y=yi.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let x=g[m];f=f.concat(x)}for(let m=0,p=f.length;m<p;m++){let x=f[m];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let m=0,p=y.length;m<p;m++){let x=y[m],b=x[0]+h,v=x[1]+h,A=x[2]+h;n.push(b,v,A),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Cp(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function Cp(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ss=class i extends tn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new P,d=new P,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let x=[],b=p/n,v=a+b*o,A=e*Math.cos(v),R=Math.sqrt(e*e-A*A),_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let w=0;w<=t;w++){let O=w/t,I=s+O*r;h.x=-R*Math.cos(I),h.y=A,h.z=R*Math.sin(I),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(O+_,1-b),x.push(c++)}u.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){let b=u[p][x+1],v=u[p][x],A=u[p+1][x],R=u[p+1][x+1];(p!==0||a>0)&&f.push(b,v,R),(p!==n-1||l<Math.PI)&&f.push(v,A,R)}this.setIndex(f),this.setAttribute("position",new gt(g,3)),this.setAttribute("normal",new gt(y,3)),this.setAttribute("uv",new gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var fr=class i extends tn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],h=[],d=new P,f=new P,g=new P;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let x=p/s*r;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(p/s),h.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,x=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,x,v),l.push(x,b,v)}this.setIndex(l),this.setAttribute("position",new gt(c,3)),this.setAttribute("normal",new gt(u,3)),this.setAttribute("uv",new gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var fa=class i extends tn{constructor(e=new ys(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,c=new ve,u=new P,h=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new gt(h,3)),this.setAttribute("normal",new gt(d,3)),this.setAttribute("uv",new gt(f,2));function y(){for(let b=0;b<t;b++)m(b);m(r===!1?t:0),x(),p()}function m(b){u=e.getPointAt(b/t,u);let v=a.normals[b],A=a.binormals[b];for(let R=0;R<=s;R++){let _=R/s*Math.PI*2,w=Math.sin(_),O=-Math.cos(_);l.x=O*v.x+w*A.x,l.y=O*v.y+w*A.y,l.z=O*v.z+w*A.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=t;b++)for(let v=1;v<=s;v++){let A=(s+1)*(b-1)+(v-1),R=(s+1)*b+(v-1),_=(s+1)*b+v,w=(s+1)*(b-1)+v;g.push(A,R,w),g.push(R,_,w)}}function x(){for(let b=0;b<=t;b++)for(let v=0;v<=s;v++)c.x=b/t,c.y=v/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Lo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(lu(s))s.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(lu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Nn(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function lu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ip(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function lh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}var od={clone:Ds,merge:Nn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Jn=class extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Ip(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ct().setHex(s.value);break;case"v2":this.uniforms[n].value=new ve().fromArray(s.value);break;case"v3":this.uniforms[n].value=new P().fromArray(s.value);break;case"v4":this.uniforms[n].value=new en().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ft().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Nt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Uo=class extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Et=class extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends Et{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return _s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){_s('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var pa=class extends bi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ia,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=$o,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fo=class extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ku,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Oo=class extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Js(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function uo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ns=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bo=class extends ns{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bc,endingEnd:bc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ec:r=e,o=2*t-n;break;case wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ec:a=e,l=2*n-t;break;case wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,x=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,b=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let A=0;A!==o;++A)r[A]=p*a[u+A]+x*a[c+A]+b*a[l+A]+v*a[h+A];return r}},zo=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Ho=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ko=class extends ns{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let g=(n-t)/(s-t),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*d+g*2,x=h[p],b=h[p+1],v=e*d+g*2,A=u[v],R=u[v+1],_=Np(n,t,x,A,s);r[g]=ld(_,y,b,R,m)}return r}};function ld(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Lp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Np(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ld(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Lp(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Xn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),uo(e.settings)&&(n.settings={inTangents:Js(e.settings.inTangents,Array),outTangents:Js(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ho(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ko(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Gr:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break;case Sc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return at("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;uo(this.settings)&&(cu(this.settings.inTangents,e),cu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;uo(this.settings)&&(hu(this.settings.inTangents,e),hu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ht("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ht("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ht("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ht("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Sf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ht("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,uo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function cu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function hu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Xn.prototype.ValueTypeName="";Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=wo;var is=class extends Xn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Gr;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Go=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Go.prototype.ValueTypeName="color";var Vo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Vo.prototype.ValueTypeName="number";var Wo=class extends ns{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)Mi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ma=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Wo(this.times,this.values,this.getValueSize(),e)}};ma.prototype.ValueTypeName="quaternion";ma.prototype.InterpolantFactoryMethodSmooth=void 0;var ss=class extends Xn{constructor(e,t,n){super(e,t,n)}};ss.prototype.ValueTypeName="string";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Gr;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Xo=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}};Xo.prototype.ValueTypeName="vector";var qo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new qo,Yo=class{constructor(e){this.manager=e!==void 0?e:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ga=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Mc=new Nt,uu=new P,du=new P,_a=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=kn,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;uu.setFromMatrixPosition(e.matrixWorld),t.position.copy(uu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Mc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Mc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===nr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},fo=new P,po=new Mi,_i=new P,xa=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(fo,po,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,_i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(fo,po,_i),_i.x===1&&_i.y===1&&_i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,_i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qi=new P,fu=new ve,pu=new ve,Dn=class extends xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z),Qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qi.x,Qi.y).multiplyScalar(-e/Qi.z)}getViewSize(e,t){return this.getViewBounds(e,fu,pu),t.subVectors(pu,fu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Cc=class extends _a{constructor(){super(new Dn(90,1,.5,500)),this.isPointLightShadow=!0}},Es=class extends bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},ws=class extends xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ic=class extends _a{constructor(){super(new ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ya=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Ic}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},va=class extends bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ks=-90,Qs=1,pr=class extends Ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Dn(Ks,Qs,e,t);s.layers=this.layers,this.add(s);let r=new Dn(Ks,Qs,e,t);r.layers=this.layers,this.add(r);let a=new Dn(Ks,Qs,e,t);a.layers=this.layers,this.add(a);let o=new Dn(Ks,Qs,e,t);o.layers=this.layers,this.add(o);let l=new Dn(Ks,Qs,e,t);l.layers=this.layers,this.add(l);let c=new Dn(Ks,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Zo=class extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ch="\\[\\]\\.:\\/",Up=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",Fp="[^"+ch.replace("\\.","")+"]",Op=/((?:WC+[\/:])*)/.source.replace("WC",hh),Bp=/(WCOD+)?/.source.replace("WCOD",Fp),zp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Hp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),kp=new RegExp("^"+Op+Bp+zp+Hp+"$"),Gp=["material","materials","bones","map"],Pc=class{constructor(e,t,n){let s=n||Qt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Qt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Up,"")}static parseTrackName(e){let t=kp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Gp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){at("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ht("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ht("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ht("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ht("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){ht("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){ht("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ht("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ht("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Qt.Composite=Pc;Qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qt.prototype.GetterByBindingType=[Qt.prototype._getValue_direct,Qt.prototype._getValue_array,Qt.prototype._getValue_arrayElement,Qt.prototype._getValue_toArray];Qt.prototype.SetterByBindingTypeAndVersioning=[[Qt.prototype._setValue_direct,Qt.prototype._setValue_direct_setNeedsUpdate,Qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_array,Qt.prototype._setValue_array_setNeedsUpdate,Qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_arrayElement,Qt.prototype._setValue_arrayElement_setNeedsUpdate,Qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qt.prototype._setValue_fromArray,Qt.prototype._setValue_fromArray_setNeedsUpdate,Qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Gx=new Float32Array(1);var mu=new Nt,Ma=class{constructor(e,t,n=0,s=1/0){this.ray=new es(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ar,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ht("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return mu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mu),this}intersectObject(e,t=!0,n=[]){return Dc(e,this,n,t),n.sort(gu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Dc(e[s],this,n,t);return n.sort(gu),n}};function gu(i,e){return i.distance-e.distance}function Dc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Dc(r[a],e,t,!0)}}var Lc=class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};function uh(i,e,t,n){let s=Vp(n);switch(t){case Kc:return i*e;case nl:return i*e/s.components*s.byteLength;case il:return i*e/s.components*s.byteLength;case rs:return i*e*2/s.components*s.byteLength;case sl:return i*e*2/s.components*s.byteLength;case Qc:return i*e*3/s.components*s.byteLength;case pi:return i*e*4/s.components*s.byteLength;case rl:return i*e*4/s.components*s.byteLength;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(i,16)*Math.max(e,8)/4;case al:case ll:return Math.max(i,8)*Math.max(e,8)/2;case hl:case ul:case fl:case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:case Ra:case ml:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _l:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case xl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Rl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Cl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Il:case Pl:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ll:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ca:case Ul:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vp(i){switch(i){case kn:case Yc:return{byteLength:1,components:1};case xr:case Zc:case fi:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case di:case jo:case Kn:return{byteLength:4,components:1};case $c:case Jc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Pd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Xp(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yp=`#ifdef USE_ALPHAHASH
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
#endif`,Zp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,jp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,em=`#ifdef USE_BATCHING
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
#endif`,tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
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
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,mm=`#define PI 3.141592653589793
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
} // validated`,gm=`vec3 transformedNormal = objectNormal;
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
#endif`,_m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Tm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Om=`#ifdef USE_ENVMAP
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
#endif`,Bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,km=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,Vm=`uniform sampler2D dfgLUT;
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
}`,Wm=`
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
#endif`,Xm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ym=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tg=`#if defined( USE_POINTS_UV )
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
#endif`,ng=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rg=`#if defined( USE_MORPHCOLORS )
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
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,og=`#ifdef USE_MORPHTARGETS
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
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,bg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ig=`float getShadowMask() {
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
}`,Pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Ug=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Og=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform float backgroundBlurriness;
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
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Qg=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,e0=`#define DISTANCE
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
}`,t0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,a0=`uniform vec3 diffuse;
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,d0=`#define NORMAL
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
}`,f0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,_0=`#define TOON
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
}`,x0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,v0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,S0=`uniform vec3 color;
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
}`,b0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:qp,alphahash_pars_fragment:Yp,alphamap_fragment:Zp,alphamap_pars_fragment:$p,alphatest_fragment:Jp,alphatest_pars_fragment:Kp,aomap_fragment:Qp,aomap_pars_fragment:jp,batching_pars_vertex:em,batching_vertex:tm,begin_vertex:nm,beginnormal_vertex:im,bsdfs:sm,iridescence_fragment:rm,bumpmap_pars_fragment:am,clipping_planes_fragment:om,clipping_planes_pars_fragment:lm,clipping_planes_pars_vertex:cm,clipping_planes_vertex:hm,color_fragment:um,color_pars_fragment:dm,color_pars_vertex:fm,color_vertex:pm,common:mm,defaultnormal_vertex:gm,displacementmap_pars_vertex:_m,displacementmap_vertex:xm,emissivemap_fragment:ym,emissivemap_pars_fragment:vm,colorspace_fragment:Mm,colorspace_pars_fragment:Sm,envmap_fragment:bm,envmap_common_pars_fragment:Em,envmap_pars_fragment:wm,envmap_pars_vertex:Tm,envmap_physical_pars_fragment:Om,envmap_vertex:Am,fog_vertex:Rm,fog_pars_vertex:Cm,fog_fragment:Im,fog_pars_fragment:Pm,gradientmap_pars_fragment:Dm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Um,lights_pars_begin:Fm,lights_toon_fragment:Bm,lights_toon_pars_fragment:zm,lights_phong_fragment:Hm,lights_phong_pars_fragment:km,lights_physical_fragment:Gm,lights_physical_pars_fragment:Vm,lights_fragment_begin:Wm,lights_fragment_maps:Xm,lights_fragment_end:qm,lightprobes_pars_fragment:Ym,logdepthbuf_fragment:Zm,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Jm,logdepthbuf_vertex:Km,map_fragment:Qm,map_pars_fragment:jm,map_particle_fragment:eg,map_particle_pars_fragment:tg,metalnessmap_fragment:ng,metalnessmap_pars_fragment:ig,morphinstance_vertex:sg,morphcolor_vertex:rg,morphnormal_vertex:ag,morphtarget_pars_vertex:og,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:hg,normal_pars_fragment:ug,normal_pars_vertex:dg,normal_vertex:fg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:vg,premultiplied_alpha_fragment:Mg,project_vertex:Sg,dithering_fragment:bg,dithering_pars_fragment:Eg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Tg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Rg,shadowmap_vertex:Cg,shadowmask_pars_fragment:Ig,skinbase_vertex:Pg,skinning_pars_vertex:Dg,skinning_vertex:Lg,skinnormal_vertex:Ng,specularmap_fragment:Ug,specularmap_pars_fragment:Fg,tonemapping_fragment:Og,tonemapping_pars_fragment:Bg,transmission_fragment:zg,transmission_pars_fragment:Hg,uv_pars_fragment:kg,uv_pars_vertex:Gg,uv_vertex:Vg,worldpos_vertex:Wg,background_vert:Xg,background_frag:qg,backgroundCube_vert:Yg,backgroundCube_frag:Zg,cube_vert:$g,cube_frag:Jg,depth_vert:Kg,depth_frag:Qg,distance_vert:jg,distance_frag:e0,equirect_vert:t0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:a0,meshlambert_vert:o0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:d0,meshphong_vert:f0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:_0,meshtoon_frag:x0,points_vert:y0,points_frag:v0,shadow_vert:M0,shadow_frag:S0,sprite_vert:b0,sprite_frag:E0},Oe={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ri={basic:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Nn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Nn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Nn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new ct(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Nn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Nn([Oe.points,Oe.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Nn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Nn([Oe.common,Oe.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Nn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Nn([Oe.sprite,Oe.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Nn([Oe.common,Oe.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Nn([Oe.lights,Oe.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ri.physical={uniforms:Nn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new ft},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Fl={r:0,b:0,g:0},w0=new Nt,Dd=new ft;Dd.set(-1,0,0,0,1,0,0,0,1);function T0(i,e,t,n,s,r){let a=new ct(0),o=s===!0?0:1,l,c,u=null,h=0,d=null;function f(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let v=x.backgroundBlurriness>0;b=e.get(b,v)}return b}function g(x){let b=!1,v=f(x);v===null?m(a,o):v&&v.isColor&&(m(v,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,b){let v=f(b);v&&v.isCubeTexture?(c===void 0&&(c=new We(new un(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Ds(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,R,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dd),c.material.toneMapped=Tt.getTransfer(v.colorSpace)!==Bt,(u!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new We(new Ut(2,2),new Jn({name:"BackgroundMaterial",uniforms:Ds(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Tt.getTransfer(v.colorSpace)!==Bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||h!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,h=v.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,b){x.getRGB(Fl,lh(i)),t.buffers.color.setClear(Fl.r,Fl.g,Fl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,m(a,o)},render:g,addToRenderList:y,dispose:p}}function A0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(U,H,Z,D,q){let K=!1,X=h(U,D,Z,H);r!==X&&(r=X,c(r.object)),K=f(U,D,Z,q),K&&g(U,D,Z,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(U,H,Z,D),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function c(U){return i.bindVertexArray(U)}function u(U){return i.deleteVertexArray(U)}function h(U,H,Z,D){let q=D.wireframe===!0,K=n[H.id];K===void 0&&(K={},n[H.id]=K);let X=U.isInstancedMesh===!0?U.id:0,re=K[X];re===void 0&&(re={},K[X]=re);let J=re[Z.id];J===void 0&&(J={},re[Z.id]=J);let le=J[q];return le===void 0&&(le=d(l()),J[q]=le),le}function d(U){let H=[],Z=[],D=[];for(let q=0;q<t;q++)H[q]=0,Z[q]=0,D[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Z,attributeDivisors:D,object:U,attributes:{},index:null}}function f(U,H,Z,D){let q=r.attributes,K=H.attributes,X=0,re=Z.getAttributes();for(let J in re)if(re[J].location>=0){let he=q[J],Pe=K[J];if(Pe===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(Pe=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(Pe=U.instanceColor)),he===void 0||he.attribute!==Pe||Pe&&he.data!==Pe.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(U,H,Z,D){let q={},K=H.attributes,X=0,re=Z.getAttributes();for(let J in re)if(re[J].location>=0){let he=K[J];he===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(he=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(he=U.instanceColor));let Pe={};Pe.attribute=he,he&&he.data&&(Pe.data=he.data),q[J]=Pe,X++}r.attributes=q,r.attributesNum=X,r.index=D}function y(){let U=r.newAttributes;for(let H=0,Z=U.length;H<Z;H++)U[H]=0}function m(U){p(U,0)}function p(U,H){let Z=r.newAttributes,D=r.enabledAttributes,q=r.attributeDivisors;Z[U]=1,D[U]===0&&(i.enableVertexAttribArray(U),D[U]=1),q[U]!==H&&(i.vertexAttribDivisor(U,H),q[U]=H)}function x(){let U=r.newAttributes,H=r.enabledAttributes;for(let Z=0,D=H.length;Z<D;Z++)H[Z]!==U[Z]&&(i.disableVertexAttribArray(Z),H[Z]=0)}function b(U,H,Z,D,q,K,X){X===!0?i.vertexAttribIPointer(U,H,Z,q,K):i.vertexAttribPointer(U,H,Z,D,q,K)}function v(U,H,Z,D){y();let q=D.attributes,K=Z.getAttributes(),X=H.defaultAttributeValues;for(let re in K){let J=K[re];if(J.location>=0){let le=q[re];if(le===void 0&&(re==="instanceMatrix"&&U.instanceMatrix&&(le=U.instanceMatrix),re==="instanceColor"&&U.instanceColor&&(le=U.instanceColor)),le!==void 0){let he=le.normalized,Pe=le.itemSize,Ze=e.get(le);if(Ze===void 0)continue;let z=Ze.buffer,ie=Ze.type,me=Ze.bytesPerElement,ke=ie===i.INT||ie===i.UNSIGNED_INT||le.gpuType===jo;if(le.isInterleavedBufferAttribute){let Se=le.data,xe=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,fe=le.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let $e=0;$e<J.locationSize;$e++)p(J.location+$e,Se.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let $e=0;$e<J.locationSize;$e++)m(J.location+$e);i.bindBuffer(i.ARRAY_BUFFER,z);for(let $e=0;$e<J.locationSize;$e++)b(J.location+$e,Pe/J.locationSize,ie,he,xe*me,(fe+Pe/J.locationSize*$e)*me,ke)}else{if(le.isInstancedBufferAttribute){for(let Se=0;Se<J.locationSize;Se++)p(J.location+Se,le.meshPerAttribute);U.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Se=0;Se<J.locationSize;Se++)m(J.location+Se);i.bindBuffer(i.ARRAY_BUFFER,z);for(let Se=0;Se<J.locationSize;Se++)b(J.location+Se,Pe/J.locationSize,ie,he,Pe*me,Pe/J.locationSize*Se*me,ke)}}else if(X!==void 0){let he=X[re];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(J.location,he);break;case 3:i.vertexAttrib3fv(J.location,he);break;case 4:i.vertexAttrib4fv(J.location,he);break;default:i.vertexAttrib1fv(J.location,he)}}}}x()}function A(){O();for(let U in n){let H=n[U];for(let Z in H){let D=H[Z];for(let q in D){let K=D[q];for(let X in K)u(K[X].object),delete K[X];delete D[q]}}delete n[U]}}function R(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let Z in H){let D=H[Z];for(let q in D){let K=D[q];for(let X in K)u(K[X].object),delete K[X];delete D[q]}}delete n[U.id]}function _(U){for(let H in n){let Z=n[H];for(let D in Z){let q=Z[D];if(q[U.id]===void 0)continue;let K=q[U.id];for(let X in K)u(K[X].object),delete K[X];delete q[U.id]}}}function w(U){for(let H in n){let Z=n[H],D=U.isInstancedMesh===!0?U.id:0,q=Z[D];if(q!==void 0){for(let K in q){let X=q[K];for(let re in X)u(X[re].object),delete X[re];delete q[K]}delete Z[D],Object.keys(Z).length===0&&delete n[H]}}}function O(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:O,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfObject:w,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:m,disableUnusedAttributes:x}}function R0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function C0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==pi&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let w=_===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==kn&&_!==Kn&&!w&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(at("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&h===!1;t.reversedDepthBuffer===!0&&h===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&h===!0&&at("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),R=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:v,maxSamples:A,samples:R}}function I0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new ci,o=new ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let x=r?0:n,b=x*4,v=p.clippingState||null;l.value=v,v=u(g,d,b,f);for(let A=0;A!==b;++A)v[A]=t[A];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=f;b!==y;++b,v+=4)a.copy(h[b]).applyMatrix4(x,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var La=class extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new jr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new un(5,5,5),r=new Jn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:As});r.uniforms.tEquirect.value=t;let a=new We(s,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Un),new pr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},hd=256,P0=3,D0=20,Ld=256,Nd=16,L0=3,N0=new P,U0=new ct,vr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new pr(1,10,null),this._boxMesh=new We(new un(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=N0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),u=this._getSourceTarget(!0);t>0&&(u.texture.mipmapsAutoUpdate=!1);let h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(U0));let m=new pr(n,s,u);return m.position.copy(o),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=y,t>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(hd,rh(e))}_fromTexture(e,t){e.mapping===Cs||e.mapping===_r?this._setSize(e.image.length===0?hd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=ud(e,!1,!1),n=Math.log2(e)-P0;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=ud(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Cs||e.mapping===_r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=dd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=F0(),this._integrationMaterial=O0());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Nd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-L0)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Ld*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=B0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function ud(i,e,t){return new La(i,{minFilter:ki,generateMipmaps:e,type:fi,colorSpace:Vr,depthBuffer:t})}function Na(i,e,t){return new Jn({name:i,uniforms:e,vertexShader:Mt.cube_vert,fragmentShader:t,side:An,blending:As,depthTest:!1,depthWrite:!1})}function F0(){return Na("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Ld}u

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
	`)}function O0(){return Na("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Nd}},`

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
	`)}function B0(){return Na("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${D0}
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
	`)}function dd(){return Na("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function fd(){return Na("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function z0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Jo||f===Ko)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new La(g.height);return y.fromEquirectangularTexture(i,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===Jo||f===Ko,y=f===Cs||f===_r;if(g||y){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new vr(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||y&&x&&l(x)?(n===null&&(n=new vr(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===Jo?d.mapping=Cs:f===Ko&&(d.mapping=_r),d}function l(d){let f=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&f++;return f===g}function c(d){let f=d.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function H0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_s("WebGLRenderer: "+n+" extension not supported."),s}}}function k0(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function u(g){let y=g.attributes;for(let m in y)e.update(y[m],i.ARRAY_BUFFER)}function h(g){let y=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let x=y!==null?y.array.length:m.array.length/3-1,b=m.count>=65535?$r:Zr,v=new b(Math.ceil(x/3)*6,1),A=v.array;if(y!==null){let _=y.array;p=y.version;for(let w=0,O=0;w<x;w+=3){let I=_[w+0],U=_[w+1],H=_[w+2];A[O++]=I,A[O++]=U,A[O++]=U,A[O++]=H,A[O++]=H,A[O++]=I}}else{p=m.version;for(let _=0,w=0;_<x;_+=3){let O=_+0,I=_+1,U=_+2;A[w++]=O,A[w++]=I,A[w++]=I,A[w++]=U,A[w++]=U,A[w++]=O}}v.version=p;let R=r.get(g);R&&e.remove(R),r.set(g,v)}function d(g){let y=r.get(g);if(y){let m=g.index;m!==null&&y.version<m.version&&h(g)}else h(g);return r.get(g)}function f(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function G0(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,d){i.drawElements(n,d,r,h*a),t.update(d,n,1)}function c(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),t.update(d,n,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let y=0;for(let m=0;m<f;m++)y+=d[m];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function V0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:ht("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function W0(i,e,t){let n=new WeakMap,s=new en;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let O=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",O)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;f===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let v=o.attributes.position.count*b,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let R=new Float32Array(v*A*4*h),_=new qr(R,v,A,h);_.type=Kn,_.needsUpdate=!0;let w=b*4;for(let I=0;I<h;I++){let U=m[I],H=p[I],Z=x[I],D=v*A*4*I;for(let q=0;q<U.count;q++){let K=q*w;f===!0&&(s.fromBufferAttribute(U,q),R[D+K+0]=s.x,R[D+K+1]=s.y,R[D+K+2]=s.z,R[D+K+3]=0),g===!0&&(s.fromBufferAttribute(H,q),R[D+K+4]=s.x,R[D+K+5]=s.y,R[D+K+6]=s.z,R[D+K+7]=0),y===!0&&(s.fromBufferAttribute(Z,q),R[D+K+8]=s.x,R[D+K+9]=s.y,R[D+K+10]=s.z,R[D+K+11]=Z.itemSize===4?s.w:1)}}d={count:h,texture:_,size:new ve(v,A)},n.set(o,d),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function X0(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,h=c.geometry,d=e.get(c,h);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var q0={[Hc]:"LINEAR_TONE_MAPPING",[kc]:"REINHARD_TONE_MAPPING",[Gc]:"CINEON_TONE_MAPPING",[Sa]:"ACES_FILMIC_TONE_MAPPING",[Wc]:"AGX_TONE_MAPPING",[Xc]:"NEUTRAL_TONE_MAPPING",[Vc]:"CUSTOM_TONE_MAPPING"};function Y0(i,e,t,n,s,r){let a=new Fn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,u=new tn;u.setAttribute("position",new gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new gt([0,2,0,0,2,0],2));let h=new Uo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new We(u,h),f=new ws(-1,1,1,-1,0,1),g=null,y=null,m=!1,p,x=null,b=[],v=!1;this.setSize=function(A,R){a.setSize(A,R),o!==null&&o.setSize(A,R),l!==null&&l.setSize(A,R);for(let _=0;_<b.length;_++){let w=b[_];w.setSize&&w.setSize(A,R)}},this.setEffects=function(A){b=A,v=b.length>0&&b[0].isRenderPass===!0;let R=a.width,_=a.height;b.length>0&&o===null&&(o=new Fn(R,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new Fn(R,_,{type:fi,depthBuffer:!1,stencilBuffer:!1}));let w=s===!0&&b.some(O=>O.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&c===null&&(c=new zi(R,_),r===!0&&(c.format=Gi,c.type=Is)),a.dispose(),a.depthTexture=w?c:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let O=0;O<b.length;O++){let I=b[O];I.setSize&&I.setSize(R,_),w&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,R){if(m||A.toneMapping===wi&&b.length===0)return!1;if(x=R,R!==null){let _=R.width,w=R.height;(a.width!==_||a.height!==w)&&this.setSize(_,w)}return v===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=wi,!0},this.hasRenderPass=function(){return v},this.end=function(A,R){A.toneMapping=p,m=!0;let _=a,w=o;for(let O=0;O<b.length;O++){let I=b[O];I.enabled!==!1&&(I.render(A,w,_,R),I.needsSwap!==!1&&(_=w,w=w===o?l:o))}if(g!==A.outputColorSpace||y!==A.toneMapping){g=A.outputColorSpace,y=A.toneMapping,h.defines={},Tt.getTransfer(g)===Bt&&(h.defines.SRGB_TRANSFER="");let O=q0[y];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(x),A.render(d,f),x=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}var Ud=new pn,Fd=new zi(1,1),Od=new ea(1),Bd=new qr,zd=new Ro,Hd=new jr,pd=[],md=[],gd=new Float32Array(16),_d=new Float32Array(9),xd=new Float32Array(4);function Mr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=pd[s];if(r===void 0&&(r=new Float32Array(s),pd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=md[e];t===void 0&&(t=new Int32Array(e),md[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Z0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function K0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;xd.set(n),i.uniformMatrix2fv(this.addr,!1,xd),gn(t,n)}}function j0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),gn(t,n)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),gn(t,n)}}function t_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function r_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function o_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Hl(i){return i.version===0&&(i.compareFunction=th,i.needsUpdate=!0),i}function c_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Hl(Fd):r=Ud,t.setTexture2D(e||r,s)}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||zd,s)}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Hl(Od):r=Hd,t.setTextureCube(e||r,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function f_(i){switch(i){case 5126:return Z0;case 35664:return $0;case 35665:return J0;case 35666:return K0;case 35674:return Q0;case 35675:return j0;case 35676:return e_;case 5124:case 35670:return t_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}function p_(i,e){i.uniform1fv(this.addr,e)}function m_(i,e){let t=Mr(e,this.size,2);i.uniform2fv(this.addr,t)}function g_(i,e){let t=Mr(e,this.size,3);i.uniform3fv(this.addr,t)}function __(i,e){let t=Mr(e,this.size,4);i.uniform4fv(this.addr,t)}function x_(i,e){let t=Mr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function y_(i,e){let t=Mr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function v_(i,e){let t=Mr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M_(i,e){i.uniform1iv(this.addr,e)}function S_(i,e){i.uniform2iv(this.addr,e)}function b_(i,e){i.uniform3iv(this.addr,e)}function E_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function T_(i,e){i.uniform2uiv(this.addr,e)}function A_(i,e){i.uniform3uiv(this.addr,e)}function R_(i,e){i.uniform4uiv(this.addr,e)}function C_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Hl(Fd):a=Ud;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function I_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||zd,r[a])}function P_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Hl(Od):a=Hd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function D_(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);mn(n,r)||(i.uniform1iv(this.addr,r),gn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Bd,r[a])}function L_(i){switch(i){case 5126:return p_;case 35664:return m_;case 35665:return g_;case 35666:return __;case 35674:return x_;case 35675:return y_;case 35676:return v_;case 5124:case 35670:return M_;case 35667:case 35671:return S_;case 35668:case 35672:return b_;case 35669:case 35673:return E_;case 5125:return w_;case 36294:return T_;case 36295:return A_;case 36296:return R_;case 35678:case 36198:case 36298:case 36306:case 35682:return C_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return P_;case 36289:case 36303:case 36311:case 36292:return D_}}var ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=f_(t.type)}},mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L_(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function yd(i,e){i.seq.push(e),i.map[e.id]=e}function N_(i,e,t){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){yd(t,c===void 0?new ph(o,i,e):new mh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new gh(o),yd(t,h)),t=h}}}var yr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);N_(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function vd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var U_=37297,F_=0;function O_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Md=new ft;function B_(i){Tt._getMatrix(Md,Tt.workingColorSpace,i);let e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case Wr:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+O_(i.getShaderSource(e),o)}else return r}function z_(i,e){let t=B_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var H_={[Hc]:"Linear",[kc]:"Reinhard",[Gc]:"Cineon",[Sa]:"ACESFilmic",[Wc]:"AgX",[Xc]:"Neutral",[Vc]:"Custom"};function k_(i,e){let t=H_[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new P;function G_(){Tt.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function V_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function W_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Da(i){return i!==""}function bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ed(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(q_,Y_)}function Y_(i,e){let t=Mt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _h(t)}var Z_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wd(i){return i.replace(Z_,$_)}function $_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var J_={[Ts]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function K_(i){return J_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Q_={[_r]:"ENVMAP_MODE_REFRACTION"};function j_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Q_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ex={[$o]:"ENVMAP_BLENDING_MULTIPLY",[Bu]:"ENVMAP_BLENDING_MIX",[zu]:"ENVMAP_BLENDING_ADD"};function tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":ex[i.combine]||"ENVMAP_BLENDING_NONE"}function nx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=K_(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=j_(t),h=tx(t),d=V_(t),f=W_(r),g=s.createProgram(),y,m,p=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Da).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(Da).join(`
`),m.length>0&&(m+=`
`)):(y=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==wi?k_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,z_("linearToOutputTexel",t.outputColorSpace),G_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=_h(a),a=bd(a,t),a=Ed(a,t),o=_h(o),o=bd(o,t),o=Ed(o,t),a=wd(a),o=wd(o),t.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=p+y+a,b=p+m+o,v=vd(s,s.VERTEX_SHADER,x),A=vd(s,s.FRAGMENT_SHADER,b);s.attachShader(g,v),s.attachShader(g,A),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function R(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(v)||"",Z=s.getShaderInfoLog(A)||"",D=U.trim(),q=H.trim(),K=Z.trim(),X=!0,re=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,v,A);else{let J=Sd(s,v,"vertex"),le=Sd(s,A,"fragment");ht("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+D+`
`+J+`
`+le)}else D!==""?at("WebGLProgram: Program Info Log:",D):(q===""||K==="")&&(re=!1);re&&(I.diagnostics={runnable:X,programLog:D,vertexShader:{log:q,prefix:y},fragmentShader:{log:K,prefix:m}})}s.deleteShader(v),s.deleteShader(A),_=new yr(s,g),w=X_(s,g)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(g,U_)),O},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=F_++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=A,this}var ix=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=ix++,this.code=e,this.usedTimes=0}};function sx(i){return i===rs||i===Ra||i===Ca}function rx(i,e,t,n,s,r){let a=new ar,o=new xh,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,w,O,I,U,H){let Z=I.fog,D=U.geometry,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||q,K),re=d[_.type],J=n.precision;_.precision!==null&&(J=n.getMaxPrecision(_.precision),J!==_.precision&&at("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));let le=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,he=le!==void 0?le.length:0,Pe=0;D.morphAttributes.position!==void 0&&(Pe=1),D.morphAttributes.normal!==void 0&&(Pe=2),D.morphAttributes.color!==void 0&&(Pe=3);let Ze,z,ie,me;if(re){let Fe=Ri[re];Ze=Fe.vertexShader,z=Fe.fragmentShader}else{Ze=_.vertexShader,z=_.fragmentShader;let Fe=o.getVertexShaderStage(_),Lt=o.getFragmentShaderStage(_);o.update(_,Fe,Lt),ie=Fe.id,me=Lt.id}let ke=i.getRenderTarget(),Se=i.state.buffers.depth.getReversed(),xe=U.isInstancedMesh===!0,fe=U.isBatchedMesh===!0,$e=!!_.map,lt=!!_.matcap,yt=!!X,ae=yt&&X.isPMREMTexture===!0,Ae=!!_.aoMap,be=!!_.lightMap,Be=!!_.bumpMap&&_.wireframe===!1,Ie=!!_.normalMap,je=!!_.displacementMap,Je=!!_.emissiveMap,ut=!!_.metalnessMap,St=!!_.roughnessMap,wt=_.anisotropy>0,B=_.clearcoat>0,Kt=_.diffuseRoughness>0,_t=_.dispersion>0,Ft=_.retroreflectivity>0,Le=_.iridescence>0,Wt=_.sheen>0,tt=_.transmission>0,Ke=wt&&!!_.anisotropyMap,C=B&&!!_.clearcoatMap,S=B&&!!_.clearcoatNormalMap,V=B&&!!_.clearcoatRoughnessMap,_e=Kt&&!!_.diffuseRoughnessMap,ce=Le&&!!_.iridescenceMap,Ee=Le&&!!_.iridescenceThicknessMap,De=Wt&&!!_.sheenColorMap,ee=Wt&&!!_.sheenRoughnessMap,se=!!_.specularMap,we=!!_.specularColorMap,N=!!_.specularIntensityMap,ne=tt&&!!_.transmissionMap,j=tt&&!!_.thicknessMap,Re=!!_.gradientMap,pe=!!_.alphaMap,Ce=_.alphaTest>0,Qe=!!_.alphaHash,mt=!!_.extensions,ye=wi;_.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(ye=i.toneMapping);let nt=ae?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,pt={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:Ze,fragmentShader:z,defines:_.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:fe,batchingColor:fe&&U._colorsTexture!==null,instancing:xe,instancingColor:xe&&U.instanceColor!==null,instancingMorph:xe&&U.morphTexture!==null,outputColorSpace:ke===null?i.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:lt,envMap:yt,envMapMode:yt&&X.mapping,envMapPMREM:ae,envMapMaxLod:ae?nt.length-1:null,envMapSize:ae?nt[0].width:null,aoMap:Ae,lightMap:be,bumpMap:Be,normalMap:Ie,displacementMap:je,emissiveMap:Je,normalMapObjectSpace:Ie&&_.normalMapType===Gu,normalMapTangentSpace:Ie&&_.normalMapType===Ia,packedNormalMap:Ie&&_.normalMapType===Ia&&sx(_.normalMap.format),metalnessMap:ut,roughnessMap:St,anisotropy:wt,anisotropyMap:Ke,clearcoat:B,clearcoatMap:C,clearcoatNormalMap:S,clearcoatRoughnessMap:V,diffuseRoughness:Kt,diffuseRoughnessMap:_e,dispersion:_t,retroreflection:Ft,iridescence:Le,iridescenceMap:ce,iridescenceThicknessMap:Ee,sheen:Wt,sheenColorMap:De,sheenRoughnessMap:ee,specularMap:se,specularColorMap:we,specularIntensityMap:N,transmission:tt,transmissionMap:ne,thicknessMap:j,gradientMap:Re,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:Ce,alphaHash:Qe,combine:_.combine,mapUv:$e&&f(_.map.channel),aoMapUv:Ae&&f(_.aoMap.channel),lightMapUv:be&&f(_.lightMap.channel),bumpMapUv:Be&&f(_.bumpMap.channel),normalMapUv:Ie&&f(_.normalMap.channel),displacementMapUv:je&&f(_.displacementMap.channel),emissiveMapUv:Je&&f(_.emissiveMap.channel),metalnessMapUv:ut&&f(_.metalnessMap.channel),roughnessMapUv:St&&f(_.roughnessMap.channel),anisotropyMapUv:Ke&&f(_.anisotropyMap.channel),clearcoatMapUv:C&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:S&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:ce&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:De&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:ee&&f(_.sheenRoughnessMap.channel),specularMapUv:se&&f(_.specularMap.channel),specularColorMapUv:we&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:ne&&f(_.transmissionMap.channel),thicknessMapUv:j&&f(_.thicknessMap.channel),alphaMapUv:pe&&f(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ie||wt),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!D.attributes.uv&&($e||pe),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&Ie===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Se,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:Pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:H.filter(Fe=>Fe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&Tt.getTransfer(_.map.colorSpace)===Bt,decodeVideoTextureEmissive:Je&&_.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(_.emissiveMap.colorSpace)===Bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===jt,flipSided:_.side===An,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:mt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&_.extensions.multiDraw===!0||fe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function y(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let O in _.defines)w.push(O),w.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(m(w,_),p(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function m(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapPMREM),_.push(w.envMapMaxLod),_.push(w.envMapSize),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.diffuseRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.numSunLights),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numSunLightShadows),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.numLightProbeGrids),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let w=d[_.type],O;if(w){let I=Ri[w];O=od.clone(I.uniforms)}else O=_.uniforms;return O}function b(_,w){let O=u.get(w);return O!==void 0?++O.usedTimes:(O=new nx(i,w,_,s),c.push(O),u.set(w,O)),O}function v(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:x,acquireProgram:b,releaseProgram:v,releaseShaderCache:A,programs:c,dispose:R}}function ax(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function ox(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ad(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,y,m,p){let x=i[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:m,group:p},i[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=g,x.materialVariant=a(d),x.groupOrder=y,x.renderOrder=d.renderOrder,x.z=m,x.group=p),e++,x}function l(d,f,g,y,m,p,x){x.reversedDepth===!0&&(m=-m);let b=o(d,f,g,y,m,p);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(d,f,g,y,m,p){let x=o(d,f,g,y,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||ox),n.length>1&&n.sort(f||Ad),s.length>1&&s.sort(f||Ad)}function h(){for(let d=e,f=i.length;d<f;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:h,sort:u}}function lx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Rd,i.set(n,[a])):s>=r.length?(a=new Rd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function cx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new P,color:new ct};break;case"SpotLight":t={position:new P,direction:new P,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":t={color:new ct,position:new P,halfWidth:new P,halfHeight:new P};break}return i[e.id]=t,t}}}function hx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var ux=0;function dx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function fx(i){let e=new cx,t=hx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let s=new P,r=new Nt,a=new Nt;function o(c){let u=0,h=0,d=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,x=0,b=0,v=0,A=0,R=0,_=0,w=0,O=0,I=0;c.sort(dx);for(let H=0,Z=c.length;H<Z;H++){let D=c[H],q=D.color,K=D.intensity,X=D.distance,re=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===rs?re=D.shadow.map.texture:re=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=q.r*K,h+=q.g*K,d+=q.b*K;else if(D.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(D.sh.coefficients[J],K);I++}else if(D.isSunLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let le=D.shadow,he=t.get(D);he.shadowIntensity=le.intensity,he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),n.sunShadow[g]=he,n.sunShadowMap[g]=re;let Pe=le.getViewportCount();for(let Ze=0;Ze<Pe;Ze++)n.sunShadowMatrix[y+Ze]=le.getMatrix(Ze),n.sunShadowCascade[y+Ze]=le._cascadeData[Ze];y+=Pe,g++}n.sun[f]=J,f++}else if(D.isDirectionalLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let le=D.shadow,he=t.get(D);he.shadowIntensity=le.intensity,he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,n.directionalShadow[m]=he,n.directionalShadowMap[m]=re,n.directionalShadowMatrix[m]=D.shadow.matrix,A++}n.directional[m]=J,m++}else if(D.isSpotLight){let J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(q).multiplyScalar(K),J.distance=X,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,n.spot[x]=J;let le=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,le.updateMatrices(D),D.castShadow&&O++),n.spotLightMatrix[x]=le.matrix,D.castShadow){let he=t.get(D);he.shadowIntensity=le.intensity,he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,n.spotShadow[x]=he,n.spotShadowMap[x]=re,_++}x++}else if(D.isRectAreaLight){let J=e.get(D);J.color.copy(q).multiplyScalar(K),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),n.rectArea[b]=J,b++}else if(D.isPointLight){let J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){let le=D.shadow,he=t.get(D);he.shadowIntensity=le.intensity,he.shadowBias=le.bias,he.shadowNormalBias=le.normalBias,he.shadowRadius=le.radius,he.shadowMapSize=le.mapSize,he.shadowCameraNear=le.camera.near,he.shadowCameraFar=le.camera.far,n.pointShadow[p]=he,n.pointShadowMap[p]=re,n.pointShadowMatrix[p]=D.shadow.matrix,R++}n.point[p]=J,p++}else if(D.isHemisphereLight){let J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(K),J.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[v]=J,v++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Oe.LTC_FLOAT_1,n.rectAreaLTC2=Oe.LTC_FLOAT_2):(n.rectAreaLTC1=Oe.LTC_HALF_1,n.rectAreaLTC2=Oe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.sunLength!==f||U.directionalLength!==m||U.pointLength!==p||U.spotLength!==x||U.rectAreaLength!==b||U.hemiLength!==v||U.numSunShadows!==g||U.numDirectionalShadows!==A||U.numPointShadows!==R||U.numSpotShadows!==_||U.numSpotMaps!==w||U.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=m,n.spot.length=x,n.rectArea.length=b,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=R,n.pointShadowMap.length=R,n.pointShadowMatrix.length=R,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+w-O,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=O,n.numLightProbes=I,U.sunLength=f,U.directionalLength=m,U.pointLength=p,U.spotLength=x,U.rectAreaLength=b,U.hemiLength=v,U.numSunShadows=g,U.numDirectionalShadows=A,U.numPointShadows=R,U.numSpotShadows=_,U.numSpotMaps=w,U.numLightProbes=I,n.version=ux++)}function l(c,u){let h=0,d=0,f=0,g=0,y=0,m=0,p=u.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){let v=c[x];if(v.isSunLight){let A=n.sun[h];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),h++}else if(v.isDirectionalLight){let A=n.directional[d];A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),d++}else if(v.isSpotLight){let A=n.spot[g];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let A=n.rectArea[y];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function Cd(i){let e=new fx(i),t=[],n=[],s=[];function r(h){u.camera=h,t.length=0,n.length=0,s.length=0}function a(h){h.isLightProbeGrid?s.push(h):t.push(h)}function o(h){n.push(h)}function l(){e.setup(t),s.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(t,h)}let u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function px(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Cd(i),e.set(s,[o])):r>=a.length?(o=new Cd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var mx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gx=`uniform sampler2D shadow_pass;
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
}`,_x=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],xx=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Id=new Nt,Pa=new P,fh=new P;function yx(i,e,t){let n=new ts,s=new ve,r=new ve,a=new en,o=new Fo,l=new Oo,c={},u=t.maxTextureSize,h={[Ei]:An,[An]:Ei,[jt]:jt},d=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:mx,fragmentShader:gx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new tn;g.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new We(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ts;let p=this.type;this.render=function(R,_,w){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===yu&&(at("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ts);let O=i.getRenderTarget(),I=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(As),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Z=p!==this.type;Z&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(q=>q.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,q=R.length;D<q;D++){let K=R[D],X=K.shadow;if(X===void 0){at("WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let re=X.getFrameExtents();s.multiply(re),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,X.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=J,X.map===null||Z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===mr){if(K.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Fn(s.x,s.y,{format:rs,type:fi,minFilter:Un,magFilter:Un,generateMipmaps:!1}),X.map.texture.name=K.name+".shadowMap",X.map.depthTexture=new zi(s.x,s.y,Kn),X.map.depthTexture.name=K.name+".shadowMapDepth",X.map.depthTexture.format=Oi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=bn,X.map.depthTexture.magFilter=bn}else K.isPointLight?(X.map=new La(s.x),X.map.depthTexture=new ea(s.x,di)):(X.map=new Fn(s.x,s.y),X.map.depthTexture=new zi(s.x,s.y,di)),X.map.depthTexture.name=K.name+".shadowMap",X.map.depthTexture.format=Oi,this.type===Ts?(X.map.depthTexture.compareFunction=J?eh:jc,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=bn,X.map.depthTexture.magFilter=bn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let le=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();K.isPointLight!==!0&&X.updateMatrices(K,w);let he=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:w.layers;for(let Pe=0;Pe<le;Pe++){let Ze=X.getCamera(Pe);if(K.isPointLight){let z=X.camera,ie=X.matrix,me=K.distance||z.far;me!==z.far&&(z.far=me,z.updateProjectionMatrix()),Pa.setFromMatrixPosition(K.matrixWorld),z.position.copy(Pa),fh.copy(z.position),fh.add(_x[Pe]),z.up.copy(xx[Pe]),z.lookAt(fh),z.updateMatrixWorld(),ie.makeTranslation(-Pa.x,-Pa.y,-Pa.z),Id.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Id,z.coordinateSystem,z.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,Pe),i.clear();else{Pe===0&&(i.setRenderTarget(X.map),i.clear());let z=X.getViewport(Pe);a.set(r.x*z.x,r.y*z.y,r.x*z.z,r.y*z.w),H.viewport(a)}n=X.getFrustum(Pe),v(_,w,Ze,K,he,this.type)}X.isPointLightShadow!==!0&&this.type===mr&&x(X,w),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(O,I,U)};function x(R,_){let w=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null?R.mapPass=new Fn(s.x,s.y,{format:rs,type:fi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),d.uniforms.shadow_pass.value=R.map.depthTexture,d.uniforms.resolution.value.set(R.map.width,R.map.height),d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(_,null,w,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(_,null,w,f,y,null)}function b(R,_,w,O){let I=null,U=w.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)I=U;else if(I=w.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=I.uuid,Z=_.uuid,D=c[H];D===void 0&&(D={},c[H]=D);let q=D[Z];q===void 0&&(q=I.clone(),D[Z]=q,_.addEventListener("dispose",A)),I=q}if(I.visible=_.visible,I.wireframe=_.wireframe,O===mr?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:h[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let H=i.properties.get(I);H.light=w}return I}function v(R,_,w,O,I,U){if(R.visible===!1)return;if(R.layers.test(I)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&U===mr)&&(!R.frustumCulled||R.intersectsFrustum(n))){R.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,R.matrixWorld);let D=e.update(R),q=R.material;if(Array.isArray(q)){let K=D.groups;for(let X=0,re=K.length;X<re;X++){let J=K[X],le=q[J.materialIndex];if(le&&le.visible){let he=b(R,le,O,U);R.onBeforeShadow(i,R,_,w,D,he,J),i.renderBufferDirect(w,null,D,he,R,J),R.onAfterShadow(i,R,_,w,D,he,J)}}}else if(q.visible){let K=b(R,q,O,U);R.onBeforeShadow(i,R,_,w,D,K,null),i.renderBufferDirect(w,null,D,K,R,null),R.onAfterShadow(i,R,_,w,D,K,null)}}let Z=R.children;for(let D=0,q=Z.length;D<q;D++)v(Z[D],_,w,O,I,U)}function A(R){R.target.removeEventListener("dispose",A);for(let w in c){let O=c[w],I=R.target.uuid;I in O&&(O[I].dispose(),delete O[I])}}}function vx(i,e){function t(){let N=!1,ne=new en,j=null,Re=new en(0,0,0,0);return{setMask:function(pe){j!==pe&&!N&&(i.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){N=pe},setClear:function(pe,Ce,Qe,mt,ye){ye===!0&&(pe*=mt,Ce*=mt,Qe*=mt),ne.set(pe,Ce,Qe,mt),Re.equals(ne)===!1&&(i.clearColor(pe,Ce,Qe,mt),Re.copy(ne))},reset:function(){N=!1,j=null,Re.set(-1,0,0,0)}}}function n(){let N=!1,ne=!1,j=null,Re=null,pe=null;return{setReversed:function(Ce){if(ne!==Ce){let Qe=e.get("EXT_clip_control");Ce?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),ne=Ce;let mt=pe;pe=null,this.setClear(mt)}},getReversed:function(){return ne},setTest:function(Ce){Ce?Se(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(Ce){j!==Ce&&!N&&(i.depthMask(Ce),j=Ce)},setFunc:function(Ce){if(ne&&(Ce=ju[Ce]),Re!==Ce){switch(Ce){case _o:i.depthFunc(i.NEVER);break;case xo:i.depthFunc(i.ALWAYS);break;case yo:i.depthFunc(i.LESS);break;case er:i.depthFunc(i.LEQUAL);break;case vo:i.depthFunc(i.EQUAL);break;case Mo:i.depthFunc(i.GEQUAL);break;case So:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Re=Ce}},setLocked:function(Ce){N=Ce},setClear:function(Ce){pe!==Ce&&(pe=Ce,ne&&(Ce=1-Ce),i.clearDepth(Ce))},reset:function(){N=!1,j=null,Re=null,pe=null,ne=!1}}}function s(){let N=!1,ne=null,j=null,Re=null,pe=null,Ce=null,Qe=null,mt=null,ye=null;return{setTest:function(nt){N||(nt?Se(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(nt){ne!==nt&&!N&&(i.stencilMask(nt),ne=nt)},setFunc:function(nt,pt,Fe){(j!==nt||Re!==pt||pe!==Fe)&&(i.stencilFunc(nt,pt,Fe),j=nt,Re=pt,pe=Fe)},setOp:function(nt,pt,Fe){(Ce!==nt||Qe!==pt||mt!==Fe)&&(i.stencilOp(nt,pt,Fe),Ce=nt,Qe=pt,mt=Fe)},setLocked:function(nt){N=nt},setClear:function(nt){ye!==nt&&(i.clearStencil(nt),ye=nt)},reset:function(){N=!1,ne=null,j=null,Re=null,pe=null,Ce=null,Qe=null,mt=null,ye=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,u={},h={},d={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,b=null,v=null,A=null,R=null,_=null,w=new ct(0,0,0),O=0,I=!1,U=null,H=null,Z=null,D=null,q=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,re=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=re>=1):J.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=re>=2);let le=null,he={},Pe=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),z=new en().fromArray(Pe),ie=new en().fromArray(Ze);function me(N,ne,j,Re){let pe=new Uint8Array(4),Ce=i.createTexture();i.bindTexture(N,Ce),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qe=0;Qe<j;Qe++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,Re,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ne+Qe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return Ce}let ke={};ke[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ke[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ke[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Se(i.DEPTH_TEST),a.setFunc(er),Be(!1),Ie(Nc),Se(i.CULL_FACE),Ae(As);function Se(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function xe(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function fe(N,ne){return d[N]!==ne?(i.bindFramebuffer(N,ne),d[N]=ne,N===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),N===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function $e(N,ne){let j=g,Re=!1;if(N){j=f.get(ne),j===void 0&&(j=[],f.set(ne,j));let pe=N.textures;if(j.length!==pe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let Ce=0,Qe=pe.length;Ce<Qe;Ce++)j[Ce]=i.COLOR_ATTACHMENT0+Ce;j.length=pe.length,Re=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,Re=!0);Re&&i.drawBuffers(j)}function lt(N){return y!==N?(i.useProgram(N),y=N,!0):!1}let yt={[Rs]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};yt[bu]=i.MIN,yt[Eu]=i.MAX;let ae={[wu]:i.ZERO,[Tu]:i.ONE,[Au]:i.SRC_COLOR,[Bc]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[zc]:i.ONE_MINUS_SRC_ALPHA,[Du]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Nu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function Ae(N,ne,j,Re,pe,Ce,Qe,mt,ye,nt){if(N===As){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(Se(i.BLEND),m=!0),N!==vu){if(N!==p||nt!==I){if((x!==Rs||A!==Rs)&&(i.blendEquation(i.FUNC_ADD),x=Rs,A=Rs),nt)switch(N){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFunc(i.ONE,i.ONE);break;case Fc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Oc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ht("WebGLState: Invalid blending: ",N);break}else switch(N){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Uc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Fc:ht("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Oc:ht("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ht("WebGLState: Invalid blending: ",N);break}b=null,v=null,R=null,_=null,w.set(0,0,0),O=0,p=N,I=nt}return}pe=pe||ne,Ce=Ce||j,Qe=Qe||Re,(ne!==x||pe!==A)&&(i.blendEquationSeparate(yt[ne],yt[pe]),x=ne,A=pe),(j!==b||Re!==v||Ce!==R||Qe!==_)&&(i.blendFuncSeparate(ae[j],ae[Re],ae[Ce],ae[Qe]),b=j,v=Re,R=Ce,_=Qe),(mt.equals(w)===!1||ye!==O)&&(i.blendColor(mt.r,mt.g,mt.b,ye),w.copy(mt),O=ye),p=N,I=!1}function be(N,ne){N.side===jt?xe(i.CULL_FACE):Se(i.CULL_FACE);let j=N.side===An;ne&&(j=!j),Be(j),N.blending===gr&&N.transparent===!1?Ae(As):Ae(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let Re=N.stencilWrite;o.setTest(Re),Re&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Je(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Se(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Be(N){U!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),U=N)}function Ie(N){N!==_u?(Se(i.CULL_FACE),N!==H&&(N===Nc?i.cullFace(i.BACK):N===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),H=N}function je(N){N!==Z&&(X&&i.lineWidth(N),Z=N)}function Je(N,ne,j){N?(Se(i.POLYGON_OFFSET_FILL),(D!==ne||q!==j)&&(D=ne,q=j,a.getReversed()&&(ne=-ne,j=-j),i.polygonOffset(ne,j))):xe(i.POLYGON_OFFSET_FILL)}function ut(N){N?Se(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function St(N){N===void 0&&(N=i.TEXTURE0+K-1),le!==N&&(i.activeTexture(N),le=N)}function wt(N,ne,j){j===void 0&&(le===null?j=i.TEXTURE0+K-1:j=le);let Re=he[j];Re===void 0&&(Re={type:void 0,texture:void 0},he[j]=Re),(Re.type!==N||Re.texture!==ne)&&(le!==j&&(i.activeTexture(j),le=j),i.bindTexture(N,ne||ke[N]),Re.type=N,Re.texture=ne)}function B(){let N=he[le];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Kt(){try{i.compressedTexImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function _t(){try{i.compressedTexImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function Ft(){try{i.texSubImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function Le(){try{i.texSubImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function Wt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function tt(){try{i.compressedTexSubImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function Ke(){try{i.texStorage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function C(){try{i.texStorage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function S(){try{i.texImage2D(...arguments)}catch(N){ht("WebGLState:",N)}}function V(){try{i.texImage3D(...arguments)}catch(N){ht("WebGLState:",N)}}function _e(N){return h[N]!==void 0?h[N]:i.getParameter(N)}function ce(N,ne){h[N]!==ne&&(i.pixelStorei(N,ne),h[N]=ne)}function Ee(N){z.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),z.copy(N))}function De(N){ie.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ie.copy(N))}function ee(N,ne){let j=c.get(ne);j===void 0&&(j=new WeakMap,c.set(ne,j));let Re=j.get(N);Re===void 0&&(Re=i.getUniformBlockIndex(ne,N.name),i.uniformBlockBinding(ne,Re,Re),j.set(N,Re))}function se(N,ne,j){let pe=c.get(ne).get(N);l[pe]!==j&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,j),l[pe]=j)}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},le=null,he={},d={},l={},f=new WeakMap,g=[],y=null,m=!1,p=null,x=null,b=null,v=null,A=null,R=null,_=null,w=new ct(0,0,0),O=0,I=!1,U=null,H=null,Z=null,D=null,q=null,z.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Se,disable:xe,bindFramebuffer:fe,drawBuffers:$e,useProgram:lt,setBlending:Ae,setMaterial:be,setFlipSided:Be,setCullFace:Ie,setLineWidth:je,setPolygonOffset:Je,setScissorTest:ut,activeTexture:St,bindTexture:wt,unbindTexture:B,compressedTexImage2D:Kt,compressedTexImage3D:_t,texImage2D:S,texImage3D:V,pixelStorei:ce,getParameter:_e,updateUBOMapping:ee,uniformBlockBinding:se,texStorage2D:Ke,texStorage3D:C,texSubImage2D:Ft,texSubImage3D:Le,compressedTexSubImage2D:Wt,compressedTexSubImage3D:tt,scissor:Ee,viewport:De,reset:we}}function Mx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,u=new WeakMap,h=new Set,d,f=new WeakMap,g=new Set,y=new FinalizationRegistry(C=>g.delete(C)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,S){return m?new OffscreenCanvas(C,S):Xr("canvas")}function x(C,S,V){let _e=1,ce=Ke(C);if((ce.width>V||ce.height>V)&&(_e=V/Math.max(ce.width,ce.height)),_e<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let Ee=Math.floor(_e*ce.width),De=Math.floor(_e*ce.height);d===void 0&&(d=p(Ee,De));let ee=S?p(Ee,De):d;return ee.width=Ee,ee.height=De,ee.getContext("2d").drawImage(C,0,0,Ee,De),at("WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+Ee+"x"+De+")."),ee}else return"data"in C&&at("WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),C;return C}function b(C){return C.generateMipmaps}function v(C){i.generateMipmap(C)}function A(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(C,S,V,_e,ce,Ee=!1){if(C!==null){if(i[C]!==void 0)return i[C];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let De;_e&&(De=e.get("EXT_texture_norm16"),De||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=S;if(S===i.RED&&(V===i.FLOAT&&(ee=i.R32F),V===i.HALF_FLOAT&&(ee=i.R16F),V===i.UNSIGNED_BYTE&&(ee=i.R8),V===i.UNSIGNED_SHORT&&De&&(ee=De.R16_EXT),V===i.SHORT&&De&&(ee=De.R16_SNORM_EXT)),S===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.R8UI),V===i.UNSIGNED_SHORT&&(ee=i.R16UI),V===i.UNSIGNED_INT&&(ee=i.R32UI),V===i.BYTE&&(ee=i.R8I),V===i.SHORT&&(ee=i.R16I),V===i.INT&&(ee=i.R32I)),S===i.RG&&(V===i.FLOAT&&(ee=i.RG32F),V===i.HALF_FLOAT&&(ee=i.RG16F),V===i.UNSIGNED_BYTE&&(ee=i.RG8),V===i.UNSIGNED_SHORT&&De&&(ee=De.RG16_EXT),V===i.SHORT&&De&&(ee=De.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RG8UI),V===i.UNSIGNED_SHORT&&(ee=i.RG16UI),V===i.UNSIGNED_INT&&(ee=i.RG32UI),V===i.BYTE&&(ee=i.RG8I),V===i.SHORT&&(ee=i.RG16I),V===i.INT&&(ee=i.RG32I)),S===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGB8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGB16UI),V===i.UNSIGNED_INT&&(ee=i.RGB32UI),V===i.BYTE&&(ee=i.RGB8I),V===i.SHORT&&(ee=i.RGB16I),V===i.INT&&(ee=i.RGB32I)),S===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(ee=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(ee=i.RGBA16UI),V===i.UNSIGNED_INT&&(ee=i.RGBA32UI),V===i.BYTE&&(ee=i.RGBA8I),V===i.SHORT&&(ee=i.RGBA16I),V===i.INT&&(ee=i.RGBA32I)),S===i.RGB&&(V===i.UNSIGNED_SHORT&&De&&(ee=De.RGB16_EXT),V===i.SHORT&&De&&(ee=De.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(ee=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(ee=i.R11F_G11F_B10F)),S===i.RGBA){let se=Ee?Wr:Tt.getTransfer(ce);V===i.FLOAT&&(ee=i.RGBA32F),V===i.HALF_FLOAT&&(ee=i.RGBA16F),V===i.UNSIGNED_BYTE&&(ee=se===Bt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&De&&(ee=De.RGBA16_EXT),V===i.SHORT&&De&&(ee=De.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(C,S){let V;return C?S===null||S===di||S===Is?V=i.DEPTH24_STENCIL8:S===Kn?V=i.DEPTH32F_STENCIL8:S===xr&&(V=i.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===Is?V=i.DEPTH_COMPONENT24:S===Kn?V=i.DEPTH_COMPONENT32F:S===xr&&(V=i.DEPTH_COMPONENT16),V}function w(C,S){return b(C)===!0||C.isFramebufferTexture&&C.minFilter!==bn&&C.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function O(C){let S=new WeakRef(C);n.get(C).__ref=S,g.add(S),y.register(C,S,S)}function I(C){let S=n.get(C).__ref;S!==void 0&&(g.delete(S),y.unregister(S))}function U(C){Z(C.target)}function H(C){D(C.target)}function Z(C){C.removeEventListener("dispose",U),I(C),K(C),C.isVideoTexture&&u.delete(C),C.isHTMLTexture&&h.delete(C)}function D(C){C.removeEventListener("dispose",H),I(C),re(C)}function q(){for(let C of g){let S=C.deref();S!==void 0&&(S.isRenderTarget===!0?D(S):Z(S))}g.clear(),h.clear()}function K(C){let S=n.get(C);if(S.__webglInit===void 0)return;let V=C.source,_e=f.get(V);if(_e){let ce=_e[S.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&X(C),Object.keys(_e).length===0&&f.delete(V)}n.remove(C)}function X(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let V=C.source,_e=f.get(V);delete _e[S.__cacheKey],a.memory.textures--}function re(C){let S=n.get(C);S.__depthDisposeCallback&&S.__depthDisposeCallback();let V=C.depthTexture;if(V&&V.renderTarget===C&&Z(V),C.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let Ee=0;Ee<S.__webglFramebuffer[ce].length;Ee++)i.deleteFramebuffer(S.__webglFramebuffer[ce][Ee]);else i.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)i.deleteFramebuffer(S.__webglFramebuffer[ce]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let _e=C.textures;for(let ce=0,Ee=_e.length;ce<Ee;ce++){let De=n.get(_e[ce]);De.__webglTexture&&(i.deleteTexture(De.__webglTexture),a.memory.textures--),n.remove(_e[ce])}n.remove(C)}let J=0;function le(){J=0}function he(){return J}function Pe(C){J=C}function Ze(){let C=J;return C>=s.maxTextures&&at("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),J+=1,C}function z(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.mipmapsAutoUpdate),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function ie(C,S){let V=n.get(C);if(C.isVideoTexture&&Wt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){let _e=C.image;if(_e===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{be(V,C,S);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+S)}function me(C,S){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){be(V,C,S);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+S)}function ke(C,S){let V=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){be(V,C,S);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+S)}function Se(C,S){let V=n.get(C);if(C.version>0&&V.__version!==C.version){Be(V,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+S)}let xe={[tr]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[Eo]:i.MIRRORED_REPEAT},fe={[bn]:i.NEAREST,[Hu]:i.NEAREST_MIPMAP_NEAREST,[ba]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},$e={[Wu]:i.NEVER,[th]:i.ALWAYS,[Xu]:i.LESS,[jc]:i.LEQUAL,[qu]:i.EQUAL,[eh]:i.GEQUAL,[Yu]:i.GREATER,[Zu]:i.NOTEQUAL};function lt(C,S){if(S.type===Kn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===Qo||S.magFilter===ba||S.magFilter===ki||S.minFilter===Un||S.minFilter===Qo||S.minFilter===ba||S.minFilter===ki)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,xe[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,xe[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,xe[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,fe[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,$e[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===bn||S.minFilter!==ba&&S.minFilter!==ki||S.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function yt(C,S){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",U),O(S));let _e=S.source,ce=f.get(_e);ce===void 0&&(ce={},f.set(_e,ce));let Ee=z(S);if(Ee!==C.__cacheKey){ce[Ee]===void 0&&(ce[Ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ce[Ee].usedTimes++;let De=ce[C.__cacheKey];De!==void 0&&(ce[C.__cacheKey].usedTimes--,De.usedTimes===0&&X(S)),C.__cacheKey=Ee,C.__webglTexture=ce[Ee].texture}return V}function ae(C,S,V){return Math.floor(Math.floor(C/V)/S)}function Ae(C,S,V,_e){let Ee=C.updateRanges;if(Ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,V,_e,S.data);else{Ee.sort((N,ne)=>N.start-ne.start);let De=0;for(let N=1;N<Ee.length;N++){let ne=Ee[De],j=Ee[N],Re=ne.start+ne.count,pe=ae(j.start,S.width,4),Ce=ae(ne.start,S.width,4);j.start<=Re+1&&pe===Ce&&ae(j.start+j.count-1,S.width,4)===pe?ne.count=Math.max(ne.count,j.start+j.count-ne.start):(++De,Ee[De]=j)}Ee.length=De+1;let ee=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let N=0,ne=Ee.length;N<ne;N++){let j=Ee[N],Re=Math.floor(j.start/4),pe=Math.ceil(j.count/4),Ce=Re%S.width,Qe=Math.floor(Re/S.width),mt=pe,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),t.pixelStorei(i.UNPACK_SKIP_ROWS,Qe),t.texSubImage2D(i.TEXTURE_2D,0,Ce,Qe,mt,ye,V,_e,S.data)}C.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ee),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function be(C,S,V){let _e=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(_e=i.TEXTURE_3D);let ce=yt(C,S),Ee=S.source;t.bindTexture(_e,C.__webglTexture,i.TEXTURE0+V);let De=n.get(Ee);if(Ee.version!==De.__version||ce===!0){if(t.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let ye=Tt.getPrimaries(Tt.workingColorSpace),nt=S.colorSpace===Qn?null:Tt.getPrimaries(S.colorSpace),pt=S.colorSpace===Qn||ye===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let se=x(S.image,!1,s.maxTextureSize);se=tt(S,se);let we=r.convert(S.format,S.colorSpace),N=r.convert(S.type),ne=R(S.internalFormat,we,N,S.normalized,S.colorSpace,S.isVideoTexture);lt(_e,S);let j,Re=S.mipmaps,pe=S.isVideoTexture!==!0,Ce=De.__version===void 0||ce===!0,Qe=Ee.dataReady,mt=w(S,se);if(S.isDepthTexture)ne=_(S.format===Gi,S.type),Ce&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ne,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,ne,se.width,se.height,0,we,N,null));else if(S.isDataTexture)if(Re.length>0){pe&&Ce&&t.texStorage2D(i.TEXTURE_2D,mt,ne,Re[0].width,Re[0].height);for(let ye=0,nt=Re.length;ye<nt;ye++)j=Re[ye],pe?Qe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,j.width,j.height,we,N,j.data):t.texImage2D(i.TEXTURE_2D,ye,ne,j.width,j.height,0,we,N,j.data);S.generateMipmaps=!1}else pe?(Ce&&t.texStorage2D(i.TEXTURE_2D,mt,ne,se.width,se.height),Qe&&Ae(S,se,we,N)):t.texImage2D(i.TEXTURE_2D,0,ne,se.width,se.height,0,we,N,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){pe&&Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ne,Re[0].width,Re[0].height,se.depth);for(let ye=0,nt=Re.length;ye<nt;ye++)if(j=Re[ye],S.format!==pi)if(we!==null)if(pe){if(Qe)if(S.layerUpdates.size>0){let pt=uh(j.width,j.height,S.format,S.type);for(let Fe of S.layerUpdates){let Lt=j.data.subarray(Fe*pt/j.data.BYTES_PER_ELEMENT,(Fe+1)*pt/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,Fe,j.width,j.height,1,we,Lt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,j.width,j.height,se.depth,we,j.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,ne,j.width,j.height,se.depth,0,j.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?Qe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,j.width,j.height,se.depth,we,N,j.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,ne,j.width,j.height,se.depth,0,we,N,j.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{pe&&Ce&&t.texStorage2D(i.TEXTURE_2D,mt,ne,Re[0].width,Re[0].height);for(let ye=0,nt=Re.length;ye<nt;ye++)j=Re[ye],S.format!==pi?we!==null?pe?Qe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,j.width,j.height,we,j.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,ne,j.width,j.height,0,j.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?Qe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,j.width,j.height,we,N,j.data):t.texImage2D(i.TEXTURE_2D,ye,ne,j.width,j.height,0,we,N,j.data)}else if(S.isDataArrayTexture)if(pe){if(Ce&&t.texStorage3D(i.TEXTURE_2D_ARRAY,mt,ne,se.width,se.height,se.depth),Qe)if(S.layerUpdates.size>0){let ye=uh(se.width,se.height,S.format,S.type);for(let nt of S.layerUpdates){let pt=se.data.subarray(nt*ye/se.data.BYTES_PER_ELEMENT,(nt+1)*ye/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,nt,se.width,se.height,1,we,N,pt)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,we,N,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ne,se.width,se.height,se.depth,0,we,N,se.data);else if(S.isData3DTexture)pe?(Ce&&t.texStorage3D(i.TEXTURE_3D,mt,ne,se.width,se.height,se.depth),Qe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,we,N,se.data)):t.texImage3D(i.TEXTURE_3D,0,ne,se.width,se.height,se.depth,0,we,N,se.data);else if(S.isFramebufferTexture){if(Ce)if(pe)t.texStorage2D(i.TEXTURE_2D,mt,ne,se.width,se.height);else{let ye=se.width,nt=se.height;for(let pt=0;pt<mt;pt++)t.texImage2D(i.TEXTURE_2D,pt,ne,ye,nt,0,we,N,null),ye>>=1,nt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),se.parentNode!==ye){ye.appendChild(se),h.add(S),ye.onpaint=nt=>{let pt=nt.changedElements;for(let Fe of h)pt.includes(Fe.image)&&(Fe.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let pt=i.RGBA,Fe=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,pt,Fe,Lt,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(pe&&Ce){let ye=Ke(Re[0]);t.texStorage2D(i.TEXTURE_2D,mt,ne,ye.width,ye.height)}for(let ye=0,nt=Re.length;ye<nt;ye++)j=Re[ye],pe?Qe&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,we,N,j):t.texImage2D(i.TEXTURE_2D,ye,ne,we,N,j);S.generateMipmaps=!1}else if(pe){if(Ce){let ye=Ke(se);t.texStorage2D(i.TEXTURE_2D,mt,ne,ye.width,ye.height)}Qe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,N,se)}else t.texImage2D(i.TEXTURE_2D,0,ne,we,N,se);b(S)&&S.mipmapsAutoUpdate===!0&&v(_e),De.__version=Ee.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Be(C,S,V){if(S.image.length!==6)return;let _e=yt(C,S),ce=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+V);let Ee=n.get(ce);if(ce.version!==Ee.__version||_e===!0){t.activeTexture(i.TEXTURE0+V);let De=Tt.getPrimaries(Tt.workingColorSpace),ee=S.colorSpace===Qn?null:Tt.getPrimaries(S.colorSpace),se=S.colorSpace===Qn||De===ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let we=S.isCompressedTexture||S.image[0].isCompressedTexture,N=S.image[0]&&S.image[0].isDataTexture,ne=[];for(let Fe=0;Fe<6;Fe++)!we&&!N?ne[Fe]=x(S.image[Fe],!0,s.maxCubemapSize):ne[Fe]=N?S.image[Fe].image:S.image[Fe],ne[Fe]=tt(S,ne[Fe]);let j=ne[0],Re=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),Ce=R(S.internalFormat,Re,pe,S.normalized,S.colorSpace),Qe=S.isVideoTexture!==!0,mt=Ee.__version===void 0||_e===!0,ye=ce.dataReady,nt=w(S,j);lt(i.TEXTURE_CUBE_MAP,S);let pt;if(S.isDepthTexture){if(Ce=_(S.format===Gi,S.type),mt)if(Qe)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ce,j.width,j.height);else for(let Fe=0;Fe<6;Fe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,j.width,j.height,0,Re,pe,null)}else if(we){Qe&&mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ce,j.width,j.height);for(let Fe=0;Fe<6;Fe++){pt=ne[Fe].mipmaps;for(let Lt=0;Lt<pt.length;Lt++){let ln=pt[Lt];S.format!==pi?Re!==null?Qe?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt,0,0,ln.width,ln.height,Re,ln.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt,Ce,ln.width,ln.height,0,ln.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qe?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt,0,0,ln.width,ln.height,Re,pe,ln.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt,Ce,ln.width,ln.height,0,Re,pe,ln.data)}}}else{if(pt=S.mipmaps,Qe&&mt){pt.length>0&&nt++;let Fe=Ke(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,nt,Ce,Fe.width,Fe.height)}for(let Fe=0;Fe<6;Fe++)if(N){Qe?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,ne[Fe].width,ne[Fe].height,Re,pe,ne[Fe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,ne[Fe].width,ne[Fe].height,0,Re,pe,ne[Fe].data);for(let Lt=0;Lt<pt.length;Lt++){let ni=pt[Lt].image[Fe].image;Qe?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt+1,0,0,ni.width,ni.height,Re,pe,ni.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt+1,Ce,ni.width,ni.height,0,Re,pe,ni.data)}}else{Qe?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,0,0,Re,pe,ne[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ce,Re,pe,ne[Fe]);for(let Lt=0;Lt<pt.length;Lt++){let ln=pt[Lt];Qe?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt+1,0,0,Re,pe,ln.image[Fe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,Lt+1,Ce,Re,pe,ln.image[Fe])}}}b(S)&&S.mipmapsAutoUpdate===!0&&v(i.TEXTURE_CUBE_MAP),Ee.__version=ce.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function Ie(C,S,V,_e,ce,Ee){let De=r.convert(V.format,V.colorSpace),ee=r.convert(V.type),se=R(V.internalFormat,De,ee,V.normalized,V.colorSpace),we=n.get(S),N=n.get(V);if(N.__renderTarget=S,!we.__hasExternalTextures){let ne=Math.max(1,S.width>>Ee),j=Math.max(1,S.height>>Ee);ce===i.TEXTURE_3D||ce===i.TEXTURE_2D_ARRAY?t.texImage3D(ce,Ee,se,ne,j,S.depth,0,De,ee,null):t.texImage2D(ce,Ee,se,ne,j,0,De,ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ce,N.__webglTexture,0,Ft(S)):(ce===i.TEXTURE_2D||ce>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,ce,N.__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(C,S,V){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let _e=S.depthTexture,ce=_e&&_e.isDepthTexture?_e.type:null,Ee=_(S.stencilBuffer,ce),De=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(S),Ee,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(S),Ee,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,C)}else{let _e=S.textures;for(let ce=0;ce<_e.length;ce++){let Ee=_e[ce],De=r.convert(Ee.format,Ee.colorSpace),ee=r.convert(Ee.type),se=R(Ee.internalFormat,De,ee,Ee.normalized,Ee.colorSpace);Le(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ft(S),se,S.width,S.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ft(S),se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(C,S,V){let _e=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ce=n.get(S.depthTexture);ce.__renderTarget=S;let Ee=_e?S.depthTexture.image[0]:S.depthTexture.image;(!ce.__webglTexture||Ee.width!==S.width||Ee.height!==S.height)&&(Ee.width=S.width,Ee.height=S.height,S.depthTexture.needsUpdate=!0),_e?Se(S.depthTexture,0):ie(S.depthTexture,0);let De=ce.__webglTexture,ee=Ft(S),se=_e?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,we=S.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Oi)Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,se,De,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,we,se,De,0);else if(S.depthTexture.format===Gi)Le(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,se,De,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,we,se,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ut(C){let S=n.get(C),V=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let _e=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),_e){let ce=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,_e.removeEventListener("dispose",ce)};_e.addEventListener("dispose",ce),S.__depthDisposeCallback=ce}S.__boundDepthTexture=_e}if(C.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let _e=0;_e<6;_e++)Je(S.__webglFramebuffer[_e],C,_e);else C.texture.mipmaps.length>0?Je(S.__webglFramebuffer[0],C,0):Je(S.__webglFramebuffer,C,0);else if(V){S.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[_e]),S.__webglDepthbuffer[_e]===void 0)S.__webglDepthbuffer[_e]=i.createRenderbuffer(),je(S.__webglDepthbuffer[_e],C,!1);else{let ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Ee)}}else if(C.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),je(S.__webglDepthbuffer,C,!1);else{let ce=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,Ee)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(C,S,V){let _e=n.get(C);S!==void 0&&Ie(_e.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ut(C)}function wt(C){let S=C.texture,V=n.get(C),_e=n.get(S);C.addEventListener("dispose",H),O(C);let ce=C.textures,Ee=C.isWebGLCubeRenderTarget===!0,De=ce.length>1;if(De||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=S.version,a.memory.textures++),Ee){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(S.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let se=0;se<S.mipmaps.length;se++)V.__webglFramebuffer[ee][se]=i.createFramebuffer()}else V.__webglFramebuffer[ee]=i.createFramebuffer()}else{if(S.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<S.mipmaps.length;ee++)V.__webglFramebuffer[ee]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(De)for(let ee=0,se=ce.length;ee<se;ee++){let we=n.get(ce[ee]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Le(C)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<ce.length;ee++){let se=ce[ee];V.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);let we=r.convert(se.format,se.colorSpace),N=r.convert(se.type),ne=R(se.internalFormat,we,N,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),j=Ft(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,j,ne,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),je(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),lt(i.TEXTURE_CUBE_MAP,S);for(let ee=0;ee<6;ee++)if(S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)Ie(V.__webglFramebuffer[ee][se],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se);else Ie(V.__webglFramebuffer[ee],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);b(S)?v(i.TEXTURE_CUBE_MAP):S.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}else if(De){for(let ee=0,se=ce.length;ee<se;ee++){let we=ce[ee],N=n.get(we),ne=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,N.__webglTexture),lt(ne,we),Ie(V.__webglFramebuffer,C,we,i.COLOR_ATTACHMENT0+ee,ne,0),b(we)&&v(ne)}t.unbindTexture()}else{let ee=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ee=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,_e.__webglTexture),lt(ee,S),S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)Ie(V.__webglFramebuffer[se],C,S,i.COLOR_ATTACHMENT0,ee,se);else Ie(V.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,ee,0);b(S)?v(ee):S.mipmaps.length>0&&i.texParameteri(ee,i.TEXTURE_MAX_LEVEL,S.mipmaps.length-1),t.unbindTexture()}C.depthBuffer&&ut(C)}function B(C){let S=C.textures;for(let V=0,_e=S.length;V<_e;V++){let ce=S[V];if(b(ce)&&ce.mipmapsAutoUpdate===!0){let Ee=A(C),De=n.get(ce).__webglTexture;t.bindTexture(Ee,De),v(Ee),t.unbindTexture()}}}let Kt=[];function _t(C){if(C.samples>0){if(Le(C)===!1){let S=C.textures,V=C.width,_e=C.height,ce=i.COLOR_BUFFER_BIT,Ee=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=n.get(C),ee=S.length>1;if(ee)for(let we=0;we<S.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),C.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let we=0;we<S.length;we++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ce|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ce|=i.STENCIL_BUFFER_BIT)),ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);let N=n.get(S[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,V,_e,0,0,V,_e,ce,i.NEAREST),l===!0&&(Kt.length=0,Kt.push(i.COLOR_ATTACHMENT0+we),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&Kt.push(Ee),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Kt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let we=0;we<S.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,De.__webglColorRenderbuffer[we]);let N=n.get(S[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Ft(C){return Math.min(s.maxSamples,C.samples)}function Le(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Wt(C){let S=a.render.frame;u.get(C)!==S&&(u.set(C,S),C.update())}function tt(C,S){let V=C.colorSpace,_e=C.format,ce=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Vr&&V!==Qn&&(Tt.getTransfer(V)===Bt?(_e!==pi||ce!==kn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ht("WebGLTextures: Unsupported texture color space:",V)),S}function Ke(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Ze,this.resetTextureUnits=le,this.getTextureUnits=he,this.setTextureUnits=Pe,this.setTexture2D=ie,this.setTexture2DArray=me,this.setTexture3D=ke,this.setTextureCube=Se,this.rebindTextures=St,this.setupRenderTarget=wt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Le,this.dispose=q}function Sx(i,e){function t(n,s=Qn){let r,a=Tt.getTransfer(s);if(n===kn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Yc)return i.BYTE;if(n===Zc)return i.SHORT;if(n===xr)return i.UNSIGNED_SHORT;if(n===jo)return i.INT;if(n===di)return i.UNSIGNED_INT;if(n===Kn)return i.FLOAT;if(n===fi)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===pi)return i.RGBA;if(n===Oi)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===il)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===Ea||n===wa||n===Ta||n===Aa)if(a===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl||n===fl||n===pl||n===Ra||n===ml)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return a===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===fl)return r.COMPRESSED_R11_EAC;if(n===pl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ra)return r.COMPRESSED_RG11_EAC;if(n===ml)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===gl||n===_l||n===xl||n===yl||n===vl||n===Ml||n===Sl||n===bl||n===El||n===wl||n===Tl||n===Al||n===Rl||n===Cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===gl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_l)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===xl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ml)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===El)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Tl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Al)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Rl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Cl)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Il||n===Pl||n===Dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Il)return a===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ll||n===Nl||n===Ca||n===Ul)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ul)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ex=`
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

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Jn({vertexShader:bx,fragmentShader:Ex,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new We(new Ut(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends vi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new vh,p={},x=t.getContextAttributes(),b=null,v=null,A=[],R=[],_=new ve,w=null,O=null,I=new Dn;I.viewport=new en;let U=new Dn;U.viewport=new en;let H=[I,U],Z=new Zo,D=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let ie=A[z];return ie===void 0&&(ie=new or,A[z]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(z){let ie=A[z];return ie===void 0&&(ie=new or,A[z]=ie),ie.getGripSpace()},this.getHand=function(z){let ie=A[z];return ie===void 0&&(ie=new or,A[z]=ie),ie.getHandSpace()};function K(z){let ie=R.indexOf(z.inputSource);if(ie===-1)return;let me=A[ie];me!==void 0&&(me.update(z.inputSource,z.frame,c||a),me.dispatchEvent({type:z.type,data:z.inputSource}))}function X(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",re);for(let z=0;z<A.length;z++){let ie=R[z];ie!==null&&(R[z]=null,A[z].disconnect(ie))}D=null,q=null,m.reset();for(let z in p)delete p[z];if(e.setRenderTarget(b),f=null,d=null,h=null,s=null,v=null,Ze.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(_.width,_.height,!1),O!==null){let z=O.camera;z.fov=O.fov,z.zoom=O.zoom,z.updateProjectionMatrix(),O=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){r=z,n.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,n.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",X),s.addEventListener("inputsourceschange",re),x.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,ke=null,Se=null;x.depth&&(Se=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=x.stencil?Gi:Oi,ke=x.stencil?Is:di);let xe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),v=new Fn(d.textureWidth,d.textureHeight,{format:pi,type:kn,depthTexture:new zi(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let me={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Fn(f.framebufferWidth,f.framebufferHeight,{format:pi,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ze.setContext(s),Ze.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function re(z){for(let ie=0;ie<z.removed.length;ie++){let me=z.removed[ie],ke=R.indexOf(me);ke>=0&&(R[ke]=null,A[ke].disconnect(me))}for(let ie=0;ie<z.added.length;ie++){let me=z.added[ie],ke=R.indexOf(me);if(ke===-1){for(let xe=0;xe<A.length;xe++)if(xe>=R.length){R.push(me),ke=xe;break}else if(R[xe]===null){R[xe]=me,ke=xe;break}if(ke===-1)break}let Se=A[ke];Se&&Se.connect(me)}}function J(z,ie){ie===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(ie.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let ie=z.near,me=z.far;m.texture!==null&&(m.depthNear>0&&(ie=m.depthNear),m.depthFar>0&&(me=m.depthFar)),Z.near=U.near=I.near=ie,Z.far=U.far=I.far=me,(D!==Z.near||q!==Z.far)&&(s.updateRenderState({depthNear:Z.near,depthFar:Z.far}),D=Z.near,q=Z.far),Z.layers.mask=z.layers.mask|6,I.layers.mask=Z.layers.mask&-5,U.layers.mask=Z.layers.mask&-3;let ke=z.parent,Se=Z.cameras;J(Z,ke);for(let xe=0;xe<Se.length;xe++)J(Se[xe],ke);Z.projectionMatrix.copy(I.projectionMatrix),Z.projectionMatrixInverse.copy(I.projectionMatrixInverse),O===null&&z.isPerspectiveCamera&&(O={camera:z,fov:z.fov,zoom:z.zoom}),le(z,Z,ke)};function le(z,ie,me){me===null?z.matrix.copy(ie.matrixWorld):(z.matrix.copy(me.matrixWorld),z.matrix.invert(),z.matrix.multiply(ie.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(ie.projectionMatrix),z.projectionMatrixInverse.copy(ie.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=sr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(z){l=z,d!==null&&(d.fixedFoveation=z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(z){return p[z]};let he=null;function Pe(z,ie){if(u=ie.getViewerPose(c||a),g=ie,u!==null){let me=u.views;f!==null&&(e.setRenderTargetFramebuffer(v,f.framebuffer),e.setRenderTarget(v));let ke=!1;me.length!==Z.cameras.length&&(Z.cameras.length=0,ke=!0);for(let $e=0;$e<me.length;$e++){let lt=me[$e],yt=null;if(f!==null)yt=f.getViewport(lt);else{let Ae=h.getViewSubImage(d,lt);yt=Ae.viewport,$e===0&&(e.setRenderTargetTextures(v,Ae.colorTexture,Ae.depthStencilTexture),e.setRenderTarget(v))}let ae=H[$e];ae===void 0&&(ae=new Dn,ae.layers.enable($e),ae.viewport=new en,H[$e]=ae),ae.matrix.fromArray(lt.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(lt.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(yt.x,yt.y,yt.width,yt.height),$e===0&&(Z.matrix.copy(ae.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),ke===!0&&Z.cameras.push(ae)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let $e=h.getDepthInformation(me[0]);$e&&$e.isValid&&$e.texture&&m.init($e,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let $e=0;$e<me.length;$e++){let lt=me[$e].camera;if(lt){let yt=p[lt];yt||(yt=new ta,p[lt]=yt);let ae=h.getCameraImage(lt);yt.sourceTexture=ae}}}}for(let me=0;me<A.length;me++){let ke=R[me],Se=A[me];ke!==null&&Se!==void 0&&Se.update(ke,ie,c||a)}he&&he(z,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ze=new Pd;Ze.setAnimationLoop(Pe),this.setAnimationLoop=function(z){he=z},this.dispose=function(){}}},wx=new Nt,kd=new ft;kd.set(-1,0,0,0,1,0,0,0,1);function Tx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,lh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,x,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,x,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===An&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===An&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=e.get(p),b=x.envMap,v=x.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(wx.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=b*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,t(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===An&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ax(i,e,t,n){let s={},r={};function a(x,b){let v=b.program;n.uniformBlockBinding(x,v,s[x.id])}function o(x,b){let v=s[x.id];v===void 0&&(g(x),v=l(x),s[x.id]=v,x.addEventListener("dispose",m));let A=b.program;n.updateUBOMapping(x,A);let R=e.render.frame;r[x.id]!==R&&(c(x),r[x.id]=R)}function l(x){let b=i.createBuffer(),v=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,v,A),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(x){let b=s[x.id],v=x.uniforms,A=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,_=v.length;R<_;R++){let w=v[R];if(Array.isArray(w))for(let O=0,I=w.length;O<I;O++)u(w[O],R,O,A);else u(w,R,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(x,b,v,A){if(d(x,b,v,A)===!0){let R=x.__offset,_=x.value;if(Array.isArray(_)){let w=0;for(let O=0;O<_.length;O++){let I=_[O],U=y(I,!0);h(I,x.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,R,x.__data)}}function h(x,b,v){typeof x=="number"||typeof x=="boolean"?b[v]=x:x.isMatrix3?(b[v]=x.elements[0],b[v+1]=x.elements[1],b[v+2]=x.elements[2],b[v+3]=0,b[v+4]=x.elements[3],b[v+5]=x.elements[4],b[v+6]=x.elements[5],b[v+7]=0,b[v+8]=x.elements[6],b[v+9]=x.elements[7],b[v+10]=x.elements[8],b[v+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-v),v):x.toArray(b,v)}function d(x,b,v,A){let R=x.value,_=b+"_"+v;if(Array.isArray(R)){A[_]===void 0&&(A[_]=[]);let w=A[_],O=!1;for(let I=0;I<R.length;I++)f(R[I],w,I)===!0&&(O=!0);return O}return f(R,A,_)}function f(x,b,v){if(b[v]===void 0)return typeof x=="number"||typeof x=="boolean"?b[v]=x:ArrayBuffer.isView(x)?b[v]=x.slice():b[v]=x.clone(),!0;{let A=b[v];if(typeof x=="number"||typeof x=="boolean"){if(A!==x)return b[v]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(A.equals(x)===!1)return A.copy(x),!0}}return!1}function g(x){let b=x.uniforms,v=0,A=16;for(let _=0,w=b.length;_<w;_++){let O=Array.isArray(b[_])?b[_]:[b[_]];for(let I=0,U=O.length;I<U;I++){let H=O[I],Z=Array.isArray(H.value)?H.value:[H.value],D=Array.isArray(b[_])||Array.isArray(H.value),q=v;for(let X=0,re=Z.length;X<re;X++){let J=Z[X],le=y(J,D),he=v%A,Pe=he%le.boundary,Ze=he+Pe;v+=Pe,Ze!==0&&A-Ze<le.storage&&(v+=A-Ze),X===0&&(q=v),v+=le.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((v-q)/Float32Array.BYTES_PER_ELEMENT),H.__offset=q}}let R=v%A;return R>0&&(v+=A-R),x.__size=v,x.__cache={},this}function y(x,b){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=16,v.storage=48):x.isMatrix4?(v.boundary=16,v.storage=64):x.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(v.boundary=16,v.storage=x.byteLength):at("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(v.boundary=16,v.storage=Math.ceil(v.storage/16)*16),v}function m(x){let b=x.target;b.removeEventListener("dispose",m),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:p}}var Rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ai=null;function Cx(){return Ai===null&&(Ai=new Jr(Rx,16,16,rs,fi),Ai.name="DFG_LUT",Ai.minFilter=Un,Ai.magFilter=Un,Ai.wrapS=xi,Ai.wrapT=xi,Ai.generateMipmaps=!1,Ai.needsUpdate=!0),Ai}var Bl=class{constructor(e={}){let{canvas:t=Ju(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=kn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([rl,sl,il]),p=new Set([kn,di,xr,Is,el,tl]),x=new Uint32Array(4),b=new Int32Array(4),v={textures:[],min:[],max:[],resolution:[]},A=null,R=null,_=[],w=[],O=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,U=!1,H=null,Z=null,D=null,q=null;this._outputColorSpace=Yt;let K=0,X=0,re=null,J=-1,le=null,he=new en,Pe=new en,Ze=null,z=new ct(0),ie=0,me=t.width,ke=t.height,Se=1,xe=null,fe=null,$e=new en(0,0,me,ke),lt=new en(0,0,me,ke),yt=!1,ae=new ts,Ae=new Co,be=!1,Be=!1,Ie=new Nt,je=new P,Je=new en,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function wt(){return re===null?Se:1}let B=n;function Kt(E,F){return t.getContext(E,F)}let _t,Ft,Le,Wt,tt,Ke,C,S,V,_e,ce,Ee,De,ee,se,we,N,ne,j,Re,pe,Ce,Qe;try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",nt,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),B===null){let F="webgl2";if(B=Kt(F,E),B===null)throw Kt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}mt()}catch(E){throw t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ht("WebGLRenderer: "+E.message),E}function mt(){_t=new H0(B),_t.init(),pe=new Sx(B,_t),Ft=new C0(B,_t,e,pe),Le=new vx(B,_t),Ft.reversedDepthBuffer&&d&&Le.buffers.depth.setReversed(!0),Z=B.createFramebuffer(),D=B.createFramebuffer(),q=B.createFramebuffer(),Wt=new V0(B),tt=new ax,Ke=new Mx(B,_t,Le,tt,Ft,pe,Wt),C=new z0(I),S=new Xp(B),Ce=new A0(B,S),V=new k0(B,S,Wt,Ce),_e=new X0(B,V,S,Ce,Wt),ne=new W0(B,Ft,Ke),se=new I0(tt),ce=new rx(I,C,_t,Ft,Ce,se),Ee=new Tx(I,tt),De=new lx,ee=new px(_t),N=new T0(I,C,Le,_e,g,l),we=new yx(I,_e,Ft),Qe=new Ax(B,Wt,Ft,Le),j=new R0(B,_t,Wt),Re=new G0(B,_t,Wt),Wt.programs=ce.programs,I.capabilities=Ft,I.extensions=_t,I.properties=tt,I.renderLists=De,I.shadowMap=we,I.state=Le,I.info=Wt}y!==kn&&(O=new Y0(y,t.width,t.height,o,s,r));let ye=new Mh(I,B);this.xr=ye,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let E=_t.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=_t.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(E){E!==void 0&&(Se=E,this.setSize(me,ke,!1))},this.getSize=function(E){return E.set(me,ke)},this.setSize=function(E,F,$=!0){if(ye.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}me=E,ke=F,t.width=Math.floor(E*Se),t.height=Math.floor(F*Se),$===!0&&(t.style.width=E+"px",t.style.height=F+"px"),O!==null&&O.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(me*Se,ke*Se).floor()},this.setDrawingBufferSize=function(E,F,$){me=E,ke=F,Se=$,t.width=Math.floor(E*$),t.height=Math.floor(F*$),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(y===kn){ht("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(he)},this.getViewport=function(E){return E.copy($e)},this.setViewport=function(E,F,$,G){E.isVector4?$e.set(E.x,E.y,E.z,E.w):$e.set(E,F,$,G),Le.viewport(he.copy($e).multiplyScalar(wt()).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,F,$,G){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,F,$,G),Le.scissor(Pe.copy(lt).multiplyScalar(wt()).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(E){Le.setScissorTest(yt=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,$=!0){let G=0;if(E){let W=!1;if(re!==null){let Ne=re.texture.format;W=m.has(Ne)}if(W){let Ne=re.texture.type,Ve=p.has(Ne),Te=N.getClearColor(),ze=N.getClearAlpha(),qe=Te.r,dt=Te.g,bt=Te.b;Ve?(x[0]=qe,x[1]=dt,x[2]=bt,x[3]=ze,B.clearBufferuiv(B.COLOR,0,x)):(b[0]=qe,b[1]=dt,b[2]=bt,b[3]=ze,B.clearBufferiv(B.COLOR,0,b))}else G|=B.COLOR_BUFFER_BIT}F&&(G|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(G|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&B.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),H=E},this.dispose=function(){t.removeEventListener("webglcontextlost",nt,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),N.dispose(),De.dispose(),ee.dispose(),Ke.dispose(),tt.dispose(),C.dispose(),_e.dispose(),V.dispose(),Ce.dispose(),Qe.dispose(),ce.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",Vi),ye.removeEventListener("sessionend",qn),Ci.stop()};function nt(E){E.preventDefault(),ih("WebGLRenderer: Context Lost."),U=!0}function pt(){ih("WebGLRenderer: Context Restored."),U=!1;let E=Wt.autoReset,F=we.enabled,$=we.autoUpdate,G=we.needsUpdate,W=we.type;mt(),Wt.autoReset=E,we.enabled=F,we.autoUpdate=$,we.needsUpdate=G,we.type=W}function Fe(E){ht("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Lt(E){let F=E.target;F.removeEventListener("dispose",Lt),ln(F)}function ln(E){ni(E),tt.remove(E)}function ni(E){let F=tt.get(E).programs;F!==void 0&&(F.forEach(function($){ce.releaseProgram($)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,$,G,W,Ne){F===null&&(F=ut);let Ve=W.isMesh&&W.matrixWorld.determinantAffine()<0,Te=Cr(E,F,$,G,W);Le.setMaterial(G,Ve);let ze=$.index,qe=1;if(G.wireframe===!0){if(ze=V.getWireframeAttribute($),ze===void 0)return;qe=2}let dt=$.drawRange,bt=$.attributes.position,He=dt.start*qe,xt=(dt.start+dt.count)*qe;Ne!==null&&(He=Math.max(He,Ne.start*qe),xt=Math.min(xt,(Ne.start+Ne.count)*qe)),ze!==null?(He=Math.max(He,0),xt=Math.min(xt,ze.count)):bt!=null&&(He=Math.max(He,0),xt=Math.min(xt,bt.count));let Xt=xt-He;if(Xt<0||Xt===1/0)return;Ce.setup(W,G,Te,$,ze);let Ot,zt=j;if(ze!==null&&(Ot=S.get(ze),zt=Re,zt.setIndex(Ot)),W.isMesh)G.wireframe===!0?(Le.setLineWidth(G.wireframeLinewidth*wt()),zt.setMode(B.LINES)):zt.setMode(B.TRIANGLES);else if(W.isLine){let yn=G.linewidth;yn===void 0&&(yn=1),Le.setLineWidth(yn*wt()),W.isLineSegments?zt.setMode(B.LINES):W.isLineLoop?zt.setMode(B.LINE_LOOP):zt.setMode(B.LINE_STRIP)}else W.isPoints?zt.setMode(B.POINTS):W.isSprite&&zt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))zt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let yn=W._multiDrawStarts,Xe=W._multiDrawCounts,nn=W._multiDrawCount,Ct=ze?S.get(ze).bytesPerElement:1,gi=tt.get(G).currentProgram.getUniforms();for(let rn=0;rn<nn;rn++)gi.setValue(B,"_gl_DrawID",rn),zt.render(yn[rn]/Ct,Xe[rn])}else if(W.isInstancedMesh)zt.renderInstances(He,Xt,W.count);else if($.isInstancedBufferGeometry){let yn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Xe=Math.min($.instanceCount,yn);zt.renderInstances(He,Xt,Xe)}else zt.render(He,Xt)};function Us(E,F,$,G){H!==null&&E.isNodeMaterial&&H.setObject(G,E),be===!0&&se.setState(E,$,!1),E.transparent===!0&&E.side===jt&&E.forceSinglePass===!1?(E.side=An,E.needsUpdate=!0,cs(E,F,G),E.side=Ei,E.needsUpdate=!0,cs(E,F,G),E.side=jt):cs(E,F,G)}this.compile=function(E,F,$=null){$===null&&($=E),H!==null&&H.renderStart(E,F,$),R=ee.get($),R.init(F),w.push(R),$.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(R.pushLight(W),W.castShadow&&R.pushShadow(W))}),E!==$&&E.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(R.pushLight(W),W.castShadow&&R.pushShadow(W))}),R.setupLights(),H!==null&&H.updateLights(R.state.lightsArray),Be=this.localClippingEnabled,be=se.init(this.clippingPlanes,Be),be===!0&&se.setGlobalState(this.clippingPlanes,F),H!==null&&we.render(R.state.shadowsArray,$,F);let G=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Ne=W.material;if(Ne)if(Array.isArray(Ne))for(let Ve=0;Ve<Ne.length;Ve++){let Te=Ne[Ve];Us(Te,$,F,W),G.add(Te)}else Us(Ne,$,F,W),G.add(Ne)}),R=w.pop(),H!==null&&H.renderEnd(),G},this.compileAsync=function(E,F,$=null){let G=this.compile(E,F,$);return new Promise(W=>{function Ne(){if(G.forEach(function(Ve){let ze=tt.get(Ve).currentProgram;(ze===void 0||ze.isReady())&&G.delete(Ve)}),G.size===0){W(E);return}setTimeout(Ne,10)}_t.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Fs=null;function Kl(E){Fs&&Fs(E)}function Vi(){Ci.stop()}function qn(){Ci.start()}let Ci=new Pd;Ci.setAnimationLoop(Kl),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(E){Fs=E,ye.setAnimationLoop(E),E===null?Ci.stop():Ci.start()},ye.addEventListener("sessionstart",Vi),ye.addEventListener("sessionend",qn),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ht("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(E,F);let $=ye.enabled===!0&&ye.isPresenting===!0,G=O!==null&&(re===null||$)&&O.begin(I,re);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(F),F=ye.getCamera()),E.isScene===!0&&E.onBeforeRender(I,E,F,re),R=ee.get(E,w.length),R.init(F),R.state.textureUnits=Ke.getTextureUnits(),w.push(R),Ie.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Ae.setFromArrayCamera(F):ae.setFromProjectionMatrix(Ie,$n,F.reversedDepth),Be=this.localClippingEnabled,be=se.init(this.clippingPlanes,Be),A=De.get(E,_.length),A.init(),_.push(A),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let Ve=I.xr.getDepthSensingMesh();Ve!==null&&Rr(Ve,F,-1/0,I.sortObjects)}Rr(E,F,0,I.sortObjects),A.finish(),H!==null&&H.updateLights(R.state.lightsArray),I.sortObjects===!0&&A.sort(xe,fe),St=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,St&&N.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),be===!0&&se.beginShadows();let W=R.state.shadowsArray;if(we.render(W,E,F),be===!0&&se.endShadows(),(G&&O.hasRenderPass())===!1){let Ve=A.opaque,Te=A.transmissive;if(R.setupLights(),F.isArrayCamera){let ze=F.cameras;if(Te.length>0)for(let qe=0,dt=ze.length;qe<dt;qe++){let bt=ze[qe];Os(Ve,Te,E,bt)}St&&N.render(E);for(let qe=0,dt=ze.length;qe<dt;qe++){let bt=ze[qe];za(A,E,bt,bt.viewport)}}else Te.length>0&&Os(Ve,Te,E,F),St&&N.render(E),za(A,E,F)}re!==null&&X===0&&(Ke.updateMultisampleRenderTarget(re),Ke.updateRenderTargetMipmap(re)),G&&O.end(I),E.isScene===!0&&E.onAfterRender(I,E,F),Ce.resetDefaultState(),J=-1,le=null,w.pop(),w.length>0?(R=w[w.length-1],Ke.setTextureUnits(R.state.textureUnits),be===!0&&se.setGlobalState(I.clippingPlanes,R.state.camera)):R=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,H!==null&&H.renderEnd()};function Rr(E,F,$,G){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){let Ve=F.isArrayCamera?Ae:ae;if(!E.frustumCulled||E.intersectsFrustum(Ve)){G&&Je.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ie);let Te=_e.update(E),ze=E.material;ze.visible&&A.push(E,Te,ze,$,Je.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){let Ve=F.isArrayCamera?Ae:ae;if(!E.frustumCulled||E.intersectsFrustum(Ve)){let Te=_e.update(E),ze=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Je.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Je.copy(Te.boundingSphere.center)),Je.applyMatrix4(E.matrixWorld).applyMatrix4(Ie)),Array.isArray(ze)){let qe=Te.groups;for(let dt=0,bt=qe.length;dt<bt;dt++){let He=qe[dt],xt=ze[He.materialIndex];xt&&xt.visible&&A.push(E,Te,xt,$,Je.z,He,F)}}else ze.visible&&A.push(E,Te,ze,$,Je.z,null,F)}}}let Ne=E.children;for(let Ve=0,Te=Ne.length;Ve<Te;Ve++)Rr(Ne[Ve],F,$,G)}function za(E,F,$,G){let{opaque:W,transmissive:Ne,transparent:Ve}=E;R.setupLightsView($),be===!0&&se.setGlobalState(I.clippingPlanes,$),G&&Le.viewport(he.copy(G)),W.length>0&&ls(W,F,$),Ne.length>0&&ls(Ne,F,$),Ve.length>0&&ls(Ve,F,$),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Os(E,F,$,G){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[G.id]===void 0){let He=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:He?fi:kn,minFilter:ki,samples:Math.max(4,Ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}let Ne=R.state.transmissionRenderTarget[G.id],Ve=G.viewport||he;Ne.setSize(Ve.z*I.transmissionResolutionScale,Ve.w*I.transmissionResolutionScale);let Te=I.getRenderTarget(),ze=I.getActiveCubeFace(),qe=I.getActiveMipmapLevel();I.setRenderTarget(Ne),I.getClearColor(z),ie=I.getClearAlpha(),ie<1&&I.setClearColor(16777215,.5),I.clear(),St&&N.render($);let dt=I.toneMapping;I.toneMapping=wi;let bt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),R.setupLightsView(G),be===!0&&se.setGlobalState(I.clippingPlanes,G),ls(E,$,G),Ke.updateMultisampleRenderTarget(Ne),Ke.updateRenderTargetMipmap(Ne),_t.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let xt=0,Xt=F.length;xt<Xt;xt++){let Ot=F[xt],{object:zt,geometry:yn,material:Xe,group:nn}=Ot;if(Xe.side===jt&&zt.layers.test(G.layers)){let Ct=Xe.side;Xe.side=An,Xe.needsUpdate=!0,Ha(zt,$,G,yn,Xe,nn),Xe.side=Ct,Xe.needsUpdate=!0,He=!0}}He===!0&&(Ke.updateMultisampleRenderTarget(Ne),Ke.updateRenderTargetMipmap(Ne))}I.setRenderTarget(Te,ze,qe),I.setClearColor(z,ie),bt!==void 0&&(G.viewport=bt),I.toneMapping=dt}function ls(E,F,$){let G=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Ne=E.length;W<Ne;W++){let Ve=E[W],{object:Te,geometry:ze,group:qe}=Ve,dt=Ve.material;dt.allowOverride===!0&&G!==null&&(dt=G),Te.layers.test($.layers)&&Ha(Te,F,$,ze,dt,qe)}}function Ha(E,F,$,G,W,Ne){H!==null&&W.isNodeMaterial&&H.setObject(E,W),E.onBeforeRender(I,F,$,G,W,Ne),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(I,F,$,G,E,Ne),W.transparent===!0&&W.side===jt&&W.forceSinglePass===!1?(W.side=An,W.needsUpdate=!0,I.renderBufferDirect($,F,G,W,E,Ne),W.side=Ei,W.needsUpdate=!0,I.renderBufferDirect($,F,G,W,E,Ne),W.side=jt):I.renderBufferDirect($,F,G,W,E,Ne),E.onAfterRender(I,F,$,G,W,Ne)}function Wi(E){let F=0;for(let $ of E)$.texture!==null&&F++;return F}function cs(E,F,$){F.isScene!==!0&&(F=ut);let G=tt.get(E),W=R.state.lights,Ne=R.state.shadowsArray,Ve=W.state.version,Te=ce.getParameters(E,W.state,Ne,F,$,R.state.lightProbeGridArray),ze=ce.getProgramCacheKey(Te),qe=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,G.fog=F.fog;let dt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=C.get(E.envMap||G.environment,dt),G.envMapRotation=G.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",Lt),qe=new Map,G.programs=qe,G.programVariants=new Map);let bt=qe.get(ze);if(bt!==void 0){if(G.currentProgram===bt&&G.lightsStateVersion===Ve)return ds(E,Te),bt}else Te.uniforms=ce.getUniforms(E),H!==null&&E.isNodeMaterial&&H.build(E,$,Te),E.onBeforeCompile(Te,I),bt=ce.acquireProgram(Te,ze),qe.set(ze,bt),G.uniforms=Te.uniforms;let He=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(He.clippingPlanes=se.uniform),ds(E,Te),G.needsLights=Ga(E),G.lightsStateVersion=Ve,G.needsLights&&(He.ambientLightColor.value=W.state.ambient,He.lightProbe.value=W.state.probe,He.sunLights.value=W.state.sun,He.sunLightShadows.value=W.state.sunShadow,He.directionalLights.value=W.state.directional,He.directionalLightShadows.value=W.state.directionalShadow,He.spotLights.value=W.state.spot,He.spotLightShadows.value=W.state.spotShadow,He.rectAreaLights.value=W.state.rectArea,He.ltc_1.value=W.state.rectAreaLTC1,He.ltc_2.value=W.state.rectAreaLTC2,He.pointLights.value=W.state.point,He.pointLightShadows.value=W.state.pointShadow,He.hemisphereLights.value=W.state.hemi,He.sunShadowMatrix.value=W.state.sunShadowMatrix,He.sunShadowCascade.value=W.state.sunShadowCascade,He.directionalShadowMatrix.value=W.state.directionalShadowMatrix,He.spotLightMatrix.value=W.state.spotLightMatrix,He.spotLightMap.value=W.state.spotLightMap,He.pointShadowMatrix.value=W.state.pointShadowMatrix),G.numLightProbeGrids=Wi(R.state.lightProbeGridArray),G.currentProgram=bt,G.uniformsList=null,bt}function hs(E,F,$,G,W){let Ne=tt.get(E),Ve=Ne.currentProgram.id+","+G+","+W,Te=Ne.programVariants.get(Ve);return Te===void 0?(Te=cs(E,F,$),Ne.programVariants.set(Ve,Te)):(Ne.currentProgram=Te,Ne.uniformsList=null,Ne.outputColorSpace=G,Ne.toneMapping=W),Te}function us(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=yr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ds(E,F){let $=tt.get(E);$.outputColorSpace=F.outputColorSpace,$.batching=F.batching,$.batchingColor=F.batchingColor,$.instancing=F.instancing,$.instancingColor=F.instancingColor,$.instancingMorph=F.instancingMorph,$.skinning=F.skinning,$.morphTargets=F.morphTargets,$.morphNormals=F.morphNormals,$.morphColors=F.morphColors,$.morphTargetsCount=F.morphTargetsCount,$.numClippingPlanes=F.numClippingPlanes,$.numIntersection=F.numClipIntersection,$.vertexAlphas=F.vertexAlphas,$.vertexTangents=F.vertexTangents,$.toneMapping=F.toneMapping}function Cr(E,F,$,G,W){F.isScene!==!0&&(F=ut),Ke.resetTextureUnits();let Ne=F.fog,Ve=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?F.environment:null,Te=re===null?I.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Tt.workingColorSpace,ze=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,qe=C.get(G.envMap||Ve,ze),dt=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,bt=!!$.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),He=!!$.morphAttributes.position,xt=!!$.morphAttributes.normal,Xt=!!$.morphAttributes.color,Ot=wi;G.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Ot=I.toneMapping);let zt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,yn=zt!==void 0?zt.length:0,Xe=tt.get(G),nn=R.state.lights;if(be===!0&&(Be===!0||E!==le)){let $t=E===le&&G.id===J;se.setState(G,E,$t)}let Ct=!1,gi=!1;G.version===Xe.__version?Xe.needsLights&&Xe.lightsStateVersion!==nn.state.version||W.isBatchedMesh&&Xe.batching===!1||!W.isBatchedMesh&&Xe.batching===!0||W.isBatchedMesh&&Xe.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Xe.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Xe.instancing===!1||!W.isInstancedMesh&&Xe.instancing===!0||W.isSkinnedMesh&&Xe.skinning===!1||!W.isSkinnedMesh&&Xe.skinning===!0||W.isInstancedMesh&&Xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xe.instancingMorph===!1&&W.morphTexture!==null||Xe.envMap!==qe||G.fog===!0&&Xe.fog!==Ne||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==se.numPlanes||Xe.numIntersection!==se.numIntersection)||Xe.vertexAlphas!==dt||Xe.vertexTangents!==bt||Xe.morphTargets!==He||Xe.morphNormals!==xt||Xe.morphColors!==Xt||Xe.morphTargetsCount!==yn||Xe.numLightProbeGrids!==Wi(R.state.lightProbeGridArray)?Ct=!0:(Xe.outputColorSpace!==Te||Xe.toneMapping!==Ot)&&(gi=!0):(Ct=!0,Xe.__version=G.version);let rn=Xe.currentProgram;(Ct===!0||gi===!0)&&(rn=gi===!0?hs(G,F,W,Te,Ot):cs(G,F,W),H&&G.isNodeMaterial&&H.onUpdateProgram(G,rn,Xe));let Xi=!1,ii=!1,Yn=!1,rt=rn.getUniforms(),cn=Xe.uniforms;if(Le.useProgram(rn.program)&&(Xi=!0,ii=!0,Yn=!0),G.id!==J&&(J=G.id,ii=!0),Xi||le!==E){Le.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),rt.setValue(B,"projectionMatrix",E.projectionMatrix),rt.setValue(B,"viewMatrix",E.matrixWorldInverse);let an=rt.map.cameraPosition;an!==void 0&&an.setValue(B,je.setFromMatrixPosition(E.matrixWorld)),Ft.logarithmicDepthBuffer&&rt.setValue(B,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&rt.setValue(B,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,ii=!0,Yn=!0)}if(Xe.needsLights&&(nn.state.sunShadowMap.length>0&&rt.setValue(B,"sunShadowMap",nn.state.sunShadowMap,Ke),nn.state.directionalShadowMap.length>0&&rt.setValue(B,"directionalShadowMap",nn.state.directionalShadowMap,Ke),nn.state.spotShadowMap.length>0&&rt.setValue(B,"spotShadowMap",nn.state.spotShadowMap,Ke),nn.state.pointShadowMap.length>0&&rt.setValue(B,"pointShadowMap",nn.state.pointShadowMap,Ke)),W.isSkinnedMesh){rt.setOptional(B,W,"bindMatrix"),rt.setOptional(B,W,"bindMatrixInverse");let $t=W.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),rt.setValue(B,"boneTexture",$t.boneTexture,Ke))}W.isBatchedMesh&&(rt.setOptional(B,W,"batchingTexture"),rt.setValue(B,"batchingTexture",W._matricesTexture,Ke),rt.setOptional(B,W,"batchingIdTexture"),rt.setValue(B,"batchingIdTexture",W._indirectTexture,Ke),rt.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&rt.setValue(B,"batchingColorTexture",W._colorsTexture,Ke));let Rn=$.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&ne.update(W,$,rn),(ii||Xe.receiveShadow!==W.receiveShadow)&&(Xe.receiveShadow=W.receiveShadow,rt.setValue(B,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&F.environment!==null&&(cn.envMapIntensity.value=F.environmentIntensity),cn.dfgLUT!==void 0&&(cn.dfgLUT.value=Cx()),ii){if(rt.setValue(B,"toneMappingExposure",I.toneMappingExposure),Xe.needsLights&&ka(cn,Yn),Ne&&G.fog===!0&&Ee.refreshFogUniforms(cn,Ne),Ee.refreshMaterialUniforms(cn,G,Se,ke,R.state.transmissionRenderTarget[E.id]),Xe.needsLights&&Xe.numLightProbeGrids>0){let $t=v,an=0;for(let M of R.state.lightProbeGridArray)M.texture!==null&&($t.textures[an]=M.texture,$t.min[an]=M.boundingBox.min,$t.max[an]=M.boundingBox.max,$t.resolution[an]=M.resolution,an++);for(let M in $t)$t[M].length=an;cn.probesSH.value=$t.textures,cn.probesMin.value=$t.min,cn.probesMax.value=$t.max,cn.probesResolution.value=$t.resolution}yr.upload(B,us(Xe),cn,Ke)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(yr.upload(B,us(Xe),cn,Ke),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&rt.setValue(B,"center",W.center),rt.setValue(B,"modelViewMatrix",W.modelViewMatrix),rt.setValue(B,"normalMatrix",W.normalMatrix),rt.setValue(B,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let $t=G.uniformsGroups;for(let an=0,M=$t.length;an<M;an++){let T=$t[an];Qe.update(T,rn),Qe.bind(T,rn)}}return rn}function ka(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Ga(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(E,F,$){let G=tt.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),tt.get(E.texture).__webglTexture=F,tt.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:$,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let $=tt.get(E);$.__webglFramebuffer=F,$.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,$=0){re=E,K=F,X=$;let G=null,W=!1,Ne=!1;if(E){let Te=tt.get(E);if(Te.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(B.FRAMEBUFFER,Te.__webglFramebuffer),he.copy(E.viewport),Pe.copy(E.scissor),Ze=E.scissorTest,Le.viewport(he),Le.scissor(Pe),Le.setScissorTest(Ze),J=-1;return}else if(Te.__webglFramebuffer===void 0)Ke.setupRenderTarget(E);else if(Te.__hasExternalTextures)Ke.rebindTextures(E,tt.get(E.texture).__webglTexture,tt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let dt=E.depthTexture;if(Te.__boundDepthTexture!==dt){if(dt!==null&&tt.has(dt)&&(E.width!==dt.image.width||E.height!==dt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ke.setupDepthRenderbuffer(E)}}let ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Ne=!0);let qe=tt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[F])?G=qe[F][$]:G=qe[F],W=!0):E.samples>0&&Ke.useMultisampledRTT(E)===!1?G=tt.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?G=qe[$]:G=qe,he.copy(E.viewport),Pe.copy(E.scissor),Ze=E.scissorTest}else he.copy($e).multiplyScalar(Se).floor(),Pe.copy(lt).multiplyScalar(Se).floor(),Ze=yt;if($!==0&&(G=Z),Le.bindFramebuffer(B.FRAMEBUFFER,G)&&Le.drawBuffers(E,G),Le.viewport(he),Le.scissor(Pe),Le.setScissorTest(Ze),W){let Te=tt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Te.__webglTexture,$)}else if(Ne){let Te=F;for(let ze=0;ze<E.textures.length;ze++){let qe=tt.get(E.textures[ze]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ze,qe.__webglTexture,$,Te)}}else if(E!==null&&$!==0){let Te=tt.get(E.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Te.__webglTexture,$)}J=-1};function Bs(E){let F=tt.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Ft.textureFormatReadable(E.format),F.__typeReadable=Ft.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,$,G,W,Ne,Ve,Te=0){if(!(E&&E.isWebGLRenderTarget)){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(ze=ze[Ve],Array.isArray(ze)&&(ze=ze[0])),ze){Le.bindFramebuffer(B.FRAMEBUFFER,ze);try{let qe=E.textures[Te],dt=qe.format,bt=qe.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let He=Bs(qe);if(He.__formatReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){ht("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-G&&$>=0&&$<=E.height-W&&B.readPixels(F,$,G,W,pe.convert(dt),pe.convert(bt),Ne)}finally{let qe=re!==null?tt.get(re).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,F,$,G,W,Ne,Ve,Te=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=tt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ve!==void 0&&(ze=ze[Ve],Array.isArray(ze)&&(ze=ze[0])),ze)if(F>=0&&F<=E.width-G&&$>=0&&$<=E.height-W){Le.bindFramebuffer(B.FRAMEBUFFER,ze);let qe=E.textures[Te],dt=qe.format,bt=qe.type;E.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Te);let He=Bs(qe);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let xt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.bufferData(B.PIXEL_PACK_BUFFER,Ne.byteLength,B.STREAM_READ),B.readPixels(F,$,G,W,pe.convert(dt),pe.convert(bt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let Xt=re!==null?tt.get(re).__webglFramebuffer:null;Le.bindFramebuffer(B.FRAMEBUFFER,Xt);let Ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Qu(B,Ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,xt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ne),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(xt),B.deleteSync(Ot),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,$=0){let G=Math.pow(2,-$),W=Math.floor(E.image.width*G),Ne=Math.floor(E.image.height*G),Ve=F!==null?F.x:0,Te=F!==null?F.y:0;Ke.setTexture2D(E,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,Ve,Te,W,Ne),Le.unbindTexture()},this.copyTextureToTexture=function(E,F,$=null,G=null,W=0,Ne=0){let Ve,Te,ze,qe,dt,bt,He,xt,Xt,Ot=E.isCompressedTexture?E.mipmaps[Ne]:E.image;if($!==null)Ve=$.max.x-$.min.x,Te=$.max.y-$.min.y,ze=$.isBox3?$.max.z-$.min.z:1,qe=$.min.x,dt=$.min.y,bt=$.isBox3?$.min.z:0;else{let rt=Math.pow(2,-W);Ve=Math.floor(Ot.width*rt),Te=Math.floor(Ot.height*rt),E.isDataArrayTexture?ze=Ot.depth:E.isData3DTexture?ze=Math.floor(Ot.depth*rt):ze=1,qe=0,dt=0,bt=0}G!==null?(He=G.x,xt=G.y,Xt=G.z):(He=0,xt=0,Xt=0);let zt=pe.convert(F.format),yn=pe.convert(F.type),Xe;F.isData3DTexture?(Ke.setTexture3D(F,0),Xe=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ke.setTexture2DArray(F,0),Xe=B.TEXTURE_2D_ARRAY):(Ke.setTexture2D(F,0),Xe=B.TEXTURE_2D),Le.activeTexture(B.TEXTURE0),Le.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Le.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Le.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let nn=Le.getParameter(B.UNPACK_ROW_LENGTH),Ct=Le.getParameter(B.UNPACK_IMAGE_HEIGHT),gi=Le.getParameter(B.UNPACK_SKIP_PIXELS),rn=Le.getParameter(B.UNPACK_SKIP_ROWS),Xi=Le.getParameter(B.UNPACK_SKIP_IMAGES);Le.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),Le.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),Le.pixelStorei(B.UNPACK_SKIP_PIXELS,qe),Le.pixelStorei(B.UNPACK_SKIP_ROWS,dt),Le.pixelStorei(B.UNPACK_SKIP_IMAGES,bt);let ii=E.isDataArrayTexture||E.isData3DTexture,Yn=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let rt=tt.get(E),cn=tt.get(F),Rn=tt.get(rt.__renderTarget),$t=tt.get(cn.__renderTarget);Le.bindFramebuffer(B.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let an=0;an<ze;an++)ii&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(E).__webglTexture,W,bt+an),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,tt.get(F).__webglTexture,Ne,Xt+an)),B.blitFramebuffer(qe,dt,qe+Ve,dt+Te,He,xt,He+Ve,xt+Te,B.DEPTH_BUFFER_BIT,B.NEAREST);Le.bindFramebuffer(B.READ_FRAMEBUFFER,null),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||tt.has(E)){let rt=tt.get(E),cn=tt.get(F);Le.bindFramebuffer(B.READ_FRAMEBUFFER,D),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,q);for(let Rn=0;Rn<ze;Rn++)ii?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,rt.__webglTexture,W,bt+Rn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,rt.__webglTexture,W),Yn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,cn.__webglTexture,Ne,Xt+Rn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,cn.__webglTexture,Ne),W!==0?B.blitFramebuffer(qe,dt,qe+Ve,dt+Te,He,xt,He+Ve,xt+Te,B.COLOR_BUFFER_BIT,B.NEAREST):Yn?B.copyTexSubImage3D(Xe,Ne,He,xt,Xt+Rn,qe,dt,Ve,Te):B.copyTexSubImage2D(Xe,Ne,He,xt,qe,dt,Ve,Te);Le.bindFramebuffer(B.READ_FRAMEBUFFER,null),Le.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Yn?E.isDataTexture||E.isData3DTexture?B.texSubImage3D(Xe,Ne,He,xt,Xt,Ve,Te,ze,zt,yn,Ot.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Xe,Ne,He,xt,Xt,Ve,Te,ze,zt,Ot.data):B.texSubImage3D(Xe,Ne,He,xt,Xt,Ve,Te,ze,zt,yn,Ot):E.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ne,He,xt,Ve,Te,zt,yn,Ot.data):E.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ne,He,xt,Ot.width,Ot.height,zt,Ot.data):B.texSubImage2D(B.TEXTURE_2D,Ne,He,xt,Ve,Te,zt,yn,Ot);Le.pixelStorei(B.UNPACK_ROW_LENGTH,nn),Le.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ct),Le.pixelStorei(B.UNPACK_SKIP_PIXELS,gi),Le.pixelStorei(B.UNPACK_SKIP_ROWS,rn),Le.pixelStorei(B.UNPACK_SKIP_IMAGES,Xi),Ne===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Xe),Le.unbindTexture()},this.initRenderTarget=function(E){tt.get(E).__webglFramebuffer===void 0&&Ke.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?Ke.setTextureCube(E,0):E.isData3DTexture?Ke.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ke.setTexture2DArray(E,0):Ke.setTexture2D(E,0),Le.unbindTexture()},this.resetState=function(){K=0,X=0,re=null,Le.reset(),Ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}};function Gd(i,e,t=1){let n=new st,s=new zn({color:"#d6ebe5",transparent:!0,opacity:.075,depthWrite:!1,roughness:.08,clearcoat:1,side:jt}),r=new Et({color:"#6e8b80",roughness:.3,metalness:.55}),a=new Et({color:"#c8d9d0",roughness:.23,metalness:.75}),o=new We(new Ut(i-.035,e-.035),s);n.add(o);function l(p,x,b,v,A,R,_){let w=new We(new un(p,x,b),_);return w.position.set(v,A,R),n.add(w),w}for(let p of[-1,1])l(.045,e,.055,p*i/2,0,.02,r),l(i,.045,.055,0,p*e/2,.02,r);let c=i/2-.035,u=e/2-.25,h=l(.022,.27,.028,c,u,.09,a);for(let p of[-.12,.12])l(.024,.022,.085,c,u+p,.045,a);let d=0,f=0,g=new P;function y(p,x,b,v=0){g.set(p,x,b),n.position.copy(g),n.rotation.y=v}function m(p,x=!1){return Math.abs(d-f)<.001?!1:(d=x?f:d+Math.sign(f-d)*Math.min(Math.abs(f-d),p*3.5),n.position.x=g.x+t*i*.88*d,!0)}return{group:n,pane:o,handle:h,closed:g,setClosedPosition:y,tick:m,toggle(){f=f?0:1},open(){f=1},get isOpen(){return d>.97},get opening(){return f===1}}}function Vd(i=8){let e=i;return()=>(e=Math.imul(e,1664525)+1013904223|0,(e>>>0)/4294967296)}function Wd(i,e=1,t=1){let n=new Hn(i);return n.colorSpace=Yt,n.wrapS=n.wrapT=tr,n.repeat.set(e,t),n.anisotropy=8,n}function Sh({floor:i=!1}={}){let e=document.createElement("canvas");e.width=e.height=i?1024:512;let t=e.getContext("2d"),n=e.width,s=e.height,r=Vd(i?17:42),a=t.createImageData(n,s),o=s/(i?8:4),l=Array.from({length:i?8:4},()=>r()*12-6);for(let h=0;h<s;h++)for(let d=0;d<n;d++){let f=Math.floor(h/o),g=h%o/o,y=Math.sin(g*92+Math.sin(d*.009+f)*.8)*1.7+Math.sin(g*330+Math.sin(d*.015)*2.5)*1.2,m=(r()-.5)*3.5,p=h%o<2?-23:0,x=l[f]+y+m+p,b=(h*n+d)*4;a.data[b]=204+x,a.data[b+1]=176+x*.85,a.data[b+2]=132+x*.65,a.data[b+3]=255}t.putImageData(a,0,0);for(let h=0;h<(i?8:4);h++){let d=Math.round((h*271+90)%n),f=h*o;if(t.fillStyle="rgba(61,40,20,.18)",t.fillRect(d,f,2,o),h%3===1){let g=(h*197+241)%n,y=f+o*.58;t.save(),t.translate(g,y),t.scale(2.8,.55);for(let m=3;m<22;m+=3)t.strokeStyle=`rgba(68,40,20,${.14-m*.003})`,t.lineWidth=.8,t.beginPath(),t.ellipse(0,0,m,m*.65,0,0,Math.PI*2),t.stroke();t.restore()}}let c=Wd(e,i?11:1,i?9:1),u=c.clone();return u.colorSpace=Qn,new Et({map:c,bumpMap:u,bumpScale:i?.009:.004,roughness:i?.58:.68,color:i?"#eddcc6":"#f6dfc4"})}function Xd(){let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createImageData(128,128),n=Vd(44);for(let a=0;a<t.data.length;a+=4){let o=239+(n()-.5)*13;t.data[a]=o,t.data[a+1]=o-5,t.data[a+2]=o-13,t.data[a+3]=255}e.putImageData(t,0,0);let s=Wd(i,8,4),r=s.clone();return r.colorSpace=Qn,new Et({map:s,color:"#ddd4bc",bumpMap:r,bumpScale:.018,roughness:.94})}function _n(i,e,t,n,s=.035){let r=Math.min(s,i/4,e/4,t/4),a=new ui,o=-i/2,l=-e/2;a.moveTo(o+r,l),a.lineTo(o+i-r,l),a.quadraticCurveTo(o+i,l,o+i,l+r),a.lineTo(o+i,l+e-r),a.quadraticCurveTo(o+i,l+e,o+i-r,l+e),a.lineTo(o+r,l+e),a.quadraticCurveTo(o,l+e,o,l+e-r),a.lineTo(o,l+r),a.quadraticCurveTo(o,l,o+r,l);let c=new Ms(a,{depth:Math.max(.001,t-2*r),bevelEnabled:!0,bevelSize:r*.65,bevelThickness:r,bevelSegments:2,steps:1,curveSegments:5});c.translate(0,0,-t/2+r);let u=c.attributes.uv,h=c.attributes.position;for(let f=0;f<u.count;f++)u.setXY(f,(h.getX(f)+i/2)/i,(h.getY(f)+e/2)/e);let d=new We(c,n);return d.castShadow=!0,d.receiveShadow=!0,d}function as(i,e,t=.18){let n=document.createElement("canvas");n.width=n.height=64;let s=n.getContext("2d"),r=s.createRadialGradient(32,32,5,32,32,32);r.addColorStop(0,`rgba(27,25,17,${t})`),r.addColorStop(.62,`rgba(27,25,17,${t*.7})`),r.addColorStop(1,"rgba(27,25,17,0)"),s.fillStyle=r,s.fillRect(0,0,64,64);let a=new We(new Ut(i,e),new Zt({map:new Hn(n),transparent:!0,depthWrite:!1,toneMapped:!1}));return a.rotation.x=-Math.PI/2,a.position.y=.012,a}function Ix(i=4){let e=new Map,t=0,n=0,s=!1;function r(){for(s=!1;t<i;){let o=[...e.values()].filter(l=>l.state==="pending").sort((l,c)=>c.priority-l.priority||l.sequence-c.sequence)[0];if(!o)break;o.state="running",t++,Promise.resolve().then(o.run).then(l=>{o.state="done",o.resolve(l)},l=>{o.state="failed",o.reject(l)}).finally(()=>{t--,a()})}}function a(){s||(s=!0,queueMicrotask(r))}return{enqueue(o,l,c=0){let u=e.get(o);if(u&&u.state!=="failed")return u.priority=Math.max(u.priority,c),u.promise;let h={key:o,run:l,priority:c,sequence:n++,state:"pending"};return h.promise=new Promise((d,f)=>{h.resolve=d,h.reject=f}),e.set(o,h),a(),h.promise},promote(o,l=10){let c=e.get(o);c&&c.state==="pending"&&(c.priority=Math.max(c.priority,l),a())},forget(o){let l=e.get(o);return l&&l.state!=="running"&&l.state!=="pending"?e.delete(o):!1},stats(){let o=[...e.values()];return{running:t,pending:o.filter(l=>l.state==="pending").length,done:o.filter(l=>l.state==="done").length,failed:o.filter(l=>l.state==="failed").length}}}}var Sr=Ix(4);function br(i,e,t=0,n=12e3){return Sr.enqueue(i,()=>new Promise((s,r)=>{let a=new Image,o,l=c=>{clearTimeout(o),a.onload=a.onerror=null,c?s(a):(a.src="",r(new Error("Image unavailable: "+i)))};a.onload=()=>l(!0),a.onerror=()=>l(!1),a.decoding="async",o=setTimeout(()=>l(!1),n),a.src=e}),t)}function qd(i=20){let e=new Map,t=new Set;function n(){for(;e.size>i;){let s=[...e.keys()].find(a=>!t.has(a));if(s===void 0)break;let r=e.get(s);e.delete(s),r()}}return{focus(s){t=new Set(s),n()},touch(s,r){e.delete(s),e.set(s,r),n()},size:()=>e.size}}var bh=qd(20);function Yd(i){bh.focus(i)}function kl(i,e){let t=i.image,n=r=>r?.naturalWidth||r?.width||0,s=r=>r?.naturalHeight||r?.height||0;t&&(n(t)!==n(e)||s(t)!==s(e))&&i.dispose(),i.image=e,i.needsUpdate=!0}function Er(i){let e=window.ProducePhotos?.[window.GroceryGame.photoKey(i)];if(e)return e;let t=window.ProductPhotos||{};return t[i.variantId]||t[`${i.productId}-${i.pack}`]||t[i.productId]}function Zd(i,e){let t=new pn;t.colorSpace=Yt,t.userData.callbacks=[];let n=window.FastAssets?.products?.[i.id];if(n){t.userData.presentation={aspect:n.aspect,outline:n.outline,sideColor:new ct().fromArray(n.sideColor)};let r=!1,a=!1,o=!1,l=null,c=0,u=-1/0,h="",d=new Image;d.onload=()=>{r||(kl(t,d),window.dispatchEvent(new Event("grocery:texturepreview")))},d.src=n.placeholder;let f=()=>{window.dispatchEvent(new Event("grocery:texturepreview"))},g=()=>{a=!1,kl(t,l||d),t.userData.quality=l?"shelf":"preview",Sr.forget(h),f()};return t.userData.quality="preview",t.userData.requestDetail=()=>{if(a){bh.touch(i.id,g);return}o||Date.now()-u<4e3||(o=!0,h="product-detail:"+i.id+":"+c++,br(h,n.large,100,2e4).then(y=>{o=!1,a=!0,r=!0,kl(t,y),t.userData.quality="detail",bh.touch(i.id,g),f()},()=>{o=!1,u=Date.now()}))},br("product:"+i.id,n.small).then(y=>{r=!0,l=y,a||(kl(t,y),t.userData.quality="shelf"),e(!0)},()=>e(a)),t}let s=new Image;return s.onload=()=>{let r=i.render_crop,a=Array.isArray(r)?r:r?[r.x,r.y,r.x+r.width,r.y+r.height]:[0,0,1,1],o=s.naturalWidth,l=s.naturalHeight,c=typeof window<"u"&&window.innerWidth<=700?320:640,u=Math.min(1,c/Math.max(o*(a[2]-a[0]),l*(a[3]-a[1]))),h=document.createElement("canvas");h.width=Math.max(1,Math.round(o*(a[2]-a[0])*u)),h.height=Math.max(1,Math.round(l*(a[3]-a[1])*u));let d=h.getContext("2d",{willReadFrequently:!0});d.drawImage(s,o*a[0],l*a[1],o*(a[2]-a[0]),l*(a[3]-a[1]),0,0,h.width,h.height);for(let z of i.render_labels||[]){let[ie,me,ke,Se]=z.rect,xe=(ie-a[0])/(a[2]-a[0])*h.width,fe=(me-a[1])/(a[3]-a[1])*h.height,$e=ke/(a[2]-a[0])*h.width,lt=Se/(a[3]-a[1])*h.height;d.fillStyle="#f7edcc",d.fillRect(xe,fe,$e,lt),d.strokeStyle="#beaa79",d.lineWidth=1,d.strokeRect(xe,fe,$e,lt),d.fillStyle="#5e7051",d.font=`${Math.max(5,lt*.55)}px Arial`,d.textAlign="center",d.fillText(z.text,xe+$e/2,fe+lt*.72,$e-3)}i.render_polygon&&(d.globalCompositeOperation="destination-in",d.beginPath(),i.render_polygon.forEach(([z,ie],me)=>{let ke=(z-a[0])/(a[2]-a[0])*h.width,Se=(ie-a[1])/(a[3]-a[1])*h.height;me?d.lineTo(ke,Se):d.moveTo(ke,Se)}),d.closePath(),d.fill(),d.globalCompositeOperation="source-over");let f=d.getImageData(0,0,h.width,h.height),g=f.data,y=h.width*h.height,m=new Uint8Array(y),p=new Int32Array(y),x=Uint8Array.from({length:y},(z,ie)=>g[ie*4+3]),b=0,v=0,A=z=>{if(m[z])return;m[z]=1;let ie=z*4,me=Math.min(g[ie],g[ie+1],g[ie+2]),ke=Math.max(g[ie],g[ie+1],g[ie+2]);(g[ie+3]<8||me>228&&ke-me<24)&&(p[v++]=z)};for(let z=0;z<h.width;z++)A(z),A((h.height-1)*h.width+z);for(let z=0;z<h.height;z++)A(z*h.width),A(z*h.width+h.width-1);for(;b<v;){let z=p[b++],ie=z%h.width,me=Math.floor(z/h.width);g[z*4+3]=0,ie&&A(z-1),ie<h.width-1&&A(z+1),me&&A(z-h.width),me<h.height-1&&A(z+h.width)}let R=new Int32Array(h.height).fill(h.width),_=new Int32Array(h.height).fill(-1),w=new Int32Array(h.width).fill(h.height),O=new Int32Array(h.width).fill(-1);for(let z=0;z<h.height;z++)for(let ie=0;ie<h.width;ie++)g[(z*h.width+ie)*4+3]<100||(R[z]=Math.min(R[z],ie),_[z]=Math.max(_[z],ie),w[ie]=Math.min(w[ie],z),O[ie]=Math.max(O[ie],z));for(let z=0;z<h.height;z++)for(let ie=0;ie<h.width;ie++){let me=z*h.width+ie;x[me]>100&&g[me*4+3]<8&&ie>R[z]+1&&ie<_[z]-1&&z>w[ie]+1&&z<O[ie]-1&&(g[me*4+3]=x[me])}let I=h.width,U=h.height,H=0,Z=0,D=0,q=0,K=0,X=0;for(let z=0;z<h.height;z++)for(let ie=0;ie<h.width;ie++){let me=(z*h.width+ie)*4;g[me+3]<100||(I=Math.min(I,ie),H=Math.max(H,ie),U=Math.min(U,z),Z=Math.max(Z,z),(ie+z)%17===0&&Math.min(g[me],g[me+1],g[me+2])<210&&(D+=g[me],q+=g[me+1],K+=g[me+2],X++))}d.putImageData(f,0,0);let re=document.createElement("canvas");re.width=Math.max(1,H-I+1),re.height=Math.max(1,Z-U+1);let J=re.getContext("2d",{willReadFrequently:!0});J.drawImage(h,I,U,re.width,re.height,0,0,re.width,re.height);let le=J.getImageData(0,0,re.width,re.height).data,he=[],Pe=[],Ze=Math.min(72,re.height);for(let z=0;z<Ze;z++){let ie=Math.round(z*(re.height-1)/Math.max(1,Ze-1)),me=re.width,ke=-1;for(let Se=0;Se<re.width;Se++)le[(ie*re.width+Se)*4+3]>130&&(me=Math.min(me,Se),ke=Math.max(ke,Se));ke>=me&&(he.push([me/re.width-.5,.5-ie/re.height]),Pe.push([(ke+1)/re.width-.5,.5-ie/re.height]))}t.image=re,t.userData.presentation={aspect:re.width/re.height,outline:Px([...Pe,...he.reverse()]),sideColor:X?new ct(D/X/255,q/X/255,K/X/255).convertSRGBToLinear():new ct("#b2a080")},t.needsUpdate=!0,t.userData.callbacks.forEach(z=>z(t.userData.presentation)),t.userData.callbacks=[],e(!0)},s.onerror=()=>e(!1),s.src=i.path,t}function Px(i){let e=(s,r,a)=>{let o=a[0]-r[0],l=a[1]-r[1],c=Math.max(0,Math.min(1,((s[0]-r[0])*o+(s[1]-r[1])*l)/(o*o+l*l||1)));return Math.hypot(s[0]-r[0]-c*o,s[1]-r[1]-c*l)},t=s=>{if(s.length<4)return s;let r=0,a=0;for(let o=1;o<s.length-1;o++){let l=e(s[o],s[0],s[s.length-1]);l>r&&(r=l,a=o)}return r>.018?[...t(s.slice(0,a+1)).slice(0,-1),...t(s.slice(a))]:[s[0],s[s.length-1]]},n=Math.floor(i.length/2);return[...t(i.slice(0,n+1)).slice(0,-1),...t([...i.slice(n),i[0]]).slice(0,-1)]}var Dx={milk:[.72,.34,.22],yogurt:[.56,.31,.18],butter:[.28,.48,.14],cheese:[.48,.3,.12],eggs:[.36,.63,.28],flour:[.57,.38,.2],rice:[.57,.38,.2],sugar:[.55,.37,.18],salt:[.49,.34,.16],pasta:[.72,.25,.1],oil:[.73,.25,.18],water:[.7,.25,.18],icecream:[.49,.27,.07]};function os(i,e,t,n,s){if(i.id==="eggs")return Lx(e,n);let r=new st,a={bottle:[.73,.28,.18],carton:[.7,.34,.18],can:[.45,.34,.16],jar:[.44,.35,.18],tray:[.42,.65,.16],punnet:[.38,.62,.2],bag:[.61,.45,.16],packet:[.57,.39,.1],box:[.61,.48,.15],flat:[.4,.65,.08],tub:[.39,.45,.18],tube:[.68,.3,.1],roll:[.55,.45,.18],sausage:[.48,.49,.13],pump:[.7,.33,.18],bar:[.28,.45,.12]},[o,l,c]=Dx[i.id]||a[i.shelfKind]||(i.category==="bread"?[.56,.72,.2]:[.43,.64,.16]);c*=["bottle","can","jar","carton","box","tub"].includes(i.shelfKind)||["milk","water","oil","yogurt"].includes(i.id)?.52:.32,i.category==="bread"&&(c=.022),i.id==="milk"&&e.pack===500&&(o*=.76,l*=.82),i.id==="icecream"&&e.pack>=300&&(o=.43,l=.48,c=.04),i.category==="produce"&&i.shelfKind!=="punnet"&&(o=i.id==="pineapple"?.38:i.id==="cabbage"?.3:.24,l=i.id==="banana"?.34:.28,c=.025),l=Math.min(l,n*.83);let u=new Zt({map:t,side:Ei,transparent:!1,alphaTest:.15,alphaToCoverage:!0,toneMapped:!1});u.userData.owned=!0;let h=new We(new Ut(1,1),u);h.castShadow=!0,h.userData.lotId=e.id,r.add(h);let d=new We(new Ut(1,1),u);d.rotation.y=Math.PI,d.castShadow=!0,d.userData.lotId=e.id,r.add(d);let f=new Et({color:"#aa9777",roughness:.86});f.userData.owned=!0;let g=new Et({color:"#aa9777",roughness:.75});g.userData.owned=!0;let y=null,m=null,p=x=>{let b=Math.min(l,o*x.aspect),v=Math.min(o,l/x.aspect);if(h.scale.set(b,v,1),h.position.set(0,v/2,.015),d.scale.set(b,v,1),d.position.set(0,v/2,-c-.015),y&&(r.remove(y),y.geometry.dispose()),x.outline.length>5){let A=new ui(x.outline.map(([_,w])=>new ve(_*b,w*v+v/2))),R=new Ms(A,{depth:c,bevelEnabled:!0,bevelSize:.0025,bevelThickness:.0025,bevelSegments:1,steps:1,curveSegments:1});R.translate(0,0,-c),f.color.copy(x.sideColor).multiplyScalar(.92),g.color.copy(x.sideColor),y=new We(R,[g,f]),y.castShadow=!0,y.userData.lotId=e.id,r.add(y)}if(r.userData.dimensions={width:b,height:v,depth:c},i.shelfKind==="punnet"||i.id==="chicken-breast"){m&&(r.remove(m),m.traverse(I=>{I.isMesh&&I.geometry.dispose()})),m=new st;let A=new Et({color:"#e7f1e6",transparent:!0,opacity:.23,roughness:.23,depthWrite:!1});A.userData.owned=!0;let R=new Et({color:"#adc1b0",transparent:!0,opacity:.72,roughness:.35});R.userData.owned=!0;let _=b*1.14,w=v*1.1,O=new We(new un(_,w,c+.045),A);O.position.set(0,v/2,-c/2),m.add(O);for(let I of[0,w]){let U=new We(new un(_,.012,c+.06),R);U.position.set(0,I-v*.05,-c/2),m.add(U)}for(let I of[-_/2,_/2]){let U=new We(new un(.012,w,c+.06),R);U.position.set(I,v/2,-c/2),m.add(U)}m.traverse(I=>{I.isMesh&&(I.userData.lotId=e.id,I.castShadow=!0)}),r.add(m)}s()};return h.scale.set(l,o,1),h.position.set(0,o/2,.015),d.scale.set(l,o,1),d.position.set(0,o/2,-c-.015),t.userData.presentation?p(t.userData.presentation):t.userData.callbacks.push(p),{group:r,front:h,back:d}}function Lx(i,e,t=!0){let n=new st,s=Math.min(.66,e*.87),r=s/.66,a=f=>{let g=new Et({color:f,roughness:.88});return g.userData.owned=!0,g},o=a("#d4c7a4"),l=a("#b7a780"),c=_n(.66,.13,.4,o,.026);c.position.y=.07,n.add(c);let u=_n(.67,.018,.41,l,.01);u.position.y=.14,n.add(u);let h=_n(.67,.09,.41,o,.028);h.position.y=.19,n.add(h);for(let f of[-.22,0,.22]){let g=_n(.045,.012,.37,l,.006);g.position.set(f,.238,0),n.add(g)}if(t){let f=document.createElement("canvas");f.width=384,f.height=192;let g=f.getContext("2d");g.fillStyle="#3b604c",g.fillRect(0,0,384,192),g.strokeStyle="#cfb781",g.lineWidth=4,g.strokeRect(10,10,364,172),g.textAlign="center",g.fillStyle="#fff3cf",g.font="bold 52px Arial",g.fillText("\u04E8\u041D\u0414\u04E8\u0413",192,82),g.font="32px Arial",g.fillText("6 \u0448\u0438\u0440\u0445\u044D\u0433",192,135);let y=new Hn(f);y.colorSpace=Yt,y.userData.owned=!0;let m=new Zt({map:y,toneMapped:!1});m.userData.owned=!0;let p=new We(new Ut(.36,.2),m);p.rotation.x=-Math.PI/2,p.position.set(0,.259,0),n.add(p);let x=new We(new Ut(.3,.105),m);x.position.set(0,.16,.231),n.add(x),n.add(wr(.78,.52))}n.updateMatrixWorld(!0);let d=new Ln().setFromObject(n).min.y;return d<0&&n.children.forEach(f=>{f.position.y-=d}),n.scale.setScalar(r),n.traverse(f=>{f.isMesh&&(f.userData.lotId=i.id,f.castShadow=!0,f.receiveShadow=!0)}),n.userData.dimensions={width:s,height:.25*r,depth:.41*r},{group:n,front:c,back:h,lid:h}}function Ls(i,e,t,n,s=!0){i.scale.setScalar(1),i.position.set(0,0,0);let r=i.parent;r?.remove(i),i.updateMatrixWorld(!0);let a=new Ln().setFromObject(i),o=a.getSize(new P),l=Math.min(s?1/0:1,e/Math.max(.001,o.x),t/Math.max(.001,o.y),n/Math.max(.001,o.z));return i.scale.setScalar(l),i.position.set(-(a.min.x+a.max.x)*l/2,-a.min.y*l,-(a.min.z+a.max.z)*l/2),r?.add(i),l}function Eh(i,e,t,n,s=()=>{}){let r=new st,a=n?9:3,o=new Ut(1,1),l=new Zt({map:e,side:jt,alphaTest:.18,alphaToCoverage:!0,toneMapped:!1});l.userData.owned=!0;let c=new On(o,l,a);c.userData.lotId=i.id,r.add(c);let u=()=>{let h=e.userData.presentation?.aspect||1,d=t*(n?.27:.72),f=n?.26:.49,g=Math.min(d,f*h),y=g/h,m=new Ht;for(let p=0;p<a;p++){let x=n?Math.floor(p/3):p;m.position.set(n?(p%3-1)*t*.25:(p-1)*t*.09,y/2+.04+(n?(2-x)*.045:0),n?-.2+x*.19:-.12+p*.18),m.rotation.set(0,0,0),m.scale.set(g,y,1),m.updateMatrix(),c.setMatrixAt(p,m.matrix)}c.instanceMatrix.needsUpdate=!0,c.computeBoundingBox(),c.computeBoundingSphere(),s()};return e.userData.presentation?u():(u(),e.userData.callbacks.push(u)),{group:r,front:c}}function $d(i,e,t,n=()=>{}){let s=new st,r=new Zt({map:e,side:jt,alphaTest:.18,alphaToCoverage:!0,toneMapped:!1});r.userData.owned=!0;let a=new On(new Ut(1,1),r,t.length);a.userData.lotId=i.id,a.castShadow=!0,s.add(a);let o=()=>{let l=e.userData.presentation?.aspect||1,c=new Ht;t.forEach((u,h)=>{let d=Math.min(u.width,u.height*l),f=d/l;c.position.set(u.x,f/2,u.z),c.scale.set(d,f,1),c.updateMatrix(),a.setMatrixAt(h,c.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingBox(),a.computeBoundingSphere(),n()};return e.userData.presentation?o():(o(),e.userData.callbacks.push(o)),{group:s,front:a}}function wr(i,e){let t=document.createElement("canvas");t.width=t.height=64;let n=t.getContext("2d"),s=n.createRadialGradient(32,32,5,32,32,31);s.addColorStop(0,"rgba(35,27,16,.37)"),s.addColorStop(.55,"rgba(35,27,16,.18)"),s.addColorStop(1,"rgba(35,27,16,0)"),n.fillStyle=s,n.fillRect(0,0,64,64);let r=new Hn(t);r.userData.owned=!0;let a=new Zt({map:r,transparent:!0,depthWrite:!1});a.userData.owned=!0;let o=new We(new Ut(i,e),a);return o.rotation.x=-Math.PI/2,o.position.y=.009,o.renderOrder=1,o}function Gl(i){return["buuz","bansh"].includes(i.id)?"frozen-dumplings":i.id==="mini-khuushuur"?"frozen-bakery":i.department==="frozen-vegetables"||["frozen-broccoli","frozen-peas","frozen-fries"].includes(i.id)?"frozen-vegetables":i.storage==="frozen"?i.category==="meat"?"frozen-meat":"frozen":i.id==="tilapia"?"frozen":i.category}var Jd=["fish-flounder","shrimp","fish-mackerel","fish-saury","tilapia","frozen-fish","crab-sticks"];function Kd(i){return[...i].sort((e,t)=>{let n=Jd.indexOf(e.key),s=Jd.indexOf(t.key);return(n<0?99:n)-(s<0?99:s)||e.key.localeCompare(t.key)})}function Vl(i){return["produce","ready","pantry-2"].includes(i)}function Qd(i,e){let t={x:e.x,z:e.z,rotation:e.rotation};return Vl(i)?[t,{x:e.x-Math.sin(e.rotation)*.56,z:e.z-Math.cos(e.rotation)*.56,rotation:e.rotation+Math.PI}]:[t]}function jd(i,e){let t=Math.abs(Math.sin(e.rotation))<.5;if(!Vl(i))return{x0:e.x-(t?e.width/2+.15:.57),x1:e.x+(t?e.width/2+.15:.57),z0:e.z-(t?.53:e.width/2+.15),z1:e.z+(t?.63:e.width/2+.15)};let n=i==="ready"?-.28:-.265,s=i==="ready"?1.06:.945,r=e.x+Math.sin(e.rotation)*n,a=e.z+Math.cos(e.rotation)*n;return{x0:r-(t?e.width/2+.15:s),x1:r+(t?e.width/2+.15:s),z0:a-(t?s:e.width/2+.15),z1:a+(t?s:e.width/2+.15)}}function Ua(i){let e=new Map;for(let t of i){let n=t.variantId||t.productId;e.has(n)||e.set(n,{key:n,lots:[]}),e.get(n).lots.push(t)}return[...e.values()].sort((t,n)=>t.key.localeCompare(n.key)).map(t=>({...t,lots:t.lots.sort((n,s)=>n.pack-s.pack||n.batch.localeCompare(s.batch))}))}function ef(i,e){let t=Math.max(1,Math.floor((e-.35)/.62))*3,n=Ua(i),s=[];for(let r=0;r<n.length;r+=t){let a=n.slice(r,r+t),o=Math.min(Math.floor(t/3),Math.max(5,Math.ceil(a.length/3)));s.push({families:a,columns:o,spacing:(e-.35)/o})}return s}function tf(i){let e=Ua(i);if(!e.length)return{bins:[],labels:[]};if(e.length>8)throw Error("A freezer chest has eight physical compartments");let t=Array.from({length:8},(a,o)=>({family:e[o%e.length],x:(o%4-1.5)*.78,z:o<4?.29:-.29,y:.815})),n=Math.min(4,e.length),s=e.length<=2?1.2:.7,r=e.map((a,o)=>({family:a,width:s,x:(o%n-(n-1)/2)*(e.length<=2?1.56:.78),y:e.length>4?o<4?.66:.29:.47,z:.69}));return{bins:t,labels:r}}function nf(i,e,t,n=()=>{}){let s=new st,r=new st;r.rotation.x=-Math.PI/2,s.add(r);let a,o=()=>{a&&Ls(s,.67,.105,.48,!1),n()};return a=os(i,e,t,.68,o),r.add(a.group),o(),{group:s,front:a.front}}function sf(i,e){let t=Math.max(9,i.length),n=3,s=Math.ceil(t/n);return Array.from({length:t},(r,a)=>({lot:i[a%i.length],x:(a%n-1)*e*.28,z:-.14+Math.floor(a/n)*Math.min(.19,.45/Math.max(1,s-1)),width:e*.25,height:.24,depth:.15}))}var ei={width:3.6,height:2.6,frame:.12,y:2.8,z:12.72,centers:Array.from({length:7},(i,e)=>-12.3+e*4.1)},Wl=["Morning","Day","Evening","Night"];function wh(i=1,e=0){let t=Number.isSafeInteger(i)&&i>0?i:1,n=Number.isFinite(e)?Math.max(0,Math.min(1,e)):0,s=(t-1)%4,r=n*3,a=Math.min(2,Math.floor(r)),o=r-a;return{weather:s,phase:r,season:s===3?"Winter":"Summer",from:a,to:a+1,blend:o*o*(3-2*o)}}function rf(i,e,t){let n=i.isTexture?i:Object.values(i)[0],s=new st,r={key:"",weather:0,phase:0},a={mapA:{value:n},mapB:{value:n},blend:{value:0},time:{value:0},weather:{value:0},darkness:{value:0}},o=new Jn({uniforms:a,toneMapped:!1,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
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
    }`}),l=(d,f,g,y,m,p,x)=>{let b=new We(new un(d,f,g),x);return b.position.set(y,m,p),s.add(b),b};for(let[d,f]of ei.centers.entries()){let g=new Ut(ei.width,ei.height),y=g.attributes.uv;for(let v=0;v<y.count;v++)y.setX(v,(d%3+1-y.getX(v))/3);let m=new We(g,o);m.position.set(f,ei.y,ei.z),m.rotation.y=Math.PI,m.userData.exterior=!0,s.add(m);let p=ei.frame,x=ei.width,b=ei.height;for(let v of[-1,1])l(p,b+2*p,.16,f+v*(x+p)/2,ei.y,12.62,e);for(let v of[-1,1])l(x,p,.16,f,ei.y+v*(b+p)/2,12.62,e);l(.055,b,.12,f,ei.y,12.61,e),l(x+2*p+.1,.11,.43,f,ei.y-b/2-p-.055,12.52,t)}function c(d={}){let f=wh(d.day,d.progress),g=`${f.weather}:${f.phase}`;return g===r.key?!1:(Object.assign(r,f,{key:g}),a.mapA.value=i["city"+f.season+Wl[f.from]]||n,a.mapB.value=i["city"+f.season+Wl[f.to]]||n,a.blend.value=f.blend,a.weather.value=f.weather,a.darkness.value=Math.max(0,f.phase-2),!0)}let u=0;function h(d,f,g,y){return g||!f||y||r.weather<2||(u+=d,u<.04)?!1:(a.time.value+=u,u=0,!0)}return c(),{group:s,set:c,tick:h,material:o,uniforms:a}}function af(i){let e=Ua(i);return e.length?Array.from({length:8},(t,n)=>({family:e[n%e.length],x:.1275+n%4*.615,z:n<4?.43:-.1,y:n<4?.86:1.04,row:n<4?0:1,column:n%4})):[]}function of(i,e,t,n=()=>{},s={width:.51,height:.31,depth:.43}){let r=new st,a=new st;a.rotation.x=-.92,r.add(a);let o=()=>{a.children.length&&Ls(r,s.width,s.height,s.depth,!1),n()},l=os(i,e,t,.64,o);return a.add(l.group),o(),{group:r,front:l.front}}var Th=Object.freeze({basket:Object.freeze({width:.84,depth:.6,bottom:.015,top:.5}),handle:Object.freeze({y:.738,z:.447,width:.738}),floor:-.6,contents:Object.freeze({min:Object.freeze({x:-.302,y:.034,z:-.183}),max:Object.freeze({x:.302,y:.485,z:.203})})});function Rh(i){return i.userData.owned=!0,i}function Fa(i,e,t,n){let s=Rh(new Et({color:e,roughness:t,metalness:n}));return s.name=i,s}function Xl(i,e,t,n,s=8){let r=Rh(new Bn(1,1,1,s)),a=new On(r,n,t.length);a.name=e,a.castShadow=!0,a.receiveShadow=!0;let o=new Ht,l=new P,c=new P,u=new P,h=new P(0,1,0);return t.forEach(([d,f,g],y)=>{c.set(...d),u.set(...f),l.subVectors(u,c);let m=l.length();o.position.copy(c).add(u).multiplyScalar(.5),o.quaternion.setFromUnitVectors(h,l.normalize()),o.scale.set(g,m+g*.14,g),o.updateMatrix(),a.setMatrixAt(y,o.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingBox(),a.computeBoundingSphere(),i.add(a),a}function xn(i,e,t,n){i.push([e,t,n])}function Ah(i,e,t,n,s,r,a){let o=[[t-r,s-r,0],[-t+r,s-r,Math.PI/2],[-t+r,n+r,Math.PI],[t-r,n+r,Math.PI*1.5]],l=[];for(let[c,u,h]of o)for(let d=0;d<=6;d++){let f=h+d/6*Math.PI/2;l.push([c+Math.cos(f)*r,e,u+Math.sin(f)*r])}l.forEach((c,u)=>xn(i,c,l[(u+1)%l.length],a))}function Oa(i,e,t,n,s){let r=new On(Rh(t),n,s.length);r.name=e,r.castShadow=!0,r.receiveShadow=!0;let a=new Ht;return s.forEach(({position:o,rotation:l=[0,0,0],scale:c=[1,1,1]},u)=>{a.position.set(...o),a.rotation.set(...l),a.scale.set(...c),a.updateMatrix(),r.setMatrixAt(u,a.matrix)}),r.instanceMatrix.needsUpdate=!0,r.computeBoundingBox(),r.computeBoundingSphere(),i.add(r),r}function lf(){let i=new st;i.name="shopping-cart",i.userData.asset="wire-shopping-cart",i.userData.bounds=Th;let e=Fa("zinc-plated basket wire","#c7d1d1",.32,.72),t=Fa("polished tubular steel","#d4dddd",.23,.82),n=Fa("dark rubber tyres","#303b39",.87,.02),s=Fa("green rubber handle","#315e4d",.72,.02),r=Fa("caster fork steel","#aebbbb",.39,.65),a=[],o=[],l=[],c=[],u=.023,h=.488,d={x:.33,front:-.205,back:.225},f={x:.41,front:-.29,back:.29};for(let b=0;b<7;b++){let v=b/6,A=Ti.lerp(u,h,v);Ah(a,A,Ti.lerp(d.x,f.x,v),Ti.lerp(d.front,f.front,v),Ti.lerp(d.back,f.back,v),.025,.0026)}Ah(o,h,f.x,f.front,f.back,.035,.01),Ah(o,u,d.x,d.front,d.back,.025,.005);for(let b=0;b<=12;b++){let v=b/12*2-1;for(let A of["front","back"])xn(a,[v*(d.x-.025),u,d[A]],[v*(f.x-.035),h,f[A]],.0025)}for(let b of[-1,1]){for(let v=0;v<=9;v++){let A=v/9;xn(a,[b*d.x,u,Ti.lerp(d.front+.025,d.back-.025,A)],[b*f.x,h,Ti.lerp(f.front+.035,f.back-.035,A)],.0025)}xn(o,[b*.325,u,.212],[b*.404,h,.279],.005),xn(o,[b*.325,u,-.192],[b*.404,h,-.279],.005)}for(let b=0;b<=10;b++){let v=-.302+b*.0604;xn(a,[v,.024,d.front+.025],[v,.024,d.back-.025],.0027)}for(let b=0;b<=7;b++){let v=-.18+b*.0542;xn(a,[-.305,.024,v],[.305,.024,v],.0027)}for(let b of[-1,1]){let v=b*.308;xn(l,[b*.362,.733,.447],[b*.357,.451,.282],.0115),xn(l,[b*.357,.451,.282],[v,-.403,.23],.012),xn(l,[v,-.403,.23],[v,-.435,-.23],.013),xn(l,[v,-.435,-.23],[b*.313,.011,-.183],.01),xn(l,[v,-.435,-.23],[b*.313,.011,.21],.008),xn(l,[b*.325,-.01,-.185],[b*.325,-.01,.205],.008)}xn(l,[-.308,-.403,.23],[.308,-.403,.23],.011),xn(l,[-.308,-.435,-.23],[.308,-.435,-.23],.011);for(let b of[-.2,0,.2])xn(l,[b,-.396,-.207],[b,-.373,.215],.004);xn(l,[-.285,-.385,-.085],[.285,-.385,-.085],.004),xn(c,[-.345,.738,.447],[.345,.738,.447],.022),xn(l,[-.367,.738,.447],[.367,.738,.447],.012),Xl(i,"basket mesh and wire floor",a,e,6),Xl(i,"rounded basket rims",o,t,10),Xl(i,"tubular undercarriage",l,t,10),Xl(i,"green handle grip",c,s,14),Oa(i,"handle rounded end caps",new Ss(.022,12,8),s,[-1,1].map(b=>({position:[b*.345,.738,.447]})));let g=[],y=[],m=[],p=[];for(let b of[-1,1])for(let v of[-.23,.23]){let A=b*.308;g.push({position:[A,-.527,v],rotation:[0,0,Math.PI/2]}),y.push({position:[A,-.527,v],rotation:[0,0,Math.PI/2]});for(let R of[-.029,.029])m.push({position:[A+R,-.481,v+.012],rotation:[.13,0,0]});p.push({position:[A,-.436,v+.01]})}Oa(i,"four rubber caster wheels",new Bn(.068,.068,.044,18),n,g),Oa(i,"wheel axle hubs",new Bn(.026,.026,.048,12),r,y),Oa(i,"paired caster forks",new un(.008,.082,.036),r,m),Oa(i,"caster swivel bearings",new Bn(.018,.018,.025,10),t,p);let x=new st;return x.name="cart-contents",i.add(x),i.updateMatrixWorld(!0),{group:i,contents:x,contentsBounds:Th.contents,bounds:Th}}function cf(){let i=new st,e=new Et({color:"#426b56",roughness:.42,metalness:.14});e.userData.owned=!0;let t=[],n=(h,d,f=.009)=>t.push([h,d,f]),s=.32;for(let h of[.025,.1,.18,.25,s]){let d=h/s,f=.34+d*.08,g=.23+d*.07;n([-f,h,-g],[f,h,-g],h===s?.016:.008),n([-f,h,g],[f,h,g],h===s?.016:.008),n([-f,h,-g],[-f,h,g],h===s?.016:.008),n([f,h,-g],[f,h,g],h===s?.016:.008)}for(let h=-.32;h<=.33;h+=.08)for(let d of[-1,1])n([h,.025,d*.235],[h*1.2,s,d*.3],.008);for(let h=-.2;h<=.21;h+=.08)for(let d of[-1,1])n([d*.34,.025,h],[d*.42,s,h*1.3],.008);for(let h=-.31;h<=.32;h+=.08)n([h,.025,-.23],[h,.025,.23],.007);for(let h=-.2;h<=.21;h+=.08)n([-.34,.025,h],[.34,.025,h],.007);n([-.42,s,0],[-.29,.55,0],.014),n([-.29,.55,0],[.29,.55,0],.019),n([.29,.55,0],[.42,s,0],.014);let r=new Bn(1,1,1,8);r.userData.owned=!0;let a=new On(r,e,t.length),o=new Ht,l=new P,c=new P(0,1,0);t.forEach(([h,d,f],g)=>{let y=new P(...h),m=new P(...d);o.position.copy(y).add(m).multiplyScalar(.5);let p=l.subVectors(m,y).length();o.quaternion.setFromUnitVectors(c,l.normalize()),o.scale.set(f,p,f),o.updateMatrix(),a.setMatrixAt(g,o.matrix)}),a.instanceMatrix.needsUpdate=!0,a.computeBoundingSphere(),a.castShadow=!0,a.receiveShadow=!0,i.add(a);let u=new st;return i.add(u),{group:i,contents:u}}function Ch(i,e,t,n){let s=e<=900&&t>=e,r=n>6?4:3,a=Math.max(1,Math.ceil(n/r)),o=.58,l=i==="cart"?.35:.38,c=i==="cart"?.4:s?.3:.33;return{portrait:s,baseY:i==="cart"?.6:s?.79:.9,slots:Array.from({length:n},(u,h)=>({x:(h%r-(Math.min(r,n)-1)/2)*(o/r),y:i==="cart"?.037:.025,z:(Math.floor(h/r)-(a-1)/2)*(l/a),width:o/r*.9,height:c,depth:l/a*.88}))}}var hf=new Nt,uf=new es,Nx=new P;function df(i,e,t){return!e||!t||t.isEmpty()?!1:(e.updateWorldMatrix(!0,!1),hf.copy(e.matrixWorld).invert(),uf.copy(i).applyMatrix4(hf),uf.intersectBox(t,Nx)!==null)}function ff(i,e,t,n){let s=new st;s.name="transparent-produce-pouch";let r=A=>(A.userData.owned=!0,A),a=[[.06,.33,.25],[.13,.46,.4],[.35,.46,.46],[.59,.43,.4],[.7,.32,.28],[.78,.045,.055]],o=16,l=[],c=[];a.forEach(([A,R,_])=>{for(let w=0;w<o;w++){let O=w/o*Math.PI*2;l.push(Math.cos(O)*R*e,A*t,Math.sin(O)*_*n)}});for(let A=0;A<a.length-1;A++)for(let R=0;R<o;R++){let _=A*o+R,w=A*o+(R+1)%o,O=_+o,I=w+o;c.push(_,O,w,w,O,I)}let u=r(new tn);u.setAttribute("position",new gt(l,3)),u.setIndex(c),u.computeVertexNormals();let h=r(new Et({color:"#9eb5aa",roughness:.32,metalness:0,transparent:!0,opacity:.09,depthWrite:!1,side:jt,forceSinglePass:!0})),d=new We(u,h);d.renderOrder=2,s.add(d);let f=r(new Ut(e,t,10,10)),g=f.attributes.position;for(let A=0;A<g.count;A++){let R=g.getX(A)/(e*.5),_=g.getY(A)/(t*.5);g.setZ(A,n*(.37+.1*Math.max(0,1-R*R)*Math.max(0,1-_*_)))}f.computeVertexNormals();let y=r(new Zt({map:i,transparent:!0,alphaTest:.015,depthWrite:!1,side:jt,toneMapped:!1,opacity:.88,forceSinglePass:!0})),m=new We(f,y);m.position.y=t/2,m.renderOrder=3,s.add(m);let p=[[0,.78],[-.32,.71],[-.44,.63],[-.46,.2],[-.43,.08],[0,.045],[.43,.08],[.46,.2],[.44,.63],[.32,.71]].map(([A,R])=>new P(A*e,R*t,n*.475)),x=r(new tn().setFromPoints(new hr(p,!0,"centripetal").getPoints(64))),b=r(new lr({color:"#71897b",transparent:!0,opacity:.55,depthWrite:!1})),v=new Qr(x,b);return v.renderOrder=4,s.add(v),s}var ql=class extends xs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new un;e.deleteAttribute("uv");let t=new Et({side:An}),n=new Et,s=new Es(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new We(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new On(e,n,6),o=new Ht;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new We(e,Tr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new We(e,Tr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new We(e,Tr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new We(e,Tr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new We(e,Tr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new We(e,Tr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Tr(i){return new pa({color:0,emissive:16777215,emissiveIntensity:i})}var Ux=new P(0,1,0),Fx=new Et({color:"#392b20",roughness:1}),Ph=new Et({color:"#4e733c",roughness:.68}),Ih=new Map,Ba;function Ox(){if(Ba)return Ba;let i=document.createElement("canvas");i.width=128,i.height=512;let e=i.getContext("2d"),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"#79906f"),t.addColorStop(.48,"#d1dcc0"),t.addColorStop(.52,"#cad8b7"),t.addColorStop(1,"#74896b"),e.fillStyle=t,e.fillRect(0,0,128,512),e.strokeStyle="#d3ddb9",e.lineWidth=1.2;for(let n=30;n<500;n+=32)for(let s of[-1,1])e.beginPath(),e.moveTo(64,n),e.bezierCurveTo(64+20*s,n+10,64+39*s,n+45,64+58*s,n+58),e.stroke();return e.strokeStyle="#e8eccb",e.lineWidth=2,e.beginPath(),e.moveTo(64,0),e.lineTo(64,512),e.stroke(),Ba=new Hn(i),Ba.colorSpace=Yt,Ba}function mf(i){return Ih.has(i)||Ih.set(i,new zn({map:Ox(),color:i,roughness:.42,clearcoat:.3,clearcoatRoughness:.5,side:jt})),Ih.get(i)}function pf(i,e,t,n=0){let a=[],o=[],l=[];for(let h=0;h<=20;h++){let d=h/20,f=i.getPoint(d),g=i.getTangent(d),y=new P().crossVectors(g,Ux);y.lengthSq()<.001?y.set(1,0,0):y.normalize();let m=new P().crossVectors(y,g).normalize(),p=Math.pow(Math.sin(Math.PI*d),.78)*e*(.9+.1*Math.sin(d*8));for(let x=0;x<=6;x++){let b=x/6*2-1,v=f.clone().addScaledVector(y,p*b);if(v.addScaledVector(m,(Math.abs(b)**1.8*n-.012*Math.abs(b))*Math.sin(Math.PI*d)),a.push(v.x,v.y,v.z),o.push(x/6,d),h<20&&x<6){let A=h*7+x,R=A+6+1;l.push(A,R,A+1,R,R+1,A+1)}}}let c=new tn;c.setAttribute("position",new gt(a,3)),c.setAttribute("uv",new gt(o,2)),c.setIndex(l),c.computeVertexNormals();let u=new We(c,t);return u.castShadow=!0,u.receiveShadow=!0,u}function Yl(i,e,t,n=18){let s=new We(new fa(i,n,e,7,!1),t);return s.castShadow=!0,s}function gf(i,e=.42,t=.28){let n=new st,s=new zn({color:i,roughness:.27,metalness:.03,clearcoat:.65,clearcoatRoughness:.28}),r=[[0,0],[.73,0],[.82,.025],[.87,.09],[.96,.65],[1,.91],[.98,1],[.88,1],[.87,.92],[.81,.13],[0,.13]].map(([u,h])=>new ve(u*t,h*e)),a=new We(new ua(r,48),s);a.castShadow=!0,a.receiveShadow=!0,n.add(a);let o=new We(new Bn(t*.86,t*.86,.025,32),Fx);o.position.y=e*.88,n.add(o);let l=new We(new fr(t*.955,.012,8,48),s);l.rotation.x=Math.PI/2,l.position.y=e*.97,n.add(l);let c=new Et({color:"#ad8750",roughness:.35,metalness:.55});for(let u of[.16,.24]){let h=new We(new fr(t*(.87+u*.12),.0035,6,48),c);h.rotation.x=Math.PI/2,h.position.y=e*u,n.add(h)}return n}function Dh({flowers:i=!0,color:e="#dfd3b6",seed:t=0}={}){let n=gf(e),s=["#315d32","#426b35","#365f30","#567a3b"];for(let r=0;r<13;r++){let a=r*2.39996+t*.3,o=r>=8,l=o?.28+r%3*.04:.43+r%4*.052,c=.32+r%5*.045,u=(g,y)=>new P(Math.cos(a)*g,y,Math.sin(a)*g),h=u(.035,.37),d=u(.12,c+.25);n.add(Yl(new ys(h,u(.06,c+.12),d),.0075,Ph));let f=new Hi(d,u(l*.5,c+.68),u(l*.9,c+.65),u(l,c+(o?.62:.37)));n.add(pf(f,.105+r%3*.017,mf(s[r%s.length]),-.035))}if(i){let r=document.createElement("canvas");r.width=128,r.height=256;let a=r.getContext("2d"),o=a.createLinearGradient(0,0,128,0);o.addColorStop(0,"#d7ddc6"),o.addColorStop(.5,"#fffdf1"),o.addColorStop(1,"#dde1cd"),a.fillStyle=o,a.fillRect(0,0,128,256),a.strokeStyle="#abb98d35",a.lineWidth=.8;for(let h=0;h<10;h++)a.beginPath(),a.moveTo(64,15+h*23),a.bezierCurveTo(49,25+h*23,33,45+h*23,12,56+h*23),a.moveTo(64,15+h*23),a.bezierCurveTo(79,25+h*23,95,45+h*23,116,56+h*23),a.stroke();let l=new Hn(r);l.colorSpace=Yt;let c=new zn({map:l,color:"#fffcf0",roughness:.4,clearcoat:.15,side:jt,emissive:"#685e38",emissiveIntensity:.045}),u=new Et({color:"#c8b259",roughness:.8});for(let h=0;h<3;h++){let d=new st,f=-.4+h*2.12;d.position.set([-.2,.19,.02][h],[1.18,1.02,1.31][h],[.06,-.12,.12][h]),d.rotation.y=Math.PI+(h-1)*.34,d.rotation.z=(h-1)*.12;let g=new P(d.position.x,d.position.y,d.position.z);n.add(Yl(new Hi(new P(.01,.36,0),new P(.07,.8,.03),g.clone().add(new P(-.03,-.18,.02)),g),.0085,Ph));let y=new Hi(new P(0,-.065,.01),new P(.015,.1,.02),new P(-.03,.28,-.09),new P(.035,.38,-.12));d.add(pf(y,.135,c,.095));let m=new We(new na(.024,.19,4,10),u);m.position.set(0,.105,.065),m.rotation.x=-.14,d.add(m);let p=new On(new Ss(.0035,4,4),u,60),x=new Ht;for(let b=0;b<60;b++){let v=b*2.4;x.position.set(Math.cos(v)*.023,.015+b/60*.18,.065+Math.sin(v)*.023),x.updateMatrix(),p.setMatrixAt(b,x.matrix)}d.add(p),n.add(d)}}return n}function _f(){let i=gf("#b88861",.32,.23),e=new Et({color:"#bdad7b",roughness:1});for(let n=0;n<3;n++){let s=n*Math.PI*2/3;i.add(Yl(new ur(new P(Math.cos(s)*.21,.16,Math.sin(s)*.21),new P(0,1.15,0)),.008,e,1))}let t=new da(new ui().moveTo(0,0).bezierCurveTo(-.16,.14,-.09,.25,0,.18).bezierCurveTo(.09,.25,.16,.14,0,0),10);for(let n=0;n<6;n++){let s=n*2.4,r=.32+n%2*.16,a=.75+n%3*.18,o=new Hi(new P(0,.25,0),new P(Math.cos(s)*r,.5,Math.sin(s)*r),new P(Math.cos(s)*r,-.45,Math.sin(s)*r),new P(Math.cos(s)*r*.7,-a,Math.sin(s)*r*.7));i.add(Yl(o,.006,Ph));for(let l=1;l<8;l++){let c=l/8,u=new We(t,mf(l%2?"#52783c":"#648348"));u.position.copy(o.getPoint(c)),u.rotation.set(.2,s+(l%2?.5:-.5),(l%2?1:-1)*.65),u.scale.setScalar(.65+(1-c)*.4),u.castShadow=!0,i.add(u)}}return i}var Lh={cart:{offset:1.15,center:1.07,halfWidth:.36,halfDepth:.39},basket:{offset:1,center:1,halfWidth:.35,halfDepth:.32}},$l={x0:-15.5,x1:15.5,z0:-12.5,z1:12.5},Ar=1e-6;function xf(i,e,t,n,s=$l){return i<s.x0+t||i>s.x1-t||e<s.z0+t||e>s.z1-t?!1:!n.some(r=>{let a=i-Math.max(r.x0,Math.min(i,r.x1)),o=e-Math.max(r.z0,Math.min(e,r.z1));return a*a+o*o<t*t-Ar})}function Bx(i,e){let t=i.x-(e.x0+e.x1)/2,n=i.z-(e.z0+e.z1)/2,s=(e.x1-e.x0)/2,r=(e.z1-e.z0)/2,a=Math.cos(i.yaw),o=-Math.sin(i.yaw),l=-Math.sin(i.yaw),c=-Math.cos(i.yaw);return Math.abs(t)<s+Math.abs(a)*i.hw+Math.abs(l)*i.hd-Ar&&Math.abs(n)<r+Math.abs(o)*i.hw+Math.abs(c)*i.hd-Ar&&Math.abs(t*a+n*o)<i.hw+s*Math.abs(a)+r*Math.abs(o)-Ar&&Math.abs(t*l+n*c)<i.hd+s*Math.abs(l)+r*Math.abs(c)-Ar}function zx(i,e,t,n){let s=Lh[n];return s?{x:i-Math.sin(t)*s.center,z:e-Math.cos(t)*s.center,yaw:t,hw:s.halfWidth,hd:s.halfDepth}:null}function Zl(i,e,t,n,s,r=$l){if(![i,e,t].every(Number.isFinite)||i<r.x0+.32||i>r.x1-.32||e<r.z0+.32||e>r.z1-.32||s.some(u=>{let h=i-Math.max(u.x0,Math.min(i,u.x1)),d=e-Math.max(u.z0,Math.min(e,u.z1));return h*h+d*d<.32*.32-Ar}))return!1;let o=zx(i,e,t,n);if(!o)return!0;let l=Math.abs(Math.cos(t))*o.hw+Math.abs(Math.sin(t))*o.hd,c=Math.abs(Math.sin(t))*o.hw+Math.abs(Math.cos(t))*o.hd;return o.x-l<r.x0||o.x+l>r.x1||o.z-c<r.z0||o.z+c>r.z1?!1:!s.some(u=>Bx(o,u))}function Jl(i,e,t,n,s,r=$l){let a={...i},o=Math.max(1,Math.ceil(Math.hypot(e,t)/.06));for(let l=0;l<o;l++){let c=a.x+e/o,u=a.z+t/o;Zl(c,a.z,a.yaw,n,s,r)&&(a.x=c),Zl(a.x,u,a.yaw,n,s,r)&&(a.z=u)}return a}function yf(i,e,t,n,s=$l){let r={...i},a=Math.max(1,Math.ceil(Math.abs(e)/.035));for(let o=0;o<a;o++){let l={...r,yaw:r.yaw+e/a};if(Zl(l.x,l.z,l.yaw,t,n,s)){r=l;continue}let c=!1;for(let u of[.04,.08,.12]){for(let h of[r.yaw+Math.PI,r.yaw-Math.PI/2,r.yaw+Math.PI/2,r.yaw]){let d=r.x-Math.sin(h)*u,f=r.z-Math.cos(h)*u,g=Jl(r,d-r.x,f-r.z,t,n,s);if(!(Math.hypot(g.x-d,g.z-f)>.001)&&Zl(d,f,l.yaw,t,n,s)){r={x:d,z:f,yaw:l.yaw},c=!0;break}}if(c)break}if(!c)break}return r}var kt=window.GroceryGame,Ns=window.GroceryPrices,Jt=window.GameWorldBridge,US=document.getElementById("world"),mi=document.getElementById("world-canvas"),Vt=i=>document.getElementById(i),vf={width:32,depth:26,halfWidth:16,halfDepth:13},It={x:6.5,z:10.8},ti={meat:{name:"\u041C\u0410\u0425, \u0417\u0410\u0413\u0410\u0421",x:-12,z:-12,rotation:0,width:5.1,to:[-12,-9.2],yaw:0},dairy:{name:"\u0421\u04AE\u04AE, \u04E8\u041D\u0414\u04E8\u0413",x:-6,z:-12,rotation:0,width:5.1,to:[-6,-9.2],yaw:0},bread:{name:"\u0428\u0418\u041D\u042D \u0422\u0410\u041B\u0425",x:0,z:-12,rotation:0,width:5.1,to:[0,-9.2],yaw:0},pantry:{name:"\u04E8\u0414\u04E8\u0420 \u0422\u0423\u0422\u041C\u042B\u041D \u0425\u04AE\u041D\u0421",x:6,z:-12,rotation:0,width:5.1,to:[6,-9.2],yaw:0},canned:{name:"\u041B\u0410\u0410\u0417\u0410\u041B\u0421\u0410\u041D \u0425\u04AE\u041D\u0421, \u0421\u041E\u0423\u0421",x:12,z:-12,rotation:0,width:5.1,to:[12,-9.2],yaw:0},frozen:{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u0425\u04AE\u041D\u0421",x:-15,z:-7.5,rotation:Math.PI/2,width:5.1,to:[-12.2,-7.5],yaw:Math.PI/2},cold:{name:"\u0423\u0421, \u0417\u0410\u0419\u0420\u041C\u0410\u0413",x:-15,z:0,rotation:Math.PI/2,width:5.1,to:[-12.45,-1.05],yaw:Math.PI/2,pitch:-.28},household:{name:"\u0410\u0425\u0423\u0419\u041D \u0411\u0410\u0420\u0410\u0410",x:-15,z:7.5,rotation:Math.PI/2,width:5.1,to:[-12.2,7.5],yaw:Math.PI/2},drinks:{name:"\u0423\u041D\u0414\u0410\u0410, \u0416\u04AE\u04AE\u0421",x:15,z:-7.5,rotation:-Math.PI/2,width:5.1,to:[12.2,-7.5],yaw:-Math.PI/2},sweets:{name:"\u0410\u041C\u0422\u0422\u0410\u041D",x:15,z:0,rotation:-Math.PI/2,width:5.1,to:[12.2,0],yaw:-Math.PI/2},alcohol:{name:"\u0421\u041E\u0413\u0422\u0423\u0423\u0420\u0423\u0423\u041B\u0410\u0425 \u0423\u041D\u0414\u0410\u0410",x:15,z:7.5,rotation:-Math.PI/2,width:5.1,to:[12.2,7.5],yaw:-Math.PI/2},produce:{name:"\u0416\u0418\u041C\u0421, \u041D\u041E\u0413\u041E\u041E",x:-6,z:2.3,rotation:0,width:8.6,to:[-6,5.1],yaw:0},ready:{name:"\u0411\u042D\u041B\u042D\u041D \u0425\u041E\u041E\u041B",x:6,z:2.3,rotation:0,width:5.1,to:[6,5.1],yaw:0},"frozen-dumplings":{name:"\u0411\u0423\u0423\u0417, \u0411\u0410\u041D\u0428",x:-12,z:9.65,rotation:Math.PI,width:3.3,to:[-12,7.1],yaw:Math.PI,pitch:-.24,chest:!0},"frozen-bakery":{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u0413\u0423\u0420\u0418\u041B\u0410\u041D \u0411\u04AE\u0422\u042D\u042D\u0413\u0414\u042D\u0425\u04AE\u04AE\u041D",x:-7.8,z:9.65,rotation:Math.PI,width:3.3,to:[-7.8,7.1],yaw:Math.PI,pitch:-.24,chest:!0},"frozen-vegetables":{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u041D\u041E\u0413\u041E\u041E",x:-3.6,z:9.65,rotation:Math.PI,width:3.3,to:[-3.6,7.1],yaw:Math.PI,pitch:-.24,chest:!0},"frozen-meat":{name:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u041C\u0410\u0425",x:-5.5,z:-4.6,rotation:0,width:3.6,to:[-5.5,-2.1],yaw:0},"pantry-2":{name:"\u0425\u04AE\u041D\u0421, \u0410\u041C\u0422\u041B\u0410\u0413\u0427",category:"pantry",x:5.5,z:-4.6,rotation:0,width:5.1,to:[5.5,-1.6],yaw:0},packing:{name:"\u0411\u042D\u041B\u0422\u0413\u042D\u0425 \u0428\u0418\u0420\u042D\u042D",to:[6.5,8.4],yaw:Math.PI}},Gt;try{Gt=new Bl({canvas:mi,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{Vt("world-error").hidden=!1,Vt("world-loading").hidden=!0}Gt&&Hx().catch(i=>{console.error(i),Vt("world-error").hidden=!1,Vt("world-loading").hidden=!0});async function Hx(){let i=(M,T)=>window.dispatchEvent(new CustomEvent("grocery:prepare",{detail:{stage:M,percent:T}})),e=()=>new Promise(M=>requestAnimationFrame(()=>requestAnimationFrame(M)));i("room",15),await e(),Gt.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6)),Gt.setSize(window.innerWidth,window.innerHeight),Gt.outputColorSpace=Yt,Gt.toneMapping=Sa,Gt.toneMappingExposure=1.07,Gt.shadowMap.enabled=!0,Gt.shadowMap.type=Ts,Gt.shadowMap.autoUpdate=!1,Gt.shadowMap.needsUpdate=!0;let t=new xs;t.background=new ct("#eaf3e9"),t.fog=new Yr("#edf3e5",.0025);let n=new ql,s=new vr(Gt);t.environment=s.fromScene(n,.04).texture,t.environmentIntensity=.14,typeof n.dispose=="function"&&n.dispose(),s.dispose();let r=new Dn(63,window.innerWidth/window.innerHeight,.08,90);t.add(r),r.position.set(0,1.64,10.8),r.rotation.order="YXZ";let a=-.1,o=-.03,l=()=>Jt.transport?.()==="cart"?-.25:Jt.transport?.()==="basket"?-.18:-.04,c="",u=[],h=[],d=[],f=[],g=new Map,y=new st;t.add(y);let m=new Map,p=!0,x=null,b=!1,v=!1,A=null,R="",_=!1;function w(M){_=M,Vt("nearby-panel").classList.toggle("is-expanded",M),Vt("nearby-toggle").setAttribute("aria-expanded",String(M))}let O="",I=performance.now(),U=0,H=!0,Z=0,D=new Set,q=new Map,K=window.matchMedia("(prefers-reduced-motion: reduce)"),X=new Ma,re=new Ln,J=new ve,le=new ve(0,0),he=new st;t.add(he);let Pe=null,Ze=null,z="",ie="",me=!1,ke=0,Se={};function xe(M,T=.8,L=0){let Y=`${M}:${T}:${L}`;return Se[Y]||=new Et({color:M,roughness:T,metalness:L})}function fe(M,T,L,Y,k,te,ue,de=t,Q=!1){let oe=new We(new un(M,T,L),Y);return oe.position.set(k,te,ue),oe.receiveShadow=!0,de.add(oe),Q&&h.push(oe),oe}function $e(M,T,L,Y,k,te,ue,de,Q=1){let oe=Gd(te,ue,de===2?-1:1);return oe.cabinet=T,oe.id=f.length,oe.setClosedPosition(L,Y,k,Q<0?Math.PI:0),M.add(oe.group),oe.pane.userData.fridgeDoor=oe.id,oe.handle.userData.fridgeDoor=oe.id,oe.center=new P(L,Y,k),M.localToWorld(oe.center),f.push(oe),oe}function lt(M){let T=m.get(M);if(!T)return null;let L=Gl(kt.BY_ID[T.lot.productId]);return f.filter(Y=>Y.cabinet===L).map(Y=>({door:Y,score:Math.min(...T.positions.map(k=>k.distanceTo(Y.center)))+.16*r.position.distanceTo(Y.center)})).sort((Y,k)=>Y.score-k.score)[0]?.door||null}function yt(M,T,L,Y,k,te,ue,de=t,Q=24){let oe=new We(new Bn(M,T,L,Q),Y);return oe.position.set(k,te,ue),oe.castShadow=!0,oe.receiveShadow=!0,de.add(oe),oe}function ae(M,T,L){let Y=document.createElement("canvas");Y.width=M,Y.height=T,L(Y.getContext("2d"),M,T);let k=new Hn(Y);return k.colorSpace=Yt,k.anisotropy=Math.min(Gt.capabilities.getMaxAnisotropy(),8),k}let Ae=new We(new Ut(vf.width,vf.depth),Sh({floor:!0}));Ae.rotation.x=-Math.PI/2,Ae.receiveShadow=!0,t.add(Ae);let be=Xd(),Be=xe("#67947f",.58),Ie=Sh(),je=xe("#d6b473",.3,.45),Je=xe("#fff5dc");fe(32,5.4,.22,be,0,2.7,-12.9,t,!0),fe(.22,5.4,26,be,-15.9,2.7,0,t,!0),fe(.22,5.4,26,be,15.9,2.7,0,t,!0),fe(32,5.4,.22,be,0,2.7,12.9,t,!0),fe(32,1.1,.25,Be,0,.55,-12.75),fe(.25,1.1,26,Be,-15.75,.55,0),fe(.25,1.1,26,Be,15.75,.55,0),fe(32,.2,26,xe("#f7f3e7"),0,5.4,0);for(let M=-12;M<=12;M+=6)fe(.14,.3,26,xe("#dcc8a8"),M,5.2,0);for(let M=-9;M<=9;M+=6)fe(32,.23,.14,xe("#e2cfb0"),0,5.15,M);t.add(new ga("#f1f8ff","#e2d3b8",2.2)),t.add(new va("#ffffff",.48));let ut=new ya("#fff6e5",1.5);ut.position.set(-8,12,10),ut.castShadow=!0,ut.shadow.mapSize.set(2048,2048),ut.shadow.camera.left=-21,ut.shadow.camera.right=21,ut.shadow.camera.top=20,ut.shadow.camera.bottom=-20,ut.shadow.normalBias=.025,ut.shadow.radius=4,t.add(ut);for(let[M,[T,L]]of[[-10,-8],[0,-8],[10,-8],[-10,0],[0,0],[10,0],[-10,8],[0,8],[10,8]].entries())if(yt(.025,.025,1.05,xe("#503d29"),T,4.6,L),yt(.11,.5,.3,xe(M%2?"#96b5a2":"#e0cba6",.55,.15),T,3.97,L),yt(.45,.45,.025,new Et({color:"#fff0c5",emissive:"#ffcc77",emissiveIntensity:2}),T,3.81,L),M%2===0){let Y=new Es("#fff6e8",7,15,2);Y.position.set(T,3.7,L),t.add(Y)}fe(31.4,.055,.1,je,0,1.18,-12.72),fe(.1,.055,25.4,je,-15.72,1.18,0),fe(.1,.055,25.4,je,15.72,1.18,0);for(let M=-15;M<=15;M+=1.5)fe(.045,1.06,.06,xe("#456b58"),M,.56,-12.69),fe(.045,1.06,.06,xe("#456b58"),M,.56,12.7);for(let M=-12;M<=12;M+=1.5)for(let T of[-15.7,15.7])fe(.06,1.06,.045,xe("#456b58"),T,.56,M);let St=ae(1024,512,(M,T,L)=>{let Y=M.createLinearGradient(0,0,0,L);Y.addColorStop(0,"#768bb9"),Y.addColorStop(.62,"#e8b69f"),Y.addColorStop(1,"#9aafac"),M.fillStyle=Y,M.fillRect(0,0,T,L),M.fillStyle="#718097",M.beginPath(),M.moveTo(0,350);for(let k=0;k<=T;k+=60)M.lineTo(k,310+35*Math.sin(k*.012));M.lineTo(T,L),M.lineTo(0,L),M.fill();for(let k=0;k<19;k++){let te=k*62-10,ue=195+k*71%150,de=32+k*17%37;M.fillStyle=k%2?"#576e85":"#69778c",M.fillRect(te,ue,de,L-ue);for(let Q=ue+13;Q<L;Q+=22)for(let oe=te+7;oe<te+de-4;oe+=12)M.fillStyle=(oe+Q)%5<3?"#f6d395":"#94b0b5",M.fillRect(oe,Q,4,7)}}),wt={},B=window.EnvironmentAssets||{},Kt=new Map;for(let[M,T]of Object.entries(B)){if(!Kt.has(T.path)){let L=St.clone(),Y=window.FastAssets?.environment?.[M];L.needsUpdate=!0,br("environment:"+M,Y?window.innerWidth<=700?Y.small:Y.large:T.path,-20).then(k=>{L.image=k,L.needsUpdate=!0,Vi(!0)},()=>Vi(!1)),L.colorSpace=Yt,Kt.set(T.path,L)}wt[M]=Kt.get(T.path)}let _t=rf(Object.keys(wt).length?wt:St,xe("#3a514d"),Ie);t.add(_t.group);function Ft(){let M=Jt.atmosphere?.(),T=wh(M?.day,M?.progress);for(let L of[T.from,T.to])Sr.promote("environment:city"+T.season+Wl[L],100);_t.set(M)&&(p=!0)}Ft();function Le(M,T,L,Y,k,te=24){for(let ue=k;ue>=te;ue-=2){M.font=`700 ${ue}px Arial,sans-serif`;let de=[],Q="";for(let oe of String(T).split(/\s+/)){let ge=Q?`${Q} ${oe}`:oe;Q&&M.measureText(ge).width>L?(de.push(Q),Q=oe):Q=ge}if(Q&&de.push(Q),de.length<=Y&&de.every(oe=>M.measureText(oe).width<=L))return{lines:de,size:ue}}return{lines:[String(T)],size:te}}function Wt(M,T,L,Y,k,te,ue,de=24){let Q=Le(M,T,k,te,ue,de);M.font=`700 ${Q.size}px Arial,sans-serif`,Q.lines.forEach((oe,ge)=>M.fillText(oe,L,Y+(ge-(Q.lines.length-1)/2)*Q.size*1.12))}function tt(M,T,L,Y,k=""){M.fillStyle="#fffdf0",M.fillRect(0,0,T,L),M.strokeStyle="#9b824e",M.lineWidth=4,M.strokeRect(5,5,T-10,L-10),M.textAlign="center",M.textBaseline="middle",M.fillStyle="#183f30",Wt(M,Y,T/2,L*(k?.34:.5),T-50,2,Math.round(L*(k?.36:.43)),18),k&&(M.fillStyle="#465842",Wt(M,k,T/2,L*.79,T-50,1,Math.round(L*.26),18))}function Ke(M,T,L,Y,k,te,ue,de=!1){let Q=ae(1024,Math.max(100,Math.round(1024*L/T)),(ge,Ge,Me)=>{tt(ge,Ge,Me,M)}),oe=new We(new Ut(T,L),new Zt({map:Q,toneMapped:!1}));return oe.userData.signText=M,oe.position.set(Y,k,te),ue.add(oe),oe}function C(M,T,L=!1){let Y=L?_f():Dh({flowers:!1,color:"#a77953",seed:M});if(Y.position.set(M,L?3.3:0,T),Y.scale.setScalar(L?.9:1.1),t.add(Y),!L){let k=as(1.6,1.5,.22);k.position.set(M,.013,T),t.add(k)}}C(-14,11.6),C(14,11.6),C(-8,12.2,!0),C(-3.8,12.2,!0);let S={};function V(M){let T=new st;T.position.set(M.x,0,M.z),T.rotation.y=M.rotation,t.add(T),S.cold=T;let L=xe("#426457",.42,.22),Y=xe("#e5eeea",.56),k=xe("#dce8e2",.38,.1);fe(2,3.15,.16,Y,-1.5,1.63,-.28,T,!0);for(let Ue of[-2.53,-.47])fe(.12,3.25,.95,L,Ue,1.63,.04,T,!0);for(let Ue of[.4,1.28,2.16])fe(2,.12,1.03,L,-1.5,Ue,.05,T,!0),fe(2,.06,.06,je,-1.5,Ue+.015,.62,T),fe(1.9,.025,.07,new Zt({color:"#e7f7ee"}),-1.5,Ue+.08,-.1,T);let te=new We(new Ut(1.87,2.78),new zn({color:"#dce9e7",transparent:!0,opacity:.045,roughness:.1,clearcoat:1,depthWrite:!1,envMapIntensity:.2}));te.position.set(-1.5,1.65,.65),T.add(te);let ue=_n(.035,.32,.07,je,.008);ue.position.set(-.7,1.6,.71),T.add(ue);let de=_n(2.7,.52,1.12,k,.045);de.position.set(1.05,.36,.16),T.add(de),h.push(de),fe(2.72,.1,1.15,L,1.05,.12,.16,T),fe(2.46,.045,.98,xe("#dcece9",.7),1.05,.8,.16,T),fe(2.7,.44,.07,k,1.05,.82,.71,T),fe(2.7,.86,.07,k,1.05,1.02,-.39,T);for(let Ue of[-.29,2.39]){let it=new tn;it.setAttribute("position",new gt([Ue,.6,.71,Ue,.6,-.39,Ue,1.46,-.39,Ue,.6,.71,Ue,1.46,-.39,Ue,1.04,.71],3)),it.computeVertexNormals(),T.add(new We(it,new Et({color:"#e0ece8",roughness:.4,side:jt})));let At=fe(.06,.055,1.18,L,Ue,1.25,.16,T);At.rotation.x=.36}fe(2.7,.055,.055,L,1.05,1.04,.71,T),fe(2.7,.055,.055,L,1.05,1.46,-.39,T);for(let Ue=0;Ue<2;Ue++){let it=new We(new Ut(1.27,1.18),new zn({color:"#e6f1ee",roughness:.08,transparent:!0,opacity:.035,clearcoat:.35,depthWrite:!1,side:jt,envMapIntensity:.06}));it.rotation.x=-Math.PI/2+.36,it.position.set(.395+Ue*1.31,1.25,.16),T.add(it);let At=_n(.21,.028,.045,je,.006);At.position.set(.395+Ue*1.31,1.11,.57),T.add(At)}let Q=xe("#d4e3df",.35,.22);for(let Ue=0;Ue<2;Ue++)for(let it=0;it<4;it++){let At=.1275+it*.615,et=Ue?-.1:.43,ot=Ue?1.02:.84;for(let Rt of[-.29,.29])fe(.014,.15,.49,Q,At+Rt,ot,et,T);for(let Rt of[-.245,.245])fe(.58,.018,.014,Q,At,ot+.075,et+Rt,T);for(let Rt=0;Rt<6;Rt++)fe(.012,.14,.012,Q,At-.25+Rt*.1,ot,et+.245,T)}fe(2.46,.018,.04,new Zt({color:"#eefbff"}),1.05,1.39,-.32,T),Ke("\u0417\u0410\u0419\u0420\u041C\u0410\u0413",2.55,.28,1.05,1.91,-.28,T);let oe=ae(128,128,Ue=>{Ue.strokeStyle="#e1f1eb",Ue.lineWidth=5,Ue.lineCap="round";for(let it=0;it<6;it++)Ue.save(),Ue.translate(64,64),Ue.rotate(it*Math.PI/3),Ue.beginPath(),Ue.moveTo(0,0),Ue.lineTo(0,-45),Ue.moveTo(0,-27),Ue.lineTo(-11,-36),Ue.moveTo(0,-27),Ue.lineTo(11,-36),Ue.stroke(),Ue.restore()}),ge=new We(new Ut(.24,.24),new Zt({map:oe,transparent:!0,depthWrite:!1}));ge.position.set(2.2,.15,.755),T.add(ge);let Ge=_n(M.width+.25,.74,.17,L,.04);Ge.position.set(0,3.5,.05),T.add(Ge),Ke(M.name,M.width-.15,.46,0,3.51,.151,T).userData.department="cold",u.push({x0:M.x-.55,x1:M.x+.88,z0:M.z-M.width/2-.15,z1:M.z+M.width/2+.15});let Me=as(M.width+1,2.8,.2);Me.position.set(M.x+.2,.013,M.z),Me.rotation.z=M.rotation,t.add(Me)}function _e(M,T){let L=new st;L.position.set(T.x,0,T.z),L.rotation.y=T.rotation,t.add(L);let Y=xe("#e4eee7",.42,.08),k=xe("#456e5c",.35,.2);fe(3.3,.65,1.28,Y,0,.42,0,L,!0),fe(3.34,.12,1.32,k,0,.12,0,L),fe(3.18,.055,1.18,xe("#cfe3df"),0,.79,0,L);for(let te of[-1.62,1.62])fe(.055,.34,1.28,k,te,.91,0,L);for(let te of[-.63,.63])fe(3.3,.07,.055,k,0,1.07,te,L);for(let te=0;te<2;te++){let ue=new We(new Ut(1.56,1.2),new zn({color:"#deeee6",transparent:!0,opacity:.035,roughness:.1,depthWrite:!1,side:jt}));ue.rotation.x=-Math.PI/2,ue.position.set((te-.5)*1.61,1.095,0),L.add(ue),fe(.23,.035,.06,je,(te-.5)*1.61,1.13,.47,L)}for(let te of[-1.17,-.39,.39,1.17])for(let ue of[-.29,.29]){for(let de of[-.37,.37])fe(.012,.15,.52,k,te+de,.9,ue,L);for(let de of[-.26,.26])fe(.74,.014,.012,k,te,.975,ue+de,L)}fe(3.15,.025,.05,new Zt({color:"#edfff3"}),0,1.01,-.56,L),Ke(T.name,3.15,.3,0,1.47,-.59,L).userData.department=M,u.push({x0:T.x-1.73,x1:T.x+1.73,z0:T.z-.7,z1:T.z+.7})}function ce(M,T){if(T.chest){_e(M,T);return}if(M==="cold"){V(T);return}let L=new st;L.position.set(T.x,0,T.z),L.rotation.y=T.rotation,t.add(L),S[M]=L;let Y=["dairy","cold","meat","frozen","ready"].includes(M),k=Vl(M),te=Y?xe("#4b6560",.4,.35):Ie;fe(T.width,3.15,.14,xe(Y?"#edf4e8":"#e4cfaa"),0,1.62,-.28,L,!0),fe(.15,3.25,k?1.8:.9,te,-T.width/2,1.62,k?-.28:.02,L,!0),fe(.15,3.25,k?1.8:.9,te,T.width/2,1.62,k?-.28:.02,L,!0);for(let Q of[.4,1.28,2.16])fe(T.width,.12,k?1.8:1.05,te,0,Q,k?-.28:.05,L,!0),fe(T.width,.09,.06,je,0,Q,.6,L),k&&fe(T.width,.09,.06,je,0,Q,-1.16,L),Y&&fe(T.width-.1,.025,.08,new Et({color:"#fffbd6",emissive:"#fff5bb",emissiveIntensity:.8}),0,Q+.08,-.05,L);let ue=_n(T.width+.26,.78,k?.93:.17,Y?xe("#31574b",.4,.18):Ie,.04);if(ue.position.set(0,3.5,k?-.28:.05),L.add(ue),Ke(T.name,T.width-.15,.46,0,3.51,k?.2:.151,L).userData.department=M,k){let Q=Ke(T.name,T.width-.15,.46,0,3.51,-.76,L);Q.rotation.y=Math.PI,Q.userData.department=M}fe(T.width+.1,.22,k?1.8:1,Y?xe("#3b5c50",.48,.2):Ie,0,.18,k?-.28:.03,L);for(let Q of[.4,1.28,2.16]){let oe=_n(T.width,.06,.07,je,.012);if(oe.position.set(0,Q+.018,.617),L.add(oe),k){let Ge=oe.clone();Ge.position.z=-1.177,L.add(Ge)}let ge=new We(new Ut(T.width-.18,.025),new Zt({color:Y?"#e4eee7":"#ffdfa0"}));ge.position.set(0,Q+.085,-.13),ge.rotation.x=-.6,L.add(ge)}if(M==="frozen"){let Q=Ke("\u0417\u0410\u0413\u0410\u0421\u041D\u042B \u0425\u04E8\u041B\u0414\u04E8\u04E8\u0413\u0427",T.width-.5,.22,0,3.08,.16,L);Q.userData.fishFreezer=!0}if(M==="meat"&&Ke("\u0425\u04E8\u0420\u0413\u04E8\u0421\u04E8\u041D \u041C\u0410\u0425",T.width-.5,.22,0,3.08,.16,L),Y){let Q=new zn({color:"#d4e5dc",roughness:.09,metalness:.03,transparent:!0,opacity:M==="meat"||M==="frozen"?.075:.045,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),oe=3,ge=T.width/oe;for(let Ge=0;Ge<oe;Ge++){let Me=-T.width/2+ge*(Ge+.5);if(M==="meat"||M==="frozen"){$e(L,M,Me,1.63,.68,ge-.04,2.81,Ge);continue}let Ue=new We(new Ut(ge-.07,2.73),Q);if(Ue.position.set(Me,1.63,.64),L.add(Ue),k){let ot=Ue.clone();ot.position.z=-1.2,ot.rotation.y=Math.PI,L.add(ot)}if(M==="meat"||M==="frozen"){for(let ot of[-1,1])fe(.055,2.81,.055,xe("#718e86",.28,.6),Me+ot*(ge-.04)/2,1.63,.68,L);for(let ot of[-1,1])fe(ge-.04,.055,.055,xe("#718e86",.28,.6),Me,1.63+ot*1.39,.68,L)}Ge<oe-1&&fe(.028,2.84,.045,xe("#7f9585",.32,.65),Me+ge/2,1.64,.645,L);let it=Me+ge/2-.025,At=2.78,et=_n(.022,.27,.028,xe("#c4d2cc",.25,.75),.006);et.position.set(it,At,.735),L.add(et);for(let ot of[-.12,.12])fe(.024,.022,.085,xe("#c4d2cc",.25,.75),it,At+ot,.69,L);if(k){Ge<oe-1&&fe(.028,2.84,.045,xe("#7f9585",.32,.65),Me+ge/2,1.64,-1.205,L);let ot=et.clone();ot.position.z=-1.295,L.add(ot);for(let Rt of[-.12,.12])fe(.024,.022,.085,xe("#c4d2cc",.25,.75),it,At+Rt,-1.25,L)}}}let de=as(T.width+1.1,k?3.4:2.6,.2);de.position.set(T.x,.013,T.z+(k?-.28:.25)),de.rotation.z=T.rotation,t.add(de),u.push(jd(M,T))}Object.entries(ti).forEach(([M,T])=>{M!=="packing"&&M!=="frozen-meat"&&ce(M,T)}),fe(3.7,.92,1.3,Ie,It.x,.46,It.z,t,!0);let Ee=_n(3.95,.13,1.53,new zn({color:"#35564d",roughness:.57,clearcoat:.12,clearcoatRoughness:.5,envMapIntensity:.3}),.055);Ee.position.set(It.x,.98,It.z),t.add(Ee),h.push(Ee),fe(3.7,.04,.04,je,It.x,1.055,It.z-.74);let De=_n(2.73,.39,.035,je,.014);De.position.set(It.x,.43,It.z-.724),t.add(De);let ee=Ke("\u0417\u0410\u0425\u0418\u0410\u041B\u0413\u0410 \u0411\u042D\u041B\u0422\u0413\u042D\u0425",2.65,.31,It.x,.43,It.z-.752,t,!0);ee.rotation.y=Math.PI,ee.userData.department="packing";for(let M=0;M<3;M++){let T=_n(1.12,.68,.045,Ie,.028);T.position.set(It.x-1.23+M*1.23,.48,It.z-.67),t.add(T);let L=_n(.24,.025,.04,je,.006);L.position.set(It.x-1.23+M*1.23,.72,It.z-.706),t.add(L)}let se=as(4.9,2.8,.24);se.position.set(It.x,.013,It.z),t.add(se);let we=Dh({flowers:!0,color:"#e1d8bf"});we.scale.setScalar(.76),we.position.set(It.x-.92,1.055,It.z+.04),we.rotation.y=.08,t.add(we);let N=as(.65,.55,.18);N.position.set(It.x-.92,1.06,It.z+.04),t.add(N);let ne=new st;t.add(ne),ne.position.set(It.x,1.055,It.z);let j="",Re=fe(3.9,1.8,1.5,new Zt({visible:!1}),It.x,.9,It.z);Re.userData.station=!0,d.push(Re),u.push({x0:It.x-2,x1:It.x+2,z0:It.z-.8,z1:It.z+.8});let pe={x:It.x+2.8,z:It.z-1.5},Ce=new Et({color:"#657b69",roughness:.66}),Qe=new Et({color:"#ac7654",roughness:.6}),mt=_n(.7,.82,.63,Ce,.05);mt.position.set(pe.x,.49,pe.z),t.add(mt);let ye=_n(.8,.1,.73,Qe,.035);ye.position.set(pe.x,.94,pe.z),t.add(ye);for(let M of[-.24,.24]){let T=fe(.1,.09,.12,Ce,pe.x+M,.06,pe.z+.19);T.castShadow=!0}let nt=Ke("\u041C\u0423\u0423\u0414\u0421\u0410\u041D \u0411\u0410\u0420\u0410\u0410",.59,.22,pe.x,.58,pe.z-.323,t,!0);nt.rotation.y=Math.PI;let pt=as(1.2,1.05,.2);pt.position.set(pe.x,.014,pe.z),t.add(pt);let Fe=fe(.84,1.06,.78,new Zt({visible:!1}),pe.x,.53,pe.z);Fe.userData.waste=!0,d.push(Fe),u.push({x0:pe.x-.44,x1:pe.x+.44,z0:pe.z-.41,z1:pe.z+.41});let Lt=[{x:-5.5,z:-4.6,title:"\u0425\u04E8\u041B\u0414\u04E8\u04E8\u0421\u04E8\u041D \u041C\u0410\u0425",ids:kt.PRODUCTS.filter(M=>Gl(M)==="frozen-meat").map(M=>M.id)}];for(let M of Lt){let T=new st;T.position.set(M.x,0,M.z),t.add(T);let L=fe(3.6,.22,1.38,xe("#d4e2da"),0,.15,0,T,!0);h.push(L),fe(3.6,2.38,.1,xe("#e6eee8"),0,1.38,0,T,!0);for(let te of[-1.78,1.78])fe(.1,2.65,1.38,Be,te,1.4,0,T,!0);for(let te of[.43,1.2,1.97]){fe(3.6,.09,1.38,xe("#adc5b8"),0,te,0,T,!0);for(let ue of[-.7,.7])fe(3.6,.055,.055,je,0,te+.02,ue,T)}for(let te of[-1,1])for(let ue=0;ue<3;ue++)$e(T,"frozen-meat",(ue-1)*1.16,1.47,te*.74,1.13,2.35,ue,te);fe(3.72,.47,.16,Be,0,2.82,0,T),Ke(M.title,3.4,.31,0,2.83,.1,T).userData.department="frozen-meat";let Y=Ke(M.title,3.4,.31,0,2.83,-.1,T);Y.rotation.y=Math.PI,Y.userData.department="frozen-meat",u.push({x0:M.x-1.86,x1:M.x+1.86,z0:M.z-.78,z1:M.z+.78});let k=as(4.3,2.2,.23);k.position.set(M.x,.012,M.z),t.add(k)}function ln(M){return Er(M)?.path||`assets/products/${M.productId}.webp`}let ni=0,Us=0,Fs=!1,Kl=new Set(Jt.inventory().filter(M=>!M.hidden).map(M=>Er(M)?.id||M.productId)).size+Kt.size+Object.keys(window.GroceryBagAssets||{}).length;function Vi(M){p=!0,ni++,M||Us++,window.dispatchEvent(new CustomEvent("grocery:loadprogress",{detail:{loaded:ni,total:Kl,failed:Us}}))}function qn(M){let T=Er(M),L=T?.id||M.productId;if(g.has(L))return g.get(L);let Y=Zd(T||{path:ln(M)},k=>{Vi(k)});return Y.anisotropy=Math.min(Gt.capabilities.getMaxAnisotropy(),8),g.set(L,Y),Y}let Ci=ae(256,128,M=>{M.fillStyle="#ad854d",M.fillRect(0,0,256,128);for(let T=0;T<128;T+=12){M.fillStyle=T%24?"#c8a16a":"#b88f57",M.fillRect(0,T,256,8);for(let L=0;L<256;L+=20)M.fillStyle="#8e693d",M.fillRect(L+(T%24?8:0),T,3,12)}}),Rr=new Et({map:Ci,color:"#c9a36d",roughness:.95});function za(M,T,L){let Y=M==="bread",k=Y?Rr:xe("#aa7d48"),te=Y?.66:.79,ue=Y?.09:.13;fe(T,.035,te,k,0,.017,.1,L);for(let de of[-1,1])fe(.035,ue,te,k,de*T/2,ue/2,.1,L);if(fe(T,ue,.035,k,0,ue/2,.1+te/2,L),!Y)for(let de=1;de<3;de++)fe(T-.04,.012,.012,xe("#75532e"),0,de*ue/3,.128+te/2,L)}let Os=new Map;function ls(M,T,L,Y){M.save(),M.scale(T/1024,L/480),T=1024,L=480;let k=kt.BY_ID[Y.productId],te=Jt.russianHints?.();M.fillStyle="#fffef3",M.fillRect(0,0,T,L),M.strokeStyle="#a59165",M.lineWidth=5,M.strokeRect(3,3,T-6,L-6),M.textAlign="center",M.textBaseline="middle";let ue=te?kt.BREAD_BY_ID[Y.variantId]?`${window.GroceryRussian.name(Y)} \xB7 ${window.GroceryRussian.name(k.id)}`:window.GroceryRussian.name(Y):kt.BREAD_BY_ID[Y.variantId]?k.name:"";M.fillStyle="#163d2a",Wt(M,kt.lotName(Y),T/2,ue?104:165,T-64,2,ue?80:102,38),ue&&(M.fillStyle="#3d5238",Wt(M,ue,T/2,258,T-64,2,48,32)),M.strokeStyle="#cfbf96",M.lineWidth=2,M.beginPath(),M.moveTo(26,318),M.lineTo(T-26,318),M.stroke();let de=Ns.quote(Y);if(M.fillStyle="#67522d",M.font="600 36px Arial,sans-serif",M.fillText(de.bulk?"1 \u043A\u0433":kt.lotUnit(Y),T/2,341,T-40),de.sale){M.fillStyle="#ffe4a0",M.fillRect(6,365,T-12,109),M.fillStyle="#af3d31",M.fillRect(22,387,150,61),M.fillStyle="#fff7e8",M.font="700 44px Arial,sans-serif",M.fillText(`\u2212${de.percent}%`,97,420,140);let Q=Ns.money(de.regular);M.font="500 52px Arial,sans-serif",M.fillStyle="#726b60",M.fillText(Q,350,420,266);let oe=Math.min(266,M.measureText(Q).width);M.strokeStyle="#847469",M.lineWidth=4,M.beginPath(),M.moveTo(350-oe/2,417),M.lineTo(350+oe/2,417),M.stroke(),M.fillStyle="#9e3028",M.font="800 84px Arial,sans-serif",M.fillText(Ns.money(de.price),760,418,440)}else M.fillStyle="#214c36",M.font="800 84px Arial,sans-serif",M.fillText(Ns.money(de.price),T/2,418,T-60);M.restore()}function Ha(M){let T=Ns.quote(M);return T?.sale?`<small class="nearby-sale" data-learning><b>\u2212${T.percent}%</b><del>${Ns.money(T.regular)}</del><strong>${Ns.money(T.price)}</strong></small>`:""}function Wi(M,T,L,Y,k,te){let ue=`${kt.lotName(M)}:${M.pack}`,de=Os.get(ue);if(!de){let oe=window.innerWidth<=700?512:768,ge=ae(oe,oe*480/1024,(Ge,Me,Ue)=>ls(Ge,Me,Ue,M));de=new Zt({map:ge,toneMapped:!1}),de.userData.tagLot=M,Os.set(ue,de)}let Q=new We(new Ut(T,T*480/1024),de);Q.position.set(Y,k-T*.09,te+.015),Q.userData.lotId=M.id,L.add(Q),d.push(Q)}let cs={"frozen-meat":"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u043C\u0430\u0445","frozen-dumplings":"\u0411\u0443\u0443\u0437, \u0431\u0430\u043D\u0448","frozen-bakery":"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u0433\u0443\u0440\u0438\u043B\u0430\u043D \u0431\u04AF\u0442\u044D\u044D\u0433\u0434\u044D\u0445\u04AF\u04AF\u043D","frozen-vegetables":"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u043D\u043E\u0433\u043E\u043E","pantry-2":"\u0425\u04AF\u043D\u0441, \u0430\u043C\u0442\u043B\u0430\u0433\u0447",meat:"\u041C\u0430\u0445, \u0437\u0430\u0433\u0430\u0441",dairy:"\u0421\u04AF\u04AF, \u04E9\u043D\u0434\u04E9\u0433",bread:"\u0422\u0430\u043B\u0445",pantry:"\u0425\u04AF\u043D\u0441, \u0446\u0430\u0439",canned:"\u041B\u0430\u0430\u0437\u0430\u043B\u0441\u0430\u043D \u0445\u04AF\u043D\u0441, \u0441\u043E\u0443\u0441",frozen:"\u0425\u04E9\u043B\u0434\u04E9\u04E9\u0441\u04E9\u043D \u0445\u04AF\u043D\u0441",cold:"\u0423\u0441, \u0437\u0430\u0439\u0440\u043C\u0430\u0433",household:"\u0410\u0445\u0443\u0439\u043D \u0431\u0430\u0440\u0430\u0430",drinks:"\u0423\u043D\u0434\u0430\u0430, \u0436\u04AF\u04AF\u0441",sweets:"\u0410\u043C\u0442\u0442\u0430\u043D",alcohol:"\u0421\u043E\u0433\u0442\u0443\u0443\u0440\u0443\u0443\u043B\u0430\u0445 \u0443\u043D\u0434\u0430\u0430",produce:"\u0416\u0438\u043C\u0441, \u043D\u043E\u0433\u043E\u043E",ready:"\u0411\u044D\u043B\u044D\u043D \u0445\u043E\u043E\u043B",packing:"\u0411\u044D\u043B\u0442\u0433\u044D\u0445 \u0448\u0438\u0440\u044D\u044D"},hs=new ws(-18.5,18.5,15.03125,-15.03125,.1,100);hs.position.set(0,38,24),hs.lookAt(0,0,0),hs.updateMatrixWorld();let us=null,ds=!0;function Cr(M,T,L=.12){let Y=new P(M,L,T).project(hs);return{left:`${(Y.x+1)*50}%`,top:`${(1-Y.y)*50}%`}}function ka(){Object.assign(Vt("map-player").style,Cr(r.position.x,r.position.z)),Vt("map-player").style.transform=`translate(-50%,-50%) rotate(${-a}rad)`}function Ga(){if(ka(),document.querySelectorAll("#map-dialog .map-zone").forEach(Q=>{let oe=ti[Q.dataset.mapZone];Object.assign(Q.style,Q.dataset.mapZone==="packing"?Cr(It.x,It.z,1):Cr(oe.x,oe.z,2.4))}),!ds)return;let M=Vt("store-map-canvas"),T=M.width,L=M.height;us||=new Fn(T,L,{depthBuffer:!0}),us.texture.colorSpace=Yt;let Y=Gt.getRenderTarget(),k=[],te=new Ln,ue=new P;t.updateMatrixWorld(!0),t.traverse(Q=>{!Q.isMesh||!Q.visible||(te.setFromObject(Q),te.getCenter(ue),(te.max.y>4.4||Math.abs(ue.z)>12.45||Math.abs(ue.x)>15.65)&&(k.push(Q),Q.visible=!1))}),Pe?.visible&&(k.push(Pe),Pe.visible=!1);let de=Gt.shadowMap.needsUpdate;try{Gt.shadowMap.needsUpdate=!1,Gt.setRenderTarget(us),Gt.render(t,hs);let Q=new Uint8Array(T*L*4);Gt.readRenderTargetPixels(us,0,0,T,L,Q);let oe=M.getContext("2d"),ge=oe.createImageData(T,L),Ge=T*4;for(let Me=0;Me<L;Me++)ge.data.set(Q.subarray((L-Me-1)*Ge,(L-Me)*Ge),Me*Ge);oe.putImageData(ge,0,0),ds=!1}finally{k.forEach(Q=>{Q.visible=!0}),Gt.setRenderTarget(Y),Gt.shadowMap.needsUpdate=de,p=!0}}function Bs(){let M=Jt.russianHints?.(),T=window.GroceryLanguage?.DEPARTMENTS||{};t.traverse(Y=>{let k=Y.userData.department,te=Y.material?.map;if(!k||!te?.image?.getContext)return;let ue=te.image,de=ue.getContext("2d"),Q=ue.width,oe=ue.height;tt(de,Q,oe,Y.userData.signText,M&&T[k]||""),te.needsUpdate=!0}),Os.forEach(Y=>{let k=Y.map.image;ls(k.getContext("2d"),k.width,k.height,Y.userData.tagLot),Y.map.needsUpdate=!0});let L={"frozen-dumplings":"buuz","frozen-bakery":"mini-khuushuur","frozen-vegetables":"frozen-broccoli","frozen-meat":"goat-meat","pantry-2":"rolled-oats",meat:"chicken-thigh",dairy:"milk",bread:"white-bread",pantry:"rice",canned:"canned-tuna",frozen:"shrimp",cold:"icecream",household:"dish-soap",drinks:"fruit-juice",sweets:"milk-biscuits",alcohol:"beer-sengur",produce:"red-apple",ready:"mantuu"};document.querySelectorAll("#map-dialog .zone-links [data-destination]").forEach((Y,k)=>{let te=Y.dataset.destination,ue=L[te];Y.innerHTML=`<span class="map-directory-number">${String(k+1).padStart(2,"0")}</span><span class="map-directory-photo" aria-hidden="true">${ue&&kt.BY_ID[ue]?window.GroceryArt.product(ue):window.GroceryArt.icon("bag")}</span><span class="zone-label" data-learning>${cs[te]}${M?`<small lang="ru">${T[te]||""}</small>`:""}</span><span aria-hidden="true">\u2192</span>`}),ds=!0,Vt("map-dialog").open&&Ga(),O="",R="",U=0,H=!0,p=!0}function E(M){if(!M)return;let T=new Set;M.traverse(L=>{L.geometry&&!T.has(L.geometry)&&(T.add(L.geometry),L.geometry.dispose()),L.isInstancedMesh&&L.dispose(),(Array.isArray(L.material)?L.material:[L.material]).forEach(k=>{k?.userData?.owned&&!T.has(k)&&(T.add(k),k.map?.userData?.owned&&!T.has(k.map)&&(T.add(k.map),k.map.dispose()),k.dispose())})})}function F(M){let T=!!M&&!!He();T!==me&&(me=T,T&&(D.clear(),x=null,nn()),document.body.classList.toggle("shelf-focus-mode",T),p=!0,H=!0,U=0)}function $(){if(!Pe)return;let M=Lh[He()];if(!M)return;let T=ke*2;Pe.position.set(r.position.x-Math.sin(a)*M.offset+Math.cos(a)*T,Ch(He(),window.innerWidth,window.innerHeight,0).baseY,r.position.z-Math.cos(a)*M.offset-Math.sin(a)*T),Pe.rotation.set(0,a-.25*ke,0)}function G(M){let T=`pouch:${M}`;if(g.has(T))return g.get(T);let L=window.GroceryBagAssets?.[M],Y=new pn;return Y.colorSpace=Yt,g.set(T,Y),L&&br(T,window.FastAssets?.bags?.[M]?.path||L.path,20).then(k=>{Y.image=k,Y.needsUpdate=!0,Vi(!0)},()=>Vi(!1)),Y}function W(M,T,L,Y,k,te,ue,de){let Q=new st;Q.position.set(L,Y,k),M.add(Q);let oe,ge=kt.isBulk(T),Ge=qn(T),Me=window.GroceryBag.SAFE,Ue=()=>{oe&&(Ls(oe.group,te*(ge?Me.width:1),ue*(ge?Me.height:1),de*(ge?.6:1)),ge&&(oe.group.position.y+=ue*(1-Me.top-Me.height)),Q.traverse(it=>{it.isMesh&&(it.castShadow=!1,it.receiveShadow=!1)}),p=!0)};return oe=os(kt.BY_ID[T.productId],T,Ge,te,Ue),Q.add(oe.group),ge&&(Q.add(ff(G("tied"),te,ue,de)),Q.add(wr(te*.92,de*.9))),Ue(),Q}function Ne(M,T,L,Y,k,te,ue,de,Q){let oe=new st;oe.position.x=k,M.add(oe);let ge=.48,Ge=.62,Me=et=>{let ot=new Zt({color:et});return ot.userData.owned=!0,ot};fe(te,Ge,.025,Me("#c9a26a"),0,Ge/2,ge/2,oe),fe(te,Ge,.025,Me("#d8b67d"),0,Ge/2,-ge/2,oe);for(let et of[-1,1])fe(.025,Ge,ge,Me(et<0?"#b58d57":"#c8a16b"),et*te/2,Ge/2,0,oe);fe(te,.025,ge,Me("#a78050"),0,.012,0,oe);let Ue=ae(384,220,(et,ot,Rt)=>{et.fillStyle="#fff6df",et.fillRect(0,0,ot,Rt),et.textAlign="center",et.fillStyle="#365340",et.font="bold 54px Georgia",et.fillText(`\u2116 ${T.number}`,ot/2,72,ot-18),et.font="35px Arial",et.fillText(T.customer||"",ot/2,133,ot-18),et.font="25px Arial",et.fillText(`${L+1}/${Y}`,ot/2,183)});Ue.userData.owned=!0;let it=new Zt({map:Ue,toneMapped:!1});it.userData.owned=!0;let At=new We(new Ut(te*.82,.33),it);if(At.position.set(0,.33,-ge/2-.016),At.rotation.y=Math.PI,oe.add(At),de)fe(te+.035,.065,ge+.04,Me("#d5b175"),0,Ge+.028,0,oe),fe(te*.84,.05,.11,Me("#e4c58c"),0,Ge+.083,-.02,oe),fe(.1,.1,ge+.05,Me("#f2dfb4"),0,Ge+.06,0,oe);else if(ue){let ot=Math.max(1,Math.ceil(Q.length/2));Q.forEach((Rt,En)=>W(oe,Rt,(En%2-.5)*te*.42,.37,(Math.floor(En/2)-(ot-1)/2)*Math.min(.18,.32/ot),te*.39,.4,Math.min(.15,.33/ot)))}return oe}function Ve(){let M=Jt.label?.()||{},T=Jt.packingStage?.()||"collecting",L=Jt.selected?.()||[],Y=Jt.delivered?.(),k=JSON.stringify([M.number,M.customer,M.bags,T,Y,L.map(te=>te.id)]);if(k!==j){if(j=k,E(ne),ne.clear(),!Y){let te=Math.max(1,M.bags||1),ue=Math.min(5,te),de=Math.min(.82,3.45/ue-.08);for(let Q=0;Q<ue;Q++)Ne(ne,M,Q,te,(Q-(ue-1)/2)*(de+.09),de,T==="packed",T==="sealed",T==="packed"?L.filter((oe,ge)=>ge%ue===Q):[])}p=!0}}function Te(){let M=Jt.transport?.()||"",T=Jt.label?.()||{},L=Jt.packingStage?.()||"collecting",Y=M?`${M}:${T.number}:${T.customer}:${T.bags}:${L}`:"";if(document.body.dataset.carrier=M,M!==c&&(F(!1),ke=0,o=l(),r.rotation.set(o,a,0,"YXZ"),c=M,p=!0),Y!==z){if(Pe&&(t.remove(Pe),E(Pe)),Pe=null,Ze=null,z=Y,ie="",M){let de=M==="cart"?lf():cf();Pe=de.group,Ze=de.contents,re.setFromObject(Pe).expandByScalar(.12),t.add(Pe),Pe.scale.set(.78,1,.9),$()}Gt.shadowMap.needsUpdate=!0,p=!0}if(Ve(),!Ze)return;let k=Jt.carried?.()||[],te=Ch(M,window.innerWidth,window.innerHeight,k.length),ue=k.map(de=>de.id).join("|")+":"+te.portrait;ue!==ie&&(ie=ue,E(Ze),Ze.clear(),k.forEach((de,Q)=>{let oe=te.slots[Q];W(Ze,de,oe.x,oe.y,oe.z,oe.width,oe.height,oe.depth)}),p=!0,Gt.shadowMap.needsUpdate=!0)}function ze(M,T,L,Y){return Eh(M,T,L,Y,()=>{p=!0})}function qe(M,T,L,Y,k,te=!1){let ue=new st,de,Q=()=>{de&&(Ls(de.group,L,Y,k,!1),p=!0)};return de=te?Eh(M,T,L,!1,Q):os(kt.BY_ID[M.productId],M,T,L,Q),ue.add(de.group),Q(),{group:ue,front:de.front}}function dt(){let M=new Set;y.traverse(L=>{if(!L.isMesh)return;L.geometry.dispose(),L.isInstancedMesh&&L.dispose(),(Array.isArray(L.material)?L.material:[L.material]).forEach(k=>{!k||M.has(k)||(M.add(k),k.map?.userData?.owned&&k.map.dispose(),k.userData?.owned&&k.dispose())})}),t.remove(y),y=new st,t.add(y),d.splice(0,d.length,Re,Fe),m.clear();let T={};Jt.inventory().filter(L=>!L.hidden).forEach(L=>{let Y=Gl(kt.BY_ID[L.productId]);Y!=="frozen-meat"&&(T[Y]||=[]).push(L)});for(let[L,Y]of Object.entries(T)){let k=ti[L];if(!k)continue;let te=new st;if(te.position.set(k.x,0,k.z),te.rotation.y=k.rotation,y.add(te),Y.sort((de,Q)=>(de.variantId||de.productId).localeCompare(Q.variantId||Q.productId)||de.batch.localeCompare(Q.batch)),k.chest){let de=tf(Y);for(let Q of de.bins){let oe=Math.max(3,Q.family.lots.length);for(let ge=0;ge<oe;ge++){let Ge=Q.family.lots[ge%Q.family.lots.length],Me=new st;Me.position.set(Q.x,Q.y+ge*.014,Q.z),te.add(Me);let Ue=qn(Ge),it=nf(kt.BY_ID[Ge.productId],Ge,Ue,()=>{p=!0});Me.add(it.group);let At=()=>it.group.traverse(Rt=>{Rt.isMesh&&Rt.userData.lotId&&!d.includes(Rt)&&d.push(Rt)});At(),Ue.userData.presentation||Ue.userData.callbacks.push(At);let et=new P;it.front.getWorldPosition(et);let ot=m.get(Ge.id);ot?(ot.groups.push(Me),ot.positions.push(et)):m.set(Ge.id,{lot:Ge,group:Me,groups:[Me],position:et,positions:[et]})}}for(let Q of de.labels)Wi(Q.family.lots[0],Q.width,te,Q.x,Q.y,Q.z);continue}if(L==="cold"){let oe=function(ge,Ge,Me,Ue,it,At=!1){let et=new st;et.position.set(Ge,Me,Ue),At&&(et.rotation.x=-Math.PI/2),te.add(et);let ot=qn(ge),Rt=os(kt.BY_ID[ge.productId],ge,ot,it,()=>{p=!0});At&&Rt.group.scale.setScalar(.82),et.add(Rt.group),At||et.add(wr(.65,.4));let En=()=>Rt.group.traverse(Pt=>{Pt.isMesh&&Pt.userData.lotId&&!d.includes(Pt)&&d.push(Pt)});En(),ot.userData.presentation||ot.userData.callbacks.push(En);let dn=new P;Rt.front.getWorldPosition(dn);let Ye=m.get(ge.id);Ye?(Ye.groups.push(et),Ye.positions.push(dn)):m.set(ge.id,{lot:ge,group:et,groups:[et],position:dn,positions:[dn]})},de=Y.filter(ge=>ge.productId!=="icecream"),Q=Y.filter(ge=>ge.productId==="icecream");if(de.length)for(let ge=0;ge<6;ge++){let Ge=de[ge%de.length],Me=-1.5+(ge%2?.47:-.47),Ue=.465+Math.floor(ge/2)*.88;oe(Ge,Me,Ue,.4,.78),Wi(Ge,.74,te,Me,Ue-.07,.69)}for(let ge of af(Q)){let Ge=Math.max(3,ge.family.lots.length);for(let Me=0;Me<Ge;Me++){let Ue=ge.family.lots[Me%ge.family.lots.length],it=new st;it.position.set(ge.x+(Me%2?.045:-.045),ge.y+Me*.012,ge.z-Math.floor(Me/2)*.035),te.add(it);let At=of(kt.BY_ID[Ue.productId],Ue,qn(Ue),()=>{p=!0});it.add(At.group);let et=()=>At.group.traverse(dn=>{dn.isMesh&&dn.userData.lotId&&!d.includes(dn)&&d.push(dn)});et();let ot=qn(Ue);ot.userData.presentation||ot.userData.callbacks.push(et);let Rt=new P;At.front.getWorldPosition(Rt);let En=m.get(Ue.id);En?(En.groups.push(it),En.positions.push(Rt)):m.set(Ue.id,{lot:Ue,group:it,groups:[it],position:Rt,positions:[Rt]})}Wi(ge.family.lots[0],.57,te,ge.x,ge.row?.23:.51,.757)}continue}let ue=ef(Y,k.width);L==="frozen"&&ue.forEach(de=>{de.families=Kd(de.families)}),ue.forEach(({families:de,columns:Q,spacing:oe},ge)=>{let Ge=ge?`${L}-${ge+1}`:L,Me=ti[Ge];if(!Me)throw new Error(`No physical shelf for ${L} page${ge+1}`);Qd(Ge,Me).forEach(Ue=>{let it=new st;it.position.set(Ue.x,0,Ue.z),it.rotation.y=Ue.rotation,y.add(it),Array.from({length:Q*3},(et,ot)=>de[ot%de.length]).forEach((et,ot)=>{let Rt=ot%Q,En=Math.floor(ot/Q),dn=-.5*(Q-1)*oe+Rt*oe,Ye=.465+En*.88,Pt=new st;Pt.position.set(dn,Ye,.12),it.add(Pt);let wn=et.lots.find(fn=>!kt.isUnfit(fn))||et.lots[0];if((["bread","produce"].includes(L)||kt.isBulk(wn))&&za(L,oe*.94,Pt),L==="produce"){let fn=sf(et.lots,oe);for(let qt of et.lots){let Dt=new st;Dt.position.set(0,.04,.12),Pt.add(Dt);let si=qn(qt),Tn=$d(qt,si,fn.filter(on=>on.lot.id===qt.id),()=>{p=!0});Dt.add(Tn.group);let vn=()=>Tn.group.traverse(on=>{on.isMesh&&on.userData.lotId&&!d.includes(on)&&d.push(on)});vn(),si.userData.presentation||si.userData.callbacks.push(vn);let Mn=new P;Tn.front.getWorldPosition(Mn);let Cn=m.get(qt.id);Cn?(Cn.groups.push(Dt),Cn.positions.push(Mn)):m.set(qt.id,{lot:qt,group:Dt,groups:[Dt],position:Mn,positions:[Mn]})}}else et.lots.forEach((fn,qt)=>{let Dt=new st,si=kt.BY_ID[fn.productId],Tn=et.lots.length>1;Dt.position.set(Tn?(qt%2?1:-1)*oe*.14:0,0,Tn?-Math.floor(qt/2)*.13:0),Pt.add(Dt);let vn=qn(fn),Mn=oe*(Tn?.69:1),Cn=["meat","frozen"].includes(L),on=Cn?qe(fn,vn,Mn*.93,.69,.34):qe(fn,vn,Mn*.93,.69,.4,L==="sweets");on.group.position.set(0,["produce","bread"].includes(L)?.04:.012,.12),Dt.add(on.group);let ri=()=>on.group.traverse(Yi=>{Yi.isMesh&&Yi.userData.lotId&&!d.includes(Yi)&&d.push(Yi)});ri(),vn.userData.presentation||vn.userData.callbacks.push(ri);let Ii=new P;on.front.getWorldPosition(Ii);let qi=m.get(fn.id);qi?(qi.groups.push(Dt),qi.positions.push(Ii)):m.set(fn.id,{lot:fn,group:Dt,groups:[Dt],position:Ii,positions:[Ii]})});Pt.add(wr(Math.min(.82,oe*.93),L==="produce"?.6:.42)),Wi(wn,Math.min(oe*.96,1),it,dn,Ye-.07,.68)})})})}for(let L of Lt){let Y=L.ids.map(k=>Jt.inventory().find(te=>te.productId===k&&!te.hidden&&!kt.isUnfit(te))).filter(Boolean);if(Y.length)for(let k=0;k<2;k++)for(let te=0;te<9;te++){let ue=Y[(te+k*2)%Y.length],de=Math.floor(te/3),Q=new st;Q.position.set(L.x+(te%3-1)*1.12,.48+de*.77,L.z+(k?-.42:.42)),Q.rotation.y=k?Math.PI:0,y.add(Q);let oe=qn(ue),ge=qe(ue,oe,1.02,.63,.4,!0);Q.add(ge.group),Q.add(wr(.85,.37)),Wi(ue,1,Q,0,-.06,.3);let Ge=()=>ge.group.traverse(it=>{it.isMesh&&it.userData.lotId&&!d.includes(it)&&d.push(it)});Ge(),oe.userData.presentation||oe.userData.callbacks.push(Ge);let Me=new P;ge.front.getWorldPosition(Me);let Ue=m.get(ue.id);Ue?(Ue.groups.push(Q),Ue.positions.push(Me)):m.set(ue.id,{lot:ue,group:Q,groups:[Q],position:Me,positions:[Me]})}}p=!0,U=0,bt()}function bt(){ds=!0;for(let M of m.values())M.groups.forEach(T=>{T.visible=Jt.count(M.lot.id)<M.lot.stock});Gt.shadowMap.needsUpdate=!0,p=!0,U=0}let He=()=>Jt.transport?.()||"";function xt(M,T){return xf(M,T,He()==="cart"?1.5:He()==="basket"?1.36:.32,u)}function Xt(M){F(!1);let T=yf({x:r.position.x,z:r.position.z,yaw:a},M,He(),u);r.position.x=T.x,r.position.z=T.z,a=T.yaw,p=!0,U=0}function Ot(M,T){F(!1);let L=Jl({x:r.position.x,z:r.position.z,yaw:a},M,T,He(),u);r.position.x=L.x,r.position.z=L.z,p=!0}function zt(M,T){let de=(qt,Dt)=>[Math.max(0,Math.min(66,Math.round((qt- -14.85)/.45))),Math.max(0,Math.min(52,Math.round((Dt- -11.7)/.45)))],Q=(qt,Dt)=>[-14.85+qt*.45,-11.7+Dt*.45],oe=[],ge=r.position.x,Ge=r.position.z;if(!xt(ge,Ge)){let qt=!1;for(let Dt=.15;Dt<=1.95&&!qt;Dt+=.15)for(let si of[a+Math.PI,a-Math.PI/2,a+Math.PI/2,a]){let Tn=ge-Math.sin(si)*Dt,vn=Ge-Math.cos(si)*Dt,Mn=Jl({x:ge,z:Ge,yaw:a},Tn-ge,vn-Ge,He(),u);if(Math.hypot(Mn.x-Tn,Mn.z-vn)<.001&&xt(Tn,vn)){oe.push([Tn,vn,a]),ge=Tn,Ge=vn,qt=!0;break}}if(!qt)return null}function Me(qt,Dt){let[si,Tn]=de(qt,Dt),vn=[];for(let Mn=-2;Mn<=2;Mn++)for(let Cn=-2;Cn<=2;Cn++){let on=si+Mn,ri=Tn+Cn;if(on<0||on>=67||ri<0||ri>=53)continue;let[Ii,qi]=Q(on,ri);if(!xt(Ii,qi))continue;let Yi=Math.max(1,Math.ceil(Math.hypot(Ii-qt,qi-Dt)/.06));Array.from({length:Yi+1},(kx,Nh)=>xt(qt+(Ii-qt)*Nh/Yi,Dt+(qi-Dt)*Nh/Yi)).every(Boolean)&&vn.push({cell:[on,ri],distance:Math.hypot(Ii-qt,qi-Dt)})}return vn.sort((Mn,Cn)=>Mn.distance-Cn.distance)[0]?.cell}let Ue=Me(ge,Ge),it=Me(M,T);if(!Ue||!it)return null;let[At,et]=Ue,[ot,Rt]=it,En=et*67+At,dn=Rt*67+ot,Ye=[En],Pt=new Map([[En,-1]]);for(let qt=0;qt<Ye.length;qt++){let Dt=Ye[qt];if(Dt===dn)break;let si=Dt%67,Tn=Math.floor(Dt/67);for(let[vn,Mn]of[[0,-1],[1,0],[0,1],[-1,0]]){let Cn=si+vn,on=Tn+Mn,ri=on*67+Cn;Cn<0||Cn>=67||on<0||on>=53||Pt.has(ri)||!xt(...Q(Cn,on))||(Pt.set(ri,Dt),Ye.push(ri))}}if(!Pt.has(dn))return null;let wn=[],fn=dn;for(;fn!==En;)wn.push(Q(fn%67,Math.floor(fn/67))),fn=Pt.get(fn);return wn.reverse(),wn.unshift(Q(At,et)),wn.push([M,T]),[...oe,...wn]}let yn=new Bn(.055,.055,.012,12),Xe=new Zt({color:"#f5d99a"});function nn(){he.clear(),p=!0}function Ct(M){F(!1);let T=ti[M];if(!T)return;let L=zt(...T.to);if(!L){rn(window.GroceryLanguage?.isRussian()?"\u041E\u0442\u044A\u0435\u0434\u044C\u0442\u0435 \u043D\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u0442 \u043F\u043E\u043B\u043A\u0438 \u0438 \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0442\u0434\u0435\u043B \u0435\u0449\u0451 \u0440\u0430\u0437.":"\u0422\u0430\u0432\u0438\u0443\u0440\u0430\u0430\u0441 \u0431\u0430\u0433\u0430 \u0437\u044D\u0440\u044D\u0433 \u0445\u043E\u043B\u0434\u043E\u043E\u0434 \u0445\u044D\u0441\u0433\u044D\u044D \u0434\u0430\u0445\u0438\u043D \u0441\u043E\u043D\u0433\u043E\u043E\u0440\u043E\u0439.");return}nn(),x={path:L,index:0,yaw:T.yaw,pitch:T.pitch,id:M},L.forEach(([Y,k],te)=>{if(te%2)return;let ue=new We(yn,Xe);ue.position.set(Y,.018,k),ue.userData.pathIndex=te,he.add(ue)}),rn(`${T.name} \u0440\u04AF\u04AF \u044F\u0432\u0436 \u0431\u0430\u0439\u043D\u0430\u2026`),D.clear(),p=!0}function gi(M,T){let L=Math.atan2(Math.sin(M-a),Math.cos(M-a));Xt(L*Math.min(1,T*7))}function rn(M){let T=window.GroceryLanguage?.isRussian()?window.GroceryLanguage.translateText(M):M;Vt("world-hint").textContent!==T&&(Vt("world-hint").textContent=T)}function Xi(M){X.setFromCamera(M,r),X.far=3.55;let T=X.intersectObjects([...d,...f.flatMap(Y=>Y.isOpen?[Y.handle]:[Y.pane,Y.handle])].filter(Y=>{if(!Y.parent)return!1;for(let k=Y;k;k=k.parent)if(!k.visible)return!1;return!0}),!1)[0];if(!T)return null;if(T.object.userData.fridgeDoor!==void 0)return{doorId:T.object.userData.fridgeDoor,distance:T.distance};if(T.object.userData.waste)return{waste:!0,distance:T.distance};if(T.object.userData.station)return{station:!0,distance:T.distance};let L=X.intersectObjects(h,!1);return L[0]&&L[0].distance<T.distance-.08?null:{lotId:T.object.userData.lotId,distance:T.distance,carrierOverlap:df(X.ray,Pe,re)}}function ii(){let M=r.position,T=Math.hypot(M.x-It.x,M.z-(It.z-.4))<2.8;T!==b&&(b=T,Jt.atStation(T));let L=T?"packing":Object.keys(ti).filter(Ye=>Ye!=="packing").sort((Ye,Pt)=>Math.hypot(M.x-ti[Ye].to[0],M.z-ti[Ye].to[1])-Math.hypot(M.x-ti[Pt].to[0],M.z-ti[Pt].to[1]))[0];O!==L&&(O=L,Vt("location-name").innerHTML=`<span data-learning>${ti[L].name}</span>${Jt.russianHints?.()?`<small class="department-ru" lang="ru">${window.GroceryLanguage?.DEPARTMENTS[L]||""}</small>`:""}`);let Y=new P(-Math.sin(a),0,-Math.cos(a)),k=[...m.values()].filter(Ye=>Ye.group.visible).map(Ye=>{let Pt=Ye.positions.map(wn=>({distance:Math.hypot(wn.x-M.x,wn.z-M.z),dot:new P(wn.x-M.x,0,wn.z-M.z).normalize().dot(Y)})).filter(wn=>wn.dot>.18).sort((wn,fn)=>wn.distance-fn.distance)[0];return Pt?{...Ye,...Pt}:null}).filter(Ye=>Ye&&Ye.distance<3.55).sort((Ye,Pt)=>Ye.distance-Pt.distance),te=!T&&k.some(Ye=>Ye.dot>.3&&Ye.distance<(v?3.25:2.75));te!==v&&(v=te,document.querySelector(".location-plaque").hidden=!te);let ue=[],de=new Set;for(let Ye of k){let Pt=Ye.lot.variantId||Ye.lot.productId;if(!de.has(Pt)&&(de.add(Pt),ue.push(Ye),ue.length===10))break}Yd(ue.map(({lot:Ye})=>Er(Ye)?.id||Ye.productId));for(let{lot:Ye}of ue)Sr.promote("product:"+(Er(Ye)?.id||Ye.productId),50),qn(Ye).userData.requestDetail?.();let Q=ue.map(Ye=>Ye.lot.id+":"+(lt(Ye.lot.id)?.isOpen||!1)).join();Q!==R&&(R=Q,Vt("nearby-products").innerHTML=ue.map(({lot:Ye})=>`<button data-world-lot="${Ye.id}">${window.GroceryArt.product(Ye.productId,"",Ye.pack,kt.photoKey(Ye))}<span><span data-learning>${kt.lotName(Ye)}</span>${Jt.russianHints?.()?`<small class="nearby-ru" lang="ru">${window.GroceryRussian.name(Ye)}${kt.BREAD_BY_ID[Ye.variantId]?" \xB7 "+window.GroceryRussian.name(Ye.productId):""}</small>`:""}<small>${kt.isBulk(Ye)?"\u0417\u0430\u0434\u0433\u0430\u0439 \xB7 ":kt.BY_ID[Ye.productId].category==="produce"?"\u0421\u0430\u0432\u043B\u0430\u0441\u0430\u043D \xB7 ":""}${kt.lotUnit(Ye)}</small>${Ha(Ye)}</span><span class="nearby-arrow">\u2197</span></button>`).join(""),Vt("nearby-panel").hidden=!ue.length);let oe=window.GroceryLanguage?.isRussian()?"\u0420\u044F\u0434\u043E\u043C \u0441 \u0432\u0430\u043C\u0438":"\u041E\u0439\u0440 \u0431\u0430\u0439\u0433\u0430\u0430 \u0431\u0430\u0440\u0430\u0430",ge=Vt("nearby-products").children.length,Ge=[L,ge,_,Jt.russianHints?.(),oe].join("|");Vt("nearby-toggle").dataset.contentKey!==Ge&&(Vt("nearby-toggle").dataset.contentKey=Ge,Vt("nearby-toggle").innerHTML=`<span class="nearby-standard">${oe} \xB7 ${ge}</span><span class="nearby-place"><strong data-learning>${ti[L].name}</strong>${Jt.russianHints?.()?`<small lang="ru">${window.GroceryLanguage?.DEPARTMENTS[L]||""}</small>`:""}</span><span class="nearby-caret" aria-hidden="true">${_?"\u2303":"\u2304"}</span>`);let Me=Xi(le)||Xi(new ve(0,0));if(Me?.lotId){let Ye=lt(Me.lotId);Ye&&!Ye.isOpen&&(Me={doorId:Ye.id,distance:Me.distance})}A=Me;let Ue=Me?.lotId&&kt.isBulk(m.get(Me.lotId).lot)&&kt.BY_ID[m.get(Me.lotId).lot.productId].category==="produce",it=!x&&Me?.doorId===void 0&&!Me?.station&&!Me?.waste&&ue.some(Ye=>{let Pt=lt(Ye.lot.id);return!Pt||Pt.isOpen});Vt("world-hint").classList.toggle("is-price-help",it),x||rn(Me?.waste?window.GroceryLanguage?.isRussian()?"\u041A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440 \u0434\u043B\u044F \u0431\u0440\u0430\u043A\u0430 \xB7 \u043D\u0430\u0436\u043C\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043A\u0440\u044B\u0442\u044C.":"\u041C\u0443\u0443\u0434\u0441\u0430\u043D \u0431\u0430\u0440\u0430\u0430\u043D\u044B \u0441\u0430\u0432 \xB7 \u0434\u0430\u0440\u0436 \u043D\u044D\u044D\u0433\u044D\u044D\u0440\u044D\u0439.":Me?.doorId!==void 0?window.GroceryLanguage?.isRussian()?"\u041E\u0442\u043A\u0440\u043E\u0439\u0442\u0435 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A, \u0437\u0430\u0442\u0435\u043C \u0432\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043F\u0430\u043A\u043E\u0432\u043A\u0443.":"\u0425\u04E9\u0440\u0433\u04E9\u0433\u0447\u04E9\u04E9 \u043D\u044D\u044D\u0433\u044D\u044D\u0434 \u0431\u0430\u0440\u0430\u0430\u0433\u0430\u0430 \u0441\u043E\u043D\u0433\u043E\u043E\u0440\u043E\u0439.":Me?.station?"\u0411\u044D\u043B\u0442\u0433\u044D\u0445 \u0448\u0438\u0440\u044D\u044D \xB7 \u0434\u0430\u0440\u0436 \u0443\u0443\u0442\u0430\u0430 \u0448\u0430\u043B\u0433\u0430\u0430\u0440\u0430\u0439":it?window.GroceryLanguage?.isRussian()?"\u041D\u0430\u0436\u043C\u0438\u0442\u0435 \u043D\u0430 \u0446\u0435\u043D\u043D\u0438\u043A, \u0447\u0442\u043E\u0431\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0442\u043E\u0432\u0430\u0440 \u043A\u0440\u0443\u043F\u043D\u0435\u0435.":"\u0411\u0430\u0440\u0430\u0430\u0433 \u0442\u043E\u043C\u0440\u0443\u0443\u043B\u0436 \u0445\u0430\u0440\u0430\u0445\u044B\u043D \u0442\u0443\u043B\u0434 \u04AF\u043D\u0438\u0439\u043D \u0448\u043E\u0448\u0433\u043E\u043D \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u0430\u0430\u0440\u0430\u0439.":Me?.lotId?`${kt.lotName(m.get(Me.lotId).lot)} \xB7 ${Ue?"\u0433\u0430\u0434\u043D\u0430 \u0431\u0430\u0439\u0434\u043B\u044B\u0433 \u043D\u044C \u0430\u0436\u0438\u0433\u043B\u0430\u0430\u0440\u0430\u0439":"\u0434\u0430\u0440\u0436 \u0448\u043E\u0448\u0433\u044B\u0433 \u043D\u044C \u0445\u0430\u0440\u043D\u0430 \u0443\u0443"}`:"\u0422\u0430\u0432\u0438\u0443\u0440\u0442 \u043E\u0439\u0440\u0442\u043E\u0436, \u0431\u0430\u0440\u0430\u0430\u043D \u0434\u044D\u044D\u0440 \u0434\u0430\u0440\u0430\u0430\u0440\u0430\u0439.");let At=window.GroceryLanguage?.isRussian(),et=He();Vt("world-prompt").classList.toggle("has-context",!!(x||me||Me?.station||Me?.waste||Me?.doorId!==void 0)),me&&rn(At?et==="cart"?"\u0422\u0435\u043B\u0435\u0436\u043A\u0430 \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0440\u044F\u0434\u043E\u043C. \u0412\u044B \u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u043B\u043A\u0443.":"\u041A\u043E\u0440\u0437\u0438\u043D\u0430 \u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u0440\u044F\u0434\u043E\u043C. \u0412\u044B \u043E\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0435\u0442\u0435 \u043F\u043E\u043B\u043A\u0443.":et==="cart"?"\u0422\u044D\u0440\u044D\u0433 \u0445\u0430\u0436\u0443\u0443\u0434 \u0431\u0430\u0439\u043D\u0430. \u0422\u0430\u0432\u0438\u0443\u0440\u044B\u043D \u0431\u0430\u0440\u0430\u0430\u0433 \u04AF\u0437\u044D\u044D\u0440\u044D\u0439.":"\u0421\u0430\u0433\u0441 \u0445\u0430\u0436\u0443\u0443\u0434 \u0431\u0430\u0439\u043D\u0430. \u0422\u0430\u0432\u0438\u0443\u0440\u044B\u043D \u0431\u0430\u0440\u0430\u0430\u0433 \u04AF\u0437\u044D\u044D\u0440\u044D\u0439.");let ot=!!et&&ue.some(Ye=>{let Pt=lt(Ye.lot.id);return!Pt||Pt.isOpen})&&Me?.doorId===void 0&&!Me?.waste&&!Me?.station;Vt("interact-button").hidden=!Me&&!me&&!ot;let Rt=Me?.waste?"\u041C\u0443\u0443\u0434\u0441\u0430\u043D \u0431\u0430\u0440\u0430\u0430\u043D\u044B \u0441\u0430\u0432":Me?.doorId!==void 0?f[Me.doorId].opening?window.GroceryLanguage?.isRussian()?"\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A":"\u0425\u04E9\u0440\u0433\u04E9\u0433\u0447\u0438\u0439\u0433 \u0445\u0430\u0430\u0445":window.GroceryLanguage?.isRussian()?"\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A":"\u0425\u04E9\u0440\u0433\u04E9\u0433\u0447\u0438\u0439\u0433 \u043D\u044D\u044D\u0445":Me?.station?"\u0423\u0443\u0442\u0430\u0430 \u0431\u044D\u043B\u0442\u0433\u044D\u0445":Ue?"\u0413\u0430\u0434\u043D\u0430 \u0431\u0430\u0439\u0434\u0430\u043B \u0445\u0430\u0440\u0430\u0445":"\u0428\u043E\u0448\u0433\u043E \u0445\u0430\u0440\u0430\u0445",En=window.GroceryLanguage?.isRussian()?window.GroceryLanguage.translateText(Rt):Rt,dn=me?At?et==="cart"?"\u0412\u0437\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0436\u043A\u0443":"\u0412\u0437\u044F\u0442\u044C \u043A\u043E\u0440\u0437\u0438\u043D\u0443":et==="cart"?"\u0422\u044D\u0440\u0433\u044D\u044D \u0430\u0432\u0430\u0445":"\u0421\u0430\u0433\u0441\u0430\u0430 \u0430\u0432\u0430\u0445":ot?At?"\u041E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u043E\u043B\u043A\u0443":"\u0422\u0430\u0432\u0438\u0443\u0440\u044B\u0433 \u04AF\u0437\u044D\u0445":En;Vt("interact-button").textContent!==dn&&(Vt("interact-button").textContent=dn),mi.classList.toggle("can-interact",!!Me),ka()}function Yn(M){if(!M)return;if(M.lotId&&M.carrierOverlap&&F(!0),(M.station||M.waste)&&F(!1),D.clear(),x=null,nn(),w(!1),M.doorId!==void 0){f[M.doorId].toggle(),R="",p=!0,H=!0;return}let T=M.lotId&&lt(M.lotId);if(T&&!T.isOpen){T.open(),R="",p=!0,H=!0;return}M.waste?Jt.openWaste():M.station?Jt.openPacking():Jt.inspect(M.lotId)}let rt=null;mi.addEventListener("pointerdown",M=>{M.button!==0||rt||(rt={id:M.pointerId,x:M.clientX,y:M.clientY,lastX:M.clientX,lastY:M.clientY,moved:!1},mi.setPointerCapture(M.pointerId),mi.focus({preventScroll:!0}))}),mi.addEventListener("pointermove",M=>{if(le.set(M.clientX/window.innerWidth*2-1,-M.clientY/window.innerHeight*2+1),!rt||rt.id!==M.pointerId){U=0;return}Math.hypot(M.clientX-rt.x,M.clientY-rt.y)>5&&(rt.moved=!0),rt.moved&&(x=null,nn(),Xt(-(M.clientX-rt.lastX)*.0042),o-=(M.clientY-rt.lastY)*.0032,o=Math.max(-.8,Math.min(.7,o)),p=!0,U=0),rt.lastX=M.clientX,rt.lastY=M.clientY}),mi.addEventListener("pointerup",M=>{!rt||rt.id!==M.pointerId||(rt.moved||(J.set(M.clientX/window.innerWidth*2-1,-M.clientY/window.innerHeight*2+1),Yn(Xi(J))),rt=null)});let cn=M=>{rt?.id===M.pointerId&&(rt=null)};mi.addEventListener("pointercancel",cn),mi.addEventListener("lostpointercapture",cn),window.addEventListener("keydown",M=>{document.querySelector("dialog[open]")||!window.GroceryInput.gameKey(M)||(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(M.code)&&(M.preventDefault(),D.add(M.code),x=null,nn()),(M.code==="KeyE"||M.code==="Enter"&&document.activeElement===mi)&&(M.preventDefault(),Yn(A)))}),window.addEventListener("keyup",M=>D.delete(M.code));let Rn=()=>{D.clear(),q.clear(),rt=null};window.addEventListener("grocery:releasecontrols",Rn),window.addEventListener("blur",Rn),document.addEventListener("visibilitychange",()=>{Rn(),document.hidden||(I=performance.now(),p=!0)}),mi.addEventListener("webglcontextrestored",()=>{Gt.shadowMap.needsUpdate=!0,p=!0}),document.querySelectorAll("[data-walk]").forEach(M=>{let T=M.dataset.walk;M.addEventListener("pointerdown",k=>{k.button!==0||q.has(T)||(k.preventDefault(),q.set(T,{id:k.pointerId,at:performance.now()}),M.setPointerCapture(k.pointerId),D.add(T),x=null,nn())});let L=k=>{let te=q.get(T);if(te?.id===k.pointerId&&(q.delete(T),D.delete(T),performance.now()-te.at<130)){if(T==="ArrowLeft")Xt(.18);else if(T==="ArrowRight")Xt(-.18);else{let de=T==="KeyW"?1:T==="KeyS"?-1:0,Q=T==="KeyD"?1:T==="KeyA"?-1:0;Ot((-Math.sin(a)*de+Math.cos(a)*Q)*.38,(-Math.cos(a)*de-Math.sin(a)*Q)*.38)}p=!0,U=0}},Y=k=>{q.get(T)?.id===k.pointerId&&(q.delete(T),D.delete(T))};M.addEventListener("pointerup",L),M.addEventListener("pointercancel",Y),M.addEventListener("lostpointercapture",Y),M.addEventListener("keydown",k=>{window.GroceryInput.gameKey(k)&&(k.code==="Space"||k.code==="Enter")&&(D.add(T),k.preventDefault())}),M.addEventListener("keyup",k=>{(k.code==="Space"||k.code==="Enter")&&D.delete(T)})}),Vt("nearby-toggle").addEventListener("click",()=>{w(!_),U=0,p=!0}),Vt("nearby-products").addEventListener("click",M=>{let T=M.target.closest("[data-world-lot]");T&&m.has(T.dataset.worldLot)&&Yn({lotId:T.dataset.worldLot})}),Vt("interact-button").addEventListener("click",()=>{me?F(!1):He()&&A?.doorId===void 0&&!A?.station&&!A?.waste?F(!0):Yn(A)}),Vt("map-button").addEventListener("click",()=>requestAnimationFrame(Ga)),document.querySelectorAll("[data-destination]").forEach(M=>M.addEventListener("click",()=>{let T=M.dataset.destination;document.querySelectorAll("dialog[open]").forEach(L=>{(L.id==="map-dialog"||L.id==="packing-dialog")&&L.close()}),Ct(T)})),window.addEventListener("grocery:inventory",()=>{dt(),Bs(),Te(),Ft(),R=""}),window.addEventListener("grocery:cart",()=>{bt(),Te()}),window.addEventListener("grocery:texturepreview",()=>{p=!0}),window.addEventListener("grocery:transport",()=>{Te(),Ft()}),window.addEventListener("grocery:navigation-hints",Bs),window.addEventListener("resize",()=>{Rn(),r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),Gt.setSize(window.innerWidth,window.innerHeight),$(),Te(),p=!0}),window.ShopWorld={navigate:Ct,atStation:()=>b},i("stock",50),await e(),Object.keys(window.GroceryBagAssets||{}).forEach(G),dt(),i("cold",80),await e(),Bs(),Te(),ii(),i("bags",95);let $t=new P;function an(M){let T=Math.min(.04,(M-I)/1e3);I=M;let L=!!document.querySelector("dialog[open]")||document.hidden||!document.body.classList.contains("game-started");if(!L){let te=(D.has("KeyW")||D.has("ArrowUp")?1:0)-(D.has("KeyS")||D.has("ArrowDown")?1:0),ue=(D.has("KeyD")?1:0)-(D.has("KeyA")?1:0);if(D.has("ArrowLeft")&&Xt(T*1.55),D.has("ArrowRight")&&Xt(-T*1.55),te||ue){let de=Math.hypot(te,ue);te/=de,ue/=de,Ot((-Math.sin(a)*te+Math.cos(a)*ue)*T*2.65,(-Math.cos(a)*te-Math.sin(a)*ue)*T*2.65),Z+=T*10}else if(x){let de=x.path[x.index];if(de){let Q=de[0]-r.position.x,oe=de[1]-r.position.z,ge=Math.hypot(Q,oe);if(ge<.12)x.index++,he.children.forEach(Ge=>{Ge.visible=Ge.userData.pathIndex>=x.index});else{let Ge=Math.min(ge,T*3.6);gi(Number.isFinite(de[2])?de[2]:Math.atan2(-Q,-oe),T),Ot(Q/ge*Ge,oe/ge*Ge),o+=((x.pitch??l())-o)*Math.min(1,T*4),Z+=T*10}}else gi(x.yaw,T),p=!0,Math.abs(Math.atan2(Math.sin(x.yaw-a),Math.cos(x.yaw-a)))<.025&&(x=null,nn())}r.position.y=1.64+((te||ue||x)&&!K.matches?Math.sin(Z)*.014:0),r.rotation.set(o,a,0,"YXZ"),$(),(p||U===0)&&(H=!0),H&&M-U>170&&(ii(),U=M,H=!1)}let Y=me?1:0,k=K.matches?Y:Ti.damp(ke,Y,12,T);if(Math.abs(k-ke)>5e-4&&(ke=Math.abs(k-Y)<.001?Y:k,$(),p=!0),!L)for(let te of f)te.tick(T,K.matches)&&(p=!0,H=!0);r.getWorldDirection($t),_t.tick(T,$t.z>.12,L,K.matches)&&(p=!0),p&&!document.hidden&&(Gt.render(t,r),p=!1,Fs||(Fs=!0,i("ready",100),window.dispatchEvent(new CustomEvent("grocery:worldready",{detail:{failed:Us}})))),requestAnimationFrame(an)}requestAnimationFrame(an)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
