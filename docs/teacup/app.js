(()=>{var Xh=0,Mc=1,qh=2;var Sc=1,Sa=2,Vn=3,ei=0,Vt=1,wt=2,Dn=0,Gi=1,jt=2,bc=3,Ec=4,Yh=5,xi=100,Zh=101,$h=102,Jh=103,Kh=104,Qh=200,jh=201,eu=202,tu=203,ko=204,Ho=205,nu=206,iu=207,su=208,ru=209,ou=210,au=211,lu=212,cu=213,hu=214,ba=0,Ea=1,Ta=2,Wi=3,wa=4,Aa=5,Ra=6,Ca=7,Tc=0,uu=1,du=2,ai=0,Pa=1,Ia=2,La=3,Vs=4,Da=5,Ua=6,Na=7;var wc=300,Qi=301,ji=302,Pi=303,Fa=304,qr=306,Xi=1e3,yi=1001,Vo=1002,nn=1003,fu=1004;var Yr=1005;var Rn=1006,Ba=1007;var Ii=1008;var Un=1009,Ac=1010,Rc=1011,Gs=1012,Oa=1013,Li=1014,Nn=1015,_n=1016,za=1017,ka=1018,Ws=1020,Cc=35902,Pc=35899,Ic=1021,Lc=1022,vn=1023,Is=1026,Xs=1027,Ha=1028,Va=1029,Dc=1030,Ga=1031;var Wa=1033,Zr=33776,$r=33777,Jr=33778,Kr=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,$a=36196,Ja=37492,Ka=37496,Qa=37808,ja=37809,el=37810,tl=37811,nl=37812,il=37813,sl=37814,rl=37815,ol=37816,al=37817,ll=37818,cl=37819,hl=37820,ul=37821,dl=36492,fl=36494,pl=36495,ml=36283,gl=36284,_l=36285,vl=36286;var Mr=2300,Go=2301,zo=2302,dc=2400,fc=2401,pc=2402;var pu=3200,mu=3201;var Uc=0,gu=1,li="",Ft="srgb",qi="srgb-linear",Sr="linear",lt="srgb";var Vi=7680;var mc=519,_u=512,vu=513,yu=514,Nc=515,xu=516,Mu=517,Su=518,bu=519,Wo=35044;var Fc="300 es",An=2e3,br=2001;var ti=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=1234567,_r=Math.PI/180,Ls=180/Math.PI;function Qn(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function Bc(n,e){return(n%e+e)%e}function Ed(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Td(n,e,t){return n!==e?(t-n)/(e-n):0}function vr(n,e,t){return(1-t)*n+t*e}function wd(n,e,t,i){return vr(n,e,1-Math.exp(-t*i))}function Ad(n,e=1){return e-Math.abs(Bc(n,e*2)-e)}function Rd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Cd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Pd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Id(n,e){return n+Math.random()*(e-n)}function Ld(n){return n*(.5-Math.random())}function Dd(n){n!==void 0&&(fh=n);let e=fh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ud(n){return n*_r}function Nd(n){return n*Ls}function Fd(n){return(n&n-1)===0&&n!==0}function Bd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Od(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function zd(n,e,t,i,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),h=o((e+i)/2),d=r((e-i)/2),f=o((e-i)/2),u=r((i-e)/2),m=o((i-e)/2);switch(s){case"XYX":n.set(a*h,l*d,l*f,a*c);break;case"YZY":n.set(l*f,a*h,l*d,a*c);break;case"ZXZ":n.set(l*d,l*f,a*h,a*c);break;case"XZX":n.set(a*h,l*m,l*u,a*c);break;case"YXY":n.set(l*u,a*h,l*m,a*c);break;case"ZYZ":n.set(l*m,l*u,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var dt={DEG2RAD:_r,RAD2DEG:Ls,generateUUID:Qn,clamp:Ze,euclideanModulo:Bc,mapLinear:Ed,inverseLerp:Td,lerp:vr,damp:wd,pingpong:Ad,smoothstep:Rd,smootherstep:Cd,randInt:Pd,randFloat:Id,randFloatSpread:Ld,seededRandom:Dd,degToRad:Ud,radToDeg:Nd,isPowerOfTwo:Fd,ceilPowerOfTwo:Bd,floorPowerOfTwo:Od,setQuaternionFromProperEuler:zd,normalize:ht,denormalize:wn},le=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cn=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],u=r[o+1],m=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=u,e[t+2]=m,e[t+3]=_;return}if(d!==_||l!==f||c!==u||h!==m){let g=1-a,p=l*f+c*u+h*m+d*_,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){let w=Math.sqrt(b),T=Math.atan2(w,p*M);g=Math.sin(g*T)/w,a=Math.sin(a*T)/w}let x=a*M;if(l=l*g+f*x,c=c*g+u*x,h=h*g+m*x,d=d*g+_*x,g===1-a){let w=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=w,c*=w,h*=w,d*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,o){let a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return e[t]=a*m+h*d+l*u-c*f,e[t+1]=l*m+h*f+c*d-a*u,e[t+2]=c*m+h*u+a*f-l*d,e[t+3]=h*m-a*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+a+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>d){let u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){let u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*i+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),h=2*(a*t-r*s),d=2*(r*i-o*t);return this.x=t+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ol.copy(this).projectOnVector(e),this.sub(Ol)}reflect(e){return this.sub(Ol.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ol=new C,ph=new Cn,Xe=class n{constructor(e,t,i,s,r,o,a,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],m=i[8],_=s[0],g=s[3],p=s[6],M=s[1],b=s[4],x=s[7],w=s[2],T=s[5],P=s[8];return r[0]=o*_+a*M+l*w,r[3]=o*g+a*b+l*T,r[6]=o*p+a*x+l*P,r[1]=c*_+h*M+d*w,r[4]=c*g+h*b+d*T,r[7]=c*p+h*x+d*P,r[2]=f*_+u*M+m*w,r[5]=f*g+u*b+m*T,r[8]=f*p+u*x+m*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=t*d+i*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=d*_,e[1]=(s*c-h*i)*_,e[2]=(a*i-s*o)*_,e[3]=f*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=u*_,e[7]=(i*l-c*t)*_,e[8]=(o*t-i*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(zl.makeScale(e,t)),this}rotate(e){return this.premultiply(zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},zl=new Xe;function Oc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Eu(){let n=Er("canvas");return n.style.display="block",n}var mh={};function Ds(n){n in mh||(mh[n]=!0,console.warn(n))}function Tu(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var gh=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_h=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let n={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===lt&&(s.r=jn(s.r),s.g=jn(s.g),s.b=jn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(s.r=Ps(s.r),s.g=Ps(s.g),s.b=Ps(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Sr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ds("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ds("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[qi]:{primaries:e,whitePoint:i,transfer:Sr,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:gh,fromXYZ:_h,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),n}var nt=kd();function jn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ps(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var fs,Xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=Er("canvas")),fs.width=e.width,fs.height=e.height;let s=fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Er("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=jn(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(jn(t[i]/255)*255):t[i]=jn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hd=0,Us=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Qn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(kl(s[o].image)):r.push(kl(s[o]))}else r=kl(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function kl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vd=0,Hl=new C,Qt=class n extends ti{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=yi,s=yi,r=Rn,o=Ii,a=vn,l=Un,c=n.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=Qn(),this.name="",this.source=new Us(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xi:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Vo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xi:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Vo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=wc;Qt.DEFAULT_ANISOTROPY=1;var ut=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,x=(u+1)/2,w=(p+1)/2,T=(h+f)/4,P=(d+_)/4,D=(m+g)/4;return b>x&&b>w?b<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(b),s=T/i,r=P/i):x>w?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=D/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=P/r,s=D/r),this.set(i,s,r,t),this}let M=Math.sqrt((g-m)*(g-m)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(d-_)/M,this.z=(f-h)/M,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends ti{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);let s={width:e,height:t,depth:i.depth},r=new Qt(s);this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){let t={minFilter:Rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Us(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xt=class extends qo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Tr=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends Qt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,bn):bn.fromBufferAttribute(r,o),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(or),fo.subVectors(this.max,or),ps.subVectors(e.a,or),ms.subVectors(e.b,or),gs.subVectors(e.c,or),fi.subVectors(ms,ps),pi.subVectors(gs,ms),Oi.subVectors(ps,gs);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!Vl(t,ps,ms,gs,fo)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,ps,ms,gs,fo))?!1:(po.crossVectors(fi,pi),t=[po.x,po.y,po.z],Vl(t,ps,ms,gs,fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qn=[new C,new C,new C,new C,new C,new C,new C,new C],bn=new C,uo=new kn,ps=new C,ms=new C,gs=new C,fi=new C,pi=new C,Oi=new C,or=new C,fo=new C,po=new C,zi=new C;function Vl(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){zi.fromArray(n,r);let a=s.x*Math.abs(zi.x)+s.y*Math.abs(zi.y)+s.z*Math.abs(zi.z),l=e.dot(zi),c=t.dot(zi),h=i.dot(zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Gd=new kn,ar=new C,Gl=new C,Hn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);let t=ar.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ar,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Gl)),this.expandByPoint(ar.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yn=new C,Wl=new C,mo=new C,mi=new C,Xl=new C,go=new C,ql=new C,Yi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Wl.copy(e).add(t).multiplyScalar(.5),mo.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(mo),a=mi.dot(this.direction),l=-mi.dot(mo),c=mi.lengthSq(),h=Math.abs(1-o*o),d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){let _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Wl).addScaledVector(mo,f),u}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);let i=Yn.dot(this.direction),s=Yn.dot(Yn)-i*i,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,i,s,r){Xl.subVectors(t,e),go.subVectors(i,e),ql.crossVectors(Xl,go);let o=this.direction.dot(ql),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);let l=a*this.direction.dot(go.crossVectors(mi,go));if(l<0)return null;let c=a*this.direction.dot(Xl.cross(mi));if(c<0||l+c>o)return null;let h=-a*mi.dot(ql);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},at=class n{constructor(e,t,i,s,r,o,a,l,c,h,d,f,u,m,_,g){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,h,d,f,u,m,_,g)}set(e,t,i,s,r,o,a,l,c,h,d,f,u,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/_s.setFromMatrixColumn(e,0).length(),r=1/_s.setFromMatrixColumn(e,1).length(),o=1/_s.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=o*h,u=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+m*c,t[5]=f-_*c,t[9]=-a*l,t[2]=_-f*c,t[6]=m+u*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,m=c*h,_=c*d;t[0]=f+_*a,t[4]=m*a-u,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=u*a-m,t[6]=_+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,m=c*h,_=c*d;t[0]=f-_*a,t[4]=-o*d,t[8]=m+u*a,t[1]=u+m*a,t[5]=o*h,t[9]=_-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,u=o*d,m=a*h,_=a*d;t[0]=l*h,t[4]=m*c-u,t[8]=f*c+_,t[1]=l*d,t[5]=_*c+f,t[9]=u*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,u=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-f*d,t[8]=m*d+u,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=u*d+m,t[10]=f-_*d}else if(e.order==="XZY"){let f=o*l,u=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+_,t[5]=o*h,t[9]=u*d-m,t[2]=m*d-u,t[6]=a*h,t[10]=_*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wd,e,Xd)}lookAt(e,t,i){let s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),gi.crossVectors(i,an),gi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),gi.crossVectors(i,an)),gi.normalize(),_o.crossVectors(an,gi),s[0]=gi.x,s[4]=_o.x,s[8]=an.x,s[1]=gi.y,s[5]=_o.y,s[9]=an.y,s[2]=gi.z,s[6]=_o.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],m=i[2],_=i[6],g=i[10],p=i[14],M=i[3],b=i[7],x=i[11],w=i[15],T=s[0],P=s[4],D=s[8],E=s[12],S=s[1],U=s[5],z=s[9],G=s[13],q=s[2],$=s[6],V=s[10],oe=s[14],W=s[3],ue=s[7],de=s[11],Ie=s[15];return r[0]=o*T+a*S+l*q+c*W,r[4]=o*P+a*U+l*$+c*ue,r[8]=o*D+a*z+l*V+c*de,r[12]=o*E+a*G+l*oe+c*Ie,r[1]=h*T+d*S+f*q+u*W,r[5]=h*P+d*U+f*$+u*ue,r[9]=h*D+d*z+f*V+u*de,r[13]=h*E+d*G+f*oe+u*Ie,r[2]=m*T+_*S+g*q+p*W,r[6]=m*P+_*U+g*$+p*ue,r[10]=m*D+_*z+g*V+p*de,r[14]=m*E+_*G+g*oe+p*Ie,r[3]=M*T+b*S+x*q+w*W,r[7]=M*P+b*U+x*$+w*ue,r[11]=M*D+b*z+x*V+w*de,r[15]=M*E+b*G+x*oe+w*Ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],m=e[3],_=e[7],g=e[11],p=e[15];return m*(+r*l*d-s*c*d-r*a*f+i*c*f+s*a*u-i*l*u)+_*(+t*l*u-t*c*f+r*o*f-s*o*u+s*c*h-r*l*h)+g*(+t*c*d-t*a*u-r*o*d+i*o*u+r*a*h-i*c*h)+p*(-s*a*h-t*l*d+t*a*f+s*o*d-i*o*f+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],m=e[12],_=e[13],g=e[14],p=e[15],M=d*g*c-_*f*c+_*l*u-a*g*u-d*l*p+a*f*p,b=m*f*c-h*g*c-m*l*u+o*g*u+h*l*p-o*f*p,x=h*_*c-m*d*c+m*a*u-o*_*u-h*a*p+o*d*p,w=m*d*l-h*_*l-m*a*f+o*_*f+h*a*g-o*d*g,T=t*M+i*b+s*x+r*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return e[0]=M*P,e[1]=(_*f*r-d*g*r-_*s*u+i*g*u+d*s*p-i*f*p)*P,e[2]=(a*g*r-_*l*r+_*s*c-i*g*c-a*s*p+i*l*p)*P,e[3]=(d*l*r-a*f*r-d*s*c+i*f*c+a*s*u-i*l*u)*P,e[4]=b*P,e[5]=(h*g*r-m*f*r+m*s*u-t*g*u-h*s*p+t*f*p)*P,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*P,e[7]=(o*f*r-h*l*r+h*s*c-t*f*c-o*s*u+t*l*u)*P,e[8]=x*P,e[9]=(m*d*r-h*_*r-m*i*u+t*_*u+h*i*p-t*d*p)*P,e[10]=(o*_*r-m*a*r+m*i*c-t*_*c-o*i*p+t*a*p)*P,e[11]=(h*a*r-o*d*r-h*i*c+t*d*c+o*i*u-t*a*u)*P,e[12]=w*P,e[13]=(h*_*s-m*d*s+m*i*f-t*_*f-h*i*g+t*d*g)*P,e[14]=(m*a*s-o*_*s-m*i*l+t*_*l+o*i*g-t*a*g)*P,e[15]=(o*d*s-h*a*s+h*i*l-t*d*l-o*i*f+t*a*f)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,_=o*h,g=o*d,p=a*d,M=l*c,b=l*h,x=l*d,w=i.x,T=i.y,P=i.z;return s[0]=(1-(_+p))*w,s[1]=(u+x)*w,s[2]=(m-b)*w,s[3]=0,s[4]=(u-x)*T,s[5]=(1-(f+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+b)*P,s[9]=(g-M)*P,s[10]=(1-(f+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=_s.set(s[0],s[1],s[2]).length(),o=_s.set(s[4],s[5],s[6]).length(),a=_s.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],En.copy(this);let c=1/r,h=1/o,d=1/a;return En.elements[0]*=c,En.elements[1]*=c,En.elements[2]*=c,En.elements[4]*=h,En.elements[5]*=h,En.elements[6]*=h,En.elements[8]*=d,En.elements[9]*=d,En.elements[10]*=d,t.setFromRotationMatrix(En),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=An,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(i-s),f=(t+e)/(t-e),u=(i+s)/(i-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===An)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===br)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=An,l=!1){let c=this.elements,h=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),u=-(i+s)/(i-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===An)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===br)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},_s=new C,En=new at,Wd=new C(0,0,0),Xd=new C(1,1,1),gi=new C,_o=new C,an=new C,vh=new at,yh=new Cn,Pn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yh.setFromEuler(this),this.setFromQuaternion(yh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pn.DEFAULT_ORDER="XYZ";var Ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qd=0,xh=new C,vs=new Cn,Zn=new at,vo=new C,lr=new C,Yd=new C,Zd=new Cn,Mh=new C(1,0,0),Sh=new C(0,1,0),bh=new C(0,0,1),Eh={type:"added"},$d={type:"removed"},ys={type:"childadded",child:null},Yl={type:"childremoved",child:null},Dt=class n extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new C,t=new Pn,i=new Cn,s=new C(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Xe}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Mh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(lr,vo,this.up):Zn.lookAt(vo,lr,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(Zn),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eh),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($d),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),u=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new C(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=new C,$n=new C,Zl=new C,Jn=new C,xs=new C,Ms=new C,Th=new C,$l=new C,Jl=new C,Kl=new C,Ql=new ut,jl=new ut,ec=new ut,Kn=class n{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Tn.subVectors(s,t),$n.subVectors(i,t),Zl.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot($n),l=Tn.dot(Zl),c=$n.dot($n),h=$n.dot(Zl),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,o){return Ql.setScalar(0),jl.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(ec,r.z),o}static isFrontFacing(e,t,i,s){return Tn.subVectors(i,t),$n.subVectors(e,t),Tn.cross($n).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Tn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,i),Ms.subVectors(r,i),$l.subVectors(e,i);let l=xs.dot($l),c=Ms.dot($l);if(l<=0&&c<=0)return t.copy(i);Jl.subVectors(e,s);let h=xs.dot(Jl),d=Ms.dot(Jl);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(xs,o);Kl.subVectors(e,r);let u=xs.dot(Kl),m=Ms.dot(Kl);if(m>=0&&u<=m)return t.copy(r);let _=u*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(i).addScaledVector(Ms,a);let g=h*m-u*d;if(g<=0&&d-h>=0&&u-m>=0)return Th.subVectors(r,s),a=(d-h)/(d-h+(u-m)),t.copy(s).addScaledVector(Th,a);let p=1/(g+_+f);return o=_*p,a=f*p,t.copy(i).addScaledVector(xs,o).addScaledVector(Ms,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},wu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},yo={h:0,s:0,l:0};function tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=nt.workingColorSpace){if(e=Bc(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=tc(o,r,e+1/3),this.g=tc(o,r,e),this.b=tc(o,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let i=wu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return nt.workingToColorSpace(Wt.copy(this),e),Math.round(Ze(Wt.r*255,0,255))*65536+Math.round(Ze(Wt.g*255,0,255))*256+Math.round(Ze(Wt.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Wt.copy(this),t);let i=Wt.r,s=Wt.g,r=Wt.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Ft){nt.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,s=Wt.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(yo);let i=vr(_i.h,yo.h,t),s=vr(_i.s,yo.s,t),r=vr(_i.l,yo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new ge;ge.NAMES=wu;var Jd=0,In=class extends ti{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=Gi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=Wi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Gi&&(i.blending=this.blending),this.side!==ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ko&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ht=class extends In{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=Tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ut=new C,xo=new le,Kd=0,Lt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Kd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Wo,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)xo.fromBufferAttribute(this,t),xo.applyMatrix3(e),this.setXY(t,xo.x,xo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}};var wr=class extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ar=class extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ye=class extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Qd=0,pn=new at,nc=new Dt,Ss=new C,ln=new kn,cr=new kn,zt=new C,pt=class n extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?Ar:wr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pn.makeRotationFromQuaternion(e),this.applyMatrix4(pn),this}rotateX(e){return pn.makeRotationX(e),this.applyMatrix4(pn),this}rotateY(e){return pn.makeRotationY(e),this.applyMatrix4(pn),this}rotateZ(e){return pn.makeRotationZ(e),this.applyMatrix4(pn),this}translate(e,t,i){return pn.makeTranslation(e,t,i),this.applyMatrix4(pn),this}scale(e,t,i){return pn.makeScale(e,t,i),this.applyMatrix4(pn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ye(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];cr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(ln.min,cr.min),ln.expandByPoint(zt),zt.addVectors(ln.max,cr.max),ln.expandByPoint(zt)):(ln.expandByPoint(cr.min),ln.expandByPoint(cr.max))}ln.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)zt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),zt.add(Ss)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Lt(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new C,l[D]=new C;let c=new C,h=new C,d=new C,f=new le,u=new le,m=new le,_=new C,g=new C;function p(D,E,S){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,S),f.fromBufferAttribute(r,D),u.fromBufferAttribute(r,E),m.fromBufferAttribute(r,S),h.sub(c),d.sub(c),u.sub(f),m.sub(f);let U=1/(u.x*m.y-m.x*u.y);isFinite(U)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(U),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(U),a[D].add(_),a[E].add(_),a[S].add(_),l[D].add(g),l[E].add(g),l[S].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let D=0,E=M.length;D<E;++D){let S=M[D],U=S.start,z=S.count;for(let G=U,q=U+z;G<q;G+=3)p(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let b=new C,x=new C,w=new C,T=new C;function P(D){w.fromBufferAttribute(s,D),T.copy(w);let E=a[D];b.copy(E),b.sub(w.multiplyScalar(w.dot(E))).normalize(),x.crossVectors(T,E);let U=x.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,U)}for(let D=0,E=M.length;D<E;++D){let S=M[D],U=S.start,z=S.count;for(let G=U,q=U+z;G<q;G+=3)P(e.getX(G+0)),P(e.getX(G+1)),P(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let f=0,u=e.count;f<u;f+=3){let m=e.getX(f+0),_=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h),u=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)f[m++]=c[u++]}return new Lt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,i);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,i);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},wh=new at,ki=new Yi,Mo=new Hn,Ah=new C,So=new C,bo=new C,Eo=new C,ic=new C,To=new C,Rh=new C,wo=new C,ke=class extends Dt{constructor(e=new pt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){To.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(ic.fromBufferAttribute(d,e),o?To.addScaledVector(ic,h):To.addScaledVector(ic.sub(t),h))}t.add(To)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),ki.copy(e.ray).recast(e.near),!(Mo.containsPoint(ki.origin)===!1&&(ki.intersectSphere(Mo,Ah)===null||ki.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(wh.copy(r).invert(),ki.copy(e.ray).applyMatrix4(wh),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ki)))}_computeIntersections(e,t,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],M=Math.max(g.start,u.start),b=Math.min(a.count,Math.min(g.start+g.count,u.start+u.count));for(let x=M,w=b;x<w;x+=3){let T=a.getX(x),P=a.getX(x+1),D=a.getX(x+2);s=Ao(this,p,e,i,c,h,d,T,P,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){let M=a.getX(g),b=a.getX(g+1),x=a.getX(g+2);s=Ao(this,o,e,i,c,h,d,M,b,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=f.length;m<_;m++){let g=f[m],p=o[g.materialIndex],M=Math.max(g.start,u.start),b=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let x=M,w=b;x<w;x+=3){let T=x,P=x+1,D=x+2;s=Ao(this,p,e,i,c,h,d,T,P,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){let M=g,b=g+1,x=g+2;s=Ao(this,o,e,i,c,h,d,M,b,x),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function jd(n,e,t,i,s,r,o,a){let l;if(e.side===Vt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(wo);return c<t.near||c>t.far?null:{distance:c,point:wo.clone(),object:n}}function Ao(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,So),n.getVertexPosition(l,bo),n.getVertexPosition(c,Eo);let h=jd(n,e,t,i,So,bo,Eo,Rh);if(h){let d=new C;Kn.getBarycoord(Rh,So,bo,Eo,d),s&&(h.uv=Kn.getInterpolatedAttribute(s,a,l,c,d,new le)),r&&(h.uv1=Kn.getInterpolatedAttribute(r,a,l,c,d,new le)),o&&(h.normal=Kn.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};Kn.getNormal(So,bo,Eo,f.normal),h.face=f,h.barycoord=d}return h}var ni=class n extends pt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],f=0,u=0;m("z","y","x",-1,-1,i,t,e,o,r,0),m("z","y","x",1,-1,i,t,-e,o,r,1),m("x","z","y",1,1,e,i,t,s,o,2),m("x","z","y",1,-1,e,i,-t,s,o,3),m("x","y","z",1,-1,e,t,i,s,r,4),m("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ye(c,3)),this.setAttribute("normal",new Ye(h,3)),this.setAttribute("uv",new Ye(d,2));function m(_,g,p,M,b,x,w,T,P,D,E){let S=x/P,U=w/D,z=x/2,G=w/2,q=T/2,$=P+1,V=D+1,oe=0,W=0,ue=new C;for(let de=0;de<V;de++){let Ie=de*U-G;for(let Ke=0;Ke<$;Ke++){let ct=Ke*S-z;ue[_]=ct*M,ue[g]=Ie*b,ue[p]=q,c.push(ue.x,ue.y,ue.z),ue[_]=0,ue[g]=0,ue[p]=T>0?1:-1,h.push(ue.x,ue.y,ue.z),d.push(Ke/P),d.push(1-de/D),oe+=1}}for(let de=0;de<D;de++)for(let Ie=0;Ie<P;Ie++){let Ke=f+Ie+$*de,ct=f+Ie+$*(de+1),it=f+(Ie+1)+$*(de+1),qe=f+(Ie+1)+$*de;l.push(Ke,ct,qe),l.push(ct,it,qe),W+=6}a.addGroup(u,W,E),u+=W,f+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function es(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){let e={};for(let t=0;t<n.length;t++){let i=es(n[t]);for(let s in i)e[s]=i[s]}return e}function ef(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function zc(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var ci={clone:es,merge:qt},tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pt=class extends In{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=es(e.uniforms),this.uniformsGroups=ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Rr=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},vi=new C,Ch=new le,Ph=new le,kt=class extends Rr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(vi.x,vi.y).multiplyScalar(-e/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vi.x,vi.y).multiplyScalar(-e/vi.z)}getViewSize(e,t){return this.getViewBounds(e,Ch,Ph),t.subVectors(Ph,Ch)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_r*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},bs=-90,Es=1,Zo=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new kt(bs,Es,e,t);s.layers=this.layers,this.add(s);let r=new kt(bs,Es,e,t);r.layers=this.layers,this.add(r);let o=new kt(bs,Es,e,t);o.layers=this.layers,this.add(o);let a=new kt(bs,Es,e,t);a.layers=this.layers,this.add(a);let l=new kt(bs,Es,e,t);l.layers=this.layers,this.add(l);let c=new kt(bs,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Cr=class extends Qt{constructor(e=[],t=Qi,i,s,r,o,a,l,c,h){super(e,t,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$o=class extends Xt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Cr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ni(5,5,5),r=new Pt({name:"CubemapFromEquirect",uniforms:es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:Dn});r.uniforms.tEquirect.value=t;let o=new ke(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=Rn),new Zo(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}},St=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sf={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new St,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new St,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new St,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,i),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sf)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new St;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Pr=class n{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ir=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jo=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Kt=new C,Lr=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ht(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),i=ht(i,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ii=class extends In{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ts,hr=new C,ws=new C,As=new C,Rs=new le,ur=new le,Au=new at,Ro=new C,dr=new C,Co=new C,Ih=new le,sc=new le,Lh=new le,Mi=class extends Dt{constructor(e=new ii){if(super(),this.isSprite=!0,this.type="Sprite",Ts===void 0){Ts=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Jo(t,5);Ts.setIndex([0,1,2,0,2,3]),Ts.setAttribute("position",new Lr(i,3,0,!1)),Ts.setAttribute("uv",new Lr(i,2,3,!1))}this.geometry=Ts,this.material=e,this.center=new le(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ws.setFromMatrixScale(this.matrixWorld),Au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),As.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ws.multiplyScalar(-As.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;Po(Ro.set(-.5,-.5,0),As,o,ws,s,r),Po(dr.set(.5,-.5,0),As,o,ws,s,r),Po(Co.set(.5,.5,0),As,o,ws,s,r),Ih.set(0,0),sc.set(1,0),Lh.set(1,1);let a=e.ray.intersectTriangle(Ro,dr,Co,!1,hr);if(a===null&&(Po(dr.set(-.5,.5,0),As,o,ws,s,r),sc.set(0,1),a=e.ray.intersectTriangle(Ro,Co,dr,!1,hr),a===null))return;let l=e.ray.origin.distanceTo(hr);l<e.near||l>e.far||t.push({distance:l,point:hr.clone(),uv:Kn.getInterpolation(hr,Ro,dr,Co,Ih,sc,Lh,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Po(n,e,t,i,s,r){Rs.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ur.x=r*Rs.x-s*Rs.y,ur.y=s*Rs.x+r*Rs.y):ur.copy(Rs),n.copy(e),n.x+=ur.x,n.y+=ur.y,n.applyMatrix4(Au)}var Ko=class extends Qt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=nn,h=nn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=class extends Lt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Cs=new at,Dh=new at,Io=[],Uh=new kn,rf=new at,fr=new ke,pr=new Hn,Ur=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,rf)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),Uh.copy(e.boundingBox).applyMatrix4(Cs),this.boundingBox.union(Uh)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Cs),pr.copy(e.boundingSphere).applyMatrix4(Cs),this.boundingSphere.union(pr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=e*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),pr.copy(this.boundingSphere),pr.applyMatrix4(i),e.ray.intersectsSphere(pr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Cs),Dh.multiplyMatrices(i,Cs),fr.matrixWorld=Dh,fr.raycast(e,Io);for(let o=0,a=Io.length;o<a;o++){let l=Io[o];l.instanceId=r,l.object=this,t.push(l)}Io.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ko(new Float32Array(s*this.count),s,this.count,Ha,Nn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},rc=new C,of=new C,af=new Xe,zn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=rc.subVectors(i,t).cross(of.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(rc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||af.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new Hn,lf=new le(.5,.5),Lo=new C,Bs=class{constructor(e=new zn,t=new zn,i=new zn,s=new zn,r=new zn,o=new zn){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An,i=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],_=r[9],g=r[10],p=r[11],M=r[12],b=r[13],x=r[14],w=r[15];if(s[0].setComponents(c-o,u-h,p-m,w-M).normalize(),s[1].setComponents(c+o,u+h,p+m,w+M).normalize(),s[2].setComponents(c+a,u+d,p+_,w+b).normalize(),s[3].setComponents(c-a,u-d,p-_,w-b).normalize(),i)s[4].setComponents(l,f,g,x).normalize(),s[5].setComponents(c-l,u-f,p-g,w-x).normalize();else if(s[4].setComponents(c-l,u-f,p-g,w-x).normalize(),t===An)s[5].setComponents(c+l,u+f,p+g,w+x).normalize();else if(t===br)s[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=lf.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Lo.x=s.normal.x>0?e.max.x:e.min.x,Lo.y=s.normal.y>0?e.max.y:e.min.y,Lo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Lo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Os=class extends In{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Qo=new C,jo=new C,Nh=new at,mr=new Yi,Do=new Hn,oc=new C,Fh=new C,ea=class extends Dt{constructor(e=new pt,t=new Os){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Qo.fromBufferAttribute(t,s-1),jo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Qo.distanceTo(jo);e.setAttribute("lineDistance",new Ye(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,e.ray.intersectsSphere(Do)===!1)return;Nh.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Nh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=u,g=m-1;_<g;_+=c){let p=h.getX(_),M=h.getX(_+1),b=Uo(this,e,mr,l,p,M,_);b&&t.push(b)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(u),p=Uo(this,e,mr,l,_,g,m-1);p&&t.push(p)}}else{let u=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=u,g=m-1;_<g;_+=c){let p=Uo(this,e,mr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Uo(this,e,mr,l,m-1,u,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Uo(n,e,t,i,s,r,o){let a=n.geometry.attributes.position;if(Qo.fromBufferAttribute(a,s),jo.fromBufferAttribute(a,r),t.distanceSqToSegment(Qo,jo,oc,Fh)>i)return;oc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(oc);if(!(c<e.near||c>e.far))return{distance:c,point:Fh.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}var Nr=class extends ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},si=class extends In{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Bh=new at,gc=new Yi,No=new Hn,Fo=new C,Si=class extends Dt{constructor(e=new pt,t=new si){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Bh.copy(s).invert(),gc.copy(e.ray).applyMatrix4(Bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let f=Math.max(0,o.start),u=Math.min(c.count,o.start+o.count);for(let m=f,_=u;m<_;m++){let g=c.getX(m);Fo.fromBufferAttribute(d,g),Oh(Fo,g,l,s,e,t,this)}}else{let f=Math.max(0,o.start),u=Math.min(d.count,o.start+o.count);for(let m=f,_=u;m<_;m++)Fo.fromBufferAttribute(d,m),Oh(Fo,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oh(n,e,t,i,s,r,o){let a=gc.distanceSqToPoint(n);if(a<t){let l=new C;gc.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var bi=class extends Qt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Fr=class extends Qt{constructor(e,t,i=Li,s,r,o,a=nn,l=nn,c,h=Is,d=1){if(h!==Is&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:d};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Us(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Br=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var mn=class n extends pt{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],l=[],c=new C,h=new le;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=i+d/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("normal",new Ye(a,3)),this.setAttribute("uv",new Ye(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class n extends pt{constructor(e=1,t=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],m=0,_=[],g=i/2,p=0;M(),o===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(u,2));function M(){let x=new C,w=new C,T=0,P=(t-e)/i;for(let D=0;D<=r;D++){let E=[],S=D/r,U=S*(t-e)+e;for(let z=0;z<=s;z++){let G=z/s,q=G*l+a,$=Math.sin(q),V=Math.cos(q);w.x=U*$,w.y=-S*i+g,w.z=U*V,d.push(w.x,w.y,w.z),x.set($,P,V).normalize(),f.push(x.x,x.y,x.z),u.push(G,1-S),E.push(m++)}_.push(E)}for(let D=0;D<s;D++)for(let E=0;E<r;E++){let S=_[E][D],U=_[E+1][D],z=_[E+1][D+1],G=_[E][D+1];(e>0||E!==0)&&(h.push(S,U,G),T+=3),(t>0||E!==r-1)&&(h.push(U,z,G),T+=3)}c.addGroup(p,T,0),p+=T}function b(x){let w=m,T=new le,P=new C,D=0,E=x===!0?e:t,S=x===!0?1:-1;for(let z=1;z<=s;z++)d.push(0,g*S,0),f.push(0,S,0),u.push(.5,.5),m++;let U=m;for(let z=0;z<=s;z++){let q=z/s*l+a,$=Math.cos(q),V=Math.sin(q);P.x=E*V,P.y=g*S,P.z=E*$,d.push(P.x,P.y,P.z),f.push(0,S,0),T.x=$*.5+.5,T.y=V*.5*S+.5,u.push(T.x,T.y),m++}for(let z=0;z<s;z++){let G=w+z,q=U+z;x===!0?h.push(q,q+1,G):h.push(q+1,q,G),D+=3}c.addGroup(p,D,x===!0?1:2),p+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ta=class n extends pt{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};let r=[],o=[];a(s),c(i),h(),this.setAttribute("position",new Ye(r,3)),this.setAttribute("normal",new Ye(r.slice(),3)),this.setAttribute("uv",new Ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let b=new C,x=new C,w=new C;for(let T=0;T<t.length;T+=3)u(t[T+0],b),u(t[T+1],x),u(t[T+2],w),l(b,x,w,M)}function l(M,b,x,w){let T=w+1,P=[];for(let D=0;D<=T;D++){P[D]=[];let E=M.clone().lerp(x,D/T),S=b.clone().lerp(x,D/T),U=T-D;for(let z=0;z<=U;z++)z===0&&D===T?P[D][z]=E:P[D][z]=E.clone().lerp(S,z/U)}for(let D=0;D<T;D++)for(let E=0;E<2*(T-D)-1;E++){let S=Math.floor(E/2);E%2===0?(f(P[D][S+1]),f(P[D+1][S]),f(P[D][S])):(f(P[D][S+1]),f(P[D+1][S+1]),f(P[D+1][S]))}}function c(M){let b=new C;for(let x=0;x<r.length;x+=3)b.x=r[x+0],b.y=r[x+1],b.z=r[x+2],b.normalize().multiplyScalar(M),r[x+0]=b.x,r[x+1]=b.y,r[x+2]=b.z}function h(){let M=new C;for(let b=0;b<r.length;b+=3){M.x=r[b+0],M.y=r[b+1],M.z=r[b+2];let x=g(M)/2/Math.PI+.5,w=p(M)/Math.PI+.5;o.push(x,1-w)}m(),d()}function d(){for(let M=0;M<o.length;M+=6){let b=o[M+0],x=o[M+2],w=o[M+4],T=Math.max(b,x,w),P=Math.min(b,x,w);T>.9&&P<.1&&(b<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),w<.2&&(o[M+4]+=1))}}function f(M){r.push(M.x,M.y,M.z)}function u(M,b){let x=M*3;b.x=e[x+0],b.y=e[x+1],b.z=e[x+2]}function m(){let M=new C,b=new C,x=new C,w=new C,T=new le,P=new le,D=new le;for(let E=0,S=0;E<r.length;E+=9,S+=6){M.set(r[E+0],r[E+1],r[E+2]),b.set(r[E+3],r[E+4],r[E+5]),x.set(r[E+6],r[E+7],r[E+8]),T.set(o[S+0],o[S+1]),P.set(o[S+2],o[S+3]),D.set(o[S+4],o[S+5]),w.copy(M).add(b).add(x).divideScalar(3);let U=g(w);_(T,S+0,M,U),_(P,S+2,b,U),_(D,S+4,x,U)}}function _(M,b,x,w){w<0&&M.x===1&&(o[b]=M.x-1),x.x===0&&x.z===0&&(o[b]=w/2/Math.PI+.5)}function g(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,o;t?o=t:o=e*i[r-1];let a=0,l=r-1,c;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),c=i[s]-o,c<0)a=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let h=i[s],f=i[s+1]-h,u=(o-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=t||(o.isVector2?new le:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new C,s=[],r=[],o=[],a=new C,l=new at;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new C)}r[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ze(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(a,m))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Ze(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],u*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Or=class extends gn{constructor(e=0,t=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new le){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},na=class extends Or{constructor(e,t,i,s,r,o){super(e,t,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function kc(){let n=0,e=0,t=0,i=0;function s(r,o,a,l){n=r,e=a,t=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){s(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let f=(o-r)/c-(a-r)/(c+h)+(a-o)/h,u=(a-o)/h-(l-o)/(h+d)+(l-a)/d;f*=h,u*=h,s(o,a,f,u)},calc:function(r){let o=r*r,a=o*r;return n+e*r+t*o+i*a}}}var Bo=new C,ac=new kc,lc=new kc,cc=new kc,Zi=class extends gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new C){let i=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=s[(a-1)%r]:(Bo.subVectors(s[0],s[1]).add(s[0]),c=Bo);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Bo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Bo),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(d),u),_=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ac.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,m,_,g),lc.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,m,_,g),cc.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ac.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),lc.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),cc.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(ac.calc(l),lc.calc(l),cc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zh(n,e,t,i,s){let r=(i-e)*.5,o=(s-t)*.5,a=n*n,l=n*a;return(2*t-2*i+r+o)*l+(-3*t+3*i-2*r-o)*a+r*n+t}function cf(n,e){let t=1-n;return t*t*e}function hf(n,e){return 2*(1-n)*n*e}function uf(n,e){return n*n*e}function yr(n,e,t,i){return cf(n,e)+hf(n,t)+uf(n,i)}function df(n,e){let t=1-n;return t*t*t*e}function ff(n,e){let t=1-n;return 3*t*t*n*e}function pf(n,e){return 3*(1-n)*n*n*e}function mf(n,e){return n*n*n*e}function xr(n,e,t,i,s){return df(n,e)+ff(n,t)+pf(n,i)+mf(n,s)}var ia=class extends gn{constructor(e=new le,t=new le,i=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends gn{constructor(e=new C,t=new C,i=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(xr(e,s.x,r.x,o.x,a.x),xr(e,s.y,r.y,o.y,a.y),xr(e,s.z,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends gn{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends gn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends gn{constructor(e=new le,t=new le,i=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new le){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends gn{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){let i=t,s=this.v0,r=this.v1,o=this.v2;return i.set(yr(e,s.x,r.x,o.x),yr(e,s.y,r.y,o.y),yr(e,s.z,r.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},la=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let i=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(zh(a,l.x,c.x,h.x,d.x),zh(a,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},gf=Object.freeze({__proto__:null,ArcCurve:na,CatmullRomCurve3:Zi,CubicBezierCurve:ia,CubicBezierCurve3:sa,EllipseCurve:Or,LineCurve:ra,LineCurve3:oa,QuadraticBezierCurve:aa,QuadraticBezierCurve3:zr,SplineCurve:la});var $i=class n extends ta{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}},kr=class n extends pt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/t,d=new C,f=new le,u=new C,m=new C,_=new C,g=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,u.x=p*1,u.y=-g,u.z=p*0,_.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:g=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),l.push(u.x,u.y,u.z),_.copy(m)}for(let M=0;M<=t;M++){let b=i+M*h*s,x=Math.sin(b),w=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*x,d.y=e[T].y,d.z=e[T].x*w,o.push(d.x,d.y,d.z),f.x=M/t,f.y=T/(e.length-1),a.push(f.x,f.y);let P=l[3*T+0]*x,D=l[3*T+1],E=l[3*T+0]*w;c.push(P,D,E)}}for(let M=0;M<t;M++)for(let b=0;b<e.length-1;b++){let x=b+M*e.length,w=x,T=x+e.length,P=x+e.length+1,D=x+1;r.push(w,T,D),r.push(P,D,T)}this.setIndex(r),this.setAttribute("position",new Ye(o,3)),this.setAttribute("uv",new Ye(a,2)),this.setAttribute("normal",new Ye(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}};var Ei=class n extends pt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=e/a,f=t/l,u=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let M=p*f-o;for(let b=0;b<c;b++){let x=b*d-r;m.push(x,-M,0),_.push(0,0,1),g.push(b/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let b=M+c*p,x=M+c*(p+1),w=M+1+c*(p+1),T=M+1+c*p;u.push(b,x,T),u.push(x,w,T)}this.setIndex(u),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ti=class n extends pt{constructor(e=.5,t=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],l=[],c=[],h=[],d=e,f=(t-e)/s,u=new C,m=new le;for(let _=0;_<=s;_++){for(let g=0;g<=i;g++){let p=r+g/i*o;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),m.x=(u.x/t+1)/2,m.y=(u.y/t+1)/2,h.push(m.x,m.y)}d+=f}for(let _=0;_<s;_++){let g=_*(i+1);for(let p=0;p<i;p++){let M=p+g,b=M,x=M+i+1,w=M+i+2,T=M+1;a.push(b,x,T),a.push(x,w,T)}}this.setIndex(a),this.setAttribute("position",new Ye(l,3)),this.setAttribute("normal",new Ye(c,3)),this.setAttribute("uv",new Ye(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ri=class n extends pt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,f=new C,u=[],m=[],_=[],g=[];for(let p=0;p<=i;p++){let M=[],b=p/i,x=0;p===0&&o===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let w=0;w<=t;w++){let T=w/t;d.x=-e*Math.cos(s+T*r)*Math.sin(o+b*a),d.y=e*Math.cos(o+b*a),d.z=e*Math.sin(s+T*r)*Math.sin(o+b*a),m.push(d.x,d.y,d.z),f.copy(d).normalize(),_.push(f.x,f.y,f.z),g.push(T+x,1-b),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let b=h[p][M+1],x=h[p][M],w=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&u.push(b,x,T),(p!==i-1||l<Math.PI)&&u.push(x,w,T)}this.setIndex(u),this.setAttribute("position",new Ye(m,3)),this.setAttribute("normal",new Ye(_,3)),this.setAttribute("uv",new Ye(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var wi=class n extends pt{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],l=[],c=[],h=new C,d=new C,f=new C;for(let u=0;u<=i;u++)for(let m=0;m<=s;m++){let _=m/s*r,g=u/i*Math.PI*2;d.x=(e+t*Math.cos(g))*Math.cos(_),d.y=(e+t*Math.cos(g))*Math.sin(_),d.z=t*Math.sin(g),a.push(d.x,d.y,d.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/s),c.push(u/i)}for(let u=1;u<=i;u++)for(let m=1;m<=s;m++){let _=(s+1)*u+m-1,g=(s+1)*(u-1)+m-1,p=(s+1)*(u-1)+m,M=(s+1)*u+m;o.push(_,g,M),o.push(g,p,M)}this.setIndex(o),this.setAttribute("position",new Ye(a,3)),this.setAttribute("normal",new Ye(l,3)),this.setAttribute("uv",new Ye(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var zs=class n extends pt{constructor(e=new zr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new le,h=new C,d=[],f=[],u=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Ye(d,3)),this.setAttribute("normal",new Ye(f,3)),this.setAttribute("uv",new Ye(u,2));function _(){for(let b=0;b<t;b++)g(b);g(r===!1?t:0),M(),p()}function g(b){h=e.getPointAt(b/t,h);let x=o.normals[b],w=o.binormals[b];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,D=Math.sin(P),E=-Math.cos(P);l.x=E*x.x+D*w.x,l.y=E*x.y+D*w.y,l.z=E*x.z+D*w.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+i*l.x,a.y=h.y+i*l.y,a.z=h.z+i*l.z,d.push(a.x,a.y,a.z)}}function p(){for(let b=1;b<=t;b++)for(let x=1;x<=s;x++){let w=(s+1)*(b-1)+(x-1),T=(s+1)*b+(x-1),P=(s+1)*b+x,D=(s+1)*(b-1)+x;m.push(w,T,D),m.push(T,P,D)}}function M(){for(let b=0;b<=t;b++)for(let x=0;x<=s;x++)c.x=b/t,c.y=x/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new gf[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Hr=class extends Pt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ln=class extends In{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},oi=class extends Ln{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ca=class extends In{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends In{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Oo(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function _f(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ji=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ua=class extends Ji{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case fc:r=e,a=2*t-i;break;case pc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case fc:o=e,l=2*i-t;break;case pc:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,m=(i-t)/(s-t),_=m*m,g=_*m,p=-f*g+2*f*_-f*m,M=(1+f)*g+(-1.5-2*f)*_+(-.5+f)*m+1,b=(-1-u)*g+(1.5+u)*_+.5*m,x=u*g-u*_;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+M*o[c+w]+b*o[l+w]+x*o[d+w];return r}},da=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(s-t),d=1-h;for(let f=0;f!==a;++f)r[f]=o[c+f]*d+o[l+f]*h;return r}},fa=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},hn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Oo(t,this.TimeBufferType),this.values=Oo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Oo(e.times,Array),values:Oo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mr:t=this.InterpolantFactoryMethodDiscrete;break;case Go:t=this.InterpolantFactoryMethodLinear;break;case zo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mr;case this.InterpolantFactoryMethodLinear:return Go;case this.InterpolantFactoryMethodSmooth:return zo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&_f(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zo,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let d=a*i,f=d-i,u=d+i;for(let m=0;m!==i;++m){let _=t[d+m];if(_!==t[f+m]||_!==t[u+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let d=a*i,f=o*i;for(let u=0;u!==i;++u)t[f+u]=t[d+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Go;var Ai=class extends hn{constructor(e,t,i){super(e,t,i)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=Mr;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};pa.prototype.ValueTypeName="color";var ma=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};ma.prototype.ValueTypeName="number";var ga=class extends Ji{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Cn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Vr=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}};Vr.prototype.ValueTypeName="quaternion";Vr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends hn{constructor(e,t,i){super(e,t,i)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Mr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends hn{constructor(e,t,i,s){super(e,t,i,s)}};_a.prototype.ValueTypeName="vector";var va=class{constructor(e,t,i){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],m=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Ru=new va,ya=class{constructor(e){this.manager=e!==void 0?e:Ru,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var ks=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Gr=class extends ks{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hc=new at,kh=new C,Hh=new C,xa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.mapType=Un,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kh.setFromMatrixPosition(e.matrixWorld),t.position.copy(kh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),hc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Vh=new at,gr=new C,uc=new C,_c=class extends xa{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),gr.setFromMatrixPosition(e.matrixWorld),i.position.copy(gr),uc.copy(i.position),uc.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(uc),i.updateMatrixWorld(),s.makeTranslation(-gr.x,-gr.y,-gr.z),Vh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vh,i.coordinateSystem,i.reversedDepth)}},Ci=class extends ks{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new _c}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ki=class extends Rr{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},vc=class extends xa{constructor(){super(new Ki(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Hs=class extends ks{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new vc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ma=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Wr=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Hc="\\[\\]\\.:\\/",vf=new RegExp("["+Hc+"]","g"),Vc="[^"+Hc+"]",yf="[^"+Hc.replace("\\.","")+"]",xf=/((?:WC+[\/:])*)/.source.replace("WC",Vc),Mf=/(WCOD+)?/.source.replace("WCOD",yf),Sf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vc),bf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vc),Ef=new RegExp("^"+xf+Mf+Sf+bf+"$"),Tf=["material","materials","bones","map"],yc=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vf,"")}static parseTrackName(e){let t=Ef.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Tf.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=yc;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var K_=new Float32Array(1);var Gh=new at,Xr=class{constructor(e,t,i=0,s=1/0){this.ray=new Yi(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gh),this}intersectObject(e,t=!0,i=[]){return xc(e,this,i,t),i.sort(Wh),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)xc(e[s],this,i,t);return i.sort(Wh),i}};function Wh(n,e){return n.distance-e.distance}function xc(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)xc(r[o],e,t,!0)}}function Gc(n,e,t,i){let s=wf(i);switch(t){case Ic:return n*e;case Ha:return n*e/s.components*s.byteLength;case Va:return n*e/s.components*s.byteLength;case Dc:return n*e*2/s.components*s.byteLength;case Ga:return n*e*2/s.components*s.byteLength;case Lc:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Wa:return n*e*4/s.components*s.byteLength;case Zr:case $r:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:case Za:return Math.max(n,16)*Math.max(e,8)/4;case Xa:case Ya:return Math.max(n,8)*Math.max(e,8)/2;case $a:case Ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ja:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case el:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case nl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case il:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case rl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ol:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case hl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case dl:case fl:case pl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ml:case gl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case _l:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wf(n){switch(n){case Un:case Ac:return{byteLength:1,components:1};case Gs:case Rc:case _n:return{byteLength:2,components:1};case za:case ka:return{byteLength:2,components:4};case Li:case Oa:case Nn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Qu(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rf(n){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,a),d.length===0)n.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){let m=d[f],_=d[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){let _=d[u];n.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Cf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Gf=`#ifdef USE_BUMPMAP
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
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,jf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ep=`vec3 transformedNormal = objectNormal;
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
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rp="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ap=`#ifdef USE_ENVMAP
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
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gp=`#ifdef USE_GRADIENTMAP
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
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xp=`uniform bool receiveShadow;
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
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wp=`PhysicalMaterial material;
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
#endif`,Ap=`struct PhysicalMaterial {
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
}`,Rp=`
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
#endif`,Cp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ip=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Op=`#if defined( USE_POINTS_UV )
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
#endif`,zp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wp=`#ifdef USE_MORPHTARGETS
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
#endif`,Xp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kp=`#ifdef USE_NORMALMAP
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
#endif`,Qp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,em=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,im=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,om=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,um=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fm=`float getShadowMask() {
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
}`,pm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mm=`#ifdef USE_SKINNING
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
#endif`,gm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sm=`#ifdef USE_TRANSMISSION
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
#endif`,bm=`#ifdef USE_TRANSMISSION
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cm=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Nm=`#if DEPTH_PACKING == 3200
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
}`,Fm=`#define DISTANCE
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
}`,Bm=`#define DISTANCE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,km=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#define LAMBERT
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
}`,Xm=`#define LAMBERT
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
}`,qm=`#define MATCAP
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
}`,Ym=`#define MATCAP
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
}`,Zm=`#define NORMAL
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
}`,$m=`#define NORMAL
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
}`,Jm=`#define PHONG
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
}`,Km=`#define PHONG
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
}`,Qm=`#define STANDARD
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
}`,jm=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,t0=`#define TOON
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
}`,n0=`uniform float size;
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
}`,i0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,r0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
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
}`,a0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Cf,alphahash_pars_fragment:Pf,alphamap_fragment:If,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Uf,aomap_fragment:Nf,aomap_pars_fragment:Ff,batching_pars_vertex:Bf,batching_vertex:Of,begin_vertex:zf,beginnormal_vertex:kf,bsdfs:Hf,iridescence_fragment:Vf,bumpmap_pars_fragment:Gf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:Xf,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:Zf,color_pars_fragment:$f,color_pars_vertex:Jf,color_vertex:Kf,common:Qf,cube_uv_reflection_fragment:jf,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:ip,emissivemap_pars_fragment:sp,colorspace_fragment:rp,colorspace_pars_fragment:op,envmap_fragment:ap,envmap_common_pars_fragment:lp,envmap_pars_fragment:cp,envmap_pars_vertex:hp,envmap_physical_pars_fragment:Mp,envmap_vertex:up,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:mp,gradientmap_pars_fragment:gp,lightmap_pars_fragment:_p,lights_lambert_fragment:vp,lights_lambert_pars_fragment:yp,lights_pars_begin:xp,lights_toon_fragment:Sp,lights_toon_pars_fragment:bp,lights_phong_fragment:Ep,lights_phong_pars_fragment:Tp,lights_physical_fragment:wp,lights_physical_pars_fragment:Ap,lights_fragment_begin:Rp,lights_fragment_maps:Cp,lights_fragment_end:Pp,logdepthbuf_fragment:Ip,logdepthbuf_pars_fragment:Lp,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Up,map_fragment:Np,map_pars_fragment:Fp,map_particle_fragment:Bp,map_particle_pars_fragment:Op,metalnessmap_fragment:zp,metalnessmap_pars_fragment:kp,morphinstance_vertex:Hp,morphcolor_vertex:Vp,morphnormal_vertex:Gp,morphtarget_pars_vertex:Wp,morphtarget_vertex:Xp,normal_fragment_begin:qp,normal_fragment_maps:Yp,normal_pars_fragment:Zp,normal_pars_vertex:$p,normal_vertex:Jp,normalmap_pars_fragment:Kp,clearcoat_normal_fragment_begin:Qp,clearcoat_normal_fragment_maps:jp,clearcoat_pars_fragment:em,iridescence_pars_fragment:tm,opaque_fragment:nm,packing:im,premultiplied_alpha_fragment:sm,project_vertex:rm,dithering_fragment:om,dithering_pars_fragment:am,roughnessmap_fragment:lm,roughnessmap_pars_fragment:cm,shadowmap_pars_fragment:hm,shadowmap_pars_vertex:um,shadowmap_vertex:dm,shadowmask_pars_fragment:fm,skinbase_vertex:pm,skinning_pars_vertex:mm,skinning_vertex:gm,skinnormal_vertex:_m,specularmap_fragment:vm,specularmap_pars_fragment:ym,tonemapping_fragment:xm,tonemapping_pars_fragment:Mm,transmission_fragment:Sm,transmission_pars_fragment:bm,uv_pars_fragment:Em,uv_pars_vertex:Tm,uv_vertex:wm,worldpos_vertex:Am,background_vert:Rm,background_frag:Cm,backgroundCube_vert:Pm,backgroundCube_frag:Im,cube_vert:Lm,cube_frag:Dm,depth_vert:Um,depth_frag:Nm,distanceRGBA_vert:Fm,distanceRGBA_frag:Bm,equirect_vert:Om,equirect_frag:zm,linedashed_vert:km,linedashed_frag:Hm,meshbasic_vert:Vm,meshbasic_frag:Gm,meshlambert_vert:Wm,meshlambert_frag:Xm,meshmatcap_vert:qm,meshmatcap_frag:Ym,meshnormal_vert:Zm,meshnormal_frag:$m,meshphong_vert:Jm,meshphong_frag:Km,meshphysical_vert:Qm,meshphysical_frag:jm,meshtoon_vert:e0,meshtoon_frag:t0,points_vert:n0,points_frag:i0,shadow_vert:s0,shadow_frag:r0,sprite_vert:o0,sprite_frag:a0},ve={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Gn={basic:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ge(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:qt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:qt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:qt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:qt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:qt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:qt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:qt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:qt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:qt([ve.common,ve.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:qt([ve.lights,ve.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Gn.physical={uniforms:qt([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var yl={r:0,b:0,g:0},ts=new Pn,l0=new at;function c0(n,e,t,i,s,r,o){let a=new ge(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function m(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?t:e).get(x)),x}function _(b){let x=!1,w=m(b);w===null?p(a,l):w&&w.isColor&&(p(w,1),x=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(b,x){let w=m(x);w&&(w.isCubeTexture||w.mapping===qr)?(h===void 0&&(h=new ke(new ni(1,1,1),new Pt({name:"BackgroundCubeMaterial",uniforms:es(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ts.copy(x.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(l0.makeRotationFromEuler(ts)),h.material.toneMapped=nt.getTransfer(w.colorSpace)!==lt,(d!==w||f!==w.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,u=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ke(new Ei(2,2),new Pt({name:"BackgroundMaterial",uniforms:es(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(w.colorSpace)!==lt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,x){b.getRGB(yl,zc(n)),i.buffers.color.setClear(yl.r,yl.g,yl.b,x,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,x=1){a.set(b),l=x,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:g,dispose:M}}function h0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,o=!1;function a(S,U,z,G,q){let $=!1,V=d(G,z,U);r!==V&&(r=V,c(r.object)),$=u(S,G,z,q),$&&m(S,G,z,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(S,U,z,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function h(S){return n.deleteVertexArray(S)}function d(S,U,z){let G=z.wireframe===!0,q=i[S.id];q===void 0&&(q={},i[S.id]=q);let $=q[U.id];$===void 0&&($={},q[U.id]=$);let V=$[G];return V===void 0&&(V=f(l()),$[G]=V),V}function f(S){let U=[],z=[],G=[];for(let q=0;q<t;q++)U[q]=0,z[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:z,attributeDivisors:G,object:S,attributes:{},index:null}}function u(S,U,z,G){let q=r.attributes,$=U.attributes,V=0,oe=z.getAttributes();for(let W in oe)if(oe[W].location>=0){let de=q[W],Ie=$[W];if(Ie===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(Ie=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(Ie=S.instanceColor)),de===void 0||de.attribute!==Ie||Ie&&de.data!==Ie.data)return!0;V++}return r.attributesNum!==V||r.index!==G}function m(S,U,z,G){let q={},$=U.attributes,V=0,oe=z.getAttributes();for(let W in oe)if(oe[W].location>=0){let de=$[W];de===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));let Ie={};Ie.attribute=de,de&&de.data&&(Ie.data=de.data),q[W]=Ie,V++}r.attributes=q,r.attributesNum=V,r.index=G}function _(){let S=r.newAttributes;for(let U=0,z=S.length;U<z;U++)S[U]=0}function g(S){p(S,0)}function p(S,U){let z=r.newAttributes,G=r.enabledAttributes,q=r.attributeDivisors;z[S]=1,G[S]===0&&(n.enableVertexAttribArray(S),G[S]=1),q[S]!==U&&(n.vertexAttribDivisor(S,U),q[S]=U)}function M(){let S=r.newAttributes,U=r.enabledAttributes;for(let z=0,G=U.length;z<G;z++)U[z]!==S[z]&&(n.disableVertexAttribArray(z),U[z]=0)}function b(S,U,z,G,q,$,V){V===!0?n.vertexAttribIPointer(S,U,z,q,$):n.vertexAttribPointer(S,U,z,G,q,$)}function x(S,U,z,G){_();let q=G.attributes,$=z.getAttributes(),V=U.defaultAttributeValues;for(let oe in $){let W=$[oe];if(W.location>=0){let ue=q[oe];if(ue===void 0&&(oe==="instanceMatrix"&&S.instanceMatrix&&(ue=S.instanceMatrix),oe==="instanceColor"&&S.instanceColor&&(ue=S.instanceColor)),ue!==void 0){let de=ue.normalized,Ie=ue.itemSize,Ke=e.get(ue);if(Ke===void 0)continue;let ct=Ke.buffer,it=Ke.type,qe=Ke.bytesPerElement,Y=it===n.INT||it===n.UNSIGNED_INT||ue.gpuType===Oa;if(ue.isInterleavedBufferAttribute){let te=ue.data,Te=te.stride,Oe=ue.offset;if(te.isInstancedInterleavedBuffer){for(let Re=0;Re<W.locationSize;Re++)p(W.location+Re,te.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Re=0;Re<W.locationSize;Re++)g(W.location+Re);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let Re=0;Re<W.locationSize;Re++)b(W.location+Re,Ie/W.locationSize,it,de,Te*qe,(Oe+Ie/W.locationSize*Re)*qe,Y)}else{if(ue.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)p(W.location+te,ue.meshPerAttribute);S.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let te=0;te<W.locationSize;te++)g(W.location+te);n.bindBuffer(n.ARRAY_BUFFER,ct);for(let te=0;te<W.locationSize;te++)b(W.location+te,Ie/W.locationSize,it,de,Ie*qe,Ie/W.locationSize*te*qe,Y)}}else if(V!==void 0){let de=V[oe];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(W.location,de);break;case 3:n.vertexAttrib3fv(W.location,de);break;case 4:n.vertexAttrib4fv(W.location,de);break;default:n.vertexAttrib1fv(W.location,de)}}}}M()}function w(){D();for(let S in i){let U=i[S];for(let z in U){let G=U[z];for(let q in G)h(G[q].object),delete G[q];delete U[z]}delete i[S]}}function T(S){if(i[S.id]===void 0)return;let U=i[S.id];for(let z in U){let G=U[z];for(let q in G)h(G[q].object),delete G[q];delete U[z]}delete i[S.id]}function P(S){for(let U in i){let z=i[U];if(z[S.id]===void 0)continue;let G=z[S.id];for(let q in G)h(G[q].object),delete G[q];delete z[S.id]}}function D(){E(),o=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function u0(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function a(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let m=0;m<d;m++)u+=h[m];t.update(u,i,1)}function l(c,h,d,f){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let m=0;for(let _=0;_<d;_++)m+=h[_]*f[_];t.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function d0(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==vn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let D=P===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Un&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Nn&&!D)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:w,maxSamples:T}}function f0(n){let e=this,t=null,i=0,s=!1,r=!1,o=new zn,a=new Xe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let m=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let M=r?0:i,b=M*4,x=p.clippingState||null;l.value=x,x=h(m,f,b,u);for(let w=0;w!==b;++w)x[w]=t[w];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,u,m){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=u+_*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let b=0,x=u;b!==_;++b,x+=4)o.copy(d[b]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function p0(n){let e=new WeakMap;function t(o,a){return a===Pi?o.mapping=Qi:a===Fa&&(o.mapping=ji),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pi||a===Fa)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $o(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Ys=4,Cu=[.125,.215,.35,.446,.526,.582],ss=20,Wc=new Ki,Pu=new ge,Xc=null,qc=0,Yc=0,Zc=!1,is=(1+Math.sqrt(5))/2,qs=1/is,Iu=[new C(-is,qs,0),new C(is,qs,0),new C(-qs,0,is),new C(qs,0,is),new C(0,is,-qs),new C(0,is,qs),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],m0=new C,Di=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,r={}){let{size:o=256,position:a=m0}=r;Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xc,qc,Yc),this._renderer.xr.enabled=Zc,e.scissorTest=!1,xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:_n,format:vn,colorSpace:qi,depthBuffer:!1},s=Lu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lu(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g0(r)),this._blurMaterial=_0(r,e,t)}return s}_compileMaterial(e){let t=new ke(this._lodPlanes[0],e);this._renderer.compile(t,Wc)}_sceneToCubeUV(e,t,i,s,r){let l=new kt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Pu),d.toneMapping=ai,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let _=new Ht({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new ke(new ni,_),p=!1,M=e.background;M?M.isColor&&(_.color.copy(M),e.background=null,p=!0):(_.color.copy(Pu),p=!0);for(let b=0;b<6;b++){let x=b%3;x===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):x===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let w=this._cubeSize;xl(s,x*w,b>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(g,l),d.render(e,l)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=f,e.background=M}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Qi||e.mapping===ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Du());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ke(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;xl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Wc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Iu[(s-r-1)%Iu.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new ke(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*ss-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):ss;g>ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ss}`);let p=[],M=0;for(let P=0;P<ss;++P){let D=P/_,E=Math.exp(-D*D/2);p.push(E),P===0?M+=E:P<g&&(M+=2*E)}for(let P=0;P<p.length;P++)p[P]=p[P]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:b}=this;f.dTheta.value=m,f.mipInt.value=b-i;let x=this._sizeLods[s],w=3*x*(s>b-Ys?s-b+Ys:0),T=4*(this._cubeSize-x);xl(t,w,T,3*x,2*x),l.setRenderTarget(t),l.render(d,Wc)}};function g0(n){let e=[],t=[],i=[],s=n,r=n-Ys+1+Cu.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Ys?l=Cu[o-n+Ys-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,_=3,g=2,p=1,M=new Float32Array(_*m*u),b=new Float32Array(g*m*u),x=new Float32Array(p*m*u);for(let T=0;T<u;T++){let P=T%3*2/3-1,D=T>2?0:-1,E=[P,D,0,P+2/3,D,0,P+2/3,D+1,0,P,D,0,P+2/3,D+1,0,P,D+1,0];M.set(E,_*m*T),b.set(f,g*m*T);let S=[T,T,T,T,T,T];x.set(S,p*m*T)}let w=new pt;w.setAttribute("position",new Lt(M,_)),w.setAttribute("uv",new Lt(b,g)),w.setAttribute("faceIndex",new Lt(x,p)),e.push(w),s>Ys&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Lu(n,e,t){let i=new Xt(n,e,t);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xl(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function _0(n,e,t){let i=new Float32Array(ss),s=new C(0,1,0);return new Pt({name:"SphericalGaussianBlur",defines:{n:ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Du(){return new Pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sh(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Uu(){return new Pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function sh(){return`

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
	`}function v0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pi||l===Fa,h=l===Qi||l===ji;if(c||h){let d=e.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Di(n)),d=c?t.fromEquirectangular(a,d):t.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{let u=a.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Di(n)),d=c?t.fromEquirectangular(a):t.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function y0(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ds("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function x0(n,e,t,i){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let u in f)e.update(f[u],n.ARRAY_BUFFER)}function c(d){let f=[],u=d.index,m=d.attributes.position,_=0;if(u!==null){let M=u.array;_=u.version;for(let b=0,x=M.length;b<x;b+=3){let w=M[b+0],T=M[b+1],P=M[b+2];f.push(w,T,T,P,P,w)}}else if(m!==void 0){let M=m.array;_=m.version;for(let b=0,x=M.length/3-1;b<x;b+=3){let w=b+0,T=b+1,P=b+2;f.push(w,T,T,P,P,w)}}else return;let g=new(Oc(f)?Ar:wr)(f,1);g.version=_;let p=r.get(d);p&&e.remove(p),r.set(d,g)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function M0(n,e,t){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,u){n.drawElements(i,u,r,f*o),t.update(u,i,1)}function c(f,u,m){m!==0&&(n.drawElementsInstanced(i,u,r,f*o,m),t.update(u,i,m))}function h(f,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,m);let g=0;for(let p=0;p<m;p++)g+=u[p];t.update(g,i,1)}function d(f,u,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<f.length;p++)c(f[p]/o,u[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(i,u,0,r,f,0,_,0,m);let p=0;for(let M=0;M<m;M++)p+=u[M]*_[M];t.update(p,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function S0(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function b0(n,e,t){let i=new WeakMap,s=new ut;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(a);if(f===void 0||f.count!==d){let E=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",E)};f!==void 0&&f.texture.dispose();let u=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],b=0;u===!0&&(b=1),m===!0&&(b=2),_===!0&&(b=3);let x=a.attributes.position.count*b,w=1;x>e.maxTextureSize&&(w=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*w*4*d),P=new Tr(T,x,w,d);P.type=Nn,P.needsUpdate=!0;let D=b*4;for(let S=0;S<d;S++){let U=g[S],z=p[S],G=M[S],q=x*w*4*S;for(let $=0;$<U.count;$++){let V=$*D;u===!0&&(s.fromBufferAttribute(U,$),T[q+V+0]=s.x,T[q+V+1]=s.y,T[q+V+2]=s.z,T[q+V+3]=0),m===!0&&(s.fromBufferAttribute(z,$),T[q+V+4]=s.x,T[q+V+5]=s.y,T[q+V+6]=s.z,T[q+V+7]=0),_===!0&&(s.fromBufferAttribute(G,$),T[q+V+8]=s.x,T[q+V+9]=s.y,T[q+V+10]=s.z,T[q+V+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new le(x,w)},i.set(a,f),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];let m=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:r}}function E0(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}var ju=new Qt,Nu=new Fr(1,1),ed=new Tr,td=new Yo,nd=new Cr,Fu=[],Bu=[],Ou=new Float32Array(16),zu=new Float32Array(9),ku=new Float32Array(4);function $s(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Fu[s];if(r===void 0&&(r=new Float32Array(s),Fu[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function bl(n,e){let t=Bu[e];t===void 0&&(t=new Int32Array(e),Bu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function w0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),Ot(t,e)}}function A0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),Ot(t,e)}}function R0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),Ot(t,e)}}function C0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Bt(t,i))return;ku.set(i),n.uniformMatrix2fv(this.addr,!1,ku),Ot(t,i)}}function P0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Bt(t,i))return;zu.set(i),n.uniformMatrix3fv(this.addr,!1,zu),Ot(t,i)}}function I0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Bt(t,i))return;Ou.set(i),n.uniformMatrix4fv(this.addr,!1,Ou),Ot(t,i)}}function L0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function D0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),Ot(t,e)}}function U0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),Ot(t,e)}}function N0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),Ot(t,e)}}function F0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function B0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),Ot(t,e)}}function O0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),Ot(t,e)}}function z0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),Ot(t,e)}}function k0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nu.compareFunction=Nc,r=Nu):r=ju,t.setTexture2D(e||r,s)}function H0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||td,s)}function V0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nd,s)}function G0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ed,s)}function W0(n){switch(n){case 5126:return T0;case 35664:return w0;case 35665:return A0;case 35666:return R0;case 35674:return C0;case 35675:return P0;case 35676:return I0;case 5124:case 35670:return L0;case 35667:case 35671:return D0;case 35668:case 35672:return U0;case 35669:case 35673:return N0;case 5125:return F0;case 36294:return B0;case 36295:return O0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return G0}}function X0(n,e){n.uniform1fv(this.addr,e)}function q0(n,e){let t=$s(e,this.size,2);n.uniform2fv(this.addr,t)}function Y0(n,e){let t=$s(e,this.size,3);n.uniform3fv(this.addr,t)}function Z0(n,e){let t=$s(e,this.size,4);n.uniform4fv(this.addr,t)}function $0(n,e){let t=$s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function J0(n,e){let t=$s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function K0(n,e){let t=$s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Q0(n,e){n.uniform1iv(this.addr,e)}function j0(n,e){n.uniform2iv(this.addr,e)}function eg(n,e){n.uniform3iv(this.addr,e)}function tg(n,e){n.uniform4iv(this.addr,e)}function ng(n,e){n.uniform1uiv(this.addr,e)}function ig(n,e){n.uniform2uiv(this.addr,e)}function sg(n,e){n.uniform3uiv(this.addr,e)}function rg(n,e){n.uniform4uiv(this.addr,e)}function og(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||ju,r[o])}function ag(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||td,r[o])}function lg(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||nd,r[o])}function cg(n,e,t){let i=this.cache,s=e.length,r=bl(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),Ot(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||ed,r[o])}function hg(n){switch(n){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return Z0;case 35674:return $0;case 35675:return J0;case 35676:return K0;case 5124:case 35670:return Q0;case 35667:case 35671:return j0;case 35668:case 35672:return eg;case 35669:case 35673:return tg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return rg;case 35678:case 36198:case 36298:case 36306:case 35682:return og;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return lg;case 36289:case 36303:case 36311:case 36292:return cg}}var Jc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W0(t.type)}},Kc=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hg(t.type)}},Qc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],i)}}},$c=/(\w+)(\])?(\[|\.)?/g;function Hu(n,e){n.seq.push(e),n.map[e.id]=e}function ug(n,e,t){let i=n.name,s=i.length;for($c.lastIndex=0;;){let r=$c.exec(i),o=$c.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Hu(t,c===void 0?new Jc(a,n,e):new Kc(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new Qc(a),Hu(t,d)),t=d}}}var Zs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);ug(r,o,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&i.push(o)}return i}};function Vu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var dg=37297,fg=0;function pg(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}var Gu=new Xe;function mg(n){nt._getMatrix(Gu,nt.workingColorSpace,n);let e=`mat3( ${Gu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Sr:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Wu(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+pg(n.getShaderSource(e),a)}else return r}function gg(n,e){let t=mg(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function _g(n,e){let t;switch(e){case Pa:t="Linear";break;case Ia:t="Reinhard";break;case La:t="Cineon";break;case Vs:t="ACESFilmic";break;case Ua:t="AgX";break;case Na:t="Neutral";break;case Da:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ml=new C;function vg(){nt.getLuminanceCoefficients(Ml);let n=Ml.x.toFixed(4),e=Ml.y.toFixed(4),t=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function xg(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mg(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Qr(n){return n!==""}function Xu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(n){return n.replace(Sg,Eg)}var bg=new Map;function Eg(n,e){let t=$e[e];if(t===void 0){let i=bg.get(e);if(i!==void 0)t=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jc(t)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yu(n){return n.replace(Tg,wg)}function wg(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ag(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Sc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Sa?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rg(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qi:case ji:e="ENVMAP_TYPE_CUBE";break;case qr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ji&&(e="ENVMAP_MODE_REFRACTION"),e}function Pg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Tc:e="ENVMAP_BLENDING_MULTIPLY";break;case uu:e="ENVMAP_BLENDING_MIX";break;case du:e="ENVMAP_BLENDING_ADD";break}return e}function Ig(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lg(n,e,t,i){let s=n.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Ag(t),c=Rg(t),h=Cg(t),d=Pg(t),f=Ig(t),u=yg(t),m=xg(r),_=s.createProgram(),g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qr).join(`
`),p.length>0&&(p+=`
`)):(g=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),p=[Zu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?$e.tonemapping_pars_fragment:"",t.toneMapping!==ai?_g("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,gg("linearToOutputTexel",t.outputColorSpace),vg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),o=jc(o),o=Xu(o,t),o=qu(o,t),a=jc(a),a=Xu(a,t),a=qu(a,t),o=Yu(o),a=Yu(a),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Fc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=M+g+o,x=M+p+a,w=Vu(s,s.VERTEX_SHADER,b),T=Vu(s,s.FRAGMENT_SHADER,x);s.attachShader(_,w),s.attachShader(_,T),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(U){if(n.debug.checkShaderErrors){let z=s.getProgramInfoLog(_)||"",G=s.getShaderInfoLog(w)||"",q=s.getShaderInfoLog(T)||"",$=z.trim(),V=G.trim(),oe=q.trim(),W=!0,ue=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,w,T);else{let de=Wu(s,w,"vertex"),Ie=Wu(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+$+`
`+de+`
`+Ie)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(V===""||oe==="")&&(ue=!1);ue&&(U.diagnostics={runnable:W,programLog:$,vertexShader:{log:V,prefix:g},fragmentShader:{log:oe,prefix:p}})}s.deleteShader(w),s.deleteShader(T),D=new Zs(s,_),E=Mg(s,_)}let D;this.getUniforms=function(){return D===void 0&&P(this),D};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,dg)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}var Dg=0,eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new th(e),t.set(e,i)),i}},th=class{constructor(e){this.id=Dg++,this.code=e,this.usedTimes=0}};function Ug(n,e,t,i,s,r,o){let a=new Ns,l=new eh,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,u=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return c.add(E),E===0?"uv":`uv${E}`}function g(E,S,U,z,G){let q=z.fog,$=G.geometry,V=E.isMeshStandardMaterial?z.environment:null,oe=(E.isMeshStandardMaterial?t:e).get(E.envMap||V),W=oe&&oe.mapping===qr?oe.image.height:null,ue=m[E.type];E.precision!==null&&(u=s.getMaxPrecision(E.precision),u!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",u,"instead."));let de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ie=de!==void 0?de.length:0,Ke=0;$.morphAttributes.position!==void 0&&(Ke=1),$.morphAttributes.normal!==void 0&&(Ke=2),$.morphAttributes.color!==void 0&&(Ke=3);let ct,it,qe,Y;if(ue){let st=Gn[ue];ct=st.vertexShader,it=st.fragmentShader}else ct=E.vertexShader,it=E.fragmentShader,l.update(E),qe=l.getVertexShaderID(E),Y=l.getFragmentShaderID(E);let te=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Oe=G.isInstancedMesh===!0,Re=G.isBatchedMesh===!0,Qe=!!E.map,Nt=!!E.matcap,I=!!oe,yt=!!E.aoMap,He=!!E.lightMap,Ue=!!E.bumpMap,be=!!E.normalMap,mt=!!E.displacementMap,we=!!E.emissiveMap,We=!!E.metalnessMap,Rt=!!E.roughnessMap,bt=E.anisotropy>0,A=E.clearcoat>0,y=E.dispersion>0,k=E.iridescence>0,Z=E.sheen>0,j=E.transmission>0,X=bt&&!!E.anisotropyMap,Ce=A&&!!E.clearcoatMap,ae=A&&!!E.clearcoatNormalMap,he=A&&!!E.clearcoatRoughnessMap,xe=k&&!!E.iridescenceMap,ie=k&&!!E.iridescenceThicknessMap,pe=Z&&!!E.sheenColorMap,Ne=Z&&!!E.sheenRoughnessMap,_e=!!E.specularMap,me=!!E.specularColorMap,Le=!!E.specularIntensityMap,N=j&&!!E.transmissionMap,re=j&&!!E.thicknessMap,fe=!!E.gradientMap,Se=!!E.alphaMap,se=E.alphaTest>0,K=!!E.alphaHash,Ae=!!E.extensions,Ve=ai;E.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=n.toneMapping);let gt={shaderID:ue,shaderType:E.type,shaderName:E.name,vertexShader:ct,fragmentShader:it,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:Y,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:u,batching:Re,batchingColor:Re&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qi,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:Nt,envMap:I,envMapMode:I&&oe.mapping,envMapCubeUVHeight:W,aoMap:yt,lightMap:He,bumpMap:Ue,normalMap:be,displacementMap:f&&mt,emissiveMap:we,normalMapObjectSpace:be&&E.normalMapType===gu,normalMapTangentSpace:be&&E.normalMapType===Uc,metalnessMap:We,roughnessMap:Rt,anisotropy:bt,anisotropyMap:X,clearcoat:A,clearcoatMap:Ce,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,dispersion:y,iridescence:k,iridescenceMap:xe,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:pe,sheenRoughnessMap:Ne,specularMap:_e,specularColorMap:me,specularIntensityMap:Le,transmission:j,transmissionMap:N,thicknessMap:re,gradientMap:fe,opaque:E.transparent===!1&&E.blending===Gi&&E.alphaToCoverage===!1,alphaMap:Se,alphaTest:se,alphaHash:K,combine:E.combine,mapUv:Qe&&_(E.map.channel),aoMapUv:yt&&_(E.aoMap.channel),lightMapUv:He&&_(E.lightMap.channel),bumpMapUv:Ue&&_(E.bumpMap.channel),normalMapUv:be&&_(E.normalMap.channel),displacementMapUv:mt&&_(E.displacementMap.channel),emissiveMapUv:we&&_(E.emissiveMap.channel),metalnessMapUv:We&&_(E.metalnessMap.channel),roughnessMapUv:Rt&&_(E.roughnessMap.channel),anisotropyMapUv:X&&_(E.anisotropyMap.channel),clearcoatMapUv:Ce&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&_(E.sheenRoughnessMap.channel),specularMapUv:_e&&_(E.specularMap.channel),specularColorMapUv:me&&_(E.specularColorMap.channel),specularIntensityMapUv:Le&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:re&&_(E.thicknessMap.channel),alphaMapUv:Se&&_(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(be||bt),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Qe||Se),fog:!!q,useFog:E.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:E.flatShading===!0&&E.wireframe===!1,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Te,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:Ke,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&nt.getTransfer(E.map.colorSpace)===lt,decodeVideoTextureEmissive:we&&E.emissiveMap.isVideoTexture===!0&&nt.getTransfer(E.emissiveMap.colorSpace)===lt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===wt,flipSided:E.side===Vt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||Re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function p(E){let S=[];if(E.shaderID?S.push(E.shaderID):(S.push(E.customVertexShaderID),S.push(E.customFragmentShaderID)),E.defines!==void 0)for(let U in E.defines)S.push(U),S.push(E.defines[U]);return E.isRawShaderMaterial===!1&&(M(S,E),b(S,E),S.push(n.outputColorSpace)),S.push(E.customProgramCacheKey),S.join()}function M(E,S){E.push(S.precision),E.push(S.outputColorSpace),E.push(S.envMapMode),E.push(S.envMapCubeUVHeight),E.push(S.mapUv),E.push(S.alphaMapUv),E.push(S.lightMapUv),E.push(S.aoMapUv),E.push(S.bumpMapUv),E.push(S.normalMapUv),E.push(S.displacementMapUv),E.push(S.emissiveMapUv),E.push(S.metalnessMapUv),E.push(S.roughnessMapUv),E.push(S.anisotropyMapUv),E.push(S.clearcoatMapUv),E.push(S.clearcoatNormalMapUv),E.push(S.clearcoatRoughnessMapUv),E.push(S.iridescenceMapUv),E.push(S.iridescenceThicknessMapUv),E.push(S.sheenColorMapUv),E.push(S.sheenRoughnessMapUv),E.push(S.specularMapUv),E.push(S.specularColorMapUv),E.push(S.specularIntensityMapUv),E.push(S.transmissionMapUv),E.push(S.thicknessMapUv),E.push(S.combine),E.push(S.fogExp2),E.push(S.sizeAttenuation),E.push(S.morphTargetsCount),E.push(S.morphAttributeCount),E.push(S.numDirLights),E.push(S.numPointLights),E.push(S.numSpotLights),E.push(S.numSpotLightMaps),E.push(S.numHemiLights),E.push(S.numRectAreaLights),E.push(S.numDirLightShadows),E.push(S.numPointLightShadows),E.push(S.numSpotLightShadows),E.push(S.numSpotLightShadowsWithMaps),E.push(S.numLightProbes),E.push(S.shadowMapType),E.push(S.toneMapping),E.push(S.numClippingPlanes),E.push(S.numClipIntersection),E.push(S.depthPacking)}function b(E,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),S.gradientMap&&a.enable(22),E.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),E.push(a.mask)}function x(E){let S=m[E.type],U;if(S){let z=Gn[S];U=ci.clone(z.uniforms)}else U=E.uniforms;return U}function w(E,S){let U;for(let z=0,G=h.length;z<G;z++){let q=h[z];if(q.cacheKey===S){U=q,++U.usedTimes;break}}return U===void 0&&(U=new Lg(n,S,E,r),h.push(U)),U}function T(E){if(--E.usedTimes===0){let S=h.indexOf(E);h[S]=h[h.length-1],h.pop(),E.destroy()}}function P(E){l.remove(E)}function D(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:w,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:D}}function Ng(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Fg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $u(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Ju(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(d,f,u,m,_,g){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:m,renderOrder:d.renderOrder,z:_,group:g},n[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=m,p.renderOrder=d.renderOrder,p.z=_,p.group=g),e++,p}function a(d,f,u,m,_,g){let p=o(d,f,u,m,_,g);u.transmission>0?i.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(d,f,u,m,_,g){let p=o(d,f,u,m,_,g);u.transmission>0?i.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||Fg),i.length>1&&i.sort(f||$u),s.length>1&&s.sort(f||$u)}function h(){for(let d=e,f=n.length;d<f;d++){let u=n[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bg(){let n=new WeakMap;function e(i,s){let r=n.get(i),o;return r===void 0?(o=new Ju,n.set(i,[o])):s>=r.length?(o=new Ju,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Og(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ge};break;case"SpotLight":t={position:new C,direction:new C,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new C,halfWidth:new C,halfHeight:new C};break}return n[e.id]=t,t}}}function zg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var kg=0;function Hg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vg(n){let e=new Og,t=zg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let s=new C,r=new at,o=new at;function a(c){let h=0,d=0,f=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let u=0,m=0,_=0,g=0,p=0,M=0,b=0,x=0,w=0,T=0,P=0;c.sort(Hg);for(let E=0,S=c.length;E<S;E++){let U=c[E],z=U.color,G=U.intensity,q=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=z.r*G,d+=z.g*G,f+=z.b*G;else if(U.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],G);P++}else if(U.isDirectionalLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let oe=U.shadow,W=t.get(U);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,i.directionalShadow[u]=W,i.directionalShadowMap[u]=$,i.directionalShadowMatrix[u]=U.shadow.matrix,M++}i.directional[u]=V,u++}else if(U.isSpotLight){let V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(z).multiplyScalar(G),V.distance=q,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[_]=V;let oe=U.shadow;if(U.map&&(i.spotLightMap[w]=U.map,w++,oe.updateMatrices(U),U.castShadow&&T++),i.spotLightMatrix[_]=oe.matrix,U.castShadow){let W=t.get(U);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,i.spotShadow[_]=W,i.spotShadowMap[_]=$,x++}_++}else if(U.isRectAreaLight){let V=e.get(U);V.color.copy(z).multiplyScalar(G),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[g]=V,g++}else if(U.isPointLight){let V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){let oe=U.shadow,W=t.get(U);W.shadowIntensity=oe.intensity,W.shadowBias=oe.bias,W.shadowNormalBias=oe.normalBias,W.shadowRadius=oe.radius,W.shadowMapSize=oe.mapSize,W.shadowCameraNear=oe.camera.near,W.shadowCameraFar=oe.camera.far,i.pointShadow[m]=W,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=U.shadow.matrix,b++}i.point[m]=V,m++}else if(U.isHemisphereLight){let V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(G),V.groundColor.copy(U.groundColor).multiplyScalar(G),i.hemi[p]=V,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let D=i.hash;(D.directionalLength!==u||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==M||D.numPointShadows!==b||D.numSpotShadows!==x||D.numSpotMaps!==w||D.numLightProbes!==P)&&(i.directional.length=u,i.spot.length=_,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=x+w-T,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,D.directionalLength=u,D.pointLength=m,D.spotLength=_,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=M,D.numPointShadows=b,D.numSpotShadows=x,D.numSpotMaps=w,D.numLightProbes=P,i.version=kg++)}function l(c,h){let d=0,f=0,u=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let b=c[p];if(b.isDirectionalLight){let x=i.directional[d];x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),d++}else if(b.isSpotLight){let x=i.spot[u];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(b.isRectAreaLight){let x=i.rectArea[m];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(b.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(b.width*.5,0,0),x.halfHeight.set(0,b.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(b.isPointLight){let x=i.point[f];x.position.setFromMatrixPosition(b.matrixWorld),x.position.applyMatrix4(g),f++}else if(b.isHemisphereLight){let x=i.hemi[_];x.direction.setFromMatrixPosition(b.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:i}}function Ku(n){let e=new Vg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Gg(n){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Ku(n),e.set(s,[a])):r>=o.length?(a=new Ku(n),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:t,dispose:i}}var Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`;function qg(n,e,t){let i=new Bs,s=new le,r=new le,o=new ut,a=new ca({depthPacking:mu}),l=new ha,c={},h=t.maxTextureSize,d={[ei]:Vt,[Vt]:ei,[wt]:wt},f=new Pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let m=new pt;m.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ke(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Sc;let p=this.type;this.render=function(T,P,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;let E=n.getRenderTarget(),S=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Dn),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let G=p!==Vn&&this.type===Vn,q=p===Vn&&this.type!==Vn;for(let $=0,V=T.length;$<V;$++){let oe=T[$],W=oe.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let ue=W.getFrameExtents();if(s.multiply(ue),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ue.x),s.x=r.x*ue.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ue.y),s.y=r.y*ue.y,W.mapSize.y=r.y)),W.map===null||G===!0||q===!0){let Ie=this.type!==Vn?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Xt(s.x,s.y,Ie),W.map.texture.name=oe.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let de=W.getViewportCount();for(let Ie=0;Ie<de;Ie++){let Ke=W.getViewport(Ie);o.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),z.viewport(o),W.updateMatrices(oe,Ie),i=W.getFrustum(),x(P,D,W.camera,oe,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&M(W,D),W.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,S,U)};function M(T,P){let D=e.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Xt(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,D,f,_,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,D,u,_,null)}function b(T,P,D,E){let S=null,U=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)S=U;else if(S=D.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let z=S.uuid,G=P.uuid,q=c[z];q===void 0&&(q={},c[z]=q);let $=q[G];$===void 0&&($=S.clone(),q[G]=$,P.addEventListener("dispose",w)),S=$}if(S.visible=P.visible,S.wireframe=P.wireframe,E===Vn?S.side=P.shadowSide!==null?P.shadowSide:P.side:S.side=P.shadowSide!==null?P.shadowSide:d[P.side],S.alphaMap=P.alphaMap,S.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,S.map=P.map,S.clipShadows=P.clipShadows,S.clippingPlanes=P.clippingPlanes,S.clipIntersection=P.clipIntersection,S.displacementMap=P.displacementMap,S.displacementScale=P.displacementScale,S.displacementBias=P.displacementBias,S.wireframeLinewidth=P.wireframeLinewidth,S.linewidth=P.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let z=n.properties.get(S);z.light=D}return S}function x(T,P,D,E,S){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Vn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);let G=e.update(T),q=T.material;if(Array.isArray(q)){let $=G.groups;for(let V=0,oe=$.length;V<oe;V++){let W=$[V],ue=q[W.materialIndex];if(ue&&ue.visible){let de=b(T,ue,E,S);T.onBeforeShadow(n,T,P,D,G,de,W),n.renderBufferDirect(D,null,G,de,T,W),T.onAfterShadow(n,T,P,D,G,de,W)}}}else if(q.visible){let $=b(T,q,E,S);T.onBeforeShadow(n,T,P,D,G,$,null),n.renderBufferDirect(D,null,G,$,T,null),T.onAfterShadow(n,T,P,D,G,$,null)}}let z=T.children;for(let G=0,q=z.length;G<q;G++)x(z[G],P,D,E,S)}function w(T){T.target.removeEventListener("dispose",w);for(let D in c){let E=c[D],S=T.target.uuid;S in E&&(E[S].dispose(),delete E[S])}}}var Yg={[ba]:Ea,[Ta]:Ra,[wa]:Ca,[Wi]:Aa,[Ea]:ba,[Ra]:Ta,[Ca]:wa,[Aa]:Wi};function Zg(n,e){function t(){let N=!1,re=new ut,fe=null,Se=new ut(0,0,0,0);return{setMask:function(se){fe!==se&&!N&&(n.colorMask(se,se,se,se),fe=se)},setLocked:function(se){N=se},setClear:function(se,K,Ae,Ve,gt){gt===!0&&(se*=Ve,K*=Ve,Ae*=Ve),re.set(se,K,Ae,Ve),Se.equals(re)===!1&&(n.clearColor(se,K,Ae,Ve),Se.copy(re))},reset:function(){N=!1,fe=null,Se.set(-1,0,0,0)}}}function i(){let N=!1,re=!1,fe=null,Se=null,se=null;return{setReversed:function(K){if(re!==K){let Ae=e.get("EXT_clip_control");K?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),re=K;let Ve=se;se=null,this.setClear(Ve)}},getReversed:function(){return re},setTest:function(K){K?te(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(K){fe!==K&&!N&&(n.depthMask(K),fe=K)},setFunc:function(K){if(re&&(K=Yg[K]),Se!==K){switch(K){case ba:n.depthFunc(n.NEVER);break;case Ea:n.depthFunc(n.ALWAYS);break;case Ta:n.depthFunc(n.LESS);break;case Wi:n.depthFunc(n.LEQUAL);break;case wa:n.depthFunc(n.EQUAL);break;case Aa:n.depthFunc(n.GEQUAL);break;case Ra:n.depthFunc(n.GREATER);break;case Ca:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Se=K}},setLocked:function(K){N=K},setClear:function(K){se!==K&&(re&&(K=1-K),n.clearDepth(K),se=K)},reset:function(){N=!1,fe=null,Se=null,se=null,re=!1}}}function s(){let N=!1,re=null,fe=null,Se=null,se=null,K=null,Ae=null,Ve=null,gt=null;return{setTest:function(st){N||(st?te(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(st){re!==st&&!N&&(n.stencilMask(st),re=st)},setFunc:function(st,Sn,sn){(fe!==st||Se!==Sn||se!==sn)&&(n.stencilFunc(st,Sn,sn),fe=st,Se=Sn,se=sn)},setOp:function(st,Sn,sn){(K!==st||Ae!==Sn||Ve!==sn)&&(n.stencilOp(st,Sn,sn),K=st,Ae=Sn,Ve=sn)},setLocked:function(st){N=st},setClear:function(st){gt!==st&&(n.clearStencil(st),gt=st)},reset:function(){N=!1,re=null,fe=null,Se=null,se=null,K=null,Ae=null,Ve=null,gt=null}}}let r=new t,o=new i,a=new s,l=new WeakMap,c=new WeakMap,h={},d={},f=new WeakMap,u=[],m=null,_=!1,g=null,p=null,M=null,b=null,x=null,w=null,T=null,P=new ge(0,0,0),D=0,E=!1,S=null,U=null,z=null,G=null,q=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,oe=0,W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=oe>=1):W.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=oe>=2);let ue=null,de={},Ie=n.getParameter(n.SCISSOR_BOX),Ke=n.getParameter(n.VIEWPORT),ct=new ut().fromArray(Ie),it=new ut().fromArray(Ke);function qe(N,re,fe,Se){let se=new Uint8Array(4),K=n.createTexture();n.bindTexture(N,K),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<fe;Ae++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(re,0,n.RGBA,1,1,Se,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(re+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return K}let Y={};Y[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(n.DEPTH_TEST),o.setFunc(Wi),Ue(!1),be(Mc),te(n.CULL_FACE),yt(Dn);function te(N){h[N]!==!0&&(n.enable(N),h[N]=!0)}function Te(N){h[N]!==!1&&(n.disable(N),h[N]=!1)}function Oe(N,re){return d[N]!==re?(n.bindFramebuffer(N,re),d[N]=re,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=re),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=re),!0):!1}function Re(N,re){let fe=u,Se=!1;if(N){fe=f.get(re),fe===void 0&&(fe=[],f.set(re,fe));let se=N.textures;if(fe.length!==se.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let K=0,Ae=se.length;K<Ae;K++)fe[K]=n.COLOR_ATTACHMENT0+K;fe.length=se.length,Se=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Se=!0);Se&&n.drawBuffers(fe)}function Qe(N){return m!==N?(n.useProgram(N),m=N,!0):!1}let Nt={[xi]:n.FUNC_ADD,[Zh]:n.FUNC_SUBTRACT,[$h]:n.FUNC_REVERSE_SUBTRACT};Nt[Jh]=n.MIN,Nt[Kh]=n.MAX;let I={[Qh]:n.ZERO,[jh]:n.ONE,[eu]:n.SRC_COLOR,[ko]:n.SRC_ALPHA,[ou]:n.SRC_ALPHA_SATURATE,[su]:n.DST_COLOR,[nu]:n.DST_ALPHA,[tu]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[ru]:n.ONE_MINUS_DST_COLOR,[iu]:n.ONE_MINUS_DST_ALPHA,[au]:n.CONSTANT_COLOR,[lu]:n.ONE_MINUS_CONSTANT_COLOR,[cu]:n.CONSTANT_ALPHA,[hu]:n.ONE_MINUS_CONSTANT_ALPHA};function yt(N,re,fe,Se,se,K,Ae,Ve,gt,st){if(N===Dn){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(te(n.BLEND),_=!0),N!==Yh){if(N!==g||st!==E){if((p!==xi||x!==xi)&&(n.blendEquation(n.FUNC_ADD),p=xi,x=xi),st)switch(N){case Gi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFunc(n.ONE,n.ONE);break;case bc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ec:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jt:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case bc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ec:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,b=null,w=null,T=null,P.set(0,0,0),D=0,g=N,E=st}return}se=se||re,K=K||fe,Ae=Ae||Se,(re!==p||se!==x)&&(n.blendEquationSeparate(Nt[re],Nt[se]),p=re,x=se),(fe!==M||Se!==b||K!==w||Ae!==T)&&(n.blendFuncSeparate(I[fe],I[Se],I[K],I[Ae]),M=fe,b=Se,w=K,T=Ae),(Ve.equals(P)===!1||gt!==D)&&(n.blendColor(Ve.r,Ve.g,Ve.b,gt),P.copy(Ve),D=gt),g=N,E=!1}function He(N,re){N.side===wt?Te(n.CULL_FACE):te(n.CULL_FACE);let fe=N.side===Vt;re&&(fe=!fe),Ue(fe),N.blending===Gi&&N.transparent===!1?yt(Dn):yt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let Se=N.stencilWrite;a.setTest(Se),Se&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),we(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(N){S!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),S=N)}function be(N){N!==Xh?(te(n.CULL_FACE),N!==U&&(N===Mc?n.cullFace(n.BACK):N===qh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),U=N}function mt(N){N!==z&&(V&&n.lineWidth(N),z=N)}function we(N,re,fe){N?(te(n.POLYGON_OFFSET_FILL),(G!==re||q!==fe)&&(n.polygonOffset(re,fe),G=re,q=fe)):Te(n.POLYGON_OFFSET_FILL)}function We(N){N?te(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function Rt(N){N===void 0&&(N=n.TEXTURE0+$-1),ue!==N&&(n.activeTexture(N),ue=N)}function bt(N,re,fe){fe===void 0&&(ue===null?fe=n.TEXTURE0+$-1:fe=ue);let Se=de[fe];Se===void 0&&(Se={type:void 0,texture:void 0},de[fe]=Se),(Se.type!==N||Se.texture!==re)&&(ue!==fe&&(n.activeTexture(fe),ue=fe),n.bindTexture(N,re||Y[N]),Se.type=N,Se.texture=re)}function A(){let N=de[ue];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function k(){try{n.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{n.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ce(){try{n.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{n.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{n.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{n.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function pe(N){ct.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function Ne(N){it.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),it.copy(N))}function _e(N,re){let fe=c.get(re);fe===void 0&&(fe=new WeakMap,c.set(re,fe));let Se=fe.get(N);Se===void 0&&(Se=n.getUniformBlockIndex(re,N.name),fe.set(N,Se))}function me(N,re){let Se=c.get(re).get(N);l.get(re)!==Se&&(n.uniformBlockBinding(re,Se,N.__bindingPointIndex),l.set(re,Se))}function Le(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ue=null,de={},d={},f=new WeakMap,u=[],m=null,_=!1,g=null,p=null,M=null,b=null,x=null,w=null,T=null,P=new ge(0,0,0),D=0,E=!1,S=null,U=null,z=null,G=null,q=null,ct.set(0,0,n.canvas.width,n.canvas.height),it.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:Te,bindFramebuffer:Oe,drawBuffers:Re,useProgram:Qe,setBlending:yt,setMaterial:He,setFlipSided:Ue,setCullFace:be,setLineWidth:mt,setPolygonOffset:we,setScissorTest:We,activeTexture:Rt,bindTexture:bt,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:xe,texImage3D:ie,updateUBOMapping:_e,uniformBlockBinding:me,texStorage2D:ae,texStorage3D:he,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Ce,scissor:pe,viewport:Ne,reset:Le}}function $g(n,e,t,i,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return u?new OffscreenCanvas(A,y):Er("canvas")}function _(A,y,k){let Z=1,j=bt(A);if((j.width>k||j.height>k)&&(Z=k/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let X=Math.floor(Z*j.width),Ce=Math.floor(Z*j.height);d===void 0&&(d=m(X,Ce));let ae=y?m(X,Ce):d;return ae.width=X,ae.height=Ce,ae.getContext("2d").drawImage(A,0,0,X,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Ce+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(A,y,k,Z,j=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=y;if(y===n.RED&&(k===n.FLOAT&&(X=n.R32F),k===n.HALF_FLOAT&&(X=n.R16F),k===n.UNSIGNED_BYTE&&(X=n.R8)),y===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.R8UI),k===n.UNSIGNED_SHORT&&(X=n.R16UI),k===n.UNSIGNED_INT&&(X=n.R32UI),k===n.BYTE&&(X=n.R8I),k===n.SHORT&&(X=n.R16I),k===n.INT&&(X=n.R32I)),y===n.RG&&(k===n.FLOAT&&(X=n.RG32F),k===n.HALF_FLOAT&&(X=n.RG16F),k===n.UNSIGNED_BYTE&&(X=n.RG8)),y===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RG8UI),k===n.UNSIGNED_SHORT&&(X=n.RG16UI),k===n.UNSIGNED_INT&&(X=n.RG32UI),k===n.BYTE&&(X=n.RG8I),k===n.SHORT&&(X=n.RG16I),k===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGB8UI),k===n.UNSIGNED_SHORT&&(X=n.RGB16UI),k===n.UNSIGNED_INT&&(X=n.RGB32UI),k===n.BYTE&&(X=n.RGB8I),k===n.SHORT&&(X=n.RGB16I),k===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),k===n.UNSIGNED_INT&&(X=n.RGBA32UI),k===n.BYTE&&(X=n.RGBA8I),k===n.SHORT&&(X=n.RGBA16I),k===n.INT&&(X=n.RGBA32I)),y===n.RGB&&(k===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),k===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),y===n.RGBA){let Ce=j?Sr:nt.getTransfer(Z);k===n.FLOAT&&(X=n.RGBA32F),k===n.HALF_FLOAT&&(X=n.RGBA16F),k===n.UNSIGNED_BYTE&&(X=Ce===lt?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function x(A,y){let k;return A?y===null||y===Li||y===Ws?k=n.DEPTH24_STENCIL8:y===Nn?k=n.DEPTH32F_STENCIL8:y===Gs&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===Ws?k=n.DEPTH_COMPONENT24:y===Nn?k=n.DEPTH_COMPONENT32F:y===Gs&&(k=n.DEPTH_COMPONENT16),k}function w(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==Rn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){let y=A.target;y.removeEventListener("dispose",T),D(y),y.isVideoTexture&&h.delete(y)}function P(A){let y=A.target;y.removeEventListener("dispose",P),S(y)}function D(A){let y=i.get(A);if(y.__webglInit===void 0)return;let k=A.source,Z=f.get(k);if(Z){let j=Z[y.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(A),Object.keys(Z).length===0&&f.delete(k)}i.remove(A)}function E(A){let y=i.get(A);n.deleteTexture(y.__webglTexture);let k=A.source,Z=f.get(k);delete Z[y.__cacheKey],o.memory.textures--}function S(A){let y=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let j=0;j<y.__webglFramebuffer[Z].length;j++)n.deleteFramebuffer(y.__webglFramebuffer[Z][j]);else n.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)n.deleteFramebuffer(y.__webglFramebuffer[Z]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=A.textures;for(let Z=0,j=k.length;Z<j;Z++){let X=i.get(k[Z]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(A)}let U=0;function z(){U=0}function G(){let A=U;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function q(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){let k=i.get(A);if(A.isVideoTexture&&We(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&k.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(k,A,y);return}}else A.isExternalTexture&&(k.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+y)}function V(A,y){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Y(k,A,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+y)}function oe(A,y){let k=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){Y(k,A,y);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+y)}function W(A,y){let k=i.get(A);if(A.version>0&&k.__version!==A.version){te(k,A,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+y)}let ue={[Xi]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[Vo]:n.MIRRORED_REPEAT},de={[nn]:n.NEAREST,[fu]:n.NEAREST_MIPMAP_NEAREST,[Yr]:n.NEAREST_MIPMAP_LINEAR,[Rn]:n.LINEAR,[Ba]:n.LINEAR_MIPMAP_NEAREST,[Ii]:n.LINEAR_MIPMAP_LINEAR},Ie={[_u]:n.NEVER,[bu]:n.ALWAYS,[vu]:n.LESS,[Nc]:n.LEQUAL,[yu]:n.EQUAL,[Su]:n.GEQUAL,[xu]:n.GREATER,[Mu]:n.NOTEQUAL};function Ke(A,y){if(y.type===Nn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Rn||y.magFilter===Ba||y.magFilter===Yr||y.magFilter===Ii||y.minFilter===Rn||y.minFilter===Ba||y.minFilter===Yr||y.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ue[y.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ue[y.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ue[y.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,de[y.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,de[y.minFilter]),y.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Yr&&y.minFilter!==Ii||y.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ct(A,y){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));let Z=y.source,j=f.get(Z);j===void 0&&(j={},f.set(Z,j));let X=q(y);if(X!==A.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,k=!0),j[X].usedTimes++;let Ce=j[A.__cacheKey];Ce!==void 0&&(j[A.__cacheKey].usedTimes--,Ce.usedTimes===0&&E(y)),A.__cacheKey=X,A.__webglTexture=j[X].texture}return k}function it(A,y,k){return Math.floor(Math.floor(A/k)/y)}function qe(A,y,k,Z){let X=A.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,k,Z,y.data);else{X.sort((ie,pe)=>ie.start-pe.start);let Ce=0;for(let ie=1;ie<X.length;ie++){let pe=X[Ce],Ne=X[ie],_e=pe.start+pe.count,me=it(Ne.start,y.width,4),Le=it(pe.start,y.width,4);Ne.start<=_e+1&&me===Le&&it(Ne.start+Ne.count-1,y.width,4)===me?pe.count=Math.max(pe.count,Ne.start+Ne.count-pe.start):(++Ce,X[Ce]=Ne)}X.length=Ce+1;let ae=n.getParameter(n.UNPACK_ROW_LENGTH),he=n.getParameter(n.UNPACK_SKIP_PIXELS),xe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ie=0,pe=X.length;ie<pe;ie++){let Ne=X[ie],_e=Math.floor(Ne.start/4),me=Math.ceil(Ne.count/4),Le=_e%y.width,N=Math.floor(_e/y.width),re=me,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,N),t.texSubImage2D(n.TEXTURE_2D,0,Le,N,re,fe,k,Z,y.data)}A.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,he),n.pixelStorei(n.UNPACK_SKIP_ROWS,xe)}}function Y(A,y,k){let Z=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=n.TEXTURE_3D);let j=ct(A,y),X=y.source;t.bindTexture(Z,A.__webglTexture,n.TEXTURE0+k);let Ce=i.get(X);if(X.version!==Ce.__version||j===!0){t.activeTexture(n.TEXTURE0+k);let ae=nt.getPrimaries(nt.workingColorSpace),he=y.colorSpace===li?null:nt.getPrimaries(y.colorSpace),xe=y.colorSpace===li||ae===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);let ie=_(y.image,!1,s.maxTextureSize);ie=Rt(y,ie);let pe=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),_e=b(y.internalFormat,pe,Ne,y.colorSpace,y.isVideoTexture);Ke(Z,y);let me,Le=y.mipmaps,N=y.isVideoTexture!==!0,re=Ce.__version===void 0||j===!0,fe=X.dataReady,Se=w(y,ie);if(y.isDepthTexture)_e=x(y.format===Xs,y.type),re&&(N?t.texStorage2D(n.TEXTURE_2D,1,_e,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,_e,ie.width,ie.height,0,pe,Ne,null));else if(y.isDataTexture)if(Le.length>0){N&&re&&t.texStorage2D(n.TEXTURE_2D,Se,_e,Le[0].width,Le[0].height);for(let se=0,K=Le.length;se<K;se++)me=Le[se],N?fe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,pe,Ne,me.data):t.texImage2D(n.TEXTURE_2D,se,_e,me.width,me.height,0,pe,Ne,me.data);y.generateMipmaps=!1}else N?(re&&t.texStorage2D(n.TEXTURE_2D,Se,_e,ie.width,ie.height),fe&&qe(y,ie,pe,Ne)):t.texImage2D(n.TEXTURE_2D,0,_e,ie.width,ie.height,0,pe,Ne,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){N&&re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,_e,Le[0].width,Le[0].height,ie.depth);for(let se=0,K=Le.length;se<K;se++)if(me=Le[se],y.format!==vn)if(pe!==null)if(N){if(fe)if(y.layerUpdates.size>0){let Ae=Gc(me.width,me.height,y.format,y.type);for(let Ve of y.layerUpdates){let gt=me.data.subarray(Ve*Ae/me.data.BYTES_PER_ELEMENT,(Ve+1)*Ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Ve,me.width,me.height,1,pe,gt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,ie.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,_e,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,ie.depth,pe,Ne,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,_e,me.width,me.height,ie.depth,0,pe,Ne,me.data)}else{N&&re&&t.texStorage2D(n.TEXTURE_2D,Se,_e,Le[0].width,Le[0].height);for(let se=0,K=Le.length;se<K;se++)me=Le[se],y.format!==vn?pe!==null?N?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,se,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?fe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,me.width,me.height,pe,Ne,me.data):t.texImage2D(n.TEXTURE_2D,se,_e,me.width,me.height,0,pe,Ne,me.data)}else if(y.isDataArrayTexture)if(N){if(re&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Se,_e,ie.width,ie.height,ie.depth),fe)if(y.layerUpdates.size>0){let se=Gc(ie.width,ie.height,y.format,y.type);for(let K of y.layerUpdates){let Ae=ie.data.subarray(K*se/ie.data.BYTES_PER_ELEMENT,(K+1)*se/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,pe,Ne,Ae)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ne,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ie.width,ie.height,ie.depth,0,pe,Ne,ie.data);else if(y.isData3DTexture)N?(re&&t.texStorage3D(n.TEXTURE_3D,Se,_e,ie.width,ie.height,ie.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,pe,Ne,ie.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ie.width,ie.height,ie.depth,0,pe,Ne,ie.data);else if(y.isFramebufferTexture){if(re)if(N)t.texStorage2D(n.TEXTURE_2D,Se,_e,ie.width,ie.height);else{let se=ie.width,K=ie.height;for(let Ae=0;Ae<Se;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,_e,se,K,0,pe,Ne,null),se>>=1,K>>=1}}else if(Le.length>0){if(N&&re){let se=bt(Le[0]);t.texStorage2D(n.TEXTURE_2D,Se,_e,se.width,se.height)}for(let se=0,K=Le.length;se<K;se++)me=Le[se],N?fe&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe,Ne,me):t.texImage2D(n.TEXTURE_2D,se,_e,pe,Ne,me);y.generateMipmaps=!1}else if(N){if(re){let se=bt(ie);t.texStorage2D(n.TEXTURE_2D,Se,_e,se.width,se.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ne,ie)}else t.texImage2D(n.TEXTURE_2D,0,_e,pe,Ne,ie);g(y)&&p(Z),Ce.__version=X.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function te(A,y,k){if(y.image.length!==6)return;let Z=ct(A,y),j=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);let X=i.get(j);if(j.version!==X.__version||Z===!0){t.activeTexture(n.TEXTURE0+k);let Ce=nt.getPrimaries(nt.workingColorSpace),ae=y.colorSpace===li?null:nt.getPrimaries(y.colorSpace),he=y.colorSpace===li||Ce===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);let xe=y.isCompressedTexture||y.image[0].isCompressedTexture,ie=y.image[0]&&y.image[0].isDataTexture,pe=[];for(let K=0;K<6;K++)!xe&&!ie?pe[K]=_(y.image[K],!0,s.maxCubemapSize):pe[K]=ie?y.image[K].image:y.image[K],pe[K]=Rt(y,pe[K]);let Ne=pe[0],_e=r.convert(y.format,y.colorSpace),me=r.convert(y.type),Le=b(y.internalFormat,_e,me,y.colorSpace),N=y.isVideoTexture!==!0,re=X.__version===void 0||Z===!0,fe=j.dataReady,Se=w(y,Ne);Ke(n.TEXTURE_CUBE_MAP,y);let se;if(xe){N&&re&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Le,Ne.width,Ne.height);for(let K=0;K<6;K++){se=pe[K].mipmaps;for(let Ae=0;Ae<se.length;Ae++){let Ve=se[Ae];y.format!==vn?_e!==null?N?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,0,0,Ve.width,Ve.height,_e,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,Le,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,0,0,Ve.width,Ve.height,_e,me,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae,Le,Ve.width,Ve.height,0,_e,me,Ve.data)}}}else{if(se=y.mipmaps,N&&re){se.length>0&&Se++;let K=bt(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Se,Le,K.width,K.height)}for(let K=0;K<6;K++)if(ie){N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,pe[K].width,pe[K].height,_e,me,pe[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,pe[K].width,pe[K].height,0,_e,me,pe[K].data);for(let Ae=0;Ae<se.length;Ae++){let gt=se[Ae].image[K].image;N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,0,0,gt.width,gt.height,_e,me,gt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,Le,gt.width,gt.height,0,_e,me,gt.data)}}else{N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,_e,me,pe[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Le,_e,me,pe[K]);for(let Ae=0;Ae<se.length;Ae++){let Ve=se[Ae];N?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,0,0,_e,me,Ve.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ae+1,Le,_e,me,Ve.image[K])}}}g(y)&&p(n.TEXTURE_CUBE_MAP),X.__version=j.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Te(A,y,k,Z,j,X){let Ce=r.convert(k.format,k.colorSpace),ae=r.convert(k.type),he=b(k.internalFormat,Ce,ae,k.colorSpace),xe=i.get(y),ie=i.get(k);if(ie.__renderTarget=y,!xe.__hasExternalTextures){let pe=Math.max(1,y.width>>X),Ne=Math.max(1,y.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,he,pe,Ne,y.depth,0,Ce,ae,null):t.texImage2D(j,X,he,pe,Ne,0,Ce,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),we(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,j,ie.__webglTexture,0,mt(y)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,j,ie.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(A,y,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),y.depthBuffer){let Z=y.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,X=x(y.stencilBuffer,j),Ce=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=mt(y);we(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,X,y.width,y.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,X,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,X,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ce,n.RENDERBUFFER,A)}else{let Z=y.textures;for(let j=0;j<Z.length;j++){let X=Z[j],Ce=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),he=b(X.internalFormat,Ce,ae,X.colorSpace),xe=mt(y);k&&we(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,he,y.width,y.height):we(y)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,he,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,he,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=i.get(y.depthTexture);Z.__renderTarget=y,(!Z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);let j=Z.__webglTexture,X=mt(y);if(y.depthTexture.format===Is)we(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(y.depthTexture.format===Xs)we(y)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Qe(A){let y=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let j=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),y.__depthDisposeCallback=j}y.__boundDepthTexture=Z}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");let Z=A.texture.mipmaps;Z&&Z.length>0?Re(y.__webglFramebuffer[0],A):Re(y.__webglFramebuffer,A)}else if(k){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=n.createRenderbuffer(),Oe(y.__webglDepthbuffer[Z],A,!1);else{let j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer[Z];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{let Z=A.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Oe(y.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(A,y,k){let Z=i.get(A);y!==void 0&&Te(Z.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Qe(A)}function I(A){let y=A.texture,k=i.get(A),Z=i.get(y);A.addEventListener("dispose",P);let j=A.textures,X=A.isWebGLCubeRenderTarget===!0,Ce=j.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=y.version,o.memory.textures++),X){k.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[ae]=[];for(let he=0;he<y.mipmaps.length;he++)k.__webglFramebuffer[ae][he]=n.createFramebuffer()}else k.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let ae=0;ae<y.mipmaps.length;ae++)k.__webglFramebuffer[ae]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Ce)for(let ae=0,he=j.length;ae<he;ae++){let xe=i.get(j[ae]);xe.__webglTexture===void 0&&(xe.__webglTexture=n.createTexture(),o.memory.textures++)}if(A.samples>0&&we(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){let he=j[ae];k.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[ae]);let xe=r.convert(he.format,he.colorSpace),ie=r.convert(he.type),pe=b(he.internalFormat,xe,ie,he.colorSpace,A.isXRRenderTarget===!0),Ne=mt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,pe,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,k.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Oe(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ke(n.TEXTURE_CUBE_MAP,y);for(let ae=0;ae<6;ae++)if(y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Te(k.__webglFramebuffer[ae][he],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else Te(k.__webglFramebuffer[ae],A,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ae=0,he=j.length;ae<he;ae++){let xe=j[ae],ie=i.get(xe),pe=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),Ke(pe,xe),Te(k.__webglFramebuffer,A,xe,n.COLOR_ATTACHMENT0+ae,pe,0),g(xe)&&p(pe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Z.__webglTexture),Ke(ae,y),y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)Te(k.__webglFramebuffer[he],A,y,n.COLOR_ATTACHMENT0,ae,he);else Te(k.__webglFramebuffer,A,y,n.COLOR_ATTACHMENT0,ae,0);g(y)&&p(ae),t.unbindTexture()}A.depthBuffer&&Qe(A)}function yt(A){let y=A.textures;for(let k=0,Z=y.length;k<Z;k++){let j=y[k];if(g(j)){let X=M(A),Ce=i.get(j).__webglTexture;t.bindTexture(X,Ce),p(X),t.unbindTexture()}}}let He=[],Ue=[];function be(A){if(A.samples>0){if(we(A)===!1){let y=A.textures,k=A.width,Z=A.height,j=n.COLOR_BUFFER_BIT,X=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=i.get(A),ae=y.length>1;if(ae)for(let xe=0;xe<y.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);let he=A.texture.mipmaps;he&&he.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<y.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);let ie=i.get(y[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,k,Z,0,0,k,Z,j,n.NEAREST),l===!0&&(He.length=0,Ue.length=0,He.push(n.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(He.push(X),Ue.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ue)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let xe=0;xe<y.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);let ie=i.get(y[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,ie,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function mt(A){return Math.min(s.maxSamples,A.samples)}function we(A){let y=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function We(A){let y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Rt(A,y){let k=A.colorSpace,Z=A.format,j=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==qi&&k!==li&&(nt.getTransfer(k)===lt?(Z!==vn||j!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),y}function bt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=oe,this.setTextureCube=W,this.rebindTextures=Nt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=yt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=we}function Jg(n,e){function t(i,s=li){let r,o=nt.getTransfer(s);if(i===Un)return n.UNSIGNED_BYTE;if(i===za)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ka)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ac)return n.BYTE;if(i===Rc)return n.SHORT;if(i===Gs)return n.UNSIGNED_SHORT;if(i===Oa)return n.INT;if(i===Li)return n.UNSIGNED_INT;if(i===Nn)return n.FLOAT;if(i===_n)return n.HALF_FLOAT;if(i===Ic)return n.ALPHA;if(i===Lc)return n.RGB;if(i===vn)return n.RGBA;if(i===Is)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===Ha)return n.RED;if(i===Va)return n.RED_INTEGER;if(i===Dc)return n.RG;if(i===Ga)return n.RG_INTEGER;if(i===Wa)return n.RGBA_INTEGER;if(i===Zr||i===$r||i===Jr||i===Kr)if(o===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xa||i===qa||i===Ya||i===Za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$a||i===Ja||i===Ka)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===$a||i===Ja)return o===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ka)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qa||i===ja||i===el||i===tl||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===hl||i===ul)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Qa)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ja)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===rl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ol)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ll)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hl)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===dl||i===fl||i===pl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===dl)return o===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ml)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Kg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
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

}`,nh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Pt({vertexShader:Kg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Ei(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ih=class extends ti{constructor(e,t){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null,_=typeof XRWebGLBinding<"u",g=new nh,p={},M=t.getContextAttributes(),b=null,x=null,w=[],T=[],P=new le,D=null,E=new kt;E.viewport=new ut;let S=new kt;S.viewport=new ut;let U=[E,S],z=new Ma,G=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=w[Y];return te===void 0&&(te=new Fs,w[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=w[Y];return te===void 0&&(te=new Fs,w[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=w[Y];return te===void 0&&(te=new Fs,w[Y]=te),te.getHandSpace()};function $(Y){let te=T.indexOf(Y.inputSource);if(te===-1)return;let Te=w[te];Te!==void 0&&(Te.update(Y.inputSource,Y.frame,c||o),Te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",$),s.removeEventListener("selectstart",$),s.removeEventListener("selectend",$),s.removeEventListener("squeeze",$),s.removeEventListener("squeezestart",$),s.removeEventListener("squeezeend",$),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",oe);for(let Y=0;Y<w.length;Y++){let te=T[Y];te!==null&&(T[Y]=null,w[Y].disconnect(te))}G=null,q=null,g.reset();for(let Y in p)delete p[Y];e.setRenderTarget(b),u=null,f=null,d=null,s=null,x=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",$),s.addEventListener("selectstart",$),s.addEventListener("selectend",$),s.addEventListener("squeeze",$),s.addEventListener("squeezestart",$),s.addEventListener("squeezeend",$),s.addEventListener("end",V),s.addEventListener("inputsourceschange",oe),M.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Oe=null,Re=null;M.depth&&(Re=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=M.stencil?Xs:Is,Oe=M.stencil?Ws:Li);let Qe={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Xt(f.textureWidth,f.textureHeight,{format:vn,type:Un,depthTexture:new Fr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let Te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),x=new Xt(u.framebufferWidth,u.framebufferHeight,{format:vn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function oe(Y){for(let te=0;te<Y.removed.length;te++){let Te=Y.removed[te],Oe=T.indexOf(Te);Oe>=0&&(T[Oe]=null,w[Oe].disconnect(Te))}for(let te=0;te<Y.added.length;te++){let Te=Y.added[te],Oe=T.indexOf(Te);if(Oe===-1){for(let Qe=0;Qe<w.length;Qe++)if(Qe>=T.length){T.push(Te),Oe=Qe;break}else if(T[Qe]===null){T[Qe]=Te,Oe=Qe;break}if(Oe===-1)break}let Re=w[Oe];Re&&Re.connect(Te)}}let W=new C,ue=new C;function de(Y,te,Te){W.setFromMatrixPosition(te.matrixWorld),ue.setFromMatrixPosition(Te.matrixWorld);let Oe=W.distanceTo(ue),Re=te.projectionMatrix.elements,Qe=Te.projectionMatrix.elements,Nt=Re[14]/(Re[10]-1),I=Re[14]/(Re[10]+1),yt=(Re[9]+1)/Re[5],He=(Re[9]-1)/Re[5],Ue=(Re[8]-1)/Re[0],be=(Qe[8]+1)/Qe[0],mt=Nt*Ue,we=Nt*be,We=Oe/(-Ue+be),Rt=We*-Ue;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Rt),Y.translateZ(We),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let bt=Nt+We,A=I+We,y=mt-Rt,k=we+(Oe-Rt),Z=yt*I/A*bt,j=He*I/A*bt;Y.projectionMatrix.makePerspective(y,k,Z,j,bt,A),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Ie(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let te=Y.near,Te=Y.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),z.near=S.near=E.near=te,z.far=S.far=E.far=Te,(G!==z.near||q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,q=z.far),z.layers.mask=Y.layers.mask|6,E.layers.mask=z.layers.mask&3,S.layers.mask=z.layers.mask&5;let Oe=Y.parent,Re=z.cameras;Ie(z,Oe);for(let Qe=0;Qe<Re.length;Qe++)Ie(Re[Qe],Oe);Re.length===2?de(z,E,S):z.projectionMatrix.copy(E.projectionMatrix),Ke(Y,z,Oe)};function Ke(Y,te,Te){Te===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(Te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ls*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function(Y){return p[Y]};let ct=null;function it(Y,te){if(h=te.getViewerPose(c||o),m=te,h!==null){let Te=h.views;u!==null&&(e.setRenderTargetFramebuffer(x,u.framebuffer),e.setRenderTarget(x));let Oe=!1;Te.length!==z.cameras.length&&(z.cameras.length=0,Oe=!0);for(let I=0;I<Te.length;I++){let yt=Te[I],He=null;if(u!==null)He=u.getViewport(yt);else{let be=d.getViewSubImage(f,yt);He=be.viewport,I===0&&(e.setRenderTargetTextures(x,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(x))}let Ue=U[I];Ue===void 0&&(Ue=new kt,Ue.layers.enable(I),Ue.viewport=new ut,U[I]=Ue),Ue.matrix.fromArray(yt.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(yt.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(He.x,He.y,He.width,He.height),I===0&&(z.matrix.copy(Ue.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Oe===!0&&z.cameras.push(Ue)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();let I=d.getDepthInformation(Te[0]);I&&I.isValid&&I.texture&&g.init(I,s.renderState)}if(Re&&Re.includes("camera-access")&&_){e.state.unbindTexture(),d=i.getBinding();for(let I=0;I<Te.length;I++){let yt=Te[I].camera;if(yt){let He=p[yt];He||(He=new Br,p[yt]=He);let Ue=d.getCameraImage(yt);He.sourceTexture=Ue}}}}for(let Te=0;Te<w.length;Te++){let Oe=T[Te],Re=w[Te];Oe!==null&&Re!==void 0&&Re.update(Oe,te,c||o)}ct&&ct(Y,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),m=null}let qe=new Qu;qe.setAnimationLoop(it),this.setAnimationLoop=function(Y){ct=Y},this.dispose=function(){}}},ns=new Pn,jg=new at;function e_(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,zc(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,b,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&u(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,M,b):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Vt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Vt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let M=e.get(p),b=M.envMap,x=M.envMapRotation;b&&(g.envMap.value=b,ns.copy(x),ns.x*=-1,ns.y*=-1,ns.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),g.envMapRotation.value.setFromMatrix4(jg.makeRotationFromEuler(ns)),g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,M,b){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=b*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function t_(n,e,t,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let x=b.program;i.uniformBlockBinding(M,x)}function c(M,b){let x=s[M.id];x===void 0&&(m(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",g));let w=b.program;i.updateUBOMapping(M,w);let T=e.render.frame;r[M.id]!==T&&(f(M),r[M.id]=T)}function h(M){let b=d();M.__bindingPointIndex=b;let x=n.createBuffer(),w=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let b=s[M.id],x=M.uniforms,w=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let T=0,P=x.length;T<P;T++){let D=Array.isArray(x[T])?x[T]:[x[T]];for(let E=0,S=D.length;E<S;E++){let U=D[E];if(u(U,T,E,w)===!0){let z=U.__offset,G=Array.isArray(U.value)?U.value:[U.value],q=0;for(let $=0;$<G.length;$++){let V=G[$],oe=_(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,z+q,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,q),q+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,b,x,w){let T=M.value,P=b+"_"+x;if(w[P]===void 0)return typeof T=="number"||typeof T=="boolean"?w[P]=T:w[P]=T.clone(),!0;{let D=w[P];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return w[P]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function m(M){let b=M.uniforms,x=0,w=16;for(let P=0,D=b.length;P<D;P++){let E=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,U=E.length;S<U;S++){let z=E[S],G=Array.isArray(z.value)?z.value:[z.value];for(let q=0,$=G.length;q<$;q++){let V=G[q],oe=_(V),W=x%w,ue=W%oe.boundary,de=W+ue;x+=ue,de!==0&&w-de<oe.storage&&(x+=w-de),z.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=oe.storage}}}let T=x%w;return T>0&&(x+=w-T),M.__size=x,M.__cache={},this}function _(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function g(M){let b=M.target;b.removeEventListener("dispose",g);let x=o.indexOf(b.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Sl=class{constructor(e={}){let{canvas:t=Eu(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=o;let m=new Uint32Array(4),_=new Int32Array(4),g=null,p=null,M=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,w=!1;this._outputColorSpace=Ft;let T=0,P=0,D=null,E=-1,S=null,U=new ut,z=new ut,G=null,q=new ge(0),$=0,V=t.width,oe=t.height,W=1,ue=null,de=null,Ie=new ut(0,0,V,oe),Ke=new ut(0,0,V,oe),ct=!1,it=new Bs,qe=!1,Y=!1,te=new at,Te=new C,Oe=new ut,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Qe=!1;function Nt(){return D===null?W:1}let I=i;function yt(v,L){return t.getContext(v,L)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",se,!1),I===null){let L="webgl2";if(I=yt(L,v),I===null)throw yt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Ue,be,mt,we,We,Rt,bt,A,y,k,Z,j,X,Ce,ae,he,xe,ie,pe,Ne,_e,me,Le;function N(){He=new y0(I),He.init(),_e=new Jg(I,He),Ue=new d0(I,He,e,_e),be=new Zg(I,He),Ue.reversedDepthBuffer&&f&&be.buffers.depth.setReversed(!0),mt=new S0(I),we=new Ng,We=new $g(I,He,be,we,Ue,_e,mt),Rt=new p0(x),bt=new v0(x),A=new Rf(I),me=new h0(I,A),y=new x0(I,A,mt,me),k=new E0(I,y,A,mt),ie=new b0(I,Ue,We),ae=new f0(we),Z=new Ug(x,Rt,bt,He,Ue,me,ae),j=new e_(x,we),X=new Bg,Ce=new Gg(He),xe=new c0(x,Rt,bt,be,k,u,l),he=new qg(x,k,Ue),Le=new t_(I,mt,Ue,be),pe=new u0(I,He,mt),Ne=new M0(I,He,mt),mt.programs=Z.programs,x.capabilities=Ue,x.extensions=He,x.properties=we,x.renderLists=X,x.shadowMap=he,x.state=be,x.info=mt}N();let re=new ih(x,I);this.xr=re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(v){v!==void 0&&(W=v,this.setSize(V,oe,!1))},this.getSize=function(v){return v.set(V,oe)},this.setSize=function(v,L,O=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=v,oe=L,t.width=Math.floor(v*W),t.height=Math.floor(L*W),O===!0&&(t.style.width=v+"px",t.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(V*W,oe*W).floor()},this.setDrawingBufferSize=function(v,L,O){V=v,oe=L,W=O,t.width=Math.floor(v*O),t.height=Math.floor(L*O),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(U)},this.getViewport=function(v){return v.copy(Ie)},this.setViewport=function(v,L,O,H){v.isVector4?Ie.set(v.x,v.y,v.z,v.w):Ie.set(v,L,O,H),be.viewport(U.copy(Ie).multiplyScalar(W).round())},this.getScissor=function(v){return v.copy(Ke)},this.setScissor=function(v,L,O,H){v.isVector4?Ke.set(v.x,v.y,v.z,v.w):Ke.set(v,L,O,H),be.scissor(z.copy(Ke).multiplyScalar(W).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(v){be.setScissorTest(ct=v)},this.setOpaqueSort=function(v){ue=v},this.setTransparentSort=function(v){de=v},this.getClearColor=function(v){return v.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,O=!0){let H=0;if(v){let R=!1;if(D!==null){let J=D.texture.format;R=J===Wa||J===Ga||J===Va}if(R){let J=D.texture.type,ce=J===Un||J===Li||J===Gs||J===Ws||J===za||J===ka,Me=xe.getClearColor(),ye=xe.getClearAlpha(),Fe=Me.r,ze=Me.g,De=Me.b;ce?(m[0]=Fe,m[1]=ze,m[2]=De,m[3]=ye,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Fe,_[1]=ze,_[2]=De,_[3]=ye,I.clearBufferiv(I.COLOR,0,_))}else H|=I.COLOR_BUFFER_BIT}L&&(H|=I.DEPTH_BUFFER_BIT),O&&(H|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",se,!1),xe.dispose(),X.dispose(),Ce.dispose(),we.dispose(),Rt.dispose(),bt.dispose(),k.dispose(),me.dispose(),Le.dispose(),Z.dispose(),re.dispose(),re.removeEventListener("sessionstart",sn),re.removeEventListener("sessionend",ro),Xn.stop()};function fe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Se(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let v=mt.autoReset,L=he.enabled,O=he.autoUpdate,H=he.needsUpdate,R=he.type;N(),mt.autoReset=v,he.enabled=L,he.autoUpdate=O,he.needsUpdate=H,he.type=R}function se(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function K(v){let L=v.target;L.removeEventListener("dispose",K),Ae(L)}function Ae(v){Ve(v),we.remove(v)}function Ve(v){let L=we.get(v).programs;L!==void 0&&(L.forEach(function(O){Z.releaseProgram(O)}),v.isShaderMaterial&&Z.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,O,H,R,J){L===null&&(L=Re);let ce=R.isMesh&&R.matrixWorld.determinant()<0,Me=Ul(v,L,O,H,R);be.setMaterial(H,ce);let ye=O.index,Fe=1;if(H.wireframe===!0){if(ye=y.getWireframeAttribute(O),ye===void 0)return;Fe=2}let ze=O.drawRange,De=O.attributes.position,tt=ze.start*Fe,ft=(ze.start+ze.count)*Fe;J!==null&&(tt=Math.max(tt,J.start*Fe),ft=Math.min(ft,(J.start+J.count)*Fe)),ye!==null?(tt=Math.max(tt,0),ft=Math.min(ft,ye.count)):De!=null&&(tt=Math.max(tt,0),ft=Math.min(ft,De.count));let Ct=ft-tt;if(Ct<0||Ct===1/0)return;me.setup(R,H,Me,O,ye);let xt,_t=pe;if(ye!==null&&(xt=A.get(ye),_t=Ne,_t.setIndex(xt)),R.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Nt()),_t.setMode(I.LINES)):_t.setMode(I.TRIANGLES);else if(R.isLine){let Be=H.linewidth;Be===void 0&&(Be=1),be.setLineWidth(Be*Nt()),R.isLineSegments?_t.setMode(I.LINES):R.isLineLoop?_t.setMode(I.LINE_LOOP):_t.setMode(I.LINE_STRIP)}else R.isPoints?_t.setMode(I.POINTS):R.isSprite&&_t.setMode(I.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)Ds("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))_t.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{let Be=R._multiDrawStarts,Et=R._multiDrawCounts,ot=R._multiDrawCount,rn=ye?A.get(ye).bytesPerElement:1,ds=we.get(H).currentProgram.getUniforms();for(let on=0;on<ot;on++)ds.setValue(I,"_gl_DrawID",on),_t.render(Be[on]/rn,Et[on])}else if(R.isInstancedMesh)_t.renderInstances(tt,Ct,R.count);else if(O.isInstancedBufferGeometry){let Be=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Et=Math.min(O.instanceCount,Be);_t.renderInstances(tt,Ct,Et)}else _t.render(tt,Ct)};function gt(v,L,O){v.transparent===!0&&v.side===wt&&v.forceSinglePass===!1?(v.side=Vt,v.needsUpdate=!0,us(v,L,O),v.side=ei,v.needsUpdate=!0,us(v,L,O),v.side=wt):us(v,L,O)}this.compile=function(v,L,O=null){O===null&&(O=v),p=Ce.get(O),p.init(L),b.push(p),O.traverseVisible(function(R){R.isLight&&R.layers.test(L.layers)&&(p.pushLight(R),R.castShadow&&p.pushShadow(R))}),v!==O&&v.traverseVisible(function(R){R.isLight&&R.layers.test(L.layers)&&(p.pushLight(R),R.castShadow&&p.pushShadow(R))}),p.setupLights();let H=new Set;return v.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;let J=R.material;if(J)if(Array.isArray(J))for(let ce=0;ce<J.length;ce++){let Me=J[ce];gt(Me,O,R),H.add(Me)}else gt(J,O,R),H.add(J)}),p=b.pop(),H},this.compileAsync=function(v,L,O=null){let H=this.compile(v,L,O);return new Promise(R=>{function J(){if(H.forEach(function(ce){we.get(ce).currentProgram.isReady()&&H.delete(ce)}),H.size===0){R(v);return}setTimeout(J,10)}He.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let st=null;function Sn(v){st&&st(v)}function sn(){Xn.stop()}function ro(){Xn.start()}let Xn=new Qu;Xn.setAnimationLoop(Sn),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(v){st=v,re.setAnimationLoop(v),v===null?Xn.stop():Xn.start()},re.addEventListener("sessionstart",sn),re.addEventListener("sessionend",ro),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(L),L=re.getCamera()),v.isScene===!0&&v.onBeforeRender(x,v,L,D),p=Ce.get(v,b.length),p.init(L),b.push(p),te.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),it.setFromProjectionMatrix(te,An,L.reversedDepth),Y=this.localClippingEnabled,qe=ae.init(this.clippingPlanes,Y),g=X.get(v,M.length),g.init(),M.push(g),re.enabled===!0&&re.isPresenting===!0){let J=x.xr.getDepthSensingMesh();J!==null&&sr(J,L,-1/0,x.sortObjects)}sr(v,L,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ue,de),Qe=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,Qe&&xe.addToRenderList(g,v),this.info.render.frame++,qe===!0&&ae.beginShadows();let O=p.state.shadowsArray;he.render(O,v,L),qe===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=g.opaque,R=g.transmissive;if(p.setupLights(),L.isArrayCamera){let J=L.cameras;if(R.length>0)for(let ce=0,Me=J.length;ce<Me;ce++){let ye=J[ce];ao(H,R,v,ye)}Qe&&xe.render(v);for(let ce=0,Me=J.length;ce<Me;ce++){let ye=J[ce];oo(g,v,ye,ye.viewport)}}else R.length>0&&ao(H,R,v,L),Qe&&xe.render(v),oo(g,v,L);D!==null&&P===0&&(We.updateMultisampleRenderTarget(D),We.updateRenderTargetMipmap(D)),v.isScene===!0&&v.onAfterRender(x,v,L),me.resetDefaultState(),E=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],qe===!0&&ae.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function sr(v,L,O,H){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)O=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||it.intersectsSprite(v)){H&&Oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(te);let ce=k.update(v),Me=v.material;Me.visible&&g.push(v,ce,Me,O,Oe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||it.intersectsObject(v))){let ce=k.update(v),Me=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Oe.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Oe.copy(ce.boundingSphere.center)),Oe.applyMatrix4(v.matrixWorld).applyMatrix4(te)),Array.isArray(Me)){let ye=ce.groups;for(let Fe=0,ze=ye.length;Fe<ze;Fe++){let De=ye[Fe],tt=Me[De.materialIndex];tt&&tt.visible&&g.push(v,ce,tt,O,Oe.z,De)}}else Me.visible&&g.push(v,ce,Me,O,Oe.z,null)}}let J=v.children;for(let ce=0,Me=J.length;ce<Me;ce++)sr(J[ce],L,O,H)}function oo(v,L,O,H){let R=v.opaque,J=v.transmissive,ce=v.transparent;p.setupLightsView(O),qe===!0&&ae.setGlobalState(x.clippingPlanes,O),H&&be.viewport(U.copy(H)),R.length>0&&hs(R,L,O),J.length>0&&hs(J,L,O),ce.length>0&&hs(ce,L,O),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function ao(v,L,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new Xt(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?_n:Un,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let J=p.state.transmissionRenderTarget[H.id],ce=H.viewport||U;J.setSize(ce.z*x.transmissionResolutionScale,ce.w*x.transmissionResolutionScale);let Me=x.getRenderTarget(),ye=x.getActiveCubeFace(),Fe=x.getActiveMipmapLevel();x.setRenderTarget(J),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&xe.render(O);let ze=x.toneMapping;x.toneMapping=ai;let De=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),qe===!0&&ae.setGlobalState(x.clippingPlanes,H),hs(v,O,H),We.updateMultisampleRenderTarget(J),We.updateRenderTargetMipmap(J),He.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ft=0,Ct=L.length;ft<Ct;ft++){let xt=L[ft],_t=xt.object,Be=xt.geometry,Et=xt.material,ot=xt.group;if(Et.side===wt&&_t.layers.test(H.layers)){let rn=Et.side;Et.side=Vt,Et.needsUpdate=!0,lo(_t,O,H,Be,Et,ot),Et.side=rn,Et.needsUpdate=!0,tt=!0}}tt===!0&&(We.updateMultisampleRenderTarget(J),We.updateRenderTargetMipmap(J))}x.setRenderTarget(Me,ye,Fe),x.setClearColor(q,$),De!==void 0&&(H.viewport=De),x.toneMapping=ze}function hs(v,L,O){let H=L.isScene===!0?L.overrideMaterial:null;for(let R=0,J=v.length;R<J;R++){let ce=v[R],Me=ce.object,ye=ce.geometry,Fe=ce.group,ze=ce.material;ze.allowOverride===!0&&H!==null&&(ze=H),Me.layers.test(O.layers)&&lo(Me,L,O,ye,ze,Fe)}}function lo(v,L,O,H,R,J){v.onBeforeRender(x,L,O,H,R,J),v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),R.onBeforeRender(x,L,O,H,v,J),R.transparent===!0&&R.side===wt&&R.forceSinglePass===!1?(R.side=Vt,R.needsUpdate=!0,x.renderBufferDirect(O,L,H,R,v,J),R.side=ei,R.needsUpdate=!0,x.renderBufferDirect(O,L,H,R,v,J),R.side=wt):x.renderBufferDirect(O,L,H,R,v,J),v.onAfterRender(x,L,O,H,R,J)}function us(v,L,O){L.isScene!==!0&&(L=Re);let H=we.get(v),R=p.state.lights,J=p.state.shadowsArray,ce=R.state.version,Me=Z.getParameters(v,R.state,J,L,O),ye=Z.getProgramCacheKey(Me),Fe=H.programs;H.environment=v.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(v.isMeshStandardMaterial?bt:Rt).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Fe===void 0&&(v.addEventListener("dispose",K),Fe=new Map,H.programs=Fe);let ze=Fe.get(ye);if(ze!==void 0){if(H.currentProgram===ze&&H.lightsStateVersion===ce)return ho(v,Me),ze}else Me.uniforms=Z.getUniforms(v),v.onBeforeCompile(Me,x),ze=Z.acquireProgram(Me,ye),Fe.set(ye,ze),H.uniforms=Me.uniforms;let De=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(De.clippingPlanes=ae.uniform),ho(v,Me),H.needsLights=Fl(v),H.lightsStateVersion=ce,H.needsLights&&(De.ambientLightColor.value=R.state.ambient,De.lightProbe.value=R.state.probe,De.directionalLights.value=R.state.directional,De.directionalLightShadows.value=R.state.directionalShadow,De.spotLights.value=R.state.spot,De.spotLightShadows.value=R.state.spotShadow,De.rectAreaLights.value=R.state.rectArea,De.ltc_1.value=R.state.rectAreaLTC1,De.ltc_2.value=R.state.rectAreaLTC2,De.pointLights.value=R.state.point,De.pointLightShadows.value=R.state.pointShadow,De.hemisphereLights.value=R.state.hemi,De.directionalShadowMap.value=R.state.directionalShadowMap,De.directionalShadowMatrix.value=R.state.directionalShadowMatrix,De.spotShadowMap.value=R.state.spotShadowMap,De.spotLightMatrix.value=R.state.spotLightMatrix,De.spotLightMap.value=R.state.spotLightMap,De.pointShadowMap.value=R.state.pointShadowMap,De.pointShadowMatrix.value=R.state.pointShadowMatrix),H.currentProgram=ze,H.uniformsList=null,ze}function co(v){if(v.uniformsList===null){let L=v.currentProgram.getUniforms();v.uniformsList=Zs.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ho(v,L){let O=we.get(v);O.outputColorSpace=L.outputColorSpace,O.batching=L.batching,O.batchingColor=L.batchingColor,O.instancing=L.instancing,O.instancingColor=L.instancingColor,O.instancingMorph=L.instancingMorph,O.skinning=L.skinning,O.morphTargets=L.morphTargets,O.morphNormals=L.morphNormals,O.morphColors=L.morphColors,O.morphTargetsCount=L.morphTargetsCount,O.numClippingPlanes=L.numClippingPlanes,O.numIntersection=L.numClipIntersection,O.vertexAlphas=L.vertexAlphas,O.vertexTangents=L.vertexTangents,O.toneMapping=L.toneMapping}function Ul(v,L,O,H,R){L.isScene!==!0&&(L=Re),We.resetTextureUnits();let J=L.fog,ce=H.isMeshStandardMaterial?L.environment:null,Me=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qi,ye=(H.isMeshStandardMaterial?bt:Rt).get(H.envMap||ce),Fe=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,ze=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),De=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,ft=!!O.morphAttributes.color,Ct=ai;H.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ct=x.toneMapping);let xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,_t=xt!==void 0?xt.length:0,Be=we.get(H),Et=p.state.lights;if(qe===!0&&(Y===!0||v!==S)){let Jt=v===S&&H.id===E;ae.setState(H,v,Jt)}let ot=!1;H.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==Et.state.version||Be.outputColorSpace!==Me||R.isBatchedMesh&&Be.batching===!1||!R.isBatchedMesh&&Be.batching===!0||R.isBatchedMesh&&Be.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&Be.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&Be.instancing===!1||!R.isInstancedMesh&&Be.instancing===!0||R.isSkinnedMesh&&Be.skinning===!1||!R.isSkinnedMesh&&Be.skinning===!0||R.isInstancedMesh&&Be.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Be.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Be.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Be.instancingMorph===!1&&R.morphTexture!==null||Be.envMap!==ye||H.fog===!0&&Be.fog!==J||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ae.numPlanes||Be.numIntersection!==ae.numIntersection)||Be.vertexAlphas!==Fe||Be.vertexTangents!==ze||Be.morphTargets!==De||Be.morphNormals!==tt||Be.morphColors!==ft||Be.toneMapping!==Ct||Be.morphTargetsCount!==_t)&&(ot=!0):(ot=!0,Be.__version=H.version);let rn=Be.currentProgram;ot===!0&&(rn=us(H,L,R));let ds=!1,on=!1,rr=!1,Tt=rn.getUniforms(),dn=Be.uniforms;if(be.useProgram(rn.program)&&(ds=!0,on=!0,rr=!0),H.id!==E&&(E=H.id,on=!0),ds||S!==v){be.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Tt.setValue(I,"projectionMatrix",v.projectionMatrix),Tt.setValue(I,"viewMatrix",v.matrixWorldInverse);let tn=Tt.map.cameraPosition;tn!==void 0&&tn.setValue(I,Te.setFromMatrixPosition(v.matrixWorld)),Ue.logarithmicDepthBuffer&&Tt.setValue(I,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Tt.setValue(I,"isOrthographic",v.isOrthographicCamera===!0),S!==v&&(S=v,on=!0,rr=!0)}if(R.isSkinnedMesh){Tt.setOptional(I,R,"bindMatrix"),Tt.setOptional(I,R,"bindMatrixInverse");let Jt=R.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Tt.setValue(I,"boneTexture",Jt.boneTexture,We))}R.isBatchedMesh&&(Tt.setOptional(I,R,"batchingTexture"),Tt.setValue(I,"batchingTexture",R._matricesTexture,We),Tt.setOptional(I,R,"batchingIdTexture"),Tt.setValue(I,"batchingIdTexture",R._indirectTexture,We),Tt.setOptional(I,R,"batchingColorTexture"),R._colorsTexture!==null&&Tt.setValue(I,"batchingColorTexture",R._colorsTexture,We));let fn=O.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&ie.update(R,O,rn),(on||Be.receiveShadow!==R.receiveShadow)&&(Be.receiveShadow=R.receiveShadow,Tt.setValue(I,"receiveShadow",R.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(dn.envMap.value=ye,dn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(dn.envMapIntensity.value=L.environmentIntensity),on&&(Tt.setValue(I,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&Nl(dn,rr),J&&H.fog===!0&&j.refreshFogUniforms(dn,J),j.refreshMaterialUniforms(dn,H,W,oe,p.state.transmissionRenderTarget[v.id]),Zs.upload(I,co(Be),dn,We)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Zs.upload(I,co(Be),dn,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Tt.setValue(I,"center",R.center),Tt.setValue(I,"modelViewMatrix",R.modelViewMatrix),Tt.setValue(I,"normalMatrix",R.normalMatrix),Tt.setValue(I,"modelMatrix",R.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Jt=H.uniformsGroups;for(let tn=0,Bl=Jt.length;tn<Bl;tn++){let Bi=Jt[tn];Le.update(Bi,rn),Le.bind(Bi,rn)}}return rn}function Nl(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Fl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(v,L,O){let H=we.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),we.get(v.texture).__webglTexture=L,we.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:O,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){let O=we.get(v);O.__webglFramebuffer=L,O.__useDefaultFramebuffer=L===void 0};let B=I.createFramebuffer();this.setRenderTarget=function(v,L=0,O=0){D=v,T=L,P=O;let H=!0,R=null,J=!1,ce=!1;if(v){let ye=we.get(v);if(ye.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(I.FRAMEBUFFER,null),H=!1;else if(ye.__webglFramebuffer===void 0)We.setupRenderTarget(v);else if(ye.__hasExternalTextures)We.rebindTextures(v,we.get(v.texture).__webglTexture,we.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let De=v.depthTexture;if(ye.__boundDepthTexture!==De){if(De!==null&&we.has(De)&&(v.width!==De.image.width||v.height!==De.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(v)}}let Fe=v.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ce=!0);let ze=we.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(ze[L])?R=ze[L][O]:R=ze[L],J=!0):v.samples>0&&We.useMultisampledRTT(v)===!1?R=we.get(v).__webglMultisampledFramebuffer:Array.isArray(ze)?R=ze[O]:R=ze,U.copy(v.viewport),z.copy(v.scissor),G=v.scissorTest}else U.copy(Ie).multiplyScalar(W).floor(),z.copy(Ke).multiplyScalar(W).floor(),G=ct;if(O!==0&&(R=B),be.bindFramebuffer(I.FRAMEBUFFER,R)&&H&&be.drawBuffers(v,R),be.viewport(U),be.scissor(z),be.setScissorTest(G),J){let ye=we.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+L,ye.__webglTexture,O)}else if(ce){let ye=L;for(let Fe=0;Fe<v.textures.length;Fe++){let ze=we.get(v.textures[Fe]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Fe,ze.__webglTexture,O,ye)}}else if(v!==null&&O!==0){let ye=we.get(v.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ye.__webglTexture,O)}E=-1},this.readRenderTargetPixels=function(v,L,O,H,R,J,ce,Me=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye){be.bindFramebuffer(I.FRAMEBUFFER,ye);try{let Fe=v.textures[Me],ze=Fe.format,De=Fe.type;if(!Ue.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-H&&O>=0&&O<=v.height-R&&(v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(L,O,H,R,_e.convert(ze),_e.convert(De),J))}finally{let Fe=D!==null?we.get(D).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(v,L,O,H,R,J,ce,Me=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=we.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(ye=ye[ce]),ye)if(L>=0&&L<=v.width-H&&O>=0&&O<=v.height-R){be.bindFramebuffer(I.FRAMEBUFFER,ye);let Fe=v.textures[Me],ze=Fe.format,De=Fe.type;if(!Ue.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let tt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),v.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Me),I.readPixels(L,O,H,R,_e.convert(ze),_e.convert(De),0);let ft=D!==null?we.get(D).__webglFramebuffer:null;be.bindFramebuffer(I.FRAMEBUFFER,ft);let Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Tu(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,tt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(tt),I.deleteSync(Ct),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,O=0){let H=Math.pow(2,-O),R=Math.floor(v.image.width*H),J=Math.floor(v.image.height*H),ce=L!==null?L.x:0,Me=L!==null?L.y:0;We.setTexture2D(v,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,ce,Me,R,J),be.unbindTexture()};let ee=I.createFramebuffer(),Ee=I.createFramebuffer();this.copyTextureToTexture=function(v,L,O=null,H=null,R=0,J=null){J===null&&(R!==0?(Ds("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=R,R=0):J=0);let ce,Me,ye,Fe,ze,De,tt,ft,Ct,xt=v.isCompressedTexture?v.mipmaps[J]:v.image;if(O!==null)ce=O.max.x-O.min.x,Me=O.max.y-O.min.y,ye=O.isBox3?O.max.z-O.min.z:1,Fe=O.min.x,ze=O.min.y,De=O.isBox3?O.min.z:0;else{let fn=Math.pow(2,-R);ce=Math.floor(xt.width*fn),Me=Math.floor(xt.height*fn),v.isDataArrayTexture?ye=xt.depth:v.isData3DTexture?ye=Math.floor(xt.depth*fn):ye=1,Fe=0,ze=0,De=0}H!==null?(tt=H.x,ft=H.y,Ct=H.z):(tt=0,ft=0,Ct=0);let _t=_e.convert(L.format),Be=_e.convert(L.type),Et;L.isData3DTexture?(We.setTexture3D(L,0),Et=I.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(We.setTexture2DArray(L,0),Et=I.TEXTURE_2D_ARRAY):(We.setTexture2D(L,0),Et=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,L.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,L.unpackAlignment);let ot=I.getParameter(I.UNPACK_ROW_LENGTH),rn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ds=I.getParameter(I.UNPACK_SKIP_PIXELS),on=I.getParameter(I.UNPACK_SKIP_ROWS),rr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Fe),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,De);let Tt=v.isDataArrayTexture||v.isData3DTexture,dn=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){let fn=we.get(v),Jt=we.get(L),tn=we.get(fn.__renderTarget),Bl=we.get(Jt.__renderTarget);be.bindFramebuffer(I.READ_FRAMEBUFFER,tn.__webglFramebuffer),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Bl.__webglFramebuffer);for(let Bi=0;Bi<ye;Bi++)Tt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(v).__webglTexture,R,De+Bi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,we.get(L).__webglTexture,J,Ct+Bi)),I.blitFramebuffer(Fe,ze,ce,Me,tt,ft,ce,Me,I.DEPTH_BUFFER_BIT,I.NEAREST);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(R!==0||v.isRenderTargetTexture||we.has(v)){let fn=we.get(v),Jt=we.get(L);be.bindFramebuffer(I.READ_FRAMEBUFFER,ee),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ee);for(let tn=0;tn<ye;tn++)Tt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,fn.__webglTexture,R,De+tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,fn.__webglTexture,R),dn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Jt.__webglTexture,J,Ct+tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Jt.__webglTexture,J),R!==0?I.blitFramebuffer(Fe,ze,ce,Me,tt,ft,ce,Me,I.COLOR_BUFFER_BIT,I.NEAREST):dn?I.copyTexSubImage3D(Et,J,tt,ft,Ct+tn,Fe,ze,ce,Me):I.copyTexSubImage2D(Et,J,tt,ft,Fe,ze,ce,Me);be.bindFramebuffer(I.READ_FRAMEBUFFER,null),be.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else dn?v.isDataTexture||v.isData3DTexture?I.texSubImage3D(Et,J,tt,ft,Ct,ce,Me,ye,_t,Be,xt.data):L.isCompressedArrayTexture?I.compressedTexSubImage3D(Et,J,tt,ft,Ct,ce,Me,ye,_t,xt.data):I.texSubImage3D(Et,J,tt,ft,Ct,ce,Me,ye,_t,Be,xt):v.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,tt,ft,ce,Me,_t,Be,xt.data):v.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,tt,ft,xt.width,xt.height,_t,xt.data):I.texSubImage2D(I.TEXTURE_2D,J,tt,ft,ce,Me,_t,Be,xt);I.pixelStorei(I.UNPACK_ROW_LENGTH,ot),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ds),I.pixelStorei(I.UNPACK_SKIP_ROWS,on),I.pixelStorei(I.UNPACK_SKIP_IMAGES,rr),J===0&&L.generateMipmaps&&I.generateMipmap(Et),be.unbindTexture()},this.initRenderTarget=function(v){we.get(v).__webglFramebuffer===void 0&&We.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?We.setTextureCube(v,0):v.isData3DTexture?We.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?We.setTexture2DArray(v,0):We.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){T=0,P=0,D=null,be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Js={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},n_=new Ki(-1,1,1,-1,0,1),rh=class extends pt{constructor(){super(),this.setAttribute("position",new Ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ye([0,2,0,0,2,0],2))}},i_=new rh,Ui=class{constructor(e){this._mesh=new ke(i_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,n_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ks=class extends un{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ci.clone(e.uniforms),this.material=new Pt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ui(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var jr=class extends un{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},El=class extends un{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Tl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new le);this._width=i.width,this._height=i.height,t=new Xt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_n}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ks(Js),this.copyPass.material.blending=Dn,this.clock=new Wr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}jr!==void 0&&(o instanceof jr?i=!0:o instanceof El&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var wl=class extends un{constructor(e,t,i=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ge}render(e,t,i){let s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}};var sd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ge(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qs=class n extends un{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new le(e.x,e.y):new le(256,256),this.clearColor=new ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Xt(r,o,{type:_n}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Xt(r,o,{type:_n});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Xt(r,o,{type:_n});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),r=Math.round(r/2),o=Math.round(o/2)}let a=sd;this.highPassUniforms=ci.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new le(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ci.clone(Js.uniforms),this.blendMaterial=new Pt({uniforms:this.copyUniforms,vertexShader:Js.vertexShader,fragmentShader:Js.fragmentShader,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ge,this._oldClearAlpha=1,this._basic=new Ht,this._fsQuad=new Ui(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new le(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Pt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new le(.5,.5)},direction:{value:new le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new Pt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Qs.BlurDirectionX=new le(1,0);Qs.BlurDirectionY=new le(0,1);var eo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Al=class extends un{constructor(){super(),this.uniforms=ci.clone(eo.uniforms),this.material=new Hr({name:eo.name,uniforms:this.uniforms,vertexShader:eo.vertexShader,fragmentShader:eo.fragmentShader}),this._fsQuad=new Ui(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},nt.getTransfer(this._outputColorSpace)===lt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Pa?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ia?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===La?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ua?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Da&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Q=Math.PI*2,Pe=le,Ge=C,Fn={cream:15918025,creamDeep:14929580,ivory:16445919,teal:1333081,tealDeep:736320,tealDark:536372,wine:5706530,wineDeep:3607319,rose:11946584,gold:12422466,goldLight:15255424,goldDark:7950879,bronze:9200687},rd=["\u91C9\u91CC\u7EA2 \xB7 \u6298\u679D\u7261\u4E39","\u8C46\u9752 \xB7 \u7F20\u679D\u83B2","\u9701\u7EA2 \xB7 \u77F3\u69B4\u82B1","\u63CF\u91D1 \xB7 \u7389\u5170","\u9752\u82B1 \xB7 \u83B2\u6C60","\u7C89\u5F69 \xB7 \u6D77\u68E0","\u91D1\u5730 \xB7 \u5C71\u8336","\u58A8\u5F69 \xB7 \u5170\u8349"],od=["\u91C9\u91CC\u7EA2","\u8C46\u9752","\u9701\u7EA2","\u63CF\u91D1","\u9752\u82B1","\u7C89\u5F69","\u91D1\u5730","\u58A8\u5F69"],hi=[{petal:"#9c3140",light:"#c96369",center:"#d8a94e",leaf:"#526b3e"},{petal:"#397c78",light:"#75a7a0",center:"#d5ae61",leaf:"#426253"},{petal:"#a63c38",light:"#d17964",center:"#e0b35d",leaf:"#5f713d"},{petal:"#b1863e",light:"#dfc082",center:"#7d4f25",leaf:"#6c7445"},{petal:"#3c6482",light:"#7e9bb2",center:"#d6b268",leaf:"#3f5c55"},{petal:"#c06b78",light:"#e7a4ac",center:"#d8b163",leaf:"#5c6f4a"},{petal:"#a1782f",light:"#d8b66a",center:"#713f22",leaf:"#6d6f3d"},{petal:"#414e56",light:"#7f8b88",center:"#c8a566",leaf:"#53645a"}];function en(n,e,t,{repeatX:i=1,repeatY:s=1,anisotropy:r=8}={}){let o=document.createElement("canvas");o.width=n,o.height=e;let a=o.getContext("2d");t(a,n,e);let l=new bi(o);return l.colorSpace=Ft,l.wrapS=Xi,l.wrapT=Xi,l.repeat.set(i,s),l.anisotropy=r,l.needsUpdate=!0,l}function s_(){return en(128,128,(n,e,t)=>{let i=n.createRadialGradient(e/2,t/2,0,e/2,t/2,e/2);i.addColorStop(0,"rgba(255,244,212,1)"),i.addColorStop(.18,"rgba(255,225,164,.85)"),i.addColorStop(.5,"rgba(255,190,103,.25)"),i.addColorStop(1,"rgba(255,170,80,0)"),n.fillStyle=i,n.fillRect(0,0,e,t)})}function r_(){return en(96,96,(n,e,t)=>{n.clearRect(0,0,e,t);let i=n.createLinearGradient(e*.5,4,e*.5,t-4);i.addColorStop(0,"rgba(255,238,226,.94)"),i.addColorStop(.55,"rgba(241,186,176,.9)"),i.addColorStop(1,"rgba(201,113,116,.65)"),n.fillStyle=i,n.beginPath(),n.moveTo(e*.5,t*.06),n.bezierCurveTo(e*.94,t*.3,e*.84,t*.8,e*.5,t*.95),n.bezierCurveTo(e*.16,t*.8,e*.06,t*.3,e*.5,t*.06),n.fill(),n.strokeStyle="rgba(161,89,92,.3)",n.lineWidth=1.5,n.beginPath(),n.moveTo(e*.5,t*.15),n.quadraticCurveTo(e*.52,t*.5,e*.5,t*.88),n.stroke()})}function oh(n,e,t,i,s,r){n.save(),n.translate(e,t),n.rotate(s);let o=n.createLinearGradient(0,0,i,0);o.addColorStop(0,r),o.addColorStop(1,"rgba(77,95,59,.45)"),n.fillStyle=o,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(i*.35,-i*.3,i*.85,-i*.12,i,0),n.bezierCurveTo(i*.8,i*.23,i*.3,i*.22,0,0),n.fill(),n.strokeStyle="rgba(246,228,184,.3)",n.lineWidth=Math.max(1,i*.018),n.beginPath(),n.moveTo(2,0),n.lineTo(i*.92,0),n.stroke(),n.restore()}function to(n,e,t,i,s,r=8,o=0){n.save(),n.translate(e,t),n.rotate(o),oh(n,0,0,i*.95,-.4,s.leaf),oh(n,0,0,i*.85,2.55,s.leaf),oh(n,0,0,i*.7,.8,s.leaf);for(let l=0;l<r;l++){let c=l/r*Q;n.save(),n.rotate(c);let h=n.createRadialGradient(i*.26,0,0,i*.26,0,i*.5);h.addColorStop(0,s.light),h.addColorStop(.7,s.petal),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.beginPath(),n.moveTo(0,0),n.bezierCurveTo(i*.16,-i*.22,i*.56,-i*.2,i*.5,0),n.bezierCurveTo(i*.5,i*.15,i*.18,i*.22,0,0),n.fill(),n.strokeStyle="rgba(255,242,213,.28)",n.lineWidth=Math.max(1,i*.012),n.stroke(),n.restore()}for(let l=0;l<5;l++){let c=l/5*Q+.4;n.save(),n.rotate(c),n.fillStyle=s.light,n.globalAlpha=.9,n.beginPath(),n.ellipse(i*.17,0,i*.2,i*.1,0,0,Q),n.fill(),n.restore()}n.globalAlpha=1;let a=n.createRadialGradient(0,0,0,0,0,i*.18);a.addColorStop(0,"#fff1be"),a.addColorStop(.45,s.center),a.addColorStop(1,"rgba(89,54,21,.8)"),n.fillStyle=a,n.beginPath(),n.arc(0,0,i*.12,0,Q),n.fill(),n.fillStyle="rgba(255,239,187,.8)";for(let l=0;l<12;l++){let c=l/12*Q,h=i*(.09+l%3*.012);n.beginPath(),n.arc(Math.cos(c)*h,Math.sin(c)*h,i*.012,0,Q),n.fill()}n.restore()}function lh(n,e,t,i,s,r){n.save(),n.translate(e,t),n.rotate(r),n.strokeStyle=s.leaf,n.lineWidth=Math.max(1,i*.04),n.beginPath(),n.moveTo(0,i*.4),n.quadraticCurveTo(-i*.05,0,0,-i*.4),n.stroke(),n.fillStyle=s.petal,n.beginPath(),n.ellipse(0,-i*.52,i*.2,i*.3,0,0,Q),n.fill(),n.fillStyle=s.light,n.beginPath(),n.ellipse(-i*.06,-i*.55,i*.09,i*.2,-.35,0,Q),n.fill(),n.restore()}function ui(n,e,t,i,s="rgba(178,132,62,.65)"){n.save(),n.strokeStyle=s,n.lineWidth=Math.max(1,i*.022),n.beginPath(),n.moveTo(e-i*.5,t),n.bezierCurveTo(e-i*.25,t-i*.28,e+i*.12,t-i*.28,e+i*.2,t),n.bezierCurveTo(e+i*.3,t+i*.3,e-i*.1,t+i*.28,e-i*.06,t+i*.06),n.stroke(),n.beginPath(),n.arc(e+i*.2,t,i*.12,0,Q),n.stroke(),n.restore()}function Rl(n,e,t,i=36){n.save(),n.strokeStyle="rgba(130,96,53,.07)",n.lineWidth=.7;for(let s=0;s<i;s++){let r=Math.random()*e,o=Math.random()*t;n.beginPath(),n.moveTo(r,o);for(let a=0;a<4;a++)r+=(Math.random()-.5)*30,o+=(Math.random()-.5)*30,n.lineTo(r,o);n.stroke()}n.restore()}function o_(n){let e=hi[n%hi.length],t=n%4;return en(1024,512,(i,s,r)=>{let o=i.createLinearGradient(0,0,0,r);o.addColorStop(0,"#f8efd9"),o.addColorStop(.45,"#f2e4c9"),o.addColorStop(1,"#ead7b6"),i.fillStyle=o,i.fillRect(0,0,s,r),Rl(i,s,r,28);let a=i.createLinearGradient(0,r*.75,0,r);a.addColorStop(0,"rgba(71,129,121,0)"),a.addColorStop(1,t===1||t===4?"rgba(58,112,108,.22)":"rgba(128,96,54,.12)"),i.fillStyle=a,i.fillRect(0,r*.72,s,r*.28);let l=(f,u,m=.85)=>{let _=i.createLinearGradient(0,f,0,f+u);_.addColorStop(0,`rgba(237,205,143,${m})`),_.addColorStop(.4,`rgba(172,124,54,${m})`),_.addColorStop(.7,`rgba(245,216,158,${m})`),_.addColorStop(1,`rgba(140,97,39,${m})`),i.fillStyle=_,i.fillRect(0,f,s,u)};l(0,16,.75),l(36,4,.65),l(r-23,4,.7),l(r-15,15,.85),i.save(),i.strokeStyle="rgba(169,124,55,.24)",i.lineWidth=1;for(let f=0;f<s;f+=32)i.beginPath(),i.moveTo(f,44),i.quadraticCurveTo(f+16,54,f+32,44),i.stroke();i.restore(),[[s*.13,r*.51,100,-.15],[s*.38,r*.47,82,.24],[s*.63,r*.55,104,-.08],[s*.87,r*.46,76,.3]].forEach(([f,u,m,_],g)=>{g%2===0&&lh(i,f+m*.7,u-m*.45,m*.55,e,.8),to(i,f,u,m,e,8,_),ui(i,f+m*.52,u+m*.43,m*.72)});let h=s*(t===1||t===3?.5:.25),d=r*(t===2?.35:.55);i.save(),i.translate(h,d),i.fillStyle="rgba(25,87,89,.88)",i.beginPath(),i.arc(0,0,47,0,Q),i.fill(),i.strokeStyle="rgba(233,201,139,.82)",i.lineWidth=3,i.beginPath(),i.arc(0,0,47,0,Q),i.stroke(),i.lineWidth=1,i.beginPath(),i.arc(0,0,39,0,Q),i.stroke(),i.fillStyle="rgba(238,208,148,.92)",i.beginPath(),i.moveTo(0,-30),i.bezierCurveTo(10,-10,26,-4,26,9),i.bezierCurveTo(26,24,12,31,0,21),i.bezierCurveTo(-12,31,-26,24,-26,9),i.bezierCurveTo(-26,-4,-10,-10,0,-30),i.fill(),i.restore(),i.fillStyle="rgba(191,143,72,.55)";for(let f=18;f<s;f+=52)i.beginPath(),i.arc(f,r*.11,2,0,Q),i.fill()})}function a_(){return en(1024,512,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#f9f0dc"),i.addColorStop(.55,"#f2e4c8"),i.addColorStop(1,"#e8d4b0"),n.fillStyle=i,n.fillRect(0,0,e,t),Rl(n,e,t,36);let s=(r,o,a=.9)=>{let l=n.createLinearGradient(0,r,0,r+o);l.addColorStop(0,`rgba(242,211,151,${a})`),l.addColorStop(.45,`rgba(166,117,47,${a})`),l.addColorStop(.72,`rgba(246,221,167,${a})`),l.addColorStop(1,`rgba(117,79,30,${a})`),n.fillStyle=l,n.fillRect(0,r,e,o)};s(0,14,.75),s(29,4,.55),s(t-18,4,.62),s(t-12,12,.82),n.save(),n.translate(e*.5,t*.49),n.fillStyle="rgba(24,83,87,.9)",n.beginPath(),n.arc(0,0,118,0,Q),n.fill(),n.strokeStyle="rgba(236,201,134,.92)",n.lineWidth=5,n.beginPath(),n.arc(0,0,118,0,Q),n.stroke(),n.lineWidth=1.5,n.beginPath(),n.arc(0,0,103,0,Q),n.stroke(),n.fillStyle="rgba(242,214,155,.92)";for(let r=0;r<12;r++)n.save(),n.rotate(r/12*Q),n.beginPath(),n.moveTo(0,-16),n.quadraticCurveTo(14,-56,0,-92),n.quadraticCurveTo(-14,-56,0,-16),n.fill(),n.restore();n.fillStyle="rgba(92,37,42,.9)",n.beginPath(),n.arc(0,0,18,0,Q),n.fill(),n.strokeStyle="rgba(238,205,139,.9)",n.lineWidth=2,n.stroke(),n.restore(),to(n,e*.17,t*.52,112,hi[0],8,.28),to(n,e*.83,t*.48,108,hi[0],8,-.3),lh(n,e*.06,t*.7,46,hi[0],.4),lh(n,e*.94,t*.26,40,hi[0],2.7),ui(n,e*.25,t*.77,92),ui(n,e*.75,t*.24,82),n.strokeStyle="rgba(189,143,72,.64)",n.lineWidth=2;for(let r=0;r<28;r++){let o=r/28*Q,a=132,l=r%2?145:152;n.beginPath(),n.moveTo(e*.5+Math.cos(o)*a,t*.49+Math.sin(o)*a),n.lineTo(e*.5+Math.cos(o)*l,t*.49+Math.sin(o)*l),n.stroke()}})}function l_(){return en(1024,1024,(n,e,t)=>{let i=e/2,s=t/2,r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#f4e6ca"),r.addColorStop(.62,"#f0dfbf"),r.addColorStop(.88,"#e8d1ad"),r.addColorStop(1,"#dfc49b"),n.fillStyle=r,n.fillRect(0,0,e,t),n.save(),n.translate(i,s),n.strokeStyle="rgba(172,128,61,.22)",n.lineWidth=2;for(let a=0;a<48;a++){let l=a/48*Q;n.beginPath(),n.moveTo(Math.cos(l)*300,Math.sin(l)*300),n.lineTo(Math.cos(l)*488,Math.sin(l)*488),n.stroke()}[[478,7,"rgba(160,111,46,.55)"],[456,2,"rgba(197,150,77,.65)"],[230,3,"rgba(169,119,48,.4)"],[220,1,"rgba(203,157,83,.55)"]].forEach(([a,l,c])=>{n.strokeStyle=c,n.lineWidth=l,n.beginPath(),n.arc(0,0,a,0,Q),n.stroke()});for(let a=0;a<6;a++){let l=a/6*Q+.3;n.save(),n.rotate(l),n.translate(350,0),to(n,0,0,58,hi[a%hi.length],7,.2),n.restore()}n.restore();let o=n.createRadialGradient(i,s,480,i,s,512);o.addColorStop(0,"rgba(108,75,36,0)"),o.addColorStop(1,"rgba(104,69,31,.35)"),n.fillStyle=o,n.fillRect(0,0,e,t)},{anisotropy:8})}function c_(){return en(2048,2048,(n,e,t)=>{let i=e/2,s=t/2,r=e/2;n.fillStyle="#ead7b7",n.fillRect(0,0,e,t),n.save(),n.translate(i,s);let o=32;for(let a=0;a<o;a++){let l=a/o*Q,c=(a+1)/o*Q;n.fillStyle=a%2===0?"#f2e4ca":"#ecd9b9",n.beginPath(),n.moveTo(0,0),n.arc(0,0,r,l,c),n.closePath(),n.fill()}n.fillStyle="rgba(24,90,91,.83)",n.beginPath(),n.arc(0,0,r,0,Q),n.arc(0,0,r*.935,0,Q,!0),n.fill(),n.strokeStyle="rgba(150,107,45,.34)",n.lineWidth=3,[.28,.47,.66,.83,.9].forEach(a=>{n.beginPath(),n.arc(0,0,r*a,0,Q),n.stroke()}),n.strokeStyle="rgba(151,108,46,.23)",n.lineWidth=2;for(let a=0;a<o;a++){let l=a/o*Q;n.beginPath(),n.moveTo(Math.cos(l)*r*.12,Math.sin(l)*r*.12),n.lineTo(Math.cos(l)*r*.93,Math.sin(l)*r*.93),n.stroke()}for(let a=0;a<8;a++){let l=a/8*Q-Math.PI/8,c=r*.685;n.save(),n.translate(Math.cos(l)*c,Math.sin(l)*c),n.rotate(l+Math.PI/2),n.fillStyle="rgba(246,233,209,.85)",n.beginPath(),n.arc(0,0,118,0,Q),n.fill(),n.strokeStyle="rgba(159,114,47,.6)",n.lineWidth=4,n.beginPath(),n.arc(0,0,118,0,Q),n.stroke(),n.lineWidth=1.5,n.beginPath(),n.arc(0,0,103,0,Q),n.stroke(),to(n,0,0,74,hi[a],8,0),n.restore()}n.save(),n.fillStyle="rgba(24,84,86,.72)",n.beginPath(),n.arc(0,0,r*.19,0,Q),n.fill(),n.strokeStyle="rgba(233,198,130,.8)",n.lineWidth=6,n.beginPath(),n.arc(0,0,r*.19,0,Q),n.stroke(),n.strokeStyle="rgba(235,202,139,.6)",n.lineWidth=2;for(let a=0;a<24;a++){let l=a/24*Q;n.beginPath(),n.moveTo(Math.cos(l)*r*.12,Math.sin(l)*r*.12),n.lineTo(Math.cos(l)*r*.185,Math.sin(l)*r*.185),n.stroke()}n.fillStyle="rgba(236,203,141,.88)";for(let a=0;a<12;a++)n.save(),n.rotate(a/12*Q),n.beginPath(),n.moveTo(0,-18),n.quadraticCurveTo(30,-70,0,-r*.13),n.quadraticCurveTo(-30,-70,0,-18),n.fill(),n.restore();n.restore(),n.restore(),Rl(n,e,t,50)},{anisotropy:8})}function h_(){return en(1024,1024,(n,e,t)=>{let i=e/2,s=t/2,r=n.createRadialGradient(i,s,0,i,s,e/2);r.addColorStop(0,"#e8cf9f"),r.addColorStop(.14,"#2a7372"),r.addColorStop(.5,"#16575c"),r.addColorStop(.88,"#1e6869"),r.addColorStop(1,"#0c3f43"),n.fillStyle=r,n.fillRect(0,0,e,t),n.save(),n.translate(i,s);for(let o=0;o<32;o++){let a=o/32*Q;n.strokeStyle=o%2===0?"rgba(221,184,113,.42)":"rgba(221,184,113,.17)",n.lineWidth=o%4===0?4:1.5,n.beginPath(),n.moveTo(Math.cos(a)*56,Math.sin(a)*56),n.lineTo(Math.cos(a)*505,Math.sin(a)*505),n.stroke()}[508,452,320,210,128,78].forEach((o,a)=>{n.strokeStyle=a%2?"rgba(228,195,128,.5)":"rgba(111,34,45,.62)",n.lineWidth=a===0?6:2.5,n.beginPath(),n.arc(0,0,o,0,Q),n.stroke()});for(let o=0;o<16;o++){let a=o/16*Q;n.save(),n.rotate(a),n.translate(0,-385),n.fillStyle=o%2?"rgba(112,28,43,.5)":"rgba(230,195,129,.17)",n.beginPath(),n.moveTo(0,-54),n.quadraticCurveTo(34,0,0,54),n.quadraticCurveTo(-34,0,0,-54),n.fill(),n.strokeStyle="rgba(225,188,119,.25)",n.lineWidth=1.5,n.stroke(),n.restore()}n.fillStyle="rgba(232,199,133,.78)";for(let o=0;o<12;o++)n.save(),n.rotate(o/12*Q),n.beginPath(),n.moveTo(0,-14),n.quadraticCurveTo(24,-58,0,-106),n.quadraticCurveTo(-24,-58,0,-14),n.fill(),n.restore();n.fillStyle="#6c1c2b",n.beginPath(),n.arc(0,0,43,0,Q),n.fill(),n.strokeStyle="rgba(233,199,132,.9)",n.lineWidth=3,n.stroke(),n.restore()})}function u_(){return en(2048,512,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#237071"),i.addColorStop(.45,"#18595d"),i.addColorStop(1,"#0f4146"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=20,r=e/s;for(let a=0;a<s;a++){let l=a*r;n.fillStyle="rgba(241,228,202,.08)",n.fillRect(l+14,24,r-28,t-48),n.strokeStyle="rgba(216,178,108,.55)",n.lineWidth=2,n.strokeRect(l+14,24,r-28,t-48),n.strokeStyle="rgba(216,178,108,.2)",n.lineWidth=1,n.strokeRect(l+23,33,r-46,t-66),n.save(),n.translate(l+r/2,t*.54),n.fillStyle="rgba(229,193,124,.65)";for(let c=0;c<8;c++)n.save(),n.rotate(c/8*Q),n.beginPath(),n.moveTo(0,-8),n.quadraticCurveTo(20,-35,0,-63),n.quadraticCurveTo(-20,-35,0,-8),n.fill(),n.restore();n.fillStyle="rgba(113,355,0,.2)",n.beginPath(),n.arc(0,0,8,0,Q),n.fillStyle="rgba(29,76,74,.9)",n.fill(),n.restore(),ui(n,l+r*.5,77,65),ui(n,l+r*.5,t-71,55)}let o=n.createLinearGradient(0,0,0,20);o.addColorStop(0,"rgba(246,218,160,.95)"),o.addColorStop(.5,"rgba(153,105,40,.95)"),o.addColorStop(1,"rgba(240,207,145,.95)"),n.fillStyle=o,n.fillRect(0,0,e,20),n.fillRect(0,t-22,e,22)})}function d_(){return en(2048,512,(n,e,t)=>{n.clearRect(0,0,e,t);let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#f8ecd5"),i.addColorStop(.5,"#f2e2c5"),i.addColorStop(.9,"#e6ceaa"),i.addColorStop(1,"#d8ba91"),n.fillStyle=i;let s=20,r=e/s,o=t*.54,a=t*.4;n.beginPath(),n.moveTo(0,0),n.lineTo(e,0),n.lineTo(e,o);for(let c=s-1;c>=0;c--){let h=c*r,d=h+r;n.quadraticCurveTo(h+r*.5,o+a,h,o)}n.closePath(),n.fill(),n.save(),n.globalCompositeOperation="source-atop";for(let c=0;c<e;c+=12){let h=.03+(Math.sin(c*.05)+1)*.018;n.fillStyle=`rgba(121,84,40,${h})`,n.fillRect(c,0,5,t)}for(let c=0;c<s;c++){let h=c*r+r/2;ui(n,h,t*.36,r*.72,"rgba(160,114,48,.44)"),n.strokeStyle="rgba(152,103,40,.35)",n.lineWidth=2,n.beginPath(),n.moveTo(h-r*.18,t*.15),n.quadraticCurveTo(h,t*.22,h+r*.18,t*.15),n.stroke()}n.restore();let l=n.createLinearGradient(0,0,0,22);l.addColorStop(0,"rgba(246,219,164,1)"),l.addColorStop(.4,"rgba(168,120,51,1)"),l.addColorStop(.75,"rgba(241,207,145,1)"),l.addColorStop(1,"rgba(133,91,33,1)"),n.fillStyle=l,n.fillRect(0,0,e,22),n.strokeStyle="rgba(170,120,50,.92)",n.lineWidth=7,n.beginPath(),n.moveTo(0,o);for(let c=0;c<s;c++)n.quadraticCurveTo(c*r+r*.5,o+a,(c+1)*r,o);n.stroke(),n.strokeStyle="rgba(250,225,173,.75)",n.lineWidth=2,n.stroke(),n.fillStyle="rgba(113,29,43,.8)";for(let c=0;c<s*2;c++)n.beginPath(),n.arc(c*r*.5+r*.25,43,4,0,Q),n.fill()},{anisotropy:8})}function f_(){return en(2048,1024,(n,e,t)=>{let i=n.createLinearGradient(0,t,0,0);i.addColorStop(0,"#f7ecd8"),i.addColorStop(.55,"#f3e3c7"),i.addColorStop(1,"#ecd8b6"),n.fillStyle=i,n.fillRect(0,0,e,t);let s=n.createLinearGradient(0,t*.035,0,t*.115);s.addColorStop(0,"#d8b26e"),s.addColorStop(.08,"#1b5f60"),s.addColorStop(.5,"#174f53"),s.addColorStop(.92,"#1b5f60"),s.addColorStop(1,"#d8b26e"),n.fillStyle=s,n.fillRect(0,t*.035,e,t*.08),n.strokeStyle="rgba(154,108,44,.55)",n.lineWidth=3,[.025,.125,.17,.82,.91].forEach(r=>{n.beginPath(),n.moveTo(0,t*r),n.lineTo(e,t*r),n.stroke()});for(let r=0;r<e;r+=32)n.strokeStyle=`rgba(145,103,48,${.035+(r%96===0?.03:0)})`,n.lineWidth=2,n.beginPath(),n.moveTo(r,0),n.lineTo(r,t),n.stroke();for(let r=0;r<56;r++){let o=(r+.5)/56*e,a=t*(.24+r*7%9*.065);n.save(),n.globalAlpha=.34;for(let l=0;l<6;l++)n.save(),n.translate(o,a),n.rotate(l/6*Q),n.fillStyle="rgba(185,137,64,.75)",n.beginPath(),n.ellipse(0,-17,9,19,0,0,Q),n.fill(),n.restore();n.fillStyle="rgba(109,29,43,.55)",n.beginPath(),n.arc(o,a,6,0,Q),n.fill(),n.restore()}for(let r=0;r<24;r++){let o=(r+.3)/24*e,a=t*(.5+r%3*.07);n.save(),n.globalAlpha=.28,ui(n,o,a,86),n.restore()}for(let r=0;r<3;r++){let o=n.createLinearGradient(0,r*t*.28,0,(r+1)*t*.28);o.addColorStop(0,"rgba(122,89,49,0)"),o.addColorStop(1,`rgba(122,89,49,${.018+r*.008})`),n.fillStyle=o,n.fillRect(0,r*t*.28,e,t*.28)}Rl(n,e,t,20)},{anisotropy:8})}function ld(){return en(512,512,(n,e,t)=>{n.clearRect(0,0,e,t);let i=e/2,s=t/2,r=n.createRadialGradient(i,s,10,i,s,e*.48);r.addColorStop(0,"#287b79"),r.addColorStop(.7,"#15595d"),r.addColorStop(1,"#0b3e43"),n.fillStyle=r,n.beginPath(),n.arc(i,s,e*.48,0,Q),n.fill(),n.strokeStyle="#d8b77c",n.lineWidth=14,n.beginPath(),n.arc(i,s,e*.46,0,Q),n.stroke(),n.lineWidth=3,n.beginPath(),n.arc(i,s,e*.4,0,Q),n.stroke(),n.fillStyle="rgba(236,206,147,.9)";for(let o=0;o<12;o++)n.save(),n.translate(i,s),n.rotate(o/12*Q),n.beginPath(),n.moveTo(0,-18),n.quadraticCurveTo(30,-72,0,-142),n.quadraticCurveTo(-30,-72,0,-18),n.fill(),n.strokeStyle="rgba(110,72,29,.45)",n.lineWidth=2,n.stroke(),n.restore();n.fillStyle="#6d1b2b",n.beginPath(),n.arc(i,s,29,0,Q),n.fill(),n.strokeStyle="rgba(249,220,159,.9)",n.lineWidth=4,n.stroke(),n.fillStyle="rgba(255,236,186,.85)";for(let o=0;o<10;o++){let a=o/10*Q;n.beginPath(),n.arc(i+Math.cos(a)*15,s+Math.sin(a)*15,2.6,0,Q),n.fill()}})}function p_(n){return en(256,256,(e,t,i)=>{e.clearRect(0,0,t,i);let s=t/2,r=i/2;e.fillStyle="rgba(245,231,203,.95)",e.beginPath(),e.arc(s,r,94,0,Q),e.fill(),e.strokeStyle="rgba(143,100,39,.9)",e.lineWidth=8,e.stroke(),e.strokeStyle="rgba(143,100,39,.4)",e.lineWidth=2,e.beginPath(),e.arc(s,r,80,0,Q),e.stroke(),e.fillStyle="#204f50",e.font='600 78px "Baskerville", "Times New Roman", serif',e.textAlign="center",e.textBaseline="middle",e.fillText(String(n).padStart(2,"0"),s,r+5),e.fillStyle="rgba(138,94,36,.65)",e.beginPath(),e.arc(s,r-70,4,0,Q),e.fill(),e.beginPath(),e.arc(s,r+70,4,0,Q),e.fill()})}function m_(){return en(1024,320,(n,e,t)=>{let i=n.createLinearGradient(0,0,0,t);i.addColorStop(0,"#f7ebd5"),i.addColorStop(.55,"#efe0c3"),i.addColorStop(1,"#dfc49c"),n.fillStyle=i,n.fillRect(0,0,e,t),n.strokeStyle="rgba(137,94,36,.9)",n.lineWidth=10,n.strokeRect(12,12,e-24,t-24),n.strokeStyle="rgba(137,94,36,.4)",n.lineWidth=2,n.strokeRect(32,32,e-64,t-64),ui(n,123,74,100),ui(n,e-123,t-74,100),n.save(),n.translate(e/2,102),n.fillStyle="rgba(27,95,95,.9)",n.beginPath(),n.arc(0,0,42,0,Q),n.fill(),n.strokeStyle="rgba(238,204,140,.9)",n.lineWidth=3,n.stroke(),n.fillStyle="rgba(239,208,147,.92)";for(let s=0;s<8;s++)n.save(),n.rotate(s/8*Q),n.beginPath(),n.moveTo(0,-5),n.quadraticCurveTo(12,-21,0,-36),n.quadraticCurveTo(-12,-21,0,-5),n.fill(),n.restore();n.restore(),n.textAlign="center",n.fillStyle="#1b4c4d",n.font='400 76px "Songti SC", "STSong", "SimSun", serif',n.fillText("\u74F7 \u68A6 \u8336 \u4F1A",e/2,206),n.fillStyle="rgba(139,99,40,.9)",n.font='400 21px "Baskerville", "Times New Roman", serif',n.fillText("T H E   P O R C E L A I N   T E A   P A R T Y",e/2,247),n.fillStyle="rgba(27,76,77,.5)",n.font='400 16px "Songti SC", "SimSun", serif',n.fillText("\u661F \u68A6 \u5947 \u5883 \xB7 \u4E1C \u5EAD \u8336 \u5E2D",e/2,281)})}function g_(){return en(1024,1024,(n,e,t)=>{n.fillStyle="#cdbb9e",n.fillRect(0,0,e,t);let i=128;for(let s=0;s<t;s+=i)for(let r=0;r<e;r+=i){let o=Math.floor(s/i)%2*i*.5,a=(r+o)%e,l=.92+Math.random()*.12;n.fillStyle=`rgba(${226*l},${209*l},${181*l},1)`,n.fillRect(a+3,s+3,i-6,i-6),n.strokeStyle="rgba(121,99,68,.22)",n.lineWidth=2,n.strokeRect(a+3,s+3,i-6,i-6),n.fillStyle="rgba(164,135,91,.17)",n.beginPath(),n.moveTo(a+i/2,s+31),n.lineTo(a+i-34,s+i/2),n.lineTo(a+i/2,s+i-31),n.lineTo(a+34,s+i/2),n.closePath(),n.fill()}for(let s=0;s<12;s++){let r=Math.random()*e,o=Math.random()*t,a=50+Math.random()*130,l=n.createRadialGradient(r,o,0,r,o,a);l.addColorStop(0,"rgba(102,83,55,.055)"),l.addColorStop(1,"rgba(102,83,55,0)"),n.fillStyle=l,n.fillRect(r-a,o-a,a*2,a*2)}},{repeatX:9,repeatY:9,anisotropy:8})}function __(){return en(2048,2048,(n,e,t)=>{let i=e/2,s=t/2;n.fillStyle="#e4cfad",n.fillRect(0,0,e,t),n.save(),n.translate(i,s);let r=e/2,o=7;for(let a=0;a<o;a++){let l=r*(.4+a*.085),c=r*(.4+(a+1)*.085),h=26+a*7;for(let d=0;d<h;d++){let f=d/h*Q,u=(d+1)/h*Q,m=(a+d)%2===0?"#ebd9ba":"#e1cba7";n.fillStyle=m,n.beginPath(),n.arc(0,0,c,f,u),n.arc(0,0,l,u,f,!0),n.closePath(),n.fill(),n.strokeStyle="rgba(132,105,67,.18)",n.lineWidth=2,n.stroke()}}n.strokeStyle="rgba(24,83,84,.7)",n.lineWidth=16,n.beginPath(),n.arc(0,0,r*.395,0,Q),n.stroke(),n.strokeStyle="rgba(180,138,75,.7)",n.lineWidth=4,n.beginPath(),n.arc(0,0,r*.41,0,Q),n.stroke(),n.restore()},{anisotropy:8})}function On(n={}){return new oi({roughness:.35,metalness:.02,clearcoat:.5,clearcoatRoughness:.2,...n})}function Bn(n={}){return new Ln({roughness:.55,metalness:.05,...n})}function v_(){let n=On({color:Fn.cream,clearcoat:.95,clearcoatRoughness:.12,roughness:.22}),e=On({color:Fn.creamDeep,clearcoat:.9,clearcoatRoughness:.15,roughness:.25}),t=On({color:Fn.ivory,clearcoat:.7,roughness:.32}),i=Bn({color:Fn.gold,metalness:.88,roughness:.27}),s=Bn({color:Fn.goldLight,metalness:.78,roughness:.2}),r=Bn({color:Fn.goldDark,metalness:.68,roughness:.42}),o=Bn({color:Fn.teal,roughness:.36,metalness:.18}),a=Bn({color:Fn.tealDeep,roughness:.42,metalness:.14}),l=On({color:Fn.wine,roughness:.82,metalness:0,sheen:1,sheenRoughness:.5,sheenColor:new ge(12867682),side:wt}),c=On({color:Fn.wineDeep,roughness:.88,sheen:1,sheenColor:new ge(10435145),side:wt}),h=On({color:7413037,roughness:.18,clearcoat:1,clearcoatRoughness:.08,side:wt}),d=Bn({color:14271908,roughness:.88}),f=Bn({color:15588544,roughness:.78}),u=Bn({color:1917500,roughness:.9}),m=Bn({color:2971461,roughness:.88}),_=Bn({color:4813659,roughness:.86}),g=On({color:16769191,emissive:new ge(16757855),emissiveIntensity:1.4,roughness:.15,transparent:!0,opacity:.82,clearcoat:1}),p=new Ht({color:16770998,toneMapped:!1});return{porcelain:n,porcelainWarm:e,ivory:t,gold:i,goldBright:s,goldAntique:r,teal:o,tealDeep:a,wine:l,wineDark:c,interior:h,stone:d,stoneLight:f,darkGreen:u,leaf:m,leafLight:_,glass:g,bulb:p}}function yn(n,e,t,i,s){let r=new ke(n,e);return t&&r.position.set(t[0],t[1],t[2]),i&&r.rotation.set(i[0],i[1],i[2]),s&&r.scale.set(s[0],s[1],s[2]),r}function rt(n,e,t,i,s,r,o,a={}){let l=new cn(e,t,i,s,a.heightSegments||1,a.openEnded||!1,a.thetaStart||0,a.thetaLength||Q),c=yn(l,o,r,a.rotation,a.scale);return c.castShadow=a.castShadow??!0,c.receiveShadow=a.receiveShadow??!0,n.add(c),c}function je(n,e,t,i,s,r,o,a){let l=yn(new wi(e,t,i,s),o,r,a);return l.castShadow=!0,l.receiveShadow=!0,n.add(l),l}function It(n,e,t,i,s,r,o){let a=yn(new ri(e,t,i),r,s,null,o);return a.castShadow=!0,a.receiveShadow=!0,n.add(a),a}function Wn(n,e,t,i=32,s=6){let r=new Zi(n),o=new zs(r,i,e,s,!1),a=new ke(o,t);return a.castShadow=!0,a.receiveShadow=!0,a}function js(n,e,t=64,i=0,s=Q,r){let o=new kr(n,t,i,s);o.computeVertexNormals();let a=new ke(o,e);return a.castShadow=!0,a.receiveShadow=!0,r&&(e.side=r),a}function y_(n,e,t,i=64,s=0,r=0){let o=yn(new mn(n,i),e,[s,t,r],[-Math.PI/2,0,0]);return o.receiveShadow=!0,o}function ad(n,e,t,i,s,r,o,a=.02){let l=new St,c=26,h=7,d=[],f=[],u=[];for(let M=0;M<=h;M++){let b=M/h;for(let x=0;x<=c;x++){let w=x/c,T=dt.lerp(e,t,w),P=Math.sin(Math.PI*w),D=n+Math.sin(Math.PI*w)*Math.sin(b*Math.PI)*a,E=i-b*s*P;d.push(Math.cos(T)*D,E,Math.sin(T)*D),f.push(w,1-b)}}for(let M=0;M<h;M++)for(let b=0;b<c;b++){let x=M*(c+1)+b,w=x+1,T=x+c+1,P=T+1;u.push(x,T,w,w,T,P)}let m=new pt;m.setAttribute("position",new Ye(d,3)),m.setAttribute("uv",new Ye(f,2)),m.setIndex(u),m.computeVertexNormals();let _=new ke(m,r);_.castShadow=!0,_.receiveShadow=!0,l.add(_);let g=[];for(let M=0;M<=16;M++){let b=M/16,x=dt.lerp(e,t,b),w=Math.sin(Math.PI*b);g.push(new C(Math.cos(x)*(n+Math.sin(Math.PI*b)*.02),i-s*w-.012,Math.sin(x)*(n+Math.sin(Math.PI*b)*.02)))}let p=Wn(g,.018,o,28,4);if(l.add(p),s>.5){let M=(e+t)/2,b=n,x=i-s,w=It(l,.045,8,8,[Math.cos(M)*b,x-.09,Math.sin(M)*b],o);w.castShadow=!1;let T=rt(l,.008,.012,.18,4,[Math.cos(M)*b,x-.22,Math.sin(M)*b],o);T.castShadow=!1,It(l,.035,7,7,[Math.cos(M)*b,x-.33,Math.sin(M)*b],r,[.8,1.3,.8])}return l}function x_(n,e,t=10,i=9.75,s=1.1,r=6.83){let o=new cn(.075,.1,r-s-.5,10,1),a=new cn(.24,.34,.24,10),l=new cn(.24,.16,.2,10);for(let c=0;c<t;c++){let h=c/t*Q,d=Math.cos(h)*i,f=Math.sin(h)*i,u=new St;u.position.set(d,0,f),rt(u,.36,.42,.2,12,[0,s+.1,0],e.goldAntique),rt(u,.26,.31,.16,12,[0,s+.27,0],e.gold);let m=new ke(o,e.gold);m.position.y=s+.42+(r-s-.5)/2,m.castShadow=!0,m.receiveShadow=!0,u.add(m),je(u,.11,.022,5,16,[0,s+.45,0],e.goldBright,[Math.PI/2,0,0]),rt(u,.18,.26,.18,12,[0,r-.31,0],e.gold),je(u,.25,.06,6,24,[0,r-.19,0],e.goldAntique,[Math.PI/2,0,0]);let _=new ke(l,e.gold);_.position.y=r-.06,_.castShadow=!0,u.add(_);for(let g=0;g<4;g++){let p=g/4*Q,M=je(u,.09,.018,4,10,[Math.cos(p)*.2,r-.13,Math.sin(p)*.2],e.goldBright,[Math.PI/2,0,p]);M.castShadow=!1}n.add(u)}}function M_(n,e,t,i,s){let r=new St,o=[new Pe(0,0),new Pe(.34,0),new Pe(.62,.015),new Pe(.94,.04),new Pe(1.22,.075),new Pe(1.44,.13),new Pe(1.53,.18),new Pe(1.51,.22),new Pe(1.42,.21),new Pe(1.18,.16),new Pe(.88,.125)],a=js(o,e.porcelainWarm,64);a.position.y=0,r.add(a),je(r,1.5,.026,5,64,[0,.19,0],e.gold,[Math.PI/2,0,0]);let l=y_(1.42,s,.215);r.add(l),je(r,1.29,.013,4,64,[0,.226,0],e.teal,[Math.PI/2,0,0]),je(r,1.17,.009,3,56,[0,.228,0],e.goldBright,[Math.PI/2,0,0]);for(let w=0;w<8;w++){let T=w/8*Q;It(r,.022,6,5,[Math.cos(T)*1.355,.228,Math.sin(T)*1.355],e.goldBright)}let c=[new Pe(0,0),new Pe(.35,.005),new Pe(.51,.035),new Pe(.6,.1),new Pe(.69,.26),new Pe(.79,.5),new Pe(.88,.78),new Pe(.95,1.06),new Pe(1,1.3),new Pe(1.02,1.4),new Pe(1.015,1.44)],h=On({map:t,roughness:.2,metalness:.02,clearcoat:1,clearcoatRoughness:.08,color:16777215}),d=js(c,h,72);d.position.y=.22,r.add(d);let f=[new Pe(1.01,1.43),new Pe(.96,1.3),new Pe(.9,1.03),new Pe(.8,.72),new Pe(.66,.42),new Pe(.46,.22),new Pe(.24,.14),new Pe(0,.12)],u=js(f,e.interior,64);u.position.y=.22,u.castShadow=!1,r.add(u),je(r,1.02,.047,6,72,[0,1.66,0],e.goldBright,[Math.PI/2,0,0]),je(r,1,.018,4,72,[0,1.59,0],e.gold,[Math.PI/2,0,0]),je(r,.96,.014,4,64,[0,1.53,0],e.goldBright,[Math.PI/2,0,0]),je(r,.55,.032,5,48,[0,.27,0],e.gold,[Math.PI/2,0,0]),je(r,.84,.018,4,60,[0,.78,0],e.gold,[Math.PI/2,0,0]);let m=Wn([new Ge(.96,1.37,0),new Ge(1.28,1.4,0),new Ge(1.46,1.22,0),new Ge(1.43,.94,0),new Ge(1.25,.78,0),new Ge(.96,.8,0)],.075,e.gold,40,7);r.add(m),je(r,.1,.022,4,16,[1.02,1.37,0],e.goldBright,[0,0,0]),je(r,.1,.022,4,16,[1.02,.8,0],e.goldBright,[0,0,0]);let _=je(r,.075,.016,4,14,[1.47,1.08,0],e.goldBright,[0,.45,0]);_.castShadow=!1;let g=yn(new mn(.155,32),new Ht({map:i,transparent:!0,depthWrite:!1,toneMapped:!1}),[.92,.225,.94],[-Math.PI/2,0,0]);g.renderOrder=2,r.add(g);let p=yn(new cn(.5,.55,.09,24),e.wine,[0,.38,0]);p.castShadow=!1,r.add(p),je(r,.48,.02,4,28,[0,.43,0],e.gold,[Math.PI/2,0,0]);let M=new St;M.position.y=.7;let b=yn(new wi(.3,.032,6,30),e.goldBright,null,[Math.PI/2,0,0]);M.add(b);for(let w=0;w<6;w++){let T=w/6*Q,P=yn(new cn(.015,.015,.58,4),e.gold,null,[0,0,0]);P.rotation.z=Math.PI/2,P.rotation.y=T,P.position.set(Math.cos(T)*.29,0,Math.sin(T)*.29),M.add(P)}It(M,.075,10,8,[0,0,0],e.goldBright);let x=yn(new cn(.045,.045,.11,12),e.porcelain,[0,.07,0]);M.add(x),r.add(M);for(let w=0;w<8;w++){let T=w/8*Q,P=It(r,.022,6,5,[Math.cos(T)*1.028,1.67,Math.sin(T)*1.028],e.goldBright);P.castShadow=!1}return r.traverse(w=>{w.isMesh&&(w.castShadow=w.castShadow!==!1,w.receiveShadow=!0)}),{group:r,wheel:M,inner:u,body:d}}function S_(n,e){let t=new St,i=On({map:e,roughness:.17,clearcoat:1,clearcoatRoughness:.08,color:16777215});rt(t,1.82,1.9,.12,48,[0,.07,0],n.stone,{castShadow:!0}),rt(t,1.62,1.74,.3,48,[0,.28,0],n.tealDeep),je(t,1.68,.035,5,64,[0,.44,0],n.gold,[Math.PI/2,0,0]),rt(t,1.4,1.55,.36,48,[0,.62,0],n.teal),je(t,1.42,.028,5,64,[0,.81,0],n.gold,[Math.PI/2,0,0]),rt(t,1.34,1.34,.08,48,[0,.86,0],n.cream||n.porcelainWarm);let s=ld(),r=new Ht({map:s,transparent:!0,toneMapped:!1,side:wt});for(let f=0;f<8;f++){let u=f/8*Q,m=yn(new mn(.22,24),r,[Math.cos(u)*1.56,.64,Math.sin(u)*1.56],[0,Math.PI/2-u,0]);m.renderOrder=2,t.add(m)}for(let f=0;f<16;f++){let u=f/16*Q;It(t,.04,6,5,[Math.cos(u)*1.42,.835,Math.sin(u)*1.42],n.goldBright)}let o=[new Pe(0,0),new Pe(.58,0),new Pe(.78,.08),new Pe(.98,.32),new Pe(1.14,.68),new Pe(1.18,1),new Pe(1.1,1.33),new Pe(.93,1.56),new Pe(.7,1.69),new Pe(.54,1.72)],a=js(o,i,80);a.position.y=1.02,t.add(a),je(t,1.08,.04,5,72,[0,1.99,0],n.goldBright,[Math.PI/2,0,0]),je(t,.62,.028,4,56,[0,1.08,0],n.gold,[Math.PI/2,0,0]),rt(t,.66,.74,.1,48,[0,2.76,0],n.porcelainWarm),je(t,.67,.03,4,56,[0,2.81,0],n.gold,[Math.PI/2,0,0]);let l=yn(new ri(.62,32,16,0,Q,0,Math.PI/2),n.porcelainWarm,[0,2.8,0],[0,0,0],[1,.44,1]);l.castShadow=!0,t.add(l),je(t,.2,.025,4,24,[0,3.04,0],n.goldBright,[Math.PI/2,0,0]),It(t,.16,16,12,[0,3.18,0],n.goldBright,[.8,1.25,.8]),rt(t,.02,.04,.2,8,[0,3.4,0],n.gold),It(t,.05,10,8,[0,3.53,0],n.goldBright);let c=Wn([new Ge(1.02,1.76,0),new Ge(1.46,1.84,0),new Ge(1.84,2.1,0),new Ge(2.02,2.48,0),new Ge(2.08,2.72,0)],.15,i,46,12);t.add(c),rt(t,.13,.17,.18,20,[2.08,2.79,0],i),je(t,.115,.028,4,20,[2.08,2.88,0],n.goldBright,[Math.PI/2,0,0]),je(t,.16,.022,4,20,[1.16,1.78,0],n.gold,[0,0,Math.PI/2]);let h=Wn([new Ge(-1.05,1.68,0),new Ge(-1.72,1.56,0),new Ge(-2.04,1.95,0),new Ge(-1.9,2.45,0),new Ge(-1.26,2.5,0),new Ge(-.92,2.22,0)],.105,n.gold,52,10);t.add(h),It(t,.13,12,10,[-1.05,1.68,0],n.goldBright,[1,.8,1]),It(t,.11,12,10,[-.94,2.24,0],n.goldBright,[1,.8,1]);let d=je(t,.16,.025,4,24,[-1.92,2.2,0],n.goldBright,[0,Math.PI/2,0]);d.castShadow=!1;for(let f=0;f<8;f++){let u=f/8*Q;It(t,.035,6,5,[Math.cos(u)*.55,2.9,Math.sin(u)*.55],f%2?n.goldBright:n.porcelain)}return t.traverse(f=>{f.isMesh&&(f.castShadow=!0,f.receiveShadow=!0)}),{group:t,spoutTip:new Ge(2.08,2.96,0)}}function b_(n){let e={topColor:{value:new ge(9418692)},bottomColor:{value:new ge(16180161)},sunColor:{value:new ge(16769187)},sunDir:{value:new C(-.4,.42,-.8).normalize()},intensity:{value:1}},t=new Pt({uniforms:e,side:Vt,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vWorld;
      void main() {
        vec4 world = modelMatrix * vec4(position, 1.0);
        vWorld = world.xyz;
        gl_Position = projectionMatrix * viewMatrix * world;
      }
    `,fragmentShader:`
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform vec3 sunColor;
      uniform vec3 sunDir;
      uniform float intensity;
      varying vec3 vWorld;
      void main() {
        vec3 dir = normalize(vWorld);
        float h = smoothstep(-0.12, 0.7, dir.y);
        vec3 col = mix(bottomColor, topColor, h);
        float sun = pow(max(dot(dir, normalize(sunDir)), 0.0), 36.0);
        float haze = pow(1.0 - max(dir.y, 0.0), 4.0) * 0.18;
        col += sunColor * sun * 0.42 * intensity;
        col += sunColor * haze * 0.35 * intensity;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),i=new ke(new ri(120,48,32),t);return i.frustumCulled=!1,n.add(i),{dome:i,uniforms:e}}function E_(n){let t=new Float32Array(1260),i=new Float32Array(420);for(let a=0;a<420;a++){let l=Math.random()*Q,c=.18+Math.random()*.75,h=Math.sqrt(1-c*c),d=95;t[a*3]=Math.cos(l)*h*d,t[a*3+1]=c*d,t[a*3+2]=Math.sin(l)*h*d,i[a]=.4+Math.random()*1.4}let s=new pt;s.setAttribute("position",new Lt(t,3)),s.setAttribute("size",new Lt(i,1));let r=new si({color:16772299,size:.24,transparent:!0,opacity:0,depthWrite:!1,blending:jt,sizeAttenuation:!0,toneMapped:!1}),o=new Si(s,r);return o.frustumCulled=!1,n.add(o),o}function T_(n,e){let t=new ii({map:e,color:16773321,transparent:!0,opacity:.75,depthWrite:!1,blending:jt,toneMapped:!1}),i=new Mi(t);i.scale.set(10,10,1),i.position.set(-36,40,-55),n.add(i);let s=new Mi(new ii({map:e,color:16775135,transparent:!0,opacity:.95,depthWrite:!1,blending:jt,toneMapped:!1}));return s.scale.set(2.6,2.6,1),s.position.copy(i.position),n.add(s),{sprite:i,core:s}}function w_(n,e){let t=new St,i=new Ln({map:g_(),roughness:.95,metalness:0,color:13877408}),s=new ke(new Ei(170,170),i);s.rotation.x=-Math.PI/2,s.position.y=-.01,s.receiveShadow=!0,t.add(s);let r=new Ln({map:__(),roughness:.82,metalness:.02,color:15785405,transparent:!0}),o=new ke(new Ti(10.8,25.5,96,1),r);o.rotation.x=-Math.PI/2,o.position.y=.012,o.receiveShadow=!0,t.add(o);let a=new ke(new wi(25.5,.045,4,120),e.goldAntique);a.rotation.x=Math.PI/2,a.position.y=.03,t.add(a);let l=new ri(1,10,7);for(let c=0;c<34;c++){let h=c/34*Q;if(Math.sin(h)>.72)continue;let d=15.4+Math.sin(c*2.7)*.5,f=new ke(l,c%3?e.darkGreen:e.leaf);if(f.scale.set(1.25+c%4*.16,.55+c%3*.1,.9),f.position.set(Math.cos(h)*d,.48,Math.sin(h)*d),f.rotation.y=-h,f.castShadow=!0,f.receiveShadow=!0,t.add(f),c%5===0){let u=new ke(new $i(.7,1),e.leafLight);u.position.set(Math.cos(h)*d,1.2,Math.sin(h)*d),u.scale.y=1.3,u.castShadow=!0,t.add(u)}}for(let c=0;c<16;c++){let h=c/16*Q+.17,d=30+c%4*3.2;if(Math.sin(h)>.82)continue;let f=new St;f.position.set(Math.cos(h)*d,0,Math.sin(h)*d),rt(f,.22,.3,3.2,6,[0,1.6,0],Bn({color:5980972,roughness:.9}),{castShadow:!1});let u=new ke(new $i(1.8,1),c%2?e.leaf:e.darkGreen);if(u.position.y=4.1,u.scale.set(1,1.25,1),u.castShadow=!0,f.add(u),c%3===0){let m=new ke(new $i(1.1,1),e.leafLight);m.position.set(.8,5.15,.3),f.add(m)}t.add(f)}return{group:t,ground:s,apron:o}}function A_(n){if(!n)return null;let e=document.createElement("canvas");e.width=1024,e.height=512;let t=e.getContext("2d"),i=t.createLinearGradient(0,0,0,512);i.addColorStop(0,"#111d31"),i.addColorStop(.38,"#5e5b62"),i.addColorStop(.52,"#e3c493"),i.addColorStop(.62,"#7d5f42"),i.addColorStop(1,"#17151a"),t.fillStyle=i,t.fillRect(0,0,1024,512),[[220,235,130,"#ffcf88"],[520,205,180,"#ffd9a0"],[815,260,150,"#ffbd7a"]].forEach(([c,h,d,f])=>{let u=t.createRadialGradient(c,h,0,c,h,d);u.addColorStop(0,f),u.addColorStop(.12,"rgba(255,223,168,.78)"),u.addColorStop(.5,"rgba(255,188,113,.22)"),u.addColorStop(1,"rgba(255,170,80,0)"),t.fillStyle=u,t.fillRect(c-d,h-d,d*2,d*2)});let r=t.createRadialGradient(700,90,0,700,90,260);r.addColorStop(0,"rgba(163,191,235,.55)"),r.addColorStop(1,"rgba(120,150,210,0)"),t.fillStyle=r,t.fillRect(400,0,620,360);let o=new bi(e);o.mapping=Pi,o.colorSpace=Ft;let a=new Di(n);a.compileEquirectangularShader();let l=a.fromEquirectangular(o);return o.dispose(),a.dispose(),l.texture}function R_(n,e,t){let i=[],s=e.glass;for(let r=0;r<8;r++){let o=r/8*Q+Math.PI/8;if(Math.sin(o)>.82)continue;let a=13.4,l=Math.cos(o)*a,c=Math.sin(o)*a,h=new St;h.position.set(l,0,c),rt(h,.14,.2,.2,10,[0,.1,0],e.goldAntique),rt(h,.055,.075,3,8,[0,1.58,0],e.gold),je(h,.13,.02,4,14,[0,.69,0],e.goldBright,[Math.PI/2,0,0]),rt(h,.16,.1,.12,10,[0,3.1,0],e.gold);let d=It(h,.25,16,12,[0,3.36,0],s,[1,1.22,1]);d.castShadow=!1,rt(h,.18,.06,.15,10,[0,3.69,0],e.gold),It(h,.035,8,6,[0,3.8,0],e.goldBright);let f=new Mi(new ii({map:t,color:16766106,transparent:!0,opacity:.65,depthWrite:!1,blending:jt,toneMapped:!1}));f.scale.set(1.7,1.7,1),f.position.set(0,3.37,0),h.add(f),i.push(new Ge(l,3.37,c)),n.add(h)}return i}function C_(n,e){let t=m_(),i=new Ht({map:t,toneMapped:!1}),s=new St;s.position.set(-9.5,0,10.3),s.rotation.y=.36;let r=new ke(new Ei(4.4,1.38),i);r.position.set(0,2.95,.02),s.add(r);let o=new ke(new ni(4.58,1.56,.16),e.goldAntique);o.position.set(0,2.95,-.08),o.castShadow=!0,s.add(o);for(let u of[-2.25,2.25])rt(s,.07,.1,3.4,8,[u,1.7,-.1],e.gold),rt(s,.16,.22,.16,10,[u,.08,-.1],e.goldAntique),It(s,.11,10,8,[u,3.47,-.1],e.goldBright),rt(s,.022,.022,.2,5,[u,3.67,-.1],e.goldBright);je(s,2.25,.028,4,32,[0,3.58,-.1],e.gold,[0,0,Math.PI/2]),n.add(s);let a=e.stoneLight,l=new oi({color:5706530,roughness:.82,sheen:1,sheenColor:new ge(10829387)}),c=[{z:11.9,y:.16,w:5.8,d:.8},{z:11.25,y:.46,w:5.3,d:.65},{z:10.65,y:.76,w:4.8,d:.65}];c.forEach(u=>{ah(n,u.w,.26,u.d,[0,u.y,u.z],a),ah(n,u.w+.12,.035,u.d+.06,[0,u.y+.15,u.z],e.gold),ah(n,2.3,.036,u.d+.02,[0,u.y+.175,u.z],l)});for(let u of[-1,1]){for(let _=0;_<3;_++){let g=c[_];rt(n,.026,.035,.82,6,[u*(g.w/2+.06),g.y+.56,g.z],e.gold)}let m=Wn([new Ge(u*3.02,.83,12.25),new Ge(u*2.78,1.08,11.25),new Ge(u*2.52,1.33,10.25)],.03,e.gold,16,4);n.add(m)}let h=[];for(let u=0;u<5;u++){let m=4.4+u*1.55;rt(n,.045,.06,.9,8,[m,.45,12.7],e.gold),It(n,.075,8,7,[m,.93,12.7],e.goldBright),h.push(new Ge(m,.78,12.7))}let d=new Zi(h),f=new ke(new zs(d,40,.022,4,!1),e.wine);f.castShadow=!1,n.add(f)}function ah(n,e,t,i,s,r){let o=new ke(new ni(e,t,i),r);return o.position.set(s[0],s[1],s[2]),o.castShadow=!0,o.receiveShadow=!0,n.add(o),o}function cd({scene:n,renderer:e,bloom:t,isMobile:i=!1,park:s=null}){let r=!!s,o=v_(),a=new St;if(r){let B=s.position||[0,0,0];a.position.set(B[0],B[1],B[2]),a.scale.setScalar(s.scale??1)}n.add(a);let l=s_(),c=null,h=null,d=null,f=null,u;r?(u={inner:new Ci(16763279,82,28,2),front:new Ci(16766886,22,18,2)},u.inner.position.set(0,6.2,2.5),u.front.position.set(3.5,3.2,11.5),a.add(u.inner,u.front)):(c=b_(n),h=E_(n),d=T_(n,l),f=w_(n,o),a.add(f.group),n.fog=new Pr(14864563,.0035),u={hemi:new Gr(11323604,7230784,1.15),key:new Hs(16770232,2.4),fill:new Hs(12374493,.6),inner:new Ci(16760952,22,21,2),front:new Ci(16767393,12,15,2)},u.key.position.set(16,26,14),u.key.castShadow=!0,u.key.shadow.mapSize.set(i?1024:2048,i?1024:2048),u.key.shadow.camera.left=-20,u.key.shadow.camera.right=20,u.key.shadow.camera.top=24,u.key.shadow.camera.bottom=-16,u.key.shadow.camera.near=1,u.key.shadow.camera.far=65,u.key.shadow.bias=-4e-4,u.key.shadow.normalBias=.025,n.add(u.hemi,u.key,u.key.target,u.fill),u.fill.position.set(-18,13,-12),u.inner.position.set(0,6.45,0),u.front.position.set(4,3.1,11.5),n.add(u.inner,u.front));let m=new St;a.add(m),rt(m,10.55,10.8,.26,80,[0,.13,0],o.stone),je(m,10.72,.07,5,96,[0,.27,0],o.goldAntique,[Math.PI/2,0,0]);let _=new Ln({map:u_(),roughness:.42,metalness:.18,side:wt}),g=new ke(new cn(10.52,10.56,.82,96,1,!0),_);g.position.y=.68,g.receiveShadow=!0,m.add(g);for(let B=0;B<20;B++){let ee=B/20*Q,Ee=Math.cos(ee)*10.56,v=Math.sin(ee)*10.56;rt(m,.045,.05,.94,6,[Ee,.7,v],o.gold),It(m,.065,8,6,[Ee,1.16,v],o.goldBright)}for(let B=0;B<20;B++){let ee=B/20*Q+.025,Ee=(B+1)/20*Q-.025,v=ad(10.58,ee,Ee,1.04,.45,o.wine,o.goldBright,.025);m.add(v)}je(m,10.55,.055,4,96,[0,1.23,0],o.gold,[Math.PI/2,0,0]),je(m,10.55,.035,4,96,[0,.29,0],o.gold,[Math.PI/2,0,0]);let p=new ke(new Ti(9.1,10.54,96,1),new oi({color:15258546,roughness:.5,metalness:.05,clearcoat:.25}));p.rotation.x=-Math.PI/2,p.position.y=1.095,p.receiveShadow=!0,m.add(p),je(m,9.12,.035,4,96,[0,1.1,0],o.gold,[Math.PI/2,0,0]),x_(m,o,10,9.72,1.12,6.92);let M=[new Pe(10.58,6.86),new Pe(10.6,7.04),new Pe(10.1,7.18),new Pe(9.1,7.55),new Pe(7.5,8.03),new Pe(5.5,8.54),new Pe(3.4,9.02),new Pe(1.85,9.38),new Pe(.9,9.58),new Pe(0,9.68)],b=On({map:f_(),color:16777215,roughness:.56,metalness:.02,clearcoat:.34,clearcoatRoughness:.46}),x=js(M,b,96);x.castShadow=!1,m.add(x);for(let B=0;B<20;B++){let ee=B/20*Q,Ee=[];for(let L=2;L<M.length;L++){let O=M[L];Ee.push(new Ge(Math.cos(ee)*(O.x+.012),O.y+.012,Math.sin(ee)*(O.x+.012)))}let v=Wn(Ee,.022,o.gold,28,4);v.castShadow=!1,m.add(v)}je(m,10.57,.075,5,120,[0,6.94,0],o.gold,[Math.PI/2,0,0]),je(m,8.55,.018,4,120,[0,7.76,0],o.goldAntique,[Math.PI/2,0,0]),je(m,3.55,.015,4,96,[0,9.02,0],o.goldAntique,[Math.PI/2,0,0]);for(let B=0;B<30;B++){let ee=B/30*Q;It(m,.055,7,5,[Math.cos(ee)*8.55,7.79,Math.sin(ee)*8.55],o.goldBright)}for(let B=0;B<18;B++){let ee=B/18*Q+.09,Ee=9.55,v=yn(new mn(.17,20),new Ht({color:1926502,toneMapped:!1}),[Math.cos(ee)*Ee,7.35,Math.sin(ee)*Ee],[-Math.PI/2,0,0]);m.add(v);let L=je(m,.18,.012,3,18,[Math.cos(ee)*Ee,7.36,Math.sin(ee)*Ee],o.goldBright,[Math.PI/2,0,0]);L.castShadow=!1}let w=new Ln({map:d_(),transparent:!0,alphaTest:.22,side:wt,roughness:.58,metalness:.06}),T=new ke(new cn(10.55,10.62,1.22,128,1,!0),w);T.position.y=6.33,T.castShadow=!1,T.receiveShadow=!0,m.add(T);let P=ld(),D=new Ht({map:P,transparent:!0,toneMapped:!1,side:wt});for(let B=0;B<10;B++){let ee=B/10*Q+Math.PI/10,Ee=new St;Ee.position.set(Math.cos(ee)*10.635,6.4,Math.sin(ee)*10.635),Ee.rotation.y=Math.PI/2-ee;let v=new ke(new mn(.58,32),D);v.position.z=.018,Ee.add(v);let L=new ke(new wi(.6,.026,4,40),o.gold);L.position.z=.025,Ee.add(L),m.add(Ee)}for(let B=0;B<20;B++){let ee=B/20*Q+.03,Ee=(B+1)/20*Q-.03,v=ad(10.32,ee,Ee,6.16,.62,o.wine,o.goldBright,.04);v.position.y=0,m.add(v)}for(let B=0;B<8;B++){let ee=B/8*Q+Math.PI/8,Ee=Math.cos(ee)*7.7,v=Math.sin(ee)*7.7,L=new St;L.position.set(Ee,0,v),rt(L,.012,.012,.5,4,[0,6.42,0],o.gold,{castShadow:!1}),rt(L,.14,.08,.1,10,[0,6.16,0],o.gold);let O=It(L,.23,12,10,[0,5.9,0],o.glass,[1,1.45,1]);O.castShadow=!1,rt(L,.07,.12,.08,10,[0,5.57,0],o.gold);let H=rt(L,.012,.095,.28,8,[0,5.38,0],o.wine);H.castShadow=!1;let R=new Mi(new ii({map:l,color:16761469,transparent:!0,opacity:.55,depthWrite:!1,blending:jt,toneMapped:!1}));R.scale.set(1.4,1.9,1),R.position.set(0,5.9,0),L.add(R),m.add(L)}let E=new Ln({map:h_(),roughness:.72,metalness:.06,side:wt}),S=new ke(new mn(9.15,128),E);S.rotation.x=Math.PI/2,S.position.y=6.78,S.receiveShadow=!0,m.add(S),je(m,8.98,.06,4,96,[0,6.75,0],o.gold,[Math.PI/2,0,0]);for(let B=0;B<20;B++){let ee=B/20*Q,Ee=[];for(let L=0;L<=5;L++){let O=L/5,H=.7+O*8.25,R=6.77-Math.sin(O*Math.PI)*.1;Ee.push(new Ge(Math.cos(ee)*H,R,Math.sin(ee)*H))}let v=Wn(Ee,.018,o.gold,20,3);v.castShadow=!1,m.add(v)}let U=new ke(new mn(.7,40),new Ht({map:P,transparent:!0,toneMapped:!1,side:wt}));U.rotation.x=Math.PI/2,U.position.y=6.7,m.add(U),je(m,.7,.035,4,48,[0,6.69,0],o.gold,[Math.PI/2,0,0]);let z=[new Pe(0,9.64),new Pe(.9,9.65),new Pe(1.55,9.8),new Pe(1.82,10.05),new Pe(1.7,10.34),new Pe(1.2,10.62),new Pe(.55,10.82),new Pe(0,10.9)],G=On({color:Fn.wine,roughness:.62,clearcoat:.25,sheen:1,sheenColor:new ge(11813968),side:wt}),q=js(z,G,64);q.castShadow=!1,m.add(q),je(m,1.7,.055,5,72,[0,10.03,0],o.gold,[Math.PI/2,0,0]);for(let B=0;B<16;B++){let ee=B/16*Q,Ee=[new Ge(Math.cos(ee)*1.7,10.05,Math.sin(ee)*1.7),new Ge(Math.cos(ee)*1.72,10.32,Math.sin(ee)*1.72),new Ge(Math.cos(ee)*1.3,10.55,Math.sin(ee)*1.3),new Ge(Math.cos(ee)*.5,10.82,Math.sin(ee)*.5),new Ge(0,10.9,0)],v=Wn(Ee,.021,o.gold,20,4);v.castShadow=!1,m.add(v)}rt(m,.24,.34,.28,12,[0,10.97,0],o.gold),It(m,.24,16,12,[0,11.18,0],o.goldBright,[.85,1.2,.85]),rt(m,.02,.05,.42,8,[0,11.5,0],o.gold),It(m,.075,10,8,[0,11.75,0],o.goldBright),rt(m,0,.2,.42,8,[0,11.95,0],o.goldBright),It(m,.055,8,6,[0,12.22,0],o.goldBright),C_(m,o);for(let B=0;B<24;B++){let ee=B/24*Q;if(Math.sin(ee)>.68)continue;let Ee=Math.cos(ee)*12.85,v=Math.sin(ee)*12.85;rt(m,.028,.038,.75,6,[Ee,.375,v],o.goldAntique),It(m,.045,6,5,[Ee,.77,v],o.goldBright)}let $=[];for(let B=0;B<=88;B++){let ee=-.15+B/88*(Q+.3);Math.sin(ee)>.68||$.push(new Ge(Math.cos(ee)*12.85,.64,Math.sin(ee)*12.85))}if($.length>2){let B=[$[0]];for(let ee=1;ee<$.length;ee++){let Ee=$[ee-1],v=$[ee];Ee.distanceTo(v)>1.2?(B.length>2&&m.add(Wn(B,.018,o.gold,24,3)),B=[v]):B.push(v)}B.length>2&&m.add(Wn(B,.018,o.gold,24,3))}let V=new St;V.position.y=0,a.add(V),rt(V,9.14,9.22,.34,96,[0,.94,0],o.stone),je(V,9.18,.055,4,120,[0,1.09,0],o.gold,[Math.PI/2,0,0]);let oe=new oi({map:c_(),roughness:.36,metalness:.05,clearcoat:.7,clearcoatRoughness:.2}),W=new ke(new mn(9.13,128),oe);W.rotation.x=-Math.PI/2,W.position.y=1.115,W.receiveShadow=!0,V.add(W);for(let B=0;B<24;B++){let ee=B/24*Q,Ee=Math.cos(ee)*9.12,v=Math.sin(ee)*9.12;rt(V,.024,.04,.2,5,[Ee,1.02,v],o.gold)}let ue=S_(o,a_());ue.group.position.y=1.115,ue.group.scale.set(1.38,1.08,1.38),ue.group.rotation.y=Math.PI-.16,V.add(ue.group);let de=[],Ie=6.32,Ke=new oi({map:l_(),roughness:.3,clearcoat:.85,clearcoatRoughness:.2});for(let B=0;B<8;B++){let ee=B/8*Q-Math.PI/8,Ee=new St;Ee.position.set(Math.cos(ee)*Ie,1.12,Math.sin(ee)*Ie),Ee.rotation.y=-ee;let v=new St;Ee.add(v);let L=new St;v.add(L);let O=o_(B),H=p_(B+1),R=M_(B,o,O,H,Ke);L.add(R.group),V.add(Ee),Ee.userData.cupIndex=B,R.group.userData.cupIndex=B,de.push({holder:Ee,tilt:v,spin:L,wheel:R.wheel,group:R.group,angle:ee,index:B,localAngle:(B%2?-1:1)*.12,spinAngle:B*1.7,baseDir:B%2?-1:1,wheelAngle:0})}let ct=new Ht({color:16768416,transparent:!0,opacity:.55,side:wt,blending:jt,depthWrite:!1,toneMapped:!1}),it=new ke(new Ti(1.67,1.78,64),ct);it.rotation.x=-Math.PI/2,it.position.y=1.14,V.add(it);let qe=new ke(new Ti(1.69,1.74,64),new Ht({color:16765565,transparent:!0,opacity:.2,side:wt,blending:jt,depthWrite:!1,toneMapped:!1}));qe.rotation.x=-Math.PI/2,qe.position.y=1.142,V.add(qe);let Y=[];for(let B=0;B<64;B++){let ee=B/64*Q;Y.push(new Ge(Math.cos(ee)*10.78,7.05,Math.sin(ee)*10.78))}for(let B=0;B<40;B++){let ee=B/40*Q;Y.push(new Ge(Math.cos(ee)*8.66,6.62,Math.sin(ee)*8.66))}for(let B=0;B<72;B++){let ee=B/72*Q;Y.push(new Ge(Math.cos(ee)*10.805,5.8,Math.sin(ee)*10.805))}for(let B=0;B<24;B++){let ee=B/24*Q;Y.push(new Ge(Math.cos(ee)*10.61,1.31,Math.sin(ee)*10.61))}for(let B=0;B<10;B++){let ee=B/10*Q+Math.PI/10;for(let Ee=1;Ee<5;Ee++){let v=Ee/5,L=ee+v*(Q/10);Y.push(new Ge(Math.cos(L)*9.9,6.7-Math.sin(v*Math.PI)*.18,Math.sin(L)*9.9))}}R_(m,o,l).forEach(B=>Y.push(B));for(let B of[5.8,7.05]){let ee=[],Ee=B<6?10.81:10.785;for(let O=0;O<96;O++){let H=O/96*Q;ee.push(new Ge(Math.cos(H)*Ee,B+.08,Math.sin(H)*Ee))}let v=new pt().setFromPoints(ee),L=new Nr(v,new Os({color:7426090,transparent:!0,opacity:.55}));a.add(L)}let Te=new ri(.082,8,6),Oe=new Ur(Te,o.bulb,Y.length),Re=new Dt;Y.forEach((B,ee)=>{Re.position.copy(B),Re.scale.setScalar(ee%7===0?1.18:1),Re.updateMatrix(),Oe.setMatrixAt(ee,Re.matrix)}),Oe.instanceMatrix.needsUpdate=!0,a.add(Oe);let Qe=new Float32Array(Y.length*3);Y.forEach((B,ee)=>{Qe[ee*3]=B.x,Qe[ee*3+1]=B.y,Qe[ee*3+2]=B.z});let Nt=new pt;Nt.setAttribute("position",new Lt(Qe,3));let I=new si({map:l,color:16763270,size:1.02,transparent:!0,opacity:.78,depthWrite:!1,blending:jt,sizeAttenuation:!0,toneMapped:!1}),yt=new Si(Nt,I);a.add(yt);let He=r_(),Ue=i?55:90,be=new Float32Array(Ue*3),mt=[];for(let B=0;B<Ue;B++){let ee=Math.random()*Q,Ee=2+Math.random()*15;be[B*3]=Math.cos(ee)*Ee,be[B*3+1]=1.5+Math.random()*8,be[B*3+2]=Math.sin(ee)*Ee,mt.push({speed:.12+Math.random()*.2,drift:.25+Math.random()*.5,phase:Math.random()*Q,baseY:1.5+Math.random()*8})}let we=new pt;we.setAttribute("position",new Lt(be,3));let We=new si({map:He,color:16767439,size:.22,transparent:!0,opacity:.55,depthWrite:!1,alphaTest:.08,sizeAttenuation:!0}),Rt=new Si(we,We);Rt.frustumCulled=!1,a.add(Rt);let bt=26,A=new Float32Array(bt*3),y=[];for(let B=0;B<bt;B++)y.push({t:Math.random(),speed:.09+Math.random()*.08,sway:Math.random()*Q});let k=new pt;k.setAttribute("position",new Lt(A,3));let Z=new si({map:l,color:16775142,size:.34,transparent:!0,opacity:.22,depthWrite:!1,blending:jt,sizeAttenuation:!0,toneMapped:!1}),j=new Si(k,Z);j.frustumCulled=!1,ue.group.add(j);let X=new Ge(2.12,2.96,0);if(r){let B=A_(e);B&&a.traverse(ee=>{let Ee=ee.material;if(!Ee)return;(Array.isArray(Ee)?Ee:[Ee]).forEach(L=>{L.isMeshStandardMaterial&&(L.envMap=B,L.envMapIntensity=.68,L.needsUpdate=!0)})})}let Ce={day:{top:new ge(8958659),bottom:new ge(16245954),fog:new ge(15193269),hemiSky:new ge(12112347),hemiGround:new ge(7297346),key:new ge(16769197),fill:new ge(13098212),hemiIntensity:.47,keyIntensity:1.72,fillIntensity:.16,innerIntensity:11,frontIntensity:5,exposure:.79,bloom:.24,glowOpacity:.44,bulbColor:new ge(16770998),skyIntensity:1,starOpacity:0,celestialColor:new ge(16773842),celestialOpacity:.34,fogDensity:.0035},night:{top:new ge(398885),bottom:new ge(2571085),fog:new ge(1057838),hemiSky:new ge(6586267),hemiGround:new ge(2498852),key:new ge(11452386),fill:new ge(5601956),hemiIntensity:.36,keyIntensity:.5,fillIntensity:.18,innerIntensity:30,frontIntensity:20,exposure:1.06,bloom:.6,glowOpacity:.92,bulbColor:new ge(16768411),skyIntensity:.34,starOpacity:1,celestialColor:new ge(13623807),celestialOpacity:.72,fogDensity:.0062}},ae="day",he=Ce.day,xe=0,ie=0,pe=.045,Ne=.045,_e=0,me=-1,Le=0,N=!1,re=-1,fe=0,Se=0,se=new at,K=new Ge,Ae=new Ge,Ve=new Ge,gt=new Ge(0,1,0);function st(B){return Le=(B%8+8)%8,it.position.x=de[Le].holder.position.x,it.position.z=de[Le].holder.position.z,qe.position.x=it.position.x,qe.position.z=it.position.z,_e=0,Le}st(0);function Sn(B){N=B,Ne=B?.33:.045,B&&(me=0,_e=0)}function sn(B){return ae=B,he=Ce[B]||Ce.day,ae}function ro(B,ee=1){me=B,_e+=B*ee*1.15,_e=dt.clamp(_e,-4.4,4.4)}function Xn(B){_e+=B,_e=dt.clamp(_e,-4.4,4.4)}function sr(B,ee,Ee=1,v=1){if(B=Math.min(B,.05),fe+=B,xe+=B,r){let R=dt.clamp(v,0,1),J=1-Math.exp(-B*1.8);u.inner.intensity=dt.lerp(u.inner.intensity,18+64*R,J),u.front.intensity=dt.lerp(u.front.intensity,6+15*R,J),I.opacity=dt.lerp(I.opacity,.45+.33*R,J)}else{let R=1-Math.exp(-B*1.25);Se+=((ae==="night"?1:0)-Se)*R,c.uniforms.topColor.value.lerp(he.top,R),c.uniforms.bottomColor.value.lerp(he.bottom,R),c.uniforms.intensity.value=dt.lerp(c.uniforms.intensity.value,he.skyIntensity,R),n.fog.color.lerp(he.fog,R),n.fog.density=dt.lerp(n.fog.density,he.fogDensity,R),u.hemi.color.lerp(he.hemiSky,R),u.hemi.groundColor.lerp(he.hemiGround,R),u.hemi.intensity=dt.lerp(u.hemi.intensity,he.hemiIntensity,R),u.key.color.lerp(he.key,R),u.key.intensity=dt.lerp(u.key.intensity,he.keyIntensity,R),u.fill.color.lerp(he.fill,R),u.fill.intensity=dt.lerp(u.fill.intensity,he.fillIntensity,R),u.inner.intensity=dt.lerp(u.inner.intensity,he.innerIntensity,R),u.front.intensity=dt.lerp(u.front.intensity,he.frontIntensity,R),e.toneMappingExposure=dt.lerp(e.toneMappingExposure,he.exposure,R),t&&(t.strength=dt.lerp(t.strength,he.bloom,R)),I.opacity=dt.lerp(I.opacity,he.glowOpacity,R),o.bulb.color.lerp(he.bulbColor,R),h.material.opacity=dt.lerp(h.material.opacity,he.starOpacity,R),d.sprite.material.color.lerp(he.celestialColor,R),d.core.material.color.lerp(he.celestialColor,R),d.sprite.material.opacity=dt.lerp(d.sprite.material.opacity,he.celestialOpacity,R),d.core.material.opacity=dt.lerp(d.core.material.opacity,Math.min(1,he.celestialOpacity+.3),R)}let L=r?.075*Ee:Ne+(N?0:.004*Math.sin(xe*.35));if(pe=dt.damp(pe,L,1.8,B),ie+=pe*B,V.rotation.y=ie,N?(me!==0&&(_e+=me*4.6*B),_e*=Math.exp(-.65*B)):_e*=Math.exp(-2.2*B),_e=dt.clamp(_e,-4.4,4.4),de.forEach((R,J)=>{let ce=J===Le,Me=(.12+Math.sin(xe*.23+J*1.3)*.04+Math.abs(pe)*.12)*(r?Ee*.9:1),ye=N&&ce?_e:R.baseDir*Me;R.localSpeed=ye,R.spinAngle+=ye*B,R.spin.rotation.y=R.spinAngle,R.wheelAngle+=ye*B*1.35,R.wheel.rotation.y=R.wheelAngle;let Fe=Math.min(.16,Math.abs(ye)*.028+Math.abs(pe)*.06);R.tilt.rotation.z=dt.damp(R.tilt.rotation.z,-Fe*Math.sign(ye||1),4.5,B),R.tilt.rotation.x=Math.sin(xe*1.7+J*1.2)*.006,R.spin.position.y=Math.sin(xe*1.9+J*.8)*.006}),r)ct.opacity=0,qe.material.opacity=0;else{let R=de[Le];it.position.x=R.holder.position.x,it.position.z=R.holder.position.z,qe.position.x=R.holder.position.x,qe.position.z=R.holder.position.z;let J=.62+Math.sin(xe*2.2)*.16;ct.opacity=N?0:J,qe.material.opacity=N?0:.16+Math.sin(xe*2.2)*.08,qe.rotation.z-=B*.25}de.forEach((R,J)=>{J===re&&J!==Le?R.tilt.position.y=Math.sin(xe*3)*.01+.02:R.tilt.position.y=0});let O=j.geometry.attributes.position;y.forEach((R,J)=>{R.t+=B*R.speed,R.t>1&&(R.t-=1);let ce=R.t,Me=ce*2.7;O.array[J*3]=X.x+Math.cos(R.sway+ce*8)*.06+ce*.42,O.array[J*3+1]=X.y+Me,O.array[J*3+2]=X.z+Math.sin(R.sway+ce*7)*.08+ce*.1}),O.needsUpdate=!0,Z.opacity=.16+Math.sin(xe*.8)*.03;let H=Rt.geometry.attributes.position;for(let R=0;R<Ue;R++){let J=mt[R],ce=H.array[R*3+1]-J.speed*B;if(ce<.35){ce=9+Math.random()*3;let Me=Math.random()*Q,ye=2+Math.random()*15;H.array[R*3]=Math.cos(Me)*ye,H.array[R*3+2]=Math.sin(Me)*ye}H.array[R*3+1]=ce,H.array[R*3]+=Math.sin(xe*.7+J.phase)*J.drift*B,H.array[R*3+2]+=Math.cos(xe*.5+J.phase)*J.drift*B}H.needsUpdate=!0,r||(h.rotation.y+=B*.003,d.sprite.position.y=40+Math.sin(xe*.08)*.25,d.core.position.copy(d.sprite.position)),u.inner.intensity*=1+Math.sin(xe*7.3)*.008+Math.sin(xe*17.4)*.004}function oo(B,ee=new Ge){return(de[B]||de[Le]).holder.getWorldPosition(ee),ee}function ao(B,ee=new Cn){return(de[B]||de[Le]).holder.getWorldQuaternion(ee),ee}function hs(B,ee=new Ge){return(de[B]||de[Le]).holder.getWorldPosition(ee),ee.y+=2.18,ee}function lo(){return{index:Le,name:rd[Le],shortName:od[Le]}}function us(){return Math.abs(_e)*60/Q}function co(){return Math.abs(pe)*60/Q}function ho(B){return st(B)}function Ul(B){re=B}function Nl(){return de.map(B=>B.group)}function Fl(B){sn(B?"night":"day")}return{root:a,cups:de,lights:u,sky:c,stars:h,environment:f,teapot:ue,rotating:V,platformAngle:ie,get platformSpeed(){return pe},get cupSpeed(){return _e},get nightFactor(){return Se},update:sr,selectCup:st,setSelected:ho,getSelection:lo,setRiding:Sn,spin:ro,spinBy:Xn,setHover:Ul,setMood:sn,setNight:Fl,getCupWorldPosition:oo,getCupWorldQuaternion:ao,getCupViewPoint:hs,getCupObjects:Nl,getSpeedRPM:us,getPlatformRPM:co,get riding(){return N},get selectedIndex(){return Le},CUP_NAMES:rd,CUP_SHORT:od}}var Yt=n=>440*Math.pow(2,(n-69)/12),Cl=class{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.fxBus=null,this.reverb=null,this.spinGain=null,this.spinFilter=null,this.started=!1,this.muted=localStorage.getItem("teacup-muted")==="1",this.bar=0,this.nextBarTime=0,this.timer=null}async init(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:.72,this.master.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=.38,this.fxBus=t.createGain(),this.fxBus.gain.value=.48,this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(2.4,2.2);let i=t.createGain();i.gain.value=.26,this.reverb.connect(i).connect(this.master),this.musicBus.connect(this.master),this.musicBus.connect(this.reverb),this.fxBus.connect(this.master),this.fxBus.connect(this.reverb),this.makeSpinBus(),this.started=!0,this.nextBarTime=t.currentTime+.35,this.timer=window.setInterval(()=>this.scheduler(),120),this.scheduler()}makeImpulse(e,t){let i=this.ctx,s=Math.floor(i.sampleRate*e),r=i.createBuffer(2,s,i.sampleRate);for(let o=0;o<2;o++){let a=r.getChannelData(o);for(let l=0;l<s;l++){let c=l/s;a[l]=(Math.random()*2-1)*Math.pow(1-c,t)*(l<40?l/40:1)}}return r}makeSpinBus(){let e=this.ctx,t=e.sampleRate*2,i=e.createBuffer(1,t,e.sampleRate),s=i.getChannelData(0),r=0;for(let c=0;c<t;c++){let h=Math.random()*2-1;r=r*.92+h*.08,s[c]=r*2.4}let o=e.createBufferSource();o.buffer=i,o.loop=!0,this.spinFilter=e.createBiquadFilter(),this.spinFilter.type="bandpass",this.spinFilter.frequency.value=220,this.spinFilter.Q.value=.8,this.spinGain=e.createGain(),this.spinGain.gain.value=0,o.connect(this.spinFilter).connect(this.spinGain).connect(this.fxBus),o.start();let a=e.createOscillator();a.type="sine",a.frequency.value=58;let l=e.createGain();l.gain.value=.018,a.connect(l).connect(this.fxBus),a.start()}setSpin(e){if(!this.ctx||!this.spinGain)return;let t=this.ctx.currentTime,i=Math.min(.17,Math.abs(e)/340);this.spinGain.gain.setTargetAtTime(i,t,.18),this.spinFilter.frequency.setTargetAtTime(180+Math.min(e,50)*12,t,.25)}setRide(e){if(!this.ctx)return;let t=this.ctx.currentTime;if(e){this.ridePad=this.ctx.createOscillator(),this.ridePad.type="sine",this.ridePad.frequency.value=Yt(36);let i=this.ctx.createGain();i.gain.setValueAtTime(0,t),i.gain.linearRampToValueAtTime(.028,t+1.4),this.ridePad.connect(i).connect(this.musicBus),this.ridePad.start(),this.ridePadGain=i}else if(this.ridePad){this.ridePadGain.gain.setTargetAtTime(0,t,.4);let i=this.ridePad;window.setTimeout(()=>{try{i.stop()}catch{}},1600),this.ridePad=null,this.setSpin(0)}}scheduler(){if(!this.ctx||this.ctx.state!=="running")return;let e=this.ctx.currentTime;for(;this.nextBarTime<e+.55;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=60/72*3,this.bar=(this.bar+1)%8}scheduleBar(e,t){let s=[{bass:36,chord:[60,64,67],color:72},{bass:45,chord:[57,60,64],color:69},{bass:41,chord:[53,57,60],color:65},{bass:43,chord:[55,59,62],color:67},{bass:36,chord:[60,64,67],color:72},{bass:38,chord:[50,57,62],color:69},{bass:41,chord:[53,57,60],color:65},{bass:43,chord:[55,59,62],color:67}][t],r=60/72;this.pluck(Yt(s.bass),e,r*1.8,.14,"bass"),[1,2].forEach((a,l)=>{s.chord.forEach((c,h)=>{this.pluck(Yt(c+(l===1?12:0)),e+r*a+h*.004,r*.55,.028,"string")})}),[[s.color,0],[s.color+4,.75],[s.color+7,1.5],[s.color+2,2],[s.color+5,2.5]].forEach(([a,l],c)=>{this.pluck(Yt(a+(t>3&&c%2?12:0)),e+l*r,1.25,.055,"box")}),(t===0||t===4)&&this.pluck(Yt(s.color+12),e+r*2.75,2.6,.028,"box")}pluck(e,t,i,s,r="box"){let o=this.ctx;if(!o)return;let a=o.createOscillator(),l=o.createGain(),c=o.createOscillator(),h=o.createGain(),d=o.createStereoPanner();d.pan.value=(Math.random()-.5)*.35,r==="bass"?(a.type="sine",c.type="triangle",h.gain.value=.15,l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(s,t+.035),l.gain.exponentialRampToValueAtTime(1e-4,t+i),c.frequency.value=e*2):r==="string"?(a.type="triangle",c.type="sine",h.gain.value=.2,l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(s,t+.02),l.gain.exponentialRampToValueAtTime(1e-4,t+i),c.frequency.value=e*2.01):(a.type="sine",c.type="sine",h.gain.value=.28,c.frequency.value=e*3.005,l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(s,t+.006),l.gain.exponentialRampToValueAtTime(1e-4,t+i)),a.frequency.value=e,a.connect(l),c.connect(h).connect(l),l.connect(d).connect(this.musicBus),a.start(t),c.start(t),a.stop(t+i+.05),c.stop(t+i+.05)}chime(e="select"){if(!this.ctx)return;let t=this.ctx.currentTime+.01;e==="select"?[Yt(76),Yt(81)].forEach((i,s)=>this.pluck(i,t+s*.055,.8,.05)):e==="ride"?[Yt(72),Yt(76),Yt(79),Yt(84),Yt(88)].forEach((i,s)=>{this.pluck(i,t+s*.07,1.6,.045)}):e==="exit"?[Yt(79),Yt(74),Yt(69)].forEach((i,s)=>this.pluck(i,t+s*.085,1.1,.04)):[Yt(84)].forEach(i=>this.pluck(i,t,.5,.03))}async toggleMute(){return this.muted=!this.muted,localStorage.setItem("teacup-muted",this.muted?"1":"0"),this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(this.muted?0:.72,this.ctx.currentTime,.12)),this.muted||await this.init(),this.muted}setMuted(e){e!==this.muted&&this.toggleMute()}};var et=n=>document.getElementById(n),di=dt.clamp,os=dt.damp,xn=window.matchMedia("(pointer: coarse)").matches&&window.innerWidth<1e3,At=new URLSearchParams(location.search);At.has("embedded")&&document.body.classList.add("is-embedded");(At.has("still")||At.has("instant")||At.has("freeze"))&&document.documentElement.classList.add("no-motion");At.has("nohud")&&document.documentElement.classList.add("nohud");var ne={canvas:et("world"),rideFade:et("rideFade"),loading:et("loading"),loadBar:et("loadBar"),loadText:et("loadText"),topbar:et("topbar"),intro:et("intro"),enterBtn:et("enterBtn"),lookBtn:et("lookBtn"),explore:et("explore"),cupPin:et("cupPin"),cupPinNo:et("cupPinNo"),prevCup:et("prevCup"),nextCup:et("nextCup"),cupNo:et("cupNo"),cupName:et("cupName"),cupDots:et("cupDots"),rideBtn:et("rideBtn"),rideHud:et("rideHud"),rideCupLabel:et("rideCupLabel"),exitRide:et("exitRide"),spinLeft:et("spinLeft"),spinRight:et("spinRight"),speedValue:et("speedValue"),speedDial:et("speedDial"),dialNeedle:et("dialNeedle"),platformSpeed:et("platformSpeed"),soundBtn:et("soundBtn"),moodBtn:et("moodBtn"),resetBtn:et("resetBtn"),helpBtn:et("helpBtn"),fullBtn:et("fullBtn"),help:et("help"),closeHelp:et("closeHelp"),helpGo:et("helpGo"),toast:et("toast"),fallback:et("fallback")},Zt;try{Zt=new Sl({canvas:ne.canvas,antialias:!xn,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1})}catch(n){throw console.error(n),ne.loading.classList.add("is-done"),ne.fallback.classList.remove("is-hidden"),n}var P_=xn?185e4:34e5,fd=Math.max(1,Math.min(window.devicePixelRatio||1,xn?1.4:1.7,Math.sqrt(P_/(window.innerWidth*window.innerHeight))));Zt.setPixelRatio(fd);Zt.setSize(window.innerWidth,window.innerHeight);Zt.outputColorSpace=Ft;Zt.toneMapping=Vs;Zt.toneMappingExposure=1;Zt.shadowMap.enabled=!0;Zt.shadowMap.type=Sa;var nr=new Ir,vt=new kt(xn?62:54,window.innerWidth/window.innerHeight,.1,260);vt.rotation.order="YXZ";function I_(){let n=document.createElement("canvas");n.width=1024,n.height=512;let e=n.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#608f9f"),t.addColorStop(.42,"#f0dcba"),t.addColorStop(.52,"#c6aa7f"),t.addColorStop(1,"#4c3c2d"),e.fillStyle=t,e.fillRect(0,0,1024,512);let i=e.createRadialGradient(682,196,0,682,196,150);i.addColorStop(0,"rgba(255,247,217,1)"),i.addColorStop(.08,"rgba(255,224,162,.96)"),i.addColorStop(.4,"rgba(255,191,105,.25)"),i.addColorStop(1,"rgba(255,180,90,0)"),e.fillStyle=i,e.fillRect(500,20,380,380),[130,340,820].forEach((a,l)=>{let c=e.createLinearGradient(a,200,a,470);c.addColorStop(0,"rgba(255,248,224,.0)"),c.addColorStop(.3,`rgba(255,239,198,${.65+l*.08})`),c.addColorStop(.9,"rgba(255,218,158,.12)"),c.addColorStop(1,"rgba(255,218,158,0)"),e.fillStyle=c,e.fillRect(a,200,42+l*14,240)}),e.fillStyle="rgba(50,42,32,.3)",e.fillRect(0,500,1024,12);let s=new bi(n);s.mapping=Pi,s.colorSpace=Ft;let r=new Di(Zt);r.compileEquirectangularShader();let o=r.fromEquirectangular(s);return s.dispose(),r.dispose(),o.texture}nr.environment=I_();nr.environmentIntensity=.42;var Mn=new Tl(Zt);Mn.setPixelRatio(fd);Mn.setSize(window.innerWidth,window.innerHeight);Mn.addPass(new wl(nr,vt));var dh=new Qs(new le(window.innerWidth,window.innerHeight),.22,.48,.82);Mn.addPass(dh);Mn.addPass(new Al);var L_={uniforms:{tDiffuse:{value:null},uSaturation:{value:1.22},uContrast:{value:1.075},uWarmth:{value:.018},uVignette:{value:.3}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float uSaturation;
    uniform float uContrast;
    uniform float uWarmth;
    uniform float uVignette;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      float lum = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 col = mix(vec3(lum), tex.rgb, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;
      col += vec3(uWarmth, uWarmth * 0.35, -uWarmth * 0.5);
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.38, 0.78, d);
      col *= mix(1.0, 1.0 - uVignette, vig);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), tex.a);
    }
  `},D_=new Ks(L_);Mn.addPass(D_);var Je=cd({scene:nr,renderer:Zt,bloom:dh,isMobile:xn}),$t=new Cl,F={mode:"intro",introOpen:!0,helpOpen:!1,mood:At.get("mood")==="night"?"night":"day",soundOn:!$t.muted,transitioning:!1,idleTime:0,time:0,hudClock:0,spinInput:0,dragSpin:0,selected:di(parseInt(At.get("cup")||"3",10)-1||0,0,7),pointer:{down:!1,id:null,x:0,y:0,startX:0,startY:0,moved:0,mode:null,lastX:0},pinch:null,orbit:{azimuth:.63,polar:1.43,radius:xn?29.8:25.8,targetAzimuth:.63,targetPolar:1.43,targetRadius:xn?29.8:25.8,focus:new C(0,4.05,0)},cameraTarget:new C(0,4.1,0),rideTarget:new C(0,3,0),cameraPos:new C,cameraLook:new C(0,4.05,0),rideRoll:0,fov:xn?62:54,selectedForRide:0};F.selected=di(F.selected,0,7);var Ni=new C,no=new C,Pl=new C,rs=new C,hd=new Xr,hh=new le;function pd(n,e){let t=Math.sin(e.polar);return n.set(e.focus.x+e.radius*t*Math.sin(e.azimuth),e.focus.y+e.radius*Math.cos(e.polar),e.focus.z+e.radius*t*Math.cos(e.azimuth)),n}pd(F.cameraPos,F.orbit);F.cameraLook.copy(F.orbit.focus);vt.position.copy(F.cameraPos);vt.lookAt(F.cameraLook);var ud=0;function cs(n,e=2400){At.has("freeze")||At.has("still")||(ne.toast.textContent=n,ne.toast.classList.add("is-on"),clearTimeout(ud),ud=window.setTimeout(()=>ne.toast.classList.remove("is-on"),e))}function md(){ne.soundBtn.classList.toggle("is-muted",!F.soundOn),ne.soundBtn.setAttribute("aria-label",F.soundOn?"\u5173\u95ED\u58F0\u97F3":"\u6253\u5F00\u58F0\u97F3")}function Il(){let n=F.mood==="night";ne.moodBtn.classList.toggle("is-night",n),ne.moodBtn.setAttribute("aria-label",n?"\u5207\u6362\u5230\u6674\u65E5":"\u5207\u6362\u5230\u591C\u5E55"),ne.moodBtn.dataset.tip=n?"\u6674\u65E5":"\u591C\u5E55",document.body.classList.toggle("is-night",n)}function uh(){let n=F.selected,e=String(n+1).padStart(2,"0"),t=Je.CUP_NAMES[n],i=Je.CUP_SHORT[n];ne.cupNo.textContent=e,ne.cupName.textContent=t,ne.cupPinNo.textContent=e,ne.rideCupLabel.textContent=`${e} \u53F7\u676F \xB7 ${i}`,ne.rideBtn.querySelector(".ride-button-text small").textContent=`STEP INTO CUP ${e}`,ne.rideBtn.querySelector(".ride-button-text strong").textContent="\u767B\u4E0A\u8FD9\u53EA\u8336\u676F",[...ne.cupDots.children].forEach((s,r)=>{s.classList.toggle("is-active",r===n),s.setAttribute("aria-pressed",r===n?"true":"false")})}function U_(){ne.cupDots.innerHTML="";for(let n=0;n<8;n++){let e=document.createElement("button");e.className="cup-dot",e.type="button",e.textContent=String(n+1).padStart(2,"0"),e.setAttribute("aria-label",`\u9009\u62E9\u7B2C ${n+1} \u53F7\u8336\u676F\uFF1A${Je.CUP_NAMES[n]}`),e.addEventListener("click",()=>{F.mode!=="ride"&&(ls(n),$t.chime("select"))}),ne.cupDots.appendChild(e)}}function ls(n,e=!1){F.selected=Je.setSelected(n),uh(),e&&cs(`\u5DF2\u9009 ${String(F.selected+1).padStart(2,"0")} \u53F7\u8336\u5E2D \xB7 ${Je.CUP_SHORT[F.selected]}`),$t.chime("select")}function Ll(){F.introOpen&&(F.introOpen=!1,ne.intro.classList.add("is-leaving"),ne.topbar.classList.remove("is-hidden"),window.setTimeout(()=>{F.mode!=="ride"&&(ne.explore.classList.remove("is-hidden"),F.mode="explore")},530))}function N_(){F.introOpen=!1,F.mode="explore",ne.intro.classList.add("is-leaving"),ne.explore.classList.remove("is-hidden"),ne.topbar.classList.remove("is-hidden")}async function ir(){try{await $t.init(),$t.muted,F.soundOn}catch(n){console.warn("Audio unavailable",n)}}async function Fi(){if(!F.transitioning){if(F.transitioning=!0,F.selectedForRide=F.selected,Ll(),ne.rideFade.classList.add("is-on"),ir(),await new Promise(n=>window.setTimeout(n,300)),$t.chime("ride"),$t.setRide(!0),ne.explore.classList.add("is-hidden"),ne.rideHud.classList.remove("is-hidden"),ne.canvas.classList.add("is-riding"),ne.canvas.style.cursor="ew-resize",F.mode="ride",Je.setSelected(F.selectedForRide),Je.setRiding(!0),At.has("spin")){let n=At.get("spin")==="-1"?-1:1;F.spinInput=n,Je.spin(n,1)}F.rideRoll=0,F.spinInput=0,window.setTimeout(()=>{ne.rideFade.classList.remove("is-on"),F.transitioning=!1},250),window.setTimeout(()=>cs("\u5411\u5DE6\u6216\u5411\u53F3\u62D6\u52A8\u753B\u9762\uFF0C\u8F6C\u52A8\u676F\u4E2D\u7684\u94DC\u8F6E"),900)}}function Dl(){F.mode!=="ride"||F.transitioning||(F.transitioning=!0,ne.rideFade.classList.add("is-on"),ne.rideHud.classList.add("is-hidden"),ne.canvas.classList.remove("is-riding"),ne.canvas.style.cursor="grab",F.spinInput=0,ne.spinLeft.classList.remove("is-held"),ne.spinRight.classList.remove("is-held"),Je.setRiding(!1),Je.selectCup(F.selectedForRide),$t.setRide(!1),$t.chime("exit"),window.setTimeout(()=>{F.mode="explore",ne.explore.classList.remove("is-hidden"),window.setTimeout(()=>{ne.rideFade.classList.remove("is-on"),F.transitioning=!1},260),cs("\u8336\u8FD8\u6E29\u7740\uFF0C\u968F\u65F6\u518D\u5750\u4E00\u5708")},260))}function tr(n=!F.helpOpen){F.helpOpen=n,ne.help.classList.toggle("is-hidden",!n),ne.help.setAttribute("aria-hidden",n?"false":"true"),n&&(F.idleTime=0,$t.chime("tick"))}function F_(n,e){let t=ne.canvas.getBoundingClientRect();hh.x=(n-t.left)/t.width*2-1,hh.y=-((e-t.top)/t.height)*2+1}function gd(n,e){F_(n,e),hd.setFromCamera(hh,vt);let t=Je.getCupObjects(),i=hd.intersectObjects(t,!0);for(let s of i){let r=s.object;for(;r;){if(r.userData&&Number.isInteger(r.userData.cupIndex))return r.userData.cupIndex;r=r.parent}}return-1}function B_(n){if(!(n.button!==void 0&&n.button!==0)){if(ir(),F.mode==="ride"){F.pointer.down=!0,F.pointer.id=n.pointerId,F.pointer.x=n.clientX,F.pointer.y=n.clientY,F.pointer.lastX=n.clientX,F.pointer.moved=0,F.pointer.mode="spin",ne.canvas.setPointerCapture?.(n.pointerId);return}F.pointer.down=!0,F.pointer.id=n.pointerId,F.pointer.x=n.clientX,F.pointer.y=n.clientY,F.pointer.startX=n.clientX,F.pointer.startY=n.clientY,F.pointer.lastX=n.clientX,F.pointer.moved=0,F.pointer.mode="orbit",ne.canvas.setPointerCapture?.(n.pointerId),ne.canvas.classList.add("is-dragging"),F.idleTime=0}}function O_(n){if(F.mode==="ride"&&F.pointer.down&&F.pointer.mode==="spin"){let e=n.clientX-F.pointer.lastX;Math.abs(e)>.4&&(Je.spinBy(e*.011),F.pointer.lastX=n.clientX,$t.setSpin(Je.getSpeedRPM()));return}if(F.pointer.down&&F.pointer.mode==="orbit"){let e=n.clientX-F.pointer.x,t=n.clientY-F.pointer.y;F.pointer.moved+=Math.abs(e)+Math.abs(t),F.orbit.targetAzimuth-=e*.0045,F.orbit.targetPolar=di(F.orbit.targetPolar-t*.0036,.58,1.47),F.pointer.x=n.clientX,F.pointer.y=n.clientY,F.idleTime=0;return}if(!xn&&F.mode!=="ride"){let e=gd(n.clientX,n.clientY);Je.setHover(e),ne.canvas.style.cursor=e>=0?"pointer":"grab"}}function z_(n){if(!F.pointer.down)return;let e=F.pointer.mode,t=F.pointer.moved;F.pointer.down=!1,F.pointer.id=null,F.pointer.mode=null,ne.canvas.classList.remove("is-dragging");try{n&&n.pointerId!==void 0&&ne.canvas.releasePointerCapture?.(n.pointerId)}catch{}if(e==="spin"){F.spinInput=0;return}if(e==="orbit"&&t<7){let i=gd(n.clientX,n.clientY);i>=0&&(ls(i,!0),F.idleTime=0)}}function k_(){F.pointer.down=!1,F.pointer.mode=null,ne.canvas.classList.remove("is-dragging"),F.spinInput=0}function H_(n){F.mode==="ride"||F.mode==="intro"||(n.preventDefault(),F.orbit.targetRadius=di(F.orbit.targetRadius*Math.exp(n.deltaY*.00105),12.8,38),F.idleTime=0)}ne.canvas.addEventListener("pointerdown",B_);ne.canvas.addEventListener("pointermove",O_);ne.canvas.addEventListener("pointerup",z_);ne.canvas.addEventListener("pointercancel",k_);ne.canvas.addEventListener("wheel",H_,{passive:!1});ne.canvas.addEventListener("contextmenu",n=>n.preventDefault());function er(n){F.mode==="ride"&&(F.spinInput=n,n!==0&&(Je.spin(n,.7),$t.setSpin(Je.getSpeedRPM())),ne.spinLeft.classList.toggle("is-held",n<0),ne.spinRight.classList.toggle("is-held",n>0))}function _d(n,e){n.addEventListener("pointerdown",i=>{i.preventDefault(),ir(),n.setPointerCapture?.(i.pointerId),er(e)});let t=i=>{i.preventDefault(),er(0)};n.addEventListener("pointerup",t),n.addEventListener("pointercancel",t),n.addEventListener("pointerleave",i=>{i.buttons===0&&er(0)})}_d(ne.spinLeft,-1);_d(ne.spinRight,1);var as=new Set;function vd(){if(F.mode!=="ride")return;let n=as.has("ArrowLeft")||as.has("KeyA"),e=as.has("ArrowRight")||as.has("KeyD");er(n&&!e?-1:e&&!n?1:0)}window.addEventListener("keydown",n=>{if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Space"].includes(n.code)&&n.preventDefault(),!(n.repeat&&!["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code))){if(n.code==="Escape"){F.helpOpen?tr(!1):F.mode==="ride"?Dl():F.introOpen&&Ll();return}if(!F.helpOpen){if(n.code==="Enter"||n.code==="Space"){if(F.introOpen){Fi();return}if(F.mode==="explore"){Fi();return}}if(n.code==="KeyE"){F.introOpen&&Ll(),F.mode==="explore"&&Fi();return}if(n.code==="KeyR"){F.mode==="ride"?Dl():Fi();return}if(n.code==="KeyM"){yd();return}if(n.code==="KeyF"){xd();return}if(n.code==="KeyH"){tr();return}if(n.code==="KeyQ"||n.code==="BracketLeft"){F.mode!=="ride"&&ls(F.selected-1,!0);return}if(n.code==="KeyZ"||n.code==="BracketRight"){F.mode!=="ride"&&ls(F.selected+1,!0);return}["ArrowLeft","ArrowRight","KeyA","KeyD"].includes(n.code)&&(as.add(n.code),F.mode==="ride"&&vd())}}});window.addEventListener("keyup",n=>{as.delete(n.code),F.mode==="ride"&&vd()});window.addEventListener("blur",()=>{as.clear(),F.spinInput=0,ne.spinLeft.classList.remove("is-held"),ne.spinRight.classList.remove("is-held")});ne.enterBtn.addEventListener("click",()=>Fi());ne.lookBtn.addEventListener("click",()=>{ir(),Ll(),$t.chime("tick")});ne.rideBtn.addEventListener("click",()=>Fi());ne.exitRide.addEventListener("click",()=>Dl());ne.prevCup.addEventListener("click",()=>ls(F.selected-1,!0));ne.nextCup.addEventListener("click",()=>{F.mode!=="ride"&&ls(F.selected+1,!0)});ne.resetBtn.addEventListener("click",()=>{F.mode!=="ride"&&(F.orbit.targetAzimuth=.63,F.orbit.targetPolar=1.43,F.orbit.targetRadius=xn?29.8:25.8,F.idleTime=0,cs("\u56DE\u5230\u8336\u5E2D\u524D\u7684\u6700\u4F73\u4F4D\u7F6E"))});ne.helpBtn.addEventListener("click",()=>tr(!0));ne.closeHelp.addEventListener("click",()=>tr(!1));ne.helpGo.addEventListener("click",()=>tr(!1));ne.help.addEventListener("click",n=>{n.target===ne.help&&tr(!1)});async function yd(){await ir();let n=await $t.toggleMute();F.soundOn=!n,md(),cs(n?"\u5DF2\u9759\u97F3 \xB7 \u8336\u4F1A\u53EA\u5269\u65CB\u8F6C\u7684\u8F7B\u54CD":"\u58F0\u97F3\u5DF2\u5F00\u542F \xB7 \u516B\u97F3\u76D2\u6B63\u5728\u6E29\u58F6")}ne.soundBtn.addEventListener("click",yd);ne.moodBtn.addEventListener("click",()=>{ir(),F.mood=F.mood==="day"?"night":"day",Je.setMood(F.mood),Il(),$t.chime("tick"),cs(F.mood==="night"?"\u5165\u591C\u4E86 \xB7 \u6A90\u4E0B\u706F\u76CF\u4E00\u76CF\u76CF\u4EAE\u8D77":"\u5929\u5149\u56DE\u6765\u4E86 \xB7 \u74F7\u9762\u4E0A\u7684\u63CF\u91D1\u9192\u4E86\u8FC7\u6765")});function xd(){document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{cs("\u6D4F\u89C8\u5668\u6CA1\u6709\u5141\u8BB8\u5168\u5C4F")})}ne.fullBtn.addEventListener("click",xd);document.addEventListener("fullscreenchange",()=>{ne.fullBtn.style.opacity=document.fullscreenElement?"0.5":""});function V_(){let n=window.innerWidth,e=window.innerHeight;vt.aspect=n/e,vt.fov=n<800?66:54,vt.updateProjectionMatrix(),Zt.setSize(n,e),Mn.setSize(n,e),n<800&&(F.orbit.targetRadius=Math.max(F.orbit.targetRadius,29),F.orbit.targetPolar=Math.max(F.orbit.targetPolar,1.31))}window.addEventListener("resize",V_);function G_(n){F.orbit.azimuth=os(F.orbit.azimuth,F.orbit.targetAzimuth,9,n),F.orbit.polar=os(F.orbit.polar,F.orbit.targetPolar,9,n),F.orbit.radius=os(F.orbit.radius,F.orbit.targetRadius,7,n)}function W_(n,e){let t=F.selectedForRide;Je.getCupViewPoint(t,n),Pl.set(n.x,0,n.z),Pl.lengthSq()>.001&&(Pl.normalize().multiplyScalar(.3),n.add(Pl));let i=Math.sin(F.time*2.2)*.018+Math.sin(F.time*1.1)*.012;n.y+=i,e.set(0,2.1,0);let s=Je.cups[t],r=s?Math.sin(s.spinAngle*.55)*.15:0;e.x+=r;let o=di(Je.cupSpeed*.035,-.2,.2);if(Math.abs(o)>1e-4){let a=e.x,l=e.z;e.x=a*Math.cos(o)-l*Math.sin(o),e.z=a*Math.sin(o)+l*Math.cos(o)}return n}function Md(n){if(Ni.set(0,0,0),no.set(0,0,0),F.mode==="ride"){W_(Ni,no),vt.position.copy(Ni),F.cameraLook.copy(no),F.fov=os(F.fov,(xn?72:66)+di(Math.abs(Je.cupSpeed)*1.3,0,6),4,n);let e=Je.cups[F.selectedForRide],t=di(-(e?Je.cupSpeed:0)*.019,-.1,.1);F.rideRoll=os(F.rideRoll,t,4,n)}else G_(n),pd(Ni,F.orbit),no.copy(F.orbit.focus),vt.position.copy(Ni),F.cameraLook.copy(no),F.fov=os(F.fov,xn?62:54,3.5,n),F.rideRoll=os(F.rideRoll,0,3,n);vt.up.set(0,1,0),vt.lookAt(F.cameraLook),Math.abs(F.rideRoll)>2e-4&&vt.rotateZ(F.rideRoll),Math.abs(vt.fov-F.fov)>.001&&(vt.fov=F.fov,vt.updateProjectionMatrix())}function Sd(){if(F.mode!=="explore"||!ne.cupPin){ne.cupPin?.classList.add("is-hidden");return}Je.getCupWorldPosition(F.selected,rs),rs.y+=2.45,vt.updateMatrixWorld(),rs.project(vt);let n=(rs.x*.5+.5)*window.innerWidth,e=(-rs.y*.5+.5)*window.innerHeight,t=rs.z>1||rs.z<-1||n<32||n>window.innerWidth-32||e<120||e>window.innerHeight-110;ne.cupPin.classList.toggle("is-hidden",t),t||(ne.cupPin.style.left=`${n}px`,ne.cupPin.style.top=`${e}px`)}function X_(n){if(F.mode!=="ride"){F.idleTime+=n,F.idleTime>10&&F.mode==="explore"&&(F.orbit.targetAzimuth+=n*.012);return}F.idleTime=0;let e=Je.getSpeedRPM(),t=Je.getPlatformRPM();if(F.hudClock+=n,F.hudClock>.055){F.hudClock=0,ne.speedValue.textContent=e.toFixed(1);let i=di(e/42,0,1);ne.dialNeedle.style.transform=`translateX(-50%) rotate(${-118+i*236}deg)`,ne.platformSpeed.textContent=`\u8336\u76D8\u901F ${t.toFixed(1)}`,$t.setSpin(e)}}var io=null,so=0,ch=0,q_=At.has("still"),Y_=At.has("freeze"),Z_=parseFloat(At.get("freezeAt")||"1.7")||1.7,$_=Math.max(4,parseInt(At.get("frames")||"8",10)||8),dd=At.has("debug")?(()=>{let n=document.createElement("div");return n.style.cssText="position:fixed;left:12px;top:110px;z-index:999;background:#000c;color:#9fe;padding:10px 12px;font:11px/1.5 monospace;white-space:pre;pointer-events:none;",document.body.appendChild(n),n})():null;function bd(n){so=requestAnimationFrame(bd),io===null&&(io=n);let e=Math.max(0,Math.min((n-io)/1e3,.05));if(io=n,F.time+=e,ch++,F.mode==="intro"&&F.introOpen,F.mode==="intro"&&(F.orbit.targetAzimuth+=e*.006),Y_&&F.time>Z_){Mn.render();return}Je.update(e,F.time),Md(e),Sd(),X_(e),dd&&(document.documentElement.dataset.ride=`${F.time.toFixed(2)}|${Math.max(...Je.cups.map(t=>Math.abs(t.tilt.rotation.z))).toFixed(3)}|${Je.cups[F.selected].spinAngle.toFixed(2)}|${Je.platformSpeed.toFixed(3)}`,dd.textContent=[`frame ${ch}  dt ${e.toFixed(3)}  mode ${F.mode}`,`fov ${vt.fov.toFixed(1)} aspect ${vt.aspect.toFixed(3)}`,`cam ${vt.position.x.toFixed(2)} ${vt.position.y.toFixed(2)} ${vt.position.z.toFixed(2)}`,`look ${F.cameraLook.x.toFixed(2)} ${F.cameraLook.y.toFixed(2)} ${F.cameraLook.z.toFixed(2)}`,`want ${Ni.x.toFixed(2)} ${Ni.y.toFixed(2)} ${Ni.z.toFixed(2)}`,`orbit r ${F.orbit.radius.toFixed(2)} polar ${F.orbit.polar.toFixed(2)} az ${F.orbit.azimuth.toFixed(2)}`,`parent ${vt.parent?vt.parent.type:"none"}`,`cup tilt ${Math.max(...Je.cups.map(t=>Math.abs(t.tilt.rotation.z))).toFixed(3)} spin ${Je.cups[F.selected].spinAngle.toFixed(2)}`,`draw ${Zt.info.render.calls}  tris ${Zt.info.render.triangles}`,`canvas ${ne.canvas.width}x${ne.canvas.height}`].join(`
`)),Mn.render(),q_&&ch>$_&&cancelAnimationFrame(so)}function J_(){if(ne.loadBar.style.width="24%",U_(),uh(),md(),Il(),Je.setMood(F.mood),Je.selectCup(F.selected),At.has("instant"))for(let n=0;n<160;n++)Je.update(.05,n*.05);ne.loadText.textContent="\u6446\u597D\u516B\u53EA\u63CF\u91D1\u74F7\u676F\u2026",ne.loadBar.style.width="58%",Zt.compile(nr,vt),Mn.render(),ne.loadBar.style.width="86%",window.setTimeout(()=>{ne.loadBar.style.width="100%",ne.loadText.textContent="\u8336\u5DF2\u6C8F\u597D\uFF0C\u8BF7\u5165\u5E2D"},260),window.setTimeout(()=>{ne.loading.classList.add("is-done"),ne.topbar.classList.remove("is-hidden"),ne.intro.classList.remove("is-hidden"),(At.has("skipIntro")||At.has("ride"))&&N_(),At.get("mood")==="night"&&(Je.setMood("night"),Il()),At.get("ride")==="1"&&(F.selected=di(parseInt(At.get("cup")||"1",10)-1||0,0,7),Je.setSelected(F.selected),uh(),window.setTimeout(()=>Fi(),650))},900),so=requestAnimationFrame(bd),At.has("snapshot")&&window.setTimeout(()=>{cancelAnimationFrame(so),Je.update(.016,F.time),Md(.016),Sd(),Mn.render()},1700)}document.addEventListener("visibilitychange",()=>{document.hidden||(io=performance.now())});window.addEventListener("beforeunload",()=>{cancelAnimationFrame(so)});window.__teacup={ride:Je,state:F,camera:vt,scene:nr,renderer:Zt,composer:Mn,bloom:dh,enterRide:Fi,exitRide:Dl,selectCup:ls,setMood:n=>{F.mood=n,Je.setMood(n),Il()},debugMood:()=>F.mood};J_();})();
