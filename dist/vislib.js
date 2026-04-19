/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ms = "152", Rn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Cn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, ul = 0, Cs = 1, hl = 2, Mo = 1, dl = 2, Jt = 3, on = 0, mt = 1, zt = 2, an = 0, Kn = 1, Ls = 2, qs = 3, Ds = 4, fl = 5, Yn = 100, pl = 101, ml = 102, Us = 103, Is = 104, _l = 200, gl = 201, xl = 202, vl = 203, So = 204, Eo = 205, Ml = 206, Sl = 207, El = 208, yl = 209, Tl = 210, bl = 0, Al = 1, wl = 2, Qr = 3, Pl = 4, Rl = 5, Cl = 6, Ll = 7, _s = 0, ql = 1, Dl = 2, $t = 0, Ul = 1, Il = 2, Nl = 3, Fl = 4, Ol = 5, yo = 300, ni = 301, ii = 302, es = 303, ts = 304, sr = 306, ns = 1e3, It = 1001, is = 1002, pt = 1003, Ns = 1004, mr = 1005, At = 1006, Bl = 1007, Ei = 1008, En = 1009, zl = 1010, Gl = 1011, To = 1012, Hl = 1013, gn = 1014, xn = 1015, yi = 1016, Vl = 1017, kl = 1018, Jn = 1020, Wl = 1021, Nt = 1023, Xl = 1024, Yl = 1025, vn = 1026, ri = 1027, jl = 1028, Zl = 1029, Kl = 1030, Jl = 1031, $l = 1033, _r = 33776, gr = 33777, xr = 33778, vr = 33779, Fs = 35840, Os = 35841, Bs = 35842, zs = 35843, Ql = 36196, Gs = 37492, Hs = 37496, Vs = 37808, ks = 37809, Ws = 37810, Xs = 37811, Ys = 37812, js = 37813, Zs = 37814, Ks = 37815, Js = 37816, $s = 37817, Qs = 37818, ea = 37819, ta = 37820, na = 37821, Mr = 36492, ec = 36283, ia = 36284, ra = 36285, sa = 36286, bo = 3e3, Mn = 3001, tc = 3200, nc = 3201, Ao = 0, ic = 1, Sn = "", Ie = "srgb", Ht = "srgb-linear", wo = "display-p3", Sr = 7680, rc = 519, aa = 35044, Po = 35048, oa = "300 es", rs = 1035;
class Pn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0)
      return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0)
      return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0)
      return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const r = n.slice(0);
      for (let s = 0, o = r.length; s < o; s++)
        r[s].call(this, e);
      e.target = null;
    }
  }
}
const ct = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Er = Math.PI / 180, ss = 180 / Math.PI;
function ai() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ct[i & 255] + ct[i >> 8 & 255] + ct[i >> 16 & 255] + ct[i >> 24 & 255] + "-" + ct[e & 255] + ct[e >> 8 & 255] + "-" + ct[e >> 16 & 15 | 64] + ct[e >> 24 & 255] + "-" + ct[t & 63 | 128] + ct[t >> 8 & 255] + "-" + ct[t >> 16 & 255] + ct[t >> 24 & 255] + ct[n & 255] + ct[n >> 8 & 255] + ct[n >> 16 & 255] + ct[n >> 24 & 255]).toLowerCase();
}
function at(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function sc(i, e) {
  return (i % e + e) % e;
}
function yr(i, e, t) {
  return (1 - t) * i + t * e;
}
function la(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function ac(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Ri(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return i / 65535;
    case Uint8Array:
      return i / 255;
    case Int16Array:
      return Math.max(i / 32767, -1);
    case Int8Array:
      return Math.max(i / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function gt(i, e) {
  switch (e.constructor) {
    case Float32Array:
      return i;
    case Uint16Array:
      return Math.round(i * 65535);
    case Uint8Array:
      return Math.round(i * 255);
    case Int16Array:
      return Math.round(i * 32767);
    case Int8Array:
      return Math.round(i * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
class ue {
  constructor(e = 0, t = 0) {
    ue.prototype.isVector2 = !0, this.x = e, this.y = t;
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
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
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
    const t = this.x, n = this.y, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n + r[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
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
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this;
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
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(at(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
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
    const n = Math.cos(t), r = Math.sin(t), s = this.x - e.x, o = this.y - e.y;
    return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class He {
  constructor() {
    He.prototype.isMatrix3 = !0, this.elements = [
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ];
  }
  set(e, t, n, r, s, o, a, c, l) {
    const u = this.elements;
    return u[0] = e, u[1] = r, u[2] = a, u[3] = t, u[4] = s, u[5] = c, u[6] = n, u[7] = o, u[8] = l, this;
  }
  identity() {
    return this.set(
      1,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      1
    ), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[4],
      t[8],
      t[1],
      t[5],
      t[9],
      t[2],
      t[6],
      t[10]
    ), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], u = n[4], d = n[7], f = n[2], p = n[5], _ = n[8], g = r[0], m = r[3], h = r[6], S = r[1], x = r[4], b = r[7], y = r[2], w = r[5], q = r[8];
    return s[0] = o * g + a * S + c * y, s[3] = o * m + a * x + c * w, s[6] = o * h + a * b + c * q, s[1] = l * g + u * S + d * y, s[4] = l * m + u * x + d * w, s[7] = l * h + u * b + d * q, s[2] = f * g + p * S + _ * y, s[5] = f * m + p * x + _ * w, s[8] = f * h + p * b + _ * q, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8];
    return t * o * u - t * a * l - n * s * u + n * a * c + r * s * l - r * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], d = u * o - a * l, f = a * c - u * s, p = l * s - o * c, _ = t * d + n * f + r * p;
    if (_ === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const g = 1 / _;
    return e[0] = d * g, e[1] = (r * l - u * n) * g, e[2] = (a * n - r * o) * g, e[3] = f * g, e[4] = (u * t - r * c) * g, e[5] = (r * s - a * t) * g, e[6] = p * g, e[7] = (n * c - l * t) * g, e[8] = (o * t - n * s) * g, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, r, s, o, a) {
    const c = Math.cos(s), l = Math.sin(s);
    return this.set(
      n * c,
      n * l,
      -n * (c * o + l * a) + o + e,
      -r * l,
      r * c,
      -r * (-l * o + c * a) + a + t,
      0,
      0,
      1
    ), this;
  }
  //
  scale(e, t) {
    return this.premultiply(Tr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Tr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Tr.makeTranslation(e, t)), this;
  }
  // for 2D Transforms
  makeTranslation(e, t) {
    return this.set(
      1,
      0,
      e,
      0,
      1,
      t,
      0,
      0,
      1
    ), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      n,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t) {
    return this.set(
      e,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      1
    ), this;
  }
  //
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 9; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Tr = /* @__PURE__ */ new He();
function Ro(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function rr(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
const ca = {};
function gi(i) {
  i in ca || (ca[i] = !0, console.warn(i));
}
function $n(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function br(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const oc = /* @__PURE__ */ new He().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), lc = /* @__PURE__ */ new He().fromArray([
  1.2249401,
  -0.0420569,
  -0.0196376,
  -0.2249404,
  1.0420571,
  -0.0786361,
  1e-7,
  0,
  1.0982735
]);
function cc(i) {
  return i.convertSRGBToLinear().applyMatrix3(lc);
}
function uc(i) {
  return i.applyMatrix3(oc).convertLinearToSRGB();
}
const hc = {
  [Ht]: (i) => i,
  [Ie]: (i) => i.convertSRGBToLinear(),
  [wo]: cc
}, dc = {
  [Ht]: (i) => i,
  [Ie]: (i) => i.convertLinearToSRGB(),
  [wo]: uc
}, Ct = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(i) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !i;
  },
  get workingColorSpace() {
    return Ht;
  },
  set workingColorSpace(i) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = hc[e], r = dc[t];
    if (n === void 0 || r === void 0)
      throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);
    return r(n(i));
  },
  fromWorkingColorSpace: function(i, e) {
    return this.convert(i, this.workingColorSpace, e);
  },
  toWorkingColorSpace: function(i, e) {
    return this.convert(i, e, this.workingColorSpace);
  }
};
let Ln;
class Co {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Ln === void 0 && (Ln = rr("canvas")), Ln.width = e.width, Ln.height = e.height;
      const n = Ln.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Ln;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = rr("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = $n(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor($n(t[n] / 255) * 255) : t[n] = $n(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Lo {
  constructor(e = null) {
    this.isSource = !0, this.uuid = ai(), this.data = e, this.version = 0;
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0)
      return e.images[this.uuid];
    const n = {
      uuid: this.uuid,
      url: ""
    }, r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let o = 0, a = r.length; o < a; o++)
          r[o].isDataTexture ? s.push(Ar(r[o].image)) : s.push(Ar(r[o]));
      } else
        s = Ar(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Ar(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Co.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let fc = 0;
class Mt extends Pn {
  constructor(e = Mt.DEFAULT_IMAGE, t = Mt.DEFAULT_MAPPING, n = It, r = It, s = At, o = Ei, a = Nt, c = En, l = Mt.DEFAULT_ANISOTROPY, u = Sn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: fc++ }), this.uuid = ai(), this.name = "", this.source = new Lo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new ue(0, 0), this.repeat = new ue(1, 1), this.center = new ue(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new He(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof u == "string" ? this.colorSpace = u : (gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = u === Mn ? Ie : Sn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = !0, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0)
      return e.textures[this.uuid];
    const n = {
      metadata: {
        version: 4.5,
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
    if (this.mapping !== yo)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case ns:
          e.x = e.x - Math.floor(e.x);
          break;
        case It:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case is:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case ns:
          e.y = e.y - Math.floor(e.y);
          break;
        case It:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case is:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Ie ? Mn : bo;
  }
  set encoding(e) {
    gi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Mn ? Ie : Sn;
  }
}
Mt.DEFAULT_IMAGE = null;
Mt.DEFAULT_MAPPING = yo;
Mt.DEFAULT_ANISOTROPY = 1;
class je {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    je.prototype.isVector4 = !0, this.x = e, this.y = t, this.z = n, this.w = r;
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
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
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
    const t = this.x, n = this.y, r = this.z, s = this.w, o = e.elements;
    return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] * t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s, this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, r, s;
    const c = e.elements, l = c[0], u = c[4], d = c[8], f = c[1], p = c[5], _ = c[9], g = c[2], m = c[6], h = c[10];
    if (Math.abs(u - f) < 0.01 && Math.abs(d - g) < 0.01 && Math.abs(_ - m) < 0.01) {
      if (Math.abs(u + f) < 0.1 && Math.abs(d + g) < 0.1 && Math.abs(_ + m) < 0.1 && Math.abs(l + p + h - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const x = (l + 1) / 2, b = (p + 1) / 2, y = (h + 1) / 2, w = (u + f) / 4, q = (d + g) / 4, N = (_ + m) / 4;
      return x > b && x > y ? x < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(x), r = w / n, s = q / n) : b > y ? b < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(b), n = w / r, s = N / r) : y < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(y), n = q / s, r = N / s), this.set(n, r, s, t), this;
    }
    let S = Math.sqrt((m - _) * (m - _) + (d - g) * (d - g) + (f - u) * (f - u));
    return Math.abs(S) < 1e-3 && (S = 1), this.x = (m - _) / S, this.y = (d - g) / S, this.z = (f - u) / S, this.w = Math.acos((l + p + h - 1) / 2), this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
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
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w), this;
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
}
class yn extends Pn {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new je(0, 0, e, t), this.scissorTest = !1, this.viewport = new je(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (gi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Mn ? Ie : Sn), this.texture = new Mt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : At, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height = t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture.image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture.clone(), this.texture.isRenderTargetTexture = !0;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Lo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class qo extends Mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = pt, this.minFilter = pt, this.wrapR = It, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class pc extends Mt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = pt, this.minFilter = pt, this.wrapR = It, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class Tn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let c = n[r + 0], l = n[r + 1], u = n[r + 2], d = n[r + 3];
    const f = s[o + 0], p = s[o + 1], _ = s[o + 2], g = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
      return;
    }
    if (a === 1) {
      e[t + 0] = f, e[t + 1] = p, e[t + 2] = _, e[t + 3] = g;
      return;
    }
    if (d !== g || c !== f || l !== p || u !== _) {
      let m = 1 - a;
      const h = c * f + l * p + u * _ + d * g, S = h >= 0 ? 1 : -1, x = 1 - h * h;
      if (x > Number.EPSILON) {
        const y = Math.sqrt(x), w = Math.atan2(y, h * S);
        m = Math.sin(m * w) / y, a = Math.sin(a * w) / y;
      }
      const b = a * S;
      if (c = c * m + f * b, l = l * m + p * b, u = u * m + _ * b, d = d * m + g * b, m === 1 - a) {
        const y = 1 / Math.sqrt(c * c + l * l + u * u + d * d);
        c *= y, l *= y, u *= y, d *= y;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = u, e[t + 3] = d;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], c = n[r + 1], l = n[r + 2], u = n[r + 3], d = s[o], f = s[o + 1], p = s[o + 2], _ = s[o + 3];
    return e[t] = a * _ + u * d + c * p - l * f, e[t + 1] = c * _ + u * f + l * d - a * p, e[t + 2] = l * _ + u * p + a * f - c * d, e[t + 3] = u * _ - a * d - c * f - l * p, e;
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
  setFromEuler(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), u = a(r / 2), d = a(s / 2), f = c(n / 2), p = c(r / 2), _ = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = f * u * d + l * p * _, this._y = l * p * d - f * u * _, this._z = l * u * _ + f * p * d, this._w = l * u * d - f * p * _;
        break;
      case "YXZ":
        this._x = f * u * d + l * p * _, this._y = l * p * d - f * u * _, this._z = l * u * _ - f * p * d, this._w = l * u * d + f * p * _;
        break;
      case "ZXY":
        this._x = f * u * d - l * p * _, this._y = l * p * d + f * u * _, this._z = l * u * _ + f * p * d, this._w = l * u * d - f * p * _;
        break;
      case "ZYX":
        this._x = f * u * d - l * p * _, this._y = l * p * d + f * u * _, this._z = l * u * _ - f * p * d, this._w = l * u * d + f * p * _;
        break;
      case "YZX":
        this._x = f * u * d + l * p * _, this._y = l * p * d + f * u * _, this._z = l * u * _ - f * p * d, this._w = l * u * d - f * p * _;
        break;
      case "XZY":
        this._x = f * u * d - l * p * _, this._y = l * p * d - f * u * _, this._z = l * u * _ + f * p * d, this._w = l * u * d + f * p * _;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o);
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, r = Math.sin(n);
    return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], u = t[6], d = t[10], f = n + a + d;
    if (f > 0) {
      const p = 0.5 / Math.sqrt(f + 1);
      this._w = 0.25 / p, this._x = (u - c) * p, this._y = (s - l) * p, this._z = (o - r) * p;
    } else if (n > a && n > d) {
      const p = 2 * Math.sqrt(1 + n - a - d);
      this._w = (u - c) / p, this._x = 0.25 * p, this._y = (r + o) / p, this._z = (s + l) / p;
    } else if (a > d) {
      const p = 2 * Math.sqrt(1 + a - n - d);
      this._w = (s - l) / p, this._x = (r + o) / p, this._y = 0.25 * p, this._z = (c + u) / p;
    } else {
      const p = 2 * Math.sqrt(1 + d - n - a);
      this._w = (o - r) / p, this._x = (s + l) / p, this._y = (c + u) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(at(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0)
      return this;
    const r = Math.min(1, t / n);
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
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, u = t._w;
    return this._x = n * u + o * a + r * l - s * c, this._y = r * u + o * c + s * a - n * l, this._z = s * u + o * l + n * c - r * a, this._w = o * u - n * a - r * c - s * l, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0)
      return this;
    if (t === 1)
      return this.copy(e);
    const n = this._x, r = this._y, s = this._z, o = this._w;
    let a = o * e._w + n * e._x + r * e._y + s * e._z;
    if (a < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
      return this._w = o, this._x = n, this._y = r, this._z = s, this;
    const c = 1 - a * a;
    if (c <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * o + t * this._w, this._x = p * n + t * this._x, this._y = p * r + t * this._y, this._z = p * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), u = Math.atan2(l, a), d = Math.sin((1 - t) * u) / l, f = Math.sin(t * u) / l;
    return this._w = o * d + this._w * f, this._x = n * d + this._x * f, this._y = r * d + this._y * f, this._z = s * d + this._z * f, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(), t = Math.sqrt(1 - e), n = Math.sqrt(e), r = 2 * Math.PI * Math.random(), s = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(r),
      n * Math.sin(s),
      n * Math.cos(s),
      t * Math.sin(r)
    );
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
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = !0, this.x = e, this.y = t, this.z = n;
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
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
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
    return this.applyQuaternion(ua.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(ua.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] * n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements, o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[2] * t + s[6] * n + s[10] * r + s[14]) * o, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * r - a * n, u = c * n + a * t - s * r, d = c * r + s * n - o * t, f = -s * t - o * n - a * r;
    return this.x = l * c + f * -s + u * -a - d * -o, this.y = u * c + f * -o + d * -s - l * -a, this.z = d * c + f * -a + l * -o - u * -s, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, r = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] * n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize();
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
    return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this;
  }
  clampScalar(e, t) {
    return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this.z = Math.max(e, Math.min(t, this.z)), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)));
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
    return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x), this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y), this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  // TODO lengthSquared?
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
    const n = e.x, r = e.y, s = e.z, o = t.x, a = t.y, c = t.z;
    return this.x = r * c - s * a, this.y = s * o - n * c, this.z = n * a - r * o, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0)
      return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return wr.copy(this).projectOnVector(e), this.sub(wr);
  }
  reflect(e) {
    return this.sub(wr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0)
      return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(at(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, r = this.z - e.z;
    return t * t + n * n + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const r = Math.sin(t) * e;
    return this.x = r * Math.sin(n), this.y = Math.cos(t) * e, this.z = r * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), r = this.setFromMatrixColumn(e, 2).length();
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
    const e = (Math.random() - 0.5) * 2, t = Math.random() * Math.PI * 2, n = Math.sqrt(1 - e ** 2);
    return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this.z = e, this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const wr = /* @__PURE__ */ new R(), ua = /* @__PURE__ */ new Tn();
class wi {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Wt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Wt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Wt.copy(t).multiplyScalar(0.5);
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
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
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
    if (e.updateWorldMatrix(!1, !1), e.boundingBox !== void 0)
      e.boundingBox === null && e.computeBoundingBox(), qn.copy(e.boundingBox), qn.applyMatrix4(e.matrixWorld), this.union(qn);
    else {
      const r = e.geometry;
      if (r !== void 0)
        if (t && r.attributes !== void 0 && r.attributes.position !== void 0) {
          const s = r.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            Wt.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(Wt);
        } else
          r.boundingBox === null && r.computeBoundingBox(), qn.copy(r.boundingBox), qn.applyMatrix4(e.matrixWorld), this.union(qn);
    }
    const n = e.children;
    for (let r = 0, s = n.length; r < s; r++)
      this.expandByObject(n[r], t);
    return this;
  }
  containsPoint(e) {
    return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z);
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Wt), Wt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(ui), Ci.subVectors(this.max, ui), Dn.subVectors(e.a, ui), Un.subVectors(e.b, ui), In.subVectors(e.c, ui), en.subVectors(Un, Dn), tn.subVectors(In, Un), hn.subVectors(Dn, In);
    let t = [
      0,
      -en.z,
      en.y,
      0,
      -tn.z,
      tn.y,
      0,
      -hn.z,
      hn.y,
      en.z,
      0,
      -en.x,
      tn.z,
      0,
      -tn.x,
      hn.z,
      0,
      -hn.x,
      -en.y,
      en.x,
      0,
      -tn.y,
      tn.x,
      0,
      -hn.y,
      hn.x,
      0
    ];
    return !Pr(t, Dn, Un, In, Ci) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Pr(t, Dn, Un, In, Ci)) ? !1 : (Li.crossVectors(en, tn), t = [Li.x, Li.y, Li.z], Pr(t, Dn, Un, In, Ci));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Wt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Wt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (kt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), kt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), kt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), kt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), kt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), kt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), kt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), kt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(kt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const kt = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], Wt = /* @__PURE__ */ new R(), qn = /* @__PURE__ */ new wi(), Dn = /* @__PURE__ */ new R(), Un = /* @__PURE__ */ new R(), In = /* @__PURE__ */ new R(), en = /* @__PURE__ */ new R(), tn = /* @__PURE__ */ new R(), hn = /* @__PURE__ */ new R(), ui = /* @__PURE__ */ new R(), Ci = /* @__PURE__ */ new R(), Li = /* @__PURE__ */ new R(), dn = /* @__PURE__ */ new R();
function Pr(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    dn.fromArray(i, s);
    const a = r.x * Math.abs(dn.x) + r.y * Math.abs(dn.y) + r.z * Math.abs(dn.z), c = e.dot(dn), l = t.dot(dn), u = n.dot(dn);
    if (Math.max(-Math.max(c, l, u), Math.min(c, l, u)) > a)
      return !1;
  }
  return !0;
}
const mc = /* @__PURE__ */ new wi(), hi = /* @__PURE__ */ new R(), Rr = /* @__PURE__ */ new R();
class ar {
  constructor(e = new R(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : mc.setFromPoints(e).getCenter(n);
    let r = 0;
    for (let s = 0, o = e.length; s < o; s++)
      r = Math.max(r, n.distanceToSquared(e[s]));
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
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty())
      return this.center.copy(e), this.radius = 0, this;
    hi.subVectors(e, this.center);
    const t = hi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(hi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Rr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(hi.copy(e.center).add(Rr)), this.expandByPoint(hi.copy(e.center).sub(Rr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Xt = /* @__PURE__ */ new R(), Cr = /* @__PURE__ */ new R(), qi = /* @__PURE__ */ new R(), nn = /* @__PURE__ */ new R(), Lr = /* @__PURE__ */ new R(), Di = /* @__PURE__ */ new R(), qr = /* @__PURE__ */ new R();
class Do {
  constructor(e = new R(), t = new R(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, Xt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Xt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Xt.copy(this.origin).addScaledVector(this.direction, t), Xt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Cr.copy(e).add(t).multiplyScalar(0.5), qi.copy(t).sub(e).normalize(), nn.copy(this.origin).sub(Cr);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(qi), a = nn.dot(this.direction), c = -nn.dot(qi), l = nn.lengthSq(), u = Math.abs(1 - o * o);
    let d, f, p, _;
    if (u > 0)
      if (d = o * c - a, f = o * a - c, _ = s * u, d >= 0)
        if (f >= -_)
          if (f <= _) {
            const g = 1 / u;
            d *= g, f *= g, p = d * (d + o * f + 2 * a) + f * (o * d + f + 2 * c) + l;
          } else
            f = s, d = Math.max(0, -(o * f + a)), p = -d * d + f * (f + 2 * c) + l;
        else
          f = -s, d = Math.max(0, -(o * f + a)), p = -d * d + f * (f + 2 * c) + l;
      else
        f <= -_ ? (d = Math.max(0, -(-o * s + a)), f = d > 0 ? -s : Math.min(Math.max(-s, -c), s), p = -d * d + f * (f + 2 * c) + l) : f <= _ ? (d = 0, f = Math.min(Math.max(-s, -c), s), p = f * (f + 2 * c) + l) : (d = Math.max(0, -(o * s + a)), f = d > 0 ? s : Math.min(Math.max(-s, -c), s), p = -d * d + f * (f + 2 * c) + l);
    else
      f = o > 0 ? -s : s, d = Math.max(0, -(o * f + a)), p = -d * d + f * (f + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, d), r && r.copy(Cr).addScaledVector(qi, f), p;
  }
  intersectSphere(e, t) {
    Xt.subVectors(e.center, this.origin);
    const n = Xt.dot(this.direction), r = Xt.dot(Xt) - n * n, s = e.radius * e.radius;
    if (r > s)
      return null;
    const o = Math.sqrt(s - r), a = n - o, c = n + o;
    return c < 0 ? null : a < 0 ? this.at(c, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0)
      return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, r, s, o, a, c;
    const l = 1 / this.direction.x, u = 1 / this.direction.y, d = 1 / this.direction.z, f = this.origin;
    return l >= 0 ? (n = (e.min.x - f.x) * l, r = (e.max.x - f.x) * l) : (n = (e.max.x - f.x) * l, r = (e.min.x - f.x) * l), u >= 0 ? (s = (e.min.y - f.y) * u, o = (e.max.y - f.y) * u) : (s = (e.max.y - f.y) * u, o = (e.min.y - f.y) * u), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), d >= 0 ? (a = (e.min.z - f.z) * d, c = (e.max.z - f.z) * d) : (a = (e.max.z - f.z) * d, c = (e.min.z - f.z) * d), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Xt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Lr.subVectors(t, e), Di.subVectors(n, e), qr.crossVectors(Lr, Di);
    let o = this.direction.dot(qr), a;
    if (o > 0) {
      if (r)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    nn.subVectors(this.origin, e);
    const c = a * this.direction.dot(Di.crossVectors(nn, Di));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Lr.cross(nn));
    if (l < 0 || c + l > o)
      return null;
    const u = -a * nn.dot(qr);
    return u < 0 ? null : this.at(u / o, s);
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
}
class Ke {
  constructor() {
    Ke.prototype.isMatrix4 = !0, this.elements = [
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
    ];
  }
  set(e, t, n, r, s, o, a, c, l, u, d, f, p, _, g, m) {
    const h = this.elements;
    return h[0] = e, h[4] = t, h[8] = n, h[12] = r, h[1] = s, h[5] = o, h[9] = a, h[13] = c, h[2] = l, h[6] = u, h[10] = d, h[14] = f, h[3] = p, h[7] = _, h[11] = g, h[15] = m, this;
  }
  identity() {
    return this.set(
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
    ), this;
  }
  clone() {
    return new Ke().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(
      t[0],
      t[3],
      t[6],
      0,
      t[1],
      t[4],
      t[7],
      0,
      t[2],
      t[5],
      t[8],
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(
      e.x,
      t.x,
      n.x,
      0,
      e.y,
      t.y,
      n.y,
      0,
      e.z,
      t.z,
      n.z,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, r = 1 / Nn.setFromMatrixColumn(e, 0).length(), s = 1 / Nn.setFromMatrixColumn(e, 1).length(), o = 1 / Nn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), u = Math.cos(s), d = Math.sin(s);
    if (e.order === "XYZ") {
      const f = o * u, p = o * d, _ = a * u, g = a * d;
      t[0] = c * u, t[4] = -c * d, t[8] = l, t[1] = p + _ * l, t[5] = f - g * l, t[9] = -a * c, t[2] = g - f * l, t[6] = _ + p * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const f = c * u, p = c * d, _ = l * u, g = l * d;
      t[0] = f + g * a, t[4] = _ * a - p, t[8] = o * l, t[1] = o * d, t[5] = o * u, t[9] = -a, t[2] = p * a - _, t[6] = g + f * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const f = c * u, p = c * d, _ = l * u, g = l * d;
      t[0] = f - g * a, t[4] = -o * d, t[8] = _ + p * a, t[1] = p + _ * a, t[5] = o * u, t[9] = g - f * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const f = o * u, p = o * d, _ = a * u, g = a * d;
      t[0] = c * u, t[4] = _ * l - p, t[8] = f * l + g, t[1] = c * d, t[5] = g * l + f, t[9] = p * l - _, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const f = o * c, p = o * l, _ = a * c, g = a * l;
      t[0] = c * u, t[4] = g - f * d, t[8] = _ * d + p, t[1] = d, t[5] = o * u, t[9] = -a * u, t[2] = -l * u, t[6] = p * d + _, t[10] = f - g * d;
    } else if (e.order === "XZY") {
      const f = o * c, p = o * l, _ = a * c, g = a * l;
      t[0] = c * u, t[4] = -d, t[8] = l * u, t[1] = f * d + g, t[5] = o * u, t[9] = p * d - _, t[2] = _ * d - p, t[6] = a * u, t[10] = g * d + f;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(_c, e, gc);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return xt.subVectors(e, t), xt.lengthSq() === 0 && (xt.z = 1), xt.normalize(), rn.crossVectors(n, xt), rn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? xt.x += 1e-4 : xt.z += 1e-4, xt.normalize(), rn.crossVectors(n, xt)), rn.normalize(), Ui.crossVectors(xt, rn), r[0] = rn.x, r[4] = Ui.x, r[8] = xt.x, r[1] = rn.y, r[5] = Ui.y, r[9] = xt.y, r[2] = rn.z, r[6] = Ui.z, r[10] = xt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], u = n[1], d = n[5], f = n[9], p = n[13], _ = n[2], g = n[6], m = n[10], h = n[14], S = n[3], x = n[7], b = n[11], y = n[15], w = r[0], q = r[4], N = r[8], v = r[12], A = r[1], H = r[5], ne = r[9], D = r[13], O = r[2], G = r[6], te = r[10], Z = r[14], V = r[3], K = r[7], $ = r[11], ce = r[15];
    return s[0] = o * w + a * A + c * O + l * V, s[4] = o * q + a * H + c * G + l * K, s[8] = o * N + a * ne + c * te + l * $, s[12] = o * v + a * D + c * Z + l * ce, s[1] = u * w + d * A + f * O + p * V, s[5] = u * q + d * H + f * G + p * K, s[9] = u * N + d * ne + f * te + p * $, s[13] = u * v + d * D + f * Z + p * ce, s[2] = _ * w + g * A + m * O + h * V, s[6] = _ * q + g * H + m * G + h * K, s[10] = _ * N + g * ne + m * te + h * $, s[14] = _ * v + g * D + m * Z + h * ce, s[3] = S * w + x * A + b * O + y * V, s[7] = S * q + x * H + b * G + y * K, s[11] = S * N + x * ne + b * te + y * $, s[15] = S * v + x * D + b * Z + y * ce, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], u = e[2], d = e[6], f = e[10], p = e[14], _ = e[3], g = e[7], m = e[11], h = e[15];
    return _ * (+s * c * d - r * l * d - s * a * f + n * l * f + r * a * p - n * c * p) + g * (+t * c * p - t * l * f + s * o * f - r * o * p + r * l * u - s * c * u) + m * (+t * l * d - t * a * p - s * o * d + n * o * p + s * a * u - n * l * u) + h * (-r * a * u - t * c * d + t * a * f + r * o * d - n * o * f + n * c * u);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const r = this.elements;
    return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[13] = t, r[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], u = e[8], d = e[9], f = e[10], p = e[11], _ = e[12], g = e[13], m = e[14], h = e[15], S = d * m * l - g * f * l + g * c * p - a * m * p - d * c * h + a * f * h, x = _ * f * l - u * m * l - _ * c * p + o * m * p + u * c * h - o * f * h, b = u * g * l - _ * d * l + _ * a * p - o * g * p - u * a * h + o * d * h, y = _ * d * c - u * g * c - _ * a * f + o * g * f + u * a * m - o * d * m, w = t * S + n * x + r * b + s * y;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const q = 1 / w;
    return e[0] = S * q, e[1] = (g * f * s - d * m * s - g * r * p + n * m * p + d * r * h - n * f * h) * q, e[2] = (a * m * s - g * c * s + g * r * l - n * m * l - a * r * h + n * c * h) * q, e[3] = (d * c * s - a * f * s - d * r * l + n * f * l + a * r * p - n * c * p) * q, e[4] = x * q, e[5] = (u * m * s - _ * f * s + _ * r * p - t * m * p - u * r * h + t * f * h) * q, e[6] = (_ * c * s - o * m * s - _ * r * l + t * m * l + o * r * h - t * c * h) * q, e[7] = (o * f * s - u * c * s + u * r * l - t * f * l - o * r * p + t * c * p) * q, e[8] = b * q, e[9] = (_ * d * s - u * g * s - _ * n * p + t * g * p + u * n * h - t * d * h) * q, e[10] = (o * g * s - _ * a * s + _ * n * l - t * g * l - o * n * h + t * a * h) * q, e[11] = (u * a * s - o * d * s - u * n * l + t * d * l + o * n * p - t * a * p) * q, e[12] = y * q, e[13] = (u * g * r - _ * d * r + _ * n * f - t * g * f - u * n * m + t * d * m) * q, e[14] = (_ * a * r - o * g * r - _ * n * c + t * g * c + o * n * m - t * a * m) * q, e[15] = (o * d * r - u * a * r + u * n * c - t * d * c - o * n * f + t * a * f) * q, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z;
    return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n, t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, r));
  }
  makeTranslation(e, t, n) {
    return this.set(
      1,
      0,
      0,
      e,
      0,
      1,
      0,
      t,
      0,
      0,
      1,
      n,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      1,
      0,
      0,
      0,
      0,
      t,
      -n,
      0,
      0,
      n,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      0,
      n,
      0,
      0,
      1,
      0,
      0,
      -n,
      0,
      t,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(
      t,
      -n,
      0,
      0,
      n,
      t,
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
    ), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, u = s * a;
    return this.set(
      l * o + n,
      l * a - r * c,
      l * c + r * a,
      0,
      l * a + r * c,
      u * a + n,
      u * c - r * o,
      0,
      l * c - r * a,
      u * c + r * o,
      s * c * c + n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeScale(e, t, n) {
    return this.set(
      e,
      0,
      0,
      0,
      0,
      t,
      0,
      0,
      0,
      0,
      n,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  makeShear(e, t, n, r, s, o) {
    return this.set(
      1,
      n,
      s,
      0,
      e,
      1,
      o,
      0,
      t,
      r,
      1,
      0,
      0,
      0,
      0,
      1
    ), this;
  }
  compose(e, t, n) {
    const r = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, u = o + o, d = a + a, f = s * l, p = s * u, _ = s * d, g = o * u, m = o * d, h = a * d, S = c * l, x = c * u, b = c * d, y = n.x, w = n.y, q = n.z;
    return r[0] = (1 - (g + h)) * y, r[1] = (p + b) * y, r[2] = (_ - x) * y, r[3] = 0, r[4] = (p - b) * w, r[5] = (1 - (f + h)) * w, r[6] = (m + S) * w, r[7] = 0, r[8] = (_ + x) * q, r[9] = (m - S) * q, r[10] = (1 - (f + g)) * q, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Nn.set(r[0], r[1], r[2]).length();
    const o = Nn.set(r[4], r[5], r[6]).length(), a = Nn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Lt.copy(this);
    const l = 1 / s, u = 1 / o, d = 1 / a;
    return Lt.elements[0] *= l, Lt.elements[1] *= l, Lt.elements[2] *= l, Lt.elements[4] *= u, Lt.elements[5] *= u, Lt.elements[6] *= u, Lt.elements[8] *= d, Lt.elements[9] *= d, Lt.elements[10] *= d, t.setFromRotationMatrix(Lt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o) {
    const a = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - r), u = (t + e) / (t - e), d = (n + r) / (n - r), f = -(o + s) / (o - s), p = -2 * o * s / (o - s);
    return a[0] = c, a[4] = 0, a[8] = u, a[12] = 0, a[1] = 0, a[5] = l, a[9] = d, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = f, a[14] = p, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - r), u = 1 / (o - s), d = (t + e) * c, f = (n + r) * l, p = (o + s) * u;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -d, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -f, a[2] = 0, a[6] = 0, a[10] = -2 * u, a[14] = -p, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let r = 0; r < 16; r++)
      if (t[r] !== n[r])
        return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++)
      this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Nn = /* @__PURE__ */ new R(), Lt = /* @__PURE__ */ new Ke(), _c = /* @__PURE__ */ new R(0, 0, 0), gc = /* @__PURE__ */ new R(1, 1, 1), rn = /* @__PURE__ */ new R(), Ui = /* @__PURE__ */ new R(), xt = /* @__PURE__ */ new R(), ha = /* @__PURE__ */ new Ke(), da = /* @__PURE__ */ new Tn();
class or {
  constructor(e = 0, t = 0, n = 0, r = or.DEFAULT_ORDER) {
    this.isEuler = !0, this._x = e, this._y = t, this._z = n, this._order = r;
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
    const r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], u = r[9], d = r[2], f = r[6], p = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(at(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-u, p), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(f, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-at(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._y = Math.atan2(a, p), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-d, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(at(f, -1, 1)), Math.abs(f) < 0.9999999 ? (this._y = Math.atan2(-d, p), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-at(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._x = Math.atan2(f, p), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(at(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-u, l), this._y = Math.atan2(-d, s)) : (this._x = 0, this._y = Math.atan2(a, p));
        break;
      case "XZY":
        this._z = Math.asin(-at(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(f, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-u, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ha.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ha, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return da.setFromEuler(this), this.setFromQuaternion(da, e);
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
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
or.DEFAULT_ORDER = "XYZ";
class Uo {
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
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let xc = 0;
const fa = /* @__PURE__ */ new R(), Fn = /* @__PURE__ */ new Tn(), Yt = /* @__PURE__ */ new Ke(), Ii = /* @__PURE__ */ new R(), di = /* @__PURE__ */ new R(), vc = /* @__PURE__ */ new R(), Mc = /* @__PURE__ */ new Tn(), pa = /* @__PURE__ */ new R(1, 0, 0), ma = /* @__PURE__ */ new R(0, 1, 0), _a = /* @__PURE__ */ new R(0, 0, 1), Sc = { type: "added" }, ga = { type: "removed" };
class ot extends Pn {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: xc++ }), this.uuid = ai(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DEFAULT_UP.clone();
    const e = new R(), t = new or(), n = new Tn(), r = new R(1, 1, 1);
    function s() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(s), n._onChange(o), Object.defineProperties(this, {
      position: {
        configurable: !0,
        enumerable: !0,
        value: e
      },
      rotation: {
        configurable: !0,
        enumerable: !0,
        value: t
      },
      quaternion: {
        configurable: !0,
        enumerable: !0,
        value: n
      },
      scale: {
        configurable: !0,
        enumerable: !0,
        value: r
      },
      modelViewMatrix: {
        value: new Ke()
      },
      normalMatrix: {
        value: new He()
      }
    }), this.matrix = new Ke(), this.matrixWorld = new Ke(), this.matrixAutoUpdate = ot.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Uo(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
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
    return Fn.setFromAxisAngle(e, t), this.quaternion.multiply(Fn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Fn.setFromAxisAngle(e, t), this.quaternion.premultiply(Fn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(pa, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(ma, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(_a, e);
  }
  translateOnAxis(e, t) {
    return fa.copy(e).applyQuaternion(this.quaternion), this.position.add(fa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(pa, e);
  }
  translateY(e) {
    return this.translateOnAxis(ma, e);
  }
  translateZ(e) {
    return this.translateOnAxis(_a, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Yt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Ii.copy(e) : Ii.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), di.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Yt.lookAt(di, Ii, this.up) : Yt.lookAt(Ii, di, this.up), this.quaternion.setFromRotationMatrix(Yt), r && (Yt.extractRotation(r.matrixWorld), Fn.setFromRotationMatrix(Yt), this.quaternion.premultiply(Fn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Sc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ga)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(ga);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Yt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Yt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Yt), this.add(e), e.updateWorldMatrix(!1, !0), this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t)
      return this;
    for (let n = 0, r = this.children.length; n < r; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0)
        return o;
    }
  }
  getObjectsByProperty(e, t) {
    let n = [];
    this[e] === t && n.push(this);
    for (let r = 0, s = this.children.length; r < s; r++) {
      const o = this.children[r].getObjectsByProperty(e, t);
      o.length > 0 && (n = n.concat(o));
    }
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(di, e, vc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(di, Mc, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1)
      return;
    e(this);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++)
      t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !0;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
    const t = this.children;
    for (let n = 0, r = t.length; n < r; n++) {
      const s = t[n];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) {
      const r = this.children;
      for (let s = 0, o = r.length; s < o; s++) {
        const a = r[s];
        a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
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
      version: 4.5,
      type: "Object",
      generator: "Object3D.toJSON"
    });
    const r = {};
    r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this.castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r.frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers.mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r.count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON()));
    function s(a, c) {
      return a[c.uuid] === void 0 && (a[c.uuid] = c.toJSON(e)), c.uuid;
    }
    if (this.isScene)
      this.background && (this.background.isColor ? r.background = this.background.toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const c = a.shapes;
        if (Array.isArray(c))
          for (let l = 0, u = c.length; l < u; l++) {
            const d = c[l];
            s(e.shapes, d);
          }
        else
          s(e.shapes, c);
      }
    }
    if (this.isSkinnedMesh && (r.bindMode = this.bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
      if (Array.isArray(this.material)) {
        const a = [];
        for (let c = 0, l = this.material.length; c < l; c++)
          a.push(s(e.materials, this.material[c]));
        r.material = a;
      } else
        r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let a = 0; a < this.children.length; a++)
        r.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const c = this.animations[a];
        r.animations.push(s(e.animations, c));
      }
    }
    if (t) {
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), u = o(e.images), d = o(e.shapes), f = o(e.skeletons), p = o(e.animations), _ = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), u.length > 0 && (n.images = u), d.length > 0 && (n.shapes = d), f.length > 0 && (n.skeletons = f), p.length > 0 && (n.animations = p), _.length > 0 && (n.nodes = _);
    }
    return n.object = r, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const u = a[l];
        delete u.metadata, c.push(u);
      }
      return c;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations, this.userData = JSON.parse(JSON.stringify(e.userData)), t === !0)
      for (let n = 0; n < e.children.length; n++) {
        const r = e.children[n];
        this.add(r.clone());
      }
    return this;
  }
}
ot.DEFAULT_UP = /* @__PURE__ */ new R(0, 1, 0);
ot.DEFAULT_MATRIX_AUTO_UPDATE = !0;
ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const qt = /* @__PURE__ */ new R(), jt = /* @__PURE__ */ new R(), Dr = /* @__PURE__ */ new R(), Zt = /* @__PURE__ */ new R(), On = /* @__PURE__ */ new R(), Bn = /* @__PURE__ */ new R(), xa = /* @__PURE__ */ new R(), Ur = /* @__PURE__ */ new R(), Ir = /* @__PURE__ */ new R(), Nr = /* @__PURE__ */ new R();
let Ni = !1;
class Ut {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), qt.subVectors(e, t), r.cross(qt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    qt.subVectors(r, t), jt.subVectors(n, t), Dr.subVectors(e, t);
    const o = qt.dot(qt), a = qt.dot(jt), c = qt.dot(Dr), l = jt.dot(jt), u = jt.dot(Dr), d = o * l - a * a;
    if (d === 0)
      return s.set(-2, -1, -1);
    const f = 1 / d, p = (l * c - a * u) * f, _ = (o * u - a * c) * f;
    return s.set(1 - p - _, _, p);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Zt), Zt.x >= 0 && Zt.y >= 0 && Zt.x + Zt.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, c) {
    return Ni === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ni = !0), this.getInterpolation(e, t, n, r, s, o, a, c);
  }
  static getInterpolation(e, t, n, r, s, o, a, c) {
    return this.getBarycoord(e, t, n, r, Zt), c.setScalar(0), c.addScaledVector(s, Zt.x), c.addScaledVector(o, Zt.y), c.addScaledVector(a, Zt.z), c;
  }
  static isFrontFacing(e, t, n, r) {
    return qt.subVectors(n, t), jt.subVectors(e, t), qt.cross(jt).dot(r) < 0;
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
    return qt.subVectors(this.c, this.b), jt.subVectors(this.a, this.b), qt.cross(jt).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Ut.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Ut.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Ni === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Ni = !0), Ut.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return Ut.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return Ut.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Ut.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    On.subVectors(r, n), Bn.subVectors(s, n), Ur.subVectors(e, n);
    const c = On.dot(Ur), l = Bn.dot(Ur);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Ir.subVectors(e, r);
    const u = On.dot(Ir), d = Bn.dot(Ir);
    if (u >= 0 && d <= u)
      return t.copy(r);
    const f = c * d - u * l;
    if (f <= 0 && c >= 0 && u <= 0)
      return o = c / (c - u), t.copy(n).addScaledVector(On, o);
    Nr.subVectors(e, s);
    const p = On.dot(Nr), _ = Bn.dot(Nr);
    if (_ >= 0 && p <= _)
      return t.copy(s);
    const g = p * l - c * _;
    if (g <= 0 && l >= 0 && _ <= 0)
      return a = l / (l - _), t.copy(n).addScaledVector(Bn, a);
    const m = u * _ - p * d;
    if (m <= 0 && d - u >= 0 && p - _ >= 0)
      return xa.subVectors(s, r), a = (d - u) / (d - u + (p - _)), t.copy(r).addScaledVector(xa, a);
    const h = 1 / (m + g + f);
    return o = g * h, a = f * h, t.copy(n).addScaledVector(On, o).addScaledVector(Bn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Ec = 0;
class oi extends Pn {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Ec++ }), this.uuid = ai(), this.name = "", this.type = "Material", this.blending = Kn, this.side = on, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = So, this.blendDst = Eo, this.blendEquation = Yn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = Qr, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = rc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = Sr, this.stencilZFail = Sr, this.stencilZPass = Sr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBuild() {
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
          continue;
        }
        const r = this[t];
        if (r === void 0) {
          console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] = n;
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = {
      textures: {},
      images: {}
    });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Kn && (n.blending = this.blending), this.side !== on && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function r(s) {
      const o = [];
      for (const a in s) {
        const c = s[a];
        delete c.metadata, o.push(c);
      }
      return o;
    }
    if (t) {
      const s = r(e.textures), o = r(e.images);
      s.length > 0 && (n.textures = s), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const r = t.length;
      n = new Array(r);
      for (let s = 0; s !== r; ++s)
        n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
const Io = {
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
}, Dt = { h: 0, s: 0, l: 0 }, Fi = { h: 0, s: 0, l: 0 };
function Fr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ve {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ie) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ct.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Ct.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ct.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Ct.workingColorSpace) {
    if (e = sc(e, 1), t = at(t, 0, 1), n = at(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Fr(o, s, e + 1 / 3), this.g = Fr(o, s, e), this.b = Fr(o, s, e - 1 / 3);
    }
    return Ct.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ie) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let r;
    if (r = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const o = r[1], a = r[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(255, parseInt(s[1], 10)) / 255,
              Math.min(255, parseInt(s[2], 10)) / 255,
              Math.min(255, parseInt(s[3], 10)) / 255,
              t
            );
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setRGB(
              Math.min(100, parseInt(s[1], 10)) / 100,
              Math.min(100, parseInt(s[2], 10)) / 100,
              Math.min(100, parseInt(s[3], 10)) / 100,
              t
            );
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))
            return n(s[4]), this.setHSL(
              parseFloat(s[1]) / 360,
              parseFloat(s[2]) / 100,
              parseFloat(s[3]) / 100,
              t
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (r = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = r[1], o = s.length;
      if (o === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          t
        );
      if (o === 6)
        return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0)
      return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = Ie) {
    const n = Io[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = $n(e.r), this.g = $n(e.g), this.b = $n(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = br(e.r), this.g = br(e.g), this.b = br(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ie) {
    return Ct.fromWorkingColorSpace(ut.copy(this), e), Math.round(at(ut.r * 255, 0, 255)) * 65536 + Math.round(at(ut.g * 255, 0, 255)) * 256 + Math.round(at(ut.b * 255, 0, 255));
  }
  getHexString(e = Ie) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ct.workingColorSpace) {
    Ct.fromWorkingColorSpace(ut.copy(this), t);
    const n = ut.r, r = ut.g, s = ut.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let c, l;
    const u = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const d = o - a;
      switch (l = u <= 0.5 ? d / (o + a) : d / (2 - o - a), o) {
        case n:
          c = (r - s) / d + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / d + 2;
          break;
        case s:
          c = (n - r) / d + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = u, e;
  }
  getRGB(e, t = Ct.workingColorSpace) {
    return Ct.fromWorkingColorSpace(ut.copy(this), t), e.r = ut.r, e.g = ut.g, e.b = ut.b, e;
  }
  getStyle(e = Ie) {
    Ct.fromWorkingColorSpace(ut.copy(this), e);
    const t = ut.r, n = ut.g, r = ut.b;
    return e !== Ie ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Dt), Dt.h += e, Dt.s += t, Dt.l += n, this.setHSL(Dt.h, Dt.s, Dt.l), this;
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
    this.getHSL(Dt), e.getHSL(Fi);
    const n = yr(Dt.h, Fi.h, t), r = yr(Dt.s, Fi.s, t), s = yr(Dt.l, Fi.l, t);
    return this.setHSL(n, r, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, r = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] * n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this;
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
}
const ut = /* @__PURE__ */ new Ve();
Ve.NAMES = Io;
class gs extends oi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ve(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = _s, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const et = /* @__PURE__ */ new R(), Oi = /* @__PURE__ */ new ue();
class Gt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = aa, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let r = 0, s = this.itemSize; r < s; r++)
      this.array[e + r] = t.array[n + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Oi.fromBufferAttribute(this, t), Oi.applyMatrix3(e), this.setXY(t, Oi.x, Oi.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        et.fromBufferAttribute(this, t), et.applyMatrix3(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      et.fromBufferAttribute(this, t), et.applyMatrix4(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      et.fromBufferAttribute(this, t), et.applyNormalMatrix(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      et.fromBufferAttribute(this, t), et.transformDirection(e), this.setXYZ(t, et.x, et.y, et.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Ri(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Ri(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Ri(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Ri(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = gt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = gt(t, this.array), n = gt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = gt(t, this.array), n = gt(n, this.array), r = gt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = gt(t, this.array), n = gt(n, this.array), r = gt(r, this.array), s = gt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized
    };
    return this.name !== "" && (e.name = this.name), this.usage !== aa && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
  }
  copyColorsArray() {
    console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.");
  }
  copyVector2sArray() {
    console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.");
  }
  copyVector3sArray() {
    console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.");
  }
  copyVector4sArray() {
    console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.");
  }
}
class No extends Gt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Fo extends Gt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class st extends Gt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let yc = 0;
const yt = /* @__PURE__ */ new Ke(), Or = /* @__PURE__ */ new ot(), zn = /* @__PURE__ */ new R(), vt = /* @__PURE__ */ new wi(), fi = /* @__PURE__ */ new wi(), rt = /* @__PURE__ */ new R();
class St extends Pn {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: yc++ }), this.uuid = ai(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ro(e) ? Fo : No)(e, 1) : this.index = e, this;
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
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new He().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return yt.makeRotationFromQuaternion(e), this.applyMatrix4(yt), this;
  }
  rotateX(e) {
    return yt.makeRotationX(e), this.applyMatrix4(yt), this;
  }
  rotateY(e) {
    return yt.makeRotationY(e), this.applyMatrix4(yt), this;
  }
  rotateZ(e) {
    return yt.makeRotationZ(e), this.applyMatrix4(yt), this;
  }
  translate(e, t, n) {
    return yt.makeTranslation(e, t, n), this.applyMatrix4(yt), this;
  }
  scale(e, t, n) {
    return yt.makeScale(e, t, n), this.applyMatrix4(yt), this;
  }
  lookAt(e) {
    return Or.lookAt(e), Or.updateMatrix(), this.applyMatrix4(Or.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(zn).negate(), this.translate(zn.x, zn.y, zn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new st(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new wi());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingBox.set(
        new R(-1 / 0, -1 / 0, -1 / 0),
        new R(1 / 0, 1 / 0, 1 / 0)
      );
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t)
        for (let n = 0, r = t.length; n < r; n++) {
          const s = t[n];
          vt.setFromBufferAttribute(s), this.morphTargetsRelative ? (rt.addVectors(this.boundingBox.min, vt.min), this.boundingBox.expandByPoint(rt), rt.addVectors(this.boundingBox.max, vt.max), this.boundingBox.expandByPoint(rt)) : (this.boundingBox.expandByPoint(vt.min), this.boundingBox.expandByPoint(vt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ar());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (vt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          fi.setFromBufferAttribute(a), this.morphTargetsRelative ? (rt.addVectors(vt.min, fi.min), vt.expandByPoint(rt), rt.addVectors(vt.max, fi.max), vt.expandByPoint(rt)) : (vt.expandByPoint(fi.min), vt.expandByPoint(fi.max));
        }
      vt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        rt.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(rt));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, u = a.count; l < u; l++)
            rt.fromBufferAttribute(a, l), c && (zn.fromBufferAttribute(e, l), rt.add(zn)), r = Math.max(r, n.distanceToSquared(rt));
        }
      this.boundingSphere.radius = Math.sqrt(r), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = e.array, r = t.position.array, s = t.normal.array, o = t.uv.array, a = r.length / 3;
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Gt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], u = [];
    for (let A = 0; A < a; A++)
      l[A] = new R(), u[A] = new R();
    const d = new R(), f = new R(), p = new R(), _ = new ue(), g = new ue(), m = new ue(), h = new R(), S = new R();
    function x(A, H, ne) {
      d.fromArray(r, A * 3), f.fromArray(r, H * 3), p.fromArray(r, ne * 3), _.fromArray(o, A * 2), g.fromArray(o, H * 2), m.fromArray(o, ne * 2), f.sub(d), p.sub(d), g.sub(_), m.sub(_);
      const D = 1 / (g.x * m.y - m.x * g.y);
      isFinite(D) && (h.copy(f).multiplyScalar(m.y).addScaledVector(p, -g.y).multiplyScalar(D), S.copy(p).multiplyScalar(g.x).addScaledVector(f, -m.x).multiplyScalar(D), l[A].add(h), l[H].add(h), l[ne].add(h), u[A].add(S), u[H].add(S), u[ne].add(S));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, H = b.length; A < H; ++A) {
      const ne = b[A], D = ne.start, O = ne.count;
      for (let G = D, te = D + O; G < te; G += 3)
        x(
          n[G + 0],
          n[G + 1],
          n[G + 2]
        );
    }
    const y = new R(), w = new R(), q = new R(), N = new R();
    function v(A) {
      q.fromArray(s, A * 3), N.copy(q);
      const H = l[A];
      y.copy(H), y.sub(q.multiplyScalar(q.dot(H))).normalize(), w.crossVectors(N, H);
      const D = w.dot(u[A]) < 0 ? -1 : 1;
      c[A * 4] = y.x, c[A * 4 + 1] = y.y, c[A * 4 + 2] = y.z, c[A * 4 + 3] = D;
    }
    for (let A = 0, H = b.length; A < H; ++A) {
      const ne = b[A], D = ne.start, O = ne.count;
      for (let G = D, te = D + O; G < te; G += 3)
        v(n[G + 0]), v(n[G + 1]), v(n[G + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Gt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let f = 0, p = n.count; f < p; f++)
          n.setXYZ(f, 0, 0, 0);
      const r = new R(), s = new R(), o = new R(), a = new R(), c = new R(), l = new R(), u = new R(), d = new R();
      if (e)
        for (let f = 0, p = e.count; f < p; f += 3) {
          const _ = e.getX(f + 0), g = e.getX(f + 1), m = e.getX(f + 2);
          r.fromBufferAttribute(t, _), s.fromBufferAttribute(t, g), o.fromBufferAttribute(t, m), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), a.fromBufferAttribute(n, _), c.fromBufferAttribute(n, g), l.fromBufferAttribute(n, m), a.add(u), c.add(u), l.add(u), n.setXYZ(_, a.x, a.y, a.z), n.setXYZ(g, c.x, c.y, c.z), n.setXYZ(m, l.x, l.y, l.z);
        }
      else
        for (let f = 0, p = t.count; f < p; f += 3)
          r.fromBufferAttribute(t, f + 0), s.fromBufferAttribute(t, f + 1), o.fromBufferAttribute(t, f + 2), u.subVectors(o, s), d.subVectors(r, s), u.cross(d), n.setXYZ(f + 0, u.x, u.y, u.z), n.setXYZ(f + 1, u.x, u.y, u.z), n.setXYZ(f + 2, u.x, u.y, u.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      rt.fromBufferAttribute(e, t), rt.normalize(), e.setXYZ(t, rt.x, rt.y, rt.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, u = a.itemSize, d = a.normalized, f = new l.constructor(c.length * u);
      let p = 0, _ = 0;
      for (let g = 0, m = c.length; g < m; g++) {
        a.isInterleavedBufferAttribute ? p = c[g] * a.data.stride + a.offset : p = c[g] * u;
        for (let h = 0; h < u; h++)
          f[_++] = l[p++];
      }
      return new Gt(f, u, d);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new St(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const c = r[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let u = 0, d = l.length; u < d; u++) {
        const f = l[u], p = e(f, n);
        c.push(p);
      }
      t.morphAttributes[a] = c;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, c = o.length; a < c; a++) {
      const l = o[a];
      t.addGroup(l.start, l.count, l.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const c = this.parameters;
      for (const l in c)
        c[l] !== void 0 && (e[l] = c[l]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = {
      type: t.array.constructor.name,
      array: Array.prototype.slice.call(t.array)
    });
    const n = this.attributes;
    for (const c in n) {
      const l = n[c];
      e.data.attributes[c] = l.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const c in this.morphAttributes) {
      const l = this.morphAttributes[c], u = [];
      for (let d = 0, f = l.length; d < f; d++) {
        const p = l[d];
        u.push(p.toJSON(e.data));
      }
      u.length > 0 && (r[c] = u, s = !0);
    }
    s && (e.data.morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return a !== null && (e.data.boundingSphere = {
      center: a.center.toArray(),
      radius: a.radius
    }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const r = e.attributes;
    for (const l in r) {
      const u = r[l];
      this.setAttribute(l, u.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const u = [], d = s[l];
      for (let f = 0, p = d.length; f < p; f++)
        u.push(d[f].clone(t));
      this.morphAttributes[l] = u;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, u = o.length; l < u; l++) {
      const d = o[l];
      this.addGroup(d.start, d.count, d.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const c = e.boundingSphere;
    return c !== null && (this.boundingSphere = c.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const va = /* @__PURE__ */ new Ke(), Ot = /* @__PURE__ */ new Do(), Bi = /* @__PURE__ */ new ar(), Ma = /* @__PURE__ */ new R(), Gn = /* @__PURE__ */ new R(), Hn = /* @__PURE__ */ new R(), Vn = /* @__PURE__ */ new R(), Br = /* @__PURE__ */ new R(), zi = /* @__PURE__ */ new R(), Gi = /* @__PURE__ */ new ue(), Hi = /* @__PURE__ */ new ue(), Vi = /* @__PURE__ */ new ue(), Sa = /* @__PURE__ */ new R(), Ea = /* @__PURE__ */ new R(), ya = /* @__PURE__ */ new R(), ki = /* @__PURE__ */ new R(), Wi = /* @__PURE__ */ new R();
class Pt extends ot {
  constructor(e = new St(), t = new gs()) {
    super(), this.isMesh = !0, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, r = n.attributes.position, s = n.morphAttributes.position, o = n.morphTargetsRelative;
    t.fromBufferAttribute(r, e);
    const a = this.morphTargetInfluences;
    if (s && a) {
      zi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const u = a[c], d = s[c];
        u !== 0 && (Br.fromBufferAttribute(d, e), o ? zi.addScaledVector(Br, u) : zi.addScaledVector(Br.sub(t), u));
      }
      t.add(zi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Bi.copy(n.boundingSphere), Bi.applyMatrix4(s), Ot.copy(e.ray).recast(e.near), !(Bi.containsPoint(Ot.origin) === !1 && (Ot.intersectSphere(Bi, Ma) === null || Ot.origin.distanceToSquared(Ma) > (e.far - e.near) ** 2)) && (va.copy(s).invert(), Ot.copy(e.ray).applyMatrix4(va), !(n.boundingBox !== null && Ot.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t)));
  }
  _computeIntersections(e, t) {
    let n;
    const r = this.geometry, s = this.material, o = r.index, a = r.attributes.position, c = r.attributes.uv, l = r.attributes.uv1, u = r.attributes.normal, d = r.groups, f = r.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let p = 0, _ = d.length; p < _; p++) {
          const g = d[p], m = s[g.materialIndex], h = Math.max(g.start, f.start), S = Math.min(o.count, Math.min(g.start + g.count, f.start + f.count));
          for (let x = h, b = S; x < b; x += 3) {
            const y = o.getX(x), w = o.getX(x + 1), q = o.getX(x + 2);
            n = Xi(this, m, e, Ot, c, l, u, y, w, q), n && (n.faceIndex = Math.floor(x / 3), n.face.materialIndex = g.materialIndex, t.push(n));
          }
        }
      else {
        const p = Math.max(0, f.start), _ = Math.min(o.count, f.start + f.count);
        for (let g = p, m = _; g < m; g += 3) {
          const h = o.getX(g), S = o.getX(g + 1), x = o.getX(g + 2);
          n = Xi(this, s, e, Ot, c, l, u, h, S, x), n && (n.faceIndex = Math.floor(g / 3), t.push(n));
        }
      }
    else if (a !== void 0)
      if (Array.isArray(s))
        for (let p = 0, _ = d.length; p < _; p++) {
          const g = d[p], m = s[g.materialIndex], h = Math.max(g.start, f.start), S = Math.min(a.count, Math.min(g.start + g.count, f.start + f.count));
          for (let x = h, b = S; x < b; x += 3) {
            const y = x, w = x + 1, q = x + 2;
            n = Xi(this, m, e, Ot, c, l, u, y, w, q), n && (n.faceIndex = Math.floor(x / 3), n.face.materialIndex = g.materialIndex, t.push(n));
          }
        }
      else {
        const p = Math.max(0, f.start), _ = Math.min(a.count, f.start + f.count);
        for (let g = p, m = _; g < m; g += 3) {
          const h = g, S = g + 1, x = g + 2;
          n = Xi(this, s, e, Ot, c, l, u, h, S, x), n && (n.faceIndex = Math.floor(g / 3), t.push(n));
        }
      }
  }
}
function Tc(i, e, t, n, r, s, o, a) {
  let c;
  if (e.side === mt ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, e.side === on, a), c === null)
    return null;
  Wi.copy(a), Wi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Wi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Wi.clone(),
    object: i
  };
}
function Xi(i, e, t, n, r, s, o, a, c, l) {
  i.getVertexPosition(a, Gn), i.getVertexPosition(c, Hn), i.getVertexPosition(l, Vn);
  const u = Tc(i, e, t, n, Gn, Hn, Vn, ki);
  if (u) {
    r && (Gi.fromBufferAttribute(r, a), Hi.fromBufferAttribute(r, c), Vi.fromBufferAttribute(r, l), u.uv = Ut.getInterpolation(ki, Gn, Hn, Vn, Gi, Hi, Vi, new ue())), s && (Gi.fromBufferAttribute(s, a), Hi.fromBufferAttribute(s, c), Vi.fromBufferAttribute(s, l), u.uv1 = Ut.getInterpolation(ki, Gn, Hn, Vn, Gi, Hi, Vi, new ue()), u.uv2 = u.uv1), o && (Sa.fromBufferAttribute(o, a), Ea.fromBufferAttribute(o, c), ya.fromBufferAttribute(o, l), u.normal = Ut.getInterpolation(ki, Gn, Hn, Vn, Sa, Ea, ya, new R()), u.normal.dot(n.direction) > 0 && u.normal.multiplyScalar(-1));
    const d = {
      a,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    Ut.getNormal(Gn, Hn, Vn, d.normal), u.face = d;
  }
  return u;
}
class bn extends St {
  constructor(e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) {
    super(), this.type = "BoxGeometry", this.parameters = {
      width: e,
      height: t,
      depth: n,
      widthSegments: r,
      heightSegments: s,
      depthSegments: o
    };
    const a = this;
    r = Math.floor(r), s = Math.floor(s), o = Math.floor(o);
    const c = [], l = [], u = [], d = [];
    let f = 0, p = 0;
    _("z", "y", "x", -1, -1, n, t, e, o, s, 0), _("z", "y", "x", 1, -1, n, t, -e, o, s, 1), _("x", "z", "y", 1, 1, e, n, t, r, o, 2), _("x", "z", "y", 1, -1, e, n, -t, r, o, 3), _("x", "y", "z", 1, -1, e, t, n, r, s, 4), _("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new st(l, 3)), this.setAttribute("normal", new st(u, 3)), this.setAttribute("uv", new st(d, 2));
    function _(g, m, h, S, x, b, y, w, q, N, v) {
      const A = b / q, H = y / N, ne = b / 2, D = y / 2, O = w / 2, G = q + 1, te = N + 1;
      let Z = 0, V = 0;
      const K = new R();
      for (let $ = 0; $ < te; $++) {
        const ce = $ * H - D;
        for (let pe = 0; pe < G; pe++) {
          const z = pe * A - ne;
          K[g] = z * S, K[m] = ce * x, K[h] = O, l.push(K.x, K.y, K.z), K[g] = 0, K[m] = 0, K[h] = w > 0 ? 1 : -1, u.push(K.x, K.y, K.z), d.push(pe / q), d.push(1 - $ / N), Z += 1;
        }
      }
      for (let $ = 0; $ < N; $++)
        for (let ce = 0; ce < q; ce++) {
          const pe = f + ce + G * $, z = f + ce + G * ($ + 1), j = f + (ce + 1) + G * ($ + 1), le = f + (ce + 1) + G * $;
          c.push(pe, z, le), c.push(z, j, le), V += 6;
        }
      a.addGroup(p, V, v), p += V, f += Z;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new bn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function si(i) {
  const e = {};
  for (const t in i) {
    e[t] = {};
    for (const n in i[t]) {
      const r = i[t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][n] = r;
    }
  }
  return e;
}
function ft(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = si(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function bc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Oo(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : Ht;
}
const Ac = { clone: si, merge: ft };
var wc = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Pc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class An extends oi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = wc, this.fragmentShader = Pc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
      derivatives: !1,
      // set to use derivatives
      fragDepth: !1,
      // set to use fragment depth values
      drawBuffers: !1,
      // set to use draw buffers
      shaderTextureLOD: !1
      // set to use shader texture LOD
    }, this.defaultAttributeValues = {
      color: [1, 1, 1],
      uv: [0, 0],
      uv1: [0, 0]
    }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = si(e.uniforms), this.uniformsGroups = bc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const r in this.uniforms) {
      const o = this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = {
        type: "t",
        value: o.toJSON(e).uuid
      } : o && o.isColor ? t.uniforms[r] = {
        type: "c",
        value: o.getHex()
      } : o && o.isVector2 ? t.uniforms[r] = {
        type: "v2",
        value: o.toArray()
      } : o && o.isVector3 ? t.uniforms[r] = {
        type: "v3",
        value: o.toArray()
      } : o && o.isVector4 ? t.uniforms[r] = {
        type: "v4",
        value: o.toArray()
      } : o && o.isMatrix3 ? t.uniforms[r] = {
        type: "m3",
        value: o.toArray()
      } : o && o.isMatrix4 ? t.uniforms[r] = {
        type: "m4",
        value: o.toArray()
      } : t.uniforms[r] = {
        value: o
      };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const r in this.extensions)
      this.extensions[r] === !0 && (n[r] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Bo extends ot {
  constructor() {
    super(), this.isCamera = !0, this.type = "Camera", this.matrixWorldInverse = new Ke(), this.projectionMatrix = new Ke(), this.projectionMatrixInverse = new Ke();
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class wt extends Bo {
  constructor(e = 50, t = 1, n = 0.1, r = 2e3) {
    super(), this.isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  /**
   * Sets the FOV by focal length in respect to the current .filmGauge.
   *
   * The default film gauge is 35, so that the focal length can be specified for
   * a 35mm (full frame) camera.
   *
   * Values for focal length and film gauge must have the same unit.
   */
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ss * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Er * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ss * 2 * Math.atan(
      Math.tan(Er * 0.5 * this.fov) / this.zoom
    );
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  /**
   * Sets an offset in a larger frustum. This is useful for multi-window or
   * multi-monitor/multi-machine setups.
   *
   * For example, if you have 3x2 monitors and each monitor is 1920x1080 and
   * the monitors are in grid like this
   *
   *   +---+---+---+
   *   | A | B | C |
   *   +---+---+---+
   *   | D | E | F |
   *   +---+---+---+
   *
   * then for each monitor you would call it like this
   *
   *   const w = 1920;
   *   const h = 1080;
   *   const fullWidth = w * 3;
   *   const fullHeight = h * 2;
   *
   *   --A--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 0, w, h );
   *   --B--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 0, w, h );
   *   --C--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 0, w, h );
   *   --D--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 0, h * 1, w, h );
   *   --E--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 1, h * 1, w, h );
   *   --F--
   *   camera.setViewOffset( fullWidth, fullHeight, w * 2, h * 1, w, h );
   *
   *   Note there is no reason monitors have to be the same size or in a grid.
   */
  setViewOffset(e, t, n, r, s, o) {
    this.aspect = e / t, this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Er * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const c = o.fullWidth, l = o.fullHeight;
      s += o.offsetX * r / c, t -= o.offsetY * n / l, r *= o.width / c, n *= o.height / l;
    }
    const a = this.filmOffset;
    a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r, t, t - n, e, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const kn = -90, Wn = 1;
class Rc extends ot {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const r = new wt(kn, Wn, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(1, 0, 0), this.add(r);
    const s = new wt(kn, Wn, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const o = new wt(kn, Wn, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new wt(kn, Wn, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new wt(kn, Wn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new wt(kn, Wn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [r, s, o, a, c, l] = this.children, u = e.getRenderTarget(), d = e.toneMapping, f = e.xr.enabled;
    e.toneMapping = $t, e.xr.enabled = !1;
    const p = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = p, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(u), e.toneMapping = d, e.xr.enabled = f, n.texture.needsPMREMUpdate = !0;
  }
}
class zo extends Mt {
  constructor(e, t, n, r, s, o, a, c, l, u) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : ni, super(e, t, n, r, s, o, a, c, l, u), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Cc extends yn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (gi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Mn ? Ie : Sn), this.texture = new zo(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : At;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = {
      uniforms: {
        tEquirect: { value: null }
      },
      vertexShader: (
        /* glsl */
        `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`
      ),
      fragmentShader: (
        /* glsl */
        `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
      )
    }, r = new bn(5, 5, 5), s = new An({
      name: "CubemapFromEquirect",
      uniforms: si(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: mt,
      blending: an
    });
    s.uniforms.tEquirect.value = t;
    const o = new Pt(r, s), a = t.minFilter;
    return t.minFilter === Ei && (t.minFilter = At), new Rc(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const zr = /* @__PURE__ */ new R(), Lc = /* @__PURE__ */ new R(), qc = /* @__PURE__ */ new He();
class pn {
  constructor(e = new R(1, 0, 0), t = 0) {
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
    const r = zr.subVectors(n, t).cross(Lc.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
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
  intersectLine(e, t) {
    const n = e.delta(zr), r = this.normal.dot(n);
    if (r === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
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
    const n = t || qc.getNormalMatrix(e), r = this.coplanarPoint(zr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -r.dot(s), this;
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
}
const fn = /* @__PURE__ */ new ar(), Yi = /* @__PURE__ */ new R();
class xs {
  constructor(e = new pn(), t = new pn(), n = new pn(), r = new pn(), s = new pn(), o = new pn()) {
    this.planes = [e, t, n, r, s, o];
  }
  set(e, t, n, r, s, o) {
    const a = this.planes;
    return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5].copy(o), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes, n = e.elements, r = n[0], s = n[1], o = n[2], a = n[3], c = n[4], l = n[5], u = n[6], d = n[7], f = n[8], p = n[9], _ = n[10], g = n[11], m = n[12], h = n[13], S = n[14], x = n[15];
    return t[0].setComponents(a - r, d - c, g - f, x - m).normalize(), t[1].setComponents(a + r, d + c, g + f, x + m).normalize(), t[2].setComponents(a + s, d + l, g + p, x + h).normalize(), t[3].setComponents(a - s, d - l, g - p, x - h).normalize(), t[4].setComponents(a - o, d - u, g - _, x - S).normalize(), t[5].setComponents(a + o, d + u, g + _, x + S).normalize(), this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(fn);
  }
  intersectsSprite(e) {
    return fn.center.set(0, 0, 0), fn.radius = 0.7071067811865476, fn.applyMatrix4(e.matrixWorld), this.intersectsSphere(fn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, r = -e.radius;
    for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r)
        return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const r = t[n];
      if (Yi.x = r.normal.x > 0 ? e.max.x : e.min.x, Yi.y = r.normal.y > 0 ? e.max.y : e.min.y, Yi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Yi) < 0)
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0)
        return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Go() {
  let i = null, e = !1, t = null, n = null;
  function r(s, o) {
    t(s, o), n = i.requestAnimationFrame(r);
  }
  return {
    start: function() {
      e !== !0 && t !== null && (n = i.requestAnimationFrame(r), e = !0);
    },
    stop: function() {
      i.cancelAnimationFrame(n), e = !1;
    },
    setAnimationLoop: function(s) {
      t = s;
    },
    setContext: function(s) {
      i = s;
    }
  };
}
function Dc(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(l, u) {
    const d = l.array, f = l.usage, p = i.createBuffer();
    i.bindBuffer(u, p), i.bufferData(u, d, f), l.onUploadCallback();
    let _;
    if (d instanceof Float32Array)
      _ = i.FLOAT;
    else if (d instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          _ = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        _ = i.UNSIGNED_SHORT;
    else if (d instanceof Int16Array)
      _ = i.SHORT;
    else if (d instanceof Uint32Array)
      _ = i.UNSIGNED_INT;
    else if (d instanceof Int32Array)
      _ = i.INT;
    else if (d instanceof Int8Array)
      _ = i.BYTE;
    else if (d instanceof Uint8Array)
      _ = i.UNSIGNED_BYTE;
    else if (d instanceof Uint8ClampedArray)
      _ = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + d);
    return {
      buffer: p,
      type: _,
      bytesPerElement: d.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, u, d) {
    const f = u.array, p = u.updateRange;
    i.bindBuffer(d, l), p.count === -1 ? i.bufferSubData(d, 0, f) : (t ? i.bufferSubData(
      d,
      p.offset * f.BYTES_PER_ELEMENT,
      f,
      p.offset,
      p.count
    ) : i.bufferSubData(
      d,
      p.offset * f.BYTES_PER_ELEMENT,
      f.subarray(p.offset, p.offset + p.count)
    ), p.count = -1), u.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u && (i.deleteBuffer(u.buffer), n.delete(l));
  }
  function c(l, u) {
    if (l.isGLBufferAttribute) {
      const f = n.get(l);
      (!f || f.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const d = n.get(l);
    d === void 0 ? n.set(l, r(l, u)) : d.version < l.version && (s(d.buffer, l, u), d.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class vs extends St {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, u = c + 1, d = e / a, f = t / c, p = [], _ = [], g = [], m = [];
    for (let h = 0; h < u; h++) {
      const S = h * f - o;
      for (let x = 0; x < l; x++) {
        const b = x * d - s;
        _.push(b, -S, 0), g.push(0, 0, 1), m.push(x / a), m.push(1 - h / c);
      }
    }
    for (let h = 0; h < c; h++)
      for (let S = 0; S < a; S++) {
        const x = S + l * h, b = S + l * (h + 1), y = S + 1 + l * (h + 1), w = S + 1 + l * h;
        p.push(x, b, w), p.push(b, y, w);
      }
    this.setIndex(p), this.setAttribute("position", new st(_, 3)), this.setAttribute("normal", new st(g, 3)), this.setAttribute("uv", new st(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new vs(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Uc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Ic = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, Nc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Fc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Oc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Bc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, zc = "vec3 transformed = vec3( position );", Gc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Hc = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Vc = `#ifdef USE_IRIDESCENCE
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
#endif`, kc = `#ifdef USE_BUMPMAP
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
#endif`, Wc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Xc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Yc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, jc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Zc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Kc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Jc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, $c = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, Qc = `#define PI 3.141592653589793
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
} // validated`, eu = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, tu = `vec3 transformedNormal = objectNormal;
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
#endif`, nu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, iu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, ru = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, su = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, au = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ou = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, lu = `#ifdef USE_ENVMAP
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
#endif`, cu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, uu = `#ifdef USE_ENVMAP
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
#endif`, hu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, du = `#ifdef USE_ENVMAP
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
#endif`, fu = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, pu = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, mu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, _u = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, gu = `#ifdef USE_GRADIENTMAP
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
}`, xu = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, vu = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Mu = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Su = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Eu = `uniform bool receiveShadow;
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
#endif`, yu = `#if defined( USE_ENVMAP )
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
#endif`, Tu = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, bu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Au = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, wu = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Pu = `PhysicalMaterial material;
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
#endif`, Ru = `struct PhysicalMaterial {
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
}`, Cu = `
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
#endif`, Lu = `#if defined( RE_IndirectDiffuse )
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
#endif`, qu = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Du = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Uu = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Iu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, Nu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Fu = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Ou = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Bu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, zu = `#if defined( USE_POINTS_UV )
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
#endif`, Gu = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Hu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Vu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, ku = `#ifdef USE_MORPHNORMALS
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
#endif`, Wu = `#ifdef USE_MORPHTARGETS
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
#endif`, Xu = `#ifdef USE_MORPHTARGETS
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
#endif`, Yu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, ju = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, Zu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ku = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ju = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, $u = `#ifdef USE_NORMALMAP
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
#endif`, Qu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, eh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, th = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, nh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, ih = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, rh = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, sh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, ah = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, oh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, lh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, ch = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, uh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, hh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, dh = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, fh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, ph = `float getShadowMask() {
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
}`, mh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, _h = `#ifdef USE_SKINNING
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
#endif`, gh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, xh = `#ifdef USE_SKINNING
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
#endif`, vh = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Mh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Sh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Eh = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, yh = `#ifdef USE_TRANSMISSION
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
#endif`, Th = `#ifdef USE_TRANSMISSION
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
#endif`, bh = `#ifdef USE_UV
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
#endif`, Ah = `#ifdef USE_UV
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
#endif`, wh = `#ifdef USE_UV
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
#endif`, Ph = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Rh = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ch = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Lh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, qh = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Dh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Uh = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Ih = `#include <common>
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
}`, Nh = `#if DEPTH_PACKING == 3200
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
}`, Fh = `#define DISTANCE
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
}`, Oh = `#define DISTANCE
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
}`, Bh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, zh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Gh = `uniform float scale;
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
}`, Hh = `uniform vec3 diffuse;
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
}`, Vh = `#include <common>
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
}`, kh = `uniform vec3 diffuse;
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
}`, Wh = `#define LAMBERT
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
}`, Xh = `#define LAMBERT
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
}`, Yh = `#define MATCAP
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
}`, jh = `#define MATCAP
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
}`, Zh = `#define NORMAL
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
}`, Kh = `#define NORMAL
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
}`, Jh = `#define PHONG
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
}`, $h = `#define PHONG
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
}`, Qh = `#define STANDARD
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
}`, ed = `#define STANDARD
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
}`, td = `#define TOON
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
}`, nd = `#define TOON
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
}`, id = `uniform float size;
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
}`, rd = `uniform vec3 diffuse;
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
}`, sd = `#include <common>
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
}`, ad = `uniform vec3 color;
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
}`, od = `uniform float rotation;
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
}`, ld = `uniform vec3 diffuse;
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
}`, Fe = {
  alphamap_fragment: Uc,
  alphamap_pars_fragment: Ic,
  alphatest_fragment: Nc,
  alphatest_pars_fragment: Fc,
  aomap_fragment: Oc,
  aomap_pars_fragment: Bc,
  begin_vertex: zc,
  beginnormal_vertex: Gc,
  bsdfs: Hc,
  iridescence_fragment: Vc,
  bumpmap_pars_fragment: kc,
  clipping_planes_fragment: Wc,
  clipping_planes_pars_fragment: Xc,
  clipping_planes_pars_vertex: Yc,
  clipping_planes_vertex: jc,
  color_fragment: Zc,
  color_pars_fragment: Kc,
  color_pars_vertex: Jc,
  color_vertex: $c,
  common: Qc,
  cube_uv_reflection_fragment: eu,
  defaultnormal_vertex: tu,
  displacementmap_pars_vertex: nu,
  displacementmap_vertex: iu,
  emissivemap_fragment: ru,
  emissivemap_pars_fragment: su,
  encodings_fragment: au,
  encodings_pars_fragment: ou,
  envmap_fragment: lu,
  envmap_common_pars_fragment: cu,
  envmap_pars_fragment: uu,
  envmap_pars_vertex: hu,
  envmap_physical_pars_fragment: yu,
  envmap_vertex: du,
  fog_vertex: fu,
  fog_pars_vertex: pu,
  fog_fragment: mu,
  fog_pars_fragment: _u,
  gradientmap_pars_fragment: gu,
  lightmap_fragment: xu,
  lightmap_pars_fragment: vu,
  lights_lambert_fragment: Mu,
  lights_lambert_pars_fragment: Su,
  lights_pars_begin: Eu,
  lights_toon_fragment: Tu,
  lights_toon_pars_fragment: bu,
  lights_phong_fragment: Au,
  lights_phong_pars_fragment: wu,
  lights_physical_fragment: Pu,
  lights_physical_pars_fragment: Ru,
  lights_fragment_begin: Cu,
  lights_fragment_maps: Lu,
  lights_fragment_end: qu,
  logdepthbuf_fragment: Du,
  logdepthbuf_pars_fragment: Uu,
  logdepthbuf_pars_vertex: Iu,
  logdepthbuf_vertex: Nu,
  map_fragment: Fu,
  map_pars_fragment: Ou,
  map_particle_fragment: Bu,
  map_particle_pars_fragment: zu,
  metalnessmap_fragment: Gu,
  metalnessmap_pars_fragment: Hu,
  morphcolor_vertex: Vu,
  morphnormal_vertex: ku,
  morphtarget_pars_vertex: Wu,
  morphtarget_vertex: Xu,
  normal_fragment_begin: Yu,
  normal_fragment_maps: ju,
  normal_pars_fragment: Zu,
  normal_pars_vertex: Ku,
  normal_vertex: Ju,
  normalmap_pars_fragment: $u,
  clearcoat_normal_fragment_begin: Qu,
  clearcoat_normal_fragment_maps: eh,
  clearcoat_pars_fragment: th,
  iridescence_pars_fragment: nh,
  output_fragment: ih,
  packing: rh,
  premultiplied_alpha_fragment: sh,
  project_vertex: ah,
  dithering_fragment: oh,
  dithering_pars_fragment: lh,
  roughnessmap_fragment: ch,
  roughnessmap_pars_fragment: uh,
  shadowmap_pars_fragment: hh,
  shadowmap_pars_vertex: dh,
  shadowmap_vertex: fh,
  shadowmask_pars_fragment: ph,
  skinbase_vertex: mh,
  skinning_pars_vertex: _h,
  skinning_vertex: gh,
  skinnormal_vertex: xh,
  specularmap_fragment: vh,
  specularmap_pars_fragment: Mh,
  tonemapping_fragment: Sh,
  tonemapping_pars_fragment: Eh,
  transmission_fragment: yh,
  transmission_pars_fragment: Th,
  uv_pars_fragment: bh,
  uv_pars_vertex: Ah,
  uv_vertex: wh,
  worldpos_vertex: Ph,
  background_vert: Rh,
  background_frag: Ch,
  backgroundCube_vert: Lh,
  backgroundCube_frag: qh,
  cube_vert: Dh,
  cube_frag: Uh,
  depth_vert: Ih,
  depth_frag: Nh,
  distanceRGBA_vert: Fh,
  distanceRGBA_frag: Oh,
  equirect_vert: Bh,
  equirect_frag: zh,
  linedashed_vert: Gh,
  linedashed_frag: Hh,
  meshbasic_vert: Vh,
  meshbasic_frag: kh,
  meshlambert_vert: Wh,
  meshlambert_frag: Xh,
  meshmatcap_vert: Yh,
  meshmatcap_frag: jh,
  meshnormal_vert: Zh,
  meshnormal_frag: Kh,
  meshphong_vert: Jh,
  meshphong_frag: $h,
  meshphysical_vert: Qh,
  meshphysical_frag: ed,
  meshtoon_vert: td,
  meshtoon_frag: nd,
  points_vert: id,
  points_frag: rd,
  shadow_vert: sd,
  shadow_frag: ad,
  sprite_vert: od,
  sprite_frag: ld
}, fe = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new He() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new He() }
  },
  envmap: {
    envMap: { value: null },
    flipEnvMap: { value: -1 },
    reflectivity: { value: 1 },
    // basic, lambert, phong
    ior: { value: 1.5 },
    // physical
    refractionRatio: { value: 0.98 }
    // basic, lambert, phong
  },
  aomap: {
    aoMap: { value: null },
    aoMapIntensity: { value: 1 },
    aoMapTransform: { value: /* @__PURE__ */ new He() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new He() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new He() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new He() },
    normalScale: { value: /* @__PURE__ */ new ue(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new He() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new He() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new He() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ve(16777215) }
  },
  lights: {
    ambientLightColor: { value: [] },
    lightProbe: { value: [] },
    directionalLights: { value: [], properties: {
      direction: {},
      color: {}
    } },
    directionalLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    directionalShadowMap: { value: [] },
    directionalShadowMatrix: { value: [] },
    spotLights: { value: [], properties: {
      color: {},
      position: {},
      direction: {},
      distance: {},
      coneCos: {},
      penumbraCos: {},
      decay: {}
    } },
    spotLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {}
    } },
    spotLightMap: { value: [] },
    spotShadowMap: { value: [] },
    spotLightMatrix: { value: [] },
    pointLights: { value: [], properties: {
      color: {},
      position: {},
      decay: {},
      distance: {}
    } },
    pointLightShadows: { value: [], properties: {
      shadowBias: {},
      shadowNormalBias: {},
      shadowRadius: {},
      shadowMapSize: {},
      shadowCameraNear: {},
      shadowCameraFar: {}
    } },
    pointShadowMap: { value: [] },
    pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: {
      direction: {},
      skyColor: {},
      groundColor: {}
    } },
    // TODO (abelnation): RectAreaLight BRDF data needs to be moved from example to main src
    rectAreaLights: { value: [], properties: {
      color: {},
      position: {},
      width: {},
      height: {}
    } },
    ltc_1: { value: null },
    ltc_2: { value: null }
  },
  points: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new He() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ve(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new ue(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new He() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  }
}, Bt = {
  basic: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.specularmap,
      fe.envmap,
      fe.aomap,
      fe.lightmap,
      fe.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.specularmap,
      fe.envmap,
      fe.aomap,
      fe.lightmap,
      fe.emissivemap,
      fe.bumpmap,
      fe.normalmap,
      fe.displacementmap,
      fe.fog,
      fe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.specularmap,
      fe.envmap,
      fe.aomap,
      fe.lightmap,
      fe.emissivemap,
      fe.bumpmap,
      fe.normalmap,
      fe.displacementmap,
      fe.fog,
      fe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        specular: { value: /* @__PURE__ */ new Ve(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.envmap,
      fe.aomap,
      fe.lightmap,
      fe.emissivemap,
      fe.bumpmap,
      fe.normalmap,
      fe.displacementmap,
      fe.roughnessmap,
      fe.metalnessmap,
      fe.fog,
      fe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) },
        roughness: { value: 1 },
        metalness: { value: 0 },
        envMapIntensity: { value: 1 }
        // temporary
      }
    ]),
    vertexShader: Fe.meshphysical_vert,
    fragmentShader: Fe.meshphysical_frag
  },
  toon: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.aomap,
      fe.lightmap,
      fe.emissivemap,
      fe.bumpmap,
      fe.normalmap,
      fe.displacementmap,
      fe.gradientmap,
      fe.fog,
      fe.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ve(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.bumpmap,
      fe.normalmap,
      fe.displacementmap,
      fe.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ ft([
      fe.points,
      fe.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.fog,
      {
        scale: { value: 1 },
        dashSize: { value: 1 },
        totalSize: { value: 2 }
      }
    ]),
    vertexShader: Fe.linedashed_vert,
    fragmentShader: Fe.linedashed_frag
  },
  depth: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.bumpmap,
      fe.normalmap,
      fe.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ ft([
      fe.sprite,
      fe.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new He() },
      t2D: { value: null },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.background_vert,
    fragmentShader: Fe.background_frag
  },
  backgroundCube: {
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      backgroundBlurriness: { value: 0 },
      backgroundIntensity: { value: 1 }
    },
    vertexShader: Fe.backgroundCube_vert,
    fragmentShader: Fe.backgroundCube_frag
  },
  cube: {
    uniforms: {
      tCube: { value: null },
      tFlip: { value: -1 },
      opacity: { value: 1 }
    },
    vertexShader: Fe.cube_vert,
    fragmentShader: Fe.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: { value: null }
    },
    vertexShader: Fe.equirect_vert,
    fragmentShader: Fe.equirect_frag
  },
  distanceRGBA: {
    uniforms: /* @__PURE__ */ ft([
      fe.common,
      fe.displacementmap,
      {
        referencePosition: { value: /* @__PURE__ */ new R() },
        nearDistance: { value: 1 },
        farDistance: { value: 1e3 }
      }
    ]),
    vertexShader: Fe.distanceRGBA_vert,
    fragmentShader: Fe.distanceRGBA_frag
  },
  shadow: {
    uniforms: /* @__PURE__ */ ft([
      fe.lights,
      fe.fog,
      {
        color: { value: /* @__PURE__ */ new Ve(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
Bt.physical = {
  uniforms: /* @__PURE__ */ ft([
    Bt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new He() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new ue(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new He() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new He() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ve(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new He() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new He() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new He() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new ue() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new He() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ve(0) },
      specularColor: { value: /* @__PURE__ */ new Ve(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new He() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new He() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const ji = { r: 0, b: 0, g: 0 };
function cd(i, e, t, n, r, s, o) {
  const a = new Ve(0);
  let c = s === !0 ? 0 : 1, l, u, d = null, f = 0, p = null;
  function _(m, h) {
    let S = !1, x = h.isScene === !0 ? h.background : null;
    switch (x && x.isTexture && (x = (h.backgroundBlurriness > 0 ? t : e).get(x)), x === null ? g(a, c) : x && x.isColor && (g(x, 1), S = !0), i.xr.getEnvironmentBlendMode()) {
      case "opaque":
        S = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), S = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), S = !0;
        break;
    }
    (i.autoClear || S) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), x && (x.isCubeTexture || x.mapping === sr) ? (u === void 0 && (u = new Pt(
      new bn(1, 1, 1),
      new An({
        name: "BackgroundCubeMaterial",
        uniforms: si(Bt.backgroundCube.uniforms),
        vertexShader: Bt.backgroundCube.vertexShader,
        fragmentShader: Bt.backgroundCube.fragmentShader,
        side: mt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), u.geometry.deleteAttribute("normal"), u.geometry.deleteAttribute("uv"), u.onBeforeRender = function(w, q, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(u.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(u)), u.material.uniforms.envMap.value = x, u.material.uniforms.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1, u.material.uniforms.backgroundBlurriness.value = h.backgroundBlurriness, u.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, u.material.toneMapped = x.colorSpace !== Ie, (d !== x || f !== x.version || p !== i.toneMapping) && (u.material.needsUpdate = !0, d = x, f = x.version, p = i.toneMapping), u.layers.enableAll(), m.unshift(u, u.geometry, u.material, 0, 0, null)) : x && x.isTexture && (l === void 0 && (l = new Pt(
      new vs(2, 2),
      new An({
        name: "BackgroundMaterial",
        uniforms: si(Bt.background.uniforms),
        vertexShader: Bt.background.vertexShader,
        fragmentShader: Bt.background.fragmentShader,
        side: on,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = x, l.material.uniforms.backgroundIntensity.value = h.backgroundIntensity, l.material.toneMapped = x.colorSpace !== Ie, x.matrixAutoUpdate === !0 && x.updateMatrix(), l.material.uniforms.uvTransform.value.copy(x.matrix), (d !== x || f !== x.version || p !== i.toneMapping) && (l.material.needsUpdate = !0, d = x, f = x.version, p = i.toneMapping), l.layers.enableAll(), m.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function g(m, h) {
    m.getRGB(ji, Oo(i)), n.buffers.color.setClear(ji.r, ji.g, ji.b, h, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(m, h = 1) {
      a.set(m), c = h, g(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(m) {
      c = m, g(a, c);
    },
    render: _
  };
}
function ud(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = m(null);
  let l = c, u = !1;
  function d(O, G, te, Z, V) {
    let K = !1;
    if (o) {
      const $ = g(Z, te, G);
      l !== $ && (l = $, p(l.object)), K = h(O, Z, te, V), K && S(O, Z, te, V);
    } else {
      const $ = G.wireframe === !0;
      (l.geometry !== Z.id || l.program !== te.id || l.wireframe !== $) && (l.geometry = Z.id, l.program = te.id, l.wireframe = $, K = !0);
    }
    V !== null && t.update(V, i.ELEMENT_ARRAY_BUFFER), (K || u) && (u = !1, N(O, G, te, Z), V !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(V).buffer));
  }
  function f() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function p(O) {
    return n.isWebGL2 ? i.bindVertexArray(O) : s.bindVertexArrayOES(O);
  }
  function _(O) {
    return n.isWebGL2 ? i.deleteVertexArray(O) : s.deleteVertexArrayOES(O);
  }
  function g(O, G, te) {
    const Z = te.wireframe === !0;
    let V = a[O.id];
    V === void 0 && (V = {}, a[O.id] = V);
    let K = V[G.id];
    K === void 0 && (K = {}, V[G.id] = K);
    let $ = K[Z];
    return $ === void 0 && ($ = m(f()), K[Z] = $), $;
  }
  function m(O) {
    const G = [], te = [], Z = [];
    for (let V = 0; V < r; V++)
      G[V] = 0, te[V] = 0, Z[V] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: G,
      enabledAttributes: te,
      attributeDivisors: Z,
      object: O,
      attributes: {},
      index: null
    };
  }
  function h(O, G, te, Z) {
    const V = l.attributes, K = G.attributes;
    let $ = 0;
    const ce = te.getAttributes();
    for (const pe in ce)
      if (ce[pe].location >= 0) {
        const j = V[pe];
        let le = K[pe];
        if (le === void 0 && (pe === "instanceMatrix" && O.instanceMatrix && (le = O.instanceMatrix), pe === "instanceColor" && O.instanceColor && (le = O.instanceColor)), j === void 0 || j.attribute !== le || le && j.data !== le.data)
          return !0;
        $++;
      }
    return l.attributesNum !== $ || l.index !== Z;
  }
  function S(O, G, te, Z) {
    const V = {}, K = G.attributes;
    let $ = 0;
    const ce = te.getAttributes();
    for (const pe in ce)
      if (ce[pe].location >= 0) {
        let j = K[pe];
        j === void 0 && (pe === "instanceMatrix" && O.instanceMatrix && (j = O.instanceMatrix), pe === "instanceColor" && O.instanceColor && (j = O.instanceColor));
        const le = {};
        le.attribute = j, j && j.data && (le.data = j.data), V[pe] = le, $++;
      }
    l.attributes = V, l.attributesNum = $, l.index = Z;
  }
  function x() {
    const O = l.newAttributes;
    for (let G = 0, te = O.length; G < te; G++)
      O[G] = 0;
  }
  function b(O) {
    y(O, 0);
  }
  function y(O, G) {
    const te = l.newAttributes, Z = l.enabledAttributes, V = l.attributeDivisors;
    te[O] = 1, Z[O] === 0 && (i.enableVertexAttribArray(O), Z[O] = 1), V[O] !== G && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](O, G), V[O] = G);
  }
  function w() {
    const O = l.newAttributes, G = l.enabledAttributes;
    for (let te = 0, Z = G.length; te < Z; te++)
      G[te] !== O[te] && (i.disableVertexAttribArray(te), G[te] = 0);
  }
  function q(O, G, te, Z, V, K) {
    n.isWebGL2 === !0 && (te === i.INT || te === i.UNSIGNED_INT) ? i.vertexAttribIPointer(O, G, te, V, K) : i.vertexAttribPointer(O, G, te, Z, V, K);
  }
  function N(O, G, te, Z) {
    if (n.isWebGL2 === !1 && (O.isInstancedMesh || Z.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    x();
    const V = Z.attributes, K = te.getAttributes(), $ = G.defaultAttributeValues;
    for (const ce in K) {
      const pe = K[ce];
      if (pe.location >= 0) {
        let z = V[ce];
        if (z === void 0 && (ce === "instanceMatrix" && O.instanceMatrix && (z = O.instanceMatrix), ce === "instanceColor" && O.instanceColor && (z = O.instanceColor)), z !== void 0) {
          const j = z.normalized, le = z.itemSize, _e = t.get(z);
          if (_e === void 0)
            continue;
          const C = _e.buffer, Te = _e.type, Ce = _e.bytesPerElement;
          if (z.isInterleavedBufferAttribute) {
            const ae = z.data, Se = ae.stride, ee = z.offset;
            if (ae.isInstancedInterleavedBuffer) {
              for (let k = 0; k < pe.locationSize; k++)
                y(pe.location + k, ae.meshPerAttribute);
              O.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = ae.meshPerAttribute * ae.count);
            } else
              for (let k = 0; k < pe.locationSize; k++)
                b(pe.location + k);
            i.bindBuffer(i.ARRAY_BUFFER, C);
            for (let k = 0; k < pe.locationSize; k++)
              q(
                pe.location + k,
                le / pe.locationSize,
                Te,
                j,
                Se * Ce,
                (ee + le / pe.locationSize * k) * Ce
              );
          } else {
            if (z.isInstancedBufferAttribute) {
              for (let ae = 0; ae < pe.locationSize; ae++)
                y(pe.location + ae, z.meshPerAttribute);
              O.isInstancedMesh !== !0 && Z._maxInstanceCount === void 0 && (Z._maxInstanceCount = z.meshPerAttribute * z.count);
            } else
              for (let ae = 0; ae < pe.locationSize; ae++)
                b(pe.location + ae);
            i.bindBuffer(i.ARRAY_BUFFER, C);
            for (let ae = 0; ae < pe.locationSize; ae++)
              q(
                pe.location + ae,
                le / pe.locationSize,
                Te,
                j,
                le * Ce,
                le / pe.locationSize * ae * Ce
              );
          }
        } else if ($ !== void 0) {
          const j = $[ce];
          if (j !== void 0)
            switch (j.length) {
              case 2:
                i.vertexAttrib2fv(pe.location, j);
                break;
              case 3:
                i.vertexAttrib3fv(pe.location, j);
                break;
              case 4:
                i.vertexAttrib4fv(pe.location, j);
                break;
              default:
                i.vertexAttrib1fv(pe.location, j);
            }
        }
      }
    }
    w();
  }
  function v() {
    ne();
    for (const O in a) {
      const G = a[O];
      for (const te in G) {
        const Z = G[te];
        for (const V in Z)
          _(Z[V].object), delete Z[V];
        delete G[te];
      }
      delete a[O];
    }
  }
  function A(O) {
    if (a[O.id] === void 0)
      return;
    const G = a[O.id];
    for (const te in G) {
      const Z = G[te];
      for (const V in Z)
        _(Z[V].object), delete Z[V];
      delete G[te];
    }
    delete a[O.id];
  }
  function H(O) {
    for (const G in a) {
      const te = a[G];
      if (te[O.id] === void 0)
        continue;
      const Z = te[O.id];
      for (const V in Z)
        _(Z[V].object), delete Z[V];
      delete te[O.id];
    }
  }
  function ne() {
    D(), u = !0, l !== c && (l = c, p(l.object));
  }
  function D() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: d,
    reset: ne,
    resetDefaultState: D,
    dispose: v,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: H,
    initAttributes: x,
    enableAttribute: b,
    disableUnusedAttributes: w
  };
}
function hd(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, u) {
    i.drawArrays(s, l, u), t.update(u, s, 1);
  }
  function c(l, u, d) {
    if (d === 0)
      return;
    let f, p;
    if (r)
      f = i, p = "drawArraysInstanced";
    else if (f = e.get("ANGLE_instanced_arrays"), p = "drawArraysInstancedANGLE", f === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    f[p](s, l, u, d), t.update(u, s, d);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function dd(i, e, t) {
  let n;
  function r() {
    if (n !== void 0)
      return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const q = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else
      n = 0;
    return n;
  }
  function s(q) {
    if (q === "highp") {
      if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      q = "mediump";
    }
    return q === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  const o = typeof WebGL2RenderingContext < "u" && i.constructor.name === "WebGL2RenderingContext";
  let a = t.precision !== void 0 ? t.precision : "highp";
  const c = s(a);
  c !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", c, "instead."), a = c);
  const l = o || e.has("WEBGL_draw_buffers"), u = t.logarithmicDepthBuffer === !0, d = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), f = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), p = i.getParameter(i.MAX_TEXTURE_SIZE), _ = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), g = i.getParameter(i.MAX_VERTEX_ATTRIBS), m = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), h = i.getParameter(i.MAX_VARYING_VECTORS), S = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), x = f > 0, b = o || e.has("OES_texture_float"), y = x && b, w = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: u,
    maxTextures: d,
    maxVertexTextures: f,
    maxTextureSize: p,
    maxCubemapSize: _,
    maxAttributes: g,
    maxVertexUniforms: m,
    maxVaryings: h,
    maxFragmentUniforms: S,
    vertexTextures: x,
    floatFragmentTextures: b,
    floatVertexTextures: y,
    maxSamples: w
  };
}
function fd(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new pn(), a = new He(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(d, f) {
    const p = d.length !== 0 || f || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = f, n = d.length, p;
  }, this.beginShadows = function() {
    s = !0, u(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(d, f) {
    t = u(d, f, 0);
  }, this.setState = function(d, f, p) {
    const _ = d.clippingPlanes, g = d.clipIntersection, m = d.clipShadows, h = i.get(d);
    if (!r || _ === null || _.length === 0 || s && !m)
      s ? u(null) : l();
    else {
      const S = s ? 0 : n, x = S * 4;
      let b = h.clippingState || null;
      c.value = b, b = u(_, f, x, p);
      for (let y = 0; y !== x; ++y)
        b[y] = t[y];
      h.clippingState = b, this.numIntersection = g ? this.numPlanes : 0, this.numPlanes += S;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function u(d, f, p, _) {
    const g = d !== null ? d.length : 0;
    let m = null;
    if (g !== 0) {
      if (m = c.value, _ !== !0 || m === null) {
        const h = p + g * 4, S = f.matrixWorldInverse;
        a.getNormalMatrix(S), (m === null || m.length < h) && (m = new Float32Array(h));
        for (let x = 0, b = p; x !== g; ++x, b += 4)
          o.copy(d[x]).applyMatrix4(S, a), o.normal.toArray(m, b), m[b + 3] = o.constant;
      }
      c.value = m, c.needsUpdate = !0;
    }
    return e.numPlanes = g, e.numIntersection = 0, m;
  }
}
function pd(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === es ? o.mapping = ni : a === ts && (o.mapping = ii), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === es || a === ts)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Cc(c.height / 2);
            return l.fromEquirectangularTexture(i, o), e.set(o, l), o.addEventListener("dispose", r), t(l.texture, o.mapping);
          } else
            return null;
        }
    }
    return o;
  }
  function r(o) {
    const a = o.target;
    a.removeEventListener("dispose", r);
    const c = e.get(a);
    c !== void 0 && (e.delete(a), c.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: s
  };
}
class as extends Bo {
  constructor(e = -1, t = 1, n = 1, r = -1, s = 0.1, o = 2e3) {
    super(), this.isOrthographicCamera = !0, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = r, this.near = s, this.far = o, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, r, s, o) {
    this.view === null && (this.view = {
      enabled: !0,
      fullWidth: 1,
      fullHeight: 1,
      offsetX: 0,
      offsetY: 0,
      width: 1,
      height: 1
    }), this.view.enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = r, this.view.width = s, this.view.height = o, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, r = (this.top + this.bottom) / 2;
    let s = n - e, o = n + e, a = r + t, c = r - t;
    if (this.view !== null && this.view.enabled) {
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, u = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= u * this.view.offsetY, c = a - u * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const jn = 4, Ta = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], _n = 20, Gr = /* @__PURE__ */ new as(), ba = /* @__PURE__ */ new Ve();
let Hr = null;
const mn = (1 + Math.sqrt(5)) / 2, Xn = 1 / mn, Aa = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, mn, Xn),
  /* @__PURE__ */ new R(0, mn, -Xn),
  /* @__PURE__ */ new R(Xn, 0, mn),
  /* @__PURE__ */ new R(-Xn, 0, mn),
  /* @__PURE__ */ new R(mn, Xn, 0),
  /* @__PURE__ */ new R(-mn, Xn, 0)
];
class wa {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  /**
   * Generates a PMREM from a supplied Scene, which can be faster than using an
   * image if networking bandwidth is low. Optional sigma specifies a blur radius
   * in radians to be applied to the scene before PMREM generation. Optional near
   * and far planes ensure the scene is rendered in its entirety (the cubeCamera
   * is placed at the origin).
   */
  fromScene(e, t = 0, n = 0.1, r = 100) {
    Hr = this._renderer.getRenderTarget(), this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  /**
   * Generates a PMREM from an equirectangular texture, which can be either LDR
   * or HDR. The ideal input image size is 1k (1024 x 512),
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Generates a PMREM from an cubemap texture, which can be either LDR
   * or HDR. The ideal input cube size is 256 x 256,
   * as this matches best with the 256 x 256 cubemap output.
   */
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  /**
   * Pre-compiles the cubemap shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ca(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ra(), this._compileMaterial(this._equirectMaterial));
  }
  /**
   * Disposes of the PMREMGenerator's internal memory. Note that PMREMGenerator is a static class,
   * so you should not need more than one PMREMGenerator object. If you do, calling dispose() on
   * one of them will cause any others to also become unusable.
   */
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  // private interface
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Hr), e.scissorTest = !1, Zi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === ni || e.mapping === ii ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Hr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: At,
      minFilter: At,
      generateMipmaps: !1,
      type: yi,
      format: Nt,
      colorSpace: Ht,
      depthBuffer: !1
    }, r = Pa(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Pa(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = md(s)), this._blurMaterial = _d(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new Pt(this._lodPlanes[0], e);
    this._renderer.compile(t, Gr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new wt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], u = this._renderer, d = u.autoClear, f = u.toneMapping;
    u.getClearColor(ba), u.toneMapping = $t, u.autoClear = !1;
    const p = new gs({
      name: "PMREM.Background",
      side: mt,
      depthWrite: !1,
      depthTest: !1
    }), _ = new Pt(new bn(), p);
    let g = !1;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, g = !0) : (p.color.copy(ba), g = !0);
    for (let h = 0; h < 6; h++) {
      const S = h % 3;
      S === 0 ? (a.up.set(0, c[h], 0), a.lookAt(l[h], 0, 0)) : S === 1 ? (a.up.set(0, 0, c[h]), a.lookAt(0, l[h], 0)) : (a.up.set(0, c[h], 0), a.lookAt(0, 0, l[h]));
      const x = this._cubeSize;
      Zi(r, S * x, h > 2 ? x : 0, x, x), u.setRenderTarget(r), g && u.render(_, a), u.render(e, a);
    }
    _.geometry.dispose(), _.material.dispose(), u.toneMapping = f, u.autoClear = d, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === ni || e.mapping === ii;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ca()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ra());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new Pt(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Zi(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Gr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Aa[(r - 1) % Aa.length];
      this._blur(e, r - 1, r, s, o);
    }
    t.autoClear = n;
  }
  /**
   * This is a two-pass Gaussian blur for a cubemap. Normally this is done
   * vertically and horizontally, but this breaks down on a cube. Here we apply
   * the blur latitudinally (around the poles), and then longitudinally (towards
   * the poles) to approximate the orthogonally-separable blur. It is least
   * accurate at the poles, but still does a decent job.
   */
  _blur(e, t, n, r, s) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(
      e,
      o,
      t,
      n,
      r,
      "latitudinal",
      s
    ), this._halfBlur(
      o,
      e,
      n,
      n,
      r,
      "longitudinal",
      s
    );
  }
  _halfBlur(e, t, n, r, s, o, a) {
    const c = this._renderer, l = this._blurMaterial;
    o !== "latitudinal" && o !== "longitudinal" && console.error(
      "blur direction must be either latitudinal or longitudinal!"
    );
    const u = 3, d = new Pt(this._lodPlanes[r], l), f = l.uniforms, p = this._sizeLods[n] - 1, _ = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * _n - 1), g = s / _, m = isFinite(s) ? 1 + Math.floor(u * g) : _n;
    m > _n && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_n}`);
    const h = [];
    let S = 0;
    for (let q = 0; q < _n; ++q) {
      const N = q / g, v = Math.exp(-N * N / 2);
      h.push(v), q === 0 ? S += v : q < m && (S += 2 * v);
    }
    for (let q = 0; q < h.length; q++)
      h[q] = h[q] / S;
    f.envMap.value = e.texture, f.samples.value = m, f.weights.value = h, f.latitudinal.value = o === "latitudinal", a && (f.poleAxis.value = a);
    const { _lodMax: x } = this;
    f.dTheta.value = _, f.mipInt.value = x - n;
    const b = this._sizeLods[r], y = 3 * b * (r > x - jn ? r - x + jn : 0), w = 4 * (this._cubeSize - b);
    Zi(t, y, w, 3 * b, 2 * b), c.setRenderTarget(t), c.render(d, Gr);
  }
}
function md(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - jn + 1 + Ta.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let c = 1 / a;
    o > i - jn ? c = Ta[o - i + jn - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), u = -l, d = 1 + l, f = [u, u, d, u, d, d, u, u, d, d, u, d], p = 6, _ = 6, g = 3, m = 2, h = 1, S = new Float32Array(g * _ * p), x = new Float32Array(m * _ * p), b = new Float32Array(h * _ * p);
    for (let w = 0; w < p; w++) {
      const q = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, v = [
        q,
        N,
        0,
        q + 2 / 3,
        N,
        0,
        q + 2 / 3,
        N + 1,
        0,
        q,
        N,
        0,
        q + 2 / 3,
        N + 1,
        0,
        q,
        N + 1,
        0
      ];
      S.set(v, g * _ * w), x.set(f, m * _ * w);
      const A = [w, w, w, w, w, w];
      b.set(A, h * _ * w);
    }
    const y = new St();
    y.setAttribute("position", new Gt(S, g)), y.setAttribute("uv", new Gt(x, m)), y.setAttribute("faceIndex", new Gt(b, h)), e.push(y), r > jn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Pa(i, e, t) {
  const n = new yn(i, e, t);
  return n.texture.mapping = sr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Zi(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function _d(i, e, t) {
  const n = new Float32Array(_n), r = new R(0, 1, 0);
  return new An({
    name: "SphericalGaussianBlur",
    defines: {
      n: _n,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${i}.0`
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r }
    },
    vertexShader: Ms(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: an,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ra() {
  return new An({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: Ms(),
    fragmentShader: (
      /* glsl */
      `

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
		`
    ),
    blending: an,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ca() {
  return new An({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: Ms(),
    fragmentShader: (
      /* glsl */
      `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`
    ),
    blending: an,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ms() {
  return (
    /* glsl */
    `

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
	`
  );
}
function gd(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === es || c === ts, u = c === ni || c === ii;
      if (l || u)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let d = e.get(a);
          return t === null && (t = new wa(i)), d = l ? t.fromEquirectangular(a, d) : t.fromCubemap(a, d), e.set(a, d), d.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const d = a.image;
            if (l && d && d.height > 0 || u && d && r(d)) {
              t === null && (t = new wa(i));
              const f = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, f), a.addEventListener("dispose", s), f.texture;
            } else
              return null;
          }
        }
    }
    return a;
  }
  function r(a) {
    let c = 0;
    const l = 6;
    for (let u = 0; u < l; u++)
      a[u] !== void 0 && c++;
    return c === l;
  }
  function s(a) {
    const c = a.target;
    c.removeEventListener("dispose", s);
    const l = e.get(c);
    l !== void 0 && (e.delete(c), l.dispose());
  }
  function o() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return {
    get: n,
    dispose: o
  };
}
function xd(i) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0)
      return e[n];
    let r;
    switch (n) {
      case "WEBGL_depth_texture":
        r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension("MOZ_EXT_texture_filter_anisotropic") || i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        r = i.getExtension(n);
    }
    return e[n] = r, r;
  }
  return {
    has: function(n) {
      return t(n) !== null;
    },
    init: function(n) {
      n.isWebGL2 ? t("EXT_color_buffer_float") : (t("WEBGL_depth_texture"), t("OES_texture_float"), t("OES_texture_half_float"), t("OES_texture_half_float_linear"), t("OES_standard_derivatives"), t("OES_element_index_uint"), t("OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture");
    },
    get: function(n) {
      const r = t(n);
      return r === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."), r;
    }
  };
}
function vd(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(d) {
    const f = d.target;
    f.index !== null && e.remove(f.index);
    for (const _ in f.attributes)
      e.remove(f.attributes[_]);
    f.removeEventListener("dispose", o), delete r[f.id];
    const p = s.get(f);
    p && (e.remove(p), s.delete(f)), n.releaseStatesOfGeometry(f), f.isInstancedBufferGeometry === !0 && delete f._maxInstanceCount, t.memory.geometries--;
  }
  function a(d, f) {
    return r[f.id] === !0 || (f.addEventListener("dispose", o), r[f.id] = !0, t.memory.geometries++), f;
  }
  function c(d) {
    const f = d.attributes;
    for (const _ in f)
      e.update(f[_], i.ARRAY_BUFFER);
    const p = d.morphAttributes;
    for (const _ in p) {
      const g = p[_];
      for (let m = 0, h = g.length; m < h; m++)
        e.update(g[m], i.ARRAY_BUFFER);
    }
  }
  function l(d) {
    const f = [], p = d.index, _ = d.attributes.position;
    let g = 0;
    if (p !== null) {
      const S = p.array;
      g = p.version;
      for (let x = 0, b = S.length; x < b; x += 3) {
        const y = S[x + 0], w = S[x + 1], q = S[x + 2];
        f.push(y, w, w, q, q, y);
      }
    } else {
      const S = _.array;
      g = _.version;
      for (let x = 0, b = S.length / 3 - 1; x < b; x += 3) {
        const y = x + 0, w = x + 1, q = x + 2;
        f.push(y, w, w, q, q, y);
      }
    }
    const m = new (Ro(f) ? Fo : No)(f, 1);
    m.version = g;
    const h = s.get(d);
    h && e.remove(h), s.set(d, m);
  }
  function u(d) {
    const f = s.get(d);
    if (f) {
      const p = d.index;
      p !== null && f.version < p.version && l(d);
    } else
      l(d);
    return s.get(d);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: u
  };
}
function Md(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(f) {
    s = f;
  }
  let a, c;
  function l(f) {
    a = f.type, c = f.bytesPerElement;
  }
  function u(f, p) {
    i.drawElements(s, p, a, f * c), t.update(p, s, 1);
  }
  function d(f, p, _) {
    if (_ === 0)
      return;
    let g, m;
    if (r)
      g = i, m = "drawElementsInstanced";
    else if (g = e.get("ANGLE_instanced_arrays"), m = "drawElementsInstancedANGLE", g === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    g[m](s, p, a, f * c, _), t.update(p, s, _);
  }
  this.setMode = o, this.setIndex = l, this.render = u, this.renderInstances = d;
}
function Sd(i) {
  const e = {
    geometries: 0,
    textures: 0
  }, t = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  function n(s, o, a) {
    switch (t.calls++, o) {
      case i.TRIANGLES:
        t.triangles += a * (s / 3);
        break;
      case i.LINES:
        t.lines += a * (s / 2);
        break;
      case i.LINE_STRIP:
        t.lines += a * (s - 1);
        break;
      case i.LINE_LOOP:
        t.lines += a * s;
        break;
      case i.POINTS:
        t.points += a * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function r() {
    t.frame++, t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: r,
    update: n
  };
}
function Ed(i, e) {
  return i[0] - e[0];
}
function yd(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Td(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new je(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, u, d) {
    const f = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const p = u.morphAttributes.position || u.morphAttributes.normal || u.morphAttributes.color, _ = p !== void 0 ? p.length : 0;
      let g = s.get(u);
      if (g === void 0 || g.count !== _) {
        let O = function() {
          ne.dispose(), s.delete(u), u.removeEventListener("dispose", O);
        };
        g !== void 0 && g.texture.dispose();
        const S = u.morphAttributes.position !== void 0, x = u.morphAttributes.normal !== void 0, b = u.morphAttributes.color !== void 0, y = u.morphAttributes.position || [], w = u.morphAttributes.normal || [], q = u.morphAttributes.color || [];
        let N = 0;
        S === !0 && (N = 1), x === !0 && (N = 2), b === !0 && (N = 3);
        let v = u.attributes.position.count * N, A = 1;
        v > e.maxTextureSize && (A = Math.ceil(v / e.maxTextureSize), v = e.maxTextureSize);
        const H = new Float32Array(v * A * 4 * _), ne = new qo(H, v, A, _);
        ne.type = xn, ne.needsUpdate = !0;
        const D = N * 4;
        for (let G = 0; G < _; G++) {
          const te = y[G], Z = w[G], V = q[G], K = v * A * 4 * G;
          for (let $ = 0; $ < te.count; $++) {
            const ce = $ * D;
            S === !0 && (o.fromBufferAttribute(te, $), H[K + ce + 0] = o.x, H[K + ce + 1] = o.y, H[K + ce + 2] = o.z, H[K + ce + 3] = 0), x === !0 && (o.fromBufferAttribute(Z, $), H[K + ce + 4] = o.x, H[K + ce + 5] = o.y, H[K + ce + 6] = o.z, H[K + ce + 7] = 0), b === !0 && (o.fromBufferAttribute(V, $), H[K + ce + 8] = o.x, H[K + ce + 9] = o.y, H[K + ce + 10] = o.z, H[K + ce + 11] = V.itemSize === 4 ? o.w : 1);
          }
        }
        g = {
          count: _,
          texture: ne,
          size: new ue(v, A)
        }, s.set(u, g), u.addEventListener("dispose", O);
      }
      let m = 0;
      for (let S = 0; S < f.length; S++)
        m += f[S];
      const h = u.morphTargetsRelative ? 1 : 1 - m;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", h), d.getUniforms().setValue(i, "morphTargetInfluences", f), d.getUniforms().setValue(i, "morphTargetsTexture", g.texture, t), d.getUniforms().setValue(i, "morphTargetsTextureSize", g.size);
    } else {
      const p = f === void 0 ? 0 : f.length;
      let _ = n[u.id];
      if (_ === void 0 || _.length !== p) {
        _ = [];
        for (let x = 0; x < p; x++)
          _[x] = [x, 0];
        n[u.id] = _;
      }
      for (let x = 0; x < p; x++) {
        const b = _[x];
        b[0] = x, b[1] = f[x];
      }
      _.sort(yd);
      for (let x = 0; x < 8; x++)
        x < p && _[x][1] ? (a[x][0] = _[x][0], a[x][1] = _[x][1]) : (a[x][0] = Number.MAX_SAFE_INTEGER, a[x][1] = 0);
      a.sort(Ed);
      const g = u.morphAttributes.position, m = u.morphAttributes.normal;
      let h = 0;
      for (let x = 0; x < 8; x++) {
        const b = a[x], y = b[0], w = b[1];
        y !== Number.MAX_SAFE_INTEGER && w ? (g && u.getAttribute("morphTarget" + x) !== g[y] && u.setAttribute("morphTarget" + x, g[y]), m && u.getAttribute("morphNormal" + x) !== m[y] && u.setAttribute("morphNormal" + x, m[y]), r[x] = w, h += w) : (g && u.hasAttribute("morphTarget" + x) === !0 && u.deleteAttribute("morphTarget" + x), m && u.hasAttribute("morphNormal" + x) === !0 && u.deleteAttribute("morphNormal" + x), r[x] = 0);
      }
      const S = u.morphTargetsRelative ? 1 : 1 - h;
      d.getUniforms().setValue(i, "morphTargetBaseInfluence", S), d.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: c
  };
}
function bd(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, u = c.geometry, d = e.get(c, u);
    return r.get(d) !== l && (e.update(d), r.set(d, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER)), d;
  }
  function o() {
    r = /* @__PURE__ */ new WeakMap();
  }
  function a(c) {
    const l = c.target;
    l.removeEventListener("dispose", a), t.remove(l.instanceMatrix), l.instanceColor !== null && t.remove(l.instanceColor);
  }
  return {
    update: s,
    dispose: o
  };
}
const Ho = /* @__PURE__ */ new Mt(), Vo = /* @__PURE__ */ new qo(), ko = /* @__PURE__ */ new pc(), Wo = /* @__PURE__ */ new zo(), La = [], qa = [], Da = new Float32Array(16), Ua = new Float32Array(9), Ia = new Float32Array(4);
function li(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = e * t;
  let s = La[r];
  if (s === void 0 && (s = new Float32Array(r), La[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function tt(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function nt(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function lr(i, e) {
  let t = qa[e];
  t === void 0 && (t = new Int32Array(e), qa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function Ad(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function wd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (tt(t, e))
      return;
    i.uniform2fv(this.addr, e), nt(t, e);
  }
}
function Pd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (tt(t, e))
      return;
    i.uniform3fv(this.addr, e), nt(t, e);
  }
}
function Rd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (tt(t, e))
      return;
    i.uniform4fv(this.addr, e), nt(t, e);
  }
}
function Cd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (tt(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n))
      return;
    Ia.set(n), i.uniformMatrix2fv(this.addr, !1, Ia), nt(t, n);
  }
}
function Ld(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (tt(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n))
      return;
    Ua.set(n), i.uniformMatrix3fv(this.addr, !1, Ua), nt(t, n);
  }
}
function qd(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (tt(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), nt(t, e);
  } else {
    if (tt(t, n))
      return;
    Da.set(n), i.uniformMatrix4fv(this.addr, !1, Da), nt(t, n);
  }
}
function Dd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Ud(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (tt(t, e))
      return;
    i.uniform2iv(this.addr, e), nt(t, e);
  }
}
function Id(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (tt(t, e))
      return;
    i.uniform3iv(this.addr, e), nt(t, e);
  }
}
function Nd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (tt(t, e))
      return;
    i.uniform4iv(this.addr, e), nt(t, e);
  }
}
function Fd(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Od(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (tt(t, e))
      return;
    i.uniform2uiv(this.addr, e), nt(t, e);
  }
}
function Bd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (tt(t, e))
      return;
    i.uniform3uiv(this.addr, e), nt(t, e);
  }
}
function zd(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (tt(t, e))
      return;
    i.uniform4uiv(this.addr, e), nt(t, e);
  }
}
function Gd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || Ho, r);
}
function Hd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || ko, r);
}
function Vd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || Wo, r);
}
function kd(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Vo, r);
}
function Wd(i) {
  switch (i) {
    case 5126:
      return Ad;
    case 35664:
      return wd;
    case 35665:
      return Pd;
    case 35666:
      return Rd;
    case 35674:
      return Cd;
    case 35675:
      return Ld;
    case 35676:
      return qd;
    case 5124:
    case 35670:
      return Dd;
    case 35667:
    case 35671:
      return Ud;
    case 35668:
    case 35672:
      return Id;
    case 35669:
    case 35673:
      return Nd;
    case 5125:
      return Fd;
    case 36294:
      return Od;
    case 36295:
      return Bd;
    case 36296:
      return zd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Gd;
    case 35679:
    case 36299:
    case 36307:
      return Hd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Vd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return kd;
  }
}
function Xd(i, e) {
  i.uniform1fv(this.addr, e);
}
function Yd(i, e) {
  const t = li(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function jd(i, e) {
  const t = li(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function Zd(i, e) {
  const t = li(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function Kd(i, e) {
  const t = li(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function Jd(i, e) {
  const t = li(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function $d(i, e) {
  const t = li(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function Qd(i, e) {
  i.uniform1iv(this.addr, e);
}
function ef(i, e) {
  i.uniform2iv(this.addr, e);
}
function tf(i, e) {
  i.uniform3iv(this.addr, e);
}
function nf(i, e) {
  i.uniform4iv(this.addr, e);
}
function rf(i, e) {
  i.uniform1uiv(this.addr, e);
}
function sf(i, e) {
  i.uniform2uiv(this.addr, e);
}
function af(i, e) {
  i.uniform3uiv(this.addr, e);
}
function of(i, e) {
  i.uniform4uiv(this.addr, e);
}
function lf(i, e, t) {
  const n = this.cache, r = e.length, s = lr(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || Ho, s[o]);
}
function cf(i, e, t) {
  const n = this.cache, r = e.length, s = lr(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || ko, s[o]);
}
function uf(i, e, t) {
  const n = this.cache, r = e.length, s = lr(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || Wo, s[o]);
}
function hf(i, e, t) {
  const n = this.cache, r = e.length, s = lr(t, r);
  tt(n, s) || (i.uniform1iv(this.addr, s), nt(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || Vo, s[o]);
}
function df(i) {
  switch (i) {
    case 5126:
      return Xd;
    case 35664:
      return Yd;
    case 35665:
      return jd;
    case 35666:
      return Zd;
    case 35674:
      return Kd;
    case 35675:
      return Jd;
    case 35676:
      return $d;
    case 5124:
    case 35670:
      return Qd;
    case 35667:
    case 35671:
      return ef;
    case 35668:
    case 35672:
      return tf;
    case 35669:
    case 35673:
      return nf;
    case 5125:
      return rf;
    case 36294:
      return sf;
    case 36295:
      return af;
    case 36296:
      return of;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return lf;
    case 35679:
    case 36299:
    case 36307:
      return cf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return uf;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return hf;
  }
}
class ff {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = Wd(t.type);
  }
}
class pf {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = df(t.type);
  }
}
class mf {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const r = this.seq;
    for (let s = 0, o = r.length; s !== o; ++s) {
      const a = r[s];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Vr = /(\w+)(\])?(\[|\.)?/g;
function Na(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function _f(i, e, t) {
  const n = i.name, r = n.length;
  for (Vr.lastIndex = 0; ; ) {
    const s = Vr.exec(n), o = Vr.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
      Na(t, l === void 0 ? new ff(a, i, e) : new pf(a, i, e));
      break;
    } else {
      let d = t.map[a];
      d === void 0 && (d = new mf(a), Na(t, d)), t = d;
    }
  }
}
class nr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      _f(s, o, this);
    }
  }
  setValue(e, t, n, r) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r);
  }
  setOptional(e, t, n) {
    const r = t[n];
    r !== void 0 && this.setValue(e, n, r);
  }
  static upload(e, t, n, r) {
    for (let s = 0, o = t.length; s !== o; ++s) {
      const a = t[s], c = n[a.id];
      c.needsUpdate !== !1 && a.setValue(e, c.value, r);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const o = e[r];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function Fa(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let gf = 0;
function xf(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function vf(i) {
  switch (i) {
    case Ht:
      return ["Linear", "( value )"];
    case Ie:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), ["Linear", "( value )"];
  }
}
function Oa(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + xf(i.getShaderSource(e), o);
  } else
    return r;
}
function Mf(i, e) {
  const t = vf(e);
  return "vec4 " + i + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Sf(i, e) {
  let t;
  switch (e) {
    case Ul:
      t = "Linear";
      break;
    case Il:
      t = "Reinhard";
      break;
    case Nl:
      t = "OptimizedCineon";
      break;
    case Fl:
      t = "ACESFilmic";
      break;
    case Ol:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Ef(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(_i).join(`
`);
}
function yf(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Tf(i, e) {
  const t = {}, n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < n; r++) {
    const s = i.getActiveAttrib(e, r), o = s.name;
    let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i.FLOAT_MAT4 && (a = 4), t[o] = {
      type: s.type,
      location: i.getAttribLocation(e, o),
      locationSize: a
    };
  }
  return t;
}
function _i(i) {
  return i !== "";
}
function Ba(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function za(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const bf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function os(i) {
  return i.replace(bf, Af);
}
function Af(i, e) {
  const t = Fe[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return os(t);
}
const wf = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ga(i) {
  return i.replace(wf, Pf);
}
function Pf(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ha(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Rf(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === Mo ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === dl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === Jt && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Cf(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case ni:
      case ii:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case sr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Lf(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ii:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function qf(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case _s:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case ql:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Dl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Df(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Uf(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Rf(t), l = Cf(t), u = Lf(t), d = qf(t), f = Df(t), p = t.isWebGL2 ? "" : Ef(t), _ = yf(s), g = r.createProgram();
  let m, h, S = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = [
    _
  ].filter(_i).join(`
`), m.length > 0 && (m += `
`), h = [
    p,
    _
  ].filter(_i).join(`
`), h.length > 0 && (h += `
`)) : (m = [
    Ha(t),
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + u : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    //
    t.mapUv ? "#define MAP_UV " + t.mapUv : "",
    t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
    t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
    t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
    t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
    t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
    t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
    t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "",
    t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
    t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
    t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
    t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "",
    t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "",
    t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "",
    t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "",
    t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "",
    t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "",
    t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
    t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "",
    t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "",
    t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "",
    t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
    //
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.skinning ? "#define USE_SKINNING" : "",
    t.morphTargets ? "#define USE_MORPHTARGETS" : "",
    t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "",
    t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE" : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "",
    t.morphTargetsCount > 0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
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
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;",
    "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;",
    "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS",
    "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;",
    "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;",
    "	#else",
    "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;",
    "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;",
    "	#endif",
    "#endif",
    "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;",
    "	attribute vec4 skinWeight;",
    "#endif",
    `
`
  ].filter(_i).join(`
`), h = [
    p,
    Ha(t),
    "#define SHADER_NAME " + t.shaderName,
    _,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + u : "",
    t.envMap ? "#define " + d : "",
    f ? "#define CUBEUV_TEXEL_WIDTH " + f.texelWidth : "",
    f ? "#define CUBEUV_TEXEL_HEIGHT " + f.texelHeight : "",
    f ? "#define CUBEUV_MAX_MIP " + f.maxMip + ".0" : "",
    t.lightMap ? "#define USE_LIGHTMAP" : "",
    t.aoMap ? "#define USE_AOMAP" : "",
    t.bumpMap ? "#define USE_BUMPMAP" : "",
    t.normalMap ? "#define USE_NORMALMAP" : "",
    t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
    t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
    t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
    t.clearcoat ? "#define USE_CLEARCOAT" : "",
    t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
    t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
    t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
    t.iridescence ? "#define USE_IRIDESCENCE" : "",
    t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
    t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
    t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
    t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
    t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "",
    t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "",
    t.sheen ? "#define USE_SHEEN" : "",
    t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
    t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
    t.transmission ? "#define USE_TRANSMISSION" : "",
    t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
    t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
    t.vertexTangents ? "#define USE_TANGENT" : "",
    t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
    t.vertexUv1s ? "#define USE_UV1" : "",
    t.vertexUv2s ? "#define USE_UV2" : "",
    t.vertexUv3s ? "#define USE_UV3" : "",
    t.pointsUvs ? "#define USE_POINTS_UV" : "",
    t.gradientMap ? "#define USE_GRADIENTMAP" : "",
    t.flatShading ? "#define FLAT_SHADED" : "",
    t.doubleSided ? "#define DOUBLE_SIDED" : "",
    t.flipSided ? "#define FLIP_SIDED" : "",
    t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
    t.shadowMapEnabled ? "#define " + c : "",
    t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "",
    t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
    t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ? "#define USE_LOGDEPTHBUF_EXT" : "",
    "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;",
    t.toneMapping !== $t ? "#define TONE_MAPPING" : "",
    t.toneMapping !== $t ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== $t ? Sf("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Mf("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(_i).join(`
`)), o = os(o), o = Ba(o, t), o = za(o, t), a = os(a), a = Ba(a, t), a = za(a, t), o = Ga(o), a = Ga(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (S = `#version 300 es
`, m = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + m, h = [
    "#define varying in",
    t.glslVersion === oa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === oa ? "" : "#define gl_FragColor pc_fragColor",
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
  ].join(`
`) + `
` + h);
  const x = S + m + o, b = S + h + a, y = Fa(r, r.VERTEX_SHADER, x), w = Fa(r, r.FRAGMENT_SHADER, b);
  if (r.attachShader(g, y), r.attachShader(g, w), t.index0AttributeName !== void 0 ? r.bindAttribLocation(g, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(g, 0, "position"), r.linkProgram(g), i.debug.checkShaderErrors) {
    const v = r.getProgramInfoLog(g).trim(), A = r.getShaderInfoLog(y).trim(), H = r.getShaderInfoLog(w).trim();
    let ne = !0, D = !0;
    if (r.getProgramParameter(g, r.LINK_STATUS) === !1)
      if (ne = !1, typeof i.debug.onShaderError == "function")
        i.debug.onShaderError(r, g, y, w);
      else {
        const O = Oa(r, y, "vertex"), G = Oa(r, w, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(g, r.VALIDATE_STATUS) + `

Program Info Log: ` + v + `
` + O + `
` + G
        );
      }
    else
      v !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", v) : (A === "" || H === "") && (D = !1);
    D && (this.diagnostics = {
      runnable: ne,
      programLog: v,
      vertexShader: {
        log: A,
        prefix: m
      },
      fragmentShader: {
        log: H,
        prefix: h
      }
    });
  }
  r.deleteShader(y), r.deleteShader(w);
  let q;
  this.getUniforms = function() {
    return q === void 0 && (q = new nr(r, g)), q;
  };
  let N;
  return this.getAttributes = function() {
    return N === void 0 && (N = Tf(r, g)), N;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(g), this.program = void 0;
  }, this.name = t.shaderName, this.id = gf++, this.cacheKey = e, this.usedTimes = 1, this.program = g, this.vertexShader = y, this.fragmentShader = w, this;
}
let If = 0;
class Nf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, r = this._getShaderStage(t), s = this._getShaderStage(n), o = this._getShaderCacheForMaterial(e);
    return o.has(r) === !1 && (o.add(r), r.usedTimes++), o.has(s) === !1 && (o.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new Ff(e), t.set(e, n)), n;
  }
}
class Ff {
  constructor(e) {
    this.id = If++, this.code = e, this.usedTimes = 0;
  }
}
function Of(i, e, t, n, r, s, o) {
  const a = new Uo(), c = new Nf(), l = [], u = r.isWebGL2, d = r.logarithmicDepthBuffer, f = r.vertexTextures;
  let p = r.precision;
  const _ = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
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
  function g(v) {
    return v === 1 ? "uv1" : v === 2 ? "uv2" : v === 3 ? "uv3" : "uv";
  }
  function m(v, A, H, ne, D) {
    const O = ne.fog, G = D.geometry, te = v.isMeshStandardMaterial ? ne.environment : null, Z = (v.isMeshStandardMaterial ? t : e).get(v.envMap || te), V = Z && Z.mapping === sr ? Z.image.height : null, K = _[v.type];
    v.precision !== null && (p = r.getMaxPrecision(v.precision), p !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", p, "instead."));
    const $ = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color, ce = $ !== void 0 ? $.length : 0;
    let pe = 0;
    G.morphAttributes.position !== void 0 && (pe = 1), G.morphAttributes.normal !== void 0 && (pe = 2), G.morphAttributes.color !== void 0 && (pe = 3);
    let z, j, le, _e;
    if (K) {
      const Xe = Bt[K];
      z = Xe.vertexShader, j = Xe.fragmentShader;
    } else
      z = v.vertexShader, j = v.fragmentShader, c.update(v), le = c.getVertexShaderID(v), _e = c.getFragmentShaderID(v);
    const C = i.getRenderTarget(), Te = D.isInstancedMesh === !0, Ce = !!v.map, ae = !!v.matcap, Se = !!Z, ee = !!v.aoMap, k = !!v.lightMap, Q = !!v.bumpMap, ge = !!v.normalMap, oe = !!v.displacementMap, we = !!v.emissiveMap, Pe = !!v.metalnessMap, Ee = !!v.roughnessMap, qe = v.clearcoat > 0, he = v.iridescence > 0, T = v.sheen > 0, M = v.transmission > 0, F = qe && !!v.clearcoatMap, ie = qe && !!v.clearcoatNormalMap, re = qe && !!v.clearcoatRoughnessMap, de = he && !!v.iridescenceMap, P = he && !!v.iridescenceThicknessMap, J = T && !!v.sheenColorMap, B = T && !!v.sheenRoughnessMap, me = !!v.specularMap, Me = !!v.specularColorMap, be = !!v.specularIntensityMap, xe = M && !!v.transmissionMap, ye = M && !!v.thicknessMap, De = !!v.gradientMap, Oe = !!v.alphaMap, Je = v.alphaTest > 0, L = !!v.extensions, W = !!G.attributes.uv1, se = !!G.attributes.uv2, ve = !!G.attributes.uv3;
    return {
      isWebGL2: u,
      shaderID: K,
      shaderName: v.type,
      vertexShader: z,
      fragmentShader: j,
      defines: v.defines,
      customVertexShaderID: le,
      customFragmentShaderID: _e,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: p,
      instancing: Te,
      instancingColor: Te && D.instanceColor !== null,
      supportsVertexTextures: f,
      outputColorSpace: C === null ? i.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : Ht,
      map: Ce,
      matcap: ae,
      envMap: Se,
      envMapMode: Se && Z.mapping,
      envMapCubeUVHeight: V,
      aoMap: ee,
      lightMap: k,
      bumpMap: Q,
      normalMap: ge,
      displacementMap: f && oe,
      emissiveMap: we,
      normalMapObjectSpace: ge && v.normalMapType === ic,
      normalMapTangentSpace: ge && v.normalMapType === Ao,
      metalnessMap: Pe,
      roughnessMap: Ee,
      clearcoat: qe,
      clearcoatMap: F,
      clearcoatNormalMap: ie,
      clearcoatRoughnessMap: re,
      iridescence: he,
      iridescenceMap: de,
      iridescenceThicknessMap: P,
      sheen: T,
      sheenColorMap: J,
      sheenRoughnessMap: B,
      specularMap: me,
      specularColorMap: Me,
      specularIntensityMap: be,
      transmission: M,
      transmissionMap: xe,
      thicknessMap: ye,
      gradientMap: De,
      opaque: v.transparent === !1 && v.blending === Kn,
      alphaMap: Oe,
      alphaTest: Je,
      combine: v.combine,
      //
      mapUv: Ce && g(v.map.channel),
      aoMapUv: ee && g(v.aoMap.channel),
      lightMapUv: k && g(v.lightMap.channel),
      bumpMapUv: Q && g(v.bumpMap.channel),
      normalMapUv: ge && g(v.normalMap.channel),
      displacementMapUv: oe && g(v.displacementMap.channel),
      emissiveMapUv: we && g(v.emissiveMap.channel),
      metalnessMapUv: Pe && g(v.metalnessMap.channel),
      roughnessMapUv: Ee && g(v.roughnessMap.channel),
      clearcoatMapUv: F && g(v.clearcoatMap.channel),
      clearcoatNormalMapUv: ie && g(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: re && g(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: de && g(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: P && g(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: J && g(v.sheenColorMap.channel),
      sheenRoughnessMapUv: B && g(v.sheenRoughnessMap.channel),
      specularMapUv: me && g(v.specularMap.channel),
      specularColorMapUv: Me && g(v.specularColorMap.channel),
      specularIntensityMapUv: be && g(v.specularIntensityMap.channel),
      transmissionMapUv: xe && g(v.transmissionMap.channel),
      thicknessMapUv: ye && g(v.thicknessMap.channel),
      alphaMapUv: Oe && g(v.alphaMap.channel),
      //
      vertexTangents: ge && !!G.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
      vertexUv1s: W,
      vertexUv2s: se,
      vertexUv3s: ve,
      pointsUvs: D.isPoints === !0 && !!G.attributes.uv && (Ce || Oe),
      fog: !!O,
      useFog: v.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: d,
      skinning: D.isSkinnedMesh === !0,
      morphTargets: G.morphAttributes.position !== void 0,
      morphNormals: G.morphAttributes.normal !== void 0,
      morphColors: G.morphAttributes.color !== void 0,
      morphTargetsCount: ce,
      morphTextureStride: pe,
      numDirLights: A.directional.length,
      numPointLights: A.point.length,
      numSpotLights: A.spot.length,
      numSpotLightMaps: A.spotLightMap.length,
      numRectAreaLights: A.rectArea.length,
      numHemiLights: A.hemi.length,
      numDirLightShadows: A.directionalShadowMap.length,
      numPointLightShadows: A.pointShadowMap.length,
      numSpotLightShadows: A.spotShadowMap.length,
      numSpotLightShadowsWithMaps: A.numSpotLightShadowsWithMaps,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: v.dithering,
      shadowMapEnabled: i.shadowMap.enabled && H.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: v.toneMapped ? i.toneMapping : $t,
      useLegacyLights: i.useLegacyLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === zt,
      flipSided: v.side === mt,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: L && v.extensions.derivatives === !0,
      extensionFragDepth: L && v.extensions.fragDepth === !0,
      extensionDrawBuffers: L && v.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: L && v.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: u || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: u || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: u || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
  }
  function h(v) {
    const A = [];
    if (v.shaderID ? A.push(v.shaderID) : (A.push(v.customVertexShaderID), A.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const H in v.defines)
        A.push(H), A.push(v.defines[H]);
    return v.isRawShaderMaterial === !1 && (S(A, v), x(A, v), A.push(i.outputColorSpace)), A.push(v.customProgramCacheKey), A.join();
  }
  function S(v, A) {
    v.push(A.precision), v.push(A.outputColorSpace), v.push(A.envMapMode), v.push(A.envMapCubeUVHeight), v.push(A.mapUv), v.push(A.alphaMapUv), v.push(A.lightMapUv), v.push(A.aoMapUv), v.push(A.bumpMapUv), v.push(A.normalMapUv), v.push(A.displacementMapUv), v.push(A.emissiveMapUv), v.push(A.metalnessMapUv), v.push(A.roughnessMapUv), v.push(A.clearcoatMapUv), v.push(A.clearcoatNormalMapUv), v.push(A.clearcoatRoughnessMapUv), v.push(A.iridescenceMapUv), v.push(A.iridescenceThicknessMapUv), v.push(A.sheenColorMapUv), v.push(A.sheenRoughnessMapUv), v.push(A.specularMapUv), v.push(A.specularColorMapUv), v.push(A.specularIntensityMapUv), v.push(A.transmissionMapUv), v.push(A.thicknessMapUv), v.push(A.combine), v.push(A.fogExp2), v.push(A.sizeAttenuation), v.push(A.morphTargetsCount), v.push(A.morphAttributeCount), v.push(A.numDirLights), v.push(A.numPointLights), v.push(A.numSpotLights), v.push(A.numSpotLightMaps), v.push(A.numHemiLights), v.push(A.numRectAreaLights), v.push(A.numDirLightShadows), v.push(A.numPointLightShadows), v.push(A.numSpotLightShadows), v.push(A.numSpotLightShadowsWithMaps), v.push(A.shadowMapType), v.push(A.toneMapping), v.push(A.numClippingPlanes), v.push(A.numClipIntersection), v.push(A.depthPacking);
  }
  function x(v, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.matcap && a.enable(4), A.envMap && a.enable(5), A.normalMapObjectSpace && a.enable(6), A.normalMapTangentSpace && a.enable(7), A.clearcoat && a.enable(8), A.iridescence && a.enable(9), A.alphaTest && a.enable(10), A.vertexColors && a.enable(11), A.vertexAlphas && a.enable(12), A.vertexUv1s && a.enable(13), A.vertexUv2s && a.enable(14), A.vertexUv3s && a.enable(15), A.vertexTangents && a.enable(16), v.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.useLegacyLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), v.push(a.mask);
  }
  function b(v) {
    const A = _[v.type];
    let H;
    if (A) {
      const ne = Bt[A];
      H = Ac.clone(ne.uniforms);
    } else
      H = v.uniforms;
    return H;
  }
  function y(v, A) {
    let H;
    for (let ne = 0, D = l.length; ne < D; ne++) {
      const O = l[ne];
      if (O.cacheKey === A) {
        H = O, ++H.usedTimes;
        break;
      }
    }
    return H === void 0 && (H = new Uf(i, A, v, s), l.push(H)), H;
  }
  function w(v) {
    if (--v.usedTimes === 0) {
      const A = l.indexOf(v);
      l[A] = l[l.length - 1], l.pop(), v.destroy();
    }
  }
  function q(v) {
    c.remove(v);
  }
  function N() {
    c.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: h,
    getUniforms: b,
    acquireProgram: y,
    releaseProgram: w,
    releaseShaderCache: q,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: N
  };
}
function Bf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(s) {
    let o = i.get(s);
    return o === void 0 && (o = {}, i.set(s, o)), o;
  }
  function t(s) {
    i.delete(s);
  }
  function n(s, o, a) {
    i.get(s)[o] = a;
  }
  function r() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    remove: t,
    update: n,
    dispose: r
  };
}
function zf(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function Va(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function ka() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(d, f, p, _, g, m) {
    let h = i[e];
    return h === void 0 ? (h = {
      id: d.id,
      object: d,
      geometry: f,
      material: p,
      groupOrder: _,
      renderOrder: d.renderOrder,
      z: g,
      group: m
    }, i[e] = h) : (h.id = d.id, h.object = d, h.geometry = f, h.material = p, h.groupOrder = _, h.renderOrder = d.renderOrder, h.z = g, h.group = m), e++, h;
  }
  function a(d, f, p, _, g, m) {
    const h = o(d, f, p, _, g, m);
    p.transmission > 0 ? n.push(h) : p.transparent === !0 ? r.push(h) : t.push(h);
  }
  function c(d, f, p, _, g, m) {
    const h = o(d, f, p, _, g, m);
    p.transmission > 0 ? n.unshift(h) : p.transparent === !0 ? r.unshift(h) : t.unshift(h);
  }
  function l(d, f) {
    t.length > 1 && t.sort(d || zf), n.length > 1 && n.sort(f || Va), r.length > 1 && r.sort(f || Va);
  }
  function u() {
    for (let d = e, f = i.length; d < f; d++) {
      const p = i[d];
      if (p.id === null)
        break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: c,
    finish: u,
    sort: l
  };
}
function Gf() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new ka(), i.set(n, [o])) : r >= s.length ? (o = new ka(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Hf() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            direction: new R(),
            color: new Ve()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Ve(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new Ve(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new Ve(),
            groundColor: new Ve()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ve(),
            position: new R(),
            halfWidth: new R(),
            halfHeight: new R()
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
function Vf() {
  const i = {};
  return {
    get: function(e) {
      if (i[e.id] !== void 0)
        return i[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ue()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ue()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new ue(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let kf = 0;
function Wf(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function Xf(i, e) {
  const t = new Hf(), n = Vf(), r = {
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
      numSpotMaps: -1
    },
    ambient: [0, 0, 0],
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
    numSpotLightShadowsWithMaps: 0
  };
  for (let u = 0; u < 9; u++)
    r.probe.push(new R());
  const s = new R(), o = new Ke(), a = new Ke();
  function c(u, d) {
    let f = 0, p = 0, _ = 0;
    for (let H = 0; H < 9; H++)
      r.probe[H].set(0, 0, 0);
    let g = 0, m = 0, h = 0, S = 0, x = 0, b = 0, y = 0, w = 0, q = 0, N = 0;
    u.sort(Wf);
    const v = d === !0 ? Math.PI : 1;
    for (let H = 0, ne = u.length; H < ne; H++) {
      const D = u[H], O = D.color, G = D.intensity, te = D.distance, Z = D.shadow && D.shadow.map ? D.shadow.map.texture : null;
      if (D.isAmbientLight)
        f += O.r * G * v, p += O.g * G * v, _ += O.b * G * v;
      else if (D.isLightProbe)
        for (let V = 0; V < 9; V++)
          r.probe[V].addScaledVector(D.sh.coefficients[V], G);
      else if (D.isDirectionalLight) {
        const V = t.get(D);
        if (V.color.copy(D.color).multiplyScalar(D.intensity * v), D.castShadow) {
          const K = D.shadow, $ = n.get(D);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, r.directionalShadow[g] = $, r.directionalShadowMap[g] = Z, r.directionalShadowMatrix[g] = D.shadow.matrix, b++;
        }
        r.directional[g] = V, g++;
      } else if (D.isSpotLight) {
        const V = t.get(D);
        V.position.setFromMatrixPosition(D.matrixWorld), V.color.copy(O).multiplyScalar(G * v), V.distance = te, V.coneCos = Math.cos(D.angle), V.penumbraCos = Math.cos(D.angle * (1 - D.penumbra)), V.decay = D.decay, r.spot[h] = V;
        const K = D.shadow;
        if (D.map && (r.spotLightMap[q] = D.map, q++, K.updateMatrices(D), D.castShadow && N++), r.spotLightMatrix[h] = K.matrix, D.castShadow) {
          const $ = n.get(D);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, r.spotShadow[h] = $, r.spotShadowMap[h] = Z, w++;
        }
        h++;
      } else if (D.isRectAreaLight) {
        const V = t.get(D);
        V.color.copy(O).multiplyScalar(G), V.halfWidth.set(D.width * 0.5, 0, 0), V.halfHeight.set(0, D.height * 0.5, 0), r.rectArea[S] = V, S++;
      } else if (D.isPointLight) {
        const V = t.get(D);
        if (V.color.copy(D.color).multiplyScalar(D.intensity * v), V.distance = D.distance, V.decay = D.decay, D.castShadow) {
          const K = D.shadow, $ = n.get(D);
          $.shadowBias = K.bias, $.shadowNormalBias = K.normalBias, $.shadowRadius = K.radius, $.shadowMapSize = K.mapSize, $.shadowCameraNear = K.camera.near, $.shadowCameraFar = K.camera.far, r.pointShadow[m] = $, r.pointShadowMap[m] = Z, r.pointShadowMatrix[m] = D.shadow.matrix, y++;
        }
        r.point[m] = V, m++;
      } else if (D.isHemisphereLight) {
        const V = t.get(D);
        V.skyColor.copy(D.color).multiplyScalar(G * v), V.groundColor.copy(D.groundColor).multiplyScalar(G * v), r.hemi[x] = V, x++;
      }
    }
    S > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = fe.LTC_FLOAT_1, r.rectAreaLTC2 = fe.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = fe.LTC_HALF_1, r.rectAreaLTC2 = fe.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = f, r.ambient[1] = p, r.ambient[2] = _;
    const A = r.hash;
    (A.directionalLength !== g || A.pointLength !== m || A.spotLength !== h || A.rectAreaLength !== S || A.hemiLength !== x || A.numDirectionalShadows !== b || A.numPointShadows !== y || A.numSpotShadows !== w || A.numSpotMaps !== q) && (r.directional.length = g, r.spot.length = h, r.rectArea.length = S, r.point.length = m, r.hemi.length = x, r.directionalShadow.length = b, r.directionalShadowMap.length = b, r.pointShadow.length = y, r.pointShadowMap.length = y, r.spotShadow.length = w, r.spotShadowMap.length = w, r.directionalShadowMatrix.length = b, r.pointShadowMatrix.length = y, r.spotLightMatrix.length = w + q - N, r.spotLightMap.length = q, r.numSpotLightShadowsWithMaps = N, A.directionalLength = g, A.pointLength = m, A.spotLength = h, A.rectAreaLength = S, A.hemiLength = x, A.numDirectionalShadows = b, A.numPointShadows = y, A.numSpotShadows = w, A.numSpotMaps = q, r.version = kf++);
  }
  function l(u, d) {
    let f = 0, p = 0, _ = 0, g = 0, m = 0;
    const h = d.matrixWorldInverse;
    for (let S = 0, x = u.length; S < x; S++) {
      const b = u[S];
      if (b.isDirectionalLight) {
        const y = r.directional[f];
        y.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(h), f++;
      } else if (b.isSpotLight) {
        const y = r.spot[_];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(h), y.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), y.direction.sub(s), y.direction.transformDirection(h), _++;
      } else if (b.isRectAreaLight) {
        const y = r.rectArea[g];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(h), a.identity(), o.copy(b.matrixWorld), o.premultiply(h), a.extractRotation(o), y.halfWidth.set(b.width * 0.5, 0, 0), y.halfHeight.set(0, b.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (b.isPointLight) {
        const y = r.point[p];
        y.position.setFromMatrixPosition(b.matrixWorld), y.position.applyMatrix4(h), p++;
      } else if (b.isHemisphereLight) {
        const y = r.hemi[m];
        y.direction.setFromMatrixPosition(b.matrixWorld), y.direction.transformDirection(h), m++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: r
  };
}
function Wa(i, e) {
  const t = new Xf(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(d) {
    n.push(d);
  }
  function a(d) {
    r.push(d);
  }
  function c(d) {
    t.setup(n, d);
  }
  function l(d) {
    t.setupView(n, d);
  }
  return {
    init: s,
    state: {
      lightsArray: n,
      shadowsArray: r,
      lights: t
    },
    setupLights: c,
    setupLightsView: l,
    pushLight: o,
    pushShadow: a
  };
}
function Yf(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new Wa(i, e), t.set(s, [c])) : o >= a.length ? (c = new Wa(i, e), a.push(c)) : c = a[o], c;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class jf extends oi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = tc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Zf extends oi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const Kf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Jf = `uniform sampler2D shadow_pass;
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
}`;
function $f(i, e, t) {
  let n = new xs();
  const r = new ue(), s = new ue(), o = new je(), a = new jf({ depthPacking: nc }), c = new Zf(), l = {}, u = t.maxTextureSize, d = { [on]: mt, [mt]: on, [zt]: zt }, f = new An({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new ue() },
      radius: { value: 4 }
    },
    vertexShader: Kf,
    fragmentShader: Jf
  }), p = f.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const _ = new St();
  _.setAttribute(
    "position",
    new Gt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const g = new Pt(_, f), m = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Mo;
  let h = this.type;
  this.render = function(y, w, q) {
    if (m.enabled === !1 || m.autoUpdate === !1 && m.needsUpdate === !1 || y.length === 0)
      return;
    const N = i.getRenderTarget(), v = i.getActiveCubeFace(), A = i.getActiveMipmapLevel(), H = i.state;
    H.setBlending(an), H.buffers.color.setClear(1, 1, 1, 1), H.buffers.depth.setTest(!0), H.setScissorTest(!1);
    const ne = h !== Jt && this.type === Jt, D = h === Jt && this.type !== Jt;
    for (let O = 0, G = y.length; O < G; O++) {
      const te = y[O], Z = te.shadow;
      if (Z === void 0) {
        console.warn("THREE.WebGLShadowMap:", te, "has no shadow.");
        continue;
      }
      if (Z.autoUpdate === !1 && Z.needsUpdate === !1)
        continue;
      r.copy(Z.mapSize);
      const V = Z.getFrameExtents();
      if (r.multiply(V), s.copy(Z.mapSize), (r.x > u || r.y > u) && (r.x > u && (s.x = Math.floor(u / V.x), r.x = s.x * V.x, Z.mapSize.x = s.x), r.y > u && (s.y = Math.floor(u / V.y), r.y = s.y * V.y, Z.mapSize.y = s.y)), Z.map === null || ne === !0 || D === !0) {
        const $ = this.type !== Jt ? { minFilter: pt, magFilter: pt } : {};
        Z.map !== null && Z.map.dispose(), Z.map = new yn(r.x, r.y, $), Z.map.texture.name = te.name + ".shadowMap", Z.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(Z.map), i.clear();
      const K = Z.getViewportCount();
      for (let $ = 0; $ < K; $++) {
        const ce = Z.getViewport($);
        o.set(
          s.x * ce.x,
          s.y * ce.y,
          s.x * ce.z,
          s.y * ce.w
        ), H.viewport(o), Z.updateMatrices(te, $), n = Z.getFrustum(), b(w, q, Z.camera, te, this.type);
      }
      Z.isPointLightShadow !== !0 && this.type === Jt && S(Z, q), Z.needsUpdate = !1;
    }
    h = this.type, m.needsUpdate = !1, i.setRenderTarget(N, v, A);
  };
  function S(y, w) {
    const q = e.update(g);
    f.defines.VSM_SAMPLES !== y.blurSamples && (f.defines.VSM_SAMPLES = y.blurSamples, p.defines.VSM_SAMPLES = y.blurSamples, f.needsUpdate = !0, p.needsUpdate = !0), y.mapPass === null && (y.mapPass = new yn(r.x, r.y)), f.uniforms.shadow_pass.value = y.map.texture, f.uniforms.resolution.value = y.mapSize, f.uniforms.radius.value = y.radius, i.setRenderTarget(y.mapPass), i.clear(), i.renderBufferDirect(w, null, q, f, g, null), p.uniforms.shadow_pass.value = y.mapPass.texture, p.uniforms.resolution.value = y.mapSize, p.uniforms.radius.value = y.radius, i.setRenderTarget(y.map), i.clear(), i.renderBufferDirect(w, null, q, p, g, null);
  }
  function x(y, w, q, N) {
    let v = null;
    const A = q.isPointLight === !0 ? y.customDistanceMaterial : y.customDepthMaterial;
    if (A !== void 0)
      v = A;
    else if (v = q.isPointLight === !0 ? c : a, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const H = v.uuid, ne = w.uuid;
      let D = l[H];
      D === void 0 && (D = {}, l[H] = D);
      let O = D[ne];
      O === void 0 && (O = v.clone(), D[ne] = O), v = O;
    }
    if (v.visible = w.visible, v.wireframe = w.wireframe, N === Jt ? v.side = w.shadowSide !== null ? w.shadowSide : w.side : v.side = w.shadowSide !== null ? w.shadowSide : d[w.side], v.alphaMap = w.alphaMap, v.alphaTest = w.alphaTest, v.map = w.map, v.clipShadows = w.clipShadows, v.clippingPlanes = w.clippingPlanes, v.clipIntersection = w.clipIntersection, v.displacementMap = w.displacementMap, v.displacementScale = w.displacementScale, v.displacementBias = w.displacementBias, v.wireframeLinewidth = w.wireframeLinewidth, v.linewidth = w.linewidth, q.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
      const H = i.properties.get(v);
      H.light = q;
    }
    return v;
  }
  function b(y, w, q, N, v) {
    if (y.visible === !1)
      return;
    if (y.layers.test(w.layers) && (y.isMesh || y.isLine || y.isPoints) && (y.castShadow || y.receiveShadow && v === Jt) && (!y.frustumCulled || n.intersectsObject(y))) {
      y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, y.matrixWorld);
      const ne = e.update(y), D = y.material;
      if (Array.isArray(D)) {
        const O = ne.groups;
        for (let G = 0, te = O.length; G < te; G++) {
          const Z = O[G], V = D[Z.materialIndex];
          if (V && V.visible) {
            const K = x(y, V, N, v);
            i.renderBufferDirect(q, null, ne, K, y, Z);
          }
        }
      } else if (D.visible) {
        const O = x(y, D, N, v);
        i.renderBufferDirect(q, null, ne, O, y, null);
      }
    }
    const H = y.children;
    for (let ne = 0, D = H.length; ne < D; ne++)
      b(H[ne], w, q, N, v);
  }
}
function Qf(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let L = !1;
    const W = new je();
    let se = null;
    const ve = new je(0, 0, 0, 0);
    return {
      setMask: function(Ae) {
        se !== Ae && !L && (i.colorMask(Ae, Ae, Ae, Ae), se = Ae);
      },
      setLocked: function(Ae) {
        L = Ae;
      },
      setClear: function(Ae, Xe, Ye, lt, Qt) {
        Qt === !0 && (Ae *= lt, Xe *= lt, Ye *= lt), W.set(Ae, Xe, Ye, lt), ve.equals(W) === !1 && (i.clearColor(Ae, Xe, Ye, lt), ve.copy(W));
      },
      reset: function() {
        L = !1, se = null, ve.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let L = !1, W = null, se = null, ve = null;
    return {
      setTest: function(Ae) {
        Ae ? C(i.DEPTH_TEST) : Te(i.DEPTH_TEST);
      },
      setMask: function(Ae) {
        W !== Ae && !L && (i.depthMask(Ae), W = Ae);
      },
      setFunc: function(Ae) {
        if (se !== Ae) {
          switch (Ae) {
            case bl:
              i.depthFunc(i.NEVER);
              break;
            case Al:
              i.depthFunc(i.ALWAYS);
              break;
            case wl:
              i.depthFunc(i.LESS);
              break;
            case Qr:
              i.depthFunc(i.LEQUAL);
              break;
            case Pl:
              i.depthFunc(i.EQUAL);
              break;
            case Rl:
              i.depthFunc(i.GEQUAL);
              break;
            case Cl:
              i.depthFunc(i.GREATER);
              break;
            case Ll:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          se = Ae;
        }
      },
      setLocked: function(Ae) {
        L = Ae;
      },
      setClear: function(Ae) {
        ve !== Ae && (i.clearDepth(Ae), ve = Ae);
      },
      reset: function() {
        L = !1, W = null, se = null, ve = null;
      }
    };
  }
  function o() {
    let L = !1, W = null, se = null, ve = null, Ae = null, Xe = null, Ye = null, lt = null, Qt = null;
    return {
      setTest: function($e) {
        L || ($e ? C(i.STENCIL_TEST) : Te(i.STENCIL_TEST));
      },
      setMask: function($e) {
        W !== $e && !L && (i.stencilMask($e), W = $e);
      },
      setFunc: function($e, Et, Ft) {
        (se !== $e || ve !== Et || Ae !== Ft) && (i.stencilFunc($e, Et, Ft), se = $e, ve = Et, Ae = Ft);
      },
      setOp: function($e, Et, Ft) {
        (Xe !== $e || Ye !== Et || lt !== Ft) && (i.stencilOp($e, Et, Ft), Xe = $e, Ye = Et, lt = Ft);
      },
      setLocked: function($e) {
        L = $e;
      },
      setClear: function($e) {
        Qt !== $e && (i.clearStencil($e), Qt = $e);
      },
      reset: function() {
        L = !1, W = null, se = null, ve = null, Ae = null, Xe = null, Ye = null, lt = null, Qt = null;
      }
    };
  }
  const a = new r(), c = new s(), l = new o(), u = /* @__PURE__ */ new WeakMap(), d = /* @__PURE__ */ new WeakMap();
  let f = {}, p = {}, _ = /* @__PURE__ */ new WeakMap(), g = [], m = null, h = !1, S = null, x = null, b = null, y = null, w = null, q = null, N = null, v = !1, A = null, H = null, ne = null, D = null, O = null;
  const G = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let te = !1, Z = 0;
  const V = i.getParameter(i.VERSION);
  V.indexOf("WebGL") !== -1 ? (Z = parseFloat(/^WebGL (\d)/.exec(V)[1]), te = Z >= 1) : V.indexOf("OpenGL ES") !== -1 && (Z = parseFloat(/^OpenGL ES (\d)/.exec(V)[1]), te = Z >= 2);
  let K = null, $ = {};
  const ce = i.getParameter(i.SCISSOR_BOX), pe = i.getParameter(i.VIEWPORT), z = new je().fromArray(ce), j = new je().fromArray(pe);
  function le(L, W, se, ve) {
    const Ae = new Uint8Array(4), Xe = i.createTexture();
    i.bindTexture(L, Xe), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ye = 0; Ye < se; Ye++)
      n && (L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY) ? i.texImage3D(W, 0, i.RGBA, 1, 1, ve, 0, i.RGBA, i.UNSIGNED_BYTE, Ae) : i.texImage2D(W + Ye, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, Ae);
    return Xe;
  }
  const _e = {};
  _e[i.TEXTURE_2D] = le(i.TEXTURE_2D, i.TEXTURE_2D, 1), _e[i.TEXTURE_CUBE_MAP] = le(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (_e[i.TEXTURE_2D_ARRAY] = le(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), _e[i.TEXTURE_3D] = le(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), C(i.DEPTH_TEST), c.setFunc(Qr), oe(!1), we(Cs), C(i.CULL_FACE), Q(an);
  function C(L) {
    f[L] !== !0 && (i.enable(L), f[L] = !0);
  }
  function Te(L) {
    f[L] !== !1 && (i.disable(L), f[L] = !1);
  }
  function Ce(L, W) {
    return p[L] !== W ? (i.bindFramebuffer(L, W), p[L] = W, n && (L === i.DRAW_FRAMEBUFFER && (p[i.FRAMEBUFFER] = W), L === i.FRAMEBUFFER && (p[i.DRAW_FRAMEBUFFER] = W)), !0) : !1;
  }
  function ae(L, W) {
    let se = g, ve = !1;
    if (L)
      if (se = _.get(W), se === void 0 && (se = [], _.set(W, se)), L.isWebGLMultipleRenderTargets) {
        const Ae = L.texture;
        if (se.length !== Ae.length || se[0] !== i.COLOR_ATTACHMENT0) {
          for (let Xe = 0, Ye = Ae.length; Xe < Ye; Xe++)
            se[Xe] = i.COLOR_ATTACHMENT0 + Xe;
          se.length = Ae.length, ve = !0;
        }
      } else
        se[0] !== i.COLOR_ATTACHMENT0 && (se[0] = i.COLOR_ATTACHMENT0, ve = !0);
    else
      se[0] !== i.BACK && (se[0] = i.BACK, ve = !0);
    ve && (t.isWebGL2 ? i.drawBuffers(se) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se));
  }
  function Se(L) {
    return m !== L ? (i.useProgram(L), m = L, !0) : !1;
  }
  const ee = {
    [Yn]: i.FUNC_ADD,
    [pl]: i.FUNC_SUBTRACT,
    [ml]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    ee[Us] = i.MIN, ee[Is] = i.MAX;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && (ee[Us] = L.MIN_EXT, ee[Is] = L.MAX_EXT);
  }
  const k = {
    [_l]: i.ZERO,
    [gl]: i.ONE,
    [xl]: i.SRC_COLOR,
    [So]: i.SRC_ALPHA,
    [Tl]: i.SRC_ALPHA_SATURATE,
    [El]: i.DST_COLOR,
    [Ml]: i.DST_ALPHA,
    [vl]: i.ONE_MINUS_SRC_COLOR,
    [Eo]: i.ONE_MINUS_SRC_ALPHA,
    [yl]: i.ONE_MINUS_DST_COLOR,
    [Sl]: i.ONE_MINUS_DST_ALPHA
  };
  function Q(L, W, se, ve, Ae, Xe, Ye, lt) {
    if (L === an) {
      h === !0 && (Te(i.BLEND), h = !1);
      return;
    }
    if (h === !1 && (C(i.BLEND), h = !0), L !== fl) {
      if (L !== S || lt !== v) {
        if ((x !== Yn || w !== Yn) && (i.blendEquation(i.FUNC_ADD), x = Yn, w = Yn), lt)
          switch (L) {
            case Kn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ls:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case qs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ds:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Kn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case Ls:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case qs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Ds:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, y = null, q = null, N = null, S = L, v = lt;
      }
      return;
    }
    Ae = Ae || W, Xe = Xe || se, Ye = Ye || ve, (W !== x || Ae !== w) && (i.blendEquationSeparate(ee[W], ee[Ae]), x = W, w = Ae), (se !== b || ve !== y || Xe !== q || Ye !== N) && (i.blendFuncSeparate(k[se], k[ve], k[Xe], k[Ye]), b = se, y = ve, q = Xe, N = Ye), S = L, v = !1;
  }
  function ge(L, W) {
    L.side === zt ? Te(i.CULL_FACE) : C(i.CULL_FACE);
    let se = L.side === mt;
    W && (se = !se), oe(se), L.blending === Kn && L.transparent === !1 ? Q(an) : Q(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), a.setMask(L.colorWrite);
    const ve = L.stencilWrite;
    l.setTest(ve), ve && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Ee(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? C(i.SAMPLE_ALPHA_TO_COVERAGE) : Te(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function oe(L) {
    A !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), A = L);
  }
  function we(L) {
    L !== ul ? (C(i.CULL_FACE), L !== H && (L === Cs ? i.cullFace(i.BACK) : L === hl ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Te(i.CULL_FACE), H = L;
  }
  function Pe(L) {
    L !== ne && (te && i.lineWidth(L), ne = L);
  }
  function Ee(L, W, se) {
    L ? (C(i.POLYGON_OFFSET_FILL), (D !== W || O !== se) && (i.polygonOffset(W, se), D = W, O = se)) : Te(i.POLYGON_OFFSET_FILL);
  }
  function qe(L) {
    L ? C(i.SCISSOR_TEST) : Te(i.SCISSOR_TEST);
  }
  function he(L) {
    L === void 0 && (L = i.TEXTURE0 + G - 1), K !== L && (i.activeTexture(L), K = L);
  }
  function T(L, W, se) {
    se === void 0 && (K === null ? se = i.TEXTURE0 + G - 1 : se = K);
    let ve = $[se];
    ve === void 0 && (ve = { type: void 0, texture: void 0 }, $[se] = ve), (ve.type !== L || ve.texture !== W) && (K !== se && (i.activeTexture(se), K = se), i.bindTexture(L, W || _e[L]), ve.type = L, ve.texture = W);
  }
  function M() {
    const L = $[K];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function F() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ie() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function re() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function de() {
    try {
      i.texSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function P() {
    try {
      i.compressedTexSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function J() {
    try {
      i.compressedTexSubImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function B() {
    try {
      i.texStorage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function me() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Me() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function be() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function xe(L) {
    z.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), z.copy(L));
  }
  function ye(L) {
    j.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), j.copy(L));
  }
  function De(L, W) {
    let se = d.get(W);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), d.set(W, se));
    let ve = se.get(L);
    ve === void 0 && (ve = i.getUniformBlockIndex(W, L.name), se.set(L, ve));
  }
  function Oe(L, W) {
    const ve = d.get(W).get(L);
    u.get(W) !== ve && (i.uniformBlockBinding(W, ve, L.__bindingPointIndex), u.set(W, ve));
  }
  function Je() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), f = {}, K = null, $ = {}, p = {}, _ = /* @__PURE__ */ new WeakMap(), g = [], m = null, h = !1, S = null, x = null, b = null, y = null, w = null, q = null, N = null, v = !1, A = null, H = null, ne = null, D = null, O = null, z.set(0, 0, i.canvas.width, i.canvas.height), j.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: C,
    disable: Te,
    bindFramebuffer: Ce,
    drawBuffers: ae,
    useProgram: Se,
    setBlending: Q,
    setMaterial: ge,
    setFlipSided: oe,
    setCullFace: we,
    setLineWidth: Pe,
    setPolygonOffset: Ee,
    setScissorTest: qe,
    activeTexture: he,
    bindTexture: T,
    unbindTexture: M,
    compressedTexImage2D: F,
    compressedTexImage3D: ie,
    texImage2D: Me,
    texImage3D: be,
    updateUBOMapping: De,
    uniformBlockBinding: Oe,
    texStorage2D: B,
    texStorage3D: me,
    texSubImage2D: re,
    texSubImage3D: de,
    compressedTexSubImage2D: P,
    compressedTexSubImage3D: J,
    scissor: xe,
    viewport: ye,
    reset: Je
  };
}
function ep(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, c = r.maxTextures, l = r.maxCubemapSize, u = r.maxTextureSize, d = r.maxSamples, f = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, p = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), _ = /* @__PURE__ */ new WeakMap();
  let g;
  const m = /* @__PURE__ */ new WeakMap();
  let h = !1;
  try {
    h = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function S(T, M) {
    return h ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, M)
    ) : rr("canvas");
  }
  function x(T, M, F, ie) {
    let re = 1;
    if ((T.width > ie || T.height > ie) && (re = ie / Math.max(T.width, T.height)), re < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const de = M ? ac : Math.floor, P = de(re * T.width), J = de(re * T.height);
        g === void 0 && (g = S(P, J));
        const B = F ? S(P, J) : g;
        return B.width = P, B.height = J, B.getContext("2d").drawImage(T, 0, 0, P, J), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + P + "x" + J + ")."), B;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function b(T) {
    return la(T.width) && la(T.height);
  }
  function y(T) {
    return a ? !1 : T.wrapS !== It || T.wrapT !== It || T.minFilter !== pt && T.minFilter !== At;
  }
  function w(T, M) {
    return T.generateMipmaps && M && T.minFilter !== pt && T.minFilter !== At;
  }
  function q(T) {
    i.generateMipmap(T);
  }
  function N(T, M, F, ie, re = !1) {
    if (a === !1)
      return M;
    if (T !== null) {
      if (i[T] !== void 0)
        return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let de = M;
    return M === i.RED && (F === i.FLOAT && (de = i.R32F), F === i.HALF_FLOAT && (de = i.R16F), F === i.UNSIGNED_BYTE && (de = i.R8)), M === i.RG && (F === i.FLOAT && (de = i.RG32F), F === i.HALF_FLOAT && (de = i.RG16F), F === i.UNSIGNED_BYTE && (de = i.RG8)), M === i.RGBA && (F === i.FLOAT && (de = i.RGBA32F), F === i.HALF_FLOAT && (de = i.RGBA16F), F === i.UNSIGNED_BYTE && (de = ie === Ie && re === !1 ? i.SRGB8_ALPHA8 : i.RGBA8), F === i.UNSIGNED_SHORT_4_4_4_4 && (de = i.RGBA4), F === i.UNSIGNED_SHORT_5_5_5_1 && (de = i.RGB5_A1)), (de === i.R16F || de === i.R32F || de === i.RG16F || de === i.RG32F || de === i.RGBA16F || de === i.RGBA32F) && e.get("EXT_color_buffer_float"), de;
  }
  function v(T, M, F) {
    return w(T, F) === !0 || T.isFramebufferTexture && T.minFilter !== pt && T.minFilter !== At ? Math.log2(Math.max(M.width, M.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? M.mipmaps.length : 1;
  }
  function A(T) {
    return T === pt || T === Ns || T === mr ? i.NEAREST : i.LINEAR;
  }
  function H(T) {
    const M = T.target;
    M.removeEventListener("dispose", H), D(M), M.isVideoTexture && _.delete(M);
  }
  function ne(T) {
    const M = T.target;
    M.removeEventListener("dispose", ne), G(M);
  }
  function D(T) {
    const M = n.get(T);
    if (M.__webglInit === void 0)
      return;
    const F = T.source, ie = m.get(F);
    if (ie) {
      const re = ie[M.__cacheKey];
      re.usedTimes--, re.usedTimes === 0 && O(T), Object.keys(ie).length === 0 && m.delete(F);
    }
    n.remove(T);
  }
  function O(T) {
    const M = n.get(T);
    i.deleteTexture(M.__webglTexture);
    const F = T.source, ie = m.get(F);
    delete ie[M.__cacheKey], o.memory.textures--;
  }
  function G(T) {
    const M = T.texture, F = n.get(T), ie = n.get(M);
    if (ie.__webglTexture !== void 0 && (i.deleteTexture(ie.__webglTexture), o.memory.textures--), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let re = 0; re < 6; re++)
        i.deleteFramebuffer(F.__webglFramebuffer[re]), F.__webglDepthbuffer && i.deleteRenderbuffer(F.__webglDepthbuffer[re]);
    else {
      if (i.deleteFramebuffer(F.__webglFramebuffer), F.__webglDepthbuffer && i.deleteRenderbuffer(F.__webglDepthbuffer), F.__webglMultisampledFramebuffer && i.deleteFramebuffer(F.__webglMultisampledFramebuffer), F.__webglColorRenderbuffer)
        for (let re = 0; re < F.__webglColorRenderbuffer.length; re++)
          F.__webglColorRenderbuffer[re] && i.deleteRenderbuffer(F.__webglColorRenderbuffer[re]);
      F.__webglDepthRenderbuffer && i.deleteRenderbuffer(F.__webglDepthRenderbuffer);
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let re = 0, de = M.length; re < de; re++) {
        const P = n.get(M[re]);
        P.__webglTexture && (i.deleteTexture(P.__webglTexture), o.memory.textures--), n.remove(M[re]);
      }
    n.remove(M), n.remove(T);
  }
  let te = 0;
  function Z() {
    te = 0;
  }
  function V() {
    const T = te;
    return T >= c && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + c), te += 1, T;
  }
  function K(T) {
    const M = [];
    return M.push(T.wrapS), M.push(T.wrapT), M.push(T.wrapR || 0), M.push(T.magFilter), M.push(T.minFilter), M.push(T.anisotropy), M.push(T.internalFormat), M.push(T.format), M.push(T.type), M.push(T.generateMipmaps), M.push(T.premultiplyAlpha), M.push(T.flipY), M.push(T.unpackAlignment), M.push(T.colorSpace), M.join();
  }
  function $(T, M) {
    const F = n.get(T);
    if (T.isVideoTexture && qe(T), T.isRenderTargetTexture === !1 && T.version > 0 && F.__version !== T.version) {
      const ie = T.image;
      if (ie === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (ie.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Te(F, T, M);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, F.__webglTexture, i.TEXTURE0 + M);
  }
  function ce(T, M) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Te(F, T, M);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, F.__webglTexture, i.TEXTURE0 + M);
  }
  function pe(T, M) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Te(F, T, M);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, F.__webglTexture, i.TEXTURE0 + M);
  }
  function z(T, M) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      Ce(F, T, M);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, F.__webglTexture, i.TEXTURE0 + M);
  }
  const j = {
    [ns]: i.REPEAT,
    [It]: i.CLAMP_TO_EDGE,
    [is]: i.MIRRORED_REPEAT
  }, le = {
    [pt]: i.NEAREST,
    [Ns]: i.NEAREST_MIPMAP_NEAREST,
    [mr]: i.NEAREST_MIPMAP_LINEAR,
    [At]: i.LINEAR,
    [Bl]: i.LINEAR_MIPMAP_NEAREST,
    [Ei]: i.LINEAR_MIPMAP_LINEAR
  };
  function _e(T, M, F) {
    if (F ? (i.texParameteri(T, i.TEXTURE_WRAP_S, j[M.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, j[M.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, j[M.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, le[M.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, le[M.minFilter])) : (i.texParameteri(T, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(T, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (M.wrapS !== It || M.wrapT !== It) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(T, i.TEXTURE_MAG_FILTER, A(M.magFilter)), i.texParameteri(T, i.TEXTURE_MIN_FILTER, A(M.minFilter)), M.minFilter !== pt && M.minFilter !== At && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const ie = e.get("EXT_texture_filter_anisotropic");
      if (M.magFilter === pt || M.minFilter !== mr && M.minFilter !== Ei || M.type === xn && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === yi && e.has("OES_texture_half_float_linear") === !1)
        return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (i.texParameterf(T, ie.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, r.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy);
    }
  }
  function C(T, M) {
    let F = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, M.addEventListener("dispose", H));
    const ie = M.source;
    let re = m.get(ie);
    re === void 0 && (re = {}, m.set(ie, re));
    const de = K(M);
    if (de !== T.__cacheKey) {
      re[de] === void 0 && (re[de] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, F = !0), re[de].usedTimes++;
      const P = re[T.__cacheKey];
      P !== void 0 && (re[T.__cacheKey].usedTimes--, P.usedTimes === 0 && O(M)), T.__cacheKey = de, T.__webglTexture = re[de].texture;
    }
    return F;
  }
  function Te(T, M, F) {
    let ie = i.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (ie = i.TEXTURE_2D_ARRAY), M.isData3DTexture && (ie = i.TEXTURE_3D);
    const re = C(T, M), de = M.source;
    t.bindTexture(ie, T.__webglTexture, i.TEXTURE0 + F);
    const P = n.get(de);
    if (de.version !== P.__version || re === !0) {
      t.activeTexture(i.TEXTURE0 + F), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const J = y(M) && b(M.image) === !1;
      let B = x(M.image, J, !1, u);
      B = he(M, B);
      const me = b(B) || a, Me = s.convert(M.format, M.colorSpace);
      let be = s.convert(M.type), xe = N(M.internalFormat, Me, be, M.colorSpace);
      _e(ie, M, me);
      let ye;
      const De = M.mipmaps, Oe = a && M.isVideoTexture !== !0, Je = P.__version === void 0 || re === !0, L = v(M, B, me);
      if (M.isDepthTexture)
        xe = i.DEPTH_COMPONENT, a ? M.type === xn ? xe = i.DEPTH_COMPONENT32F : M.type === gn ? xe = i.DEPTH_COMPONENT24 : M.type === Jn ? xe = i.DEPTH24_STENCIL8 : xe = i.DEPTH_COMPONENT16 : M.type === xn && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === vn && xe === i.DEPTH_COMPONENT && M.type !== To && M.type !== gn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = gn, be = s.convert(M.type)), M.format === ri && xe === i.DEPTH_COMPONENT && (xe = i.DEPTH_STENCIL, M.type !== Jn && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = Jn, be = s.convert(M.type))), Je && (Oe ? t.texStorage2D(i.TEXTURE_2D, 1, xe, B.width, B.height) : t.texImage2D(i.TEXTURE_2D, 0, xe, B.width, B.height, 0, Me, be, null));
      else if (M.isDataTexture)
        if (De.length > 0 && me) {
          Oe && Je && t.texStorage2D(i.TEXTURE_2D, L, xe, De[0].width, De[0].height);
          for (let W = 0, se = De.length; W < se; W++)
            ye = De[W], Oe ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ye.width, ye.height, Me, be, ye.data) : t.texImage2D(i.TEXTURE_2D, W, xe, ye.width, ye.height, 0, Me, be, ye.data);
          M.generateMipmaps = !1;
        } else
          Oe ? (Je && t.texStorage2D(i.TEXTURE_2D, L, xe, B.width, B.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, B.width, B.height, Me, be, B.data)) : t.texImage2D(i.TEXTURE_2D, 0, xe, B.width, B.height, 0, Me, be, B.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Oe && Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, L, xe, De[0].width, De[0].height, B.depth);
          for (let W = 0, se = De.length; W < se; W++)
            ye = De[W], M.format !== Nt ? Me !== null ? Oe ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ye.width, ye.height, B.depth, Me, ye.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, W, xe, ye.width, ye.height, B.depth, 0, ye.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, ye.width, ye.height, B.depth, Me, be, ye.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, W, xe, ye.width, ye.height, B.depth, 0, Me, be, ye.data);
        } else {
          Oe && Je && t.texStorage2D(i.TEXTURE_2D, L, xe, De[0].width, De[0].height);
          for (let W = 0, se = De.length; W < se; W++)
            ye = De[W], M.format !== Nt ? Me !== null ? Oe ? t.compressedTexSubImage2D(i.TEXTURE_2D, W, 0, 0, ye.width, ye.height, Me, ye.data) : t.compressedTexImage2D(i.TEXTURE_2D, W, xe, ye.width, ye.height, 0, ye.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Oe ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ye.width, ye.height, Me, be, ye.data) : t.texImage2D(i.TEXTURE_2D, W, xe, ye.width, ye.height, 0, Me, be, ye.data);
        }
      else if (M.isDataArrayTexture)
        Oe ? (Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, L, xe, B.width, B.height, B.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, B.width, B.height, B.depth, Me, be, B.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, xe, B.width, B.height, B.depth, 0, Me, be, B.data);
      else if (M.isData3DTexture)
        Oe ? (Je && t.texStorage3D(i.TEXTURE_3D, L, xe, B.width, B.height, B.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, B.width, B.height, B.depth, Me, be, B.data)) : t.texImage3D(i.TEXTURE_3D, 0, xe, B.width, B.height, B.depth, 0, Me, be, B.data);
      else if (M.isFramebufferTexture) {
        if (Je)
          if (Oe)
            t.texStorage2D(i.TEXTURE_2D, L, xe, B.width, B.height);
          else {
            let W = B.width, se = B.height;
            for (let ve = 0; ve < L; ve++)
              t.texImage2D(i.TEXTURE_2D, ve, xe, W, se, 0, Me, be, null), W >>= 1, se >>= 1;
          }
      } else if (De.length > 0 && me) {
        Oe && Je && t.texStorage2D(i.TEXTURE_2D, L, xe, De[0].width, De[0].height);
        for (let W = 0, se = De.length; W < se; W++)
          ye = De[W], Oe ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, Me, be, ye) : t.texImage2D(i.TEXTURE_2D, W, xe, Me, be, ye);
        M.generateMipmaps = !1;
      } else
        Oe ? (Je && t.texStorage2D(i.TEXTURE_2D, L, xe, B.width, B.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Me, be, B)) : t.texImage2D(i.TEXTURE_2D, 0, xe, Me, be, B);
      w(M, me) && q(ie), P.__version = de.version, M.onUpdate && M.onUpdate(M);
    }
    T.__version = M.version;
  }
  function Ce(T, M, F) {
    if (M.image.length !== 6)
      return;
    const ie = C(T, M), re = M.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + F);
    const de = n.get(re);
    if (re.version !== de.__version || ie === !0) {
      t.activeTexture(i.TEXTURE0 + F), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const P = M.isCompressedTexture || M.image[0].isCompressedTexture, J = M.image[0] && M.image[0].isDataTexture, B = [];
      for (let W = 0; W < 6; W++)
        !P && !J ? B[W] = x(M.image[W], !1, !0, l) : B[W] = J ? M.image[W].image : M.image[W], B[W] = he(M, B[W]);
      const me = B[0], Me = b(me) || a, be = s.convert(M.format, M.colorSpace), xe = s.convert(M.type), ye = N(M.internalFormat, be, xe, M.colorSpace), De = a && M.isVideoTexture !== !0, Oe = de.__version === void 0 || ie === !0;
      let Je = v(M, me, Me);
      _e(i.TEXTURE_CUBE_MAP, M, Me);
      let L;
      if (P) {
        De && Oe && t.texStorage2D(i.TEXTURE_CUBE_MAP, Je, ye, me.width, me.height);
        for (let W = 0; W < 6; W++) {
          L = B[W].mipmaps;
          for (let se = 0; se < L.length; se++) {
            const ve = L[se];
            M.format !== Nt ? be !== null ? De ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, 0, 0, ve.width, ve.height, be, ve.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, ye, ve.width, ve.height, 0, ve.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, 0, 0, ve.width, ve.height, be, xe, ve.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, ye, ve.width, ve.height, 0, be, xe, ve.data);
          }
        }
      } else {
        L = M.mipmaps, De && Oe && (L.length > 0 && Je++, t.texStorage2D(i.TEXTURE_CUBE_MAP, Je, ye, B[0].width, B[0].height));
        for (let W = 0; W < 6; W++)
          if (J) {
            De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, B[W].width, B[W].height, be, xe, B[W].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, ye, B[W].width, B[W].height, 0, be, xe, B[W].data);
            for (let se = 0; se < L.length; se++) {
              const Ae = L[se].image[W].image;
              De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, 0, 0, Ae.width, Ae.height, be, xe, Ae.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, ye, Ae.width, Ae.height, 0, be, xe, Ae.data);
            }
          } else {
            De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, be, xe, B[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, ye, be, xe, B[W]);
            for (let se = 0; se < L.length; se++) {
              const ve = L[se];
              De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, 0, 0, be, xe, ve.image[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, ye, be, xe, ve.image[W]);
            }
          }
      }
      w(M, Me) && q(i.TEXTURE_CUBE_MAP), de.__version = re.version, M.onUpdate && M.onUpdate(M);
    }
    T.__version = M.version;
  }
  function ae(T, M, F, ie, re) {
    const de = s.convert(F.format, F.colorSpace), P = s.convert(F.type), J = N(F.internalFormat, de, P, F.colorSpace);
    n.get(M).__hasExternalTextures || (re === i.TEXTURE_3D || re === i.TEXTURE_2D_ARRAY ? t.texImage3D(re, 0, J, M.width, M.height, M.depth, 0, de, P, null) : t.texImage2D(re, 0, J, M.width, M.height, 0, de, P, null)), t.bindFramebuffer(i.FRAMEBUFFER, T), Ee(M) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, ie, re, n.get(F).__webglTexture, 0, Pe(M)) : (re === i.TEXTURE_2D || re >= i.TEXTURE_CUBE_MAP_POSITIVE_X && re <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, ie, re, n.get(F).__webglTexture, 0), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Se(T, M, F) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), M.depthBuffer && !M.stencilBuffer) {
      let ie = i.DEPTH_COMPONENT16;
      if (F || Ee(M)) {
        const re = M.depthTexture;
        re && re.isDepthTexture && (re.type === xn ? ie = i.DEPTH_COMPONENT32F : re.type === gn && (ie = i.DEPTH_COMPONENT24));
        const de = Pe(M);
        Ee(M) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, de, ie, M.width, M.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, de, ie, M.width, M.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, ie, M.width, M.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, T);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const ie = Pe(M);
      F && Ee(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, ie, i.DEPTH24_STENCIL8, M.width, M.height) : Ee(M) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ie, i.DEPTH24_STENCIL8, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, M.width, M.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, T);
    } else {
      const ie = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
      for (let re = 0; re < ie.length; re++) {
        const de = ie[re], P = s.convert(de.format, de.colorSpace), J = s.convert(de.type), B = N(de.internalFormat, P, J, de.colorSpace), me = Pe(M);
        F && Ee(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, me, B, M.width, M.height) : Ee(M) ? f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, me, B, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, B, M.width, M.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function ee(T, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), $(M.depthTexture, 0);
    const ie = n.get(M.depthTexture).__webglTexture, re = Pe(M);
    if (M.depthTexture.format === vn)
      Ee(M) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ie, 0, re) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, ie, 0);
    else if (M.depthTexture.format === ri)
      Ee(M) ? f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ie, 0, re) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, ie, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function k(T) {
    const M = n.get(T), F = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (F)
        throw new Error("target.depthTexture not supported in Cube render targets");
      ee(M.__webglFramebuffer, T);
    } else if (F) {
      M.__webglDepthbuffer = [];
      for (let ie = 0; ie < 6; ie++)
        t.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer[ie]), M.__webglDepthbuffer[ie] = i.createRenderbuffer(), Se(M.__webglDepthbuffer[ie], T, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer = i.createRenderbuffer(), Se(M.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Q(T, M, F) {
    const ie = n.get(T);
    M !== void 0 && ae(ie.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D), F !== void 0 && k(T);
  }
  function ge(T) {
    const M = T.texture, F = n.get(T), ie = n.get(M);
    T.addEventListener("dispose", ne), T.isWebGLMultipleRenderTargets !== !0 && (ie.__webglTexture === void 0 && (ie.__webglTexture = i.createTexture()), ie.__version = M.version, o.memory.textures++);
    const re = T.isWebGLCubeRenderTarget === !0, de = T.isWebGLMultipleRenderTargets === !0, P = b(T) || a;
    if (re) {
      F.__webglFramebuffer = [];
      for (let J = 0; J < 6; J++)
        F.__webglFramebuffer[J] = i.createFramebuffer();
    } else {
      if (F.__webglFramebuffer = i.createFramebuffer(), de)
        if (r.drawBuffers) {
          const J = T.texture;
          for (let B = 0, me = J.length; B < me; B++) {
            const Me = n.get(J[B]);
            Me.__webglTexture === void 0 && (Me.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && T.samples > 0 && Ee(T) === !1) {
        const J = de ? M : [M];
        F.__webglMultisampledFramebuffer = i.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let B = 0; B < J.length; B++) {
          const me = J[B];
          F.__webglColorRenderbuffer[B] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, F.__webglColorRenderbuffer[B]);
          const Me = s.convert(me.format, me.colorSpace), be = s.convert(me.type), xe = N(me.internalFormat, Me, be, me.colorSpace, T.isXRRenderTarget === !0), ye = Pe(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, ye, xe, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + B, i.RENDERBUFFER, F.__webglColorRenderbuffer[B]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = i.createRenderbuffer(), Se(F.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (re) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, ie.__webglTexture), _e(i.TEXTURE_CUBE_MAP, M, P);
      for (let J = 0; J < 6; J++)
        ae(F.__webglFramebuffer[J], T, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + J);
      w(M, P) && q(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (de) {
      const J = T.texture;
      for (let B = 0, me = J.length; B < me; B++) {
        const Me = J[B], be = n.get(Me);
        t.bindTexture(i.TEXTURE_2D, be.__webglTexture), _e(i.TEXTURE_2D, Me, P), ae(F.__webglFramebuffer, T, Me, i.COLOR_ATTACHMENT0 + B, i.TEXTURE_2D), w(Me, P) && q(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let J = i.TEXTURE_2D;
      (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (a ? J = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(J, ie.__webglTexture), _e(J, M, P), ae(F.__webglFramebuffer, T, M, i.COLOR_ATTACHMENT0, J), w(M, P) && q(J), t.unbindTexture();
    }
    T.depthBuffer && k(T);
  }
  function oe(T) {
    const M = b(T) || a, F = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let ie = 0, re = F.length; ie < re; ie++) {
      const de = F[ie];
      if (w(de, M)) {
        const P = T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, J = n.get(de).__webglTexture;
        t.bindTexture(P, J), q(P), t.unbindTexture();
      }
    }
  }
  function we(T) {
    if (a && T.samples > 0 && Ee(T) === !1) {
      const M = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture], F = T.width, ie = T.height;
      let re = i.COLOR_BUFFER_BIT;
      const de = [], P = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, J = n.get(T), B = T.isWebGLMultipleRenderTargets === !0;
      if (B)
        for (let me = 0; me < M.length; me++)
          t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + me, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + me, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, J.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglFramebuffer);
      for (let me = 0; me < M.length; me++) {
        de.push(i.COLOR_ATTACHMENT0 + me), T.depthBuffer && de.push(P);
        const Me = J.__ignoreDepthValues !== void 0 ? J.__ignoreDepthValues : !1;
        if (Me === !1 && (T.depthBuffer && (re |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && (re |= i.STENCIL_BUFFER_BIT)), B && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, J.__webglColorRenderbuffer[me]), Me === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [P]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [P])), B) {
          const be = n.get(M[me]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, be, 0);
        }
        i.blitFramebuffer(0, 0, F, ie, 0, 0, F, ie, re, i.NEAREST), p && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, de);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), B)
        for (let me = 0; me < M.length; me++) {
          t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + me, i.RENDERBUFFER, J.__webglColorRenderbuffer[me]);
          const Me = n.get(M[me]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + me, i.TEXTURE_2D, Me, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglMultisampledFramebuffer);
    }
  }
  function Pe(T) {
    return Math.min(d, T.samples);
  }
  function Ee(T) {
    const M = n.get(T);
    return a && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function qe(T) {
    const M = o.render.frame;
    _.get(T) !== M && (_.set(T, M), T.update());
  }
  function he(T, M) {
    const F = T.colorSpace, ie = T.format, re = T.type;
    return T.isCompressedTexture === !0 || T.format === rs || F !== Ht && F !== Sn && (F === Ie ? a === !1 ? e.has("EXT_sRGB") === !0 && ie === Nt ? (T.format = rs, T.minFilter = At, T.generateMipmaps = !1) : M = Co.sRGBToLinear(M) : (ie !== Nt || re !== En) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), M;
  }
  this.allocateTextureUnit = V, this.resetTextureUnits = Z, this.setTexture2D = $, this.setTexture2DArray = ce, this.setTexture3D = pe, this.setTextureCube = z, this.rebindTextures = Q, this.setupRenderTarget = ge, this.updateRenderTargetMipmap = oe, this.updateMultisampleRenderTarget = we, this.setupDepthRenderbuffer = k, this.setupFrameBufferTexture = ae, this.useMultisampledRTT = Ee;
}
function tp(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = Sn) {
    let a;
    if (s === En)
      return i.UNSIGNED_BYTE;
    if (s === Vl)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === kl)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === zl)
      return i.BYTE;
    if (s === Gl)
      return i.SHORT;
    if (s === To)
      return i.UNSIGNED_SHORT;
    if (s === Hl)
      return i.INT;
    if (s === gn)
      return i.UNSIGNED_INT;
    if (s === xn)
      return i.FLOAT;
    if (s === yi)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === Wl)
      return i.ALPHA;
    if (s === Nt)
      return i.RGBA;
    if (s === Xl)
      return i.LUMINANCE;
    if (s === Yl)
      return i.LUMINANCE_ALPHA;
    if (s === vn)
      return i.DEPTH_COMPONENT;
    if (s === ri)
      return i.DEPTH_STENCIL;
    if (s === rs)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === jl)
      return i.RED;
    if (s === Zl)
      return i.RED_INTEGER;
    if (s === Kl)
      return i.RG;
    if (s === Jl)
      return i.RG_INTEGER;
    if (s === $l)
      return i.RGBA_INTEGER;
    if (s === _r || s === gr || s === xr || s === vr)
      if (o === Ie)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === _r)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === gr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === xr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === vr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === _r)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === gr)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === xr)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === vr)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Fs || s === Os || s === Bs || s === zs)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === Fs)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Os)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Bs)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === zs)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === Ql)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Gs || s === Hs)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Gs)
          return o === Ie ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Hs)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === Vs || s === ks || s === Ws || s === Xs || s === Ys || s === js || s === Zs || s === Ks || s === Js || s === $s || s === Qs || s === ea || s === ta || s === na)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === Vs)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === ks)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Ws)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Xs)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Ys)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === js)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Zs)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Ks)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === Js)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === $s)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Qs)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === ea)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === ta)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === na)
          return o === Ie ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Mr)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === Mr)
          return o === Ie ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === ec || s === ia || s === ra || s === sa)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === Mr)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === ia)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ra)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === sa)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === Jn ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class np extends wt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class sn extends ot {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const ip = { type: "move" };
class kr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new sn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new sn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new sn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t)
        for (const n of e.hand.values())
          this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this._hand !== null && (this._hand.visible = !1), this;
  }
  update(e, t, n) {
    let r = null, s = null, o = null;
    const a = this._targetRay, c = this._grip, l = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (l && e.hand) {
        o = !0;
        for (const g of e.hand.values()) {
          const m = t.getJointPose(g, n), h = this._getHandJoint(l, g);
          m !== null && (h.matrix.fromArray(m.transform.matrix), h.matrix.decompose(h.position, h.rotation, h.scale), h.matrixWorldNeedsUpdate = !0, h.jointRadius = m.radius), h.visible = m !== null;
        }
        const u = l.joints["index-finger-tip"], d = l.joints["thumb-tip"], f = u.position.distanceTo(d.position), p = 0.02, _ = 5e-3;
        l.inputState.pinching && f > p + _ ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && f <= p - _ && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(ip)));
    }
    return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new sn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class rp extends Mt {
  constructor(e, t, n, r, s, o, a, c, l, u) {
    if (u = u !== void 0 ? u : vn, u !== vn && u !== ri)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && u === vn && (n = gn), n === void 0 && u === ri && (n = Jn), super(null, r, s, o, a, c, u, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : pt, this.minFilter = c !== void 0 ? c : pt, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class sp extends Pn {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", c = 1, l = null, u = null, d = null, f = null, p = null, _ = null;
    const g = t.getContextAttributes();
    let m = null, h = null;
    const S = [], x = [], b = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Map(), w = new wt();
    w.layers.enable(1), w.viewport = new je();
    const q = new wt();
    q.layers.enable(2), q.viewport = new je();
    const N = [w, q], v = new np();
    v.layers.enable(1), v.layers.enable(2);
    let A = null, H = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(z) {
      let j = S[z];
      return j === void 0 && (j = new kr(), S[z] = j), j.getTargetRaySpace();
    }, this.getControllerGrip = function(z) {
      let j = S[z];
      return j === void 0 && (j = new kr(), S[z] = j), j.getGripSpace();
    }, this.getHand = function(z) {
      let j = S[z];
      return j === void 0 && (j = new kr(), S[z] = j), j.getHandSpace();
    };
    function ne(z) {
      const j = x.indexOf(z.inputSource);
      if (j === -1)
        return;
      const le = S[j];
      le !== void 0 && (le.update(z.inputSource, z.frame, l || o), le.dispatchEvent({ type: z.type, data: z.inputSource }));
    }
    function D() {
      r.removeEventListener("select", ne), r.removeEventListener("selectstart", ne), r.removeEventListener("selectend", ne), r.removeEventListener("squeeze", ne), r.removeEventListener("squeezestart", ne), r.removeEventListener("squeezeend", ne), r.removeEventListener("end", D), r.removeEventListener("inputsourceschange", O);
      for (let z = 0; z < S.length; z++) {
        const j = x[z];
        j !== null && (x[z] = null, S[z].disconnect(j));
      }
      A = null, H = null, e.setRenderTarget(m), p = null, f = null, d = null, r = null, h = null, pe.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(z) {
      s = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(z) {
      a = z, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(z) {
      l = z;
    }, this.getBaseLayer = function() {
      return f !== null ? f : p;
    }, this.getBinding = function() {
      return d;
    }, this.getFrame = function() {
      return _;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(z) {
      if (r = z, r !== null) {
        if (m = e.getRenderTarget(), r.addEventListener("select", ne), r.addEventListener("selectstart", ne), r.addEventListener("selectend", ne), r.addEventListener("squeeze", ne), r.addEventListener("squeezestart", ne), r.addEventListener("squeezeend", ne), r.addEventListener("end", D), r.addEventListener("inputsourceschange", O), g.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const j = {
            antialias: r.renderState.layers === void 0 ? g.antialias : !0,
            alpha: !0,
            depth: g.depth,
            stencil: g.stencil,
            framebufferScaleFactor: s
          };
          p = new XRWebGLLayer(r, t, j), r.updateRenderState({ baseLayer: p }), h = new yn(
            p.framebufferWidth,
            p.framebufferHeight,
            {
              format: Nt,
              type: En,
              colorSpace: e.outputColorSpace,
              stencilBuffer: g.stencil
            }
          );
        } else {
          let j = null, le = null, _e = null;
          g.depth && (_e = g.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, j = g.stencil ? ri : vn, le = g.stencil ? Jn : gn);
          const C = {
            colorFormat: t.RGBA8,
            depthFormat: _e,
            scaleFactor: s
          };
          d = new XRWebGLBinding(r, t), f = d.createProjectionLayer(C), r.updateRenderState({ layers: [f] }), h = new yn(
            f.textureWidth,
            f.textureHeight,
            {
              format: Nt,
              type: En,
              depthTexture: new rp(f.textureWidth, f.textureHeight, le, void 0, void 0, void 0, void 0, void 0, void 0, j),
              stencilBuffer: g.stencil,
              colorSpace: e.outputColorSpace,
              samples: g.antialias ? 4 : 0
            }
          );
          const Te = e.properties.get(h);
          Te.__ignoreDepthValues = f.ignoreDepthValues;
        }
        h.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await r.requestReferenceSpace(a), pe.setContext(r), pe.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function O(z) {
      for (let j = 0; j < z.removed.length; j++) {
        const le = z.removed[j], _e = x.indexOf(le);
        _e >= 0 && (x[_e] = null, S[_e].disconnect(le));
      }
      for (let j = 0; j < z.added.length; j++) {
        const le = z.added[j];
        let _e = x.indexOf(le);
        if (_e === -1) {
          for (let Te = 0; Te < S.length; Te++)
            if (Te >= x.length) {
              x.push(le), _e = Te;
              break;
            } else if (x[Te] === null) {
              x[Te] = le, _e = Te;
              break;
            }
          if (_e === -1)
            break;
        }
        const C = S[_e];
        C && C.connect(le);
      }
    }
    const G = new R(), te = new R();
    function Z(z, j, le) {
      G.setFromMatrixPosition(j.matrixWorld), te.setFromMatrixPosition(le.matrixWorld);
      const _e = G.distanceTo(te), C = j.projectionMatrix.elements, Te = le.projectionMatrix.elements, Ce = C[14] / (C[10] - 1), ae = C[14] / (C[10] + 1), Se = (C[9] + 1) / C[5], ee = (C[9] - 1) / C[5], k = (C[8] - 1) / C[0], Q = (Te[8] + 1) / Te[0], ge = Ce * k, oe = Ce * Q, we = _e / (-k + Q), Pe = we * -k;
      j.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(Pe), z.translateZ(we), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse.copy(z.matrixWorld).invert();
      const Ee = Ce + we, qe = ae + we, he = ge - Pe, T = oe + (_e - Pe), M = Se * ae / qe * Ee, F = ee * ae / qe * Ee;
      z.projectionMatrix.makePerspective(he, T, M, F, Ee, qe), z.projectionMatrixInverse.copy(z.projectionMatrix).invert();
    }
    function V(z, j) {
      j === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(j.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert();
    }
    this.updateCamera = function(z) {
      if (r === null)
        return;
      v.near = q.near = w.near = z.near, v.far = q.far = w.far = z.far, (A !== v.near || H !== v.far) && (r.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), A = v.near, H = v.far);
      const j = z.parent, le = v.cameras;
      V(v, j);
      for (let _e = 0; _e < le.length; _e++)
        V(le[_e], j);
      le.length === 2 ? Z(v, w, q) : v.projectionMatrix.copy(w.projectionMatrix), K(z, v, j);
    };
    function K(z, j, le) {
      le === null ? z.matrix.copy(j.matrixWorld) : (z.matrix.copy(le.matrixWorld), z.matrix.invert(), z.matrix.multiply(j.matrixWorld)), z.matrix.decompose(z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0);
      const _e = z.children;
      for (let C = 0, Te = _e.length; C < Te; C++)
        _e[C].updateMatrixWorld(!0);
      z.projectionMatrix.copy(j.projectionMatrix), z.projectionMatrixInverse.copy(j.projectionMatrixInverse), z.isPerspectiveCamera && (z.fov = ss * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(f === null && p === null))
        return c;
    }, this.setFoveation = function(z) {
      c = z, f !== null && (f.fixedFoveation = z), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = z);
    }, this.getPlanes = function() {
      return b;
    };
    let $ = null;
    function ce(z, j) {
      if (u = j.getViewerPose(l || o), _ = j, u !== null) {
        const le = u.views;
        p !== null && (e.setRenderTargetFramebuffer(h, p.framebuffer), e.setRenderTarget(h));
        let _e = !1;
        le.length !== v.cameras.length && (v.cameras.length = 0, _e = !0);
        for (let C = 0; C < le.length; C++) {
          const Te = le[C];
          let Ce = null;
          if (p !== null)
            Ce = p.getViewport(Te);
          else {
            const Se = d.getViewSubImage(f, Te);
            Ce = Se.viewport, C === 0 && (e.setRenderTargetTextures(
              h,
              Se.colorTexture,
              f.ignoreDepthValues ? void 0 : Se.depthStencilTexture
            ), e.setRenderTarget(h));
          }
          let ae = N[C];
          ae === void 0 && (ae = new wt(), ae.layers.enable(C), ae.viewport = new je(), N[C] = ae), ae.matrix.fromArray(Te.transform.matrix), ae.matrix.decompose(ae.position, ae.quaternion, ae.scale), ae.projectionMatrix.fromArray(Te.projectionMatrix), ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(), ae.viewport.set(Ce.x, Ce.y, Ce.width, Ce.height), C === 0 && (v.matrix.copy(ae.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), _e === !0 && v.cameras.push(ae);
        }
      }
      for (let le = 0; le < S.length; le++) {
        const _e = x[le], C = S[le];
        _e !== null && C !== void 0 && C.update(_e, j, l || o);
      }
      if ($ && $(z, j), j.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: j.detectedPlanes });
        let le = null;
        for (const _e of b)
          j.detectedPlanes.has(_e) || (le === null && (le = []), le.push(_e));
        if (le !== null)
          for (const _e of le)
            b.delete(_e), y.delete(_e), n.dispatchEvent({ type: "planeremoved", data: _e });
        for (const _e of j.detectedPlanes)
          if (!b.has(_e))
            b.add(_e), y.set(_e, j.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: _e });
          else {
            const C = y.get(_e);
            _e.lastChangedTime > C && (y.set(_e, _e.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: _e }));
          }
      }
      _ = null;
    }
    const pe = new Go();
    pe.setAnimationLoop(ce), this.setAnimationLoop = function(z) {
      $ = z;
    }, this.dispose = function() {
    };
  }
}
function ap(i, e) {
  function t(m, h) {
    m.matrixAutoUpdate === !0 && m.updateMatrix(), h.value.copy(m.matrix);
  }
  function n(m, h) {
    h.color.getRGB(m.fogColor.value, Oo(i)), h.isFog ? (m.fogNear.value = h.near, m.fogFar.value = h.far) : h.isFogExp2 && (m.fogDensity.value = h.density);
  }
  function r(m, h, S, x, b) {
    h.isMeshBasicMaterial || h.isMeshLambertMaterial ? s(m, h) : h.isMeshToonMaterial ? (s(m, h), d(m, h)) : h.isMeshPhongMaterial ? (s(m, h), u(m, h)) : h.isMeshStandardMaterial ? (s(m, h), f(m, h), h.isMeshPhysicalMaterial && p(m, h, b)) : h.isMeshMatcapMaterial ? (s(m, h), _(m, h)) : h.isMeshDepthMaterial ? s(m, h) : h.isMeshDistanceMaterial ? (s(m, h), g(m, h)) : h.isMeshNormalMaterial ? s(m, h) : h.isLineBasicMaterial ? (o(m, h), h.isLineDashedMaterial && a(m, h)) : h.isPointsMaterial ? c(m, h, S, x) : h.isSpriteMaterial ? l(m, h) : h.isShadowMaterial ? (m.color.value.copy(h.color), m.opacity.value = h.opacity) : h.isShaderMaterial && (h.uniformsNeedUpdate = !1);
  }
  function s(m, h) {
    m.opacity.value = h.opacity, h.color && m.diffuse.value.copy(h.color), h.emissive && m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity), h.map && (m.map.value = h.map, t(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap, t(h.alphaMap, m.alphaMapTransform)), h.bumpMap && (m.bumpMap.value = h.bumpMap, t(h.bumpMap, m.bumpMapTransform), m.bumpScale.value = h.bumpScale, h.side === mt && (m.bumpScale.value *= -1)), h.normalMap && (m.normalMap.value = h.normalMap, t(h.normalMap, m.normalMapTransform), m.normalScale.value.copy(h.normalScale), h.side === mt && m.normalScale.value.negate()), h.displacementMap && (m.displacementMap.value = h.displacementMap, t(h.displacementMap, m.displacementMapTransform), m.displacementScale.value = h.displacementScale, m.displacementBias.value = h.displacementBias), h.emissiveMap && (m.emissiveMap.value = h.emissiveMap, t(h.emissiveMap, m.emissiveMapTransform)), h.specularMap && (m.specularMap.value = h.specularMap, t(h.specularMap, m.specularMapTransform)), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
    const S = e.get(h).envMap;
    if (S && (m.envMap.value = S, m.flipEnvMap.value = S.isCubeTexture && S.isRenderTargetTexture === !1 ? -1 : 1, m.reflectivity.value = h.reflectivity, m.ior.value = h.ior, m.refractionRatio.value = h.refractionRatio), h.lightMap) {
      m.lightMap.value = h.lightMap;
      const x = i.useLegacyLights === !0 ? Math.PI : 1;
      m.lightMapIntensity.value = h.lightMapIntensity * x, t(h.lightMap, m.lightMapTransform);
    }
    h.aoMap && (m.aoMap.value = h.aoMap, m.aoMapIntensity.value = h.aoMapIntensity, t(h.aoMap, m.aoMapTransform));
  }
  function o(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, h.map && (m.map.value = h.map, t(h.map, m.mapTransform));
  }
  function a(m, h) {
    m.dashSize.value = h.dashSize, m.totalSize.value = h.dashSize + h.gapSize, m.scale.value = h.scale;
  }
  function c(m, h, S, x) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.size.value = h.size * S, m.scale.value = x * 0.5, h.map && (m.map.value = h.map, t(h.map, m.uvTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function l(m, h) {
    m.diffuse.value.copy(h.color), m.opacity.value = h.opacity, m.rotation.value = h.rotation, h.map && (m.map.value = h.map, t(h.map, m.mapTransform)), h.alphaMap && (m.alphaMap.value = h.alphaMap), h.alphaTest > 0 && (m.alphaTest.value = h.alphaTest);
  }
  function u(m, h) {
    m.specular.value.copy(h.specular), m.shininess.value = Math.max(h.shininess, 1e-4);
  }
  function d(m, h) {
    h.gradientMap && (m.gradientMap.value = h.gradientMap);
  }
  function f(m, h) {
    m.metalness.value = h.metalness, h.metalnessMap && (m.metalnessMap.value = h.metalnessMap, t(h.metalnessMap, m.metalnessMapTransform)), m.roughness.value = h.roughness, h.roughnessMap && (m.roughnessMap.value = h.roughnessMap, t(h.roughnessMap, m.roughnessMapTransform)), e.get(h).envMap && (m.envMapIntensity.value = h.envMapIntensity);
  }
  function p(m, h, S) {
    m.ior.value = h.ior, h.sheen > 0 && (m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen), m.sheenRoughness.value = h.sheenRoughness, h.sheenColorMap && (m.sheenColorMap.value = h.sheenColorMap, t(h.sheenColorMap, m.sheenColorMapTransform)), h.sheenRoughnessMap && (m.sheenRoughnessMap.value = h.sheenRoughnessMap, t(h.sheenRoughnessMap, m.sheenRoughnessMapTransform))), h.clearcoat > 0 && (m.clearcoat.value = h.clearcoat, m.clearcoatRoughness.value = h.clearcoatRoughness, h.clearcoatMap && (m.clearcoatMap.value = h.clearcoatMap, t(h.clearcoatMap, m.clearcoatMapTransform)), h.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = h.clearcoatRoughnessMap, t(h.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), h.clearcoatNormalMap && (m.clearcoatNormalMap.value = h.clearcoatNormalMap, t(h.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale), h.side === mt && m.clearcoatNormalScale.value.negate())), h.iridescence > 0 && (m.iridescence.value = h.iridescence, m.iridescenceIOR.value = h.iridescenceIOR, m.iridescenceThicknessMinimum.value = h.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = h.iridescenceThicknessRange[1], h.iridescenceMap && (m.iridescenceMap.value = h.iridescenceMap, t(h.iridescenceMap, m.iridescenceMapTransform)), h.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = h.iridescenceThicknessMap, t(h.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), h.transmission > 0 && (m.transmission.value = h.transmission, m.transmissionSamplerMap.value = S.texture, m.transmissionSamplerSize.value.set(S.width, S.height), h.transmissionMap && (m.transmissionMap.value = h.transmissionMap, t(h.transmissionMap, m.transmissionMapTransform)), m.thickness.value = h.thickness, h.thicknessMap && (m.thicknessMap.value = h.thicknessMap, t(h.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = h.attenuationDistance, m.attenuationColor.value.copy(h.attenuationColor)), m.specularIntensity.value = h.specularIntensity, m.specularColor.value.copy(h.specularColor), h.specularColorMap && (m.specularColorMap.value = h.specularColorMap, t(h.specularColorMap, m.specularColorMapTransform)), h.specularIntensityMap && (m.specularIntensityMap.value = h.specularIntensityMap, t(h.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function _(m, h) {
    h.matcap && (m.matcap.value = h.matcap);
  }
  function g(m, h) {
    const S = e.get(h).light;
    m.referencePosition.value.setFromMatrixPosition(S.matrixWorld), m.nearDistance.value = S.shadow.camera.near, m.farDistance.value = S.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function op(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(S, x) {
    const b = x.program;
    n.uniformBlockBinding(S, b);
  }
  function l(S, x) {
    let b = r[S.id];
    b === void 0 && (_(S), b = u(S), r[S.id] = b, S.addEventListener("dispose", m));
    const y = x.program;
    n.updateUBOMapping(S, y);
    const w = e.render.frame;
    s[S.id] !== w && (f(S), s[S.id] = w);
  }
  function u(S) {
    const x = d();
    S.__bindingPointIndex = x;
    const b = i.createBuffer(), y = S.__size, w = S.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, y, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, x, b), b;
  }
  function d() {
    for (let S = 0; S < a; S++)
      if (o.indexOf(S) === -1)
        return o.push(S), S;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function f(S) {
    const x = r[S.id], b = S.uniforms, y = S.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, x);
    for (let w = 0, q = b.length; w < q; w++) {
      const N = b[w];
      if (p(N, w, y) === !0) {
        const v = N.__offset, A = Array.isArray(N.value) ? N.value : [N.value];
        let H = 0;
        for (let ne = 0; ne < A.length; ne++) {
          const D = A[ne], O = g(D);
          typeof D == "number" ? (N.__data[0] = D, i.bufferSubData(i.UNIFORM_BUFFER, v + H, N.__data)) : D.isMatrix3 ? (N.__data[0] = D.elements[0], N.__data[1] = D.elements[1], N.__data[2] = D.elements[2], N.__data[3] = D.elements[0], N.__data[4] = D.elements[3], N.__data[5] = D.elements[4], N.__data[6] = D.elements[5], N.__data[7] = D.elements[0], N.__data[8] = D.elements[6], N.__data[9] = D.elements[7], N.__data[10] = D.elements[8], N.__data[11] = D.elements[0]) : (D.toArray(N.__data, H), H += O.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, v, N.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function p(S, x, b) {
    const y = S.value;
    if (b[x] === void 0) {
      if (typeof y == "number")
        b[x] = y;
      else {
        const w = Array.isArray(y) ? y : [y], q = [];
        for (let N = 0; N < w.length; N++)
          q.push(w[N].clone());
        b[x] = q;
      }
      return !0;
    } else if (typeof y == "number") {
      if (b[x] !== y)
        return b[x] = y, !0;
    } else {
      const w = Array.isArray(b[x]) ? b[x] : [b[x]], q = Array.isArray(y) ? y : [y];
      for (let N = 0; N < w.length; N++) {
        const v = w[N];
        if (v.equals(q[N]) === !1)
          return v.copy(q[N]), !0;
      }
    }
    return !1;
  }
  function _(S) {
    const x = S.uniforms;
    let b = 0;
    const y = 16;
    let w = 0;
    for (let q = 0, N = x.length; q < N; q++) {
      const v = x[q], A = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, H = Array.isArray(v.value) ? v.value : [v.value];
      for (let ne = 0, D = H.length; ne < D; ne++) {
        const O = H[ne], G = g(O);
        A.boundary += G.boundary, A.storage += G.storage;
      }
      if (v.__data = new Float32Array(A.storage / Float32Array.BYTES_PER_ELEMENT), v.__offset = b, q > 0) {
        w = b % y;
        const ne = y - w;
        w !== 0 && ne - A.boundary < 0 && (b += y - w, v.__offset = b);
      }
      b += A.storage;
    }
    return w = b % y, w > 0 && (b += y - w), S.__size = b, S.__cache = {}, this;
  }
  function g(S) {
    const x = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof S == "number" ? (x.boundary = 4, x.storage = 4) : S.isVector2 ? (x.boundary = 8, x.storage = 8) : S.isVector3 || S.isColor ? (x.boundary = 16, x.storage = 12) : S.isVector4 ? (x.boundary = 16, x.storage = 16) : S.isMatrix3 ? (x.boundary = 48, x.storage = 48) : S.isMatrix4 ? (x.boundary = 64, x.storage = 64) : S.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", S), x;
  }
  function m(S) {
    const x = S.target;
    x.removeEventListener("dispose", m);
    const b = o.indexOf(x.__bindingPointIndex);
    o.splice(b, 1), i.deleteBuffer(r[x.id]), delete r[x.id], delete s[x.id];
  }
  function h() {
    for (const S in r)
      i.deleteBuffer(r[S]);
    o = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: h
  };
}
function lp() {
  const i = rr("canvas");
  return i.style.display = "block", i;
}
class Xo {
  constructor(e = {}) {
    const {
      canvas: t = lp(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: u = "default",
      failIfMajorPerformanceCaveat: d = !1
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    n !== null ? f = n.getContextAttributes().alpha : f = o;
    let p = null, _ = null;
    const g = [], m = [];
    this.domElement = t, this.debug = {
      /**
       * Enables error checking and reporting when shader programs are being compiled
       * @type {boolean}
       */
      checkShaderErrors: !0,
      /**
       * Callback for custom error reporting.
       * @type {?Function}
       */
      onShaderError: null
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Ie, this.useLegacyLights = !0, this.toneMapping = $t, this.toneMappingExposure = 1;
    const h = this;
    let S = !1, x = 0, b = 0, y = null, w = -1, q = null;
    const N = new je(), v = new je();
    let A = null, H = t.width, ne = t.height, D = 1, O = null, G = null;
    const te = new je(0, 0, H, ne), Z = new je(0, 0, H, ne);
    let V = !1;
    const K = new xs();
    let $ = !1, ce = !1, pe = null;
    const z = new Ke(), j = new R(), le = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function _e() {
      return y === null ? D : 1;
    }
    let C = n;
    function Te(E, I) {
      for (let X = 0; X < E.length; X++) {
        const U = E[X], Y = t.getContext(U, I);
        if (Y !== null)
          return Y;
      }
      return null;
    }
    try {
      const E = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: u,
        failIfMajorPerformanceCaveat: d
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${ms}`), t.addEventListener("webglcontextlost", ye, !1), t.addEventListener("webglcontextrestored", De, !1), t.addEventListener("webglcontextcreationerror", Oe, !1), C === null) {
        const I = ["webgl2", "webgl", "experimental-webgl"];
        if (h.isWebGL1Renderer === !0 && I.shift(), C = Te(I, E), C === null)
          throw Te(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      C.getShaderPrecisionFormat === void 0 && (C.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (E) {
      throw console.error("THREE.WebGLRenderer: " + E.message), E;
    }
    let Ce, ae, Se, ee, k, Q, ge, oe, we, Pe, Ee, qe, he, T, M, F, ie, re, de, P, J, B, me, Me;
    function be() {
      Ce = new xd(C), ae = new dd(C, Ce, e), Ce.init(ae), B = new tp(C, Ce, ae), Se = new Qf(C, Ce, ae), ee = new Sd(C), k = new Bf(), Q = new ep(C, Ce, Se, k, ae, B, ee), ge = new pd(h), oe = new gd(h), we = new Dc(C, ae), me = new ud(C, Ce, we, ae), Pe = new vd(C, we, ee, me), Ee = new bd(C, Pe, we, ee), de = new Td(C, ae, Q), F = new fd(k), qe = new Of(h, ge, oe, Ce, ae, me, F), he = new ap(h, k), T = new Gf(), M = new Yf(Ce, ae), re = new cd(h, ge, oe, Se, Ee, f, c), ie = new $f(h, Ee, ae), Me = new op(C, ee, ae, Se), P = new hd(C, Ce, ee, ae), J = new Md(C, Ce, ee, ae), ee.programs = qe.programs, h.capabilities = ae, h.extensions = Ce, h.properties = k, h.renderLists = T, h.shadowMap = ie, h.state = Se, h.info = ee;
    }
    be();
    const xe = new sp(h, C);
    this.xr = xe, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      const E = Ce.get("WEBGL_lose_context");
      E && E.loseContext();
    }, this.forceContextRestore = function() {
      const E = Ce.get("WEBGL_lose_context");
      E && E.restoreContext();
    }, this.getPixelRatio = function() {
      return D;
    }, this.setPixelRatio = function(E) {
      E !== void 0 && (D = E, this.setSize(H, ne, !1));
    }, this.getSize = function(E) {
      return E.set(H, ne);
    }, this.setSize = function(E, I, X = !0) {
      if (xe.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = E, ne = I, t.width = Math.floor(E * D), t.height = Math.floor(I * D), X === !0 && (t.style.width = E + "px", t.style.height = I + "px"), this.setViewport(0, 0, E, I);
    }, this.getDrawingBufferSize = function(E) {
      return E.set(H * D, ne * D).floor();
    }, this.setDrawingBufferSize = function(E, I, X) {
      H = E, ne = I, D = X, t.width = Math.floor(E * X), t.height = Math.floor(I * X), this.setViewport(0, 0, E, I);
    }, this.getCurrentViewport = function(E) {
      return E.copy(N);
    }, this.getViewport = function(E) {
      return E.copy(te);
    }, this.setViewport = function(E, I, X, U) {
      E.isVector4 ? te.set(E.x, E.y, E.z, E.w) : te.set(E, I, X, U), Se.viewport(N.copy(te).multiplyScalar(D).floor());
    }, this.getScissor = function(E) {
      return E.copy(Z);
    }, this.setScissor = function(E, I, X, U) {
      E.isVector4 ? Z.set(E.x, E.y, E.z, E.w) : Z.set(E, I, X, U), Se.scissor(v.copy(Z).multiplyScalar(D).floor());
    }, this.getScissorTest = function() {
      return V;
    }, this.setScissorTest = function(E) {
      Se.setScissorTest(V = E);
    }, this.setOpaqueSort = function(E) {
      O = E;
    }, this.setTransparentSort = function(E) {
      G = E;
    }, this.getClearColor = function(E) {
      return E.copy(re.getClearColor());
    }, this.setClearColor = function() {
      re.setClearColor.apply(re, arguments);
    }, this.getClearAlpha = function() {
      return re.getClearAlpha();
    }, this.setClearAlpha = function() {
      re.setClearAlpha.apply(re, arguments);
    }, this.clear = function(E = !0, I = !0, X = !0) {
      let U = 0;
      E && (U |= C.COLOR_BUFFER_BIT), I && (U |= C.DEPTH_BUFFER_BIT), X && (U |= C.STENCIL_BUFFER_BIT), C.clear(U);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", ye, !1), t.removeEventListener("webglcontextrestored", De, !1), t.removeEventListener("webglcontextcreationerror", Oe, !1), T.dispose(), M.dispose(), k.dispose(), ge.dispose(), oe.dispose(), Ee.dispose(), me.dispose(), Me.dispose(), qe.dispose(), xe.dispose(), xe.removeEventListener("sessionstart", Ae), xe.removeEventListener("sessionend", Xe), pe && (pe.dispose(), pe = null), Ye.stop();
    };
    function ye(E) {
      E.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), S = !0;
    }
    function De() {
      console.log("THREE.WebGLRenderer: Context Restored."), S = !1;
      const E = ee.autoReset, I = ie.enabled, X = ie.autoUpdate, U = ie.needsUpdate, Y = ie.type;
      be(), ee.autoReset = E, ie.enabled = I, ie.autoUpdate = X, ie.needsUpdate = U, ie.type = Y;
    }
    function Oe(E) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", E.statusMessage);
    }
    function Je(E) {
      const I = E.target;
      I.removeEventListener("dispose", Je), L(I);
    }
    function L(E) {
      W(E), k.remove(E);
    }
    function W(E) {
      const I = k.get(E).programs;
      I !== void 0 && (I.forEach(function(X) {
        qe.releaseProgram(X);
      }), E.isShaderMaterial && qe.releaseShaderCache(E));
    }
    this.renderBufferDirect = function(E, I, X, U, Y, Re) {
      I === null && (I = le);
      const Le = Y.isMesh && Y.matrixWorld.determinant() < 0, Ue = al(E, I, X, U, Y);
      Se.setMaterial(U, Le);
      let Ne = X.index, Be = 1;
      U.wireframe === !0 && (Ne = Pe.getWireframeAttribute(X), Be = 2);
      const ze = X.drawRange, Ge = X.attributes.position;
      let We = ze.start * Be, ht = (ze.start + ze.count) * Be;
      Re !== null && (We = Math.max(We, Re.start * Be), ht = Math.min(ht, (Re.start + Re.count) * Be)), Ne !== null ? (We = Math.max(We, 0), ht = Math.min(ht, Ne.count)) : Ge != null && (We = Math.max(We, 0), ht = Math.min(ht, Ge.count));
      const Rt = ht - We;
      if (Rt < 0 || Rt === 1 / 0)
        return;
      me.setup(Y, U, Ue, X, Ne);
      let ln, Qe = P;
      if (Ne !== null && (ln = we.get(Ne), Qe = J, Qe.setIndex(ln)), Y.isMesh)
        U.wireframe === !0 ? (Se.setLineWidth(U.wireframeLinewidth * _e()), Qe.setMode(C.LINES)) : Qe.setMode(C.TRIANGLES);
      else if (Y.isLine) {
        let ke = U.linewidth;
        ke === void 0 && (ke = 1), Se.setLineWidth(ke * _e()), Y.isLineSegments ? Qe.setMode(C.LINES) : Y.isLineLoop ? Qe.setMode(C.LINE_LOOP) : Qe.setMode(C.LINE_STRIP);
      } else
        Y.isPoints ? Qe.setMode(C.POINTS) : Y.isSprite && Qe.setMode(C.TRIANGLES);
      if (Y.isInstancedMesh)
        Qe.renderInstances(We, Rt, Y.count);
      else if (X.isInstancedBufferGeometry) {
        const ke = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, hr = Math.min(X.instanceCount, ke);
        Qe.renderInstances(We, Rt, hr);
      } else
        Qe.render(We, Rt);
    }, this.compile = function(E, I) {
      function X(U, Y, Re) {
        U.transparent === !0 && U.side === zt && U.forceSinglePass === !1 ? (U.side = mt, U.needsUpdate = !0, Pi(U, Y, Re), U.side = on, U.needsUpdate = !0, Pi(U, Y, Re), U.side = zt) : Pi(U, Y, Re);
      }
      _ = M.get(E), _.init(), m.push(_), E.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (_.pushLight(U), U.castShadow && _.pushShadow(U));
      }), _.setupLights(h.useLegacyLights), E.traverse(function(U) {
        const Y = U.material;
        if (Y)
          if (Array.isArray(Y))
            for (let Re = 0; Re < Y.length; Re++) {
              const Le = Y[Re];
              X(Le, E, U);
            }
          else
            X(Y, E, U);
      }), m.pop(), _ = null;
    };
    let se = null;
    function ve(E) {
      se && se(E);
    }
    function Ae() {
      Ye.stop();
    }
    function Xe() {
      Ye.start();
    }
    const Ye = new Go();
    Ye.setAnimationLoop(ve), typeof self < "u" && Ye.setContext(self), this.setAnimationLoop = function(E) {
      se = E, xe.setAnimationLoop(E), E === null ? Ye.stop() : Ye.start();
    }, xe.addEventListener("sessionstart", Ae), xe.addEventListener("sessionend", Xe), this.render = function(E, I) {
      if (I !== void 0 && I.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (S === !0)
        return;
      E.matrixWorldAutoUpdate === !0 && E.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(), xe.enabled === !0 && xe.isPresenting === !0 && (xe.cameraAutoUpdate === !0 && xe.updateCamera(I), I = xe.getCamera()), E.isScene === !0 && E.onBeforeRender(h, E, I, y), _ = M.get(E, m.length), _.init(), m.push(_), z.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), K.setFromProjectionMatrix(z), ce = this.localClippingEnabled, $ = F.init(this.clippingPlanes, ce), p = T.get(E, g.length), p.init(), g.push(p), lt(E, I, 0, h.sortObjects), p.finish(), h.sortObjects === !0 && p.sort(O, G), $ === !0 && F.beginShadows();
      const X = _.state.shadowsArray;
      if (ie.render(X, E, I), $ === !0 && F.endShadows(), this.info.autoReset === !0 && this.info.reset(), re.render(p, E), _.setupLights(h.useLegacyLights), I.isArrayCamera) {
        const U = I.cameras;
        for (let Y = 0, Re = U.length; Y < Re; Y++) {
          const Le = U[Y];
          Qt(p, E, Le, Le.viewport);
        }
      } else
        Qt(p, E, I);
      y !== null && (Q.updateMultisampleRenderTarget(y), Q.updateRenderTargetMipmap(y)), E.isScene === !0 && E.onAfterRender(h, E, I), me.resetDefaultState(), w = -1, q = null, m.pop(), m.length > 0 ? _ = m[m.length - 1] : _ = null, g.pop(), g.length > 0 ? p = g[g.length - 1] : p = null;
    };
    function lt(E, I, X, U) {
      if (E.visible === !1)
        return;
      if (E.layers.test(I.layers)) {
        if (E.isGroup)
          X = E.renderOrder;
        else if (E.isLOD)
          E.autoUpdate === !0 && E.update(I);
        else if (E.isLight)
          _.pushLight(E), E.castShadow && _.pushShadow(E);
        else if (E.isSprite) {
          if (!E.frustumCulled || K.intersectsSprite(E)) {
            U && j.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);
            const Le = Ee.update(E), Ue = E.material;
            Ue.visible && p.push(E, Le, Ue, X, j.z, null);
          }
        } else if ((E.isMesh || E.isLine || E.isPoints) && (!E.frustumCulled || K.intersectsObject(E))) {
          E.isSkinnedMesh && E.skeleton.frame !== ee.render.frame && (E.skeleton.update(), E.skeleton.frame = ee.render.frame);
          const Le = Ee.update(E), Ue = E.material;
          if (U && (Le.boundingSphere === null && Le.computeBoundingSphere(), j.copy(Le.boundingSphere.center).applyMatrix4(E.matrixWorld).applyMatrix4(z)), Array.isArray(Ue)) {
            const Ne = Le.groups;
            for (let Be = 0, ze = Ne.length; Be < ze; Be++) {
              const Ge = Ne[Be], We = Ue[Ge.materialIndex];
              We && We.visible && p.push(E, Le, We, X, j.z, Ge);
            }
          } else
            Ue.visible && p.push(E, Le, Ue, X, j.z, null);
        }
      }
      const Re = E.children;
      for (let Le = 0, Ue = Re.length; Le < Ue; Le++)
        lt(Re[Le], I, X, U);
    }
    function Qt(E, I, X, U) {
      const Y = E.opaque, Re = E.transmissive, Le = E.transparent;
      _.setupLightsView(X), $ === !0 && F.setGlobalState(h.clippingPlanes, X), Re.length > 0 && $e(Y, Re, I, X), U && Se.viewport(N.copy(U)), Y.length > 0 && Et(Y, I, X), Re.length > 0 && Et(Re, I, X), Le.length > 0 && Et(Le, I, X), Se.buffers.depth.setTest(!0), Se.buffers.depth.setMask(!0), Se.buffers.color.setMask(!0), Se.setPolygonOffset(!1);
    }
    function $e(E, I, X, U) {
      if (pe === null) {
        const Ue = ae.isWebGL2;
        pe = new yn(1024, 1024, {
          generateMipmaps: !0,
          type: Ce.has("EXT_color_buffer_half_float") ? yi : En,
          minFilter: Ei,
          samples: Ue && a === !0 ? 4 : 0
        });
      }
      const Y = h.getRenderTarget();
      h.setRenderTarget(pe), h.clear();
      const Re = h.toneMapping;
      h.toneMapping = $t, Et(E, X, U), Q.updateMultisampleRenderTarget(pe), Q.updateRenderTargetMipmap(pe);
      let Le = !1;
      for (let Ue = 0, Ne = I.length; Ue < Ne; Ue++) {
        const Be = I[Ue], ze = Be.object, Ge = Be.geometry, We = Be.material, ht = Be.group;
        if (We.side === zt && ze.layers.test(U.layers)) {
          const Rt = We.side;
          We.side = mt, We.needsUpdate = !0, Ft(ze, X, U, Ge, We, ht), We.side = Rt, We.needsUpdate = !0, Le = !0;
        }
      }
      Le === !0 && (Q.updateMultisampleRenderTarget(pe), Q.updateRenderTargetMipmap(pe)), h.setRenderTarget(Y), h.toneMapping = Re;
    }
    function Et(E, I, X) {
      const U = I.isScene === !0 ? I.overrideMaterial : null;
      for (let Y = 0, Re = E.length; Y < Re; Y++) {
        const Le = E[Y], Ue = Le.object, Ne = Le.geometry, Be = U === null ? Le.material : U, ze = Le.group;
        Ue.layers.test(X.layers) && Ft(Ue, I, X, Ne, Be, ze);
      }
    }
    function Ft(E, I, X, U, Y, Re) {
      E.onBeforeRender(h, I, X, U, Y, Re), E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, E.matrixWorld), E.normalMatrix.getNormalMatrix(E.modelViewMatrix), Y.onBeforeRender(h, I, X, U, E, Re), Y.transparent === !0 && Y.side === zt && Y.forceSinglePass === !1 ? (Y.side = mt, Y.needsUpdate = !0, h.renderBufferDirect(X, I, U, Y, E, Re), Y.side = on, Y.needsUpdate = !0, h.renderBufferDirect(X, I, U, Y, E, Re), Y.side = zt) : h.renderBufferDirect(X, I, U, Y, E, Re), E.onAfterRender(h, I, X, U, Y, Re);
    }
    function Pi(E, I, X) {
      I.isScene !== !0 && (I = le);
      const U = k.get(E), Y = _.state.lights, Re = _.state.shadowsArray, Le = Y.state.version, Ue = qe.getParameters(E, Y.state, Re, I, X), Ne = qe.getProgramCacheKey(Ue);
      let Be = U.programs;
      U.environment = E.isMeshStandardMaterial ? I.environment : null, U.fog = I.fog, U.envMap = (E.isMeshStandardMaterial ? oe : ge).get(E.envMap || U.environment), Be === void 0 && (E.addEventListener("dispose", Je), Be = /* @__PURE__ */ new Map(), U.programs = Be);
      let ze = Be.get(Ne);
      if (ze !== void 0) {
        if (U.currentProgram === ze && U.lightsStateVersion === Le)
          return ws(E, Ue), ze;
      } else
        Ue.uniforms = qe.getUniforms(E), E.onBuild(X, Ue, h), E.onBeforeCompile(Ue, h), ze = qe.acquireProgram(Ue, Ne), Be.set(Ne, ze), U.uniforms = Ue.uniforms;
      const Ge = U.uniforms;
      (!E.isShaderMaterial && !E.isRawShaderMaterial || E.clipping === !0) && (Ge.clippingPlanes = F.uniform), ws(E, Ue), U.needsLights = ll(E), U.lightsStateVersion = Le, U.needsLights && (Ge.ambientLightColor.value = Y.state.ambient, Ge.lightProbe.value = Y.state.probe, Ge.directionalLights.value = Y.state.directional, Ge.directionalLightShadows.value = Y.state.directionalShadow, Ge.spotLights.value = Y.state.spot, Ge.spotLightShadows.value = Y.state.spotShadow, Ge.rectAreaLights.value = Y.state.rectArea, Ge.ltc_1.value = Y.state.rectAreaLTC1, Ge.ltc_2.value = Y.state.rectAreaLTC2, Ge.pointLights.value = Y.state.point, Ge.pointLightShadows.value = Y.state.pointShadow, Ge.hemisphereLights.value = Y.state.hemi, Ge.directionalShadowMap.value = Y.state.directionalShadowMap, Ge.directionalShadowMatrix.value = Y.state.directionalShadowMatrix, Ge.spotShadowMap.value = Y.state.spotShadowMap, Ge.spotLightMatrix.value = Y.state.spotLightMatrix, Ge.spotLightMap.value = Y.state.spotLightMap, Ge.pointShadowMap.value = Y.state.pointShadowMap, Ge.pointShadowMatrix.value = Y.state.pointShadowMatrix);
      const We = ze.getUniforms(), ht = nr.seqWithValue(We.seq, Ge);
      return U.currentProgram = ze, U.uniformsList = ht, ze;
    }
    function ws(E, I) {
      const X = k.get(E);
      X.outputColorSpace = I.outputColorSpace, X.instancing = I.instancing, X.skinning = I.skinning, X.morphTargets = I.morphTargets, X.morphNormals = I.morphNormals, X.morphColors = I.morphColors, X.morphTargetsCount = I.morphTargetsCount, X.numClippingPlanes = I.numClippingPlanes, X.numIntersection = I.numClipIntersection, X.vertexAlphas = I.vertexAlphas, X.vertexTangents = I.vertexTangents, X.toneMapping = I.toneMapping;
    }
    function al(E, I, X, U, Y) {
      I.isScene !== !0 && (I = le), Q.resetTextureUnits();
      const Re = I.fog, Le = U.isMeshStandardMaterial ? I.environment : null, Ue = y === null ? h.outputColorSpace : y.isXRRenderTarget === !0 ? y.texture.colorSpace : Ht, Ne = (U.isMeshStandardMaterial ? oe : ge).get(U.envMap || Le), Be = U.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, ze = !!U.normalMap && !!X.attributes.tangent, Ge = !!X.morphAttributes.position, We = !!X.morphAttributes.normal, ht = !!X.morphAttributes.color, Rt = U.toneMapped ? h.toneMapping : $t, ln = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, Qe = ln !== void 0 ? ln.length : 0, ke = k.get(U), hr = _.state.lights;
      if ($ === !0 && (ce === !0 || E !== q)) {
        const _t = E === q && U.id === w;
        F.setState(U, E, _t);
      }
      let it = !1;
      U.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== hr.state.version || ke.outputColorSpace !== Ue || Y.isInstancedMesh && ke.instancing === !1 || !Y.isInstancedMesh && ke.instancing === !0 || Y.isSkinnedMesh && ke.skinning === !1 || !Y.isSkinnedMesh && ke.skinning === !0 || ke.envMap !== Ne || U.fog === !0 && ke.fog !== Re || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== F.numPlanes || ke.numIntersection !== F.numIntersection) || ke.vertexAlphas !== Be || ke.vertexTangents !== ze || ke.morphTargets !== Ge || ke.morphNormals !== We || ke.morphColors !== ht || ke.toneMapping !== Rt || ae.isWebGL2 === !0 && ke.morphTargetsCount !== Qe) && (it = !0) : (it = !0, ke.__version = U.version);
      let cn = ke.currentProgram;
      it === !0 && (cn = Pi(U, I, Y));
      let Ps = !1, ci = !1, dr = !1;
      const dt = cn.getUniforms(), un = ke.uniforms;
      if (Se.useProgram(cn.program) && (Ps = !0, ci = !0, dr = !0), U.id !== w && (w = U.id, ci = !0), Ps || q !== E) {
        if (dt.setValue(C, "projectionMatrix", E.projectionMatrix), ae.logarithmicDepthBuffer && dt.setValue(
          C,
          "logDepthBufFC",
          2 / (Math.log(E.far + 1) / Math.LN2)
        ), q !== E && (q = E, ci = !0, dr = !0), U.isShaderMaterial || U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshStandardMaterial || U.envMap) {
          const _t = dt.map.cameraPosition;
          _t !== void 0 && _t.setValue(
            C,
            j.setFromMatrixPosition(E.matrixWorld)
          );
        }
        (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial) && dt.setValue(C, "isOrthographic", E.isOrthographicCamera === !0), (U.isMeshPhongMaterial || U.isMeshToonMaterial || U.isMeshLambertMaterial || U.isMeshBasicMaterial || U.isMeshStandardMaterial || U.isShaderMaterial || U.isShadowMaterial || Y.isSkinnedMesh) && dt.setValue(C, "viewMatrix", E.matrixWorldInverse);
      }
      if (Y.isSkinnedMesh) {
        dt.setOptional(C, Y, "bindMatrix"), dt.setOptional(C, Y, "bindMatrixInverse");
        const _t = Y.skeleton;
        _t && (ae.floatVertexTextures ? (_t.boneTexture === null && _t.computeBoneTexture(), dt.setValue(C, "boneTexture", _t.boneTexture, Q), dt.setValue(C, "boneTextureSize", _t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const fr = X.morphAttributes;
      if ((fr.position !== void 0 || fr.normal !== void 0 || fr.color !== void 0 && ae.isWebGL2 === !0) && de.update(Y, X, cn), (ci || ke.receiveShadow !== Y.receiveShadow) && (ke.receiveShadow = Y.receiveShadow, dt.setValue(C, "receiveShadow", Y.receiveShadow)), U.isMeshGouraudMaterial && U.envMap !== null && (un.envMap.value = Ne, un.flipEnvMap.value = Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1), ci && (dt.setValue(C, "toneMappingExposure", h.toneMappingExposure), ke.needsLights && ol(un, dr), Re && U.fog === !0 && he.refreshFogUniforms(un, Re), he.refreshMaterialUniforms(un, U, D, ne, pe), nr.upload(C, ke.uniformsList, un, Q)), U.isShaderMaterial && U.uniformsNeedUpdate === !0 && (nr.upload(C, ke.uniformsList, un, Q), U.uniformsNeedUpdate = !1), U.isSpriteMaterial && dt.setValue(C, "center", Y.center), dt.setValue(C, "modelViewMatrix", Y.modelViewMatrix), dt.setValue(C, "normalMatrix", Y.normalMatrix), dt.setValue(C, "modelMatrix", Y.matrixWorld), U.isShaderMaterial || U.isRawShaderMaterial) {
        const _t = U.uniformsGroups;
        for (let pr = 0, cl = _t.length; pr < cl; pr++)
          if (ae.isWebGL2) {
            const Rs = _t[pr];
            Me.update(Rs, cn), Me.bind(Rs, cn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return cn;
    }
    function ol(E, I) {
      E.ambientLightColor.needsUpdate = I, E.lightProbe.needsUpdate = I, E.directionalLights.needsUpdate = I, E.directionalLightShadows.needsUpdate = I, E.pointLights.needsUpdate = I, E.pointLightShadows.needsUpdate = I, E.spotLights.needsUpdate = I, E.spotLightShadows.needsUpdate = I, E.rectAreaLights.needsUpdate = I, E.hemisphereLights.needsUpdate = I;
    }
    function ll(E) {
      return E.isMeshLambertMaterial || E.isMeshToonMaterial || E.isMeshPhongMaterial || E.isMeshStandardMaterial || E.isShadowMaterial || E.isShaderMaterial && E.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return x;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return y;
    }, this.setRenderTargetTextures = function(E, I, X) {
      k.get(E.texture).__webglTexture = I, k.get(E.depthTexture).__webglTexture = X;
      const U = k.get(E);
      U.__hasExternalTextures = !0, U.__hasExternalTextures && (U.__autoAllocateDepthBuffer = X === void 0, U.__autoAllocateDepthBuffer || Ce.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), U.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(E, I) {
      const X = k.get(E);
      X.__webglFramebuffer = I, X.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(E, I = 0, X = 0) {
      y = E, x = I, b = X;
      let U = !0, Y = null, Re = !1, Le = !1;
      if (E) {
        const Ne = k.get(E);
        Ne.__useDefaultFramebuffer !== void 0 ? (Se.bindFramebuffer(C.FRAMEBUFFER, null), U = !1) : Ne.__webglFramebuffer === void 0 ? Q.setupRenderTarget(E) : Ne.__hasExternalTextures && Q.rebindTextures(E, k.get(E.texture).__webglTexture, k.get(E.depthTexture).__webglTexture);
        const Be = E.texture;
        (Be.isData3DTexture || Be.isDataArrayTexture || Be.isCompressedArrayTexture) && (Le = !0);
        const ze = k.get(E).__webglFramebuffer;
        E.isWebGLCubeRenderTarget ? (Y = ze[I], Re = !0) : ae.isWebGL2 && E.samples > 0 && Q.useMultisampledRTT(E) === !1 ? Y = k.get(E).__webglMultisampledFramebuffer : Y = ze, N.copy(E.viewport), v.copy(E.scissor), A = E.scissorTest;
      } else
        N.copy(te).multiplyScalar(D).floor(), v.copy(Z).multiplyScalar(D).floor(), A = V;
      if (Se.bindFramebuffer(C.FRAMEBUFFER, Y) && ae.drawBuffers && U && Se.drawBuffers(E, Y), Se.viewport(N), Se.scissor(v), Se.setScissorTest(A), Re) {
        const Ne = k.get(E.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + I, Ne.__webglTexture, X);
      } else if (Le) {
        const Ne = k.get(E.texture), Be = I || 0;
        C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, Ne.__webglTexture, X || 0, Be);
      }
      w = -1;
    }, this.readRenderTargetPixels = function(E, I, X, U, Y, Re, Le) {
      if (!(E && E.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let Ue = k.get(E).__webglFramebuffer;
      if (E.isWebGLCubeRenderTarget && Le !== void 0 && (Ue = Ue[Le]), Ue) {
        Se.bindFramebuffer(C.FRAMEBUFFER, Ue);
        try {
          const Ne = E.texture, Be = Ne.format, ze = Ne.type;
          if (Be !== Nt && B.convert(Be) !== C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const Ge = ze === yi && (Ce.has("EXT_color_buffer_half_float") || ae.isWebGL2 && Ce.has("EXT_color_buffer_float"));
          if (ze !== En && B.convert(ze) !== C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(ze === xn && (ae.isWebGL2 || Ce.has("OES_texture_float") || Ce.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !Ge) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= E.width - U && X >= 0 && X <= E.height - Y && C.readPixels(I, X, U, Y, B.convert(Be), B.convert(ze), Re);
        } finally {
          const Ne = y !== null ? k.get(y).__webglFramebuffer : null;
          Se.bindFramebuffer(C.FRAMEBUFFER, Ne);
        }
      }
    }, this.copyFramebufferToTexture = function(E, I, X = 0) {
      const U = Math.pow(2, -X), Y = Math.floor(I.image.width * U), Re = Math.floor(I.image.height * U);
      Q.setTexture2D(I, 0), C.copyTexSubImage2D(C.TEXTURE_2D, X, 0, 0, E.x, E.y, Y, Re), Se.unbindTexture();
    }, this.copyTextureToTexture = function(E, I, X, U = 0) {
      const Y = I.image.width, Re = I.image.height, Le = B.convert(X.format), Ue = B.convert(X.type);
      Q.setTexture2D(X, 0), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, X.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, X.unpackAlignment), I.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, U, E.x, E.y, Y, Re, Le, Ue, I.image.data) : I.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, U, E.x, E.y, I.mipmaps[0].width, I.mipmaps[0].height, Le, I.mipmaps[0].data) : C.texSubImage2D(C.TEXTURE_2D, U, E.x, E.y, Le, Ue, I.image), U === 0 && X.generateMipmaps && C.generateMipmap(C.TEXTURE_2D), Se.unbindTexture();
    }, this.copyTextureToTexture3D = function(E, I, X, U, Y = 0) {
      if (h.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Re = E.max.x - E.min.x + 1, Le = E.max.y - E.min.y + 1, Ue = E.max.z - E.min.z + 1, Ne = B.convert(U.format), Be = B.convert(U.type);
      let ze;
      if (U.isData3DTexture)
        Q.setTexture3D(U, 0), ze = C.TEXTURE_3D;
      else if (U.isDataArrayTexture)
        Q.setTexture2DArray(U, 0), ze = C.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, U.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, U.unpackAlignment);
      const Ge = C.getParameter(C.UNPACK_ROW_LENGTH), We = C.getParameter(C.UNPACK_IMAGE_HEIGHT), ht = C.getParameter(C.UNPACK_SKIP_PIXELS), Rt = C.getParameter(C.UNPACK_SKIP_ROWS), ln = C.getParameter(C.UNPACK_SKIP_IMAGES), Qe = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      C.pixelStorei(C.UNPACK_ROW_LENGTH, Qe.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Qe.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, E.min.x), C.pixelStorei(C.UNPACK_SKIP_ROWS, E.min.y), C.pixelStorei(C.UNPACK_SKIP_IMAGES, E.min.z), X.isDataTexture || X.isData3DTexture ? C.texSubImage3D(ze, Y, I.x, I.y, I.z, Re, Le, Ue, Ne, Be, Qe.data) : X.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), C.compressedTexSubImage3D(ze, Y, I.x, I.y, I.z, Re, Le, Ue, Ne, Qe.data)) : C.texSubImage3D(ze, Y, I.x, I.y, I.z, Re, Le, Ue, Ne, Be, Qe), C.pixelStorei(C.UNPACK_ROW_LENGTH, Ge), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, We), C.pixelStorei(C.UNPACK_SKIP_PIXELS, ht), C.pixelStorei(C.UNPACK_SKIP_ROWS, Rt), C.pixelStorei(C.UNPACK_SKIP_IMAGES, ln), Y === 0 && U.generateMipmaps && C.generateMipmap(ze), Se.unbindTexture();
    }, this.initTexture = function(E) {
      E.isCubeTexture ? Q.setTextureCube(E, 0) : E.isData3DTexture ? Q.setTexture3D(E, 0) : E.isDataArrayTexture || E.isCompressedArrayTexture ? Q.setTexture2DArray(E, 0) : Q.setTexture2D(E, 0), Se.unbindTexture();
    }, this.resetState = function() {
      x = 0, b = 0, y = null, Se.reset(), me.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Ie ? Mn : bo;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Mn ? Ie : Ht;
  }
}
class cp extends Xo {
}
cp.prototype.isWebGL1Renderer = !0;
class up extends ot {
  constructor() {
    super(), this.isScene = !0, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t;
  }
  get autoUpdate() {
    return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate;
  }
  set autoUpdate(e) {
    console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."), this.matrixWorldAutoUpdate = e;
  }
}
class cr extends oi {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ve(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Xa = /* @__PURE__ */ new R(), Ya = /* @__PURE__ */ new R(), ja = /* @__PURE__ */ new Ke(), Wr = /* @__PURE__ */ new Do(), Ki = /* @__PURE__ */ new ar();
class hp extends ot {
  constructor(e = new St(), t = new cr()) {
    super(), this.isLine = !0, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let r = 1, s = t.count; r < s; r++)
        Xa.fromBufferAttribute(t, r - 1), Ya.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Xa.distanceTo(Ya);
      e.setAttribute("lineDistance", new st(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Ki.copy(n.boundingSphere), Ki.applyMatrix4(r), Ki.radius += s, e.ray.intersectsSphere(Ki) === !1)
      return;
    ja.copy(r).invert(), Wr.copy(e.ray).applyMatrix4(ja);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new R(), u = new R(), d = new R(), f = new R(), p = this.isLineSegments ? 2 : 1, _ = n.index, m = n.attributes.position;
    if (_ !== null) {
      const h = Math.max(0, o.start), S = Math.min(_.count, o.start + o.count);
      for (let x = h, b = S - 1; x < b; x += p) {
        const y = _.getX(x), w = _.getX(x + 1);
        if (l.fromBufferAttribute(m, y), u.fromBufferAttribute(m, w), Wr.distanceSqToSegment(l, u, f, d) > c)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const N = e.ray.origin.distanceTo(f);
        N < e.near || N > e.far || t.push({
          distance: N,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const h = Math.max(0, o.start), S = Math.min(m.count, o.start + o.count);
      for (let x = h, b = S - 1; x < b; x += p) {
        if (l.fromBufferAttribute(m, x), u.fromBufferAttribute(m, x + 1), Wr.distanceSqToSegment(l, u, f, d) > c)
          continue;
        f.applyMatrix4(this.matrixWorld);
        const w = e.ray.origin.distanceTo(f);
        w < e.near || w > e.far || t.push({
          distance: w,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: d.clone().applyMatrix4(this.matrixWorld),
          index: x,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const r = t[n[0]];
      if (r !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, o = r.length; s < o; s++) {
          const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s;
        }
      }
    }
  }
}
const Za = /* @__PURE__ */ new R(), Ka = /* @__PURE__ */ new R();
class Ss extends hp {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        Za.fromBufferAttribute(t, r), Ka.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + Za.distanceTo(Ka);
      e.setAttribute("lineDistance", new st(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Vt {
  constructor() {
    this.type = "Curve", this.arcLengthDivisions = 200;
  }
  // Virtual base class method to overwrite and implement in subclasses
  //	- t [0 .. 1]
  getPoint() {
    return console.warn("THREE.Curve: .getPoint() not implemented."), null;
  }
  // Get point at relative position in curve according to arc length
  // - u [0 .. 1]
  getPointAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getPoint(n, t);
  }
  // Get sequence of points using getPoint( t )
  getPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return t;
  }
  // Get sequence of points using getPointAt( u )
  getSpacedPoints(e = 5) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPointAt(n / e));
    return t;
  }
  // Get total curve arc length
  getLength() {
    const e = this.getLengths();
    return e[e.length - 1];
  }
  // Get list of cumulative segment lengths
  getLengths(e = this.arcLengthDivisions) {
    if (this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate)
      return this.cacheArcLengths;
    this.needsUpdate = !1;
    const t = [];
    let n, r = this.getPoint(0), s = 0;
    t.push(0);
    for (let o = 1; o <= e; o++)
      n = this.getPoint(o / e), s += n.distanceTo(r), t.push(s), r = n;
    return this.cacheArcLengths = t, t;
  }
  updateArcLengths() {
    this.needsUpdate = !0, this.getLengths();
  }
  // Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant
  getUtoTmapping(e, t) {
    const n = this.getLengths();
    let r = 0;
    const s = n.length;
    let o;
    t ? o = t : o = e * n[s - 1];
    let a = 0, c = s - 1, l;
    for (; a <= c; )
      if (r = Math.floor(a + (c - a) / 2), l = n[r] - o, l < 0)
        a = r + 1;
      else if (l > 0)
        c = r - 1;
      else {
        c = r;
        break;
      }
    if (r = c, n[r] === o)
      return r / (s - 1);
    const u = n[r], f = n[r + 1] - u, p = (o - u) / f;
    return (r + p) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let r = e - 1e-4, s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const o = this.getPoint(r), a = this.getPoint(s), c = t || (o.isVector2 ? new ue() : new R());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new R(), r = [], s = [], o = [], a = new R(), c = new Ke();
    for (let p = 0; p <= e; p++) {
      const _ = p / e;
      r[p] = this.getTangentAt(_, new R());
    }
    s[0] = new R(), o[0] = new R();
    let l = Number.MAX_VALUE;
    const u = Math.abs(r[0].x), d = Math.abs(r[0].y), f = Math.abs(r[0].z);
    u <= l && (l = u, n.set(1, 0, 0)), d <= l && (l = d, n.set(0, 1, 0)), f <= l && n.set(0, 0, 1), a.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], a), o[0].crossVectors(r[0], s[0]);
    for (let p = 1; p <= e; p++) {
      if (s[p] = s[p - 1].clone(), o[p] = o[p - 1].clone(), a.crossVectors(r[p - 1], r[p]), a.length() > Number.EPSILON) {
        a.normalize();
        const _ = Math.acos(at(r[p - 1].dot(r[p]), -1, 1));
        s[p].applyMatrix4(c.makeRotationAxis(a, _));
      }
      o[p].crossVectors(r[p], s[p]);
    }
    if (t === !0) {
      let p = Math.acos(at(s[0].dot(s[e]), -1, 1));
      p /= e, r[0].dot(a.crossVectors(s[0], s[e])) > 0 && (p = -p);
      for (let _ = 1; _ <= e; _++)
        s[_].applyMatrix4(c.makeRotationAxis(r[_], p * _)), o[_].crossVectors(r[_], s[_]);
    }
    return {
      tangents: r,
      normals: s,
      binormals: o
    };
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    return e.arcLengthDivisions = this.arcLengthDivisions, e.type = this.type, e;
  }
  fromJSON(e) {
    return this.arcLengthDivisions = e.arcLengthDivisions, this;
  }
}
class Es extends Vt {
  constructor(e = 0, t = 0, n = 1, r = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new ue(), r = Math.PI * 2;
    let s = this.aEndAngle - this.aStartAngle;
    const o = Math.abs(s) < Number.EPSILON;
    for (; s < 0; )
      s += r;
    for (; s > r; )
      s -= r;
    s < Number.EPSILON && (o ? s = 0 : s = r), this.aClockwise === !0 && !o && (s === r ? s = -r : s = s - r);
    const a = this.aStartAngle + e * s;
    let c = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
    if (this.aRotation !== 0) {
      const u = Math.cos(this.aRotation), d = Math.sin(this.aRotation), f = c - this.aX, p = l - this.aY;
      c = f * u - p * d + this.aX, l = f * d + p * u + this.aY;
    }
    return n.set(c, l);
  }
  copy(e) {
    return super.copy(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.aX = this.aX, e.aY = this.aY, e.xRadius = this.xRadius, e.yRadius = this.yRadius, e.aStartAngle = this.aStartAngle, e.aEndAngle = this.aEndAngle, e.aClockwise = this.aClockwise, e.aRotation = this.aRotation, e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.aX = e.aX, this.aY = e.aY, this.xRadius = e.xRadius, this.yRadius = e.yRadius, this.aStartAngle = e.aStartAngle, this.aEndAngle = e.aEndAngle, this.aClockwise = e.aClockwise, this.aRotation = e.aRotation, this;
  }
}
class dp extends Es {
  constructor(e, t, n, r, s, o) {
    super(e, t, n, n, r, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function ys() {
  let i = 0, e = 0, t = 0, n = 0;
  function r(s, o, a, c) {
    i = s, e = a, t = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      r(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, u, d) {
      let f = (o - s) / l - (a - s) / (l + u) + (a - o) / u, p = (a - o) / u - (c - o) / (u + d) + (c - a) / d;
      f *= u, p *= u, r(o, a, f, p);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return i + e * s + t * o + n * a;
    }
  };
}
const Ji = /* @__PURE__ */ new R(), Xr = /* @__PURE__ */ new ys(), Yr = /* @__PURE__ */ new ys(), jr = /* @__PURE__ */ new ys();
class fp extends Vt {
  constructor(e = [], t = !1, n = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
  }
  getPoint(e, t = new R()) {
    const n = t, r = this.points, s = r.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, u;
    this.closed || a > 0 ? l = r[(a - 1) % s] : (Ji.subVectors(r[0], r[1]).add(r[0]), l = Ji);
    const d = r[a % s], f = r[(a + 1) % s];
    if (this.closed || a + 2 < s ? u = r[(a + 2) % s] : (Ji.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), u = Ji), this.curveType === "centripetal" || this.curveType === "chordal") {
      const p = this.curveType === "chordal" ? 0.5 : 0.25;
      let _ = Math.pow(l.distanceToSquared(d), p), g = Math.pow(d.distanceToSquared(f), p), m = Math.pow(f.distanceToSquared(u), p);
      g < 1e-4 && (g = 1), _ < 1e-4 && (_ = g), m < 1e-4 && (m = g), Xr.initNonuniformCatmullRom(l.x, d.x, f.x, u.x, _, g, m), Yr.initNonuniformCatmullRom(l.y, d.y, f.y, u.y, _, g, m), jr.initNonuniformCatmullRom(l.z, d.z, f.z, u.z, _, g, m);
    } else
      this.curveType === "catmullrom" && (Xr.initCatmullRom(l.x, d.x, f.x, u.x, this.tension), Yr.initCatmullRom(l.y, d.y, f.y, u.y, this.tension), jr.initCatmullRom(l.z, d.z, f.z, u.z, this.tension));
    return n.set(
      Xr.calc(c),
      Yr.calc(c),
      jr.calc(c)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e.closed = this.closed, e.curveType = this.curveType, e.tension = this.tension, e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new R().fromArray(r));
    }
    return this.closed = e.closed, this.curveType = e.curveType, this.tension = e.tension, this;
  }
}
function Ja(i, e, t, n, r) {
  const s = (n - e) * 0.5, o = (r - t) * 0.5, a = i * i, c = i * a;
  return (2 * t - 2 * n + s + o) * c + (-3 * t + 3 * n - 2 * s - o) * a + s * i + t;
}
function pp(i, e) {
  const t = 1 - i;
  return t * t * e;
}
function mp(i, e) {
  return 2 * (1 - i) * i * e;
}
function _p(i, e) {
  return i * i * e;
}
function xi(i, e, t, n) {
  return pp(i, e) + mp(i, t) + _p(i, n);
}
function gp(i, e) {
  const t = 1 - i;
  return t * t * t * e;
}
function xp(i, e) {
  const t = 1 - i;
  return 3 * t * t * i * e;
}
function vp(i, e) {
  return 3 * (1 - i) * i * i * e;
}
function Mp(i, e) {
  return i * i * i * e;
}
function vi(i, e, t, n, r) {
  return gp(i, e) + xp(i, t) + vp(i, n) + Mp(i, r);
}
class Yo extends Vt {
  constructor(e = new ue(), t = new ue(), n = new ue(), r = new ue()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  getPoint(e, t = new ue()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      vi(e, r.x, s.x, o.x, a.x),
      vi(e, r.y, s.y, o.y, a.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Sp extends Vt {
  constructor(e = new R(), t = new R(), n = new R(), r = new R()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  getPoint(e, t = new R()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      vi(e, r.x, s.x, o.x, a.x),
      vi(e, r.y, s.y, o.y, a.y),
      vi(e, r.z, s.z, o.z, a.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this.v3.copy(e.v3), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e.v3 = this.v3.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this.v3.fromArray(e.v3), this;
  }
}
class Ts extends Vt {
  constructor(e = new ue(), t = new ue()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new ue()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new ue()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Ep extends Vt {
  constructor(e = new R(), t = new R()) {
    super(), this.isLineCurve3 = !0, this.type = "LineCurve3", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new R()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new R()) {
    return t.subVectors(this.v2, this.v1).normalize();
  }
  getTangentAt(e, t) {
    return this.getTangent(e, t);
  }
  copy(e) {
    return super.copy(e), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class jo extends Vt {
  constructor(e = new ue(), t = new ue(), n = new ue()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new ue()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2;
    return n.set(
      xi(e, r.x, s.x, o.x),
      xi(e, r.y, s.y, o.y)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class yp extends Vt {
  constructor(e = new R(), t = new R(), n = new R()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new R()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2;
    return n.set(
      xi(e, r.x, s.x, o.x),
      xi(e, r.y, s.y, o.y),
      xi(e, r.z, s.z, o.z)
    ), n;
  }
  copy(e) {
    return super.copy(e), this.v0.copy(e.v0), this.v1.copy(e.v1), this.v2.copy(e.v2), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.v0 = this.v0.toArray(), e.v1 = this.v1.toArray(), e.v2 = this.v2.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.v0.fromArray(e.v0), this.v1.fromArray(e.v1), this.v2.fromArray(e.v2), this;
  }
}
class Zo extends Vt {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new ue()) {
    const n = t, r = this.points, s = (r.length - 1) * e, o = Math.floor(s), a = s - o, c = r[o === 0 ? o : o - 1], l = r[o], u = r[o > r.length - 2 ? r.length - 1 : o + 1], d = r[o > r.length - 3 ? r.length - 1 : o + 2];
    return n.set(
      Ja(a, c.x, l.x, u.x, d.x),
      Ja(a, c.y, l.y, u.y, d.y)
    ), n;
  }
  copy(e) {
    super.copy(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.points = [];
    for (let t = 0, n = this.points.length; t < n; t++) {
      const r = this.points[t];
      e.points.push(r.toArray());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.points = [];
    for (let t = 0, n = e.points.length; t < n; t++) {
      const r = e.points[t];
      this.points.push(new ue().fromArray(r));
    }
    return this;
  }
}
var Ko = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: dp,
  CatmullRomCurve3: fp,
  CubicBezierCurve: Yo,
  CubicBezierCurve3: Sp,
  EllipseCurve: Es,
  LineCurve: Ts,
  LineCurve3: Ep,
  QuadraticBezierCurve: jo,
  QuadraticBezierCurve3: yp,
  SplineCurve: Zo
});
class Tp extends Vt {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Ts(t, e));
  }
  // To get accurate point with reference to
  // entire path distance at time t,
  // following has to be done:
  // 1. Length of each sub path have to be known
  // 2. Locate and identify type of curve
  // 3. Get t for the curve
  // 4. Return curve.getPointAt(t')
  getPoint(e, t) {
    const n = e * this.getLength(), r = this.getCurveLengths();
    let s = 0;
    for (; s < r.length; ) {
      if (r[s] >= n) {
        const o = r[s] - n, a = this.curves[s], c = a.getLength(), l = c === 0 ? 0 : 1 - o / c;
        return a.getPointAt(l, t);
      }
      s++;
    }
    return null;
  }
  // We cannot use the default THREE.Curve getPoint() with getLength() because in
  // THREE.Curve, getLength() depends on getPoint() but in THREE.CurvePath
  // getPoint() depends on getLength
  getLength() {
    const e = this.getCurveLengths();
    return e[e.length - 1];
  }
  // cacheLengths must be recalculated.
  updateArcLengths() {
    this.needsUpdate = !0, this.cacheLengths = null, this.getCurveLengths();
  }
  // Compute lengths and cache them
  // We cannot overwrite getLengths() because UtoT mapping uses it.
  getCurveLengths() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length)
      return this.cacheLengths;
    const e = [];
    let t = 0;
    for (let n = 0, r = this.curves.length; n < r; n++)
      t += this.curves[n].getLength(), e.push(t);
    return this.cacheLengths = e, e;
  }
  getSpacedPoints(e = 40) {
    const t = [];
    for (let n = 0; n <= e; n++)
      t.push(this.getPoint(n / e));
    return this.autoClose && t.push(t[0]), t;
  }
  getPoints(e = 12) {
    const t = [];
    let n;
    for (let r = 0, s = this.curves; r < s.length; r++) {
      const o = s[r], a = o.isEllipseCurve ? e * 2 : o.isLineCurve || o.isLineCurve3 ? 1 : o.isSplineCurve ? e * o.points.length : e, c = o.getPoints(a);
      for (let l = 0; l < c.length; l++) {
        const u = c[l];
        n && n.equals(u) || (t.push(u), n = u);
      }
    }
    return this.autoClose && t.length > 1 && !t[t.length - 1].equals(t[0]) && t.push(t[0]), t;
  }
  copy(e) {
    super.copy(e), this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const r = e.curves[t];
      this.curves.push(r.clone());
    }
    return this.autoClose = e.autoClose, this;
  }
  toJSON() {
    const e = super.toJSON();
    e.autoClose = this.autoClose, e.curves = [];
    for (let t = 0, n = this.curves.length; t < n; t++) {
      const r = this.curves[t];
      e.curves.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.autoClose = e.autoClose, this.curves = [];
    for (let t = 0, n = e.curves.length; t < n; t++) {
      const r = e.curves[t];
      this.curves.push(new Ko[r.type]().fromJSON(r));
    }
    return this;
  }
}
class ls extends Tp {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new ue(), e && this.setFromPoints(e);
  }
  setFromPoints(e) {
    this.moveTo(e[0].x, e[0].y);
    for (let t = 1, n = e.length; t < n; t++)
      this.lineTo(e[t].x, e[t].y);
    return this;
  }
  moveTo(e, t) {
    return this.currentPoint.set(e, t), this;
  }
  lineTo(e, t) {
    const n = new Ts(this.currentPoint.clone(), new ue(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, r) {
    const s = new jo(
      this.currentPoint.clone(),
      new ue(e, t),
      new ue(n, r)
    );
    return this.curves.push(s), this.currentPoint.set(n, r), this;
  }
  bezierCurveTo(e, t, n, r, s, o) {
    const a = new Yo(
      this.currentPoint.clone(),
      new ue(e, t),
      new ue(n, r),
      new ue(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new Zo(t);
    return this.curves.push(n), this.currentPoint.copy(e[e.length - 1]), this;
  }
  arc(e, t, n, r, s, o) {
    const a = this.currentPoint.x, c = this.currentPoint.y;
    return this.absarc(
      e + a,
      t + c,
      n,
      r,
      s,
      o
    ), this;
  }
  absarc(e, t, n, r, s, o) {
    return this.absellipse(e, t, n, n, r, s, o), this;
  }
  ellipse(e, t, n, r, s, o, a, c) {
    const l = this.currentPoint.x, u = this.currentPoint.y;
    return this.absellipse(e + l, t + u, n, r, s, o, a, c), this;
  }
  absellipse(e, t, n, r, s, o, a, c) {
    const l = new Es(e, t, n, r, s, o, a, c);
    if (this.curves.length > 0) {
      const d = l.getPoint(0);
      d.equals(this.currentPoint) || this.lineTo(d.x, d.y);
    }
    this.curves.push(l);
    const u = l.getPoint(1);
    return this.currentPoint.copy(u), this;
  }
  copy(e) {
    return super.copy(e), this.currentPoint.copy(e.currentPoint), this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.currentPoint = this.currentPoint.toArray(), e;
  }
  fromJSON(e) {
    return super.fromJSON(e), this.currentPoint.fromArray(e.currentPoint), this;
  }
}
class ir extends ls {
  constructor(e) {
    super(e), this.uuid = ai(), this.type = "Shape", this.holes = [];
  }
  getPointsHoles(e) {
    const t = [];
    for (let n = 0, r = this.holes.length; n < r; n++)
      t[n] = this.holes[n].getPoints(e);
    return t;
  }
  // get points of shape and holes (keypoints based on segments parameter)
  extractPoints(e) {
    return {
      shape: this.getPoints(e),
      holes: this.getPointsHoles(e)
    };
  }
  copy(e) {
    super.copy(e), this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const r = e.holes[t];
      this.holes.push(r.clone());
    }
    return this;
  }
  toJSON() {
    const e = super.toJSON();
    e.uuid = this.uuid, e.holes = [];
    for (let t = 0, n = this.holes.length; t < n; t++) {
      const r = this.holes[t];
      e.holes.push(r.toJSON());
    }
    return e;
  }
  fromJSON(e) {
    super.fromJSON(e), this.uuid = e.uuid, this.holes = [];
    for (let t = 0, n = e.holes.length; t < n; t++) {
      const r = e.holes[t];
      this.holes.push(new ls().fromJSON(r));
    }
    return this;
  }
}
const bp = {
  triangulate: function(i, e, t = 2) {
    const n = e && e.length, r = n ? e[0] * t : i.length;
    let s = Jo(i, 0, r, t, !0);
    const o = [];
    if (!s || s.next === s.prev)
      return o;
    let a, c, l, u, d, f, p;
    if (n && (s = Cp(i, e, s, t)), i.length > 80 * t) {
      a = l = i[0], c = u = i[1];
      for (let _ = t; _ < r; _ += t)
        d = i[_], f = i[_ + 1], d < a && (a = d), f < c && (c = f), d > l && (l = d), f > u && (u = f);
      p = Math.max(l - a, u - c), p = p !== 0 ? 32767 / p : 0;
    }
    return Ti(s, o, t, a, c, p, 0), o;
  }
};
function Jo(i, e, t, n, r) {
  let s, o;
  if (r === Gp(i, e, t, n) > 0)
    for (s = e; s < t; s += n)
      o = $a(s, i[s], i[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n)
      o = $a(s, i[s], i[s + 1], o);
  return o && ur(o, o.next) && (Ai(o), o = o.next), o;
}
function wn(i, e) {
  if (!i)
    return i;
  e || (e = i);
  let t = i, n;
  do
    if (n = !1, !t.steiner && (ur(t, t.next) || Ze(t.prev, t, t.next) === 0)) {
      if (Ai(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function Ti(i, e, t, n, r, s, o) {
  if (!i)
    return;
  !o && s && Ip(i, n, r, s);
  let a = i, c, l;
  for (; i.prev !== i.next; ) {
    if (c = i.prev, l = i.next, s ? wp(i, n, r, s) : Ap(i)) {
      e.push(c.i / t | 0), e.push(i.i / t | 0), e.push(l.i / t | 0), Ai(i), i = l.next, a = l.next;
      continue;
    }
    if (i = l, i === a) {
      o ? o === 1 ? (i = Pp(wn(i), e, t), Ti(i, e, t, n, r, s, 2)) : o === 2 && Rp(i, e, t, n, r, s) : Ti(wn(i), e, t, n, r, s, 1);
      break;
    }
  }
}
function Ap(i) {
  const e = i.prev, t = i, n = i.next;
  if (Ze(e, t, n) >= 0)
    return !1;
  const r = e.x, s = t.x, o = n.x, a = e.y, c = t.y, l = n.y, u = r < s ? r < o ? r : o : s < o ? s : o, d = a < c ? a < l ? a : l : c < l ? c : l, f = r > s ? r > o ? r : o : s > o ? s : o, p = a > c ? a > l ? a : l : c > l ? c : l;
  let _ = n.next;
  for (; _ !== e; ) {
    if (_.x >= u && _.x <= f && _.y >= d && _.y <= p && Zn(r, a, s, c, o, l, _.x, _.y) && Ze(_.prev, _, _.next) >= 0)
      return !1;
    _ = _.next;
  }
  return !0;
}
function wp(i, e, t, n) {
  const r = i.prev, s = i, o = i.next;
  if (Ze(r, s, o) >= 0)
    return !1;
  const a = r.x, c = s.x, l = o.x, u = r.y, d = s.y, f = o.y, p = a < c ? a < l ? a : l : c < l ? c : l, _ = u < d ? u < f ? u : f : d < f ? d : f, g = a > c ? a > l ? a : l : c > l ? c : l, m = u > d ? u > f ? u : f : d > f ? d : f, h = cs(p, _, e, t, n), S = cs(g, m, e, t, n);
  let x = i.prevZ, b = i.nextZ;
  for (; x && x.z >= h && b && b.z <= S; ) {
    if (x.x >= p && x.x <= g && x.y >= _ && x.y <= m && x !== r && x !== o && Zn(a, u, c, d, l, f, x.x, x.y) && Ze(x.prev, x, x.next) >= 0 || (x = x.prevZ, b.x >= p && b.x <= g && b.y >= _ && b.y <= m && b !== r && b !== o && Zn(a, u, c, d, l, f, b.x, b.y) && Ze(b.prev, b, b.next) >= 0))
      return !1;
    b = b.nextZ;
  }
  for (; x && x.z >= h; ) {
    if (x.x >= p && x.x <= g && x.y >= _ && x.y <= m && x !== r && x !== o && Zn(a, u, c, d, l, f, x.x, x.y) && Ze(x.prev, x, x.next) >= 0)
      return !1;
    x = x.prevZ;
  }
  for (; b && b.z <= S; ) {
    if (b.x >= p && b.x <= g && b.y >= _ && b.y <= m && b !== r && b !== o && Zn(a, u, c, d, l, f, b.x, b.y) && Ze(b.prev, b, b.next) >= 0)
      return !1;
    b = b.nextZ;
  }
  return !0;
}
function Pp(i, e, t) {
  let n = i;
  do {
    const r = n.prev, s = n.next.next;
    !ur(r, s) && $o(r, n, n.next, s) && bi(r, s) && bi(s, r) && (e.push(r.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), Ai(n), Ai(n.next), n = i = s), n = n.next;
  } while (n !== i);
  return wn(n);
}
function Rp(i, e, t, n, r, s) {
  let o = i;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Op(o, a)) {
        let c = Qo(o, a);
        o = wn(o, o.next), c = wn(c, c.next), Ti(o, e, t, n, r, s, 0), Ti(c, e, t, n, r, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== i);
}
function Cp(i, e, t, n) {
  const r = [];
  let s, o, a, c, l;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, c = s < o - 1 ? e[s + 1] * n : i.length, l = Jo(i, a, c, n, !1), l === l.next && (l.steiner = !0), r.push(Fp(l));
  for (r.sort(Lp), s = 0; s < r.length; s++)
    t = qp(r[s], t);
  return t;
}
function Lp(i, e) {
  return i.x - e.x;
}
function qp(i, e) {
  const t = Dp(i, e);
  if (!t)
    return e;
  const n = Qo(t, i);
  return wn(n, n.next), wn(t, t.next);
}
function Dp(i, e) {
  let t = e, n = -1 / 0, r;
  const s = i.x, o = i.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const f = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (f <= s && f > n && (n = f, r = t.x < t.next.x ? t : t.next, f === s))
        return r;
    }
    t = t.next;
  } while (t !== e);
  if (!r)
    return null;
  const a = r, c = r.x, l = r.y;
  let u = 1 / 0, d;
  t = r;
  do
    s >= t.x && t.x >= c && s !== t.x && Zn(o < l ? s : n, o, c, l, o < l ? n : s, o, t.x, t.y) && (d = Math.abs(o - t.y) / (s - t.x), bi(t, i) && (d < u || d === u && (t.x > r.x || t.x === r.x && Up(r, t))) && (r = t, u = d)), t = t.next;
  while (t !== a);
  return r;
}
function Up(i, e) {
  return Ze(i.prev, i, e.prev) < 0 && Ze(e.next, i, i.next) < 0;
}
function Ip(i, e, t, n) {
  let r = i;
  do
    r.z === 0 && (r.z = cs(r.x, r.y, e, t, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== i);
  r.prevZ.nextZ = null, r.prevZ = null, Np(r);
}
function Np(i) {
  let e, t, n, r, s, o, a, c, l = 1;
  do {
    for (t = i, i = null, s = null, o = 0; t; ) {
      for (o++, n = t, a = 0, e = 0; e < l && (a++, n = n.nextZ, !!n); e++)
        ;
      for (c = l; a > 0 || c > 0 && n; )
        a !== 0 && (c === 0 || !n || t.z <= n.z) ? (r = t, t = t.nextZ, a--) : (r = n, n = n.nextZ, c--), s ? s.nextZ = r : i = r, r.prevZ = s, s = r;
      t = n;
    }
    s.nextZ = null, l *= 2;
  } while (o > 1);
  return i;
}
function cs(i, e, t, n, r) {
  return i = (i - t) * r | 0, e = (e - n) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, i | e << 1;
}
function Fp(i) {
  let e = i, t = i;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== i);
  return t;
}
function Zn(i, e, t, n, r, s, o, a) {
  return (r - o) * (e - a) >= (i - o) * (s - a) && (i - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (r - o) * (n - a);
}
function Op(i, e) {
  return i.next.i !== e.i && i.prev.i !== e.i && !Bp(i, e) && // dones't intersect other edges
  (bi(i, e) && bi(e, i) && zp(i, e) && // locally visible
  (Ze(i.prev, i, e.prev) || Ze(i, e.prev, e)) || // does not create opposite-facing sectors
  ur(i, e) && Ze(i.prev, i, i.next) > 0 && Ze(e.prev, e, e.next) > 0);
}
function Ze(i, e, t) {
  return (e.y - i.y) * (t.x - e.x) - (e.x - i.x) * (t.y - e.y);
}
function ur(i, e) {
  return i.x === e.x && i.y === e.y;
}
function $o(i, e, t, n) {
  const r = Qi(Ze(i, e, t)), s = Qi(Ze(i, e, n)), o = Qi(Ze(t, n, i)), a = Qi(Ze(t, n, e));
  return !!(r !== s && o !== a || r === 0 && $i(i, t, e) || s === 0 && $i(i, n, e) || o === 0 && $i(t, i, n) || a === 0 && $i(t, e, n));
}
function $i(i, e, t) {
  return e.x <= Math.max(i.x, t.x) && e.x >= Math.min(i.x, t.x) && e.y <= Math.max(i.y, t.y) && e.y >= Math.min(i.y, t.y);
}
function Qi(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function Bp(i, e) {
  let t = i;
  do {
    if (t.i !== i.i && t.next.i !== i.i && t.i !== e.i && t.next.i !== e.i && $o(t, t.next, i, e))
      return !0;
    t = t.next;
  } while (t !== i);
  return !1;
}
function bi(i, e) {
  return Ze(i.prev, i, i.next) < 0 ? Ze(i, e, i.next) >= 0 && Ze(i, i.prev, e) >= 0 : Ze(i, e, i.prev) < 0 || Ze(i, i.next, e) < 0;
}
function zp(i, e) {
  let t = i, n = !1;
  const r = (i.x + e.x) / 2, s = (i.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && r < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== i);
  return n;
}
function Qo(i, e) {
  const t = new us(i.i, i.x, i.y), n = new us(e.i, e.x, e.y), r = i.next, s = e.prev;
  return i.next = e, e.prev = i, t.next = r, r.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function $a(i, e, t, n) {
  const r = new us(i, e, t);
  return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r;
}
function Ai(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function us(i, e, t) {
  this.i = i, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Gp(i, e, t, n) {
  let r = 0;
  for (let s = e, o = t - n; s < t; s += n)
    r += (i[o] - i[s]) * (i[s + 1] + i[o + 1]), o = s;
  return r;
}
class Qn {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let r = t - 1, s = 0; s < t; r = s++)
      n += e[r].x * e[s].y - e[s].x * e[r].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return Qn.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], r = [], s = [];
    Qa(e), eo(n, e);
    let o = e.length;
    t.forEach(Qa);
    for (let c = 0; c < t.length; c++)
      r.push(o), o += t[c].length, eo(n, t[c]);
    const a = bp.triangulate(n, r);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function Qa(i) {
  const e = i.length;
  e > 2 && i[e - 1].equals(i[0]) && i.pop();
}
function eo(i, e) {
  for (let t = 0; t < e.length; t++)
    i.push(e[t].x), i.push(e[t].y);
}
class bs extends St {
  constructor(e = new ir([new ue(0.5, 0.5), new ue(-0.5, 0.5), new ue(-0.5, -0.5), new ue(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, r = [], s = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a];
      o(l);
    }
    this.setAttribute("position", new st(r, 3)), this.setAttribute("uv", new st(s, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, u = t.steps !== void 0 ? t.steps : 1, d = t.depth !== void 0 ? t.depth : 1;
      let f = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, p = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, _ = t.bevelSize !== void 0 ? t.bevelSize : p - 0.1, g = t.bevelOffset !== void 0 ? t.bevelOffset : 0, m = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const h = t.extrudePath, S = t.UVGenerator !== void 0 ? t.UVGenerator : Hp;
      let x, b = !1, y, w, q, N;
      h && (x = h.getSpacedPoints(u), b = !0, f = !1, y = h.computeFrenetFrames(u, !1), w = new R(), q = new R(), N = new R()), f || (m = 0, p = 0, _ = 0, g = 0);
      const v = a.extractPoints(l);
      let A = v.shape;
      const H = v.holes;
      if (!Qn.isClockWise(A)) {
        A = A.reverse();
        for (let ee = 0, k = H.length; ee < k; ee++) {
          const Q = H[ee];
          Qn.isClockWise(Q) && (H[ee] = Q.reverse());
        }
      }
      const D = Qn.triangulateShape(A, H), O = A;
      for (let ee = 0, k = H.length; ee < k; ee++) {
        const Q = H[ee];
        A = A.concat(Q);
      }
      function G(ee, k, Q) {
        return k || console.error("THREE.ExtrudeGeometry: vec does not exist"), ee.clone().addScaledVector(k, Q);
      }
      const te = A.length, Z = D.length;
      function V(ee, k, Q) {
        let ge, oe, we;
        const Pe = ee.x - k.x, Ee = ee.y - k.y, qe = Q.x - ee.x, he = Q.y - ee.y, T = Pe * Pe + Ee * Ee, M = Pe * he - Ee * qe;
        if (Math.abs(M) > Number.EPSILON) {
          const F = Math.sqrt(T), ie = Math.sqrt(qe * qe + he * he), re = k.x - Ee / F, de = k.y + Pe / F, P = Q.x - he / ie, J = Q.y + qe / ie, B = ((P - re) * he - (J - de) * qe) / (Pe * he - Ee * qe);
          ge = re + Pe * B - ee.x, oe = de + Ee * B - ee.y;
          const me = ge * ge + oe * oe;
          if (me <= 2)
            return new ue(ge, oe);
          we = Math.sqrt(me / 2);
        } else {
          let F = !1;
          Pe > Number.EPSILON ? qe > Number.EPSILON && (F = !0) : Pe < -Number.EPSILON ? qe < -Number.EPSILON && (F = !0) : Math.sign(Ee) === Math.sign(he) && (F = !0), F ? (ge = -Ee, oe = Pe, we = Math.sqrt(T)) : (ge = Pe, oe = Ee, we = Math.sqrt(T / 2));
        }
        return new ue(ge / we, oe / we);
      }
      const K = [];
      for (let ee = 0, k = O.length, Q = k - 1, ge = ee + 1; ee < k; ee++, Q++, ge++)
        Q === k && (Q = 0), ge === k && (ge = 0), K[ee] = V(O[ee], O[Q], O[ge]);
      const $ = [];
      let ce, pe = K.concat();
      for (let ee = 0, k = H.length; ee < k; ee++) {
        const Q = H[ee];
        ce = [];
        for (let ge = 0, oe = Q.length, we = oe - 1, Pe = ge + 1; ge < oe; ge++, we++, Pe++)
          we === oe && (we = 0), Pe === oe && (Pe = 0), ce[ge] = V(Q[ge], Q[we], Q[Pe]);
        $.push(ce), pe = pe.concat(ce);
      }
      for (let ee = 0; ee < m; ee++) {
        const k = ee / m, Q = p * Math.cos(k * Math.PI / 2), ge = _ * Math.sin(k * Math.PI / 2) + g;
        for (let oe = 0, we = O.length; oe < we; oe++) {
          const Pe = G(O[oe], K[oe], ge);
          C(Pe.x, Pe.y, -Q);
        }
        for (let oe = 0, we = H.length; oe < we; oe++) {
          const Pe = H[oe];
          ce = $[oe];
          for (let Ee = 0, qe = Pe.length; Ee < qe; Ee++) {
            const he = G(Pe[Ee], ce[Ee], ge);
            C(he.x, he.y, -Q);
          }
        }
      }
      const z = _ + g;
      for (let ee = 0; ee < te; ee++) {
        const k = f ? G(A[ee], pe[ee], z) : A[ee];
        b ? (q.copy(y.normals[0]).multiplyScalar(k.x), w.copy(y.binormals[0]).multiplyScalar(k.y), N.copy(x[0]).add(q).add(w), C(N.x, N.y, N.z)) : C(k.x, k.y, 0);
      }
      for (let ee = 1; ee <= u; ee++)
        for (let k = 0; k < te; k++) {
          const Q = f ? G(A[k], pe[k], z) : A[k];
          b ? (q.copy(y.normals[ee]).multiplyScalar(Q.x), w.copy(y.binormals[ee]).multiplyScalar(Q.y), N.copy(x[ee]).add(q).add(w), C(N.x, N.y, N.z)) : C(Q.x, Q.y, d / u * ee);
        }
      for (let ee = m - 1; ee >= 0; ee--) {
        const k = ee / m, Q = p * Math.cos(k * Math.PI / 2), ge = _ * Math.sin(k * Math.PI / 2) + g;
        for (let oe = 0, we = O.length; oe < we; oe++) {
          const Pe = G(O[oe], K[oe], ge);
          C(Pe.x, Pe.y, d + Q);
        }
        for (let oe = 0, we = H.length; oe < we; oe++) {
          const Pe = H[oe];
          ce = $[oe];
          for (let Ee = 0, qe = Pe.length; Ee < qe; Ee++) {
            const he = G(Pe[Ee], ce[Ee], ge);
            b ? C(he.x, he.y + x[u - 1].y, x[u - 1].x + Q) : C(he.x, he.y, d + Q);
          }
        }
      }
      j(), le();
      function j() {
        const ee = r.length / 3;
        if (f) {
          let k = 0, Q = te * k;
          for (let ge = 0; ge < Z; ge++) {
            const oe = D[ge];
            Te(oe[2] + Q, oe[1] + Q, oe[0] + Q);
          }
          k = u + m * 2, Q = te * k;
          for (let ge = 0; ge < Z; ge++) {
            const oe = D[ge];
            Te(oe[0] + Q, oe[1] + Q, oe[2] + Q);
          }
        } else {
          for (let k = 0; k < Z; k++) {
            const Q = D[k];
            Te(Q[2], Q[1], Q[0]);
          }
          for (let k = 0; k < Z; k++) {
            const Q = D[k];
            Te(Q[0] + te * u, Q[1] + te * u, Q[2] + te * u);
          }
        }
        n.addGroup(ee, r.length / 3 - ee, 0);
      }
      function le() {
        const ee = r.length / 3;
        let k = 0;
        _e(O, k), k += O.length;
        for (let Q = 0, ge = H.length; Q < ge; Q++) {
          const oe = H[Q];
          _e(oe, k), k += oe.length;
        }
        n.addGroup(ee, r.length / 3 - ee, 1);
      }
      function _e(ee, k) {
        let Q = ee.length;
        for (; --Q >= 0; ) {
          const ge = Q;
          let oe = Q - 1;
          oe < 0 && (oe = ee.length - 1);
          for (let we = 0, Pe = u + m * 2; we < Pe; we++) {
            const Ee = te * we, qe = te * (we + 1), he = k + ge + Ee, T = k + oe + Ee, M = k + oe + qe, F = k + ge + qe;
            Ce(he, T, M, F);
          }
        }
      }
      function C(ee, k, Q) {
        c.push(ee), c.push(k), c.push(Q);
      }
      function Te(ee, k, Q) {
        ae(ee), ae(k), ae(Q);
        const ge = r.length / 3, oe = S.generateTopUV(n, r, ge - 3, ge - 2, ge - 1);
        Se(oe[0]), Se(oe[1]), Se(oe[2]);
      }
      function Ce(ee, k, Q, ge) {
        ae(ee), ae(k), ae(ge), ae(k), ae(Q), ae(ge);
        const oe = r.length / 3, we = S.generateSideWallUV(n, r, oe - 6, oe - 3, oe - 2, oe - 1);
        Se(we[0]), Se(we[1]), Se(we[3]), Se(we[1]), Se(we[2]), Se(we[3]);
      }
      function ae(ee) {
        r.push(c[ee * 3 + 0]), r.push(c[ee * 3 + 1]), r.push(c[ee * 3 + 2]);
      }
      function Se(ee) {
        s.push(ee.x), s.push(ee.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return Vp(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const r = e.options.extrudePath;
    return r !== void 0 && (e.options.extrudePath = new Ko[r.type]().fromJSON(r)), new bs(n, e.options);
  }
}
const Hp = {
  generateTopUV: function(i, e, t, n, r) {
    const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[r * 3], u = e[r * 3 + 1];
    return [
      new ue(s, o),
      new ue(a, c),
      new ue(l, u)
    ];
  },
  generateSideWallUV: function(i, e, t, n, r, s) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], u = e[n * 3 + 1], d = e[n * 3 + 2], f = e[r * 3], p = e[r * 3 + 1], _ = e[r * 3 + 2], g = e[s * 3], m = e[s * 3 + 1], h = e[s * 3 + 2];
    return Math.abs(a - u) < Math.abs(o - l) ? [
      new ue(o, 1 - c),
      new ue(l, 1 - d),
      new ue(f, 1 - _),
      new ue(g, 1 - h)
    ] : [
      new ue(a, 1 - c),
      new ue(u, 1 - d),
      new ue(p, 1 - _),
      new ue(m, 1 - h)
    ];
  }
};
function Vp(i, e, t) {
  if (t.shapes = [], Array.isArray(i))
    for (let n = 0, r = i.length; n < r; n++) {
      const s = i[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(i.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class As extends St {
  constructor(e = 1, t = 32, n = 16, r = 0, s = Math.PI * 2, o = 0, a = Math.PI) {
    super(), this.type = "SphereGeometry", this.parameters = {
      radius: e,
      widthSegments: t,
      heightSegments: n,
      phiStart: r,
      phiLength: s,
      thetaStart: o,
      thetaLength: a
    }, t = Math.max(3, Math.floor(t)), n = Math.max(2, Math.floor(n));
    const c = Math.min(o + a, Math.PI);
    let l = 0;
    const u = [], d = new R(), f = new R(), p = [], _ = [], g = [], m = [];
    for (let h = 0; h <= n; h++) {
      const S = [], x = h / n;
      let b = 0;
      h === 0 && o === 0 ? b = 0.5 / t : h === n && c === Math.PI && (b = -0.5 / t);
      for (let y = 0; y <= t; y++) {
        const w = y / t;
        d.x = -e * Math.cos(r + w * s) * Math.sin(o + x * a), d.y = e * Math.cos(o + x * a), d.z = e * Math.sin(r + w * s) * Math.sin(o + x * a), _.push(d.x, d.y, d.z), f.copy(d).normalize(), g.push(f.x, f.y, f.z), m.push(w + b, 1 - x), S.push(l++);
      }
      u.push(S);
    }
    for (let h = 0; h < n; h++)
      for (let S = 0; S < t; S++) {
        const x = u[h][S + 1], b = u[h][S], y = u[h + 1][S], w = u[h + 1][S + 1];
        (h !== 0 || o > 0) && p.push(x, b, w), (h !== n - 1 || c < Math.PI) && p.push(b, y, w);
      }
    this.setIndex(p), this.setAttribute("position", new st(_, 3)), this.setAttribute("normal", new st(g, 3)), this.setAttribute("uv", new st(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new As(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class Zr extends oi {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Ve(16777215), this.specular = new Ve(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ve(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Ao, this.normalScale = new ue(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = _s, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
const to = {
  enabled: !1,
  files: {},
  add: function(i, e) {
    this.enabled !== !1 && (this.files[i] = e);
  },
  get: function(i) {
    if (this.enabled !== !1)
      return this.files[i];
  },
  remove: function(i) {
    delete this.files[i];
  },
  clear: function() {
    this.files = {};
  }
};
class kp {
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(u) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(u, o, a), s = !0;
    }, this.itemEnd = function(u) {
      o++, r.onProgress !== void 0 && r.onProgress(u, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(u) {
      r.onError !== void 0 && r.onError(u);
    }, this.resolveURL = function(u) {
      return c ? c(u) : u;
    }, this.setURLModifier = function(u) {
      return c = u, this;
    }, this.addHandler = function(u, d) {
      return l.push(u, d), this;
    }, this.removeHandler = function(u) {
      const d = l.indexOf(u);
      return d !== -1 && l.splice(d, 2), this;
    }, this.getHandler = function(u) {
      for (let d = 0, f = l.length; d < f; d += 2) {
        const p = l[d], _ = l[d + 1];
        if (p.global && (p.lastIndex = 0), p.test(u))
          return _;
      }
      return null;
    };
  }
}
const Wp = /* @__PURE__ */ new kp();
class el {
  constructor(e) {
    this.manager = e !== void 0 ? e : Wp, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(r, s) {
      n.load(e, r, t, s);
    });
  }
  parse() {
  }
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
}
const Kt = {};
class Xp extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class Yp extends el {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = to.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (Kt[e] !== void 0) {
      Kt[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return;
    }
    Kt[e] = [], Kt[e].push({
      onLoad: t,
      onProgress: n,
      onError: r
    });
    const o = new Request(e, {
      headers: new Headers(this.requestHeader),
      credentials: this.withCredentials ? "include" : "same-origin"
      // An abort controller could be added within a future PR
    }), a = this.mimeType, c = this.responseType;
    fetch(o).then((l) => {
      if (l.status === 200 || l.status === 0) {
        if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
          return l;
        const u = Kt[e], d = l.body.getReader(), f = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), p = f ? parseInt(f) : 0, _ = p !== 0;
        let g = 0;
        const m = new ReadableStream({
          start(h) {
            S();
            function S() {
              d.read().then(({ done: x, value: b }) => {
                if (x)
                  h.close();
                else {
                  g += b.byteLength;
                  const y = new ProgressEvent("progress", { lengthComputable: _, loaded: g, total: p });
                  for (let w = 0, q = u.length; w < q; w++) {
                    const N = u[w];
                    N.onProgress && N.onProgress(y);
                  }
                  h.enqueue(b), S();
                }
              });
            }
          }
        });
        return new Response(m);
      } else
        throw new Xp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((u) => new DOMParser().parseFromString(u, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const d = /charset="?([^;"\s]*)"?/i.exec(a), f = d && d[1] ? d[1].toLowerCase() : void 0, p = new TextDecoder(f);
            return l.arrayBuffer().then((_) => p.decode(_));
          }
      }
    }).then((l) => {
      to.add(e, l);
      const u = Kt[e];
      delete Kt[e];
      for (let d = 0, f = u.length; d < f; d++) {
        const p = u[d];
        p.onLoad && p.onLoad(l);
      }
    }).catch((l) => {
      const u = Kt[e];
      if (u === void 0)
        throw this.manager.itemError(e), l;
      delete Kt[e];
      for (let d = 0, f = u.length; d < f; d++) {
        const p = u[d];
        p.onError && p.onError(l);
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
}
class tl extends ot {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ve(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), t;
  }
}
const Kr = /* @__PURE__ */ new Ke(), no = /* @__PURE__ */ new R(), io = /* @__PURE__ */ new R();
class jp {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new ue(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ke(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new xs(), this._frameExtents = new ue(1, 1), this._viewportCount = 1, this._viewports = [
      new je(0, 0, 1, 1)
    ];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    no.setFromMatrixPosition(e.matrixWorld), t.position.copy(no), io.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(io), t.updateMatrixWorld(), Kr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Kr), n.set(
      0.5,
      0,
      0,
      0.5,
      0,
      0.5,
      0,
      0.5,
      0,
      0,
      0.5,
      0.5,
      0,
      0,
      0,
      1
    ), n.multiply(Kr);
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
    return this.camera = e.camera.clone(), this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(!1).object, delete e.camera.matrix, e;
  }
}
const ro = /* @__PURE__ */ new Ke(), pi = /* @__PURE__ */ new R(), Jr = /* @__PURE__ */ new R();
class Zp extends jp {
  constructor() {
    super(new wt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new ue(4, 2), this._viewportCount = 6, this._viewports = [
      // These viewports map a cube-map onto a 2D texture with the
      // following orientation:
      //
      //  xzXZ
      //   y Y
      //
      // X - Positive x direction
      // x - Negative x direction
      // Y - Positive y direction
      // y - Negative y direction
      // Z - Positive z direction
      // z - Negative z direction
      // positive X
      new je(2, 1, 1, 1),
      // negative X
      new je(0, 1, 1, 1),
      // positive Z
      new je(3, 1, 1, 1),
      // negative Z
      new je(1, 1, 1, 1),
      // positive Y
      new je(3, 0, 1, 1),
      // negative Y
      new je(1, 0, 1, 1)
    ], this._cubeDirections = [
      new R(1, 0, 0),
      new R(-1, 0, 0),
      new R(0, 0, 1),
      new R(0, 0, -1),
      new R(0, 1, 0),
      new R(0, -1, 0)
    ], this._cubeUps = [
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 1, 0),
      new R(0, 0, 1),
      new R(0, 0, -1)
    ];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, r = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), pi.setFromMatrixPosition(e.matrixWorld), n.position.copy(pi), Jr.copy(n.position), Jr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Jr), n.updateMatrixWorld(), r.makeTranslation(-pi.x, -pi.y, -pi.z), ro.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ro);
  }
}
class so extends tl {
  constructor(e, t, n = 0, r = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new Zp();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class Kp extends tl {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class ao {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  // restrict phi to be between EPS and PI-EPS
  makeSafe() {
    return this.phi = Math.max(1e-6, Math.min(Math.PI - 1e-6, this.phi)), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(at(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Jp extends Ss {
  constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
    n = new Ve(n), r = new Ve(r);
    const s = t / 2, o = e / t, a = e / 2, c = [], l = [];
    for (let f = 0, p = 0, _ = -a; f <= t; f++, _ += o) {
      c.push(-a, 0, _, a, 0, _), c.push(_, 0, -a, _, 0, a);
      const g = f === s ? n : r;
      g.toArray(l, p), p += 3, g.toArray(l, p), p += 3, g.toArray(l, p), p += 3, g.toArray(l, p), p += 3;
    }
    const u = new St();
    u.setAttribute("position", new st(c, 3)), u.setAttribute("color", new st(l, 3));
    const d = new cr({ vertexColors: !0, toneMapped: !1 });
    super(u, d), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class $p {
  constructor() {
    this.type = "ShapePath", this.color = new Ve(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new ls(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
  }
  lineTo(e, t) {
    return this.currentPath.lineTo(e, t), this;
  }
  quadraticCurveTo(e, t, n, r) {
    return this.currentPath.quadraticCurveTo(e, t, n, r), this;
  }
  bezierCurveTo(e, t, n, r, s, o) {
    return this.currentPath.bezierCurveTo(e, t, n, r, s, o), this;
  }
  splineThru(e) {
    return this.currentPath.splineThru(e), this;
  }
  toShapes(e) {
    function t(h) {
      const S = [];
      for (let x = 0, b = h.length; x < b; x++) {
        const y = h[x], w = new ir();
        w.curves = y.curves, S.push(w);
      }
      return S;
    }
    function n(h, S) {
      const x = S.length;
      let b = !1;
      for (let y = x - 1, w = 0; w < x; y = w++) {
        let q = S[y], N = S[w], v = N.x - q.x, A = N.y - q.y;
        if (Math.abs(A) > Number.EPSILON) {
          if (A < 0 && (q = S[w], v = -v, N = S[y], A = -A), h.y < q.y || h.y > N.y)
            continue;
          if (h.y === q.y) {
            if (h.x === q.x)
              return !0;
          } else {
            const H = A * (h.x - q.x) - v * (h.y - q.y);
            if (H === 0)
              return !0;
            if (H < 0)
              continue;
            b = !b;
          }
        } else {
          if (h.y !== q.y)
            continue;
          if (N.x <= h.x && h.x <= q.x || q.x <= h.x && h.x <= N.x)
            return !0;
        }
      }
      return b;
    }
    const r = Qn.isClockWise, s = this.subPaths;
    if (s.length === 0)
      return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new ir(), c.curves = a.curves, l.push(c), l;
    let u = !r(s[0].getPoints());
    u = e ? !u : u;
    const d = [], f = [];
    let p = [], _ = 0, g;
    f[_] = void 0, p[_] = [];
    for (let h = 0, S = s.length; h < S; h++)
      a = s[h], g = a.getPoints(), o = r(g), o = e ? !o : o, o ? (!u && f[_] && _++, f[_] = { s: new ir(), p: g }, f[_].s.curves = a.curves, u && _++, p[_] = []) : p[_].push({ h: a, p: g[0] });
    if (!f[0])
      return t(s);
    if (f.length > 1) {
      let h = !1, S = 0;
      for (let x = 0, b = f.length; x < b; x++)
        d[x] = [];
      for (let x = 0, b = f.length; x < b; x++) {
        const y = p[x];
        for (let w = 0; w < y.length; w++) {
          const q = y[w];
          let N = !0;
          for (let v = 0; v < f.length; v++)
            n(q.p, f[v].p) && (x !== v && S++, N ? (N = !1, d[v].push(q)) : h = !0);
          N && d[x].push(q);
        }
      }
      S > 0 && h === !1 && (p = d);
    }
    let m;
    for (let h = 0, S = f.length; h < S; h++) {
      c = f[h].s, l.push(c), m = p[h];
      for (let x = 0, b = m.length; x < b; x++)
        c.holes.push(m[x].h);
    }
    return l;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: ms
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ms);
class Qp extends el {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = this, o = new Yp(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const c = s.parse(JSON.parse(a));
      t && t(c);
    }, n, r);
  }
  parse(e) {
    return new em(e);
  }
}
class em {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], r = tm(e, t, this.data);
    for (let s = 0, o = r.length; s < o; s++)
      n.push(...r[s].toShapes());
    return n;
  }
}
function tm(i, e, t) {
  const n = Array.from(i), r = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * r, o = [];
  let a = 0, c = 0;
  for (let l = 0; l < n.length; l++) {
    const u = n[l];
    if (u === `
`)
      a = 0, c -= s;
    else {
      const d = nm(u, r, a, c, t);
      a += d.offsetX, o.push(d.path);
    }
  }
  return o;
}
function nm(i, e, t, n, r) {
  const s = r.glyphs[i] || r.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + i + '" does not exists in font family ' + r.familyName + ".");
    return;
  }
  const o = new $p();
  let a, c, l, u, d, f, p, _;
  if (s.o) {
    const g = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let m = 0, h = g.length; m < h; )
      switch (g[m++]) {
        case "m":
          a = g[m++] * e + t, c = g[m++] * e + n, o.moveTo(a, c);
          break;
        case "l":
          a = g[m++] * e + t, c = g[m++] * e + n, o.lineTo(a, c);
          break;
        case "q":
          l = g[m++] * e + t, u = g[m++] * e + n, d = g[m++] * e + t, f = g[m++] * e + n, o.quadraticCurveTo(d, f, l, u);
          break;
        case "b":
          l = g[m++] * e + t, u = g[m++] * e + n, d = g[m++] * e + t, f = g[m++] * e + n, p = g[m++] * e + t, _ = g[m++] * e + n, o.bezierCurveTo(d, f, p, _, l, u);
          break;
      }
  }
  return { offsetX: s.ha * e, path: o };
}
class oo extends bs {
  constructor(e, t = {}) {
    const n = t.font;
    if (n === void 0)
      super();
    else {
      const r = n.generateShapes(e, t.size);
      t.depth = t.height !== void 0 ? t.height : 50, t.bevelThickness === void 0 && (t.bevelThickness = 10), t.bevelSize === void 0 && (t.bevelSize = 8), t.bevelEnabled === void 0 && (t.bevelEnabled = !1), super(r, t);
    }
    this.type = "TextGeometry";
  }
}
const im = { glyphs: { ο: { x_min: 0, x_max: 712, ha: 815, o: "m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 " }, S: { x_min: 0, x_max: 788, ha: 890, o: "m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 " }, "¦": { x_min: 343, x_max: 449, ha: 792, o: "m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 " }, "/": { x_min: 183.25, x_max: 608.328125, ha: 792, o: "m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 " }, Τ: { x_min: -0.4375, x_max: 777.453125, ha: 839, o: "m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 " }, y: { x_min: 0, x_max: 684.78125, ha: 771, o: "m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 " }, Π: { x_min: 0, x_max: 803, ha: 917, o: "m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 " }, ΐ: { x_min: -111, x_max: 339, ha: 361, o: "m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 " }, g: { x_min: 0, x_max: 686, ha: 838, o: "m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 " }, "²": { x_min: 0, x_max: 442, ha: 539, o: "m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 " }, "–": { x_min: 0, x_max: 705.5625, ha: 803, o: "m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 " }, Κ: { x_min: 0, x_max: 819.5625, ha: 893, o: "m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 " }, ƒ: { x_min: -46.265625, x_max: 392, ha: 513, o: "m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 " }, e: { x_min: 0, x_max: 714, ha: 813, o: "m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 " }, ό: { x_min: 0, x_max: 712, ha: 815, o: "m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 " }, J: { x_min: 0, x_max: 588, ha: 699, o: "m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 " }, "»": { x_min: -1, x_max: 503, ha: 601, o: "m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 " }, "©": { x_min: -3, x_max: 1008, ha: 1106, o: "m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 " }, ώ: { x_min: 0, x_max: 922, ha: 1030, o: "m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 " }, "^": { x_min: 193.0625, x_max: 598.609375, ha: 792, o: "m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 " }, "«": { x_min: 0, x_max: 507.203125, ha: 604, o: "m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 " }, D: { x_min: 0, x_max: 828, ha: 935, o: "m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 " }, "∙": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 " }, ÿ: { x_min: 0, x_max: 47, ha: 125, o: "m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 " }, w: { x_min: 0, x_max: 1009.71875, ha: 1100, o: "m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 " }, $: { x_min: 0, x_max: 700, ha: 793, o: "m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 " }, "\\": { x_min: -0.015625, x_max: 425.0625, ha: 522, o: "m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 " }, µ: { x_min: 0, x_max: 697.21875, ha: 747, o: "m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 " }, Ι: { x_min: 42, x_max: 181, ha: 297, o: "m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 " }, Ύ: { x_min: 0, x_max: 1144.5, ha: 1214, o: "m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, "’": { x_min: 0, x_max: 139, ha: 236, o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 " }, Ν: { x_min: 0, x_max: 801, ha: 915, o: "m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 " }, "-": { x_min: 8.71875, x_max: 350.390625, ha: 478, o: "m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 " }, Q: { x_min: 0, x_max: 968, ha: 1072, o: "m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 " }, ς: { x_min: 1, x_max: 676.28125, ha: 740, o: "m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 " }, M: { x_min: 0, x_max: 954, ha: 1067, o: "m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 " }, Ψ: { x_min: 0, x_max: 1006, ha: 1094, o: "m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 " }, C: { x_min: 0, x_max: 886, ha: 944, o: "m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 " }, "!": { x_min: 0, x_max: 138, ha: 236, o: "m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 " }, "{": { x_min: 0, x_max: 480.5625, ha: 578, o: "m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 " }, X: { x_min: -0.015625, x_max: 854.15625, ha: 940, o: "m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 " }, "#": { x_min: 0, x_max: 963.890625, ha: 1061, o: "m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 " }, ι: { x_min: 42, x_max: 284, ha: 361, o: "m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 " }, Ά: { x_min: 0, x_max: 906.953125, ha: 982, o: "m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 " }, ")": { x_min: 0, x_max: 318, ha: 415, o: "m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 " }, ε: { x_min: 0, x_max: 634.71875, ha: 714, o: "m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 " }, Δ: { x_min: 0, x_max: 952.78125, ha: 1028, o: "m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 " }, "}": { x_min: 0, x_max: 481, ha: 578, o: "m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 " }, "‰": { x_min: -3, x_max: 1672, ha: 1821, o: "m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 " }, a: { x_min: 0, x_max: 698.609375, ha: 794, o: "m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 " }, "—": { x_min: 0, x_max: 941.671875, ha: 1039, o: "m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 " }, "=": { x_min: 8.71875, x_max: 780.953125, ha: 792, o: "m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 " }, N: { x_min: 0, x_max: 801, ha: 914, o: "m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 " }, ρ: { x_min: 0, x_max: 712, ha: 797, o: "m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 " }, 2: { x_min: 59, x_max: 731, ha: 792, o: "m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 " }, "¯": { x_min: 0, x_max: 941.671875, ha: 938, o: "m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 " }, Z: { x_min: 0, x_max: 779, ha: 849, o: "m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 " }, u: { x_min: 0, x_max: 617, ha: 729, o: "m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 " }, k: { x_min: 0, x_max: 612.484375, ha: 697, o: "m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 " }, Η: { x_min: 0, x_max: 803, ha: 917, o: "m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 " }, Α: { x_min: 0, x_max: 906.953125, ha: 985, o: "m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 " }, s: { x_min: 0, x_max: 604, ha: 697, o: "m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 " }, B: { x_min: 0, x_max: 778, ha: 876, o: "m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 " }, "…": { x_min: 0, x_max: 614, ha: 708, o: "m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 " }, "?": { x_min: 0, x_max: 607, ha: 704, o: "m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 " }, H: { x_min: 0, x_max: 803, ha: 915, o: "m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 " }, ν: { x_min: 0, x_max: 675, ha: 761, o: "m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 " }, c: { x_min: 1, x_max: 701.390625, ha: 775, o: "m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 " }, "¶": { x_min: 0, x_max: 566.671875, ha: 678, o: "m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 " }, β: { x_min: 0, x_max: 660, ha: 745, o: "m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 " }, Μ: { x_min: 0, x_max: 954, ha: 1068, o: "m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 " }, Ό: { x_min: 0.109375, x_max: 1120, ha: 1217, o: "m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, Ή: { x_min: 0, x_max: 1158, ha: 1275, o: "m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, "•": { x_min: 0, x_max: 663.890625, ha: 775, o: "m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 " }, "¥": { x_min: 0.1875, x_max: 819.546875, ha: 886, o: "m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 " }, "(": { x_min: 0, x_max: 318.0625, ha: 415, o: "m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 " }, U: { x_min: 0, x_max: 796, ha: 904, o: "m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 " }, γ: { x_min: 0.5, x_max: 744.953125, ha: 822, o: "m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 " }, α: { x_min: 0, x_max: 765.5625, ha: 809, o: "m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 " }, F: { x_min: 0, x_max: 683.328125, ha: 717, o: "m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 " }, "­": { x_min: 0, x_max: 705.5625, ha: 803, o: "m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 " }, ":": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 " }, Χ: { x_min: 0, x_max: 854.171875, ha: 935, o: "m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 " }, "*": { x_min: 116, x_max: 674, ha: 792, o: "m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 " }, "†": { x_min: 0, x_max: 777, ha: 835, o: "m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 " }, "°": { x_min: 0, x_max: 347, ha: 444, o: "m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 " }, V: { x_min: 0, x_max: 862.71875, ha: 940, o: "m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 " }, Ξ: { x_min: 0, x_max: 734.71875, ha: 763, o: "m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 " }, " ": { x_min: 0, x_max: 0, ha: 853 }, Ϋ: { x_min: 0.328125, x_max: 819.515625, ha: 889, o: "m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 " }, 0: { x_min: 73, x_max: 715, ha: 792, o: "m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 " }, "”": { x_min: 0, x_max: 347, ha: 454, o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 " }, "@": { x_min: 0, x_max: 1260, ha: 1357, o: "m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 " }, Ί: { x_min: 0, x_max: 499, ha: 613, o: "m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 " }, i: { x_min: 14, x_max: 136, ha: 275, o: "m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 " }, Β: { x_min: 0, x_max: 778, ha: 877, o: "m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 " }, υ: { x_min: 0, x_max: 617, ha: 725, o: "m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 " }, "]": { x_min: 0, x_max: 275, ha: 372, o: "m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 " }, m: { x_min: 0, x_max: 1019, ha: 1128, o: "m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 " }, χ: { x_min: 8.328125, x_max: 780.5625, ha: 815, o: "m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 " }, 8: { x_min: 55, x_max: 736, ha: 792, o: "m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 " }, ί: { x_min: 42, x_max: 326.71875, ha: 361, o: "m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 " }, Ζ: { x_min: 0, x_max: 779.171875, ha: 850, o: "m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 " }, R: { x_min: 0, x_max: 781.953125, ha: 907, o: "m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 " }, o: { x_min: 0, x_max: 713, ha: 821, o: "m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 " }, 5: { x_min: 54.171875, x_max: 738, ha: 792, o: "m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 " }, 7: { x_min: 58.71875, x_max: 730.953125, ha: 792, o: "m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 " }, K: { x_min: 0, x_max: 819.46875, ha: 906, o: "m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 " }, ",": { x_min: 0, x_max: 142, ha: 239, o: "m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 " }, d: { x_min: 0, x_max: 683, ha: 796, o: "m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 " }, "¨": { x_min: -109, x_max: 247, ha: 232, o: "m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 " }, E: { x_min: 0, x_max: 736.109375, ha: 789, o: "m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 " }, Y: { x_min: 0, x_max: 820, ha: 886, o: "m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 " }, '"': { x_min: 0, x_max: 299, ha: 396, o: "m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 " }, "‹": { x_min: 17.984375, x_max: 773.609375, ha: 792, o: "m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 " }, "„": { x_min: 0, x_max: 364, ha: 467, o: "m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 " }, δ: { x_min: 1, x_max: 710, ha: 810, o: "m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 " }, έ: { x_min: 0, x_max: 634.71875, ha: 714, o: "m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 " }, ω: { x_min: 0, x_max: 922, ha: 1031, o: "m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 " }, "´": { x_min: 0, x_max: 96, ha: 251, o: "m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 " }, "±": { x_min: 11, x_max: 781, ha: 792, o: "m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 " }, "|": { x_min: 343, x_max: 449, ha: 792, o: "m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 " }, ϋ: { x_min: 0, x_max: 617, ha: 725, o: "m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 " }, "§": { x_min: 0, x_max: 593, ha: 690, o: "m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 " }, b: { x_min: 0, x_max: 685, ha: 783, o: "m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 " }, q: { x_min: 0, x_max: 683, ha: 876, o: "m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 " }, Ω: { x_min: -0.171875, x_max: 969.5625, ha: 1068, o: "m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 " }, ύ: { x_min: 0, x_max: 617, ha: 725, o: "m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 " }, z: { x_min: -0.015625, x_max: 613.890625, ha: 697, o: "m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 " }, "™": { x_min: 0, x_max: 894, ha: 1e3, o: "m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 " }, ή: { x_min: 0.78125, x_max: 697, ha: 810, o: "m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 " }, Θ: { x_min: 0, x_max: 960, ha: 1056, o: "m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 " }, "®": { x_min: -3, x_max: 1008, ha: 1106, o: "m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 " }, "~": { x_min: 0, x_max: 833, ha: 931, o: "m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 " }, Ε: { x_min: 0, x_max: 736.21875, ha: 778, o: "m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 " }, "³": { x_min: 0, x_max: 450, ha: 547, o: "m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 " }, "[": { x_min: 0, x_max: 273.609375, ha: 371, o: "m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 " }, L: { x_min: 0, x_max: 645.828125, ha: 696, o: "m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 " }, σ: { x_min: 0, x_max: 803.390625, ha: 894, o: "m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 " }, ζ: { x_min: 0, x_max: 573, ha: 642, o: "m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 " }, θ: { x_min: 0, x_max: 674, ha: 778, o: "m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 " }, Ο: { x_min: 0, x_max: 958, ha: 1054, o: "m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 " }, Γ: { x_min: 0, x_max: 705.28125, ha: 749, o: "m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 " }, " ": { x_min: 0, x_max: 0, ha: 375 }, "%": { x_min: -3, x_max: 1089, ha: 1186, o: "m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 " }, P: { x_min: 0, x_max: 726, ha: 806, o: "m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 " }, Έ: { x_min: 0, x_max: 1078.21875, ha: 1118, o: "m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, Ώ: { x_min: 0.125, x_max: 1136.546875, ha: 1235, o: "m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 " }, _: { x_min: 0, x_max: 705.5625, ha: 803, o: "m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 " }, Ϊ: { x_min: -110, x_max: 246, ha: 275, o: "m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 " }, "+": { x_min: 23, x_max: 768, ha: 792, o: "m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 " }, "½": { x_min: 0, x_max: 1050, ha: 1149, o: "m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 " }, Ρ: { x_min: 0, x_max: 720, ha: 783, o: "m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 " }, "'": { x_min: 0, x_max: 139, ha: 236, o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 " }, ª: { x_min: 0, x_max: 350, ha: 397, o: "m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 " }, "΅": { x_min: 0, x_max: 450, ha: 553, o: "m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 " }, T: { x_min: 0, x_max: 777, ha: 835, o: "m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 " }, Φ: { x_min: 0, x_max: 915, ha: 997, o: "m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 " }, "⁋": { x_min: 0, x_max: 0, ha: 694 }, j: { x_min: -77.78125, x_max: 167, ha: 349, o: "m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 " }, Σ: { x_min: 0, x_max: 756.953125, ha: 819, o: "m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 " }, 1: { x_min: 215.671875, x_max: 574, ha: 792, o: "m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 " }, "›": { x_min: 18.0625, x_max: 774, ha: 792, o: "m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 " }, "<": { x_min: 17.984375, x_max: 773.609375, ha: 792, o: "m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 " }, "£": { x_min: 0, x_max: 704.484375, ha: 801, o: "m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 " }, t: { x_min: 0, x_max: 367, ha: 458, o: "m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 " }, "¬": { x_min: 0, x_max: 706, ha: 803, o: "m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 " }, λ: { x_min: 0, x_max: 750, ha: 803, o: "m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 " }, W: { x_min: 0, x_max: 1263.890625, ha: 1351, o: "m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 " }, ">": { x_min: 18.0625, x_max: 774, ha: 792, o: "m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 " }, v: { x_min: 0, x_max: 675.15625, ha: 761, o: "m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 " }, τ: { x_min: 0.28125, x_max: 644.5, ha: 703, o: "m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 " }, ξ: { x_min: 0, x_max: 624.9375, ha: 699, o: "m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 " }, "&": { x_min: -3, x_max: 894.25, ha: 992, o: "m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 " }, Λ: { x_min: 0, x_max: 862.5, ha: 942, o: "m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 " }, I: { x_min: 41, x_max: 180, ha: 293, o: "m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 " }, G: { x_min: 0, x_max: 921, ha: 1011, o: "m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 " }, ΰ: { x_min: 0, x_max: 617, ha: 725, o: "m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 " }, "`": { x_min: 0, x_max: 138.890625, ha: 236, o: "m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 " }, "·": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 " }, Υ: { x_min: 0.328125, x_max: 819.515625, ha: 889, o: "m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 " }, r: { x_min: 0, x_max: 355.5625, ha: 432, o: "m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 " }, x: { x_min: 0, x_max: 675, ha: 764, o: "m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 " }, μ: { x_min: 0, x_max: 696.609375, ha: 747, o: "m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 " }, h: { x_min: 0, x_max: 615, ha: 724, o: "m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 " }, ".": { x_min: 0, x_max: 142, ha: 239, o: "m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 " }, φ: { x_min: -2, x_max: 878, ha: 974, o: "m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 " }, ";": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 " }, f: { x_min: 0, x_max: 378, ha: 472, o: "m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 " }, "“": { x_min: 1, x_max: 348.21875, ha: 454, o: "m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 " }, A: { x_min: 0.03125, x_max: 906.953125, ha: 1008, o: "m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 " }, 6: { x_min: 53, x_max: 739, ha: 792, o: "m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 " }, "‘": { x_min: 1, x_max: 139.890625, ha: 236, o: "m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 " }, ϊ: { x_min: -70, x_max: 283, ha: 361, o: "m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 " }, π: { x_min: -0.21875, x_max: 773.21875, ha: 857, o: "m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 " }, ά: { x_min: 0, x_max: 765.5625, ha: 809, o: "m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 " }, O: { x_min: 0, x_max: 958, ha: 1057, o: "m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 " }, n: { x_min: 0, x_max: 615, ha: 724, o: "m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 " }, 3: { x_min: 54, x_max: 737, ha: 792, o: "m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 " }, 9: { x_min: 53, x_max: 739, ha: 792, o: "m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 " }, l: { x_min: 41, x_max: 166, ha: 279, o: "m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 " }, "¤": { x_min: 40.09375, x_max: 728.796875, ha: 825, o: "m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 " }, κ: { x_min: 0, x_max: 632.328125, ha: 679, o: "m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 " }, 4: { x_min: 48, x_max: 742.453125, ha: 792, o: "m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 " }, p: { x_min: 0, x_max: 685, ha: 786, o: "m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 " }, "‡": { x_min: 0, x_max: 777, ha: 835, o: "m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 " }, ψ: { x_min: 0, x_max: 808, ha: 907, o: "m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 " }, η: { x_min: 0.78125, x_max: 697, ha: 810, o: "m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 " } }, cssFontWeight: "normal", ascender: 1189, underlinePosition: -100, cssFontStyle: "normal", boundingBox: { yMin: -334, xMin: -111, yMax: 1189, xMax: 1672 }, resolution: 1e3, original_font_information: { postscript_name: "Helvetiker-Regular", version_string: "Version 1.00 2004 initial release", vendor_url: "http://www.magenta.gr/", full_font_name: "Helvetiker", font_family_name: "Helvetiker", copyright: "Copyright (c) Μagenta ltd, 2004", description: "", trademark: "", designer: "", designer_url: "", unique_font_identifier: "Μagenta ltd:Helvetiker:22-10-104", license_url: "http://www.ellak.gr/fonts/MgOpen/license.html", license_description: `Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`, manufacturer_name: "Μagenta ltd", font_sub_family_name: "Regular" }, descender: -334, familyName: "Helvetiker", lineHeight: 1522, underlineThickness: 50 }, lo = { type: "change" }, $r = { type: "start" }, co = { type: "end" };
class rm extends Pn {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: Rn.ROTATE, MIDDLE: Rn.DOLLY, RIGHT: Rn.PAN }, this.touches = { ONE: Cn.ROTATE, TWO: Cn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(P) {
      P.addEventListener("keydown", qe), this._domElementKeyEvents = P;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", qe), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(lo), n.update(), s = r.NONE;
    }, this.update = function() {
      const P = new R(), J = new Tn().setFromUnitVectors(e.up, new R(0, 1, 0)), B = J.clone().invert(), me = new R(), Me = new Tn(), be = 2 * Math.PI;
      return function() {
        const ye = n.object.position;
        P.copy(ye).sub(n.target), P.applyQuaternion(J), a.setFromVector3(P), n.autoRotate && s === r.NONE && v(q()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let De = n.minAzimuthAngle, Oe = n.maxAzimuthAngle;
        return isFinite(De) && isFinite(Oe) && (De < -Math.PI ? De += be : De > Math.PI && (De -= be), Oe < -Math.PI ? Oe += be : Oe > Math.PI && (Oe -= be), De <= Oe ? a.theta = Math.max(De, Math.min(Oe, a.theta)) : a.theta = a.theta > (De + Oe) / 2 ? Math.max(De, a.theta) : Math.min(Oe, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(u, n.dampingFactor) : n.target.add(u), P.setFromSpherical(a), P.applyQuaternion(B), ye.copy(n.target).add(P), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, u.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), u.set(0, 0, 0)), l = 1, d || me.distanceToSquared(n.object.position) > o || 8 * (1 - Me.dot(n.object.quaternion)) > o ? (n.dispatchEvent(lo), me.copy(n.object.position), Me.copy(n.object.quaternion), d = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", M), n.domElement.removeEventListener("pointerdown", Q), n.domElement.removeEventListener("pointercancel", oe), n.domElement.removeEventListener("wheel", Ee), n.domElement.removeEventListener("pointermove", ge), n.domElement.removeEventListener("pointerup", oe), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", qe), n._domElementKeyEvents = null);
    };
    const n = this, r = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    let s = r.NONE;
    const o = 1e-6, a = new ao(), c = new ao();
    let l = 1;
    const u = new R();
    let d = !1;
    const f = new ue(), p = new ue(), _ = new ue(), g = new ue(), m = new ue(), h = new ue(), S = new ue(), x = new ue(), b = new ue(), y = [], w = {};
    function q() {
      return 2 * Math.PI / 60 / 60 * n.autoRotateSpeed;
    }
    function N() {
      return Math.pow(0.95, n.zoomSpeed);
    }
    function v(P) {
      c.theta -= P;
    }
    function A(P) {
      c.phi -= P;
    }
    const H = function() {
      const P = new R();
      return function(B, me) {
        P.setFromMatrixColumn(me, 0), P.multiplyScalar(-B), u.add(P);
      };
    }(), ne = function() {
      const P = new R();
      return function(B, me) {
        n.screenSpacePanning === !0 ? P.setFromMatrixColumn(me, 1) : (P.setFromMatrixColumn(me, 0), P.crossVectors(n.object.up, P)), P.multiplyScalar(B), u.add(P);
      };
    }(), D = function() {
      const P = new R();
      return function(B, me) {
        const Me = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const be = n.object.position;
          P.copy(be).sub(n.target);
          let xe = P.length();
          xe *= Math.tan(n.object.fov / 2 * Math.PI / 180), H(2 * B * xe / Me.clientHeight, n.object.matrix), ne(2 * me * xe / Me.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (H(B * (n.object.right - n.object.left) / n.object.zoom / Me.clientWidth, n.object.matrix), ne(me * (n.object.top - n.object.bottom) / n.object.zoom / Me.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function O(P) {
      n.object.isPerspectiveCamera ? l /= P : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * P)), n.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function G(P) {
      n.object.isPerspectiveCamera ? l *= P : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / P)), n.object.updateProjectionMatrix(), d = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function te(P) {
      f.set(P.clientX, P.clientY);
    }
    function Z(P) {
      S.set(P.clientX, P.clientY);
    }
    function V(P) {
      g.set(P.clientX, P.clientY);
    }
    function K(P) {
      p.set(P.clientX, P.clientY), _.subVectors(p, f).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      v(2 * Math.PI * _.x / J.clientHeight), A(2 * Math.PI * _.y / J.clientHeight), f.copy(p), n.update();
    }
    function $(P) {
      x.set(P.clientX, P.clientY), b.subVectors(x, S), b.y > 0 ? O(N()) : b.y < 0 && G(N()), S.copy(x), n.update();
    }
    function ce(P) {
      m.set(P.clientX, P.clientY), h.subVectors(m, g).multiplyScalar(n.panSpeed), D(h.x, h.y), g.copy(m), n.update();
    }
    function pe(P) {
      P.deltaY < 0 ? G(N()) : P.deltaY > 0 && O(N()), n.update();
    }
    function z(P) {
      let J = !1;
      switch (P.code) {
        case n.keys.UP:
          P.ctrlKey || P.metaKey || P.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(0, n.keyPanSpeed), J = !0;
          break;
        case n.keys.BOTTOM:
          P.ctrlKey || P.metaKey || P.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(0, -n.keyPanSpeed), J = !0;
          break;
        case n.keys.LEFT:
          P.ctrlKey || P.metaKey || P.shiftKey ? v(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(n.keyPanSpeed, 0), J = !0;
          break;
        case n.keys.RIGHT:
          P.ctrlKey || P.metaKey || P.shiftKey ? v(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : D(-n.keyPanSpeed, 0), J = !0;
          break;
      }
      J && (P.preventDefault(), n.update());
    }
    function j() {
      if (y.length === 1)
        f.set(y[0].pageX, y[0].pageY);
      else {
        const P = 0.5 * (y[0].pageX + y[1].pageX), J = 0.5 * (y[0].pageY + y[1].pageY);
        f.set(P, J);
      }
    }
    function le() {
      if (y.length === 1)
        g.set(y[0].pageX, y[0].pageY);
      else {
        const P = 0.5 * (y[0].pageX + y[1].pageX), J = 0.5 * (y[0].pageY + y[1].pageY);
        g.set(P, J);
      }
    }
    function _e() {
      const P = y[0].pageX - y[1].pageX, J = y[0].pageY - y[1].pageY, B = Math.sqrt(P * P + J * J);
      S.set(0, B);
    }
    function C() {
      n.enableZoom && _e(), n.enablePan && le();
    }
    function Te() {
      n.enableZoom && _e(), n.enableRotate && j();
    }
    function Ce(P) {
      if (y.length == 1)
        p.set(P.pageX, P.pageY);
      else {
        const B = de(P), me = 0.5 * (P.pageX + B.x), Me = 0.5 * (P.pageY + B.y);
        p.set(me, Me);
      }
      _.subVectors(p, f).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      v(2 * Math.PI * _.x / J.clientHeight), A(2 * Math.PI * _.y / J.clientHeight), f.copy(p);
    }
    function ae(P) {
      if (y.length === 1)
        m.set(P.pageX, P.pageY);
      else {
        const J = de(P), B = 0.5 * (P.pageX + J.x), me = 0.5 * (P.pageY + J.y);
        m.set(B, me);
      }
      h.subVectors(m, g).multiplyScalar(n.panSpeed), D(h.x, h.y), g.copy(m);
    }
    function Se(P) {
      const J = de(P), B = P.pageX - J.x, me = P.pageY - J.y, Me = Math.sqrt(B * B + me * me);
      x.set(0, Me), b.set(0, Math.pow(x.y / S.y, n.zoomSpeed)), O(b.y), S.copy(x);
    }
    function ee(P) {
      n.enableZoom && Se(P), n.enablePan && ae(P);
    }
    function k(P) {
      n.enableZoom && Se(P), n.enableRotate && Ce(P);
    }
    function Q(P) {
      n.enabled !== !1 && (y.length === 0 && (n.domElement.setPointerCapture(P.pointerId), n.domElement.addEventListener("pointermove", ge), n.domElement.addEventListener("pointerup", oe)), F(P), P.pointerType === "touch" ? he(P) : we(P));
    }
    function ge(P) {
      n.enabled !== !1 && (P.pointerType === "touch" ? T(P) : Pe(P));
    }
    function oe(P) {
      ie(P), y.length === 0 && (n.domElement.releasePointerCapture(P.pointerId), n.domElement.removeEventListener("pointermove", ge), n.domElement.removeEventListener("pointerup", oe)), n.dispatchEvent(co), s = r.NONE;
    }
    function we(P) {
      let J;
      switch (P.button) {
        case 0:
          J = n.mouseButtons.LEFT;
          break;
        case 1:
          J = n.mouseButtons.MIDDLE;
          break;
        case 2:
          J = n.mouseButtons.RIGHT;
          break;
        default:
          J = -1;
      }
      switch (J) {
        case Rn.DOLLY:
          if (n.enableZoom === !1)
            return;
          Z(P), s = r.DOLLY;
          break;
        case Rn.ROTATE:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enablePan === !1)
              return;
            V(P), s = r.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            te(P), s = r.ROTATE;
          }
          break;
        case Rn.PAN:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enableRotate === !1)
              return;
            te(P), s = r.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            V(P), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent($r);
    }
    function Pe(P) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1)
            return;
          K(P);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1)
            return;
          $(P);
          break;
        case r.PAN:
          if (n.enablePan === !1)
            return;
          ce(P);
          break;
      }
    }
    function Ee(P) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (P.preventDefault(), n.dispatchEvent($r), pe(P), n.dispatchEvent(co));
    }
    function qe(P) {
      n.enabled === !1 || n.enablePan === !1 || z(P);
    }
    function he(P) {
      switch (re(P), y.length) {
        case 1:
          switch (n.touches.ONE) {
            case Cn.ROTATE:
              if (n.enableRotate === !1)
                return;
              j(), s = r.TOUCH_ROTATE;
              break;
            case Cn.PAN:
              if (n.enablePan === !1)
                return;
              le(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Cn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              C(), s = r.TOUCH_DOLLY_PAN;
              break;
            case Cn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              Te(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent($r);
    }
    function T(P) {
      switch (re(P), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Ce(P), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          ae(P), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          ee(P), n.update();
          break;
        case r.TOUCH_DOLLY_ROTATE:
          if (n.enableZoom === !1 && n.enableRotate === !1)
            return;
          k(P), n.update();
          break;
        default:
          s = r.NONE;
      }
    }
    function M(P) {
      n.enabled !== !1 && P.preventDefault();
    }
    function F(P) {
      y.push(P);
    }
    function ie(P) {
      delete w[P.pointerId];
      for (let J = 0; J < y.length; J++)
        if (y[J].pointerId == P.pointerId) {
          y.splice(J, 1);
          return;
        }
    }
    function re(P) {
      let J = w[P.pointerId];
      J === void 0 && (J = new ue(), w[P.pointerId] = J), J.set(P.pageX, P.pageY);
    }
    function de(P) {
      const J = P.pointerId === y[0].pointerId ? y[1] : y[0];
      return w[J.pointerId];
    }
    n.domElement.addEventListener("contextmenu", M), n.domElement.addEventListener("pointerdown", Q), n.domElement.addEventListener("pointercancel", oe), n.domElement.addEventListener("wheel", Ee, { passive: !1 }), this.update();
  }
}
const nl = 6e5;
let Tt, bt, Mi, Si, hs, ei = 0, ti = 0, ds = 1, fs = 1, il = [];
function er() {
  return Tt;
}
function tr() {
  return bt;
}
function sm() {
  return il.join(`
`);
}
function am() {
  bt && bt.dispose(), Mi && Mi.material && Mi.material.dispose(), bt = new St(), bt.name = "travel_geom", ei = 0, bt.setAttribute(
    "position",
    new st(nl, 3)
  ), bt.attributes.position.usage = Po, bt.setDrawRange(0, 0);
}
function om() {
  Tt && Tt.dispose(), Si && Si.material && Si.material.dispose(), Tt = new St(), Tt.name = "extrude_geom", ti = 0, Tt.setAttribute(
    "position",
    new st(nl, 3)
  ), Tt.attributes.position.usage = Po, Tt.setDrawRange(0, 0);
}
function lm(i, e) {
  if (i <= 0 || e <= 0) {
    console.warn(`Invalid dimensions for geometry resize: ${i}x${e}`);
    return;
  }
  const t = i / ds, n = e / fs;
  if (bt && ei > 0) {
    const r = bt.attributes.position;
    for (let s = 0; s < ei; s++) {
      const o = r.getX(s) * t, a = r.getY(s) * n, c = r.getZ(s);
      r.setXYZ(s, o, a, c);
    }
    r.needsUpdate = !0, bt.computeBoundingSphere();
  }
  if (Tt && ti > 0) {
    const r = Tt.attributes.position;
    for (let s = 0; s < ti; s++) {
      const o = r.getX(s) * t, a = r.getY(s) * n, c = r.getZ(s);
      r.setXYZ(s, o, a, c);
    }
    r.needsUpdate = !0, Tt.computeBoundingSphere();
  }
  ds = i, fs = e;
}
function cm(i, e) {
  ds = i, fs = e;
}
function uo({ color: i, opacity: e } = { color: 15352968, opacity: 0.8 }) {
  am();
  const t = new cr({
    vertexColors: !1,
    color: i,
    opacity: e,
    transparent: !0,
    name: "travel",
    linewidth: 5,
    // in world units with size attenuation, pixels otherwise
    //resolution:  // to be set by renderer, eventually
    alphaToCoverage: !0
  });
  return Mi = new Ss(bt, t), Mi;
}
function ho({ color: i, opacity: e } = { color: 4491498, opacity: 0.7 }) {
  om();
  const t = new cr({
    vertexColors: !1,
    color: i,
    opacity: e,
    transparent: !0,
    name: "extrude",
    linewidth: 5,
    // in world units with size attenuation, pixels otherwise
    //resolution:  // to be set by renderer, eventually
    fog: !1,
    dashed: !1,
    alphaToCoverage: !0
    // depthWrite: false,
    //  depthTest: false,
    // side: DoubleSide
  });
  return Si = new Ss(Tt, t), Si;
}
function um({ radius: i, color: e } = { radius: 2, color: 16777045 }) {
  const t = new As(i, 16, 12), n = new gs({ color: e });
  return hs = new Pt(t, n), hs;
}
async function fo(i) {
  if (Number.isNaN(i))
    throw new Error(
      `Bad non-numeric argument to delay for visualiser: ${JSON.stringify(i)}`
    );
  return i > 0 && await new Promise((e) => setTimeout(e, Math.round(i))), 0;
}
function hm({ x: i, y: e, z: t, delay: n, debug: r, extrudeGeometry: s, travelGeometry: o } = { delay: !1, debug: !1 }) {
  let a = n, c = r;
  return {
    set delay(l) {
      a = l;
    },
    get delay() {
      return a;
    },
    set debug(l) {
      c = l;
    },
    get debug() {
      return c;
    },
    async printEvent({
      type: l,
      newPosition: u,
      oldPosition: d,
      speed: f,
      moveTime: p,
      time: _,
      totalMoveTime: g,
      layerHeight: m,
      length: h
    }) {
      switch (c && console.log(
        `PRINT EVENT: ${l},
          old: ${JSON.stringify(d)},
          new: ${JSON.stringify(u)},
          speed: ${f},
          moveTime: ${p},
          totalMoveTime: ${g},
          layerHeight: ${m},
          length: ${h}`
      ), l) {
        case "extrude":
          {
            if (!er())
              return;
            const S = er().attributes.position;
            S.setXYZ(
              ti++,
              i(d.x),
              e(d.y),
              t(d.z)
            ), S.setXYZ(
              ti++,
              i(u.x),
              e(u.y),
              t(u.z)
            ), er().setDrawRange(0, ti - 1), S.needsUpdate = !0, er().computeBoundingSphere(), hs.position.set(
              i(u.x),
              e(u.y),
              t(u.z)
            );
          }
          break;
        case "travel":
          {
            if (!tr())
              return;
            const S = tr().attributes.position;
            S.setXYZ(
              ei++,
              i(d.x),
              e(d.y),
              t(d.z)
            ), S.setXYZ(
              ei++,
              i(u.x),
              e(u.y),
              t(u.z)
            ), tr().setDrawRange(0, ei - 1), S.needsUpdate = !0, tr().computeBoundingSphere();
          }
          break;
        case "retract":
          c && console.log("RETRACT!");
          break;
        case "unretract":
          c && console.log("UNRETRACT!");
          break;
      }
      a && (Number.isFinite(a) ? await fo(a) : await fo(p || _));
    },
    errorEvent: (l) => console.error(`LivePrinter Error Event: ${l}`),
    gcodeEvent: async (l) => {
      il.push(l);
    }
    // wait 20 ms
  };
}
var dm = Object.defineProperty, fm = (i, e, t) => e in i ? dm(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, po = (i, e, t) => fm(i, typeof e != "symbol" ? e + "" : e, t);
class mo {
  // default
  static debug(e) {
  }
  static info(e) {
  }
  static warning(e) {
  }
  static error(e) {
    console.error(e);
  }
}
po(mo, "LOG_LEVEL", {
  error: 0,
  warning: 1,
  info: 2,
  debug: 3
}), po(mo, "level", 0);
String.prototype.reverse = function() {
  const i = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g, e = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
  let t = this.replace(i, function(s, o, a) {
    return a.reverse() + o;
  }).replace(e, "$2$1"), n = "", r = t.length;
  for (; r--; )
    n += t.charAt(r);
  return n;
};
var _o = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" "), rl = function(i) {
  return typeof i != "string" ? _o.slice() : _o.filter(function(e) {
    var t = e[1] || " ";
    return i.indexOf(t) !== -1;
  });
};
rl(" #");
rl(" b");
var pm = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function mm(i) {
  typeof i != "string" && (i = "");
  var e = pm.exec(i);
  return [e[1].toUpperCase(), e[2].replace(/x/g, "##"), e[3], e[4]];
}
var _m = Object.freeze({
  pc: null,
  name: null,
  step: null,
  alt: null,
  oct: null,
  octStr: null,
  chroma: null,
  midi: null,
  freq: null
}), go = [0, 2, 4, 5, 7, 9, 11], gm = function(i) {
  var e = mm(i);
  if (e[0] === "" || e[3] !== "")
    return _m;
  var t = e[0], n = e[1], r = e[2], s = {
    letter: t,
    acc: n,
    octStr: r,
    pc: t + n,
    name: t + n + r,
    step: (t.charCodeAt(0) + 3) % 7,
    alt: n[0] === "b" ? -n.length : n.length,
    oct: r.length ? +r : null,
    chroma: 0,
    midi: null,
    freq: null
  };
  return s.chroma = (go[s.step] + s.alt + 120) % 12, s.midi = s.oct !== null ? go[s.step] + s.alt + 12 * (s.oct + 1) : null, s.freq = Mm(s.midi), Object.freeze(s);
}, xm = function(i, e) {
  return e === void 0 && (e = {}), function(t) {
    return e[t] || (e[t] = i(t));
  };
}, vm = xm(gm), Mm = function(i, e) {
  return e === void 0 && (e = 440), typeof i == "number" ? Math.pow(2, (i - 69) / 12) * e : null;
}, Sm = function(i) {
  return vm(i).chroma;
}, Em = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})", ym = "(AA|A|P|M|m|d|dd)([-+]?\\d+)", Tm = new RegExp("^" + Em + "|" + ym + "$"), xo = [0, 2, 4, 5, 7, 9, 11], bm = "PMMPPMM", Am = function(i) {
  var e = Tm.exec("" + i);
  return e === null ? null : e[1] ? [e[1], e[2]] : [e[4], e[3]];
}, ps = Object.freeze({
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
}), wm = function(i, e) {
  return e === "M" && i === "M" || e === "P" && i === "P" ? 0 : e === "m" && i === "M" ? -1 : /^A+$/.test(e) ? e.length : /^d+$/.test(e) ? i === "P" ? -e.length : -e.length - 1 : null;
}, Pm = function(i) {
  return (Math.abs(i) - 1) % 7;
}, Rm = function(i) {
  var e = Am(i);
  if (e === null)
    return ps;
  var t = {
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
  return t.num = +e[0], t.q = e[1], t.step = Pm(t.num), t.type = bm[t.step], t.type === "M" && t.q === "P" ? ps : (t.name = "" + t.num + t.q, t.dir = t.num < 0 ? -1 : 1, t.simple = t.num === 8 || t.num === -8 ? t.num : t.dir * (t.step + 1), t.alt = wm(t.type, t.q), t.oct = Math.floor((Math.abs(t.num) - 1) / 7), t.semitones = t.dir * (xo[t.step] + t.alt + 12 * t.oct), t.chroma = (t.dir * (xo[t.step] + t.alt) % 12 + 12) % 12, Object.freeze(t));
}, vo = {};
function Cm(i) {
  return typeof i != "string" ? ps : vo[i] || (vo[i] = Rm(i));
}
var Lm = function(i) {
  return Cm(i).chroma;
};
const qm = ["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"], Dm = ["1P 2M 3M 4A 5P 6M 7M"], Um = ["1P 2M 3M 4P 5P 6M 7M", ["ionian"]], Im = ["1P 2M 3M 4P 5P 6M 7m", ["dominant"]], Nm = ["1P 2M 3m 4P 5P 6M 7m"], Fm = ["1P 2M 3m 4P 5P 6m 7m", ["minor"]], Om = ["1P 2m 3m 4P 5P 6m 7m"], Bm = ["1P 2m 3m 4P 5d 6m 7m"], zm = ["1P 2m 3m 3M 5d 6m 7m", ["super locrian", "diminished whole tone", "pomeroy"]], Gm = ["1P 2M 3m 4P 5d 6m 6M 7M", ["whole-half diminished"]], Hm = ["1P 2m 4P 5d 7m"], Vm = ["1P 2M 3m 5P 6m"], km = ["1P 2m 4P 5P 6m"], Wm = ["1P 2m 3m 5P 6m"], Xm = ["1P 2M 3M 4A 6M 7m"], Ym = ["1P 2M 4P 5P 6M"], jm = ["1P 2m 3M 5P 6M"], Zm = ["1P 2M 4P 5P 6M 7m"], Km = ["1P 2A 3M 5P 5A 7M"], Jm = ["1P 2m 3m 4P 5P 6m 7M"], $m = ["1P 2M 4P 5P 7m"], Qm = ["1P 2m 3M 4P 5d 6M 7m"], e0 = ["1P 2m 3m 3M 4A 5P 7m"], t0 = ["1P 2m 3m 4P 5P 6m 7M"], n0 = ["1P 2m 3M 4P 5d 6m 7M"], i0 = ["1P 2M 3M 4P 5P 6M 7m 7M"], r0 = ["1P 2m 3M 5d 6m 7m 7M"], s0 = ["1P 2M 3M 4P 5d 5P 6M 7M"], a0 = {
  chromatic: qm,
  lydian: Dm,
  major: Um,
  mixolydian: Im,
  dorian: Nm,
  aeolian: Fm,
  phrygian: Om,
  locrian: Bm,
  "melodic minor": ["1P 2M 3m 4P 5P 6M 7M"],
  "melodic minor second mode": ["1P 2m 3m 4P 5P 6M 7m"],
  "lydian augmented": ["1P 2M 3M 4A 5A 6M 7M"],
  "lydian dominant": ["1P 2M 3M 4A 5P 6M 7m", ["lydian b7"]],
  "melodic minor fifth mode": ["1P 2M 3M 4P 5P 6m 7m", ["hindu", "mixolydian b6M"]],
  "locrian #2": ["1P 2M 3m 4P 5d 6m 7m", ["half-diminished"]],
  altered: zm,
  "harmonic minor": ["1P 2M 3m 4P 5P 6m 7M"],
  "phrygian dominant": ["1P 2m 3M 4P 5P 6m 7m", ["spanish", "phrygian major"]],
  "half-whole diminished": ["1P 2m 3m 3M 4A 5P 6M 7m", ["dominant diminished"]],
  diminished: Gm,
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
  iwato: Hm,
  hirajoshi: Vm,
  kumoijoshi: km,
  pelog: Wm,
  "vietnamese 1": ["1P 3m 4P 5P 6m"],
  "vietnamese 2": ["1P 3m 4P 5P 7m"],
  prometheus: Xm,
  "prometheus neopolitan": ["1P 2m 3M 4A 6M 7m"],
  ritusen: Ym,
  scriabin: jm,
  piongio: Zm,
  "major blues": ["1P 2M 3m 3M 5P 6M"],
  "minor blues": ["1P 3m 4P 5d 5P 7m", ["blues"]],
  "composite blues": ["1P 2M 3m 3M 4P 5d 5P 6M 7m"],
  augmented: Km,
  "augmented heptatonic": ["1P 2A 3M 4P 5P 5A 7M"],
  "dorian #4": ["1P 2M 3m 4A 5P 6M 7m"],
  "lydian diminished": ["1P 2M 3m 4A 5P 6M 7M"],
  "whole tone": ["1P 2M 3M 4A 5A 7m"],
  "leading whole tone": ["1P 2M 3M 4A 5A 7m 7M"],
  "lydian minor": ["1P 2M 3M 4A 5P 6m 7m"],
  "locrian major": ["1P 2M 3M 4P 5d 6m 7m", ["arabian"]],
  neopolitan: Jm,
  "neopolitan minor": ["1P 2m 3m 4P 5P 6m 7M"],
  "neopolitan major": ["1P 2m 3m 4P 5P 6M 7M", ["dorian b2"]],
  "neopolitan major pentatonic": ["1P 3M 4P 5d 7m"],
  "romanian minor": ["1P 2M 3m 5d 5P 6M 7m"],
  "double harmonic lydian": ["1P 2m 3M 4A 5P 6m 7M"],
  "harmonic major": ["1P 2M 3M 4P 5P 6m 7M"],
  "double harmonic major": ["1P 2m 3M 4P 5P 6m 7M", ["gypsy"]],
  egyptian: $m,
  "hungarian minor": ["1P 2M 3m 4A 5P 6m 7M"],
  "hungarian major": ["1P 2A 3M 4A 5P 6M 7m"],
  oriental: Qm,
  "spanish heptatonic": ["1P 2m 3m 3M 4P 5P 6m 7m"],
  flamenco: e0,
  balinese: t0,
  "todi raga": ["1P 2m 3m 4A 5P 6m 7M"],
  "malkos raga": ["1P 3m 4P 6m 7m"],
  "kafi raga": ["1P 3m 3M 4P 5P 6M 7m 7M"],
  "purvi raga": ["1P 2m 3M 4P 4A 5P 6m 7M"],
  persian: n0,
  bebop: i0,
  "bebop dominant": ["1P 2M 3M 4P 5P 6M 7m 7M"],
  "bebop minor": ["1P 2M 3m 3M 4P 5P 6M 7m"],
  "bebop major": ["1P 2M 3M 4P 5P 5A 6M 7M"],
  "bebop locrian": ["1P 2m 3m 4P 5d 5P 6m 7m"],
  "minor bebop": ["1P 2M 3m 4P 5P 6m 7m 7M"],
  "mystery #1": ["1P 2m 3M 5d 6m 7m"],
  enigmatic: r0,
  "minor six diminished": ["1P 2M 3m 4P 5P 6m 6M 7M"],
  "ionian augmented": ["1P 2M 3M 4P 5A 6M 7M"],
  "lydian #9": ["1P 2m 3M 4A 5P 6M 7M"],
  ichikosucho: s0,
  "six tone symmetric": ["1P 2m 3M 4P 5A 6M"]
}, o0 = ["1P 3M 5P", ["Major", ""]], l0 = ["1P 3M 5P 7M 9M 13M", ["maj13", "Maj13"]], c0 = ["1P 3M 5P 13M", ["6"]], u0 = ["1P 3M 5P 6M 9M", ["69"]], h0 = ["1P 3M 5P 6M 7M 9M"], d0 = ["1P 3M 5d 7M"], f0 = ["1P 3M 6m 7M"], p0 = ["1P 3M 5P 7M 9m"], m0 = ["1P 4P 5P 7M"], _0 = ["1P 3M 5P 7M 9M", ["maj9", "Maj9"]], g0 = ["1P 3M 5d 7M 9M"], x0 = ["1P 4P 5P 7M 9M"], v0 = ["1P 3M 5P 9M", ["2", "add9", "add2"]], M0 = ["1P 3M 5P 7M", ["maj7", "M7"]], S0 = ["1P 3M 5d"], E0 = ["1P 3M 13m"], y0 = ["1P 2M 5P", ["add9no3", "sus2"]], T0 = ["1P 4P 5P", ["sus", "sus4"]], b0 = ["1P 3M 5P 9m"], A0 = ["1P 3m 5P"], w0 = ["1P 3m 5P 7m 9M 11P", ["_11"]], P0 = ["1P 3m 7m 12d 2M 4P", ["h11", "_11b5"]], R0 = ["1P 3m 5P 7m 9M 11P 13M", ["_13"]], C0 = ["1P 3m 4P 5P 13M", ["_6"]], L0 = ["1P 3m 5P 6M 9M", ["_69"]], q0 = ["1P 3m 5P 7m", ["minor7", "_", "_7"]], D0 = ["1P 3m 5P 7m 11P", ["m7add4"]], U0 = ["1P 3m 5d 7m", ["half-diminished", "h7", "_7b5"]], I0 = ["1P 3m 5P 7m 9M", ["_9"]], N0 = ["1P 3m 7m 12d 2M", ["h9", "-9b5"]], F0 = ["1P 3m 5P 7M", ["mM7", "_M7"]], O0 = ["1P 3m 5P 6m 7M", ["mM7b6"]], B0 = ["1P 3m 5P 7M 9M", ["mMaj9", "-M9"]], z0 = ["1P 3m 5P 6m 7M 9M", ["mMaj9b6"]], G0 = ["1P 3m 6m 7M"], H0 = ["1P 3m 6m 9m"], V0 = ["1P 3m 5d", ["mb5", "dim"]], k0 = ["1P 3m 5d 13M", ["diminished", "m6b5", "dim7"]], W0 = ["1P 3m 5d 6M 7M"], X0 = ["1P 3m 5d 7M"], Y0 = ["1P 2M 4P 5P", ["sus4add9"]], j0 = ["1P 3m 4P 5P"], Z0 = ["1P 3m 5P 9M"], K0 = {
  4: ["1P 4P 7m 10m", ["quartal"]],
  5: ["1P 5P"],
  7: ["1P 3M 5P 7m", ["Dominant", "Dom"]],
  9: ["1P 3M 5P 7m 9M", ["79"]],
  11: ["1P 5P 7m 9M 11P"],
  13: ["1P 3M 5P 7m 9M 13M", ["13_"]],
  64: ["5P 8P 10M"],
  M: o0,
  "M#5": ["1P 3M 5A", ["augmented", "maj#5", "Maj#5", "+", "aug"]],
  "M#5add9": ["1P 3M 5A 9M", ["+add9"]],
  M13: l0,
  "M13#11": ["1P 3M 5P 7M 9M 11A 13M", ["maj13#11", "Maj13#11", "M13+4", "M13#4"]],
  M6: c0,
  "M6#11": ["1P 3M 5P 6M 11A", ["M6b5", "6#11", "6b5"]],
  M69: u0,
  "M69#11": ["1P 3M 5P 6M 9M 11A"],
  "M7#11": ["1P 3M 5P 7M 11A", ["maj7#11", "Maj7#11", "M7+4", "M7#4"]],
  "M7#5": ["1P 3M 5A 7M", ["maj7#5", "Maj7#5", "maj9#5", "M7+"]],
  "M7#5sus4": ["1P 4P 5A 7M"],
  "M7#9#11": ["1P 3M 5P 7M 9A 11A"],
  M7add13: h0,
  M7b5: d0,
  M7b6: f0,
  M7b9: p0,
  M7sus4: m0,
  M9: _0,
  "M9#11": ["1P 3M 5P 7M 9M 11A", ["maj9#11", "Maj9#11", "M9+4", "M9#4"]],
  "M9#5": ["1P 3M 5A 7M 9M", ["Maj9#5"]],
  "M9#5sus4": ["1P 4P 5A 7M 9M"],
  M9b5: g0,
  M9sus4: x0,
  Madd9: v0,
  Maj7: M0,
  Mb5: S0,
  Mb6: E0,
  Msus2: y0,
  Msus4: T0,
  Maddb9: b0,
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
  "7#11": ["1P 3M 5P 7m 11A", ["7+4", "7#4", "7#11_", "7#4_"]],
  "7#11b13": ["1P 3M 5P 7m 11A 13m", ["7b5b13"]],
  "7#5": ["1P 3M 5A 7m", ["+7", "7aug", "aug7"]],
  "7#5#9": ["1P 3M 5A 7m 9A", ["7alt", "7#5#9_", "7#9b13_"]],
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
  "7sus4b9": ["1P 4P 5P 7m 9m", ["susb9", "7susb9", "7b9sus", "7b9sus4", "phryg"]],
  "7sus4b9b13": ["1P 4P 5P 7m 9m 13m", ["7b9b13sus4"]],
  "9#11": ["1P 3M 5P 7m 9M 11A", ["9+4", "9#4", "9#11_", "9#4_"]],
  "9#11b13": ["1P 3M 5P 7m 9M 11A 13m", ["9b5b13"]],
  "9#5": ["1P 3M 5A 7m 9M", ["9+"]],
  "9#5#11": ["1P 3M 5A 7m 9M 11A"],
  "9b13": ["1P 3M 7m 9M 13m"],
  "9b5": ["1P 3M 5d 7m 9M"],
  "9no5": ["1P 3M 7m 9M"],
  "9sus4": ["1P 4P 5P 7m 9M", ["9sus"]],
  m: A0,
  "m#5": ["1P 3m 5A", ["m+", "mb6"]],
  m11: w0,
  "m11A 5": ["1P 3m 6m 7m 9M 11P"],
  m11b5: P0,
  m13: R0,
  m6: C0,
  m69: L0,
  m7: q0,
  "m7#5": ["1P 3m 6m 7m"],
  m7add11: D0,
  m7b5: U0,
  m9: I0,
  "m9#5": ["1P 3m 6m 7m 9M"],
  m9b5: N0,
  mMaj7: F0,
  mMaj7b6: O0,
  mM9: B0,
  mM9b6: z0,
  mb6M7: G0,
  mb6b9: H0,
  o: V0,
  o7: k0,
  o7M7: W0,
  oM7: X0,
  sus24: Y0,
  "+add#9": ["1P 3M 5A 9A"],
  madd4: j0,
  madd9: Z0
};
var J0 = function(i) {
  return Sm(i) || Lm(i) || 0;
};
function $0(i) {
  if (e1(i))
    return i;
  if (!Array.isArray(i))
    return "";
  var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return i.map(J0).forEach(function(t) {
    e[t] = 1;
  }), e.join("");
}
var Q0 = /^[01]{12}$/;
function e1(i) {
  return Q0.test(i);
}
var sl = function(i) {
  var e = Object.keys(i).sort(), t = [], n = [], r = function(a, c, l) {
    t[a] = c, n[l] = n[l] || [], n[l].push(a);
  };
  e.forEach(function(a) {
    var c = i[a][0].split(" "), l = i[a][1], u = $0(c);
    r(a, c, u), l && l.forEach(function(d) {
      return r(d, c, u);
    });
  });
  var s = Object.keys(t).sort(), o = function(a) {
    return t[a];
  };
  return o.names = function(a) {
    return typeof a == "string" ? (n[a] || []).slice() : (a === !0 ? s : e).slice();
  }, o;
}, t1 = sl(a0), n1 = sl(K0);
t1.names;
n1.names;
const i1 = {
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
  REPRAP: [";RepRap target", "G28", "G92 E0"]
}, mi = Math.PI;
function r1(i, e, t = {
  title: "LivePrinter",
  debug: !1,
  delay: !0,
  travelColor: 15352968,
  travelOpacity: 0.8,
  extrudeColor: 4491498,
  extrudeOpacity: 0.7,
  printHeadColor: 16777045,
  printHeadRadius: 20
}) {
  const n = {};
  function r(he = "lines.gcode") {
    const T = i1[i.model].join(`
`) + `
` + sm(), M = URL.createObjectURL(new Blob([T], { type: "text" })), F = document.createElement("a");
    F.href = M, F.download = he, F.click();
  }
  n.downloadGCode = r;
  const s = document.getElementById(e);
  function o() {
    return s.clientWidth;
  }
  n.sceneWidth = o;
  function a() {
    return o() * i.maxy / i.maxx;
  }
  n.sceneHeight = a;
  function c(he) {
    return o() * (he / i.maxx - 1);
  }
  n.bedXtoScene = c;
  function l(he) {
    return a() * (he / i.maxy - 1);
  }
  n.bedYtoScene = l;
  function u(he) {
    return o() * he / i.maxx;
  }
  n.bedZtoScene = u;
  const d = new Xo({
    antialias: !0,
    preserveDrawingBuffer: !0,
    alpha: !0
  });
  d.setPixelRatio(window.devicePixelRatio), d.setSize(o(), a()), s.appendChild(d.domElement);
  let f = uo({
    color: t.travelColor,
    opacity: t.travelOpacity
  }), p = ho({
    color: t.extrudeColor,
    opacity: t.extrudeOpacity
  });
  cm(o(), a());
  const _ = um({
    radius: t.printHeadRadius,
    color: t.printHeadColor
  }), g = new up(), m = new ot();
  m.translateX(-o()), m.translateY(-a() / 2), m.rotateX(mi / 2), m.translateY(2 * a() / 3);
  const h = new sn(), S = new sn(), x = new sn();
  g.add(m), S.add(f), S.add(p), S.add(_);
  const b = { x: o() / 40, y: o() / 60 }, y = new Pt(
    new bn(b.x, b.y, b.y),
    new Zr({ color: 11075703 })
  ), w = new Pt(
    new bn(b.x, b.y, b.y),
    new Zr({ color: 15295010 })
  );
  g.add(h), S.translateX(o() / 2), S.translateY(a() / 2), x.translateX(o() / 2), x.translateY(a() / 2), y.position.x = c(i.maxx) - b.x / 2, y.position.y = l(i.maxy) - b.y / 2, y.position.z = b.y / 2, w.position.x = c(0) - b.x / 2, w.position.y = l(0) - b.y / 2, w.position.z = b.y / 2, console.log(
    `Test cube position: ${JSON.stringify(w.position, null, 2)}`
  ), S.add(w), S.add(y), h.add(S), h.add(x), g.background = new Ve(986895);
  const q = new Jp(
    o(),
    Math.round(i.maxx / 5),
    4473924,
    2236962
  );
  q.scale.set(1, i.maxy / i.maxx, 1), q.name = "ref-grid", h.add(q), q.rotateX(mi / 2);
  const N = new sn();
  let v = 4 / 5, A = 0, H = 1 / 8, ne = 1, D = 1;
  function O() {
    return o() * A;
  }
  function G() {
    return a() * H;
  }
  function te() {
    return ne * o();
  }
  function Z() {
    return D * a();
  }
  const V = new as(
    -v * o() / 2,
    // left
    v * o() / 2,
    // right
    v * a() / 2,
    // top
    -v * a() / 2,
    // bottom
    0,
    //near
    o() * 100
    // far
  );
  function K() {
    V.left = -v * (te() / 2 + O()), V.right = v * (te() / 2 - O()), V.top = v * (Z() / 2 - G()), V.bottom = -v * (Z() / 2 + G()), V.updateProjectionMatrix();
  }
  K(), n.setZoom = (he) => {
    v = 1 - Math.max(0, Math.min(he, 1)), K();
  }, n.setViewX = (he) => {
    A = he, K();
  }, n.getViewX = () => A, n.setViewXmm = (he) => {
    A = 2 * (he / i.maxx) - 1, K();
  }, n.viewXmm = () => i.maxx * (A + 1) / 2, n.setViewY = (he) => {
    H = he, K();
  }, n.getViewY = () => H, n.setViewYmm = (he) => {
    H = 2 * (he / i.maxy) - 1, K();
  }, n.viewYmm = () => i.maxy * (H + 1) / 2, n.setViewWidth = (he) => {
    ne = he, K();
  }, n.getViewwidth = () => ne, n.setViewHeight = (he) => {
    D = he, K();
  }, n.getViewHeight = () => D;
  let $ = 30;
  const ce = new as(
    -o() / $,
    // left
    o() / $,
    // right
    a() / $,
    // top
    -a() / $,
    // bottom
    0.01,
    //near
    2e3
    // far
  );
  function pe(he) {
    $ = he, ce.left = -o() / $, ce.right = o() / $, ce.top = a() / $, ce.bottom = -a() / $, ce.updateProjectionMatrix();
  }
  n.closeFactor = pe, N.add(V, ce), h.add(N);
  const z = new rm(V, d.domElement);
  V.up.set(0, 0, 1), V.position.set(
    c(-3 * i.maxx),
    l(-3 * i.maxy),
    u(2 * i.maxz)
  ), V.lookAt(
    c(i.maxx / 2) + o() / 2,
    l(i.maxy / 2) + a() / 2,
    u(0)
  ), ce.up.set(0, 0, 1), ce.position.set(
    c(2 * i.maxx),
    l(2 * i.maxy),
    u(i.maxz / 2)
  ), ce.lookAt(
    c(i.minx / 2) + o() / 2,
    l(i.miny / 2) + a() / 2,
    u(0)
  ), z.dampingFactor = 0.1, z.maxPolarAngle = mi, z.minPolarAngle = mi / 2, z.minAzimuthAngle = -mi / 2, z.maxAzimuthAngle = 1e-3, z.enableDamping = !0, (() => {
    const M = new so(16777215, 1, 3 * o(), 0.8);
    M.position.set(
      c(i.maxx / 2),
      l(-i.maxy),
      u(i.maxx / 2)
    ), x.add(M);
    const F = new so(16777215, 1, o(), 0.2);
    F.position.set(
      c(i.maxx / 2),
      l(i.maxy / 2),
      u(i.maxx / 4)
    ), x.add(F), x.add(new Kp(16777215, 0.2));
  })();
  const j = hm({
    x: c,
    y: l,
    z: u,
    delay: t.delay,
    debug: t.debug
  });
  n.vizevents = j, n.resetScene = function() {
    f && (f.geometry.dispose(), f.material.dispose(), S.remove(f)), p && (p.geometry.dispose(), p.material.dispose(), S.remove(p)), f = uo({
      color: t.travelColor,
      opacity: t.travelOpacity
    }), S.add(f), p = ho({
      color: t.extrudeColor,
      opacity: t.extrudeOpacity
    }), S.add(p), n.vizevents.travelGeometry = travelLine.geometry, n.vizevents.extrudeGeometry = extrudeLine.geometry;
  }, i.addPrintListener(j), i.addErrorListener(j), i.addGCodeListener(j);
  const le = {
    printEvent: async ({
      type: he,
      newPosition: T,
      oldPosition: M,
      speed: F,
      moveTime: ie,
      totalMoveTime: re,
      layerHeight: de,
      length: P
    }) => {
      switch (he) {
        case "extrude":
        case "travel":
          ce.position.set(
            c(i.maxx) - o() / 2,
            l(i.maxy) - a() / 2,
            u(T.z + i.maxz / 8)
          ), ce.lookAt(
            c(T.x) + o() / 2,
            l(T.y) + a() / 2,
            u(T.z)
          );
          break;
      }
    }
  };
  i.addPrintListener(le);
  const C = new Qp().parse(im);
  let Te = new oo(t.title ? t.title : "LivePrinter", {
    font: C,
    size: o() / 20,
    height: o() / 24,
    curveSegments: 12,
    bevelEnabled: !0,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 2,
    transparent: !0,
    opacity: 0.2
  });
  Te.computeBoundingBox();
  const Ce = 0.74, ae = 0.8, Se = 0.3, ee = new Zr({
    side: zt,
    opacity: 0.8,
    transparent: !0
  });
  ee.color.setHSL(Ce, ae, Se);
  const k = new Pt(Te, ee);
  k.scale.setComponent(2, 2.5);
  const Q = new ot();
  Q.add(k), m.add(Q);
  function ge() {
    d.setSize(o(), a()), lm(o(), a()), V.aspect = o() / a(), K(), ce.aspect = V.aspect, pe($);
    const he = o() / 20, T = o() / 24;
    Te.dispose(), Te = new oo(t.title ? t.title : "LivePrinter", {
      font: C,
      size: he,
      height: T,
      curveSegments: 12,
      bevelEnabled: !0,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 2,
      transparent: !0,
      opacity: 0.2
    }), Te.computeBoundingBox(), k.geometry = Te, q.scale.set(1, i.maxy / i.maxx, 1);
  }
  window.addEventListener("resize", ge);
  let oe = o() * 4 / 5, we = a() * 4 / 5, Pe = o() * 1 / 5, Ee = a() * 1 / 5;
  n.setCloseViewX = (he) => oe = o() * he, n.setCloseViewY = (he) => we = a() * he, n.setCloseViewWidth = (he) => Pe = o() * he, n.setCloseViewHeight = (he) => Ee = a() * he;
  function qe(he) {
    d.setViewport(0, 0, o(), a()), d.setScissor(0, 0, o(), a()), d.setScissorTest(!0), d.setClearColor(new Ve().setRGB(0, 0, 0, Ie)), d.render(g, V), d.setViewport(
      oe,
      we,
      Pe,
      Ee
    ), d.setScissor(
      oe,
      we,
      Pe,
      Ee
    ), d.setScissorTest(!0), d.setClearColor(new Ve().setRGB(0, 0, 0, Ie)), d.render(g, ce);
  }
  return d.setAnimationLoop(qe), n.clear = function() {
    d.setAnimationLoop(null), window.removeEventListener("resize", ge), i.removePrintListener(j), i.removeErrorListener(j), i.removeGCodeListener(j), i.removePrintListener(le), f && (f.geometry.dispose(), f.material.dispose()), p && (p.geometry.dispose(), p.material.dispose()), _ && (_.geometry.dispose(), _.material.dispose()), g.traverse((he) => {
      he.geometry && he.geometry.dispose(), he.material && (Array.isArray(he.material) ? he.material.forEach((T) => T.dispose()) : he.material.dispose());
    }), g.clear(), d.dispose(), s.removeChild(d.domElement);
  }, n;
}
export {
  r1 as makeVisualiser
};
