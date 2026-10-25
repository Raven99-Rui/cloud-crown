(()=>{var vu=0,Dc=1,xu=2;var Uc=1,No=2,ei=3,hi=0,jt=1,wt=2,Hn=0,ui=1,An=2,Nc=3,Fc=4,yu=5,wi=100,Mu=101,Su=102,bu=103,Eu=104,Tu=200,wu=201,Au=202,Ru=203,ja=204,eo=205,Cu=206,Pu=207,Iu=208,Lu=209,Du=210,Uu=211,Nu=212,Fu=213,Bu=214,Fo=0,Bo=1,Oo=2,Hi=3,zo=4,ko=5,Ho=6,Vo=7,Bc=0,Ou=1,zu=2,mi=0,Go=1,Wo=2,Xo=3,qs=4,qo=5,Yo=6,Zo=7;var Oc=300,ts=301,ns=302,Ys=303,$o=304,la=306,Vi=1e3,Nn=1001,to=1002,fn=1003,ku=1004;var ca=1005;var Bn=1006,Jo=1007;var Pi=1008;var Vn=1009,zc=1010,kc=1011,Zs=1012,Ko=1013,Ii=1014,Gn=1015,Rn=1016,Qo=1017,jo=1018,$s=1020,Hc=35902,Vc=35899,Gc=1021,Wc=1022,Cn=1023,Ls=1026,Js=1027,el=1028,tl=1029,Xc=1030,nl=1031;var il=1033,ha=33776,ua=33777,da=33778,fa=33779,sl=35840,rl=35841,al=35842,ol=35843,ll=36196,cl=37492,hl=37496,ul=37808,dl=37809,fl=37810,pl=37811,ml=37812,gl=37813,_l=37814,vl=37815,xl=37816,yl=37817,Ml=37818,Sl=37819,bl=37820,El=37821,Tl=36492,wl=36494,Al=36495,Rl=36283,Cl=36284,Pl=36285,Il=36286;var Ar=2300,no=2301,Qa=2302,Mc=2400,Sc=2401,bc=2402;var Hu=3200,Vu=3201;var qc=0,Gu=1,Wn="",$t="srgb",Gi="srgb-linear",Rr="linear",Et="srgb";var zi=7680;var Ec=519,Wu=512,Xu=513,qu=514,Yc=515,Yu=516,Zu=517,$u=518,Ju=519,io=35044;var Zc="300 es",Fn=2e3,Cr=2001;var di=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=1234567,br=Math.PI/180,Ds=180/Math.PI;function $n(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function lt(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function Qd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function jd(i,e,t){return i!==e?(t-i)/(e-i):0}function Er(i,e,t){return(1-t)*i+t*e}function ef(i,e,t,n){return Er(i,e,1-Math.exp(-t*n))}function tf(i,e=1){return e-Math.abs($c(i,e*2)-e)}function nf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function sf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function rf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function af(i,e){return i+Math.random()*(e-i)}function of(i){return i*(.5-Math.random())}function lf(i){i!==void 0&&(Nh=i);let e=Nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cf(i){return i*br}function hf(i){return i*Ds}function uf(i){return(i&i-1)===0&&i!==0}function df(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ff(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Un(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var is={DEG2RAD:br,RAD2DEG:Ds,generateUUID:$n,clamp:lt,euclideanModulo:$c,mapLinear:Qd,inverseLerp:jd,lerp:Er,damp:ef,pingpong:tf,smoothstep:nf,smootherstep:sf,randInt:rf,randFloat:af,randFloatSpread:of,seededRandom:lf,degToRad:cf,radToDeg:hf,isPowerOfTwo:uf,ceilPowerOfTwo:df,floorPowerOfTwo:ff,setQuaternionFromProperEuler:pf,normalize:Rt,denormalize:Un},oe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*_,w=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let I=Math.sqrt(y),P=Math.atan2(I,p*w);m=Math.sin(m*P)/I,o=Math.sin(o*P)/I}let x=o*w;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+_*x,m===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Yl.copy(this).projectOnVector(e),this.sub(Yl)}reflect(e){return this.sub(Yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Yl=new C,Fh=new fi,st=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],y=s[4],x=s[7],I=s[2],P=s[5],D=s[8];return r[0]=a*_+o*w+l*I,r[3]=a*m+o*y+l*P,r[6]=a*p+o*x+l*D,r[1]=c*_+h*w+u*I,r[4]=c*m+h*y+u*P,r[7]=c*p+h*x+u*D,r[2]=d*_+f*w+g*I,r[5]=d*m+f*y+g*P,r[8]=d*p+f*x+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Zl.makeScale(e,t)),this}rotate(e){return this.premultiply(Zl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zl=new st;function Jc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ku(){let i=Pr("canvas");return i.style.display="block",i}var Bh={};function Us(i){i in Bh||(Bh[i]=!0,console.warn(i))}function Qu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Oh=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zh=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mf(){let i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Et&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Rr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Us("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:e,whitePoint:n,transfer:Rr,toXYZ:Oh,fromXYZ:zh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:$t},outputColorSpaceConfig:{drawingBufferColorSpace:$t}},[$t]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:Oh,fromXYZ:zh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:$t}}}),i}var _t=mf();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ps,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ps===void 0&&(ps=Pr("canvas")),ps.width=e.width,ps.height=e.height;let s=ps.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ps}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gf=0,Ns=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=$n(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($l(s[a].image)):r.push($l(s[a]))}else r=$l(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function $l(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,Jl=new C,cn=class i extends di{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=Bn,a=Pi,o=Cn,l=Vn,c=i.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=$n(),this.name="",this.source=new Ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jl).x}get height(){return this.source.getSize(Jl).y}get depth(){return this.source.getSize(Jl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vi:e.x=e.x-Math.floor(e.x);break;case Nn:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vi:e.y=e.y-Math.floor(e.y);break;case Nn:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Oc;cn.DEFAULT_ANISOTROPY=1;var Ct=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,x=(f+1)/2,I=(p+1)/2,P=(h+d)/4,D=(u+_)/4,U=(g+m)/4;return y>x&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=P/n,r=D/n):x>I?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=P/s,r=U/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=D/r,s=U/r),this.set(n,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=lt(this.x,e.x,t.x),this.y=lt(this.y,e.y,t.y),this.z=lt(this.z,e.z,t.z),this.w=lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=lt(this.x,e,t),this.y=lt(this.y,e,t),this.z=lt(this.z,e,t),this.w=lt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ro=class extends di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ct(0,0,e,t),this.scissorTest=!1,this.viewport=new Ct(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new cn(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ns(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ir=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends cn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=fn,this.minFilter=fn,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,In):In.fromBufferAttribute(r,a),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ba.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ba.copy(n.boundingBox)),ba.applyMatrix4(e.matrixWorld),this.union(ba)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ur),Ea.subVectors(this.max,ur),ms.subVectors(e.a,ur),gs.subVectors(e.b,ur),_s.subVectors(e.c,ur),yi.subVectors(gs,ms),Mi.subVectors(_s,gs),Ni.subVectors(ms,_s);let t=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-Ni.z,Ni.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,Ni.z,0,-Ni.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-Ni.y,Ni.x,0];return!Kl(t,ms,gs,_s,Ea)||(t=[1,0,0,0,1,0,0,0,1],!Kl(t,ms,gs,_s,Ea))?!1:(Ta.crossVectors(yi,Mi),t=[Ta.x,Ta.y,Ta.z],Kl(t,ms,gs,_s,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ii=[new C,new C,new C,new C,new C,new C,new C,new C],In=new C,ba=new Jn,ms=new C,gs=new C,_s=new C,yi=new C,Mi=new C,Ni=new C,ur=new C,Ea=new C,Ta=new C,Fi=new C;function Kl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Fi.fromArray(i,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=n.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var vf=new Jn,dr=new C,Ql=new C,Kn=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):vf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);let t=dr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Ql)),this.expandByPoint(dr.copy(e.center).sub(Ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},si=new C,jl=new C,wa=new C,Si=new C,ec=new C,Aa=new C,tc=new C,Wi=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,t),si.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){jl.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(jl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Si.dot(this.direction),l=-Si.dot(wa),c=Si.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(jl).addScaledVector(wa,d),f}intersectSphere(e,t){si.subVectors(e.center,this.origin);let n=si.dot(this.direction),s=si.dot(si)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,t,n,s,r){ec.subVectors(t,e),Aa.subVectors(n,e),tc.crossVectors(ec,Aa);let a=this.direction.dot(tc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);let l=o*this.direction.dot(Aa.crossVectors(Si,Aa));if(l<0)return null;let c=o*this.direction.dot(ec.cross(Si));if(c<0||l+c>a)return null;let h=-o*Si.dot(tc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/vs.setFromMatrixColumn(e,0).length(),r=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,_=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,yf)}lookAt(e,t,n){let s=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),bi.crossVectors(n,_n),bi.lengthSq()===0&&(Math.abs(n.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),bi.crossVectors(n,_n)),bi.normalize(),Ra.crossVectors(_n,bi),s[0]=bi.x,s[4]=Ra.x,s[8]=_n.x,s[1]=bi.y,s[5]=Ra.y,s[9]=_n.y,s[2]=bi.z,s[6]=Ra.z,s[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],y=n[7],x=n[11],I=n[15],P=s[0],D=s[4],U=s[8],b=s[12],M=s[1],N=s[5],V=s[9],Z=s[13],Q=s[2],j=s[6],G=s[10],de=s[14],J=s[3],Me=s[7],Pe=s[11],De=s[15];return r[0]=a*P+o*M+l*Q+c*J,r[4]=a*D+o*N+l*j+c*Me,r[8]=a*U+o*V+l*G+c*Pe,r[12]=a*b+o*Z+l*de+c*De,r[1]=h*P+u*M+d*Q+f*J,r[5]=h*D+u*N+d*j+f*Me,r[9]=h*U+u*V+d*G+f*Pe,r[13]=h*b+u*Z+d*de+f*De,r[2]=g*P+_*M+m*Q+p*J,r[6]=g*D+_*N+m*j+p*Me,r[10]=g*U+_*V+m*G+p*Pe,r[14]=g*b+_*Z+m*de+p*De,r[3]=w*P+y*M+x*Q+I*J,r[7]=w*D+y*N+x*j+I*Me,r[11]=w*U+y*V+x*G+I*Pe,r[15]=w*b+y*Z+x*de+I*De,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+_*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=u*m*c-_*d*c+_*l*f-o*m*f-u*l*p+o*d*p,y=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*_*c-g*u*c+g*o*f-a*_*f-h*o*p+a*u*p,I=g*u*l-h*_*l-g*o*d+a*_*d+h*o*m-a*u*m,P=t*w+n*y+s*x+r*I;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/P;return e[0]=w*D,e[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*D,e[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*p+n*l*p)*D,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*D,e[4]=y*D,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*D,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*D,e[8]=x*D,e[9]=(g*u*r-h*_*r-g*n*f+t*_*f+h*n*p-t*u*p)*D,e[10]=(a*_*r-g*o*r+g*n*c-t*_*c-a*n*p+t*o*p)*D,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*D,e[12]=I*D,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*D,e[14]=(g*o*s-a*_*s-g*n*l+t*_*l+a*n*m-t*o*m)*D,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,_=a*h,m=a*u,p=o*u,w=l*c,y=l*h,x=l*u,I=n.x,P=n.y,D=n.z;return s[0]=(1-(_+p))*I,s[1]=(f+x)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(f-x)*P,s[5]=(1-(d+p))*P,s[6]=(m+w)*P,s[7]=0,s[8]=(g+y)*D,s[9]=(m-w)*D,s[10]=(1-(d+_))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=vs.set(s[0],s[1],s[2]).length(),a=vs.set(s[4],s[5],s[6]).length(),o=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ln.copy(this);let c=1/r,h=1/a,u=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=h,Ln.elements[5]*=h,Ln.elements[6]*=h,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Fn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Cr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Fn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Fn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===Cr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},vs=new C,Ln=new Tt,xf=new C(0,0,0),yf=new C(1,1,1),bi=new C,Ra=new C,_n=new C,kh=new Tt,Hh=new fi,On=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(lt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return kh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};On.DEFAULT_ORDER="XYZ";var Fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Mf=0,Vh=new C,xs=new fi,ri=new Tt,Ca=new C,fr=new C,Sf=new C,bf=new fi,Gh=new C(1,0,0),Wh=new C(0,1,0),Xh=new C(0,0,1),qh={type:"added"},Ef={type:"removed"},ys={type:"childadded",child:null},nc={type:"childremoved",child:null},zt=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=$n(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new On,n=new fi,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new st}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(Gh,e)}rotateY(e){return this.rotateOnAxis(Wh,e)}rotateZ(e){return this.rotateOnAxis(Xh,e)}translateOnAxis(e,t){return Vh.copy(e).applyQuaternion(this.quaternion),this.position.add(Vh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gh,e)}translateY(e){return this.translateOnAxis(Wh,e)}translateZ(e){return this.translateOnAxis(Xh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ca.copy(e):Ca.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(fr,Ca,this.up):ri.lookAt(Ca,fr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(ri),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qh),ys.child=e,this.dispatchEvent(ys),ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qh),ys.child=e,this.dispatchEvent(ys),ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Sf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,bf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};zt.DEFAULT_UP=new C(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Dn=new C,ai=new C,ic=new C,oi=new C,Ms=new C,Ss=new C,Yh=new C,sc=new C,rc=new C,ac=new C,oc=new Ct,lc=new Ct,cc=new Ct,li=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Dn.subVectors(e,t),s.cross(Dn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Dn.subVectors(s,t),ai.subVectors(n,t),ic.subVectors(e,t);let a=Dn.dot(Dn),o=Dn.dot(ai),l=Dn.dot(ic),c=ai.dot(ai),h=ai.dot(ic),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,oi.x),l.addScaledVector(a,oi.y),l.addScaledVector(o,oi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(oc,r.x),a.addScaledVector(lc,r.y),a.addScaledVector(cc,r.z),a}static isFrontFacing(e,t,n,s){return Dn.subVectors(n,t),ai.subVectors(e,t),Dn.cross(ai).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Dn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ms.subVectors(s,n),Ss.subVectors(r,n),sc.subVectors(e,n);let l=Ms.dot(sc),c=Ss.dot(sc);if(l<=0&&c<=0)return t.copy(n);rc.subVectors(e,s);let h=Ms.dot(rc),u=Ss.dot(rc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ms,a);ac.subVectors(e,r);let f=Ms.dot(ac),g=Ss.dot(ac);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Yh.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(Yh,o);let p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ms,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Pa={h:0,s:0,l:0};function hc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=$c(e,1),t=lt(t,0,1),n=lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=hc(a,r,e+1/3),this.g=hc(a,r,e),this.b=hc(a,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=$t){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let n=ju[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return _t.workingToColorSpace(nn.copy(this),e),Math.round(lt(nn.r*255,0,255))*65536+Math.round(lt(nn.g*255,0,255))*256+Math.round(lt(nn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(nn.copy(this),t);let n=nn.r,s=nn.g,r=nn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(nn.copy(this),t),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=$t){_t.workingToColorSpace(nn.copy(this),e);let t=nn.r,n=nn.g,s=nn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Pa);let n=Er(Ei.h,Pa.h,t),s=Er(Ei.s,Pa.s,t),r=Er(Ei.l,Pa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new Xe;Xe.NAMES=ju;var Tf=0,zn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=$n(),this.name="",this.type="Material",this.blending=ui,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ja,this.blendDst=eo,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Hi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zi,this.stencilZFail=zi,this.stencilZPass=zi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ja&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Gt=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Bc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Vt=new C,Ia=new oe,wf=0,Jt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wf++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=io,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ia.fromBufferAttribute(this,t),Ia.applyMatrix3(e),this.setXY(t,Ia.x,Ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Un(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Un(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Un(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Un(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==io&&(e.usage=this.usage),e}};var Lr=class extends Jt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Dr=class extends Jt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var dt=class extends Jt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Af=0,Tn=new Tt,uc=new zt,bs=new C,vn=new Jn,pr=new Jn,Zt=new C,Nt=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=$n(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jc(e)?Dr:Lr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pr.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(vn.min,pr.min),vn.expandByPoint(Zt),Zt.addVectors(vn.max,pr.max),vn.expandByPoint(Zt)):(vn.expandByPoint(pr.min),vn.expandByPoint(pr.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Zt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Zt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Zt.fromBufferAttribute(o,c),l&&(bs.fromBufferAttribute(e,c),Zt.add(bs)),s=Math.max(s,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new C,l[U]=new C;let c=new C,h=new C,u=new C,d=new oe,f=new oe,g=new oe,_=new C,m=new C;function p(U,b,M){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let N=1/(f.x*g.y-g.x*f.y);isFinite(N)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(N),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(N),o[U].add(_),o[b].add(_),o[M].add(_),l[U].add(m),l[b].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,b=w.length;U<b;++U){let M=w[U],N=M.start,V=M.count;for(let Z=N,Q=N+V;Z<Q;Z+=3)p(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}let y=new C,x=new C,I=new C,P=new C;function D(U){I.fromBufferAttribute(s,U),P.copy(I);let b=o[U];y.copy(b),y.sub(I.multiplyScalar(I.dot(b))).normalize(),x.crossVectors(P,b);let N=x.dot(l[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,N)}for(let U=0,b=w.length;U<b;++U){let M=w[U],N=M.start,V=M.count;for(let Z=N,Q=N+V;Z<Q;Z+=3)D(e.getX(Z+0)),D(e.getX(Z+1)),D(e.getX(Z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Jt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zh=new Tt,Bi=new Wi,La=new Kn,$h=new C,Da=new C,Ua=new C,Na=new C,dc=new C,Fa=new C,Jh=new C,Ba=new C,yt=class extends zt{constructor(e=new Nt,t=new Gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(dc.fromBufferAttribute(u,e),a?Fa.addScaledVector(dc,h):Fa.addScaledVector(dc.sub(t),h))}t.add(Fa)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Bi.copy(e.ray).recast(e.near),!(La.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(La,$h)===null||Bi.origin.distanceToSquared($h)>(e.far-e.near)**2))&&(Zh.copy(r).invert(),Bi.copy(e.ray).applyMatrix4(Zh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,I=y;x<I;x+=3){let P=o.getX(x),D=o.getX(x+1),U=o.getX(x+2);s=Oa(this,p,e,n,c,h,u,P,D,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let w=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);s=Oa(this,a,e,n,c,h,u,w,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){let m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=w,I=y;x<I;x+=3){let P=x,D=x+1,U=x+2;s=Oa(this,p,e,n,c,h,u,P,D,U),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let w=m,y=m+1,x=m+2;s=Oa(this,a,e,n,c,h,u,w,y,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Rf(i,e,t,n,s,r,a,o){let l;if(e.side===jt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===hi,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function Oa(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Da),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Na);let h=Rf(i,e,t,n,Da,Ua,Na,Jh);if(h){let u=new C;li.getBarycoord(Jh,Da,Ua,Na,u),s&&(h.uv=li.getInterpolatedAttribute(s,o,l,c,u,new oe)),r&&(h.uv1=li.getInterpolatedAttribute(r,o,l,c,u,new oe)),a&&(h.normal=li.getInterpolatedAttribute(a,o,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new C,materialIndex:0};li.getNormal(Da,Ua,Na,d.normal),h.face=d,h.barycoord=u}return h}var Ai=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new dt(c,3)),this.setAttribute("normal",new dt(h,3)),this.setAttribute("uv",new dt(u,2));function g(_,m,p,w,y,x,I,P,D,U,b){let M=x/D,N=I/U,V=x/2,Z=I/2,Q=P/2,j=D+1,G=U+1,de=0,J=0,Me=new C;for(let Pe=0;Pe<G;Pe++){let De=Pe*N-Z;for(let tt=0;tt<j;tt++){let pt=tt*M-V;Me[_]=pt*w,Me[m]=De*y,Me[p]=Q,c.push(Me.x,Me.y,Me.z),Me[_]=0,Me[m]=0,Me[p]=P>0?1:-1,h.push(Me.x,Me.y,Me.z),u.push(tt/D),u.push(1-Pe/U),de+=1}}for(let Pe=0;Pe<U;Pe++)for(let De=0;De<D;De++){let tt=d+De+j*Pe,pt=d+De+j*(Pe+1),rt=d+(De+1)+j*(Pe+1),ut=d+(De+1)+j*Pe;l.push(tt,pt,ut),l.push(pt,rt,ut),J+=6}o.addGroup(f,J,b),f+=J,d+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ss(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function rn(i){let e={};for(let t=0;t<i.length;t++){let n=ss(i[t]);for(let s in n)e[s]=n[s]}return e}function Cf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Kc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var gi={clone:ss,merge:rn},Pf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pf,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=Cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ur=class extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ti=new C,Kh=new oe,Qh=new oe,Qt=class extends Ur{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ds*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ds*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ti.x,Ti.y).multiplyScalar(-e/Ti.z)}getViewSize(e,t){return this.getViewBounds(e,Kh,Qh),t.subVectors(Qh,Kh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(br*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Es=-90,Ts=1,oo=class extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(Es,Ts,e,t);s.layers=this.layers,this.add(s);let r=new Qt(Es,Ts,e,t);r.layers=this.layers,this.add(r);let a=new Qt(Es,Ts,e,t);a.layers=this.layers,this.add(a);let o=new Qt(Es,Ts,e,t);o.layers=this.layers,this.add(o);let l=new Qt(Es,Ts,e,t);l.layers=this.layers,this.add(l);let c=new Qt(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Fn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nr=class extends cn{constructor(e=[],t=ts,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},lo=class extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ai(5,5,5),r=new Wt({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Hn});r.uniforms.tEquirect.value=t;let a=new yt(s,r),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=Bn),new oo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Dt=class extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lf={type:"move"},Bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Lf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Fr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Br=class extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},co=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=io,this.updateRanges=[],this.version=0,this.uuid=$n()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$n()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new C,Or=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Un(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Un(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Un(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Un(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Un(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Jt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Qn=class extends zn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,mr=new C,As=new C,Rs=new C,Cs=new oe,gr=new oe,ed=new Tt,za=new C,_r=new C,ka=new C,jh=new oe,fc=new oe,eu=new oe,pi=class extends zt{constructor(e=new Qn){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Nt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new co(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Or(n,3,0,!1)),ws.setAttribute("uv",new Or(n,2,3,!1))}this.geometry=ws,this.material=e,this.center=new oe(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),As.setFromMatrixScale(this.matrixWorld),ed.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&As.multiplyScalar(-Rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Ha(za.set(-.5,-.5,0),Rs,a,As,s,r),Ha(_r.set(.5,-.5,0),Rs,a,As,s,r),Ha(ka.set(.5,.5,0),Rs,a,As,s,r),jh.set(0,0),fc.set(1,0),eu.set(1,1);let o=e.ray.intersectTriangle(za,_r,ka,!1,mr);if(o===null&&(Ha(_r.set(-.5,.5,0),Rs,a,As,s,r),fc.set(0,1),o=e.ray.intersectTriangle(za,ka,_r,!1,mr),o===null))return;let l=e.ray.origin.distanceTo(mr);l<e.near||l>e.far||t.push({distance:l,point:mr.clone(),uv:li.getInterpolation(mr,za,_r,ka,jh,fc,eu,new oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ha(i,e,t,n,s,r){Cs.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(gr.x=r*Cs.x-s*Cs.y,gr.y=s*Cs.x+r*Cs.y):gr.copy(Cs),i.copy(e),i.x+=gr.x,i.y+=gr.y,i.applyMatrix4(ed)}var ho=class extends cn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=fn,h=fn,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zr=class extends Jt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ps=new Tt,tu=new Tt,Va=[],nu=new Jn,Df=new Tt,vr=new yt,xr=new Kn,kr=class extends yt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Df)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),nu.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(nu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),xr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(xr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(vr.geometry=this.geometry,vr.material=this.material,vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),e.ray.intersectsSphere(xr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),tu.multiplyMatrices(n,Ps),vr.matrixWorld=tu,vr.raycast(e,Va);for(let a=0,o=Va.length;a<o;a++){let l=Va[a];l.instanceId=r,l.object=this,t.push(l)}Va.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(s*this.count),s,this.count,el,Gn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pc=new C,Uf=new C,Nf=new st,Zn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pc.subVectors(n,t).cross(Uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(pc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Nf.getNormalMatrix(e),s=this.coplanarPoint(pc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Oi=new Kn,Ff=new oe(.5,.5),Ga=new C,Os=class{constructor(e=new Zn,t=new Zn,n=new Zn,s=new Zn,r=new Zn,a=new Zn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Fn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],w=r[12],y=r[13],x=r[14],I=r[15];if(s[0].setComponents(c-a,f-h,p-g,I-w).normalize(),s[1].setComponents(c+a,f+h,p+g,I+w).normalize(),s[2].setComponents(c+o,f+u,p+_,I+y).normalize(),s[3].setComponents(c-o,f-u,p-_,I-y).normalize(),n)s[4].setComponents(l,d,m,x).normalize(),s[5].setComponents(c-l,f-d,p-m,I-x).normalize();else if(s[4].setComponents(c-l,f-d,p-m,I-x).normalize(),t===Fn)s[5].setComponents(c+l,f+d,p+m,I+x).normalize();else if(t===Cr)s[5].setComponents(l,d,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Oi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oi)}intersectsSprite(e){Oi.center.set(0,0,0);let t=Ff.distanceTo(e.center);return Oi.radius=.7071067811865476+t,Oi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Xi=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new C,fo=new C,iu=new Tt,yr=new Wi,Wa=new Kn,mc=new C,su=new C,po=class extends zt{constructor(e=new Nt,t=new Xi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(s),Wa.radius+=r,e.ray.intersectsSphere(Wa)===!1)return;iu.copy(s).invert(),yr.copy(e.ray).applyMatrix4(iu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=h.getX(_),w=h.getX(_+1),y=Xa(this,e,yr,l,p,w,_);y&&t.push(y)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(f),p=Xa(this,e,yr,l,_,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){let p=Xa(this,e,yr,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=Xa(this,e,yr,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Xa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(uo,fo,mc,su)>n)return;mc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(mc);if(!(c<e.near||c>e.far))return{distance:c,point:su.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var ru=new C,au=new C,Hr=class extends po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ru.fromBufferAttribute(t,s),au.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ru.distanceTo(au);e.setAttribute("lineDistance",new dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var qi=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ou=new Tt,Tc=new Wi,qa=new Kn,Ya=new C,zs=class extends zt{constructor(e=new Nt,t=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qa.copy(n.boundingSphere),qa.applyMatrix4(s),qa.radius+=r,e.ray.intersectsSphere(qa)===!1)return;ou.copy(s).invert(),Tc.copy(e.ray).applyMatrix4(ou);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,_=f;g<_;g++){let m=c.getX(g);Ya.fromBufferAttribute(u,m),lu(Ya,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,_=f;g<_;g++)Ya.fromBufferAttribute(u,g),lu(Ya,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lu(i,e,t,n,s,r,a){let o=Tc.distanceSqToPoint(i);if(o<t){let l=new C;Tc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ks=class extends cn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Vr=class extends cn{constructor(e,t,n=Ii,s,r,a,o=fn,l=fn,c,h=Ls,u=1){if(h!==Ls&&h!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gr=class extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var kn=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new oe;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("normal",new dt(o,3)),this.setAttribute("uv",new dt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wn=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,_=[],m=n/2,p=0;w(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function w(){let x=new C,I=new C,P=0,D=(t-e)/n;for(let U=0;U<=r;U++){let b=[],M=U/r,N=M*(t-e)+e;for(let V=0;V<=s;V++){let Z=V/s,Q=Z*l+o,j=Math.sin(Q),G=Math.cos(Q);I.x=N*j,I.y=-M*n+m,I.z=N*G,u.push(I.x,I.y,I.z),x.set(j,D,G).normalize(),d.push(x.x,x.y,x.z),f.push(Z,1-M),b.push(g++)}_.push(b)}for(let U=0;U<s;U++)for(let b=0;b<r;b++){let M=_[b][U],N=_[b+1][U],V=_[b+1][U+1],Z=_[b][U+1];(e>0||b!==0)&&(h.push(M,N,Z),P+=3),(t>0||b!==r-1)&&(h.push(N,V,Z),P+=3)}c.addGroup(p,P,0),p+=P}function y(x){let I=g,P=new oe,D=new C,U=0,b=x===!0?e:t,M=x===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;let N=g;for(let V=0;V<=s;V++){let Q=V/s*l+o,j=Math.cos(Q),G=Math.sin(Q);D.x=b*G,D.y=m*M,D.z=b*j,u.push(D.x,D.y,D.z),d.push(0,M,0),P.x=j*.5+.5,P.y=G*.5*M+.5,f.push(P.x,P.y),g++}for(let V=0;V<s;V++){let Z=I+V,Q=N+V;x===!0?h.push(Q,Q+1,Z):h.push(Q+1,Q,Z),U+=3}c.addGroup(p,U,x===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wr=class i extends wn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},mo=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new dt(r,3)),this.setAttribute("normal",new dt(r.slice(),3)),this.setAttribute("uv",new dt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let y=new C,x=new C,I=new C;for(let P=0;P<t.length;P+=3)f(t[P+0],y),f(t[P+1],x),f(t[P+2],I),l(y,x,I,w)}function l(w,y,x,I){let P=I+1,D=[];for(let U=0;U<=P;U++){D[U]=[];let b=w.clone().lerp(x,U/P),M=y.clone().lerp(x,U/P),N=P-U;for(let V=0;V<=N;V++)V===0&&U===P?D[U][V]=b:D[U][V]=b.clone().lerp(M,V/N)}for(let U=0;U<P;U++)for(let b=0;b<2*(P-U)-1;b++){let M=Math.floor(b/2);b%2===0?(d(D[U][M+1]),d(D[U+1][M]),d(D[U][M])):(d(D[U][M+1]),d(D[U+1][M+1]),d(D[U+1][M]))}}function c(w){let y=new C;for(let x=0;x<r.length;x+=3)y.x=r[x+0],y.y=r[x+1],y.z=r[x+2],y.normalize().multiplyScalar(w),r[x+0]=y.x,r[x+1]=y.y,r[x+2]=y.z}function h(){let w=new C;for(let y=0;y<r.length;y+=3){w.x=r[y+0],w.y=r[y+1],w.z=r[y+2];let x=m(w)/2/Math.PI+.5,I=p(w)/Math.PI+.5;a.push(x,1-I)}g(),u()}function u(){for(let w=0;w<a.length;w+=6){let y=a[w+0],x=a[w+2],I=a[w+4],P=Math.max(y,x,I),D=Math.min(y,x,I);P>.9&&D<.1&&(y<.2&&(a[w+0]+=1),x<.2&&(a[w+2]+=1),I<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,y){let x=w*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){let w=new C,y=new C,x=new C,I=new C,P=new oe,D=new oe,U=new oe;for(let b=0,M=0;b<r.length;b+=9,M+=6){w.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),x.set(r[b+6],r[b+7],r[b+8]),P.set(a[M+0],a[M+1]),D.set(a[M+2],a[M+3]),U.set(a[M+4],a[M+5]),I.copy(w).add(y).add(x).divideScalar(3);let N=m(I);_(P,M+0,w,N),_(D,M+2,y,N),_(U,M+4,x,N)}}function _(w,y,x,I){I<0&&w.x===1&&(a[y]=w.x-1),x.x===0&&x.z===0&&(a[y]=I/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new oe:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new Tt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(lt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(lt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Hs=class extends xn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},go=class extends Hs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Za=new C,gc=new Qc,_c=new Qc,vc=new Qc,_o=class extends xn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Za.subVectors(s[0],s[1]).add(s[0]),c=Za);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Za.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Za),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),gc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,_,m),_c.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,_,m),vc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(gc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),_c.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),vc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(gc.calc(l),_c.calc(l),vc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Bf(i,e){let t=1-i;return t*t*e}function Of(i,e){return 2*(1-i)*i*e}function zf(i,e){return i*i*e}function Tr(i,e,t,n){return Bf(i,e)+Of(i,t)+zf(i,n)}function kf(i,e){let t=1-i;return t*t*t*e}function Hf(i,e){let t=1-i;return 3*t*t*i*e}function Vf(i,e){return 3*(1-i)*i*i*e}function Gf(i,e){return i*i*i*e}function wr(i,e,t,n,s){return kf(i,e)+Hf(i,t)+Vf(i,n)+Gf(i,s)}var Xr=class extends xn{constructor(e=new oe,t=new oe,n=new oe,s=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,s.x,r.x,a.x,o.x),wr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vo=class extends xn{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(wr(e,s.x,r.x,a.x,o.x),wr(e,s.y,r.y,a.y,o.y),wr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qr=class extends xn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends xn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yr=class extends xn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yi=class extends xn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Tr(e,s.x,r.x,a.x),Tr(e,s.y,r.y,a.y),Tr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zr=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(cu(o,l.x,c.x,h.x,u.x),cu(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new oe().fromArray(s))}return this}},yo=Object.freeze({__proto__:null,ArcCurve:go,CatmullRomCurve3:_o,CubicBezierCurve:Xr,CubicBezierCurve3:vo,EllipseCurve:Hs,LineCurve:qr,LineCurve3:xo,QuadraticBezierCurve:Yr,QuadraticBezierCurve3:Yi,SplineCurve:Zr}),Mo=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yo[s.type]().fromJSON(s))}return this}},$r=class extends Mo{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qr(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Yr(this.currentPoint.clone(),new oe(e,t),new oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Xr(this.currentPoint.clone(),new oe(e,t),new oe(n,s),new oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Hs(e,t,n,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vs=class extends $r{constructor(e){super(e),this.uuid=$n(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new $r().fromJSON(s))}return this}};function Wf(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=td(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=$f(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let h=-1/0,u=-1/0;for(let d=t;d<s;d+=t){let f=i[d],g=i[d+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>u&&(u=g)}c=Math.max(h-o,u-l),c=c!==0?32767/c:0}return Jr(r,a,t,o,l,c,0),a}function td(i,e,t,n,s){let r;if(s===ap(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=hu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=hu(a/n|0,i[a],i[a+1],r);return r&&Gs(r,r.next)&&(Qr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Gs(t,t.next)||Bt(t.prev,t,t.next)===0)){if(Qr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Jr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&ep(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?qf(i,n,s,r):Xf(i)){e.push(l.i,i.i,c.i),Qr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Yf(Zi(i),e),Jr(i,e,t,n,s,r,2)):a===2&&Zf(i,e,t,n,s,r):Jr(Zi(i),e,t,n,s,r,1);break}}}function Xf(i){let e=i.prev,t=i,n=i.next;if(Bt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),u=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Sr(s,o,r,l,a,c,g.x,g.y)&&Bt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Bt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=Math.min(o,l,c),g=Math.min(h,u,d),_=Math.max(o,l,c),m=Math.max(h,u,d),p=wc(f,g,e,t,n),w=wc(_,m,e,t,n),y=i.prevZ,x=i.nextZ;for(;y&&y.z>=p&&x&&x.z<=w;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Sr(o,h,l,u,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Sr(o,h,l,u,c,d,x.x,x.y)&&Bt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&Sr(o,h,l,u,c,d,y.x,y.y)&&Bt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&Sr(o,h,l,u,c,d,x.x,x.y)&&Bt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Yf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Gs(n,s)&&id(n,t,t.next,s)&&Kr(n,s)&&Kr(s,n)&&(e.push(n.i,t.i,s.i),Qr(t),Qr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function Zf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ip(a,o)){let l=sd(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Jr(a,e,t,n,s,r,0),Jr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function $f(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=td(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(np(c))}s.sort(Jf);for(let r=0;r<s.length;r++)t=Kf(s[r],t);return t}function Jf(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Kf(i,e){let t=Qf(i,e);if(!t)return e;let n=sd(t,i);return Zi(n,n.next),Zi(t,t.next)}function Qf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Gs(i,t))return t;do{if(Gs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&nd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let u=Math.abs(s-t.y)/(n-t.x);Kr(t,i)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&jf(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function jf(i,e){return Bt(i.prev,i,e.prev)<0&&Bt(e.next,i,i.next)<0}function ep(i,e,t,n){let s=i;do s.z===0&&(s.z=wc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tp(s)}function tp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function wc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function np(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function nd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Sr(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&nd(i,e,t,n,s,r,a,o)}function ip(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sp(i,e)&&(Kr(i,e)&&Kr(e,i)&&rp(i,e)&&(Bt(i.prev,i,e.prev)||Bt(i,e.prev,e))||Gs(i,e)&&Bt(i.prev,i,i.next)>0&&Bt(e.prev,e,e.next)>0)}function Bt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Gs(i,e){return i.x===e.x&&i.y===e.y}function id(i,e,t,n){let s=Ja(Bt(i,e,t)),r=Ja(Bt(i,e,n)),a=Ja(Bt(t,n,i)),o=Ja(Bt(t,n,e));return!!(s!==r&&a!==o||s===0&&$a(i,t,e)||r===0&&$a(i,n,e)||a===0&&$a(t,i,n)||o===0&&$a(t,e,n))}function $a(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ja(i){return i>0?1:i<0?-1:0}function sp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&id(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Kr(i,e){return Bt(i.prev,i,i.next)<0?Bt(i,e,i.next)>=0&&Bt(i,i.prev,e)>=0:Bt(i,e,i.prev)<0||Bt(i,i.next,e)<0}function rp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function sd(i,e){let t=Ac(i.i,i.x,i.y),n=Ac(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function hu(i,e,t,n){let s=Ac(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ac(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ap(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Rc=class{static triangulate(e,t,n=2){return Wf(e,t,n)}},ki=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];uu(e),du(n,e);let a=e.length;t.forEach(uu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,du(n,t[l]);let o=Rc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function uu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function du(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var jr=class i extends Nt{constructor(e=new Vs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new dt(s,3)),this.setAttribute("uv",new dt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:op,y,x=!1,I,P,D,U;p&&(y=p.getSpacedPoints(h),x=!0,d=!1,I=p.computeFrenetFrames(h,!1),P=new C,D=new C,U=new C),d||(m=0,f=0,g=0,_=0);let b=o.extractPoints(c),M=b.shape,N=b.holes;if(!ki.isClockWise(M)){M=M.reverse();for(let ce=0,re=N.length;ce<re;ce++){let ee=N[ce];ki.isClockWise(ee)&&(N[ce]=ee.reverse())}}function Z(ce){let ee=10000000000000001e-36,se=ce[0];for(let Se=1;Se<=ce.length;Se++){let pe=Se%ce.length,be=ce[pe],je=be.x-se.x,Je=be.y-se.y,A=je*je+Je*Je,v=Math.max(Math.abs(be.x),Math.abs(be.y),Math.abs(se.x),Math.abs(se.y)),H=ee*v*v;if(A<=H){ce.splice(pe,1),Se--;continue}se=be}}Z(M),N.forEach(Z);let Q=N.length,j=M;for(let ce=0;ce<Q;ce++){let re=N[ce];M=M.concat(re)}function G(ce,re,ee){return re||console.error("THREE.ExtrudeGeometry: vec does not exist"),ce.clone().addScaledVector(re,ee)}let de=M.length;function J(ce,re,ee){let se,Se,pe,be=ce.x-re.x,je=ce.y-re.y,Je=ee.x-ce.x,A=ee.y-ce.y,v=be*be+je*je,H=be*A-je*Je;if(Math.abs(H)>Number.EPSILON){let $=Math.sqrt(v),he=Math.sqrt(Je*Je+A*A),K=re.x-je/$,q=re.y+be/$,me=ee.x-A/he,Fe=ee.y+Je/he,ye=((me-K)*A-(Fe-q)*Je)/(be*A-je*Je);se=K+be*ye-ce.x,Se=q+je*ye-ce.y;let ne=se*se+Se*Se;if(ne<=2)return new oe(se,Se);pe=Math.sqrt(ne/2)}else{let $=!1;be>Number.EPSILON?Je>Number.EPSILON&&($=!0):be<-Number.EPSILON?Je<-Number.EPSILON&&($=!0):Math.sign(je)===Math.sign(A)&&($=!0),$?(se=-je,Se=be,pe=Math.sqrt(v)):(se=be,Se=je,pe=Math.sqrt(v/2))}return new oe(se/pe,Se/pe)}let Me=[];for(let ce=0,re=j.length,ee=re-1,se=ce+1;ce<re;ce++,ee++,se++)ee===re&&(ee=0),se===re&&(se=0),Me[ce]=J(j[ce],j[ee],j[se]);let Pe=[],De,tt=Me.concat();for(let ce=0,re=Q;ce<re;ce++){let ee=N[ce];De=[];for(let se=0,Se=ee.length,pe=Se-1,be=se+1;se<Se;se++,pe++,be++)pe===Se&&(pe=0),be===Se&&(be=0),De[se]=J(ee[se],ee[pe],ee[be]);Pe.push(De),tt=tt.concat(De)}let pt;if(m===0)pt=ki.triangulateShape(j,N);else{let ce=[],re=[];for(let ee=0;ee<m;ee++){let se=ee/m,Se=f*Math.cos(se*Math.PI/2),pe=g*Math.sin(se*Math.PI/2)+_;for(let be=0,je=j.length;be<je;be++){let Je=G(j[be],Me[be],pe);te(Je.x,Je.y,-Se),se===0&&ce.push(Je)}for(let be=0,je=Q;be<je;be++){let Je=N[be];De=Pe[be];let A=[];for(let v=0,H=Je.length;v<H;v++){let $=G(Je[v],De[v],pe);te($.x,$.y,-Se),se===0&&A.push($)}se===0&&re.push(A)}}pt=ki.triangulateShape(ce,re)}let rt=pt.length,ut=g+_;for(let ce=0;ce<de;ce++){let re=d?G(M[ce],tt[ce],ut):M[ce];x?(D.copy(I.normals[0]).multiplyScalar(re.x),P.copy(I.binormals[0]).multiplyScalar(re.y),U.copy(y[0]).add(D).add(P),te(U.x,U.y,U.z)):te(re.x,re.y,0)}for(let ce=1;ce<=h;ce++)for(let re=0;re<de;re++){let ee=d?G(M[re],tt[re],ut):M[re];x?(D.copy(I.normals[ce]).multiplyScalar(ee.x),P.copy(I.binormals[ce]).multiplyScalar(ee.y),U.copy(y[ce]).add(D).add(P),te(U.x,U.y,U.z)):te(ee.x,ee.y,u/h*ce)}for(let ce=m-1;ce>=0;ce--){let re=ce/m,ee=f*Math.cos(re*Math.PI/2),se=g*Math.sin(re*Math.PI/2)+_;for(let Se=0,pe=j.length;Se<pe;Se++){let be=G(j[Se],Me[Se],se);te(be.x,be.y,u+ee)}for(let Se=0,pe=N.length;Se<pe;Se++){let be=N[Se];De=Pe[Se];for(let je=0,Je=be.length;je<Je;je++){let A=G(be[je],De[je],se);x?te(A.x,A.y+y[h-1].y,y[h-1].x+ee):te(A.x,A.y,u+ee)}}}ie(),le();function ie(){let ce=s.length/3;if(d){let re=0,ee=de*re;for(let se=0;se<rt;se++){let Se=pt[se];Oe(Se[2]+ee,Se[1]+ee,Se[0]+ee)}re=h+m*2,ee=de*re;for(let se=0;se<rt;se++){let Se=pt[se];Oe(Se[0]+ee,Se[1]+ee,Se[2]+ee)}}else{for(let re=0;re<rt;re++){let ee=pt[re];Oe(ee[2],ee[1],ee[0])}for(let re=0;re<rt;re++){let ee=pt[re];Oe(ee[0]+de*h,ee[1]+de*h,ee[2]+de*h)}}n.addGroup(ce,s.length/3-ce,0)}function le(){let ce=s.length/3,re=0;Ue(j,re),re+=j.length;for(let ee=0,se=N.length;ee<se;ee++){let Se=N[ee];Ue(Se,re),re+=Se.length}n.addGroup(ce,s.length/3-ce,1)}function Ue(ce,re){let ee=ce.length;for(;--ee>=0;){let se=ee,Se=ee-1;Se<0&&(Se=ce.length-1);for(let pe=0,be=h+m*2;pe<be;pe++){let je=de*pe,Je=de*(pe+1),A=re+se+je,v=re+Se+je,H=re+Se+Je,$=re+se+Je;at(A,v,H,$)}}}function te(ce,re,ee){l.push(ce),l.push(re),l.push(ee)}function Oe(ce,re,ee){Pt(ce),Pt(re),Pt(ee);let se=s.length/3,Se=w.generateTopUV(n,s,se-3,se-2,se-1);L(Se[0]),L(Se[1]),L(Se[2])}function at(ce,re,ee,se){Pt(ce),Pt(re),Pt(se),Pt(re),Pt(ee),Pt(se);let Se=s.length/3,pe=w.generateSideWallUV(n,s,Se-6,Se-3,Se-2,Se-1);L(pe[0]),L(pe[1]),L(pe[3]),L(pe[1]),L(pe[2]),L(pe[3])}function Pt(ce){s.push(l[ce*3+0]),s.push(l[ce*3+1]),s.push(l[ce*3+2])}function L(ce){r.push(ce.x),r.push(ce.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lp(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new yo[s.type]().fromJSON(s)),new i(n,e.options)}},op={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new oe(r,a),new oe(o,l),new oe(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new oe(a,1-l),new oe(c,1-u),new oe(d,1-g),new oe(_,1-p)]:[new oe(o,1-l),new oe(h,1-u),new oe(f,1-g),new oe(m,1-p)]}};function lp(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ws=class i extends Nt{constructor(e=[new oe(0,-.5),new oe(.5,0),new oe(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=lt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new C,d=new oe,f=new C,g=new C,_=new C,m=0,p=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(_.x,_.y,_.z);break;default:m=e[w+1].x-e[w].x,p=e[w+1].y-e[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=t;w++){let y=n+w*h*s,x=Math.sin(y),I=Math.cos(y);for(let P=0;P<=e.length-1;P++){u.x=e[P].x*x,u.y=e[P].y,u.z=e[P].x*I,a.push(u.x,u.y,u.z),d.x=w/t,d.y=P/(e.length-1),o.push(d.x,d.y);let D=l[3*P+0]*x,U=l[3*P+1],b=l[3*P+0]*I;c.push(D,U,b)}}for(let w=0;w<t;w++)for(let y=0;y<e.length-1;y++){let x=y+w*e.length,I=x,P=x+e.length,D=x+e.length+1,U=x+1;r.push(I,P,U),r.push(D,U,P)}this.setIndex(r),this.setAttribute("position",new dt(a,3)),this.setAttribute("uv",new dt(o,2)),this.setAttribute("normal",new dt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},$i=class i extends mo{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},hn=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){let w=p*d-a;for(let y=0;y<c;y++){let x=y*u-r;g.push(x,-w,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let y=w+c*p,x=w+c*(p+1),I=w+1+c*(p+1),P=w+1+c*p;f.push(y,x,P),f.push(x,I,P)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ji=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new C,d=new C,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let w=[],y=p/n,x=0;p===0&&a===0?x=.5/t:p===n&&l===Math.PI&&(x=-.5/t);for(let I=0;I<=t;I++){let P=I/t;u.x=-e*Math.cos(s+P*r)*Math.sin(a+y*o),u.y=e*Math.cos(a+y*o),u.z=e*Math.sin(s+P*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(P+x,1-y),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){let y=h[p][w+1],x=h[p][w],I=h[p+1][w],P=h[p+1][w+1];(p!==0||a>0)&&f.push(y,x,P),(p!==n-1||l<Math.PI)&&f.push(x,I,P)}this.setIndex(f),this.setAttribute("position",new dt(g,3)),this.setAttribute("normal",new dt(_,3)),this.setAttribute("uv",new dt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ea=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new C,u=new C,d=new C;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let _=g/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(_,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new dt(o,3)),this.setAttribute("normal",new dt(l,3)),this.setAttribute("uv",new dt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ta=class i extends Nt{constructor(e=new Yi(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new oe,h=new C,u=[],d=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new dt(u,3)),this.setAttribute("normal",new dt(d,3)),this.setAttribute("uv",new dt(f,2));function _(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),w(),p()}function m(y){h=e.getPointAt(y/t,h);let x=a.normals[y],I=a.binormals[y];for(let P=0;P<=s;P++){let D=P/s*Math.PI*2,U=Math.sin(D),b=-Math.cos(D);l.x=b*x.x+U*I.x,l.y=b*x.y+U*I.y,l.z=b*x.z+U*I.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=t;y++)for(let x=1;x<=s;x++){let I=(s+1)*(y-1)+(x-1),P=(s+1)*y+(x-1),D=(s+1)*y+x,U=(s+1)*(y-1)+x;g.push(I,P,U),g.push(P,D,U)}}function w(){for(let y=0;y<=t;y++)for(let x=0;x<=s;x++)c.x=y/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var na=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qc,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ia=class extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return lt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var So=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bo=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ka(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ki=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eo=class extends Ki{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Mc,endingEnd:Mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Sc:r=e,o=2*t-n;break;case bc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Sc:a=e,l=2*n-t;break;case bc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,w=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*_+.5*g,x=f*m-f*_;for(let I=0;I!==o;++I)r[I]=p*a[h+I]+w*a[c+I]+y*a[l+I]+x*a[u+I];return r}},To=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},wo=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ka(t,this.TimeBufferType),this.values=Ka(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ka(e.times,Array),values:Ka(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ar:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case Qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ar;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return Qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=no;var Ri=class extends yn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Ar;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Ao.prototype.ValueTypeName="color";var Ro=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Ro.prototype.ValueTypeName="number";var Co=class extends Ki{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)fi.slerpFlat(r,0,a,c-o,a,c,l);return r}},sa=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};sa.prototype.ValueTypeName="quaternion";sa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends yn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ar;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};Po.prototype.ValueTypeName="vector";var Io=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},rd=new Io,Lo=class{constructor(e){this.manager=e!==void 0?e:rd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Lo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qi=class extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ra=class extends Qi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},xc=new Tt,fu=new C,pu=new C,Do=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Os,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),xc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var mu=new Tt,Mr=new C,yc=new C,Cc=class extends Do{constructor(){super(new Qt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Ct(2,1,1,1),new Ct(0,1,1,1),new Ct(3,1,1,1),new Ct(1,1,1,1),new Ct(3,0,1,1),new Ct(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Mr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mr),yc.copy(n.position),yc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(yc),n.updateMatrixWorld(),s.makeTranslation(-Mr.x,-Mr.y,-Mr.z),mu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mu,n.coordinateSystem,n.reversedDepth)}},jn=class extends Qi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Cc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ji=class extends Ur{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Pc=class extends Do{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xs=class extends Qi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new Pc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},aa=class extends Qi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Uo=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},es=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var jc="\\[\\]\\.:\\/",hp=new RegExp("["+jc+"]","g"),eh="[^"+jc+"]",up="[^"+jc.replace("\\.","")+"]",dp=/((?:WC+[\/:])*)/.source.replace("WC",eh),fp=/(WCOD+)?/.source.replace("WCOD",up),pp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eh),mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eh),gp=new RegExp("^"+dp+fp+pp+mp+"$"),_p=["material","materials","bones","map"],Ic=class{constructor(e,t,n){let s=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hp,"")}static parseTrackName(e){let t=gp.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);_p.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Ic;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nv=new Float32Array(1);var gu=new Tt,oa=class{constructor(e,t,n=0,s=1/0){this.ray=new Wi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(e,t=!0,n=[]){return Lc(e,this,n,t),n.sort(_u),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Lc(e[s],this,n,t);return n.sort(_u),n}};function _u(i,e){return i.distance-e.distance}function Lc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Lc(r[a],e,t,!0)}}function th(i,e,t,n){let s=vp(n);switch(t){case Gc:return i*e;case el:return i*e/s.components*s.byteLength;case tl:return i*e/s.components*s.byteLength;case Xc:return i*e*2/s.components*s.byteLength;case nl:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case il:return i*e*4/s.components*s.byteLength;case ha:case ua:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case da:case fa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:case ol:return Math.max(i,16)*Math.max(e,8)/4;case sl:case al:return Math.max(i,8)*Math.max(e,8)/2;case ll:case cl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case hl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case pl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ml:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case gl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Tl:case wl:case Al:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function vp(i){switch(i){case Vn:case zc:return{byteLength:1,components:1};case Zs:case kc:case Rn:return{byteLength:2,components:1};case Qo:case jo:return{byteLength:2,components:4};case Ii:case Ko:case Gn:return{byteLength:4,components:1};case Hc:case Vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Cd(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function yp(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Mp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sp=`#ifdef USE_ALPHAHASH
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
#endif`,bp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ep=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ap=`#ifdef USE_AOMAP
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
#endif`,Rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
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
#endif`,Pp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Up=`#ifdef USE_IRIDESCENCE
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
#endif`,Np=`#ifdef USE_BUMPMAP
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
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Wp=`#define PI 3.141592653589793
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
} // validated`,Xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jp=`#ifdef USE_ENVMAP
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
#endif`,em=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,im=`#ifdef USE_ENVMAP
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
#endif`,sm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,am=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,om=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lm=`#ifdef USE_GRADIENTMAP
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
}`,cm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dm=`uniform bool receiveShadow;
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
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vm=`PhysicalMaterial material;
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
#endif`,xm=`struct PhysicalMaterial {
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
}`,ym=`
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
#endif`,Mm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Sm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Em=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Am=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pm=`#if defined( USE_POINTS_UV )
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
#endif`,Im=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Um=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fm=`#ifdef USE_MORPHTARGETS
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
#endif`,Bm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Om=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gm=`#ifdef USE_NORMALMAP
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
#endif`,Wm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ng=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rg=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,og=`#ifdef USE_SKINNING
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
#endif`,lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cg=`#ifdef USE_SKINNING
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
#endif`,hg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ug=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,pg=`#ifdef USE_TRANSMISSION
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
#endif`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_g=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mg=`uniform sampler2D t2D;
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
}`,Sg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wg=`#include <common>
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
}`,Ag=`#if DEPTH_PACKING == 3200
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
}`,Rg=`#define DISTANCE
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
}`,Cg=`#define DISTANCE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ig=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lg=`uniform float scale;
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
}`,Dg=`uniform vec3 diffuse;
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
}`,Ug=`#include <common>
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
}`,Ng=`uniform vec3 diffuse;
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
}`,Fg=`#define LAMBERT
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
}`,Bg=`#define LAMBERT
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
}`,Og=`#define MATCAP
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
}`,zg=`#define MATCAP
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
}`,kg=`#define NORMAL
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
}`,Hg=`#define NORMAL
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
}`,Vg=`#define PHONG
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
}`,Gg=`#define PHONG
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
}`,Wg=`#define STANDARD
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
}`,Xg=`#define STANDARD
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
}`,qg=`#define TOON
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
}`,Yg=`#define TOON
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
}`,Zg=`uniform float size;
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
}`,$g=`uniform vec3 diffuse;
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
}`,Jg=`#include <common>
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
}`,Kg=`uniform vec3 color;
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
}`,Qg=`uniform float rotation;
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
}`,jg=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:Mp,alphahash_pars_fragment:Sp,alphamap_fragment:bp,alphamap_pars_fragment:Ep,alphatest_fragment:Tp,alphatest_pars_fragment:wp,aomap_fragment:Ap,aomap_pars_fragment:Rp,batching_pars_vertex:Cp,batching_vertex:Pp,begin_vertex:Ip,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:Up,bumpmap_pars_fragment:Np,clipping_planes_fragment:Fp,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:Op,clipping_planes_vertex:zp,color_fragment:kp,color_pars_fragment:Hp,color_pars_vertex:Vp,color_vertex:Gp,common:Wp,cube_uv_reflection_fragment:Xp,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Zp,emissivemap_fragment:$p,emissivemap_pars_fragment:Jp,colorspace_fragment:Kp,colorspace_pars_fragment:Qp,envmap_fragment:jp,envmap_common_pars_fragment:em,envmap_pars_fragment:tm,envmap_pars_vertex:nm,envmap_physical_pars_fragment:fm,envmap_vertex:im,fog_vertex:sm,fog_pars_vertex:rm,fog_fragment:am,fog_pars_fragment:om,gradientmap_pars_fragment:lm,lightmap_pars_fragment:cm,lights_lambert_fragment:hm,lights_lambert_pars_fragment:um,lights_pars_begin:dm,lights_toon_fragment:pm,lights_toon_pars_fragment:mm,lights_phong_fragment:gm,lights_phong_pars_fragment:_m,lights_physical_fragment:vm,lights_physical_pars_fragment:xm,lights_fragment_begin:ym,lights_fragment_maps:Mm,lights_fragment_end:Sm,logdepthbuf_fragment:bm,logdepthbuf_pars_fragment:Em,logdepthbuf_pars_vertex:Tm,logdepthbuf_vertex:wm,map_fragment:Am,map_pars_fragment:Rm,map_particle_fragment:Cm,map_particle_pars_fragment:Pm,metalnessmap_fragment:Im,metalnessmap_pars_fragment:Lm,morphinstance_vertex:Dm,morphcolor_vertex:Um,morphnormal_vertex:Nm,morphtarget_pars_vertex:Fm,morphtarget_vertex:Bm,normal_fragment_begin:Om,normal_fragment_maps:zm,normal_pars_fragment:km,normal_pars_vertex:Hm,normal_vertex:Vm,normalmap_pars_fragment:Gm,clearcoat_normal_fragment_begin:Wm,clearcoat_normal_fragment_maps:Xm,clearcoat_pars_fragment:qm,iridescence_pars_fragment:Ym,opaque_fragment:Zm,packing:$m,premultiplied_alpha_fragment:Jm,project_vertex:Km,dithering_fragment:Qm,dithering_pars_fragment:jm,roughnessmap_fragment:eg,roughnessmap_pars_fragment:tg,shadowmap_pars_fragment:ng,shadowmap_pars_vertex:ig,shadowmap_vertex:sg,shadowmask_pars_fragment:rg,skinbase_vertex:ag,skinning_pars_vertex:og,skinning_vertex:lg,skinnormal_vertex:cg,specularmap_fragment:hg,specularmap_pars_fragment:ug,tonemapping_fragment:dg,tonemapping_pars_fragment:fg,transmission_fragment:pg,transmission_pars_fragment:mg,uv_pars_fragment:gg,uv_pars_vertex:_g,uv_vertex:vg,worldpos_vertex:xg,background_vert:yg,background_frag:Mg,backgroundCube_vert:Sg,backgroundCube_frag:bg,cube_vert:Eg,cube_frag:Tg,depth_vert:wg,depth_frag:Ag,distanceRGBA_vert:Rg,distanceRGBA_frag:Cg,equirect_vert:Pg,equirect_frag:Ig,linedashed_vert:Lg,linedashed_frag:Dg,meshbasic_vert:Ug,meshbasic_frag:Ng,meshlambert_vert:Fg,meshlambert_frag:Bg,meshmatcap_vert:Og,meshmatcap_frag:zg,meshnormal_vert:kg,meshnormal_frag:Hg,meshphong_vert:Vg,meshphong_frag:Gg,meshphysical_vert:Wg,meshphysical_frag:Xg,meshtoon_vert:qg,meshtoon_frag:Yg,points_vert:Zg,points_frag:$g,shadow_vert:Jg,shadow_frag:Kg,sprite_vert:Qg,sprite_frag:jg},Ce={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ti={basic:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:rn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:rn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:rn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:rn([Ce.points,Ce.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:rn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:rn([Ce.common,Ce.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:rn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:rn([Ce.sprite,Ce.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:rn([Ce.common,Ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:rn([Ce.lights,Ce.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};ti.physical={uniforms:rn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};var Ll={r:0,b:0,g:0},rs=new On,e0=new Tt;function t0(i,e,t,n,s,r,a){let o=new Xe(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function _(y){let x=!1,I=g(y);I===null?p(o,l):I&&I.isColor&&(p(I,1),x=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(y,x){let I=g(x);I&&(I.isCubeTexture||I.mapping===la)?(h===void 0&&(h=new yt(new Ai(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:ss(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,D,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),rs.copy(x.backgroundRotation),rs.x*=-1,rs.y*=-1,rs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(rs.y*=-1,rs.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(e0.makeRotationFromEuler(rs)),h.material.toneMapped=_t.getTransfer(I.colorSpace)!==Et,(u!==I||d!==I.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,f=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new yt(new hn(2,2),new Wt({name:"BackgroundMaterial",uniforms:ss(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=_t.getTransfer(I.colorSpace)!==Et,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,x){y.getRGB(Ll,Kc(i)),n.buffers.color.setClear(Ll.r,Ll.g,Ll.b,x,a)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:m,dispose:w}}function n0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,N,V,Z,Q){let j=!1,G=u(Z,V,N);r!==G&&(r=G,c(r.object)),j=f(M,Z,V,Q),j&&g(M,Z,V,Q),Q!==null&&e.update(Q,i.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,x(M,N,V,Z),Q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,N,V){let Z=V.wireframe===!0,Q=n[M.id];Q===void 0&&(Q={},n[M.id]=Q);let j=Q[N.id];j===void 0&&(j={},Q[N.id]=j);let G=j[Z];return G===void 0&&(G=d(l()),j[Z]=G),G}function d(M){let N=[],V=[],Z=[];for(let Q=0;Q<t;Q++)N[Q]=0,V[Q]=0,Z[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:V,attributeDivisors:Z,object:M,attributes:{},index:null}}function f(M,N,V,Z){let Q=r.attributes,j=N.attributes,G=0,de=V.getAttributes();for(let J in de)if(de[J].location>=0){let Pe=Q[J],De=j[J];if(De===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(De=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(De=M.instanceColor)),Pe===void 0||Pe.attribute!==De||De&&Pe.data!==De.data)return!0;G++}return r.attributesNum!==G||r.index!==Z}function g(M,N,V,Z){let Q={},j=N.attributes,G=0,de=V.getAttributes();for(let J in de)if(de[J].location>=0){let Pe=j[J];Pe===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(Pe=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(Pe=M.instanceColor));let De={};De.attribute=Pe,Pe&&Pe.data&&(De.data=Pe.data),Q[J]=De,G++}r.attributes=Q,r.attributesNum=G,r.index=Z}function _(){let M=r.newAttributes;for(let N=0,V=M.length;N<V;N++)M[N]=0}function m(M){p(M,0)}function p(M,N){let V=r.newAttributes,Z=r.enabledAttributes,Q=r.attributeDivisors;V[M]=1,Z[M]===0&&(i.enableVertexAttribArray(M),Z[M]=1),Q[M]!==N&&(i.vertexAttribDivisor(M,N),Q[M]=N)}function w(){let M=r.newAttributes,N=r.enabledAttributes;for(let V=0,Z=N.length;V<Z;V++)N[V]!==M[V]&&(i.disableVertexAttribArray(V),N[V]=0)}function y(M,N,V,Z,Q,j,G){G===!0?i.vertexAttribIPointer(M,N,V,Q,j):i.vertexAttribPointer(M,N,V,Z,Q,j)}function x(M,N,V,Z){_();let Q=Z.attributes,j=V.getAttributes(),G=N.defaultAttributeValues;for(let de in j){let J=j[de];if(J.location>=0){let Me=Q[de];if(Me===void 0&&(de==="instanceMatrix"&&M.instanceMatrix&&(Me=M.instanceMatrix),de==="instanceColor"&&M.instanceColor&&(Me=M.instanceColor)),Me!==void 0){let Pe=Me.normalized,De=Me.itemSize,tt=e.get(Me);if(tt===void 0)continue;let pt=tt.buffer,rt=tt.type,ut=tt.bytesPerElement,ie=rt===i.INT||rt===i.UNSIGNED_INT||Me.gpuType===Ko;if(Me.isInterleavedBufferAttribute){let le=Me.data,Ue=le.stride,te=Me.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<J.locationSize;Oe++)p(J.location+Oe,le.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<J.locationSize;Oe++)m(J.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Oe=0;Oe<J.locationSize;Oe++)y(J.location+Oe,De/J.locationSize,rt,Pe,Ue*ut,(te+De/J.locationSize*Oe)*ut,ie)}else{if(Me.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)p(J.location+le,Me.meshPerAttribute);M.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let le=0;le<J.locationSize;le++)m(J.location+le);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let le=0;le<J.locationSize;le++)y(J.location+le,De/J.locationSize,rt,Pe,De*ut,De/J.locationSize*le*ut,ie)}}else if(G!==void 0){let Pe=G[de];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(J.location,Pe);break;case 3:i.vertexAttrib3fv(J.location,Pe);break;case 4:i.vertexAttrib4fv(J.location,Pe);break;default:i.vertexAttrib1fv(J.location,Pe)}}}}w()}function I(){U();for(let M in n){let N=n[M];for(let V in N){let Z=N[V];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete N[V]}delete n[M]}}function P(M){if(n[M.id]===void 0)return;let N=n[M.id];for(let V in N){let Z=N[V];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete N[V]}delete n[M.id]}function D(M){for(let N in n){let V=n[N];if(V[M.id]===void 0)continue;let Z=V[M.id];for(let Q in Z)h(Z[Q].object),delete Z[Q];delete V[M.id]}}function U(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function i0(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function s0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Cn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let U=D===Rn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Vn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Gn&&!U)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:I,maxSamples:P}}function r0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Zn,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let w=r?0:n,y=w*4,x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let I=0;I!==y;++I)x[I]=t[I];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let p=f+_*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==_;++y,x+=4)a.copy(u[y]).applyMatrix4(w,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function a0(i){let e=new WeakMap;function t(a,o){return o===Ys?a.mapping=ts:o===$o&&(a.mapping=ns),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ys||o===$o)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new lo(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Qs=4,ad=[.125,.215,.35,.446,.526,.582],ls=20,nh=new ji,od=new Xe,ih=null,sh=0,rh=0,ah=!1,os=(1+Math.sqrt(5))/2,Ks=1/os,ld=[new C(-os,Ks,0),new C(os,Ks,0),new C(-Ks,0,os),new C(Ks,0,os),new C(0,os,-Ks),new C(0,os,Ks),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],o0=new C,er=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=o0}=r;ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ih,sh,rh),this._renderer.xr.enabled=ah,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ih=this._renderer.getRenderTarget(),sh=this._renderer.getActiveCubeFace(),rh=this._renderer.getActiveMipmapLevel(),ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Rn,format:Cn,colorSpace:Gi,depthBuffer:!1},s=cd(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=cd(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=l0(r)),this._blurMaterial=c0(r,e,t)}return s}_compileMaterial(e){let t=new yt(this._lodPlanes[0],e);this._renderer.compile(t,nh)}_sceneToCubeUV(e,t,n,s,r){let l=new Qt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(od),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let _=new Gt({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new yt(new Ai,_),p=!1,w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(od),p=!0);for(let y=0;y<6;y++){let x=y%3;x===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):x===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));let I=this._cubeSize;Dl(s,x*I,y>2?I:0,I,I),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=w}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ts||e.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new yt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Dl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ld[(s-r-1)%ld.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new yt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ls-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ls;m>ls&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);let p=[],w=0;for(let D=0;D<ls;++D){let U=D/_,b=Math.exp(-U*U/2);p.push(b),D===0?w+=b:D<m&&(w+=2*b)}for(let D=0;D<p.length;D++)p[D]=p[D]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let x=this._sizeLods[s],I=3*x*(s>y-Qs?s-y+Qs:0),P=4*(this._cubeSize-x);Dl(t,I,P,3*x,2*x),l.setRenderTarget(t),l.render(u,nh)}};function l0(i){let e=[],t=[],n=[],s=i,r=i-Qs+1+ad.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Qs?l=ad[a-i+Qs-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let P=0;P<f;P++){let D=P%3*2/3-1,U=P>2?0:-1,b=[D,U,0,D+2/3,U,0,D+2/3,U+1,0,D,U,0,D+2/3,U+1,0,D,U+1,0];w.set(b,_*g*P),y.set(d,m*g*P);let M=[P,P,P,P,P,P];x.set(M,p*g*P)}let I=new Nt;I.setAttribute("position",new Jt(w,_)),I.setAttribute("uv",new Jt(y,m)),I.setAttribute("faceIndex",new Jt(x,p)),e.push(I),s>Qs&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function cd(i,e,t){let n=new sn(i,e,t);return n.texture.mapping=la,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function c0(i,e,t){let n=new Float32Array(ls),s=new C(0,1,0);return new Wt({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function hd(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gh(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ud(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function gh(){return`

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
	`}function h0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ys||l===$o,h=l===ts||l===ns;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new er(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new er(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function u0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Us("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function d0(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,g=u.attributes.position,_=0;if(f!==null){let w=f.array;_=f.version;for(let y=0,x=w.length;y<x;y+=3){let I=w[y+0],P=w[y+1],D=w[y+2];d.push(I,P,P,D,D,I)}}else if(g!==void 0){let w=g.array;_=g.version;for(let y=0,x=w.length/3-1;y<x;y+=3){let I=y+0,P=y+1,D=y+2;d.push(I,P,P,D,D,I)}}else return;let m=new(Jc(d)?Dr:Lr)(d,1);m.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function f0(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function p0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,e,t){let n=new WeakMap,s=new Ct;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let b=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let x=o.attributes.position.count*y,I=1;x>e.maxTextureSize&&(I=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let P=new Float32Array(x*I*4*u),D=new Ir(P,x,I,u);D.type=Gn,D.needsUpdate=!0;let U=y*4;for(let M=0;M<u;M++){let N=m[M],V=p[M],Z=w[M],Q=x*I*4*M;for(let j=0;j<N.count;j++){let G=j*U;f===!0&&(s.fromBufferAttribute(N,j),P[Q+G+0]=s.x,P[Q+G+1]=s.y,P[Q+G+2]=s.z,P[Q+G+3]=0),g===!0&&(s.fromBufferAttribute(V,j),P[Q+G+4]=s.x,P[Q+G+5]=s.y,P[Q+G+6]=s.z,P[Q+G+7]=0),_===!0&&(s.fromBufferAttribute(Z,j),P[Q+G+8]=s.x,P[Q+G+9]=s.y,P[Q+G+10]=s.z,P[Q+G+11]=Z.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new oe(x,I)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function g0(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Pd=new cn,dd=new Vr(1,1),Id=new Ir,Ld=new ao,Dd=new Nr,fd=[],pd=[],md=new Float32Array(16),gd=new Float32Array(9),_d=new Float32Array(4);function tr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function qt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fl(i,e){let t=pd[e];t===void 0&&(t=new Int32Array(e),pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function x0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(qt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function y0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function M0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;_d.set(n),i.uniformMatrix2fv(this.addr,!1,_d),Yt(t,n)}}function S0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;gd.set(n),i.uniformMatrix3fv(this.addr,!1,gd),Yt(t,n)}}function b0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(qt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(qt(t,n))return;md.set(n),i.uniformMatrix4fv(this.addr,!1,md),Yt(t,n)}}function E0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function T0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function w0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function A0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function R0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function C0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(qt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function P0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(qt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function I0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(qt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function L0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(dd.compareFunction=Yc,r=dd):r=Pd,t.setTexture2D(e||r,s)}function D0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Ld,s)}function U0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Dd,s)}function N0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Id,s)}function F0(i){switch(i){case 5126:return _0;case 35664:return v0;case 35665:return x0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return E0;case 35667:case 35671:return T0;case 35668:case 35672:return w0;case 35669:case 35673:return A0;case 5125:return R0;case 36294:return C0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return D0;case 35680:case 36300:case 36308:case 36293:return U0;case 36289:case 36303:case 36311:case 36292:return N0}}function B0(i,e){i.uniform1fv(this.addr,e)}function O0(i,e){let t=tr(e,this.size,2);i.uniform2fv(this.addr,t)}function z0(i,e){let t=tr(e,this.size,3);i.uniform3fv(this.addr,t)}function k0(i,e){let t=tr(e,this.size,4);i.uniform4fv(this.addr,t)}function H0(i,e){let t=tr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function V0(i,e){let t=tr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function G0(i,e){let t=tr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function W0(i,e){i.uniform1iv(this.addr,e)}function X0(i,e){i.uniform2iv(this.addr,e)}function q0(i,e){i.uniform3iv(this.addr,e)}function Y0(i,e){i.uniform4iv(this.addr,e)}function Z0(i,e){i.uniform1uiv(this.addr,e)}function $0(i,e){i.uniform2uiv(this.addr,e)}function J0(i,e){i.uniform3uiv(this.addr,e)}function K0(i,e){i.uniform4uiv(this.addr,e)}function Q0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Pd,r[a])}function j0(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Ld,r[a])}function e_(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Dd,r[a])}function t_(i,e,t){let n=this.cache,s=e.length,r=Fl(t,s);qt(n,r)||(i.uniform1iv(this.addr,r),Yt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Id,r[a])}function n_(i){switch(i){case 5126:return B0;case 35664:return O0;case 35665:return z0;case 35666:return k0;case 35674:return H0;case 35675:return V0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return X0;case 35668:case 35672:return q0;case 35669:case 35673:return Y0;case 5125:return Z0;case 36294:return $0;case 36295:return J0;case 36296:return K0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return t_}}var lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=F0(t.type)}},ch=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=n_(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},oh=/(\w+)(\])?(\[|\.)?/g;function vd(i,e){i.seq.push(e),i.map[e.id]=e}function i_(i,e,t){let n=i.name,s=n.length;for(oh.lastIndex=0;;){let r=oh.exec(n),a=oh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vd(t,c===void 0?new lh(o,i,e):new ch(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new hh(o),vd(t,u)),t=u}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);i_(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function xd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var s_=37297,r_=0;function a_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var yd=new st;function o_(i){_t._getMatrix(yd,_t.workingColorSpace,i);let e=`mat3( ${yd.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Rr:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Md(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+a_(i.getShaderSource(e),o)}else return r}function l_(i,e){let t=o_(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c_(i,e){let t;switch(e){case Go:t="Linear";break;case Wo:t="Reinhard";break;case Xo:t="Cineon";break;case qs:t="ACESFilmic";break;case Yo:t="AgX";break;case Zo:t="Neutral";break;case qo:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ul=new C;function h_(){_t.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function d_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function pa(i){return i!==""}function Sd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var p_=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(i){return i.replace(p_,g_)}var m_=new Map;function g_(i,e){let t=ct[e];if(t===void 0){let n=m_.get(e);if(n!==void 0)t=ct[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}var __=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(__,v_)}function v_(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Td(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function x_(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===No?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function y_(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case la:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M_(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ns&&(e="ENVMAP_MODE_REFRACTION"),e}function S_(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ou:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function b_(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=x_(t),c=y_(t),h=M_(t),u=S_(t),d=b_(t),f=u_(t),g=d_(r),_=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(pa).join(`
`),p.length>0&&(p+=`
`)):(m=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),p=[Td(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?ct.tonemapping_pars_fragment:"",t.toneMapping!==mi?c_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,l_("linearToOutputTexel",t.outputColorSpace),h_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(pa).join(`
`)),a=uh(a),a=Sd(a,t),a=bd(a,t),o=uh(o),o=Sd(o,t),o=bd(o,t),a=Ed(a),o=Ed(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=w+m+a,x=w+p+o,I=xd(s,s.VERTEX_SHADER,y),P=xd(s,s.FRAGMENT_SHADER,x);s.attachShader(_,I),s.attachShader(_,P),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function D(N){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(_)||"",Z=s.getShaderInfoLog(I)||"",Q=s.getShaderInfoLog(P)||"",j=V.trim(),G=Z.trim(),de=Q.trim(),J=!0,Me=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,I,P);else{let Pe=Md(s,I,"vertex"),De=Md(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+j+`
`+Pe+`
`+De)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(G===""||de==="")&&(Me=!1);Me&&(N.diagnostics={runnable:J,programLog:j,vertexShader:{log:G,prefix:m},fragmentShader:{log:de,prefix:p}})}s.deleteShader(I),s.deleteShader(P),U=new js(s,_),b=f_(s,_)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,s_)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r_++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=I,this.fragmentShader=P,this}var T_=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fh(e),t.set(e,n)),n}},fh=class{constructor(e){this.id=T_++,this.code=e,this.usedTimes=0}};function w_(i,e,t,n,s,r,a){let o=new Fs,l=new dh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,N,V,Z){let Q=V.fog,j=Z.geometry,G=b.isMeshStandardMaterial?V.environment:null,de=(b.isMeshStandardMaterial?t:e).get(b.envMap||G),J=de&&de.mapping===la?de.image.height:null,Me=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let Pe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,De=Pe!==void 0?Pe.length:0,tt=0;j.morphAttributes.position!==void 0&&(tt=1),j.morphAttributes.normal!==void 0&&(tt=2),j.morphAttributes.color!==void 0&&(tt=3);let pt,rt,ut,ie;if(Me){let T=ti[Me];pt=T.vertexShader,rt=T.fragmentShader}else pt=b.vertexShader,rt=b.fragmentShader,l.update(b),ut=l.getVertexShaderID(b),ie=l.getFragmentShaderID(b);let le=i.getRenderTarget(),Ue=i.state.buffers.depth.getReversed(),te=Z.isInstancedMesh===!0,Oe=Z.isBatchedMesh===!0,at=!!b.map,Pt=!!b.matcap,L=!!de,ce=!!b.aoMap,re=!!b.lightMap,ee=!!b.bumpMap,se=!!b.normalMap,Se=!!b.displacementMap,pe=!!b.emissiveMap,be=!!b.metalnessMap,je=!!b.roughnessMap,Je=b.anisotropy>0,A=b.clearcoat>0,v=b.dispersion>0,H=b.iridescence>0,$=b.sheen>0,he=b.transmission>0,K=Je&&!!b.anisotropyMap,q=A&&!!b.clearcoatMap,me=A&&!!b.clearcoatNormalMap,Fe=A&&!!b.clearcoatRoughnessMap,ye=H&&!!b.iridescenceMap,ne=H&&!!b.iridescenceThicknessMap,fe=$&&!!b.sheenColorMap,Ye=$&&!!b.sheenRoughnessMap,He=!!b.specularMap,Re=!!b.specularColorMap,nt=!!b.specularIntensityMap,B=he&&!!b.transmissionMap,ve=he&&!!b.thicknessMap,Ee=!!b.gradientMap,Ne=!!b.alphaMap,ge=b.alphaTest>0,ae=!!b.alphaHash,ze=!!b.extensions,et=mi;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(et=i.toneMapping);let E={shaderID:Me,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:rt,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Oe,batchingColor:Oe&&Z._colorsTexture!==null,instancing:te,instancingColor:te&&Z.instanceColor!==null,instancingMorph:te&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?i.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Gi,alphaToCoverage:!!b.alphaToCoverage,map:at,matcap:Pt,envMap:L,envMapMode:L&&de.mapping,envMapCubeUVHeight:J,aoMap:ce,lightMap:re,bumpMap:ee,normalMap:se,displacementMap:d&&Se,emissiveMap:pe,normalMapObjectSpace:se&&b.normalMapType===Gu,normalMapTangentSpace:se&&b.normalMapType===qc,metalnessMap:be,roughnessMap:je,anisotropy:Je,anisotropyMap:K,clearcoat:A,clearcoatMap:q,clearcoatNormalMap:me,clearcoatRoughnessMap:Fe,dispersion:v,iridescence:H,iridescenceMap:ye,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:fe,sheenRoughnessMap:Ye,specularMap:He,specularColorMap:Re,specularIntensityMap:nt,transmission:he,transmissionMap:B,thicknessMap:ve,gradientMap:Ee,opaque:b.transparent===!1&&b.blending===ui&&b.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ge,alphaHash:ae,combine:b.combine,mapUv:at&&_(b.map.channel),aoMapUv:ce&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:ee&&_(b.bumpMap.channel),normalMapUv:se&&_(b.normalMap.channel),displacementMapUv:Se&&_(b.displacementMap.channel),emissiveMapUv:pe&&_(b.emissiveMap.channel),metalnessMapUv:be&&_(b.metalnessMap.channel),roughnessMapUv:je&&_(b.roughnessMap.channel),anisotropyMapUv:K&&_(b.anisotropyMap.channel),clearcoatMapUv:q&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&_(b.sheenRoughnessMap.channel),specularMapUv:He&&_(b.specularMap.channel),specularColorMapUv:Re&&_(b.specularColorMap.channel),specularIntensityMapUv:nt&&_(b.specularIntensityMap.channel),transmissionMapUv:B&&_(b.transmissionMap.channel),thicknessMapUv:ve&&_(b.thicknessMap.channel),alphaMapUv:Ne&&_(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(se||Je),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(at||Ne),fog:!!Q,useFog:b.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ue,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:at&&b.map.isVideoTexture===!0&&_t.getTransfer(b.map.colorSpace)===Et,decodeVideoTextureEmissive:pe&&b.emissiveMap.isVideoTexture===!0&&_t.getTransfer(b.emissiveMap.colorSpace)===Et,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===wt,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return E.vertexUv1s=c.has(1),E.vertexUv2s=c.has(2),E.vertexUv3s=c.has(3),c.clear(),E}function p(b){let M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(let N in b.defines)M.push(N),M.push(b.defines[N]);return b.isRawShaderMaterial===!1&&(w(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function w(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function x(b){let M=g[b.type],N;if(M){let V=ti[M];N=gi.clone(V.uniforms)}else N=b.uniforms;return N}function I(b,M){let N;for(let V=0,Z=h.length;V<Z;V++){let Q=h[V];if(Q.cacheKey===M){N=Q,++N.usedTimes;break}}return N===void 0&&(N=new E_(i,M,b,r),h.push(N)),N}function P(b){if(--b.usedTimes===0){let M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function D(b){l.remove(b)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:I,releaseProgram:P,releaseShaderCache:D,programs:h,dispose:U}}function A_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function R_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ad(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,g,_,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function o(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,_,m){let p=a(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||R_),n.length>1&&n.sort(d||wd),s.length>1&&s.sort(d||wd)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function C_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Ad,i.set(n,[a])):s>=r.length?(a=new Ad,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function P_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Xe};break;case"SpotLight":t={position:new C,direction:new C,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function I_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var L_=0;function D_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function U_(i){let e=new P_,t=I_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new Tt,a=new Tt;function o(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,y=0,x=0,I=0,P=0,D=0;c.sort(D_);for(let b=0,M=c.length;b<M;b++){let N=c[b],V=N.color,Z=N.intensity,Q=N.distance,j=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=V.r*Z,u+=V.g*Z,d+=V.b*Z;else if(N.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(N.sh.coefficients[G],Z);D++}else if(N.isDirectionalLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let de=N.shadow,J=t.get(N);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,n.directionalShadow[f]=J,n.directionalShadowMap[f]=j,n.directionalShadowMatrix[f]=N.shadow.matrix,w++}n.directional[f]=G,f++}else if(N.isSpotLight){let G=e.get(N);G.position.setFromMatrixPosition(N.matrixWorld),G.color.copy(V).multiplyScalar(Z),G.distance=Q,G.coneCos=Math.cos(N.angle),G.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),G.decay=N.decay,n.spot[_]=G;let de=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,de.updateMatrices(N),N.castShadow&&P++),n.spotLightMatrix[_]=de.matrix,N.castShadow){let J=t.get(N);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,n.spotShadow[_]=J,n.spotShadowMap[_]=j,x++}_++}else if(N.isRectAreaLight){let G=e.get(N);G.color.copy(V).multiplyScalar(Z),G.halfWidth.set(N.width*.5,0,0),G.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=G,m++}else if(N.isPointLight){let G=e.get(N);if(G.color.copy(N.color).multiplyScalar(N.intensity),G.distance=N.distance,G.decay=N.decay,N.castShadow){let de=N.shadow,J=t.get(N);J.shadowIntensity=de.intensity,J.shadowBias=de.bias,J.shadowNormalBias=de.normalBias,J.shadowRadius=de.radius,J.shadowMapSize=de.mapSize,J.shadowCameraNear=de.camera.near,J.shadowCameraFar=de.camera.far,n.pointShadow[g]=J,n.pointShadowMap[g]=j,n.pointShadowMatrix[g]=N.shadow.matrix,y++}n.point[g]=G,g++}else if(N.isHemisphereLight){let G=e.get(N);G.skyColor.copy(N.color).multiplyScalar(Z),G.groundColor.copy(N.groundColor).multiplyScalar(Z),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==p||U.numDirectionalShadows!==w||U.numPointShadows!==y||U.numSpotShadows!==x||U.numSpotMaps!==I||U.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+I-P,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=D,U.directionalLength=f,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=p,U.numDirectionalShadows=w,U.numPointShadows=y,U.numSpotShadows=x,U.numSpotMaps=I,U.numLightProbes=D,n.version=L_++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0,m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){let y=c[p];if(y.isDirectionalLight){let x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(y.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let x=n.hemi[_];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Rd(i){let e=new U_(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function N_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Rd(i),e.set(s,[o])):r>=a.length?(o=new Rd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var F_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
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
}`;function O_(i,e,t){let n=new Os,s=new oe,r=new oe,a=new Ct,o=new So({depthPacking:Vu}),l=new bo,c={},h=t.maxTextureSize,u={[hi]:jt,[jt]:hi,[wt]:wt},d=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:F_,fragmentShader:B_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let p=this.type;this.render=function(P,D,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;let b=i.getRenderTarget(),M=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Hn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let Z=p!==ei&&this.type===ei,Q=p===ei&&this.type!==ei;for(let j=0,G=P.length;j<G;j++){let de=P[j],J=de.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let Me=J.getFrameExtents();if(s.multiply(Me),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Me.x),s.x=r.x*Me.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Me.y),s.y=r.y*Me.y,J.mapSize.y=r.y)),J.map===null||Z===!0||Q===!0){let De=this.type!==ei?{minFilter:fn,magFilter:fn}:{};J.map!==null&&J.map.dispose(),J.map=new sn(s.x,s.y,De),J.map.texture.name=de.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();let Pe=J.getViewportCount();for(let De=0;De<Pe;De++){let tt=J.getViewport(De);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),V.viewport(a),J.updateMatrices(de,De),n=J.getFrustum(),x(D,U,J.camera,de,this.type)}J.isPointLightShadow!==!0&&this.type===ei&&w(J,U),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,N)};function w(P,D){let U=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new sn(s.x,s.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(D,null,U,d,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(D,null,U,f,_,null)}function y(P,D,U,b){let M=null,N=U.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(N!==void 0)M=N;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=M.uuid,Z=D.uuid,Q=c[V];Q===void 0&&(Q={},c[V]=Q);let j=Q[Z];j===void 0&&(j=M.clone(),Q[Z]=j,D.addEventListener("dispose",I)),M=j}if(M.visible=D.visible,M.wireframe=D.wireframe,b===ei?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:u[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let V=i.properties.get(M);V.light=U}return M}function x(P,D,U,b,M){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===ei)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,P.matrixWorld);let Z=e.update(P),Q=P.material;if(Array.isArray(Q)){let j=Z.groups;for(let G=0,de=j.length;G<de;G++){let J=j[G],Me=Q[J.materialIndex];if(Me&&Me.visible){let Pe=y(P,Me,b,M);P.onBeforeShadow(i,P,D,U,Z,Pe,J),i.renderBufferDirect(U,null,Z,Pe,P,J),P.onAfterShadow(i,P,D,U,Z,Pe,J)}}}else if(Q.visible){let j=y(P,Q,b,M);P.onBeforeShadow(i,P,D,U,Z,j,null),i.renderBufferDirect(U,null,Z,j,P,null),P.onAfterShadow(i,P,D,U,Z,j,null)}}let V=P.children;for(let Z=0,Q=V.length;Z<Q;Z++)x(V[Z],D,U,b,M)}function I(P){P.target.removeEventListener("dispose",I);for(let U in c){let b=c[U],M=P.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}var z_={[Fo]:Bo,[Oo]:Ho,[zo]:Vo,[Hi]:ko,[Bo]:Fo,[Ho]:Oo,[Vo]:zo,[ko]:Hi};function k_(i,e){function t(){let B=!1,ve=new Ct,Ee=null,Ne=new Ct(0,0,0,0);return{setMask:function(ge){Ee!==ge&&!B&&(i.colorMask(ge,ge,ge,ge),Ee=ge)},setLocked:function(ge){B=ge},setClear:function(ge,ae,ze,et,E){E===!0&&(ge*=et,ae*=et,ze*=et),ve.set(ge,ae,ze,et),Ne.equals(ve)===!1&&(i.clearColor(ge,ae,ze,et),Ne.copy(ve))},reset:function(){B=!1,Ee=null,Ne.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,Ee=null,Ne=null,ge=null;return{setReversed:function(ae){if(ve!==ae){let ze=e.get("EXT_clip_control");ae?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),ve=ae;let et=ge;ge=null,this.setClear(et)}},getReversed:function(){return ve},setTest:function(ae){ae?le(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(ae){Ee!==ae&&!B&&(i.depthMask(ae),Ee=ae)},setFunc:function(ae){if(ve&&(ae=z_[ae]),Ne!==ae){switch(ae){case Fo:i.depthFunc(i.NEVER);break;case Bo:i.depthFunc(i.ALWAYS);break;case Oo:i.depthFunc(i.LESS);break;case Hi:i.depthFunc(i.LEQUAL);break;case zo:i.depthFunc(i.EQUAL);break;case ko:i.depthFunc(i.GEQUAL);break;case Ho:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=ae}},setLocked:function(ae){B=ae},setClear:function(ae){ge!==ae&&(ve&&(ae=1-ae),i.clearDepth(ae),ge=ae)},reset:function(){B=!1,Ee=null,Ne=null,ge=null,ve=!1}}}function s(){let B=!1,ve=null,Ee=null,Ne=null,ge=null,ae=null,ze=null,et=null,E=null;return{setTest:function(T){B||(T?le(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(T){ve!==T&&!B&&(i.stencilMask(T),ve=T)},setFunc:function(T,F,ue){(Ee!==T||Ne!==F||ge!==ue)&&(i.stencilFunc(T,F,ue),Ee=T,Ne=F,ge=ue)},setOp:function(T,F,ue){(ae!==T||ze!==F||et!==ue)&&(i.stencilOp(T,F,ue),ae=T,ze=F,et=ue)},setLocked:function(T){B=T},setClear:function(T){E!==T&&(i.clearStencil(T),E=T)},reset:function(){B=!1,ve=null,Ee=null,Ne=null,ge=null,ae=null,ze=null,et=null,E=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,y=null,x=null,I=null,P=null,D=new Xe(0,0,0),U=0,b=!1,M=null,N=null,V=null,Z=null,Q=null,j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,de=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(J)[1]),G=de>=1):J.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),G=de>=2);let Me=null,Pe={},De=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),pt=new Ct().fromArray(De),rt=new Ct().fromArray(tt);function ut(B,ve,Ee,Ne){let ge=new Uint8Array(4),ae=i.createTexture();i.bindTexture(B,ae),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ze=0;ze<Ee;ze++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(ve,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(ve+ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ae}let ie={};ie[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(i.DEPTH_TEST),a.setFunc(Hi),ee(!1),se(Dc),le(i.CULL_FACE),ce(Hn);function le(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function Ue(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function te(B,ve){return u[B]!==ve?(i.bindFramebuffer(B,ve),u[B]=ve,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ve),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ve),!0):!1}function Oe(B,ve){let Ee=f,Ne=!1;if(B){Ee=d.get(ve),Ee===void 0&&(Ee=[],d.set(ve,Ee));let ge=B.textures;if(Ee.length!==ge.length||Ee[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,ze=ge.length;ae<ze;ae++)Ee[ae]=i.COLOR_ATTACHMENT0+ae;Ee.length=ge.length,Ne=!0}}else Ee[0]!==i.BACK&&(Ee[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(Ee)}function at(B){return g!==B?(i.useProgram(B),g=B,!0):!1}let Pt={[wi]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[Su]:i.FUNC_REVERSE_SUBTRACT};Pt[bu]=i.MIN,Pt[Eu]=i.MAX;let L={[Tu]:i.ZERO,[wu]:i.ONE,[Au]:i.SRC_COLOR,[ja]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Ru]:i.ONE_MINUS_SRC_COLOR,[eo]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Pu]:i.ONE_MINUS_DST_ALPHA,[Uu]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function ce(B,ve,Ee,Ne,ge,ae,ze,et,E,T){if(B===Hn){_===!0&&(Ue(i.BLEND),_=!1);return}if(_===!1&&(le(i.BLEND),_=!0),B!==yu){if(B!==m||T!==b){if((p!==wi||x!==wi)&&(i.blendEquation(i.FUNC_ADD),p=wi,x=wi),T)switch(B){case ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFunc(i.ONE,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Fc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}w=null,y=null,I=null,P=null,D.set(0,0,0),U=0,m=B,b=T}return}ge=ge||ve,ae=ae||Ee,ze=ze||Ne,(ve!==p||ge!==x)&&(i.blendEquationSeparate(Pt[ve],Pt[ge]),p=ve,x=ge),(Ee!==w||Ne!==y||ae!==I||ze!==P)&&(i.blendFuncSeparate(L[Ee],L[Ne],L[ae],L[ze]),w=Ee,y=Ne,I=ae,P=ze),(et.equals(D)===!1||E!==U)&&(i.blendColor(et.r,et.g,et.b,E),D.copy(et),U=E),m=B,b=!1}function re(B,ve){B.side===wt?Ue(i.CULL_FACE):le(i.CULL_FACE);let Ee=B.side===jt;ve&&(Ee=!Ee),ee(Ee),B.blending===ui&&B.transparent===!1?ce(Hn):ce(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let Ne=B.stencilWrite;o.setTest(Ne),Ne&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?le(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(B){M!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),M=B)}function se(B){B!==vu?(le(i.CULL_FACE),B!==N&&(B===Dc?i.cullFace(i.BACK):B===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),N=B}function Se(B){B!==V&&(G&&i.lineWidth(B),V=B)}function pe(B,ve,Ee){B?(le(i.POLYGON_OFFSET_FILL),(Z!==ve||Q!==Ee)&&(i.polygonOffset(ve,Ee),Z=ve,Q=Ee)):Ue(i.POLYGON_OFFSET_FILL)}function be(B){B?le(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function je(B){B===void 0&&(B=i.TEXTURE0+j-1),Me!==B&&(i.activeTexture(B),Me=B)}function Je(B,ve,Ee){Ee===void 0&&(Me===null?Ee=i.TEXTURE0+j-1:Ee=Me);let Ne=Pe[Ee];Ne===void 0&&(Ne={type:void 0,texture:void 0},Pe[Ee]=Ne),(Ne.type!==B||Ne.texture!==ve)&&(Me!==Ee&&(i.activeTexture(Ee),Me=Ee),i.bindTexture(B,ve||ie[B]),Ne.type=B,Ne.texture=ve)}function A(){let B=Pe[Me];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{i.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{i.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function me(){try{i.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ne(){try{i.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(B){pt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),pt.copy(B))}function Ye(B){rt.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),rt.copy(B))}function He(B,ve){let Ee=c.get(ve);Ee===void 0&&(Ee=new WeakMap,c.set(ve,Ee));let Ne=Ee.get(B);Ne===void 0&&(Ne=i.getUniformBlockIndex(ve,B.name),Ee.set(B,Ne))}function Re(B,ve){let Ne=c.get(ve).get(B);l.get(ve)!==Ne&&(i.uniformBlockBinding(ve,Ne,B.__bindingPointIndex),l.set(ve,Ne))}function nt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Me=null,Pe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,y=null,x=null,I=null,P=null,D=new Xe(0,0,0),U=0,b=!1,M=null,N=null,V=null,Z=null,Q=null,pt.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:le,disable:Ue,bindFramebuffer:te,drawBuffers:Oe,useProgram:at,setBlending:ce,setMaterial:re,setFlipSided:ee,setCullFace:se,setLineWidth:Se,setPolygonOffset:pe,setScissorTest:be,activeTexture:je,bindTexture:Je,unbindTexture:A,compressedTexImage2D:v,compressedTexImage3D:H,texImage2D:ye,texImage3D:ne,updateUBOMapping:He,uniformBlockBinding:Re,texStorage2D:me,texStorage3D:Fe,texSubImage2D:$,texSubImage3D:he,compressedTexSubImage2D:K,compressedTexSubImage3D:q,scissor:fe,viewport:Ye,reset:nt}}function H_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new oe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,v){return f?new OffscreenCanvas(A,v):Pr("canvas")}function _(A,v,H){let $=1,he=Je(A);if((he.width>H||he.height>H)&&($=H/Math.max(he.width,he.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let K=Math.floor($*he.width),q=Math.floor($*he.height);u===void 0&&(u=g(K,q));let me=v?g(K,q):u;return me.width=K,me.height=q,me.getContext("2d").drawImage(A,0,0,K,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+K+"x"+q+")."),me}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,v,H,$,he=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=v;if(v===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),v===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),v===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),v===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),v===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),v===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),v===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),v===i.RGBA){let q=he?Rr:_t.getTransfer($);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=q===Et?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(A,v){let H;return A?v===null||v===Ii||v===$s?H=i.DEPTH24_STENCIL8:v===Gn?H=i.DEPTH32F_STENCIL8:v===Zs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ii||v===$s?H=i.DEPTH_COMPONENT24:v===Gn?H=i.DEPTH_COMPONENT32F:v===Zs&&(H=i.DEPTH_COMPONENT16),H}function I(A,v){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==fn&&A.minFilter!==Bn?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function P(A){let v=A.target;v.removeEventListener("dispose",P),U(v),v.isVideoTexture&&h.delete(v)}function D(A){let v=A.target;v.removeEventListener("dispose",D),M(v)}function U(A){let v=n.get(A);if(v.__webglInit===void 0)return;let H=A.source,$=d.get(H);if($){let he=$[v.__cacheKey];he.usedTimes--,he.usedTimes===0&&b(A),Object.keys($).length===0&&d.delete(H)}n.remove(A)}function b(A){let v=n.get(A);i.deleteTexture(v.__webglTexture);let H=A.source,$=d.get(H);delete $[v.__cacheKey],a.memory.textures--}function M(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let he=0;he<v.__webglFramebuffer[$].length;he++)i.deleteFramebuffer(v.__webglFramebuffer[$][he]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let H=A.textures;for(let $=0,he=H.length;$<he;$++){let K=n.get(H[$]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(H[$])}n.remove(A)}let N=0;function V(){N=0}function Z(){let A=N;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),N+=1,A}function Q(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function j(A,v){let H=n.get(A);if(A.isVideoTexture&&be(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(H,A,v);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+v)}function G(A,v){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ie(H,A,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+v)}function de(A,v){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){ie(H,A,v);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+v)}function J(A,v){let H=n.get(A);if(A.version>0&&H.__version!==A.version){le(H,A,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+v)}let Me={[Vi]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},Pe={[fn]:i.NEAREST,[ku]:i.NEAREST_MIPMAP_NEAREST,[ca]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Jo]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},De={[Wu]:i.NEVER,[Ju]:i.ALWAYS,[Xu]:i.LESS,[Yc]:i.LEQUAL,[qu]:i.EQUAL,[$u]:i.GEQUAL,[Yu]:i.GREATER,[Zu]:i.NOTEQUAL};function tt(A,v){if(v.type===Gn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Bn||v.magFilter===Jo||v.magFilter===ca||v.magFilter===Pi||v.minFilter===Bn||v.minFilter===Jo||v.minFilter===ca||v.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,Me[v.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,Me[v.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,Me[v.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Pe[v.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Pe[v.minFilter]),v.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,De[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===fn||v.minFilter!==ca&&v.minFilter!==Pi||v.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function pt(A,v){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener("dispose",P));let $=v.source,he=d.get($);he===void 0&&(he={},d.set($,he));let K=Q(v);if(K!==A.__cacheKey){he[K]===void 0&&(he[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),he[K].usedTimes++;let q=he[A.__cacheKey];q!==void 0&&(he[A.__cacheKey].usedTimes--,q.usedTimes===0&&b(v)),A.__cacheKey=K,A.__webglTexture=he[K].texture}return H}function rt(A,v,H){return Math.floor(Math.floor(A/H)/v)}function ut(A,v,H,$){let K=A.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,H,$,v.data);else{K.sort((ne,fe)=>ne.start-fe.start);let q=0;for(let ne=1;ne<K.length;ne++){let fe=K[q],Ye=K[ne],He=fe.start+fe.count,Re=rt(Ye.start,v.width,4),nt=rt(fe.start,v.width,4);Ye.start<=He+1&&Re===nt&&rt(Ye.start+Ye.count-1,v.width,4)===Re?fe.count=Math.max(fe.count,Ye.start+Ye.count-fe.start):(++q,K[q]=Ye)}K.length=q+1;let me=i.getParameter(i.UNPACK_ROW_LENGTH),Fe=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ne=0,fe=K.length;ne<fe;ne++){let Ye=K[ne],He=Math.floor(Ye.start/4),Re=Math.ceil(Ye.count/4),nt=He%v.width,B=Math.floor(He/v.width),ve=Re,Ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),i.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,nt,B,ve,Ee,H,$,v.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function ie(A,v,H){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);let he=pt(A,v),K=v.source;t.bindTexture($,A.__webglTexture,i.TEXTURE0+H);let q=n.get(K);if(K.version!==q.__version||he===!0){t.activeTexture(i.TEXTURE0+H);let me=_t.getPrimaries(_t.workingColorSpace),Fe=v.colorSpace===Wn?null:_t.getPrimaries(v.colorSpace),ye=v.colorSpace===Wn||me===Fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ne=_(v.image,!1,s.maxTextureSize);ne=je(v,ne);let fe=r.convert(v.format,v.colorSpace),Ye=r.convert(v.type),He=y(v.internalFormat,fe,Ye,v.colorSpace,v.isVideoTexture);tt($,v);let Re,nt=v.mipmaps,B=v.isVideoTexture!==!0,ve=q.__version===void 0||he===!0,Ee=K.dataReady,Ne=I(v,ne);if(v.isDepthTexture)He=x(v.format===Js,v.type),ve&&(B?t.texStorage2D(i.TEXTURE_2D,1,He,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,He,ne.width,ne.height,0,fe,Ye,null));else if(v.isDataTexture)if(nt.length>0){B&&ve&&t.texStorage2D(i.TEXTURE_2D,Ne,He,nt[0].width,nt[0].height);for(let ge=0,ae=nt.length;ge<ae;ge++)Re=nt[ge],B?Ee&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,fe,Ye,Re.data):t.texImage2D(i.TEXTURE_2D,ge,He,Re.width,Re.height,0,fe,Ye,Re.data);v.generateMipmaps=!1}else B?(ve&&t.texStorage2D(i.TEXTURE_2D,Ne,He,ne.width,ne.height),Ee&&ut(v,ne,fe,Ye)):t.texImage2D(i.TEXTURE_2D,0,He,ne.width,ne.height,0,fe,Ye,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){B&&ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,He,nt[0].width,nt[0].height,ne.depth);for(let ge=0,ae=nt.length;ge<ae;ge++)if(Re=nt[ge],v.format!==Cn)if(fe!==null)if(B){if(Ee)if(v.layerUpdates.size>0){let ze=th(Re.width,Re.height,v.format,v.type);for(let et of v.layerUpdates){let E=Re.data.subarray(et*ze/Re.data.BYTES_PER_ELEMENT,(et+1)*ze/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,et,Re.width,Re.height,1,fe,E)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ne.depth,fe,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,He,Re.width,Re.height,ne.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?Ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ne.depth,fe,Ye,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,He,Re.width,Re.height,ne.depth,0,fe,Ye,Re.data)}else{B&&ve&&t.texStorage2D(i.TEXTURE_2D,Ne,He,nt[0].width,nt[0].height);for(let ge=0,ae=nt.length;ge<ae;ge++)Re=nt[ge],v.format!==Cn?fe!==null?B?Ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,fe,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,He,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?Ee&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,fe,Ye,Re.data):t.texImage2D(i.TEXTURE_2D,ge,He,Re.width,Re.height,0,fe,Ye,Re.data)}else if(v.isDataArrayTexture)if(B){if(ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,He,ne.width,ne.height,ne.depth),Ee)if(v.layerUpdates.size>0){let ge=th(ne.width,ne.height,v.format,v.type);for(let ae of v.layerUpdates){let ze=ne.data.subarray(ae*ge/ne.data.BYTES_PER_ELEMENT,(ae+1)*ge/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ae,ne.width,ne.height,1,fe,Ye,ze)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ye,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,He,ne.width,ne.height,ne.depth,0,fe,Ye,ne.data);else if(v.isData3DTexture)B?(ve&&t.texStorage3D(i.TEXTURE_3D,Ne,He,ne.width,ne.height,ne.depth),Ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,fe,Ye,ne.data)):t.texImage3D(i.TEXTURE_3D,0,He,ne.width,ne.height,ne.depth,0,fe,Ye,ne.data);else if(v.isFramebufferTexture){if(ve)if(B)t.texStorage2D(i.TEXTURE_2D,Ne,He,ne.width,ne.height);else{let ge=ne.width,ae=ne.height;for(let ze=0;ze<Ne;ze++)t.texImage2D(i.TEXTURE_2D,ze,He,ge,ae,0,fe,Ye,null),ge>>=1,ae>>=1}}else if(nt.length>0){if(B&&ve){let ge=Je(nt[0]);t.texStorage2D(i.TEXTURE_2D,Ne,He,ge.width,ge.height)}for(let ge=0,ae=nt.length;ge<ae;ge++)Re=nt[ge],B?Ee&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,fe,Ye,Re):t.texImage2D(i.TEXTURE_2D,ge,He,fe,Ye,Re);v.generateMipmaps=!1}else if(B){if(ve){let ge=Je(ne);t.texStorage2D(i.TEXTURE_2D,Ne,He,ge.width,ge.height)}Ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ye,ne)}else t.texImage2D(i.TEXTURE_2D,0,He,fe,Ye,ne);m(v)&&p($),q.__version=K.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function le(A,v,H){if(v.image.length!==6)return;let $=pt(A,v),he=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let K=n.get(he);if(he.version!==K.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let q=_t.getPrimaries(_t.workingColorSpace),me=v.colorSpace===Wn?null:_t.getPrimaries(v.colorSpace),Fe=v.colorSpace===Wn||q===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ne=v.image[0]&&v.image[0].isDataTexture,fe=[];for(let ae=0;ae<6;ae++)!ye&&!ne?fe[ae]=_(v.image[ae],!0,s.maxCubemapSize):fe[ae]=ne?v.image[ae].image:v.image[ae],fe[ae]=je(v,fe[ae]);let Ye=fe[0],He=r.convert(v.format,v.colorSpace),Re=r.convert(v.type),nt=y(v.internalFormat,He,Re,v.colorSpace),B=v.isVideoTexture!==!0,ve=K.__version===void 0||$===!0,Ee=he.dataReady,Ne=I(v,Ye);tt(i.TEXTURE_CUBE_MAP,v);let ge;if(ye){B&&ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,nt,Ye.width,Ye.height);for(let ae=0;ae<6;ae++){ge=fe[ae].mipmaps;for(let ze=0;ze<ge.length;ze++){let et=ge[ze];v.format!==Cn?He!==null?B?Ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,0,0,et.width,et.height,He,et.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,nt,et.width,et.height,0,et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,0,0,et.width,et.height,He,Re,et.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze,nt,et.width,et.height,0,He,Re,et.data)}}}else{if(ge=v.mipmaps,B&&ve){ge.length>0&&Ne++;let ae=Je(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,nt,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(ne){B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,fe[ae].width,fe[ae].height,He,Re,fe[ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,fe[ae].width,fe[ae].height,0,He,Re,fe[ae].data);for(let ze=0;ze<ge.length;ze++){let E=ge[ze].image[ae].image;B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,0,0,E.width,E.height,He,Re,E.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,nt,E.width,E.height,0,He,Re,E.data)}}else{B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,He,Re,fe[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,nt,He,Re,fe[ae]);for(let ze=0;ze<ge.length;ze++){let et=ge[ze];B?Ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,0,0,He,Re,et.image[ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,ze+1,nt,He,Re,et.image[ae])}}}m(v)&&p(i.TEXTURE_CUBE_MAP),K.__version=he.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Ue(A,v,H,$,he,K){let q=r.convert(H.format,H.colorSpace),me=r.convert(H.type),Fe=y(H.internalFormat,q,me,H.colorSpace),ye=n.get(v),ne=n.get(H);if(ne.__renderTarget=v,!ye.__hasExternalTextures){let fe=Math.max(1,v.width>>K),Ye=Math.max(1,v.height>>K);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,K,Fe,fe,Ye,v.depth,0,q,me,null):t.texImage2D(he,K,Fe,fe,Ye,0,q,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,he,ne.__webglTexture,0,Se(v)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,he,ne.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,v,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),v.depthBuffer){let $=v.depthTexture,he=$&&$.isDepthTexture?$.type:null,K=x(v.stencilBuffer,he),q=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=Se(v);pe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,K,v.width,v.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,K,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,K,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,A)}else{let $=v.textures;for(let he=0;he<$.length;he++){let K=$[he],q=r.convert(K.format,K.colorSpace),me=r.convert(K.type),Fe=y(K.internalFormat,q,me,K.colorSpace),ye=Se(v);H&&pe(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Fe,v.width,v.height):pe(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Fe,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Fe,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(A,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);let he=$.__webglTexture,K=Se(v);if(v.depthTexture.format===Ls)pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,he,0);else if(v.depthTexture.format===Js)pe(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function at(A){let v=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){let he=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",he)};$.addEventListener("dispose",he),v.__depthDisposeCallback=he}v.__boundDepthTexture=$}if(A.depthTexture&&!v.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let $=A.texture.mipmaps;$&&$.length>0?Oe(v.__webglFramebuffer[0],A):Oe(v.__webglFramebuffer,A)}else if(H){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),te(v.__webglDepthbuffer[$],A,!1);else{let he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,K)}}else{let $=A.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),te(v.__webglDepthbuffer,A,!1);else{let he=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(A,v,H){let $=n.get(A);v!==void 0&&Ue($.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&at(A)}function L(A){let v=A.texture,H=n.get(A),$=n.get(v);A.addEventListener("dispose",D);let he=A.textures,K=A.isWebGLCubeRenderTarget===!0,q=he.length>1;if(q||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let Fe=0;Fe<v.mipmaps.length;Fe++)H.__webglFramebuffer[me][Fe]=i.createFramebuffer()}else H.__webglFramebuffer[me]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)H.__webglFramebuffer[me]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(q)for(let me=0,Fe=he.length;me<Fe;me++){let ye=n.get(he[me]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&pe(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){let Fe=he[me];H.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[me]);let ye=r.convert(Fe.format,Fe.colorSpace),ne=r.convert(Fe.type),fe=y(Fe.internalFormat,ye,ne,Fe.colorSpace,A.isXRRenderTarget===!0),Ye=Se(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,fe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,H.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),te(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),tt(i.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let Fe=0;Fe<v.mipmaps.length;Fe++)Ue(H.__webglFramebuffer[me][Fe],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Fe);else Ue(H.__webglFramebuffer[me],A,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(v)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(q){for(let me=0,Fe=he.length;me<Fe;me++){let ye=he[me],ne=n.get(ye),fe=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ne.__webglTexture),tt(fe,ye),Ue(H.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+me,fe,0),m(ye)&&p(fe)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(me=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,$.__webglTexture),tt(me,v),v.mipmaps&&v.mipmaps.length>0)for(let Fe=0;Fe<v.mipmaps.length;Fe++)Ue(H.__webglFramebuffer[Fe],A,v,i.COLOR_ATTACHMENT0,me,Fe);else Ue(H.__webglFramebuffer,A,v,i.COLOR_ATTACHMENT0,me,0);m(v)&&p(me),t.unbindTexture()}A.depthBuffer&&at(A)}function ce(A){let v=A.textures;for(let H=0,$=v.length;H<$;H++){let he=v[H];if(m(he)){let K=w(A),q=n.get(he).__webglTexture;t.bindTexture(K,q),p(K),t.unbindTexture()}}}let re=[],ee=[];function se(A){if(A.samples>0){if(pe(A)===!1){let v=A.textures,H=A.width,$=A.height,he=i.COLOR_BUFFER_BIT,K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=n.get(A),me=v.length>1;if(me)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,q.__webglMultisampledFramebuffer);let Fe=A.texture.mipmaps;Fe&&Fe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,q.__webglColorRenderbuffer[ye]);let ne=n.get(v[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,H,$,0,0,H,$,he,i.NEAREST),l===!0&&(re.length=0,ee.length=0,re.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(re.push(K),ee.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,q.__webglColorRenderbuffer[ye]);let ne=n.get(v[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,q.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,q.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let v=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Se(A){return Math.min(s.maxSamples,A.samples)}function pe(A){let v=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function be(A){let v=a.render.frame;h.get(A)!==v&&(h.set(A,v),A.update())}function je(A,v){let H=A.colorSpace,$=A.format,he=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Gi&&H!==Wn&&(_t.getTransfer(H)===Et?($!==Cn||he!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),v}function Je(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=V,this.setTexture2D=j,this.setTexture2DArray=G,this.setTexture3D=de,this.setTextureCube=J,this.rebindTextures=Pt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=at,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=pe}function V_(i,e){function t(n,s=Wn){let r,a=_t.getTransfer(s);if(n===Vn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return i.BYTE;if(n===kc)return i.SHORT;if(n===Zs)return i.UNSIGNED_SHORT;if(n===Ko)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Rn)return i.HALF_FLOAT;if(n===Gc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===Cn)return i.RGBA;if(n===Ls)return i.DEPTH_COMPONENT;if(n===Js)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===tl)return i.RED_INTEGER;if(n===Xc)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===ha||n===ua||n===da||n===fa)if(a===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sl||n===rl||n===al||n===ol)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===sl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===rl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ll||n===cl)return a===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===hl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ul||n===dl||n===fl||n===pl||n===ml||n===gl||n===_l||n===vl||n===xl||n===yl||n===Ml||n===Sl||n===bl||n===El)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ul)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===gl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_l)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ml)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bl)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===El)return a===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Tl||n===wl||n===Al)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Tl)return a===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Al)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===Cl||n===Pl||n===Il)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Cl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W_=`
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

}`,ph=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Gr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Wt({vertexShader:G_,fragmentShader:W_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new yt(new hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mh=class extends di{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,_=typeof XRWebGLBinding<"u",m=new ph,p={},w=t.getContextAttributes(),y=null,x=null,I=[],P=[],D=new oe,U=null,b=new Qt;b.viewport=new Ct;let M=new Qt;M.viewport=new Ct;let N=[b,M],V=new Uo,Z=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let le=I[ie];return le===void 0&&(le=new Bs,I[ie]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ie){let le=I[ie];return le===void 0&&(le=new Bs,I[ie]=le),le.getGripSpace()},this.getHand=function(ie){let le=I[ie];return le===void 0&&(le=new Bs,I[ie]=le),le.getHandSpace()};function j(ie){let le=P.indexOf(ie.inputSource);if(le===-1)return;let Ue=I[le];Ue!==void 0&&(Ue.update(ie.inputSource,ie.frame,c||a),Ue.dispatchEvent({type:ie.type,data:ie.inputSource}))}function G(){s.removeEventListener("select",j),s.removeEventListener("selectstart",j),s.removeEventListener("selectend",j),s.removeEventListener("squeeze",j),s.removeEventListener("squeezestart",j),s.removeEventListener("squeezeend",j),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",de);for(let ie=0;ie<I.length;ie++){let le=P[ie];le!==null&&(P[ie]=null,I[ie].disconnect(le))}Z=null,Q=null,m.reset();for(let ie in p)delete p[ie];e.setRenderTarget(y),f=null,d=null,u=null,s=null,x=null,ut.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(y=e.getRenderTarget(),s.addEventListener("select",j),s.addEventListener("selectstart",j),s.addEventListener("selectend",j),s.addEventListener("squeeze",j),s.addEventListener("squeezestart",j),s.addEventListener("squeezeend",j),s.addEventListener("end",G),s.addEventListener("inputsourceschange",de),w.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,te=null,Oe=null;w.depth&&(Oe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ue=w.stencil?Js:Ls,te=w.stencil?$s:Ii);let at={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(at),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new sn(d.textureWidth,d.textureHeight,{format:Cn,type:Vn,depthTexture:new Vr(d.textureWidth,d.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let Ue={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new sn(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function de(ie){for(let le=0;le<ie.removed.length;le++){let Ue=ie.removed[le],te=P.indexOf(Ue);te>=0&&(P[te]=null,I[te].disconnect(Ue))}for(let le=0;le<ie.added.length;le++){let Ue=ie.added[le],te=P.indexOf(Ue);if(te===-1){for(let at=0;at<I.length;at++)if(at>=P.length){P.push(Ue),te=at;break}else if(P[at]===null){P[at]=Ue,te=at;break}if(te===-1)break}let Oe=I[te];Oe&&Oe.connect(Ue)}}let J=new C,Me=new C;function Pe(ie,le,Ue){J.setFromMatrixPosition(le.matrixWorld),Me.setFromMatrixPosition(Ue.matrixWorld);let te=J.distanceTo(Me),Oe=le.projectionMatrix.elements,at=Ue.projectionMatrix.elements,Pt=Oe[14]/(Oe[10]-1),L=Oe[14]/(Oe[10]+1),ce=(Oe[9]+1)/Oe[5],re=(Oe[9]-1)/Oe[5],ee=(Oe[8]-1)/Oe[0],se=(at[8]+1)/at[0],Se=Pt*ee,pe=Pt*se,be=te/(-ee+se),je=be*-ee;if(le.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(je),ie.translateZ(be),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Oe[10]===-1)ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let Je=Pt+be,A=L+be,v=Se-je,H=pe+(te-je),$=ce*L/A*Je,he=re*L/A*Je;ie.projectionMatrix.makePerspective(v,H,$,he,Je,A),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function De(ie,le){le===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(le.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let le=ie.near,Ue=ie.far;m.texture!==null&&(m.depthNear>0&&(le=m.depthNear),m.depthFar>0&&(Ue=m.depthFar)),V.near=M.near=b.near=le,V.far=M.far=b.far=Ue,(Z!==V.near||Q!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),Z=V.near,Q=V.far),V.layers.mask=ie.layers.mask|6,b.layers.mask=V.layers.mask&3,M.layers.mask=V.layers.mask&5;let te=ie.parent,Oe=V.cameras;De(V,te);for(let at=0;at<Oe.length;at++)De(Oe[at],te);Oe.length===2?Pe(V,b,M):V.projectionMatrix.copy(b.projectionMatrix),tt(ie,V,te)};function tt(ie,le,Ue){Ue===null?ie.matrix.copy(le.matrixWorld):(ie.matrix.copy(Ue.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(le.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(le.projectionMatrix),ie.projectionMatrixInverse.copy(le.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Ds*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(ie){return p[ie]};let pt=null;function rt(ie,le){if(h=le.getViewerPose(c||a),g=le,h!==null){let Ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let te=!1;Ue.length!==V.cameras.length&&(V.cameras.length=0,te=!0);for(let L=0;L<Ue.length;L++){let ce=Ue[L],re=null;if(f!==null)re=f.getViewport(ce);else{let se=u.getViewSubImage(d,ce);re=se.viewport,L===0&&(e.setRenderTargetTextures(x,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(x))}let ee=N[L];ee===void 0&&(ee=new Qt,ee.layers.enable(L),ee.viewport=new Ct,N[L]=ee),ee.matrix.fromArray(ce.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(ce.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(re.x,re.y,re.width,re.height),L===0&&(V.matrix.copy(ee.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),te===!0&&V.cameras.push(ee)}let Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let L=u.getDepthInformation(Ue[0]);L&&L.isValid&&L.texture&&m.init(L,s.renderState)}if(Oe&&Oe.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let L=0;L<Ue.length;L++){let ce=Ue[L].camera;if(ce){let re=p[ce];re||(re=new Gr,p[ce]=re);let ee=u.getCameraImage(ce);re.sourceTexture=ee}}}}for(let Ue=0;Ue<I.length;Ue++){let te=P[Ue],Oe=I[Ue];te!==null&&Oe!==void 0&&Oe.update(te,le,c||a)}pt&&pt(ie,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let ut=new Cd;ut.setAnimationLoop(rt),this.setAnimationLoop=function(ie){pt=ie},this.dispose=function(){}}},as=new On,X_=new Tt;function q_(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Kc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),y=w.envMap,x=w.envMapRotation;y&&(m.envMap.value=y,as.copy(x),as.x*=-1,as.y*=-1,as.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),m.envMapRotation.value.setFromMatrix4(X_.makeRotationFromEuler(as)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Y_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,y){let x=y.program;n.uniformBlockBinding(w,x)}function c(w,y){let x=s[w.id];x===void 0&&(g(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(w,I);let P=e.render.frame;r[w.id]!==P&&(d(w),r[w.id]=P)}function h(w){let y=u();w.__bindingPointIndex=y;let x=i.createBuffer(),I=w.__size,P=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,I,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,x),x}function u(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){let y=s[w.id],x=w.uniforms,I=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let P=0,D=x.length;P<D;P++){let U=Array.isArray(x[P])?x[P]:[x[P]];for(let b=0,M=U.length;b<M;b++){let N=U[b];if(f(N,P,b,I)===!0){let V=N.__offset,Z=Array.isArray(N.value)?N.value:[N.value],Q=0;for(let j=0;j<Z.length;j++){let G=Z[j],de=_(G);typeof G=="number"||typeof G=="boolean"?(N.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,V+Q,N.__data)):G.isMatrix3?(N.__data[0]=G.elements[0],N.__data[1]=G.elements[1],N.__data[2]=G.elements[2],N.__data[3]=0,N.__data[4]=G.elements[3],N.__data[5]=G.elements[4],N.__data[6]=G.elements[5],N.__data[7]=0,N.__data[8]=G.elements[6],N.__data[9]=G.elements[7],N.__data[10]=G.elements[8],N.__data[11]=0):(G.toArray(N.__data,Q),Q+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,y,x,I){let P=w.value,D=y+"_"+x;if(I[D]===void 0)return typeof P=="number"||typeof P=="boolean"?I[D]=P:I[D]=P.clone(),!0;{let U=I[D];if(typeof P=="number"||typeof P=="boolean"){if(U!==P)return I[D]=P,!0}else if(U.equals(P)===!1)return U.copy(P),!0}return!1}function g(w){let y=w.uniforms,x=0,I=16;for(let D=0,U=y.length;D<U;D++){let b=Array.isArray(y[D])?y[D]:[y[D]];for(let M=0,N=b.length;M<N;M++){let V=b[M],Z=Array.isArray(V.value)?V.value:[V.value];for(let Q=0,j=Z.length;Q<j;Q++){let G=Z[Q],de=_(G),J=x%I,Me=J%de.boundary,Pe=J+Me;x+=Me,Pe!==0&&I-Pe<de.storage&&(x+=I-Pe),V.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=x,x+=de.storage}}}let P=x%I;return P>0&&(x+=I-P),w.__size=x,w.__cache={},this}function _(w){let y={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(y.boundary=4,y.storage=4):w.isVector2?(y.boundary=8,y.storage=8):w.isVector3||w.isColor?(y.boundary=16,y.storage=12):w.isVector4?(y.boundary=16,y.storage=16):w.isMatrix3?(y.boundary=48,y.storage=48):w.isMatrix4?(y.boundary=64,y.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),y}function m(w){let y=w.target;y.removeEventListener("dispose",m);let x=a.indexOf(y.__bindingPointIndex);a.splice(x,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Nl=class{constructor(e={}){let{canvas:t=Ku(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),_=new Int32Array(4),m=null,p=null,w=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,I=!1;this._outputColorSpace=$t;let P=0,D=0,U=null,b=-1,M=null,N=new Ct,V=new Ct,Z=null,Q=new Xe(0),j=0,G=t.width,de=t.height,J=1,Me=null,Pe=null,De=new Ct(0,0,G,de),tt=new Ct(0,0,G,de),pt=!1,rt=new Os,ut=!1,ie=!1,le=new Tt,Ue=new C,te=new Ct,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function Pt(){return U===null?J:1}let L=n;function ce(S,O){return t.getContext(S,O)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",ge,!1),L===null){let O="webgl2";if(L=ce(O,S),L===null)throw ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let re,ee,se,Se,pe,be,je,Je,A,v,H,$,he,K,q,me,Fe,ye,ne,fe,Ye,He,Re,nt;function B(){re=new u0(L),re.init(),He=new V_(L,re),ee=new s0(L,re,e,He),se=new k_(L,re),ee.reversedDepthBuffer&&d&&se.buffers.depth.setReversed(!0),Se=new p0(L),pe=new A_,be=new H_(L,re,se,pe,ee,He,Se),je=new a0(x),Je=new h0(x),A=new yp(L),Re=new n0(L,A),v=new d0(L,A,Se,Re),H=new g0(L,v,A,Se),ne=new m0(L,ee,be),me=new r0(pe),$=new w_(x,je,Je,re,ee,Re,me),he=new q_(x,pe),K=new C_,q=new N_(re),ye=new t0(x,je,Je,se,H,f,l),Fe=new O_(x,H,ee),nt=new Y_(L,Se,ee,se),fe=new i0(L,re,Se),Ye=new f0(L,re,Se),Se.programs=$.programs,x.capabilities=ee,x.extensions=re,x.properties=pe,x.renderLists=K,x.shadowMap=Fe,x.state=se,x.info=Se}B();let ve=new mh(x,L);this.xr=ve,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(S){S!==void 0&&(J=S,this.setSize(G,de,!1))},this.getSize=function(S){return S.set(G,de)},this.setSize=function(S,O,X=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,de=O,t.width=Math.floor(S*J),t.height=Math.floor(O*J),X===!0&&(t.style.width=S+"px",t.style.height=O+"px"),this.setViewport(0,0,S,O)},this.getDrawingBufferSize=function(S){return S.set(G*J,de*J).floor()},this.setDrawingBufferSize=function(S,O,X){G=S,de=O,J=X,t.width=Math.floor(S*X),t.height=Math.floor(O*X),this.setViewport(0,0,S,O)},this.getCurrentViewport=function(S){return S.copy(N)},this.getViewport=function(S){return S.copy(De)},this.setViewport=function(S,O,X,Y){S.isVector4?De.set(S.x,S.y,S.z,S.w):De.set(S,O,X,Y),se.viewport(N.copy(De).multiplyScalar(J).round())},this.getScissor=function(S){return S.copy(tt)},this.setScissor=function(S,O,X,Y){S.isVector4?tt.set(S.x,S.y,S.z,S.w):tt.set(S,O,X,Y),se.scissor(V.copy(tt).multiplyScalar(J).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(S){se.setScissorTest(pt=S)},this.setOpaqueSort=function(S){Me=S},this.setTransparentSort=function(S){Pe=S},this.getClearColor=function(S){return S.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor(...arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha(...arguments)},this.clear=function(S=!0,O=!0,X=!0){let Y=0;if(S){let k=!1;if(U!==null){let _e=U.texture.format;k=_e===il||_e===nl||_e===tl}if(k){let _e=U.texture.type,we=_e===Vn||_e===Ii||_e===Zs||_e===$s||_e===Qo||_e===jo,Be=ye.getClearColor(),Le=ye.getClearAlpha(),We=Be.r,$e=Be.g,xe=Be.b;we?(g[0]=We,g[1]=$e,g[2]=xe,g[3]=Le,L.clearBufferuiv(L.COLOR,0,g)):(_[0]=We,_[1]=$e,_[2]=xe,_[3]=Le,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}O&&(Y|=L.DEPTH_BUFFER_BIT),X&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ye.dispose(),K.dispose(),q.dispose(),pe.dispose(),je.dispose(),Je.dispose(),H.dispose(),Re.dispose(),nt.dispose(),$.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",ue),ve.removeEventListener("sessionend",Ge),Ie.stop()};function Ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let S=Se.autoReset,O=Fe.enabled,X=Fe.autoUpdate,Y=Fe.needsUpdate,k=Fe.type;B(),Se.autoReset=S,Fe.enabled=O,Fe.autoUpdate=X,Fe.needsUpdate=Y,Fe.type=k}function ge(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ae(S){let O=S.target;O.removeEventListener("dispose",ae),ze(O)}function ze(S){et(S),pe.remove(S)}function et(S){let O=pe.get(S).programs;O!==void 0&&(O.forEach(function(X){$.releaseProgram(X)}),S.isShaderMaterial&&$.releaseShaderCache(S))}this.renderBufferDirect=function(S,O,X,Y,k,_e){O===null&&(O=Oe);let we=k.isMesh&&k.matrixWorld.determinant()<0,Be=cr(S,O,X,Y,k);se.setMaterial(Y,we);let Le=X.index,We=1;if(Y.wireframe===!0){if(Le=v.getWireframeAttribute(X),Le===void 0)return;We=2}let $e=X.drawRange,xe=X.attributes.position,ke=$e.start*We,Ke=($e.start+$e.count)*We;_e!==null&&(ke=Math.max(ke,_e.start*We),Ke=Math.min(Ke,(_e.start+_e.count)*We)),Le!==null?(ke=Math.max(ke,0),Ke=Math.min(Ke,Le.count)):xe!=null&&(ke=Math.max(ke,0),Ke=Math.min(Ke,xe.count));let gt=Ke-ke;if(gt<0||gt===1/0)return;Re.setup(k,Y,Be,X,Le);let Mt,bt=fe;if(Le!==null&&(Mt=A.get(Le),bt=Ye,bt.setIndex(Mt)),k.isMesh)Y.wireframe===!0?(se.setLineWidth(Y.wireframeLinewidth*Pt()),bt.setMode(L.LINES)):bt.setMode(L.TRIANGLES);else if(k.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),se.setLineWidth(Ve*Pt()),k.isLineSegments?bt.setMode(L.LINES):k.isLineLoop?bt.setMode(L.LINE_LOOP):bt.setMode(L.LINE_STRIP)}else k.isPoints?bt.setMode(L.POINTS):k.isSprite&&bt.setMode(L.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Us("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))bt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Ve=k._multiDrawStarts,It=k._multiDrawCounts,St=k._multiDrawCount,mn=Le?A.get(Le).bytesPerElement:1,fs=pe.get(Y).currentProgram.getUniforms();for(let gn=0;gn<St;gn++)fs.setValue(L,"_gl_DrawID",gn),bt.render(Ve[gn]/mn,It[gn])}else if(k.isInstancedMesh)bt.renderInstances(ke,gt,k.count);else if(X.isInstancedBufferGeometry){let Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,It=Math.min(X.instanceCount,Ve);bt.renderInstances(ke,gt,It)}else bt.render(ke,gt)};function E(S,O,X){S.transparent===!0&&S.side===wt&&S.forceSinglePass===!1?(S.side=jt,S.needsUpdate=!0,Yn(S,O,X),S.side=hi,S.needsUpdate=!0,Yn(S,O,X),S.side=wt):Yn(S,O,X)}this.compile=function(S,O,X=null){X===null&&(X=S),p=q.get(X),p.init(O),y.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==X&&S.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let Y=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let _e=k.material;if(_e)if(Array.isArray(_e))for(let we=0;we<_e.length;we++){let Be=_e[we];E(Be,X,k),Y.add(Be)}else E(_e,X,k),Y.add(_e)}),p=y.pop(),Y},this.compileAsync=function(S,O,X=null){let Y=this.compile(S,O,X);return new Promise(k=>{function _e(){if(Y.forEach(function(we){pe.get(we).currentProgram.isReady()&&Y.delete(we)}),Y.size===0){k(S);return}setTimeout(_e,10)}re.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let T=null;function F(S){T&&T(S)}function ue(){Ie.stop()}function Ge(){Ie.start()}let Ie=new Cd;Ie.setAnimationLoop(F),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(S){T=S,ve.setAnimationLoop(S),S===null?Ie.stop():Ie.start()},ve.addEventListener("sessionstart",ue),ve.addEventListener("sessionend",Ge),this.render=function(S,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(O),O=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(x,S,O,U),p=q.get(S,y.length),p.init(O),y.push(p),le.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),rt.setFromProjectionMatrix(le,Fn,O.reversedDepth),ie=this.localClippingEnabled,ut=me.init(this.clippingPlanes,ie),m=K.get(S,w.length),m.init(),w.push(m),ve.enabled===!0&&ve.isPresenting===!0){let _e=x.xr.getDepthSensingMesh();_e!==null&&Qe(_e,O,-1/0,x.sortObjects)}Qe(S,O,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(Me,Pe),at=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,at&&ye.addToRenderList(m,S),this.info.render.frame++,ut===!0&&me.beginShadows();let X=p.state.shadowsArray;Fe.render(X,S,O),ut===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=m.opaque,k=m.transmissive;if(p.setupLights(),O.isArrayCamera){let _e=O.cameras;if(k.length>0)for(let we=0,Be=_e.length;we<Be;we++){let Le=_e[we];At(Y,k,S,Le)}at&&ye.render(S);for(let we=0,Be=_e.length;we<Be;we++){let Le=_e[we];xt(m,S,Le,Le.viewport)}}else k.length>0&&At(Y,k,S,O),at&&ye.render(S),xt(m,S,O);U!==null&&D===0&&(be.updateMultisampleRenderTarget(U),be.updateRenderTargetMipmap(U)),S.isScene===!0&&S.onAfterRender(x,S,O),Re.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],ut===!0&&me.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Qe(S,O,X,Y){if(S.visible===!1)return;if(S.layers.test(O.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(O);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||rt.intersectsSprite(S)){Y&&te.setFromMatrixPosition(S.matrixWorld).applyMatrix4(le);let we=H.update(S),Be=S.material;Be.visible&&m.push(S,we,Be,X,te.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||rt.intersectsObject(S))){let we=H.update(S),Be=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),te.copy(S.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),te.copy(we.boundingSphere.center)),te.applyMatrix4(S.matrixWorld).applyMatrix4(le)),Array.isArray(Be)){let Le=we.groups;for(let We=0,$e=Le.length;We<$e;We++){let xe=Le[We],ke=Be[xe.materialIndex];ke&&ke.visible&&m.push(S,we,ke,X,te.z,xe)}}else Be.visible&&m.push(S,we,Be,X,te.z,null)}}let _e=S.children;for(let we=0,Be=_e.length;we<Be;we++)Qe(_e[we],O,X,Y)}function xt(S,O,X,Y){let k=S.opaque,_e=S.transmissive,we=S.transparent;p.setupLightsView(X),ut===!0&&me.setGlobalState(x.clippingPlanes,X),Y&&se.viewport(N.copy(Y)),k.length>0&&qn(k,O,X),_e.length>0&&qn(_e,O,X),we.length>0&&qn(we,O,X),se.buffers.depth.setTest(!0),se.buffers.depth.setMask(!0),se.buffers.color.setMask(!0),se.setPolygonOffset(!1)}function At(S,O,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new sn(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?Rn:Vn,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));let _e=p.state.transmissionRenderTarget[Y.id],we=Y.viewport||N;_e.setSize(we.z*x.transmissionResolutionScale,we.w*x.transmissionResolutionScale);let Be=x.getRenderTarget(),Le=x.getActiveCubeFace(),We=x.getActiveMipmapLevel();x.setRenderTarget(_e),x.getClearColor(Q),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear(),at&&ye.render(X);let $e=x.toneMapping;x.toneMapping=mi;let xe=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ut===!0&&me.setGlobalState(x.clippingPlanes,Y),qn(S,X,Y),be.updateMultisampleRenderTarget(_e),be.updateRenderTargetMipmap(_e),re.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ke=0,gt=O.length;Ke<gt;Ke++){let Mt=O[Ke],bt=Mt.object,Ve=Mt.geometry,It=Mt.material,St=Mt.group;if(It.side===wt&&bt.layers.test(Y.layers)){let mn=It.side;It.side=jt,It.needsUpdate=!0,xi(bt,X,Y,Ve,It,St),It.side=mn,It.needsUpdate=!0,ke=!0}}ke===!0&&(be.updateMultisampleRenderTarget(_e),be.updateRenderTargetMipmap(_e))}x.setRenderTarget(Be,Le,We),x.setClearColor(Q,j),xe!==void 0&&(Y.viewport=xe),x.toneMapping=$e}function qn(S,O,X){let Y=O.isScene===!0?O.overrideMaterial:null;for(let k=0,_e=S.length;k<_e;k++){let we=S[k],Be=we.object,Le=we.geometry,We=we.group,$e=we.material;$e.allowOverride===!0&&Y!==null&&($e=Y),Be.layers.test(X.layers)&&xi(Be,O,X,Le,$e,We)}}function xi(S,O,X,Y,k,_e){S.onBeforeRender(x,O,X,Y,k,_e),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(x,O,X,Y,S,_e),k.transparent===!0&&k.side===wt&&k.forceSinglePass===!1?(k.side=jt,k.needsUpdate=!0,x.renderBufferDirect(X,O,Y,k,S,_e),k.side=hi,k.needsUpdate=!0,x.renderBufferDirect(X,O,Y,k,S,_e),k.side=wt):x.renderBufferDirect(X,O,Y,k,S,_e),S.onAfterRender(x,O,X,Y,k,_e)}function Yn(S,O,X){O.isScene!==!0&&(O=Oe);let Y=pe.get(S),k=p.state.lights,_e=p.state.shadowsArray,we=k.state.version,Be=$.getParameters(S,k.state,_e,O,X),Le=$.getProgramCacheKey(Be),We=Y.programs;Y.environment=S.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(S.isMeshStandardMaterial?Je:je).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?O.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",ae),We=new Map,Y.programs=We);let $e=We.get(Le);if($e!==void 0){if(Y.currentProgram===$e&&Y.lightsStateVersion===we)return Lt(S,Be),$e}else Be.uniforms=$.getUniforms(S),S.onBeforeCompile(Be,x),$e=$.acquireProgram(Be,Le),We.set(Le,$e),Y.uniforms=Be.uniforms;let xe=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xe.clippingPlanes=me.uniform),Lt(S,Be),Y.needsLights=ni(S),Y.lightsStateVersion=we,Y.needsLights&&(xe.ambientLightColor.value=k.state.ambient,xe.lightProbe.value=k.state.probe,xe.directionalLights.value=k.state.directional,xe.directionalLightShadows.value=k.state.directionalShadow,xe.spotLights.value=k.state.spot,xe.spotLightShadows.value=k.state.spotShadow,xe.rectAreaLights.value=k.state.rectArea,xe.ltc_1.value=k.state.rectAreaLTC1,xe.ltc_2.value=k.state.rectAreaLTC2,xe.pointLights.value=k.state.point,xe.pointLightShadows.value=k.state.pointShadow,xe.hemisphereLights.value=k.state.hemi,xe.directionalShadowMap.value=k.state.directionalShadowMap,xe.directionalShadowMatrix.value=k.state.directionalShadowMatrix,xe.spotShadowMap.value=k.state.spotShadowMap,xe.spotLightMatrix.value=k.state.spotLightMatrix,xe.spotLightMap.value=k.state.spotLightMap,xe.pointShadowMap.value=k.state.pointShadowMap,xe.pointShadowMatrix.value=k.state.pointShadowMatrix),Y.currentProgram=$e,Y.uniformsList=null,$e}function Ma(S){if(S.uniformsList===null){let O=S.currentProgram.getUniforms();S.uniformsList=js.seqWithValue(O.seq,S.uniforms)}return S.uniformsList}function Lt(S,O){let X=pe.get(S);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function cr(S,O,X,Y,k){O.isScene!==!0&&(O=Oe),be.resetTextureUnits();let _e=O.fog,we=Y.isMeshStandardMaterial?O.environment:null,Be=U===null?x.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gi,Le=(Y.isMeshStandardMaterial?Je:je).get(Y.envMap||we),We=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,$e=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),xe=!!X.morphAttributes.position,ke=!!X.morphAttributes.normal,Ke=!!X.morphAttributes.color,gt=mi;Y.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(gt=x.toneMapping);let Mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=Mt!==void 0?Mt.length:0,Ve=pe.get(Y),It=p.state.lights;if(ut===!0&&(ie===!0||S!==M)){let on=S===M&&Y.id===b;me.setState(Y,S,on)}let St=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==It.state.version||Ve.outputColorSpace!==Be||k.isBatchedMesh&&Ve.batching===!1||!k.isBatchedMesh&&Ve.batching===!0||k.isBatchedMesh&&Ve.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Ve.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Ve.instancing===!1||!k.isInstancedMesh&&Ve.instancing===!0||k.isSkinnedMesh&&Ve.skinning===!1||!k.isSkinnedMesh&&Ve.skinning===!0||k.isInstancedMesh&&Ve.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ve.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ve.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ve.instancingMorph===!1&&k.morphTexture!==null||Ve.envMap!==Le||Y.fog===!0&&Ve.fog!==_e||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==me.numPlanes||Ve.numIntersection!==me.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==$e||Ve.morphTargets!==xe||Ve.morphNormals!==ke||Ve.morphColors!==Ke||Ve.toneMapping!==gt||Ve.morphTargetsCount!==bt)&&(St=!0):(St=!0,Ve.__version=Y.version);let mn=Ve.currentProgram;St===!0&&(mn=Yn(Y,O,k));let fs=!1,gn=!1,hr=!1,Ft=mn.getUniforms(),bn=Ve.uniforms;if(se.useProgram(mn.program)&&(fs=!0,gn=!0,hr=!0),Y.id!==b&&(b=Y.id,gn=!0),fs||M!==S){se.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ft.setValue(L,"projectionMatrix",S.projectionMatrix),Ft.setValue(L,"viewMatrix",S.matrixWorldInverse);let dn=Ft.map.cameraPosition;dn!==void 0&&dn.setValue(L,Ue.setFromMatrixPosition(S.matrixWorld)),ee.logarithmicDepthBuffer&&Ft.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ft.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),M!==S&&(M=S,gn=!0,hr=!0)}if(k.isSkinnedMesh){Ft.setOptional(L,k,"bindMatrix"),Ft.setOptional(L,k,"bindMatrixInverse");let on=k.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ft.setValue(L,"boneTexture",on.boneTexture,be))}k.isBatchedMesh&&(Ft.setOptional(L,k,"batchingTexture"),Ft.setValue(L,"batchingTexture",k._matricesTexture,be),Ft.setOptional(L,k,"batchingIdTexture"),Ft.setValue(L,"batchingIdTexture",k._indirectTexture,be),Ft.setOptional(L,k,"batchingColorTexture"),k._colorsTexture!==null&&Ft.setValue(L,"batchingColorTexture",k._colorsTexture,be));let En=X.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&ne.update(k,X,mn),(gn||Ve.receiveShadow!==k.receiveShadow)&&(Ve.receiveShadow=k.receiveShadow,Ft.setValue(L,"receiveShadow",k.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(bn.envMap.value=Le,bn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(bn.envMapIntensity.value=O.environmentIntensity),gn&&(Ft.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&Wl(bn,hr),_e&&Y.fog===!0&&he.refreshFogUniforms(bn,_e),he.refreshMaterialUniforms(bn,Y,J,de,p.state.transmissionRenderTarget[S.id]),js.upload(L,Ma(Ve),bn,be)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(js.upload(L,Ma(Ve),bn,be),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ft.setValue(L,"center",k.center),Ft.setValue(L,"modelViewMatrix",k.modelViewMatrix),Ft.setValue(L,"normalMatrix",k.normalMatrix),Ft.setValue(L,"modelMatrix",k.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let on=Y.uniformsGroups;for(let dn=0,ql=on.length;dn<ql;dn++){let Ui=on[dn];nt.update(Ui,mn),nt.bind(Ui,mn)}}return mn}function Wl(S,O){S.ambientLightColor.needsUpdate=O,S.lightProbe.needsUpdate=O,S.directionalLights.needsUpdate=O,S.directionalLightShadows.needsUpdate=O,S.pointLights.needsUpdate=O,S.pointLightShadows.needsUpdate=O,S.spotLights.needsUpdate=O,S.spotLightShadows.needsUpdate=O,S.rectAreaLights.needsUpdate=O,S.hemisphereLights.needsUpdate=O}function ni(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(S,O,X){let Y=pe.get(S);Y.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),pe.get(S.texture).__webglTexture=O,pe.get(S.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,O){let X=pe.get(S);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};let Xl=L.createFramebuffer();this.setRenderTarget=function(S,O=0,X=0){U=S,P=O,D=X;let Y=!0,k=null,_e=!1,we=!1;if(S){let Le=pe.get(S);if(Le.__useDefaultFramebuffer!==void 0)se.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Le.__webglFramebuffer===void 0)be.setupRenderTarget(S);else if(Le.__hasExternalTextures)be.rebindTextures(S,pe.get(S.texture).__webglTexture,pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let xe=S.depthTexture;if(Le.__boundDepthTexture!==xe){if(xe!==null&&pe.has(xe)&&(S.width!==xe.image.width||S.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");be.setupDepthRenderbuffer(S)}}let We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);let $e=pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray($e[O])?k=$e[O][X]:k=$e[O],_e=!0):S.samples>0&&be.useMultisampledRTT(S)===!1?k=pe.get(S).__webglMultisampledFramebuffer:Array.isArray($e)?k=$e[X]:k=$e,N.copy(S.viewport),V.copy(S.scissor),Z=S.scissorTest}else N.copy(De).multiplyScalar(J).floor(),V.copy(tt).multiplyScalar(J).floor(),Z=pt;if(X!==0&&(k=Xl),se.bindFramebuffer(L.FRAMEBUFFER,k)&&Y&&se.drawBuffers(S,k),se.viewport(N),se.scissor(V),se.setScissorTest(Z),_e){let Le=pe.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Le.__webglTexture,X)}else if(we){let Le=O;for(let We=0;We<S.textures.length;We++){let $e=pe.get(S.textures[We]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+We,$e.__webglTexture,X,Le)}}else if(S!==null&&X!==0){let Le=pe.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,X)}b=-1},this.readRenderTargetPixels=function(S,O,X,Y,k,_e,we,Be=0){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le){se.bindFramebuffer(L.FRAMEBUFFER,Le);try{let We=S.textures[Be],$e=We.format,xe=We.type;if(!ee.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ee.textureTypeReadable(xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=S.width-Y&&X>=0&&X<=S.height-k&&(S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Be),L.readPixels(O,X,Y,k,He.convert($e),He.convert(xe),_e))}finally{let We=U!==null?pe.get(U).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(S,O,X,Y,k,_e,we,Be=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&we!==void 0&&(Le=Le[we]),Le)if(O>=0&&O<=S.width-Y&&X>=0&&X<=S.height-k){se.bindFramebuffer(L.FRAMEBUFFER,Le);let We=S.textures[Be],$e=We.format,xe=We.type;if(!ee.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ee.textureTypeReadable(xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Be),L.readPixels(O,X,Y,k,He.convert($e),He.convert(xe),0);let Ke=U!==null?pe.get(U).__webglFramebuffer:null;se.bindFramebuffer(L.FRAMEBUFFER,Ke);let gt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Qu(L,gt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.deleteBuffer(ke),L.deleteSync(gt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,O=null,X=0){let Y=Math.pow(2,-X),k=Math.floor(S.image.width*Y),_e=Math.floor(S.image.height*Y),we=O!==null?O.x:0,Be=O!==null?O.y:0;be.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,we,Be,k,_e),se.unbindTexture()};let Uh=L.createFramebuffer(),Sa=L.createFramebuffer();this.copyTextureToTexture=function(S,O,X=null,Y=null,k=0,_e=null){_e===null&&(k!==0?(Us("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=k,k=0):_e=0);let we,Be,Le,We,$e,xe,ke,Ke,gt,Mt=S.isCompressedTexture?S.mipmaps[_e]:S.image;if(X!==null)we=X.max.x-X.min.x,Be=X.max.y-X.min.y,Le=X.isBox3?X.max.z-X.min.z:1,We=X.min.x,$e=X.min.y,xe=X.isBox3?X.min.z:0;else{let En=Math.pow(2,-k);we=Math.floor(Mt.width*En),Be=Math.floor(Mt.height*En),S.isDataArrayTexture?Le=Mt.depth:S.isData3DTexture?Le=Math.floor(Mt.depth*En):Le=1,We=0,$e=0,xe=0}Y!==null?(ke=Y.x,Ke=Y.y,gt=Y.z):(ke=0,Ke=0,gt=0);let bt=He.convert(O.format),Ve=He.convert(O.type),It;O.isData3DTexture?(be.setTexture3D(O,0),It=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(be.setTexture2DArray(O,0),It=L.TEXTURE_2D_ARRAY):(be.setTexture2D(O,0),It=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);let St=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),fs=L.getParameter(L.UNPACK_SKIP_PIXELS),gn=L.getParameter(L.UNPACK_SKIP_ROWS),hr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,We),L.pixelStorei(L.UNPACK_SKIP_ROWS,$e),L.pixelStorei(L.UNPACK_SKIP_IMAGES,xe);let Ft=S.isDataArrayTexture||S.isData3DTexture,bn=O.isDataArrayTexture||O.isData3DTexture;if(S.isDepthTexture){let En=pe.get(S),on=pe.get(O),dn=pe.get(En.__renderTarget),ql=pe.get(on.__renderTarget);se.bindFramebuffer(L.READ_FRAMEBUFFER,dn.__webglFramebuffer),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,ql.__webglFramebuffer);for(let Ui=0;Ui<Le;Ui++)Ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(S).__webglTexture,k,xe+Ui),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,pe.get(O).__webglTexture,_e,gt+Ui)),L.blitFramebuffer(We,$e,we,Be,ke,Ke,we,Be,L.DEPTH_BUFFER_BIT,L.NEAREST);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(k!==0||S.isRenderTargetTexture||pe.has(S)){let En=pe.get(S),on=pe.get(O);se.bindFramebuffer(L.READ_FRAMEBUFFER,Uh),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,Sa);for(let dn=0;dn<Le;dn++)Ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,En.__webglTexture,k,xe+dn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,En.__webglTexture,k),bn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,on.__webglTexture,_e,gt+dn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,on.__webglTexture,_e),k!==0?L.blitFramebuffer(We,$e,we,Be,ke,Ke,we,Be,L.COLOR_BUFFER_BIT,L.NEAREST):bn?L.copyTexSubImage3D(It,_e,ke,Ke,gt+dn,We,$e,we,Be):L.copyTexSubImage2D(It,_e,ke,Ke,We,$e,we,Be);se.bindFramebuffer(L.READ_FRAMEBUFFER,null),se.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else bn?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(It,_e,ke,Ke,gt,we,Be,Le,bt,Ve,Mt.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(It,_e,ke,Ke,gt,we,Be,Le,bt,Mt.data):L.texSubImage3D(It,_e,ke,Ke,gt,we,Be,Le,bt,Ve,Mt):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,ke,Ke,we,Be,bt,Ve,Mt.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,ke,Ke,Mt.width,Mt.height,bt,Mt.data):L.texSubImage2D(L.TEXTURE_2D,_e,ke,Ke,we,Be,bt,Ve,Mt);L.pixelStorei(L.UNPACK_ROW_LENGTH,St),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,fs),L.pixelStorei(L.UNPACK_SKIP_ROWS,gn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,hr),_e===0&&O.generateMipmaps&&L.generateMipmap(It),se.unbindTexture()},this.initRenderTarget=function(S){pe.get(S).__webglFramebuffer===void 0&&be.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?be.setTextureCube(S,0):S.isData3DTexture?be.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?be.setTexture2DArray(S,0):be.setTexture2D(S,0),se.unbindTexture()},this.resetState=function(){P=0,D=0,U=null,se.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var nr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Mn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Z_=new ji(-1,1,1,-1,0,1),_h=class extends Nt{constructor(){super(),this.setAttribute("position",new dt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dt([0,2,0,0,2,0],2))}},$_=new _h,Li=class{constructor(e){this._mesh=new yt($_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Z_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ir=class extends Mn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Wt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=gi.clone(e.uniforms),this.material=new Wt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Li(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ma=class extends Mn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Bl=class extends Mn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ol=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new oe);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Rn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ir(nr),this.copyPass.material.blending=Hn,this.clock=new es}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ma!==void 0&&(a instanceof ma?n=!0:a instanceof Bl&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var zl=class extends Mn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Nd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var sr=class i extends Mn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new oe(e.x,e.y):new oe(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(r,a,{type:Rn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new sn(r,a,{type:Rn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let d=new sn(r,a,{type:Rn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}let o=Nd;this.highPassUniforms=gi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new oe(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=gi.clone(nr.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:nr.vertexShader,fragmentShader:nr.fragmentShader,blending:An,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new Gt,this._fsQuad=new Li(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new oe(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Wt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new oe(.5,.5)},direction:{value:new oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Wt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};sr.BlurDirectionX=new oe(1,0);sr.BlurDirectionY=new oe(0,1);var ga={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var kl=class extends Mn{constructor(){super(),this.uniforms=gi.clone(ga.uniforms),this.material=new na({name:ga.name,uniforms:this.uniforms,vertexShader:ga.vertexShader,fragmentShader:ga.fragmentShader}),this._fsQuad=new Li(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===Et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Go?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Yo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===qo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var qe={count:8,platformY:3.55,ringRadius:12.85,minAlt:4.45,maxAlt:38,envelopeTop:16.18,armY:54.72,armRadius:15.95,totalHeight:72},Te=Math.PI*2,Sh=new C(0,1,0),cs=is.clamp,vh=is.damp,en={cream:15786180,creamLight:16314075,creamDeep:14139547,stone:13352358,stoneDark:9405298,wine:9252667,wineDeep:5643046,wineLight:11618900,teal:2120544,tealDeep:1194817,tealLight:3636606,gold:13673821,goldLight:15782034,goldDeep:9398323,iron:2830392,dark:1383462,wicker:11764560},xh={dusk:{sky:"dusk",fog:3228253,fogDensity:.00155,hemiSky:12175848,hemiGround:4928304,hemiIntensity:1.02,key:16760973,keyIntensity:2.55,keyPos:[56,72,46],rim:7845830,rimIntensity:1,ambient:6846097,ambientIntensity:.38,env:.68,exposure:.94,bloom:.34,bulb:1.4,cloud:15129832,cloudOpacity:.38,star:.32,baseGlow:48,crownGlow:120,dust:.58,shadow:1.05},night:{sky:"night",fog:1252401,fogDensity:.0017,hemiSky:7375292,hemiGround:2366757,hemiIntensity:.8,key:12637439,keyIntensity:1.9,keyPos:[-48,84,38],rim:6133682,rimIntensity:.68,ambient:3556195,ambientIntensity:.38,env:.58,exposure:.98,bloom:.52,bulb:1.82,cloud:9017529,cloudOpacity:.24,star:1,baseGlow:82,crownGlow:170,dust:1,shadow:.85},day:{sky:"day",fog:12110809,fogDensity:.00115,hemiSky:15332607,hemiGround:6844507,hemiIntensity:1.6,key:16773843,keyIntensity:3.1,keyPos:[64,96,54],rim:10211546,rimIntensity:.8,ambient:16771276,ambientIntensity:.6,env:1.02,exposure:.88,bloom:.14,bulb:.22,cloud:16775146,cloudOpacity:.44,star:0,baseGlow:10,crownGlow:22,dust:.12,shadow:1.2}},Fd=[{name:"\u7EDB\u4E91 \xB7 \u521D\u89C1\u822A\u7EBF",short:"\u7EDB\u4E91",accent:"#8d2f3b",note:"\u7EDB\u7EA2\u4E0E\u5976\u6CB9\u8272\u7403\u56CA\uFF0C\u7BEE\u8EAB\u7F16\u53F7 01\u3002\u7B2C\u4E00\u6B21\u5347\u7A7A\u7684\u4EBA\uFF0C\u9002\u5408\u4ECE\u5B83\u5F00\u59CB\u3002"},{name:"\u9752\u5C9A \xB7 \u4E91\u810A\u822A\u7EBF",short:"\u9752\u5C9A",accent:"#1f5b60",note:"\u5B54\u96C0\u9752\u4E0E\u8C61\u7259\u767D\u7403\u56CA\uFF0C\u7F16\u53F7 02\u3002\u5B83\u559C\u6B22\u5728\u4E91\u5C42\u6700\u9AD8\u5904\u591A\u505C\u4E00\u4F1A\u513F\u3002"},{name:"\u91D1\u6842 \xB7 \u66AE\u8272\u822A\u7EBF",short:"\u91D1\u6842",accent:"#8d2f3b",note:"\u7EDB\u7EA2\u4E0E\u5976\u6CB9\u8272\u7403\u56CA\uFF0C\u7BEE\u8EAB\u7F16\u53F7 03\u3002\u9002\u5408\u7B2C\u4E00\u6B21\u5347\u7A7A\u7684\u4EBA\u3002"},{name:"\u6708\u767D \xB7 \u661F\u6CB3\u822A\u7EBF",short:"\u6708\u767D",accent:"#1f5b60",note:"\u6708\u5149\u767D\u4E0E\u6DF1\u9752\u8272\u7403\u56CA\uFF0C\u7F16\u53F7 04\u3002\u591C\u91CC\uFF0C\u5B83\u7684\u91D1\u7EBF\u4F1A\u6700\u5148\u4EAE\u8D77\u6765\u3002"},{name:"\u7EEF\u971E \xB7 \u98CE\u4FE1\u822A\u7EBF",short:"\u7EEF\u971E",accent:"#8d2f3b",note:"\u843D\u65E5\u7EEF\u4E0E\u5976\u6CB9\u8272\u7403\u56CA\uFF0C\u7F16\u53F7 05\u3002\u98CE\u4ECE\u897F\u5357\u6765\u7684\u65F6\u5019\uFF0C\u5B83\u5347\u5F97\u6700\u8F7B\u3002"},{name:"\u677E\u70DF \xB7 \u6162\u4E91\u822A\u7EBF",short:"\u677E\u70DF",accent:"#1f5b60",note:"\u677E\u70DF\u9752\u4E0E\u6696\u767D\u7403\u56CA\uFF0C\u7F16\u53F7 06\u3002\u5B83\u7684\u5347\u964D\u6700\u6162\uFF0C\u9002\u5408\u770B\u5F88\u8FDC\u7684\u5730\u65B9\u3002"},{name:"\u661F\u7802 \xB7 \u591C\u822A\u822A\u7EBF",short:"\u661F\u7802",accent:"#8d2f3b",note:"\u9152\u7EA2\u661F\u7802\u4E0E\u5976\u6CB9\u8272\u7403\u56CA\uFF0C\u7F16\u53F7 07\u3002\u5165\u591C\u540E\uFF0C\u7BEE\u6CBF\u4F1A\u4EAE\u8D77\u56DB\u76CF\u5C0F\u706F\u3002"},{name:"\u591C\u6619 \xB7 \u6708\u5347\u822A\u7EBF",short:"\u591C\u6619",accent:"#1f5b60",note:"\u6DF1\u9752\u591C\u6619\u4E0E\u8C61\u7259\u767D\u7403\u56CA\uFF0C\u7F16\u53F7 08\u3002\u5B83\u662F\u661F\u51A0\u4E0B\u6700\u9AD8\u7684\u4E00\u6735\u3002"}],yh=5370206;function Ae(){return yh=yh*1664525+1013904223>>>0,yh/4294967296}function un(i,e,t,n={}){let s=document.createElement("canvas");s.width=i,s.height=e;let r=s.getContext("2d");t(r,i,e);let a=new ks(s);return a.colorSpace=n.noColorSpace?Wn:$t,a.wrapS=n.wrapS??Nn,a.wrapT=n.wrapT??Nn,n.repeat&&a.repeat.set(n.repeat[0],n.repeat[1]),a.anisotropy=Math.min(8,n.anisotropy??8),a.needsUpdate=!0,a}function _a(i,e,t,n,s,r){let a=Math.min(r,n/2,s/2);i.beginPath(),i.moveTo(e+a,t),i.lineTo(e+n-a,t),i.quadraticCurveTo(e+n,t,e+n,t+a),i.lineTo(e+n,t+s-a),i.quadraticCurveTo(e+n,t+s,e+n-a,t+s),i.lineTo(e+a,t+s),i.quadraticCurveTo(e,t+s,e,t+s-a),i.lineTo(e,t+a),i.quadraticCurveTo(e,t,e+a,t),i.closePath()}function Hl(i=128){return un(i,i,(e,t,n)=>{let s=e.createRadialGradient(t/2,n/2,0,t/2,n/2,t/2);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(.18,"rgba(255,244,214,.92)"),s.addColorStop(.45,"rgba(255,206,130,.34)"),s.addColorStop(.78,"rgba(255,180,90,.05)"),s.addColorStop(1,"rgba(255,170,80,0)"),e.fillStyle=s,e.fillRect(0,0,t,n)})}function J_(i=512){return un(i,i/2,(e,t,n)=>{e.clearRect(0,0,t,n);for(let s=0;s<18;s++){let r=t*(.16+Ae()*.68),a=n*(.3+Ae()*.42),o=n*(.1+Ae()*.28),l=e.createRadialGradient(r,a,0,r,a,o);l.addColorStop(0,`rgba(255,255,255,${.24+Ae()*.2})`),l.addColorStop(.45,`rgba(255,255,255,${.1+Ae()*.12})`),l.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=l,e.beginPath(),e.arc(r,a,o,0,Te),e.fill()}for(let s=0;s<8;s++){let r=t*(.1+Ae()*.8),a=n*(.55+Ae()*.25),o=t*(.1+Ae()*.2),l=n*(.03+Ae()*.06),c=e.createRadialGradient(r,a,0,r,a,o);c.addColorStop(0,"rgba(255,255,255,.15)"),c.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=c,e.save(),e.translate(r,a),e.scale(1,l/o),e.beginPath(),e.arc(0,0,o,0,Te),e.fill(),e.restore()}})}function K_(i){return un(2048,1024,n=>{let s=n.createLinearGradient(0,0,0,1024);if(i==="night"?(s.addColorStop(0,"#030611"),s.addColorStop(.32,"#0b1430"),s.addColorStop(.48,"#222947"),s.addColorStop(.54,"#5c4357"),s.addColorStop(.6,"#9c655e"),s.addColorStop(.67,"#2b2c42"),s.addColorStop(1,"#060a15")):i==="day"?(s.addColorStop(0,"#4b8fc8"),s.addColorStop(.25,"#82b8d9"),s.addColorStop(.47,"#d4e7ee"),s.addColorStop(.53,"#f5e9ce"),s.addColorStop(.61,"#d9d2c0"),s.addColorStop(1,"#9c9f93")):(s.addColorStop(0,"#26325e"),s.addColorStop(.26,"#4c5b86"),s.addColorStop(.42,"#9b869d"),s.addColorStop(.48,"#e0a488"),s.addColorStop(.53,"#f3cfa6"),s.addColorStop(.57,"#c98a77"),s.addColorStop(.63,"#68536c"),s.addColorStop(.78,"#33415e"),s.addColorStop(1,"#171d2e")),n.fillStyle=s,n.fillRect(0,0,2048,1024),i!=="day"){n.save(),n.translate(2048*.64,1024*.27),n.rotate(-.31);let d=n.createLinearGradient(0,-80,0,80);d.addColorStop(0,"rgba(150,170,220,0)"),d.addColorStop(.48,i==="night"?"rgba(188,190,230,.12)":"rgba(255,223,205,.08)"),d.addColorStop(1,"rgba(150,170,220,0)"),n.fillStyle=d,n.fillRect(-2048*.45,-100,2048*.9,200);for(let f=0;f<540;f++){let g=(Ae()-.5)*2048*.9,_=(Ae()-.5)*190,m=Math.max(0,1-Math.abs(_)/100)*(.12+Ae()*.4);n.fillStyle=`rgba(235,236,255,${m})`,n.beginPath(),n.arc(g,_,Ae()*1.05+.2,0,Te),n.fill()}n.restore();for(let f=0;f<(i==="night"?1180:420);f++){let g=Ae()*2048,_=Ae()*1024*.54,m=Math.pow(Ae(),3),p=.25+m*1.65,w=.18+m*.78;n.fillStyle=`rgba(${i==="night"?"236,240,255":"255,241,221"},${w})`,n.beginPath(),n.arc(g,_,p,0,Te),n.fill(),m>.62&&(n.strokeStyle=`rgba(255,246,224,${w*.32})`,n.lineWidth=.6,n.beginPath(),n.moveTo(g-p*3.2,_),n.lineTo(g+p*3.2,_),n.moveTo(g,_-p*3.2),n.lineTo(g,_+p*3.2),n.stroke())}}let r=i==="night"?2048*.735:2048*.755,a=i==="night"?1024*.35:i==="dusk"?1024*.535:1024*.24,o=i==="night"?190:i==="dusk"?250:235,l=n.createRadialGradient(r,a,0,r,a,o);i==="night"?(l.addColorStop(0,"rgba(245,241,224,.72)"),l.addColorStop(.045,"rgba(240,238,224,.55)"),l.addColorStop(.2,"rgba(185,201,237,.12)"),l.addColorStop(.6,"rgba(135,164,220,.025)"),l.addColorStop(1,"rgba(120,155,220,0)")):i==="dusk"?(l.addColorStop(0,"rgba(255,229,178,.56)"),l.addColorStop(.05,"rgba(255,209,145,.38)"),l.addColorStop(.22,"rgba(255,174,116,.12)"),l.addColorStop(.62,"rgba(255,142,100,.025)"),l.addColorStop(1,"rgba(255,130,90,0)")):(l.addColorStop(0,"rgba(255,252,230,.72)"),l.addColorStop(.06,"rgba(255,246,208,.46)"),l.addColorStop(.24,"rgba(255,238,191,.11)"),l.addColorStop(.7,"rgba(255,233,185,.018)"),l.addColorStop(1,"rgba(255,231,180,0)")),n.fillStyle=l,n.fillRect(r-o,a-o,o*2,o*2),n.beginPath(),n.arc(r,a,i==="night"?28:i==="dusk"?27:34,0,Te),n.fillStyle=i==="night"?"rgba(244,241,224,.8)":i==="dusk"?"rgba(255,225,171,.72)":"rgba(255,253,236,.92)",n.fill(),i==="night"&&(n.beginPath(),n.arc(r+13,a-9,26,0,Te),n.fillStyle="rgba(10,17,38,.72)",n.fill());let c=i==="night"?"120,138,178":i==="dusk"?"247,197,165":"255,251,239";for(let d=0;d<58;d++){let f=1024*(.44+Ae()*.23),g=Ae()*2048,_=2048*(.025+Ae()*.15),m=1024*(.008+Ae()*.035),p=n.createRadialGradient(g,f,0,g,f,_),w=.035+Ae()*.13;p.addColorStop(0,`rgba(${c},${w})`),p.addColorStop(.42,`rgba(${c},${w*.6})`),p.addColorStop(1,`rgba(${c},0)`),n.fillStyle=p,n.save(),n.translate(g,f),n.scale(1,m/_),n.beginPath(),n.arc(0,0,_,0,Te),n.fill(),n.restore()}for(let d=0;d<20;d++){let f=Ae()*2048,g=1024*(.25+Ae()*.18),_=2048*(.08+Ae()*.18),m=1024*(.003+Ae()*.009),p=n.createRadialGradient(f,g,0,f,g,_);p.addColorStop(0,`rgba(${c},${.018+Ae()*.04})`),p.addColorStop(1,`rgba(${c},0)`),n.fillStyle=p,n.save(),n.translate(f,g),n.scale(1,m/_),n.beginPath(),n.arc(0,0,_,0,Te),n.fill(),n.restore()}if(i==="night"){let d=[[450.56,153.6],[552.96,204.8],[675.84,184.32],[757.76,256],[696.32,317.44]];n.strokeStyle="rgba(210,220,255,.16)",n.lineWidth=.7,n.beginPath(),d.forEach(([f,g],_)=>{_===0?n.moveTo(f,g):n.lineTo(f,g)}),n.stroke(),d.forEach(([f,g])=>{n.fillStyle="rgba(245,239,210,.8)",n.beginPath(),n.arc(f,g,1.4,0,Te),n.fill()})}let h=n.createLinearGradient(0,1024*.47,0,1024*.58);h.addColorStop(0,"rgba(255,178,125,0)"),h.addColorStop(.55,i==="night"?"rgba(183,143,150,.12)":"rgba(255,208,158,.18)"),h.addColorStop(1,"rgba(255,174,118,0)"),n.fillStyle=h,n.fillRect(0,1024*.47,2048,1024*.12);let u=n.createLinearGradient(0,0,0,1024);u.addColorStop(0,"rgba(0,0,0,.12)"),u.addColorStop(.45,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,.18)"),n.fillStyle=u,n.fillRect(0,0,2048,1024)})}function Q_(i){let e=new Ji(430,56,36),t=new Gt({side:jt,depthWrite:!1,fog:!1,toneMapped:!1}),n=new yt(e,t);n.renderOrder=-20,i.add(n);let s=new Nt,r=new Float32Array(280*3);for(let u=0;u<280;u++){let d=Ae()*Te,f=.06+Ae()*1.25,g=400+Ae()*16;r[u*3]=Math.cos(f)*Math.sin(d)*g,r[u*3+1]=Math.sin(f)*g,r[u*3+2]=Math.cos(f)*Math.cos(d)*g}s.setAttribute("position",new Jt(r,3));let a=new qi({color:16774103,size:1.05,transparent:!0,opacity:.5,depthWrite:!1,blending:An,map:Hl(64),fog:!1,toneMapped:!1}),o=new zs(s,a);o.renderOrder=-19,i.add(o);let l=null,c=new Map;function h(u){l=u,c.has(u)||c.set(u,K_(u)),t.map=c.get(u),t.needsUpdate=!0,a.opacity=u==="night"?.52:u==="dusk"?.18:0}return{dome:n,stars:o,setMood:h,update(u){a.opacity=(l==="night"?.46:l==="dusk"?.16:0)+Math.sin(u*.8)*(l==="night"?.05:.015),o.rotation.y=u*.002}}}function j_(i){let e=J_(),t=new Dt;i.add(t);let n=[];for(let s=0;s<34;s++){let r=new Qn({map:e,transparent:!0,depthWrite:!1,opacity:.2,color:14669538,blending:ui,fog:!0,toneMapped:!1}),a=new pi(r),o=s/34*Te+Ae()*.22,l=48+Ae()*150;a.position.set(Math.sin(o)*l,2+Ae()*42,Math.cos(o)*l);let c=28+Ae()*62;a.scale.set(c*1.65,c*.55,1),a.userData={angle:o,radius:l,baseY:a.position.y,drift:.002+Ae()*.006,phase:Ae()*Te,baseOpacity:.12+Ae()*.18},t.add(a),n.push(a)}for(let s=0;s<16;s++){let r=new Qn({map:e,transparent:!0,depthWrite:!1,opacity:.3,color:14997214,fog:!0,toneMapped:!1}),a=new pi(r),o=s/16*Te+Ae()*.35,l=36+Ae()*42;a.position.set(Math.sin(o)*l,7+Ae()*24,Math.cos(o)*l),a.scale.set(24+Ae()*42,7+Ae()*14,1),a.userData={angle:o,radius:l,baseY:a.position.y,drift:.0018,phase:Ae()*Te,baseOpacity:.2},t.add(a),n.push(a)}for(let s=0;s<20;s++){let r=new Qn({map:e,transparent:!0,depthWrite:!1,opacity:.26,color:14144734,fog:!0,toneMapped:!1}),a=new pi(r),o=s/20*Te+.3,l=28+Ae()*38;a.position.set(Math.sin(o)*l,.4+Ae()*3.8,Math.cos(o)*l),a.scale.set(20+Ae()*34,7+Ae()*12,1),a.userData={angle:o,radius:l,baseY:a.position.y,drift:.0015,phase:Ae()*Te,baseOpacity:.2},t.add(a),n.push(a)}return{group:t,clouds:n,setMood(s,r){n.forEach((a,o)=>{a.material.color.setHex(r.cloud),a.material.opacity=(o<34?r.cloudOpacity:r.cloudOpacity*.9)*(1+o%3*.18),a.userData.baseOpacity=a.material.opacity})},update(s,r){n.forEach(a=>{let o=a.userData;o.angle+=s*o.drift,a.position.x=Math.sin(o.angle)*o.radius,a.position.z=Math.cos(o.angle)*o.radius,a.position.y=o.baseY+Math.sin(r*.12+o.phase)*.5,a.material.opacity=o.baseOpacity*(.85+Math.sin(r*.22+o.phase)*.15)})}}}function ev(i){let e=new Dt;i.add(e);let t=Hl(64),n=[];for(let s=0;s<20;s++){let r=new Qn({map:t,color:16761467,transparent:!0,opacity:.38,depthWrite:!1,blending:An,toneMapped:!1,fog:!0}),a=new pi(r),o=s/20*Te+Ae()*.3,l=27+Ae()*48,c=5+Ae()*44;a.position.set(Math.sin(o)*l,c,Math.cos(o)*l),a.scale.setScalar(1.2+Ae()*1.8),a.userData={angle:o,radius:l,baseY:c,phase:Ae()*Te,drift:.003+Ae()*.005,baseScale:a.scale.x,baseOpacity:.22+Ae()*.25,moodScale:1.05},e.add(a),n.push(a)}return{group:e,lanterns:n,setMood(s,r){n.forEach(a=>{a.userData.moodScale=s==="day"?.22:s==="night"?1.5:1.05})},update(s,r){n.forEach(a=>{let o=a.userData;o.angle+=s*o.drift,a.position.x=Math.sin(o.angle)*o.radius,a.position.z=Math.cos(o.angle)*o.radius,a.position.y=o.baseY+Math.sin(r*.3+o.phase)*1.1;let l=.86+Math.sin(r*1.1+o.phase)*.14;a.scale.setScalar(o.baseScale*l),a.material.opacity=o.baseOpacity*o.moodScale*(.8+Math.sin(r*1.4+o.phase)*.2)})}}}function Mh(i){return un(512,256,(e,t,n)=>{e.fillStyle="#f2e2c5",e.fillRect(0,0,t,n);let s=12,r=t/s;for(let a=0;a<s;a++)a%2===0&&(e.fillStyle=i,e.fillRect(a*r,0,r,n)),e.strokeStyle="rgba(194,155,87,.7)",e.lineWidth=2,e.beginPath(),e.moveTo(a*r,0),e.lineTo(a*r,n),e.stroke();e.fillStyle="rgba(198,155,87,.8)",e.fillRect(0,n*.08,t,5),e.fillRect(0,n*.9,t,5)})}function tv(i){let e=new Dt;i.add(e);let t=[[.7,-5],[2.5,-3.8],[4.3,-1.5],[4.6,1],[3.7,3.5],[2,5.1],[.2,5.4]].map(([o,l])=>new oe(o,l)),n=new Ws(t,20),s=[new ft({map:Mh("#8d2f3b"),side:wt,roughness:.82,metalness:.02}),new ft({map:Mh("#1f5b60"),side:wt,roughness:.82,metalness:.02}),new ft({map:Mh("#d4ad69"),side:wt,roughness:.82,metalness:.02})],r=new ft({color:10186050,roughness:.9}),a=[];for(let o=0;o<6;o++){let l=new Dt,c=o/6*Te+.37+Ae()*.2,h=88+Ae()*54,u=21+Ae()*36,d=.16+Ae()*.12;l.position.set(Math.sin(c)*h,u,Math.cos(c)*h),l.rotation.y=Ae()*Te,l.scale.setScalar(d);let f=new yt(n,s[o%s.length]);f.position.y=10.8,l.add(f);let g=new yt(new wn(1.3,1.1,1.3,8,1,!0),r);g.position.y=.8,l.add(g);let _=new Nt().setFromPoints([new C(-1.2,1.4,0),new C(-.6,5.7,0),new C(1.2,1.4,0),new C(.6,5.7,0)]);l.add(new Hr(_,new Xi({color:14005367,transparent:!0,opacity:.36}))),e.add(l),a.push({root:l,angle:c,radius:h,baseY:u,phase:Ae()*Te,drift:.0015+Ae()*.002,scale:d})}return{group:e,items:a,update(o,l){a.forEach(c=>{c.angle+=o*c.drift,c.root.position.x=Math.sin(c.angle)*c.radius,c.root.position.z=Math.cos(c.angle)*c.radius,c.root.position.y=c.baseY+Math.sin(l*.18+c.phase)*.8,c.root.rotation.y+=o*.005})}}}function nv(i){let t=new Float32Array(570),n=new Float32Array(190);for(let o=0;o<190;o++){let l=Ae()*Te,c=8+Ae()*46;t[o*3]=Math.sin(l)*c,t[o*3+1]=1+Ae()*56,t[o*3+2]=Math.cos(l)*c,n[o]=Ae()*Te}let s=new Nt;s.setAttribute("position",new Jt(t,3));let r=new qi({color:16767130,size:.42,transparent:!0,opacity:.42,map:Hl(64),depthWrite:!1,blending:An,fog:!0,toneMapped:!1}),a=new zs(s,r);return a.renderOrder=4,i.add(a),{points:a,setMood(o,l){r.opacity=.38*l.dust},update(o,l){let c=s.attributes.position.array;for(let h=0;h<190;h++)c[h*3+1]+=o*(.18+h%5*.035),c[h*3+1]>60&&(c[h*3+1]=1.4),c[h*3]+=Math.sin(l*.33+n[h])*o*.05,c[h*3+2]+=Math.cos(l*.27+n[h])*o*.05;s.attributes.position.needsUpdate=!0,r.opacity=.26+Math.sin(l*.7)*.05}}}function iv(){return un(2048,2048,(i,e,t)=>{let n=i.createRadialGradient(e/2,t/2,30,e/2,t/2,e*.52);n.addColorStop(0,"#d7cab4"),n.addColorStop(.38,"#c9bca6"),n.addColorStop(.72,"#ad9f8a"),n.addColorStop(1,"#81786b"),i.fillStyle=n,i.fillRect(0,0,e,t),i.strokeStyle="rgba(79,65,49,.12)",i.lineWidth=2;for(let a=0;a<22;a++){let o=a/22*t;i.beginPath(),i.moveTo(0,o),i.lineTo(e,o),i.stroke()}for(let a=0;a<22;a++){let o=a/22*e;i.beginPath(),i.moveTo(o,0),i.lineTo(o,t),i.stroke()}[[.148,"rgba(206,170,103,.46)",5],[.154,"rgba(39,63,66,.36)",2],[.238,"rgba(39,63,66,.3)",3],[.244,"rgba(206,170,103,.32)",2],[.357,"rgba(206,170,103,.2)",2],[.455,"rgba(39,63,66,.2)",2],[.463,"rgba(206,170,103,.18)",1]].forEach(([a,o,l])=>{i.strokeStyle=o,i.lineWidth=l,i.beginPath(),i.arc(e/2,t/2,e*a,0,Te),i.stroke()}),i.save(),i.translate(e/2,t/2);for(let a=0;a<32;a++){let o=a/32*Te;i.strokeStyle=a%4===0?"rgba(206,170,103,.18)":"rgba(39,63,66,.1)",i.lineWidth=a%4===0?3:1.5,i.beginPath(),i.moveTo(Math.sin(o)*e*.155,Math.cos(o)*e*.155),i.lineTo(Math.sin(o)*e*.47,Math.cos(o)*e*.47),i.stroke()}i.restore();for(let a=0;a<8;a++){let o=a/8*Te+Math.PI/8,l=e/2+Math.sin(o)*e*.292,c=t/2+Math.cos(o)*e*.292;i.save(),i.translate(l,c),i.rotate(-o),i.strokeStyle="rgba(206,170,103,.36)",i.fillStyle="rgba(39,63,66,.15)",i.lineWidth=3;let h=e*.035;i.beginPath();for(let u=0;u<16;u++){let d=u/16*Te-Math.PI/2,f=u%2?h*.36:h,g=Math.cos(d)*f,_=Math.sin(d)*f;u===0?i.moveTo(g,_):i.lineTo(g,_)}i.closePath(),i.fill(),i.stroke(),i.restore()}i.save(),i.translate(e/2,t/2),i.strokeStyle="rgba(206,170,103,.28)",i.lineWidth=3;for(let a=0;a<16;a++){let o=a/16*Te;i.beginPath(),i.ellipse(Math.sin(o)*e*.1,Math.cos(o)*e*.1,e*.055,e*.022,-o,0,Te),i.stroke()}i.restore();let r=i.createRadialGradient(e/2,t/2,e*.4,e/2,t/2,e*.52);r.addColorStop(0,"rgba(5,9,14,0)"),r.addColorStop(1,"rgba(5,9,14,.42)"),i.fillStyle=r,i.fillRect(0,0,e,t)})}function sv(){return un(2048,512,(i,e,t)=>{i.fillStyle="#163d42",i.fillRect(0,0,e,t);let n=16,s=e/n;for(let r=0;r<n;r++){let a=r*s;i.fillStyle=r%2?"#1d5055":"#153b41",i.fillRect(a,0,s,t),i.strokeStyle="rgba(208,165,93,.45)",i.lineWidth=2,i.strokeRect(a+7,12,s-14,t-24);let o=s*.58;i.save(),i.translate(a+s/2,t*.58),i.beginPath(),i.moveTo(-o/2,t*.3),i.lineTo(-o/2,-t*.02),i.arc(0,-t*.02,o/2,Math.PI,0),i.lineTo(o/2,t*.3),i.closePath();let l=i.createLinearGradient(0,-t*.2,0,t*.3);l.addColorStop(0,"rgba(255,208,142,.64)"),l.addColorStop(.35,"rgba(190,103,71,.4)"),l.addColorStop(1,"rgba(28,36,42,.84)"),i.fillStyle=l,i.fill(),i.strokeStyle="rgba(234,196,127,.72)",i.lineWidth=3,i.stroke(),i.restore(),r%2===0&&(i.fillStyle=r%4===0?"rgba(126,37,51,.78)":"rgba(92,30,43,.7)",i.beginPath(),i.moveTo(a+20,38),i.lineTo(a+s-20,38),i.quadraticCurveTo(a+s-28,120,a+s/2,132),i.quadraticCurveTo(a+28,120,a+20,38),i.fill(),i.strokeStyle="rgba(240,208,146,.4)",i.lineWidth=1.5,i.stroke()),i.beginPath(),i.arc(a+s/2,t*.88,10,0,Te),i.fillStyle="rgba(232,196,125,.55)",i.fill()}i.fillStyle="rgba(216,177,104,.75)",i.fillRect(0,0,e,7),i.fillRect(0,t-10,e,6),i.fillStyle="rgba(8,22,26,.45)",i.fillRect(0,t-34,e,24)})}function rv(){return un(2048,2048,(i,e,t)=>{i.fillStyle="#22585d",i.fillRect(0,0,e,t);let n=8,s=e/n;for(let a=0;a<n;a++){let o=a*s;i.fillStyle=a%2?"#2a6669":"#7a2734",i.fillRect(o,0,s,t),i.fillStyle=a%2?"rgba(14,41,46,.24)":"rgba(56,15,26,.19)",i.fillRect(o+24,0,s-48,t),i.strokeStyle="rgba(235,194,119,.56)",i.lineWidth=3,i.strokeRect(o+12,0,s-24,t),i.strokeStyle="rgba(255,239,207,.14)",i.lineWidth=1.5,i.strokeRect(o+20,9,s-40,t-18);for(let l=0;l<3;l++){let c=o+s*(.3+l*.2);i.strokeStyle="rgba(232,196,128,.18)",i.lineWidth=1.5,i.beginPath();for(let h=0;h<t;h+=38)i.moveTo(c-5,h),i.quadraticCurveTo(c+8,h+19,c-5,h+38);i.stroke()}for(let l=0;l<5;l++){let c=t*(.12+l*.19),h=23;i.save(),i.translate(o+s/2,c),i.strokeStyle="rgba(236,201,132,.52)",i.lineWidth=2,i.beginPath(),i.arc(0,0,h,0,Te),i.stroke(),i.beginPath();for(let u=0;u<16;u++){let d=u/16*Te-Math.PI/2,f=u%2?h*.38:h*.82,g=Math.cos(d)*f,_=Math.sin(d)*f;u===0?i.moveTo(g,_):i.lineTo(g,_)}i.closePath(),i.fillStyle="rgba(236,201,132,.22)",i.fill(),i.stroke(),i.restore()}if(a%2===0){i.save(),i.translate(o+s/2,t*.69);let l=s*.34,c=t*.13,h=i.createLinearGradient(0,-c,0,c);h.addColorStop(0,"rgba(255,214,151,.5)"),h.addColorStop(.5,"rgba(220,139,92,.22)"),h.addColorStop(1,"rgba(40,30,31,.08)"),i.fillStyle=h,i.beginPath(),i.moveTo(-l/2,c),i.lineTo(-l/2,-c*.35),i.arc(0,-c*.35,l/2,Math.PI,0),i.lineTo(l/2,c),i.closePath(),i.fill(),i.strokeStyle="rgba(235,197,127,.35)",i.lineWidth=2,i.stroke(),i.restore()}}for(let a=64;a<t;a+=170)i.fillStyle="rgba(223,181,107,.4)",i.fillRect(0,a,e,4),i.fillStyle="rgba(7,22,25,.28)",i.fillRect(0,a+4,e,8);let r=i.createLinearGradient(0,0,e,0);r.addColorStop(0,"rgba(0,0,0,.18)"),r.addColorStop(.5,"rgba(255,255,255,.04)"),r.addColorStop(1,"rgba(0,0,0,.2)"),i.fillStyle=r,i.fillRect(0,0,e,t)})}function av(i){return un(2048,1024,(e,t,n)=>{let s="#f2e2c5";e.fillStyle=s,e.fillRect(0,0,t,n);let r=16,a=t/r;for(let o=0;o<r;o++){let l=o*a;o%2===0&&(e.fillStyle=i,e.fillRect(l,0,a,n));let c=e.createLinearGradient(l,0,l+a,0);c.addColorStop(0,"rgba(36,20,20,.18)"),c.addColorStop(.16,"rgba(255,250,236,.08)"),c.addColorStop(.5,"rgba(255,255,255,.03)"),c.addColorStop(.84,"rgba(255,247,232,.08)"),c.addColorStop(1,"rgba(30,18,20,.22)"),e.fillStyle=c,e.fillRect(l,0,a,n),e.strokeStyle="rgba(191,150,83,.75)",e.lineWidth=3,e.beginPath(),e.moveTo(l+.5,0),e.lineTo(l+.5,n),e.stroke(),e.strokeStyle="rgba(255,236,195,.26)",e.lineWidth=1,e.beginPath(),e.moveTo(l+5,0),e.lineTo(l+5,n),e.stroke();for(let h=0;h<7;h++){let u=n*(.11+h*.13);e.fillStyle="rgba(228,191,122,.34)",e.beginPath(),e.arc(l+a/2,u,1.8,0,Te),e.fill()}}for(let o of[n*.085,n*.905]){e.fillStyle="rgba(199,155,87,.72)",e.fillRect(0,o,t,7),e.fillStyle="rgba(110,72,34,.24)",e.fillRect(0,o+7,t,4),e.strokeStyle="rgba(255,238,201,.38)",e.lineWidth=2;for(let l=0;l<t;l+=42)e.beginPath(),e.arc(l+21,o+3,10,Math.PI,0),e.stroke()}e.strokeStyle="rgba(215,176,107,.2)",e.lineWidth=1.2;for(let o=0;o<18;o++){let l=o/18*t;e.beginPath(),e.moveTo(l,n*.18),e.quadraticCurveTo(l+30,n*.5,l-8,n*.82),e.stroke()}for(let o=0;o<900;o++)e.fillStyle=`rgba(86,62,38,${.012+Ae()*.025})`,e.fillRect(Ae()*t,Ae()*n,1+Ae()*2,1+Ae()*2)},{anisotropy:8})}function Bd(i){return un(512,512,(e,t,n)=>{e.clearRect(0,0,t,n);let s=t/2,r=n/2,a=e.createRadialGradient(s,r,10,s,r,220);a.addColorStop(0,"#fbefd8"),a.addColorStop(.62,"#efdcb9"),a.addColorStop(1,"#c6a367"),e.fillStyle=a,e.beginPath(),e.arc(s,r,224,0,Te),e.fill(),e.strokeStyle="#b18444",e.lineWidth=8,e.beginPath(),e.arc(s,r,225,0,Te),e.stroke(),e.strokeStyle="rgba(255,246,222,.9)",e.lineWidth=2,e.beginPath(),e.arc(s,r,211,0,Te),e.stroke(),e.strokeStyle=i,e.lineWidth=3;for(let l=0;l<8;l++){let c=l/8*Te;e.beginPath(),e.arc(s+Math.cos(c)*172,r+Math.sin(c)*172,38,c-.9,c+.9),e.stroke()}e.save(),e.translate(s,r),e.beginPath();for(let l=0;l<16;l++){let c=l/16*Te-Math.PI/2,h=l%2?42:118,u=Math.cos(c)*h,d=Math.sin(c)*h;l===0?e.moveTo(u,d):e.lineTo(u,d)}e.closePath();let o=e.createLinearGradient(-100,-100,100,100);o.addColorStop(0,"#8f6430"),o.addColorStop(.5,"#d4ab65"),o.addColorStop(1,"#f3d596"),e.fillStyle=o,e.fill(),e.strokeStyle="rgba(255,248,226,.7)",e.lineWidth=2,e.stroke(),e.restore(),e.fillStyle=i,e.beginPath(),e.arc(s,r,22,0,Te),e.fill(),e.fillStyle="#f5e3c6",e.beginPath(),e.arc(s,r,9,0,Te),e.fill()})}function ov(){return un(512,512,(i,e,t)=>{i.fillStyle="#a87643",i.fillRect(0,0,e,t);let n=18;for(let s=0;s<n;s++){let r=s/n*t,a=s%2?"#c19058":"#b07c49";i.fillStyle=a,i.fillRect(0,r,e,t/n-2),i.fillStyle="rgba(60,34,17,.24)",i.fillRect(0,r+t/n-2,e,2),i.fillStyle="rgba(255,222,172,.14)",i.fillRect(0,r+2,e,1)}for(let s=0;s<e;s+=19)i.fillStyle="rgba(80,45,22,.3)",i.fillRect(s,0,4,t),i.fillStyle="rgba(255,221,170,.14)",i.fillRect(s+4,0,2,t);for(let s=0;s<500;s++){i.strokeStyle=`rgba(60,34,17,${.04+Ae()*.06})`,i.lineWidth=1;let r=Ae()*e,a=Ae()*t;i.beginPath(),i.moveTo(r,a),i.lineTo(r+8+Ae()*10,a+2),i.stroke()}},{wrapS:Vi,wrapT:Vi,repeat:[3,2]})}function lv(i,e){return un(512,220,(t,n,s)=>{t.clearRect(0,0,n,s);let r=t.createLinearGradient(0,0,n,s);r.addColorStop(0,"#163c41"),r.addColorStop(1,"#0c282d"),t.fillStyle=r,_a(t,12,12,n-24,s-24,8),t.fill(),t.strokeStyle="rgba(235,196,122,.8)",t.lineWidth=4,_a(t,12,12,n-24,s-24,8),t.stroke(),t.strokeStyle="rgba(235,196,122,.24)",t.lineWidth=1.5,_a(t,25,25,n-50,s-50,4),t.stroke(),t.textAlign="center",t.textBaseline="middle",t.fillStyle=e,t.font="500 24px Georgia, serif",t.letterSpacing="7px",t.fillText("CLOUD CROWN",n/2,s*.34),t.fillStyle="#f3d89f",t.font="400 82px Georgia, serif",t.fillText(String(i+1).padStart(2,"0"),n/2,s*.68)})}function cv(){return un(256,512,(i,e,t)=>{i.clearRect(0,0,e,t),i.beginPath(),i.moveTo(34,t-20),i.lineTo(34,t*.34),i.arc(e/2,t*.34,e/2-34,Math.PI,0),i.lineTo(e-34,t-20),i.closePath();let n=i.createLinearGradient(0,0,0,t);n.addColorStop(0,"rgba(255,229,181,.95)"),n.addColorStop(.24,"rgba(255,199,131,.72)"),n.addColorStop(.7,"rgba(162,82,57,.26)"),n.addColorStop(1,"rgba(24,28,34,.12)"),i.fillStyle=n,i.fill(),i.strokeStyle="rgba(239,205,144,.9)",i.lineWidth=7,i.stroke(),i.strokeStyle="rgba(255,244,215,.32)",i.lineWidth=2,i.beginPath(),i.moveTo(51,t-32),i.lineTo(51,t*.35),i.arc(e/2,t*.35,e/2-51,Math.PI,0),i.lineTo(e-51,t-32),i.stroke(),i.strokeStyle="rgba(48,27,26,.3)",i.lineWidth=2;for(let s=1;s<4;s++){let r=e/4*s;i.beginPath(),i.moveTo(r,t*.2),i.lineTo(r,t-25),i.stroke()}})}function hv(i,e,t={}){let n=t.width??1024,s=t.height??300;return un(n,s,r=>{r.clearRect(0,0,n,s),_a(r,12,12,n-24,s-24,10),r.fillStyle=t.bg??"rgba(12,30,35,.9)",r.fill(),r.strokeStyle=t.border??"rgba(231,193,119,.72)",r.lineWidth=3,r.stroke(),_a(r,26,26,n-52,s-52,4),r.strokeStyle="rgba(231,193,119,.18)",r.lineWidth=1.3,r.stroke(),r.textAlign="center",r.textBaseline="middle",r.fillStyle=t.accent??"#e5bf7a",r.font="400 27px Georgia, serif",r.fillText("\u2726",n*.055,s*.5),r.fillText("\u2726",n*.945,s*.5);try{r.letterSpacing="6px"}catch{}r.fillStyle=t.color??"#f7eacf",r.font=`500 ${t.mainSize??76}px "Songti SC", "STSong", Georgia, serif`,r.fillText(i,n/2,s*(e?.42:.52)),e&&(r.fillStyle=t.subColor??"#d4b16e",r.font='500 26px "Avenir Next", "Segoe UI", sans-serif',r.letterSpacing="8px",r.fillText(e,n/2,s*.68))})}function uv(){return un(512,512,(i,e,t)=>{i.clearRect(0,0,e,t),i.strokeStyle="rgba(234,198,129,.7)",i.lineWidth=5,i.beginPath(),i.arc(e/2,t/2,225,0,Te),i.stroke(),i.strokeStyle="rgba(234,198,129,.25)",i.lineWidth=2,i.beginPath(),i.arc(e/2,t/2,210,0,Te),i.stroke(),i.fillStyle="#f1ddba",i.textAlign="center",i.textBaseline="middle",i.font='500 54px "Songti SC", "STSong", Georgia, serif';try{i.letterSpacing="10px"}catch{}i.fillText("\u4E91\u4E0A",e/2,t*.42),i.fillText("\u661F\u7A79",e/2,t*.58),i.fillStyle="#d3ad68",i.font="400 20px Georgia, serif",i.letterSpacing="6px",i.fillText("THE CLOUD CROWN",e/2,t*.73)})}var z={gold:new ft({color:en.gold,metalness:.68,roughness:.27}),goldLight:new ft({color:en.goldLight,metalness:.55,roughness:.22}),goldDeep:new ft({color:en.goldDeep,metalness:.55,roughness:.4}),cream:new ft({color:en.cream,roughness:.72,metalness:.04}),creamLight:new ft({color:en.creamLight,roughness:.65,metalness:.04}),creamDeep:new ft({color:en.creamDeep,roughness:.76,metalness:.04}),stone:new ft({color:en.stone,roughness:.78,metalness:.04}),stoneDark:new ft({color:en.stoneDark,roughness:.9,metalness:.03}),wine:new ft({color:en.wine,roughness:.72,metalness:.05}),wineDeep:new ft({color:en.wineDeep,roughness:.78,metalness:.05}),wineLight:new ft({color:en.wineLight,roughness:.7,metalness:.05}),teal:new ft({color:en.teal,roughness:.66,metalness:.08}),tealDeep:new ft({color:en.tealDeep,roughness:.72,metalness:.08}),tealLight:new ft({color:en.tealLight,roughness:.64,metalness:.08}),iron:new ft({color:en.iron,roughness:.56,metalness:.42}),dark:new ft({color:en.dark,roughness:.82,metalness:.2}),wicker:new ft({color:16777215,roughness:.86,metalness:.02}),glassGlow:new Gt({color:16766106,transparent:!0,opacity:.72,toneMapped:!1,side:wt}),warmGlow:new Gt({color:16760178,toneMapped:!1}),flame:new Gt({color:16751939,transparent:!0,opacity:.3,blending:An,depthWrite:!1,side:wt,toneMapped:!1}),rope:new Xi({color:14137199,transparent:!0,opacity:.58,toneMapped:!1}),ropeCylinder:new ft({color:14269568,metalness:.34,roughness:.47,emissive:3812118,emissiveIntensity:.35}),cable:new ft({color:13476959,metalness:.6,roughness:.35}),starGold:new ft({color:14267245,metalness:.58,roughness:.3,emissive:5979418,emissiveIntensity:.55}),cloth:new ft({color:en.wine,roughness:.82,metalness:.02,side:wt})};z.flagWine=z.wine.clone();z.flagWine.side=wt;z.flagTeal=z.teal.clone();z.flagTeal.side=wt;z.flagCream=z.cream.clone();z.flagCream.side=wt;z.roofWine=z.wine.clone();z.roofWine.side=wt;z.roofWine.emissive=new Xe(3938845);z.roofWine.emissiveIntensity=.35;z.roofCream=z.cream.clone();z.roofCream.side=wt;z.roofCream.emissive=new Xe(3811863);z.roofCream.emissiveIntensity=.25;z.roofTeal=z.teal.clone();z.roofTeal.side=wt;z.roofTeal.emissive=new Xe(928812);z.roofTeal.emissiveIntensity=.32;var dv=Hl(128),fv=ov();z.wicker.map=fv;z.wicker.side=wt;z.wicker.needsUpdate=!0;function pv(i=1,e=.43,t=5,n=.1){let s=new Vs;for(let a=0;a<t*2;a++){let o=a/(t*2)*Te-Math.PI/2,l=a%2?e:i,c=Math.cos(o)*l,h=Math.sin(o)*l;a===0?s.moveTo(c,h):s.lineTo(c,h)}s.closePath();let r=new jr(s,{depth:n,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:2,curveSegments:2});return r.center(),r}var Od=pv(1,.43,5,.13);function kt(i,e,t,n=0,s=0,r=0,a={}){let o=new yt(e,t);return o.position.set(n,s,r),a.rx&&(o.rotation.x=a.rx),a.ry&&(o.rotation.y=a.ry),a.rz&&(o.rotation.z=a.rz),(a.sx||a.sy||a.sz)&&o.scale.set(a.sx??1,a.sy??1,a.sz??1),a.cast&&(o.castShadow=!0),a.receive&&(o.receiveShadow=!0),i.add(o),o}function an(i,e,t,n,s,r,a,o,l={}){return kt(i,new Ai(e,t,n),o,s,r,a,l)}function ot(i,e,t,n,s,r,a,o,l,c={}){return kt(i,new wn(e,t,n,s,1,c.open??!1,c.thetaStart??0,c.thetaLength??Te),l,r,a,o,c)}function Xt(i,e,t,n,s,r,a,o={}){return kt(i,new Ji(e,t,Math.max(6,Math.round(t*.62))),a,n,s,r,o)}function ht(i,e,t,n,s,r,a,o,l,c={}){return kt(i,new ea(e,t,n,s,c.arc??Te),l,r,a,o,c)}function Xn(i,e,t,n,s,r=6){let a=new C().addVectors(e,t).multiplyScalar(.5),o=new C().subVectors(t,e),l=o.length(),c=new yt(new wn(n,n,l,r),s);return c.position.copy(a),c.quaternion.setFromUnitVectors(Sh,o.normalize()),i.add(c),c}function mt(i,e){return new C(Math.sin(i)*e,0,Math.cos(i)*e)}function hs(i,e,t,n,s,r,a=.55){let o=new Qn({map:dv,color:e,transparent:!0,opacity:a,depthWrite:!1,blending:An,toneMapped:!1}),l=new pi(o);return l.position.set(n,s,r),l.scale.setScalar(t),i.add(l),l}var va=class{constructor(e,{width:t=1.2,height:n=.55,x:s=0,y:r=0,z:a=0,material:o=z.wine,phase:l=0,pole:c=0}){this.group=new Dt,this.group.position.set(s,r,a),e.add(this.group),this.phase=l,c>0&&ot(this.group,.035,.045,c,6,0,c/2,0,z.gold);let h=new hn(t,n,9,2);h.translate(t/2,-n/2,0),this.base=h.attributes.position.array.slice(),this.width=t,this.height=n,this.mesh=new yt(h,o),this.mesh.position.set(0,c>0?c-.05:0,0),this.group.add(this.mesh),this.mesh.castShadow=!1}update(e){let t=this.mesh.geometry.attributes.position,n=t.array,s=this.base;for(let r=0;r<n.length;r+=3){let a=s[r],o=s[r+1],l=a/this.width;n[r]=a,n[r+1]=o+Math.sin(e*1.8+this.phase+l*3.2)*.04*l,n[r+2]=Math.sin(e*2.1+this.phase+l*4.6)*.11*l}t.needsUpdate=!0}},bh=class{constructor(e){this.parent=e,this.items=[],this.meshes=[],this.materials=[],this.scale=1}add(e,t,n,s=1){this.items.push({x:e,y:t,z:n,scale:s})}finalize(){let e=new Ji(.105,8,6);for(let t=0;t<3;t++){let n=this.items.filter((o,l)=>l%3===t);if(!n.length)continue;let s=new Gt({color:16766875,toneMapped:!1}),r=new kr(e,s,n.length),a=new zt;n.forEach((o,l)=>{a.position.set(o.x,o.y,o.z),a.scale.setScalar(o.scale),a.updateMatrix(),r.setMatrixAt(l,a.matrix);let c=new Xe(16766875);c.multiplyScalar(.78+l%5*.06),r.setColorAt(l,c)}),r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0),r.frustumCulled=!1,this.parent.add(r),this.meshes.push(r),this.materials.push(s)}}update(e,t){let n=t;this.materials.forEach((s,r)=>{let a=.82+Math.sin(e*1.25+r*2.1)*.16;s.color.setRGB(1.55*n*a,1.03*n*a,.53*n*a)})}setMood(e){this.scale=e}};function zd({scene:i,renderer:e,bloom:t,isMobile:n=!1}){let s=new Dt;i.add(s);let r=Q_(i),a=j_(i),o=nv(i),l=ev(i),c=tv(i),h=new bh(s),u=[],d=[],f=new ra(12175848,4928304,1.2);i.add(f);let g=new Xs(16760973,2.2);g.position.set(56,72,46),g.castShadow=!1,i.add(g),i.add(g.target);let _=new Xs(7845830,1);_.position.set(-52,38,-46),i.add(_);let m=new aa(6846097,.46);i.add(m);let p=new jn(16760194,54,38,2);p.position.set(0,6.2,4),i.add(p);let w=new jn(16766106,130,48,2);w.position.set(0,51,0),i.add(w);let y=new jn(16758388,16,9,2);i.add(y);let x=new jn(16760190,60,30,2);x.position.set(0,6.2,12.5),i.add(x);let I=new jn(16761740,32,28,2);I.position.set(0,27,7.4),i.add(I);let P=[];for(let[E,T]of[[-11,14],[11,14],[-14,-6],[14,-6]]){let F=new jn(16756846,26,23,2);F.position.set(E,2.7,T),i.add(F),P.push(F)}i.fog=new Fr(3228253,.00155);let D=document.createElement("canvas");D.width=1024,D.height=512;{let E=D.getContext("2d"),T=E.createLinearGradient(0,0,0,512);T.addColorStop(0,"#667fa4"),T.addColorStop(.42,"#ecd3b7"),T.addColorStop(.55,"#a57863"),T.addColorStop(.62,"#3d3b4b"),T.addColorStop(1,"#161b27"),E.fillStyle=T,E.fillRect(0,0,1024,512);let F=E.createRadialGradient(760,215,0,760,215,180);F.addColorStop(0,"rgba(255,248,221,.95)"),F.addColorStop(.18,"rgba(255,215,161,.5)"),F.addColorStop(1,"rgba(255,190,130,0)"),E.fillStyle=F,E.fillRect(540,0,440,400);for(let ue=0;ue<16;ue++){let Ge=40+ue*62,Ie=16+Ae()*22,Qe=E.createLinearGradient(Ge,250,Ge,500);Qe.addColorStop(0,"rgba(255,228,177,0)"),Qe.addColorStop(.4,`rgba(255,213,151,${.06+Ae()*.09})`),Qe.addColorStop(1,"rgba(255,200,140,0)"),E.fillStyle=Qe,E.fillRect(Ge,240,Ie,200)}E.fillStyle="rgba(10,16,24,.28)",E.fillRect(0,492,1024,20)}let U=new ks(D);U.mapping=Ys,U.colorSpace=$t;let b=new er(e);b.compileEquirectangularShader();let M=b.fromEquirectangular(U);i.environment=M.texture,U.dispose(),b.dispose();let N=iv(),V=new ft({map:N,color:16777215,roughness:.63,metalness:.14,envMapIntensity:.55}),Z=new yt(new kn(86,128),V);Z.rotation.x=-Math.PI/2,Z.position.y=-.04,Z.receiveShadow=!0,s.add(Z);let Q=ht(s,85.2,.4,6,128,0,.02,0,z.stoneDark,{rx:-Math.PI/2});Q.receiveShadow=!0,ht(s,72,.12,4,96,0,.05,0,z.goldDeep,{rx:-Math.PI/2}),ht(s,56,.1,4,96,0,.04,0,z.goldDeep,{rx:-Math.PI/2}),ht(s,38,.07,4,96,0,.03,0,z.goldDeep,{rx:-Math.PI/2});let j=[z.wineLight,z.goldLight,z.creamLight,z.tealLight];for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,27.5),ue=new Dt;ue.position.set(F.x,0,F.z),s.add(ue),ot(ue,3,3.3,.42,20,0,.21,0,z.stone,{receive:!0}),ot(ue,2.8,2.9,.12,20,0,.47,0,z.creamDeep,{}),ht(ue,2.86,.045,4,40,0,.54,0,z.gold,{rx:Math.PI/2}),Xt(ue,2.3,12,0,1.18,0,z.tealDeep,{sy:.52,sz:.86,sx:.92,cast:!0}).scale.multiplyScalar(1);for(let Ie=0;Ie<7;Ie++){let Qe=Ie/7*Te+E,xt=1.2+Ae()*.9;Xt(ue,.07+Ae()*.04,5,Math.sin(Qe)*xt,1.55+Ae()*.25,Math.cos(Qe)*xt*.7,j[(E+Ie)%j.length],{})}h.add(F.x+Math.sin(T)*2.15,1.55,F.z+Math.cos(T)*2.15,.8),E%2===0&&(ot(ue,.06,.09,2.9,6,2.4,1.45,0,z.iron),Xt(ue,.2,8,2.4,2.95,0,z.warmGlow,{}),h.add(F.x+2.4*Math.sin(T+Math.PI/2),2.95,F.z+2.4*Math.cos(T+Math.PI/2),1.1),d.push(hs(s,16761469,2.5,F.x+2.4*Math.sin(T+Math.PI/2),2.95,F.z+2.4*Math.cos(T+Math.PI/2),.35)))}let G=new Dt;s.add(G);let de=new Gt({map:cv(),transparent:!0,depthWrite:!1,toneMapped:!1,opacity:.94});ot(G,22.2,23.2,.42,64,0,.21,0,z.stoneDark,{receive:!0}),ot(G,20.7,21.5,.45,64,0,.64,0,z.stone,{receive:!0}),ht(G,22.25,.08,4,80,0,.45,0,z.goldDeep,{rx:Math.PI/2}),ht(G,20.75,.06,4,80,0,.88,0,z.goldDeep,{rx:Math.PI/2});let J=sv(),Me=new ft({map:J,roughness:.7,metalness:.08,emissive:4925976,emissiveMap:J,emissiveIntensity:.22});ot(G,17.15,17.65,2.52,64,0,2.16,0,Me,{open:!0}),ot(G,17.5,17.5,.16,64,0,3.47,0,z.goldDeep,{}),ot(G,17.15,17.15,.3,64,0,3.62,0,z.stone,{receive:!0}),ht(G,17.17,.1,4,96,0,3.78,0,z.gold,{rx:Math.PI/2}),ot(G,16,16,.06,64,0,3.8,0,z.tealDeep,{});for(let E=0;E<16;E++){let T=E/16*Te,F=mt(T,17.46);if(an(G,.34,2.5,.3,F.x,2.12,F.z,z.goldDeep,{ry:T}),Xt(G,.19,6,F.x,3.44,F.z,z.gold,{}),E%2===0){let ue=kt(G,new hn(2.1,3.3),de,Math.sin(T)*17.48,2.2,Math.cos(T)*17.48,{ry:T});ue.renderOrder=2}}for(let E=0;E<16;E++){let T=E/16*Te,F=mt(T,17.2);an(G,.18,1.9,.2,F.x,1.25,F.z,z.goldDeep,{ry:T})}let Pe=[];for(let E=0;E<16;E++){let T=E/16*Te;if(Math.abs((T+Math.PI)%Te-Math.PI)<.18)continue;Pe.push(T);let F=mt(T,16.82),ue=an(G,5.3,.92,.11,F.x,4.24,F.z,z.tealDeep,{ry:T});ue.receiveShadow=!0,an(G,5.38,.07,.14,F.x,4.71,F.z,z.gold,{ry:T}),an(G,5.38,.07,.14,F.x,3.79,F.z,z.goldDeep,{ry:T});let Ge=kt(G,new hn(3.6,.65),z.cloth,Math.sin(T)*16.73,4.16,Math.cos(T)*16.73,{ry:T}),Ie=kt(G,new kn(.24,12),z.goldLight,Math.sin(T)*16.74,4.24,Math.cos(T)*16.74,{ry:T});Ie.material=z.goldLight;let Qe=mt(T+Math.PI/16,16.82);ot(G,.075,.11,1.2,6,Qe.x,4.28,Qe.z,z.gold),Xt(G,.15,7,Qe.x,4.94,Qe.z,z.warmGlow,{}),h.add(Qe.x,4.94,Qe.z,1.1)}let De=Pe.slice().sort((E,T)=>E-T);for(let E=0;E<De.length;E++){let T=De[E],F=De[(E+1)%De.length],ue=F-T;if(ue<0&&(ue+=Te),ue>.5)continue;let Ge=mt(T+Math.PI/16,16.82),Ie=mt(F+Math.PI/16,16.82);Ge.distanceTo(Ie)>8||(Xn(G,new C(Ge.x,4.94,Ge.z),new C(Ie.x,4.94,Ie.z),.045,z.gold),Xn(G,new C(Ge.x,3.93,Ge.z),new C(Ie.x,3.93,Ie.z),.03,z.goldDeep))}let tt=Bd("#8d2f3b"),pt=new ft({map:tt,transparent:!0,roughness:.5,metalness:.3,side:wt});for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,qe.ringRadius),ue=kt(G,new kn(1.45,32),pt,F.x,3.8,F.z,{rx:-Math.PI/2});ue.renderOrder=1,ht(G,1.52,.035,4,32,F.x,3.81,F.z,z.gold,{rx:Math.PI/2});let Ge=mt(T,qe.ringRadius+1.9);an(G,2.2,.28,1.25,Ge.x,3.86,Ge.z,z.stoneDark,{ry:T}),an(G,2,.06,1.05,Ge.x,4.02,Ge.z,z.goldDeep,{ry:T})}let rt=new Dt;G.add(rt);let ut=9,ie=qe.platformY/ut,le=.82;for(let E=0;E<ut;E++){let T=(E+.5)*ie,F=16.9+(ut-1-E)*le;an(rt,8.8,ie,le+.05,0,T,F,E%2?z.stone:z.creamDeep,{receive:!0}),an(rt,9,.045,.12,0,T+ie/2,F-le/2,z.goldDeep)}for(let E of[-4.55,4.55]){for(let ue=0;ue<6;ue++){let Ge=17.1+ue*1.15,Ie=.6+ue*1.15/(ut*le)*qe.platformY;ot(rt,.055,.075,1,6,E,Math.min(qe.platformY+.45,Ie),Ge,z.gold)}let T=new C(E,.85,24.9),F=new C(E,qe.platformY+.82,16.8);Xn(rt,T,F,.055,z.gold)}for(let E of[-5.2,5.2])ot(rt,.24,.36,4.1,8,E,qe.platformY+2.05,16.4,z.goldDeep),ot(rt,.35,.35,.16,8,E,qe.platformY+.1,16.4,z.gold),Xt(rt,.3,8,E,qe.platformY+4.22,16.4,z.goldLight,{}),h.add(E,qe.platformY+4.25,16.4,1.25);let Ue=kt(rt,new hn(9.2,2.55),new Gt({map:hv("\u4E91 \u4E0A \u661F \u7A79","THE CLOUD CROWN  \xB7  72 M",{width:1024,height:300}),transparent:!0,depthWrite:!1,toneMapped:!1}),0,qe.platformY+3.2,16.75);Ue.renderOrder=3;for(let E=0;E<9;E++)h.add(-4.2+E*1.05,qe.platformY+2.05,16.7,.85);for(let E=0;E<8;E++){let T=-4.4+E*1.25;if(ot(rt,.055,.07,1,5,T,.5,27.2,z.goldDeep),E<7){let F=T+1.25,ue=new Yi(new C(T,.82,27.2),new C((T+F)/2,.66,27.2),new C(F,.82,27.2)),Ge=new yt(new ta(ue,8,.018,4,!1),z.wineDeep);rt.add(Ge)}}for(let E of[-5.2,5.2])d.push(hs(s,16761983,4.2,E,qe.platformY+4.25,16.4,.6));let te=new Dt;s.add(te);let Oe=rv(),at=new ft({map:Oe,roughness:.57,metalness:.18,emissive:3810841,emissiveMap:Oe,emissiveIntensity:.22});ot(te,5.55,5.9,6.2,32,0,qe.platformY+3.1,0,at,{cast:!0,receive:!0}),ht(te,5.7,.16,5,64,0,9.62,0,z.goldDeep,{rx:Math.PI/2}),ht(te,5.78,.09,4,64,0,3.73,0,z.gold,{rx:Math.PI/2});for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,5.55);ot(te,.17,.21,6,7,F.x,qe.platformY+3,F.z,z.gold),Xt(te,.26,7,F.x,qe.platformY+6.08,F.z,z.goldLight),an(te,.5,.18,.5,F.x,qe.platformY+.1,F.z,z.goldDeep,{ry:T})}for(let E=0;E<4;E++){let T=E/4*Te+Math.PI/4,F=kt(te,new hn(2.35,3.9),de,Math.sin(T)*5.72,qe.platformY+2.55,Math.cos(T)*5.72,{ry:T});F.renderOrder=2}ot(te,6.35,6.65,.28,32,0,9.9,0,z.stone,{cast:!0}),ht(te,6.45,.08,4,64,0,10.1,0,z.gold,{rx:Math.PI/2});for(let E=0;E<24;E++){let T=E/24*Te,F=mt(T,6.25);ot(te,.045,.06,.8,5,F.x,10.55,F.z,z.gold),E%3===0&&(Xt(te,.11,6,F.x,11,F.z,z.warmGlow),h.add(F.x,11,F.z,.9))}ht(te,6.25,.035,4,64,0,10.95,0,z.gold,{rx:Math.PI/2}),ot(te,2.8,4.1,33,32,0,27,0,at,{cast:!0,receive:!0});for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,4.02),ue=mt(T,2.86);Xn(te,new C(F.x,10.8,F.z),new C(ue.x,43.2,ue.z),.055,z.gold,5);for(let Ge=13;Ge<42.5;Ge+=2.45){let Ie=(Ge-10.8)/32.4,Qe=4.08+(2.9-4.08)*Ie,xt=mt(T,Qe);h.add(xt.x,Ge,xt.z,.55)}}for(let[E,T,F]of[[21.6,.85,2.2],[34.4,.78,2]]){let ue=(E-10.8)/32.4,Ge=4.04+(2.88-4.04)*ue;for(let Ie=0;Ie<8;Ie++){let Qe=Ie/8*Te+Math.PI/8,xt=mt(Qe,Ge),At=kt(te,new hn(T,F),de,xt.x,E,xt.z,{ry:Qe});At.renderOrder=2}}for(let[E,T,F]of[[18.2,3.65,.08],[25.4,3.37,.07],[32.8,3.08,.08],[39.6,2.86,.07]])ht(te,T,F,4,48,0,E,0,z.gold,{rx:Math.PI/2});ot(te,4.7,4.85,.22,28,0,32.45,0,z.stone,{cast:!0}),ht(te,4.73,.06,4,48,0,32.6,0,z.gold,{rx:Math.PI/2});for(let E=0;E<20;E++){let T=E/20*Te,F=mt(T,4.62);ot(te,.04,.05,.72,5,F.x,33,F.z,z.gold),E%4===0&&h.add(F.x,33.38,F.z,.8)}ht(te,4.62,.03,4,48,0,33.36,0,z.gold,{rx:Math.PI/2});for(let[E,T]of[[17,1.62],[27,1.42],[38.5,1.22]]){let F=4.02-(E-10.8)*.038;for(let ue=0;ue<4;ue++){let Ge=ue/4*Te,Ie=mt(Ge,F),Qe=kt(te,new kn(T,28),pt,Ie.x,E,Ie.z,{ry:Ge});Qe.renderOrder=2;let xt=kt(te,Od,z.starGold,Ie.x*1.015,E,Ie.z*1.015,{ry:Ge});xt.scale.setScalar(T*.5),xt.renderOrder=3}}for(let E=0;E<7;E++){let T=12.2+E*4.4,F=4.42-E*.13,ue=mt(0,F);an(te,.22,1.5,.3,ue.x,T,ue.z,z.gold,{ry:0}),Xt(te,.13,6,ue.x,T+.9,ue.z,z.goldLight)}ot(te,4.85,3.5,.8,24,0,42.95,0,z.goldDeep,{cast:!0}),ot(te,4.55,4.85,.25,24,0,43.38,0,z.cream,{}),ht(te,4.8,.1,4,48,0,43.55,0,z.gold,{rx:Math.PI/2});for(let E=0;E<16;E++){let T=E/16*Te,F=mt(T,4.82);h.add(F.x,43.62,F.z,.82)}ot(te,4.55,3.6,8.4,24,0,47,0,at,{cast:!0,receive:!0});for(let[E,T]of[[43.4,3.15],[47.9,3.75],[51.1,4.4]])ht(te,T,.11,4,48,0,E,0,z.gold,{rx:Math.PI/2});for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,4.35),ue=kt(te,new hn(2.25,4.3),de,F.x,48.15,F.z,{ry:T});ue.renderOrder=2,h.add(Math.sin(T+.25)*4.55,50.6,Math.cos(T+.25)*4.55,.8)}ot(te,6.25,6,.28,40,0,53.15,0,z.stone,{cast:!0}),ht(te,6.22,.1,4,72,0,53.35,0,z.gold,{rx:Math.PI/2});for(let E=0;E<32;E++){let T=E/32*Te,F=mt(T,6.05);ot(te,.04,.05,.82,5,F.x,53.75,F.z,z.gold),E%2===0&&h.add(F.x,54.2,F.z,.75)}ht(te,6.05,.03,4,64,0,54.2,0,z.gold,{rx:Math.PI/2});let Pt=uv(),L=kt(te,new kn(2.1,40),new Gt({map:Pt,transparent:!0,depthWrite:!1,toneMapped:!1}),0,50.2,4.55);L.renderOrder=3,ot(te,3.25,3.5,.4,16,0,53.55,0,z.goldDeep);for(let E=0;E<8;E++){let T=E/8*Te,F=mt(T,1.75);ot(te,.08,.1,2.4,6,F.x,60.5,F.z,z.gold)}ot(te,1.65,1.65,2.2,16,0,60.5,0,z.glassGlow,{open:!0}),ht(te,1.74,.06,4,32,0,59.6,0,z.gold,{rx:Math.PI/2}),ht(te,1.74,.06,4,32,0,61.4,0,z.gold,{rx:Math.PI/2}),ot(te,2.85,2.4,1.1,16,0,62.9,0,z.goldDeep),ot(te,2.45,2.85,2.5,16,0,64.6,0,z.wine,{cast:!0});for(let E=0;E<16;E++){let T=E/16*Te,F=mt(T,2.73);Xn(te,new C(F.x,65.8,F.z),new C(0,68,0),.035,z.gold,4)}Xt(te,1.05,14,0,66.3,0,z.gold,{sy:.72}),Xt(te,.55,12,0,67.4,0,z.goldLight,{sy:.8});let ce=new yt(new $i(.6,0),z.goldLight);ce.position.set(0,68.45,0),te.add(ce),ot(te,.06,.06,3.4,6,0,70.6,0,z.gold);let re=new va(te,{width:2.9,height:1.15,y:72.2,material:z.flagWine,phase:.7});u.push(re),re.mesh.position.set(0,0,0),re.group.position.set(0,71.5,0),re.mesh.position.y=.55;let ee=new Dt;te.add(ee);let se=16,Se=[z.roofWine,z.roofCream,z.roofCream];for(let E=0;E<se;E++){let T=E/se*Te,F=Te/se,ue=E%8===2?z.roofTeal:Se[E%3],Ge=new yt(new wn(.26,16.55,7.2,2,1,!0,T,F),ue);Ge.position.y=58.55,Ge.castShadow=!0,ee.add(Ge);let Ie=mt(T,16.55);Xn(ee,new C(.3,62.15,0),new C(Ie.x,54.95,Ie.z),.09,z.gold,5)}ht(ee,16.55,.13,4,96,0,54.95,0,z.gold,{rx:Math.PI/2}),ht(ee,16.18,.06,4,96,0,55.02,0,z.goldDeep,{rx:Math.PI/2});for(let E=0;E<48;E++){let T=E/48*Te,F=mt(T,16.62);h.add(F.x,55.04,F.z,1.02)}ht(ee,14.55,.09,4,96,0,54.72,0,z.warmGlow,{rx:Math.PI/2});for(let E=0;E<32;E++){let T=E/32*Te,F=mt(T,14.55);h.add(F.x,54.64,F.z,.78)}for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,11.2);ot(ee,.03,.04,1.7,5,F.x,53.95,F.z,z.gold),Xt(ee,.24,9,F.x,53.05,F.z,z.warmGlow),ht(ee,.31,.035,4,16,F.x,53.05,F.z,z.gold,{rx:Math.PI/2}),h.add(F.x,53.02,F.z,1.15)}let pe=un(256,160,(E,T,F)=>{E.clearRect(0,0,T,F),E.beginPath(),E.moveTo(0,0),E.lineTo(T,0),E.lineTo(T,F*.32),E.quadraticCurveTo(T*.74,F*.96,T*.5,F*.55),E.quadraticCurveTo(T*.26,F*.96,0,F*.32),E.closePath(),E.fillStyle="rgba(255,255,255,.96)",E.fill(),E.strokeStyle="rgba(222,184,109,.98)",E.lineWidth=5,E.stroke(),E.strokeStyle="rgba(255,245,215,.36)",E.lineWidth=1.5,E.beginPath(),E.moveTo(5,7),E.lineTo(T-5,7),E.stroke()}),be=[new ft({map:pe,color:9252667,transparent:!0,alphaTest:.1,side:wt,roughness:.82}),new ft({map:pe,color:15917764,transparent:!0,alphaTest:.1,side:wt,roughness:.82}),new ft({map:pe,color:2055008,transparent:!0,alphaTest:.1,side:wt,roughness:.82})];for(let E=0;E<24;E++){let T=E/24*Te,F=mt(T,16.56),ue=kt(ee,new hn(2.15,1.5),be[E%3],F.x,54.16,F.z,{ry:T});ue.renderOrder=2,Xt(ee,.08,5,Math.sin(T)*16.58,53.38,Math.cos(T)*16.58,z.goldLight)}hs(te,16764038,17,0,53.2,0,.2);let je=[];for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,4.9),ue=mt(T,15.82);Xn(te,new C(F.x,54.72,F.z),new C(ue.x,54.72,ue.z),.12,z.gold,6),Xn(te,new C(F.x,53.86,F.z),new C(ue.x,54.46,ue.z),.055,z.goldDeep,5);let Ge=mt(T,10.5);Xn(te,new C(Ge.x,54.72,Ge.z),new C(Ge.x,53.9,Ge.z),.04,z.gold,4);for(let Qe=1;Qe<5;Qe++){let xt=mt(T,5.3+Qe*2.2);if(h.add(xt.x,54.79,xt.z,.7),Qe%2===0){let At=mt(T,5.3+Qe*2.2);Xt(te,.13,6,At.x,53.55,At.z,z.warmGlow)}}let Ie=mt(T,qe.armRadius);ht(te,.65,.08,4,20,Ie.x,54.6,Ie.z,z.gold,{rx:Math.PI/2}),ot(te,.32,.32,.24,10,Ie.x,54.46,Ie.z,z.goldDeep,{rx:0}),Xt(te,.24,8,Ie.x,54.28,Ie.z,z.warmGlow),h.add(Ie.x,54.28,Ie.z,1.3),d.push(hs(te,16762751,2.6,Ie.x,54.28,Ie.z,.4)),je.push(new C(Ie.x,54.6,Ie.z))}for(let E=0;E<8;E++){let T=E/8*Te+Math.PI/8,F=mt(T,16.1),ue=new va(te,{width:1.25,height:.55,x:F.x,y:55.55,z:F.z,material:E%2?z.flagTeal:z.flagWine,phase:E*.77,pole:1.6});ue.group.rotation.y=T,u.push(ue)}for(let E=0;E<16;E++){let T=E/16*Te,F=mt(T,9.5);Xn(te,new C(.4,60.45,0),new C(F.x,57.1,F.z),.028,z.goldDeep,4)}h.finalize();let Je=new Dt;s.add(Je);let A=[],v=[],H=new Map;function $(E){let T=Fd[E],F=T.accent;if(!H.has(F)){let xe=Bd(F);H.set(F,{envelope:av(F),medallion:xe,medallionMat:new ft({map:xe,transparent:!0,roughness:.48,metalness:.32,side:wt})})}let ue=H.get(F),Ge=lv(E,F),Ie=E/8*Te+Math.PI/8,Qe=new Dt;Qe.position.set(Math.sin(Ie)*qe.ringRadius,0,Math.cos(Ie)*qe.ringRadius),Qe.rotation.y=Ie,Je.add(Qe);let xt=new Dt;xt.position.y=qe.minAlt,Qe.add(xt);let At=new Dt;At.position.y=10.78,xt.add(At);let qn=[[.72,-5.02],[1.32,-4.72],[2.45,-3.98],[3.62,-2.86],[4.32,-1.54],[4.67,-.2],[4.72,1.05],[4.48,2.4],[3.95,3.47],[3,4.42],[1.85,5.1],[.72,5.42],[.18,5.48]].map(([xe,ke])=>new oe(xe,ke)),xi=new ia({map:ue.envelope,roughness:.52,metalness:.02,clearcoat:.22,clearcoatRoughness:.54,side:wt}),Yn=new yt(new Ws(qn,n?40:64),xi);Yn.castShadow=!0,At.add(Yn),Xt(At,.42,10,0,5.48,0,z.gold),ot(At,.26,.34,.25,10,0,5.72,0,z.goldLight),ot(At,.72,.96,.42,16,0,-5.18,0,z.goldDeep,{open:!0}),ht(At,.92,.055,4,24,0,-5.33,0,z.gold,{rx:Math.PI/2}),ht(At,4.71,.065,4,64,0,1.05,0,z.gold,{rx:Math.PI/2}),ht(At,3.62,.045,4,48,0,-2.84,0,z.goldDeep,{rx:Math.PI/2});let Ma=new kn(1.32,32);for(let xe=0;xe<4;xe++){let ke=xe/4*Te,Ke=4.86,gt=Math.sin(ke)*Ke,Mt=Math.cos(ke)*Ke,bt=kt(At,Ma,ue.medallionMat,gt,.85,Mt,{ry:ke});bt.renderOrder=2,ht(At,1.36,.05,4,28,gt,.85,Mt,z.gold,{ry:ke});let Ve=kt(At,Od,z.starGold,gt*1.012,.85,Mt*1.012,{ry:ke});Ve.scale.setScalar(.62),Ve.renderOrder=3}for(let xe=0;xe<16;xe++){let ke=xe/16*Te,Ke=new C(Math.sin(ke)*3.55,-2.88,Math.cos(ke)*3.55);Xt(At,.055,5,Ke.x,Ke.y,Ke.z,z.goldLight),Xt(At,.04,4,Ke.x,Ke.y-.2,Ke.z,z.gold)}let Lt=new Dt;xt.add(Lt);let cr=new yt(new wn(1.59,1.36,1.45,20,1,!0),z.wicker);cr.position.y=.82,cr.castShadow=!0,Lt.add(cr);let Wl=ot(Lt,1.38,1.38,.12,20,0,.1,0,z.wicker,{});Wl.receiveShadow=!0,ht(Lt,1.56,.075,5,32,0,1.5,0,z.gold,{rx:Math.PI/2}),ht(Lt,1.43,.045,4,32,0,.18,0,z.goldDeep,{rx:Math.PI/2}),ht(Lt,1.54,.085,5,32,0,1.58,0,z.wine,{rx:Math.PI/2}),ht(Lt,1.59,.025,4,32,0,1.61,0,z.goldLight,{rx:Math.PI/2});for(let xe=0;xe<8;xe++){let ke=xe/8*Te,Ke=Math.sin(ke)*1.53,gt=Math.cos(ke)*1.53;an(Lt,.075,1.4,.06,Ke,.82,gt,z.goldDeep,{ry:ke})}an(Lt,2.15,.24,.56,0,.55,-.72,z.wineDeep),an(Lt,2.3,.12,.66,0,.7,-.72,z.wineLight);for(let xe=0;xe<4;xe++)Xt(Lt,.055,5,-.75+xe*.5,.78,-.72,z.goldLight);let ni=new Dt;ni.position.set(0,.9,1.04),ni.rotation.x=-.34,Lt.add(ni),an(ni,1.5,.62,.22,0,0,0,z.goldDeep),an(ni,1.38,.48,.16,0,0,.06,z.tealDeep);let Xl=new kn(.16,18);for(let xe of[-.36,0,.36])kt(ni,Xl,z.glassGlow,xe,.08,.155),ht(ni,.18,.02,3,16,xe,.08,.16,z.gold,{});let Uh=ht(Lt,.36,.035,4,20,1.35,1,.28,z.gold,{rz:Math.PI/2});for(let xe=0;xe<6;xe++){let ke=xe/6*Te;Xn(Lt,new C(.98,1,.28),new C(.98+Math.cos(ke)*.36,1+Math.sin(ke)*.36,.28),.014,z.gold,4)}let Sa=[];for(let xe=0;xe<4;xe++){let ke=xe/4*Te+Math.PI/4,Ke=Math.sin(ke)*1.56,gt=Math.cos(ke)*1.56;ot(Lt,.045,.055,.8,5,Ke,1.95,gt,z.gold),Sa.push(Xt(Lt,.12,7,Ke,2.4,gt,z.warmGlow)),hs(Lt,16761210,.7,Ke,2.4,gt,.45)}let S=kt(Lt,new hn(1.35,.58),new Gt({map:Ge,transparent:!0,depthWrite:!1,toneMapped:!1}),0,.78,1.605);S.renderOrder=3,ot(Lt,.26,.32,.14,12,0,1.62,0,z.goldDeep),ot(Lt,.1,.14,.3,8,0,1.78,0,z.gold);let O=z.flame.clone(),X=kt(Lt,new Wr(.12,.7,8,1,!0),O,0,1.98,0);X.renderOrder=5;let Y=hs(Lt,16754514,.65,0,1.92,0,.28),k=new wn(.012,.012,1,4);for(let xe=0;xe<8;xe++){let ke=xe/8*Te+Math.PI/8,Ke=.7,gt=new C(Math.sin(ke)*1.56,1.46,Math.cos(ke)*1.56),Mt=new C(Math.sin(ke)*Ke,5.56,Math.cos(ke)*Ke),bt=gt.clone().add(Mt).multiplyScalar(.5),Ve=Mt.clone().sub(gt),It=new yt(k,z.ropeCylinder);It.position.copy(bt),It.quaternion.setFromUnitVectors(Sh,Ve.clone().normalize()),It.scale.y=Ve.length(),xt.add(It)}let _e=new va(xt,{width:.8,height:.34,x:0,y:15.9,z:0,material:E%2?z.flagTeal:z.flagWine,phase:E*.9,pole:.45});u.push(_e);let we=new Dt;we.visible=!1,xt.add(we);let Be=new Gt({color:16767377,transparent:!0,opacity:.65,blending:An,depthWrite:!1,toneMapped:!1});ht(we,2.24,.022,3,48,0,.16,0,Be,{rx:Math.PI/2}),ht(we,2.6,.015,3,48,0,1.26,0,Be,{rx:Math.PI/2});let Le=new yt(new $i(.15,0),new Gt({color:16770216,toneMapped:!1}));Le.position.y=2.9,we.add(Le);let We=new Dt;We.visible=!1,We.position.y=16.55,xt.add(We);let $e=new yt(new $i(.26,0),new Gt({color:16769958,toneMapped:!1}));return We.add($e),hs(We,16765322,2.2,0,0,0,.45),Qe.userData.balloonIndex=E,xt.userData.balloonIndex=E,Lt.userData.balloonIndex=E,v.push(Qe),{index:E,data:T,angle:Ie,root:Qe,lift:xt,envelopeGroup:At,envelope:Yn,basket:Lt,flag:_e,flame:X,flameGlow:Y,halo:we,marker:Le,beacon:We,lanternOrbs:Sa,medallionMat:ue.medallionMat,cableMesh:null,phase:E/8*42+E*1.73,cycle:42+E%4*2.4,high:31+E%4*2.1,mid:18+E%3*2.4,altitude:qe.minAlt,selected:!1,hover:!1,swayPhase:E*1.91}}for(let E=0;E<8;E++){let T=$(E);T.altitude=he(T,T.phase),T.lift.position.y=T.altitude;let F=new yt(new wn(.022,.022,1,4),z.cable);F.matrixAutoUpdate=!1,te.add(F),T.cableMesh=F,A.push(T)}function he(E,T){let F=E.cycle,ue=(T%F+F)%F/F,Ge=[[0,qe.minAlt],[.095,qe.minAlt],[.36,E.high],[.43,E.high+.35],[.56,E.mid],[.62,E.mid],[.7,E.high-4.2],[.76,E.high-4.2],[.96,qe.minAlt],[1,qe.minAlt]],Ie=0;for(;Ie<Ge.length-2&&ue>Ge[Ie+1][0];)Ie++;let[Qe,xt]=Ge[Ie],[At,qn]=Ge[Ie+1],xi=cs((ue-Qe)/(At-Qe||1),0,1),Yn=xi*xi*(3-2*xi);return xt+(qn-xt)*Yn}function K(){let E=qe.armY;A.forEach(T=>{let F=new C(Math.sin(T.angle)*qe.armRadius,E,Math.cos(T.angle)*qe.armRadius),ue=new C(T.root.position.x,T.lift.position.y+qe.envelopeTop,T.root.position.z),Ge=F.clone().add(ue).multiplyScalar(.5),Ie=ue.clone().sub(F),Qe=Ie.length();T.cableMesh.position.copy(Ge),T.cableMesh.quaternion.setFromUnitVectors(Sh,Ie.normalize()),T.cableMesh.scale.set(1,Qe,1),T.cableMesh.updateMatrix()})}let q={riding:!1,index:0,altitude:qe.minAlt,velocity:0,auto:!0,autoTime:0,inputUp:!1,inputDown:!1,topAnnounced:!1,bottomAnnounced:!1},me=2,Fe=-1,ye=0,ne="dusk",fe=xh.dusk;function Ye(E){return me=cs(E|0,0,7),A.forEach((T,F)=>{T.selected=F===me,T.halo.visible=T.selected||T.hover,T.beacon.visible=T.selected,T.halo.scale.setScalar(1)}),me}function He(E){Fe=E,A.forEach((T,F)=>{T.hover=F===Fe,T.halo.visible=T.selected||T.hover,T.selected&&(T.halo.visible=!0)})}function Re(E){q.riding=!0,q.index=cs(E|0,0,7),q.altitude=qe.minAlt,q.velocity=0,q.auto=!0,q.autoTime=0,q.inputUp=!1,q.inputDown=!1,q.topAnnounced=!1,q.bottomAnnounced=!1;let T=A[q.index];return T.lift.position.y=q.altitude,T.phase=0,T.halo.visible=!1,T.beacon.visible=!1,T.hiddenSprites=[],T.basket.traverse(F=>{F.isSprite&&(T.hiddenSprites.push(F),F.visible=!1)}),T.lanternOrbs.forEach(F=>{F.visible=!1}),T.flame.visible=!1,T}function nt(){if(!q.riding)return;let E=A[q.index];E.phase=0,E.altitude=qe.minAlt,E.lift.position.y=qe.minAlt,E.halo.visible=E.selected,E.beacon.visible=E.selected,E.hiddenSprites&&(E.hiddenSprites.forEach(T=>{T.visible=!0}),E.hiddenSprites=null),E.lanternOrbs.forEach(T=>{T.visible=!0}),E.flame.visible=!0,q.riding=!1,q.velocity=0}function B(E,T){q.inputUp=!!E,q.inputDown=!!T,q.riding&&(E||T)&&(q.auto=!1)}function ve(E){q.auto=!!E,q.auto&&(q.autoTime=0,q.inputUp=!1,q.inputDown=!1)}function Ee(E){let T=[[0,qe.minAlt],[2.5,9],[12.5,28],[16,30],[21.5,37.8],[26,37.8],[33,22],[36,23.5],[41,31],[45,30],[55,qe.minAlt],[58,qe.minAlt]],F=(E%58+58)%58,ue=0;for(;ue<T.length-2&&F>T[ue+1][0];)ue++;let[Ge,Ie]=T[ue],[Qe,xt]=T[ue+1],At=cs((F-Ge)/(Qe-Ge||1),0,1),qn=At*At*(3-2*At);return Ie+(xt-Ie)*qn}function Ne(E){if(!q.riding)return;if(q.auto){q.autoTime+=E;let F=Ee(q.autoTime),ue=cs((F-q.altitude)*.42,-5.2,3.7);q.velocity=vh(q.velocity,ue,1.6,E)}else{let F=-1.08;q.inputUp&&(F=4),q.inputDown&&(F=-7),q.altitude<=qe.minAlt+.05&&F<0&&(F=0),q.altitude>=qe.maxAlt-.05&&F>0&&(F=0),q.velocity=vh(q.velocity,F,q.inputUp||q.inputDown?.95:1.2,E)}q.altitude+=q.velocity*E,q.altitude<qe.minAlt&&(q.altitude=qe.minAlt,q.velocity=Math.max(0,q.velocity)),q.altitude>qe.maxAlt&&(q.altitude=qe.maxAlt,q.velocity=Math.min(0,q.velocity));let T=A[q.index];T.altitude=q.altitude,T.lift.position.y=q.altitude}function ge(E){A.forEach(T=>{q.riding&&T.index===q.index||(T.phase=(T.phase+E)%T.cycle,T.altitude=he(T,T.phase),T.lift.position.y=T.altitude,T.lift.rotation.z=Math.sin(ye*.44+T.swayPhase)*.0045,T.lift.rotation.x=Math.cos(ye*.37+T.swayPhase)*.0038)})}function ae(E){A.forEach(T=>{if(!T.halo.visible)return;let F=T.selected?1:.86;T.halo.scale.setScalar(vh(T.halo.scale.x,F,7,E)),T.halo.rotation.y=ye*(T.selected?.36:.16);let ue=T.halo.children[0].material;ue&&(ue.opacity=(T.selected?.52:.2)+Math.sin(ye*2.1+T.index)*.1),T.marker.position.y=2.9+Math.sin(ye*1.6+T.index)*.12,T.marker.rotation.y=ye*1.2,T.beacon.visible&&(T.beacon.position.y=16.55+Math.sin(ye*1.5+T.index)*.1,T.beacon.rotation.y=ye*1.4)})}function ze(E){xh[E]||(E="dusk"),ne=E,fe=xh[E],r.setMood(fe.sky),a.setMood(ne,fe),o.setMood(ne,fe),l.setMood(ne,fe),f.color.setHex(fe.hemiSky),f.groundColor.setHex(fe.hemiGround),f.intensity=fe.hemiIntensity,g.color.setHex(fe.key),g.intensity=fe.keyIntensity,g.position.set(...fe.keyPos),_.color.setHex(fe.rim),_.intensity=fe.rimIntensity,m.color.setHex(fe.ambient),m.intensity=fe.ambientIntensity,p.intensity=fe.baseGlow,w.intensity=fe.crownGlow,y.intensity=ne==="day"?4:16,P.forEach(T=>{T.intensity=ne==="day"?5:ne==="night"?44:27}),x.intensity=ne==="day"?6:ne==="night"?72:46,x.color.setHex(ne==="day"?16771008:16759162),I.intensity=ne==="day"?4:ne==="night"?48:34,I.color.setHex(ne==="day"?16771274:16759679),Me.emissiveIntensity=ne==="day"?.07:ne==="night"?.34:.24,at.emissiveIntensity=ne==="day"?.05:ne==="night"?.34:.24,i.environmentIntensity=fe.env,i.fog.color.setHex(fe.fog),i.fog.density=fe.fogDensity,e.toneMappingExposure=fe.exposure,t&&(t.strength=fe.bloom),V.color.setHex(ne==="night"?9405816:ne==="day"?16115924:13812654),p.color.setHex(ne==="day"?16770229:16758134),w.color.setHex(ne==="night"?16766106:16764816),et(),h.update(ye,fe.bulb)}function et(){d.forEach(E=>{E.material.opacity=ne==="day"?.06:ne==="night"?.55:.36})}return ze("dusk"),Ye(me),K(),{root:s,balloons:A,pavilion:G,tower:te,ground:Z,envTexture:M.texture,RIDE:qe,setMood:ze,get mood(){return ne},get moodConfig(){return fe},setSelected:Ye,get selected(){return me},setHover:He,get hovered(){return Fe},board:Re,leave:nt,setManual:B,setAuto:ve,get auto(){return q.auto},get riding(){return q.riding},get playerAltitude(){return q.altitude},get playerVelocity(){return q.velocity},get playerIndex(){return q.index},get mode(){return q.riding?"ride":"explore"},get pickObjects(){return v},getBalloonAltitudes(){return A.map(E=>E.altitude)},getBalloonData(){return Fd},setPlayerAltitude(E){q.altitude=cs(E,qe.minAlt,qe.maxAlt),q.velocity=0;let T=A[q.index];T.altitude=q.altitude,T.lift.position.y=q.altitude},getRideView(){let E=A[q.index];E.root.updateWorldMatrix(!0,!0);let T=new C(0,2.48,-.26);return E.lift.localToWorld(T),{position:T,outwardYaw:E.angle+Math.PI,altitude:q.altitude,index:q.index}},getChaseAnchor(){let E=A[q.index];return{x:E.root.position.x,z:E.root.position.z,y:E.altitude,angle:E.angle,index:q.index}},setRiderDecorVisible(E){if(!q.riding)return;let T=A[q.index];T.hiddenSprites&&T.hiddenSprites.forEach(F=>{F.visible=E}),T.lanternOrbs.forEach(F=>{F.visible=E}),T.flame.visible=E},getSelectedFocus(E=new C){let T=A[me];return E.set(T.root.position.x,T.altitude+7.5,T.root.position.z)},getSelectionAnchor(E=new C){let T=A[me];return E.set(T.root.position.x,T.altitude+qe.envelopeTop+.65,T.root.position.z)},update(E){if(ye+=E,r.update(ye),a.update(E,ye),o.update(E,ye),l.update(E,ye),c.update(E,ye),Ne(E),ge(E),ae(E),K(),h.update(ye,fe.bulb),u.forEach(T=>T.update(ye)),A.forEach(T=>{if(q.riding&&T.index===q.index){let ue=cs(.22+Math.abs(q.velocity)*.16+Math.sin(ye*10.5)*.06,.08,.72);T.flame.material.opacity=ue,T.flame.scale.set(1,.8+ue*1.2,1),T.flame.position.y=1.92+ue*.16,T.flameGlow.material.opacity=ue*.55}else{let ue=T.phase/T.cycle,Ie=ue>.1&&ue<.36||ue>.62&&ue<.7?.26+Math.sin(ye*9+T.index)*.06:.06;T.flame.material.opacity=Ie,T.flame.scale.set(1,.7+Ie*1.1,1),T.flameGlow.material.opacity=Ie*.45}T.flag.update(ye);let F=1+Math.sin(ye*.7+T.index)*.0035;T.envelope.scale.set(F,1,F)}),ce.rotation.y=ye*.4,L.material.opacity=.8+Math.sin(ye*1.2)*.08,q.riding){let T=A[q.index];y.position.set(T.root.position.x,T.altitude+.45,T.root.position.z),y.intensity=ne==="day"?1.5:5}else{let T=A[q.riding?q.index:me];y.position.set(T.root.position.x,T.altitude+2,T.root.position.z),y.intensity=ne==="day"?2:8}}}}var us=i=>440*Math.pow(2,(i-69)/12),Vl=class{constructor(){this.ctx=null,this.master=null,this.musicBus=null,this.fxBus=null,this.reverb=null,this.windGain=null,this.windFilter=null,this.burnerGain=null,this.burnerFilter=null,this.creakGain=null,this.started=!1,this.muted=localStorage.getItem("cloud-crown-muted")==="1",this.bar=0,this.nextBarTime=0,this.timer=null,this.rideActive=!1,this.altitude=0,this.velocity=0}async init(){if(this.ctx){this.ctx.state==="suspended"&&await this.ctx.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;let t=new e;this.ctx=t,this.master=t.createGain(),this.master.gain.value=this.muted?0:.62,this.master.connect(t.destination),this.musicBus=t.createGain(),this.musicBus.gain.value=.32,this.fxBus=t.createGain(),this.fxBus.gain.value=.42,this.reverb=t.createConvolver(),this.reverb.buffer=this.makeImpulse(4.2,2);let n=t.createGain();n.gain.value=.42,this.reverb.connect(n).connect(this.master),this.musicBus.connect(this.master),this.musicBus.connect(this.reverb),this.fxBus.connect(this.master),this.fxBus.connect(this.reverb),this.makeWind(),this.makeBurner(),this.started=!0,this.nextBarTime=t.currentTime+.45,this.timer=window.setInterval(()=>this.scheduler(),140),this.scheduler()}makeImpulse(e,t){let n=this.ctx,s=Math.floor(n.sampleRate*e),r=n.createBuffer(2,s,n.sampleRate);for(let a=0;a<2;a++){let o=r.getChannelData(a);for(let l=0;l<s;l++){let c=l/s,h=l<90?l/90:1;o[l]=(Math.random()*2-1)*Math.pow(1-c,t)*h*(.9+Math.sin(l*.001)*.1)}}return r}makeNoiseBuffer(e=3){let t=this.ctx,n=Math.floor(t.sampleRate*e),s=t.createBuffer(1,n,t.sampleRate),r=s.getChannelData(0),a=0;for(let o=0;o<n;o++){let l=Math.random()*2-1;a=a*.92+l*.08,r[o]=a*2.1}return s}makeWind(){let e=this.ctx,t=e.createBufferSource();t.buffer=this.makeNoiseBuffer(3.2),t.loop=!0,this.windFilter=e.createBiquadFilter(),this.windFilter.type="lowpass",this.windFilter.frequency.value=480,this.windFilter.Q.value=.55,this.windGain=e.createGain(),this.windGain.gain.value=.014,t.connect(this.windFilter).connect(this.windGain).connect(this.fxBus),t.start();let n=e.createBufferSource();n.buffer=this.makeNoiseBuffer(2.4),n.loop=!0;let s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=860,s.Q.value=2.4;let r=e.createGain();r.gain.value=.0055,n.connect(s).connect(r).connect(this.fxBus),n.start(),this.whistle=r}makeBurner(){let e=this.ctx,t=e.createBufferSource();t.buffer=this.makeNoiseBuffer(1.7),t.loop=!0,this.burnerFilter=e.createBiquadFilter(),this.burnerFilter.type="bandpass",this.burnerFilter.frequency.value=340,this.burnerFilter.Q.value=.7,this.burnerGain=e.createGain(),this.burnerGain.gain.value=0,t.connect(this.burnerFilter).connect(this.burnerGain).connect(this.fxBus),t.start();let n=e.createOscillator();n.type="sawtooth",n.frequency.value=63,this.creakFilter=e.createBiquadFilter(),this.creakFilter.type="bandpass",this.creakFilter.frequency.value=180,this.creakFilter.Q.value=3,this.creakGain=e.createGain(),this.creakGain.gain.value=0,n.connect(this.creakFilter).connect(this.creakGain).connect(this.fxBus),n.start(),this.creakOsc=n}setRide(e){if(!this.ctx)return;this.rideActive=e;let t=this.ctx.currentTime;if(e){this.ridePad=this.ctx.createOscillator(),this.ridePad.type="sine",this.ridePad.frequency.value=us(36);let n=this.ctx.createGain();n.gain.setValueAtTime(0,t),n.gain.linearRampToValueAtTime(.032,t+1.8),this.ridePad.connect(n).connect(this.musicBus),this.ridePad.start(),this.ridePadGain=n,this.creak()}else if(this.ridePad){this.ridePadGain.gain.setTargetAtTime(0,t,.5);let n=this.ridePad;window.setTimeout(()=>{try{n.stop()}catch{}},1800),this.ridePad=null,this.setAltitude(0,0)}this.updateFlight()}setAltitude(e,t){this.altitude=e,this.velocity=t,this.updateFlight()}updateFlight(){if(!this.ctx)return;let e=this.ctx.currentTime,t=this.rideActive?this.altitude:0,n=this.rideActive?this.velocity:0,s=this.rideActive?.022+Math.min(.045,t*.0011)+Math.min(.024,Math.abs(n)*.0028):.01;this.windGain.gain.setTargetAtTime(s,e,.6),this.windFilter.frequency.setTargetAtTime(380+t*8.5+Math.abs(n)*55,e,.8),this.whistle.gain.setTargetAtTime(this.rideActive?.004+Math.min(.012,Math.abs(n)*.001):.003,e,.7);let r=this.rideActive?n>.35?.022+Math.min(.02,n*.005):.0035:0;this.burnerGain.gain.setTargetAtTime(r,e,.28),this.burnerFilter.frequency.setTargetAtTime(280+Math.abs(n)*36,e,.4)}creak(){if(!this.ctx||!this.creakGain)return;let e=this.ctx.currentTime;this.creakGain.gain.cancelScheduledValues(e),this.creakGain.gain.setValueAtTime(1e-4,e),this.creakGain.gain.linearRampToValueAtTime(.024,e+.12),this.creakGain.gain.exponentialRampToValueAtTime(1e-4,e+1.8),this.creakOsc.frequency.cancelScheduledValues(e),this.creakOsc.frequency.setValueAtTime(58,e),this.creakOsc.frequency.linearRampToValueAtTime(42,e+1.7)}scheduler(){if(!this.ctx||this.ctx.state!=="running")return;let e=this.ctx.currentTime;for(;this.nextBarTime<e+.65;)this.scheduleBar(this.nextBarTime,this.bar),this.nextBarTime+=60/62*3,this.bar=(this.bar+1)%8}scheduleBar(e,t){let n=.967741935483871,r=[{bass:41,chord:[53,57,60,64],color:76},{bass:45,chord:[57,60,64,67],color:79},{bass:36,chord:[48,55,59,64],color:76},{bass:43,chord:[55,59,62,67],color:74},{bass:41,chord:[53,57,60,64],color:76},{bass:38,chord:[50,57,62,65],color:74},{bass:43,chord:[55,59,62,66],color:78},{bass:36,chord:[48,55,59,64],color:76}][t];if(r.chord.forEach((o,l)=>{this.pad(us(o+12),e+l*.012,n*3,.011+l*.0015)}),this.pad(us(r.bass),e,n*3.2,.018),[[r.color,0],[r.color+4,.75],[r.color+7,1.5],[r.color+9,2.05],[r.color+7,2.55]].forEach(([o,l],c)=>{this.bell(us(o+(t>4&&c%2?12:0)),e+l*n,1.4,.036)}),(t===2||t===6)&&this.bell(us(r.color+12),e+n*2.62,2.6,.022),t%2===0){let o=this.ctx.createOscillator(),l=this.ctx.createGain();o.type="sine",o.frequency.value=us(r.bass-12),l.gain.setValueAtTime(1e-4,e),l.gain.linearRampToValueAtTime(.021,e+.7),l.gain.exponentialRampToValueAtTime(1e-4,e+n*2.8),o.connect(l).connect(this.musicBus),o.start(e),o.stop(e+n*2.9)}}pad(e,t,n,s){let r=this.ctx;if(!r)return;let a=r.createOscillator(),o=r.createGain(),l=r.createBiquadFilter();l.type="lowpass",l.frequency.value=1200,a.type="triangle",a.frequency.value=e,o.gain.setValueAtTime(1e-4,t),o.gain.linearRampToValueAtTime(s,t+.7),o.gain.setValueAtTime(s,t+n*.66),o.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l).connect(o).connect(this.musicBus),a.start(t),a.stop(t+n+.1)}bell(e,t,n,s){if(!this.ctx)return;let r=this.ctx,a=r.createOscillator(),o=r.createOscillator(),l=r.createGain(),c=r.createStereoPanner();c.pan.value=(Math.random()-.5)*.38,a.type="sine",a.frequency.value=e,o.type="sine",o.frequency.value=e*2.004;let h=r.createGain();h.gain.value=.22,l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(s,t+.008),l.gain.exponentialRampToValueAtTime(1e-4,t+n),a.connect(l),o.connect(h).connect(l),l.connect(c).connect(this.musicBus),a.start(t),o.start(t),a.stop(t+n+.06),o.stop(t+n+.06)}chime(e="select"){if(!this.ctx)return;let t=this.ctx.currentTime+.02;({select:[79,84],next:[81,86],board:[72,76,79,84,88],exit:[79,74,69],top:[84,88,91,96],low:[72,67],tick:[86]}[e]||[84]).forEach((s,r)=>this.bell(us(s),t+r*.075,e==="board"?1.9:1,.035))}async toggleMute(){return this.muted=!this.muted,localStorage.setItem("cloud-crown-muted",this.muted?"1":"0"),this.master&&this.ctx&&(this.master.gain.cancelScheduledValues(this.ctx.currentTime),this.master.gain.setTargetAtTime(this.muted?0:.62,this.ctx.currentTime,.12)),this.muted||await this.init(),this.muted}};var Ze=i=>document.getElementById(i),Sn=is.clamp,pn=is.damp,vt=new URLSearchParams(location.search);(vt.has("still")||vt.has("instant")||vt.has("freeze"))&&document.documentElement.classList.add("no-motion");(vt.has("instant")||vt.has("still"))&&document.documentElement.classList.add("instant");vt.has("nohud")&&document.documentElement.classList.add("nohud");var Kt=window.matchMedia("(pointer: coarse)").matches&&window.innerWidth<1e3,xa=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Wd=["dusk","night","day"].includes(vt.get("mood"))?vt.get("mood"):"dusk",mv=Sn((parseInt(vt.get("balloon")||"3",10)||3)-1,0,7),W={canvas:Ze("world"),rideFade:Ze("rideFade"),moodFlash:Ze("moodFlash"),loading:Ze("loading"),loadBar:Ze("loadBar"),loadText:Ze("loadText"),topbar:Ze("topbar"),intro:Ze("intro"),enterBtn:Ze("enterBtn"),lookBtn:Ze("lookBtn"),introHigh:Ze("introHigh"),explore:Ze("explore"),manifestRows:Ze("manifestRows"),prevCloud:Ze("prevCloud"),nextCloud:Ze("nextCloud"),cloudNo:Ze("cloudNo"),cloudName:Ze("cloudName"),cloudAlt:Ze("cloudAlt"),cloudNote:Ze("cloudNote"),cloudDots:Ze("cloudDots"),cloudTag:Ze("cloudTag"),tagNo:Ze("tagNo"),tagName:Ze("tagName"),boardBtn:Ze("boardBtn"),rideHud:Ze("rideHud"),rideCloudLabel:Ze("rideCloudLabel"),exitRide:Ze("exitRide"),viewBtn:Ze("viewBtn"),viewLabel:Ze("viewLabel"),altValue:Ze("altValue"),gaugeFill:Ze("gaugeFill"),gaugeMarker:Ze("gaugeMarker"),rideMotion:Ze("rideMotion"),rideSpeed:Ze("rideSpeed"),rideCloudHeight:Ze("rideCloudHeight"),ascendBtn:Ze("ascendBtn"),descendBtn:Ze("descendBtn"),autoBtn:Ze("autoBtn"),autoModeLabel:Ze("autoModeLabel"),controlHintText:Ze("controlHintText"),rideClock:Ze("rideClock"),soundBtn:Ze("soundBtn"),moodBtn:Ze("moodBtn"),resetBtn:Ze("resetBtn"),helpBtn:Ze("helpBtn"),fullBtn:Ze("fullBtn"),help:Ze("help"),closeHelp:Ze("closeHelp"),helpGo:Ze("helpGo"),toast:Ze("toast"),fallback:Ze("fallback")},Pn;try{Pn=new Nl({canvas:W.canvas,antialias:!Kt,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0})}catch(i){throw console.error(i),W.loading.classList.add("is-done"),W.fallback.classList.remove("is-hidden"),i}var gv=Kt?175e4:34e5,Xd=Math.max(1,Math.min(window.devicePixelRatio||1,Kt?1.35:1.7,Math.sqrt(gv/(window.innerWidth*window.innerHeight))));Pn.setPixelRatio(Xd);Pn.setSize(window.innerWidth,window.innerHeight);Pn.outputColorSpace=$t;Pn.toneMapping=qs;Pn.toneMappingExposure=1.06;Pn.shadowMap.enabled=!0;Pn.shadowMap.type=No;var qd=new Br,Ot=new Qt(Kt?58:50,window.innerWidth/window.innerHeight,.08,1200);Ot.rotation.order="YXZ";var _i=new Ol(Pn);_i.setPixelRatio(Xd);_i.setSize(window.innerWidth,window.innerHeight);_i.addPass(new zl(qd,Ot));var Gl=new sr(new oe(window.innerWidth,window.innerHeight),.35,.52,.87);_i.addPass(Gl);_i.addPass(new kl);var _v={uniforms:{tDiffuse:{value:null},uSaturation:{value:1.16},uContrast:{value:1.075},uWarmth:{value:.01},uVignette:{value:.25},uTealShadow:{value:.024}},vertexShader:`
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
    uniform float uTealShadow;
    varying vec2 vUv;
    void main() {
      vec4 tex = texture2D(tDiffuse, vUv);
      float lum = dot(tex.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 col = mix(vec3(lum), tex.rgb, uSaturation);
      col = (col - 0.5) * uContrast + 0.5;
      col += vec3(uWarmth, uWarmth * 0.3, -uWarmth * 0.6);
      col -= vec3(uTealShadow, uTealShadow * 0.1, -uTealShadow) * (1.0 - smoothstep(0.0, 0.44, lum));
      float d = distance(vUv, vec2(0.5));
      float vig = smoothstep(0.38, 0.82, d);
      col *= mix(1.0, 1.0 - uVignette, vig);
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), tex.a);
    }
  `};_i.addPass(new ir(_v));var it=zd({scene:qd,renderer:Pn,bloom:Gl,isMobile:Kt}),Ht=new Vl,R={mode:"intro",introOpen:!0,helpOpen:!1,mood:Wd,soundOn:!Ht.muted,ready:!1,transitioning:!1,selected:mv,time:0,idleTime:0,hudClock:0,manifestClock:0,up:!1,down:!1,topChime:!1,rideYaw:0,ridePitch:.045,rideTargetYaw:0,rideTargetPitch:.045,rideRoll:0,rideCameraMode:"chase",chaseSnap:!0,chasePos:new C,chaseLook:new C,fov:Ot.fov,pointer:{down:!1,id:null,x:0,y:0,startX:0,startY:0,lastX:0,lastY:0,moved:0,mode:null},orbit:{azimuth:.34,polar:1.47,radius:Kt?112:102,targetAzimuth:.34,targetPolar:1.47,targetRadius:Kt?112:102,focus:new C(Kt?0:-8.5,33.5,0),targetFocus:new C(Kt?0:-8.5,33.5,0),intro:!0},touch:new Map,pinchDistance:0},kd=new C,rr=new C,Eh=new C,ar=new C,Hd=new oa,Th=new oe;it.setSelected(R.selected);it.setMood(R.mood);document.body.classList.add(`mood-${R.mood}`);var Vd=0;function vi(i,e=2400){vt.has("freeze")||vt.has("nohud")||(W.toast.textContent=i,W.toast.classList.add("is-on"),clearTimeout(Vd),Vd=window.setTimeout(()=>W.toast.classList.remove("is-on"),e))}function wh(){W.soundBtn.classList.toggle("is-muted",!R.soundOn),W.soundBtn.setAttribute("aria-label",R.soundOn?"\u5173\u95ED\u58F0\u97F3":"\u6253\u5F00\u58F0\u97F3"),W.soundBtn.dataset.tip=R.soundOn?"\u58F0\u97F3\u5DF2\u5F00":"\u58F0\u97F3\u5DF2\u5173"}function vv(){document.body.classList.remove("mood-dusk","mood-night","mood-day"),document.body.classList.add(`mood-${R.mood}`);let e={dusk:{label:"\u66AE\u8272",time:"18:56",theme:"#1a2031",tip:"\u5207\u6362\u591C\u5E55"},night:{label:"\u591C\u5E55",time:"21:42",theme:"#070b14",tip:"\u5207\u6362\u6674\u65E5"},day:{label:"\u6674\u65E5",time:"14:20",theme:"#b8cbd9",tip:"\u5207\u6362\u66AE\u8272"}}[R.mood];W.moodBtn.dataset.tip=e.tip,W.moodBtn.setAttribute("aria-label",e.tip);let t=document.querySelector('meta[name="theme-color"]');t&&t.setAttribute("content",e.theme),W.rideClock.textContent=`${e.label} ${e.time}`}function Ah(i,e=!0){R.mood=i,it.setMood(i),vv(),e&&(W.moodFlash.classList.remove("is-on"),W.moodFlash.offsetWidth,W.moodFlash.classList.add("is-on"),vi({dusk:"\u66AE\u8272\u6F2B\u4E0A\u6765\uFF0C\u4E91\u6D77\u53D8\u6210\u4E00\u5C42\u8584\u8584\u7684\u91D1",night:"\u591C\u5E55\u964D\u4E34\uFF0C\u661F\u51A0\u7684\u706F\u4E00\u76CF\u4E00\u76CF\u4EAE\u8D77",day:"\u4E91\u5F00\u65E5\u51FA\uFF0C\u6574\u5EA7\u661F\u51A0\u843D\u5728\u9633\u5149\u91CC"}[i],2600))}function xv(){let i=["dusk","night","day"],e=i.indexOf(R.mood);Ah(i[(e+1)%3]),Ht.chime("tick")}async function lr(){try{await Ht.init(),R.soundOn=!Ht.muted,wh()}catch(i){console.warn("Audio unavailable",i)}}function yv(){W.manifestRows.innerHTML="",it.getBalloonData().forEach((e,t)=>{let n=document.createElement("button");n.type="button",n.className="manifest-row",n.dataset.index=String(t),n.innerHTML=`<span class="manifest-no">${String(t+1).padStart(2,"0")}</span><span class="manifest-track"><i></i></span><span class="manifest-alt">\u2014</span>`,n.setAttribute("aria-label",`\u9009\u62E9\u7B2C ${t+1} \u53F7\u4E91\u821F\uFF1A${e.name}`),n.addEventListener("click",()=>{R.mode==="ride"||R.transitioning||Di(t,!0)}),n.addEventListener("pointerenter",()=>{R.mode!=="ride"&&it.setHover(t)}),n.addEventListener("pointerleave",()=>{R.mode!=="ride"&&it.setHover(-1)}),W.manifestRows.appendChild(n)})}function Mv(){W.cloudDots.innerHTML="";for(let i=0;i<8;i++){let e=document.createElement("button");e.type="button",e.className="cloud-dot",e.textContent=String(i+1).padStart(2,"0"),e.setAttribute("aria-label",`\u9009\u62E9\u7B2C ${i+1} \u6735\u4E91\u821F`),e.addEventListener("click",()=>{R.mode==="ride"||R.transitioning||Di(i,!0)}),W.cloudDots.appendChild(e)}}function Rh(){let i=it.getBalloonData()[R.selected],e=String(R.selected+1).padStart(2,"0");W.cloudNo.textContent=e,W.cloudName.textContent=i.name,W.cloudNote.textContent=i.note,W.cloudAlt.textContent=`${it.getBalloonAltitudes()[R.selected].toFixed(1)} m`,W.tagNo&&(W.tagNo.textContent=e),W.tagName&&(W.tagName.textContent=i.short),W.boardBtn.querySelector(".board-copy small").textContent=`BOARD CLOUD ${e}`,W.boardBtn.querySelector(".board-copy strong").textContent="\u767B\u4E0A\u8FD9\u6735\u4E91\u821F",[...W.cloudDots.children].forEach((t,n)=>{t.classList.toggle("is-active",n===R.selected),t.setAttribute("aria-pressed",n===R.selected?"true":"false")}),[...W.manifestRows.children].forEach((t,n)=>t.classList.toggle("is-active",n===R.selected))}function Di(i,e=!1){if(R.selected=it.setSelected(i),Rh(),e){let t=it.getBalloonData()[R.selected];vi(`\u5DF2\u9009 ${String(R.selected+1).padStart(2,"0")} \u53F7\u4E91\u821F \xB7 ${t.short}`)}Ht.chime("select")}function Ch(i=!0){if(!R.introOpen){i&&R.mode!=="ride"&&(R.mode="explore",W.explore.style.display="",W.explore.classList.remove("is-hidden"));return}R.introOpen=!1,W.intro.classList.add("is-leaving"),W.topbar.classList.remove("is-hidden"),R.orbit.intro=!1,R.orbit.targetFocus.set(0,33,0),R.orbit.targetRadius=Kt?102:94,R.orbit.targetPolar=1.45,window.setTimeout(()=>{R.mode!=="ride"&&(R.mode="explore",W.explore.style.display="",W.explore.classList.remove("is-hidden"))},xa?30:700),i&&(R.idleTime=0)}function Ph(){R.ready&&(lr(),Ch(!0),Ht.chime("board"),window.setTimeout(()=>{R.mode==="explore"&&vi("\u70B9\u51FB\u4EFB\u610F\u4E00\u6735\u4E91\u821F\uFF0C\u6216\u4F7F\u7528\u5E95\u90E8\u7BAD\u5934\u6362\u4E00\u53EA")},900))}function Sv(){let i=R.rideCameraMode==="chase";W.viewLabel.textContent=i?"\u8DDF\u968F\u955C\u5934":"\u540A\u7BEE\u89C6\u89D2",W.viewBtn.setAttribute("aria-label",i?"\u5207\u6362\u5230\u540A\u7BEE\u89C6\u89D2":"\u5207\u6362\u5230\u8DDF\u968F\u955C\u5934")}function Ih(i,e=!0,t=!0){R.rideCameraMode=i==="pov"?"pov":"chase",R.rideCameraMode==="chase"?(R.rideYaw=.58,R.ridePitch=.14):(R.rideYaw=-Math.PI+.7,R.ridePitch=.07),R.rideTargetYaw=R.rideYaw,R.rideTargetPitch=R.ridePitch,R.chaseSnap=t,it.riding&&it.setRiderDecorVisible(R.rideCameraMode==="chase"),Sv(),e&&(Ht.chime("tick"),vi(R.rideCameraMode==="chase"?"\u5DF2\u5207\u56DE\u8DDF\u968F\u955C\u5934 \xB7 \u770B\u5F97\u89C1\u6574\u6735\u4E91\u821F":"\u5DF2\u8FDB\u5165\u540A\u7BEE\u89C6\u89D2 \xB7 \u62D6\u52A8\u753B\u9762\u73AF\u987E\u4E91\u6D77"))}async function ya({instant:i=!1}={}){if(!R.ready||R.transitioning)return;if(R.transitioning=!0,lr(),R.introOpen&&Ch(!1),R.mode="ride",document.body.classList.add("riding"),W.explore.classList.add("is-hidden"),W.explore.style.display="none",i||(W.rideFade.classList.add("is-on"),await new Promise(t=>window.setTimeout(t,330))),it.board(R.selected),vt.has("alt")){let t=Sn(parseFloat(vt.get("alt"))||12,qe.minAlt,qe.maxAlt);it.setPlayerAltitude(t),(vt.has("noauto")||vt.has("alt"))&&it.setAuto(!1)}R.up=!1,R.down=!1,R.rideCameraMode=vt.get("camera")==="pov"?"pov":"chase",Ih(R.rideCameraMode,!1),vt.has("ry")&&(R.rideYaw=parseFloat(vt.get("ry"))||0,R.rideTargetYaw=R.rideYaw),vt.has("rp")&&(R.ridePitch=Sn(parseFloat(vt.get("rp"))||0,-.62,1.18),R.rideTargetPitch=R.ridePitch),R.rideRoll=0,R.topChime=!1;let e=it.getBalloonData()[R.selected];W.rideCloudLabel.textContent=`${String(R.selected+1).padStart(2,"0")} \u53F7\u4E91\u821F \xB7 ${e.short}`,W.rideHud.classList.remove("is-hidden"),W.canvas.classList.add("is-riding"),W.autoBtn.classList.toggle("is-active",it.auto),W.autoBtn.setAttribute("aria-pressed",it.auto?"true":"false"),W.autoModeLabel.textContent=it.auto?"\u81EA\u52A8\u5DE1\u6E38":"\u624B\u52A8\u9A7E\u9A76",Ht.setRide(!0),Ht.chime("board"),i?R.transitioning=!1:window.setTimeout(()=>{W.rideFade.classList.remove("is-on"),R.transitioning=!1},280),window.setTimeout(()=>{R.mode==="ride"&&vi("\u6309\u4F4F \u2191 / \u7A7A\u683C\u5347\u7A7A\uFF0C\u677E\u624B\u540E\u4F1A\u50CF\u964D\u843D\u4F1E\u4E00\u6837\u7F13\u964D")},1600)}function Lh(i=!1){R.mode!=="ride"||R.transitioning||(R.transitioning=!0,R.up=!1,R.down=!1,it.setManual(!1,!1),W.ascendBtn.classList.remove("is-held"),W.descendBtn.classList.remove("is-held"),i||W.rideFade.classList.add("is-on"),window.setTimeout(()=>{it.leave(),W.rideHud.classList.add("is-hidden"),W.canvas.classList.remove("is-riding"),document.body.classList.remove("riding"),R.mode="explore",W.explore.style.display="",W.explore.classList.remove("is-hidden"),R.orbit.azimuth=it.balloons[R.selected].angle+.42,R.orbit.targetAzimuth=R.orbit.azimuth,R.orbit.targetPolar=Kt?1.48:1.44,R.orbit.targetRadius=Kt?104:94,R.orbit.focus.set(0,33,0),R.orbit.targetFocus.set(0,33,0),Ht.setRide(!1),Ht.chime("exit"),Rh(),i?R.transitioning=!1:window.setTimeout(()=>{W.rideFade.classList.remove("is-on"),R.transitioning=!1},300),vi("\u56DE\u5230\u6708\u53F0\u3002\u4E91\u821F\u8FD8\u60AC\u5728\u90A3\u91CC\uFF0C\u968F\u65F6\u53EF\u4EE5\u518D\u5347\u7A7A")},i?0:330))}function or(i=!R.helpOpen){R.helpOpen=i,W.help.classList.toggle("is-hidden",!i),W.help.setAttribute("aria-hidden",i?"false":"true"),i&&(R.idleTime=0,Ht.chime("tick"))}function bv(i,e){let t=W.canvas.getBoundingClientRect();Th.x=(i-t.left)/t.width*2-1,Th.y=-((e-t.top)/t.height)*2+1}function Yd(i,e){bv(i,e),Hd.setFromCamera(Th,Ot);let t=Hd.intersectObjects(it.pickObjects,!0);for(let n of t){let s=n.object;for(;s;){if(s.userData&&Number.isInteger(s.userData.balloonIndex))return s.userData.balloonIndex;s=s.parent}}return-1}function Ev(i){i.button!==void 0&&i.button!==0||(lr(),R.touch.set(i.pointerId,{x:i.clientX,y:i.clientY}),R.mode!=="intro"&&(R.pointer.down=!0,R.pointer.id=i.pointerId,R.pointer.x=i.clientX,R.pointer.y=i.clientY,R.pointer.startX=i.clientX,R.pointer.startY=i.clientY,R.pointer.lastX=i.clientX,R.pointer.lastY=i.clientY,R.pointer.moved=0,R.pointer.mode=R.mode==="ride"?"look":"orbit",W.canvas.setPointerCapture?.(i.pointerId),W.canvas.classList.add("is-dragging"),R.idleTime=0))}function Tv(i){if(R.touch.has(i.pointerId)&&R.touch.set(i.pointerId,{x:i.clientX,y:i.clientY}),R.mode==="ride"&&R.pointer.down&&R.pointer.mode==="look"){let e=i.clientX-R.pointer.lastX,t=i.clientY-R.pointer.lastY;R.rideTargetYaw-=e*.0032,R.rideCameraMode==="chase"?R.rideTargetPitch=Sn(R.rideTargetPitch-t*.0024,-.1,.78):R.rideTargetPitch=Sn(R.rideTargetPitch-t*.0028,-.62,1.18),R.pointer.lastX=i.clientX,R.pointer.lastY=i.clientY,R.pointer.moved+=Math.abs(e)+Math.abs(t);return}if(R.mode==="explore"&&R.pointer.down&&R.pointer.mode==="orbit"){let e=i.clientX-R.pointer.x,t=i.clientY-R.pointer.y;R.pointer.moved+=Math.abs(e)+Math.abs(t),R.orbit.targetAzimuth-=e*.0044,R.orbit.targetPolar=Sn(R.orbit.targetPolar-t*.0034,.66,1.5),R.pointer.x=i.clientX,R.pointer.y=i.clientY,R.idleTime=0;return}if(R.mode==="explore"&&!Kt){let e=Yd(i.clientX,i.clientY);it.setHover(e),W.canvas.style.cursor=e>=0?"pointer":"grab"}}function wv(i){if(R.touch.size>=2?(R.touch.delete(i.pointerId),R.pinchDistance=0):R.touch.delete(i.pointerId),!R.pointer.down)return;let e=R.pointer.mode,t=R.pointer.moved;R.pointer.down=!1,R.pointer.mode=null,R.pointer.id=null,W.canvas.classList.remove("is-dragging");try{i&&i.pointerId!==void 0&&W.canvas.releasePointerCapture?.(i.pointerId)}catch{}if(e==="orbit"&&t<7){let n=Yd(i.clientX,i.clientY);n>=0?Di(n,!0):it.setHover(-1)}}function Av(i){R.touch.delete(i.pointerId),R.pointer.down=!1,R.pointer.mode=null,R.pinchDistance=0,W.canvas.classList.remove("is-dragging")}function Rv(i){R.mode==="explore"&&(i.preventDefault(),R.orbit.targetRadius=Sn(R.orbit.targetRadius*Math.exp(i.deltaY*.0011),42,135),R.idleTime=0)}W.canvas.addEventListener("pointerdown",Ev);W.canvas.addEventListener("pointermove",Tv);W.canvas.addEventListener("pointerup",wv);W.canvas.addEventListener("pointercancel",Av);W.canvas.addEventListener("wheel",Rv,{passive:!1});W.canvas.addEventListener("contextmenu",i=>i.preventDefault());W.canvas.addEventListener("touchstart",i=>{if(i.touches.length===2&&R.mode==="explore"){let[e,t]=i.touches;R.pinchDistance=Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY)}},{passive:!0});W.canvas.addEventListener("touchmove",i=>{if(i.touches.length===2&&R.mode==="explore"&&R.pinchDistance){let[e,t]=i.touches,n=Math.hypot(e.clientX-t.clientX,e.clientY-t.clientY);n>0&&(R.orbit.targetRadius=Sn(R.orbit.targetRadius*(R.pinchDistance/n),42,135),R.pinchDistance=n),i.preventDefault()}},{passive:!1});W.canvas.addEventListener("touchend",()=>{R.pinchDistance=0});function Dh(i){it.riding&&(it.setAuto(i),R.up=!1,R.down=!1,ds(!1,!1),W.autoBtn.classList.toggle("is-active",i),W.autoBtn.setAttribute("aria-pressed",i?"true":"false"),W.autoModeLabel.textContent=i?"\u81EA\u52A8\u5DE1\u6E38":"\u624B\u52A8\u9A7E\u9A76",W.controlHintText.textContent=i?"\u661F\u51A0\u66FF\u4F60\u5B89\u6392\u4E86\u4E00\u6761\u822A\u7EBF\u3002\u60F3\u81EA\u5DF1\u98DE\uFF0C\u5C31\u6309\u4F4F\u5347\u7A7A\u6216\u7F13\u964D\u3002":"\u677E\u5F00\u6309\u952E\u540E\uFF0C\u7403\u56CA\u4F1A\u50CF\u964D\u843D\u4F1E\u4E00\u6837\u7F13\u7F13\u56DE\u843D\u3002",vi(i?"\u5DF2\u4EA4\u8FD8\u7ED9\u81EA\u52A8\u5DE1\u6E38":"\u624B\u52A8\u9A7E\u9A76\u5DF2\u63A5\u7BA1 \xB7 \u6309\u4F4F \u2191 / \u7A7A\u683C\u5347\u7A7A",2e3),Ht.chime(i?"select":"tick"))}function ds(i,e){let t=it.auto;R.up=i,R.down=e,it.setManual(i,e),W.ascendBtn.classList.toggle("is-held",i),W.descendBtn.classList.toggle("is-held",e),(i||e)&&t&&(it.setAuto(!1),W.autoBtn.classList.remove("is-active"),W.autoBtn.setAttribute("aria-pressed","false"),W.autoModeLabel.textContent="\u624B\u52A8\u9A7E\u9A76"),W.controlHintText.textContent=i?"\u6B63\u5728\u5347\u7A7A\u3002\u677E\u5F00\u6309\u952E\uFF0C\u7403\u56CA\u4F1A\u5728\u98CE\u4E2D\u7F13\u7F13\u56DE\u843D\u3002":e?"\u6B63\u5728\u7F13\u964D\u3002\u677E\u5F00\u6309\u952E\uFF0C\u964D\u843D\u4F1E\u4F1A\u5728\u534A\u7A7A\u8F7B\u8F7B\u63A5\u4F4F\u4F60\u3002":"\u6309\u4F4F\u5347\u7A7A\uFF0C\u677E\u624B\u7F13\u964D\u3002\u60F3\u770B\u770B\u98CE\u666F\uFF0C\u5C31\u4EA4\u7ED9\u81EA\u52A8\u5DE1\u6E38\u3002"}function Zd(i,e){let t=!1,n=r=>{R.mode==="ride"&&(r.preventDefault(),t=!0,lr(),e(!0),i.setPointerCapture?.(r.pointerId))},s=r=>{t&&(t=!1,e(!1),r.preventDefault())};i.addEventListener("pointerdown",n),i.addEventListener("pointerup",s),i.addEventListener("pointercancel",s),i.addEventListener("pointerleave",r=>{t&&r.buttons===0&&s(r)})}Zd(W.ascendBtn,i=>{ds(i,i?!1:R.down),i&&Ht.chime("tick")});Zd(W.descendBtn,i=>{ds(i?!1:R.up,i),i&&Ht.chime("low")});yv();Mv();Rh();Ah(Wd,!1);wh();Jd(1);W.enterBtn.addEventListener("click",()=>{R.ready&&(lr(),Ch(!1),ya())});W.lookBtn.addEventListener("click",Ph);W.prevCloud.addEventListener("click",()=>{R.mode==="ride"||R.transitioning||Di((R.selected+7)%8)});W.nextCloud.addEventListener("click",()=>{R.mode==="ride"||R.transitioning||Di((R.selected+1)%8)});W.boardBtn.addEventListener("click",()=>{R.mode==="ride"||R.transitioning||!R.ready||(lr(),ya())});W.exitRide.addEventListener("click",()=>Lh());W.viewBtn.addEventListener("click",()=>{R.mode==="ride"&&Ih(R.rideCameraMode==="chase"?"pov":"chase",!0,!1)});W.autoBtn.addEventListener("click",()=>Dh(!it.auto));W.soundBtn.addEventListener("click",async()=>{let i=await Ht.toggleMute();R.soundOn=!i,wh(),i||Ht.chime("select")});W.moodBtn.addEventListener("click",xv);W.resetBtn.addEventListener("click",()=>{R.mode==="explore"&&(R.orbit.targetRadius=Kt?104:94,R.orbit.targetPolar=1.45,R.orbit.targetAzimuth=.34,vi("\u56DE\u5230\u661F\u51A0\u5168\u666F"),Ht.chime("tick"))});W.helpBtn.addEventListener("click",()=>or(!0));W.closeHelp.addEventListener("click",()=>or(!1));W.helpGo.addEventListener("click",()=>or(!1));W.help.addEventListener("click",i=>{i.target===W.help&&or(!1)});W.fullBtn.addEventListener("click",()=>{document.fullscreenElement?document.exitFullscreen?.():document.documentElement.requestFullscreen?.().catch(()=>{})});window.addEventListener("keydown",i=>{if(i.repeat&&!["ArrowUp","ArrowDown","KeyW","KeyS","Space"].includes(i.code))return;let e=i.code;if(e==="Escape"){i.preventDefault(),R.helpOpen?or(!1):R.mode==="ride"&&Lh();return}if(!R.helpOpen){if(e==="KeyM"){W.soundBtn.click();return}if(e==="KeyF"){W.fullBtn.click();return}if(e==="KeyH"){or(!0);return}if(R.mode==="intro"&&(e==="Enter"||e==="Space"||e==="KeyE")){i.preventDefault(),Ph();return}if(R.mode==="explore"){e==="ArrowLeft"?(i.preventDefault(),Di((R.selected+7)%8,!0)):e==="ArrowRight"?(i.preventDefault(),Di((R.selected+1)%8,!0)):(e==="KeyE"||e==="Enter")&&(i.preventDefault(),ya());return}R.mode==="ride"&&(e==="ArrowUp"||e==="KeyW"||e==="Space"?(i.preventDefault(),R.up||ds(!0,!1)):e==="ArrowDown"||e==="KeyS"?(i.preventDefault(),R.down||ds(!1,!0)):e==="KeyA"?(i.preventDefault(),Dh(!it.auto)):e==="KeyV"&&(i.preventDefault(),Ih(R.rideCameraMode==="chase"?"pov":"chase",!0,!1)))}});window.addEventListener("keyup",i=>{if(R.mode==="ride"&&(i.code==="ArrowUp"||i.code==="KeyW"||i.code==="Space"||i.code==="ArrowDown"||i.code==="KeyS")){let e=i.code==="ArrowUp"||i.code==="KeyW"||i.code==="Space";ds(e?!1:R.up,e?R.down:!1)}});window.addEventListener("blur",()=>{R.mode==="ride"&&ds(!1,!1)});function Cv(){let i=window.innerWidth,e=window.innerHeight;Ot.aspect=i/e,Ot.updateProjectionMatrix(),Pn.setSize(i,e),_i.setSize(i,e),Gl.setSize(i,e)}window.addEventListener("resize",Cv);function $d(i,e){let t=Math.sin(e.polar);return i.set(e.focus.x+e.radius*t*Math.sin(e.azimuth),e.focus.y+e.radius*Math.cos(e.polar),e.focus.z+e.radius*t*Math.cos(e.azimuth)),i}function Pv(i){if(R.mode==="ride"){if(R.rideYaw=pn(R.rideYaw,R.rideTargetYaw,10,i),R.ridePitch=pn(R.ridePitch,R.rideTargetPitch,10,i),R.rideCameraMode==="chase"){let r=it.getChaseAnchor(),a=window.innerWidth<760;rr.set(r.x,r.y+7.8,r.z);let o=r.angle+R.rideYaw,l=Sn(R.ridePitch,-.1,.78),c=a?34.5:24.5;Eh.set(rr.x+Math.sin(o)*Math.cos(l)*c,rr.y+Math.sin(l)*c,rr.z+Math.cos(o)*Math.cos(l)*c),R.chaseSnap?(R.chasePos.copy(Eh),R.chaseLook.copy(rr),R.chaseSnap=!1):(R.chasePos.lerp(Eh,1-Math.exp(-i*5.2)),R.chaseLook.lerp(rr,1-Math.exp(-i*8))),Ot.position.copy(R.chasePos),Ot.lookAt(R.chaseLook),R.rideRoll=pn(R.rideRoll,0,2,i);let h=a?66:56;R.fov=pn(R.fov,h,4,i),Ot.fov=R.fov,Ot.updateProjectionMatrix();return}let n=it.getRideView();Ot.position.copy(n.position),Ot.rotation.set(R.ridePitch,n.outwardYaw+R.rideYaw,R.rideRoll,"YXZ");let s=Kt?76:70;R.fov=pn(R.fov,s,4,i),Ot.fov=R.fov,Ot.updateProjectionMatrix();return}let e=R.orbit;if(R.introOpen){let n=xa?0:Math.sin(R.time*.035)*.055;e.targetAzimuth=.34+n,e.targetPolar=1.47+(xa?0:Math.sin(R.time*.026)*.008),Kt?e.targetFocus.set(0,33.5,0):e.targetFocus.set(-8.5,33.5+(xa?0:Math.sin(R.time*.04)*.25),0)}else{let n=it.getBalloonAltitudes()[R.selected]||0;e.targetFocus.set(0,33+Math.max(0,n-16)*.1,0),R.idleTime>22&&!xa&&(e.targetAzimuth+=i*.018)}e.azimuth=pn(e.azimuth,e.targetAzimuth,3.2,i),e.polar=pn(e.polar,e.targetPolar,3.2,i),e.radius=pn(e.radius,e.targetRadius,3,i),e.focus.x=pn(e.focus.x,e.targetFocus.x,2.2,i),e.focus.y=pn(e.focus.y,e.targetFocus.y,2.2,i),e.focus.z=pn(e.focus.z,e.targetFocus.z,2.2,i),$d(kd,e),Ot.position.copy(kd),Ot.lookAt(e.focus);let t=Kt?58:50;R.fov=pn(R.fov,t,3,i),Ot.fov=R.fov,Ot.updateProjectionMatrix()}function Iv(){if(!W.cloudTag)return;if(R.mode!=="explore"){W.cloudTag.classList.remove("is-on");return}if(it.getSelectionAnchor(ar),ar.project(Ot),ar.z>1||ar.z<-1){W.cloudTag.classList.remove("is-on");return}let i=W.canvas.getBoundingClientRect(),e=(ar.x*.5+.5)*i.width,t=(-ar.y*.5+.5)*i.height;if(e<50||e>i.width-50||t<34||t>i.height-4){W.cloudTag.classList.remove("is-on");return}W.cloudTag.style.left=`${e}px`,W.cloudTag.style.top=`${t}px`,W.cloudTag.classList.add("is-on")}function Jd(i){if(R.hudClock+=i,R.manifestClock+=i,R.manifestClock>.12){R.manifestClock=0;let a=it.getBalloonAltitudes(),o=W.manifestRows.children;for(let l=0;l<o.length;l++){let c=o[l],h=a[l],u=c.querySelector(".manifest-track i"),d=c.querySelector(".manifest-alt");u&&(u.style.width=`${Sn(h/qe.maxAlt*100,2,100)}%`),d&&(d.textContent=`${h.toFixed(1)}m`)}if(W.introHigh){let l=Math.max(...a);W.introHigh.textContent=`${l.toFixed(1)} m`}if(R.mode!=="ride"){let l=a[R.selected];W.cloudAlt&&(W.cloudAlt.textContent=`${l.toFixed(1)} m`)}}if(R.mode!=="ride"||R.hudClock<.065)return;R.hudClock=0;let e=it.playerAltitude,t=it.playerVelocity,n=it.auto;W.altValue.textContent=e.toFixed(1);let s=Sn(e/40*100,0,100);W.gaugeFill.style.height=`${s}%`,W.gaugeMarker.style.bottom=`${s}%`,W.rideSpeed.innerHTML=`${Math.abs(t).toFixed(1)} <i>m/s</i>`;let r;n?r="\u81EA\u52A8\u5DE1\u6E38":R.up?r="\u624B\u52A8\u5347\u7A7A":R.down?r="\u624B\u52A8\u7F13\u964D":t>.35?r="\u4E0A\u5347\u4E2D":t<-.35?r="\u7F13\u964D\u4E2D":r="\u60AC\u505C",W.rideMotion.textContent=r,W.rideCloudHeight.textContent=`\u4E91\u5C42 ${Math.round(420+e*6)} m`,Ht.setAltitude(e,t),e>36.8&&!R.topChime?(R.topChime=!0,Ht.chime("top"),vi("\u5DF2\u62B5\u8FBE\u661F\u51A0\u6700\u9AD8\u5904 \xB7 38 m")):e<8&&(R.topChime=!1),n?(W.autoBtn.classList.add("is-active"),W.autoBtn.setAttribute("aria-pressed","true"),W.autoModeLabel.textContent="\u81EA\u52A8\u5DE1\u6E38"):(W.autoBtn.classList.remove("is-active"),W.autoBtn.setAttribute("aria-pressed","false"),W.autoModeLabel.textContent="\u624B\u52A8\u9A7E\u9A76")}function Lv(){R.ready=!0,W.loadBar.style.width="100%",W.loadText.textContent="\u661F\u51A0\u5DF2\u70B9\u4EAE\uFF0C\u7F06\u7EF3\u5DF2\u89E3\u5F00\u3002",W.enterBtn.disabled=!1,window.setTimeout(()=>{W.loading.classList.add("is-done");let i=vt.get("view")==="ride"||vt.has("ride"),e=vt.get("view")==="explore"||vt.has("skipIntro");(i||e)&&(R.introOpen=!1,W.intro.classList.add("is-leaving"),W.topbar.classList.remove("is-hidden"),R.orbit.intro=!1,R.orbit.focus.set(0,33.5,0),R.orbit.targetFocus.set(0,33,0),R.orbit.targetRadius=Kt?108:98,R.orbit.targetPolar=1.45,vt.get("az")&&(R.orbit.azimuth=parseFloat(vt.get("az"))||.34,R.orbit.targetAzimuth=R.orbit.azimuth),vt.get("polar")&&(R.orbit.polar=Sn(parseFloat(vt.get("polar"))||1.47,.66,1.5),R.orbit.targetPolar=R.orbit.polar),vt.get("radius")&&(R.orbit.radius=Sn(parseFloat(vt.get("radius"))||80,42,135),R.orbit.targetRadius=R.orbit.radius),i?(R.mode="ride",W.explore.classList.add("is-hidden"),W.topbar.classList.remove("is-hidden"),ya({instant:!0})):(R.mode="explore",W.explore.style.display="",W.explore.classList.remove("is-hidden")))},vt.has("instant")||vt.has("still")?40:780)}function Dv(){W.loadBar.style.width="22%",W.loadText.textContent="\u6B63\u5728\u70B9\u4EAE\u661F\u51A0\u2026",window.setTimeout(()=>{W.loadBar.style.width="64%",W.loadText.textContent="\u6B63\u5728\u4E3A\u516B\u6735\u4E91\u821F\u7CFB\u4E0A\u7F06\u7EF3\u2026"},260),window.setTimeout(()=>{W.loadBar.style.width="88%",W.loadText.textContent="\u6B63\u5728\u94FA\u5F00\u4E91\u6D77\u2026"},680),window.setTimeout(Lv,vt.has("instant")||vt.has("still")?120:1180)}var Uv=new es,Gd=!0;function Kd(){let i=Math.min(Uv.getDelta(),.05);R.time+=i,R.idleTime+=i,vt.has("freeze")||it.update(i),Pv(i),Jd(i),Iv(),R.mode==="ride"&&!R.up&&!R.down&&!it.auto?R.rideRoll=pn(R.rideRoll,Math.sin(R.time*.7)*.0022,2,i):R.rideRoll=pn(R.rideRoll,0,2,i),_i.render(),Gd&&(Gd=!1,document.body.classList.add("is-ready")),requestAnimationFrame(Kd)}Ot.position.set(-30,50,92);$d(Ot.position,R.orbit);Ot.lookAt(R.orbit.focus);requestAnimationFrame(Kd);Dv();window.__cloudCrown={world:it,state:R,camera:Ot,renderer:Pn,composer:_i,bloom:Gl,audio:Ht,startRide:ya,exitRide:Lh,enterExplore:Ph,selectCloud:Di,applyMood:Ah,setAuto:Dh,get ready(){return R.ready}};})();
