(()=>{var _u=0,Ac=1,yu=2;var Rc=1,Ra=2,Gn=3,yn=0,Zt=1,Et=2,ri=0,ti=1,Wn=2,Cc=3,Ic=4,vu=5,xi=100,xu=101,Mu=102,Su=103,bu=104,Eu=200,Tu=201,wu=202,Au=203,Jo=204,Ko=205,Ru=206,Cu=207,Iu=208,Pu=209,Lu=210,Du=211,Uu=212,Nu=213,Fu=214,Ca=0,Ia=1,Pa=2,zi=3,La=4,Da=5,Ua=6,Na=7,Pc=0,Bu=1,Ou=2,oi=0,zu=1,ku=2,Hu=3,Fa=4,Vu=5,Gu=6,Wu=7;var Lc=300,Qi=301,ji=302,qs=303,Ba=304,so=306,Cs=1e3,vi=1001,Qo=1002,an=1003,Xu=1004;var ro=1005;var Rn=1006,Oa=1007;var Ai=1008;var Ln=1009,Dc=1010,Uc=1011,Ys=1012,za=1013,Ri=1014,Dn=1015,Zs=1016,ka=1017,Ha=1018,$s=1020,Nc=35902,Fc=35899,Bc=1021,Oc=1022,xn=1023,Is=1026,Js=1027,Va=1028,Ga=1029,zc=1030,Wa=1031;var Xa=1033,oo=33776,ao=33777,lo=33778,co=33779,qa=35840,Ya=35841,Za=35842,$a=35843,Ja=36196,Ka=37492,Qa=37496,ja=37808,el=37809,tl=37810,nl=37811,il=37812,sl=37813,rl=37814,ol=37815,al=37816,ll=37817,cl=37818,hl=37819,ul=37820,dl=37821,fl=36492,pl=36494,ml=36495,gl=36283,_l=36284,yl=36285,vl=36286;var wr=2300,jo=2301,$o=2302,gc=2400,_c=2401,yc=2402;var qu=3200,Yu=3201;var kc=0,Zu=1,Un="",qt="srgb",ki="srgb-linear",Ar="linear",_t="srgb";var Bi=7680;var vc=519,$u=512,Ju=513,Ku=514,Hc=515,Qu=516,ju=517,ed=518,td=519,ea=35044,Vc=35048;var Gc="300 es",An=2e3,Rr=2001;var ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},$t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,Sr=Math.PI/180,Ps=180/Math.PI;function On(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function Wc(i,e){return(i%e+e)%e}function Rf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Cf(i,e,t){return i!==e?(t-i)/(e-i):0}function br(i,e,t){return(1-t)*i+t*e}function If(i,e,t,n){return br(i,e,1-Math.exp(-t*n))}function Pf(i,e=1){return e-Math.abs(Wc(i,e*2)-e)}function Lf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Df(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Uf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Nf(i,e){return i+Math.random()*(e-i)}function Ff(i){return i*(.5-Math.random())}function Bf(i){i!==void 0&&(Oh=i);let e=Oh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Of(i){return i*Sr}function zf(i){return i*Ps}function kf(i){return(i&i-1)===0&&i!==0}function Hf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gf(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*f,a*c);break;case"YZY":i.set(l*f,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*f,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*d,a*c);break;case"YXY":i.set(l*d,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var ai={DEG2RAD:Sr,RAD2DEG:Ps,generateUUID:On,clamp:ot,euclideanModulo:Wc,mapLinear:Rf,inverseLerp:Cf,lerp:br,damp:If,pingpong:Pf,smoothstep:Lf,smootherstep:Df,randInt:Uf,randFloat:Nf,randFloatSpread:Ff,seededRandom:Bf,degToRad:Of,radToDeg:zf,isPowerOfTwo:kf,ceilPowerOfTwo:Hf,floorPowerOfTwo:Vf,setQuaternionFromProperEuler:Gf,normalize:mt,denormalize:wn},he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==f||c!==d||h!==g){let m=1-a,p=l*f+c*d+h*g+u*_,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let A=Math.sqrt(M),T=Math.atan2(A,p*b);m=Math.sin(m*T)/A,a=Math.sin(a*T)/A}let y=a*b;if(l=l*m+f*y,c=c*m+d*y,h=h*m+g*y,u=u*m+_*y,m===1-a){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(zh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(zh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Vl.copy(this).projectOnVector(e),this.sub(Vl)}reflect(e){return this.sub(Vl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vl=new R,zh=new ln,nt=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],M=s[4],y=s[7],A=s[2],T=s[5],I=s[8];return r[0]=o*_+a*b+l*A,r[3]=o*m+a*M+l*T,r[6]=o*p+a*y+l*I,r[1]=c*_+h*b+u*A,r[4]=c*m+h*M+u*T,r[7]=c*p+h*y+u*I,r[2]=f*_+d*b+g*A,r[5]=f*m+d*M+g*T,r[8]=f*p+d*y+g*I,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*r,d=c*r-o*l,g=t*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gl.makeScale(e,t)),this}rotate(e){return this.premultiply(Gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Gl=new nt;function Xc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nd(){let i=Cr("canvas");return i.style.display="block",i}var kh={};function Ls(i){i in kh||(kh[i]=!0,console.warn(i))}function id(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hh=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wf(){let i={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_t&&(s.r=ei(s.r),s.g=ei(s.g),s.b=ei(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_t&&(s.r=Rs(s.r),s.g=Rs(s.g),s.b=Rs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?Ar:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ls("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ki]:{primaries:e,whitePoint:n,transfer:Ar,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:e,whitePoint:n,transfer:_t,toXYZ:Hh,fromXYZ:Vh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}}),i}var ut=Wf();function ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var us,ta=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{us===void 0&&(us=Cr("canvas")),us.width=e.width,us.height=e.height;let s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=us}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Cr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ei(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ei(t[n]/255)*255):t[n]=ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xf=0,Ds=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=On(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var qf=0,Xl=new R,tn=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=vi,s=vi,r=Rn,o=Ai,a=xn,l=Ln,c=i.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qf++}),this.uuid=On(),this.name="",this.source=new Ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cs:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cs:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Lc;tn.DEFAULT_ANISOTROPY=1;var gt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(d+1)/2,A=(p+1)/2,T=(h+f)/4,I=(u+_)/4,D=(g+m)/4;return M>y&&M>A?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=I/n):y>A?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=D/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=I/r,s=D/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},na=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new tn(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ds(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},zn=class extends na{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ia=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Mo.subVectors(this.max,hr),ds.subVectors(e.a,hr),fs.subVectors(e.b,hr),ps.subVectors(e.c,hr),fi.subVectors(fs,ds),pi.subVectors(ps,fs),Di.subVectors(ds,ps);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Di.z,Di.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Di.z,0,-Di.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Di.y,Di.x,0];return!ql(t,ds,fs,ps,Mo)||(t=[1,0,0,0,1,0,0,0,1],!ql(t,ds,fs,ps,Mo))?!1:(So.crossVectors(fi,pi),t=[So.x,So.y,So.z],ql(t,ds,fs,ps,Mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Zn=[new R,new R,new R,new R,new R,new R,new R,new R],bn=new R,xo=new kn,ds=new R,fs=new R,ps=new R,fi=new R,pi=new R,Di=new R,hr=new R,Mo=new R,So=new R,Ui=new R;function ql(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ui.fromArray(i,r);let a=s.x*Math.abs(Ui.x)+s.y*Math.abs(Ui.y)+s.z*Math.abs(Ui.z),l=e.dot(Ui),c=t.dot(Ui),h=n.dot(Ui);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Yf=new kn,ur=new R,Yl=new R,Hn=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Yf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);let t=ur.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ur,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(Yl)),this.expandByPoint(ur.copy(e.center).sub(Yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},$n=new R,Zl=new R,bo=new R,mi=new R,$l=new R,Eo=new R,Jl=new R,Us=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=$n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($n.copy(this.origin).addScaledVector(this.direction,t),$n.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Zl.copy(e).add(t).multiplyScalar(.5),bo.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Zl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(bo),a=mi.dot(this.direction),l=-mi.dot(bo),c=mi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Zl).addScaledVector(bo,f),d}intersectSphere(e,t){$n.subVectors(e.center,this.origin);let n=$n.dot(this.direction),s=$n.dot($n)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,$n)!==null}intersectTriangle(e,t,n,s,r){$l.subVectors(t,e),Eo.subVectors(n,e),Jl.crossVectors($l,Eo);let o=this.direction.dot(Jl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);let l=a*this.direction.dot(Eo.crossVectors(mi,Eo));if(l<0)return null;let c=a*this.direction.dot($l.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(Jl);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ft=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,f,d,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/ms.setFromMatrixColumn(e,0).length(),r=1/ms.setFromMatrixColumn(e,1).length(),o=1/ms.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,_=c*u;t[0]=f-_*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+_,t[1]=l*u,t[5]=_*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-_*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+_,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=_*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zf,e,$f)}lookAt(e,t,n){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),gi.crossVectors(n,un),gi.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),gi.crossVectors(n,un)),gi.normalize(),To.crossVectors(un,gi),s[0]=gi.x,s[4]=To.x,s[8]=un.x,s[1]=gi.y,s[5]=To.y,s[9]=un.y,s[2]=gi.z,s[6]=To.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],M=n[7],y=n[11],A=n[15],T=s[0],I=s[4],D=s[8],S=s[12],x=s[1],P=s[5],F=s[9],V=s[13],O=s[2],Z=s[6],W=s[10],ne=s[14],X=s[3],ue=s[7],Me=s[11],Re=s[15];return r[0]=o*T+a*x+l*O+c*X,r[4]=o*I+a*P+l*Z+c*ue,r[8]=o*D+a*F+l*W+c*Me,r[12]=o*S+a*V+l*ne+c*Re,r[1]=h*T+u*x+f*O+d*X,r[5]=h*I+u*P+f*Z+d*ue,r[9]=h*D+u*F+f*W+d*Me,r[13]=h*S+u*V+f*ne+d*Re,r[2]=g*T+_*x+m*O+p*X,r[6]=g*I+_*P+m*Z+p*ue,r[10]=g*D+_*F+m*W+p*Me,r[14]=g*S+_*V+m*ne+p*Re,r[3]=b*T+M*x+y*O+A*X,r[7]=b*I+M*P+y*Z+A*ue,r[11]=b*D+M*F+y*W+A*Me,r[15]=b*S+M*V+y*ne+A*Re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*d-n*l*d)+_*(+t*l*d-t*c*f+r*o*f-s*o*d+s*c*h-r*l*h)+m*(+t*c*u-t*a*d-r*o*u+n*o*d+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*f+s*o*u-n*o*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*f*c+_*l*d-a*m*d-u*l*p+a*f*p,M=g*f*c-h*m*c-g*l*d+o*m*d+h*l*p-o*f*p,y=h*_*c-g*u*c+g*a*d-o*_*d-h*a*p+o*u*p,A=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,T=t*b+n*M+s*y+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return e[0]=b*I,e[1]=(_*f*r-u*m*r-_*s*d+n*m*d+u*s*p-n*f*p)*I,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*p+n*l*p)*I,e[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*d-n*l*d)*I,e[4]=M*I,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*p+t*f*p)*I,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*p-t*l*p)*I,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*d+t*l*d)*I,e[8]=y*I,e[9]=(g*u*r-h*_*r-g*n*d+t*_*d+h*n*p-t*u*p)*I,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*p+t*a*p)*I,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*d-t*a*d)*I,e[12]=A*I,e[13]=(h*_*s-g*u*s+g*n*f-t*_*f-h*n*m+t*u*m)*I,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*I,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*f+t*a*f)*I,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,f=r*c,d=r*h,g=r*u,_=o*h,m=o*u,p=a*u,b=l*c,M=l*h,y=l*u,A=n.x,T=n.y,I=n.z;return s[0]=(1-(_+p))*A,s[1]=(d+y)*A,s[2]=(g-M)*A,s[3]=0,s[4]=(d-y)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+M)*I,s[9]=(m-b)*I,s[10]=(1-(f+_))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=ms.set(s[0],s[1],s[2]).length(),o=ms.set(s[4],s[5],s[6]).length(),a=ms.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,h=1/o,u=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=u,En.elements[9]*=u,En.elements[10]*=u,t.setFromRotationMatrix(En),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=An,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),d=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===An)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Rr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=An,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),d=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===An)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Rr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ms=new R,En=new ft,Zf=new R(0,0,0),$f=new R(1,1,1),gi=new R,To=new R,un=new R,Gh=new ft,Wh=new ln,Cn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wh.setFromEuler(this),this.setFromQuaternion(Wh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Jf=0,Xh=new R,gs=new ln,Jn=new ft,wo=new R,dr=new R,Kf=new R,Qf=new ln,qh=new R(1,0,0),Yh=new R(0,1,0),Zh=new R(0,0,1),$h={type:"added"},jf={type:"removed"},_s={type:"childadded",child:null},Kl={type:"childremoved",child:null},Mt=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new R,t=new Cn,n=new ln,s=new R(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ft},normalMatrix:{value:new nt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.multiply(gs),this}rotateOnWorldAxis(e,t){return gs.setFromAxisAngle(e,t),this.quaternion.premultiply(gs),this}rotateX(e){return this.rotateOnAxis(qh,e)}rotateY(e){return this.rotateOnAxis(Yh,e)}rotateZ(e){return this.rotateOnAxis(Zh,e)}translateOnAxis(e,t){return Xh.copy(e).applyQuaternion(this.quaternion),this.position.add(Xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qh,e)}translateY(e){return this.translateOnAxis(Yh,e)}translateZ(e){return this.translateOnAxis(Zh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(dr,wo,this.up):Jn.lookAt(wo,dr,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),gs.setFromRotationMatrix(Jn),this.quaternion.premultiply(gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($h),_s.child=e,this.dispatchEvent(_s),_s.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jf),Kl.child=e,this.dispatchEvent(Kl),Kl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($h),_s.child=e,this.dispatchEvent(_s),_s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,e,Kf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Qf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Mt.DEFAULT_UP=new R(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new R,Kn=new R,Ql=new R,Qn=new R,ys=new R,vs=new R,Jh=new R,jl=new R,ec=new R,tc=new R,nc=new gt,ic=new gt,sc=new gt,jn=class i{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Kn.subVectors(n,t),Ql.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(Kn),l=Tn.dot(Ql),c=Kn.dot(Kn),h=Kn.dot(Ql),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,n),sc.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(nc,r.x),o.addScaledVector(ic,r.y),o.addScaledVector(sc,r.z),o}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Kn.subVectors(e,t),Tn.cross(Kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Tn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ys.subVectors(s,n),vs.subVectors(r,n),jl.subVectors(e,n);let l=ys.dot(jl),c=vs.dot(jl);if(l<=0&&c<=0)return t.copy(n);ec.subVectors(e,s);let h=ys.dot(ec),u=vs.dot(ec);if(h>=0&&u<=h)return t.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ys,o);tc.subVectors(e,r);let d=ys.dot(tc),g=vs.dot(tc);if(g>=0&&d<=g)return t.copy(r);let _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vs,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Jh.subVectors(r,s),a=(u-h)/(u-h+(d-g)),t.copy(s).addScaledVector(Jh,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(ys,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Le=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=Wc(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=rc(o,r,e+1/3),this.g=rc(o,r,e),this.b=rc(o,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=qt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){let n=sd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ei(e.r),this.g=ei(e.g),this.b=ei(e.b),this}copyLinearToSRGB(e){return this.r=Rs(e.r),this.g=Rs(e.g),this.b=Rs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return ut.workingToColorSpace(Jt.copy(this),e),Math.round(ot(Jt.r*255,0,255))*65536+Math.round(ot(Jt.g*255,0,255))*256+Math.round(ot(Jt.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Jt.copy(this),t);let n=Jt.r,s=Jt.g,r=Jt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=qt){ut.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,n=Jt.g,s=Jt.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Ao);let n=br(_i.h,Ao.h,t),s=br(_i.s,Ao.s,t),r=br(_i.l,Ao.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Le;Le.NAMES=sd;var ep=0,In=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=On(),this.name="",this.type="Material",this.blending=ti,this.side=yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jo,this.blendDst=Ko,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==yn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jo&&(n.blendSrc=this.blendSrc),this.blendDst!==Ko&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Mi=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Bt=new R,Ro=new he,tp=0,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ea,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ro.fromBufferAttribute(this,t),Ro.applyMatrix3(e),this.setXY(t,Ro.x,Ro.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ea&&(e.usage=this.usage),e}};var Lr=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Xe=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},np=0,_n=new ft,oc=new Mt,xs=new R,dn=new kn,fr=new kn,Vt=new R,ct=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xc(e)?Dr:Lr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,t,n){return _n.makeTranslation(e,t,n),this.applyMatrix4(_n),this}scale(e,t,n){return _n.makeScale(e,t,n),this.applyMatrix4(_n),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xe(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let n=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Vt.addVectors(dn.min,fr.min),dn.expandByPoint(Vt),Vt.addVectors(dn.max,fr.max),dn.expandByPoint(Vt)):(dn.expandByPoint(fr.min),dn.expandByPoint(fr.max))}dn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Vt.fromBufferAttribute(a,c),l&&(xs.fromBufferAttribute(e,c),Vt.add(xs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<n.count;D++)a[D]=new R,l[D]=new R;let c=new R,h=new R,u=new R,f=new he,d=new he,g=new he,_=new R,m=new R;function p(D,S,x){c.fromBufferAttribute(n,D),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,D),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[D].add(_),a[S].add(_),a[x].add(_),l[D].add(m),l[S].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let D=0,S=b.length;D<S;++D){let x=b[D],P=x.start,F=x.count;for(let V=P,O=P+F;V<O;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let M=new R,y=new R,A=new R,T=new R;function I(D){A.fromBufferAttribute(s,D),T.copy(A);let S=a[D];M.copy(S),M.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(T,S);let P=y.dot(l[D])<0?-1:1;o.setXYZW(D,M.x,M.y,M.z,P)}for(let D=0,S=b.length;D<S;++D){let x=b[D],P=x.start,F=x.count;for(let V=P,O=P+F;V<O;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,l=new R,c=new R,h=new R,u=new R;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Nt(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kh=new ft,Ni=new Us,Co=new Hn,Qh=new R,Io=new R,Po=new R,Lo=new R,ac=new R,Do=new R,jh=new R,Uo=new R,He=class extends Mt{constructor(e=new ct,t=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Do.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ac.fromBufferAttribute(u,e),o?Do.addScaledVector(ac,h):Do.addScaledVector(ac.sub(t),h))}t.add(Do)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(r),Ni.copy(e.ray).recast(e.near),!(Co.containsPoint(Ni.origin)===!1&&(Ni.intersectSphere(Co,Qh)===null||Ni.origin.distanceToSquared(Qh)>(e.far-e.near)**2))&&(Kh.copy(r).invert(),Ni.copy(e.ray).applyMatrix4(Kh),!(n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,A=M;y<A;y+=3){let T=a.getX(y),I=a.getX(y+1),D=a.getX(y+2);s=No(this,p,e,n,c,h,u,T,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);s=No(this,o,e,n,c,h,u,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],b=Math.max(m.start,d.start),M=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=b,A=M;y<A;y+=3){let T=y,I=y+1,D=y+2;s=No(this,p,e,n,c,h,u,T,I,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let b=m,M=m+1,y=m+2;s=No(this,o,e,n,c,h,u,b,M,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function ip(i,e,t,n,s,r,o,a){let l;if(e.side===Zt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===yn,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Uo);return c<t.near||c>t.far?null:{distance:c,point:Uo.clone(),object:i}}function No(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Io),i.getVertexPosition(l,Po),i.getVertexPosition(c,Lo);let h=ip(i,e,t,n,Io,Po,Lo,jh);if(h){let u=new R;jn.getBarycoord(jh,Io,Po,Lo,u),s&&(h.uv=jn.getInterpolatedAttribute(s,a,l,c,u,new he)),r&&(h.uv1=jn.getInterpolatedAttribute(r,a,l,c,u,new he)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,l,c,u,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new R,materialIndex:0};jn.getNormal(Io,Po,Lo,f.normal),h.face=f,h.barycoord=u}return h}var Si=class i extends ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xe(c,3)),this.setAttribute("normal",new Xe(h,3)),this.setAttribute("uv",new Xe(u,2));function g(_,m,p,b,M,y,A,T,I,D,S){let x=y/I,P=A/D,F=y/2,V=A/2,O=T/2,Z=I+1,W=D+1,ne=0,X=0,ue=new R;for(let Me=0;Me<W;Me++){let Re=Me*P-V;for(let k=0;k<Z;k++){let j=k*x-F;ue[_]=j*b,ue[m]=Re*M,ue[p]=O,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[m]=0,ue[p]=T>0?1:-1,h.push(ue.x,ue.y,ue.z),u.push(k/I),u.push(1-Me/D),ne+=1}}for(let Me=0;Me<D;Me++)for(let Re=0;Re<I;Re++){let k=f+Re+Z*Me,j=f+Re+Z*(Me+1),te=f+(Re+1)+Z*(Me+1),Q=f+(Re+1)+Z*Me;l.push(k,j,Q),l.push(j,te,Q),X+=6}a.addGroup(d,X,S),d+=X,f+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Kt(i){let e={};for(let t=0;t<i.length;t++){let n=es(i[t]);for(let s in n)e[s]=n[s]}return e}function sp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function qc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var rd={clone:es,merge:Kt},rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,op=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rp,this.fragmentShader=op,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=sp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ur=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},yi=new R,eu=new he,tu=new he,Ot=class extends Ur{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,eu,tu),t.subVectors(tu,eu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Sr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ms=-90,Ss=1,sa=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Ms,Ss,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Ms,Ss,e,t);r.layers=this.layers,this.add(r);let o=new Ot(Ms,Ss,e,t);o.layers=this.layers,this.add(o);let a=new Ot(Ms,Ss,e,t);a.layers=this.layers,this.add(a);let l=new Ot(Ms,Ss,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Ms,Ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nr=class extends tn{constructor(e=[],t=Qi,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ra=class extends zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Si(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:es(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:ri});r.uniforms.tEquirect.value=t;let o=new He(s,r),a=t.minFilter;return t.minFilter===Ai&&(t.minFilter=Rn),new sa(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Ke=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ap={type:"move"},Ns=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ap)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ke;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Le(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Br=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ea,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new R,Fs=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=mt(t,this.array),n=mt(n,this.array),s=mt(s,this.array),r=mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Hi=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},bs,pr=new R,Es=new R,Ts=new R,ws=new he,mr=new he,od=new ft,Fo=new R,gr=new R,Bo=new R,nu=new he,lc=new he,iu=new he,Bs=class extends Mt{constructor(e=new Hi){if(super(),this.isSprite=!0,this.type="Sprite",bs===void 0){bs=new ct;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Or(t,5);bs.setIndex([0,1,2,0,2,3]),bs.setAttribute("position",new Fs(n,3,0,!1)),bs.setAttribute("uv",new Fs(n,2,3,!1))}this.geometry=bs,this.material=e,this.center=new he(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),od.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let o=this.center;Oo(Fo.set(-.5,-.5,0),Ts,o,Es,s,r),Oo(gr.set(.5,-.5,0),Ts,o,Es,s,r),Oo(Bo.set(.5,.5,0),Ts,o,Es,s,r),nu.set(0,0),lc.set(1,0),iu.set(1,1);let a=e.ray.intersectTriangle(Fo,gr,Bo,!1,pr);if(a===null&&(Oo(gr.set(-.5,.5,0),Ts,o,Es,s,r),lc.set(0,1),a=e.ray.intersectTriangle(Fo,Bo,gr,!1,pr),a===null))return;let l=e.ray.origin.distanceTo(pr);l<e.near||l>e.far||t.push({distance:l,point:pr.clone(),uv:jn.getInterpolation(pr,Fo,gr,Bo,nu,lc,iu,new he),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Oo(i,e,t,n,s,r){ws.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(mr.x=r*ws.x-s*ws.y,mr.y=s*ws.x+r*ws.y):mr.copy(ws),i.copy(e),i.x+=mr.x,i.y+=mr.y,i.applyMatrix4(od)}var oa=class extends tn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=an,h=an,u,f){super(null,o,a,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Os=class extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},As=new ft,su=new ft,zo=[],ru=new kn,lp=new ft,_r=new He,yr=new Hn,zr=class extends He{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Os(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,lp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),ru.copy(e.boundingBox).applyMatrix4(As),this.boundingBox.union(ru)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,As),yr.copy(e.boundingSphere).applyMatrix4(As),this.boundingSphere.union(yr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(_r.geometry=this.geometry,_r.material=this.material,_r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),yr.copy(this.boundingSphere),yr.applyMatrix4(n),e.ray.intersectsSphere(yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,As),su.multiplyMatrices(n,As),_r.matrixWorld=su,_r.raycast(e,zo);for(let o=0,a=zo.length;o<a;o++){let l=zo[o];l.instanceId=r,l.object=this,t.push(l)}zo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Os(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new oa(new Float32Array(s*this.count),s,this.count,Va,Dn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cc=new R,cp=new R,hp=new nt,Bn=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=cc.subVectors(n,t).cross(cp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(cc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||hp.getNormalMatrix(e),s=this.coplanarPoint(cc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new Hn,up=new he(.5,.5),ko=new R,zs=class{constructor(e=new Bn,t=new Bn,n=new Bn,s=new Bn,r=new Bn,o=new Bn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],d=r[7],g=r[8],_=r[9],m=r[10],p=r[11],b=r[12],M=r[13],y=r[14],A=r[15];if(s[0].setComponents(c-o,d-h,p-g,A-b).normalize(),s[1].setComponents(c+o,d+h,p+g,A+b).normalize(),s[2].setComponents(c+a,d+u,p+_,A+M).normalize(),s[3].setComponents(c-a,d-u,p-_,A-M).normalize(),n)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,d-f,p-m,A-y).normalize();else if(s[4].setComponents(c-l,d-f,p-m,A-y).normalize(),t===An)s[5].setComponents(c+l,d+f,p+m,A+y).normalize();else if(t===Rr)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(e){Fi.center.set(0,0,0);let t=up.distanceTo(e.center);return Fi.radius=.7071067811865476+t,Fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var bi=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},aa=new R,la=new R,ou=new ft,vr=new Us,Ho=new Hn,hc=new R,au=new R,Vi=class extends Mt{constructor(e=new ct,t=new bi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)aa.fromBufferAttribute(t,s-1),la.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=aa.distanceTo(la);e.setAttribute("lineDistance",new Xe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(s),Ho.radius+=r,e.ray.intersectsSphere(Ho)===!1)return;ou.copy(s).invert(),vr.copy(e.ray).applyMatrix4(ou);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=h.getX(_),b=h.getX(_+1),M=Vo(this,e,vr,l,p,b,_);M&&t.push(M)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(d),p=Vo(this,e,vr,l,_,m,g-1);p&&t.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=d,m=g-1;_<m;_+=c){let p=Vo(this,e,vr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Vo(this,e,vr,l,g-1,d,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vo(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(aa.fromBufferAttribute(a,s),la.fromBufferAttribute(a,r),t.distanceSqToSegment(aa,la,hc,au)>n)return;hc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(hc);if(!(c<e.near||c>e.far))return{distance:c,point:au.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Gi=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},lu=new ft,xc=new Us,Go=new Hn,Wo=new R,ks=class extends Mt{constructor(e=new ct,t=new Gi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Go.copy(n.boundingSphere),Go.applyMatrix4(s),Go.radius+=r,e.ray.intersectsSphere(Go)===!1)return;lu.copy(s).invert(),xc.copy(e.ray).applyMatrix4(lu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=c.getX(g);Wo.fromBufferAttribute(u,m),cu(Wo,m,l,s,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,_=d;g<_;g++)Wo.fromBufferAttribute(u,g),cu(Wo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function cu(i,e,t,n,s,r,o){let a=xc.distanceSqToPoint(i);if(a<t){let l=new R;xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var kr=class extends tn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Hr=class extends tn{constructor(e,t,n=Ri,s,r,o,a=an,l=an,c,h=Is,u=1){if(h!==Is&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Vr=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wi=class i extends ct{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+r,_=s+1,m=new R,p=new R;for(let b=0;b<=g;b++){let M=0,y=0,A=0,T=0;if(b<=n){let S=b/n,x=S*Math.PI/2;y=-h-e*Math.cos(x),A=e*Math.sin(x),T=-e*Math.cos(x),M=S*u}else if(b<=n+r){let S=(b-n)/r;y=-h+S*t,A=e,T=0,M=u+S*f}else{let S=(b-n-r)/n,x=S*Math.PI/2;y=h+e*Math.sin(x),A=e*Math.cos(x),T=e*Math.sin(x),M=u+f+S*u}let I=Math.max(0,Math.min(1,M/d)),D=0;b===0?D=.5/s:b===g&&(D=-.5/s);for(let S=0;S<=s;S++){let x=S/s,P=x*Math.PI*2,F=Math.sin(P),V=Math.cos(P);p.x=-A*V,p.y=y,p.z=A*F,a.push(p.x,p.y,p.z),m.set(-A*V,T,A*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(x+D,I)}if(b>0){let S=(b-1)*_;for(let x=0;x<s;x++){let P=S+x,F=S+x+1,V=b*_+x,O=b*_+x+1;o.push(P,F,V),o.push(F,O,V)}}}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Hs=class i extends ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new R,h=new he;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*s;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("normal",new Xe(a,3)),this.setAttribute("uv",new Xe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class i extends ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,_=[],m=n/2,p=0;b(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(d,2));function b(){let y=new R,A=new R,T=0,I=(t-e)/n;for(let D=0;D<=r;D++){let S=[],x=D/r,P=x*(t-e)+e;for(let F=0;F<=s;F++){let V=F/s,O=V*l+a,Z=Math.sin(O),W=Math.cos(O);A.x=P*Z,A.y=-x*n+m,A.z=P*W,u.push(A.x,A.y,A.z),y.set(Z,I,W).normalize(),f.push(y.x,y.y,y.z),d.push(V,1-x),S.push(g++)}_.push(S)}for(let D=0;D<s;D++)for(let S=0;S<r;S++){let x=_[S][D],P=_[S+1][D],F=_[S+1][D+1],V=_[S][D+1];(e>0||S!==0)&&(h.push(x,P,V),T+=3),(t>0||S!==r-1)&&(h.push(P,F,V),T+=3)}c.addGroup(p,T,0),p+=T}function M(y){let A=g,T=new he,I=new R,D=0,S=y===!0?e:t,x=y===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;let P=g;for(let F=0;F<=s;F++){let O=F/s*l+a,Z=Math.cos(O),W=Math.sin(O);I.x=S*W,I.y=m*x,I.z=S*Z,u.push(I.x,I.y,I.z),f.push(0,x,0),T.x=Z*.5+.5,T.y=W*.5*x+.5,d.push(T.x,T.y),g++}for(let F=0;F<s;F++){let V=A+F,O=P+F;y===!0?h.push(O,O+1,V):h.push(O+1,O,V),D+=3}c.addGroup(p,D,y===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Vn=class i extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ca=class i extends ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),c(n),h(),this.setAttribute("position",new Xe(r,3)),this.setAttribute("normal",new Xe(r.slice(),3)),this.setAttribute("uv",new Xe(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(b){let M=new R,y=new R,A=new R;for(let T=0;T<t.length;T+=3)d(t[T+0],M),d(t[T+1],y),d(t[T+2],A),l(M,y,A,b)}function l(b,M,y,A){let T=A+1,I=[];for(let D=0;D<=T;D++){I[D]=[];let S=b.clone().lerp(y,D/T),x=M.clone().lerp(y,D/T),P=T-D;for(let F=0;F<=P;F++)F===0&&D===T?I[D][F]=S:I[D][F]=S.clone().lerp(x,F/P)}for(let D=0;D<T;D++)for(let S=0;S<2*(T-D)-1;S++){let x=Math.floor(S/2);S%2===0?(f(I[D][x+1]),f(I[D+1][x]),f(I[D][x])):(f(I[D][x+1]),f(I[D+1][x+1]),f(I[D+1][x]))}}function c(b){let M=new R;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(b),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function h(){let b=new R;for(let M=0;M<r.length;M+=3){b.x=r[M+0],b.y=r[M+1],b.z=r[M+2];let y=m(b)/2/Math.PI+.5,A=p(b)/Math.PI+.5;o.push(y,1-A)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){let M=o[b+0],y=o[b+2],A=o[b+4],T=Math.max(M,y,A),I=Math.min(M,y,A);T>.9&&I<.1&&(M<.2&&(o[b+0]+=1),y<.2&&(o[b+2]+=1),A<.2&&(o[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function d(b,M){let y=b*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let b=new R,M=new R,y=new R,A=new R,T=new he,I=new he,D=new he;for(let S=0,x=0;S<r.length;S+=9,x+=6){b.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),y.set(r[S+6],r[S+7],r[S+8]),T.set(o[x+0],o[x+1]),I.set(o[x+2],o[x+3]),D.set(o[x+4],o[x+5]),A.copy(b).add(M).add(y).divideScalar(3);let P=m(A);_(T,x+0,b,P),_(I,x+2,M,P),_(D,x+4,y,P)}}function _(b,M,y,A){A<0&&b.x===1&&(o[M]=b.x-1),y.x===0&&y.z===0&&(o[M]=A/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},Gr=class i extends ca{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=n[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new he:new R);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new R,s=[],r=[],o=[],a=new R,l=new ft;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(ot(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ot(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Vs=class extends nn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ha=class extends Vs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Yc(){let i=0,e=0,t=0,n=0;function s(r,o,a,l){i=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Xo=new R,uc=new Yc,dc=new Yc,fc=new Yc,ii=class extends nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new R){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Xo.subVectors(s[0],s[1]).add(s[0]),c=Xo);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Xo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Xo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),_=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),uc.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),dc.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),fc.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(uc.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),dc.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),fc.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(uc.calc(l),dc.calc(l),fc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new R().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hu(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,l=i*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*i+t}function dp(i,e){let t=1-i;return t*t*e}function fp(i,e){return 2*(1-i)*i*e}function pp(i,e){return i*i*e}function Er(i,e,t,n){return dp(i,e)+fp(i,t)+pp(i,n)}function mp(i,e){let t=1-i;return t*t*t*e}function gp(i,e){let t=1-i;return 3*t*t*i*e}function _p(i,e){return 3*(1-i)*i*i*e}function yp(i,e){return i*i*i*e}function Tr(i,e,t,n,s){return mp(i,e)+gp(i,t)+_p(i,n)+yp(i,s)}var Wr=class extends nn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ua=class extends nn{constructor(e=new R,t=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Tr(e,s.x,r.x,o.x,a.x),Tr(e,s.y,r.y,o.y,a.y),Tr(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xr=class extends nn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},da=class extends nn{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qr=class extends nn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xi=class extends nn{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Er(e,s.x,r.x,o.x),Er(e,s.y,r.y,o.y),Er(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(hu(a,l.x,c.x,h.x,u.x),hu(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},fa=Object.freeze({__proto__:null,ArcCurve:ha,CatmullRomCurve3:ii,CubicBezierCurve:Wr,CubicBezierCurve3:ua,EllipseCurve:Vs,LineCurve:Xr,LineCurve3:da,QuadraticBezierCurve:qr,QuadraticBezierCurve3:Xi,SplineCurve:Yr}),pa=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new fa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new fa[s.type]().fromJSON(s))}return this}},Zr=class extends pa{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xr(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qr(this.currentPoint.clone(),new he(e,t),new he(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Wr(this.currentPoint.clone(),new he(e,t),new he(n,s),new he(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Yr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,o,a,l),this}absellipse(e,t,n,s,r,o,a,l){let c=new Vs(e,t,n,s,r,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qi=class extends Zr{constructor(e){super(e),this.uuid=On(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Zr().fromJSON(s))}return this}};function vp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=ad(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=Ep(i,e,r,t)),i.length>80*t){a=1/0,l=1/0;let h=-1/0,u=-1/0;for(let f=t;f<s;f+=t){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return $r(r,o,t,a,l,c,0),o}function ad(i,e,t,n,s){let r;if(s===Np(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=uu(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=uu(o/n|0,i[o],i[o+1],r);return r&&Gs(r,r.next)&&(Kr(r),r=r.next),r}function Yi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gs(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Kr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function $r(i,e,t,n,s,r,o){if(!i)return;!o&&r&&Cp(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Mp(i,n,s,r):xp(i)){e.push(l.i,i.i,c.i),Kr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Sp(Yi(i),e),$r(i,e,t,n,s,r,2)):o===2&&bp(i,e,t,n,s,r):$r(Yi(i),e,t,n,s,r,1);break}}}function xp(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(s,r,o),u=Math.min(a,l,c),f=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Mr(s,a,r,l,o,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Mp(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Pt(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,h=s.y,u=r.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),_=Math.max(a,l,c),m=Math.max(h,u,f),p=Mc(d,g,e,t,n),b=Mc(_,m,e,t,n),M=i.prevZ,y=i.nextZ;for(;M&&M.z>=p&&y&&y.z<=b;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Mr(a,h,l,u,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Mr(a,h,l,u,c,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=p;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Mr(a,h,l,u,c,f,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Mr(a,h,l,u,c,f,y.x,y.y)&&Pt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Sp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gs(n,s)&&cd(n,t,t.next,s)&&Jr(n,s)&&Jr(s,n)&&(e.push(n.i,t.i,s.i),Kr(t),Kr(t.next),t=i=s),t=t.next}while(t!==i);return Yi(t)}function bp(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Lp(o,a)){let l=hd(o,a);o=Yi(o,o.next),l=Yi(l,l.next),$r(o,e,t,n,s,r,0),$r(l,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Ep(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,l=r<o-1?e[r+1]*n:i.length,c=ad(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Pp(c))}s.sort(Tp);for(let r=0;r<s.length;r++)t=wp(s[r],t);return t}function Tp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function wp(i,e){let t=Ap(i,e);if(!t)return e;let n=hd(t,i);return Yi(n,n.next),Yi(t,t.next)}function Ap(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(Gs(i,t))return t;do{if(Gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ld(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Jr(t,i)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&Rp(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function Rp(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Cp(i,e,t,n){let s=i;do s.z===0&&(s.z=Mc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ip(s)}function Ip(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function Mc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Pp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ld(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Mr(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&ld(i,e,t,n,s,r,o,a)}function Lp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Dp(i,e)&&(Jr(i,e)&&Jr(e,i)&&Up(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Gs(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gs(i,e){return i.x===e.x&&i.y===e.y}function cd(i,e,t,n){let s=Yo(Pt(i,e,t)),r=Yo(Pt(i,e,n)),o=Yo(Pt(t,n,i)),a=Yo(Pt(t,n,e));return!!(s!==r&&o!==a||s===0&&qo(i,t,e)||r===0&&qo(i,n,e)||o===0&&qo(t,i,n)||a===0&&qo(t,e,n))}function qo(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Yo(i){return i>0?1:i<0?-1:0}function Dp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&cd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Jr(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function Up(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function hd(i,e){let t=Sc(i.i,i.x,i.y),n=Sc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function uu(i,e,t,n){let s=Sc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Kr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Np(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var bc=class{static triangulate(e,t,n=2){return vp(e,t,n)}},Oi=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];du(e),fu(n,e);let o=e.length;t.forEach(du);for(let l=0;l<t.length;l++)s.push(o),o+=t[l].length,fu(n,t[l]);let a=bc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function du(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function fu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ws=class i extends ct{constructor(e=new qi([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new Xe(s,3)),this.setAttribute("uv",new Xe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:Fp,M,y=!1,A,T,I,D;p&&(M=p.getSpacedPoints(h),y=!0,f=!1,A=p.computeFrenetFrames(h,!1),T=new R,I=new R,D=new R),f||(m=0,d=0,g=0,_=0);let S=a.extractPoints(c),x=S.shape,P=S.holes;if(!Oi.isClockWise(x)){x=x.reverse();for(let oe=0,se=P.length;oe<se;oe++){let ee=P[oe];Oi.isClockWise(ee)&&(P[oe]=ee.reverse())}}function V(oe){let ee=10000000000000001e-36,ie=oe[0];for(let ye=1;ye<=oe.length;ye++){let de=ye%oe.length,ve=oe[de],et=ve.x-ie.x,Je=ve.y-ie.y,w=et*et+Je*Je,v=Math.max(Math.abs(ve.x),Math.abs(ve.y),Math.abs(ie.x),Math.abs(ie.y)),H=ee*v*v;if(w<=H){oe.splice(de,1),ye--;continue}ie=ve}}V(x),P.forEach(V);let O=P.length,Z=x;for(let oe=0;oe<O;oe++){let se=P[oe];x=x.concat(se)}function W(oe,se,ee){return se||console.error("THREE.ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(se,ee)}let ne=x.length;function X(oe,se,ee){let ie,ye,de,ve=oe.x-se.x,et=oe.y-se.y,Je=ee.x-oe.x,w=ee.y-oe.y,v=ve*ve+et*et,H=ve*w-et*Je;if(Math.abs(H)>Number.EPSILON){let $=Math.sqrt(v),le=Math.sqrt(Je*Je+w*w),K=se.x-et/$,Oe=se.y+ve/$,_e=ee.x-w/le,Ne=ee.y+Je/le,Fe=((_e-K)*w-(Ne-Oe)*Je)/(ve*w-et*Je);ie=K+ve*Fe-oe.x,ye=Oe+et*Fe-oe.y;let fe=ie*ie+ye*ye;if(fe<=2)return new he(ie,ye);de=Math.sqrt(fe/2)}else{let $=!1;ve>Number.EPSILON?Je>Number.EPSILON&&($=!0):ve<-Number.EPSILON?Je<-Number.EPSILON&&($=!0):Math.sign(et)===Math.sign(w)&&($=!0),$?(ie=-et,ye=ve,de=Math.sqrt(v)):(ie=ve,ye=et,de=Math.sqrt(v/2))}return new he(ie/de,ye/de)}let ue=[];for(let oe=0,se=Z.length,ee=se-1,ie=oe+1;oe<se;oe++,ee++,ie++)ee===se&&(ee=0),ie===se&&(ie=0),ue[oe]=X(Z[oe],Z[ee],Z[ie]);let Me=[],Re,k=ue.concat();for(let oe=0,se=O;oe<se;oe++){let ee=P[oe];Re=[];for(let ie=0,ye=ee.length,de=ye-1,ve=ie+1;ie<ye;ie++,de++,ve++)de===ye&&(de=0),ve===ye&&(ve=0),Re[ie]=X(ee[ie],ee[de],ee[ve]);Me.push(Re),k=k.concat(Re)}let j;if(m===0)j=Oi.triangulateShape(Z,P);else{let oe=[],se=[];for(let ee=0;ee<m;ee++){let ie=ee/m,ye=d*Math.cos(ie*Math.PI/2),de=g*Math.sin(ie*Math.PI/2)+_;for(let ve=0,et=Z.length;ve<et;ve++){let Je=W(Z[ve],ue[ve],de);Te(Je.x,Je.y,-ye),ie===0&&oe.push(Je)}for(let ve=0,et=O;ve<et;ve++){let Je=P[ve];Re=Me[ve];let w=[];for(let v=0,H=Je.length;v<H;v++){let $=W(Je[v],Re[v],de);Te($.x,$.y,-ye),ie===0&&w.push($)}ie===0&&se.push(w)}}j=Oi.triangulateShape(oe,se)}let te=j.length,Q=g+_;for(let oe=0;oe<ne;oe++){let se=f?W(x[oe],k[oe],Q):x[oe];y?(I.copy(A.normals[0]).multiplyScalar(se.x),T.copy(A.binormals[0]).multiplyScalar(se.y),D.copy(M[0]).add(I).add(T),Te(D.x,D.y,D.z)):Te(se.x,se.y,0)}for(let oe=1;oe<=h;oe++)for(let se=0;se<ne;se++){let ee=f?W(x[se],k[se],Q):x[se];y?(I.copy(A.normals[oe]).multiplyScalar(ee.x),T.copy(A.binormals[oe]).multiplyScalar(ee.y),D.copy(M[oe]).add(I).add(T),Te(D.x,D.y,D.z)):Te(ee.x,ee.y,u/h*oe)}for(let oe=m-1;oe>=0;oe--){let se=oe/m,ee=d*Math.cos(se*Math.PI/2),ie=g*Math.sin(se*Math.PI/2)+_;for(let ye=0,de=Z.length;ye<de;ye++){let ve=W(Z[ye],ue[ye],ie);Te(ve.x,ve.y,u+ee)}for(let ye=0,de=P.length;ye<de;ye++){let ve=P[ye];Re=Me[ye];for(let et=0,Je=ve.length;et<Je;et++){let w=W(ve[et],Re[et],ie);y?Te(w.x,w.y+M[h-1].y,M[h-1].x+ee):Te(w.x,w.y,u+ee)}}}N(),G();function N(){let oe=s.length/3;if(f){let se=0,ee=ne*se;for(let ie=0;ie<te;ie++){let ye=j[ie];Ae(ye[2]+ee,ye[1]+ee,ye[0]+ee)}se=h+m*2,ee=ne*se;for(let ie=0;ie<te;ie++){let ye=j[ie];Ae(ye[0]+ee,ye[1]+ee,ye[2]+ee)}}else{for(let se=0;se<te;se++){let ee=j[se];Ae(ee[2],ee[1],ee[0])}for(let se=0;se<te;se++){let ee=j[se];Ae(ee[0]+ne*h,ee[1]+ne*h,ee[2]+ne*h)}}n.addGroup(oe,s.length/3-oe,0)}function G(){let oe=s.length/3,se=0;ce(Z,se),se+=Z.length;for(let ee=0,ie=P.length;ee<ie;ee++){let ye=P[ee];ce(ye,se),se+=ye.length}n.addGroup(oe,s.length/3-oe,1)}function ce(oe,se){let ee=oe.length;for(;--ee>=0;){let ie=ee,ye=ee-1;ye<0&&(ye=oe.length-1);for(let de=0,ve=h+m*2;de<ve;de++){let et=ne*de,Je=ne*(de+1),w=se+ie+et,v=se+ye+et,H=se+ye+Je,$=se+ie+Je;Qe(w,v,H,$)}}}function Te(oe,se,ee){l.push(oe),l.push(se),l.push(ee)}function Ae(oe,se,ee){ht(oe),ht(se),ht(ee);let ie=s.length/3,ye=b.generateTopUV(n,s,ie-3,ie-2,ie-1);L(ye[0]),L(ye[1]),L(ye[2])}function Qe(oe,se,ee,ie){ht(oe),ht(se),ht(ie),ht(se),ht(ee),ht(ie);let ye=s.length/3,de=b.generateSideWallUV(n,s,ye-6,ye-3,ye-2,ye-1);L(de[0]),L(de[1]),L(de[3]),L(de[1]),L(de[2]),L(de[3])}function ht(oe){s.push(l[oe*3+0]),s.push(l[oe*3+1]),s.push(l[oe*3+2])}function L(oe){r.push(oe.x),r.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Bp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new fa[s.type]().fromJSON(s)),new i(n,e.options)}},Fp={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new he(r,o),new he(a,l),new he(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new he(o,1-l),new he(c,1-u),new he(f,1-g),new he(_,1-p)]:[new he(a,1-l),new he(h,1-u),new he(d,1-g),new he(m,1-p)]}};function Bp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Qr=class i extends ct{constructor(e=[new he(0,-.5),new he(.5,0),new he(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ot(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,u=new R,f=new he,d=new R,g=new R,_=new R,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),l.push(d.x,d.y,d.z),_.copy(g)}for(let b=0;b<=t;b++){let M=n+b*h*s,y=Math.sin(M),A=Math.cos(M);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*y,u.y=e[T].y,u.z=e[T].x*A,o.push(u.x,u.y,u.z),f.x=b/t,f.y=T/(e.length-1),a.push(f.x,f.y);let I=l[3*T+0]*y,D=l[3*T+1],S=l[3*T+0]*A;c.push(I,D,S)}}for(let b=0;b<t;b++)for(let M=0;M<e.length-1;M++){let y=M+b*e.length,A=y,T=y+e.length,I=y+e.length+1,D=y+1;r.push(A,T,D),r.push(I,D,T)}this.setIndex(r),this.setAttribute("position",new Xe(o,3)),this.setAttribute("uv",new Xe(a,2)),this.setAttribute("normal",new Xe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Pn=class i extends ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let b=p*f-o;for(let M=0;M<c;M++){let y=M*u-r;g.push(y,-b,0),_.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){let M=b+c*p,y=b+c*(p+1),A=b+1+c*(p+1),T=b+1+c*p;d.push(M,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},jr=class i extends ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],h=[],u=e,f=(t-e)/s,d=new R,g=new he;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){let m=_*(n+1);for(let p=0;p<n;p++){let b=p+m,M=b,y=b+n+1,A=b+n+2,T=b+1;a.push(M,y,T),a.push(y,A,T)}}this.setIndex(a),this.setAttribute("position",new Xe(l,3)),this.setAttribute("normal",new Xe(c,3)),this.setAttribute("uv",new Xe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Zi=class i extends ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new R,f=new R,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],M=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){let T=A/t;u.x=-e*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+y,1-M),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let M=h[p][b+1],y=h[p][b],A=h[p+1][b],T=h[p+1][b+1];(p!==0||o>0)&&d.push(M,y,T),(p!==n-1||l<Math.PI)&&d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Xe(g,3)),this.setAttribute("normal",new Xe(_,3)),this.setAttribute("uv",new Xe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var si=class i extends ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let _=g/s*r,m=d/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let _=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,b=(s+1)*d+g;o.push(_,m,b),o.push(m,p,b)}this.setIndex(o),this.setAttribute("position",new Xe(a,3)),this.setAttribute("normal",new Xe(l,3)),this.setAttribute("uv",new Xe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var $i=class i extends ct{constructor(e=new Xi(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new R,l=new R,c=new he,h=new R,u=[],f=[],d=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Xe(u,3)),this.setAttribute("normal",new Xe(f,3)),this.setAttribute("uv",new Xe(d,2));function _(){for(let M=0;M<t;M++)m(M);m(r===!1?t:0),b(),p()}function m(M){h=e.getPointAt(M/t,h);let y=o.normals[M],A=o.binormals[M];for(let T=0;T<=s;T++){let I=T/s*Math.PI*2,D=Math.sin(I),S=-Math.cos(I);l.x=S*y.x+D*A.x,l.y=S*y.y+D*A.y,l.z=S*y.z+D*A.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let y=1;y<=s;y++){let A=(s+1)*(M-1)+(y-1),T=(s+1)*M+(y-1),I=(s+1)*M+y,D=(s+1)*(M-1)+y;g.push(A,T,D),g.push(T,I,D)}}function b(){for(let M=0;M<=t;M++)for(let y=0;y<=s;y++)c.x=M/t,c.y=y/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new fa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vn=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ma=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ga=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Zo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},_a=class extends Ji{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gc,endingEnd:gc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=e,a=2*t-n;break;case yc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _c:o=e,l=2*n-t;break;case yc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,b=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,M=(-1-d)*m+(1.5+d)*_+.5*g,y=d*m-d*_;for(let A=0;A!==a;++A)r[A]=p*o[h+A]+b*o[c+A]+M*o[l+A]+y*o[u+A];return r}},ya=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*u+o[l+f]*h;return r}},va=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zo(t,this.TimeBufferType),this.values=Zo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zo(e.times,Array),values:Zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new va(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ya(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _a(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case jo:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Op(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$o,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[f+g]||_!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=jo;var Ei=class extends pn{constructor(e,t,n){super(e,t,n)}};Ei.prototype.ValueTypeName="bool";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=wr;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="color";var Ma=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};Ma.prototype.ValueTypeName="number";var Sa=class extends Ji{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)ln.slerpFlat(r,0,o,c-a,o,c,l);return r}},eo=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};eo.prototype.ValueTypeName="quaternion";eo.prototype.InterpolantFactoryMethodSmooth=void 0;var Ti=class extends pn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="string";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=wr;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends pn{constructor(e,t,n,s){super(e,t,n,s)}};ba.prototype.ValueTypeName="vector";var Ea=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},ud=new Ea,Ta=class{constructor(e){this.manager=e!==void 0?e:ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},to=class extends Xs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},pc=new ft,pu=new R,mu=new R,wa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zs,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(pu),mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mu),t.updateMatrixWorld(),pc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(pc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var gu=new ft,xr=new R,mc=new R,Ec=class extends wa{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new gt(2,1,1,1),new gt(0,1,1,1),new gt(3,1,1,1),new gt(1,1,1,1),new gt(3,0,1,1),new gt(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(xr),mc.copy(n.position),mc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(mc),n.updateMatrixWorld(),s.makeTranslation(-xr.x,-xr.y,-xr.z),gu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gu,n.coordinateSystem,n.reversedDepth)}},Ki=class extends Xs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},no=class extends Ur{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Tc=class extends wa{constructor(){super(new no(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},wi=class extends Xs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Tc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Aa=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},io=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Zc="\\[\\]\\.:\\/",zp=new RegExp("["+Zc+"]","g"),$c="[^"+Zc+"]",kp="[^"+Zc.replace("\\.","")+"]",Hp=/((?:WC+[\/:])*)/.source.replace("WC",$c),Vp=/(WCOD+)?/.source.replace("WCOD",kp),Gp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$c),Wp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$c),Xp=new RegExp("^"+Hp+Vp+Gp+Wp+"$"),qp=["material","materials","bones","map"],wc=class{constructor(e,t,n){let s=n||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zp,"")}static parseTrackName(e){let t=Xp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=wc;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mv=new Float32Array(1);function Jc(i,e,t,n){let s=Yp(n);switch(t){case Bc:return i*e;case Va:return i*e/s.components*s.byteLength;case Ga:return i*e/s.components*s.byteLength;case zc:return i*e*2/s.components*s.byteLength;case Wa:return i*e*2/s.components*s.byteLength;case Oc:return i*e*3/s.components*s.byteLength;case xn:return i*e*4/s.components*s.byteLength;case Xa:return i*e*4/s.components*s.byteLength;case oo:case ao:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ya:case $a:return Math.max(i,16)*Math.max(e,8)/4;case qa:case Za:return Math.max(i,8)*Math.max(e,8)/2;case Ja:case Ka:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ul:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case fl:case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16;case gl:case _l:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yl:case vl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yp(i){switch(i){case Ln:case Dc:return{byteLength:1,components:1};case Ys:case Uc:case Zs:return{byteLength:2,components:1};case ka:case Ha:return{byteLength:2,components:4};case Ri:case za:case Dn:return{byteLength:4,components:1};case Nc:case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Nd(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Qp(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],_=u[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let _=u[d];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var jp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,em=`#ifdef USE_ALPHAHASH
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
#endif`,tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rm=`#ifdef USE_AOMAP
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
#endif`,om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,am=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,dm=`#ifdef USE_IRIDESCENCE
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
#endif`,fm=`#ifdef USE_BUMPMAP
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
#endif`,pm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_m=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ym=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,bm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Em=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Am=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Dm=`#ifdef USE_ENVMAP
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
#endif`,Um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Om=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,km=`#ifdef USE_GRADIENTMAP
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
}`,Hm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wm=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Xm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ym=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Km=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Qm=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,t0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,r0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,o0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,a0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l0=`#if defined( USE_POINTS_UV )
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
#endif`,c0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,h0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,u0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,d0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,f0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p0=`#ifdef USE_MORPHTARGETS
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
#endif`,m0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,v0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,M0=`#ifdef USE_NORMALMAP
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
#endif`,S0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,b0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,T0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,A0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,R0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,C0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,I0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,P0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,L0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,D0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,U0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,N0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,F0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,B0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,O0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,z0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H0=`#ifdef USE_SKINNING
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
#endif`,V0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,G0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,W0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,X0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,q0=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Q0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,j0=`uniform sampler2D t2D;
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
}`,eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`#include <common>
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
}`,rg=`#if DEPTH_PACKING == 3200
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
}`,og=`#define DISTANCE
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
}`,ag=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hg=`uniform float scale;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 diffuse;
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
}`,pg=`#define LAMBERT
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
}`,mg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,gg=`#define MATCAP
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
}`,_g=`#define MATCAP
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
}`,yg=`#define NORMAL
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
}`,vg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xg=`#define PHONG
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
}`,Mg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Sg=`#define STANDARD
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
}`,bg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Eg=`#define TOON
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
}`,Tg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,wg=`uniform float size;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Rg=`#include <common>
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
}`,Cg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Ig=`uniform float rotation;
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
}`,Pg=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:jp,alphahash_pars_fragment:em,alphamap_fragment:tm,alphamap_pars_fragment:nm,alphatest_fragment:im,alphatest_pars_fragment:sm,aomap_fragment:rm,aomap_pars_fragment:om,batching_pars_vertex:am,batching_vertex:lm,begin_vertex:cm,beginnormal_vertex:hm,bsdfs:um,iridescence_fragment:dm,bumpmap_pars_fragment:fm,clipping_planes_fragment:pm,clipping_planes_pars_fragment:mm,clipping_planes_pars_vertex:gm,clipping_planes_vertex:_m,color_fragment:ym,color_pars_fragment:vm,color_pars_vertex:xm,color_vertex:Mm,common:Sm,cube_uv_reflection_fragment:bm,defaultnormal_vertex:Em,displacementmap_pars_vertex:Tm,displacementmap_vertex:wm,emissivemap_fragment:Am,emissivemap_pars_fragment:Rm,colorspace_fragment:Cm,colorspace_pars_fragment:Im,envmap_fragment:Pm,envmap_common_pars_fragment:Lm,envmap_pars_fragment:Dm,envmap_pars_vertex:Um,envmap_physical_pars_fragment:Xm,envmap_vertex:Nm,fog_vertex:Fm,fog_pars_vertex:Bm,fog_fragment:Om,fog_pars_fragment:zm,gradientmap_pars_fragment:km,lightmap_pars_fragment:Hm,lights_lambert_fragment:Vm,lights_lambert_pars_fragment:Gm,lights_pars_begin:Wm,lights_toon_fragment:qm,lights_toon_pars_fragment:Ym,lights_phong_fragment:Zm,lights_phong_pars_fragment:$m,lights_physical_fragment:Jm,lights_physical_pars_fragment:Km,lights_fragment_begin:Qm,lights_fragment_maps:jm,lights_fragment_end:e0,logdepthbuf_fragment:t0,logdepthbuf_pars_fragment:n0,logdepthbuf_pars_vertex:i0,logdepthbuf_vertex:s0,map_fragment:r0,map_pars_fragment:o0,map_particle_fragment:a0,map_particle_pars_fragment:l0,metalnessmap_fragment:c0,metalnessmap_pars_fragment:h0,morphinstance_vertex:u0,morphcolor_vertex:d0,morphnormal_vertex:f0,morphtarget_pars_vertex:p0,morphtarget_vertex:m0,normal_fragment_begin:g0,normal_fragment_maps:_0,normal_pars_fragment:y0,normal_pars_vertex:v0,normal_vertex:x0,normalmap_pars_fragment:M0,clearcoat_normal_fragment_begin:S0,clearcoat_normal_fragment_maps:b0,clearcoat_pars_fragment:E0,iridescence_pars_fragment:T0,opaque_fragment:w0,packing:A0,premultiplied_alpha_fragment:R0,project_vertex:C0,dithering_fragment:I0,dithering_pars_fragment:P0,roughnessmap_fragment:L0,roughnessmap_pars_fragment:D0,shadowmap_pars_fragment:U0,shadowmap_pars_vertex:N0,shadowmap_vertex:F0,shadowmask_pars_fragment:B0,skinbase_vertex:O0,skinning_pars_vertex:z0,skinning_vertex:k0,skinnormal_vertex:H0,specularmap_fragment:V0,specularmap_pars_fragment:G0,tonemapping_fragment:W0,tonemapping_pars_fragment:X0,transmission_fragment:q0,transmission_pars_fragment:Y0,uv_pars_fragment:Z0,uv_pars_vertex:$0,uv_vertex:J0,worldpos_vertex:K0,background_vert:Q0,background_frag:j0,backgroundCube_vert:eg,backgroundCube_frag:tg,cube_vert:ng,cube_frag:ig,depth_vert:sg,depth_frag:rg,distanceRGBA_vert:og,distanceRGBA_frag:ag,equirect_vert:lg,equirect_frag:cg,linedashed_vert:hg,linedashed_frag:ug,meshbasic_vert:dg,meshbasic_frag:fg,meshlambert_vert:pg,meshlambert_frag:mg,meshmatcap_vert:gg,meshmatcap_frag:_g,meshnormal_vert:yg,meshnormal_frag:vg,meshphong_vert:xg,meshphong_frag:Mg,meshphysical_vert:Sg,meshphysical_frag:bg,meshtoon_vert:Eg,meshtoon_frag:Tg,points_vert:wg,points_frag:Ag,shadow_vert:Rg,shadow_frag:Cg,sprite_vert:Ig,sprite_frag:Pg},Se={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Xn={basic:{uniforms:Kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:Kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:Kt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:Kt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:Kt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Le(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:Kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:Kt([Se.points,Se.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:Kt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:Kt([Se.common,Se.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:Kt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:Kt([Se.sprite,Se.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:Kt([Se.common,Se.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:Kt([Se.lights,Se.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Xn.physical={uniforms:Kt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};var xl={r:0,b:0,g:0},ts=new Cn,Lg=new ft;function Dg(i,e,t,n,s,r,o){let a=new Le(0),l=r===!0?0:1,c,h,u=null,f=0,d=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function _(M){let y=!1,A=g(M);A===null?p(a,l):A&&A.isColor&&(p(A,1),y=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(M,y){let A=g(y);A&&(A.isCubeTexture||A.mapping===so)?(h===void 0&&(h=new He(new Si(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:es(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(y.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(ts)),h.material.toneMapped=ut.getTransfer(A.colorSpace)!==_t,(u!==A||f!==A.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new He(new Pn(2,2),new fn({name:"BackgroundMaterial",uniforms:es(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(A.colorSpace)!==_t,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||f!==A.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=A,f=A.version,d=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(xl,qc(i)),n.buffers.color.setClear(xl.r,xl.g,xl.b,y,o)}function b(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:_,addToRenderList:m,dispose:b}}function Ug(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(x,P,F,V,O){let Z=!1,W=u(V,F,P);r!==W&&(r=W,c(r.object)),Z=d(x,V,F,O),Z&&g(x,V,F,O),O!==null&&e.update(O,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,y(x,P,F,V),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,P,F){let V=F.wireframe===!0,O=n[x.id];O===void 0&&(O={},n[x.id]=O);let Z=O[P.id];Z===void 0&&(Z={},O[P.id]=Z);let W=Z[V];return W===void 0&&(W=f(l()),Z[V]=W),W}function f(x){let P=[],F=[],V=[];for(let O=0;O<t;O++)P[O]=0,F[O]=0,V[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:V,object:x,attributes:{},index:null}}function d(x,P,F,V){let O=r.attributes,Z=P.attributes,W=0,ne=F.getAttributes();for(let X in ne)if(ne[X].location>=0){let Me=O[X],Re=Z[X];if(Re===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Re=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Re=x.instanceColor)),Me===void 0||Me.attribute!==Re||Re&&Me.data!==Re.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(x,P,F,V){let O={},Z=P.attributes,W=0,ne=F.getAttributes();for(let X in ne)if(ne[X].location>=0){let Me=Z[X];Me===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Me=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Me=x.instanceColor));let Re={};Re.attribute=Me,Me&&Me.data&&(Re.data=Me.data),O[X]=Re,W++}r.attributes=O,r.attributesNum=W,r.index=V}function _(){let x=r.newAttributes;for(let P=0,F=x.length;P<F;P++)x[P]=0}function m(x){p(x,0)}function p(x,P){let F=r.newAttributes,V=r.enabledAttributes,O=r.attributeDivisors;F[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),O[x]!==P&&(i.vertexAttribDivisor(x,P),O[x]=P)}function b(){let x=r.newAttributes,P=r.enabledAttributes;for(let F=0,V=P.length;F<V;F++)P[F]!==x[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function M(x,P,F,V,O,Z,W){W===!0?i.vertexAttribIPointer(x,P,F,O,Z):i.vertexAttribPointer(x,P,F,V,O,Z)}function y(x,P,F,V){_();let O=V.attributes,Z=F.getAttributes(),W=P.defaultAttributeValues;for(let ne in Z){let X=Z[ne];if(X.location>=0){let ue=O[ne];if(ue===void 0&&(ne==="instanceMatrix"&&x.instanceMatrix&&(ue=x.instanceMatrix),ne==="instanceColor"&&x.instanceColor&&(ue=x.instanceColor)),ue!==void 0){let Me=ue.normalized,Re=ue.itemSize,k=e.get(ue);if(k===void 0)continue;let j=k.buffer,te=k.type,Q=k.bytesPerElement,N=te===i.INT||te===i.UNSIGNED_INT||ue.gpuType===za;if(ue.isInterleavedBufferAttribute){let G=ue.data,ce=G.stride,Te=ue.offset;if(G.isInstancedInterleavedBuffer){for(let Ae=0;Ae<X.locationSize;Ae++)p(X.location+Ae,G.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let Ae=0;Ae<X.locationSize;Ae++)m(X.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Ae=0;Ae<X.locationSize;Ae++)M(X.location+Ae,Re/X.locationSize,te,Me,ce*Q,(Te+Re/X.locationSize*Ae)*Q,N)}else{if(ue.isInstancedBufferAttribute){for(let G=0;G<X.locationSize;G++)p(X.location+G,ue.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let G=0;G<X.locationSize;G++)m(X.location+G);i.bindBuffer(i.ARRAY_BUFFER,j);for(let G=0;G<X.locationSize;G++)M(X.location+G,Re/X.locationSize,te,Me,Re*Q,Re/X.locationSize*G*Q,N)}}else if(W!==void 0){let Me=W[ne];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(X.location,Me);break;case 3:i.vertexAttrib3fv(X.location,Me);break;case 4:i.vertexAttrib4fv(X.location,Me);break;default:i.vertexAttrib1fv(X.location,Me)}}}}b()}function A(){D();for(let x in n){let P=n[x];for(let F in P){let V=P[F];for(let O in V)h(V[O].object),delete V[O];delete P[F]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let P=n[x.id];for(let F in P){let V=P[F];for(let O in V)h(V[O].object),delete V[O];delete P[F]}delete n[x.id]}function I(x){for(let P in n){let F=n[P];if(F[x.id]===void 0)continue;let V=F[x.id];for(let O in V)h(V[O].object),delete V[O];delete F[x.id]}}function D(){S(),o=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Ng(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Fg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(I){return!(I!==xn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let D=I===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ln&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Dn&&!D)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:A,maxSamples:T}}function Bg(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Bn,a=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,M=b*4,y=p.clippingState||null;l.value=y,y=h(g,f,M,d);for(let A=0;A!==M;++A)y[A]=t[A];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=d+_*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=d;M!==_;++M,y+=4)o.copy(u[M]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Og(i){let e=new WeakMap;function t(o,a){return a===qs?o.mapping=Qi:a===Ba&&(o.mapping=ji),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===qs||a===Ba)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ra(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qs=4,dd=[.125,.215,.35,.446,.526,.582],ss=20,Kc=new no,fd=new Le,Qc=null,jc=0,eh=0,th=!1,is=(1+Math.sqrt(5))/2,Ks=1/is,pd=[new R(-is,Ks,0),new R(is,Ks,0),new R(-Ks,0,is),new R(Ks,0,is),new R(0,is,-Ks),new R(0,is,Ks),new R(-1,1,-1),new R(1,1,-1),new R(-1,1,1),new R(1,1,1)],zg=new R,er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=zg}=r;Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,jc,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),jc=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Zs,format:xn,colorSpace:ki,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kg(r)),this._blurMaterial=Hg(r,e,t)}return s}_compileMaterial(e){let t=new He(this._lodPlanes[0],e);this._renderer.compile(t,Kc)}_sceneToCubeUV(e,t,n,s,r){let l=new Ot(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(fd),u.toneMapping=oi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Mi({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1}),m=new He(new Si,_),p=!1,b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,p=!0):(_.color.copy(fd),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));let A=this._cubeSize;Ml(s,y*A,M>2?A:0,A,A),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=_d()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ml(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Kc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=pd[(s-r-1)%pd.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new He(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ss-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ss;m>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ss}`);let p=[],b=0;for(let I=0;I<ss;++I){let D=I/_,S=Math.exp(-D*D/2);p.push(S),I===0?b+=S:I<m&&(b+=2*S)}for(let I=0;I<p.length;I++)p[I]=p[I]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;let y=this._sizeLods[s],A=3*y*(s>M-Qs?s-M+Qs:0),T=4*(this._cubeSize-y);Ml(t,A,T,3*y,2*y),l.setRenderTarget(t),l.render(u,Kc)}};function kg(i){let e=[],t=[],n=[],s=i,r=i-Qs+1+dd.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>i-Qs?l=dd[o-i+Qs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),M=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let T=0;T<d;T++){let I=T%3*2/3-1,D=T>2?0:-1,S=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];b.set(S,_*g*T),M.set(f,m*g*T);let x=[T,T,T,T,T,T];y.set(x,p*g*T)}let A=new ct;A.setAttribute("position",new Nt(b,_)),A.setAttribute("uv",new Nt(M,m)),A.setAttribute("faceIndex",new Nt(y,p)),e.push(A),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function md(i,e,t){let n=new zn(i,e,t);return n.texture.mapping=so,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ml(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Hg(i,e,t){let n=new Float32Array(ss),s=new R(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function gd(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function _d(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function uh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vg(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===qs||l===Ba,h=l===Qi||l===ji;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new er(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new er(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Gg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ls("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Wg(i,e,t,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,_=0;if(d!==null){let b=d.array;_=d.version;for(let M=0,y=b.length;M<y;M+=3){let A=b[M+0],T=b[M+1],I=b[M+2];f.push(A,T,T,I,I,A)}}else if(g!==void 0){let b=g.array;_=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){let A=M+0,T=M+1,I=M+2;f.push(A,T,T,I,I,A)}}else return;let m=new(Xc(f)?Dr:Lr)(f,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Xg(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,n,1)}function u(f,d,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function qg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Yg(i,e,t){let n=new WeakMap,s=new gt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],M=0;d===!0&&(M=1),g===!0&&(M=2),_===!0&&(M=3);let y=a.attributes.position.count*M,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*A*4*u),I=new Ir(T,y,A,u);I.type=Dn,I.needsUpdate=!0;let D=M*4;for(let x=0;x<u;x++){let P=m[x],F=p[x],V=b[x],O=y*A*4*x;for(let Z=0;Z<P.count;Z++){let W=Z*D;d===!0&&(s.fromBufferAttribute(P,Z),T[O+W+0]=s.x,T[O+W+1]=s.y,T[O+W+2]=s.z,T[O+W+3]=0),g===!0&&(s.fromBufferAttribute(F,Z),T[O+W+4]=s.x,T[O+W+5]=s.y,T[O+W+6]=s.z,T[O+W+7]=0),_===!0&&(s.fromBufferAttribute(V,Z),T[O+W+8]=s.x,T[O+W+9]=s.y,T[O+W+10]=s.z,T[O+W+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new he(y,A)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let _=0;_<c.length;_++)d+=c[_];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var Fd=new tn,yd=new Hr(1,1),Bd=new Ir,Od=new ia,zd=new Nr,vd=[],xd=[],Md=new Float32Array(16),Sd=new Float32Array(9),bd=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vd[s];if(r===void 0&&(r=new Float32Array(s),vd[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function El(i,e){let t=xd[e];t===void 0&&(t=new Int32Array(e),xd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function $g(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function jg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;bd.set(n),i.uniformMatrix2fv(this.addr,!1,bd),kt(t,n)}}function e_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Sd.set(n),i.uniformMatrix3fv(this.addr,!1,Sd),kt(t,n)}}function t_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(zt(t,n))return;Md.set(n),i.uniformMatrix4fv(this.addr,!1,Md),kt(t,n)}}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function h_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yd.compareFunction=Hc,r=yd):r=Fd,t.setTexture2D(e||r,s)}function u_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Od,s)}function d_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||zd,s)}function f_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Bd,s)}function p_(i){switch(i){case 5126:return $g;case 35664:return Jg;case 35665:return Kg;case 35666:return Qg;case 35674:return jg;case 35675:return e_;case 35676:return t_;case 5124:case 35670:return n_;case 35667:case 35671:return i_;case 35668:case 35672:return s_;case 35669:case 35673:return r_;case 5125:return o_;case 36294:return a_;case 36295:return l_;case 36296:return c_;case 35678:case 36198:case 36298:case 36306:case 35682:return h_;case 35679:case 36299:case 36307:return u_;case 35680:case 36300:case 36308:case 36293:return d_;case 36289:case 36303:case 36311:case 36292:return f_}}function m_(i,e){i.uniform1fv(this.addr,e)}function g_(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function __(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function y_(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function v_(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function x_(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function M_(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function S_(i,e){i.uniform1iv(this.addr,e)}function b_(i,e){i.uniform2iv(this.addr,e)}function E_(i,e){i.uniform3iv(this.addr,e)}function T_(i,e){i.uniform4iv(this.addr,e)}function w_(i,e){i.uniform1uiv(this.addr,e)}function A_(i,e){i.uniform2uiv(this.addr,e)}function R_(i,e){i.uniform3uiv(this.addr,e)}function C_(i,e){i.uniform4uiv(this.addr,e)}function I_(i,e,t){let n=this.cache,s=e.length,r=El(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Fd,r[o])}function P_(i,e,t){let n=this.cache,s=e.length,r=El(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Od,r[o])}function L_(i,e,t){let n=this.cache,s=e.length,r=El(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||zd,r[o])}function D_(i,e,t){let n=this.cache,s=e.length,r=El(t,s);zt(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Bd,r[o])}function U_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return __;case 35666:return y_;case 35674:return v_;case 35675:return x_;case 35676:return M_;case 5124:case 35670:return S_;case 35667:case 35671:return b_;case 35668:case 35672:return E_;case 35669:case 35673:return T_;case 5125:return w_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return P_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}var ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=p_(t.type)}},sh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U_(t.type)}},rh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},nh=/(\w+)(\])?(\[|\.)?/g;function Ed(i,e){i.seq.push(e),i.map[e.id]=e}function N_(i,e,t){let n=i.name,s=n.length;for(nh.lastIndex=0;;){let r=nh.exec(n),o=nh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ed(t,c===void 0?new ih(a,i,e):new sh(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new rh(a),Ed(t,u)),t=u}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);N_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function Td(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var F_=37297,B_=0;function O_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var wd=new nt;function z_(i){ut._getMatrix(wd,ut.workingColorSpace,i);let e=`mat3( ${wd.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case Ar:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+O_(i.getShaderSource(e),a)}else return r}function k_(i,e){let t=z_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H_(i,e){let t;switch(e){case zu:t="Linear";break;case ku:t="Reinhard";break;case Hu:t="Cineon";break;case Fa:t="ACESFilmic";break;case Gu:t="AgX";break;case Wu:t="Neutral";break;case Vu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sl=new R;function V_(){ut.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function W_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function X_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ho(i){return i!==""}function Rd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function oh(i){return i.replace(q_,Z_)}var Y_=new Map;function Z_(i,e){let t=rt[e];if(t===void 0){let n=Y_.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return oh(t)}var $_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Id(i){return i.replace($_,J_)}function J_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Pd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function K_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Rc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ra?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function Q_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ji:e="ENVMAP_TYPE_CUBE";break;case so:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ji&&(e="ENVMAP_MODE_REFRACTION"),e}function ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Bu:e="ENVMAP_BLENDING_MIX";break;case Ou:e="ENVMAP_BLENDING_ADD";break}return e}function ty(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ny(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=K_(t),c=Q_(t),h=j_(t),u=ey(t),f=ty(t),d=G_(t),g=W_(r),_=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),p.length>0&&(p+=`
`)):(m=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),p=[Pd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==oi?"#define TONE_MAPPING":"",t.toneMapping!==oi?rt.tonemapping_pars_fragment:"",t.toneMapping!==oi?H_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,k_("linearToOutputTexel",t.outputColorSpace),V_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=oh(o),o=Rd(o,t),o=Cd(o,t),a=oh(a),a=Rd(a,t),a=Cd(a,t),o=Id(o),a=Id(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=b+m+o,y=b+p+a,A=Td(s,s.VERTEX_SHADER,M),T=Td(s,s.FRAGMENT_SHADER,y);s.attachShader(_,A),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function I(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(A)||"",O=s.getShaderInfoLog(T)||"",Z=F.trim(),W=V.trim(),ne=O.trim(),X=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,A,T);else{let Me=Ad(s,A,"vertex"),Re=Ad(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+Me+`
`+Re)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(W===""||ne==="")&&(ue=!1);ue&&(P.diagnostics={runnable:X,programLog:Z,vertexShader:{log:W,prefix:m},fragmentShader:{log:ne,prefix:p}})}s.deleteShader(A),s.deleteShader(T),D=new js(s,_),S=X_(s,_)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let S;this.getAttributes=function(){return S===void 0&&I(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,F_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=B_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=T,this}var iy=0,ah=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lh(e),t.set(e,n)),n}},lh=class{constructor(e){this.id=iy++,this.code=e,this.usedTimes=0}};function sy(i,e,t,n,s,r,o){let a=new Pr,l=new ah,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,P,F,V){let O=F.fog,Z=V.geometry,W=S.isMeshStandardMaterial?F.environment:null,ne=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),X=ne&&ne.mapping===so?ne.image.height:null,ue=g[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let Me=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=Me!==void 0?Me.length:0,k=0;Z.morphAttributes.position!==void 0&&(k=1),Z.morphAttributes.normal!==void 0&&(k=2),Z.morphAttributes.color!==void 0&&(k=3);let j,te,Q,N;if(ue){let pt=Xn[ue];j=pt.vertexShader,te=pt.fragmentShader}else j=S.vertexShader,te=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),N=l.getFragmentShaderID(S);let G=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Te=V.isInstancedMesh===!0,Ae=V.isBatchedMesh===!0,Qe=!!S.map,ht=!!S.matcap,L=!!ne,oe=!!S.aoMap,se=!!S.lightMap,ee=!!S.bumpMap,ie=!!S.normalMap,ye=!!S.displacementMap,de=!!S.emissiveMap,ve=!!S.metalnessMap,et=!!S.roughnessMap,Je=S.anisotropy>0,w=S.clearcoat>0,v=S.dispersion>0,H=S.iridescence>0,$=S.sheen>0,le=S.transmission>0,K=Je&&!!S.anisotropyMap,Oe=w&&!!S.clearcoatMap,_e=w&&!!S.clearcoatNormalMap,Ne=w&&!!S.clearcoatRoughnessMap,Fe=H&&!!S.iridescenceMap,fe=H&&!!S.iridescenceThicknessMap,we=$&&!!S.sheenColorMap,Ze=$&&!!S.sheenRoughnessMap,ze=!!S.specularMap,be=!!S.specularColorMap,it=!!S.specularIntensityMap,U=le&&!!S.transmissionMap,ge=le&&!!S.thicknessMap,xe=!!S.gradientMap,De=!!S.alphaMap,pe=S.alphaTest>0,re=!!S.alphaHash,Be=!!S.extensions,tt=oi;S.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(tt=i.toneMapping);let xt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:te,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:N,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&V._colorsTexture!==null,instancing:Te,instancingColor:Te&&V.instanceColor!==null,instancingMorph:Te&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ki,alphaToCoverage:!!S.alphaToCoverage,map:Qe,matcap:ht,envMap:L,envMapMode:L&&ne.mapping,envMapCubeUVHeight:X,aoMap:oe,lightMap:se,bumpMap:ee,normalMap:ie,displacementMap:f&&ye,emissiveMap:de,normalMapObjectSpace:ie&&S.normalMapType===Zu,normalMapTangentSpace:ie&&S.normalMapType===kc,metalnessMap:ve,roughnessMap:et,anisotropy:Je,anisotropyMap:K,clearcoat:w,clearcoatMap:Oe,clearcoatNormalMap:_e,clearcoatRoughnessMap:Ne,dispersion:v,iridescence:H,iridescenceMap:Fe,iridescenceThicknessMap:fe,sheen:$,sheenColorMap:we,sheenRoughnessMap:Ze,specularMap:ze,specularColorMap:be,specularIntensityMap:it,transmission:le,transmissionMap:U,thicknessMap:ge,gradientMap:xe,opaque:S.transparent===!1&&S.blending===ti&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:pe,alphaHash:re,combine:S.combine,mapUv:Qe&&_(S.map.channel),aoMapUv:oe&&_(S.aoMap.channel),lightMapUv:se&&_(S.lightMap.channel),bumpMapUv:ee&&_(S.bumpMap.channel),normalMapUv:ie&&_(S.normalMap.channel),displacementMapUv:ye&&_(S.displacementMap.channel),emissiveMapUv:de&&_(S.emissiveMap.channel),metalnessMapUv:ve&&_(S.metalnessMap.channel),roughnessMapUv:et&&_(S.roughnessMap.channel),anisotropyMapUv:K&&_(S.anisotropyMap.channel),clearcoatMapUv:Oe&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:_e&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ne&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:we&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&_(S.sheenRoughnessMap.channel),specularMapUv:ze&&_(S.specularMap.channel),specularColorMapUv:be&&_(S.specularColorMap.channel),specularIntensityMapUv:it&&_(S.specularIntensityMap.channel),transmissionMapUv:U&&_(S.transmissionMap.channel),thicknessMapUv:ge&&_(S.thicknessMap.channel),alphaMapUv:De&&_(S.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ie||Je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!Z.attributes.uv&&(Qe||De),fog:!!O,useFog:S.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ce,skinning:V.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:k,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:Qe&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===_t,decodeVideoTextureEmissive:de&&S.emissiveMap.isVideoTexture===!0&&ut.getTransfer(S.emissiveMap.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Et,flipSided:S.side===Zt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&S.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function p(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)x.push(P),x.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(b(x,S),M(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function b(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){let x=g[S.type],P;if(x){let F=Xn[x];P=rd.clone(F.uniforms)}else P=S.uniforms;return P}function A(S,x){let P;for(let F=0,V=h.length;F<V;F++){let O=h[F];if(O.cacheKey===x){P=O,++P.usedTimes;break}}return P===void 0&&(P=new ny(i,x,S,r),h.push(P)),P}function T(S){if(--S.usedTimes===0){let x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function I(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:A,releaseProgram:T,releaseShaderCache:I,programs:h,dispose:D}}function ry(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function oy(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ld(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,f,d,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):t.push(p)}function l(u,f,d,g,_,m){let p=o(u,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||oy),n.length>1&&n.sort(f||Ld),s.length>1&&s.sort(f||Ld)}function h(){for(let u=e,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ay(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Dd,i.set(n,[o])):s>=r.length?(o=new Dd,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ly(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new Le};break;case"SpotLight":t={position:new R,direction:new R,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function cy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var hy=0;function uy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dy(i){let e=new ly,t=cy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new R);let s=new R,r=new ft,o=new ft;function a(c){let h=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,M=0,y=0,A=0,T=0,I=0;c.sort(uy);for(let S=0,x=c.length;S<x;S++){let P=c[S],F=P.color,V=P.intensity,O=P.distance,Z=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=F.r*V,u+=F.g*V,f+=F.b*V;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],V);I++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let ne=P.shadow,X=t.get(P);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.directionalShadow[d]=X,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=P.shadow.matrix,b++}n.directional[d]=W,d++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(V),W.distance=O,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[_]=W;let ne=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,ne.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[_]=ne.matrix,P.castShadow){let X=t.get(P);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=Z,y++}_++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(F).multiplyScalar(V),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let ne=P.shadow,X=t.get(P);X.shadowIntensity=ne.intensity,X.shadowBias=ne.bias,X.shadowNormalBias=ne.normalBias,X.shadowRadius=ne.radius,X.shadowMapSize=ne.mapSize,X.shadowCameraNear=ne.camera.near,X.shadowCameraFar=ne.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,M++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(V),W.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let D=n.hash;(D.directionalLength!==d||D.pointLength!==g||D.spotLength!==_||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==b||D.numPointShadows!==M||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+A-T,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=I,D.directionalLength=d,D.pointLength=g,D.spotLength=_,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=b,D.numPointShadows=M,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=I,n.version=hy++)}function l(c,h){let u=0,f=0,d=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),u++}else if(M.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(M.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),f++}else if(M.isHemisphereLight){let y=n.hemi[_];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ud(i){let e=new dy(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fy(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ud(i),e.set(s,[a])):r>=o.length?(a=new Ud(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var py=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,my=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gy(i,e,t){let n=new zs,s=new he,r=new he,o=new gt,a=new ma({depthPacking:Yu}),l=new ga,c={},h=t.maxTextureSize,u={[yn]:Zt,[Zt]:yn,[Et]:Et},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:py,fragmentShader:my}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new ct;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new He(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rc;let p=this.type;this.render=function(T,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let S=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ri),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=p!==Gn&&this.type===Gn,O=p===Gn&&this.type!==Gn;for(let Z=0,W=T.length;Z<W;Z++){let ne=T[Z],X=ne.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ue=X.getFrameExtents();if(s.multiply(ue),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,X.mapSize.y=r.y)),X.map===null||V===!0||O===!0){let Re=this.type!==Gn?{minFilter:an,magFilter:an}:{};X.map!==null&&X.map.dispose(),X.map=new zn(s.x,s.y,Re),X.map.texture.name=ne.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let Me=X.getViewportCount();for(let Re=0;Re<Me;Re++){let k=X.getViewport(Re);o.set(r.x*k.x,r.y*k.y,r.x*k.z,r.y*k.w),F.viewport(o),X.updateMatrices(ne,Re),n=X.getFrustum(),y(I,D,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===Gn&&b(X,D),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,P)};function b(T,I){let D=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(I,null,D,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(I,null,D,d,_,null)}function M(T,I,D,S){let x=null,P=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let F=x.uuid,V=I.uuid,O=c[F];O===void 0&&(O={},c[F]=O);let Z=O[V];Z===void 0&&(Z=x.clone(),O[V]=Z,I.addEventListener("dispose",A)),x=Z}if(x.visible=I.visible,x.wireframe=I.wireframe,S===Gn?x.side=I.shadowSide!==null?I.shadowSide:I.side:x.side=I.shadowSide!==null?I.shadowSide:u[I.side],x.alphaMap=I.alphaMap,x.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,x.map=I.map,x.clipShadows=I.clipShadows,x.clippingPlanes=I.clippingPlanes,x.clipIntersection=I.clipIntersection,x.displacementMap=I.displacementMap,x.displacementScale=I.displacementScale,x.displacementBias=I.displacementBias,x.wireframeLinewidth=I.wireframeLinewidth,x.linewidth=I.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let F=i.properties.get(x);F.light=D}return x}function y(T,I,D,S,x){if(T.visible===!1)return;if(T.layers.test(I.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Gn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let V=e.update(T),O=T.material;if(Array.isArray(O)){let Z=V.groups;for(let W=0,ne=Z.length;W<ne;W++){let X=Z[W],ue=O[X.materialIndex];if(ue&&ue.visible){let Me=M(T,ue,S,x);T.onBeforeShadow(i,T,I,D,V,Me,X),i.renderBufferDirect(D,null,V,Me,T,X),T.onAfterShadow(i,T,I,D,V,Me,X)}}}else if(O.visible){let Z=M(T,O,S,x);T.onBeforeShadow(i,T,I,D,V,Z,null),i.renderBufferDirect(D,null,V,Z,T,null),T.onAfterShadow(i,T,I,D,V,Z,null)}}let F=T.children;for(let V=0,O=F.length;V<O;V++)y(F[V],I,D,S,x)}function A(T){T.target.removeEventListener("dispose",A);for(let D in c){let S=c[D],x=T.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var _y={[Ca]:Ia,[Pa]:Ua,[La]:Na,[zi]:Da,[Ia]:Ca,[Ua]:Pa,[Na]:La,[Da]:zi};function yy(i,e){function t(){let U=!1,ge=new gt,xe=null,De=new gt(0,0,0,0);return{setMask:function(pe){xe!==pe&&!U&&(i.colorMask(pe,pe,pe,pe),xe=pe)},setLocked:function(pe){U=pe},setClear:function(pe,re,Be,tt,xt){xt===!0&&(pe*=tt,re*=tt,Be*=tt),ge.set(pe,re,Be,tt),De.equals(ge)===!1&&(i.clearColor(pe,re,Be,tt),De.copy(ge))},reset:function(){U=!1,xe=null,De.set(-1,0,0,0)}}}function n(){let U=!1,ge=!1,xe=null,De=null,pe=null;return{setReversed:function(re){if(ge!==re){let Be=e.get("EXT_clip_control");re?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ge=re;let tt=pe;pe=null,this.setClear(tt)}},getReversed:function(){return ge},setTest:function(re){re?G(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(re){xe!==re&&!U&&(i.depthMask(re),xe=re)},setFunc:function(re){if(ge&&(re=_y[re]),De!==re){switch(re){case Ca:i.depthFunc(i.NEVER);break;case Ia:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case zi:i.depthFunc(i.LEQUAL);break;case La:i.depthFunc(i.EQUAL);break;case Da:i.depthFunc(i.GEQUAL);break;case Ua:i.depthFunc(i.GREATER);break;case Na:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=re}},setLocked:function(re){U=re},setClear:function(re){pe!==re&&(ge&&(re=1-re),i.clearDepth(re),pe=re)},reset:function(){U=!1,xe=null,De=null,pe=null,ge=!1}}}function s(){let U=!1,ge=null,xe=null,De=null,pe=null,re=null,Be=null,tt=null,xt=null;return{setTest:function(pt){U||(pt?G(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(pt){ge!==pt&&!U&&(i.stencilMask(pt),ge=pt)},setFunc:function(pt,Yn,Fn){(xe!==pt||De!==Yn||pe!==Fn)&&(i.stencilFunc(pt,Yn,Fn),xe=pt,De=Yn,pe=Fn)},setOp:function(pt,Yn,Fn){(re!==pt||Be!==Yn||tt!==Fn)&&(i.stencilOp(pt,Yn,Fn),re=pt,Be=Yn,tt=Fn)},setLocked:function(pt){U=pt},setClear:function(pt){xt!==pt&&(i.clearStencil(pt),xt=pt)},reset:function(){U=!1,ge=null,xe=null,De=null,pe=null,re=null,Be=null,tt=null,xt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,y=null,A=null,T=null,I=new Le(0,0,0),D=0,S=!1,x=null,P=null,F=null,V=null,O=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,ne=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(X)[1]),W=ne>=1):X.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),W=ne>=2);let ue=null,Me={},Re=i.getParameter(i.SCISSOR_BOX),k=i.getParameter(i.VIEWPORT),j=new gt().fromArray(Re),te=new gt().fromArray(k);function Q(U,ge,xe,De){let pe=new Uint8Array(4),re=i.createTexture();i.bindTexture(U,re),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Be=0;Be<xe;Be++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ge+Be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return re}let N={};N[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),N[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),N[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),N[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),G(i.DEPTH_TEST),o.setFunc(zi),ee(!1),ie(Ac),G(i.CULL_FACE),oe(ri);function G(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function ce(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Te(U,ge){return u[U]!==ge?(i.bindFramebuffer(U,ge),u[U]=ge,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ge),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ae(U,ge){let xe=d,De=!1;if(U){xe=f.get(ge),xe===void 0&&(xe=[],f.set(ge,xe));let pe=U.textures;if(xe.length!==pe.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Be=pe.length;re<Be;re++)xe[re]=i.COLOR_ATTACHMENT0+re;xe.length=pe.length,De=!0}}else xe[0]!==i.BACK&&(xe[0]=i.BACK,De=!0);De&&i.drawBuffers(xe)}function Qe(U){return g!==U?(i.useProgram(U),g=U,!0):!1}let ht={[xi]:i.FUNC_ADD,[xu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};ht[Su]=i.MIN,ht[bu]=i.MAX;let L={[Eu]:i.ZERO,[Tu]:i.ONE,[wu]:i.SRC_COLOR,[Jo]:i.SRC_ALPHA,[Lu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[Ko]:i.ONE_MINUS_SRC_ALPHA,[Pu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function oe(U,ge,xe,De,pe,re,Be,tt,xt,pt){if(U===ri){_===!0&&(ce(i.BLEND),_=!1);return}if(_===!1&&(G(i.BLEND),_=!0),U!==vu){if(U!==m||pt!==S){if((p!==xi||y!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,y=xi),pt)switch(U){case ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ic:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ic:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}b=null,M=null,A=null,T=null,I.set(0,0,0),D=0,m=U,S=pt}return}pe=pe||ge,re=re||xe,Be=Be||De,(ge!==p||pe!==y)&&(i.blendEquationSeparate(ht[ge],ht[pe]),p=ge,y=pe),(xe!==b||De!==M||re!==A||Be!==T)&&(i.blendFuncSeparate(L[xe],L[De],L[re],L[Be]),b=xe,M=De,A=re,T=Be),(tt.equals(I)===!1||xt!==D)&&(i.blendColor(tt.r,tt.g,tt.b,xt),I.copy(tt),D=xt),m=U,S=!1}function se(U,ge){U.side===Et?ce(i.CULL_FACE):G(i.CULL_FACE);let xe=U.side===Zt;ge&&(xe=!xe),ee(xe),U.blending===ti&&U.transparent===!1?oe(ri):oe(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let De=U.stencilWrite;a.setTest(De),De&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),de(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(U){x!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),x=U)}function ie(U){U!==_u?(G(i.CULL_FACE),U!==P&&(U===Ac?i.cullFace(i.BACK):U===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),P=U}function ye(U){U!==F&&(W&&i.lineWidth(U),F=U)}function de(U,ge,xe){U?(G(i.POLYGON_OFFSET_FILL),(V!==ge||O!==xe)&&(i.polygonOffset(ge,xe),V=ge,O=xe)):ce(i.POLYGON_OFFSET_FILL)}function ve(U){U?G(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function et(U){U===void 0&&(U=i.TEXTURE0+Z-1),ue!==U&&(i.activeTexture(U),ue=U)}function Je(U,ge,xe){xe===void 0&&(ue===null?xe=i.TEXTURE0+Z-1:xe=ue);let De=Me[xe];De===void 0&&(De={type:void 0,texture:void 0},Me[xe]=De),(De.type!==U||De.texture!==ge)&&(ue!==xe&&(i.activeTexture(xe),ue=xe),i.bindTexture(U,ge||N[U]),De.type=U,De.texture=ge)}function w(){let U=Me[ue];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{i.texSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{i.texSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(){try{i.compressedTexSubImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(){try{i.texStorage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{i.texStorage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Fe(){try{i.texImage2D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{i.texImage3D(...arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function we(U){j.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),j.copy(U))}function Ze(U){te.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),te.copy(U))}function ze(U,ge){let xe=c.get(ge);xe===void 0&&(xe=new WeakMap,c.set(ge,xe));let De=xe.get(U);De===void 0&&(De=i.getUniformBlockIndex(ge,U.name),xe.set(U,De))}function be(U,ge){let De=c.get(ge).get(U);l.get(ge)!==De&&(i.uniformBlockBinding(ge,De,U.__bindingPointIndex),l.set(ge,De))}function it(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ue=null,Me={},u={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,M=null,y=null,A=null,T=null,I=new Le(0,0,0),D=0,S=!1,x=null,P=null,F=null,V=null,O=null,j.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:G,disable:ce,bindFramebuffer:Te,drawBuffers:Ae,useProgram:Qe,setBlending:oe,setMaterial:se,setFlipSided:ee,setCullFace:ie,setLineWidth:ye,setPolygonOffset:de,setScissorTest:ve,activeTexture:et,bindTexture:Je,unbindTexture:w,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:Fe,texImage3D:fe,updateUBOMapping:ze,uniformBlockBinding:be,texStorage2D:_e,texStorage3D:Ne,texSubImage2D:$,texSubImage3D:le,compressedTexSubImage2D:K,compressedTexSubImage3D:Oe,scissor:we,viewport:Ze,reset:it}}function vy(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,v){return d?new OffscreenCanvas(w,v):Cr("canvas")}function _(w,v,H){let $=1,le=Je(w);if((le.width>H||le.height>H)&&($=H/Math.max(le.width,le.height)),$<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let K=Math.floor($*le.width),Oe=Math.floor($*le.height);u===void 0&&(u=g(K,Oe));let _e=v?g(K,Oe):u;return _e.width=K,_e.height=Oe,_e.getContext("2d").drawImage(w,0,0,K,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+K+"x"+Oe+")."),_e}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,v,H,$,le=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=v;if(v===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),v===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){let Oe=le?Ar:ut.getTransfer($);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=Oe===_t?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(w,v){let H;return w?v===null||v===Ri||v===$s?H=i.DEPTH24_STENCIL8:v===Dn?H=i.DEPTH32F_STENCIL8:v===Ys&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ri||v===$s?H=i.DEPTH_COMPONENT24:v===Dn?H=i.DEPTH_COMPONENT32F:v===Ys&&(H=i.DEPTH_COMPONENT16),H}function A(w,v){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==an&&w.minFilter!==Rn?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function T(w){let v=w.target;v.removeEventListener("dispose",T),D(v),v.isVideoTexture&&h.delete(v)}function I(w){let v=w.target;v.removeEventListener("dispose",I),x(v)}function D(w){let v=n.get(w);if(v.__webglInit===void 0)return;let H=w.source,$=f.get(H);if($){let le=$[v.__cacheKey];le.usedTimes--,le.usedTimes===0&&S(w),Object.keys($).length===0&&f.delete(H)}n.remove(w)}function S(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let H=w.source,$=f.get(H);delete $[v.__cacheKey],o.memory.textures--}function x(w){let v=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let le=0;le<v.__webglFramebuffer[$].length;le++)i.deleteFramebuffer(v.__webglFramebuffer[$][le]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=w.textures;for(let $=0,le=H.length;$<le;$++){let K=n.get(H[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(H[$])}n.remove(w)}let P=0;function F(){P=0}function V(){let w=P;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),P+=1,w}function O(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function Z(w,v){let H=n.get(w);if(w.isVideoTexture&&ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&H.__version!==w.version){let $=w.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{N(H,w,v);return}}else w.isExternalTexture&&(H.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function W(w,v){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){N(H,w,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function ne(w,v){let H=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&H.__version!==w.version){N(H,w,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function X(w,v){let H=n.get(w);if(w.version>0&&H.__version!==w.version){G(H,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let ue={[Cs]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},Me={[an]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[ro]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Ai]:i.LINEAR_MIPMAP_LINEAR},Re={[$u]:i.NEVER,[td]:i.ALWAYS,[Ju]:i.LESS,[Hc]:i.LEQUAL,[Ku]:i.EQUAL,[ed]:i.GEQUAL,[Qu]:i.GREATER,[ju]:i.NOTEQUAL};function k(w,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Rn||v.magFilter===Oa||v.magFilter===ro||v.magFilter===Ai||v.minFilter===Rn||v.minFilter===Oa||v.minFilter===ro||v.minFilter===Ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ue[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ue[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ue[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Me[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Me[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==ro&&v.minFilter!==Ai||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function j(w,v){let H=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",T));let $=v.source,le=f.get($);le===void 0&&(le={},f.set($,le));let K=O(v);if(K!==w.__cacheKey){le[K]===void 0&&(le[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),le[K].usedTimes++;let Oe=le[w.__cacheKey];Oe!==void 0&&(le[w.__cacheKey].usedTimes--,Oe.usedTimes===0&&S(v)),w.__cacheKey=K,w.__webglTexture=le[K].texture}return H}function te(w,v,H){return Math.floor(Math.floor(w/H)/v)}function Q(w,v,H,$){let K=w.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,$,v.data);else{K.sort((fe,we)=>fe.start-we.start);let Oe=0;for(let fe=1;fe<K.length;fe++){let we=K[Oe],Ze=K[fe],ze=we.start+we.count,be=te(Ze.start,v.width,4),it=te(we.start,v.width,4);Ze.start<=ze+1&&be===it&&te(Ze.start+Ze.count-1,v.width,4)===be?we.count=Math.max(we.count,Ze.start+Ze.count-we.start):(++Oe,K[Oe]=Ze)}K.length=Oe+1;let _e=i.getParameter(i.UNPACK_ROW_LENGTH),Ne=i.getParameter(i.UNPACK_SKIP_PIXELS),Fe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let fe=0,we=K.length;fe<we;fe++){let Ze=K[fe],ze=Math.floor(Ze.start/4),be=Math.ceil(Ze.count/4),it=ze%v.width,U=Math.floor(ze/v.width),ge=be,xe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,it),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,it,U,ge,xe,H,$,v.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,Fe)}}function N(w,v,H){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let le=j(w,v),K=v.source;t.bindTexture($,w.__webglTexture,i.TEXTURE0+H);let Oe=n.get(K);if(K.version!==Oe.__version||le===!0){t.activeTexture(i.TEXTURE0+H);let _e=ut.getPrimaries(ut.workingColorSpace),Ne=v.colorSpace===Un?null:ut.getPrimaries(v.colorSpace),Fe=v.colorSpace===Un||_e===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let fe=_(v.image,!1,s.maxTextureSize);fe=et(v,fe);let we=r.convert(v.format,v.colorSpace),Ze=r.convert(v.type),ze=M(v.internalFormat,we,Ze,v.colorSpace,v.isVideoTexture);k($,v);let be,it=v.mipmaps,U=v.isVideoTexture!==!0,ge=Oe.__version===void 0||le===!0,xe=K.dataReady,De=A(v,fe);if(v.isDepthTexture)ze=y(v.format===Js,v.type),ge&&(U?t.texStorage2D(i.TEXTURE_2D,1,ze,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,we,Ze,null));else if(v.isDataTexture)if(it.length>0){U&&ge&&t.texStorage2D(i.TEXTURE_2D,De,ze,it[0].width,it[0].height);for(let pe=0,re=it.length;pe<re;pe++)be=it[pe],U?xe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,be.width,be.height,we,Ze,be.data):t.texImage2D(i.TEXTURE_2D,pe,ze,be.width,be.height,0,we,Ze,be.data);v.generateMipmaps=!1}else U?(ge&&t.texStorage2D(i.TEXTURE_2D,De,ze,fe.width,fe.height),xe&&Q(v,fe,we,Ze)):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,we,Ze,fe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){U&&ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ze,it[0].width,it[0].height,fe.depth);for(let pe=0,re=it.length;pe<re;pe++)if(be=it[pe],v.format!==xn)if(we!==null)if(U){if(xe)if(v.layerUpdates.size>0){let Be=Jc(be.width,be.height,v.format,v.type);for(let tt of v.layerUpdates){let xt=be.data.subarray(tt*Be/be.data.BYTES_PER_ELEMENT,(tt+1)*Be/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,tt,be.width,be.height,1,we,xt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,fe.depth,we,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,pe,ze,be.width,be.height,fe.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?xe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,pe,0,0,0,be.width,be.height,fe.depth,we,Ze,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,pe,ze,be.width,be.height,fe.depth,0,we,Ze,be.data)}else{U&&ge&&t.texStorage2D(i.TEXTURE_2D,De,ze,it[0].width,it[0].height);for(let pe=0,re=it.length;pe<re;pe++)be=it[pe],v.format!==xn?we!==null?U?xe&&t.compressedTexSubImage2D(i.TEXTURE_2D,pe,0,0,be.width,be.height,we,be.data):t.compressedTexImage2D(i.TEXTURE_2D,pe,ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?xe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,be.width,be.height,we,Ze,be.data):t.texImage2D(i.TEXTURE_2D,pe,ze,be.width,be.height,0,we,Ze,be.data)}else if(v.isDataArrayTexture)if(U){if(ge&&t.texStorage3D(i.TEXTURE_2D_ARRAY,De,ze,fe.width,fe.height,fe.depth),xe)if(v.layerUpdates.size>0){let pe=Jc(fe.width,fe.height,v.format,v.type);for(let re of v.layerUpdates){let Be=fe.data.subarray(re*pe/fe.data.BYTES_PER_ELEMENT,(re+1)*pe/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,fe.width,fe.height,1,we,Ze,Be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,we,Ze,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,we,Ze,fe.data);else if(v.isData3DTexture)U?(ge&&t.texStorage3D(i.TEXTURE_3D,De,ze,fe.width,fe.height,fe.depth),xe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,we,Ze,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,we,Ze,fe.data);else if(v.isFramebufferTexture){if(ge)if(U)t.texStorage2D(i.TEXTURE_2D,De,ze,fe.width,fe.height);else{let pe=fe.width,re=fe.height;for(let Be=0;Be<De;Be++)t.texImage2D(i.TEXTURE_2D,Be,ze,pe,re,0,we,Ze,null),pe>>=1,re>>=1}}else if(it.length>0){if(U&&ge){let pe=Je(it[0]);t.texStorage2D(i.TEXTURE_2D,De,ze,pe.width,pe.height)}for(let pe=0,re=it.length;pe<re;pe++)be=it[pe],U?xe&&t.texSubImage2D(i.TEXTURE_2D,pe,0,0,we,Ze,be):t.texImage2D(i.TEXTURE_2D,pe,ze,we,Ze,be);v.generateMipmaps=!1}else if(U){if(ge){let pe=Je(fe);t.texStorage2D(i.TEXTURE_2D,De,ze,pe.width,pe.height)}xe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,Ze,fe)}else t.texImage2D(i.TEXTURE_2D,0,ze,we,Ze,fe);m(v)&&p($),Oe.__version=K.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function G(w,v,H){if(v.image.length!==6)return;let $=j(w,v),le=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+H);let K=n.get(le);if(le.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let Oe=ut.getPrimaries(ut.workingColorSpace),_e=v.colorSpace===Un?null:ut.getPrimaries(v.colorSpace),Ne=v.colorSpace===Un||Oe===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let Fe=v.isCompressedTexture||v.image[0].isCompressedTexture,fe=v.image[0]&&v.image[0].isDataTexture,we=[];for(let re=0;re<6;re++)!Fe&&!fe?we[re]=_(v.image[re],!0,s.maxCubemapSize):we[re]=fe?v.image[re].image:v.image[re],we[re]=et(v,we[re]);let Ze=we[0],ze=r.convert(v.format,v.colorSpace),be=r.convert(v.type),it=M(v.internalFormat,ze,be,v.colorSpace),U=v.isVideoTexture!==!0,ge=K.__version===void 0||$===!0,xe=le.dataReady,De=A(v,Ze);k(i.TEXTURE_CUBE_MAP,v);let pe;if(Fe){U&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,it,Ze.width,Ze.height);for(let re=0;re<6;re++){pe=we[re].mipmaps;for(let Be=0;Be<pe.length;Be++){let tt=pe[Be];v.format!==xn?ze!==null?U?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,tt.width,tt.height,ze,tt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,it,tt.width,tt.height,0,tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,0,0,tt.width,tt.height,ze,be,tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be,it,tt.width,tt.height,0,ze,be,tt.data)}}}else{if(pe=v.mipmaps,U&&ge){pe.length>0&&De++;let re=Je(we[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,it,re.width,re.height)}for(let re=0;re<6;re++)if(fe){U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,we[re].width,we[re].height,ze,be,we[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,it,we[re].width,we[re].height,0,ze,be,we[re].data);for(let Be=0;Be<pe.length;Be++){let xt=pe[Be].image[re].image;U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,xt.width,xt.height,ze,be,xt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,it,xt.width,xt.height,0,ze,be,xt.data)}}else{U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,ze,be,we[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,it,ze,be,we[re]);for(let Be=0;Be<pe.length;Be++){let tt=pe[Be];U?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,0,0,ze,be,tt.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Be+1,it,ze,be,tt.image[re])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),K.__version=le.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function ce(w,v,H,$,le,K){let Oe=r.convert(H.format,H.colorSpace),_e=r.convert(H.type),Ne=M(H.internalFormat,Oe,_e,H.colorSpace),Fe=n.get(v),fe=n.get(H);if(fe.__renderTarget=v,!Fe.__hasExternalTextures){let we=Math.max(1,v.width>>K),Ze=Math.max(1,v.height>>K);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,K,Ne,we,Ze,v.depth,0,Oe,_e,null):t.texImage2D(le,K,Ne,we,Ze,0,Oe,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),de(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,le,fe.__webglTexture,0,ye(v)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,le,fe.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Te(w,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let $=v.depthTexture,le=$&&$.isDepthTexture?$.type:null,K=y(v.stencilBuffer,le),Oe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=ye(v);de(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,K,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,w)}else{let $=v.textures;for(let le=0;le<$.length;le++){let K=$[le],Oe=r.convert(K.format,K.colorSpace),_e=r.convert(K.type),Ne=M(K.internalFormat,Oe,_e,K.colorSpace),Fe=ye(v);H&&de(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Fe,Ne,v.width,v.height):de(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Fe,Ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Ne,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z(v.depthTexture,0);let le=$.__webglTexture,K=ye(v);if(v.depthTexture.format===Is)de(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(v.depthTexture.format===Js)de(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Qe(w){let v=n.get(w),H=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let $=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let le=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",le)};$.addEventListener("dispose",le),v.__depthDisposeCallback=le}v.__boundDepthTexture=$}if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let $=w.texture.mipmaps;$&&$.length>0?Ae(v.__webglFramebuffer[0],w):Ae(v.__webglFramebuffer,w)}else if(H){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Te(v.__webglDepthbuffer[$],w,!1);else{let le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,K)}}else{let $=w.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Te(v.__webglDepthbuffer,w,!1);else{let le=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(w,v,H){let $=n.get(w);v!==void 0&&ce($.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Qe(w)}function L(w){let v=w.texture,H=n.get(w),$=n.get(v);w.addEventListener("dispose",I);let le=w.textures,K=w.isWebGLCubeRenderTarget===!0,Oe=le.length>1;if(Oe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,o.memory.textures++),K){H.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[_e]=[];for(let Ne=0;Ne<v.mipmaps.length;Ne++)H.__webglFramebuffer[_e][Ne]=i.createFramebuffer()}else H.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let _e=0;_e<v.mipmaps.length;_e++)H.__webglFramebuffer[_e]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let _e=0,Ne=le.length;_e<Ne;_e++){let Fe=n.get(le[_e]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&de(w)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let _e=0;_e<le.length;_e++){let Ne=le[_e];H.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[_e]);let Fe=r.convert(Ne.format,Ne.colorSpace),fe=r.convert(Ne.type),we=M(Ne.internalFormat,Fe,fe,Ne.colorSpace,w.isXRRenderTarget===!0),Ze=ye(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,H.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),k(i.TEXTURE_CUBE_MAP,v);for(let _e=0;_e<6;_e++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ne=0;Ne<v.mipmaps.length;Ne++)ce(H.__webglFramebuffer[_e][Ne],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ne);else ce(H.__webglFramebuffer[_e],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let _e=0,Ne=le.length;_e<Ne;_e++){let Fe=le[_e],fe=n.get(Fe),we=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(we=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(we,fe.__webglTexture),k(we,Fe),ce(H.__webglFramebuffer,w,Fe,i.COLOR_ATTACHMENT0+_e,we,0),m(Fe)&&p(we)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(_e=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,$.__webglTexture),k(_e,v),v.mipmaps&&v.mipmaps.length>0)for(let Ne=0;Ne<v.mipmaps.length;Ne++)ce(H.__webglFramebuffer[Ne],w,v,i.COLOR_ATTACHMENT0,_e,Ne);else ce(H.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,_e,0);m(v)&&p(_e),t.unbindTexture()}w.depthBuffer&&Qe(w)}function oe(w){let v=w.textures;for(let H=0,$=v.length;H<$;H++){let le=v[H];if(m(le)){let K=b(w),Oe=n.get(le).__webglTexture;t.bindTexture(K,Oe),p(K),t.unbindTexture()}}}let se=[],ee=[];function ie(w){if(w.samples>0){if(de(w)===!1){let v=w.textures,H=w.width,$=w.height,le=i.COLOR_BUFFER_BIT,K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(w),_e=v.length>1;if(_e)for(let Fe=0;Fe<v.length;Fe++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);let Ne=w.texture.mipmaps;Ne&&Ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Fe=0;Fe<v.length;Fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let fe=n.get(v[Fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,le,i.NEAREST),l===!0&&(se.length=0,ee.length=0,se.push(i.COLOR_ATTACHMENT0+Fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(se.push(K),ee.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Fe=0;Fe<v.length;Fe++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Fe]);let fe=n.get(v[Fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Fe,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function ye(w){return Math.min(s.maxSamples,w.samples)}function de(w){let v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ve(w){let v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function et(w,v){let H=w.colorSpace,$=w.format,le=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||H!==ki&&H!==Un&&(ut.getTransfer(H)===_t?($!==xn||le!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=ne,this.setTextureCube=X,this.rebindTextures=ht,this.setupRenderTarget=L,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=de}function xy(i,e){function t(n,s=Un){let r,o=ut.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Dc)return i.BYTE;if(n===Uc)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Zs)return i.HALF_FLOAT;if(n===Bc)return i.ALPHA;if(n===Oc)return i.RGB;if(n===xn)return i.RGBA;if(n===Is)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===Va)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===zc)return i.RG;if(n===Wa)return i.RG_INTEGER;if(n===Xa)return i.RGBA_INTEGER;if(n===oo||n===ao||n===lo||n===co)if(o===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===oo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ao)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===lo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qa||n===Ya||n===Za||n===$a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===Ka||n===Qa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===Ka)return o===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===tl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===rl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ul)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===fl)return o===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===_l||n===yl||n===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===gl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var My=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Sy=`
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

}`,ch=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Vr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new fn({vertexShader:My,fragmentShader:Sy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Pn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hh=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,_=typeof XRWebGLBinding<"u",m=new ch,p={},b=t.getContextAttributes(),M=null,y=null,A=[],T=[],I=new he,D=null,S=new Ot;S.viewport=new gt;let x=new Ot;x.viewport=new gt;let P=[S,x],F=new Aa,V=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=A[N];return G===void 0&&(G=new Ns,A[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=A[N];return G===void 0&&(G=new Ns,A[N]=G),G.getGripSpace()},this.getHand=function(N){let G=A[N];return G===void 0&&(G=new Ns,A[N]=G),G.getHandSpace()};function Z(N){let G=T.indexOf(N.inputSource);if(G===-1)return;let ce=A[G];ce!==void 0&&(ce.update(N.inputSource,N.frame,c||o),ce.dispatchEvent({type:N.type,data:N.inputSource}))}function W(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",ne);for(let N=0;N<A.length;N++){let G=T[N];G!==null&&(T[N]=null,A[N].disconnect(G))}V=null,O=null,m.reset();for(let N in p)delete p[N];e.setRenderTarget(M),d=null,f=null,u=null,s=null,y=null,Q.stop(),n.isPresenting=!1,e.setPixelRatio(D),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){r=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){a=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(N){c=N},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(N){if(s=N,s!==null){if(M=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",W),s.addEventListener("inputsourceschange",ne),b.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(I),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Te=null,Ae=null;b.depth&&(Ae=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=b.stencil?Js:Is,Te=b.stencil?$s:Ri);let Qe={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(Qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new zn(f.textureWidth,f.textureHeight,{format:xn,type:Ln,depthTexture:new Hr(f.textureWidth,f.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new zn(d.framebufferWidth,d.framebufferHeight,{format:xn,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Q.setContext(s),Q.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(N){for(let G=0;G<N.removed.length;G++){let ce=N.removed[G],Te=T.indexOf(ce);Te>=0&&(T[Te]=null,A[Te].disconnect(ce))}for(let G=0;G<N.added.length;G++){let ce=N.added[G],Te=T.indexOf(ce);if(Te===-1){for(let Qe=0;Qe<A.length;Qe++)if(Qe>=T.length){T.push(ce),Te=Qe;break}else if(T[Qe]===null){T[Qe]=ce,Te=Qe;break}if(Te===-1)break}let Ae=A[Te];Ae&&Ae.connect(ce)}}let X=new R,ue=new R;function Me(N,G,ce){X.setFromMatrixPosition(G.matrixWorld),ue.setFromMatrixPosition(ce.matrixWorld);let Te=X.distanceTo(ue),Ae=G.projectionMatrix.elements,Qe=ce.projectionMatrix.elements,ht=Ae[14]/(Ae[10]-1),L=Ae[14]/(Ae[10]+1),oe=(Ae[9]+1)/Ae[5],se=(Ae[9]-1)/Ae[5],ee=(Ae[8]-1)/Ae[0],ie=(Qe[8]+1)/Qe[0],ye=ht*ee,de=ht*ie,ve=Te/(-ee+ie),et=ve*-ee;if(G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(et),N.translateZ(ve),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert(),Ae[10]===-1)N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{let Je=ht+ve,w=L+ve,v=ye-et,H=de+(Te-et),$=oe*L/w*Je,le=se*L/w*Je;N.projectionMatrix.makePerspective(v,H,$,le,Je,w),N.projectionMatrixInverse.copy(N.projectionMatrix).invert()}}function Re(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(s===null)return;let G=N.near,ce=N.far;m.texture!==null&&(m.depthNear>0&&(G=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),F.near=x.near=S.near=G,F.far=x.far=S.far=ce,(V!==F.near||O!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),V=F.near,O=F.far),F.layers.mask=N.layers.mask|6,S.layers.mask=F.layers.mask&3,x.layers.mask=F.layers.mask&5;let Te=N.parent,Ae=F.cameras;Re(F,Te);for(let Qe=0;Qe<Ae.length;Qe++)Re(Ae[Qe],Te);Ae.length===2?Me(F,S,x):F.projectionMatrix.copy(S.projectionMatrix),k(N,F,Te)};function k(N,G,ce){ce===null?N.matrix.copy(G.matrixWorld):(N.matrix.copy(ce.matrixWorld),N.matrix.invert(),N.matrix.multiply(G.matrixWorld)),N.matrix.decompose(N.position,N.quaternion,N.scale),N.updateMatrixWorld(!0),N.projectionMatrix.copy(G.projectionMatrix),N.projectionMatrixInverse.copy(G.projectionMatrixInverse),N.isPerspectiveCamera&&(N.fov=Ps*2*Math.atan(1/N.projectionMatrix.elements[5]),N.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(N){l=N,f!==null&&(f.fixedFoveation=N),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=N)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(N){return p[N]};let j=null;function te(N,G){if(h=G.getViewerPose(c||o),g=G,h!==null){let ce=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Te=!1;ce.length!==F.cameras.length&&(F.cameras.length=0,Te=!0);for(let L=0;L<ce.length;L++){let oe=ce[L],se=null;if(d!==null)se=d.getViewport(oe);else{let ie=u.getViewSubImage(f,oe);se=ie.viewport,L===0&&(e.setRenderTargetTextures(y,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(y))}let ee=P[L];ee===void 0&&(ee=new Ot,ee.layers.enable(L),ee.viewport=new gt,P[L]=ee),ee.matrix.fromArray(oe.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(oe.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(se.x,se.y,se.width,se.height),L===0&&(F.matrix.copy(ee.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Te===!0&&F.cameras.push(ee)}let Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let L=u.getDepthInformation(ce[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Ae&&Ae.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<ce.length;L++){let oe=ce[L].camera;if(oe){let se=p[oe];se||(se=new Vr,p[oe]=se);let ee=u.getCameraImage(oe);se.sourceTexture=ee}}}}for(let ce=0;ce<A.length;ce++){let Te=T[ce],Ae=A[ce];Te!==null&&Ae!==void 0&&Ae.update(Te,G,c||o)}j&&j(N,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let Q=new Nd;Q.setAnimationLoop(te),this.setAnimationLoop=function(N){j=N},this.dispose=function(){}}},ns=new Cn,by=new ft;function Ey(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,qc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Zt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Zt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,ns.copy(y),ns.x*=-1,ns.y*=-1,ns.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(by.makeRotationFromEuler(ns)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ty(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){let y=M.program;n.uniformBlockBinding(b,y)}function c(b,M){let y=s[b.id];y===void 0&&(g(b),y=h(b),s[b.id]=y,b.addEventListener("dispose",m));let A=M.program;n.updateUBOMapping(b,A);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let M=u();b.__bindingPointIndex=M;let y=i.createBuffer(),A=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,A,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let M=s[b.id],y=b.uniforms,A=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,I=y.length;T<I;T++){let D=Array.isArray(y[T])?y[T]:[y[T]];for(let S=0,x=D.length;S<x;S++){let P=D[S];if(d(P,T,S,A)===!0){let F=P.__offset,V=Array.isArray(P.value)?P.value:[P.value],O=0;for(let Z=0;Z<V.length;Z++){let W=V[Z],ne=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,F+O,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,O),O+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,M,y,A){let T=b.value,I=M+"_"+y;if(A[I]===void 0)return typeof T=="number"||typeof T=="boolean"?A[I]=T:A[I]=T.clone(),!0;{let D=A[I];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return A[I]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function g(b){let M=b.uniforms,y=0,A=16;for(let I=0,D=M.length;I<D;I++){let S=Array.isArray(M[I])?M[I]:[M[I]];for(let x=0,P=S.length;x<P;x++){let F=S[x],V=Array.isArray(F.value)?F.value:[F.value];for(let O=0,Z=V.length;O<Z;O++){let W=V[O],ne=_(W),X=y%A,ue=X%ne.boundary,Me=X+ue;y+=ue,Me!==0&&A-Me<ne.storage&&(y+=A-Me),F.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=ne.storage}}}let T=y%A;return T>0&&(y+=A-T),b.__size=y,b.__cache={},this}function _(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){let M=b.target;M.removeEventListener("dispose",m);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var bl=class{constructor(e={}){let{canvas:t=nd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,A=!1;this._outputColorSpace=qt;let T=0,I=0,D=null,S=-1,x=null,P=new gt,F=new gt,V=null,O=new Le(0),Z=0,W=t.width,ne=t.height,X=1,ue=null,Me=null,Re=new gt(0,0,W,ne),k=new gt(0,0,W,ne),j=!1,te=new zs,Q=!1,N=!1,G=new ft,ce=new R,Te=new gt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function ht(){return D===null?X:1}let L=n;function oe(E,B){return t.getContext(E,B)}try{let E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",pe,!1),L===null){let B="webgl2";if(L=oe(B,E),L===null)throw oe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let se,ee,ie,ye,de,ve,et,Je,w,v,H,$,le,K,Oe,_e,Ne,Fe,fe,we,Ze,ze,be,it;function U(){se=new Gg(L),se.init(),ze=new xy(L,se),ee=new Fg(L,se,e,ze),ie=new yy(L,se),ee.reversedDepthBuffer&&f&&ie.buffers.depth.setReversed(!0),ye=new qg(L),de=new ry,ve=new vy(L,se,ie,de,ee,ze,ye),et=new Og(y),Je=new Vg(y),w=new Qp(L),be=new Ug(L,w),v=new Wg(L,w,ye,be),H=new Zg(L,v,w,ye),fe=new Yg(L,ee,ve),_e=new Bg(de),$=new sy(y,et,Je,se,ee,be,_e),le=new Ey(y,de),K=new ay,Oe=new fy(se),Fe=new Dg(y,et,Je,ie,H,d,l),Ne=new gy(y,H,ee),it=new Ty(L,ye,ee,ie),we=new Ng(L,se,ye),Ze=new Xg(L,se,ye),ye.programs=$.programs,y.capabilities=ee,y.extensions=se,y.properties=de,y.renderLists=K,y.shadowMap=Ne,y.state=ie,y.info=ye}U();let ge=new hh(y,L);this.xr=ge,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(W,ne,!1))},this.getSize=function(E){return E.set(W,ne)},this.setSize=function(E,B,q=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,ne=B,t.width=Math.floor(E*X),t.height=Math.floor(B*X),q===!0&&(t.style.width=E+"px",t.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(W*X,ne*X).floor()},this.setDrawingBufferSize=function(E,B,q){W=E,ne=B,X=q,t.width=Math.floor(E*q),t.height=Math.floor(B*q),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(Re)},this.setViewport=function(E,B,q,Y){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,B,q,Y),ie.viewport(P.copy(Re).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(k)},this.setScissor=function(E,B,q,Y){E.isVector4?k.set(E.x,E.y,E.z,E.w):k.set(E,B,q,Y),ie.scissor(F.copy(k).multiplyScalar(X).round())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){ie.setScissorTest(j=E)},this.setOpaqueSort=function(E){ue=E},this.setTransparentSort=function(E){Me=E},this.getClearColor=function(E){return E.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(E=!0,B=!0,q=!0){let Y=0;if(E){let z=!1;if(D!==null){let me=D.texture.format;z=me===Xa||me===Wa||me===Ga}if(z){let me=D.texture.type,Ee=me===Ln||me===Ri||me===Ys||me===$s||me===ka||me===Ha,Ue=Fe.getClearColor(),Pe=Fe.getClearAlpha(),qe=Ue.r,$e=Ue.g,Ge=Ue.b;Ee?(g[0]=qe,g[1]=$e,g[2]=Ge,g[3]=Pe,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=qe,_[1]=$e,_[2]=Ge,_[3]=Pe,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}B&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Fe.dispose(),K.dispose(),Oe.dispose(),de.dispose(),et.dispose(),Je.dispose(),H.dispose(),be.dispose(),it.dispose(),$.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",Fn),ge.removeEventListener("sessionend",Lh),Pi.stop()};function xe(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let E=ye.autoReset,B=Ne.enabled,q=Ne.autoUpdate,Y=Ne.needsUpdate,z=Ne.type;U(),ye.autoReset=E,Ne.enabled=B,Ne.autoUpdate=q,Ne.needsUpdate=Y,Ne.type=z}function pe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function re(E){let B=E.target;B.removeEventListener("dispose",re),Be(B)}function Be(E){tt(E),de.remove(E)}function tt(E){let B=de.get(E).programs;B!==void 0&&(B.forEach(function(q){$.releaseProgram(q)}),E.isShaderMaterial&&$.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,q,Y,z,me){B===null&&(B=Ae);let Ee=z.isMesh&&z.matrixWorld.determinant()<0,Ue=Sf(E,B,q,Y,z);ie.setMaterial(Y,Ee);let Pe=q.index,qe=1;if(Y.wireframe===!0){if(Pe=v.getWireframeAttribute(q),Pe===void 0)return;qe=2}let $e=q.drawRange,Ge=q.attributes.position,lt=$e.start*qe,yt=($e.start+$e.count)*qe;me!==null&&(lt=Math.max(lt,me.start*qe),yt=Math.min(yt,(me.start+me.count)*qe)),Pe!==null?(lt=Math.max(lt,0),yt=Math.min(yt,Pe.count)):Ge!=null&&(lt=Math.max(lt,0),yt=Math.min(yt,Ge.count));let Ut=yt-lt;if(Ut<0||Ut===1/0)return;be.setup(z,Y,Ue,q,Pe);let St,vt=we;if(Pe!==null&&(St=w.get(Pe),vt=Ze,vt.setIndex(St)),z.isMesh)Y.wireframe===!0?(ie.setLineWidth(Y.wireframeLinewidth*ht()),vt.setMode(L.LINES)):vt.setMode(L.TRIANGLES);else if(z.isLine){let We=Y.linewidth;We===void 0&&(We=1),ie.setLineWidth(We*ht()),z.isLineSegments?vt.setMode(L.LINES):z.isLineLoop?vt.setMode(L.LINE_LOOP):vt.setMode(L.LINE_STRIP)}else z.isPoints?vt.setMode(L.POINTS):z.isSprite&&vt.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Ls("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),vt.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))vt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let We=z._multiDrawStarts,Ct=z._multiDrawCounts,dt=z._multiDrawCount,cn=Pe?w.get(Pe).bytesPerElement:1,hs=de.get(Y).currentProgram.getUniforms();for(let hn=0;hn<dt;hn++)hs.setValue(L,"_gl_DrawID",hn),vt.render(We[hn]/cn,Ct[hn])}else if(z.isInstancedMesh)vt.renderInstances(lt,Ut,z.count);else if(q.isInstancedBufferGeometry){let We=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ct=Math.min(q.instanceCount,We);vt.renderInstances(lt,Ut,Ct)}else vt.render(lt,Ut)};function xt(E,B,q){E.transparent===!0&&E.side===Et&&E.forceSinglePass===!1?(E.side=Zt,E.needsUpdate=!0,vo(E,B,q),E.side=yn,E.needsUpdate=!0,vo(E,B,q),E.side=Et):vo(E,B,q)}this.compile=function(E,B,q=null){q===null&&(q=E),p=Oe.get(q),p.init(B),M.push(p),q.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==q&&E.traverseVisible(function(z){z.isLight&&z.layers.test(B.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();let Y=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let me=z.material;if(me)if(Array.isArray(me))for(let Ee=0;Ee<me.length;Ee++){let Ue=me[Ee];xt(Ue,q,z),Y.add(Ue)}else xt(me,q,z),Y.add(me)}),p=M.pop(),Y},this.compileAsync=function(E,B,q=null){let Y=this.compile(E,B,q);return new Promise(z=>{function me(){if(Y.forEach(function(Ee){de.get(Ee).currentProgram.isReady()&&Y.delete(Ee)}),Y.size===0){z(E);return}setTimeout(me,10)}se.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let pt=null;function Yn(E){pt&&pt(E)}function Fn(){Pi.stop()}function Lh(){Pi.start()}let Pi=new Nd;Pi.setAnimationLoop(Yn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){pt=E,ge.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},ge.addEventListener("sessionstart",Fn),ge.addEventListener("sessionend",Lh),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(B),B=ge.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,B,D),p=Oe.get(E,M.length),p.init(B),M.push(p),G.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),te.setFromProjectionMatrix(G,An,B.reversedDepth),N=this.localClippingEnabled,Q=_e.init(this.clippingPlanes,N),m=K.get(E,b.length),m.init(),b.push(m),ge.enabled===!0&&ge.isPresenting===!0){let me=y.xr.getDepthSensingMesh();me!==null&&kl(me,B,-1/0,y.sortObjects)}kl(E,B,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ue,Me),Qe=ge.enabled===!1||ge.isPresenting===!1||ge.hasDepthSensing()===!1,Qe&&Fe.addToRenderList(m,E),this.info.render.frame++,Q===!0&&_e.beginShadows();let q=p.state.shadowsArray;Ne.render(q,E,B),Q===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,z=m.transmissive;if(p.setupLights(),B.isArrayCamera){let me=B.cameras;if(z.length>0)for(let Ee=0,Ue=me.length;Ee<Ue;Ee++){let Pe=me[Ee];Uh(Y,z,E,Pe)}Qe&&Fe.render(E);for(let Ee=0,Ue=me.length;Ee<Ue;Ee++){let Pe=me[Ee];Dh(m,E,Pe,Pe.viewport)}}else z.length>0&&Uh(Y,z,E,B),Qe&&Fe.render(E),Dh(m,E,B);D!==null&&I===0&&(ve.updateMultisampleRenderTarget(D),ve.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,B),be.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],Q===!0&&_e.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function kl(E,B,q,Y){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){Y&&Te.setFromMatrixPosition(E.matrixWorld).applyMatrix4(G);let Ee=H.update(E),Ue=E.material;Ue.visible&&m.push(E,Ee,Ue,q,Te.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){let Ee=H.update(E),Ue=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Te.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Te.copy(Ee.boundingSphere.center)),Te.applyMatrix4(E.matrixWorld).applyMatrix4(G)),Array.isArray(Ue)){let Pe=Ee.groups;for(let qe=0,$e=Pe.length;qe<$e;qe++){let Ge=Pe[qe],lt=Ue[Ge.materialIndex];lt&&lt.visible&&m.push(E,Ee,lt,q,Te.z,Ge)}}else Ue.visible&&m.push(E,Ee,Ue,q,Te.z,null)}}let me=E.children;for(let Ee=0,Ue=me.length;Ee<Ue;Ee++)kl(me[Ee],B,q,Y)}function Dh(E,B,q,Y){let z=E.opaque,me=E.transmissive,Ee=E.transparent;p.setupLightsView(q),Q===!0&&_e.setGlobalState(y.clippingPlanes,q),Y&&ie.viewport(P.copy(Y)),z.length>0&&yo(z,B,q),me.length>0&&yo(me,B,q),Ee.length>0&&yo(Ee,B,q),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Uh(E,B,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Zs:Ln,minFilter:Ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let me=p.state.transmissionRenderTarget[Y.id],Ee=Y.viewport||P;me.setSize(Ee.z*y.transmissionResolutionScale,Ee.w*y.transmissionResolutionScale);let Ue=y.getRenderTarget(),Pe=y.getActiveCubeFace(),qe=y.getActiveMipmapLevel();y.setRenderTarget(me),y.getClearColor(O),Z=y.getClearAlpha(),Z<1&&y.setClearColor(16777215,.5),y.clear(),Qe&&Fe.render(q);let $e=y.toneMapping;y.toneMapping=oi;let Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Q===!0&&_e.setGlobalState(y.clippingPlanes,Y),yo(E,q,Y),ve.updateMultisampleRenderTarget(me),ve.updateRenderTargetMipmap(me),se.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let yt=0,Ut=B.length;yt<Ut;yt++){let St=B[yt],vt=St.object,We=St.geometry,Ct=St.material,dt=St.group;if(Ct.side===Et&&vt.layers.test(Y.layers)){let cn=Ct.side;Ct.side=Zt,Ct.needsUpdate=!0,Nh(vt,q,Y,We,Ct,dt),Ct.side=cn,Ct.needsUpdate=!0,lt=!0}}lt===!0&&(ve.updateMultisampleRenderTarget(me),ve.updateRenderTargetMipmap(me))}y.setRenderTarget(Ue,Pe,qe),y.setClearColor(O,Z),Ge!==void 0&&(Y.viewport=Ge),y.toneMapping=$e}function yo(E,B,q){let Y=B.isScene===!0?B.overrideMaterial:null;for(let z=0,me=E.length;z<me;z++){let Ee=E[z],Ue=Ee.object,Pe=Ee.geometry,qe=Ee.group,$e=Ee.material;$e.allowOverride===!0&&Y!==null&&($e=Y),Ue.layers.test(q.layers)&&Nh(Ue,B,q,Pe,$e,qe)}}function Nh(E,B,q,Y,z,me){E.onBeforeRender(y,B,q,Y,z,me),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,B,q,Y,E,me),z.transparent===!0&&z.side===Et&&z.forceSinglePass===!1?(z.side=Zt,z.needsUpdate=!0,y.renderBufferDirect(q,B,Y,z,E,me),z.side=yn,z.needsUpdate=!0,y.renderBufferDirect(q,B,Y,z,E,me),z.side=Et):y.renderBufferDirect(q,B,Y,z,E,me),E.onAfterRender(y,B,q,Y,z,me)}function vo(E,B,q){B.isScene!==!0&&(B=Ae);let Y=de.get(E),z=p.state.lights,me=p.state.shadowsArray,Ee=z.state.version,Ue=$.getParameters(E,z.state,me,B,q),Pe=$.getProgramCacheKey(Ue),qe=Y.programs;Y.environment=E.isMeshStandardMaterial?B.environment:null,Y.fog=B.fog,Y.envMap=(E.isMeshStandardMaterial?Je:et).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,qe===void 0&&(E.addEventListener("dispose",re),qe=new Map,Y.programs=qe);let $e=qe.get(Pe);if($e!==void 0){if(Y.currentProgram===$e&&Y.lightsStateVersion===Ee)return Bh(E,Ue),$e}else Ue.uniforms=$.getUniforms(E),E.onBeforeCompile(Ue,y),$e=$.acquireProgram(Ue,Pe),qe.set(Pe,$e),Y.uniforms=Ue.uniforms;let Ge=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ge.clippingPlanes=_e.uniform),Bh(E,Ue),Y.needsLights=Ef(E),Y.lightsStateVersion=Ee,Y.needsLights&&(Ge.ambientLightColor.value=z.state.ambient,Ge.lightProbe.value=z.state.probe,Ge.directionalLights.value=z.state.directional,Ge.directionalLightShadows.value=z.state.directionalShadow,Ge.spotLights.value=z.state.spot,Ge.spotLightShadows.value=z.state.spotShadow,Ge.rectAreaLights.value=z.state.rectArea,Ge.ltc_1.value=z.state.rectAreaLTC1,Ge.ltc_2.value=z.state.rectAreaLTC2,Ge.pointLights.value=z.state.point,Ge.pointLightShadows.value=z.state.pointShadow,Ge.hemisphereLights.value=z.state.hemi,Ge.directionalShadowMap.value=z.state.directionalShadowMap,Ge.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ge.spotShadowMap.value=z.state.spotShadowMap,Ge.spotLightMatrix.value=z.state.spotLightMatrix,Ge.spotLightMap.value=z.state.spotLightMap,Ge.pointShadowMap.value=z.state.pointShadowMap,Ge.pointShadowMatrix.value=z.state.pointShadowMatrix),Y.currentProgram=$e,Y.uniformsList=null,$e}function Fh(E){if(E.uniformsList===null){let B=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Bh(E,B){let q=de.get(E);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function Sf(E,B,q,Y,z){B.isScene!==!0&&(B=Ae),ve.resetTextureUnits();let me=B.fog,Ee=Y.isMeshStandardMaterial?B.environment:null,Ue=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ki,Pe=(Y.isMeshStandardMaterial?Je:et).get(Y.envMap||Ee),qe=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$e=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ge=!!q.morphAttributes.position,lt=!!q.morphAttributes.normal,yt=!!q.morphAttributes.color,Ut=oi;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=St!==void 0?St.length:0,We=de.get(Y),Ct=p.state.lights;if(Q===!0&&(N===!0||E!==x)){let jt=E===x&&Y.id===S;_e.setState(Y,E,jt)}let dt=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Ct.state.version||We.outputColorSpace!==Ue||z.isBatchedMesh&&We.batching===!1||!z.isBatchedMesh&&We.batching===!0||z.isBatchedMesh&&We.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&We.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&We.instancing===!1||!z.isInstancedMesh&&We.instancing===!0||z.isSkinnedMesh&&We.skinning===!1||!z.isSkinnedMesh&&We.skinning===!0||z.isInstancedMesh&&We.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&We.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&We.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&We.instancingMorph===!1&&z.morphTexture!==null||We.envMap!==Pe||Y.fog===!0&&We.fog!==me||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==_e.numPlanes||We.numIntersection!==_e.numIntersection)||We.vertexAlphas!==qe||We.vertexTangents!==$e||We.morphTargets!==Ge||We.morphNormals!==lt||We.morphColors!==yt||We.toneMapping!==Ut||We.morphTargetsCount!==vt)&&(dt=!0):(dt=!0,We.__version=Y.version);let cn=We.currentProgram;dt===!0&&(cn=vo(Y,B,z));let hs=!1,hn=!1,cr=!1,It=cn.getUniforms(),mn=We.uniforms;if(ie.useProgram(cn.program)&&(hs=!0,hn=!0,cr=!0),Y.id!==S&&(S=Y.id,hn=!0),hs||x!==E){ie.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),It.setValue(L,"projectionMatrix",E.projectionMatrix),It.setValue(L,"viewMatrix",E.matrixWorldInverse);let on=It.map.cameraPosition;on!==void 0&&on.setValue(L,ce.setFromMatrixPosition(E.matrixWorld)),ee.logarithmicDepthBuffer&&It.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&It.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,hn=!0,cr=!0)}if(z.isSkinnedMesh){It.setOptional(L,z,"bindMatrix"),It.setOptional(L,z,"bindMatrixInverse");let jt=z.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),It.setValue(L,"boneTexture",jt.boneTexture,ve))}z.isBatchedMesh&&(It.setOptional(L,z,"batchingTexture"),It.setValue(L,"batchingTexture",z._matricesTexture,ve),It.setOptional(L,z,"batchingIdTexture"),It.setValue(L,"batchingIdTexture",z._indirectTexture,ve),It.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&It.setValue(L,"batchingColorTexture",z._colorsTexture,ve));let gn=q.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&fe.update(z,q,cn),(hn||We.receiveShadow!==z.receiveShadow)&&(We.receiveShadow=z.receiveShadow,It.setValue(L,"receiveShadow",z.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(mn.envMap.value=Pe,mn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&B.environment!==null&&(mn.envMapIntensity.value=B.environmentIntensity),hn&&(It.setValue(L,"toneMappingExposure",y.toneMappingExposure),We.needsLights&&bf(mn,cr),me&&Y.fog===!0&&le.refreshFogUniforms(mn,me),le.refreshMaterialUniforms(mn,Y,X,ne,p.state.transmissionRenderTarget[E.id]),js.upload(L,Fh(We),mn,ve)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(js.upload(L,Fh(We),mn,ve),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&It.setValue(L,"center",z.center),It.setValue(L,"modelViewMatrix",z.modelViewMatrix),It.setValue(L,"normalMatrix",z.normalMatrix),It.setValue(L,"modelMatrix",z.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let jt=Y.uniformsGroups;for(let on=0,Hl=jt.length;on<Hl;on++){let Li=jt[on];it.update(Li,cn),it.bind(Li,cn)}}return cn}function bf(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Ef(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,B,q){let Y=de.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),de.get(E.texture).__webglTexture=B,de.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,B){let q=de.get(E);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let Tf=L.createFramebuffer();this.setRenderTarget=function(E,B=0,q=0){D=E,T=B,I=q;let Y=!0,z=null,me=!1,Ee=!1;if(E){let Pe=de.get(E);if(Pe.__useDefaultFramebuffer!==void 0)ie.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Pe.__webglFramebuffer===void 0)ve.setupRenderTarget(E);else if(Pe.__hasExternalTextures)ve.rebindTextures(E,de.get(E.texture).__webglTexture,de.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Ge=E.depthTexture;if(Pe.__boundDepthTexture!==Ge){if(Ge!==null&&de.has(Ge)&&(E.width!==Ge.image.width||E.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(E)}}let qe=E.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);let $e=de.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($e[B])?z=$e[B][q]:z=$e[B],me=!0):E.samples>0&&ve.useMultisampledRTT(E)===!1?z=de.get(E).__webglMultisampledFramebuffer:Array.isArray($e)?z=$e[q]:z=$e,P.copy(E.viewport),F.copy(E.scissor),V=E.scissorTest}else P.copy(Re).multiplyScalar(X).floor(),F.copy(k).multiplyScalar(X).floor(),V=j;if(q!==0&&(z=Tf),ie.bindFramebuffer(L.FRAMEBUFFER,z)&&Y&&ie.drawBuffers(E,z),ie.viewport(P),ie.scissor(F),ie.setScissorTest(V),me){let Pe=de.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+B,Pe.__webglTexture,q)}else if(Ee){let Pe=B;for(let qe=0;qe<E.textures.length;qe++){let $e=de.get(E.textures[qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qe,$e.__webglTexture,q,Pe)}}else if(E!==null&&q!==0){let Pe=de.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Pe.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(E,B,q,Y,z,me,Ee,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=de.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe){ie.bindFramebuffer(L.FRAMEBUFFER,Pe);try{let qe=E.textures[Ue],$e=qe.format,Ge=qe.type;if(!ee.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-z&&(E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(B,q,Y,z,ze.convert($e),ze.convert(Ge),me))}finally{let qe=D!==null?de.get(D).__webglFramebuffer:null;ie.bindFramebuffer(L.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(E,B,q,Y,z,me,Ee,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=de.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Pe=Pe[Ee]),Pe)if(B>=0&&B<=E.width-Y&&q>=0&&q<=E.height-z){ie.bindFramebuffer(L.FRAMEBUFFER,Pe);let qe=E.textures[Ue],$e=qe.format,Ge=qe.type;if(!ee.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.bufferData(L.PIXEL_PACK_BUFFER,me.byteLength,L.STREAM_READ),E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ue),L.readPixels(B,q,Y,z,ze.convert($e),ze.convert(Ge),0);let yt=D!==null?de.get(D).__webglFramebuffer:null;ie.bindFramebuffer(L.FRAMEBUFFER,yt);let Ut=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await id(L,Ut,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,lt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,me),L.deleteBuffer(lt),L.deleteSync(Ut),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,B=null,q=0){let Y=Math.pow(2,-q),z=Math.floor(E.image.width*Y),me=Math.floor(E.image.height*Y),Ee=B!==null?B.x:0,Ue=B!==null?B.y:0;ve.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ee,Ue,z,me),ie.unbindTexture()};let wf=L.createFramebuffer(),Af=L.createFramebuffer();this.copyTextureToTexture=function(E,B,q=null,Y=null,z=0,me=null){me===null&&(z!==0?(Ls("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),me=z,z=0):me=0);let Ee,Ue,Pe,qe,$e,Ge,lt,yt,Ut,St=E.isCompressedTexture?E.mipmaps[me]:E.image;if(q!==null)Ee=q.max.x-q.min.x,Ue=q.max.y-q.min.y,Pe=q.isBox3?q.max.z-q.min.z:1,qe=q.min.x,$e=q.min.y,Ge=q.isBox3?q.min.z:0;else{let gn=Math.pow(2,-z);Ee=Math.floor(St.width*gn),Ue=Math.floor(St.height*gn),E.isDataArrayTexture?Pe=St.depth:E.isData3DTexture?Pe=Math.floor(St.depth*gn):Pe=1,qe=0,$e=0,Ge=0}Y!==null?(lt=Y.x,yt=Y.y,Ut=Y.z):(lt=0,yt=0,Ut=0);let vt=ze.convert(B.format),We=ze.convert(B.type),Ct;B.isData3DTexture?(ve.setTexture3D(B,0),Ct=L.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(ve.setTexture2DArray(B,0),Ct=L.TEXTURE_2D_ARRAY):(ve.setTexture2D(B,0),Ct=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,B.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,B.unpackAlignment);let dt=L.getParameter(L.UNPACK_ROW_LENGTH),cn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),hs=L.getParameter(L.UNPACK_SKIP_PIXELS),hn=L.getParameter(L.UNPACK_SKIP_ROWS),cr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,St.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,St.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ge);let It=E.isDataArrayTexture||E.isData3DTexture,mn=B.isDataArrayTexture||B.isData3DTexture;if(E.isDepthTexture){let gn=de.get(E),jt=de.get(B),on=de.get(gn.__renderTarget),Hl=de.get(jt.__renderTarget);ie.bindFramebuffer(L.READ_FRAMEBUFFER,on.__webglFramebuffer),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,Hl.__webglFramebuffer);for(let Li=0;Li<Pe;Li++)It&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.get(E).__webglTexture,z,Ge+Li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,de.get(B).__webglTexture,me,Ut+Li)),L.blitFramebuffer(qe,$e,Ee,Ue,lt,yt,Ee,Ue,L.DEPTH_BUFFER_BIT,L.NEAREST);ie.bindFramebuffer(L.READ_FRAMEBUFFER,null),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||E.isRenderTargetTexture||de.has(E)){let gn=de.get(E),jt=de.get(B);ie.bindFramebuffer(L.READ_FRAMEBUFFER,wf),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,Af);for(let on=0;on<Pe;on++)It?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,gn.__webglTexture,z,Ge+on):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,gn.__webglTexture,z),mn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,jt.__webglTexture,me,Ut+on):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,jt.__webglTexture,me),z!==0?L.blitFramebuffer(qe,$e,Ee,Ue,lt,yt,Ee,Ue,L.COLOR_BUFFER_BIT,L.NEAREST):mn?L.copyTexSubImage3D(Ct,me,lt,yt,Ut+on,qe,$e,Ee,Ue):L.copyTexSubImage2D(Ct,me,lt,yt,qe,$e,Ee,Ue);ie.bindFramebuffer(L.READ_FRAMEBUFFER,null),ie.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else mn?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Ct,me,lt,yt,Ut,Ee,Ue,Pe,vt,We,St.data):B.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,me,lt,yt,Ut,Ee,Ue,Pe,vt,St.data):L.texSubImage3D(Ct,me,lt,yt,Ut,Ee,Ue,Pe,vt,We,St):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,me,lt,yt,Ee,Ue,vt,We,St.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,me,lt,yt,St.width,St.height,vt,St.data):L.texSubImage2D(L.TEXTURE_2D,me,lt,yt,Ee,Ue,vt,We,St);L.pixelStorei(L.UNPACK_ROW_LENGTH,dt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,cn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,hs),L.pixelStorei(L.UNPACK_SKIP_ROWS,hn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,cr),me===0&&B.generateMipmaps&&L.generateMipmap(Ct),ie.unbindTexture()},this.initRenderTarget=function(E){de.get(E).__webglFramebuffer===void 0&&ve.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ve.setTextureCube(E,0):E.isData3DTexture?ve.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ve.setTexture2DArray(E,0):ve.setTexture2D(E,0),ie.unbindTexture()},this.resetState=function(){T=0,I=0,D=null,ie.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};function Vd(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,l=new ct,c=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(e){let d;if(t)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(t){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Hd(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let _=0;_<o[h].length;++_)d.push(o[h][_][f]);let g=Hd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Hd(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new Nt(o,t,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let u=l/t;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<t;g++){let _=h.getComponent(f,g);a.setComponent(f+u,g,_)}}else o.set(h.array,l);l+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var je=Math.PI*2,J=(i=0,e=0,t=0)=>new R(i,e,t),Al=ai.clamp,Tt=ai.lerp,wt={navy:1326933,navyDeep:797757,teal:1794408,tealDeep:801603,tealLight:4164489,red:10893869,redDeep:7415071,orange:13269314,gold:13475922,goldLight:15717786,brass:10251058,wood:8214072,woodDark:4139808,woodLight:11633751,cream:15588279,bone:15127726,black:1382170,rope:7296566,stone:8617069,stoneDark:6117969,sand:14138769,leaf:4154689,leafLight:7901275,leafDark:2574650,velvet:9317672},Wd=4;function Mn(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let o=new kr(s);return o.colorSpace=n.linear?Un:qt,o.anisotropy=Wd,n.repeat&&(o.wrapS=o.wrapT=Cs,o.repeat.set(n.repeat[0],n.repeat[1])),o}function ke(i,e={}){return new vn({color:i,roughness:e.roughness??.72,metalness:e.metalness??.08,flatShading:e.flat??!1,side:e.side??yn,transparent:e.transparent??!1,opacity:e.opacity??1,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??0,map:e.map??null,alphaTest:e.alphaTest??0,depthWrite:e.depthWrite??!0,envMapIntensity:e.envMapIntensity??.65})}function dh(i,e={}){return new Mi({color:i,transparent:e.transparent??!1,opacity:e.opacity??1,side:e.side??yn,blending:e.blending??ti,depthWrite:e.depthWrite??!0,toneMapped:e.toneMapped??!0})}function sn(i,e,t,n=[0,0,0],s=[0,0,0],r=[1,1,1]){let o=new He(e,t);return o.position.set(n[0],n[1],n[2]),o.rotation.set(s[0],s[1],s[2]),o.scale.set(r[0],r[1],r[2]),i.add(o),o}var Rl=new Si(1,1,1),Xd=new Zi(1,12,8),wy=new Zi(1,8,6),iS=new Yt(1,1,1,12),sS=new Yt(1,1,1,6),Ay=new Vn(1,1,10);function Ve(i,e,t,n,s,r=0,o=0,a=0,l=0){return sn(i,Rl,s,[r,o,a],[0,l,0],[e,t,n])}function Dt(i,e,t,n,s,r,o=1,a=1,l=1){return sn(i,Xd,t,[n,s,r],[0,0,0],[e*o,e*a,e*l])}function Ry(i,e,t,n,s,r,o=1,a=1,l=1){return sn(i,wy,t,[n,s,r],[0,0,0],[e*o,e*a,e*l])}function at(i,e,t,n,s,r,o,a,l=12){let c=new Yt(e,t,n,l);return sn(i,c,s,[r,o,a])}function wl(i,e,t,n,s,r,o,a=10){return sn(i,new Vn(e,t,a),n,[s,r,o])}function Ft(i,e,t,n,s,r,o,a=Math.PI/2,l=0,c=0,h=24){return sn(i,new si(e,t,8,h),n,[s,r,o],[a,l,c])}function Nn(i,e,t,n,s,r,o=null){let a=new R().subVectors(t,e),l=a.length(),c=new He(Rl,r);return c.position.copy(e).addScaledVector(a,.5),c.quaternion.setFromUnitVectors(J(0,1,0),a.normalize()),c.scale.set(n,l,s),i.add(c),o&&(Dt(i,n*.55,o,e.x,e.y,e.z),Dt(i,n*.55,o,t.x,t.y,t.z)),c}function Qt(i,e,t,n,s=40,r=6,o=!1){let a=e instanceof nn?e:new ii(e,o,"catmullrom",.35),l=new $i(a,s,t,r,o);return sn(i,l,n,[0,0,0])}function ir(i,e,t,n=2826521,s=.8){let r=new ct().setFromPoints([e,t]),o=new bi({color:n,transparent:!0,opacity:s,depthWrite:!1}),a=new Vi(r,o);return i.add(a),a}function Ce(i){let e=Math.sin(i*127.1+311.7)*43758.5453;return e-Math.floor(e)}function li(i){if(!i)return 0;i.updateWorldMatrix(!0,!0);let e=new ft().copy(i.matrixWorld).invert(),t=new Map,n=[],s=0;function r(o){if(!(o!==i&&o.userData?.dynamic)&&!(o.isInstancedMesh||o.isSprite||o.isLine||o.isPoints)){if(o.isMesh){if(o.children.length>0)return;let a=o.geometry;if(!a?.attributes?.position||!a?.attributes?.normal||!a?.attributes?.uv||o.material&&Array.isArray(o.material))return;let l;try{l=a.index?a.toNonIndexed():a.clone()}catch{return}let c=Object.keys(l.attributes).sort().join(","),h=o.material,u=`${h.uuid}|${o.castShadow?1:0}|${o.receiveShadow?1:0}|${c}`;t.has(u)||t.set(u,{material:h,cast:o.castShadow,receive:o.receiveShadow,items:[]});let f=new ft().multiplyMatrices(e,o.matrixWorld);l.applyMatrix4(f),t.get(u).items.push({obj:o,geo:l});return}for(let a of[...o.children])r(a)}}r(i);for(let o of t.values()){if(o.items.length<2){o.items.forEach(({geo:c})=>c.dispose());continue}let a=Vd(o.items.map(c=>c.geo),!1);if(!a){o.items.forEach(({geo:c})=>c.dispose());continue}a.computeBoundingSphere();let l=new He(a,o.material);l.castShadow=o.cast,l.receiveShadow=o.receive,i.add(l),o.items.forEach(({obj:c,geo:h})=>{n.push(c),h.dispose()}),s+=o.items.length}for(let o of n)o.parent&&o.parent.remove(o);return s}function Cy(){return Mn(1024,512,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#2f6f80"),n.addColorStop(.2,"#225a6c"),n.addColorStop(.68,"#184358"),n.addColorStop(1,"#0c3044"),i.fillStyle=n,i.fillRect(0,0,e,t);for(let a=0;a<900;a++){let l=Ce(a*3.1)*e,c=Ce(a*8.7)*t,h=12+Ce(a*2.3)*100;i.strokeStyle=Ce(a)>.45?"rgba(78,135,145,.09)":"rgba(2,18,28,.12)",i.lineWidth=1+Ce(a*4.2)*1.3,i.beginPath(),i.moveTo(l,c),i.lineTo(l+h,c+(Ce(a*1.7)-.5)*5),i.stroke()}for(let a=80;a<t;a+=37)i.strokeStyle="rgba(4,19,28,.33)",i.lineWidth=2,i.beginPath(),i.moveTo(0,a),i.lineTo(e,a+Math.sin(a)*2),i.stroke(),i.strokeStyle="rgba(120,170,167,.08)",i.lineWidth=1,i.beginPath(),i.moveTo(0,a+3),i.lineTo(e,a+3),i.stroke();let s=i.createLinearGradient(0,25,0,84);s.addColorStop(0,"#8f342b"),s.addColorStop(.55,"#a94433"),s.addColorStop(1,"#68251f"),i.fillStyle=s,i.fillRect(0,30,e,45),i.strokeStyle="rgba(234,196,122,.85)",i.lineWidth=3,i.beginPath(),i.moveTo(0,31),i.lineTo(e,31),i.moveTo(0,74),i.lineTo(e,74),i.stroke(),i.strokeStyle="rgba(214,169,89,.5)",i.lineWidth=2;for(let a of[106,111])i.beginPath(),i.moveTo(0,a),i.lineTo(e,a),i.stroke();function r(a,l,c){i.save(),i.translate(a,l),i.scale(c,1),i.strokeStyle="rgba(233,193,113,.66)",i.lineWidth=3.5,i.beginPath(),i.moveTo(0,0),i.bezierCurveTo(55,-38,137,28,92,76),i.bezierCurveTo(62,108,8,60,38,30),i.bezierCurveTo(52,15,78,30,66,44),i.stroke(),i.beginPath(),i.moveTo(98,78),i.bezierCurveTo(144,104,170,48,130,19),i.stroke(),i.lineWidth=1.5,i.strokeStyle="rgba(255,226,163,.35)";for(let h=0;h<3;h++)i.beginPath(),i.arc(24+h*14,48+h*6,2.2,0,je),i.stroke();i.restore()}r(46,194,1),r(978,194,-1),r(66,343,1),r(958,343,-1),i.save(),i.globalAlpha=.09,i.fillStyle="#e9d6ad",i.beginPath(),i.arc(870,150,39,0,je),i.fill(),i.fillRect(845,170,50,32),i.fillStyle="#12384e",i.beginPath(),i.arc(857,146,10,0,je),i.arc(886,146,10,0,je),i.fill(),i.restore();let o=i.createLinearGradient(0,t-76,0,t);o.addColorStop(0,"rgba(4,22,29,0)"),o.addColorStop(1,"rgba(3,18,24,.9)"),i.fillStyle=o,i.fillRect(0,t-80,e,80)})}function Iy(){return Mn(512,512,(i,e,t)=>{i.fillStyle="#a1744a",i.fillRect(0,0,e,t);let n=54;for(let s=0;s<e;s+=n){let r=(Ce(s)-.5)*24;i.fillStyle=`rgb(${154+r},${110+r},${68+r})`,i.fillRect(s+2,0,n-3,t),i.strokeStyle="rgba(47,30,18,.38)",i.lineWidth=2,i.beginPath(),i.moveTo(s,0),i.lineTo(s,t),i.stroke();for(let o=0;o<22;o++){let a=Ce(s*3+o)*t;i.strokeStyle="rgba(67,43,24,.12)",i.lineWidth=1,i.beginPath(),i.moveTo(s+5,a),i.lineTo(s+n-8,a+(Ce(o)-.5)*4),i.stroke()}}for(let s=0;s<160;s++)i.fillStyle="rgba(57,36,20,.16)",i.fillRect(Ce(s*2)*e,Ce(s*5)*t,2,1.5)},{repeat:[1,1]})}function Ci(i="#6b4a31"){return Mn(512,512,(e,t,n)=>{e.fillStyle=i,e.fillRect(0,0,t,n);for(let s=0;s<85;s++){let r=s/85*n+(Ce(s)-.5)*7;e.strokeStyle=Ce(s*2)>.5?"rgba(30,17,9,.2)":"rgba(190,146,94,.12)",e.lineWidth=.7+Ce(s*7)*2,e.beginPath(),e.moveTo(0,r),e.bezierCurveTo(t*.28,r-3,t*.64,r+4,t,r-1),e.stroke()}for(let s=0;s<10;s++){let r=Ce(s*4)*t,o=Ce(s*8)*n;e.strokeStyle="rgba(40,24,12,.3)",e.lineWidth=1.2,e.beginPath(),e.ellipse(r,o,12+Ce(s)*16,4,Ce(s*9)*3,0,je),e.stroke()}},{repeat:[1.5,2]})}function Py(){return Mn(1024,1024,(i,e,t)=>{let n=e/2,s=t/2;i.fillStyle="#b7ae98",i.fillRect(0,0,e,t);let r=i.createRadialGradient(n,s,20,n,s,e*.55);r.addColorStop(0,"#cfc1a5"),r.addColorStop(.7,"#b7ac94"),r.addColorStop(1,"#9b9b87"),i.fillStyle=r,i.fillRect(0,0,e,t);let o=[106,168,238,318,402,478],a=["#9c9583","#b6aa91","#a29b87","#b0a28a","#999580","#b2a58c"];o.forEach((f,d)=>{let g=16+d*5;for(let _=0;_<g;_++){let m=_/g*je+d%2*.03,p=(_+1)/g*je,b=f;i.beginPath(),i.arc(n,s,b,m+.004,p-.004),i.arc(n,s,b-55,p-.004,m+.004,!0),i.closePath(),i.fillStyle=_%5===0?"#8a8675":a[d],i.fill(),i.strokeStyle="rgba(84,77,62,.3)",i.lineWidth=1.2,i.stroke()}}),i.save(),i.translate(n,s),i.strokeStyle="rgba(191,147,75,.92)",i.fillStyle="rgba(17,52,59,.88)",i.lineWidth=3,i.beginPath(),i.arc(0,0,126,0,je),i.fill(),i.stroke(),i.lineWidth=1,i.beginPath(),i.arc(0,0,114,0,je),i.stroke(),i.fillStyle="rgba(211,167,88,.95)";for(let f=0;f<8;f++)i.rotate(je/8),i.beginPath(),i.moveTo(0,-16),i.lineTo(20,0),i.lineTo(0,-100),i.lineTo(-20,0),i.closePath(),i.fill();i.fillStyle="#ead8b2",i.beginPath(),i.arc(0,0,21,0,je),i.fill(),i.fillStyle="#8d5f28",i.beginPath(),i.arc(0,0,9,0,je),i.fill(),i.restore(),i.save(),i.translate(n,s),i.fillStyle="rgba(67,68,58,.55)",i.font='600 17px "Palatino Linotype", serif',i.textAlign="center";let c="B L A C K S A I L   B A Y   \xB7   R I D E   N O . 0 0 4   \xB7   ".split(""),h=452;c.forEach((f,d)=>{let g=d/c.length*je-Math.PI/2;i.save(),i.rotate(g),i.translate(0,-h),i.fillText(f,0,0),i.restore()}),i.restore();for(let f=0;f<420;f++){let d=Ce(f*4.3)*e,g=Ce(f*7.8)*t,_=.02+Ce(f*2.2)*.07;i.fillStyle=f%3===0?`rgba(81,96,63,${_})`:`rgba(48,40,29,${_})`,i.beginPath(),i.arc(d,g,.5+Ce(f)*2.5,0,je),i.fill()}let u=i.createRadialGradient(n,s,380,n,s,520);u.addColorStop(0,"rgba(57,47,30,0)"),u.addColorStop(1,"rgba(42,35,24,.26)"),i.fillStyle=u,i.fillRect(0,0,e,t)})}function Ly(){return Mn(1024,512,(i,e,t)=>{i.clearRect(0,0,e,t);let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#164b57"),n.addColorStop(.55,"#0c333e"),n.addColorStop(1,"#092932"),i.fillStyle=n,i.fillRect(14,14,e-28,t-28),i.strokeStyle="#b98b48",i.lineWidth=7,i.strokeRect(26,26,e-52,t-52),i.strokeStyle="rgba(236,204,141,.55)",i.lineWidth=1.5,i.strokeRect(39,39,e-78,t-78),i.strokeStyle="rgba(232,193,113,.7)",i.lineWidth=4;let s=(u,f,d,g)=>{i.save(),i.translate(u,f),i.scale(d,g),i.beginPath(),i.moveTo(0,68),i.bezierCurveTo(0,24,24,0,70,0),i.stroke(),i.beginPath(),i.moveTo(16,54),i.bezierCurveTo(16,31,32,16,58,16),i.stroke(),i.fillStyle="rgba(232,193,113,.7)",i.beginPath(),i.arc(37,37,4,0,je),i.fill(),i.restore()};s(56,56,1,1),s(e-56,56,-1,1),s(56,t-56,1,-1),s(e-56,t-56,-1,-1),i.textAlign="center",i.fillStyle="rgba(232,200,136,.72)",i.font='500 25px "Palatino Linotype", "Times New Roman", serif',i.fillText("R I D E   N O .   0 0 4",e/2,116);let r=i.createLinearGradient(0,150,0,340);r.addColorStop(0,"#fff1cf"),r.addColorStop(.46,"#eacb8b"),r.addColorStop(1,"#bc8741"),i.font='600 176px "Songti SC", "STSong", "SimSun", serif',i.fillStyle=r;let o=["\u6D77","\u76D7","\u8239"],a=o.map(u=>i.measureText(u).width),l=38,c=a.reduce((u,f)=>u+f,0)+l*(o.length-1),h=(e-c)/2;o.forEach((u,f)=>{i.fillText(u,h+a[f]/2,320),h+=a[f]+l}),i.fillStyle="rgba(231,201,141,.78)",i.font='500 26px "Palatino Linotype", "Times New Roman", serif',i.fillText("T H E   B L A C K   S A I L",e/2,387),i.fillStyle="rgba(227,196,132,.35)",i.font='400 19px "Songti SC", "STSong", serif',i.fillText("\u9ED1 \u5E06 \u6E7E  \xB7  \u590D \u53E4 \u7EB8 \u827A \u673A \u52A8 \u6E38 \u620F",e/2,429),i.fillStyle="rgba(236,202,132,.85)";for(let u of[111,e-111]){i.save(),i.translate(u,293),i.beginPath();for(let f=0;f<10;f++){let d=f/10*je-Math.PI/2,g=f%2?5:13;i.lineTo(Math.cos(d)*g,Math.sin(d)*g)}i.closePath(),i.fill(),i.restore()}})}function qd(i="\u9ED1\u5E06\u53F7",e="BLACK SAIL"){return Mn(640,220,(t,n,s)=>{t.clearRect(0,0,n,s),t.fillStyle="rgba(10,40,48,.95)",t.fillRect(10,10,n-20,s-20),t.strokeStyle="#d3a75c",t.lineWidth=4,t.strokeRect(19,19,n-38,s-38),t.strokeStyle="rgba(239,210,154,.35)",t.lineWidth=1,t.strokeRect(28,28,n-56,s-56),t.textAlign="center";let r=t.createLinearGradient(0,50,0,130);r.addColorStop(0,"#fff3d4"),r.addColorStop(1,"#c6934b"),t.fillStyle=r,t.font='600 74px "Songti SC", "STSong", "SimSun", serif',t.fillText(i,n/2,112),t.fillStyle="rgba(231,200,140,.72)",t.font='500 24px "Palatino Linotype", serif',t.fillText(e,n/2,158),t.fillStyle="rgba(232,199,133,.8)";for(let o of[80,n-80])t.beginPath(),t.moveTo(o,80),t.lineTo(o+12,90),t.lineTo(o,100),t.lineTo(o-12,90),t.closePath(),t.fill()})}function Gd(i="#8f2f27"){return Mn(512,1024,(e,t,n)=>{e.clearRect(0,0,t,n),e.beginPath(),e.moveTo(26,12),e.lineTo(t-26,12),e.lineTo(t-32,78),e.lineTo(t-20,160),e.lineTo(t-38,260),e.lineTo(t-20,390),e.lineTo(t-35,530),e.lineTo(t-14,670),e.lineTo(t-32,810),e.lineTo(t-48,902),e.lineTo(t-130,944),e.lineTo(t-198,916),e.lineTo(t-272,970),e.lineTo(t-338,922),e.lineTo(t-424,954),e.lineTo(t-470,890),e.lineTo(t-486,742),e.lineTo(t-458,612),e.lineTo(t-484,486),e.lineTo(t-454,372),e.lineTo(t-480,246),e.lineTo(t-458,140),e.lineTo(t-484,68),e.closePath();let s=e.createLinearGradient(0,0,t,n);s.addColorStop(0,i),s.addColorStop(.52,i),s.addColorStop(1,"#5f211d"),e.fillStyle=s,e.fill(),e.strokeStyle="rgba(224, 178, 91, .65)",e.lineWidth=6,e.stroke(),e.strokeStyle="rgba(232, 192, 110, .48)",e.lineWidth=2,e.beginPath(),e.moveTo(76,88),e.lineTo(t-76,88),e.stroke();let r=e.createLinearGradient(0,200,0,560);r.addColorStop(0,"#ffe9b3"),r.addColorStop(.6,"#dca958"),r.addColorStop(1,"#a8752f"),e.strokeStyle=r,e.fillStyle=r,e.lineWidth=5,e.beginPath(),e.arc(t/2,392,112,0,je),e.stroke(),e.beginPath();for(let o=0;o<16;o++){let a=o/16*je-Math.PI/2,l=o%2===0?83:29,c=t/2+Math.cos(a)*l,h=392+Math.sin(a)*l;o===0?e.moveTo(c,h):e.lineTo(c,h)}e.closePath(),e.fill(),e.save(),e.translate(t/2,218),e.fillStyle="#e8d5af",e.beginPath(),e.ellipse(0,-4,39,44,0,0,je),e.fill(),e.beginPath(),e.roundRect(-25,28,50,30,9),e.fill(),e.fillStyle="#4c221d",e.beginPath(),e.ellipse(-15,-7,10,13,-.1,0,je),e.ellipse(15,-7,10,13,.1,0,je),e.fill(),e.beginPath(),e.moveTo(0,10),e.lineTo(-6,22),e.lineTo(6,22),e.closePath(),e.fill(),e.restore(),e.textAlign="center",e.fillStyle="rgba(247, 224, 180, .86)",e.font='500 30px "Palatino Linotype", "Times New Roman", serif',e.fillText("B L A C K   S A I L",t/2,590),e.fillStyle="rgba(236, 202, 139, .55)",e.font='400 18px "Songti SC", "SimSun", serif',e.fillText("\u9ED1 \u5E06 \u53F7 \xB7 1 9 0 8",t/2,640);for(let o of[712,764])e.strokeStyle="rgba(229, 190, 117, .24)",e.lineWidth=2,e.beginPath(),e.moveTo(104,o),e.lineTo(t-104,o),e.stroke()})}function Dy(){return Mn(512,512,(i,e,t)=>{i.clearRect(0,0,e,t),i.beginPath(),i.moveTo(16,20),i.lineTo(474,20),i.lineTo(492,72),i.lineTo(467,104),i.lineTo(488,158),i.lineTo(455,190),i.lineTo(477,255),i.lineTo(438,277),i.lineTo(458,343),i.lineTo(424,356),i.lineTo(443,427),i.lineTo(394,434),i.lineTo(409,478),i.lineTo(332,468),i.lineTo(297,491),i.lineTo(253,463),i.lineTo(212,492),i.lineTo(169,466),i.lineTo(118,485),i.lineTo(95,448),i.lineTo(41,455),i.lineTo(29,397),i.lineTo(44,351),i.lineTo(19,313),i.lineTo(49,256),i.lineTo(21,218),i.lineTo(44,168),i.lineTo(18,126),i.lineTo(42,82),i.closePath();let n=i.createLinearGradient(0,0,e,t);n.addColorStop(0,"#11191c"),n.addColorStop(.55,"#0b1114"),n.addColorStop(1,"#172125"),i.fillStyle=n,i.fill(),i.strokeStyle="rgba(191,155,92,.28)",i.lineWidth=3,i.stroke(),i.save(),i.translate(256,300),i.rotate(.66),i.fillStyle="#e8d9bb",i.beginPath(),i.roundRect(-116,-17,232,34,17),i.fill();for(let s of[-118,118])for(let r of[-20,20])i.beginPath(),i.arc(s,r,22,0,je),i.fill();i.restore(),i.save(),i.translate(256,300),i.rotate(-.66),i.fillStyle="#dccaa9",i.beginPath(),i.roundRect(-112,-15,224,30,15),i.fill();for(let s of[-114,114])for(let r of[-18,18])i.beginPath(),i.arc(s,r,20,0,je),i.fill();i.restore(),i.save(),i.translate(256,232),i.fillStyle="#f0e3c5",i.beginPath(),i.ellipse(0,-8,102,112,0,0,je),i.fill(),i.beginPath(),i.roundRect(-64,70,128,74,26),i.fill(),i.fillStyle="#0e1517",i.beginPath(),i.ellipse(-40,-14,28,34,-.12,0,je),i.ellipse(40,-14,28,34,.12,0,je),i.fill(),i.beginPath(),i.moveTo(0,26),i.lineTo(-14,48),i.lineTo(12,48),i.closePath(),i.fill(),i.strokeStyle="#8d8069",i.lineWidth=4;for(let s=-2;s<=2;s++)i.beginPath(),i.moveTo(s*22-28,76),i.lineTo(s*22-28,136),i.stroke();i.beginPath(),i.moveTo(-30,110),i.lineTo(30,110),i.stroke(),i.restore(),i.strokeStyle="rgba(201,165,99,.3)",i.lineWidth=1.5,i.beginPath(),i.arc(256,260,152,.3,Math.PI-.3),i.stroke()})}function Uy(){return Mn(1024,512,(i,e,t)=>{let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"#4b8fa4"),n.addColorStop(.34,"#8abcc3"),n.addColorStop(.5,"#f0d6aa"),n.addColorStop(.56,"#bd9065"),n.addColorStop(.76,"#5d5445"),n.addColorStop(1,"#23352f"),i.fillStyle=n,i.fillRect(0,0,e,t);let s=i.createRadialGradient(e*.76,t*.31,1,e*.76,t*.31,150);s.addColorStop(0,"rgba(255,250,226,1)"),s.addColorStop(.08,"rgba(255,229,176,.95)"),s.addColorStop(.3,"rgba(244,188,112,.34)"),s.addColorStop(1,"rgba(244,188,112,0)"),i.fillStyle=s,i.fillRect(0,0,e,t*.55)})}function _h(i="rgba(255,244,214,1)",e="rgba(255,189,93,0)"){return Mn(128,128,(t,n,s)=>{let r=t.createRadialGradient(n/2,s/2,0,n/2,s/2,n/2);r.addColorStop(0,i),r.addColorStop(.18,"rgba(255,226,167,.75)"),r.addColorStop(.5,"rgba(255,178,84,.22)"),r.addColorStop(1,e),t.fillStyle=r,t.fillRect(0,0,n,s)})}function Ny(){return Mn(512,512,(i,e,t)=>{i.clearRect(0,0,e,t);for(let n=0;n<140;n++){let s=Ce(n)*je,r=165+Ce(n*2.4)*72,o=e/2+Math.cos(s)*r,a=t/2+Math.sin(s)*r;i.strokeStyle=`rgba(235,247,235,${.035+Ce(n*8)*.16})`,i.lineWidth=1+Ce(n*3)*3,i.beginPath(),i.arc(o,a,3+Ce(n*9)*18,s,s+.5+Ce(n)*1.2),i.stroke()}})}function Fy(){return Mn(256,256,(i,e,t)=>{let n=i.createImageData(e,t);for(let s=0;s<t;s++)for(let r=0;r<e;r++){let o=Math.sin(r*.18+Math.sin(s*.09)*2.2)*.55+Math.sin(r*.41-s*.22)*.22,a=Math.cos(s*.16+Math.sin(r*.07)*1.8)*.5+Math.cos(s*.33+r*.12)*.24,l=(s*e+r)*4;n.data[l]=128+o*60,n.data[l+1]=128+a*60,n.data[l+2]=255,n.data[l+3]=255}i.putImageData(n,0,0)},{linear:!0,repeat:[15,15]})}function gh(i={}){let e=new Ke,t=i.material??C.bone,n=i.eye??C.black,s=i.scale??1,r=Dt(e,.5,t,0,.18,0,1,1.04,.9);r.scale.multiplyScalar(s),r.position.multiplyScalar(s);let o=Ve(e,.78,.16,.3,t,0,.22,.38);o.scale.multiplyScalar(s),o.position.multiplyScalar(s);for(let a of[-1,1]){let l=sn(e,Xd,n,[a*.2*s,.15*s,.38*s],[0,0,0],[.16*s,.19*s,.1*s]);l.renderOrder=1}sn(e,Ay,n,[0,-.04*s,.44*s],[Math.PI/2,0,0],[.09*s,.18*s,.08*s]),Dt(e,.21*s,t,-.3*s,-.05*s,.28*s,1,.72,.76),Dt(e,.21*s,t,.3*s,-.05*s,.28*s,1,.72,.76),Ve(e,.5*s,.3*s,.38*s,t,0,-.3*s,.14*s),Ve(e,.62*s,.12*s,.3*s,t,0,-.45*s,.16*s);for(let a=-2;a<=2;a++)Ve(e,.075*s,.13*s,.07*s,C.cream,a*.09*s,-.3*s,.356*s);if(i.crossbones)for(let a of[-1,1]){let l=new Ke,c=at(l,.045*s,.045*s,1.42*s,C.bone,0,0,0,8);c.rotation.z=Math.PI/2,l.rotation.z=a*.65,l.position.set(0,-.18*s,-.25*s),e.add(l);for(let h of[-.7,.7])Dt(l,.095*s,C.bone,h*s,0,.02,1,.9,.9)}if(i.wings)for(let a of[-1,1]){let l=[];for(let c=0;c<6;c++)l.push(J(a*(.5+c*.18)*s,(.32-c*.02)*s,(.1-c*.02)*s));Qt(e,l,.035*s,C.gold,18,5);for(let c=0;c<4;c++){let h=.22+c*.2;Qt(e,[J(a*.58*s,.28*s,.08*s),J(a*(.7+c*.17)*s,(.25+Math.sin(h)*.22)*s,.03),J(a*(.86+c*.18)*s,(.12+Math.sin(h)*.3)*s,-.01)],.022*s,C.gold,10,4)}}return e.scale.setScalar(1),e}function Tl(i=1,e=.12){let t=new qi,n=16;for(let o=0;o<n;o++){let a=o/n*je-Math.PI/2,l=o%2===0?i:i*.34,c=Math.cos(a)*l,h=Math.sin(a)*l;o===0?t.moveTo(c,h):t.lineTo(c,h)}t.closePath();let s=new Ws(t,{depth:e,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:i*.025,bevelThickness:i*.02});s.center();let r=new Ke;return sn(r,s,C.gold),Ft(r,i*.82,i*.025,C.brass,0,0,e*.8,0,0,0,36),Dt(r,i*.09,C.goldLight,0,0,e*.62),r}function By(i=.8){let e=new Ke;Ft(e,i,i*.07,C.gold,0,0,0,0,0,0,32),Ft(e,i*.88,i*.018,C.brass,0,0,.03,0,0,0,32);for(let n=0;n<8;n++){let s=n/8*je,r=Math.cos(s),o=Math.sin(s),a=i*1.2,l=new He(Rl,C.gold);l.position.set(r*a*.38,o*a*.38,0),l.rotation.z=s,l.scale.set(i*.05,a,i*.05),e.add(l);let c=at(e,i*.045,i*.05,i*.33,C.wood,0,0,0,8);c.position.set(r*(i+i*.13),o*(i+i*.13),0),c.rotation.z=s-Math.PI/2,Dt(e,i*.06,C.brass,r*(i+i*.3),o*(i+i*.3),0)}let t=at(e,i*.15,i*.15,i*.19,C.brass,0,0,0,10);return t.rotation.x=Math.PI/2,Dt(e,i*.075,C.goldLight,0,0,i*.13),e}function sr(i=1,e=null){let t=new Ke,n=.7*i;at(t,.08*i,.12*i,.08*i,C.brass,0,n*.56,0,8),sn(t,new Yt(.16*i,.2*i,n*.62,6,1,!0),C.brass,[0,0,0]);let s=new He(new Yt(.12*i,.15*i,n*.58,6),e??C.lanternGlass);s.position.y=0,t.add(s),wl(t,.23*i,.18*i,C.brass,0,n*.45,0,6),Ft(t,.1*i,.02*i,C.brass,0,n*.57,0,Math.PI/2,0,0,10),Dt(t,.035*i,C.goldLight,0,n*.62,0);let r=new Bs(new Hi({map:Yd,color:16762226,transparent:!0,opacity:.8,depthWrite:!1,blending:Wn}));return r.scale.setScalar(1.1*i),t.add(r),t.userData.glow=r,t.userData.glass=s,t}function Oy(i=8,e=.8,t=0,n=1){let s=new Ke,r=8,o=J(0,0,0),a=J(e,i,Math.sin(t)*e*.7),l=J(e*.27,i*.48,Math.sin(t+.6)*e*.3),c=new ii([o,l,J(e*.9,i*.92,Math.sin(t+.2)*e*.8),a]),h=Qt(s,c,.23,C.palmWood,30,7);h.scale.x=1.05;for(let m=1;m<r;m++){let p=c.getPoint(m/r),b=Ft(s,.235-m*.008,.028,C.palmRing,p.x,p.y,p.z,Math.PI/2,0,0,10);b.rotation.z=Math.sin(t+m)*.1}let u=new Ke;u.position.copy(a),u.userData.dynamic=!0,s.add(u);let f=C.palmLeaf,d=C.palmLeafLight,g=[];for(let m=0;m<12;m++){let p=m/12*je+t*.7,b=2.35+Ce(m+n)*1.55,M=1.1+Ce(m*3+n)*.95,y=.57,A=8,T=[],I=[],D=[];for(let V=0;V<=A;V++){let O=V/A,Z=Math.cos(p)*b*O,W=Math.sin(p)*b*O,ne=Math.sin(O*Math.PI*.55)*.5-Math.pow(O,1.7)*M,X=Math.sin(O*Math.PI)*y*(1-O*.28);if(T.push(Z-Math.sin(p)*X,ne,W+Math.cos(p)*X),T.push(Z+Math.sin(p)*X,ne,W-Math.cos(p)*X),I.push(0,O,1,O),V<A){let ue=V*2;D.push(ue,ue+1,ue+2,ue+1,ue+3,ue+2)}}let S=new ct;S.setAttribute("position",new Xe(T,3)),S.setAttribute("uv",new Xe(I,2)),S.setIndex(D),S.computeVertexNormals();let x=m%3===0?d:f,P=new He(S,x);P.castShadow=!1,P.userData.phase=Ce(m*7+n)*je,u.add(P),g.push(P);let F=[];for(let V=0;V<=5;V++){let O=V/5;F.push(J(Math.cos(p)*b*O,Math.sin(O*Math.PI*.55)*.5-Math.pow(O,1.7)*M+.01,Math.sin(p)*b*O))}Qt(u,F,.015,C.palmVein,10,4)}for(let m=0;m<3;m++){let p=m*2.1+t;Dt(u,.15,C.coconut,Math.cos(p)*.3,-.2-m*.05,Math.sin(p)*.3)}let _=[];for(let m=0;m<7;m++){let p=m/6;_.push(J(.2+p*.1,-p*1.3,.1+Math.sin(p*4)*.15))}return Qt(u,_,.017,C.palmVein,12,4),s.userData.crown=u,s.userData.leaves=g,s}function fh(i=.34,e=.8){let t=new Ke,n=[];for(let r=0;r<=8;r++){let o=r/8,a=Math.sin(o*Math.PI)*.07;n.push(new he(i+a,(o-.5)*e))}let s=new Qr(n,16);sn(t,s,C.woodBarrel);for(let r of[-e*.35,e*.35])Ft(t,i+.04,.022,C.iron,0,r,0,Math.PI/2,0,0,18);return at(t,i*.7,i*.7,.03,C.woodBarrel,0,e*.5,0,16),t}function ph(i=1){let e=new Ke;Ve(e,i,i*.74,i*.9,C.crate,0,0,0);let t=C.crateTrim;for(let n of[-i*.46,i*.46])Ve(e,i*1.03,i*.09,.055,t,0,i*.28,n),Ve(e,i*1.03,i*.09,.055,t,0,-i*.28,n);return Ve(e,i*.08,i*.76,i*.93,t,-i*.48,0,0),Ve(e,i*.08,i*.76,i*.93,t,i*.48,0,0),e}function zy(){let i=new Ke;Ve(i,1.2,.52,.72,C.woodDarkMat,0,.26,0),Ve(i,1.24,.12,.76,C.brass,0,.51,0);let e=new He(new Yt(.38,.38,1.2,16,1,!1,0,Math.PI),C.woodDarkMat);e.rotation.z=Math.PI/2,e.rotation.x=Math.PI/2,e.position.set(0,.55,0),e.scale.z=.95,i.add(e);for(let t of[-.45,.45])Ve(i,.1,.58,.79,C.brass,t,.28,0);Ve(i,.15,.18,.08,C.brass,0,.42,.38);for(let t=0;t<8;t++){let n=new He(new Yt(.055,.055,.018,10),C.gold);n.position.set(-.42+Ce(t)*.85,.36+Ce(t*2)*.12,-.2+Ce(t*3)*.4),n.rotation.set(Ce(t*4)*.5,0,Ce(t*5)*.5),i.add(n)}return i}var C={};function ky(){C.navy=ke(wt.navy,{roughness:.58,metalness:.18}),C.navyDeep=ke(wt.navyDeep,{roughness:.62,metalness:.16}),C.teal=ke(wt.teal,{roughness:.62,metalness:.1}),C.tealDeep=ke(wt.tealDeep,{roughness:.7,metalness:.12}),C.tealLight=ke(wt.tealLight,{roughness:.65}),C.red=ke(wt.red,{roughness:.7}),C.redDeep=ke(wt.redDeep,{roughness:.78}),C.orange=ke(wt.orange,{roughness:.74}),C.gold=ke(wt.gold,{roughness:.28,metalness:.76,envMapIntensity:1.35}),C.goldLight=ke(wt.goldLight,{roughness:.25,metalness:.6,emissive:4992010,emissiveIntensity:.12}),C.brass=ke(wt.brass,{roughness:.34,metalness:.7,envMapIntensity:1.15}),C.wood=ke(wt.wood,{roughness:.84,map:Ci("#6f4b31")}),C.woodDarkMat=ke(wt.woodDark,{roughness:.88,map:Ci("#4b3323")}),C.woodBarrel=ke(8214329,{roughness:.85,map:Ci("#7d5739")}),C.crate=ke(10253899,{roughness:.86,map:Ci("#9c764b")}),C.crateTrim=ke(4994339,{roughness:.8}),C.deck=ke(16777215,{roughness:.8,map:Iy()}),C.hull=ke(16777215,{roughness:.66,metalness:.1,map:Cy(),side:Et}),C.cream=ke(wt.cream,{roughness:.82,side:Et}),C.sail=ke(15259053,{roughness:.92,side:Et}),C.bone=ke(wt.bone,{roughness:.52,metalness:.06}),C.black=ke(wt.black,{roughness:.58,metalness:.25}),C.iron=ke(3290167,{roughness:.42,metalness:.7}),C.rope=ke(wt.rope,{roughness:.94}),C.velvet=ke(wt.velvet,{roughness:.94}),C.velvetLight=ke(12077885,{roughness:.82}),C.stone=ke(wt.stone,{roughness:.94,map:Ci("#898271")}),C.stoneDark=ke(wt.stoneDark,{roughness:.96,map:Ci("#605d52")}),C.sand=ke(wt.sand,{roughness:1,map:Ci("#c6ae83")}),C.leafDark=ke(wt.leafDark,{roughness:.9,side:Et}),C.palmWood=ke(7689530,{roughness:.92,map:Ci("#72543a")}),C.palmRing=ke(4995112,{roughness:.96}),C.palmLeaf=ke(wt.leaf,{roughness:.82,side:Et,flatShading:!0}),C.palmLeafLight=ke(wt.leafLight,{roughness:.82,side:Et,flatShading:!0}),C.palmVein=ke(6123850,{roughness:.9}),C.coconut=ke(4797478,{roughness:.92}),C.cliff=ke(7105117,{roughness:.95,flatShading:!0}),C.cliffDark=ke(5198153,{roughness:.97,flatShading:!0}),C.moss=ke(6189124,{roughness:.95,flatShading:!0}),C.cloud=dh(16247767),C.cloud.fog=!1,C.cloudPink=dh(15719102),C.cloudPink.fog=!1,C.lanternGlass=ke(16765578,{roughness:.32,metalness:.12,emissive:16754500,emissiveIntensity:1.9,transparent:!0,opacity:.9}),C.porthole=ke(16759651,{roughness:.4,emissive:16751410,emissiveIntensity:1.5}),C.foam=dh(15201002,{transparent:!0,opacity:.22,blending:Wn,depthWrite:!1}),C.water=null,C.flagCloth=ke(14995885,{roughness:.9,side:Et})}var Yd,Zd,mh,$d,Jd,Kd,Qd,jd,Hy=13.15,Lt=[{x:-8.2,w:2.2,top:-1.82,keel:-4.2},{x:-7.35,w:2.58,top:-2.06,keel:-5.35},{x:-6,w:2.86,top:-2.46,keel:-6.45},{x:-4.1,w:2.98,top:-2.78,keel:-7.2},{x:-1.2,w:3,top:-3,keel:-7.56},{x:1.6,w:2.92,top:-2.96,keel:-7.5},{x:4,w:2.7,top:-2.68,keel:-6.9},{x:6,w:2.26,top:-2.3,keel:-5.95},{x:7.5,w:1.7,top:-1.95,keel:-4.9},{x:8.4,w:.82,top:-1.8,keel:-3.7},{x:8.67,w:.08,top:-1.96,keel:-3}];function Ii(i){if(i<=Lt[0].x)return{...Lt[0]};if(i>=Lt[Lt.length-1].x)return{...Lt[Lt.length-1]};for(let e=0;e<Lt.length-1;e++){let t=Lt[e],n=Lt[e+1];if(i>=t.x&&i<=n.x){let s=(i-t.x)/(n.x-t.x);return{x:i,w:Tt(t.w,n.w,s),top:Tt(t.top,n.top,s),keel:Tt(t.keel,n.keel,s)}}}return{...Lt[0]}}function Vy(){let i=[{f:1,v:0},{f:1,v:.1},{f:.992,v:.21},{f:.96,v:.34},{f:.88,v:.5},{f:.73,v:.66},{f:.51,v:.81},{f:.25,v:.93},{f:.07,v:.988},{f:0,v:1}],e=[...i,...i.slice(0,-1).reverse().map(h=>({f:-h.f,v:h.v}))],t=[];for(let h=0;h<Lt.length-1;h++){let u=Lt[h],f=Lt[h+1];for(let d=0;d<3;d++){let g=d/3;t.push({x:Tt(u.x,f.x,g),w:Tt(u.w,f.w,g),top:Tt(u.top,f.top,g),keel:Tt(u.keel,f.keel,g)})}}t.push({...Lt[Lt.length-1]});let n=[],s=[],r=[],o=e.length,a=t[0].x,l=t[t.length-1].x;for(let h=0;h<t.length;h++){let u=t[h];for(let f=0;f<o;f++){let d=e[f],g=Tt(u.keel,u.top,1-d.v);n.push(u.x,g+Math.sin(d.v*Math.PI)*.06,d.f*u.w);let _=(u.x-a)/(l-a),m=Al((g-u.keel)/Math.max(.001,u.top-u.keel),0,1);s.push(_*.999+5e-4,m*.996+.002)}}for(let h=0;h<t.length-1;h++)for(let u=0;u<o-1;u++){let f=h*o+u,d=(h+1)*o+u,g=(h+1)*o+u+1,_=h*o+u+1;r.push(f,d,_,d,g,_)}for(let h of[0,1]){let u=h===0?0:t.length-1,f=t[u],d=n.length/3;n.push(f.x,(f.top+f.keel)*.5,0),s.push(.5,.5);for(let g=0;g<o-1;g++)h===0?r.push(d,u*o+g,u*o+g+1):r.push(d,u*o+g+1,u*o+g)}let c=new ct;return c.setAttribute("position",new Xe(n,3)),c.setAttribute("uv",new Xe(s,2)),c.setIndex(r),c.computeVertexNormals(),c}function Gy(){let i=Lt.slice(1,10),e=-3.2,t=[],n=[],s=[],r=2,o=i[0].x,a=i[i.length-1].x;for(let c=0;c<i.length;c++){let h=i[c],u=h.w*.91,f=(h.x-o)/(a-o);if(t.push(h.x,e,-u,h.x,e,u),n.push(f*2.5,0,f*2.5,1.6),c<i.length-1){let d=c*r;s.push(d,d+1,d+2,d+1,d+3,d+2)}}let l=new ct;return l.setAttribute("position",new Xe(t,3)),l.setAttribute("uv",new Xe(n,2)),l.setIndex(s),l.computeVertexNormals(),l}function Wy(i,e,t,n=C.rope){for(let s of t)ir(i,e,s,2958106,.72)}function ci(i,e,t,n,s,r,o=1){let a=J((e.x+t.x)/2,Math.min(e.y,t.y)-n,(e.z+t.z)/2),l=new Xi(e,a,t),c=l.getPoints(20),h=new ct().setFromPoints(c),u=new Vi(h,new bi({color:2826521,transparent:!0,opacity:.68}));i.add(u);let f=new ct;f.setAttribute("position",new Xe([0,0,0,-.235,-.44,0,.235,-.44,0],3)),f.setAttribute("uv",new Xe([.5,1,0,0,1,0],2)),f.computeVertexNormals();let d=new vn({color:16777215,roughness:.8,side:Et,vertexColors:!1}),g=new zr(f,d,s);g.instanceMatrix.setUsage(Vc);let _=[],m=new Mt;for(let p=0;p<s;p++){let b=(p+.45)/s,M=l.getPoint(b),y=l.getTangent(b),A=Ce(p*7.3+o)*je,T=r[p%r.length];g.setColorAt(p,new Le(T)),_.push({t:b,p:M,tangent:y,phase:A,scale:.8+Ce(p*3+o)*.35}),m.position.copy(M),m.rotation.set(0,Math.atan2(-y.z,y.x),0),m.scale.setScalar(_[p].scale),m.updateMatrix(),g.setMatrixAt(p,m.matrix)}return g.instanceColor.needsUpdate=!0,i.add(g),{mesh:g,flags:_,update(p,b){let M=new Mt;for(let y=0;y<_.length;y++){let A=_[y];M.position.copy(A.p),M.rotation.set(Math.sin(p*2.2+A.phase)*.06*b,Math.atan2(-A.tangent.z,A.tangent.x)+Math.sin(p*2.8+A.phase)*.12*b,Math.sin(p*3.1+A.phase)*.1*b),M.scale.setScalar(A.scale),M.updateMatrix(),g.setMatrixAt(y,M.matrix)}g.instanceMatrix.needsUpdate=!0}}}function nr(i,e,t,n={}){let s=new Pn(i,e,12,6);s.translate(-i/2,-e/2,0);let r=s.attributes.position.array.slice(),o=new vn({map:t,side:Et,transparent:!0,alphaTest:.18,roughness:.86,metalness:0,...n}),a=new He(s,o);return a.userData.base=r,a.userData.width=i,a.userData.dynamic=!0,a.frustumCulled=!1,{mesh:a,update(l,c=1){let h=s.attributes.position.array;for(let u=0;u<h.length;u+=3){let f=r[u],d=r[u+1],g=Al(-f/i,0,1);h[u+2]=Math.sin(f*4.6+l*5.2)*.13*g*c+Math.sin(d*3.1+l*4)*.05*g*c}s.attributes.position.needsUpdate=!0,s.computeVertexNormals()}}}function Xy(){let i=new Ke;i.position.set(0,Hy,0);let e=new Ke;i.add(e);let t=Vy(),n=new He(t,C.hull);n.castShadow=!0,n.receiveShadow=!0,e.add(n);let s=Gy(),r=new He(s,C.deck);r.receiveShadow=!0,e.add(r);for(let k of[-1,1])for(let j=0;j<Lt.length-2;j++){let te=Lt[j],Q=Lt[j+1];if(te.x<-6.4||te.x>7)continue;let N=J(te.x,te.top-.18,k*te.w*.96),G=J(Q.x,Q.top-.18,k*Q.w*.96),ce=J(Q.x,-3.12,k*Q.w*.84),Te=J(te.x,-3.12,k*te.w*.84),Ae=new ct().setFromPoints([]),Qe=new Float32Array([N.x,N.y,N.z,G.x,G.y,G.z,ce.x,ce.y,ce.z,N.x,N.y,N.z,ce.x,ce.y,ce.z,Te.x,Te.y,Te.z]);Ae.setAttribute("position",new Nt(Qe,3)),Ae.computeVertexNormals();let ht=new He(Ae,C.woodDarkMat);ht.material.side=Et,ht.receiveShadow=!0,e.add(ht)}for(let k of[-1,1]){let j=[];for(let Q of Lt)j.push(J(Q.x,Q.top-.05,k*Q.w*.995));Qt(e,j,.062,C.gold,44,5);let te=[];for(let Q of Lt)te.push(J(Q.x,Q.top-.92,k*Q.w*.985));Qt(e,te,.037,C.gold,44,4);for(let Q of[-5.9,-3.55,-1.2,1.15,3.5,5.9]){let N=Ii(Q);Qt(e,[J(Q,N.top-.12,k*N.w*.965),J(Q,N.top-1.05,k*N.w*.985),J(Q,N.keel+2.2,k*N.w*.71),J(Q,N.keel+.65,k*N.w*.28),J(Q,N.keel+.02,k*.015)],.024,C.brass,24,4)}}let o=[];for(let k of Lt)o.push(J(k.x,k.keel-.015,0));Qt(e,o,.075,C.brass,40,5),Ve(e,.24,1.5,.62,C.woodDarkMat,-8.2,-5.4,0),Ve(e,.3,.1,.7,C.gold,-8.2,-4.68,0);for(let k of[-1,1]){for(let te=-7.3;te<=7.7;te+=.92){let Q=Ii(te),N=Q.top-.02,G=k*Q.w*.97;at(e,.038,.05,.62,C.gold,te,N+.28,G,6),Dt(e,.065,C.brass,te,N+.61,G)}let j=[];for(let te of Lt)te.x>-7.8&&te.x<8.1&&j.push(J(te.x,te.top+.58,k*te.w*.97));Qt(e,j,.042,C.gold,40,5)}let a=[];for(let k of[-1,1])for(let j of[-4.9,-2.5,-.1,2.3,4.7]){let te=Ii(j),Q=te.keel+2.35,N=k*te.w*.932,G=new Ke;G.position.set(j,Q,N),G.rotation.y=k>0?0:Math.PI;let ce=new He(new si(.25,.045,8,20),C.brass);G.add(ce);let Te=new He(new Hs(.23,20),C.porthole.clone());Te.position.z=.01,G.add(Te),a.push(Te.material),Dt(G,.04,C.gold,0,.36,.01),e.add(G)}for(let k of[-1,1]){let te=Ii(6.1),Q=k*te.w*.992;for(let N=0;N<2;N++){let G=[];for(let ce=0;ce<11;ce++){let Te=ce/10,Ae=Te*Math.PI*1.8,Qe=.62*(1-Te*.62);G.push(J(6.1-.35+Math.cos(Ae)*Qe,-3.55+Math.sin(Ae)*Qe+N*.5,Q))}Qt(e,G,.025,C.gold,26,4)}}for(let k of[-1,1]){let j=Ii(-5.7),te=new He(new Pn(2.35,.8),new vn({map:Kd,transparent:!0,side:Et,roughness:.7,metalness:.15}));te.position.set(-5.7,-3.65,k*(j.w*.94+.02)),te.rotation.y=k>0?0:Math.PI,e.add(te)}let l=new Ke;l.position.set(-8.28,-2.9,0),e.add(l),Ve(l,.32,2.8,4.15,C.navyDeep,0,0,0),Ve(l,.4,.2,4.5,C.gold,0,1.38,0),Ve(l,.4,.16,4.5,C.gold,0,-1.37,0);for(let k of[-2.03,2.03])Ve(l,.4,2.7,.16,C.gold,0,0,k);for(let k of[-1.25,0,1.25])Ve(l,.08,1,.78,C.gold,-.2,.22,k),Ve(l,.09,.82,.6,C.porthole,-.25,.22,k),Ve(l,.11,.82,.06,C.gold,-.3,.22,k);let c=gh({material:C.gold,eye:C.black,scale:.55,crossbones:!0});c.rotation.y=-Math.PI/2,c.position.set(-.32,.84,0),l.add(c);for(let k of[-1.95,1.95]){let j=sr(.9);j.position.set(-.35,1.8,k),l.add(j)}Ve(l,1.1,.18,4.7,C.woodDarkMat,-.6,1.3,0);for(let k of[-2.2,2.2])at(l,.05,.06,.6,C.gold,-.65,1.62,k,6);Ve(e,2.6,.22,4.15,C.deck,-6.7,-1.72,0),Ve(e,2.5,.2,4.05,C.woodDarkMat,-6.7,-1.85,0);for(let k=0;k<3;k++)Ve(e,.35,.16,4.1,C.wood,-5.25-k*.32,-1.9-k*.22,0);for(let k of[-2,2]){for(let j=0;j<4;j++)at(e,.045,.055,.6,C.gold,-7.4+j*.5,-1.3,k,6);Qt(e,[J(-7.6,-.98,k),J(-5.4,-.98,k)],.04,C.gold,12,4)}Ve(e,1.9,.22,3.6,C.deck,7.2,-2.25,0),Ve(e,1.9,.28,3.5,C.woodDarkMat,7.2,-2.4,0);for(let k=0;k<3;k++)Ve(e,.3,.15,3.3,C.wood,6.2+k*.33,-2.55-k*.2,0);let h=[J(8.35,-3.8,0),J(8.62,-3,0),J(8.78,-2.05,0),J(8.72,-1.1,0),J(9.05,-.15,0),J(9.75,.35,0)];Qt(e,h,.16,C.woodDarkMat,32,6);let u=J(8.55,-1.3,0),f=J(12.15,1.18,0);Nn(e,u,f,.24,.24,C.woodDarkMat,C.brass);for(let k of[.26,.62,.9]){let j=u.clone().lerp(f,k);Ft(e,.15,.028,C.gold,j.x,j.y,j.z,0,0,Math.PI/2,12)}let d=gh({material:C.gold,eye:C.black,scale:1.08,crossbones:!0,wings:!0});d.position.set(8.7,-2.25,0),d.rotation.y=Math.PI/2,d.rotation.z=-.08,e.add(d);let g=new Ke;g.position.set(.7,0,0),e.add(g),at(g,.16,.27,10.2,C.woodDarkMat,0,1.4,0,10),at(g,.29,.33,.6,C.brass,0,-2.8,0,10);for(let k of[-2.2,.1,2.2,4.25,5.95,6.75])Ft(g,.23-(k+3)*.005,.035,C.gold,0,k,0,Math.PI/2,0,0,12);let _=3.15;at(g,.55,.42,.3,C.woodDarkMat,0,_,0,8),Ft(g,.52,.035,C.brass,0,_+.15,0,Math.PI/2,0,0,12);for(let k=0;k<10;k++){let j=k/10*je;at(g,.022,.022,.42,C.gold,Math.cos(j)*.52,_+.31,Math.sin(j)*.52,5)}let m=4.35;Nn(g,J(0,m,-4.2),J(0,m,4.2),.11,.11,C.woodDarkMat,C.brass);let p=new ii([J(0,m-.3,-3.85),J(0,m-.55,-2.1),J(0,m-.72,0),J(0,m-.55,2.1),J(0,m-.3,3.85)]),b=sn(g,new $i(p,28,.34,8,!1),C.sail,[0,0,0]);b.scale.y=.7;for(let k of[-2.8,-.9,1,2.9])Ft(g,.35,.03,C.rope,0,m-.35,k,Math.PI/2,0,0,10);at(g,.035,.045,1.15,C.gold,0,7.05,0,6);let M=nr(2.55,1.6,$d);M.mesh.position.set(.1,7.35,0),M.mesh.rotation.y=.04,g.add(M.mesh);let y=new Ke;y.position.set(4.75,0,0),e.add(y),at(y,.12,.22,6.2,C.woodDarkMat,0,.1,0,8);for(let k of[-2.4,-.7,1.5,2.85])Ft(y,.18,.03,C.gold,0,k,0,Math.PI/2,0,0,12);Nn(y,J(0,2.42,-3.3),J(0,2.42,3.3),.09,.09,C.woodDarkMat,C.brass);let A=new ii([J(0,2.14,-3),J(0,1.95,0),J(0,2.14,3)]);sn(y,new $i(A,20,.26,8,!1),C.sail),at(y,.03,.04,.7,C.gold,0,3.65,0,6);let T=nr(1.6,.36,null,{map:null,color:10236457,transparent:!1,alphaTest:0});T.mesh.position.set(.02,3.86,0),y.add(T.mesh),at(e,.035,.05,2.2,C.gold,-7.75,-.7,0,6);let I=nr(1.1,.55,null,{map:null,color:1991015,transparent:!1,alphaTest:0});I.mesh.position.set(-7.76,.3,0),e.add(I.mesh);let D=J(.7,6.9,0),S=[J(8.5,-1.25,0),J(12,.9,0),J(7.3,-.1,1.9),J(7.3,-.1,-1.9),J(5.4,-.2,2.7),J(5.4,-.2,-2.7),J(-4.8,-.95,2.3),J(-4.8,-.95,-2.3),J(-7,-.9,0)];Wy(e,D,S);for(let k of[-1,1]){for(let j=0;j<6;j++){let te=3.4-j*.7,Q=Ii(te);ir(e,J(.7,2.6+j*.2,k*.17),J(te,Q.top+.4,k*Q.w*.94),2826521,.42)}for(let j=0;j<4;j++){let te=3.3-j*.55,Q=Ii(te);ir(e,J(4.75,2+j*.15,k*.12),J(te,Q.top+.3,k*Q.w*.94),2826521,.32)}}ir(e,J(.7,6.6,0),J(8.6,-1,0),2826521,.55),ir(e,J(.7,6.5,0),J(-7.4,-1,0),2826521,.5);let x=[],P=[11879988,14991732,3044217,15720639,9983026];x.push(ci(e,J(.72,6.75,0),J(4.72,3.4,0),1.15,12,P,2.2)),x.push(ci(e,J(.72,6.65,0),J(-3.8,0,0),1.2,12,P,4.1)),x.push(ci(e,J(4.75,3.55,0),J(8.35,-1.1,0),.55,8,P,7.4)),x.push(ci(e,J(.7,5.7,0),J(-4.4,-.25,2.5),.9,10,P,9.2)),x.push(ci(e,J(.7,5.7,0),J(-4.4,-.25,-2.5),.9,10,P,11.3));let F=nr(1.95,3.35,Qd,{alphaTest:.22,roughness:.9});F.mesh.position.set(.7,4.05,2.34),e.add(F.mesh);let V=nr(1.7,2.9,jd,{alphaTest:.22,roughness:.9});V.mesh.position.set(.7,4.05,-2.34),V.mesh.rotation.y=Math.PI,e.add(V.mesh);let O=new Ke;e.add(O);let Z=[],W=[-3.05,-1.35,.35,2.05,3.75];for(let k=0;k<W.length;k++)for(let j of[-1,1]){let te=new Ke,Q=j*1.35;te.position.set(W[k],-2.91,Q),Ve(te,.72,.16,1.5,C.velvet,0,0,0),Ve(te,.22,.72,1.5,C.velvet,-.3,.32,0),Ve(te,.78,.08,1.58,C.gold,0,.12,0),Ve(te,.13,.85,.13,C.gold,-.3,.43,.71),Ve(te,.13,.85,.13,C.gold,-.3,.43,-.71),Ve(te,.26,.07,1.72,C.gold,.18,.52,0);for(let G=-1;G<=1;G++)Dt(te,.035,C.gold,-.43,.44+G*.01,G*.3);O.add(te);let N=k===4?1:2;for(let G=0;G<N;G++){let ce=new Ke,Te=(G-(N-1)/2)*.5;ce.position.set(W[k]+.02,-2.74,Q+Te);let Ae=[9387311,2580067,12616776,6251088,11099195][(k+G+(j>0?1:0))%5],Qe=[14200195,12154703,14860186][(k+G)%3],ht=new He(new Wi(.13,.28,4,8),ke(Ae,{roughness:.9}));ht.position.y=.28,ce.add(ht),Dt(ce,.145,ke(Qe,{roughness:.9}),0,.61,.02);let L=new He(new Yt(.17,.18,.08,10),ke(2761504,{roughness:.9}));L.position.y=.73,ce.add(L);let oe=[];for(let se of[-1,1]){let ee=new Ke;ee.position.set(0,.46,se*.16);let ie=new He(new Wi(.045,.26,3,6),ke(Ae,{roughness:.9}));ie.position.y=-.15,ee.add(ie),Dt(ee,.05,ke(Qe,{roughness:.9}),0,-.32,0),ce.add(ee),oe.push({arm:ee,side:se})}te.add(ce),ce.userData.dynamic=!0,Z.push({group:ce,arms:oe,phase:Ce(k*5+G+j)*je})}}let ne=By(.74);ne.position.set(-6.45,-1.05,.35),ne.rotation.y=Math.PI/2,e.add(ne),Nn(e,J(-6.5,-1.8,.35),J(-6.5,-1.02,.35),.16,.16,C.woodDarkMat);let X=new Ke;X.position.set(-7.15,-1.78,-1.25);let ue=new He(new Wi(.21,.58,4,8),ke(2903384,{roughness:.92}));ue.position.y=.6,X.add(ue),Dt(X,.2,ke(13015667,{roughness:.92}),0,1.17,0);let Me=new He(new Vn(.3,.18,3),ke(1778210,{roughness:.9}));Me.position.set(0,1.34,0),Me.rotation.y=Math.PI/2,X.add(Me),X.rotation.y=.55,e.add(X);let Re=[];for(let[k,j,te]of[[-4.45,2.2,.75],[4.2,2.15,.7],[7,-2,.65],[-7.85,1.4,.62]]){let Q=Ii(k),N=sr(te);N.position.set(k,Math.min(-.5,Q.top+.9),j),e.add(N),Re.push(N)}for(let k of[-1,1])for(let j of[-4,.6,4.7]){let te=new Ke;te.position.set(j,-2.75,k*2.1);let Q=at(te,.1,.16,.85,C.iron,0,.08,k*.38,12);Q.rotation.x=Math.PI/2,Ve(te,.5,.22,.38,C.woodDarkMat,0,-.12,0);for(let N of[-.23,.23]){let G=at(te,.13,.13,.08,C.woodDarkMat,N,-.22,0,10);G.rotation.z=Math.PI/2}e.add(te)}Ft(e,.42,.07,C.rope,3.2,-3.03,-1.7,Math.PI/2,0,0,22),Ft(e,.3,.06,C.rope,3.25,-2.99,-1.7,Math.PI/2,0,0,22),at(e,.17,.13,.32,C.woodBarrel,2.4,-3,2,10);for(let k of[-2.25,2.25]){Nn(i,J(k,-.2,0),J(k*1.08,-3.05,0),.22,.36,C.gold),Dt(i,.23,C.brass,k,-.2,0),Dt(i,.18,C.brass,k*1.08,-3.05,0);for(let j=0;j<5;j++){let te=j/4;Ft(i,.17,.025,C.rope,Tt(k,k*1.08,te),Tt(-.22,-3.05,te),0,Math.PI/2,0,0,10)}}for(let k of[-.55,.55]){let j=at(i,.42,.42,.18,C.brass,0,0,k,16);j.rotation.x=Math.PI/2}return{rig:i,vessel:e,hull:n,mast:g,fore:y,helm:ne,figurehead:d,riders:Z,shipLanterns:Re,flags:[M,T,I,F,V,...x],portGlowMats:a,anchor:{figurehead:J(8.65,-2.25,0),wheel:J(-6.4,-1.05,.35),flag:J(.75,6.8,0)},update(k,j,te){M.update(k,.8+te*.8),T.update(k,.7+te),I.update(k,.6+te),F.update(k,.45+te*.45),V.update(k+1.7,.45+te*.45),x.forEach((Q,N)=>Q.update(k+N*.3,.7+te));for(let Q of Z){let N=Al(te,0,1);for(let G of Q.arms){let ce=Tt(.9,-2.1,N*(.7+.3*Math.sin(k*3+Q.phase)));G.arm.rotation.x=Tt(G.arm.rotation.x,ce,Math.min(1,j*3.2)),G.arm.rotation.z=G.side*(.1+N*.18)}Q.group.rotation.z=Math.sin(k*5+Q.phase)*.01*te}Re.forEach((Q,N)=>{let G=.86+Math.sin(k*8.7+N*2.1)*.08+Math.sin(k*21+N)*.04;Q.userData.glow.material.opacity=.62*G,Q.userData.glow.scale.setScalar(1.06*G)})}}}function qy(i){let e={topColor:{value:new Le(5083556)},horizonColor:{value:new Le(15914922)},bottomColor:{value:new Le(10649180)},sunColor:{value:new Le(16769454)},sunDirection:{value:new R(.15,.36,-.92).normalize()},night:{value:0},offset:{value:12}},t=new fn({uniforms:e,side:Zt,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 horizonColor;
      uniform vec3 bottomColor;
      uniform vec3 sunColor;
      uniform vec3 sunDirection;
      uniform float night;
      uniform float offset;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld);
        float h = dir.y;
        float upper = smoothstep(-0.035, 0.29, h);
        vec3 col = mix(horizonColor, topColor, pow(upper, 0.78));
        col = mix(bottomColor, col, smoothstep(-0.26, 0.012, h));
        float sun = pow(max(dot(dir, sunDirection), 0.0), 160.0);
        float halo = pow(max(dot(dir, sunDirection), 0.0), 7.0);
        col += sunColor * (sun * 1.25 + halo * 0.16) * (1.0 - night * 0.75);
        // faint painted cloud bands near the horizon
        float band = sin(dir.x * 8.0 + dir.z * 3.0 + offset) * 0.5 + 0.5;
        band *= smoothstep(0.02, 0.22, h) * (1.0 - smoothstep(0.24, 0.5, h));
        col += vec3(0.045, 0.048, 0.042) * band * (1.0 - night * 0.8);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `,toneMapped:!0}),n=new He(new Zi(420,40,24),t);n.renderOrder=-10,i.add(n);let s=e.sunDirection.value.clone(),r=new Bs(new Hi({map:_h("rgba(255,253,241,1)","rgba(255,219,160,0)"),color:16771002,transparent:!0,opacity:.9,depthWrite:!1,blending:Wn,fog:!1}));r.position.copy(s).multiplyScalar(350),r.scale.setScalar(56),i.add(r);let o=900,a=new Float32Array(o*3);for(let h=0;h<o;h++){let u=Ce(h*4.2)*je,f=.16+Ce(h*2.7)*.82,d=Math.sqrt(1-f*f),g=385;a[h*3]=Math.cos(u)*d*g,a[h*3+1]=f*g,a[h*3+2]=Math.sin(u)*d*g}let l=new ct;l.setAttribute("position",new Nt(a,3));let c=new ks(l,new Gi({color:16772041,size:1.15,transparent:!0,opacity:0,depthWrite:!1,blending:Wn,sizeAttenuation:!0,fog:!1}));return i.add(c),{sky:n,uniforms:e,sunSprite:r,stars:c}}function Yy(i){let e=Fy(),t=new vn({color:2325641,roughness:.33,metalness:.14,normalMap:e,normalScale:new he(.2,.2),envMapIntensity:1.2,transparent:!1}),n=new He(new Pn(900,900,1,1),t);n.rotation.x=-Math.PI/2,n.position.y=-1.32,n.receiveShadow=!0,i.add(n);let s=new He(new jr(13.3,16.2,96,1),new Mi({map:Zd,transparent:!0,opacity:.34,side:Et,depthWrite:!1,blending:Wn}));s.rotation.x=-Math.PI/2,s.position.y=-1.27,i.add(s);let r=s.clone();return r.scale.setScalar(1.17),r.material=s.material.clone(),r.material.opacity=.14,r.position.y=-1.26,i.add(r),{water:n,mat:t,normalMap:e,foam:s,foam2:r}}function Zy(i){let e=new Ke;i.add(e);let t=new He(new Yt(14.1,11.6,2.4,72),C.cliffDark);t.position.y=-1.6,t.receiveShadow=!0,e.add(t),at(e,13.6,13.9,.8,C.sand,0,-.12,0,72).receiveShadow=!0;let n=new He(new Yt(13.6,14,.22,72),C.moss);n.position.y=.22,e.add(n);let s=new He(new si(13.5,.18,8,80),C.stone);s.rotation.x=Math.PI/2,s.position.y=.34,e.add(s),at(e,10.8,11.2,.26,C.stoneDark,0,.39,0,96).receiveShadow=!0,at(e,10.2,10.5,.22,C.stone,0,.57,0,96).receiveShadow=!0;let r=new vn({map:Py(),roughness:.88,metalness:.04}),o=new He(new Hs(10.1,96),r);o.rotation.x=-Math.PI/2,o.position.y=.69,o.receiveShadow=!0,e.add(o);let a=new He(new si(10.08,.055,6,100),C.brass);a.rotation.x=Math.PI/2,a.position.y=.71,e.add(a);for(let l=0;l<4;l++)Ve(e,4-l*.25,.16,.66,C.stone,0,.7-l*.16,10.6+l*.65).receiveShadow=!0;for(let l=0;l<18;l++){let c=l/18*je+.1,h=13.7+Ce(l)*1.1,u=.55+Ce(l*3)*1.6,f=new He(new Gr(u,0),l%3===0?C.cliff:C.cliffDark);f.position.set(Math.cos(c)*h,.1+Ce(l*4)*.25,Math.sin(c)*h),f.scale.set(.85+Ce(l*7)*.5,.6+Ce(l*9)*.5,.8+Ce(l*2)*.5),f.rotation.set(Ce(l)*2,Ce(l*2)*3,Ce(l*5)*2),f.castShadow=!0,e.add(f)}for(let l=0;l<110;l++){let c=Ce(l*4.1)*je,h=10.8+Ce(l*7.3)*2.2,u=Math.cos(c)*h,f=Math.sin(c)*h;if(f>9.6&&Math.abs(u)<4.6)continue;let d=new He(new Vn(.07,.32+Ce(l)*.35,4),l%4===0?C.leafDark:C.moss);d.position.set(u,.43,f),d.rotation.z=(Ce(l*2)-.5)*.5,e.add(d),l%13===0&&Dt(e,.06,l%2?C.orange:C.cream,u+.1,.65,f)}return e}function $y(i){let e=new Ke;i.add(e);let t=.68,n=12.55,s=4.55,r=-4.55;for(let d of[s,r]){for(let _ of[-1,1]){let m=J(_*5.65,t,d),p=J(_*.66,n,d);Nn(e,m,p,.44,.36,C.navyDeep,C.gold);let b=new R().subVectors(p,m).normalize(),M=J(0,0,.22);Nn(e,m.clone().add(M),p.clone().add(M),.055,.04,C.gold);for(let A=0;A<3;A++){let T=.22+A*.23,I=m.clone().lerp(p,T),D=new He(Rl,C.red);D.position.copy(I),D.quaternion.setFromUnitVectors(J(0,1,0),b),D.scale.set(.52,.12,.4),e.add(D)}Ve(e,1.05,.34,1.1,C.stoneDark,_*5.65,t+.16,d),Dt(e,.36,C.gold,_*5.65,t+.38,d);let y=sr(1.1);y.position.copy(m.clone().lerp(p,.46)).add(J(_*.42,0,0)),e.add(y);for(let A=0;A<4;A++){let T=.28+A*.07,I=m.clone().lerp(p,T),D=new He(new si(.28,.035,5,12),C.rope);D.position.copy(I),D.quaternion.setFromUnitVectors(J(0,0,1),b),e.add(D)}}Nn(e,J(-3,7,d),J(3,7,d),.3,.22,C.navyDeep),Nn(e,J(-1.9,9.6,d),J(1.9,9.6,d),.22,.18,C.navyDeep),Nn(e,J(-2.55,6.85,d),J(2.55,6.85,d),.06,.05,C.gold),Nn(e,J(-1.55,9.46,d),J(1.55,9.46,d),.06,.05,C.gold);for(let _ of[-1,1]){let m=[J(_*4.6,2.2,d),J(_*4,3.4,d),J(_*3.2,4.1,d),J(_*2.8,5.9,d)];Qt(e,m,.08,C.gold,20,4);let p=sr(.8);p.position.set(_*4.9,3,d+(d>0?.35:-.35)),e.add(p)}let g=Tl(.62,.1);g.position.set(0,8.35,d+(d>0?.25:-.25)),d<0&&(g.rotation.y=Math.PI),e.add(g)}let o=at(e,.33,.33,9.6,C.brass,0,13.15,0,16);o.rotation.x=Math.PI/2;for(let d of[-4.9,-4.35,4.35,4.9]){let g=at(e,.42,.42,.14,C.gold,0,13.15,d,18);g.rotation.x=Math.PI/2}let a=new Ke;a.position.set(0,13.35,4.93),a.userData.dynamic=!0;let l=Tl(1.24,.18);a.add(l),Ft(a,1.5,.08,C.gold,0,0,.05,0,0,0,40);for(let d=0;d<8;d++){let g=d/8*je;Dt(a,.07,C.goldLight,Math.cos(g)*1.5,Math.sin(g)*1.5,.13)}e.add(a),at(e,.1,.18,6.4,C.woodDarkMat,0,15.2,0,8);for(let d of[15.9,17.2,18.15])Ft(e,.18,.025,C.gold,0,d,0,Math.PI/2,0,0,12);let c=nr(1.45,.42,null,{map:null,color:11746605,transparent:!1,alphaTest:0});c.mesh.position.set(.04,18.35,0),e.add(c.mesh);let h=Tl(.4,.08);h.position.set(0,18.8,0),h.userData.dynamic=!0,e.add(h);for(let[d,g]of[[-8.7,4.4],[8.7,4.4],[-8.7,-4.4],[8.7,-4.4],[0,9],[0,-9]])ir(e,J(0,13.4,0),J(d,.8,g),2826521,.4),at(e,.07,.1,.45,C.brass,d,.9,g,6);let u=[11879988,14924912,3044217,15720639,9983026],f=[];return f.push(ci(e,J(0,12.9,4.55),J(8.5,.8,4.6),1.8,15,u,1.1)),f.push(ci(e,J(0,12.9,4.55),J(-8.5,.8,4.6),1.8,15,u,3.2)),f.push(ci(e,J(0,12.9,-4.55),J(8.5,.8,-4.6),1.8,15,u,5.3)),{group:e,crest:a,supportFlag:c,buntings:f,update(d,g,_,m){c.update(d,.8),f.forEach((p,b)=>p.update(d+b*.2,.8)),a.rotation.z=Math.sin(d*.15)*.012,h.rotation.z+=g*.08}}}function Jy(i){let e=new Ke;e.position.set(-6.55,.64,6.55),e.rotation.y=.33,e.scale.setScalar(.92),i.add(e);let t=0;for(let h of[-1,1]){Ve(e,1.4,.3,1.5,C.stoneDark,h*3.55,.15,t),Ve(e,1.1,.28,1.25,C.stone,h*3.55,.43,t),at(e,.36,.43,3.9,C.tealDeep,h*3.55,2.52,t,12);for(let f of[.8,1.9,3.2,4.3])Ft(e,.44,.055,C.gold,h*3.55,f,t,Math.PI/2,0,0,16);for(let f=0;f<8;f++){let d=f/8*je;at(e,.035,.035,3.1,C.gold,h*3.55+Math.cos(d)*.36,2.5,t+Math.sin(d)*.36,5)}Ve(e,1.1,.34,1.05,C.gold,h*3.55,4.55,t),Ve(e,1.4,.16,1.28,C.brass,h*3.55,4.78,t);let u=sr(1.15);u.position.set(h*3.55,3.6,t+.55),e.add(u);for(let f=0;f<3;f++)Ft(e,.48,.04,C.rope,h*3.55,1.1+f*.08,t,Math.PI/2,0,0,14)}let n=new qi;n.moveTo(-4.6,0),n.lineTo(-4.6,1.25),n.quadraticCurveTo(-4.2,3.45,0,3.45),n.quadraticCurveTo(4.2,3.45,4.6,1.25),n.lineTo(4.6,0),n.lineTo(3.25,0),n.lineTo(3.25,.95),n.quadraticCurveTo(3,2.35,0,2.35),n.quadraticCurveTo(-3,2.35,-3.25,.95),n.lineTo(-3.25,0),n.closePath();let s=new Ws(n,{depth:.7,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:2,steps:1});s.translate(0,0,-.35),sn(e,s,C.navyDeep,[0,4.78,t]);let r=new He(s,C.gold);r.scale.set(1.008,1.004,.4),r.position.set(0,4.79,t),e.add(r);let o=new He(new Pn(6.65,3.15),new vn({map:Jd,roughness:.6,metalness:.12,side:Et}));o.position.set(0,6.55,.38),e.add(o),Ve(e,6.9,3.4,.18,C.woodDarkMat,0,6.55,.2),Ve(e,6.95,.11,.26,C.gold,0,8.22,.22),Ve(e,6.95,.11,.26,C.gold,0,4.88,.22);for(let h of[-3.45,3.45])Ve(e,.11,3.4,.26,C.gold,h,6.55,.22);let a=gh({material:C.gold,eye:C.black,scale:.55,crossbones:!0,wings:!0});a.position.set(0,8.75,.36),a.rotation.z=.03,e.add(a);let l=Tl(.56,.1);l.position.set(0,9.35,.35),e.add(l);for(let h of[-1,1]){for(let u=0;u<3;u++){let f=h*(1.95+u*1);at(e,.07,.09,1.05,C.brass,f,.52,2.8,8),Dt(e,.09,C.gold,f,1.1,2.8)}for(let u=0;u<2;u++){let f=h*(1.95+u*1),d=h*(1.95+(u+1)*1);Qt(e,[J(f,.88,2.8),J((f+d)/2,.7,2.8),J(d,.88,2.8)],.028,C.rope,12,4)}}let c=ci(e,J(-3.55,4.55,.4),J(3.55,4.55,.4),1,16,[11879988,14924912,3044217,15720639],6.2);return{group:e,signSkull:a,crest:l,bunting:c,update(h){c.update(h,.75)}}}function Ky(){let i=new Ke,e=new Ke;e.position.set(-8.1,.42,7.6),e.rotation.y=.38,i.add(e),Ve(e,2.1,1.8,1.6,C.cream,0,.9,0),Ve(e,2.2,.18,1.7,C.woodDarkMat,0,.08,0);for(let s=0;s<6;s++){let r=new He(new Yt(1.45,1.45,.12,3,1,!0,s/6*je,.16666666666666666*je),s%2?C.red:C.parchmentMat);r.position.y=2.1,r.material.side=Et,e.add(r)}Ve(e,2.35,.22,1.9,C.woodDarkMat,0,2.02,0),wl(e,1.2,.8,C.teal,0,2.5,0,8),Ve(e,1.2,.7,.07,C.navyDeep,0,1.26,.82),Ve(e,1,.52,.05,C.porthole,0,1.26,.87),Ve(e,1.25,.09,.12,C.gold,0,1.64,.84);for(let s of[-.9,.9])Ve(e,.12,2,.12,C.gold,s,.95,.8);let t=new vn({map:qd("\u552E\u7968\u5904","TICKETS \xB7 004"),roughness:.7,transparent:!0}),n=new He(new Pn(1.5,.52),t);return n.position.set(0,1.9,.9),e.add(n),i}function Qy(i){let e=new Ke;i.add(e);let t=[];function n(c,h,u,f,d=0,g=1){return c.position.set(h,u,f),c.rotation.y=d,c.scale.setScalar(g),e.add(c),t.push(c),c}n(fh(.42,1),-8.15,.9,4.35,.2,1.1),n(fh(.34,.8),-7.2,.82,5.1,-.3,1),n(fh(.34,.85),8.2,.82,4.8,.8,.9),n(ph(.85),7.45,.9,5.35,-.2,1),n(ph(.55),8.15,1.08,5.8,.45,.85),n(ph(.65),-7.7,1,6,.1,.9),n(zy(),8.6,.76,7.2,-.65,1);let s=new Ke;at(s,.1,.12,2.4,C.iron,0,1.2,0,8),Ft(s,.33,.06,C.iron,0,2.4,0,0,0,0,16);let r=at(s,.07,.07,1.8,C.iron,0,1.65,0,8);r.rotation.z=Math.PI/2;for(let c of[-1,1]){let h=[J(0,.15,0),J(c*.55,0,0),J(c*.78,.35,0)];Qt(s,h,.09,C.iron,18,5);let u=new He(new Vn(.18,.55,4),C.iron);u.position.set(c*.82,.15,0),u.rotation.z=c>0?-.75:.75,s.add(u)}n(s,7.1,.7,7.9,.45,.95);let o=new Ke,a=at(o,.16,.26,1.6,C.iron,0,.55,0,14);a.rotation.z=Math.PI/2;for(let c of[-.45,.35]){let h=at(o,.28,.28,.12,C.woodDarkMat,c,.22,.3,12);h.rotation.x=Math.PI/2;let u=h.clone();u.position.z=-.3,o.add(u)}Ve(o,1.18,.3,.58,C.woodDarkMat,0,.37,0),n(o,-8.4,.72,-2,1.3,1.1);let l=new Ke;l.position.set(-7.8,.88,1.4);for(let c=0;c<3;c++)Ft(l,.34+c*.04,.055,C.rope,.3+c*.1,.12+c*.06,.3,Math.PI/2,0,0,20);return e.add(l),{group:e,props:t}}function jy(i){let e=[],t=[[-11.9,2.9,7.1,1.5,.2,1],[12.2,-1.8,6.8,-1.5,1,2],[-9.7,-7.8,7.8,.9,2.1,3],[9.2,-8,8,-.7,3,4],[-4.1,-11.9,6.4,.2,4.1,5],[4.9,-11.6,6.9,-.2,5,6],[11.4,8.7,4.9,-.8,5.6,7]];for(let[n,s,r,o,a,l]of t){let c=Oy(r,o,a,l);c.position.set(n,.42,s),c.rotation.y=a,i.add(c),e.push(c)}return e}function ev(i){let e=new Ke;i.add(e);let t=new Ke;t.position.set(-45,-3.5,-105);let n=new He(new Yt(24,32,16,24),ke(6190446,{roughness:1,flatShading:!0}));n.scale.set(1,.55,.7),t.add(n);for(let o=0;o<4;o++){let a=8+o*5,l=(o-1.5)*6.5;at(t,2.1,2.5,a,ke(6782839,{roughness:1}),l,a/2+4,0,8),wl(t,2.6,4,ke(4811626,{roughness:1}),l,a+5.5,0,8)}t.rotation.y=.3,e.add(t);let s=new Ke;s.position.set(92,-2.2,-130);let r=new He(new Vn(22,30,7),ke(6190962,{roughness:1,flatShading:!0}));r.position.y=8,s.add(r);for(let o=0;o<3;o++)at(s,1.2,1.8,10+o*2,ke(6585716,{roughness:1}),-4+o*4.5,19+o,0,7),wl(s,1.8,3,ke(5337195,{roughness:1}),-4+o*4.5,24+o,0,7);return e.add(s),e}function tv(i){let e=[],t=C.cloud,n=C.cloudPink,s=[[-138,46,-184,1.55],[111,38,-168,1.45],[-24,76,-246,2],[192,29,-126,1.15],[-201,31,-118,1.2],[46,88,-260,2.2]];for(let[r,o,a,l]of s){let c=new Ke;c.position.set(r,o,a);for(let h=0;h<6;h++)Ry(c,4.2+Ce(h+r)*5.2,h%3===0?n:t,(h-2.5)*4.6,Math.sin(h*1.7)*1.7,(Ce(h*3+a)-.5)*4.5,1,.42+Ce(h)*.22,.8).rotation.set(Ce(h)*2,Ce(h*2)*2,Ce(h*3)*2);c.scale.setScalar(l),i.add(c),e.push({group:c,phase:Ce(r+a)*je})}return e}function nv(i){let e=[],t=new bi({color:2240815,transparent:!0,opacity:.6});for(let n=0;n<7;n++){let s=new ct,r=new Float32Array([-.4,0,0,0,.09,0,.4,0,0,0,.09,0,0,-.11,0]);s.setAttribute("position",new Nt(r,3));let o=new Vi(s,t);o.userData={r:22+n*7,y:17+n*3,speed:.05+n*.007,phase:n*1.4,dir:n%2?1:-1},i.add(o),e.push(o)}return e}function iv(i){let t=new Float32Array(480),n=[];for(let a=0;a<160;a++){let l=Ce(a*3)*je,c=3+Ce(a*5)*12;t[a*3]=Math.cos(l)*c,t[a*3+1]=1+Ce(a*7)*13,t[a*3+2]=Math.sin(l)*c,n.push({a:l,r:c,y:t[a*3+1],speed:.2+Ce(a*9)*.4,phase:Ce(a)*je})}let s=new ct;s.setAttribute("position",new Nt(t,3));let r=new Gi({map:_h("rgba(255,236,184,.95)","rgba(255,196,102,0)"),color:16766350,size:.14,transparent:!0,opacity:.8,depthWrite:!1,blending:Wn,sizeAttenuation:!0}),o=new ks(s,r);return i.add(o),{points:o,seeds:n}}function ef(i,e={}){Wd=Math.min(8,i.capabilities.getMaxAnisotropy());let t=e.mobile??!1;ky(),Yd=_h(),Zd=Ny(),mh=Uy(),$d=Dy(),Jd=Ly(),Kd=qd("\u9ED1\u5E06\u53F7","BLACK SAIL"),Qd=Gd("#8c2e28"),jd=Gd("#1b5962"),C.parchmentMat=ke(15192746,{roughness:.9});let n=new Br;n.background=new Le(9352629),n.fog=new Fr(11121568,.0042);let s=new er(i);mh.mapping=qs;let r=s.fromEquirectangular(mh);n.environment=r.texture,n.environmentIntensity=.72,s.dispose();let o=new to(12968671,6179382,.88);n.add(o);let a=new wi(16768432,3.05);a.position.set(17,27,19),a.castShadow=!t,a.shadow.mapSize.set(2048,2048),a.shadow.camera.left=-23,a.shadow.camera.right=23,a.shadow.camera.top=28,a.shadow.camera.bottom=-10,a.shadow.camera.near=1,a.shadow.camera.far=70,a.shadow.bias=-6e-4,a.shadow.normalBias=.02,n.add(a);let l=new wi(7977420,.54);l.position.set(-22,13,-18),n.add(l);let c=new wi(16769983,1.28);c.position.set(22,9,30),n.add(c);let h=new wi(16760197,.62);h.position.set(-4,13,-24),n.add(h);let u=qy(n),f=Yy(n),d=Zy(n),g=$y(n),_=Xy();n.add(_.rig);let m=Jy(n),p=Qy(n),b=jy(n),M=Ky();n.add(M);let y=ev(n),A=tv(n),T=nv(n),I=iv(n),D=[];for(let[k,j]of[[-8.3,8.2],[8.4,8.3],[-7.6,-5.6],[7.9,-5.8]]){let te=new Ke;te.position.set(k,.65,j),at(te,.09,.13,3.2,C.iron,0,1.6,0,8),Ft(te,.25,.04,C.gold,0,2.3,0,Math.PI/2,0,0,12);let Q=sr(1.15);Q.position.set(0,3.35,0),te.add(Q),n.add(te);let N=new Ki(16758892,2.2,10,2);N.position.set(k,3.35,j),n.add(N),D.push({light:N,lantern:Q,base:2.2})}let S=new Ki(16758635,2.4,9,2);S.position.set(0,9.8,0),n.add(S);let x=new Ki(16765078,1,14,2);x.position.set(0,4.5,3.2),n.add(x);let P={figurehead:new Mt,wheel:new Mt,flag:new Mt,gate:new Mt};P.figurehead.position.copy(_.anchor.figurehead),P.wheel.position.copy(_.anchor.wheel),P.flag.position.copy(_.anchor.flag),_.rig.add(P.figurehead,P.wheel,P.flag),P.gate.position.set(-6.35,6.7,6.9),n.add(P.gate),n.updateMatrixWorld(!0),li(_.vessel),li(g.group),li(m.group),li(d),li(p.group),li(M),li(y),b.forEach(k=>li(k)),A.forEach(k=>li(k.group));let F=.22,V=.22,O=0,Z=0,W={top:new Le(3967139),horizon:new Le(15979683),bottom:new Le(10648412),fog:new Le(11122084),water:new Le(1798272),sun:new Le(16768432),hemiSky:new Le(12968671),hemiGround:new Le(6179382),sunIntensity:3.05,hemiIntensity:.88,fillIntensity:.54,frontFill:1.28,env:.72},ne={top:new Le(399651),horizon:new Le(1456966),bottom:new Le(663589),fog:new Le(664106),water:new Le(601659),sun:new Le(10210028),hemiSky:new Le(5147551),hemiGround:new Le(2497558),sunIntensity:.6,hemiIntensity:.55,fillIntensity:.3,frontFill:.42,env:.3},X={top:W.top.clone(),horizon:W.horizon.clone(),bottom:W.bottom.clone(),fog:W.fog.clone(),water:W.water.clone(),sun:W.sun.clone(),hemiSky:W.hemiSky.clone(),hemiGround:W.hemiGround.clone()};function ue(k=!1){k&&(F=V);let j=F,te=(Q,N,G)=>G.copy(Q).lerp(N,j);te(W.top,ne.top,u.uniforms.topColor.value),te(W.horizon,ne.horizon,u.uniforms.horizonColor.value),te(W.bottom,ne.bottom,u.uniforms.bottomColor.value),te(W.fog,ne.fog,n.fog.color),te(W.water,ne.water,f.mat.color),te(W.sun,ne.sun,a.color),te(W.hemiSky,ne.hemiSky,o.color),te(W.hemiGround,ne.hemiGround,o.groundColor),a.intensity=Tt(W.sunIntensity,ne.sunIntensity,j),o.intensity=Tt(W.hemiIntensity,ne.hemiIntensity,j),l.intensity=Tt(W.fillIntensity,ne.fillIntensity,j),c.intensity=Tt(W.frontFill,ne.frontFill,j),n.environmentIntensity=Tt(W.env,ne.env,j),u.uniforms.night.value=j,u.stars.material.opacity=Math.pow(Math.max(0,(j-.45)/.55),1.3)*.9,u.sunSprite.material.opacity=Tt(.85,.35,j),u.sunSprite.material.color.copy(a.color),C.lanternGlass.emissiveIntensity=Tt(1.1,3.3,j),C.porthole.emissiveIntensity=Tt(.5,2.2,j),C.cloud.color.set(15656143).lerp(new Le(4151650),j),C.cloudPink.color.set(15125426).lerp(new Le(4872800),j);for(let Q of D)Q.light.intensity=Q.base*Tt(.5,2.3,j);S.intensity=Tt(.9,3,j),x.intensity=Tt(.4,1.6,j)}ue(!0);let Me={overview:{pos:J(20.2,15.7,33.6),target:J(0,8.7,0)},figurehead:{pos:J(14.2,8.3,7.4),target:J(8.5,10.7,.4)},wheel:{pos:J(-12.3,8.2,9.8),target:J(-5.9,12,.3)},flag:{pos:J(9.8,16.2,12.5),target:J(.6,19.7,0)},gate:{pos:J(5.8,4.5,20.6),target:J(0,6.2,9.8)}},Re=new Le;return{scene:n,sky:u,ocean:f,island:d,support:g,ship:_,gate:m,anchors:P,views:Me,palms:b,clouds:A,birds:T,particles:I,sun:a,hemi:o,fill:l,lampLights:D,get nightness(){return F},setNight(k,j=!1){V=k?1:.22,j&&(F=V,ue(!0))},setEnergy(k){Z=Al(k,0,1)},update(k,j){O=j,Math.abs(V-F)>.001&&(F+=(V-F)*Math.min(1,k*1.1),ue(!1)),_.update(O,k,Z),g.update(O,k,Z,F),m.update(O);for(let Q=0;Q<b.length;Q++){let N=b[Q];N.rotation.z=Math.sin(O*.6+Q)*.018,N.rotation.x=Math.sin(O*.48+Q*1.7)*.014;let G=N.userData.crown;G.rotation.z=Math.sin(O*1.1+Q)*.028,G.rotation.x=Math.cos(O*.9+Q)*.022;for(let ce=0;ce<N.userData.leaves.length;ce++){let Te=N.userData.leaves[ce];Te.rotation.y=Math.sin(O*1.5+Te.userData.phase+ce*.2)*.055}}f.normalMap.offset.x=O*.011,f.normalMap.offset.y=O*.006,f.foam.material.opacity=.26+Math.sin(O*.7)*.06,f.foam.rotation.z=O*.01,f.foam2.material.opacity=.1+Math.sin(O*.55+2)*.03,f.foam2.rotation.z=-O*.008;for(let Q=0;Q<D.length;Q++){let N=D[Q],G=.9+Math.sin(O*9.2+Q*2.3)*.05+Math.sin(O*21.1+Q)*.025;N.light.intensity=N.base*Tt(.5,2.3,F)*G,N.lantern.userData.glow.material.opacity=(.45+F*.35)*G}let te=I.points.geometry.attributes.position.array;for(let Q=0;Q<I.seeds.length;Q++){let N=I.seeds[Q],G=N.a+O*.018*N.speed;te[Q*3]=Math.cos(G)*N.r,te[Q*3+1]=N.y+Math.sin(O*N.speed+N.phase)*.8,te[Q*3+2]=Math.sin(G)*N.r}I.points.geometry.attributes.position.needsUpdate=!0;for(let Q=0;Q<A.length;Q++){let N=A[Q];N.group.position.x+=Math.sin(O*.03+N.phase)*k*.04}for(let Q=0;Q<T.length;Q++){let N=T[Q],G=N.userData,ce=O*G.speed*G.dir+G.phase;N.position.set(Math.cos(ce)*G.r,G.y+Math.sin(O*.7+G.phase)*1.5,Math.sin(ce)*G.r),N.rotation.y=-ce+(G.dir>0?Math.PI:0),N.rotation.z=Math.sin(O*4.2+G.phase)*.22,N.scale.setScalar(.9+Math.sin(O*2+G.phase)*.04)}_.portGlowMats.forEach(Q=>{Q.emissiveIntensity=Tt(.35,2.1,F)+Math.sin(O*3.1)*.06})},getLandmarkWorld(k){let j=P[k];return j?j.getWorldPosition(new R):null}}}var Cl=class{constructor(){this.ctx=null,this.started=!1,this.muted=!0,this.rideActive=!1,this.energy=0,this.nextCreak=0,this.nextGull=4,this.lastNow=0}async enable(){if(!this.ctx){let e=window.AudioContext||window.webkitAudioContext;if(!e)return!1;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination);let t=this.ctx.createDynamicsCompressor();t.threshold.value=-18,t.knee.value=18,t.ratio.value=3,t.attack.value=.01,t.release.value=.3,t.connect(this.master),this.bus=this.ctx.createGain(),this.bus.connect(t),this.noiseBuffer=this.makeNoise(4),this.buildSea(),this.buildWind(),this.buildDrone(),this.started=!0}return await this.ctx.resume(),this.muted=!1,this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(.7,this.ctx.currentTime,.8),this.chime(),!0}makeNoise(e=3){let t=Math.floor(this.ctx.sampleRate*e),n=this.ctx.createBuffer(2,t,this.ctx.sampleRate);for(let s=0;s<2;s++){let r=n.getChannelData(s),o=0;for(let a=0;a<t;a++){let l=Math.random()*2-1;o=(o+.018*l)/1.018,r[a]=o*3.2+l*.15}}return n}loopNoise(e,t=1){let n=this.ctx.createBufferSource();return n.buffer=e,n.loop=!0,n.playbackRate.value=t,n.start(),n}buildSea(){let e=this.loopNoise(this.noiseBuffer,.8),t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=440,t.Q.value=.35;let n=this.ctx.createGain();n.gain.value=.12,e.connect(t),t.connect(n),n.connect(this.bus);let s=this.ctx.createOscillator();s.frequency.value=.09;let r=this.ctx.createGain();r.gain.value=170,s.connect(r),r.connect(t.frequency),s.start();let o=this.ctx.createOscillator();o.frequency.value=.14;let a=this.ctx.createGain();a.gain.value=.032,o.connect(a),a.connect(n.gain),o.start(),this.seaGain=n}buildWind(){let e=this.loopNoise(this.noiseBuffer,1.17),t=this.ctx.createBiquadFilter();t.type="bandpass",t.frequency.value=760,t.Q.value=.55;let n=this.ctx.createGain();n.gain.value=.018,e.connect(t),t.connect(n),n.connect(this.bus),this.windGain=n,this.windFilter=t}buildDrone(){let e=this.ctx.createGain();e.gain.value=0,e.connect(this.bus),this.droneGain=e,[73.42,110,146.83].forEach((n,s)=>{let r=this.ctx.createOscillator();r.type=s===0?"sine":"triangle",r.frequency.value=n;let o=this.ctx.createGain();o.gain.value=[.045,.018,.012][s];let a=this.ctx.createBiquadFilter();a.type="lowpass",a.frequency.value=380,r.connect(a),a.connect(o),o.connect(e),r.start()})}setMuted(e){this.ctx&&(this.muted=e,this.master.gain.setTargetAtTime(e?0:.7,this.ctx.currentTime,.25))}setRide(e){if(this.rideActive=e,!this.ctx)return;let t=this.ctx.currentTime;e?(this.droneGain.gain.setTargetAtTime(.5,t,1.2),this.horn(),this.nextCreak=t+.7):this.droneGain.gain.setTargetAtTime(0,t,1.4)}setEnergy(e){if(this.energy=Math.max(0,Math.min(1,e)),!this.ctx)return;let t=this.ctx.currentTime;this.windGain.gain.setTargetAtTime(.018+this.energy*.12,t,.22),this.windFilter.frequency.setTargetAtTime(680+this.energy*1100,t,.3),this.seaGain.gain.setTargetAtTime(.115+this.energy*.035,t,.5)}chime(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime;[523.25,783.99,1046.5].forEach((t,n)=>{let s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="sine",s.frequency.value=t,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.035/(n+1),e+.02+n*.05),r.gain.exponentialRampToValueAtTime(1e-4,e+1.1+n*.14),s.connect(r),r.connect(this.bus),s.start(e+n*.05),s.stop(e+1.4)})}horn(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime;[92.5,138.6,185].forEach((t,n)=>{let s=this.ctx.createOscillator(),r=this.ctx.createGain(),o=this.ctx.createBiquadFilter();s.type="sawtooth",s.frequency.setValueAtTime(t*.93,e),s.frequency.linearRampToValueAtTime(t,e+.18),o.type="lowpass",o.frequency.value=700,o.Q.value=1.2,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.055/(n+1),e+.12),r.gain.exponentialRampToValueAtTime(1e-4,e+2.6),s.connect(o),o.connect(r),r.connect(this.bus),s.start(e),s.stop(e+2.8)})}boost(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime;this.creak(),[392,587.33].forEach((t,n)=>{let s=this.ctx.createOscillator(),r=this.ctx.createGain();s.type="triangle",s.frequency.value=t,r.gain.setValueAtTime(0,e),r.gain.linearRampToValueAtTime(.025,e+.015),r.gain.exponentialRampToValueAtTime(1e-4,e+.8),s.connect(r),r.connect(this.bus),s.start(e+n*.06),s.stop(e+1)})}creak(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime+Math.random()*.06,t=.65+Math.random()*.9,n=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sawtooth",n.frequency.setValueAtTime(44+Math.random()*18,e),n.frequency.linearRampToValueAtTime(30+Math.random()*10,e+t),r.type="bandpass",r.frequency.value=220+Math.random()*180,r.Q.value=6,s.gain.setValueAtTime(0,e),s.gain.linearRampToValueAtTime(.045,e+.12),s.gain.exponentialRampToValueAtTime(1e-4,e+t),n.connect(r),r.connect(s),s.connect(this.bus),n.start(e),n.stop(e+t+.1);let o=this.ctx.createBufferSource();o.buffer=this.noiseBuffer,o.playbackRate.value=1.8;let a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=800;let l=this.ctx.createGain();l.gain.setValueAtTime(.02,e),l.gain.exponentialRampToValueAtTime(1e-4,e+.18),o.connect(a),a.connect(l),l.connect(this.bus),o.start(e),o.stop(e+.3)}gull(){if(!this.ctx||this.muted)return;let e=this.ctx.currentTime;for(let t=0;t<2;t++){let n=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sine";let o=1300+Math.random()*480;n.frequency.setValueAtTime(o,e+t*.18),n.frequency.exponentialRampToValueAtTime(o*.64,e+.14+t*.18),r.type="bandpass",r.frequency.value=1400,r.Q.value=2.2,s.gain.setValueAtTime(0,e+t*.18),s.gain.linearRampToValueAtTime(.012,e+.025+t*.18),s.gain.exponentialRampToValueAtTime(1e-4,e+.4+t*.18),n.connect(r),r.connect(s),s.connect(this.bus),n.start(e+t*.18),n.stop(e+t*.18+.5)}}update(e){if(!this.ctx||this.muted)return;let t=this.ctx.currentTime;this.rideActive&&t>=this.nextCreak&&(this.creak(),this.nextCreak=t+1.4+Math.random()*1.8-this.energy*.5),t>=this.nextGull&&(this.gull(),this.nextGull=t+11+Math.random()*17)}};var st=i=>document.getElementById(i),rn=ai.clamp,tf=ai.lerp,Mh=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ch=ai.radToDeg,as=ai.degToRad,cs=window.matchMedia("(pointer: coarse)").matches||window.innerWidth<780,Sn=new URLSearchParams(window.location.search);Sn.has("qa")&&document.body.classList.add("qa-mode");Sn.has("debug")&&document.body.classList.add("debug-mode");var qn=st("stage"),nf=st("fatalError"),Sh=st("fatalErrorText"),bh=!1;function Bl(i){let e=i&&(i.stack||i.message)?i.stack||i.message:String(i);console.error("[BlackSail]",i),!bh&&(bh=!0,nf&&Sh&&(nf.classList.add("is-open"),Sh.textContent=e),document.body.dataset.sceneError=e.slice(0,500))}window.addEventListener("error",i=>Bl(i.error||i.message));window.addEventListener("unhandledrejection",i=>Bl(i.reason));var Xt=new bl({canvas:qn,antialias:!0,alpha:!1,powerPreference:"high-performance"}),sv=cs?17e5:33e5,lf=Math.max(1,Math.min(window.devicePixelRatio||1,cs?1.4:1.7,Math.sqrt(sv/(window.innerWidth*window.innerHeight))));Xt.setPixelRatio(lf);Xt.setSize(window.innerWidth,window.innerHeight);Xt.outputColorSpace=qt;Xt.toneMapping=Fa;Xt.toneMappingExposure=1.1;Xt.shadowMap.enabled=!cs;Xt.shadowMap.type=Ra;var ui=cs?56:40,Ll=cs?62:51,cf=cs?33:26.5,Ye=new Ot(ui,window.innerWidth/window.innerHeight,.08,900);Ye.position.set(20.2,15.7,33.6);Ye.lookAt(0,8.7,0);var Rt=ef(Xt,{mobile:cs}),go=Rt.scene,ls=new Cl,sf=!1,rs=!0,Ie={loading:st("loading"),loadFill:st("loadFill"),loadNote:st("loadNote"),topbar:st("topbar"),hero:st("hero"),viewRail:st("viewRail"),console:st("console"),hotspots:st("hotspots"),focusNote:st("focusNote"),focusClose:st("focusClose"),focusKicker:st("focusKicker"),focusTitle:st("focusTitle"),focusCopy:st("focusCopy"),focusMeta:st("focusMeta"),ampSlider:st("ampSlider"),ampValue:st("ampValue"),rideBtn:st("rideBtn"),tourBtn:st("tourBtn"),soundBtn:st("soundBtn"),moodBtn:st("moodBtn"),helpBtn:st("helpBtn"),fullBtn:st("fullBtn"),helpModal:st("helpModal"),rideHud:st("rideHud"),rideAmpLabel:st("rideAmpLabel"),rideHint:st("rideHint"),exitRide:st("exitRide"),boostBtn:st("boostBtn"),gaugeNeedle:st("gaugeNeedle"),rideAngle:st("rideAngle"),rideSide:st("rideSide"),statAngle:st("statAngle"),statHeight:st("statHeight"),statSpeed:st("statSpeed"),statG:st("statG"),toast:st("toast"),clockText:st("clockText")},Eh=class{constructor(e,t,n){this.camera=e,this.dom=t,this.canOrbit=n,this.target=new R(0,7.5,0),this.radius=34,this.theta=.58,this.phi=1.46,this.radiusGoal=34,this.autoRotate=!1,this.dragging=!1,this.pointers=new Map,this.prevPinch=0,this.velocityTheta=0,this.velocityPhi=0,this.lastMove=0,this.tween=null,this.enabled=!0,this.bind(),this.syncFromCamera()}bind(){let e=this.dom;e.addEventListener("pointerdown",n=>{if(!(!this.enabled||!this.canOrbit())&&!(n.pointerType==="mouse"&&n.button!==0)){this.tween&&this.cancelTween(),this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),this.pointers.size===1&&(this.dragging=!0,this.lastMove=performance.now(),this.velocityTheta=0,this.velocityPhi=0,e.classList.add("is-dragging")),this.pointers.size===2&&(this.prevPinch=this.pinchDistance());try{e.setPointerCapture(n.pointerId)}catch{}}}),e.addEventListener("pointermove",n=>{if(!this.pointers.has(n.pointerId))return;let s=this.pointers.get(n.pointerId);if(this.pointers.set(n.pointerId,{x:n.clientX,y:n.clientY}),!this.canOrbit())return;if(this.pointers.size===2){let a=this.pinchDistance();this.prevPinch>0&&(this.radiusGoal=rn(this.radiusGoal*(this.prevPinch/a),5.5,70)),this.prevPinch=a;return}if(!this.dragging)return;let r=n.clientX-s.x,o=n.clientY-s.y;this.theta-=r*.0041,this.phi-=o*.0035,this.phi=rn(this.phi,.24,1.9),this.velocityTheta=-r*.0022,this.velocityPhi=-o*.0018,this.lastMove=performance.now(),this.setTour(!1)});let t=n=>{this.pointers.has(n.pointerId)&&(this.pointers.delete(n.pointerId),this.pointers.size===0&&(this.dragging=!1,e.classList.remove("is-dragging"),performance.now()-this.lastMove>90&&(this.velocityTheta=0,this.velocityPhi=0)),this.pointers.size<2&&(this.prevPinch=0))};e.addEventListener("pointerup",t),e.addEventListener("pointercancel",t),e.addEventListener("lostpointercapture",t),e.addEventListener("wheel",n=>{!this.enabled||!this.canOrbit()||(n.preventDefault(),this.radiusGoal=rn(this.radiusGoal*(1+rn(n.deltaY*.0011,-.18,.18)),5.5,70))},{passive:!1})}pinchDistance(){let e=[...this.pointers.values()];return e.length<2?0:Math.hypot(e[0].x-e[1].x,e[0].y-e[1].y)}syncFromCamera(){let e=this.camera.position.clone().sub(this.target);this.radius=Math.max(1.5,e.length()),this.radiusGoal=this.radius,this.theta=Math.atan2(e.x,e.z),this.phi=Math.acos(rn(e.y/this.radius,-1,1))}setView(e,t=!1){if(t){this.tween=null,this.target.copy(e.target),this.camera.position.copy(e.pos),this.camera.lookAt(this.target),this.syncFromCamera();return}this.flyTo(e.pos,e.target,1.7)}flyTo(e,t,n=1.6){this.tween={t:0,duration:n,startPos:this.camera.position.clone(),endPos:e.clone(),startTarget:this.target.clone(),endTarget:t.clone()},this.velocityTheta=0,this.velocityPhi=0,this.autoRotate=!1}cancelTween(){this.tween=null,this.syncFromCamera()}setTour(e){this.autoRotate=e;let t=Ie.tourBtn;t&&(t.classList.toggle("is-active",e),t.setAttribute("aria-label",e?"\u505C\u6B62\u81EA\u52A8\u73AF\u6E38":"\u81EA\u52A8\u73AF\u6E38"))}update(e){if(this.tween){let n=this.tween;n.t+=e;let s=Math.min(1,n.t/n.duration),r=Mh(s);this.camera.position.lerpVectors(n.startPos,n.endPos,r),this.target.lerpVectors(n.startTarget,n.endTarget,r),this.camera.lookAt(this.target),s>=1&&(this.tween=null,this.syncFromCamera());return}this.dragging||(Math.abs(this.velocityTheta)>1e-5&&(this.theta+=this.velocityTheta,this.velocityTheta*=Math.exp(-e*4.5)),Math.abs(this.velocityPhi)>1e-5&&(this.phi=rn(this.phi+this.velocityPhi,.24,1.9),this.velocityPhi*=Math.exp(-e*4.5)),this.autoRotate&&(this.theta+=e*.055)),this.radiusGoal=rn(this.radiusGoal,5.5,70),this.radius+=(this.radiusGoal-this.radius)*(1-Math.exp(-e*7)),this.phi=rn(this.phi,.24,1.9);let t=Math.sin(this.phi);this.camera.position.set(this.target.x+this.radius*t*Math.sin(this.theta),this.target.y+this.radius*Math.cos(this.phi),this.target.z+this.radius*t*Math.cos(this.theta)),this.camera.lookAt(this.target)}},ae={mode:"explore",night:!1,dragging:!1,view:"overview",focus:null,amp:68,rideAmp:68,angle:0,speed:0,g:1,height:0,boarding:0,exit:0,energy:0};Sn.get("time")==="night"&&(ae.night=!0,Rt.setNight(!0,!0),document.body.classList.add("mode-night"));var Wt=new Eh(Ye,qn,()=>ae.mode==="explore");Wt.target.copy(Rt.views.overview.target);Wt.camera.position.copy(Rt.views.overview.pos);Wt.camera.lookAt(Rt.views.overview.target);Wt.syncFromCamera();var rv={figurehead:{anchor:"figurehead",offset:[7.9,-1.2,12.6],target:[0,.25,.1]},wheel:{anchor:"wheel",offset:[4.6,2.1,3.4],target:[0,.15,0]},flag:{anchor:"flag",offset:[9.4,-4.1,12.6],target:[0,.15,0]},gate:{static:{pos:[4.6,7,23],target:[-6.2,5.5,6.7]}}},ov={figurehead:{kicker:"DETAIL 02 / FIGUREHEAD",title:"\u938F\u91D1\u9AB7\u9AC5\u8239\u9996",copy:"\u8239\u9996\u7684\u938F\u91D1\u9AB7\u9AC5\u8FCE\u7740\u6F6E\u98CE\uFF0C\u773C\u7A9D\u91CC\u76DB\u7740\u4E00\u70B9\u65E7\u8239\u706F\u7684\u5149\u3002\u5B83\u4E0D\u53EA\u662F\u88C5\u9970\u2014\u2014\u8001\u6C34\u624B\u8BF4\uFF0C\u5B83\u4F1A\u66FF\u6574\u8239\u4EBA\u8BB0\u4F4F\u56DE\u822A\u7684\u65B9\u5411\u3002",meta:"\u590D\u523B\u81EA 1908 \u5E74\u9ED1\u5E06\u53F7\u9996\u822A\u8239\u9996\u50CF"},wheel:{kicker:"DETAIL 03 / SHIP\u2019S WHEEL",title:"\u822A\u6D77\u8235\u8F6E",copy:"\u516B\u6839\u94DC\u67C4\uFF0C\u4E00\u5708\u88AB\u624B\u638C\u78E8\u4EAE\u7684\u6728\u7F18\u3002\u8239\u957F\u4F1A\u5728\u8FD9\u91CC\u6570\u7740\u6D6A\uFF0C\u7B49\u4E0B\u4E00\u6B21\u6446\u8361\u8D8A\u8FC7\u6700\u9AD8\u70B9\uFF0C\u518D\u628A\u8239\u5934\u4EA4\u8FD8\u7ED9\u98CE\u3002",meta:"\u67DA\u6728\u4E0E\u9EC4\u94DC \xB7 \u76F4\u5F84 1.5 m"},flag:{kicker:"DETAIL 04 / JOLLY ROGER",title:"\u9ED1\u5E06\u6D77\u76D7\u65D7",copy:"\u4E3B\u6845\u9876\u4E0A\u7684\u9ED1\u5E06\u65D7\u88AB\u98CE\u6495\u51FA\u7F3A\u53E3\uFF0C\u9AB7\u9AC5\u4E0E\u4EA4\u53C9\u9AA8\u4ECD\u770B\u5F97\u6E05\u3002\u5165\u591C\u4EE5\u540E\uFF0C\u65D7\u9762\u4F1A\u63A5\u4F4F\u6700\u540E\u4E00\u76CF\u7801\u5934\u706F\uFF0C\u5728\u6845\u9876\u53D1\u4EAE\u3002",meta:"\u624B\u5DE5\u7F1D\u5236 \xB7 5.8 m\xB2 \u505A\u65E7\u5E06\u5E03"},gate:{kicker:"DETAIL 05 / THE GATE",title:"\u9ED1\u5E06\u6E7E\u5165\u53E3\u724C\u574A",copy:"\u84DD\u7EFF\u6F06\u6728\u3001\u938F\u91D1\u5377\u8349\uFF0C\u548C\u4E00\u5757\u5199\u7740\u300C\u6D77\u76D7\u8239\u300D\u7684\u65E7\u724C\u533E\u3002\u7AD9\u5728\u95E8\u4E0B\u62AC\u5934\uFF0C\u80FD\u770B\u89C1\u6845\u9876\u7684\u65D7\u6B63\u4ECE\u66AE\u8272\u91CC\u63A0\u8FC7\u3002",meta:"\u9ED1\u5E06\u6E7E\u7801\u5934 \xB7 \u767B\u8239\u53E3"}};function hf(i){if(i==="overview")return{pos:Rt.views.overview.pos.clone(),target:Rt.views.overview.target.clone()};let e=rv[i];if(!e)return null;if(e.static)return{pos:new R(...e.static.pos),target:new R(...e.static.target)};let t=Rt.getLandmarkWorld(e.anchor);return t?{pos:t.clone().add(new R(...e.offset)),target:t.clone().add(new R(...e.target))}:null}var _o=[...document.querySelectorAll(".view-btn")];function lr(i,e=!0,t=!1){if(ae.mode!=="explore")return;let n=hf(i);if(n){if(Wt.setView(n,t),ae.view=i,_o.forEach(s=>s.classList.toggle("is-active",s.dataset.view===i)),i==="overview"){Ie.focusNote.classList.remove("is-open"),ae.focus=null,document.body.classList.remove("has-focus");return}if(document.body.classList.add("has-focus"),e){let s=ov[i];s&&(Ie.focusKicker.textContent=s.kicker,Ie.focusTitle.textContent=s.title,Ie.focusCopy.textContent=s.copy,Ie.focusMeta.textContent=s.meta,Ie.focusNote.classList.add("is-open"))}}}function po(i=!0){if(Ie.focusNote.classList.remove("is-open"),ae.focus=null,document.body.classList.remove("has-focus"),i&&ae.mode==="explore"&&ae.view!=="overview"){let e=hf("overview");e&&Wt.setView(e),ae.view="overview",_o.forEach(t=>t.classList.toggle("is-active",t.dataset.view==="overview"))}}_o.forEach(i=>{i.addEventListener("click",()=>{Wt.setTour(!1),lr(i.dataset.view,i.dataset.view!=="overview")})});Ie.focusClose.addEventListener("click",()=>po(!0));var uf=[{name:"figurehead",label:"\u8239\u9996\u9AA8\u96D5",index:"02",offset:[0,0]},{name:"wheel",label:"\u822A\u6D77\u8235\u8F6E",index:"03",offset:[0,0]},{name:"flag",label:"\u6D77\u76D7\u65D7",index:"04",offset:[0,0]},{name:"gate",label:"\u5165\u53E3\u724C\u574A",index:"05",offset:[0,0]}];for(let i of uf){let e=document.createElement("button");e.type="button",e.className="hotspot",e.dataset.view=i.name,e.innerHTML=`<span class="hs-pin"><b>${i.index}</b></span><span class="hs-label"><small>${i.index}</small>${i.label}</span>`,e.setAttribute("aria-label",`\u67E5\u770B${i.label}`),e.addEventListener("click",()=>{Wt.setTour(!1),lr(i.name,!0)}),Ie.hotspots.appendChild(e),i.el=e,i.world=new R}var uo=new R;function df(){let i=ae.mode==="explore",e=window.innerWidth,t=window.innerHeight,n=e<620;for(let s of uf){if(!i){s.el.classList.remove("is-visible");continue}let r=Rt.getLandmarkWorld(s.name);if(!r){s.el.classList.remove("is-visible");continue}uo.copy(r).project(Ye);let o=(uo.x*.5+.5)*e,a=(-uo.y*.5+.5)*t;if(!(uo.z>-1&&uo.z<1&&o>(n?22:42)&&o<e-(n?22:56)&&a>(n?92:88)&&a<t-(n?178:160))){s.el.classList.remove("is-visible");continue}s.el.style.left=`${o}px`,s.el.style.top=`${a}px`,s.el.classList.add("is-visible")}}var fo=10;Ie.loadFill.style.width="10%";function ff(i,e){fo=i,Ie.loadFill.style.width=`${i}%`,e&&(Ie.loadNote.textContent=e)}var pf=null;function av(){ff(100,"\u9ED1\u5E06\u5347\u8D77\uFF0C\u7801\u5934\u653E\u884C\u3002"),window.clearInterval(pf),window.setTimeout(()=>{Ie.loading.classList.add("is-done"),document.body.classList.add("ui-ready"),window.setTimeout(()=>{Ie.loading.style.display="none"},1e3),window.setTimeout(()=>{Sn.has("qa")||di("\u62D6\u52A8\u73AF\u89C6 \xB7 \u8C03\u6574\u6446\u5E45 \xB7 \u70B9\u51FB\u300C\u767B\u4E0A\u9ED1\u5E06\u53F7\u300D\u8D77\u822A",4200),Sn.has("view")&&window.setTimeout(()=>{lr(Sn.get("view"),Sn.get("view")!=="overview",!0),df(),Pl()},500),Sn.get("night")==="1"&&window.setTimeout(()=>{ae.night=!0,Rt.setNight(!0,!0),document.body.classList.add("mode-night"),Pl()},500),Sn.get("ride")==="1"&&window.setTimeout(()=>{zl(),Sn.get("pose")!=="0"&&fv(),Pl()},700),Sn.get("exit")==="1"&&window.setTimeout(()=>{mo(),Pl()},3600),Sn.get("help")==="1"&&window.setTimeout(Ih,700)},950)},520)}pf=window.setInterval(()=>{if(fo>=93)return;let i=fo<55?8:4;ff(Math.min(93,fo+i),fo>66?"\u6B63\u5728\u70B9\u4EAE\u8239\u706F\u4E0E\u7801\u5934\u65D7\u2026\u2026":void 0)},140);window.setTimeout(av,1250);var rf=0;function di(i,e=2400){Ie.toast.textContent=i,Ie.toast.classList.add("is-show"),window.clearTimeout(rf),rf=window.setTimeout(()=>Ie.toast.classList.remove("is-show"),e)}Ie.soundBtn.classList.add("is-muted");Ie.soundBtn.setAttribute("aria-label","\u6253\u5F00\u58F0\u97F3");async function mf(){if(!sf){if(!await ls.enable()){di("\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u5B9E\u65F6\u97F3\u9891");return}sf=!0,rs=!1,Ie.soundBtn.classList.remove("is-muted"),Ie.soundBtn.setAttribute("aria-label","\u9759\u97F3"),di("\u6D77\u98CE\u3001\u6728\u6845\u4E0E\u8FDC\u5904\u9E25\u9E23\u5DF2\u5F00\u542F",2800),(ae.mode==="ride"||ae.mode==="boarding")&&ls.setRide(!0);return}rs=!rs,ls.setMuted(rs),Ie.soundBtn.classList.toggle("is-muted",rs),Ie.soundBtn.setAttribute("aria-label",rs?"\u6253\u5F00\u58F0\u97F3":"\u9759\u97F3"),di(rs?"\u5DF2\u9759\u97F3":"\u58F0\u97F3\u5DF2\u5F00\u542F",1500)}Ie.soundBtn.addEventListener("click",mf);Ie.moodBtn.addEventListener("click",()=>{ae.night=!ae.night,Rt.setNight(ae.night),document.body.classList.toggle("mode-night",ae.night),di(ae.night?"\u591C\u822A\u6A21\u5F0F \xB7 \u7801\u5934\u706F\u4E0E\u661F\u5B50\u4EAE\u4E86":"\u66AE\u8272\u6A21\u5F0F \xB7 \u91D1\u8272\u65F6\u523B",2200)});function Ih(){Ie.helpModal.classList.add("is-open"),Ie.helpModal.setAttribute("aria-hidden","false")}function Dl(){Ie.helpModal.classList.remove("is-open"),Ie.helpModal.setAttribute("aria-hidden","true")}Ie.helpBtn.addEventListener("click",Ih);Ie.helpModal.querySelectorAll("[data-close-modal]").forEach(i=>i.addEventListener("click",Dl));Ie.fullBtn.addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{di("\u5F53\u524D\u7A97\u53E3\u65E0\u6CD5\u8FDB\u5165\u5168\u5C4F")}});function Ol(){let i=Number(Ie.ampSlider.value);ae.amp=i,Ie.ampValue.textContent=`${i}\xB0`;let e=(i-30)/48*100;Ie.ampSlider.style.setProperty("--fill",`${e}%`)}Ie.ampSlider.addEventListener("input",Ol);Ol();var or=new R,ar=new ln,of=new ln,Il=new Ot,lv=new R(0,0,1),hi=new R,yh=new R,At={theta:.32,phi:1.34,radius:cf,pointer:null,lastX:0,lastY:0},Ul=null,os=null,gf=new R,_f=new ln,yf=ui,Th=new R,vf=new ln,wh=ui,vh=new R,Ah=new R,Gt=68;function Rh(i,e,t){hi.set(Math.sin(ae.angle)*1.1,13.65,.2),t&&t.copy(hi);let n=At.theta+Math.sin(rr*.16)*.02+ae.angle*.075,s=rn(At.phi+Math.abs(ae.angle)*.012,.45,1.43),r=At.radius,o=Math.sin(s);i.set(hi.x+r*o*Math.sin(n),hi.y+r*Math.cos(s),hi.z+r*o*Math.cos(n)),Il.position.copy(i),Il.up.set(0,1,0),Il.lookAt(hi),e.copy(Il.quaternion),of.setFromAxisAngle(lv,-ae.angle*.055-ae.speed*.0025),e.multiply(of)}function zl(){if(ae.mode!=="explore")return;let i=ae.view!=="overview"||document.body.classList.contains("has-focus");po(!1),Wt.setTour(!1),os=i?{pos:Rt.views.overview.pos.clone(),target:Rt.views.overview.target.clone(),fov:ui}:{pos:Ye.position.clone(),target:Wt.target.clone(),fov:Ye.fov},i&&(ae.view="overview",_o.forEach(e=>e.classList.toggle("is-active",e.dataset.view==="overview"))),gf.copy(Ye.position),_f.copy(Ye.quaternion),yf=Ye.fov,Gt=Number(Ie.ampSlider.value),ae.rideAmp=Gt,ae.mode="boarding",ae.boarding=0,At.theta=.32,At.phi=1.34,At.radius=cf,At.pointer=null,document.body.classList.add("is-riding"),qn.classList.add("is-riding"),Ie.rideAmpLabel.textContent=`${Gt}\xB0 \u6446\u5E45`,Ie.rideHint.textContent="\u62D6\u52A8\u753B\u9762\uFF0C\u73AF\u7ED5\u9ED1\u5E06\u53F7",ls.setRide(!0)}function mo(){if(ae.mode!=="ride"&&ae.mode!=="boarding")return;ae.mode="exiting",ae.exit=0,Ul={pos:Ye.position.clone(),quat:Ye.quaternion.clone(),fov:Ye.fov},vh.copy(os?os.pos:Rt.views.overview.pos),Ah.copy(os?os.target:Rt.views.overview.target);let i=new Ot;i.position.copy(vh),i.lookAt(Ah),vf.copy(i.quaternion),Th.copy(vh),wh=os?os.fov:ui,ls.setRide(!1),At.pointer=null}Ie.rideBtn.addEventListener("click",zl);Ie.exitRide.addEventListener("click",mo);Ie.boostBtn.addEventListener("click",Ph);function Ph(){if(!(ae.mode!=="ride"&&ae.mode!=="boarding")){if(Gt>=78){di("\u5DF2\u7ECF\u5230\u6700\u9AD8\u6446\u5E45 \xB7 78\xB0 \u662F\u9ED1\u5E06\u53F7\u7684\u6781\u9650",1800);return}Gt=Math.min(78,Gt+6),ae.rideAmp=Gt,Ie.ampSlider.value=String(Gt),Ol(),Ie.rideAmpLabel.textContent=`${Gt}\xB0 \u6446\u5E45`,Ie.boostBtn.classList.remove("is-pulse"),Ie.boostBtn.offsetWidth,Ie.boostBtn.classList.add("is-pulse"),ls.boost(),Gt>76&&di("\u9ED1\u5E06\u53F7\u6B63\u5728\u6311\u6218 80\xB0 \u6446\u5E45",1600)}}Ie.tourBtn.addEventListener("click",()=>{if(ae.mode!=="explore")return;let i=!Wt.autoRotate;i&&(po(!0),_o.forEach(e=>e.classList.toggle("is-active",e.dataset.view==="overview")),ae.view="overview",di("\u81EA\u52A8\u73AF\u6E38 \xB7 \u62D6\u52A8\u753B\u9762\u53EF\u968F\u65F6\u63A5\u7BA1",2200)),Wt.setTour(i)});qn.addEventListener("pointerdown",i=>{if(ae.mode==="ride"){At.pointer=i.pointerId,At.lastX=i.clientX,At.lastY=i.clientY;try{qn.setPointerCapture(i.pointerId)}catch{}}});qn.addEventListener("pointermove",i=>{if(ae.mode!=="ride"||At.pointer!==i.pointerId)return;let e=i.clientX-At.lastX,t=i.clientY-At.lastY;At.lastX=i.clientX,At.lastY=i.clientY,At.theta-=e*.0036,At.phi=rn(At.phi-t*.0028,.55,1.44)});var xf=i=>{At.pointer===i.pointerId&&(At.pointer=null)};qn.addEventListener("pointerup",xf);qn.addEventListener("pointercancel",xf);qn.addEventListener("wheel",i=>{ae.mode==="ride"&&(i.preventDefault(),At.radius=rn(At.radius*(1+rn(i.deltaY*8e-4,-.12,.12)),15,34))},{passive:!1});window.addEventListener("keydown",i=>{if(Ie.helpModal.classList.contains("is-open")){i.key==="Escape"&&Dl();return}let e=i.target&&i.target.tagName;if(e==="INPUT"||e==="TEXTAREA"||e==="BUTTON"){i.key==="Escape"&&(Ie.helpModal.classList.contains("is-open")?Dl():ae.mode==="ride"||ae.mode==="boarding"?mo():po(!0));return}i.code==="Space"?(i.preventDefault(),ae.mode==="ride"||ae.mode==="boarding"?Ph():ae.mode==="explore"&&zl()):i.key==="Escape"?Ie.helpModal.classList.contains("is-open")?Dl():ae.mode==="ride"||ae.mode==="boarding"?mo():Ie.focusNote.classList.contains("is-open")&&po(!0):i.key.toLowerCase()==="m"?mf():i.key.toLowerCase()==="r"?ae.mode==="explore"&&(Wt.setTour(!1),lr("overview",!1)):i.key.toLowerCase()==="f"?Ie.fullBtn.click():i.key.toLowerCase()==="h"?Ih():i.key>="1"&&i.key<="5"&&ae.mode==="explore"&&lr(["overview","figurehead","wheel","flag","gate"][Number(i.key)-1],Number(i.key)>1)});var Ht={phase:.75,amp:as(3.2),maxAmp:as(78),speed:0,angle:0},af=6.8;function cv(i){let e=ae.mode==="ride"||ae.mode==="boarding",t=as(e?Gt:3.2),n=e?.68:.8;Ht.amp+=(t-Ht.amp)*(1-Math.exp(-i*n));let s=Ht.amp/Ht.maxAmp,r=e?1.08+s*.13:.58;Ht.phase+=i*r;let o=Ht.amp*Math.sin(Ht.phase);Ht.angle=o,Ht.speed=Ht.amp*r*Math.cos(Ht.phase);let a=Rt.ship.rig;a.rotation.z=o,a.rotation.x=Math.sin(Ht.phase*2+.4)*.008*s,a.rotation.y=Math.sin(Ht.phase*.7+1.2)*.006*s,a.updateWorldMatrix(!0,!0),ae.angle=o,ae.speed=Math.abs(Ht.speed)*af,ae.g=1+af*Ht.speed*Ht.speed/9.81,ae.energy=rn(s*1.05,0,1),Rt.setEnergy(ae.energy)}function Mf(i){if(ae.mode!=="ride"&&ae.mode!=="boarding"&&ae.mode!=="exiting")return;let e=Math.abs(Ch(ae.angle)),t=ae.angle>=0?1:-1,n=e<1.2?"\u6B63\u4E2D":t>0?"\u5DE6\u6446":"\u53F3\u6446";yh.set(0,-7.35,0),Rt.ship.rig.localToWorld(yh);let s=Math.max(0,yh.y-.7),r=ae.speed,o=ae.g;Ie.gaugeNeedle.style.transform=`rotate(${e*.92*t}deg)`,Ie.rideAngle.textContent=`${Math.round(e)}\xB0`,Ie.rideSide.textContent=n,Ie.statAngle.textContent=`${Math.round(e)}\xB0`,Ie.statHeight.innerHTML=`${Math.max(0,s).toFixed(1)}<em>m</em>`,Ie.statSpeed.innerHTML=`${r.toFixed(1)}<em>m/s</em>`,Ie.statG.innerHTML=`${o.toFixed(2)}<em>g</em>`;let a=rn(r/12*.75+e/78*.22,0,1);document.documentElement.style.setProperty("--rush",a.toFixed(2)),ae.mode==="ride"&&(Ie.rideHint.textContent=r>7?"\u98CE\u4ECE\u8033\u8FB9\u8FC7\u53BB\u4E86":r>3?"\u8239\u5934\u6B63\u5728\u62AC\u9AD8":"\u62D6\u52A8\u753B\u9762\uFF0C\u73AF\u7ED5\u9ED1\u5E06\u53F7")}var rr=0,hv=new io,Nl=0,xh=0,Fl=0;function uv(){let i=Math.min(hv.getDelta(),.041666666666666664);if(rr+=i,cv(i),Rt.update(i,rr),ae.mode==="boarding"){ae.boarding+=i;let t=Mh(Math.min(1,ae.boarding/2.15));Rh(or,ar,hi),Ye.position.lerpVectors(gf,or,t),Ye.quaternion.copy(_f).slerp(ar,t),Ye.fov=tf(yf,Ll,t),Ye.updateProjectionMatrix(),ae.boarding>=2.15&&(ae.mode="ride",Ye.fov=Ll,Ye.updateProjectionMatrix())}else if(ae.mode==="ride"){Rh(or,ar,hi);let t=1-Math.exp(-i*6.5);Ye.position.lerp(or,t),Ye.quaternion.slerp(ar,1-Math.exp(-i*7.5));let n=Math.min(1,ae.speed/12);n>.08&&(Ye.position.x+=(Math.sin(rr*31.7)+Math.sin(rr*17.3))*.009*n,Ye.position.y+=Math.cos(rr*23.1)*.006*n);let s=Ll+Math.min(2.2,ae.speed*.16);Ye.fov+=(s-Ye.fov)*(1-Math.exp(-i*5)),Ye.updateProjectionMatrix()}else if(ae.mode==="exiting"){ae.exit+=i;let t=Mh(Math.min(1,ae.exit/2));Ye.position.lerpVectors(Ul.pos,Th,t),Ye.quaternion.copy(Ul.quat).slerp(vf,t),Ye.fov=tf(Ul.fov,wh,t),Ye.updateProjectionMatrix(),ae.exit>=2&&(ae.mode="explore",document.body.classList.remove("is-riding"),qn.classList.remove("is-riding"),Wt.target.copy(Ah),Wt.camera.position.copy(Th),Wt.syncFromCamera(),Ye.fov=wh,Ye.updateProjectionMatrix(),ae.energy=0,document.documentElement.style.setProperty("--rush","0"),At.pointer=null)}else Wt.update(i),Ye.fov!==ui&&(Ye.fov+=(ui-Ye.fov)*(1-Math.exp(-i*6)),Math.abs(Ye.fov-ui)<.05&&(Ye.fov=ui),Ye.updateProjectionMatrix());df(),Mf(i),Xt.render(go,Ye),ls.update(i),Nl++;let e=performance.now();e-xh>1e3&&(Fl=Math.round(Nl*1e3/(e-xh)),Nl=0,xh=e)}function dv(){try{uv()}catch(i){Bl(i),Xt.setAnimationLoop(null)}}function Pl(){Xt.render(go,Ye)}function fv(){if(ae.mode!=="boarding"&&ae.mode!=="ride")return;ae.mode="ride",ae.boarding=2.15,Gt=Number(Ie.ampSlider.value),ae.rideAmp=Gt;let i=Math.min(as(30),as(Gt));Ht.amp=as(Gt),Ht.phase=Math.asin(i/Ht.amp);let e=Rt.ship.rig;e.rotation.z=i,e.rotation.x=0,e.rotation.y=0,e.updateWorldMatrix(!0,!0),ae.angle=i,ae.speed=6.4,ae.g=1.65,ae.energy=.9,Rt.setEnergy(ae.energy),Rh(or,ar,hi),Ye.position.copy(or),Ye.quaternion.copy(ar),Ye.fov=Ll,Ye.updateProjectionMatrix(),Ie.rideAmpLabel.textContent=`${Gt}\xB0 \u6446\u5E45`,Mf(.016)}function pv(){let i=window.innerWidth,e=window.innerHeight;Ye.aspect=i/e,Ye.updateProjectionMatrix(),Xt.setPixelRatio(lf),Xt.setSize(i,e)}window.addEventListener("resize",pv);try{Xt.compile(go,Ye)}catch(i){Bl(i)}Xt.setAnimationLoop(dv);window.setInterval(()=>{if(!document.body.classList.contains("debug-mode"))return;let i=st("debugState");i&&(i.textContent=JSON.stringify({fps:Fl,mode:ae.mode,frames:Nl,ride:{amp:ae.rideAmp,angle:Number(Ch(ae.angle).toFixed(1)),energy:Number(ae.energy.toFixed(2))},render:Xt.info.render,memory:Xt.info.memory,error:bh?Sh?.textContent:null,hasFocus:document.body.classList.contains("has-focus"),viewport:[window.innerWidth,window.innerHeight],layout:(()=>{let e=n=>{let s=document.querySelector(n);if(!s)return null;let r=s.getBoundingClientRect();return[Math.round(r.left),Math.round(r.top),Math.round(r.width),Math.round(r.height)]},t=(n,s)=>{let r=document.querySelector(n);if(!r)return null;let o=getComputedStyle(r);return Object.fromEntries(s.map(a=>[a,o.getPropertyValue(a)]))};return{ids:[...document.querySelectorAll("button.icon-btn")].map(n=>n.id),toolCount:document.querySelectorAll(".tools .icon-btn").length,sheets:[...document.styleSheets].map(n=>n.href),computed:{tools:t(".tools",["width","flex","min-width","display","gap"]),console:t(".console",["width","left","right","max-width","transform","display"]),inner:t(".console-inner",["grid-template-columns","grid-template-areas","width"]),actions:t(".console-actions",["width","display","min-width"]),board:t(".btn-board",["width","flex","min-width"])},topbar:e(".topbar"),brand:e(".brand"),tools:e(".tools"),toolButtons:[...document.querySelectorAll(".tools .icon-btn")].map(n=>{let s=n.getBoundingClientRect();return[Math.round(s.left),Math.round(s.width),getComputedStyle(n).display,getComputedStyle(n).opacity]}),console:e(".console"),actions:e(".console-actions"),board:e(".btn-board"),amp:e(".amp-control")}})(),children:go.children.length,camera:Ye.position.toArray().map(e=>Number(e.toFixed(2)))}))},1200);window.__pirate={ready:!0,world:Rt,scene:go,camera:Ye,renderer:Xt,orbit:Wt,state:ae,fps:()=>Fl,board:zl,exit:mo,boost:Ph,setView:lr,setAmp:i=>{Ie.ampSlider.value=String(rn(i,30,78)),Ol(),(ae.mode==="ride"||ae.mode==="boarding")&&(Gt=ae.amp,Ie.rideAmpLabel.textContent=`${Gt}\xB0 \u6446\u5E45`)},setNight:i=>{ae.night=i,Rt.setNight(i),document.body.classList.toggle("mode-night",i)},getInfo:()=>({mode:ae.mode,angle:Ch(ae.angle),energy:ae.energy,fps:Fl,shipY:Rt.ship.rig.position.y,camera:Ye.position.toArray(),view:ae.view})};})();
