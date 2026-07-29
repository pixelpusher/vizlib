//#region node_modules/three/build/three.core.js
var REVISION = "185", MOUSE = {
	LEFT: 0,
	MIDDLE: 1,
	RIGHT: 2,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2
}, TOUCH = {
	ROTATE: 0,
	PAN: 1,
	DOLLY_PAN: 2,
	DOLLY_ROTATE: 3
}, FrontSide = 0, BackSide = 1, NormalBlending = 1, AddEquation = 100, SrcAlphaFactor = 204, OneMinusSrcAlphaFactor = 205, NeverDepth = 0, AlwaysDepth = 1, LessDepth = 2, LessEqualDepth = 3, EqualDepth = 4, GreaterEqualDepth = 5, GreaterDepth = 6, NotEqualDepth = 7, MultiplyOperation = 0, UVMapping = 300, CubeReflectionMapping = 301, RepeatWrapping = 1e3, ClampToEdgeWrapping = 1001, MirroredRepeatWrapping = 1002, NearestFilter = 1003, NearestMipmapNearestFilter = 1004, NearestMipmapLinearFilter = 1005, LinearFilter = 1006, LinearMipmapNearestFilter = 1007, LinearMipmapLinearFilter = 1008, UnsignedByteType = 1009, ByteType = 1010, ShortType = 1011, UnsignedShortType = 1012, IntType = 1013, UnsignedIntType = 1014, FloatType = 1015, HalfFloatType = 1016, UnsignedShort4444Type = 1017, UnsignedShort5551Type = 1018, UnsignedInt248Type = 1020, UnsignedInt5999Type = 35902, UnsignedInt101111Type = 35899, AlphaFormat = 1021, RGBFormat = 1022, RGBAFormat = 1023, DepthFormat = 1026, DepthStencilFormat = 1027, RedFormat = 1028, RedIntegerFormat = 1029, RGFormat = 1030, RGIntegerFormat = 1031, RGBAIntegerFormat = 1033, RGB_S3TC_DXT1_Format = 33776, RGBA_S3TC_DXT1_Format = 33777, RGBA_S3TC_DXT3_Format = 33778, RGBA_S3TC_DXT5_Format = 33779, RGB_PVRTC_4BPPV1_Format = 35840, RGB_PVRTC_2BPPV1_Format = 35841, RGBA_PVRTC_4BPPV1_Format = 35842, RGBA_PVRTC_2BPPV1_Format = 35843, RGB_ETC1_Format = 36196, RGB_ETC2_Format = 37492, RGBA_ETC2_EAC_Format = 37496, R11_EAC_Format = 37488, SIGNED_R11_EAC_Format = 37489, RG11_EAC_Format = 37490, SIGNED_RG11_EAC_Format = 37491, RGBA_ASTC_4x4_Format = 37808, RGBA_ASTC_5x4_Format = 37809, RGBA_ASTC_5x5_Format = 37810, RGBA_ASTC_6x5_Format = 37811, RGBA_ASTC_6x6_Format = 37812, RGBA_ASTC_8x5_Format = 37813, RGBA_ASTC_8x6_Format = 37814, RGBA_ASTC_8x8_Format = 37815, RGBA_ASTC_10x5_Format = 37816, RGBA_ASTC_10x6_Format = 37817, RGBA_ASTC_10x8_Format = 37818, RGBA_ASTC_10x10_Format = 37819, RGBA_ASTC_12x10_Format = 37820, RGBA_ASTC_12x12_Format = 37821, RGBA_BPTC_Format = 36492, RGB_BPTC_SIGNED_Format = 36494, RGB_BPTC_UNSIGNED_Format = 36495, RED_RGTC1_Format = 36283, SIGNED_RED_RGTC1_Format = 36284, RED_GREEN_RGTC2_Format = 36285, SIGNED_RED_GREEN_RGTC2_Format = 36286, InterpolateDiscrete = 2300, InterpolateLinear = 2301, InterpolateSmooth = 2302, InterpolateBezier = 2303, ZeroCurvatureEnding = 2400, ZeroSlopeEnding = 2401, WrapAroundEnding = 2402, BasicDepthPacking = 3200, TangentSpaceNormalMap = 0, NoColorSpace = "", SRGBColorSpace = "srgb", LinearSRGBColorSpace = "srgb-linear", LinearTransfer = "linear", SRGBTransfer = "srgb", KeepStencilOp = 7680, AlwaysStencilFunc = 519, StaticDrawUsage = 35044, DynamicDrawUsage = 35048, GLSL3 = "300 es", WebGLCoordinateSystem = 2e3, WebGPUCoordinateSystem = 2001;
function arrayNeedsUint32(e) {
	for (let t = e.length - 1; t >= 0; --t) if (e[t] >= 65535) return !0;
	return !1;
}
function isTypedArray(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function createElementNS(e) {
	return document.createElementNS("http://www.w3.org/1999/xhtml", e);
}
function createCanvasElement() {
	let e = createElementNS("canvas");
	return e.style.display = "block", e;
}
var _cache = {}, _setConsoleFunction = null;
function log$2(...e) {
	let t = "THREE." + e.shift();
	_setConsoleFunction ? _setConsoleFunction("log", t, ...e) : console.log(t, ...e);
}
function enhanceLogMessage(e) {
	let t = e[0];
	if (typeof t == "string" && t.startsWith("TSL:")) {
		let t = e[1];
		t && t.isStackTrace ? e[0] += " " + t.getLocation() : e[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
	}
	return e;
}
function warn(...e) {
	e = enhanceLogMessage(e);
	let t = "THREE." + e.shift();
	if (_setConsoleFunction) _setConsoleFunction("warn", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.warn(n.getError(t)) : console.warn(t, ...e);
	}
}
function error(...e) {
	e = enhanceLogMessage(e);
	let t = "THREE." + e.shift();
	if (_setConsoleFunction) _setConsoleFunction("error", t, ...e);
	else {
		let n = e[0];
		n && n.isStackTrace ? console.error(n.getError(t)) : console.error(t, ...e);
	}
}
function warnOnce(...e) {
	let t = e.join(" ");
	t in _cache || (_cache[t] = !0, warn(...e));
}
function probeAsync(e, t, n) {
	return new Promise(function(r, i) {
		function a() {
			switch (e.clientWaitSync(t, e.SYNC_FLUSH_COMMANDS_BIT, 0)) {
				case e.WAIT_FAILED:
					i();
					break;
				case e.TIMEOUT_EXPIRED:
					setTimeout(a, n);
					break;
				default: r();
			}
		}
		setTimeout(a, n);
	});
}
var ReversedDepthFuncs = {
	0: 1,
	2: 6,
	4: 7,
	3: 5,
	1: 0,
	6: 2,
	7: 4,
	5: 3
}, EventDispatcher = class {
	addEventListener(e, t) {
		this._listeners === void 0 && (this._listeners = {});
		let n = this._listeners;
		n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
	}
	hasEventListener(e, t) {
		let n = this._listeners;
		return n !== void 0 && n[e] !== void 0 && n[e].indexOf(t) !== -1;
	}
	removeEventListener(e, t) {
		let n = this._listeners;
		if (n === void 0) return;
		let r = n[e];
		if (r !== void 0) {
			let e = r.indexOf(t);
			e !== -1 && r.splice(e, 1);
		}
	}
	dispatchEvent(e) {
		let t = this._listeners;
		if (t === void 0) return;
		let n = t[e.type];
		if (n !== void 0) {
			e.target = this;
			let t = n.slice(0);
			for (let n = 0, r = t.length; n < r; n++) t[n].call(this, e);
			e.target = null;
		}
	}
}, _lut = /* @__PURE__ */ "00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff".split("."), _seed = 1234567, DEG2RAD$1 = Math.PI / 180, RAD2DEG$1 = 180 / Math.PI;
function generateUUID() {
	let e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0, r = Math.random() * 4294967295 | 0;
	return (_lut[e & 255] + _lut[e >> 8 & 255] + _lut[e >> 16 & 255] + _lut[e >> 24 & 255] + "-" + _lut[t & 255] + _lut[t >> 8 & 255] + "-" + _lut[t >> 16 & 15 | 64] + _lut[t >> 24 & 255] + "-" + _lut[n & 63 | 128] + _lut[n >> 8 & 255] + "-" + _lut[n >> 16 & 255] + _lut[n >> 24 & 255] + _lut[r & 255] + _lut[r >> 8 & 255] + _lut[r >> 16 & 255] + _lut[r >> 24 & 255]).toLowerCase();
}
function clamp(e, t, n) {
	return Math.max(t, Math.min(n, e));
}
function euclideanModulo(e, t) {
	return (e % t + t) % t;
}
function mapLinear(e, t, n, r, i) {
	return r + (e - t) * (i - r) / (n - t);
}
function inverseLerp(e, t, n) {
	return e === t ? 0 : (n - e) / (t - e);
}
function lerp(e, t, n) {
	return (1 - n) * e + n * t;
}
function damp(e, t, n, r) {
	return lerp(e, t, 1 - Math.exp(-n * r));
}
function pingpong(e, t = 1) {
	return t - Math.abs(euclideanModulo(e, t * 2) - t);
}
function smoothstep(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * (3 - 2 * e));
}
function smootherstep(e, t, n) {
	return e <= t ? 0 : e >= n ? 1 : (e = (e - t) / (n - t), e * e * e * (e * (e * 6 - 15) + 10));
}
function randInt(e, t) {
	return e + Math.floor(Math.random() * (t - e + 1));
}
function randFloat(e, t) {
	return e + Math.random() * (t - e);
}
function randFloatSpread(e) {
	return e * (.5 - Math.random());
}
function seededRandom(e) {
	e !== void 0 && (_seed = e);
	let t = _seed += 1831565813;
	return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function degToRad(e) {
	return e * DEG2RAD$1;
}
function radToDeg(e) {
	return e * RAD2DEG$1;
}
function isPowerOfTwo(e) {
	return (e & e - 1) == 0 && e !== 0;
}
function ceilPowerOfTwo(e) {
	return 2 ** Math.ceil(Math.log(e) / Math.LN2);
}
function floorPowerOfTwo(e) {
	return 2 ** Math.floor(Math.log(e) / Math.LN2);
}
function setQuaternionFromProperEuler(e, t, n, r, i) {
	let a = Math.cos, s = Math.sin, c = a(n / 2), l = s(n / 2), u = a((t + r) / 2), d = s((t + r) / 2), f = a((t - r) / 2), p = s((t - r) / 2), h = a((r - t) / 2), g = s((r - t) / 2);
	switch (i) {
		case "XYX":
			e.set(c * d, l * f, l * p, c * u);
			break;
		case "YZY":
			e.set(l * p, c * d, l * f, c * u);
			break;
		case "ZXZ":
			e.set(l * f, l * p, c * d, c * u);
			break;
		case "XZX":
			e.set(c * d, l * g, l * h, c * u);
			break;
		case "YXY":
			e.set(l * h, c * d, l * g, c * u);
			break;
		case "ZYZ":
			e.set(l * g, l * h, c * d, c * u);
			break;
		default: warn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
	}
}
function denormalize(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return e / 4294967295;
		case Uint16Array: return e / 65535;
		case Uint8Array: return e / 255;
		case Int32Array: return Math.max(e / 2147483647, -1);
		case Int16Array: return Math.max(e / 32767, -1);
		case Int8Array: return Math.max(e / 127, -1);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
function normalize(e, t) {
	switch (t.constructor) {
		case Float32Array: return e;
		case Uint32Array: return Math.round(e * 4294967295);
		case Uint16Array: return Math.round(e * 65535);
		case Uint8Array: return Math.round(e * 255);
		case Int32Array: return Math.round(e * 2147483647);
		case Int16Array: return Math.round(e * 32767);
		case Int8Array: return Math.round(e * 127);
		default: throw Error("THREE.MathUtils: Invalid component type.");
	}
}
var MathUtils = {
	DEG2RAD: DEG2RAD$1,
	RAD2DEG: RAD2DEG$1,
	generateUUID,
	clamp,
	euclideanModulo,
	mapLinear,
	inverseLerp,
	lerp,
	damp,
	pingpong,
	smoothstep,
	smootherstep,
	randInt,
	randFloat,
	randFloatSpread,
	seededRandom,
	degToRad,
	radToDeg,
	isPowerOfTwo,
	ceilPowerOfTwo,
	floorPowerOfTwo,
	setQuaternionFromProperEuler,
	normalize,
	denormalize
}, Vector2 = class e {
	static {
		e.prototype.isVector2 = !0;
	}
	constructor(e = 0, t = 0) {
		this.x = e, this.y = t;
	}
	get width() {
		return this.x;
	}
	set width(e) {
		this.x = e;
	}
	get height() {
		return this.y;
	}
	set height(e) {
		this.y = e;
	}
	set(e, t) {
		return this.x = e, this.y = t, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			default: throw Error("THREE.Vector2: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = e.elements;
		return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
	}
	clamp(e, t) {
		return this.x = clamp(this.x, e.x, t.x), this.y = clamp(this.y, e.y, t.y), this;
	}
	clampScalar(e, t) {
		return this.x = clamp(this.x, e, t), this.y = clamp(this.y, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(clamp(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y;
	}
	cross(e) {
		return this.x * e.y - this.y * e.x;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	angle() {
		return Math.atan2(-this.y, -this.x) + Math.PI;
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(clamp(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y;
		return t * t + n * n;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this;
	}
	rotateAround(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = this.x - e.x, a = this.y - e.y;
		return this.x = i * n - a * r + e.x, this.y = i * r + a * n + e.y, this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y;
	}
}, Quaternion = class {
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
	}
	static slerpFlat(e, t, n, r, i, a, s) {
		let c = n[r + 0], l = n[r + 1], u = n[r + 2], d = n[r + 3], f = i[a + 0], p = i[a + 1], h = i[a + 2], g = i[a + 3];
		if (d !== g || c !== f || l !== p || u !== h) {
			let e = c * f + l * p + u * h + d * g;
			e < 0 && (f = -f, p = -p, h = -h, g = -g, e = -e);
			let t = 1 - s;
			if (e < .9995) {
				let n = Math.acos(e), r = Math.sin(n);
				t = Math.sin(t * n) / r, s = Math.sin(s * n) / r, c = c * t + f * s, l = l * t + p * s, u = u * t + h * s, d = d * t + g * s;
			} else {
				c = c * t + f * s, l = l * t + p * s, u = u * t + h * s, d = d * t + g * s;
				let e = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
				c *= e, l *= e, u *= e, d *= e;
			}
		}
		e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
	}
	static multiplyQuaternionsFlat(e, t, n, r, i, a) {
		let s = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = i[a], f = i[a + 1], p = i[a + 2], h = i[a + 3];
		return e[t] = s * h + u * d + c * p - l * f, e[t + 1] = c * h + u * f + l * d - s * p, e[t + 2] = l * h + u * p + s * f - c * d, e[t + 3] = u * h - s * d - c * f - l * p, e;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get w() {
		return this._w;
	}
	set w(e) {
		this._w = e, this._onChangeCallback();
	}
	set(e, t, n, r) {
		return this._x = e, this._y = t, this._z = n, this._w = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._w);
	}
	copy(e) {
		return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
	}
	setFromEuler(e, t = !0) {
		let n = e._x, r = e._y, i = e._z, a = e._order, s = Math.cos, c = Math.sin, l = s(n / 2), u = s(r / 2), d = s(i / 2), f = c(n / 2), p = c(r / 2), h = c(i / 2);
		switch (a) {
			case "XYZ":
				this._x = f * u * d + l * p * h, this._y = l * p * d - f * u * h, this._z = l * u * h + f * p * d, this._w = l * u * d - f * p * h;
				break;
			case "YXZ":
				this._x = f * u * d + l * p * h, this._y = l * p * d - f * u * h, this._z = l * u * h - f * p * d, this._w = l * u * d + f * p * h;
				break;
			case "ZXY":
				this._x = f * u * d - l * p * h, this._y = l * p * d + f * u * h, this._z = l * u * h + f * p * d, this._w = l * u * d - f * p * h;
				break;
			case "ZYX":
				this._x = f * u * d - l * p * h, this._y = l * p * d + f * u * h, this._z = l * u * h - f * p * d, this._w = l * u * d + f * p * h;
				break;
			case "YZX":
				this._x = f * u * d + l * p * h, this._y = l * p * d + f * u * h, this._z = l * u * h - f * p * d, this._w = l * u * d - f * p * h;
				break;
			case "XZY":
				this._x = f * u * d - l * p * h, this._y = l * p * d - f * u * h, this._z = l * u * h + f * p * d, this._w = l * u * d + f * p * h;
				break;
			default: warn("Quaternion: .setFromEuler() encountered an unknown order: " + a);
		}
		return t === !0 && this._onChangeCallback(), this;
	}
	setFromAxisAngle(e, t) {
		let n = t / 2, r = Math.sin(n);
		return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e) {
		let t = e.elements, n = t[0], r = t[4], i = t[8], a = t[1], s = t[5], c = t[9], l = t[2], u = t[6], d = t[10], f = n + s + d;
		if (f > 0) {
			let e = .5 / Math.sqrt(f + 1);
			this._w = .25 / e, this._x = (u - c) * e, this._y = (i - l) * e, this._z = (a - r) * e;
		} else if (n > s && n > d) {
			let e = 2 * Math.sqrt(1 + n - s - d);
			this._w = (u - c) / e, this._x = .25 * e, this._y = (r + a) / e, this._z = (i + l) / e;
		} else if (s > d) {
			let e = 2 * Math.sqrt(1 + s - n - d);
			this._w = (i - l) / e, this._x = (r + a) / e, this._y = .25 * e, this._z = (c + u) / e;
		} else {
			let e = 2 * Math.sqrt(1 + d - n - s);
			this._w = (a - r) / e, this._x = (i + l) / e, this._y = (c + u) / e, this._z = .25 * e;
		}
		return this._onChangeCallback(), this;
	}
	setFromUnitVectors(e, t) {
		let n = e.dot(t) + 1;
		return n < 1e-8 ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
	}
	angleTo(e) {
		return 2 * Math.acos(Math.abs(clamp(this.dot(e), -1, 1)));
	}
	rotateTowards(e, t) {
		let n = this.angleTo(e);
		if (n === 0) return this;
		let r = Math.min(1, t / n);
		return this.slerp(e, r), this;
	}
	identity() {
		return this.set(0, 0, 0, 1);
	}
	invert() {
		return this.conjugate();
	}
	conjugate() {
		return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
	}
	dot(e) {
		return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
	}
	lengthSq() {
		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
	}
	length() {
		return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
	}
	normalize() {
		let e = this.length();
		return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e), this._onChangeCallback(), this;
	}
	multiply(e) {
		return this.multiplyQuaternions(this, e);
	}
	premultiply(e) {
		return this.multiplyQuaternions(e, this);
	}
	multiplyQuaternions(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, s = t._x, c = t._y, l = t._z, u = t._w;
		return this._x = n * u + a * s + r * l - i * c, this._y = r * u + a * c + i * s - n * l, this._z = i * u + a * l + n * c - r * s, this._w = a * u - n * s - r * c - i * l, this._onChangeCallback(), this;
	}
	slerp(e, t) {
		let n = e._x, r = e._y, i = e._z, a = e._w, s = this.dot(e);
		s < 0 && (n = -n, r = -r, i = -i, a = -a, s = -s);
		let c = 1 - t;
		if (s < .9995) {
			let e = Math.acos(s), l = Math.sin(e);
			c = Math.sin(c * e) / l, t = Math.sin(t * e) / l, this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + i * t, this._w = this._w * c + a * t, this._onChangeCallback();
		} else this._x = this._x * c + n * t, this._y = this._y * c + r * t, this._z = this._z * c + i * t, this._w = this._w * c + a * t, this.normalize();
		return this;
	}
	slerpQuaternions(e, t, n) {
		return this.copy(e).slerp(t, n);
	}
	random() {
		let e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), r = Math.sqrt(1 - n), i = Math.sqrt(n);
		return this.set(r * Math.sin(e), r * Math.cos(e), i * Math.sin(t), i * Math.cos(t));
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
	}
	fromArray(e, t = 0) {
		return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
	}
	fromBufferAttribute(e, t) {
		return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
	}
	toJSON() {
		return this.toArray();
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._w;
	}
}, Vector3 = class e {
	static {
		e.prototype.isVector3 = !0;
	}
	constructor(e = 0, t = 0, n = 0) {
		this.x = e, this.y = t, this.z = n;
	}
	set(e, t, n) {
		return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw Error("THREE.Vector3: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this;
	}
	multiplyVectors(e, t) {
		return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
	}
	applyEuler(e) {
		return this.applyQuaternion(_quaternion$5.setFromEuler(e));
	}
	applyAxisAngle(e, t) {
		return this.applyQuaternion(_quaternion$5.setFromAxisAngle(e, t));
	}
	applyMatrix3(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[3] * n + i[6] * r, this.y = i[1] * t + i[4] * n + i[7] * r, this.z = i[2] * t + i[5] * n + i[8] * r, this;
	}
	applyNormalMatrix(e) {
		return this.applyMatrix3(e).normalize();
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements, a = 1 / (i[3] * t + i[7] * n + i[11] * r + i[15]);
		return this.x = (i[0] * t + i[4] * n + i[8] * r + i[12]) * a, this.y = (i[1] * t + i[5] * n + i[9] * r + i[13]) * a, this.z = (i[2] * t + i[6] * n + i[10] * r + i[14]) * a, this;
	}
	applyQuaternion(e) {
		let t = this.x, n = this.y, r = this.z, i = e.x, a = e.y, s = e.z, c = e.w, l = 2 * (a * r - s * n), u = 2 * (s * t - i * r), d = 2 * (i * n - a * t);
		return this.x = t + c * l + a * d - s * u, this.y = n + c * u + s * l - i * d, this.z = r + c * d + i * u - a * l, this;
	}
	project(e) {
		return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
	}
	unproject(e) {
		return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
	}
	transformDirection(e) {
		let t = this.x, n = this.y, r = this.z, i = e.elements;
		return this.x = i[0] * t + i[4] * n + i[8] * r, this.y = i[1] * t + i[5] * n + i[9] * r, this.z = i[2] * t + i[6] * n + i[10] * r, this.normalize();
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
	}
	clamp(e, t) {
		return this.x = clamp(this.x, e.x, t.x), this.y = clamp(this.y, e.y, t.y), this.z = clamp(this.z, e.z, t.z), this;
	}
	clampScalar(e, t) {
		return this.x = clamp(this.x, e, t), this.y = clamp(this.y, e, t), this.z = clamp(this.z, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(clamp(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
	}
	cross(e) {
		return this.crossVectors(this, e);
	}
	crossVectors(e, t) {
		let n = e.x, r = e.y, i = e.z, a = t.x, s = t.y, c = t.z;
		return this.x = r * c - i * s, this.y = i * a - n * c, this.z = n * s - r * a, this;
	}
	projectOnVector(e) {
		let t = e.lengthSq();
		if (t === 0) return this.set(0, 0, 0);
		let n = e.dot(this) / t;
		return this.copy(e).multiplyScalar(n);
	}
	projectOnPlane(e) {
		return _vector$c.copy(this).projectOnVector(e), this.sub(_vector$c);
	}
	reflect(e) {
		return this.sub(_vector$c.copy(e).multiplyScalar(2 * this.dot(e)));
	}
	angleTo(e) {
		let t = Math.sqrt(this.lengthSq() * e.lengthSq());
		if (t === 0) return Math.PI / 2;
		let n = this.dot(e) / t;
		return Math.acos(clamp(n, -1, 1));
	}
	distanceTo(e) {
		return Math.sqrt(this.distanceToSquared(e));
	}
	distanceToSquared(e) {
		let t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
		return t * t + n * n + r * r;
	}
	manhattanDistanceTo(e) {
		return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
	}
	setFromSpherical(e) {
		return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
	}
	setFromSphericalCoords(e, t, n) {
		let r = Math.sin(t) * e;
		return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
	}
	setFromCylindrical(e) {
		return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
	}
	setFromCylindricalCoords(e, t, n) {
		return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this;
	}
	setFromMatrixScale(e) {
		let t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
		return this.x = t, this.y = n, this.z = r, this;
	}
	setFromMatrixColumn(e, t) {
		return this.fromArray(e.elements, t * 4);
	}
	setFromMatrix3Column(e, t) {
		return this.fromArray(e.elements, t * 3);
	}
	setFromEuler(e) {
		return this.x = e._x, this.y = e._y, this.z = e._z, this;
	}
	setFromColor(e) {
		return this.x = e.r, this.y = e.g, this.z = e.b, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
	}
	randomDirection() {
		let e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
		return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z;
	}
}, _vector$c = /*@__PURE__*/ new Vector3(), _quaternion$5 = /*@__PURE__*/ new Quaternion(), Matrix3 = class e {
	static {
		e.prototype.isMatrix3 = !0;
	}
	constructor(e, t, n, r, i, a, s, c, l) {
		this.elements = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, s, c, l);
	}
	set(e, t, n, r, i, a, s, c, l) {
		let u = this.elements;
		return u[0] = e, u[1] = r, u[2] = s, u[3] = t, u[4] = i, u[5] = c, u[6] = n, u[7] = a, u[8] = l, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
	}
	extractBasis(e, t, n) {
		return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
	}
	setFromMatrix4(e) {
		let t = e.elements;
		return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], s = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], p = n[5], h = n[8], g = r[0], _ = r[3], v = r[6], y = r[1], b = r[4], x = r[7], S = r[2], C = r[5], w = r[8];
		return i[0] = a * g + s * y + c * S, i[3] = a * _ + s * b + c * C, i[6] = a * v + s * x + c * w, i[1] = l * g + u * y + d * S, i[4] = l * _ + u * b + d * C, i[7] = l * v + u * x + d * w, i[2] = f * g + p * y + h * S, i[5] = f * _ + p * b + h * C, i[8] = f * v + p * x + h * w, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], c = e[6], l = e[7], u = e[8];
		return t * a * u - t * s * l - n * i * u + n * s * c + r * i * l - r * a * c;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], c = e[6], l = e[7], u = e[8], d = u * a - s * l, f = s * c - u * i, p = l * i - a * c, h = t * d + n * f + r * p;
		if (h === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
		let g = 1 / h;
		return e[0] = d * g, e[1] = (r * l - u * n) * g, e[2] = (s * n - r * a) * g, e[3] = f * g, e[4] = (u * t - r * c) * g, e[5] = (r * i - s * t) * g, e[6] = p * g, e[7] = (n * c - l * t) * g, e[8] = (a * t - n * i) * g, this;
	}
	transpose() {
		let e, t = this.elements;
		return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
	}
	getNormalMatrix(e) {
		return this.setFromMatrix4(e).invert().transpose();
	}
	transposeIntoArray(e) {
		let t = this.elements;
		return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
	}
	setUvTransform(e, t, n, r, i, a, s) {
		let c = Math.cos(i), l = Math.sin(i);
		return this.set(n * c, n * l, -n * (c * a + l * s) + a + e, -r * l, r * c, -r * (-l * a + c * s) + s + t, 0, 0, 1), this;
	}
	scale(e, t) {
		return warnOnce("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(_m3.makeScale(e, t)), this;
	}
	rotate(e) {
		return warnOnce("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(_m3.makeRotation(-e)), this;
	}
	translate(e, t) {
		return warnOnce("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(_m3.makeTranslation(e, t)), this;
	}
	makeTranslation(e, t) {
		return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
	}
	makeRotation(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
	}
	makeScale(e, t) {
		return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 9; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
	}
	clone() {
		return new this.constructor().fromArray(this.elements);
	}
}, _m3 = /*@__PURE__*/ new Matrix3(), LINEAR_REC709_TO_XYZ = /*@__PURE__*/ new Matrix3().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), XYZ_TO_LINEAR_REC709 = /*@__PURE__*/ new Matrix3().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
function createColorManagement() {
	let e = {
		enabled: !0,
		workingColorSpace: LinearSRGBColorSpace,
		spaces: {},
		convert: function(e, t, n) {
			return this.enabled === !1 || t === n || !t || !n ? e : (this.spaces[t].transfer === "srgb" && (e.r = SRGBToLinear(e.r), e.g = SRGBToLinear(e.g), e.b = SRGBToLinear(e.b)), this.spaces[t].primaries !== this.spaces[n].primaries && (e.applyMatrix3(this.spaces[t].toXYZ), e.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === "srgb" && (e.r = LinearToSRGB(e.r), e.g = LinearToSRGB(e.g), e.b = LinearToSRGB(e.b)), e);
		},
		workingToColorSpace: function(e, t) {
			return this.convert(e, this.workingColorSpace, t);
		},
		colorSpaceToWorking: function(e, t) {
			return this.convert(e, t, this.workingColorSpace);
		},
		getPrimaries: function(e) {
			return this.spaces[e].primaries;
		},
		getTransfer: function(e) {
			return e === "" ? LinearTransfer : this.spaces[e].transfer;
		},
		getToneMappingMode: function(e) {
			return this.spaces[e].outputColorSpaceConfig.toneMappingMode || "standard";
		},
		getLuminanceCoefficients: function(e, t = this.workingColorSpace) {
			return e.fromArray(this.spaces[t].luminanceCoefficients);
		},
		define: function(e) {
			Object.assign(this.spaces, e);
		},
		_getMatrix: function(e, t, n) {
			return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ);
		},
		_getDrawingBufferColorSpace: function(e) {
			return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace;
		},
		_getUnpackColorSpace: function(e = this.workingColorSpace) {
			return this.spaces[e].workingColorSpaceConfig.unpackColorSpace;
		},
		fromWorkingColorSpace: function(t, n) {
			return warnOnce("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."), e.workingToColorSpace(t, n);
		},
		toWorkingColorSpace: function(t, n) {
			return warnOnce("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."), e.colorSpaceToWorking(t, n);
		}
	}, t = [
		.64,
		.33,
		.3,
		.6,
		.15,
		.06
	], n = [
		.2126,
		.7152,
		.0722
	], r = [.3127, .329];
	return e.define({
		[LinearSRGBColorSpace]: {
			primaries: t,
			whitePoint: r,
			transfer: LinearTransfer,
			toXYZ: LINEAR_REC709_TO_XYZ,
			fromXYZ: XYZ_TO_LINEAR_REC709,
			luminanceCoefficients: n,
			workingColorSpaceConfig: { unpackColorSpace: SRGBColorSpace },
			outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
		},
		[SRGBColorSpace]: {
			primaries: t,
			whitePoint: r,
			transfer: SRGBTransfer,
			toXYZ: LINEAR_REC709_TO_XYZ,
			fromXYZ: XYZ_TO_LINEAR_REC709,
			luminanceCoefficients: n,
			outputColorSpaceConfig: { drawingBufferColorSpace: SRGBColorSpace }
		}
	}), e;
}
var ColorManagement = /*@__PURE__*/ createColorManagement();
function SRGBToLinear(e) {
	return e < .04045 ? e * .0773993808 : (e * .9478672986 + .0521327014) ** 2.4;
}
function LinearToSRGB(e) {
	return e < .0031308 ? e * 12.92 : 1.055 * e ** .41666 - .055;
}
var _canvas, ImageUtils = class {
	static getDataURL(e, t = "image/png") {
		if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
		let n;
		if (e instanceof HTMLCanvasElement) n = e;
		else {
			_canvas === void 0 && (_canvas = createElementNS("canvas")), _canvas.width = e.width, _canvas.height = e.height;
			let t = _canvas.getContext("2d");
			e instanceof ImageData ? t.putImageData(e, 0, 0) : t.drawImage(e, 0, 0, e.width, e.height), n = _canvas;
		}
		return n.toDataURL(t);
	}
	static sRGBToLinear(e) {
		if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
			let t = createElementNS("canvas");
			t.width = e.width, t.height = e.height;
			let n = t.getContext("2d");
			n.drawImage(e, 0, 0, e.width, e.height);
			let r = n.getImageData(0, 0, e.width, e.height), i = r.data;
			for (let e = 0; e < i.length; e++) i[e] = SRGBToLinear(i[e] / 255) * 255;
			return n.putImageData(r, 0, 0), t;
		} else if (e.data) {
			let t = e.data.slice(0);
			for (let e = 0; e < t.length; e++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[e] = Math.floor(SRGBToLinear(t[e] / 255) * 255) : t[e] = SRGBToLinear(t[e]);
			return {
				data: t,
				width: e.width,
				height: e.height
			};
		} else return warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
	}
}, _sourceId = 0, Source = class {
	constructor(e = null) {
		this.isSource = !0, Object.defineProperty(this, "id", { value: _sourceId++ }), this.uuid = generateUUID(), this.data = e, this.dataReady = !0, this.version = 0;
	}
	getSize(e) {
		let t = this.data;
		return typeof HTMLVideoElement < "u" && t instanceof HTMLVideoElement ? e.set(t.videoWidth, t.videoHeight, 0) : typeof VideoFrame < "u" && t instanceof VideoFrame ? e.set(t.displayWidth, t.displayHeight, 0) : t === null ? e.set(0, 0, 0) : e.set(t.width, t.height, t.depth || 0), e;
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
		let n = {
			uuid: this.uuid,
			url: ""
		}, r = this.data;
		if (r !== null) {
			let e;
			if (Array.isArray(r)) {
				e = [];
				for (let t = 0, n = r.length; t < n; t++) r[t].isDataTexture ? e.push(serializeImage(r[t].image)) : e.push(serializeImage(r[t]));
			} else e = serializeImage(r);
			n.url = e;
		}
		return t || (e.images[this.uuid] = n), n;
	}
};
function serializeImage(e) {
	return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap ? ImageUtils.getDataURL(e) : e.data ? {
		data: Array.from(e.data),
		width: e.width,
		height: e.height,
		type: e.data.constructor.name
	} : (warn("Texture: Unable to serialize Texture."), {});
}
var _textureId = 0, _tempVec3 = /*@__PURE__*/ new Vector3(), Texture = class e extends EventDispatcher {
	constructor(t = e.DEFAULT_IMAGE, n = e.DEFAULT_MAPPING, r = ClampToEdgeWrapping, i = ClampToEdgeWrapping, a = LinearFilter, s = LinearMipmapLinearFilter, c = RGBAFormat, l = UnsignedByteType, u = e.DEFAULT_ANISOTROPY, d = "") {
		super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: _textureId++ }), this.uuid = generateUUID(), this.name = "", this.source = new Source(t), this.mipmaps = [], this.mapping = n, this.channel = 0, this.wrapS = r, this.wrapT = i, this.magFilter = a, this.minFilter = s, this.anisotropy = u, this.format = c, this.internalFormat = null, this.type = l, this.offset = new Vector2(0, 0), this.repeat = new Vector2(1, 1), this.center = new Vector2(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Matrix3(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = d, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.normalized = !1;
	}
	get width() {
		return this.source.getSize(_tempVec3).x;
	}
	get height() {
		return this.source.getSize(_tempVec3).y;
	}
	get depth() {
		return this.source.getSize(_tempVec3).z;
	}
	get image() {
		return this.source.data;
	}
	set image(e) {
		this.source.data = e;
	}
	updateMatrix() {
		this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.normalized = e.normalized, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.renderTarget = e.renderTarget, this.isRenderTargetTexture = e.isRenderTargetTexture, this.isArrayTexture = e.isArrayTexture, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
	}
	setValues(e) {
		for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				warn(`Texture.setValues(): parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				warn(`Texture.setValues(): property '${t}' does not exist.`);
				continue;
			}
			r && n && r.isVector2 && n.isVector2 || r && n && r.isVector3 && n.isVector3 || r && n && r.isMatrix3 && n.isMatrix3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
		let n = {
			metadata: {
				version: 4.7,
				type: "Texture",
				generator: "Texture.toJSON"
			},
			uuid: this.uuid,
			name: this.name,
			image: this.source.toJSON(e).uuid,
			mapping: this.mapping,
			channel: this.channel,
			repeat: [this.repeat.x, this.repeat.y],
			offset: [this.offset.x, this.offset.y],
			center: [this.center.x, this.center.y],
			rotation: this.rotation,
			wrap: [this.wrapS, this.wrapT],
			format: this.format,
			internalFormat: this.internalFormat,
			type: this.type,
			normalized: this.normalized,
			colorSpace: this.colorSpace,
			minFilter: this.minFilter,
			magFilter: this.magFilter,
			anisotropy: this.anisotropy,
			flipY: this.flipY,
			generateMipmaps: this.generateMipmaps,
			premultiplyAlpha: this.premultiplyAlpha,
			unpackAlignment: this.unpackAlignment
		};
		return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	transformUv(e) {
		if (this.mapping !== 300) return e;
		if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
			case RepeatWrapping:
				e.x -= Math.floor(e.x);
				break;
			case ClampToEdgeWrapping:
				e.x = e.x < 0 ? 0 : 1;
				break;
			case MirroredRepeatWrapping:
				Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x -= Math.floor(e.x);
				break;
		}
		if (e.y < 0 || e.y > 1) switch (this.wrapT) {
			case RepeatWrapping:
				e.y -= Math.floor(e.y);
				break;
			case ClampToEdgeWrapping:
				e.y = e.y < 0 ? 0 : 1;
				break;
			case MirroredRepeatWrapping:
				Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y -= Math.floor(e.y);
				break;
		}
		return this.flipY && (e.y = 1 - e.y), e;
	}
	set needsUpdate(e) {
		e === !0 && (this.version++, this.source.needsUpdate = !0);
	}
	set needsPMREMUpdate(e) {
		e === !0 && this.pmremVersion++;
	}
};
Texture.DEFAULT_IMAGE = null, Texture.DEFAULT_MAPPING = 300, Texture.DEFAULT_ANISOTROPY = 1;
var Vector4 = class e {
	static {
		e.prototype.isVector4 = !0;
	}
	constructor(e = 0, t = 0, n = 0, r = 1) {
		this.x = e, this.y = t, this.z = n, this.w = r;
	}
	get width() {
		return this.z;
	}
	set width(e) {
		this.z = e;
	}
	get height() {
		return this.w;
	}
	set height(e) {
		this.w = e;
	}
	set(e, t, n, r) {
		return this.x = e, this.y = t, this.z = n, this.w = r, this;
	}
	setScalar(e) {
		return this.x = e, this.y = e, this.z = e, this.w = e, this;
	}
	setX(e) {
		return this.x = e, this;
	}
	setY(e) {
		return this.y = e, this;
	}
	setZ(e) {
		return this.z = e, this;
	}
	setW(e) {
		return this.w = e, this;
	}
	setComponent(e, t) {
		switch (e) {
			case 0:
				this.x = t;
				break;
			case 1:
				this.y = t;
				break;
			case 2:
				this.z = t;
				break;
			case 3:
				this.w = t;
				break;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
		return this;
	}
	getComponent(e) {
		switch (e) {
			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			case 3: return this.w;
			default: throw Error("THREE.Vector4: index is out of range: " + e);
		}
	}
	clone() {
		return new this.constructor(this.x, this.y, this.z, this.w);
	}
	copy(e) {
		return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w === void 0 ? 1 : e.w, this;
	}
	add(e) {
		return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
	}
	addScalar(e) {
		return this.x += e, this.y += e, this.z += e, this.w += e, this;
	}
	addVectors(e, t) {
		return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
	}
	addScaledVector(e, t) {
		return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
	}
	sub(e) {
		return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
	}
	subScalar(e) {
		return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
	}
	subVectors(e, t) {
		return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
	}
	multiply(e) {
		return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
	}
	multiplyScalar(e) {
		return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
	}
	applyMatrix4(e) {
		let t = this.x, n = this.y, r = this.z, i = this.w, a = e.elements;
		return this.x = a[0] * t + a[4] * n + a[8] * r + a[12] * i, this.y = a[1] * t + a[5] * n + a[9] * r + a[13] * i, this.z = a[2] * t + a[6] * n + a[10] * r + a[14] * i, this.w = a[3] * t + a[7] * n + a[11] * r + a[15] * i, this;
	}
	divide(e) {
		return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
	}
	divideScalar(e) {
		return this.multiplyScalar(1 / e);
	}
	setAxisAngleFromQuaternion(e) {
		this.w = 2 * Math.acos(e.w);
		let t = Math.sqrt(1 - e.w * e.w);
		return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
	}
	setAxisAngleFromRotationMatrix(e) {
		let t, n, r, i, a = .01, s = .1, c = e.elements, l = c[0], u = c[4], d = c[8], f = c[1], p = c[5], h = c[9], g = c[2], _ = c[6], v = c[10];
		if (Math.abs(u - f) < a && Math.abs(d - g) < a && Math.abs(h - _) < a) {
			if (Math.abs(u + f) < s && Math.abs(d + g) < s && Math.abs(h + _) < s && Math.abs(l + p + v - 3) < s) return this.set(1, 0, 0, 0), this;
			t = Math.PI;
			let e = (l + 1) / 2, c = (p + 1) / 2, y = (v + 1) / 2, b = (u + f) / 4, x = (d + g) / 4, S = (h + _) / 4;
			return e > c && e > y ? e < a ? (n = 0, r = .707106781, i = .707106781) : (n = Math.sqrt(e), r = b / n, i = x / n) : c > y ? c < a ? (n = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(c), n = b / r, i = S / r) : y < a ? (n = .707106781, r = .707106781, i = 0) : (i = Math.sqrt(y), n = x / i, r = S / i), this.set(n, r, i, t), this;
		}
		let y = Math.sqrt((_ - h) * (_ - h) + (d - g) * (d - g) + (f - u) * (f - u));
		return Math.abs(y) < .001 && (y = 1), this.x = (_ - h) / y, this.y = (d - g) / y, this.z = (f - u) / y, this.w = Math.acos((l + p + v - 1) / 2), this;
	}
	setFromMatrixPosition(e) {
		let t = e.elements;
		return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
	}
	min(e) {
		return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
	}
	max(e) {
		return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
	}
	clamp(e, t) {
		return this.x = clamp(this.x, e.x, t.x), this.y = clamp(this.y, e.y, t.y), this.z = clamp(this.z, e.z, t.z), this.w = clamp(this.w, e.w, t.w), this;
	}
	clampScalar(e, t) {
		return this.x = clamp(this.x, e, t), this.y = clamp(this.y, e, t), this.z = clamp(this.z, e, t), this.w = clamp(this.w, e, t), this;
	}
	clampLength(e, t) {
		let n = this.length();
		return this.divideScalar(n || 1).multiplyScalar(clamp(n, e, t));
	}
	floor() {
		return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
	}
	ceil() {
		return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
	}
	round() {
		return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
	}
	roundToZero() {
		return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
	}
	negate() {
		return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
	}
	dot(e) {
		return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
	}
	lengthSq() {
		return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
	}
	length() {
		return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
	}
	manhattanLength() {
		return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
	}
	normalize() {
		return this.divideScalar(this.length() || 1);
	}
	setLength(e) {
		return this.normalize().multiplyScalar(e);
	}
	lerp(e, t) {
		return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
	}
	lerpVectors(e, t, n) {
		return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
	}
	equals(e) {
		return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
	}
	fromArray(e, t = 0) {
		return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
	}
	fromBufferAttribute(e, t) {
		return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
	}
	random() {
		return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
	}
	*[Symbol.iterator]() {
		yield this.x, yield this.y, yield this.z, yield this.w;
	}
}, RenderTarget = class extends EventDispatcher {
	constructor(e = 1, t = 1, n = {}) {
		super(), n = Object.assign({
			generateMipmaps: !1,
			internalFormat: null,
			minFilter: LinearFilter,
			depthBuffer: !0,
			stencilBuffer: !1,
			resolveDepthBuffer: !0,
			resolveStencilBuffer: !0,
			depthTexture: null,
			samples: 0,
			count: 1,
			depth: 1,
			multiview: !1,
			useArrayDepthTexture: !1
		}, n), this.isRenderTarget = !0, this.width = e, this.height = t, this.depth = n.depth, this.scissor = new Vector4(0, 0, e, t), this.scissorTest = !1, this.viewport = new Vector4(0, 0, e, t), this.textures = [];
		let r = new Texture({
			width: e,
			height: t,
			depth: n.depth
		}), i = n.count;
		for (let e = 0; e < i; e++) this.textures[e] = r.clone(), this.textures[e].isRenderTargetTexture = !0, this.textures[e].renderTarget = this;
		this._setTextureOptions(n), this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this._depthTexture = null, this.depthTexture = n.depthTexture, this.samples = n.samples, this.multiview = n.multiview, this.useArrayDepthTexture = n.useArrayDepthTexture;
	}
	_setTextureOptions(e = {}) {
		let t = {
			minFilter: LinearFilter,
			generateMipmaps: !1,
			flipY: !1,
			internalFormat: null
		};
		e.mapping !== void 0 && (t.mapping = e.mapping), e.wrapS !== void 0 && (t.wrapS = e.wrapS), e.wrapT !== void 0 && (t.wrapT = e.wrapT), e.wrapR !== void 0 && (t.wrapR = e.wrapR), e.magFilter !== void 0 && (t.magFilter = e.magFilter), e.minFilter !== void 0 && (t.minFilter = e.minFilter), e.format !== void 0 && (t.format = e.format), e.type !== void 0 && (t.type = e.type), e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy), e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace), e.flipY !== void 0 && (t.flipY = e.flipY), e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps), e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat);
		for (let e = 0; e < this.textures.length; e++) this.textures[e].setValues(t);
	}
	get texture() {
		return this.textures[0];
	}
	set texture(e) {
		this.textures[0] = e;
	}
	set depthTexture(e) {
		this._depthTexture !== null && (this._depthTexture.renderTarget = null), e !== null && (e.renderTarget = this), this._depthTexture = e;
	}
	get depthTexture() {
		return this._depthTexture;
	}
	setSize(e, t, n = 1) {
		if (this.width !== e || this.height !== t || this.depth !== n) {
			this.width = e, this.height = t, this.depth = n;
			for (let r = 0, i = this.textures.length; r < i; r++) this.textures[r].image.width = e, this.textures[r].image.height = t, this.textures[r].image.depth = n, this.textures[r].isData3DTexture !== !0 && (this.textures[r].isArrayTexture = this.textures[r].image.depth > 1);
			this.dispose();
		}
		this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
		for (let t = 0, n = e.textures.length; t < n; t++) {
			this.textures[t] = e.textures[t].clone(), this.textures[t].isRenderTargetTexture = !0, this.textures[t].renderTarget = this;
			let n = Object.assign({}, e.textures[t].image);
			this.textures[t].source = new Source(n);
		}
		return this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this.multiview = e.multiview, this.useArrayDepthTexture = e.useArrayDepthTexture, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, WebGLRenderTarget = class extends RenderTarget {
	constructor(e = 1, t = 1, n = {}) {
		super(e, t, n), this.isWebGLRenderTarget = !0;
	}
}, DataArrayTexture = class extends Texture {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isDataArrayTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = NearestFilter, this.minFilter = NearestFilter, this.wrapR = ClampToEdgeWrapping, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
	}
	addLayerUpdate(e) {
		this.layerUpdates.add(e);
	}
	clearLayerUpdates() {
		this.layerUpdates.clear();
	}
}, Data3DTexture = class extends Texture {
	constructor(e = null, t = 1, n = 1, r = 1) {
		super(null), this.isData3DTexture = !0, this.image = {
			data: e,
			width: t,
			height: n,
			depth: r
		}, this.magFilter = NearestFilter, this.minFilter = NearestFilter, this.wrapR = ClampToEdgeWrapping, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, Matrix4 = class e {
	static {
		e.prototype.isMatrix4 = !0;
	}
	constructor(e, t, n, r, i, a, s, c, l, u, d, f, p, h, g, _) {
		this.elements = [
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r, i, a, s, c, l, u, d, f, p, h, g, _);
	}
	set(e, t, n, r, i, a, s, c, l, u, d, f, p, h, g, _) {
		let v = this.elements;
		return v[0] = e, v[4] = t, v[8] = n, v[12] = r, v[1] = i, v[5] = a, v[9] = s, v[13] = c, v[2] = l, v[6] = u, v[10] = d, v[14] = f, v[3] = p, v[7] = h, v[11] = g, v[15] = _, this;
	}
	identity() {
		return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	clone() {
		return new e().fromArray(this.elements);
	}
	copy(e) {
		let t = this.elements, n = e.elements;
		return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
	}
	copyPosition(e) {
		let t = this.elements, n = e.elements;
		return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
	}
	setFromMatrix3(e) {
		let t = e.elements;
		return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
	}
	extractBasis(e, t, n) {
		return this.determinantAffine() === 0 ? (e.set(1, 0, 0), t.set(0, 1, 0), n.set(0, 0, 1), this) : (e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this);
	}
	makeBasis(e, t, n) {
		return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
	}
	extractRotation(e) {
		if (e.determinantAffine() === 0) return this.identity();
		let t = this.elements, n = e.elements, r = 1 / _v1$7.setFromMatrixColumn(e, 0).length(), i = 1 / _v1$7.setFromMatrixColumn(e, 1).length(), a = 1 / _v1$7.setFromMatrixColumn(e, 2).length();
		return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * i, t[5] = n[5] * i, t[6] = n[6] * i, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromEuler(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z, a = Math.cos(n), s = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(i), d = Math.sin(i);
		if (e.order === "XYZ") {
			let e = a * u, n = a * d, r = s * u, i = s * d;
			t[0] = c * u, t[4] = -c * d, t[8] = l, t[1] = n + r * l, t[5] = e - i * l, t[9] = -s * c, t[2] = i - e * l, t[6] = r + n * l, t[10] = a * c;
		} else if (e.order === "YXZ") {
			let e = c * u, n = c * d, r = l * u, i = l * d;
			t[0] = e + i * s, t[4] = r * s - n, t[8] = a * l, t[1] = a * d, t[5] = a * u, t[9] = -s, t[2] = n * s - r, t[6] = i + e * s, t[10] = a * c;
		} else if (e.order === "ZXY") {
			let e = c * u, n = c * d, r = l * u, i = l * d;
			t[0] = e - i * s, t[4] = -a * d, t[8] = r + n * s, t[1] = n + r * s, t[5] = a * u, t[9] = i - e * s, t[2] = -a * l, t[6] = s, t[10] = a * c;
		} else if (e.order === "ZYX") {
			let e = a * u, n = a * d, r = s * u, i = s * d;
			t[0] = c * u, t[4] = r * l - n, t[8] = e * l + i, t[1] = c * d, t[5] = i * l + e, t[9] = n * l - r, t[2] = -l, t[6] = s * c, t[10] = a * c;
		} else if (e.order === "YZX") {
			let e = a * c, n = a * l, r = s * c, i = s * l;
			t[0] = c * u, t[4] = i - e * d, t[8] = r * d + n, t[1] = d, t[5] = a * u, t[9] = -s * u, t[2] = -l * u, t[6] = n * d + r, t[10] = e - i * d;
		} else if (e.order === "XZY") {
			let e = a * c, n = a * l, r = s * c, i = s * l;
			t[0] = c * u, t[4] = -d, t[8] = l * u, t[1] = e * d + i, t[5] = a * u, t[9] = n * d - r, t[2] = r * d - n, t[6] = s * u, t[10] = i * d + e;
		}
		return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
	}
	makeRotationFromQuaternion(e) {
		return this.compose(_zero, e, _one);
	}
	lookAt(e, t, n) {
		let r = this.elements;
		return _z.subVectors(e, t), _z.lengthSq() === 0 && (_z.z = 1), _z.normalize(), _x.crossVectors(n, _z), _x.lengthSq() === 0 && (Math.abs(n.z) === 1 ? _z.x += 1e-4 : _z.z += 1e-4, _z.normalize(), _x.crossVectors(n, _z)), _x.normalize(), _y.crossVectors(_z, _x), r[0] = _x.x, r[4] = _y.x, r[8] = _z.x, r[1] = _x.y, r[5] = _y.y, r[9] = _z.y, r[2] = _x.z, r[6] = _y.z, r[10] = _z.z, this;
	}
	multiply(e) {
		return this.multiplyMatrices(this, e);
	}
	premultiply(e) {
		return this.multiplyMatrices(e, this);
	}
	multiplyMatrices(e, t) {
		let n = e.elements, r = t.elements, i = this.elements, a = n[0], s = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], p = n[13], h = n[2], g = n[6], _ = n[10], v = n[14], y = n[3], b = n[7], x = n[11], S = n[15], C = r[0], w = r[4], T = r[8], E = r[12], D = r[1], O = r[5], k = r[9], A = r[13], j = r[2], N = r[6], P = r[10], ee = r[14], F = r[3], I = r[7], R = r[11], z = r[15];
		return i[0] = a * C + s * D + c * j + l * F, i[4] = a * w + s * O + c * N + l * I, i[8] = a * T + s * k + c * P + l * R, i[12] = a * E + s * A + c * ee + l * z, i[1] = u * C + d * D + f * j + p * F, i[5] = u * w + d * O + f * N + p * I, i[9] = u * T + d * k + f * P + p * R, i[13] = u * E + d * A + f * ee + p * z, i[2] = h * C + g * D + _ * j + v * F, i[6] = h * w + g * O + _ * N + v * I, i[10] = h * T + g * k + _ * P + v * R, i[14] = h * E + g * A + _ * ee + v * z, i[3] = y * C + b * D + x * j + S * F, i[7] = y * w + b * O + x * N + S * I, i[11] = y * T + b * k + x * P + S * R, i[15] = y * E + b * A + x * ee + S * z, this;
	}
	multiplyScalar(e) {
		let t = this.elements;
		return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
	}
	determinant() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[12], a = e[1], s = e[5], c = e[9], l = e[13], u = e[2], d = e[6], f = e[10], p = e[14], h = e[3], g = e[7], _ = e[11], v = e[15], y = c * p - l * f, b = s * p - l * d, x = s * f - c * d, S = a * p - l * u, C = a * f - c * u, w = a * d - s * u;
		return t * (g * y - _ * b + v * x) - n * (h * y - _ * S + v * C) + r * (h * b - g * S + v * w) - i * (h * x - g * C + _ * w);
	}
	determinantAffine() {
		let e = this.elements, t = e[0], n = e[4], r = e[8], i = e[1], a = e[5], s = e[9], c = e[2], l = e[6], u = e[10];
		return t * (a * u - s * l) - n * (i * u - s * c) + r * (i * l - a * c);
	}
	transpose() {
		let e = this.elements, t;
		return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
	}
	setPosition(e, t, n) {
		let r = this.elements;
		return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
	}
	invert() {
		let e = this.elements, t = e[0], n = e[1], r = e[2], i = e[3], a = e[4], s = e[5], c = e[6], l = e[7], u = e[8], d = e[9], f = e[10], p = e[11], h = e[12], g = e[13], _ = e[14], v = e[15], y = t * s - n * a, b = t * c - r * a, x = t * l - i * a, S = n * c - r * s, C = n * l - i * s, w = r * l - i * c, T = u * g - d * h, E = u * _ - f * h, D = u * v - p * h, O = d * _ - f * g, k = d * v - p * g, A = f * v - p * _, j = y * A - b * k + x * O + S * D - C * E + w * T;
		if (j === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
		let N = 1 / j;
		return e[0] = (s * A - c * k + l * O) * N, e[1] = (r * k - n * A - i * O) * N, e[2] = (g * w - _ * C + v * S) * N, e[3] = (f * C - d * w - p * S) * N, e[4] = (c * D - a * A - l * E) * N, e[5] = (t * A - r * D + i * E) * N, e[6] = (_ * x - h * w - v * b) * N, e[7] = (u * w - f * x + p * b) * N, e[8] = (a * k - s * D + l * T) * N, e[9] = (n * D - t * k - i * T) * N, e[10] = (h * C - g * x + v * y) * N, e[11] = (d * x - u * C - p * y) * N, e[12] = (s * E - a * O - c * T) * N, e[13] = (t * O - n * E + r * T) * N, e[14] = (g * b - h * S - _ * y) * N, e[15] = (u * S - d * b + f * y) * N, this;
	}
	scale(e) {
		let t = this.elements, n = e.x, r = e.y, i = e.z;
		return t[0] *= n, t[4] *= r, t[8] *= i, t[1] *= n, t[5] *= r, t[9] *= i, t[2] *= n, t[6] *= r, t[10] *= i, t[3] *= n, t[7] *= r, t[11] *= i, this;
	}
	getMaxScaleOnAxis() {
		let e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
		return Math.sqrt(Math.max(t, n, r));
	}
	makeTranslation(e, t, n) {
		return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
	}
	makeRotationX(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationY(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
	}
	makeRotationZ(e) {
		let t = Math.cos(e), n = Math.sin(e);
		return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
	}
	makeRotationAxis(e, t) {
		let n = Math.cos(t), r = Math.sin(t), i = 1 - n, a = e.x, s = e.y, c = e.z, l = i * a, u = i * s;
		return this.set(l * a + n, l * s - r * c, l * c + r * s, 0, l * s + r * c, u * s + n, u * c - r * a, 0, l * c - r * s, u * c + r * a, i * c * c + n, 0, 0, 0, 0, 1), this;
	}
	makeScale(e, t, n) {
		return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
	}
	makeShear(e, t, n, r, i, a) {
		return this.set(1, n, i, 0, e, 1, a, 0, t, r, 1, 0, 0, 0, 0, 1), this;
	}
	compose(e, t, n) {
		let r = this.elements, i = t._x, a = t._y, s = t._z, c = t._w, l = i + i, u = a + a, d = s + s, f = i * l, p = i * u, h = i * d, g = a * u, _ = a * d, v = s * d, y = c * l, b = c * u, x = c * d, S = n.x, C = n.y, w = n.z;
		return r[0] = (1 - (g + v)) * S, r[1] = (p + x) * S, r[2] = (h - b) * S, r[3] = 0, r[4] = (p - x) * C, r[5] = (1 - (f + v)) * C, r[6] = (_ + y) * C, r[7] = 0, r[8] = (h + b) * w, r[9] = (_ - y) * w, r[10] = (1 - (f + g)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
	}
	decompose(e, t, n) {
		let r = this.elements;
		e.x = r[12], e.y = r[13], e.z = r[14];
		let i = this.determinantAffine();
		if (i === 0) return n.set(1, 1, 1), t.identity(), this;
		let a = _v1$7.set(r[0], r[1], r[2]).length(), s = _v1$7.set(r[4], r[5], r[6]).length(), c = _v1$7.set(r[8], r[9], r[10]).length();
		i < 0 && (a = -a), _m1$2.copy(this);
		let l = 1 / a, u = 1 / s, d = 1 / c;
		return _m1$2.elements[0] *= l, _m1$2.elements[1] *= l, _m1$2.elements[2] *= l, _m1$2.elements[4] *= u, _m1$2.elements[5] *= u, _m1$2.elements[6] *= u, _m1$2.elements[8] *= d, _m1$2.elements[9] *= d, _m1$2.elements[10] *= d, t.setFromRotationMatrix(_m1$2), n.x = a, n.y = s, n.z = c, this;
	}
	makePerspective(e, t, n, r, i, a, s = WebGLCoordinateSystem, c = !1) {
		let l = this.elements, u = 2 * i / (t - e), d = 2 * i / (n - r), f = (t + e) / (t - e), p = (n + r) / (n - r), h, g;
		if (c) h = i / (a - i), g = a * i / (a - i);
		else if (s === 2e3) h = -(a + i) / (a - i), g = -2 * a * i / (a - i);
		else if (s === 2001) h = -a / (a - i), g = -a * i / (a - i);
		else throw Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + s);
		return l[0] = u, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = d, l[9] = p, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = h, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
	}
	makeOrthographic(e, t, n, r, i, a, s = WebGLCoordinateSystem, c = !1) {
		let l = this.elements, u = 2 / (t - e), d = 2 / (n - r), f = -(t + e) / (t - e), p = -(n + r) / (n - r), h, g;
		if (c) h = 1 / (a - i), g = a / (a - i);
		else if (s === 2e3) h = -2 / (a - i), g = -(a + i) / (a - i);
		else if (s === 2001) h = -1 / (a - i), g = -i / (a - i);
		else throw Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + s);
		return l[0] = u, l[4] = 0, l[8] = 0, l[12] = f, l[1] = 0, l[5] = d, l[9] = 0, l[13] = p, l[2] = 0, l[6] = 0, l[10] = h, l[14] = g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
	}
	equals(e) {
		let t = this.elements, n = e.elements;
		for (let e = 0; e < 16; e++) if (t[e] !== n[e]) return !1;
		return !0;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
		return this;
	}
	toArray(e = [], t = 0) {
		let n = this.elements;
		return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
	}
}, _v1$7 = /*@__PURE__*/ new Vector3(), _m1$2 = /*@__PURE__*/ new Matrix4(), _zero = /*@__PURE__*/ new Vector3(0, 0, 0), _one = /*@__PURE__*/ new Vector3(1, 1, 1), _x = /*@__PURE__*/ new Vector3(), _y = /*@__PURE__*/ new Vector3(), _z = /*@__PURE__*/ new Vector3(), _matrix$2 = /*@__PURE__*/ new Matrix4(), _quaternion$4 = /*@__PURE__*/ new Quaternion(), Euler = class e {
	constructor(t = 0, n = 0, r = 0, i = e.DEFAULT_ORDER) {
		this.isEuler = !0, this._x = t, this._y = n, this._z = r, this._order = i;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		this._x = e, this._onChangeCallback();
	}
	get y() {
		return this._y;
	}
	set y(e) {
		this._y = e, this._onChangeCallback();
	}
	get z() {
		return this._z;
	}
	set z(e) {
		this._z = e, this._onChangeCallback();
	}
	get order() {
		return this._order;
	}
	set order(e) {
		this._order = e, this._onChangeCallback();
	}
	set(e, t, n, r = this._order) {
		return this._x = e, this._y = t, this._z = n, this._order = r, this._onChangeCallback(), this;
	}
	clone() {
		return new this.constructor(this._x, this._y, this._z, this._order);
	}
	copy(e) {
		return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
	}
	setFromRotationMatrix(e, t = this._order, n = !0) {
		let r = e.elements, i = r[0], a = r[4], s = r[8], c = r[1], l = r[5], u = r[9], d = r[2], f = r[6], p = r[10];
		switch (t) {
			case "XYZ":
				this._y = Math.asin(clamp(s, -1, 1)), Math.abs(s) < .9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-a, i)) : (this._x = Math.atan2(f, l), this._z = 0);
				break;
			case "YXZ":
				this._x = Math.asin(-clamp(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(s, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, i), this._z = 0);
				break;
			case "ZXY":
				this._x = Math.asin(clamp(f, -1, 1)), Math.abs(f) < .9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-a, l)) : (this._y = 0, this._z = Math.atan2(c, i));
				break;
			case "ZYX":
				this._y = Math.asin(-clamp(d, -1, 1)), Math.abs(d) < .9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, i)) : (this._x = 0, this._z = Math.atan2(-a, l));
				break;
			case "YZX":
				this._z = Math.asin(clamp(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, i)) : (this._x = 0, this._y = Math.atan2(s, p));
				break;
			case "XZY":
				this._z = Math.asin(-clamp(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(s, i)) : (this._x = Math.atan2(-u, p), this._y = 0);
				break;
			default: warn("Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
		}
		return this._order = t, n === !0 && this._onChangeCallback(), this;
	}
	setFromQuaternion(e, t, n) {
		return _matrix$2.makeRotationFromQuaternion(e), this.setFromRotationMatrix(_matrix$2, t, n);
	}
	setFromVector3(e, t = this._order) {
		return this.set(e.x, e.y, e.z, t);
	}
	reorder(e) {
		return _quaternion$4.setFromEuler(this), this.setFromQuaternion(_quaternion$4, e);
	}
	equals(e) {
		return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
	}
	fromArray(e) {
		return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
	}
	_onChange(e) {
		return this._onChangeCallback = e, this;
	}
	_onChangeCallback() {}
	*[Symbol.iterator]() {
		yield this._x, yield this._y, yield this._z, yield this._order;
	}
};
Euler.DEFAULT_ORDER = "XYZ";
var Layers = class {
	constructor() {
		this.mask = 1;
	}
	set(e) {
		this.mask = (1 << e | 0) >>> 0;
	}
	enable(e) {
		this.mask |= 1 << e | 0;
	}
	enableAll() {
		this.mask = -1;
	}
	toggle(e) {
		this.mask ^= 1 << e | 0;
	}
	disable(e) {
		this.mask &= ~(1 << e | 0);
	}
	disableAll() {
		this.mask = 0;
	}
	test(e) {
		return (this.mask & e.mask) !== 0;
	}
	isEnabled(e) {
		return (this.mask & (1 << e | 0)) != 0;
	}
}, _object3DId = 0, _v1$6 = /*@__PURE__*/ new Vector3(), _q1 = /*@__PURE__*/ new Quaternion(), _m1$1$1 = /*@__PURE__*/ new Matrix4(), _target = /*@__PURE__*/ new Vector3(), _position$4 = /*@__PURE__*/ new Vector3(), _scale$3 = /*@__PURE__*/ new Vector3(), _quaternion$3 = /*@__PURE__*/ new Quaternion(), _xAxis = /*@__PURE__*/ new Vector3(1, 0, 0), _yAxis = /*@__PURE__*/ new Vector3(0, 1, 0), _zAxis = /*@__PURE__*/ new Vector3(0, 0, 1), _addedEvent = { type: "added" }, _removedEvent = { type: "removed" }, _childaddedEvent = {
	type: "childadded",
	child: null
}, _childremovedEvent = {
	type: "childremoved",
	child: null
}, Object3D = class e extends EventDispatcher {
	constructor() {
		super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: _object3DId++ }), this.uuid = generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = e.DEFAULT_UP.clone();
		let t = new Vector3(), n = new Euler(), r = new Quaternion(), i = new Vector3(1, 1, 1);
		function a() {
			r.setFromEuler(n, !1);
		}
		function s() {
			n.setFromQuaternion(r, void 0, !1);
		}
		n._onChange(a), r._onChange(s), Object.defineProperties(this, {
			position: {
				configurable: !0,
				enumerable: !0,
				value: t
			},
			rotation: {
				configurable: !0,
				enumerable: !0,
				value: n
			},
			quaternion: {
				configurable: !0,
				enumerable: !0,
				value: r
			},
			scale: {
				configurable: !0,
				enumerable: !0,
				value: i
			},
			modelViewMatrix: { value: new Matrix4() },
			normalMatrix: { value: new Matrix3() }
		}), this.matrix = new Matrix4(), this.matrixWorld = new Matrix4(), this.matrixAutoUpdate = e.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Layers(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
	}
	onBeforeShadow() {}
	onAfterShadow() {}
	onBeforeRender() {}
	onAfterRender() {}
	applyMatrix4(e) {
		this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
	}
	applyQuaternion(e) {
		return this.quaternion.premultiply(e), this;
	}
	setRotationFromAxisAngle(e, t) {
		this.quaternion.setFromAxisAngle(e, t);
	}
	setRotationFromEuler(e) {
		this.quaternion.setFromEuler(e, !0);
	}
	setRotationFromMatrix(e) {
		this.quaternion.setFromRotationMatrix(e);
	}
	setRotationFromQuaternion(e) {
		this.quaternion.copy(e);
	}
	rotateOnAxis(e, t) {
		return _q1.setFromAxisAngle(e, t), this.quaternion.multiply(_q1), this;
	}
	rotateOnWorldAxis(e, t) {
		return _q1.setFromAxisAngle(e, t), this.quaternion.premultiply(_q1), this;
	}
	rotateX(e) {
		return this.rotateOnAxis(_xAxis, e);
	}
	rotateY(e) {
		return this.rotateOnAxis(_yAxis, e);
	}
	rotateZ(e) {
		return this.rotateOnAxis(_zAxis, e);
	}
	translateOnAxis(e, t) {
		return _v1$6.copy(e).applyQuaternion(this.quaternion), this.position.add(_v1$6.multiplyScalar(t)), this;
	}
	translateX(e) {
		return this.translateOnAxis(_xAxis, e);
	}
	translateY(e) {
		return this.translateOnAxis(_yAxis, e);
	}
	translateZ(e) {
		return this.translateOnAxis(_zAxis, e);
	}
	localToWorld(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
	}
	worldToLocal(e) {
		return this.updateWorldMatrix(!0, !1), e.applyMatrix4(_m1$1$1.copy(this.matrixWorld).invert());
	}
	lookAt(e, t, n) {
		e.isVector3 ? _target.copy(e) : _target.set(e, t, n);
		let r = this.parent;
		this.updateWorldMatrix(!0, !1), _position$4.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? _m1$1$1.lookAt(_position$4, _target, this.up) : _m1$1$1.lookAt(_target, _position$4, this.up), this.quaternion.setFromRotationMatrix(_m1$1$1), r && (_m1$1$1.extractRotation(r.matrixWorld), _q1.setFromRotationMatrix(_m1$1$1), this.quaternion.premultiply(_q1.invert()));
	}
	add(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.add(arguments[e]);
			return this;
		}
		return e === this ? (error("Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(_addedEvent), _childaddedEvent.child = e, this.dispatchEvent(_childaddedEvent), _childaddedEvent.child = null) : error("Object3D.add: object not an instance of THREE.Object3D.", e), this);
	}
	remove(e) {
		if (arguments.length > 1) {
			for (let e = 0; e < arguments.length; e++) this.remove(arguments[e]);
			return this;
		}
		let t = this.children.indexOf(e);
		return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(_removedEvent), _childremovedEvent.child = e, this.dispatchEvent(_childremovedEvent), _childremovedEvent.child = null), this;
	}
	removeFromParent() {
		let e = this.parent;
		return e !== null && e.remove(this), this;
	}
	clear() {
		return this.remove(...this.children);
	}
	attach(e) {
		return this.updateWorldMatrix(!0, !1), _m1$1$1.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), _m1$1$1.multiply(e.parent.matrixWorld)), e.applyMatrix4(_m1$1$1), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(!1, !0), e.dispatchEvent(_addedEvent), _childaddedEvent.child = e, this.dispatchEvent(_childaddedEvent), _childaddedEvent.child = null, this;
	}
	getObjectById(e) {
		return this.getObjectByProperty("id", e);
	}
	getObjectByName(e) {
		return this.getObjectByProperty("name", e);
	}
	getObjectByProperty(e, t) {
		if (this[e] === t) return this;
		for (let n = 0, r = this.children.length; n < r; n++) {
			let r = this.children[n].getObjectByProperty(e, t);
			if (r !== void 0) return r;
		}
	}
	getObjectsByProperty(e, t, n = []) {
		this[e] === t && n.push(this);
		let r = this.children;
		for (let i = 0, a = r.length; i < a; i++) r[i].getObjectsByProperty(e, t, n);
		return n;
	}
	getWorldPosition(e) {
		return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
	}
	getWorldQuaternion(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$4, e, _scale$3), e;
	}
	getWorldScale(e) {
		return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(_position$4, _quaternion$3, e), e;
	}
	getWorldDirection(e) {
		this.updateWorldMatrix(!0, !1);
		let t = this.matrixWorld.elements;
		return e.set(t[8], t[9], t[10]).normalize();
	}
	raycast() {}
	traverse(e) {
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverse(e);
	}
	traverseVisible(e) {
		if (this.visible === !1) return;
		e(this);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].traverseVisible(e);
	}
	traverseAncestors(e) {
		let t = this.parent;
		t !== null && (e(t), t.traverseAncestors(e));
	}
	updateMatrix() {
		this.matrix.compose(this.position, this.quaternion, this.scale);
		let e = this.pivot;
		if (e !== null) {
			let t = e.x, n = e.y, r = e.z, i = this.matrix.elements;
			i[12] += t - i[0] * t - i[4] * n - i[8] * r, i[13] += n - i[1] * t - i[5] * n - i[9] * r, i[14] += r - i[2] * t - i[6] * n - i[10] * r;
		}
		this.matrixWorldNeedsUpdate = !0;
	}
	updateMatrixWorld(e) {
		this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, e = !0);
		let t = this.children;
		for (let n = 0, r = t.length; n < r; n++) t[n].updateMatrixWorld(e);
	}
	updateWorldMatrix(e, t, n = !1) {
		let r = this.parent;
		if (e === !0 && r !== null && r.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || n) && (this.matrixWorldAutoUpdate === !0 && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, n = !0), t === !0) {
			let e = this.children;
			for (let t = 0, r = e.length; t < r; t++) e[t].updateWorldMatrix(!1, !0, n);
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string", n = {};
		t && (e = {
			geometries: {},
			materials: {},
			textures: {},
			images: {},
			shapes: {},
			skeletons: {},
			animations: {},
			nodes: {}
		}, n.metadata = {
			version: 4.7,
			type: "Object",
			generator: "Object3D.toJSON"
		});
		let r = {};
		r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), this.static !== !1 && (r.static = this.static), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.pivot !== null && (r.pivot = this.pivot.toArray()), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.morphTargetDictionary !== void 0 && (r.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), this.morphTargetInfluences !== void 0 && (r.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this.perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this._drawRanges, r.reservedRanges = this._reservedRanges, r.geometryInfo = this._geometryInfo.map((e) => ({
			...e,
			boundingBox: e.boundingBox ? e.boundingBox.toJSON() : void 0,
			boundingSphere: e.boundingSphere ? e.boundingSphere.toJSON() : void 0
		})), r.instanceInfo = this._instanceInfo.map((e) => ({ ...e })), r.availableInstanceIds = this._availableInstanceIds.slice(), r.availableGeometryIds = this._availableGeometryIds.slice(), r.nextIndexStart = this._nextIndexStart, r.nextVertexStart = this._nextVertexStart, r.geometryCount = this._geometryCount, r.maxInstanceCount = this._maxInstanceCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.matricesTexture = this._matricesTexture.toJSON(e), r.indirectTexture = this._indirectTexture.toJSON(e), this._colorsTexture !== null && (r.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (r.boundingSphere = this.boundingSphere.toJSON()), this.boundingBox !== null && (r.boundingBox = this.boundingBox.toJSON()));
		function i(t, n) {
			return t[n.uuid] === void 0 && (t[n.uuid] = n.toJSON(e)), n.uuid;
		}
		if (this.isScene) this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
		else if (this.isMesh || this.isLine || this.isPoints) {
			r.geometry = i(e.geometries, this.geometry);
			let t = this.geometry.parameters;
			if (t !== void 0 && t.shapes !== void 0) {
				let n = t.shapes;
				if (Array.isArray(n)) for (let t = 0, r = n.length; t < r; t++) {
					let r = n[t];
					i(e.shapes, r);
				}
				else i(e.shapes, n);
			}
		}
		if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (i(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
			let t = [];
			for (let n = 0, r = this.material.length; n < r; n++) t.push(i(e.materials, this.material[n]));
			r.material = t;
		} else r.material = i(e.materials, this.material);
		if (this.children.length > 0) {
			r.children = [];
			for (let t = 0; t < this.children.length; t++) r.children.push(this.children[t].toJSON(e).object);
		}
		if (this.animations.length > 0) {
			r.animations = [];
			for (let t = 0; t < this.animations.length; t++) {
				let n = this.animations[t];
				r.animations.push(i(e.animations, n));
			}
		}
		if (t) {
			let t = a(e.geometries), r = a(e.materials), i = a(e.textures), s = a(e.images), c = a(e.shapes), l = a(e.skeletons), u = a(e.animations), d = a(e.nodes);
			t.length > 0 && (n.geometries = t), r.length > 0 && (n.materials = r), i.length > 0 && (n.textures = i), s.length > 0 && (n.images = s), c.length > 0 && (n.shapes = c), l.length > 0 && (n.skeletons = l), u.length > 0 && (n.animations = u), d.length > 0 && (n.nodes = d);
		}
		return n.object = r, n;
		function a(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
	}
	clone(e) {
		return new this.constructor().copy(this, e);
	}
	copy(e, t = !0) {
		if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.pivot = e.pivot === null ? null : e.pivot.clone(), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.static = e.static, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0) for (let t = 0; t < e.children.length; t++) {
			let n = e.children[t];
			this.add(n.clone());
		}
		return this;
	}
};
Object3D.DEFAULT_UP = /*@__PURE__*/ new Vector3(0, 1, 0), Object3D.DEFAULT_MATRIX_AUTO_UPDATE = !0, Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
var Group = class extends Object3D {
	constructor() {
		super(), this.isGroup = !0, this.type = "Group";
	}
}, _moveEvent = { type: "move" }, WebXRController = class {
	constructor() {
		this._targetRay = null, this._grip = null, this._hand = null;
	}
	getHandSpace() {
		return this._hand === null && (this._hand = new Group(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
	}
	getTargetRaySpace() {
		return this._targetRay === null && (this._targetRay = new Group(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new Vector3(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new Vector3()), this._targetRay;
	}
	getGripSpace() {
		return this._grip === null && (this._grip = new Group(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new Vector3(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new Vector3(), this._grip.eventsEnabled = !1), this._grip;
	}
	dispatchEvent(e) {
		return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
	}
	connect(e) {
		if (e && e.hand) {
			let t = this._hand;
			if (t) for (let n of e.hand.values()) this._getHandJoint(t, n);
		}
		return this.dispatchEvent({
			type: "connected",
			data: e
		}), this;
	}
	disconnect(e) {
		return this.dispatchEvent({
			type: "disconnected",
			data: e
		}), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
	}
	update(e, t, n) {
		let r = null, i = null, a = null, s = this._targetRay, c = this._grip, l = this._hand;
		if (e && t.session.visibilityState !== "visible-blurred") {
			if (l && e.hand) {
				a = !0;
				for (let r of e.hand.values()) {
					let e = t.getJointPose(r, n), i = this._getHandJoint(l, r);
					e !== null && (i.matrix.fromArray(e.transform.matrix), i.matrix.decompose(i.position, i.rotation, i.scale), i.matrixWorldNeedsUpdate = !0, i.jointRadius = e.radius), i.visible = e !== null;
				}
				let r = l.joints["index-finger-tip"], i = l.joints["thumb-tip"], s = r.position.distanceTo(i.position), c = .02, u = .005;
				l.inputState.pinching && s > .025 ? (l.inputState.pinching = !1, this.dispatchEvent({
					type: "pinchend",
					handedness: e.handedness,
					target: this
				})) : !l.inputState.pinching && s <= .015 && (l.inputState.pinching = !0, this.dispatchEvent({
					type: "pinchstart",
					handedness: e.handedness,
					target: this
				}));
			} else c !== null && e.gripSpace && (i = t.getPose(e.gripSpace, n), i !== null && (c.matrix.fromArray(i.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, i.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(i.linearVelocity)) : c.hasLinearVelocity = !1, i.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(i.angularVelocity)) : c.hasAngularVelocity = !1, c.eventsEnabled && c.dispatchEvent({
				type: "gripUpdated",
				data: e,
				target: this
			})));
			s !== null && (r = t.getPose(e.targetRaySpace, n), r === null && i !== null && (r = i), r !== null && (s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.rotation, s.scale), s.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (s.hasLinearVelocity = !0, s.linearVelocity.copy(r.linearVelocity)) : s.hasLinearVelocity = !1, r.angularVelocity ? (s.hasAngularVelocity = !0, s.angularVelocity.copy(r.angularVelocity)) : s.hasAngularVelocity = !1, this.dispatchEvent(_moveEvent)));
		}
		return s !== null && (s.visible = r !== null), c !== null && (c.visible = i !== null), l !== null && (l.visible = a !== null), this;
	}
	_getHandJoint(e, t) {
		if (e.joints[t.jointName] === void 0) {
			let n = new Group();
			n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
		}
		return e.joints[t.jointName];
	}
}, _colorKeywords = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, _hslA = {
	h: 0,
	s: 0,
	l: 0
}, _hslB = {
	h: 0,
	s: 0,
	l: 0
};
function hue2rgb(e, t, n) {
	return n < 0 && (n += 1), n > 1 && --n, n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * 6 * (2 / 3 - n) : e;
}
var Color$1 = class {
	constructor(e, t, n) {
		return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
	}
	set(e, t, n) {
		if (t === void 0 && n === void 0) {
			let t = e;
			t && t.isColor ? this.copy(t) : typeof t == "number" ? this.setHex(t) : typeof t == "string" && this.setStyle(t);
		} else this.setRGB(e, t, n);
		return this;
	}
	setScalar(e) {
		return this.r = e, this.g = e, this.b = e, this;
	}
	setHex(e, t = SRGBColorSpace) {
		return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ColorManagement.colorSpaceToWorking(this, t), this;
	}
	setRGB(e, t, n, r = ColorManagement.workingColorSpace) {
		return this.r = e, this.g = t, this.b = n, ColorManagement.colorSpaceToWorking(this, r), this;
	}
	setHSL(e, t, n, r = ColorManagement.workingColorSpace) {
		if (e = euclideanModulo(e, 1), t = clamp(t, 0, 1), n = clamp(n, 0, 1), t === 0) this.r = this.g = this.b = n;
		else {
			let r = n <= .5 ? n * (1 + t) : n + t - n * t, i = 2 * n - r;
			this.r = hue2rgb(i, r, e + 1 / 3), this.g = hue2rgb(i, r, e), this.b = hue2rgb(i, r, e - 1 / 3);
		}
		return ColorManagement.colorSpaceToWorking(this, r), this;
	}
	setStyle(e, t = SRGBColorSpace) {
		function n(t) {
			t !== void 0 && parseFloat(t) < 1 && warn("Color: Alpha component of " + e + " will be ignored.");
		}
		let r;
		if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
			let i, a = r[1], s = r[2];
			switch (a) {
				case "rgb":
				case "rgba":
					if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return n(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, t);
					if (i = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return n(i[4]), this.setRGB(Math.min(100, parseInt(i[1], 10)) / 100, Math.min(100, parseInt(i[2], 10)) / 100, Math.min(100, parseInt(i[3], 10)) / 100, t);
					break;
				case "hsl":
				case "hsla":
					if (i = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s)) return n(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, t);
					break;
				default: warn("Color: Unknown color model " + e);
			}
		} else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
			let n = r[1], i = n.length;
			if (i === 3) return this.setRGB(parseInt(n.charAt(0), 16) / 15, parseInt(n.charAt(1), 16) / 15, parseInt(n.charAt(2), 16) / 15, t);
			if (i === 6) return this.setHex(parseInt(n, 16), t);
			warn("Color: Invalid hex color " + e);
		} else if (e && e.length > 0) return this.setColorName(e, t);
		return this;
	}
	setColorName(e, t = SRGBColorSpace) {
		let n = _colorKeywords[e.toLowerCase()];
		return n === void 0 ? warn("Color: Unknown color " + e) : this.setHex(n, t), this;
	}
	clone() {
		return new this.constructor(this.r, this.g, this.b);
	}
	copy(e) {
		return this.r = e.r, this.g = e.g, this.b = e.b, this;
	}
	copySRGBToLinear(e) {
		return this.r = SRGBToLinear(e.r), this.g = SRGBToLinear(e.g), this.b = SRGBToLinear(e.b), this;
	}
	copyLinearToSRGB(e) {
		return this.r = LinearToSRGB(e.r), this.g = LinearToSRGB(e.g), this.b = LinearToSRGB(e.b), this;
	}
	convertSRGBToLinear() {
		return this.copySRGBToLinear(this), this;
	}
	convertLinearToSRGB() {
		return this.copyLinearToSRGB(this), this;
	}
	getHex(e = SRGBColorSpace) {
		return ColorManagement.workingToColorSpace(_color.copy(this), e), Math.round(clamp(_color.r * 255, 0, 255)) * 65536 + Math.round(clamp(_color.g * 255, 0, 255)) * 256 + Math.round(clamp(_color.b * 255, 0, 255));
	}
	getHexString(e = SRGBColorSpace) {
		return ("000000" + this.getHex(e).toString(16)).slice(-6);
	}
	getHSL(e, t = ColorManagement.workingColorSpace) {
		ColorManagement.workingToColorSpace(_color.copy(this), t);
		let n = _color.r, r = _color.g, i = _color.b, a = Math.max(n, r, i), s = Math.min(n, r, i), c, l, u = (s + a) / 2;
		if (s === a) c = 0, l = 0;
		else {
			let e = a - s;
			switch (l = u <= .5 ? e / (a + s) : e / (2 - a - s), a) {
				case n:
					c = (r - i) / e + (r < i ? 6 : 0);
					break;
				case r:
					c = (i - n) / e + 2;
					break;
				case i:
					c = (n - r) / e + 4;
					break;
			}
			c /= 6;
		}
		return e.h = c, e.s = l, e.l = u, e;
	}
	getRGB(e, t = ColorManagement.workingColorSpace) {
		return ColorManagement.workingToColorSpace(_color.copy(this), t), e.r = _color.r, e.g = _color.g, e.b = _color.b, e;
	}
	getStyle(e = SRGBColorSpace) {
		ColorManagement.workingToColorSpace(_color.copy(this), e);
		let t = _color.r, n = _color.g, r = _color.b;
		return e === "srgb" ? `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})` : `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`;
	}
	offsetHSL(e, t, n) {
		return this.getHSL(_hslA), this.setHSL(_hslA.h + e, _hslA.s + t, _hslA.l + n);
	}
	add(e) {
		return this.r += e.r, this.g += e.g, this.b += e.b, this;
	}
	addColors(e, t) {
		return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
	}
	addScalar(e) {
		return this.r += e, this.g += e, this.b += e, this;
	}
	sub(e) {
		return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
	}
	multiply(e) {
		return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
	}
	multiplyScalar(e) {
		return this.r *= e, this.g *= e, this.b *= e, this;
	}
	lerp(e, t) {
		return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
	}
	lerpColors(e, t, n) {
		return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
	}
	lerpHSL(e, t) {
		this.getHSL(_hslA), e.getHSL(_hslB);
		let n = lerp(_hslA.h, _hslB.h, t), r = lerp(_hslA.s, _hslB.s, t), i = lerp(_hslA.l, _hslB.l, t);
		return this.setHSL(n, r, i), this;
	}
	setFromVector3(e) {
		return this.r = e.x, this.g = e.y, this.b = e.z, this;
	}
	applyMatrix3(e) {
		let t = this.r, n = this.g, r = this.b, i = e.elements;
		return this.r = i[0] * t + i[3] * n + i[6] * r, this.g = i[1] * t + i[4] * n + i[7] * r, this.b = i[2] * t + i[5] * n + i[8] * r, this;
	}
	equals(e) {
		return e.r === this.r && e.g === this.g && e.b === this.b;
	}
	fromArray(e, t = 0) {
		return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
	}
	toArray(e = [], t = 0) {
		return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
	}
	fromBufferAttribute(e, t) {
		return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
	}
	toJSON() {
		return this.getHex();
	}
	*[Symbol.iterator]() {
		yield this.r, yield this.g, yield this.b;
	}
}, _color = /*@__PURE__*/ new Color$1();
Color$1.NAMES = _colorKeywords;
var Fog = class e {
	constructor(e, t = 1, n = 1e3) {
		this.isFog = !0, this.name = "", this.color = new Color$1(e), this.near = t, this.far = n;
	}
	clone() {
		return new e(this.color, this.near, this.far);
	}
	toJSON() {
		return {
			type: "Fog",
			name: this.name,
			color: this.color.getHex(),
			near: this.near,
			far: this.far
		};
	}
}, Scene = class extends Object3D {
	constructor() {
		super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Euler(), this.environmentIntensity = 1, this.environmentRotation = new Euler(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	copy(e, t) {
		return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
	}
}, _v0$2 = /*@__PURE__*/ new Vector3(), _v1$5 = /*@__PURE__*/ new Vector3(), _v2$4 = /*@__PURE__*/ new Vector3(), _v3$2 = /*@__PURE__*/ new Vector3(), _vab = /*@__PURE__*/ new Vector3(), _vac = /*@__PURE__*/ new Vector3(), _vbc = /*@__PURE__*/ new Vector3(), _vap = /*@__PURE__*/ new Vector3(), _vbp = /*@__PURE__*/ new Vector3(), _vcp = /*@__PURE__*/ new Vector3(), _v40 = /*@__PURE__*/ new Vector4(), _v41 = /*@__PURE__*/ new Vector4(), _v42 = /*@__PURE__*/ new Vector4(), Triangle = class e {
	constructor(e = new Vector3(), t = new Vector3(), n = new Vector3()) {
		this.a = e, this.b = t, this.c = n;
	}
	static getNormal(e, t, n, r) {
		r.subVectors(n, t), _v0$2.subVectors(e, t), r.cross(_v0$2);
		let i = r.lengthSq();
		return i > 0 ? r.multiplyScalar(1 / Math.sqrt(i)) : r.set(0, 0, 0);
	}
	static getBarycoord(e, t, n, r, i) {
		_v0$2.subVectors(r, t), _v1$5.subVectors(n, t), _v2$4.subVectors(e, t);
		let a = _v0$2.dot(_v0$2), s = _v0$2.dot(_v1$5), c = _v0$2.dot(_v2$4), l = _v1$5.dot(_v1$5), u = _v1$5.dot(_v2$4), d = a * l - s * s;
		if (d === 0) return i.set(0, 0, 0), null;
		let f = 1 / d, p = (l * c - s * u) * f, h = (a * u - s * c) * f;
		return i.set(1 - p - h, h, p);
	}
	static containsPoint(e, t, n, r) {
		return this.getBarycoord(e, t, n, r, _v3$2) !== null && _v3$2.x >= 0 && _v3$2.y >= 0 && _v3$2.x + _v3$2.y <= 1;
	}
	static getInterpolation(e, t, n, r, i, a, s, c) {
		return this.getBarycoord(e, t, n, r, _v3$2) === null ? (c.x = 0, c.y = 0, "z" in c && (c.z = 0), "w" in c && (c.w = 0), null) : (c.setScalar(0), c.addScaledVector(i, _v3$2.x), c.addScaledVector(a, _v3$2.y), c.addScaledVector(s, _v3$2.z), c);
	}
	static getInterpolatedAttribute(e, t, n, r, i, a) {
		return _v40.setScalar(0), _v41.setScalar(0), _v42.setScalar(0), _v40.fromBufferAttribute(e, t), _v41.fromBufferAttribute(e, n), _v42.fromBufferAttribute(e, r), a.setScalar(0), a.addScaledVector(_v40, i.x), a.addScaledVector(_v41, i.y), a.addScaledVector(_v42, i.z), a;
	}
	static isFrontFacing(e, t, n, r) {
		return _v0$2.subVectors(n, t), _v1$5.subVectors(e, t), _v0$2.cross(_v1$5).dot(r) < 0;
	}
	set(e, t, n) {
		return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
	}
	setFromPointsAndIndices(e, t, n, r) {
		return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]), this;
	}
	setFromAttributeAndIndices(e, t, n, r) {
		return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
	}
	getArea() {
		return _v0$2.subVectors(this.c, this.b), _v1$5.subVectors(this.a, this.b), _v0$2.cross(_v1$5).length() * .5;
	}
	getMidpoint(e) {
		return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
	}
	getNormal(t) {
		return e.getNormal(this.a, this.b, this.c, t);
	}
	getPlane(e) {
		return e.setFromCoplanarPoints(this.a, this.b, this.c);
	}
	getBarycoord(t, n) {
		return e.getBarycoord(t, this.a, this.b, this.c, n);
	}
	getInterpolation(t, n, r, i, a) {
		return e.getInterpolation(t, this.a, this.b, this.c, n, r, i, a);
	}
	containsPoint(t) {
		return e.containsPoint(t, this.a, this.b, this.c);
	}
	isFrontFacing(t) {
		return e.isFrontFacing(this.a, this.b, this.c, t);
	}
	intersectsBox(e) {
		return e.intersectsTriangle(this);
	}
	closestPointToPoint(e, t) {
		let n = this.a, r = this.b, i = this.c, a, s;
		_vab.subVectors(r, n), _vac.subVectors(i, n), _vap.subVectors(e, n);
		let c = _vab.dot(_vap), l = _vac.dot(_vap);
		if (c <= 0 && l <= 0) return t.copy(n);
		_vbp.subVectors(e, r);
		let u = _vab.dot(_vbp), d = _vac.dot(_vbp);
		if (u >= 0 && d <= u) return t.copy(r);
		let f = c * d - u * l;
		if (f <= 0 && c >= 0 && u <= 0) return a = c / (c - u), t.copy(n).addScaledVector(_vab, a);
		_vcp.subVectors(e, i);
		let p = _vab.dot(_vcp), h = _vac.dot(_vcp);
		if (h >= 0 && p <= h) return t.copy(i);
		let g = p * l - c * h;
		if (g <= 0 && l >= 0 && h <= 0) return s = l / (l - h), t.copy(n).addScaledVector(_vac, s);
		let _ = u * h - p * d;
		if (_ <= 0 && d - u >= 0 && p - h >= 0) return _vbc.subVectors(i, r), s = (d - u) / (d - u + (p - h)), t.copy(r).addScaledVector(_vbc, s);
		let v = 1 / (_ + g + f);
		return a = g * v, s = f * v, t.copy(n).addScaledVector(_vab, a).addScaledVector(_vac, s);
	}
	equals(e) {
		return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
	}
}, Box3 = class {
	constructor(e = new Vector3(Infinity, Infinity, Infinity), t = new Vector3(-Infinity, -Infinity, -Infinity)) {
		this.isBox3 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromArray(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(_vector$b.fromArray(e, t));
		return this;
	}
	setFromBufferAttribute(e) {
		this.makeEmpty();
		for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(_vector$b.fromBufferAttribute(e, t));
		return this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = _vector$b.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	setFromObject(e, t = !1) {
		return this.makeEmpty(), this.expandByObject(e, t);
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = this.min.z = Infinity, this.max.x = this.max.y = this.max.z = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	expandByObject(e, t = !1) {
		e.updateWorldMatrix(!1, !1);
		let n = e.geometry;
		if (n !== void 0) {
			let r = n.getAttribute("position");
			if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0) for (let t = 0, n = r.count; t < n; t++) e.isMesh === !0 ? e.getVertexPosition(t, _vector$b) : _vector$b.fromBufferAttribute(r, t), _vector$b.applyMatrix4(e.matrixWorld), this.expandByPoint(_vector$b);
			else e.boundingBox === void 0 ? (n.boundingBox === null && n.computeBoundingBox(), _box$4.copy(n.boundingBox)) : (e.boundingBox === null && e.computeBoundingBox(), _box$4.copy(e.boundingBox)), _box$4.applyMatrix4(e.matrixWorld), this.union(_box$4);
		}
		let r = e.children;
		for (let e = 0, n = r.length; e < n; e++) this.expandByObject(r[e], t);
		return this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
	}
	intersectsSphere(e) {
		return this.clampPoint(e.center, _vector$b), _vector$b.distanceToSquared(e.center) <= e.radius * e.radius;
	}
	intersectsPlane(e) {
		let t, n;
		return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
	}
	intersectsTriangle(e) {
		if (this.isEmpty()) return !1;
		this.getCenter(_center), _extents.subVectors(this.max, _center), _v0$1.subVectors(e.a, _center), _v1$4.subVectors(e.b, _center), _v2$3.subVectors(e.c, _center), _f0.subVectors(_v1$4, _v0$1), _f1.subVectors(_v2$3, _v1$4), _f2.subVectors(_v0$1, _v2$3);
		let t = [
			0,
			-_f0.z,
			_f0.y,
			0,
			-_f1.z,
			_f1.y,
			0,
			-_f2.z,
			_f2.y,
			_f0.z,
			0,
			-_f0.x,
			_f1.z,
			0,
			-_f1.x,
			_f2.z,
			0,
			-_f2.x,
			-_f0.y,
			_f0.x,
			0,
			-_f1.y,
			_f1.x,
			0,
			-_f2.y,
			_f2.x,
			0
		];
		return !satForAxes(t, _v0$1, _v1$4, _v2$3, _extents) || (t = [
			1,
			0,
			0,
			0,
			1,
			0,
			0,
			0,
			1
		], !satForAxes(t, _v0$1, _v1$4, _v2$3, _extents)) ? !1 : (_triangleNormal.crossVectors(_f0, _f1), t = [
			_triangleNormal.x,
			_triangleNormal.y,
			_triangleNormal.z
		], satForAxes(t, _v0$1, _v1$4, _v2$3, _extents));
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, _vector$b).distanceTo(e);
	}
	getBoundingSphere(e) {
		return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(_vector$b).length() * .5), e;
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	applyMatrix4(e) {
		return this.isEmpty() ? this : (_points[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), _points[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), _points[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), _points[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), _points[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), _points[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), _points[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), _points[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(_points), this);
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
	toJSON() {
		return {
			min: this.min.toArray(),
			max: this.max.toArray()
		};
	}
	fromJSON(e) {
		return this.min.fromArray(e.min), this.max.fromArray(e.max), this;
	}
}, _points = [
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3(),
	/*@__PURE__*/ new Vector3()
], _vector$b = /*@__PURE__*/ new Vector3(), _box$4 = /*@__PURE__*/ new Box3(), _v0$1 = /*@__PURE__*/ new Vector3(), _v1$4 = /*@__PURE__*/ new Vector3(), _v2$3 = /*@__PURE__*/ new Vector3(), _f0 = /*@__PURE__*/ new Vector3(), _f1 = /*@__PURE__*/ new Vector3(), _f2 = /*@__PURE__*/ new Vector3(), _center = /*@__PURE__*/ new Vector3(), _extents = /*@__PURE__*/ new Vector3(), _triangleNormal = /*@__PURE__*/ new Vector3(), _testAxis = /*@__PURE__*/ new Vector3();
function satForAxes(e, t, n, r, i) {
	for (let a = 0, s = e.length - 3; a <= s; a += 3) {
		_testAxis.fromArray(e, a);
		let s = i.x * Math.abs(_testAxis.x) + i.y * Math.abs(_testAxis.y) + i.z * Math.abs(_testAxis.z), c = t.dot(_testAxis), l = n.dot(_testAxis), u = r.dot(_testAxis);
		if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > s) return !1;
	}
	return !0;
}
var _vector$a = /*@__PURE__*/ new Vector3(), _vector2$1 = /*@__PURE__*/ new Vector2(), _id$2 = 0, BufferAttribute = class extends EventDispatcher {
	constructor(e, t, n = !1) {
		if (super(), Array.isArray(e)) throw TypeError("THREE.BufferAttribute: array should be a Typed Array.");
		this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: _id$2++ }), this.name = "", this.array = e, this.itemSize = t, this.count = e === void 0 ? 0 : e.length / t, this.normalized = n, this.usage = StaticDrawUsage, this.updateRanges = [], this.gpuType = FloatType, this.version = 0;
	}
	onUploadCallback() {}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
	setUsage(e) {
		return this.usage = e, this;
	}
	addUpdateRange(e, t) {
		this.updateRanges.push({
			start: e,
			count: t
		});
	}
	clearUpdateRanges() {
		this.updateRanges.length = 0;
	}
	copy(e) {
		return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
	}
	copyAt(e, t, n) {
		e *= this.itemSize, n *= t.itemSize;
		for (let r = 0, i = this.itemSize; r < i; r++) this.array[e + r] = t.array[n + r];
		return this;
	}
	copyArray(e) {
		return this.array.set(e), this;
	}
	applyMatrix3(e) {
		if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) _vector2$1.fromBufferAttribute(this, t), _vector2$1.applyMatrix3(e), this.setXY(t, _vector2$1.x, _vector2$1.y);
		else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) _vector$a.fromBufferAttribute(this, t), _vector$a.applyMatrix3(e), this.setXYZ(t, _vector$a.x, _vector$a.y, _vector$a.z);
		return this;
	}
	applyMatrix4(e) {
		for (let t = 0, n = this.count; t < n; t++) _vector$a.fromBufferAttribute(this, t), _vector$a.applyMatrix4(e), this.setXYZ(t, _vector$a.x, _vector$a.y, _vector$a.z);
		return this;
	}
	applyNormalMatrix(e) {
		for (let t = 0, n = this.count; t < n; t++) _vector$a.fromBufferAttribute(this, t), _vector$a.applyNormalMatrix(e), this.setXYZ(t, _vector$a.x, _vector$a.y, _vector$a.z);
		return this;
	}
	transformDirection(e) {
		for (let t = 0, n = this.count; t < n; t++) _vector$a.fromBufferAttribute(this, t), _vector$a.transformDirection(e), this.setXYZ(t, _vector$a.x, _vector$a.y, _vector$a.z);
		return this;
	}
	set(e, t = 0) {
		return this.array.set(e, t), this;
	}
	getComponent(e, t) {
		let n = this.array[e * this.itemSize + t];
		return this.normalized && (n = denormalize(n, this.array)), n;
	}
	setComponent(e, t, n) {
		return this.normalized && (n = normalize(n, this.array)), this.array[e * this.itemSize + t] = n, this;
	}
	getX(e) {
		let t = this.array[e * this.itemSize];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setX(e, t) {
		return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize] = t, this;
	}
	getY(e) {
		let t = this.array[e * this.itemSize + 1];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setY(e, t) {
		return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
	}
	getZ(e) {
		let t = this.array[e * this.itemSize + 2];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setZ(e, t) {
		return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
	}
	getW(e) {
		let t = this.array[e * this.itemSize + 3];
		return this.normalized && (t = denormalize(t, this.array)), t;
	}
	setW(e, t) {
		return this.normalized && (t = normalize(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
	}
	setXY(e, t, n) {
		return e *= this.itemSize, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
	}
	setXYZ(e, t, n, r) {
		return e *= this.itemSize, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array), r = normalize(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
	}
	setXYZW(e, t, n, r, i) {
		return e *= this.itemSize, this.normalized && (t = normalize(t, this.array), n = normalize(n, this.array), r = normalize(r, this.array), i = normalize(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = i, this;
	}
	onUpload(e) {
		return this.onUploadCallback = e, this;
	}
	clone() {
		return new this.constructor(this.array, this.itemSize).copy(this);
	}
	toJSON() {
		let e = {
			itemSize: this.itemSize,
			type: this.array.constructor.name,
			array: Array.from(this.array),
			normalized: this.normalized
		};
		return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, Uint16BufferAttribute = class extends BufferAttribute {
	constructor(e, t, n) {
		super(new Uint16Array(e), t, n);
	}
}, Uint32BufferAttribute = class extends BufferAttribute {
	constructor(e, t, n) {
		super(new Uint32Array(e), t, n);
	}
}, Float32BufferAttribute = class extends BufferAttribute {
	constructor(e, t, n) {
		super(new Float32Array(e), t, n);
	}
}, _box$3 = /*@__PURE__*/ new Box3(), _v1$3 = /*@__PURE__*/ new Vector3(), _v2$2 = /*@__PURE__*/ new Vector3(), Sphere = class {
	constructor(e = new Vector3(), t = -1) {
		this.isSphere = !0, this.center = e, this.radius = t;
	}
	set(e, t) {
		return this.center.copy(e), this.radius = t, this;
	}
	setFromPoints(e, t) {
		let n = this.center;
		t === void 0 ? _box$3.setFromPoints(e).getCenter(n) : n.copy(t);
		let r = 0;
		for (let t = 0, i = e.length; t < i; t++) r = Math.max(r, n.distanceToSquared(e[t]));
		return this.radius = Math.sqrt(r), this;
	}
	copy(e) {
		return this.center.copy(e.center), this.radius = e.radius, this;
	}
	isEmpty() {
		return this.radius < 0;
	}
	makeEmpty() {
		return this.center.set(0, 0, 0), this.radius = -1, this;
	}
	containsPoint(e) {
		return e.distanceToSquared(this.center) <= this.radius * this.radius;
	}
	distanceToPoint(e) {
		return e.distanceTo(this.center) - this.radius;
	}
	intersectsSphere(e) {
		let t = this.radius + e.radius;
		return e.center.distanceToSquared(this.center) <= t * t;
	}
	intersectsBox(e) {
		return e.intersectsSphere(this);
	}
	intersectsPlane(e) {
		return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
	}
	clampPoint(e, t) {
		let n = this.center.distanceToSquared(e);
		return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
	}
	getBoundingBox(e) {
		return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
	}
	applyMatrix4(e) {
		return this.center.applyMatrix4(e), this.radius *= e.getMaxScaleOnAxis(), this;
	}
	translate(e) {
		return this.center.add(e), this;
	}
	expandByPoint(e) {
		if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
		_v1$3.subVectors(e, this.center);
		let t = _v1$3.lengthSq();
		if (t > this.radius * this.radius) {
			let e = Math.sqrt(t), n = (e - this.radius) * .5;
			this.center.addScaledVector(_v1$3, n / e), this.radius += n;
		}
		return this;
	}
	union(e) {
		return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (_v2$2.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(_v1$3.copy(e.center).add(_v2$2)), this.expandByPoint(_v1$3.copy(e.center).sub(_v2$2))), this);
	}
	equals(e) {
		return e.center.equals(this.center) && e.radius === this.radius;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		return {
			radius: this.radius,
			center: this.center.toArray()
		};
	}
	fromJSON(e) {
		return this.radius = e.radius, this.center.fromArray(e.center), this;
	}
}, _id$1 = 0, _m1$3 = /*@__PURE__*/ new Matrix4(), _obj = /*@__PURE__*/ new Object3D(), _offset = /*@__PURE__*/ new Vector3(), _box$2 = /*@__PURE__*/ new Box3(), _boxMorphTargets = /*@__PURE__*/ new Box3(), _vector$9 = /*@__PURE__*/ new Vector3(), BufferGeometry = class e extends EventDispatcher {
	constructor() {
		super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: _id$1++ }), this.uuid = generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
			start: 0,
			count: Infinity
		}, this.userData = {}, this._transformed = !1;
	}
	getIndex() {
		return this.index;
	}
	setIndex(e) {
		return Array.isArray(e) ? this.index = new (arrayNeedsUint32(e) ? Uint32BufferAttribute : Uint16BufferAttribute)(e, 1) : this.index = e, this;
	}
	setIndirect(e, t = 0) {
		return this.indirect = e, this.indirectOffset = t, this;
	}
	getIndirect() {
		return this.indirect;
	}
	getAttribute(e) {
		return this.attributes[e];
	}
	setAttribute(e, t) {
		return this.attributes[e] = t, this;
	}
	deleteAttribute(e) {
		return delete this.attributes[e], this;
	}
	hasAttribute(e) {
		return this.attributes[e] !== void 0;
	}
	addGroup(e, t, n = 0) {
		this.groups.push({
			start: e,
			count: t,
			materialIndex: n
		});
	}
	clearGroups() {
		this.groups = [];
	}
	setDrawRange(e, t) {
		this.drawRange.start = e, this.drawRange.count = t;
	}
	applyMatrix4(e) {
		let t = this.attributes.position;
		t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
		let n = this.attributes.normal;
		if (n !== void 0) {
			let t = new Matrix3().getNormalMatrix(e);
			n.applyNormalMatrix(t), n.needsUpdate = !0;
		}
		let r = this.attributes.tangent;
		return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this._transformed = !0, this;
	}
	applyQuaternion(e) {
		return _m1$3.makeRotationFromQuaternion(e), this.applyMatrix4(_m1$3), this;
	}
	rotateX(e) {
		return _m1$3.makeRotationX(e), this.applyMatrix4(_m1$3), this;
	}
	rotateY(e) {
		return _m1$3.makeRotationY(e), this.applyMatrix4(_m1$3), this;
	}
	rotateZ(e) {
		return _m1$3.makeRotationZ(e), this.applyMatrix4(_m1$3), this;
	}
	translate(e, t, n) {
		return _m1$3.makeTranslation(e, t, n), this.applyMatrix4(_m1$3), this;
	}
	scale(e, t, n) {
		return _m1$3.makeScale(e, t, n), this.applyMatrix4(_m1$3), this;
	}
	lookAt(e) {
		return _obj.lookAt(e), _obj.updateMatrix(), this.applyMatrix4(_obj.matrix), this;
	}
	center() {
		return this.computeBoundingBox(), this.boundingBox.getCenter(_offset).negate(), this.translate(_offset.x, _offset.y, _offset.z), this;
	}
	setFromPoints(e) {
		let t = this.getAttribute("position");
		if (t === void 0) {
			let t = [];
			for (let n = 0, r = e.length; n < r; n++) {
				let r = e[n];
				t.push(r.x, r.y, r.z || 0);
			}
			this.setAttribute("position", new Float32BufferAttribute(t, 3));
		} else {
			let n = Math.min(e.length, t.count);
			for (let r = 0; r < n; r++) {
				let n = e[r];
				t.setXYZ(r, n.x, n.y, n.z || 0);
			}
			e.length > t.count && warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = !0;
		}
		return this;
	}
	computeBoundingBox() {
		this.boundingBox === null && (this.boundingBox = new Box3());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new Vector3(-Infinity, -Infinity, -Infinity), new Vector3(Infinity, Infinity, Infinity));
			return;
		}
		if (e !== void 0) {
			if (this.boundingBox.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				_box$2.setFromBufferAttribute(n), this.morphTargetsRelative ? (_vector$9.addVectors(this.boundingBox.min, _box$2.min), this.boundingBox.expandByPoint(_vector$9), _vector$9.addVectors(this.boundingBox.max, _box$2.max), this.boundingBox.expandByPoint(_vector$9)) : (this.boundingBox.expandByPoint(_box$2.min), this.boundingBox.expandByPoint(_box$2.max));
			}
		} else this.boundingBox.makeEmpty();
		(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && error("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
	}
	computeBoundingSphere() {
		this.boundingSphere === null && (this.boundingSphere = new Sphere());
		let e = this.attributes.position, t = this.morphAttributes.position;
		if (e && e.isGLBufferAttribute) {
			error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new Vector3(), Infinity);
			return;
		}
		if (e) {
			let n = this.boundingSphere.center;
			if (_box$2.setFromBufferAttribute(e), t) for (let e = 0, n = t.length; e < n; e++) {
				let n = t[e];
				_boxMorphTargets.setFromBufferAttribute(n), this.morphTargetsRelative ? (_vector$9.addVectors(_box$2.min, _boxMorphTargets.min), _box$2.expandByPoint(_vector$9), _vector$9.addVectors(_box$2.max, _boxMorphTargets.max), _box$2.expandByPoint(_vector$9)) : (_box$2.expandByPoint(_boxMorphTargets.min), _box$2.expandByPoint(_boxMorphTargets.max));
			}
			_box$2.getCenter(n);
			let r = 0;
			for (let t = 0, i = e.count; t < i; t++) _vector$9.fromBufferAttribute(e, t), r = Math.max(r, n.distanceToSquared(_vector$9));
			if (t) for (let i = 0, a = t.length; i < a; i++) {
				let a = t[i], s = this.morphTargetsRelative;
				for (let t = 0, i = a.count; t < i; t++) _vector$9.fromBufferAttribute(a, t), s && (_offset.fromBufferAttribute(e, t), _vector$9.add(_offset)), r = Math.max(r, n.distanceToSquared(_vector$9));
			}
			this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && error("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
		}
	}
	computeTangents() {
		let e = this.index, t = this.attributes;
		if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
			error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			return;
		}
		let n = t.position, r = t.normal, i = t.uv, a = this.getAttribute("tangent");
		(a === void 0 || a.count !== n.count) && (a = new BufferAttribute(new Float32Array(4 * n.count), 4), this.setAttribute("tangent", a));
		let s = [], c = [];
		for (let e = 0; e < n.count; e++) s[e] = new Vector3(), c[e] = new Vector3();
		let l = new Vector3(), u = new Vector3(), d = new Vector3(), f = new Vector2(), p = new Vector2(), h = new Vector2(), g = new Vector3(), _ = new Vector3();
		function v(e, t, r) {
			l.fromBufferAttribute(n, e), u.fromBufferAttribute(n, t), d.fromBufferAttribute(n, r), f.fromBufferAttribute(i, e), p.fromBufferAttribute(i, t), h.fromBufferAttribute(i, r), u.sub(l), d.sub(l), p.sub(f), h.sub(f);
			let a = 1 / (p.x * h.y - h.x * p.y);
			isFinite(a) && (g.copy(u).multiplyScalar(h.y).addScaledVector(d, -p.y).multiplyScalar(a), _.copy(d).multiplyScalar(p.x).addScaledVector(u, -h.x).multiplyScalar(a), s[e].add(g), s[t].add(g), s[r].add(g), c[e].add(_), c[t].add(_), c[r].add(_));
		}
		let y = this.groups;
		y.length === 0 && (y = [{
			start: 0,
			count: e.count
		}]);
		for (let t = 0, n = y.length; t < n; ++t) {
			let n = y[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) v(e.getX(t + 0), e.getX(t + 1), e.getX(t + 2));
		}
		let b = new Vector3(), x = new Vector3(), S = new Vector3(), C = new Vector3();
		function w(e) {
			S.fromBufferAttribute(r, e), C.copy(S);
			let t = s[e];
			b.copy(t), b.sub(S.multiplyScalar(S.dot(t))).normalize(), x.crossVectors(C, t);
			let n = x.dot(c[e]) < 0 ? -1 : 1;
			a.setXYZW(e, b.x, b.y, b.z, n);
		}
		for (let t = 0, n = y.length; t < n; ++t) {
			let n = y[t], r = n.start, i = n.count;
			for (let t = r, n = r + i; t < n; t += 3) w(e.getX(t + 0)), w(e.getX(t + 1)), w(e.getX(t + 2));
		}
		this._transformed = !0;
	}
	computeVertexNormals() {
		let e = this.index, t = this.getAttribute("position");
		if (t !== void 0) {
			let n = this.getAttribute("normal");
			if (n === void 0 || n.count !== t.count) n = new BufferAttribute(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
			else for (let e = 0, t = n.count; e < t; e++) n.setXYZ(e, 0, 0, 0);
			let r = new Vector3(), i = new Vector3(), a = new Vector3(), s = new Vector3(), c = new Vector3(), l = new Vector3(), u = new Vector3(), d = new Vector3();
			if (e) for (let f = 0, p = e.count; f < p; f += 3) {
				let p = e.getX(f + 0), h = e.getX(f + 1), g = e.getX(f + 2);
				r.fromBufferAttribute(t, p), i.fromBufferAttribute(t, h), a.fromBufferAttribute(t, g), u.subVectors(a, i), d.subVectors(r, i), u.cross(d), s.fromBufferAttribute(n, p), c.fromBufferAttribute(n, h), l.fromBufferAttribute(n, g), s.add(u), c.add(u), l.add(u), n.setXYZ(p, s.x, s.y, s.z), n.setXYZ(h, c.x, c.y, c.z), n.setXYZ(g, l.x, l.y, l.z);
			}
			else for (let e = 0, s = t.count; e < s; e += 3) r.fromBufferAttribute(t, e + 0), i.fromBufferAttribute(t, e + 1), a.fromBufferAttribute(t, e + 2), u.subVectors(a, i), d.subVectors(r, i), u.cross(d), n.setXYZ(e + 0, u.x, u.y, u.z), n.setXYZ(e + 1, u.x, u.y, u.z), n.setXYZ(e + 2, u.x, u.y, u.z);
			this.normalizeNormals(), n.needsUpdate = !0;
		}
	}
	normalizeNormals() {
		let e = this.attributes.normal;
		for (let t = 0, n = e.count; t < n; t++) _vector$9.fromBufferAttribute(e, t), _vector$9.normalize(), e.setXYZ(t, _vector$9.x, _vector$9.y, _vector$9.z);
	}
	toNonIndexed() {
		function t(e, t) {
			let n = e.array, r = e.itemSize, i = e.normalized, a = new n.constructor(t.length * r), s = 0, c = 0;
			for (let i = 0, l = t.length; i < l; i++) {
				s = e.isInterleavedBufferAttribute ? t[i] * e.data.stride + e.offset : t[i] * r;
				for (let e = 0; e < r; e++) a[c++] = n[s++];
			}
			return new BufferAttribute(a, r, i);
		}
		if (this.index === null) return warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
		let n = new e(), r = this.index.array, i = this.attributes;
		for (let e in i) {
			let a = i[e], s = t(a, r);
			n.setAttribute(e, s);
		}
		let a = this.morphAttributes;
		for (let e in a) {
			let i = [], s = a[e];
			for (let e = 0, n = s.length; e < n; e++) {
				let n = s[e], a = t(n, r);
				i.push(a);
			}
			n.morphAttributes[e] = i;
		}
		n.morphTargetsRelative = this.morphTargetsRelative;
		let s = this.groups;
		for (let e = 0, t = s.length; e < t; e++) {
			let t = s[e];
			n.addGroup(t.start, t.count, t.materialIndex);
		}
		return n;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "BufferGeometry",
			generator: "BufferGeometry.toJSON"
		} };
		if (e.uuid = this.uuid, e.type = this.parameters !== void 0 && this._transformed === !0 ? "BufferGeometry" : this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0 && this._transformed !== !0) {
			let t = this.parameters;
			for (let n in t) t[n] !== void 0 && (e[n] = t[n]);
			return e;
		}
		e.data = { attributes: {} };
		let t = this.index;
		t !== null && (e.data.index = {
			type: t.array.constructor.name,
			array: Array.prototype.slice.call(t.array)
		});
		let n = this.attributes;
		for (let t in n) {
			let r = n[t];
			e.data.attributes[t] = r.toJSON(e.data);
		}
		let r = {}, i = !1;
		for (let t in this.morphAttributes) {
			let n = this.morphAttributes[t], a = [];
			for (let t = 0, r = n.length; t < r; t++) {
				let r = n[t];
				a.push(r.toJSON(e.data));
			}
			a.length > 0 && (r[t] = a, i = !0);
		}
		i && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
		let a = this.groups;
		a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
		let s = this.boundingSphere;
		return s !== null && (e.data.boundingSphere = s.toJSON()), e;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
		let t = {};
		this.name = e.name;
		let n = e.index;
		n !== null && this.setIndex(n.clone());
		let r = e.attributes;
		for (let e in r) {
			let n = r[e];
			this.setAttribute(e, n.clone(t));
		}
		let i = e.morphAttributes;
		for (let e in i) {
			let n = [], r = i[e];
			for (let e = 0, i = r.length; e < i; e++) n.push(r[e].clone(t));
			this.morphAttributes[e] = n;
		}
		this.morphTargetsRelative = e.morphTargetsRelative;
		let a = e.groups;
		for (let e = 0, t = a.length; e < t; e++) {
			let t = a[e];
			this.addGroup(t.start, t.count, t.materialIndex);
		}
		let s = e.boundingBox;
		s !== null && (this.boundingBox = s.clone());
		let c = e.boundingSphere;
		return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this._transformed = e._transformed, this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
}, _materialId = 0, Material = class extends EventDispatcher {
	constructor() {
		super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: _materialId++ }), this.uuid = generateUUID(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.alphaHash = !1, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Color$1(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = KeepStencilOp, this.stencilZFail = KeepStencilOp, this.stencilZPass = KeepStencilOp, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.allowOverride = !0, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
	}
	get alphaTest() {
		return this._alphaTest;
	}
	set alphaTest(e) {
		this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
	}
	onBeforeRender() {}
	onBeforeCompile() {}
	customProgramCacheKey() {
		return this.onBeforeCompile.toString();
	}
	setValues(e) {
		if (e !== void 0) for (let t in e) {
			let n = e[t];
			if (n === void 0) {
				warn(`Material: parameter '${t}' has value of undefined.`);
				continue;
			}
			let r = this[t];
			if (r === void 0) {
				warn(`Material: '${t}' is not a property of THREE.${this.type}.`);
				continue;
			}
			r && r.isColor ? r.set(n) : r && r.isVector2 && n && n.isVector2 || r && r.isEuler && n && n.isEuler || r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
		}
	}
	toJSON(e) {
		let t = e === void 0 || typeof e == "string";
		t && (e = {
			textures: {},
			images: {}
		});
		let n = { metadata: {
			version: 4.7,
			type: "Material",
			generator: "Material.toJSON"
		} };
		n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.sheenColorMap && this.sheenColorMap.isTexture && (n.sheenColorMap = this.sheenColorMap.toJSON(e).uuid), this.sheenRoughnessMap && this.sheenRoughnessMap.isTexture && (n.sheenRoughnessMap = this.sheenRoughnessMap.toJSON(e).uuid), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== Infinity && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n.depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0), this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.allowOverride === !1 && (n.allowOverride = !1), this.wireframe === !0 && (n.wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
		function r(e) {
			let t = [];
			for (let n in e) {
				let r = e[n];
				delete r.metadata, t.push(r);
			}
			return t;
		}
		if (t) {
			let t = r(e.textures), i = r(e.images);
			t.length > 0 && (n.textures = t), i.length > 0 && (n.images = i);
		}
		return n;
	}
	fromJSON(e, t) {
		if (e.uuid !== void 0 && (this.uuid = e.uuid), e.name !== void 0 && (this.name = e.name), e.color !== void 0 && this.color !== void 0 && this.color.setHex(e.color), e.roughness !== void 0 && (this.roughness = e.roughness), e.metalness !== void 0 && (this.metalness = e.metalness), e.sheen !== void 0 && (this.sheen = e.sheen), e.sheenColor !== void 0 && (this.sheenColor = new Color$1().setHex(e.sheenColor)), e.sheenRoughness !== void 0 && (this.sheenRoughness = e.sheenRoughness), e.emissive !== void 0 && this.emissive !== void 0 && this.emissive.setHex(e.emissive), e.specular !== void 0 && this.specular !== void 0 && this.specular.setHex(e.specular), e.specularIntensity !== void 0 && (this.specularIntensity = e.specularIntensity), e.specularColor !== void 0 && this.specularColor !== void 0 && this.specularColor.setHex(e.specularColor), e.shininess !== void 0 && (this.shininess = e.shininess), e.clearcoat !== void 0 && (this.clearcoat = e.clearcoat), e.clearcoatRoughness !== void 0 && (this.clearcoatRoughness = e.clearcoatRoughness), e.dispersion !== void 0 && (this.dispersion = e.dispersion), e.iridescence !== void 0 && (this.iridescence = e.iridescence), e.iridescenceIOR !== void 0 && (this.iridescenceIOR = e.iridescenceIOR), e.iridescenceThicknessRange !== void 0 && (this.iridescenceThicknessRange = e.iridescenceThicknessRange), e.transmission !== void 0 && (this.transmission = e.transmission), e.thickness !== void 0 && (this.thickness = e.thickness), e.attenuationDistance !== void 0 && (this.attenuationDistance = e.attenuationDistance), e.attenuationColor !== void 0 && this.attenuationColor !== void 0 && this.attenuationColor.setHex(e.attenuationColor), e.anisotropy !== void 0 && (this.anisotropy = e.anisotropy), e.anisotropyRotation !== void 0 && (this.anisotropyRotation = e.anisotropyRotation), e.fog !== void 0 && (this.fog = e.fog), e.flatShading !== void 0 && (this.flatShading = e.flatShading), e.blending !== void 0 && (this.blending = e.blending), e.combine !== void 0 && (this.combine = e.combine), e.side !== void 0 && (this.side = e.side), e.shadowSide !== void 0 && (this.shadowSide = e.shadowSide), e.opacity !== void 0 && (this.opacity = e.opacity), e.transparent !== void 0 && (this.transparent = e.transparent), e.alphaTest !== void 0 && (this.alphaTest = e.alphaTest), e.alphaHash !== void 0 && (this.alphaHash = e.alphaHash), e.depthFunc !== void 0 && (this.depthFunc = e.depthFunc), e.depthTest !== void 0 && (this.depthTest = e.depthTest), e.depthWrite !== void 0 && (this.depthWrite = e.depthWrite), e.colorWrite !== void 0 && (this.colorWrite = e.colorWrite), e.blendSrc !== void 0 && (this.blendSrc = e.blendSrc), e.blendDst !== void 0 && (this.blendDst = e.blendDst), e.blendEquation !== void 0 && (this.blendEquation = e.blendEquation), e.blendSrcAlpha !== void 0 && (this.blendSrcAlpha = e.blendSrcAlpha), e.blendDstAlpha !== void 0 && (this.blendDstAlpha = e.blendDstAlpha), e.blendEquationAlpha !== void 0 && (this.blendEquationAlpha = e.blendEquationAlpha), e.blendColor !== void 0 && this.blendColor !== void 0 && this.blendColor.setHex(e.blendColor), e.blendAlpha !== void 0 && (this.blendAlpha = e.blendAlpha), e.stencilWriteMask !== void 0 && (this.stencilWriteMask = e.stencilWriteMask), e.stencilFunc !== void 0 && (this.stencilFunc = e.stencilFunc), e.stencilRef !== void 0 && (this.stencilRef = e.stencilRef), e.stencilFuncMask !== void 0 && (this.stencilFuncMask = e.stencilFuncMask), e.stencilFail !== void 0 && (this.stencilFail = e.stencilFail), e.stencilZFail !== void 0 && (this.stencilZFail = e.stencilZFail), e.stencilZPass !== void 0 && (this.stencilZPass = e.stencilZPass), e.stencilWrite !== void 0 && (this.stencilWrite = e.stencilWrite), e.wireframe !== void 0 && (this.wireframe = e.wireframe), e.wireframeLinewidth !== void 0 && (this.wireframeLinewidth = e.wireframeLinewidth), e.wireframeLinecap !== void 0 && (this.wireframeLinecap = e.wireframeLinecap), e.wireframeLinejoin !== void 0 && (this.wireframeLinejoin = e.wireframeLinejoin), e.rotation !== void 0 && (this.rotation = e.rotation), e.linewidth !== void 0 && (this.linewidth = e.linewidth), e.dashSize !== void 0 && (this.dashSize = e.dashSize), e.gapSize !== void 0 && (this.gapSize = e.gapSize), e.scale !== void 0 && (this.scale = e.scale), e.polygonOffset !== void 0 && (this.polygonOffset = e.polygonOffset), e.polygonOffsetFactor !== void 0 && (this.polygonOffsetFactor = e.polygonOffsetFactor), e.polygonOffsetUnits !== void 0 && (this.polygonOffsetUnits = e.polygonOffsetUnits), e.dithering !== void 0 && (this.dithering = e.dithering), e.alphaToCoverage !== void 0 && (this.alphaToCoverage = e.alphaToCoverage), e.premultipliedAlpha !== void 0 && (this.premultipliedAlpha = e.premultipliedAlpha), e.forceSinglePass !== void 0 && (this.forceSinglePass = e.forceSinglePass), e.allowOverride !== void 0 && (this.allowOverride = e.allowOverride), e.visible !== void 0 && (this.visible = e.visible), e.toneMapped !== void 0 && (this.toneMapped = e.toneMapped), e.userData !== void 0 && (this.userData = e.userData), e.vertexColors !== void 0 && (typeof e.vertexColors == "number" ? this.vertexColors = e.vertexColors > 0 : this.vertexColors = e.vertexColors), e.size !== void 0 && (this.size = e.size), e.sizeAttenuation !== void 0 && (this.sizeAttenuation = e.sizeAttenuation), e.map !== void 0 && (this.map = t[e.map] || null), e.matcap !== void 0 && (this.matcap = t[e.matcap] || null), e.alphaMap !== void 0 && (this.alphaMap = t[e.alphaMap] || null), e.bumpMap !== void 0 && (this.bumpMap = t[e.bumpMap] || null), e.bumpScale !== void 0 && (this.bumpScale = e.bumpScale), e.normalMap !== void 0 && (this.normalMap = t[e.normalMap] || null), e.normalMapType !== void 0 && (this.normalMapType = e.normalMapType), e.normalScale !== void 0) {
			let t = e.normalScale;
			Array.isArray(t) === !1 && (t = [t, t]), this.normalScale = new Vector2().fromArray(t);
		}
		return e.displacementMap !== void 0 && (this.displacementMap = t[e.displacementMap] || null), e.displacementScale !== void 0 && (this.displacementScale = e.displacementScale), e.displacementBias !== void 0 && (this.displacementBias = e.displacementBias), e.roughnessMap !== void 0 && (this.roughnessMap = t[e.roughnessMap] || null), e.metalnessMap !== void 0 && (this.metalnessMap = t[e.metalnessMap] || null), e.emissiveMap !== void 0 && (this.emissiveMap = t[e.emissiveMap] || null), e.emissiveIntensity !== void 0 && (this.emissiveIntensity = e.emissiveIntensity), e.specularMap !== void 0 && (this.specularMap = t[e.specularMap] || null), e.specularIntensityMap !== void 0 && (this.specularIntensityMap = t[e.specularIntensityMap] || null), e.specularColorMap !== void 0 && (this.specularColorMap = t[e.specularColorMap] || null), e.envMap !== void 0 && (this.envMap = t[e.envMap] || null), e.envMapRotation !== void 0 && this.envMapRotation.fromArray(e.envMapRotation), e.envMapIntensity !== void 0 && (this.envMapIntensity = e.envMapIntensity), e.reflectivity !== void 0 && (this.reflectivity = e.reflectivity), e.refractionRatio !== void 0 && (this.refractionRatio = e.refractionRatio), e.lightMap !== void 0 && (this.lightMap = t[e.lightMap] || null), e.lightMapIntensity !== void 0 && (this.lightMapIntensity = e.lightMapIntensity), e.aoMap !== void 0 && (this.aoMap = t[e.aoMap] || null), e.aoMapIntensity !== void 0 && (this.aoMapIntensity = e.aoMapIntensity), e.gradientMap !== void 0 && (this.gradientMap = t[e.gradientMap] || null), e.clearcoatMap !== void 0 && (this.clearcoatMap = t[e.clearcoatMap] || null), e.clearcoatRoughnessMap !== void 0 && (this.clearcoatRoughnessMap = t[e.clearcoatRoughnessMap] || null), e.clearcoatNormalMap !== void 0 && (this.clearcoatNormalMap = t[e.clearcoatNormalMap] || null), e.clearcoatNormalScale !== void 0 && (this.clearcoatNormalScale = new Vector2().fromArray(e.clearcoatNormalScale)), e.iridescenceMap !== void 0 && (this.iridescenceMap = t[e.iridescenceMap] || null), e.iridescenceThicknessMap !== void 0 && (this.iridescenceThicknessMap = t[e.iridescenceThicknessMap] || null), e.transmissionMap !== void 0 && (this.transmissionMap = t[e.transmissionMap] || null), e.thicknessMap !== void 0 && (this.thicknessMap = t[e.thicknessMap] || null), e.anisotropyMap !== void 0 && (this.anisotropyMap = t[e.anisotropyMap] || null), e.sheenColorMap !== void 0 && (this.sheenColorMap = t[e.sheenColorMap] || null), e.sheenRoughnessMap !== void 0 && (this.sheenRoughnessMap = t[e.sheenRoughnessMap] || null), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
		let t = e.clippingPlanes, n = null;
		if (t !== null) {
			let e = t.length;
			n = Array(e);
			for (let r = 0; r !== e; ++r) n[r] = t[r].clone();
		}
		return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.allowOverride = e.allowOverride, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	set needsUpdate(e) {
		e === !0 && this.version++;
	}
}, _vector$7 = /*@__PURE__*/ new Vector3(), _segCenter = /*@__PURE__*/ new Vector3(), _segDir = /*@__PURE__*/ new Vector3(), _diff = /*@__PURE__*/ new Vector3(), _edge1 = /*@__PURE__*/ new Vector3(), _edge2 = /*@__PURE__*/ new Vector3(), _normal$1 = /*@__PURE__*/ new Vector3(), Ray = class {
	constructor(e = new Vector3(), t = new Vector3(0, 0, -1)) {
		this.origin = e, this.direction = t;
	}
	set(e, t) {
		return this.origin.copy(e), this.direction.copy(t), this;
	}
	copy(e) {
		return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
	}
	at(e, t) {
		return t.copy(this.origin).addScaledVector(this.direction, e);
	}
	lookAt(e) {
		return this.direction.copy(e).sub(this.origin).normalize(), this;
	}
	recast(e) {
		return this.origin.copy(this.at(e, _vector$7)), this;
	}
	closestPointToPoint(e, t) {
		t.subVectors(e, this.origin);
		let n = t.dot(this.direction);
		return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
	}
	distanceToPoint(e) {
		return Math.sqrt(this.distanceSqToPoint(e));
	}
	distanceSqToPoint(e) {
		let t = _vector$7.subVectors(e, this.origin).dot(this.direction);
		return t < 0 ? this.origin.distanceToSquared(e) : (_vector$7.copy(this.origin).addScaledVector(this.direction, t), _vector$7.distanceToSquared(e));
	}
	distanceSqToSegment(e, t, n, r) {
		_segCenter.copy(e).add(t).multiplyScalar(.5), _segDir.copy(t).sub(e).normalize(), _diff.copy(this.origin).sub(_segCenter);
		let i = e.distanceTo(t) * .5, a = -this.direction.dot(_segDir), s = _diff.dot(this.direction), c = -_diff.dot(_segDir), l = _diff.lengthSq(), u = Math.abs(1 - a * a), d, f, p, h;
		if (u > 0) if (d = a * c - s, f = a * s - c, h = i * u, d >= 0) if (f >= -h) if (f <= h) {
			let e = 1 / u;
			d *= e, f *= e, p = d * (d + a * f + 2 * s) + f * (a * d + f + 2 * c) + l;
		} else f = i, d = Math.max(0, -(a * f + s)), p = -d * d + f * (f + 2 * c) + l;
		else f = -i, d = Math.max(0, -(a * f + s)), p = -d * d + f * (f + 2 * c) + l;
		else f <= -h ? (d = Math.max(0, -(-a * i + s)), f = d > 0 ? -i : Math.min(Math.max(-i, -c), i), p = -d * d + f * (f + 2 * c) + l) : f <= h ? (d = 0, f = Math.min(Math.max(-i, -c), i), p = f * (f + 2 * c) + l) : (d = Math.max(0, -(a * i + s)), f = d > 0 ? i : Math.min(Math.max(-i, -c), i), p = -d * d + f * (f + 2 * c) + l);
		else f = a > 0 ? -i : i, d = Math.max(0, -(a * f + s)), p = -d * d + f * (f + 2 * c) + l;
		return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(_segCenter).addScaledVector(_segDir, f), p;
	}
	intersectSphere(e, t) {
		_vector$7.subVectors(e.center, this.origin);
		let n = _vector$7.dot(this.direction), r = _vector$7.dot(_vector$7) - n * n, i = e.radius * e.radius;
		if (r > i) return null;
		let a = Math.sqrt(i - r), s = n - a, c = n + a;
		return c < 0 ? null : s < 0 ? this.at(c, t) : this.at(s, t);
	}
	intersectsSphere(e) {
		return e.radius < 0 ? !1 : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
	}
	distanceToPlane(e) {
		let t = e.normal.dot(this.direction);
		if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
		let n = -(this.origin.dot(e.normal) + e.constant) / t;
		return n >= 0 ? n : null;
	}
	intersectPlane(e, t) {
		let n = this.distanceToPlane(e);
		return n === null ? null : this.at(n, t);
	}
	intersectsPlane(e) {
		let t = e.distanceToPoint(this.origin);
		return t === 0 || e.normal.dot(this.direction) * t < 0;
	}
	intersectBox(e, t) {
		let n, r, i, a, s, c, l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
		return l >= 0 ? (n = (e.min.x - f.x) * l, r = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, r = (e.min.x - f.x) * l), u >= 0 ? (i = (e.min.y - f.y) * u, a = (e.max.y - f.y) * u) : (i = (e.max.y - f.y) * u, a = (e.min.y - f.y) * u), n > a || i > r || ((i > n || isNaN(n)) && (n = i), (a < r || isNaN(r)) && (r = a), d >= 0 ? (s = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (s = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), n > c || s > r) || ((s > n || n !== n) && (n = s), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
	}
	intersectsBox(e) {
		return this.intersectBox(e, _vector$7) !== null;
	}
	intersectTriangle(e, t, n, r, i) {
		_edge1.subVectors(t, e), _edge2.subVectors(n, e), _normal$1.crossVectors(_edge1, _edge2);
		let a = this.direction.dot(_normal$1), s;
		if (a > 0) {
			if (r) return null;
			s = 1;
		} else if (a < 0) s = -1, a = -a;
		else return null;
		_diff.subVectors(this.origin, e);
		let c = s * this.direction.dot(_edge2.crossVectors(_diff, _edge2));
		if (c < 0) return null;
		let l = s * this.direction.dot(_edge1.cross(_diff));
		if (l < 0 || c + l > a) return null;
		let u = -s * _diff.dot(_normal$1);
		return u < 0 ? null : this.at(u / a, i);
	}
	applyMatrix4(e) {
		return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
	}
	equals(e) {
		return e.origin.equals(this.origin) && e.direction.equals(this.direction);
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, MeshBasicMaterial = class extends Material {
	constructor(e) {
		super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Color$1(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Euler(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
	}
}, _inverseMatrix$3 = /*@__PURE__*/ new Matrix4(), _ray$3 = /*@__PURE__*/ new Ray(), _sphere$6 = /*@__PURE__*/ new Sphere(), _sphereHitAt = /*@__PURE__*/ new Vector3(), _vA = /*@__PURE__*/ new Vector3(), _vB = /*@__PURE__*/ new Vector3(), _vC = /*@__PURE__*/ new Vector3(), _tempA = /*@__PURE__*/ new Vector3(), _morphA = /*@__PURE__*/ new Vector3(), _intersectionPoint = /*@__PURE__*/ new Vector3(), _intersectionPointWorld = /*@__PURE__*/ new Vector3(), Mesh = class extends Object3D {
	constructor(e = new BufferGeometry(), t = new MeshBasicMaterial()) {
		super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.count = 1, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
	getVertexPosition(e, t) {
		let n = this.geometry, r = n.attributes.position, i = n.morphAttributes.position, a = n.morphTargetsRelative;
		t.fromBufferAttribute(r, e);
		let s = this.morphTargetInfluences;
		if (i && s) {
			_morphA.set(0, 0, 0);
			for (let n = 0, r = i.length; n < r; n++) {
				let r = s[n], c = i[n];
				r !== 0 && (_tempA.fromBufferAttribute(c, e), a ? _morphA.addScaledVector(_tempA, r) : _morphA.addScaledVector(_tempA.sub(t), r));
			}
			t.add(_morphA);
		}
		return t;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.material, i = this.matrixWorld;
		r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), _sphere$6.copy(n.boundingSphere), _sphere$6.applyMatrix4(i), _ray$3.copy(e.ray).recast(e.near), !(_sphere$6.containsPoint(_ray$3.origin) === !1 && (_ray$3.intersectSphere(_sphere$6, _sphereHitAt) === null || _ray$3.origin.distanceToSquared(_sphereHitAt) > (e.far - e.near) ** 2)) && (_inverseMatrix$3.copy(i).invert(), _ray$3.copy(e.ray).applyMatrix4(_inverseMatrix$3), !(n.boundingBox !== null && _ray$3.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, _ray$3)));
	}
	_computeIntersections(e, t, n) {
		let r, i = this.geometry, a = this.material, s = i.index, c = i.attributes.position, l = i.attributes.uv, u = i.attributes.uv1, d = i.attributes.normal, f = i.groups, p = i.drawRange;
		if (s !== null) if (Array.isArray(a)) for (let i = 0, c = f.length; i < c; i++) {
			let c = f[i], h = a[c.materialIndex], g = Math.max(c.start, p.start), _ = Math.min(s.count, Math.min(c.start + c.count, p.start + p.count));
			for (let i = g, a = _; i < a; i += 3) {
				let a = s.getX(i), f = s.getX(i + 1), p = s.getX(i + 2);
				r = checkGeometryIntersection(this, h, e, n, l, u, d, a, f, p), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = c.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, p.start), c = Math.min(s.count, p.start + p.count);
			for (let f = i, p = c; f < p; f += 3) {
				let i = s.getX(f), c = s.getX(f + 1), p = s.getX(f + 2);
				r = checkGeometryIntersection(this, a, e, n, l, u, d, i, c, p), r && (r.faceIndex = Math.floor(f / 3), t.push(r));
			}
		}
		else if (c !== void 0) if (Array.isArray(a)) for (let i = 0, s = f.length; i < s; i++) {
			let s = f[i], h = a[s.materialIndex], g = Math.max(s.start, p.start), _ = Math.min(c.count, Math.min(s.start + s.count, p.start + p.count));
			for (let i = g, a = _; i < a; i += 3) {
				let a = i, c = i + 1, f = i + 2;
				r = checkGeometryIntersection(this, h, e, n, l, u, d, a, c, f), r && (r.faceIndex = Math.floor(i / 3), r.face.materialIndex = s.materialIndex, t.push(r));
			}
		}
		else {
			let i = Math.max(0, p.start), s = Math.min(c.count, p.start + p.count);
			for (let c = i, f = s; c < f; c += 3) {
				let i = c, s = c + 1, f = c + 2;
				r = checkGeometryIntersection(this, a, e, n, l, u, d, i, s, f), r && (r.faceIndex = Math.floor(c / 3), t.push(r));
			}
		}
	}
};
function checkIntersection$1(e, t, n, r, i, a, s, c) {
	let l;
	if (l = t.side === 1 ? r.intersectTriangle(s, a, i, !0, c) : r.intersectTriangle(i, a, s, t.side === 0, c), l === null) return null;
	_intersectionPointWorld.copy(c), _intersectionPointWorld.applyMatrix4(e.matrixWorld);
	let u = n.ray.origin.distanceTo(_intersectionPointWorld);
	return u < n.near || u > n.far ? null : {
		distance: u,
		point: _intersectionPointWorld.clone(),
		object: e
	};
}
function checkGeometryIntersection(e, t, n, r, i, a, s, c, l, u) {
	e.getVertexPosition(c, _vA), e.getVertexPosition(l, _vB), e.getVertexPosition(u, _vC);
	let d = checkIntersection$1(e, t, n, r, _vA, _vB, _vC, _intersectionPoint);
	if (d) {
		let e = new Vector3();
		Triangle.getBarycoord(_intersectionPoint, _vA, _vB, _vC, e), i && (d.uv = Triangle.getInterpolatedAttribute(i, c, l, u, e, new Vector2())), a && (d.uv1 = Triangle.getInterpolatedAttribute(a, c, l, u, e, new Vector2())), s && (d.normal = Triangle.getInterpolatedAttribute(s, c, l, u, e, new Vector3()), d.normal.dot(r.direction) > 0 && d.normal.multiplyScalar(-1));
		let t = {
			a: c,
			b: l,
			c: u,
			normal: new Vector3(),
			materialIndex: 0
		};
		Triangle.getNormal(_vA, _vB, _vC, t.normal), d.face = t, d.barycoord = e;
	}
	return d;
}
var DataTexture = class extends Texture {
	constructor(e = null, t = 1, n = 1, r, i, a, s, c, l = NearestFilter, u = NearestFilter, d, f) {
		super(null, a, s, c, l, u, r, i, d, f), this.isDataTexture = !0, this.image = {
			data: e,
			width: t,
			height: n
		}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
	}
}, _vector1 = /*@__PURE__*/ new Vector3(), _vector2 = /*@__PURE__*/ new Vector3(), _normalMatrix = /*@__PURE__*/ new Matrix3(), Plane = class {
	constructor(e = new Vector3(1, 0, 0), t = 0) {
		this.isPlane = !0, this.normal = e, this.constant = t;
	}
	set(e, t) {
		return this.normal.copy(e), this.constant = t, this;
	}
	setComponents(e, t, n, r) {
		return this.normal.set(e, t, n), this.constant = r, this;
	}
	setFromNormalAndCoplanarPoint(e, t) {
		return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
	}
	setFromCoplanarPoints(e, t, n) {
		let r = _vector1.subVectors(n, t).cross(_vector2.subVectors(e, t)).normalize();
		return this.setFromNormalAndCoplanarPoint(r, e), this;
	}
	copy(e) {
		return this.normal.copy(e.normal), this.constant = e.constant, this;
	}
	normalize() {
		let e = 1 / this.normal.length();
		return this.normal.multiplyScalar(e), this.constant *= e, this;
	}
	negate() {
		return this.constant *= -1, this.normal.negate(), this;
	}
	distanceToPoint(e) {
		return this.normal.dot(e) + this.constant;
	}
	distanceToSphere(e) {
		return this.distanceToPoint(e.center) - e.radius;
	}
	projectPoint(e, t) {
		return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
	}
	intersectLine(e, t, n = !0) {
		let r = e.delta(_vector1), i = this.normal.dot(r);
		if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
		let a = -(e.start.dot(this.normal) + this.constant) / i;
		return n === !0 && (a < 0 || a > 1) ? null : t.copy(e.start).addScaledVector(r, a);
	}
	intersectsLine(e) {
		let t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
		return t < 0 && n > 0 || n < 0 && t > 0;
	}
	intersectsBox(e) {
		return e.intersectsPlane(this);
	}
	intersectsSphere(e) {
		return e.intersectsPlane(this);
	}
	coplanarPoint(e) {
		return e.copy(this.normal).multiplyScalar(-this.constant);
	}
	applyMatrix4(e, t) {
		let n = t || _normalMatrix.getNormalMatrix(e), r = this.coplanarPoint(_vector1).applyMatrix4(e), i = this.normal.applyMatrix3(n).normalize();
		return this.constant = -r.dot(i), this;
	}
	translate(e) {
		return this.constant -= e.dot(this.normal), this;
	}
	equals(e) {
		return e.normal.equals(this.normal) && e.constant === this.constant;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, _sphere$3 = /*@__PURE__*/ new Sphere(), _defaultSpriteCenter = /*@__PURE__*/ new Vector2(.5, .5), _vector$6 = /*@__PURE__*/ new Vector3(), Frustum = class {
	constructor(e = new Plane(), t = new Plane(), n = new Plane(), r = new Plane(), i = new Plane(), a = new Plane()) {
		this.planes = [
			e,
			t,
			n,
			r,
			i,
			a
		];
	}
	set(e, t, n, r, i, a) {
		let s = this.planes;
		return s[0].copy(e), s[1].copy(t), s[2].copy(n), s[3].copy(r), s[4].copy(i), s[5].copy(a), this;
	}
	copy(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
		return this;
	}
	setFromProjectionMatrix(e, t = WebGLCoordinateSystem, n = !1) {
		let r = this.planes, i = e.elements, a = i[0], s = i[1], c = i[2], l = i[3], u = i[4], d = i[5], f = i[6], p = i[7], h = i[8], g = i[9], _ = i[10], v = i[11], y = i[12], b = i[13], x = i[14], S = i[15];
		if (r[0].setComponents(l - a, p - u, v - h, S - y).normalize(), r[1].setComponents(l + a, p + u, v + h, S + y).normalize(), r[2].setComponents(l + s, p + d, v + g, S + b).normalize(), r[3].setComponents(l - s, p - d, v - g, S - b).normalize(), n) r[4].setComponents(c, f, _, x).normalize(), r[5].setComponents(l - c, p - f, v - _, S - x).normalize();
		else if (r[4].setComponents(l - c, p - f, v - _, S - x).normalize(), t === 2e3) r[5].setComponents(l + c, p + f, v + _, S + x).normalize();
		else if (t === 2001) r[5].setComponents(c, f, _, x).normalize();
		else throw Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
		return this;
	}
	intersectsObject(e) {
		if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), _sphere$3.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
		else {
			let t = e.geometry;
			t.boundingSphere === null && t.computeBoundingSphere(), _sphere$3.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
		}
		return this.intersectsSphere(_sphere$3);
	}
	intersectsSprite(e) {
		return _sphere$3.center.set(0, 0, 0), _sphere$3.radius = .7071067811865476 + _defaultSpriteCenter.distanceTo(e.center), _sphere$3.applyMatrix4(e.matrixWorld), this.intersectsSphere(_sphere$3);
	}
	intersectsSphere(e) {
		let t = this.planes, n = e.center, r = -e.radius;
		for (let e = 0; e < 6; e++) if (t[e].distanceToPoint(n) < r) return !1;
		return !0;
	}
	intersectsBox(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) {
			let r = t[n];
			if (_vector$6.x = r.normal.x > 0 ? e.max.x : e.min.x, _vector$6.y = r.normal.y > 0 ? e.max.y : e.min.y, _vector$6.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(_vector$6) < 0) return !1;
		}
		return !0;
	}
	containsPoint(e) {
		let t = this.planes;
		for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
		return !0;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, LineBasicMaterial = class extends Material {
	constructor(e) {
		super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Color$1(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
	}
}, _vStart = /*@__PURE__*/ new Vector3(), _vEnd = /*@__PURE__*/ new Vector3(), _inverseMatrix$1 = /*@__PURE__*/ new Matrix4(), _ray$1 = /*@__PURE__*/ new Ray(), _sphere$1 = /*@__PURE__*/ new Sphere(), _intersectPointOnRay = /*@__PURE__*/ new Vector3(), _intersectPointOnSegment = /*@__PURE__*/ new Vector3(), Line = class extends Object3D {
	constructor(e = new BufferGeometry(), t = new LineBasicMaterial()) {
		super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.morphTargetDictionary = void 0, this.morphTargetInfluences = void 0, this.updateMorphTargets();
	}
	copy(e, t) {
		return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [0];
			for (let e = 1, r = t.count; e < r; e++) _vStart.fromBufferAttribute(t, e - 1), _vEnd.fromBufferAttribute(t, e), n[e] = n[e - 1], n[e] += _vStart.distanceTo(_vEnd);
			e.setAttribute("lineDistance", new Float32BufferAttribute(n, 1));
		} else warn("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
	raycast(e, t) {
		let n = this.geometry, r = this.matrixWorld, i = e.params.Line.threshold, a = n.drawRange;
		if (n.boundingSphere === null && n.computeBoundingSphere(), _sphere$1.copy(n.boundingSphere), _sphere$1.applyMatrix4(r), _sphere$1.radius += i, e.ray.intersectsSphere(_sphere$1) === !1) return;
		_inverseMatrix$1.copy(r).invert(), _ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);
		let s = i / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = s * s, l = this.isLineSegments ? 2 : 1, u = n.index, d = n.attributes.position;
		if (u !== null) {
			let n = Math.max(0, a.start), r = Math.min(u.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += l) {
				let n = u.getX(i), r = u.getX(i + 1), a = checkIntersection(this, e, _ray$1, c, n, r, i);
				a && t.push(a);
			}
			if (this.isLineLoop) {
				let i = u.getX(r - 1), a = u.getX(n), s = checkIntersection(this, e, _ray$1, c, i, a, r - 1);
				s && t.push(s);
			}
		} else {
			let n = Math.max(0, a.start), r = Math.min(d.count, a.start + a.count);
			for (let i = n, a = r - 1; i < a; i += l) {
				let n = checkIntersection(this, e, _ray$1, c, i, i + 1, i);
				n && t.push(n);
			}
			if (this.isLineLoop) {
				let i = checkIntersection(this, e, _ray$1, c, r - 1, n, r - 1);
				i && t.push(i);
			}
		}
	}
	updateMorphTargets() {
		let e = this.geometry.morphAttributes, t = Object.keys(e);
		if (t.length > 0) {
			let n = e[t[0]];
			if (n !== void 0) {
				this.morphTargetInfluences = [], this.morphTargetDictionary = {};
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e].name || String(e);
					this.morphTargetInfluences.push(0), this.morphTargetDictionary[t] = e;
				}
			}
		}
	}
};
function checkIntersection(e, t, n, r, i, a, s) {
	let c = e.geometry.attributes.position;
	if (_vStart.fromBufferAttribute(c, i), _vEnd.fromBufferAttribute(c, a), n.distanceSqToSegment(_vStart, _vEnd, _intersectPointOnRay, _intersectPointOnSegment) > r) return;
	_intersectPointOnRay.applyMatrix4(e.matrixWorld);
	let l = t.ray.origin.distanceTo(_intersectPointOnRay);
	if (!(l < t.near || l > t.far)) return {
		distance: l,
		point: _intersectPointOnSegment.clone().applyMatrix4(e.matrixWorld),
		index: s,
		face: null,
		faceIndex: null,
		barycoord: null,
		object: e
	};
}
var _start = /*@__PURE__*/ new Vector3(), _end = /*@__PURE__*/ new Vector3(), LineSegments = class extends Line {
	constructor(e, t) {
		super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
	}
	computeLineDistances() {
		let e = this.geometry;
		if (e.index === null) {
			let t = e.attributes.position, n = [];
			for (let e = 0, r = t.count; e < r; e += 2) _start.fromBufferAttribute(t, e), _end.fromBufferAttribute(t, e + 1), n[e] = e === 0 ? 0 : n[e - 1], n[e + 1] = n[e] + _start.distanceTo(_end);
			e.setAttribute("lineDistance", new Float32BufferAttribute(n, 1));
		} else warn("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
		return this;
	}
}, CubeTexture = class extends Texture {
	constructor(e = [], t = 301, n, r, i, a, s, c, l, u) {
		super(e, t, n, r, i, a, s, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, DepthTexture = class extends Texture {
	constructor(e, t, n = UnsignedIntType, r, i, a, s = NearestFilter, c = NearestFilter, l, u = DepthFormat, d = 1) {
		if (u !== 1026 && u !== 1027) throw Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
		super({
			width: e,
			height: t,
			depth: d
		}, r, i, a, s, c, u, n, l), this.isDepthTexture = !0, this.flipY = !1, this.generateMipmaps = !1, this.compareFunction = null;
	}
	copy(e) {
		return super.copy(e), this.source = new Source(Object.assign({}, e.image)), this.compareFunction = e.compareFunction, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
	}
}, CubeDepthTexture = class extends DepthTexture {
	constructor(e, t = UnsignedIntType, n = 301, r, i, a = NearestFilter, s = NearestFilter, c, l = DepthFormat) {
		let u = {
			width: e,
			height: e,
			depth: 1
		}, d = [
			u,
			u,
			u,
			u,
			u,
			u
		];
		super(e, e, t, n, r, i, a, s, c, l), this.image = d, this.isCubeDepthTexture = !0, this.isCubeTexture = !0;
	}
	get images() {
		return this.image;
	}
	set images(e) {
		this.image = e;
	}
}, ExternalTexture = class extends Texture {
	constructor(e = null) {
		super(), this.sourceTexture = e, this.isExternalTexture = !0;
	}
	copy(e) {
		return super.copy(e), this.sourceTexture = e.sourceTexture, this;
	}
}, BoxGeometry = class e extends BufferGeometry {
	constructor(e = 1, t = 1, n = 1, r = 1, i = 1, a = 1) {
		super(), this.type = "BoxGeometry", this.parameters = {
			width: e,
			height: t,
			depth: n,
			widthSegments: r,
			heightSegments: i,
			depthSegments: a
		};
		let s = this;
		r = Math.floor(r), i = Math.floor(i), a = Math.floor(a);
		let c = [], l = [], u = [], d = [], f = 0, p = 0;
		h("z", "y", "x", -1, -1, n, t, e, a, i, 0), h("z", "y", "x", 1, -1, n, t, -e, a, i, 1), h("x", "z", "y", 1, 1, e, n, t, r, a, 2), h("x", "z", "y", 1, -1, e, n, -t, r, a, 3), h("x", "y", "z", 1, -1, e, t, n, r, i, 4), h("x", "y", "z", -1, -1, e, t, -n, r, i, 5), this.setIndex(c), this.setAttribute("position", new Float32BufferAttribute(l, 3)), this.setAttribute("normal", new Float32BufferAttribute(u, 3)), this.setAttribute("uv", new Float32BufferAttribute(d, 2));
		function h(e, t, n, r, i, a, h, g, _, v, y) {
			let b = a / _, x = h / v, S = a / 2, C = h / 2, w = g / 2, T = _ + 1, E = v + 1, D = 0, O = 0, k = new Vector3();
			for (let a = 0; a < E; a++) {
				let s = a * x - C;
				for (let c = 0; c < T; c++) k[e] = (c * b - S) * r, k[t] = s * i, k[n] = w, l.push(k.x, k.y, k.z), k[e] = 0, k[t] = 0, k[n] = g > 0 ? 1 : -1, u.push(k.x, k.y, k.z), d.push(c / _), d.push(1 - a / v), D += 1;
			}
			for (let e = 0; e < v; e++) for (let t = 0; t < _; t++) {
				let n = f + t + T * e, r = f + t + T * (e + 1), i = f + (t + 1) + T * (e + 1), a = f + (t + 1) + T * e;
				c.push(n, r, a), c.push(r, i, a), O += 6;
			}
			s.addGroup(p, O, y), p += O, f += D;
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.depth, t.widthSegments, t.heightSegments, t.depthSegments);
	}
}, Curve = class {
	constructor() {
		this.type = "Curve", this.arcLengthDivisions = 200, this.needsUpdate = !1, this.cacheArcLengths = null;
	}
	getPoint() {
		warn("Curve: .getPoint() not implemented.");
	}
	getPointAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getPoint(n, t);
	}
	getPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return t;
	}
	getSpacedPoints(e = 5) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPointAt(n / e));
		return t;
	}
	getLength() {
		let e = this.getLengths();
		return e[e.length - 1];
	}
	getLengths(e = this.arcLengthDivisions) {
		if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
		this.needsUpdate = !1;
		let t = [], n, r = this.getPoint(0), i = 0;
		t.push(0);
		for (let a = 1; a <= e; a++) n = this.getPoint(a / e), i += n.distanceTo(r), t.push(i), r = n;
		return this.cacheArcLengths = t, t;
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.getLengths();
	}
	getUtoTmapping(e, t = null) {
		let n = this.getLengths(), r = 0, i = n.length, a;
		a = t || e * n[i - 1];
		let s = 0, c = i - 1, l;
		for (; s <= c;) if (r = Math.floor(s + (c - s) / 2), l = n[r] - a, l < 0) s = r + 1;
		else if (l > 0) c = r - 1;
		else {
			c = r;
			break;
		}
		if (r = c, n[r] === a) return r / (i - 1);
		let u = n[r], d = n[r + 1] - u, f = (a - u) / d;
		return (r + f) / (i - 1);
	}
	getTangent(e, t) {
		let n = 1e-4, r = e - n, i = e + n;
		r < 0 && (r = 0), i > 1 && (i = 1);
		let a = this.getPoint(r), s = this.getPoint(i), c = t || (a.isVector2 ? new Vector2() : new Vector3());
		return c.copy(s).sub(a).normalize(), c;
	}
	getTangentAt(e, t) {
		let n = this.getUtoTmapping(e);
		return this.getTangent(n, t);
	}
	computeFrenetFrames(e, t = !1) {
		let n = new Vector3(), r = [], i = [], a = [], s = new Vector3(), c = new Matrix4();
		for (let t = 0; t <= e; t++) {
			let n = t / e;
			r[t] = this.getTangentAt(n, new Vector3());
		}
		i[0] = new Vector3(), a[0] = new Vector3();
		let l = Number.MAX_VALUE, u = Math.abs(r[0].x), d = Math.abs(r[0].y), f = Math.abs(r[0].z);
		u <= l && (l = u, n.set(1, 0, 0)), d <= l && (l = d, n.set(0, 1, 0)), f <= l && n.set(0, 0, 1), s.crossVectors(r[0], n).normalize(), i[0].crossVectors(r[0], s), a[0].crossVectors(r[0], i[0]);
		for (let t = 1; t <= e; t++) {
			if (i[t] = i[t - 1].clone(), a[t] = a[t - 1].clone(), s.crossVectors(r[t - 1], r[t]), s.length() > 2 ** -52) {
				s.normalize();
				let e = Math.acos(clamp(r[t - 1].dot(r[t]), -1, 1));
				i[t].applyMatrix4(c.makeRotationAxis(s, e));
			}
			a[t].crossVectors(r[t], i[t]);
		}
		if (t === !0) {
			let t = Math.acos(clamp(i[0].dot(i[e]), -1, 1));
			t /= e, r[0].dot(s.crossVectors(i[0], i[e])) > 0 && (t = -t);
			for (let n = 1; n <= e; n++) i[n].applyMatrix4(c.makeRotationAxis(r[n], t * n)), a[n].crossVectors(r[n], i[n]);
		}
		return {
			tangents: r,
			normals: i,
			binormals: a
		};
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
	toJSON() {
		let e = { metadata: {
			version: 4.7,
			type: "Curve",
			generator: "Curve.toJSON"
		} };
		return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
	}
	fromJSON(e) {
		return this.arcLengthDivisions = e.arcLengthDivisions, this;
	}
}, EllipseCurve = class extends Curve {
	constructor(e = 0, t = 0, n = 1, r = 1, i = 0, a = Math.PI * 2, s = !1, c = 0) {
		super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = i, this.aEndAngle = a, this.aClockwise = s, this.aRotation = c;
	}
	getPoint(e, t = new Vector2()) {
		let n = t, r = Math.PI * 2, i = this.aEndAngle - this.aStartAngle, a = Math.abs(i) < 2 ** -52;
		for (; i < 0;) i += r;
		for (; i > r;) i -= r;
		i < 2 ** -52 && (i = a ? 0 : r), this.aClockwise === !0 && !a && (i === r ? i = -r : i -= r);
		let s = this.aStartAngle + e * i, c = this.aX + this.xRadius * Math.cos(s), l = this.aY + this.yRadius * Math.sin(s);
		if (this.aRotation !== 0) {
			let e = Math.cos(this.aRotation), t = Math.sin(this.aRotation), n = c - this.aX, r = l - this.aY;
			c = n * e - r * t + this.aX, l = n * t + r * e + this.aY;
		}
		return n.set(c, l);
	}
	copy(e) {
		return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
	}
}, ArcCurve = class extends EllipseCurve {
	constructor(e, t, n, r, i, a) {
		super(e, t, n, n, r, i, a), this.isArcCurve = !0, this.type = "ArcCurve";
	}
};
function CubicPoly() {
	let e = 0, t = 0, n = 0, r = 0;
	function i(i, a, s, c) {
		e = i, t = s, n = -3 * i + 3 * a - 2 * s - c, r = 2 * i - 2 * a + s + c;
	}
	return {
		initCatmullRom: function(e, t, n, r, a) {
			i(t, n, a * (n - e), a * (r - t));
		},
		initNonuniformCatmullRom: function(e, t, n, r, a, s, c) {
			let l = (t - e) / a - (n - e) / (a + s) + (n - t) / s, u = (n - t) / s - (r - t) / (s + c) + (r - n) / c;
			l *= s, u *= s, i(t, n, l, u);
		},
		calc: function(i) {
			let a = i * i, s = a * i;
			return e + t * i + n * a + r * s;
		}
	};
}
var tmp = /*@__PURE__*/ new Vector3(), tmp2 = /*@__PURE__*/ new Vector3(), px = /*@__PURE__*/ new CubicPoly(), py = /*@__PURE__*/ new CubicPoly(), pz = /*@__PURE__*/ new CubicPoly(), CatmullRomCurve3 = class extends Curve {
	constructor(e = [], t = !1, n = "centripetal", r = .5) {
		super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
	}
	getPoint(e, t = new Vector3()) {
		let n = t, r = this.points, i = r.length, a = (i - +!this.closed) * e, s = Math.floor(a), c = a - s;
		this.closed ? s += s > 0 ? 0 : (Math.floor(Math.abs(s) / i) + 1) * i : c === 0 && s === i - 1 && (s = i - 2, c = 1);
		let l, u;
		this.closed || s > 0 ? l = r[(s - 1) % i] : (tmp2.subVectors(r[0], r[1]).add(r[0]), l = tmp2);
		let d = r[s % i], f = r[(s + 1) % i];
		if (this.closed || s + 2 < i ? u = r[(s + 2) % i] : (tmp.subVectors(r[i - 1], r[i - 2]).add(r[i - 1]), u = tmp), this.curveType === "centripetal" || this.curveType === "chordal") {
			let e = this.curveType === "chordal" ? .5 : .25, t = l.distanceToSquared(d) ** +e, n = d.distanceToSquared(f) ** +e, r = f.distanceToSquared(u) ** +e;
			n < 1e-4 && (n = 1), t < 1e-4 && (t = n), r < 1e-4 && (r = n), px.initNonuniformCatmullRom(l.x, d.x, f.x, u.x, t, n, r), py.initNonuniformCatmullRom(l.y, d.y, f.y, u.y, t, n, r), pz.initNonuniformCatmullRom(l.z, d.z, f.z, u.z, t, n, r);
		} else this.curveType === "catmullrom" && (px.initCatmullRom(l.x, d.x, f.x, u.x, this.tension), py.initCatmullRom(l.y, d.y, f.y, u.y, this.tension), pz.initCatmullRom(l.z, d.z, f.z, u.z, this.tension));
		return n.set(px.calc(c), py.calc(c), pz.calc(c)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new Vector3().fromArray(n));
		}
		return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
	}
};
function CatmullRom(e, t, n, r, i) {
	let a = (r - t) * .5, s = (i - n) * .5, c = e * e, l = e * c;
	return (2 * n - 2 * r + a + s) * l + (-3 * n + 3 * r - 2 * a - s) * c + a * e + n;
}
function QuadraticBezierP0(e, t) {
	let n = 1 - e;
	return n * n * t;
}
function QuadraticBezierP1(e, t) {
	return 2 * (1 - e) * e * t;
}
function QuadraticBezierP2(e, t) {
	return e * e * t;
}
function QuadraticBezier(e, t, n, r) {
	return QuadraticBezierP0(e, t) + QuadraticBezierP1(e, n) + QuadraticBezierP2(e, r);
}
function CubicBezierP0(e, t) {
	let n = 1 - e;
	return n * n * n * t;
}
function CubicBezierP1(e, t) {
	let n = 1 - e;
	return 3 * n * n * e * t;
}
function CubicBezierP2(e, t) {
	return 3 * (1 - e) * e * e * t;
}
function CubicBezierP3(e, t) {
	return e * e * e * t;
}
function CubicBezier(e, t, n, r, i) {
	return CubicBezierP0(e, t) + CubicBezierP1(e, n) + CubicBezierP2(e, r) + CubicBezierP3(e, i);
}
var CubicBezierCurve = class extends Curve {
	constructor(e = new Vector2(), t = new Vector2(), n = new Vector2(), r = new Vector2()) {
		super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new Vector2()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, s = this.v3;
		return n.set(CubicBezier(e, r.x, i.x, a.x, s.x), CubicBezier(e, r.y, i.y, a.y, s.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, CubicBezierCurve3 = class extends Curve {
	constructor(e = new Vector3(), t = new Vector3(), n = new Vector3(), r = new Vector3()) {
		super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
	}
	getPoint(e, t = new Vector3()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2, s = this.v3;
		return n.set(CubicBezier(e, r.x, i.x, a.x, s.x), CubicBezier(e, r.y, i.y, a.y, s.y), CubicBezier(e, r.z, i.z, a.z, s.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
	}
}, LineCurve = class extends Curve {
	constructor(e = new Vector2(), t = new Vector2()) {
		super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new Vector2()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new Vector2()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, LineCurve3 = class extends Curve {
	constructor(e = new Vector3(), t = new Vector3()) {
		super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
	}
	getPoint(e, t = new Vector3()) {
		let n = t;
		return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
	}
	getPointAt(e, t) {
		return this.getPoint(e, t);
	}
	getTangent(e, t = new Vector3()) {
		return t.subVectors(this.v2, this.v1).normalize();
	}
	getTangentAt(e, t) {
		return this.getTangent(e, t);
	}
	copy(e) {
		return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, QuadraticBezierCurve = class extends Curve {
	constructor(e = new Vector2(), t = new Vector2(), n = new Vector2()) {
		super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new Vector2()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(QuadraticBezier(e, r.x, i.x, a.x), QuadraticBezier(e, r.y, i.y, a.y)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, QuadraticBezierCurve3 = class extends Curve {
	constructor(e = new Vector3(), t = new Vector3(), n = new Vector3()) {
		super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
	}
	getPoint(e, t = new Vector3()) {
		let n = t, r = this.v0, i = this.v1, a = this.v2;
		return n.set(QuadraticBezier(e, r.x, i.x, a.x), QuadraticBezier(e, r.y, i.y, a.y), QuadraticBezier(e, r.z, i.z, a.z)), n;
	}
	copy(e) {
		return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
	}
}, SplineCurve = class extends Curve {
	constructor(e = []) {
		super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
	}
	getPoint(e, t = new Vector2()) {
		let n = t, r = this.points, i = (r.length - 1) * e, a = Math.floor(i), s = i - a, c = r[a === 0 ? a : a - 1], l = r[a], u = r[a > r.length - 2 ? r.length - 1 : a + 1], d = r[a > r.length - 3 ? r.length - 1 : a + 2];
		return n.set(CatmullRom(s, c.x, l.x, u.x, d.x), CatmullRom(s, c.y, l.y, u.y, d.y)), n;
	}
	copy(e) {
		super.copy(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.points = [];
		for (let t = 0, n = this.points.length; t < n; t++) {
			let n = this.points[t];
			e.points.push(n.toArray());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.points = [];
		for (let t = 0, n = e.points.length; t < n; t++) {
			let n = e.points[t];
			this.points.push(new Vector2().fromArray(n));
		}
		return this;
	}
}, Curves = /*#__PURE__*/ Object.freeze({
	__proto__: null,
	ArcCurve,
	CatmullRomCurve3,
	CubicBezierCurve,
	CubicBezierCurve3,
	EllipseCurve,
	LineCurve,
	LineCurve3,
	QuadraticBezierCurve,
	QuadraticBezierCurve3,
	SplineCurve
}), CurvePath = class extends Curve {
	constructor() {
		super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
	}
	add(e) {
		this.curves.push(e);
	}
	closePath() {
		let e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
		if (!e.equals(t)) {
			let n = e.isVector2 === !0 ? "LineCurve" : "LineCurve3";
			this.curves.push(new Curves[n](t, e));
		}
		return this;
	}
	getPoint(e, t) {
		let n = e * this.getLength(), r = this.getCurveLengths(), i = 0;
		for (; i < r.length;) {
			if (r[i] >= n) {
				let e = r[i] - n, a = this.curves[i], s = a.getLength(), c = s === 0 ? 0 : 1 - e / s;
				return a.getPointAt(c, t);
			}
			i++;
		}
		return null;
	}
	getLength() {
		let e = this.getCurveLengths();
		return e[e.length - 1];
	}
	updateArcLengths() {
		this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
	}
	getCurveLengths() {
		if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
		let e = [], t = 0;
		for (let n = 0, r = this.curves.length; n < r; n++) t += this.curves[n].getLength(), e.push(t);
		return this.cacheLengths = e, e;
	}
	getSpacedPoints(e = 40) {
		let t = [];
		for (let n = 0; n <= e; n++) t.push(this.getPoint(n / e));
		return this.autoClose && t.push(t[0]), t;
	}
	getPoints(e = 12) {
		let t = [], n;
		for (let r = 0, i = this.curves; r < i.length; r++) {
			let a = i[r], s = a.isEllipseCurve ? e * 2 : a.isLineCurve || a.isLineCurve3 ? 1 : a.isSplineCurve ? e * a.points.length : e, c = a.getPoints(s);
			for (let e = 0; e < c.length; e++) {
				let r = c[e];
				n && n.equals(r) || (t.push(r), n = r);
			}
		}
		return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
	}
	copy(e) {
		super.copy(e), this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(n.clone());
		}
		return this.autoClose = e.autoClose, this;
	}
	toJSON() {
		let e = super.toJSON();
		e.autoClose = this.autoClose, e.curves = [];
		for (let t = 0, n = this.curves.length; t < n; t++) {
			let n = this.curves[t];
			e.curves.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
		for (let t = 0, n = e.curves.length; t < n; t++) {
			let n = e.curves[t];
			this.curves.push(new Curves[n.type]().fromJSON(n));
		}
		return this;
	}
}, Path = class extends CurvePath {
	constructor(e) {
		super(), this.type = "Path", this.currentPoint = new Vector2(), e && this.setFromPoints(e);
	}
	setFromPoints(e) {
		this.moveTo(e[0].x, e[0].y);
		for (let t = 1, n = e.length; t < n; t++) this.lineTo(e[t].x, e[t].y);
		return this;
	}
	moveTo(e, t) {
		return this.currentPoint.set(e, t), this;
	}
	lineTo(e, t) {
		let n = new LineCurve(this.currentPoint.clone(), new Vector2(e, t));
		return this.curves.push(n), this.currentPoint.set(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		let i = new QuadraticBezierCurve(this.currentPoint.clone(), new Vector2(e, t), new Vector2(n, r));
		return this.curves.push(i), this.currentPoint.set(n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		let s = new CubicBezierCurve(this.currentPoint.clone(), new Vector2(e, t), new Vector2(n, r), new Vector2(i, a));
		return this.curves.push(s), this.currentPoint.set(i, a), this;
	}
	splineThru(e) {
		let t = new SplineCurve([this.currentPoint.clone()].concat(e));
		return this.curves.push(t), this.currentPoint.copy(e[e.length - 1]), this;
	}
	arc(e, t, n, r, i, a) {
		let s = this.currentPoint.x, c = this.currentPoint.y;
		return this.absarc(e + s, t + c, n, r, i, a), this;
	}
	absarc(e, t, n, r, i, a) {
		return this.absellipse(e, t, n, n, r, i, a), this;
	}
	ellipse(e, t, n, r, i, a, s, c) {
		let l = this.currentPoint.x, u = this.currentPoint.y;
		return this.absellipse(e + l, t + u, n, r, i, a, s, c), this;
	}
	absellipse(e, t, n, r, i, a, s, c) {
		let l = new EllipseCurve(e, t, n, r, i, a, s, c);
		if (this.curves.length > 0) {
			let e = l.getPoint(0);
			e.equals(this.currentPoint) || this.lineTo(e.x, e.y);
		}
		this.curves.push(l);
		let u = l.getPoint(1);
		return this.currentPoint.copy(u), this;
	}
	copy(e) {
		return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
	}
	toJSON() {
		let e = super.toJSON();
		return e.currentPoint = this.currentPoint.toArray(), e;
	}
	fromJSON(e) {
		return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
	}
}, Shape = class extends Path {
	constructor(e) {
		super(e), this.uuid = generateUUID(), this.type = "Shape", this.holes = [];
	}
	getPointsHoles(e) {
		let t = [];
		for (let n = 0, r = this.holes.length; n < r; n++) t[n] = this.holes[n].getPoints(e);
		return t;
	}
	extractPoints(e) {
		return {
			shape: this.getPoints(e),
			holes: this.getPointsHoles(e)
		};
	}
	copy(e) {
		super.copy(e), this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(n.clone());
		}
		return this;
	}
	toJSON() {
		let e = super.toJSON();
		e.uuid = this.uuid, e.holes = [];
		for (let t = 0, n = this.holes.length; t < n; t++) {
			let n = this.holes[t];
			e.holes.push(n.toJSON());
		}
		return e;
	}
	fromJSON(e) {
		super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
		for (let t = 0, n = e.holes.length; t < n; t++) {
			let n = e.holes[t];
			this.holes.push(new Path().fromJSON(n));
		}
		return this;
	}
};
function earcut(e, t, n = 2) {
	let r = t && t.length, i = r ? t[0] * n : e.length, a = linkedList(e, 0, i, n, !0), s = [];
	if (!a || a.next === a.prev) return s;
	let c, l, u;
	if (r && (a = eliminateHoles(e, t, a, n)), e.length > 80 * n) {
		c = e[0], l = e[1];
		let t = c, r = l;
		for (let a = n; a < i; a += n) {
			let n = e[a], i = e[a + 1];
			n < c && (c = n), i < l && (l = i), n > t && (t = n), i > r && (r = i);
		}
		u = Math.max(t - c, r - l), u = u === 0 ? 0 : 32767 / u;
	}
	return earcutLinked(a, s, n, c, l, u, 0), s;
}
function linkedList(e, t, n, r, i) {
	let a;
	if (i === signedArea(e, t, n, r) > 0) for (let i = t; i < n; i += r) a = insertNode(i / r | 0, e[i], e[i + 1], a);
	else for (let i = n - r; i >= t; i -= r) a = insertNode(i / r | 0, e[i], e[i + 1], a);
	return a && equals(a, a.next) && (removeNode(a), a = a.next), a;
}
function filterPoints(e, t) {
	if (!e) return e;
	t ||= e;
	let n = e, r;
	do
		if (r = !1, !n.steiner && (equals(n, n.next) || area(n.prev, n, n.next) === 0)) {
			if (removeNode(n), n = t = n.prev, n === n.next) break;
			r = !0;
		} else n = n.next;
	while (r || n !== t);
	return t;
}
function earcutLinked(e, t, n, r, i, a, s) {
	if (!e) return;
	!s && a && indexCurve(e, r, i, a);
	let c = e;
	for (; e.prev !== e.next;) {
		let l = e.prev, u = e.next;
		if (a ? isEarHashed(e, r, i, a) : isEar(e)) {
			t.push(l.i, e.i, u.i), removeNode(e), e = u.next, c = u.next;
			continue;
		}
		if (e = u, e === c) {
			s ? s === 1 ? (e = cureLocalIntersections(filterPoints(e), t), earcutLinked(e, t, n, r, i, a, 2)) : s === 2 && splitEarcut(e, t, n, r, i, a) : earcutLinked(filterPoints(e), t, n, r, i, a, 1);
			break;
		}
	}
}
function isEar(e) {
	let t = e.prev, n = e, r = e.next;
	if (area(t, n, r) >= 0) return !1;
	let i = t.x, a = n.x, s = r.x, c = t.y, l = n.y, u = r.y, d = Math.min(i, a, s), f = Math.min(c, l, u), p = Math.max(i, a, s), h = Math.max(c, l, u), g = r.next;
	for (; g !== t;) {
		if (g.x >= d && g.x <= p && g.y >= f && g.y <= h && pointInTriangleExceptFirst(i, c, a, l, s, u, g.x, g.y) && area(g.prev, g, g.next) >= 0) return !1;
		g = g.next;
	}
	return !0;
}
function isEarHashed(e, t, n, r) {
	let i = e.prev, a = e, s = e.next;
	if (area(i, a, s) >= 0) return !1;
	let c = i.x, l = a.x, u = s.x, d = i.y, f = a.y, p = s.y, h = Math.min(c, l, u), g = Math.min(d, f, p), _ = Math.max(c, l, u), v = Math.max(d, f, p), y = zOrder(h, g, t, n, r), b = zOrder(_, v, t, n, r), x = e.prevZ, S = e.nextZ;
	for (; x && x.z >= y && S && S.z <= b;) {
		if (x.x >= h && x.x <= _ && x.y >= g && x.y <= v && x !== i && x !== s && pointInTriangleExceptFirst(c, d, l, f, u, p, x.x, x.y) && area(x.prev, x, x.next) >= 0 || (x = x.prevZ, S.x >= h && S.x <= _ && S.y >= g && S.y <= v && S !== i && S !== s && pointInTriangleExceptFirst(c, d, l, f, u, p, S.x, S.y) && area(S.prev, S, S.next) >= 0)) return !1;
		S = S.nextZ;
	}
	for (; x && x.z >= y;) {
		if (x.x >= h && x.x <= _ && x.y >= g && x.y <= v && x !== i && x !== s && pointInTriangleExceptFirst(c, d, l, f, u, p, x.x, x.y) && area(x.prev, x, x.next) >= 0) return !1;
		x = x.prevZ;
	}
	for (; S && S.z <= b;) {
		if (S.x >= h && S.x <= _ && S.y >= g && S.y <= v && S !== i && S !== s && pointInTriangleExceptFirst(c, d, l, f, u, p, S.x, S.y) && area(S.prev, S, S.next) >= 0) return !1;
		S = S.nextZ;
	}
	return !0;
}
function cureLocalIntersections(e, t) {
	let n = e;
	do {
		let r = n.prev, i = n.next.next;
		!equals(r, i) && intersects(r, n, n.next, i) && locallyInside(r, i) && locallyInside(i, r) && (t.push(r.i, n.i, i.i), removeNode(n), removeNode(n.next), n = e = i), n = n.next;
	} while (n !== e);
	return filterPoints(n);
}
function splitEarcut(e, t, n, r, i, a) {
	let s = e;
	do {
		let e = s.next.next;
		for (; e !== s.prev;) {
			if (s.i !== e.i && isValidDiagonal(s, e)) {
				let c = splitPolygon(s, e);
				s = filterPoints(s, s.next), c = filterPoints(c, c.next), earcutLinked(s, t, n, r, i, a, 0), earcutLinked(c, t, n, r, i, a, 0);
				return;
			}
			e = e.next;
		}
		s = s.next;
	} while (s !== e);
}
function eliminateHoles(e, t, n, r) {
	let i = [];
	for (let n = 0, a = t.length; n < a; n++) {
		let s = linkedList(e, t[n] * r, n < a - 1 ? t[n + 1] * r : e.length, r, !1);
		s === s.next && (s.steiner = !0), i.push(getLeftmost(s));
	}
	i.sort(compareXYSlope);
	for (let e = 0; e < i.length; e++) n = eliminateHole(i[e], n);
	return n;
}
function compareXYSlope(e, t) {
	let n = e.x - t.x;
	return n === 0 && (n = e.y - t.y, n === 0 && (n = (e.next.y - e.y) / (e.next.x - e.x) - (t.next.y - t.y) / (t.next.x - t.x))), n;
}
function eliminateHole(e, t) {
	let n = findHoleBridge(e, t);
	if (!n) return t;
	let r = splitPolygon(n, e);
	return filterPoints(r, r.next), filterPoints(n, n.next);
}
function findHoleBridge(e, t) {
	let n = t, r = e.x, i = e.y, a = -Infinity, s;
	if (equals(e, n)) return n;
	do {
		if (equals(e, n.next)) return n.next;
		if (i <= n.y && i >= n.next.y && n.next.y !== n.y) {
			let e = n.x + (i - n.y) * (n.next.x - n.x) / (n.next.y - n.y);
			if (e <= r && e > a && (a = e, s = n.x < n.next.x ? n : n.next, e === r)) return s;
		}
		n = n.next;
	} while (n !== t);
	if (!s) return null;
	let c = s, l = s.x, u = s.y, d = Infinity;
	n = s;
	do {
		if (r >= n.x && n.x >= l && r !== n.x && pointInTriangle(i < u ? r : a, i, l, u, i < u ? a : r, i, n.x, n.y)) {
			let t = Math.abs(i - n.y) / (r - n.x);
			locallyInside(n, e) && (t < d || t === d && (n.x > s.x || n.x === s.x && sectorContainsSector(s, n))) && (s = n, d = t);
		}
		n = n.next;
	} while (n !== c);
	return s;
}
function sectorContainsSector(e, t) {
	return area(e.prev, e, t.prev) < 0 && area(t.next, e, e.next) < 0;
}
function indexCurve(e, t, n, r) {
	let i = e;
	do
		i.z === 0 && (i.z = zOrder(i.x, i.y, t, n, r)), i.prevZ = i.prev, i.nextZ = i.next, i = i.next;
	while (i !== e);
	i.prevZ.nextZ = null, i.prevZ = null, sortLinked(i);
}
function sortLinked(e) {
	let t, n = 1;
	do {
		let r = e, i;
		e = null;
		let a = null;
		for (t = 0; r;) {
			t++;
			let s = r, c = 0;
			for (let e = 0; e < n && (c++, s = s.nextZ, s); e++);
			let l = n;
			for (; c > 0 || l > 0 && s;) c !== 0 && (l === 0 || !s || r.z <= s.z) ? (i = r, r = r.nextZ, c--) : (i = s, s = s.nextZ, l--), a ? a.nextZ = i : e = i, i.prevZ = a, a = i;
			r = s;
		}
		a.nextZ = null, n *= 2;
	} while (t > 1);
	return e;
}
function zOrder(e, t, n, r, i) {
	return e = (e - n) * i | 0, t = (t - r) * i | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1;
}
function getLeftmost(e) {
	let t = e, n = e;
	do
		(t.x < n.x || t.x === n.x && t.y < n.y) && (n = t), t = t.next;
	while (t !== e);
	return n;
}
function pointInTriangle(e, t, n, r, i, a, s, c) {
	return (i - s) * (t - c) >= (e - s) * (a - c) && (e - s) * (r - c) >= (n - s) * (t - c) && (n - s) * (a - c) >= (i - s) * (r - c);
}
function pointInTriangleExceptFirst(e, t, n, r, i, a, s, c) {
	return !(e === s && t === c) && pointInTriangle(e, t, n, r, i, a, s, c);
}
function isValidDiagonal(e, t) {
	return e.next.i !== t.i && e.prev.i !== t.i && !intersectsPolygon(e, t) && (locallyInside(e, t) && locallyInside(t, e) && middleInside(e, t) && (area(e.prev, e, t.prev) || area(e, t.prev, t)) || equals(e, t) && area(e.prev, e, e.next) > 0 && area(t.prev, t, t.next) > 0);
}
function area(e, t, n) {
	return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y);
}
function equals(e, t) {
	return e.x === t.x && e.y === t.y;
}
function intersects(e, t, n, r) {
	let i = sign(area(e, t, n)), a = sign(area(e, t, r)), s = sign(area(n, r, e)), c = sign(area(n, r, t));
	return !!(i !== a && s !== c || i === 0 && onSegment(e, n, t) || a === 0 && onSegment(e, r, t) || s === 0 && onSegment(n, e, r) || c === 0 && onSegment(n, t, r));
}
function onSegment(e, t, n) {
	return t.x <= Math.max(e.x, n.x) && t.x >= Math.min(e.x, n.x) && t.y <= Math.max(e.y, n.y) && t.y >= Math.min(e.y, n.y);
}
function sign(e) {
	return e > 0 ? 1 : e < 0 ? -1 : 0;
}
function intersectsPolygon(e, t) {
	let n = e;
	do {
		if (n.i !== e.i && n.next.i !== e.i && n.i !== t.i && n.next.i !== t.i && intersects(n, n.next, e, t)) return !0;
		n = n.next;
	} while (n !== e);
	return !1;
}
function locallyInside(e, t) {
	return area(e.prev, e, e.next) < 0 ? area(e, t, e.next) >= 0 && area(e, e.prev, t) >= 0 : area(e, t, e.prev) < 0 || area(e, e.next, t) < 0;
}
function middleInside(e, t) {
	let n = e, r = !1, i = (e.x + t.x) / 2, a = (e.y + t.y) / 2;
	do
		n.y > a != n.next.y > a && n.next.y !== n.y && i < (n.next.x - n.x) * (a - n.y) / (n.next.y - n.y) + n.x && (r = !r), n = n.next;
	while (n !== e);
	return r;
}
function splitPolygon(e, t) {
	let n = createNode(e.i, e.x, e.y), r = createNode(t.i, t.x, t.y), i = e.next, a = t.prev;
	return e.next = t, t.prev = e, n.next = i, i.prev = n, r.next = n, n.prev = r, a.next = r, r.prev = a, r;
}
function insertNode(e, t, n, r) {
	let i = createNode(e, t, n);
	return r ? (i.next = r.next, i.prev = r, r.next.prev = i, r.next = i) : (i.prev = i, i.next = i), i;
}
function removeNode(e) {
	e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ);
}
function createNode(e, t, n) {
	return {
		i: e,
		x: t,
		y: n,
		prev: null,
		next: null,
		z: 0,
		prevZ: null,
		nextZ: null,
		steiner: !1
	};
}
function signedArea(e, t, n, r) {
	let i = 0;
	for (let a = t, s = n - r; a < n; a += r) i += (e[s] - e[a]) * (e[a + 1] + e[s + 1]), s = a;
	return i;
}
var Earcut = class {
	static triangulate(e, t, n = 2) {
		return earcut(e, t, n);
	}
}, ShapeUtils = class e {
	static area(e) {
		let t = e.length, n = 0;
		for (let r = t - 1, i = 0; i < t; r = i++) n += e[r].x * e[i].y - e[i].x * e[r].y;
		return n * .5;
	}
	static isClockWise(t) {
		return e.area(t) < 0;
	}
	static triangulateShape(e, t) {
		let n = [], r = [], i = [];
		removeDupEndPts(e), addContour(n, e);
		let a = e.length;
		t.forEach(removeDupEndPts);
		for (let e = 0; e < t.length; e++) r.push(a), a += t[e].length, addContour(n, t[e]);
		let s = Earcut.triangulate(n, r);
		for (let e = 0; e < s.length; e += 3) i.push(s.slice(e, e + 3));
		return i;
	}
};
function removeDupEndPts(e) {
	let t = e.length;
	t > 2 && e[t - 1].equals(e[0]) && e.pop();
}
function addContour(e, t) {
	for (let n = 0; n < t.length; n++) e.push(t[n].x), e.push(t[n].y);
}
var ExtrudeGeometry = class e extends BufferGeometry {
	constructor(e = new Shape([
		new Vector2(.5, .5),
		new Vector2(-.5, .5),
		new Vector2(-.5, -.5),
		new Vector2(.5, -.5)
	]), t = {}) {
		super(), this.type = "ExtrudeGeometry", this.parameters = {
			shapes: e,
			options: t
		}, e = Array.isArray(e) ? e : [e];
		let n = this, r = [], i = [];
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t];
			a(n);
		}
		this.setAttribute("position", new Float32BufferAttribute(r, 3)), this.setAttribute("uv", new Float32BufferAttribute(i, 2)), this.computeVertexNormals();
		function a(e) {
			let a = [], s = t.curveSegments === void 0 ? 12 : t.curveSegments, c = t.steps === void 0 ? 1 : t.steps, l = t.depth === void 0 ? 1 : t.depth, u = t.bevelEnabled === void 0 || t.bevelEnabled, d = t.bevelThickness === void 0 ? .2 : t.bevelThickness, f = t.bevelSize === void 0 ? d - .1 : t.bevelSize, p = t.bevelOffset === void 0 ? 0 : t.bevelOffset, h = t.bevelSegments === void 0 ? 3 : t.bevelSegments, g = t.extrudePath, _ = t.UVGenerator === void 0 ? WorldUVGenerator : t.UVGenerator, v, y = !1, b, x, S, C;
			if (g) {
				v = g.getSpacedPoints(c), y = !0, u = !1;
				let e = g.isCatmullRomCurve3 ? g.closed : !1;
				b = g.computeFrenetFrames(c, e), x = new Vector3(), S = new Vector3(), C = new Vector3();
			}
			u || (h = 0, d = 0, f = 0, p = 0);
			let w = e.extractPoints(s), T = w.shape, E = w.holes;
			if (!ShapeUtils.isClockWise(T)) {
				T = T.reverse();
				for (let e = 0, t = E.length; e < t; e++) {
					let t = E[e];
					ShapeUtils.isClockWise(t) && (E[e] = t.reverse());
				}
			}
			function D(e) {
				let t = 1e-10, n = t * t, r = e[0];
				for (let t = 1; t <= e.length; t++) {
					let n = t % e.length, i = e[n], a = i.x - r.x, s = i.y - r.y, c = a * a + s * s, l = Math.max(Math.abs(i.x), Math.abs(i.y), Math.abs(r.x), Math.abs(r.y));
					if (c <= 10000000000000001e-36 * l * l) {
						e.splice(n, 1), t--;
						continue;
					}
					r = i;
				}
			}
			D(T), E.forEach(D);
			let O = E.length, k = T;
			for (let e = 0; e < O; e++) {
				let t = E[e];
				T = T.concat(t);
			}
			function A(e, t, n) {
				return t || error("ExtrudeGeometry: vec does not exist"), e.clone().addScaledVector(t, n);
			}
			let j = T.length;
			function N(e, t, n) {
				let r, i, a, s = e.x - t.x, c = e.y - t.y, l = n.x - e.x, u = n.y - e.y, d = s * s + c * c, f = s * u - c * l;
				if (Math.abs(f) > 2 ** -52) {
					let f = Math.sqrt(d), p = Math.sqrt(l * l + u * u), h = t.x - c / f, g = t.y + s / f, _ = n.x - u / p, v = n.y + l / p, y = ((_ - h) * u - (v - g) * l) / (s * u - c * l);
					r = h + s * y - e.x, i = g + c * y - e.y;
					let b = r * r + i * i;
					if (b <= 2) return new Vector2(r, i);
					a = Math.sqrt(b / 2);
				} else {
					let e = !1;
					s > 2 ** -52 ? l > 2 ** -52 && (e = !0) : s < -(2 ** -52) ? l < -(2 ** -52) && (e = !0) : Math.sign(c) === Math.sign(u) && (e = !0), e ? (r = -c, i = s, a = Math.sqrt(d)) : (r = s, i = c, a = Math.sqrt(d / 2));
				}
				return new Vector2(r / a, i / a);
			}
			let P = [];
			for (let e = 0, t = k.length, n = t - 1, r = e + 1; e < t; e++, n++, r++) n === t && (n = 0), r === t && (r = 0), P[e] = N(k[e], k[n], k[r]);
			let ee = [], F, I = P.concat();
			for (let e = 0, t = O; e < t; e++) {
				let t = E[e];
				F = [];
				for (let e = 0, n = t.length, r = n - 1, i = e + 1; e < n; e++, r++, i++) r === n && (r = 0), i === n && (i = 0), F[e] = N(t[e], t[r], t[i]);
				ee.push(F), I = I.concat(F);
			}
			let R;
			if (h === 0) R = ShapeUtils.triangulateShape(k, E);
			else {
				let e = [], t = [];
				for (let n = 0; n < h; n++) {
					let r = n / h, i = d * Math.cos(r * Math.PI / 2), a = f * Math.sin(r * Math.PI / 2) + p;
					for (let t = 0, n = k.length; t < n; t++) {
						let n = A(k[t], P[t], a);
						U(n.x, n.y, -i), r === 0 && e.push(n);
					}
					for (let e = 0, n = O; e < n; e++) {
						let n = E[e];
						F = ee[e];
						let s = [];
						for (let e = 0, t = n.length; e < t; e++) {
							let t = A(n[e], F[e], a);
							U(t.x, t.y, -i), r === 0 && s.push(t);
						}
						r === 0 && t.push(s);
					}
				}
				R = ShapeUtils.triangulateShape(e, t);
			}
			let z = R.length, te = f + p;
			for (let e = 0; e < j; e++) {
				let t = u ? A(T[e], I[e], te) : T[e];
				y ? (S.copy(b.normals[0]).multiplyScalar(t.x), x.copy(b.binormals[0]).multiplyScalar(t.y), C.copy(v[0]).add(S).add(x), U(C.x, C.y, C.z)) : U(t.x, t.y, 0);
			}
			for (let e = 1; e <= c; e++) for (let t = 0; t < j; t++) {
				let n = u ? A(T[t], I[t], te) : T[t];
				y ? (S.copy(b.normals[e]).multiplyScalar(n.x), x.copy(b.binormals[e]).multiplyScalar(n.y), C.copy(v[e]).add(S).add(x), U(C.x, C.y, C.z)) : U(n.x, n.y, l / c * e);
			}
			for (let e = h - 1; e >= 0; e--) {
				let t = e / h, n = d * Math.cos(t * Math.PI / 2), r = f * Math.sin(t * Math.PI / 2) + p;
				for (let e = 0, t = k.length; e < t; e++) {
					let t = A(k[e], P[e], r);
					U(t.x, t.y, l + n);
				}
				for (let e = 0, t = E.length; e < t; e++) {
					let t = E[e];
					F = ee[e];
					for (let e = 0, i = t.length; e < i; e++) {
						let i = A(t[e], F[e], r);
						y ? U(i.x, i.y + v[c - 1].y, v[c - 1].x + n) : U(i.x, i.y, l + n);
					}
				}
			}
			B(), ne();
			function B() {
				let e = r.length / 3;
				if (u) {
					let e = 0, t = j * e;
					for (let e = 0; e < z; e++) {
						let n = R[e];
						re(n[2] + t, n[1] + t, n[0] + t);
					}
					e = c + h * 2, t = j * e;
					for (let e = 0; e < z; e++) {
						let n = R[e];
						re(n[0] + t, n[1] + t, n[2] + t);
					}
				} else {
					for (let e = 0; e < z; e++) {
						let t = R[e];
						re(t[2], t[1], t[0]);
					}
					for (let e = 0; e < z; e++) {
						let t = R[e];
						re(t[0] + j * c, t[1] + j * c, t[2] + j * c);
					}
				}
				n.addGroup(e, r.length / 3 - e, 0);
			}
			function ne() {
				let e = r.length / 3, t = 0;
				H(k, t), t += k.length;
				for (let e = 0, n = E.length; e < n; e++) {
					let n = E[e];
					H(n, t), t += n.length;
				}
				n.addGroup(e, r.length / 3 - e, 1);
			}
			function H(e, t) {
				let n = e.length;
				for (; --n >= 0;) {
					let r = n, i = n - 1;
					i < 0 && (i = e.length - 1);
					for (let e = 0, n = c + h * 2; e < n; e++) {
						let n = j * e, a = j * (e + 1);
						W(t + r + n, t + i + n, t + i + a, t + r + a);
					}
				}
			}
			function U(e, t, n) {
				a.push(e), a.push(t), a.push(n);
			}
			function re(e, t, i) {
				K(e), K(t), K(i);
				let a = r.length / 3, s = _.generateTopUV(n, r, a - 3, a - 2, a - 1);
				q(s[0]), q(s[1]), q(s[2]);
			}
			function W(e, t, i, a) {
				K(e), K(t), K(a), K(t), K(i), K(a);
				let s = r.length / 3, c = _.generateSideWallUV(n, r, s - 6, s - 3, s - 2, s - 1);
				q(c[0]), q(c[1]), q(c[3]), q(c[1]), q(c[2]), q(c[3]);
			}
			function K(e) {
				r.push(a[e * 3 + 0]), r.push(a[e * 3 + 1]), r.push(a[e * 3 + 2]);
			}
			function q(e) {
				i.push(e.x), i.push(e.y);
			}
		}
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	toJSON() {
		let e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
		return toJSON$1(t, n, e);
	}
	static fromJSON(t, n) {
		let r = [];
		for (let e = 0, i = t.shapes.length; e < i; e++) {
			let i = n[t.shapes[e]];
			r.push(i);
		}
		let i = t.options.extrudePath;
		return i !== void 0 && (t.options.extrudePath = new Curves[i.type]().fromJSON(i)), new e(r, t.options);
	}
}, WorldUVGenerator = {
	generateTopUV: function(e, t, n, r, i) {
		let a = t[n * 3], s = t[n * 3 + 1], c = t[r * 3], l = t[r * 3 + 1], u = t[i * 3], d = t[i * 3 + 1];
		return [
			new Vector2(a, s),
			new Vector2(c, l),
			new Vector2(u, d)
		];
	},
	generateSideWallUV: function(e, t, n, r, i, a) {
		let s = t[n * 3], c = t[n * 3 + 1], l = t[n * 3 + 2], u = t[r * 3], d = t[r * 3 + 1], f = t[r * 3 + 2], p = t[i * 3], h = t[i * 3 + 1], g = t[i * 3 + 2], _ = t[a * 3], v = t[a * 3 + 1], y = t[a * 3 + 2];
		return Math.abs(c - d) < Math.abs(s - u) ? [
			new Vector2(s, 1 - l),
			new Vector2(u, 1 - f),
			new Vector2(p, 1 - g),
			new Vector2(_, 1 - y)
		] : [
			new Vector2(c, 1 - l),
			new Vector2(d, 1 - f),
			new Vector2(h, 1 - g),
			new Vector2(v, 1 - y)
		];
	}
};
function toJSON$1(e, t, n) {
	if (n.shapes = [], Array.isArray(e)) for (let t = 0, r = e.length; t < r; t++) {
		let r = e[t];
		n.shapes.push(r.uuid);
	}
	else n.shapes.push(e.uuid);
	return n.options = Object.assign({}, t), t.extrudePath !== void 0 && (n.options.extrudePath = t.extrudePath.toJSON()), n;
}
var PlaneGeometry = class e extends BufferGeometry {
	constructor(e = 1, t = 1, n = 1, r = 1) {
		super(), this.type = "PlaneGeometry", this.parameters = {
			width: e,
			height: t,
			widthSegments: n,
			heightSegments: r
		};
		let i = e / 2, a = t / 2, s = Math.floor(n), c = Math.floor(r), l = s + 1, u = c + 1, d = e / s, f = t / c, p = [], h = [], g = [], _ = [];
		for (let e = 0; e < u; e++) {
			let t = e * f - a;
			for (let n = 0; n < l; n++) {
				let r = n * d - i;
				h.push(r, -t, 0), g.push(0, 0, 1), _.push(n / s), _.push(1 - e / c);
			}
		}
		for (let e = 0; e < c; e++) for (let t = 0; t < s; t++) {
			let n = t + l * e, r = t + l * (e + 1), i = t + 1 + l * (e + 1), a = t + 1 + l * e;
			p.push(n, r, a), p.push(r, i, a);
		}
		this.setIndex(p), this.setAttribute("position", new Float32BufferAttribute(h, 3)), this.setAttribute("normal", new Float32BufferAttribute(g, 3)), this.setAttribute("uv", new Float32BufferAttribute(_, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.width, t.height, t.widthSegments, t.heightSegments);
	}
}, SphereGeometry = class e extends BufferGeometry {
	constructor(e = 1, t = 32, n = 16, r = 0, i = Math.PI * 2, a = 0, s = Math.PI) {
		super(), this.type = "SphereGeometry", this.parameters = {
			radius: e,
			widthSegments: t,
			heightSegments: n,
			phiStart: r,
			phiLength: i,
			thetaStart: a,
			thetaLength: s
		}, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
		let c = Math.min(a + s, Math.PI), l = 0, u = [], d = new Vector3(), f = new Vector3(), p = [], h = [], g = [], _ = [];
		for (let p = 0; p <= n; p++) {
			let v = [], y = p / n, b = a + y * s, x = e * Math.cos(b), S = Math.sqrt(e * e - x * x), C = 0;
			p === 0 && a === 0 ? C = .5 / t : p === n && c === Math.PI && (C = -.5 / t);
			for (let e = 0; e <= t; e++) {
				let n = e / t, a = r + n * i;
				d.x = -S * Math.cos(a), d.y = x, d.z = S * Math.sin(a), h.push(d.x, d.y, d.z), f.copy(d).normalize(), g.push(f.x, f.y, f.z), _.push(n + C, 1 - y), v.push(l++);
			}
			u.push(v);
		}
		for (let e = 0; e < n; e++) for (let r = 0; r < t; r++) {
			let t = u[e][r + 1], i = u[e][r], s = u[e + 1][r], l = u[e + 1][r + 1];
			(e !== 0 || a > 0) && p.push(t, i, l), (e !== n - 1 || c < Math.PI) && p.push(i, s, l);
		}
		this.setIndex(p), this.setAttribute("position", new Float32BufferAttribute(h, 3)), this.setAttribute("normal", new Float32BufferAttribute(g, 3)), this.setAttribute("uv", new Float32BufferAttribute(_, 2));
	}
	copy(e) {
		return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
	}
	static fromJSON(t) {
		return new e(t.radius, t.widthSegments, t.heightSegments, t.phiStart, t.phiLength, t.thetaStart, t.thetaLength);
	}
};
function cloneUniforms(e) {
	let t = {};
	for (let n in e) {
		t[n] = {};
		for (let r in e[n]) {
			let i = e[n][r];
			if (isThreeObject(i)) i.isRenderTargetTexture ? (warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), t[n][r] = null) : t[n][r] = i.clone();
			else if (Array.isArray(i)) if (isThreeObject(i[0])) {
				let e = [];
				for (let t = 0, n = i.length; t < n; t++) e[t] = i[t].clone();
				t[n][r] = e;
			} else t[n][r] = i.slice();
			else t[n][r] = i;
		}
	}
	return t;
}
function mergeUniforms(e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = cloneUniforms(e[n]);
		for (let e in r) t[e] = r[e];
	}
	return t;
}
function isThreeObject(e) {
	return e && (e.isColor || e.isMatrix3 || e.isMatrix4 || e.isVector2 || e.isVector3 || e.isVector4 || e.isTexture || e.isQuaternion);
}
function cloneUniformsGroups(e) {
	let t = [];
	for (let n = 0; n < e.length; n++) t.push(e[n].clone());
	return t;
}
function getUnlitUniformColorSpace(e) {
	let t = e.getRenderTarget();
	return t === null ? e.outputColorSpace : t.isXRRenderTarget === !0 ? t.texture.colorSpace : ColorManagement.workingColorSpace;
}
var UniformsUtils = {
	clone: cloneUniforms,
	merge: mergeUniforms
}, default_vertex = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", default_fragment = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", ShaderMaterial = class extends Material {
	constructor(e) {
		super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = default_vertex, this.fragmentShader = default_fragment, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
			clipCullDistance: !1,
			multiDraw: !1
		}, this.defaultAttributeValues = {
			color: [
				1,
				1,
				1
			],
			uv: [0, 0],
			uv1: [0, 0]
		}, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = cloneUniforms(e.uniforms), this.uniformsGroups = cloneUniformsGroups(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this.defaultAttributeValues = Object.assign({}, e.defaultAttributeValues), this.index0AttributeName = e.index0AttributeName, this.uniformsNeedUpdate = e.uniformsNeedUpdate, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		t.glslVersion = this.glslVersion, t.uniforms = {};
		for (let n in this.uniforms) {
			let r = this.uniforms[n].value;
			r && r.isTexture ? t.uniforms[n] = {
				type: "t",
				value: r.toJSON(e).uuid
			} : r && r.isColor ? t.uniforms[n] = {
				type: "c",
				value: r.getHex()
			} : r && r.isVector2 ? t.uniforms[n] = {
				type: "v2",
				value: r.toArray()
			} : r && r.isVector3 ? t.uniforms[n] = {
				type: "v3",
				value: r.toArray()
			} : r && r.isVector4 ? t.uniforms[n] = {
				type: "v4",
				value: r.toArray()
			} : r && r.isMatrix3 ? t.uniforms[n] = {
				type: "m3",
				value: r.toArray()
			} : r && r.isMatrix4 ? t.uniforms[n] = {
				type: "m4",
				value: r.toArray()
			} : t.uniforms[n] = { value: r };
		}
		Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
		let n = {};
		for (let e in this.extensions) this.extensions[e] === !0 && (n[e] = !0);
		return Object.keys(n).length > 0 && (t.extensions = n), t;
	}
	fromJSON(e, t) {
		if (super.fromJSON(e, t), e.uniforms !== void 0) for (let n in e.uniforms) {
			let r = e.uniforms[n];
			switch (this.uniforms[n] = {}, r.type) {
				case "t":
					this.uniforms[n].value = t[r.value] || null;
					break;
				case "c":
					this.uniforms[n].value = new Color$1().setHex(r.value);
					break;
				case "v2":
					this.uniforms[n].value = new Vector2().fromArray(r.value);
					break;
				case "v3":
					this.uniforms[n].value = new Vector3().fromArray(r.value);
					break;
				case "v4":
					this.uniforms[n].value = new Vector4().fromArray(r.value);
					break;
				case "m3":
					this.uniforms[n].value = new Matrix3().fromArray(r.value);
					break;
				case "m4":
					this.uniforms[n].value = new Matrix4().fromArray(r.value);
					break;
				default: this.uniforms[n].value = r.value;
			}
		}
		if (e.defines !== void 0 && (this.defines = e.defines), e.vertexShader !== void 0 && (this.vertexShader = e.vertexShader), e.fragmentShader !== void 0 && (this.fragmentShader = e.fragmentShader), e.glslVersion !== void 0 && (this.glslVersion = e.glslVersion), e.extensions !== void 0) for (let t in e.extensions) this.extensions[t] = e.extensions[t];
		return e.lights !== void 0 && (this.lights = e.lights), e.clipping !== void 0 && (this.clipping = e.clipping), this;
	}
}, RawShaderMaterial = class extends ShaderMaterial {
	constructor(e) {
		super(e), this.isRawShaderMaterial = !0, this.type = "RawShaderMaterial";
	}
}, MeshPhongMaterial = class extends Material {
	constructor(e) {
		super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Color$1(16777215), this.specular = new Color$1(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Color$1(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Vector2(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Euler(), this.combine = 0, this.reflectivity = 1, this.envMapIntensity = 1, this.refractionRatio = .98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.envMapIntensity = e.envMapIntensity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
	}
}, MeshDepthMaterial = class extends Material {
	constructor(e) {
		super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = BasicDepthPacking, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
	}
}, MeshDistanceMaterial = class extends Material {
	constructor(e) {
		super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
	}
	copy(e) {
		return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
	}
};
function convertArray(e, t) {
	return !e || e.constructor === t ? e : typeof t.BYTES_PER_ELEMENT == "number" ? new t(e) : Array.prototype.slice.call(e);
}
var Interpolant = class {
	constructor(e, t, n, r) {
		this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = r === void 0 ? new t.constructor(n) : r, this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
	}
	evaluate(e) {
		let t = this.parameterPositions, n = this._cachedIndex, r = t[n], i = t[n - 1];
		validate_interval: {
			seek: {
				let a;
				linear_scan: {
					forward_scan: if (!(e < r)) {
						for (let a = n + 2;;) {
							if (r === void 0) {
								if (e < i) break forward_scan;
								return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
							}
							if (n === a) break;
							if (i = r, r = t[++n], e < r) break seek;
						}
						a = t.length;
						break linear_scan;
					}
					if (!(e >= i)) {
						let s = t[1];
						e < s && (n = 2, i = s);
						for (let a = n - 2;;) {
							if (i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
							if (n === a) break;
							if (r = i, i = t[--n - 1], e >= i) break seek;
						}
						a = n, n = 0;
						break linear_scan;
					}
					break validate_interval;
				}
				for (; n < a;) {
					let r = n + a >>> 1;
					e < t[r] ? a = r : n = r + 1;
				}
				if (r = t[n], i = t[n - 1], i === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
				if (r === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
			}
			this._cachedIndex = n, this.intervalChanged_(n, i, r);
		}
		return this.interpolate_(n, i, e, r);
	}
	getSettings_() {
		return this.settings || this.DefaultSettings_;
	}
	copySampleValue_(e) {
		let t = this.resultBuffer, n = this.sampleValues, r = this.valueSize, i = e * r;
		for (let e = 0; e !== r; ++e) t[e] = n[i + e];
		return t;
	}
	interpolate_() {
		throw Error("THREE.Interpolant: Call to abstract method.");
	}
	intervalChanged_() {}
}, CubicInterpolant = class extends Interpolant {
	constructor(e, t, n, r) {
		super(e, t, n, r), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
			endingStart: ZeroCurvatureEnding,
			endingEnd: ZeroCurvatureEnding
		};
	}
	intervalChanged_(e, t, n) {
		let r = this.parameterPositions, i = e - 2, a = e + 1, s = r[i], c = r[a];
		if (s === void 0) switch (this.getSettings_().endingStart) {
			case ZeroSlopeEnding:
				i = e, s = 2 * t - n;
				break;
			case WrapAroundEnding:
				i = r.length - 2, s = t + r[i] - r[i + 1];
				break;
			default: i = e, s = n;
		}
		if (c === void 0) switch (this.getSettings_().endingEnd) {
			case ZeroSlopeEnding:
				a = e, c = 2 * n - t;
				break;
			case WrapAroundEnding:
				a = 1, c = n + r[1] - r[0];
				break;
			default: a = e - 1, c = t;
		}
		let l = (n - t) * .5, u = this.valueSize;
		this._weightPrev = l / (t - s), this._weightNext = l / (c - n), this._offsetPrev = i * u, this._offsetNext = a * u;
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, c = e * s, l = c - s, u = this._offsetPrev, d = this._offsetNext, f = this._weightPrev, p = this._weightNext, h = (n - t) / (r - t), g = h * h, _ = g * h, v = -f * _ + 2 * f * g - f * h, y = (1 + f) * _ + (-1.5 - 2 * f) * g + (-.5 + f) * h + 1, b = (-1 - p) * _ + (1.5 + p) * g + .5 * h, x = p * _ - p * g;
		for (let e = 0; e !== s; ++e) i[e] = v * a[u + e] + y * a[l + e] + b * a[c + e] + x * a[d + e];
		return i;
	}
}, LinearInterpolant = class extends Interpolant {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, c = e * s, l = c - s, u = (n - t) / (r - t), d = 1 - u;
		for (let e = 0; e !== s; ++e) i[e] = a[l + e] * d + a[c + e] * u;
		return i;
	}
}, DiscreteInterpolant = class extends Interpolant {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e) {
		return this.copySampleValue_(e - 1);
	}
}, BezierInterpolant = class extends Interpolant {
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, c = e * s, l = c - s, u = this.inTangents, d = this.outTangents;
		if (!u || !d) {
			let e = (n - t) / (r - t), u = 1 - e;
			for (let t = 0; t !== s; ++t) i[t] = a[l + t] * u + a[c + t] * e;
			return i;
		}
		let f = s * 2, p = e - 1;
		for (let h = 0; h !== s; ++h) {
			let s = a[l + h], g = a[c + h], _ = p * f + h * 2, v = d[_], y = d[_ + 1], b = e * f + h * 2, x = u[b], S = u[b + 1], C = (n - t) / (r - t), w, T, E, D, O;
			for (let e = 0; e < 8; e++) {
				w = C * C, T = w * C, E = 1 - C, D = E * E, O = D * E;
				let e = O * t + 3 * D * C * v + 3 * E * w * x + T * r - n;
				if (Math.abs(e) < 1e-10) break;
				let i = 3 * D * (v - t) + 6 * E * C * (x - v) + 3 * w * (r - x);
				if (Math.abs(i) < 1e-10) break;
				C -= e / i, C = Math.max(0, Math.min(1, C));
			}
			i[h] = O * s + 3 * D * C * y + 3 * E * w * S + T * g;
		}
		return i;
	}
}, KeyframeTrack = class {
	constructor(e, t, n, r) {
		if (e === void 0) throw Error("THREE.KeyframeTrack: track name is undefined");
		if (t === void 0 || t.length === 0) throw Error("THREE.KeyframeTrack: no keyframes in track named " + e);
		this.name = e, this.times = convertArray(t, this.TimeBufferType), this.values = convertArray(n, this.ValueBufferType), this.setInterpolation(r || this.DefaultInterpolation);
	}
	static toJSON(e) {
		let t = e.constructor, n;
		if (t.toJSON !== this.toJSON) n = t.toJSON(e);
		else {
			n = {
				name: e.name,
				times: convertArray(e.times, Array),
				values: convertArray(e.values, Array)
			};
			let t = e.getInterpolation();
			t !== e.DefaultInterpolation && (n.interpolation = t);
		}
		return n.type = e.ValueTypeName, n;
	}
	InterpolantFactoryMethodDiscrete(e) {
		return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodLinear(e) {
		return new LinearInterpolant(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodSmooth(e) {
		return new CubicInterpolant(this.times, this.values, this.getValueSize(), e);
	}
	InterpolantFactoryMethodBezier(e) {
		let t = new BezierInterpolant(this.times, this.values, this.getValueSize(), e);
		return this.settings && (t.inTangents = this.settings.inTangents, t.outTangents = this.settings.outTangents), t;
	}
	setInterpolation(e) {
		let t;
		switch (e) {
			case InterpolateDiscrete:
				t = this.InterpolantFactoryMethodDiscrete;
				break;
			case InterpolateLinear:
				t = this.InterpolantFactoryMethodLinear;
				break;
			case InterpolateSmooth:
				t = this.InterpolantFactoryMethodSmooth;
				break;
			case InterpolateBezier:
				t = this.InterpolantFactoryMethodBezier;
				break;
		}
		if (t === void 0) {
			let t = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
			if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
			else throw Error(t);
			return warn("KeyframeTrack:", t), this;
		}
		return this.createInterpolant = t, this;
	}
	getInterpolation() {
		switch (this.createInterpolant) {
			case this.InterpolantFactoryMethodDiscrete: return InterpolateDiscrete;
			case this.InterpolantFactoryMethodLinear: return InterpolateLinear;
			case this.InterpolantFactoryMethodSmooth: return InterpolateSmooth;
			case this.InterpolantFactoryMethodBezier: return InterpolateBezier;
		}
	}
	getValueSize() {
		return this.values.length / this.times.length;
	}
	shift(e) {
		if (e !== 0) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] += e;
		}
		return this;
	}
	scale(e) {
		if (e !== 1) {
			let t = this.times;
			for (let n = 0, r = t.length; n !== r; ++n) t[n] *= e;
		}
		return this;
	}
	trim(e, t) {
		let n = this.times, r = n.length, i = 0, a = r - 1;
		for (; i !== r && n[i] < e;) ++i;
		for (; a !== -1 && n[a] > t;) --a;
		if (++a, i !== 0 || a !== r) {
			i >= a && (a = Math.max(a, 1), i = a - 1);
			let e = this.getValueSize();
			this.times = n.slice(i, a), this.values = this.values.slice(i * e, a * e);
		}
		return this;
	}
	validate() {
		let e = !0, t = this.getValueSize();
		t - Math.floor(t) !== 0 && (error("KeyframeTrack: Invalid value size in track.", this), e = !1);
		let n = this.times, r = this.values, i = n.length;
		i === 0 && (error("KeyframeTrack: Track is empty.", this), e = !1);
		let a = null;
		for (let t = 0; t !== i; t++) {
			let r = n[t];
			if (typeof r == "number" && isNaN(r)) {
				error("KeyframeTrack: Time is not a valid number.", this, t, r), e = !1;
				break;
			}
			if (a !== null && a > r) {
				error("KeyframeTrack: Out of order keys.", this, t, r, a), e = !1;
				break;
			}
			a = r;
		}
		if (r !== void 0 && isTypedArray(r)) for (let t = 0, n = r.length; t !== n; ++t) {
			let n = r[t];
			if (isNaN(n)) {
				error("KeyframeTrack: Value is not a valid number.", this, t, n), e = !1;
				break;
			}
		}
		return e;
	}
	optimize() {
		let e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), r = this.getInterpolation() === InterpolateSmooth, i = e.length - 1, a = 1;
		for (let s = 1; s < i; ++s) {
			let i = !1, c = e[s];
			if (c !== e[s + 1] && (s !== 1 || c !== e[0])) if (r) i = !0;
			else {
				let e = s * n, r = e - n, a = e + n;
				for (let s = 0; s !== n; ++s) {
					let n = t[e + s];
					if (n !== t[r + s] || n !== t[a + s]) {
						i = !0;
						break;
					}
				}
			}
			if (i) {
				if (s !== a) {
					e[a] = e[s];
					let r = s * n, i = a * n;
					for (let e = 0; e !== n; ++e) t[i + e] = t[r + e];
				}
				++a;
			}
		}
		if (i > 0) {
			e[a] = e[i];
			for (let e = i * n, r = a * n, s = 0; s !== n; ++s) t[r + s] = t[e + s];
			++a;
		}
		return a === e.length ? (this.times = e, this.values = t) : (this.times = e.slice(0, a), this.values = t.slice(0, a * n)), this;
	}
	clone() {
		let e = this.times.slice(), t = this.values.slice(), n = this.constructor, r = new n(this.name, e, t);
		return r.createInterpolant = this.createInterpolant, r;
	}
};
KeyframeTrack.prototype.ValueTypeName = "", KeyframeTrack.prototype.TimeBufferType = Float32Array, KeyframeTrack.prototype.ValueBufferType = Float32Array, KeyframeTrack.prototype.DefaultInterpolation = InterpolateLinear;
var BooleanKeyframeTrack = class extends KeyframeTrack {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
BooleanKeyframeTrack.prototype.ValueTypeName = "bool", BooleanKeyframeTrack.prototype.ValueBufferType = Array, BooleanKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete, BooleanKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0, BooleanKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var ColorKeyframeTrack = class extends KeyframeTrack {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
ColorKeyframeTrack.prototype.ValueTypeName = "color";
var NumberKeyframeTrack = class extends KeyframeTrack {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
NumberKeyframeTrack.prototype.ValueTypeName = "number";
var QuaternionLinearInterpolant = class extends Interpolant {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	interpolate_(e, t, n, r) {
		let i = this.resultBuffer, a = this.sampleValues, s = this.valueSize, c = (n - t) / (r - t), l = e * s;
		for (let e = l + s; l !== e; l += 4) Quaternion.slerpFlat(i, 0, a, l - s, a, l, c);
		return i;
	}
}, QuaternionKeyframeTrack = class extends KeyframeTrack {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
	InterpolantFactoryMethodLinear(e) {
		return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), e);
	}
};
QuaternionKeyframeTrack.prototype.ValueTypeName = "quaternion", QuaternionKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var StringKeyframeTrack = class extends KeyframeTrack {
	constructor(e, t, n) {
		super(e, t, n);
	}
};
StringKeyframeTrack.prototype.ValueTypeName = "string", StringKeyframeTrack.prototype.ValueBufferType = Array, StringKeyframeTrack.prototype.DefaultInterpolation = InterpolateDiscrete, StringKeyframeTrack.prototype.InterpolantFactoryMethodLinear = void 0, StringKeyframeTrack.prototype.InterpolantFactoryMethodSmooth = void 0;
var VectorKeyframeTrack = class extends KeyframeTrack {
	constructor(e, t, n, r) {
		super(e, t, n, r);
	}
};
VectorKeyframeTrack.prototype.ValueTypeName = "vector";
var Cache = {
	enabled: !1,
	files: {},
	add: function(e, t) {
		this.enabled !== !1 && (isBlobURL(e) || (this.files[e] = t));
	},
	get: function(e) {
		if (this.enabled !== !1 && !isBlobURL(e)) return this.files[e];
	},
	remove: function(e) {
		delete this.files[e];
	},
	clear: function() {
		this.files = {};
	}
};
function isBlobURL(e) {
	try {
		let t = e.slice(e.indexOf(":") + 1);
		return new URL(t).protocol === "blob:";
	} catch {
		return !1;
	}
}
var LoadingManager = class {
	constructor(e, t, n) {
		let r = this, i = !1, a = 0, s = 0, c, l = [];
		this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this._abortController = null, this.itemStart = function(e) {
			s++, i === !1 && r.onStart !== void 0 && r.onStart(e, a, s), i = !0;
		}, this.itemEnd = function(e) {
			a++, r.onProgress !== void 0 && r.onProgress(e, a, s), a === s && (i = !1, r.onLoad !== void 0 && r.onLoad());
		}, this.itemError = function(e) {
			r.onError !== void 0 && r.onError(e);
		}, this.resolveURL = function(e) {
			return e = e.normalize("NFC"), c ? c(e) : e;
		}, this.setURLModifier = function(e) {
			return c = e, this;
		}, this.addHandler = function(e, t) {
			return l.push(e, t), this;
		}, this.removeHandler = function(e) {
			let t = l.indexOf(e);
			return t !== -1 && l.splice(t, 2), this;
		}, this.getHandler = function(e) {
			for (let t = 0, n = l.length; t < n; t += 2) {
				let n = l[t], r = l[t + 1];
				if (n.global && (n.lastIndex = 0), n.test(e)) return r;
			}
			return null;
		}, this.abort = function() {
			return this.abortController.abort(), this._abortController = null, this;
		};
	}
	get abortController() {
		return this._abortController ||= new AbortController(), this._abortController;
	}
}, DefaultLoadingManager = /*@__PURE__*/ new LoadingManager(), Loader = class {
	constructor(e) {
		this.manager = e === void 0 ? DefaultLoadingManager : e, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	load() {}
	loadAsync(e, t) {
		let n = this;
		return new Promise(function(r, i) {
			n.load(e, r, t, i);
		});
	}
	parse() {}
	setCrossOrigin(e) {
		return this.crossOrigin = e, this;
	}
	setWithCredentials(e) {
		return this.withCredentials = e, this;
	}
	setPath(e) {
		return this.path = e, this;
	}
	setResourcePath(e) {
		return this.resourcePath = e, this;
	}
	setRequestHeader(e) {
		return this.requestHeader = e, this;
	}
	abort() {
		return this;
	}
};
Loader.DEFAULT_MATERIAL_NAME = "__DEFAULT";
var loading = {}, HttpError = class extends Error {
	constructor(e, t) {
		super(e), this.response = t;
	}
}, FileLoader = class extends Loader {
	constructor(e) {
		super(e), this.mimeType = "", this.responseType = "", this._abortController = new AbortController();
	}
	load(e, t, n, r) {
		e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
		let i = Cache.get(`file:${e}`);
		if (i !== void 0) {
			this.manager.itemStart(e), setTimeout(() => {
				t && t(i), this.manager.itemEnd(e);
			}, 0);
			return;
		}
		if (loading[e] !== void 0) {
			loading[e].push({
				onLoad: t,
				onProgress: n,
				onError: r
			});
			return;
		}
		loading[e] = [], loading[e].push({
			onLoad: t,
			onProgress: n,
			onError: r
		});
		let a = new Request(e, {
			headers: new Headers(this.requestHeader),
			credentials: this.withCredentials ? "include" : "same-origin",
			signal: typeof AbortSignal.any == "function" ? AbortSignal.any([this._abortController.signal, this.manager.abortController.signal]) : this._abortController.signal
		}), s = this.mimeType, c = this.responseType;
		fetch(a).then((t) => {
			if (t.status === 200 || t.status === 0) {
				if (t.status === 0 && warn("FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || t.body === void 0 || t.body.getReader === void 0) return t;
				let n = loading[e], r = t.body.getReader(), i = t.headers.get("X-File-Size") || t.headers.get("Content-Length"), a = i ? parseInt(i) : 0, s = a !== 0, c = 0, l = new ReadableStream({ start(e) {
					t();
					function t() {
						r.read().then(({ done: r, value: i }) => {
							if (r) e.close();
							else {
								c += i.byteLength;
								let r = new ProgressEvent("progress", {
									lengthComputable: s,
									loaded: c,
									total: a
								});
								for (let e = 0, t = n.length; e < t; e++) {
									let t = n[e];
									t.onProgress && t.onProgress(r);
								}
								e.enqueue(i), t();
							}
						}, (t) => {
							e.error(t);
						});
					}
				} });
				return new Response(l);
			} else throw new HttpError(`fetch for "${t.url}" responded with ${t.status}: ${t.statusText}`, t);
		}).then((e) => {
			switch (c) {
				case "arraybuffer": return e.arrayBuffer();
				case "blob": return e.blob();
				case "document": return e.text().then((e) => new DOMParser().parseFromString(e, s));
				case "json": return e.json();
				default:
					if (s === "") return e.text();
					{
						let t = /charset="?([^;"\s]*)"?/i.exec(s), n = t && t[1] ? t[1].toLowerCase() : void 0, r = new TextDecoder(n);
						return e.arrayBuffer().then((e) => r.decode(e));
					}
			}
		}).then((t) => {
			Cache.add(`file:${e}`, t);
			let n = loading[e];
			delete loading[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onLoad && r.onLoad(t);
			}
		}).catch((t) => {
			let n = loading[e];
			if (n === void 0) throw this.manager.itemError(e), t;
			delete loading[e];
			for (let e = 0, r = n.length; e < r; e++) {
				let r = n[e];
				r.onError && r.onError(t);
			}
			this.manager.itemError(e);
		}).finally(() => {
			this.manager.itemEnd(e);
		}), this.manager.itemStart(e);
	}
	setResponseType(e) {
		return this.responseType = e, this;
	}
	setMimeType(e) {
		return this.mimeType = e, this;
	}
	abort() {
		return this._abortController.abort(), this._abortController = new AbortController(), this;
	}
}, Light = class extends Object3D {
	constructor(e, t = 1) {
		super(), this.isLight = !0, this.type = "Light", this.color = new Color$1(e), this.intensity = t;
	}
	dispose() {
		this.dispatchEvent({ type: "dispose" });
	}
	copy(e, t) {
		return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, t;
	}
}, _projScreenMatrix$1 = /*@__PURE__*/ new Matrix4(), _lightPositionWorld$1 = /*@__PURE__*/ new Vector3(), _lookTarget$1 = /*@__PURE__*/ new Vector3(), LightShadow = class {
	constructor(e) {
		this.camera = e, this.intensity = 1, this.bias = 0, this.biasNode = null, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Vector2(512, 512), this.mapType = UnsignedByteType, this.map = null, this.mapPass = null, this.matrix = new Matrix4(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new Frustum(), this._frameExtents = new Vector2(1, 1), this._viewportCount = 1, this._viewports = [new Vector4(0, 0, 1, 1)];
	}
	getViewportCount() {
		return this._viewportCount;
	}
	getFrustum() {
		return this._frustum;
	}
	updateMatrices(e) {
		let t = this.camera, n = this.matrix;
		_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld), t.position.copy(_lightPositionWorld$1), _lookTarget$1.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(_lookTarget$1), t.updateMatrixWorld(), _projScreenMatrix$1.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(_projScreenMatrix$1, t.coordinateSystem, t.reversedDepth), t.coordinateSystem === 2001 || t.reversedDepth ? n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, 1, 0, 0, 0, 0, 1) : n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), n.multiply(_projScreenMatrix$1);
	}
	getViewport(e) {
		return this._viewports[e];
	}
	getFrameExtents() {
		return this._frameExtents;
	}
	dispose() {
		this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
	}
	copy(e) {
		return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.autoUpdate = e.autoUpdate, this.needsUpdate = e.needsUpdate, this.normalBias = e.normalBias, this.blurSamples = e.blurSamples, this.mapSize.copy(e.mapSize), this.biasNode = e.biasNode, this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	toJSON() {
		let e = {};
		return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
	}
}, _position$2 = /*@__PURE__*/ new Vector3(), _quaternion$2 = /*@__PURE__*/ new Quaternion(), _scale$2 = /*@__PURE__*/ new Vector3(), Camera = class extends Object3D {
	constructor() {
		super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Matrix4(), this.projectionMatrix = new Matrix4(), this.projectionMatrixInverse = new Matrix4(), this.coordinateSystem = WebGLCoordinateSystem, this._reversedDepth = !1;
	}
	get reversedDepth() {
		return this._reversedDepth;
	}
	copy(e, t) {
		return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
	}
	getWorldDirection(e) {
		return super.getWorldDirection(e).negate();
	}
	updateMatrixWorld(e) {
		super.updateMatrixWorld(e), this.matrixWorld.decompose(_position$2, _quaternion$2, _scale$2), _scale$2.x === 1 && _scale$2.y === 1 && _scale$2.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(_position$2, _quaternion$2, _scale$2.set(1, 1, 1)).invert();
	}
	updateWorldMatrix(e, t, n = !1) {
		super.updateWorldMatrix(e, t, n), this.matrixWorld.decompose(_position$2, _quaternion$2, _scale$2), _scale$2.x === 1 && _scale$2.y === 1 && _scale$2.z === 1 ? this.matrixWorldInverse.copy(this.matrixWorld).invert() : this.matrixWorldInverse.compose(_position$2, _quaternion$2, _scale$2.set(1, 1, 1)).invert();
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, _v3$1 = /*@__PURE__*/ new Vector3(), _minTarget = /*@__PURE__*/ new Vector2(), _maxTarget = /*@__PURE__*/ new Vector2(), PerspectiveCamera = class extends Camera {
	constructor(e = 50, t = 1, n = .1, r = 2e3) {
		super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
	}
	setFocalLength(e) {
		let t = .5 * this.getFilmHeight() / e;
		this.fov = RAD2DEG$1 * 2 * Math.atan(t), this.updateProjectionMatrix();
	}
	getFocalLength() {
		let e = Math.tan(DEG2RAD$1 * .5 * this.fov);
		return .5 * this.getFilmHeight() / e;
	}
	getEffectiveFOV() {
		return RAD2DEG$1 * 2 * Math.atan(Math.tan(DEG2RAD$1 * .5 * this.fov) / this.zoom);
	}
	getFilmWidth() {
		return this.filmGauge * Math.min(this.aspect, 1);
	}
	getFilmHeight() {
		return this.filmGauge / Math.max(this.aspect, 1);
	}
	getViewBounds(e, t, n) {
		_v3$1.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse), t.set(_v3$1.x, _v3$1.y).multiplyScalar(-e / _v3$1.z), _v3$1.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse), n.set(_v3$1.x, _v3$1.y).multiplyScalar(-e / _v3$1.z);
	}
	getViewSize(e, t) {
		return this.getViewBounds(e, _minTarget, _maxTarget), t.subVectors(_maxTarget, _minTarget);
	}
	setViewOffset(e, t, n, r, i, a) {
		this.aspect = e / t, this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = this.near, t = e * Math.tan(DEG2RAD$1 * .5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, i = -.5 * r, a = this.view;
		if (this.view !== null && this.view.enabled) {
			let e = a.fullWidth, s = a.fullHeight;
			i += a.offsetX * r / e, t -= a.offsetY * n / s, r *= a.width / e, n *= a.height / s;
		}
		let s = this.filmOffset;
		s !== 0 && (i += e * s / this.getFilmWidth()), this.projectionMatrix.makePerspective(i, i + r, t, t - n, e, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
	}
}, PointLightShadow = class extends LightShadow {
	constructor() {
		super(new PerspectiveCamera(90, 1, .5, 500)), this.isPointLightShadow = !0;
	}
}, PointLight = class extends Light {
	constructor(e, t, n = 0, r = 2) {
		super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new PointLightShadow();
	}
	get power() {
		return this.intensity * 4 * Math.PI;
	}
	set power(e) {
		this.intensity = e / (4 * Math.PI);
	}
	dispose() {
		super.dispose(), this.shadow.dispose();
	}
	copy(e, t) {
		return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.distance = this.distance, t.object.decay = this.decay, t.object.shadow = this.shadow.toJSON(), t;
	}
}, OrthographicCamera = class extends Camera {
	constructor(e = -1, t = 1, n = 1, r = -1, i = .1, a = 2e3) {
		super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = i, this.far = a, this.updateProjectionMatrix();
	}
	copy(e, t) {
		return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
	}
	setViewOffset(e, t, n, r, i, a) {
		this.view === null && (this.view = {
			enabled: !0,
			fullWidth: 1,
			fullHeight: 1,
			offsetX: 0,
			offsetY: 0,
			width: 1,
			height: 1
		}), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = i, this.view.height = a, this.updateProjectionMatrix();
	}
	clearViewOffset() {
		this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
	}
	updateProjectionMatrix() {
		let e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2, i = n - e, a = n + e, s = r + t, c = r - t;
		if (this.view !== null && this.view.enabled) {
			let e = (this.right - this.left) / this.view.fullWidth / this.zoom, t = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
			i += e * this.view.offsetX, a = i + e * this.view.width, s -= t * this.view.offsetY, c = s - t * this.view.height;
		}
		this.projectionMatrix.makeOrthographic(i, a, s, c, this.near, this.far, this.coordinateSystem, this.reversedDepth), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
	}
	toJSON(e) {
		let t = super.toJSON(e);
		return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
	}
}, AmbientLight = class extends Light {
	constructor(e, t) {
		super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
	}
}, fov = -90, aspect = 1, CubeCamera = class extends Object3D {
	constructor(e, t, n) {
		super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
		let r = new PerspectiveCamera(fov, aspect, e, t);
		r.layers = this.layers, this.add(r);
		let i = new PerspectiveCamera(fov, aspect, e, t);
		i.layers = this.layers, this.add(i);
		let a = new PerspectiveCamera(fov, aspect, e, t);
		a.layers = this.layers, this.add(a);
		let s = new PerspectiveCamera(fov, aspect, e, t);
		s.layers = this.layers, this.add(s);
		let c = new PerspectiveCamera(fov, aspect, e, t);
		c.layers = this.layers, this.add(c);
		let l = new PerspectiveCamera(fov, aspect, e, t);
		l.layers = this.layers, this.add(l);
	}
	updateCoordinateSystem() {
		let e = this.coordinateSystem, t = this.children.concat(), [n, r, i, a, s, c] = t;
		for (let e of t) this.remove(e);
		if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), i.up.set(0, 0, -1), i.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), s.up.set(0, 1, 0), s.lookAt(0, 0, 1), c.up.set(0, 1, 0), c.lookAt(0, 0, -1);
		else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0, 0), i.up.set(0, 0, 1), i.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), s.up.set(0, -1, 0), s.lookAt(0, 0, 1), c.up.set(0, -1, 0), c.lookAt(0, 0, -1);
		else throw Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
		for (let e of t) this.add(e), e.updateMatrixWorld();
	}
	update(e, t) {
		this.parent === null && this.updateMatrixWorld();
		let { renderTarget: n, activeMipmapLevel: r } = this;
		this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
		let [i, a, s, c, l, u] = this.children, d = e.getRenderTarget(), f = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), h = e.xr.enabled;
		e.xr.enabled = !1;
		let g = n.texture.generateMipmaps;
		n.texture.generateMipmaps = !1;
		let _ = !1;
		_ = e.isWebGLRenderer === !0 ? e.state.buffers.depth.getReversed() : e.reversedDepthBuffer, e.setRenderTarget(n, 0, r), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, i), e.setRenderTarget(n, 1, r), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, a), e.setRenderTarget(n, 2, r), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, s), e.setRenderTarget(n, 3, r), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, c), e.setRenderTarget(n, 4, r), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, l), n.texture.generateMipmaps = g, e.setRenderTarget(n, 5, r), _ && e.autoClear === !1 && e.clearDepth(), e.render(t, u), e.setRenderTarget(d, f, p), e.xr.enabled = h, n.texture.needsPMREMUpdate = !0;
	}
}, ArrayCamera = class extends PerspectiveCamera {
	constructor(e = []) {
		super(), this.isArrayCamera = !0, this.isMultiViewCamera = !1, this.cameras = e;
	}
}, Timer = class {
	constructor() {
		this._previousTime = 0, this._currentTime = 0, this._startTime = performance.now(), this._delta = 0, this._elapsed = 0, this._timescale = 1, this._document = null, this._pageVisibilityHandler = null;
	}
	connect(e) {
		this._document = e, e.hidden !== void 0 && (this._pageVisibilityHandler = handleVisibilityChange.bind(this), e.addEventListener("visibilitychange", this._pageVisibilityHandler, !1));
	}
	disconnect() {
		this._pageVisibilityHandler !== null && (this._document.removeEventListener("visibilitychange", this._pageVisibilityHandler), this._pageVisibilityHandler = null), this._document = null;
	}
	getDelta() {
		return this._delta / 1e3;
	}
	getElapsed() {
		return this._elapsed / 1e3;
	}
	getTimescale() {
		return this._timescale;
	}
	setTimescale(e) {
		return this._timescale = e, this;
	}
	reset() {
		return this._currentTime = performance.now() - this._startTime, this;
	}
	dispose() {
		this.disconnect();
	}
	update(e) {
		return this._pageVisibilityHandler !== null && this._document.hidden === !0 ? this._delta = 0 : (this._previousTime = this._currentTime, this._currentTime = (e === void 0 ? performance.now() : e) - this._startTime, this._delta = (this._currentTime - this._previousTime) * this._timescale, this._elapsed += this._delta), this;
	}
};
function handleVisibilityChange() {
	this._document.hidden === !1 && this.reset();
}
var _RESERVED_CHARS_RE = "\\[\\]\\.:\\/", _reservedRe = /* @__PURE__ */ RegExp("[\\[\\]\\.:\\/]", "g"), _wordChar = "[^\\[\\]\\.:\\/]", _wordCharOrDot = "[^" + _RESERVED_CHARS_RE.replace("\\.", "") + "]", _directoryRe = /*@__PURE__*/ "((?:WC+[\\/:])*)".replace("WC", _wordChar), _nodeRe = /*@__PURE__*/ "(WCOD+)?".replace("WCOD", _wordCharOrDot), _objectRe = /*@__PURE__*/ "(?:\\.(WC+)(?:\\[(.+)\\])?)?".replace("WC", _wordChar), _propertyRe = /*@__PURE__*/ "\\.(WC+)(?:\\[(.+)\\])?".replace("WC", _wordChar), _trackRe = RegExp("^" + _directoryRe + _nodeRe + _objectRe + _propertyRe + "$"), _supportedObjectNames = [
	"material",
	"materials",
	"bones",
	"map"
], Composite = class {
	constructor(e, t, n) {
		let r = n || PropertyBinding.parseTrackName(t);
		this._targetGroup = e, this._bindings = e.subscribe_(t, r);
	}
	getValue(e, t) {
		this.bind();
		let n = this._targetGroup.nCachedObjects_, r = this._bindings[n];
		r !== void 0 && r.getValue(e, t);
	}
	setValue(e, t) {
		let n = this._bindings;
		for (let r = this._targetGroup.nCachedObjects_, i = n.length; r !== i; ++r) n[r].setValue(e, t);
	}
	bind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
	}
	unbind() {
		let e = this._bindings;
		for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
	}
}, PropertyBinding = class e {
	constructor(t, n, r) {
		this.path = n, this.parsedPath = r || e.parseTrackName(n), this.node = e.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
	static create(t, n, r) {
		return t && t.isAnimationObjectGroup ? new e.Composite(t, n, r) : new e(t, n, r);
	}
	static sanitizeNodeName(e) {
		return e.replace(/\s/g, "_").replace(_reservedRe, "");
	}
	static parseTrackName(e) {
		let t = _trackRe.exec(e);
		if (t === null) throw Error("THREE.PropertyBinding: Cannot parse trackName: " + e);
		let n = {
			nodeName: t[2],
			objectName: t[3],
			objectIndex: t[4],
			propertyName: t[5],
			propertyIndex: t[6]
		}, r = n.nodeName && n.nodeName.lastIndexOf(".");
		if (r !== void 0 && r !== -1) {
			let e = n.nodeName.substring(r + 1);
			_supportedObjectNames.indexOf(e) !== -1 && (n.nodeName = n.nodeName.substring(0, r), n.objectName = e);
		}
		if (n.propertyName === null || n.propertyName.length === 0) throw Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + e);
		return n;
	}
	static findNode(e, t) {
		if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
		if (e.skeleton) {
			let n = e.skeleton.getBoneByName(t);
			if (n !== void 0) return n;
		}
		if (e.children) {
			let n = function(e) {
				for (let r = 0; r < e.length; r++) {
					let i = e[r];
					if (i.name === t || i.uuid === t) return i;
					let a = n(i.children);
					if (a) return a;
				}
				return null;
			}, r = n(e.children);
			if (r) return r;
		}
		return null;
	}
	_getValue_unavailable() {}
	_setValue_unavailable() {}
	_getValue_direct(e, t) {
		e[t] = this.targetObject[this.propertyName];
	}
	_getValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) e[t++] = n[r];
	}
	_getValue_arrayElement(e, t) {
		e[t] = this.resolvedProperty[this.propertyIndex];
	}
	_getValue_toArray(e, t) {
		this.resolvedProperty.toArray(e, t);
	}
	_setValue_direct(e, t) {
		this.targetObject[this.propertyName] = e[t];
	}
	_setValue_direct_setNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
		this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_array(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
	}
	_setValue_array_setNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.needsUpdate = !0;
	}
	_setValue_array_setMatrixWorldNeedsUpdate(e, t) {
		let n = this.resolvedProperty;
		for (let r = 0, i = n.length; r !== i; ++r) n[r] = e[t++];
		this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_arrayElement(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t];
	}
	_setValue_arrayElement_setNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = !0;
	}
	_setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_setValue_fromArray(e, t) {
		this.resolvedProperty.fromArray(e, t);
	}
	_setValue_fromArray_setNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = !0;
	}
	_setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
		this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = !0;
	}
	_getValue_unbound(e, t) {
		this.bind(), this.getValue(e, t);
	}
	_setValue_unbound(e, t) {
		this.bind(), this.setValue(e, t);
	}
	bind() {
		let t = this.node, n = this.parsedPath, r = n.objectName, i = n.propertyName, a = n.propertyIndex;
		if (t || (t = e.findNode(this.rootNode, n.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) {
			warn("PropertyBinding: No target node found for track: " + this.path + ".");
			return;
		}
		if (r) {
			let e = n.objectIndex;
			switch (r) {
				case "materials":
					if (!t.material) {
						error("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.materials) {
						error("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						return;
					}
					t = t.material.materials;
					break;
				case "bones":
					if (!t.skeleton) {
						error("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						return;
					}
					t = t.skeleton.bones;
					for (let n = 0; n < t.length; n++) if (t[n].name === e) {
						e = n;
						break;
					}
					break;
				case "map":
					if ("map" in t) {
						t = t.map;
						break;
					}
					if (!t.material) {
						error("PropertyBinding: Can not bind to material as node does not have a material.", this);
						return;
					}
					if (!t.material.map) {
						error("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						return;
					}
					t = t.material.map;
					break;
				default:
					if (t[r] === void 0) {
						error("PropertyBinding: Can not bind to objectName of node undefined.", this);
						return;
					}
					t = t[r];
			}
			if (e !== void 0) {
				if (t[e] === void 0) {
					error("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					return;
				}
				t = t[e];
			}
		}
		let s = t[i];
		if (s === void 0) {
			let e = n.nodeName;
			error("PropertyBinding: Trying to update property for track: " + e + "." + i + " but it wasn't found.", t);
			return;
		}
		let c = this.Versioning.None;
		this.targetObject = t, t.isMaterial === !0 ? c = this.Versioning.NeedsUpdate : t.isObject3D === !0 && (c = this.Versioning.MatrixWorldNeedsUpdate);
		let l = this.BindingType.Direct;
		if (a !== void 0) {
			if (i === "morphTargetInfluences") {
				if (!t.geometry) {
					error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					return;
				}
				if (!t.geometry.morphAttributes) {
					error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					return;
				}
				t.morphTargetDictionary[a] !== void 0 && (a = t.morphTargetDictionary[a]);
			}
			l = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = a;
		} else s.fromArray !== void 0 && s.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (l = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
		this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][c];
	}
	unbind() {
		this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
	}
};
PropertyBinding.Composite = Composite, PropertyBinding.prototype.BindingType = {
	Direct: 0,
	EntireArray: 1,
	ArrayElement: 2,
	HasFromToArray: 3
}, PropertyBinding.prototype.Versioning = {
	None: 0,
	NeedsUpdate: 1,
	MatrixWorldNeedsUpdate: 2
}, PropertyBinding.prototype.GetterByBindingType = [
	PropertyBinding.prototype._getValue_direct,
	PropertyBinding.prototype._getValue_array,
	PropertyBinding.prototype._getValue_arrayElement,
	PropertyBinding.prototype._getValue_toArray
], PropertyBinding.prototype.SetterByBindingTypeAndVersioning = [
	[
		PropertyBinding.prototype._setValue_direct,
		PropertyBinding.prototype._setValue_direct_setNeedsUpdate,
		PropertyBinding.prototype._setValue_direct_setMatrixWorldNeedsUpdate
	],
	[
		PropertyBinding.prototype._setValue_array,
		PropertyBinding.prototype._setValue_array_setNeedsUpdate,
		PropertyBinding.prototype._setValue_array_setMatrixWorldNeedsUpdate
	],
	[
		PropertyBinding.prototype._setValue_arrayElement,
		PropertyBinding.prototype._setValue_arrayElement_setNeedsUpdate,
		PropertyBinding.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
	],
	[
		PropertyBinding.prototype._setValue_fromArray,
		PropertyBinding.prototype._setValue_fromArray_setNeedsUpdate,
		PropertyBinding.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
	]
];
var Spherical = class {
	constructor(e = 1, t = 0, n = 0) {
		this.radius = e, this.phi = t, this.theta = n;
	}
	set(e, t, n) {
		return this.radius = e, this.phi = t, this.theta = n, this;
	}
	copy(e) {
		return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
	}
	makeSafe() {
		let e = 1e-6;
		return this.phi = clamp(this.phi, e, Math.PI - e), this;
	}
	setFromVector3(e) {
		return this.setFromCartesianCoords(e.x, e.y, e.z);
	}
	setFromCartesianCoords(e, t, n) {
		return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(clamp(t / this.radius, -1, 1))), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
}, Matrix2 = class e {
	static {
		e.prototype.isMatrix2 = !0;
	}
	constructor(e, t, n, r) {
		this.elements = [
			1,
			0,
			0,
			1
		], e !== void 0 && this.set(e, t, n, r);
	}
	identity() {
		return this.set(1, 0, 0, 1), this;
	}
	fromArray(e, t = 0) {
		for (let n = 0; n < 4; n++) this.elements[n] = e[n + t];
		return this;
	}
	set(e, t, n, r) {
		let i = this.elements;
		return i[0] = e, i[2] = t, i[1] = n, i[3] = r, this;
	}
}, _vector$4 = /*@__PURE__*/ new Vector2(), Box2 = class {
	constructor(e = new Vector2(Infinity, Infinity), t = new Vector2(-Infinity, -Infinity)) {
		this.isBox2 = !0, this.min = e, this.max = t;
	}
	set(e, t) {
		return this.min.copy(e), this.max.copy(t), this;
	}
	setFromPoints(e) {
		this.makeEmpty();
		for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
		return this;
	}
	setFromCenterAndSize(e, t) {
		let n = _vector$4.copy(t).multiplyScalar(.5);
		return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
	}
	clone() {
		return new this.constructor().copy(this);
	}
	copy(e) {
		return this.min.copy(e.min), this.max.copy(e.max), this;
	}
	makeEmpty() {
		return this.min.x = this.min.y = Infinity, this.max.x = this.max.y = -Infinity, this;
	}
	isEmpty() {
		return this.max.x < this.min.x || this.max.y < this.min.y;
	}
	getCenter(e) {
		return this.isEmpty() ? e.set(0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5);
	}
	getSize(e) {
		return this.isEmpty() ? e.set(0, 0) : e.subVectors(this.max, this.min);
	}
	expandByPoint(e) {
		return this.min.min(e), this.max.max(e), this;
	}
	expandByVector(e) {
		return this.min.sub(e), this.max.add(e), this;
	}
	expandByScalar(e) {
		return this.min.addScalar(-e), this.max.addScalar(e), this;
	}
	containsPoint(e) {
		return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y;
	}
	containsBox(e) {
		return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y;
	}
	getParameter(e, t) {
		return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y));
	}
	intersectsBox(e) {
		return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y;
	}
	clampPoint(e, t) {
		return t.copy(e).clamp(this.min, this.max);
	}
	distanceToPoint(e) {
		return this.clampPoint(e, _vector$4).distanceTo(e);
	}
	intersect(e) {
		return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
	}
	union(e) {
		return this.min.min(e.min), this.max.max(e.max), this;
	}
	translate(e) {
		return this.min.add(e), this.max.add(e), this;
	}
	equals(e) {
		return e.min.equals(this.min) && e.max.equals(this.max);
	}
}, GridHelper = class extends LineSegments {
	constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
		n = new Color$1(n), r = new Color$1(r);
		let i = t / 2, a = e / t, s = e / 2, c = [], l = [];
		for (let e = 0, u = 0, d = -s; e <= t; e++, d += a) {
			c.push(-s, 0, d, s, 0, d), c.push(d, 0, -s, d, 0, s);
			let t = e === i ? n : r;
			t.toArray(l, u), u += 3, t.toArray(l, u), u += 3, t.toArray(l, u), u += 3, t.toArray(l, u), u += 3;
		}
		let u = new BufferGeometry();
		u.setAttribute("position", new Float32BufferAttribute(c, 3)), u.setAttribute("color", new Float32BufferAttribute(l, 3));
		let d = new LineBasicMaterial({
			vertexColors: !0,
			toneMapped: !1
		});
		super(u, d), this.type = "GridHelper";
	}
	dispose() {
		this.geometry.dispose(), this.material.dispose();
	}
}, ShapePath = class {
	constructor() {
		this.type = "ShapePath", this.color = new Color$1(), this.subPaths = [], this.currentPath = null, this.userData = {};
	}
	moveTo(e, t) {
		return this.currentPath = new Path(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
	}
	lineTo(e, t) {
		return this.currentPath.lineTo(e, t), this;
	}
	quadraticCurveTo(e, t, n, r) {
		return this.currentPath.quadraticCurveTo(e, t, n, r), this;
	}
	bezierCurveTo(e, t, n, r, i, a) {
		return this.currentPath.bezierCurveTo(e, t, n, r, i, a), this;
	}
	splineThru(e) {
		return this.currentPath.splineThru(e), this;
	}
	toShapes() {
		function e(e, t) {
			let n = !1, r = t.length;
			for (let i = 0, a = r - 1; i < r; a = i++) {
				let r = t[i], s = t[a];
				r.y > e.y != s.y > e.y && e.x < (s.x - r.x) * (e.y - r.y) / (s.y - r.y) + r.x && (n = !n);
			}
			return n;
		}
		function t(t, n) {
			let r = n.getCenter(new Vector2());
			if (e(r, t)) return r;
			let i = r.y, a = [], s = t.length;
			for (let e = 0; e < s; e++) {
				let n = t[e], r = t[(e + 1) % s];
				if (n.y > i != r.y > i) {
					let e = n.x + (i - n.y) * (r.x - n.x) / (r.y - n.y);
					a.push(e);
				}
			}
			return a.length > 1 && (a.sort((e, t) => e - t), r.x = (a[0] + a[1]) / 2), r;
		}
		let n = this.userData.style && this.userData.style.fillRule || "nonzero";
		n !== "nonzero" && n !== "evenodd" && (warn("Fill-rule \"" + n + "\" is not supported, falling back to \"nonzero\"."), n = "nonzero");
		let r = n === "nonzero" ? ((e) => e !== 0) : ((e) => (e & 1) != 0), i = [];
		for (let e of this.subPaths) {
			let n = e.getPoints();
			if (n.length < 3) continue;
			let r = ShapeUtils.area(n);
			if (r === 0) continue;
			let a = new Box2();
			for (let e = 0; e < n.length; e++) a.expandByPoint(n[e]);
			i.push({
				subPath: e,
				points: n,
				boundingBox: a,
				interiorPoint: t(n, a),
				absArea: Math.abs(r),
				winding: r < 0 ? -1 : 1,
				container: null,
				exclude: !1,
				role: null
			});
		}
		i.sort((e, t) => t.absArea - e.absArea);
		for (let t = 0; t < i.length; t++) {
			let n = i[t], a = 0;
			for (let r = t - 1; r >= 0; r--) {
				let t = i[r];
				if (t.boundingBox.containsBox(n.boundingBox) && e(n.interiorPoint, t.points)) {
					n.container = t.exclude ? t.container : t, a = t.winding, n.winding += a;
					break;
				}
			}
			r(n.winding) === r(a) && (n.exclude = !0);
		}
		for (let e of i) e.exclude || (e.role = e.container === null || e.container.role === "hole" ? "outer" : "hole");
		let a = [], s = /* @__PURE__ */ new Map();
		for (let e of i) {
			if (e.exclude || e.role !== "outer") continue;
			let t = new Shape();
			t.curves = e.subPath.curves, a.push(t), s.set(e, t);
		}
		for (let e of i) {
			if (e.exclude || e.role !== "hole") continue;
			let t = s.get(e.container);
			if (!t) continue;
			let n = new Path();
			n.curves = e.subPath.curves, t.holes.push(n);
		}
		return a;
	}
}, Controls = class extends EventDispatcher {
	constructor(e, t = null) {
		super(), this.object = e, this.domElement = t, this.enabled = !0, this.state = -1, this.keys = {}, this.mouseButtons = {
			LEFT: null,
			MIDDLE: null,
			RIGHT: null
		}, this.touches = {
			ONE: null,
			TWO: null
		};
	}
	connect(e) {
		if (e === void 0) {
			warn("Controls: connect() now requires an element.");
			return;
		}
		this.domElement !== null && this.disconnect(), this.domElement = e;
	}
	disconnect() {}
	dispose() {}
	update() {}
};
function getByteLength(e, t, n, r) {
	let i = getTextureTypeByteLength(r);
	switch (n) {
		case AlphaFormat: return e * t;
		case RedFormat: return e * t / i.components * i.byteLength;
		case RedIntegerFormat: return e * t / i.components * i.byteLength;
		case RGFormat: return e * t * 2 / i.components * i.byteLength;
		case RGIntegerFormat: return e * t * 2 / i.components * i.byteLength;
		case RGBFormat: return e * t * 3 / i.components * i.byteLength;
		case RGBAFormat: return e * t * 4 / i.components * i.byteLength;
		case RGBAIntegerFormat: return e * t * 4 / i.components * i.byteLength;
		case RGB_S3TC_DXT1_Format:
		case RGBA_S3TC_DXT1_Format: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case RGBA_S3TC_DXT3_Format:
		case RGBA_S3TC_DXT5_Format: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case RGB_PVRTC_2BPPV1_Format:
		case RGBA_PVRTC_2BPPV1_Format: return Math.max(e, 16) * Math.max(t, 8) / 4;
		case RGB_PVRTC_4BPPV1_Format:
		case RGBA_PVRTC_4BPPV1_Format: return Math.max(e, 8) * Math.max(t, 8) / 2;
		case RGB_ETC1_Format:
		case RGB_ETC2_Format:
		case R11_EAC_Format:
		case SIGNED_R11_EAC_Format: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 8;
		case RGBA_ETC2_EAC_Format:
		case RG11_EAC_Format:
		case SIGNED_RG11_EAC_Format: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case RGBA_ASTC_4x4_Format: return Math.floor((e + 3) / 4) * Math.floor((t + 3) / 4) * 16;
		case RGBA_ASTC_5x4_Format: return Math.floor((e + 4) / 5) * Math.floor((t + 3) / 4) * 16;
		case RGBA_ASTC_5x5_Format: return Math.floor((e + 4) / 5) * Math.floor((t + 4) / 5) * 16;
		case RGBA_ASTC_6x5_Format: return Math.floor((e + 5) / 6) * Math.floor((t + 4) / 5) * 16;
		case RGBA_ASTC_6x6_Format: return Math.floor((e + 5) / 6) * Math.floor((t + 5) / 6) * 16;
		case RGBA_ASTC_8x5_Format: return Math.floor((e + 7) / 8) * Math.floor((t + 4) / 5) * 16;
		case RGBA_ASTC_8x6_Format: return Math.floor((e + 7) / 8) * Math.floor((t + 5) / 6) * 16;
		case RGBA_ASTC_8x8_Format: return Math.floor((e + 7) / 8) * Math.floor((t + 7) / 8) * 16;
		case RGBA_ASTC_10x5_Format: return Math.floor((e + 9) / 10) * Math.floor((t + 4) / 5) * 16;
		case RGBA_ASTC_10x6_Format: return Math.floor((e + 9) / 10) * Math.floor((t + 5) / 6) * 16;
		case RGBA_ASTC_10x8_Format: return Math.floor((e + 9) / 10) * Math.floor((t + 7) / 8) * 16;
		case RGBA_ASTC_10x10_Format: return Math.floor((e + 9) / 10) * Math.floor((t + 9) / 10) * 16;
		case RGBA_ASTC_12x10_Format: return Math.floor((e + 11) / 12) * Math.floor((t + 9) / 10) * 16;
		case RGBA_ASTC_12x12_Format: return Math.floor((e + 11) / 12) * Math.floor((t + 11) / 12) * 16;
		case RGBA_BPTC_Format:
		case RGB_BPTC_SIGNED_Format:
		case RGB_BPTC_UNSIGNED_Format: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
		case RED_RGTC1_Format:
		case SIGNED_RED_RGTC1_Format: return Math.ceil(e / 4) * Math.ceil(t / 4) * 8;
		case RED_GREEN_RGTC2_Format:
		case SIGNED_RED_GREEN_RGTC2_Format: return Math.ceil(e / 4) * Math.ceil(t / 4) * 16;
	}
	throw Error(`Unable to determine texture byte length for ${n} format.`);
}
function getTextureTypeByteLength(e) {
	switch (e) {
		case UnsignedByteType:
		case ByteType: return {
			byteLength: 1,
			components: 1
		};
		case UnsignedShortType:
		case ShortType:
		case HalfFloatType: return {
			byteLength: 2,
			components: 1
		};
		case UnsignedShort4444Type:
		case UnsignedShort5551Type: return {
			byteLength: 2,
			components: 4
		};
		case UnsignedIntType:
		case IntType:
		case FloatType: return {
			byteLength: 4,
			components: 1
		};
		case UnsignedInt5999Type:
		case UnsignedInt101111Type: return {
			byteLength: 4,
			components: 3
		};
	}
	throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "185" } })), typeof window < "u" && (window.__THREE__ ? warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "185");
//#endregion
//#region node_modules/three/build/three.module.js
function WebGLAnimation() {
	let e = null, t = !1, n = null, r = null;
	function i(t, a) {
		n(t, a), r = e.requestAnimationFrame(i);
	}
	return {
		start: function() {
			t !== !0 && n !== null && e !== null && (r = e.requestAnimationFrame(i), t = !0);
		},
		stop: function() {
			e !== null && e.cancelAnimationFrame(r), t = !1;
		},
		setAnimationLoop: function(e) {
			n = e;
		},
		setContext: function(t) {
			e = t;
		}
	};
}
function WebGLAttributes(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(t, n) {
		let r = t.array, i = t.usage, a = r.byteLength, s = e.createBuffer();
		e.bindBuffer(n, s), e.bufferData(n, r, i), t.onUploadCallback();
		let c;
		if (r instanceof Float32Array) c = e.FLOAT;
		else if (typeof Float16Array < "u" && r instanceof Float16Array) c = e.HALF_FLOAT;
		else if (r instanceof Uint16Array) c = t.isFloat16BufferAttribute ? e.HALF_FLOAT : e.UNSIGNED_SHORT;
		else if (r instanceof Int16Array) c = e.SHORT;
		else if (r instanceof Uint32Array) c = e.UNSIGNED_INT;
		else if (r instanceof Int32Array) c = e.INT;
		else if (r instanceof Int8Array) c = e.BYTE;
		else if (r instanceof Uint8Array) c = e.UNSIGNED_BYTE;
		else if (r instanceof Uint8ClampedArray) c = e.UNSIGNED_BYTE;
		else throw Error("THREE.WebGLAttributes: Unsupported buffer data format: " + r);
		return {
			buffer: s,
			type: c,
			bytesPerElement: r.BYTES_PER_ELEMENT,
			version: t.version,
			size: a
		};
	}
	function r(t, n, r) {
		let i = n.array, a = n.updateRanges;
		if (e.bindBuffer(r, t), a.length === 0) e.bufferSubData(r, 0, i);
		else {
			a.sort((e, t) => e.start - t.start);
			let t = 0;
			for (let e = 1; e < a.length; e++) {
				let n = a[t], r = a[e];
				r.start <= n.start + n.count + 1 ? n.count = Math.max(n.count, r.start + r.count - n.start) : (++t, a[t] = r);
			}
			a.length = t + 1;
			for (let t = 0, n = a.length; t < n; t++) {
				let n = a[t];
				e.bufferSubData(r, n.start * i.BYTES_PER_ELEMENT, i, n.start, n.count);
			}
			n.clearUpdateRanges();
		}
		n.onUploadCallback();
	}
	function i(e) {
		return e.isInterleavedBufferAttribute && (e = e.data), t.get(e);
	}
	function a(n) {
		n.isInterleavedBufferAttribute && (n = n.data);
		let r = t.get(n);
		r && (e.deleteBuffer(r.buffer), t.delete(n));
	}
	function s(e, i) {
		if (e.isInterleavedBufferAttribute && (e = e.data), e.isGLBufferAttribute) {
			let n = t.get(e);
			(!n || n.version < e.version) && t.set(e, {
				buffer: e.buffer,
				type: e.type,
				bytesPerElement: e.elementSize,
				version: e.version
			});
			return;
		}
		let a = t.get(e);
		if (a === void 0) t.set(e, n(e, i));
		else if (a.version < e.version) {
			if (a.size !== e.array.byteLength) throw Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
			r(a.buffer, e, i), a.version = e.version;
		}
	}
	return {
		get: i,
		remove: a,
		update: s
	};
}
var ShaderChunk = {
	alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif",
	alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif",
	alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif",
	alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif",
	alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif",
	aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif",
	aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif",
	batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec4 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );\n	}\n#endif",
	batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif",
	begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif",
	beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif",
	bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated",
	iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif",
	bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif",
	clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif",
	clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
	clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif",
	clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif",
	color_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#endif",
	color_pars_fragment: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#endif",
	color_pars_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec4 vColor;\n#endif",
	color_vertex: "#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec4( 1.0 );\n#endif\n#ifdef USE_COLOR_ALPHA\n	vColor *= color;\n#elif defined( USE_COLOR )\n	vColor.rgb *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.rgb *= instanceColor.rgb;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );\n#endif",
	common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\n#define inverseTransformDirection transformDirectionByInverseViewMatrix\nvec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {\n	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );\n}\nvec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated",
	cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif",
	defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n#endif",
	displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif",
	displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif",
	emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
	emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif",
	colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
	colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}",
	envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );\n		#ifdef ENVMAP_BLENDING_MULTIPLY\n			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_MIX )\n			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n		#elif defined( ENVMAP_BLENDING_ADD )\n			outgoingLight += envColor.xyz * specularStrength * reflectivity;\n		#endif\n	#endif\n#endif",
	envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n#endif",
	envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif",
	envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif",
	envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );\n			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif",
	envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif",
	fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif",
	fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif",
	fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
	fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif",
	gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}",
	lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif",
	lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;",
	lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert",
	lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif\n#include <lightprobes_pars_fragment>",
	lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;",
	lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon",
	lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
	lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong",
	lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.metalness = metalnessFactor;\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = vec3( 0.04 );\n	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif",
	lights_physical_pars_fragment: "uniform sampler2D dfgLUT;\nstruct PhysicalMaterial {\n	vec3 diffuseColor;\n	vec3 diffuseContribution;\n	vec3 specularColor;\n	vec3 specularColorBlended;\n	float roughness;\n	float metalness;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n		vec3 iridescenceFresnelDielectric;\n		vec3 iridescenceFresnelMetallic;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		return 0.5 / max( gv + gl, EPSILON );\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColorBlended;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float rInv = 1.0 / ( roughness + 0.1 );\n	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;\n	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;\n	float DG = exp( a * dotNV + b );\n	return saturate( DG );\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\nvec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;\n	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;\n	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;\n	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;\n	float Ess_V = dfgV.x + dfgV.y;\n	float Ess_L = dfgL.x + dfgL.y;\n	float Ems_V = 1.0 - Ess_V;\n	float Ems_L = 1.0 - Ess_L;\n	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;\n	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );\n	float compensationFactor = Ems_V * Ems_L;\n	vec3 multiScatter = Fms * compensationFactor;\n	return singleScatter + multiScatter;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n		#ifdef USE_CLEARCOAT\n			vec3 Ncc = geometryClearcoatNormal;\n			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );\n			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );\n			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );\n			mat3 mInvClearcoat = mat3(\n				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),\n				vec3(             0, 1,             0 ),\n				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )\n			);\n			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;\n			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );\n		#endif\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n \n 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n \n 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );\n \n 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );\n \n 		irradiance *= sheenEnergyComp;\n \n 	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		diffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectDiffuse += diffuse;\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;\n 	#endif\n	vec3 singleScatteringDielectric = vec3( 0.0 );\n	vec3 multiScatteringDielectric = vec3( 0.0 );\n	vec3 singleScatteringMetallic = vec3( 0.0 );\n	vec3 multiScatteringMetallic = vec3( 0.0 );\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );\n		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );\n	#endif\n	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );\n	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );\n	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;\n	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	vec3 indirectSpecular = radiance * singleScattering;\n	indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;\n	#ifdef USE_SHEEN\n		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;\n		indirectSpecular *= sheenEnergyComp;\n		indirectDiffuse *= sheenEnergyComp;\n	#endif\n	reflectedLight.indirectSpecular += indirectSpecular;\n	reflectedLight.indirectDiffuse += indirectDiffuse;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
	lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );\n		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n	#ifdef USE_LIGHT_PROBES_GRID\n		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;\n		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );\n		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif",
	lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )\n		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )\n			iblIrradiance += getIBLIrradiance( geometryNormal );\n		#endif\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif",
	lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	#if defined( LAMBERT ) || defined( PHONG )\n		irradiance += iblIrradiance;\n	#endif\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif",
	lightprobes_pars_fragment: "#ifdef USE_LIGHT_PROBES_GRID\nuniform highp sampler3D probesSH;\nuniform vec3 probesMin;\nuniform vec3 probesMax;\nuniform vec3 probesResolution;\nvec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {\n	vec3 res = probesResolution;\n	vec3 gridRange = probesMax - probesMin;\n	vec3 resMinusOne = res - 1.0;\n	vec3 probeSpacing = gridRange / resMinusOne;\n	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;\n	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );\n	uvw = uvw * resMinusOne / res + 0.5 / res;\n	float nz          = res.z;\n	float paddedSlices = nz + 2.0;\n	float atlasDepth  = 7.0 * paddedSlices;\n	float uvZBase     = uvw.z * nz + 1.0;\n	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );\n	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );\n	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );\n	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );\n	vec3 c0 = s0.xyz;\n	vec3 c1 = vec3( s0.w, s1.xy );\n	vec3 c2 = vec3( s1.zw, s2.x );\n	vec3 c3 = s2.yzw;\n	vec3 c4 = s3.xyz;\n	vec3 c5 = vec3( s3.w, s4.xy );\n	vec3 c6 = vec3( s4.zw, s5.x );\n	vec3 c7 = s5.yzw;\n	vec3 c8 = s6.xyz;\n	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;\n	vec3 result = c0 * 0.886227;\n	result += c1 * 2.0 * 0.511664 * y;\n	result += c2 * 2.0 * 0.511664 * z;\n	result += c3 * 2.0 * 0.511664 * x;\n	result += c4 * 2.0 * 0.429043 * x * y;\n	result += c5 * 2.0 * 0.429043 * y * z;\n	result += c6 * ( 0.743125 * z * z - 0.247708 );\n	result += c7 * 2.0 * 0.429043 * x * z;\n	result += c8 * 0.429043 * ( x * x - y * y );\n	return max( result, vec3( 0.0 ) );\n}\n#endif",
	logdepthbuf_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
	logdepthbuf_pars_fragment: "#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_pars_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif",
	logdepthbuf_vertex: "#ifdef USE_LOGARITHMIC_DEPTH_BUFFER\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif",
	map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif",
	map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif",
	map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif",
	map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif",
	metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif",
	metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif",
	morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif",
	morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif",
	morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif",
	morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif",
	normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#ifdef DOUBLE_SIDED\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;",
	normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#if defined( USE_PACKED_NORMALMAP )\n		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );\n	#endif\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif",
	normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif",
	normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n		#ifdef FLIP_SIDED\n			vBitangent = - vBitangent;\n		#endif\n	#endif\n#endif",
	normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif",
	clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif",
	clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif",
	clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif",
	iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif",
	opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );",
	packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n	\n		return depth * ( far - near ) - far;\n	#else\n		return depth * ( near - far ) - near;\n	#endif\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		return ( near * far ) / ( ( near - far ) * depth - near );\n	#else\n		return ( near * far ) / ( ( far - near ) * depth - far );\n	#endif\n}",
	premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif",
	project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;",
	dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
	dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif",
	roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif",
	roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif",
	shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#else\n			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		#endif\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#if defined( SHADOWMAP_TYPE_PCF )\n			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#elif defined( SHADOWMAP_TYPE_BASIC )\n			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		#endif\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float interleavedGradientNoise( vec2 position ) {\n			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );\n		}\n		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {\n			const float goldenAngle = 2.399963229728653;\n			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );\n			float theta = float( sampleIndex ) * goldenAngle + phi;\n			return vec2( cos( theta ), sin( theta ) ) * r;\n		}\n	#endif\n	#if defined( SHADOWMAP_TYPE_PCF )\n		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			shadowCoord.z += shadowBias;\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n				float radius = shadowRadius * texelSize.x;\n				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n				shadow = (\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +\n					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )\n				) * 0.2;\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#elif defined( SHADOWMAP_TYPE_VSM )\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;\n				float mean = distribution.x;\n				float variance = distribution.y * distribution.y;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					float hard_shadow = step( mean, shadowCoord.z );\n				#else\n					float hard_shadow = step( shadowCoord.z, mean );\n				#endif\n				\n				if ( hard_shadow == 1.0 ) {\n					shadow = 1.0;\n				} else {\n					variance = max( variance, 0.0000001 );\n					float d = shadowCoord.z - mean;\n					float p_max = variance / ( variance + d * d );\n					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );\n					shadow = max( hard_shadow, p_max );\n				}\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#else\n		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n			float shadow = 1.0;\n			shadowCoord.xyz /= shadowCoord.w;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				shadowCoord.z -= shadowBias;\n			#else\n				shadowCoord.z += shadowBias;\n			#endif\n			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n			if ( frustumTest ) {\n				float depth = texture2D( shadowMap, shadowCoord.xy ).r;\n				#ifdef USE_REVERSED_DEPTH_BUFFER\n					shadow = step( depth, shadowCoord.z );\n				#else\n					shadow = step( shadowCoord.z, depth );\n				#endif\n			}\n			return mix( 1.0, shadow, shadowIntensity );\n		}\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	#if defined( SHADOWMAP_TYPE_PCF )\n	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 bd3D = normalize( lightToPosition );\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp -= shadowBias;\n			#else\n				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n				dp += shadowBias;\n			#endif\n			float texelSize = shadowRadius / shadowMapSize.x;\n			vec3 absDir = abs( bd3D );\n			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );\n			tangent = normalize( cross( bd3D, tangent ) );\n			vec3 bitangent = cross( bd3D, tangent );\n			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;\n			vec2 sample0 = vogelDiskSample( 0, 5, phi );\n			vec2 sample1 = vogelDiskSample( 1, 5, phi );\n			vec2 sample2 = vogelDiskSample( 2, 5, phi );\n			vec2 sample3 = vogelDiskSample( 3, 5, phi );\n			vec2 sample4 = vogelDiskSample( 4, 5, phi );\n			shadow = (\n				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +\n				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )\n			) * 0.2;\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#elif defined( SHADOWMAP_TYPE_BASIC )\n	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		vec3 absVec = abs( lightToPosition );\n		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );\n		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {\n			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );\n			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			float depth = textureCube( shadowMap, bd3D ).r;\n			#ifdef USE_REVERSED_DEPTH_BUFFER\n				depth = 1.0 - depth;\n			#endif\n			shadow = step( dp, depth );\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	#endif\n	#endif\n#endif",
	shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif",
	shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	#ifdef HAS_NORMAL\n		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );\n	#else\n		vec3 shadowWorldNormal = vec3( 0.0 );\n	#endif\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif",
	shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}",
	skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
	skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif",
	skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
	skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif",
	specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif",
	specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif",
	tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
	tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }",
	transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif",
	transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		#else\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif",
	uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif",
	uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif",
	worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif",
	background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
	background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}",
	cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}",
	depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	#ifdef USE_REVERSED_DEPTH_BUFFER\n		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];\n	#else\n		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;\n	#endif\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}",
	distance_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}",
	distance_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );\n}",
	equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}",
	equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}",
	linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}",
	meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}",
	meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}",
	meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}",
	meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}",
	meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n \n		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;\n \n 	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}",
	points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}",
	points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}",
	shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}",
	sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}",
	sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}"
}, UniformsLib = {
	common: {
		diffuse: { value: /*@__PURE__*/ new Color$1(16777215) },
		opacity: { value: 1 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new Matrix3() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		alphaTest: { value: 0 }
	},
	specularmap: {
		specularMap: { value: null },
		specularMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	envmap: {
		envMap: { value: null },
		envMapRotation: { value: /*@__PURE__*/ new Matrix3() },
		reflectivity: { value: 1 },
		ior: { value: 1.5 },
		refractionRatio: { value: .98 },
		dfgLUT: { value: null }
	},
	aomap: {
		aoMap: { value: null },
		aoMapIntensity: { value: 1 },
		aoMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	lightmap: {
		lightMap: { value: null },
		lightMapIntensity: { value: 1 },
		lightMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	bumpmap: {
		bumpMap: { value: null },
		bumpMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		bumpScale: { value: 1 }
	},
	normalmap: {
		normalMap: { value: null },
		normalMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		normalScale: { value: /*@__PURE__*/ new Vector2(1, 1) }
	},
	displacementmap: {
		displacementMap: { value: null },
		displacementMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		displacementScale: { value: 1 },
		displacementBias: { value: 0 }
	},
	emissivemap: {
		emissiveMap: { value: null },
		emissiveMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	metalnessmap: {
		metalnessMap: { value: null },
		metalnessMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	roughnessmap: {
		roughnessMap: { value: null },
		roughnessMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	gradientmap: { gradientMap: { value: null } },
	fog: {
		fogDensity: { value: 25e-5 },
		fogNear: { value: 1 },
		fogFar: { value: 2e3 },
		fogColor: { value: /*@__PURE__*/ new Color$1(16777215) }
	},
	lights: {
		ambientLightColor: { value: [] },
		lightProbe: { value: [] },
		directionalLights: {
			value: [],
			properties: {
				direction: {},
				color: {}
			}
		},
		directionalLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		directionalShadowMatrix: { value: [] },
		spotLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				direction: {},
				distance: {},
				coneCos: {},
				penumbraCos: {},
				decay: {}
			}
		},
		spotLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {}
			}
		},
		spotLightMap: { value: [] },
		spotLightMatrix: { value: [] },
		pointLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				decay: {},
				distance: {}
			}
		},
		pointLightShadows: {
			value: [],
			properties: {
				shadowIntensity: 1,
				shadowBias: {},
				shadowNormalBias: {},
				shadowRadius: {},
				shadowMapSize: {},
				shadowCameraNear: {},
				shadowCameraFar: {}
			}
		},
		pointShadowMatrix: { value: [] },
		hemisphereLights: {
			value: [],
			properties: {
				direction: {},
				skyColor: {},
				groundColor: {}
			}
		},
		rectAreaLights: {
			value: [],
			properties: {
				color: {},
				position: {},
				width: {},
				height: {}
			}
		},
		ltc_1: { value: null },
		ltc_2: { value: null },
		probesSH: { value: null },
		probesMin: { value: /*@__PURE__*/ new Vector3() },
		probesMax: { value: /*@__PURE__*/ new Vector3() },
		probesResolution: { value: /*@__PURE__*/ new Vector3() }
	},
	points: {
		diffuse: { value: /*@__PURE__*/ new Color$1(16777215) },
		opacity: { value: 1 },
		size: { value: 1 },
		scale: { value: 1 },
		map: { value: null },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		alphaTest: { value: 0 },
		uvTransform: { value: /*@__PURE__*/ new Matrix3() }
	},
	sprite: {
		diffuse: { value: /*@__PURE__*/ new Color$1(16777215) },
		opacity: { value: 1 },
		center: { value: /*@__PURE__*/ new Vector2(.5, .5) },
		rotation: { value: 0 },
		map: { value: null },
		mapTransform: { value: /*@__PURE__*/ new Matrix3() },
		alphaMap: { value: null },
		alphaMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		alphaTest: { value: 0 }
	}
}, ShaderLib = {
	basic: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.fog
		]),
		vertexShader: ShaderChunk.meshbasic_vert,
		fragmentShader: ShaderChunk.meshbasic_frag
	},
	lambert: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: /*@__PURE__*/ new Color$1(0) },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: ShaderChunk.meshlambert_vert,
		fragmentShader: ShaderChunk.meshlambert_frag
	},
	phong: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.specularmap,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: /*@__PURE__*/ new Color$1(0) },
				specular: { value: /*@__PURE__*/ new Color$1(1118481) },
				shininess: { value: 30 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: ShaderChunk.meshphong_vert,
		fragmentShader: ShaderChunk.meshphong_frag
	},
	standard: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.envmap,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.roughnessmap,
			UniformsLib.metalnessmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{
				emissive: { value: /*@__PURE__*/ new Color$1(0) },
				roughness: { value: 1 },
				metalness: { value: 0 },
				envMapIntensity: { value: 1 }
			}
		]),
		vertexShader: ShaderChunk.meshphysical_vert,
		fragmentShader: ShaderChunk.meshphysical_frag
	},
	toon: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.aomap,
			UniformsLib.lightmap,
			UniformsLib.emissivemap,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.gradientmap,
			UniformsLib.fog,
			UniformsLib.lights,
			{ emissive: { value: /*@__PURE__*/ new Color$1(0) } }
		]),
		vertexShader: ShaderChunk.meshtoon_vert,
		fragmentShader: ShaderChunk.meshtoon_frag
	},
	matcap: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			UniformsLib.fog,
			{ matcap: { value: null } }
		]),
		vertexShader: ShaderChunk.meshmatcap_vert,
		fragmentShader: ShaderChunk.meshmatcap_frag
	},
	points: {
		uniforms: /*@__PURE__*/ mergeUniforms([UniformsLib.points, UniformsLib.fog]),
		vertexShader: ShaderChunk.points_vert,
		fragmentShader: ShaderChunk.points_frag
	},
	dashed: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.fog,
			{
				scale: { value: 1 },
				dashSize: { value: 1 },
				totalSize: { value: 2 }
			}
		]),
		vertexShader: ShaderChunk.linedashed_vert,
		fragmentShader: ShaderChunk.linedashed_frag
	},
	depth: {
		uniforms: /*@__PURE__*/ mergeUniforms([UniformsLib.common, UniformsLib.displacementmap]),
		vertexShader: ShaderChunk.depth_vert,
		fragmentShader: ShaderChunk.depth_frag
	},
	normal: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.bumpmap,
			UniformsLib.normalmap,
			UniformsLib.displacementmap,
			{ opacity: { value: 1 } }
		]),
		vertexShader: ShaderChunk.meshnormal_vert,
		fragmentShader: ShaderChunk.meshnormal_frag
	},
	sprite: {
		uniforms: /*@__PURE__*/ mergeUniforms([UniformsLib.sprite, UniformsLib.fog]),
		vertexShader: ShaderChunk.sprite_vert,
		fragmentShader: ShaderChunk.sprite_frag
	},
	background: {
		uniforms: {
			uvTransform: { value: /*@__PURE__*/ new Matrix3() },
			t2D: { value: null },
			backgroundIntensity: { value: 1 }
		},
		vertexShader: ShaderChunk.background_vert,
		fragmentShader: ShaderChunk.background_frag
	},
	backgroundCube: {
		uniforms: {
			envMap: { value: null },
			backgroundBlurriness: { value: 0 },
			backgroundIntensity: { value: 1 },
			backgroundRotation: { value: /*@__PURE__*/ new Matrix3() }
		},
		vertexShader: ShaderChunk.backgroundCube_vert,
		fragmentShader: ShaderChunk.backgroundCube_frag
	},
	cube: {
		uniforms: {
			tCube: { value: null },
			tFlip: { value: -1 },
			opacity: { value: 1 }
		},
		vertexShader: ShaderChunk.cube_vert,
		fragmentShader: ShaderChunk.cube_frag
	},
	equirect: {
		uniforms: { tEquirect: { value: null } },
		vertexShader: ShaderChunk.equirect_vert,
		fragmentShader: ShaderChunk.equirect_frag
	},
	distance: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.common,
			UniformsLib.displacementmap,
			{
				referencePosition: { value: /*@__PURE__*/ new Vector3() },
				nearDistance: { value: 1 },
				farDistance: { value: 1e3 }
			}
		]),
		vertexShader: ShaderChunk.distance_vert,
		fragmentShader: ShaderChunk.distance_frag
	},
	shadow: {
		uniforms: /*@__PURE__*/ mergeUniforms([
			UniformsLib.lights,
			UniformsLib.fog,
			{
				color: { value: /*@__PURE__*/ new Color$1(0) },
				opacity: { value: 1 }
			}
		]),
		vertexShader: ShaderChunk.shadow_vert,
		fragmentShader: ShaderChunk.shadow_frag
	}
};
ShaderLib.physical = {
	uniforms: /*@__PURE__*/ mergeUniforms([ShaderLib.standard.uniforms, {
		clearcoat: { value: 0 },
		clearcoatMap: { value: null },
		clearcoatMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		clearcoatNormalMap: { value: null },
		clearcoatNormalMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		clearcoatNormalScale: { value: /*@__PURE__*/ new Vector2(1, 1) },
		clearcoatRoughness: { value: 0 },
		clearcoatRoughnessMap: { value: null },
		clearcoatRoughnessMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		dispersion: { value: 0 },
		iridescence: { value: 0 },
		iridescenceMap: { value: null },
		iridescenceMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		iridescenceIOR: { value: 1.3 },
		iridescenceThicknessMinimum: { value: 100 },
		iridescenceThicknessMaximum: { value: 400 },
		iridescenceThicknessMap: { value: null },
		iridescenceThicknessMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		sheen: { value: 0 },
		sheenColor: { value: /*@__PURE__*/ new Color$1(0) },
		sheenColorMap: { value: null },
		sheenColorMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		sheenRoughness: { value: 1 },
		sheenRoughnessMap: { value: null },
		sheenRoughnessMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		transmission: { value: 0 },
		transmissionMap: { value: null },
		transmissionMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		transmissionSamplerSize: { value: /*@__PURE__*/ new Vector2() },
		transmissionSamplerMap: { value: null },
		thickness: { value: 0 },
		thicknessMap: { value: null },
		thicknessMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		attenuationDistance: { value: 0 },
		attenuationColor: { value: /*@__PURE__*/ new Color$1(0) },
		specularColor: { value: /*@__PURE__*/ new Color$1(1, 1, 1) },
		specularColorMap: { value: null },
		specularColorMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		specularIntensity: { value: 1 },
		specularIntensityMap: { value: null },
		specularIntensityMapTransform: { value: /*@__PURE__*/ new Matrix3() },
		anisotropyVector: { value: /*@__PURE__*/ new Vector2() },
		anisotropyMap: { value: null },
		anisotropyMapTransform: { value: /*@__PURE__*/ new Matrix3() }
	}]),
	vertexShader: ShaderChunk.meshphysical_vert,
	fragmentShader: ShaderChunk.meshphysical_frag
};
var _rgb = {
	r: 0,
	b: 0,
	g: 0
}, _m1$1 = /*@__PURE__*/ new Matrix4(), _m$1 = /*@__PURE__*/ new Matrix3();
_m$1.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function WebGLBackground(e, t, n, r, i, a) {
	let s = new Color$1(0), c = i === !0 ? 0 : 1, l, u, d = null, f = 0, p = null;
	function h(e) {
		let n = e.isScene === !0 ? e.background : null;
		if (n && n.isTexture) {
			let r = e.backgroundBlurriness > 0;
			n = t.get(n, r);
		}
		return n;
	}
	function g(t) {
		let r = !1, i = h(t);
		i === null ? v(s, c) : i && i.isColor && (v(i, 1), r = !0);
		let l = e.xr.getEnvironmentBlendMode();
		l === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : l === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (e.autoClear || r) && (n.buffers.depth.setTest(!0), n.buffers.depth.setMask(!0), n.buffers.color.setMask(!0), e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil));
	}
	function _(t, n) {
		let i = h(n);
		i && (i.isCubeTexture || i.mapping === 306) ? (u === void 0 && (u = new Mesh(new BoxGeometry(1, 1, 1), new ShaderMaterial({
			name: "BackgroundCubeMaterial",
			uniforms: cloneUniforms(ShaderLib.backgroundCube.uniforms),
			vertexShader: ShaderLib.backgroundCube.vertexShader,
			fragmentShader: ShaderLib.backgroundCube.fragmentShader,
			side: 1,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(e, t, n) {
			this.matrixWorld.copyPosition(n.matrixWorld);
		}, Object.defineProperty(u.material, "envMap", { get: function() {
			return this.uniforms.envMap.value;
		} }), r.update(u)), u.material.uniforms.envMap.value = i, u.material.uniforms.backgroundBlurriness.value = n.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, u.material.uniforms.backgroundRotation.value.setFromMatrix4(_m1$1.makeRotationFromEuler(n.backgroundRotation)).transpose(), i.isCubeTexture && i.isRenderTargetTexture === !1 && u.material.uniforms.backgroundRotation.value.premultiply(_m$1), u.material.toneMapped = ColorManagement.getTransfer(i.colorSpace) !== SRGBTransfer, (d !== i || f !== i.version || p !== e.toneMapping) && (u.material.needsUpdate = !0, d = i, f = i.version, p = e.toneMapping), u.layers.enableAll(), t.unshift(u, u.geometry, u.material, 0, 0, null)) : i && i.isTexture && (l === void 0 && (l = new Mesh(new PlaneGeometry(2, 2), new ShaderMaterial({
			name: "BackgroundMaterial",
			uniforms: cloneUniforms(ShaderLib.background.uniforms),
			vertexShader: ShaderLib.background.vertexShader,
			fragmentShader: ShaderLib.background.fragmentShader,
			side: 0,
			depthTest: !1,
			depthWrite: !1,
			fog: !1,
			allowOverride: !1
		})), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
			return this.uniforms.t2D.value;
		} }), r.update(l)), l.material.uniforms.t2D.value = i, l.material.uniforms.backgroundIntensity.value = n.backgroundIntensity, l.material.toneMapped = ColorManagement.getTransfer(i.colorSpace) !== SRGBTransfer, i.matrixAutoUpdate === !0 && i.updateMatrix(), l.material.uniforms.uvTransform.value.copy(i.matrix), (d !== i || f !== i.version || p !== e.toneMapping) && (l.material.needsUpdate = !0, d = i, f = i.version, p = e.toneMapping), l.layers.enableAll(), t.unshift(l, l.geometry, l.material, 0, 0, null));
	}
	function v(t, r) {
		t.getRGB(_rgb, getUnlitUniformColorSpace(e)), n.buffers.color.setClear(_rgb.r, _rgb.g, _rgb.b, r, a);
	}
	function y() {
		u !== void 0 && (u.geometry.dispose(), u.material.dispose(), u = void 0), l !== void 0 && (l.geometry.dispose(), l.material.dispose(), l = void 0);
	}
	return {
		getClearColor: function() {
			return s;
		},
		setClearColor: function(e, t = 1) {
			s.set(e), c = t, v(s, c);
		},
		getClearAlpha: function() {
			return c;
		},
		setClearAlpha: function(e) {
			c = e, v(s, c);
		},
		render: g,
		addToRenderList: _,
		dispose: y
	};
}
function WebGLBindingStates(e, t) {
	let n = e.getParameter(e.MAX_VERTEX_ATTRIBS), r = {}, i = p(null), a = i, s = !1;
	function c(n, r, i, c, l) {
		let d = !1, p = f(n, c, i, r);
		a !== p && (a = p, u(a.object)), d = h(n, c, i, l), d && g(n, c, i, l), l !== null && t.update(l, e.ELEMENT_ARRAY_BUFFER), (d || s) && (s = !1, S(n, r, i, c), l !== null && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.get(l).buffer));
	}
	function l() {
		return e.createVertexArray();
	}
	function u(t) {
		return e.bindVertexArray(t);
	}
	function d(t) {
		return e.deleteVertexArray(t);
	}
	function f(e, t, n, i) {
		let a = i.wireframe === !0, s = r[t.id];
		s === void 0 && (s = {}, r[t.id] = s);
		let c = e.isInstancedMesh === !0 ? e.id : 0, u = s[c];
		u === void 0 && (u = {}, s[c] = u);
		let d = u[n.id];
		d === void 0 && (d = {}, u[n.id] = d);
		let f = d[a];
		return f === void 0 && (f = p(l()), d[a] = f), f;
	}
	function p(e) {
		let t = [], r = [], i = [];
		for (let e = 0; e < n; e++) t[e] = 0, r[e] = 0, i[e] = 0;
		return {
			geometry: null,
			program: null,
			wireframe: !1,
			newAttributes: t,
			enabledAttributes: r,
			attributeDivisors: i,
			object: e,
			attributes: {},
			index: null
		};
	}
	function h(e, t, n, r) {
		let i = a.attributes, s = t.attributes, c = 0, l = n.getAttributes();
		for (let t in l) if (l[t].location >= 0) {
			let n = i[t], r = s[t];
			if (r === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (r = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (r = e.instanceColor)), n === void 0 || n.attribute !== r || r && n.data !== r.data) return !0;
			c++;
		}
		return a.attributesNum !== c || a.index !== r;
	}
	function g(e, t, n, r) {
		let i = {}, s = t.attributes, c = 0, l = n.getAttributes();
		for (let t in l) if (l[t].location >= 0) {
			let n = s[t];
			n === void 0 && (t === "instanceMatrix" && e.instanceMatrix && (n = e.instanceMatrix), t === "instanceColor" && e.instanceColor && (n = e.instanceColor));
			let r = {};
			r.attribute = n, n && n.data && (r.data = n.data), i[t] = r, c++;
		}
		a.attributes = i, a.attributesNum = c, a.index = r;
	}
	function _() {
		let e = a.newAttributes;
		for (let t = 0, n = e.length; t < n; t++) e[t] = 0;
	}
	function v(e) {
		y(e, 0);
	}
	function y(t, n) {
		let r = a.newAttributes, i = a.enabledAttributes, s = a.attributeDivisors;
		r[t] = 1, i[t] === 0 && (e.enableVertexAttribArray(t), i[t] = 1), s[t] !== n && (e.vertexAttribDivisor(t, n), s[t] = n);
	}
	function b() {
		let t = a.newAttributes, n = a.enabledAttributes;
		for (let r = 0, i = n.length; r < i; r++) n[r] !== t[r] && (e.disableVertexAttribArray(r), n[r] = 0);
	}
	function x(t, n, r, i, a, s, c) {
		c === !0 ? e.vertexAttribIPointer(t, n, r, a, s) : e.vertexAttribPointer(t, n, r, i, a, s);
	}
	function S(n, r, i, a) {
		_();
		let s = a.attributes, c = i.getAttributes(), l = r.defaultAttributeValues;
		for (let r in c) {
			let i = c[r];
			if (i.location >= 0) {
				let c = s[r];
				if (c === void 0 && (r === "instanceMatrix" && n.instanceMatrix && (c = n.instanceMatrix), r === "instanceColor" && n.instanceColor && (c = n.instanceColor)), c !== void 0) {
					let r = c.normalized, s = c.itemSize, l = t.get(c);
					if (l === void 0) continue;
					let u = l.buffer, d = l.type, f = l.bytesPerElement, p = d === e.INT || d === e.UNSIGNED_INT || c.gpuType === 1013;
					if (c.isInterleavedBufferAttribute) {
						let t = c.data, l = t.stride, h = c.offset;
						if (t.isInstancedInterleavedBuffer) {
							for (let e = 0; e < i.locationSize; e++) y(i.location + e, t.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = t.meshPerAttribute * t.count);
						} else for (let e = 0; e < i.locationSize; e++) v(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, u);
						for (let e = 0; e < i.locationSize; e++) x(i.location + e, s / i.locationSize, d, r, l * f, (h + s / i.locationSize * e) * f, p);
					} else {
						if (c.isInstancedBufferAttribute) {
							for (let e = 0; e < i.locationSize; e++) y(i.location + e, c.meshPerAttribute);
							n.isInstancedMesh !== !0 && a._maxInstanceCount === void 0 && (a._maxInstanceCount = c.meshPerAttribute * c.count);
						} else for (let e = 0; e < i.locationSize; e++) v(i.location + e);
						e.bindBuffer(e.ARRAY_BUFFER, u);
						for (let e = 0; e < i.locationSize; e++) x(i.location + e, s / i.locationSize, d, r, s * f, s / i.locationSize * e * f, p);
					}
				} else if (l !== void 0) {
					let t = l[r];
					if (t !== void 0) switch (t.length) {
						case 2:
							e.vertexAttrib2fv(i.location, t);
							break;
						case 3:
							e.vertexAttrib3fv(i.location, t);
							break;
						case 4:
							e.vertexAttrib4fv(i.location, t);
							break;
						default: e.vertexAttrib1fv(i.location, t);
					}
				}
			}
		}
		b();
	}
	function C() {
		D();
		for (let e in r) {
			let t = r[e];
			for (let e in t) {
				let n = t[e];
				for (let e in n) {
					let t = n[e];
					for (let e in t) d(t[e].object), delete t[e];
					delete n[e];
				}
			}
			delete r[e];
		}
	}
	function w(e) {
		if (r[e.id] === void 0) return;
		let t = r[e.id];
		for (let e in t) {
			let n = t[e];
			for (let e in n) {
				let t = n[e];
				for (let e in t) d(t[e].object), delete t[e];
				delete n[e];
			}
		}
		delete r[e.id];
	}
	function T(e) {
		for (let t in r) {
			let n = r[t];
			for (let t in n) {
				let r = n[t];
				if (r[e.id] === void 0) continue;
				let i = r[e.id];
				for (let e in i) d(i[e].object), delete i[e];
				delete r[e.id];
			}
		}
	}
	function E(e) {
		for (let t in r) {
			let n = r[t], i = e.isInstancedMesh === !0 ? e.id : 0, a = n[i];
			if (a !== void 0) {
				for (let e in a) {
					let t = a[e];
					for (let e in t) d(t[e].object), delete t[e];
					delete a[e];
				}
				delete n[i], Object.keys(n).length === 0 && delete r[t];
			}
		}
	}
	function D() {
		O(), s = !0, a !== i && (a = i, u(a.object));
	}
	function O() {
		i.geometry = null, i.program = null, i.wireframe = !1;
	}
	return {
		setup: c,
		reset: D,
		resetDefaultState: O,
		dispose: C,
		releaseStatesOfGeometry: w,
		releaseStatesOfObject: E,
		releaseStatesOfProgram: T,
		initAttributes: _,
		enableAttribute: v,
		disableUnusedAttributes: b
	};
}
function WebGLBufferRenderer(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	function a(t, i) {
		e.drawArrays(r, t, i), n.update(i, r, 1);
	}
	function s(t, i, a) {
		a !== 0 && (e.drawArraysInstanced(r, t, i, a), n.update(i, r, a));
	}
	function c(e, i, a) {
		if (a === 0) return;
		t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r, e, 0, i, 0, a);
		let s = 0;
		for (let e = 0; e < a; e++) s += i[e];
		n.update(s, r, 1);
	}
	this.setMode = i, this.render = a, this.renderInstances = s, this.renderMultiDraw = c;
}
function WebGLCapabilities(e, t, n, r) {
	let i;
	function a() {
		if (i !== void 0) return i;
		if (t.has("EXT_texture_filter_anisotropic") === !0) {
			let n = t.get("EXT_texture_filter_anisotropic");
			i = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
		} else i = 0;
		return i;
	}
	function s(t) {
		return !(t !== 1023 && r.convert(t) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT));
	}
	function c(n) {
		let i = n === 1016 && (t.has("EXT_color_buffer_half_float") || t.has("EXT_color_buffer_float"));
		return !(n !== 1009 && r.convert(n) !== e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE) && n !== 1015 && !i);
	}
	function l(t) {
		if (t === "highp") {
			if (e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision > 0) return "highp";
			t = "mediump";
		}
		return t === "mediump" && e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision > 0 && e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
	}
	let u = n.precision === void 0 ? "highp" : n.precision, d = l(u);
	d !== u && (warn("WebGLRenderer:", u, "not supported, using", d, "instead."), u = d);
	let f = n.logarithmicDepthBuffer === !0, p = n.reversedDepthBuffer === !0 && t.has("EXT_clip_control");
	n.reversedDepthBuffer === !0 && p === !1 && warn("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");
	let h = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), g = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = e.getParameter(e.MAX_TEXTURE_SIZE), v = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE), y = e.getParameter(e.MAX_VERTEX_ATTRIBS), b = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS), x = e.getParameter(e.MAX_VARYING_VECTORS), S = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS), C = e.getParameter(e.MAX_SAMPLES), w = e.getParameter(e.SAMPLES);
	return {
		isWebGL2: !0,
		getMaxAnisotropy: a,
		getMaxPrecision: l,
		textureFormatReadable: s,
		textureTypeReadable: c,
		precision: u,
		logarithmicDepthBuffer: f,
		reversedDepthBuffer: p,
		maxTextures: h,
		maxVertexTextures: g,
		maxTextureSize: _,
		maxCubemapSize: v,
		maxAttributes: y,
		maxVertexUniforms: b,
		maxVaryings: x,
		maxFragmentUniforms: S,
		maxSamples: C,
		samples: w
	};
}
function WebGLClipping(e) {
	let t = this, n = null, r = 0, i = !1, a = !1, s = new Plane(), c = new Matrix3(), l = {
		value: null,
		needsUpdate: !1
	};
	this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(e, t) {
		let n = e.length !== 0 || t || r !== 0 || i;
		return i = t, r = e.length, n;
	}, this.beginShadows = function() {
		a = !0, d(null);
	}, this.endShadows = function() {
		a = !1;
	}, this.setGlobalState = function(e, t) {
		n = d(e, t, 0);
	}, this.setState = function(t, s, c) {
		let f = t.clippingPlanes, p = t.clipIntersection, h = t.clipShadows, g = e.get(t);
		if (!i || f === null || f.length === 0 || a && !h) a ? d(null) : u();
		else {
			let e = a ? 0 : r, t = e * 4, i = g.clippingState || null;
			l.value = i, i = d(f, s, t, c);
			for (let e = 0; e !== t; ++e) i[e] = n[e];
			g.clippingState = i, this.numIntersection = p ? this.numPlanes : 0, this.numPlanes += e;
		}
	};
	function u() {
		l.value !== n && (l.value = n, l.needsUpdate = r > 0), t.numPlanes = r, t.numIntersection = 0;
	}
	function d(e, n, r, i) {
		let a = e === null ? 0 : e.length, u = null;
		if (a !== 0) {
			if (u = l.value, i !== !0 || u === null) {
				let t = r + a * 4, i = n.matrixWorldInverse;
				c.getNormalMatrix(i), (u === null || u.length < t) && (u = new Float32Array(t));
				for (let t = 0, n = r; t !== a; ++t, n += 4) s.copy(e[t]).applyMatrix4(i, c), s.normal.toArray(u, n), u[n + 3] = s.constant;
			}
			l.value = u, l.needsUpdate = !0;
		}
		return t.numPlanes = a, t.numIntersection = 0, u;
	}
}
var LOD_MIN = 4, EXTRA_LOD_SIGMA = [
	.125,
	.215,
	.35,
	.446,
	.526,
	.582
], MAX_SAMPLES = 20, GGX_SAMPLES = 256, _flatCamera = /*@__PURE__*/ new OrthographicCamera(), _clearColor = /*@__PURE__*/ new Color$1(), _oldTarget = null, _oldActiveCubeFace = 0, _oldActiveMipmapLevel = 0, _oldXrEnabled = !1, _origin = /*@__PURE__*/ new Vector3(), PMREMGenerator = class {
	constructor(e) {
		this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._sizeLods = [], this._sigmas = [], this._lodMeshes = [], this._backgroundBox = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._blurMaterial = null, this._ggxMaterial = null;
	}
	fromScene(e, t = 0, n = .1, r = 100, i = {}) {
		let { size: a = 256, position: s = _origin } = i;
		_oldTarget = this._renderer.getRenderTarget(), _oldActiveCubeFace = this._renderer.getActiveCubeFace(), _oldActiveMipmapLevel = this._renderer.getActiveMipmapLevel(), _oldXrEnabled = this._renderer.xr.enabled, this._renderer.xr.enabled = !1, this._setSize(a);
		let c = this._allocateTargets();
		return c.depthBuffer = !0, this._sceneToCubeUV(e, n, r, c, s), t > 0 && this._blur(c, 0, 0, t), this._applyPMREM(c), this._cleanup(c), c;
	}
	fromEquirectangular(e, t = null) {
		return this._fromTexture(e, t);
	}
	fromCubemap(e, t = null) {
		return this._fromTexture(e, t);
	}
	compileCubemapShader() {
		this._cubemapMaterial === null && (this._cubemapMaterial = _getCubemapMaterial(), this._compileMaterial(this._cubemapMaterial));
	}
	compileEquirectangularShader() {
		this._equirectMaterial === null && (this._equirectMaterial = _getEquirectMaterial(), this._compileMaterial(this._equirectMaterial));
	}
	dispose() {
		this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose(), this._backgroundBox !== null && (this._backgroundBox.geometry.dispose(), this._backgroundBox.material.dispose());
	}
	_setSize(e) {
		this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = 2 ** this._lodMax;
	}
	_dispose() {
		this._blurMaterial !== null && this._blurMaterial.dispose(), this._ggxMaterial !== null && this._ggxMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
		for (let e = 0; e < this._lodMeshes.length; e++) this._lodMeshes[e].geometry.dispose();
	}
	_cleanup(e) {
		this._renderer.setRenderTarget(_oldTarget, _oldActiveCubeFace, _oldActiveMipmapLevel), this._renderer.xr.enabled = _oldXrEnabled, e.scissorTest = !1, _setViewport(e, 0, 0, e.width, e.height);
	}
	_fromTexture(e, t) {
		e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), _oldTarget = this._renderer.getRenderTarget(), _oldActiveCubeFace = this._renderer.getActiveCubeFace(), _oldActiveMipmapLevel = this._renderer.getActiveMipmapLevel(), _oldXrEnabled = this._renderer.xr.enabled, this._renderer.xr.enabled = !1;
		let n = t || this._allocateTargets();
		return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
	}
	_allocateTargets() {
		let e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
			magFilter: LinearFilter,
			minFilter: LinearFilter,
			generateMipmaps: !1,
			type: HalfFloatType,
			format: RGBAFormat,
			colorSpace: LinearSRGBColorSpace,
			depthBuffer: !1
		}, r = _createRenderTarget(e, t, n);
		if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
			this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = _createRenderTarget(e, t, n);
			let { _lodMax: r } = this;
			({lodMeshes: this._lodMeshes, sizeLods: this._sizeLods, sigmas: this._sigmas} = _createPlanes(r)), this._blurMaterial = _getBlurShader(r, e, t), this._ggxMaterial = _getGGXShader(r, e, t);
		}
		return r;
	}
	_compileMaterial(e) {
		let t = new Mesh(new BufferGeometry(), e);
		this._renderer.compile(t, _flatCamera);
	}
	_sceneToCubeUV(e, t, n, r, i) {
		let a = new PerspectiveCamera(90, 1, t, n), s = [
			1,
			-1,
			1,
			1,
			1,
			1
		], c = [
			1,
			1,
			1,
			-1,
			-1,
			-1
		], l = this._renderer, u = l.autoClear, d = l.toneMapping;
		l.getClearColor(_clearColor), l.toneMapping = 0, l.autoClear = !1, l.state.buffers.depth.getReversed() && (l.setRenderTarget(r), l.clearDepth(), l.setRenderTarget(null)), this._backgroundBox === null && (this._backgroundBox = new Mesh(new BoxGeometry(), new MeshBasicMaterial({
			name: "PMREM.Background",
			side: 1,
			depthWrite: !1,
			depthTest: !1
		})));
		let f = this._backgroundBox, p = f.material, h = !1, g = e.background;
		g ? g.isColor && (p.color.copy(g), e.background = null, h = !0) : (p.color.copy(_clearColor), h = !0);
		for (let t = 0; t < 6; t++) {
			let n = t % 3;
			n === 0 ? (a.up.set(0, s[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x + c[t], i.y, i.z)) : n === 1 ? (a.up.set(0, 0, s[t]), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y + c[t], i.z)) : (a.up.set(0, s[t], 0), a.position.set(i.x, i.y, i.z), a.lookAt(i.x, i.y, i.z + c[t]));
			let u = this._cubeSize;
			_setViewport(r, n * u, t > 2 ? u : 0, u, u), l.setRenderTarget(r), h && l.render(f, a), l.render(e, a);
		}
		l.toneMapping = d, l.autoClear = u, e.background = g;
	}
	_textureToCubeUV(e, t) {
		let n = this._renderer, r = e.mapping === 301 || e.mapping === 302;
		r ? (this._cubemapMaterial === null && (this._cubemapMaterial = _getCubemapMaterial()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = _getEquirectMaterial());
		let i = r ? this._cubemapMaterial : this._equirectMaterial, a = this._lodMeshes[0];
		a.material = i;
		let s = i.uniforms;
		s.envMap.value = e;
		let c = this._cubeSize;
		_setViewport(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(a, _flatCamera);
	}
	_applyPMREM(e) {
		let t = this._renderer, n = t.autoClear;
		t.autoClear = !1;
		let r = this._lodMeshes.length;
		for (let t = 1; t < r; t++) this._applyGGXFilter(e, t - 1, t);
		t.autoClear = n;
	}
	_applyGGXFilter(e, t, n) {
		let r = this._renderer, i = this._pingPongRenderTarget, a = this._ggxMaterial, s = this._lodMeshes[n];
		s.material = a;
		let c = a.uniforms, l = n / (this._lodMeshes.length - 1), u = t / (this._lodMeshes.length - 1), d = Math.sqrt(l * l - u * u) * (0 + l * 1.25), { _lodMax: f } = this, p = this._sizeLods[n], h = 3 * p * (n > f - LOD_MIN ? n - f + LOD_MIN : 0), g = 4 * (this._cubeSize - p);
		c.envMap.value = e.texture, c.roughness.value = d, c.mipInt.value = f - t, _setViewport(i, h, g, 3 * p, 2 * p), r.setRenderTarget(i), r.render(s, _flatCamera), c.envMap.value = i.texture, c.roughness.value = 0, c.mipInt.value = f - n, _setViewport(e, h, g, 3 * p, 2 * p), r.setRenderTarget(e), r.render(s, _flatCamera);
	}
	_blur(e, t, n, r, i) {
		let a = this._pingPongRenderTarget;
		this._halfBlur(e, a, t, n, r, "latitudinal", i), this._halfBlur(a, e, n, n, r, "longitudinal", i);
	}
	_halfBlur(e, t, n, r, i, a, s) {
		let c = this._renderer, l = this._blurMaterial;
		a !== "latitudinal" && a !== "longitudinal" && error("blur direction must be either latitudinal or longitudinal!");
		let u = 3, d = this._lodMeshes[r];
		d.material = l;
		let f = l.uniforms, p = this._sizeLods[n] - 1, h = isFinite(i) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * MAX_SAMPLES - 1), g = i / h, _ = isFinite(i) ? 1 + Math.floor(3 * g) : MAX_SAMPLES;
		_ > MAX_SAMPLES && warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${MAX_SAMPLES}`);
		let v = [], y = 0;
		for (let e = 0; e < MAX_SAMPLES; ++e) {
			let t = e / g, n = Math.exp(-t * t / 2);
			v.push(n), e === 0 ? y += n : e < _ && (y += 2 * n);
		}
		for (let e = 0; e < v.length; e++) v[e] = v[e] / y;
		f.envMap.value = e.texture, f.samples.value = _, f.weights.value = v, f.latitudinal.value = a === "latitudinal", s && (f.poleAxis.value = s);
		let { _lodMax: b } = this;
		f.dTheta.value = h, f.mipInt.value = b - n;
		let x = this._sizeLods[r];
		_setViewport(t, 3 * x * (r > b - LOD_MIN ? r - b + LOD_MIN : 0), 4 * (this._cubeSize - x), 3 * x, 2 * x), c.setRenderTarget(t), c.render(d, _flatCamera);
	}
};
function _createPlanes(e) {
	let t = [], n = [], r = [], i = e, a = e - LOD_MIN + 1 + EXTRA_LOD_SIGMA.length;
	for (let s = 0; s < a; s++) {
		let a = 2 ** i;
		t.push(a);
		let c = 1 / a;
		s > e - LOD_MIN ? c = EXTRA_LOD_SIGMA[s - e + LOD_MIN - 1] : s === 0 && (c = 0), n.push(c);
		let l = 1 / (a - 2), u = -l, d = 1 + l, f = [
			u,
			u,
			d,
			u,
			d,
			d,
			u,
			u,
			d,
			d,
			u,
			d
		], p = 6, h = 6, g = 3, _ = 2, v = 1, y = /* @__PURE__ */ new Float32Array(108), b = /* @__PURE__ */ new Float32Array(72), x = /* @__PURE__ */ new Float32Array(36);
		for (let e = 0; e < 6; e++) {
			let t = e % 3 * 2 / 3 - 1, n = e > 2 ? 0 : -1, r = [
				t,
				n,
				0,
				t + 2 / 3,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n,
				0,
				t + 2 / 3,
				n + 1,
				0,
				t,
				n + 1,
				0
			];
			y.set(r, 18 * e), b.set(f, 12 * e);
			let i = [
				e,
				e,
				e,
				e,
				e,
				e
			];
			x.set(i, 6 * e);
		}
		let S = new BufferGeometry();
		S.setAttribute("position", new BufferAttribute(y, 3)), S.setAttribute("uv", new BufferAttribute(b, 2)), S.setAttribute("faceIndex", new BufferAttribute(x, 1)), r.push(new Mesh(S, null)), i > LOD_MIN && i--;
	}
	return {
		lodMeshes: r,
		sizeLods: t,
		sigmas: n
	};
}
function _createRenderTarget(e, t, n) {
	let r = new WebGLRenderTarget(e, t, n);
	return r.texture.mapping = 306, r.texture.name = "PMREM.cubeUv", r.scissorTest = !0, r;
}
function _setViewport(e, t, n, r, i) {
	e.viewport.set(t, n, r, i), e.scissor.set(t, n, r, i);
}
function _getGGXShader(e, t, n) {
	return new ShaderMaterial({
		name: "PMREMGGXConvolution",
		defines: {
			GGX_SAMPLES,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			roughness: { value: 0 },
			mipInt: { value: 0 }
		},
		vertexShader: _getCommonVertexShader(),
		fragmentShader: "\n\n			precision highp float;\n			precision highp int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform float roughness;\n			uniform float mipInt;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			#define PI 3.14159265359\n\n			// Van der Corput radical inverse\n			float radicalInverse_VdC(uint bits) {\n				bits = (bits << 16u) | (bits >> 16u);\n				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);\n				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);\n				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);\n				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);\n				return float(bits) * 2.3283064365386963e-10; // / 0x100000000\n			}\n\n			// Hammersley sequence\n			vec2 hammersley(uint i, uint N) {\n				return vec2(float(i) / float(N), radicalInverse_VdC(i));\n			}\n\n			// GGX VNDF importance sampling (Eric Heitz 2018)\n			// \"Sampling the GGX Distribution of Visible Normals\"\n			// https://jcgt.org/published/0007/04/01/\n			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {\n				float alpha = roughness * roughness;\n\n				// Section 4.1: Orthonormal basis\n				vec3 T1 = vec3(1.0, 0.0, 0.0);\n				vec3 T2 = cross(V, T1);\n\n				// Section 4.2: Parameterization of projected area\n				float r = sqrt(Xi.x);\n				float phi = 2.0 * PI * Xi.y;\n				float t1 = r * cos(phi);\n				float t2 = r * sin(phi);\n				float s = 0.5 * (1.0 + V.z);\n				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;\n\n				// Section 4.3: Reprojection onto hemisphere\n				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;\n\n				// Section 3.4: Transform back to ellipsoid configuration\n				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));\n			}\n\n			void main() {\n				vec3 N = normalize(vOutputDirection);\n				vec3 V = N; // Assume view direction equals normal for pre-filtering\n\n				vec3 prefilteredColor = vec3(0.0);\n				float totalWeight = 0.0;\n\n				// For very low roughness, just sample the environment directly\n				if (roughness < 0.001) {\n					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);\n					return;\n				}\n\n				// Tangent space basis for VNDF sampling\n				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);\n				vec3 tangent = normalize(cross(up, N));\n				vec3 bitangent = cross(N, tangent);\n\n				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {\n					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));\n\n					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)\n					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);\n\n					// Transform H back to world space\n					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);\n					vec3 L = normalize(2.0 * dot(V, H) * H - V);\n\n					float NdotL = max(dot(N, L), 0.0);\n\n					if(NdotL > 0.0) {\n						// Sample environment at fixed mip level\n						// VNDF importance sampling handles the distribution filtering\n						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);\n\n						// Weight by NdotL for the split-sum approximation\n						// VNDF PDF naturally accounts for the visible microfacet distribution\n						prefilteredColor += sampleColor * NdotL;\n						totalWeight += NdotL;\n					}\n				}\n\n				if (totalWeight > 0.0) {\n					prefilteredColor = prefilteredColor / totalWeight;\n				}\n\n				gl_FragColor = vec4(prefilteredColor, 1.0);\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function _getBlurShader(e, t, n) {
	let r = new Float32Array(MAX_SAMPLES), i = new Vector3(0, 1, 0);
	return new ShaderMaterial({
		name: "SphericalGaussianBlur",
		defines: {
			n: MAX_SAMPLES,
			CUBEUV_TEXEL_WIDTH: 1 / t,
			CUBEUV_TEXEL_HEIGHT: 1 / n,
			CUBEUV_MAX_MIP: `${e}.0`
		},
		uniforms: {
			envMap: { value: null },
			samples: { value: 1 },
			weights: { value: r },
			latitudinal: { value: !1 },
			dTheta: { value: 0 },
			mipInt: { value: 0 },
			poleAxis: { value: i }
		},
		vertexShader: _getCommonVertexShader(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function _getEquirectMaterial() {
	return new ShaderMaterial({
		name: "EquirectangularToCubeUV",
		uniforms: { envMap: { value: null } },
		vertexShader: _getCommonVertexShader(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function _getCubemapMaterial() {
	return new ShaderMaterial({
		name: "CubemapToCubeUV",
		uniforms: {
			envMap: { value: null },
			flipEnvMap: { value: -1 }
		},
		vertexShader: _getCommonVertexShader(),
		fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		",
		blending: 0,
		depthTest: !1,
		depthWrite: !1
	});
}
function _getCommonVertexShader() {
	return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
}
var WebGLCubeRenderTarget = class extends WebGLRenderTarget {
	constructor(e = 1, t = {}) {
		super(e, e, t), this.isWebGLCubeRenderTarget = !0;
		let n = {
			width: e,
			height: e,
			depth: 1
		}, r = [
			n,
			n,
			n,
			n,
			n,
			n
		];
		this.texture = new CubeTexture(r), this._setTextureOptions(t), this.texture.isRenderTargetTexture = !0;
	}
	fromEquirectangularTexture(e, t) {
		this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
		let n = {
			uniforms: { tEquirect: { value: null } },
			vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			",
			fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			"
		}, r = new BoxGeometry(5, 5, 5), i = new ShaderMaterial({
			name: "CubemapFromEquirect",
			uniforms: cloneUniforms(n.uniforms),
			vertexShader: n.vertexShader,
			fragmentShader: n.fragmentShader,
			side: 1,
			blending: 0
		});
		i.uniforms.tEquirect.value = t;
		let a = new Mesh(r, i), s = t.minFilter;
		return t.minFilter === 1008 && (t.minFilter = LinearFilter), new CubeCamera(1, 10, this).update(e, a), t.minFilter = s, a.geometry.dispose(), a.material.dispose(), this;
	}
	clear(e, t = !0, n = !0, r = !0) {
		let i = e.getRenderTarget();
		for (let i = 0; i < 6; i++) e.setRenderTarget(this, i), e.clear(t, n, r);
		e.setRenderTarget(i);
	}
};
function WebGLEnvironments(e) {
	let t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r = null;
	function i(e, t = !1) {
		return e == null ? null : t ? s(e) : a(e);
	}
	function a(n) {
		if (n && n.isTexture) {
			let r = n.mapping;
			if (r === 303 || r === 304) if (t.has(n)) {
				let e = t.get(n).texture;
				return c(e, n.mapping);
			} else {
				let r = n.image;
				if (r && r.height > 0) {
					let i = new WebGLCubeRenderTarget(r.height);
					return i.fromEquirectangularTexture(e, n), t.set(n, i), n.addEventListener("dispose", u), c(i.texture, n.mapping);
				} else return null;
			}
		}
		return n;
	}
	function s(t) {
		if (t && t.isTexture) {
			let i = t.mapping, a = i === 303 || i === 304, s = i === 301 || i === 302;
			if (a || s) {
				let i = n.get(t), c = i === void 0 ? 0 : i.texture.pmremVersion;
				if (t.isRenderTargetTexture && t.pmremVersion !== c) return r === null && (r = new PMREMGenerator(e)), i = a ? r.fromEquirectangular(t, i) : r.fromCubemap(t, i), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), i.texture;
				if (i !== void 0) return i.texture;
				{
					let c = t.image;
					return a && c && c.height > 0 || s && c && l(c) ? (r === null && (r = new PMREMGenerator(e)), i = a ? r.fromEquirectangular(t) : r.fromCubemap(t), i.texture.pmremVersion = t.pmremVersion, n.set(t, i), t.addEventListener("dispose", d), i.texture) : null;
				}
			}
		}
		return t;
	}
	function c(e, t) {
		return t === 303 ? e.mapping = 301 : t === 304 && (e.mapping = 302), e;
	}
	function l(e) {
		let t = 0, n = 6;
		for (let n = 0; n < 6; n++) e[n] !== void 0 && t++;
		return t === 6;
	}
	function u(e) {
		let n = e.target;
		n.removeEventListener("dispose", u);
		let r = t.get(n);
		r !== void 0 && (t.delete(n), r.dispose());
	}
	function d(e) {
		let t = e.target;
		t.removeEventListener("dispose", d);
		let r = n.get(t);
		r !== void 0 && (n.delete(t), r.dispose());
	}
	function f() {
		t = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap(), r !== null && (r.dispose(), r = null);
	}
	return {
		get: i,
		dispose: f
	};
}
function WebGLExtensions(e) {
	let t = {};
	function n(n) {
		if (t[n] !== void 0) return t[n];
		let r = e.getExtension(n);
		return t[n] = r, r;
	}
	return {
		has: function(e) {
			return n(e) !== null;
		},
		init: function() {
			n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
		},
		get: function(e) {
			let t = n(e);
			return t === null && warnOnce("WebGLRenderer: " + e + " extension not supported."), t;
		}
	};
}
function WebGLGeometries(e, t, n, r) {
	let i = {}, a = /* @__PURE__ */ new WeakMap();
	function s(e) {
		let c = e.target;
		c.index !== null && t.remove(c.index);
		for (let e in c.attributes) t.remove(c.attributes[e]);
		c.removeEventListener("dispose", s), delete i[c.id];
		let l = a.get(c);
		l && (t.remove(l), a.delete(c)), r.releaseStatesOfGeometry(c), c.isInstancedBufferGeometry === !0 && delete c._maxInstanceCount, n.memory.geometries--;
	}
	function c(e, t) {
		return i[t.id] === !0 ? t : (t.addEventListener("dispose", s), i[t.id] = !0, n.memory.geometries++, t);
	}
	function l(n) {
		let r = n.attributes;
		for (let n in r) t.update(r[n], e.ARRAY_BUFFER);
	}
	function u(e) {
		let n = [], r = e.index, i = e.attributes.position, s = 0;
		if (i === void 0) return;
		if (r !== null) {
			let e = r.array;
			s = r.version;
			for (let t = 0, r = e.length; t < r; t += 3) {
				let r = e[t + 0], i = e[t + 1], a = e[t + 2];
				n.push(r, i, i, a, a, r);
			}
		} else {
			let e = i.array;
			s = i.version;
			for (let t = 0, r = e.length / 3 - 1; t < r; t += 3) {
				let e = t + 0, r = t + 1, i = t + 2;
				n.push(e, r, r, i, i, e);
			}
		}
		let c = new (i.count >= 65535 ? Uint32BufferAttribute : Uint16BufferAttribute)(n, 1);
		c.version = s;
		let l = a.get(e);
		l && t.remove(l), a.set(e, c);
	}
	function d(e) {
		let t = a.get(e);
		if (t) {
			let n = e.index;
			n !== null && t.version < n.version && u(e);
		} else u(e);
		return a.get(e);
	}
	return {
		get: c,
		update: l,
		getWireframeAttribute: d
	};
}
function WebGLIndexedBufferRenderer(e, t, n) {
	let r;
	function i(e) {
		r = e;
	}
	let a, s;
	function c(e) {
		a = e.type, s = e.bytesPerElement;
	}
	function l(t, i) {
		e.drawElements(r, i, a, t * s), n.update(i, r, 1);
	}
	function u(t, i, c) {
		c !== 0 && (e.drawElementsInstanced(r, i, a, t * s, c), n.update(i, r, c));
	}
	function d(e, i, s) {
		if (s === 0) return;
		t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r, i, 0, a, e, 0, s);
		let c = 0;
		for (let e = 0; e < s; e++) c += i[e];
		n.update(c, r, 1);
	}
	this.setMode = i, this.setIndex = c, this.render = l, this.renderInstances = u, this.renderMultiDraw = d;
}
function WebGLInfo(e) {
	let t = {
		geometries: 0,
		textures: 0
	}, n = {
		frame: 0,
		calls: 0,
		triangles: 0,
		points: 0,
		lines: 0
	};
	function r(t, r, i) {
		switch (n.calls++, r) {
			case e.TRIANGLES:
				n.triangles += t / 3 * i;
				break;
			case e.LINES:
				n.lines += t / 2 * i;
				break;
			case e.LINE_STRIP:
				n.lines += i * (t - 1);
				break;
			case e.LINE_LOOP:
				n.lines += i * t;
				break;
			case e.POINTS:
				n.points += i * t;
				break;
			default:
				error("WebGLInfo: Unknown draw mode:", r);
				break;
		}
	}
	function i() {
		n.calls = 0, n.triangles = 0, n.points = 0, n.lines = 0;
	}
	return {
		memory: t,
		render: n,
		programs: null,
		autoReset: !0,
		reset: i,
		update: r
	};
}
function WebGLMorphtargets(e, t, n) {
	let r = /* @__PURE__ */ new WeakMap(), i = new Vector4();
	function a(a, s, c) {
		let l = a.morphTargetInfluences, u = s.morphAttributes.position || s.morphAttributes.normal || s.morphAttributes.color, d = u === void 0 ? 0 : u.length, f = r.get(s);
		if (f === void 0 || f.count !== d) {
			f !== void 0 && f.texture.dispose();
			let e = s.morphAttributes.position !== void 0, n = s.morphAttributes.normal !== void 0, a = s.morphAttributes.color !== void 0, c = s.morphAttributes.position || [], l = s.morphAttributes.normal || [], u = s.morphAttributes.color || [], p = 0;
			e === !0 && (p = 1), n === !0 && (p = 2), a === !0 && (p = 3);
			let h = s.attributes.position.count * p, g = 1;
			h > t.maxTextureSize && (g = Math.ceil(h / t.maxTextureSize), h = t.maxTextureSize);
			let _ = new Float32Array(h * g * 4 * d), v = new DataArrayTexture(_, h, g, d);
			v.type = FloatType, v.needsUpdate = !0;
			let y = p * 4;
			for (let t = 0; t < d; t++) {
				let r = c[t], s = l[t], d = u[t], f = h * g * 4 * t;
				for (let t = 0; t < r.count; t++) {
					let c = t * y;
					e === !0 && (i.fromBufferAttribute(r, t), _[f + c + 0] = i.x, _[f + c + 1] = i.y, _[f + c + 2] = i.z, _[f + c + 3] = 0), n === !0 && (i.fromBufferAttribute(s, t), _[f + c + 4] = i.x, _[f + c + 5] = i.y, _[f + c + 6] = i.z, _[f + c + 7] = 0), a === !0 && (i.fromBufferAttribute(d, t), _[f + c + 8] = i.x, _[f + c + 9] = i.y, _[f + c + 10] = i.z, _[f + c + 11] = d.itemSize === 4 ? i.w : 1);
				}
			}
			f = {
				count: d,
				texture: v,
				size: new Vector2(h, g)
			}, r.set(s, f);
			function b() {
				v.dispose(), r.delete(s), s.removeEventListener("dispose", b);
			}
			s.addEventListener("dispose", b);
		}
		if (a.isInstancedMesh === !0 && a.morphTexture !== null) c.getUniforms().setValue(e, "morphTexture", a.morphTexture, n);
		else {
			let t = 0;
			for (let e = 0; e < l.length; e++) t += l[e];
			let n = s.morphTargetsRelative ? 1 : 1 - t;
			c.getUniforms().setValue(e, "morphTargetBaseInfluence", n), c.getUniforms().setValue(e, "morphTargetInfluences", l);
		}
		c.getUniforms().setValue(e, "morphTargetsTexture", f.texture, n), c.getUniforms().setValue(e, "morphTargetsTextureSize", f.size);
	}
	return { update: a };
}
function WebGLObjects(e, t, n, r, i) {
	let a = /* @__PURE__ */ new WeakMap();
	function s(r) {
		let s = i.render.frame, c = r.geometry, u = t.get(r, c);
		if (a.get(u) !== s && (t.update(u), a.set(u, s)), r.isInstancedMesh && (r.hasEventListener("dispose", l) === !1 && r.addEventListener("dispose", l), a.get(r) !== s && (n.update(r.instanceMatrix, e.ARRAY_BUFFER), r.instanceColor !== null && n.update(r.instanceColor, e.ARRAY_BUFFER), a.set(r, s))), r.isSkinnedMesh) {
			let e = r.skeleton;
			a.get(e) !== s && (e.update(), a.set(e, s));
		}
		return u;
	}
	function c() {
		a = /* @__PURE__ */ new WeakMap();
	}
	function l(e) {
		let t = e.target;
		t.removeEventListener("dispose", l), r.releaseStatesOfObject(t), n.remove(t.instanceMatrix), t.instanceColor !== null && n.remove(t.instanceColor);
	}
	return {
		update: s,
		dispose: c
	};
}
var toneMappingMap = {
	1: "LINEAR_TONE_MAPPING",
	2: "REINHARD_TONE_MAPPING",
	3: "CINEON_TONE_MAPPING",
	4: "ACES_FILMIC_TONE_MAPPING",
	6: "AGX_TONE_MAPPING",
	7: "NEUTRAL_TONE_MAPPING",
	5: "CUSTOM_TONE_MAPPING"
};
function WebGLOutput(e, t, n, r, i, a) {
	let s = new WebGLRenderTarget(t, n, {
		type: e,
		depthBuffer: i,
		stencilBuffer: a,
		samples: r ? 4 : 0,
		depthTexture: i ? new DepthTexture(t, n) : void 0
	}), c = new WebGLRenderTarget(t, n, {
		type: HalfFloatType,
		depthBuffer: !1,
		stencilBuffer: !1
	}), l = new BufferGeometry();
	l.setAttribute("position", new Float32BufferAttribute([
		-1,
		3,
		0,
		-1,
		-1,
		0,
		3,
		-1,
		0
	], 3)), l.setAttribute("uv", new Float32BufferAttribute([
		0,
		2,
		0,
		0,
		2,
		0
	], 2));
	let u = new RawShaderMaterial({
		uniforms: { tDiffuse: { value: null } },
		vertexShader: "\n			precision highp float;\n\n			uniform mat4 modelViewMatrix;\n			uniform mat4 projectionMatrix;\n\n			attribute vec3 position;\n			attribute vec2 uv;\n\n			varying vec2 vUv;\n\n			void main() {\n				vUv = uv;\n				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n			}",
		fragmentShader: "\n			precision highp float;\n\n			uniform sampler2D tDiffuse;\n\n			varying vec2 vUv;\n\n			#include <tonemapping_pars_fragment>\n			#include <colorspace_pars_fragment>\n\n			void main() {\n				gl_FragColor = texture2D( tDiffuse, vUv );\n\n				#ifdef LINEAR_TONE_MAPPING\n					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );\n				#elif defined( REINHARD_TONE_MAPPING )\n					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );\n				#elif defined( CINEON_TONE_MAPPING )\n					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );\n				#elif defined( ACES_FILMIC_TONE_MAPPING )\n					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );\n				#elif defined( AGX_TONE_MAPPING )\n					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );\n				#elif defined( NEUTRAL_TONE_MAPPING )\n					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );\n				#elif defined( CUSTOM_TONE_MAPPING )\n					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );\n				#endif\n\n				#ifdef SRGB_TRANSFER\n					gl_FragColor = sRGBTransferOETF( gl_FragColor );\n				#endif\n			}",
		depthTest: !1,
		depthWrite: !1
	}), d = new Mesh(l, u), f = new OrthographicCamera(-1, 1, 1, -1, 0, 1), p = null, h = null, g = !1, _, v = null, y = [], b = !1;
	this.setSize = function(e, t) {
		s.setSize(e, t), c.setSize(e, t);
		for (let n = 0; n < y.length; n++) {
			let r = y[n];
			r.setSize && r.setSize(e, t);
		}
	}, this.setEffects = function(e) {
		y = e, b = y.length > 0 && y[0].isRenderPass === !0;
		let t = s.width, n = s.height;
		for (let e = 0; e < y.length; e++) {
			let r = y[e];
			r.setSize && r.setSize(t, n);
		}
	}, this.begin = function(e, t) {
		if (g || e.toneMapping === 0 && y.length === 0) return !1;
		if (v = t, t !== null) {
			let e = t.width, n = t.height;
			(s.width !== e || s.height !== n) && this.setSize(e, n);
		}
		return b === !1 && e.setRenderTarget(s), _ = e.toneMapping, e.toneMapping = 0, !0;
	}, this.hasRenderPass = function() {
		return b;
	}, this.end = function(e, t) {
		e.toneMapping = _, g = !0;
		let n = s, r = c;
		for (let i = 0; i < y.length; i++) {
			let a = y[i];
			if (a.enabled !== !1 && (a.render(e, r, n, t), a.needsSwap !== !1)) {
				let e = n;
				n = r, r = e;
			}
		}
		if (p !== e.outputColorSpace || h !== e.toneMapping) {
			p = e.outputColorSpace, h = e.toneMapping, u.defines = {}, ColorManagement.getTransfer(p) === "srgb" && (u.defines.SRGB_TRANSFER = "");
			let t = toneMappingMap[h];
			t && (u.defines[t] = ""), u.needsUpdate = !0;
		}
		u.uniforms.tDiffuse.value = n.texture, e.setRenderTarget(v), e.render(d, f), v = null, g = !1;
	}, this.isCompositing = function() {
		return g;
	}, this.dispose = function() {
		s.depthTexture && s.depthTexture.dispose(), s.dispose(), c.dispose(), l.dispose(), u.dispose();
	};
}
var emptyTexture = /*@__PURE__*/ new Texture(), emptyShadowTexture = /*@__PURE__*/ new DepthTexture(1, 1), emptyArrayTexture = /*@__PURE__*/ new DataArrayTexture(), empty3dTexture = /*@__PURE__*/ new Data3DTexture(), emptyCubeTexture = /*@__PURE__*/ new CubeTexture(), arrayCacheF32 = [], arrayCacheI32 = [], mat4array = /* @__PURE__ */ new Float32Array(16), mat3array = /* @__PURE__ */ new Float32Array(9), mat2array = /* @__PURE__ */ new Float32Array(4);
function flatten(e, t, n) {
	let r = e[0];
	if (r <= 0 || r > 0) return e;
	let i = t * n, a = arrayCacheF32[i];
	if (a === void 0 && (a = new Float32Array(i), arrayCacheF32[i] = a), t !== 0) {
		r.toArray(a, 0);
		for (let r = 1, i = 0; r !== t; ++r) i += n, e[r].toArray(a, i);
	}
	return a;
}
function arraysEqual(e, t) {
	if (e.length !== t.length) return !1;
	for (let n = 0, r = e.length; n < r; n++) if (e[n] !== t[n]) return !1;
	return !0;
}
function copyArray(e, t) {
	for (let n = 0, r = t.length; n < r; n++) e[n] = t[n];
}
function allocTexUnits(e, t) {
	let n = arrayCacheI32[t];
	n === void 0 && (n = new Int32Array(t), arrayCacheI32[t] = n);
	for (let r = 0; r !== t; ++r) n[r] = e.allocateTextureUnit();
	return n;
}
function setValueV1f(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1f(this.addr, t), n[0] = t);
}
function setValueV2f(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2f(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform2fv(this.addr, t), copyArray(n, t);
	}
}
function setValueV3f(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3f(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else if (t.r !== void 0) (n[0] !== t.r || n[1] !== t.g || n[2] !== t.b) && (e.uniform3f(this.addr, t.r, t.g, t.b), n[0] = t.r, n[1] = t.g, n[2] = t.b);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform3fv(this.addr, t), copyArray(n, t);
	}
}
function setValueV4f(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4f(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform4fv(this.addr, t), copyArray(n, t);
	}
}
function setValueM2(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (arraysEqual(n, t)) return;
		e.uniformMatrix2fv(this.addr, !1, t), copyArray(n, t);
	} else {
		if (arraysEqual(n, r)) return;
		mat2array.set(r), e.uniformMatrix2fv(this.addr, !1, mat2array), copyArray(n, r);
	}
}
function setValueM3(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (arraysEqual(n, t)) return;
		e.uniformMatrix3fv(this.addr, !1, t), copyArray(n, t);
	} else {
		if (arraysEqual(n, r)) return;
		mat3array.set(r), e.uniformMatrix3fv(this.addr, !1, mat3array), copyArray(n, r);
	}
}
function setValueM4(e, t) {
	let n = this.cache, r = t.elements;
	if (r === void 0) {
		if (arraysEqual(n, t)) return;
		e.uniformMatrix4fv(this.addr, !1, t), copyArray(n, t);
	} else {
		if (arraysEqual(n, r)) return;
		mat4array.set(r), e.uniformMatrix4fv(this.addr, !1, mat4array), copyArray(n, r);
	}
}
function setValueV1i(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1i(this.addr, t), n[0] = t);
}
function setValueV2i(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2i(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform2iv(this.addr, t), copyArray(n, t);
	}
}
function setValueV3i(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3i(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform3iv(this.addr, t), copyArray(n, t);
	}
}
function setValueV4i(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4i(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform4iv(this.addr, t), copyArray(n, t);
	}
}
function setValueV1ui(e, t) {
	let n = this.cache;
	n[0] !== t && (e.uniform1ui(this.addr, t), n[0] = t);
}
function setValueV2ui(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y) && (e.uniform2ui(this.addr, t.x, t.y), n[0] = t.x, n[1] = t.y);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform2uiv(this.addr, t), copyArray(n, t);
	}
}
function setValueV3ui(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z) && (e.uniform3ui(this.addr, t.x, t.y, t.z), n[0] = t.x, n[1] = t.y, n[2] = t.z);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform3uiv(this.addr, t), copyArray(n, t);
	}
}
function setValueV4ui(e, t) {
	let n = this.cache;
	if (t.x !== void 0) (n[0] !== t.x || n[1] !== t.y || n[2] !== t.z || n[3] !== t.w) && (e.uniform4ui(this.addr, t.x, t.y, t.z, t.w), n[0] = t.x, n[1] = t.y, n[2] = t.z, n[3] = t.w);
	else {
		if (arraysEqual(n, t)) return;
		e.uniform4uiv(this.addr, t), copyArray(n, t);
	}
}
function setValueT1(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i);
	let a;
	this.type === e.SAMPLER_2D_SHADOW ? (emptyShadowTexture.compareFunction = n.isReversedDepthBuffer() ? 518 : 515, a = emptyShadowTexture) : a = emptyTexture, n.setTexture2D(t || a, i);
}
function setValueT3D1(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture3D(t || empty3dTexture, i);
}
function setValueT6(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTextureCube(t || emptyCubeTexture, i);
}
function setValueT2DArray1(e, t, n) {
	let r = this.cache, i = n.allocateTextureUnit();
	r[0] !== i && (e.uniform1i(this.addr, i), r[0] = i), n.setTexture2DArray(t || emptyArrayTexture, i);
}
function getSingularSetter(e) {
	switch (e) {
		case 5126: return setValueV1f;
		case 35664: return setValueV2f;
		case 35665: return setValueV3f;
		case 35666: return setValueV4f;
		case 35674: return setValueM2;
		case 35675: return setValueM3;
		case 35676: return setValueM4;
		case 5124:
		case 35670: return setValueV1i;
		case 35667:
		case 35671: return setValueV2i;
		case 35668:
		case 35672: return setValueV3i;
		case 35669:
		case 35673: return setValueV4i;
		case 5125: return setValueV1ui;
		case 36294: return setValueV2ui;
		case 36295: return setValueV3ui;
		case 36296: return setValueV4ui;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return setValueT1;
		case 35679:
		case 36299:
		case 36307: return setValueT3D1;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return setValueT6;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return setValueT2DArray1;
	}
}
function setValueV1fArray(e, t) {
	e.uniform1fv(this.addr, t);
}
function setValueV2fArray(e, t) {
	let n = flatten(t, this.size, 2);
	e.uniform2fv(this.addr, n);
}
function setValueV3fArray(e, t) {
	let n = flatten(t, this.size, 3);
	e.uniform3fv(this.addr, n);
}
function setValueV4fArray(e, t) {
	let n = flatten(t, this.size, 4);
	e.uniform4fv(this.addr, n);
}
function setValueM2Array(e, t) {
	let n = flatten(t, this.size, 4);
	e.uniformMatrix2fv(this.addr, !1, n);
}
function setValueM3Array(e, t) {
	let n = flatten(t, this.size, 9);
	e.uniformMatrix3fv(this.addr, !1, n);
}
function setValueM4Array(e, t) {
	let n = flatten(t, this.size, 16);
	e.uniformMatrix4fv(this.addr, !1, n);
}
function setValueV1iArray(e, t) {
	e.uniform1iv(this.addr, t);
}
function setValueV2iArray(e, t) {
	e.uniform2iv(this.addr, t);
}
function setValueV3iArray(e, t) {
	e.uniform3iv(this.addr, t);
}
function setValueV4iArray(e, t) {
	e.uniform4iv(this.addr, t);
}
function setValueV1uiArray(e, t) {
	e.uniform1uiv(this.addr, t);
}
function setValueV2uiArray(e, t) {
	e.uniform2uiv(this.addr, t);
}
function setValueV3uiArray(e, t) {
	e.uniform3uiv(this.addr, t);
}
function setValueV4uiArray(e, t) {
	e.uniform4uiv(this.addr, t);
}
function setValueT1Array(e, t, n) {
	let r = this.cache, i = t.length, a = allocTexUnits(n, i);
	arraysEqual(r, a) || (e.uniform1iv(this.addr, a), copyArray(r, a));
	let s;
	s = this.type === e.SAMPLER_2D_SHADOW ? emptyShadowTexture : emptyTexture;
	for (let e = 0; e !== i; ++e) n.setTexture2D(t[e] || s, a[e]);
}
function setValueT3DArray(e, t, n) {
	let r = this.cache, i = t.length, a = allocTexUnits(n, i);
	arraysEqual(r, a) || (e.uniform1iv(this.addr, a), copyArray(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture3D(t[e] || empty3dTexture, a[e]);
}
function setValueT6Array(e, t, n) {
	let r = this.cache, i = t.length, a = allocTexUnits(n, i);
	arraysEqual(r, a) || (e.uniform1iv(this.addr, a), copyArray(r, a));
	for (let e = 0; e !== i; ++e) n.setTextureCube(t[e] || emptyCubeTexture, a[e]);
}
function setValueT2DArrayArray(e, t, n) {
	let r = this.cache, i = t.length, a = allocTexUnits(n, i);
	arraysEqual(r, a) || (e.uniform1iv(this.addr, a), copyArray(r, a));
	for (let e = 0; e !== i; ++e) n.setTexture2DArray(t[e] || emptyArrayTexture, a[e]);
}
function getPureArraySetter(e) {
	switch (e) {
		case 5126: return setValueV1fArray;
		case 35664: return setValueV2fArray;
		case 35665: return setValueV3fArray;
		case 35666: return setValueV4fArray;
		case 35674: return setValueM2Array;
		case 35675: return setValueM3Array;
		case 35676: return setValueM4Array;
		case 5124:
		case 35670: return setValueV1iArray;
		case 35667:
		case 35671: return setValueV2iArray;
		case 35668:
		case 35672: return setValueV3iArray;
		case 35669:
		case 35673: return setValueV4iArray;
		case 5125: return setValueV1uiArray;
		case 36294: return setValueV2uiArray;
		case 36295: return setValueV3uiArray;
		case 36296: return setValueV4uiArray;
		case 35678:
		case 36198:
		case 36298:
		case 36306:
		case 35682: return setValueT1Array;
		case 35679:
		case 36299:
		case 36307: return setValueT3DArray;
		case 35680:
		case 36300:
		case 36308:
		case 36293: return setValueT6Array;
		case 36289:
		case 36303:
		case 36311:
		case 36292: return setValueT2DArrayArray;
	}
}
var SingleUniform = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = getSingularSetter(t.type);
	}
}, PureArrayUniform = class {
	constructor(e, t, n) {
		this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = getPureArraySetter(t.type);
	}
}, StructuredUniform = class {
	constructor(e) {
		this.id = e, this.seq = [], this.map = {};
	}
	setValue(e, t, n) {
		let r = this.seq;
		for (let i = 0, a = r.length; i !== a; ++i) {
			let a = r[i];
			a.setValue(e, t[a.id], n);
		}
	}
}, RePathPart = /(\w+)(\])?(\[|\.)?/g;
function addUniform(e, t) {
	e.seq.push(t), e.map[t.id] = t;
}
function parseUniform(e, t, n) {
	let r = e.name, i = r.length;
	for (RePathPart.lastIndex = 0;;) {
		let a = RePathPart.exec(r), s = RePathPart.lastIndex, c = a[1], l = a[2] === "]", u = a[3];
		if (l && (c |= 0), u === void 0 || u === "[" && s + 2 === i) {
			addUniform(n, u === void 0 ? new SingleUniform(c, e, t) : new PureArrayUniform(c, e, t));
			break;
		} else {
			let e = n.map[c];
			e === void 0 && (e = new StructuredUniform(c), addUniform(n, e)), n = e;
		}
	}
}
var WebGLUniforms = class {
	constructor(e, t) {
		this.seq = [], this.map = {};
		let n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
		for (let r = 0; r < n; ++r) {
			let n = e.getActiveUniform(t, r);
			parseUniform(n, e.getUniformLocation(t, n.name), this);
		}
		let r = [], i = [];
		for (let t of this.seq) t.type === e.SAMPLER_2D_SHADOW || t.type === e.SAMPLER_CUBE_SHADOW || t.type === e.SAMPLER_2D_ARRAY_SHADOW ? r.push(t) : i.push(t);
		r.length > 0 && (this.seq = r.concat(i));
	}
	setValue(e, t, n, r) {
		let i = this.map[t];
		i !== void 0 && i.setValue(e, n, r);
	}
	setOptional(e, t, n) {
		let r = t[n];
		r !== void 0 && this.setValue(e, n, r);
	}
	static upload(e, t, n, r) {
		for (let i = 0, a = t.length; i !== a; ++i) {
			let a = t[i], s = n[a.id];
			s.needsUpdate !== !1 && a.setValue(e, s.value, r);
		}
	}
	static seqWithValue(e, t) {
		let n = [];
		for (let r = 0, i = e.length; r !== i; ++r) {
			let i = e[r];
			i.id in t && n.push(i);
		}
		return n;
	}
};
function WebGLShader(e, t, n) {
	let r = e.createShader(t);
	return e.shaderSource(r, n), e.compileShader(r), r;
}
var COMPLETION_STATUS_KHR = 37297, programIdCount = 0;
function handleSource(e, t) {
	let n = e.split("\n"), r = [], i = Math.max(t - 6, 0), a = Math.min(t + 6, n.length);
	for (let e = i; e < a; e++) {
		let i = e + 1;
		r.push(`${i === t ? ">" : " "} ${i}: ${n[e]}`);
	}
	return r.join("\n");
}
var _m0 = /*@__PURE__*/ new Matrix3();
function getEncodingComponents(e) {
	ColorManagement._getMatrix(_m0, ColorManagement.workingColorSpace, e);
	let t = `mat3( ${_m0.elements.map((e) => e.toFixed(4))} )`;
	switch (ColorManagement.getTransfer(e)) {
		case LinearTransfer: return [t, "LinearTransferOETF"];
		case SRGBTransfer: return [t, "sRGBTransferOETF"];
		default: return warn("WebGLProgram: Unsupported color space: ", e), [t, "LinearTransferOETF"];
	}
}
function getShaderErrors(e, t, n) {
	let r = e.getShaderParameter(t, e.COMPILE_STATUS), i = (e.getShaderInfoLog(t) || "").trim();
	if (r && i === "") return "";
	let a = /ERROR: 0:(\d+)/.exec(i);
	if (a) {
		let r = parseInt(a[1]);
		return n.toUpperCase() + "\n\n" + i + "\n\n" + handleSource(e.getShaderSource(t), r);
	} else return i;
}
function getTexelEncodingFunction(e, t) {
	let n = getEncodingComponents(t);
	return [
		`vec4 ${e}( vec4 value ) {`,
		`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,
		"}"
	].join("\n");
}
var toneMappingFunctions = {
	1: "Linear",
	2: "Reinhard",
	3: "Cineon",
	4: "ACESFilmic",
	6: "AgX",
	7: "Neutral",
	5: "Custom"
};
function getToneMappingFunction(e, t) {
	let n = toneMappingFunctions[t];
	return n === void 0 ? (warn("WebGLProgram: Unsupported toneMapping:", t), "vec3 " + e + "( vec3 color ) { return LinearToneMapping( color ); }") : "vec3 " + e + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
}
var _v0 = /*@__PURE__*/ new Vector3();
function getLuminanceFunction() {
	return ColorManagement.getLuminanceCoefficients(_v0), [
		"float luminance( const in vec3 rgb ) {",
		`	const vec3 weights = vec3( ${_v0.x.toFixed(4)}, ${_v0.y.toFixed(4)}, ${_v0.z.toFixed(4)} );`,
		"	return dot( weights, rgb );",
		"}"
	].join("\n");
}
function generateVertexExtensions(e) {
	return [e.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", e.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(filterEmptyLine).join("\n");
}
function generateDefines(e) {
	let t = [];
	for (let n in e) {
		let r = e[n];
		r !== !1 && t.push("#define " + n + " " + r);
	}
	return t.join("\n");
}
function fetchAttributeLocations(e, t) {
	let n = {}, r = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);
	for (let i = 0; i < r; i++) {
		let r = e.getActiveAttrib(t, i), a = r.name, s = 1;
		r.type === e.FLOAT_MAT2 && (s = 2), r.type === e.FLOAT_MAT3 && (s = 3), r.type === e.FLOAT_MAT4 && (s = 4), n[a] = {
			type: r.type,
			location: e.getAttribLocation(t, a),
			locationSize: s
		};
	}
	return n;
}
function filterEmptyLine(e) {
	return e !== "";
}
function replaceLightNums(e, t) {
	let n = t.numSpotLightShadows + t.numSpotLightMaps - t.numSpotLightShadowsWithMaps;
	return e.replace(/NUM_DIR_LIGHTS/g, t.numDirLights).replace(/NUM_SPOT_LIGHTS/g, t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, t.numPointLights).replace(/NUM_HEMI_LIGHTS/g, t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, t.numPointLightShadows);
}
function replaceClippingPlaneNums(e, t) {
	return e.replace(/NUM_CLIPPING_PLANES/g, t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, t.numClippingPlanes - t.numClipIntersection);
}
var includePattern = /^[ \t]*#include +<([\w\d./]+)>/gm;
function resolveIncludes(e) {
	return e.replace(includePattern, includeReplacer);
}
var shaderChunkMap = /* @__PURE__ */ new Map();
function includeReplacer(e, t) {
	let n = ShaderChunk[t];
	if (n === void 0) {
		let e = shaderChunkMap.get(t);
		if (e !== void 0) n = ShaderChunk[e], warn("WebGLRenderer: Shader chunk \"%s\" has been deprecated. Use \"%s\" instead.", t, e);
		else throw Error("THREE.WebGLProgram: Can not resolve #include <" + t + ">");
	}
	return resolveIncludes(n);
}
var unrollLoopPattern = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function unrollLoops(e) {
	return e.replace(unrollLoopPattern, loopReplacer);
}
function loopReplacer(e, t, n, r) {
	let i = "";
	for (let e = parseInt(t); e < parseInt(n); e++) i += r.replace(/\[\s*i\s*\]/g, "[ " + e + " ]").replace(/UNROLLED_LOOP_INDEX/g, e);
	return i;
}
function generatePrecision(e) {
	let t = `precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;
	return e.precision === "highp" ? t += "\n#define HIGH_PRECISION" : e.precision === "mediump" ? t += "\n#define MEDIUM_PRECISION" : e.precision === "lowp" && (t += "\n#define LOW_PRECISION"), t;
}
var shadowMapTypeDefines = {
	1: "SHADOWMAP_TYPE_PCF",
	3: "SHADOWMAP_TYPE_VSM"
};
function generateShadowMapTypeDefine(e) {
	return shadowMapTypeDefines[e.shadowMapType] || "SHADOWMAP_TYPE_BASIC";
}
var envMapTypeDefines = {
	301: "ENVMAP_TYPE_CUBE",
	302: "ENVMAP_TYPE_CUBE",
	306: "ENVMAP_TYPE_CUBE_UV"
};
function generateEnvMapTypeDefine(e) {
	return e.envMap === !1 ? "ENVMAP_TYPE_CUBE" : envMapTypeDefines[e.envMapMode] || "ENVMAP_TYPE_CUBE";
}
var envMapModeDefines = { 302: "ENVMAP_MODE_REFRACTION" };
function generateEnvMapModeDefine(e) {
	return e.envMap === !1 ? "ENVMAP_MODE_REFLECTION" : envMapModeDefines[e.envMapMode] || "ENVMAP_MODE_REFLECTION";
}
var envMapBlendingDefines = {
	0: "ENVMAP_BLENDING_MULTIPLY",
	1: "ENVMAP_BLENDING_MIX",
	2: "ENVMAP_BLENDING_ADD"
};
function generateEnvMapBlendingDefine(e) {
	return e.envMap === !1 ? "ENVMAP_BLENDING_NONE" : envMapBlendingDefines[e.combine] || "ENVMAP_BLENDING_NONE";
}
function generateCubeUVSize(e) {
	let t = e.envMapCubeUVHeight;
	if (t === null) return null;
	let n = Math.log2(t) - 2, r = 1 / t;
	return {
		texelWidth: 1 / (3 * Math.max(2 ** n, 112)),
		texelHeight: r,
		maxMip: n
	};
}
function WebGLProgram(e, t, n, r) {
	let i = e.getContext(), a = n.defines, s = n.vertexShader, c = n.fragmentShader, l = generateShadowMapTypeDefine(n), u = generateEnvMapTypeDefine(n), d = generateEnvMapModeDefine(n), f = generateEnvMapBlendingDefine(n), p = generateCubeUVSize(n), h = generateVertexExtensions(n), g = generateDefines(a), _ = i.createProgram(), v, y, b = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
	n.isRawShaderMaterial ? (v = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g
	].filter(filterEmptyLine).join("\n"), v.length > 0 && (v += "\n"), y = [
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g
	].filter(filterEmptyLine).join("\n"), y.length > 0 && (y += "\n")) : (v = [
		generatePrecision(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g,
		n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
		n.batching ? "#define USE_BATCHING" : "",
		n.batchingColor ? "#define USE_BATCHING_COLOR" : "",
		n.instancing ? "#define USE_INSTANCING" : "",
		n.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
		n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.map ? "#define USE_MAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + d : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.mapUv ? "#define MAP_UV " + n.mapUv : "",
		n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "",
		n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "",
		n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "",
		n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "",
		n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "",
		n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "",
		n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "",
		n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "",
		n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "",
		n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "",
		n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "",
		n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "",
		n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "",
		n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "",
		n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "",
		n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "",
		n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "",
		n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "",
		n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "",
		n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "",
		n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "",
		n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexNormals ? "#define HAS_NORMAL" : "",
		n.vertexColors ? "#define USE_COLOR" : "",
		n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.skinning ? "#define USE_SKINNING" : "",
		n.morphTargets ? "#define USE_MORPHTARGETS" : "",
		n.morphNormals && n.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
		n.morphColors ? "#define USE_MORPHCOLORS" : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "",
		n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + l : "",
		n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 modelMatrix;",
		"uniform mat4 modelViewMatrix;",
		"uniform mat4 projectionMatrix;",
		"uniform mat4 viewMatrix;",
		"uniform mat3 normalMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		"#ifdef USE_INSTANCING",
		"	attribute mat4 instanceMatrix;",
		"#endif",
		"#ifdef USE_INSTANCING_COLOR",
		"	attribute vec3 instanceColor;",
		"#endif",
		"#ifdef USE_INSTANCING_MORPH",
		"	uniform sampler2D morphTexture;",
		"#endif",
		"attribute vec3 position;",
		"attribute vec3 normal;",
		"attribute vec2 uv;",
		"#ifdef USE_UV1",
		"	attribute vec2 uv1;",
		"#endif",
		"#ifdef USE_UV2",
		"	attribute vec2 uv2;",
		"#endif",
		"#ifdef USE_UV3",
		"	attribute vec2 uv3;",
		"#endif",
		"#ifdef USE_TANGENT",
		"	attribute vec4 tangent;",
		"#endif",
		"#if defined( USE_COLOR_ALPHA )",
		"	attribute vec4 color;",
		"#elif defined( USE_COLOR )",
		"	attribute vec3 color;",
		"#endif",
		"#ifdef USE_SKINNING",
		"	attribute vec4 skinIndex;",
		"	attribute vec4 skinWeight;",
		"#endif",
		"\n"
	].filter(filterEmptyLine).join("\n"), y = [
		generatePrecision(n),
		"#define SHADER_TYPE " + n.shaderType,
		"#define SHADER_NAME " + n.shaderName,
		g,
		n.useFog && n.fog ? "#define USE_FOG" : "",
		n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "",
		n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
		n.map ? "#define USE_MAP" : "",
		n.matcap ? "#define USE_MATCAP" : "",
		n.envMap ? "#define USE_ENVMAP" : "",
		n.envMap ? "#define " + u : "",
		n.envMap ? "#define " + d : "",
		n.envMap ? "#define " + f : "",
		p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "",
		p ? "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "",
		p ? "#define CUBEUV_MAX_MIP " + p.maxMip + ".0" : "",
		n.lightMap ? "#define USE_LIGHTMAP" : "",
		n.aoMap ? "#define USE_AOMAP" : "",
		n.bumpMap ? "#define USE_BUMPMAP" : "",
		n.normalMap ? "#define USE_NORMALMAP" : "",
		n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
		n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
		n.packedNormalMap ? "#define USE_PACKED_NORMALMAP" : "",
		n.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
		n.anisotropy ? "#define USE_ANISOTROPY" : "",
		n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
		n.clearcoat ? "#define USE_CLEARCOAT" : "",
		n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
		n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
		n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
		n.dispersion ? "#define USE_DISPERSION" : "",
		n.iridescence ? "#define USE_IRIDESCENCE" : "",
		n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
		n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
		n.specularMap ? "#define USE_SPECULARMAP" : "",
		n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
		n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
		n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
		n.metalnessMap ? "#define USE_METALNESSMAP" : "",
		n.alphaMap ? "#define USE_ALPHAMAP" : "",
		n.alphaTest ? "#define USE_ALPHATEST" : "",
		n.alphaHash ? "#define USE_ALPHAHASH" : "",
		n.sheen ? "#define USE_SHEEN" : "",
		n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
		n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
		n.transmission ? "#define USE_TRANSMISSION" : "",
		n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
		n.thicknessMap ? "#define USE_THICKNESSMAP" : "",
		n.vertexTangents && n.flatShading === !1 ? "#define USE_TANGENT" : "",
		n.vertexColors || n.instancingColor ? "#define USE_COLOR" : "",
		n.vertexAlphas || n.batchingColor ? "#define USE_COLOR_ALPHA" : "",
		n.vertexUv1s ? "#define USE_UV1" : "",
		n.vertexUv2s ? "#define USE_UV2" : "",
		n.vertexUv3s ? "#define USE_UV3" : "",
		n.pointsUvs ? "#define USE_POINTS_UV" : "",
		n.gradientMap ? "#define USE_GRADIENTMAP" : "",
		n.flatShading ? "#define FLAT_SHADED" : "",
		n.doubleSided ? "#define DOUBLE_SIDED" : "",
		n.flipSided ? "#define FLIP_SIDED" : "",
		n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
		n.shadowMapEnabled ? "#define " + l : "",
		n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
		n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
		n.numLightProbeGrids > 0 ? "#define USE_LIGHT_PROBES_GRID" : "",
		n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
		n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "",
		n.logarithmicDepthBuffer ? "#define USE_LOGARITHMIC_DEPTH_BUFFER" : "",
		n.reversedDepthBuffer ? "#define USE_REVERSED_DEPTH_BUFFER" : "",
		"uniform mat4 viewMatrix;",
		"uniform vec3 cameraPosition;",
		"uniform bool isOrthographic;",
		n.toneMapping === 0 ? "" : "#define TONE_MAPPING",
		n.toneMapping === 0 ? "" : ShaderChunk.tonemapping_pars_fragment,
		n.toneMapping === 0 ? "" : getToneMappingFunction("toneMapping", n.toneMapping),
		n.dithering ? "#define DITHERING" : "",
		n.opaque ? "#define OPAQUE" : "",
		ShaderChunk.colorspace_pars_fragment,
		getTexelEncodingFunction("linearToOutputTexel", n.outputColorSpace),
		getLuminanceFunction(),
		n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "",
		"\n"
	].filter(filterEmptyLine).join("\n")), s = resolveIncludes(s), s = replaceLightNums(s, n), s = replaceClippingPlaneNums(s, n), c = resolveIncludes(c), c = replaceLightNums(c, n), c = replaceClippingPlaneNums(c, n), s = unrollLoops(s), c = unrollLoops(c), n.isRawShaderMaterial !== !0 && (b = "#version 300 es\n", v = [
		h,
		"#define attribute in",
		"#define varying out",
		"#define texture2D texture"
	].join("\n") + "\n" + v, y = [
		"#define varying in",
		n.glslVersion === "300 es" ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
		n.glslVersion === "300 es" ? "" : "#define gl_FragColor pc_fragColor",
		"#define gl_FragDepthEXT gl_FragDepth",
		"#define texture2D texture",
		"#define textureCube texture",
		"#define texture2DProj textureProj",
		"#define texture2DLodEXT textureLod",
		"#define texture2DProjLodEXT textureProjLod",
		"#define textureCubeLodEXT textureLod",
		"#define texture2DGradEXT textureGrad",
		"#define texture2DProjGradEXT textureProjGrad",
		"#define textureCubeGradEXT textureGrad"
	].join("\n") + "\n" + y);
	let x = b + v + s, S = b + y + c, C = WebGLShader(i, i.VERTEX_SHADER, x), w = WebGLShader(i, i.FRAGMENT_SHADER, S);
	i.attachShader(_, C), i.attachShader(_, w), n.index0AttributeName === void 0 ? n.hasPositionAttribute === !0 && i.bindAttribLocation(_, 0, "position") : i.bindAttribLocation(_, 0, n.index0AttributeName), i.linkProgram(_);
	function T(t) {
		if (e.debug.checkShaderErrors) {
			let n = i.getProgramInfoLog(_) || "", r = i.getShaderInfoLog(C) || "", a = i.getShaderInfoLog(w) || "", s = n.trim(), c = r.trim(), l = a.trim(), u = !0, d = !0;
			if (i.getProgramParameter(_, i.LINK_STATUS) === !1) if (u = !1, typeof e.debug.onShaderError == "function") e.debug.onShaderError(i, _, C, w);
			else {
				let e = getShaderErrors(i, C, "vertex"), n = getShaderErrors(i, w, "fragment");
				error("WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + "\n\nMaterial Name: " + t.name + "\nMaterial Type: " + t.type + "\n\nProgram Info Log: " + s + "\n" + e + "\n" + n);
			}
			else s === "" ? (c === "" || l === "") && (d = !1) : warn("WebGLProgram: Program Info Log:", s);
			d && (t.diagnostics = {
				runnable: u,
				programLog: s,
				vertexShader: {
					log: c,
					prefix: v
				},
				fragmentShader: {
					log: l,
					prefix: y
				}
			});
		}
		i.deleteShader(C), i.deleteShader(w), E = new WebGLUniforms(i, _), D = fetchAttributeLocations(i, _);
	}
	let E;
	this.getUniforms = function() {
		return E === void 0 && T(this), E;
	};
	let D;
	this.getAttributes = function() {
		return D === void 0 && T(this), D;
	};
	let O = n.rendererExtensionParallelShaderCompile === !1;
	return this.isReady = function() {
		return O === !1 && (O = i.getProgramParameter(_, COMPLETION_STATUS_KHR)), O;
	}, this.destroy = function() {
		r.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
	}, this.type = n.shaderType, this.name = n.shaderName, this.id = programIdCount++, this.cacheKey = t, this.usedTimes = 1, this.program = _, this.vertexShader = C, this.fragmentShader = w, this;
}
var _id = 0, WebGLShaderCache = class {
	constructor() {
		this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
	}
	update(e, t, n) {
		let r = this._getShaderCacheForMaterial(e);
		return r.has(t) === !1 && (r.add(t), t.usedTimes++), r.has(n) === !1 && (r.add(n), n.usedTimes++), this;
	}
	remove(e) {
		let t = this.materialCache.get(e);
		for (let e of t) e.usedTimes--, e.usedTimes === 0 && this.shaderCache.delete(e.code);
		return this.materialCache.delete(e), this;
	}
	getVertexShaderStage(e) {
		return this._getShaderStage(e.vertexShader);
	}
	getFragmentShaderStage(e) {
		return this._getShaderStage(e.fragmentShader);
	}
	dispose() {
		this.shaderCache.clear(), this.materialCache.clear();
	}
	_getShaderCacheForMaterial(e) {
		let t = this.materialCache, n = t.get(e);
		return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
	}
	_getShaderStage(e) {
		let t = this.shaderCache, n = t.get(e);
		return n === void 0 && (n = new WebGLShaderStage(e), t.set(e, n)), n;
	}
}, WebGLShaderStage = class {
	constructor(e) {
		this.id = _id++, this.code = e, this.usedTimes = 0;
	}
};
function isPackedRGFormat(e) {
	return e === 1030 || e === 37490 || e === 36285;
}
function WebGLPrograms(e, t, n, r, i, a) {
	let s = new Layers(), c = new WebGLShaderCache(), l = /* @__PURE__ */ new Set(), u = [], d = /* @__PURE__ */ new Map(), f = r.logarithmicDepthBuffer, p = r.precision, h = {
		MeshDepthMaterial: "depth",
		MeshDistanceMaterial: "distance",
		MeshNormalMaterial: "normal",
		MeshBasicMaterial: "basic",
		MeshLambertMaterial: "lambert",
		MeshPhongMaterial: "phong",
		MeshToonMaterial: "toon",
		MeshStandardMaterial: "physical",
		MeshPhysicalMaterial: "physical",
		MeshMatcapMaterial: "matcap",
		LineBasicMaterial: "basic",
		LineDashedMaterial: "dashed",
		PointsMaterial: "points",
		ShadowMaterial: "shadow",
		SpriteMaterial: "sprite"
	};
	function g(e) {
		return l.add(e), e === 0 ? "uv" : `uv${e}`;
	}
	function _(i, s, u, d, _, v) {
		let y = d.fog, b = _.geometry, x = i.isMeshStandardMaterial || i.isMeshLambertMaterial || i.isMeshPhongMaterial ? d.environment : null, S = i.isMeshStandardMaterial || i.isMeshLambertMaterial && !i.envMap || i.isMeshPhongMaterial && !i.envMap, C = t.get(i.envMap || x, S), w = C && C.mapping === 306 ? C.image.height : null, T = h[i.type];
		i.precision !== null && (p = r.getMaxPrecision(i.precision), p !== i.precision && warn("WebGLProgram.getParameters:", i.precision, "not supported, using", p, "instead."));
		let E = b.morphAttributes.position || b.morphAttributes.normal || b.morphAttributes.color, D = E === void 0 ? 0 : E.length, O = 0;
		b.morphAttributes.position !== void 0 && (O = 1), b.morphAttributes.normal !== void 0 && (O = 2), b.morphAttributes.color !== void 0 && (O = 3);
		let k, A, j, N;
		if (T) {
			let e = ShaderLib[T];
			k = e.vertexShader, A = e.fragmentShader;
		} else {
			k = i.vertexShader, A = i.fragmentShader;
			let e = c.getVertexShaderStage(i), t = c.getFragmentShaderStage(i);
			c.update(i, e, t), j = e.id, N = t.id;
		}
		let P = e.getRenderTarget(), ee = e.state.buffers.depth.getReversed(), F = _.isInstancedMesh === !0, I = _.isBatchedMesh === !0, R = !!i.map, z = !!i.matcap, te = !!C, B = !!i.aoMap, ne = !!i.lightMap, H = !!i.bumpMap && i.wireframe === !1, U = !!i.normalMap, re = !!i.displacementMap, W = !!i.emissiveMap, K = !!i.metalnessMap, q = !!i.roughnessMap, ie = i.anisotropy > 0, J = i.clearcoat > 0, ae = i.dispersion > 0, oe = i.iridescence > 0, se = i.sheen > 0, ce = i.transmission > 0, le = ie && !!i.anisotropyMap, ue = J && !!i.clearcoatMap, de = J && !!i.clearcoatNormalMap, fe = J && !!i.clearcoatRoughnessMap, pe = oe && !!i.iridescenceMap, me = oe && !!i.iridescenceThicknessMap, Y = se && !!i.sheenColorMap, he = se && !!i.sheenRoughnessMap, X = !!i.specularMap, ge = !!i.specularColorMap, Z = !!i.specularIntensityMap, _e = ce && !!i.transmissionMap, Q = ce && !!i.thicknessMap, $ = !!i.gradientMap, ve = !!i.alphaMap, ye = i.alphaTest > 0, be = !!i.alphaHash, xe = !!i.extensions, Se = 0;
		i.toneMapped && (P === null || P.isXRRenderTarget === !0) && (Se = e.toneMapping);
		let Ce = {
			shaderID: T,
			shaderType: i.type,
			shaderName: i.name,
			vertexShader: k,
			fragmentShader: A,
			defines: i.defines,
			customVertexShaderID: j,
			customFragmentShaderID: N,
			isRawShaderMaterial: i.isRawShaderMaterial === !0,
			glslVersion: i.glslVersion,
			precision: p,
			batching: I,
			batchingColor: I && _._colorsTexture !== null,
			instancing: F,
			instancingColor: F && _.instanceColor !== null,
			instancingMorph: F && _.morphTexture !== null,
			outputColorSpace: P === null ? e.outputColorSpace : P.isXRRenderTarget === !0 ? P.texture.colorSpace : ColorManagement.workingColorSpace,
			alphaToCoverage: !!i.alphaToCoverage,
			map: R,
			matcap: z,
			envMap: te,
			envMapMode: te && C.mapping,
			envMapCubeUVHeight: w,
			aoMap: B,
			lightMap: ne,
			bumpMap: H,
			normalMap: U,
			displacementMap: re,
			emissiveMap: W,
			normalMapObjectSpace: U && i.normalMapType === 1,
			normalMapTangentSpace: U && i.normalMapType === 0,
			packedNormalMap: U && i.normalMapType === 0 && isPackedRGFormat(i.normalMap.format),
			metalnessMap: K,
			roughnessMap: q,
			anisotropy: ie,
			anisotropyMap: le,
			clearcoat: J,
			clearcoatMap: ue,
			clearcoatNormalMap: de,
			clearcoatRoughnessMap: fe,
			dispersion: ae,
			iridescence: oe,
			iridescenceMap: pe,
			iridescenceThicknessMap: me,
			sheen: se,
			sheenColorMap: Y,
			sheenRoughnessMap: he,
			specularMap: X,
			specularColorMap: ge,
			specularIntensityMap: Z,
			transmission: ce,
			transmissionMap: _e,
			thicknessMap: Q,
			gradientMap: $,
			opaque: i.transparent === !1 && i.blending === 1 && i.alphaToCoverage === !1,
			alphaMap: ve,
			alphaTest: ye,
			alphaHash: be,
			combine: i.combine,
			mapUv: R && g(i.map.channel),
			aoMapUv: B && g(i.aoMap.channel),
			lightMapUv: ne && g(i.lightMap.channel),
			bumpMapUv: H && g(i.bumpMap.channel),
			normalMapUv: U && g(i.normalMap.channel),
			displacementMapUv: re && g(i.displacementMap.channel),
			emissiveMapUv: W && g(i.emissiveMap.channel),
			metalnessMapUv: K && g(i.metalnessMap.channel),
			roughnessMapUv: q && g(i.roughnessMap.channel),
			anisotropyMapUv: le && g(i.anisotropyMap.channel),
			clearcoatMapUv: ue && g(i.clearcoatMap.channel),
			clearcoatNormalMapUv: de && g(i.clearcoatNormalMap.channel),
			clearcoatRoughnessMapUv: fe && g(i.clearcoatRoughnessMap.channel),
			iridescenceMapUv: pe && g(i.iridescenceMap.channel),
			iridescenceThicknessMapUv: me && g(i.iridescenceThicknessMap.channel),
			sheenColorMapUv: Y && g(i.sheenColorMap.channel),
			sheenRoughnessMapUv: he && g(i.sheenRoughnessMap.channel),
			specularMapUv: X && g(i.specularMap.channel),
			specularColorMapUv: ge && g(i.specularColorMap.channel),
			specularIntensityMapUv: Z && g(i.specularIntensityMap.channel),
			transmissionMapUv: _e && g(i.transmissionMap.channel),
			thicknessMapUv: Q && g(i.thicknessMap.channel),
			alphaMapUv: ve && g(i.alphaMap.channel),
			vertexTangents: !!b.attributes.tangent && (U || ie),
			vertexNormals: !!b.attributes.normal,
			vertexColors: i.vertexColors,
			vertexAlphas: i.vertexColors === !0 && !!b.attributes.color && b.attributes.color.itemSize === 4,
			pointsUvs: _.isPoints === !0 && !!b.attributes.uv && (R || ve),
			fog: !!y,
			useFog: i.fog === !0,
			fogExp2: !!y && y.isFogExp2,
			flatShading: i.wireframe === !1 && (i.flatShading === !0 || b.attributes.normal === void 0 && U === !1 && (i.isMeshLambertMaterial || i.isMeshPhongMaterial || i.isMeshStandardMaterial || i.isMeshPhysicalMaterial)),
			sizeAttenuation: i.sizeAttenuation === !0,
			logarithmicDepthBuffer: f,
			reversedDepthBuffer: ee,
			skinning: _.isSkinnedMesh === !0,
			hasPositionAttribute: b.attributes.position !== void 0,
			morphTargets: b.morphAttributes.position !== void 0,
			morphNormals: b.morphAttributes.normal !== void 0,
			morphColors: b.morphAttributes.color !== void 0,
			morphTargetsCount: D,
			morphTextureStride: O,
			numDirLights: s.directional.length,
			numPointLights: s.point.length,
			numSpotLights: s.spot.length,
			numSpotLightMaps: s.spotLightMap.length,
			numRectAreaLights: s.rectArea.length,
			numHemiLights: s.hemi.length,
			numDirLightShadows: s.directionalShadowMap.length,
			numPointLightShadows: s.pointShadowMap.length,
			numSpotLightShadows: s.spotShadowMap.length,
			numSpotLightShadowsWithMaps: s.numSpotLightShadowsWithMaps,
			numLightProbes: s.numLightProbes,
			numLightProbeGrids: v.length,
			numClippingPlanes: a.numPlanes,
			numClipIntersection: a.numIntersection,
			dithering: i.dithering,
			shadowMapEnabled: e.shadowMap.enabled && u.length > 0,
			shadowMapType: e.shadowMap.type,
			toneMapping: Se,
			decodeVideoTexture: R && i.map.isVideoTexture === !0 && ColorManagement.getTransfer(i.map.colorSpace) === "srgb",
			decodeVideoTextureEmissive: W && i.emissiveMap.isVideoTexture === !0 && ColorManagement.getTransfer(i.emissiveMap.colorSpace) === "srgb",
			premultipliedAlpha: i.premultipliedAlpha,
			doubleSided: i.side === 2,
			flipSided: i.side === 1,
			useDepthPacking: i.depthPacking >= 0,
			depthPacking: i.depthPacking || 0,
			index0AttributeName: i.index0AttributeName,
			extensionClipCullDistance: xe && i.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
			extensionMultiDraw: (xe && i.extensions.multiDraw === !0 || I) && n.has("WEBGL_multi_draw"),
			rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
			customProgramCacheKey: i.customProgramCacheKey()
		};
		return Ce.vertexUv1s = l.has(1), Ce.vertexUv2s = l.has(2), Ce.vertexUv3s = l.has(3), l.clear(), Ce;
	}
	function v(t) {
		let n = [];
		if (t.shaderID ? n.push(t.shaderID) : (n.push(t.customVertexShaderID), n.push(t.customFragmentShaderID)), t.defines !== void 0) for (let e in t.defines) n.push(e), n.push(t.defines[e]);
		return t.isRawShaderMaterial === !1 && (y(n, t), b(n, t), n.push(e.outputColorSpace)), n.push(t.customProgramCacheKey), n.join();
	}
	function y(e, t) {
		e.push(t.precision), e.push(t.outputColorSpace), e.push(t.envMapMode), e.push(t.envMapCubeUVHeight), e.push(t.mapUv), e.push(t.alphaMapUv), e.push(t.lightMapUv), e.push(t.aoMapUv), e.push(t.bumpMapUv), e.push(t.normalMapUv), e.push(t.displacementMapUv), e.push(t.emissiveMapUv), e.push(t.metalnessMapUv), e.push(t.roughnessMapUv), e.push(t.anisotropyMapUv), e.push(t.clearcoatMapUv), e.push(t.clearcoatNormalMapUv), e.push(t.clearcoatRoughnessMapUv), e.push(t.iridescenceMapUv), e.push(t.iridescenceThicknessMapUv), e.push(t.sheenColorMapUv), e.push(t.sheenRoughnessMapUv), e.push(t.specularMapUv), e.push(t.specularColorMapUv), e.push(t.specularIntensityMapUv), e.push(t.transmissionMapUv), e.push(t.thicknessMapUv), e.push(t.combine), e.push(t.fogExp2), e.push(t.sizeAttenuation), e.push(t.morphTargetsCount), e.push(t.morphAttributeCount), e.push(t.numDirLights), e.push(t.numPointLights), e.push(t.numSpotLights), e.push(t.numSpotLightMaps), e.push(t.numHemiLights), e.push(t.numRectAreaLights), e.push(t.numDirLightShadows), e.push(t.numPointLightShadows), e.push(t.numSpotLightShadows), e.push(t.numSpotLightShadowsWithMaps), e.push(t.numLightProbes), e.push(t.shadowMapType), e.push(t.toneMapping), e.push(t.numClippingPlanes), e.push(t.numClipIntersection), e.push(t.depthPacking);
	}
	function b(e, t) {
		s.disableAll(), t.instancing && s.enable(0), t.instancingColor && s.enable(1), t.instancingMorph && s.enable(2), t.matcap && s.enable(3), t.envMap && s.enable(4), t.normalMapObjectSpace && s.enable(5), t.normalMapTangentSpace && s.enable(6), t.clearcoat && s.enable(7), t.iridescence && s.enable(8), t.alphaTest && s.enable(9), t.vertexColors && s.enable(10), t.vertexAlphas && s.enable(11), t.vertexUv1s && s.enable(12), t.vertexUv2s && s.enable(13), t.vertexUv3s && s.enable(14), t.vertexTangents && s.enable(15), t.anisotropy && s.enable(16), t.alphaHash && s.enable(17), t.batching && s.enable(18), t.dispersion && s.enable(19), t.batchingColor && s.enable(20), t.gradientMap && s.enable(21), t.packedNormalMap && s.enable(22), t.vertexNormals && s.enable(23), e.push(s.mask), s.disableAll(), t.fog && s.enable(0), t.useFog && s.enable(1), t.flatShading && s.enable(2), t.logarithmicDepthBuffer && s.enable(3), t.reversedDepthBuffer && s.enable(4), t.skinning && s.enable(5), t.morphTargets && s.enable(6), t.morphNormals && s.enable(7), t.morphColors && s.enable(8), t.premultipliedAlpha && s.enable(9), t.shadowMapEnabled && s.enable(10), t.doubleSided && s.enable(11), t.flipSided && s.enable(12), t.useDepthPacking && s.enable(13), t.dithering && s.enable(14), t.transmission && s.enable(15), t.sheen && s.enable(16), t.opaque && s.enable(17), t.pointsUvs && s.enable(18), t.decodeVideoTexture && s.enable(19), t.decodeVideoTextureEmissive && s.enable(20), t.alphaToCoverage && s.enable(21), t.numLightProbeGrids > 0 && s.enable(22), t.hasPositionAttribute && s.enable(23), e.push(s.mask);
	}
	function x(e) {
		let t = h[e.type], n;
		if (t) {
			let e = ShaderLib[t];
			n = UniformsUtils.clone(e.uniforms);
		} else n = e.uniforms;
		return n;
	}
	function S(t, n) {
		let r = d.get(n);
		return r === void 0 ? (r = new WebGLProgram(e, n, t, i), u.push(r), d.set(n, r)) : ++r.usedTimes, r;
	}
	function C(e) {
		if (--e.usedTimes === 0) {
			let t = u.indexOf(e);
			u[t] = u[u.length - 1], u.pop(), d.delete(e.cacheKey), e.destroy();
		}
	}
	function w(e) {
		c.remove(e);
	}
	function T() {
		c.dispose();
	}
	return {
		getParameters: _,
		getProgramCacheKey: v,
		getUniforms: x,
		acquireProgram: S,
		releaseProgram: C,
		releaseShaderCache: w,
		programs: u,
		dispose: T
	};
}
function WebGLProperties() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t) {
		return e.has(t);
	}
	function n(t) {
		let n = e.get(t);
		return n === void 0 && (n = {}, e.set(t, n)), n;
	}
	function r(t) {
		e.delete(t);
	}
	function i(t, n, r) {
		e.get(t)[n] = r;
	}
	function a() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		has: t,
		get: n,
		remove: r,
		update: i,
		dispose: a
	};
}
function painterSortStable(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.material.id === t.material.id ? e.materialVariant === t.materialVariant ? e.z === t.z ? e.id - t.id : e.z - t.z : e.materialVariant - t.materialVariant : e.material.id - t.material.id : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function reversePainterSortStable(e, t) {
	return e.groupOrder === t.groupOrder ? e.renderOrder === t.renderOrder ? e.z === t.z ? e.id - t.id : t.z - e.z : e.renderOrder - t.renderOrder : e.groupOrder - t.groupOrder;
}
function WebGLRenderList() {
	let e = [], t = 0, n = [], r = [], i = [];
	function a() {
		t = 0, n.length = 0, r.length = 0, i.length = 0;
	}
	function s(e) {
		let t = 0;
		return e.isInstancedMesh && (t += 2), e.isSkinnedMesh && (t += 1), t;
	}
	function c(n, r, i, a, c, l) {
		let u = e[t];
		return u === void 0 ? (u = {
			id: n.id,
			object: n,
			geometry: r,
			material: i,
			materialVariant: s(n),
			groupOrder: a,
			renderOrder: n.renderOrder,
			z: c,
			group: l
		}, e[t] = u) : (u.id = n.id, u.object = n, u.geometry = r, u.material = i, u.materialVariant = s(n), u.groupOrder = a, u.renderOrder = n.renderOrder, u.z = c, u.group = l), t++, u;
	}
	function l(e, t, a, s, l, u) {
		let d = c(e, t, a, s, l, u);
		a.transmission > 0 ? r.push(d) : a.transparent === !0 ? i.push(d) : n.push(d);
	}
	function u(e, t, a, s, l, u) {
		let d = c(e, t, a, s, l, u);
		a.transmission > 0 ? r.unshift(d) : a.transparent === !0 ? i.unshift(d) : n.unshift(d);
	}
	function d(e, t, a) {
		n.length > 1 && n.sort(e || painterSortStable), r.length > 1 && r.sort(t || reversePainterSortStable), i.length > 1 && i.sort(t || reversePainterSortStable), a && (n.reverse(), r.reverse(), i.reverse());
	}
	function f() {
		for (let n = t, r = e.length; n < r; n++) {
			let t = e[n];
			if (t.id === null) break;
			t.id = null, t.object = null, t.geometry = null, t.material = null, t.group = null;
		}
	}
	return {
		opaque: n,
		transmissive: r,
		transparent: i,
		init: a,
		push: l,
		unshift: u,
		finish: f,
		sort: d
	};
}
function WebGLRenderLists() {
	let e = /* @__PURE__ */ new WeakMap();
	function t(t, n) {
		let r = e.get(t), i;
		return r === void 0 ? (i = new WebGLRenderList(), e.set(t, [i])) : n >= r.length ? (i = new WebGLRenderList(), r.push(i)) : i = r[n], i;
	}
	function n() {
		e = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: t,
		dispose: n
	};
}
function UniformsCache() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					direction: new Vector3(),
					color: new Color$1()
				};
				break;
			case "SpotLight":
				n = {
					position: new Vector3(),
					direction: new Vector3(),
					color: new Color$1(),
					distance: 0,
					coneCos: 0,
					penumbraCos: 0,
					decay: 0
				};
				break;
			case "PointLight":
				n = {
					position: new Vector3(),
					color: new Color$1(),
					distance: 0,
					decay: 0
				};
				break;
			case "HemisphereLight":
				n = {
					direction: new Vector3(),
					skyColor: new Color$1(),
					groundColor: new Color$1()
				};
				break;
			case "RectAreaLight":
				n = {
					color: new Color$1(),
					position: new Vector3(),
					halfWidth: new Vector3(),
					halfHeight: new Vector3()
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
function ShadowUniformsCache() {
	let e = {};
	return { get: function(t) {
		if (e[t.id] !== void 0) return e[t.id];
		let n;
		switch (t.type) {
			case "DirectionalLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Vector2()
				};
				break;
			case "SpotLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Vector2()
				};
				break;
			case "PointLight":
				n = {
					shadowIntensity: 1,
					shadowBias: 0,
					shadowNormalBias: 0,
					shadowRadius: 1,
					shadowMapSize: new Vector2(),
					shadowCameraNear: 1,
					shadowCameraFar: 1e3
				};
				break;
		}
		return e[t.id] = n, n;
	} };
}
var nextVersion = 0;
function shadowCastingAndTexturingLightsFirst(e, t) {
	return (t.castShadow ? 2 : 0) - (e.castShadow ? 2 : 0) + +!!t.map - !!e.map;
}
function WebGLLights(e) {
	let t = new UniformsCache(), n = ShadowUniformsCache(), r = {
		version: 0,
		hash: {
			directionalLength: -1,
			pointLength: -1,
			spotLength: -1,
			rectAreaLength: -1,
			hemiLength: -1,
			numDirectionalShadows: -1,
			numPointShadows: -1,
			numSpotShadows: -1,
			numSpotMaps: -1,
			numLightProbes: -1
		},
		ambient: [
			0,
			0,
			0
		],
		probe: [],
		directional: [],
		directionalShadow: [],
		directionalShadowMap: [],
		directionalShadowMatrix: [],
		spot: [],
		spotLightMap: [],
		spotShadow: [],
		spotShadowMap: [],
		spotLightMatrix: [],
		rectArea: [],
		rectAreaLTC1: null,
		rectAreaLTC2: null,
		point: [],
		pointShadow: [],
		pointShadowMap: [],
		pointShadowMatrix: [],
		hemi: [],
		numSpotLightShadowsWithMaps: 0,
		numLightProbes: 0
	};
	for (let e = 0; e < 9; e++) r.probe.push(new Vector3());
	let i = new Vector3(), a = new Matrix4(), s = new Matrix4();
	function c(i) {
		let a = 0, s = 0, c = 0;
		for (let e = 0; e < 9; e++) r.probe[e].set(0, 0, 0);
		let l = 0, u = 0, d = 0, f = 0, p = 0, h = 0, g = 0, _ = 0, v = 0, y = 0, b = 0;
		i.sort(shadowCastingAndTexturingLightsFirst);
		for (let e = 0, x = i.length; e < x; e++) {
			let x = i[e], S = x.color, C = x.intensity, w = x.distance, T = null;
			if (x.shadow && x.shadow.map && (T = x.shadow.map.texture.format === 1030 ? x.shadow.map.texture : x.shadow.map.depthTexture || x.shadow.map.texture), x.isAmbientLight) a += S.r * C, s += S.g * C, c += S.b * C;
			else if (x.isLightProbe) {
				for (let e = 0; e < 9; e++) r.probe[e].addScaledVector(x.sh.coefficients[e], C);
				b++;
			} else if (x.isDirectionalLight) {
				let e = t.get(x);
				if (e.color.copy(x.color).multiplyScalar(x.intensity), x.castShadow) {
					let e = x.shadow, t = n.get(x);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, r.directionalShadow[l] = t, r.directionalShadowMap[l] = T, r.directionalShadowMatrix[l] = x.shadow.matrix, h++;
				}
				r.directional[l] = e, l++;
			} else if (x.isSpotLight) {
				let e = t.get(x);
				e.position.setFromMatrixPosition(x.matrixWorld), e.color.copy(S).multiplyScalar(C), e.distance = w, e.coneCos = Math.cos(x.angle), e.penumbraCos = Math.cos(x.angle * (1 - x.penumbra)), e.decay = x.decay, r.spot[d] = e;
				let i = x.shadow;
				if (x.map && (r.spotLightMap[v] = x.map, v++, i.updateMatrices(x), x.castShadow && y++), r.spotLightMatrix[d] = i.matrix, x.castShadow) {
					let e = n.get(x);
					e.shadowIntensity = i.intensity, e.shadowBias = i.bias, e.shadowNormalBias = i.normalBias, e.shadowRadius = i.radius, e.shadowMapSize = i.mapSize, r.spotShadow[d] = e, r.spotShadowMap[d] = T, _++;
				}
				d++;
			} else if (x.isRectAreaLight) {
				let e = t.get(x);
				e.color.copy(S).multiplyScalar(C), e.halfWidth.set(x.width * .5, 0, 0), e.halfHeight.set(0, x.height * .5, 0), r.rectArea[f] = e, f++;
			} else if (x.isPointLight) {
				let e = t.get(x);
				if (e.color.copy(x.color).multiplyScalar(x.intensity), e.distance = x.distance, e.decay = x.decay, x.castShadow) {
					let e = x.shadow, t = n.get(x);
					t.shadowIntensity = e.intensity, t.shadowBias = e.bias, t.shadowNormalBias = e.normalBias, t.shadowRadius = e.radius, t.shadowMapSize = e.mapSize, t.shadowCameraNear = e.camera.near, t.shadowCameraFar = e.camera.far, r.pointShadow[u] = t, r.pointShadowMap[u] = T, r.pointShadowMatrix[u] = x.shadow.matrix, g++;
				}
				r.point[u] = e, u++;
			} else if (x.isHemisphereLight) {
				let e = t.get(x);
				e.skyColor.copy(x.color).multiplyScalar(C), e.groundColor.copy(x.groundColor).multiplyScalar(C), r.hemi[p] = e, p++;
			}
		}
		f > 0 && (e.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = UniformsLib.LTC_FLOAT_1, r.rectAreaLTC2 = UniformsLib.LTC_FLOAT_2) : (r.rectAreaLTC1 = UniformsLib.LTC_HALF_1, r.rectAreaLTC2 = UniformsLib.LTC_HALF_2)), r.ambient[0] = a, r.ambient[1] = s, r.ambient[2] = c;
		let x = r.hash;
		(x.directionalLength !== l || x.pointLength !== u || x.spotLength !== d || x.rectAreaLength !== f || x.hemiLength !== p || x.numDirectionalShadows !== h || x.numPointShadows !== g || x.numSpotShadows !== _ || x.numSpotMaps !== v || x.numLightProbes !== b) && (r.directional.length = l, r.spot.length = d, r.rectArea.length = f, r.point.length = u, r.hemi.length = p, r.directionalShadow.length = h, r.directionalShadowMap.length = h, r.pointShadow.length = g, r.pointShadowMap.length = g, r.spotShadow.length = _, r.spotShadowMap.length = _, r.directionalShadowMatrix.length = h, r.pointShadowMatrix.length = g, r.spotLightMatrix.length = _ + v - y, r.spotLightMap.length = v, r.numSpotLightShadowsWithMaps = y, r.numLightProbes = b, x.directionalLength = l, x.pointLength = u, x.spotLength = d, x.rectAreaLength = f, x.hemiLength = p, x.numDirectionalShadows = h, x.numPointShadows = g, x.numSpotShadows = _, x.numSpotMaps = v, x.numLightProbes = b, r.version = nextVersion++);
	}
	function l(e, t) {
		let n = 0, c = 0, l = 0, u = 0, d = 0, f = t.matrixWorldInverse;
		for (let t = 0, p = e.length; t < p; t++) {
			let p = e[t];
			if (p.isDirectionalLight) {
				let e = r.directional[n];
				e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), n++;
			} else if (p.isSpotLight) {
				let e = r.spot[l];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), e.direction.setFromMatrixPosition(p.matrixWorld), i.setFromMatrixPosition(p.target.matrixWorld), e.direction.sub(i), e.direction.transformDirection(f), l++;
			} else if (p.isRectAreaLight) {
				let e = r.rectArea[u];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), s.identity(), a.copy(p.matrixWorld), a.premultiply(f), s.extractRotation(a), e.halfWidth.set(p.width * .5, 0, 0), e.halfHeight.set(0, p.height * .5, 0), e.halfWidth.applyMatrix4(s), e.halfHeight.applyMatrix4(s), u++;
			} else if (p.isPointLight) {
				let e = r.point[c];
				e.position.setFromMatrixPosition(p.matrixWorld), e.position.applyMatrix4(f), c++;
			} else if (p.isHemisphereLight) {
				let e = r.hemi[d];
				e.direction.setFromMatrixPosition(p.matrixWorld), e.direction.transformDirection(f), d++;
			}
		}
	}
	return {
		setup: c,
		setupView: l,
		state: r
	};
}
function WebGLRenderState(e) {
	let t = new WebGLLights(e), n = [], r = [], i = [];
	function a(e) {
		f.camera = e, n.length = 0, r.length = 0, i.length = 0;
	}
	function s(e) {
		n.push(e);
	}
	function c(e) {
		r.push(e);
	}
	function l(e) {
		i.push(e);
	}
	function u() {
		t.setup(n);
	}
	function d(e) {
		t.setupView(n, e);
	}
	let f = {
		lightsArray: n,
		shadowsArray: r,
		lightProbeGridArray: i,
		camera: null,
		lights: t,
		transmissionRenderTarget: {},
		textureUnits: 0
	};
	return {
		init: a,
		state: f,
		setupLights: u,
		setupLightsView: d,
		pushLight: s,
		pushShadow: c,
		pushLightProbeGrid: l
	};
}
function WebGLRenderStates(e) {
	let t = /* @__PURE__ */ new WeakMap();
	function n(n, r = 0) {
		let i = t.get(n), a;
		return i === void 0 ? (a = new WebGLRenderState(e), t.set(n, [a])) : r >= i.length ? (a = new WebGLRenderState(e), i.push(a)) : a = i[r], a;
	}
	function r() {
		t = /* @__PURE__ */ new WeakMap();
	}
	return {
		get: n,
		dispose: r
	};
}
var vertex = "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragment = "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );\n	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );\n}", _cubeDirections = [
	/*@__PURE__*/ new Vector3(1, 0, 0),
	/*@__PURE__*/ new Vector3(-1, 0, 0),
	/*@__PURE__*/ new Vector3(0, 1, 0),
	/*@__PURE__*/ new Vector3(0, -1, 0),
	/*@__PURE__*/ new Vector3(0, 0, 1),
	/*@__PURE__*/ new Vector3(0, 0, -1)
], _cubeUps = [
	/*@__PURE__*/ new Vector3(0, -1, 0),
	/*@__PURE__*/ new Vector3(0, -1, 0),
	/*@__PURE__*/ new Vector3(0, 0, 1),
	/*@__PURE__*/ new Vector3(0, 0, -1),
	/*@__PURE__*/ new Vector3(0, -1, 0),
	/*@__PURE__*/ new Vector3(0, -1, 0)
], _projScreenMatrix = /*@__PURE__*/ new Matrix4(), _lightPositionWorld = /*@__PURE__*/ new Vector3(), _lookTarget = /*@__PURE__*/ new Vector3();
function WebGLShadowMap(e, t, n) {
	let r = new Frustum(), i = new Vector2(), a = new Vector2(), s = new Vector4(), c = new MeshDepthMaterial(), l = new MeshDistanceMaterial(), u = {}, d = n.maxTextureSize, f = {
		0: 1,
		1: 0,
		2: 2
	}, p = new ShaderMaterial({
		defines: { VSM_SAMPLES: 8 },
		uniforms: {
			shadow_pass: { value: null },
			resolution: { value: new Vector2() },
			radius: { value: 4 }
		},
		vertexShader: vertex,
		fragmentShader: fragment
	}), h = p.clone();
	h.defines.HORIZONTAL_PASS = 1;
	let g = new BufferGeometry();
	g.setAttribute("position", new BufferAttribute(new Float32Array([
		-1,
		-1,
		.5,
		3,
		-1,
		.5,
		-1,
		3,
		.5
	]), 3));
	let _ = new Mesh(g, p), v = this;
	this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = 1;
	let y = this.type;
	this.render = function(t, n, c) {
		if (v.enabled === !1 || v.autoUpdate === !1 && v.needsUpdate === !1 || t.length === 0) return;
		this.type === 2 && (warn("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."), this.type = 1);
		let l = e.getRenderTarget(), u = e.getActiveCubeFace(), f = e.getActiveMipmapLevel(), p = e.state;
		p.setBlending(0), p.buffers.depth.getReversed() === !0 ? p.buffers.color.setClear(0, 0, 0, 0) : p.buffers.color.setClear(1, 1, 1, 1), p.buffers.depth.setTest(!0), p.setScissorTest(!1);
		let h = y !== this.type;
		h && n.traverse(function(e) {
			e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.needsUpdate = !0) : e.material.needsUpdate = !0);
		});
		for (let l = 0, u = t.length; l < u; l++) {
			let u = t[l], f = u.shadow;
			if (f === void 0) {
				warn("WebGLShadowMap:", u, "has no shadow.");
				continue;
			}
			if (f.autoUpdate === !1 && f.needsUpdate === !1) continue;
			i.copy(f.mapSize);
			let g = f.getFrameExtents();
			i.multiply(g), a.copy(f.mapSize), (i.x > d || i.y > d) && (i.x > d && (a.x = Math.floor(d / g.x), i.x = a.x * g.x, f.mapSize.x = a.x), i.y > d && (a.y = Math.floor(d / g.y), i.y = a.y * g.y, f.mapSize.y = a.y));
			let _ = e.state.buffers.depth.getReversed();
			if (f.camera._reversedDepth = _, f.map === null || h === !0) {
				if (f.map !== null && (f.map.depthTexture !== null && (f.map.depthTexture.dispose(), f.map.depthTexture = null), f.map.dispose()), this.type === 3) {
					if (u.isPointLight) {
						warn("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");
						continue;
					}
					f.map = new WebGLRenderTarget(i.x, i.y, {
						format: RGFormat,
						type: HalfFloatType,
						minFilter: LinearFilter,
						magFilter: LinearFilter,
						generateMipmaps: !1
					}), f.map.texture.name = u.name + ".shadowMap", f.map.depthTexture = new DepthTexture(i.x, i.y, FloatType), f.map.depthTexture.name = u.name + ".shadowMapDepth", f.map.depthTexture.format = DepthFormat, f.map.depthTexture.compareFunction = null, f.map.depthTexture.minFilter = NearestFilter, f.map.depthTexture.magFilter = NearestFilter;
				} else u.isPointLight ? (f.map = new WebGLCubeRenderTarget(i.x), f.map.depthTexture = new CubeDepthTexture(i.x, UnsignedIntType)) : (f.map = new WebGLRenderTarget(i.x, i.y), f.map.depthTexture = new DepthTexture(i.x, i.y, UnsignedIntType)), f.map.depthTexture.name = u.name + ".shadowMap", f.map.depthTexture.format = DepthFormat, this.type === 1 ? (f.map.depthTexture.compareFunction = _ ? 518 : 515, f.map.depthTexture.minFilter = LinearFilter, f.map.depthTexture.magFilter = LinearFilter) : (f.map.depthTexture.compareFunction = null, f.map.depthTexture.minFilter = NearestFilter, f.map.depthTexture.magFilter = NearestFilter);
				f.camera.updateProjectionMatrix();
			}
			let v = f.map.isWebGLCubeRenderTarget ? 6 : 1;
			for (let t = 0; t < v; t++) {
				if (f.map.isWebGLCubeRenderTarget) e.setRenderTarget(f.map, t), e.clear();
				else {
					t === 0 && (e.setRenderTarget(f.map), e.clear());
					let n = f.getViewport(t);
					s.set(a.x * n.x, a.y * n.y, a.x * n.z, a.y * n.w), p.viewport(s);
				}
				if (u.isPointLight) {
					let e = f.camera, n = f.matrix, r = u.distance || e.far;
					r !== e.far && (e.far = r, e.updateProjectionMatrix()), _lightPositionWorld.setFromMatrixPosition(u.matrixWorld), e.position.copy(_lightPositionWorld), _lookTarget.copy(e.position), _lookTarget.add(_cubeDirections[t]), e.up.copy(_cubeUps[t]), e.lookAt(_lookTarget), e.updateMatrixWorld(), n.makeTranslation(-_lightPositionWorld.x, -_lightPositionWorld.y, -_lightPositionWorld.z), _projScreenMatrix.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), f._frustum.setFromProjectionMatrix(_projScreenMatrix, e.coordinateSystem, e.reversedDepth);
				} else f.updateMatrices(u);
				r = f.getFrustum(), S(n, c, f.camera, u, this.type);
			}
			f.isPointLightShadow !== !0 && this.type === 3 && b(f, c), f.needsUpdate = !1;
		}
		y = this.type, v.needsUpdate = !1, e.setRenderTarget(l, u, f);
	};
	function b(n, r) {
		let a = t.update(_);
		p.defines.VSM_SAMPLES !== n.blurSamples && (p.defines.VSM_SAMPLES = n.blurSamples, h.defines.VSM_SAMPLES = n.blurSamples, p.needsUpdate = !0, h.needsUpdate = !0), n.mapPass === null && (n.mapPass = new WebGLRenderTarget(i.x, i.y, {
			format: RGFormat,
			type: HalfFloatType
		})), p.uniforms.shadow_pass.value = n.map.depthTexture, p.uniforms.resolution.value = n.mapSize, p.uniforms.radius.value = n.radius, e.setRenderTarget(n.mapPass), e.clear(), e.renderBufferDirect(r, null, a, p, _, null), h.uniforms.shadow_pass.value = n.mapPass.texture, h.uniforms.resolution.value = n.mapSize, h.uniforms.radius.value = n.radius, e.setRenderTarget(n.map), e.clear(), e.renderBufferDirect(r, null, a, h, _, null);
	}
	function x(t, n, r, i) {
		let a = null, s = r.isPointLight === !0 ? t.customDistanceMaterial : t.customDepthMaterial;
		if (s !== void 0) a = s;
		else if (a = r.isPointLight === !0 ? l : c, e.localClippingEnabled && n.clipShadows === !0 && Array.isArray(n.clippingPlanes) && n.clippingPlanes.length !== 0 || n.displacementMap && n.displacementScale !== 0 || n.alphaMap && n.alphaTest > 0 || n.map && n.alphaTest > 0 || n.alphaToCoverage === !0) {
			let e = a.uuid, t = n.uuid, r = u[e];
			r === void 0 && (r = {}, u[e] = r);
			let i = r[t];
			i === void 0 && (i = a.clone(), r[t] = i, n.addEventListener("dispose", C)), a = i;
		}
		if (a.visible = n.visible, a.wireframe = n.wireframe, i === 3 ? a.side = n.shadowSide === null ? n.side : n.shadowSide : a.side = n.shadowSide === null ? f[n.side] : n.shadowSide, a.alphaMap = n.alphaMap, a.alphaTest = n.alphaToCoverage === !0 ? .5 : n.alphaTest, a.map = n.map, a.clipShadows = n.clipShadows, a.clippingPlanes = n.clippingPlanes, a.clipIntersection = n.clipIntersection, a.displacementMap = n.displacementMap, a.displacementScale = n.displacementScale, a.displacementBias = n.displacementBias, a.wireframeLinewidth = n.wireframeLinewidth, a.linewidth = n.linewidth, r.isPointLight === !0 && a.isMeshDistanceMaterial === !0) {
			let t = e.properties.get(a);
			t.light = r;
		}
		return a;
	}
	function S(n, i, a, s, c) {
		if (n.visible === !1) return;
		if (n.layers.test(i.layers) && (n.isMesh || n.isLine || n.isPoints) && (n.castShadow || n.receiveShadow && c === 3) && (!n.frustumCulled || r.intersectsObject(n))) {
			n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse, n.matrixWorld);
			let r = t.update(n), l = n.material;
			if (Array.isArray(l)) {
				let t = r.groups;
				for (let u = 0, d = t.length; u < d; u++) {
					let d = t[u], f = l[d.materialIndex];
					if (f && f.visible) {
						let t = x(n, f, s, c);
						n.onBeforeShadow(e, n, i, a, r, t, d), e.renderBufferDirect(a, null, r, t, n, d), n.onAfterShadow(e, n, i, a, r, t, d);
					}
				}
			} else if (l.visible) {
				let t = x(n, l, s, c);
				n.onBeforeShadow(e, n, i, a, r, t, null), e.renderBufferDirect(a, null, r, t, n, null), n.onAfterShadow(e, n, i, a, r, t, null);
			}
		}
		let l = n.children;
		for (let e = 0, t = l.length; e < t; e++) S(l[e], i, a, s, c);
	}
	function C(e) {
		e.target.removeEventListener("dispose", C);
		for (let t in u) {
			let n = u[t], r = e.target.uuid;
			r in n && (n[r].dispose(), delete n[r]);
		}
	}
}
function WebGLState(e, t) {
	function n() {
		let t = !1, n = new Vector4(), r = null, i = new Vector4(0, 0, 0, 0);
		return {
			setMask: function(n) {
				r !== n && !t && (e.colorMask(n, n, n, n), r = n);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t, r, a, s, c) {
				c === !0 && (t *= s, r *= s, a *= s), n.set(t, r, a, s), i.equals(n) === !1 && (e.clearColor(t, r, a, s), i.copy(n));
			},
			reset: function() {
				t = !1, r = null, i.set(-1, 0, 0, 0);
			}
		};
	}
	function r() {
		let n = !1, r = !1, i = null, a = null, s = null;
		return {
			setReversed: function(e) {
				if (r !== e) {
					let n = t.get("EXT_clip_control");
					e ? n.clipControlEXT(n.LOWER_LEFT_EXT, n.ZERO_TO_ONE_EXT) : n.clipControlEXT(n.LOWER_LEFT_EXT, n.NEGATIVE_ONE_TO_ONE_EXT), r = e;
					let i = s;
					s = null, this.setClear(i);
				}
			},
			getReversed: function() {
				return r;
			},
			setTest: function(t) {
				t ? K(e.DEPTH_TEST) : q(e.DEPTH_TEST);
			},
			setMask: function(t) {
				i !== t && !n && (e.depthMask(t), i = t);
			},
			setFunc: function(t) {
				if (r && (t = ReversedDepthFuncs[t]), a !== t) {
					switch (t) {
						case 0:
							e.depthFunc(e.NEVER);
							break;
						case 1:
							e.depthFunc(e.ALWAYS);
							break;
						case 2:
							e.depthFunc(e.LESS);
							break;
						case 3:
							e.depthFunc(e.LEQUAL);
							break;
						case 4:
							e.depthFunc(e.EQUAL);
							break;
						case 5:
							e.depthFunc(e.GEQUAL);
							break;
						case 6:
							e.depthFunc(e.GREATER);
							break;
						case 7:
							e.depthFunc(e.NOTEQUAL);
							break;
						default: e.depthFunc(e.LEQUAL);
					}
					a = t;
				}
			},
			setLocked: function(e) {
				n = e;
			},
			setClear: function(t) {
				s !== t && (s = t, r && (t = 1 - t), e.clearDepth(t));
			},
			reset: function() {
				n = !1, i = null, a = null, s = null, r = !1;
			}
		};
	}
	function i() {
		let t = !1, n = null, r = null, i = null, a = null, s = null, c = null, l = null, u = null;
		return {
			setTest: function(n) {
				t || (n ? K(e.STENCIL_TEST) : q(e.STENCIL_TEST));
			},
			setMask: function(r) {
				n !== r && !t && (e.stencilMask(r), n = r);
			},
			setFunc: function(t, n, s) {
				(r !== t || i !== n || a !== s) && (e.stencilFunc(t, n, s), r = t, i = n, a = s);
			},
			setOp: function(t, n, r) {
				(s !== t || c !== n || l !== r) && (e.stencilOp(t, n, r), s = t, c = n, l = r);
			},
			setLocked: function(e) {
				t = e;
			},
			setClear: function(t) {
				u !== t && (e.clearStencil(t), u = t);
			},
			reset: function() {
				t = !1, n = null, r = null, i = null, a = null, s = null, c = null, l = null, u = null;
			}
		};
	}
	let a = new n(), s = new r(), c = new i(), l = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap(), d = {}, f = {}, p = {}, h = /* @__PURE__ */ new WeakMap(), g = [], _ = null, v = !1, y = null, b = null, x = null, S = null, C = null, w = null, T = null, E = new Color$1(0, 0, 0), D = 0, O = !1, k = null, A = null, j = null, N = null, P = null, ee = e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS), F = !1, I = 0, R = e.getParameter(e.VERSION);
	R.indexOf("WebGL") === -1 ? R.indexOf("OpenGL ES") !== -1 && (I = parseFloat(/^OpenGL ES (\d)/.exec(R)[1]), F = I >= 2) : (I = parseFloat(/^WebGL (\d)/.exec(R)[1]), F = I >= 1);
	let z = null, te = {}, B = e.getParameter(e.SCISSOR_BOX), ne = e.getParameter(e.VIEWPORT), H = new Vector4().fromArray(B), U = new Vector4().fromArray(ne);
	function re(t, n, r, i) {
		let a = /* @__PURE__ */ new Uint8Array(4), s = e.createTexture();
		e.bindTexture(t, s), e.texParameteri(t, e.TEXTURE_MIN_FILTER, e.NEAREST), e.texParameteri(t, e.TEXTURE_MAG_FILTER, e.NEAREST);
		for (let s = 0; s < r; s++) t === e.TEXTURE_3D || t === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, i, 0, e.RGBA, e.UNSIGNED_BYTE, a) : e.texImage2D(n + s, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, a);
		return s;
	}
	let W = {};
	W[e.TEXTURE_2D] = re(e.TEXTURE_2D, e.TEXTURE_2D, 1), W[e.TEXTURE_CUBE_MAP] = re(e.TEXTURE_CUBE_MAP, e.TEXTURE_CUBE_MAP_POSITIVE_X, 6), W[e.TEXTURE_2D_ARRAY] = re(e.TEXTURE_2D_ARRAY, e.TEXTURE_2D_ARRAY, 1, 1), W[e.TEXTURE_3D] = re(e.TEXTURE_3D, e.TEXTURE_3D, 1, 1), a.setClear(0, 0, 0, 1), s.setClear(1), c.setClear(0), K(e.DEPTH_TEST), s.setFunc(3), ue(!1), de(1), K(e.CULL_FACE), ce(0);
	function K(t) {
		d[t] !== !0 && (e.enable(t), d[t] = !0);
	}
	function q(t) {
		d[t] !== !1 && (e.disable(t), d[t] = !1);
	}
	function ie(t, n) {
		return p[t] === n ? !1 : (e.bindFramebuffer(t, n), p[t] = n, t === e.DRAW_FRAMEBUFFER && (p[e.FRAMEBUFFER] = n), t === e.FRAMEBUFFER && (p[e.DRAW_FRAMEBUFFER] = n), !0);
	}
	function J(t, n) {
		let r = g, i = !1;
		if (t) {
			r = h.get(n), r === void 0 && (r = [], h.set(n, r));
			let a = t.textures;
			if (r.length !== a.length || r[0] !== e.COLOR_ATTACHMENT0) {
				for (let t = 0, n = a.length; t < n; t++) r[t] = e.COLOR_ATTACHMENT0 + t;
				r.length = a.length, i = !0;
			}
		} else r[0] !== e.BACK && (r[0] = e.BACK, i = !0);
		i && e.drawBuffers(r);
	}
	function ae(t) {
		return _ === t ? !1 : (e.useProgram(t), _ = t, !0);
	}
	let oe = {
		100: e.FUNC_ADD,
		101: e.FUNC_SUBTRACT,
		102: e.FUNC_REVERSE_SUBTRACT
	};
	oe[103] = e.MIN, oe[104] = e.MAX;
	let se = {
		200: e.ZERO,
		201: e.ONE,
		202: e.SRC_COLOR,
		204: e.SRC_ALPHA,
		210: e.SRC_ALPHA_SATURATE,
		208: e.DST_COLOR,
		206: e.DST_ALPHA,
		203: e.ONE_MINUS_SRC_COLOR,
		205: e.ONE_MINUS_SRC_ALPHA,
		209: e.ONE_MINUS_DST_COLOR,
		207: e.ONE_MINUS_DST_ALPHA,
		211: e.CONSTANT_COLOR,
		212: e.ONE_MINUS_CONSTANT_COLOR,
		213: e.CONSTANT_ALPHA,
		214: e.ONE_MINUS_CONSTANT_ALPHA
	};
	function ce(t, n, r, i, a, s, c, l, u, d) {
		if (t === 0) {
			v === !0 && (q(e.BLEND), v = !1);
			return;
		}
		if (v === !1 && (K(e.BLEND), v = !0), t !== 5) {
			if (t !== y || d !== O) {
				if ((b !== 100 || C !== 100) && (e.blendEquation(e.FUNC_ADD), b = 100, C = 100), d) switch (t) {
					case 1:
						e.blendFuncSeparate(e.ONE, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFunc(e.ONE, e.ONE);
						break;
					case 3:
						e.blendFuncSeparate(e.ZERO, e.ONE_MINUS_SRC_COLOR, e.ZERO, e.ONE);
						break;
					case 4:
						e.blendFuncSeparate(e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ZERO, e.ONE);
						break;
					default:
						error("WebGLState: Invalid blending: ", t);
						break;
				}
				else switch (t) {
					case 1:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA);
						break;
					case 2:
						e.blendFuncSeparate(e.SRC_ALPHA, e.ONE, e.ONE, e.ONE);
						break;
					case 3:
						error("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");
						break;
					case 4:
						error("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");
						break;
					default:
						error("WebGLState: Invalid blending: ", t);
						break;
				}
				x = null, S = null, w = null, T = null, E.set(0, 0, 0), D = 0, y = t, O = d;
			}
			return;
		}
		a ||= n, s ||= r, c ||= i, (n !== b || a !== C) && (e.blendEquationSeparate(oe[n], oe[a]), b = n, C = a), (r !== x || i !== S || s !== w || c !== T) && (e.blendFuncSeparate(se[r], se[i], se[s], se[c]), x = r, S = i, w = s, T = c), (l.equals(E) === !1 || u !== D) && (e.blendColor(l.r, l.g, l.b, u), E.copy(l), D = u), y = t, O = !1;
	}
	function le(t, n) {
		t.side === 2 ? q(e.CULL_FACE) : K(e.CULL_FACE);
		let r = t.side === 1;
		n && (r = !r), ue(r), t.blending === 1 && t.transparent === !1 ? ce(0) : ce(t.blending, t.blendEquation, t.blendSrc, t.blendDst, t.blendEquationAlpha, t.blendSrcAlpha, t.blendDstAlpha, t.blendColor, t.blendAlpha, t.premultipliedAlpha), s.setFunc(t.depthFunc), s.setTest(t.depthTest), s.setMask(t.depthWrite), a.setMask(t.colorWrite);
		let i = t.stencilWrite;
		c.setTest(i), i && (c.setMask(t.stencilWriteMask), c.setFunc(t.stencilFunc, t.stencilRef, t.stencilFuncMask), c.setOp(t.stencilFail, t.stencilZFail, t.stencilZPass)), pe(t.polygonOffset, t.polygonOffsetFactor, t.polygonOffsetUnits), t.alphaToCoverage === !0 ? K(e.SAMPLE_ALPHA_TO_COVERAGE) : q(e.SAMPLE_ALPHA_TO_COVERAGE);
	}
	function ue(t) {
		k !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), k = t);
	}
	function de(t) {
		t === 0 ? q(e.CULL_FACE) : (K(e.CULL_FACE), t !== A && (t === 1 ? e.cullFace(e.BACK) : t === 2 ? e.cullFace(e.FRONT) : e.cullFace(e.FRONT_AND_BACK))), A = t;
	}
	function fe(t) {
		t !== j && (F && e.lineWidth(t), j = t);
	}
	function pe(t, n, r) {
		t ? (K(e.POLYGON_OFFSET_FILL), (N !== n || P !== r) && (N = n, P = r, s.getReversed() && (n = -n), e.polygonOffset(n, r))) : q(e.POLYGON_OFFSET_FILL);
	}
	function me(t) {
		t ? K(e.SCISSOR_TEST) : q(e.SCISSOR_TEST);
	}
	function Y(t) {
		t === void 0 && (t = e.TEXTURE0 + ee - 1), z !== t && (e.activeTexture(t), z = t);
	}
	function he(t, n, r) {
		r === void 0 && (r = z === null ? e.TEXTURE0 + ee - 1 : z);
		let i = te[r];
		i === void 0 && (i = {
			type: void 0,
			texture: void 0
		}, te[r] = i), (i.type !== t || i.texture !== n) && (z !== r && (e.activeTexture(r), z = r), e.bindTexture(t, n || W[t]), i.type = t, i.texture = n);
	}
	function X() {
		let t = te[z];
		t !== void 0 && t.type !== void 0 && (e.bindTexture(t.type, null), t.type = void 0, t.texture = void 0);
	}
	function ge() {
		try {
			e.compressedTexImage2D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function Z() {
		try {
			e.compressedTexImage3D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function _e() {
		try {
			e.texSubImage2D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function Q() {
		try {
			e.texSubImage3D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function $() {
		try {
			e.compressedTexSubImage2D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function ve() {
		try {
			e.compressedTexSubImage3D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function ye() {
		try {
			e.texStorage2D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function be() {
		try {
			e.texStorage3D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function xe() {
		try {
			e.texImage2D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function Se() {
		try {
			e.texImage3D(...arguments);
		} catch (e) {
			error("WebGLState:", e);
		}
	}
	function Ce(t) {
		return f[t] === void 0 ? e.getParameter(t) : f[t];
	}
	function we(t, n) {
		f[t] !== n && (e.pixelStorei(t, n), f[t] = n);
	}
	function Te(t) {
		H.equals(t) === !1 && (e.scissor(t.x, t.y, t.z, t.w), H.copy(t));
	}
	function Ee(t) {
		U.equals(t) === !1 && (e.viewport(t.x, t.y, t.z, t.w), U.copy(t));
	}
	function De(t, n) {
		let r = u.get(n);
		r === void 0 && (r = /* @__PURE__ */ new WeakMap(), u.set(n, r));
		let i = r.get(t);
		i === void 0 && (i = e.getUniformBlockIndex(n, t.name), r.set(t, i));
	}
	function Oe(t, n) {
		let r = u.get(n).get(t);
		l.get(n) !== r && (e.uniformBlockBinding(n, r, t.__bindingPointIndex), l.set(n, r));
	}
	function ke() {
		e.disable(e.BLEND), e.disable(e.CULL_FACE), e.disable(e.DEPTH_TEST), e.disable(e.POLYGON_OFFSET_FILL), e.disable(e.SCISSOR_TEST), e.disable(e.STENCIL_TEST), e.disable(e.SAMPLE_ALPHA_TO_COVERAGE), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ONE, e.ZERO), e.blendFuncSeparate(e.ONE, e.ZERO, e.ONE, e.ZERO), e.blendColor(0, 0, 0, 0), e.colorMask(!0, !0, !0, !0), e.clearColor(0, 0, 0, 0), e.depthMask(!0), e.depthFunc(e.LESS), s.setReversed(!1), e.clearDepth(1), e.stencilMask(4294967295), e.stencilFunc(e.ALWAYS, 0, 4294967295), e.stencilOp(e.KEEP, e.KEEP, e.KEEP), e.clearStencil(0), e.cullFace(e.BACK), e.frontFace(e.CCW), e.polygonOffset(0, 0), e.activeTexture(e.TEXTURE0), e.bindFramebuffer(e.FRAMEBUFFER, null), e.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), e.bindFramebuffer(e.READ_FRAMEBUFFER, null), e.useProgram(null), e.lineWidth(1), e.scissor(0, 0, e.canvas.width, e.canvas.height), e.viewport(0, 0, e.canvas.width, e.canvas.height), e.pixelStorei(e.PACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_ALIGNMENT, 4), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, e.BROWSER_DEFAULT_WEBGL), e.pixelStorei(e.PACK_ROW_LENGTH, 0), e.pixelStorei(e.PACK_SKIP_PIXELS, 0), e.pixelStorei(e.PACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_ROW_LENGTH, 0), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_PIXELS, 0), e.pixelStorei(e.UNPACK_SKIP_ROWS, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), d = {}, f = {}, z = null, te = {}, p = {}, h = /* @__PURE__ */ new WeakMap(), g = [], _ = null, v = !1, y = null, b = null, x = null, S = null, C = null, w = null, T = null, E = new Color$1(0, 0, 0), D = 0, O = !1, k = null, A = null, j = null, N = null, P = null, H.set(0, 0, e.canvas.width, e.canvas.height), U.set(0, 0, e.canvas.width, e.canvas.height), a.reset(), s.reset(), c.reset();
	}
	return {
		buffers: {
			color: a,
			depth: s,
			stencil: c
		},
		enable: K,
		disable: q,
		bindFramebuffer: ie,
		drawBuffers: J,
		useProgram: ae,
		setBlending: ce,
		setMaterial: le,
		setFlipSided: ue,
		setCullFace: de,
		setLineWidth: fe,
		setPolygonOffset: pe,
		setScissorTest: me,
		activeTexture: Y,
		bindTexture: he,
		unbindTexture: X,
		compressedTexImage2D: ge,
		compressedTexImage3D: Z,
		texImage2D: xe,
		texImage3D: Se,
		pixelStorei: we,
		getParameter: Ce,
		updateUBOMapping: De,
		uniformBlockBinding: Oe,
		texStorage2D: ye,
		texStorage3D: be,
		texSubImage2D: _e,
		texSubImage3D: Q,
		compressedTexSubImage2D: $,
		compressedTexSubImage3D: ve,
		scissor: Te,
		viewport: Ee,
		reset: ke
	};
}
function WebGLTextures(e, t, n, r, i, a, s) {
	let c = t.has("WEBGL_multisampled_render_to_texture") ? t.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), u = new Vector2(), d = /* @__PURE__ */ new WeakMap(), f = /* @__PURE__ */ new Set(), p, h = /* @__PURE__ */ new WeakMap(), g = !1;
	try {
		g = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
	} catch {}
	function _(e, t) {
		return g ? new OffscreenCanvas(e, t) : createElementNS("canvas");
	}
	function v(e, t, n) {
		let r = 1, i = ge(e);
		if ((i.width > n || i.height > n) && (r = n / Math.max(i.width, i.height)), r < 1) if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap || typeof VideoFrame < "u" && e instanceof VideoFrame) {
			let n = Math.floor(r * i.width), a = Math.floor(r * i.height);
			p === void 0 && (p = _(n, a));
			let s = t ? _(n, a) : p;
			return s.width = n, s.height = a, s.getContext("2d").drawImage(e, 0, 0, n, a), warn("WebGLRenderer: Texture has been resized from (" + i.width + "x" + i.height + ") to (" + n + "x" + a + ")."), s;
		} else return "data" in e && warn("WebGLRenderer: Image in DataTexture is too big (" + i.width + "x" + i.height + ")."), e;
		return e;
	}
	function y(e) {
		return e.generateMipmaps;
	}
	function b(t) {
		e.generateMipmap(t);
	}
	function x(t) {
		return t.isWebGLCubeRenderTarget ? e.TEXTURE_CUBE_MAP : t.isWebGL3DRenderTarget ? e.TEXTURE_3D : t.isWebGLArrayRenderTarget || t.isCompressedArrayTexture ? e.TEXTURE_2D_ARRAY : e.TEXTURE_2D;
	}
	function S(n, r, i, a, s, c = !1) {
		if (n !== null) {
			if (e[n] !== void 0) return e[n];
			warn("WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n + "'");
		}
		let l;
		a && (l = t.get("EXT_texture_norm16"), l || warn("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));
		let u = r;
		if (r === e.RED && (i === e.FLOAT && (u = e.R32F), i === e.HALF_FLOAT && (u = e.R16F), i === e.UNSIGNED_BYTE && (u = e.R8), i === e.UNSIGNED_SHORT && l && (u = l.R16_EXT), i === e.SHORT && l && (u = l.R16_SNORM_EXT)), r === e.RED_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.R8UI), i === e.UNSIGNED_SHORT && (u = e.R16UI), i === e.UNSIGNED_INT && (u = e.R32UI), i === e.BYTE && (u = e.R8I), i === e.SHORT && (u = e.R16I), i === e.INT && (u = e.R32I)), r === e.RG && (i === e.FLOAT && (u = e.RG32F), i === e.HALF_FLOAT && (u = e.RG16F), i === e.UNSIGNED_BYTE && (u = e.RG8), i === e.UNSIGNED_SHORT && l && (u = l.RG16_EXT), i === e.SHORT && l && (u = l.RG16_SNORM_EXT)), r === e.RG_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RG8UI), i === e.UNSIGNED_SHORT && (u = e.RG16UI), i === e.UNSIGNED_INT && (u = e.RG32UI), i === e.BYTE && (u = e.RG8I), i === e.SHORT && (u = e.RG16I), i === e.INT && (u = e.RG32I)), r === e.RGB_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RGB8UI), i === e.UNSIGNED_SHORT && (u = e.RGB16UI), i === e.UNSIGNED_INT && (u = e.RGB32UI), i === e.BYTE && (u = e.RGB8I), i === e.SHORT && (u = e.RGB16I), i === e.INT && (u = e.RGB32I)), r === e.RGBA_INTEGER && (i === e.UNSIGNED_BYTE && (u = e.RGBA8UI), i === e.UNSIGNED_SHORT && (u = e.RGBA16UI), i === e.UNSIGNED_INT && (u = e.RGBA32UI), i === e.BYTE && (u = e.RGBA8I), i === e.SHORT && (u = e.RGBA16I), i === e.INT && (u = e.RGBA32I)), r === e.RGB && (i === e.UNSIGNED_SHORT && l && (u = l.RGB16_EXT), i === e.SHORT && l && (u = l.RGB16_SNORM_EXT), i === e.UNSIGNED_INT_5_9_9_9_REV && (u = e.RGB9_E5), i === e.UNSIGNED_INT_10F_11F_11F_REV && (u = e.R11F_G11F_B10F)), r === e.RGBA) {
			let t = c ? LinearTransfer : ColorManagement.getTransfer(s);
			i === e.FLOAT && (u = e.RGBA32F), i === e.HALF_FLOAT && (u = e.RGBA16F), i === e.UNSIGNED_BYTE && (u = t === "srgb" ? e.SRGB8_ALPHA8 : e.RGBA8), i === e.UNSIGNED_SHORT && l && (u = l.RGBA16_EXT), i === e.SHORT && l && (u = l.RGBA16_SNORM_EXT), i === e.UNSIGNED_SHORT_4_4_4_4 && (u = e.RGBA4), i === e.UNSIGNED_SHORT_5_5_5_1 && (u = e.RGB5_A1);
		}
		return (u === e.R16F || u === e.R32F || u === e.RG16F || u === e.RG32F || u === e.RGBA16F || u === e.RGBA32F) && t.get("EXT_color_buffer_float"), u;
	}
	function C(t, n) {
		let r;
		return t ? n === null || n === 1014 || n === 1020 ? r = e.DEPTH24_STENCIL8 : n === 1015 ? r = e.DEPTH32F_STENCIL8 : n === 1012 && (r = e.DEPTH24_STENCIL8, warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : n === null || n === 1014 || n === 1020 ? r = e.DEPTH_COMPONENT24 : n === 1015 ? r = e.DEPTH_COMPONENT32F : n === 1012 && (r = e.DEPTH_COMPONENT16), r;
	}
	function w(e, t) {
		return y(e) === !0 || e.isFramebufferTexture && e.minFilter !== 1003 && e.minFilter !== 1006 ? Math.log2(Math.max(t.width, t.height)) + 1 : e.mipmaps !== void 0 && e.mipmaps.length > 0 ? e.mipmaps.length : e.isCompressedTexture && Array.isArray(e.image) ? t.mipmaps.length : 1;
	}
	function T(e) {
		let t = e.target;
		t.removeEventListener("dispose", T), D(t), t.isVideoTexture && d.delete(t), t.isHTMLTexture && f.delete(t);
	}
	function E(e) {
		let t = e.target;
		t.removeEventListener("dispose", E), k(t);
	}
	function D(e) {
		let t = r.get(e);
		if (t.__webglInit === void 0) return;
		let n = e.source, i = h.get(n);
		if (i) {
			let r = i[t.__cacheKey];
			r.usedTimes--, r.usedTimes === 0 && O(e), Object.keys(i).length === 0 && h.delete(n);
		}
		r.remove(e);
	}
	function O(t) {
		let n = r.get(t);
		e.deleteTexture(n.__webglTexture);
		let i = t.source, a = h.get(i);
		delete a[n.__cacheKey], s.memory.textures--;
	}
	function k(t) {
		let n = r.get(t);
		if (t.depthTexture && (t.depthTexture.dispose(), r.remove(t.depthTexture)), t.isWebGLCubeRenderTarget) for (let t = 0; t < 6; t++) {
			if (Array.isArray(n.__webglFramebuffer[t])) for (let r = 0; r < n.__webglFramebuffer[t].length; r++) e.deleteFramebuffer(n.__webglFramebuffer[t][r]);
			else e.deleteFramebuffer(n.__webglFramebuffer[t]);
			n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer[t]);
		}
		else {
			if (Array.isArray(n.__webglFramebuffer)) for (let t = 0; t < n.__webglFramebuffer.length; t++) e.deleteFramebuffer(n.__webglFramebuffer[t]);
			else e.deleteFramebuffer(n.__webglFramebuffer);
			if (n.__webglDepthbuffer && e.deleteRenderbuffer(n.__webglDepthbuffer), n.__webglMultisampledFramebuffer && e.deleteFramebuffer(n.__webglMultisampledFramebuffer), n.__webglColorRenderbuffer) for (let t = 0; t < n.__webglColorRenderbuffer.length; t++) n.__webglColorRenderbuffer[t] && e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);
			n.__webglDepthRenderbuffer && e.deleteRenderbuffer(n.__webglDepthRenderbuffer);
		}
		let i = t.textures;
		for (let t = 0, n = i.length; t < n; t++) {
			let n = r.get(i[t]);
			n.__webglTexture && (e.deleteTexture(n.__webglTexture), s.memory.textures--), r.remove(i[t]);
		}
		r.remove(t);
	}
	let A = 0;
	function j() {
		A = 0;
	}
	function N() {
		return A;
	}
	function P(e) {
		A = e;
	}
	function ee() {
		let e = A;
		return e >= i.maxTextures && warn("WebGLTextures: Trying to use " + e + " texture units while this GPU supports only " + i.maxTextures), A += 1, e;
	}
	function F(e) {
		let t = [];
		return t.push(e.wrapS), t.push(e.wrapT), t.push(e.wrapR || 0), t.push(e.magFilter), t.push(e.minFilter), t.push(e.anisotropy), t.push(e.internalFormat), t.push(e.format), t.push(e.type), t.push(e.generateMipmaps), t.push(e.premultiplyAlpha), t.push(e.flipY), t.push(e.unpackAlignment), t.push(e.colorSpace), t.join();
	}
	function I(t, i) {
		let a = r.get(t);
		if (t.isVideoTexture && he(t), t.isRenderTargetTexture === !1 && t.isExternalTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			let e = t.image;
			if (e === null) warn("WebGLRenderer: Texture marked for update but no image data found.");
			else if (e.complete === !1) warn("WebGLRenderer: Texture marked for update but image is incomplete");
			else {
				q(a, t, i);
				return;
			}
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function R(t, i) {
		let a = r.get(t);
		if (t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version) {
			q(a, t, i);
			return;
		} else t.isExternalTexture && (a.__webglTexture = t.sourceTexture ? t.sourceTexture : null);
		n.bindTexture(e.TEXTURE_2D_ARRAY, a.__webglTexture, e.TEXTURE0 + i);
	}
	function z(t, i) {
		let a = r.get(t);
		if (t.isRenderTargetTexture === !1 && t.version > 0 && a.__version !== t.version) {
			q(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_3D, a.__webglTexture, e.TEXTURE0 + i);
	}
	function te(t, i) {
		let a = r.get(t);
		if (t.isCubeDepthTexture !== !0 && t.version > 0 && a.__version !== t.version) {
			ie(a, t, i);
			return;
		}
		n.bindTexture(e.TEXTURE_CUBE_MAP, a.__webglTexture, e.TEXTURE0 + i);
	}
	let B = {
		[RepeatWrapping]: e.REPEAT,
		[ClampToEdgeWrapping]: e.CLAMP_TO_EDGE,
		[MirroredRepeatWrapping]: e.MIRRORED_REPEAT
	}, ne = {
		[NearestFilter]: e.NEAREST,
		[NearestMipmapNearestFilter]: e.NEAREST_MIPMAP_NEAREST,
		[NearestMipmapLinearFilter]: e.NEAREST_MIPMAP_LINEAR,
		[LinearFilter]: e.LINEAR,
		[LinearMipmapNearestFilter]: e.LINEAR_MIPMAP_NEAREST,
		[LinearMipmapLinearFilter]: e.LINEAR_MIPMAP_LINEAR
	}, H = {
		512: e.NEVER,
		519: e.ALWAYS,
		513: e.LESS,
		515: e.LEQUAL,
		514: e.EQUAL,
		518: e.GEQUAL,
		516: e.GREATER,
		517: e.NOTEQUAL
	};
	function U(n, a) {
		if (a.type === 1015 && t.has("OES_texture_float_linear") === !1 && (a.magFilter === 1006 || a.magFilter === 1007 || a.magFilter === 1005 || a.magFilter === 1008 || a.minFilter === 1006 || a.minFilter === 1007 || a.minFilter === 1005 || a.minFilter === 1008) && warn("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), e.texParameteri(n, e.TEXTURE_WRAP_S, B[a.wrapS]), e.texParameteri(n, e.TEXTURE_WRAP_T, B[a.wrapT]), (n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY) && e.texParameteri(n, e.TEXTURE_WRAP_R, B[a.wrapR]), e.texParameteri(n, e.TEXTURE_MAG_FILTER, ne[a.magFilter]), e.texParameteri(n, e.TEXTURE_MIN_FILTER, ne[a.minFilter]), a.compareFunction && (e.texParameteri(n, e.TEXTURE_COMPARE_MODE, e.COMPARE_REF_TO_TEXTURE), e.texParameteri(n, e.TEXTURE_COMPARE_FUNC, H[a.compareFunction])), t.has("EXT_texture_filter_anisotropic") === !0) {
			if (a.magFilter === 1003 || a.minFilter !== 1005 && a.minFilter !== 1008 || a.type === 1015 && t.has("OES_texture_float_linear") === !1) return;
			if (a.anisotropy > 1 || r.get(a).__currentAnisotropy) {
				let s = t.get("EXT_texture_filter_anisotropic");
				e.texParameterf(n, s.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(a.anisotropy, i.getMaxAnisotropy())), r.get(a).__currentAnisotropy = a.anisotropy;
			}
		}
	}
	function re(t, n) {
		let r = !1;
		t.__webglInit === void 0 && (t.__webglInit = !0, n.addEventListener("dispose", T));
		let i = n.source, a = h.get(i);
		a === void 0 && (a = {}, h.set(i, a));
		let c = F(n);
		if (c !== t.__cacheKey) {
			a[c] === void 0 && (a[c] = {
				texture: e.createTexture(),
				usedTimes: 0
			}, s.memory.textures++, r = !0), a[c].usedTimes++;
			let i = a[t.__cacheKey];
			i !== void 0 && (a[t.__cacheKey].usedTimes--, i.usedTimes === 0 && O(n)), t.__cacheKey = c, t.__webglTexture = a[c].texture;
		}
		return r;
	}
	function W(e, t, n) {
		return Math.floor(Math.floor(e / n) / t);
	}
	function K(t, r, i, a) {
		let s = 4, c = t.updateRanges;
		if (c.length === 0) n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r.width, r.height, i, a, r.data);
		else {
			c.sort((e, t) => e.start - t.start);
			let s = 0;
			for (let e = 1; e < c.length; e++) {
				let t = c[s], n = c[e], i = t.start + t.count, a = W(n.start, r.width, 4), l = W(t.start, r.width, 4);
				n.start <= i + 1 && a === l && W(n.start + n.count - 1, r.width, 4) === a ? t.count = Math.max(t.count, n.start + n.count - t.start) : (++s, c[s] = n);
			}
			c.length = s + 1;
			let l = n.getParameter(e.UNPACK_ROW_LENGTH), u = n.getParameter(e.UNPACK_SKIP_PIXELS), d = n.getParameter(e.UNPACK_SKIP_ROWS);
			n.pixelStorei(e.UNPACK_ROW_LENGTH, r.width);
			for (let t = 0, s = c.length; t < s; t++) {
				let s = c[t], l = Math.floor(s.start / 4), u = Math.ceil(s.count / 4), d = l % r.width, f = Math.floor(l / r.width), p = u, h = 1;
				n.pixelStorei(e.UNPACK_SKIP_PIXELS, d), n.pixelStorei(e.UNPACK_SKIP_ROWS, f), n.texSubImage2D(e.TEXTURE_2D, 0, d, f, p, 1, i, a, r.data);
			}
			t.clearUpdateRanges(), n.pixelStorei(e.UNPACK_ROW_LENGTH, l), n.pixelStorei(e.UNPACK_SKIP_PIXELS, u), n.pixelStorei(e.UNPACK_SKIP_ROWS, d);
		}
	}
	function q(t, s, c) {
		let l = e.TEXTURE_2D;
		(s.isDataArrayTexture || s.isCompressedArrayTexture) && (l = e.TEXTURE_2D_ARRAY), s.isData3DTexture && (l = e.TEXTURE_3D);
		let u = re(t, s), d = s.source;
		n.bindTexture(l, t.__webglTexture, e.TEXTURE0 + c);
		let p = r.get(d);
		if (d.version !== p.__version || u === !0) {
			if (n.activeTexture(e.TEXTURE0 + c), !(typeof ImageBitmap < "u" && s.image instanceof ImageBitmap)) {
				let t = ColorManagement.getPrimaries(ColorManagement.workingColorSpace), r = s.colorSpace === "" ? null : ColorManagement.getPrimaries(s.colorSpace), i = s.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
				n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, i);
			}
			n.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment);
			let t = v(s.image, !1, i.maxTextureSize);
			t = X(s, t);
			let r = a.convert(s.format, s.colorSpace), h = a.convert(s.type), g = S(s.internalFormat, r, h, s.normalized, s.colorSpace, s.isVideoTexture);
			U(l, s);
			let _, x = s.mipmaps, T = s.isVideoTexture !== !0, E = p.__version === void 0 || u === !0, D = d.dataReady, O = w(s, t);
			if (s.isDepthTexture) g = C(s.format === DepthStencilFormat, s.type), E && (T ? n.texStorage2D(e.TEXTURE_2D, 1, g, t.width, t.height) : n.texImage2D(e.TEXTURE_2D, 0, g, t.width, t.height, 0, r, h, null));
			else if (s.isDataTexture) if (x.length > 0) {
				T && E && n.texStorage2D(e.TEXTURE_2D, O, g, x[0].width, x[0].height);
				for (let t = 0, i = x.length; t < i; t++) _ = x[t], T ? D && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, r, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, r, h, _.data);
				s.generateMipmaps = !1;
			} else T ? (E && n.texStorage2D(e.TEXTURE_2D, O, g, t.width, t.height), D && K(s, t, r, h)) : n.texImage2D(e.TEXTURE_2D, 0, g, t.width, t.height, 0, r, h, t.data);
			else if (s.isCompressedTexture) if (s.isCompressedArrayTexture) {
				T && E && n.texStorage3D(e.TEXTURE_2D_ARRAY, O, g, x[0].width, x[0].height, t.depth);
				for (let i = 0, a = x.length; i < a; i++) if (_ = x[i], s.format !== 1023) if (r !== null) if (T) {
					if (D) if (s.layerUpdates.size > 0) {
						let t = getByteLength(_.width, _.height, s.format, s.type);
						for (let a of s.layerUpdates) {
							let s = _.data.subarray(a * t / _.data.BYTES_PER_ELEMENT, (a + 1) * t / _.data.BYTES_PER_ELEMENT);
							n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, a, _.width, _.height, 1, r, s);
						}
						s.clearLayerUpdates();
					} else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, _.width, _.height, t.depth, r, _.data);
				} else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY, i, g, _.width, _.height, t.depth, 0, _.data, 0, 0);
				else warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
				else T ? D && n.texSubImage3D(e.TEXTURE_2D_ARRAY, i, 0, 0, 0, _.width, _.height, t.depth, r, h, _.data) : n.texImage3D(e.TEXTURE_2D_ARRAY, i, g, _.width, _.height, t.depth, 0, r, h, _.data);
			} else {
				T && E && n.texStorage2D(e.TEXTURE_2D, O, g, x[0].width, x[0].height);
				for (let t = 0, i = x.length; t < i; t++) _ = x[t], s.format === 1023 ? T ? D && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, r, h, _.data) : n.texImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, r, h, _.data) : r === null ? warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : T ? D && n.compressedTexSubImage2D(e.TEXTURE_2D, t, 0, 0, _.width, _.height, r, _.data) : n.compressedTexImage2D(e.TEXTURE_2D, t, g, _.width, _.height, 0, _.data);
			}
			else if (s.isDataArrayTexture) if (T) {
				if (E && n.texStorage3D(e.TEXTURE_2D_ARRAY, O, g, t.width, t.height, t.depth), D) if (s.layerUpdates.size > 0) {
					let i = getByteLength(t.width, t.height, s.format, s.type);
					for (let a of s.layerUpdates) {
						let s = t.data.subarray(a * i / t.data.BYTES_PER_ELEMENT, (a + 1) * i / t.data.BYTES_PER_ELEMENT);
						n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, a, t.width, t.height, 1, r, h, s);
					}
					s.clearLayerUpdates();
				} else n.texSubImage3D(e.TEXTURE_2D_ARRAY, 0, 0, 0, 0, t.width, t.height, t.depth, r, h, t.data);
			} else n.texImage3D(e.TEXTURE_2D_ARRAY, 0, g, t.width, t.height, t.depth, 0, r, h, t.data);
			else if (s.isData3DTexture) T ? (E && n.texStorage3D(e.TEXTURE_3D, O, g, t.width, t.height, t.depth), D && n.texSubImage3D(e.TEXTURE_3D, 0, 0, 0, 0, t.width, t.height, t.depth, r, h, t.data)) : n.texImage3D(e.TEXTURE_3D, 0, g, t.width, t.height, t.depth, 0, r, h, t.data);
			else if (s.isFramebufferTexture) {
				if (E) if (T) n.texStorage2D(e.TEXTURE_2D, O, g, t.width, t.height);
				else {
					let i = t.width, a = t.height;
					for (let t = 0; t < O; t++) n.texImage2D(e.TEXTURE_2D, t, g, i, a, 0, r, h, null), i >>= 1, a >>= 1;
				}
			} else if (s.isHTMLTexture) {
				if ("texElementImage2D" in e) {
					let n = e.canvas;
					if (n.hasAttribute("layoutsubtree") || n.setAttribute("layoutsubtree", "true"), t.parentNode !== n) {
						n.appendChild(t), f.add(s), n.onpaint = (e) => {
							let t = e.changedElements;
							for (let e of f) t.includes(e.image) && (e.needsUpdate = !0);
						}, n.requestPaint();
						return;
					}
					if (e.texElementImage2D.length === 3) e.texElementImage2D(e.TEXTURE_2D, e.RGBA8, t);
					else {
						let n = 0, r = e.RGBA, i = e.RGBA, a = e.UNSIGNED_BYTE;
						e.texElementImage2D(e.TEXTURE_2D, 0, r, i, a, t);
					}
					e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE);
				}
			} else if (x.length > 0) {
				if (T && E) {
					let t = ge(x[0]);
					n.texStorage2D(e.TEXTURE_2D, O, g, t.width, t.height);
				}
				for (let t = 0, i = x.length; t < i; t++) _ = x[t], T ? D && n.texSubImage2D(e.TEXTURE_2D, t, 0, 0, r, h, _) : n.texImage2D(e.TEXTURE_2D, t, g, r, h, _);
				s.generateMipmaps = !1;
			} else if (T) {
				if (E) {
					let r = ge(t);
					n.texStorage2D(e.TEXTURE_2D, O, g, r.width, r.height);
				}
				D && n.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, r, h, t);
			} else n.texImage2D(e.TEXTURE_2D, 0, g, r, h, t);
			y(s) && b(l), p.__version = d.version, s.onUpdate && s.onUpdate(s);
		}
		t.__version = s.version;
	}
	function ie(t, s, c) {
		if (s.image.length !== 6) return;
		let l = re(t, s), u = s.source;
		n.bindTexture(e.TEXTURE_CUBE_MAP, t.__webglTexture, e.TEXTURE0 + c);
		let d = r.get(u);
		if (u.version !== d.__version || l === !0) {
			n.activeTexture(e.TEXTURE0 + c);
			let t = ColorManagement.getPrimaries(ColorManagement.workingColorSpace), r = s.colorSpace === "" ? null : ColorManagement.getPrimaries(s.colorSpace), f = s.colorSpace === "" || t === r ? e.NONE : e.BROWSER_DEFAULT_WEBGL;
			n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s.flipY), n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s.premultiplyAlpha), n.pixelStorei(e.UNPACK_ALIGNMENT, s.unpackAlignment), n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, f);
			let p = s.isCompressedTexture || s.image[0].isCompressedTexture, h = s.image[0] && s.image[0].isDataTexture, g = [];
			for (let e = 0; e < 6; e++) !p && !h ? g[e] = v(s.image[e], !0, i.maxCubemapSize) : g[e] = h ? s.image[e].image : s.image[e], g[e] = X(s, g[e]);
			let _ = g[0], x = a.convert(s.format, s.colorSpace), C = a.convert(s.type), T = S(s.internalFormat, x, C, s.normalized, s.colorSpace), E = s.isVideoTexture !== !0, D = d.__version === void 0 || l === !0, O = u.dataReady, k = w(s, _);
			U(e.TEXTURE_CUBE_MAP, s);
			let A;
			if (p) {
				E && D && n.texStorage2D(e.TEXTURE_CUBE_MAP, k, T, _.width, _.height);
				for (let t = 0; t < 6; t++) {
					A = g[t].mipmaps;
					for (let r = 0; r < A.length; r++) {
						let i = A[r];
						s.format === 1023 ? E ? O && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, x, C, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, T, i.width, i.height, 0, x, C, i.data) : x === null ? warn("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : E ? O && n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, 0, 0, i.width, i.height, x, i.data) : n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r, T, i.width, i.height, 0, i.data);
					}
				}
			} else {
				if (A = s.mipmaps, E && D) {
					A.length > 0 && k++;
					let t = ge(g[0]);
					n.texStorage2D(e.TEXTURE_CUBE_MAP, k, T, t.width, t.height);
				}
				for (let t = 0; t < 6; t++) if (h) {
					E ? O && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, g[t].width, g[t].height, x, C, g[t].data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, T, g[t].width, g[t].height, 0, x, C, g[t].data);
					for (let r = 0; r < A.length; r++) {
						let i = A[r].image[t].image;
						E ? O && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, i.width, i.height, x, C, i.data) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, T, i.width, i.height, 0, x, C, i.data);
					}
				} else {
					E ? O && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, 0, 0, x, C, g[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, 0, T, x, C, g[t]);
					for (let r = 0; r < A.length; r++) {
						let i = A[r];
						E ? O && n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, 0, 0, x, C, i.image[t]) : n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + t, r + 1, T, x, C, i.image[t]);
					}
				}
			}
			y(s) && b(e.TEXTURE_CUBE_MAP), d.__version = u.version, s.onUpdate && s.onUpdate(s);
		}
		t.__version = s.version;
	}
	function J(t, i, s, l, u, d) {
		let f = a.convert(s.format, s.colorSpace), p = a.convert(s.type), h = S(s.internalFormat, f, p, s.normalized, s.colorSpace), g = r.get(i), _ = r.get(s);
		if (_.__renderTarget = i, !g.__hasExternalTextures) {
			let t = Math.max(1, i.width >> d), r = Math.max(1, i.height >> d);
			u === e.TEXTURE_3D || u === e.TEXTURE_2D_ARRAY ? n.texImage3D(u, d, h, t, r, i.depth, 0, f, p, null) : n.texImage2D(u, d, h, t, r, 0, f, p, null);
		}
		n.bindFramebuffer(e.FRAMEBUFFER, t), Y(i) ? c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, l, u, _.__webglTexture, 0, me(i)) : (u === e.TEXTURE_2D || u >= e.TEXTURE_CUBE_MAP_POSITIVE_X && u <= e.TEXTURE_CUBE_MAP_NEGATIVE_Z) && e.framebufferTexture2D(e.FRAMEBUFFER, l, u, _.__webglTexture, d), n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function ae(t, n, r) {
		if (e.bindRenderbuffer(e.RENDERBUFFER, t), n.depthBuffer) {
			let i = n.depthTexture, a = i && i.isDepthTexture ? i.type : null, s = C(n.stencilBuffer, a), l = n.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
			Y(n) ? c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, me(n), s, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, me(n), s, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, s, n.width, n.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, l, e.RENDERBUFFER, t);
		} else {
			let t = n.textures;
			for (let i = 0; i < t.length; i++) {
				let s = t[i], l = a.convert(s.format, s.colorSpace), u = a.convert(s.type), d = S(s.internalFormat, l, u, s.normalized, s.colorSpace);
				Y(n) ? c.renderbufferStorageMultisampleEXT(e.RENDERBUFFER, me(n), d, n.width, n.height) : r ? e.renderbufferStorageMultisample(e.RENDERBUFFER, me(n), d, n.width, n.height) : e.renderbufferStorage(e.RENDERBUFFER, d, n.width, n.height);
			}
		}
		e.bindRenderbuffer(e.RENDERBUFFER, null);
	}
	function oe(t, i, s) {
		let l = i.isWebGLCubeRenderTarget === !0;
		if (n.bindFramebuffer(e.FRAMEBUFFER, t), !(i.depthTexture && i.depthTexture.isDepthTexture)) throw Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");
		let u = r.get(i.depthTexture);
		if (u.__renderTarget = i, (!u.__webglTexture || i.depthTexture.image.width !== i.width || i.depthTexture.image.height !== i.height) && (i.depthTexture.image.width = i.width, i.depthTexture.image.height = i.height, i.depthTexture.needsUpdate = !0), l) {
			if (u.__webglInit === void 0 && (u.__webglInit = !0, i.depthTexture.addEventListener("dispose", T)), u.__webglTexture === void 0) {
				u.__webglTexture = e.createTexture(), n.bindTexture(e.TEXTURE_CUBE_MAP, u.__webglTexture), U(e.TEXTURE_CUBE_MAP, i.depthTexture);
				let t = a.convert(i.depthTexture.format), r = a.convert(i.depthTexture.type), s;
				i.depthTexture.format === 1026 ? s = e.DEPTH_COMPONENT24 : i.depthTexture.format === 1027 && (s = e.DEPTH24_STENCIL8);
				for (let n = 0; n < 6; n++) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0, s, i.width, i.height, 0, t, r, null);
			}
		} else I(i.depthTexture, 0);
		let d = u.__webglTexture, f = me(i), p = l ? e.TEXTURE_CUBE_MAP_POSITIVE_X + s : e.TEXTURE_2D, h = i.depthTexture.format === 1027 ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
		if (i.depthTexture.format === 1026) Y(i) ? c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, h, p, d, 0, f) : e.framebufferTexture2D(e.FRAMEBUFFER, h, p, d, 0);
		else if (i.depthTexture.format === 1027) Y(i) ? c.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER, h, p, d, 0, f) : e.framebufferTexture2D(e.FRAMEBUFFER, h, p, d, 0);
		else throw Error("THREE.WebGLTextures: Unknown depthTexture format.");
	}
	function se(t) {
		let i = r.get(t), a = t.isWebGLCubeRenderTarget === !0;
		if (i.__boundDepthTexture !== t.depthTexture) {
			let e = t.depthTexture;
			if (i.__depthDisposeCallback && i.__depthDisposeCallback(), e) {
				let t = () => {
					delete i.__boundDepthTexture, delete i.__depthDisposeCallback, e.removeEventListener("dispose", t);
				};
				e.addEventListener("dispose", t), i.__depthDisposeCallback = t;
			}
			i.__boundDepthTexture = e;
		}
		if (t.depthTexture && !i.__autoAllocateDepthBuffer) if (a) for (let e = 0; e < 6; e++) oe(i.__webglFramebuffer[e], t, e);
		else {
			let e = t.texture.mipmaps;
			e && e.length > 0 ? oe(i.__webglFramebuffer[0], t, 0) : oe(i.__webglFramebuffer, t, 0);
		}
		else if (a) {
			i.__webglDepthbuffer = [];
			for (let r = 0; r < 6; r++) if (n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[r]), i.__webglDepthbuffer[r] === void 0) i.__webglDepthbuffer[r] = e.createRenderbuffer(), ae(i.__webglDepthbuffer[r], t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, a = i.__webglDepthbuffer[r];
				e.bindRenderbuffer(e.RENDERBUFFER, a), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, a);
			}
		} else {
			let r = t.texture.mipmaps;
			if (r && r.length > 0 ? n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer[0]) : n.bindFramebuffer(e.FRAMEBUFFER, i.__webglFramebuffer), i.__webglDepthbuffer === void 0) i.__webglDepthbuffer = e.createRenderbuffer(), ae(i.__webglDepthbuffer, t, !1);
			else {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, r = i.__webglDepthbuffer;
				e.bindRenderbuffer(e.RENDERBUFFER, r), e.framebufferRenderbuffer(e.FRAMEBUFFER, n, e.RENDERBUFFER, r);
			}
		}
		n.bindFramebuffer(e.FRAMEBUFFER, null);
	}
	function ce(t, n, i) {
		let a = r.get(t);
		n !== void 0 && J(a.__webglFramebuffer, t, t.texture, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, 0), i !== void 0 && se(t);
	}
	function le(t) {
		let i = t.texture, c = r.get(t), l = r.get(i);
		t.addEventListener("dispose", E);
		let u = t.textures, d = t.isWebGLCubeRenderTarget === !0, f = u.length > 1;
		if (f || (l.__webglTexture === void 0 && (l.__webglTexture = e.createTexture()), l.__version = i.version, s.memory.textures++), d) {
			c.__webglFramebuffer = [];
			for (let t = 0; t < 6; t++) if (i.mipmaps && i.mipmaps.length > 0) {
				c.__webglFramebuffer[t] = [];
				for (let n = 0; n < i.mipmaps.length; n++) c.__webglFramebuffer[t][n] = e.createFramebuffer();
			} else c.__webglFramebuffer[t] = e.createFramebuffer();
		} else {
			if (i.mipmaps && i.mipmaps.length > 0) {
				c.__webglFramebuffer = [];
				for (let t = 0; t < i.mipmaps.length; t++) c.__webglFramebuffer[t] = e.createFramebuffer();
			} else c.__webglFramebuffer = e.createFramebuffer();
			if (f) for (let t = 0, n = u.length; t < n; t++) {
				let n = r.get(u[t]);
				n.__webglTexture === void 0 && (n.__webglTexture = e.createTexture(), s.memory.textures++);
			}
			if (t.samples > 0 && Y(t) === !1) {
				c.__webglMultisampledFramebuffer = e.createFramebuffer(), c.__webglColorRenderbuffer = [], n.bindFramebuffer(e.FRAMEBUFFER, c.__webglMultisampledFramebuffer);
				for (let n = 0; n < u.length; n++) {
					let r = u[n];
					c.__webglColorRenderbuffer[n] = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, c.__webglColorRenderbuffer[n]);
					let i = a.convert(r.format, r.colorSpace), s = a.convert(r.type), l = S(r.internalFormat, i, s, r.normalized, r.colorSpace, t.isXRRenderTarget === !0), d = me(t);
					e.renderbufferStorageMultisample(e.RENDERBUFFER, d, l, t.width, t.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + n, e.RENDERBUFFER, c.__webglColorRenderbuffer[n]);
				}
				e.bindRenderbuffer(e.RENDERBUFFER, null), t.depthBuffer && (c.__webglDepthRenderbuffer = e.createRenderbuffer(), ae(c.__webglDepthRenderbuffer, t, !0)), n.bindFramebuffer(e.FRAMEBUFFER, null);
			}
		}
		if (d) {
			n.bindTexture(e.TEXTURE_CUBE_MAP, l.__webglTexture), U(e.TEXTURE_CUBE_MAP, i);
			for (let n = 0; n < 6; n++) if (i.mipmaps && i.mipmaps.length > 0) for (let r = 0; r < i.mipmaps.length; r++) J(c.__webglFramebuffer[n][r], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, r);
			else J(c.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, e.TEXTURE_CUBE_MAP_POSITIVE_X + n, 0);
			y(i) && b(e.TEXTURE_CUBE_MAP), n.unbindTexture();
		} else if (f) {
			for (let i = 0, a = u.length; i < a; i++) {
				let a = u[i], s = r.get(a), l = e.TEXTURE_2D;
				(t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (l = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(l, s.__webglTexture), U(l, a), J(c.__webglFramebuffer, t, a, e.COLOR_ATTACHMENT0 + i, l, 0), y(a) && b(l);
			}
			n.unbindTexture();
		} else {
			let r = e.TEXTURE_2D;
			if ((t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) && (r = t.isWebGL3DRenderTarget ? e.TEXTURE_3D : e.TEXTURE_2D_ARRAY), n.bindTexture(r, l.__webglTexture), U(r, i), i.mipmaps && i.mipmaps.length > 0) for (let n = 0; n < i.mipmaps.length; n++) J(c.__webglFramebuffer[n], t, i, e.COLOR_ATTACHMENT0, r, n);
			else J(c.__webglFramebuffer, t, i, e.COLOR_ATTACHMENT0, r, 0);
			y(i) && b(r), n.unbindTexture();
		}
		t.depthBuffer && se(t);
	}
	function ue(e) {
		let t = e.textures;
		for (let i = 0, a = t.length; i < a; i++) {
			let a = t[i];
			if (y(a)) {
				let t = x(e), i = r.get(a).__webglTexture;
				n.bindTexture(t, i), b(t), n.unbindTexture();
			}
		}
	}
	let de = [], fe = [];
	function pe(t) {
		if (t.samples > 0) {
			if (Y(t) === !1) {
				let i = t.textures, a = t.width, s = t.height, c = e.COLOR_BUFFER_BIT, u = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT, d = r.get(t), f = i.length > 1;
				if (f) for (let t = 0; t < i.length; t++) n.bindFramebuffer(e.FRAMEBUFFER, d.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, null), n.bindFramebuffer(e.FRAMEBUFFER, d.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, null, 0);
				n.bindFramebuffer(e.READ_FRAMEBUFFER, d.__webglMultisampledFramebuffer);
				let p = t.texture.mipmaps;
				p && p.length > 0 ? n.bindFramebuffer(e.DRAW_FRAMEBUFFER, d.__webglFramebuffer[0]) : n.bindFramebuffer(e.DRAW_FRAMEBUFFER, d.__webglFramebuffer);
				for (let n = 0; n < i.length; n++) {
					if (t.resolveDepthBuffer && (t.depthBuffer && (c |= e.DEPTH_BUFFER_BIT), t.stencilBuffer && t.resolveStencilBuffer && (c |= e.STENCIL_BUFFER_BIT)), f) {
						e.framebufferRenderbuffer(e.READ_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.RENDERBUFFER, d.__webglColorRenderbuffer[n]);
						let t = r.get(i[n]).__webglTexture;
						e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0);
					}
					e.blitFramebuffer(0, 0, a, s, 0, 0, a, s, c, e.NEAREST), l === !0 && (de.length = 0, fe.length = 0, de.push(e.COLOR_ATTACHMENT0 + n), t.depthBuffer && t.resolveDepthBuffer === !1 && (de.push(u), fe.push(u), e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, fe)), e.invalidateFramebuffer(e.READ_FRAMEBUFFER, de));
				}
				if (n.bindFramebuffer(e.READ_FRAMEBUFFER, null), n.bindFramebuffer(e.DRAW_FRAMEBUFFER, null), f) for (let t = 0; t < i.length; t++) {
					n.bindFramebuffer(e.FRAMEBUFFER, d.__webglMultisampledFramebuffer), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.RENDERBUFFER, d.__webglColorRenderbuffer[t]);
					let a = r.get(i[t]).__webglTexture;
					n.bindFramebuffer(e.FRAMEBUFFER, d.__webglFramebuffer), e.framebufferTexture2D(e.DRAW_FRAMEBUFFER, e.COLOR_ATTACHMENT0 + t, e.TEXTURE_2D, a, 0);
				}
				n.bindFramebuffer(e.DRAW_FRAMEBUFFER, d.__webglMultisampledFramebuffer);
			} else if (t.depthBuffer && t.resolveDepthBuffer === !1 && l) {
				let n = t.stencilBuffer ? e.DEPTH_STENCIL_ATTACHMENT : e.DEPTH_ATTACHMENT;
				e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER, [n]);
			}
		}
	}
	function me(e) {
		return Math.min(i.maxSamples, e.samples);
	}
	function Y(e) {
		let n = r.get(e);
		return e.samples > 0 && t.has("WEBGL_multisampled_render_to_texture") === !0 && n.__useRenderToTexture !== !1;
	}
	function he(e) {
		let t = s.render.frame;
		d.get(e) !== t && (d.set(e, t), e.update());
	}
	function X(e, t) {
		let n = e.colorSpace, r = e.format, i = e.type;
		return e.isCompressedTexture === !0 || e.isVideoTexture === !0 || n !== "srgb-linear" && n !== "" && (ColorManagement.getTransfer(n) === "srgb" ? (r !== 1023 || i !== 1009) && warn("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : error("WebGLTextures: Unsupported texture color space:", n)), t;
	}
	function ge(e) {
		return typeof HTMLImageElement < "u" && e instanceof HTMLImageElement ? (u.width = e.naturalWidth || e.width, u.height = e.naturalHeight || e.height) : typeof VideoFrame < "u" && e instanceof VideoFrame ? (u.width = e.displayWidth, u.height = e.displayHeight) : (u.width = e.width, u.height = e.height), u;
	}
	this.allocateTextureUnit = ee, this.resetTextureUnits = j, this.getTextureUnits = N, this.setTextureUnits = P, this.setTexture2D = I, this.setTexture2DArray = R, this.setTexture3D = z, this.setTextureCube = te, this.rebindTextures = ce, this.setupRenderTarget = le, this.updateRenderTargetMipmap = ue, this.updateMultisampleRenderTarget = pe, this.setupDepthRenderbuffer = se, this.setupFrameBufferTexture = J, this.useMultisampledRTT = Y, this.isReversedDepthBuffer = function() {
		return n.buffers.depth.getReversed();
	};
}
function WebGLUtils(e, t) {
	function n(n, r = "") {
		let i, a = ColorManagement.getTransfer(r);
		if (n === 1009) return e.UNSIGNED_BYTE;
		if (n === 1017) return e.UNSIGNED_SHORT_4_4_4_4;
		if (n === 1018) return e.UNSIGNED_SHORT_5_5_5_1;
		if (n === 35902) return e.UNSIGNED_INT_5_9_9_9_REV;
		if (n === 35899) return e.UNSIGNED_INT_10F_11F_11F_REV;
		if (n === 1010) return e.BYTE;
		if (n === 1011) return e.SHORT;
		if (n === 1012) return e.UNSIGNED_SHORT;
		if (n === 1013) return e.INT;
		if (n === 1014) return e.UNSIGNED_INT;
		if (n === 1015) return e.FLOAT;
		if (n === 1016) return e.HALF_FLOAT;
		if (n === 1021) return e.ALPHA;
		if (n === 1022) return e.RGB;
		if (n === 1023) return e.RGBA;
		if (n === 1026) return e.DEPTH_COMPONENT;
		if (n === 1027) return e.DEPTH_STENCIL;
		if (n === 1028) return e.RED;
		if (n === 1029) return e.RED_INTEGER;
		if (n === 1030) return e.RG;
		if (n === 1031) return e.RG_INTEGER;
		if (n === 1033) return e.RGBA_INTEGER;
		if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (a === "srgb") if (i = t.get("WEBGL_compressed_texture_s3tc_srgb"), i !== null) {
			if (n === 33776) return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;
			if (n === 33777) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
			if (n === 33778) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
			if (n === 33779) return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
		} else return null;
		else if (i = t.get("WEBGL_compressed_texture_s3tc"), i !== null) {
			if (n === 33776) return i.COMPRESSED_RGB_S3TC_DXT1_EXT;
			if (n === 33777) return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;
			if (n === 33778) return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;
			if (n === 33779) return i.COMPRESSED_RGBA_S3TC_DXT5_EXT;
		} else return null;
		if (n === 35840 || n === 35841 || n === 35842 || n === 35843) if (i = t.get("WEBGL_compressed_texture_pvrtc"), i !== null) {
			if (n === 35840) return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
			if (n === 35841) return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
			if (n === 35842) return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
			if (n === 35843) return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
		} else return null;
		if (n === 36196 || n === 37492 || n === 37496 || n === 37488 || n === 37489 || n === 37490 || n === 37491) if (i = t.get("WEBGL_compressed_texture_etc"), i !== null) {
			if (n === 36196 || n === 37492) return a === "srgb" ? i.COMPRESSED_SRGB8_ETC2 : i.COMPRESSED_RGB8_ETC2;
			if (n === 37496) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : i.COMPRESSED_RGBA8_ETC2_EAC;
			if (n === 37488) return i.COMPRESSED_R11_EAC;
			if (n === 37489) return i.COMPRESSED_SIGNED_R11_EAC;
			if (n === 37490) return i.COMPRESSED_RG11_EAC;
			if (n === 37491) return i.COMPRESSED_SIGNED_RG11_EAC;
		} else return null;
		if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) if (i = t.get("WEBGL_compressed_texture_astc"), i !== null) {
			if (n === 37808) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : i.COMPRESSED_RGBA_ASTC_4x4_KHR;
			if (n === 37809) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : i.COMPRESSED_RGBA_ASTC_5x4_KHR;
			if (n === 37810) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : i.COMPRESSED_RGBA_ASTC_5x5_KHR;
			if (n === 37811) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : i.COMPRESSED_RGBA_ASTC_6x5_KHR;
			if (n === 37812) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : i.COMPRESSED_RGBA_ASTC_6x6_KHR;
			if (n === 37813) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : i.COMPRESSED_RGBA_ASTC_8x5_KHR;
			if (n === 37814) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : i.COMPRESSED_RGBA_ASTC_8x6_KHR;
			if (n === 37815) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : i.COMPRESSED_RGBA_ASTC_8x8_KHR;
			if (n === 37816) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : i.COMPRESSED_RGBA_ASTC_10x5_KHR;
			if (n === 37817) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : i.COMPRESSED_RGBA_ASTC_10x6_KHR;
			if (n === 37818) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : i.COMPRESSED_RGBA_ASTC_10x8_KHR;
			if (n === 37819) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : i.COMPRESSED_RGBA_ASTC_10x10_KHR;
			if (n === 37820) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : i.COMPRESSED_RGBA_ASTC_12x10_KHR;
			if (n === 37821) return a === "srgb" ? i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : i.COMPRESSED_RGBA_ASTC_12x12_KHR;
		} else return null;
		if (n === 36492 || n === 36494 || n === 36495) if (i = t.get("EXT_texture_compression_bptc"), i !== null) {
			if (n === 36492) return a === "srgb" ? i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : i.COMPRESSED_RGBA_BPTC_UNORM_EXT;
			if (n === 36494) return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
			if (n === 36495) return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
		} else return null;
		if (n === 36283 || n === 36284 || n === 36285 || n === 36286) if (i = t.get("EXT_texture_compression_rgtc"), i !== null) {
			if (n === 36283) return i.COMPRESSED_RED_RGTC1_EXT;
			if (n === 36284) return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;
			if (n === 36285) return i.COMPRESSED_RED_GREEN_RGTC2_EXT;
			if (n === 36286) return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
		} else return null;
		return n === 1020 ? e.UNSIGNED_INT_24_8 : e[n] === void 0 ? null : e[n];
	}
	return { convert: n };
}
var _occlusion_vertex = "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", _occlusion_fragment = "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", WebXRDepthSensing = class {
	constructor() {
		this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
	}
	init(e, t) {
		if (this.texture === null) {
			let n = new ExternalTexture(e.texture);
			(e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) && (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = n;
		}
	}
	getMesh(e) {
		if (this.texture !== null && this.mesh === null) {
			let t = e.cameras[0].viewport, n = new ShaderMaterial({
				vertexShader: _occlusion_vertex,
				fragmentShader: _occlusion_fragment,
				uniforms: {
					depthColor: { value: this.texture },
					depthWidth: { value: t.z },
					depthHeight: { value: t.w }
				}
			});
			this.mesh = new Mesh(new PlaneGeometry(20, 20), n);
		}
		return this.mesh;
	}
	reset() {
		this.texture = null, this.mesh = null;
	}
	getDepthTexture() {
		return this.texture;
	}
}, WebXRManager = class extends EventDispatcher {
	constructor(e, t) {
		super();
		let n = this, r = null, i = 1, a = null, s = "local-floor", c = 1, l = null, u = null, d = null, f = null, p = null, h = null, g = typeof XRWebGLBinding < "u", _ = new WebXRDepthSensing(), v = {}, y = t.getContextAttributes(), b = null, x = null, S = [], C = [], w = new Vector2(), T = null, E = new PerspectiveCamera();
		E.viewport = new Vector4();
		let D = new PerspectiveCamera();
		D.viewport = new Vector4();
		let O = [E, D], k = new ArrayCamera(), A = null, j = null;
		this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(e) {
			let t = S[e];
			return t === void 0 && (t = new WebXRController(), S[e] = t), t.getTargetRaySpace();
		}, this.getControllerGrip = function(e) {
			let t = S[e];
			return t === void 0 && (t = new WebXRController(), S[e] = t), t.getGripSpace();
		}, this.getHand = function(e) {
			let t = S[e];
			return t === void 0 && (t = new WebXRController(), S[e] = t), t.getHandSpace();
		};
		function N(e) {
			let t = C.indexOf(e.inputSource);
			if (t === -1) return;
			let n = S[t];
			n !== void 0 && (n.update(e.inputSource, e.frame, l || a), n.dispatchEvent({
				type: e.type,
				data: e.inputSource
			}));
		}
		function P() {
			r.removeEventListener("select", N), r.removeEventListener("selectstart", N), r.removeEventListener("selectend", N), r.removeEventListener("squeeze", N), r.removeEventListener("squeezestart", N), r.removeEventListener("squeezeend", N), r.removeEventListener("end", P), r.removeEventListener("inputsourceschange", ee);
			for (let e = 0; e < S.length; e++) {
				let t = C[e];
				t !== null && (C[e] = null, S[e].disconnect(t));
			}
			A = null, j = null, _.reset();
			for (let e in v) delete v[e];
			e.setRenderTarget(b), p = null, f = null, d = null, r = null, x = null, H.stop(), n.isPresenting = !1, e.setPixelRatio(T), e.setSize(w.width, w.height, !1), n.dispatchEvent({ type: "sessionend" });
		}
		this.setFramebufferScaleFactor = function(e) {
			i = e, n.isPresenting === !0 && warn("WebXRManager: Cannot change framebuffer scale while presenting.");
		}, this.setReferenceSpaceType = function(e) {
			s = e, n.isPresenting === !0 && warn("WebXRManager: Cannot change reference space type while presenting.");
		}, this.getReferenceSpace = function() {
			return l || a;
		}, this.setReferenceSpace = function(e) {
			l = e;
		}, this.getBaseLayer = function() {
			return f === null ? p : f;
		}, this.getBinding = function() {
			return d === null && g && (d = new XRWebGLBinding(r, t)), d;
		}, this.getFrame = function() {
			return h;
		}, this.getSession = function() {
			return r;
		}, this.setSession = async function(u) {
			if (r = u, r !== null) {
				if (b = e.getRenderTarget(), r.addEventListener("select", N), r.addEventListener("selectstart", N), r.addEventListener("selectend", N), r.addEventListener("squeeze", N), r.addEventListener("squeezestart", N), r.addEventListener("squeezeend", N), r.addEventListener("end", P), r.addEventListener("inputsourceschange", ee), y.xrCompatible !== !0 && await t.makeXRCompatible(), T = e.getPixelRatio(), e.getSize(w), g && "createProjectionLayer" in XRWebGLBinding.prototype) {
					let n = null, a = null, s = null;
					y.depth && (s = y.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, n = y.stencil ? DepthStencilFormat : DepthFormat, a = y.stencil ? UnsignedInt248Type : UnsignedIntType);
					let c = {
						colorFormat: t.RGBA8,
						depthFormat: s,
						scaleFactor: i
					};
					d = this.getBinding(), f = d.createProjectionLayer(c), r.updateRenderState({ layers: [f] }), e.setPixelRatio(1), e.setSize(f.textureWidth, f.textureHeight, !1), x = new WebGLRenderTarget(f.textureWidth, f.textureHeight, {
						format: RGBAFormat,
						type: UnsignedByteType,
						depthTexture: new DepthTexture(f.textureWidth, f.textureHeight, a, void 0, void 0, void 0, void 0, void 0, void 0, n),
						stencilBuffer: y.stencil,
						colorSpace: e.outputColorSpace,
						samples: y.antialias ? 4 : 0,
						resolveDepthBuffer: f.ignoreDepthValues === !1,
						resolveStencilBuffer: f.ignoreDepthValues === !1
					});
				} else {
					let n = {
						antialias: y.antialias,
						alpha: !0,
						depth: y.depth,
						stencil: y.stencil,
						framebufferScaleFactor: i
					};
					p = new XRWebGLLayer(r, t, n), r.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, !1), x = new WebGLRenderTarget(p.framebufferWidth, p.framebufferHeight, {
						format: RGBAFormat,
						type: UnsignedByteType,
						colorSpace: e.outputColorSpace,
						stencilBuffer: y.stencil,
						resolveDepthBuffer: p.ignoreDepthValues === !1,
						resolveStencilBuffer: p.ignoreDepthValues === !1
					});
				}
				x.isXRRenderTarget = !0, this.setFoveation(c), l = null, a = await r.requestReferenceSpace(s), H.setContext(r), H.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
			}
		}, this.getEnvironmentBlendMode = function() {
			if (r !== null) return r.environmentBlendMode;
		}, this.getDepthTexture = function() {
			return _.getDepthTexture();
		};
		function ee(e) {
			for (let t = 0; t < e.removed.length; t++) {
				let n = e.removed[t], r = C.indexOf(n);
				r >= 0 && (C[r] = null, S[r].disconnect(n));
			}
			for (let t = 0; t < e.added.length; t++) {
				let n = e.added[t], r = C.indexOf(n);
				if (r === -1) {
					for (let e = 0; e < S.length; e++) if (e >= C.length) {
						C.push(n), r = e;
						break;
					} else if (C[e] === null) {
						C[e] = n, r = e;
						break;
					}
					if (r === -1) break;
				}
				let i = S[r];
				i && i.connect(n);
			}
		}
		let F = new Vector3(), I = new Vector3();
		function R(e, t, n) {
			F.setFromMatrixPosition(t.matrixWorld), I.setFromMatrixPosition(n.matrixWorld);
			let r = F.distanceTo(I), i = t.projectionMatrix.elements, a = n.projectionMatrix.elements, s = i[14] / (i[10] - 1), c = i[14] / (i[10] + 1), l = (i[9] + 1) / i[5], u = (i[9] - 1) / i[5], d = (i[8] - 1) / i[0], f = (a[8] + 1) / a[0], p = s * d, h = s * f, g = r / (-d + f), _ = g * -d;
			if (t.matrixWorld.decompose(e.position, e.quaternion, e.scale), e.translateX(_), e.translateZ(g), e.matrixWorld.compose(e.position, e.quaternion, e.scale), e.matrixWorldInverse.copy(e.matrixWorld).invert(), i[10] === -1) e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse);
			else {
				let t = s + g, n = c + g, i = p - _, a = h + (r - _), d = l * c / n * t, f = u * c / n * t;
				e.projectionMatrix.makePerspective(i, a, d, f, t, n), e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
			}
		}
		function z(e, t) {
			t === null ? e.matrixWorld.copy(e.matrix) : e.matrixWorld.multiplyMatrices(t.matrixWorld, e.matrix), e.matrixWorldInverse.copy(e.matrixWorld).invert();
		}
		this.updateCamera = function(e) {
			if (r === null) return;
			let t = e.near, n = e.far;
			_.texture !== null && (_.depthNear > 0 && (t = _.depthNear), _.depthFar > 0 && (n = _.depthFar)), k.near = D.near = E.near = t, k.far = D.far = E.far = n, (A !== k.near || j !== k.far) && (r.updateRenderState({
				depthNear: k.near,
				depthFar: k.far
			}), A = k.near, j = k.far), k.layers.mask = e.layers.mask | 6, E.layers.mask = k.layers.mask & -5, D.layers.mask = k.layers.mask & -3;
			let i = e.parent, a = k.cameras;
			z(k, i);
			for (let e = 0; e < a.length; e++) z(a[e], i);
			a.length === 2 ? R(k, E, D) : k.projectionMatrix.copy(E.projectionMatrix), te(e, k, i);
		};
		function te(e, t, n) {
			n === null ? e.matrix.copy(t.matrixWorld) : (e.matrix.copy(n.matrixWorld), e.matrix.invert(), e.matrix.multiply(t.matrixWorld)), e.matrix.decompose(e.position, e.quaternion, e.scale), e.updateMatrixWorld(!0), e.projectionMatrix.copy(t.projectionMatrix), e.projectionMatrixInverse.copy(t.projectionMatrixInverse), e.isPerspectiveCamera && (e.fov = RAD2DEG$1 * 2 * Math.atan(1 / e.projectionMatrix.elements[5]), e.zoom = 1);
		}
		this.getCamera = function() {
			return k;
		}, this.getFoveation = function() {
			if (!(f === null && p === null)) return c;
		}, this.setFoveation = function(e) {
			c = e, f !== null && (f.fixedFoveation = e), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = e);
		}, this.hasDepthSensing = function() {
			return _.texture !== null;
		}, this.getDepthSensingMesh = function() {
			return _.getMesh(k);
		}, this.getCameraTexture = function(e) {
			return v[e];
		};
		let B = null;
		function ne(t, i) {
			if (u = i.getViewerPose(l || a), h = i, u !== null) {
				let t = u.views;
				p !== null && (e.setRenderTargetFramebuffer(x, p.framebuffer), e.setRenderTarget(x));
				let i = !1;
				t.length !== k.cameras.length && (k.cameras.length = 0, i = !0);
				for (let n = 0; n < t.length; n++) {
					let r = t[n], a = null;
					if (p !== null) a = p.getViewport(r);
					else {
						let t = d.getViewSubImage(f, r);
						a = t.viewport, n === 0 && (e.setRenderTargetTextures(x, t.colorTexture, t.depthStencilTexture), e.setRenderTarget(x));
					}
					let s = O[n];
					s === void 0 && (s = new PerspectiveCamera(), s.layers.enable(n), s.viewport = new Vector4(), O[n] = s), s.matrix.fromArray(r.transform.matrix), s.matrix.decompose(s.position, s.quaternion, s.scale), s.projectionMatrix.fromArray(r.projectionMatrix), s.projectionMatrixInverse.copy(s.projectionMatrix).invert(), s.viewport.set(a.x, a.y, a.width, a.height), n === 0 && (k.matrix.copy(s.matrix), k.matrix.decompose(k.position, k.quaternion, k.scale)), i === !0 && k.cameras.push(s);
				}
				let a = r.enabledFeatures;
				if (a && a.includes("depth-sensing") && r.depthUsage == "gpu-optimized" && g) {
					d = n.getBinding();
					let e = d.getDepthInformation(t[0]);
					e && e.isValid && e.texture && _.init(e, r.renderState);
				}
				if (a && a.includes("camera-access") && g) {
					e.state.unbindTexture(), d = n.getBinding();
					for (let e = 0; e < t.length; e++) {
						let n = t[e].camera;
						if (n) {
							let e = v[n];
							e || (e = new ExternalTexture(), v[n] = e);
							let t = d.getCameraImage(n);
							e.sourceTexture = t;
						}
					}
				}
			}
			for (let e = 0; e < S.length; e++) {
				let t = C[e], n = S[e];
				t !== null && n !== void 0 && n.update(t, i, l || a);
			}
			B && B(t, i), i.detectedPlanes && n.dispatchEvent({
				type: "planesdetected",
				data: i
			}), h = null;
		}
		let H = new WebGLAnimation();
		H.setAnimationLoop(ne), this.setAnimationLoop = function(e) {
			B = e;
		}, this.dispose = function() {};
	}
}, _m1 = /*@__PURE__*/ new Matrix4(), _m = /*@__PURE__*/ new Matrix3();
_m.set(-1, 0, 0, 0, 1, 0, 0, 0, 1);
function WebGLMaterials(e, t) {
	function n(e, t) {
		e.matrixAutoUpdate === !0 && e.updateMatrix(), t.value.copy(e.matrix);
	}
	function r(t, n) {
		n.color.getRGB(t.fogColor.value, getUnlitUniformColorSpace(e)), n.isFog ? (t.fogNear.value = n.near, t.fogFar.value = n.far) : n.isFogExp2 && (t.fogDensity.value = n.density);
	}
	function i(e, t, n, r, i) {
		t.isNodeMaterial ? t.uniformsNeedUpdate = !1 : t.isMeshBasicMaterial ? a(e, t) : t.isMeshLambertMaterial ? (a(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshToonMaterial ? (a(e, t), f(e, t)) : t.isMeshPhongMaterial ? (a(e, t), d(e, t), t.envMap && (e.envMapIntensity.value = t.envMapIntensity)) : t.isMeshStandardMaterial ? (a(e, t), p(e, t), t.isMeshPhysicalMaterial && h(e, t, i)) : t.isMeshMatcapMaterial ? (a(e, t), g(e, t)) : t.isMeshDepthMaterial ? a(e, t) : t.isMeshDistanceMaterial ? (a(e, t), _(e, t)) : t.isMeshNormalMaterial ? a(e, t) : t.isLineBasicMaterial ? (s(e, t), t.isLineDashedMaterial && c(e, t)) : t.isPointsMaterial ? l(e, t, n, r) : t.isSpriteMaterial ? u(e, t) : t.isShadowMaterial ? (e.color.value.copy(t.color), e.opacity.value = t.opacity) : t.isShaderMaterial && (t.uniformsNeedUpdate = !1);
	}
	function a(e, r) {
		e.opacity.value = r.opacity, r.color && e.diffuse.value.copy(r.color), r.emissive && e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity), r.map && (e.map.value = r.map, n(r.map, e.mapTransform)), r.alphaMap && (e.alphaMap.value = r.alphaMap, n(r.alphaMap, e.alphaMapTransform)), r.bumpMap && (e.bumpMap.value = r.bumpMap, n(r.bumpMap, e.bumpMapTransform), e.bumpScale.value = r.bumpScale, r.side === 1 && (e.bumpScale.value *= -1)), r.normalMap && (e.normalMap.value = r.normalMap, n(r.normalMap, e.normalMapTransform), e.normalScale.value.copy(r.normalScale), r.side === 1 && e.normalScale.value.negate()), r.displacementMap && (e.displacementMap.value = r.displacementMap, n(r.displacementMap, e.displacementMapTransform), e.displacementScale.value = r.displacementScale, e.displacementBias.value = r.displacementBias), r.emissiveMap && (e.emissiveMap.value = r.emissiveMap, n(r.emissiveMap, e.emissiveMapTransform)), r.specularMap && (e.specularMap.value = r.specularMap, n(r.specularMap, e.specularMapTransform)), r.alphaTest > 0 && (e.alphaTest.value = r.alphaTest);
		let i = t.get(r), a = i.envMap, s = i.envMapRotation;
		a && (e.envMap.value = a, e.envMapRotation.value.setFromMatrix4(_m1.makeRotationFromEuler(s)).transpose(), a.isCubeTexture && a.isRenderTargetTexture === !1 && e.envMapRotation.value.premultiply(_m), e.reflectivity.value = r.reflectivity, e.ior.value = r.ior, e.refractionRatio.value = r.refractionRatio), r.lightMap && (e.lightMap.value = r.lightMap, e.lightMapIntensity.value = r.lightMapIntensity, n(r.lightMap, e.lightMapTransform)), r.aoMap && (e.aoMap.value = r.aoMap, e.aoMapIntensity.value = r.aoMapIntensity, n(r.aoMap, e.aoMapTransform));
	}
	function s(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, t.map && (e.map.value = t.map, n(t.map, e.mapTransform));
	}
	function c(e, t) {
		e.dashSize.value = t.dashSize, e.totalSize.value = t.dashSize + t.gapSize, e.scale.value = t.scale;
	}
	function l(e, t, r, i) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.size.value = t.size * r, e.scale.value = i * .5, t.map && (e.map.value = t.map, n(t.map, e.uvTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function u(e, t) {
		e.diffuse.value.copy(t.color), e.opacity.value = t.opacity, e.rotation.value = t.rotation, t.map && (e.map.value = t.map, n(t.map, e.mapTransform)), t.alphaMap && (e.alphaMap.value = t.alphaMap, n(t.alphaMap, e.alphaMapTransform)), t.alphaTest > 0 && (e.alphaTest.value = t.alphaTest);
	}
	function d(e, t) {
		e.specular.value.copy(t.specular), e.shininess.value = Math.max(t.shininess, 1e-4);
	}
	function f(e, t) {
		t.gradientMap && (e.gradientMap.value = t.gradientMap);
	}
	function p(e, t) {
		e.metalness.value = t.metalness, t.metalnessMap && (e.metalnessMap.value = t.metalnessMap, n(t.metalnessMap, e.metalnessMapTransform)), e.roughness.value = t.roughness, t.roughnessMap && (e.roughnessMap.value = t.roughnessMap, n(t.roughnessMap, e.roughnessMapTransform)), t.envMap && (e.envMapIntensity.value = t.envMapIntensity);
	}
	function h(e, t, r) {
		e.ior.value = t.ior, t.sheen > 0 && (e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen), e.sheenRoughness.value = t.sheenRoughness, t.sheenColorMap && (e.sheenColorMap.value = t.sheenColorMap, n(t.sheenColorMap, e.sheenColorMapTransform)), t.sheenRoughnessMap && (e.sheenRoughnessMap.value = t.sheenRoughnessMap, n(t.sheenRoughnessMap, e.sheenRoughnessMapTransform))), t.clearcoat > 0 && (e.clearcoat.value = t.clearcoat, e.clearcoatRoughness.value = t.clearcoatRoughness, t.clearcoatMap && (e.clearcoatMap.value = t.clearcoatMap, n(t.clearcoatMap, e.clearcoatMapTransform)), t.clearcoatRoughnessMap && (e.clearcoatRoughnessMap.value = t.clearcoatRoughnessMap, n(t.clearcoatRoughnessMap, e.clearcoatRoughnessMapTransform)), t.clearcoatNormalMap && (e.clearcoatNormalMap.value = t.clearcoatNormalMap, n(t.clearcoatNormalMap, e.clearcoatNormalMapTransform), e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale), t.side === 1 && e.clearcoatNormalScale.value.negate())), t.dispersion > 0 && (e.dispersion.value = t.dispersion), t.iridescence > 0 && (e.iridescence.value = t.iridescence, e.iridescenceIOR.value = t.iridescenceIOR, e.iridescenceThicknessMinimum.value = t.iridescenceThicknessRange[0], e.iridescenceThicknessMaximum.value = t.iridescenceThicknessRange[1], t.iridescenceMap && (e.iridescenceMap.value = t.iridescenceMap, n(t.iridescenceMap, e.iridescenceMapTransform)), t.iridescenceThicknessMap && (e.iridescenceThicknessMap.value = t.iridescenceThicknessMap, n(t.iridescenceThicknessMap, e.iridescenceThicknessMapTransform))), t.transmission > 0 && (e.transmission.value = t.transmission, e.transmissionSamplerMap.value = r.texture, e.transmissionSamplerSize.value.set(r.width, r.height), t.transmissionMap && (e.transmissionMap.value = t.transmissionMap, n(t.transmissionMap, e.transmissionMapTransform)), e.thickness.value = t.thickness, t.thicknessMap && (e.thicknessMap.value = t.thicknessMap, n(t.thicknessMap, e.thicknessMapTransform)), e.attenuationDistance.value = t.attenuationDistance, e.attenuationColor.value.copy(t.attenuationColor)), t.anisotropy > 0 && (e.anisotropyVector.value.set(t.anisotropy * Math.cos(t.anisotropyRotation), t.anisotropy * Math.sin(t.anisotropyRotation)), t.anisotropyMap && (e.anisotropyMap.value = t.anisotropyMap, n(t.anisotropyMap, e.anisotropyMapTransform))), e.specularIntensity.value = t.specularIntensity, e.specularColor.value.copy(t.specularColor), t.specularColorMap && (e.specularColorMap.value = t.specularColorMap, n(t.specularColorMap, e.specularColorMapTransform)), t.specularIntensityMap && (e.specularIntensityMap.value = t.specularIntensityMap, n(t.specularIntensityMap, e.specularIntensityMapTransform));
	}
	function g(e, t) {
		t.matcap && (e.matcap.value = t.matcap);
	}
	function _(e, n) {
		let r = t.get(n).light;
		e.referencePosition.value.setFromMatrixPosition(r.matrixWorld), e.nearDistance.value = r.shadow.camera.near, e.farDistance.value = r.shadow.camera.far;
	}
	return {
		refreshFogUniforms: r,
		refreshMaterialUniforms: i
	};
}
function WebGLUniformsGroups(e, t, n, r) {
	let i = {}, a = {}, s = [], c = e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);
	function l(e, t) {
		let n = t.program;
		r.uniformBlockBinding(e, n);
	}
	function u(e, n) {
		let s = i[e.id];
		s === void 0 && (v(e), s = d(e), i[e.id] = s, e.addEventListener("dispose", b));
		let c = n.program;
		r.updateUBOMapping(e, c);
		let l = t.render.frame;
		a[e.id] !== l && (p(e), a[e.id] = l);
	}
	function d(t) {
		let n = f();
		t.__bindingPointIndex = n;
		let r = e.createBuffer(), i = t.__size, a = t.usage;
		return e.bindBuffer(e.UNIFORM_BUFFER, r), e.bufferData(e.UNIFORM_BUFFER, i, a), e.bindBuffer(e.UNIFORM_BUFFER, null), e.bindBufferBase(e.UNIFORM_BUFFER, n, r), r;
	}
	function f() {
		for (let e = 0; e < c; e++) if (s.indexOf(e) === -1) return s.push(e), e;
		return error("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
	}
	function p(t) {
		let n = i[t.id], r = t.uniforms, a = t.__cache;
		e.bindBuffer(e.UNIFORM_BUFFER, n);
		for (let e = 0, t = r.length; e < t; e++) {
			let t = r[e];
			if (Array.isArray(t)) for (let n = 0, r = t.length; n < r; n++) h(t[n], e, n, a);
			else h(t, e, 0, a);
		}
		e.bindBuffer(e.UNIFORM_BUFFER, null);
	}
	function h(t, n, r, i) {
		if (_(t, n, r, i) === !0) {
			let n = t.__offset, r = t.value;
			if (Array.isArray(r)) {
				let e = 0;
				for (let n = 0; n < r.length; n++) {
					let i = r[n], a = y(i);
					g(i, t.__data, e), typeof i != "number" && typeof i != "boolean" && !i.isMatrix3 && !ArrayBuffer.isView(i) && (e += a.storage / Float32Array.BYTES_PER_ELEMENT);
				}
			} else g(r, t.__data, 0);
			e.bufferSubData(e.UNIFORM_BUFFER, n, t.__data);
		}
	}
	function g(e, t, n) {
		typeof e == "number" || typeof e == "boolean" ? t[0] = e : e.isMatrix3 ? (t[0] = e.elements[0], t[1] = e.elements[1], t[2] = e.elements[2], t[3] = 0, t[4] = e.elements[3], t[5] = e.elements[4], t[6] = e.elements[5], t[7] = 0, t[8] = e.elements[6], t[9] = e.elements[7], t[10] = e.elements[8], t[11] = 0) : ArrayBuffer.isView(e) ? t.set(new e.constructor(e.buffer, e.byteOffset, t.length)) : e.toArray(t, n);
	}
	function _(e, t, n, r) {
		let i = e.value, a = t + "_" + n;
		if (r[a] === void 0) return typeof i == "number" || typeof i == "boolean" ? r[a] = i : ArrayBuffer.isView(i) ? r[a] = i.slice() : r[a] = i.clone(), !0;
		{
			let e = r[a];
			if (typeof i == "number" || typeof i == "boolean") {
				if (e !== i) return r[a] = i, !0;
			} else if (ArrayBuffer.isView(i)) return !0;
			else if (e.equals(i) === !1) return e.copy(i), !0;
		}
		return !1;
	}
	function v(e) {
		let t = e.uniforms, n = 0, r = 16;
		for (let e = 0, r = t.length; e < r; e++) {
			let r = Array.isArray(t[e]) ? t[e] : [t[e]];
			for (let e = 0, t = r.length; e < t; e++) {
				let t = r[e], i = Array.isArray(t.value) ? t.value : [t.value];
				for (let e = 0, r = i.length; e < r; e++) {
					let r = i[e], a = y(r), s = n % 16, c = s % a.boundary, l = s + c;
					n += c, l !== 0 && 16 - l < a.storage && (n += 16 - l), t.__data = new Float32Array(a.storage / Float32Array.BYTES_PER_ELEMENT), t.__offset = n, n += a.storage;
				}
			}
		}
		let i = n % 16;
		return i > 0 && (n += 16 - i), e.__size = n, e.__cache = {}, this;
	}
	function y(e) {
		let t = {
			boundary: 0,
			storage: 0
		};
		return typeof e == "number" || typeof e == "boolean" ? (t.boundary = 4, t.storage = 4) : e.isVector2 ? (t.boundary = 8, t.storage = 8) : e.isVector3 || e.isColor ? (t.boundary = 16, t.storage = 12) : e.isVector4 ? (t.boundary = 16, t.storage = 16) : e.isMatrix3 ? (t.boundary = 48, t.storage = 48) : e.isMatrix4 ? (t.boundary = 64, t.storage = 64) : e.isTexture ? warn("WebGLRenderer: Texture samplers can not be part of an uniforms group.") : ArrayBuffer.isView(e) ? (t.boundary = 16, t.storage = e.byteLength) : warn("WebGLRenderer: Unsupported uniform value type.", e), t;
	}
	function b(t) {
		let n = t.target;
		n.removeEventListener("dispose", b);
		let r = s.indexOf(n.__bindingPointIndex);
		s.splice(r, 1), e.deleteBuffer(i[n.id]), delete i[n.id], delete a[n.id];
	}
	function x() {
		for (let t in i) e.deleteBuffer(i[t]);
		s = [], i = {}, a = {};
	}
	return {
		bind: l,
		update: u,
		dispose: x
	};
}
var DATA = new Uint16Array([
	12469,
	15057,
	12620,
	14925,
	13266,
	14620,
	13807,
	14376,
	14323,
	13990,
	14545,
	13625,
	14713,
	13328,
	14840,
	12882,
	14931,
	12528,
	14996,
	12233,
	15039,
	11829,
	15066,
	11525,
	15080,
	11295,
	15085,
	10976,
	15082,
	10705,
	15073,
	10495,
	13880,
	14564,
	13898,
	14542,
	13977,
	14430,
	14158,
	14124,
	14393,
	13732,
	14556,
	13410,
	14702,
	12996,
	14814,
	12596,
	14891,
	12291,
	14937,
	11834,
	14957,
	11489,
	14958,
	11194,
	14943,
	10803,
	14921,
	10506,
	14893,
	10278,
	14858,
	9960,
	14484,
	14039,
	14487,
	14025,
	14499,
	13941,
	14524,
	13740,
	14574,
	13468,
	14654,
	13106,
	14743,
	12678,
	14818,
	12344,
	14867,
	11893,
	14889,
	11509,
	14893,
	11180,
	14881,
	10751,
	14852,
	10428,
	14812,
	10128,
	14765,
	9754,
	14712,
	9466,
	14764,
	13480,
	14764,
	13475,
	14766,
	13440,
	14766,
	13347,
	14769,
	13070,
	14786,
	12713,
	14816,
	12387,
	14844,
	11957,
	14860,
	11549,
	14868,
	11215,
	14855,
	10751,
	14825,
	10403,
	14782,
	10044,
	14729,
	9651,
	14666,
	9352,
	14599,
	9029,
	14967,
	12835,
	14966,
	12831,
	14963,
	12804,
	14954,
	12723,
	14936,
	12564,
	14917,
	12347,
	14900,
	11958,
	14886,
	11569,
	14878,
	11247,
	14859,
	10765,
	14828,
	10401,
	14784,
	10011,
	14727,
	9600,
	14660,
	9289,
	14586,
	8893,
	14508,
	8533,
	15111,
	12234,
	15110,
	12234,
	15104,
	12216,
	15092,
	12156,
	15067,
	12010,
	15028,
	11776,
	14981,
	11500,
	14942,
	11205,
	14902,
	10752,
	14861,
	10393,
	14812,
	9991,
	14752,
	9570,
	14682,
	9252,
	14603,
	8808,
	14519,
	8445,
	14431,
	8145,
	15209,
	11449,
	15208,
	11451,
	15202,
	11451,
	15190,
	11438,
	15163,
	11384,
	15117,
	11274,
	15055,
	10979,
	14994,
	10648,
	14932,
	10343,
	14871,
	9936,
	14803,
	9532,
	14729,
	9218,
	14645,
	8742,
	14556,
	8381,
	14461,
	8020,
	14365,
	7603,
	15273,
	10603,
	15272,
	10607,
	15267,
	10619,
	15256,
	10631,
	15231,
	10614,
	15182,
	10535,
	15118,
	10389,
	15042,
	10167,
	14963,
	9787,
	14883,
	9447,
	14800,
	9115,
	14710,
	8665,
	14615,
	8318,
	14514,
	7911,
	14411,
	7507,
	14279,
	7198,
	15314,
	9675,
	15313,
	9683,
	15309,
	9712,
	15298,
	9759,
	15277,
	9797,
	15229,
	9773,
	15166,
	9668,
	15084,
	9487,
	14995,
	9274,
	14898,
	8910,
	14800,
	8539,
	14697,
	8234,
	14590,
	7790,
	14479,
	7409,
	14367,
	7067,
	14178,
	6621,
	15337,
	8619,
	15337,
	8631,
	15333,
	8677,
	15325,
	8769,
	15305,
	8871,
	15264,
	8940,
	15202,
	8909,
	15119,
	8775,
	15022,
	8565,
	14916,
	8328,
	14804,
	8009,
	14688,
	7614,
	14569,
	7287,
	14448,
	6888,
	14321,
	6483,
	14088,
	6171,
	15350,
	7402,
	15350,
	7419,
	15347,
	7480,
	15340,
	7613,
	15322,
	7804,
	15287,
	7973,
	15229,
	8057,
	15148,
	8012,
	15046,
	7846,
	14933,
	7611,
	14810,
	7357,
	14682,
	7069,
	14552,
	6656,
	14421,
	6316,
	14251,
	5948,
	14007,
	5528,
	15356,
	5942,
	15356,
	5977,
	15353,
	6119,
	15348,
	6294,
	15332,
	6551,
	15302,
	6824,
	15249,
	7044,
	15171,
	7122,
	15070,
	7050,
	14949,
	6861,
	14818,
	6611,
	14679,
	6349,
	14538,
	6067,
	14398,
	5651,
	14189,
	5311,
	13935,
	4958,
	15359,
	4123,
	15359,
	4153,
	15356,
	4296,
	15353,
	4646,
	15338,
	5160,
	15311,
	5508,
	15263,
	5829,
	15188,
	6042,
	15088,
	6094,
	14966,
	6001,
	14826,
	5796,
	14678,
	5543,
	14527,
	5287,
	14377,
	4985,
	14133,
	4586,
	13869,
	4257,
	15360,
	1563,
	15360,
	1642,
	15358,
	2076,
	15354,
	2636,
	15341,
	3350,
	15317,
	4019,
	15273,
	4429,
	15203,
	4732,
	15105,
	4911,
	14981,
	4932,
	14836,
	4818,
	14679,
	4621,
	14517,
	4386,
	14359,
	4156,
	14083,
	3795,
	13808,
	3437,
	15360,
	122,
	15360,
	137,
	15358,
	285,
	15355,
	636,
	15344,
	1274,
	15322,
	2177,
	15281,
	2765,
	15215,
	3223,
	15120,
	3451,
	14995,
	3569,
	14846,
	3567,
	14681,
	3466,
	14511,
	3305,
	14344,
	3121,
	14037,
	2800,
	13753,
	2467,
	15360,
	0,
	15360,
	1,
	15359,
	21,
	15355,
	89,
	15346,
	253,
	15325,
	479,
	15287,
	796,
	15225,
	1148,
	15133,
	1492,
	15008,
	1749,
	14856,
	1882,
	14685,
	1886,
	14506,
	1783,
	14324,
	1608,
	13996,
	1398,
	13702,
	1183
]), lut = null;
function getDFGLUT() {
	return lut === null && (lut = new DataTexture(DATA, 16, 16, RGFormat, HalfFloatType), lut.name = "DFG_LUT", lut.minFilter = LinearFilter, lut.magFilter = LinearFilter, lut.wrapS = ClampToEdgeWrapping, lut.wrapT = ClampToEdgeWrapping, lut.generateMipmaps = !1, lut.needsUpdate = !0), lut;
}
var WebGLRenderer = class {
	constructor(e = {}) {
		let { canvas: t = createCanvasElement(), context: n = null, depth: r = !0, stencil: i = !1, alpha: a = !1, antialias: s = !1, premultipliedAlpha: c = !0, preserveDrawingBuffer: l = !1, powerPreference: u = "default", failIfMajorPerformanceCaveat: d = !1, reversedDepthBuffer: f = !1, outputBufferType: p = UnsignedByteType } = e;
		this.isWebGLRenderer = !0;
		let h;
		if (n !== null) {
			if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
			h = n.getContextAttributes().alpha;
		} else h = a;
		let g = p, _ = /* @__PURE__ */ new Set([
			RGBAIntegerFormat,
			RGIntegerFormat,
			RedIntegerFormat
		]), v = /* @__PURE__ */ new Set([
			UnsignedByteType,
			UnsignedIntType,
			UnsignedShortType,
			UnsignedInt248Type,
			UnsignedShort4444Type,
			UnsignedShort5551Type
		]), y = /* @__PURE__ */ new Uint32Array(4), b = /* @__PURE__ */ new Int32Array(4), x = new Vector3(), S = null, C = null, w = [], T = [], E = null;
		this.domElement = t, this.debug = {
			checkShaderErrors: !0,
			onShaderError: null
		}, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.toneMapping = 0, this.toneMappingExposure = 1, this.transmissionResolutionScale = 1;
		let D = this, O = !1, k = null, A = null, j = null, N = null;
		this._outputColorSpace = SRGBColorSpace;
		let P = 0, ee = 0, F = null, I = -1, R = null, z = new Vector4(), te = new Vector4(), B = null, ne = new Color$1(0), H = 0, U = t.width, re = t.height, W = 1, K = null, q = null, ie = new Vector4(0, 0, U, re), J = new Vector4(0, 0, U, re), ae = !1, oe = new Frustum(), se = !1, ce = !1, le = new Matrix4(), ue = new Vector3(), de = new Vector4(), fe = {
			background: null,
			fog: null,
			environment: null,
			overrideMaterial: null,
			isScene: !0
		}, pe = !1;
		function me() {
			return F === null ? W : 1;
		}
		let Y = n;
		function he(e, n) {
			return t.getContext(e, n);
		}
		try {
			let e = {
				alpha: !0,
				depth: r,
				stencil: i,
				antialias: s,
				premultipliedAlpha: c,
				preserveDrawingBuffer: l,
				powerPreference: u,
				failIfMajorPerformanceCaveat: d
			};
			if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r185"), t.addEventListener("webglcontextlost", Le, !1), t.addEventListener("webglcontextrestored", Re, !1), t.addEventListener("webglcontextcreationerror", ze, !1), Y === null) {
				let t = "webgl2";
				if (Y = he(t, e), Y === null) throw he(t) ? Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.") : Error("THREE.WebGLRenderer: Error creating WebGL context.");
			}
		} catch (e) {
			throw error("WebGLRenderer: " + e.message), e;
		}
		let X, ge, Z, _e, Q, $, ve, ye, be, xe, Se, Ce, we, Te, Ee, De, Oe, ke, Ae, je, Me, Ne, Pe;
		function Fe() {
			X = new WebGLExtensions(Y), X.init(), Me = new WebGLUtils(Y, X), ge = new WebGLCapabilities(Y, X, e, Me), Z = new WebGLState(Y, X), ge.reversedDepthBuffer && f && Z.buffers.depth.setReversed(!0), A = Y.createFramebuffer(), j = Y.createFramebuffer(), N = Y.createFramebuffer(), _e = new WebGLInfo(Y), Q = new WebGLProperties(), $ = new WebGLTextures(Y, X, Z, Q, ge, Me, _e), ve = new WebGLEnvironments(D), ye = new WebGLAttributes(Y), Ne = new WebGLBindingStates(Y, ye), be = new WebGLGeometries(Y, ye, _e, Ne), xe = new WebGLObjects(Y, be, ye, Ne, _e), ke = new WebGLMorphtargets(Y, ge, $), Ee = new WebGLClipping(Q), Se = new WebGLPrograms(D, ve, X, ge, Ne, Ee), Ce = new WebGLMaterials(D, Q), we = new WebGLRenderLists(), Te = new WebGLRenderStates(X), Oe = new WebGLBackground(D, ve, Z, xe, h, c), De = new WebGLShadowMap(D, xe, ge), Pe = new WebGLUniformsGroups(Y, _e, ge, Z), Ae = new WebGLBufferRenderer(Y, X, _e), je = new WebGLIndexedBufferRenderer(Y, X, _e), _e.programs = Se.programs, D.capabilities = ge, D.extensions = X, D.properties = Q, D.renderLists = we, D.shadowMap = De, D.state = Z, D.info = _e;
		}
		Fe(), g !== 1009 && (E = new WebGLOutput(g, t.width, t.height, s, r, i));
		let Ie = new WebXRManager(D, Y);
		this.xr = Ie, this.getContext = function() {
			return Y;
		}, this.getContextAttributes = function() {
			return Y.getContextAttributes();
		}, this.forceContextLoss = function() {
			let e = X.get("WEBGL_lose_context");
			e && e.loseContext();
		}, this.forceContextRestore = function() {
			let e = X.get("WEBGL_lose_context");
			e && e.restoreContext();
		}, this.getPixelRatio = function() {
			return W;
		}, this.setPixelRatio = function(e) {
			e !== void 0 && (W = e, this.setSize(U, re, !1));
		}, this.getSize = function(e) {
			return e.set(U, re);
		}, this.setSize = function(e, n, r = !0) {
			if (Ie.isPresenting) {
				warn("WebGLRenderer: Can't change size while VR device is presenting.");
				return;
			}
			U = e, re = n, t.width = Math.floor(e * W), t.height = Math.floor(n * W), r === !0 && (t.style.width = e + "px", t.style.height = n + "px"), E !== null && E.setSize(t.width, t.height), this.setViewport(0, 0, e, n);
		}, this.getDrawingBufferSize = function(e) {
			return e.set(U * W, re * W).floor();
		}, this.setDrawingBufferSize = function(e, n, r) {
			U = e, re = n, W = r, t.width = Math.floor(e * r), t.height = Math.floor(n * r), this.setViewport(0, 0, e, n);
		}, this.setEffects = function(e) {
			if (g === 1009) {
				error("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");
				return;
			}
			if (e) {
				for (let t = 0; t < e.length; t++) if (e[t].isOutputPass === !0) {
					warn("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");
					break;
				}
			}
			E.setEffects(e || []);
		}, this.getCurrentViewport = function(e) {
			return e.copy(z);
		}, this.getViewport = function(e) {
			return e.copy(ie);
		}, this.setViewport = function(e, t, n, r) {
			e.isVector4 ? ie.set(e.x, e.y, e.z, e.w) : ie.set(e, t, n, r), Z.viewport(z.copy(ie).multiplyScalar(W).round());
		}, this.getScissor = function(e) {
			return e.copy(J);
		}, this.setScissor = function(e, t, n, r) {
			e.isVector4 ? J.set(e.x, e.y, e.z, e.w) : J.set(e, t, n, r), Z.scissor(te.copy(J).multiplyScalar(W).round());
		}, this.getScissorTest = function() {
			return ae;
		}, this.setScissorTest = function(e) {
			Z.setScissorTest(ae = e);
		}, this.setOpaqueSort = function(e) {
			K = e;
		}, this.setTransparentSort = function(e) {
			q = e;
		}, this.getClearColor = function(e) {
			return e.copy(Oe.getClearColor());
		}, this.setClearColor = function() {
			Oe.setClearColor(...arguments);
		}, this.getClearAlpha = function() {
			return Oe.getClearAlpha();
		}, this.setClearAlpha = function() {
			Oe.setClearAlpha(...arguments);
		}, this.clear = function(e = !0, t = !0, n = !0) {
			let r = 0;
			if (e) {
				let e = !1;
				if (F !== null) {
					let t = F.texture.format;
					e = _.has(t);
				}
				if (e) {
					let e = F.texture.type, t = v.has(e), n = Oe.getClearColor(), r = Oe.getClearAlpha(), i = n.r, a = n.g, s = n.b;
					t ? (y[0] = i, y[1] = a, y[2] = s, y[3] = r, Y.clearBufferuiv(Y.COLOR, 0, y)) : (b[0] = i, b[1] = a, b[2] = s, b[3] = r, Y.clearBufferiv(Y.COLOR, 0, b));
				} else r |= Y.COLOR_BUFFER_BIT;
			}
			t && (r |= Y.DEPTH_BUFFER_BIT, this.state.buffers.depth.setMask(!0)), n && (r |= Y.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), r !== 0 && Y.clear(r);
		}, this.clearColor = function() {
			this.clear(!0, !1, !1);
		}, this.clearDepth = function() {
			this.clear(!1, !0, !1);
		}, this.clearStencil = function() {
			this.clear(!1, !1, !0);
		}, this.setNodesHandler = function(e) {
			e.setRenderer(this), k = e;
		}, this.dispose = function() {
			t.removeEventListener("webglcontextlost", Le, !1), t.removeEventListener("webglcontextrestored", Re, !1), t.removeEventListener("webglcontextcreationerror", ze, !1), Oe.dispose(), we.dispose(), Te.dispose(), Q.dispose(), ve.dispose(), xe.dispose(), Ne.dispose(), Pe.dispose(), Se.dispose(), Ie.dispose(), Ie.removeEventListener("sessionstart", Ke), Ie.removeEventListener("sessionend", qe), Je.stop();
		};
		function Le(e) {
			e.preventDefault(), log$2("WebGLRenderer: Context Lost."), O = !0;
		}
		function Re() {
			log$2("WebGLRenderer: Context Restored."), O = !1;
			let e = _e.autoReset, t = De.enabled, n = De.autoUpdate, r = De.needsUpdate, i = De.type;
			Fe(), _e.autoReset = e, De.enabled = t, De.autoUpdate = n, De.needsUpdate = r, De.type = i;
		}
		function ze(e) {
			error("WebGLRenderer: A WebGL context could not be created. Reason: ", e.statusMessage);
		}
		function Be(e) {
			let t = e.target;
			t.removeEventListener("dispose", Be), Ve(t);
		}
		function Ve(e) {
			He(e), Q.remove(e);
		}
		function He(e) {
			let t = Q.get(e).programs;
			t !== void 0 && (t.forEach(function(e) {
				Se.releaseProgram(e);
			}), e.isShaderMaterial && Se.releaseShaderCache(e));
		}
		this.renderBufferDirect = function(e, t, n, r, i, a) {
			t === null && (t = fe);
			let s = i.isMesh && i.matrixWorld.determinantAffine() < 0, c = it(e, t, n, r, i);
			Z.setMaterial(r, s);
			let l = n.index, u = 1;
			if (r.wireframe === !0) {
				if (l = be.getWireframeAttribute(n), l === void 0) return;
				u = 2;
			}
			let d = n.drawRange, f = n.attributes.position, p = d.start * u, h = (d.start + d.count) * u;
			a !== null && (p = Math.max(p, a.start * u), h = Math.min(h, (a.start + a.count) * u)), l === null ? f != null && (p = Math.max(p, 0), h = Math.min(h, f.count)) : (p = Math.max(p, 0), h = Math.min(h, l.count));
			let g = h - p;
			if (g < 0 || g === Infinity) return;
			Ne.setup(i, r, c, n, l);
			let _, v = Ae;
			if (l !== null && (_ = ye.get(l), v = je, v.setIndex(_)), i.isMesh) r.wireframe === !0 ? (Z.setLineWidth(r.wireframeLinewidth * me()), v.setMode(Y.LINES)) : v.setMode(Y.TRIANGLES);
			else if (i.isLine) {
				let e = r.linewidth;
				e === void 0 && (e = 1), Z.setLineWidth(e * me()), i.isLineSegments ? v.setMode(Y.LINES) : i.isLineLoop ? v.setMode(Y.LINE_LOOP) : v.setMode(Y.LINE_STRIP);
			} else i.isPoints ? v.setMode(Y.POINTS) : i.isSprite && v.setMode(Y.TRIANGLES);
			if (i.isBatchedMesh) if (X.get("WEBGL_multi_draw")) v.renderMultiDraw(i._multiDrawStarts, i._multiDrawCounts, i._multiDrawCount);
			else {
				let e = i._multiDrawStarts, t = i._multiDrawCounts, n = i._multiDrawCount, a = l ? ye.get(l).bytesPerElement : 1, s = Q.get(r).currentProgram.getUniforms();
				for (let r = 0; r < n; r++) s.setValue(Y, "_gl_DrawID", r), v.render(e[r] / a, t[r]);
			}
			else if (i.isInstancedMesh) v.renderInstances(p, g, i.count);
			else if (n.isInstancedBufferGeometry) {
				let e = n._maxInstanceCount === void 0 ? Infinity : n._maxInstanceCount, t = Math.min(n.instanceCount, e);
				v.renderInstances(p, g, t);
			} else v.render(p, g);
		};
		function Ue(e, t, n) {
			e.transparent === !0 && e.side === 2 && e.forceSinglePass === !1 ? (e.side = 1, e.needsUpdate = !0, et(e, t, n), e.side = 0, e.needsUpdate = !0, et(e, t, n), e.side = 2) : et(e, t, n);
		}
		this.compile = function(e, t, n = null) {
			n === null && (n = e), C = Te.get(n), C.init(t), T.push(C), n.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (C.pushLight(e), e.castShadow && C.pushShadow(e));
			}), e !== n && e.traverseVisible(function(e) {
				e.isLight && e.layers.test(t.layers) && (C.pushLight(e), e.castShadow && C.pushShadow(e));
			}), C.setupLights();
			let r = /* @__PURE__ */ new Set();
			return e.traverse(function(e) {
				if (!(e.isMesh || e.isPoints || e.isLine || e.isSprite)) return;
				let t = e.material;
				if (t) if (Array.isArray(t)) for (let i = 0; i < t.length; i++) {
					let a = t[i];
					Ue(a, n, e), r.add(a);
				}
				else Ue(t, n, e), r.add(t);
			}), C = T.pop(), r;
		}, this.compileAsync = function(e, t, n = null) {
			let r = this.compile(e, t, n);
			return new Promise((t) => {
				function n() {
					if (r.forEach(function(e) {
						Q.get(e).currentProgram.isReady() && r.delete(e);
					}), r.size === 0) {
						t(e);
						return;
					}
					setTimeout(n, 10);
				}
				X.get("KHR_parallel_shader_compile") === null ? setTimeout(n, 10) : n();
			});
		};
		let We = null;
		function Ge(e) {
			We && We(e);
		}
		function Ke() {
			Je.stop();
		}
		function qe() {
			Je.start();
		}
		let Je = new WebGLAnimation();
		Je.setAnimationLoop(Ge), typeof self < "u" && Je.setContext(self), this.setAnimationLoop = function(e) {
			We = e, Ie.setAnimationLoop(e), e === null ? Je.stop() : Je.start();
		}, Ie.addEventListener("sessionstart", Ke), Ie.addEventListener("sessionend", qe), this.render = function(e, t) {
			if (t !== void 0 && t.isCamera !== !0) {
				error("WebGLRenderer.render: camera is not an instance of THREE.Camera.");
				return;
			}
			if (O === !0) return;
			k !== null && k.renderStart(e, t);
			let n = Ie.enabled === !0 && Ie.isPresenting === !0, r = E !== null && (F === null || n) && E.begin(D, F);
			if (e.matrixWorldAutoUpdate === !0 && e.updateMatrixWorld(), t.parent === null && t.matrixWorldAutoUpdate === !0 && t.updateMatrixWorld(), Ie.enabled === !0 && Ie.isPresenting === !0 && (E === null || E.isCompositing() === !1) && (Ie.cameraAutoUpdate === !0 && Ie.updateCamera(t), t = Ie.getCamera()), e.isScene === !0 && e.onBeforeRender(D, e, t, F), C = Te.get(e, T.length), C.init(t), C.state.textureUnits = $.getTextureUnits(), T.push(C), le.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), oe.setFromProjectionMatrix(le, WebGLCoordinateSystem, t.reversedDepth), ce = this.localClippingEnabled, se = Ee.init(this.clippingPlanes, ce), S = we.get(e, w.length), S.init(), w.push(S), Ie.enabled === !0 && Ie.isPresenting === !0) {
				let e = D.xr.getDepthSensingMesh();
				e !== null && Ye(e, t, -Infinity, D.sortObjects);
			}
			Ye(e, t, 0, D.sortObjects), S.finish(), D.sortObjects === !0 && S.sort(K, q, t.reversedDepth), pe = Ie.enabled === !1 || Ie.isPresenting === !1 || Ie.hasDepthSensing() === !1, pe && Oe.addToRenderList(S, e), this.info.render.frame++, this.info.autoReset === !0 && this.info.reset(), se === !0 && Ee.beginShadows();
			let i = C.state.shadowsArray;
			if (De.render(i, e, t), se === !0 && Ee.endShadows(), (r && E.hasRenderPass()) === !1) {
				let n = S.opaque, r = S.transmissive;
				if (C.setupLights(), t.isArrayCamera) {
					let i = t.cameras;
					if (r.length > 0) for (let t = 0, a = i.length; t < a; t++) {
						let a = i[t];
						Ze(n, r, e, a);
					}
					pe && Oe.render(e);
					for (let t = 0, n = i.length; t < n; t++) {
						let n = i[t];
						Xe(S, e, n, n.viewport);
					}
				} else r.length > 0 && Ze(n, r, e, t), pe && Oe.render(e), Xe(S, e, t);
			}
			F !== null && ee === 0 && ($.updateMultisampleRenderTarget(F), $.updateRenderTargetMipmap(F)), r && E.end(D), e.isScene === !0 && e.onAfterRender(D, e, t), Ne.resetDefaultState(), I = -1, R = null, T.pop(), T.length > 0 ? (C = T[T.length - 1], $.setTextureUnits(C.state.textureUnits), se === !0 && Ee.setGlobalState(D.clippingPlanes, C.state.camera)) : C = null, w.pop(), S = w.length > 0 ? w[w.length - 1] : null, k !== null && k.renderEnd();
		};
		function Ye(e, t, n, r) {
			if (e.visible === !1) return;
			if (e.layers.test(t.layers)) {
				if (e.isGroup) n = e.renderOrder;
				else if (e.isLOD) e.autoUpdate === !0 && e.update(t);
				else if (e.isLightProbeGrid) C.pushLightProbeGrid(e);
				else if (e.isLight) C.pushLight(e), e.castShadow && C.pushShadow(e);
				else if (e.isSprite) {
					if (!e.frustumCulled || oe.intersectsSprite(e)) {
						r && de.setFromMatrixPosition(e.matrixWorld).applyMatrix4(le);
						let t = xe.update(e), i = e.material;
						i.visible && S.push(e, t, i, n, de.z, null);
					}
				} else if ((e.isMesh || e.isLine || e.isPoints) && (!e.frustumCulled || oe.intersectsObject(e))) {
					let t = xe.update(e), i = e.material;
					if (r && (e.boundingSphere === void 0 ? (t.boundingSphere === null && t.computeBoundingSphere(), de.copy(t.boundingSphere.center)) : (e.boundingSphere === null && e.computeBoundingSphere(), de.copy(e.boundingSphere.center)), de.applyMatrix4(e.matrixWorld).applyMatrix4(le)), Array.isArray(i)) {
						let r = t.groups;
						for (let a = 0, s = r.length; a < s; a++) {
							let s = r[a], c = i[s.materialIndex];
							c && c.visible && S.push(e, t, c, n, de.z, s);
						}
					} else i.visible && S.push(e, t, i, n, de.z, null);
				}
			}
			let i = e.children;
			for (let e = 0, a = i.length; e < a; e++) Ye(i[e], t, n, r);
		}
		function Xe(e, t, n, r) {
			let { opaque: i, transmissive: a, transparent: s } = e;
			C.setupLightsView(n), se === !0 && Ee.setGlobalState(D.clippingPlanes, n), r && Z.viewport(z.copy(r)), i.length > 0 && Qe(i, t, n), a.length > 0 && Qe(a, t, n), s.length > 0 && Qe(s, t, n), Z.buffers.depth.setTest(!0), Z.buffers.depth.setMask(!0), Z.buffers.color.setMask(!0), Z.setPolygonOffset(!1);
		}
		function Ze(e, t, n, r) {
			if ((n.isScene === !0 ? n.overrideMaterial : null) !== null) return;
			if (C.state.transmissionRenderTarget[r.id] === void 0) {
				let e = X.has("EXT_color_buffer_half_float") || X.has("EXT_color_buffer_float");
				C.state.transmissionRenderTarget[r.id] = new WebGLRenderTarget(1, 1, {
					generateMipmaps: !0,
					type: e ? HalfFloatType : UnsignedByteType,
					minFilter: LinearMipmapLinearFilter,
					samples: Math.max(4, ge.samples),
					stencilBuffer: i,
					resolveDepthBuffer: !1,
					resolveStencilBuffer: !1,
					colorSpace: ColorManagement.workingColorSpace
				});
			}
			let a = C.state.transmissionRenderTarget[r.id], s = r.viewport || z;
			a.setSize(s.z * D.transmissionResolutionScale, s.w * D.transmissionResolutionScale);
			let c = D.getRenderTarget(), l = D.getActiveCubeFace(), u = D.getActiveMipmapLevel();
			D.setRenderTarget(a), D.getClearColor(ne), H = D.getClearAlpha(), H < 1 && D.setClearColor(16777215, .5), D.clear(), pe && Oe.render(n);
			let d = D.toneMapping;
			D.toneMapping = 0;
			let f = r.viewport;
			if (r.viewport !== void 0 && (r.viewport = void 0), C.setupLightsView(r), se === !0 && Ee.setGlobalState(D.clippingPlanes, r), Qe(e, n, r), $.updateMultisampleRenderTarget(a), $.updateRenderTargetMipmap(a), X.has("WEBGL_multisampled_render_to_texture") === !1) {
				let e = !1;
				for (let i = 0, a = t.length; i < a; i++) {
					let { object: a, geometry: s, material: c, group: l } = t[i];
					if (c.side === 2 && a.layers.test(r.layers)) {
						let t = c.side;
						c.side = 1, c.needsUpdate = !0, $e(a, n, r, s, c, l), c.side = t, c.needsUpdate = !0, e = !0;
					}
				}
				e === !0 && ($.updateMultisampleRenderTarget(a), $.updateRenderTargetMipmap(a));
			}
			D.setRenderTarget(c, l, u), D.setClearColor(ne, H), f !== void 0 && (r.viewport = f), D.toneMapping = d;
		}
		function Qe(e, t, n) {
			let r = t.isScene === !0 ? t.overrideMaterial : null;
			for (let i = 0, a = e.length; i < a; i++) {
				let a = e[i], { object: s, geometry: c, group: l } = a, u = a.material;
				u.allowOverride === !0 && r !== null && (u = r), s.layers.test(n.layers) && $e(s, t, n, c, u, l);
			}
		}
		function $e(e, t, n, r, i, a) {
			e.onBeforeRender(D, t, n, r, i, a), e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse, e.matrixWorld), e.normalMatrix.getNormalMatrix(e.modelViewMatrix), i.onBeforeRender(D, t, n, r, e, a), i.transparent === !0 && i.side === 2 && i.forceSinglePass === !1 ? (i.side = 1, i.needsUpdate = !0, D.renderBufferDirect(n, t, r, i, e, a), i.side = 0, i.needsUpdate = !0, D.renderBufferDirect(n, t, r, i, e, a), i.side = 2) : D.renderBufferDirect(n, t, r, i, e, a), e.onAfterRender(D, t, n, r, i, a);
		}
		function et(e, t, n) {
			t.isScene !== !0 && (t = fe);
			let r = Q.get(e), i = C.state.lights, a = C.state.shadowsArray, s = i.state.version, c = Se.getParameters(e, i.state, a, t, n, C.state.lightProbeGridArray), l = Se.getProgramCacheKey(c), u = r.programs;
			r.environment = e.isMeshStandardMaterial || e.isMeshLambertMaterial || e.isMeshPhongMaterial ? t.environment : null, r.fog = t.fog;
			let d = e.isMeshStandardMaterial || e.isMeshLambertMaterial && !e.envMap || e.isMeshPhongMaterial && !e.envMap;
			r.envMap = ve.get(e.envMap || r.environment, d), r.envMapRotation = r.environment !== null && e.envMap === null ? t.environmentRotation : e.envMapRotation, u === void 0 && (e.addEventListener("dispose", Be), u = /* @__PURE__ */ new Map(), r.programs = u);
			let f = u.get(l);
			if (f !== void 0) {
				if (r.currentProgram === f && r.lightsStateVersion === s) return nt(e, c), f;
			} else c.uniforms = Se.getUniforms(e), k !== null && e.isNodeMaterial && k.build(e, n, c), e.onBeforeCompile(c, D), f = Se.acquireProgram(c, l), u.set(l, f), r.uniforms = c.uniforms;
			let p = r.uniforms;
			return (!e.isShaderMaterial && !e.isRawShaderMaterial || e.clipping === !0) && (p.clippingPlanes = Ee.uniform), nt(e, c), r.needsLights = ot(e), r.lightsStateVersion = s, r.needsLights && (p.ambientLightColor.value = i.state.ambient, p.lightProbe.value = i.state.probe, p.directionalLights.value = i.state.directional, p.directionalLightShadows.value = i.state.directionalShadow, p.spotLights.value = i.state.spot, p.spotLightShadows.value = i.state.spotShadow, p.rectAreaLights.value = i.state.rectArea, p.ltc_1.value = i.state.rectAreaLTC1, p.ltc_2.value = i.state.rectAreaLTC2, p.pointLights.value = i.state.point, p.pointLightShadows.value = i.state.pointShadow, p.hemisphereLights.value = i.state.hemi, p.directionalShadowMatrix.value = i.state.directionalShadowMatrix, p.spotLightMatrix.value = i.state.spotLightMatrix, p.spotLightMap.value = i.state.spotLightMap, p.pointShadowMatrix.value = i.state.pointShadowMatrix), r.lightProbeGrid = C.state.lightProbeGridArray.length > 0, r.currentProgram = f, r.uniformsList = null, f;
		}
		function tt(e) {
			if (e.uniformsList === null) {
				let t = e.currentProgram.getUniforms();
				e.uniformsList = WebGLUniforms.seqWithValue(t.seq, e.uniforms);
			}
			return e.uniformsList;
		}
		function nt(e, t) {
			let n = Q.get(e);
			n.outputColorSpace = t.outputColorSpace, n.batching = t.batching, n.batchingColor = t.batchingColor, n.instancing = t.instancing, n.instancingColor = t.instancingColor, n.instancingMorph = t.instancingMorph, n.skinning = t.skinning, n.morphTargets = t.morphTargets, n.morphNormals = t.morphNormals, n.morphColors = t.morphColors, n.morphTargetsCount = t.morphTargetsCount, n.numClippingPlanes = t.numClippingPlanes, n.numIntersection = t.numClipIntersection, n.vertexAlphas = t.vertexAlphas, n.vertexTangents = t.vertexTangents, n.toneMapping = t.toneMapping;
		}
		function rt(e, t) {
			if (e.length === 0) return null;
			if (e.length === 1) return e[0].texture === null ? null : e[0];
			x.setFromMatrixPosition(t.matrixWorld);
			for (let t = 0, n = e.length; t < n; t++) {
				let n = e[t];
				if (n.texture !== null && n.boundingBox.containsPoint(x)) return n;
			}
			return null;
		}
		function it(e, t, n, r, i) {
			t.isScene !== !0 && (t = fe), $.resetTextureUnits();
			let a = t.fog, s = r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial ? t.environment : null, c = F === null ? D.outputColorSpace : F.isXRRenderTarget === !0 ? F.texture.colorSpace : ColorManagement.workingColorSpace, l = r.isMeshStandardMaterial || r.isMeshLambertMaterial && !r.envMap || r.isMeshPhongMaterial && !r.envMap, u = ve.get(r.envMap || s, l), d = r.vertexColors === !0 && !!n.attributes.color && n.attributes.color.itemSize === 4, f = !!n.attributes.tangent && (!!r.normalMap || r.anisotropy > 0), p = !!n.morphAttributes.position, h = !!n.morphAttributes.normal, g = !!n.morphAttributes.color, _ = 0;
			r.toneMapped && (F === null || F.isXRRenderTarget === !0) && (_ = D.toneMapping);
			let v = n.morphAttributes.position || n.morphAttributes.normal || n.morphAttributes.color, y = v === void 0 ? 0 : v.length, b = Q.get(r), x = C.state.lights;
			if (se === !0 && (ce === !0 || e !== R)) {
				let t = e === R && r.id === I;
				Ee.setState(r, e, t);
			}
			let S = !1;
			r.version === b.__version ? b.needsLights && b.lightsStateVersion !== x.state.version ? S = !0 : b.outputColorSpace === c ? i.isBatchedMesh && b.batching === !1 || !i.isBatchedMesh && b.batching === !0 || i.isBatchedMesh && b.batchingColor === !0 && i.colorTexture === null || i.isBatchedMesh && b.batchingColor === !1 && i.colorTexture !== null || i.isInstancedMesh && b.instancing === !1 || !i.isInstancedMesh && b.instancing === !0 || i.isSkinnedMesh && b.skinning === !1 || !i.isSkinnedMesh && b.skinning === !0 || i.isInstancedMesh && b.instancingColor === !0 && i.instanceColor === null || i.isInstancedMesh && b.instancingColor === !1 && i.instanceColor !== null || i.isInstancedMesh && b.instancingMorph === !0 && i.morphTexture === null || i.isInstancedMesh && b.instancingMorph === !1 && i.morphTexture !== null ? S = !0 : b.envMap === u ? r.fog === !0 && b.fog !== a || b.numClippingPlanes !== void 0 && (b.numClippingPlanes !== Ee.numPlanes || b.numIntersection !== Ee.numIntersection) ? S = !0 : b.vertexAlphas === d && b.vertexTangents === f && b.morphTargets === p && b.morphNormals === h && b.morphColors === g && b.toneMapping === _ && b.morphTargetsCount === y ? !!b.lightProbeGrid != C.state.lightProbeGridArray.length > 0 && (S = !0) : S = !0 : S = !0 : S = !0 : (S = !0, b.__version = r.version);
			let w = b.currentProgram;
			S === !0 && (w = et(r, t, i), k && r.isNodeMaterial && k.onUpdateProgram(r, w, b));
			let T = !1, E = !1, O = !1, A = w.getUniforms(), j = b.uniforms;
			if (Z.useProgram(w.program) && (T = !0, E = !0, O = !0), r.id !== I && (I = r.id, E = !0), b.needsLights) {
				let e = rt(C.state.lightProbeGridArray, i);
				b.lightProbeGrid !== e && (b.lightProbeGrid = e, E = !0);
			}
			if (T || R !== e) {
				Z.buffers.depth.getReversed() && e.reversedDepth !== !0 && (e._reversedDepth = !0, e.updateProjectionMatrix()), A.setValue(Y, "projectionMatrix", e.projectionMatrix), A.setValue(Y, "viewMatrix", e.matrixWorldInverse);
				let t = A.map.cameraPosition;
				t !== void 0 && t.setValue(Y, ue.setFromMatrixPosition(e.matrixWorld)), ge.logarithmicDepthBuffer && A.setValue(Y, "logDepthBufFC", 2 / (Math.log(e.far + 1) / Math.LN2)), (r.isMeshPhongMaterial || r.isMeshToonMaterial || r.isMeshLambertMaterial || r.isMeshBasicMaterial || r.isMeshStandardMaterial || r.isShaderMaterial) && A.setValue(Y, "isOrthographic", e.isOrthographicCamera === !0), R !== e && (R = e, E = !0, O = !0);
			}
			if (b.needsLights && (x.state.directionalShadowMap.length > 0 && A.setValue(Y, "directionalShadowMap", x.state.directionalShadowMap, $), x.state.spotShadowMap.length > 0 && A.setValue(Y, "spotShadowMap", x.state.spotShadowMap, $), x.state.pointShadowMap.length > 0 && A.setValue(Y, "pointShadowMap", x.state.pointShadowMap, $)), i.isSkinnedMesh) {
				A.setOptional(Y, i, "bindMatrix"), A.setOptional(Y, i, "bindMatrixInverse");
				let e = i.skeleton;
				e && (e.boneTexture === null && e.computeBoneTexture(), A.setValue(Y, "boneTexture", e.boneTexture, $));
			}
			i.isBatchedMesh && (A.setOptional(Y, i, "batchingTexture"), A.setValue(Y, "batchingTexture", i._matricesTexture, $), A.setOptional(Y, i, "batchingIdTexture"), A.setValue(Y, "batchingIdTexture", i._indirectTexture, $), A.setOptional(Y, i, "batchingColorTexture"), i._colorsTexture !== null && A.setValue(Y, "batchingColorTexture", i._colorsTexture, $));
			let N = n.morphAttributes;
			if ((N.position !== void 0 || N.normal !== void 0 || N.color !== void 0) && ke.update(i, n, w), (E || b.receiveShadow !== i.receiveShadow) && (b.receiveShadow = i.receiveShadow, A.setValue(Y, "receiveShadow", i.receiveShadow)), (r.isMeshStandardMaterial || r.isMeshLambertMaterial || r.isMeshPhongMaterial) && r.envMap === null && t.environment !== null && (j.envMapIntensity.value = t.environmentIntensity), j.dfgLUT !== void 0 && (j.dfgLUT.value = getDFGLUT()), E) {
				if (A.setValue(Y, "toneMappingExposure", D.toneMappingExposure), b.needsLights && at(j, O), a && r.fog === !0 && Ce.refreshFogUniforms(j, a), Ce.refreshMaterialUniforms(j, r, W, re, C.state.transmissionRenderTarget[e.id]), b.needsLights && b.lightProbeGrid) {
					let e = b.lightProbeGrid;
					j.probesSH.value = e.texture, j.probesMin.value.copy(e.boundingBox.min), j.probesMax.value.copy(e.boundingBox.max), j.probesResolution.value.copy(e.resolution);
				}
				WebGLUniforms.upload(Y, tt(b), j, $);
			}
			if (r.isShaderMaterial && r.uniformsNeedUpdate === !0 && (WebGLUniforms.upload(Y, tt(b), j, $), r.uniformsNeedUpdate = !1), r.isSpriteMaterial && A.setValue(Y, "center", i.center), A.setValue(Y, "modelViewMatrix", i.modelViewMatrix), A.setValue(Y, "normalMatrix", i.normalMatrix), A.setValue(Y, "modelMatrix", i.matrixWorld), r.uniformsGroups !== void 0) {
				let e = r.uniformsGroups;
				for (let t = 0, n = e.length; t < n; t++) {
					let n = e[t];
					Pe.update(n, w), Pe.bind(n, w);
				}
			}
			return w;
		}
		function at(e, t) {
			e.ambientLightColor.needsUpdate = t, e.lightProbe.needsUpdate = t, e.directionalLights.needsUpdate = t, e.directionalLightShadows.needsUpdate = t, e.pointLights.needsUpdate = t, e.pointLightShadows.needsUpdate = t, e.spotLights.needsUpdate = t, e.spotLightShadows.needsUpdate = t, e.rectAreaLights.needsUpdate = t, e.hemisphereLights.needsUpdate = t;
		}
		function ot(e) {
			return e.isMeshLambertMaterial || e.isMeshToonMaterial || e.isMeshPhongMaterial || e.isMeshStandardMaterial || e.isShadowMaterial || e.isShaderMaterial && e.lights === !0;
		}
		this.getActiveCubeFace = function() {
			return P;
		}, this.getActiveMipmapLevel = function() {
			return ee;
		}, this.getRenderTarget = function() {
			return F;
		}, this.setRenderTargetTextures = function(e, t, n) {
			let r = Q.get(e);
			r.__autoAllocateDepthBuffer = e.resolveDepthBuffer === !1, r.__autoAllocateDepthBuffer === !1 && (r.__useRenderToTexture = !1), Q.get(e.texture).__webglTexture = t, Q.get(e.depthTexture).__webglTexture = r.__autoAllocateDepthBuffer ? void 0 : n, r.__hasExternalTextures = !0;
		}, this.setRenderTargetFramebuffer = function(e, t) {
			let n = Q.get(e);
			n.__webglFramebuffer = t, n.__useDefaultFramebuffer = t === void 0;
		}, this.setRenderTarget = function(e, t = 0, n = 0) {
			F = e, P = t, ee = n;
			let r = null, i = !1, a = !1;
			if (e) {
				let s = Q.get(e);
				if (s.__useDefaultFramebuffer !== void 0) {
					Z.bindFramebuffer(Y.FRAMEBUFFER, s.__webglFramebuffer), z.copy(e.viewport), te.copy(e.scissor), B = e.scissorTest, Z.viewport(z), Z.scissor(te), Z.setScissorTest(B), I = -1;
					return;
				} else if (s.__webglFramebuffer === void 0) $.setupRenderTarget(e);
				else if (s.__hasExternalTextures) $.rebindTextures(e, Q.get(e.texture).__webglTexture, Q.get(e.depthTexture).__webglTexture);
				else if (e.depthBuffer) {
					let t = e.depthTexture;
					if (s.__boundDepthTexture !== t) {
						if (t !== null && Q.has(t) && (e.width !== t.image.width || e.height !== t.image.height)) throw Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");
						$.setupDepthRenderbuffer(e);
					}
				}
				let c = e.texture;
				(c.isData3DTexture || c.isDataArrayTexture || c.isCompressedArrayTexture) && (a = !0);
				let l = Q.get(e).__webglFramebuffer;
				e.isWebGLCubeRenderTarget ? (r = Array.isArray(l[t]) ? l[t][n] : l[t], i = !0) : r = e.samples > 0 && $.useMultisampledRTT(e) === !1 ? Q.get(e).__webglMultisampledFramebuffer : Array.isArray(l) ? l[n] : l, z.copy(e.viewport), te.copy(e.scissor), B = e.scissorTest;
			} else z.copy(ie).multiplyScalar(W).floor(), te.copy(J).multiplyScalar(W).floor(), B = ae;
			if (n !== 0 && (r = A), Z.bindFramebuffer(Y.FRAMEBUFFER, r) && Z.drawBuffers(e, r), Z.viewport(z), Z.scissor(te), Z.setScissorTest(B), i) {
				let r = Q.get(e.texture);
				Y.framebufferTexture2D(Y.FRAMEBUFFER, Y.COLOR_ATTACHMENT0, Y.TEXTURE_CUBE_MAP_POSITIVE_X + t, r.__webglTexture, n);
			} else if (a) {
				let r = t;
				for (let t = 0; t < e.textures.length; t++) {
					let i = Q.get(e.textures[t]);
					Y.framebufferTextureLayer(Y.FRAMEBUFFER, Y.COLOR_ATTACHMENT0 + t, i.__webglTexture, n, r);
				}
			} else if (e !== null && n !== 0) {
				let t = Q.get(e.texture);
				Y.framebufferTexture2D(Y.FRAMEBUFFER, Y.COLOR_ATTACHMENT0, Y.TEXTURE_2D, t.__webglTexture, n);
			}
			I = -1;
		}, this.readRenderTargetPixels = function(e, t, n, r, i, a, s, c = 0) {
			if (!(e && e.isWebGLRenderTarget)) {
				error("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
				return;
			}
			let l = Q.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && s !== void 0 && (l = l[s]), l) {
				Z.bindFramebuffer(Y.FRAMEBUFFER, l);
				try {
					let s = e.textures[c], l = s.format, u = s.type;
					if (e.textures.length > 1 && Y.readBuffer(Y.COLOR_ATTACHMENT0 + c), !ge.textureFormatReadable(l)) {
						error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
						return;
					}
					if (!ge.textureTypeReadable(u)) {
						error("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
						return;
					}
					t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i && Y.readPixels(t, n, r, i, Me.convert(l), Me.convert(u), a);
				} finally {
					let e = F === null ? null : Q.get(F).__webglFramebuffer;
					Z.bindFramebuffer(Y.FRAMEBUFFER, e);
				}
			}
		}, this.readRenderTargetPixelsAsync = async function(e, t, n, r, i, a, s, c = 0) {
			if (!(e && e.isWebGLRenderTarget)) throw Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
			let l = Q.get(e).__webglFramebuffer;
			if (e.isWebGLCubeRenderTarget && s !== void 0 && (l = l[s]), l) if (t >= 0 && t <= e.width - r && n >= 0 && n <= e.height - i) {
				Z.bindFramebuffer(Y.FRAMEBUFFER, l);
				let s = e.textures[c], u = s.format, d = s.type;
				if (e.textures.length > 1 && Y.readBuffer(Y.COLOR_ATTACHMENT0 + c), !ge.textureFormatReadable(u)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
				if (!ge.textureTypeReadable(d)) throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
				let f = Y.createBuffer();
				Y.bindBuffer(Y.PIXEL_PACK_BUFFER, f), Y.bufferData(Y.PIXEL_PACK_BUFFER, a.byteLength, Y.STREAM_READ), Y.readPixels(t, n, r, i, Me.convert(u), Me.convert(d), 0);
				let p = F === null ? null : Q.get(F).__webglFramebuffer;
				Z.bindFramebuffer(Y.FRAMEBUFFER, p);
				let h = Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE, 0);
				return Y.flush(), await probeAsync(Y, h, 4), Y.bindBuffer(Y.PIXEL_PACK_BUFFER, f), Y.getBufferSubData(Y.PIXEL_PACK_BUFFER, 0, a), Y.deleteBuffer(f), Y.deleteSync(h), a;
			} else throw Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
		}, this.copyFramebufferToTexture = function(e, t = null, n = 0) {
			let r = 2 ** -n, i = Math.floor(e.image.width * r), a = Math.floor(e.image.height * r), s = t === null ? 0 : t.x, c = t === null ? 0 : t.y;
			$.setTexture2D(e, 0), Y.copyTexSubImage2D(Y.TEXTURE_2D, n, 0, 0, s, c, i, a), Z.unbindTexture();
		}, this.copyTextureToTexture = function(e, t, n = null, r = null, i = 0, a = 0) {
			let s, c, l, u, d, f, p, h, g, _ = e.isCompressedTexture ? e.mipmaps[a] : e.image;
			if (n !== null) s = n.max.x - n.min.x, c = n.max.y - n.min.y, l = n.isBox3 ? n.max.z - n.min.z : 1, u = n.min.x, d = n.min.y, f = n.isBox3 ? n.min.z : 0;
			else {
				let t = 2 ** -i;
				s = Math.floor(_.width * t), c = Math.floor(_.height * t), l = e.isDataArrayTexture ? _.depth : e.isData3DTexture ? Math.floor(_.depth * t) : 1, u = 0, d = 0, f = 0;
			}
			r === null ? (p = 0, h = 0, g = 0) : (p = r.x, h = r.y, g = r.z);
			let v = Me.convert(t.format), y = Me.convert(t.type), b;
			t.isData3DTexture ? ($.setTexture3D(t, 0), b = Y.TEXTURE_3D) : t.isDataArrayTexture || t.isCompressedArrayTexture ? ($.setTexture2DArray(t, 0), b = Y.TEXTURE_2D_ARRAY) : ($.setTexture2D(t, 0), b = Y.TEXTURE_2D), Z.activeTexture(Y.TEXTURE0), Z.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL, t.flipY), Z.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultiplyAlpha), Z.pixelStorei(Y.UNPACK_ALIGNMENT, t.unpackAlignment);
			let x = Z.getParameter(Y.UNPACK_ROW_LENGTH), S = Z.getParameter(Y.UNPACK_IMAGE_HEIGHT), C = Z.getParameter(Y.UNPACK_SKIP_PIXELS), w = Z.getParameter(Y.UNPACK_SKIP_ROWS), T = Z.getParameter(Y.UNPACK_SKIP_IMAGES);
			Z.pixelStorei(Y.UNPACK_ROW_LENGTH, _.width), Z.pixelStorei(Y.UNPACK_IMAGE_HEIGHT, _.height), Z.pixelStorei(Y.UNPACK_SKIP_PIXELS, u), Z.pixelStorei(Y.UNPACK_SKIP_ROWS, d), Z.pixelStorei(Y.UNPACK_SKIP_IMAGES, f);
			let E = e.isDataArrayTexture || e.isData3DTexture, D = t.isDataArrayTexture || t.isData3DTexture;
			if (e.isDepthTexture) {
				let n = Q.get(e), r = Q.get(t), _ = Q.get(n.__renderTarget), v = Q.get(r.__renderTarget);
				Z.bindFramebuffer(Y.READ_FRAMEBUFFER, _.__webglFramebuffer), Z.bindFramebuffer(Y.DRAW_FRAMEBUFFER, v.__webglFramebuffer);
				for (let n = 0; n < l; n++) E && (Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER, Y.COLOR_ATTACHMENT0, Q.get(e).__webglTexture, i, f + n), Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER, Y.COLOR_ATTACHMENT0, Q.get(t).__webglTexture, a, g + n)), Y.blitFramebuffer(u, d, s, c, p, h, s, c, Y.DEPTH_BUFFER_BIT, Y.NEAREST);
				Z.bindFramebuffer(Y.READ_FRAMEBUFFER, null), Z.bindFramebuffer(Y.DRAW_FRAMEBUFFER, null);
			} else if (i !== 0 || e.isRenderTargetTexture || Q.has(e)) {
				let n = Q.get(e), r = Q.get(t);
				Z.bindFramebuffer(Y.READ_FRAMEBUFFER, j), Z.bindFramebuffer(Y.DRAW_FRAMEBUFFER, N);
				for (let e = 0; e < l; e++) E ? Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER, Y.COLOR_ATTACHMENT0, n.__webglTexture, i, f + e) : Y.framebufferTexture2D(Y.READ_FRAMEBUFFER, Y.COLOR_ATTACHMENT0, Y.TEXTURE_2D, n.__webglTexture, i), D ? Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER, Y.COLOR_ATTACHMENT0, r.__webglTexture, a, g + e) : Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER, Y.COLOR_ATTACHMENT0, Y.TEXTURE_2D, r.__webglTexture, a), i === 0 ? D ? Y.copyTexSubImage3D(b, a, p, h, g + e, u, d, s, c) : Y.copyTexSubImage2D(b, a, p, h, u, d, s, c) : Y.blitFramebuffer(u, d, s, c, p, h, s, c, Y.COLOR_BUFFER_BIT, Y.NEAREST);
				Z.bindFramebuffer(Y.READ_FRAMEBUFFER, null), Z.bindFramebuffer(Y.DRAW_FRAMEBUFFER, null);
			} else D ? e.isDataTexture || e.isData3DTexture ? Y.texSubImage3D(b, a, p, h, g, s, c, l, v, y, _.data) : t.isCompressedArrayTexture ? Y.compressedTexSubImage3D(b, a, p, h, g, s, c, l, v, _.data) : Y.texSubImage3D(b, a, p, h, g, s, c, l, v, y, _) : e.isDataTexture ? Y.texSubImage2D(Y.TEXTURE_2D, a, p, h, s, c, v, y, _.data) : e.isCompressedTexture ? Y.compressedTexSubImage2D(Y.TEXTURE_2D, a, p, h, _.width, _.height, v, _.data) : Y.texSubImage2D(Y.TEXTURE_2D, a, p, h, s, c, v, y, _);
			Z.pixelStorei(Y.UNPACK_ROW_LENGTH, x), Z.pixelStorei(Y.UNPACK_IMAGE_HEIGHT, S), Z.pixelStorei(Y.UNPACK_SKIP_PIXELS, C), Z.pixelStorei(Y.UNPACK_SKIP_ROWS, w), Z.pixelStorei(Y.UNPACK_SKIP_IMAGES, T), a === 0 && t.generateMipmaps && Y.generateMipmap(b), Z.unbindTexture();
		}, this.initRenderTarget = function(e) {
			Q.get(e).__webglFramebuffer === void 0 && $.setupRenderTarget(e);
		}, this.initTexture = function(e) {
			e.isCubeTexture ? $.setTextureCube(e, 0) : e.isData3DTexture ? $.setTexture3D(e, 0) : e.isDataArrayTexture || e.isCompressedArrayTexture ? $.setTexture2DArray(e, 0) : $.setTexture2D(e, 0), Z.unbindTexture();
		}, this.resetState = function() {
			P = 0, ee = 0, F = null, Z.reset(), Ne.reset();
		}, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
	}
	get coordinateSystem() {
		return WebGLCoordinateSystem;
	}
	get outputColorSpace() {
		return this._outputColorSpace;
	}
	set outputColorSpace(e) {
		this._outputColorSpace = e;
		let t = this.getContext();
		t.drawingBufferColorSpace = ColorManagement._getDrawingBufferColorSpace(e), t.unpackColorSpace = ColorManagement._getUnpackColorSpace();
	}
}, FontLoader = class extends Loader {
	constructor(e) {
		super(e);
	}
	load(e, t, n, r) {
		let i = this, a = new FileLoader(this.manager);
		a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(e) {
			let n = i.parse(JSON.parse(e));
			t && t(n);
		}, n, r);
	}
	parse(e) {
		return new Font(e);
	}
}, Font = class {
	constructor(e) {
		this.isFont = !0, this.type = "Font", this.data = e;
	}
	generateShapes(e, t = 100, n = "ltr") {
		let r = [], i = createPaths(e, t, this.data, n);
		for (let e = 0, t = i.length; e < t; e++) r.push(...i[e].toShapes());
		return r;
	}
};
function createPaths(e, t, n, r) {
	let i = Array.from(e), a = t / n.resolution, s = (n.boundingBox.yMax - n.boundingBox.yMin + n.underlineThickness) * a, c = [], l = 0, u = 0;
	(r == "rtl" || r == "tb") && i.reverse();
	for (let e = 0; e < i.length; e++) {
		let t = i[e];
		if (t === "\n") l = 0, u -= s;
		else {
			let e = createPath(t, a, l, u, n);
			r == "tb" ? (l = 0, u += n.ascender * a) : l += e.offsetX, c.push(e.path);
		}
	}
	return c;
}
function createPath(e, t, n, r, i) {
	let a = i.glyphs[e] || i.glyphs["?"];
	if (!a) {
		console.error("THREE.Font: character \"" + e + "\" does not exists in font family " + i.familyName + ".");
		return;
	}
	let s = new ShapePath(), c, l, u, d, f, p, h, g;
	if (a.o) {
		let e = a._cachedOutline ||= a.o.split(" ");
		for (let i = 0, a = e.length; i < a;) switch (e[i++]) {
			case "m":
				c = e[i++] * t + n, l = e[i++] * t + r, s.moveTo(c, l);
				break;
			case "l":
				c = e[i++] * t + n, l = e[i++] * t + r, s.lineTo(c, l);
				break;
			case "q":
				u = e[i++] * t + n, d = e[i++] * t + r, f = e[i++] * t + n, p = e[i++] * t + r, s.quadraticCurveTo(f, p, u, d);
				break;
			case "b":
				u = e[i++] * t + n, d = e[i++] * t + r, f = e[i++] * t + n, p = e[i++] * t + r, h = e[i++] * t + n, g = e[i++] * t + r, s.bezierCurveTo(f, p, h, g, u, d);
				break;
		}
	}
	return {
		offsetX: a.ha * t,
		path: s
	};
}
//#endregion
//#region node_modules/three/examples/jsm/geometries/TextGeometry.js
var TextGeometry = class e extends ExtrudeGeometry {
	constructor(e, t = {}) {
		let n = t.font;
		if (n === void 0) super();
		else {
			let r = n.generateShapes(e, t.size, t.direction);
			t.depth === void 0 && (t.depth = 50), t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), super(r, t);
		}
		this.type = "TextGeometry";
	}
	toJSON() {
		return super.toJSON();
	}
	static fromJSON(t) {
		let n = t.options;
		return n.font = new Font(n.font.data), new e(n.text, n);
	}
}, helvetiker_regular_typeface = {
	glyphs: {
		ο: {
			x_min: 0,
			x_max: 712,
			ha: 815,
			o: "m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 "
		},
		S: {
			x_min: 0,
			x_max: 788,
			ha: 890,
			o: "m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 "
		},
		"¦": {
			x_min: 343,
			x_max: 449,
			ha: 792,
			o: "m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "
		},
		"/": {
			x_min: 183.25,
			x_max: 608.328125,
			ha: 792,
			o: "m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 "
		},
		Τ: {
			x_min: -.4375,
			x_max: 777.453125,
			ha: 839,
			o: "m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 "
		},
		y: {
			x_min: 0,
			x_max: 684.78125,
			ha: 771,
			o: "m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 "
		},
		Π: {
			x_min: 0,
			x_max: 803,
			ha: 917,
			o: "m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 "
		},
		ΐ: {
			x_min: -111,
			x_max: 339,
			ha: 361,
			o: "m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 "
		},
		g: {
			x_min: 0,
			x_max: 686,
			ha: 838,
			o: "m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 "
		},
		"²": {
			x_min: 0,
			x_max: 442,
			ha: 539,
			o: "m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 "
		},
		"–": {
			x_min: 0,
			x_max: 705.5625,
			ha: 803,
			o: "m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "
		},
		Κ: {
			x_min: 0,
			x_max: 819.5625,
			ha: 893,
			o: "m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "
		},
		ƒ: {
			x_min: -46.265625,
			x_max: 392,
			ha: 513,
			o: "m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 "
		},
		e: {
			x_min: 0,
			x_max: 714,
			ha: 813,
			o: "m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 "
		},
		ό: {
			x_min: 0,
			x_max: 712,
			ha: 815,
			o: "m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 "
		},
		J: {
			x_min: 0,
			x_max: 588,
			ha: 699,
			o: "m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 "
		},
		"»": {
			x_min: -1,
			x_max: 503,
			ha: 601,
			o: "m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 "
		},
		"©": {
			x_min: -3,
			x_max: 1008,
			ha: 1106,
			o: "m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 "
		},
		ώ: {
			x_min: 0,
			x_max: 922,
			ha: 1030,
			o: "m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 "
		},
		"^": {
			x_min: 193.0625,
			x_max: 598.609375,
			ha: 792,
			o: "m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 "
		},
		"«": {
			x_min: 0,
			x_max: 507.203125,
			ha: 604,
			o: "m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 "
		},
		D: {
			x_min: 0,
			x_max: 828,
			ha: 935,
			o: "m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 "
		},
		"∙": {
			x_min: 0,
			x_max: 142,
			ha: 239,
			o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "
		},
		ÿ: {
			x_min: 0,
			x_max: 47,
			ha: 125,
			o: "m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 "
		},
		w: {
			x_min: 0,
			x_max: 1009.71875,
			ha: 1100,
			o: "m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 "
		},
		$: {
			x_min: 0,
			x_max: 700,
			ha: 793,
			o: "m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 "
		},
		"\\": {
			x_min: -.015625,
			x_max: 425.0625,
			ha: 522,
			o: "m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 "
		},
		µ: {
			x_min: 0,
			x_max: 697.21875,
			ha: 747,
			o: "m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 "
		},
		Ι: {
			x_min: 42,
			x_max: 181,
			ha: 297,
			o: "m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 "
		},
		Ύ: {
			x_min: 0,
			x_max: 1144.5,
			ha: 1214,
			o: "m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "
		},
		"’": {
			x_min: 0,
			x_max: 139,
			ha: 236,
			o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "
		},
		Ν: {
			x_min: 0,
			x_max: 801,
			ha: 915,
			o: "m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 "
		},
		"-": {
			x_min: 8.71875,
			x_max: 350.390625,
			ha: 478,
			o: "m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 "
		},
		Q: {
			x_min: 0,
			x_max: 968,
			ha: 1072,
			o: "m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 "
		},
		ς: {
			x_min: 1,
			x_max: 676.28125,
			ha: 740,
			o: "m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 "
		},
		M: {
			x_min: 0,
			x_max: 954,
			ha: 1067,
			o: "m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 "
		},
		Ψ: {
			x_min: 0,
			x_max: 1006,
			ha: 1094,
			o: "m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 "
		},
		C: {
			x_min: 0,
			x_max: 886,
			ha: 944,
			o: "m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 "
		},
		"!": {
			x_min: 0,
			x_max: 138,
			ha: 236,
			o: "m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 "
		},
		"{": {
			x_min: 0,
			x_max: 480.5625,
			ha: 578,
			o: "m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 "
		},
		X: {
			x_min: -.015625,
			x_max: 854.15625,
			ha: 940,
			o: "m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 "
		},
		"#": {
			x_min: 0,
			x_max: 963.890625,
			ha: 1061,
			o: "m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 "
		},
		ι: {
			x_min: 42,
			x_max: 284,
			ha: 361,
			o: "m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 "
		},
		Ά: {
			x_min: 0,
			x_max: 906.953125,
			ha: 982,
			o: "m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "
		},
		")": {
			x_min: 0,
			x_max: 318,
			ha: 415,
			o: "m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 "
		},
		ε: {
			x_min: 0,
			x_max: 634.71875,
			ha: 714,
			o: "m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 "
		},
		Δ: {
			x_min: 0,
			x_max: 952.78125,
			ha: 1028,
			o: "m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 "
		},
		"}": {
			x_min: 0,
			x_max: 481,
			ha: 578,
			o: "m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 "
		},
		"‰": {
			x_min: -3,
			x_max: 1672,
			ha: 1821,
			o: "m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 "
		},
		a: {
			x_min: 0,
			x_max: 698.609375,
			ha: 794,
			o: "m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 "
		},
		"—": {
			x_min: 0,
			x_max: 941.671875,
			ha: 1039,
			o: "m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 "
		},
		"=": {
			x_min: 8.71875,
			x_max: 780.953125,
			ha: 792,
			o: "m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 "
		},
		N: {
			x_min: 0,
			x_max: 801,
			ha: 914,
			o: "m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 "
		},
		ρ: {
			x_min: 0,
			x_max: 712,
			ha: 797,
			o: "m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 "
		},
		2: {
			x_min: 59,
			x_max: 731,
			ha: 792,
			o: "m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 "
		},
		"¯": {
			x_min: 0,
			x_max: 941.671875,
			ha: 938,
			o: "m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 "
		},
		Z: {
			x_min: 0,
			x_max: 779,
			ha: 849,
			o: "m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 "
		},
		u: {
			x_min: 0,
			x_max: 617,
			ha: 729,
			o: "m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 "
		},
		k: {
			x_min: 0,
			x_max: 612.484375,
			ha: 697,
			o: "m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 "
		},
		Η: {
			x_min: 0,
			x_max: 803,
			ha: 917,
			o: "m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "
		},
		Α: {
			x_min: 0,
			x_max: 906.953125,
			ha: 985,
			o: "m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 "
		},
		s: {
			x_min: 0,
			x_max: 604,
			ha: 697,
			o: "m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 "
		},
		B: {
			x_min: 0,
			x_max: 778,
			ha: 876,
			o: "m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 "
		},
		"…": {
			x_min: 0,
			x_max: 614,
			ha: 708,
			o: "m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 "
		},
		"?": {
			x_min: 0,
			x_max: 607,
			ha: 704,
			o: "m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 "
		},
		H: {
			x_min: 0,
			x_max: 803,
			ha: 915,
			o: "m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 "
		},
		ν: {
			x_min: 0,
			x_max: 675,
			ha: 761,
			o: "m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 "
		},
		c: {
			x_min: 1,
			x_max: 701.390625,
			ha: 775,
			o: "m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 "
		},
		"¶": {
			x_min: 0,
			x_max: 566.671875,
			ha: 678,
			o: "m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 "
		},
		β: {
			x_min: 0,
			x_max: 660,
			ha: 745,
			o: "m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 "
		},
		Μ: {
			x_min: 0,
			x_max: 954,
			ha: 1068,
			o: "m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 "
		},
		Ό: {
			x_min: .109375,
			x_max: 1120,
			ha: 1217,
			o: "m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "
		},
		Ή: {
			x_min: 0,
			x_max: 1158,
			ha: 1275,
			o: "m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "
		},
		"•": {
			x_min: 0,
			x_max: 663.890625,
			ha: 775,
			o: "m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 "
		},
		"¥": {
			x_min: .1875,
			x_max: 819.546875,
			ha: 886,
			o: "m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 "
		},
		"(": {
			x_min: 0,
			x_max: 318.0625,
			ha: 415,
			o: "m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 "
		},
		U: {
			x_min: 0,
			x_max: 796,
			ha: 904,
			o: "m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 "
		},
		γ: {
			x_min: .5,
			x_max: 744.953125,
			ha: 822,
			o: "m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 "
		},
		α: {
			x_min: 0,
			x_max: 765.5625,
			ha: 809,
			o: "m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 "
		},
		F: {
			x_min: 0,
			x_max: 683.328125,
			ha: 717,
			o: "m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 "
		},
		"­": {
			x_min: 0,
			x_max: 705.5625,
			ha: 803,
			o: "m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 "
		},
		":": {
			x_min: 0,
			x_max: 142,
			ha: 239,
			o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "
		},
		Χ: {
			x_min: 0,
			x_max: 854.171875,
			ha: 935,
			o: "m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 "
		},
		"*": {
			x_min: 116,
			x_max: 674,
			ha: 792,
			o: "m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 "
		},
		"†": {
			x_min: 0,
			x_max: 777,
			ha: 835,
			o: "m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 "
		},
		"°": {
			x_min: 0,
			x_max: 347,
			ha: 444,
			o: "m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 "
		},
		V: {
			x_min: 0,
			x_max: 862.71875,
			ha: 940,
			o: "m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 "
		},
		Ξ: {
			x_min: 0,
			x_max: 734.71875,
			ha: 763,
			o: "m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 "
		},
		"\xA0": {
			x_min: 0,
			x_max: 0,
			ha: 853
		},
		Ϋ: {
			x_min: .328125,
			x_max: 819.515625,
			ha: 889,
			o: "m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 "
		},
		0: {
			x_min: 73,
			x_max: 715,
			ha: 792,
			o: "m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 "
		},
		"”": {
			x_min: 0,
			x_max: 347,
			ha: 454,
			o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 "
		},
		"@": {
			x_min: 0,
			x_max: 1260,
			ha: 1357,
			o: "m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 "
		},
		Ί: {
			x_min: 0,
			x_max: 499,
			ha: 613,
			o: "m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 "
		},
		i: {
			x_min: 14,
			x_max: 136,
			ha: 275,
			o: "m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 "
		},
		Β: {
			x_min: 0,
			x_max: 778,
			ha: 877,
			o: "m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 "
		},
		υ: {
			x_min: 0,
			x_max: 617,
			ha: 725,
			o: "m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 "
		},
		"]": {
			x_min: 0,
			x_max: 275,
			ha: 372,
			o: "m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 "
		},
		m: {
			x_min: 0,
			x_max: 1019,
			ha: 1128,
			o: "m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 "
		},
		χ: {
			x_min: 8.328125,
			x_max: 780.5625,
			ha: 815,
			o: "m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 "
		},
		8: {
			x_min: 55,
			x_max: 736,
			ha: 792,
			o: "m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 "
		},
		ί: {
			x_min: 42,
			x_max: 326.71875,
			ha: 361,
			o: "m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 "
		},
		Ζ: {
			x_min: 0,
			x_max: 779.171875,
			ha: 850,
			o: "m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 "
		},
		R: {
			x_min: 0,
			x_max: 781.953125,
			ha: 907,
			o: "m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 "
		},
		o: {
			x_min: 0,
			x_max: 713,
			ha: 821,
			o: "m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 "
		},
		5: {
			x_min: 54.171875,
			x_max: 738,
			ha: 792,
			o: "m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 "
		},
		7: {
			x_min: 58.71875,
			x_max: 730.953125,
			ha: 792,
			o: "m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 "
		},
		K: {
			x_min: 0,
			x_max: 819.46875,
			ha: 906,
			o: "m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 "
		},
		",": {
			x_min: 0,
			x_max: 142,
			ha: 239,
			o: "m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 "
		},
		d: {
			x_min: 0,
			x_max: 683,
			ha: 796,
			o: "m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 "
		},
		"¨": {
			x_min: -109,
			x_max: 247,
			ha: 232,
			o: "m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 "
		},
		E: {
			x_min: 0,
			x_max: 736.109375,
			ha: 789,
			o: "m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "
		},
		Y: {
			x_min: 0,
			x_max: 820,
			ha: 886,
			o: "m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 "
		},
		"\"": {
			x_min: 0,
			x_max: 299,
			ha: 396,
			o: "m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "
		},
		"‹": {
			x_min: 17.984375,
			x_max: 773.609375,
			ha: 792,
			o: "m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "
		},
		"„": {
			x_min: 0,
			x_max: 364,
			ha: 467,
			o: "m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 "
		},
		δ: {
			x_min: 1,
			x_max: 710,
			ha: 810,
			o: "m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 "
		},
		έ: {
			x_min: 0,
			x_max: 634.71875,
			ha: 714,
			o: "m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 "
		},
		ω: {
			x_min: 0,
			x_max: 922,
			ha: 1031,
			o: "m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 "
		},
		"´": {
			x_min: 0,
			x_max: 96,
			ha: 251,
			o: "m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 "
		},
		"±": {
			x_min: 11,
			x_max: 781,
			ha: 792,
			o: "m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 "
		},
		"|": {
			x_min: 343,
			x_max: 449,
			ha: 792,
			o: "m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 "
		},
		ϋ: {
			x_min: 0,
			x_max: 617,
			ha: 725,
			o: "m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 "
		},
		"§": {
			x_min: 0,
			x_max: 593,
			ha: 690,
			o: "m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 "
		},
		b: {
			x_min: 0,
			x_max: 685,
			ha: 783,
			o: "m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 "
		},
		q: {
			x_min: 0,
			x_max: 683,
			ha: 876,
			o: "m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 "
		},
		Ω: {
			x_min: -.171875,
			x_max: 969.5625,
			ha: 1068,
			o: "m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 "
		},
		ύ: {
			x_min: 0,
			x_max: 617,
			ha: 725,
			o: "m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 "
		},
		z: {
			x_min: -.015625,
			x_max: 613.890625,
			ha: 697,
			o: "m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 "
		},
		"™": {
			x_min: 0,
			x_max: 894,
			ha: 1e3,
			o: "m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 "
		},
		ή: {
			x_min: .78125,
			x_max: 697,
			ha: 810,
			o: "m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 "
		},
		Θ: {
			x_min: 0,
			x_max: 960,
			ha: 1056,
			o: "m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 "
		},
		"®": {
			x_min: -3,
			x_max: 1008,
			ha: 1106,
			o: "m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 "
		},
		"~": {
			x_min: 0,
			x_max: 833,
			ha: 931,
			o: "m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 "
		},
		Ε: {
			x_min: 0,
			x_max: 736.21875,
			ha: 778,
			o: "m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 "
		},
		"³": {
			x_min: 0,
			x_max: 450,
			ha: 547,
			o: "m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 "
		},
		"[": {
			x_min: 0,
			x_max: 273.609375,
			ha: 371,
			o: "m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 "
		},
		L: {
			x_min: 0,
			x_max: 645.828125,
			ha: 696,
			o: "m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 "
		},
		σ: {
			x_min: 0,
			x_max: 803.390625,
			ha: 894,
			o: "m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 "
		},
		ζ: {
			x_min: 0,
			x_max: 573,
			ha: 642,
			o: "m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 "
		},
		θ: {
			x_min: 0,
			x_max: 674,
			ha: 778,
			o: "m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 "
		},
		Ο: {
			x_min: 0,
			x_max: 958,
			ha: 1054,
			o: "m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 "
		},
		Γ: {
			x_min: 0,
			x_max: 705.28125,
			ha: 749,
			o: "m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 "
		},
		" ": {
			x_min: 0,
			x_max: 0,
			ha: 375
		},
		"%": {
			x_min: -3,
			x_max: 1089,
			ha: 1186,
			o: "m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 "
		},
		P: {
			x_min: 0,
			x_max: 726,
			ha: 806,
			o: "m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 "
		},
		Έ: {
			x_min: 0,
			x_max: 1078.21875,
			ha: 1118,
			o: "m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 "
		},
		Ώ: {
			x_min: .125,
			x_max: 1136.546875,
			ha: 1235,
			o: "m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 "
		},
		_: {
			x_min: 0,
			x_max: 705.5625,
			ha: 803,
			o: "m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 "
		},
		Ϊ: {
			x_min: -110,
			x_max: 246,
			ha: 275,
			o: "m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 "
		},
		"+": {
			x_min: 23,
			x_max: 768,
			ha: 792,
			o: "m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 "
		},
		"½": {
			x_min: 0,
			x_max: 1050,
			ha: 1149,
			o: "m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 "
		},
		Ρ: {
			x_min: 0,
			x_max: 720,
			ha: 783,
			o: "m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 "
		},
		"'": {
			x_min: 0,
			x_max: 139,
			ha: 236,
			o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 "
		},
		ª: {
			x_min: 0,
			x_max: 350,
			ha: 397,
			o: "m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 "
		},
		"΅": {
			x_min: 0,
			x_max: 450,
			ha: 553,
			o: "m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 "
		},
		T: {
			x_min: 0,
			x_max: 777,
			ha: 835,
			o: "m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 "
		},
		Φ: {
			x_min: 0,
			x_max: 915,
			ha: 997,
			o: "m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 "
		},
		"⁋": {
			x_min: 0,
			x_max: 0,
			ha: 694
		},
		j: {
			x_min: -77.78125,
			x_max: 167,
			ha: 349,
			o: "m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 "
		},
		Σ: {
			x_min: 0,
			x_max: 756.953125,
			ha: 819,
			o: "m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 "
		},
		1: {
			x_min: 215.671875,
			x_max: 574,
			ha: 792,
			o: "m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 "
		},
		"›": {
			x_min: 18.0625,
			x_max: 774,
			ha: 792,
			o: "m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "
		},
		"<": {
			x_min: 17.984375,
			x_max: 773.609375,
			ha: 792,
			o: "m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 "
		},
		"£": {
			x_min: 0,
			x_max: 704.484375,
			ha: 801,
			o: "m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 "
		},
		t: {
			x_min: 0,
			x_max: 367,
			ha: 458,
			o: "m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 "
		},
		"¬": {
			x_min: 0,
			x_max: 706,
			ha: 803,
			o: "m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 "
		},
		λ: {
			x_min: 0,
			x_max: 750,
			ha: 803,
			o: "m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 "
		},
		W: {
			x_min: 0,
			x_max: 1263.890625,
			ha: 1351,
			o: "m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 "
		},
		">": {
			x_min: 18.0625,
			x_max: 774,
			ha: 792,
			o: "m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 "
		},
		v: {
			x_min: 0,
			x_max: 675.15625,
			ha: 761,
			o: "m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 "
		},
		τ: {
			x_min: .28125,
			x_max: 644.5,
			ha: 703,
			o: "m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 "
		},
		ξ: {
			x_min: 0,
			x_max: 624.9375,
			ha: 699,
			o: "m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 "
		},
		"&": {
			x_min: -3,
			x_max: 894.25,
			ha: 992,
			o: "m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 "
		},
		Λ: {
			x_min: 0,
			x_max: 862.5,
			ha: 942,
			o: "m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 "
		},
		I: {
			x_min: 41,
			x_max: 180,
			ha: 293,
			o: "m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 "
		},
		G: {
			x_min: 0,
			x_max: 921,
			ha: 1011,
			o: "m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 "
		},
		ΰ: {
			x_min: 0,
			x_max: 617,
			ha: 725,
			o: "m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 "
		},
		"`": {
			x_min: 0,
			x_max: 138.890625,
			ha: 236,
			o: "m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 "
		},
		"·": {
			x_min: 0,
			x_max: 142,
			ha: 239,
			o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 "
		},
		Υ: {
			x_min: .328125,
			x_max: 819.515625,
			ha: 889,
			o: "m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 "
		},
		r: {
			x_min: 0,
			x_max: 355.5625,
			ha: 432,
			o: "m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 "
		},
		x: {
			x_min: 0,
			x_max: 675,
			ha: 764,
			o: "m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 "
		},
		μ: {
			x_min: 0,
			x_max: 696.609375,
			ha: 747,
			o: "m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 "
		},
		h: {
			x_min: 0,
			x_max: 615,
			ha: 724,
			o: "m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 "
		},
		".": {
			x_min: 0,
			x_max: 142,
			ha: 239,
			o: "m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 "
		},
		φ: {
			x_min: -2,
			x_max: 878,
			ha: 974,
			o: "m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 "
		},
		";": {
			x_min: 0,
			x_max: 142,
			ha: 239,
			o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 "
		},
		f: {
			x_min: 0,
			x_max: 378,
			ha: 472,
			o: "m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 "
		},
		"“": {
			x_min: 1,
			x_max: 348.21875,
			ha: 454,
			o: "m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 "
		},
		A: {
			x_min: .03125,
			x_max: 906.953125,
			ha: 1008,
			o: "m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 "
		},
		6: {
			x_min: 53,
			x_max: 739,
			ha: 792,
			o: "m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 "
		},
		"‘": {
			x_min: 1,
			x_max: 139.890625,
			ha: 236,
			o: "m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 "
		},
		ϊ: {
			x_min: -70,
			x_max: 283,
			ha: 361,
			o: "m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 "
		},
		π: {
			x_min: -.21875,
			x_max: 773.21875,
			ha: 857,
			o: "m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 "
		},
		ά: {
			x_min: 0,
			x_max: 765.5625,
			ha: 809,
			o: "m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 "
		},
		O: {
			x_min: 0,
			x_max: 958,
			ha: 1057,
			o: "m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 "
		},
		n: {
			x_min: 0,
			x_max: 615,
			ha: 724,
			o: "m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 "
		},
		3: {
			x_min: 54,
			x_max: 737,
			ha: 792,
			o: "m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 "
		},
		9: {
			x_min: 53,
			x_max: 739,
			ha: 792,
			o: "m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 "
		},
		l: {
			x_min: 41,
			x_max: 166,
			ha: 279,
			o: "m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 "
		},
		"¤": {
			x_min: 40.09375,
			x_max: 728.796875,
			ha: 825,
			o: "m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 "
		},
		κ: {
			x_min: 0,
			x_max: 632.328125,
			ha: 679,
			o: "m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 "
		},
		4: {
			x_min: 48,
			x_max: 742.453125,
			ha: 792,
			o: "m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 "
		},
		p: {
			x_min: 0,
			x_max: 685,
			ha: 786,
			o: "m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 "
		},
		"‡": {
			x_min: 0,
			x_max: 777,
			ha: 835,
			o: "m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 "
		},
		ψ: {
			x_min: 0,
			x_max: 808,
			ha: 907,
			o: "m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 "
		},
		η: {
			x_min: .78125,
			x_max: 697,
			ha: 810,
			o: "m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 "
		}
	},
	cssFontWeight: "normal",
	ascender: 1189,
	underlinePosition: -100,
	cssFontStyle: "normal",
	boundingBox: {
		yMin: -334,
		xMin: -111,
		yMax: 1189,
		xMax: 1672
	},
	resolution: 1e3,
	original_font_information: {
		postscript_name: "Helvetiker-Regular",
		version_string: "Version 1.00 2004 initial release",
		vendor_url: "http://www.magenta.gr/",
		full_font_name: "Helvetiker",
		font_family_name: "Helvetiker",
		copyright: "Copyright (c) Μagenta ltd, 2004",
		description: "",
		trademark: "",
		designer: "",
		designer_url: "",
		unique_font_identifier: "Μagenta ltd:Helvetiker:22-10-104",
		license_url: "http://www.ellak.gr/fonts/MgOpen/license.html",
		license_description: "Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r\n\r\nPermission is hereby granted, free of charge, to any person obtaining a copy of the fonts accompanying this license (\"Fonts\") and associated documentation files (the \"Font Software\"), to reproduce and distribute the Font Software, including without limitation the rights to use, copy, merge, publish, distribute, and/or sell copies of the Font Software, and to permit persons to whom the Font Software is furnished to do so, subject to the following conditions: \r\n\r\nThe above copyright and this permission notice shall be included in all copies of one or more of the Font Software typefaces.\r\n\r\nThe Font Software may be modified, altered, or added to, and in particular the designs of glyphs or characters in the Fonts may be modified and additional glyphs or characters may be added to the Fonts, only if the fonts are renamed to names not containing the word \"MgOpen\", or if the modifications are accepted for inclusion in the Font Software itself by the each appointed Administrator.\r\n\r\nThis License becomes null and void to the extent applicable to Fonts or Font Software that has been modified and is distributed under the \"MgOpen\" name.\r\n\r\nThe Font Software may be sold as part of a larger software package but no copy of one or more of the Font Software typefaces may be sold by itself. \r\n\r\nTHE FONT SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.",
		manufacturer_name: "Μagenta ltd",
		font_sub_family_name: "Regular"
	},
	descender: -334,
	familyName: "Helvetiker",
	lineHeight: 1522,
	underlineThickness: 50
}, _changeEvent = { type: "change" }, _startEvent = { type: "start" }, _endEvent = { type: "end" }, _ray = new Ray(), _plane = new Plane(), _TILT_LIMIT = Math.cos(70 * MathUtils.DEG2RAD), _v = new Vector3(), _twoPI = 2 * Math.PI, _STATE = {
	NONE: -1,
	ROTATE: 0,
	DOLLY: 1,
	PAN: 2,
	TOUCH_ROTATE: 3,
	TOUCH_PAN: 4,
	TOUCH_DOLLY_PAN: 5,
	TOUCH_DOLLY_ROTATE: 6
}, _EPS = 1e-6, OrbitControls = class extends Controls {
	constructor(e, t = null) {
		super(e, t), this.state = _STATE.NONE, this.target = new Vector3(), this.cursor = new Vector3(), this.minDistance = 0, this.maxDistance = Infinity, this.minZoom = 0, this.maxZoom = Infinity, this.minTargetRadius = 0, this.maxTargetRadius = Infinity, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -Infinity, this.maxAzimuthAngle = Infinity, this.enableDamping = !1, this.dampingFactor = .05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.keyRotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.zoomToCursor = !1, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = {
			LEFT: "ArrowLeft",
			UP: "ArrowUp",
			RIGHT: "ArrowRight",
			BOTTOM: "ArrowDown"
		}, this.mouseButtons = {
			LEFT: MOUSE.ROTATE,
			MIDDLE: MOUSE.DOLLY,
			RIGHT: MOUSE.PAN
		}, this.touches = {
			ONE: TOUCH.ROTATE,
			TWO: TOUCH.DOLLY_PAN
		}, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._cursorStyle = "auto", this._domElementKeyEvents = null, this._lastPosition = new Vector3(), this._lastQuaternion = new Quaternion(), this._lastTargetPosition = new Vector3(), this._quat = new Quaternion().setFromUnitVectors(e.up, new Vector3(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new Spherical(), this._sphericalDelta = new Spherical(), this._scale = 1, this._panOffset = new Vector3(), this._rotateStart = new Vector2(), this._rotateEnd = new Vector2(), this._rotateDelta = new Vector2(), this._panStart = new Vector2(), this._panEnd = new Vector2(), this._panDelta = new Vector2(), this._dollyStart = new Vector2(), this._dollyEnd = new Vector2(), this._dollyDelta = new Vector2(), this._dollyDirection = new Vector3(), this._mouse = new Vector2(), this._performCursorZoom = !1, this._pointers = [], this._pointerPositions = {}, this._controlActive = !1, this._onPointerMove = onPointerMove.bind(this), this._onPointerDown = onPointerDown.bind(this), this._onPointerUp = onPointerUp.bind(this), this._onContextMenu = onContextMenu.bind(this), this._onMouseWheel = onMouseWheel.bind(this), this._onKeyDown = onKeyDown.bind(this), this._onTouchStart = onTouchStart.bind(this), this._onTouchMove = onTouchMove.bind(this), this._onMouseDown = onMouseDown.bind(this), this._onMouseMove = onMouseMove.bind(this), this._interceptControlDown = interceptControlDown.bind(this), this._interceptControlUp = interceptControlUp.bind(this), this.domElement !== null && this.connect(this.domElement), this.update();
	}
	set cursorStyle(e) {
		this._cursorStyle = e, e === "grab" ? this.domElement.style.cursor = "grab" : this.domElement.style.cursor = "auto";
	}
	get cursorStyle() {
		return this._cursorStyle;
	}
	connect(e) {
		super.connect(e), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: !1 }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, {
			passive: !0,
			capture: !0
		}), this.domElement.style.touchAction = "none";
	}
	disconnect() {
		this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: !0 }), this.domElement.style.touchAction = "";
	}
	dispose() {
		this.disconnect();
	}
	getPolarAngle() {
		return this._spherical.phi;
	}
	getAzimuthalAngle() {
		return this._spherical.theta;
	}
	getDistance() {
		return this.object.position.distanceTo(this.target);
	}
	listenToKeyEvents(e) {
		e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
	}
	stopListenToKeyEvents() {
		this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
	}
	saveState() {
		this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
	}
	reset() {
		this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(_changeEvent), this.update(), this.state = _STATE.NONE;
	}
	pan(e, t) {
		this._pan(e, t), this.update();
	}
	dollyIn(e) {
		this._dollyIn(e), this.update();
	}
	dollyOut(e) {
		this._dollyOut(e), this.update();
	}
	rotateLeft(e) {
		this._rotateLeft(e), this.update();
	}
	rotateUp(e) {
		this._rotateUp(e), this.update();
	}
	update(e = null) {
		let t = this.object.position;
		_v.copy(t).sub(this.target), _v.applyQuaternion(this._quat), this._spherical.setFromVector3(_v), this.autoRotate && this.state === _STATE.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
		let n = this.minAzimuthAngle, r = this.maxAzimuthAngle;
		isFinite(n) && isFinite(r) && (n < -Math.PI ? n += _twoPI : n > Math.PI && (n -= _twoPI), r < -Math.PI ? r += _twoPI : r > Math.PI && (r -= _twoPI), n <= r ? this._spherical.theta = Math.max(n, Math.min(r, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + r) / 2 ? Math.max(n, this._spherical.theta) : Math.min(r, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === !0 ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
		let i = !1;
		if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
		else {
			let e = this._spherical.radius;
			this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), i = e != this._spherical.radius;
		}
		if (_v.setFromSpherical(this._spherical), _v.applyQuaternion(this._quatInverse), t.copy(this.target).add(_v), this.object.lookAt(this.target), this.enableDamping === !0 ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
			let e = null;
			if (this.object.isPerspectiveCamera) {
				let t = _v.length();
				e = this._clampDistance(t * this._scale);
				let n = t - e;
				this.object.position.addScaledVector(this._dollyDirection, n), this.object.updateMatrixWorld(), i = !!n;
			} else if (this.object.isOrthographicCamera) {
				let t = new Vector3(this._mouse.x, this._mouse.y, 0);
				t.unproject(this.object);
				let n = this.object.zoom;
				this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), i = n !== this.object.zoom;
				let r = new Vector3(this._mouse.x, this._mouse.y, 0);
				r.unproject(this.object), this.object.position.sub(r).add(t), this.object.updateMatrixWorld(), e = _v.length();
			} else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = !1;
			e !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(e).add(this.object.position) : (_ray.origin.copy(this.object.position), _ray.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(_ray.direction)) < _TILT_LIMIT ? this.object.lookAt(this.target) : (_plane.setFromNormalAndCoplanarPoint(this.object.up, this.target), _ray.intersectPlane(_plane, this.target))));
		} else if (this.object.isOrthographicCamera) {
			let e = this.object.zoom;
			this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), e !== this.object.zoom && (this.object.updateProjectionMatrix(), i = !0);
		}
		return this._scale = 1, this._performCursorZoom = !1, i || this._lastPosition.distanceToSquared(this.object.position) > _EPS || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > _EPS || this._lastTargetPosition.distanceToSquared(this.target) > _EPS ? (this.dispatchEvent(_changeEvent), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), !0) : !1;
	}
	_getAutoRotationAngle(e) {
		return e === null ? _twoPI / 60 / 60 * this.autoRotateSpeed : _twoPI / 60 * this.autoRotateSpeed * e;
	}
	_getZoomScale(e) {
		let t = Math.abs(e * .01);
		return .95 ** (this.zoomSpeed * t);
	}
	_rotateLeft(e) {
		this._sphericalDelta.theta -= e;
	}
	_rotateUp(e) {
		this._sphericalDelta.phi -= e;
	}
	_panLeft(e, t) {
		_v.setFromMatrixColumn(t, 0), _v.multiplyScalar(-e), this._panOffset.add(_v);
	}
	_panUp(e, t) {
		this.screenSpacePanning === !0 ? _v.setFromMatrixColumn(t, 1) : (_v.setFromMatrixColumn(t, 0), _v.crossVectors(this.object.up, _v)), _v.multiplyScalar(e), this._panOffset.add(_v);
	}
	_pan(e, t) {
		let n = this.domElement;
		if (this.object.isPerspectiveCamera) {
			let r = this.object.position;
			_v.copy(r).sub(this.target);
			let i = _v.length();
			i *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * i / n.clientHeight, this.object.matrix), this._panUp(2 * t * i / n.clientHeight, this.object.matrix);
		} else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = !1);
	}
	_dollyOut(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_dollyIn(e) {
		this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = !1);
	}
	_updateZoomParameters(e, t) {
		if (!this.zoomToCursor) return;
		this._performCursorZoom = !0;
		let n = this.domElement.getBoundingClientRect(), r = e - n.left, i = t - n.top, a = n.width, s = n.height;
		this._mouse.x = r / a * 2 - 1, this._mouse.y = -(i / s) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
	}
	_clampDistance(e) {
		return Math.max(this.minDistance, Math.min(this.maxDistance, e));
	}
	_handleMouseDownRotate(e) {
		this._rotateStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownDolly(e) {
		this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
	}
	_handleMouseDownPan(e) {
		this._panStart.set(e.clientX, e.clientY);
	}
	_handleMouseMoveRotate(e) {
		this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(_twoPI * this._rotateDelta.x / t.clientHeight), this._rotateUp(_twoPI * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
	}
	_handleMouseMoveDolly(e) {
		this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
	}
	_handleMouseMovePan(e) {
		this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
	}
	_handleMouseWheel(e) {
		this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
	}
	_handleKeyDown(e) {
		let t = !1;
		switch (e.code) {
			case this.keys.UP:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = !0;
				break;
			case this.keys.BOTTOM:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = !0;
				break;
			case this.keys.LEFT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(_twoPI * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = !0;
				break;
			case this.keys.RIGHT:
				e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-_twoPI * this.keyRotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = !0;
				break;
		}
		t && (e.preventDefault(), this.update());
	}
	_handleTouchStartRotate(e) {
		if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateStart.set(n, r);
		}
	}
	_handleTouchStartPan(e) {
		if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panStart.set(n, r);
		}
	}
	_handleTouchStartDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyStart.set(0, i);
	}
	_handleTouchStartDollyPan(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
	}
	_handleTouchStartDollyRotate(e) {
		this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
	}
	_handleTouchMoveRotate(e) {
		if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._rotateEnd.set(n, r);
		}
		this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
		let t = this.domElement;
		this._rotateLeft(_twoPI * this._rotateDelta.x / t.clientHeight), this._rotateUp(_twoPI * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
	}
	_handleTouchMovePan(e) {
		if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
		else {
			let t = this._getSecondPointerPosition(e), n = .5 * (e.pageX + t.x), r = .5 * (e.pageY + t.y);
			this._panEnd.set(n, r);
		}
		this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
	}
	_handleTouchMoveDolly(e) {
		let t = this._getSecondPointerPosition(e), n = e.pageX - t.x, r = e.pageY - t.y, i = Math.sqrt(n * n + r * r);
		this._dollyEnd.set(0, i), this._dollyDelta.set(0, (this._dollyEnd.y / this._dollyStart.y) ** +this.zoomSpeed), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
		let a = (e.pageX + t.x) * .5, s = (e.pageY + t.y) * .5;
		this._updateZoomParameters(a, s);
	}
	_handleTouchMoveDollyPan(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
	}
	_handleTouchMoveDollyRotate(e) {
		this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
	}
	_addPointer(e) {
		this._pointers.push(e.pointerId);
	}
	_removePointer(e) {
		delete this._pointerPositions[e.pointerId];
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
			this._pointers.splice(t, 1);
			return;
		}
	}
	_isTrackingPointer(e) {
		for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return !0;
		return !1;
	}
	_trackPointer(e) {
		let t = this._pointerPositions[e.pointerId];
		t === void 0 && (t = new Vector2(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
	}
	_getSecondPointerPosition(e) {
		let t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
		return this._pointerPositions[t];
	}
	_customWheelEvent(e) {
		let t = e.deltaMode, n = {
			clientX: e.clientX,
			clientY: e.clientY,
			deltaY: e.deltaY
		};
		switch (t) {
			case 1:
				n.deltaY *= 16;
				break;
			case 2:
				n.deltaY *= 100;
				break;
		}
		return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
	}
};
function onPointerDown(e) {
	this.enabled !== !1 && (this._pointers.length === 0 && (this.domElement.setPointerCapture(e.pointerId), this.domElement.ownerDocument.addEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(e) && (this._addPointer(e), e.pointerType === "touch" ? this._onTouchStart(e) : this._onMouseDown(e), this._cursorStyle === "grab" && (this.domElement.style.cursor = "grabbing")));
}
function onPointerMove(e) {
	this.enabled !== !1 && (e.pointerType === "touch" ? this._onTouchMove(e) : this._onMouseMove(e));
}
function onPointerUp(e) {
	switch (this._removePointer(e), this._pointers.length) {
		case 0:
			this.domElement.releasePointerCapture(e.pointerId), this.domElement.ownerDocument.removeEventListener("pointermove", this._onPointerMove), this.domElement.ownerDocument.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(_endEvent), this.state = _STATE.NONE, this._cursorStyle === "grab" && (this.domElement.style.cursor = "grab");
			break;
		case 1:
			let t = this._pointers[0], n = this._pointerPositions[t];
			this._onTouchStart({
				pointerId: t,
				pageX: n.x,
				pageY: n.y
			});
			break;
	}
}
function onMouseDown(e) {
	let t;
	switch (e.button) {
		case 0:
			t = this.mouseButtons.LEFT;
			break;
		case 1:
			t = this.mouseButtons.MIDDLE;
			break;
		case 2:
			t = this.mouseButtons.RIGHT;
			break;
		default: t = -1;
	}
	switch (t) {
		case MOUSE.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseDownDolly(e), this.state = _STATE.DOLLY;
			break;
		case MOUSE.ROTATE:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = _STATE.PAN;
			} else {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = _STATE.ROTATE;
			}
			break;
		case MOUSE.PAN:
			if (e.ctrlKey || e.metaKey || e.shiftKey) {
				if (this.enableRotate === !1) return;
				this._handleMouseDownRotate(e), this.state = _STATE.ROTATE;
			} else {
				if (this.enablePan === !1) return;
				this._handleMouseDownPan(e), this.state = _STATE.PAN;
			}
			break;
		default: this.state = _STATE.NONE;
	}
	this.state !== _STATE.NONE && this.dispatchEvent(_startEvent);
}
function onMouseMove(e) {
	switch (this.state) {
		case _STATE.ROTATE:
			if (this.enableRotate === !1) return;
			this._handleMouseMoveRotate(e);
			break;
		case _STATE.DOLLY:
			if (this.enableZoom === !1) return;
			this._handleMouseMoveDolly(e);
			break;
		case _STATE.PAN:
			if (this.enablePan === !1) return;
			this._handleMouseMovePan(e);
			break;
	}
}
function onMouseWheel(e) {
	this.enabled === !1 || this.enableZoom === !1 || this.state !== _STATE.NONE || (e.preventDefault(), this.dispatchEvent(_startEvent), this._handleMouseWheel(this._customWheelEvent(e)), this.dispatchEvent(_endEvent));
}
function onKeyDown(e) {
	this.enabled !== !1 && this._handleKeyDown(e);
}
function onTouchStart(e) {
	switch (this._trackPointer(e), this._pointers.length) {
		case 1:
			switch (this.touches.ONE) {
				case TOUCH.ROTATE:
					if (this.enableRotate === !1) return;
					this._handleTouchStartRotate(e), this.state = _STATE.TOUCH_ROTATE;
					break;
				case TOUCH.PAN:
					if (this.enablePan === !1) return;
					this._handleTouchStartPan(e), this.state = _STATE.TOUCH_PAN;
					break;
				default: this.state = _STATE.NONE;
			}
			break;
		case 2:
			switch (this.touches.TWO) {
				case TOUCH.DOLLY_PAN:
					if (this.enableZoom === !1 && this.enablePan === !1) return;
					this._handleTouchStartDollyPan(e), this.state = _STATE.TOUCH_DOLLY_PAN;
					break;
				case TOUCH.DOLLY_ROTATE:
					if (this.enableZoom === !1 && this.enableRotate === !1) return;
					this._handleTouchStartDollyRotate(e), this.state = _STATE.TOUCH_DOLLY_ROTATE;
					break;
				default: this.state = _STATE.NONE;
			}
			break;
		default: this.state = _STATE.NONE;
	}
	this.state !== _STATE.NONE && this.dispatchEvent(_startEvent);
}
function onTouchMove(e) {
	switch (this._trackPointer(e), this.state) {
		case _STATE.TOUCH_ROTATE:
			if (this.enableRotate === !1) return;
			this._handleTouchMoveRotate(e), this.update();
			break;
		case _STATE.TOUCH_PAN:
			if (this.enablePan === !1) return;
			this._handleTouchMovePan(e), this.update();
			break;
		case _STATE.TOUCH_DOLLY_PAN:
			if (this.enableZoom === !1 && this.enablePan === !1) return;
			this._handleTouchMoveDollyPan(e), this.update();
			break;
		case _STATE.TOUCH_DOLLY_ROTATE:
			if (this.enableZoom === !1 && this.enableRotate === !1) return;
			this._handleTouchMoveDollyRotate(e), this.update();
			break;
		default: this.state = _STATE.NONE;
	}
}
function onContextMenu(e) {
	this.enabled !== !1 && e.preventDefault();
}
function interceptControlDown(e) {
	e.key === "Control" && (this._controlActive = !0, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
function interceptControlUp(e) {
	e.key === "Control" && (this._controlActive = !1, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, {
		passive: !0,
		capture: !0
	}));
}
//#endregion
//#region node_modules/three/examples/jsm/shaders/CopyShader.js
var CopyShader = {
	name: "CopyShader",
	uniforms: {
		tDiffuse: { value: null },
		opacity: { value: 1 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform float opacity;\n\n		uniform sampler2D tDiffuse;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n			gl_FragColor = opacity * texel;\n\n\n		}"
}, Pass = class {
	constructor() {
		this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
	}
	setSize() {}
	render() {
		console.error("THREE.Pass: .render() must be implemented in derived pass.");
	}
	dispose() {}
}, _camera = new OrthographicCamera(-1, 1, 1, -1, 0, 1), FullscreenTriangleGeometry = class extends BufferGeometry {
	constructor() {
		super(), this.setAttribute("position", new Float32BufferAttribute([
			-1,
			3,
			0,
			-1,
			-1,
			0,
			3,
			-1,
			0
		], 3)), this.setAttribute("uv", new Float32BufferAttribute([
			0,
			2,
			0,
			0,
			2,
			0
		], 2));
	}
}, _geometry = new FullscreenTriangleGeometry(), FullScreenQuad = class {
	constructor(e) {
		this._mesh = new Mesh(_geometry, e);
	}
	dispose() {
		this._mesh.geometry.dispose();
	}
	render(e) {
		e.render(this._mesh, _camera);
	}
	get material() {
		return this._mesh.material;
	}
	set material(e) {
		this._mesh.material = e;
	}
}, ShaderPass = class extends Pass {
	constructor(e, t = "tDiffuse") {
		super(), this.textureID = t, this.uniforms = null, this.material = null, e instanceof ShaderMaterial ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = UniformsUtils.clone(e.uniforms), this.material = new ShaderMaterial({
			name: e.name === void 0 ? "unspecified" : e.name,
			defines: Object.assign({}, e.defines),
			uniforms: this.uniforms,
			vertexShader: e.vertexShader,
			fragmentShader: e.fragmentShader
		})), this._fsQuad = new FullScreenQuad(this.material);
	}
	render(e, t, n) {
		this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this._fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this._fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this._fsQuad.render(e));
	}
	dispose() {
		this.material.dispose(), this._fsQuad.dispose();
	}
}, MaskPass = class extends Pass {
	constructor(e, t) {
		super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
	}
	render(e, t, n) {
		let r = e.getContext(), i = e.state;
		i.buffers.color.setMask(!1), i.buffers.depth.setMask(!1), i.buffers.color.setLocked(!0), i.buffers.depth.setLocked(!0);
		let a, s;
		this.inverse ? (a = 0, s = 1) : (a = 1, s = 0), i.buffers.stencil.setTest(!0), i.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), i.buffers.stencil.setFunc(r.ALWAYS, a, 4294967295), i.buffers.stencil.setClear(s), i.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), i.buffers.color.setLocked(!1), i.buffers.depth.setLocked(!1), i.buffers.color.setMask(!0), i.buffers.depth.setMask(!0), i.buffers.stencil.setLocked(!1), i.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), i.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), i.buffers.stencil.setLocked(!0);
	}
}, ClearMaskPass = class extends Pass {
	constructor() {
		super(), this.needsSwap = !1;
	}
	render(e) {
		e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
	}
}, EffectComposer = class {
	constructor(e, t) {
		if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
			let n = e.getSize(new Vector2());
			this._width = n.width, this._height = n.height, t = new WebGLRenderTarget(this._width * this._pixelRatio, this._height * this._pixelRatio, { type: HalfFloatType }), t.texture.name = "EffectComposer.rt1";
		} else this._width = t.width, this._height = t.height;
		this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new ShaderPass(CopyShader), this.copyPass.material.blending = 0, this.timer = new Timer();
	}
	swapBuffers() {
		let e = this.readBuffer;
		this.readBuffer = this.writeBuffer, this.writeBuffer = e;
	}
	addPass(e) {
		this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	insertPass(e, t) {
		this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
	}
	removePass(e) {
		let t = this.passes.indexOf(e);
		t !== -1 && this.passes.splice(t, 1);
	}
	isLastEnabledPass(e) {
		for (let t = e + 1; t < this.passes.length; t++) if (this.passes[t].enabled) return !1;
		return !0;
	}
	render(e) {
		this.timer.update(), e === void 0 && (e = this.timer.getDelta());
		let t = this.renderer.getRenderTarget(), n = !1;
		for (let t = 0, r = this.passes.length; t < r; t++) {
			let r = this.passes[t];
			if (r.enabled !== !1) {
				if (r.renderToScreen = this.renderToScreen && this.isLastEnabledPass(t), r.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), r.needsSwap) {
					if (n) {
						let t = this.renderer.getContext(), n = this.renderer.state.buffers.stencil;
						n.setFunc(t.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), n.setFunc(t.EQUAL, 1, 4294967295);
					}
					this.swapBuffers();
				}
				MaskPass !== void 0 && (r instanceof MaskPass ? n = !0 : r instanceof ClearMaskPass && (n = !1));
			}
		}
		this.renderer.setRenderTarget(t);
	}
	reset(e) {
		if (e === void 0) {
			let t = this.renderer.getSize(new Vector2());
			this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
		}
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
	}
	setSize(e, t) {
		this._width = e, this._height = t;
		let n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
		this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
		for (let e = 0; e < this.passes.length; e++) this.passes[e].setSize(n, r);
	}
	setPixelRatio(e) {
		this._pixelRatio = e, this.setSize(this._width, this._height);
	}
	dispose() {
		this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
	}
}, RenderPass = class extends Pass {
	constructor(e, t, n = null, r = null, i = null) {
		super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = i, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this.isRenderPass = !0, this._oldClearColor = new Color$1();
	}
	render(e, t, n) {
		let r = e.autoClear;
		e.autoClear = !1;
		let i, a;
		this.overrideMaterial !== null && (a = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(this._oldClearColor), e.setClearColor(this.clearColor, e.getClearAlpha())), this.clearAlpha !== null && (i = e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == 1 && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this.clearAlpha !== null && e.setClearAlpha(i), this.overrideMaterial !== null && (this.scene.overrideMaterial = a), e.autoClear = r;
	}
}, LuminosityHighPassShader = {
	name: "LuminosityHighPassShader",
	uniforms: {
		tDiffuse: { value: null },
		luminosityThreshold: { value: 1 },
		smoothWidth: { value: 1 },
		defaultColor: { value: new Color$1(0) },
		defaultOpacity: { value: 0 }
	},
	vertexShader: "\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vUv = uv;\n\n			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n		}",
	fragmentShader: "\n\n		uniform sampler2D tDiffuse;\n		uniform vec3 defaultColor;\n		uniform float defaultOpacity;\n		uniform float luminosityThreshold;\n		uniform float smoothWidth;\n\n		varying vec2 vUv;\n\n		void main() {\n\n			vec4 texel = texture2D( tDiffuse, vUv );\n\n			float v = luminance( texel.xyz );\n\n			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );\n\n			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );\n\n			gl_FragColor = mix( outputColor, texel, alpha );\n\n		}"
}, UnrealBloomPass = class e extends Pass {
	constructor(e, t = 1, n, r) {
		super(), this.strength = t, this.radius = n, this.threshold = r, this.resolution = e === void 0 ? new Vector2(256, 256) : new Vector2(e.x, e.y), this.clearColor = new Color$1(0, 0, 0), this.needsSwap = !1, this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
		let i = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
		this.renderTargetBright = new WebGLRenderTarget(i, a, { type: HalfFloatType }), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
		for (let e = 0; e < this.nMips; e++) {
			let t = new WebGLRenderTarget(i, a, { type: HalfFloatType });
			t.texture.name = "UnrealBloomPass.h" + e, t.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(t);
			let n = new WebGLRenderTarget(i, a, { type: HalfFloatType });
			n.texture.name = "UnrealBloomPass.v" + e, n.texture.generateMipmaps = !1, this.renderTargetsVertical.push(n), i = Math.round(i / 2), a = Math.round(a / 2);
		}
		let s = LuminosityHighPassShader;
		this.highPassUniforms = UniformsUtils.clone(s.uniforms), this.highPassUniforms.luminosityThreshold.value = r, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter = new ShaderMaterial({
			uniforms: this.highPassUniforms,
			vertexShader: s.vertexShader,
			fragmentShader: s.fragmentShader
		}), this.separableBlurMaterials = [];
		let c = [
			6,
			10,
			14,
			18,
			22
		];
		i = Math.round(this.resolution.x / 2), a = Math.round(this.resolution.y / 2);
		for (let e = 0; e < this.nMips; e++) this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[e])), this.separableBlurMaterials[e].uniforms.invSize.value = new Vector2(1 / i, 1 / a), i = Math.round(i / 2), a = Math.round(a / 2);
		this.compositeMaterial = this._getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = .1;
		let l = [
			1,
			.8,
			.6,
			.4,
			.2
		];
		this.compositeMaterial.uniforms.bloomFactors.value = l, this.bloomTintColors = [
			new Vector3(1, 1, 1),
			new Vector3(1, 1, 1),
			new Vector3(1, 1, 1),
			new Vector3(1, 1, 1),
			new Vector3(1, 1, 1)
		], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, this.copyUniforms = UniformsUtils.clone(CopyShader.uniforms), this.blendMaterial = new ShaderMaterial({
			uniforms: this.copyUniforms,
			vertexShader: CopyShader.vertexShader,
			fragmentShader: CopyShader.fragmentShader,
			premultipliedAlpha: !0,
			blending: 2,
			depthTest: !1,
			depthWrite: !1,
			transparent: !0
		}), this._oldClearColor = new Color$1(), this._oldClearAlpha = 1, this._basic = new MeshBasicMaterial(), this._fsQuad = new FullScreenQuad(null);
	}
	dispose() {
		for (let e = 0; e < this.renderTargetsHorizontal.length; e++) this.renderTargetsHorizontal[e].dispose();
		for (let e = 0; e < this.renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
		this.renderTargetBright.dispose();
		for (let e = 0; e < this.separableBlurMaterials.length; e++) this.separableBlurMaterials[e].dispose();
		this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this._basic.dispose(), this._fsQuad.dispose();
	}
	setSize(e, t) {
		let n = Math.round(e / 2), r = Math.round(t / 2);
		this.renderTargetBright.setSize(n, r);
		for (let e = 0; e < this.nMips; e++) this.renderTargetsHorizontal[e].setSize(n, r), this.renderTargetsVertical[e].setSize(n, r), this.separableBlurMaterials[e].uniforms.invSize.value = new Vector2(1 / n, 1 / r), n = Math.round(n / 2), r = Math.round(r / 2);
	}
	render(t, n, r, i, a) {
		t.getClearColor(this._oldClearColor), this._oldClearAlpha = t.getClearAlpha();
		let s = t.autoClear;
		t.autoClear = !1, t.setClearColor(this.clearColor, 0), a && t.state.buffers.stencil.setTest(!1), this.renderToScreen && (this._fsQuad.material = this._basic, this._basic.map = r.texture, t.setRenderTarget(null), t.clear(), this._fsQuad.render(t)), this.highPassUniforms.tDiffuse.value = r.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this._fsQuad.material = this.materialHighPassFilter, t.setRenderTarget(this.renderTargetBright), t.clear(), this._fsQuad.render(t);
		let c = this.renderTargetBright;
		for (let n = 0; n < this.nMips; n++) this._fsQuad.material = this.separableBlurMaterials[n], this.separableBlurMaterials[n].uniforms.colorTexture.value = c.texture, this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionX, t.setRenderTarget(this.renderTargetsHorizontal[n]), t.clear(), this._fsQuad.render(t), this.separableBlurMaterials[n].uniforms.colorTexture.value = this.renderTargetsHorizontal[n].texture, this.separableBlurMaterials[n].uniforms.direction.value = e.BlurDirectionY, t.setRenderTarget(this.renderTargetsVertical[n]), t.clear(), this._fsQuad.render(t), c = this.renderTargetsVertical[n];
		this._fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, t.setRenderTarget(this.renderTargetsHorizontal[0]), t.clear(), this._fsQuad.render(t), this._fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, a && t.state.buffers.stencil.setTest(!0), this.renderToScreen ? (t.setRenderTarget(null), this._fsQuad.render(t)) : (t.setRenderTarget(r), this._fsQuad.render(t)), t.setClearColor(this._oldClearColor, this._oldClearAlpha), t.autoClear = s;
	}
	_getSeparableBlurMaterial(e) {
		let t = [], n = e / 3;
		for (let r = 0; r < e; r++) t.push(.39894 * Math.exp(-.5 * r * r / (n * n)) / n);
		return new ShaderMaterial({
			defines: { KERNEL_RADIUS: e },
			uniforms: {
				colorTexture: { value: null },
				invSize: { value: new Vector2(.5, .5) },
				direction: { value: new Vector2(.5, .5) },
				gaussianCoefficients: { value: t }
			},
			vertexShader: "\n\n				varying vec2 vUv;\n\n				void main() {\n\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}",
			fragmentShader: "\n\n				#include <common>\n\n				varying vec2 vUv;\n\n				uniform sampler2D colorTexture;\n				uniform vec2 invSize;\n				uniform vec2 direction;\n				uniform float gaussianCoefficients[KERNEL_RADIUS];\n\n				void main() {\n\n					float weightSum = gaussianCoefficients[0];\n					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;\n\n					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {\n\n						float x = float( i );\n						float w = gaussianCoefficients[i];\n						vec2 uvOffset = direction * invSize * x;\n						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;\n						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;\n						diffuseSum += ( sample1 + sample2 ) * w;\n\n					}\n\n					gl_FragColor = vec4( diffuseSum, 1.0 );\n\n				}"
		});
	}
	_getCompositeMaterial(e) {
		return new ShaderMaterial({
			defines: { NUM_MIPS: e },
			uniforms: {
				blurTexture1: { value: null },
				blurTexture2: { value: null },
				blurTexture3: { value: null },
				blurTexture4: { value: null },
				blurTexture5: { value: null },
				bloomStrength: { value: 1 },
				bloomFactors: { value: null },
				bloomTintColors: { value: null },
				bloomRadius: { value: 0 }
			},
			vertexShader: "\n\n				varying vec2 vUv;\n\n				void main() {\n\n					vUv = uv;\n					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n\n				}",
			fragmentShader: "\n\n				varying vec2 vUv;\n\n				uniform sampler2D blurTexture1;\n				uniform sampler2D blurTexture2;\n				uniform sampler2D blurTexture3;\n				uniform sampler2D blurTexture4;\n				uniform sampler2D blurTexture5;\n				uniform float bloomStrength;\n				uniform float bloomRadius;\n				uniform float bloomFactors[NUM_MIPS];\n				uniform vec3 bloomTintColors[NUM_MIPS];\n\n				float lerpBloomFactor( const in float factor ) {\n\n					float mirrorFactor = 1.2 - factor;\n					return mix( factor, mirrorFactor, bloomRadius );\n\n				}\n\n				void main() {\n\n					// 3.0 for backwards compatibility with previous alpha-based intensity\n					vec3 bloom = 3.0 * bloomStrength * (\n						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +\n						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb\n					);\n\n					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );\n					gl_FragColor = vec4( bloom, bloomAlpha );\n\n				}"
		});
	}
};
UnrealBloomPass.BlurDirectionX = new Vector2(1, 0), UnrealBloomPass.BlurDirectionY = new Vector2(0, 1);
//#endregion
//#region node_modules/chroma-js/src/utils/limit.js
var { min: min$4, max: max$4 } = Math, limit_default = (e, t = 0, n = 1) => min$4(max$4(t, e), n), clip_rgb_default = (e) => {
	e._clipped = !1, e._unclipped = e.slice(0);
	for (let t = 0; t <= 3; t++) t < 3 ? ((e[t] < 0 || e[t] > 255) && (e._clipped = !0), e[t] = limit_default(e[t], 0, 255)) : t === 3 && (e[t] = limit_default(e[t], 0, 1));
	return e;
}, classToType = {};
for (let e of [
	"Boolean",
	"Number",
	"String",
	"Function",
	"Array",
	"Date",
	"RegExp",
	"Undefined",
	"Null"
]) classToType[`[object ${e}]`] = e.toLowerCase();
function type_default(e) {
	return classToType[Object.prototype.toString.call(e)] || "object";
}
//#endregion
//#region node_modules/chroma-js/src/utils/unpack.js
var unpack_default = (e, t = null) => e.length >= 3 ? Array.prototype.slice.call(e) : type_default(e[0]) == "object" && t ? t.split("").filter((t) => e[0][t] !== void 0).map((t) => e[0][t]) : e[0].slice(0), last_default = (e) => {
	if (e.length < 2) return null;
	let t = e.length - 1;
	return type_default(e[t]) == "string" ? e[t].toLowerCase() : null;
}, { PI: PI$3, min: min$3, max: max$3 } = Math, rnd2 = (e) => Math.round(e * 100) / 100, rnd3 = (e) => Math.round(e * 100) / 100, TWOPI = PI$3 * 2, PITHIRD = PI$3 / 3, DEG2RAD = PI$3 / 180, RAD2DEG = 180 / PI$3;
function reverse3(e) {
	return [...e.slice(0, 3).reverse(), ...e.slice(3)];
}
//#endregion
//#region node_modules/chroma-js/src/io/input.js
var input_default = {
	format: {},
	autodetect: []
}, Color = class {
	constructor(...e) {
		let t = this;
		if (type_default(e[0]) === "object" && e[0].constructor && e[0].constructor === this.constructor) return e[0];
		let n = last_default(e), r = !1;
		if (!n) {
			r = !0, input_default.sorted ||= (input_default.autodetect = input_default.autodetect.sort((e, t) => t.p - e.p), !0);
			for (let t of input_default.autodetect) if (n = t.test(...e), n) break;
		}
		if (input_default.format[n]) t._rgb = clip_rgb_default(input_default.format[n].apply(null, r ? e : e.slice(0, -1)));
		else throw Error("unknown format: " + e);
		t._rgb.length === 3 && t._rgb.push(1);
	}
	toString() {
		return type_default(this.hex) == "function" ? this.hex() : `[${this._rgb.join(",")}]`;
	}
}, version = "3.2.0", chroma$3 = (...e) => new Color(...e);
chroma$3.version = version;
//#endregion
//#region node_modules/chroma-js/src/colors/w3cx11.js
var w3cx11 = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	gold: "#ffd700",
	goldenrod: "#daa520",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	laserlemon: "#ffff54",
	lavender: "#e6e6fa",
	lavenderblush: "#fff0f5",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrod: "#fafad2",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	maroon2: "#7f0000",
	maroon3: "#b03060",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	purple2: "#7f007f",
	purple3: "#a020f0",
	rebeccapurple: "#663399",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32"
}, RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, RE_HEXA = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/, hex2rgb = (e) => {
	if (e.match(RE_HEX)) {
		(e.length === 4 || e.length === 7) && (e = e.substr(1)), e.length === 3 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
		let t = parseInt(e, 16);
		return [
			t >> 16,
			t >> 8 & 255,
			t & 255,
			1
		];
	}
	if (e.match(RE_HEXA)) {
		(e.length === 5 || e.length === 9) && (e = e.substr(1)), e.length === 4 && (e = e.split(""), e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
		let t = parseInt(e, 16);
		return [
			t >> 24 & 255,
			t >> 16 & 255,
			t >> 8 & 255,
			Math.round((t & 255) / 255 * 100) / 100
		];
	}
	throw Error(`unknown hex color: ${e}`);
}, { round: round$5 } = Math, rgb2hex = (...e) => {
	let [t, n, r, i] = unpack_default(e, "rgba"), a = last_default(e) || "auto";
	i === void 0 && (i = 1), a === "auto" && (a = i < 1 ? "rgba" : "rgb"), t = round$5(t), n = round$5(n), r = round$5(r);
	let s = "000000" + (t << 16 | n << 8 | r).toString(16);
	s = s.substr(s.length - 6);
	let c = "0" + round$5(i * 255).toString(16);
	switch (c = c.substr(c.length - 2), a.toLowerCase()) {
		case "rgba": return `#${s}${c}`;
		case "argb": return `#${c}${s}`;
		default: return `#${s}`;
	}
};
//#endregion
//#region node_modules/chroma-js/src/ops/clipped.js
Color.prototype.name = function() {
	let e = rgb2hex(this._rgb, "rgb");
	for (let t of Object.keys(w3cx11)) if (w3cx11[t] === e) return t.toLowerCase();
	return e;
}, input_default.format.named = (e) => {
	if (e = e.toLowerCase(), w3cx11[e]) return hex2rgb(w3cx11[e]);
	throw Error("unknown color name: " + e);
}, input_default.autodetect.push({
	p: 5,
	test: (e, ...t) => {
		if (!t.length && type_default(e) === "string" && w3cx11[e.toLowerCase()]) return "named";
	}
}), Color.prototype.alpha = function(e, t = !1) {
	return e !== void 0 && type_default(e) === "number" ? t ? (this._rgb[3] = e, this) : new Color([
		this._rgb[0],
		this._rgb[1],
		this._rgb[2],
		e
	], "rgb") : this._rgb[3];
}, Color.prototype.clipped = function() {
	return this._rgb._clipped || !1;
};
//#endregion
//#region node_modules/chroma-js/src/io/lab/lab-constants.js
var labConstants = {
	Kn: 18,
	labWhitePoint: "d65",
	Xn: .95047,
	Yn: 1,
	Zn: 1.08883,
	t0: .137931034,
	t1: .206896552,
	t2: .12841855,
	t3: .008856452,
	kE: 216 / 24389,
	kKE: 8,
	kK: 24389 / 27,
	RefWhiteRGB: {
		X: .95047,
		Y: 1,
		Z: 1.08883
	},
	MtxRGB2XYZ: {
		m00: .4124564390896922,
		m01: .21267285140562253,
		m02: .0193338955823293,
		m10: .357576077643909,
		m11: .715152155287818,
		m12: .11919202588130297,
		m20: .18043748326639894,
		m21: .07217499330655958,
		m22: .9503040785363679
	},
	MtxXYZ2RGB: {
		m00: 3.2404541621141045,
		m01: -.9692660305051868,
		m02: .055643430959114726,
		m10: -1.5371385127977166,
		m11: 1.8760108454466942,
		m12: -.2040259135167538,
		m20: -.498531409556016,
		m21: .041556017530349834,
		m22: 1.0572251882231791
	},
	As: .9414285350000001,
	Bs: 1.040417467,
	Cs: 1.089532651,
	MtxAdaptMa: {
		m00: .8951,
		m01: -.7502,
		m02: .0389,
		m10: .2664,
		m11: 1.7135,
		m12: -.0685,
		m20: -.1614,
		m21: .0367,
		m22: 1.0296
	},
	MtxAdaptMaI: {
		m00: .9869929054667123,
		m01: .43230526972339456,
		m02: -.008528664575177328,
		m10: -.14705425642099013,
		m11: .5183602715367776,
		m12: .04004282165408487,
		m20: .15996265166373125,
		m21: .0492912282128556,
		m22: .9684866957875502
	}
}, ILLUMINANTS = /* @__PURE__ */ new Map([
	["a", [1.0985, .35585]],
	["b", [1.0985, .35585]],
	["c", [.98074, 1.18232]],
	["d50", [.96422, .82521]],
	["d55", [.95682, .92149]],
	["d65", [.95047, 1.08883]],
	["e", [
		1,
		1,
		1
	]],
	["f2", [.99186, .67393]],
	["f7", [.95041, 1.08747]],
	["f11", [1.00962, .6435]],
	["icc", [.96422, .82521]]
]);
function setLabWhitePoint(e) {
	let t = ILLUMINANTS.get(String(e).toLowerCase());
	if (!t) throw Error("unknown Lab illuminant " + e);
	labConstants.labWhitePoint = e, labConstants.Xn = t[0], labConstants.Zn = t[1];
}
function getLabWhitePoint() {
	return labConstants.labWhitePoint;
}
//#endregion
//#region node_modules/chroma-js/src/io/lab/lab2rgb.js
var lab2rgb = (...e) => {
	e = unpack_default(e, "lab");
	let [t, n, r] = e, [i, a, s] = lab2xyz(t, n, r), [c, l, u] = xyz2rgb(i, a, s);
	return [
		c,
		l,
		u,
		e.length > 3 ? e[3] : 1
	];
}, lab2xyz = (e, t, n) => {
	let { kE: r, kK: i, kKE: a, Xn: s, Yn: c, Zn: l } = labConstants, u = (e + 16) / 116, d = .002 * t + u, f = u - .005 * n, p = d * d * d, h = f * f * f, g = p > r ? p : (116 * d - 16) / i, _ = e > a ? ((e + 16) / 116) ** 3 : e / i, v = h > r ? h : (116 * f - 16) / i;
	return [
		g * s,
		_ * c,
		v * l
	];
}, compand = (e) => {
	let t = Math.sign(e);
	return e = Math.abs(e), (e <= .0031308 ? e * 12.92 : 1.055 * e ** (1 / 2.4) - .055) * t;
}, xyz2rgb = (e, t, n) => {
	let { MtxAdaptMa: r, MtxAdaptMaI: i, MtxXYZ2RGB: a, RefWhiteRGB: s, Xn: c, Yn: l, Zn: u } = labConstants, d = c * r.m00 + l * r.m10 + u * r.m20, f = c * r.m01 + l * r.m11 + u * r.m21, p = c * r.m02 + l * r.m12 + u * r.m22, h = s.X * r.m00 + s.Y * r.m10 + s.Z * r.m20, g = s.X * r.m01 + s.Y * r.m11 + s.Z * r.m21, _ = s.X * r.m02 + s.Y * r.m12 + s.Z * r.m22, v = (e * r.m00 + t * r.m10 + n * r.m20) * (h / d), y = (e * r.m01 + t * r.m11 + n * r.m21) * (g / f), b = (e * r.m02 + t * r.m12 + n * r.m22) * (_ / p), x = v * i.m00 + y * i.m10 + b * i.m20, S = v * i.m01 + y * i.m11 + b * i.m21, C = v * i.m02 + y * i.m12 + b * i.m22, w = compand(x * a.m00 + S * a.m10 + C * a.m20), T = compand(x * a.m01 + S * a.m11 + C * a.m21), E = compand(x * a.m02 + S * a.m12 + C * a.m22);
	return [
		w * 255,
		T * 255,
		E * 255
	];
}, rgb2lab = (...e) => {
	let [t, n, r, ...i] = unpack_default(e, "rgb"), [a, s, c] = rgb2xyz(t, n, r), [l, u, d] = xyz2lab(a, s, c);
	return [
		l,
		u,
		d,
		...i.length > 0 && i[0] < 1 ? [i[0]] : []
	];
};
function xyz2lab(e, t, n) {
	let { Xn: r, Yn: i, Zn: a, kE: s, kK: c } = labConstants, l = e / r, u = t / i, d = n / a, f = l > s ? l ** (1 / 3) : (c * l + 16) / 116, p = u > s ? u ** (1 / 3) : (c * u + 16) / 116, h = d > s ? d ** (1 / 3) : (c * d + 16) / 116;
	return [
		116 * p - 16,
		500 * (f - p),
		200 * (p - h)
	];
}
function gammaAdjustSRGB(e) {
	let t = Math.sign(e);
	return e = Math.abs(e), (e <= .04045 ? e / 12.92 : ((e + .055) / 1.055) ** 2.4) * t;
}
var rgb2xyz = (e, t, n) => {
	e = gammaAdjustSRGB(e / 255), t = gammaAdjustSRGB(t / 255), n = gammaAdjustSRGB(n / 255);
	let { MtxRGB2XYZ: r, MtxAdaptMa: i, MtxAdaptMaI: a, Xn: s, Yn: c, Zn: l, As: u, Bs: d, Cs: f } = labConstants, p = e * r.m00 + t * r.m10 + n * r.m20, h = e * r.m01 + t * r.m11 + n * r.m21, g = e * r.m02 + t * r.m12 + n * r.m22, _ = s * i.m00 + c * i.m10 + l * i.m20, v = s * i.m01 + c * i.m11 + l * i.m21, y = s * i.m02 + c * i.m12 + l * i.m22, b = p * i.m00 + h * i.m10 + g * i.m20, x = p * i.m01 + h * i.m11 + g * i.m21, S = p * i.m02 + h * i.m12 + g * i.m22;
	return b *= _ / u, x *= v / d, S *= y / f, p = b * a.m00 + x * a.m10 + S * a.m20, h = b * a.m01 + x * a.m11 + S * a.m21, g = b * a.m02 + x * a.m12 + S * a.m22, [
		p,
		h,
		g
	];
};
//#endregion
//#region node_modules/chroma-js/src/io/lab/index.js
Color.prototype.lab = function() {
	return rgb2lab(this._rgb);
};
var lab$1 = (...e) => new Color(...e, "lab");
//#endregion
//#region node_modules/chroma-js/src/ops/get.js
Object.assign(chroma$3, {
	lab: lab$1,
	getLabWhitePoint,
	setLabWhitePoint
}), input_default.format.lab = lab2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "lab"), type_default(e) === "array" && e.length === 3) return "lab";
	}
}), Color.prototype.darken = function(e = 1) {
	let t = this, n = t.lab();
	return n[0] -= labConstants.Kn * e, new Color(n, "lab").alpha(t.alpha(), !0);
}, Color.prototype.brighten = function(e = 1) {
	return this.darken(-e);
}, Color.prototype.darker = Color.prototype.darken, Color.prototype.brighter = Color.prototype.brighten, Color.prototype.get = function(e) {
	let [t, n] = e.split("."), r = this[t]();
	if (n) {
		let e = t.indexOf(n) - (t.substr(0, 2) === "ok" ? 2 : 0);
		if (e > -1) return r[e];
		throw Error(`unknown channel ${n} in mode ${t}`);
	} else return r;
};
//#endregion
//#region node_modules/chroma-js/src/ops/luminance.js
var { pow: pow$6 } = Math, EPS = 1e-7, MAX_ITER = 20;
Color.prototype.luminance = function(e, t = "rgb") {
	if (e !== void 0 && type_default(e) === "number") {
		if (e === 0) return new Color([
			0,
			0,
			0,
			this._rgb[3]
		], "rgb");
		if (e === 1) return new Color([
			255,
			255,
			255,
			this._rgb[3]
		], "rgb");
		let n = this.luminance(), r = MAX_ITER, i = (n, a) => {
			let s = n.interpolate(a, .5, t), c = s.luminance();
			return Math.abs(e - c) < EPS || !r-- ? s : c > e ? i(n, s) : i(s, a);
		};
		return new Color([...(n > e ? i(new Color([
			0,
			0,
			0
		]), this) : i(this, new Color([
			255,
			255,
			255
		]))).rgb(), this._rgb[3]]);
	}
	return rgb2luminance(...this._rgb.slice(0, 3));
};
var rgb2luminance = (e, t, n) => (e = luminance_x(e), t = luminance_x(t), n = luminance_x(n), .2126 * e + .7152 * t + .0722 * n), luminance_x = (e) => (e /= 255, e <= .03928 ? e / 12.92 : pow$6((e + .055) / 1.055, 2.4)), interpolator_default = {}, mix_default = (e, t, n = .5, ...r) => {
	let i = r[0] || "lrgb";
	if (!interpolator_default[i] && !r.length && (i = Object.keys(interpolator_default)[0]), !interpolator_default[i]) throw Error(`interpolation mode ${i} is not defined`);
	return type_default(e) !== "object" && (e = new Color(e)), type_default(t) !== "object" && (t = new Color(t)), interpolator_default[i](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()));
};
//#endregion
//#region node_modules/chroma-js/src/ops/premultiply.js
Color.prototype.mix = Color.prototype.interpolate = function(e, t = .5, ...n) {
	return mix_default(this, e, t, ...n);
}, Color.prototype.premultiply = function(e = !1) {
	let t = this._rgb, n = t[3];
	return e ? (this._rgb = [
		t[0] * n,
		t[1] * n,
		t[2] * n,
		n
	], this) : new Color([
		t[0] * n,
		t[1] * n,
		t[2] * n,
		n
	], "rgb");
};
//#endregion
//#region node_modules/chroma-js/src/io/lch/lch2lab.js
var { sin: sin$3, cos: cos$4 } = Math, lch2lab = (...e) => {
	let [t, n, r] = unpack_default(e, "lch");
	return isNaN(r) && (r = 0), r *= DEG2RAD, [
		t,
		cos$4(r) * n,
		sin$3(r) * n
	];
}, lch2rgb = (...e) => {
	e = unpack_default(e, "lch");
	let [t, n, r] = e, [i, a, s] = lch2lab(t, n, r), [c, l, u] = lab2rgb(i, a, s);
	return [
		c,
		l,
		u,
		e.length > 3 ? e[3] : 1
	];
}, hcl2rgb = (...e) => lch2rgb(...reverse3(unpack_default(e, "hcl"))), { sqrt: sqrt$4, atan2: atan2$2, round: round$4 } = Math, lab2lch = (...e) => {
	let [t, n, r] = unpack_default(e, "lab"), i = sqrt$4(n * n + r * r), a = (atan2$2(r, n) * RAD2DEG + 360) % 360;
	return round$4(i * 1e4) === 0 && (a = NaN), [
		t,
		i,
		a
	];
}, rgb2lch = (...e) => {
	let [t, n, r, ...i] = unpack_default(e, "rgb"), [a, s, c] = rgb2lab(t, n, r), [l, u, d] = lab2lch(a, s, c);
	return [
		l,
		u,
		d,
		...i.length > 0 && i[0] < 1 ? [i[0]] : []
	];
};
Color.prototype.lch = function() {
	return rgb2lch(this._rgb);
}, Color.prototype.hcl = function() {
	return reverse3(rgb2lch(this._rgb));
};
var lch$1 = (...e) => new Color(...e, "lch"), hcl = (...e) => new Color(...e, "hcl");
Object.assign(chroma$3, {
	lch: lch$1,
	hcl
}), input_default.format.lch = lch2rgb, input_default.format.hcl = hcl2rgb, ["lch", "hcl"].forEach((e) => input_default.autodetect.push({
	p: 2,
	test: (...t) => {
		if (t = unpack_default(t, e), type_default(t) === "array" && t.length === 3) return e;
	}
})), Color.prototype.saturate = function(e = 1) {
	let t = this, n = t.lch();
	return n[1] += labConstants.Kn * e, n[1] < 0 && (n[1] = 0), new Color(n, "lch").alpha(t.alpha(), !0);
}, Color.prototype.desaturate = function(e = 1) {
	return this.saturate(-e);
}, Color.prototype.set = function(e, t, n = !1) {
	let [r, i] = e.split("."), a = this[r]();
	if (i) {
		let e = r.indexOf(i) - (r.substr(0, 2) === "ok" ? 2 : 0);
		if (e > -1) {
			if (type_default(t) == "string") switch (t.charAt(0)) {
				case "+":
					a[e] += +t;
					break;
				case "-":
					a[e] += +t;
					break;
				case "*":
					a[e] *= +t.substr(1);
					break;
				case "/":
					a[e] /= +t.substr(1);
					break;
				default: a[e] = +t;
			}
			else if (type_default(t) === "number") a[e] = t;
			else throw Error("unsupported value for Color.set");
			let i = new Color(a, r);
			return n ? (this._rgb = i._rgb, this) : i;
		}
		throw Error(`unknown channel ${i} in mode ${r}`);
	} else return a;
}, Color.prototype.tint = function(e = .5, ...t) {
	return mix_default(this, "white", e, ...t);
}, Color.prototype.shade = function(e = .5, ...t) {
	return mix_default(this, "black", e, ...t);
};
//#endregion
//#region node_modules/chroma-js/src/interpolator/rgb.js
var rgb$1 = (e, t, n) => {
	let r = e._rgb, i = t._rgb;
	return new Color(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "rgb");
};
interpolator_default.rgb = rgb$1;
//#endregion
//#region node_modules/chroma-js/src/interpolator/lrgb.js
var { sqrt: sqrt$3, pow: pow$5 } = Math, lrgb = (e, t, n) => {
	let [r, i, a] = e._rgb, [s, c, l] = t._rgb;
	return new Color(sqrt$3(pow$5(r, 2) * (1 - n) + pow$5(s, 2) * n), sqrt$3(pow$5(i, 2) * (1 - n) + pow$5(c, 2) * n), sqrt$3(pow$5(a, 2) * (1 - n) + pow$5(l, 2) * n), "rgb");
};
interpolator_default.lrgb = lrgb;
//#endregion
//#region node_modules/chroma-js/src/interpolator/lab.js
var lab = (e, t, n) => {
	let r = e.lab(), i = t.lab();
	return new Color(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "lab");
};
interpolator_default.lab = lab;
//#endregion
//#region node_modules/chroma-js/src/interpolator/_hsx.js
var _hsx_default = (e, t, n, r) => {
	let i, a;
	r === "hsl" ? (i = e.hsl(), a = t.hsl()) : r === "hsv" ? (i = e.hsv(), a = t.hsv()) : r === "hcg" ? (i = e.hcg(), a = t.hcg()) : r === "hsi" ? (i = e.hsi(), a = t.hsi()) : r === "lch" || r === "hcl" ? (r = "hcl", i = e.hcl(), a = t.hcl()) : r === "oklch" && (i = e.oklch().reverse(), a = t.oklch().reverse());
	let s, c, l, u, d, f;
	(r.substr(0, 1) === "h" || r === "oklch") && ([s, l, d] = i, [c, u, f] = a);
	let p, h, g, _;
	return !isNaN(s) && !isNaN(c) ? (_ = c > s && c - s > 180 ? c - (s + 360) : c < s && s - c > 180 ? c + 360 - s : c - s, h = s + n * _) : isNaN(s) ? isNaN(c) ? h = NaN : (h = c, (d == 1 || d == 0) && r != "hsv" && (p = u)) : (h = s, (f == 1 || f == 0) && r != "hsv" && (p = l)), p === void 0 && (p = l + n * (u - l)), g = d + n * (f - d), r === "oklch" ? new Color([
		g,
		p,
		h
	], r) : new Color([
		h,
		p,
		g
	], r);
}, lch = (e, t, n) => _hsx_default(e, t, n, "lch");
interpolator_default.lch = lch, interpolator_default.hcl = lch;
//#endregion
//#region node_modules/chroma-js/src/io/num/num2rgb.js
var num2rgb = (e) => {
	if (type_default(e) == "number" && e >= 0 && e <= 16777215) return [
		e >> 16,
		e >> 8 & 255,
		e & 255,
		1
	];
	throw Error("unknown num color: " + e);
}, rgb2num = (...e) => {
	let [t, n, r] = unpack_default(e, "rgb");
	return (t << 16) + (n << 8) + r;
};
//#endregion
//#region node_modules/chroma-js/src/io/num/index.js
Color.prototype.num = function() {
	return rgb2num(this._rgb);
};
var num$1 = (...e) => new Color(...e, "num");
Object.assign(chroma$3, { num: num$1 }), input_default.format.num = num2rgb, input_default.autodetect.push({
	p: 5,
	test: (...e) => {
		if (e.length === 1 && type_default(e[0]) === "number" && e[0] >= 0 && e[0] <= 16777215) return "num";
	}
});
//#endregion
//#region node_modules/chroma-js/src/interpolator/num.js
var num = (e, t, n) => {
	let r = e.num();
	return new Color(r + n * (t.num() - r), "num");
};
interpolator_default.num = num;
//#endregion
//#region node_modules/chroma-js/src/io/hcg/hcg2rgb.js
var { floor: floor$3 } = Math, hcg2rgb = (...e) => {
	e = unpack_default(e, "hcg");
	let [t, n, r] = e, i, a, s;
	r *= 255;
	let c = n * 255;
	if (n === 0) i = a = s = r;
	else {
		t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
		let e = floor$3(t), l = t - e, u = r * (1 - n), d = u + c * (1 - l), f = u + c * l, p = u + c;
		switch (e) {
			case 0:
				[i, a, s] = [
					p,
					f,
					u
				];
				break;
			case 1:
				[i, a, s] = [
					d,
					p,
					u
				];
				break;
			case 2:
				[i, a, s] = [
					u,
					p,
					f
				];
				break;
			case 3:
				[i, a, s] = [
					u,
					d,
					p
				];
				break;
			case 4:
				[i, a, s] = [
					f,
					u,
					p
				];
				break;
			case 5:
				[i, a, s] = [
					p,
					u,
					d
				];
				break;
		}
	}
	return [
		i,
		a,
		s,
		e.length > 3 ? e[3] : 1
	];
}, rgb2hcg = (...e) => {
	let [t, n, r] = unpack_default(e, "rgb"), i = min$3(t, n, r), a = max$3(t, n, r), s = a - i, c = s * 100 / 255, l = i / (255 - s) * 100, u;
	return s === 0 ? u = NaN : (t === a && (u = (n - r) / s), n === a && (u = 2 + (r - t) / s), r === a && (u = 4 + (t - n) / s), u *= 60, u < 0 && (u += 360)), [
		u,
		c,
		l
	];
};
//#endregion
//#region node_modules/chroma-js/src/io/hcg/index.js
Color.prototype.hcg = function() {
	return rgb2hcg(this._rgb);
};
var hcg$1 = (...e) => new Color(...e, "hcg");
chroma$3.hcg = hcg$1, input_default.format.hcg = hcg2rgb, input_default.autodetect.push({
	p: 1,
	test: (...e) => {
		if (e = unpack_default(e, "hcg"), type_default(e) === "array" && e.length === 3) return "hcg";
	}
});
//#endregion
//#region node_modules/chroma-js/src/interpolator/hcg.js
var hcg = (e, t, n) => _hsx_default(e, t, n, "hcg");
interpolator_default.hcg = hcg;
//#endregion
//#region node_modules/chroma-js/src/io/hsi/hsi2rgb.js
var { cos: cos$3 } = Math, hsi2rgb = (...e) => {
	e = unpack_default(e, "hsi");
	let [t, n, r] = e, i, a, s;
	return isNaN(t) && (t = 0), isNaN(n) && (n = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 360, t < 1 / 3 ? (s = (1 - n) / 3, i = (1 + n * cos$3(TWOPI * t) / cos$3(PITHIRD - TWOPI * t)) / 3, a = 1 - (s + i)) : t < 2 / 3 ? (t -= 1 / 3, i = (1 - n) / 3, a = (1 + n * cos$3(TWOPI * t) / cos$3(PITHIRD - TWOPI * t)) / 3, s = 1 - (i + a)) : (t -= 2 / 3, a = (1 - n) / 3, s = (1 + n * cos$3(TWOPI * t) / cos$3(PITHIRD - TWOPI * t)) / 3, i = 1 - (a + s)), i = limit_default(r * i * 3), a = limit_default(r * a * 3), s = limit_default(r * s * 3), [
		i * 255,
		a * 255,
		s * 255,
		e.length > 3 ? e[3] : 1
	];
}, { min: min$2, sqrt: sqrt$2, acos } = Math, rgb2hsi = (...e) => {
	let [t, n, r] = unpack_default(e, "rgb");
	t /= 255, n /= 255, r /= 255;
	let i, a = min$2(t, n, r), s = (t + n + r) / 3, c = s > 0 ? 1 - a / s : 0;
	return c === 0 ? i = NaN : (i = (t - n + (t - r)) / 2, i /= sqrt$2((t - n) * (t - n) + (t - r) * (n - r)), i = acos(i), r > n && (i = TWOPI - i), i /= TWOPI), [
		i * 360,
		c,
		s
	];
};
//#endregion
//#region node_modules/chroma-js/src/io/hsi/index.js
Color.prototype.hsi = function() {
	return rgb2hsi(this._rgb);
};
var hsi$1 = (...e) => new Color(...e, "hsi");
chroma$3.hsi = hsi$1, input_default.format.hsi = hsi2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "hsi"), type_default(e) === "array" && e.length === 3) return "hsi";
	}
});
//#endregion
//#region node_modules/chroma-js/src/interpolator/hsi.js
var hsi = (e, t, n) => _hsx_default(e, t, n, "hsi");
interpolator_default.hsi = hsi;
//#endregion
//#region node_modules/chroma-js/src/io/hsl/hsl2rgb.js
var hsl2rgb = (...e) => {
	e = unpack_default(e, "hsl");
	let [t, n, r] = e, i, a, s;
	if (n === 0) i = a = s = r * 255;
	else {
		let e = [
			0,
			0,
			0
		], c = [
			0,
			0,
			0
		], l = r < .5 ? r * (1 + n) : r + n - r * n, u = 2 * r - l, d = t / 360;
		e[0] = d + 1 / 3, e[1] = d, e[2] = d - 1 / 3;
		for (let t = 0; t < 3; t++) e[t] < 0 && (e[t] += 1), e[t] > 1 && --e[t], 6 * e[t] < 1 ? c[t] = u + (l - u) * 6 * e[t] : 2 * e[t] < 1 ? c[t] = l : 3 * e[t] < 2 ? c[t] = u + (l - u) * (2 / 3 - e[t]) * 6 : c[t] = u;
		[i, a, s] = [
			c[0] * 255,
			c[1] * 255,
			c[2] * 255
		];
	}
	return e.length > 3 ? [
		i,
		a,
		s,
		e[3]
	] : [
		i,
		a,
		s,
		1
	];
}, rgb2hsl$1 = (...e) => {
	e = unpack_default(e, "rgba");
	let [t, n, r] = e;
	t /= 255, n /= 255, r /= 255;
	let i = min$3(t, n, r), a = max$3(t, n, r), s = (a + i) / 2, c, l;
	return a === i ? (c = 0, l = NaN) : c = s < .5 ? (a - i) / (a + i) : (a - i) / (2 - a - i), t == a ? l = (n - r) / (a - i) : n == a ? l = 2 + (r - t) / (a - i) : r == a && (l = 4 + (t - n) / (a - i)), l *= 60, l < 0 && (l += 360), e.length > 3 && e[3] !== void 0 ? [
		l,
		c,
		s,
		e[3]
	] : [
		l,
		c,
		s
	];
};
//#endregion
//#region node_modules/chroma-js/src/io/hsl/index.js
Color.prototype.hsl = function() {
	return rgb2hsl$1(this._rgb);
};
var hsl$1 = (...e) => new Color(...e, "hsl");
chroma$3.hsl = hsl$1, input_default.format.hsl = hsl2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "hsl"), type_default(e) === "array" && e.length === 3) return "hsl";
	}
});
//#endregion
//#region node_modules/chroma-js/src/interpolator/hsl.js
var hsl = (e, t, n) => _hsx_default(e, t, n, "hsl");
interpolator_default.hsl = hsl;
//#endregion
//#region node_modules/chroma-js/src/io/hsv/hsv2rgb.js
var { floor: floor$2 } = Math, hsv2rgb = (...e) => {
	e = unpack_default(e, "hsv");
	let [t, n, r] = e, i, a, s;
	if (r *= 255, n === 0) i = a = s = r;
	else {
		t === 360 && (t = 0), t > 360 && (t -= 360), t < 0 && (t += 360), t /= 60;
		let e = floor$2(t), c = t - e, l = r * (1 - n), u = r * (1 - n * c), d = r * (1 - n * (1 - c));
		switch (e) {
			case 0:
				[i, a, s] = [
					r,
					d,
					l
				];
				break;
			case 1:
				[i, a, s] = [
					u,
					r,
					l
				];
				break;
			case 2:
				[i, a, s] = [
					l,
					r,
					d
				];
				break;
			case 3:
				[i, a, s] = [
					l,
					u,
					r
				];
				break;
			case 4:
				[i, a, s] = [
					d,
					l,
					r
				];
				break;
			case 5:
				[i, a, s] = [
					r,
					l,
					u
				];
				break;
		}
	}
	return [
		i,
		a,
		s,
		e.length > 3 ? e[3] : 1
	];
}, { min: min$1, max: max$2 } = Math, rgb2hsl = (...e) => {
	e = unpack_default(e, "rgb");
	let [t, n, r] = e, i = min$1(t, n, r), a = max$2(t, n, r), s = a - i, c, l, u;
	return u = a / 255, a === 0 ? (c = NaN, l = 0) : (l = s / a, t === a && (c = (n - r) / s), n === a && (c = 2 + (r - t) / s), r === a && (c = 4 + (t - n) / s), c *= 60, c < 0 && (c += 360)), [
		c,
		l,
		u
	];
};
//#endregion
//#region node_modules/chroma-js/src/io/hsv/index.js
Color.prototype.hsv = function() {
	return rgb2hsl(this._rgb);
};
var hsv$1 = (...e) => new Color(...e, "hsv");
chroma$3.hsv = hsv$1, input_default.format.hsv = hsv2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "hsv"), type_default(e) === "array" && e.length === 3) return "hsv";
	}
});
//#endregion
//#region node_modules/chroma-js/src/interpolator/hsv.js
var hsv = (e, t, n) => _hsx_default(e, t, n, "hsv");
interpolator_default.hsv = hsv;
//#endregion
//#region node_modules/chroma-js/src/utils/multiply-matrices.js
function multiplyMatrices(e, t) {
	let n = e.length;
	Array.isArray(e[0]) || (e = [e]), Array.isArray(t[0]) || (t = t.map((e) => [e]));
	let r = t[0].length, i = t[0].map((e, n) => t.map((e) => e[n])), a = e.map((e) => i.map((t) => Array.isArray(e) ? e.reduce((e, n, r) => e + n * (t[r] || 0), 0) : t.reduce((t, n) => t + n * e, 0)));
	return n === 1 && (a = a[0]), r === 1 ? a.map((e) => e[0]) : a;
}
//#endregion
//#region node_modules/chroma-js/src/io/oklab/oklab2rgb.js
var oklab2rgb = (...e) => {
	e = unpack_default(e, "lab");
	let [t, n, r, ...i] = e, [a, s, c] = OKLab_to_XYZ([
		t,
		n,
		r
	]), [l, u, d] = xyz2rgb(a, s, c);
	return [
		l,
		u,
		d,
		...i.length > 0 && i[0] < 1 ? [i[0]] : []
	];
};
function OKLab_to_XYZ(e) {
	return multiplyMatrices([
		[
			1.2268798758459243,
			-.5578149944602171,
			.2813910456659647
		],
		[
			-.0405757452148008,
			1.112286803280317,
			-.0717110580655164
		],
		[
			-.0763729366746601,
			-.4214933324022432,
			1.5869240198367816
		]
	], multiplyMatrices([
		[
			1,
			.3963377773761749,
			.2158037573099136
		],
		[
			1,
			-.1055613458156586,
			-.0638541728258133
		],
		[
			1,
			-.0894841775298119,
			-1.2914855480194092
		]
	], e).map((e) => e ** 3));
}
//#endregion
//#region node_modules/chroma-js/src/io/oklab/rgb2oklab.js
var rgb2oklab = (...e) => {
	let [t, n, r, ...i] = unpack_default(e, "rgb");
	return [...XYZ_to_OKLab(rgb2xyz(t, n, r)), ...i.length > 0 && i[0] < 1 ? [i[0]] : []];
};
function XYZ_to_OKLab(e) {
	return multiplyMatrices([
		[
			.210454268309314,
			.7936177747023054,
			-.0040720430116193
		],
		[
			1.9779985324311684,
			-2.42859224204858,
			.450593709617411
		],
		[
			.0259040424655478,
			.7827717124575296,
			-.8086757549230774
		]
	], multiplyMatrices([
		[
			.819022437996703,
			.3619062600528904,
			-.1288737815209879
		],
		[
			.0329836539323885,
			.9292868615863434,
			.0361446663506424
		],
		[
			.0481771893596242,
			.2642395317527308,
			.6335478284694309
		]
	], e).map((e) => Math.cbrt(e)));
}
//#endregion
//#region node_modules/chroma-js/src/io/oklab/index.js
Color.prototype.oklab = function() {
	return rgb2oklab(this._rgb);
};
var oklab$1 = (...e) => new Color(...e, "oklab");
Object.assign(chroma$3, { oklab: oklab$1 }), input_default.format.oklab = oklab2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "oklab"), type_default(e) === "array" && e.length === 3) return "oklab";
	}
});
//#endregion
//#region node_modules/chroma-js/src/interpolator/oklab.js
var oklab = (e, t, n) => {
	let r = e.oklab(), i = t.oklab();
	return new Color(r[0] + n * (i[0] - r[0]), r[1] + n * (i[1] - r[1]), r[2] + n * (i[2] - r[2]), "oklab");
};
interpolator_default.oklab = oklab;
//#endregion
//#region node_modules/chroma-js/src/interpolator/oklch.js
var oklch$1 = (e, t, n) => _hsx_default(e, t, n, "oklch");
interpolator_default.oklch = oklch$1;
//#endregion
//#region node_modules/chroma-js/src/generator/average.js
var { pow: pow$4, sqrt: sqrt$1, PI: PI$2, cos: cos$2, sin: sin$2, atan2: atan2$1 } = Math, average_default = (e, t = "lrgb", n = null) => {
	let r = e.length;
	n ||= Array.from(Array(r)).map(() => 1);
	let i = r / n.reduce(function(e, t) {
		return e + t;
	});
	if (n.forEach((e, t) => {
		n[t] *= i;
	}), e = e.map((e) => new Color(e)), t === "lrgb") return _average_lrgb(e, n);
	let a = e.shift(), s = a.get(t), c = [], l = 0, u = 0;
	for (let e = 0; e < s.length; e++) if (s[e] = (s[e] || 0) * n[0], c.push(isNaN(s[e]) ? 0 : n[0]), t.charAt(e) === "h" && !isNaN(s[e])) {
		let t = s[e] / 180 * PI$2;
		l += cos$2(t) * n[0], u += sin$2(t) * n[0];
	}
	let d = a.alpha() * n[0];
	e.forEach((e, r) => {
		let i = e.get(t);
		d += e.alpha() * n[r + 1];
		for (let e = 0; e < s.length; e++) if (!isNaN(i[e])) if (c[e] += n[r + 1], t.charAt(e) === "h") {
			let t = i[e] / 180 * PI$2;
			l += cos$2(t) * n[r + 1], u += sin$2(t) * n[r + 1];
		} else s[e] += i[e] * n[r + 1];
	});
	for (let e = 0; e < s.length; e++) if (t.charAt(e) === "h") {
		let t = atan2$1(u / c[e], l / c[e]) / PI$2 * 180;
		for (; t < 0;) t += 360;
		for (; t >= 360;) t -= 360;
		s[e] = t;
	} else s[e] = s[e] / c[e];
	return d /= r, new Color(s, t).alpha(d > .99999 ? 1 : d, !0);
}, _average_lrgb = (e, t) => {
	let n = e.length, r = [
		0,
		0,
		0,
		0
	];
	for (let i = 0; i < e.length; i++) {
		let a = e[i], s = t[i] / n, c = a._rgb;
		r[0] += pow$4(c[0], 2) * s, r[1] += pow$4(c[1], 2) * s, r[2] += pow$4(c[2], 2) * s, r[3] += c[3] * s;
	}
	return r[0] = sqrt$1(r[0]), r[1] = sqrt$1(r[1]), r[2] = sqrt$1(r[2]), r[3] > .9999999 && (r[3] = 1), new Color(clip_rgb_default(r));
}, { pow: pow$3 } = Math;
function scale_default(e) {
	let t = "rgb", n = chroma$3("#ccc"), r = 0, i = [0, 1], a = [0, 1], s = [], c = [0, 0], l = !1, u = [], d = !1, f = 0, p = 1, h = !1, g = {}, _ = !0, v = 1, y = function(e) {
		if (e ||= ["#fff", "#000"], e && type_default(e) === "string" && chroma$3.brewer && chroma$3.brewer[e.toLowerCase()] && (e = chroma$3.brewer[e.toLowerCase()]), type_default(e) === "array") {
			e.length === 1 && (e = [e[0], e[0]]), e = e.slice(0);
			for (let t = 0; t < e.length; t++) e[t] = chroma$3(e[t]);
			s.length = 0;
			for (let t = 0; t < e.length; t++) s.push(t / (e.length - 1));
		}
		return w(), u = e;
	}, b = function(e) {
		if (l != null) {
			let t = l.length - 1, n = 0;
			for (; n < t && e >= l[n];) n++;
			return n - 1;
		}
		return 0;
	}, x = (e) => e, S = (e) => e, C = function(e, r) {
		let i, a;
		if (r ??= !1, isNaN(e) || e === null) return n;
		a = r ? e : l && l.length > 2 ? b(e) / (l.length - 2) : p === f ? 1 : (e - f) / (p - f), a = S(a), r || (a = x(a)), v !== 1 && (a = pow$3(a, v)), a = c[0] + a * (1 - c[0] - c[1]), a = limit_default(a, 0, 1);
		let d = Math.floor(a * 1e4);
		if (_ && g[d]) i = g[d];
		else {
			if (type_default(u) === "array") for (let e = 0; e < s.length; e++) {
				let n = s[e];
				if (a <= n) {
					i = u[e];
					break;
				}
				if (a >= n && e === s.length - 1) {
					i = u[e];
					break;
				}
				if (a > n && a < s[e + 1]) {
					a = (a - n) / (s[e + 1] - n), i = chroma$3.interpolate(u[e], u[e + 1], a, t);
					break;
				}
			}
			else type_default(u) === "function" && (i = u(a));
			_ && (g[d] = i);
		}
		return i;
	};
	var w = () => g = {};
	y(e);
	let T = function(e) {
		let t = chroma$3(C(e));
		return d && t[d] ? t[d]() : t;
	};
	return T.classes = function(e) {
		if (e != null) {
			if (type_default(e) === "array") l = e, i = [e[0], e[e.length - 1]];
			else {
				let t = chroma$3.analyze(i);
				l = e === 0 ? [t.min, t.max] : chroma$3.limits(t, "e", e);
			}
			return T;
		}
		return l;
	}, T.domain = function(e) {
		if (!arguments.length) return a;
		a = e.slice(0), f = e[0], p = e[e.length - 1], s = [];
		let t = u.length;
		if (e.length === t && f !== p) for (let t of Array.from(e)) s.push((t - f) / (p - f));
		else {
			for (let e = 0; e < t; e++) s.push(e / (t - 1));
			if (e.length > 2) {
				let t = e.map((t, n) => n / (e.length - 1)), n = e.map((e) => (e - f) / (p - f));
				n.every((e, n) => t[n] === e) || (S = (e) => {
					if (e <= 0 || e >= 1) return e;
					let r = 0;
					for (; e >= n[r + 1];) r++;
					let i = (e - n[r]) / (n[r + 1] - n[r]);
					return t[r] + i * (t[r + 1] - t[r]);
				});
			}
		}
		return i = [f, p], T;
	}, T.mode = function(e) {
		return arguments.length ? (t = e, w(), T) : t;
	}, T.range = function(e, t) {
		return y(e, t), T;
	}, T.out = function(e) {
		return d = e, T;
	}, T.spread = function(e) {
		return arguments.length ? (r = e, T) : r;
	}, T.correctLightness = function(e) {
		return e ??= !0, h = e, w(), x = h ? function(e) {
			let t = C(0, !0).lab()[0], n = C(1, !0).lab()[0], r = t > n, i = C(e, !0).lab()[0], a = t + (n - t) * e, s = i - a, c = 0, l = 1, u = 20;
			for (; Math.abs(s) > .01 && u-- > 0;) (function() {
				return r && (s *= -1), s < 0 ? (c = e, e += (l - e) * .5) : (l = e, e += (c - e) * .5), i = C(e, !0).lab()[0], s = i - a;
			})();
			return e;
		} : (e) => e, T;
	}, T.padding = function(e) {
		return e == null ? c : (type_default(e) === "number" && (e = [e, e]), c = e, T);
	}, T.colors = function(t, n) {
		arguments.length < 2 && (n = "hex");
		let r = [];
		if (arguments.length === 0) r = u.slice(0);
		else if (t === 1) r = [T(.5)];
		else if (t > 1) {
			let e = i[0], n = i[1] - e;
			r = __range__(0, t, !1).map((r) => T(e + r / (t - 1) * n));
		} else {
			e = [];
			let t = [];
			if (l && l.length > 2) for (let e = 1, n = l.length, r = 1 <= n; r ? e < n : e > n; r ? e++ : e--) t.push((l[e - 1] + l[e]) * .5);
			else t = i;
			r = t.map((e) => T(e));
		}
		return chroma$3[n] && (r = r.map((e) => e[n]())), r;
	}, T.cache = function(e) {
		return e == null ? _ : (_ = e, T);
	}, T.gamma = function(e) {
		return e == null ? v : (v = e, T);
	}, T.nodata = function(e) {
		return e == null ? n : (n = chroma$3(e), T);
	}, T;
}
function __range__(e, t, n) {
	let r = [], i = e < t, a = n ? i ? t + 1 : t - 1 : t;
	for (let t = e; i ? t < a : t > a; i ? t++ : t--) r.push(t);
	return r;
}
//#endregion
//#region node_modules/chroma-js/src/generator/bezier.js
var binom_row = function(e) {
	let t = [1, 1];
	for (let n = 1; n < e; n++) {
		let e = [1];
		for (let n = 1; n <= t.length; n++) e[n] = (t[n] || 0) + t[n - 1];
		t = e;
	}
	return t;
}, bezier = function(e) {
	let t, n, r, i;
	if (e = e.map((e) => new Color(e)), e.length === 2) [n, r] = e.map((e) => e.lab()), t = function(e) {
		return new Color([
			0,
			1,
			2
		].map((t) => n[t] + e * (r[t] - n[t])), "lab");
	};
	else if (e.length === 3) [n, r, i] = e.map((e) => e.lab()), t = function(e) {
		return new Color([
			0,
			1,
			2
		].map((t) => (1 - e) * (1 - e) * n[t] + 2 * (1 - e) * e * r[t] + e * e * i[t]), "lab");
	};
	else if (e.length === 4) {
		let a;
		[n, r, i, a] = e.map((e) => e.lab()), t = function(e) {
			return new Color([
				0,
				1,
				2
			].map((t) => (1 - e) * (1 - e) * (1 - e) * n[t] + 3 * (1 - e) * (1 - e) * e * r[t] + 3 * (1 - e) * e * e * i[t] + e * e * e * a[t]), "lab");
		};
	} else if (e.length >= 5) {
		let n, r, i;
		n = e.map((e) => e.lab()), i = e.length - 1, r = binom_row(i), t = function(e) {
			let t = 1 - e;
			return new Color([
				0,
				1,
				2
			].map((a) => n.reduce((n, s, c) => n + r[c] * t ** (i - c) * e ** c * s[a], 0)), "lab");
		};
	} else throw RangeError("No point in running bezier with only one color.");
	return t;
}, bezier_default = (e) => {
	let t = bezier(e);
	return t.scale = () => scale_default(t), t;
}, { round: round$3 } = Math;
Color.prototype.rgb = function(e = !0) {
	return e === !1 ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(round$3);
}, Color.prototype.rgba = function(e = !0) {
	return this._rgb.slice(0, 4).map((t, n) => n < 3 ? e === !1 ? t : round$3(t) : t);
};
var rgb = (...e) => new Color(...e, "rgb");
Object.assign(chroma$3, { rgb }), input_default.format.rgb = (...e) => {
	let t = unpack_default(e, "rgba");
	return t[3] === void 0 && (t[3] = 1), t;
}, input_default.autodetect.push({
	p: 3,
	test: (...e) => {
		if (e = unpack_default(e, "rgba"), type_default(e) === "array" && (e.length === 3 || e.length === 4 && type_default(e[3]) == "number" && e[3] >= 0 && e[3] <= 1)) return "rgb";
	}
});
//#endregion
//#region node_modules/chroma-js/src/generator/blend.js
var blend = (e, t, n) => {
	if (!blend[n]) throw Error("unknown blend mode " + n);
	return blend[n](e, t);
}, blend_f = (e) => (t, n) => {
	let r = chroma$3(n).rgb(), i = chroma$3(t).rgb();
	return chroma$3.rgb(e(r, i));
}, each = (e) => (t, n) => {
	let r = [];
	return r[0] = e(t[0], n[0]), r[1] = e(t[1], n[1]), r[2] = e(t[2], n[2]), r;
}, normal = (e) => e, multiply = (e, t) => e * t / 255, darken = (e, t) => e > t ? t : e, lighten = (e, t) => e > t ? e : t, screen = (e, t) => 255 * (1 - (1 - e / 255) * (1 - t / 255)), overlay = (e, t) => t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255)), burn = (e, t) => 255 * (1 - (1 - t / 255) / (e / 255)), dodge = (e, t) => e === 255 ? 255 : (e = t / 255 * 255 / (1 - e / 255), e > 255 ? 255 : e);
blend.normal = blend_f(each(normal)), blend.multiply = blend_f(each(multiply)), blend.screen = blend_f(each(screen)), blend.overlay = blend_f(each(overlay)), blend.darken = blend_f(each(darken)), blend.lighten = blend_f(each(lighten)), blend.dodge = blend_f(each(dodge)), blend.burn = blend_f(each(burn));
//#endregion
//#region node_modules/chroma-js/src/generator/cubehelix.js
var { pow: pow$2, sin: sin$1, cos: cos$1 } = Math;
function cubehelix_default(e = 300, t = -1.5, n = 1, r = 1, i = [0, 1]) {
	let a = 0, s;
	type_default(i) === "array" ? s = i[1] - i[0] : (s = 0, i = [i, i]);
	let c = function(c) {
		let l = TWOPI * ((e + 120) / 360 + t * c), u = pow$2(i[0] + s * c, r), d = (a === 0 ? n : n[0] + c * a) * u * (1 - u) / 2, f = cos$1(l), p = sin$1(l), h = u + d * (-.14861 * f + 1.78277 * p), g = u + d * (-.29227 * f - .90649 * p), _ = u + 1.97294 * f * d;
		return chroma$3(clip_rgb_default([
			h * 255,
			g * 255,
			_ * 255,
			1
		]));
	};
	return c.start = function(t) {
		return t == null ? e : (e = t, c);
	}, c.rotations = function(e) {
		return e == null ? t : (t = e, c);
	}, c.gamma = function(e) {
		return e == null ? r : (r = e, c);
	}, c.hue = function(e) {
		return e == null ? n : (n = e, type_default(n) === "array" ? (a = n[1] - n[0], a === 0 && (n = n[1])) : a = 0, c);
	}, c.lightness = function(e) {
		return e == null ? i : (type_default(e) === "array" ? (i = e, s = e[1] - e[0]) : (i = [e, e], s = 0), c);
	}, c.scale = () => chroma$3.scale(c), c.hue(n), c;
}
//#endregion
//#region node_modules/chroma-js/src/generator/random.js
var digits = "0123456789abcdef", { floor: floor$1, random } = Math, random_default = (e = random) => {
	let t = "#";
	for (let n = 0; n < 6; n++) t += digits.charAt(floor$1(e() * 16));
	return new Color(t, "hex");
}, { log: log$1, pow: pow$1, floor, abs: abs$1 } = Math;
function analyze(e, t = null) {
	let n = {
		min: Number.MAX_VALUE,
		max: Number.MAX_VALUE * -1,
		sum: 0,
		values: [],
		count: 0
	};
	return type_default(e) === "object" && (e = Object.values(e)), e.forEach((e) => {
		t && type_default(e) === "object" && (e = e[t]), e != null && !isNaN(e) && (n.values.push(e), n.sum += e, e < n.min && (n.min = e), e > n.max && (n.max = e), n.count += 1);
	}), n.domain = [n.min, n.max], n.limits = (e, t) => limits(n, e, t), n;
}
function limits(e, t = "equal", n = 7) {
	type_default(e) == "array" && (e = analyze(e));
	let { min: r, max: i } = e, a = e.values.sort((e, t) => e - t);
	if (n === 1) return [r, i];
	let s = [];
	if (t.substr(0, 1) === "c" && (s.push(r), s.push(i)), t.substr(0, 1) === "e") {
		s.push(r);
		for (let e = 1; e < n; e++) s.push(r + e / n * (i - r));
		s.push(i);
	} else if (t.substr(0, 1) === "l") {
		if (r <= 0) throw Error("Logarithmic scales are only possible for values > 0");
		let e = Math.LOG10E * log$1(r), t = Math.LOG10E * log$1(i);
		s.push(r);
		for (let r = 1; r < n; r++) s.push(pow$1(10, e + r / n * (t - e)));
		s.push(i);
	} else if (t.substr(0, 1) === "q") {
		s.push(r);
		for (let e = 1; e < n; e++) {
			let t = (a.length - 1) * e / n, r = floor(t);
			if (r === t) s.push(a[r]);
			else {
				let e = t - r;
				s.push(a[r] * (1 - e) + a[r + 1] * e);
			}
		}
		s.push(i);
	} else if (t.substr(0, 1) === "k") {
		let e, t = a.length, c = Array(t), l = Array(n), u = !0, d = 0, f = null;
		f = [], f.push(r);
		for (let e = 1; e < n; e++) f.push(r + e / n * (i - r));
		for (f.push(i); u;) {
			for (let e = 0; e < n; e++) l[e] = 0;
			for (let e = 0; e < t; e++) {
				let t = a[e], r = Number.MAX_VALUE, i;
				for (let a = 0; a < n; a++) {
					let n = abs$1(f[a] - t);
					n < r && (r = n, i = a), l[i]++, c[e] = i;
				}
			}
			let r = Array(n);
			for (let e = 0; e < n; e++) r[e] = null;
			for (let n = 0; n < t; n++) e = c[n], r[e] === null ? r[e] = a[n] : r[e] += a[n];
			for (let e = 0; e < n; e++) r[e] *= 1 / l[e];
			u = !1;
			for (let e = 0; e < n; e++) if (r[e] !== f[e]) {
				u = !0;
				break;
			}
			f = r, d++, d > 200 && (u = !1);
		}
		let p = {};
		for (let e = 0; e < n; e++) p[e] = [];
		for (let n = 0; n < t; n++) e = c[n], p[e].push(a[n]);
		let h = [];
		for (let e = 0; e < n; e++) h.push(p[e][0]), h.push(p[e][p[e].length - 1]);
		h = h.sort((e, t) => e - t), s.push(h[0]);
		for (let e = 1; e < h.length; e += 2) {
			let t = h[e];
			!isNaN(t) && s.indexOf(t) === -1 && s.push(t);
		}
	}
	return s;
}
//#endregion
//#region node_modules/chroma-js/src/utils/contrast.js
var contrast_default = (e, t) => {
	e = new Color(e), t = new Color(t);
	let n = e.luminance(), r = t.luminance();
	return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05);
}, W_offset = .027, P_in = 5e-4, P_out = .1, R_scale = 1.14, B_threshold = .022, B_exp = 1.414, contrastAPCA_default = (e, t) => {
	e = new Color(e), t = new Color(t), e.alpha() < 1 && (e = mix_default(t, e, e.alpha(), "rgb"));
	let n = lum(...e.rgb()), r = lum(...t.rgb()), i = n >= B_threshold ? n : n + (B_threshold - n) ** +B_exp, a = r >= B_threshold ? r : r + (B_threshold - r) ** +B_exp, s = a ** .56 - i ** .57, c = a ** .65 - i ** .62, l = Math.abs(a - i) < P_in ? 0 : i < a ? s * R_scale : c * R_scale;
	return (Math.abs(l) < P_out ? 0 : l > 0 ? l - W_offset : l + W_offset) * 100;
};
function lum(e, t, n) {
	return .2126729 * (e / 255) ** 2.4 + .7151522 * (t / 255) ** 2.4 + .072175 * (n / 255) ** 2.4;
}
//#endregion
//#region node_modules/chroma-js/src/utils/delta-e.js
var { sqrt, pow, min, max: max$1, atan2, abs, cos, sin, exp, PI: PI$1 } = Math;
function delta_e_default(e, t, n = 1, r = 1, i = 1) {
	var a = function(e) {
		return 360 * e / (2 * PI$1);
	}, s = function(e) {
		return 2 * PI$1 * e / 360;
	};
	e = new Color(e), t = new Color(t);
	let [c, l, u] = Array.from(e.lab()), [d, f, p] = Array.from(t.lab()), h = (c + d) / 2, g = (sqrt(pow(l, 2) + pow(u, 2)) + sqrt(pow(f, 2) + pow(p, 2))) / 2, _ = .5 * (1 - sqrt(pow(g, 7) / (pow(g, 7) + pow(25, 7)))), v = l * (1 + _), y = f * (1 + _), b = sqrt(pow(v, 2) + pow(u, 2)), x = sqrt(pow(y, 2) + pow(p, 2)), S = (b + x) / 2, C = a(atan2(u, v)), w = a(atan2(p, y)), T = C >= 0 ? C : C + 360, E = w >= 0 ? w : w + 360, D = abs(T - E) > 180 ? (T + E + 360) / 2 : (T + E) / 2, O = 1 - .17 * cos(s(D - 30)) + .24 * cos(s(2 * D)) + .32 * cos(s(3 * D + 6)) - .2 * cos(s(4 * D - 63)), k = E - T;
	k = abs(k) <= 180 ? k : E <= T ? k + 360 : k - 360, k = 2 * sqrt(b * x) * sin(s(k) / 2);
	let A = d - c, j = x - b, N = 1 + .015 * pow(h - 50, 2) / sqrt(20 + pow(h - 50, 2)), P = 1 + .045 * S, ee = 1 + .015 * S * O, F = 30 * exp(-pow((D - 275) / 25, 2)), I = -(2 * sqrt(pow(S, 7) / (pow(S, 7) + pow(25, 7)))) * sin(2 * s(F));
	return max$1(0, min(100, sqrt(pow(A / (n * N), 2) + pow(j / (r * P), 2) + pow(k / (i * ee), 2) + I * (j / (r * P)) * (k / (i * ee)))));
}
//#endregion
//#region node_modules/chroma-js/src/utils/distance.js
function distance_default(e, t, n = "lab") {
	e = new Color(e), t = new Color(t);
	let r = e.get(n), i = t.get(n), a = 0;
	for (let e in r) {
		let t = (r[e] || 0) - (i[e] || 0);
		a += t * t;
	}
	return Math.sqrt(a);
}
//#endregion
//#region node_modules/chroma-js/src/utils/valid.js
var valid_default = (...e) => {
	try {
		return new Color(...e), !0;
	} catch {
		return !1;
	}
}, scales_default = {
	cool() {
		return scale_default([chroma$3.hsl(180, 1, .9), chroma$3.hsl(250, .7, .4)]);
	},
	hot() {
		return scale_default([
			"#000",
			"#f00",
			"#ff0",
			"#fff"
		], [
			0,
			.25,
			.75,
			1
		]).mode("rgb");
	}
}, colorbrewer = {
	OrRd: [
		"#fff7ec",
		"#fee8c8",
		"#fdd49e",
		"#fdbb84",
		"#fc8d59",
		"#ef6548",
		"#d7301f",
		"#b30000",
		"#7f0000"
	],
	PuBu: [
		"#fff7fb",
		"#ece7f2",
		"#d0d1e6",
		"#a6bddb",
		"#74a9cf",
		"#3690c0",
		"#0570b0",
		"#045a8d",
		"#023858"
	],
	BuPu: [
		"#f7fcfd",
		"#e0ecf4",
		"#bfd3e6",
		"#9ebcda",
		"#8c96c6",
		"#8c6bb1",
		"#88419d",
		"#810f7c",
		"#4d004b"
	],
	Oranges: [
		"#fff5eb",
		"#fee6ce",
		"#fdd0a2",
		"#fdae6b",
		"#fd8d3c",
		"#f16913",
		"#d94801",
		"#a63603",
		"#7f2704"
	],
	BuGn: [
		"#f7fcfd",
		"#e5f5f9",
		"#ccece6",
		"#99d8c9",
		"#66c2a4",
		"#41ae76",
		"#238b45",
		"#006d2c",
		"#00441b"
	],
	YlOrBr: [
		"#ffffe5",
		"#fff7bc",
		"#fee391",
		"#fec44f",
		"#fe9929",
		"#ec7014",
		"#cc4c02",
		"#993404",
		"#662506"
	],
	YlGn: [
		"#ffffe5",
		"#f7fcb9",
		"#d9f0a3",
		"#addd8e",
		"#78c679",
		"#41ab5d",
		"#238443",
		"#006837",
		"#004529"
	],
	Reds: [
		"#fff5f0",
		"#fee0d2",
		"#fcbba1",
		"#fc9272",
		"#fb6a4a",
		"#ef3b2c",
		"#cb181d",
		"#a50f15",
		"#67000d"
	],
	RdPu: [
		"#fff7f3",
		"#fde0dd",
		"#fcc5c0",
		"#fa9fb5",
		"#f768a1",
		"#dd3497",
		"#ae017e",
		"#7a0177",
		"#49006a"
	],
	Greens: [
		"#f7fcf5",
		"#e5f5e0",
		"#c7e9c0",
		"#a1d99b",
		"#74c476",
		"#41ab5d",
		"#238b45",
		"#006d2c",
		"#00441b"
	],
	YlGnBu: [
		"#ffffd9",
		"#edf8b1",
		"#c7e9b4",
		"#7fcdbb",
		"#41b6c4",
		"#1d91c0",
		"#225ea8",
		"#253494",
		"#081d58"
	],
	Purples: [
		"#fcfbfd",
		"#efedf5",
		"#dadaeb",
		"#bcbddc",
		"#9e9ac8",
		"#807dba",
		"#6a51a3",
		"#54278f",
		"#3f007d"
	],
	GnBu: [
		"#f7fcf0",
		"#e0f3db",
		"#ccebc5",
		"#a8ddb5",
		"#7bccc4",
		"#4eb3d3",
		"#2b8cbe",
		"#0868ac",
		"#084081"
	],
	Greys: [
		"#ffffff",
		"#f0f0f0",
		"#d9d9d9",
		"#bdbdbd",
		"#969696",
		"#737373",
		"#525252",
		"#252525",
		"#000000"
	],
	YlOrRd: [
		"#ffffcc",
		"#ffeda0",
		"#fed976",
		"#feb24c",
		"#fd8d3c",
		"#fc4e2a",
		"#e31a1c",
		"#bd0026",
		"#800026"
	],
	PuRd: [
		"#f7f4f9",
		"#e7e1ef",
		"#d4b9da",
		"#c994c7",
		"#df65b0",
		"#e7298a",
		"#ce1256",
		"#980043",
		"#67001f"
	],
	Blues: [
		"#f7fbff",
		"#deebf7",
		"#c6dbef",
		"#9ecae1",
		"#6baed6",
		"#4292c6",
		"#2171b5",
		"#08519c",
		"#08306b"
	],
	PuBuGn: [
		"#fff7fb",
		"#ece2f0",
		"#d0d1e6",
		"#a6bddb",
		"#67a9cf",
		"#3690c0",
		"#02818a",
		"#016c59",
		"#014636"
	],
	Viridis: [
		"#440154",
		"#482777",
		"#3f4a8a",
		"#31678e",
		"#26838f",
		"#1f9d8a",
		"#6cce5a",
		"#b6de2b",
		"#fee825"
	],
	Spectral: [
		"#9e0142",
		"#d53e4f",
		"#f46d43",
		"#fdae61",
		"#fee08b",
		"#ffffbf",
		"#e6f598",
		"#abdda4",
		"#66c2a5",
		"#3288bd",
		"#5e4fa2"
	],
	RdYlGn: [
		"#a50026",
		"#d73027",
		"#f46d43",
		"#fdae61",
		"#fee08b",
		"#ffffbf",
		"#d9ef8b",
		"#a6d96a",
		"#66bd63",
		"#1a9850",
		"#006837"
	],
	RdBu: [
		"#67001f",
		"#b2182b",
		"#d6604d",
		"#f4a582",
		"#fddbc7",
		"#f7f7f7",
		"#d1e5f0",
		"#92c5de",
		"#4393c3",
		"#2166ac",
		"#053061"
	],
	PiYG: [
		"#8e0152",
		"#c51b7d",
		"#de77ae",
		"#f1b6da",
		"#fde0ef",
		"#f7f7f7",
		"#e6f5d0",
		"#b8e186",
		"#7fbc41",
		"#4d9221",
		"#276419"
	],
	PRGn: [
		"#40004b",
		"#762a83",
		"#9970ab",
		"#c2a5cf",
		"#e7d4e8",
		"#f7f7f7",
		"#d9f0d3",
		"#a6dba0",
		"#5aae61",
		"#1b7837",
		"#00441b"
	],
	RdYlBu: [
		"#a50026",
		"#d73027",
		"#f46d43",
		"#fdae61",
		"#fee090",
		"#ffffbf",
		"#e0f3f8",
		"#abd9e9",
		"#74add1",
		"#4575b4",
		"#313695"
	],
	BrBG: [
		"#543005",
		"#8c510a",
		"#bf812d",
		"#dfc27d",
		"#f6e8c3",
		"#f5f5f5",
		"#c7eae5",
		"#80cdc1",
		"#35978f",
		"#01665e",
		"#003c30"
	],
	RdGy: [
		"#67001f",
		"#b2182b",
		"#d6604d",
		"#f4a582",
		"#fddbc7",
		"#ffffff",
		"#e0e0e0",
		"#bababa",
		"#878787",
		"#4d4d4d",
		"#1a1a1a"
	],
	PuOr: [
		"#7f3b08",
		"#b35806",
		"#e08214",
		"#fdb863",
		"#fee0b6",
		"#f7f7f7",
		"#d8daeb",
		"#b2abd2",
		"#8073ac",
		"#542788",
		"#2d004b"
	],
	Set2: [
		"#66c2a5",
		"#fc8d62",
		"#8da0cb",
		"#e78ac3",
		"#a6d854",
		"#ffd92f",
		"#e5c494",
		"#b3b3b3"
	],
	Accent: [
		"#7fc97f",
		"#beaed4",
		"#fdc086",
		"#ffff99",
		"#386cb0",
		"#f0027f",
		"#bf5b17",
		"#666666"
	],
	Set1: [
		"#e41a1c",
		"#377eb8",
		"#4daf4a",
		"#984ea3",
		"#ff7f00",
		"#ffff33",
		"#a65628",
		"#f781bf",
		"#999999"
	],
	Set3: [
		"#8dd3c7",
		"#ffffb3",
		"#bebada",
		"#fb8072",
		"#80b1d3",
		"#fdb462",
		"#b3de69",
		"#fccde5",
		"#d9d9d9",
		"#bc80bd",
		"#ccebc5",
		"#ffed6f"
	],
	Dark2: [
		"#1b9e77",
		"#d95f02",
		"#7570b3",
		"#e7298a",
		"#66a61e",
		"#e6ab02",
		"#a6761d",
		"#666666"
	],
	Paired: [
		"#a6cee3",
		"#1f78b4",
		"#b2df8a",
		"#33a02c",
		"#fb9a99",
		"#e31a1c",
		"#fdbf6f",
		"#ff7f00",
		"#cab2d6",
		"#6a3d9a",
		"#ffff99",
		"#b15928"
	],
	Pastel2: [
		"#b3e2cd",
		"#fdcdac",
		"#cbd5e8",
		"#f4cae4",
		"#e6f5c9",
		"#fff2ae",
		"#f1e2cc",
		"#cccccc"
	],
	Pastel1: [
		"#fbb4ae",
		"#b3cde3",
		"#ccebc5",
		"#decbe4",
		"#fed9a6",
		"#ffffcc",
		"#e5d8bd",
		"#fddaec",
		"#f2f2f2"
	]
}, colorbrewerTypes = Object.keys(colorbrewer), typeMap = new Map(colorbrewerTypes.map((e) => [e.toLowerCase(), e])), colorbrewerProxy = typeof Proxy == "function" ? new Proxy(colorbrewer, {
	get(e, t) {
		let n = t.toLowerCase();
		if (typeMap.has(n)) return e[typeMap.get(n)];
	},
	getOwnPropertyNames() {
		return Object.getOwnPropertyNames(colorbrewerTypes);
	}
}) : colorbrewer, cmyk2rgb = (...e) => {
	e = unpack_default(e, "cmyk");
	let [t, n, r, i] = e, a = e.length > 4 ? e[4] : 1;
	return i === 1 ? [
		0,
		0,
		0,
		a
	] : [
		t >= 1 ? 0 : 255 * (1 - t) * (1 - i),
		n >= 1 ? 0 : 255 * (1 - n) * (1 - i),
		r >= 1 ? 0 : 255 * (1 - r) * (1 - i),
		a
	];
}, { max } = Math, rgb2cmyk = (...e) => {
	let [t, n, r] = unpack_default(e, "rgb");
	t /= 255, n /= 255, r /= 255;
	let i = 1 - max(t, max(n, r)), a = i < 1 ? 1 / (1 - i) : 0;
	return [
		(1 - t - i) * a,
		(1 - n - i) * a,
		(1 - r - i) * a,
		i
	];
};
//#endregion
//#region node_modules/chroma-js/src/io/cmyk/index.js
Color.prototype.cmyk = function() {
	return rgb2cmyk(this._rgb);
};
var cmyk = (...e) => new Color(...e, "cmyk");
Object.assign(chroma$3, { cmyk }), input_default.format.cmyk = cmyk2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "cmyk"), type_default(e) === "array" && e.length === 4) return "cmyk";
	}
});
//#endregion
//#region node_modules/chroma-js/src/io/css/hsl2css.js
var hsl2css = (...e) => {
	let t = unpack_default(e, "hsla"), n = last_default(e) || "lsa";
	return t[0] = rnd2(t[0] || 0) + "deg", t[1] = rnd2(t[1] * 100) + "%", t[2] = rnd2(t[2] * 100) + "%", n === "hsla" || t.length > 3 && t[3] < 1 ? (t[3] = "/ " + (t.length > 3 ? t[3] : 1), n = "hsla") : t.length = 3, `${n.substr(0, 3)}(${t.join(" ")})`;
}, lab2css = (...e) => {
	let t = unpack_default(e, "lab"), n = last_default(e) || "lab";
	return t[0] = rnd2(t[0]) + "%", t[1] = rnd2(t[1]), t[2] = rnd2(t[2]), n === "laba" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lab(${t.join(" ")})`;
}, lch2css = (...e) => {
	let t = unpack_default(e, "lch"), n = last_default(e) || "lab";
	return t[0] = rnd2(t[0]) + "%", t[1] = rnd2(t[1]), t[2] = isNaN(t[2]) ? "none" : rnd2(t[2]) + "deg", n === "lcha" || t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `lch(${t.join(" ")})`;
}, oklab2css = (...e) => {
	let t = unpack_default(e, "lab");
	return t[0] = rnd2(t[0] * 100) + "%", t[1] = rnd3(t[1]), t[2] = rnd3(t[2]), t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklab(${t.join(" ")})`;
}, rgb2oklch = (...e) => {
	let [t, n, r, ...i] = unpack_default(e, "rgb"), [a, s, c] = rgb2oklab(t, n, r), [l, u, d] = lab2lch(a, s, c);
	return [
		l,
		u,
		d,
		...i.length > 0 && i[0] < 1 ? [i[0]] : []
	];
}, oklch2css = (...e) => {
	let t = unpack_default(e, "lch");
	return t[0] = rnd2(t[0] * 100) + "%", t[1] = rnd3(t[1]), t[2] = isNaN(t[2]) ? "none" : rnd2(t[2]) + "deg", t.length > 3 && t[3] < 1 ? t[3] = "/ " + (t.length > 3 ? t[3] : 1) : t.length = 3, `oklch(${t.join(" ")})`;
}, { round: round$2 } = Math, rgb2css = (...e) => {
	let t = unpack_default(e, "rgba"), n = last_default(e) || "rgb";
	if (n.substr(0, 3) === "hsl") return hsl2css(rgb2hsl$1(t), n);
	if (n.substr(0, 3) === "lab") {
		let e = getLabWhitePoint();
		setLabWhitePoint("d50");
		let r = lab2css(rgb2lab(t), n);
		return setLabWhitePoint(e), r;
	}
	if (n.substr(0, 3) === "lch") {
		let e = getLabWhitePoint();
		setLabWhitePoint("d50");
		let r = lch2css(rgb2lch(t), n);
		return setLabWhitePoint(e), r;
	}
	return n.substr(0, 5) === "oklab" ? oklab2css(rgb2oklab(t)) : n.substr(0, 5) === "oklch" ? oklch2css(rgb2oklch(t)) : (t[0] = round$2(t[0]), t[1] = round$2(t[1]), t[2] = round$2(t[2]), (n === "rgba" || t.length > 3 && t[3] < 1) && (t[3] = "/ " + (t.length > 3 ? t[3] : 1), n = "rgba"), `${n.substr(0, 3)}(${t.slice(0, n === "rgb" ? 3 : 4).join(" ")})`);
}, oklch2rgb = (...e) => {
	e = unpack_default(e, "lch");
	let [t, n, r, ...i] = e, [a, s, c] = lch2lab(t, n, r), [l, u, d] = oklab2rgb(a, s, c);
	return [
		l,
		u,
		d,
		...i.length > 0 && i[0] < 1 ? [i[0]] : []
	];
}, INT_OR_PCT = "((?:-?\\d+)|(?:-?\\d+(?:\\.\\d+)?)%|none)", FLOAT_OR_PCT = "((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%?)|none)", PCT = "((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)%)|none)", RE_S = "\\s*", SEP = "\\s+", COMMA = "\\s*,\\s*", ANLGE = "((?:-?(?:\\d+(?:\\.\\d*)?|\\.\\d+)(?:deg)?)|none)", ALPHA = "\\s*(?:\\/\\s*((?:[01]|[01]?\\.\\d+)|\\d+(?:\\.\\d+)?%))?", RE_RGB = RegExp("^rgba?\\(" + RE_S + [
	INT_OR_PCT,
	INT_OR_PCT,
	INT_OR_PCT
].join(SEP) + ALPHA + "\\)$"), RE_RGB_LEGACY = RegExp("^rgb\\(" + RE_S + [
	INT_OR_PCT,
	INT_OR_PCT,
	INT_OR_PCT
].join(COMMA) + RE_S + "\\)$"), RE_RGBA_LEGACY = RegExp("^rgba\\(" + RE_S + [
	INT_OR_PCT,
	INT_OR_PCT,
	INT_OR_PCT,
	FLOAT_OR_PCT
].join(COMMA) + RE_S + "\\)$"), RE_HSL = RegExp("^hsla?\\(" + RE_S + [
	ANLGE,
	PCT,
	PCT
].join(SEP) + ALPHA + "\\)$"), RE_HSL_LEGACY = RegExp("^hsl?\\(" + RE_S + [
	ANLGE,
	PCT,
	PCT
].join(COMMA) + RE_S + "\\)$"), RE_HSLA_LEGACY = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/, RE_LAB = RegExp("^lab\\(" + RE_S + [
	FLOAT_OR_PCT,
	FLOAT_OR_PCT,
	FLOAT_OR_PCT
].join(SEP) + ALPHA + "\\)$"), RE_LCH = RegExp("^lch\\(" + RE_S + [
	FLOAT_OR_PCT,
	FLOAT_OR_PCT,
	ANLGE
].join(SEP) + ALPHA + "\\)$"), RE_OKLAB = RegExp("^oklab\\(" + RE_S + [
	FLOAT_OR_PCT,
	FLOAT_OR_PCT,
	FLOAT_OR_PCT
].join(SEP) + ALPHA + "\\)$"), RE_OKLCH = RegExp("^oklch\\(" + RE_S + [
	FLOAT_OR_PCT,
	FLOAT_OR_PCT,
	ANLGE
].join(SEP) + ALPHA + "\\)$"), { round: round$1 } = Math, roundRGB = (e) => e.map((e, t) => t <= 2 ? limit_default(round$1(e), 0, 255) : e), percentToAbsolute = (e, t = 0, n = 100, r = !1) => (typeof e == "string" && e.endsWith("%") && (e = parseFloat(e.substring(0, e.length - 1)) / 100, e = r ? t + (e + 1) * .5 * (n - t) : t + e * (n - t)), +e), noneToValue = (e, t) => e === "none" ? t : e, css2rgb = (e) => {
	if (e = e.toLowerCase().trim(), e === "transparent") return [
		0,
		0,
		0,
		0
	];
	let t;
	if (input_default.format.named) try {
		return input_default.format.named(e);
	} catch {}
	if ((t = e.match(RE_RGB)) || (t = e.match(RE_RGB_LEGACY))) {
		let e = t.slice(1, 4);
		for (let t = 0; t < 3; t++) e[t] = +percentToAbsolute(noneToValue(e[t], 0), 0, 255);
		e = roundRGB(e);
		let n = t[4] === void 0 ? 1 : +percentToAbsolute(t[4], 0, 1);
		return e[3] = n, e;
	}
	if (t = e.match(RE_RGBA_LEGACY)) {
		let e = t.slice(1, 5);
		for (let t = 0; t < 4; t++) e[t] = +percentToAbsolute(e[t], 0, 255);
		return e;
	}
	if ((t = e.match(RE_HSL)) || (t = e.match(RE_HSL_LEGACY))) {
		let e = t.slice(1, 4);
		e[0] = +noneToValue(e[0].replace("deg", ""), 0), e[1] = percentToAbsolute(noneToValue(e[1], 0), 0, 100) * .01, e[2] = percentToAbsolute(noneToValue(e[2], 0), 0, 100) * .01;
		let n = roundRGB(hsl2rgb(e));
		return n[3] = t[4] === void 0 ? 1 : +percentToAbsolute(t[4], 0, 1), n;
	}
	if (t = e.match(RE_HSLA_LEGACY)) {
		let e = t.slice(1, 4);
		e[1] *= .01, e[2] *= .01;
		let n = hsl2rgb(e);
		for (let e = 0; e < 3; e++) n[e] = round$1(n[e]);
		return n[3] = +t[4], n;
	}
	if (t = e.match(RE_LAB)) {
		let e = t.slice(1, 4);
		e[0] = percentToAbsolute(noneToValue(e[0], 0), 0, 100), e[1] = percentToAbsolute(noneToValue(e[1], 0), -125, 125, !0), e[2] = percentToAbsolute(noneToValue(e[2], 0), -125, 125, !0);
		let n = getLabWhitePoint();
		setLabWhitePoint("d50");
		let r = roundRGB(lab2rgb(e));
		return setLabWhitePoint(n), r[3] = t[4] === void 0 ? 1 : +percentToAbsolute(t[4], 0, 1), r;
	}
	if (t = e.match(RE_LCH)) {
		let e = t.slice(1, 4);
		e[0] = percentToAbsolute(e[0], 0, 100), e[1] = percentToAbsolute(noneToValue(e[1], 0), 0, 150, !1), e[2] = +noneToValue(e[2].replace("deg", ""), 0);
		let n = getLabWhitePoint();
		setLabWhitePoint("d50");
		let r = roundRGB(lch2rgb(e));
		return setLabWhitePoint(n), r[3] = t[4] === void 0 ? 1 : +percentToAbsolute(t[4], 0, 1), r;
	}
	if (t = e.match(RE_OKLAB)) {
		let e = t.slice(1, 4);
		e[0] = percentToAbsolute(noneToValue(e[0], 0), 0, 1), e[1] = percentToAbsolute(noneToValue(e[1], 0), -.4, .4, !0), e[2] = percentToAbsolute(noneToValue(e[2], 0), -.4, .4, !0);
		let n = roundRGB(oklab2rgb(e));
		return n[3] = t[4] === void 0 ? 1 : +percentToAbsolute(t[4], 0, 1), n;
	}
	if (t = e.match(RE_OKLCH)) {
		let e = t.slice(1, 4);
		e[0] = percentToAbsolute(noneToValue(e[0], 0), 0, 1), e[1] = percentToAbsolute(noneToValue(e[1], 0), 0, .4, !1), e[2] = +noneToValue(e[2].replace("deg", ""), 0);
		let n = roundRGB(oklch2rgb(e));
		return n[3] = t[4] === void 0 ? 1 : +percentToAbsolute(t[4], 0, 1), n;
	}
};
//#endregion
//#region node_modules/chroma-js/src/io/css/index.js
css2rgb.test = (e) => RE_RGB.test(e) || RE_HSL.test(e) || RE_LAB.test(e) || RE_LCH.test(e) || RE_OKLAB.test(e) || RE_OKLCH.test(e) || RE_RGB_LEGACY.test(e) || RE_RGBA_LEGACY.test(e) || RE_HSL_LEGACY.test(e) || RE_HSLA_LEGACY.test(e) || e === "transparent", Color.prototype.css = function(e) {
	return rgb2css(this._rgb, e);
};
var css = (...e) => new Color(...e, "css");
//#endregion
//#region node_modules/chroma-js/src/io/gl/index.js
chroma$3.css = css, input_default.format.css = css2rgb, input_default.autodetect.push({
	p: 5,
	test: (e, ...t) => {
		if (!t.length && type_default(e) === "string" && css2rgb.test(e)) return "css";
	}
}), input_default.format.gl = (...e) => {
	let t = unpack_default(e, "rgba");
	return t[0] *= 255, t[1] *= 255, t[2] *= 255, t;
};
var gl = (...e) => new Color(...e, "gl");
//#endregion
//#region node_modules/chroma-js/src/io/hex/index.js
chroma$3.gl = gl, Color.prototype.gl = function() {
	let e = this._rgb;
	return [
		e[0] / 255,
		e[1] / 255,
		e[2] / 255,
		e[3]
	];
}, Color.prototype.hex = function(e) {
	return rgb2hex(this._rgb, e);
};
var hex = (...e) => new Color(...e, "hex");
chroma$3.hex = hex, input_default.format.hex = hex2rgb, input_default.autodetect.push({
	p: 4,
	test: (e, ...t) => {
		if (!t.length && type_default(e) === "string" && [
			3,
			4,
			5,
			6,
			7,
			8,
			9
		].indexOf(e.length) >= 0) return "hex";
	}
});
//#endregion
//#region node_modules/chroma-js/src/io/temp/temperature2rgb.js
var { log } = Math, temperature2rgb = (e) => {
	let t = e / 100, n, r, i;
	return t < 66 ? (n = 255, r = t < 6 ? 0 : -155.25485562709179 - .44596950469579133 * (r = t - 2) + 104.49216199393888 * log(r), i = t < 20 ? 0 : -254.76935184120902 + .8274096064007395 * (i = t - 10) + 115.67994401066147 * log(i)) : (n = 351.97690566805693 + .114206453784165 * (n = t - 55) - 40.25366309332127 * log(n), r = 325.4494125711974 + .07943456536662342 * (r = t - 50) - 28.0852963507957 * log(r), i = 255), [
		n,
		r,
		i,
		1
	];
}, { round } = Math, rgb2temperature = (...e) => {
	let t = unpack_default(e, "rgb"), n = t[0], r = t[2], i = 1e3, a = 4e4, s = .4, c;
	for (; a - i > .4;) {
		c = (a + i) * .5;
		let e = temperature2rgb(c);
		e[2] / e[0] >= r / n ? a = c : i = c;
	}
	return round(c);
};
//#endregion
//#region node_modules/chroma-js/src/io/temp/index.js
Color.prototype.temp = Color.prototype.kelvin = Color.prototype.temperature = function() {
	return rgb2temperature(this._rgb);
};
var temp = (...e) => new Color(...e, "temp");
//#endregion
//#region node_modules/chroma-js/src/io/oklch/index.js
Object.assign(chroma$3, {
	temp,
	kelvin: temp,
	temperature: temp
}), input_default.format.temp = input_default.format.kelvin = input_default.format.temperature = temperature2rgb, Color.prototype.oklch = function() {
	return rgb2oklch(this._rgb);
};
var oklch = (...e) => new Color(...e, "oklch");
//#endregion
//#region node_modules/chroma-js/index.js
Object.assign(chroma$3, { oklch }), input_default.format.oklch = oklch2rgb, input_default.autodetect.push({
	p: 2,
	test: (...e) => {
		if (e = unpack_default(e, "oklch"), type_default(e) === "array" && e.length === 3) return "oklch";
	}
}), Object.assign(chroma$3, {
	analyze,
	average: average_default,
	bezier: bezier_default,
	blend,
	brewer: colorbrewerProxy,
	Color,
	colors: w3cx11,
	contrast: contrast_default,
	contrastAPCA: contrastAPCA_default,
	cubehelix: cubehelix_default,
	deltaE: delta_e_default,
	distance: distance_default,
	input: input_default,
	interpolate: mix_default,
	limits,
	mix: mix_default,
	random: random_default,
	scale: scale_default,
	scales: scales_default,
	valid: valid_default
});
var chroma_js_default = chroma$3, MAX_VERTICES = 3e5 * 2, extrudeGeometry, travelGeometry, travelLine, extrudeLine, printHeadMarker, travelPoints = 0, extrudePoints = 0, currentWidth = 1, currentHeight = 1, gcodeLines = [], travelColours = [
	"#ff43ba",
	"#ffb949",
	"#00d2ff"
], extrudeColours = [
	"#3243e0",
	"#ec0505",
	"#d034c5",
	"#1bace5",
	"#d87306",
	"#f5e323"
];
function normaliseSpeedLog(e) {
	let t = 150, n = 1, r = Math.log10(1), i = Math.log10(150);
	return (Math.log10(Math.max(1, Math.min(150, e))) - r) / (i - r);
}
function createPaletteDataTexture(e, t = 256) {
	let n = new Uint8Array(t * 4);
	for (let r = 0; r < t; r++) {
		let [i, a, s, c] = e(r / (t - 1)).rgba(), l = r * 4;
		n[l] = i, n[l + 1] = a, n[l + 2] = s, n[l + 3] = Math.round(c * 255);
	}
	let r = new DataTexture(n, t, 1, RGBAFormat);
	return r.minFilter = LinearFilter, r.magFilter = LinearFilter, r.wrapS = ClampToEdgeWrapping, r.wrapT = ClampToEdgeWrapping, r.needsUpdate = !0, r;
}
function getGcode() {
	return gcodeLines.join("\n");
}
function resetTravelGeometry() {
	travelGeometry && travelGeometry.dispose(), travelLine && travelLine.material && travelLine.material.dispose(), travelGeometry = new BufferGeometry(), travelGeometry.name = "travel_geom", travelPoints = 0;
	let e = new Float32Array(MAX_VERTICES * 3), t = new Float32Array(MAX_VERTICES * 1);
	travelGeometry.setAttribute("position", new BufferAttribute(e, 3)), travelGeometry.setAttribute("noteValue", new BufferAttribute(t, 1)), travelGeometry.attributes.position.usage = DynamicDrawUsage, travelGeometry.setDrawRange(0, 0);
}
function resetExtrudeGeometry() {
	extrudeGeometry && extrudeGeometry.dispose(), extrudeLine && extrudeLine.material && extrudeLine.material.dispose(), extrudeGeometry = new BufferGeometry(), extrudeGeometry.name = "extrude_geom", extrudePoints = 0;
	let e = new Float32Array(MAX_VERTICES * 3), t = new Float32Array(MAX_VERTICES * 1);
	extrudeGeometry.setAttribute("position", new BufferAttribute(e, 3)), extrudeGeometry.setAttribute("noteValue", new BufferAttribute(t, 1)), extrudeGeometry.attributes.position.usage = DynamicDrawUsage, extrudeGeometry.setDrawRange(0, 0);
}
function resizeGeometries(e, t) {
	if (e <= 0 || t <= 0) {
		console.warn(`Invalid dimensions for geometry resize: ${e}x${t}`);
		return;
	}
	let n = e / currentWidth, r = t / currentHeight;
	if (travelGeometry && travelPoints > 0) {
		let e = travelGeometry.attributes.position;
		for (let t = 0; t < travelPoints; t++) {
			let i = e.getX(t) * n, a = e.getY(t) * r, s = e.getZ(t);
			e.setXYZ(t, i, a, s);
		}
		e.needsUpdate = !0, travelGeometry.computeBoundingSphere();
	}
	if (extrudeGeometry && extrudePoints > 0) {
		let e = extrudeGeometry.attributes.position;
		for (let t = 0; t < extrudePoints; t++) {
			let i = e.getX(t) * n, a = e.getY(t) * r, s = e.getZ(t);
			e.setXYZ(t, i, a, s);
		}
		e.needsUpdate = !0, extrudeGeometry.computeBoundingSphere();
	}
	currentWidth = e, currentHeight = t;
}
function setGeometryDimensions(e, t) {
	currentWidth = e, currentHeight = t;
}
function setTravelLineGlow(e) {
	travelEmissiveIntensity = e, travelLine && travelLine.material && (travelLine.material.emissiveIntensity = e, e > 0 ? travelLine.material.emissive.copy(travelLine.material.color) : travelLine.material.emissive.setHex(0));
}
function setExtrudeLineGlow(e) {
	extrudeEmissiveIntensity = e, extrudeLine && extrudeLine.material && (extrudeLine.material.emissiveIntensity = e, e > 0 ? extrudeLine.material.emissive.copy(extrudeLine.material.color) : extrudeLine.material.emissive.setHex(0));
}
function makeTravelLineSegments({ color: e, opacity: t, emissiveIntensity: n } = {
	color: 15352968,
	opacity: .8,
	emissiveIntensity: 0
}) {
	resetTravelGeometry();
	let r = new ShaderMaterial({
		uniforms: { uPalette: { value: createPaletteDataTexture(chroma_js_default.scale(travelColours).mode("oklch")) } },
		vertexShader: "\n      attribute float noteValue; // Custom attribute per vertex\n      varying float vNoteValue;\n    \n      void main() {\n        vNoteValue = noteValue;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    ",
		fragmentShader: "\n      uniform sampler2D uPalette;\n      varying float vNoteValue;\n    \n      void main() {\n        // Clamp to ensure coordinate stays strictly inside [0.0, 1.0]\n        float u = clamp(vNoteValue, 0.0, 1.0);\n        gl_FragColor = texture2D(uPalette, vec2(u, 0.5));\n      }\n    ",
		transparent: !0,
		opacity: t,
		name: "travel",
		alphaToCoverage: !0,
		emissive: n > 0 ? e : 0,
		emissiveIntensity: n
	});
	return travelLine = new LineSegments(travelGeometry, r), travelLine;
}
function makeExtrudeLineSegments({ color: e, opacity: t, emissiveIntensity: n } = {
	color: 4491498,
	opacity: .7,
	emissiveIntensity: 0
}) {
	resetExtrudeGeometry();
	let r = new ShaderMaterial({
		uniforms: { uPalette: { value: createPaletteDataTexture(chroma_js_default.scale(extrudeColours).mode("oklch")) } },
		vertexShader: "\n      attribute float noteValue; // Custom attribute per vertex\n      varying float vNoteValue;\n    \n      void main() {\n        vNoteValue = noteValue;\n        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n      }\n    ",
		fragmentShader: "\n      uniform sampler2D uPalette;\n      varying float vNoteValue;\n    \n      void main() {\n        float u = clamp(vNoteValue, 0.0, 1.0);\n        gl_FragColor = texture2D(uPalette, vec2(u, 0.5));\n      }\n    ",
		transparent: !0,
		opacity: t,
		name: "extrude",
		alphaToCoverage: !0,
		emissive: n > 0 ? e : 0,
		emissiveIntensity: n
	});
	return extrudeLine = new LineSegments(extrudeGeometry, r), extrudeLine;
}
function updateGeometryWithMoveData(e, t, n) {
	let r = e.attributes.position, i = e.attributes.noteValue;
	r.setXYZ(t, ...n.p1), i.setX(t, normaliseSpeedLog(n.speedStart)), r.setXYZ(t + 1, ...n.p2), i.setX(t + 1, normaliseSpeedLog(n.speedEnd)), e.setDrawRange(0, t + 1), r.needsUpdate = !0, i.needsUpdate = !0, e.computeBoundingSphere();
}
function makePrintHeadMarker({ radius: e, color: t } = {
	radius: 2,
	color: 16777045
}) {
	return printHeadMarker = new Mesh(new SphereGeometry(e, 16, 12), new MeshBasicMaterial({ color: t })), printHeadMarker;
}
async function _runDelay(e) {
	if (Number.isNaN(e)) throw Error(`Bad non-numeric argument to delay for visualiser: ${JSON.stringify(e)}`);
	return e > 0 && await new Promise((t) => setTimeout(t, Math.round(e))), 0;
}
function makePrinterEventHandler({ x: e, y: t, z: n, delay: r, debug: i } = {
	delay: !1,
	debug: !1
}) {
	let a = r, s = i;
	return {
		set delay(e) {
			a = e;
		},
		get delay() {
			return a;
		},
		set debug(e) {
			s = e;
		},
		get debug() {
			return s;
		},
		async printEvent({ type: r, newPosition: i, oldPosition: c, speed: l, moveTime: u, time: d, totalMoveTime: f, layerHeight: p, length: h }) {
			switch (s && console.log(`PRINT EVENT: ${r},
          old: ${JSON.stringify(c)},
          new: ${JSON.stringify(i)},
          speed: ${l},
          moveTime: ${u},
          totalMoveTime: ${f},
          layerHeight: ${p},
          length: ${h}`), r) {
				case "extrude":
					if (!extrudeGeometry) return;
					updateGeometryWithMoveData(extrudeGeometry, extrudePoints, {
						p1: [
							e(c.x),
							t(c.y),
							n(c.z)
						],
						p2: [
							e(i.x),
							t(i.y),
							n(i.z)
						],
						speedStart: l,
						speedEnd: l
					}), extrudePoints += 2, printHeadMarker.position.set(e(i.x), t(i.y), n(i.z));
					break;
				case "travel":
					if (!travelGeometry) return;
					updateGeometryWithMoveData(travelGeometry, travelPoints, {
						p1: [
							e(c.x),
							t(c.y),
							n(c.z)
						],
						p2: [
							e(i.x),
							t(i.y),
							n(i.z)
						],
						speedStart: l,
						speedEnd: l
					}), travelPoints += 2;
					break;
				case "retract":
					s && console.log("RETRACT!");
					break;
				case "unretract":
					s && console.log("UNRETRACT!");
					break;
				default:
			}
			a && (Number.isFinite(a) ? await _runDelay(a) : await _runDelay(u || d));
		},
		errorEvent: (e) => console.error(`LivePrinter Error Event: ${e}`),
		gcodeEvent: async (e) => {
			gcodeLines.push(e);
		}
	};
}
//#endregion
//#region node_modules/liveprinter-core/dist/liveprinter.js
var G = Object.defineProperty, V = (e, t, n) => t in e ? G(e, t, {
	enumerable: !0,
	configurable: !0,
	writable: !0,
	value: n
}) : e[t] = n, L = (e, t, n) => V(e, typeof t == "symbol" ? t : t + "", n), Logger = class {
	static debug(e) {}
	static info(e) {}
	static warning(e) {}
	static error(e) {
		console.error(e);
	}
};
L(Logger, "LOG_LEVEL", {
	error: 0,
	warning: 1,
	info: 2,
	debug: 3
}), L(Logger, "level", 0);
var Vector = class e {
	constructor(t) {
		if (this.axes = {}, arguments.length > 1) this.axes.x = arguments[0], this.axes.y = arguments[1], arguments.length > 2 && (this.axes.z = arguments[2]), arguments.length > 3 && (this.axes.e = arguments[3]);
		else if (t !== void 0) {
			if (t instanceof e) for (let e in t.axes) this.axes[e] = t.axes[e];
			else if (t instanceof Object) for (let e in t) this.axes[e] = t[e];
		} else this.axes.x = 0, this.axes.y = 0, this.axes.z = 0;
	}
	subSelf(e) {
		try {
			for (let t in e.axes) this.axes[t] = this.axes[t] - e.axes[t];
		} catch (e) {
			throw e;
		}
		return this;
	}
	addSelf(e) {
		try {
			for (let t in e.axes) this.axes[t] = this.axes[t] + e[t];
		} catch (e) {
			throw e;
		}
		return this;
	}
	magSq() {
		let e = 0;
		for (let t in this.axes) e += this.axes[t] * this.axes[t];
		return e;
	}
	mag() {
		return Math.sqrt(this.magSq());
	}
	distSelf(t) {
		return e.sub(this, t).mag();
	}
	static dist(t, n) {
		return e.sub(t, n).mag();
	}
	divSelf(e) {
		for (let t in this.axes) this.axes[t] /= e;
		return this;
	}
	multSelf(e) {
		for (let t in this.axes) this.axes[t] *= e;
		return this;
	}
	set(t) {
		if (t !== void 0) {
			if (t instanceof e) for (let e in t.axes) this.axes[e] = t.axes[e];
			else if (t instanceof Object) for (let e in t) this.axes[e] = t[e];
		}
		return this;
	}
	static add(t, n) {
		let r = new e();
		try {
			for (let e in t.axes) r.axes[e] = t.axes[e] + n.axes[e];
		} catch (e) {
			throw e;
		}
		return r;
	}
	static div(t, n) {
		let r = new e();
		try {
			for (let e in t.axes) r.axes[e] = t.axes[e] / n;
		} catch (e) {
			throw e;
		}
		return r;
	}
	static sub(t, n) {
		let r = new e();
		try {
			for (let e in t.axes) r.axes[e] = t.axes[e] - n.axes[e];
		} catch (e) {
			throw e;
		}
		return r;
	}
	static mult(t, n) {
		let r = new e();
		if (typeof n == "object") try {
			for (let e in t.axes) r.axes[e] = t.axes[e] * n.axes[e];
		} catch (e) {
			throw e;
		}
		else if (typeof n == "number") try {
			for (let e in t.axes) r.axes[e] = t.axes[e] * n;
		} catch (e) {
			throw e;
		}
		return r;
	}
	static dot(e, t) {
		return e.axes.x * t.axes.x + e.axes.y * t.axes.y + (e.axes.z || 0) * (t.axes.z || 0);
	}
	static cross(t, n) {
		let r = t.axes.y * (n.axes.z || 0) - (t.axes.z || 0) * n.axes.y, i = (t.axes.z || 0) * n.axes.x - t.axes.x * (n.axes.z || 0), a = t.axes.x * n.axes.y - t.axes.y * n.axes.x;
		return new e(r, i, a);
	}
	static angleBetween(t, n) {
		let r = e.dot(t, n) / (t.mag() * n.mag()), i;
		return i = Math.acos(Math.min(1, Math.max(-1, r))), i *= Math.sign(e.cross(t, n).axes.z || 1), i;
	}
};
String.prototype.reverse = function() {
	let e = this.replace(/([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g, function(e, t, n) {
		return n.reverse() + t;
	}).replace(/([\uD800-\uDBFF])([\uDC00-\uDFFF])/g, "$2$1"), t = "", n = e.length;
	for (; n--;) t += e.charAt(n);
	return t;
};
var NAMES = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" "), names = function(e) {
	return typeof e == "string" ? NAMES.filter(function(t) {
		var n = t[1] || " ";
		return e.indexOf(n) !== -1;
	}) : NAMES.slice();
};
names(" #"), names(" b");
var REGEX$2 = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenize$1(e) {
	typeof e != "string" && (e = "");
	var t = REGEX$2.exec(e);
	return [
		t[1].toUpperCase(),
		t[2].replace(/x/g, "##"),
		t[3],
		t[4]
	];
}
var NO_NOTE = Object.freeze({
	pc: null,
	name: null,
	step: null,
	alt: null,
	oct: null,
	octStr: null,
	chroma: null,
	midi: null,
	freq: null
}), SEMI = [
	0,
	2,
	4,
	5,
	7,
	9,
	11
], properties$1 = function(e) {
	var t = tokenize$1(e);
	if (t[0] === "" || t[3] !== "") return NO_NOTE;
	var n = t[0], r = t[1], i = t[2], a = {
		letter: n,
		acc: r,
		octStr: i,
		pc: n + r,
		name: n + r + i,
		step: (n.charCodeAt(0) + 3) % 7,
		alt: r[0] === "b" ? -r.length : r.length,
		oct: i.length ? +i : null,
		chroma: 0,
		midi: null,
		freq: null
	};
	return a.chroma = (SEMI[a.step] + a.alt + 120) % 12, a.midi = a.oct === null ? null : SEMI[a.step] + a.alt + 12 * (a.oct + 1), a.freq = midiToFreq(a.midi), Object.freeze(a);
}, memo = function(e, t) {
	return t === void 0 && (t = {}), function(n) {
		return t[n] || (t[n] = e(n));
	};
}, props$1 = memo(properties$1), isMidiRange = function(e) {
	return e >= 0 && e <= 127;
}, midi = function(e) {
	if (typeof e != "number" && typeof e != "string") return null;
	var t = props$1(e).midi, n = t || t === 0 ? t : +e;
	return isMidiRange(n) ? n : null;
}, midiToFreq = function(e, t) {
	return t === void 0 && (t = 440), typeof e == "number" ? 2 ** ((e - 69) / 12) * t : null;
}, chroma$2 = function(e) {
	return props$1(e).chroma;
}, IVL_TNL = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})", IVL_STR = "(AA|A|P|M|m|d|dd)([-+]?\\d+)", REGEX$1 = RegExp("^" + IVL_TNL + "|" + IVL_STR + "$"), SIZES = [
	0,
	2,
	4,
	5,
	7,
	9,
	11
], TYPES = "PMMPPMM", tokenize = function(e) {
	var t = REGEX$1.exec("" + e);
	return t === null ? null : t[1] ? [t[1], t[2]] : [t[4], t[3]];
}, NO_IVL = Object.freeze({
	name: null,
	num: null,
	q: null,
	step: null,
	alt: null,
	dir: null,
	type: null,
	simple: null,
	semitones: null,
	chroma: null,
	oct: null
}), qToAlt = function(e, t) {
	return t === "M" && e === "M" || t === "P" && e === "P" ? 0 : t === "m" && e === "M" ? -1 : /^A+$/.test(t) ? t.length : /^d+$/.test(t) ? e === "P" ? -t.length : -t.length - 1 : null;
}, numToStep = function(e) {
	return (Math.abs(e) - 1) % 7;
}, properties = function(e) {
	var t = tokenize(e);
	if (t === null) return NO_IVL;
	var n = {
		num: 0,
		q: "d",
		name: "",
		type: "M",
		step: 0,
		dir: -1,
		simple: 1,
		alt: 0,
		oct: 0,
		semitones: 0,
		chroma: 0,
		ic: 0
	};
	return n.num = +t[0], n.q = t[1], n.step = numToStep(n.num), n.type = TYPES[n.step], n.type === "M" && n.q === "P" ? NO_IVL : (n.name = "" + n.num + n.q, n.dir = n.num < 0 ? -1 : 1, n.simple = n.num === 8 || n.num === -8 ? n.num : n.dir * (n.step + 1), n.alt = qToAlt(n.type, n.q), n.oct = Math.floor((Math.abs(n.num) - 1) / 7), n.semitones = n.dir * (SIZES[n.step] + n.alt + 12 * n.oct), n.chroma = (n.dir * (SIZES[n.step] + n.alt) % 12 + 12) % 12, Object.freeze(n));
}, cache = {};
function props(e) {
	return typeof e == "string" ? cache[e] || (cache[e] = properties(e)) : NO_IVL;
}
var chroma$1 = function(e) {
	return props(e).chroma;
}, chromatic = ["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"], lydian = ["1P 2M 3M 4A 5P 6M 7M"], major = ["1P 2M 3M 4P 5P 6M 7M", ["ionian"]], mixolydian = ["1P 2M 3M 4P 5P 6M 7m", ["dominant"]], dorian = ["1P 2M 3m 4P 5P 6M 7m"], aeolian = ["1P 2M 3m 4P 5P 6m 7m", ["minor"]], phrygian = ["1P 2m 3m 4P 5P 6m 7m"], locrian = ["1P 2m 3m 4P 5d 6m 7m"], altered = ["1P 2m 3m 3M 5d 6m 7m", [
	"super locrian",
	"diminished whole tone",
	"pomeroy"
]], diminished = ["1P 2M 3m 4P 5d 6m 6M 7M", ["whole-half diminished"]], iwato = ["1P 2m 4P 5d 7m"], hirajoshi = ["1P 2M 3m 5P 6m"], kumoijoshi = ["1P 2m 4P 5P 6m"], pelog = ["1P 2m 3m 5P 6m"], prometheus = ["1P 2M 3M 4A 6M 7m"], ritusen = ["1P 2M 4P 5P 6M"], scriabin = ["1P 2m 3M 5P 6M"], piongio = ["1P 2M 4P 5P 6M 7m"], augmented = ["1P 2A 3M 5P 5A 7M"], neopolitan = ["1P 2m 3m 4P 5P 6m 7M"], egyptian = ["1P 2M 4P 5P 7m"], oriental = ["1P 2m 3M 4P 5d 6M 7m"], flamenco = ["1P 2m 3m 3M 4A 5P 7m"], balinese = ["1P 2m 3m 4P 5P 6m 7M"], persian = ["1P 2m 3M 4P 5d 6m 7M"], bebop = ["1P 2M 3M 4P 5P 6M 7m 7M"], enigmatic = ["1P 2m 3M 5d 6m 7m 7M"], ichikosucho = ["1P 2M 3M 4P 5d 5P 6M 7M"], sdata = {
	chromatic,
	lydian,
	major,
	mixolydian,
	dorian,
	aeolian,
	phrygian,
	locrian,
	"melodic minor": ["1P 2M 3m 4P 5P 6M 7M"],
	"melodic minor second mode": ["1P 2m 3m 4P 5P 6M 7m"],
	"lydian augmented": ["1P 2M 3M 4A 5A 6M 7M"],
	"lydian dominant": ["1P 2M 3M 4A 5P 6M 7m", ["lydian b7"]],
	"melodic minor fifth mode": ["1P 2M 3M 4P 5P 6m 7m", ["hindu", "mixolydian b6M"]],
	"locrian #2": ["1P 2M 3m 4P 5d 6m 7m", ["half-diminished"]],
	altered,
	"harmonic minor": ["1P 2M 3m 4P 5P 6m 7M"],
	"phrygian dominant": ["1P 2m 3M 4P 5P 6m 7m", ["spanish", "phrygian major"]],
	"half-whole diminished": ["1P 2m 3m 3M 4A 5P 6M 7m", ["dominant diminished"]],
	diminished,
	"major pentatonic": ["1P 2M 3M 5P 6M", ["pentatonic"]],
	"lydian pentatonic": ["1P 3M 4A 5P 7M", ["chinese"]],
	"mixolydian pentatonic": ["1P 3M 4P 5P 7m", ["indian"]],
	"locrian pentatonic": ["1P 3m 4P 5d 7m", ["minor seven flat five pentatonic"]],
	"minor pentatonic": ["1P 3m 4P 5P 7m"],
	"minor six pentatonic": ["1P 3m 4P 5P 6M"],
	"minor hexatonic": ["1P 2M 3m 4P 5P 7M"],
	"flat three pentatonic": ["1P 2M 3m 5P 6M", ["kumoi"]],
	"flat six pentatonic": ["1P 2M 3M 5P 6m"],
	"major flat two pentatonic": ["1P 2m 3M 5P 6M"],
	"whole tone pentatonic": ["1P 3M 5d 6m 7m"],
	"ionian pentatonic": ["1P 3M 4P 5P 7M"],
	"lydian #5P pentatonic": ["1P 3M 4A 5A 7M"],
	"lydian dominant pentatonic": ["1P 3M 4A 5P 7m"],
	"minor #7M pentatonic": ["1P 3m 4P 5P 7M"],
	"super locrian pentatonic": ["1P 3m 4d 5d 7m"],
	"in-sen": ["1P 2m 4P 5P 7m"],
	iwato,
	hirajoshi,
	kumoijoshi,
	pelog,
	"vietnamese 1": ["1P 3m 4P 5P 6m"],
	"vietnamese 2": ["1P 3m 4P 5P 7m"],
	prometheus,
	"prometheus neopolitan": ["1P 2m 3M 4A 6M 7m"],
	ritusen,
	scriabin,
	piongio,
	"major blues": ["1P 2M 3m 3M 5P 6M"],
	"minor blues": ["1P 3m 4P 5d 5P 7m", ["blues"]],
	"composite blues": ["1P 2M 3m 3M 4P 5d 5P 6M 7m"],
	augmented,
	"augmented heptatonic": ["1P 2A 3M 4P 5P 5A 7M"],
	"dorian #4": ["1P 2M 3m 4A 5P 6M 7m"],
	"lydian diminished": ["1P 2M 3m 4A 5P 6M 7M"],
	"whole tone": ["1P 2M 3M 4A 5A 7m"],
	"leading whole tone": ["1P 2M 3M 4A 5A 7m 7M"],
	"lydian minor": ["1P 2M 3M 4A 5P 6m 7m"],
	"locrian major": ["1P 2M 3M 4P 5d 6m 7m", ["arabian"]],
	neopolitan,
	"neopolitan minor": ["1P 2m 3m 4P 5P 6m 7M"],
	"neopolitan major": ["1P 2m 3m 4P 5P 6M 7M", ["dorian b2"]],
	"neopolitan major pentatonic": ["1P 3M 4P 5d 7m"],
	"romanian minor": ["1P 2M 3m 5d 5P 6M 7m"],
	"double harmonic lydian": ["1P 2m 3M 4A 5P 6m 7M"],
	"harmonic major": ["1P 2M 3M 4P 5P 6m 7M"],
	"double harmonic major": ["1P 2m 3M 4P 5P 6m 7M", ["gypsy"]],
	egyptian,
	"hungarian minor": ["1P 2M 3m 4A 5P 6m 7M"],
	"hungarian major": ["1P 2A 3M 4A 5P 6M 7m"],
	oriental,
	"spanish heptatonic": ["1P 2m 3m 3M 4P 5P 6m 7m"],
	flamenco,
	balinese,
	"todi raga": ["1P 2m 3m 4A 5P 6m 7M"],
	"malkos raga": ["1P 3m 4P 6m 7m"],
	"kafi raga": ["1P 3m 3M 4P 5P 6M 7m 7M"],
	"purvi raga": ["1P 2m 3M 4P 4A 5P 6m 7M"],
	persian,
	bebop,
	"bebop dominant": ["1P 2M 3M 4P 5P 6M 7m 7M"],
	"bebop minor": ["1P 2M 3m 3M 4P 5P 6M 7m"],
	"bebop major": ["1P 2M 3M 4P 5P 5A 6M 7M"],
	"bebop locrian": ["1P 2m 3m 4P 5d 5P 6m 7m"],
	"minor bebop": ["1P 2M 3m 4P 5P 6m 7m 7M"],
	"mystery #1": ["1P 2m 3M 5d 6m 7m"],
	enigmatic,
	"minor six diminished": ["1P 2M 3m 4P 5P 6m 6M 7M"],
	"ionian augmented": ["1P 2M 3M 4P 5A 6M 7M"],
	"lydian #9": ["1P 2m 3M 4A 5P 6M 7M"],
	ichikosucho,
	"six tone symmetric": ["1P 2m 3M 4P 5A 6M"]
}, M = ["1P 3M 5P", ["Major", ""]], M13 = ["1P 3M 5P 7M 9M 13M", ["maj13", "Maj13"]], M6 = ["1P 3M 5P 13M", ["6"]], M69 = ["1P 3M 5P 6M 9M", ["69"]], M7add13 = ["1P 3M 5P 6M 7M 9M"], M7b5 = ["1P 3M 5d 7M"], M7b6 = ["1P 3M 6m 7M"], M7b9 = ["1P 3M 5P 7M 9m"], M7sus4 = ["1P 4P 5P 7M"], M9 = ["1P 3M 5P 7M 9M", ["maj9", "Maj9"]], M9b5 = ["1P 3M 5d 7M 9M"], M9sus4 = ["1P 4P 5P 7M 9M"], Madd9 = ["1P 3M 5P 9M", [
	"2",
	"add9",
	"add2"
]], Maj7 = ["1P 3M 5P 7M", ["maj7", "M7"]], Mb5 = ["1P 3M 5d"], Mb6 = ["1P 3M 13m"], Msus2 = ["1P 2M 5P", ["add9no3", "sus2"]], Msus4 = ["1P 4P 5P", ["sus", "sus4"]], Maddb9 = ["1P 3M 5P 9m"], m = ["1P 3m 5P"], m11 = ["1P 3m 5P 7m 9M 11P", ["_11"]], m11b5 = ["1P 3m 7m 12d 2M 4P", ["h11", "_11b5"]], m13 = ["1P 3m 5P 7m 9M 11P 13M", ["_13"]], m6 = ["1P 3m 4P 5P 13M", ["_6"]], m69 = ["1P 3m 5P 6M 9M", ["_69"]], m7 = ["1P 3m 5P 7m", [
	"minor7",
	"_",
	"_7"
]], m7add11 = ["1P 3m 5P 7m 11P", ["m7add4"]], m7b5 = ["1P 3m 5d 7m", [
	"half-diminished",
	"h7",
	"_7b5"
]], m9 = ["1P 3m 5P 7m 9M", ["_9"]], m9b5 = ["1P 3m 7m 12d 2M", ["h9", "-9b5"]], mMaj7 = ["1P 3m 5P 7M", ["mM7", "_M7"]], mMaj7b6 = ["1P 3m 5P 6m 7M", ["mM7b6"]], mM9 = ["1P 3m 5P 7M 9M", ["mMaj9", "-M9"]], mM9b6 = ["1P 3m 5P 6m 7M 9M", ["mMaj9b6"]], mb6M7 = ["1P 3m 6m 7M"], mb6b9 = ["1P 3m 6m 9m"], o$1 = ["1P 3m 5d", ["mb5", "dim"]], o7 = ["1P 3m 5d 13M", [
	"diminished",
	"m6b5",
	"dim7"
]], o7M7 = ["1P 3m 5d 6M 7M"], oM7 = ["1P 3m 5d 7M"], sus24 = ["1P 2M 4P 5P", ["sus4add9"]], madd4 = ["1P 3m 4P 5P"], madd9 = ["1P 3m 5P 9M"], cdata = {
	4: ["1P 4P 7m 10m", ["quartal"]],
	5: ["1P 5P"],
	7: ["1P 3M 5P 7m", ["Dominant", "Dom"]],
	9: ["1P 3M 5P 7m 9M", ["79"]],
	11: ["1P 5P 7m 9M 11P"],
	13: ["1P 3M 5P 7m 9M 13M", ["13_"]],
	64: ["5P 8P 10M"],
	M,
	"M#5": ["1P 3M 5A", [
		"augmented",
		"maj#5",
		"Maj#5",
		"+",
		"aug"
	]],
	"M#5add9": ["1P 3M 5A 9M", ["+add9"]],
	M13,
	"M13#11": ["1P 3M 5P 7M 9M 11A 13M", [
		"maj13#11",
		"Maj13#11",
		"M13+4",
		"M13#4"
	]],
	M6,
	"M6#11": ["1P 3M 5P 6M 11A", [
		"M6b5",
		"6#11",
		"6b5"
	]],
	M69,
	"M69#11": ["1P 3M 5P 6M 9M 11A"],
	"M7#11": ["1P 3M 5P 7M 11A", [
		"maj7#11",
		"Maj7#11",
		"M7+4",
		"M7#4"
	]],
	"M7#5": ["1P 3M 5A 7M", [
		"maj7#5",
		"Maj7#5",
		"maj9#5",
		"M7+"
	]],
	"M7#5sus4": ["1P 4P 5A 7M"],
	"M7#9#11": ["1P 3M 5P 7M 9A 11A"],
	M7add13,
	M7b5,
	M7b6,
	M7b9,
	M7sus4,
	M9,
	"M9#11": ["1P 3M 5P 7M 9M 11A", [
		"maj9#11",
		"Maj9#11",
		"M9+4",
		"M9#4"
	]],
	"M9#5": ["1P 3M 5A 7M 9M", ["Maj9#5"]],
	"M9#5sus4": ["1P 4P 5A 7M 9M"],
	M9b5,
	M9sus4,
	Madd9,
	Maj7,
	Mb5,
	Mb6,
	Msus2,
	Msus4,
	Maddb9,
	"11b9": ["1P 5P 7m 9m 11P"],
	"13#11": ["1P 3M 5P 7m 9M 11A 13M", ["13+4", "13#4"]],
	"13#9": ["1P 3M 5P 7m 9A 13M", ["13#9_"]],
	"13#9#11": ["1P 3M 5P 7m 9A 11A 13M"],
	"13b5": ["1P 3M 5d 6M 7m 9M"],
	"13b9": ["1P 3M 5P 7m 9m 13M"],
	"13b9#11": ["1P 3M 5P 7m 9m 11A 13M"],
	"13no5": ["1P 3M 7m 9M 13M"],
	"13sus4": ["1P 4P 5P 7m 9M 13M", ["13sus"]],
	"69#11": ["1P 3M 5P 6M 9M 11A"],
	"7#11": ["1P 3M 5P 7m 11A", [
		"7+4",
		"7#4",
		"7#11_",
		"7#4_"
	]],
	"7#11b13": ["1P 3M 5P 7m 11A 13m", ["7b5b13"]],
	"7#5": ["1P 3M 5A 7m", [
		"+7",
		"7aug",
		"aug7"
	]],
	"7#5#9": ["1P 3M 5A 7m 9A", [
		"7alt",
		"7#5#9_",
		"7#9b13_"
	]],
	"7#5b9": ["1P 3M 5A 7m 9m"],
	"7#5b9#11": ["1P 3M 5A 7m 9m 11A"],
	"7#5sus4": ["1P 4P 5A 7m"],
	"7#9": ["1P 3M 5P 7m 9A", ["7#9_"]],
	"7#9#11": ["1P 3M 5P 7m 9A 11A", ["7b5#9"]],
	"7#9#11b13": ["1P 3M 5P 7m 9A 11A 13m"],
	"7#9b13": ["1P 3M 5P 7m 9A 13m"],
	"7add6": ["1P 3M 5P 7m 13M", ["67", "7add13"]],
	"7b13": ["1P 3M 7m 13m"],
	"7b5": ["1P 3M 5d 7m"],
	"7b6": ["1P 3M 5P 6m 7m"],
	"7b9": ["1P 3M 5P 7m 9m"],
	"7b9#11": ["1P 3M 5P 7m 9m 11A", ["7b5b9"]],
	"7b9#9": ["1P 3M 5P 7m 9m 9A"],
	"7b9b13": ["1P 3M 5P 7m 9m 13m"],
	"7b9b13#11": ["1P 3M 5P 7m 9m 11A 13m", ["7b9#11b13", "7b5b9b13"]],
	"7no5": ["1P 3M 7m"],
	"7sus4": ["1P 4P 5P 7m", ["7sus"]],
	"7sus4b9": ["1P 4P 5P 7m 9m", [
		"susb9",
		"7susb9",
		"7b9sus",
		"7b9sus4",
		"phryg"
	]],
	"7sus4b9b13": ["1P 4P 5P 7m 9m 13m", ["7b9b13sus4"]],
	"9#11": ["1P 3M 5P 7m 9M 11A", [
		"9+4",
		"9#4",
		"9#11_",
		"9#4_"
	]],
	"9#11b13": ["1P 3M 5P 7m 9M 11A 13m", ["9b5b13"]],
	"9#5": ["1P 3M 5A 7m 9M", ["9+"]],
	"9#5#11": ["1P 3M 5A 7m 9M 11A"],
	"9b13": ["1P 3M 7m 9M 13m"],
	"9b5": ["1P 3M 5d 7m 9M"],
	"9no5": ["1P 3M 7m 9M"],
	"9sus4": ["1P 4P 5P 7m 9M", ["9sus"]],
	m,
	"m#5": ["1P 3m 5A", ["m+", "mb6"]],
	m11,
	"m11A 5": ["1P 3m 6m 7m 9M 11P"],
	m11b5,
	m13,
	m6,
	m69,
	m7,
	"m7#5": ["1P 3m 6m 7m"],
	m7add11,
	m7b5,
	m9,
	"m9#5": ["1P 3m 6m 7m 9M"],
	m9b5,
	mMaj7,
	mMaj7b6,
	mM9,
	mM9b6,
	mb6M7,
	mb6b9,
	o: o$1,
	o7,
	o7M7,
	oM7,
	sus24,
	"+add#9": ["1P 3M 5A 9A"],
	madd4,
	madd9
}, chr = function(e) {
	return chroma$2(e) || chroma$1(e) || 0;
};
function chroma(e) {
	if (isChroma(e)) return e;
	if (!Array.isArray(e)) return "";
	var t = [
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	];
	return e.map(chr).forEach(function(e) {
		t[e] = 1;
	}), t.join("");
}
var REGEX = /^[01]{12}$/;
function isChroma(e) {
	return REGEX.test(e);
}
var dictionary = function(e) {
	var t = Object.keys(e).sort(), n = [], r = [], i = function(e, t, i) {
		n[e] = t, r[i] = r[i] || [], r[i].push(e);
	};
	t.forEach(function(t) {
		var n = e[t][0].split(" "), r = e[t][1], a = chroma(n);
		i(t, n, a), r && r.forEach(function(e) {
			return i(e, n, a);
		});
	});
	var a = Object.keys(n).sort(), s = function(e) {
		return n[e];
	};
	return s.names = function(e) {
		return typeof e == "string" ? (r[e] || []).slice() : (e === !0 ? a : t).slice();
	}, s;
}, scale = dictionary(sdata), chord = dictionary(cdata);
scale.names, chord.names;
var GCODE_HEADER = {
	UM2: [
		";FLAVOR:UltiGCode",
		";TIME:1",
		";MATERIAL:1"
	],
	UM2plus: [
		";FLAVOR:UltiGCode",
		";TIME:1",
		";MATERIAL:1"
	],
	UM3: [
		";START_OF_HEADER",
		";HEADER_VERSION:0.1",
		";FLAVOR:Griffin",
		";GENERATOR.NAME:GCodeGenJS",
		";GENERATOR.VERSION:?",
		";GENERATOR.BUILD_DATE:2016-11-26",
		";TARGET_MACHINE.NAME:Ultimaker Jedi",
		";EXTRUDER_TRAIN.0.INITIAL_TEMPERATURE:200",
		";EXTRUDER_TRAIN.0.MATERIAL.VOLUME_USED:1",
		";EXTRUDER_TRAIN.0.NOZZLE.DIAMETER:0.4",
		";BUILD_PLATE.INITIAL_TEMPERATURE:0",
		";PRINT.TIME:1",
		";PRINT.SIZE.MIN.X:0",
		";PRINT.SIZE.MIN.Y:0",
		";PRINT.SIZE.MIN.Z:0",
		";PRINT.SIZE.MAX.X:215",
		";PRINT.SIZE.MAX.Y:215",
		";PRINT.SIZE.MAX.Z:200",
		";END_OF_HEADER",
		"G92 E0"
	],
	REPRAP: [
		";RepRap target",
		"G28",
		"G92 E0"
	]
}, MAX_SPEED = {
	UM2plus: {
		maxPrint: {
			x: 300,
			y: 300,
			z: 80,
			e: 45
		},
		maxTravel: {
			x: 250,
			y: 250,
			z: 150,
			e: 45
		}
	},
	UM2: {
		maxPrint: {
			x: 300,
			y: 300,
			z: 80,
			e: 45
		},
		maxTravel: {
			x: 250,
			y: 250,
			z: 150,
			e: 45
		}
	},
	UM3: {
		maxPrint: {
			x: 300,
			y: 300,
			z: 80,
			e: 45
		},
		maxTravel: {
			x: 250,
			y: 250,
			z: 150,
			e: 45
		}
	},
	REPRAP: {
		maxTravel: {
			x: 300,
			y: 300,
			z: 80,
			e: 45
		},
		maxPrint: {
			x: 250,
			y: 250,
			z: 150,
			e: 45
		}
	}
}, BED_SIZE = {
	UM3: {
		x: 223,
		y: 223,
		z: 305
	},
	UM2: {
		x: 223,
		y: 223,
		z: 205
	},
	UM2plus: {
		x: 223,
		y: 223,
		z: 305
	},
	REPRAP: {
		x: 150,
		y: 150,
		z: 80
	}
}, SPEED_SCALE = {
	UM3: {
		x: 47.069852,
		y: 47.069852,
		z: 160
	},
	UM2: {
		x: 47.069852,
		y: 47.069852,
		z: 160
	},
	UM2plus: {
		x: 47.069852,
		y: 47.069852,
		z: 160
	},
	REPRAP: {
		x: 47.069852,
		y: 47.069852,
		z: 160
	}
}, FilamentDiameter = {
	UM3: 2.85,
	UM2: 2.85,
	UM2plus: 2.85,
	REPRAP: 1.75
}, ExtrusionInmm3 = {
	UM3: !1,
	UM2: !1,
	UM2plus: !0,
	REPRAP: !1
}, MinLayerHeight = .05, MIN_INTERVAL = 5.357, TimeRegex = /^(\d+|\d+\.\d+|\d+\/\d+|\d+\s+\d+\/\d+)(s|ms|b)/i, DimensionRegex = /(\d+|\d+\.\d+|\d+\/\d+)(cm|mm|in)/i, LivePrinter = class {
	constructor(e = "UM2plus") {
		this.ext = this.extrude, this.ext2 = this.extrudeto, this.mov = this.move, this.mov2 = this.moveto, this.tur = this.turn, this.tur2 = this.turnto, this.ret = this.retract, this.unret = this.unretract, this.gcodeListeners = [], this.printListeners = [], this.errorListeners = [], this.opListeners = [], this._layerHeight = .2, this.lastSpeed = -1, this._heading = 0, this._elevation = 0, this._distance = 0, this._waitTime = 0, this._autoRetract = !0, this._bpm = 120, this._intervalTime = this.parseAsTime("1/4b"), this._stopped = !1, this._bail = !1, this._pauseTime = 0, this.totalMoveTime = 0, this.maxFilamentPerOperation = 30, this.minFilamentPerOperation = 2e-4, this.maxTimePerOperation = 6e4, this.currentRetraction = 0, this.retractLength = 8.5, this._retractSpeed = 1800, this.firmwareRetract = !1, this.extraUnretract = 0, this.unretractZHop = 0, this.boundaryMode = "stop", this.maxMovePerCycle = 200, this.setProperties(e);
	}
	setProperties(e) {
		this._model = e, this._maxTravelSpeed = MAX_SPEED[e].maxTravel, this._maxPrintSpeed = MAX_SPEED[e].maxPrint, this._travelSpeed = this._maxTravelSpeed.x, this._printSpeed = this._maxPrintSpeed.x / 3, this._speedScale = SPEED_SCALE[e], this._bedSize = BED_SIZE[e], this._extrusionInmm3 = ExtrusionInmm3[e], this._filamentDiameter = FilamentDiameter[e], this.minPosition = new Vector({
			x: 0,
			y: 0,
			z: 0,
			e: -99999
		}), this.maxPosition = new Vector({
			x: this._bedSize.x,
			y: this._bedSize.y,
			z: this._bedSize.z,
			e: 999999
		}), this.position = new Vector({
			x: this.minPosition.axes.x,
			y: this.minPosition.axes.y,
			z: this.minPosition.axes.z,
			e: 0
		});
	}
	stop(e = !0) {
		this._stopped = e;
	}
	async gcodeEvent(e) {
		await Promise.all(this.gcodeListeners.map(async (t) => t.gcodeEvent(e)));
	}
	async gcode(e) {
		return this.gcodeEvent(e);
	}
	async printEvent(e) {
		await Promise.all(this.printListeners.map(async (t) => t.printEvent(e))), Logger.debug(`Print event: ${JSON.stringify(e, null, 2)}`);
	}
	async errorEvent(e) {
		await Promise.all(this.errorListeners.map(async (t) => t.errorEvent(e)));
	}
	addGCodeListener(e) {
		this.gcodeListeners.includes(e) || this.gcodeListeners.push(e);
	}
	addPrintListener(e) {
		this.printListeners.includes(e) || this.printListeners.push(e);
	}
	addErrorListener(e) {
		this.errorListeners.includes(e) || this.errorListeners.push(e);
	}
	removeGCodeListener(e) {
		this.gcodeListeners = this.gcodeListeners.filter((t) => t != e);
	}
	removePrintListener(e) {
		this.printListeners = this.printListeners.filter((t) => t != e);
	}
	removeErrorListener(e) {
		this.errorListeners = this.errorListeners.filter((t) => t != e);
	}
	get x() {
		return this.position.axes.x;
	}
	get y() {
		return this.position.axes.y;
	}
	get z() {
		return this.position.axes.z;
	}
	get e() {
		return this.position.axes.e;
	}
	set x(e) {
		this.position.axes.x = e;
	}
	set y(e) {
		this.position.axes.y = e;
	}
	set z(e) {
		this.position.axes.z = e;
	}
	set e(e) {
		this.position.axes.e = e;
	}
	get time() {
		return this.totalMoveTime;
	}
	set optime(e) {
		this.maxTimePerOperation = e;
	}
	get optime() {
		return this.maxTimePerOperation;
	}
	set model(e) {
		this.setProperties(e);
	}
	get model() {
		return this._model;
	}
	printspeed(e) {
		if (e !== void 0) {
			let t = this.parseAsNote(e), n = this._maxPrintSpeed;
			this._printSpeed = Math.min(t, parseFloat(n.x));
		}
		return this._printSpeed;
	}
	psp(e) {
		return this.printspeed(e);
	}
	drawspeed(e) {
		return this.printspeed(e);
	}
	dsp(e) {
		return this.printspeed(e);
	}
	travelspeed(e) {
		if (e !== void 0) {
			let t = this.parseAsNote(e), n = this._maxTravelSpeed;
			this._travelSpeed = Math.min(t, parseFloat(n.x));
		}
		return this._travelSpeed;
	}
	tsp(e) {
		return this.travelspeed(e);
	}
	speed(e) {
		return this.printspeed(this.travelspeed(e));
	}
	get maxspeed() {
		return this._maxPrintSpeed.x;
	}
	get extents() {
		return this.maxPosition.axes;
	}
	autoretract(e = !0) {
		return e ? this._autoRetract = e : this._autoRetract = !1, this._autoRetract;
	}
	get cx() {
		return this.minx + (this.maxx - this.minx) / 2;
	}
	get cy() {
		return this.miny + (this.maxy - this.miny) / 2;
	}
	get minx() {
		return this.minPosition.axes.x;
	}
	get miny() {
		return this.minPosition.axes.y;
	}
	get minz() {
		return this.minPosition.axes.z;
	}
	set minx(e) {
		this.minPosition.axes.x = e;
	}
	set miny(e) {
		this.minPosition.axes.y = e;
	}
	set minz(e) {
		this.minPosition.axes.z = e;
	}
	get maxx() {
		return this.maxPosition.axes.x;
	}
	get maxy() {
		return this.maxPosition.axes.y;
	}
	get maxz() {
		return this.maxPosition.axes.z;
	}
	set maxx(e) {
		this.maxPosition.axes.x = e;
	}
	set maxy(e) {
		this.maxPosition.axes.y = e;
	}
	set maxz(e) {
		this.maxPosition.axes.z = e;
	}
	get angle() {
		return this.r2d(this._heading);
	}
	set angle(e) {
		this._heading = this.d2r(e);
	}
	get angler() {
		return this._heading;
	}
	set angler(e) {
		this._heading = e;
	}
	bpm(e = this._bpm) {
		let t = this._bpm;
		return this._bpm = e, this._intervalTime = this._intervalTime * t / this._bpm, this._bpm;
	}
	bps(e) {
		return this._bpm = e * 60, this._bpm;
	}
	interval(e) {
		if (this._intervalTime = this.parseAsTime(e), this._intervalTime < MIN_INTERVAL) throw this._intervalTime = MIN_INTERVAL, /* @__PURE__ */ Error(`Error setting interval() time, too short: ${targetTime} < ${MIN_INTERVAL}`);
		return this;
	}
	async retractspeed(e) {
		if (e !== void 0) {
			let t = this.parseAsNote(e);
			this._retractSpeed = t * 60, await this.sendFirmwareRetractSettings();
		}
		return this._retractSpeed;
	}
	get retractSpeed() {
		return this._retractSpeed;
	}
	thick(e) {
		return e !== void 0 && (this.layerHeight = parseFloat(e)), this.layerHeight;
	}
	async sendFirmwareRetractSettings() {
		return await this.gcodeEvent("M207 S" + this.retractLength.toFixed(2) + " F" + this._retractSpeed.toFixed(2) + " Z" + this.unretractZHop.toFixed(2)), await this.gcodeEvent("M208 S" + (this.retractLength.toFixed(2) + this.extraUnretract.toFixed(2)) + " F" + this._retractSpeed.toFixed(2)), this;
	}
	async retract(e = this.retractLength, t) {
		if (this.currentRetraction > 0) return;
		if (e < 0) throw Error("[API] retract length can't be less than 0: " + e);
		let n = !1;
		e !== this.retractLength && (n = !0), this.retractLength = e;
		let r = !1;
		if (t !== void 0) {
			if (t <= 0) throw Error("[API] retract speed can't be 0 or less: " + t);
			if (t > this._maxPrintSpeed.e) throw Error("[API] retract speed to high: " + t);
			r = !0, this._retractSpeed = t * 60;
		}
		if (this.currentRetraction = this.retractLength, this.e -= this.currentRetraction, this.firmwareRetract) (r || n) && await this.sendFirmwareRetractSettings(), await this.gcodeEvent("G10");
		else {
			let e = this.e.toFixed(4);
			await this.gcodeEvent("G1 E" + e + " F" + this._retractSpeed.toFixed(4)), this.e = parseFloat(e);
		}
		return await this.printEvent({
			type: "retract",
			speed: this.retractSpeed,
			length: this.retractLength
		}), this;
	}
	async unretract(e = this.currentRetraction, t) {
		if (this.currentRetraction < .01) return;
		if (e < 0) throw Error("[API] retract length can't be less than 0: " + e);
		let n = !1;
		e !== this.retractLength && (n = !0), this.retractLength = e;
		let r = !1;
		if (t !== void 0) {
			if (t <= 0) throw Error("[API] retract speed can't be 0 or less: " + t);
			if (t > this._maxPrintSpeed.e) throw Error("[API] retract speed too high: " + t);
			r = !0, this._retractSpeed = t * 60;
		}
		return this.e += this.retractLength + this.extraUnretract, this.firmwareRetract ? ((r || n) && await this.sendFirmwareRetractSettings(), await this.gcodeEvent("G11")) : (this.e = parseFloat(this.e.toFixed(4)), this.currentRetraction = 0, await this.gcodeEvent("; unretract"), await this.gcodeEvent("G1 E" + this.e + " F" + this._retractSpeed.toFixed(4))), await this.printEvent({
			type: "unretract",
			speed: this.retractSpeed,
			length: this.retractLength
		}), this;
	}
	async start(e = "190", t = "50") {
		return this.stop(!1), await this.gcodeEvent("G28"), await this.gcodeEvent("M114"), await this.gcodeEvent("M106 S0"), await this.gcodeEvent("M104 S" + e), await this.sendFirmwareRetractSettings(), this.x = 0, this.y = this.maxy, this.z = this.maxz, this.totalMoveTime = 0, this.printspeed(this._defaultPrintSpeed), this.travelspeed(this._defaultPrintSpeed), await this.sync(), this;
	}
	async temp(e = "190") {
		return await this.gcodeEvent("M104 S" + e), this;
	}
	async tempwait(e = "190") {
		return await this.gcodeEvent("M109 S" + e), this;
	}
	async bed(e = "190") {
		return await this.gcodeEvent("M140 S" + e), this;
	}
	async fan(e = "100") {
		return await this.gcodeEvent("M106 S" + e), this;
	}
	clipToPrinterBounds(e) {
		return e.x = Math.min(e.x, this.maxx), e.y = Math.min(e.y, this.maxy), e.z = Math.min(e.z, this.maxz), e.x = Math.max(e.x, this.minx), e.y = Math.max(e.y, this.miny), e.z = Math.max(e.z, this.minz), e;
	}
	to({ x: e, y: t, z: n, t: r, note: i } = {}) {
		let a = new Vector(e || this.x, t || this.y, n || this.z), s = n ? n - this.z : 0, c = Vector.sub(a, this.position);
		if (this._distance = c.mag(), this._elevation = Math.atan2(s, Math.hypot(c.axes.x, c.axes.y)), this._distance + this._elevation < 1e-5) {
			this._elevation = 0, this._distance = 0;
			return;
		}
		return this._heading = Math.atan2(c.axes.y, c.axes.x), Logger.debug(`heading ${this._heading}`), Logger.debug(`heading ${this.angle}`), r ? this.speed(1e3 * this._distance / this.parseAsTime(r)) : i && this.speed(i), this;
	}
	_defaultWarp({ d: e, heading: t, elevation: n, t: r, tt: i } = {}) {
		return {
			d: e,
			heading: t,
			elevation: n
		};
	}
	_defaultTimeWarp({ dt: e, t, tt: n } = {}) {
		return e;
	}
	_timeWarp({ dt: e, t, tt: n }) {
		return e;
	}
	set timewarp(e) {
		this._timeWarp = e;
	}
	get timewarp() {
		return this._timeWarp;
	}
	resettimewarp() {
		return this.timewarp = this._defaultTimeWarp, this;
	}
	_warp({ d: e, heading: t, elevation: n, t: r, tt: i } = {}) {
		return {
			d: e,
			heading: t,
			elevation: n
		};
	}
	set warp(e) {
		this._warp = e;
	}
	get warp() {
		return this._warp;
	}
	resetwarp() {
		return this.warp = this._defaultWarp, this;
	}
	async drawtime(e) {
		let t = this.totalMoveTime, n = 0, r = { speed: this._printSpeed }, i = this.parseAsTime(e);
		if (this._speed === 0) return this.wait(i);
		n = i + this.totalMoveTime, await this.printEvent({
			type: "drawtime-start",
			speed: this._printSpeed,
			start: t,
			end: n
		}), this._distance = 0;
		let a = 2e4;
		for (; a && this.totalMoveTime < n;) {
			if (this._stopped) throw new Exception("drawtime() manually stopped");
			a--;
			let e = performance.now(), n = this.x, i = this.y, s = this.z, c = this.totalMoveTime - t, l = this._timeWarp({
				dt: this._intervalTime,
				t: c,
				tt: this.totalMoveTime
			}), u = this.t2mm(l), d = 0, f = u, { d: p, heading: h, elevation: g } = this._warp({
				d: u,
				heading: this._heading,
				elevation: this._elevation,
				t: c,
				tt: this.totalMoveTime
			});
			f = p, Math.abs(g) > 2 ** -52 && (f = p * Math.cos(g), d = p * Math.sin(g)), r.x = n + f * Math.cos(h), r.y = i + f * Math.sin(h), r.z = s + d, await this.extrudeto(r), Logger.debug(`Move time warp op took ${performance.now() - e} ms vs. expected ${this._intervalTime}.`);
		}
		return await this.printEvent({
			type: "drawtime-end",
			speed: this._printSpeed,
			start: t,
			end: n
		}), this;
	}
	parseAsNote(e, t = this._bpm) {
		let n;
		if (isFinite(e)) n = typeof e == "number" ? e : Number(e);
		else {
			if (typeof e != "string" && e.length < 1) throw Error(`parseAsNote::Error parsing note, wrong type of argument or empty string ${e}::${typeof e}`);
			let t = e.trim().toLowerCase();
			if (t.endsWith("hz")) {
				let e = parseFloat(t.slice(0, -2));
				if (isNaN(e)) throw Error(`parseAsNote::Error parsing note, check the format of ${t}`);
				n = e / parseFloat(this.speedScale().x);
			} else if (/^[a-zA-Z]/.test(t)) n = this.midi2speed(t);
			else throw Error(`parseAsNote::Error parsing note, check the format of ${e}`);
		}
		return n;
	}
	parseAsTime(time, bpm = this._bpm) {
		let targetTime;
		if (isFinite(time)) targetTime = typeof time == "number" ? time : Number(time);
		else {
			const timeStr = (time + "").toLowerCase(), params = timeStr.match(TimeRegex);
			if (params && params.length == 3) {
				const numberParam = params[1].split(" ").reduce((accum, curr) => accum + eval(curr), 0);
				switch (params[2]) {
					case "s":
						targetTime = numberParam / 1e3;
						break;
					case "ms":
						targetTime = numberParam;
						break;
					case "b":
						targetTime = 6e4 / bpm * numberParam;
						break;
					default: throw Error(`parseAsTime::Error parsing time, bad time suffix in ${timeStr}`);
				}
			} else throw Error(`parseAsTime::Error parsing time, check the format of ${timeStr}`);
		}
		return targetTime;
	}
	async draw(e) {
		if (this._speed === 0) throw Error("[API] draw() called with speed 0, please set speed before calling draw()");
		let t = this.totalMoveTime, n = 0;
		this._distance = e && isFinite(e) ? e : this._distance;
		let r = this._distance, i = { speed: this._printSpeed }, a = 2e4;
		for (await this.printEvent({
			type: "draw-start",
			speed: this._printSpeed,
			length: this._distance
		}); a && n < r;) {
			if (this._stopped) throw new Exception("draw() manually stopped");
			a--;
			let e = this.totalMoveTime - t, s = performance.now(), c = this.x, l = this.y, u = this.z, d = this._timeWarp({
				dt: this._intervalTime,
				t: e,
				tt: this.totalMoveTime
			}), f = Math.min(this.t2mm(d), r - n), { d: p, heading: h, elevation: g } = this._warp({
				d: f,
				heading: this._heading,
				elevation: this._elevation,
				t: e,
				tt: this.totalMoveTime
			});
			if (f + g < 1e-5) {
				console.error(`draw() SHORT: ${a}, ${r} ${r - n} / ${f}`);
				break;
			}
			let _ = p * Math.sin(g), v = p * Math.cos(g);
			i.x = c + v * Math.cos(h), i.y = l + v * Math.sin(h), i.z = u + _, await this.extrudeto(i), n += f, Logger.debug(`Move draw warp op took ${performance.now() - s} ms vs. expected ${this._intervalTime}.`);
		}
		return this._elevation = 0, this._distance = 0, await this.printEvent({
			type: "draw-end",
			speed: this._printSpeed,
			length: n
		}), this;
	}
	set layerHeight(e) {
		this._layerHeight = Math.max(MinLayerHeight, e);
	}
	set lh(e) {
		this._layerHeight = Math.max(MinLayerHeight, e);
	}
	get layerHeight() {
		return this._layerHeight;
	}
	get lh() {
		return this._layerHeight;
	}
	getAngle(e = !1) {
		return e ? this._heading : this.r2d(this._heading);
	}
	turnto(e, t = !1) {
		return this._heading = t ? e : this.d2r(e), this;
	}
	run(e) {
		let t = "M", n = "E", r = "L", i = "R", a = "U", s = "D", c = "<", l = ">", u = /([a-zA-Z<>][0-9]+\.?[0-9]*)/gim, d = /([a-zA-Z<>])([0-9]+\.?[0-9]*)/, f = e.match(u);
		for (let e of f) {
			let t = e.match(d);
			if (t.length !== 3) throw Error("[API] Error in command string: " + f);
			let n = t[1].toUpperCase(), r = parseFloat(t[2]);
			switch (n) {
				case "M":
					this.distance(r).go();
					break;
				case "E":
					this.distance(r).go(1, !1);
					break;
				case "L":
					this.turn(r);
					break;
				case "R":
					this.turn(-r);
					break;
				case "U":
					this.up(r).go();
					break;
				case "D":
					this.down(r).go();
					break;
				case "<":
					this.retract(r);
					break;
				case ">":
					this.unretract(r);
					break;
				default: throw Error("[API] Error in command - unknown command char: " + n);
			}
		}
		return this;
	}
	async up(e) {
		return this.move({
			z: e,
			speed: this._travelSpeed
		});
	}
	async drawup(e) {
		let t = e;
		return this._elevation = Math.PI / 2, this.draw({ z: t });
	}
	async dup(e) {
		return this.drawup(e);
	}
	async upto(e) {
		return this.moveto({
			z: e,
			speed: this._travelSpeed
		});
	}
	async downto(e) {
		return this.upto(e);
	}
	async down(e) {
		return this.up(-e);
	}
	async drawdown(e) {
		return this.drawup(-e);
	}
	async dd(e) {
		return this.drawdown(e);
	}
	elevation(e, t = !1) {
		return t || (e = this.d2r(e)), this._elevation = e, this;
	}
	elev(e) {
		return this.elevation(e);
	}
	tilt(e) {
		return this.elevation(e);
	}
	distance(e) {
		return this._distance = e, this;
	}
	dist(e) {
		return this.distance(e);
	}
	async travel(e) {
		let t = this.totalMoveTime, n = 0, r = e && isFinite(e) ? e : this._distance, i = { speed: this._travelSpeed };
		this._distance = 0;
		let a = 800;
		for (await this.printEvent({
			type: "travel-start",
			speed: this._travelSpeed,
			length: this._distance
		}); a && n < r;) {
			if (this._stopped) throw new Exception("travel() manually stopped");
			a--;
			let e = performance.now(), s = this.totalMoveTime - t, c = this.x, l = this.y, u = this.z, d = this._timeWarp({
				dt: this._intervalTime,
				t: s,
				tt: this.totalMoveTime
			}), f = Math.min(this.t2mm(d), r - n), p = 0, h = f, { d: g, heading: _, elevation: v } = this._warp({
				d: f,
				heading: this._heading,
				elevation: this._elevation,
				t: s,
				tt: this.totalMoveTime
			});
			if (f + v < 1e-5) break;
			h = g, Math.abs(v) > 2 ** -52 && (h = g * Math.cos(v), p = g * Math.sin(v)), i.x = c + h * Math.cos(_), i.y = l + h * Math.sin(_), i.z = u + p, await this.moveto(i), n += f, Logger.debug(`Move time warp op (${d}) took ${performance.now() - e} ms vs. expected ${this._intervalTime}.`), await this.printEvent({
				type: "travel-end",
				speed: this._travelSpeedSpeed,
				length: this._distance
			});
		}
		return this._elevation = 0, this;
	}
	async traveltime(e) {
		let t = this.totalMoveTime, n = 0, r = { speed: this._travelSpeed }, i = this.parseAsTime(e);
		if (this._speed === 0) return this.wait(i);
		n = i + this.totalMoveTime, await this.printEvent({
			type: "traveltime-start",
			speed: this._travelSpeed,
			start: t,
			end: n
		}), this._distance = 0;
		let a = 2e4;
		for (; a && this.totalMoveTime < n;) {
			a--;
			let e = performance.now(), n = this.x, i = this.y, s = this.z, c = this.totalMoveTime - t, l = this._timeWarp({
				dt: this._intervalTime,
				t: c,
				tt: this.totalMoveTime
			}), u = this.t2mm(l), d = 0, f = u, { d: p, heading: h, elevation: g } = this._warp({
				d: u,
				heading: this._heading,
				elevation: this._elevation,
				t: c,
				tt: this.totalMoveTime
			});
			f = p, Math.abs(g) > 2 ** -52 && (f = p * Math.cos(g), d = p * Math.sin(g)), r.x = n + f * Math.cos(h), r.y = i + f * Math.sin(h), r.z = s + d, await this.moveto(r), Logger.debug(`Move time warp op took ${performance.now() - e} ms vs. expected ${this._intervalTime}.`);
		}
		return await this.printEvent({
			type: "traveltime-end",
			speed: this._travelSpeed,
			start: t,
			end: n
		}), this;
	}
	async fwretract(e) {
		return this.firmwareRetract = e, this.fwretract ? await this.gcodeEvent("M209 S0") : await this.gcodeEvent("M209 S1"), this;
	}
	async polygon(e, t = 10) {
		let n = e * e * 2, r = Math.PI * 2 / t, i = Math.sqrt(n - n * Math.cos(r)), a = this._autoRetract;
		this._autoRetract = !1;
		for (let e = 0; e < t; e++) this.turn(r, !0), await this.draw(i);
		return this._autoRetract = a, this._autoRetract && await this.retract(), this;
	}
	async rect({ w: e, h: t }) {
		let n = this._autoRetract;
		this._autoRetract = !1;
		let r = e || t, i = t || e;
		for (let e = 0; e < 2; e++) await this.draw(r), this.turn(90), await this.draw(i), this.turn(90);
		return this._autoRetract = n, await this.retract(), await this.travel(r), this;
	}
	parseAsDimension(dim) {
		let targetDim = 0;
		if (isFinite(dim)) targetDim = typeof dim == "number" ? dim : Number(dim);
		else {
			const dimStr = (dim + "").toLowerCase(), params = dimStr.match(DimensionRegex);
			if (params && params.length == 3) {
				const numberParam = eval(params[1]);
				switch (params[2]) {
					case "cm":
						targetDim = numberParam / 1e3;
						break;
					case "mm":
						targetDim = numberParam;
						break;
					case "in":
						targetDim = numberParam * 25.4;
						break;
					default: throw Error(`parseAsDimension::Error parsing dimension, bad dimension suffix in ${dimStr}`);
				}
			} else throw Error(`parseAsDimension::Error parsing dimension, check the format of ${dimStr}`);
		}
		return targetDim;
	}
	parseAsDimensionOrTime(e) {
		try {
			return this.parseAsDimension(e);
		} catch {
			return this.t2mm(this.parseAsTime(e));
		}
	}
	async extrudeto(e) {
		let t = e.e === void 0, n = e.x === void 0 ? this.x : parseFloat(e.x), r = e.y === void 0 ? this.y : parseFloat(e.y), i = e.z === void 0 ? this.z : parseFloat(e.z), a = e.e === void 0 ? this.e : parseFloat(e.e), s = Math.abs(a - this.e) > 1e-4, c = t || s, l = t && s && (e.retract === !0 || e.retract === void 0 && this._autoRetract);
		!t && s && (this.currentRetraction = 0), l && await this.unretract();
		let u = new Vector({
			x: n,
			y: r,
			z: i,
			e: a
		}), d = this.parseAsNote(e.speed === void 0 ? c ? this._printSpeed : this._travelSpeed : e.speed);
		this.layerHeight = parseFloat(e.thickness === void 0 ? this.layerHeight : e.thickness), e.thick !== void 0 && (this.layerHeight = parseFloat(e.thick));
		let f = Vector.sub(u, this.position), p = new Vector(f.axes.x, f.axes.y, f.axes.z), h, g;
		if (h = p.mag(), !s && h < 2 ** -52) return;
		if (g = h < 1e-4 ? 1e3 * f.axes.e / d : 1e3 * h / d, Number.isNaN(g)) throw Error("Movetime NAN in extrudeTo");
		if (t) {
			let e = this._filamentDiameter / 2, t = h * this.layerHeight * this.layerHeight;
			if (t > this.maxFilamentPerOperation) throw Error("[API] Too much filament in move:" + t);
			this._extrusionInmm3 || (t /= e * e * Math.PI), f.axes.e = t, u.axes.e = this.e + f.axes.e;
		}
		if (u = this.clipToPrinterBounds(u.axes), this.totalMoveTime += g, g > this.maxTimePerOperation) throw Error("[API] move time too long:" + g);
		if (g < .001) throw this.errorEvent("[API] total move time too short:" + g), /* @__PURE__ */ Error("[API] move time too short:" + g);
		let _ = Vector.div(f, g / 1e3);
		if (c) {
			if (Math.abs(_.axes.x) > this._maxPrintSpeed.x) throw Error("[API] X printing speed too fast:" + _.axes.x);
			if (Math.abs(_.axes.y) > this._maxPrintSpeed.y) throw Error("[API] Y printing speed too fast:" + _.axes.y);
			if (Math.abs(_.axes.z) > this._maxPrintSpeed.z) throw Error("[API] Z printing speed too fast:" + _.axes.z);
			if (Math.abs(_.axes.e) > this._maxPrintSpeed.e) throw Error("[API] E printing speed too fast:" + _.axes.e + "/" + this._maxPrintSpeed.e);
		} else {
			if (Math.abs(_.axes.x) > this._maxTravelSpeed.x) throw Error("[API] X travel too fast:" + _.axes.x);
			if (Math.abs(_.axes.y) > this._maxTravelSpeed.y) throw Error("[API] Y travel too fast:" + _.axes.y);
			if (Math.abs(_.axes.z) > this._maxTravelSpeed.z) throw Error("[API] Z travel too fast:" + _.axes.z);
		}
		let v = { ...this.position.axes };
		this.position.set(u), await this.sendExtrusionGCode(d), c ? await this.printEvent({
			type: "extrude",
			newPosition: { ...this.position.axes },
			oldPosition: { ...v },
			speed: this._printSpeed,
			moveTime: g,
			totalMoveTime: this.totalMoveTime,
			layerHeight: this.layerHeight,
			length: h
		}) : await this.printEvent({
			type: "travel",
			newPosition: { ...this.position.axes },
			oldPosition: { ...v },
			speed: this._travelSpeed,
			moveTime: g,
			totalMoveTime: this.totalMoveTime,
			layerHeight: this.layerHeight,
			length: h
		}), l && await this.retract();
	}
	async sendExtrusionGCode(e) {
		this.e = parseFloat(this.e.toFixed(4)), this.x = parseFloat(this.x.toFixed(4)), this.y = parseFloat(this.y.toFixed(4)), this.z = parseFloat(this.z.toFixed(4));
		let t = ["G1"];
		return t.push("X" + this.x), t.push("Y" + this.y), t.push("Z" + this.z), t.push("E" + this.e), t.push("F" + (e * 60).toFixed(4)), await this.gcodeEvent(t.join(" ")), this;
	}
	async sendArcExtrusionGCode(e, t = !0, n = !0) {
		let r = clockwise ? ["G2"] : ["G3"];
		return r.push("X" + this.x.toFixed(4)), r.push("Y" + this.y.toFixed(4)), r.push("Z" + this.z.toFixed(4)), r.push("E" + this.e.toFixed(4)), r.push("F" + (e * 60).toFixed(4)), await this.gcodeEvent(r.join(" ")), this.e = parseFloat(this.e.toFixed(4)), this.x = parseFloat(this.x.toFixed(4)), this.y = parseFloat(this.y.toFixed(4)), this.z = parseFloat(this.z.toFixed(4)), this;
	}
	async extrude(e) {
		let t = {};
		return t.x = e.x === void 0 ? this.x : this.parseAsDimensionOrTime(e.x) + this.x, t.y = e.y === void 0 ? this.y : this.parseAsDimensionOrTime(e.y) + this.y, t.z = e.z === void 0 ? this.z : this.parseAsDimensionOrTime(e.z) + this.z, t.e = e.e === void 0 ? void 0 : this.parseAsDimensionOrTime(e.e) + this.e, t.retract = e.retract, t.speed = e.speed, this.extrudeto(t);
	}
	async move(e) {
		let t = {};
		return t.x = e.x === void 0 ? this.x : parseFloat(e.x) + this.x, t.y = e.y === void 0 ? this.y : parseFloat(e.y) + this.y, t.z = e.z === void 0 ? this.z : parseFloat(e.z) + this.z, t.e = this.e, t.speed = e.speed, this.extrudeto(t);
	}
	async moveto(e) {
		return e.e = this.e, this.extrudeto(e);
	}
	turn(e, t = !1) {
		let n = e;
		return t || (n = this.d2r(e)), this._heading += n, this;
	}
	async drawfill(e, t, n) {
		n === void 0 && (n = 1.5 * this.layerHeight);
		let r = this._autoRetract;
		this._autoRetract = !1, o;
		let i = e / n;
		if (i < 3) await this.draw(t);
		else {
			i % 2 != 0 && (i += 1);
			for (let e = 0; e < i; e++) {
				let r = e % 2 == 0 ? -1 : 1;
				await this.draw(t), this.turn(r * 90), await this.draw(n), this.turn(r * 90);
			}
			this.turn(180);
		}
		return this._autoRetract = r, this._autoRetract && await this.retract(), this;
	}
	async sync() {
		return await this.gcodeEvent("M105"), await this.gcodeEvent("M114"), this;
	}
	d2r(e) {
		return Math.PI * e / 180;
	}
	r2d(e) {
		return e * 180 / Math.PI;
	}
	note(e = 40, t = 200, n = "x") {
		let r = [];
		r.push(...n);
		let i = 0, a = 0, s = 0, c = 0;
		for (let n of r) if (e < 10) {
			this._waitTime = t;
			break;
		} else {
			let t = this.midi2speed(e, n);
			i += t * t, n === "x" ? s = this._heading < Math.PI / 2 && this._heading > -Math.PI / 2 ? -90 : 90 : n === "y" ? a = this._heading > 0 && this._heading < Math.PI ? 90 : -90 : n === "z" && (c = this._elevation > 0 ? Math.PI / 2 : -Math.PI / 2);
		}
		return this._heading = Math.atan2(a, s), this._elevation = c, this._distance = this.printspeed(Math.sqrt(i)) * t / 1e3, this;
	}
	t2d(e, t = this._travelSpeed) {
		let n = this.parseAsTime(e), r = this.parseAsNote(t);
		return this._distance = this.t2mm(n, r), this;
	}
	t2mm(e, t = this._printSpeed) {
		let n = this.parseAsTime(e);
		return this.parseAsNote(t) * n / 1e3;
	}
	n2mm(e, t = "1b", n = this._bpm) {
		return this.midi2speed(e) * this.parseAsTime(t, n) / 1e3;
	}
	b2t(e, t = this._bpm) {
		return this.parseAsTime(e, t);
	}
	d2t(e = this._distance, t = this._printSpeed) {
		return Math.abs(e) * this.parseAsNote(t);
	}
	async fill(e, t, n = this.layerHeight) {
		let r = n * Math.PI;
		for (var i = 0, a = 0; a < t; i++, a += r) {
			let t = i % 2 == 0 ? 1 : -1;
			await this.move({ y: r }), await this.extrude({ x: t * e });
		}
		return this;
	}
	midi2speed(e, t = "x") {
		return 2 ** (((isNaN(e) ? midi(e) : e) - 69) / 12) * 440 / parseFloat(this.speedScale()[t]);
	}
	m2s(e, t = "x") {
		return this.travelspeed(this.printspeed(this.midi2speed(e, t)));
	}
	speedScale() {
		let e = this._speedScale;
		return {
			x: e.x,
			y: e.y,
			z: e.z
		};
	}
	async wait(e = this._waitTime) {
		let t = this.parseAsTime(e);
		return await this.printEvent({
			type: "wait-start",
			speed: 0,
			time: t
		}), await this.gcodeEvent("G4 P" + e), this.totalMoveTime += t, await this.printEvent({
			type: "wait-end",
			speed: 0,
			time: t
		}), this._waitTime = 0, this;
	}
	async pause() {
		return await this.extrude({
			e: -16,
			speed: 250
		}), await this.move({ z: -3 }), await this.gcodeEvent("M104 S0"), await this.gcodeEvent("M107 S0"), this;
	}
	async resume(e = "190") {
		return await this.gcodeEvent("M109 S" + e), await this.gcodeEvent("M106 S100"), await this.extrude({
			e: 16,
			speed: 250
		}), this;
	}
	async printPaths({ paths: e = [[]], y: t = 0, x: n = 0, z: r = 0, w: i = 0, h: a = 0, useaspect: s = !0, passes: c = 1, safeZ: l = 0 }) {
		l ||= this.layerHeight * c + 10;
		let u = Infinity, d = Infinity, f = -Infinity, p = -Infinity, h = e.length;
		for (; h--;) {
			let t = e[h].length, n = {
				x: Infinity,
				y: Infinity,
				x2: -Infinity,
				y2: -Infinity,
				area: 0
			};
			for (; t--;) u = Math.min(e[h][t][0], u), d = Math.min(e[h][t][1], d), f = Math.max(e[h][t][0], f), p = Math.max(e[h][t][1], p), e[h][t][0] < n.x && (n.x = e[h][t][0]), e[h][t][1] < n.y && (n.y = e[h][t][0]), e[h][t][0] > n.x2 && (n.x2 = e[h][t][0]), e[h][t][1] > n.y2 && (n.y2 = e[h][t][0]);
			n.area = (1 + n.x2 - n.x) * (1 + n.y2 - n.y), e[h].bounds = n;
		}
		let g = f - u, _ = p - d, v = i && a, y = i || a;
		if (!v) if (y) if (i > 0) {
			let e = _ / g;
			a = i * e;
		} else {
			let e = g / _;
			i = a * e;
		}
		else i = g, a = _;
		let b = makeMapping([u, f], [n, n + i]), x = makeMapping([d, p], [t, t + a]);
		e.sort(function(e, t) {
			return e.bounds.x < t.bounds.x ? -1 : 1;
		});
		for (let t = 0, n = e.length; t < n; t++) {
			let n = e[t].slice();
			for (let e = 1; e <= c; e++) {
				let t = e * this.layerHeight + r;
				await this.moveto({
					x: b(n[0][0]),
					y: x(n[0][1])
				}), await this.moveto({ z: t }), await this.unretract();
				for (let e = 0, t = n.length; e < t; e++) {
					let t = n[e];
					await this.extrudeto({
						x: b(t[0]),
						y: x(t[1]),
						retract: !1
					});
				}
				e < c ? n.reverse() : (await this.retract(), await this.moveto({ z: l }));
			}
		}
		return this;
	}
	async printPathsThick({ paths: e = [[]], y: t = 0, x: n = 0, z: r = 0, w: i = 0, h: a = 0, t: s = 1, useaspect: c = !0, passes: l = 1, safeZ: u = 0 }) {
		u ||= this.layerHeight * l + 10, s = this.layerHeight * 2.5 * s;
		let d = Infinity, f = Infinity, p = -Infinity, h = -Infinity, g = e.length;
		for (; g--;) {
			let t = e[g].length, n = {
				x: Infinity,
				y: Infinity,
				x2: -Infinity,
				y2: -Infinity,
				area: 0
			};
			for (; t--;) d = Math.min(e[g][t][0], d), f = Math.min(e[g][t][1], f), p = Math.max(e[g][t][0], p), h = Math.max(e[g][t][1], h), e[g][t][0] < n.x && (n.x = e[g][t][0]), e[g][t][1] < n.y && (n.y = e[g][t][0]), e[g][t][0] > n.x2 && (n.x2 = e[g][t][0]), e[g][t][1] > n.y2 && (n.y2 = e[g][t][0]);
			e[g].bounds = n;
		}
		let _ = p - d, v = h - f, y = i && a, b = i || a;
		if (!y) if (b) if (i > 0) {
			let e = v / _;
			a = i * e;
		} else {
			let e = _ / v;
			i = a * e;
		}
		else i = _, a = v;
		let x = makeMapping([d, p], [n, n + i]), S = makeMapping([f, h], [t, t + a]);
		e.sort(function(e, t) {
			return e.bounds.x < t.bounds.x ? -1 : 1;
		});
		for (let t = 1; t <= l; t++) for (let n = 0, i = e.length; n < i; n++) {
			let i = e[n].slice(), a = t * this.layerHeight + r;
			if (await this.moveto({
				x: x(i[0][0]),
				y: S(i[0][1])
			}), await this.moveto({ z: a }), i.length > 1) {
				let e = 0, t = 0, n = x(i[0][0]), r = S(i[0][1]), a = Math.atan2(S(i[1][1]) - r, x(i[1][0]) - n);
				for (let c = 1, l = i.length; c < l; c++) {
					let l = i[c], u = x(l[0]), d = S(l[1]), f = u - n, p = d - r, h = Math.atan2(p, f);
					h === a ? (e += f, t += p) : (await this.drawfill(e || 2, t || 2, s), e = t = 0, this.turn(h), a = h);
				}
			}
			t < l ? i.reverse() : await this.moveto({ z: u });
		}
		return this;
	}
	async prime({ x: e = this.minx + 15, y: t = this.miny + 15, z: n = 80, speed: r = 80, e: i = 14, waitTime: a = 100 } = {
		x: this.minx + 15,
		y: this.miny + 15,
		z: 80,
		speed: 80,
		e: 14,
		waitTime: 100
	}) {
		await this.moveto({
			x: e,
			y: t,
			z: n,
			speed: r
		}), await this.unretract(), await this.extrude({
			e: i,
			speed: 2
		}), await this.retract(), await this.wait(a);
	}
	async bail(e = !0, t = 5) {
		e ? (this._bail = !0, await this.retract(), this.travelspeed(80), await this.up(t)) : this._bail = !1;
	}
	pause(e = 100) {
		return this._pauseTime = e, this._pauseTime;
	}
	async mainloop(e) {
		for (; !this._bail;) if (this._pauseTime > 0) {
			await this.delay(this._pauseTime);
			continue;
		} else await e();
	}
	async delay(e) {
		return await new Promise((t) => setTimeout(t, e));
	}
}, PI = Math.PI;
function makeVisualiser(e, t, n = {
	title: "LivePrinter",
	debug: !1,
	delay: !0,
	travelOpacity: .8,
	travelLineGlow: .5,
	extrudeOpacity: .7,
	extrudeLineGlow: .5,
	printHeadColor: 16777045,
	printHeadRadius: 20,
	fogEnabled: !0,
	fogColor: 986895,
	fogNear: 100,
	fogFar: 5e3,
	glowEnabled: !1,
	glowStrength: .5,
	glowRadius: .15,
	glowThreshold: .1
}) {
	let r = {};
	function i(t = "lines.gcode") {
		let n = GCODE_HEADER[e.model].join("\n") + "\n" + getGcode(), r = URL.createObjectURL(new Blob([n], { type: "text" })), i = document.createElement("a");
		i.href = r, i.download = t, i.click();
	}
	r.downloadGCode = i;
	let a = document.getElementById(t);
	function s() {
		return a.clientWidth;
	}
	r.sceneWidth = s;
	function c() {
		return s() * e.maxy / e.maxx;
	}
	r.sceneHeight = c;
	function l(t) {
		return s() * (t / e.maxx - 1);
	}
	r.bedXtoScene = l;
	function u(t) {
		return c() * (t / e.maxy - 1);
	}
	r.bedYtoScene = u;
	function d(t) {
		return s() * t / e.maxx;
	}
	r.bedZtoScene = d;
	let f = new WebGLRenderer({
		antialias: !0,
		preserveDrawingBuffer: !0,
		alpha: !0
	});
	f.setPixelRatio(window.devicePixelRatio), f.setSize(s(), c()), a.appendChild(f.domElement);
	let p, h, g;
	function _() {
		p = new EffectComposer(f), h = new RenderPass(x, B), p.addPass(h), n.glowEnabled && (g = new UnrealBloomPass({
			x: s(),
			y: c()
		}, n.glowStrength, n.glowRadius, n.glowThreshold), p.addPass(g));
	}
	let v = makeTravelLineSegments({
		color: n.travelColor,
		opacity: n.travelOpacity,
		emissiveIntensity: n.travelLineGlow
	}), y = makeExtrudeLineSegments({
		opacity: n.extrudeOpacity,
		emissiveIntensity: n.extrudeLineGlow
	});
	setGeometryDimensions(s(), c());
	let b = makePrintHeadMarker({
		radius: n.printHeadRadius,
		color: n.printHeadColor
	}), x = new Scene(), S = new Object3D();
	S.translateX(-s()), S.translateY(-c() / 2), S.rotateX(PI / 2), S.translateY(2 * c() / 3);
	let C = new Group(), w = new Group(), T = new Group();
	x.add(S), w.add(v), w.add(y), w.add(b);
	let E = {
		x: s() / 40,
		y: s() / 60
	}, D = new Mesh(new BoxGeometry(E.x, E.y, E.y), new MeshPhongMaterial({ color: 11075703 })), O = new Mesh(new BoxGeometry(E.x, E.y, E.y), new MeshPhongMaterial({ color: 15295010 }));
	x.add(C), w.translateX(s() / 2), w.translateY(c() / 2), T.translateX(s() / 2), T.translateY(c() / 2), D.position.x = l(e.maxx) - E.x / 2, D.position.y = u(e.maxy) - E.y / 2, D.position.z = E.y / 2, O.position.x = l(0) - E.x / 2, O.position.y = u(0) - E.y / 2, O.position.z = E.y / 2, console.log(`Test cube position: ${JSON.stringify(O.position, null, 2)}`), w.add(O), w.add(D), C.add(w), C.add(T), x.background = new Color$1(986895), n.fogEnabled && (x.fog = new Fog(n.fogColor, n.fogNear, n.fogFar));
	let k = new GridHelper(s(), Math.round(e.maxx / 5), 4473924, 2236962);
	k.scale.set(1, e.maxy / e.maxx, 1), k.name = "ref-grid", C.add(k), k.rotateX(PI / 2);
	let A = new Group(), j = 4 / 5, N = 0, P = 1 / 8, ee = 1, F = 1;
	function I() {
		return s() * N;
	}
	function R() {
		return c() * P;
	}
	function z() {
		return ee * s();
	}
	function te() {
		return F * c();
	}
	let B = new OrthographicCamera(-j * s() / 2, j * s() / 2, j * c() / 2, -j * c() / 2, 0, s() * 100);
	function ne() {
		B.left = -j * (z() / 2 + I()), B.right = j * (z() / 2 - I()), B.top = j * (te() / 2 - R()), B.bottom = -j * (te() / 2 + R()), B.updateProjectionMatrix();
	}
	ne(), _(), r.setZoom = (e) => {
		j = 1 - Math.max(0, Math.min(e, 1)), ne();
	}, r.setViewX = (e) => {
		N = e, ne();
	}, r.getViewX = () => N, r.setViewXmm = (t) => {
		N = 2 * (t / e.maxx) - 1, ne();
	}, r.viewXmm = () => e.maxx * (N + 1) / 2, r.setViewY = (e) => {
		P = e, ne();
	}, r.getViewY = () => P, r.setViewYmm = (t) => {
		P = 2 * (t / e.maxy) - 1, ne();
	}, r.viewYmm = () => e.maxy * (P + 1) / 2, r.setViewWidth = (e) => {
		ee = e, ne();
	}, r.getViewwidth = () => ee, r.setViewHeight = (e) => {
		F = e, ne();
	}, r.getViewHeight = () => F;
	let H = 30, U = new OrthographicCamera(-s() / H, s() / H, c() / H, -c() / H, .01, 2e3);
	function re(e) {
		H = e, U.left = -s() / H, U.right = s() / H, U.top = c() / H, U.bottom = -c() / H, U.updateProjectionMatrix();
	}
	r.closeFactor = re, r.setFogEnabled = (e) => {
		e && !x.fog ? x.fog = new Fog(n.fogColor, n.fogNear, n.fogFar) : e || (x.fog = null);
	}, r.setFogColor = (e) => {
		n.fogColor = e, x.fog && x.fog.color.setHex(e);
	}, r.setFogNear = (e) => {
		n.fogNear = e, x.fog && (x.fog.near = e);
	}, r.setFogFar = (e) => {
		n.fogFar = e, x.fog && (x.fog.far = e);
	}, r.getFogState = () => ({
		enabled: x.fog !== null,
		color: n.fogColor,
		near: n.fogNear,
		far: n.fogFar
	}), r.setGlowEnabled = (e) => {
		n.glowEnabled = e, e && !g ? (g = new UnrealBloomPass({
			x: s(),
			y: c()
		}, n.glowStrength, n.glowRadius, n.glowThreshold), p.addPass(g)) : !e && g && p && (p.removePass(g), g = null);
	}, r.setGlowStrength = (e) => {
		n.glowStrength = e, g && (g.strength = e);
	}, r.setGlowRadius = (e) => {
		n.glowRadius = e, g && (g.radius = e);
	}, r.setGlowThreshold = (e) => {
		n.glowThreshold = e, g && (g.threshold = e);
	}, r.getGlowState = () => ({
		enabled: n.glowEnabled,
		strength: n.glowStrength,
		radius: n.glowRadius,
		threshold: n.glowThreshold
	}), r.setTravelLineGlow = (e) => {
		n.travelLineGlow = e, setTravelLineGlow(e);
	}, r.setExtrudeLineGlow = (e) => {
		n.extrudeLineGlow = e, setExtrudeLineGlow(e);
	}, r.getLineGlowState = () => ({
		travel: n.travelLineGlow,
		extrude: n.extrudeLineGlow
	}), A.add(B, U), C.add(A);
	let W = new OrbitControls(B, f.domElement);
	B.up.set(0, 0, 1), B.position.set(l(-3 * e.maxx), u(-3 * e.maxy), d(2 * e.maxz)), B.lookAt(l(e.maxx / 2) + s() / 2, u(e.maxy / 2) + c() / 2, d(0)), U.up.set(0, 0, 1), U.position.set(l(2 * e.maxx), u(2 * e.maxy), d(e.maxz / 2)), U.lookAt(l(e.minx / 2) + s() / 2, u(e.miny / 2) + c() / 2, d(0)), W.dampingFactor = .1, W.maxPolarAngle = PI, W.minPolarAngle = PI / 2, W.minAzimuthAngle = -PI / 2, W.maxAzimuthAngle = .001, W.enableDamping = !0, (() => {
		let t = 16777215, n = 1, r = new PointLight(t, 1, 3 * s(), .8);
		r.position.set(l(e.maxx / 2), u(-e.maxy), d(e.maxx / 2)), T.add(r);
		let i = new PointLight(t, 1, s(), .2);
		i.position.set(l(e.maxx / 2), u(e.maxy / 2), d(e.maxx / 4)), T.add(i), T.add(new AmbientLight(t, .2));
	})();
	let K = makePrinterEventHandler({
		x: l,
		y: u,
		z: d,
		delay: n.delay,
		debug: n.debug
	});
	r.vizevents = K, r.reset = function() {
		v && w.remove(v), y && w.remove(y), v = makeTravelLineSegments({
			color: n.travelColor,
			opacity: n.travelOpacity,
			emissiveIntensity: n.travelLineGlow
		}), w.add(v), y = makeExtrudeLineSegments({
			opacity: n.extrudeOpacity,
			emissiveIntensity: n.extrudeLineGlow
		}), w.add(y);
	}, e.addPrintListener(K), e.addErrorListener(K), e.addGCodeListener(K);
	let q = { printEvent: async ({ type: t, newPosition: n, oldPosition: r, speed: i, moveTime: a, totalMoveTime: f, layerHeight: p, length: h }) => {
		switch (t) {
			case "extrude":
			case "travel":
				U.position.set(l(e.maxx) - s() / 2, u(e.maxy) - c() / 2, d(n.z + e.maxz / 8)), U.lookAt(l(n.x) + s() / 2, u(n.y) + c() / 2, d(n.z));
				break;
		}
	} };
	e.addPrintListener(q);
	let ie = new FontLoader().parse(helvetiker_regular_typeface), J = new TextGeometry(n.title ? n.title : "LivePrinter", {
		font: ie,
		size: s() / 20,
		height: s() / 24,
		curveSegments: 12,
		bevelEnabled: !0,
		bevelThickness: .1,
		bevelSize: .1,
		bevelSegments: 2,
		transparent: !0,
		opacity: .2
	});
	J.computeBoundingBox();
	let ae = .74, oe = .8, se = .3, ce = new MeshPhongMaterial({
		side: 2,
		opacity: .8,
		transparent: !0
	});
	ce.color.setHSL(.74, .8, .3);
	let le = new Mesh(J, ce);
	le.scale.setComponent(2, 2.5);
	let ue = new Object3D();
	ue.add(le), S.add(ue);
	function de() {
		f.setSize(s(), c()), p && p.setSize(s(), c()), resizeGeometries(s(), c()), B.aspect = s() / c(), ne(), U.aspect = B.aspect, re(H);
		let t = s() / 20, r = s() / 24;
		J.dispose(), J = new TextGeometry(n.title ? n.title : "LivePrinter", {
			font: ie,
			size: t,
			height: r,
			curveSegments: 12,
			bevelEnabled: !0,
			bevelThickness: .1,
			bevelSize: .1,
			bevelSegments: 2,
			transparent: !0,
			opacity: .2
		}), J.computeBoundingBox(), le.geometry = J, k.scale.set(1, e.maxy / e.maxx, 1);
	}
	window.addEventListener("resize", de);
	let fe = s() * 4 / 5, pe = c() * 4 / 5, me = s() * 1 / 5, Y = c() * 1 / 5;
	r.setCloseViewX = (e) => fe = s() * e, r.setCloseViewY = (e) => pe = c() * e, r.setCloseViewWidth = (e) => me = s() * e, r.setCloseViewHeight = (e) => Y = c() * e;
	function he(e) {
		f.setViewport(0, 0, s(), c()), f.setScissor(0, 0, s(), c()), f.setScissorTest(!0), f.setClearColor(new Color$1().setRGB(0, 0, 0, SRGBColorSpace)), n.glowEnabled && p ? p.render() : f.render(x, B), f.setViewport(fe, pe, me, Y), f.setScissor(fe, pe, me, Y), f.setScissorTest(!0), f.setClearColor(new Color$1().setRGB(0, 0, 0, SRGBColorSpace)), f.render(x, U);
	}
	return f.setAnimationLoop(he), r.resetAll = function() {
		f.setAnimationLoop(null), window.removeEventListener("resize", de), e.removePrintListener(K), e.removeErrorListener(K), e.removeGCodeListener(K), e.removePrintListener(q), v && (v.geometry.dispose(), v.material.dispose()), y && (y.geometry.dispose(), y.material.dispose()), b && (b.geometry.dispose(), b.material.dispose()), x.traverse((e) => {
			e.geometry && e.geometry.dispose(), e.material && (Array.isArray(e.material) ? e.material.forEach((e) => e.dispose()) : e.material.dispose());
		}), x.clear(), f.dispose(), a.removeChild(f.domElement);
	}, r;
}
//#endregion
export { makeVisualiser };
