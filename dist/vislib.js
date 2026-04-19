/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Ss = "152", qn = { LEFT: 0, MIDDLE: 1, RIGHT: 2, ROTATE: 0, DOLLY: 1, PAN: 2 }, Dn = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, vl = 0, Ns = 1, Ml = 2, wo = 1, Sl = 2, tn = 3, un = 0, pt = 1, kt = 2, hn = 0, Qn = 1, ss = 2, Fs = 3, Os = 4, El = 5, Kn = 100, yl = 101, Tl = 102, Bs = 103, zs = 104, bl = 200, Al = 201, wl = 202, Pl = 203, Po = 204, Ro = 205, Rl = 206, Cl = 207, Ll = 208, ql = 209, Dl = 210, Ul = 0, Il = 1, Nl = 2, as = 3, Fl = 4, Ol = 5, Bl = 6, zl = 7, Es = 0, Gl = 1, Hl = 2, nn = 0, Vl = 1, kl = 2, Wl = 3, Xl = 4, Yl = 5, Co = 300, si = 301, ai = 302, os = 303, ls = 304, hr = 306, cs = 1e3, Ot = 1001, hs = 1002, mt = 1003, Gs = 1004, Sr = 1005, Pt = 1006, jl = 1007, yi = 1008, An = 1009, Zl = 1010, Kl = 1011, Lo = 1012, Jl = 1013, Sn = 1014, En = 1015, Ti = 1016, $l = 1017, Ql = 1018, ei = 1020, ec = 1021, Bt = 1023, tc = 1024, nc = 1025, yn = 1026, oi = 1027, ic = 1028, rc = 1029, sc = 1030, ac = 1031, oc = 1033, Er = 33776, yr = 33777, Tr = 33778, br = 33779, Hs = 35840, Vs = 35841, ks = 35842, Ws = 35843, lc = 36196, Xs = 37492, Ys = 37496, js = 37808, Zs = 37809, Ks = 37810, Js = 37811, $s = 37812, Qs = 37813, ea = 37814, ta = 37815, na = 37816, ia = 37817, ra = 37818, sa = 37819, aa = 37820, oa = 37821, Ar = 36492, cc = 36283, la = 36284, ca = 36285, ha = 36286, qo = 3e3, Tn = 3001, hc = 3200, uc = 3201, Do = 0, fc = 1, bn = "", Ue = "srgb", Xt = "srgb-linear", Uo = "display-p3", wr = 7680, dc = 519, ua = 35044, Io = 35048, fa = "300 es", us = 1035;
class Ln {
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
const ct = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"], Pr = Math.PI / 180, fs = 180 / Math.PI;
function ci() {
  const i = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (ct[i & 255] + ct[i >> 8 & 255] + ct[i >> 16 & 255] + ct[i >> 24 & 255] + "-" + ct[e & 255] + ct[e >> 8 & 255] + "-" + ct[e >> 16 & 15 | 64] + ct[e >> 24 & 255] + "-" + ct[t & 63 | 128] + ct[t >> 8 & 255] + "-" + ct[t >> 16 & 255] + ct[t >> 24 & 255] + ct[n & 255] + ct[n >> 8 & 255] + ct[n >> 16 & 255] + ct[n >> 24 & 255]).toLowerCase();
}
function at(i, e, t) {
  return Math.max(e, Math.min(t, i));
}
function mc(i, e) {
  return (i % e + e) % e;
}
function Rr(i, e, t) {
  return (1 - t) * i + t * e;
}
function da(i) {
  return (i & i - 1) === 0 && i !== 0;
}
function pc(i) {
  return Math.pow(2, Math.floor(Math.log(i) / Math.LN2));
}
function Li(i, e) {
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
function xt(i, e) {
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
class oe {
  constructor(e = 0, t = 0) {
    oe.prototype.isVector2 = !0, this.x = e, this.y = t;
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
class Ve {
  constructor() {
    Ve.prototype.isMatrix3 = !0, this.elements = [
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
    const h = this.elements;
    return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = c, h[6] = n, h[7] = o, h[8] = l, this;
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
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[3], c = n[6], l = n[1], h = n[4], u = n[7], d = n[2], m = n[5], g = n[8], x = r[0], p = r[3], f = r[6], y = r[1], _ = r[4], b = r[7], E = r[2], w = r[5], q = r[8];
    return s[0] = o * x + a * y + c * E, s[3] = o * p + a * _ + c * w, s[6] = o * f + a * b + c * q, s[1] = l * x + h * y + u * E, s[4] = l * p + h * _ + u * w, s[7] = l * f + h * b + u * q, s[2] = d * x + m * y + g * E, s[5] = d * p + m * _ + g * w, s[8] = d * f + m * b + g * q, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8];
    return t * o * h - t * a * l - n * s * h + n * a * c + r * s * l - r * o * c;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = h * o - a * l, d = a * c - h * s, m = l * s - o * c, g = t * u + n * d + r * m;
    if (g === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const x = 1 / g;
    return e[0] = u * x, e[1] = (r * l - h * n) * x, e[2] = (a * n - r * o) * x, e[3] = d * x, e[4] = (h * t - r * c) * x, e[5] = (r * s - a * t) * x, e[6] = m * x, e[7] = (n * c - l * t) * x, e[8] = (o * t - n * s) * x, this;
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
    return this.premultiply(Cr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(Cr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(Cr.makeTranslation(e, t)), this;
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
const Cr = /* @__PURE__ */ new Ve();
function No(i) {
  for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535)
      return !0;
  return !1;
}
function ar(i) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", i);
}
const ma = {};
function Mi(i) {
  i in ma || (ma[i] = !0, console.warn(i));
}
function ti(i) {
  return i < 0.04045 ? i * 0.0773993808 : Math.pow(i * 0.9478672986 + 0.0521327014, 2.4);
}
function Lr(i) {
  return i < 31308e-7 ? i * 12.92 : 1.055 * Math.pow(i, 0.41666) - 0.055;
}
const gc = /* @__PURE__ */ new Ve().fromArray([
  0.8224621,
  0.0331941,
  0.0170827,
  0.177538,
  0.9668058,
  0.0723974,
  -1e-7,
  1e-7,
  0.9105199
]), _c = /* @__PURE__ */ new Ve().fromArray([
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
function xc(i) {
  return i.convertSRGBToLinear().applyMatrix3(_c);
}
function vc(i) {
  return i.applyMatrix3(gc).convertLinearToSRGB();
}
const Mc = {
  [Xt]: (i) => i,
  [Ue]: (i) => i.convertSRGBToLinear(),
  [Uo]: xc
}, Sc = {
  [Xt]: (i) => i,
  [Ue]: (i) => i.convertLinearToSRGB(),
  [Uo]: vc
}, Lt = {
  enabled: !0,
  get legacyMode() {
    return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), !this.enabled;
  },
  set legacyMode(i) {
    console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."), this.enabled = !i;
  },
  get workingColorSpace() {
    return Xt;
  },
  set workingColorSpace(i) {
    console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
  },
  convert: function(i, e, t) {
    if (this.enabled === !1 || e === t || !e || !t)
      return i;
    const n = Mc[e], r = Sc[t];
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
let Un;
class Fo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement)
      t = e;
    else {
      Un === void 0 && (Un = ar("canvas")), Un.width = e.width, Un.height = e.height;
      const n = Un.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = Un;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = ar("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const r = n.getImageData(0, 0, e.width, e.height), s = r.data;
      for (let o = 0; o < s.length; o++)
        s[o] = ti(s[o] / 255) * 255;
      return n.putImageData(r, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ti(t[n] / 255) * 255) : t[n] = ti(t[n]);
      return {
        data: t,
        width: e.width,
        height: e.height
      };
    } else
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
class Oo {
  constructor(e = null) {
    this.isSource = !0, this.uuid = ci(), this.data = e, this.version = 0;
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
          r[o].isDataTexture ? s.push(qr(r[o].image)) : s.push(qr(r[o]));
      } else
        s = qr(r);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function qr(i) {
  return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && i instanceof ImageBitmap ? Fo.getDataURL(i) : i.data ? {
    data: Array.from(i.data),
    width: i.width,
    height: i.height,
    type: i.data.constructor.name
  } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Ec = 0;
class yt extends Ln {
  constructor(e = yt.DEFAULT_IMAGE, t = yt.DEFAULT_MAPPING, n = Ot, r = Ot, s = Pt, o = yi, a = Bt, c = An, l = yt.DEFAULT_ANISOTROPY, h = bn) {
    super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: Ec++ }), this.uuid = ci(), this.name = "", this.source = new Oo(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = c, this.offset = new oe(0, 0), this.repeat = new oe(1, 1), this.center = new oe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new Ve(), this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = h === Tn ? Ue : bn), this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !1;
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
    if (this.mapping !== Co)
      return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1)
      switch (this.wrapS) {
        case cs:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ot:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case hs:
          Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case cs:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ot:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case hs:
          Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, this.source.needsUpdate = !0);
  }
  get encoding() {
    return Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace === Ue ? Tn : qo;
  }
  set encoding(e) {
    Mi("THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace = e === Tn ? Ue : bn;
  }
}
yt.DEFAULT_IMAGE = null;
yt.DEFAULT_MAPPING = Co;
yt.DEFAULT_ANISOTROPY = 1;
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
    const c = e.elements, l = c[0], h = c[4], u = c[8], d = c[1], m = c[5], g = c[9], x = c[2], p = c[6], f = c[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - x) < 0.01 && Math.abs(g - p) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + x) < 0.1 && Math.abs(g + p) < 0.1 && Math.abs(l + m + f - 3) < 0.1)
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const _ = (l + 1) / 2, b = (m + 1) / 2, E = (f + 1) / 2, w = (h + d) / 4, q = (u + x) / 4, N = (g + p) / 4;
      return _ > b && _ > E ? _ < 0.01 ? (n = 0, r = 0.707106781, s = 0.707106781) : (n = Math.sqrt(_), r = w / n, s = q / n) : b > E ? b < 0.01 ? (n = 0.707106781, r = 0, s = 0.707106781) : (r = Math.sqrt(b), n = w / r, s = N / r) : E < 0.01 ? (n = 0.707106781, r = 0.707106781, s = 0) : (s = Math.sqrt(E), n = q / s, r = N / s), this.set(n, r, s, t), this;
    }
    let y = Math.sqrt((p - g) * (p - g) + (u - x) * (u - x) + (d - h) * (d - h));
    return Math.abs(y) < 1e-3 && (y = 1), this.x = (p - g) / y, this.y = (u - x) / y, this.z = (d - h) / y, this.w = Math.acos((l + m + f - 1) / 2), this;
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
class zt extends Ln {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isWebGLRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor = new je(0, 0, e, t), this.scissorTest = !1, this.viewport = new je(0, 0, e, t);
    const r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (Mi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n.colorSpace = n.encoding === Tn ? Ue : bn), this.texture = new yt(r, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1, this.texture.internalFormat = n.internalFormat !== void 0 ? n.internalFormat : null, this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : Pt, this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0, this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1, this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null, this.samples = n.samples !== void 0 ? n.samples : 0;
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
    return this.texture.source = new Oo(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bo extends yt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isDataArrayTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = mt, this.minFilter = mt, this.wrapR = Ot, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class yc extends yt {
  constructor(e = null, t = 1, n = 1, r = 1) {
    super(null), this.isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this.magFilter = mt, this.minFilter = mt, this.wrapR = Ot, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
  }
}
class wn {
  constructor(e = 0, t = 0, n = 0, r = 1) {
    this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w = r;
  }
  static slerpFlat(e, t, n, r, s, o, a) {
    let c = n[r + 0], l = n[r + 1], h = n[r + 2], u = n[r + 3];
    const d = s[o + 0], m = s[o + 1], g = s[o + 2], x = s[o + 3];
    if (a === 0) {
      e[t + 0] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (a === 1) {
      e[t + 0] = d, e[t + 1] = m, e[t + 2] = g, e[t + 3] = x;
      return;
    }
    if (u !== x || c !== d || l !== m || h !== g) {
      let p = 1 - a;
      const f = c * d + l * m + h * g + u * x, y = f >= 0 ? 1 : -1, _ = 1 - f * f;
      if (_ > Number.EPSILON) {
        const E = Math.sqrt(_), w = Math.atan2(E, f * y);
        p = Math.sin(p * w) / E, a = Math.sin(a * w) / E;
      }
      const b = a * y;
      if (c = c * p + d * b, l = l * p + m * b, h = h * p + g * b, u = u * p + x * b, p === 1 - a) {
        const E = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
        c *= E, l *= E, h *= E, u *= E;
      }
    }
    e[t] = c, e[t + 1] = l, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, r, s, o) {
    const a = n[r], c = n[r + 1], l = n[r + 2], h = n[r + 3], u = s[o], d = s[o + 1], m = s[o + 2], g = s[o + 3];
    return e[t] = a * g + h * u + c * m - l * d, e[t + 1] = c * g + h * d + l * u - a * m, e[t + 2] = l * g + h * m + a * d - c * u, e[t + 3] = h * g - a * u - c * d - l * m, e;
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
    const n = e._x, r = e._y, s = e._z, o = e._order, a = Math.cos, c = Math.sin, l = a(n / 2), h = a(r / 2), u = a(s / 2), d = c(n / 2), m = c(r / 2), g = c(s / 2);
    switch (o) {
      case "XYZ":
        this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "YXZ":
        this._x = d * h * u + l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g;
        break;
      case "ZXY":
        this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "ZYX":
        this._x = d * h * u - l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u + d * m * g;
        break;
      case "YZX":
        this._x = d * h * u + l * m * g, this._y = l * m * u + d * h * g, this._z = l * h * g - d * m * u, this._w = l * h * u - d * m * g;
        break;
      case "XZY":
        this._x = d * h * u - l * m * g, this._y = l * m * u - d * h * g, this._z = l * h * g + d * m * u, this._w = l * h * u + d * m * g;
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
    const t = e.elements, n = t[0], r = t[4], s = t[8], o = t[1], a = t[5], c = t[9], l = t[2], h = t[6], u = t[10], d = n + a + u;
    if (d > 0) {
      const m = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / m, this._x = (h - c) * m, this._y = (s - l) * m, this._z = (o - r) * m;
    } else if (n > a && n > u) {
      const m = 2 * Math.sqrt(1 + n - a - u);
      this._w = (h - c) / m, this._x = 0.25 * m, this._y = (r + o) / m, this._z = (s + l) / m;
    } else if (a > u) {
      const m = 2 * Math.sqrt(1 + a - n - u);
      this._w = (s - l) / m, this._x = (r + o) / m, this._y = 0.25 * m, this._z = (c + h) / m;
    } else {
      const m = 2 * Math.sqrt(1 + u - n - a);
      this._w = (o - r) / m, this._x = (s + l) / m, this._y = (c + h) / m, this._z = 0.25 * m;
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
    const n = e._x, r = e._y, s = e._z, o = e._w, a = t._x, c = t._y, l = t._z, h = t._w;
    return this._x = n * h + o * a + r * l - s * c, this._y = r * h + o * c + s * a - n * l, this._z = s * h + o * l + n * c - r * a, this._w = o * h - n * a - r * c - s * l, this._onChangeCallback(), this;
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
      const m = 1 - t;
      return this._w = m * o + t * this._w, this._x = m * n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this.normalize(), this._onChangeCallback(), this;
    }
    const l = Math.sqrt(c), h = Math.atan2(l, a), u = Math.sin((1 - t) * h) / l, d = Math.sin(t * h) / l;
    return this._w = o * u + this._w * d, this._x = n * u + this._x * d, this._y = r * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
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
    return this.applyQuaternion(pa.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(pa.setFromAxisAngle(e, t));
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
    const t = this.x, n = this.y, r = this.z, s = e.x, o = e.y, a = e.z, c = e.w, l = c * t + o * r - a * n, h = c * n + a * t - s * r, u = c * r + s * n - o * t, d = -s * t - o * n - a * r;
    return this.x = l * c + d * -s + h * -a - u * -o, this.y = h * c + d * -o + u * -s - l * -a, this.z = u * c + d * -a + l * -o - h * -s, this;
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
    return Dr.copy(this).projectOnVector(e), this.sub(Dr);
  }
  reflect(e) {
    return this.sub(Dr.copy(e).multiplyScalar(2 * this.dot(e)));
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
const Dr = /* @__PURE__ */ new R(), pa = /* @__PURE__ */ new wn();
class Pi {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = !0, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(Zt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(Zt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++)
      this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Zt.copy(t).multiplyScalar(0.5);
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
      e.boundingBox === null && e.computeBoundingBox(), In.copy(e.boundingBox), In.applyMatrix4(e.matrixWorld), this.union(In);
    else {
      const r = e.geometry;
      if (r !== void 0)
        if (t && r.attributes !== void 0 && r.attributes.position !== void 0) {
          const s = r.attributes.position;
          for (let o = 0, a = s.count; o < a; o++)
            Zt.fromBufferAttribute(s, o).applyMatrix4(e.matrixWorld), this.expandByPoint(Zt);
        } else
          r.boundingBox === null && r.computeBoundingBox(), In.copy(r.boundingBox), In.applyMatrix4(e.matrixWorld), this.union(In);
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
    return this.clampPoint(e.center, Zt), Zt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty())
      return !1;
    this.getCenter(di), qi.subVectors(this.max, di), Nn.subVectors(e.a, di), Fn.subVectors(e.b, di), On.subVectors(e.c, di), sn.subVectors(Fn, Nn), an.subVectors(On, Fn), pn.subVectors(Nn, On);
    let t = [
      0,
      -sn.z,
      sn.y,
      0,
      -an.z,
      an.y,
      0,
      -pn.z,
      pn.y,
      sn.z,
      0,
      -sn.x,
      an.z,
      0,
      -an.x,
      pn.z,
      0,
      -pn.x,
      -sn.y,
      sn.x,
      0,
      -an.y,
      an.x,
      0,
      -pn.y,
      pn.x,
      0
    ];
    return !Ur(t, Nn, Fn, On, qi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !Ur(t, Nn, Fn, On, qi)) ? !1 : (Di.crossVectors(sn, an), t = [Di.x, Di.y, Di.z], Ur(t, Nn, Fn, On, qi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Zt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Zt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (jt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), jt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), jt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), jt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), jt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), jt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), jt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), jt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(jt), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const jt = [
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R(),
  /* @__PURE__ */ new R()
], Zt = /* @__PURE__ */ new R(), In = /* @__PURE__ */ new Pi(), Nn = /* @__PURE__ */ new R(), Fn = /* @__PURE__ */ new R(), On = /* @__PURE__ */ new R(), sn = /* @__PURE__ */ new R(), an = /* @__PURE__ */ new R(), pn = /* @__PURE__ */ new R(), di = /* @__PURE__ */ new R(), qi = /* @__PURE__ */ new R(), Di = /* @__PURE__ */ new R(), gn = /* @__PURE__ */ new R();
function Ur(i, e, t, n, r) {
  for (let s = 0, o = i.length - 3; s <= o; s += 3) {
    gn.fromArray(i, s);
    const a = r.x * Math.abs(gn.x) + r.y * Math.abs(gn.y) + r.z * Math.abs(gn.z), c = e.dot(gn), l = t.dot(gn), h = n.dot(gn);
    if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > a)
      return !1;
  }
  return !0;
}
const Tc = /* @__PURE__ */ new Pi(), mi = /* @__PURE__ */ new R(), Ir = /* @__PURE__ */ new R();
class ur {
  constructor(e = new R(), t = -1) {
    this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Tc.setFromPoints(e).getCenter(n);
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
    mi.subVectors(e, this.center);
    const t = mi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), r = (n - this.radius) * 0.5;
      this.center.addScaledVector(mi, r / n), this.radius += r;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ir.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(mi.copy(e.center).add(Ir)), this.expandByPoint(mi.copy(e.center).sub(Ir))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Kt = /* @__PURE__ */ new R(), Nr = /* @__PURE__ */ new R(), Ui = /* @__PURE__ */ new R(), on = /* @__PURE__ */ new R(), Fr = /* @__PURE__ */ new R(), Ii = /* @__PURE__ */ new R(), Or = /* @__PURE__ */ new R();
class zo {
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
    return this.origin.copy(this.at(e, Kt)), this;
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
    const t = Kt.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (Kt.copy(this.origin).addScaledVector(this.direction, t), Kt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, r) {
    Nr.copy(e).add(t).multiplyScalar(0.5), Ui.copy(t).sub(e).normalize(), on.copy(this.origin).sub(Nr);
    const s = e.distanceTo(t) * 0.5, o = -this.direction.dot(Ui), a = on.dot(this.direction), c = -on.dot(Ui), l = on.lengthSq(), h = Math.abs(1 - o * o);
    let u, d, m, g;
    if (h > 0)
      if (u = o * c - a, d = o * a - c, g = s * h, u >= 0)
        if (d >= -g)
          if (d <= g) {
            const x = 1 / h;
            u *= x, d *= x, m = u * (u + o * d + 2 * a) + d * (o * u + d + 2 * c) + l;
          } else
            d = s, u = Math.max(0, -(o * d + a)), m = -u * u + d * (d + 2 * c) + l;
        else
          d = -s, u = Math.max(0, -(o * d + a)), m = -u * u + d * (d + 2 * c) + l;
      else
        d <= -g ? (u = Math.max(0, -(-o * s + a)), d = u > 0 ? -s : Math.min(Math.max(-s, -c), s), m = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -c), s), m = d * (d + 2 * c) + l) : (u = Math.max(0, -(o * s + a)), d = u > 0 ? s : Math.min(Math.max(-s, -c), s), m = -u * u + d * (d + 2 * c) + l);
    else
      d = o > 0 ? -s : s, u = Math.max(0, -(o * d + a)), m = -u * u + d * (d + 2 * c) + l;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), r && r.copy(Nr).addScaledVector(Ui, d), m;
  }
  intersectSphere(e, t) {
    Kt.subVectors(e.center, this.origin);
    const n = Kt.dot(this.direction), r = Kt.dot(Kt) - n * n, s = e.radius * e.radius;
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
    const l = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return l >= 0 ? (n = (e.min.x - d.x) * l, r = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l, r = (e.min.x - d.x) * l), h >= 0 ? (s = (e.min.y - d.y) * h, o = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, o = (e.min.y - d.y) * h), n > o || s > r || ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), u >= 0 ? (a = (e.min.z - d.z) * u, c = (e.max.z - d.z) * u) : (a = (e.max.z - d.z) * u, c = (e.min.z - d.z) * u), n > c || a > r) || ((a > n || n !== n) && (n = a), (c < r || r !== r) && (r = c), r < 0) ? null : this.at(n >= 0 ? n : r, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, Kt) !== null;
  }
  intersectTriangle(e, t, n, r, s) {
    Fr.subVectors(t, e), Ii.subVectors(n, e), Or.crossVectors(Fr, Ii);
    let o = this.direction.dot(Or), a;
    if (o > 0) {
      if (r)
        return null;
      a = 1;
    } else if (o < 0)
      a = -1, o = -o;
    else
      return null;
    on.subVectors(this.origin, e);
    const c = a * this.direction.dot(Ii.crossVectors(on, Ii));
    if (c < 0)
      return null;
    const l = a * this.direction.dot(Fr.cross(on));
    if (l < 0 || c + l > o)
      return null;
    const h = -a * on.dot(Or);
    return h < 0 ? null : this.at(h / o, s);
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
  set(e, t, n, r, s, o, a, c, l, h, u, d, m, g, x, p) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = r, f[1] = s, f[5] = o, f[9] = a, f[13] = c, f[2] = l, f[6] = h, f[10] = u, f[14] = d, f[3] = m, f[7] = g, f[11] = x, f[15] = p, this;
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
    const t = this.elements, n = e.elements, r = 1 / Bn.setFromMatrixColumn(e, 0).length(), s = 1 / Bn.setFromMatrixColumn(e, 1).length(), o = 1 / Bn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * r, t[1] = n[1] * r, t[2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, r = e.y, s = e.z, o = Math.cos(n), a = Math.sin(n), c = Math.cos(r), l = Math.sin(r), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = o * h, m = o * u, g = a * h, x = a * u;
      t[0] = c * h, t[4] = -c * u, t[8] = l, t[1] = m + g * l, t[5] = d - x * l, t[9] = -a * c, t[2] = x - d * l, t[6] = g + m * l, t[10] = o * c;
    } else if (e.order === "YXZ") {
      const d = c * h, m = c * u, g = l * h, x = l * u;
      t[0] = d + x * a, t[4] = g * a - m, t[8] = o * l, t[1] = o * u, t[5] = o * h, t[9] = -a, t[2] = m * a - g, t[6] = x + d * a, t[10] = o * c;
    } else if (e.order === "ZXY") {
      const d = c * h, m = c * u, g = l * h, x = l * u;
      t[0] = d - x * a, t[4] = -o * u, t[8] = g + m * a, t[1] = m + g * a, t[5] = o * h, t[9] = x - d * a, t[2] = -o * l, t[6] = a, t[10] = o * c;
    } else if (e.order === "ZYX") {
      const d = o * h, m = o * u, g = a * h, x = a * u;
      t[0] = c * h, t[4] = g * l - m, t[8] = d * l + x, t[1] = c * u, t[5] = x * l + d, t[9] = m * l - g, t[2] = -l, t[6] = a * c, t[10] = o * c;
    } else if (e.order === "YZX") {
      const d = o * c, m = o * l, g = a * c, x = a * l;
      t[0] = c * h, t[4] = x - d * u, t[8] = g * u + m, t[1] = u, t[5] = o * h, t[9] = -a * h, t[2] = -l * h, t[6] = m * u + g, t[10] = d - x * u;
    } else if (e.order === "XZY") {
      const d = o * c, m = o * l, g = a * c, x = a * l;
      t[0] = c * h, t[4] = -u, t[8] = l * h, t[1] = d * u + x, t[5] = o * h, t[9] = m * u - g, t[2] = g * u - m, t[6] = a * h, t[10] = x * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose(bc, e, Ac);
  }
  lookAt(e, t, n) {
    const r = this.elements;
    return vt.subVectors(e, t), vt.lengthSq() === 0 && (vt.z = 1), vt.normalize(), ln.crossVectors(n, vt), ln.lengthSq() === 0 && (Math.abs(n.z) === 1 ? vt.x += 1e-4 : vt.z += 1e-4, vt.normalize(), ln.crossVectors(n, vt)), ln.normalize(), Ni.crossVectors(vt, ln), r[0] = ln.x, r[4] = Ni.x, r[8] = vt.x, r[1] = ln.y, r[5] = Ni.y, r[9] = vt.y, r[2] = ln.z, r[6] = Ni.z, r[10] = vt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, r = t.elements, s = this.elements, o = n[0], a = n[4], c = n[8], l = n[12], h = n[1], u = n[5], d = n[9], m = n[13], g = n[2], x = n[6], p = n[10], f = n[14], y = n[3], _ = n[7], b = n[11], E = n[15], w = r[0], q = r[4], N = r[8], v = r[12], A = r[1], V = r[5], re = r[9], U = r[13], O = r[2], H = r[6], ne = r[10], K = r[14], j = r[3], Q = r[7], ie = r[11], pe = r[15];
    return s[0] = o * w + a * A + c * O + l * j, s[4] = o * q + a * V + c * H + l * Q, s[8] = o * N + a * re + c * ne + l * ie, s[12] = o * v + a * U + c * K + l * pe, s[1] = h * w + u * A + d * O + m * j, s[5] = h * q + u * V + d * H + m * Q, s[9] = h * N + u * re + d * ne + m * ie, s[13] = h * v + u * U + d * K + m * pe, s[2] = g * w + x * A + p * O + f * j, s[6] = g * q + x * V + p * H + f * Q, s[10] = g * N + x * re + p * ne + f * ie, s[14] = g * v + x * U + p * K + f * pe, s[3] = y * w + _ * A + b * O + E * j, s[7] = y * q + _ * V + b * H + E * Q, s[11] = y * N + _ * re + b * ne + E * ie, s[15] = y * v + _ * U + b * K + E * pe, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], r = e[8], s = e[12], o = e[1], a = e[5], c = e[9], l = e[13], h = e[2], u = e[6], d = e[10], m = e[14], g = e[3], x = e[7], p = e[11], f = e[15];
    return g * (+s * c * u - r * l * u - s * a * d + n * l * d + r * a * m - n * c * m) + x * (+t * c * m - t * l * d + s * o * d - r * o * m + r * l * h - s * c * h) + p * (+t * l * u - t * a * m - s * o * u + n * o * m + s * a * h - n * l * h) + f * (-r * a * h - t * c * u + t * a * d + r * o * u - n * o * d + n * c * h);
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
    const e = this.elements, t = e[0], n = e[1], r = e[2], s = e[3], o = e[4], a = e[5], c = e[6], l = e[7], h = e[8], u = e[9], d = e[10], m = e[11], g = e[12], x = e[13], p = e[14], f = e[15], y = u * p * l - x * d * l + x * c * m - a * p * m - u * c * f + a * d * f, _ = g * d * l - h * p * l - g * c * m + o * p * m + h * c * f - o * d * f, b = h * x * l - g * u * l + g * a * m - o * x * m - h * a * f + o * u * f, E = g * u * c - h * x * c - g * a * d + o * x * d + h * a * p - o * u * p, w = t * y + n * _ + r * b + s * E;
    if (w === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const q = 1 / w;
    return e[0] = y * q, e[1] = (x * d * s - u * p * s - x * r * m + n * p * m + u * r * f - n * d * f) * q, e[2] = (a * p * s - x * c * s + x * r * l - n * p * l - a * r * f + n * c * f) * q, e[3] = (u * c * s - a * d * s - u * r * l + n * d * l + a * r * m - n * c * m) * q, e[4] = _ * q, e[5] = (h * p * s - g * d * s + g * r * m - t * p * m - h * r * f + t * d * f) * q, e[6] = (g * c * s - o * p * s - g * r * l + t * p * l + o * r * f - t * c * f) * q, e[7] = (o * d * s - h * c * s + h * r * l - t * d * l - o * r * m + t * c * m) * q, e[8] = b * q, e[9] = (g * u * s - h * x * s - g * n * m + t * x * m + h * n * f - t * u * f) * q, e[10] = (o * x * s - g * a * s + g * n * l - t * x * l - o * n * f + t * a * f) * q, e[11] = (h * a * s - o * u * s - h * n * l + t * u * l + o * n * m - t * a * m) * q, e[12] = E * q, e[13] = (h * x * r - g * u * r + g * n * d - t * x * d - h * n * p + t * u * p) * q, e[14] = (g * a * r - o * x * r - g * n * c + t * x * c + o * n * p - t * a * p) * q, e[15] = (o * u * r - h * a * r + h * n * c - t * u * c - o * n * d + t * a * d) * q, this;
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
    const n = Math.cos(t), r = Math.sin(t), s = 1 - n, o = e.x, a = e.y, c = e.z, l = s * o, h = s * a;
    return this.set(
      l * o + n,
      l * a - r * c,
      l * c + r * a,
      0,
      l * a + r * c,
      h * a + n,
      h * c - r * o,
      0,
      l * c - r * a,
      h * c + r * o,
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
    const r = this.elements, s = t._x, o = t._y, a = t._z, c = t._w, l = s + s, h = o + o, u = a + a, d = s * l, m = s * h, g = s * u, x = o * h, p = o * u, f = a * u, y = c * l, _ = c * h, b = c * u, E = n.x, w = n.y, q = n.z;
    return r[0] = (1 - (x + f)) * E, r[1] = (m + b) * E, r[2] = (g - _) * E, r[3] = 0, r[4] = (m - b) * w, r[5] = (1 - (d + f)) * w, r[6] = (p + y) * w, r[7] = 0, r[8] = (g + _) * q, r[9] = (p - y) * q, r[10] = (1 - (d + x)) * q, r[11] = 0, r[12] = e.x, r[13] = e.y, r[14] = e.z, r[15] = 1, this;
  }
  decompose(e, t, n) {
    const r = this.elements;
    let s = Bn.set(r[0], r[1], r[2]).length();
    const o = Bn.set(r[4], r[5], r[6]).length(), a = Bn.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], qt.copy(this);
    const l = 1 / s, h = 1 / o, u = 1 / a;
    return qt.elements[0] *= l, qt.elements[1] *= l, qt.elements[2] *= l, qt.elements[4] *= h, qt.elements[5] *= h, qt.elements[6] *= h, qt.elements[8] *= u, qt.elements[9] *= u, qt.elements[10] *= u, t.setFromRotationMatrix(qt), n.x = s, n.y = o, n.z = a, this;
  }
  makePerspective(e, t, n, r, s, o) {
    const a = this.elements, c = 2 * s / (t - e), l = 2 * s / (n - r), h = (t + e) / (t - e), u = (n + r) / (n - r), d = -(o + s) / (o - s), m = -2 * o * s / (o - s);
    return a[0] = c, a[4] = 0, a[8] = h, a[12] = 0, a[1] = 0, a[5] = l, a[9] = u, a[13] = 0, a[2] = 0, a[6] = 0, a[10] = d, a[14] = m, a[3] = 0, a[7] = 0, a[11] = -1, a[15] = 0, this;
  }
  makeOrthographic(e, t, n, r, s, o) {
    const a = this.elements, c = 1 / (t - e), l = 1 / (n - r), h = 1 / (o - s), u = (t + e) * c, d = (n + r) * l, m = (o + s) * h;
    return a[0] = 2 * c, a[4] = 0, a[8] = 0, a[12] = -u, a[1] = 0, a[5] = 2 * l, a[9] = 0, a[13] = -d, a[2] = 0, a[6] = 0, a[10] = -2 * h, a[14] = -m, a[3] = 0, a[7] = 0, a[11] = 0, a[15] = 1, this;
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
const Bn = /* @__PURE__ */ new R(), qt = /* @__PURE__ */ new Ke(), bc = /* @__PURE__ */ new R(0, 0, 0), Ac = /* @__PURE__ */ new R(1, 1, 1), ln = /* @__PURE__ */ new R(), Ni = /* @__PURE__ */ new R(), vt = /* @__PURE__ */ new R(), ga = /* @__PURE__ */ new Ke(), _a = /* @__PURE__ */ new wn();
class fr {
  constructor(e = 0, t = 0, n = 0, r = fr.DEFAULT_ORDER) {
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
    const r = e.elements, s = r[0], o = r[4], a = r[8], c = r[1], l = r[5], h = r[9], u = r[2], d = r[6], m = r[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(at(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-h, m), this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(d, l), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-at(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(at(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, m), this._z = Math.atan2(-o, l)) : (this._y = 0, this._z = Math.atan2(c, s));
        break;
      case "ZYX":
        this._y = Math.asin(-at(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, m), this._z = Math.atan2(c, s)) : (this._x = 0, this._z = Math.atan2(-o, l));
        break;
      case "YZX":
        this._z = Math.asin(at(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._x = Math.atan2(-h, l), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(a, m));
        break;
      case "XZY":
        this._z = Math.asin(-at(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(d, l), this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return ga.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ga, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return _a.setFromEuler(this), this.setFromQuaternion(_a, e);
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
fr.DEFAULT_ORDER = "XYZ";
class Go {
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
let wc = 0;
const xa = /* @__PURE__ */ new R(), zn = /* @__PURE__ */ new wn(), Jt = /* @__PURE__ */ new Ke(), Fi = /* @__PURE__ */ new R(), pi = /* @__PURE__ */ new R(), Pc = /* @__PURE__ */ new R(), Rc = /* @__PURE__ */ new wn(), va = /* @__PURE__ */ new R(1, 0, 0), Ma = /* @__PURE__ */ new R(0, 1, 0), Sa = /* @__PURE__ */ new R(0, 0, 1), Cc = { type: "added" }, Ea = { type: "removed" };
class ot extends Ln {
  constructor() {
    super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: wc++ }), this.uuid = ci(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = ot.DEFAULT_UP.clone();
    const e = new R(), t = new fr(), n = new wn(), r = new R(1, 1, 1);
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
        value: new Ve()
      }
    }), this.matrix = new Ke(), this.matrixWorld = new Ke(), this.matrixAutoUpdate = ot.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.matrixWorldAutoUpdate = ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.layers = new Go(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return zn.setFromAxisAngle(e, t), this.quaternion.multiply(zn), this;
  }
  rotateOnWorldAxis(e, t) {
    return zn.setFromAxisAngle(e, t), this.quaternion.premultiply(zn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(va, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ma, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Sa, e);
  }
  translateOnAxis(e, t) {
    return xa.copy(e).applyQuaternion(this.quaternion), this.position.add(xa.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(va, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ma, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Sa, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Jt.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Fi.copy(e) : Fi.set(e, t, n);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1), pi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Jt.lookAt(pi, Fi, this.up) : Jt.lookAt(Fi, pi, this.up), this.quaternion.setFromRotationMatrix(Jt), r && (Jt.extractRotation(r.matrixWorld), zn.setFromRotationMatrix(Jt), this.quaternion.premultiply(zn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++)
        this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children.push(e), e.dispatchEvent(Cc)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++)
        this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(Ea)), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      t.parent = null, t.dispatchEvent(Ea);
    }
    return this.children.length = 0, this;
  }
  attach(e) {
    return this.updateWorldMatrix(!0, !1), Jt.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Jt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Jt), this.add(e), e.updateWorldMatrix(!1, !0), this;
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
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pi, e, Pc), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(pi, Rc, e), e;
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
          for (let l = 0, h = c.length; l < h; l++) {
            const u = c[l];
            s(e.shapes, u);
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
      const a = o(e.geometries), c = o(e.materials), l = o(e.textures), h = o(e.images), u = o(e.shapes), d = o(e.skeletons), m = o(e.animations), g = o(e.nodes);
      a.length > 0 && (n.geometries = a), c.length > 0 && (n.materials = c), l.length > 0 && (n.textures = l), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), m.length > 0 && (n.animations = m), g.length > 0 && (n.nodes = g);
    }
    return n.object = r, n;
    function o(a) {
      const c = [];
      for (const l in a) {
        const h = a[l];
        delete h.metadata, c.push(h);
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
const Dt = /* @__PURE__ */ new R(), $t = /* @__PURE__ */ new R(), Br = /* @__PURE__ */ new R(), Qt = /* @__PURE__ */ new R(), Gn = /* @__PURE__ */ new R(), Hn = /* @__PURE__ */ new R(), ya = /* @__PURE__ */ new R(), zr = /* @__PURE__ */ new R(), Gr = /* @__PURE__ */ new R(), Hr = /* @__PURE__ */ new R();
let Oi = !1;
class It {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, r) {
    r.subVectors(n, t), Dt.subVectors(e, t), r.cross(Dt);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  // static/instance method to calculate barycentric coordinates
  // based on: http://www.blackpawn.com/texts/pointinpoly/default.html
  static getBarycoord(e, t, n, r, s) {
    Dt.subVectors(r, t), $t.subVectors(n, t), Br.subVectors(e, t);
    const o = Dt.dot(Dt), a = Dt.dot($t), c = Dt.dot(Br), l = $t.dot($t), h = $t.dot(Br), u = o * l - a * a;
    if (u === 0)
      return s.set(-2, -1, -1);
    const d = 1 / u, m = (l * c - a * h) * d, g = (o * h - a * c) * d;
    return s.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, r) {
    return this.getBarycoord(e, t, n, r, Qt), Qt.x >= 0 && Qt.y >= 0 && Qt.x + Qt.y <= 1;
  }
  static getUV(e, t, n, r, s, o, a, c) {
    return Oi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Oi = !0), this.getInterpolation(e, t, n, r, s, o, a, c);
  }
  static getInterpolation(e, t, n, r, s, o, a, c) {
    return this.getBarycoord(e, t, n, r, Qt), c.setScalar(0), c.addScaledVector(s, Qt.x), c.addScaledVector(o, Qt.y), c.addScaledVector(a, Qt.z), c;
  }
  static isFrontFacing(e, t, n, r) {
    return Dt.subVectors(n, t), $t.subVectors(e, t), Dt.cross($t).dot(r) < 0;
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
    return Dt.subVectors(this.c, this.b), $t.subVectors(this.a, this.b), Dt.cross($t).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return It.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return It.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, r, s) {
    return Oi === !1 && (console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Oi = !0), It.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  getInterpolation(e, t, n, r, s) {
    return It.getInterpolation(e, this.a, this.b, this.c, t, n, r, s);
  }
  containsPoint(e) {
    return It.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return It.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, r = this.b, s = this.c;
    let o, a;
    Gn.subVectors(r, n), Hn.subVectors(s, n), zr.subVectors(e, n);
    const c = Gn.dot(zr), l = Hn.dot(zr);
    if (c <= 0 && l <= 0)
      return t.copy(n);
    Gr.subVectors(e, r);
    const h = Gn.dot(Gr), u = Hn.dot(Gr);
    if (h >= 0 && u <= h)
      return t.copy(r);
    const d = c * u - h * l;
    if (d <= 0 && c >= 0 && h <= 0)
      return o = c / (c - h), t.copy(n).addScaledVector(Gn, o);
    Hr.subVectors(e, s);
    const m = Gn.dot(Hr), g = Hn.dot(Hr);
    if (g >= 0 && m <= g)
      return t.copy(s);
    const x = m * l - c * g;
    if (x <= 0 && l >= 0 && g <= 0)
      return a = l / (l - g), t.copy(n).addScaledVector(Hn, a);
    const p = h * g - m * u;
    if (p <= 0 && u - h >= 0 && m - g >= 0)
      return ya.subVectors(s, r), a = (u - h) / (u - h + (m - g)), t.copy(r).addScaledVector(ya, a);
    const f = 1 / (p + x + d);
    return o = x * f, a = d * f, t.copy(n).addScaledVector(Gn, o).addScaledVector(Hn, a);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Lc = 0;
class hi extends Ln {
  constructor() {
    super(), this.isMaterial = !0, Object.defineProperty(this, "id", { value: Lc++ }), this.uuid = ci(), this.name = "", this.type = "Material", this.blending = Qn, this.side = un, this.vertexColors = !1, this.opacity = 1, this.transparent = !1, this.blendSrc = Po, this.blendDst = Ro, this.blendEquation = Kn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.depthFunc = as, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255, this.stencilFunc = dc, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = wr, this.stencilZFail = wr, this.stencilZPass = wr, this.stencilWrite = !1, this.clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide = null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this.alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this.visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Qn && (n.blending = this.blending), this.side !== un && (n.side = this.side), this.vertexColors && (n.vertexColors = !0), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = this.transparent), n.depthFunc = this.depthFunc, n.depthTest = this.depthTest, n.depthWrite = this.depthWrite, n.colorWrite = this.colorWrite, n.stencilWrite = this.stencilWrite, n.stencilWriteMask = this.stencilWriteMask, n.stencilFunc = this.stencilFunc, n.stencilRef = this.stencilRef, n.stencilFuncMask = this.stencilFuncMask, n.stencilFail = this.stencilFail, n.stencilZFail = this.stencilZFail, n.stencilZPass = this.stencilZPass, this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = this.premultipliedAlpha), this.forceSinglePass === !0 && (n.forceSinglePass = this.forceSinglePass), this.wireframe === !0 && (n.wireframe = this.wireframe), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === !0 && (n.flatShading = this.flatShading), this.visible === !1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n.fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
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
const Ho = {
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
}, Ut = { h: 0, s: 0, l: 0 }, Bi = { h: 0, s: 0, l: 0 };
function Vr(i, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i;
}
class Ie {
  constructor(e, t, n) {
    return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n);
  }
  set(e) {
    return e && e.isColor ? this.copy(e) : typeof e == "number" ? this.setHex(e) : typeof e == "string" && this.setStyle(e), this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = Ue) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Lt.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, r = Lt.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Lt.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, t, n, r = Lt.workingColorSpace) {
    if (e = mc(e, 1), t = at(t, 0, 1), n = at(n, 0, 1), t === 0)
      this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, o = 2 * n - s;
      this.r = Vr(o, s, e + 1 / 3), this.g = Vr(o, s, e), this.b = Vr(o, s, e - 1 / 3);
    }
    return Lt.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, t = Ue) {
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
  setColorName(e, t = Ue) {
    const n = Ho[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ti(e.r), this.g = ti(e.g), this.b = ti(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Lr(e.r), this.g = Lr(e.g), this.b = Lr(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ue) {
    return Lt.fromWorkingColorSpace(ht.copy(this), e), Math.round(at(ht.r * 255, 0, 255)) * 65536 + Math.round(at(ht.g * 255, 0, 255)) * 256 + Math.round(at(ht.b * 255, 0, 255));
  }
  getHexString(e = Ue) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Lt.workingColorSpace) {
    Lt.fromWorkingColorSpace(ht.copy(this), t);
    const n = ht.r, r = ht.g, s = ht.b, o = Math.max(n, r, s), a = Math.min(n, r, s);
    let c, l;
    const h = (a + o) / 2;
    if (a === o)
      c = 0, l = 0;
    else {
      const u = o - a;
      switch (l = h <= 0.5 ? u / (o + a) : u / (2 - o - a), o) {
        case n:
          c = (r - s) / u + (r < s ? 6 : 0);
          break;
        case r:
          c = (s - n) / u + 2;
          break;
        case s:
          c = (n - r) / u + 4;
          break;
      }
      c /= 6;
    }
    return e.h = c, e.s = l, e.l = h, e;
  }
  getRGB(e, t = Lt.workingColorSpace) {
    return Lt.fromWorkingColorSpace(ht.copy(this), t), e.r = ht.r, e.g = ht.g, e.b = ht.b, e;
  }
  getStyle(e = Ue) {
    Lt.fromWorkingColorSpace(ht.copy(this), e);
    const t = ht.r, n = ht.g, r = ht.b;
    return e !== Ue ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Ut), Ut.h += e, Ut.s += t, Ut.l += n, this.setHSL(Ut.h, Ut.s, Ut.l), this;
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
    this.getHSL(Ut), e.getHSL(Bi);
    const n = Rr(Ut.h, Bi.h, t), r = Rr(Ut.s, Bi.s, t), s = Rr(Ut.l, Bi.l, t);
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
const ht = /* @__PURE__ */ new Ie();
Ie.NAMES = Ho;
class dr extends hi {
  constructor(e) {
    super(), this.isMeshBasicMaterial = !0, this.type = "MeshBasicMaterial", this.color = new Ie(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Es, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const et = /* @__PURE__ */ new R(), zi = /* @__PURE__ */ new oe();
class Wt {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = ua, this.updateRange = { offset: 0, count: -1 }, this.version = 0;
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
        zi.fromBufferAttribute(this, t), zi.applyMatrix3(e), this.setXY(t, zi.x, zi.y);
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
    return this.normalized && (t = Li(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Li(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Li(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Li(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, r) {
    return e *= this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array), r = xt(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this;
  }
  setXYZW(e, t, n, r, s) {
    return e *= this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array), r = xt(r, this.array), s = xt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = r, this.array[e + 3] = s, this;
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
    return this.name !== "" && (e.name = this.name), this.usage !== ua && (e.usage = this.usage), (this.updateRange.offset !== 0 || this.updateRange.count !== -1) && (e.updateRange = this.updateRange), e;
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
class Vo extends Wt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class ko extends Wt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class tt extends Wt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let qc = 0;
const bt = /* @__PURE__ */ new Ke(), kr = /* @__PURE__ */ new ot(), Vn = /* @__PURE__ */ new R(), Mt = /* @__PURE__ */ new Pi(), gi = /* @__PURE__ */ new Pi(), st = /* @__PURE__ */ new R();
class gt extends Ln {
  constructor() {
    super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: qc++ }), this.uuid = ci(), this.name = "", this.type = "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (No(e) ? ko : Vo)(e, 1) : this.index = e, this;
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
      const s = new Ve().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = !0;
    }
    const r = this.attributes.tangent;
    return r !== void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return bt.makeRotationFromQuaternion(e), this.applyMatrix4(bt), this;
  }
  rotateX(e) {
    return bt.makeRotationX(e), this.applyMatrix4(bt), this;
  }
  rotateY(e) {
    return bt.makeRotationY(e), this.applyMatrix4(bt), this;
  }
  rotateZ(e) {
    return bt.makeRotationZ(e), this.applyMatrix4(bt), this;
  }
  translate(e, t, n) {
    return bt.makeTranslation(e, t, n), this.applyMatrix4(bt), this;
  }
  scale(e, t, n) {
    return bt.makeScale(e, t, n), this.applyMatrix4(bt), this;
  }
  lookAt(e) {
    return kr.lookAt(e), kr.updateMatrix(), this.applyMatrix4(kr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(Vn).negate(), this.translate(Vn.x, Vn.y, Vn.z), this;
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, r = e.length; n < r; n++) {
      const s = e[n];
      t.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute("position", new tt(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Pi());
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
          Mt.setFromBufferAttribute(s), this.morphTargetsRelative ? (st.addVectors(this.boundingBox.min, Mt.min), this.boundingBox.expandByPoint(st), st.addVectors(this.boundingBox.max, Mt.max), this.boundingBox.expandByPoint(st)) : (this.boundingBox.expandByPoint(Mt.min), this.boundingBox.expandByPoint(Mt.max));
        }
    } else
      this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new ur());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Mt.setFromBufferAttribute(e), t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s];
          gi.setFromBufferAttribute(a), this.morphTargetsRelative ? (st.addVectors(Mt.min, gi.min), Mt.expandByPoint(st), st.addVectors(Mt.max, gi.max), Mt.expandByPoint(st)) : (Mt.expandByPoint(gi.min), Mt.expandByPoint(gi.max));
        }
      Mt.getCenter(n);
      let r = 0;
      for (let s = 0, o = e.count; s < o; s++)
        st.fromBufferAttribute(e, s), r = Math.max(r, n.distanceToSquared(st));
      if (t)
        for (let s = 0, o = t.length; s < o; s++) {
          const a = t[s], c = this.morphTargetsRelative;
          for (let l = 0, h = a.count; l < h; l++)
            st.fromBufferAttribute(a, l), c && (Vn.fromBufferAttribute(e, l), st.add(Vn)), r = Math.max(r, n.distanceToSquared(st));
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
    this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Wt(new Float32Array(4 * a), 4));
    const c = this.getAttribute("tangent").array, l = [], h = [];
    for (let A = 0; A < a; A++)
      l[A] = new R(), h[A] = new R();
    const u = new R(), d = new R(), m = new R(), g = new oe(), x = new oe(), p = new oe(), f = new R(), y = new R();
    function _(A, V, re) {
      u.fromArray(r, A * 3), d.fromArray(r, V * 3), m.fromArray(r, re * 3), g.fromArray(o, A * 2), x.fromArray(o, V * 2), p.fromArray(o, re * 2), d.sub(u), m.sub(u), x.sub(g), p.sub(g);
      const U = 1 / (x.x * p.y - p.x * x.y);
      isFinite(U) && (f.copy(d).multiplyScalar(p.y).addScaledVector(m, -x.y).multiplyScalar(U), y.copy(m).multiplyScalar(x.x).addScaledVector(d, -p.x).multiplyScalar(U), l[A].add(f), l[V].add(f), l[re].add(f), h[A].add(y), h[V].add(y), h[re].add(y));
    }
    let b = this.groups;
    b.length === 0 && (b = [{
      start: 0,
      count: n.length
    }]);
    for (let A = 0, V = b.length; A < V; ++A) {
      const re = b[A], U = re.start, O = re.count;
      for (let H = U, ne = U + O; H < ne; H += 3)
        _(
          n[H + 0],
          n[H + 1],
          n[H + 2]
        );
    }
    const E = new R(), w = new R(), q = new R(), N = new R();
    function v(A) {
      q.fromArray(s, A * 3), N.copy(q);
      const V = l[A];
      E.copy(V), E.sub(q.multiplyScalar(q.dot(V))).normalize(), w.crossVectors(N, V);
      const U = w.dot(h[A]) < 0 ? -1 : 1;
      c[A * 4] = E.x, c[A * 4 + 1] = E.y, c[A * 4 + 2] = E.z, c[A * 4 + 3] = U;
    }
    for (let A = 0, V = b.length; A < V; ++A) {
      const re = b[A], U = re.start, O = re.count;
      for (let H = U, ne = U + O; H < ne; H += 3)
        v(n[H + 0]), v(n[H + 1]), v(n[H + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        n = new Wt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else
        for (let d = 0, m = n.count; d < m; d++)
          n.setXYZ(d, 0, 0, 0);
      const r = new R(), s = new R(), o = new R(), a = new R(), c = new R(), l = new R(), h = new R(), u = new R();
      if (e)
        for (let d = 0, m = e.count; d < m; d += 3) {
          const g = e.getX(d + 0), x = e.getX(d + 1), p = e.getX(d + 2);
          r.fromBufferAttribute(t, g), s.fromBufferAttribute(t, x), o.fromBufferAttribute(t, p), h.subVectors(o, s), u.subVectors(r, s), h.cross(u), a.fromBufferAttribute(n, g), c.fromBufferAttribute(n, x), l.fromBufferAttribute(n, p), a.add(h), c.add(h), l.add(h), n.setXYZ(g, a.x, a.y, a.z), n.setXYZ(x, c.x, c.y, c.z), n.setXYZ(p, l.x, l.y, l.z);
        }
      else
        for (let d = 0, m = t.count; d < m; d += 3)
          r.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), o.fromBufferAttribute(t, d + 2), h.subVectors(o, s), u.subVectors(r, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = !0;
    }
  }
  merge() {
    return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."), this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      st.fromBufferAttribute(e, t), st.normalize(), e.setXYZ(t, st.x, st.y, st.z);
  }
  toNonIndexed() {
    function e(a, c) {
      const l = a.array, h = a.itemSize, u = a.normalized, d = new l.constructor(c.length * h);
      let m = 0, g = 0;
      for (let x = 0, p = c.length; x < p; x++) {
        a.isInterleavedBufferAttribute ? m = c[x] * a.data.stride + a.offset : m = c[x] * h;
        for (let f = 0; f < h; f++)
          d[g++] = l[m++];
      }
      return new Wt(d, h, u);
    }
    if (this.index === null)
      return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new gt(), n = this.index.array, r = this.attributes;
    for (const a in r) {
      const c = r[a], l = e(c, n);
      t.setAttribute(a, l);
    }
    const s = this.morphAttributes;
    for (const a in s) {
      const c = [], l = s[a];
      for (let h = 0, u = l.length; h < u; h++) {
        const d = l[h], m = e(d, n);
        c.push(m);
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
      const l = this.morphAttributes[c], h = [];
      for (let u = 0, d = l.length; u < d; u++) {
        const m = l[u];
        h.push(m.toJSON(e.data));
      }
      h.length > 0 && (r[c] = h, s = !0);
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
      const h = r[l];
      this.setAttribute(l, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const l in s) {
      const h = [], u = s[l];
      for (let d = 0, m = u.length; d < m; d++)
        h.push(u[d].clone(t));
      this.morphAttributes[l] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let l = 0, h = o.length; l < h; l++) {
      const u = o[l];
      this.addGroup(u.start, u.count, u.materialIndex);
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
const Ta = /* @__PURE__ */ new Ke(), Ht = /* @__PURE__ */ new zo(), Gi = /* @__PURE__ */ new ur(), ba = /* @__PURE__ */ new R(), kn = /* @__PURE__ */ new R(), Wn = /* @__PURE__ */ new R(), Xn = /* @__PURE__ */ new R(), Wr = /* @__PURE__ */ new R(), Hi = /* @__PURE__ */ new R(), Vi = /* @__PURE__ */ new oe(), ki = /* @__PURE__ */ new oe(), Wi = /* @__PURE__ */ new oe(), Aa = /* @__PURE__ */ new R(), wa = /* @__PURE__ */ new R(), Pa = /* @__PURE__ */ new R(), Xi = /* @__PURE__ */ new R(), Yi = /* @__PURE__ */ new R();
class St extends ot {
  constructor(e = new gt(), t = new dr()) {
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
      Hi.set(0, 0, 0);
      for (let c = 0, l = s.length; c < l; c++) {
        const h = a[c], u = s[c];
        h !== 0 && (Wr.fromBufferAttribute(u, e), o ? Hi.addScaledVector(Wr, h) : Hi.addScaledVector(Wr.sub(t), h));
      }
      t.add(Hi);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.material, s = this.matrixWorld;
    r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Gi.copy(n.boundingSphere), Gi.applyMatrix4(s), Ht.copy(e.ray).recast(e.near), !(Gi.containsPoint(Ht.origin) === !1 && (Ht.intersectSphere(Gi, ba) === null || Ht.origin.distanceToSquared(ba) > (e.far - e.near) ** 2)) && (Ta.copy(s).invert(), Ht.copy(e.ray).applyMatrix4(Ta), !(n.boundingBox !== null && Ht.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t)));
  }
  _computeIntersections(e, t) {
    let n;
    const r = this.geometry, s = this.material, o = r.index, a = r.attributes.position, c = r.attributes.uv, l = r.attributes.uv1, h = r.attributes.normal, u = r.groups, d = r.drawRange;
    if (o !== null)
      if (Array.isArray(s))
        for (let m = 0, g = u.length; m < g; m++) {
          const x = u[m], p = s[x.materialIndex], f = Math.max(x.start, d.start), y = Math.min(o.count, Math.min(x.start + x.count, d.start + d.count));
          for (let _ = f, b = y; _ < b; _ += 3) {
            const E = o.getX(_), w = o.getX(_ + 1), q = o.getX(_ + 2);
            n = ji(this, p, e, Ht, c, l, h, E, w, q), n && (n.faceIndex = Math.floor(_ / 3), n.face.materialIndex = x.materialIndex, t.push(n));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(o.count, d.start + d.count);
        for (let x = m, p = g; x < p; x += 3) {
          const f = o.getX(x), y = o.getX(x + 1), _ = o.getX(x + 2);
          n = ji(this, s, e, Ht, c, l, h, f, y, _), n && (n.faceIndex = Math.floor(x / 3), t.push(n));
        }
      }
    else if (a !== void 0)
      if (Array.isArray(s))
        for (let m = 0, g = u.length; m < g; m++) {
          const x = u[m], p = s[x.materialIndex], f = Math.max(x.start, d.start), y = Math.min(a.count, Math.min(x.start + x.count, d.start + d.count));
          for (let _ = f, b = y; _ < b; _ += 3) {
            const E = _, w = _ + 1, q = _ + 2;
            n = ji(this, p, e, Ht, c, l, h, E, w, q), n && (n.faceIndex = Math.floor(_ / 3), n.face.materialIndex = x.materialIndex, t.push(n));
          }
        }
      else {
        const m = Math.max(0, d.start), g = Math.min(a.count, d.start + d.count);
        for (let x = m, p = g; x < p; x += 3) {
          const f = x, y = x + 1, _ = x + 2;
          n = ji(this, s, e, Ht, c, l, h, f, y, _), n && (n.faceIndex = Math.floor(x / 3), t.push(n));
        }
      }
  }
}
function Dc(i, e, t, n, r, s, o, a) {
  let c;
  if (e.side === pt ? c = n.intersectTriangle(o, s, r, !0, a) : c = n.intersectTriangle(r, s, o, e.side === un, a), c === null)
    return null;
  Yi.copy(a), Yi.applyMatrix4(i.matrixWorld);
  const l = t.ray.origin.distanceTo(Yi);
  return l < t.near || l > t.far ? null : {
    distance: l,
    point: Yi.clone(),
    object: i
  };
}
function ji(i, e, t, n, r, s, o, a, c, l) {
  i.getVertexPosition(a, kn), i.getVertexPosition(c, Wn), i.getVertexPosition(l, Xn);
  const h = Dc(i, e, t, n, kn, Wn, Xn, Xi);
  if (h) {
    r && (Vi.fromBufferAttribute(r, a), ki.fromBufferAttribute(r, c), Wi.fromBufferAttribute(r, l), h.uv = It.getInterpolation(Xi, kn, Wn, Xn, Vi, ki, Wi, new oe())), s && (Vi.fromBufferAttribute(s, a), ki.fromBufferAttribute(s, c), Wi.fromBufferAttribute(s, l), h.uv1 = It.getInterpolation(Xi, kn, Wn, Xn, Vi, ki, Wi, new oe()), h.uv2 = h.uv1), o && (Aa.fromBufferAttribute(o, a), wa.fromBufferAttribute(o, c), Pa.fromBufferAttribute(o, l), h.normal = It.getInterpolation(Xi, kn, Wn, Xn, Aa, wa, Pa, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const u = {
      a,
      b: c,
      c: l,
      normal: new R(),
      materialIndex: 0
    };
    It.getNormal(kn, Wn, Xn, u.normal), h.face = u;
  }
  return h;
}
class Pn extends gt {
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
    const c = [], l = [], h = [], u = [];
    let d = 0, m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, s, 0), g("z", "y", "x", 1, -1, n, t, -e, o, s, 1), g("x", "z", "y", 1, 1, e, n, t, r, o, 2), g("x", "z", "y", 1, -1, e, n, -t, r, o, 3), g("x", "y", "z", 1, -1, e, t, n, r, s, 4), g("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(c), this.setAttribute("position", new tt(l, 3)), this.setAttribute("normal", new tt(h, 3)), this.setAttribute("uv", new tt(u, 2));
    function g(x, p, f, y, _, b, E, w, q, N, v) {
      const A = b / q, V = E / N, re = b / 2, U = E / 2, O = w / 2, H = q + 1, ne = N + 1;
      let K = 0, j = 0;
      const Q = new R();
      for (let ie = 0; ie < ne; ie++) {
        const pe = ie * V - U;
        for (let ce = 0; ce < H; ce++) {
          const G = ce * A - re;
          Q[x] = G * y, Q[p] = pe * _, Q[f] = O, l.push(Q.x, Q.y, Q.z), Q[x] = 0, Q[p] = 0, Q[f] = w > 0 ? 1 : -1, h.push(Q.x, Q.y, Q.z), u.push(ce / q), u.push(1 - ie / N), K += 1;
        }
      }
      for (let ie = 0; ie < N; ie++)
        for (let pe = 0; pe < q; pe++) {
          const ce = d + pe + H * ie, G = d + pe + H * (ie + 1), Y = d + (pe + 1) + H * (ie + 1), ae = d + (pe + 1) + H * ie;
          c.push(ce, G, ae), c.push(G, Y, ae), j += 6;
        }
      a.addGroup(m, j, v), m += j, d += K;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Pn(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function li(i) {
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
function dt(i) {
  const e = {};
  for (let t = 0; t < i.length; t++) {
    const n = li(i[t]);
    for (const r in n)
      e[r] = n[r];
  }
  return e;
}
function Uc(i) {
  const e = [];
  for (let t = 0; t < i.length; t++)
    e.push(i[t].clone());
  return e;
}
function Wo(i) {
  return i.getRenderTarget() === null ? i.outputColorSpace : Xt;
}
const or = { clone: li, merge: dt };
var Ic = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, Nc = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Et extends hi {
  constructor(e) {
    super(), this.isShaderMaterial = !0, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = Ic, this.fragmentShader = Nc, this.linewidth = 1, this.wireframe = !1, this.wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this.forceSinglePass = !0, this.extensions = {
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
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = li(e.uniforms), this.uniformsGroups = Uc(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class Xo extends ot {
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
class Rt extends Xo {
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
    this.fov = fs * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  /**
   * Calculates the focal length from the current .fov and .filmGauge.
   */
  getFocalLength() {
    const e = Math.tan(Pr * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return fs * 2 * Math.atan(
      Math.tan(Pr * 0.5 * this.fov) / this.zoom
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
    let t = e * Math.tan(Pr * 0.5 * this.fov) / this.zoom, n = 2 * t, r = this.aspect * n, s = -0.5 * r;
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
const Yn = -90, jn = 1;
class Fc extends ot {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n;
    const r = new Rt(Yn, jn, e, t);
    r.layers = this.layers, r.up.set(0, 1, 0), r.lookAt(1, 0, 0), this.add(r);
    const s = new Rt(Yn, jn, e, t);
    s.layers = this.layers, s.up.set(0, 1, 0), s.lookAt(-1, 0, 0), this.add(s);
    const o = new Rt(Yn, jn, e, t);
    o.layers = this.layers, o.up.set(0, 0, -1), o.lookAt(0, 1, 0), this.add(o);
    const a = new Rt(Yn, jn, e, t);
    a.layers = this.layers, a.up.set(0, 0, 1), a.lookAt(0, -1, 0), this.add(a);
    const c = new Rt(Yn, jn, e, t);
    c.layers = this.layers, c.up.set(0, 1, 0), c.lookAt(0, 0, 1), this.add(c);
    const l = new Rt(Yn, jn, e, t);
    l.layers = this.layers, l.up.set(0, 1, 0), l.lookAt(0, 0, -1), this.add(l);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget, [r, s, o, a, c, l] = this.children, h = e.getRenderTarget(), u = e.toneMapping, d = e.xr.enabled;
    e.toneMapping = nn, e.xr.enabled = !1;
    const m = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0), e.render(t, r), e.setRenderTarget(n, 1), e.render(t, s), e.setRenderTarget(n, 2), e.render(t, o), e.setRenderTarget(n, 3), e.render(t, a), e.setRenderTarget(n, 4), e.render(t, c), n.texture.generateMipmaps = m, e.setRenderTarget(n, 5), e.render(t, l), e.setRenderTarget(h), e.toneMapping = u, e.xr.enabled = d, n.texture.needsPMREMUpdate = !0;
  }
}
class Yo extends yt {
  constructor(e, t, n, r, s, o, a, c, l, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : si, super(e, t, n, r, s, o, a, c, l, h), this.isCubeTexture = !0, this.flipY = !1;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Oc extends zt {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = !0;
    const n = { width: e, height: e, depth: 1 }, r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (Mi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."), t.colorSpace = t.encoding === Tn ? Ue : bn), this.texture = new Yo(r, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Pt;
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
    }, r = new Pn(5, 5, 5), s = new Et({
      name: "CubemapFromEquirect",
      uniforms: li(n.uniforms),
      vertexShader: n.vertexShader,
      fragmentShader: n.fragmentShader,
      side: pt,
      blending: hn
    });
    s.uniforms.tEquirect.value = t;
    const o = new St(r, s), a = t.minFilter;
    return t.minFilter === yi && (t.minFilter = Pt), new Fc(1, 10, this).update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this;
  }
  clear(e, t, n, r) {
    const s = e.getRenderTarget();
    for (let o = 0; o < 6; o++)
      e.setRenderTarget(this, o), e.clear(t, n, r);
    e.setRenderTarget(s);
  }
}
const Xr = /* @__PURE__ */ new R(), Bc = /* @__PURE__ */ new R(), zc = /* @__PURE__ */ new Ve();
class xn {
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
    const r = Xr.subVectors(n, t).cross(Bc.subVectors(e, t)).normalize();
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
    const n = e.delta(Xr), r = this.normal.dot(n);
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
    const n = t || zc.getNormalMatrix(e), r = this.coplanarPoint(Xr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
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
const _n = /* @__PURE__ */ new ur(), Zi = /* @__PURE__ */ new R();
class ys {
  constructor(e = new xn(), t = new xn(), n = new xn(), r = new xn(), s = new xn(), o = new xn()) {
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
    const t = this.planes, n = e.elements, r = n[0], s = n[1], o = n[2], a = n[3], c = n[4], l = n[5], h = n[6], u = n[7], d = n[8], m = n[9], g = n[10], x = n[11], p = n[12], f = n[13], y = n[14], _ = n[15];
    return t[0].setComponents(a - r, u - c, x - d, _ - p).normalize(), t[1].setComponents(a + r, u + c, x + d, _ + p).normalize(), t[2].setComponents(a + s, u + l, x + m, _ + f).normalize(), t[3].setComponents(a - s, u - l, x - m, _ - f).normalize(), t[4].setComponents(a - o, u - h, x - g, _ - y).normalize(), t[5].setComponents(a + o, u + h, x + g, _ + y).normalize(), this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(), _n.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), _n.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(_n);
  }
  intersectsSprite(e) {
    return _n.center.set(0, 0, 0), _n.radius = 0.7071067811865476, _n.applyMatrix4(e.matrixWorld), this.intersectsSphere(_n);
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
      if (Zi.x = r.normal.x > 0 ? e.max.x : e.min.x, Zi.y = r.normal.y > 0 ? e.max.y : e.min.y, Zi.z = r.normal.z > 0 ? e.max.z : e.min.z, r.distanceToPoint(Zi) < 0)
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
function jo() {
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
function Gc(i, e) {
  const t = e.isWebGL2, n = /* @__PURE__ */ new WeakMap();
  function r(l, h) {
    const u = l.array, d = l.usage, m = i.createBuffer();
    i.bindBuffer(h, m), i.bufferData(h, u, d), l.onUploadCallback();
    let g;
    if (u instanceof Float32Array)
      g = i.FLOAT;
    else if (u instanceof Uint16Array)
      if (l.isFloat16BufferAttribute)
        if (t)
          g = i.HALF_FLOAT;
        else
          throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
      else
        g = i.UNSIGNED_SHORT;
    else if (u instanceof Int16Array)
      g = i.SHORT;
    else if (u instanceof Uint32Array)
      g = i.UNSIGNED_INT;
    else if (u instanceof Int32Array)
      g = i.INT;
    else if (u instanceof Int8Array)
      g = i.BYTE;
    else if (u instanceof Uint8Array)
      g = i.UNSIGNED_BYTE;
    else if (u instanceof Uint8ClampedArray)
      g = i.UNSIGNED_BYTE;
    else
      throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + u);
    return {
      buffer: m,
      type: g,
      bytesPerElement: u.BYTES_PER_ELEMENT,
      version: l.version
    };
  }
  function s(l, h, u) {
    const d = h.array, m = h.updateRange;
    i.bindBuffer(u, l), m.count === -1 ? i.bufferSubData(u, 0, d) : (t ? i.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d,
      m.offset,
      m.count
    ) : i.bufferSubData(
      u,
      m.offset * d.BYTES_PER_ELEMENT,
      d.subarray(m.offset, m.offset + m.count)
    ), m.count = -1), h.onUploadCallback();
  }
  function o(l) {
    return l.isInterleavedBufferAttribute && (l = l.data), n.get(l);
  }
  function a(l) {
    l.isInterleavedBufferAttribute && (l = l.data);
    const h = n.get(l);
    h && (i.deleteBuffer(h.buffer), n.delete(l));
  }
  function c(l, h) {
    if (l.isGLBufferAttribute) {
      const d = n.get(l);
      (!d || d.version < l.version) && n.set(l, {
        buffer: l.buffer,
        type: l.type,
        bytesPerElement: l.elementSize,
        version: l.version
      });
      return;
    }
    l.isInterleavedBufferAttribute && (l = l.data);
    const u = n.get(l);
    u === void 0 ? n.set(l, r(l, h)) : u.version < l.version && (s(u.buffer, l, h), u.version = l.version);
  }
  return {
    get: o,
    remove: a,
    update: c
  };
}
class Ts extends gt {
  constructor(e = 1, t = 1, n = 1, r = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = {
      width: e,
      height: t,
      widthSegments: n,
      heightSegments: r
    };
    const s = e / 2, o = t / 2, a = Math.floor(n), c = Math.floor(r), l = a + 1, h = c + 1, u = e / a, d = t / c, m = [], g = [], x = [], p = [];
    for (let f = 0; f < h; f++) {
      const y = f * d - o;
      for (let _ = 0; _ < l; _++) {
        const b = _ * u - s;
        g.push(b, -y, 0), x.push(0, 0, 1), p.push(_ / a), p.push(1 - f / c);
      }
    }
    for (let f = 0; f < c; f++)
      for (let y = 0; y < a; y++) {
        const _ = y + l * f, b = y + l * (f + 1), E = y + 1 + l * (f + 1), w = y + 1 + l * f;
        m.push(_, b, w), m.push(b, E, w);
      }
    this.setIndex(m), this.setAttribute("position", new tt(g, 3)), this.setAttribute("normal", new tt(x, 3)), this.setAttribute("uv", new tt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ts(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Hc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, Vc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, kc = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`, Wc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, Xc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, Yc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, jc = "vec3 transformed = vec3( position );", Zc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Kc = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Jc = `#ifdef USE_IRIDESCENCE
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
#endif`, $c = `#ifdef USE_BUMPMAP
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
#endif`, Qc = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, eh = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, th = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, nh = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, ih = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, rh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, sh = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`, ah = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`, oh = `#define PI 3.141592653589793
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
} // validated`, lh = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, ch = `vec3 transformedNormal = objectNormal;
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
#endif`, hh = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, uh = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, fh = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, dh = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, mh = "gl_FragColor = linearToOutputTexel( gl_FragColor );", ph = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, gh = `#ifdef USE_ENVMAP
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
#endif`, _h = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, xh = `#ifdef USE_ENVMAP
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
#endif`, vh = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Mh = `#ifdef USE_ENVMAP
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
#endif`, Sh = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, Eh = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, yh = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Th = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, bh = `#ifdef USE_GRADIENTMAP
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
}`, Ah = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`, wh = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, Ph = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Rh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Ch = `uniform bool receiveShadow;
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
#endif`, Lh = `#if defined( USE_ENVMAP )
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
#endif`, qh = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, Dh = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, Uh = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, Ih = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, Nh = `PhysicalMaterial material;
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
#endif`, Fh = `struct PhysicalMaterial {
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
}`, Oh = `
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
#endif`, Bh = `#if defined( RE_IndirectDiffuse )
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
#endif`, zh = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`, Gh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, Hh = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, Vh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`, kh = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`, Wh = `#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`, Xh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Yh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, jh = `#if defined( USE_POINTS_UV )
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
#endif`, Zh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, Kh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Jh = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, $h = `#ifdef USE_MORPHNORMALS
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
#endif`, Qh = `#ifdef USE_MORPHTARGETS
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
#endif`, eu = `#ifdef USE_MORPHTARGETS
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
#endif`, tu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`, nu = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, iu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, ru = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, su = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, au = `#ifdef USE_NORMALMAP
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
#endif`, ou = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`, lu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, cu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, hu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, uu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, fu = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, du = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, mu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, pu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, gu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, _u = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, xu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, vu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Mu = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Su = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Eu = `float getShadowMask() {
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
}`, yu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Tu = `#ifdef USE_SKINNING
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
#endif`, bu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Au = `#ifdef USE_SKINNING
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
#endif`, wu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Pu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Ru = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, Cu = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, Lu = `#ifdef USE_TRANSMISSION
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
#endif`, qu = `#ifdef USE_TRANSMISSION
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
#endif`, Du = `#ifdef USE_UV
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
#endif`, Uu = `#ifdef USE_UV
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
#endif`, Iu = `#ifdef USE_UV
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
#endif`, Nu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Fu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, Ou = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Bu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, zu = `#ifdef ENVMAP_TYPE_CUBE
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
}`, Gu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, Hu = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Vu = `#include <common>
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
}`, ku = `#if DEPTH_PACKING == 3200
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
}`, Wu = `#define DISTANCE
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
}`, Xu = `#define DISTANCE
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
}`, Yu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, ju = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`, Zu = `uniform float scale;
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
}`, Ku = `uniform vec3 diffuse;
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
}`, Ju = `#include <common>
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
}`, $u = `uniform vec3 diffuse;
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
}`, Qu = `#define LAMBERT
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
}`, ef = `#define LAMBERT
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
}`, tf = `#define MATCAP
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
}`, nf = `#define MATCAP
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
}`, rf = `#define NORMAL
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
}`, sf = `#define NORMAL
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
}`, af = `#define PHONG
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
}`, of = `#define PHONG
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
}`, lf = `#define STANDARD
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
}`, cf = `#define STANDARD
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
}`, hf = `#define TOON
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
}`, uf = `#define TOON
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
}`, ff = `uniform float size;
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
}`, df = `uniform vec3 diffuse;
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
}`, mf = `#include <common>
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
}`, pf = `uniform vec3 color;
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
}`, gf = `uniform float rotation;
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
}`, _f = `uniform vec3 diffuse;
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
  alphamap_fragment: Hc,
  alphamap_pars_fragment: Vc,
  alphatest_fragment: kc,
  alphatest_pars_fragment: Wc,
  aomap_fragment: Xc,
  aomap_pars_fragment: Yc,
  begin_vertex: jc,
  beginnormal_vertex: Zc,
  bsdfs: Kc,
  iridescence_fragment: Jc,
  bumpmap_pars_fragment: $c,
  clipping_planes_fragment: Qc,
  clipping_planes_pars_fragment: eh,
  clipping_planes_pars_vertex: th,
  clipping_planes_vertex: nh,
  color_fragment: ih,
  color_pars_fragment: rh,
  color_pars_vertex: sh,
  color_vertex: ah,
  common: oh,
  cube_uv_reflection_fragment: lh,
  defaultnormal_vertex: ch,
  displacementmap_pars_vertex: hh,
  displacementmap_vertex: uh,
  emissivemap_fragment: fh,
  emissivemap_pars_fragment: dh,
  encodings_fragment: mh,
  encodings_pars_fragment: ph,
  envmap_fragment: gh,
  envmap_common_pars_fragment: _h,
  envmap_pars_fragment: xh,
  envmap_pars_vertex: vh,
  envmap_physical_pars_fragment: Lh,
  envmap_vertex: Mh,
  fog_vertex: Sh,
  fog_pars_vertex: Eh,
  fog_fragment: yh,
  fog_pars_fragment: Th,
  gradientmap_pars_fragment: bh,
  lightmap_fragment: Ah,
  lightmap_pars_fragment: wh,
  lights_lambert_fragment: Ph,
  lights_lambert_pars_fragment: Rh,
  lights_pars_begin: Ch,
  lights_toon_fragment: qh,
  lights_toon_pars_fragment: Dh,
  lights_phong_fragment: Uh,
  lights_phong_pars_fragment: Ih,
  lights_physical_fragment: Nh,
  lights_physical_pars_fragment: Fh,
  lights_fragment_begin: Oh,
  lights_fragment_maps: Bh,
  lights_fragment_end: zh,
  logdepthbuf_fragment: Gh,
  logdepthbuf_pars_fragment: Hh,
  logdepthbuf_pars_vertex: Vh,
  logdepthbuf_vertex: kh,
  map_fragment: Wh,
  map_pars_fragment: Xh,
  map_particle_fragment: Yh,
  map_particle_pars_fragment: jh,
  metalnessmap_fragment: Zh,
  metalnessmap_pars_fragment: Kh,
  morphcolor_vertex: Jh,
  morphnormal_vertex: $h,
  morphtarget_pars_vertex: Qh,
  morphtarget_vertex: eu,
  normal_fragment_begin: tu,
  normal_fragment_maps: nu,
  normal_pars_fragment: iu,
  normal_pars_vertex: ru,
  normal_vertex: su,
  normalmap_pars_fragment: au,
  clearcoat_normal_fragment_begin: ou,
  clearcoat_normal_fragment_maps: lu,
  clearcoat_pars_fragment: cu,
  iridescence_pars_fragment: hu,
  output_fragment: uu,
  packing: fu,
  premultiplied_alpha_fragment: du,
  project_vertex: mu,
  dithering_fragment: pu,
  dithering_pars_fragment: gu,
  roughnessmap_fragment: _u,
  roughnessmap_pars_fragment: xu,
  shadowmap_pars_fragment: vu,
  shadowmap_pars_vertex: Mu,
  shadowmap_vertex: Su,
  shadowmask_pars_fragment: Eu,
  skinbase_vertex: yu,
  skinning_pars_vertex: Tu,
  skinning_vertex: bu,
  skinnormal_vertex: Au,
  specularmap_fragment: wu,
  specularmap_pars_fragment: Pu,
  tonemapping_fragment: Ru,
  tonemapping_pars_fragment: Cu,
  transmission_fragment: Lu,
  transmission_pars_fragment: qu,
  uv_pars_fragment: Du,
  uv_pars_vertex: Uu,
  uv_vertex: Iu,
  worldpos_vertex: Nu,
  background_vert: Fu,
  background_frag: Ou,
  backgroundCube_vert: Bu,
  backgroundCube_frag: zu,
  cube_vert: Gu,
  cube_frag: Hu,
  depth_vert: Vu,
  depth_frag: ku,
  distanceRGBA_vert: Wu,
  distanceRGBA_frag: Xu,
  equirect_vert: Yu,
  equirect_frag: ju,
  linedashed_vert: Zu,
  linedashed_frag: Ku,
  meshbasic_vert: Ju,
  meshbasic_frag: $u,
  meshlambert_vert: Qu,
  meshlambert_frag: ef,
  meshmatcap_vert: tf,
  meshmatcap_frag: nf,
  meshnormal_vert: rf,
  meshnormal_frag: sf,
  meshphong_vert: af,
  meshphong_frag: of,
  meshphysical_vert: lf,
  meshphysical_frag: cf,
  meshtoon_vert: hf,
  meshtoon_frag: uf,
  points_vert: ff,
  points_frag: df,
  shadow_vert: mf,
  shadow_frag: pf,
  sprite_vert: gf,
  sprite_frag: _f
}, me = {
  common: {
    diffuse: { value: /* @__PURE__ */ new Ie(16777215) },
    opacity: { value: 1 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaMap: { value: null },
    alphaMapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaTest: { value: 0 }
  },
  specularmap: {
    specularMap: { value: null },
    specularMapTransform: { value: /* @__PURE__ */ new Ve() }
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
    aoMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  lightmap: {
    lightMap: { value: null },
    lightMapIntensity: { value: 1 },
    lightMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  bumpmap: {
    bumpMap: { value: null },
    bumpMapTransform: { value: /* @__PURE__ */ new Ve() },
    bumpScale: { value: 1 }
  },
  normalmap: {
    normalMap: { value: null },
    normalMapTransform: { value: /* @__PURE__ */ new Ve() },
    normalScale: { value: /* @__PURE__ */ new oe(1, 1) }
  },
  displacementmap: {
    displacementMap: { value: null },
    displacementMapTransform: { value: /* @__PURE__ */ new Ve() },
    displacementScale: { value: 1 },
    displacementBias: { value: 0 }
  },
  emissivemap: {
    emissiveMap: { value: null },
    emissiveMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  metalnessmap: {
    metalnessMap: { value: null },
    metalnessMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  roughnessmap: {
    roughnessMap: { value: null },
    roughnessMapTransform: { value: /* @__PURE__ */ new Ve() }
  },
  gradientmap: {
    gradientMap: { value: null }
  },
  fog: {
    fogDensity: { value: 25e-5 },
    fogNear: { value: 1 },
    fogFar: { value: 2e3 },
    fogColor: { value: /* @__PURE__ */ new Ie(16777215) }
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
    diffuse: { value: /* @__PURE__ */ new Ie(16777215) },
    opacity: { value: 1 },
    size: { value: 1 },
    scale: { value: 1 },
    map: { value: null },
    alphaMap: { value: null },
    alphaTest: { value: 0 },
    uvTransform: { value: /* @__PURE__ */ new Ve() }
  },
  sprite: {
    diffuse: { value: /* @__PURE__ */ new Ie(16777215) },
    opacity: { value: 1 },
    center: { value: /* @__PURE__ */ new oe(0.5, 0.5) },
    rotation: { value: 0 },
    map: { value: null },
    mapTransform: { value: /* @__PURE__ */ new Ve() },
    alphaMap: { value: null },
    alphaTest: { value: 0 }
  }
}, Vt = {
  basic: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.specularmap,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.fog
    ]),
    vertexShader: Fe.meshbasic_vert,
    fragmentShader: Fe.meshbasic_frag
  },
  lambert: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.specularmap,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ie(0) }
      }
    ]),
    vertexShader: Fe.meshlambert_vert,
    fragmentShader: Fe.meshlambert_frag
  },
  phong: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.specularmap,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ie(0) },
        specular: { value: /* @__PURE__ */ new Ie(1118481) },
        shininess: { value: 30 }
      }
    ]),
    vertexShader: Fe.meshphong_vert,
    fragmentShader: Fe.meshphong_frag
  },
  standard: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.envmap,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.roughnessmap,
      me.metalnessmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ie(0) },
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
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.aomap,
      me.lightmap,
      me.emissivemap,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.gradientmap,
      me.fog,
      me.lights,
      {
        emissive: { value: /* @__PURE__ */ new Ie(0) }
      }
    ]),
    vertexShader: Fe.meshtoon_vert,
    fragmentShader: Fe.meshtoon_frag
  },
  matcap: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      me.fog,
      {
        matcap: { value: null }
      }
    ]),
    vertexShader: Fe.meshmatcap_vert,
    fragmentShader: Fe.meshmatcap_frag
  },
  points: {
    uniforms: /* @__PURE__ */ dt([
      me.points,
      me.fog
    ]),
    vertexShader: Fe.points_vert,
    fragmentShader: Fe.points_frag
  },
  dashed: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.fog,
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
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.displacementmap
    ]),
    vertexShader: Fe.depth_vert,
    fragmentShader: Fe.depth_frag
  },
  normal: {
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.bumpmap,
      me.normalmap,
      me.displacementmap,
      {
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.meshnormal_vert,
    fragmentShader: Fe.meshnormal_frag
  },
  sprite: {
    uniforms: /* @__PURE__ */ dt([
      me.sprite,
      me.fog
    ]),
    vertexShader: Fe.sprite_vert,
    fragmentShader: Fe.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: { value: /* @__PURE__ */ new Ve() },
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
    uniforms: /* @__PURE__ */ dt([
      me.common,
      me.displacementmap,
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
    uniforms: /* @__PURE__ */ dt([
      me.lights,
      me.fog,
      {
        color: { value: /* @__PURE__ */ new Ie(0) },
        opacity: { value: 1 }
      }
    ]),
    vertexShader: Fe.shadow_vert,
    fragmentShader: Fe.shadow_frag
  }
};
Vt.physical = {
  uniforms: /* @__PURE__ */ dt([
    Vt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: /* @__PURE__ */ new Ve() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: /* @__PURE__ */ new Ve() },
      clearcoatNormalScale: { value: /* @__PURE__ */ new oe(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: /* @__PURE__ */ new Ve() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: /* @__PURE__ */ new Ve() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: /* @__PURE__ */ new Ve() },
      sheen: { value: 0 },
      sheenColor: { value: /* @__PURE__ */ new Ie(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: /* @__PURE__ */ new Ve() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: /* @__PURE__ */ new Ve() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: /* @__PURE__ */ new Ve() },
      transmissionSamplerSize: { value: /* @__PURE__ */ new oe() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: /* @__PURE__ */ new Ve() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: /* @__PURE__ */ new Ie(0) },
      specularColor: { value: /* @__PURE__ */ new Ie(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: /* @__PURE__ */ new Ve() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: /* @__PURE__ */ new Ve() }
    }
  ]),
  vertexShader: Fe.meshphysical_vert,
  fragmentShader: Fe.meshphysical_frag
};
const Ki = { r: 0, b: 0, g: 0 };
function xf(i, e, t, n, r, s, o) {
  const a = new Ie(0);
  let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, m = null;
  function g(p, f) {
    let y = !1, _ = f.isScene === !0 ? f.background : null;
    switch (_ && _.isTexture && (_ = (f.backgroundBlurriness > 0 ? t : e).get(_)), _ === null ? x(a, c) : _ && _.isColor && (x(_, 1), y = !0), i.xr.getEnvironmentBlendMode()) {
      case "opaque":
        y = !0;
        break;
      case "additive":
        n.buffers.color.setClear(0, 0, 0, 1, o), y = !0;
        break;
      case "alpha-blend":
        n.buffers.color.setClear(0, 0, 0, 0, o), y = !0;
        break;
    }
    (i.autoClear || y) && i.clear(i.autoClearColor, i.autoClearDepth, i.autoClearStencil), _ && (_.isCubeTexture || _.mapping === hr) ? (h === void 0 && (h = new St(
      new Pn(1, 1, 1),
      new Et({
        name: "BackgroundCubeMaterial",
        uniforms: li(Vt.backgroundCube.uniforms),
        vertexShader: Vt.backgroundCube.vertexShader,
        fragmentShader: Vt.backgroundCube.fragmentShader,
        side: pt,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(w, q, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", {
      get: function() {
        return this.uniforms.envMap.value;
      }
    }), r.update(h)), h.material.uniforms.envMap.value = _, h.material.uniforms.flipEnvMap.value = _.isCubeTexture && _.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = f.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, h.material.toneMapped = _.colorSpace !== Ue, (u !== _ || d !== _.version || m !== i.toneMapping) && (h.material.needsUpdate = !0, u = _, d = _.version, m = i.toneMapping), h.layers.enableAll(), p.unshift(h, h.geometry, h.material, 0, 0, null)) : _ && _.isTexture && (l === void 0 && (l = new St(
      new Ts(2, 2),
      new Et({
        name: "BackgroundMaterial",
        uniforms: li(Vt.background.uniforms),
        vertexShader: Vt.background.vertexShader,
        fragmentShader: Vt.background.fragmentShader,
        side: un,
        depthTest: !1,
        depthWrite: !1,
        fog: !1
      })
    ), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", {
      get: function() {
        return this.uniforms.t2D.value;
      }
    }), r.update(l)), l.material.uniforms.t2D.value = _, l.material.uniforms.backgroundIntensity.value = f.backgroundIntensity, l.material.toneMapped = _.colorSpace !== Ue, _.matrixAutoUpdate === !0 && _.updateMatrix(), l.material.uniforms.uvTransform.value.copy(_.matrix), (u !== _ || d !== _.version || m !== i.toneMapping) && (l.material.needsUpdate = !0, u = _, d = _.version, m = i.toneMapping), l.layers.enableAll(), p.unshift(l, l.geometry, l.material, 0, 0, null));
  }
  function x(p, f) {
    p.getRGB(Ki, Wo(i)), n.buffers.color.setClear(Ki.r, Ki.g, Ki.b, f, o);
  }
  return {
    getClearColor: function() {
      return a;
    },
    setClearColor: function(p, f = 1) {
      a.set(p), c = f, x(a, c);
    },
    getClearAlpha: function() {
      return c;
    },
    setClearAlpha: function(p) {
      c = p, x(a, c);
    },
    render: g
  };
}
function vf(i, e, t, n) {
  const r = i.getParameter(i.MAX_VERTEX_ATTRIBS), s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"), o = n.isWebGL2 || s !== null, a = {}, c = p(null);
  let l = c, h = !1;
  function u(O, H, ne, K, j) {
    let Q = !1;
    if (o) {
      const ie = x(K, ne, H);
      l !== ie && (l = ie, m(l.object)), Q = f(O, K, ne, j), Q && y(O, K, ne, j);
    } else {
      const ie = H.wireframe === !0;
      (l.geometry !== K.id || l.program !== ne.id || l.wireframe !== ie) && (l.geometry = K.id, l.program = ne.id, l.wireframe = ie, Q = !0);
    }
    j !== null && t.update(j, i.ELEMENT_ARRAY_BUFFER), (Q || h) && (h = !1, N(O, H, ne, K), j !== null && i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.get(j).buffer));
  }
  function d() {
    return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES();
  }
  function m(O) {
    return n.isWebGL2 ? i.bindVertexArray(O) : s.bindVertexArrayOES(O);
  }
  function g(O) {
    return n.isWebGL2 ? i.deleteVertexArray(O) : s.deleteVertexArrayOES(O);
  }
  function x(O, H, ne) {
    const K = ne.wireframe === !0;
    let j = a[O.id];
    j === void 0 && (j = {}, a[O.id] = j);
    let Q = j[H.id];
    Q === void 0 && (Q = {}, j[H.id] = Q);
    let ie = Q[K];
    return ie === void 0 && (ie = p(d()), Q[K] = ie), ie;
  }
  function p(O) {
    const H = [], ne = [], K = [];
    for (let j = 0; j < r; j++)
      H[j] = 0, ne[j] = 0, K[j] = 0;
    return {
      // for backward compatibility on non-VAO support browser
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: H,
      enabledAttributes: ne,
      attributeDivisors: K,
      object: O,
      attributes: {},
      index: null
    };
  }
  function f(O, H, ne, K) {
    const j = l.attributes, Q = H.attributes;
    let ie = 0;
    const pe = ne.getAttributes();
    for (const ce in pe)
      if (pe[ce].location >= 0) {
        const Y = j[ce];
        let ae = Q[ce];
        if (ae === void 0 && (ce === "instanceMatrix" && O.instanceMatrix && (ae = O.instanceMatrix), ce === "instanceColor" && O.instanceColor && (ae = O.instanceColor)), Y === void 0 || Y.attribute !== ae || ae && Y.data !== ae.data)
          return !0;
        ie++;
      }
    return l.attributesNum !== ie || l.index !== K;
  }
  function y(O, H, ne, K) {
    const j = {}, Q = H.attributes;
    let ie = 0;
    const pe = ne.getAttributes();
    for (const ce in pe)
      if (pe[ce].location >= 0) {
        let Y = Q[ce];
        Y === void 0 && (ce === "instanceMatrix" && O.instanceMatrix && (Y = O.instanceMatrix), ce === "instanceColor" && O.instanceColor && (Y = O.instanceColor));
        const ae = {};
        ae.attribute = Y, Y && Y.data && (ae.data = Y.data), j[ce] = ae, ie++;
      }
    l.attributes = j, l.attributesNum = ie, l.index = K;
  }
  function _() {
    const O = l.newAttributes;
    for (let H = 0, ne = O.length; H < ne; H++)
      O[H] = 0;
  }
  function b(O) {
    E(O, 0);
  }
  function E(O, H) {
    const ne = l.newAttributes, K = l.enabledAttributes, j = l.attributeDivisors;
    ne[O] = 1, K[O] === 0 && (i.enableVertexAttribArray(O), K[O] = 1), j[O] !== H && ((n.isWebGL2 ? i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](O, H), j[O] = H);
  }
  function w() {
    const O = l.newAttributes, H = l.enabledAttributes;
    for (let ne = 0, K = H.length; ne < K; ne++)
      H[ne] !== O[ne] && (i.disableVertexAttribArray(ne), H[ne] = 0);
  }
  function q(O, H, ne, K, j, Q) {
    n.isWebGL2 === !0 && (ne === i.INT || ne === i.UNSIGNED_INT) ? i.vertexAttribIPointer(O, H, ne, j, Q) : i.vertexAttribPointer(O, H, ne, K, j, Q);
  }
  function N(O, H, ne, K) {
    if (n.isWebGL2 === !1 && (O.isInstancedMesh || K.isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null)
      return;
    _();
    const j = K.attributes, Q = ne.getAttributes(), ie = H.defaultAttributeValues;
    for (const pe in Q) {
      const ce = Q[pe];
      if (ce.location >= 0) {
        let G = j[pe];
        if (G === void 0 && (pe === "instanceMatrix" && O.instanceMatrix && (G = O.instanceMatrix), pe === "instanceColor" && O.instanceColor && (G = O.instanceColor)), G !== void 0) {
          const Y = G.normalized, ae = G.itemSize, fe = t.get(G);
          if (fe === void 0)
            continue;
          const C = fe.buffer, ye = fe.type, Pe = fe.bytesPerElement;
          if (G.isInterleavedBufferAttribute) {
            const le = G.data, Me = le.stride, $ = G.offset;
            if (le.isInstancedInterleavedBuffer) {
              for (let k = 0; k < ce.locationSize; k++)
                E(ce.location + k, le.meshPerAttribute);
              O.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = le.meshPerAttribute * le.count);
            } else
              for (let k = 0; k < ce.locationSize; k++)
                b(ce.location + k);
            i.bindBuffer(i.ARRAY_BUFFER, C);
            for (let k = 0; k < ce.locationSize; k++)
              q(
                ce.location + k,
                ae / ce.locationSize,
                ye,
                Y,
                Me * Pe,
                ($ + ae / ce.locationSize * k) * Pe
              );
          } else {
            if (G.isInstancedBufferAttribute) {
              for (let le = 0; le < ce.locationSize; le++)
                E(ce.location + le, G.meshPerAttribute);
              O.isInstancedMesh !== !0 && K._maxInstanceCount === void 0 && (K._maxInstanceCount = G.meshPerAttribute * G.count);
            } else
              for (let le = 0; le < ce.locationSize; le++)
                b(ce.location + le);
            i.bindBuffer(i.ARRAY_BUFFER, C);
            for (let le = 0; le < ce.locationSize; le++)
              q(
                ce.location + le,
                ae / ce.locationSize,
                ye,
                Y,
                ae * Pe,
                ae / ce.locationSize * le * Pe
              );
          }
        } else if (ie !== void 0) {
          const Y = ie[pe];
          if (Y !== void 0)
            switch (Y.length) {
              case 2:
                i.vertexAttrib2fv(ce.location, Y);
                break;
              case 3:
                i.vertexAttrib3fv(ce.location, Y);
                break;
              case 4:
                i.vertexAttrib4fv(ce.location, Y);
                break;
              default:
                i.vertexAttrib1fv(ce.location, Y);
            }
        }
      }
    }
    w();
  }
  function v() {
    re();
    for (const O in a) {
      const H = a[O];
      for (const ne in H) {
        const K = H[ne];
        for (const j in K)
          g(K[j].object), delete K[j];
        delete H[ne];
      }
      delete a[O];
    }
  }
  function A(O) {
    if (a[O.id] === void 0)
      return;
    const H = a[O.id];
    for (const ne in H) {
      const K = H[ne];
      for (const j in K)
        g(K[j].object), delete K[j];
      delete H[ne];
    }
    delete a[O.id];
  }
  function V(O) {
    for (const H in a) {
      const ne = a[H];
      if (ne[O.id] === void 0)
        continue;
      const K = ne[O.id];
      for (const j in K)
        g(K[j].object), delete K[j];
      delete ne[O.id];
    }
  }
  function re() {
    U(), h = !0, l !== c && (l = c, m(l.object));
  }
  function U() {
    c.geometry = null, c.program = null, c.wireframe = !1;
  }
  return {
    setup: u,
    reset: re,
    resetDefaultState: U,
    dispose: v,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: V,
    initAttributes: _,
    enableAttribute: b,
    disableUnusedAttributes: w
  };
}
function Mf(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(l) {
    s = l;
  }
  function a(l, h) {
    i.drawArrays(s, l, h), t.update(h, s, 1);
  }
  function c(l, h, u) {
    if (u === 0)
      return;
    let d, m;
    if (r)
      d = i, m = "drawArraysInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), m = "drawArraysInstancedANGLE", d === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    d[m](s, l, h, u), t.update(h, s, u);
  }
  this.setMode = o, this.render = a, this.renderInstances = c;
}
function Sf(i, e, t) {
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
  const l = o || e.has("WEBGL_draw_buffers"), h = t.logarithmicDepthBuffer === !0, u = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS), d = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS), m = i.getParameter(i.MAX_TEXTURE_SIZE), g = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE), x = i.getParameter(i.MAX_VERTEX_ATTRIBS), p = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS), f = i.getParameter(i.MAX_VARYING_VECTORS), y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS), _ = d > 0, b = o || e.has("OES_texture_float"), E = _ && b, w = o ? i.getParameter(i.MAX_SAMPLES) : 0;
  return {
    isWebGL2: o,
    drawBuffers: l,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: a,
    logarithmicDepthBuffer: h,
    maxTextures: u,
    maxVertexTextures: d,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: x,
    maxVertexUniforms: p,
    maxVaryings: f,
    maxFragmentUniforms: y,
    vertexTextures: _,
    floatFragmentTextures: b,
    floatVertexTextures: E,
    maxSamples: w
  };
}
function Ef(i) {
  const e = this;
  let t = null, n = 0, r = !1, s = !1;
  const o = new xn(), a = new Ve(), c = { value: null, needsUpdate: !1 };
  this.uniform = c, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const m = u.length !== 0 || d || // enable state of previous frame - the clipping code has to
    // run another frame in order to reset the state:
    n !== 0 || r;
    return r = d, n = u.length, m;
  }, this.beginShadows = function() {
    s = !0, h(null);
  }, this.endShadows = function() {
    s = !1;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, m) {
    const g = u.clippingPlanes, x = u.clipIntersection, p = u.clipShadows, f = i.get(u);
    if (!r || g === null || g.length === 0 || s && !p)
      s ? h(null) : l();
    else {
      const y = s ? 0 : n, _ = y * 4;
      let b = f.clippingState || null;
      c.value = b, b = h(g, d, _, m);
      for (let E = 0; E !== _; ++E)
        b[E] = t[E];
      f.clippingState = b, this.numIntersection = x ? this.numPlanes : 0, this.numPlanes += y;
    }
  };
  function l() {
    c.value !== t && (c.value = t, c.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, m, g) {
    const x = u !== null ? u.length : 0;
    let p = null;
    if (x !== 0) {
      if (p = c.value, g !== !0 || p === null) {
        const f = m + x * 4, y = d.matrixWorldInverse;
        a.getNormalMatrix(y), (p === null || p.length < f) && (p = new Float32Array(f));
        for (let _ = 0, b = m; _ !== x; ++_, b += 4)
          o.copy(u[_]).applyMatrix4(y, a), o.normal.toArray(p, b), p[b + 3] = o.constant;
      }
      c.value = p, c.needsUpdate = !0;
    }
    return e.numPlanes = x, e.numIntersection = 0, p;
  }
}
function yf(i) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(o, a) {
    return a === os ? o.mapping = si : a === ls && (o.mapping = ai), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === os || a === ls)
        if (e.has(o)) {
          const c = e.get(o).texture;
          return t(c, o.mapping);
        } else {
          const c = o.image;
          if (c && c.height > 0) {
            const l = new Oc(c.height / 2);
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
class lr extends Xo {
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
      const l = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += l * this.view.offsetX, o = s + l * this.view.width, a -= h * this.view.offsetY, c = a - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, o, a, c, this.near, this.far), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
const Jn = 4, Ra = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Mn = 20, Yr = /* @__PURE__ */ new lr(), Ca = /* @__PURE__ */ new Ie();
let jr = null;
const vn = (1 + Math.sqrt(5)) / 2, Zn = 1 / vn, La = [
  /* @__PURE__ */ new R(1, 1, 1),
  /* @__PURE__ */ new R(-1, 1, 1),
  /* @__PURE__ */ new R(1, 1, -1),
  /* @__PURE__ */ new R(-1, 1, -1),
  /* @__PURE__ */ new R(0, vn, Zn),
  /* @__PURE__ */ new R(0, vn, -Zn),
  /* @__PURE__ */ new R(Zn, 0, vn),
  /* @__PURE__ */ new R(-Zn, 0, vn),
  /* @__PURE__ */ new R(vn, Zn, 0),
  /* @__PURE__ */ new R(-vn, Zn, 0)
];
class qa {
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
    jr = this._renderer.getRenderTarget(), this._setSize(256);
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
    this._cubemapMaterial === null && (this._cubemapMaterial = Ia(), this._compileMaterial(this._cubemapMaterial));
  }
  /**
   * Pre-compiles the equirectangular shader. You can get faster start-up by invoking this method during
   * your texture's network fetch for increased concurrency.
   */
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ua(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(jr), e.scissorTest = !1, Ji(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === si || e.mapping === ai ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), jr = this._renderer.getRenderTarget();
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = {
      magFilter: Pt,
      minFilter: Pt,
      generateMipmaps: !1,
      type: Ti,
      format: Bt,
      colorSpace: Xt,
      depthBuffer: !1
    }, r = Da(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Da(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Tf(s)), this._blurMaterial = bf(s, e, t);
    }
    return r;
  }
  _compileMaterial(e) {
    const t = new St(this._lodPlanes[0], e);
    this._renderer.compile(t, Yr);
  }
  _sceneToCubeUV(e, t, n, r) {
    const a = new Rt(90, 1, t, n), c = [1, -1, 1, 1, 1, 1], l = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(Ca), h.toneMapping = nn, h.autoClear = !1;
    const m = new dr({
      name: "PMREM.Background",
      side: pt,
      depthWrite: !1,
      depthTest: !1
    }), g = new St(new Pn(), m);
    let x = !1;
    const p = e.background;
    p ? p.isColor && (m.color.copy(p), e.background = null, x = !0) : (m.color.copy(Ca), x = !0);
    for (let f = 0; f < 6; f++) {
      const y = f % 3;
      y === 0 ? (a.up.set(0, c[f], 0), a.lookAt(l[f], 0, 0)) : y === 1 ? (a.up.set(0, 0, c[f]), a.lookAt(0, l[f], 0)) : (a.up.set(0, c[f], 0), a.lookAt(0, 0, l[f]));
      const _ = this._cubeSize;
      Ji(r, y * _, f > 2 ? _ : 0, _, _), h.setRenderTarget(r), x && h.render(g, a), h.render(e, a);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = p;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, r = e.mapping === si || e.mapping === ai;
    r ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ia()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ua());
    const s = r ? this._cubemapMaterial : this._equirectMaterial, o = new St(this._lodPlanes[0], s), a = s.uniforms;
    a.envMap.value = e;
    const c = this._cubeSize;
    Ji(t, 0, 0, 3 * c, 2 * c), n.setRenderTarget(t), n.render(o, Yr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = La[(r - 1) % La.length];
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
    const h = 3, u = new St(this._lodPlanes[r], l), d = l.uniforms, m = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Mn - 1), x = s / g, p = isFinite(s) ? 1 + Math.floor(h * x) : Mn;
    p > Mn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mn}`);
    const f = [];
    let y = 0;
    for (let q = 0; q < Mn; ++q) {
      const N = q / x, v = Math.exp(-N * N / 2);
      f.push(v), q === 0 ? y += v : q < p && (y += 2 * v);
    }
    for (let q = 0; q < f.length; q++)
      f[q] = f[q] / y;
    d.envMap.value = e.texture, d.samples.value = p, d.weights.value = f, d.latitudinal.value = o === "latitudinal", a && (d.poleAxis.value = a);
    const { _lodMax: _ } = this;
    d.dTheta.value = g, d.mipInt.value = _ - n;
    const b = this._sizeLods[r], E = 3 * b * (r > _ - Jn ? r - _ + Jn : 0), w = 4 * (this._cubeSize - b);
    Ji(t, E, w, 3 * b, 2 * b), c.setRenderTarget(t), c.render(u, Yr);
  }
}
function Tf(i) {
  const e = [], t = [], n = [];
  let r = i;
  const s = i - Jn + 1 + Ra.length;
  for (let o = 0; o < s; o++) {
    const a = Math.pow(2, r);
    t.push(a);
    let c = 1 / a;
    o > i - Jn ? c = Ra[o - i + Jn - 1] : o === 0 && (c = 0), n.push(c);
    const l = 1 / (a - 2), h = -l, u = 1 + l, d = [h, h, u, h, u, u, h, h, u, u, h, u], m = 6, g = 6, x = 3, p = 2, f = 1, y = new Float32Array(x * g * m), _ = new Float32Array(p * g * m), b = new Float32Array(f * g * m);
    for (let w = 0; w < m; w++) {
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
      y.set(v, x * g * w), _.set(d, p * g * w);
      const A = [w, w, w, w, w, w];
      b.set(A, f * g * w);
    }
    const E = new gt();
    E.setAttribute("position", new Wt(y, x)), E.setAttribute("uv", new Wt(_, p)), E.setAttribute("faceIndex", new Wt(b, f)), e.push(E), r > Jn && r--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Da(i, e, t) {
  const n = new zt(i, e, t);
  return n.texture.mapping = hr, n.texture.name = "PMREM.cubeUv", n.scissorTest = !0, n;
}
function Ji(i, e, t, n, r) {
  i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r);
}
function bf(i, e, t) {
  const n = new Float32Array(Mn), r = new R(0, 1, 0);
  return new Et({
    name: "SphericalGaussianBlur",
    defines: {
      n: Mn,
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
    vertexShader: bs(),
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
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ua() {
  return new Et({
    name: "EquirectangularToCubeUV",
    uniforms: {
      envMap: { value: null }
    },
    vertexShader: bs(),
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
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function Ia() {
  return new Et({
    name: "CubemapToCubeUV",
    uniforms: {
      envMap: { value: null },
      flipEnvMap: { value: -1 }
    },
    vertexShader: bs(),
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
    blending: hn,
    depthTest: !1,
    depthWrite: !1
  });
}
function bs() {
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
function Af(i) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(a) {
    if (a && a.isTexture) {
      const c = a.mapping, l = c === os || c === ls, h = c === si || c === ai;
      if (l || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let u = e.get(a);
          return t === null && (t = new qa(i)), u = l ? t.fromEquirectangular(a, u) : t.fromCubemap(a, u), e.set(a, u), u.texture;
        } else {
          if (e.has(a))
            return e.get(a).texture;
          {
            const u = a.image;
            if (l && u && u.height > 0 || h && u && r(u)) {
              t === null && (t = new qa(i));
              const d = l ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, d), a.addEventListener("dispose", s), d.texture;
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
    for (let h = 0; h < l; h++)
      a[h] !== void 0 && c++;
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
function wf(i) {
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
function Pf(i, e, t, n) {
  const r = {}, s = /* @__PURE__ */ new WeakMap();
  function o(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes)
      e.remove(d.attributes[g]);
    d.removeEventListener("dispose", o), delete r[d.id];
    const m = s.get(d);
    m && (e.remove(m), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function a(u, d) {
    return r[d.id] === !0 || (d.addEventListener("dispose", o), r[d.id] = !0, t.memory.geometries++), d;
  }
  function c(u) {
    const d = u.attributes;
    for (const g in d)
      e.update(d[g], i.ARRAY_BUFFER);
    const m = u.morphAttributes;
    for (const g in m) {
      const x = m[g];
      for (let p = 0, f = x.length; p < f; p++)
        e.update(x[p], i.ARRAY_BUFFER);
    }
  }
  function l(u) {
    const d = [], m = u.index, g = u.attributes.position;
    let x = 0;
    if (m !== null) {
      const y = m.array;
      x = m.version;
      for (let _ = 0, b = y.length; _ < b; _ += 3) {
        const E = y[_ + 0], w = y[_ + 1], q = y[_ + 2];
        d.push(E, w, w, q, q, E);
      }
    } else {
      const y = g.array;
      x = g.version;
      for (let _ = 0, b = y.length / 3 - 1; _ < b; _ += 3) {
        const E = _ + 0, w = _ + 1, q = _ + 2;
        d.push(E, w, w, q, q, E);
      }
    }
    const p = new (No(d) ? ko : Vo)(d, 1);
    p.version = x;
    const f = s.get(u);
    f && e.remove(f), s.set(u, p);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const m = u.index;
      m !== null && d.version < m.version && l(u);
    } else
      l(u);
    return s.get(u);
  }
  return {
    get: a,
    update: c,
    getWireframeAttribute: h
  };
}
function Rf(i, e, t, n) {
  const r = n.isWebGL2;
  let s;
  function o(d) {
    s = d;
  }
  let a, c;
  function l(d) {
    a = d.type, c = d.bytesPerElement;
  }
  function h(d, m) {
    i.drawElements(s, m, a, d * c), t.update(m, s, 1);
  }
  function u(d, m, g) {
    if (g === 0)
      return;
    let x, p;
    if (r)
      x = i, p = "drawElementsInstanced";
    else if (x = e.get("ANGLE_instanced_arrays"), p = "drawElementsInstancedANGLE", x === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    x[p](s, m, a, d * c, g), t.update(m, s, g);
  }
  this.setMode = o, this.setIndex = l, this.render = h, this.renderInstances = u;
}
function Cf(i) {
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
function Lf(i, e) {
  return i[0] - e[0];
}
function qf(i, e) {
  return Math.abs(e[1]) - Math.abs(i[1]);
}
function Df(i, e, t) {
  const n = {}, r = new Float32Array(8), s = /* @__PURE__ */ new WeakMap(), o = new je(), a = [];
  for (let l = 0; l < 8; l++)
    a[l] = [l, 0];
  function c(l, h, u) {
    const d = l.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const m = h.morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color, g = m !== void 0 ? m.length : 0;
      let x = s.get(h);
      if (x === void 0 || x.count !== g) {
        let O = function() {
          re.dispose(), s.delete(h), h.removeEventListener("dispose", O);
        };
        x !== void 0 && x.texture.dispose();
        const y = h.morphAttributes.position !== void 0, _ = h.morphAttributes.normal !== void 0, b = h.morphAttributes.color !== void 0, E = h.morphAttributes.position || [], w = h.morphAttributes.normal || [], q = h.morphAttributes.color || [];
        let N = 0;
        y === !0 && (N = 1), _ === !0 && (N = 2), b === !0 && (N = 3);
        let v = h.attributes.position.count * N, A = 1;
        v > e.maxTextureSize && (A = Math.ceil(v / e.maxTextureSize), v = e.maxTextureSize);
        const V = new Float32Array(v * A * 4 * g), re = new Bo(V, v, A, g);
        re.type = En, re.needsUpdate = !0;
        const U = N * 4;
        for (let H = 0; H < g; H++) {
          const ne = E[H], K = w[H], j = q[H], Q = v * A * 4 * H;
          for (let ie = 0; ie < ne.count; ie++) {
            const pe = ie * U;
            y === !0 && (o.fromBufferAttribute(ne, ie), V[Q + pe + 0] = o.x, V[Q + pe + 1] = o.y, V[Q + pe + 2] = o.z, V[Q + pe + 3] = 0), _ === !0 && (o.fromBufferAttribute(K, ie), V[Q + pe + 4] = o.x, V[Q + pe + 5] = o.y, V[Q + pe + 6] = o.z, V[Q + pe + 7] = 0), b === !0 && (o.fromBufferAttribute(j, ie), V[Q + pe + 8] = o.x, V[Q + pe + 9] = o.y, V[Q + pe + 10] = o.z, V[Q + pe + 11] = j.itemSize === 4 ? o.w : 1);
          }
        }
        x = {
          count: g,
          texture: re,
          size: new oe(v, A)
        }, s.set(h, x), h.addEventListener("dispose", O);
      }
      let p = 0;
      for (let y = 0; y < d.length; y++)
        p += d[y];
      const f = h.morphTargetsRelative ? 1 : 1 - p;
      u.getUniforms().setValue(i, "morphTargetBaseInfluence", f), u.getUniforms().setValue(i, "morphTargetInfluences", d), u.getUniforms().setValue(i, "morphTargetsTexture", x.texture, t), u.getUniforms().setValue(i, "morphTargetsTextureSize", x.size);
    } else {
      const m = d === void 0 ? 0 : d.length;
      let g = n[h.id];
      if (g === void 0 || g.length !== m) {
        g = [];
        for (let _ = 0; _ < m; _++)
          g[_] = [_, 0];
        n[h.id] = g;
      }
      for (let _ = 0; _ < m; _++) {
        const b = g[_];
        b[0] = _, b[1] = d[_];
      }
      g.sort(qf);
      for (let _ = 0; _ < 8; _++)
        _ < m && g[_][1] ? (a[_][0] = g[_][0], a[_][1] = g[_][1]) : (a[_][0] = Number.MAX_SAFE_INTEGER, a[_][1] = 0);
      a.sort(Lf);
      const x = h.morphAttributes.position, p = h.morphAttributes.normal;
      let f = 0;
      for (let _ = 0; _ < 8; _++) {
        const b = a[_], E = b[0], w = b[1];
        E !== Number.MAX_SAFE_INTEGER && w ? (x && h.getAttribute("morphTarget" + _) !== x[E] && h.setAttribute("morphTarget" + _, x[E]), p && h.getAttribute("morphNormal" + _) !== p[E] && h.setAttribute("morphNormal" + _, p[E]), r[_] = w, f += w) : (x && h.hasAttribute("morphTarget" + _) === !0 && h.deleteAttribute("morphTarget" + _), p && h.hasAttribute("morphNormal" + _) === !0 && h.deleteAttribute("morphNormal" + _), r[_] = 0);
      }
      const y = h.morphTargetsRelative ? 1 : 1 - f;
      u.getUniforms().setValue(i, "morphTargetBaseInfluence", y), u.getUniforms().setValue(i, "morphTargetInfluences", r);
    }
  }
  return {
    update: c
  };
}
function Uf(i, e, t, n) {
  let r = /* @__PURE__ */ new WeakMap();
  function s(c) {
    const l = n.render.frame, h = c.geometry, u = e.get(c, h);
    return r.get(u) !== l && (e.update(u), r.set(u, l)), c.isInstancedMesh && (c.hasEventListener("dispose", a) === !1 && c.addEventListener("dispose", a), t.update(c.instanceMatrix, i.ARRAY_BUFFER), c.instanceColor !== null && t.update(c.instanceColor, i.ARRAY_BUFFER)), u;
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
const Zo = /* @__PURE__ */ new yt(), Ko = /* @__PURE__ */ new Bo(), Jo = /* @__PURE__ */ new yc(), $o = /* @__PURE__ */ new Yo(), Na = [], Fa = [], Oa = new Float32Array(16), Ba = new Float32Array(9), za = new Float32Array(4);
function ui(i, e, t) {
  const n = i[0];
  if (n <= 0 || n > 0)
    return i;
  const r = e * t;
  let s = Na[r];
  if (s === void 0 && (s = new Float32Array(r), Na[r] = s), e !== 0) {
    n.toArray(s, 0);
    for (let o = 1, a = 0; o !== e; ++o)
      a += t, i[o].toArray(s, a);
  }
  return s;
}
function nt(i, e) {
  if (i.length !== e.length)
    return !1;
  for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t])
      return !1;
  return !0;
}
function it(i, e) {
  for (let t = 0, n = e.length; t < n; t++)
    i[t] = e[t];
}
function mr(i, e) {
  let t = Fa[e];
  t === void 0 && (t = new Int32Array(e), Fa[e] = t);
  for (let n = 0; n !== e; ++n)
    t[n] = i.allocateTextureUnit();
  return t;
}
function If(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e);
}
function Nf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (nt(t, e))
      return;
    i.uniform2fv(this.addr, e), it(t, e);
  }
}
function Ff(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (nt(t, e))
      return;
    i.uniform3fv(this.addr, e), it(t, e);
  }
}
function Of(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (nt(t, e))
      return;
    i.uniform4fv(this.addr, e), it(t, e);
  }
}
function Bf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (nt(t, e))
      return;
    i.uniformMatrix2fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n))
      return;
    za.set(n), i.uniformMatrix2fv(this.addr, !1, za), it(t, n);
  }
}
function zf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (nt(t, e))
      return;
    i.uniformMatrix3fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n))
      return;
    Ba.set(n), i.uniformMatrix3fv(this.addr, !1, Ba), it(t, n);
  }
}
function Gf(i, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (nt(t, e))
      return;
    i.uniformMatrix4fv(this.addr, !1, e), it(t, e);
  } else {
    if (nt(t, n))
      return;
    Oa.set(n), i.uniformMatrix4fv(this.addr, !1, Oa), it(t, n);
  }
}
function Hf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e);
}
function Vf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (nt(t, e))
      return;
    i.uniform2iv(this.addr, e), it(t, e);
  }
}
function kf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (nt(t, e))
      return;
    i.uniform3iv(this.addr, e), it(t, e);
  }
}
function Wf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (nt(t, e))
      return;
    i.uniform4iv(this.addr, e), it(t, e);
  }
}
function Xf(i, e) {
  const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e);
}
function Yf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) && (i.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (nt(t, e))
      return;
    i.uniform2uiv(this.addr, e), it(t, e);
  }
}
function jf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (nt(t, e))
      return;
    i.uniform3uiv(this.addr, e), it(t, e);
  }
}
function Zf(i, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (nt(t, e))
      return;
    i.uniform4uiv(this.addr, e), it(t, e);
  }
}
function Kf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2D(e || Zo, r);
}
function Jf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Jo, r);
}
function $f(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || $o, r);
}
function Qf(i, e, t) {
  const n = this.cache, r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || Ko, r);
}
function ed(i) {
  switch (i) {
    case 5126:
      return If;
    case 35664:
      return Nf;
    case 35665:
      return Ff;
    case 35666:
      return Of;
    case 35674:
      return Bf;
    case 35675:
      return zf;
    case 35676:
      return Gf;
    case 5124:
    case 35670:
      return Hf;
    case 35667:
    case 35671:
      return Vf;
    case 35668:
    case 35672:
      return kf;
    case 35669:
    case 35673:
      return Wf;
    case 5125:
      return Xf;
    case 36294:
      return Yf;
    case 36295:
      return jf;
    case 36296:
      return Zf;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kf;
    case 35679:
    case 36299:
    case 36307:
      return Jf;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $f;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Qf;
  }
}
function td(i, e) {
  i.uniform1fv(this.addr, e);
}
function nd(i, e) {
  const t = ui(e, this.size, 2);
  i.uniform2fv(this.addr, t);
}
function id(i, e) {
  const t = ui(e, this.size, 3);
  i.uniform3fv(this.addr, t);
}
function rd(i, e) {
  const t = ui(e, this.size, 4);
  i.uniform4fv(this.addr, t);
}
function sd(i, e) {
  const t = ui(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t);
}
function ad(i, e) {
  const t = ui(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t);
}
function od(i, e) {
  const t = ui(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t);
}
function ld(i, e) {
  i.uniform1iv(this.addr, e);
}
function cd(i, e) {
  i.uniform2iv(this.addr, e);
}
function hd(i, e) {
  i.uniform3iv(this.addr, e);
}
function ud(i, e) {
  i.uniform4iv(this.addr, e);
}
function fd(i, e) {
  i.uniform1uiv(this.addr, e);
}
function dd(i, e) {
  i.uniform2uiv(this.addr, e);
}
function md(i, e) {
  i.uniform3uiv(this.addr, e);
}
function pd(i, e) {
  i.uniform4uiv(this.addr, e);
}
function gd(i, e, t) {
  const n = this.cache, r = e.length, s = mr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2D(e[o] || Zo, s[o]);
}
function _d(i, e, t) {
  const n = this.cache, r = e.length, s = mr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture3D(e[o] || Jo, s[o]);
}
function xd(i, e, t) {
  const n = this.cache, r = e.length, s = mr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTextureCube(e[o] || $o, s[o]);
}
function vd(i, e, t) {
  const n = this.cache, r = e.length, s = mr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s));
  for (let o = 0; o !== r; ++o)
    t.setTexture2DArray(e[o] || Ko, s[o]);
}
function Md(i) {
  switch (i) {
    case 5126:
      return td;
    case 35664:
      return nd;
    case 35665:
      return id;
    case 35666:
      return rd;
    case 35674:
      return sd;
    case 35675:
      return ad;
    case 35676:
      return od;
    case 5124:
    case 35670:
      return ld;
    case 35667:
    case 35671:
      return cd;
    case 35668:
    case 35672:
      return hd;
    case 35669:
    case 35673:
      return ud;
    case 5125:
      return fd;
    case 36294:
      return dd;
    case 36295:
      return md;
    case 36296:
      return pd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return gd;
    case 35679:
    case 36299:
    case 36307:
      return _d;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return xd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return vd;
  }
}
class Sd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.setValue = ed(t.type);
  }
}
class Ed {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.size = t.size, this.setValue = Md(t.type);
  }
}
class yd {
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
const Zr = /(\w+)(\])?(\[|\.)?/g;
function Ga(i, e) {
  i.seq.push(e), i.map[e.id] = e;
}
function Td(i, e, t) {
  const n = i.name, r = n.length;
  for (Zr.lastIndex = 0; ; ) {
    const s = Zr.exec(n), o = Zr.lastIndex;
    let a = s[1];
    const c = s[2] === "]", l = s[3];
    if (c && (a = a | 0), l === void 0 || l === "[" && o + 2 === r) {
      Ga(t, l === void 0 ? new Sd(a, i, e) : new Ed(a, i, e));
      break;
    } else {
      let u = t.map[a];
      u === void 0 && (u = new yd(a), Ga(t, u)), t = u;
    }
  }
}
class rr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < n; ++r) {
      const s = e.getActiveUniform(t, r), o = e.getUniformLocation(t, s.name);
      Td(s, o, this);
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
function Ha(i, e, t) {
  const n = i.createShader(e);
  return i.shaderSource(n, t), i.compileShader(n), n;
}
let bd = 0;
function Ad(i, e) {
  const t = i.split(`
`), n = [], r = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let o = r; o < s; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function wd(i) {
  switch (i) {
    case Xt:
      return ["Linear", "( value )"];
    case Ue:
      return ["sRGB", "( value )"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space:", i), ["Linear", "( value )"];
  }
}
function Va(i, e, t) {
  const n = i.getShaderParameter(e, i.COMPILE_STATUS), r = i.getShaderInfoLog(e).trim();
  if (n && r === "")
    return "";
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const o = parseInt(s[1]);
    return t.toUpperCase() + `

` + r + `

` + Ad(i.getShaderSource(e), o);
  } else
    return r;
}
function Pd(i, e) {
  const t = wd(e);
  return "vec4 " + i + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Rd(i, e) {
  let t;
  switch (e) {
    case Vl:
      t = "Linear";
      break;
    case kl:
      t = "Reinhard";
      break;
    case Wl:
      t = "OptimizedCineon";
      break;
    case Xl:
      t = "ACESFilmic";
      break;
    case Yl:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + i + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
function Cd(i) {
  return [
    i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i.normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ? "#extension GL_OES_standard_derivatives : enable" : "",
    (i.extensionFragDepth || i.logarithmicDepthBuffer) && i.rendererExtensionFragDepth ? "#extension GL_EXT_frag_depth : enable" : "",
    i.extensionDrawBuffers && i.rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "",
    (i.extensionShaderTextureLOD || i.envMap || i.transmission) && i.rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(vi).join(`
`);
}
function Ld(i) {
  const e = [];
  for (const t in i) {
    const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function qd(i, e) {
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
function vi(i) {
  return i !== "";
}
function ka(i, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Wa(i, e) {
  return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const Dd = /^[ \t]*#include +<([\w\d./]+)>/gm;
function ds(i) {
  return i.replace(Dd, Ud);
}
function Ud(i, e) {
  const t = Fe[e];
  if (t === void 0)
    throw new Error("Can not resolve #include <" + e + ">");
  return ds(t);
}
const Id = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Xa(i) {
  return i.replace(Id, Nd);
}
function Nd(i, e, t, n) {
  let r = "";
  for (let s = parseInt(e); s < parseInt(t); s++)
    r += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ya(i) {
  let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;";
  return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function Fd(i) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return i.shadowMapType === wo ? e = "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Sl ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i.shadowMapType === tn && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function Od(i) {
  let e = "ENVMAP_TYPE_CUBE";
  if (i.envMap)
    switch (i.envMapMode) {
      case si:
      case ai:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case hr:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Bd(i) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (i.envMap)
    switch (i.envMapMode) {
      case ai:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function zd(i) {
  let e = "ENVMAP_BLENDING_NONE";
  if (i.envMap)
    switch (i.combine) {
      case Es:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Gl:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case Hl:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Gd(i) {
  const e = i.envMapCubeUVHeight;
  if (e === null)
    return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n, maxMip: t };
}
function Hd(i, e, t, n) {
  const r = i.getContext(), s = t.defines;
  let o = t.vertexShader, a = t.fragmentShader;
  const c = Fd(t), l = Od(t), h = Bd(t), u = zd(t), d = Gd(t), m = t.isWebGL2 ? "" : Cd(t), g = Ld(s), x = r.createProgram();
  let p, f, y = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (p = [
    g
  ].filter(vi).join(`
`), p.length > 0 && (p += `
`), f = [
    m,
    g
  ].filter(vi).join(`
`), f.length > 0 && (f += `
`)) : (p = [
    Ya(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.instancing ? "#define USE_INSTANCING" : "",
    t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + h : "",
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
  ].filter(vi).join(`
`), f = [
    m,
    Ya(t),
    "#define SHADER_NAME " + t.shaderName,
    g,
    t.useFog && t.fog ? "#define USE_FOG" : "",
    t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "",
    t.matcap ? "#define USE_MATCAP" : "",
    t.envMap ? "#define USE_ENVMAP" : "",
    t.envMap ? "#define " + l : "",
    t.envMap ? "#define " + h : "",
    t.envMap ? "#define " + u : "",
    d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
    d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
    d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
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
    t.toneMapping !== nn ? "#define TONE_MAPPING" : "",
    t.toneMapping !== nn ? Fe.tonemapping_pars_fragment : "",
    // this code is required here because it is used by the toneMapping() function defined below
    t.toneMapping !== nn ? Rd("toneMapping", t.toneMapping) : "",
    t.dithering ? "#define DITHERING" : "",
    t.opaque ? "#define OPAQUE" : "",
    Fe.encodings_pars_fragment,
    // this code is required here because it is used by the various encoding/decoding function defined below
    Pd("linearToOutputTexel", t.outputColorSpace),
    t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
    `
`
  ].filter(vi).join(`
`)), o = ds(o), o = ka(o, t), o = Wa(o, t), a = ds(a), a = ka(a, t), a = Wa(a, t), o = Xa(o), a = Xa(a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (y = `#version 300 es
`, p = [
    "precision mediump sampler2DArray;",
    "#define attribute in",
    "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + p, f = [
    "#define varying in",
    t.glslVersion === fa ? "" : "layout(location = 0) out highp vec4 pc_fragColor;",
    t.glslVersion === fa ? "" : "#define gl_FragColor pc_fragColor",
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
` + f);
  const _ = y + p + o, b = y + f + a, E = Ha(r, r.VERTEX_SHADER, _), w = Ha(r, r.FRAGMENT_SHADER, b);
  if (r.attachShader(x, E), r.attachShader(x, w), t.index0AttributeName !== void 0 ? r.bindAttribLocation(x, 0, t.index0AttributeName) : t.morphTargets === !0 && r.bindAttribLocation(x, 0, "position"), r.linkProgram(x), i.debug.checkShaderErrors) {
    const v = r.getProgramInfoLog(x).trim(), A = r.getShaderInfoLog(E).trim(), V = r.getShaderInfoLog(w).trim();
    let re = !0, U = !0;
    if (r.getProgramParameter(x, r.LINK_STATUS) === !1)
      if (re = !1, typeof i.debug.onShaderError == "function")
        i.debug.onShaderError(r, x, E, w);
      else {
        const O = Va(r, E, "vertex"), H = Va(r, w, "fragment");
        console.error(
          "THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(x, r.VALIDATE_STATUS) + `

Program Info Log: ` + v + `
` + O + `
` + H
        );
      }
    else
      v !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", v) : (A === "" || V === "") && (U = !1);
    U && (this.diagnostics = {
      runnable: re,
      programLog: v,
      vertexShader: {
        log: A,
        prefix: p
      },
      fragmentShader: {
        log: V,
        prefix: f
      }
    });
  }
  r.deleteShader(E), r.deleteShader(w);
  let q;
  this.getUniforms = function() {
    return q === void 0 && (q = new rr(r, x)), q;
  };
  let N;
  return this.getAttributes = function() {
    return N === void 0 && (N = qd(r, x)), N;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), r.deleteProgram(x), this.program = void 0;
  }, this.name = t.shaderName, this.id = bd++, this.cacheKey = e, this.usedTimes = 1, this.program = x, this.vertexShader = E, this.fragmentShader = w, this;
}
let Vd = 0;
class kd {
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
    return n === void 0 && (n = new Wd(e), t.set(e, n)), n;
  }
}
class Wd {
  constructor(e) {
    this.id = Vd++, this.code = e, this.usedTimes = 0;
  }
}
function Xd(i, e, t, n, r, s, o) {
  const a = new Go(), c = new kd(), l = [], h = r.isWebGL2, u = r.logarithmicDepthBuffer, d = r.vertexTextures;
  let m = r.precision;
  const g = {
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
  function x(v) {
    return v === 1 ? "uv1" : v === 2 ? "uv2" : v === 3 ? "uv3" : "uv";
  }
  function p(v, A, V, re, U) {
    const O = re.fog, H = U.geometry, ne = v.isMeshStandardMaterial ? re.environment : null, K = (v.isMeshStandardMaterial ? t : e).get(v.envMap || ne), j = K && K.mapping === hr ? K.image.height : null, Q = g[v.type];
    v.precision !== null && (m = r.getMaxPrecision(v.precision), m !== v.precision && console.warn("THREE.WebGLProgram.getParameters:", v.precision, "not supported, using", m, "instead."));
    const ie = H.morphAttributes.position || H.morphAttributes.normal || H.morphAttributes.color, pe = ie !== void 0 ? ie.length : 0;
    let ce = 0;
    H.morphAttributes.position !== void 0 && (ce = 1), H.morphAttributes.normal !== void 0 && (ce = 2), H.morphAttributes.color !== void 0 && (ce = 3);
    let G, Y, ae, fe;
    if (Q) {
      const Xe = Vt[Q];
      G = Xe.vertexShader, Y = Xe.fragmentShader;
    } else
      G = v.vertexShader, Y = v.fragmentShader, c.update(v), ae = c.getVertexShaderID(v), fe = c.getFragmentShaderID(v);
    const C = i.getRenderTarget(), ye = U.isInstancedMesh === !0, Pe = !!v.map, le = !!v.matcap, Me = !!K, $ = !!v.aoMap, k = !!v.lightMap, te = !!v.bumpMap, ge = !!v.normalMap, he = !!v.displacementMap, Ae = !!v.emissiveMap, we = !!v.metalnessMap, Se = !!v.roughnessMap, Le = v.clearcoat > 0, Oe = v.iridescence > 0, T = v.sheen > 0, M = v.transmission > 0, z = Le && !!v.clearcoatMap, D = Le && !!v.clearcoatNormalMap, ee = Le && !!v.clearcoatRoughnessMap, ue = Oe && !!v.iridescenceMap, P = Oe && !!v.iridescenceThicknessMap, J = T && !!v.sheenColorMap, B = T && !!v.sheenRoughnessMap, de = !!v.specularMap, ve = !!v.specularColorMap, Te = !!v.specularIntensityMap, _e = M && !!v.transmissionMap, Ee = M && !!v.thicknessMap, qe = !!v.gradientMap, Be = !!v.alphaMap, Je = v.alphaTest > 0, L = !!v.extensions, W = !!H.attributes.uv1, se = !!H.attributes.uv2, xe = !!H.attributes.uv3;
    return {
      isWebGL2: h,
      shaderID: Q,
      shaderName: v.type,
      vertexShader: G,
      fragmentShader: Y,
      defines: v.defines,
      customVertexShaderID: ae,
      customFragmentShaderID: fe,
      isRawShaderMaterial: v.isRawShaderMaterial === !0,
      glslVersion: v.glslVersion,
      precision: m,
      instancing: ye,
      instancingColor: ye && U.instanceColor !== null,
      supportsVertexTextures: d,
      outputColorSpace: C === null ? i.outputColorSpace : C.isXRRenderTarget === !0 ? C.texture.colorSpace : Xt,
      map: Pe,
      matcap: le,
      envMap: Me,
      envMapMode: Me && K.mapping,
      envMapCubeUVHeight: j,
      aoMap: $,
      lightMap: k,
      bumpMap: te,
      normalMap: ge,
      displacementMap: d && he,
      emissiveMap: Ae,
      normalMapObjectSpace: ge && v.normalMapType === fc,
      normalMapTangentSpace: ge && v.normalMapType === Do,
      metalnessMap: we,
      roughnessMap: Se,
      clearcoat: Le,
      clearcoatMap: z,
      clearcoatNormalMap: D,
      clearcoatRoughnessMap: ee,
      iridescence: Oe,
      iridescenceMap: ue,
      iridescenceThicknessMap: P,
      sheen: T,
      sheenColorMap: J,
      sheenRoughnessMap: B,
      specularMap: de,
      specularColorMap: ve,
      specularIntensityMap: Te,
      transmission: M,
      transmissionMap: _e,
      thicknessMap: Ee,
      gradientMap: qe,
      opaque: v.transparent === !1 && v.blending === Qn,
      alphaMap: Be,
      alphaTest: Je,
      combine: v.combine,
      //
      mapUv: Pe && x(v.map.channel),
      aoMapUv: $ && x(v.aoMap.channel),
      lightMapUv: k && x(v.lightMap.channel),
      bumpMapUv: te && x(v.bumpMap.channel),
      normalMapUv: ge && x(v.normalMap.channel),
      displacementMapUv: he && x(v.displacementMap.channel),
      emissiveMapUv: Ae && x(v.emissiveMap.channel),
      metalnessMapUv: we && x(v.metalnessMap.channel),
      roughnessMapUv: Se && x(v.roughnessMap.channel),
      clearcoatMapUv: z && x(v.clearcoatMap.channel),
      clearcoatNormalMapUv: D && x(v.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ee && x(v.clearcoatRoughnessMap.channel),
      iridescenceMapUv: ue && x(v.iridescenceMap.channel),
      iridescenceThicknessMapUv: P && x(v.iridescenceThicknessMap.channel),
      sheenColorMapUv: J && x(v.sheenColorMap.channel),
      sheenRoughnessMapUv: B && x(v.sheenRoughnessMap.channel),
      specularMapUv: de && x(v.specularMap.channel),
      specularColorMapUv: ve && x(v.specularColorMap.channel),
      specularIntensityMapUv: Te && x(v.specularIntensityMap.channel),
      transmissionMapUv: _e && x(v.transmissionMap.channel),
      thicknessMapUv: Ee && x(v.thicknessMap.channel),
      alphaMapUv: Be && x(v.alphaMap.channel),
      //
      vertexTangents: ge && !!H.attributes.tangent,
      vertexColors: v.vertexColors,
      vertexAlphas: v.vertexColors === !0 && !!H.attributes.color && H.attributes.color.itemSize === 4,
      vertexUv1s: W,
      vertexUv2s: se,
      vertexUv3s: xe,
      pointsUvs: U.isPoints === !0 && !!H.attributes.uv && (Pe || Be),
      fog: !!O,
      useFog: v.fog === !0,
      fogExp2: O && O.isFogExp2,
      flatShading: v.flatShading === !0,
      sizeAttenuation: v.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      skinning: U.isSkinnedMesh === !0,
      morphTargets: H.morphAttributes.position !== void 0,
      morphNormals: H.morphAttributes.normal !== void 0,
      morphColors: H.morphAttributes.color !== void 0,
      morphTargetsCount: pe,
      morphTextureStride: ce,
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
      shadowMapEnabled: i.shadowMap.enabled && V.length > 0,
      shadowMapType: i.shadowMap.type,
      toneMapping: v.toneMapped ? i.toneMapping : nn,
      useLegacyLights: i.useLegacyLights,
      premultipliedAlpha: v.premultipliedAlpha,
      doubleSided: v.side === kt,
      flipSided: v.side === pt,
      useDepthPacking: v.depthPacking >= 0,
      depthPacking: v.depthPacking || 0,
      index0AttributeName: v.index0AttributeName,
      extensionDerivatives: L && v.extensions.derivatives === !0,
      extensionFragDepth: L && v.extensions.fragDepth === !0,
      extensionDrawBuffers: L && v.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: L && v.extensions.shaderTextureLOD === !0,
      rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: v.customProgramCacheKey()
    };
  }
  function f(v) {
    const A = [];
    if (v.shaderID ? A.push(v.shaderID) : (A.push(v.customVertexShaderID), A.push(v.customFragmentShaderID)), v.defines !== void 0)
      for (const V in v.defines)
        A.push(V), A.push(v.defines[V]);
    return v.isRawShaderMaterial === !1 && (y(A, v), _(A, v), A.push(i.outputColorSpace)), A.push(v.customProgramCacheKey), A.join();
  }
  function y(v, A) {
    v.push(A.precision), v.push(A.outputColorSpace), v.push(A.envMapMode), v.push(A.envMapCubeUVHeight), v.push(A.mapUv), v.push(A.alphaMapUv), v.push(A.lightMapUv), v.push(A.aoMapUv), v.push(A.bumpMapUv), v.push(A.normalMapUv), v.push(A.displacementMapUv), v.push(A.emissiveMapUv), v.push(A.metalnessMapUv), v.push(A.roughnessMapUv), v.push(A.clearcoatMapUv), v.push(A.clearcoatNormalMapUv), v.push(A.clearcoatRoughnessMapUv), v.push(A.iridescenceMapUv), v.push(A.iridescenceThicknessMapUv), v.push(A.sheenColorMapUv), v.push(A.sheenRoughnessMapUv), v.push(A.specularMapUv), v.push(A.specularColorMapUv), v.push(A.specularIntensityMapUv), v.push(A.transmissionMapUv), v.push(A.thicknessMapUv), v.push(A.combine), v.push(A.fogExp2), v.push(A.sizeAttenuation), v.push(A.morphTargetsCount), v.push(A.morphAttributeCount), v.push(A.numDirLights), v.push(A.numPointLights), v.push(A.numSpotLights), v.push(A.numSpotLightMaps), v.push(A.numHemiLights), v.push(A.numRectAreaLights), v.push(A.numDirLightShadows), v.push(A.numPointLightShadows), v.push(A.numSpotLightShadows), v.push(A.numSpotLightShadowsWithMaps), v.push(A.shadowMapType), v.push(A.toneMapping), v.push(A.numClippingPlanes), v.push(A.numClipIntersection), v.push(A.depthPacking);
  }
  function _(v, A) {
    a.disableAll(), A.isWebGL2 && a.enable(0), A.supportsVertexTextures && a.enable(1), A.instancing && a.enable(2), A.instancingColor && a.enable(3), A.matcap && a.enable(4), A.envMap && a.enable(5), A.normalMapObjectSpace && a.enable(6), A.normalMapTangentSpace && a.enable(7), A.clearcoat && a.enable(8), A.iridescence && a.enable(9), A.alphaTest && a.enable(10), A.vertexColors && a.enable(11), A.vertexAlphas && a.enable(12), A.vertexUv1s && a.enable(13), A.vertexUv2s && a.enable(14), A.vertexUv3s && a.enable(15), A.vertexTangents && a.enable(16), v.push(a.mask), a.disableAll(), A.fog && a.enable(0), A.useFog && a.enable(1), A.flatShading && a.enable(2), A.logarithmicDepthBuffer && a.enable(3), A.skinning && a.enable(4), A.morphTargets && a.enable(5), A.morphNormals && a.enable(6), A.morphColors && a.enable(7), A.premultipliedAlpha && a.enable(8), A.shadowMapEnabled && a.enable(9), A.useLegacyLights && a.enable(10), A.doubleSided && a.enable(11), A.flipSided && a.enable(12), A.useDepthPacking && a.enable(13), A.dithering && a.enable(14), A.transmission && a.enable(15), A.sheen && a.enable(16), A.opaque && a.enable(17), A.pointsUvs && a.enable(18), v.push(a.mask);
  }
  function b(v) {
    const A = g[v.type];
    let V;
    if (A) {
      const re = Vt[A];
      V = or.clone(re.uniforms);
    } else
      V = v.uniforms;
    return V;
  }
  function E(v, A) {
    let V;
    for (let re = 0, U = l.length; re < U; re++) {
      const O = l[re];
      if (O.cacheKey === A) {
        V = O, ++V.usedTimes;
        break;
      }
    }
    return V === void 0 && (V = new Hd(i, A, v, s), l.push(V)), V;
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
    getParameters: p,
    getProgramCacheKey: f,
    getUniforms: b,
    acquireProgram: E,
    releaseProgram: w,
    releaseShaderCache: q,
    // Exposed for resource monitoring & error feedback via renderer.info:
    programs: l,
    dispose: N
  };
}
function Yd() {
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
function jd(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material.id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id;
}
function ja(i, e) {
  return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i.renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i.id - e.id;
}
function Za() {
  const i = [];
  let e = 0;
  const t = [], n = [], r = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, r.length = 0;
  }
  function o(u, d, m, g, x, p) {
    let f = i[e];
    return f === void 0 ? (f = {
      id: u.id,
      object: u,
      geometry: d,
      material: m,
      groupOrder: g,
      renderOrder: u.renderOrder,
      z: x,
      group: p
    }, i[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = m, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = x, f.group = p), e++, f;
  }
  function a(u, d, m, g, x, p) {
    const f = o(u, d, m, g, x, p);
    m.transmission > 0 ? n.push(f) : m.transparent === !0 ? r.push(f) : t.push(f);
  }
  function c(u, d, m, g, x, p) {
    const f = o(u, d, m, g, x, p);
    m.transmission > 0 ? n.unshift(f) : m.transparent === !0 ? r.unshift(f) : t.unshift(f);
  }
  function l(u, d) {
    t.length > 1 && t.sort(u || jd), n.length > 1 && n.sort(d || ja), r.length > 1 && r.sort(d || ja);
  }
  function h() {
    for (let u = e, d = i.length; u < d; u++) {
      const m = i[u];
      if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group = null;
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: r,
    init: s,
    push: a,
    unshift: c,
    finish: h,
    sort: l
  };
}
function Zd() {
  let i = /* @__PURE__ */ new WeakMap();
  function e(n, r) {
    const s = i.get(n);
    let o;
    return s === void 0 ? (o = new Za(), i.set(n, [o])) : r >= s.length ? (o = new Za(), s.push(o)) : o = s[r], o;
  }
  function t() {
    i = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: e,
    dispose: t
  };
}
function Kd() {
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
            color: new Ie()
          };
          break;
        case "SpotLight":
          t = {
            position: new R(),
            direction: new R(),
            color: new Ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0
          };
          break;
        case "PointLight":
          t = {
            position: new R(),
            color: new Ie(),
            distance: 0,
            decay: 0
          };
          break;
        case "HemisphereLight":
          t = {
            direction: new R(),
            skyColor: new Ie(),
            groundColor: new Ie()
          };
          break;
        case "RectAreaLight":
          t = {
            color: new Ie(),
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
function Jd() {
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
            shadowMapSize: new oe()
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new oe()
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new oe(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3
          };
          break;
      }
      return i[e.id] = t, t;
    }
  };
}
let $d = 0;
function Qd(i, e) {
  return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i.map ? 1 : 0);
}
function em(i, e) {
  const t = new Kd(), n = Jd(), r = {
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
  for (let h = 0; h < 9; h++)
    r.probe.push(new R());
  const s = new R(), o = new Ke(), a = new Ke();
  function c(h, u) {
    let d = 0, m = 0, g = 0;
    for (let V = 0; V < 9; V++)
      r.probe[V].set(0, 0, 0);
    let x = 0, p = 0, f = 0, y = 0, _ = 0, b = 0, E = 0, w = 0, q = 0, N = 0;
    h.sort(Qd);
    const v = u === !0 ? Math.PI : 1;
    for (let V = 0, re = h.length; V < re; V++) {
      const U = h[V], O = U.color, H = U.intensity, ne = U.distance, K = U.shadow && U.shadow.map ? U.shadow.map.texture : null;
      if (U.isAmbientLight)
        d += O.r * H * v, m += O.g * H * v, g += O.b * H * v;
      else if (U.isLightProbe)
        for (let j = 0; j < 9; j++)
          r.probe[j].addScaledVector(U.sh.coefficients[j], H);
      else if (U.isDirectionalLight) {
        const j = t.get(U);
        if (j.color.copy(U.color).multiplyScalar(U.intensity * v), U.castShadow) {
          const Q = U.shadow, ie = n.get(U);
          ie.shadowBias = Q.bias, ie.shadowNormalBias = Q.normalBias, ie.shadowRadius = Q.radius, ie.shadowMapSize = Q.mapSize, r.directionalShadow[x] = ie, r.directionalShadowMap[x] = K, r.directionalShadowMatrix[x] = U.shadow.matrix, b++;
        }
        r.directional[x] = j, x++;
      } else if (U.isSpotLight) {
        const j = t.get(U);
        j.position.setFromMatrixPosition(U.matrixWorld), j.color.copy(O).multiplyScalar(H * v), j.distance = ne, j.coneCos = Math.cos(U.angle), j.penumbraCos = Math.cos(U.angle * (1 - U.penumbra)), j.decay = U.decay, r.spot[f] = j;
        const Q = U.shadow;
        if (U.map && (r.spotLightMap[q] = U.map, q++, Q.updateMatrices(U), U.castShadow && N++), r.spotLightMatrix[f] = Q.matrix, U.castShadow) {
          const ie = n.get(U);
          ie.shadowBias = Q.bias, ie.shadowNormalBias = Q.normalBias, ie.shadowRadius = Q.radius, ie.shadowMapSize = Q.mapSize, r.spotShadow[f] = ie, r.spotShadowMap[f] = K, w++;
        }
        f++;
      } else if (U.isRectAreaLight) {
        const j = t.get(U);
        j.color.copy(O).multiplyScalar(H), j.halfWidth.set(U.width * 0.5, 0, 0), j.halfHeight.set(0, U.height * 0.5, 0), r.rectArea[y] = j, y++;
      } else if (U.isPointLight) {
        const j = t.get(U);
        if (j.color.copy(U.color).multiplyScalar(U.intensity * v), j.distance = U.distance, j.decay = U.decay, U.castShadow) {
          const Q = U.shadow, ie = n.get(U);
          ie.shadowBias = Q.bias, ie.shadowNormalBias = Q.normalBias, ie.shadowRadius = Q.radius, ie.shadowMapSize = Q.mapSize, ie.shadowCameraNear = Q.camera.near, ie.shadowCameraFar = Q.camera.far, r.pointShadow[p] = ie, r.pointShadowMap[p] = K, r.pointShadowMatrix[p] = U.shadow.matrix, E++;
        }
        r.point[p] = j, p++;
      } else if (U.isHemisphereLight) {
        const j = t.get(U);
        j.skyColor.copy(U.color).multiplyScalar(H * v), j.groundColor.copy(U.groundColor).multiplyScalar(H * v), r.hemi[_] = j, _++;
      }
    }
    y > 0 && (e.isWebGL2 || i.has("OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = me.LTC_FLOAT_1, r.rectAreaLTC2 = me.LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = me.LTC_HALF_1, r.rectAreaLTC2 = me.LTC_HALF_2) : console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[0] = d, r.ambient[1] = m, r.ambient[2] = g;
    const A = r.hash;
    (A.directionalLength !== x || A.pointLength !== p || A.spotLength !== f || A.rectAreaLength !== y || A.hemiLength !== _ || A.numDirectionalShadows !== b || A.numPointShadows !== E || A.numSpotShadows !== w || A.numSpotMaps !== q) && (r.directional.length = x, r.spot.length = f, r.rectArea.length = y, r.point.length = p, r.hemi.length = _, r.directionalShadow.length = b, r.directionalShadowMap.length = b, r.pointShadow.length = E, r.pointShadowMap.length = E, r.spotShadow.length = w, r.spotShadowMap.length = w, r.directionalShadowMatrix.length = b, r.pointShadowMatrix.length = E, r.spotLightMatrix.length = w + q - N, r.spotLightMap.length = q, r.numSpotLightShadowsWithMaps = N, A.directionalLength = x, A.pointLength = p, A.spotLength = f, A.rectAreaLength = y, A.hemiLength = _, A.numDirectionalShadows = b, A.numPointShadows = E, A.numSpotShadows = w, A.numSpotMaps = q, r.version = $d++);
  }
  function l(h, u) {
    let d = 0, m = 0, g = 0, x = 0, p = 0;
    const f = u.matrixWorldInverse;
    for (let y = 0, _ = h.length; y < _; y++) {
      const b = h[y];
      if (b.isDirectionalLight) {
        const E = r.directional[d];
        E.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(f), d++;
      } else if (b.isSpotLight) {
        const E = r.spot[g];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(f), E.direction.setFromMatrixPosition(b.matrixWorld), s.setFromMatrixPosition(b.target.matrixWorld), E.direction.sub(s), E.direction.transformDirection(f), g++;
      } else if (b.isRectAreaLight) {
        const E = r.rectArea[x];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(f), a.identity(), o.copy(b.matrixWorld), o.premultiply(f), a.extractRotation(o), E.halfWidth.set(b.width * 0.5, 0, 0), E.halfHeight.set(0, b.height * 0.5, 0), E.halfWidth.applyMatrix4(a), E.halfHeight.applyMatrix4(a), x++;
      } else if (b.isPointLight) {
        const E = r.point[m];
        E.position.setFromMatrixPosition(b.matrixWorld), E.position.applyMatrix4(f), m++;
      } else if (b.isHemisphereLight) {
        const E = r.hemi[p];
        E.direction.setFromMatrixPosition(b.matrixWorld), E.direction.transformDirection(f), p++;
      }
    }
  }
  return {
    setup: c,
    setupView: l,
    state: r
  };
}
function Ka(i, e) {
  const t = new em(i, e), n = [], r = [];
  function s() {
    n.length = 0, r.length = 0;
  }
  function o(u) {
    n.push(u);
  }
  function a(u) {
    r.push(u);
  }
  function c(u) {
    t.setup(n, u);
  }
  function l(u) {
    t.setupView(n, u);
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
function tm(i, e) {
  let t = /* @__PURE__ */ new WeakMap();
  function n(s, o = 0) {
    const a = t.get(s);
    let c;
    return a === void 0 ? (c = new Ka(i, e), t.set(s, [c])) : o >= a.length ? (c = new Ka(i, e), a.push(c)) : c = a[o], c;
  }
  function r() {
    t = /* @__PURE__ */ new WeakMap();
  }
  return {
    get: n,
    dispose: r
  };
}
class nm extends hi {
  constructor(e) {
    super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this.depthPacking = hc, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class im extends hi {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
const rm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, sm = `uniform sampler2D shadow_pass;
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
function am(i, e, t) {
  let n = new ys();
  const r = new oe(), s = new oe(), o = new je(), a = new nm({ depthPacking: uc }), c = new im(), l = {}, h = t.maxTextureSize, u = { [un]: pt, [pt]: un, [kt]: kt }, d = new Et({
    defines: {
      VSM_SAMPLES: 8
    },
    uniforms: {
      shadow_pass: { value: null },
      resolution: { value: new oe() },
      radius: { value: 4 }
    },
    vertexShader: rm,
    fragmentShader: sm
  }), m = d.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new gt();
  g.setAttribute(
    "position",
    new Wt(
      new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]),
      3
    )
  );
  const x = new St(g, d), p = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = wo;
  let f = this.type;
  this.render = function(E, w, q) {
    if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || E.length === 0)
      return;
    const N = i.getRenderTarget(), v = i.getActiveCubeFace(), A = i.getActiveMipmapLevel(), V = i.state;
    V.setBlending(hn), V.buffers.color.setClear(1, 1, 1, 1), V.buffers.depth.setTest(!0), V.setScissorTest(!1);
    const re = f !== tn && this.type === tn, U = f === tn && this.type !== tn;
    for (let O = 0, H = E.length; O < H; O++) {
      const ne = E[O], K = ne.shadow;
      if (K === void 0) {
        console.warn("THREE.WebGLShadowMap:", ne, "has no shadow.");
        continue;
      }
      if (K.autoUpdate === !1 && K.needsUpdate === !1)
        continue;
      r.copy(K.mapSize);
      const j = K.getFrameExtents();
      if (r.multiply(j), s.copy(K.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / j.x), r.x = s.x * j.x, K.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / j.y), r.y = s.y * j.y, K.mapSize.y = s.y)), K.map === null || re === !0 || U === !0) {
        const ie = this.type !== tn ? { minFilter: mt, magFilter: mt } : {};
        K.map !== null && K.map.dispose(), K.map = new zt(r.x, r.y, ie), K.map.texture.name = ne.name + ".shadowMap", K.camera.updateProjectionMatrix();
      }
      i.setRenderTarget(K.map), i.clear();
      const Q = K.getViewportCount();
      for (let ie = 0; ie < Q; ie++) {
        const pe = K.getViewport(ie);
        o.set(
          s.x * pe.x,
          s.y * pe.y,
          s.x * pe.z,
          s.y * pe.w
        ), V.viewport(o), K.updateMatrices(ne, ie), n = K.getFrustum(), b(w, q, K.camera, ne, this.type);
      }
      K.isPointLightShadow !== !0 && this.type === tn && y(K, q), K.needsUpdate = !1;
    }
    f = this.type, p.needsUpdate = !1, i.setRenderTarget(N, v, A);
  };
  function y(E, w) {
    const q = e.update(x);
    d.defines.VSM_SAMPLES !== E.blurSamples && (d.defines.VSM_SAMPLES = E.blurSamples, m.defines.VSM_SAMPLES = E.blurSamples, d.needsUpdate = !0, m.needsUpdate = !0), E.mapPass === null && (E.mapPass = new zt(r.x, r.y)), d.uniforms.shadow_pass.value = E.map.texture, d.uniforms.resolution.value = E.mapSize, d.uniforms.radius.value = E.radius, i.setRenderTarget(E.mapPass), i.clear(), i.renderBufferDirect(w, null, q, d, x, null), m.uniforms.shadow_pass.value = E.mapPass.texture, m.uniforms.resolution.value = E.mapSize, m.uniforms.radius.value = E.radius, i.setRenderTarget(E.map), i.clear(), i.renderBufferDirect(w, null, q, m, x, null);
  }
  function _(E, w, q, N) {
    let v = null;
    const A = q.isPointLight === !0 ? E.customDistanceMaterial : E.customDepthMaterial;
    if (A !== void 0)
      v = A;
    else if (v = q.isPointLight === !0 ? c : a, i.localClippingEnabled && w.clipShadows === !0 && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const V = v.uuid, re = w.uuid;
      let U = l[V];
      U === void 0 && (U = {}, l[V] = U);
      let O = U[re];
      O === void 0 && (O = v.clone(), U[re] = O), v = O;
    }
    if (v.visible = w.visible, v.wireframe = w.wireframe, N === tn ? v.side = w.shadowSide !== null ? w.shadowSide : w.side : v.side = w.shadowSide !== null ? w.shadowSide : u[w.side], v.alphaMap = w.alphaMap, v.alphaTest = w.alphaTest, v.map = w.map, v.clipShadows = w.clipShadows, v.clippingPlanes = w.clippingPlanes, v.clipIntersection = w.clipIntersection, v.displacementMap = w.displacementMap, v.displacementScale = w.displacementScale, v.displacementBias = w.displacementBias, v.wireframeLinewidth = w.wireframeLinewidth, v.linewidth = w.linewidth, q.isPointLight === !0 && v.isMeshDistanceMaterial === !0) {
      const V = i.properties.get(v);
      V.light = q;
    }
    return v;
  }
  function b(E, w, q, N, v) {
    if (E.visible === !1)
      return;
    if (E.layers.test(w.layers) && (E.isMesh || E.isLine || E.isPoints) && (E.castShadow || E.receiveShadow && v === tn) && (!E.frustumCulled || n.intersectsObject(E))) {
      E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse, E.matrixWorld);
      const re = e.update(E), U = E.material;
      if (Array.isArray(U)) {
        const O = re.groups;
        for (let H = 0, ne = O.length; H < ne; H++) {
          const K = O[H], j = U[K.materialIndex];
          if (j && j.visible) {
            const Q = _(E, j, N, v);
            i.renderBufferDirect(q, null, re, Q, E, K);
          }
        }
      } else if (U.visible) {
        const O = _(E, U, N, v);
        i.renderBufferDirect(q, null, re, O, E, null);
      }
    }
    const V = E.children;
    for (let re = 0, U = V.length; re < U; re++)
      b(V[re], w, q, N, v);
  }
}
function om(i, e, t) {
  const n = t.isWebGL2;
  function r() {
    let L = !1;
    const W = new je();
    let se = null;
    const xe = new je(0, 0, 0, 0);
    return {
      setMask: function(be) {
        se !== be && !L && (i.colorMask(be, be, be, be), se = be);
      },
      setLocked: function(be) {
        L = be;
      },
      setClear: function(be, Xe, Ye, lt, rn) {
        rn === !0 && (be *= lt, Xe *= lt, Ye *= lt), W.set(be, Xe, Ye, lt), xe.equals(W) === !1 && (i.clearColor(be, Xe, Ye, lt), xe.copy(W));
      },
      reset: function() {
        L = !1, se = null, xe.set(-1, 0, 0, 0);
      }
    };
  }
  function s() {
    let L = !1, W = null, se = null, xe = null;
    return {
      setTest: function(be) {
        be ? C(i.DEPTH_TEST) : ye(i.DEPTH_TEST);
      },
      setMask: function(be) {
        W !== be && !L && (i.depthMask(be), W = be);
      },
      setFunc: function(be) {
        if (se !== be) {
          switch (be) {
            case Ul:
              i.depthFunc(i.NEVER);
              break;
            case Il:
              i.depthFunc(i.ALWAYS);
              break;
            case Nl:
              i.depthFunc(i.LESS);
              break;
            case as:
              i.depthFunc(i.LEQUAL);
              break;
            case Fl:
              i.depthFunc(i.EQUAL);
              break;
            case Ol:
              i.depthFunc(i.GEQUAL);
              break;
            case Bl:
              i.depthFunc(i.GREATER);
              break;
            case zl:
              i.depthFunc(i.NOTEQUAL);
              break;
            default:
              i.depthFunc(i.LEQUAL);
          }
          se = be;
        }
      },
      setLocked: function(be) {
        L = be;
      },
      setClear: function(be) {
        xe !== be && (i.clearDepth(be), xe = be);
      },
      reset: function() {
        L = !1, W = null, se = null, xe = null;
      }
    };
  }
  function o() {
    let L = !1, W = null, se = null, xe = null, be = null, Xe = null, Ye = null, lt = null, rn = null;
    return {
      setTest: function($e) {
        L || ($e ? C(i.STENCIL_TEST) : ye(i.STENCIL_TEST));
      },
      setMask: function($e) {
        W !== $e && !L && (i.stencilMask($e), W = $e);
      },
      setFunc: function($e, Tt, Gt) {
        (se !== $e || xe !== Tt || be !== Gt) && (i.stencilFunc($e, Tt, Gt), se = $e, xe = Tt, be = Gt);
      },
      setOp: function($e, Tt, Gt) {
        (Xe !== $e || Ye !== Tt || lt !== Gt) && (i.stencilOp($e, Tt, Gt), Xe = $e, Ye = Tt, lt = Gt);
      },
      setLocked: function($e) {
        L = $e;
      },
      setClear: function($e) {
        rn !== $e && (i.clearStencil($e), rn = $e);
      },
      reset: function() {
        L = !1, W = null, se = null, xe = null, be = null, Xe = null, Ye = null, lt = null, rn = null;
      }
    };
  }
  const a = new r(), c = new s(), l = new o(), h = /* @__PURE__ */ new WeakMap(), u = /* @__PURE__ */ new WeakMap();
  let d = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), x = [], p = null, f = !1, y = null, _ = null, b = null, E = null, w = null, q = null, N = null, v = !1, A = null, V = null, re = null, U = null, O = null;
  const H = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let ne = !1, K = 0;
  const j = i.getParameter(i.VERSION);
  j.indexOf("WebGL") !== -1 ? (K = parseFloat(/^WebGL (\d)/.exec(j)[1]), ne = K >= 1) : j.indexOf("OpenGL ES") !== -1 && (K = parseFloat(/^OpenGL ES (\d)/.exec(j)[1]), ne = K >= 2);
  let Q = null, ie = {};
  const pe = i.getParameter(i.SCISSOR_BOX), ce = i.getParameter(i.VIEWPORT), G = new je().fromArray(pe), Y = new je().fromArray(ce);
  function ae(L, W, se, xe) {
    const be = new Uint8Array(4), Xe = i.createTexture();
    i.bindTexture(L, Xe), i.texParameteri(L, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(L, i.TEXTURE_MAG_FILTER, i.NEAREST);
    for (let Ye = 0; Ye < se; Ye++)
      n && (L === i.TEXTURE_3D || L === i.TEXTURE_2D_ARRAY) ? i.texImage3D(W, 0, i.RGBA, 1, 1, xe, 0, i.RGBA, i.UNSIGNED_BYTE, be) : i.texImage2D(W + Ye, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE, be);
    return Xe;
  }
  const fe = {};
  fe[i.TEXTURE_2D] = ae(i.TEXTURE_2D, i.TEXTURE_2D, 1), fe[i.TEXTURE_CUBE_MAP] = ae(i.TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (fe[i.TEXTURE_2D_ARRAY] = ae(i.TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), fe[i.TEXTURE_3D] = ae(i.TEXTURE_3D, i.TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), c.setClear(1), l.setClear(0), C(i.DEPTH_TEST), c.setFunc(as), he(!1), Ae(Ns), C(i.CULL_FACE), te(hn);
  function C(L) {
    d[L] !== !0 && (i.enable(L), d[L] = !0);
  }
  function ye(L) {
    d[L] !== !1 && (i.disable(L), d[L] = !1);
  }
  function Pe(L, W) {
    return m[L] !== W ? (i.bindFramebuffer(L, W), m[L] = W, n && (L === i.DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = W), L === i.FRAMEBUFFER && (m[i.DRAW_FRAMEBUFFER] = W)), !0) : !1;
  }
  function le(L, W) {
    let se = x, xe = !1;
    if (L)
      if (se = g.get(W), se === void 0 && (se = [], g.set(W, se)), L.isWebGLMultipleRenderTargets) {
        const be = L.texture;
        if (se.length !== be.length || se[0] !== i.COLOR_ATTACHMENT0) {
          for (let Xe = 0, Ye = be.length; Xe < Ye; Xe++)
            se[Xe] = i.COLOR_ATTACHMENT0 + Xe;
          se.length = be.length, xe = !0;
        }
      } else
        se[0] !== i.COLOR_ATTACHMENT0 && (se[0] = i.COLOR_ATTACHMENT0, xe = !0);
    else
      se[0] !== i.BACK && (se[0] = i.BACK, xe = !0);
    xe && (t.isWebGL2 ? i.drawBuffers(se) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se));
  }
  function Me(L) {
    return p !== L ? (i.useProgram(L), p = L, !0) : !1;
  }
  const $ = {
    [Kn]: i.FUNC_ADD,
    [yl]: i.FUNC_SUBTRACT,
    [Tl]: i.FUNC_REVERSE_SUBTRACT
  };
  if (n)
    $[Bs] = i.MIN, $[zs] = i.MAX;
  else {
    const L = e.get("EXT_blend_minmax");
    L !== null && ($[Bs] = L.MIN_EXT, $[zs] = L.MAX_EXT);
  }
  const k = {
    [bl]: i.ZERO,
    [Al]: i.ONE,
    [wl]: i.SRC_COLOR,
    [Po]: i.SRC_ALPHA,
    [Dl]: i.SRC_ALPHA_SATURATE,
    [Ll]: i.DST_COLOR,
    [Rl]: i.DST_ALPHA,
    [Pl]: i.ONE_MINUS_SRC_COLOR,
    [Ro]: i.ONE_MINUS_SRC_ALPHA,
    [ql]: i.ONE_MINUS_DST_COLOR,
    [Cl]: i.ONE_MINUS_DST_ALPHA
  };
  function te(L, W, se, xe, be, Xe, Ye, lt) {
    if (L === hn) {
      f === !0 && (ye(i.BLEND), f = !1);
      return;
    }
    if (f === !1 && (C(i.BLEND), f = !0), L !== El) {
      if (L !== y || lt !== v) {
        if ((_ !== Kn || w !== Kn) && (i.blendEquation(i.FUNC_ADD), _ = Kn, w = Kn), lt)
          switch (L) {
            case Qn:
              i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ss:
              i.blendFunc(i.ONE, i.ONE);
              break;
            case Fs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Os:
              i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        else
          switch (L) {
            case Qn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA);
              break;
            case ss:
              i.blendFunc(i.SRC_ALPHA, i.ONE);
              break;
            case Fs:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE);
              break;
            case Os:
              i.blendFunc(i.ZERO, i.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", L);
              break;
          }
        b = null, E = null, q = null, N = null, y = L, v = lt;
      }
      return;
    }
    be = be || W, Xe = Xe || se, Ye = Ye || xe, (W !== _ || be !== w) && (i.blendEquationSeparate($[W], $[be]), _ = W, w = be), (se !== b || xe !== E || Xe !== q || Ye !== N) && (i.blendFuncSeparate(k[se], k[xe], k[Xe], k[Ye]), b = se, E = xe, q = Xe, N = Ye), y = L, v = !1;
  }
  function ge(L, W) {
    L.side === kt ? ye(i.CULL_FACE) : C(i.CULL_FACE);
    let se = L.side === pt;
    W && (se = !se), he(se), L.blending === Qn && L.transparent === !1 ? te(hn) : te(L.blending, L.blendEquation, L.blendSrc, L.blendDst, L.blendEquationAlpha, L.blendSrcAlpha, L.blendDstAlpha, L.premultipliedAlpha), c.setFunc(L.depthFunc), c.setTest(L.depthTest), c.setMask(L.depthWrite), a.setMask(L.colorWrite);
    const xe = L.stencilWrite;
    l.setTest(xe), xe && (l.setMask(L.stencilWriteMask), l.setFunc(L.stencilFunc, L.stencilRef, L.stencilFuncMask), l.setOp(L.stencilFail, L.stencilZFail, L.stencilZPass)), Se(L.polygonOffset, L.polygonOffsetFactor, L.polygonOffsetUnits), L.alphaToCoverage === !0 ? C(i.SAMPLE_ALPHA_TO_COVERAGE) : ye(i.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function he(L) {
    A !== L && (L ? i.frontFace(i.CW) : i.frontFace(i.CCW), A = L);
  }
  function Ae(L) {
    L !== vl ? (C(i.CULL_FACE), L !== V && (L === Ns ? i.cullFace(i.BACK) : L === Ml ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : ye(i.CULL_FACE), V = L;
  }
  function we(L) {
    L !== re && (ne && i.lineWidth(L), re = L);
  }
  function Se(L, W, se) {
    L ? (C(i.POLYGON_OFFSET_FILL), (U !== W || O !== se) && (i.polygonOffset(W, se), U = W, O = se)) : ye(i.POLYGON_OFFSET_FILL);
  }
  function Le(L) {
    L ? C(i.SCISSOR_TEST) : ye(i.SCISSOR_TEST);
  }
  function Oe(L) {
    L === void 0 && (L = i.TEXTURE0 + H - 1), Q !== L && (i.activeTexture(L), Q = L);
  }
  function T(L, W, se) {
    se === void 0 && (Q === null ? se = i.TEXTURE0 + H - 1 : se = Q);
    let xe = ie[se];
    xe === void 0 && (xe = { type: void 0, texture: void 0 }, ie[se] = xe), (xe.type !== L || xe.texture !== W) && (Q !== se && (i.activeTexture(se), Q = se), i.bindTexture(L, W || fe[L]), xe.type = L, xe.texture = W);
  }
  function M() {
    const L = ie[Q];
    L !== void 0 && L.type !== void 0 && (i.bindTexture(L.type, null), L.type = void 0, L.texture = void 0);
  }
  function z() {
    try {
      i.compressedTexImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function D() {
    try {
      i.compressedTexImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ee() {
    try {
      i.texSubImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ue() {
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
  function de() {
    try {
      i.texStorage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function ve() {
    try {
      i.texImage2D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function Te() {
    try {
      i.texImage3D.apply(i, arguments);
    } catch (L) {
      console.error("THREE.WebGLState:", L);
    }
  }
  function _e(L) {
    G.equals(L) === !1 && (i.scissor(L.x, L.y, L.z, L.w), G.copy(L));
  }
  function Ee(L) {
    Y.equals(L) === !1 && (i.viewport(L.x, L.y, L.z, L.w), Y.copy(L));
  }
  function qe(L, W) {
    let se = u.get(W);
    se === void 0 && (se = /* @__PURE__ */ new WeakMap(), u.set(W, se));
    let xe = se.get(L);
    xe === void 0 && (xe = i.getUniformBlockIndex(W, L.name), se.set(L, xe));
  }
  function Be(L, W) {
    const xe = u.get(W).get(L);
    h.get(W) !== xe && (i.uniformBlockBinding(W, xe, L.__bindingPointIndex), h.set(W, xe));
  }
  function Je() {
    i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i.POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i.SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i.blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1), i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP, i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i.activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i.useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i.viewport(0, 0, i.canvas.width, i.canvas.height), d = {}, Q = null, ie = {}, m = {}, g = /* @__PURE__ */ new WeakMap(), x = [], p = null, f = !1, y = null, _ = null, b = null, E = null, w = null, q = null, N = null, v = !1, A = null, V = null, re = null, U = null, O = null, G.set(0, 0, i.canvas.width, i.canvas.height), Y.set(0, 0, i.canvas.width, i.canvas.height), a.reset(), c.reset(), l.reset();
  }
  return {
    buffers: {
      color: a,
      depth: c,
      stencil: l
    },
    enable: C,
    disable: ye,
    bindFramebuffer: Pe,
    drawBuffers: le,
    useProgram: Me,
    setBlending: te,
    setMaterial: ge,
    setFlipSided: he,
    setCullFace: Ae,
    setLineWidth: we,
    setPolygonOffset: Se,
    setScissorTest: Le,
    activeTexture: Oe,
    bindTexture: T,
    unbindTexture: M,
    compressedTexImage2D: z,
    compressedTexImage3D: D,
    texImage2D: ve,
    texImage3D: Te,
    updateUBOMapping: qe,
    uniformBlockBinding: Be,
    texStorage2D: B,
    texStorage3D: de,
    texSubImage2D: ee,
    texSubImage3D: ue,
    compressedTexSubImage2D: P,
    compressedTexSubImage3D: J,
    scissor: _e,
    viewport: Ee,
    reset: Je
  };
}
function lm(i, e, t, n, r, s, o) {
  const a = r.isWebGL2, c = r.maxTextures, l = r.maxCubemapSize, h = r.maxTextureSize, u = r.maxSamples, d = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, m = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent), g = /* @__PURE__ */ new WeakMap();
  let x;
  const p = /* @__PURE__ */ new WeakMap();
  let f = !1;
  try {
    f = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function y(T, M) {
    return f ? (
      // eslint-disable-next-line compat/compat
      new OffscreenCanvas(T, M)
    ) : ar("canvas");
  }
  function _(T, M, z, D) {
    let ee = 1;
    if ((T.width > D || T.height > D) && (ee = D / Math.max(T.width, T.height)), ee < 1 || M === !0)
      if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap) {
        const ue = M ? pc : Math.floor, P = ue(ee * T.width), J = ue(ee * T.height);
        x === void 0 && (x = y(P, J));
        const B = z ? y(P, J) : x;
        return B.width = P, B.height = J, B.getContext("2d").drawImage(T, 0, 0, P, J), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + T.width + "x" + T.height + ") to (" + P + "x" + J + ")."), B;
      } else
        return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + T.width + "x" + T.height + ")."), T;
    return T;
  }
  function b(T) {
    return da(T.width) && da(T.height);
  }
  function E(T) {
    return a ? !1 : T.wrapS !== Ot || T.wrapT !== Ot || T.minFilter !== mt && T.minFilter !== Pt;
  }
  function w(T, M) {
    return T.generateMipmaps && M && T.minFilter !== mt && T.minFilter !== Pt;
  }
  function q(T) {
    i.generateMipmap(T);
  }
  function N(T, M, z, D, ee = !1) {
    if (a === !1)
      return M;
    if (T !== null) {
      if (i[T] !== void 0)
        return i[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let ue = M;
    return M === i.RED && (z === i.FLOAT && (ue = i.R32F), z === i.HALF_FLOAT && (ue = i.R16F), z === i.UNSIGNED_BYTE && (ue = i.R8)), M === i.RG && (z === i.FLOAT && (ue = i.RG32F), z === i.HALF_FLOAT && (ue = i.RG16F), z === i.UNSIGNED_BYTE && (ue = i.RG8)), M === i.RGBA && (z === i.FLOAT && (ue = i.RGBA32F), z === i.HALF_FLOAT && (ue = i.RGBA16F), z === i.UNSIGNED_BYTE && (ue = D === Ue && ee === !1 ? i.SRGB8_ALPHA8 : i.RGBA8), z === i.UNSIGNED_SHORT_4_4_4_4 && (ue = i.RGBA4), z === i.UNSIGNED_SHORT_5_5_5_1 && (ue = i.RGB5_A1)), (ue === i.R16F || ue === i.R32F || ue === i.RG16F || ue === i.RG32F || ue === i.RGBA16F || ue === i.RGBA32F) && e.get("EXT_color_buffer_float"), ue;
  }
  function v(T, M, z) {
    return w(T, z) === !0 || T.isFramebufferTexture && T.minFilter !== mt && T.minFilter !== Pt ? Math.log2(Math.max(M.width, M.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? M.mipmaps.length : 1;
  }
  function A(T) {
    return T === mt || T === Gs || T === Sr ? i.NEAREST : i.LINEAR;
  }
  function V(T) {
    const M = T.target;
    M.removeEventListener("dispose", V), U(M), M.isVideoTexture && g.delete(M);
  }
  function re(T) {
    const M = T.target;
    M.removeEventListener("dispose", re), H(M);
  }
  function U(T) {
    const M = n.get(T);
    if (M.__webglInit === void 0)
      return;
    const z = T.source, D = p.get(z);
    if (D) {
      const ee = D[M.__cacheKey];
      ee.usedTimes--, ee.usedTimes === 0 && O(T), Object.keys(D).length === 0 && p.delete(z);
    }
    n.remove(T);
  }
  function O(T) {
    const M = n.get(T);
    i.deleteTexture(M.__webglTexture);
    const z = T.source, D = p.get(z);
    delete D[M.__cacheKey], o.memory.textures--;
  }
  function H(T) {
    const M = T.texture, z = n.get(T), D = n.get(M);
    if (D.__webglTexture !== void 0 && (i.deleteTexture(D.__webglTexture), o.memory.textures--), T.depthTexture && T.depthTexture.dispose(), T.isWebGLCubeRenderTarget)
      for (let ee = 0; ee < 6; ee++)
        i.deleteFramebuffer(z.__webglFramebuffer[ee]), z.__webglDepthbuffer && i.deleteRenderbuffer(z.__webglDepthbuffer[ee]);
    else {
      if (i.deleteFramebuffer(z.__webglFramebuffer), z.__webglDepthbuffer && i.deleteRenderbuffer(z.__webglDepthbuffer), z.__webglMultisampledFramebuffer && i.deleteFramebuffer(z.__webglMultisampledFramebuffer), z.__webglColorRenderbuffer)
        for (let ee = 0; ee < z.__webglColorRenderbuffer.length; ee++)
          z.__webglColorRenderbuffer[ee] && i.deleteRenderbuffer(z.__webglColorRenderbuffer[ee]);
      z.__webglDepthRenderbuffer && i.deleteRenderbuffer(z.__webglDepthRenderbuffer);
    }
    if (T.isWebGLMultipleRenderTargets)
      for (let ee = 0, ue = M.length; ee < ue; ee++) {
        const P = n.get(M[ee]);
        P.__webglTexture && (i.deleteTexture(P.__webglTexture), o.memory.textures--), n.remove(M[ee]);
      }
    n.remove(M), n.remove(T);
  }
  let ne = 0;
  function K() {
    ne = 0;
  }
  function j() {
    const T = ne;
    return T >= c && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + c), ne += 1, T;
  }
  function Q(T) {
    const M = [];
    return M.push(T.wrapS), M.push(T.wrapT), M.push(T.wrapR || 0), M.push(T.magFilter), M.push(T.minFilter), M.push(T.anisotropy), M.push(T.internalFormat), M.push(T.format), M.push(T.type), M.push(T.generateMipmaps), M.push(T.premultiplyAlpha), M.push(T.flipY), M.push(T.unpackAlignment), M.push(T.colorSpace), M.join();
  }
  function ie(T, M) {
    const z = n.get(T);
    if (T.isVideoTexture && Le(T), T.isRenderTargetTexture === !1 && T.version > 0 && z.__version !== T.version) {
      const D = T.image;
      if (D === null)
        console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (D.complete === !1)
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        ye(z, T, M);
        return;
      }
    }
    t.bindTexture(i.TEXTURE_2D, z.__webglTexture, i.TEXTURE0 + M);
  }
  function pe(T, M) {
    const z = n.get(T);
    if (T.version > 0 && z.__version !== T.version) {
      ye(z, T, M);
      return;
    }
    t.bindTexture(i.TEXTURE_2D_ARRAY, z.__webglTexture, i.TEXTURE0 + M);
  }
  function ce(T, M) {
    const z = n.get(T);
    if (T.version > 0 && z.__version !== T.version) {
      ye(z, T, M);
      return;
    }
    t.bindTexture(i.TEXTURE_3D, z.__webglTexture, i.TEXTURE0 + M);
  }
  function G(T, M) {
    const z = n.get(T);
    if (T.version > 0 && z.__version !== T.version) {
      Pe(z, T, M);
      return;
    }
    t.bindTexture(i.TEXTURE_CUBE_MAP, z.__webglTexture, i.TEXTURE0 + M);
  }
  const Y = {
    [cs]: i.REPEAT,
    [Ot]: i.CLAMP_TO_EDGE,
    [hs]: i.MIRRORED_REPEAT
  }, ae = {
    [mt]: i.NEAREST,
    [Gs]: i.NEAREST_MIPMAP_NEAREST,
    [Sr]: i.NEAREST_MIPMAP_LINEAR,
    [Pt]: i.LINEAR,
    [jl]: i.LINEAR_MIPMAP_NEAREST,
    [yi]: i.LINEAR_MIPMAP_LINEAR
  };
  function fe(T, M, z) {
    if (z ? (i.texParameteri(T, i.TEXTURE_WRAP_S, Y[M.wrapS]), i.texParameteri(T, i.TEXTURE_WRAP_T, Y[M.wrapT]), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, Y[M.wrapR]), i.texParameteri(T, i.TEXTURE_MAG_FILTER, ae[M.magFilter]), i.texParameteri(T, i.TEXTURE_MIN_FILTER, ae[M.minFilter])) : (i.texParameteri(T, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(T, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), (T === i.TEXTURE_3D || T === i.TEXTURE_2D_ARRAY) && i.texParameteri(T, i.TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (M.wrapS !== Ot || M.wrapT !== Ot) && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."), i.texParameteri(T, i.TEXTURE_MAG_FILTER, A(M.magFilter)), i.texParameteri(T, i.TEXTURE_MIN_FILTER, A(M.minFilter)), M.minFilter !== mt && M.minFilter !== Pt && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")), e.has("EXT_texture_filter_anisotropic") === !0) {
      const D = e.get("EXT_texture_filter_anisotropic");
      if (M.magFilter === mt || M.minFilter !== Sr && M.minFilter !== yi || M.type === En && e.has("OES_texture_float_linear") === !1 || a === !1 && M.type === Ti && e.has("OES_texture_half_float_linear") === !1)
        return;
      (M.anisotropy > 1 || n.get(M).__currentAnisotropy) && (i.texParameterf(T, D.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(M.anisotropy, r.getMaxAnisotropy())), n.get(M).__currentAnisotropy = M.anisotropy);
    }
  }
  function C(T, M) {
    let z = !1;
    T.__webglInit === void 0 && (T.__webglInit = !0, M.addEventListener("dispose", V));
    const D = M.source;
    let ee = p.get(D);
    ee === void 0 && (ee = {}, p.set(D, ee));
    const ue = Q(M);
    if (ue !== T.__cacheKey) {
      ee[ue] === void 0 && (ee[ue] = {
        texture: i.createTexture(),
        usedTimes: 0
      }, o.memory.textures++, z = !0), ee[ue].usedTimes++;
      const P = ee[T.__cacheKey];
      P !== void 0 && (ee[T.__cacheKey].usedTimes--, P.usedTimes === 0 && O(M)), T.__cacheKey = ue, T.__webglTexture = ee[ue].texture;
    }
    return z;
  }
  function ye(T, M, z) {
    let D = i.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (D = i.TEXTURE_2D_ARRAY), M.isData3DTexture && (D = i.TEXTURE_3D);
    const ee = C(T, M), ue = M.source;
    t.bindTexture(D, T.__webglTexture, i.TEXTURE0 + z);
    const P = n.get(ue);
    if (ue.version !== P.__version || ee === !0) {
      t.activeTexture(i.TEXTURE0 + z), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const J = E(M) && b(M.image) === !1;
      let B = _(M.image, J, !1, h);
      B = Oe(M, B);
      const de = b(B) || a, ve = s.convert(M.format, M.colorSpace);
      let Te = s.convert(M.type), _e = N(M.internalFormat, ve, Te, M.colorSpace);
      fe(D, M, de);
      let Ee;
      const qe = M.mipmaps, Be = a && M.isVideoTexture !== !0, Je = P.__version === void 0 || ee === !0, L = v(M, B, de);
      if (M.isDepthTexture)
        _e = i.DEPTH_COMPONENT, a ? M.type === En ? _e = i.DEPTH_COMPONENT32F : M.type === Sn ? _e = i.DEPTH_COMPONENT24 : M.type === ei ? _e = i.DEPTH24_STENCIL8 : _e = i.DEPTH_COMPONENT16 : M.type === En && console.error("WebGLRenderer: Floating point depth texture requires WebGL2."), M.format === yn && _e === i.DEPTH_COMPONENT && M.type !== Lo && M.type !== Sn && (console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."), M.type = Sn, Te = s.convert(M.type)), M.format === oi && _e === i.DEPTH_COMPONENT && (_e = i.DEPTH_STENCIL, M.type !== ei && (console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), M.type = ei, Te = s.convert(M.type))), Je && (Be ? t.texStorage2D(i.TEXTURE_2D, 1, _e, B.width, B.height) : t.texImage2D(i.TEXTURE_2D, 0, _e, B.width, B.height, 0, ve, Te, null));
      else if (M.isDataTexture)
        if (qe.length > 0 && de) {
          Be && Je && t.texStorage2D(i.TEXTURE_2D, L, _e, qe[0].width, qe[0].height);
          for (let W = 0, se = qe.length; W < se; W++)
            Ee = qe[W], Be ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, Ee.width, Ee.height, ve, Te, Ee.data) : t.texImage2D(i.TEXTURE_2D, W, _e, Ee.width, Ee.height, 0, ve, Te, Ee.data);
          M.generateMipmaps = !1;
        } else
          Be ? (Je && t.texStorage2D(i.TEXTURE_2D, L, _e, B.width, B.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, B.width, B.height, ve, Te, B.data)) : t.texImage2D(i.TEXTURE_2D, 0, _e, B.width, B.height, 0, ve, Te, B.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Be && Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, L, _e, qe[0].width, qe[0].height, B.depth);
          for (let W = 0, se = qe.length; W < se; W++)
            Ee = qe[W], M.format !== Bt ? ve !== null ? Be ? t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, Ee.width, Ee.height, B.depth, ve, Ee.data, 0, 0) : t.compressedTexImage3D(i.TEXTURE_2D_ARRAY, W, _e, Ee.width, Ee.height, B.depth, 0, Ee.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, W, 0, 0, 0, Ee.width, Ee.height, B.depth, ve, Te, Ee.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, W, _e, Ee.width, Ee.height, B.depth, 0, ve, Te, Ee.data);
        } else {
          Be && Je && t.texStorage2D(i.TEXTURE_2D, L, _e, qe[0].width, qe[0].height);
          for (let W = 0, se = qe.length; W < se; W++)
            Ee = qe[W], M.format !== Bt ? ve !== null ? Be ? t.compressedTexSubImage2D(i.TEXTURE_2D, W, 0, 0, Ee.width, Ee.height, ve, Ee.data) : t.compressedTexImage2D(i.TEXTURE_2D, W, _e, Ee.width, Ee.height, 0, Ee.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, Ee.width, Ee.height, ve, Te, Ee.data) : t.texImage2D(i.TEXTURE_2D, W, _e, Ee.width, Ee.height, 0, ve, Te, Ee.data);
        }
      else if (M.isDataArrayTexture)
        Be ? (Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, L, _e, B.width, B.height, B.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, B.width, B.height, B.depth, ve, Te, B.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, _e, B.width, B.height, B.depth, 0, ve, Te, B.data);
      else if (M.isData3DTexture)
        Be ? (Je && t.texStorage3D(i.TEXTURE_3D, L, _e, B.width, B.height, B.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, B.width, B.height, B.depth, ve, Te, B.data)) : t.texImage3D(i.TEXTURE_3D, 0, _e, B.width, B.height, B.depth, 0, ve, Te, B.data);
      else if (M.isFramebufferTexture) {
        if (Je)
          if (Be)
            t.texStorage2D(i.TEXTURE_2D, L, _e, B.width, B.height);
          else {
            let W = B.width, se = B.height;
            for (let xe = 0; xe < L; xe++)
              t.texImage2D(i.TEXTURE_2D, xe, _e, W, se, 0, ve, Te, null), W >>= 1, se >>= 1;
          }
      } else if (qe.length > 0 && de) {
        Be && Je && t.texStorage2D(i.TEXTURE_2D, L, _e, qe[0].width, qe[0].height);
        for (let W = 0, se = qe.length; W < se; W++)
          Ee = qe[W], Be ? t.texSubImage2D(i.TEXTURE_2D, W, 0, 0, ve, Te, Ee) : t.texImage2D(i.TEXTURE_2D, W, _e, ve, Te, Ee);
        M.generateMipmaps = !1;
      } else
        Be ? (Je && t.texStorage2D(i.TEXTURE_2D, L, _e, B.width, B.height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, ve, Te, B)) : t.texImage2D(i.TEXTURE_2D, 0, _e, ve, Te, B);
      w(M, de) && q(D), P.__version = ue.version, M.onUpdate && M.onUpdate(M);
    }
    T.__version = M.version;
  }
  function Pe(T, M, z) {
    if (M.image.length !== 6)
      return;
    const D = C(T, M), ee = M.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, T.__webglTexture, i.TEXTURE0 + z);
    const ue = n.get(ee);
    if (ee.version !== ue.__version || D === !0) {
      t.activeTexture(i.TEXTURE0 + z), i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, M.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, M.unpackAlignment), i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL, i.NONE);
      const P = M.isCompressedTexture || M.image[0].isCompressedTexture, J = M.image[0] && M.image[0].isDataTexture, B = [];
      for (let W = 0; W < 6; W++)
        !P && !J ? B[W] = _(M.image[W], !1, !0, l) : B[W] = J ? M.image[W].image : M.image[W], B[W] = Oe(M, B[W]);
      const de = B[0], ve = b(de) || a, Te = s.convert(M.format, M.colorSpace), _e = s.convert(M.type), Ee = N(M.internalFormat, Te, _e, M.colorSpace), qe = a && M.isVideoTexture !== !0, Be = ue.__version === void 0 || D === !0;
      let Je = v(M, de, ve);
      fe(i.TEXTURE_CUBE_MAP, M, ve);
      let L;
      if (P) {
        qe && Be && t.texStorage2D(i.TEXTURE_CUBE_MAP, Je, Ee, de.width, de.height);
        for (let W = 0; W < 6; W++) {
          L = B[W].mipmaps;
          for (let se = 0; se < L.length; se++) {
            const xe = L[se];
            M.format !== Bt ? Te !== null ? qe ? t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, 0, 0, xe.width, xe.height, Te, xe.data) : t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, Ee, xe.width, xe.height, 0, xe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : qe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, 0, 0, xe.width, xe.height, Te, _e, xe.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se, Ee, xe.width, xe.height, 0, Te, _e, xe.data);
          }
        }
      } else {
        L = M.mipmaps, qe && Be && (L.length > 0 && Je++, t.texStorage2D(i.TEXTURE_CUBE_MAP, Je, Ee, B[0].width, B[0].height));
        for (let W = 0; W < 6; W++)
          if (J) {
            qe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, B[W].width, B[W].height, Te, _e, B[W].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, Ee, B[W].width, B[W].height, 0, Te, _e, B[W].data);
            for (let se = 0; se < L.length; se++) {
              const be = L[se].image[W].image;
              qe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, 0, 0, be.width, be.height, Te, _e, be.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, Ee, be.width, be.height, 0, Te, _e, be.data);
            }
          } else {
            qe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, 0, 0, Te, _e, B[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, 0, Ee, Te, _e, B[W]);
            for (let se = 0; se < L.length; se++) {
              const xe = L[se];
              qe ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, 0, 0, Te, _e, xe.image[W]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + W, se + 1, Ee, Te, _e, xe.image[W]);
            }
          }
      }
      w(M, ve) && q(i.TEXTURE_CUBE_MAP), ue.__version = ee.version, M.onUpdate && M.onUpdate(M);
    }
    T.__version = M.version;
  }
  function le(T, M, z, D, ee) {
    const ue = s.convert(z.format, z.colorSpace), P = s.convert(z.type), J = N(z.internalFormat, ue, P, z.colorSpace);
    n.get(M).__hasExternalTextures || (ee === i.TEXTURE_3D || ee === i.TEXTURE_2D_ARRAY ? t.texImage3D(ee, 0, J, M.width, M.height, M.depth, 0, ue, P, null) : t.texImage2D(ee, 0, J, M.width, M.height, 0, ue, P, null)), t.bindFramebuffer(i.FRAMEBUFFER, T), Se(M) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, D, ee, n.get(z).__webglTexture, 0, we(M)) : (ee === i.TEXTURE_2D || ee >= i.TEXTURE_CUBE_MAP_POSITIVE_X && ee <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, D, ee, n.get(z).__webglTexture, 0), t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function Me(T, M, z) {
    if (i.bindRenderbuffer(i.RENDERBUFFER, T), M.depthBuffer && !M.stencilBuffer) {
      let D = i.DEPTH_COMPONENT16;
      if (z || Se(M)) {
        const ee = M.depthTexture;
        ee && ee.isDepthTexture && (ee.type === En ? D = i.DEPTH_COMPONENT32F : ee.type === Sn && (D = i.DEPTH_COMPONENT24));
        const ue = we(M);
        Se(M) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, ue, D, M.width, M.height) : i.renderbufferStorageMultisample(i.RENDERBUFFER, ue, D, M.width, M.height);
      } else
        i.renderbufferStorage(i.RENDERBUFFER, D, M.width, M.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, T);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const D = we(M);
      z && Se(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, D, i.DEPTH24_STENCIL8, M.width, M.height) : Se(M) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, D, i.DEPTH24_STENCIL8, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, M.width, M.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, T);
    } else {
      const D = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture];
      for (let ee = 0; ee < D.length; ee++) {
        const ue = D[ee], P = s.convert(ue.format, ue.colorSpace), J = s.convert(ue.type), B = N(ue.internalFormat, P, J, ue.colorSpace), de = we(M);
        z && Se(M) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, de, B, M.width, M.height) : Se(M) ? d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, de, B, M.width, M.height) : i.renderbufferStorage(i.RENDERBUFFER, B, M.width, M.height);
      }
    }
    i.bindRenderbuffer(i.RENDERBUFFER, null);
  }
  function $(T, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(i.FRAMEBUFFER, T), !(M.depthTexture && M.depthTexture.isDepthTexture))
      throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(M.depthTexture).__webglTexture || M.depthTexture.image.width !== M.width || M.depthTexture.image.height !== M.height) && (M.depthTexture.image.width = M.width, M.depthTexture.image.height = M.height, M.depthTexture.needsUpdate = !0), ie(M.depthTexture, 0);
    const D = n.get(M.depthTexture).__webglTexture, ee = we(M);
    if (M.depthTexture.format === yn)
      Se(M) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, D, 0, ee) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, D, 0);
    else if (M.depthTexture.format === oi)
      Se(M) ? d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, D, 0, ee) : i.framebufferTexture2D(i.FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, D, 0);
    else
      throw new Error("Unknown depthTexture format");
  }
  function k(T) {
    const M = n.get(T), z = T.isWebGLCubeRenderTarget === !0;
    if (T.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (z)
        throw new Error("target.depthTexture not supported in Cube render targets");
      $(M.__webglFramebuffer, T);
    } else if (z) {
      M.__webglDepthbuffer = [];
      for (let D = 0; D < 6; D++)
        t.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer[D]), M.__webglDepthbuffer[D] = i.createRenderbuffer(), Me(M.__webglDepthbuffer[D], T, !1);
    } else
      t.bindFramebuffer(i.FRAMEBUFFER, M.__webglFramebuffer), M.__webglDepthbuffer = i.createRenderbuffer(), Me(M.__webglDepthbuffer, T, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null);
  }
  function te(T, M, z) {
    const D = n.get(T);
    M !== void 0 && le(D.__webglFramebuffer, T, T.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D), z !== void 0 && k(T);
  }
  function ge(T) {
    const M = T.texture, z = n.get(T), D = n.get(M);
    T.addEventListener("dispose", re), T.isWebGLMultipleRenderTargets !== !0 && (D.__webglTexture === void 0 && (D.__webglTexture = i.createTexture()), D.__version = M.version, o.memory.textures++);
    const ee = T.isWebGLCubeRenderTarget === !0, ue = T.isWebGLMultipleRenderTargets === !0, P = b(T) || a;
    if (ee) {
      z.__webglFramebuffer = [];
      for (let J = 0; J < 6; J++)
        z.__webglFramebuffer[J] = i.createFramebuffer();
    } else {
      if (z.__webglFramebuffer = i.createFramebuffer(), ue)
        if (r.drawBuffers) {
          const J = T.texture;
          for (let B = 0, de = J.length; B < de; B++) {
            const ve = n.get(J[B]);
            ve.__webglTexture === void 0 && (ve.__webglTexture = i.createTexture(), o.memory.textures++);
          }
        } else
          console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");
      if (a && T.samples > 0 && Se(T) === !1) {
        const J = ue ? M : [M];
        z.__webglMultisampledFramebuffer = i.createFramebuffer(), z.__webglColorRenderbuffer = [], t.bindFramebuffer(i.FRAMEBUFFER, z.__webglMultisampledFramebuffer);
        for (let B = 0; B < J.length; B++) {
          const de = J[B];
          z.__webglColorRenderbuffer[B] = i.createRenderbuffer(), i.bindRenderbuffer(i.RENDERBUFFER, z.__webglColorRenderbuffer[B]);
          const ve = s.convert(de.format, de.colorSpace), Te = s.convert(de.type), _e = N(de.internalFormat, ve, Te, de.colorSpace, T.isXRRenderTarget === !0), Ee = we(T);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ee, _e, T.width, T.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + B, i.RENDERBUFFER, z.__webglColorRenderbuffer[B]);
        }
        i.bindRenderbuffer(i.RENDERBUFFER, null), T.depthBuffer && (z.__webglDepthRenderbuffer = i.createRenderbuffer(), Me(z.__webglDepthRenderbuffer, T, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null);
      }
    }
    if (ee) {
      t.bindTexture(i.TEXTURE_CUBE_MAP, D.__webglTexture), fe(i.TEXTURE_CUBE_MAP, M, P);
      for (let J = 0; J < 6; J++)
        le(z.__webglFramebuffer[J], T, M, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + J);
      w(M, P) && q(i.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ue) {
      const J = T.texture;
      for (let B = 0, de = J.length; B < de; B++) {
        const ve = J[B], Te = n.get(ve);
        t.bindTexture(i.TEXTURE_2D, Te.__webglTexture), fe(i.TEXTURE_2D, ve, P), le(z.__webglFramebuffer, T, ve, i.COLOR_ATTACHMENT0 + B, i.TEXTURE_2D), w(ve, P) && q(i.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let J = i.TEXTURE_2D;
      (T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (a ? J = T.isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")), t.bindTexture(J, D.__webglTexture), fe(J, M, P), le(z.__webglFramebuffer, T, M, i.COLOR_ATTACHMENT0, J), w(M, P) && q(J), t.unbindTexture();
    }
    T.depthBuffer && k(T);
  }
  function he(T) {
    const M = b(T) || a, z = T.isWebGLMultipleRenderTargets === !0 ? T.texture : [T.texture];
    for (let D = 0, ee = z.length; D < ee; D++) {
      const ue = z[D];
      if (w(ue, M)) {
        const P = T.isWebGLCubeRenderTarget ? i.TEXTURE_CUBE_MAP : i.TEXTURE_2D, J = n.get(ue).__webglTexture;
        t.bindTexture(P, J), q(P), t.unbindTexture();
      }
    }
  }
  function Ae(T) {
    if (a && T.samples > 0 && Se(T) === !1) {
      const M = T.isWebGLMultipleRenderTargets ? T.texture : [T.texture], z = T.width, D = T.height;
      let ee = i.COLOR_BUFFER_BIT;
      const ue = [], P = T.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT, J = n.get(T), B = T.isWebGLMultipleRenderTargets === !0;
      if (B)
        for (let de = 0; de < M.length; de++)
          t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, J.__webglMultisampledFramebuffer), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglFramebuffer);
      for (let de = 0; de < M.length; de++) {
        ue.push(i.COLOR_ATTACHMENT0 + de), T.depthBuffer && ue.push(P);
        const ve = J.__ignoreDepthValues !== void 0 ? J.__ignoreDepthValues : !1;
        if (ve === !1 && (T.depthBuffer && (ee |= i.DEPTH_BUFFER_BIT), T.stencilBuffer && (ee |= i.STENCIL_BUFFER_BIT)), B && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.RENDERBUFFER, J.__webglColorRenderbuffer[de]), ve === !0 && (i.invalidateFramebuffer(i.READ_FRAMEBUFFER, [P]), i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER, [P])), B) {
          const Te = n.get(M[de]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, Te, 0);
        }
        i.blitFramebuffer(0, 0, z, D, 0, 0, z, D, ee, i.NEAREST), m && i.invalidateFramebuffer(i.READ_FRAMEBUFFER, ue);
      }
      if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t.bindFramebuffer(i.DRAW_FRAMEBUFFER, null), B)
        for (let de = 0; de < M.length; de++) {
          t.bindFramebuffer(i.FRAMEBUFFER, J.__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.RENDERBUFFER, J.__webglColorRenderbuffer[de]);
          const ve = n.get(M[de]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, J.__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + de, i.TEXTURE_2D, ve, 0);
        }
      t.bindFramebuffer(i.DRAW_FRAMEBUFFER, J.__webglMultisampledFramebuffer);
    }
  }
  function we(T) {
    return Math.min(u, T.samples);
  }
  function Se(T) {
    const M = n.get(T);
    return a && T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && M.__useRenderToTexture !== !1;
  }
  function Le(T) {
    const M = o.render.frame;
    g.get(T) !== M && (g.set(T, M), T.update());
  }
  function Oe(T, M) {
    const z = T.colorSpace, D = T.format, ee = T.type;
    return T.isCompressedTexture === !0 || T.format === us || z !== Xt && z !== bn && (z === Ue ? a === !1 ? e.has("EXT_sRGB") === !0 && D === Bt ? (T.format = us, T.minFilter = Pt, T.generateMipmaps = !1) : M = Fo.sRGBToLinear(M) : (D !== Bt || ee !== An) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", z)), M;
  }
  this.allocateTextureUnit = j, this.resetTextureUnits = K, this.setTexture2D = ie, this.setTexture2DArray = pe, this.setTexture3D = ce, this.setTextureCube = G, this.rebindTextures = te, this.setupRenderTarget = ge, this.updateRenderTargetMipmap = he, this.updateMultisampleRenderTarget = Ae, this.setupDepthRenderbuffer = k, this.setupFrameBufferTexture = le, this.useMultisampledRTT = Se;
}
function cm(i, e, t) {
  const n = t.isWebGL2;
  function r(s, o = bn) {
    let a;
    if (s === An)
      return i.UNSIGNED_BYTE;
    if (s === $l)
      return i.UNSIGNED_SHORT_4_4_4_4;
    if (s === Ql)
      return i.UNSIGNED_SHORT_5_5_5_1;
    if (s === Zl)
      return i.BYTE;
    if (s === Kl)
      return i.SHORT;
    if (s === Lo)
      return i.UNSIGNED_SHORT;
    if (s === Jl)
      return i.INT;
    if (s === Sn)
      return i.UNSIGNED_INT;
    if (s === En)
      return i.FLOAT;
    if (s === Ti)
      return n ? i.HALF_FLOAT : (a = e.get("OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null);
    if (s === ec)
      return i.ALPHA;
    if (s === Bt)
      return i.RGBA;
    if (s === tc)
      return i.LUMINANCE;
    if (s === nc)
      return i.LUMINANCE_ALPHA;
    if (s === yn)
      return i.DEPTH_COMPONENT;
    if (s === oi)
      return i.DEPTH_STENCIL;
    if (s === us)
      return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (s === ic)
      return i.RED;
    if (s === rc)
      return i.RED_INTEGER;
    if (s === sc)
      return i.RG;
    if (s === ac)
      return i.RG_INTEGER;
    if (s === oc)
      return i.RGBA_INTEGER;
    if (s === Er || s === yr || s === Tr || s === br)
      if (o === Ue)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) {
          if (s === Er)
            return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === yr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === Tr)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === br)
            return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else
          return null;
      else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) {
        if (s === Er)
          return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === yr)
          return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === Tr)
          return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === br)
          return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else
        return null;
    if (s === Hs || s === Vs || s === ks || s === Ws)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) {
        if (s === Hs)
          return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Vs)
          return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === ks)
          return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === Ws)
          return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else
        return null;
    if (s === lc)
      return a = e.get("WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null;
    if (s === Xs || s === Ys)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) {
        if (s === Xs)
          return o === Ue ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (s === Ys)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else
        return null;
    if (s === js || s === Zs || s === Ks || s === Js || s === $s || s === Qs || s === ea || s === ta || s === na || s === ia || s === ra || s === sa || s === aa || s === oa)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) {
        if (s === js)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Zs)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Ks)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Js)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === $s)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Qs)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === ea)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === ta)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === na)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === ia)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === ra)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === sa)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === aa)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === oa)
          return o === Ue ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else
        return null;
    if (s === Ar)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) {
        if (s === Ar)
          return o === Ue ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else
        return null;
    if (s === cc || s === la || s === ca || s === ha)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) {
        if (s === Ar)
          return a.COMPRESSED_RED_RGTC1_EXT;
        if (s === la)
          return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === ca)
          return a.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === ha)
          return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else
        return null;
    return s === ei ? n ? i.UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] : null;
  }
  return { convert: r };
}
class hm extends Rt {
  constructor(e = []) {
    super(), this.isArrayCamera = !0, this.cameras = e;
  }
}
class cn extends ot {
  constructor() {
    super(), this.isGroup = !0, this.type = "Group";
  }
}
const um = { type: "move" };
class Kr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new cn(), this._hand.matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand.inputState = { pinching: !1 }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new cn(), this._targetRay.matrixAutoUpdate = !1, this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = !1, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new cn(), this._grip.matrixAutoUpdate = !1, this._grip.visible = !1, this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = !1, this._grip.angularVelocity = new R()), this._grip;
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
        for (const x of e.hand.values()) {
          const p = t.getJointPose(x, n), f = this._getHandJoint(l, x);
          p !== null && (f.matrix.fromArray(p.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = !0, f.jointRadius = p.radius), f.visible = p !== null;
        }
        const h = l.joints["index-finger-tip"], u = l.joints["thumb-tip"], d = h.position.distanceTo(u.position), m = 0.02, g = 5e-3;
        l.inputState.pinching && d > m + g ? (l.inputState.pinching = !1, this.dispatchEvent({
          type: "pinchend",
          handedness: e.handedness,
          target: this
        })) : !l.inputState.pinching && d <= m - g && (l.inputState.pinching = !0, this.dispatchEvent({
          type: "pinchstart",
          handedness: e.handedness,
          target: this
        }));
      } else
        c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (c.matrix.fromArray(s.transform.matrix), c.matrix.decompose(c.position, c.rotation, c.scale), c.matrixWorldNeedsUpdate = !0, s.linearVelocity ? (c.hasLinearVelocity = !0, c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1, s.angularVelocity ? (c.hasAngularVelocity = !0, c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
      a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s), r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a.hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a.hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a.angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this.dispatchEvent(um)));
    }
    return a !== null && (a.visible = r !== null), c !== null && (c.visible = s !== null), l !== null && (l.visible = o !== null), this;
  }
  // private method
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new cn();
      n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
class fm extends yt {
  constructor(e, t, n, r, s, o, a, c, l, h) {
    if (h = h !== void 0 ? h : yn, h !== yn && h !== oi)
      throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === yn && (n = Sn), n === void 0 && h === oi && (n = ei), super(null, r, s, o, a, c, h, n, l), this.isDepthTexture = !0, this.image = { width: e, height: t }, this.magFilter = a !== void 0 ? a : mt, this.minFilter = c !== void 0 ? c : mt, this.flipY = !1, this.generateMipmaps = !1;
  }
}
class dm extends Ln {
  constructor(e, t) {
    super();
    const n = this;
    let r = null, s = 1, o = null, a = "local-floor", c = 1, l = null, h = null, u = null, d = null, m = null, g = null;
    const x = t.getContextAttributes();
    let p = null, f = null;
    const y = [], _ = [], b = /* @__PURE__ */ new Set(), E = /* @__PURE__ */ new Map(), w = new Rt();
    w.layers.enable(1), w.viewport = new je();
    const q = new Rt();
    q.layers.enable(2), q.viewport = new je();
    const N = [w, q], v = new hm();
    v.layers.enable(1), v.layers.enable(2);
    let A = null, V = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController = function(G) {
      let Y = y[G];
      return Y === void 0 && (Y = new Kr(), y[G] = Y), Y.getTargetRaySpace();
    }, this.getControllerGrip = function(G) {
      let Y = y[G];
      return Y === void 0 && (Y = new Kr(), y[G] = Y), Y.getGripSpace();
    }, this.getHand = function(G) {
      let Y = y[G];
      return Y === void 0 && (Y = new Kr(), y[G] = Y), Y.getHandSpace();
    };
    function re(G) {
      const Y = _.indexOf(G.inputSource);
      if (Y === -1)
        return;
      const ae = y[Y];
      ae !== void 0 && (ae.update(G.inputSource, G.frame, l || o), ae.dispatchEvent({ type: G.type, data: G.inputSource }));
    }
    function U() {
      r.removeEventListener("select", re), r.removeEventListener("selectstart", re), r.removeEventListener("selectend", re), r.removeEventListener("squeeze", re), r.removeEventListener("squeezestart", re), r.removeEventListener("squeezeend", re), r.removeEventListener("end", U), r.removeEventListener("inputsourceschange", O);
      for (let G = 0; G < y.length; G++) {
        const Y = _[G];
        Y !== null && (_[G] = null, y[G].disconnect(Y));
      }
      A = null, V = null, e.setRenderTarget(p), m = null, d = null, u = null, r = null, f = null, ce.stop(), n.isPresenting = !1, n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(G) {
      s = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(G) {
      a = G, n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return l || o;
    }, this.setReferenceSpace = function(G) {
      l = G;
    }, this.getBaseLayer = function() {
      return d !== null ? d : m;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return r;
    }, this.setSession = async function(G) {
      if (r = G, r !== null) {
        if (p = e.getRenderTarget(), r.addEventListener("select", re), r.addEventListener("selectstart", re), r.addEventListener("selectend", re), r.addEventListener("squeeze", re), r.addEventListener("squeezestart", re), r.addEventListener("squeezeend", re), r.addEventListener("end", U), r.addEventListener("inputsourceschange", O), x.xrCompatible !== !0 && await t.makeXRCompatible(), r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1) {
          const Y = {
            antialias: r.renderState.layers === void 0 ? x.antialias : !0,
            alpha: !0,
            depth: x.depth,
            stencil: x.stencil,
            framebufferScaleFactor: s
          };
          m = new XRWebGLLayer(r, t, Y), r.updateRenderState({ baseLayer: m }), f = new zt(
            m.framebufferWidth,
            m.framebufferHeight,
            {
              format: Bt,
              type: An,
              colorSpace: e.outputColorSpace,
              stencilBuffer: x.stencil
            }
          );
        } else {
          let Y = null, ae = null, fe = null;
          x.depth && (fe = x.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Y = x.stencil ? oi : yn, ae = x.stencil ? ei : Sn);
          const C = {
            colorFormat: t.RGBA8,
            depthFormat: fe,
            scaleFactor: s
          };
          u = new XRWebGLBinding(r, t), d = u.createProjectionLayer(C), r.updateRenderState({ layers: [d] }), f = new zt(
            d.textureWidth,
            d.textureHeight,
            {
              format: Bt,
              type: An,
              depthTexture: new fm(d.textureWidth, d.textureHeight, ae, void 0, void 0, void 0, void 0, void 0, void 0, Y),
              stencilBuffer: x.stencil,
              colorSpace: e.outputColorSpace,
              samples: x.antialias ? 4 : 0
            }
          );
          const ye = e.properties.get(f);
          ye.__ignoreDepthValues = d.ignoreDepthValues;
        }
        f.isXRRenderTarget = !0, this.setFoveation(c), l = null, o = await r.requestReferenceSpace(a), ce.setContext(r), ce.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (r !== null)
        return r.environmentBlendMode;
    };
    function O(G) {
      for (let Y = 0; Y < G.removed.length; Y++) {
        const ae = G.removed[Y], fe = _.indexOf(ae);
        fe >= 0 && (_[fe] = null, y[fe].disconnect(ae));
      }
      for (let Y = 0; Y < G.added.length; Y++) {
        const ae = G.added[Y];
        let fe = _.indexOf(ae);
        if (fe === -1) {
          for (let ye = 0; ye < y.length; ye++)
            if (ye >= _.length) {
              _.push(ae), fe = ye;
              break;
            } else if (_[ye] === null) {
              _[ye] = ae, fe = ye;
              break;
            }
          if (fe === -1)
            break;
        }
        const C = y[fe];
        C && C.connect(ae);
      }
    }
    const H = new R(), ne = new R();
    function K(G, Y, ae) {
      H.setFromMatrixPosition(Y.matrixWorld), ne.setFromMatrixPosition(ae.matrixWorld);
      const fe = H.distanceTo(ne), C = Y.projectionMatrix.elements, ye = ae.projectionMatrix.elements, Pe = C[14] / (C[10] - 1), le = C[14] / (C[10] + 1), Me = (C[9] + 1) / C[5], $ = (C[9] - 1) / C[5], k = (C[8] - 1) / C[0], te = (ye[8] + 1) / ye[0], ge = Pe * k, he = Pe * te, Ae = fe / (-k + te), we = Ae * -k;
      Y.matrixWorld.decompose(G.position, G.quaternion, G.scale), G.translateX(we), G.translateZ(Ae), G.matrixWorld.compose(G.position, G.quaternion, G.scale), G.matrixWorldInverse.copy(G.matrixWorld).invert();
      const Se = Pe + Ae, Le = le + Ae, Oe = ge - we, T = he + (fe - we), M = Me * le / Le * Se, z = $ * le / Le * Se;
      G.projectionMatrix.makePerspective(Oe, T, M, z, Se, Le), G.projectionMatrixInverse.copy(G.projectionMatrix).invert();
    }
    function j(G, Y) {
      Y === null ? G.matrixWorld.copy(G.matrix) : G.matrixWorld.multiplyMatrices(Y.matrixWorld, G.matrix), G.matrixWorldInverse.copy(G.matrixWorld).invert();
    }
    this.updateCamera = function(G) {
      if (r === null)
        return;
      v.near = q.near = w.near = G.near, v.far = q.far = w.far = G.far, (A !== v.near || V !== v.far) && (r.updateRenderState({
        depthNear: v.near,
        depthFar: v.far
      }), A = v.near, V = v.far);
      const Y = G.parent, ae = v.cameras;
      j(v, Y);
      for (let fe = 0; fe < ae.length; fe++)
        j(ae[fe], Y);
      ae.length === 2 ? K(v, w, q) : v.projectionMatrix.copy(w.projectionMatrix), Q(G, v, Y);
    };
    function Q(G, Y, ae) {
      ae === null ? G.matrix.copy(Y.matrixWorld) : (G.matrix.copy(ae.matrixWorld), G.matrix.invert(), G.matrix.multiply(Y.matrixWorld)), G.matrix.decompose(G.position, G.quaternion, G.scale), G.updateMatrixWorld(!0);
      const fe = G.children;
      for (let C = 0, ye = fe.length; C < ye; C++)
        fe[C].updateMatrixWorld(!0);
      G.projectionMatrix.copy(Y.projectionMatrix), G.projectionMatrixInverse.copy(Y.projectionMatrixInverse), G.isPerspectiveCamera && (G.fov = fs * 2 * Math.atan(1 / G.projectionMatrix.elements[5]), G.zoom = 1);
    }
    this.getCamera = function() {
      return v;
    }, this.getFoveation = function() {
      if (!(d === null && m === null))
        return c;
    }, this.setFoveation = function(G) {
      c = G, d !== null && (d.fixedFoveation = G), m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = G);
    }, this.getPlanes = function() {
      return b;
    };
    let ie = null;
    function pe(G, Y) {
      if (h = Y.getViewerPose(l || o), g = Y, h !== null) {
        const ae = h.views;
        m !== null && (e.setRenderTargetFramebuffer(f, m.framebuffer), e.setRenderTarget(f));
        let fe = !1;
        ae.length !== v.cameras.length && (v.cameras.length = 0, fe = !0);
        for (let C = 0; C < ae.length; C++) {
          const ye = ae[C];
          let Pe = null;
          if (m !== null)
            Pe = m.getViewport(ye);
          else {
            const Me = u.getViewSubImage(d, ye);
            Pe = Me.viewport, C === 0 && (e.setRenderTargetTextures(
              f,
              Me.colorTexture,
              d.ignoreDepthValues ? void 0 : Me.depthStencilTexture
            ), e.setRenderTarget(f));
          }
          let le = N[C];
          le === void 0 && (le = new Rt(), le.layers.enable(C), le.viewport = new je(), N[C] = le), le.matrix.fromArray(ye.transform.matrix), le.matrix.decompose(le.position, le.quaternion, le.scale), le.projectionMatrix.fromArray(ye.projectionMatrix), le.projectionMatrixInverse.copy(le.projectionMatrix).invert(), le.viewport.set(Pe.x, Pe.y, Pe.width, Pe.height), C === 0 && (v.matrix.copy(le.matrix), v.matrix.decompose(v.position, v.quaternion, v.scale)), fe === !0 && v.cameras.push(le);
        }
      }
      for (let ae = 0; ae < y.length; ae++) {
        const fe = _[ae], C = y[ae];
        fe !== null && C !== void 0 && C.update(fe, Y, l || o);
      }
      if (ie && ie(G, Y), Y.detectedPlanes) {
        n.dispatchEvent({ type: "planesdetected", data: Y.detectedPlanes });
        let ae = null;
        for (const fe of b)
          Y.detectedPlanes.has(fe) || (ae === null && (ae = []), ae.push(fe));
        if (ae !== null)
          for (const fe of ae)
            b.delete(fe), E.delete(fe), n.dispatchEvent({ type: "planeremoved", data: fe });
        for (const fe of Y.detectedPlanes)
          if (!b.has(fe))
            b.add(fe), E.set(fe, Y.lastChangedTime), n.dispatchEvent({ type: "planeadded", data: fe });
          else {
            const C = E.get(fe);
            fe.lastChangedTime > C && (E.set(fe, fe.lastChangedTime), n.dispatchEvent({ type: "planechanged", data: fe }));
          }
      }
      g = null;
    }
    const ce = new jo();
    ce.setAnimationLoop(pe), this.setAnimationLoop = function(G) {
      ie = G;
    }, this.dispose = function() {
    };
  }
}
function mm(i, e) {
  function t(p, f) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), f.value.copy(p.matrix);
  }
  function n(p, f) {
    f.color.getRGB(p.fogColor.value, Wo(i)), f.isFog ? (p.fogNear.value = f.near, p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density);
  }
  function r(p, f, y, _, b) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(p, f) : f.isMeshToonMaterial ? (s(p, f), u(p, f)) : f.isMeshPhongMaterial ? (s(p, f), h(p, f)) : f.isMeshStandardMaterial ? (s(p, f), d(p, f), f.isMeshPhysicalMaterial && m(p, f, b)) : f.isMeshMatcapMaterial ? (s(p, f), g(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f), x(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (o(p, f), f.isLineDashedMaterial && a(p, f)) : f.isPointsMaterial ? c(p, f, y, _) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color), p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1);
  }
  function s(p, f) {
    p.opacity.value = f.opacity, f.color && p.diffuse.value.copy(f.color), f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap, t(f.alphaMap, p.alphaMapTransform)), f.bumpMap && (p.bumpMap.value = f.bumpMap, t(f.bumpMap, p.bumpMapTransform), p.bumpScale.value = f.bumpScale, f.side === pt && (p.bumpScale.value *= -1)), f.normalMap && (p.normalMap.value = f.normalMap, t(f.normalMap, p.normalMapTransform), p.normalScale.value.copy(f.normalScale), f.side === pt && p.normalScale.value.negate()), f.displacementMap && (p.displacementMap.value = f.displacementMap, t(f.displacementMap, p.displacementMapTransform), p.displacementScale.value = f.displacementScale, p.displacementBias.value = f.displacementBias), f.emissiveMap && (p.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, p.emissiveMapTransform)), f.specularMap && (p.specularMap.value = f.specularMap, t(f.specularMap, p.specularMapTransform)), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
    const y = e.get(f).envMap;
    if (y && (p.envMap.value = y, p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, p.reflectivity.value = f.reflectivity, p.ior.value = f.ior, p.refractionRatio.value = f.refractionRatio), f.lightMap) {
      p.lightMap.value = f.lightMap;
      const _ = i.useLegacyLights === !0 ? Math.PI : 1;
      p.lightMapIntensity.value = f.lightMapIntensity * _, t(f.lightMap, p.lightMapTransform);
    }
    f.aoMap && (p.aoMap.value = f.aoMap, p.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, p.aoMapTransform));
  }
  function o(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, f.map && (p.map.value = f.map, t(f.map, p.mapTransform));
  }
  function a(p, f) {
    p.dashSize.value = f.dashSize, p.totalSize.value = f.dashSize + f.gapSize, p.scale.value = f.scale;
  }
  function c(p, f, y, _) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.size.value = f.size * y, p.scale.value = _ * 0.5, f.map && (p.map.value = f.map, t(f.map, p.uvTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function l(p, f) {
    p.diffuse.value.copy(f.color), p.opacity.value = f.opacity, p.rotation.value = f.rotation, f.map && (p.map.value = f.map, t(f.map, p.mapTransform)), f.alphaMap && (p.alphaMap.value = f.alphaMap), f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
  }
  function h(p, f) {
    p.specular.value.copy(f.specular), p.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(p, f) {
    f.gradientMap && (p.gradientMap.value = f.gradientMap);
  }
  function d(p, f) {
    p.metalness.value = f.metalness, f.metalnessMap && (p.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, p.metalnessMapTransform)), p.roughness.value = f.roughness, f.roughnessMap && (p.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, p.roughnessMapTransform)), e.get(f).envMap && (p.envMapIntensity.value = f.envMapIntensity);
  }
  function m(p, f, y) {
    p.ior.value = f.ior, f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), p.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, p.sheenColorMapTransform)), f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))), f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat, p.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, p.clearcoatMapTransform)), f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform), p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === pt && p.clearcoatNormalScale.value.negate())), f.iridescence > 0 && (p.iridescence.value = f.iridescence, p.iridescenceIOR.value = f.iridescenceIOR, p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, p.iridescenceMapTransform)), f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))), f.transmission > 0 && (p.transmission.value = f.transmission, p.transmissionSamplerMap.value = y.texture, p.transmissionSamplerSize.value.set(y.width, y.height), f.transmissionMap && (p.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, p.transmissionMapTransform)), p.thickness.value = f.thickness, f.thicknessMap && (p.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, p.thicknessMapTransform)), p.attenuationDistance.value = f.attenuationDistance, p.attenuationColor.value.copy(f.attenuationColor)), p.specularIntensity.value = f.specularIntensity, p.specularColor.value.copy(f.specularColor), f.specularColorMap && (p.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, p.specularColorMapTransform)), f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function g(p, f) {
    f.matcap && (p.matcap.value = f.matcap);
  }
  function x(p, f) {
    const y = e.get(f).light;
    p.referencePosition.value.setFromMatrixPosition(y.matrixWorld), p.nearDistance.value = y.shadow.camera.near, p.farDistance.value = y.shadow.camera.far;
  }
  return {
    refreshFogUniforms: n,
    refreshMaterialUniforms: r
  };
}
function pm(i, e, t, n) {
  let r = {}, s = {}, o = [];
  const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function c(y, _) {
    const b = _.program;
    n.uniformBlockBinding(y, b);
  }
  function l(y, _) {
    let b = r[y.id];
    b === void 0 && (g(y), b = h(y), r[y.id] = b, y.addEventListener("dispose", p));
    const E = _.program;
    n.updateUBOMapping(y, E);
    const w = e.render.frame;
    s[y.id] !== w && (d(y), s[y.id] = w);
  }
  function h(y) {
    const _ = u();
    y.__bindingPointIndex = _;
    const b = i.createBuffer(), E = y.__size, w = y.usage;
    return i.bindBuffer(i.UNIFORM_BUFFER, b), i.bufferData(i.UNIFORM_BUFFER, E, w), i.bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, _, b), b;
  }
  function u() {
    for (let y = 0; y < a; y++)
      if (o.indexOf(y) === -1)
        return o.push(y), y;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(y) {
    const _ = r[y.id], b = y.uniforms, E = y.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, _);
    for (let w = 0, q = b.length; w < q; w++) {
      const N = b[w];
      if (m(N, w, E) === !0) {
        const v = N.__offset, A = Array.isArray(N.value) ? N.value : [N.value];
        let V = 0;
        for (let re = 0; re < A.length; re++) {
          const U = A[re], O = x(U);
          typeof U == "number" ? (N.__data[0] = U, i.bufferSubData(i.UNIFORM_BUFFER, v + V, N.__data)) : U.isMatrix3 ? (N.__data[0] = U.elements[0], N.__data[1] = U.elements[1], N.__data[2] = U.elements[2], N.__data[3] = U.elements[0], N.__data[4] = U.elements[3], N.__data[5] = U.elements[4], N.__data[6] = U.elements[5], N.__data[7] = U.elements[0], N.__data[8] = U.elements[6], N.__data[9] = U.elements[7], N.__data[10] = U.elements[8], N.__data[11] = U.elements[0]) : (U.toArray(N.__data, V), V += O.storage / Float32Array.BYTES_PER_ELEMENT);
        }
        i.bufferSubData(i.UNIFORM_BUFFER, v, N.__data);
      }
    }
    i.bindBuffer(i.UNIFORM_BUFFER, null);
  }
  function m(y, _, b) {
    const E = y.value;
    if (b[_] === void 0) {
      if (typeof E == "number")
        b[_] = E;
      else {
        const w = Array.isArray(E) ? E : [E], q = [];
        for (let N = 0; N < w.length; N++)
          q.push(w[N].clone());
        b[_] = q;
      }
      return !0;
    } else if (typeof E == "number") {
      if (b[_] !== E)
        return b[_] = E, !0;
    } else {
      const w = Array.isArray(b[_]) ? b[_] : [b[_]], q = Array.isArray(E) ? E : [E];
      for (let N = 0; N < w.length; N++) {
        const v = w[N];
        if (v.equals(q[N]) === !1)
          return v.copy(q[N]), !0;
      }
    }
    return !1;
  }
  function g(y) {
    const _ = y.uniforms;
    let b = 0;
    const E = 16;
    let w = 0;
    for (let q = 0, N = _.length; q < N; q++) {
      const v = _[q], A = {
        boundary: 0,
        // bytes
        storage: 0
        // bytes
      }, V = Array.isArray(v.value) ? v.value : [v.value];
      for (let re = 0, U = V.length; re < U; re++) {
        const O = V[re], H = x(O);
        A.boundary += H.boundary, A.storage += H.storage;
      }
      if (v.__data = new Float32Array(A.storage / Float32Array.BYTES_PER_ELEMENT), v.__offset = b, q > 0) {
        w = b % E;
        const re = E - w;
        w !== 0 && re - A.boundary < 0 && (b += E - w, v.__offset = b);
      }
      b += A.storage;
    }
    return w = b % E, w > 0 && (b += E - w), y.__size = b, y.__cache = {}, this;
  }
  function x(y) {
    const _ = {
      boundary: 0,
      // bytes
      storage: 0
      // bytes
    };
    return typeof y == "number" ? (_.boundary = 4, _.storage = 4) : y.isVector2 ? (_.boundary = 8, _.storage = 8) : y.isVector3 || y.isColor ? (_.boundary = 16, _.storage = 12) : y.isVector4 ? (_.boundary = 16, _.storage = 16) : y.isMatrix3 ? (_.boundary = 48, _.storage = 48) : y.isMatrix4 ? (_.boundary = 64, _.storage = 64) : y.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), _;
  }
  function p(y) {
    const _ = y.target;
    _.removeEventListener("dispose", p);
    const b = o.indexOf(_.__bindingPointIndex);
    o.splice(b, 1), i.deleteBuffer(r[_.id]), delete r[_.id], delete s[_.id];
  }
  function f() {
    for (const y in r)
      i.deleteBuffer(r[y]);
    o = [], r = {}, s = {};
  }
  return {
    bind: c,
    update: l,
    dispose: f
  };
}
function gm() {
  const i = ar("canvas");
  return i.style.display = "block", i;
}
class Qo {
  constructor(e = {}) {
    const {
      canvas: t = gm(),
      context: n = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: o = !1,
      antialias: a = !1,
      premultipliedAlpha: c = !0,
      preserveDrawingBuffer: l = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1
    } = e;
    this.isWebGLRenderer = !0;
    let d;
    n !== null ? d = n.getContextAttributes().alpha : d = o;
    let m = null, g = null;
    const x = [], p = [];
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
    }, this.autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this.autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this.localClippingEnabled = !1, this.outputColorSpace = Ue, this.useLegacyLights = !0, this.toneMapping = nn, this.toneMappingExposure = 1;
    const f = this;
    let y = !1, _ = 0, b = 0, E = null, w = -1, q = null;
    const N = new je(), v = new je();
    let A = null, V = t.width, re = t.height, U = 1, O = null, H = null;
    const ne = new je(0, 0, V, re), K = new je(0, 0, V, re);
    let j = !1;
    const Q = new ys();
    let ie = !1, pe = !1, ce = null;
    const G = new Ke(), Y = new R(), ae = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function fe() {
      return E === null ? U : 1;
    }
    let C = n;
    function ye(S, F) {
      for (let X = 0; X < S.length; X++) {
        const I = S[X], Z = t.getContext(I, F);
        if (Z !== null)
          return Z;
      }
      return null;
    }
    try {
      const S = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: a,
        premultipliedAlpha: c,
        preserveDrawingBuffer: l,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u
      };
      if ("setAttribute" in t && t.setAttribute("data-engine", `three.js r${Ss}`), t.addEventListener("webglcontextlost", Ee, !1), t.addEventListener("webglcontextrestored", qe, !1), t.addEventListener("webglcontextcreationerror", Be, !1), C === null) {
        const F = ["webgl2", "webgl", "experimental-webgl"];
        if (f.isWebGL1Renderer === !0 && F.shift(), C = ye(F, S), C === null)
          throw ye(F) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
      C.getShaderPrecisionFormat === void 0 && (C.getShaderPrecisionFormat = function() {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
    } catch (S) {
      throw console.error("THREE.WebGLRenderer: " + S.message), S;
    }
    let Pe, le, Me, $, k, te, ge, he, Ae, we, Se, Le, Oe, T, M, z, D, ee, ue, P, J, B, de, ve;
    function Te() {
      Pe = new wf(C), le = new Sf(C, Pe, e), Pe.init(le), B = new cm(C, Pe, le), Me = new om(C, Pe, le), $ = new Cf(C), k = new Yd(), te = new lm(C, Pe, Me, k, le, B, $), ge = new yf(f), he = new Af(f), Ae = new Gc(C, le), de = new vf(C, Pe, Ae, le), we = new Pf(C, Ae, $, de), Se = new Uf(C, we, Ae, $), ue = new Df(C, le, te), z = new Ef(k), Le = new Xd(f, ge, he, Pe, le, de, z), Oe = new mm(f, k), T = new Zd(), M = new tm(Pe, le), ee = new xf(f, ge, he, Me, Se, d, c), D = new am(f, Se, le), ve = new pm(C, $, le, Me), P = new Mf(C, Pe, $, le), J = new Rf(C, Pe, $, le), $.programs = Le.programs, f.capabilities = le, f.extensions = Pe, f.properties = k, f.renderLists = T, f.shadowMap = D, f.state = Me, f.info = $;
    }
    Te();
    const _e = new dm(f, C);
    this.xr = _e, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      const S = Pe.get("WEBGL_lose_context");
      S && S.loseContext();
    }, this.forceContextRestore = function() {
      const S = Pe.get("WEBGL_lose_context");
      S && S.restoreContext();
    }, this.getPixelRatio = function() {
      return U;
    }, this.setPixelRatio = function(S) {
      S !== void 0 && (U = S, this.setSize(V, re, !1));
    }, this.getSize = function(S) {
      return S.set(V, re);
    }, this.setSize = function(S, F, X = !0) {
      if (_e.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      V = S, re = F, t.width = Math.floor(S * U), t.height = Math.floor(F * U), X === !0 && (t.style.width = S + "px", t.style.height = F + "px"), this.setViewport(0, 0, S, F);
    }, this.getDrawingBufferSize = function(S) {
      return S.set(V * U, re * U).floor();
    }, this.setDrawingBufferSize = function(S, F, X) {
      V = S, re = F, U = X, t.width = Math.floor(S * X), t.height = Math.floor(F * X), this.setViewport(0, 0, S, F);
    }, this.getCurrentViewport = function(S) {
      return S.copy(N);
    }, this.getViewport = function(S) {
      return S.copy(ne);
    }, this.setViewport = function(S, F, X, I) {
      S.isVector4 ? ne.set(S.x, S.y, S.z, S.w) : ne.set(S, F, X, I), Me.viewport(N.copy(ne).multiplyScalar(U).floor());
    }, this.getScissor = function(S) {
      return S.copy(K);
    }, this.setScissor = function(S, F, X, I) {
      S.isVector4 ? K.set(S.x, S.y, S.z, S.w) : K.set(S, F, X, I), Me.scissor(v.copy(K).multiplyScalar(U).floor());
    }, this.getScissorTest = function() {
      return j;
    }, this.setScissorTest = function(S) {
      Me.setScissorTest(j = S);
    }, this.setOpaqueSort = function(S) {
      O = S;
    }, this.setTransparentSort = function(S) {
      H = S;
    }, this.getClearColor = function(S) {
      return S.copy(ee.getClearColor());
    }, this.setClearColor = function() {
      ee.setClearColor.apply(ee, arguments);
    }, this.getClearAlpha = function() {
      return ee.getClearAlpha();
    }, this.setClearAlpha = function() {
      ee.setClearAlpha.apply(ee, arguments);
    }, this.clear = function(S = !0, F = !0, X = !0) {
      let I = 0;
      S && (I |= C.COLOR_BUFFER_BIT), F && (I |= C.DEPTH_BUFFER_BIT), X && (I |= C.STENCIL_BUFFER_BIT), C.clear(I);
    }, this.clearColor = function() {
      this.clear(!0, !1, !1);
    }, this.clearDepth = function() {
      this.clear(!1, !0, !1);
    }, this.clearStencil = function() {
      this.clear(!1, !1, !0);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", Ee, !1), t.removeEventListener("webglcontextrestored", qe, !1), t.removeEventListener("webglcontextcreationerror", Be, !1), T.dispose(), M.dispose(), k.dispose(), ge.dispose(), he.dispose(), Se.dispose(), de.dispose(), ve.dispose(), Le.dispose(), _e.dispose(), _e.removeEventListener("sessionstart", be), _e.removeEventListener("sessionend", Xe), ce && (ce.dispose(), ce = null), Ye.stop();
    };
    function Ee(S) {
      S.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), y = !0;
    }
    function qe() {
      console.log("THREE.WebGLRenderer: Context Restored."), y = !1;
      const S = $.autoReset, F = D.enabled, X = D.autoUpdate, I = D.needsUpdate, Z = D.type;
      Te(), $.autoReset = S, D.enabled = F, D.autoUpdate = X, D.needsUpdate = I, D.type = Z;
    }
    function Be(S) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage);
    }
    function Je(S) {
      const F = S.target;
      F.removeEventListener("dispose", Je), L(F);
    }
    function L(S) {
      W(S), k.remove(S);
    }
    function W(S) {
      const F = k.get(S).programs;
      F !== void 0 && (F.forEach(function(X) {
        Le.releaseProgram(X);
      }), S.isShaderMaterial && Le.releaseShaderCache(S));
    }
    this.renderBufferDirect = function(S, F, X, I, Z, Re) {
      F === null && (F = ae);
      const Ce = Z.isMesh && Z.matrixWorld.determinant() < 0, De = pl(S, F, X, I, Z);
      Me.setMaterial(I, Ce);
      let Ne = X.index, ze = 1;
      I.wireframe === !0 && (Ne = we.getWireframeAttribute(X), ze = 2);
      const Ge = X.drawRange, He = X.attributes.position;
      let We = Ge.start * ze, ut = (Ge.start + Ge.count) * ze;
      Re !== null && (We = Math.max(We, Re.start * ze), ut = Math.min(ut, (Re.start + Re.count) * ze)), Ne !== null ? (We = Math.max(We, 0), ut = Math.min(ut, Ne.count)) : He != null && (We = Math.max(We, 0), ut = Math.min(ut, He.count));
      const Ct = ut - We;
      if (Ct < 0 || Ct === 1 / 0)
        return;
      de.setup(Z, I, De, X, Ne);
      let fn, Qe = P;
      if (Ne !== null && (fn = Ae.get(Ne), Qe = J, Qe.setIndex(fn)), Z.isMesh)
        I.wireframe === !0 ? (Me.setLineWidth(I.wireframeLinewidth * fe()), Qe.setMode(C.LINES)) : Qe.setMode(C.TRIANGLES);
      else if (Z.isLine) {
        let ke = I.linewidth;
        ke === void 0 && (ke = 1), Me.setLineWidth(ke * fe()), Z.isLineSegments ? Qe.setMode(C.LINES) : Z.isLineLoop ? Qe.setMode(C.LINE_LOOP) : Qe.setMode(C.LINE_STRIP);
      } else
        Z.isPoints ? Qe.setMode(C.POINTS) : Z.isSprite && Qe.setMode(C.TRIANGLES);
      if (Z.isInstancedMesh)
        Qe.renderInstances(We, Ct, Z.count);
      else if (X.isInstancedBufferGeometry) {
        const ke = X._maxInstanceCount !== void 0 ? X._maxInstanceCount : 1 / 0, _r = Math.min(X.instanceCount, ke);
        Qe.renderInstances(We, Ct, _r);
      } else
        Qe.render(We, Ct);
    }, this.compile = function(S, F) {
      function X(I, Z, Re) {
        I.transparent === !0 && I.side === kt && I.forceSinglePass === !1 ? (I.side = pt, I.needsUpdate = !0, Ci(I, Z, Re), I.side = un, I.needsUpdate = !0, Ci(I, Z, Re), I.side = kt) : Ci(I, Z, Re);
      }
      g = M.get(S), g.init(), p.push(g), S.traverseVisible(function(I) {
        I.isLight && I.layers.test(F.layers) && (g.pushLight(I), I.castShadow && g.pushShadow(I));
      }), g.setupLights(f.useLegacyLights), S.traverse(function(I) {
        const Z = I.material;
        if (Z)
          if (Array.isArray(Z))
            for (let Re = 0; Re < Z.length; Re++) {
              const Ce = Z[Re];
              X(Ce, S, I);
            }
          else
            X(Z, S, I);
      }), p.pop(), g = null;
    };
    let se = null;
    function xe(S) {
      se && se(S);
    }
    function be() {
      Ye.stop();
    }
    function Xe() {
      Ye.start();
    }
    const Ye = new jo();
    Ye.setAnimationLoop(xe), typeof self < "u" && Ye.setContext(self), this.setAnimationLoop = function(S) {
      se = S, _e.setAnimationLoop(S), S === null ? Ye.stop() : Ye.start();
    }, _e.addEventListener("sessionstart", be), _e.addEventListener("sessionend", Xe), this.render = function(S, F) {
      if (F !== void 0 && F.isCamera !== !0) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (y === !0)
        return;
      S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(), F.parent === null && F.matrixWorldAutoUpdate === !0 && F.updateMatrixWorld(), _e.enabled === !0 && _e.isPresenting === !0 && (_e.cameraAutoUpdate === !0 && _e.updateCamera(F), F = _e.getCamera()), S.isScene === !0 && S.onBeforeRender(f, S, F, E), g = M.get(S, p.length), g.init(), p.push(g), G.multiplyMatrices(F.projectionMatrix, F.matrixWorldInverse), Q.setFromProjectionMatrix(G), pe = this.localClippingEnabled, ie = z.init(this.clippingPlanes, pe), m = T.get(S, x.length), m.init(), x.push(m), lt(S, F, 0, f.sortObjects), m.finish(), f.sortObjects === !0 && m.sort(O, H), ie === !0 && z.beginShadows();
      const X = g.state.shadowsArray;
      if (D.render(X, S, F), ie === !0 && z.endShadows(), this.info.autoReset === !0 && this.info.reset(), ee.render(m, S), g.setupLights(f.useLegacyLights), F.isArrayCamera) {
        const I = F.cameras;
        for (let Z = 0, Re = I.length; Z < Re; Z++) {
          const Ce = I[Z];
          rn(m, S, Ce, Ce.viewport);
        }
      } else
        rn(m, S, F);
      E !== null && (te.updateMultisampleRenderTarget(E), te.updateRenderTargetMipmap(E)), S.isScene === !0 && S.onAfterRender(f, S, F), de.resetDefaultState(), w = -1, q = null, p.pop(), p.length > 0 ? g = p[p.length - 1] : g = null, x.pop(), x.length > 0 ? m = x[x.length - 1] : m = null;
    };
    function lt(S, F, X, I) {
      if (S.visible === !1)
        return;
      if (S.layers.test(F.layers)) {
        if (S.isGroup)
          X = S.renderOrder;
        else if (S.isLOD)
          S.autoUpdate === !0 && S.update(F);
        else if (S.isLight)
          g.pushLight(S), S.castShadow && g.pushShadow(S);
        else if (S.isSprite) {
          if (!S.frustumCulled || Q.intersectsSprite(S)) {
            I && Y.setFromMatrixPosition(S.matrixWorld).applyMatrix4(G);
            const Ce = Se.update(S), De = S.material;
            De.visible && m.push(S, Ce, De, X, Y.z, null);
          }
        } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || Q.intersectsObject(S))) {
          S.isSkinnedMesh && S.skeleton.frame !== $.render.frame && (S.skeleton.update(), S.skeleton.frame = $.render.frame);
          const Ce = Se.update(S), De = S.material;
          if (I && (Ce.boundingSphere === null && Ce.computeBoundingSphere(), Y.copy(Ce.boundingSphere.center).applyMatrix4(S.matrixWorld).applyMatrix4(G)), Array.isArray(De)) {
            const Ne = Ce.groups;
            for (let ze = 0, Ge = Ne.length; ze < Ge; ze++) {
              const He = Ne[ze], We = De[He.materialIndex];
              We && We.visible && m.push(S, Ce, We, X, Y.z, He);
            }
          } else
            De.visible && m.push(S, Ce, De, X, Y.z, null);
        }
      }
      const Re = S.children;
      for (let Ce = 0, De = Re.length; Ce < De; Ce++)
        lt(Re[Ce], F, X, I);
    }
    function rn(S, F, X, I) {
      const Z = S.opaque, Re = S.transmissive, Ce = S.transparent;
      g.setupLightsView(X), ie === !0 && z.setGlobalState(f.clippingPlanes, X), Re.length > 0 && $e(Z, Re, F, X), I && Me.viewport(N.copy(I)), Z.length > 0 && Tt(Z, F, X), Re.length > 0 && Tt(Re, F, X), Ce.length > 0 && Tt(Ce, F, X), Me.buffers.depth.setTest(!0), Me.buffers.depth.setMask(!0), Me.buffers.color.setMask(!0), Me.setPolygonOffset(!1);
    }
    function $e(S, F, X, I) {
      if (ce === null) {
        const De = le.isWebGL2;
        ce = new zt(1024, 1024, {
          generateMipmaps: !0,
          type: Pe.has("EXT_color_buffer_half_float") ? Ti : An,
          minFilter: yi,
          samples: De && a === !0 ? 4 : 0
        });
      }
      const Z = f.getRenderTarget();
      f.setRenderTarget(ce), f.clear();
      const Re = f.toneMapping;
      f.toneMapping = nn, Tt(S, X, I), te.updateMultisampleRenderTarget(ce), te.updateRenderTargetMipmap(ce);
      let Ce = !1;
      for (let De = 0, Ne = F.length; De < Ne; De++) {
        const ze = F[De], Ge = ze.object, He = ze.geometry, We = ze.material, ut = ze.group;
        if (We.side === kt && Ge.layers.test(I.layers)) {
          const Ct = We.side;
          We.side = pt, We.needsUpdate = !0, Gt(Ge, X, I, He, We, ut), We.side = Ct, We.needsUpdate = !0, Ce = !0;
        }
      }
      Ce === !0 && (te.updateMultisampleRenderTarget(ce), te.updateRenderTargetMipmap(ce)), f.setRenderTarget(Z), f.toneMapping = Re;
    }
    function Tt(S, F, X) {
      const I = F.isScene === !0 ? F.overrideMaterial : null;
      for (let Z = 0, Re = S.length; Z < Re; Z++) {
        const Ce = S[Z], De = Ce.object, Ne = Ce.geometry, ze = I === null ? Ce.material : I, Ge = Ce.group;
        De.layers.test(X.layers) && Gt(De, F, X, Ne, ze, Ge);
      }
    }
    function Gt(S, F, X, I, Z, Re) {
      S.onBeforeRender(f, F, X, I, Z, Re), S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse, S.matrixWorld), S.normalMatrix.getNormalMatrix(S.modelViewMatrix), Z.onBeforeRender(f, F, X, I, S, Re), Z.transparent === !0 && Z.side === kt && Z.forceSinglePass === !1 ? (Z.side = pt, Z.needsUpdate = !0, f.renderBufferDirect(X, F, I, Z, S, Re), Z.side = un, Z.needsUpdate = !0, f.renderBufferDirect(X, F, I, Z, S, Re), Z.side = kt) : f.renderBufferDirect(X, F, I, Z, S, Re), S.onAfterRender(f, F, X, I, Z, Re);
    }
    function Ci(S, F, X) {
      F.isScene !== !0 && (F = ae);
      const I = k.get(S), Z = g.state.lights, Re = g.state.shadowsArray, Ce = Z.state.version, De = Le.getParameters(S, Z.state, Re, F, X), Ne = Le.getProgramCacheKey(De);
      let ze = I.programs;
      I.environment = S.isMeshStandardMaterial ? F.environment : null, I.fog = F.fog, I.envMap = (S.isMeshStandardMaterial ? he : ge).get(S.envMap || I.environment), ze === void 0 && (S.addEventListener("dispose", Je), ze = /* @__PURE__ */ new Map(), I.programs = ze);
      let Ge = ze.get(Ne);
      if (Ge !== void 0) {
        if (I.currentProgram === Ge && I.lightsStateVersion === Ce)
          return Ds(S, De), Ge;
      } else
        De.uniforms = Le.getUniforms(S), S.onBuild(X, De, f), S.onBeforeCompile(De, f), Ge = Le.acquireProgram(De, Ne), ze.set(Ne, Ge), I.uniforms = De.uniforms;
      const He = I.uniforms;
      (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (He.clippingPlanes = z.uniform), Ds(S, De), I.needsLights = _l(S), I.lightsStateVersion = Ce, I.needsLights && (He.ambientLightColor.value = Z.state.ambient, He.lightProbe.value = Z.state.probe, He.directionalLights.value = Z.state.directional, He.directionalLightShadows.value = Z.state.directionalShadow, He.spotLights.value = Z.state.spot, He.spotLightShadows.value = Z.state.spotShadow, He.rectAreaLights.value = Z.state.rectArea, He.ltc_1.value = Z.state.rectAreaLTC1, He.ltc_2.value = Z.state.rectAreaLTC2, He.pointLights.value = Z.state.point, He.pointLightShadows.value = Z.state.pointShadow, He.hemisphereLights.value = Z.state.hemi, He.directionalShadowMap.value = Z.state.directionalShadowMap, He.directionalShadowMatrix.value = Z.state.directionalShadowMatrix, He.spotShadowMap.value = Z.state.spotShadowMap, He.spotLightMatrix.value = Z.state.spotLightMatrix, He.spotLightMap.value = Z.state.spotLightMap, He.pointShadowMap.value = Z.state.pointShadowMap, He.pointShadowMatrix.value = Z.state.pointShadowMatrix);
      const We = Ge.getUniforms(), ut = rr.seqWithValue(We.seq, He);
      return I.currentProgram = Ge, I.uniformsList = ut, Ge;
    }
    function Ds(S, F) {
      const X = k.get(S);
      X.outputColorSpace = F.outputColorSpace, X.instancing = F.instancing, X.skinning = F.skinning, X.morphTargets = F.morphTargets, X.morphNormals = F.morphNormals, X.morphColors = F.morphColors, X.morphTargetsCount = F.morphTargetsCount, X.numClippingPlanes = F.numClippingPlanes, X.numIntersection = F.numClipIntersection, X.vertexAlphas = F.vertexAlphas, X.vertexTangents = F.vertexTangents, X.toneMapping = F.toneMapping;
    }
    function pl(S, F, X, I, Z) {
      F.isScene !== !0 && (F = ae), te.resetTextureUnits();
      const Re = F.fog, Ce = I.isMeshStandardMaterial ? F.environment : null, De = E === null ? f.outputColorSpace : E.isXRRenderTarget === !0 ? E.texture.colorSpace : Xt, Ne = (I.isMeshStandardMaterial ? he : ge).get(I.envMap || Ce), ze = I.vertexColors === !0 && !!X.attributes.color && X.attributes.color.itemSize === 4, Ge = !!I.normalMap && !!X.attributes.tangent, He = !!X.morphAttributes.position, We = !!X.morphAttributes.normal, ut = !!X.morphAttributes.color, Ct = I.toneMapped ? f.toneMapping : nn, fn = X.morphAttributes.position || X.morphAttributes.normal || X.morphAttributes.color, Qe = fn !== void 0 ? fn.length : 0, ke = k.get(I), _r = g.state.lights;
      if (ie === !0 && (pe === !0 || S !== q)) {
        const _t = S === q && I.id === w;
        z.setState(I, S, _t);
      }
      let rt = !1;
      I.version === ke.__version ? (ke.needsLights && ke.lightsStateVersion !== _r.state.version || ke.outputColorSpace !== De || Z.isInstancedMesh && ke.instancing === !1 || !Z.isInstancedMesh && ke.instancing === !0 || Z.isSkinnedMesh && ke.skinning === !1 || !Z.isSkinnedMesh && ke.skinning === !0 || ke.envMap !== Ne || I.fog === !0 && ke.fog !== Re || ke.numClippingPlanes !== void 0 && (ke.numClippingPlanes !== z.numPlanes || ke.numIntersection !== z.numIntersection) || ke.vertexAlphas !== ze || ke.vertexTangents !== Ge || ke.morphTargets !== He || ke.morphNormals !== We || ke.morphColors !== ut || ke.toneMapping !== Ct || le.isWebGL2 === !0 && ke.morphTargetsCount !== Qe) && (rt = !0) : (rt = !0, ke.__version = I.version);
      let dn = ke.currentProgram;
      rt === !0 && (dn = Ci(I, F, Z));
      let Us = !1, fi = !1, xr = !1;
      const ft = dn.getUniforms(), mn = ke.uniforms;
      if (Me.useProgram(dn.program) && (Us = !0, fi = !0, xr = !0), I.id !== w && (w = I.id, fi = !0), Us || q !== S) {
        if (ft.setValue(C, "projectionMatrix", S.projectionMatrix), le.logarithmicDepthBuffer && ft.setValue(
          C,
          "logDepthBufFC",
          2 / (Math.log(S.far + 1) / Math.LN2)
        ), q !== S && (q = S, fi = !0, xr = !0), I.isShaderMaterial || I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshStandardMaterial || I.envMap) {
          const _t = ft.map.cameraPosition;
          _t !== void 0 && _t.setValue(
            C,
            Y.setFromMatrixPosition(S.matrixWorld)
          );
        }
        (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial) && ft.setValue(C, "isOrthographic", S.isOrthographicCamera === !0), (I.isMeshPhongMaterial || I.isMeshToonMaterial || I.isMeshLambertMaterial || I.isMeshBasicMaterial || I.isMeshStandardMaterial || I.isShaderMaterial || I.isShadowMaterial || Z.isSkinnedMesh) && ft.setValue(C, "viewMatrix", S.matrixWorldInverse);
      }
      if (Z.isSkinnedMesh) {
        ft.setOptional(C, Z, "bindMatrix"), ft.setOptional(C, Z, "bindMatrixInverse");
        const _t = Z.skeleton;
        _t && (le.floatVertexTextures ? (_t.boneTexture === null && _t.computeBoneTexture(), ft.setValue(C, "boneTexture", _t.boneTexture, te), ft.setValue(C, "boneTextureSize", _t.boneTextureSize)) : console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."));
      }
      const vr = X.morphAttributes;
      if ((vr.position !== void 0 || vr.normal !== void 0 || vr.color !== void 0 && le.isWebGL2 === !0) && ue.update(Z, X, dn), (fi || ke.receiveShadow !== Z.receiveShadow) && (ke.receiveShadow = Z.receiveShadow, ft.setValue(C, "receiveShadow", Z.receiveShadow)), I.isMeshGouraudMaterial && I.envMap !== null && (mn.envMap.value = Ne, mn.flipEnvMap.value = Ne.isCubeTexture && Ne.isRenderTargetTexture === !1 ? -1 : 1), fi && (ft.setValue(C, "toneMappingExposure", f.toneMappingExposure), ke.needsLights && gl(mn, xr), Re && I.fog === !0 && Oe.refreshFogUniforms(mn, Re), Oe.refreshMaterialUniforms(mn, I, U, re, ce), rr.upload(C, ke.uniformsList, mn, te)), I.isShaderMaterial && I.uniformsNeedUpdate === !0 && (rr.upload(C, ke.uniformsList, mn, te), I.uniformsNeedUpdate = !1), I.isSpriteMaterial && ft.setValue(C, "center", Z.center), ft.setValue(C, "modelViewMatrix", Z.modelViewMatrix), ft.setValue(C, "normalMatrix", Z.normalMatrix), ft.setValue(C, "modelMatrix", Z.matrixWorld), I.isShaderMaterial || I.isRawShaderMaterial) {
        const _t = I.uniformsGroups;
        for (let Mr = 0, xl = _t.length; Mr < xl; Mr++)
          if (le.isWebGL2) {
            const Is = _t[Mr];
            ve.update(Is, dn), ve.bind(Is, dn);
          } else
            console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.");
      }
      return dn;
    }
    function gl(S, F) {
      S.ambientLightColor.needsUpdate = F, S.lightProbe.needsUpdate = F, S.directionalLights.needsUpdate = F, S.directionalLightShadows.needsUpdate = F, S.pointLights.needsUpdate = F, S.pointLightShadows.needsUpdate = F, S.spotLights.needsUpdate = F, S.spotLightShadows.needsUpdate = F, S.rectAreaLights.needsUpdate = F, S.hemisphereLights.needsUpdate = F;
    }
    function _l(S) {
      return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0;
    }
    this.getActiveCubeFace = function() {
      return _;
    }, this.getActiveMipmapLevel = function() {
      return b;
    }, this.getRenderTarget = function() {
      return E;
    }, this.setRenderTargetTextures = function(S, F, X) {
      k.get(S.texture).__webglTexture = F, k.get(S.depthTexture).__webglTexture = X;
      const I = k.get(S);
      I.__hasExternalTextures = !0, I.__hasExternalTextures && (I.__autoAllocateDepthBuffer = X === void 0, I.__autoAllocateDepthBuffer || Pe.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), I.__useRenderToTexture = !1));
    }, this.setRenderTargetFramebuffer = function(S, F) {
      const X = k.get(S);
      X.__webglFramebuffer = F, X.__useDefaultFramebuffer = F === void 0;
    }, this.setRenderTarget = function(S, F = 0, X = 0) {
      E = S, _ = F, b = X;
      let I = !0, Z = null, Re = !1, Ce = !1;
      if (S) {
        const Ne = k.get(S);
        Ne.__useDefaultFramebuffer !== void 0 ? (Me.bindFramebuffer(C.FRAMEBUFFER, null), I = !1) : Ne.__webglFramebuffer === void 0 ? te.setupRenderTarget(S) : Ne.__hasExternalTextures && te.rebindTextures(S, k.get(S.texture).__webglTexture, k.get(S.depthTexture).__webglTexture);
        const ze = S.texture;
        (ze.isData3DTexture || ze.isDataArrayTexture || ze.isCompressedArrayTexture) && (Ce = !0);
        const Ge = k.get(S).__webglFramebuffer;
        S.isWebGLCubeRenderTarget ? (Z = Ge[F], Re = !0) : le.isWebGL2 && S.samples > 0 && te.useMultisampledRTT(S) === !1 ? Z = k.get(S).__webglMultisampledFramebuffer : Z = Ge, N.copy(S.viewport), v.copy(S.scissor), A = S.scissorTest;
      } else
        N.copy(ne).multiplyScalar(U).floor(), v.copy(K).multiplyScalar(U).floor(), A = j;
      if (Me.bindFramebuffer(C.FRAMEBUFFER, Z) && le.drawBuffers && I && Me.drawBuffers(S, Z), Me.viewport(N), Me.scissor(v), Me.setScissorTest(A), Re) {
        const Ne = k.get(S.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + F, Ne.__webglTexture, X);
      } else if (Ce) {
        const Ne = k.get(S.texture), ze = F || 0;
        C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, Ne.__webglTexture, X || 0, ze);
      }
      w = -1;
    }, this.readRenderTargetPixels = function(S, F, X, I, Z, Re, Ce) {
      if (!(S && S.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let De = k.get(S).__webglFramebuffer;
      if (S.isWebGLCubeRenderTarget && Ce !== void 0 && (De = De[Ce]), De) {
        Me.bindFramebuffer(C.FRAMEBUFFER, De);
        try {
          const Ne = S.texture, ze = Ne.format, Ge = Ne.type;
          if (ze !== Bt && B.convert(ze) !== C.getParameter(C.IMPLEMENTATION_COLOR_READ_FORMAT)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          const He = Ge === Ti && (Pe.has("EXT_color_buffer_half_float") || le.isWebGL2 && Pe.has("EXT_color_buffer_float"));
          if (Ge !== An && B.convert(Ge) !== C.getParameter(C.IMPLEMENTATION_COLOR_READ_TYPE) && // Edge and Chrome Mac < 52 (#9513)
          !(Ge === En && (le.isWebGL2 || Pe.has("OES_texture_float") || Pe.has("WEBGL_color_buffer_float"))) && // Chrome Mac >= 52 and Firefox
          !He) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          F >= 0 && F <= S.width - I && X >= 0 && X <= S.height - Z && C.readPixels(F, X, I, Z, B.convert(ze), B.convert(Ge), Re);
        } finally {
          const Ne = E !== null ? k.get(E).__webglFramebuffer : null;
          Me.bindFramebuffer(C.FRAMEBUFFER, Ne);
        }
      }
    }, this.copyFramebufferToTexture = function(S, F, X = 0) {
      const I = Math.pow(2, -X), Z = Math.floor(F.image.width * I), Re = Math.floor(F.image.height * I);
      te.setTexture2D(F, 0), C.copyTexSubImage2D(C.TEXTURE_2D, X, 0, 0, S.x, S.y, Z, Re), Me.unbindTexture();
    }, this.copyTextureToTexture = function(S, F, X, I = 0) {
      const Z = F.image.width, Re = F.image.height, Ce = B.convert(X.format), De = B.convert(X.type);
      te.setTexture2D(X, 0), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, X.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, X.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, X.unpackAlignment), F.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, I, S.x, S.y, Z, Re, Ce, De, F.image.data) : F.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, I, S.x, S.y, F.mipmaps[0].width, F.mipmaps[0].height, Ce, F.mipmaps[0].data) : C.texSubImage2D(C.TEXTURE_2D, I, S.x, S.y, Ce, De, F.image), I === 0 && X.generateMipmaps && C.generateMipmap(C.TEXTURE_2D), Me.unbindTexture();
    }, this.copyTextureToTexture3D = function(S, F, X, I, Z = 0) {
      if (f.isWebGL1Renderer) {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");
        return;
      }
      const Re = S.max.x - S.min.x + 1, Ce = S.max.y - S.min.y + 1, De = S.max.z - S.min.z + 1, Ne = B.convert(I.format), ze = B.convert(I.type);
      let Ge;
      if (I.isData3DTexture)
        te.setTexture3D(I, 0), Ge = C.TEXTURE_3D;
      else if (I.isDataArrayTexture)
        te.setTexture2DArray(I, 0), Ge = C.TEXTURE_2D_ARRAY;
      else {
        console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
        return;
      }
      C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
      const He = C.getParameter(C.UNPACK_ROW_LENGTH), We = C.getParameter(C.UNPACK_IMAGE_HEIGHT), ut = C.getParameter(C.UNPACK_SKIP_PIXELS), Ct = C.getParameter(C.UNPACK_SKIP_ROWS), fn = C.getParameter(C.UNPACK_SKIP_IMAGES), Qe = X.isCompressedTexture ? X.mipmaps[0] : X.image;
      C.pixelStorei(C.UNPACK_ROW_LENGTH, Qe.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Qe.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, S.min.x), C.pixelStorei(C.UNPACK_SKIP_ROWS, S.min.y), C.pixelStorei(C.UNPACK_SKIP_IMAGES, S.min.z), X.isDataTexture || X.isData3DTexture ? C.texSubImage3D(Ge, Z, F.x, F.y, F.z, Re, Ce, De, Ne, ze, Qe.data) : X.isCompressedArrayTexture ? (console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."), C.compressedTexSubImage3D(Ge, Z, F.x, F.y, F.z, Re, Ce, De, Ne, Qe.data)) : C.texSubImage3D(Ge, Z, F.x, F.y, F.z, Re, Ce, De, Ne, ze, Qe), C.pixelStorei(C.UNPACK_ROW_LENGTH, He), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, We), C.pixelStorei(C.UNPACK_SKIP_PIXELS, ut), C.pixelStorei(C.UNPACK_SKIP_ROWS, Ct), C.pixelStorei(C.UNPACK_SKIP_IMAGES, fn), Z === 0 && I.generateMipmaps && C.generateMipmap(Ge), Me.unbindTexture();
    }, this.initTexture = function(S) {
      S.isCubeTexture ? te.setTextureCube(S, 0) : S.isData3DTexture ? te.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? te.setTexture2DArray(S, 0) : te.setTexture2D(S, 0), Me.unbindTexture();
    }, this.resetState = function() {
      _ = 0, b = 0, E = null, Me.reset(), de.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get physicallyCorrectLights() {
    return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), !this.useLegacyLights;
  }
  set physicallyCorrectLights(e) {
    console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."), this.useLegacyLights = !e;
  }
  get outputEncoding() {
    return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace === Ue ? Tn : qo;
  }
  set outputEncoding(e) {
    console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."), this.outputColorSpace = e === Tn ? Ue : Xt;
  }
}
class _m extends Qo {
}
_m.prototype.isWebGL1Renderer = !0;
class cr {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = !0, this.name = "", this.color = new Ie(e), this.near = t, this.far = n;
  }
  clone() {
    return new cr(this.color, this.near, this.far);
  }
  toJSON() {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
}
class xm extends ot {
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
class pr extends hi {
  constructor(e) {
    super(), this.isLineBasicMaterial = !0, this.type = "LineBasicMaterial", this.color = new Ie(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const Ja = /* @__PURE__ */ new R(), $a = /* @__PURE__ */ new R(), Qa = /* @__PURE__ */ new Ke(), Jr = /* @__PURE__ */ new zo(), $i = /* @__PURE__ */ new ur();
class vm extends ot {
  constructor(e = new gt(), t = new pr()) {
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
        Ja.fromBufferAttribute(t, r - 1), $a.fromBufferAttribute(t, r), n[r] = n[r - 1], n[r] += Ja.distanceTo($a);
      e.setAttribute("lineDistance", new tt(n, 1));
    } else
      console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, r = this.matrixWorld, s = e.params.Line.threshold, o = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), $i.copy(n.boundingSphere), $i.applyMatrix4(r), $i.radius += s, e.ray.intersectsSphere($i) === !1)
      return;
    Qa.copy(r).invert(), Jr.copy(e.ray).applyMatrix4(Qa);
    const a = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), c = a * a, l = new R(), h = new R(), u = new R(), d = new R(), m = this.isLineSegments ? 2 : 1, g = n.index, p = n.attributes.position;
    if (g !== null) {
      const f = Math.max(0, o.start), y = Math.min(g.count, o.start + o.count);
      for (let _ = f, b = y - 1; _ < b; _ += m) {
        const E = g.getX(_), w = g.getX(_ + 1);
        if (l.fromBufferAttribute(p, E), h.fromBufferAttribute(p, w), Jr.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const N = e.ray.origin.distanceTo(d);
        N < e.near || N > e.far || t.push({
          distance: N,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: _,
          face: null,
          faceIndex: null,
          object: this
        });
      }
    } else {
      const f = Math.max(0, o.start), y = Math.min(p.count, o.start + o.count);
      for (let _ = f, b = y - 1; _ < b; _ += m) {
        if (l.fromBufferAttribute(p, _), h.fromBufferAttribute(p, _ + 1), Jr.distanceSqToSegment(l, h, d, u) > c)
          continue;
        d.applyMatrix4(this.matrixWorld);
        const w = e.ray.origin.distanceTo(d);
        w < e.near || w > e.far || t.push({
          distance: w,
          // What do we want? intersection point on the ray or on the segment??
          // point: raycaster.ray.at( distance ),
          point: u.clone().applyMatrix4(this.matrixWorld),
          index: _,
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
const eo = /* @__PURE__ */ new R(), to = /* @__PURE__ */ new R();
class As extends vm {
  constructor(e, t) {
    super(e, t), this.isLineSegments = !0, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let r = 0, s = t.count; r < s; r += 2)
        eo.fromBufferAttribute(t, r), to.fromBufferAttribute(t, r + 1), n[r] = r === 0 ? 0 : n[r - 1], n[r + 1] = n[r] + eo.distanceTo(to);
      e.setAttribute("lineDistance", new tt(n, 1));
    } else
      console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Yt {
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
    const h = n[r], d = n[r + 1] - h, m = (o - h) / d;
    return (r + m) / (s - 1);
  }
  // Returns a unit vector tangent at t
  // In case any sub curve does not implement its tangent derivation,
  // 2 points a small delta apart will be used to find its gradient
  // which seems to give a reasonable approximation
  getTangent(e, t) {
    let r = e - 1e-4, s = e + 1e-4;
    r < 0 && (r = 0), s > 1 && (s = 1);
    const o = this.getPoint(r), a = this.getPoint(s), c = t || (o.isVector2 ? new oe() : new R());
    return c.copy(a).sub(o).normalize(), c;
  }
  getTangentAt(e, t) {
    const n = this.getUtoTmapping(e);
    return this.getTangent(n, t);
  }
  computeFrenetFrames(e, t) {
    const n = new R(), r = [], s = [], o = [], a = new R(), c = new Ke();
    for (let m = 0; m <= e; m++) {
      const g = m / e;
      r[m] = this.getTangentAt(g, new R());
    }
    s[0] = new R(), o[0] = new R();
    let l = Number.MAX_VALUE;
    const h = Math.abs(r[0].x), u = Math.abs(r[0].y), d = Math.abs(r[0].z);
    h <= l && (l = h, n.set(1, 0, 0)), u <= l && (l = u, n.set(0, 1, 0)), d <= l && n.set(0, 0, 1), a.crossVectors(r[0], n).normalize(), s[0].crossVectors(r[0], a), o[0].crossVectors(r[0], s[0]);
    for (let m = 1; m <= e; m++) {
      if (s[m] = s[m - 1].clone(), o[m] = o[m - 1].clone(), a.crossVectors(r[m - 1], r[m]), a.length() > Number.EPSILON) {
        a.normalize();
        const g = Math.acos(at(r[m - 1].dot(r[m]), -1, 1));
        s[m].applyMatrix4(c.makeRotationAxis(a, g));
      }
      o[m].crossVectors(r[m], s[m]);
    }
    if (t === !0) {
      let m = Math.acos(at(s[0].dot(s[e]), -1, 1));
      m /= e, r[0].dot(a.crossVectors(s[0], s[e])) > 0 && (m = -m);
      for (let g = 1; g <= e; g++)
        s[g].applyMatrix4(c.makeRotationAxis(r[g], m * g)), o[g].crossVectors(r[g], s[g]);
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
class ws extends Yt {
  constructor(e = 0, t = 0, n = 1, r = 1, s = 0, o = Math.PI * 2, a = !1, c = 0) {
    super(), this.isEllipseCurve = !0, this.type = "EllipseCurve", this.aX = e, this.aY = t, this.xRadius = n, this.yRadius = r, this.aStartAngle = s, this.aEndAngle = o, this.aClockwise = a, this.aRotation = c;
  }
  getPoint(e, t) {
    const n = t || new oe(), r = Math.PI * 2;
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
      const h = Math.cos(this.aRotation), u = Math.sin(this.aRotation), d = c - this.aX, m = l - this.aY;
      c = d * h - m * u + this.aX, l = d * u + m * h + this.aY;
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
class Mm extends ws {
  constructor(e, t, n, r, s, o) {
    super(e, t, n, n, r, s, o), this.isArcCurve = !0, this.type = "ArcCurve";
  }
}
function Ps() {
  let i = 0, e = 0, t = 0, n = 0;
  function r(s, o, a, c) {
    i = s, e = a, t = -3 * s + 3 * o - 2 * a - c, n = 2 * s - 2 * o + a + c;
  }
  return {
    initCatmullRom: function(s, o, a, c, l) {
      r(o, a, l * (a - s), l * (c - o));
    },
    initNonuniformCatmullRom: function(s, o, a, c, l, h, u) {
      let d = (o - s) / l - (a - s) / (l + h) + (a - o) / h, m = (a - o) / h - (c - o) / (h + u) + (c - a) / u;
      d *= h, m *= h, r(o, a, d, m);
    },
    calc: function(s) {
      const o = s * s, a = o * s;
      return i + e * s + t * o + n * a;
    }
  };
}
const Qi = /* @__PURE__ */ new R(), $r = /* @__PURE__ */ new Ps(), Qr = /* @__PURE__ */ new Ps(), es = /* @__PURE__ */ new Ps();
class Sm extends Yt {
  constructor(e = [], t = !1, n = "centripetal", r = 0.5) {
    super(), this.isCatmullRomCurve3 = !0, this.type = "CatmullRomCurve3", this.points = e, this.closed = t, this.curveType = n, this.tension = r;
  }
  getPoint(e, t = new R()) {
    const n = t, r = this.points, s = r.length, o = (s - (this.closed ? 0 : 1)) * e;
    let a = Math.floor(o), c = o - a;
    this.closed ? a += a > 0 ? 0 : (Math.floor(Math.abs(a) / s) + 1) * s : c === 0 && a === s - 1 && (a = s - 2, c = 1);
    let l, h;
    this.closed || a > 0 ? l = r[(a - 1) % s] : (Qi.subVectors(r[0], r[1]).add(r[0]), l = Qi);
    const u = r[a % s], d = r[(a + 1) % s];
    if (this.closed || a + 2 < s ? h = r[(a + 2) % s] : (Qi.subVectors(r[s - 1], r[s - 2]).add(r[s - 1]), h = Qi), this.curveType === "centripetal" || this.curveType === "chordal") {
      const m = this.curveType === "chordal" ? 0.5 : 0.25;
      let g = Math.pow(l.distanceToSquared(u), m), x = Math.pow(u.distanceToSquared(d), m), p = Math.pow(d.distanceToSquared(h), m);
      x < 1e-4 && (x = 1), g < 1e-4 && (g = x), p < 1e-4 && (p = x), $r.initNonuniformCatmullRom(l.x, u.x, d.x, h.x, g, x, p), Qr.initNonuniformCatmullRom(l.y, u.y, d.y, h.y, g, x, p), es.initNonuniformCatmullRom(l.z, u.z, d.z, h.z, g, x, p);
    } else
      this.curveType === "catmullrom" && ($r.initCatmullRom(l.x, u.x, d.x, h.x, this.tension), Qr.initCatmullRom(l.y, u.y, d.y, h.y, this.tension), es.initCatmullRom(l.z, u.z, d.z, h.z, this.tension));
    return n.set(
      $r.calc(c),
      Qr.calc(c),
      es.calc(c)
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
function no(i, e, t, n, r) {
  const s = (n - e) * 0.5, o = (r - t) * 0.5, a = i * i, c = i * a;
  return (2 * t - 2 * n + s + o) * c + (-3 * t + 3 * n - 2 * s - o) * a + s * i + t;
}
function Em(i, e) {
  const t = 1 - i;
  return t * t * e;
}
function ym(i, e) {
  return 2 * (1 - i) * i * e;
}
function Tm(i, e) {
  return i * i * e;
}
function Si(i, e, t, n) {
  return Em(i, e) + ym(i, t) + Tm(i, n);
}
function bm(i, e) {
  const t = 1 - i;
  return t * t * t * e;
}
function Am(i, e) {
  const t = 1 - i;
  return 3 * t * t * i * e;
}
function wm(i, e) {
  return 3 * (1 - i) * i * i * e;
}
function Pm(i, e) {
  return i * i * i * e;
}
function Ei(i, e, t, n, r) {
  return bm(i, e) + Am(i, t) + wm(i, n) + Pm(i, r);
}
class el extends Yt {
  constructor(e = new oe(), t = new oe(), n = new oe(), r = new oe()) {
    super(), this.isCubicBezierCurve = !0, this.type = "CubicBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  getPoint(e, t = new oe()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Ei(e, r.x, s.x, o.x, a.x),
      Ei(e, r.y, s.y, o.y, a.y)
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
class Rm extends Yt {
  constructor(e = new R(), t = new R(), n = new R(), r = new R()) {
    super(), this.isCubicBezierCurve3 = !0, this.type = "CubicBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n, this.v3 = r;
  }
  getPoint(e, t = new R()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2, a = this.v3;
    return n.set(
      Ei(e, r.x, s.x, o.x, a.x),
      Ei(e, r.y, s.y, o.y, a.y),
      Ei(e, r.z, s.z, o.z, a.z)
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
class Rs extends Yt {
  constructor(e = new oe(), t = new oe()) {
    super(), this.isLineCurve = !0, this.type = "LineCurve", this.v1 = e, this.v2 = t;
  }
  getPoint(e, t = new oe()) {
    const n = t;
    return e === 1 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(e).add(this.v1)), n;
  }
  // Line curve is linear, so we can overwrite default getPointAt
  getPointAt(e, t) {
    return this.getPoint(e, t);
  }
  getTangent(e, t = new oe()) {
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
class Cm extends Yt {
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
class tl extends Yt {
  constructor(e = new oe(), t = new oe(), n = new oe()) {
    super(), this.isQuadraticBezierCurve = !0, this.type = "QuadraticBezierCurve", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new oe()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Si(e, r.x, s.x, o.x),
      Si(e, r.y, s.y, o.y)
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
class Lm extends Yt {
  constructor(e = new R(), t = new R(), n = new R()) {
    super(), this.isQuadraticBezierCurve3 = !0, this.type = "QuadraticBezierCurve3", this.v0 = e, this.v1 = t, this.v2 = n;
  }
  getPoint(e, t = new R()) {
    const n = t, r = this.v0, s = this.v1, o = this.v2;
    return n.set(
      Si(e, r.x, s.x, o.x),
      Si(e, r.y, s.y, o.y),
      Si(e, r.z, s.z, o.z)
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
class nl extends Yt {
  constructor(e = []) {
    super(), this.isSplineCurve = !0, this.type = "SplineCurve", this.points = e;
  }
  getPoint(e, t = new oe()) {
    const n = t, r = this.points, s = (r.length - 1) * e, o = Math.floor(s), a = s - o, c = r[o === 0 ? o : o - 1], l = r[o], h = r[o > r.length - 2 ? r.length - 1 : o + 1], u = r[o > r.length - 3 ? r.length - 1 : o + 2];
    return n.set(
      no(a, c.x, l.x, h.x, u.x),
      no(a, c.y, l.y, h.y, u.y)
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
      this.points.push(new oe().fromArray(r));
    }
    return this;
  }
}
var il = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcCurve: Mm,
  CatmullRomCurve3: Sm,
  CubicBezierCurve: el,
  CubicBezierCurve3: Rm,
  EllipseCurve: ws,
  LineCurve: Rs,
  LineCurve3: Cm,
  QuadraticBezierCurve: tl,
  QuadraticBezierCurve3: Lm,
  SplineCurve: nl
});
class qm extends Yt {
  constructor() {
    super(), this.type = "CurvePath", this.curves = [], this.autoClose = !1;
  }
  add(e) {
    this.curves.push(e);
  }
  closePath() {
    const e = this.curves[0].getPoint(0), t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new Rs(t, e));
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
        const h = c[l];
        n && n.equals(h) || (t.push(h), n = h);
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
      this.curves.push(new il[r.type]().fromJSON(r));
    }
    return this;
  }
}
class ms extends qm {
  constructor(e) {
    super(), this.type = "Path", this.currentPoint = new oe(), e && this.setFromPoints(e);
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
    const n = new Rs(this.currentPoint.clone(), new oe(e, t));
    return this.curves.push(n), this.currentPoint.set(e, t), this;
  }
  quadraticCurveTo(e, t, n, r) {
    const s = new tl(
      this.currentPoint.clone(),
      new oe(e, t),
      new oe(n, r)
    );
    return this.curves.push(s), this.currentPoint.set(n, r), this;
  }
  bezierCurveTo(e, t, n, r, s, o) {
    const a = new el(
      this.currentPoint.clone(),
      new oe(e, t),
      new oe(n, r),
      new oe(s, o)
    );
    return this.curves.push(a), this.currentPoint.set(s, o), this;
  }
  splineThru(e) {
    const t = [this.currentPoint.clone()].concat(e), n = new nl(t);
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
    const l = this.currentPoint.x, h = this.currentPoint.y;
    return this.absellipse(e + l, t + h, n, r, s, o, a, c), this;
  }
  absellipse(e, t, n, r, s, o, a, c) {
    const l = new ws(e, t, n, r, s, o, a, c);
    if (this.curves.length > 0) {
      const u = l.getPoint(0);
      u.equals(this.currentPoint) || this.lineTo(u.x, u.y);
    }
    this.curves.push(l);
    const h = l.getPoint(1);
    return this.currentPoint.copy(h), this;
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
class sr extends ms {
  constructor(e) {
    super(e), this.uuid = ci(), this.type = "Shape", this.holes = [];
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
      this.holes.push(new ms().fromJSON(r));
    }
    return this;
  }
}
const Dm = {
  triangulate: function(i, e, t = 2) {
    const n = e && e.length, r = n ? e[0] * t : i.length;
    let s = rl(i, 0, r, t, !0);
    const o = [];
    if (!s || s.next === s.prev)
      return o;
    let a, c, l, h, u, d, m;
    if (n && (s = Om(i, e, s, t)), i.length > 80 * t) {
      a = l = i[0], c = h = i[1];
      for (let g = t; g < r; g += t)
        u = i[g], d = i[g + 1], u < a && (a = u), d < c && (c = d), u > l && (l = u), d > h && (h = d);
      m = Math.max(l - a, h - c), m = m !== 0 ? 32767 / m : 0;
    }
    return bi(s, o, t, a, c, m, 0), o;
  }
};
function rl(i, e, t, n, r) {
  let s, o;
  if (r === Zm(i, e, t, n) > 0)
    for (s = e; s < t; s += n)
      o = io(s, i[s], i[s + 1], o);
  else
    for (s = t - n; s >= e; s -= n)
      o = io(s, i[s], i[s + 1], o);
  return o && gr(o, o.next) && (wi(o), o = o.next), o;
}
function Rn(i, e) {
  if (!i)
    return i;
  e || (e = i);
  let t = i, n;
  do
    if (n = !1, !t.steiner && (gr(t, t.next) || Ze(t.prev, t, t.next) === 0)) {
      if (wi(t), t = e = t.prev, t === t.next)
        break;
      n = !0;
    } else
      t = t.next;
  while (n || t !== e);
  return e;
}
function bi(i, e, t, n, r, s, o) {
  if (!i)
    return;
  !o && s && Vm(i, n, r, s);
  let a = i, c, l;
  for (; i.prev !== i.next; ) {
    if (c = i.prev, l = i.next, s ? Im(i, n, r, s) : Um(i)) {
      e.push(c.i / t | 0), e.push(i.i / t | 0), e.push(l.i / t | 0), wi(i), i = l.next, a = l.next;
      continue;
    }
    if (i = l, i === a) {
      o ? o === 1 ? (i = Nm(Rn(i), e, t), bi(i, e, t, n, r, s, 2)) : o === 2 && Fm(i, e, t, n, r, s) : bi(Rn(i), e, t, n, r, s, 1);
      break;
    }
  }
}
function Um(i) {
  const e = i.prev, t = i, n = i.next;
  if (Ze(e, t, n) >= 0)
    return !1;
  const r = e.x, s = t.x, o = n.x, a = e.y, c = t.y, l = n.y, h = r < s ? r < o ? r : o : s < o ? s : o, u = a < c ? a < l ? a : l : c < l ? c : l, d = r > s ? r > o ? r : o : s > o ? s : o, m = a > c ? a > l ? a : l : c > l ? c : l;
  let g = n.next;
  for (; g !== e; ) {
    if (g.x >= h && g.x <= d && g.y >= u && g.y <= m && $n(r, a, s, c, o, l, g.x, g.y) && Ze(g.prev, g, g.next) >= 0)
      return !1;
    g = g.next;
  }
  return !0;
}
function Im(i, e, t, n) {
  const r = i.prev, s = i, o = i.next;
  if (Ze(r, s, o) >= 0)
    return !1;
  const a = r.x, c = s.x, l = o.x, h = r.y, u = s.y, d = o.y, m = a < c ? a < l ? a : l : c < l ? c : l, g = h < u ? h < d ? h : d : u < d ? u : d, x = a > c ? a > l ? a : l : c > l ? c : l, p = h > u ? h > d ? h : d : u > d ? u : d, f = ps(m, g, e, t, n), y = ps(x, p, e, t, n);
  let _ = i.prevZ, b = i.nextZ;
  for (; _ && _.z >= f && b && b.z <= y; ) {
    if (_.x >= m && _.x <= x && _.y >= g && _.y <= p && _ !== r && _ !== o && $n(a, h, c, u, l, d, _.x, _.y) && Ze(_.prev, _, _.next) >= 0 || (_ = _.prevZ, b.x >= m && b.x <= x && b.y >= g && b.y <= p && b !== r && b !== o && $n(a, h, c, u, l, d, b.x, b.y) && Ze(b.prev, b, b.next) >= 0))
      return !1;
    b = b.nextZ;
  }
  for (; _ && _.z >= f; ) {
    if (_.x >= m && _.x <= x && _.y >= g && _.y <= p && _ !== r && _ !== o && $n(a, h, c, u, l, d, _.x, _.y) && Ze(_.prev, _, _.next) >= 0)
      return !1;
    _ = _.prevZ;
  }
  for (; b && b.z <= y; ) {
    if (b.x >= m && b.x <= x && b.y >= g && b.y <= p && b !== r && b !== o && $n(a, h, c, u, l, d, b.x, b.y) && Ze(b.prev, b, b.next) >= 0)
      return !1;
    b = b.nextZ;
  }
  return !0;
}
function Nm(i, e, t) {
  let n = i;
  do {
    const r = n.prev, s = n.next.next;
    !gr(r, s) && sl(r, n, n.next, s) && Ai(r, s) && Ai(s, r) && (e.push(r.i / t | 0), e.push(n.i / t | 0), e.push(s.i / t | 0), wi(n), wi(n.next), n = i = s), n = n.next;
  } while (n !== i);
  return Rn(n);
}
function Fm(i, e, t, n, r, s) {
  let o = i;
  do {
    let a = o.next.next;
    for (; a !== o.prev; ) {
      if (o.i !== a.i && Xm(o, a)) {
        let c = al(o, a);
        o = Rn(o, o.next), c = Rn(c, c.next), bi(o, e, t, n, r, s, 0), bi(c, e, t, n, r, s, 0);
        return;
      }
      a = a.next;
    }
    o = o.next;
  } while (o !== i);
}
function Om(i, e, t, n) {
  const r = [];
  let s, o, a, c, l;
  for (s = 0, o = e.length; s < o; s++)
    a = e[s] * n, c = s < o - 1 ? e[s + 1] * n : i.length, l = rl(i, a, c, n, !1), l === l.next && (l.steiner = !0), r.push(Wm(l));
  for (r.sort(Bm), s = 0; s < r.length; s++)
    t = zm(r[s], t);
  return t;
}
function Bm(i, e) {
  return i.x - e.x;
}
function zm(i, e) {
  const t = Gm(i, e);
  if (!t)
    return e;
  const n = al(t, i);
  return Rn(n, n.next), Rn(t, t.next);
}
function Gm(i, e) {
  let t = e, n = -1 / 0, r;
  const s = i.x, o = i.y;
  do {
    if (o <= t.y && o >= t.next.y && t.next.y !== t.y) {
      const d = t.x + (o - t.y) * (t.next.x - t.x) / (t.next.y - t.y);
      if (d <= s && d > n && (n = d, r = t.x < t.next.x ? t : t.next, d === s))
        return r;
    }
    t = t.next;
  } while (t !== e);
  if (!r)
    return null;
  const a = r, c = r.x, l = r.y;
  let h = 1 / 0, u;
  t = r;
  do
    s >= t.x && t.x >= c && s !== t.x && $n(o < l ? s : n, o, c, l, o < l ? n : s, o, t.x, t.y) && (u = Math.abs(o - t.y) / (s - t.x), Ai(t, i) && (u < h || u === h && (t.x > r.x || t.x === r.x && Hm(r, t))) && (r = t, h = u)), t = t.next;
  while (t !== a);
  return r;
}
function Hm(i, e) {
  return Ze(i.prev, i, e.prev) < 0 && Ze(e.next, i, i.next) < 0;
}
function Vm(i, e, t, n) {
  let r = i;
  do
    r.z === 0 && (r.z = ps(r.x, r.y, e, t, n)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next;
  while (r !== i);
  r.prevZ.nextZ = null, r.prevZ = null, km(r);
}
function km(i) {
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
function ps(i, e, t, n, r) {
  return i = (i - t) * r | 0, e = (e - n) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, i | e << 1;
}
function Wm(i) {
  let e = i, t = i;
  do
    (e.x < t.x || e.x === t.x && e.y < t.y) && (t = e), e = e.next;
  while (e !== i);
  return t;
}
function $n(i, e, t, n, r, s, o, a) {
  return (r - o) * (e - a) >= (i - o) * (s - a) && (i - o) * (n - a) >= (t - o) * (e - a) && (t - o) * (s - a) >= (r - o) * (n - a);
}
function Xm(i, e) {
  return i.next.i !== e.i && i.prev.i !== e.i && !Ym(i, e) && // dones't intersect other edges
  (Ai(i, e) && Ai(e, i) && jm(i, e) && // locally visible
  (Ze(i.prev, i, e.prev) || Ze(i, e.prev, e)) || // does not create opposite-facing sectors
  gr(i, e) && Ze(i.prev, i, i.next) > 0 && Ze(e.prev, e, e.next) > 0);
}
function Ze(i, e, t) {
  return (e.y - i.y) * (t.x - e.x) - (e.x - i.x) * (t.y - e.y);
}
function gr(i, e) {
  return i.x === e.x && i.y === e.y;
}
function sl(i, e, t, n) {
  const r = tr(Ze(i, e, t)), s = tr(Ze(i, e, n)), o = tr(Ze(t, n, i)), a = tr(Ze(t, n, e));
  return !!(r !== s && o !== a || r === 0 && er(i, t, e) || s === 0 && er(i, n, e) || o === 0 && er(t, i, n) || a === 0 && er(t, e, n));
}
function er(i, e, t) {
  return e.x <= Math.max(i.x, t.x) && e.x >= Math.min(i.x, t.x) && e.y <= Math.max(i.y, t.y) && e.y >= Math.min(i.y, t.y);
}
function tr(i) {
  return i > 0 ? 1 : i < 0 ? -1 : 0;
}
function Ym(i, e) {
  let t = i;
  do {
    if (t.i !== i.i && t.next.i !== i.i && t.i !== e.i && t.next.i !== e.i && sl(t, t.next, i, e))
      return !0;
    t = t.next;
  } while (t !== i);
  return !1;
}
function Ai(i, e) {
  return Ze(i.prev, i, i.next) < 0 ? Ze(i, e, i.next) >= 0 && Ze(i, i.prev, e) >= 0 : Ze(i, e, i.prev) < 0 || Ze(i, i.next, e) < 0;
}
function jm(i, e) {
  let t = i, n = !1;
  const r = (i.x + e.x) / 2, s = (i.y + e.y) / 2;
  do
    t.y > s != t.next.y > s && t.next.y !== t.y && r < (t.next.x - t.x) * (s - t.y) / (t.next.y - t.y) + t.x && (n = !n), t = t.next;
  while (t !== i);
  return n;
}
function al(i, e) {
  const t = new gs(i.i, i.x, i.y), n = new gs(e.i, e.x, e.y), r = i.next, s = e.prev;
  return i.next = e, e.prev = i, t.next = r, r.prev = t, n.next = t, t.prev = n, s.next = n, n.prev = s, n;
}
function io(i, e, t, n) {
  const r = new gs(i, e, t);
  return n ? (r.next = n.next, r.prev = n, n.next.prev = r, n.next = r) : (r.prev = r, r.next = r), r;
}
function wi(i) {
  i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ);
}
function gs(i, e, t) {
  this.i = i, this.x = e, this.y = t, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1;
}
function Zm(i, e, t, n) {
  let r = 0;
  for (let s = e, o = t - n; s < t; s += n)
    r += (i[o] - i[s]) * (i[s + 1] + i[o + 1]), o = s;
  return r;
}
class ni {
  // calculate area of the contour polygon
  static area(e) {
    const t = e.length;
    let n = 0;
    for (let r = t - 1, s = 0; s < t; r = s++)
      n += e[r].x * e[s].y - e[s].x * e[r].y;
    return n * 0.5;
  }
  static isClockWise(e) {
    return ni.area(e) < 0;
  }
  static triangulateShape(e, t) {
    const n = [], r = [], s = [];
    ro(e), so(n, e);
    let o = e.length;
    t.forEach(ro);
    for (let c = 0; c < t.length; c++)
      r.push(o), o += t[c].length, so(n, t[c]);
    const a = Dm.triangulate(n, r);
    for (let c = 0; c < a.length; c += 3)
      s.push(a.slice(c, c + 3));
    return s;
  }
}
function ro(i) {
  const e = i.length;
  e > 2 && i[e - 1].equals(i[0]) && i.pop();
}
function so(i, e) {
  for (let t = 0; t < e.length; t++)
    i.push(e[t].x), i.push(e[t].y);
}
class Cs extends gt {
  constructor(e = new sr([new oe(0.5, 0.5), new oe(-0.5, 0.5), new oe(-0.5, -0.5), new oe(0.5, -0.5)]), t = {}) {
    super(), this.type = "ExtrudeGeometry", this.parameters = {
      shapes: e,
      options: t
    }, e = Array.isArray(e) ? e : [e];
    const n = this, r = [], s = [];
    for (let a = 0, c = e.length; a < c; a++) {
      const l = e[a];
      o(l);
    }
    this.setAttribute("position", new tt(r, 3)), this.setAttribute("uv", new tt(s, 2)), this.computeVertexNormals();
    function o(a) {
      const c = [], l = t.curveSegments !== void 0 ? t.curveSegments : 12, h = t.steps !== void 0 ? t.steps : 1, u = t.depth !== void 0 ? t.depth : 1;
      let d = t.bevelEnabled !== void 0 ? t.bevelEnabled : !0, m = t.bevelThickness !== void 0 ? t.bevelThickness : 0.2, g = t.bevelSize !== void 0 ? t.bevelSize : m - 0.1, x = t.bevelOffset !== void 0 ? t.bevelOffset : 0, p = t.bevelSegments !== void 0 ? t.bevelSegments : 3;
      const f = t.extrudePath, y = t.UVGenerator !== void 0 ? t.UVGenerator : Km;
      let _, b = !1, E, w, q, N;
      f && (_ = f.getSpacedPoints(h), b = !0, d = !1, E = f.computeFrenetFrames(h, !1), w = new R(), q = new R(), N = new R()), d || (p = 0, m = 0, g = 0, x = 0);
      const v = a.extractPoints(l);
      let A = v.shape;
      const V = v.holes;
      if (!ni.isClockWise(A)) {
        A = A.reverse();
        for (let $ = 0, k = V.length; $ < k; $++) {
          const te = V[$];
          ni.isClockWise(te) && (V[$] = te.reverse());
        }
      }
      const U = ni.triangulateShape(A, V), O = A;
      for (let $ = 0, k = V.length; $ < k; $++) {
        const te = V[$];
        A = A.concat(te);
      }
      function H($, k, te) {
        return k || console.error("THREE.ExtrudeGeometry: vec does not exist"), $.clone().addScaledVector(k, te);
      }
      const ne = A.length, K = U.length;
      function j($, k, te) {
        let ge, he, Ae;
        const we = $.x - k.x, Se = $.y - k.y, Le = te.x - $.x, Oe = te.y - $.y, T = we * we + Se * Se, M = we * Oe - Se * Le;
        if (Math.abs(M) > Number.EPSILON) {
          const z = Math.sqrt(T), D = Math.sqrt(Le * Le + Oe * Oe), ee = k.x - Se / z, ue = k.y + we / z, P = te.x - Oe / D, J = te.y + Le / D, B = ((P - ee) * Oe - (J - ue) * Le) / (we * Oe - Se * Le);
          ge = ee + we * B - $.x, he = ue + Se * B - $.y;
          const de = ge * ge + he * he;
          if (de <= 2)
            return new oe(ge, he);
          Ae = Math.sqrt(de / 2);
        } else {
          let z = !1;
          we > Number.EPSILON ? Le > Number.EPSILON && (z = !0) : we < -Number.EPSILON ? Le < -Number.EPSILON && (z = !0) : Math.sign(Se) === Math.sign(Oe) && (z = !0), z ? (ge = -Se, he = we, Ae = Math.sqrt(T)) : (ge = we, he = Se, Ae = Math.sqrt(T / 2));
        }
        return new oe(ge / Ae, he / Ae);
      }
      const Q = [];
      for (let $ = 0, k = O.length, te = k - 1, ge = $ + 1; $ < k; $++, te++, ge++)
        te === k && (te = 0), ge === k && (ge = 0), Q[$] = j(O[$], O[te], O[ge]);
      const ie = [];
      let pe, ce = Q.concat();
      for (let $ = 0, k = V.length; $ < k; $++) {
        const te = V[$];
        pe = [];
        for (let ge = 0, he = te.length, Ae = he - 1, we = ge + 1; ge < he; ge++, Ae++, we++)
          Ae === he && (Ae = 0), we === he && (we = 0), pe[ge] = j(te[ge], te[Ae], te[we]);
        ie.push(pe), ce = ce.concat(pe);
      }
      for (let $ = 0; $ < p; $++) {
        const k = $ / p, te = m * Math.cos(k * Math.PI / 2), ge = g * Math.sin(k * Math.PI / 2) + x;
        for (let he = 0, Ae = O.length; he < Ae; he++) {
          const we = H(O[he], Q[he], ge);
          C(we.x, we.y, -te);
        }
        for (let he = 0, Ae = V.length; he < Ae; he++) {
          const we = V[he];
          pe = ie[he];
          for (let Se = 0, Le = we.length; Se < Le; Se++) {
            const Oe = H(we[Se], pe[Se], ge);
            C(Oe.x, Oe.y, -te);
          }
        }
      }
      const G = g + x;
      for (let $ = 0; $ < ne; $++) {
        const k = d ? H(A[$], ce[$], G) : A[$];
        b ? (q.copy(E.normals[0]).multiplyScalar(k.x), w.copy(E.binormals[0]).multiplyScalar(k.y), N.copy(_[0]).add(q).add(w), C(N.x, N.y, N.z)) : C(k.x, k.y, 0);
      }
      for (let $ = 1; $ <= h; $++)
        for (let k = 0; k < ne; k++) {
          const te = d ? H(A[k], ce[k], G) : A[k];
          b ? (q.copy(E.normals[$]).multiplyScalar(te.x), w.copy(E.binormals[$]).multiplyScalar(te.y), N.copy(_[$]).add(q).add(w), C(N.x, N.y, N.z)) : C(te.x, te.y, u / h * $);
        }
      for (let $ = p - 1; $ >= 0; $--) {
        const k = $ / p, te = m * Math.cos(k * Math.PI / 2), ge = g * Math.sin(k * Math.PI / 2) + x;
        for (let he = 0, Ae = O.length; he < Ae; he++) {
          const we = H(O[he], Q[he], ge);
          C(we.x, we.y, u + te);
        }
        for (let he = 0, Ae = V.length; he < Ae; he++) {
          const we = V[he];
          pe = ie[he];
          for (let Se = 0, Le = we.length; Se < Le; Se++) {
            const Oe = H(we[Se], pe[Se], ge);
            b ? C(Oe.x, Oe.y + _[h - 1].y, _[h - 1].x + te) : C(Oe.x, Oe.y, u + te);
          }
        }
      }
      Y(), ae();
      function Y() {
        const $ = r.length / 3;
        if (d) {
          let k = 0, te = ne * k;
          for (let ge = 0; ge < K; ge++) {
            const he = U[ge];
            ye(he[2] + te, he[1] + te, he[0] + te);
          }
          k = h + p * 2, te = ne * k;
          for (let ge = 0; ge < K; ge++) {
            const he = U[ge];
            ye(he[0] + te, he[1] + te, he[2] + te);
          }
        } else {
          for (let k = 0; k < K; k++) {
            const te = U[k];
            ye(te[2], te[1], te[0]);
          }
          for (let k = 0; k < K; k++) {
            const te = U[k];
            ye(te[0] + ne * h, te[1] + ne * h, te[2] + ne * h);
          }
        }
        n.addGroup($, r.length / 3 - $, 0);
      }
      function ae() {
        const $ = r.length / 3;
        let k = 0;
        fe(O, k), k += O.length;
        for (let te = 0, ge = V.length; te < ge; te++) {
          const he = V[te];
          fe(he, k), k += he.length;
        }
        n.addGroup($, r.length / 3 - $, 1);
      }
      function fe($, k) {
        let te = $.length;
        for (; --te >= 0; ) {
          const ge = te;
          let he = te - 1;
          he < 0 && (he = $.length - 1);
          for (let Ae = 0, we = h + p * 2; Ae < we; Ae++) {
            const Se = ne * Ae, Le = ne * (Ae + 1), Oe = k + ge + Se, T = k + he + Se, M = k + he + Le, z = k + ge + Le;
            Pe(Oe, T, M, z);
          }
        }
      }
      function C($, k, te) {
        c.push($), c.push(k), c.push(te);
      }
      function ye($, k, te) {
        le($), le(k), le(te);
        const ge = r.length / 3, he = y.generateTopUV(n, r, ge - 3, ge - 2, ge - 1);
        Me(he[0]), Me(he[1]), Me(he[2]);
      }
      function Pe($, k, te, ge) {
        le($), le(k), le(ge), le(k), le(te), le(ge);
        const he = r.length / 3, Ae = y.generateSideWallUV(n, r, he - 6, he - 3, he - 2, he - 1);
        Me(Ae[0]), Me(Ae[1]), Me(Ae[3]), Me(Ae[1]), Me(Ae[2]), Me(Ae[3]);
      }
      function le($) {
        r.push(c[$ * 3 + 0]), r.push(c[$ * 3 + 1]), r.push(c[$ * 3 + 2]);
      }
      function Me($) {
        s.push($.x), s.push($.y);
      }
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  toJSON() {
    const e = super.toJSON(), t = this.parameters.shapes, n = this.parameters.options;
    return Jm(t, n, e);
  }
  static fromJSON(e, t) {
    const n = [];
    for (let s = 0, o = e.shapes.length; s < o; s++) {
      const a = t[e.shapes[s]];
      n.push(a);
    }
    const r = e.options.extrudePath;
    return r !== void 0 && (e.options.extrudePath = new il[r.type]().fromJSON(r)), new Cs(n, e.options);
  }
}
const Km = {
  generateTopUV: function(i, e, t, n, r) {
    const s = e[t * 3], o = e[t * 3 + 1], a = e[n * 3], c = e[n * 3 + 1], l = e[r * 3], h = e[r * 3 + 1];
    return [
      new oe(s, o),
      new oe(a, c),
      new oe(l, h)
    ];
  },
  generateSideWallUV: function(i, e, t, n, r, s) {
    const o = e[t * 3], a = e[t * 3 + 1], c = e[t * 3 + 2], l = e[n * 3], h = e[n * 3 + 1], u = e[n * 3 + 2], d = e[r * 3], m = e[r * 3 + 1], g = e[r * 3 + 2], x = e[s * 3], p = e[s * 3 + 1], f = e[s * 3 + 2];
    return Math.abs(a - h) < Math.abs(o - l) ? [
      new oe(o, 1 - c),
      new oe(l, 1 - u),
      new oe(d, 1 - g),
      new oe(x, 1 - f)
    ] : [
      new oe(a, 1 - c),
      new oe(h, 1 - u),
      new oe(m, 1 - g),
      new oe(p, 1 - f)
    ];
  }
};
function Jm(i, e, t) {
  if (t.shapes = [], Array.isArray(i))
    for (let n = 0, r = i.length; n < r; n++) {
      const s = i[n];
      t.shapes.push(s.uuid);
    }
  else
    t.shapes.push(i.uuid);
  return t.options = Object.assign({}, e), e.extrudePath !== void 0 && (t.options.extrudePath = e.extrudePath.toJSON()), t;
}
class Ls extends gt {
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
    const h = [], u = new R(), d = new R(), m = [], g = [], x = [], p = [];
    for (let f = 0; f <= n; f++) {
      const y = [], _ = f / n;
      let b = 0;
      f === 0 && o === 0 ? b = 0.5 / t : f === n && c === Math.PI && (b = -0.5 / t);
      for (let E = 0; E <= t; E++) {
        const w = E / t;
        u.x = -e * Math.cos(r + w * s) * Math.sin(o + _ * a), u.y = e * Math.cos(o + _ * a), u.z = e * Math.sin(r + w * s) * Math.sin(o + _ * a), g.push(u.x, u.y, u.z), d.copy(u).normalize(), x.push(d.x, d.y, d.z), p.push(w + b, 1 - _), y.push(l++);
      }
      h.push(y);
    }
    for (let f = 0; f < n; f++)
      for (let y = 0; y < t; y++) {
        const _ = h[f][y + 1], b = h[f][y], E = h[f + 1][y], w = h[f + 1][y + 1];
        (f !== 0 || o > 0) && m.push(_, b, w), (f !== n - 1 || c < Math.PI) && m.push(b, E, w);
      }
    this.setIndex(m), this.setAttribute("position", new tt(g, 3)), this.setAttribute("normal", new tt(x, 3)), this.setAttribute("uv", new tt(p, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Ls(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength);
  }
}
class ts extends hi {
  constructor(e) {
    super(), this.isMeshPhongMaterial = !0, this.type = "MeshPhongMaterial", this.color = new Ie(16777215), this.specular = new Ie(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ie(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = Do, this.normalScale = new oe(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Es, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = !1, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = !1, this.fog = !0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
const ao = {
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
class $m {
  constructor(e, t, n) {
    const r = this;
    let s = !1, o = 0, a = 0, c;
    const l = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      a++, s === !1 && r.onStart !== void 0 && r.onStart(h, o, a), s = !0;
    }, this.itemEnd = function(h) {
      o++, r.onProgress !== void 0 && r.onProgress(h, o, a), o === a && (s = !1, r.onLoad !== void 0 && r.onLoad());
    }, this.itemError = function(h) {
      r.onError !== void 0 && r.onError(h);
    }, this.resolveURL = function(h) {
      return c ? c(h) : h;
    }, this.setURLModifier = function(h) {
      return c = h, this;
    }, this.addHandler = function(h, u) {
      return l.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = l.indexOf(h);
      return u !== -1 && l.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = l.length; u < d; u += 2) {
        const m = l[u], g = l[u + 1];
        if (m.global && (m.lastIndex = 0), m.test(h))
          return g;
      }
      return null;
    };
  }
}
const Qm = /* @__PURE__ */ new $m();
class ol {
  constructor(e) {
    this.manager = e !== void 0 ? e : Qm, this.crossOrigin = "anonymous", this.withCredentials = !1, this.path = "", this.resourcePath = "", this.requestHeader = {};
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
const en = {};
class ep extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class tp extends ol {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = ao.get(e);
    if (s !== void 0)
      return this.manager.itemStart(e), setTimeout(() => {
        t && t(s), this.manager.itemEnd(e);
      }, 0), s;
    if (en[e] !== void 0) {
      en[e].push({
        onLoad: t,
        onProgress: n,
        onError: r
      });
      return;
    }
    en[e] = [], en[e].push({
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
        const h = en[e], u = l.body.getReader(), d = l.headers.get("Content-Length") || l.headers.get("X-File-Size"), m = d ? parseInt(d) : 0, g = m !== 0;
        let x = 0;
        const p = new ReadableStream({
          start(f) {
            y();
            function y() {
              u.read().then(({ done: _, value: b }) => {
                if (_)
                  f.close();
                else {
                  x += b.byteLength;
                  const E = new ProgressEvent("progress", { lengthComputable: g, loaded: x, total: m });
                  for (let w = 0, q = h.length; w < q; w++) {
                    const N = h[w];
                    N.onProgress && N.onProgress(E);
                  }
                  f.enqueue(b), y();
                }
              });
            }
          }
        });
        return new Response(p);
      } else
        throw new ep(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`, l);
    }).then((l) => {
      switch (c) {
        case "arraybuffer":
          return l.arrayBuffer();
        case "blob":
          return l.blob();
        case "document":
          return l.text().then((h) => new DOMParser().parseFromString(h, a));
        case "json":
          return l.json();
        default:
          if (a === void 0)
            return l.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(a), d = u && u[1] ? u[1].toLowerCase() : void 0, m = new TextDecoder(d);
            return l.arrayBuffer().then((g) => m.decode(g));
          }
      }
    }).then((l) => {
      ao.add(e, l);
      const h = en[e];
      delete en[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onLoad && m.onLoad(l);
      }
    }).catch((l) => {
      const h = en[e];
      if (h === void 0)
        throw this.manager.itemError(e), l;
      delete en[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const m = h[u];
        m.onError && m.onError(l);
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
class ll extends ot {
  constructor(e, t = 1) {
    super(), this.isLight = !0, this.type = "Light", this.color = new Ie(e), this.intensity = t;
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
const ns = /* @__PURE__ */ new Ke(), oo = /* @__PURE__ */ new R(), lo = /* @__PURE__ */ new R();
class np {
  constructor(e) {
    this.camera = e, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new oe(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ke(), this.autoUpdate = !0, this.needsUpdate = !1, this._frustum = new ys(), this._frameExtents = new oe(1, 1), this._viewportCount = 1, this._viewports = [
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
    oo.setFromMatrixPosition(e.matrixWorld), t.position.copy(oo), lo.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(lo), t.updateMatrixWorld(), ns.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ns), n.set(
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
    ), n.multiply(ns);
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
const co = /* @__PURE__ */ new Ke(), _i = /* @__PURE__ */ new R(), is = /* @__PURE__ */ new R();
class ip extends np {
  constructor() {
    super(new Rt(90, 1, 0.5, 500)), this.isPointLightShadow = !0, this._frameExtents = new oe(4, 2), this._viewportCount = 6, this._viewports = [
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
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), _i.setFromMatrixPosition(e.matrixWorld), n.position.copy(_i), is.copy(n.position), is.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(is), n.updateMatrixWorld(), r.makeTranslation(-_i.x, -_i.y, -_i.z), co.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(co);
  }
}
class ho extends ll {
  constructor(e, t, n = 0, r = 2) {
    super(e, t), this.isPointLight = !0, this.type = "PointLight", this.distance = n, this.decay = r, this.shadow = new ip();
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
class rp extends ll {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = !0, this.type = "AmbientLight";
  }
}
class sp {
  constructor(e = !0) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1;
  }
  start() {
    this.startTime = uo(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0;
  }
  stop() {
    this.getElapsedTime(), this.running = !1, this.autoStart = !1;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running)
      return this.start(), 0;
    if (this.running) {
      const t = uo();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function uo() {
  return (typeof performance > "u" ? Date : performance).now();
}
class fo {
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
class ap extends As {
  constructor(e = 10, t = 10, n = 4473924, r = 8947848) {
    n = new Ie(n), r = new Ie(r);
    const s = t / 2, o = e / t, a = e / 2, c = [], l = [];
    for (let d = 0, m = 0, g = -a; d <= t; d++, g += o) {
      c.push(-a, 0, g, a, 0, g), c.push(g, 0, -a, g, 0, a);
      const x = d === s ? n : r;
      x.toArray(l, m), m += 3, x.toArray(l, m), m += 3, x.toArray(l, m), m += 3, x.toArray(l, m), m += 3;
    }
    const h = new gt();
    h.setAttribute("position", new tt(c, 3)), h.setAttribute("color", new tt(l, 3));
    const u = new pr({ vertexColors: !0, toneMapped: !1 });
    super(h, u), this.type = "GridHelper";
  }
  dispose() {
    this.geometry.dispose(), this.material.dispose();
  }
}
class op {
  constructor() {
    this.type = "ShapePath", this.color = new Ie(), this.subPaths = [], this.currentPath = null;
  }
  moveTo(e, t) {
    return this.currentPath = new ms(), this.subPaths.push(this.currentPath), this.currentPath.moveTo(e, t), this;
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
    function t(f) {
      const y = [];
      for (let _ = 0, b = f.length; _ < b; _++) {
        const E = f[_], w = new sr();
        w.curves = E.curves, y.push(w);
      }
      return y;
    }
    function n(f, y) {
      const _ = y.length;
      let b = !1;
      for (let E = _ - 1, w = 0; w < _; E = w++) {
        let q = y[E], N = y[w], v = N.x - q.x, A = N.y - q.y;
        if (Math.abs(A) > Number.EPSILON) {
          if (A < 0 && (q = y[w], v = -v, N = y[E], A = -A), f.y < q.y || f.y > N.y)
            continue;
          if (f.y === q.y) {
            if (f.x === q.x)
              return !0;
          } else {
            const V = A * (f.x - q.x) - v * (f.y - q.y);
            if (V === 0)
              return !0;
            if (V < 0)
              continue;
            b = !b;
          }
        } else {
          if (f.y !== q.y)
            continue;
          if (N.x <= f.x && f.x <= q.x || q.x <= f.x && f.x <= N.x)
            return !0;
        }
      }
      return b;
    }
    const r = ni.isClockWise, s = this.subPaths;
    if (s.length === 0)
      return [];
    let o, a, c;
    const l = [];
    if (s.length === 1)
      return a = s[0], c = new sr(), c.curves = a.curves, l.push(c), l;
    let h = !r(s[0].getPoints());
    h = e ? !h : h;
    const u = [], d = [];
    let m = [], g = 0, x;
    d[g] = void 0, m[g] = [];
    for (let f = 0, y = s.length; f < y; f++)
      a = s[f], x = a.getPoints(), o = r(x), o = e ? !o : o, o ? (!h && d[g] && g++, d[g] = { s: new sr(), p: x }, d[g].s.curves = a.curves, h && g++, m[g] = []) : m[g].push({ h: a, p: x[0] });
    if (!d[0])
      return t(s);
    if (d.length > 1) {
      let f = !1, y = 0;
      for (let _ = 0, b = d.length; _ < b; _++)
        u[_] = [];
      for (let _ = 0, b = d.length; _ < b; _++) {
        const E = m[_];
        for (let w = 0; w < E.length; w++) {
          const q = E[w];
          let N = !0;
          for (let v = 0; v < d.length; v++)
            n(q.p, d[v].p) && (_ !== v && y++, N ? (N = !1, u[v].push(q)) : f = !0);
          N && u[_].push(q);
        }
      }
      y > 0 && f === !1 && (m = u);
    }
    let p;
    for (let f = 0, y = d.length; f < y; f++) {
      c = d[f].s, l.push(c), p = m[f];
      for (let _ = 0, b = p.length; _ < b; _++)
        c.holes.push(p[_].h);
    }
    return l;
  }
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: {
  revision: Ss
} }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = Ss);
class lp extends ol {
  constructor(e) {
    super(e);
  }
  load(e, t, n, r) {
    const s = this, o = new tp(this.manager);
    o.setPath(this.path), o.setRequestHeader(this.requestHeader), o.setWithCredentials(this.withCredentials), o.load(e, function(a) {
      const c = s.parse(JSON.parse(a));
      t && t(c);
    }, n, r);
  }
  parse(e) {
    return new cp(e);
  }
}
class cp {
  constructor(e) {
    this.isFont = !0, this.type = "Font", this.data = e;
  }
  generateShapes(e, t = 100) {
    const n = [], r = hp(e, t, this.data);
    for (let s = 0, o = r.length; s < o; s++)
      n.push(...r[s].toShapes());
    return n;
  }
}
function hp(i, e, t) {
  const n = Array.from(i), r = e / t.resolution, s = (t.boundingBox.yMax - t.boundingBox.yMin + t.underlineThickness) * r, o = [];
  let a = 0, c = 0;
  for (let l = 0; l < n.length; l++) {
    const h = n[l];
    if (h === `
`)
      a = 0, c -= s;
    else {
      const u = up(h, r, a, c, t);
      a += u.offsetX, o.push(u.path);
    }
  }
  return o;
}
function up(i, e, t, n, r) {
  const s = r.glyphs[i] || r.glyphs["?"];
  if (!s) {
    console.error('THREE.Font: character "' + i + '" does not exists in font family ' + r.familyName + ".");
    return;
  }
  const o = new op();
  let a, c, l, h, u, d, m, g;
  if (s.o) {
    const x = s._cachedOutline || (s._cachedOutline = s.o.split(" "));
    for (let p = 0, f = x.length; p < f; )
      switch (x[p++]) {
        case "m":
          a = x[p++] * e + t, c = x[p++] * e + n, o.moveTo(a, c);
          break;
        case "l":
          a = x[p++] * e + t, c = x[p++] * e + n, o.lineTo(a, c);
          break;
        case "q":
          l = x[p++] * e + t, h = x[p++] * e + n, u = x[p++] * e + t, d = x[p++] * e + n, o.quadraticCurveTo(u, d, l, h);
          break;
        case "b":
          l = x[p++] * e + t, h = x[p++] * e + n, u = x[p++] * e + t, d = x[p++] * e + n, m = x[p++] * e + t, g = x[p++] * e + n, o.bezierCurveTo(u, d, m, g, l, h);
          break;
      }
  }
  return { offsetX: s.ha * e, path: o };
}
class mo extends Cs {
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
const fp = { glyphs: { ο: { x_min: 0, x_max: 712, ha: 815, o: "m 356 -25 q 96 88 192 -25 q 0 368 0 201 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 " }, S: { x_min: 0, x_max: 788, ha: 890, o: "m 788 291 q 662 54 788 144 q 397 -26 550 -26 q 116 68 226 -26 q 0 337 0 168 l 131 337 q 200 152 131 220 q 384 85 269 85 q 557 129 479 85 q 650 270 650 183 q 490 429 650 379 q 194 513 341 470 q 33 739 33 584 q 142 964 33 881 q 388 1041 242 1041 q 644 957 543 1041 q 756 716 756 867 l 625 716 q 561 874 625 816 q 395 933 497 933 q 243 891 309 933 q 164 759 164 841 q 325 609 164 656 q 625 526 475 568 q 788 291 788 454 " }, "¦": { x_min: 343, x_max: 449, ha: 792, o: "m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 " }, "/": { x_min: 183.25, x_max: 608.328125, ha: 792, o: "m 608 1041 l 266 -129 l 183 -129 l 520 1041 l 608 1041 " }, Τ: { x_min: -0.4375, x_max: 777.453125, ha: 839, o: "m 777 893 l 458 893 l 458 0 l 319 0 l 319 892 l 0 892 l 0 1013 l 777 1013 l 777 893 " }, y: { x_min: 0, x_max: 684.78125, ha: 771, o: "m 684 738 l 388 -83 q 311 -216 356 -167 q 173 -279 252 -279 q 97 -266 133 -279 l 97 -149 q 132 -155 109 -151 q 168 -160 155 -160 q 240 -114 213 -160 q 274 -26 248 -98 l 0 738 l 137 737 l 341 139 l 548 737 l 684 738 " }, Π: { x_min: 0, x_max: 803, ha: 917, o: "m 803 0 l 667 0 l 667 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 803 1012 l 803 0 " }, ΐ: { x_min: -111, x_max: 339, ha: 361, o: "m 339 800 l 229 800 l 229 925 l 339 925 l 339 800 m -1 800 l -111 800 l -111 925 l -1 925 l -1 800 m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 m 302 1040 l 113 819 l 30 819 l 165 1040 l 302 1040 " }, g: { x_min: 0, x_max: 686, ha: 838, o: "m 686 34 q 586 -213 686 -121 q 331 -306 487 -306 q 131 -252 216 -306 q 31 -84 31 -190 l 155 -84 q 228 -174 166 -138 q 345 -207 284 -207 q 514 -109 454 -207 q 564 89 564 -27 q 461 6 521 36 q 335 -23 401 -23 q 88 100 184 -23 q 0 370 0 215 q 87 634 0 522 q 330 758 183 758 q 457 728 398 758 q 564 644 515 699 l 564 737 l 686 737 l 686 34 m 582 367 q 529 560 582 481 q 358 652 468 652 q 189 561 250 652 q 135 369 135 482 q 189 176 135 255 q 361 85 251 85 q 529 176 468 85 q 582 367 582 255 " }, "²": { x_min: 0, x_max: 442, ha: 539, o: "m 442 383 l 0 383 q 91 566 0 492 q 260 668 176 617 q 354 798 354 727 q 315 875 354 845 q 227 905 277 905 q 136 869 173 905 q 99 761 99 833 l 14 761 q 82 922 14 864 q 232 974 141 974 q 379 926 316 974 q 442 797 442 878 q 351 635 442 704 q 183 539 321 611 q 92 455 92 491 l 442 455 l 442 383 " }, "–": { x_min: 0, x_max: 705.5625, ha: 803, o: "m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 " }, Κ: { x_min: 0, x_max: 819.5625, ha: 893, o: "m 819 0 l 650 0 l 294 509 l 139 356 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 " }, ƒ: { x_min: -46.265625, x_max: 392, ha: 513, o: "m 392 651 l 259 651 l 79 -279 l -46 -278 l 134 651 l 14 651 l 14 751 l 135 751 q 151 948 135 900 q 304 1041 185 1041 q 334 1040 319 1041 q 392 1034 348 1039 l 392 922 q 337 931 360 931 q 271 883 287 931 q 260 793 260 853 l 260 751 l 392 751 l 392 651 " }, e: { x_min: 0, x_max: 714, ha: 813, o: "m 714 326 l 140 326 q 200 157 140 227 q 359 87 260 87 q 488 130 431 87 q 561 245 545 174 l 697 245 q 577 48 670 123 q 358 -26 484 -26 q 97 85 195 -26 q 0 363 0 197 q 94 642 0 529 q 358 765 195 765 q 626 627 529 765 q 714 326 714 503 m 576 429 q 507 583 564 522 q 355 650 445 650 q 206 583 266 650 q 140 429 152 522 l 576 429 " }, ό: { x_min: 0, x_max: 712, ha: 815, o: "m 356 -25 q 94 91 194 -25 q 0 368 0 202 q 92 642 0 533 q 356 761 192 761 q 617 644 517 761 q 712 368 712 533 q 619 91 712 201 q 356 -25 520 -25 m 356 85 q 527 175 465 85 q 583 369 583 255 q 528 562 583 484 q 356 651 466 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 356 85 250 85 m 576 1040 l 387 819 l 303 819 l 438 1040 l 576 1040 " }, J: { x_min: 0, x_max: 588, ha: 699, o: "m 588 279 q 287 -26 588 -26 q 58 73 126 -26 q 0 327 0 158 l 133 327 q 160 172 133 227 q 288 96 198 96 q 426 171 391 96 q 449 336 449 219 l 449 1013 l 588 1013 l 588 279 " }, "»": { x_min: -1, x_max: 503, ha: 601, o: "m 503 302 l 280 136 l 281 256 l 429 373 l 281 486 l 280 608 l 503 440 l 503 302 m 221 302 l 0 136 l 0 255 l 145 372 l 0 486 l -1 608 l 221 440 l 221 302 " }, "©": { x_min: -3, x_max: 1008, ha: 1106, o: "m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 741 394 q 661 246 731 302 q 496 190 591 190 q 294 285 369 190 q 228 497 228 370 q 295 714 228 625 q 499 813 370 813 q 656 762 588 813 q 733 625 724 711 l 634 625 q 589 704 629 673 q 498 735 550 735 q 377 666 421 735 q 334 504 334 597 q 374 340 334 408 q 490 272 415 272 q 589 304 549 272 q 638 394 628 337 l 741 394 " }, ώ: { x_min: 0, x_max: 922, ha: 1030, o: "m 687 1040 l 498 819 l 415 819 l 549 1040 l 687 1040 m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 338 0 202 q 45 551 0 444 q 161 737 84 643 l 302 737 q 175 552 219 647 q 124 336 124 446 q 155 179 124 248 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 341 797 257 q 745 555 797 450 q 619 737 705 637 l 760 737 q 874 551 835 640 q 922 339 922 444 " }, "^": { x_min: 193.0625, x_max: 598.609375, ha: 792, o: "m 598 772 l 515 772 l 395 931 l 277 772 l 193 772 l 326 1013 l 462 1013 l 598 772 " }, "«": { x_min: 0, x_max: 507.203125, ha: 604, o: "m 506 136 l 284 302 l 284 440 l 506 608 l 507 485 l 360 371 l 506 255 l 506 136 m 222 136 l 0 302 l 0 440 l 222 608 l 221 486 l 73 373 l 222 256 l 222 136 " }, D: { x_min: 0, x_max: 828, ha: 935, o: "m 389 1013 q 714 867 593 1013 q 828 521 828 729 q 712 161 828 309 q 382 0 587 0 l 0 0 l 0 1013 l 389 1013 m 376 124 q 607 247 523 124 q 681 510 681 355 q 607 771 681 662 q 376 896 522 896 l 139 896 l 139 124 l 376 124 " }, "∙": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 " }, ÿ: { x_min: 0, x_max: 47, ha: 125, o: "m 47 3 q 37 -7 47 -7 q 28 0 30 -7 q 39 -4 32 -4 q 45 3 45 -1 l 37 0 q 28 9 28 0 q 39 19 28 19 l 47 16 l 47 19 l 47 3 m 37 1 q 44 8 44 1 q 37 16 44 16 q 30 8 30 16 q 37 1 30 1 m 26 1 l 23 22 l 14 0 l 3 22 l 3 3 l 0 25 l 13 1 l 22 25 l 26 1 " }, w: { x_min: 0, x_max: 1009.71875, ha: 1100, o: "m 1009 738 l 783 0 l 658 0 l 501 567 l 345 0 l 222 0 l 0 738 l 130 738 l 284 174 l 432 737 l 576 738 l 721 173 l 881 737 l 1009 738 " }, $: { x_min: 0, x_max: 700, ha: 793, o: "m 664 717 l 542 717 q 490 825 531 785 q 381 872 450 865 l 381 551 q 620 446 540 522 q 700 241 700 370 q 618 45 700 116 q 381 -25 536 -25 l 381 -152 l 307 -152 l 307 -25 q 81 62 162 -25 q 0 297 0 149 l 124 297 q 169 146 124 204 q 307 81 215 89 l 307 441 q 80 536 148 469 q 13 725 13 603 q 96 910 13 839 q 307 982 180 982 l 307 1077 l 381 1077 l 381 982 q 574 917 494 982 q 664 717 664 845 m 307 565 l 307 872 q 187 831 233 872 q 142 724 142 791 q 180 618 142 656 q 307 565 218 580 m 381 76 q 562 237 562 96 q 517 361 562 313 q 381 423 472 409 l 381 76 " }, "\\": { x_min: -0.015625, x_max: 425.0625, ha: 522, o: "m 425 -129 l 337 -129 l 0 1041 l 83 1041 l 425 -129 " }, µ: { x_min: 0, x_max: 697.21875, ha: 747, o: "m 697 -4 q 629 -14 658 -14 q 498 97 513 -14 q 422 9 470 41 q 313 -23 374 -23 q 207 4 258 -23 q 119 81 156 32 l 119 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 173 124 246 q 308 83 216 83 q 452 178 402 83 q 493 359 493 255 l 493 738 l 617 738 l 617 214 q 623 136 617 160 q 673 92 637 92 q 697 96 684 92 l 697 -4 " }, Ι: { x_min: 42, x_max: 181, ha: 297, o: "m 181 0 l 42 0 l 42 1013 l 181 1013 l 181 0 " }, Ύ: { x_min: 0, x_max: 1144.5, ha: 1214, o: "m 1144 1012 l 807 416 l 807 0 l 667 0 l 667 416 l 325 1012 l 465 1012 l 736 533 l 1004 1012 l 1144 1012 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, "’": { x_min: 0, x_max: 139, ha: 236, o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 " }, Ν: { x_min: 0, x_max: 801, ha: 915, o: "m 801 0 l 651 0 l 131 822 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 191 l 670 1013 l 801 1013 l 801 0 " }, "-": { x_min: 8.71875, x_max: 350.390625, ha: 478, o: "m 350 317 l 8 317 l 8 428 l 350 428 l 350 317 " }, Q: { x_min: 0, x_max: 968, ha: 1072, o: "m 954 5 l 887 -79 l 744 35 q 622 -11 687 2 q 483 -26 556 -26 q 127 130 262 -26 q 0 504 0 279 q 127 880 0 728 q 484 1041 262 1041 q 841 884 708 1041 q 968 507 968 735 q 933 293 968 398 q 832 104 899 188 l 954 5 m 723 191 q 802 330 777 248 q 828 499 828 412 q 744 790 828 673 q 483 922 650 922 q 228 791 322 922 q 142 505 142 673 q 227 221 142 337 q 487 91 323 91 q 632 123 566 91 l 520 215 l 587 301 l 723 191 " }, ς: { x_min: 1, x_max: 676.28125, ha: 740, o: "m 676 460 l 551 460 q 498 595 542 546 q 365 651 448 651 q 199 578 263 651 q 136 401 136 505 q 266 178 136 241 q 508 106 387 142 q 640 -50 640 62 q 625 -158 640 -105 q 583 -278 611 -211 l 465 -278 q 498 -182 490 -211 q 515 -80 515 -126 q 381 12 515 -15 q 134 91 197 51 q 1 388 1 179 q 100 651 1 542 q 354 761 199 761 q 587 680 498 761 q 676 460 676 599 " }, M: { x_min: 0, x_max: 954, ha: 1067, o: "m 954 0 l 819 0 l 819 869 l 537 0 l 405 0 l 128 866 l 128 0 l 0 0 l 0 1013 l 200 1013 l 472 160 l 757 1013 l 954 1013 l 954 0 " }, Ψ: { x_min: 0, x_max: 1006, ha: 1094, o: "m 1006 678 q 914 319 1006 429 q 571 200 814 200 l 571 0 l 433 0 l 433 200 q 92 319 194 200 q 0 678 0 429 l 0 1013 l 139 1013 l 139 679 q 191 417 139 492 q 433 326 255 326 l 433 1013 l 571 1013 l 571 326 l 580 326 q 813 423 747 326 q 868 679 868 502 l 868 1013 l 1006 1013 l 1006 678 " }, C: { x_min: 0, x_max: 886, ha: 944, o: "m 886 379 q 760 87 886 201 q 455 -26 634 -26 q 112 136 236 -26 q 0 509 0 283 q 118 882 0 737 q 469 1041 245 1041 q 748 955 630 1041 q 879 708 879 859 l 745 708 q 649 862 724 805 q 473 920 573 920 q 219 791 312 920 q 136 509 136 675 q 217 229 136 344 q 470 99 311 99 q 672 179 591 99 q 753 379 753 259 l 886 379 " }, "!": { x_min: 0, x_max: 138, ha: 236, o: "m 138 684 q 116 409 138 629 q 105 244 105 299 l 33 244 q 16 465 33 313 q 0 684 0 616 l 0 1013 l 138 1013 l 138 684 m 138 0 l 0 0 l 0 151 l 138 151 l 138 0 " }, "{": { x_min: 0, x_max: 480.5625, ha: 578, o: "m 480 -286 q 237 -213 303 -286 q 187 -45 187 -159 q 194 48 187 -15 q 201 141 201 112 q 164 264 201 225 q 0 314 118 314 l 0 417 q 164 471 119 417 q 201 605 201 514 q 199 665 201 644 q 193 772 193 769 q 241 941 193 887 q 480 1015 308 1015 l 480 915 q 336 866 375 915 q 306 742 306 828 q 310 662 306 717 q 314 577 314 606 q 288 452 314 500 q 176 365 256 391 q 289 275 257 337 q 314 143 314 226 q 313 84 314 107 q 310 -11 310 -5 q 339 -131 310 -94 q 480 -182 377 -182 l 480 -286 " }, X: { x_min: -0.015625, x_max: 854.15625, ha: 940, o: "m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 428 637 l 675 1013 l 836 1013 l 504 520 l 854 0 " }, "#": { x_min: 0, x_max: 963.890625, ha: 1061, o: "m 963 690 l 927 590 l 719 590 l 655 410 l 876 410 l 840 310 l 618 310 l 508 -3 l 393 -2 l 506 309 l 329 310 l 215 -2 l 102 -3 l 212 310 l 0 310 l 36 410 l 248 409 l 312 590 l 86 590 l 120 690 l 347 690 l 459 1006 l 573 1006 l 462 690 l 640 690 l 751 1006 l 865 1006 l 754 690 l 963 690 m 606 590 l 425 590 l 362 410 l 543 410 l 606 590 " }, ι: { x_min: 42, x_max: 284, ha: 361, o: "m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 738 l 167 738 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 103 239 101 q 284 112 257 104 l 284 3 " }, Ά: { x_min: 0, x_max: 906.953125, ha: 982, o: "m 283 1040 l 88 799 l 5 799 l 145 1040 l 283 1040 m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1012 l 529 1012 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 " }, ")": { x_min: 0, x_max: 318, ha: 415, o: "m 318 365 q 257 25 318 191 q 87 -290 197 -141 l 0 -290 q 140 21 93 -128 q 193 360 193 189 q 141 704 193 537 q 0 1024 97 850 l 87 1024 q 257 706 197 871 q 318 365 318 542 " }, ε: { x_min: 0, x_max: 634.71875, ha: 714, o: "m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 314 0 265 q 128 390 67 353 q 56 460 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 " }, Δ: { x_min: 0, x_max: 952.78125, ha: 1028, o: "m 952 0 l 0 0 l 400 1013 l 551 1013 l 952 0 m 762 124 l 476 867 l 187 124 l 762 124 " }, "}": { x_min: 0, x_max: 481, ha: 578, o: "m 481 314 q 318 262 364 314 q 282 136 282 222 q 284 65 282 97 q 293 -58 293 -48 q 241 -217 293 -166 q 0 -286 174 -286 l 0 -182 q 143 -130 105 -182 q 171 -2 171 -93 q 168 81 171 22 q 165 144 165 140 q 188 275 165 229 q 306 365 220 339 q 191 455 224 391 q 165 588 165 505 q 168 681 165 624 q 171 742 171 737 q 141 865 171 827 q 0 915 102 915 l 0 1015 q 243 942 176 1015 q 293 773 293 888 q 287 675 293 741 q 282 590 282 608 q 318 466 282 505 q 481 417 364 417 l 481 314 " }, "‰": { x_min: -3, x_max: 1672, ha: 1821, o: "m 846 0 q 664 76 732 0 q 603 244 603 145 q 662 412 603 344 q 846 489 729 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 846 0 962 0 m 845 103 q 945 143 910 103 q 981 243 981 184 q 947 340 981 301 q 845 385 910 385 q 745 342 782 385 q 709 243 709 300 q 742 147 709 186 q 845 103 781 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 m 1428 0 q 1246 76 1314 0 q 1185 244 1185 145 q 1244 412 1185 344 q 1428 489 1311 489 q 1610 412 1542 489 q 1672 244 1672 343 q 1612 76 1672 144 q 1428 0 1545 0 m 1427 103 q 1528 143 1492 103 q 1564 243 1564 184 q 1530 340 1564 301 q 1427 385 1492 385 q 1327 342 1364 385 q 1291 243 1291 300 q 1324 147 1291 186 q 1427 103 1363 103 " }, a: { x_min: 0, x_max: 698.609375, ha: 794, o: "m 698 0 q 661 -12 679 -7 q 615 -17 643 -17 q 536 12 564 -17 q 500 96 508 41 q 384 6 456 37 q 236 -25 312 -25 q 65 31 130 -25 q 0 194 0 88 q 118 390 0 334 q 328 435 180 420 q 488 483 476 451 q 495 523 495 504 q 442 619 495 584 q 325 654 389 654 q 209 617 257 654 q 152 513 161 580 l 33 513 q 123 705 33 633 q 332 772 207 772 q 528 712 448 772 q 617 531 617 645 l 617 163 q 624 108 617 126 q 664 90 632 90 l 698 94 l 698 0 m 491 262 l 491 372 q 272 329 350 347 q 128 201 128 294 q 166 113 128 144 q 264 83 205 83 q 414 130 346 83 q 491 262 491 183 " }, "—": { x_min: 0, x_max: 941.671875, ha: 1039, o: "m 941 334 l 0 334 l 0 410 l 941 410 l 941 334 " }, "=": { x_min: 8.71875, x_max: 780.953125, ha: 792, o: "m 780 510 l 8 510 l 8 606 l 780 606 l 780 510 m 780 235 l 8 235 l 8 332 l 780 332 l 780 235 " }, N: { x_min: 0, x_max: 801, ha: 914, o: "m 801 0 l 651 0 l 131 823 l 131 0 l 0 0 l 0 1013 l 151 1013 l 670 193 l 670 1013 l 801 1013 l 801 0 " }, ρ: { x_min: 0, x_max: 712, ha: 797, o: "m 712 369 q 620 94 712 207 q 362 -26 521 -26 q 230 2 292 -26 q 119 83 167 30 l 119 -278 l 0 -278 l 0 362 q 91 643 0 531 q 355 764 190 764 q 617 647 517 764 q 712 369 712 536 m 583 366 q 530 559 583 480 q 359 651 469 651 q 190 562 252 651 q 135 370 135 483 q 189 176 135 257 q 359 85 250 85 q 528 175 466 85 q 583 366 583 254 " }, 2: { x_min: 59, x_max: 731, ha: 792, o: "m 731 0 l 59 0 q 197 314 59 188 q 457 487 199 315 q 598 691 598 580 q 543 819 598 772 q 411 867 488 867 q 272 811 328 867 q 209 630 209 747 l 81 630 q 182 901 81 805 q 408 986 271 986 q 629 909 536 986 q 731 694 731 826 q 613 449 731 541 q 378 316 495 383 q 201 122 235 234 l 731 122 l 731 0 " }, "¯": { x_min: 0, x_max: 941.671875, ha: 938, o: "m 941 1033 l 0 1033 l 0 1109 l 941 1109 l 941 1033 " }, Z: { x_min: 0, x_max: 779, ha: 849, o: "m 779 0 l 0 0 l 0 113 l 621 896 l 40 896 l 40 1013 l 779 1013 l 778 887 l 171 124 l 779 124 l 779 0 " }, u: { x_min: 0, x_max: 617, ha: 729, o: "m 617 0 l 499 0 l 499 110 q 391 10 460 45 q 246 -25 322 -25 q 61 58 127 -25 q 0 258 0 136 l 0 738 l 125 738 l 125 284 q 156 148 125 202 q 273 82 197 82 q 433 165 369 82 q 493 340 493 243 l 493 738 l 617 738 l 617 0 " }, k: { x_min: 0, x_max: 612.484375, ha: 697, o: "m 612 738 l 338 465 l 608 0 l 469 0 l 251 382 l 121 251 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 402 l 456 738 l 612 738 " }, Η: { x_min: 0, x_max: 803, ha: 917, o: "m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 " }, Α: { x_min: 0, x_max: 906.953125, ha: 985, o: "m 906 0 l 756 0 l 650 303 l 251 303 l 143 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 609 421 l 452 866 l 293 421 l 609 421 " }, s: { x_min: 0, x_max: 604, ha: 697, o: "m 604 217 q 501 36 604 104 q 292 -23 411 -23 q 86 43 166 -23 q 0 238 0 114 l 121 237 q 175 122 121 164 q 300 85 223 85 q 415 112 363 85 q 479 207 479 147 q 361 309 479 276 q 140 372 141 370 q 21 544 21 426 q 111 708 21 647 q 298 761 190 761 q 492 705 413 761 q 583 531 583 643 l 462 531 q 412 625 462 594 q 298 657 363 657 q 199 636 242 657 q 143 558 143 608 q 262 454 143 486 q 484 394 479 397 q 604 217 604 341 " }, B: { x_min: 0, x_max: 778, ha: 876, o: "m 580 546 q 724 469 670 535 q 778 311 778 403 q 673 83 778 171 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 892 q 691 633 732 693 q 580 546 650 572 m 393 899 l 139 899 l 139 588 l 379 588 q 521 624 462 588 q 592 744 592 667 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 303 635 219 q 559 436 635 389 q 402 477 494 477 l 139 477 l 139 124 l 419 124 " }, "…": { x_min: 0, x_max: 614, ha: 708, o: "m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 m 378 0 l 236 0 l 236 151 l 378 151 l 378 0 m 614 0 l 472 0 l 472 151 l 614 151 l 614 0 " }, "?": { x_min: 0, x_max: 607, ha: 704, o: "m 607 777 q 543 599 607 674 q 422 474 482 537 q 357 272 357 391 l 236 272 q 297 487 236 395 q 411 619 298 490 q 474 762 474 691 q 422 885 474 838 q 301 933 371 933 q 179 880 228 933 q 124 706 124 819 l 0 706 q 94 963 0 872 q 302 1044 177 1044 q 511 973 423 1044 q 607 777 607 895 m 370 0 l 230 0 l 230 151 l 370 151 l 370 0 " }, H: { x_min: 0, x_max: 803, ha: 915, o: "m 803 0 l 667 0 l 667 475 l 140 475 l 140 0 l 0 0 l 0 1013 l 140 1013 l 140 599 l 667 599 l 667 1013 l 803 1013 l 803 0 " }, ν: { x_min: 0, x_max: 675, ha: 761, o: "m 675 738 l 404 0 l 272 0 l 0 738 l 133 738 l 340 147 l 541 738 l 675 738 " }, c: { x_min: 1, x_max: 701.390625, ha: 775, o: "m 701 264 q 584 53 681 133 q 353 -26 487 -26 q 91 91 188 -26 q 1 370 1 201 q 92 645 1 537 q 353 761 190 761 q 572 688 479 761 q 690 493 666 615 l 556 493 q 487 606 545 562 q 356 650 428 650 q 186 563 246 650 q 134 372 134 487 q 188 179 134 258 q 359 88 250 88 q 492 136 437 88 q 566 264 548 185 l 701 264 " }, "¶": { x_min: 0, x_max: 566.671875, ha: 678, o: "m 21 892 l 52 892 l 98 761 l 145 892 l 176 892 l 178 741 l 157 741 l 157 867 l 108 741 l 88 741 l 40 871 l 40 741 l 21 741 l 21 892 m 308 854 l 308 731 q 252 691 308 691 q 227 691 240 691 q 207 696 213 695 l 207 712 l 253 706 q 288 733 288 706 l 288 763 q 244 741 279 741 q 193 797 193 741 q 261 860 193 860 q 287 860 273 860 q 308 854 302 855 m 288 842 l 263 843 q 213 796 213 843 q 248 756 213 756 q 288 796 288 756 l 288 842 m 566 988 l 502 988 l 502 -1 l 439 -1 l 439 988 l 317 988 l 317 -1 l 252 -1 l 252 602 q 81 653 155 602 q 0 805 0 711 q 101 989 0 918 q 309 1053 194 1053 l 566 1053 l 566 988 " }, β: { x_min: 0, x_max: 660, ha: 745, o: "m 471 550 q 610 450 561 522 q 660 280 660 378 q 578 64 660 151 q 367 -22 497 -22 q 239 5 299 -22 q 126 82 178 32 l 126 -278 l 0 -278 l 0 593 q 54 903 0 801 q 318 1042 127 1042 q 519 964 436 1042 q 603 771 603 887 q 567 644 603 701 q 471 550 532 586 m 337 79 q 476 138 418 79 q 535 279 535 198 q 427 437 535 386 q 226 477 344 477 l 226 583 q 398 620 329 583 q 486 762 486 668 q 435 884 486 833 q 312 935 384 935 q 169 861 219 935 q 126 698 126 797 l 126 362 q 170 169 126 242 q 337 79 224 79 " }, Μ: { x_min: 0, x_max: 954, ha: 1068, o: "m 954 0 l 819 0 l 819 868 l 537 0 l 405 0 l 128 865 l 128 0 l 0 0 l 0 1013 l 199 1013 l 472 158 l 758 1013 l 954 1013 l 954 0 " }, Ό: { x_min: 0.109375, x_max: 1120, ha: 1217, o: "m 1120 505 q 994 132 1120 282 q 642 -29 861 -29 q 290 130 422 -29 q 167 505 167 280 q 294 883 167 730 q 650 1046 430 1046 q 999 882 868 1046 q 1120 505 1120 730 m 977 504 q 896 784 977 669 q 644 915 804 915 q 391 785 484 915 q 307 504 307 669 q 391 224 307 339 q 644 95 486 95 q 894 224 803 95 q 977 504 977 339 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, Ή: { x_min: 0, x_max: 1158, ha: 1275, o: "m 1158 0 l 1022 0 l 1022 475 l 496 475 l 496 0 l 356 0 l 356 1012 l 496 1012 l 496 599 l 1022 599 l 1022 1012 l 1158 1012 l 1158 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, "•": { x_min: 0, x_max: 663.890625, ha: 775, o: "m 663 529 q 566 293 663 391 q 331 196 469 196 q 97 294 194 196 q 0 529 0 393 q 96 763 0 665 q 331 861 193 861 q 566 763 469 861 q 663 529 663 665 " }, "¥": { x_min: 0.1875, x_max: 819.546875, ha: 886, o: "m 563 561 l 697 561 l 696 487 l 520 487 l 482 416 l 482 380 l 697 380 l 695 308 l 482 308 l 482 0 l 342 0 l 342 308 l 125 308 l 125 380 l 342 380 l 342 417 l 303 487 l 125 487 l 125 561 l 258 561 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 l 563 561 " }, "(": { x_min: 0, x_max: 318.0625, ha: 415, o: "m 318 -290 l 230 -290 q 61 23 122 -142 q 0 365 0 190 q 62 712 0 540 q 230 1024 119 869 l 318 1024 q 175 705 219 853 q 125 360 125 542 q 176 22 125 187 q 318 -290 223 -127 " }, U: { x_min: 0, x_max: 796, ha: 904, o: "m 796 393 q 681 93 796 212 q 386 -25 566 -25 q 101 95 208 -25 q 0 393 0 211 l 0 1013 l 138 1013 l 138 391 q 204 191 138 270 q 394 107 276 107 q 586 191 512 107 q 656 391 656 270 l 656 1013 l 796 1013 l 796 393 " }, γ: { x_min: 0.5, x_max: 744.953125, ha: 822, o: "m 744 737 l 463 54 l 463 -278 l 338 -278 l 338 54 l 154 495 q 104 597 124 569 q 13 651 67 651 l 0 651 l 0 751 l 39 753 q 168 711 121 753 q 242 594 207 676 l 403 208 l 617 737 l 744 737 " }, α: { x_min: 0, x_max: 765.5625, ha: 809, o: "m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 728 407 760 q 563 637 524 696 l 563 739 l 685 739 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 96 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 " }, F: { x_min: 0, x_max: 683.328125, ha: 717, o: "m 683 888 l 140 888 l 140 583 l 613 583 l 613 458 l 140 458 l 140 0 l 0 0 l 0 1013 l 683 1013 l 683 888 " }, "­": { x_min: 0, x_max: 705.5625, ha: 803, o: "m 705 334 l 0 334 l 0 410 l 705 410 l 705 334 " }, ":": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 " }, Χ: { x_min: 0, x_max: 854.171875, ha: 935, o: "m 854 0 l 683 0 l 423 409 l 166 0 l 0 0 l 347 519 l 18 1013 l 186 1013 l 427 637 l 675 1013 l 836 1013 l 504 521 l 854 0 " }, "*": { x_min: 116, x_max: 674, ha: 792, o: "m 674 768 l 475 713 l 610 544 l 517 477 l 394 652 l 272 478 l 178 544 l 314 713 l 116 766 l 153 876 l 341 812 l 342 1013 l 446 1013 l 446 811 l 635 874 l 674 768 " }, "†": { x_min: 0, x_max: 777, ha: 835, o: "m 458 804 l 777 804 l 777 683 l 458 683 l 458 0 l 319 0 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 " }, "°": { x_min: 0, x_max: 347, ha: 444, o: "m 173 802 q 43 856 91 802 q 0 977 0 905 q 45 1101 0 1049 q 173 1153 90 1153 q 303 1098 255 1153 q 347 977 347 1049 q 303 856 347 905 q 173 802 256 802 m 173 884 q 238 910 214 884 q 262 973 262 937 q 239 1038 262 1012 q 173 1064 217 1064 q 108 1037 132 1064 q 85 973 85 1010 q 108 910 85 937 q 173 884 132 884 " }, V: { x_min: 0, x_max: 862.71875, ha: 940, o: "m 862 1013 l 505 0 l 361 0 l 0 1013 l 143 1013 l 434 165 l 718 1012 l 862 1013 " }, Ξ: { x_min: 0, x_max: 734.71875, ha: 763, o: "m 723 889 l 9 889 l 9 1013 l 723 1013 l 723 889 m 673 463 l 61 463 l 61 589 l 673 589 l 673 463 m 734 0 l 0 0 l 0 124 l 734 124 l 734 0 " }, " ": { x_min: 0, x_max: 0, ha: 853 }, Ϋ: { x_min: 0.328125, x_max: 819.515625, ha: 889, o: "m 588 1046 l 460 1046 l 460 1189 l 588 1189 l 588 1046 m 360 1046 l 232 1046 l 232 1189 l 360 1189 l 360 1046 m 819 1012 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1012 l 140 1012 l 411 533 l 679 1012 l 819 1012 " }, 0: { x_min: 73, x_max: 715, ha: 792, o: "m 394 -29 q 153 129 242 -29 q 73 479 73 272 q 152 829 73 687 q 394 989 241 989 q 634 829 545 989 q 715 479 715 684 q 635 129 715 270 q 394 -29 546 -29 m 394 89 q 546 211 489 89 q 598 479 598 322 q 548 748 598 640 q 394 871 491 871 q 241 748 298 871 q 190 479 190 637 q 239 211 190 319 q 394 89 296 89 " }, "”": { x_min: 0, x_max: 347, ha: 454, o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 m 347 851 q 310 737 347 784 q 208 669 273 690 l 208 734 q 267 787 250 741 q 280 873 280 821 l 208 873 l 208 1013 l 347 1013 l 347 851 " }, "@": { x_min: 0, x_max: 1260, ha: 1357, o: "m 1098 -45 q 877 -160 1001 -117 q 633 -203 752 -203 q 155 -29 327 -203 q 0 360 0 127 q 176 802 0 616 q 687 1008 372 1008 q 1123 854 969 1008 q 1260 517 1260 718 q 1155 216 1260 341 q 868 82 1044 82 q 772 106 801 82 q 737 202 737 135 q 647 113 700 144 q 527 82 594 82 q 367 147 420 82 q 314 312 314 212 q 401 565 314 452 q 639 690 498 690 q 810 588 760 690 l 849 668 l 938 668 q 877 441 900 532 q 833 226 833 268 q 853 182 833 198 q 902 167 873 167 q 1088 272 1012 167 q 1159 512 1159 372 q 1051 793 1159 681 q 687 925 925 925 q 248 747 415 925 q 97 361 97 586 q 226 26 97 159 q 627 -122 370 -122 q 856 -87 737 -122 q 1061 8 976 -53 l 1098 -45 m 786 488 q 738 580 777 545 q 643 615 700 615 q 483 517 548 615 q 425 322 425 430 q 457 203 425 250 q 552 156 490 156 q 722 273 665 156 q 786 488 738 309 " }, Ί: { x_min: 0, x_max: 499, ha: 613, o: "m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 m 499 0 l 360 0 l 360 1012 l 499 1012 l 499 0 " }, i: { x_min: 14, x_max: 136, ha: 275, o: "m 136 873 l 14 873 l 14 1013 l 136 1013 l 136 873 m 136 0 l 14 0 l 14 737 l 136 737 l 136 0 " }, Β: { x_min: 0, x_max: 778, ha: 877, o: "m 580 545 q 724 468 671 534 q 778 310 778 402 q 673 83 778 170 q 432 0 575 0 l 0 0 l 0 1013 l 411 1013 q 629 957 541 1013 q 732 768 732 891 q 691 632 732 692 q 580 545 650 571 m 393 899 l 139 899 l 139 587 l 379 587 q 521 623 462 587 q 592 744 592 666 q 531 859 592 819 q 393 899 471 899 m 419 124 q 566 169 504 124 q 635 302 635 219 q 559 435 635 388 q 402 476 494 476 l 139 476 l 139 124 l 419 124 " }, υ: { x_min: 0, x_max: 617, ha: 725, o: "m 617 352 q 540 94 617 199 q 308 -24 455 -24 q 76 94 161 -24 q 0 352 0 199 l 0 739 l 126 739 l 126 355 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 355 492 257 l 492 739 l 617 739 l 617 352 " }, "]": { x_min: 0, x_max: 275, ha: 372, o: "m 275 -281 l 0 -281 l 0 -187 l 151 -187 l 151 920 l 0 920 l 0 1013 l 275 1013 l 275 -281 " }, m: { x_min: 0, x_max: 1019, ha: 1128, o: "m 1019 0 l 897 0 l 897 454 q 860 591 897 536 q 739 660 816 660 q 613 586 659 660 q 573 436 573 522 l 573 0 l 447 0 l 447 455 q 412 591 447 535 q 294 657 372 657 q 165 586 213 657 q 122 437 122 521 l 122 0 l 0 0 l 0 738 l 117 738 l 117 640 q 202 730 150 697 q 316 763 254 763 q 437 730 381 763 q 525 642 494 697 q 621 731 559 700 q 753 763 682 763 q 943 694 867 763 q 1019 512 1019 625 l 1019 0 " }, χ: { x_min: 8.328125, x_max: 780.5625, ha: 815, o: "m 780 -278 q 715 -294 747 -294 q 616 -257 663 -294 q 548 -175 576 -227 l 379 133 l 143 -277 l 9 -277 l 313 254 l 163 522 q 127 586 131 580 q 36 640 91 640 q 8 637 27 640 l 8 752 l 52 757 q 162 719 113 757 q 236 627 200 690 l 383 372 l 594 737 l 726 737 l 448 250 l 625 -69 q 670 -153 647 -110 q 743 -188 695 -188 q 780 -184 759 -188 l 780 -278 " }, 8: { x_min: 55, x_max: 736, ha: 792, o: "m 571 527 q 694 424 652 491 q 736 280 736 358 q 648 71 736 158 q 395 -26 551 -26 q 142 69 238 -26 q 55 279 55 157 q 96 425 55 359 q 220 527 138 491 q 120 615 153 562 q 88 726 88 668 q 171 904 88 827 q 395 986 261 986 q 618 905 529 986 q 702 727 702 830 q 670 616 702 667 q 571 527 638 565 m 394 565 q 519 610 475 565 q 563 717 563 655 q 521 823 563 781 q 392 872 474 872 q 265 824 312 872 q 224 720 224 783 q 265 613 224 656 q 394 565 312 565 m 395 91 q 545 150 488 91 q 597 280 597 204 q 546 408 597 355 q 395 465 492 465 q 244 408 299 465 q 194 280 194 356 q 244 150 194 203 q 395 91 299 91 " }, ί: { x_min: 42, x_max: 326.71875, ha: 361, o: "m 284 3 q 233 -10 258 -5 q 182 -15 207 -15 q 85 26 119 -15 q 42 200 42 79 l 42 737 l 167 737 l 168 215 q 172 141 168 157 q 226 101 183 101 q 248 102 239 101 q 284 112 257 104 l 284 3 m 326 1040 l 137 819 l 54 819 l 189 1040 l 326 1040 " }, Ζ: { x_min: 0, x_max: 779.171875, ha: 850, o: "m 779 0 l 0 0 l 0 113 l 620 896 l 40 896 l 40 1013 l 779 1013 l 779 887 l 170 124 l 779 124 l 779 0 " }, R: { x_min: 0, x_max: 781.953125, ha: 907, o: "m 781 0 l 623 0 q 587 242 590 52 q 407 433 585 433 l 138 433 l 138 0 l 0 0 l 0 1013 l 396 1013 q 636 946 539 1013 q 749 731 749 868 q 711 597 749 659 q 608 502 674 534 q 718 370 696 474 q 729 207 722 352 q 781 26 736 62 l 781 0 m 373 551 q 533 594 465 551 q 614 731 614 645 q 532 859 614 815 q 373 896 465 896 l 138 896 l 138 551 l 373 551 " }, o: { x_min: 0, x_max: 713, ha: 821, o: "m 357 -25 q 94 91 194 -25 q 0 368 0 202 q 93 642 0 533 q 357 761 193 761 q 618 644 518 761 q 713 368 713 533 q 619 91 713 201 q 357 -25 521 -25 m 357 85 q 528 175 465 85 q 584 369 584 255 q 529 562 584 484 q 357 651 467 651 q 189 560 250 651 q 135 369 135 481 q 187 177 135 257 q 357 85 250 85 " }, 5: { x_min: 54.171875, x_max: 738, ha: 792, o: "m 738 314 q 626 60 738 153 q 382 -23 526 -23 q 155 47 248 -23 q 54 256 54 125 l 183 256 q 259 132 204 174 q 382 91 314 91 q 533 149 471 91 q 602 314 602 213 q 538 469 602 411 q 386 528 475 528 q 284 506 332 528 q 197 439 237 484 l 81 439 l 159 958 l 684 958 l 684 840 l 254 840 l 214 579 q 306 627 258 612 q 407 643 354 643 q 636 552 540 643 q 738 314 738 457 " }, 7: { x_min: 58.71875, x_max: 730.953125, ha: 792, o: "m 730 839 q 469 448 560 641 q 335 0 378 255 l 192 0 q 328 441 235 252 q 593 830 421 630 l 58 830 l 58 958 l 730 958 l 730 839 " }, K: { x_min: 0, x_max: 819.46875, ha: 906, o: "m 819 0 l 649 0 l 294 509 l 139 355 l 139 0 l 0 0 l 0 1013 l 139 1013 l 139 526 l 626 1013 l 809 1013 l 395 600 l 819 0 " }, ",": { x_min: 0, x_max: 142, ha: 239, o: "m 142 -12 q 105 -132 142 -82 q 0 -205 68 -182 l 0 -138 q 57 -82 40 -124 q 70 0 70 -51 l 0 0 l 0 151 l 142 151 l 142 -12 " }, d: { x_min: 0, x_max: 683, ha: 796, o: "m 683 0 l 564 0 l 564 93 q 456 6 516 38 q 327 -25 395 -25 q 87 100 181 -25 q 0 365 0 215 q 90 639 0 525 q 343 763 187 763 q 564 647 486 763 l 564 1013 l 683 1013 l 683 0 m 582 373 q 529 562 582 484 q 361 653 468 653 q 190 561 253 653 q 135 365 135 479 q 189 175 135 254 q 358 85 251 85 q 529 178 468 85 q 582 373 582 258 " }, "¨": { x_min: -109, x_max: 247, ha: 232, o: "m 247 1046 l 119 1046 l 119 1189 l 247 1189 l 247 1046 m 19 1046 l -109 1046 l -109 1189 l 19 1189 l 19 1046 " }, E: { x_min: 0, x_max: 736.109375, ha: 789, o: "m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 " }, Y: { x_min: 0, x_max: 820, ha: 886, o: "m 820 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 534 l 679 1012 l 820 1013 " }, '"': { x_min: 0, x_max: 299, ha: 396, o: "m 299 606 l 203 606 l 203 988 l 299 988 l 299 606 m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 " }, "‹": { x_min: 17.984375, x_max: 773.609375, ha: 792, o: "m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 " }, "„": { x_min: 0, x_max: 364, ha: 467, o: "m 141 -12 q 104 -132 141 -82 q 0 -205 67 -182 l 0 -138 q 56 -82 40 -124 q 69 0 69 -51 l 0 0 l 0 151 l 141 151 l 141 -12 m 364 -12 q 327 -132 364 -82 q 222 -205 290 -182 l 222 -138 q 279 -82 262 -124 q 292 0 292 -51 l 222 0 l 222 151 l 364 151 l 364 -12 " }, δ: { x_min: 1, x_max: 710, ha: 810, o: "m 710 360 q 616 87 710 196 q 356 -28 518 -28 q 99 82 197 -28 q 1 356 1 192 q 100 606 1 509 q 355 703 199 703 q 180 829 288 754 q 70 903 124 866 l 70 1012 l 643 1012 l 643 901 l 258 901 q 462 763 422 794 q 636 592 577 677 q 710 360 710 485 m 584 365 q 552 501 584 447 q 451 602 521 555 q 372 611 411 611 q 197 541 258 611 q 136 355 136 472 q 190 171 136 245 q 358 85 252 85 q 528 173 465 85 q 584 365 584 252 " }, έ: { x_min: 0, x_max: 634.71875, ha: 714, o: "m 634 234 q 527 38 634 110 q 300 -25 433 -25 q 98 29 183 -25 q 0 204 0 93 q 37 313 0 265 q 128 390 67 352 q 56 459 82 419 q 26 555 26 505 q 114 712 26 654 q 295 763 191 763 q 499 700 416 763 q 589 515 589 631 l 478 515 q 419 618 464 580 q 307 657 374 657 q 207 630 253 657 q 151 547 151 598 q 238 445 151 469 q 389 434 280 434 l 389 331 l 349 331 q 206 315 255 331 q 125 210 125 287 q 183 107 125 145 q 302 76 233 76 q 436 117 379 76 q 509 234 493 159 l 634 234 m 520 1040 l 331 819 l 248 819 l 383 1040 l 520 1040 " }, ω: { x_min: 0, x_max: 922, ha: 1031, o: "m 922 339 q 856 97 922 203 q 650 -26 780 -26 q 538 9 587 -26 q 461 103 489 44 q 387 12 436 46 q 277 -22 339 -22 q 69 97 147 -22 q 0 339 0 203 q 45 551 0 444 q 161 738 84 643 l 302 738 q 175 553 219 647 q 124 336 124 446 q 155 179 124 249 q 275 88 197 88 q 375 163 341 88 q 400 294 400 219 l 400 572 l 524 572 l 524 294 q 561 135 524 192 q 643 88 591 88 q 762 182 719 88 q 797 342 797 257 q 745 556 797 450 q 619 738 705 638 l 760 738 q 874 551 835 640 q 922 339 922 444 " }, "´": { x_min: 0, x_max: 96, ha: 251, o: "m 96 606 l 0 606 l 0 988 l 96 988 l 96 606 " }, "±": { x_min: 11, x_max: 781, ha: 792, o: "m 781 490 l 446 490 l 446 255 l 349 255 l 349 490 l 11 490 l 11 586 l 349 586 l 349 819 l 446 819 l 446 586 l 781 586 l 781 490 m 781 21 l 11 21 l 11 115 l 781 115 l 781 21 " }, "|": { x_min: 343, x_max: 449, ha: 792, o: "m 449 462 l 343 462 l 343 986 l 449 986 l 449 462 m 449 -242 l 343 -242 l 343 280 l 449 280 l 449 -242 " }, ϋ: { x_min: 0, x_max: 617, ha: 725, o: "m 482 800 l 372 800 l 372 925 l 482 925 l 482 800 m 239 800 l 129 800 l 129 925 l 239 925 l 239 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 " }, "§": { x_min: 0, x_max: 593, ha: 690, o: "m 593 425 q 554 312 593 369 q 467 233 516 254 q 537 83 537 172 q 459 -74 537 -12 q 288 -133 387 -133 q 115 -69 184 -133 q 47 96 47 -6 l 166 96 q 199 7 166 40 q 288 -26 232 -26 q 371 -5 332 -26 q 420 60 420 21 q 311 201 420 139 q 108 309 210 255 q 0 490 0 383 q 33 602 0 551 q 124 687 66 654 q 75 743 93 712 q 58 812 58 773 q 133 984 58 920 q 300 1043 201 1043 q 458 987 394 1043 q 529 814 529 925 l 411 814 q 370 908 404 877 q 289 939 336 939 q 213 911 246 939 q 180 841 180 883 q 286 720 180 779 q 484 612 480 615 q 593 425 593 534 m 467 409 q 355 544 467 473 q 196 630 228 612 q 146 587 162 609 q 124 525 124 558 q 239 387 124 462 q 398 298 369 315 q 448 345 429 316 q 467 409 467 375 " }, b: { x_min: 0, x_max: 685, ha: 783, o: "m 685 372 q 597 99 685 213 q 347 -25 501 -25 q 219 5 277 -25 q 121 93 161 36 l 121 0 l 0 0 l 0 1013 l 121 1013 l 121 634 q 214 723 157 692 q 341 754 272 754 q 591 637 493 754 q 685 372 685 526 m 554 356 q 499 550 554 470 q 328 644 437 644 q 162 556 223 644 q 108 369 108 478 q 160 176 108 256 q 330 83 221 83 q 498 169 435 83 q 554 356 554 245 " }, q: { x_min: 0, x_max: 683, ha: 876, o: "m 683 -278 l 564 -278 l 564 97 q 474 8 533 39 q 345 -23 415 -23 q 91 93 188 -23 q 0 364 0 203 q 87 635 0 522 q 337 760 184 760 q 466 727 408 760 q 564 637 523 695 l 564 737 l 683 737 l 683 -278 m 582 375 q 527 564 582 488 q 358 652 466 652 q 190 565 253 652 q 135 377 135 488 q 189 179 135 261 q 361 84 251 84 q 530 179 469 84 q 582 375 582 260 " }, Ω: { x_min: -0.171875, x_max: 969.5625, ha: 1068, o: "m 969 0 l 555 0 l 555 123 q 744 308 675 194 q 814 558 814 423 q 726 812 814 709 q 484 922 633 922 q 244 820 334 922 q 154 567 154 719 q 223 316 154 433 q 412 123 292 199 l 412 0 l 0 0 l 0 124 l 217 124 q 68 327 122 210 q 15 572 15 444 q 144 911 15 781 q 484 1041 274 1041 q 822 909 691 1041 q 953 569 953 777 q 899 326 953 443 q 750 124 846 210 l 969 124 l 969 0 " }, ύ: { x_min: 0, x_max: 617, ha: 725, o: "m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 535 1040 l 346 819 l 262 819 l 397 1040 l 535 1040 " }, z: { x_min: -0.015625, x_max: 613.890625, ha: 697, o: "m 613 0 l 0 0 l 0 100 l 433 630 l 20 630 l 20 738 l 594 738 l 593 636 l 163 110 l 613 110 l 613 0 " }, "™": { x_min: 0, x_max: 894, ha: 1e3, o: "m 389 951 l 229 951 l 229 503 l 160 503 l 160 951 l 0 951 l 0 1011 l 389 1011 l 389 951 m 894 503 l 827 503 l 827 939 l 685 503 l 620 503 l 481 937 l 481 503 l 417 503 l 417 1011 l 517 1011 l 653 580 l 796 1010 l 894 1011 l 894 503 " }, ή: { x_min: 0.78125, x_max: 697, ha: 810, o: "m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 721 124 755 q 200 630 193 687 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 m 479 1040 l 290 819 l 207 819 l 341 1040 l 479 1040 " }, Θ: { x_min: 0, x_max: 960, ha: 1056, o: "m 960 507 q 833 129 960 280 q 476 -32 698 -32 q 123 129 255 -32 q 0 507 0 280 q 123 883 0 732 q 476 1045 255 1045 q 832 883 696 1045 q 960 507 960 732 m 817 500 q 733 789 817 669 q 476 924 639 924 q 223 792 317 924 q 142 507 142 675 q 222 222 142 339 q 476 89 315 89 q 730 218 636 89 q 817 500 817 334 m 716 449 l 243 449 l 243 571 l 716 571 l 716 449 " }, "®": { x_min: -3, x_max: 1008, ha: 1106, o: "m 503 532 q 614 562 566 532 q 672 658 672 598 q 614 747 672 716 q 503 772 569 772 l 338 772 l 338 532 l 503 532 m 502 -7 q 123 151 263 -7 q -3 501 -3 294 q 123 851 -3 706 q 502 1011 263 1011 q 881 851 739 1011 q 1008 501 1008 708 q 883 151 1008 292 q 502 -7 744 -7 m 502 60 q 830 197 709 60 q 940 501 940 322 q 831 805 940 681 q 502 944 709 944 q 174 805 296 944 q 65 501 65 680 q 173 197 65 320 q 502 60 294 60 m 788 146 l 678 146 q 653 316 655 183 q 527 449 652 449 l 338 449 l 338 146 l 241 146 l 241 854 l 518 854 q 688 808 621 854 q 766 658 766 755 q 739 563 766 607 q 668 497 713 519 q 751 331 747 472 q 788 164 756 190 l 788 146 " }, "~": { x_min: 0, x_max: 833, ha: 931, o: "m 833 958 q 778 753 833 831 q 594 665 716 665 q 402 761 502 665 q 240 857 302 857 q 131 795 166 857 q 104 665 104 745 l 0 665 q 54 867 0 789 q 237 958 116 958 q 429 861 331 958 q 594 765 527 765 q 704 827 670 765 q 729 958 729 874 l 833 958 " }, Ε: { x_min: 0, x_max: 736.21875, ha: 778, o: "m 736 0 l 0 0 l 0 1013 l 725 1013 l 725 889 l 139 889 l 139 585 l 677 585 l 677 467 l 139 467 l 139 125 l 736 125 l 736 0 " }, "³": { x_min: 0, x_max: 450, ha: 547, o: "m 450 552 q 379 413 450 464 q 220 366 313 366 q 69 414 130 366 q 0 567 0 470 l 85 567 q 126 470 85 504 q 225 437 168 437 q 320 467 280 437 q 360 552 360 498 q 318 632 360 608 q 213 657 276 657 q 195 657 203 657 q 176 657 181 657 l 176 722 q 279 733 249 722 q 334 815 334 752 q 300 881 334 856 q 220 907 267 907 q 133 875 169 907 q 97 781 97 844 l 15 781 q 78 926 15 875 q 220 972 135 972 q 364 930 303 972 q 426 817 426 888 q 344 697 426 733 q 421 642 392 681 q 450 552 450 603 " }, "[": { x_min: 0, x_max: 273.609375, ha: 371, o: "m 273 -281 l 0 -281 l 0 1013 l 273 1013 l 273 920 l 124 920 l 124 -187 l 273 -187 l 273 -281 " }, L: { x_min: 0, x_max: 645.828125, ha: 696, o: "m 645 0 l 0 0 l 0 1013 l 140 1013 l 140 126 l 645 126 l 645 0 " }, σ: { x_min: 0, x_max: 803.390625, ha: 894, o: "m 803 628 l 633 628 q 713 368 713 512 q 618 93 713 204 q 357 -25 518 -25 q 94 91 194 -25 q 0 368 0 201 q 94 644 0 533 q 356 761 194 761 q 481 750 398 761 q 608 739 564 739 l 803 739 l 803 628 m 360 85 q 529 180 467 85 q 584 374 584 262 q 527 566 584 490 q 352 651 463 651 q 187 559 247 651 q 135 368 135 478 q 189 175 135 254 q 360 85 251 85 " }, ζ: { x_min: 0, x_max: 573, ha: 642, o: "m 573 -40 q 553 -162 573 -97 q 510 -278 543 -193 l 400 -278 q 441 -187 428 -219 q 462 -90 462 -132 q 378 -14 462 -14 q 108 45 197 -14 q 0 290 0 117 q 108 631 0 462 q 353 901 194 767 l 55 901 l 55 1012 l 561 1012 l 561 924 q 261 669 382 831 q 128 301 128 489 q 243 117 128 149 q 458 98 350 108 q 573 -40 573 80 " }, θ: { x_min: 0, x_max: 674, ha: 778, o: "m 674 496 q 601 160 674 304 q 336 -26 508 -26 q 73 153 165 -26 q 0 485 0 296 q 72 840 0 683 q 343 1045 166 1045 q 605 844 516 1045 q 674 496 674 692 m 546 579 q 498 798 546 691 q 336 935 437 935 q 178 798 237 935 q 126 579 137 701 l 546 579 m 546 475 l 126 475 q 170 233 126 348 q 338 80 230 80 q 504 233 447 80 q 546 475 546 346 " }, Ο: { x_min: 0, x_max: 958, ha: 1054, o: "m 485 1042 q 834 883 703 1042 q 958 511 958 735 q 834 136 958 287 q 481 -26 701 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 729 q 485 1042 263 1042 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 670 q 480 913 640 913 q 226 785 321 913 q 142 504 142 671 q 226 224 142 339 q 480 98 319 98 " }, Γ: { x_min: 0, x_max: 705.28125, ha: 749, o: "m 705 886 l 140 886 l 140 0 l 0 0 l 0 1012 l 705 1012 l 705 886 " }, " ": { x_min: 0, x_max: 0, ha: 375 }, "%": { x_min: -3, x_max: 1089, ha: 1186, o: "m 845 0 q 663 76 731 0 q 602 244 602 145 q 661 412 602 344 q 845 489 728 489 q 1027 412 959 489 q 1089 244 1089 343 q 1029 76 1089 144 q 845 0 962 0 m 844 103 q 945 143 909 103 q 981 243 981 184 q 947 340 981 301 q 844 385 909 385 q 744 342 781 385 q 708 243 708 300 q 741 147 708 186 q 844 103 780 103 m 888 986 l 284 -25 l 199 -25 l 803 986 l 888 986 m 241 468 q 58 545 126 468 q -3 715 -3 615 q 56 881 -3 813 q 238 958 124 958 q 421 881 353 958 q 483 712 483 813 q 423 544 483 612 q 241 468 356 468 m 241 855 q 137 811 175 855 q 100 710 100 768 q 136 612 100 653 q 240 572 172 572 q 344 614 306 572 q 382 713 382 656 q 347 810 382 771 q 241 855 308 855 " }, P: { x_min: 0, x_max: 726, ha: 806, o: "m 424 1013 q 640 931 555 1013 q 726 719 726 850 q 637 506 726 587 q 413 426 548 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 379 889 l 140 889 l 140 548 l 372 548 q 522 589 459 548 q 593 720 593 637 q 528 845 593 801 q 379 889 463 889 " }, Έ: { x_min: 0, x_max: 1078.21875, ha: 1118, o: "m 1078 0 l 342 0 l 342 1013 l 1067 1013 l 1067 889 l 481 889 l 481 585 l 1019 585 l 1019 467 l 481 467 l 481 125 l 1078 125 l 1078 0 m 277 1040 l 83 799 l 0 799 l 140 1040 l 277 1040 " }, Ώ: { x_min: 0.125, x_max: 1136.546875, ha: 1235, o: "m 1136 0 l 722 0 l 722 123 q 911 309 842 194 q 981 558 981 423 q 893 813 981 710 q 651 923 800 923 q 411 821 501 923 q 321 568 321 720 q 390 316 321 433 q 579 123 459 200 l 579 0 l 166 0 l 166 124 l 384 124 q 235 327 289 210 q 182 572 182 444 q 311 912 182 782 q 651 1042 441 1042 q 989 910 858 1042 q 1120 569 1120 778 q 1066 326 1120 443 q 917 124 1013 210 l 1136 124 l 1136 0 m 277 1040 l 83 800 l 0 800 l 140 1041 l 277 1040 " }, _: { x_min: 0, x_max: 705.5625, ha: 803, o: "m 705 -334 l 0 -334 l 0 -234 l 705 -234 l 705 -334 " }, Ϊ: { x_min: -110, x_max: 246, ha: 275, o: "m 246 1046 l 118 1046 l 118 1189 l 246 1189 l 246 1046 m 18 1046 l -110 1046 l -110 1189 l 18 1189 l 18 1046 m 136 0 l 0 0 l 0 1012 l 136 1012 l 136 0 " }, "+": { x_min: 23, x_max: 768, ha: 792, o: "m 768 372 l 444 372 l 444 0 l 347 0 l 347 372 l 23 372 l 23 468 l 347 468 l 347 840 l 444 840 l 444 468 l 768 468 l 768 372 " }, "½": { x_min: 0, x_max: 1050, ha: 1149, o: "m 1050 0 l 625 0 q 712 178 625 108 q 878 277 722 187 q 967 385 967 328 q 932 456 967 429 q 850 484 897 484 q 759 450 798 484 q 721 352 721 416 l 640 352 q 706 502 640 448 q 851 551 766 551 q 987 509 931 551 q 1050 385 1050 462 q 976 251 1050 301 q 829 179 902 215 q 717 68 740 133 l 1050 68 l 1050 0 m 834 985 l 215 -28 l 130 -28 l 750 984 l 834 985 m 224 422 l 142 422 l 142 811 l 0 811 l 0 867 q 104 889 62 867 q 164 973 157 916 l 224 973 l 224 422 " }, Ρ: { x_min: 0, x_max: 720, ha: 783, o: "m 424 1013 q 637 933 554 1013 q 720 723 720 853 q 633 508 720 591 q 413 426 546 426 l 140 426 l 140 0 l 0 0 l 0 1013 l 424 1013 m 378 889 l 140 889 l 140 548 l 371 548 q 521 589 458 548 q 592 720 592 637 q 527 845 592 801 q 378 889 463 889 " }, "'": { x_min: 0, x_max: 139, ha: 236, o: "m 139 851 q 102 737 139 784 q 0 669 65 690 l 0 734 q 59 787 42 741 q 72 873 72 821 l 0 873 l 0 1013 l 139 1013 l 139 851 " }, ª: { x_min: 0, x_max: 350, ha: 397, o: "m 350 625 q 307 616 328 616 q 266 631 281 616 q 247 673 251 645 q 190 628 225 644 q 116 613 156 613 q 32 641 64 613 q 0 722 0 669 q 72 826 0 800 q 247 866 159 846 l 247 887 q 220 934 247 916 q 162 953 194 953 q 104 934 129 953 q 76 882 80 915 l 16 882 q 60 976 16 941 q 166 1011 104 1011 q 266 979 224 1011 q 308 891 308 948 l 308 706 q 311 679 308 688 q 331 670 315 670 l 350 672 l 350 625 m 247 757 l 247 811 q 136 790 175 798 q 64 726 64 773 q 83 682 64 697 q 132 667 103 667 q 207 690 174 667 q 247 757 247 718 " }, "΅": { x_min: 0, x_max: 450, ha: 553, o: "m 450 800 l 340 800 l 340 925 l 450 925 l 450 800 m 406 1040 l 212 800 l 129 800 l 269 1040 l 406 1040 m 110 800 l 0 800 l 0 925 l 110 925 l 110 800 " }, T: { x_min: 0, x_max: 777, ha: 835, o: "m 777 894 l 458 894 l 458 0 l 319 0 l 319 894 l 0 894 l 0 1013 l 777 1013 l 777 894 " }, Φ: { x_min: 0, x_max: 915, ha: 997, o: "m 527 0 l 389 0 l 389 122 q 110 231 220 122 q 0 509 0 340 q 110 785 0 677 q 389 893 220 893 l 389 1013 l 527 1013 l 527 893 q 804 786 693 893 q 915 509 915 679 q 805 231 915 341 q 527 122 696 122 l 527 0 m 527 226 q 712 310 641 226 q 779 507 779 389 q 712 705 779 627 q 527 787 641 787 l 527 226 m 389 226 l 389 787 q 205 698 275 775 q 136 505 136 620 q 206 308 136 391 q 389 226 276 226 " }, "⁋": { x_min: 0, x_max: 0, ha: 694 }, j: { x_min: -77.78125, x_max: 167, ha: 349, o: "m 167 871 l 42 871 l 42 1013 l 167 1013 l 167 871 m 167 -80 q 121 -231 167 -184 q -26 -278 76 -278 l -77 -278 l -77 -164 l -41 -164 q 26 -143 11 -164 q 42 -65 42 -122 l 42 737 l 167 737 l 167 -80 " }, Σ: { x_min: 0, x_max: 756.953125, ha: 819, o: "m 756 0 l 0 0 l 0 107 l 395 523 l 22 904 l 22 1013 l 745 1013 l 745 889 l 209 889 l 566 523 l 187 125 l 756 125 l 756 0 " }, 1: { x_min: 215.671875, x_max: 574, ha: 792, o: "m 574 0 l 442 0 l 442 697 l 215 697 l 215 796 q 386 833 330 796 q 475 986 447 875 l 574 986 l 574 0 " }, "›": { x_min: 18.0625, x_max: 774, ha: 792, o: "m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 " }, "<": { x_min: 17.984375, x_max: 773.609375, ha: 792, o: "m 773 40 l 18 376 l 17 465 l 773 799 l 773 692 l 159 420 l 773 149 l 773 40 " }, "£": { x_min: 0, x_max: 704.484375, ha: 801, o: "m 704 41 q 623 -10 664 5 q 543 -26 583 -26 q 359 15 501 -26 q 243 36 288 36 q 158 23 197 36 q 73 -21 119 10 l 6 76 q 125 195 90 150 q 175 331 175 262 q 147 443 175 383 l 0 443 l 0 512 l 108 512 q 43 734 43 623 q 120 929 43 854 q 358 1010 204 1010 q 579 936 487 1010 q 678 729 678 857 l 678 684 l 552 684 q 504 838 552 780 q 362 896 457 896 q 216 852 263 896 q 176 747 176 815 q 199 627 176 697 q 248 512 217 574 l 468 512 l 468 443 l 279 443 q 297 356 297 398 q 230 194 297 279 q 153 107 211 170 q 227 133 190 125 q 293 142 264 142 q 410 119 339 142 q 516 96 482 96 q 579 105 550 96 q 648 142 608 115 l 704 41 " }, t: { x_min: 0, x_max: 367, ha: 458, o: "m 367 0 q 312 -5 339 -2 q 262 -8 284 -8 q 145 28 183 -8 q 108 143 108 64 l 108 638 l 0 638 l 0 738 l 108 738 l 108 944 l 232 944 l 232 738 l 367 738 l 367 638 l 232 638 l 232 185 q 248 121 232 140 q 307 102 264 102 q 345 104 330 102 q 367 107 360 107 l 367 0 " }, "¬": { x_min: 0, x_max: 706, ha: 803, o: "m 706 411 l 706 158 l 630 158 l 630 335 l 0 335 l 0 411 l 706 411 " }, λ: { x_min: 0, x_max: 750, ha: 803, o: "m 750 -7 q 679 -15 716 -15 q 538 59 591 -15 q 466 214 512 97 l 336 551 l 126 0 l 0 0 l 270 705 q 223 837 247 770 q 116 899 190 899 q 90 898 100 899 l 90 1004 q 152 1011 125 1011 q 298 938 244 1011 q 373 783 326 901 l 605 192 q 649 115 629 136 q 716 95 669 95 l 736 95 q 750 97 745 97 l 750 -7 " }, W: { x_min: 0, x_max: 1263.890625, ha: 1351, o: "m 1263 1013 l 995 0 l 859 0 l 627 837 l 405 0 l 265 0 l 0 1013 l 136 1013 l 342 202 l 556 1013 l 701 1013 l 921 207 l 1133 1012 l 1263 1013 " }, ">": { x_min: 18.0625, x_max: 774, ha: 792, o: "m 774 376 l 18 40 l 18 149 l 631 421 l 18 692 l 18 799 l 774 465 l 774 376 " }, v: { x_min: 0, x_max: 675.15625, ha: 761, o: "m 675 738 l 404 0 l 272 0 l 0 738 l 133 737 l 340 147 l 541 737 l 675 738 " }, τ: { x_min: 0.28125, x_max: 644.5, ha: 703, o: "m 644 628 l 382 628 l 382 179 q 388 120 382 137 q 436 91 401 91 q 474 94 447 91 q 504 97 501 97 l 504 0 q 454 -9 482 -5 q 401 -14 426 -14 q 278 67 308 -14 q 260 233 260 118 l 260 628 l 0 628 l 0 739 l 644 739 l 644 628 " }, ξ: { x_min: 0, x_max: 624.9375, ha: 699, o: "m 624 -37 q 608 -153 624 -96 q 563 -278 593 -211 l 454 -278 q 491 -183 486 -200 q 511 -83 511 -126 q 484 -23 511 -44 q 370 1 452 1 q 323 0 354 1 q 283 -1 293 -1 q 84 76 169 -1 q 0 266 0 154 q 56 431 0 358 q 197 538 108 498 q 94 613 134 562 q 54 730 54 665 q 77 823 54 780 q 143 901 101 867 l 27 901 l 27 1012 l 576 1012 l 576 901 l 380 901 q 244 863 303 901 q 178 745 178 820 q 312 600 178 636 q 532 582 380 582 l 532 479 q 276 455 361 479 q 118 281 118 410 q 165 173 118 217 q 274 120 208 133 q 494 101 384 110 q 624 -37 624 76 " }, "&": { x_min: -3, x_max: 894.25, ha: 992, o: "m 894 0 l 725 0 l 624 123 q 471 0 553 40 q 306 -41 390 -41 q 168 -7 231 -41 q 62 92 105 26 q 14 187 31 139 q -3 276 -3 235 q 55 433 -3 358 q 248 581 114 508 q 170 689 196 640 q 137 817 137 751 q 214 985 137 922 q 384 1041 284 1041 q 548 988 483 1041 q 622 824 622 928 q 563 666 622 739 q 431 556 516 608 l 621 326 q 649 407 639 361 q 663 493 653 426 l 781 493 q 703 229 781 352 l 894 0 m 504 818 q 468 908 504 877 q 384 940 433 940 q 293 907 331 940 q 255 818 255 875 q 289 714 255 767 q 363 628 313 678 q 477 729 446 682 q 504 818 504 771 m 556 209 l 314 499 q 179 395 223 449 q 135 283 135 341 q 146 222 135 253 q 183 158 158 192 q 333 80 241 80 q 556 209 448 80 " }, Λ: { x_min: 0, x_max: 862.5, ha: 942, o: "m 862 0 l 719 0 l 426 847 l 143 0 l 0 0 l 356 1013 l 501 1013 l 862 0 " }, I: { x_min: 41, x_max: 180, ha: 293, o: "m 180 0 l 41 0 l 41 1013 l 180 1013 l 180 0 " }, G: { x_min: 0, x_max: 921, ha: 1011, o: "m 921 0 l 832 0 l 801 136 q 655 15 741 58 q 470 -28 568 -28 q 126 133 259 -28 q 0 499 0 284 q 125 881 0 731 q 486 1043 259 1043 q 763 957 647 1043 q 905 709 890 864 l 772 709 q 668 866 747 807 q 486 926 589 926 q 228 795 322 926 q 142 507 142 677 q 228 224 142 342 q 483 94 323 94 q 712 195 625 94 q 796 435 796 291 l 477 435 l 477 549 l 921 549 l 921 0 " }, ΰ: { x_min: 0, x_max: 617, ha: 725, o: "m 524 800 l 414 800 l 414 925 l 524 925 l 524 800 m 183 800 l 73 800 l 73 925 l 183 925 l 183 800 m 617 352 q 540 93 617 199 q 308 -24 455 -24 q 76 93 161 -24 q 0 352 0 199 l 0 738 l 126 738 l 126 354 q 169 185 126 257 q 312 98 220 98 q 451 185 402 98 q 492 354 492 257 l 492 738 l 617 738 l 617 352 m 489 1040 l 300 819 l 216 819 l 351 1040 l 489 1040 " }, "`": { x_min: 0, x_max: 138.890625, ha: 236, o: "m 138 699 l 0 699 l 0 861 q 36 974 0 929 q 138 1041 72 1020 l 138 977 q 82 931 95 969 q 69 839 69 893 l 138 839 l 138 699 " }, "·": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 " }, Υ: { x_min: 0.328125, x_max: 819.515625, ha: 889, o: "m 819 1013 l 482 416 l 482 0 l 342 0 l 342 416 l 0 1013 l 140 1013 l 411 533 l 679 1013 l 819 1013 " }, r: { x_min: 0, x_max: 355.5625, ha: 432, o: "m 355 621 l 343 621 q 179 569 236 621 q 122 411 122 518 l 122 0 l 0 0 l 0 737 l 117 737 l 117 604 q 204 719 146 686 q 355 753 262 753 l 355 621 " }, x: { x_min: 0, x_max: 675, ha: 764, o: "m 675 0 l 525 0 l 331 286 l 144 0 l 0 0 l 256 379 l 12 738 l 157 737 l 336 473 l 516 738 l 661 738 l 412 380 l 675 0 " }, μ: { x_min: 0, x_max: 696.609375, ha: 747, o: "m 696 -4 q 628 -14 657 -14 q 498 97 513 -14 q 422 8 470 41 q 313 -24 374 -24 q 207 3 258 -24 q 120 80 157 31 l 120 -278 l 0 -278 l 0 738 l 124 738 l 124 343 q 165 172 124 246 q 308 82 216 82 q 451 177 402 82 q 492 358 492 254 l 492 738 l 616 738 l 616 214 q 623 136 616 160 q 673 92 636 92 q 696 95 684 92 l 696 -4 " }, h: { x_min: 0, x_max: 615, ha: 724, o: "m 615 472 l 615 0 l 490 0 l 490 454 q 456 590 490 535 q 338 654 416 654 q 186 588 251 654 q 122 436 122 522 l 122 0 l 0 0 l 0 1013 l 122 1013 l 122 633 q 218 727 149 694 q 362 760 287 760 q 552 676 484 760 q 615 472 615 600 " }, ".": { x_min: 0, x_max: 142, ha: 239, o: "m 142 0 l 0 0 l 0 151 l 142 151 l 142 0 " }, φ: { x_min: -2, x_max: 878, ha: 974, o: "m 496 -279 l 378 -279 l 378 -17 q 101 88 204 -17 q -2 367 -2 194 q 68 626 -2 510 q 283 758 151 758 l 283 646 q 167 537 209 626 q 133 373 133 462 q 192 177 133 254 q 378 93 259 93 l 378 758 q 445 764 426 763 q 476 765 464 765 q 765 659 653 765 q 878 377 878 553 q 771 96 878 209 q 496 -17 665 -17 l 496 -279 m 496 93 l 514 93 q 687 183 623 93 q 746 380 746 265 q 691 569 746 491 q 522 658 629 658 l 496 656 l 496 93 " }, ";": { x_min: 0, x_max: 142, ha: 239, o: "m 142 585 l 0 585 l 0 738 l 142 738 l 142 585 m 142 -12 q 105 -132 142 -82 q 0 -206 68 -182 l 0 -138 q 58 -82 43 -123 q 68 0 68 -56 l 0 0 l 0 151 l 142 151 l 142 -12 " }, f: { x_min: 0, x_max: 378, ha: 472, o: "m 378 638 l 246 638 l 246 0 l 121 0 l 121 638 l 0 638 l 0 738 l 121 738 q 137 935 121 887 q 290 1028 171 1028 q 320 1027 305 1028 q 378 1021 334 1026 l 378 908 q 323 918 346 918 q 257 870 273 918 q 246 780 246 840 l 246 738 l 378 738 l 378 638 " }, "“": { x_min: 1, x_max: 348.21875, ha: 454, o: "m 140 670 l 1 670 l 1 830 q 37 943 1 897 q 140 1011 74 990 l 140 947 q 82 900 97 940 q 68 810 68 861 l 140 810 l 140 670 m 348 670 l 209 670 l 209 830 q 245 943 209 897 q 348 1011 282 990 l 348 947 q 290 900 305 940 q 276 810 276 861 l 348 810 l 348 670 " }, A: { x_min: 0.03125, x_max: 906.953125, ha: 1008, o: "m 906 0 l 756 0 l 648 303 l 251 303 l 142 0 l 0 0 l 376 1013 l 529 1013 l 906 0 m 610 421 l 452 867 l 293 421 l 610 421 " }, 6: { x_min: 53, x_max: 739, ha: 792, o: "m 739 312 q 633 62 739 162 q 400 -31 534 -31 q 162 78 257 -31 q 53 439 53 206 q 178 859 53 712 q 441 986 284 986 q 643 912 559 986 q 732 713 732 833 l 601 713 q 544 830 594 786 q 426 875 494 875 q 268 793 331 875 q 193 517 193 697 q 301 597 240 570 q 427 624 362 624 q 643 540 552 624 q 739 312 739 451 m 603 298 q 540 461 603 400 q 404 516 484 516 q 268 461 323 516 q 207 300 207 401 q 269 137 207 198 q 405 83 325 83 q 541 137 486 83 q 603 298 603 197 " }, "‘": { x_min: 1, x_max: 139.890625, ha: 236, o: "m 139 670 l 1 670 l 1 830 q 37 943 1 897 q 139 1011 74 990 l 139 947 q 82 900 97 940 q 68 810 68 861 l 139 810 l 139 670 " }, ϊ: { x_min: -70, x_max: 283, ha: 361, o: "m 283 800 l 173 800 l 173 925 l 283 925 l 283 800 m 40 800 l -70 800 l -70 925 l 40 925 l 40 800 m 283 3 q 232 -10 257 -5 q 181 -15 206 -15 q 84 26 118 -15 q 41 200 41 79 l 41 737 l 166 737 l 167 215 q 171 141 167 157 q 225 101 182 101 q 247 103 238 101 q 283 112 256 104 l 283 3 " }, π: { x_min: -0.21875, x_max: 773.21875, ha: 857, o: "m 773 -7 l 707 -11 q 575 40 607 -11 q 552 174 552 77 l 552 226 l 552 626 l 222 626 l 222 0 l 97 0 l 97 626 l 0 626 l 0 737 l 773 737 l 773 626 l 676 626 l 676 171 q 695 103 676 117 q 773 90 714 90 l 773 -7 " }, ά: { x_min: 0, x_max: 765.5625, ha: 809, o: "m 765 -4 q 698 -14 726 -14 q 564 97 586 -14 q 466 7 525 40 q 337 -26 407 -26 q 88 98 186 -26 q 0 369 0 212 q 88 637 0 525 q 337 760 184 760 q 465 727 407 760 q 563 637 524 695 l 563 738 l 685 738 l 685 222 q 693 141 685 168 q 748 94 708 94 q 765 95 760 94 l 765 -4 m 584 371 q 531 562 584 485 q 360 653 470 653 q 192 566 254 653 q 135 379 135 489 q 186 181 135 261 q 358 84 247 84 q 528 176 465 84 q 584 371 584 260 m 604 1040 l 415 819 l 332 819 l 466 1040 l 604 1040 " }, O: { x_min: 0, x_max: 958, ha: 1057, o: "m 485 1041 q 834 882 702 1041 q 958 512 958 734 q 834 136 958 287 q 481 -26 702 -26 q 126 130 261 -26 q 0 504 0 279 q 127 880 0 728 q 485 1041 263 1041 m 480 98 q 731 225 638 98 q 815 504 815 340 q 733 783 815 669 q 480 912 640 912 q 226 784 321 912 q 142 504 142 670 q 226 224 142 339 q 480 98 319 98 " }, n: { x_min: 0, x_max: 615, ha: 724, o: "m 615 463 l 615 0 l 490 0 l 490 454 q 453 592 490 537 q 331 656 410 656 q 178 585 240 656 q 117 421 117 514 l 117 0 l 0 0 l 0 738 l 117 738 l 117 630 q 218 728 150 693 q 359 764 286 764 q 552 675 484 764 q 615 463 615 593 " }, 3: { x_min: 54, x_max: 737, ha: 792, o: "m 737 284 q 635 55 737 141 q 399 -25 541 -25 q 156 52 248 -25 q 54 308 54 140 l 185 308 q 245 147 185 202 q 395 96 302 96 q 539 140 484 96 q 602 280 602 190 q 510 429 602 390 q 324 454 451 454 l 324 565 q 487 584 441 565 q 565 719 565 617 q 515 835 565 791 q 395 879 466 879 q 255 824 307 879 q 203 661 203 769 l 78 661 q 166 909 78 822 q 387 992 250 992 q 603 921 513 992 q 701 723 701 844 q 669 607 701 656 q 578 524 637 558 q 696 434 655 499 q 737 284 737 369 " }, 9: { x_min: 53, x_max: 739, ha: 792, o: "m 739 524 q 619 94 739 241 q 362 -32 516 -32 q 150 47 242 -32 q 59 244 59 126 l 191 244 q 246 129 191 176 q 373 82 301 82 q 526 161 466 82 q 597 440 597 255 q 363 334 501 334 q 130 432 216 334 q 53 650 53 521 q 134 880 53 786 q 383 986 226 986 q 659 841 566 986 q 739 524 739 719 m 388 449 q 535 514 480 449 q 585 658 585 573 q 535 805 585 744 q 388 873 480 873 q 242 809 294 873 q 191 658 191 745 q 239 514 191 572 q 388 449 292 449 " }, l: { x_min: 41, x_max: 166, ha: 279, o: "m 166 0 l 41 0 l 41 1013 l 166 1013 l 166 0 " }, "¤": { x_min: 40.09375, x_max: 728.796875, ha: 825, o: "m 728 304 l 649 224 l 512 363 q 383 331 458 331 q 256 363 310 331 l 119 224 l 40 304 l 177 441 q 150 553 150 493 q 184 673 150 621 l 40 818 l 119 898 l 267 749 q 321 766 291 759 q 384 773 351 773 q 447 766 417 773 q 501 749 477 759 l 649 898 l 728 818 l 585 675 q 612 618 604 648 q 621 553 621 587 q 591 441 621 491 l 728 304 m 384 682 q 280 643 318 682 q 243 551 243 604 q 279 461 243 499 q 383 423 316 423 q 487 461 449 423 q 525 553 525 500 q 490 641 525 605 q 384 682 451 682 " }, κ: { x_min: 0, x_max: 632.328125, ha: 679, o: "m 632 0 l 482 0 l 225 384 l 124 288 l 124 0 l 0 0 l 0 738 l 124 738 l 124 446 l 433 738 l 596 738 l 312 466 l 632 0 " }, 4: { x_min: 48, x_max: 742.453125, ha: 792, o: "m 742 243 l 602 243 l 602 0 l 476 0 l 476 243 l 48 243 l 48 368 l 476 958 l 602 958 l 602 354 l 742 354 l 742 243 m 476 354 l 476 792 l 162 354 l 476 354 " }, p: { x_min: 0, x_max: 685, ha: 786, o: "m 685 364 q 598 96 685 205 q 350 -23 504 -23 q 121 89 205 -23 l 121 -278 l 0 -278 l 0 738 l 121 738 l 121 633 q 220 726 159 691 q 351 761 280 761 q 598 636 504 761 q 685 364 685 522 m 557 371 q 501 560 557 481 q 330 651 437 651 q 162 559 223 651 q 108 366 108 479 q 162 177 108 254 q 333 87 224 87 q 502 178 441 87 q 557 371 557 258 " }, "‡": { x_min: 0, x_max: 777, ha: 835, o: "m 458 238 l 458 0 l 319 0 l 319 238 l 0 238 l 0 360 l 319 360 l 319 681 l 0 683 l 0 804 l 319 804 l 319 1015 l 458 1013 l 458 804 l 777 804 l 777 683 l 458 683 l 458 360 l 777 360 l 777 238 l 458 238 " }, ψ: { x_min: 0, x_max: 808, ha: 907, o: "m 465 -278 l 341 -278 l 341 -15 q 87 102 180 -15 q 0 378 0 210 l 0 739 l 133 739 l 133 379 q 182 195 133 275 q 341 98 242 98 l 341 922 l 465 922 l 465 98 q 623 195 563 98 q 675 382 675 278 l 675 742 l 808 742 l 808 381 q 720 104 808 213 q 466 -13 627 -13 l 465 -278 " }, η: { x_min: 0.78125, x_max: 697, ha: 810, o: "m 697 -278 l 572 -278 l 572 454 q 540 587 572 536 q 425 650 501 650 q 271 579 337 650 q 206 420 206 509 l 206 0 l 81 0 l 81 489 q 73 588 81 562 q 0 644 56 644 l 0 741 q 68 755 38 755 q 158 720 124 755 q 200 630 193 686 q 297 726 234 692 q 434 761 359 761 q 620 692 544 761 q 697 516 697 624 l 697 -278 " } }, cssFontWeight: "normal", ascender: 1189, underlinePosition: -100, cssFontStyle: "normal", boundingBox: { yMin: -334, xMin: -111, yMax: 1189, xMax: 1672 }, resolution: 1e3, original_font_information: { postscript_name: "Helvetiker-Regular", version_string: "Version 1.00 2004 initial release", vendor_url: "http://www.magenta.gr/", full_font_name: "Helvetiker", font_family_name: "Helvetiker", copyright: "Copyright (c) Μagenta ltd, 2004", description: "", trademark: "", designer: "", designer_url: "", unique_font_identifier: "Μagenta ltd:Helvetiker:22-10-104", license_url: "http://www.ellak.gr/fonts/MgOpen/license.html", license_description: `Copyright (c) 2004 by MAGENTA Ltd. All Rights Reserved.\r
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
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL MAGENTA OR PERSONS OR BODIES IN CHARGE OF ADMINISTRATION AND MAINTENANCE OF THE FONT SOFTWARE BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM OTHER DEALINGS IN THE FONT SOFTWARE.`, manufacturer_name: "Μagenta ltd", font_sub_family_name: "Regular" }, descender: -334, familyName: "Helvetiker", lineHeight: 1522, underlineThickness: 50 }, po = { type: "change" }, rs = { type: "start" }, go = { type: "end" };
class dp extends Ln {
  constructor(e, t) {
    super(), this.object = e, this.domElement = t, this.domElement.style.touchAction = "none", this.enabled = !0, this.target = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = !1, this.dampingFactor = 0.05, this.enableZoom = !0, this.zoomSpeed = 1, this.enableRotate = !0, this.rotateSpeed = 1, this.enablePan = !0, this.panSpeed = 1, this.screenSpacePanning = !0, this.keyPanSpeed = 7, this.autoRotate = !1, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: qn.ROTATE, MIDDLE: qn.DOLLY, RIGHT: qn.PAN }, this.touches = { ONE: Dn.ROTATE, TWO: Dn.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this.getPolarAngle = function() {
      return a.phi;
    }, this.getAzimuthalAngle = function() {
      return a.theta;
    }, this.getDistance = function() {
      return this.object.position.distanceTo(this.target);
    }, this.listenToKeyEvents = function(P) {
      P.addEventListener("keydown", Le), this._domElementKeyEvents = P;
    }, this.stopListenToKeyEvents = function() {
      this._domElementKeyEvents.removeEventListener("keydown", Le), this._domElementKeyEvents = null;
    }, this.saveState = function() {
      n.target0.copy(n.target), n.position0.copy(n.object.position), n.zoom0 = n.object.zoom;
    }, this.reset = function() {
      n.target.copy(n.target0), n.object.position.copy(n.position0), n.object.zoom = n.zoom0, n.object.updateProjectionMatrix(), n.dispatchEvent(po), n.update(), s = r.NONE;
    }, this.update = function() {
      const P = new R(), J = new wn().setFromUnitVectors(e.up, new R(0, 1, 0)), B = J.clone().invert(), de = new R(), ve = new wn(), Te = 2 * Math.PI;
      return function() {
        const Ee = n.object.position;
        P.copy(Ee).sub(n.target), P.applyQuaternion(J), a.setFromVector3(P), n.autoRotate && s === r.NONE && v(q()), n.enableDamping ? (a.theta += c.theta * n.dampingFactor, a.phi += c.phi * n.dampingFactor) : (a.theta += c.theta, a.phi += c.phi);
        let qe = n.minAzimuthAngle, Be = n.maxAzimuthAngle;
        return isFinite(qe) && isFinite(Be) && (qe < -Math.PI ? qe += Te : qe > Math.PI && (qe -= Te), Be < -Math.PI ? Be += Te : Be > Math.PI && (Be -= Te), qe <= Be ? a.theta = Math.max(qe, Math.min(Be, a.theta)) : a.theta = a.theta > (qe + Be) / 2 ? Math.max(qe, a.theta) : Math.min(Be, a.theta)), a.phi = Math.max(n.minPolarAngle, Math.min(n.maxPolarAngle, a.phi)), a.makeSafe(), a.radius *= l, a.radius = Math.max(n.minDistance, Math.min(n.maxDistance, a.radius)), n.enableDamping === !0 ? n.target.addScaledVector(h, n.dampingFactor) : n.target.add(h), P.setFromSpherical(a), P.applyQuaternion(B), Ee.copy(n.target).add(P), n.object.lookAt(n.target), n.enableDamping === !0 ? (c.theta *= 1 - n.dampingFactor, c.phi *= 1 - n.dampingFactor, h.multiplyScalar(1 - n.dampingFactor)) : (c.set(0, 0, 0), h.set(0, 0, 0)), l = 1, u || de.distanceToSquared(n.object.position) > o || 8 * (1 - ve.dot(n.object.quaternion)) > o ? (n.dispatchEvent(po), de.copy(n.object.position), ve.copy(n.object.quaternion), u = !1, !0) : !1;
      };
    }(), this.dispose = function() {
      n.domElement.removeEventListener("contextmenu", M), n.domElement.removeEventListener("pointerdown", te), n.domElement.removeEventListener("pointercancel", he), n.domElement.removeEventListener("wheel", Se), n.domElement.removeEventListener("pointermove", ge), n.domElement.removeEventListener("pointerup", he), n._domElementKeyEvents !== null && (n._domElementKeyEvents.removeEventListener("keydown", Le), n._domElementKeyEvents = null);
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
    const o = 1e-6, a = new fo(), c = new fo();
    let l = 1;
    const h = new R();
    let u = !1;
    const d = new oe(), m = new oe(), g = new oe(), x = new oe(), p = new oe(), f = new oe(), y = new oe(), _ = new oe(), b = new oe(), E = [], w = {};
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
    const V = function() {
      const P = new R();
      return function(B, de) {
        P.setFromMatrixColumn(de, 0), P.multiplyScalar(-B), h.add(P);
      };
    }(), re = function() {
      const P = new R();
      return function(B, de) {
        n.screenSpacePanning === !0 ? P.setFromMatrixColumn(de, 1) : (P.setFromMatrixColumn(de, 0), P.crossVectors(n.object.up, P)), P.multiplyScalar(B), h.add(P);
      };
    }(), U = function() {
      const P = new R();
      return function(B, de) {
        const ve = n.domElement;
        if (n.object.isPerspectiveCamera) {
          const Te = n.object.position;
          P.copy(Te).sub(n.target);
          let _e = P.length();
          _e *= Math.tan(n.object.fov / 2 * Math.PI / 180), V(2 * B * _e / ve.clientHeight, n.object.matrix), re(2 * de * _e / ve.clientHeight, n.object.matrix);
        } else
          n.object.isOrthographicCamera ? (V(B * (n.object.right - n.object.left) / n.object.zoom / ve.clientWidth, n.object.matrix), re(de * (n.object.top - n.object.bottom) / n.object.zoom / ve.clientHeight, n.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), n.enablePan = !1);
      };
    }();
    function O(P) {
      n.object.isPerspectiveCamera ? l /= P : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom * P)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function H(P) {
      n.object.isPerspectiveCamera ? l *= P : n.object.isOrthographicCamera ? (n.object.zoom = Math.max(n.minZoom, Math.min(n.maxZoom, n.object.zoom / P)), n.object.updateProjectionMatrix(), u = !0) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), n.enableZoom = !1);
    }
    function ne(P) {
      d.set(P.clientX, P.clientY);
    }
    function K(P) {
      y.set(P.clientX, P.clientY);
    }
    function j(P) {
      x.set(P.clientX, P.clientY);
    }
    function Q(P) {
      m.set(P.clientX, P.clientY), g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      v(2 * Math.PI * g.x / J.clientHeight), A(2 * Math.PI * g.y / J.clientHeight), d.copy(m), n.update();
    }
    function ie(P) {
      _.set(P.clientX, P.clientY), b.subVectors(_, y), b.y > 0 ? O(N()) : b.y < 0 && H(N()), y.copy(_), n.update();
    }
    function pe(P) {
      p.set(P.clientX, P.clientY), f.subVectors(p, x).multiplyScalar(n.panSpeed), U(f.x, f.y), x.copy(p), n.update();
    }
    function ce(P) {
      P.deltaY < 0 ? H(N()) : P.deltaY > 0 && O(N()), n.update();
    }
    function G(P) {
      let J = !1;
      switch (P.code) {
        case n.keys.UP:
          P.ctrlKey || P.metaKey || P.shiftKey ? A(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(0, n.keyPanSpeed), J = !0;
          break;
        case n.keys.BOTTOM:
          P.ctrlKey || P.metaKey || P.shiftKey ? A(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(0, -n.keyPanSpeed), J = !0;
          break;
        case n.keys.LEFT:
          P.ctrlKey || P.metaKey || P.shiftKey ? v(2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(n.keyPanSpeed, 0), J = !0;
          break;
        case n.keys.RIGHT:
          P.ctrlKey || P.metaKey || P.shiftKey ? v(-2 * Math.PI * n.rotateSpeed / n.domElement.clientHeight) : U(-n.keyPanSpeed, 0), J = !0;
          break;
      }
      J && (P.preventDefault(), n.update());
    }
    function Y() {
      if (E.length === 1)
        d.set(E[0].pageX, E[0].pageY);
      else {
        const P = 0.5 * (E[0].pageX + E[1].pageX), J = 0.5 * (E[0].pageY + E[1].pageY);
        d.set(P, J);
      }
    }
    function ae() {
      if (E.length === 1)
        x.set(E[0].pageX, E[0].pageY);
      else {
        const P = 0.5 * (E[0].pageX + E[1].pageX), J = 0.5 * (E[0].pageY + E[1].pageY);
        x.set(P, J);
      }
    }
    function fe() {
      const P = E[0].pageX - E[1].pageX, J = E[0].pageY - E[1].pageY, B = Math.sqrt(P * P + J * J);
      y.set(0, B);
    }
    function C() {
      n.enableZoom && fe(), n.enablePan && ae();
    }
    function ye() {
      n.enableZoom && fe(), n.enableRotate && Y();
    }
    function Pe(P) {
      if (E.length == 1)
        m.set(P.pageX, P.pageY);
      else {
        const B = ue(P), de = 0.5 * (P.pageX + B.x), ve = 0.5 * (P.pageY + B.y);
        m.set(de, ve);
      }
      g.subVectors(m, d).multiplyScalar(n.rotateSpeed);
      const J = n.domElement;
      v(2 * Math.PI * g.x / J.clientHeight), A(2 * Math.PI * g.y / J.clientHeight), d.copy(m);
    }
    function le(P) {
      if (E.length === 1)
        p.set(P.pageX, P.pageY);
      else {
        const J = ue(P), B = 0.5 * (P.pageX + J.x), de = 0.5 * (P.pageY + J.y);
        p.set(B, de);
      }
      f.subVectors(p, x).multiplyScalar(n.panSpeed), U(f.x, f.y), x.copy(p);
    }
    function Me(P) {
      const J = ue(P), B = P.pageX - J.x, de = P.pageY - J.y, ve = Math.sqrt(B * B + de * de);
      _.set(0, ve), b.set(0, Math.pow(_.y / y.y, n.zoomSpeed)), O(b.y), y.copy(_);
    }
    function $(P) {
      n.enableZoom && Me(P), n.enablePan && le(P);
    }
    function k(P) {
      n.enableZoom && Me(P), n.enableRotate && Pe(P);
    }
    function te(P) {
      n.enabled !== !1 && (E.length === 0 && (n.domElement.setPointerCapture(P.pointerId), n.domElement.addEventListener("pointermove", ge), n.domElement.addEventListener("pointerup", he)), z(P), P.pointerType === "touch" ? Oe(P) : Ae(P));
    }
    function ge(P) {
      n.enabled !== !1 && (P.pointerType === "touch" ? T(P) : we(P));
    }
    function he(P) {
      D(P), E.length === 0 && (n.domElement.releasePointerCapture(P.pointerId), n.domElement.removeEventListener("pointermove", ge), n.domElement.removeEventListener("pointerup", he)), n.dispatchEvent(go), s = r.NONE;
    }
    function Ae(P) {
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
        case qn.DOLLY:
          if (n.enableZoom === !1)
            return;
          K(P), s = r.DOLLY;
          break;
        case qn.ROTATE:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enablePan === !1)
              return;
            j(P), s = r.PAN;
          } else {
            if (n.enableRotate === !1)
              return;
            ne(P), s = r.ROTATE;
          }
          break;
        case qn.PAN:
          if (P.ctrlKey || P.metaKey || P.shiftKey) {
            if (n.enableRotate === !1)
              return;
            ne(P), s = r.ROTATE;
          } else {
            if (n.enablePan === !1)
              return;
            j(P), s = r.PAN;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(rs);
    }
    function we(P) {
      switch (s) {
        case r.ROTATE:
          if (n.enableRotate === !1)
            return;
          Q(P);
          break;
        case r.DOLLY:
          if (n.enableZoom === !1)
            return;
          ie(P);
          break;
        case r.PAN:
          if (n.enablePan === !1)
            return;
          pe(P);
          break;
      }
    }
    function Se(P) {
      n.enabled === !1 || n.enableZoom === !1 || s !== r.NONE || (P.preventDefault(), n.dispatchEvent(rs), ce(P), n.dispatchEvent(go));
    }
    function Le(P) {
      n.enabled === !1 || n.enablePan === !1 || G(P);
    }
    function Oe(P) {
      switch (ee(P), E.length) {
        case 1:
          switch (n.touches.ONE) {
            case Dn.ROTATE:
              if (n.enableRotate === !1)
                return;
              Y(), s = r.TOUCH_ROTATE;
              break;
            case Dn.PAN:
              if (n.enablePan === !1)
                return;
              ae(), s = r.TOUCH_PAN;
              break;
            default:
              s = r.NONE;
          }
          break;
        case 2:
          switch (n.touches.TWO) {
            case Dn.DOLLY_PAN:
              if (n.enableZoom === !1 && n.enablePan === !1)
                return;
              C(), s = r.TOUCH_DOLLY_PAN;
              break;
            case Dn.DOLLY_ROTATE:
              if (n.enableZoom === !1 && n.enableRotate === !1)
                return;
              ye(), s = r.TOUCH_DOLLY_ROTATE;
              break;
            default:
              s = r.NONE;
          }
          break;
        default:
          s = r.NONE;
      }
      s !== r.NONE && n.dispatchEvent(rs);
    }
    function T(P) {
      switch (ee(P), s) {
        case r.TOUCH_ROTATE:
          if (n.enableRotate === !1)
            return;
          Pe(P), n.update();
          break;
        case r.TOUCH_PAN:
          if (n.enablePan === !1)
            return;
          le(P), n.update();
          break;
        case r.TOUCH_DOLLY_PAN:
          if (n.enableZoom === !1 && n.enablePan === !1)
            return;
          $(P), n.update();
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
    function z(P) {
      E.push(P);
    }
    function D(P) {
      delete w[P.pointerId];
      for (let J = 0; J < E.length; J++)
        if (E[J].pointerId == P.pointerId) {
          E.splice(J, 1);
          return;
        }
    }
    function ee(P) {
      let J = w[P.pointerId];
      J === void 0 && (J = new oe(), w[P.pointerId] = J), J.set(P.pageX, P.pageY);
    }
    function ue(P) {
      const J = P.pointerId === E[0].pointerId ? E[1] : E[0];
      return w[J.pointerId];
    }
    n.domElement.addEventListener("contextmenu", M), n.domElement.addEventListener("pointerdown", te), n.domElement.addEventListener("pointercancel", he), n.domElement.addEventListener("wheel", Se, { passive: !1 }), this.update();
  }
}
const cl = {
  uniforms: {
    tDiffuse: { value: null },
    opacity: { value: 1 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`
  )
};
class Ri {
  constructor() {
    this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !1, this.renderToScreen = !1;
  }
  setSize() {
  }
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
  dispose() {
  }
}
const mp = new lr(-1, 1, 1, -1, 0, 1), qs = new gt();
qs.setAttribute("position", new tt([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
qs.setAttribute("uv", new tt([0, 2, 0, 0, 2, 0], 2));
class hl {
  constructor(e) {
    this._mesh = new St(qs, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, mp);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class pp extends Ri {
  constructor(e, t) {
    super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof Et ? (this.uniforms = e.uniforms, this.material = e) : e && (this.uniforms = or.clone(e.uniforms), this.material = new Et({
      defines: Object.assign({}, e.defines),
      uniforms: this.uniforms,
      vertexShader: e.vertexShader,
      fragmentShader: e.fragmentShader
    })), this.fsQuad = new hl(this.material);
  }
  render(e, t, n) {
    this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this.fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), this.fsQuad.render(e));
  }
  dispose() {
    this.material.dispose(), this.fsQuad.dispose();
  }
}
class _o extends Ri {
  constructor(e, t) {
    super(), this.scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !1;
  }
  render(e, t, n) {
    const r = e.getContext(), s = e.state;
    s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s.buffers.depth.setLocked(!0);
    let o, a;
    this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), s.buffers.stencil.setTest(!0), s.buffers.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), s.buffers.stencil.setFunc(r.ALWAYS, o, 4294967295), s.buffers.stencil.setClear(a), s.buffers.stencil.setLocked(!0), e.setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e.setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers.color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(r.EQUAL, 1, 4294967295), s.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), s.buffers.stencil.setLocked(!0);
  }
}
class gp extends Ri {
  constructor() {
    super(), this.needsSwap = !1;
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class _p {
  constructor(e, t) {
    if (this.renderer = e, this._pixelRatio = e.getPixelRatio(), t === void 0) {
      const n = e.getSize(new oe());
      this._width = n.width, this._height = n.height, t = new zt(this._width * this._pixelRatio, this._height * this._pixelRatio), t.texture.name = "EffectComposer.rt1";
    } else
      this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name = "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new pp(cl), this.clock = new sp();
  }
  swapBuffers() {
    const e = this.readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e;
  }
  addPass(e) {
    this.passes.push(e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled)
        return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let r = 0, s = this.passes.length; r < s; r++) {
      const o = this.passes[r];
      if (o.enabled !== !1) {
        if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(r), o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) {
          if (n) {
            const a = this.renderer.getContext(), c = this.renderer.state.buffers.stencil;
            c.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this.writeBuffer, this.readBuffer, e), c.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        _o !== void 0 && (o instanceof _o ? n = !0 : o instanceof gp && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new oe());
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t.height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this._height * this._pixelRatio);
    }
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this.renderTarget1, this.readBuffer = this.renderTarget2;
  }
  setSize(e, t) {
    this._width = e, this._height = t;
    const n = this._width * this._pixelRatio, r = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r);
    for (let s = 0; s < this.passes.length; s++)
      this.passes[s].setSize(n, r);
  }
  setPixelRatio(e) {
    this._pixelRatio = e, this.setSize(this._width, this._height);
  }
  dispose() {
    this.renderTarget1.dispose(), this.renderTarget2.dispose(), this.copyPass.dispose();
  }
}
class xp extends Ri {
  constructor(e, t, n, r, s) {
    super(), this.scene = e, this.camera = t, this.overrideMaterial = n, this.clearColor = r, this.clearAlpha = s !== void 0 ? s : 0, this.clear = !0, this.clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new Ie();
  }
  render(e, t, n) {
    const r = e.autoClear;
    e.autoClear = !1;
    let s, o;
    this.overrideMaterial !== void 0 && (o = this.scene.overrideMaterial, this.scene.overrideMaterial = this.overrideMaterial), this.clearColor && (e.getClearColor(this._oldClearColor), s = e.getClearAlpha(), e.setClearColor(this.clearColor, this.clearAlpha)), this.clearDepth && e.clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear && e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this.camera), this.clearColor && e.setClearColor(this._oldClearColor, s), this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = o), e.autoClear = r;
  }
}
const vp = {
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new Ie(0) },
    defaultOpacity: { value: 0 }
  },
  vertexShader: (
    /* glsl */
    `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`
  ),
  fragmentShader: (
    /* glsl */
    `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`
  )
};
class Cn extends Ri {
  constructor(e, t, n, r) {
    super(), this.strength = t !== void 0 ? t : 1, this.radius = n, this.threshold = r, this.resolution = e !== void 0 ? new oe(e.x, e.y) : new oe(256, 256), this.clearColor = new Ie(0, 0, 0), this.renderTargetsHorizontal = [], this.renderTargetsVertical = [], this.nMips = 5;
    let s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new zt(s, o), this.renderTargetBright.texture.name = "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1;
    for (let u = 0; u < this.nMips; u++) {
      const d = new zt(s, o);
      d.texture.name = "UnrealBloomPass.h" + u, d.texture.generateMipmaps = !1, this.renderTargetsHorizontal.push(d);
      const m = new zt(s, o);
      m.texture.name = "UnrealBloomPass.v" + u, m.texture.generateMipmaps = !1, this.renderTargetsVertical.push(m), s = Math.round(s / 2), o = Math.round(o / 2);
    }
    const a = vp;
    this.highPassUniforms = or.clone(a.uniforms), this.highPassUniforms.luminosityThreshold.value = r, this.highPassUniforms.smoothWidth.value = 0.01, this.materialHighPassFilter = new Et({
      uniforms: this.highPassUniforms,
      vertexShader: a.vertexShader,
      fragmentShader: a.fragmentShader,
      defines: {}
    }), this.separableBlurMaterials = [];
    const c = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2);
    for (let u = 0; u < this.nMips; u++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])), this.separableBlurMaterials[u].uniforms.texSize.value = new oe(s, o), s = Math.round(s / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial.uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial.uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial.uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial.uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial.uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial.uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value = 0.1, this.compositeMaterial.needsUpdate = !0;
    const l = [1, 0.8, 0.6, 0.4, 0.2];
    this.compositeMaterial.uniforms.bloomFactors.value = l, this.bloomTintColors = [new R(1, 1, 1), new R(1, 1, 1), new R(1, 1, 1), new R(1, 1, 1), new R(1, 1, 1)], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors;
    const h = cl;
    this.copyUniforms = or.clone(h.uniforms), this.copyUniforms.opacity.value = 1, this.materialCopy = new Et({
      uniforms: this.copyUniforms,
      vertexShader: h.vertexShader,
      fragmentShader: h.fragmentShader,
      blending: ss,
      depthTest: !1,
      depthWrite: !1,
      transparent: !0
    }), this.enabled = !0, this.needsSwap = !1, this._oldClearColor = new Ie(), this.oldClearAlpha = 1, this.basic = new dr(), this.fsQuad = new hl(null);
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
    for (let e = 0; e < this.separableBlurMaterials.length; e++)
      this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.materialCopy.dispose(), this.basic.dispose(), this.fsQuad.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2), r = Math.round(t / 2);
    this.renderTargetBright.setSize(n, r);
    for (let s = 0; s < this.nMips; s++)
      this.renderTargetsHorizontal[s].setSize(n, r), this.renderTargetsVertical[s].setSize(n, r), this.separableBlurMaterials[s].uniforms.texSize.value = new oe(n, r), n = Math.round(n / 2), r = Math.round(r / 2);
  }
  render(e, t, n, r, s) {
    e.getClearColor(this._oldClearColor), this.oldClearAlpha = e.getClearAlpha();
    const o = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture, e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse.value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this.fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright), e.clear(), this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let c = 0; c < this.nMips; c++)
      this.fsQuad.material = this.separableBlurMaterials[c], this.separableBlurMaterials[c].uniforms.colorTexture.value = a.texture, this.separableBlurMaterials[c].uniforms.direction.value = Cn.BlurDirectionX, e.setRenderTarget(this.renderTargetsHorizontal[c]), e.clear(), this.fsQuad.render(e), this.separableBlurMaterials[c].uniforms.colorTexture.value = this.renderTargetsHorizontal[c].texture, this.separableBlurMaterials[c].uniforms.direction.value = Cn.BlurDirectionY, e.setRenderTarget(this.renderTargetsVertical[c]), e.clear(), this.fsQuad.render(e), a = this.renderTargetsVertical[c];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength.value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius, this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e.setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this.fsQuad.material = this.materialCopy, this.copyUniforms.tDiffuse.value = this.renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this.renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n), this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e.autoClear = o;
  }
  getSeperableBlurMaterial(e) {
    return new Et({
      defines: {
        KERNEL_RADIUS: e,
        SIGMA: e
      },
      uniforms: {
        colorTexture: { value: null },
        texSize: { value: new oe(0.5, 0.5) },
        direction: { value: new oe(0.5, 0.5) }
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`
    });
  }
  getCompositeMaterial(e) {
    return new Et({
      defines: {
        NUM_MIPS: e
      },
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
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
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
				}`
    });
  }
}
Cn.BlurDirectionX = new oe(1, 0);
Cn.BlurDirectionY = new oe(0, 1);
const ul = 6e5;
let At, wt, Nt, Ft, _s, ii = 0, ri = 0, xs = 1, vs = 1, fl = [];
function nr() {
  return At;
}
function ir() {
  return wt;
}
function Mp() {
  return fl.join(`
`);
}
function Sp() {
  wt && wt.dispose(), Nt && Nt.material && Nt.material.dispose(), wt = new gt(), wt.name = "travel_geom", ii = 0, wt.setAttribute(
    "position",
    new tt(ul, 3)
  ), wt.attributes.position.usage = Io, wt.setDrawRange(0, 0);
}
function Ep() {
  At && At.dispose(), Ft && Ft.material && Ft.material.dispose(), At = new gt(), At.name = "extrude_geom", ri = 0, At.setAttribute(
    "position",
    new tt(ul, 3)
  ), At.attributes.position.usage = Io, At.setDrawRange(0, 0);
}
function yp(i, e) {
  if (i <= 0 || e <= 0) {
    console.warn(`Invalid dimensions for geometry resize: ${i}x${e}`);
    return;
  }
  const t = i / xs, n = e / vs;
  if (wt && ii > 0) {
    const r = wt.attributes.position;
    for (let s = 0; s < ii; s++) {
      const o = r.getX(s) * t, a = r.getY(s) * n, c = r.getZ(s);
      r.setXYZ(s, o, a, c);
    }
    r.needsUpdate = !0, wt.computeBoundingSphere();
  }
  if (At && ri > 0) {
    const r = At.attributes.position;
    for (let s = 0; s < ri; s++) {
      const o = r.getX(s) * t, a = r.getY(s) * n, c = r.getZ(s);
      r.setXYZ(s, o, a, c);
    }
    r.needsUpdate = !0, At.computeBoundingSphere();
  }
  xs = i, vs = e;
}
function Tp(i, e) {
  xs = i, vs = e;
}
function bp(i) {
  Nt && Nt.material && (Nt.material.emissiveIntensity = i, i > 0 ? Nt.material.emissive.copy(Nt.material.color) : Nt.material.emissive.setHex(0));
}
function Ap(i) {
  Ft && Ft.material && (Ft.material.emissiveIntensity = i, i > 0 ? Ft.material.emissive.copy(Ft.material.color) : Ft.material.emissive.setHex(0));
}
function xo({ color: i, opacity: e, emissiveIntensity: t } = { color: 15352968, opacity: 0.8, emissiveIntensity: 0 }) {
  Sp();
  const n = new pr({
    vertexColors: !1,
    color: i,
    opacity: e,
    transparent: !0,
    name: "travel",
    linewidth: 5,
    // in world units with size attenuation, pixels otherwise
    //resolution:  // to be set by renderer, eventually
    alphaToCoverage: !0,
    emissive: t > 0 ? i : 0,
    emissiveIntensity: t
  });
  return Nt = new As(wt, n), Nt;
}
function vo({ color: i, opacity: e, emissiveIntensity: t } = { color: 4491498, opacity: 0.7, emissiveIntensity: 0 }) {
  Ep();
  const n = new pr({
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
    alphaToCoverage: !0,
    emissive: t > 0 ? i : 0,
    emissiveIntensity: t
    // depthWrite: false,
    //  depthTest: false,
    // side: DoubleSide
  });
  return Ft = new As(At, n), Ft;
}
function wp({ radius: i, color: e } = { radius: 2, color: 16777045 }) {
  const t = new Ls(i, 16, 12), n = new dr({ color: e });
  return _s = new St(t, n), _s;
}
async function Mo(i) {
  if (Number.isNaN(i))
    throw new Error(
      `Bad non-numeric argument to delay for visualiser: ${JSON.stringify(i)}`
    );
  return i > 0 && await new Promise((e) => setTimeout(e, Math.round(i))), 0;
}
function Pp({ x: i, y: e, z: t, delay: n, debug: r, extrudeGeometry: s, travelGeometry: o } = { delay: !1, debug: !1 }) {
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
      newPosition: h,
      oldPosition: u,
      speed: d,
      moveTime: m,
      time: g,
      totalMoveTime: x,
      layerHeight: p,
      length: f
    }) {
      switch (c && console.log(
        `PRINT EVENT: ${l},
          old: ${JSON.stringify(u)},
          new: ${JSON.stringify(h)},
          speed: ${d},
          moveTime: ${m},
          totalMoveTime: ${x},
          layerHeight: ${p},
          length: ${f}`
      ), l) {
        case "extrude":
          {
            if (!nr())
              return;
            const y = nr().attributes.position;
            y.setXYZ(
              ri++,
              i(u.x),
              e(u.y),
              t(u.z)
            ), y.setXYZ(
              ri++,
              i(h.x),
              e(h.y),
              t(h.z)
            ), nr().setDrawRange(0, ri - 1), y.needsUpdate = !0, nr().computeBoundingSphere(), _s.position.set(
              i(h.x),
              e(h.y),
              t(h.z)
            );
          }
          break;
        case "travel":
          {
            if (!ir())
              return;
            const y = ir().attributes.position;
            y.setXYZ(
              ii++,
              i(u.x),
              e(u.y),
              t(u.z)
            ), y.setXYZ(
              ii++,
              i(h.x),
              e(h.y),
              t(h.z)
            ), ir().setDrawRange(0, ii - 1), y.needsUpdate = !0, ir().computeBoundingSphere();
          }
          break;
        case "retract":
          c && console.log("RETRACT!");
          break;
        case "unretract":
          c && console.log("UNRETRACT!");
          break;
      }
      a && (Number.isFinite(a) ? await Mo(a) : await Mo(m || g));
    },
    errorEvent: (l) => console.error(`LivePrinter Error Event: ${l}`),
    gcodeEvent: async (l) => {
      fl.push(l);
    }
    // wait 20 ms
  };
}
var Rp = Object.defineProperty, Cp = (i, e, t) => e in i ? Rp(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t, So = (i, e, t) => Cp(i, typeof e != "symbol" ? e + "" : e, t);
class Eo {
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
So(Eo, "LOG_LEVEL", {
  error: 0,
  warning: 1,
  info: 2,
  debug: 3
}), So(Eo, "level", 0);
String.prototype.reverse = function() {
  const i = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g, e = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;
  let t = this.replace(i, function(s, o, a) {
    return a.reverse() + o;
  }).replace(e, "$2$1"), n = "", r = t.length;
  for (; r--; )
    n += t.charAt(r);
  return n;
};
var yo = "C C# Db D D# Eb E F F# Gb G G# Ab A A# Bb B".split(" "), dl = function(i) {
  return typeof i != "string" ? yo.slice() : yo.filter(function(e) {
    var t = e[1] || " ";
    return i.indexOf(t) !== -1;
  });
};
dl(" #");
dl(" b");
var Lp = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function qp(i) {
  typeof i != "string" && (i = "");
  var e = Lp.exec(i);
  return [e[1].toUpperCase(), e[2].replace(/x/g, "##"), e[3], e[4]];
}
var Dp = Object.freeze({
  pc: null,
  name: null,
  step: null,
  alt: null,
  oct: null,
  octStr: null,
  chroma: null,
  midi: null,
  freq: null
}), To = [0, 2, 4, 5, 7, 9, 11], Up = function(i) {
  var e = qp(i);
  if (e[0] === "" || e[3] !== "")
    return Dp;
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
  return s.chroma = (To[s.step] + s.alt + 120) % 12, s.midi = s.oct !== null ? To[s.step] + s.alt + 12 * (s.oct + 1) : null, s.freq = Fp(s.midi), Object.freeze(s);
}, Ip = function(i, e) {
  return e === void 0 && (e = {}), function(t) {
    return e[t] || (e[t] = i(t));
  };
}, Np = Ip(Up), Fp = function(i, e) {
  return e === void 0 && (e = 440), typeof i == "number" ? Math.pow(2, (i - 69) / 12) * e : null;
}, Op = function(i) {
  return Np(i).chroma;
}, Bp = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})", zp = "(AA|A|P|M|m|d|dd)([-+]?\\d+)", Gp = new RegExp("^" + Bp + "|" + zp + "$"), bo = [0, 2, 4, 5, 7, 9, 11], Hp = "PMMPPMM", Vp = function(i) {
  var e = Gp.exec("" + i);
  return e === null ? null : e[1] ? [e[1], e[2]] : [e[4], e[3]];
}, Ms = Object.freeze({
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
}), kp = function(i, e) {
  return e === "M" && i === "M" || e === "P" && i === "P" ? 0 : e === "m" && i === "M" ? -1 : /^A+$/.test(e) ? e.length : /^d+$/.test(e) ? i === "P" ? -e.length : -e.length - 1 : null;
}, Wp = function(i) {
  return (Math.abs(i) - 1) % 7;
}, Xp = function(i) {
  var e = Vp(i);
  if (e === null)
    return Ms;
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
  return t.num = +e[0], t.q = e[1], t.step = Wp(t.num), t.type = Hp[t.step], t.type === "M" && t.q === "P" ? Ms : (t.name = "" + t.num + t.q, t.dir = t.num < 0 ? -1 : 1, t.simple = t.num === 8 || t.num === -8 ? t.num : t.dir * (t.step + 1), t.alt = kp(t.type, t.q), t.oct = Math.floor((Math.abs(t.num) - 1) / 7), t.semitones = t.dir * (bo[t.step] + t.alt + 12 * t.oct), t.chroma = (t.dir * (bo[t.step] + t.alt) % 12 + 12) % 12, Object.freeze(t));
}, Ao = {};
function Yp(i) {
  return typeof i != "string" ? Ms : Ao[i] || (Ao[i] = Xp(i));
}
var jp = function(i) {
  return Yp(i).chroma;
};
const Zp = ["1P 2m 2M 3m 3M 4P 4A 5P 6m 6M 7m 7M"], Kp = ["1P 2M 3M 4A 5P 6M 7M"], Jp = ["1P 2M 3M 4P 5P 6M 7M", ["ionian"]], $p = ["1P 2M 3M 4P 5P 6M 7m", ["dominant"]], Qp = ["1P 2M 3m 4P 5P 6M 7m"], e0 = ["1P 2M 3m 4P 5P 6m 7m", ["minor"]], t0 = ["1P 2m 3m 4P 5P 6m 7m"], n0 = ["1P 2m 3m 4P 5d 6m 7m"], i0 = ["1P 2m 3m 3M 5d 6m 7m", ["super locrian", "diminished whole tone", "pomeroy"]], r0 = ["1P 2M 3m 4P 5d 6m 6M 7M", ["whole-half diminished"]], s0 = ["1P 2m 4P 5d 7m"], a0 = ["1P 2M 3m 5P 6m"], o0 = ["1P 2m 4P 5P 6m"], l0 = ["1P 2m 3m 5P 6m"], c0 = ["1P 2M 3M 4A 6M 7m"], h0 = ["1P 2M 4P 5P 6M"], u0 = ["1P 2m 3M 5P 6M"], f0 = ["1P 2M 4P 5P 6M 7m"], d0 = ["1P 2A 3M 5P 5A 7M"], m0 = ["1P 2m 3m 4P 5P 6m 7M"], p0 = ["1P 2M 4P 5P 7m"], g0 = ["1P 2m 3M 4P 5d 6M 7m"], _0 = ["1P 2m 3m 3M 4A 5P 7m"], x0 = ["1P 2m 3m 4P 5P 6m 7M"], v0 = ["1P 2m 3M 4P 5d 6m 7M"], M0 = ["1P 2M 3M 4P 5P 6M 7m 7M"], S0 = ["1P 2m 3M 5d 6m 7m 7M"], E0 = ["1P 2M 3M 4P 5d 5P 6M 7M"], y0 = {
  chromatic: Zp,
  lydian: Kp,
  major: Jp,
  mixolydian: $p,
  dorian: Qp,
  aeolian: e0,
  phrygian: t0,
  locrian: n0,
  "melodic minor": ["1P 2M 3m 4P 5P 6M 7M"],
  "melodic minor second mode": ["1P 2m 3m 4P 5P 6M 7m"],
  "lydian augmented": ["1P 2M 3M 4A 5A 6M 7M"],
  "lydian dominant": ["1P 2M 3M 4A 5P 6M 7m", ["lydian b7"]],
  "melodic minor fifth mode": ["1P 2M 3M 4P 5P 6m 7m", ["hindu", "mixolydian b6M"]],
  "locrian #2": ["1P 2M 3m 4P 5d 6m 7m", ["half-diminished"]],
  altered: i0,
  "harmonic minor": ["1P 2M 3m 4P 5P 6m 7M"],
  "phrygian dominant": ["1P 2m 3M 4P 5P 6m 7m", ["spanish", "phrygian major"]],
  "half-whole diminished": ["1P 2m 3m 3M 4A 5P 6M 7m", ["dominant diminished"]],
  diminished: r0,
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
  iwato: s0,
  hirajoshi: a0,
  kumoijoshi: o0,
  pelog: l0,
  "vietnamese 1": ["1P 3m 4P 5P 6m"],
  "vietnamese 2": ["1P 3m 4P 5P 7m"],
  prometheus: c0,
  "prometheus neopolitan": ["1P 2m 3M 4A 6M 7m"],
  ritusen: h0,
  scriabin: u0,
  piongio: f0,
  "major blues": ["1P 2M 3m 3M 5P 6M"],
  "minor blues": ["1P 3m 4P 5d 5P 7m", ["blues"]],
  "composite blues": ["1P 2M 3m 3M 4P 5d 5P 6M 7m"],
  augmented: d0,
  "augmented heptatonic": ["1P 2A 3M 4P 5P 5A 7M"],
  "dorian #4": ["1P 2M 3m 4A 5P 6M 7m"],
  "lydian diminished": ["1P 2M 3m 4A 5P 6M 7M"],
  "whole tone": ["1P 2M 3M 4A 5A 7m"],
  "leading whole tone": ["1P 2M 3M 4A 5A 7m 7M"],
  "lydian minor": ["1P 2M 3M 4A 5P 6m 7m"],
  "locrian major": ["1P 2M 3M 4P 5d 6m 7m", ["arabian"]],
  neopolitan: m0,
  "neopolitan minor": ["1P 2m 3m 4P 5P 6m 7M"],
  "neopolitan major": ["1P 2m 3m 4P 5P 6M 7M", ["dorian b2"]],
  "neopolitan major pentatonic": ["1P 3M 4P 5d 7m"],
  "romanian minor": ["1P 2M 3m 5d 5P 6M 7m"],
  "double harmonic lydian": ["1P 2m 3M 4A 5P 6m 7M"],
  "harmonic major": ["1P 2M 3M 4P 5P 6m 7M"],
  "double harmonic major": ["1P 2m 3M 4P 5P 6m 7M", ["gypsy"]],
  egyptian: p0,
  "hungarian minor": ["1P 2M 3m 4A 5P 6m 7M"],
  "hungarian major": ["1P 2A 3M 4A 5P 6M 7m"],
  oriental: g0,
  "spanish heptatonic": ["1P 2m 3m 3M 4P 5P 6m 7m"],
  flamenco: _0,
  balinese: x0,
  "todi raga": ["1P 2m 3m 4A 5P 6m 7M"],
  "malkos raga": ["1P 3m 4P 6m 7m"],
  "kafi raga": ["1P 3m 3M 4P 5P 6M 7m 7M"],
  "purvi raga": ["1P 2m 3M 4P 4A 5P 6m 7M"],
  persian: v0,
  bebop: M0,
  "bebop dominant": ["1P 2M 3M 4P 5P 6M 7m 7M"],
  "bebop minor": ["1P 2M 3m 3M 4P 5P 6M 7m"],
  "bebop major": ["1P 2M 3M 4P 5P 5A 6M 7M"],
  "bebop locrian": ["1P 2m 3m 4P 5d 5P 6m 7m"],
  "minor bebop": ["1P 2M 3m 4P 5P 6m 7m 7M"],
  "mystery #1": ["1P 2m 3M 5d 6m 7m"],
  enigmatic: S0,
  "minor six diminished": ["1P 2M 3m 4P 5P 6m 6M 7M"],
  "ionian augmented": ["1P 2M 3M 4P 5A 6M 7M"],
  "lydian #9": ["1P 2m 3M 4A 5P 6M 7M"],
  ichikosucho: E0,
  "six tone symmetric": ["1P 2m 3M 4P 5A 6M"]
}, T0 = ["1P 3M 5P", ["Major", ""]], b0 = ["1P 3M 5P 7M 9M 13M", ["maj13", "Maj13"]], A0 = ["1P 3M 5P 13M", ["6"]], w0 = ["1P 3M 5P 6M 9M", ["69"]], P0 = ["1P 3M 5P 6M 7M 9M"], R0 = ["1P 3M 5d 7M"], C0 = ["1P 3M 6m 7M"], L0 = ["1P 3M 5P 7M 9m"], q0 = ["1P 4P 5P 7M"], D0 = ["1P 3M 5P 7M 9M", ["maj9", "Maj9"]], U0 = ["1P 3M 5d 7M 9M"], I0 = ["1P 4P 5P 7M 9M"], N0 = ["1P 3M 5P 9M", ["2", "add9", "add2"]], F0 = ["1P 3M 5P 7M", ["maj7", "M7"]], O0 = ["1P 3M 5d"], B0 = ["1P 3M 13m"], z0 = ["1P 2M 5P", ["add9no3", "sus2"]], G0 = ["1P 4P 5P", ["sus", "sus4"]], H0 = ["1P 3M 5P 9m"], V0 = ["1P 3m 5P"], k0 = ["1P 3m 5P 7m 9M 11P", ["_11"]], W0 = ["1P 3m 7m 12d 2M 4P", ["h11", "_11b5"]], X0 = ["1P 3m 5P 7m 9M 11P 13M", ["_13"]], Y0 = ["1P 3m 4P 5P 13M", ["_6"]], j0 = ["1P 3m 5P 6M 9M", ["_69"]], Z0 = ["1P 3m 5P 7m", ["minor7", "_", "_7"]], K0 = ["1P 3m 5P 7m 11P", ["m7add4"]], J0 = ["1P 3m 5d 7m", ["half-diminished", "h7", "_7b5"]], $0 = ["1P 3m 5P 7m 9M", ["_9"]], Q0 = ["1P 3m 7m 12d 2M", ["h9", "-9b5"]], e1 = ["1P 3m 5P 7M", ["mM7", "_M7"]], t1 = ["1P 3m 5P 6m 7M", ["mM7b6"]], n1 = ["1P 3m 5P 7M 9M", ["mMaj9", "-M9"]], i1 = ["1P 3m 5P 6m 7M 9M", ["mMaj9b6"]], r1 = ["1P 3m 6m 7M"], s1 = ["1P 3m 6m 9m"], a1 = ["1P 3m 5d", ["mb5", "dim"]], o1 = ["1P 3m 5d 13M", ["diminished", "m6b5", "dim7"]], l1 = ["1P 3m 5d 6M 7M"], c1 = ["1P 3m 5d 7M"], h1 = ["1P 2M 4P 5P", ["sus4add9"]], u1 = ["1P 3m 4P 5P"], f1 = ["1P 3m 5P 9M"], d1 = {
  4: ["1P 4P 7m 10m", ["quartal"]],
  5: ["1P 5P"],
  7: ["1P 3M 5P 7m", ["Dominant", "Dom"]],
  9: ["1P 3M 5P 7m 9M", ["79"]],
  11: ["1P 5P 7m 9M 11P"],
  13: ["1P 3M 5P 7m 9M 13M", ["13_"]],
  64: ["5P 8P 10M"],
  M: T0,
  "M#5": ["1P 3M 5A", ["augmented", "maj#5", "Maj#5", "+", "aug"]],
  "M#5add9": ["1P 3M 5A 9M", ["+add9"]],
  M13: b0,
  "M13#11": ["1P 3M 5P 7M 9M 11A 13M", ["maj13#11", "Maj13#11", "M13+4", "M13#4"]],
  M6: A0,
  "M6#11": ["1P 3M 5P 6M 11A", ["M6b5", "6#11", "6b5"]],
  M69: w0,
  "M69#11": ["1P 3M 5P 6M 9M 11A"],
  "M7#11": ["1P 3M 5P 7M 11A", ["maj7#11", "Maj7#11", "M7+4", "M7#4"]],
  "M7#5": ["1P 3M 5A 7M", ["maj7#5", "Maj7#5", "maj9#5", "M7+"]],
  "M7#5sus4": ["1P 4P 5A 7M"],
  "M7#9#11": ["1P 3M 5P 7M 9A 11A"],
  M7add13: P0,
  M7b5: R0,
  M7b6: C0,
  M7b9: L0,
  M7sus4: q0,
  M9: D0,
  "M9#11": ["1P 3M 5P 7M 9M 11A", ["maj9#11", "Maj9#11", "M9+4", "M9#4"]],
  "M9#5": ["1P 3M 5A 7M 9M", ["Maj9#5"]],
  "M9#5sus4": ["1P 4P 5A 7M 9M"],
  M9b5: U0,
  M9sus4: I0,
  Madd9: N0,
  Maj7: F0,
  Mb5: O0,
  Mb6: B0,
  Msus2: z0,
  Msus4: G0,
  Maddb9: H0,
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
  m: V0,
  "m#5": ["1P 3m 5A", ["m+", "mb6"]],
  m11: k0,
  "m11A 5": ["1P 3m 6m 7m 9M 11P"],
  m11b5: W0,
  m13: X0,
  m6: Y0,
  m69: j0,
  m7: Z0,
  "m7#5": ["1P 3m 6m 7m"],
  m7add11: K0,
  m7b5: J0,
  m9: $0,
  "m9#5": ["1P 3m 6m 7m 9M"],
  m9b5: Q0,
  mMaj7: e1,
  mMaj7b6: t1,
  mM9: n1,
  mM9b6: i1,
  mb6M7: r1,
  mb6b9: s1,
  o: a1,
  o7: o1,
  o7M7: l1,
  oM7: c1,
  sus24: h1,
  "+add#9": ["1P 3M 5A 9A"],
  madd4: u1,
  madd9: f1
};
var m1 = function(i) {
  return Op(i) || jp(i) || 0;
};
function p1(i) {
  if (_1(i))
    return i;
  if (!Array.isArray(i))
    return "";
  var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  return i.map(m1).forEach(function(t) {
    e[t] = 1;
  }), e.join("");
}
var g1 = /^[01]{12}$/;
function _1(i) {
  return g1.test(i);
}
var ml = function(i) {
  var e = Object.keys(i).sort(), t = [], n = [], r = function(a, c, l) {
    t[a] = c, n[l] = n[l] || [], n[l].push(a);
  };
  e.forEach(function(a) {
    var c = i[a][0].split(" "), l = i[a][1], h = p1(c);
    r(a, c, h), l && l.forEach(function(u) {
      return r(u, c, h);
    });
  });
  var s = Object.keys(t).sort(), o = function(a) {
    return t[a];
  };
  return o.names = function(a) {
    return typeof a == "string" ? (n[a] || []).slice() : (a === !0 ? s : e).slice();
  }, o;
}, x1 = ml(y0), v1 = ml(d1);
x1.names;
v1.names;
const M1 = {
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
}, xi = Math.PI;
function S1(i, e, t = {
  title: "LivePrinter",
  debug: !1,
  delay: !0,
  travelColor: 15352968,
  travelOpacity: 0.8,
  travelLineGlow: 0.5,
  extrudeColor: 4491498,
  extrudeOpacity: 0.7,
  extrudeLineGlow: 0.5,
  printHeadColor: 16777045,
  printHeadRadius: 20,
  fogEnabled: !1,
  fogColor: 986895,
  fogNear: 100,
  fogFar: 5e3,
  glowEnabled: !1,
  glowStrength: 1,
  glowRadius: 0.5,
  glowThreshold: 0.2
}) {
  const n = {};
  function r(D = "lines.gcode") {
    const ee = M1[i.model].join(`
`) + `
` + Mp(), ue = URL.createObjectURL(new Blob([ee], { type: "text" })), P = document.createElement("a");
    P.href = ue, P.download = D, P.click();
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
  function c(D) {
    return o() * (D / i.maxx - 1);
  }
  n.bedXtoScene = c;
  function l(D) {
    return a() * (D / i.maxy - 1);
  }
  n.bedYtoScene = l;
  function h(D) {
    return o() * D / i.maxx;
  }
  n.bedZtoScene = h;
  const u = new Qo({
    antialias: !0,
    preserveDrawingBuffer: !0,
    alpha: !0
  });
  u.setPixelRatio(window.devicePixelRatio), u.setSize(o(), a()), s.appendChild(u.domElement);
  let d, m, g;
  function x() {
    d = new _p(u), m = new xp(_, ce), d.addPass(m), t.glowEnabled && (g = new Cn(
      { x: o(), y: a() },
      t.glowStrength,
      t.glowRadius,
      t.glowThreshold
    ), d.addPass(g));
  }
  let p = xo({
    color: t.travelColor,
    opacity: t.travelOpacity,
    emissiveIntensity: t.travelLineGlow
  }), f = vo({
    color: t.extrudeColor,
    opacity: t.extrudeOpacity,
    emissiveIntensity: t.extrudeLineGlow
  });
  Tp(o(), a());
  const y = wp({
    radius: t.printHeadRadius,
    color: t.printHeadColor
  }), _ = new xm(), b = new ot();
  b.translateX(-o()), b.translateY(-a() / 2), b.rotateX(xi / 2), b.translateY(2 * a() / 3);
  const E = new cn(), w = new cn(), q = new cn();
  _.add(b), w.add(p), w.add(f), w.add(y);
  const N = { x: o() / 40, y: o() / 60 }, v = new St(
    new Pn(N.x, N.y, N.y),
    new ts({ color: 11075703 })
  ), A = new St(
    new Pn(N.x, N.y, N.y),
    new ts({ color: 15295010 })
  );
  _.add(E), w.translateX(o() / 2), w.translateY(a() / 2), q.translateX(o() / 2), q.translateY(a() / 2), v.position.x = c(i.maxx) - N.x / 2, v.position.y = l(i.maxy) - N.y / 2, v.position.z = N.y / 2, A.position.x = c(0) - N.x / 2, A.position.y = l(0) - N.y / 2, A.position.z = N.y / 2, console.log(
    `Test cube position: ${JSON.stringify(A.position, null, 2)}`
  ), w.add(A), w.add(v), E.add(w), E.add(q), _.background = new Ie(986895), t.fogEnabled && (_.fog = new cr(t.fogColor, t.fogNear, t.fogFar));
  const V = new ap(
    o(),
    Math.round(i.maxx / 5),
    4473924,
    2236962
  );
  V.scale.set(1, i.maxy / i.maxx, 1), V.name = "ref-grid", E.add(V), V.rotateX(xi / 2);
  const re = new cn();
  let U = 4 / 5, O = 0, H = 1 / 8, ne = 1, K = 1;
  function j() {
    return o() * O;
  }
  function Q() {
    return a() * H;
  }
  function ie() {
    return ne * o();
  }
  function pe() {
    return K * a();
  }
  const ce = new lr(
    -U * o() / 2,
    // left
    U * o() / 2,
    // right
    U * a() / 2,
    // top
    -U * a() / 2,
    // bottom
    0,
    //near
    o() * 100
    // far
  );
  function G() {
    ce.left = -U * (ie() / 2 + j()), ce.right = U * (ie() / 2 - j()), ce.top = U * (pe() / 2 - Q()), ce.bottom = -U * (pe() / 2 + Q()), ce.updateProjectionMatrix();
  }
  G(), x(), n.setZoom = (D) => {
    U = 1 - Math.max(0, Math.min(D, 1)), G();
  }, n.setViewX = (D) => {
    O = D, G();
  }, n.getViewX = () => O, n.setViewXmm = (D) => {
    O = 2 * (D / i.maxx) - 1, G();
  }, n.viewXmm = () => i.maxx * (O + 1) / 2, n.setViewY = (D) => {
    H = D, G();
  }, n.getViewY = () => H, n.setViewYmm = (D) => {
    H = 2 * (D / i.maxy) - 1, G();
  }, n.viewYmm = () => i.maxy * (H + 1) / 2, n.setViewWidth = (D) => {
    ne = D, G();
  }, n.getViewwidth = () => ne, n.setViewHeight = (D) => {
    K = D, G();
  }, n.getViewHeight = () => K;
  let Y = 30;
  const ae = new lr(
    -o() / Y,
    // left
    o() / Y,
    // right
    a() / Y,
    // top
    -a() / Y,
    // bottom
    0.01,
    //near
    2e3
    // far
  );
  function fe(D) {
    Y = D, ae.left = -o() / Y, ae.right = o() / Y, ae.top = a() / Y, ae.bottom = -a() / Y, ae.updateProjectionMatrix();
  }
  n.closeFactor = fe, n.setFogEnabled = (D) => {
    D && !_.fog ? _.fog = new cr(t.fogColor, t.fogNear, t.fogFar) : D || (_.fog = null);
  }, n.setFogColor = (D) => {
    t.fogColor = D, _.fog && _.fog.color.setHex(D);
  }, n.setFogNear = (D) => {
    t.fogNear = D, _.fog && (_.fog.near = D);
  }, n.setFogFar = (D) => {
    t.fogFar = D, _.fog && (_.fog.far = D);
  }, n.getFogState = () => ({
    enabled: _.fog !== null,
    color: t.fogColor,
    near: t.fogNear,
    far: t.fogFar
  }), n.setGlowEnabled = (D) => {
    t.glowEnabled = D, D && !g ? (g = new Cn(
      { x: o(), y: a() },
      t.glowStrength,
      t.glowRadius,
      t.glowThreshold
    ), d.addPass(g)) : !D && g && d && (d.removePass(g), g = null);
  }, n.setGlowStrength = (D) => {
    t.glowStrength = D, g && (g.strength = D);
  }, n.setGlowRadius = (D) => {
    t.glowRadius = D, g && (g.radius = D);
  }, n.setGlowThreshold = (D) => {
    t.glowThreshold = D, g && (g.threshold = D);
  }, n.getGlowState = () => ({
    enabled: t.glowEnabled,
    strength: t.glowStrength,
    radius: t.glowRadius,
    threshold: t.glowThreshold
  }), n.setTravelLineGlow = (D) => {
    t.travelLineGlow = D, bp(D);
  }, n.setExtrudeLineGlow = (D) => {
    t.extrudeLineGlow = D, Ap(D);
  }, n.getLineGlowState = () => ({
    travel: t.travelLineGlow,
    extrude: t.extrudeLineGlow
  }), re.add(ce, ae), E.add(re);
  const C = new dp(ce, u.domElement);
  ce.up.set(0, 0, 1), ce.position.set(
    c(-3 * i.maxx),
    l(-3 * i.maxy),
    h(2 * i.maxz)
  ), ce.lookAt(
    c(i.maxx / 2) + o() / 2,
    l(i.maxy / 2) + a() / 2,
    h(0)
  ), ae.up.set(0, 0, 1), ae.position.set(
    c(2 * i.maxx),
    l(2 * i.maxy),
    h(i.maxz / 2)
  ), ae.lookAt(
    c(i.minx / 2) + o() / 2,
    l(i.miny / 2) + a() / 2,
    h(0)
  ), C.dampingFactor = 0.1, C.maxPolarAngle = xi, C.minPolarAngle = xi / 2, C.minAzimuthAngle = -xi / 2, C.maxAzimuthAngle = 1e-3, C.enableDamping = !0, (() => {
    const ue = new ho(16777215, 1, 3 * o(), 0.8);
    ue.position.set(
      c(i.maxx / 2),
      l(-i.maxy),
      h(i.maxx / 2)
    ), q.add(ue);
    const P = new ho(16777215, 1, o(), 0.2);
    P.position.set(
      c(i.maxx / 2),
      l(i.maxy / 2),
      h(i.maxx / 4)
    ), q.add(P), q.add(new rp(16777215, 0.2));
  })();
  const ye = Pp({
    x: c,
    y: l,
    z: h,
    delay: t.delay,
    debug: t.debug
  });
  n.vizevents = ye, n.resetScene = function() {
    p && w.remove(p), f && w.remove(f), p = xo({
      color: t.travelColor,
      opacity: t.travelOpacity,
      emissiveIntensity: t.travelLineGlow
    }), w.add(p), f = vo({
      color: t.extrudeColor,
      opacity: t.extrudeOpacity,
      emissiveIntensity: t.extrudeLineGlow
    }), w.add(f);
  }, i.addPrintListener(ye), i.addErrorListener(ye), i.addGCodeListener(ye);
  const Pe = {
    printEvent: async ({
      type: D,
      newPosition: ee,
      oldPosition: ue,
      speed: P,
      moveTime: J,
      totalMoveTime: B,
      layerHeight: de,
      length: ve
    }) => {
      switch (D) {
        case "extrude":
        case "travel":
          ae.position.set(
            c(i.maxx) - o() / 2,
            l(i.maxy) - a() / 2,
            h(ee.z + i.maxz / 8)
          ), ae.lookAt(
            c(ee.x) + o() / 2,
            l(ee.y) + a() / 2,
            h(ee.z)
          );
          break;
      }
    }
  };
  i.addPrintListener(Pe);
  const Me = new lp().parse(fp);
  let $ = new mo(t.title ? t.title : "LivePrinter", {
    font: Me,
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
  $.computeBoundingBox();
  const k = 0.74, te = 0.8, ge = 0.3, he = new ts({
    side: kt,
    opacity: 0.8,
    transparent: !0
  });
  he.color.setHSL(k, te, ge);
  const Ae = new St($, he);
  Ae.scale.setComponent(2, 2.5);
  const we = new ot();
  we.add(Ae), b.add(we);
  function Se() {
    u.setSize(o(), a()), d && d.setSize(o(), a()), yp(o(), a()), ce.aspect = o() / a(), G(), ae.aspect = ce.aspect, fe(Y);
    const D = o() / 20, ee = o() / 24;
    $.dispose(), $ = new mo(t.title ? t.title : "LivePrinter", {
      font: Me,
      size: D,
      height: ee,
      curveSegments: 12,
      bevelEnabled: !0,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelSegments: 2,
      transparent: !0,
      opacity: 0.2
    }), $.computeBoundingBox(), Ae.geometry = $, V.scale.set(1, i.maxy / i.maxx, 1);
  }
  window.addEventListener("resize", Se);
  let Le = o() * 4 / 5, Oe = a() * 4 / 5, T = o() * 1 / 5, M = a() * 1 / 5;
  n.setCloseViewX = (D) => Le = o() * D, n.setCloseViewY = (D) => Oe = a() * D, n.setCloseViewWidth = (D) => T = o() * D, n.setCloseViewHeight = (D) => M = a() * D;
  function z(D) {
    u.setViewport(0, 0, o(), a()), u.setScissor(0, 0, o(), a()), u.setScissorTest(!0), u.setClearColor(new Ie().setRGB(0, 0, 0, Ue)), t.glowEnabled && d ? d.render() : u.render(_, ce), u.setViewport(
      Le,
      Oe,
      T,
      M
    ), u.setScissor(
      Le,
      Oe,
      T,
      M
    ), u.setScissorTest(!0), u.setClearColor(new Ie().setRGB(0, 0, 0, Ue)), u.render(_, ae);
  }
  return u.setAnimationLoop(z), n.clear = function() {
    u.setAnimationLoop(null), window.removeEventListener("resize", Se), i.removePrintListener(ye), i.removeErrorListener(ye), i.removeGCodeListener(ye), i.removePrintListener(Pe), p && (p.geometry.dispose(), p.material.dispose()), f && (f.geometry.dispose(), f.material.dispose()), y && (y.geometry.dispose(), y.material.dispose()), _.traverse((D) => {
      D.geometry && D.geometry.dispose(), D.material && (Array.isArray(D.material) ? D.material.forEach((ee) => ee.dispose()) : D.material.dispose());
    }), _.clear(), u.dispose(), s.removeChild(u.domElement);
  }, n;
}
export {
  S1 as makeVisualiser
};
