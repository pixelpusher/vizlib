(function(Cn,on){typeof exports=="object"&&typeof module<"u"?on(exports):typeof define=="function"&&define.amd?define(["exports"],on):(Cn=typeof globalThis<"u"?globalThis:Cn||self,on(Cn.vislib={}))})(this,function(Cn){"use strict";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const on="152",Ln={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},qn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ko=0,Ss=1,Jo=2,Es=1,Qo=2,Ht=3,Qt=0,mt=1,It=2,en=0,Dn=1,ys=2,Ts=3,bs=4,el=5,Un=100,tl=101,nl=102,As=103,ws=104,il=200,rl=201,sl=202,al=203,Ps=204,Rs=205,ol=206,ll=207,cl=208,hl=209,ul=210,dl=0,fl=1,pl=2,cr=3,ml=4,_l=5,gl=6,xl=7,hr=0,vl=1,Ml=2,Vt=0,Sl=1,El=2,yl=3,Tl=4,bl=5,Cs=300,In=301,Nn=302,ur=303,dr=304,Ai=306,fr=1e3,wt=1001,pr=1002,ut=1003,Ls=1004,mr=1005,Et=1006,Al=1007,ci=1008,ln=1009,wl=1010,Pl=1011,qs=1012,Rl=1013,cn=1014,hn=1015,hi=1016,Cl=1017,Ll=1018,Fn=1020,ql=1021,Pt=1023,Dl=1024,Ul=1025,un=1026,On=1027,Il=1028,Nl=1029,Fl=1030,Ol=1031,Bl=1033,_r=33776,gr=33777,xr=33778,vr=33779,Ds=35840,Us=35841,Is=35842,Ns=35843,zl=36196,Fs=37492,Os=37496,Bs=37808,zs=37809,Gs=37810,Hs=37811,Vs=37812,ks=37813,Ws=37814,Xs=37815,Ys=37816,js=37817,Zs=37818,$s=37819,Ks=37820,Js=37821,Mr=36492,Gl=36283,Qs=36284,ea=36285,ta=36286,na=3e3,dn=3001,Hl=3200,Vl=3201,ia=0,kl=1,fn="",Ue="srgb",Nt="srgb-linear",ra="display-p3",Sr=7680,Wl=519,sa=35044,aa=35048,oa="300 es",Er=1035;class pn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yr=Math.PI/180,Tr=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(lt[i&255]+lt[i>>8&255]+lt[i>>16&255]+lt[i>>24&255]+"-"+lt[e&255]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[t&63|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[n&255]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Xl(i,e){return(i%e+e)%e}function br(i,e,t){return(1-t)*i+t*e}function la(i){return(i&i-1)===0&&i!==0}function Yl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class he{constructor(e=0,t=0){he.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],_=n[8],g=r[0],m=r[3],u=r[6],y=r[1],x=r[4],b=r[7],E=r[2],w=r[5],q=r[8];return s[0]=o*g+a*y+c*E,s[3]=o*m+a*x+c*w,s[6]=o*u+a*b+c*q,s[1]=l*g+h*y+d*E,s[4]=l*m+h*x+d*w,s[7]=l*u+h*b+d*q,s[2]=f*g+p*y+_*E,s[5]=f*m+p*x+_*w,s[8]=f*u+p*b+_*q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=h*o-a*l,f=a*c-h*s,p=l*s-o*c,_=t*d+n*f+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*l-h*n)*g,e[2]=(a*n-r*o)*g,e[3]=f*g,e[4]=(h*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ar.makeScale(e,t)),this}rotate(e){return this.premultiply(Ar.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ar.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ar=new Ge;function ca(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const ha={};function ui(i){i in ha||(ha[i]=!0,console.warn(i))}function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const jl=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Zl=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function $l(i){return i.convertSRGBToLinear().applyMatrix3(Zl)}function Kl(i){return i.applyMatrix3(jl).convertLinearToSRGB()}const Jl={[Nt]:i=>i,[Ue]:i=>i.convertSRGBToLinear(),[ra]:$l},Ql={[Nt]:i=>i,[Ue]:i=>i.convertLinearToSRGB(),[ra]:Kl},Rt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Nt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Jl[e],r=Ql[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Gn;class ua{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gn===void 0&&(Gn=Pi("canvas")),Gn.width=e.width,Gn.height=e.height;const n=Gn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Gn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=zn(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class da{constructor(e=null){this.isSource=!0,this.uuid=Bn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Pr(r[o].image)):s.push(Pr(r[o]))}else s=Pr(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ec=0;class gt extends pn{constructor(e=gt.DEFAULT_IMAGE,t=gt.DEFAULT_MAPPING,n=wt,r=wt,s=Et,o=ci,a=Pt,c=ln,l=gt.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ec++}),this.uuid=Bn(),this.name="",this.source=new da(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===dn?Ue:fn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cs)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fr:e.x=e.x-Math.floor(e.x);break;case wt:e.x=e.x<0?0:1;break;case pr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fr:e.y=e.y-Math.floor(e.y);break;case wt:e.y=e.y<0?0:1;break;case pr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ue?dn:na}set encoding(e){ui("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===dn?Ue:fn}}gt.DEFAULT_IMAGE=null,gt.DEFAULT_MAPPING=Cs,gt.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,r=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],_=c[9],g=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,b=(p+1)/2,E=(u+1)/2,w=(h+f)/4,q=(d+g)/4,I=(_+m)/4;return x>b&&x>E?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=w/n,s=q/n):b>E?b<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),n=w/r,s=I/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=q/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(d-g)/y,this.z=(f-h)/y,this.w=Math.acos((l+p+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mn extends pn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ui("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===dn?Ue:fn),this.texture=new gt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Et,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new da(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fa extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tc extends gt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=ut,this.minFilter=ut,this.wrapR=wt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],d=n[r+3];const f=s[o+0],p=s[o+1],_=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=_,e[t+3]=g;return}if(d!==g||c!==f||l!==p||h!==_){let m=1-a;const u=c*f+l*p+h*_+d*g,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const E=Math.sqrt(x),w=Math.atan2(E,u*y);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const b=a*y;if(c=c*m+f*b,l=l*m+p*b,h=h*m+_*b,d=d*m+g*b,m===1-a){const E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],d=s[o],f=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+h*d+c*p-l*f,e[t+1]=c*_+h*f+l*d-a*p,e[t+2]=l*_+h*p+a*f-c*d,e[t+3]=h*_-a*d-c*f-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),d=a(s/2),f=c(n/2),p=c(r/2),_=c(s/2);switch(o){case"XYZ":this._x=f*h*d+l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d-f*p*_;break;case"YXZ":this._x=f*h*d+l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d+f*p*_;break;case"ZXY":this._x=f*h*d-l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d-f*p*_;break;case"ZYX":this._x=f*h*d-l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d+f*p*_;break;case"YZX":this._x=f*h*d+l*p*_,this._y=l*p*d+f*h*_,this._z=l*h*_-f*p*d,this._w=l*h*d-f*p*_;break;case"XZY":this._x=f*h*d-l*p*_,this._y=l*p*d-f*h*_,this._z=l*h*_+f*p*d,this._w=l*h*d+f*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],d=t[10],f=n+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class R{constructor(e=0,t=0,n=0){R.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(pa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(pa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,h=c*n+a*t-s*r,d=c*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=l*c+f*-s+h*-a-d*-o,this.y=h*c+f*-o+d*-s-l*-a,this.z=d*c+f*-a+l*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rr.copy(this).projectOnVector(e),this.sub(Rr)}reflect(e){return this.sub(Rr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new R,pa=new _n;class di{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Wt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Hn.copy(e.boundingBox),Hn.applyMatrix4(e.matrixWorld),this.union(Hn);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Wt.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Wt)}else r.boundingBox===null&&r.computeBoundingBox(),Hn.copy(r.boundingBox),Hn.applyMatrix4(e.matrixWorld),this.union(Hn)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wt),Wt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fi),Ri.subVectors(this.max,fi),Vn.subVectors(e.a,fi),kn.subVectors(e.b,fi),Wn.subVectors(e.c,fi),tn.subVectors(kn,Vn),nn.subVectors(Wn,kn),gn.subVectors(Vn,Wn);let t=[0,-tn.z,tn.y,0,-nn.z,nn.y,0,-gn.z,gn.y,tn.z,0,-tn.x,nn.z,0,-nn.x,gn.z,0,-gn.x,-tn.y,tn.x,0,-nn.y,nn.x,0,-gn.y,gn.x,0];return!Cr(t,Vn,kn,Wn,Ri)||(t=[1,0,0,0,1,0,0,0,1],!Cr(t,Vn,kn,Wn,Ri))?!1:(Ci.crossVectors(tn,nn),t=[Ci.x,Ci.y,Ci.z],Cr(t,Vn,kn,Wn,Ri))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kt=[new R,new R,new R,new R,new R,new R,new R,new R],Wt=new R,Hn=new di,Vn=new R,kn=new R,Wn=new R,tn=new R,nn=new R,gn=new R,fi=new R,Ri=new R,Ci=new R,xn=new R;function Cr(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){xn.fromArray(i,s);const a=r.x*Math.abs(xn.x)+r.y*Math.abs(xn.y)+r.z*Math.abs(xn.z),c=e.dot(xn),l=t.dot(xn),h=n.dot(xn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const nc=new di,pi=new R,Lr=new R;class Li{constructor(e=new R,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):nc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pi.subVectors(e,this.center);const t=pi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(pi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pi.copy(e.center).add(Lr)),this.expandByPoint(pi.copy(e.center).sub(Lr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Xt=new R,qr=new R,qi=new R,rn=new R,Dr=new R,Di=new R,Ur=new R;class ma{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xt.copy(this.origin).addScaledVector(this.direction,t),Xt.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){qr.copy(e).add(t).multiplyScalar(.5),qi.copy(t).sub(e).normalize(),rn.copy(this.origin).sub(qr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(qi),a=rn.dot(this.direction),c=-rn.dot(qi),l=rn.lengthSq(),h=Math.abs(1-o*o);let d,f,p,_;if(h>0)if(d=o*c-a,f=o*a-c,_=s*h,d>=0)if(f>=-_)if(f<=_){const g=1/h;d*=g,f*=g,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-_?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l):f<=_?(d=0,f=Math.min(Math.max(-s,-c),s),p=f*(f+2*c)+l):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-c),s),p=-d*d+f*(f+2*c)+l);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(qr).addScaledVector(qi,f),p}intersectSphere(e,t){Xt.subVectors(e.center,this.origin);const n=Xt.dot(this.direction),r=Xt.dot(Xt)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Xt)!==null}intersectTriangle(e,t,n,r,s){Dr.subVectors(t,e),Di.subVectors(n,e),Ur.crossVectors(Dr,Di);let o=this.direction.dot(Ur),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rn.subVectors(this.origin,e);const c=a*this.direction.dot(Di.crossVectors(rn,Di));if(c<0)return null;const l=a*this.direction.dot(Dr.cross(rn));if(l<0||c+l>o)return null;const h=-a*rn.dot(Ur);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $e{constructor(){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,l,h,d,f,p,_,g,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=_,u[11]=g,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Xn.setFromMatrixColumn(e,0).length(),s=1/Xn.setFromMatrixColumn(e,1).length(),o=1/Xn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,p=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=-c*d,t[8]=l,t[1]=p+_*l,t[5]=f-g*l,t[9]=-a*c,t[2]=g-f*l,t[6]=_+p*l,t[10]=o*c}else if(e.order==="YXZ"){const f=c*h,p=c*d,_=l*h,g=l*d;t[0]=f+g*a,t[4]=_*a-p,t[8]=o*l,t[1]=o*d,t[5]=o*h,t[9]=-a,t[2]=p*a-_,t[6]=g+f*a,t[10]=o*c}else if(e.order==="ZXY"){const f=c*h,p=c*d,_=l*h,g=l*d;t[0]=f-g*a,t[4]=-o*d,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*h,t[9]=g-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const f=o*h,p=o*d,_=a*h,g=a*d;t[0]=c*h,t[4]=_*l-p,t[8]=f*l+g,t[1]=c*d,t[5]=g*l+f,t[9]=p*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const f=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-f*d,t[8]=_*d+p,t[1]=d,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=p*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=o*c,p=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-d,t[8]=l*h,t[1]=f*d+g,t[5]=o*h,t[9]=p*d-_,t[2]=_*d-p,t[6]=a*h,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ic,e,rc)}lookAt(e,t,n){const r=this.elements;return xt.subVectors(e,t),xt.lengthSq()===0&&(xt.z=1),xt.normalize(),sn.crossVectors(n,xt),sn.lengthSq()===0&&(Math.abs(n.z)===1?xt.x+=1e-4:xt.z+=1e-4,xt.normalize(),sn.crossVectors(n,xt)),sn.normalize(),Ui.crossVectors(xt,sn),r[0]=sn.x,r[4]=Ui.x,r[8]=xt.x,r[1]=sn.y,r[5]=Ui.y,r[9]=xt.y,r[2]=sn.z,r[6]=Ui.z,r[10]=xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],_=n[2],g=n[6],m=n[10],u=n[14],y=n[3],x=n[7],b=n[11],E=n[15],w=r[0],q=r[4],I=r[8],v=r[12],A=r[1],H=r[5],ne=r[9],U=r[13],F=r[2],G=r[6],ee=r[10],Z=r[14],X=r[3],K=r[7],te=r[11],me=r[15];return s[0]=o*w+a*A+c*F+l*X,s[4]=o*q+a*H+c*G+l*K,s[8]=o*I+a*ne+c*ee+l*te,s[12]=o*v+a*U+c*Z+l*me,s[1]=h*w+d*A+f*F+p*X,s[5]=h*q+d*H+f*G+p*K,s[9]=h*I+d*ne+f*ee+p*te,s[13]=h*v+d*U+f*Z+p*me,s[2]=_*w+g*A+m*F+u*X,s[6]=_*q+g*H+m*G+u*K,s[10]=_*I+g*ne+m*ee+u*te,s[14]=_*v+g*U+m*Z+u*me,s[3]=y*w+x*A+b*F+E*X,s[7]=y*q+x*H+b*G+E*K,s[11]=y*I+x*ne+b*ee+E*te,s[15]=y*v+x*U+b*Z+E*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],d=e[6],f=e[10],p=e[14],_=e[3],g=e[7],m=e[11],u=e[15];return _*(+s*c*d-r*l*d-s*a*f+n*l*f+r*a*p-n*c*p)+g*(+t*c*p-t*l*f+s*o*f-r*o*p+r*l*h-s*c*h)+m*(+t*l*d-t*a*p-s*o*d+n*o*p+s*a*h-n*l*h)+u*(-r*a*h-t*c*d+t*a*f+r*o*d-n*o*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],d=e[9],f=e[10],p=e[11],_=e[12],g=e[13],m=e[14],u=e[15],y=d*m*l-g*f*l+g*c*p-a*m*p-d*c*u+a*f*u,x=_*f*l-h*m*l-_*c*p+o*m*p+h*c*u-o*f*u,b=h*g*l-_*d*l+_*a*p-o*g*p-h*a*u+o*d*u,E=_*d*c-h*g*c-_*a*f+o*g*f+h*a*m-o*d*m,w=t*y+n*x+r*b+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/w;return e[0]=y*q,e[1]=(g*f*s-d*m*s-g*r*p+n*m*p+d*r*u-n*f*u)*q,e[2]=(a*m*s-g*c*s+g*r*l-n*m*l-a*r*u+n*c*u)*q,e[3]=(d*c*s-a*f*s-d*r*l+n*f*l+a*r*p-n*c*p)*q,e[4]=x*q,e[5]=(h*m*s-_*f*s+_*r*p-t*m*p-h*r*u+t*f*u)*q,e[6]=(_*c*s-o*m*s-_*r*l+t*m*l+o*r*u-t*c*u)*q,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*p+t*c*p)*q,e[8]=b*q,e[9]=(_*d*s-h*g*s-_*n*p+t*g*p+h*n*u-t*d*u)*q,e[10]=(o*g*s-_*a*s+_*n*l-t*g*l-o*n*u+t*a*u)*q,e[11]=(h*a*s-o*d*s-h*n*l+t*d*l+o*n*p-t*a*p)*q,e[12]=E*q,e[13]=(h*g*r-_*d*r+_*n*f-t*g*f-h*n*m+t*d*m)*q,e[14]=(_*a*r-o*g*r-_*n*c+t*g*c+o*n*m-t*a*m)*q,e[15]=(o*d*r-h*a*r+h*n*c-t*d*c-o*n*f+t*a*f)*q,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,d=a+a,f=s*l,p=s*h,_=s*d,g=o*h,m=o*d,u=a*d,y=c*l,x=c*h,b=c*d,E=n.x,w=n.y,q=n.z;return r[0]=(1-(g+u))*E,r[1]=(p+b)*E,r[2]=(_-x)*E,r[3]=0,r[4]=(p-b)*w,r[5]=(1-(f+u))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(_+x)*q,r[9]=(m-y)*q,r[10]=(1-(f+g))*q,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Xn.set(r[0],r[1],r[2]).length();const o=Xn.set(r[4],r[5],r[6]).length(),a=Xn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ct.copy(this);const l=1/s,h=1/o,d=1/a;return Ct.elements[0]*=l,Ct.elements[1]*=l,Ct.elements[2]*=l,Ct.elements[4]*=h,Ct.elements[5]*=h,Ct.elements[6]*=h,Ct.elements[8]*=d,Ct.elements[9]*=d,Ct.elements[10]*=d,t.setFromRotationMatrix(Ct),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=l,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),h=1/(o-s),d=(t+e)*c,f=(n+r)*l,p=(o+s)*h;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Xn=new R,Ct=new $e,ic=new R(0,0,0),rc=new R(1,1,1),sn=new R,Ui=new R,xt=new R,_a=new $e,ga=new _n;class Ii{constructor(e=0,t=0,n=0,r=Ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-at(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(at(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _a.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ga.setFromEuler(this),this.setFromQuaternion(ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ii.DEFAULT_ORDER="XYZ";class xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sc=0;const va=new R,Yn=new _n,Yt=new $e,Ni=new R,mi=new R,ac=new R,oc=new _n,Ma=new R(1,0,0),Sa=new R(0,1,0),Ea=new R(0,0,1),lc={type:"added"},ya={type:"removed"};class ot extends pn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sc++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new R,t=new Ii,n=new _n,r=new R(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new Ge}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.multiply(Yn),this}rotateOnWorldAxis(e,t){return Yn.setFromAxisAngle(e,t),this.quaternion.premultiply(Yn),this}rotateX(e){return this.rotateOnAxis(Ma,e)}rotateY(e){return this.rotateOnAxis(Sa,e)}rotateZ(e){return this.rotateOnAxis(Ea,e)}translateOnAxis(e,t){return va.copy(e).applyQuaternion(this.quaternion),this.position.add(va.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ma,e)}translateY(e){return this.translateOnAxis(Sa,e)}translateZ(e){return this.translateOnAxis(Ea,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ni.copy(e):Ni.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yt.lookAt(mi,Ni,this.up):Yt.lookAt(Ni,mi,this.up),this.quaternion.setFromRotationMatrix(Yt),r&&(Yt.extractRotation(r.matrixWorld),Yn.setFromRotationMatrix(Yt),this.quaternion.premultiply(Yn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(lc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ya)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ya)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,e,ac),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mi,oc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ot.DEFAULT_UP=new R(0,1,0),ot.DEFAULT_MATRIX_AUTO_UPDATE=!0,ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Lt=new R,jt=new R,Ir=new R,Zt=new R,jn=new R,Zn=new R,Ta=new R,Nr=new R,Fr=new R,Or=new R;let Fi=!1;class qt{constructor(e=new R,t=new R,n=new R){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Lt.subVectors(e,t),r.cross(Lt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Lt.subVectors(r,t),jt.subVectors(n,t),Ir.subVectors(e,t);const o=Lt.dot(Lt),a=Lt.dot(jt),c=Lt.dot(Ir),l=jt.dot(jt),h=jt.dot(Ir),d=o*l-a*a;if(d===0)return s.set(-2,-1,-1);const f=1/d,p=(l*c-a*h)*f,_=(o*h-a*c)*f;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Zt),Zt.x>=0&&Zt.y>=0&&Zt.x+Zt.y<=1}static getUV(e,t,n,r,s,o,a,c){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),this.getInterpolation(e,t,n,r,s,o,a,c)}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Zt),c.setScalar(0),c.addScaledVector(s,Zt.x),c.addScaledVector(o,Zt.y),c.addScaledVector(a,Zt.z),c}static isFrontFacing(e,t,n,r){return Lt.subVectors(n,t),jt.subVectors(e,t),Lt.cross(jt).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Lt.subVectors(this.c,this.b),jt.subVectors(this.a,this.b),Lt.cross(jt).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Fi===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Fi=!0),qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;jn.subVectors(r,n),Zn.subVectors(s,n),Nr.subVectors(e,n);const c=jn.dot(Nr),l=Zn.dot(Nr);if(c<=0&&l<=0)return t.copy(n);Fr.subVectors(e,r);const h=jn.dot(Fr),d=Zn.dot(Fr);if(h>=0&&d<=h)return t.copy(r);const f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(jn,o);Or.subVectors(e,s);const p=jn.dot(Or),_=Zn.dot(Or);if(_>=0&&p<=_)return t.copy(s);const g=p*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Zn,a);const m=h*_-p*d;if(m<=0&&d-h>=0&&p-_>=0)return Ta.subVectors(s,r),a=(d-h)/(d-h+(p-_)),t.copy(r).addScaledVector(Ta,a);const u=1/(m+g+f);return o=g*u,a=f*u,t.copy(n).addScaledVector(jn,o).addScaledVector(Zn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let cc=0;class $n extends pn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=Dn,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ps,this.blendDst=Rs,this.blendEquation=Un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Dn&&(n.blending=this.blending),this.side!==Qt&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ba={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dt={h:0,s:0,l:0},Oi={h:0,s:0,l:0};function Br(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ue){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Rt.workingColorSpace){if(e=Xl(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Br(o,s,e+1/3),this.g=Br(o,s,e),this.b=Br(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ue){const n=ba[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ue){return Rt.fromWorkingColorSpace(ct.copy(this),e),Math.round(at(ct.r*255,0,255))*65536+Math.round(at(ct.g*255,0,255))*256+Math.round(at(ct.b*255,0,255))}getHexString(e=Ue){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(ct.copy(this),t);const n=ct.r,r=ct.g,s=ct.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-n)/d+2;break;case s:c=(n-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(ct.copy(this),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=Ue){Rt.fromWorkingColorSpace(ct.copy(this),e);const t=ct.r,n=ct.g,r=ct.b;return e!==Ue?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Dt),Dt.h+=e,Dt.s+=t,Dt.l+=n,this.setHSL(Dt.h,Dt.s,Dt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dt),e.getHSL(Oi);const n=br(Dt.h,Oi.h,t),r=br(Dt.s,Oi.s,t),s=br(Dt.l,Oi.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ct=new ke;ke.NAMES=ba;class zr extends $n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Qe=new R,Bi=new he;class Ft{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bi.fromBufferAttribute(this,t),Bi.applyMatrix3(e),this.setXY(t,Bi.x,Bi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix3(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyMatrix4(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.applyNormalMatrix(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qe.fromBufferAttribute(this,t),Qe.transformDirection(e),this.setXYZ(t,Qe.x,Qe.y,Qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),r=_t(r,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Aa extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class wa extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class it extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let hc=0;const yt=new $e,Gr=new ot,Kn=new R,vt=new di,_i=new di,rt=new R;class Mt extends pn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hc++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ca(e)?wa:Aa)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yt.makeRotationFromQuaternion(e),this.applyMatrix4(yt),this}rotateX(e){return yt.makeRotationX(e),this.applyMatrix4(yt),this}rotateY(e){return yt.makeRotationY(e),this.applyMatrix4(yt),this}rotateZ(e){return yt.makeRotationZ(e),this.applyMatrix4(yt),this}translate(e,t,n){return yt.makeTranslation(e,t,n),this.applyMatrix4(yt),this}scale(e,t,n){return yt.makeScale(e,t,n),this.applyMatrix4(yt),this}lookAt(e){return Gr.lookAt(e),Gr.updateMatrix(),this.applyMatrix4(Gr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Kn).negate(),this.translate(Kn.x,Kn.y,Kn.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new it(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vt.setFromBufferAttribute(s),this.morphTargetsRelative?(rt.addVectors(this.boundingBox.min,vt.min),this.boundingBox.expandByPoint(rt),rt.addVectors(this.boundingBox.max,vt.max),this.boundingBox.expandByPoint(rt)):(this.boundingBox.expandByPoint(vt.min),this.boundingBox.expandByPoint(vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Li);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(e){const n=this.boundingSphere.center;if(vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];_i.setFromBufferAttribute(a),this.morphTargetsRelative?(rt.addVectors(vt.min,_i.min),vt.expandByPoint(rt),rt.addVectors(vt.max,_i.max),vt.expandByPoint(rt)):(vt.expandByPoint(_i.min),vt.expandByPoint(_i.max))}vt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)rt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(rt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)rt.fromBufferAttribute(a,l),c&&(Kn.fromBufferAttribute(e,l),rt.add(Kn)),r=Math.max(r,n.distanceToSquared(rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let A=0;A<a;A++)l[A]=new R,h[A]=new R;const d=new R,f=new R,p=new R,_=new he,g=new he,m=new he,u=new R,y=new R;function x(A,H,ne){d.fromArray(r,A*3),f.fromArray(r,H*3),p.fromArray(r,ne*3),_.fromArray(o,A*2),g.fromArray(o,H*2),m.fromArray(o,ne*2),f.sub(d),p.sub(d),g.sub(_),m.sub(_);const U=1/(g.x*m.y-m.x*g.y);isFinite(U)&&(u.copy(f).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(U),y.copy(p).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(U),l[A].add(u),l[H].add(u),l[ne].add(u),h[A].add(y),h[H].add(y),h[ne].add(y))}let b=this.groups;b.length===0&&(b=[{start:0,count:n.length}]);for(let A=0,H=b.length;A<H;++A){const ne=b[A],U=ne.start,F=ne.count;for(let G=U,ee=U+F;G<ee;G+=3)x(n[G+0],n[G+1],n[G+2])}const E=new R,w=new R,q=new R,I=new R;function v(A){q.fromArray(s,A*3),I.copy(q);const H=l[A];E.copy(H),E.sub(q.multiplyScalar(q.dot(H))).normalize(),w.crossVectors(I,H);const U=w.dot(h[A])<0?-1:1;c[A*4]=E.x,c[A*4+1]=E.y,c[A*4+2]=E.z,c[A*4+3]=U}for(let A=0,H=b.length;A<H;++A){const ne=b[A],U=ne.start,F=ne.count;for(let G=U,ee=U+F;G<ee;G+=3)v(n[G+0]),v(n[G+1]),v(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new R,s=new R,o=new R,a=new R,c=new R,l=new R,h=new R,d=new R;if(e)for(let f=0,p=e.count;f<p;f+=3){const _=e.getX(f+0),g=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)rt.fromBufferAttribute(e,t),rt.normalize(),e.setXYZ(t,rt.x,rt.y,rt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h);let p=0,_=0;for(let g=0,m=c.length;g<m;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*h;for(let u=0;u<h;u++)f[_++]=l[p++]}return new Ft(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let h=0,d=l.length;h<d;h++){const f=l[h],p=e(f,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){const p=l[d];h.push(p.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],d=s[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pa=new $e,Ot=new ma,zi=new Li,Ra=new R,Jn=new R,Qn=new R,ei=new R,Hr=new R,Gi=new R,Hi=new he,Vi=new he,ki=new he,Ca=new R,La=new R,qa=new R,Wi=new R,Xi=new R;class Tt extends ot{constructor(e=new Mt,t=new zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Gi.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=a[c],d=s[c];h!==0&&(Hr.fromBufferAttribute(d,e),o?Gi.addScaledVector(Hr,h):Gi.addScaledVector(Hr.sub(t),h))}t.add(Gi)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zi.copy(n.boundingSphere),zi.applyMatrix4(s),Ot.copy(e.ray).recast(e.near),!(zi.containsPoint(Ot.origin)===!1&&(Ot.intersectSphere(zi,Ra)===null||Ot.origin.distanceToSquared(Ra)>(e.far-e.near)**2))&&(Pa.copy(s).invert(),Ot.copy(e.ray).applyMatrix4(Pa),!(n.boundingBox!==null&&Ot.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,c=r.attributes.uv,l=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=s[g.materialIndex],u=Math.max(g.start,f.start),y=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let x=u,b=y;x<b;x+=3){const E=o.getX(x),w=o.getX(x+1),q=o.getX(x+2);n=Yi(this,m,e,Ot,c,l,h,E,w,q),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const u=o.getX(g),y=o.getX(g+1),x=o.getX(g+2);n=Yi(this,s,e,Ot,c,l,h,u,y,x),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,_=d.length;p<_;p++){const g=d[p],m=s[g.materialIndex],u=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=u,b=y;x<b;x+=3){const E=x,w=x+1,q=x+2;n=Yi(this,m,e,Ot,c,l,h,E,w,q),n&&(n.faceIndex=Math.floor(x/3),n.face.materialIndex=g.materialIndex,t.push(n))}}else{const p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){const u=g,y=g+1,x=g+2;n=Yi(this,s,e,Ot,c,l,h,u,y,x),n&&(n.faceIndex=Math.floor(g/3),t.push(n))}}}}function uc(i,e,t,n,r,s,o,a){let c;if(e.side===mt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===Qt,a),c===null)return null;Xi.copy(a),Xi.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Xi);return l<t.near||l>t.far?null:{distance:l,point:Xi.clone(),object:i}}function Yi(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,Jn),i.getVertexPosition(c,Qn),i.getVertexPosition(l,ei);const h=uc(i,e,t,n,Jn,Qn,ei,Wi);if(h){r&&(Hi.fromBufferAttribute(r,a),Vi.fromBufferAttribute(r,c),ki.fromBufferAttribute(r,l),h.uv=qt.getInterpolation(Wi,Jn,Qn,ei,Hi,Vi,ki,new he)),s&&(Hi.fromBufferAttribute(s,a),Vi.fromBufferAttribute(s,c),ki.fromBufferAttribute(s,l),h.uv1=qt.getInterpolation(Wi,Jn,Qn,ei,Hi,Vi,ki,new he),h.uv2=h.uv1),o&&(Ca.fromBufferAttribute(o,a),La.fromBufferAttribute(o,c),qa.fromBufferAttribute(o,l),h.normal=qt.getInterpolation(Wi,Jn,Qn,ei,Ca,La,qa,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new R,materialIndex:0};qt.getNormal(Jn,Qn,ei,d.normal),h.face=d}return h}class vn extends Mt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],h=[],d=[];let f=0,p=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,r,o,2),_("x","z","y",1,-1,e,n,-t,r,o,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new it(l,3)),this.setAttribute("normal",new it(h,3)),this.setAttribute("uv",new it(d,2));function _(g,m,u,y,x,b,E,w,q,I,v){const A=b/q,H=E/I,ne=b/2,U=E/2,F=w/2,G=q+1,ee=I+1;let Z=0,X=0;const K=new R;for(let te=0;te<ee;te++){const me=te*H-U;for(let oe=0;oe<G;oe++){const z=oe*A-ne;K[g]=z*y,K[m]=me*x,K[u]=F,l.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[u]=w>0?1:-1,h.push(K.x,K.y,K.z),d.push(oe/q),d.push(1-te/I),Z+=1}}for(let te=0;te<I;te++)for(let me=0;me<q;me++){const oe=f+me+G*te,z=f+me+G*(te+1),j=f+(me+1)+G*(te+1),le=f+(me+1)+G*te;c.push(oe,z,le),c.push(z,j,le),X+=6}a.addGroup(p,X,v),p+=X,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ti(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function dt(i){const e={};for(let t=0;t<i.length;t++){const n=ti(i[t]);for(const r in n)e[r]=n[r]}return e}function dc(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Da(i){return i.getRenderTarget()===null?i.outputColorSpace:Nt}const fc={clone:ti,merge:dt};var pc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends $n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pc,this.fragmentShader=mc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ti(e.uniforms),this.uniformsGroups=dc(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ua extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class bt extends Ua{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Tr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Tr*2*Math.atan(Math.tan(yr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ni=-90,ii=1;class _c extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new bt(ni,ii,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new bt(ni,ii,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new bt(ni,ii,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new bt(ni,ii,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new bt(ni,ii,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new bt(ni,ii,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Vt,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Ia extends gt{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:In,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gc extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ui("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===dn?Ue:fn),this.texture=new Ia(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new vn(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mt,blending:en});s.uniforms.tEquirect.value=t;const o=new Tt(r,s),a=t.minFilter;return t.minFilter===ci&&(t.minFilter=Et),new _c(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Vr=new R,xc=new R,vc=new Ge;class Sn{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Vr.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vr),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vc.getNormalMatrix(e),r=this.coplanarPoint(Vr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const En=new Li,ji=new R;class kr{constructor(e=new Sn,t=new Sn,n=new Sn,r=new Sn,s=new Sn,o=new Sn){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],g=n[11],m=n[12],u=n[13],y=n[14],x=n[15];return t[0].setComponents(a-r,d-c,g-f,x-m).normalize(),t[1].setComponents(a+r,d+c,g+f,x+m).normalize(),t[2].setComponents(a+s,d+l,g+p,x+u).normalize(),t[3].setComponents(a-s,d-l,g-p,x-u).normalize(),t[4].setComponents(a-o,d-h,g-_,x-y).normalize(),t[5].setComponents(a+o,d+h,g+_,x+y).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(En)}intersectsSprite(e){return En.center.set(0,0,0),En.radius=.7071067811865476,En.applyMatrix4(e.matrixWorld),this.intersectsSphere(En)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ji.x=r.normal.x>0?e.max.x:e.min.x,ji.y=r.normal.y>0?e.max.y:e.min.y,ji.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ji)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Na(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Mc(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,h){const d=l.array,f=l.usage,p=i.createBuffer();i.bindBuffer(h,p),i.bufferData(h,d,f),l.onUploadCallback();let _;if(d instanceof Float32Array)_=i.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=i.SHORT;else if(d instanceof Uint32Array)_=i.UNSIGNED_INT;else if(d instanceof Int32Array)_=i.INT;else if(d instanceof Int8Array)_=i.BYTE;else if(d instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,h,d){const f=h.array,p=h.updateRange;i.bindBuffer(d,l),p.count===-1?i.bufferSubData(d,0,f):(t?i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(d,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const d=n.get(l);d===void 0?n.set(l,r(l,h)):d.version<l.version&&(s(d.buffer,l,h),d.version=l.version)}return{get:o,remove:a,update:c}}class Wr extends Mt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,d=e/a,f=t/c,p=[],_=[],g=[],m=[];for(let u=0;u<h;u++){const y=u*f-o;for(let x=0;x<l;x++){const b=x*d-s;_.push(b,-y,0),g.push(0,0,1),m.push(x/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){const x=y+l*u,b=y+l*(u+1),E=y+1+l*(u+1),w=y+1+l*u;p.push(x,b,w),p.push(b,E,w)}this.setIndex(p),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Sc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ec=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Tc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ac=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wc="vec3 transformed = vec3( position );",Pc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rc=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cc=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Lc=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Dc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ic=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Bc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,zc=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Gc=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Hc=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kc=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yc="gl_FragColor = linearToOutputTexel( gl_FragColor );",jc=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zc=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,$c=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kc=`#ifdef USE_ENVMAP
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
#endif`,Jc=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qc=`#ifdef USE_ENVMAP
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
#endif`,eh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,th=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ih=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rh=`#ifdef USE_GRADIENTMAP
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
}`,sh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ah=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ch=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,hh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,uh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ph=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,_h=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,gh=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,xh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,yh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Th=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,bh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ah=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wh=`#if defined( USE_POINTS_UV )
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
#endif`,Ph=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ch=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,qh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Dh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Uh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,Ih=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,zh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Gh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,Xh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$h=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Qh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ru=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,su=`#ifdef USE_SKINNING
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
#endif`,au=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ou=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hu=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,uu=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,du=`#ifdef USE_UV
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
#endif`,fu=`#ifdef USE_UV
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
#endif`,pu=`#ifdef USE_UV
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
#endif`,mu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ie={alphamap_fragment:Sc,alphamap_pars_fragment:Ec,alphatest_fragment:yc,alphatest_pars_fragment:Tc,aomap_fragment:bc,aomap_pars_fragment:Ac,begin_vertex:wc,beginnormal_vertex:Pc,bsdfs:Rc,iridescence_fragment:Cc,bumpmap_pars_fragment:Lc,clipping_planes_fragment:qc,clipping_planes_pars_fragment:Dc,clipping_planes_pars_vertex:Uc,clipping_planes_vertex:Ic,color_fragment:Nc,color_pars_fragment:Fc,color_pars_vertex:Oc,color_vertex:Bc,common:zc,cube_uv_reflection_fragment:Gc,defaultnormal_vertex:Hc,displacementmap_pars_vertex:Vc,displacementmap_vertex:kc,emissivemap_fragment:Wc,emissivemap_pars_fragment:Xc,encodings_fragment:Yc,encodings_pars_fragment:jc,envmap_fragment:Zc,envmap_common_pars_fragment:$c,envmap_pars_fragment:Kc,envmap_pars_vertex:Jc,envmap_physical_pars_fragment:hh,envmap_vertex:Qc,fog_vertex:eh,fog_pars_vertex:th,fog_fragment:nh,fog_pars_fragment:ih,gradientmap_pars_fragment:rh,lightmap_fragment:sh,lightmap_pars_fragment:ah,lights_lambert_fragment:oh,lights_lambert_pars_fragment:lh,lights_pars_begin:ch,lights_toon_fragment:uh,lights_toon_pars_fragment:dh,lights_phong_fragment:fh,lights_phong_pars_fragment:ph,lights_physical_fragment:mh,lights_physical_pars_fragment:_h,lights_fragment_begin:gh,lights_fragment_maps:xh,lights_fragment_end:vh,logdepthbuf_fragment:Mh,logdepthbuf_pars_fragment:Sh,logdepthbuf_pars_vertex:Eh,logdepthbuf_vertex:yh,map_fragment:Th,map_pars_fragment:bh,map_particle_fragment:Ah,map_particle_pars_fragment:wh,metalnessmap_fragment:Ph,metalnessmap_pars_fragment:Rh,morphcolor_vertex:Ch,morphnormal_vertex:Lh,morphtarget_pars_vertex:qh,morphtarget_vertex:Dh,normal_fragment_begin:Uh,normal_fragment_maps:Ih,normal_pars_fragment:Nh,normal_pars_vertex:Fh,normal_vertex:Oh,normalmap_pars_fragment:Bh,clearcoat_normal_fragment_begin:zh,clearcoat_normal_fragment_maps:Gh,clearcoat_pars_fragment:Hh,iridescence_pars_fragment:Vh,output_fragment:kh,packing:Wh,premultiplied_alpha_fragment:Xh,project_vertex:Yh,dithering_fragment:jh,dithering_pars_fragment:Zh,roughnessmap_fragment:$h,roughnessmap_pars_fragment:Kh,shadowmap_pars_fragment:Jh,shadowmap_pars_vertex:Qh,shadowmap_vertex:eu,shadowmask_pars_fragment:tu,skinbase_vertex:nu,skinning_pars_vertex:iu,skinning_vertex:ru,skinnormal_vertex:su,specularmap_fragment:au,specularmap_pars_fragment:ou,tonemapping_fragment:lu,tonemapping_pars_fragment:cu,transmission_fragment:hu,transmission_pars_fragment:uu,uv_pars_fragment:du,uv_pars_vertex:fu,uv_vertex:pu,worldpos_vertex:mu,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,meshlambert_frag:`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,meshphong_frag:`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},ue={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},Bt={basic:{uniforms:dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:dt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:dt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:dt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:dt([ue.points,ue.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:dt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:dt([ue.common,ue.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:dt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:dt([ue.sprite,ue.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:dt([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:dt([ue.lights,ue.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};Bt.physical={uniforms:dt([Bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const Zi={r:0,b:0,g:0};function _u(i,e,t,n,r,s,o){const a=new ke(0);let c=s===!0?0:1,l,h,d=null,f=0,p=null;function _(m,u){let y=!1,x=u.isScene===!0?u.background:null;switch(x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,c):x&&x.isColor&&(g(x,1),y=!0),i.xr.getEnvironmentBlendMode()){case"opaque":y=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,o),y=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,o),y=!0;break}(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ai)?(h===void 0&&(h=new Tt(new vn(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:ti(Bt.backgroundCube.uniforms),vertexShader:Bt.backgroundCube.vertexShader,fragmentShader:Bt.backgroundCube.fragmentShader,side:mt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,q,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=x.colorSpace!==Ue,(d!==x||f!==x.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Tt(new Wr(2,2),new Mn({name:"BackgroundMaterial",uniforms:ti(Bt.background.uniforms),vertexShader:Bt.background.vertexShader,fragmentShader:Bt.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=x.colorSpace!==Ue,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||f!==x.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=x,f=x.version,p=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,u){m.getRGB(Zi,Da(i)),n.buffers.color.setClear(Zi.r,Zi.g,Zi.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),c=u,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,g(a,c)},render:_}}function gu(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=m(null);let l=c,h=!1;function d(F,G,ee,Z,X){let K=!1;if(o){const te=g(Z,ee,G);l!==te&&(l=te,p(l.object)),K=u(F,Z,ee,X),K&&y(F,Z,ee,X)}else{const te=G.wireframe===!0;(l.geometry!==Z.id||l.program!==ee.id||l.wireframe!==te)&&(l.geometry=Z.id,l.program=ee.id,l.wireframe=te,K=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(K||h)&&(h=!1,I(F,G,ee,Z),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(F){return n.isWebGL2?i.bindVertexArray(F):s.bindVertexArrayOES(F)}function _(F){return n.isWebGL2?i.deleteVertexArray(F):s.deleteVertexArrayOES(F)}function g(F,G,ee){const Z=ee.wireframe===!0;let X=a[F.id];X===void 0&&(X={},a[F.id]=X);let K=X[G.id];K===void 0&&(K={},X[G.id]=K);let te=K[Z];return te===void 0&&(te=m(f()),K[Z]=te),te}function m(F){const G=[],ee=[],Z=[];for(let X=0;X<r;X++)G[X]=0,ee[X]=0,Z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ee,attributeDivisors:Z,object:F,attributes:{},index:null}}function u(F,G,ee,Z){const X=l.attributes,K=G.attributes;let te=0;const me=ee.getAttributes();for(const oe in me)if(me[oe].location>=0){const j=X[oe];let le=K[oe];if(le===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),j===void 0||j.attribute!==le||le&&j.data!==le.data)return!0;te++}return l.attributesNum!==te||l.index!==Z}function y(F,G,ee,Z){const X={},K=G.attributes;let te=0;const me=ee.getAttributes();for(const oe in me)if(me[oe].location>=0){let j=K[oe];j===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(j=F.instanceColor));const le={};le.attribute=j,j&&j.data&&(le.data=j.data),X[oe]=le,te++}l.attributes=X,l.attributesNum=te,l.index=Z}function x(){const F=l.newAttributes;for(let G=0,ee=F.length;G<ee;G++)F[G]=0}function b(F){E(F,0)}function E(F,G){const ee=l.newAttributes,Z=l.enabledAttributes,X=l.attributeDivisors;ee[F]=1,Z[F]===0&&(i.enableVertexAttribArray(F),Z[F]=1),X[F]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](F,G),X[F]=G)}function w(){const F=l.newAttributes,G=l.enabledAttributes;for(let ee=0,Z=G.length;ee<Z;ee++)G[ee]!==F[ee]&&(i.disableVertexAttribArray(ee),G[ee]=0)}function q(F,G,ee,Z,X,K){n.isWebGL2===!0&&(ee===i.INT||ee===i.UNSIGNED_INT)?i.vertexAttribIPointer(F,G,ee,X,K):i.vertexAttribPointer(F,G,ee,Z,X,K)}function I(F,G,ee,Z){if(n.isWebGL2===!1&&(F.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=Z.attributes,K=ee.getAttributes(),te=G.defaultAttributeValues;for(const me in K){const oe=K[me];if(oe.location>=0){let z=X[me];if(z===void 0&&(me==="instanceMatrix"&&F.instanceMatrix&&(z=F.instanceMatrix),me==="instanceColor"&&F.instanceColor&&(z=F.instanceColor)),z!==void 0){const j=z.normalized,le=z.itemSize,pe=t.get(z);if(pe===void 0)continue;const C=pe.buffer,Pe=pe.type,Re=pe.bytesPerElement;if(z.isInterleavedBufferAttribute){const ae=z.data,Me=ae.stride,Q=z.offset;if(ae.isInstancedInterleavedBuffer){for(let W=0;W<oe.locationSize;W++)E(oe.location+W,ae.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let W=0;W<oe.locationSize;W++)b(oe.location+W);i.bindBuffer(i.ARRAY_BUFFER,C);for(let W=0;W<oe.locationSize;W++)q(oe.location+W,le/oe.locationSize,Pe,j,Me*Re,(Q+le/oe.locationSize*W)*Re)}else{if(z.isInstancedBufferAttribute){for(let ae=0;ae<oe.locationSize;ae++)E(oe.location+ae,z.meshPerAttribute);F.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let ae=0;ae<oe.locationSize;ae++)b(oe.location+ae);i.bindBuffer(i.ARRAY_BUFFER,C);for(let ae=0;ae<oe.locationSize;ae++)q(oe.location+ae,le/oe.locationSize,Pe,j,le*Re,le/oe.locationSize*ae*Re)}}else if(te!==void 0){const j=te[me];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(oe.location,j);break;case 3:i.vertexAttrib3fv(oe.location,j);break;case 4:i.vertexAttrib4fv(oe.location,j);break;default:i.vertexAttrib1fv(oe.location,j)}}}}w()}function v(){ne();for(const F in a){const G=a[F];for(const ee in G){const Z=G[ee];for(const X in Z)_(Z[X].object),delete Z[X];delete G[ee]}delete a[F]}}function A(F){if(a[F.id]===void 0)return;const G=a[F.id];for(const ee in G){const Z=G[ee];for(const X in Z)_(Z[X].object),delete Z[X];delete G[ee]}delete a[F.id]}function H(F){for(const G in a){const ee=a[G];if(ee[F.id]===void 0)continue;const Z=ee[F.id];for(const X in Z)_(Z[X].object),delete Z[X];delete ee[F.id]}}function ne(){U(),h=!0,l!==c&&(l=c,p(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:ne,resetDefaultState:U,dispose:v,releaseStatesOfGeometry:A,releaseStatesOfProgram:H,initAttributes:x,enableAttribute:b,disableUnusedAttributes:w}}function xu(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,h){i.drawArrays(s,l,h),t.update(h,s,1)}function c(l,h,d){if(d===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,l,h,d),t.update(h,s,d)}this.setMode=o,this.render=a,this.renderInstances=c}function vu(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const q=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(q){if(q==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";q="mediump"}return q==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),u=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,b=o||e.has("OES_texture_float"),E=x&&b,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:w}}function Mu(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Sn,a=new Ge,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||_===null||_.length===0||s&&!m)s?h(null):l();else{const y=s?0:n,x=y*4;let b=u.clippingState||null;c.value=b,b=h(_,f,x,p);for(let E=0;E!==x;++E)b[E]=t[E];u.clippingState=b,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,p,_){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=c.value,_!==!0||m===null){const u=p+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,b=p;x!==g;++x,b+=4)o.copy(d[x]).applyMatrix4(y,a),o.normal.toArray(m,b),m[b+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function Su(i){let e=new WeakMap;function t(o,a){return a===ur?o.mapping=In:a===dr&&(o.mapping=Nn),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ur||a===dr)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new gc(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Fa extends Ua{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ri=4,Oa=[.125,.215,.35,.446,.526,.582],yn=20,Xr=new Fa,Ba=new ke;let Yr=null;const Tn=(1+Math.sqrt(5))/2,si=1/Tn,za=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,Tn,si),new R(0,Tn,-si),new R(si,0,Tn),new R(-si,0,Tn),new R(Tn,si,0),new R(-Tn,si,0)];class Ga{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Yr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yr),e.scissorTest=!1,$i(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===In||e.mapping===Nn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:hi,format:Pt,colorSpace:Nt,depthBuffer:!1},r=Ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eu(s)),this._blurMaterial=yu(s,e,t)}return r}_compileMaterial(e){const t=new Tt(this._lodPlanes[0],e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,r){const a=new bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ba),h.toneMapping=Vt,h.autoClear=!1;const p=new zr({name:"PMREM.Background",side:mt,depthWrite:!1,depthTest:!1}),_=new Tt(new vn,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Ba),g=!0);for(let u=0;u<6;u++){const y=u%3;y===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):y===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const x=this._cubeSize;$i(r,y*x,u>2?x:0,x,x),h.setRenderTarget(r),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===In||e.mapping===Nn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Tt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;$i(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Xr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=za[(r-1)%za.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Tt(this._lodPlanes[r],l),f=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*yn-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):yn;m>yn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${yn}`);const u=[];let y=0;for(let q=0;q<yn;++q){const I=q/g,v=Math.exp(-I*I/2);u.push(v),q===0?y+=v:q<m&&(y+=2*v)}for(let q=0;q<u.length;q++)u[q]=u[q]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-n;const b=this._sizeLods[r],E=3*b*(r>x-ri?r-x+ri:0),w=4*(this._cubeSize-b);$i(t,E,w,3*b,2*b),c.setRenderTarget(t),c.render(d,Xr)}}function Eu(i){const e=[],t=[],n=[];let r=i;const s=i-ri+1+Oa.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-ri?c=Oa[o-i+ri-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,_=6,g=3,m=2,u=1,y=new Float32Array(g*_*p),x=new Float32Array(m*_*p),b=new Float32Array(u*_*p);for(let w=0;w<p;w++){const q=w%3*2/3-1,I=w>2?0:-1,v=[q,I,0,q+2/3,I,0,q+2/3,I+1,0,q,I,0,q+2/3,I+1,0,q,I+1,0];y.set(v,g*_*w),x.set(f,m*_*w);const A=[w,w,w,w,w,w];b.set(A,u*_*w)}const E=new Mt;E.setAttribute("position",new Ft(y,g)),E.setAttribute("uv",new Ft(x,m)),E.setAttribute("faceIndex",new Ft(b,u)),e.push(E),r>ri&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ha(i,e,t){const n=new mn(i,e,t);return n.texture.mapping=Ai,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $i(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function yu(i,e,t){const n=new Float32Array(yn),r=new R(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jr(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Va(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jr(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function ka(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function jr(){return`

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
	`}function Tu(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ur||c===dr,h=c===In||c===Nn;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Ga(i)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(l&&d&&d.height>0||h&&d&&r(d)){t===null&&(t=new Ga(i));const f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Au(i,e,t,n){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(d){const f=d.attributes;for(const _ in f)e.update(f[_],i.ARRAY_BUFFER);const p=d.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,u=g.length;m<u;m++)e.update(g[m],i.ARRAY_BUFFER)}}function l(d){const f=[],p=d.index,_=d.attributes.position;let g=0;if(p!==null){const y=p.array;g=p.version;for(let x=0,b=y.length;x<b;x+=3){const E=y[x+0],w=y[x+1],q=y[x+2];f.push(E,w,w,q,q,E)}}else{const y=_.array;g=_.version;for(let x=0,b=y.length/3-1;x<b;x+=3){const E=x+0,w=x+1,q=x+2;f.push(E,w,w,q,q,E)}}const m=new(ca(f)?wa:Aa)(f,1);m.version=g;const u=s.get(d);u&&e.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function wu(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,c;function l(f){a=f.type,c=f.bytesPerElement}function h(f,p){i.drawElements(s,p,a,f*c),t.update(p,s,1)}function d(f,p,_){if(_===0)return;let g,m;if(r)g=i,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,f*c,_),t.update(p,s,_)}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=d}function Pu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Ru(i,e){return i[0]-e[0]}function Cu(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Lu(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,d){const f=l.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=p!==void 0?p.length:0;let g=s.get(h);if(g===void 0||g.count!==_){let F=function(){ne.dispose(),s.delete(h),h.removeEventListener("dispose",F)};g!==void 0&&g.texture.dispose();const y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],q=h.morphAttributes.color||[];let I=0;y===!0&&(I=1),x===!0&&(I=2),b===!0&&(I=3);let v=h.attributes.position.count*I,A=1;v>e.maxTextureSize&&(A=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const H=new Float32Array(v*A*4*_),ne=new fa(H,v,A,_);ne.type=hn,ne.needsUpdate=!0;const U=I*4;for(let G=0;G<_;G++){const ee=E[G],Z=w[G],X=q[G],K=v*A*4*G;for(let te=0;te<ee.count;te++){const me=te*U;y===!0&&(o.fromBufferAttribute(ee,te),H[K+me+0]=o.x,H[K+me+1]=o.y,H[K+me+2]=o.z,H[K+me+3]=0),x===!0&&(o.fromBufferAttribute(Z,te),H[K+me+4]=o.x,H[K+me+5]=o.y,H[K+me+6]=o.z,H[K+me+7]=0),b===!0&&(o.fromBufferAttribute(X,te),H[K+me+8]=o.x,H[K+me+9]=o.y,H[K+me+10]=o.z,H[K+me+11]=X.itemSize===4?o.w:1)}}g={count:_,texture:ne,size:new he(v,A)},s.set(h,g),h.addEventListener("dispose",F)}let m=0;for(let y=0;y<f.length;y++)m+=f[y];const u=h.morphTargetsRelative?1:1-m;d.getUniforms().setValue(i,"morphTargetBaseInfluence",u),d.getUniforms().setValue(i,"morphTargetInfluences",f),d.getUniforms().setValue(i,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}else{const p=f===void 0?0:f.length;let _=n[h.id];if(_===void 0||_.length!==p){_=[];for(let x=0;x<p;x++)_[x]=[x,0];n[h.id]=_}for(let x=0;x<p;x++){const b=_[x];b[0]=x,b[1]=f[x]}_.sort(Cu);for(let x=0;x<8;x++)x<p&&_[x][1]?(a[x][0]=_[x][0],a[x][1]=_[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Ru);const g=h.morphAttributes.position,m=h.morphAttributes.normal;let u=0;for(let x=0;x<8;x++){const b=a[x],E=b[0],w=b[1];E!==Number.MAX_SAFE_INTEGER&&w?(g&&h.getAttribute("morphTarget"+x)!==g[E]&&h.setAttribute("morphTarget"+x,g[E]),m&&h.getAttribute("morphNormal"+x)!==m[E]&&h.setAttribute("morphNormal"+x,m[E]),r[x]=w,u+=w):(g&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),r[x]=0)}const y=h.morphTargetsRelative?1:1-u;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function qu(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,h=c.geometry,d=e.get(c,h);return r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const Wa=new gt,Xa=new fa,Ya=new tc,ja=new Ia,Za=[],$a=[],Ka=new Float32Array(16),Ja=new Float32Array(9),Qa=new Float32Array(4);function ai(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Za[r];if(s===void 0&&(s=new Float32Array(r),Za[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ki(i,e){let t=$a[e];t===void 0&&(t=new Int32Array(e),$a[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Du(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Uu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2fv(this.addr,e),nt(t,e)}}function Iu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tt(t,e))return;i.uniform3fv(this.addr,e),nt(t,e)}}function Nu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4fv(this.addr,e),nt(t,e)}}function Fu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Qa.set(n),i.uniformMatrix2fv(this.addr,!1,Qa),nt(t,n)}}function Ou(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ja.set(n),i.uniformMatrix3fv(this.addr,!1,Ja),nt(t,n)}}function Bu(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(tt(t,n))return;Ka.set(n),i.uniformMatrix4fv(this.addr,!1,Ka),nt(t,n)}}function zu(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2iv(this.addr,e),nt(t,e)}}function Hu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3iv(this.addr,e),nt(t,e)}}function Vu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4iv(this.addr,e),nt(t,e)}}function ku(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tt(t,e))return;i.uniform2uiv(this.addr,e),nt(t,e)}}function Xu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tt(t,e))return;i.uniform3uiv(this.addr,e),nt(t,e)}}function Yu(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tt(t,e))return;i.uniform4uiv(this.addr,e),nt(t,e)}}function ju(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||Wa,r)}function Zu(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Ya,r)}function $u(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ja,r)}function Ku(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Xa,r)}function Ju(i){switch(i){case 5126:return Du;case 35664:return Uu;case 35665:return Iu;case 35666:return Nu;case 35674:return Fu;case 35675:return Ou;case 35676:return Bu;case 5124:case 35670:return zu;case 35667:case 35671:return Gu;case 35668:case 35672:return Hu;case 35669:case 35673:return Vu;case 5125:return ku;case 36294:return Wu;case 36295:return Xu;case 36296:return Yu;case 35678:case 36198:case 36298:case 36306:case 35682:return ju;case 35679:case 36299:case 36307:return Zu;case 35680:case 36300:case 36308:case 36293:return $u;case 36289:case 36303:case 36311:case 36292:return Ku}}function Qu(i,e){i.uniform1fv(this.addr,e)}function ed(i,e){const t=ai(e,this.size,2);i.uniform2fv(this.addr,t)}function td(i,e){const t=ai(e,this.size,3);i.uniform3fv(this.addr,t)}function nd(i,e){const t=ai(e,this.size,4);i.uniform4fv(this.addr,t)}function id(i,e){const t=ai(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rd(i,e){const t=ai(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sd(i,e){const t=ai(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ad(i,e){i.uniform1iv(this.addr,e)}function od(i,e){i.uniform2iv(this.addr,e)}function ld(i,e){i.uniform3iv(this.addr,e)}function cd(i,e){i.uniform4iv(this.addr,e)}function hd(i,e){i.uniform1uiv(this.addr,e)}function ud(i,e){i.uniform2uiv(this.addr,e)}function dd(i,e){i.uniform3uiv(this.addr,e)}function fd(i,e){i.uniform4uiv(this.addr,e)}function pd(i,e,t){const n=this.cache,r=e.length,s=Ki(t,r);tt(n,s)||(i.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Wa,s[o])}function md(i,e,t){const n=this.cache,r=e.length,s=Ki(t,r);tt(n,s)||(i.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ya,s[o])}function _d(i,e,t){const n=this.cache,r=e.length,s=Ki(t,r);tt(n,s)||(i.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ja,s[o])}function gd(i,e,t){const n=this.cache,r=e.length,s=Ki(t,r);tt(n,s)||(i.uniform1iv(this.addr,s),nt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Xa,s[o])}function xd(i){switch(i){case 5126:return Qu;case 35664:return ed;case 35665:return td;case 35666:return nd;case 35674:return id;case 35675:return rd;case 35676:return sd;case 5124:case 35670:return ad;case 35667:case 35671:return od;case 35668:case 35672:return ld;case 35669:case 35673:return cd;case 5125:return hd;case 36294:return ud;case 36295:return dd;case 36296:return fd;case 35678:case 36198:case 36298:case 36306:case 35682:return pd;case 35679:case 36299:case 36307:return md;case 35680:case 36300:case 36308:case 36293:return _d;case 36289:case 36303:case 36311:case 36292:return gd}}class vd{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Ju(t.type)}}class Md{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=xd(t.type)}}class Sd{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Zr=/(\w+)(\])?(\[|\.)?/g;function eo(i,e){i.seq.push(e),i.map[e.id]=e}function Ed(i,e,t){const n=i.name,r=n.length;for(Zr.lastIndex=0;;){const s=Zr.exec(n),o=Zr.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){eo(t,l===void 0?new vd(a,i,e):new Md(a,i,e));break}else{let d=t.map[a];d===void 0&&(d=new Sd(a),eo(t,d)),t=d}}}class Ji{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Ed(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function to(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let yd=0;function Td(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function bd(i){switch(i){case Nt:return["Linear","( value )"];case Ue:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function no(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Td(i.getShaderSource(e),o)}else return r}function Ad(i,e){const t=bd(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function wd(i,e){let t;switch(e){case Sl:t="Linear";break;case El:t="Reinhard";break;case yl:t="OptimizedCineon";break;case Tl:t="ACESFilmic";break;case bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pd(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(gi).join(`
`)}function Rd(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Cd(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function gi(i){return i!==""}function io(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ro(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ld=/^[ \t]*#include +<([\w\d./]+)>/gm;function $r(i){return i.replace(Ld,qd)}function qd(i,e){const t=Ie[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return $r(t)}const Dd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function so(i){return i.replace(Dd,Ud)}function Ud(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ao(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Id(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Es?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qo?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ht&&(e="SHADOWMAP_TYPE_VSM"),e}function Nd(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case In:case Nn:e="ENVMAP_TYPE_CUBE";break;case Ai:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fd(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Nn:e="ENVMAP_MODE_REFRACTION";break}return e}function Od(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case hr:e="ENVMAP_BLENDING_MULTIPLY";break;case vl:e="ENVMAP_BLENDING_MIX";break;case Ml:e="ENVMAP_BLENDING_ADD";break}return e}function Bd(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zd(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Id(t),l=Nd(t),h=Fd(t),d=Od(t),f=Bd(t),p=t.isWebGL2?"":Pd(t),_=Rd(s),g=r.createProgram();let m,u,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[_].filter(gi).join(`
`),m.length>0&&(m+=`
`),u=[p,_].filter(gi).join(`
`),u.length>0&&(u+=`
`)):(m=[ao(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gi).join(`
`),u=[p,ao(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vt?"#define TONE_MAPPING":"",t.toneMapping!==Vt?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Vt?wd("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.encodings_pars_fragment,Ad("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(gi).join(`
`)),o=$r(o),o=io(o,t),o=ro(o,t),a=$r(a),a=io(a,t),a=ro(a,t),o=so(o),a=so(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===oa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===oa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=y+m+o,b=y+u+a,E=to(r,r.VERTEX_SHADER,x),w=to(r,r.FRAGMENT_SHADER,b);if(r.attachShader(g,E),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const v=r.getProgramInfoLog(g).trim(),A=r.getShaderInfoLog(E).trim(),H=r.getShaderInfoLog(w).trim();let ne=!0,U=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,E,w);else{const F=no(r,E,"vertex"),G=no(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+v+`
`+F+`
`+G)}else v!==""?console.warn("THREE.WebGLProgram: Program Info Log:",v):(A===""||H==="")&&(U=!1);U&&(this.diagnostics={runnable:ne,programLog:v,vertexShader:{log:A,prefix:m},fragmentShader:{log:H,prefix:u}})}r.deleteShader(E),r.deleteShader(w);let q;this.getUniforms=function(){return q===void 0&&(q=new Ji(r,g)),q};let I;return this.getAttributes=function(){return I===void 0&&(I=Cd(r,g)),I},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=yd++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=w,this}let Gd=0;class Hd{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Vd(e),t.set(e,n)),n}}class Vd{constructor(e){this.id=Gd++,this.code=e,this.usedTimes=0}}function kd(i,e,t,n,r,s,o){const a=new xa,c=new Hd,l=[],h=r.isWebGL2,d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return v===1?"uv1":v===2?"uv2":v===3?"uv3":"uv"}function m(v,A,H,ne,U){const F=ne.fog,G=U.geometry,ee=v.isMeshStandardMaterial?ne.environment:null,Z=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),X=Z&&Z.mapping===Ai?Z.image.height:null,K=_[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const te=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,me=te!==void 0?te.length:0;let oe=0;G.morphAttributes.position!==void 0&&(oe=1),G.morphAttributes.normal!==void 0&&(oe=2),G.morphAttributes.color!==void 0&&(oe=3);let z,j,le,pe;if(K){const Xe=Bt[K];z=Xe.vertexShader,j=Xe.fragmentShader}else z=v.vertexShader,j=v.fragmentShader,c.update(v),le=c.getVertexShaderID(v),pe=c.getFragmentShaderID(v);const C=i.getRenderTarget(),Pe=U.isInstancedMesh===!0,Re=!!v.map,ae=!!v.matcap,Me=!!Z,Q=!!v.aoMap,W=!!v.lightMap,J=!!v.bumpMap,ge=!!v.normalMap,ce=!!v.displacementMap,Ae=!!v.emissiveMap,we=!!v.metalnessMap,Te=!!v.roughnessMap,De=v.clearcoat>0,He=v.iridescence>0,T=v.sheen>0,M=v.transmission>0,B=De&&!!v.clearcoatMap,ie=De&&!!v.clearcoatNormalMap,re=De&&!!v.clearcoatRoughnessMap,de=He&&!!v.iridescenceMap,P=He&&!!v.iridescenceThicknessMap,$=T&&!!v.sheenColorMap,O=T&&!!v.sheenRoughnessMap,fe=!!v.specularMap,ve=!!v.specularColorMap,Ee=!!v.specularIntensityMap,_e=M&&!!v.transmissionMap,Se=M&&!!v.thicknessMap,Le=!!v.gradientMap,Fe=!!v.alphaMap,Ke=v.alphaTest>0,L=!!v.extensions,V=!!G.attributes.uv1,se=!!G.attributes.uv2,xe=!!G.attributes.uv3;return{isWebGL2:h,shaderID:K,shaderName:v.type,vertexShader:z,fragmentShader:j,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:Pe,instancingColor:Pe&&U.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:C===null?i.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Nt,map:Re,matcap:ae,envMap:Me,envMapMode:Me&&Z.mapping,envMapCubeUVHeight:X,aoMap:Q,lightMap:W,bumpMap:J,normalMap:ge,displacementMap:f&&ce,emissiveMap:Ae,normalMapObjectSpace:ge&&v.normalMapType===kl,normalMapTangentSpace:ge&&v.normalMapType===ia,metalnessMap:we,roughnessMap:Te,clearcoat:De,clearcoatMap:B,clearcoatNormalMap:ie,clearcoatRoughnessMap:re,iridescence:He,iridescenceMap:de,iridescenceThicknessMap:P,sheen:T,sheenColorMap:$,sheenRoughnessMap:O,specularMap:fe,specularColorMap:ve,specularIntensityMap:Ee,transmission:M,transmissionMap:_e,thicknessMap:Se,gradientMap:Le,opaque:v.transparent===!1&&v.blending===Dn,alphaMap:Fe,alphaTest:Ke,combine:v.combine,mapUv:Re&&g(v.map.channel),aoMapUv:Q&&g(v.aoMap.channel),lightMapUv:W&&g(v.lightMap.channel),bumpMapUv:J&&g(v.bumpMap.channel),normalMapUv:ge&&g(v.normalMap.channel),displacementMapUv:ce&&g(v.displacementMap.channel),emissiveMapUv:Ae&&g(v.emissiveMap.channel),metalnessMapUv:we&&g(v.metalnessMap.channel),roughnessMapUv:Te&&g(v.roughnessMap.channel),clearcoatMapUv:B&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ie&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:P&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:$&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:O&&g(v.sheenRoughnessMap.channel),specularMapUv:fe&&g(v.specularMap.channel),specularColorMapUv:ve&&g(v.specularColorMap.channel),specularIntensityMapUv:Ee&&g(v.specularIntensityMap.channel),transmissionMapUv:_e&&g(v.transmissionMap.channel),thicknessMapUv:Se&&g(v.thicknessMap.channel),alphaMapUv:Fe&&g(v.alphaMap.channel),vertexTangents:ge&&!!G.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:V,vertexUv2s:se,vertexUv3s:xe,pointsUvs:U.isPoints===!0&&!!G.attributes.uv&&(Re||Fe),fog:!!F,useFog:v.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:oe,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Vt,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===mt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:L&&v.extensions.derivatives===!0,extensionFragDepth:L&&v.extensions.fragDepth===!0,extensionDrawBuffers:L&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:L&&v.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function u(v){const A=[];if(v.shaderID?A.push(v.shaderID):(A.push(v.customVertexShaderID),A.push(v.customFragmentShaderID)),v.defines!==void 0)for(const H in v.defines)A.push(H),A.push(v.defines[H]);return v.isRawShaderMaterial===!1&&(y(A,v),x(A,v),A.push(i.outputColorSpace)),A.push(v.customProgramCacheKey),A.join()}function y(v,A){v.push(A.precision),v.push(A.outputColorSpace),v.push(A.envMapMode),v.push(A.envMapCubeUVHeight),v.push(A.mapUv),v.push(A.alphaMapUv),v.push(A.lightMapUv),v.push(A.aoMapUv),v.push(A.bumpMapUv),v.push(A.normalMapUv),v.push(A.displacementMapUv),v.push(A.emissiveMapUv),v.push(A.metalnessMapUv),v.push(A.roughnessMapUv),v.push(A.clearcoatMapUv),v.push(A.clearcoatNormalMapUv),v.push(A.clearcoatRoughnessMapUv),v.push(A.iridescenceMapUv),v.push(A.iridescenceThicknessMapUv),v.push(A.sheenColorMapUv),v.push(A.sheenRoughnessMapUv),v.push(A.specularMapUv),v.push(A.specularColorMapUv),v.push(A.specularIntensityMapUv),v.push(A.transmissionMapUv),v.push(A.thicknessMapUv),v.push(A.combine),v.push(A.fogExp2),v.push(A.sizeAttenuation),v.push(A.morphTargetsCount),v.push(A.morphAttributeCount),v.push(A.numDirLights),v.push(A.numPointLights),v.push(A.numSpotLights),v.push(A.numSpotLightMaps),v.push(A.numHemiLights),v.push(A.numRectAreaLights),v.push(A.numDirLightShadows),v.push(A.numPointLightShadows),v.push(A.numSpotLightShadows),v.push(A.numSpotLightShadowsWithMaps),v.push(A.shadowMapType),v.push(A.toneMapping),v.push(A.numClippingPlanes),v.push(A.numClipIntersection),v.push(A.depthPacking)}function x(v,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),v.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),v.push(a.mask)}function b(v){const A=_[v.type];let H;if(A){const ne=Bt[A];H=fc.clone(ne.uniforms)}else H=v.uniforms;return H}function E(v,A){let H;for(let ne=0,U=l.length;ne<U;ne++){const F=l[ne];if(F.cacheKey===A){H=F,++H.usedTimes;break}}return H===void 0&&(H=new zd(i,A,v,s),l.push(H)),H}function w(v){if(--v.usedTimes===0){const A=l.indexOf(v);l[A]=l[l.length-1],l.pop(),v.destroy()}}function q(v){c.remove(v)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:b,acquireProgram:E,releaseProgram:w,releaseShaderCache:q,programs:l,dispose:I}}function Wd(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function lo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d,f,p,_,g,m){let u=i[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},i[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=_,u.renderOrder=d.renderOrder,u.z=g,u.group=m),e++,u}function a(d,f,p,_,g,m){const u=o(d,f,p,_,g,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(d,f,p,_,g,m){const u=o(d,f,p,_,g,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(d,f){t.length>1&&t.sort(d||Xd),n.length>1&&n.sort(f||oo),r.length>1&&r.sort(f||oo)}function h(){for(let d=e,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function Yd(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new lo,i.set(n,[o])):r>=s.length?(o=new lo,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function jd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new R,color:new ke};break;case"SpotLight":t={position:new R,direction:new R,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new R,halfWidth:new R,halfHeight:new R};break}return i[e.id]=t,t}}}function Zd(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let $d=0;function Kd(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Jd(i,e){const t=new jd,n=Zd(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)r.probe.push(new R);const s=new R,o=new $e,a=new $e;function c(h,d){let f=0,p=0,_=0;for(let H=0;H<9;H++)r.probe[H].set(0,0,0);let g=0,m=0,u=0,y=0,x=0,b=0,E=0,w=0,q=0,I=0;h.sort(Kd);const v=d===!0?Math.PI:1;for(let H=0,ne=h.length;H<ne;H++){const U=h[H],F=U.color,G=U.intensity,ee=U.distance,Z=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=F.r*G*v,p+=F.g*G*v,_+=F.b*G*v;else if(U.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(U.sh.coefficients[X],G);else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*v),U.castShadow){const K=U.shadow,te=n.get(U);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.directionalShadow[g]=te,r.directionalShadowMap[g]=Z,r.directionalShadowMatrix[g]=U.shadow.matrix,b++}r.directional[g]=X,g++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(F).multiplyScalar(G*v),X.distance=ee,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,r.spot[u]=X;const K=U.shadow;if(U.map&&(r.spotLightMap[q]=U.map,q++,K.updateMatrices(U),U.castShadow&&I++),r.spotLightMatrix[u]=K.matrix,U.castShadow){const te=n.get(U);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,r.spotShadow[u]=te,r.spotShadowMap[u]=Z,w++}u++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(F).multiplyScalar(G),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=X,y++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*v),X.distance=U.distance,X.decay=U.decay,U.castShadow){const K=U.shadow,te=n.get(U);te.shadowBias=K.bias,te.shadowNormalBias=K.normalBias,te.shadowRadius=K.radius,te.shadowMapSize=K.mapSize,te.shadowCameraNear=K.camera.near,te.shadowCameraFar=K.camera.far,r.pointShadow[m]=te,r.pointShadowMap[m]=Z,r.pointShadowMatrix[m]=U.shadow.matrix,E++}r.point[m]=X,m++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(G*v),X.groundColor.copy(U.groundColor).multiplyScalar(G*v),r.hemi[x]=X,x++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==g||A.pointLength!==m||A.spotLength!==u||A.rectAreaLength!==y||A.hemiLength!==x||A.numDirectionalShadows!==b||A.numPointShadows!==E||A.numSpotShadows!==w||A.numSpotMaps!==q)&&(r.directional.length=g,r.spot.length=u,r.rectArea.length=y,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+q-I,r.spotLightMap.length=q,r.numSpotLightShadowsWithMaps=I,A.directionalLength=g,A.pointLength=m,A.spotLength=u,A.rectAreaLength=y,A.hemiLength=x,A.numDirectionalShadows=b,A.numPointShadows=E,A.numSpotShadows=w,A.numSpotMaps=q,r.version=$d++)}function l(h,d){let f=0,p=0,_=0,g=0,m=0;const u=d.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){const b=h[y];if(b.isDirectionalLight){const E=r.directional[f];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),f++}else if(b.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),_++}else if(b.isRectAreaLight){const E=r.rectArea[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(b.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(u),p++}else if(b.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:c,setupView:l,state:r}}function co(i,e){const t=new Jd(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(d){n.push(d)}function a(d){r.push(d)}function c(d){t.setup(n,d)}function l(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Qd(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new co(i,e),t.set(s,[c])):o>=a.length?(c=new co(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class ef extends $n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tf extends $n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rf=`uniform sampler2D shadow_pass;
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
}`;function sf(i,e,t){let n=new kr;const r=new he,s=new he,o=new je,a=new ef({depthPacking:Vl}),c=new tf,l={},h=t.maxTextureSize,d={[Qt]:mt,[mt]:Qt,[It]:It},f=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:nf,fragmentShader:rf}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const _=new Mt;_.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Tt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Es;let u=this.type;this.render=function(E,w,q){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const I=i.getRenderTarget(),v=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),H=i.state;H.setBlending(en),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ne=u!==Ht&&this.type===Ht,U=u===Ht&&this.type!==Ht;for(let F=0,G=E.length;F<G;F++){const ee=E[F],Z=ee.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const X=Z.getFrameExtents();if(r.multiply(X),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/X.x),r.x=s.x*X.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/X.y),r.y=s.y*X.y,Z.mapSize.y=s.y)),Z.map===null||ne===!0||U===!0){const te=this.type!==Ht?{minFilter:ut,magFilter:ut}:{};Z.map!==null&&Z.map.dispose(),Z.map=new mn(r.x,r.y,te),Z.map.texture.name=ee.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const K=Z.getViewportCount();for(let te=0;te<K;te++){const me=Z.getViewport(te);o.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),H.viewport(o),Z.updateMatrices(ee,te),n=Z.getFrustum(),b(w,q,Z.camera,ee,this.type)}Z.isPointLightShadow!==!0&&this.type===Ht&&y(Z,q),Z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(I,v,A)};function y(E,w){const q=e.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mn(r.x,r.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(w,null,q,f,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(w,null,q,p,g,null)}function x(E,w,q,I){let v=null;const A=q.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)v=A;else if(v=q.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const H=v.uuid,ne=w.uuid;let U=l[H];U===void 0&&(U={},l[H]=U);let F=U[ne];F===void 0&&(F=v.clone(),U[ne]=F),v=F}if(v.visible=w.visible,v.wireframe=w.wireframe,I===Ht?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:d[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,q.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const H=i.properties.get(v);H.light=q}return v}function b(E,w,q,I,v){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===Ht)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld);const ne=e.update(E),U=E.material;if(Array.isArray(U)){const F=ne.groups;for(let G=0,ee=F.length;G<ee;G++){const Z=F[G],X=U[Z.materialIndex];if(X&&X.visible){const K=x(E,X,I,v);i.renderBufferDirect(q,null,ne,K,E,Z)}}}else if(U.visible){const F=x(E,U,I,v);i.renderBufferDirect(q,null,ne,F,E,null)}}const H=E.children;for(let ne=0,U=H.length;ne<U;ne++)b(H[ne],w,q,I,v)}}function af(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const V=new je;let se=null;const xe=new je(0,0,0,0);return{setMask:function(ye){se!==ye&&!L&&(i.colorMask(ye,ye,ye,ye),se=ye)},setLocked:function(ye){L=ye},setClear:function(ye,Xe,Ye,ht,an){an===!0&&(ye*=ht,Xe*=ht,Ye*=ht),V.set(ye,Xe,Ye,ht),xe.equals(V)===!1&&(i.clearColor(ye,Xe,Ye,ht),xe.copy(V))},reset:function(){L=!1,se=null,xe.set(-1,0,0,0)}}}function s(){let L=!1,V=null,se=null,xe=null;return{setTest:function(ye){ye?C(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ye){V!==ye&&!L&&(i.depthMask(ye),V=ye)},setFunc:function(ye){if(se!==ye){switch(ye){case dl:i.depthFunc(i.NEVER);break;case fl:i.depthFunc(i.ALWAYS);break;case pl:i.depthFunc(i.LESS);break;case cr:i.depthFunc(i.LEQUAL);break;case ml:i.depthFunc(i.EQUAL);break;case _l:i.depthFunc(i.GEQUAL);break;case gl:i.depthFunc(i.GREATER);break;case xl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=ye}},setLocked:function(ye){L=ye},setClear:function(ye){xe!==ye&&(i.clearDepth(ye),xe=ye)},reset:function(){L=!1,V=null,se=null,xe=null}}}function o(){let L=!1,V=null,se=null,xe=null,ye=null,Xe=null,Ye=null,ht=null,an=null;return{setTest:function(Je){L||(Je?C(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function(Je){V!==Je&&!L&&(i.stencilMask(Je),V=Je)},setFunc:function(Je,At,Gt){(se!==Je||xe!==At||ye!==Gt)&&(i.stencilFunc(Je,At,Gt),se=Je,xe=At,ye=Gt)},setOp:function(Je,At,Gt){(Xe!==Je||Ye!==At||ht!==Gt)&&(i.stencilOp(Je,At,Gt),Xe=Je,Ye=At,ht=Gt)},setLocked:function(Je){L=Je},setClear:function(Je){an!==Je&&(i.clearStencil(Je),an=Je)},reset:function(){L=!1,V=null,se=null,xe=null,ye=null,Xe=null,Ye=null,ht=null,an=null}}}const a=new r,c=new s,l=new o,h=new WeakMap,d=new WeakMap;let f={},p={},_=new WeakMap,g=[],m=null,u=!1,y=null,x=null,b=null,E=null,w=null,q=null,I=null,v=!1,A=null,H=null,ne=null,U=null,F=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ee=!1,Z=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(X)[1]),ee=Z>=1):X.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ee=Z>=2);let K=null,te={};const me=i.getParameter(i.SCISSOR_BOX),oe=i.getParameter(i.VIEWPORT),z=new je().fromArray(me),j=new je().fromArray(oe);function le(L,V,se,xe){const ye=new Uint8Array(4),Xe=i.createTexture();i.bindTexture(L,Xe),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ye=0;Ye<se;Ye++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(V,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(V+Ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return Xe}const pe={};pe[i.TEXTURE_2D]=le(i.TEXTURE_2D,i.TEXTURE_2D,1),pe[i.TEXTURE_CUBE_MAP]=le(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(pe[i.TEXTURE_2D_ARRAY]=le(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),pe[i.TEXTURE_3D]=le(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),C(i.DEPTH_TEST),c.setFunc(cr),ce(!1),Ae(Ss),C(i.CULL_FACE),J(en);function C(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Pe(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Re(L,V){return p[L]!==V?(i.bindFramebuffer(L,V),p[L]=V,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=V),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=V)),!0):!1}function ae(L,V){let se=g,xe=!1;if(L)if(se=_.get(V),se===void 0&&(se=[],_.set(V,se)),L.isWebGLMultipleRenderTargets){const ye=L.texture;if(se.length!==ye.length||se[0]!==i.COLOR_ATTACHMENT0){for(let Xe=0,Ye=ye.length;Xe<Ye;Xe++)se[Xe]=i.COLOR_ATTACHMENT0+Xe;se.length=ye.length,xe=!0}}else se[0]!==i.COLOR_ATTACHMENT0&&(se[0]=i.COLOR_ATTACHMENT0,xe=!0);else se[0]!==i.BACK&&(se[0]=i.BACK,xe=!0);xe&&(t.isWebGL2?i.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Me(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const Q={[Un]:i.FUNC_ADD,[tl]:i.FUNC_SUBTRACT,[nl]:i.FUNC_REVERSE_SUBTRACT};if(n)Q[As]=i.MIN,Q[ws]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Q[As]=L.MIN_EXT,Q[ws]=L.MAX_EXT)}const W={[il]:i.ZERO,[rl]:i.ONE,[sl]:i.SRC_COLOR,[Ps]:i.SRC_ALPHA,[ul]:i.SRC_ALPHA_SATURATE,[cl]:i.DST_COLOR,[ol]:i.DST_ALPHA,[al]:i.ONE_MINUS_SRC_COLOR,[Rs]:i.ONE_MINUS_SRC_ALPHA,[hl]:i.ONE_MINUS_DST_COLOR,[ll]:i.ONE_MINUS_DST_ALPHA};function J(L,V,se,xe,ye,Xe,Ye,ht){if(L===en){u===!0&&(Pe(i.BLEND),u=!1);return}if(u===!1&&(C(i.BLEND),u=!0),L!==el){if(L!==y||ht!==v){if((x!==Un||w!==Un)&&(i.blendEquation(i.FUNC_ADD),x=Un,w=Un),ht)switch(L){case Dn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.ONE,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Dn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ys:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ts:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bs:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,E=null,q=null,I=null,y=L,v=ht}return}ye=ye||V,Xe=Xe||se,Ye=Ye||xe,(V!==x||ye!==w)&&(i.blendEquationSeparate(Q[V],Q[ye]),x=V,w=ye),(se!==b||xe!==E||Xe!==q||Ye!==I)&&(i.blendFuncSeparate(W[se],W[xe],W[Xe],W[Ye]),b=se,E=xe,q=Xe,I=Ye),y=L,v=!1}function ge(L,V){L.side===It?Pe(i.CULL_FACE):C(i.CULL_FACE);let se=L.side===mt;V&&(se=!se),ce(se),L.blending===Dn&&L.transparent===!1?J(en):J(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);const xe=L.stencilWrite;l.setTest(xe),xe&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?C(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ce(L){A!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),A=L)}function Ae(L){L!==Ko?(C(i.CULL_FACE),L!==H&&(L===Ss?i.cullFace(i.BACK):L===Jo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),H=L}function we(L){L!==ne&&(ee&&i.lineWidth(L),ne=L)}function Te(L,V,se){L?(C(i.POLYGON_OFFSET_FILL),(U!==V||F!==se)&&(i.polygonOffset(V,se),U=V,F=se)):Pe(i.POLYGON_OFFSET_FILL)}function De(L){L?C(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function He(L){L===void 0&&(L=i.TEXTURE0+G-1),K!==L&&(i.activeTexture(L),K=L)}function T(L,V,se){se===void 0&&(K===null?se=i.TEXTURE0+G-1:se=K);let xe=te[se];xe===void 0&&(xe={type:void 0,texture:void 0},te[se]=xe),(xe.type!==L||xe.texture!==V)&&(K!==se&&(i.activeTexture(se),K=se),i.bindTexture(L,V||pe[L]),xe.type=L,xe.texture=V)}function M(){const L=te[K];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function O(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _e(L){z.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),z.copy(L))}function Se(L){j.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),j.copy(L))}function Le(L,V){let se=d.get(V);se===void 0&&(se=new WeakMap,d.set(V,se));let xe=se.get(L);xe===void 0&&(xe=i.getUniformBlockIndex(V,L.name),se.set(L,xe))}function Fe(L,V){const xe=d.get(V).get(L);h.get(V)!==xe&&(i.uniformBlockBinding(V,xe,L.__bindingPointIndex),h.set(V,xe))}function Ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},K=null,te={},p={},_=new WeakMap,g=[],m=null,u=!1,y=null,x=null,b=null,E=null,w=null,q=null,I=null,v=!1,A=null,H=null,ne=null,U=null,F=null,z.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:C,disable:Pe,bindFramebuffer:Re,drawBuffers:ae,useProgram:Me,setBlending:J,setMaterial:ge,setFlipSided:ce,setCullFace:Ae,setLineWidth:we,setPolygonOffset:Te,setScissorTest:De,activeTexture:He,bindTexture:T,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:ie,texImage2D:ve,texImage3D:Ee,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:O,texStorage3D:fe,texSubImage2D:re,texSubImage3D:de,compressedTexSubImage2D:P,compressedTexSubImage3D:$,scissor:_e,viewport:Se,reset:Ke}}function of(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,h=r.maxTextureSize,d=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,M){return u?new OffscreenCanvas(T,M):Pi("canvas")}function x(T,M,B,ie){let re=1;if((T.width>ie||T.height>ie)&&(re=ie/Math.max(T.width,T.height)),re<1||M===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const de=M?Yl:Math.floor,P=de(re*T.width),$=de(re*T.height);g===void 0&&(g=y(P,$));const O=B?y(P,$):g;return O.width=P,O.height=$,O.getContext("2d").drawImage(T,0,0,P,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+P+"x"+$+")."),O}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function b(T){return la(T.width)&&la(T.height)}function E(T){return a?!1:T.wrapS!==wt||T.wrapT!==wt||T.minFilter!==ut&&T.minFilter!==Et}function w(T,M){return T.generateMipmaps&&M&&T.minFilter!==ut&&T.minFilter!==Et}function q(T){i.generateMipmap(T)}function I(T,M,B,ie,re=!1){if(a===!1)return M;if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let de=M;return M===i.RED&&(B===i.FLOAT&&(de=i.R32F),B===i.HALF_FLOAT&&(de=i.R16F),B===i.UNSIGNED_BYTE&&(de=i.R8)),M===i.RG&&(B===i.FLOAT&&(de=i.RG32F),B===i.HALF_FLOAT&&(de=i.RG16F),B===i.UNSIGNED_BYTE&&(de=i.RG8)),M===i.RGBA&&(B===i.FLOAT&&(de=i.RGBA32F),B===i.HALF_FLOAT&&(de=i.RGBA16F),B===i.UNSIGNED_BYTE&&(de=ie===Ue&&re===!1?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(de=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(de=i.RGB5_A1)),(de===i.R16F||de===i.R32F||de===i.RG16F||de===i.RG32F||de===i.RGBA16F||de===i.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function v(T,M,B){return w(T,B)===!0||T.isFramebufferTexture&&T.minFilter!==ut&&T.minFilter!==Et?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function A(T){return T===ut||T===Ls||T===mr?i.NEAREST:i.LINEAR}function H(T){const M=T.target;M.removeEventListener("dispose",H),U(M),M.isVideoTexture&&_.delete(M)}function ne(T){const M=T.target;M.removeEventListener("dispose",ne),G(M)}function U(T){const M=n.get(T);if(M.__webglInit===void 0)return;const B=T.source,ie=m.get(B);if(ie){const re=ie[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&F(T),Object.keys(ie).length===0&&m.delete(B)}n.remove(T)}function F(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const B=T.source,ie=m.get(B);delete ie[M.__cacheKey],o.memory.textures--}function G(T){const M=T.texture,B=n.get(T),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let re=0;re<6;re++)i.deleteFramebuffer(B.__webglFramebuffer[re]),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[re]);else{if(i.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let re=0;re<B.__webglColorRenderbuffer.length;re++)B.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[re]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let re=0,de=M.length;re<de;re++){const P=n.get(M[re]);P.__webglTexture&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),n.remove(M[re])}n.remove(M),n.remove(T)}let ee=0;function Z(){ee=0}function X(){const T=ee;return T>=c&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+c),ee+=1,T}function K(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function te(T,M){const B=n.get(T);if(T.isVideoTexture&&De(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const ie=T.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(B,T,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function me(T,M){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Pe(B,T,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function oe(T,M){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Pe(B,T,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function z(T,M){const B=n.get(T);if(T.version>0&&B.__version!==T.version){Re(B,T,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const j={[fr]:i.REPEAT,[wt]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},le={[ut]:i.NEAREST,[Ls]:i.NEAREST_MIPMAP_NEAREST,[mr]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[Al]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR};function pe(T,M,B){if(B?(i.texParameteri(T,i.TEXTURE_WRAP_S,j[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,j[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,j[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,le[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,le[M.minFilter])):(i.texParameteri(T,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(T,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==wt||M.wrapT!==wt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(T,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(T,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==ut&&M.minFilter!==Et&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===ut||M.minFilter!==mr&&M.minFilter!==ci||M.type===hn&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===hi&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(T,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function C(T,M){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",H));const ie=M.source;let re=m.get(ie);re===void 0&&(re={},m.set(ie,re));const de=K(M);if(de!==T.__cacheKey){re[de]===void 0&&(re[de]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),re[de].usedTimes++;const P=re[T.__cacheKey];P!==void 0&&(re[T.__cacheKey].usedTimes--,P.usedTimes===0&&F(M)),T.__cacheKey=de,T.__webglTexture=re[de].texture}return B}function Pe(T,M,B){let ie=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ie=i.TEXTURE_3D);const re=C(T,M),de=M.source;t.bindTexture(ie,T.__webglTexture,i.TEXTURE0+B);const P=n.get(de);if(de.version!==P.__version||re===!0){t.activeTexture(i.TEXTURE0+B),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const $=E(M)&&b(M.image)===!1;let O=x(M.image,$,!1,h);O=He(M,O);const fe=b(O)||a,ve=s.convert(M.format,M.colorSpace);let Ee=s.convert(M.type),_e=I(M.internalFormat,ve,Ee,M.colorSpace);pe(ie,M,fe);let Se;const Le=M.mipmaps,Fe=a&&M.isVideoTexture!==!0,Ke=P.__version===void 0||re===!0,L=v(M,O,fe);if(M.isDepthTexture)_e=i.DEPTH_COMPONENT,a?M.type===hn?_e=i.DEPTH_COMPONENT32F:M.type===cn?_e=i.DEPTH_COMPONENT24:M.type===Fn?_e=i.DEPTH24_STENCIL8:_e=i.DEPTH_COMPONENT16:M.type===hn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===un&&_e===i.DEPTH_COMPONENT&&M.type!==qs&&M.type!==cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=cn,Ee=s.convert(M.type)),M.format===On&&_e===i.DEPTH_COMPONENT&&(_e=i.DEPTH_STENCIL,M.type!==Fn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Fn,Ee=s.convert(M.type))),Ke&&(Fe?t.texStorage2D(i.TEXTURE_2D,1,_e,O.width,O.height):t.texImage2D(i.TEXTURE_2D,0,_e,O.width,O.height,0,ve,Ee,null));else if(M.isDataTexture)if(Le.length>0&&fe){Fe&&Ke&&t.texStorage2D(i.TEXTURE_2D,L,_e,Le[0].width,Le[0].height);for(let V=0,se=Le.length;V<se;V++)Se=Le[V],Fe?t.texSubImage2D(i.TEXTURE_2D,V,0,0,Se.width,Se.height,ve,Ee,Se.data):t.texImage2D(i.TEXTURE_2D,V,_e,Se.width,Se.height,0,ve,Ee,Se.data);M.generateMipmaps=!1}else Fe?(Ke&&t.texStorage2D(i.TEXTURE_2D,L,_e,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,O.width,O.height,ve,Ee,O.data)):t.texImage2D(i.TEXTURE_2D,0,_e,O.width,O.height,0,ve,Ee,O.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,L,_e,Le[0].width,Le[0].height,O.depth);for(let V=0,se=Le.length;V<se;V++)Se=Le[V],M.format!==Pt?ve!==null?Fe?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Se.width,Se.height,O.depth,ve,Se.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,_e,Se.width,Se.height,O.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,Se.width,Se.height,O.depth,ve,Ee,Se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,_e,Se.width,Se.height,O.depth,0,ve,Ee,Se.data)}else{Fe&&Ke&&t.texStorage2D(i.TEXTURE_2D,L,_e,Le[0].width,Le[0].height);for(let V=0,se=Le.length;V<se;V++)Se=Le[V],M.format!==Pt?ve!==null?Fe?t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,Se.width,Se.height,ve,Se.data):t.compressedTexImage2D(i.TEXTURE_2D,V,_e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?t.texSubImage2D(i.TEXTURE_2D,V,0,0,Se.width,Se.height,ve,Ee,Se.data):t.texImage2D(i.TEXTURE_2D,V,_e,Se.width,Se.height,0,ve,Ee,Se.data)}else if(M.isDataArrayTexture)Fe?(Ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,L,_e,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,ve,Ee,O.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,_e,O.width,O.height,O.depth,0,ve,Ee,O.data);else if(M.isData3DTexture)Fe?(Ke&&t.texStorage3D(i.TEXTURE_3D,L,_e,O.width,O.height,O.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,ve,Ee,O.data)):t.texImage3D(i.TEXTURE_3D,0,_e,O.width,O.height,O.depth,0,ve,Ee,O.data);else if(M.isFramebufferTexture){if(Ke)if(Fe)t.texStorage2D(i.TEXTURE_2D,L,_e,O.width,O.height);else{let V=O.width,se=O.height;for(let xe=0;xe<L;xe++)t.texImage2D(i.TEXTURE_2D,xe,_e,V,se,0,ve,Ee,null),V>>=1,se>>=1}}else if(Le.length>0&&fe){Fe&&Ke&&t.texStorage2D(i.TEXTURE_2D,L,_e,Le[0].width,Le[0].height);for(let V=0,se=Le.length;V<se;V++)Se=Le[V],Fe?t.texSubImage2D(i.TEXTURE_2D,V,0,0,ve,Ee,Se):t.texImage2D(i.TEXTURE_2D,V,_e,ve,Ee,Se);M.generateMipmaps=!1}else Fe?(Ke&&t.texStorage2D(i.TEXTURE_2D,L,_e,O.width,O.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,Ee,O)):t.texImage2D(i.TEXTURE_2D,0,_e,ve,Ee,O);w(M,fe)&&q(ie),P.__version=de.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function Re(T,M,B){if(M.image.length!==6)return;const ie=C(T,M),re=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const de=n.get(re);if(re.version!==de.__version||ie===!0){t.activeTexture(i.TEXTURE0+B),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const P=M.isCompressedTexture||M.image[0].isCompressedTexture,$=M.image[0]&&M.image[0].isDataTexture,O=[];for(let V=0;V<6;V++)!P&&!$?O[V]=x(M.image[V],!1,!0,l):O[V]=$?M.image[V].image:M.image[V],O[V]=He(M,O[V]);const fe=O[0],ve=b(fe)||a,Ee=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Se=I(M.internalFormat,Ee,_e,M.colorSpace),Le=a&&M.isVideoTexture!==!0,Fe=de.__version===void 0||ie===!0;let Ke=v(M,fe,ve);pe(i.TEXTURE_CUBE_MAP,M,ve);let L;if(P){Le&&Fe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Se,fe.width,fe.height);for(let V=0;V<6;V++){L=O[V].mipmaps;for(let se=0;se<L.length;se++){const xe=L[se];M.format!==Pt?Ee!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,0,0,xe.width,xe.height,Ee,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,Se,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,0,0,xe.width,xe.height,Ee,_e,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se,Se,xe.width,xe.height,0,Ee,_e,xe.data)}}}else{L=M.mipmaps,Le&&Fe&&(L.length>0&&Ke++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Ke,Se,O[0].width,O[0].height));for(let V=0;V<6;V++)if($){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,O[V].width,O[V].height,Ee,_e,O[V].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Se,O[V].width,O[V].height,0,Ee,_e,O[V].data);for(let se=0;se<L.length;se++){const ye=L[se].image[V].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,0,0,ye.width,ye.height,Ee,_e,ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,Se,ye.width,ye.height,0,Ee,_e,ye.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Ee,_e,O[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,Se,Ee,_e,O[V]);for(let se=0;se<L.length;se++){const xe=L[se];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,0,0,Ee,_e,xe.image[V]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+V,se+1,Se,Ee,_e,xe.image[V])}}}w(M,ve)&&q(i.TEXTURE_CUBE_MAP),de.__version=re.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function ae(T,M,B,ie,re){const de=s.convert(B.format,B.colorSpace),P=s.convert(B.type),$=I(B.internalFormat,de,P,B.colorSpace);n.get(M).__hasExternalTextures||(re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,0,$,M.width,M.height,M.depth,0,de,P,null):t.texImage2D(re,0,$,M.width,M.height,0,de,P,null)),t.bindFramebuffer(i.FRAMEBUFFER,T),Te(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ie,re,n.get(B).__webglTexture,0,we(M)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ie,re,n.get(B).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(T,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer&&!M.stencilBuffer){let ie=i.DEPTH_COMPONENT16;if(B||Te(M)){const re=M.depthTexture;re&&re.isDepthTexture&&(re.type===hn?ie=i.DEPTH_COMPONENT32F:re.type===cn&&(ie=i.DEPTH_COMPONENT24));const de=we(M);Te(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,ie,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,de,ie,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ie,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,T)}else if(M.depthBuffer&&M.stencilBuffer){const ie=we(M);B&&Te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):Te(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,T)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let re=0;re<ie.length;re++){const de=ie[re],P=s.convert(de.format,de.colorSpace),$=s.convert(de.type),O=I(de.internalFormat,P,$,de.colorSpace),fe=we(M);B&&Te(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,O,M.width,M.height):Te(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe,O,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,O,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Q(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),te(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,re=we(M);if(M.depthTexture.format===un)Te(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(M.depthTexture.format===On)Te(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function W(T){const M=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Q(M.__webglFramebuffer,T)}else if(B){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),Me(M.__webglDepthbuffer[ie],T,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Me(M.__webglDepthbuffer,T,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function J(T,M,B){const ie=n.get(T);M!==void 0&&ae(ie.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),B!==void 0&&W(T)}function ge(T){const M=T.texture,B=n.get(T),ie=n.get(M);T.addEventListener("dispose",ne),T.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const re=T.isWebGLCubeRenderTarget===!0,de=T.isWebGLMultipleRenderTargets===!0,P=b(T)||a;if(re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)B.__webglFramebuffer[$]=i.createFramebuffer()}else{if(B.__webglFramebuffer=i.createFramebuffer(),de)if(r.drawBuffers){const $=T.texture;for(let O=0,fe=$.length;O<fe;O++){const ve=n.get($[O]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&T.samples>0&&Te(T)===!1){const $=de?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let O=0;O<$.length;O++){const fe=$[O];B.__webglColorRenderbuffer[O]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[O]);const ve=s.convert(fe.format,fe.colorSpace),Ee=s.convert(fe.type),_e=I(fe.internalFormat,ve,Ee,fe.colorSpace,T.isXRRenderTarget===!0),Se=we(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,_e,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,B.__webglColorRenderbuffer[O])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,ie.__webglTexture),pe(i.TEXTURE_CUBE_MAP,M,P);for(let $=0;$<6;$++)ae(B.__webglFramebuffer[$],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+$);w(M,P)&&q(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){const $=T.texture;for(let O=0,fe=$.length;O<fe;O++){const ve=$[O],Ee=n.get(ve);t.bindTexture(i.TEXTURE_2D,Ee.__webglTexture),pe(i.TEXTURE_2D,ve,P),ae(B.__webglFramebuffer,T,ve,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D),w(ve,P)&&q(i.TEXTURE_2D)}t.unbindTexture()}else{let $=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(a?$=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,ie.__webglTexture),pe($,M,P),ae(B.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,$),w(M,P)&&q($),t.unbindTexture()}T.depthBuffer&&W(T)}function ce(T){const M=b(T)||a,B=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ie=0,re=B.length;ie<re;ie++){const de=B[ie];if(w(de,M)){const P=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,$=n.get(de).__webglTexture;t.bindTexture(P,$),q(P),t.unbindTexture()}}}function Ae(T){if(a&&T.samples>0&&Te(T)===!1){const M=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],B=T.width,ie=T.height;let re=i.COLOR_BUFFER_BIT;const de=[],P=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(T),O=T.isWebGLMultipleRenderTargets===!0;if(O)for(let fe=0;fe<M.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let fe=0;fe<M.length;fe++){de.push(i.COLOR_ATTACHMENT0+fe),T.depthBuffer&&de.push(P);const ve=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(ve===!1&&(T.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),O&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[fe]),ve===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[P]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])),O){const Ee=n.get(M[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,B,ie,0,0,B,ie,re,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),O)for(let fe=0;fe<M.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,$.__webglColorRenderbuffer[fe]);const ve=n.get(M[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}}function we(T){return Math.min(d,T.samples)}function Te(T){const M=n.get(T);return a&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function De(T){const M=o.render.frame;_.get(T)!==M&&(_.set(T,M),T.update())}function He(T,M){const B=T.colorSpace,ie=T.format,re=T.type;return T.isCompressedTexture===!0||T.format===Er||B!==Nt&&B!==fn&&(B===Ue?a===!1?e.has("EXT_sRGB")===!0&&ie===Pt?(T.format=Er,T.minFilter=Et,T.generateMipmaps=!1):M=ua.sRGBToLinear(M):(ie!==Pt||re!==ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=X,this.resetTextureUnits=Z,this.setTexture2D=te,this.setTexture2DArray=me,this.setTexture3D=oe,this.setTextureCube=z,this.rebindTextures=J,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=ce,this.updateMultisampleRenderTarget=Ae,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=Te}function lf(i,e,t){const n=t.isWebGL2;function r(s,o=fn){let a;if(s===ln)return i.UNSIGNED_BYTE;if(s===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Ll)return i.UNSIGNED_SHORT_5_5_5_1;if(s===wl)return i.BYTE;if(s===Pl)return i.SHORT;if(s===qs)return i.UNSIGNED_SHORT;if(s===Rl)return i.INT;if(s===cn)return i.UNSIGNED_INT;if(s===hn)return i.FLOAT;if(s===hi)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ql)return i.ALPHA;if(s===Pt)return i.RGBA;if(s===Dl)return i.LUMINANCE;if(s===Ul)return i.LUMINANCE_ALPHA;if(s===un)return i.DEPTH_COMPONENT;if(s===On)return i.DEPTH_STENCIL;if(s===Er)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Il)return i.RED;if(s===Nl)return i.RED_INTEGER;if(s===Fl)return i.RG;if(s===Ol)return i.RG_INTEGER;if(s===Bl)return i.RGBA_INTEGER;if(s===_r||s===gr||s===xr||s===vr)if(o===Ue)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===_r)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===_r)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ds||s===Us||s===Is||s===Ns)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Ds)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Us)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Is)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ns)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zl)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fs||s===Os)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Fs)return o===Ue?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Os)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Bs||s===zs||s===Gs||s===Hs||s===Vs||s===ks||s===Ws||s===Xs||s===Ys||s===js||s===Zs||s===$s||s===Ks||s===Js)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Bs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===zs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Vs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ks)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ws)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ys)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===js)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Zs)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===$s)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ks)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Js)return o===Ue?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Mr)return o===Ue?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Gl||s===Qs||s===ea||s===ta)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Mr)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Qs)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ea)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ta)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fn?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class cf extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class bn extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hf={type:"move"};class Kr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),u=this._getHandJoint(l,g);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,_=.005;l.inputState.pinching&&f>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hf)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new bn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class uf extends gt{constructor(e,t,n,r,s,o,a,c,l,h){if(h=h!==void 0?h:un,h!==un&&h!==On)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===un&&(n=cn),n===void 0&&h===On&&(n=Fn),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ut,this.minFilter=c!==void 0?c:ut,this.flipY=!1,this.generateMipmaps=!1}}class df extends pn{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,_=null;const g=t.getContextAttributes();let m=null,u=null;const y=[],x=[],b=new Set,E=new Map,w=new bt;w.layers.enable(1),w.viewport=new je;const q=new bt;q.layers.enable(2),q.viewport=new je;const I=[w,q],v=new cf;v.layers.enable(1),v.layers.enable(2);let A=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let j=y[z];return j===void 0&&(j=new Kr,y[z]=j),j.getTargetRaySpace()},this.getControllerGrip=function(z){let j=y[z];return j===void 0&&(j=new Kr,y[z]=j),j.getGripSpace()},this.getHand=function(z){let j=y[z];return j===void 0&&(j=new Kr,y[z]=j),j.getHandSpace()};function ne(z){const j=x.indexOf(z.inputSource);if(j===-1)return;const le=y[j];le!==void 0&&(le.update(z.inputSource,z.frame,l||o),le.dispatchEvent({type:z.type,data:z.inputSource}))}function U(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",F);for(let z=0;z<y.length;z++){const j=x[z];j!==null&&(x[z]=null,y[z].disconnect(j))}A=null,H=null,e.setRenderTarget(m),p=null,f=null,d=null,r=null,u=null,oe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",U),r.addEventListener("inputsourceschange",F),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,j),r.updateRenderState({baseLayer:p}),u=new mn(p.framebufferWidth,p.framebufferHeight,{format:Pt,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,le=null,pe=null;g.depth&&(pe=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?On:un,le=g.stencil?Fn:cn);const C={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(C),r.updateRenderState({layers:[f]}),u=new mn(f.textureWidth,f.textureHeight,{format:Pt,type:ln,depthTexture:new uf(f.textureWidth,f.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Pe=e.properties.get(u);Pe.__ignoreDepthValues=f.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),oe.setContext(r),oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function F(z){for(let j=0;j<z.removed.length;j++){const le=z.removed[j],pe=x.indexOf(le);pe>=0&&(x[pe]=null,y[pe].disconnect(le))}for(let j=0;j<z.added.length;j++){const le=z.added[j];let pe=x.indexOf(le);if(pe===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=x.length){x.push(le),pe=Pe;break}else if(x[Pe]===null){x[Pe]=le,pe=Pe;break}if(pe===-1)break}const C=y[pe];C&&C.connect(le)}}const G=new R,ee=new R;function Z(z,j,le){G.setFromMatrixPosition(j.matrixWorld),ee.setFromMatrixPosition(le.matrixWorld);const pe=G.distanceTo(ee),C=j.projectionMatrix.elements,Pe=le.projectionMatrix.elements,Re=C[14]/(C[10]-1),ae=C[14]/(C[10]+1),Me=(C[9]+1)/C[5],Q=(C[9]-1)/C[5],W=(C[8]-1)/C[0],J=(Pe[8]+1)/Pe[0],ge=Re*W,ce=Re*J,Ae=pe/(-W+J),we=Ae*-W;j.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(we),z.translateZ(Ae),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const Te=Re+Ae,De=ae+Ae,He=ge-we,T=ce+(pe-we),M=Me*ae/De*Te,B=Q*ae/De*Te;z.projectionMatrix.makePerspective(He,T,M,B,Te,De),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}function X(z,j){j===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(j.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;v.near=q.near=w.near=z.near,v.far=q.far=w.far=z.far,(A!==v.near||H!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),A=v.near,H=v.far);const j=z.parent,le=v.cameras;X(v,j);for(let pe=0;pe<le.length;pe++)X(le[pe],j);le.length===2?Z(v,w,q):v.projectionMatrix.copy(w.projectionMatrix),K(z,v,j)};function K(z,j,le){le===null?z.matrix.copy(j.matrixWorld):(z.matrix.copy(le.matrixWorld),z.matrix.invert(),z.matrix.multiply(j.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0);const pe=z.children;for(let C=0,Pe=pe.length;C<Pe;C++)pe[C].updateMatrixWorld(!0);z.projectionMatrix.copy(j.projectionMatrix),z.projectionMatrixInverse.copy(j.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Tr*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(z){c=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return b};let te=null;function me(z,j){if(h=j.getViewerPose(l||o),_=j,h!==null){const le=h.views;p!==null&&(e.setRenderTargetFramebuffer(u,p.framebuffer),e.setRenderTarget(u));let pe=!1;le.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let C=0;C<le.length;C++){const Pe=le[C];let Re=null;if(p!==null)Re=p.getViewport(Pe);else{const Me=d.getViewSubImage(f,Pe);Re=Me.viewport,C===0&&(e.setRenderTargetTextures(u,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(u))}let ae=I[C];ae===void 0&&(ae=new bt,ae.layers.enable(C),ae.viewport=new je,I[C]=ae),ae.matrix.fromArray(Pe.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Pe.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Re.x,Re.y,Re.width,Re.height),C===0&&(v.matrix.copy(ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(ae)}}for(let le=0;le<y.length;le++){const pe=x[le],C=y[le];pe!==null&&C!==void 0&&C.update(pe,j,l||o)}if(te&&te(z,j),j.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:j.detectedPlanes});let le=null;for(const pe of b)j.detectedPlanes.has(pe)||(le===null&&(le=[]),le.push(pe));if(le!==null)for(const pe of le)b.delete(pe),E.delete(pe),n.dispatchEvent({type:"planeremoved",data:pe});for(const pe of j.detectedPlanes)if(!b.has(pe))b.add(pe),E.set(pe,j.lastChangedTime),n.dispatchEvent({type:"planeadded",data:pe});else{const C=E.get(pe);pe.lastChangedTime>C&&(E.set(pe,pe.lastChangedTime),n.dispatchEvent({type:"planechanged",data:pe}))}}_=null}const oe=new Na;oe.setAnimationLoop(me),this.setAnimationLoop=function(z){te=z},this.dispose=function(){}}}function ff(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Da(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,y,x,b){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,b)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),g(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,y,x):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===mt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===mt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const y=e.get(u).envMap;if(y&&(m.envMap.value=y,m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;const x=i.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,y,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*y,m.scale.value=x*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,y){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function g(m,u){const y=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pf(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){const b=x.program;n.uniformBlockBinding(y,b)}function l(y,x){let b=r[y.id];b===void 0&&(_(y),b=h(y),r[y.id]=b,y.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(y,E);const w=e.render.frame;s[y.id]!==w&&(f(y),s[y.id]=w)}function h(y){const x=d();y.__bindingPointIndex=x;const b=i.createBuffer(),E=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=r[y.id],b=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,q=b.length;w<q;w++){const I=b[w];if(p(I,w,E)===!0){const v=I.__offset,A=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let ne=0;ne<A.length;ne++){const U=A[ne],F=g(U);typeof U=="number"?(I.__data[0]=U,i.bufferSubData(i.UNIFORM_BUFFER,v+H,I.__data)):U.isMatrix3?(I.__data[0]=U.elements[0],I.__data[1]=U.elements[1],I.__data[2]=U.elements[2],I.__data[3]=U.elements[0],I.__data[4]=U.elements[3],I.__data[5]=U.elements[4],I.__data[6]=U.elements[5],I.__data[7]=U.elements[0],I.__data[8]=U.elements[6],I.__data[9]=U.elements[7],I.__data[10]=U.elements[8],I.__data[11]=U.elements[0]):(U.toArray(I.__data,H),H+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,v,I.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,b){const E=y.value;if(b[x]===void 0){if(typeof E=="number")b[x]=E;else{const w=Array.isArray(E)?E:[E],q=[];for(let I=0;I<w.length;I++)q.push(w[I].clone());b[x]=q}return!0}else if(typeof E=="number"){if(b[x]!==E)return b[x]=E,!0}else{const w=Array.isArray(b[x])?b[x]:[b[x]],q=Array.isArray(E)?E:[E];for(let I=0;I<w.length;I++){const v=w[I];if(v.equals(q[I])===!1)return v.copy(q[I]),!0}}return!1}function _(y){const x=y.uniforms;let b=0;const E=16;let w=0;for(let q=0,I=x.length;q<I;q++){const v=x[q],A={boundary:0,storage:0},H=Array.isArray(v.value)?v.value:[v.value];for(let ne=0,U=H.length;ne<U;ne++){const F=H[ne],G=g(F);A.boundary+=G.boundary,A.storage+=G.storage}if(v.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),v.__offset=b,q>0){w=b%E;const ne=E-w;w!==0&&ne-A.boundary<0&&(b+=E-w,v.__offset=b)}b+=A.storage}return w=b%E,w>0&&(b+=E-w),y.__size=b,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const b=o.indexOf(x.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}function mf(){const i=Pi("canvas");return i.style.display="block",i}class ho{constructor(e={}){const{canvas:t=mf(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let p=null,_=null;const g=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ue,this.useLegacyLights=!0,this.toneMapping=Vt,this.toneMappingExposure=1;const u=this;let y=!1,x=0,b=0,E=null,w=-1,q=null;const I=new je,v=new je;let A=null,H=t.width,ne=t.height,U=1,F=null,G=null;const ee=new je(0,0,H,ne),Z=new je(0,0,H,ne);let X=!1;const K=new kr;let te=!1,me=!1,oe=null;const z=new $e,j=new R,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return E===null?U:1}let C=n;function Pe(S,N){for(let k=0;k<S.length;k++){const D=S[k],Y=t.getContext(D,N);if(Y!==null)return Y}return null}try{const S={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${on}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),C===null){const N=["webgl2","webgl","experimental-webgl"];if(u.isWebGL1Renderer===!0&&N.shift(),C=Pe(N,S),C===null)throw Pe(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}C.getShaderPrecisionFormat===void 0&&(C.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Re,ae,Me,Q,W,J,ge,ce,Ae,we,Te,De,He,T,M,B,ie,re,de,P,$,O,fe,ve;function Ee(){Re=new bu(C),ae=new vu(C,Re,e),Re.init(ae),O=new lf(C,Re,ae),Me=new af(C,Re,ae),Q=new Pu(C),W=new Wd,J=new of(C,Re,Me,W,ae,O,Q),ge=new Su(u),ce=new Tu(u),Ae=new Mc(C,ae),fe=new gu(C,Re,Ae,ae),we=new Au(C,Ae,Q,fe),Te=new qu(C,we,Ae,Q),de=new Lu(C,ae,J),B=new Mu(W),De=new kd(u,ge,ce,Re,ae,fe,B),He=new ff(u,W),T=new Yd,M=new Qd(Re,ae),re=new _u(u,ge,ce,Me,Te,f,c),ie=new sf(u,Te,ae),ve=new pf(C,Q,ae,Me),P=new xu(C,Re,Q,ae),$=new wu(C,Re,Q,ae),Q.programs=De.programs,u.capabilities=ae,u.extensions=Re,u.properties=W,u.renderLists=T,u.shadowMap=ie,u.state=Me,u.info=Q}Ee();const _e=new df(u,C);this.xr=_e,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const S=Re.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Re.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(H,ne,!1))},this.getSize=function(S){return S.set(H,ne)},this.setSize=function(S,N,k=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,ne=N,t.width=Math.floor(S*U),t.height=Math.floor(N*U),k===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(H*U,ne*U).floor()},this.setDrawingBufferSize=function(S,N,k){H=S,ne=N,U=k,t.width=Math.floor(S*k),t.height=Math.floor(N*k),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(I)},this.getViewport=function(S){return S.copy(ee)},this.setViewport=function(S,N,k,D){S.isVector4?ee.set(S.x,S.y,S.z,S.w):ee.set(S,N,k,D),Me.viewport(I.copy(ee).multiplyScalar(U).floor())},this.getScissor=function(S){return S.copy(Z)},this.setScissor=function(S,N,k,D){S.isVector4?Z.set(S.x,S.y,S.z,S.w):Z.set(S,N,k,D),Me.scissor(v.copy(Z).multiplyScalar(U).floor())},this.getScissorTest=function(){return X},this.setScissorTest=function(S){Me.setScissorTest(X=S)},this.setOpaqueSort=function(S){F=S},this.setTransparentSort=function(S){G=S},this.getClearColor=function(S){return S.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor.apply(re,arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha.apply(re,arguments)},this.clear=function(S=!0,N=!0,k=!0){let D=0;S&&(D|=C.COLOR_BUFFER_BIT),N&&(D|=C.DEPTH_BUFFER_BIT),k&&(D|=C.STENCIL_BUFFER_BIT),C.clear(D)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),T.dispose(),M.dispose(),W.dispose(),ge.dispose(),ce.dispose(),Te.dispose(),fe.dispose(),ve.dispose(),De.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",ye),_e.removeEventListener("sessionend",Xe),oe&&(oe.dispose(),oe=null),Ye.stop()};function Se(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const S=Q.autoReset,N=ie.enabled,k=ie.autoUpdate,D=ie.needsUpdate,Y=ie.type;Ee(),Q.autoReset=S,ie.enabled=N,ie.autoUpdate=k,ie.needsUpdate=D,ie.type=Y}function Fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ke(S){const N=S.target;N.removeEventListener("dispose",Ke),L(N)}function L(S){V(S),W.remove(S)}function V(S){const N=W.get(S).programs;N!==void 0&&(N.forEach(function(k){De.releaseProgram(k)}),S.isShaderMaterial&&De.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,k,D,Y,be){N===null&&(N=le);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,qe=d0(S,N,k,D,Y);Me.setMaterial(D,Ce);let Ne=k.index,Oe=1;D.wireframe===!0&&(Ne=we.getWireframeAttribute(k),Oe=2);const Be=k.drawRange,ze=k.attributes.position;let We=Be.start*Oe,ft=(Be.start+Be.count)*Oe;be!==null&&(We=Math.max(We,be.start*Oe),ft=Math.min(ft,(be.start+be.count)*Oe)),Ne!==null?(We=Math.max(We,0),ft=Math.min(ft,Ne.count)):ze!=null&&(We=Math.max(We,0),ft=Math.min(ft,ze.count));const Ut=ft-We;if(Ut<0||Ut===1/0)return;fe.setup(Y,D,qe,k,Ne);let wn,et=P;if(Ne!==null&&(wn=Ae.get(Ne),et=$,et.setIndex(wn)),Y.isMesh)D.wireframe===!0?(Me.setLineWidth(D.wireframeLinewidth*pe()),et.setMode(C.LINES)):et.setMode(C.TRIANGLES);else if(Y.isLine){let Ve=D.linewidth;Ve===void 0&&(Ve=1),Me.setLineWidth(Ve*pe()),Y.isLineSegments?et.setMode(C.LINES):Y.isLineLoop?et.setMode(C.LINE_LOOP):et.setMode(C.LINE_STRIP)}else Y.isPoints?et.setMode(C.POINTS):Y.isSprite&&et.setMode(C.TRIANGLES);if(Y.isInstancedMesh)et.renderInstances(We,Ut,Y.count);else if(k.isInstancedBufferGeometry){const Ve=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,gs=Math.min(k.instanceCount,Ve);et.renderInstances(We,Ut,gs)}else et.render(We,Ut)},this.compile=function(S,N){function k(D,Y,be){D.transparent===!0&&D.side===It&&D.forceSinglePass===!1?(D.side=mt,D.needsUpdate=!0,lr(D,Y,be),D.side=Qt,D.needsUpdate=!0,lr(D,Y,be),D.side=It):lr(D,Y,be)}_=M.get(S),_.init(),m.push(_),S.traverseVisible(function(D){D.isLight&&D.layers.test(N.layers)&&(_.pushLight(D),D.castShadow&&_.pushShadow(D))}),_.setupLights(u.useLegacyLights),S.traverse(function(D){const Y=D.material;if(Y)if(Array.isArray(Y))for(let be=0;be<Y.length;be++){const Ce=Y[be];k(Ce,S,D)}else k(Y,S,D)}),m.pop(),_=null};let se=null;function xe(S){se&&se(S)}function ye(){Ye.stop()}function Xe(){Ye.start()}const Ye=new Na;Ye.setAnimationLoop(xe),typeof self<"u"&&Ye.setContext(self),this.setAnimationLoop=function(S){se=S,_e.setAnimationLoop(S),S===null?Ye.stop():Ye.start()},_e.addEventListener("sessionstart",ye),_e.addEventListener("sessionend",Xe),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(N),N=_e.getCamera()),S.isScene===!0&&S.onBeforeRender(u,S,N,E),_=M.get(S,m.length),_.init(),m.push(_),z.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),K.setFromProjectionMatrix(z),me=this.localClippingEnabled,te=B.init(this.clippingPlanes,me),p=T.get(S,g.length),p.init(),g.push(p),ht(S,N,0,u.sortObjects),p.finish(),u.sortObjects===!0&&p.sort(F,G),te===!0&&B.beginShadows();const k=_.state.shadowsArray;if(ie.render(k,S,N),te===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset(),re.render(p,S),_.setupLights(u.useLegacyLights),N.isArrayCamera){const D=N.cameras;for(let Y=0,be=D.length;Y<be;Y++){const Ce=D[Y];an(p,S,Ce,Ce.viewport)}}else an(p,S,N);E!==null&&(J.updateMultisampleRenderTarget(E),J.updateRenderTargetMipmap(E)),S.isScene===!0&&S.onAfterRender(u,S,N),fe.resetDefaultState(),w=-1,q=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function ht(S,N,k,D){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||K.intersectsSprite(S)){D&&j.setFromMatrixPosition(S.matrixWorld).applyMatrix4(z);const Ce=Te.update(S),qe=S.material;qe.visible&&p.push(S,Ce,qe,k,j.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||K.intersectsObject(S))){S.isSkinnedMesh&&S.skeleton.frame!==Q.render.frame&&(S.skeleton.update(),S.skeleton.frame=Q.render.frame);const Ce=Te.update(S),qe=S.material;if(D&&(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),j.copy(Ce.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(z)),Array.isArray(qe)){const Ne=Ce.groups;for(let Oe=0,Be=Ne.length;Oe<Be;Oe++){const ze=Ne[Oe],We=qe[ze.materialIndex];We&&We.visible&&p.push(S,Ce,We,k,j.z,ze)}}else qe.visible&&p.push(S,Ce,qe,k,j.z,null)}}const be=S.children;for(let Ce=0,qe=be.length;Ce<qe;Ce++)ht(be[Ce],N,k,D)}function an(S,N,k,D){const Y=S.opaque,be=S.transmissive,Ce=S.transparent;_.setupLightsView(k),te===!0&&B.setGlobalState(u.clippingPlanes,k),be.length>0&&Je(Y,be,N,k),D&&Me.viewport(I.copy(D)),Y.length>0&&At(Y,N,k),be.length>0&&At(be,N,k),Ce.length>0&&At(Ce,N,k),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Je(S,N,k,D){if(oe===null){const qe=ae.isWebGL2;oe=new mn(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?hi:ln,minFilter:ci,samples:qe&&a===!0?4:0})}const Y=u.getRenderTarget();u.setRenderTarget(oe),u.clear();const be=u.toneMapping;u.toneMapping=Vt,At(S,k,D),J.updateMultisampleRenderTarget(oe),J.updateRenderTargetMipmap(oe);let Ce=!1;for(let qe=0,Ne=N.length;qe<Ne;qe++){const Oe=N[qe],Be=Oe.object,ze=Oe.geometry,We=Oe.material,ft=Oe.group;if(We.side===It&&Be.layers.test(D.layers)){const Ut=We.side;We.side=mt,We.needsUpdate=!0,Gt(Be,k,D,ze,We,ft),We.side=Ut,We.needsUpdate=!0,Ce=!0}}Ce===!0&&(J.updateMultisampleRenderTarget(oe),J.updateRenderTargetMipmap(oe)),u.setRenderTarget(Y),u.toneMapping=be}function At(S,N,k){const D=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,be=S.length;Y<be;Y++){const Ce=S[Y],qe=Ce.object,Ne=Ce.geometry,Oe=D===null?Ce.material:D,Be=Ce.group;qe.layers.test(k.layers)&&Gt(qe,N,k,Ne,Oe,Be)}}function Gt(S,N,k,D,Y,be){S.onBeforeRender(u,N,k,D,Y,be),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),Y.onBeforeRender(u,N,k,D,S,be),Y.transparent===!0&&Y.side===It&&Y.forceSinglePass===!1?(Y.side=mt,Y.needsUpdate=!0,u.renderBufferDirect(k,N,D,Y,S,be),Y.side=Qt,Y.needsUpdate=!0,u.renderBufferDirect(k,N,D,Y,S,be),Y.side=It):u.renderBufferDirect(k,N,D,Y,S,be),S.onAfterRender(u,N,k,D,Y,be)}function lr(S,N,k){N.isScene!==!0&&(N=le);const D=W.get(S),Y=_.state.lights,be=_.state.shadowsArray,Ce=Y.state.version,qe=De.getParameters(S,Y.state,be,N,k),Ne=De.getProgramCacheKey(qe);let Oe=D.programs;D.environment=S.isMeshStandardMaterial?N.environment:null,D.fog=N.fog,D.envMap=(S.isMeshStandardMaterial?ce:ge).get(S.envMap||D.environment),Oe===void 0&&(S.addEventListener("dispose",Ke),Oe=new Map,D.programs=Oe);let Be=Oe.get(Ne);if(Be!==void 0){if(D.currentProgram===Be&&D.lightsStateVersion===Ce)return jo(S,qe),Be}else qe.uniforms=De.getUniforms(S),S.onBuild(k,qe,u),S.onBeforeCompile(qe,u),Be=De.acquireProgram(qe,Ne),Oe.set(Ne,Be),D.uniforms=qe.uniforms;const ze=D.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(ze.clippingPlanes=B.uniform),jo(S,qe),D.needsLights=p0(S),D.lightsStateVersion=Ce,D.needsLights&&(ze.ambientLightColor.value=Y.state.ambient,ze.lightProbe.value=Y.state.probe,ze.directionalLights.value=Y.state.directional,ze.directionalLightShadows.value=Y.state.directionalShadow,ze.spotLights.value=Y.state.spot,ze.spotLightShadows.value=Y.state.spotShadow,ze.rectAreaLights.value=Y.state.rectArea,ze.ltc_1.value=Y.state.rectAreaLTC1,ze.ltc_2.value=Y.state.rectAreaLTC2,ze.pointLights.value=Y.state.point,ze.pointLightShadows.value=Y.state.pointShadow,ze.hemisphereLights.value=Y.state.hemi,ze.directionalShadowMap.value=Y.state.directionalShadowMap,ze.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ze.spotShadowMap.value=Y.state.spotShadowMap,ze.spotLightMatrix.value=Y.state.spotLightMatrix,ze.spotLightMap.value=Y.state.spotLightMap,ze.pointShadowMap.value=Y.state.pointShadowMap,ze.pointShadowMatrix.value=Y.state.pointShadowMatrix);const We=Be.getUniforms(),ft=Ji.seqWithValue(We.seq,ze);return D.currentProgram=Be,D.uniformsList=ft,Be}function jo(S,N){const k=W.get(S);k.outputColorSpace=N.outputColorSpace,k.instancing=N.instancing,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function d0(S,N,k,D,Y){N.isScene!==!0&&(N=le),J.resetTextureUnits();const be=N.fog,Ce=D.isMeshStandardMaterial?N.environment:null,qe=E===null?u.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Nt,Ne=(D.isMeshStandardMaterial?ce:ge).get(D.envMap||Ce),Oe=D.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Be=!!D.normalMap&&!!k.attributes.tangent,ze=!!k.morphAttributes.position,We=!!k.morphAttributes.normal,ft=!!k.morphAttributes.color,Ut=D.toneMapped?u.toneMapping:Vt,wn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,et=wn!==void 0?wn.length:0,Ve=W.get(D),gs=_.state.lights;if(te===!0&&(me===!0||S!==q)){const St=S===q&&D.id===w;B.setState(D,S,St)}let st=!1;D.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==gs.state.version||Ve.outputColorSpace!==qe||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==Ne||D.fog===!0&&Ve.fog!==be||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==B.numPlanes||Ve.numIntersection!==B.numIntersection)||Ve.vertexAlphas!==Oe||Ve.vertexTangents!==Be||Ve.morphTargets!==ze||Ve.morphNormals!==We||Ve.morphColors!==ft||Ve.toneMapping!==Ut||ae.isWebGL2===!0&&Ve.morphTargetsCount!==et)&&(st=!0):(st=!0,Ve.__version=D.version);let Pn=Ve.currentProgram;st===!0&&(Pn=lr(D,N,Y));let Zo=!1,bi=!1,xs=!1;const pt=Pn.getUniforms(),Rn=Ve.uniforms;if(Me.useProgram(Pn.program)&&(Zo=!0,bi=!0,xs=!0),D.id!==w&&(w=D.id,bi=!0),Zo||q!==S){if(pt.setValue(C,"projectionMatrix",S.projectionMatrix),ae.logarithmicDepthBuffer&&pt.setValue(C,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),q!==S&&(q=S,bi=!0,xs=!0),D.isShaderMaterial||D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshStandardMaterial||D.envMap){const St=pt.map.cameraPosition;St!==void 0&&St.setValue(C,j.setFromMatrixPosition(S.matrixWorld))}(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial)&&pt.setValue(C,"isOrthographic",S.isOrthographicCamera===!0),(D.isMeshPhongMaterial||D.isMeshToonMaterial||D.isMeshLambertMaterial||D.isMeshBasicMaterial||D.isMeshStandardMaterial||D.isShaderMaterial||D.isShadowMaterial||Y.isSkinnedMesh)&&pt.setValue(C,"viewMatrix",S.matrixWorldInverse)}if(Y.isSkinnedMesh){pt.setOptional(C,Y,"bindMatrix"),pt.setOptional(C,Y,"bindMatrixInverse");const St=Y.skeleton;St&&(ae.floatVertexTextures?(St.boneTexture===null&&St.computeBoneTexture(),pt.setValue(C,"boneTexture",St.boneTexture,J),pt.setValue(C,"boneTextureSize",St.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const vs=k.morphAttributes;if((vs.position!==void 0||vs.normal!==void 0||vs.color!==void 0&&ae.isWebGL2===!0)&&de.update(Y,k,Pn),(bi||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,pt.setValue(C,"receiveShadow",Y.receiveShadow)),D.isMeshGouraudMaterial&&D.envMap!==null&&(Rn.envMap.value=Ne,Rn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),bi&&(pt.setValue(C,"toneMappingExposure",u.toneMappingExposure),Ve.needsLights&&f0(Rn,xs),be&&D.fog===!0&&He.refreshFogUniforms(Rn,be),He.refreshMaterialUniforms(Rn,D,U,ne,oe),Ji.upload(C,Ve.uniformsList,Rn,J)),D.isShaderMaterial&&D.uniformsNeedUpdate===!0&&(Ji.upload(C,Ve.uniformsList,Rn,J),D.uniformsNeedUpdate=!1),D.isSpriteMaterial&&pt.setValue(C,"center",Y.center),pt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),pt.setValue(C,"normalMatrix",Y.normalMatrix),pt.setValue(C,"modelMatrix",Y.matrixWorld),D.isShaderMaterial||D.isRawShaderMaterial){const St=D.uniformsGroups;for(let Ms=0,m0=St.length;Ms<m0;Ms++)if(ae.isWebGL2){const $o=St[Ms];ve.update($o,Pn),ve.bind($o,Pn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Pn}function f0(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function p0(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(S,N,k){W.get(S.texture).__webglTexture=N,W.get(S.depthTexture).__webglTexture=k;const D=W.get(S);D.__hasExternalTextures=!0,D.__hasExternalTextures&&(D.__autoAllocateDepthBuffer=k===void 0,D.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),D.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,N){const k=W.get(S);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,k=0){E=S,x=N,b=k;let D=!0,Y=null,be=!1,Ce=!1;if(S){const Ne=W.get(S);Ne.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(C.FRAMEBUFFER,null),D=!1):Ne.__webglFramebuffer===void 0?J.setupRenderTarget(S):Ne.__hasExternalTextures&&J.rebindTextures(S,W.get(S.texture).__webglTexture,W.get(S.depthTexture).__webglTexture);const Oe=S.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Ce=!0);const Be=W.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Y=Be[N],be=!0):ae.isWebGL2&&S.samples>0&&J.useMultisampledRTT(S)===!1?Y=W.get(S).__webglMultisampledFramebuffer:Y=Be,I.copy(S.viewport),v.copy(S.scissor),A=S.scissorTest}else I.copy(ee).multiplyScalar(U).floor(),v.copy(Z).multiplyScalar(U).floor(),A=X;if(Me.bindFramebuffer(C.FRAMEBUFFER,Y)&&ae.drawBuffers&&D&&Me.drawBuffers(S,Y),Me.viewport(I),Me.scissor(v),Me.setScissorTest(A),be){const Ne=W.get(S.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ne.__webglTexture,k)}else if(Ce){const Ne=W.get(S.texture),Oe=N||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ne.__webglTexture,k||0,Oe)}w=-1},this.readRenderTargetPixels=function(S,N,k,D,Y,be,Ce){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=W.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ce!==void 0&&(qe=qe[Ce]),qe){Me.bindFramebuffer(C.FRAMEBUFFER,qe);try{const Ne=S.texture,Oe=Ne.format,Be=Ne.type;if(Oe!==Pt&&O.convert(Oe)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===hi&&(Re.has("EXT_color_buffer_half_float")||ae.isWebGL2&&Re.has("EXT_color_buffer_float"));if(Be!==ln&&O.convert(Be)!==C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===hn&&(ae.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-D&&k>=0&&k<=S.height-Y&&C.readPixels(N,k,D,Y,O.convert(Oe),O.convert(Be),be)}finally{const Ne=E!==null?W.get(E).__webglFramebuffer:null;Me.bindFramebuffer(C.FRAMEBUFFER,Ne)}}},this.copyFramebufferToTexture=function(S,N,k=0){const D=Math.pow(2,-k),Y=Math.floor(N.image.width*D),be=Math.floor(N.image.height*D);J.setTexture2D(N,0),C.copyTexSubImage2D(C.TEXTURE_2D,k,0,0,S.x,S.y,Y,be),Me.unbindTexture()},this.copyTextureToTexture=function(S,N,k,D=0){const Y=N.image.width,be=N.image.height,Ce=O.convert(k.format),qe=O.convert(k.type);J.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment),N.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,D,S.x,S.y,Y,be,Ce,qe,N.image.data):N.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,D,S.x,S.y,N.mipmaps[0].width,N.mipmaps[0].height,Ce,N.mipmaps[0].data):C.texSubImage2D(C.TEXTURE_2D,D,S.x,S.y,Ce,qe,N.image),D===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(S,N,k,D,Y=0){if(u.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const be=S.max.x-S.min.x+1,Ce=S.max.y-S.min.y+1,qe=S.max.z-S.min.z+1,Ne=O.convert(D.format),Oe=O.convert(D.type);let Be;if(D.isData3DTexture)J.setTexture3D(D,0),Be=C.TEXTURE_3D;else if(D.isDataArrayTexture)J.setTexture2DArray(D,0),Be=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,D.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,D.unpackAlignment);const ze=C.getParameter(C.UNPACK_ROW_LENGTH),We=C.getParameter(C.UNPACK_IMAGE_HEIGHT),ft=C.getParameter(C.UNPACK_SKIP_PIXELS),Ut=C.getParameter(C.UNPACK_SKIP_ROWS),wn=C.getParameter(C.UNPACK_SKIP_IMAGES),et=k.isCompressedTexture?k.mipmaps[0]:k.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,et.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,et.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,S.min.x),C.pixelStorei(C.UNPACK_SKIP_ROWS,S.min.y),C.pixelStorei(C.UNPACK_SKIP_IMAGES,S.min.z),k.isDataTexture||k.isData3DTexture?C.texSubImage3D(Be,Y,N.x,N.y,N.z,be,Ce,qe,Ne,Oe,et.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),C.compressedTexSubImage3D(Be,Y,N.x,N.y,N.z,be,Ce,qe,Ne,et.data)):C.texSubImage3D(Be,Y,N.x,N.y,N.z,be,Ce,qe,Ne,Oe,et),C.pixelStorei(C.UNPACK_ROW_LENGTH,ze),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,We),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ft),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ut),C.pixelStorei(C.UNPACK_SKIP_IMAGES,wn),Y===0&&D.generateMipmaps&&C.generateMipmap(Be),Me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),Me.unbindTexture()},this.resetState=function(){x=0,b=0,E=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ue?dn:na}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===dn?Ue:Nt}}class _f extends ho{}_f.prototype.isWebGL1Renderer=!0;class gf extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Qi extends $n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const uo=new R,fo=new R,po=new $e,Jr=new ma,er=new Li;class xf extends ot{constructor(e=new Mt,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)uo.fromBufferAttribute(t,r-1),fo.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),er.radius+=s,e.ray.intersectsSphere(er)===!1)return;po.copy(r).invert(),Jr.copy(e.ray).applyMatrix4(po);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new R,h=new R,d=new R,f=new R,p=this.isLineSegments?2:1,_=n.index,m=n.attributes.position;if(_!==null){const u=Math.max(0,o.start),y=Math.min(_.count,o.start+o.count);for(let x=u,b=y-1;x<b;x+=p){const E=_.getX(x),w=_.getX(x+1);if(l.fromBufferAttribute(m,E),h.fromBufferAttribute(m,w),Jr.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(f);I<e.near||I>e.far||t.push({distance:I,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=u,b=y-1;x<b;x+=p){if(l.fromBufferAttribute(m,x),h.fromBufferAttribute(m,x+1),Jr.distanceSqToSegment(l,h,f,d)>c)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const mo=new R,_o=new R;class Qr extends xf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)mo.fromBufferAttribute(t,r),_o.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+mo.distanceTo(_o);e.setAttribute("lineDistance",new it(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zt{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);const h=n[r],f=n[r+1]-h,p=(o-h)/f;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new he:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new R,r=[],s=[],o=[],a=new R,c=new $e;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new R)}s[0]=new R,o[0]=new R;let l=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(at(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(at(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(c.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class es extends zt{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){const n=t||new he,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vf extends es{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ts(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,d){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,p*=h,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return i+e*s+t*o+n*a}}}const tr=new R,ns=new ts,is=new ts,rs=new ts;class Mf extends zt{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new R){const n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(tr.subVectors(r[0],r[1]).add(r[0]),l=tr);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(tr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=tr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(l.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),ns.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,_,g,m),is.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,_,g,m),rs.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(ns.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),is.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),rs.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(ns.calc(c),is.calc(c),rs.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function go(i,e,t,n,r){const s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function Sf(i,e){const t=1-i;return t*t*e}function Ef(i,e){return 2*(1-i)*i*e}function yf(i,e){return i*i*e}function xi(i,e,t,n){return Sf(i,e)+Ef(i,t)+yf(i,n)}function Tf(i,e){const t=1-i;return t*t*t*e}function bf(i,e){const t=1-i;return 3*t*t*i*e}function Af(i,e){return 3*(1-i)*i*i*e}function wf(i,e){return i*i*i*e}function vi(i,e,t,n,r){return Tf(i,e)+bf(i,t)+Af(i,n)+wf(i,r)}class xo extends zt{constructor(e=new he,t=new he,n=new he,r=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new he){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vi(e,r.x,s.x,o.x,a.x),vi(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Pf extends zt{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(vi(e,r.x,s.x,o.x,a.x),vi(e,r.y,s.y,o.y,a.y),vi(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ss extends zt{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rf extends zt{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vo extends zt{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xi(e,r.x,s.x,o.x),xi(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends zt{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){const n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(xi(e,r.x,s.x,o.x),xi(e,r.y,s.y,o.y),xi(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Mo extends zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){const n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return n.set(go(a,c.x,l.x,h.x,d.x),go(a,c.y,l.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new he().fromArray(r))}return this}}var So=Object.freeze({__proto__:null,ArcCurve:vf,CatmullRomCurve3:Mf,CubicBezierCurve:xo,CubicBezierCurve3:Pf,EllipseCurve:es,LineCurve:ss,LineCurve3:Rf,QuadraticBezierCurve:vo,QuadraticBezierCurve3:Cf,SplineCurve:Mo});class Lf extends zt{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new ss(t,e))}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new So[r.type]().fromJSON(r))}return this}}class as extends Lf{constructor(e){super(),this.type="Path",this.currentPoint=new he,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ss(this.currentPoint.clone(),new he(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new vo(this.currentPoint.clone(),new he(e,t),new he(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){const a=new xo(this.currentPoint.clone(),new he(e,t),new he(n,r),new he(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Mo(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){const l=new es(e,t,n,r,s,o,a,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class nr extends as{constructor(e){super(e),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new as().fromJSON(r))}return this}}const qf={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Eo(i,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,d,f,p;if(n&&(s=Ff(i,e,s,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let _=t;_<r;_+=t)d=i[_],f=i[_+1],d<a&&(a=d),f<c&&(c=f),d>l&&(l=d),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Mi(s,o,t,a,c,p,0),o}};function Eo(i,e,t,n,r){let s,o;if(r===jf(i,e,t,n)>0)for(s=e;s<t;s+=n)o=bo(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=bo(s,i[s],i[s+1],o);return o&&ir(o,o.next)&&(Ei(o),o=o.next),o}function An(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ir(t,t.next)||Ze(t.prev,t,t.next)===0)){if(Ei(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Mi(i,e,t,n,r,s,o){if(!i)return;!o&&s&&Hf(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?Uf(i,n,r,s):Df(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),Ei(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=If(An(i),e,t),Mi(i,e,t,n,r,s,2)):o===2&&Nf(i,e,t,n,r,s):Mi(An(i),e,t,n,r,s,1);break}}}function Df(i){const e=i.prev,t=i,n=i.next;if(Ze(e,t,n)>=0)return!1;const r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,d=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,p=a>c?a>l?a:l:c>l?c:l;let _=n.next;for(;_!==e;){if(_.x>=h&&_.x<=f&&_.y>=d&&_.y<=p&&oi(r,a,s,c,o,l,_.x,_.y)&&Ze(_.prev,_,_.next)>=0)return!1;_=_.next}return!0}function Uf(i,e,t,n){const r=i.prev,s=i,o=i.next;if(Ze(r,s,o)>=0)return!1;const a=r.x,c=s.x,l=o.x,h=r.y,d=s.y,f=o.y,p=a<c?a<l?a:l:c<l?c:l,_=h<d?h<f?h:f:d<f?d:f,g=a>c?a>l?a:l:c>l?c:l,m=h>d?h>f?h:f:d>f?d:f,u=os(p,_,e,t,n),y=os(g,m,e,t,n);let x=i.prevZ,b=i.nextZ;for(;x&&x.z>=u&&b&&b.z<=y;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&oi(a,h,c,d,l,f,x.x,x.y)&&Ze(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=p&&b.x<=g&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&oi(a,h,c,d,l,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=g&&x.y>=_&&x.y<=m&&x!==r&&x!==o&&oi(a,h,c,d,l,f,x.x,x.y)&&Ze(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=y;){if(b.x>=p&&b.x<=g&&b.y>=_&&b.y<=m&&b!==r&&b!==o&&oi(a,h,c,d,l,f,b.x,b.y)&&Ze(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function If(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!ir(r,s)&&yo(r,n,n.next,s)&&Si(r,s)&&Si(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),Ei(n),Ei(n.next),n=i=s),n=n.next}while(n!==i);return An(n)}function Nf(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Wf(o,a)){let c=To(o,a);o=An(o,o.next),c=An(c,c.next),Mi(o,e,t,n,r,s,0),Mi(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Ff(i,e,t,n){const r=[];let s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=Eo(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(kf(l));for(r.sort(Of),s=0;s<r.length;s++)t=Bf(r[s],t);return t}function Of(i,e){return i.x-e.x}function Bf(i,e){const t=zf(i,e);if(!t)return e;const n=To(t,i);return An(n,n.next),An(t,t.next)}function zf(i,e){let t=e,n=-1/0,r;const s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;const a=r,c=r.x,l=r.y;let h=1/0,d;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&oi(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(d=Math.abs(o-t.y)/(s-t.x),Si(t,i)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&Gf(r,t)))&&(r=t,h=d)),t=t.next;while(t!==a);return r}function Gf(i,e){return Ze(i.prev,i,e.prev)<0&&Ze(e.next,i,i.next)<0}function Hf(i,e,t,n){let r=i;do r.z===0&&(r.z=os(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,Vf(r)}function Vf(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function os(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function kf(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function oi(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function Wf(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Xf(i,e)&&(Si(i,e)&&Si(e,i)&&Yf(i,e)&&(Ze(i.prev,i,e.prev)||Ze(i,e.prev,e))||ir(i,e)&&Ze(i.prev,i,i.next)>0&&Ze(e.prev,e,e.next)>0)}function Ze(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ir(i,e){return i.x===e.x&&i.y===e.y}function yo(i,e,t,n){const r=sr(Ze(i,e,t)),s=sr(Ze(i,e,n)),o=sr(Ze(t,n,i)),a=sr(Ze(t,n,e));return!!(r!==s&&o!==a||r===0&&rr(i,t,e)||s===0&&rr(i,n,e)||o===0&&rr(t,i,n)||a===0&&rr(t,e,n))}function rr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sr(i){return i>0?1:i<0?-1:0}function Xf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&yo(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Si(i,e){return Ze(i.prev,i,i.next)<0?Ze(i,e,i.next)>=0&&Ze(i,i.prev,e)>=0:Ze(i,e,i.prev)<0||Ze(i,i.next,e)<0}function Yf(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function To(i,e){const t=new ls(i.i,i.x,i.y),n=new ls(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function bo(i,e,t,n){const r=new ls(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ei(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ls(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jf(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}class li{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return li.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Ao(e),wo(n,e);let o=e.length;t.forEach(Ao);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,wo(n,t[c]);const a=qf.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Ao(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wo(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class cs extends Mt{constructor(e=new nr([new he(.5,.5),new he(-.5,.5),new he(-.5,-.5),new he(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const l=e[a];o(l)}this.setAttribute("position",new it(r,3)),this.setAttribute("uv",new it(s,2)),this.computeVertexNormals();function o(a){const c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,_=t.bevelSize!==void 0?t.bevelSize:p-.1,g=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Zf;let x,b=!1,E,w,q,I;u&&(x=u.getSpacedPoints(h),b=!0,f=!1,E=u.computeFrenetFrames(h,!1),w=new R,q=new R,I=new R),f||(m=0,p=0,_=0,g=0);const v=a.extractPoints(l);let A=v.shape;const H=v.holes;if(!li.isClockWise(A)){A=A.reverse();for(let Q=0,W=H.length;Q<W;Q++){const J=H[Q];li.isClockWise(J)&&(H[Q]=J.reverse())}}const U=li.triangulateShape(A,H),F=A;for(let Q=0,W=H.length;Q<W;Q++){const J=H[Q];A=A.concat(J)}function G(Q,W,J){return W||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(W,J)}const ee=A.length,Z=U.length;function X(Q,W,J){let ge,ce,Ae;const we=Q.x-W.x,Te=Q.y-W.y,De=J.x-Q.x,He=J.y-Q.y,T=we*we+Te*Te,M=we*He-Te*De;if(Math.abs(M)>Number.EPSILON){const B=Math.sqrt(T),ie=Math.sqrt(De*De+He*He),re=W.x-Te/B,de=W.y+we/B,P=J.x-He/ie,$=J.y+De/ie,O=((P-re)*He-($-de)*De)/(we*He-Te*De);ge=re+we*O-Q.x,ce=de+Te*O-Q.y;const fe=ge*ge+ce*ce;if(fe<=2)return new he(ge,ce);Ae=Math.sqrt(fe/2)}else{let B=!1;we>Number.EPSILON?De>Number.EPSILON&&(B=!0):we<-Number.EPSILON?De<-Number.EPSILON&&(B=!0):Math.sign(Te)===Math.sign(He)&&(B=!0),B?(ge=-Te,ce=we,Ae=Math.sqrt(T)):(ge=we,ce=Te,Ae=Math.sqrt(T/2))}return new he(ge/Ae,ce/Ae)}const K=[];for(let Q=0,W=F.length,J=W-1,ge=Q+1;Q<W;Q++,J++,ge++)J===W&&(J=0),ge===W&&(ge=0),K[Q]=X(F[Q],F[J],F[ge]);const te=[];let me,oe=K.concat();for(let Q=0,W=H.length;Q<W;Q++){const J=H[Q];me=[];for(let ge=0,ce=J.length,Ae=ce-1,we=ge+1;ge<ce;ge++,Ae++,we++)Ae===ce&&(Ae=0),we===ce&&(we=0),me[ge]=X(J[ge],J[Ae],J[we]);te.push(me),oe=oe.concat(me)}for(let Q=0;Q<m;Q++){const W=Q/m,J=p*Math.cos(W*Math.PI/2),ge=_*Math.sin(W*Math.PI/2)+g;for(let ce=0,Ae=F.length;ce<Ae;ce++){const we=G(F[ce],K[ce],ge);C(we.x,we.y,-J)}for(let ce=0,Ae=H.length;ce<Ae;ce++){const we=H[ce];me=te[ce];for(let Te=0,De=we.length;Te<De;Te++){const He=G(we[Te],me[Te],ge);C(He.x,He.y,-J)}}}const z=_+g;for(let Q=0;Q<ee;Q++){const W=f?G(A[Q],oe[Q],z):A[Q];b?(q.copy(E.normals[0]).multiplyScalar(W.x),w.copy(E.binormals[0]).multiplyScalar(W.y),I.copy(x[0]).add(q).add(w),C(I.x,I.y,I.z)):C(W.x,W.y,0)}for(let Q=1;Q<=h;Q++)for(let W=0;W<ee;W++){const J=f?G(A[W],oe[W],z):A[W];b?(q.copy(E.normals[Q]).multiplyScalar(J.x),w.copy(E.binormals[Q]).multiplyScalar(J.y),I.copy(x[Q]).add(q).add(w),C(I.x,I.y,I.z)):C(J.x,J.y,d/h*Q)}for(let Q=m-1;Q>=0;Q--){const W=Q/m,J=p*Math.cos(W*Math.PI/2),ge=_*Math.sin(W*Math.PI/2)+g;for(let ce=0,Ae=F.length;ce<Ae;ce++){const we=G(F[ce],K[ce],ge);C(we.x,we.y,d+J)}for(let ce=0,Ae=H.length;ce<Ae;ce++){const we=H[ce];me=te[ce];for(let Te=0,De=we.length;Te<De;Te++){const He=G(we[Te],me[Te],ge);b?C(He.x,He.y+x[h-1].y,x[h-1].x+J):C(He.x,He.y,d+J)}}}j(),le();function j(){const Q=r.length/3;if(f){let W=0,J=ee*W;for(let ge=0;ge<Z;ge++){const ce=U[ge];Pe(ce[2]+J,ce[1]+J,ce[0]+J)}W=h+m*2,J=ee*W;for(let ge=0;ge<Z;ge++){const ce=U[ge];Pe(ce[0]+J,ce[1]+J,ce[2]+J)}}else{for(let W=0;W<Z;W++){const J=U[W];Pe(J[2],J[1],J[0])}for(let W=0;W<Z;W++){const J=U[W];Pe(J[0]+ee*h,J[1]+ee*h,J[2]+ee*h)}}n.addGroup(Q,r.length/3-Q,0)}function le(){const Q=r.length/3;let W=0;pe(F,W),W+=F.length;for(let J=0,ge=H.length;J<ge;J++){const ce=H[J];pe(ce,W),W+=ce.length}n.addGroup(Q,r.length/3-Q,1)}function pe(Q,W){let J=Q.length;for(;--J>=0;){const ge=J;let ce=J-1;ce<0&&(ce=Q.length-1);for(let Ae=0,we=h+m*2;Ae<we;Ae++){const Te=ee*Ae,De=ee*(Ae+1),He=W+ge+Te,T=W+ce+Te,M=W+ce+De,B=W+ge+De;Re(He,T,M,B)}}}function C(Q,W,J){c.push(Q),c.push(W),c.push(J)}function Pe(Q,W,J){ae(Q),ae(W),ae(J);const ge=r.length/3,ce=y.generateTopUV(n,r,ge-3,ge-2,ge-1);Me(ce[0]),Me(ce[1]),Me(ce[2])}function Re(Q,W,J,ge){ae(Q),ae(W),ae(ge),ae(W),ae(J),ae(ge);const ce=r.length/3,Ae=y.generateSideWallUV(n,r,ce-6,ce-3,ce-2,ce-1);Me(Ae[0]),Me(Ae[1]),Me(Ae[3]),Me(Ae[1]),Me(Ae[2]),Me(Ae[3])}function ae(Q){r.push(c[Q*3+0]),r.push(c[Q*3+1]),r.push(c[Q*3+2])}function Me(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return $f(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new So[r.type]().fromJSON(r)),new cs(n,e.options)}}const Zf={generateTopUV:function(i,e,t,n,r){const s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new he(s,o),new he(a,c),new he(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],d=e[n*3+2],f=e[r*3],p=e[r*3+1],_=e[r*3+2],g=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new he(o,1-c),new he(l,1-d),new he(f,1-_),new he(g,1-u)]:[new he(a,1-c),new he(h,1-d),new he(p,1-_),new he(m,1-u)]}};function $f(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class hs extends Mt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],d=new R,f=new R,p=[],_=[],g=[],m=[];for(let u=0;u<=n;u++){const y=[],x=u/n;let b=0;u===0&&o===0?b=.5/t:u===n&&c===Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const w=E/t;d.x=-e*Math.cos(r+w*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+w*s)*Math.sin(o+x*a),_.push(d.x,d.y,d.z),f.copy(d).normalize(),g.push(f.x,f.y,f.z),m.push(w+b,1-x),y.push(l++)}h.push(y)}for(let u=0;u<n;u++)for(let y=0;y<t;y++){const x=h[u][y+1],b=h[u][y],E=h[u+1][y],w=h[u+1][y+1];(u!==0||o>0)&&p.push(x,b,w),(u!==n-1||c<Math.PI)&&p.push(b,E,w)}this.setIndex(p),this.setAttribute("position",new it(_,3)),this.setAttribute("normal",new it(g,3)),this.setAttribute("uv",new it(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class us extends $n{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ia,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const Po={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Kf{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){const d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){const p=l[d],_=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null}}}const Jf=new Kf;class Ro{constructor(e){this.manager=e!==void 0?e:Jf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const $t={};class Qf extends Error{constructor(e,t){super(e),this.response=t}}class ep extends Ro{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Po.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if($t[e]!==void 0){$t[e].push({onLoad:t,onProgress:n,onError:r});return}$t[e]=[],$t[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=$t[e],d=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=f?parseInt(f):0,_=p!==0;let g=0;const m=new ReadableStream({start(u){y();function y(){d.read().then(({done:x,value:b})=>{if(x)u.close();else{g+=b.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:p});for(let w=0,q=h.length;w<q;w++){const I=h[w];I.onProgress&&I.onProgress(E)}u.enqueue(b),y()}})}}});return new Response(m)}else throw new Qf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return l.json();default:if(a===void 0)return l.text();{const d=/charset="?([^;"\s]*)"?/i.exec(a),f=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(f);return l.arrayBuffer().then(_=>p.decode(_))}}}).then(l=>{Po.add(e,l);const h=$t[e];delete $t[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=$t[e];if(h===void 0)throw this.manager.itemError(e),l;delete $t[e];for(let d=0,f=h.length;d<f;d++){const p=h[d];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Co extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ds=new $e,Lo=new R,qo=new R;class tp{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Lo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Lo),qo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qo),t.updateMatrixWorld(),ds.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ds),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ds)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Do=new $e,yi=new R,fs=new R;class np extends tp{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),yi.setFromMatrixPosition(e.matrixWorld),n.position.copy(yi),fs.copy(n.position),fs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(fs),n.updateMatrixWorld(),r.makeTranslation(-yi.x,-yi.y,-yi.z),Do.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Do)}}class Uo extends Co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new np}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ip extends Co{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Io{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class rp extends Qr{constructor(e=10,t=10,n=4473924,r=8947848){n=new ke(n),r=new ke(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let f=0,p=0,_=-a;f<=t;f++,_+=o){c.push(-a,0,_,a,0,_),c.push(_,0,-a,_,0,a);const g=f===s?n:r;g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3,g.toArray(l,p),p+=3}const h=new Mt;h.setAttribute("position",new it(c,3)),h.setAttribute("color",new it(l,3));const d=new Qi({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sp{constructor(){this.type="ShapePath",this.color=new ke,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new as,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,o){return this.currentPath.bezierCurveTo(e,t,n,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(u){const y=[];for(let x=0,b=u.length;x<b;x++){const E=u[x],w=new nr;w.curves=E.curves,y.push(w)}return y}function n(u,y){const x=y.length;let b=!1;for(let E=x-1,w=0;w<x;E=w++){let q=y[E],I=y[w],v=I.x-q.x,A=I.y-q.y;if(Math.abs(A)>Number.EPSILON){if(A<0&&(q=y[w],v=-v,I=y[E],A=-A),u.y<q.y||u.y>I.y)continue;if(u.y===q.y){if(u.x===q.x)return!0}else{const H=A*(u.x-q.x)-v*(u.y-q.y);if(H===0)return!0;if(H<0)continue;b=!b}}else{if(u.y!==q.y)continue;if(I.x<=u.x&&u.x<=q.x||q.x<=u.x&&u.x<=I.x)return!0}}return b}const r=li.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const l=[];if(s.length===1)return a=s[0],c=new nr,c.curves=a.curves,l.push(c),l;let h=!r(s[0].getPoints());h=e?!h:h;const d=[],f=[];let p=[],_=0,g;f[_]=void 0,p[_]=[];for(let u=0,y=s.length;u<y;u++)a=s[u],g=a.getPoints(),o=r(g),o=e?!o:o,o?(!h&&f[_]&&_++,f[_]={s:new nr,p:g},f[_].s.curves=a.curves,h&&_++,p[_]=[]):p[_].push({h:a,p:g[0]});if(!f[0])return t(s);if(f.length>1){let u=!1,y=0;for(let x=0,b=f.length;x<b;x++)d[x]=[];for(let x=0,b=f.length;x<b;x++){const E=p[x];for(let w=0;w<E.length;w++){const q=E[w];let I=!0;for(let v=0;v<f.length;v++)n(q.p,f[v].p)&&(x!==v&&y++,I?(I=!1,d[v].push(q)):u=!0);I&&d[x].push(q)}}y>0&&u===!1&&(p=d)}let m;for(let u=0,y=f.length;u<y;u++){c=f[u].s,l.push(c),m=p[u];for(let x=0,b=m.length;x<b;x++)c.holes.push(m[x].h)}return l}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:on}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=on);class ap extends Ro{constructor(e){super(e)}load(e,t,n,r){const s=this,o=new ep(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const c=s.parse(JSON.parse(a));t&&t(c)},n,r)}parse(e){return new op(e)}}class op{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],r=lp(e,t,this.data);for(let s=0,o=r.length;s<o;s++)n.push(...r[s].toShapes());return n}}function lp(i,e,t){const n=Array.from(i),r=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*r,o=[];let a=0,c=0;for(let l=0;l<n.length;l++){const h=n[l];if(h===`
`)a=0,c-=s;else{const d=cp(h,r,a,c,t);a+=d.offsetX,o.push(d.path)}}return o}function cp(i,e,t,n,r){const s=r.glyphs[i]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+i+'" does not exists in font family '+r.familyName+".");return}const o=new sp;let a,c,l,h,d,f,p,_;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,u=g.length;m<u;)switch(g[m++]){case"m":a=g[m++]*e+t,c=g[m++]*e+n,o.moveTo(a,c);break;case"l":a=g[m++]*e+t,c=g[m++]*e+n,o.lineTo(a,c);break;case"q":l=g[m++]*e+t,h=g[m++]*e+n,d=g[m++]*e+t,f=g[m++]*e+n,o.quadraticCurveTo(d,f,l,h);break;case"b":l=g[m++]*e+t,h=g[m++]*e+n,d=g[m++]*e+t,f=g[m++]*e+n,p=g[m++]*e+t,_=g[m++]*e+n,o.bezierCurveTo(d,f,p,_,l,h);break}}return{offsetX:s.ha*e,path:o}}class hp extends cs{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const r=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(r,t)}this.type="TextGeometry"}}const up={glyphs:{ο:{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "},S:{x_min:0,x_max:788,ha:890,o:"m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "},"¦":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},"/":{x_min:183.25,x_max:608.328125,ha:792,o:"m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "},Τ:{x_min:-.4375,x_max:777.453125,ha:839,o:"m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "},y:{x_min:0,x_max:684.78125,ha:771,o:"m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "},Π:{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "},ΐ:{x_min:-111,x_max:339,ha:361,o:"m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "},g:{x_min:0,x_max:686,ha:838,o:"m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "},"²":{x_min:0,x_max:442,ha:539,o:"m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "},"–":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},Κ:{x_min:0,x_max:819.5625,ha:893,o:"m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},ƒ:{x_min:-46.265625,x_max:392,ha:513,o:"m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "},e:{x_min:0,x_max:714,ha:813,o:"m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "},ό:{x_min:0,x_max:712,ha:815,o:"m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "},J:{x_min:0,x_max:588,ha:699,o:"m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "},"»":{x_min:-1,x_max:503,ha:601,o:"m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "},"©":{x_min:-3,x_max:1008,ha:1106,o:"m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "},ώ:{x_min:0,x_max:922,ha:1030,o:"m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "},"^":{x_min:193.0625,x_max:598.609375,ha:792,o:"m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "},"«":{x_min:0,x_max:507.203125,ha:604,o:"m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "},D:{x_min:0,x_max:828,ha:935,o:"m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "},"∙":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},ÿ:{x_min:0,x_max:47,ha:125,o:"m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "},w:{x_min:0,x_max:1009.71875,ha:1100,o:"m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "},$:{x_min:0,x_max:700,ha:793,o:"m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "},"\\":{x_min:-.015625,x_max:425.0625,ha:522,o:"m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "},µ:{x_min:0,x_max:697.21875,ha:747,o:"m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "},Ι:{x_min:42,x_max:181,ha:297,o:"m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "},Ύ:{x_min:0,x_max:1144.5,ha:1214,o:"m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"’":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},Ν:{x_min:0,x_max:801,ha:915,o:"m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "},"-":{x_min:8.71875,x_max:350.390625,ha:478,o:"m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "},Q:{x_min:0,x_max:968,ha:1072,o:"m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "},ς:{x_min:1,x_max:676.28125,ha:740,o:"m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "},M:{x_min:0,x_max:954,ha:1067,o:"m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "},Ψ:{x_min:0,x_max:1006,ha:1094,o:"m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "},C:{x_min:0,x_max:886,ha:944,o:"m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "},"!":{x_min:0,x_max:138,ha:236,o:"m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "},"{":{x_min:0,x_max:480.5625,ha:578,o:"m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "},X:{x_min:-.015625,x_max:854.15625,ha:940,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "},"#":{x_min:0,x_max:963.890625,ha:1061,o:"m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "},ι:{x_min:42,x_max:284,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "},Ά:{x_min:0,x_max:906.953125,ha:982,o:"m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},")":{x_min:0,x_max:318,ha:415,o:"m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "},ε:{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "},Δ:{x_min:0,x_max:952.78125,ha:1028,o:"m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "},"}":{x_min:0,x_max:481,ha:578,o:"m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "},"‰":{x_min:-3,x_max:1672,ha:1821,o:"m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "},a:{x_min:0,x_max:698.609375,ha:794,o:"m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "},"—":{x_min:0,x_max:941.671875,ha:1039,o:"m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "},"=":{x_min:8.71875,x_max:780.953125,ha:792,o:"m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "},N:{x_min:0,x_max:801,ha:914,o:"m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "},ρ:{x_min:0,x_max:712,ha:797,o:"m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "},2:{x_min:59,x_max:731,ha:792,o:"m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "},"¯":{x_min:0,x_max:941.671875,ha:938,o:"m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "},Z:{x_min:0,x_max:779,ha:849,o:"m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "},u:{x_min:0,x_max:617,ha:729,o:"m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "},k:{x_min:0,x_max:612.484375,ha:697,o:"m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "},Η:{x_min:0,x_max:803,ha:917,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},Α:{x_min:0,x_max:906.953125,ha:985,o:"m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "},s:{x_min:0,x_max:604,ha:697,o:"m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "},B:{x_min:0,x_max:778,ha:876,o:"m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "},"…":{x_min:0,x_max:614,ha:708,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "},"?":{x_min:0,x_max:607,ha:704,o:"m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "},H:{x_min:0,x_max:803,ha:915,o:"m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "},ν:{x_min:0,x_max:675,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "},c:{x_min:1,x_max:701.390625,ha:775,o:"m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "},"¶":{x_min:0,x_max:566.671875,ha:678,o:"m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "},β:{x_min:0,x_max:660,ha:745,o:"m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "},Μ:{x_min:0,x_max:954,ha:1068,o:"m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "},Ό:{x_min:.109375,x_max:1120,ha:1217,o:"m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},Ή:{x_min:0,x_max:1158,ha:1275,o:"m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},"•":{x_min:0,x_max:663.890625,ha:775,o:"m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "},"¥":{x_min:.1875,x_max:819.546875,ha:886,o:"m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "},"(":{x_min:0,x_max:318.0625,ha:415,o:"m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "},U:{x_min:0,x_max:796,ha:904,o:"m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "},γ:{x_min:.5,x_max:744.953125,ha:822,o:"m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "},α:{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "},F:{x_min:0,x_max:683.328125,ha:717,o:"m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "},"­":{x_min:0,x_max:705.5625,ha:803,o:"m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "},":":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},Χ:{x_min:0,x_max:854.171875,ha:935,o:"m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "},"*":{x_min:116,x_max:674,ha:792,o:"m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "},"†":{x_min:0,x_max:777,ha:835,o:"m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "},"°":{x_min:0,x_max:347,ha:444,o:"m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "},V:{x_min:0,x_max:862.71875,ha:940,o:"m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "},Ξ:{x_min:0,x_max:734.71875,ha:763,o:"m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "}," ":{x_min:0,x_max:0,ha:853},Ϋ:{x_min:.328125,x_max:819.515625,ha:889,o:"m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "},0:{x_min:73,x_max:715,ha:792,o:"m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "},"”":{x_min:0,x_max:347,ha:454,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "},"@":{x_min:0,x_max:1260,ha:1357,o:"m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "},Ί:{x_min:0,x_max:499,ha:613,o:"m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "},i:{x_min:14,x_max:136,ha:275,o:"m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "},Β:{x_min:0,x_max:778,ha:877,o:"m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "},υ:{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "},"]":{x_min:0,x_max:275,ha:372,o:"m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "},m:{x_min:0,x_max:1019,ha:1128,o:"m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "},χ:{x_min:8.328125,x_max:780.5625,ha:815,o:"m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "},8:{x_min:55,x_max:736,ha:792,o:"m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "},ί:{x_min:42,x_max:326.71875,ha:361,o:"m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "},Ζ:{x_min:0,x_max:779.171875,ha:850,o:"m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "},R:{x_min:0,x_max:781.953125,ha:907,o:"m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "},o:{x_min:0,x_max:713,ha:821,o:"m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "},5:{x_min:54.171875,x_max:738,ha:792,o:"m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "},7:{x_min:58.71875,x_max:730.953125,ha:792,o:"m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "},K:{x_min:0,x_max:819.46875,ha:906,o:"m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "},",":{x_min:0,x_max:142,ha:239,o:"m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "},d:{x_min:0,x_max:683,ha:796,o:"m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "},"¨":{x_min:-109,x_max:247,ha:232,o:"m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "},E:{x_min:0,x_max:736.109375,ha:789,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},Y:{x_min:0,x_max:820,ha:886,o:"m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "},'"':{x_min:0,x_max:299,ha:396,o:"m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"‹":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"„":{x_min:0,x_max:364,ha:467,o:"m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "},δ:{x_min:1,x_max:710,ha:810,o:"m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "},έ:{x_min:0,x_max:634.71875,ha:714,o:"m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "},ω:{x_min:0,x_max:922,ha:1031,o:"m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "},"´":{x_min:0,x_max:96,ha:251,o:"m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "},"±":{x_min:11,x_max:781,ha:792,o:"m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "},"|":{x_min:343,x_max:449,ha:792,o:"m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "},ϋ:{x_min:0,x_max:617,ha:725,o:"m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "},"§":{x_min:0,x_max:593,ha:690,o:"m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "},b:{x_min:0,x_max:685,ha:783,o:"m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "},q:{x_min:0,x_max:683,ha:876,o:"m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "},Ω:{x_min:-.171875,x_max:969.5625,ha:1068,o:"m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "},ύ:{x_min:0,x_max:617,ha:725,o:"m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "},z:{x_min:-.015625,x_max:613.890625,ha:697,o:"m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "},"™":{x_min:0,x_max:894,ha:1e3,o:"m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "},ή:{x_min:.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "},Θ:{x_min:0,x_max:960,ha:1056,o:"m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "},"®":{x_min:-3,x_max:1008,ha:1106,o:"m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "},"~":{x_min:0,x_max:833,ha:931,o:"m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "},Ε:{x_min:0,x_max:736.21875,ha:778,o:"m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "},"³":{x_min:0,x_max:450,ha:547,o:"m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "},"[":{x_min:0,x_max:273.609375,ha:371,o:"m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "},L:{x_min:0,x_max:645.828125,ha:696,o:"m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "},σ:{x_min:0,x_max:803.390625,ha:894,o:"m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "},ζ:{x_min:0,x_max:573,ha:642,o:"m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "},θ:{x_min:0,x_max:674,ha:778,o:"m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "},Ο:{x_min:0,x_max:958,ha:1054,o:"m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "},Γ:{x_min:0,x_max:705.28125,ha:749,o:"m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "}," ":{x_min:0,x_max:0,ha:375},"%":{x_min:-3,x_max:1089,ha:1186,o:"m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "},P:{x_min:0,x_max:726,ha:806,o:"m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "},Έ:{x_min:0,x_max:1078.21875,ha:1118,o:"m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "},Ώ:{x_min:.125,x_max:1136.546875,ha:1235,o:"m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "},_:{x_min:0,x_max:705.5625,ha:803,o:"m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "},Ϊ:{x_min:-110,x_max:246,ha:275,o:"m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "},"+":{x_min:23,x_max:768,ha:792,o:"m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "},"½":{x_min:0,x_max:1050,ha:1149,o:"m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "},Ρ:{x_min:0,x_max:720,ha:783,o:"m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "},"'":{x_min:0,x_max:139,ha:236,o:"m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "},ª:{x_min:0,x_max:350,ha:397,o:"m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "},"΅":{x_min:0,x_max:450,ha:553,o:"m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "},T:{x_min:0,x_max:777,ha:835,o:"m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "},Φ:{x_min:0,x_max:915,ha:997,o:"m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "},"⁋":{x_min:0,x_max:0,ha:694},j:{x_min:-77.78125,x_max:167,ha:349,o:"m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "},Σ:{x_min:0,x_max:756.953125,ha:819,o:"m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "},1:{x_min:215.671875,x_max:574,ha:792,o:"m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "},"›":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},"<":{x_min:17.984375,x_max:773.609375,ha:792,o:"m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "},"£":{x_min:0,x_max:704.484375,ha:801,o:"m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "},t:{x_min:0,x_max:367,ha:458,o:"m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "},"¬":{x_min:0,x_max:706,ha:803,o:"m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "},λ:{x_min:0,x_max:750,ha:803,o:"m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "},W:{x_min:0,x_max:1263.890625,ha:1351,o:"m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "},">":{x_min:18.0625,x_max:774,ha:792,o:"m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "},v:{x_min:0,x_max:675.15625,ha:761,o:"m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "},τ:{x_min:.28125,x_max:644.5,ha:703,o:"m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "},ξ:{x_min:0,x_max:624.9375,ha:699,o:"m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "},"&":{x_min:-3,x_max:894.25,ha:992,o:"m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "},Λ:{x_min:0,x_max:862.5,ha:942,o:"m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "},I:{x_min:41,x_max:180,ha:293,o:"m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "},G:{x_min:0,x_max:921,ha:1011,o:"m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "},ΰ:{x_min:0,x_max:617,ha:725,o:"m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "},"`":{x_min:0,x_max:138.890625,ha:236,o:"m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "},"·":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "},Υ:{x_min:.328125,x_max:819.515625,ha:889,o:"m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "},r:{x_min:0,x_max:355.5625,ha:432,o:"m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "},x:{x_min:0,x_max:675,ha:764,o:"m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "},μ:{x_min:0,x_max:696.609375,ha:747,o:"m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "},h:{x_min:0,x_max:615,ha:724,o:"m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "},".":{x_min:0,x_max:142,ha:239,o:"m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "},φ:{x_min:-2,x_max:878,ha:974,o:"m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "},";":{x_min:0,x_max:142,ha:239,o:"m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "},f:{x_min:0,x_max:378,ha:472,o:"m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "},"“":{x_min:1,x_max:348.21875,ha:454,o:"m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "},A:{x_min:.03125,x_max:906.953125,ha:1008,o:"m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "},6:{x_min:53,x_max:739,ha:792,o:"m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "},"‘":{x_min:1,x_max:139.890625,ha:236,o:"m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "},ϊ:{x_min:-70,x_max:283,ha:361,o:"m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "},π:{x_min:-.21875,x_max:773.21875,ha:857,o:"m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "},ά:{x_min:0,x_max:765.5625,ha:809,o:"m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "},O:{x_min:0,x_max:958,ha:1057,o:"m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "},n:{x_min:0,x_max:615,ha:724,o:"m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "},3:{x_min:54,x_max:737,ha:792,o:"m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "},9:{x_min:53,x_max:739,ha:792,o:"m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "},l:{x_min:41,x_max:166,ha:279,o:"m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "},"¤":{x_min:40.09375,x_max:728.796875,ha:825,o:"m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "},κ:{x_min:0,x_max:632.328125,ha:679,o:"m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "},4:{x_min:48,x_max:742.453125,ha:792,o:"m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "},p:{x_min:0,x_max:685,ha:786,o:"m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "},"‡":{x_min:0,x_max:777,ha:835,o:"m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "},ψ:{x_min:0,x_max:808,ha:907,o:"m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "},η:{x_min:.78125,x_max:697,ha:810,o:"m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "}},cssFontWeight:"normal",ascender:1189,underlinePosition:-100,cssFontStyle:"normal",boundingBox:{yMin:-334,xMin:-111,yMax:1189,xMax:1672},resolution:1e3,original_font_information:{postscript_name:"Helvetiker-Regular",version_string:"Version 1.00 2004 initial release",vendor_url:"http://www.magenta.gr/",full_font_name:"Helvetiker",font_family_name:"Helvetiker",copyright:"Copyright (c) Μagenta ltd, 2004",description:"",trademark:"",designer:"",designer_url:"",unique_font_identifier:"Μagenta ltd:Helvetiker:22-10-104",license_url:"http://www.ellak.gr/fonts/MgOpen/license.html",license_description:`Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
\r
Permission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license ("Fonts") and associated documentation files (the "Font Software"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r
\r
The above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r
\r
The Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word "MgOpen", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r
\r
This License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the "MgOpen" name.\r
\r
The Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r
\r
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`,manufacturer_name:"Μagenta ltd",font_sub_family_name:"Regular"},descender:-334,familyName:"Helvetiker",lineHeight:1522,underlineThickness:50},No={type:"change"},ps={type:"start"},Fo={type:"end"};class dp extends pn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new R,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ln.ROTATE,MIDDLE:Ln.DOLLY,RIGHT:Ln.PAN},this.touches={ONE:qn.ROTATE,TWO:qn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",De),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",De),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(No),n.update(),s=r.NONE},this.update=function(){const P=new R,$=new _n().setFromUnitVectors(e.up,new R(0,1,0)),O=$.clone().invert(),fe=new R,ve=new _n,Ee=2*Math.PI;return function(){const Se=n.object.position;P.copy(Se).sub(n.target),P.applyQuaternion($),a.setFromVector3(P),n.autoRotate&&s===r.NONE&&v(q()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Le=n.minAzimuthAngle,Fe=n.maxAzimuthAngle;return isFinite(Le)&&isFinite(Fe)&&(Le<-Math.PI?Le+=Ee:Le>Math.PI&&(Le-=Ee),Fe<-Math.PI?Fe+=Ee:Fe>Math.PI&&(Fe-=Ee),Le<=Fe?a.theta=Math.max(Le,Math.min(Fe,a.theta)):a.theta=a.theta>(Le+Fe)/2?Math.max(Le,a.theta):Math.min(Fe,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),P.setFromSpherical(a),P.applyQuaternion(O),Se.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),l=1,d||fe.distanceToSquared(n.object.position)>o||8*(1-ve.dot(n.object.quaternion))>o?(n.dispatchEvent(No),fe.copy(n.object.position),ve.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",M),n.domElement.removeEventListener("pointerdown",J),n.domElement.removeEventListener("pointercancel",ce),n.domElement.removeEventListener("wheel",Te),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",ce),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",De),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Io,c=new Io;let l=1;const h=new R;let d=!1;const f=new he,p=new he,_=new he,g=new he,m=new he,u=new he,y=new he,x=new he,b=new he,E=[],w={};function q(){return 2*Math.PI/60/60*n.autoRotateSpeed}function I(){return Math.pow(.95,n.zoomSpeed)}function v(P){c.theta-=P}function A(P){c.phi-=P}const H=function(){const P=new R;return function(O,fe){P.setFromMatrixColumn(fe,0),P.multiplyScalar(-O),h.add(P)}}(),ne=function(){const P=new R;return function(O,fe){n.screenSpacePanning===!0?P.setFromMatrixColumn(fe,1):(P.setFromMatrixColumn(fe,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(O),h.add(P)}}(),U=function(){const P=new R;return function(O,fe){const ve=n.domElement;if(n.object.isPerspectiveCamera){const Ee=n.object.position;P.copy(Ee).sub(n.target);let _e=P.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),H(2*O*_e/ve.clientHeight,n.object.matrix),ne(2*fe*_e/ve.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(H(O*(n.object.right-n.object.left)/n.object.zoom/ve.clientWidth,n.object.matrix),ne(fe*(n.object.top-n.object.bottom)/n.object.zoom/ve.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function F(P){n.object.isPerspectiveCamera?l/=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function G(P){n.object.isPerspectiveCamera?l*=P:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/P)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ee(P){f.set(P.clientX,P.clientY)}function Z(P){y.set(P.clientX,P.clientY)}function X(P){g.set(P.clientX,P.clientY)}function K(P){p.set(P.clientX,P.clientY),_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;v(2*Math.PI*_.x/$.clientHeight),A(2*Math.PI*_.y/$.clientHeight),f.copy(p),n.update()}function te(P){x.set(P.clientX,P.clientY),b.subVectors(x,y),b.y>0?F(I()):b.y<0&&G(I()),y.copy(x),n.update()}function me(P){m.set(P.clientX,P.clientY),u.subVectors(m,g).multiplyScalar(n.panSpeed),U(u.x,u.y),g.copy(m),n.update()}function oe(P){P.deltaY<0?G(I()):P.deltaY>0&&F(I()),n.update()}function z(P){let $=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?v(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?v(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):U(-n.keyPanSpeed,0),$=!0;break}$&&(P.preventDefault(),n.update())}function j(){if(E.length===1)f.set(E[0].pageX,E[0].pageY);else{const P=.5*(E[0].pageX+E[1].pageX),$=.5*(E[0].pageY+E[1].pageY);f.set(P,$)}}function le(){if(E.length===1)g.set(E[0].pageX,E[0].pageY);else{const P=.5*(E[0].pageX+E[1].pageX),$=.5*(E[0].pageY+E[1].pageY);g.set(P,$)}}function pe(){const P=E[0].pageX-E[1].pageX,$=E[0].pageY-E[1].pageY,O=Math.sqrt(P*P+$*$);y.set(0,O)}function C(){n.enableZoom&&pe(),n.enablePan&&le()}function Pe(){n.enableZoom&&pe(),n.enableRotate&&j()}function Re(P){if(E.length==1)p.set(P.pageX,P.pageY);else{const O=de(P),fe=.5*(P.pageX+O.x),ve=.5*(P.pageY+O.y);p.set(fe,ve)}_.subVectors(p,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;v(2*Math.PI*_.x/$.clientHeight),A(2*Math.PI*_.y/$.clientHeight),f.copy(p)}function ae(P){if(E.length===1)m.set(P.pageX,P.pageY);else{const $=de(P),O=.5*(P.pageX+$.x),fe=.5*(P.pageY+$.y);m.set(O,fe)}u.subVectors(m,g).multiplyScalar(n.panSpeed),U(u.x,u.y),g.copy(m)}function Me(P){const $=de(P),O=P.pageX-$.x,fe=P.pageY-$.y,ve=Math.sqrt(O*O+fe*fe);x.set(0,ve),b.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),F(b.y),y.copy(x)}function Q(P){n.enableZoom&&Me(P),n.enablePan&&ae(P)}function W(P){n.enableZoom&&Me(P),n.enableRotate&&Re(P)}function J(P){n.enabled!==!1&&(E.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",ge),n.domElement.addEventListener("pointerup",ce)),B(P),P.pointerType==="touch"?He(P):Ae(P))}function ge(P){n.enabled!==!1&&(P.pointerType==="touch"?T(P):we(P))}function ce(P){ie(P),E.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",ge),n.domElement.removeEventListener("pointerup",ce)),n.dispatchEvent(Fo),s=r.NONE}function Ae(P){let $;switch(P.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ln.DOLLY:if(n.enableZoom===!1)return;Z(P),s=r.DOLLY;break;case Ln.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;X(P),s=r.PAN}else{if(n.enableRotate===!1)return;ee(P),s=r.ROTATE}break;case Ln.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;ee(P),s=r.ROTATE}else{if(n.enablePan===!1)return;X(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ps)}function we(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;K(P);break;case r.DOLLY:if(n.enableZoom===!1)return;te(P);break;case r.PAN:if(n.enablePan===!1)return;me(P);break}}function Te(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(ps),oe(P),n.dispatchEvent(Fo))}function De(P){n.enabled===!1||n.enablePan===!1||z(P)}function He(P){switch(re(P),E.length){case 1:switch(n.touches.ONE){case qn.ROTATE:if(n.enableRotate===!1)return;j(),s=r.TOUCH_ROTATE;break;case qn.PAN:if(n.enablePan===!1)return;le(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case qn.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;C(),s=r.TOUCH_DOLLY_PAN;break;case qn.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(ps)}function T(P){switch(re(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;ae(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Q(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;W(P),n.update();break;default:s=r.NONE}}function M(P){n.enabled!==!1&&P.preventDefault()}function B(P){E.push(P)}function ie(P){delete w[P.pointerId];for(let $=0;$<E.length;$++)if(E[$].pointerId==P.pointerId){E.splice($,1);return}}function re(P){let $=w[P.pointerId];$===void 0&&($=new he,w[P.pointerId]=$),$.set(P.pageX,P.pageY)}function de(P){const $=P.pointerId===E[0].pointerId?E[1]:E[0];return w[$.pointerId]}n.domElement.addEventListener("contextmenu",M),n.domElement.addEventListener("pointerdown",J),n.domElement.addEventListener("pointercancel",ce),n.domElement.addEventListener("wheel",Te,{passive:!1}),this.update()}}const Oo=6e5;let Kt,Jt,ms,ar=0,or=0,Bo=[];function fp(){return Bo.join(`
`)}function pp(){Jt=new Mt,Jt.name="travel_geom",ar=0;const i=new Qi({vertexColors:!1,color:15352968,opacity:.8,transparent:!0,name:"travel",linewidth:20,alphaToCoverage:!0});return Jt.setAttribute("position",new it(Oo,3)),Jt.attributes.position.usage=aa,Jt.setDrawRange(0,0),new Qr(Jt,i)}function mp(){Kt=new Mt,or=0,Kt.name="extrude_geom";const i=new Qi({vertexColors:!1,color:4491498,opacity:.7,transparent:!0,name:"extrude",linewidth:20,fog:!1,alphaToCoverage:!0});return Kt.setAttribute("position",new it(Oo,3)),Kt.attributes.position.usage=aa,Kt.setDrawRange(0,0),new Qr(Kt,i)}function _p({radius:i}={radius:2}){const e=new hs(i,16,12),t=new zr({color:16777045});return ms=new Tt(e,t),ms}async function gp(i){if(Number.isNaN(i))throw new Error(`Bad non-numeric argument to delay for visualiser: ${JSON.stringify(i)}`);return i>0&&await new Promise(e=>setTimeout(e,Math.round(i))),0}function xp({x:i,y:e,z:t,delay:n,debug:r}={delay:!1,debug:!1}){return{printEvent:async({type:s,newPosition:o,oldPosition:a,speed:c,moveTime:l,totalMoveTime:h,layerHeight:d,length:f})=>{switch(r&&console.log(`PRINT EVENT: ${s},
          old: ${JSON.stringify(a)},
          new: ${JSON.stringify(o)},
          speed: ${c},
          moveTime: ${l},
          totalMoveTime: ${h},
          layerHeight: ${d},
          length: ${f}`),s){case"extrude":{if(!Kt)return;const p=Kt.attributes.position;p.setXYZ(or++,i(a.x),e(a.y),t(a.z)),p.setXYZ(or++,i(o.x),e(o.y),t(o.z)),Kt.setDrawRange(0,or-1),p.needsUpdate=!0,ms.position.set(i(o.x),e(o.y),t(o.z))}break;case"travel":{if(!Jt)return;const p=Jt.attributes.position;p.setXYZ(ar++,i(a.x),e(a.y),t(a.z)),p.setXYZ(ar++,i(o.x),e(o.y),t(o.z)),Jt.setDrawRange(0,ar-1),p.needsUpdate=!0}break;case"retract":console.log("RETRACT!");break;case"unretract":console.log("RETRACT!");break}n&&await gp(l)},errorEvent:s=>console.error(`LivePrinter Error Event: ${s}`),gcodeEvent:async s=>{Bo.push(s)}}}var vp=Object.defineProperty,Mp=(i,e,t)=>e in i?vp(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,zo=(i,e,t)=>Mp(i,typeof e!="symbol"?e+"":e,t);class Go{static debug(e){}static info(e){}static warning(e){}static error(e){console.error(e)}}zo(Go,"LOG_LEVEL",{error:0,warning:1,info:2,debug:3}),zo(Go,"level",0),String.prototype.reverse=function(){const i=/([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g,e=/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;let t=this.replace(i,function(s,o,a){return a.reverse()+o}).replace(e,"$2$1"),n="",r=t.length;for(;r--;)n+=t.charAt(r);return n};var Ho="C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" "),Vo=function(i){return typeof i!="string"?Ho.slice():Ho.filter(function(e){var t=e[1]||" ";return i.indexOf(t)!==-1})};Vo(" #"),Vo(" b");var Sp=/^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;function Ep(i){typeof i!="string"&&(i="");var e=Sp.exec(i);return[e[1].toUpperCase(),e[2].replace(/x/g,"##"),e[3],e[4]]}var yp=Object.freeze({pc:null,name:null,step:null,alt:null,oct:null,octStr:null,chroma:null,midi:null,freq:null}),ko=[0,2,4,5,7,9,11],Tp=function(i){var e=Ep(i);if(e[0]===""||e[3]!=="")return yp;var t=e[0],n=e[1],r=e[2],s={letter:t,acc:n,octStr:r,pc:t+n,name:t+n+r,step:(t.charCodeAt(0)+3)%7,alt:n[0]==="b"?-n.length:n.length,oct:r.length?+r:null,chroma:0,midi:null,freq:null};return s.chroma=(ko[s.step]+s.alt+120)%12,s.midi=s.oct!==null?ko[s.step]+s.alt+12*(s.oct+1):null,s.freq=wp(s.midi),Object.freeze(s)},bp=function(i,e){return e===void 0&&(e={}),function(t){return e[t]||(e[t]=i(t))}},Ap=bp(Tp),wp=function(i,e){return e===void 0&&(e=440),typeof i=="number"?Math.pow(2,(i-69)/12)*e:null},Pp=function(i){return Ap(i).chroma},Rp="([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})",Cp="(AA|A|P|M|m|d|dd)([-+]?\\d+)",Lp=new RegExp("^"+Rp+"|"+Cp+"$"),Wo=[0,2,4,5,7,9,11],qp="PMMPPMM",Dp=function(i){var e=Lp.exec(""+i);return e===null?null:e[1]?[e[1],e[2]]:[e[4],e[3]]},_s=Object.freeze({name:null,num:null,q:null,step:null,alt:null,dir:null,type:null,simple:null,semitones:null,chroma:null,oct:null}),Up=function(i,e){return e==="M"&&i==="M"||e==="P"&&i==="P"?0:e==="m"&&i==="M"?-1:/^A+$/.test(e)?e.length:/^d+$/.test(e)?i==="P"?-e.length:-e.length-1:null},Ip=function(i){return(Math.abs(i)-1)%7},Np=function(i){var e=Dp(i);if(e===null)return _s;var t={num:0,q:"d",name:"",type:"M",step:0,dir:-1,simple:1,alt:0,oct:0,semitones:0,chroma:0,ic:0};return t.num=+e[0],t.q=e[1],t.step=Ip(t.num),t.type=qp[t.step],t.type==="M"&&t.q==="P"?_s:(t.name=""+t.num+t.q,t.dir=t.num<0?-1:1,t.simple=t.num===8||t.num===-8?t.num:t.dir*(t.step+1),t.alt=Up(t.type,t.q),t.oct=Math.floor((Math.abs(t.num)-1)/7),t.semitones=t.dir*(Wo[t.step]+t.alt+12*t.oct),t.chroma=(t.dir*(Wo[t.step]+t.alt)%12+12)%12,Object.freeze(t))},Xo={};function Fp(i){return typeof i!="string"?_s:Xo[i]||(Xo[i]=Np(i))}var Op=function(i){return Fp(i).chroma};const Bp=["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"],zp=["1P 2M 3M 4A 5P 6M 7M"],Gp=["1P 2M 3M 4P 5P 6M 7M",["ionian"]],Hp=["1P 2M 3M 4P 5P 6M 7m",["dominant"]],Vp=["1P 2M 3m 4P 5P 6M 7m"],kp=["1P 2M 3m 4P 5P 6m 7m",["minor"]],Wp=["1P 2m 3m 4P 5P 6m 7m"],Xp=["1P 2m 3m 4P 5d 6m 7m"],Yp=["1P 2m 3m 3M 5d 6m 7m",["super locrian","diminished whole tone","pomeroy"]],jp=["1P 2M 3m 4P 5d 6m 6M 7M",["whole-half diminished"]],Zp=["1P 2m 4P 5d 7m"],$p=["1P 2M 3m 5P 6m"],Kp=["1P 2m 4P 5P 6m"],Jp=["1P 2m 3m 5P 6m"],Qp=["1P 2M 3M 4A 6M 7m"],em=["1P 2M 4P 5P 6M"],tm=["1P 2m 3M 5P 6M"],nm=["1P 2M 4P 5P 6M 7m"],im=["1P 2A 3M 5P 5A 7M"],rm=["1P 2m 3m 4P 5P 6m 7M"],sm=["1P 2M 4P 5P 7m"],am=["1P 2m 3M 4P 5d 6M 7m"],om=["1P 2m 3m 3M 4A 5P 7m"],lm=["1P 2m 3m 4P 5P 6m 7M"],cm=["1P 2m 3M 4P 5d 6m 7M"],hm=["1P 2M 3M 4P 5P 6M 7m 7M"],um=["1P 2m 3M 5d 6m 7m 7M"],dm=["1P 2M 3M 4P 5d 5P 6M 7M"],fm={chromatic:Bp,lydian:zp,major:Gp,mixolydian:Hp,dorian:Vp,aeolian:kp,phrygian:Wp,locrian:Xp,"melodic minor":["1P 2M 3m 4P 5P 6M 7M"],"melodic minor second mode":["1P 2m 3m 4P 5P 6M 7m"],"lydian augmented":["1P 2M 3M 4A 5A 6M 7M"],"lydian dominant":["1P 2M 3M 4A 5P 6M 7m",["lydian b7"]],"melodic minor fifth mode":["1P 2M 3M 4P 5P 6m 7m",["hindu","mixolydian b6M"]],"locrian #2":["1P 2M 3m 4P 5d 6m 7m",["half-diminished"]],altered:Yp,"harmonic minor":["1P 2M 3m 4P 5P 6m 7M"],"phrygian dominant":["1P 2m 3M 4P 5P 6m 7m",["spanish","phrygian major"]],"half-whole diminished":["1P 2m 3m 3M 4A 5P 6M 7m",["dominant diminished"]],diminished:jp,"major pentatonic":["1P 2M 3M 5P 6M",["pentatonic"]],"lydian pentatonic":["1P 3M 4A 5P 7M",["chinese"]],"mixolydian pentatonic":["1P 3M 4P 5P 7m",["indian"]],"locrian pentatonic":["1P 3m 4P 5d 7m",["minor seven flat five pentatonic"]],"minor pentatonic":["1P 3m 4P 5P 7m"],"minor six pentatonic":["1P 3m 4P 5P 6M"],"minor hexatonic":["1P 2M 3m 4P 5P 7M"],"flat three pentatonic":["1P 2M 3m 5P 6M",["kumoi"]],"flat six pentatonic":["1P 2M 3M 5P 6m"],"major flat two pentatonic":["1P 2m 3M 5P 6M"],"whole tone pentatonic":["1P 3M 5d 6m 7m"],"ionian pentatonic":["1P 3M 4P 5P 7M"],"lydian #5P pentatonic":["1P 3M 4A 5A 7M"],"lydian dominant pentatonic":["1P 3M 4A 5P 7m"],"minor #7M pentatonic":["1P 3m 4P 5P 7M"],"super locrian pentatonic":["1P 3m 4d 5d 7m"],"in-sen":["1P 2m 4P 5P 7m"],iwato:Zp,hirajoshi:$p,kumoijoshi:Kp,pelog:Jp,"vietnamese 1":["1P 3m 4P 5P 6m"],"vietnamese 2":["1P 3m 4P 5P 7m"],prometheus:Qp,"prometheus neopolitan":["1P 2m 3M 4A 6M 7m"],ritusen:em,scriabin:tm,piongio:nm,"major blues":["1P 2M 3m 3M 5P 6M"],"minor blues":["1P 3m 4P 5d 5P 7m",["blues"]],"composite blues":["1P 2M 3m 3M 4P 5d 5P 6M 7m"],augmented:im,"augmented heptatonic":["1P 2A 3M 4P 5P 5A 7M"],"dorian #4":["1P 2M 3m 4A 5P 6M 7m"],"lydian diminished":["1P 2M 3m 4A 5P 6M 7M"],"whole tone":["1P 2M 3M 4A 5A 7m"],"leading whole tone":["1P 2M 3M 4A 5A 7m 7M"],"lydian minor":["1P 2M 3M 4A 5P 6m 7m"],"locrian major":["1P 2M 3M 4P 5d 6m 7m",["arabian"]],neopolitan:rm,"neopolitan minor":["1P 2m 3m 4P 5P 6m 7M"],"neopolitan major":["1P 2m 3m 4P 5P 6M 7M",["dorian b2"]],"neopolitan major pentatonic":["1P 3M 4P 5d 7m"],"romanian minor":["1P 2M 3m 5d 5P 6M 7m"],"double harmonic lydian":["1P 2m 3M 4A 5P 6m 7M"],"harmonic major":["1P 2M 3M 4P 5P 6m 7M"],"double harmonic major":["1P 2m 3M 4P 5P 6m 7M",["gypsy"]],egyptian:sm,"hungarian minor":["1P 2M 3m 4A 5P 6m 7M"],"hungarian major":["1P 2A 3M 4A 5P 6M 7m"],oriental:am,"spanish heptatonic":["1P 2m 3m 3M 4P 5P 6m 7m"],flamenco:om,balinese:lm,"todi raga":["1P 2m 3m 4A 5P 6m 7M"],"malkos raga":["1P 3m 4P 6m 7m"],"kafi raga":["1P 3m 3M 4P 5P 6M 7m 7M"],"purvi raga":["1P 2m 3M 4P 4A 5P 6m 7M"],persian:cm,bebop:hm,"bebop dominant":["1P 2M 3M 4P 5P 6M 7m 7M"],"bebop minor":["1P 2M 3m 3M 4P 5P 6M 7m"],"bebop major":["1P 2M 3M 4P 5P 5A 6M 7M"],"bebop locrian":["1P 2m 3m 4P 5d 5P 6m 7m"],"minor bebop":["1P 2M 3m 4P 5P 6m 7m 7M"],"mystery #1":["1P 2m 3M 5d 6m 7m"],enigmatic:um,"minor six diminished":["1P 2M 3m 4P 5P 6m 6M 7M"],"ionian augmented":["1P 2M 3M 4P 5A 6M 7M"],"lydian #9":["1P 2m 3M 4A 5P 6M 7M"],ichikosucho:dm,"six tone symmetric":["1P 2m 3M 4P 5A 6M"]},pm=["1P 3M 5P",["Major",""]],mm=["1P 3M 5P 7M 9M 13M",["maj13","Maj13"]],_m=["1P 3M 5P 13M",["6"]],gm=["1P 3M 5P 6M 9M",["69"]],xm=["1P 3M 5P 6M 7M 9M"],vm=["1P 3M 5d 7M"],Mm=["1P 3M 6m 7M"],Sm=["1P 3M 5P 7M 9m"],Em=["1P 4P 5P 7M"],ym=["1P 3M 5P 7M 9M",["maj9","Maj9"]],Tm=["1P 3M 5d 7M 9M"],bm=["1P 4P 5P 7M 9M"],Am=["1P 3M 5P 9M",["2","add9","add2"]],wm=["1P 3M 5P 7M",["maj7","M7"]],Pm=["1P 3M 5d"],Rm=["1P 3M 13m"],Cm=["1P 2M 5P",["add9no3","sus2"]],Lm=["1P 4P 5P",["sus","sus4"]],qm=["1P 3M 5P 9m"],Dm=["1P 3m 5P"],Um=["1P 3m 5P 7m 9M 11P",["_11"]],Im=["1P 3m 7m 12d 2M 4P",["h11","_11b5"]],Nm=["1P 3m 5P 7m 9M 11P 13M",["_13"]],Fm=["1P 3m 4P 5P 13M",["_6"]],Om=["1P 3m 5P 6M 9M",["_69"]],Bm=["1P 3m 5P 7m",["minor7","_","_7"]],zm=["1P 3m 5P 7m 11P",["m7add4"]],Gm=["1P 3m 5d 7m",["half-diminished","h7","_7b5"]],Hm=["1P 3m 5P 7m 9M",["_9"]],Vm=["1P 3m 7m 12d 2M",["h9","-9b5"]],km=["1P 3m 5P 7M",["mM7","_M7"]],Wm=["1P 3m 5P 6m 7M",["mM7b6"]],Xm=["1P 3m 5P 7M 9M",["mMaj9","-M9"]],Ym=["1P 3m 5P 6m 7M 9M",["mMaj9b6"]],jm=["1P 3m 6m 7M"],Zm=["1P 3m 6m 9m"],$m=["1P 3m 5d",["mb5","dim"]],Km=["1P 3m 5d 13M",["diminished","m6b5","dim7"]],Jm=["1P 3m 5d 6M 7M"],Qm=["1P 3m 5d 7M"],e0=["1P 2M 4P 5P",["sus4add9"]],t0=["1P 3m 4P 5P"],n0=["1P 3m 5P 9M"],i0={4:["1P 4P 7m 10m",["quartal"]],5:["1P 5P"],7:["1P 3M 5P 7m",["Dominant","Dom"]],9:["1P 3M 5P 7m 9M",["79"]],11:["1P 5P 7m 9M 11P"],13:["1P 3M 5P 7m 9M 13M",["13_"]],64:["5P 8P 10M"],M:pm,"M#5":["1P 3M 5A",["augmented","maj#5","Maj#5","+","aug"]],"M#5add9":["1P 3M 5A 9M",["+add9"]],M13:mm,"M13#11":["1P 3M 5P 7M 9M 11A 13M",["maj13#11","Maj13#11","M13+4","M13#4"]],M6:_m,"M6#11":["1P 3M 5P 6M 11A",["M6b5","6#11","6b5"]],M69:gm,"M69#11":["1P 3M 5P 6M 9M 11A"],"M7#11":["1P 3M 5P 7M 11A",["maj7#11","Maj7#11","M7+4","M7#4"]],"M7#5":["1P 3M 5A 7M",["maj7#5","Maj7#5","maj9#5","M7+"]],"M7#5sus4":["1P 4P 5A 7M"],"M7#9#11":["1P 3M 5P 7M 9A 11A"],M7add13:xm,M7b5:vm,M7b6:Mm,M7b9:Sm,M7sus4:Em,M9:ym,"M9#11":["1P 3M 5P 7M 9M 11A",["maj9#11","Maj9#11","M9+4","M9#4"]],"M9#5":["1P 3M 5A 7M 9M",["Maj9#5"]],"M9#5sus4":["1P 4P 5A 7M 9M"],M9b5:Tm,M9sus4:bm,Madd9:Am,Maj7:wm,Mb5:Pm,Mb6:Rm,Msus2:Cm,Msus4:Lm,Maddb9:qm,"11b9":["1P 5P 7m 9m 11P"],"13#11":["1P 3M 5P 7m 9M 11A 13M",["13+4","13#4"]],"13#9":["1P 3M 5P 7m 9A 13M",["13#9_"]],"13#9#11":["1P 3M 5P 7m 9A 11A 13M"],"13b5":["1P 3M 5d 6M 7m 9M"],"13b9":["1P 3M 5P 7m 9m 13M"],"13b9#11":["1P 3M 5P 7m 9m 11A 13M"],"13no5":["1P 3M 7m 9M 13M"],"13sus4":["1P 4P 5P 7m 9M 13M",["13sus"]],"69#11":["1P 3M 5P 6M 9M 11A"],"7#11":["1P 3M 5P 7m 11A",["7+4","7#4","7#11_","7#4_"]],"7#11b13":["1P 3M 5P 7m 11A 13m",["7b5b13"]],"7#5":["1P 3M 5A 7m",["+7","7aug","aug7"]],"7#5#9":["1P 3M 5A 7m 9A",["7alt","7#5#9_","7#9b13_"]],"7#5b9":["1P 3M 5A 7m 9m"],"7#5b9#11":["1P 3M 5A 7m 9m 11A"],"7#5sus4":["1P 4P 5A 7m"],"7#9":["1P 3M 5P 7m 9A",["7#9_"]],"7#9#11":["1P 3M 5P 7m 9A 11A",["7b5#9"]],"7#9#11b13":["1P 3M 5P 7m 9A 11A 13m"],"7#9b13":["1P 3M 5P 7m 9A 13m"],"7add6":["1P 3M 5P 7m 13M",["67","7add13"]],"7b13":["1P 3M 7m 13m"],"7b5":["1P 3M 5d 7m"],"7b6":["1P 3M 5P 6m 7m"],"7b9":["1P 3M 5P 7m 9m"],"7b9#11":["1P 3M 5P 7m 9m 11A",["7b5b9"]],"7b9#9":["1P 3M 5P 7m 9m 9A"],"7b9b13":["1P 3M 5P 7m 9m 13m"],"7b9b13#11":["1P 3M 5P 7m 9m 11A 13m",["7b9#11b13","7b5b9b13"]],"7no5":["1P 3M 7m"],"7sus4":["1P 4P 5P 7m",["7sus"]],"7sus4b9":["1P 4P 5P 7m 9m",["susb9","7susb9","7b9sus","7b9sus4","phryg"]],"7sus4b9b13":["1P 4P 5P 7m 9m 13m",["7b9b13sus4"]],"9#11":["1P 3M 5P 7m 9M 11A",["9+4","9#4","9#11_","9#4_"]],"9#11b13":["1P 3M 5P 7m 9M 11A 13m",["9b5b13"]],"9#5":["1P 3M 5A 7m 9M",["9+"]],"9#5#11":["1P 3M 5A 7m 9M 11A"],"9b13":["1P 3M 7m 9M 13m"],"9b5":["1P 3M 5d 7m 9M"],"9no5":["1P 3M 7m 9M"],"9sus4":["1P 4P 5P 7m 9M",["9sus"]],m:Dm,"m#5":["1P 3m 5A",["m+","mb6"]],m11:Um,"m11A 5":["1P 3m 6m 7m 9M 11P"],m11b5:Im,m13:Nm,m6:Fm,m69:Om,m7:Bm,"m7#5":["1P 3m 6m 7m"],m7add11:zm,m7b5:Gm,m9:Hm,"m9#5":["1P 3m 6m 7m 9M"],m9b5:Vm,mMaj7:km,mMaj7b6:Wm,mM9:Xm,mM9b6:Ym,mb6M7:jm,mb6b9:Zm,o:$m,o7:Km,o7M7:Jm,oM7:Qm,sus24:e0,"+add#9":["1P 3M 5A 9A"],madd4:t0,madd9:n0};var r0=function(i){return Pp(i)||Op(i)||0};function s0(i){if(o0(i))return i;if(!Array.isArray(i))return"";var e=[0,0,0,0,0,0,0,0,0,0,0,0];return i.map(r0).forEach(function(t){e[t]=1}),e.join("")}var a0=/^[01]{12}$/;function o0(i){return a0.test(i)}var Yo=function(i){var e=Object.keys(i).sort(),t=[],n=[],r=function(a,c,l){t[a]=c,n[l]=n[l]||[],n[l].push(a)};e.forEach(function(a){var c=i[a][0].split(" "),l=i[a][1],h=s0(c);r(a,c,h),l&&l.forEach(function(d){return r(d,c,h)})});var s=Object.keys(t).sort(),o=function(a){return t[a]};return o.names=function(a){return typeof a=="string"?(n[a]||[]).slice():(a===!0?s:e).slice()},o},l0=Yo(fm),c0=Yo(i0);l0.names,c0.names;const h0={UM2:[";FLAVOR:UltiGCode",";TIME:1",";MATERIAL:1"],UM2plus:[";FLAVOR:UltiGCode",";TIME:1",";MATERIAL:1"],UM3:[";START_OF_HEADER",";HEADER_VERSION:0.1",";FLAVOR:Griffin",";GENERATOR.NAME:GCodeGenJS",";GENERATOR.VERSION:?",";GENERATOR.BUILD_DATE:2016-11-26",";TARGET_MACHINE.NAME:Ultimaker Jedi",";EXTRUDER_TRAIN.0.INITIAL_TEMPERATURE:200",";EXTRUDER_TRAIN.0.MATERIAL.VOLUME_USED:1",";EXTRUDER_TRAIN.0.NOZZLE.DIAMETER:0.4",";BUILD_PLATE.INITIAL_TEMPERATURE:0",";PRINT.TIME:1",";PRINT.SIZE.MIN.X:0",";PRINT.SIZE.MIN.Y:0",";PRINT.SIZE.MIN.Z:0",";PRINT.SIZE.MAX.X:215",";PRINT.SIZE.MAX.Y:215",";PRINT.SIZE.MAX.Z:200",";END_OF_HEADER","G92 E0"],REPRAP:[";RepRap target","G28","G92 E0"]},Ti=Math.PI;function u0(i,e,t={title:"LivePrinter",delay:!0}){const n={};function r(){return window.innerWidth}n.sceneWidth=r;function s(){return r()*i.maxy/i.maxx}n.sceneHeight=s;function o(oe){return r()*(oe/i.maxx-1)}n.bedXtoScene=o;function a(oe){return s()*(oe/i.maxy-1)}n.bedYtoScene=a;function c(oe){return r()*oe/i.maxx}n.bedZtoScene=c;function l(oe="lines.gcode"){const z=h0[i.model].join(`
`)+`
`+fp(),j=URL.createObjectURL(new Blob([z],{type:"text"})),le=document.createElement("a");le.href=j,le.download=oe,le.click()}n.downloadGCode=l;const h=document.getElementById(e),d=new ho({antialias:!0,preserveDrawingBuffer:!0,alpha:!0});d.setPixelRatio(window.devicePixelRatio),d.setSize(r(),s()),h.appendChild(d.domElement);const f=pp(),p=mp(),_=_p(),g=new gf,m=new ot;m.translateX(-r()),m.translateY(-s()/2),m.rotateX(Ti/2),m.translateY(2*s()/3);const u=new bn,y=new bn,x=new bn;g.add(m),y.add(f),y.add(p),y.add(_);const b={x:r()/40,y:r()/60},E=new Tt(new vn(b.x,b.y,b.y),new us({color:11075703})),w=new Tt(new vn(b.x,b.y,b.y),new us({color:15295010}));g.add(u),y.translateX(r()/2),y.translateY(s()/2),x.translateX(r()/2),x.translateY(s()/2),E.position.x=o(i.maxx)-b.x/2,E.position.y=a(i.maxy)-b.y/2,E.position.z=b.y/2,w.position.x=o(0)-b.x/2,w.position.y=a(0)-b.y/2,w.position.z=b.y/2,console.log(`Test cube position: ${JSON.stringify(w.position,null,2)}`),y.add(w),y.add(E),u.add(y),u.add(x),g.background=new ke(986895);const q=new rp(r(),Math.round(i.maxx/5),4473924,2236962);q.scale.set(1,i.maxy/i.maxx,1),q.name="ref-grid",u.add(q),q.rotateX(Ti/2);const I=(()=>{const oe=-r()/2,z=r()*1.25,j=s()*1.25;return new Fa(-z/2,z/2,j/2,-j/2,oe,z*2)})(),v=new dp(I,d.domElement);I.up.set(0,0,1),I.position.set(o(0),a(0),c(i.maxx/2)),I.lookAt(o(i.maxx/2),a(i.maxy/2),c(0)),v.dampingFactor=.1,v.maxPolarAngle=Ti,v.minPolarAngle=Ti/2,v.minAzimuthAngle=-Ti/2,v.maxAzimuthAngle=.001,v.enableDamping=!0,v.update(),(()=>{const j=new Uo(16777215,1,3*r(),.8);j.position.set(o(i.maxx/2),a(-i.maxy),c(i.maxx/2)),x.add(j);const le=new Uo(16777215,1,r(),.2);le.position.set(o(i.maxx/2),a(i.maxy/2),c(i.maxx/4)),x.add(le),x.add(new ip(16777215,.2))})();const A=xp({x:o,y:a,z:c,delay:t.delay,debug:t.debug});n.eventHandler=A,i.addPrintListener(A),i.addErrorListener(A),i.addGCodeListener(A);function H(){I.aspect=i.maxx/i.maxy,I.updateProjectionMatrix(),d.setSize(r(),s())}window.removeEventListener("resize",H),window.addEventListener("resize",H);const U=new ap().parse(up),F=new hp(t.title?t.title:"LivePrinter",{font:U,size:r()/20,height:r()/24,curveSegments:12,bevelEnabled:!0,bevelThickness:.1,bevelSize:.1,bevelSegments:2});F.computeBoundingBox();const G=.74,ee=.8,Z=.3,X=new us({side:It,opacity:.8,transparent:!0});X.color.setHSL(G,ee,Z);const K=new Tt(F,X);K.scale.setComponent(2,2.5);const te=new ot;te.add(K),m.add(te),requestAnimationFrame(oe=>{requestAnimationFrame(me)});function me(oe){d.render(g,I),v.update(),requestAnimationFrame(me)}return n}Cn.makeVisualiser=u0,Object.defineProperty(Cn,Symbol.toStringTag,{value:"Module"})});
