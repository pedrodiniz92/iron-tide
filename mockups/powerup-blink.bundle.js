(() => {
  // mockups/vendor/three.module.js
  var t = "170";
  var u = 0;
  var d = 1;
  var p = 2;
  var y = 100;
  var M = 101;
  var S = 102;
  var w = 200;
  var E = 201;
  var A = 202;
  var R = 203;
  var C = 204;
  var I = 205;
  var P = 206;
  var L = 207;
  var U = 208;
  var D = 209;
  var N = 210;
  var O = 211;
  var F = 212;
  var B = 213;
  var z = 214;
  var k = 0;
  var V = 1;
  var H = 2;
  var G = 3;
  var W = 4;
  var X = 5;
  var j = 6;
  var q = 7;
  var ot = 300;
  var lt = 301;
  var ct = 302;
  var ht = 303;
  var ut = 304;
  var dt = 306;
  var pt = 1e3;
  var mt = 1001;
  var ft = 1002;
  var gt = 1003;
  var vt = 1004;
  var xt = 1005;
  var Mt = 1006;
  var St = 1007;
  var Tt = 1008;
  var Et = 1009;
  var At = 1010;
  var Rt = 1011;
  var Ct = 1012;
  var It = 1013;
  var Pt = 1014;
  var Lt = 1015;
  var Ut = 1016;
  var Dt = 1017;
  var Nt = 1018;
  var Ot = 1020;
  var Ft = 35902;
  var Bt = 1021;
  var zt = 1022;
  var kt = 1023;
  var Vt = 1024;
  var Ht = 1025;
  var Gt = 1026;
  var Wt = 1027;
  var Xt = 1028;
  var jt = 1029;
  var qt = 1030;
  var Yt = 1031;
  var Jt = 1033;
  var Kt = 33776;
  var $t = 33777;
  var Qt = 33778;
  var te = 33779;
  var ee = 35840;
  var ne = 35841;
  var ie = 35842;
  var re = 35843;
  var se = 36196;
  var ae = 37492;
  var oe = 37496;
  var le = 37808;
  var ce = 37809;
  var he = 37810;
  var ue = 37811;
  var de = 37812;
  var pe = 37813;
  var me = 37814;
  var fe = 37815;
  var ge = 37816;
  var ve = 37817;
  var _e = 37818;
  var xe = 37819;
  var ye = 37820;
  var Me = 37821;
  var Se = 36492;
  var be = 36494;
  var Te = 36495;
  var we = 36283;
  var Ee = 36284;
  var Ae = 36285;
  var Re = 36286;
  var Le = 2300;
  var Ue = 2301;
  var De = 2302;
  var Ne = 2400;
  var Oe = 2401;
  var Fe = 2402;
  var Ze = "";
  var Je = "srgb";
  var Ke = "srgb-linear";
  var $e = "linear";
  var Qe = "srgb";
  var en = 7680;
  var vn = 512;
  var _n = 513;
  var xn = 514;
  var yn = 515;
  var Mn = 516;
  var Sn = 517;
  var bn = 518;
  var Tn = 519;
  var wn = 35044;
  var Nn = "300 es";
  var On = 2e3;
  var Fn = 2001;
  var Bn = class {
    addEventListener(t2, e) {
      void 0 === this._listeners && (this._listeners = {});
      const n = this._listeners;
      void 0 === n[t2] && (n[t2] = []), -1 === n[t2].indexOf(e) && n[t2].push(e);
    }
    hasEventListener(t2, e) {
      if (void 0 === this._listeners) return false;
      const n = this._listeners;
      return void 0 !== n[t2] && -1 !== n[t2].indexOf(e);
    }
    removeEventListener(t2, e) {
      if (void 0 === this._listeners) return;
      const n = this._listeners[t2];
      if (void 0 !== n) {
        const t3 = n.indexOf(e);
        -1 !== t3 && n.splice(t3, 1);
      }
    }
    dispatchEvent(t2) {
      if (void 0 === this._listeners) return;
      const e = this._listeners[t2.type];
      if (void 0 !== e) {
        t2.target = this;
        const n = e.slice(0);
        for (let e2 = 0, i = n.length; e2 < i; e2++) n[e2].call(this, t2);
        t2.target = null;
      }
    }
  };
  var zn = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
  var Vn = Math.PI / 180;
  var Hn = 180 / Math.PI;
  function Gn() {
    const t2 = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, n = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
    return (zn[255 & t2] + zn[t2 >> 8 & 255] + zn[t2 >> 16 & 255] + zn[t2 >> 24 & 255] + "-" + zn[255 & e] + zn[e >> 8 & 255] + "-" + zn[e >> 16 & 15 | 64] + zn[e >> 24 & 255] + "-" + zn[63 & n | 128] + zn[n >> 8 & 255] + "-" + zn[n >> 16 & 255] + zn[n >> 24 & 255] + zn[255 & i] + zn[i >> 8 & 255] + zn[i >> 16 & 255] + zn[i >> 24 & 255]).toLowerCase();
  }
  function Wn(t2, e, n) {
    return Math.max(e, Math.min(n, t2));
  }
  function Xn(t2, e) {
    return (t2 % e + e) % e;
  }
  function jn(t2, e, n) {
    return (1 - n) * t2 + n * e;
  }
  function qn(t2, e) {
    switch (e.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return t2 / 4294967295;
      case Uint16Array:
        return t2 / 65535;
      case Uint8Array:
        return t2 / 255;
      case Int32Array:
        return Math.max(t2 / 2147483647, -1);
      case Int16Array:
        return Math.max(t2 / 32767, -1);
      case Int8Array:
        return Math.max(t2 / 127, -1);
      default:
        throw new Error("Invalid component type.");
    }
  }
  function Yn(t2, e) {
    switch (e.constructor) {
      case Float32Array:
        return t2;
      case Uint32Array:
        return Math.round(4294967295 * t2);
      case Uint16Array:
        return Math.round(65535 * t2);
      case Uint8Array:
        return Math.round(255 * t2);
      case Int32Array:
        return Math.round(2147483647 * t2);
      case Int16Array:
        return Math.round(32767 * t2);
      case Int8Array:
        return Math.round(127 * t2);
      default:
        throw new Error("Invalid component type.");
    }
  }
  var Jn = class _Jn {
    constructor(t2 = 0, e = 0) {
      _Jn.prototype.isVector2 = true, this.x = t2, this.y = e;
    }
    get width() {
      return this.x;
    }
    set width(t2) {
      this.x = t2;
    }
    get height() {
      return this.y;
    }
    set height(t2) {
      this.y = t2;
    }
    set(t2, e) {
      return this.x = t2, this.y = e, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    applyMatrix3(t2) {
      const e = this.x, n = this.y, i = t2.elements;
      return this.x = i[0] * e + i[3] * n + i[6], this.y = i[1] * e + i[4] * n + i[7], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
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
    dot(t2) {
      return this.x * t2.x + this.y * t2.y;
    }
    cross(t2) {
      return this.x * t2.y - this.y * t2.x;
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
    angleTo(t2) {
      const e = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t2) / e;
      return Math.acos(Wn(n, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e = this.x - t2.x, n = this.y - t2.y;
      return e * e + n * n;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y);
    }
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this;
    }
    rotateAround(t2, e) {
      const n = Math.cos(e), i = Math.sin(e), r = this.x - t2.x, s = this.y - t2.y;
      return this.x = r * n - s * i + t2.x, this.y = r * i + s * n + t2.y, this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y;
    }
  };
  var Kn = class _Kn {
    constructor(t2, e, n, i, r, s, a, o, l) {
      _Kn.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e, n, i, r, s, a, o, l);
    }
    set(t2, e, n, i, r, s, a, o, l) {
      const c = this.elements;
      return c[0] = t2, c[1] = i, c[2] = a, c[3] = e, c[4] = r, c[5] = o, c[6] = n, c[7] = s, c[8] = l, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    }
    copy(t2) {
      const e = this.elements, n = t2.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], this;
    }
    extractBasis(t2, e, n) {
      return t2.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
    }
    setFromMatrix4(t2) {
      const e = t2.elements;
      return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e) {
      const n = t2.elements, i = e.elements, r = this.elements, s = n[0], a = n[3], o = n[6], l = n[1], c = n[4], h = n[7], u2 = n[2], d2 = n[5], p2 = n[8], m = i[0], f = i[3], g = i[6], v = i[1], _ = i[4], x = i[7], y2 = i[2], M2 = i[5], S2 = i[8];
      return r[0] = s * m + a * v + o * y2, r[3] = s * f + a * _ + o * M2, r[6] = s * g + a * x + o * S2, r[1] = l * m + c * v + h * y2, r[4] = l * f + c * _ + h * M2, r[7] = l * g + c * x + h * S2, r[2] = u2 * m + d2 * v + p2 * y2, r[5] = u2 * f + d2 * _ + p2 * M2, r[8] = u2 * g + d2 * x + p2 * S2, this;
    }
    multiplyScalar(t2) {
      const e = this.elements;
      return e[0] *= t2, e[3] *= t2, e[6] *= t2, e[1] *= t2, e[4] *= t2, e[7] *= t2, e[2] *= t2, e[5] *= t2, e[8] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l = t2[7], c = t2[8];
      return e * s * c - e * a * l - n * r * c + n * a * o + i * r * l - i * s * o;
    }
    invert() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l = t2[7], c = t2[8], h = c * s - a * l, u2 = a * o - c * r, d2 = l * r - s * o, p2 = e * h + n * u2 + i * d2;
      if (0 === p2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
      const m = 1 / p2;
      return t2[0] = h * m, t2[1] = (i * l - c * n) * m, t2[2] = (a * n - i * s) * m, t2[3] = u2 * m, t2[4] = (c * e - i * o) * m, t2[5] = (i * r - a * e) * m, t2[6] = d2 * m, t2[7] = (n * o - l * e) * m, t2[8] = (s * e - n * r) * m, this;
    }
    transpose() {
      let t2;
      const e = this.elements;
      return t2 = e[1], e[1] = e[3], e[3] = t2, t2 = e[2], e[2] = e[6], e[6] = t2, t2 = e[5], e[5] = e[7], e[7] = t2, this;
    }
    getNormalMatrix(t2) {
      return this.setFromMatrix4(t2).invert().transpose();
    }
    transposeIntoArray(t2) {
      const e = this.elements;
      return t2[0] = e[0], t2[1] = e[3], t2[2] = e[6], t2[3] = e[1], t2[4] = e[4], t2[5] = e[7], t2[6] = e[2], t2[7] = e[5], t2[8] = e[8], this;
    }
    setUvTransform(t2, e, n, i, r, s, a) {
      const o = Math.cos(r), l = Math.sin(r);
      return this.set(n * o, n * l, -n * (o * s + l * a) + s + t2, -i * l, i * o, -i * (-l * s + o * a) + a + e, 0, 0, 1), this;
    }
    scale(t2, e) {
      return this.premultiply($n.makeScale(t2, e)), this;
    }
    rotate(t2) {
      return this.premultiply($n.makeRotation(-t2)), this;
    }
    translate(t2, e) {
      return this.premultiply($n.makeTranslation(t2, e)), this;
    }
    makeTranslation(t2, e) {
      return t2.isVector2 ? this.set(1, 0, t2.x, 0, 1, t2.y, 0, 0, 1) : this.set(1, 0, t2, 0, 1, e, 0, 0, 1), this;
    }
    makeRotation(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, -n, 0, n, e, 0, 0, 0, 1), this;
    }
    makeScale(t2, e) {
      return this.set(t2, 0, 0, 0, e, 0, 0, 0, 1), this;
    }
    equals(t2) {
      const e = this.elements, n = t2.elements;
      for (let t3 = 0; t3 < 9; t3++) if (e[t3] !== n[t3]) return false;
      return true;
    }
    fromArray(t2, e = 0) {
      for (let n = 0; n < 9; n++) this.elements[n] = t2[n + e];
      return this;
    }
    toArray(t2 = [], e = 0) {
      const n = this.elements;
      return t2[e] = n[0], t2[e + 1] = n[1], t2[e + 2] = n[2], t2[e + 3] = n[3], t2[e + 4] = n[4], t2[e + 5] = n[5], t2[e + 6] = n[6], t2[e + 7] = n[7], t2[e + 8] = n[8], t2;
    }
    clone() {
      return new this.constructor().fromArray(this.elements);
    }
  };
  var $n = new Kn();
  function Qn(t2) {
    for (let e = t2.length - 1; e >= 0; --e) if (t2[e] >= 65535) return true;
    return false;
  }
  function ni(t2) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", t2);
  }
  function ii() {
    const t2 = ni("canvas");
    return t2.style.display = "block", t2;
  }
  var ri = {};
  function si(t2) {
    t2 in ri || (ri[t2] = true, console.warn(t2));
  }
  var ai = { enabled: true, workingColorSpace: Ke, spaces: {}, convert: function(t2, e, n) {
    return false !== this.enabled && e !== n && e && n ? (this.spaces[e].transfer === Qe && (t2.r = oi(t2.r), t2.g = oi(t2.g), t2.b = oi(t2.b)), this.spaces[e].primaries !== this.spaces[n].primaries && (t2.applyMatrix3(this.spaces[e].toXYZ), t2.applyMatrix3(this.spaces[n].fromXYZ)), this.spaces[n].transfer === Qe && (t2.r = li(t2.r), t2.g = li(t2.g), t2.b = li(t2.b)), t2) : t2;
  }, fromWorkingColorSpace: function(t2, e) {
    return this.convert(t2, this.workingColorSpace, e);
  }, toWorkingColorSpace: function(t2, e) {
    return this.convert(t2, e, this.workingColorSpace);
  }, getPrimaries: function(t2) {
    return this.spaces[t2].primaries;
  }, getTransfer: function(t2) {
    return t2 === Ze ? $e : this.spaces[t2].transfer;
  }, getLuminanceCoefficients: function(t2, e = this.workingColorSpace) {
    return t2.fromArray(this.spaces[e].luminanceCoefficients);
  }, define: function(t2) {
    Object.assign(this.spaces, t2);
  }, _getMatrix: function(t2, e, n) {
    return t2.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ);
  }, _getDrawingBufferColorSpace: function(t2) {
    return this.spaces[t2].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(t2 = this.workingColorSpace) {
    return this.spaces[t2].workingColorSpaceConfig.unpackColorSpace;
  } };
  function oi(t2) {
    return t2 < 0.04045 ? 0.0773993808 * t2 : Math.pow(0.9478672986 * t2 + 0.0521327014, 2.4);
  }
  function li(t2) {
    return t2 < 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 0.41666) - 0.055;
  }
  var ci = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06];
  var hi = [0.2126, 0.7152, 0.0722];
  var ui = [0.3127, 0.329];
  var di = new Kn().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322);
  var pi = new Kn().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
  var mi;
  ai.define({ [Ke]: { primaries: ci, whitePoint: ui, transfer: $e, toXYZ: di, fromXYZ: pi, luminanceCoefficients: hi, workingColorSpaceConfig: { unpackColorSpace: Je }, outputColorSpaceConfig: { drawingBufferColorSpace: Je } }, [Je]: { primaries: ci, whitePoint: ui, transfer: Qe, toXYZ: di, fromXYZ: pi, luminanceCoefficients: hi, outputColorSpaceConfig: { drawingBufferColorSpace: Je } } });
  var fi = class {
    static getDataURL(t2) {
      if (/^data:/i.test(t2.src)) return t2.src;
      if ("undefined" == typeof HTMLCanvasElement) return t2.src;
      let e;
      if (t2 instanceof HTMLCanvasElement) e = t2;
      else {
        void 0 === mi && (mi = ni("canvas")), mi.width = t2.width, mi.height = t2.height;
        const n = mi.getContext("2d");
        t2 instanceof ImageData ? n.putImageData(t2, 0, 0) : n.drawImage(t2, 0, 0, t2.width, t2.height), e = mi;
      }
      return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t2), e.toDataURL("image/jpeg", 0.6)) : e.toDataURL("image/png");
    }
    static sRGBToLinear(t2) {
      if ("undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap) {
        const e = ni("canvas");
        e.width = t2.width, e.height = t2.height;
        const n = e.getContext("2d");
        n.drawImage(t2, 0, 0, t2.width, t2.height);
        const i = n.getImageData(0, 0, t2.width, t2.height), r = i.data;
        for (let t3 = 0; t3 < r.length; t3++) r[t3] = 255 * oi(r[t3] / 255);
        return n.putImageData(i, 0, 0), e;
      }
      if (t2.data) {
        const e = t2.data.slice(0);
        for (let t3 = 0; t3 < e.length; t3++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t3] = Math.floor(255 * oi(e[t3] / 255)) : e[t3] = oi(e[t3]);
        return { data: e, width: t2.width, height: t2.height };
      }
      return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t2;
    }
  };
  var gi = 0;
  var vi = class {
    constructor(t2 = null) {
      this.isSource = true, Object.defineProperty(this, "id", { value: gi++ }), this.uuid = Gn(), this.data = t2, this.dataReady = true, this.version = 0;
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      if (!e && void 0 !== t2.images[this.uuid]) return t2.images[this.uuid];
      const n = { uuid: this.uuid, url: "" }, i = this.data;
      if (null !== i) {
        let t3;
        if (Array.isArray(i)) {
          t3 = [];
          for (let e2 = 0, n2 = i.length; e2 < n2; e2++) i[e2].isDataTexture ? t3.push(_i(i[e2].image)) : t3.push(_i(i[e2]));
        } else t3 = _i(i);
        n.url = t3;
      }
      return e || (t2.images[this.uuid] = n), n;
    }
  };
  function _i(t2) {
    return "undefined" != typeof HTMLImageElement && t2 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t2 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t2 instanceof ImageBitmap ? fi.getDataURL(t2) : t2.data ? { data: Array.from(t2.data), width: t2.width, height: t2.height, type: t2.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
  }
  var xi = 0;
  var yi = class _yi extends Bn {
    constructor(t2 = _yi.DEFAULT_IMAGE, e = _yi.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, s = 1008, a = 1023, o = 1009, l = _yi.DEFAULT_ANISOTROPY, c = "") {
      super(), this.isTexture = true, Object.defineProperty(this, "id", { value: xi++ }), this.uuid = Gn(), this.name = "", this.source = new vi(t2), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = s, this.anisotropy = l, this.format = a, this.internalFormat = null, this.type = o, this.offset = new Jn(0, 0), this.repeat = new Jn(1, 1), this.center = new Jn(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Kn(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = c, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
    }
    get image() {
      return this.source.data;
    }
    set image(t2 = null) {
      this.source.data = t2;
    }
    updateMatrix() {
      this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.name = t2.name, this.source = t2.source, this.mipmaps = t2.mipmaps.slice(0), this.mapping = t2.mapping, this.channel = t2.channel, this.wrapS = t2.wrapS, this.wrapT = t2.wrapT, this.magFilter = t2.magFilter, this.minFilter = t2.minFilter, this.anisotropy = t2.anisotropy, this.format = t2.format, this.internalFormat = t2.internalFormat, this.type = t2.type, this.offset.copy(t2.offset), this.repeat.copy(t2.repeat), this.center.copy(t2.center), this.rotation = t2.rotation, this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrix.copy(t2.matrix), this.generateMipmaps = t2.generateMipmaps, this.premultiplyAlpha = t2.premultiplyAlpha, this.flipY = t2.flipY, this.unpackAlignment = t2.unpackAlignment, this.colorSpace = t2.colorSpace, this.userData = JSON.parse(JSON.stringify(t2.userData)), this.needsUpdate = true, this;
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      if (!e && void 0 !== t2.textures[this.uuid]) return t2.textures[this.uuid];
      const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t2).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
      return Object.keys(this.userData).length > 0 && (n.userData = this.userData), e || (t2.textures[this.uuid] = n), n;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    transformUv(t2) {
      if (this.mapping !== ot) return t2;
      if (t2.applyMatrix3(this.matrix), t2.x < 0 || t2.x > 1) switch (this.wrapS) {
        case pt:
          t2.x = t2.x - Math.floor(t2.x);
          break;
        case mt:
          t2.x = t2.x < 0 ? 0 : 1;
          break;
        case ft:
          1 === Math.abs(Math.floor(t2.x) % 2) ? t2.x = Math.ceil(t2.x) - t2.x : t2.x = t2.x - Math.floor(t2.x);
      }
      if (t2.y < 0 || t2.y > 1) switch (this.wrapT) {
        case pt:
          t2.y = t2.y - Math.floor(t2.y);
          break;
        case mt:
          t2.y = t2.y < 0 ? 0 : 1;
          break;
        case ft:
          1 === Math.abs(Math.floor(t2.y) % 2) ? t2.y = Math.ceil(t2.y) - t2.y : t2.y = t2.y - Math.floor(t2.y);
      }
      return this.flipY && (t2.y = 1 - t2.y), t2;
    }
    set needsUpdate(t2) {
      true === t2 && (this.version++, this.source.needsUpdate = true);
    }
    set needsPMREMUpdate(t2) {
      true === t2 && this.pmremVersion++;
    }
  };
  yi.DEFAULT_IMAGE = null, yi.DEFAULT_MAPPING = ot, yi.DEFAULT_ANISOTROPY = 1;
  var Mi = class _Mi {
    constructor(t2 = 0, e = 0, n = 0, i = 1) {
      _Mi.prototype.isVector4 = true, this.x = t2, this.y = e, this.z = n, this.w = i;
    }
    get width() {
      return this.z;
    }
    set width(t2) {
      this.z = t2;
    }
    get height() {
      return this.w;
    }
    set height(t2) {
      this.w = t2;
    }
    set(t2, e, n, i) {
      return this.x = t2, this.y = e, this.z = n, this.w = i, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this.w = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        case 3:
          this.w = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z, this.w);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this.w = void 0 !== t2.w ? t2.w : 1, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this.w += t2.w, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this.w += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this.w = t2.w + e.w, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this.z += t2.z * e, this.w += t2.w * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this.w -= t2.w, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this.w -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this.w = t2.w - e.w, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this.w *= t2.w, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this.w *= t2, this;
    }
    applyMatrix4(t2) {
      const e = this.x, n = this.y, i = this.z, r = this.w, s = t2.elements;
      return this.x = s[0] * e + s[4] * n + s[8] * i + s[12] * r, this.y = s[1] * e + s[5] * n + s[9] * i + s[13] * r, this.z = s[2] * e + s[6] * n + s[10] * i + s[14] * r, this.w = s[3] * e + s[7] * n + s[11] * i + s[15] * r, this;
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this.w /= t2.w, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    setAxisAngleFromQuaternion(t2) {
      this.w = 2 * Math.acos(t2.w);
      const e = Math.sqrt(1 - t2.w * t2.w);
      return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t2.x / e, this.y = t2.y / e, this.z = t2.z / e), this;
    }
    setAxisAngleFromRotationMatrix(t2) {
      let e, n, i, r;
      const s = 0.01, a = 0.1, o = t2.elements, l = o[0], c = o[4], h = o[8], u2 = o[1], d2 = o[5], p2 = o[9], m = o[2], f = o[6], g = o[10];
      if (Math.abs(c - u2) < s && Math.abs(h - m) < s && Math.abs(p2 - f) < s) {
        if (Math.abs(c + u2) < a && Math.abs(h + m) < a && Math.abs(p2 + f) < a && Math.abs(l + d2 + g - 3) < a) return this.set(1, 0, 0, 0), this;
        e = Math.PI;
        const t3 = (l + 1) / 2, o2 = (d2 + 1) / 2, v2 = (g + 1) / 2, _ = (c + u2) / 4, x = (h + m) / 4, y2 = (p2 + f) / 4;
        return t3 > o2 && t3 > v2 ? t3 < s ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(t3), i = _ / n, r = x / n) : o2 > v2 ? o2 < s ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(o2), n = _ / i, r = y2 / i) : v2 < s ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(v2), n = x / r, i = y2 / r), this.set(n, i, r, e), this;
      }
      let v = Math.sqrt((f - p2) * (f - p2) + (h - m) * (h - m) + (u2 - c) * (u2 - c));
      return Math.abs(v) < 1e-3 && (v = 1), this.x = (f - p2) / v, this.y = (h - m) / v, this.z = (u2 - c) / v, this.w = Math.acos((l + d2 + g - 1) / 2), this;
    }
    setFromMatrixPosition(t2) {
      const e = t2.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this.w = Math.min(this.w, t2.w), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this.w = Math.max(this.w, t2.w), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this.z = Math.max(t2.z, Math.min(e.z, this.z)), this.w = Math.max(t2.w, Math.min(e.w, this.w)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this.z = Math.max(t2, Math.min(e, this.z)), this.w = Math.max(t2, Math.min(e, this.w)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
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
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z + this.w * t2.w;
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
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this.z += (t2.z - this.z) * e, this.w += (t2.w - this.w) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this.z = t2.z + (e.z - t2.z) * n, this.w = t2.w + (e.w - t2.w) * n, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z && t2.w === this.w;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this.z = t2[e + 2], this.w = t2[e + 3], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2[e + 2] = this.z, t2[e + 3] = this.w, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this.z = t2.getZ(e), this.w = t2.getW(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z, yield this.w;
    }
  };
  var Si = class extends Bn {
    constructor(t2 = 1, e = 1, n = {}) {
      super(), this.isRenderTarget = true, this.width = t2, this.height = e, this.depth = 1, this.scissor = new Mi(0, 0, t2, e), this.scissorTest = false, this.viewport = new Mi(0, 0, t2, e);
      const i = { width: t2, height: e, depth: 1 };
      n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Mt, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
      const r = new yi(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
      r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
      const s = n.count;
      for (let t3 = 0; t3 < s; t3++) this.textures[t3] = r.clone(), this.textures[t3].isRenderTargetTexture = true;
      this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
    }
    get texture() {
      return this.textures[0];
    }
    set texture(t2) {
      this.textures[0] = t2;
    }
    setSize(t2, e, n = 1) {
      if (this.width !== t2 || this.height !== e || this.depth !== n) {
        this.width = t2, this.height = e, this.depth = n;
        for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = t2, this.textures[i].image.height = e, this.textures[i].image.depth = n;
        this.dispose();
      }
      this.viewport.set(0, 0, t2, e), this.scissor.set(0, 0, t2, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.width = t2.width, this.height = t2.height, this.depth = t2.depth, this.scissor.copy(t2.scissor), this.scissorTest = t2.scissorTest, this.viewport.copy(t2.viewport), this.textures.length = 0;
      for (let e2 = 0, n = t2.textures.length; e2 < n; e2++) this.textures[e2] = t2.textures[e2].clone(), this.textures[e2].isRenderTargetTexture = true;
      const e = Object.assign({}, t2.texture.image);
      return this.texture.source = new vi(e), this.depthBuffer = t2.depthBuffer, this.stencilBuffer = t2.stencilBuffer, this.resolveDepthBuffer = t2.resolveDepthBuffer, this.resolveStencilBuffer = t2.resolveStencilBuffer, null !== t2.depthTexture && (this.depthTexture = t2.depthTexture.clone()), this.samples = t2.samples, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var bi = class extends Si {
    constructor(t2 = 1, e = 1, n = {}) {
      super(t2, e, n), this.isWebGLRenderTarget = true;
    }
  };
  var Ti = class extends yi {
    constructor(t2 = null, e = 1, n = 1, i = 1) {
      super(null), this.isDataArrayTexture = true, this.image = { data: t2, width: e, height: n, depth: i }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
    }
    addLayerUpdate(t2) {
      this.layerUpdates.add(t2);
    }
    clearLayerUpdates() {
      this.layerUpdates.clear();
    }
  };
  var Ei = class extends yi {
    constructor(t2 = null, e = 1, n = 1, i = 1) {
      super(null), this.isData3DTexture = true, this.image = { data: t2, width: e, height: n, depth: i }, this.magFilter = gt, this.minFilter = gt, this.wrapR = mt, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
    }
  };
  var Ri = class {
    constructor(t2 = 0, e = 0, n = 0, i = 1) {
      this.isQuaternion = true, this._x = t2, this._y = e, this._z = n, this._w = i;
    }
    static slerpFlat(t2, e, n, i, r, s, a) {
      let o = n[i + 0], l = n[i + 1], c = n[i + 2], h = n[i + 3];
      const u2 = r[s + 0], d2 = r[s + 1], p2 = r[s + 2], m = r[s + 3];
      if (0 === a) return t2[e + 0] = o, t2[e + 1] = l, t2[e + 2] = c, void (t2[e + 3] = h);
      if (1 === a) return t2[e + 0] = u2, t2[e + 1] = d2, t2[e + 2] = p2, void (t2[e + 3] = m);
      if (h !== m || o !== u2 || l !== d2 || c !== p2) {
        let t3 = 1 - a;
        const e2 = o * u2 + l * d2 + c * p2 + h * m, n2 = e2 >= 0 ? 1 : -1, i2 = 1 - e2 * e2;
        if (i2 > Number.EPSILON) {
          const r3 = Math.sqrt(i2), s2 = Math.atan2(r3, e2 * n2);
          t3 = Math.sin(t3 * s2) / r3, a = Math.sin(a * s2) / r3;
        }
        const r2 = a * n2;
        if (o = o * t3 + u2 * r2, l = l * t3 + d2 * r2, c = c * t3 + p2 * r2, h = h * t3 + m * r2, t3 === 1 - a) {
          const t4 = 1 / Math.sqrt(o * o + l * l + c * c + h * h);
          o *= t4, l *= t4, c *= t4, h *= t4;
        }
      }
      t2[e] = o, t2[e + 1] = l, t2[e + 2] = c, t2[e + 3] = h;
    }
    static multiplyQuaternionsFlat(t2, e, n, i, r, s) {
      const a = n[i], o = n[i + 1], l = n[i + 2], c = n[i + 3], h = r[s], u2 = r[s + 1], d2 = r[s + 2], p2 = r[s + 3];
      return t2[e] = a * p2 + c * h + o * d2 - l * u2, t2[e + 1] = o * p2 + c * u2 + l * h - a * d2, t2[e + 2] = l * p2 + c * d2 + a * u2 - o * h, t2[e + 3] = c * p2 - a * h - o * u2 - l * d2, t2;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get w() {
      return this._w;
    }
    set w(t2) {
      this._w = t2, this._onChangeCallback();
    }
    set(t2, e, n, i) {
      return this._x = t2, this._y = e, this._z = n, this._w = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._w);
    }
    copy(t2) {
      return this._x = t2.x, this._y = t2.y, this._z = t2.z, this._w = t2.w, this._onChangeCallback(), this;
    }
    setFromEuler(t2, e = true) {
      const n = t2._x, i = t2._y, r = t2._z, s = t2._order, a = Math.cos, o = Math.sin, l = a(n / 2), c = a(i / 2), h = a(r / 2), u2 = o(n / 2), d2 = o(i / 2), p2 = o(r / 2);
      switch (s) {
        case "XYZ":
          this._x = u2 * c * h + l * d2 * p2, this._y = l * d2 * h - u2 * c * p2, this._z = l * c * p2 + u2 * d2 * h, this._w = l * c * h - u2 * d2 * p2;
          break;
        case "YXZ":
          this._x = u2 * c * h + l * d2 * p2, this._y = l * d2 * h - u2 * c * p2, this._z = l * c * p2 - u2 * d2 * h, this._w = l * c * h + u2 * d2 * p2;
          break;
        case "ZXY":
          this._x = u2 * c * h - l * d2 * p2, this._y = l * d2 * h + u2 * c * p2, this._z = l * c * p2 + u2 * d2 * h, this._w = l * c * h - u2 * d2 * p2;
          break;
        case "ZYX":
          this._x = u2 * c * h - l * d2 * p2, this._y = l * d2 * h + u2 * c * p2, this._z = l * c * p2 - u2 * d2 * h, this._w = l * c * h + u2 * d2 * p2;
          break;
        case "YZX":
          this._x = u2 * c * h + l * d2 * p2, this._y = l * d2 * h + u2 * c * p2, this._z = l * c * p2 - u2 * d2 * h, this._w = l * c * h - u2 * d2 * p2;
          break;
        case "XZY":
          this._x = u2 * c * h - l * d2 * p2, this._y = l * d2 * h - u2 * c * p2, this._z = l * c * p2 + u2 * d2 * h, this._w = l * c * h + u2 * d2 * p2;
          break;
        default:
          console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + s);
      }
      return true === e && this._onChangeCallback(), this;
    }
    setFromAxisAngle(t2, e) {
      const n = e / 2, i = Math.sin(n);
      return this._x = t2.x * i, this._y = t2.y * i, this._z = t2.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2) {
      const e = t2.elements, n = e[0], i = e[4], r = e[8], s = e[1], a = e[5], o = e[9], l = e[2], c = e[6], h = e[10], u2 = n + a + h;
      if (u2 > 0) {
        const t3 = 0.5 / Math.sqrt(u2 + 1);
        this._w = 0.25 / t3, this._x = (c - o) * t3, this._y = (r - l) * t3, this._z = (s - i) * t3;
      } else if (n > a && n > h) {
        const t3 = 2 * Math.sqrt(1 + n - a - h);
        this._w = (c - o) / t3, this._x = 0.25 * t3, this._y = (i + s) / t3, this._z = (r + l) / t3;
      } else if (a > h) {
        const t3 = 2 * Math.sqrt(1 + a - n - h);
        this._w = (r - l) / t3, this._x = (i + s) / t3, this._y = 0.25 * t3, this._z = (o + c) / t3;
      } else {
        const t3 = 2 * Math.sqrt(1 + h - n - a);
        this._w = (s - i) / t3, this._x = (r + l) / t3, this._y = (o + c) / t3, this._z = 0.25 * t3;
      }
      return this._onChangeCallback(), this;
    }
    setFromUnitVectors(t2, e) {
      let n = t2.dot(e) + 1;
      return n < Number.EPSILON ? (n = 0, Math.abs(t2.x) > Math.abs(t2.z) ? (this._x = -t2.y, this._y = t2.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -t2.z, this._z = t2.y, this._w = n)) : (this._x = t2.y * e.z - t2.z * e.y, this._y = t2.z * e.x - t2.x * e.z, this._z = t2.x * e.y - t2.y * e.x, this._w = n), this.normalize();
    }
    angleTo(t2) {
      return 2 * Math.acos(Math.abs(Wn(this.dot(t2), -1, 1)));
    }
    rotateTowards(t2, e) {
      const n = this.angleTo(t2);
      if (0 === n) return this;
      const i = Math.min(1, e / n);
      return this.slerp(t2, i), this;
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
    dot(t2) {
      return this._x * t2._x + this._y * t2._y + this._z * t2._z + this._w * t2._w;
    }
    lengthSq() {
      return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
    }
    length() {
      return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
    }
    normalize() {
      let t2 = this.length();
      return 0 === t2 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t2 = 1 / t2, this._x = this._x * t2, this._y = this._y * t2, this._z = this._z * t2, this._w = this._w * t2), this._onChangeCallback(), this;
    }
    multiply(t2) {
      return this.multiplyQuaternions(this, t2);
    }
    premultiply(t2) {
      return this.multiplyQuaternions(t2, this);
    }
    multiplyQuaternions(t2, e) {
      const n = t2._x, i = t2._y, r = t2._z, s = t2._w, a = e._x, o = e._y, l = e._z, c = e._w;
      return this._x = n * c + s * a + i * l - r * o, this._y = i * c + s * o + r * a - n * l, this._z = r * c + s * l + n * o - i * a, this._w = s * c - n * a - i * o - r * l, this._onChangeCallback(), this;
    }
    slerp(t2, e) {
      if (0 === e) return this;
      if (1 === e) return this.copy(t2);
      const n = this._x, i = this._y, r = this._z, s = this._w;
      let a = s * t2._w + n * t2._x + i * t2._y + r * t2._z;
      if (a < 0 ? (this._w = -t2._w, this._x = -t2._x, this._y = -t2._y, this._z = -t2._z, a = -a) : this.copy(t2), a >= 1) return this._w = s, this._x = n, this._y = i, this._z = r, this;
      const o = 1 - a * a;
      if (o <= Number.EPSILON) {
        const t3 = 1 - e;
        return this._w = t3 * s + e * this._w, this._x = t3 * n + e * this._x, this._y = t3 * i + e * this._y, this._z = t3 * r + e * this._z, this.normalize(), this;
      }
      const l = Math.sqrt(o), c = Math.atan2(l, a), h = Math.sin((1 - e) * c) / l, u2 = Math.sin(e * c) / l;
      return this._w = s * h + this._w * u2, this._x = n * h + this._x * u2, this._y = i * h + this._y * u2, this._z = r * h + this._z * u2, this._onChangeCallback(), this;
    }
    slerpQuaternions(t2, e, n) {
      return this.copy(t2).slerp(e, n);
    }
    random() {
      const t2 = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
      return this.set(i * Math.sin(t2), i * Math.cos(t2), r * Math.sin(e), r * Math.cos(e));
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._w === this._w;
    }
    fromArray(t2, e = 0) {
      return this._x = t2[e], this._y = t2[e + 1], this._z = t2[e + 2], this._w = t2[e + 3], this._onChangeCallback(), this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this._x, t2[e + 1] = this._y, t2[e + 2] = this._z, t2[e + 3] = this._w, t2;
    }
    fromBufferAttribute(t2, e) {
      return this._x = t2.getX(e), this._y = t2.getY(e), this._z = t2.getZ(e), this._w = t2.getW(e), this._onChangeCallback(), this;
    }
    toJSON() {
      return this.toArray();
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._w;
    }
  };
  var Ci = class _Ci {
    constructor(t2 = 0, e = 0, n = 0) {
      _Ci.prototype.isVector3 = true, this.x = t2, this.y = e, this.z = n;
    }
    set(t2, e, n) {
      return void 0 === n && (n = this.z), this.x = t2, this.y = e, this.z = n, this;
    }
    setScalar(t2) {
      return this.x = t2, this.y = t2, this.z = t2, this;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setZ(t2) {
      return this.z = t2, this;
    }
    setComponent(t2, e) {
      switch (t2) {
        case 0:
          this.x = e;
          break;
        case 1:
          this.y = e;
          break;
        case 2:
          this.z = e;
          break;
        default:
          throw new Error("index is out of range: " + t2);
      }
      return this;
    }
    getComponent(t2) {
      switch (t2) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + t2);
      }
    }
    clone() {
      return new this.constructor(this.x, this.y, this.z);
    }
    copy(t2) {
      return this.x = t2.x, this.y = t2.y, this.z = t2.z, this;
    }
    add(t2) {
      return this.x += t2.x, this.y += t2.y, this.z += t2.z, this;
    }
    addScalar(t2) {
      return this.x += t2, this.y += t2, this.z += t2, this;
    }
    addVectors(t2, e) {
      return this.x = t2.x + e.x, this.y = t2.y + e.y, this.z = t2.z + e.z, this;
    }
    addScaledVector(t2, e) {
      return this.x += t2.x * e, this.y += t2.y * e, this.z += t2.z * e, this;
    }
    sub(t2) {
      return this.x -= t2.x, this.y -= t2.y, this.z -= t2.z, this;
    }
    subScalar(t2) {
      return this.x -= t2, this.y -= t2, this.z -= t2, this;
    }
    subVectors(t2, e) {
      return this.x = t2.x - e.x, this.y = t2.y - e.y, this.z = t2.z - e.z, this;
    }
    multiply(t2) {
      return this.x *= t2.x, this.y *= t2.y, this.z *= t2.z, this;
    }
    multiplyScalar(t2) {
      return this.x *= t2, this.y *= t2, this.z *= t2, this;
    }
    multiplyVectors(t2, e) {
      return this.x = t2.x * e.x, this.y = t2.y * e.y, this.z = t2.z * e.z, this;
    }
    applyEuler(t2) {
      return this.applyQuaternion(Pi.setFromEuler(t2));
    }
    applyAxisAngle(t2, e) {
      return this.applyQuaternion(Pi.setFromAxisAngle(t2, e));
    }
    applyMatrix3(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e + r[3] * n + r[6] * i, this.y = r[1] * e + r[4] * n + r[7] * i, this.z = r[2] * e + r[5] * n + r[8] * i, this;
    }
    applyNormalMatrix(t2) {
      return this.applyMatrix3(t2).normalize();
    }
    applyMatrix4(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements, s = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
      return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * s, this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * s, this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * s, this;
    }
    applyQuaternion(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.x, s = t2.y, a = t2.z, o = t2.w, l = 2 * (s * i - a * n), c = 2 * (a * e - r * i), h = 2 * (r * n - s * e);
      return this.x = e + o * l + s * h - a * c, this.y = n + o * c + a * l - r * h, this.z = i + o * h + r * c - s * l, this;
    }
    project(t2) {
      return this.applyMatrix4(t2.matrixWorldInverse).applyMatrix4(t2.projectionMatrix);
    }
    unproject(t2) {
      return this.applyMatrix4(t2.projectionMatrixInverse).applyMatrix4(t2.matrixWorld);
    }
    transformDirection(t2) {
      const e = this.x, n = this.y, i = this.z, r = t2.elements;
      return this.x = r[0] * e + r[4] * n + r[8] * i, this.y = r[1] * e + r[5] * n + r[9] * i, this.z = r[2] * e + r[6] * n + r[10] * i, this.normalize();
    }
    divide(t2) {
      return this.x /= t2.x, this.y /= t2.y, this.z /= t2.z, this;
    }
    divideScalar(t2) {
      return this.multiplyScalar(1 / t2);
    }
    min(t2) {
      return this.x = Math.min(this.x, t2.x), this.y = Math.min(this.y, t2.y), this.z = Math.min(this.z, t2.z), this;
    }
    max(t2) {
      return this.x = Math.max(this.x, t2.x), this.y = Math.max(this.y, t2.y), this.z = Math.max(this.z, t2.z), this;
    }
    clamp(t2, e) {
      return this.x = Math.max(t2.x, Math.min(e.x, this.x)), this.y = Math.max(t2.y, Math.min(e.y, this.y)), this.z = Math.max(t2.z, Math.min(e.z, this.z)), this;
    }
    clampScalar(t2, e) {
      return this.x = Math.max(t2, Math.min(e, this.x)), this.y = Math.max(t2, Math.min(e, this.y)), this.z = Math.max(t2, Math.min(e, this.z)), this;
    }
    clampLength(t2, e) {
      const n = this.length();
      return this.divideScalar(n || 1).multiplyScalar(Math.max(t2, Math.min(e, n)));
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
    dot(t2) {
      return this.x * t2.x + this.y * t2.y + this.z * t2.z;
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
    setLength(t2) {
      return this.normalize().multiplyScalar(t2);
    }
    lerp(t2, e) {
      return this.x += (t2.x - this.x) * e, this.y += (t2.y - this.y) * e, this.z += (t2.z - this.z) * e, this;
    }
    lerpVectors(t2, e, n) {
      return this.x = t2.x + (e.x - t2.x) * n, this.y = t2.y + (e.y - t2.y) * n, this.z = t2.z + (e.z - t2.z) * n, this;
    }
    cross(t2) {
      return this.crossVectors(this, t2);
    }
    crossVectors(t2, e) {
      const n = t2.x, i = t2.y, r = t2.z, s = e.x, a = e.y, o = e.z;
      return this.x = i * o - r * a, this.y = r * s - n * o, this.z = n * a - i * s, this;
    }
    projectOnVector(t2) {
      const e = t2.lengthSq();
      if (0 === e) return this.set(0, 0, 0);
      const n = t2.dot(this) / e;
      return this.copy(t2).multiplyScalar(n);
    }
    projectOnPlane(t2) {
      return Ii.copy(this).projectOnVector(t2), this.sub(Ii);
    }
    reflect(t2) {
      return this.sub(Ii.copy(t2).multiplyScalar(2 * this.dot(t2)));
    }
    angleTo(t2) {
      const e = Math.sqrt(this.lengthSq() * t2.lengthSq());
      if (0 === e) return Math.PI / 2;
      const n = this.dot(t2) / e;
      return Math.acos(Wn(n, -1, 1));
    }
    distanceTo(t2) {
      return Math.sqrt(this.distanceToSquared(t2));
    }
    distanceToSquared(t2) {
      const e = this.x - t2.x, n = this.y - t2.y, i = this.z - t2.z;
      return e * e + n * n + i * i;
    }
    manhattanDistanceTo(t2) {
      return Math.abs(this.x - t2.x) + Math.abs(this.y - t2.y) + Math.abs(this.z - t2.z);
    }
    setFromSpherical(t2) {
      return this.setFromSphericalCoords(t2.radius, t2.phi, t2.theta);
    }
    setFromSphericalCoords(t2, e, n) {
      const i = Math.sin(e) * t2;
      return this.x = i * Math.sin(n), this.y = Math.cos(e) * t2, this.z = i * Math.cos(n), this;
    }
    setFromCylindrical(t2) {
      return this.setFromCylindricalCoords(t2.radius, t2.theta, t2.y);
    }
    setFromCylindricalCoords(t2, e, n) {
      return this.x = t2 * Math.sin(e), this.y = n, this.z = t2 * Math.cos(e), this;
    }
    setFromMatrixPosition(t2) {
      const e = t2.elements;
      return this.x = e[12], this.y = e[13], this.z = e[14], this;
    }
    setFromMatrixScale(t2) {
      const e = this.setFromMatrixColumn(t2, 0).length(), n = this.setFromMatrixColumn(t2, 1).length(), i = this.setFromMatrixColumn(t2, 2).length();
      return this.x = e, this.y = n, this.z = i, this;
    }
    setFromMatrixColumn(t2, e) {
      return this.fromArray(t2.elements, 4 * e);
    }
    setFromMatrix3Column(t2, e) {
      return this.fromArray(t2.elements, 3 * e);
    }
    setFromEuler(t2) {
      return this.x = t2._x, this.y = t2._y, this.z = t2._z, this;
    }
    setFromColor(t2) {
      return this.x = t2.r, this.y = t2.g, this.z = t2.b, this;
    }
    equals(t2) {
      return t2.x === this.x && t2.y === this.y && t2.z === this.z;
    }
    fromArray(t2, e = 0) {
      return this.x = t2[e], this.y = t2[e + 1], this.z = t2[e + 2], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.x, t2[e + 1] = this.y, t2[e + 2] = this.z, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.x = t2.getX(e), this.y = t2.getY(e), this.z = t2.getZ(e), this;
    }
    random() {
      return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
    }
    randomDirection() {
      const t2 = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1, n = Math.sqrt(1 - e * e);
      return this.x = n * Math.cos(t2), this.y = e, this.z = n * Math.sin(t2), this;
    }
    *[Symbol.iterator]() {
      yield this.x, yield this.y, yield this.z;
    }
  };
  var Ii = new Ci();
  var Pi = new Ri();
  var Li = class {
    constructor(t2 = new Ci(1 / 0, 1 / 0, 1 / 0), e = new Ci(-1 / 0, -1 / 0, -1 / 0)) {
      this.isBox3 = true, this.min = t2, this.max = e;
    }
    set(t2, e) {
      return this.min.copy(t2), this.max.copy(e), this;
    }
    setFromArray(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.length; e < n; e += 3) this.expandByPoint(Di.fromArray(t2, e));
      return this;
    }
    setFromBufferAttribute(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.count; e < n; e++) this.expandByPoint(Di.fromBufferAttribute(t2, e));
      return this;
    }
    setFromPoints(t2) {
      this.makeEmpty();
      for (let e = 0, n = t2.length; e < n; e++) this.expandByPoint(t2[e]);
      return this;
    }
    setFromCenterAndSize(t2, e) {
      const n = Di.copy(e).multiplyScalar(0.5);
      return this.min.copy(t2).sub(n), this.max.copy(t2).add(n), this;
    }
    setFromObject(t2, e = false) {
      return this.makeEmpty(), this.expandByObject(t2, e);
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.min.copy(t2.min), this.max.copy(t2.max), this;
    }
    makeEmpty() {
      return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
    }
    isEmpty() {
      return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
    }
    getCenter(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
    getSize(t2) {
      return this.isEmpty() ? t2.set(0, 0, 0) : t2.subVectors(this.max, this.min);
    }
    expandByPoint(t2) {
      return this.min.min(t2), this.max.max(t2), this;
    }
    expandByVector(t2) {
      return this.min.sub(t2), this.max.add(t2), this;
    }
    expandByScalar(t2) {
      return this.min.addScalar(-t2), this.max.addScalar(t2), this;
    }
    expandByObject(t2, e = false) {
      t2.updateWorldMatrix(false, false);
      const n = t2.geometry;
      if (void 0 !== n) {
        const i2 = n.getAttribute("position");
        if (true === e && void 0 !== i2 && true !== t2.isInstancedMesh) for (let e2 = 0, n2 = i2.count; e2 < n2; e2++) true === t2.isMesh ? t2.getVertexPosition(e2, Di) : Di.fromBufferAttribute(i2, e2), Di.applyMatrix4(t2.matrixWorld), this.expandByPoint(Di);
        else void 0 !== t2.boundingBox ? (null === t2.boundingBox && t2.computeBoundingBox(), Ni.copy(t2.boundingBox)) : (null === n.boundingBox && n.computeBoundingBox(), Ni.copy(n.boundingBox)), Ni.applyMatrix4(t2.matrixWorld), this.union(Ni);
      }
      const i = t2.children;
      for (let t3 = 0, n2 = i.length; t3 < n2; t3++) this.expandByObject(i[t3], e);
      return this;
    }
    containsPoint(t2) {
      return t2.x >= this.min.x && t2.x <= this.max.x && t2.y >= this.min.y && t2.y <= this.max.y && t2.z >= this.min.z && t2.z <= this.max.z;
    }
    containsBox(t2) {
      return this.min.x <= t2.min.x && t2.max.x <= this.max.x && this.min.y <= t2.min.y && t2.max.y <= this.max.y && this.min.z <= t2.min.z && t2.max.z <= this.max.z;
    }
    getParameter(t2, e) {
      return e.set((t2.x - this.min.x) / (this.max.x - this.min.x), (t2.y - this.min.y) / (this.max.y - this.min.y), (t2.z - this.min.z) / (this.max.z - this.min.z));
    }
    intersectsBox(t2) {
      return t2.max.x >= this.min.x && t2.min.x <= this.max.x && t2.max.y >= this.min.y && t2.min.y <= this.max.y && t2.max.z >= this.min.z && t2.min.z <= this.max.z;
    }
    intersectsSphere(t2) {
      return this.clampPoint(t2.center, Di), Di.distanceToSquared(t2.center) <= t2.radius * t2.radius;
    }
    intersectsPlane(t2) {
      let e, n;
      return t2.normal.x > 0 ? (e = t2.normal.x * this.min.x, n = t2.normal.x * this.max.x) : (e = t2.normal.x * this.max.x, n = t2.normal.x * this.min.x), t2.normal.y > 0 ? (e += t2.normal.y * this.min.y, n += t2.normal.y * this.max.y) : (e += t2.normal.y * this.max.y, n += t2.normal.y * this.min.y), t2.normal.z > 0 ? (e += t2.normal.z * this.min.z, n += t2.normal.z * this.max.z) : (e += t2.normal.z * this.max.z, n += t2.normal.z * this.min.z), e <= -t2.constant && n >= -t2.constant;
    }
    intersectsTriangle(t2) {
      if (this.isEmpty()) return false;
      this.getCenter(Hi), Gi.subVectors(this.max, Hi), Oi.subVectors(t2.a, Hi), Fi.subVectors(t2.b, Hi), Bi.subVectors(t2.c, Hi), zi.subVectors(Fi, Oi), ki.subVectors(Bi, Fi), Vi.subVectors(Oi, Bi);
      let e = [0, -zi.z, zi.y, 0, -ki.z, ki.y, 0, -Vi.z, Vi.y, zi.z, 0, -zi.x, ki.z, 0, -ki.x, Vi.z, 0, -Vi.x, -zi.y, zi.x, 0, -ki.y, ki.x, 0, -Vi.y, Vi.x, 0];
      return !!ji(e, Oi, Fi, Bi, Gi) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1], !!ji(e, Oi, Fi, Bi, Gi) && (Wi.crossVectors(zi, ki), e = [Wi.x, Wi.y, Wi.z], ji(e, Oi, Fi, Bi, Gi)));
    }
    clampPoint(t2, e) {
      return e.copy(t2).clamp(this.min, this.max);
    }
    distanceToPoint(t2) {
      return this.clampPoint(t2, Di).distanceTo(t2);
    }
    getBoundingSphere(t2) {
      return this.isEmpty() ? t2.makeEmpty() : (this.getCenter(t2.center), t2.radius = 0.5 * this.getSize(Di).length()), t2;
    }
    intersect(t2) {
      return this.min.max(t2.min), this.max.min(t2.max), this.isEmpty() && this.makeEmpty(), this;
    }
    union(t2) {
      return this.min.min(t2.min), this.max.max(t2.max), this;
    }
    applyMatrix4(t2) {
      return this.isEmpty() || (Ui[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t2), Ui[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t2), Ui[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t2), Ui[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t2), Ui[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t2), Ui[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t2), Ui[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t2), Ui[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t2), this.setFromPoints(Ui)), this;
    }
    translate(t2) {
      return this.min.add(t2), this.max.add(t2), this;
    }
    equals(t2) {
      return t2.min.equals(this.min) && t2.max.equals(this.max);
    }
  };
  var Ui = [new Ci(), new Ci(), new Ci(), new Ci(), new Ci(), new Ci(), new Ci(), new Ci()];
  var Di = new Ci();
  var Ni = new Li();
  var Oi = new Ci();
  var Fi = new Ci();
  var Bi = new Ci();
  var zi = new Ci();
  var ki = new Ci();
  var Vi = new Ci();
  var Hi = new Ci();
  var Gi = new Ci();
  var Wi = new Ci();
  var Xi = new Ci();
  function ji(t2, e, n, i, r) {
    for (let s = 0, a = t2.length - 3; s <= a; s += 3) {
      Xi.fromArray(t2, s);
      const a2 = r.x * Math.abs(Xi.x) + r.y * Math.abs(Xi.y) + r.z * Math.abs(Xi.z), o = e.dot(Xi), l = n.dot(Xi), c = i.dot(Xi);
      if (Math.max(-Math.max(o, l, c), Math.min(o, l, c)) > a2) return false;
    }
    return true;
  }
  var qi = new Li();
  var Yi = new Ci();
  var Zi = new Ci();
  var Ji = class {
    constructor(t2 = new Ci(), e = -1) {
      this.isSphere = true, this.center = t2, this.radius = e;
    }
    set(t2, e) {
      return this.center.copy(t2), this.radius = e, this;
    }
    setFromPoints(t2, e) {
      const n = this.center;
      void 0 !== e ? n.copy(e) : qi.setFromPoints(t2).getCenter(n);
      let i = 0;
      for (let e2 = 0, r = t2.length; e2 < r; e2++) i = Math.max(i, n.distanceToSquared(t2[e2]));
      return this.radius = Math.sqrt(i), this;
    }
    copy(t2) {
      return this.center.copy(t2.center), this.radius = t2.radius, this;
    }
    isEmpty() {
      return this.radius < 0;
    }
    makeEmpty() {
      return this.center.set(0, 0, 0), this.radius = -1, this;
    }
    containsPoint(t2) {
      return t2.distanceToSquared(this.center) <= this.radius * this.radius;
    }
    distanceToPoint(t2) {
      return t2.distanceTo(this.center) - this.radius;
    }
    intersectsSphere(t2) {
      const e = this.radius + t2.radius;
      return t2.center.distanceToSquared(this.center) <= e * e;
    }
    intersectsBox(t2) {
      return t2.intersectsSphere(this);
    }
    intersectsPlane(t2) {
      return Math.abs(t2.distanceToPoint(this.center)) <= this.radius;
    }
    clampPoint(t2, e) {
      const n = this.center.distanceToSquared(t2);
      return e.copy(t2), n > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
    }
    getBoundingBox(t2) {
      return this.isEmpty() ? (t2.makeEmpty(), t2) : (t2.set(this.center, this.center), t2.expandByScalar(this.radius), t2);
    }
    applyMatrix4(t2) {
      return this.center.applyMatrix4(t2), this.radius = this.radius * t2.getMaxScaleOnAxis(), this;
    }
    translate(t2) {
      return this.center.add(t2), this;
    }
    expandByPoint(t2) {
      if (this.isEmpty()) return this.center.copy(t2), this.radius = 0, this;
      Yi.subVectors(t2, this.center);
      const e = Yi.lengthSq();
      if (e > this.radius * this.radius) {
        const t3 = Math.sqrt(e), n = 0.5 * (t3 - this.radius);
        this.center.addScaledVector(Yi, n / t3), this.radius += n;
      }
      return this;
    }
    union(t2) {
      return t2.isEmpty() ? this : this.isEmpty() ? (this.copy(t2), this) : (true === this.center.equals(t2.center) ? this.radius = Math.max(this.radius, t2.radius) : (Zi.subVectors(t2.center, this.center).setLength(t2.radius), this.expandByPoint(Yi.copy(t2.center).add(Zi)), this.expandByPoint(Yi.copy(t2.center).sub(Zi))), this);
    }
    equals(t2) {
      return t2.center.equals(this.center) && t2.radius === this.radius;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var Ki = new Ci();
  var $i = new Ci();
  var Qi = new Ci();
  var tr = new Ci();
  var er = new Ci();
  var nr = new Ci();
  var ir = new Ci();
  var rr = class {
    constructor(t2 = new Ci(), e = new Ci(0, 0, -1)) {
      this.origin = t2, this.direction = e;
    }
    set(t2, e) {
      return this.origin.copy(t2), this.direction.copy(e), this;
    }
    copy(t2) {
      return this.origin.copy(t2.origin), this.direction.copy(t2.direction), this;
    }
    at(t2, e) {
      return e.copy(this.origin).addScaledVector(this.direction, t2);
    }
    lookAt(t2) {
      return this.direction.copy(t2).sub(this.origin).normalize(), this;
    }
    recast(t2) {
      return this.origin.copy(this.at(t2, Ki)), this;
    }
    closestPointToPoint(t2, e) {
      e.subVectors(t2, this.origin);
      const n = e.dot(this.direction);
      return n < 0 ? e.copy(this.origin) : e.copy(this.origin).addScaledVector(this.direction, n);
    }
    distanceToPoint(t2) {
      return Math.sqrt(this.distanceSqToPoint(t2));
    }
    distanceSqToPoint(t2) {
      const e = Ki.subVectors(t2, this.origin).dot(this.direction);
      return e < 0 ? this.origin.distanceToSquared(t2) : (Ki.copy(this.origin).addScaledVector(this.direction, e), Ki.distanceToSquared(t2));
    }
    distanceSqToSegment(t2, e, n, i) {
      $i.copy(t2).add(e).multiplyScalar(0.5), Qi.copy(e).sub(t2).normalize(), tr.copy(this.origin).sub($i);
      const r = 0.5 * t2.distanceTo(e), s = -this.direction.dot(Qi), a = tr.dot(this.direction), o = -tr.dot(Qi), l = tr.lengthSq(), c = Math.abs(1 - s * s);
      let h, u2, d2, p2;
      if (c > 0) if (h = s * o - a, u2 = s * a - o, p2 = r * c, h >= 0) if (u2 >= -p2) if (u2 <= p2) {
        const t3 = 1 / c;
        h *= t3, u2 *= t3, d2 = h * (h + s * u2 + 2 * a) + u2 * (s * h + u2 + 2 * o) + l;
      } else u2 = r, h = Math.max(0, -(s * u2 + a)), d2 = -h * h + u2 * (u2 + 2 * o) + l;
      else u2 = -r, h = Math.max(0, -(s * u2 + a)), d2 = -h * h + u2 * (u2 + 2 * o) + l;
      else u2 <= -p2 ? (h = Math.max(0, -(-s * r + a)), u2 = h > 0 ? -r : Math.min(Math.max(-r, -o), r), d2 = -h * h + u2 * (u2 + 2 * o) + l) : u2 <= p2 ? (h = 0, u2 = Math.min(Math.max(-r, -o), r), d2 = u2 * (u2 + 2 * o) + l) : (h = Math.max(0, -(s * r + a)), u2 = h > 0 ? r : Math.min(Math.max(-r, -o), r), d2 = -h * h + u2 * (u2 + 2 * o) + l);
      else u2 = s > 0 ? -r : r, h = Math.max(0, -(s * u2 + a)), d2 = -h * h + u2 * (u2 + 2 * o) + l;
      return n && n.copy(this.origin).addScaledVector(this.direction, h), i && i.copy($i).addScaledVector(Qi, u2), d2;
    }
    intersectSphere(t2, e) {
      Ki.subVectors(t2.center, this.origin);
      const n = Ki.dot(this.direction), i = Ki.dot(Ki) - n * n, r = t2.radius * t2.radius;
      if (i > r) return null;
      const s = Math.sqrt(r - i), a = n - s, o = n + s;
      return o < 0 ? null : a < 0 ? this.at(o, e) : this.at(a, e);
    }
    intersectsSphere(t2) {
      return this.distanceSqToPoint(t2.center) <= t2.radius * t2.radius;
    }
    distanceToPlane(t2) {
      const e = t2.normal.dot(this.direction);
      if (0 === e) return 0 === t2.distanceToPoint(this.origin) ? 0 : null;
      const n = -(this.origin.dot(t2.normal) + t2.constant) / e;
      return n >= 0 ? n : null;
    }
    intersectPlane(t2, e) {
      const n = this.distanceToPlane(t2);
      return null === n ? null : this.at(n, e);
    }
    intersectsPlane(t2) {
      const e = t2.distanceToPoint(this.origin);
      if (0 === e) return true;
      return t2.normal.dot(this.direction) * e < 0;
    }
    intersectBox(t2, e) {
      let n, i, r, s, a, o;
      const l = 1 / this.direction.x, c = 1 / this.direction.y, h = 1 / this.direction.z, u2 = this.origin;
      return l >= 0 ? (n = (t2.min.x - u2.x) * l, i = (t2.max.x - u2.x) * l) : (n = (t2.max.x - u2.x) * l, i = (t2.min.x - u2.x) * l), c >= 0 ? (r = (t2.min.y - u2.y) * c, s = (t2.max.y - u2.y) * c) : (r = (t2.max.y - u2.y) * c, s = (t2.min.y - u2.y) * c), n > s || r > i ? null : ((r > n || isNaN(n)) && (n = r), (s < i || isNaN(i)) && (i = s), h >= 0 ? (a = (t2.min.z - u2.z) * h, o = (t2.max.z - u2.z) * h) : (a = (t2.max.z - u2.z) * h, o = (t2.min.z - u2.z) * h), n > o || a > i ? null : ((a > n || n != n) && (n = a), (o < i || i != i) && (i = o), i < 0 ? null : this.at(n >= 0 ? n : i, e)));
    }
    intersectsBox(t2) {
      return null !== this.intersectBox(t2, Ki);
    }
    intersectTriangle(t2, e, n, i, r) {
      er.subVectors(e, t2), nr.subVectors(n, t2), ir.crossVectors(er, nr);
      let s, a = this.direction.dot(ir);
      if (a > 0) {
        if (i) return null;
        s = 1;
      } else {
        if (!(a < 0)) return null;
        s = -1, a = -a;
      }
      tr.subVectors(this.origin, t2);
      const o = s * this.direction.dot(nr.crossVectors(tr, nr));
      if (o < 0) return null;
      const l = s * this.direction.dot(er.cross(tr));
      if (l < 0) return null;
      if (o + l > a) return null;
      const c = -s * tr.dot(ir);
      return c < 0 ? null : this.at(c / a, r);
    }
    applyMatrix4(t2) {
      return this.origin.applyMatrix4(t2), this.direction.transformDirection(t2), this;
    }
    equals(t2) {
      return t2.origin.equals(this.origin) && t2.direction.equals(this.direction);
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var sr = class _sr {
    constructor(t2, e, n, i, r, s, a, o, l, c, h, u2, d2, p2, m, f) {
      _sr.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], void 0 !== t2 && this.set(t2, e, n, i, r, s, a, o, l, c, h, u2, d2, p2, m, f);
    }
    set(t2, e, n, i, r, s, a, o, l, c, h, u2, d2, p2, m, f) {
      const g = this.elements;
      return g[0] = t2, g[4] = e, g[8] = n, g[12] = i, g[1] = r, g[5] = s, g[9] = a, g[13] = o, g[2] = l, g[6] = c, g[10] = h, g[14] = u2, g[3] = d2, g[7] = p2, g[11] = m, g[15] = f, this;
    }
    identity() {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    clone() {
      return new _sr().fromArray(this.elements);
    }
    copy(t2) {
      const e = this.elements, n = t2.elements;
      return e[0] = n[0], e[1] = n[1], e[2] = n[2], e[3] = n[3], e[4] = n[4], e[5] = n[5], e[6] = n[6], e[7] = n[7], e[8] = n[8], e[9] = n[9], e[10] = n[10], e[11] = n[11], e[12] = n[12], e[13] = n[13], e[14] = n[14], e[15] = n[15], this;
    }
    copyPosition(t2) {
      const e = this.elements, n = t2.elements;
      return e[12] = n[12], e[13] = n[13], e[14] = n[14], this;
    }
    setFromMatrix3(t2) {
      const e = t2.elements;
      return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
    }
    extractBasis(t2, e, n) {
      return t2.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
    }
    makeBasis(t2, e, n) {
      return this.set(t2.x, e.x, n.x, 0, t2.y, e.y, n.y, 0, t2.z, e.z, n.z, 0, 0, 0, 0, 1), this;
    }
    extractRotation(t2) {
      const e = this.elements, n = t2.elements, i = 1 / ar.setFromMatrixColumn(t2, 0).length(), r = 1 / ar.setFromMatrixColumn(t2, 1).length(), s = 1 / ar.setFromMatrixColumn(t2, 2).length();
      return e[0] = n[0] * i, e[1] = n[1] * i, e[2] = n[2] * i, e[3] = 0, e[4] = n[4] * r, e[5] = n[5] * r, e[6] = n[6] * r, e[7] = 0, e[8] = n[8] * s, e[9] = n[9] * s, e[10] = n[10] * s, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromEuler(t2) {
      const e = this.elements, n = t2.x, i = t2.y, r = t2.z, s = Math.cos(n), a = Math.sin(n), o = Math.cos(i), l = Math.sin(i), c = Math.cos(r), h = Math.sin(r);
      if ("XYZ" === t2.order) {
        const t3 = s * c, n2 = s * h, i2 = a * c, r2 = a * h;
        e[0] = o * c, e[4] = -o * h, e[8] = l, e[1] = n2 + i2 * l, e[5] = t3 - r2 * l, e[9] = -a * o, e[2] = r2 - t3 * l, e[6] = i2 + n2 * l, e[10] = s * o;
      } else if ("YXZ" === t2.order) {
        const t3 = o * c, n2 = o * h, i2 = l * c, r2 = l * h;
        e[0] = t3 + r2 * a, e[4] = i2 * a - n2, e[8] = s * l, e[1] = s * h, e[5] = s * c, e[9] = -a, e[2] = n2 * a - i2, e[6] = r2 + t3 * a, e[10] = s * o;
      } else if ("ZXY" === t2.order) {
        const t3 = o * c, n2 = o * h, i2 = l * c, r2 = l * h;
        e[0] = t3 - r2 * a, e[4] = -s * h, e[8] = i2 + n2 * a, e[1] = n2 + i2 * a, e[5] = s * c, e[9] = r2 - t3 * a, e[2] = -s * l, e[6] = a, e[10] = s * o;
      } else if ("ZYX" === t2.order) {
        const t3 = s * c, n2 = s * h, i2 = a * c, r2 = a * h;
        e[0] = o * c, e[4] = i2 * l - n2, e[8] = t3 * l + r2, e[1] = o * h, e[5] = r2 * l + t3, e[9] = n2 * l - i2, e[2] = -l, e[6] = a * o, e[10] = s * o;
      } else if ("YZX" === t2.order) {
        const t3 = s * o, n2 = s * l, i2 = a * o, r2 = a * l;
        e[0] = o * c, e[4] = r2 - t3 * h, e[8] = i2 * h + n2, e[1] = h, e[5] = s * c, e[9] = -a * c, e[2] = -l * c, e[6] = n2 * h + i2, e[10] = t3 - r2 * h;
      } else if ("XZY" === t2.order) {
        const t3 = s * o, n2 = s * l, i2 = a * o, r2 = a * l;
        e[0] = o * c, e[4] = -h, e[8] = l * c, e[1] = t3 * h + r2, e[5] = s * c, e[9] = n2 * h - i2, e[2] = i2 * h - n2, e[6] = a * c, e[10] = r2 * h + t3;
      }
      return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
    }
    makeRotationFromQuaternion(t2) {
      return this.compose(lr, t2, cr);
    }
    lookAt(t2, e, n) {
      const i = this.elements;
      return dr.subVectors(t2, e), 0 === dr.lengthSq() && (dr.z = 1), dr.normalize(), hr.crossVectors(n, dr), 0 === hr.lengthSq() && (1 === Math.abs(n.z) ? dr.x += 1e-4 : dr.z += 1e-4, dr.normalize(), hr.crossVectors(n, dr)), hr.normalize(), ur.crossVectors(dr, hr), i[0] = hr.x, i[4] = ur.x, i[8] = dr.x, i[1] = hr.y, i[5] = ur.y, i[9] = dr.y, i[2] = hr.z, i[6] = ur.z, i[10] = dr.z, this;
    }
    multiply(t2) {
      return this.multiplyMatrices(this, t2);
    }
    premultiply(t2) {
      return this.multiplyMatrices(t2, this);
    }
    multiplyMatrices(t2, e) {
      const n = t2.elements, i = e.elements, r = this.elements, s = n[0], a = n[4], o = n[8], l = n[12], c = n[1], h = n[5], u2 = n[9], d2 = n[13], p2 = n[2], m = n[6], f = n[10], g = n[14], v = n[3], _ = n[7], x = n[11], y2 = n[15], M2 = i[0], S2 = i[4], b = i[8], T = i[12], w2 = i[1], E2 = i[5], A2 = i[9], R2 = i[13], C2 = i[2], I2 = i[6], P2 = i[10], L2 = i[14], U2 = i[3], D2 = i[7], N2 = i[11], O2 = i[15];
      return r[0] = s * M2 + a * w2 + o * C2 + l * U2, r[4] = s * S2 + a * E2 + o * I2 + l * D2, r[8] = s * b + a * A2 + o * P2 + l * N2, r[12] = s * T + a * R2 + o * L2 + l * O2, r[1] = c * M2 + h * w2 + u2 * C2 + d2 * U2, r[5] = c * S2 + h * E2 + u2 * I2 + d2 * D2, r[9] = c * b + h * A2 + u2 * P2 + d2 * N2, r[13] = c * T + h * R2 + u2 * L2 + d2 * O2, r[2] = p2 * M2 + m * w2 + f * C2 + g * U2, r[6] = p2 * S2 + m * E2 + f * I2 + g * D2, r[10] = p2 * b + m * A2 + f * P2 + g * N2, r[14] = p2 * T + m * R2 + f * L2 + g * O2, r[3] = v * M2 + _ * w2 + x * C2 + y2 * U2, r[7] = v * S2 + _ * E2 + x * I2 + y2 * D2, r[11] = v * b + _ * A2 + x * P2 + y2 * N2, r[15] = v * T + _ * R2 + x * L2 + y2 * O2, this;
    }
    multiplyScalar(t2) {
      const e = this.elements;
      return e[0] *= t2, e[4] *= t2, e[8] *= t2, e[12] *= t2, e[1] *= t2, e[5] *= t2, e[9] *= t2, e[13] *= t2, e[2] *= t2, e[6] *= t2, e[10] *= t2, e[14] *= t2, e[3] *= t2, e[7] *= t2, e[11] *= t2, e[15] *= t2, this;
    }
    determinant() {
      const t2 = this.elements, e = t2[0], n = t2[4], i = t2[8], r = t2[12], s = t2[1], a = t2[5], o = t2[9], l = t2[13], c = t2[2], h = t2[6], u2 = t2[10], d2 = t2[14];
      return t2[3] * (+r * o * h - i * l * h - r * a * u2 + n * l * u2 + i * a * d2 - n * o * d2) + t2[7] * (+e * o * d2 - e * l * u2 + r * s * u2 - i * s * d2 + i * l * c - r * o * c) + t2[11] * (+e * l * h - e * a * d2 - r * s * h + n * s * d2 + r * a * c - n * l * c) + t2[15] * (-i * a * c - e * o * h + e * a * u2 + i * s * h - n * s * u2 + n * o * c);
    }
    transpose() {
      const t2 = this.elements;
      let e;
      return e = t2[1], t2[1] = t2[4], t2[4] = e, e = t2[2], t2[2] = t2[8], t2[8] = e, e = t2[6], t2[6] = t2[9], t2[9] = e, e = t2[3], t2[3] = t2[12], t2[12] = e, e = t2[7], t2[7] = t2[13], t2[13] = e, e = t2[11], t2[11] = t2[14], t2[14] = e, this;
    }
    setPosition(t2, e, n) {
      const i = this.elements;
      return t2.isVector3 ? (i[12] = t2.x, i[13] = t2.y, i[14] = t2.z) : (i[12] = t2, i[13] = e, i[14] = n), this;
    }
    invert() {
      const t2 = this.elements, e = t2[0], n = t2[1], i = t2[2], r = t2[3], s = t2[4], a = t2[5], o = t2[6], l = t2[7], c = t2[8], h = t2[9], u2 = t2[10], d2 = t2[11], p2 = t2[12], m = t2[13], f = t2[14], g = t2[15], v = h * f * l - m * u2 * l + m * o * d2 - a * f * d2 - h * o * g + a * u2 * g, _ = p2 * u2 * l - c * f * l - p2 * o * d2 + s * f * d2 + c * o * g - s * u2 * g, x = c * m * l - p2 * h * l + p2 * a * d2 - s * m * d2 - c * a * g + s * h * g, y2 = p2 * h * o - c * m * o - p2 * a * u2 + s * m * u2 + c * a * f - s * h * f, M2 = e * v + n * _ + i * x + r * y2;
      if (0 === M2) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
      const S2 = 1 / M2;
      return t2[0] = v * S2, t2[1] = (m * u2 * r - h * f * r - m * i * d2 + n * f * d2 + h * i * g - n * u2 * g) * S2, t2[2] = (a * f * r - m * o * r + m * i * l - n * f * l - a * i * g + n * o * g) * S2, t2[3] = (h * o * r - a * u2 * r - h * i * l + n * u2 * l + a * i * d2 - n * o * d2) * S2, t2[4] = _ * S2, t2[5] = (c * f * r - p2 * u2 * r + p2 * i * d2 - e * f * d2 - c * i * g + e * u2 * g) * S2, t2[6] = (p2 * o * r - s * f * r - p2 * i * l + e * f * l + s * i * g - e * o * g) * S2, t2[7] = (s * u2 * r - c * o * r + c * i * l - e * u2 * l - s * i * d2 + e * o * d2) * S2, t2[8] = x * S2, t2[9] = (p2 * h * r - c * m * r - p2 * n * d2 + e * m * d2 + c * n * g - e * h * g) * S2, t2[10] = (s * m * r - p2 * a * r + p2 * n * l - e * m * l - s * n * g + e * a * g) * S2, t2[11] = (c * a * r - s * h * r - c * n * l + e * h * l + s * n * d2 - e * a * d2) * S2, t2[12] = y2 * S2, t2[13] = (c * m * i - p2 * h * i + p2 * n * u2 - e * m * u2 - c * n * f + e * h * f) * S2, t2[14] = (p2 * a * i - s * m * i - p2 * n * o + e * m * o + s * n * f - e * a * f) * S2, t2[15] = (s * h * i - c * a * i + c * n * o - e * h * o - s * n * u2 + e * a * u2) * S2, this;
    }
    scale(t2) {
      const e = this.elements, n = t2.x, i = t2.y, r = t2.z;
      return e[0] *= n, e[4] *= i, e[8] *= r, e[1] *= n, e[5] *= i, e[9] *= r, e[2] *= n, e[6] *= i, e[10] *= r, e[3] *= n, e[7] *= i, e[11] *= r, this;
    }
    getMaxScaleOnAxis() {
      const t2 = this.elements, e = t2[0] * t2[0] + t2[1] * t2[1] + t2[2] * t2[2], n = t2[4] * t2[4] + t2[5] * t2[5] + t2[6] * t2[6], i = t2[8] * t2[8] + t2[9] * t2[9] + t2[10] * t2[10];
      return Math.sqrt(Math.max(e, n, i));
    }
    makeTranslation(t2, e, n) {
      return t2.isVector3 ? this.set(1, 0, 0, t2.x, 0, 1, 0, t2.y, 0, 0, 1, t2.z, 0, 0, 0, 1) : this.set(1, 0, 0, t2, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1), this;
    }
    makeRotationX(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationY(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1), this;
    }
    makeRotationZ(t2) {
      const e = Math.cos(t2), n = Math.sin(t2);
      return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    }
    makeRotationAxis(t2, e) {
      const n = Math.cos(e), i = Math.sin(e), r = 1 - n, s = t2.x, a = t2.y, o = t2.z, l = r * s, c = r * a;
      return this.set(l * s + n, l * a - i * o, l * o + i * a, 0, l * a + i * o, c * a + n, c * o - i * s, 0, l * o - i * a, c * o + i * s, r * o * o + n, 0, 0, 0, 0, 1), this;
    }
    makeScale(t2, e, n) {
      return this.set(t2, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
    }
    makeShear(t2, e, n, i, r, s) {
      return this.set(1, n, r, 0, t2, 1, s, 0, e, i, 1, 0, 0, 0, 0, 1), this;
    }
    compose(t2, e, n) {
      const i = this.elements, r = e._x, s = e._y, a = e._z, o = e._w, l = r + r, c = s + s, h = a + a, u2 = r * l, d2 = r * c, p2 = r * h, m = s * c, f = s * h, g = a * h, v = o * l, _ = o * c, x = o * h, y2 = n.x, M2 = n.y, S2 = n.z;
      return i[0] = (1 - (m + g)) * y2, i[1] = (d2 + x) * y2, i[2] = (p2 - _) * y2, i[3] = 0, i[4] = (d2 - x) * M2, i[5] = (1 - (u2 + g)) * M2, i[6] = (f + v) * M2, i[7] = 0, i[8] = (p2 + _) * S2, i[9] = (f - v) * S2, i[10] = (1 - (u2 + m)) * S2, i[11] = 0, i[12] = t2.x, i[13] = t2.y, i[14] = t2.z, i[15] = 1, this;
    }
    decompose(t2, e, n) {
      const i = this.elements;
      let r = ar.set(i[0], i[1], i[2]).length();
      const s = ar.set(i[4], i[5], i[6]).length(), a = ar.set(i[8], i[9], i[10]).length();
      this.determinant() < 0 && (r = -r), t2.x = i[12], t2.y = i[13], t2.z = i[14], or.copy(this);
      const o = 1 / r, l = 1 / s, c = 1 / a;
      return or.elements[0] *= o, or.elements[1] *= o, or.elements[2] *= o, or.elements[4] *= l, or.elements[5] *= l, or.elements[6] *= l, or.elements[8] *= c, or.elements[9] *= c, or.elements[10] *= c, e.setFromRotationMatrix(or), n.x = r, n.y = s, n.z = a, this;
    }
    makePerspective(t2, e, n, i, r, s, a = 2e3) {
      const o = this.elements, l = 2 * r / (e - t2), c = 2 * r / (n - i), h = (e + t2) / (e - t2), u2 = (n + i) / (n - i);
      let d2, p2;
      if (a === On) d2 = -(s + r) / (s - r), p2 = -2 * s * r / (s - r);
      else {
        if (a !== Fn) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
        d2 = -s / (s - r), p2 = -s * r / (s - r);
      }
      return o[0] = l, o[4] = 0, o[8] = h, o[12] = 0, o[1] = 0, o[5] = c, o[9] = u2, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d2, o[14] = p2, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
    }
    makeOrthographic(t2, e, n, i, r, s, a = 2e3) {
      const o = this.elements, l = 1 / (e - t2), c = 1 / (n - i), h = 1 / (s - r), u2 = (e + t2) * l, d2 = (n + i) * c;
      let p2, m;
      if (a === On) p2 = (s + r) * h, m = -2 * h;
      else {
        if (a !== Fn) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
        p2 = r * h, m = -1 * h;
      }
      return o[0] = 2 * l, o[4] = 0, o[8] = 0, o[12] = -u2, o[1] = 0, o[5] = 2 * c, o[9] = 0, o[13] = -d2, o[2] = 0, o[6] = 0, o[10] = m, o[14] = -p2, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
    }
    equals(t2) {
      const e = this.elements, n = t2.elements;
      for (let t3 = 0; t3 < 16; t3++) if (e[t3] !== n[t3]) return false;
      return true;
    }
    fromArray(t2, e = 0) {
      for (let n = 0; n < 16; n++) this.elements[n] = t2[n + e];
      return this;
    }
    toArray(t2 = [], e = 0) {
      const n = this.elements;
      return t2[e] = n[0], t2[e + 1] = n[1], t2[e + 2] = n[2], t2[e + 3] = n[3], t2[e + 4] = n[4], t2[e + 5] = n[5], t2[e + 6] = n[6], t2[e + 7] = n[7], t2[e + 8] = n[8], t2[e + 9] = n[9], t2[e + 10] = n[10], t2[e + 11] = n[11], t2[e + 12] = n[12], t2[e + 13] = n[13], t2[e + 14] = n[14], t2[e + 15] = n[15], t2;
    }
  };
  var ar = new Ci();
  var or = new sr();
  var lr = new Ci(0, 0, 0);
  var cr = new Ci(1, 1, 1);
  var hr = new Ci();
  var ur = new Ci();
  var dr = new Ci();
  var pr = new sr();
  var mr = new Ri();
  var fr = class _fr {
    constructor(t2 = 0, e = 0, n = 0, i = _fr.DEFAULT_ORDER) {
      this.isEuler = true, this._x = t2, this._y = e, this._z = n, this._order = i;
    }
    get x() {
      return this._x;
    }
    set x(t2) {
      this._x = t2, this._onChangeCallback();
    }
    get y() {
      return this._y;
    }
    set y(t2) {
      this._y = t2, this._onChangeCallback();
    }
    get z() {
      return this._z;
    }
    set z(t2) {
      this._z = t2, this._onChangeCallback();
    }
    get order() {
      return this._order;
    }
    set order(t2) {
      this._order = t2, this._onChangeCallback();
    }
    set(t2, e, n, i = this._order) {
      return this._x = t2, this._y = e, this._z = n, this._order = i, this._onChangeCallback(), this;
    }
    clone() {
      return new this.constructor(this._x, this._y, this._z, this._order);
    }
    copy(t2) {
      return this._x = t2._x, this._y = t2._y, this._z = t2._z, this._order = t2._order, this._onChangeCallback(), this;
    }
    setFromRotationMatrix(t2, e = this._order, n = true) {
      const i = t2.elements, r = i[0], s = i[4], a = i[8], o = i[1], l = i[5], c = i[9], h = i[2], u2 = i[6], d2 = i[10];
      switch (e) {
        case "XYZ":
          this._y = Math.asin(Wn(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(-c, d2), this._z = Math.atan2(-s, r)) : (this._x = Math.atan2(u2, l), this._z = 0);
          break;
        case "YXZ":
          this._x = Math.asin(-Wn(c, -1, 1)), Math.abs(c) < 0.9999999 ? (this._y = Math.atan2(a, d2), this._z = Math.atan2(o, l)) : (this._y = Math.atan2(-h, r), this._z = 0);
          break;
        case "ZXY":
          this._x = Math.asin(Wn(u2, -1, 1)), Math.abs(u2) < 0.9999999 ? (this._y = Math.atan2(-h, d2), this._z = Math.atan2(-s, l)) : (this._y = 0, this._z = Math.atan2(o, r));
          break;
        case "ZYX":
          this._y = Math.asin(-Wn(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._x = Math.atan2(u2, d2), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-s, l));
          break;
        case "YZX":
          this._z = Math.asin(Wn(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, r)) : (this._x = 0, this._y = Math.atan2(a, d2));
          break;
        case "XZY":
          this._z = Math.asin(-Wn(s, -1, 1)), Math.abs(s) < 0.9999999 ? (this._x = Math.atan2(u2, l), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-c, d2), this._y = 0);
          break;
        default:
          console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
      }
      return this._order = e, true === n && this._onChangeCallback(), this;
    }
    setFromQuaternion(t2, e, n) {
      return pr.makeRotationFromQuaternion(t2), this.setFromRotationMatrix(pr, e, n);
    }
    setFromVector3(t2, e = this._order) {
      return this.set(t2.x, t2.y, t2.z, e);
    }
    reorder(t2) {
      return mr.setFromEuler(this), this.setFromQuaternion(mr, t2);
    }
    equals(t2) {
      return t2._x === this._x && t2._y === this._y && t2._z === this._z && t2._order === this._order;
    }
    fromArray(t2) {
      return this._x = t2[0], this._y = t2[1], this._z = t2[2], void 0 !== t2[3] && (this._order = t2[3]), this._onChangeCallback(), this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this._x, t2[e + 1] = this._y, t2[e + 2] = this._z, t2[e + 3] = this._order, t2;
    }
    _onChange(t2) {
      return this._onChangeCallback = t2, this;
    }
    _onChangeCallback() {
    }
    *[Symbol.iterator]() {
      yield this._x, yield this._y, yield this._z, yield this._order;
    }
  };
  fr.DEFAULT_ORDER = "XYZ";
  var gr = class {
    constructor() {
      this.mask = 1;
    }
    set(t2) {
      this.mask = 1 << t2 >>> 0;
    }
    enable(t2) {
      this.mask |= 1 << t2;
    }
    enableAll() {
      this.mask = -1;
    }
    toggle(t2) {
      this.mask ^= 1 << t2;
    }
    disable(t2) {
      this.mask &= ~(1 << t2);
    }
    disableAll() {
      this.mask = 0;
    }
    test(t2) {
      return !!(this.mask & t2.mask);
    }
    isEnabled(t2) {
      return !!(this.mask & 1 << t2);
    }
  };
  var vr = 0;
  var _r = new Ci();
  var xr = new Ri();
  var yr = new sr();
  var Mr = new Ci();
  var Sr = new Ci();
  var br = new Ci();
  var Tr = new Ri();
  var wr = new Ci(1, 0, 0);
  var Er = new Ci(0, 1, 0);
  var Ar = new Ci(0, 0, 1);
  var Rr = { type: "added" };
  var Cr = { type: "removed" };
  var Ir = { type: "childadded", child: null };
  var Pr = { type: "childremoved", child: null };
  var Lr = class _Lr extends Bn {
    constructor() {
      super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: vr++ }), this.uuid = Gn(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = _Lr.DEFAULT_UP.clone();
      const t2 = new Ci(), e = new fr(), n = new Ri(), i = new Ci(1, 1, 1);
      e._onChange((function() {
        n.setFromEuler(e, false);
      })), n._onChange((function() {
        e.setFromQuaternion(n, void 0, false);
      })), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: t2 }, rotation: { configurable: true, enumerable: true, value: e }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new sr() }, normalMatrix: { value: new Kn() } }), this.matrix = new sr(), this.matrixWorld = new sr(), this.matrixAutoUpdate = _Lr.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = _Lr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new gr(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
    }
    onBeforeShadow() {
    }
    onAfterShadow() {
    }
    onBeforeRender() {
    }
    onAfterRender() {
    }
    applyMatrix4(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t2), this.matrix.decompose(this.position, this.quaternion, this.scale);
    }
    applyQuaternion(t2) {
      return this.quaternion.premultiply(t2), this;
    }
    setRotationFromAxisAngle(t2, e) {
      this.quaternion.setFromAxisAngle(t2, e);
    }
    setRotationFromEuler(t2) {
      this.quaternion.setFromEuler(t2, true);
    }
    setRotationFromMatrix(t2) {
      this.quaternion.setFromRotationMatrix(t2);
    }
    setRotationFromQuaternion(t2) {
      this.quaternion.copy(t2);
    }
    rotateOnAxis(t2, e) {
      return xr.setFromAxisAngle(t2, e), this.quaternion.multiply(xr), this;
    }
    rotateOnWorldAxis(t2, e) {
      return xr.setFromAxisAngle(t2, e), this.quaternion.premultiply(xr), this;
    }
    rotateX(t2) {
      return this.rotateOnAxis(wr, t2);
    }
    rotateY(t2) {
      return this.rotateOnAxis(Er, t2);
    }
    rotateZ(t2) {
      return this.rotateOnAxis(Ar, t2);
    }
    translateOnAxis(t2, e) {
      return _r.copy(t2).applyQuaternion(this.quaternion), this.position.add(_r.multiplyScalar(e)), this;
    }
    translateX(t2) {
      return this.translateOnAxis(wr, t2);
    }
    translateY(t2) {
      return this.translateOnAxis(Er, t2);
    }
    translateZ(t2) {
      return this.translateOnAxis(Ar, t2);
    }
    localToWorld(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(this.matrixWorld);
    }
    worldToLocal(t2) {
      return this.updateWorldMatrix(true, false), t2.applyMatrix4(yr.copy(this.matrixWorld).invert());
    }
    lookAt(t2, e, n) {
      t2.isVector3 ? Mr.copy(t2) : Mr.set(t2, e, n);
      const i = this.parent;
      this.updateWorldMatrix(true, false), Sr.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? yr.lookAt(Sr, Mr, this.up) : yr.lookAt(Mr, Sr, this.up), this.quaternion.setFromRotationMatrix(yr), i && (yr.extractRotation(i.matrixWorld), xr.setFromRotationMatrix(yr), this.quaternion.premultiply(xr.invert()));
    }
    add(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.add(arguments[t3]);
        return this;
      }
      return t2 === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t2), this) : (t2 && t2.isObject3D ? (t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.dispatchEvent(Rr), Ir.child = t2, this.dispatchEvent(Ir), Ir.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t2), this);
    }
    remove(t2) {
      if (arguments.length > 1) {
        for (let t3 = 0; t3 < arguments.length; t3++) this.remove(arguments[t3]);
        return this;
      }
      const e = this.children.indexOf(t2);
      return -1 !== e && (t2.parent = null, this.children.splice(e, 1), t2.dispatchEvent(Cr), Pr.child = t2, this.dispatchEvent(Pr), Pr.child = null), this;
    }
    removeFromParent() {
      const t2 = this.parent;
      return null !== t2 && t2.remove(this), this;
    }
    clear() {
      return this.remove(...this.children);
    }
    attach(t2) {
      return this.updateWorldMatrix(true, false), yr.copy(this.matrixWorld).invert(), null !== t2.parent && (t2.parent.updateWorldMatrix(true, false), yr.multiply(t2.parent.matrixWorld)), t2.applyMatrix4(yr), t2.removeFromParent(), t2.parent = this, this.children.push(t2), t2.updateWorldMatrix(false, true), t2.dispatchEvent(Rr), Ir.child = t2, this.dispatchEvent(Ir), Ir.child = null, this;
    }
    getObjectById(t2) {
      return this.getObjectByProperty("id", t2);
    }
    getObjectByName(t2) {
      return this.getObjectByProperty("name", t2);
    }
    getObjectByProperty(t2, e) {
      if (this[t2] === e) return this;
      for (let n = 0, i = this.children.length; n < i; n++) {
        const i2 = this.children[n].getObjectByProperty(t2, e);
        if (void 0 !== i2) return i2;
      }
    }
    getObjectsByProperty(t2, e, n = []) {
      this[t2] === e && n.push(this);
      const i = this.children;
      for (let r = 0, s = i.length; r < s; r++) i[r].getObjectsByProperty(t2, e, n);
      return n;
    }
    getWorldPosition(t2) {
      return this.updateWorldMatrix(true, false), t2.setFromMatrixPosition(this.matrixWorld);
    }
    getWorldQuaternion(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Sr, t2, br), t2;
    }
    getWorldScale(t2) {
      return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(Sr, Tr, t2), t2;
    }
    getWorldDirection(t2) {
      this.updateWorldMatrix(true, false);
      const e = this.matrixWorld.elements;
      return t2.set(e[8], e[9], e[10]).normalize();
    }
    raycast() {
    }
    traverse(t2) {
      t2(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverse(t2);
    }
    traverseVisible(t2) {
      if (false === this.visible) return;
      t2(this);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) e[n].traverseVisible(t2);
    }
    traverseAncestors(t2) {
      const e = this.parent;
      null !== e && (t2(e), e.traverseAncestors(t2));
    }
    updateMatrix() {
      this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
    }
    updateMatrixWorld(t2) {
      this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t2) && (true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, t2 = true);
      const e = this.children;
      for (let n = 0, i = e.length; n < i; n++) {
        e[n].updateMatrixWorld(t2);
      }
    }
    updateWorldMatrix(t2, e) {
      const n = this.parent;
      if (true === t2 && null !== n && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), true === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), true === e) {
        const t3 = this.children;
        for (let e2 = 0, n2 = t3.length; e2 < n2; e2++) {
          t3[e2].updateWorldMatrix(false, true);
        }
      }
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2, n = {};
      e && (t2 = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
      const i = {};
      function r(e2, n2) {
        return void 0 === e2[n2.uuid] && (e2[n2.uuid] = n2.toJSON(t2)), n2.uuid;
      }
      if (i.uuid = this.uuid, i.type = this.type, "" !== this.name && (i.name = this.name), true === this.castShadow && (i.castShadow = true), true === this.receiveShadow && (i.receiveShadow = true), false === this.visible && (i.visible = false), false === this.frustumCulled && (i.frustumCulled = false), 0 !== this.renderOrder && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), false === this.matrixAutoUpdate && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map(((t3) => ({ boxInitialized: t3.boxInitialized, boxMin: t3.box.min.toArray(), boxMax: t3.box.max.toArray(), sphereInitialized: t3.sphereInitialized, sphereRadius: t3.sphere.radius, sphereCenter: t3.sphere.center.toArray() }))), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(t2), null !== this._colorsTexture && (i.colorsTexture = this._colorsTexture.toJSON(t2)), null !== this.boundingSphere && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), null !== this.boundingBox && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() })), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t2).uuid)), this.environment && this.environment.isTexture && true !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t2).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) {
        i.geometry = r(t2.geometries, this.geometry);
        const e2 = this.geometry.parameters;
        if (void 0 !== e2 && void 0 !== e2.shapes) {
          const n2 = e2.shapes;
          if (Array.isArray(n2)) for (let e3 = 0, i2 = n2.length; e3 < i2; e3++) {
            const i3 = n2[e3];
            r(t2.shapes, i3);
          }
          else r(t2.shapes, n2);
        }
      }
      if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (r(t2.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
        const e2 = [];
        for (let n2 = 0, i2 = this.material.length; n2 < i2; n2++) e2.push(r(t2.materials, this.material[n2]));
        i.material = e2;
      } else i.material = r(t2.materials, this.material);
      if (this.children.length > 0) {
        i.children = [];
        for (let e2 = 0; e2 < this.children.length; e2++) i.children.push(this.children[e2].toJSON(t2).object);
      }
      if (this.animations.length > 0) {
        i.animations = [];
        for (let e2 = 0; e2 < this.animations.length; e2++) {
          const n2 = this.animations[e2];
          i.animations.push(r(t2.animations, n2));
        }
      }
      if (e) {
        const e2 = s(t2.geometries), i2 = s(t2.materials), r2 = s(t2.textures), a = s(t2.images), o = s(t2.shapes), l = s(t2.skeletons), c = s(t2.animations), h = s(t2.nodes);
        e2.length > 0 && (n.geometries = e2), i2.length > 0 && (n.materials = i2), r2.length > 0 && (n.textures = r2), a.length > 0 && (n.images = a), o.length > 0 && (n.shapes = o), l.length > 0 && (n.skeletons = l), c.length > 0 && (n.animations = c), h.length > 0 && (n.nodes = h);
      }
      return n.object = i, n;
      function s(t3) {
        const e2 = [];
        for (const n2 in t3) {
          const i2 = t3[n2];
          delete i2.metadata, e2.push(i2);
        }
        return e2;
      }
    }
    clone(t2) {
      return new this.constructor().copy(this, t2);
    }
    copy(t2, e = true) {
      if (this.name = t2.name, this.up.copy(t2.up), this.position.copy(t2.position), this.rotation.order = t2.rotation.order, this.quaternion.copy(t2.quaternion), this.scale.copy(t2.scale), this.matrix.copy(t2.matrix), this.matrixWorld.copy(t2.matrixWorld), this.matrixAutoUpdate = t2.matrixAutoUpdate, this.matrixWorldAutoUpdate = t2.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t2.matrixWorldNeedsUpdate, this.layers.mask = t2.layers.mask, this.visible = t2.visible, this.castShadow = t2.castShadow, this.receiveShadow = t2.receiveShadow, this.frustumCulled = t2.frustumCulled, this.renderOrder = t2.renderOrder, this.animations = t2.animations.slice(), this.userData = JSON.parse(JSON.stringify(t2.userData)), true === e) for (let e2 = 0; e2 < t2.children.length; e2++) {
        const n = t2.children[e2];
        this.add(n.clone());
      }
      return this;
    }
  };
  Lr.DEFAULT_UP = new Ci(0, 1, 0), Lr.DEFAULT_MATRIX_AUTO_UPDATE = true, Lr.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
  var Ur = new Ci();
  var Dr = new Ci();
  var Nr = new Ci();
  var Or = new Ci();
  var Fr = new Ci();
  var Br = new Ci();
  var zr = new Ci();
  var kr = new Ci();
  var Vr = new Ci();
  var Hr = new Ci();
  var Gr = new Mi();
  var Wr = new Mi();
  var Xr = new Mi();
  var jr = class _jr {
    constructor(t2 = new Ci(), e = new Ci(), n = new Ci()) {
      this.a = t2, this.b = e, this.c = n;
    }
    static getNormal(t2, e, n, i) {
      i.subVectors(n, e), Ur.subVectors(t2, e), i.cross(Ur);
      const r = i.lengthSq();
      return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
    }
    static getBarycoord(t2, e, n, i, r) {
      Ur.subVectors(i, e), Dr.subVectors(n, e), Nr.subVectors(t2, e);
      const s = Ur.dot(Ur), a = Ur.dot(Dr), o = Ur.dot(Nr), l = Dr.dot(Dr), c = Dr.dot(Nr), h = s * l - a * a;
      if (0 === h) return r.set(0, 0, 0), null;
      const u2 = 1 / h, d2 = (l * o - a * c) * u2, p2 = (s * c - a * o) * u2;
      return r.set(1 - d2 - p2, p2, d2);
    }
    static containsPoint(t2, e, n, i) {
      return null !== this.getBarycoord(t2, e, n, i, Or) && (Or.x >= 0 && Or.y >= 0 && Or.x + Or.y <= 1);
    }
    static getInterpolation(t2, e, n, i, r, s, a, o) {
      return null === this.getBarycoord(t2, e, n, i, Or) ? (o.x = 0, o.y = 0, "z" in o && (o.z = 0), "w" in o && (o.w = 0), null) : (o.setScalar(0), o.addScaledVector(r, Or.x), o.addScaledVector(s, Or.y), o.addScaledVector(a, Or.z), o);
    }
    static getInterpolatedAttribute(t2, e, n, i, r, s) {
      return Gr.setScalar(0), Wr.setScalar(0), Xr.setScalar(0), Gr.fromBufferAttribute(t2, e), Wr.fromBufferAttribute(t2, n), Xr.fromBufferAttribute(t2, i), s.setScalar(0), s.addScaledVector(Gr, r.x), s.addScaledVector(Wr, r.y), s.addScaledVector(Xr, r.z), s;
    }
    static isFrontFacing(t2, e, n, i) {
      return Ur.subVectors(n, e), Dr.subVectors(t2, e), Ur.cross(Dr).dot(i) < 0;
    }
    set(t2, e, n) {
      return this.a.copy(t2), this.b.copy(e), this.c.copy(n), this;
    }
    setFromPointsAndIndices(t2, e, n, i) {
      return this.a.copy(t2[e]), this.b.copy(t2[n]), this.c.copy(t2[i]), this;
    }
    setFromAttributeAndIndices(t2, e, n, i) {
      return this.a.fromBufferAttribute(t2, e), this.b.fromBufferAttribute(t2, n), this.c.fromBufferAttribute(t2, i), this;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.a.copy(t2.a), this.b.copy(t2.b), this.c.copy(t2.c), this;
    }
    getArea() {
      return Ur.subVectors(this.c, this.b), Dr.subVectors(this.a, this.b), 0.5 * Ur.cross(Dr).length();
    }
    getMidpoint(t2) {
      return t2.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
    }
    getNormal(t2) {
      return _jr.getNormal(this.a, this.b, this.c, t2);
    }
    getPlane(t2) {
      return t2.setFromCoplanarPoints(this.a, this.b, this.c);
    }
    getBarycoord(t2, e) {
      return _jr.getBarycoord(t2, this.a, this.b, this.c, e);
    }
    getInterpolation(t2, e, n, i, r) {
      return _jr.getInterpolation(t2, this.a, this.b, this.c, e, n, i, r);
    }
    containsPoint(t2) {
      return _jr.containsPoint(t2, this.a, this.b, this.c);
    }
    isFrontFacing(t2) {
      return _jr.isFrontFacing(this.a, this.b, this.c, t2);
    }
    intersectsBox(t2) {
      return t2.intersectsTriangle(this);
    }
    closestPointToPoint(t2, e) {
      const n = this.a, i = this.b, r = this.c;
      let s, a;
      Fr.subVectors(i, n), Br.subVectors(r, n), kr.subVectors(t2, n);
      const o = Fr.dot(kr), l = Br.dot(kr);
      if (o <= 0 && l <= 0) return e.copy(n);
      Vr.subVectors(t2, i);
      const c = Fr.dot(Vr), h = Br.dot(Vr);
      if (c >= 0 && h <= c) return e.copy(i);
      const u2 = o * h - c * l;
      if (u2 <= 0 && o >= 0 && c <= 0) return s = o / (o - c), e.copy(n).addScaledVector(Fr, s);
      Hr.subVectors(t2, r);
      const d2 = Fr.dot(Hr), p2 = Br.dot(Hr);
      if (p2 >= 0 && d2 <= p2) return e.copy(r);
      const m = d2 * l - o * p2;
      if (m <= 0 && l >= 0 && p2 <= 0) return a = l / (l - p2), e.copy(n).addScaledVector(Br, a);
      const f = c * p2 - d2 * h;
      if (f <= 0 && h - c >= 0 && d2 - p2 >= 0) return zr.subVectors(r, i), a = (h - c) / (h - c + (d2 - p2)), e.copy(i).addScaledVector(zr, a);
      const g = 1 / (f + m + u2);
      return s = m * g, a = u2 * g, e.copy(n).addScaledVector(Fr, s).addScaledVector(Br, a);
    }
    equals(t2) {
      return t2.a.equals(this.a) && t2.b.equals(this.b) && t2.c.equals(this.c);
    }
  };
  var qr = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 };
  var Yr = { h: 0, s: 0, l: 0 };
  var Zr = { h: 0, s: 0, l: 0 };
  function Jr(t2, e, n) {
    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t2 + 6 * (e - t2) * n : n < 0.5 ? e : n < 2 / 3 ? t2 + 6 * (e - t2) * (2 / 3 - n) : t2;
  }
  var Kr = class {
    constructor(t2, e, n) {
      return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(t2, e, n);
    }
    set(t2, e, n) {
      if (void 0 === e && void 0 === n) {
        const e2 = t2;
        e2 && e2.isColor ? this.copy(e2) : "number" == typeof e2 ? this.setHex(e2) : "string" == typeof e2 && this.setStyle(e2);
      } else this.setRGB(t2, e, n);
      return this;
    }
    setScalar(t2) {
      return this.r = t2, this.g = t2, this.b = t2, this;
    }
    setHex(t2, e = Je) {
      return t2 = Math.floor(t2), this.r = (t2 >> 16 & 255) / 255, this.g = (t2 >> 8 & 255) / 255, this.b = (255 & t2) / 255, ai.toWorkingColorSpace(this, e), this;
    }
    setRGB(t2, e, n, i = ai.workingColorSpace) {
      return this.r = t2, this.g = e, this.b = n, ai.toWorkingColorSpace(this, i), this;
    }
    setHSL(t2, e, n, i = ai.workingColorSpace) {
      if (t2 = Xn(t2, 1), e = Wn(e, 0, 1), n = Wn(n, 0, 1), 0 === e) this.r = this.g = this.b = n;
      else {
        const i2 = n <= 0.5 ? n * (1 + e) : n + e - n * e, r = 2 * n - i2;
        this.r = Jr(r, i2, t2 + 1 / 3), this.g = Jr(r, i2, t2), this.b = Jr(r, i2, t2 - 1 / 3);
      }
      return ai.toWorkingColorSpace(this, i), this;
    }
    setStyle(t2, e = Je) {
      function n(e2) {
        void 0 !== e2 && parseFloat(e2) < 1 && console.warn("THREE.Color: Alpha component of " + t2 + " will be ignored.");
      }
      let i;
      if (i = /^(\w+)\(([^\)]*)\)/.exec(t2)) {
        let r;
        const s = i[1], a = i[2];
        switch (s) {
          case "rgb":
          case "rgba":
            if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, e);
            if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, e);
            break;
          case "hsl":
          case "hsla":
            if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, e);
            break;
          default:
            console.warn("THREE.Color: Unknown color model " + t2);
        }
      } else if (i = /^\#([A-Fa-f\d]+)$/.exec(t2)) {
        const n2 = i[1], r = n2.length;
        if (3 === r) return this.setRGB(parseInt(n2.charAt(0), 16) / 15, parseInt(n2.charAt(1), 16) / 15, parseInt(n2.charAt(2), 16) / 15, e);
        if (6 === r) return this.setHex(parseInt(n2, 16), e);
        console.warn("THREE.Color: Invalid hex color " + t2);
      } else if (t2 && t2.length > 0) return this.setColorName(t2, e);
      return this;
    }
    setColorName(t2, e = Je) {
      const n = qr[t2.toLowerCase()];
      return void 0 !== n ? this.setHex(n, e) : console.warn("THREE.Color: Unknown color " + t2), this;
    }
    clone() {
      return new this.constructor(this.r, this.g, this.b);
    }
    copy(t2) {
      return this.r = t2.r, this.g = t2.g, this.b = t2.b, this;
    }
    copySRGBToLinear(t2) {
      return this.r = oi(t2.r), this.g = oi(t2.g), this.b = oi(t2.b), this;
    }
    copyLinearToSRGB(t2) {
      return this.r = li(t2.r), this.g = li(t2.g), this.b = li(t2.b), this;
    }
    convertSRGBToLinear() {
      return this.copySRGBToLinear(this), this;
    }
    convertLinearToSRGB() {
      return this.copyLinearToSRGB(this), this;
    }
    getHex(t2 = Je) {
      return ai.fromWorkingColorSpace($r.copy(this), t2), 65536 * Math.round(Wn(255 * $r.r, 0, 255)) + 256 * Math.round(Wn(255 * $r.g, 0, 255)) + Math.round(Wn(255 * $r.b, 0, 255));
    }
    getHexString(t2 = Je) {
      return ("000000" + this.getHex(t2).toString(16)).slice(-6);
    }
    getHSL(t2, e = ai.workingColorSpace) {
      ai.fromWorkingColorSpace($r.copy(this), e);
      const n = $r.r, i = $r.g, r = $r.b, s = Math.max(n, i, r), a = Math.min(n, i, r);
      let o, l;
      const c = (a + s) / 2;
      if (a === s) o = 0, l = 0;
      else {
        const t3 = s - a;
        switch (l = c <= 0.5 ? t3 / (s + a) : t3 / (2 - s - a), s) {
          case n:
            o = (i - r) / t3 + (i < r ? 6 : 0);
            break;
          case i:
            o = (r - n) / t3 + 2;
            break;
          case r:
            o = (n - i) / t3 + 4;
        }
        o /= 6;
      }
      return t2.h = o, t2.s = l, t2.l = c, t2;
    }
    getRGB(t2, e = ai.workingColorSpace) {
      return ai.fromWorkingColorSpace($r.copy(this), e), t2.r = $r.r, t2.g = $r.g, t2.b = $r.b, t2;
    }
    getStyle(t2 = Je) {
      ai.fromWorkingColorSpace($r.copy(this), t2);
      const e = $r.r, n = $r.g, i = $r.b;
      return t2 !== Je ? `color(${t2} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * n)},${Math.round(255 * i)})`;
    }
    offsetHSL(t2, e, n) {
      return this.getHSL(Yr), this.setHSL(Yr.h + t2, Yr.s + e, Yr.l + n);
    }
    add(t2) {
      return this.r += t2.r, this.g += t2.g, this.b += t2.b, this;
    }
    addColors(t2, e) {
      return this.r = t2.r + e.r, this.g = t2.g + e.g, this.b = t2.b + e.b, this;
    }
    addScalar(t2) {
      return this.r += t2, this.g += t2, this.b += t2, this;
    }
    sub(t2) {
      return this.r = Math.max(0, this.r - t2.r), this.g = Math.max(0, this.g - t2.g), this.b = Math.max(0, this.b - t2.b), this;
    }
    multiply(t2) {
      return this.r *= t2.r, this.g *= t2.g, this.b *= t2.b, this;
    }
    multiplyScalar(t2) {
      return this.r *= t2, this.g *= t2, this.b *= t2, this;
    }
    lerp(t2, e) {
      return this.r += (t2.r - this.r) * e, this.g += (t2.g - this.g) * e, this.b += (t2.b - this.b) * e, this;
    }
    lerpColors(t2, e, n) {
      return this.r = t2.r + (e.r - t2.r) * n, this.g = t2.g + (e.g - t2.g) * n, this.b = t2.b + (e.b - t2.b) * n, this;
    }
    lerpHSL(t2, e) {
      this.getHSL(Yr), t2.getHSL(Zr);
      const n = jn(Yr.h, Zr.h, e), i = jn(Yr.s, Zr.s, e), r = jn(Yr.l, Zr.l, e);
      return this.setHSL(n, i, r), this;
    }
    setFromVector3(t2) {
      return this.r = t2.x, this.g = t2.y, this.b = t2.z, this;
    }
    applyMatrix3(t2) {
      const e = this.r, n = this.g, i = this.b, r = t2.elements;
      return this.r = r[0] * e + r[3] * n + r[6] * i, this.g = r[1] * e + r[4] * n + r[7] * i, this.b = r[2] * e + r[5] * n + r[8] * i, this;
    }
    equals(t2) {
      return t2.r === this.r && t2.g === this.g && t2.b === this.b;
    }
    fromArray(t2, e = 0) {
      return this.r = t2[e], this.g = t2[e + 1], this.b = t2[e + 2], this;
    }
    toArray(t2 = [], e = 0) {
      return t2[e] = this.r, t2[e + 1] = this.g, t2[e + 2] = this.b, t2;
    }
    fromBufferAttribute(t2, e) {
      return this.r = t2.getX(e), this.g = t2.getY(e), this.b = t2.getZ(e), this;
    }
    toJSON() {
      return this.getHex();
    }
    *[Symbol.iterator]() {
      yield this.r, yield this.g, yield this.b;
    }
  };
  var $r = new Kr();
  Kr.NAMES = qr;
  var Qr = 0;
  var ts = class extends Bn {
    static get type() {
      return "Material";
    }
    get type() {
      return this.constructor.type;
    }
    set type(t2) {
    }
    constructor() {
      super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: Qr++ }), this.uuid = Gn(), this.name = "", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = C, this.blendDst = I, this.blendEquation = y, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Kr(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = en, this.stencilZFail = en, this.stencilZPass = en, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
    }
    get alphaTest() {
      return this._alphaTest;
    }
    set alphaTest(t2) {
      this._alphaTest > 0 != t2 > 0 && this.version++, this._alphaTest = t2;
    }
    onBeforeRender() {
    }
    onBeforeCompile() {
    }
    customProgramCacheKey() {
      return this.onBeforeCompile.toString();
    }
    setValues(t2) {
      if (void 0 !== t2) for (const e in t2) {
        const n = t2[e];
        if (void 0 === n) {
          console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);
          continue;
        }
        const i = this[e];
        void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);
      }
    }
    toJSON(t2) {
      const e = void 0 === t2 || "string" == typeof t2;
      e && (t2 = { textures: {}, images: {} });
      const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
      function i(t3) {
        const e2 = [];
        for (const n2 in t3) {
          const i2 = t3[n2];
          delete i2.metadata, e2.push(i2);
        }
        return e2;
      }
      if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), void 0 !== this.roughness && (n.roughness = this.roughness), void 0 !== this.metalness && (n.metalness = this.metalness), void 0 !== this.sheen && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), void 0 !== this.sheenRoughness && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), void 0 !== this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), void 0 !== this.specularIntensity && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), void 0 !== this.shininess && (n.shininess = this.shininess), void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat), void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t2).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t2).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t2).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), void 0 !== this.dispersion && (n.dispersion = this.dispersion), void 0 !== this.iridescence && (n.iridescence = this.iridescence), void 0 !== this.iridescenceIOR && (n.iridescenceIOR = this.iridescenceIOR), void 0 !== this.iridescenceThicknessRange && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(t2).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(t2).uuid), void 0 !== this.anisotropy && (n.anisotropy = this.anisotropy), void 0 !== this.anisotropyRotation && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(t2).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(t2).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t2).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t2).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t2).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t2).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t2).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t2).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t2).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t2).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t2).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t2).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t2).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(t2).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(t2).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t2).uuid, void 0 !== this.combine && (n.combine = this.combine)), void 0 !== this.envMapRotation && (n.envMapRotation = this.envMapRotation.toArray()), void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity), void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity), void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t2).uuid), void 0 !== this.transmission && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(t2).uuid), void 0 !== this.thickness && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(t2).uuid), void 0 !== this.attenuationDistance && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), void 0 !== this.attenuationColor && (n.attenuationColor = this.attenuationColor.getHex()), void 0 !== this.size && (n.size = this.size), null !== this.shadowSide && (n.shadowSide = this.shadowSide), void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation), 1 !== this.blending && (n.blending = this.blending), 0 !== this.side && (n.side = this.side), true === this.vertexColors && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), true === this.transparent && (n.transparent = true), this.blendSrc !== C && (n.blendSrc = this.blendSrc), this.blendDst !== I && (n.blendDst = this.blendDst), this.blendEquation !== y && (n.blendEquation = this.blendEquation), null !== this.blendSrcAlpha && (n.blendSrcAlpha = this.blendSrcAlpha), null !== this.blendDstAlpha && (n.blendDstAlpha = this.blendDstAlpha), null !== this.blendEquationAlpha && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), 0 !== this.blendAlpha && (n.blendAlpha = this.blendAlpha), 3 !== this.depthFunc && (n.depthFunc = this.depthFunc), false === this.depthTest && (n.depthTest = this.depthTest), false === this.depthWrite && (n.depthWrite = this.depthWrite), false === this.colorWrite && (n.colorWrite = this.colorWrite), 255 !== this.stencilWriteMask && (n.stencilWriteMask = this.stencilWriteMask), 519 !== this.stencilFunc && (n.stencilFunc = this.stencilFunc), 0 !== this.stencilRef && (n.stencilRef = this.stencilRef), 255 !== this.stencilFuncMask && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== en && (n.stencilFail = this.stencilFail), this.stencilZFail !== en && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== en && (n.stencilZPass = this.stencilZPass), true === this.stencilWrite && (n.stencilWrite = this.stencilWrite), void 0 !== this.rotation && 0 !== this.rotation && (n.rotation = this.rotation), true === this.polygonOffset && (n.polygonOffset = true), 0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor), 0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits), void 0 !== this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth), void 0 !== this.dashSize && (n.dashSize = this.dashSize), void 0 !== this.gapSize && (n.gapSize = this.gapSize), void 0 !== this.scale && (n.scale = this.scale), true === this.dithering && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), true === this.alphaHash && (n.alphaHash = true), true === this.alphaToCoverage && (n.alphaToCoverage = true), true === this.premultipliedAlpha && (n.premultipliedAlpha = true), true === this.forceSinglePass && (n.forceSinglePass = true), true === this.wireframe && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap), "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin), true === this.flatShading && (n.flatShading = true), false === this.visible && (n.visible = false), false === this.toneMapped && (n.toneMapped = false), false === this.fog && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData), e) {
        const e2 = i(t2.textures), r = i(t2.images);
        e2.length > 0 && (n.textures = e2), r.length > 0 && (n.images = r);
      }
      return n;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.name = t2.name, this.blending = t2.blending, this.side = t2.side, this.vertexColors = t2.vertexColors, this.opacity = t2.opacity, this.transparent = t2.transparent, this.blendSrc = t2.blendSrc, this.blendDst = t2.blendDst, this.blendEquation = t2.blendEquation, this.blendSrcAlpha = t2.blendSrcAlpha, this.blendDstAlpha = t2.blendDstAlpha, this.blendEquationAlpha = t2.blendEquationAlpha, this.blendColor.copy(t2.blendColor), this.blendAlpha = t2.blendAlpha, this.depthFunc = t2.depthFunc, this.depthTest = t2.depthTest, this.depthWrite = t2.depthWrite, this.stencilWriteMask = t2.stencilWriteMask, this.stencilFunc = t2.stencilFunc, this.stencilRef = t2.stencilRef, this.stencilFuncMask = t2.stencilFuncMask, this.stencilFail = t2.stencilFail, this.stencilZFail = t2.stencilZFail, this.stencilZPass = t2.stencilZPass, this.stencilWrite = t2.stencilWrite;
      const e = t2.clippingPlanes;
      let n = null;
      if (null !== e) {
        const t3 = e.length;
        n = new Array(t3);
        for (let i = 0; i !== t3; ++i) n[i] = e[i].clone();
      }
      return this.clippingPlanes = n, this.clipIntersection = t2.clipIntersection, this.clipShadows = t2.clipShadows, this.shadowSide = t2.shadowSide, this.colorWrite = t2.colorWrite, this.precision = t2.precision, this.polygonOffset = t2.polygonOffset, this.polygonOffsetFactor = t2.polygonOffsetFactor, this.polygonOffsetUnits = t2.polygonOffsetUnits, this.dithering = t2.dithering, this.alphaTest = t2.alphaTest, this.alphaHash = t2.alphaHash, this.alphaToCoverage = t2.alphaToCoverage, this.premultipliedAlpha = t2.premultipliedAlpha, this.forceSinglePass = t2.forceSinglePass, this.visible = t2.visible, this.toneMapped = t2.toneMapped, this.userData = JSON.parse(JSON.stringify(t2.userData)), this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    onBuild() {
      console.warn("Material: onBuild() has been removed.");
    }
  };
  var es = class extends ts {
    static get type() {
      return "MeshBasicMaterial";
    }
    constructor(t2) {
      super(), this.isMeshBasicMaterial = true, this.color = new Kr(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new fr(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.color.copy(t2.color), this.map = t2.map, this.lightMap = t2.lightMap, this.lightMapIntensity = t2.lightMapIntensity, this.aoMap = t2.aoMap, this.aoMapIntensity = t2.aoMapIntensity, this.specularMap = t2.specularMap, this.alphaMap = t2.alphaMap, this.envMap = t2.envMap, this.envMapRotation.copy(t2.envMapRotation), this.combine = t2.combine, this.reflectivity = t2.reflectivity, this.refractionRatio = t2.refractionRatio, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.wireframeLinecap = t2.wireframeLinecap, this.wireframeLinejoin = t2.wireframeLinejoin, this.fog = t2.fog, this;
    }
  };
  var ns = is();
  function is() {
    const t2 = new ArrayBuffer(4), e = new Float32Array(t2), n = new Uint32Array(t2), i = new Uint32Array(512), r = new Uint32Array(512);
    for (let t3 = 0; t3 < 256; ++t3) {
      const e2 = t3 - 127;
      e2 < -27 ? (i[t3] = 0, i[256 | t3] = 32768, r[t3] = 24, r[256 | t3] = 24) : e2 < -14 ? (i[t3] = 1024 >> -e2 - 14, i[256 | t3] = 1024 >> -e2 - 14 | 32768, r[t3] = -e2 - 1, r[256 | t3] = -e2 - 1) : e2 <= 15 ? (i[t3] = e2 + 15 << 10, i[256 | t3] = e2 + 15 << 10 | 32768, r[t3] = 13, r[256 | t3] = 13) : e2 < 128 ? (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 24, r[256 | t3] = 24) : (i[t3] = 31744, i[256 | t3] = 64512, r[t3] = 13, r[256 | t3] = 13);
    }
    const s = new Uint32Array(2048), a = new Uint32Array(64), o = new Uint32Array(64);
    for (let t3 = 1; t3 < 1024; ++t3) {
      let e2 = t3 << 13, n2 = 0;
      for (; !(8388608 & e2); ) e2 <<= 1, n2 -= 8388608;
      e2 &= -8388609, n2 += 947912704, s[t3] = e2 | n2;
    }
    for (let t3 = 1024; t3 < 2048; ++t3) s[t3] = 939524096 + (t3 - 1024 << 13);
    for (let t3 = 1; t3 < 31; ++t3) a[t3] = t3 << 23;
    a[31] = 1199570944, a[32] = 2147483648;
    for (let t3 = 33; t3 < 63; ++t3) a[t3] = 2147483648 + (t3 - 32 << 23);
    a[63] = 3347054592;
    for (let t3 = 1; t3 < 64; ++t3) 32 !== t3 && (o[t3] = 1024);
    return { floatView: e, uint32View: n, baseTable: i, shiftTable: r, mantissaTable: s, exponentTable: a, offsetTable: o };
  }
  var os = new Ci();
  var ls = new Jn();
  var cs = class {
    constructor(t2, e, n = false) {
      if (Array.isArray(t2)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = true, this.name = "", this.array = t2, this.itemSize = e, this.count = void 0 !== t2 ? t2.length / e : 0, this.normalized = n, this.usage = wn, this.updateRanges = [], this.gpuType = Lt, this.version = 0;
    }
    onUploadCallback() {
    }
    set needsUpdate(t2) {
      true === t2 && this.version++;
    }
    setUsage(t2) {
      return this.usage = t2, this;
    }
    addUpdateRange(t2, e) {
      this.updateRanges.push({ start: t2, count: e });
    }
    clearUpdateRanges() {
      this.updateRanges.length = 0;
    }
    copy(t2) {
      return this.name = t2.name, this.array = new t2.array.constructor(t2.array), this.itemSize = t2.itemSize, this.count = t2.count, this.normalized = t2.normalized, this.usage = t2.usage, this.gpuType = t2.gpuType, this;
    }
    copyAt(t2, e, n) {
      t2 *= this.itemSize, n *= e.itemSize;
      for (let i = 0, r = this.itemSize; i < r; i++) this.array[t2 + i] = e.array[n + i];
      return this;
    }
    copyArray(t2) {
      return this.array.set(t2), this;
    }
    applyMatrix3(t2) {
      if (2 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) ls.fromBufferAttribute(this, e), ls.applyMatrix3(t2), this.setXY(e, ls.x, ls.y);
      else if (3 === this.itemSize) for (let e = 0, n = this.count; e < n; e++) os.fromBufferAttribute(this, e), os.applyMatrix3(t2), this.setXYZ(e, os.x, os.y, os.z);
      return this;
    }
    applyMatrix4(t2) {
      for (let e = 0, n = this.count; e < n; e++) os.fromBufferAttribute(this, e), os.applyMatrix4(t2), this.setXYZ(e, os.x, os.y, os.z);
      return this;
    }
    applyNormalMatrix(t2) {
      for (let e = 0, n = this.count; e < n; e++) os.fromBufferAttribute(this, e), os.applyNormalMatrix(t2), this.setXYZ(e, os.x, os.y, os.z);
      return this;
    }
    transformDirection(t2) {
      for (let e = 0, n = this.count; e < n; e++) os.fromBufferAttribute(this, e), os.transformDirection(t2), this.setXYZ(e, os.x, os.y, os.z);
      return this;
    }
    set(t2, e = 0) {
      return this.array.set(t2, e), this;
    }
    getComponent(t2, e) {
      let n = this.array[t2 * this.itemSize + e];
      return this.normalized && (n = qn(n, this.array)), n;
    }
    setComponent(t2, e, n) {
      return this.normalized && (n = Yn(n, this.array)), this.array[t2 * this.itemSize + e] = n, this;
    }
    getX(t2) {
      let e = this.array[t2 * this.itemSize];
      return this.normalized && (e = qn(e, this.array)), e;
    }
    setX(t2, e) {
      return this.normalized && (e = Yn(e, this.array)), this.array[t2 * this.itemSize] = e, this;
    }
    getY(t2) {
      let e = this.array[t2 * this.itemSize + 1];
      return this.normalized && (e = qn(e, this.array)), e;
    }
    setY(t2, e) {
      return this.normalized && (e = Yn(e, this.array)), this.array[t2 * this.itemSize + 1] = e, this;
    }
    getZ(t2) {
      let e = this.array[t2 * this.itemSize + 2];
      return this.normalized && (e = qn(e, this.array)), e;
    }
    setZ(t2, e) {
      return this.normalized && (e = Yn(e, this.array)), this.array[t2 * this.itemSize + 2] = e, this;
    }
    getW(t2) {
      let e = this.array[t2 * this.itemSize + 3];
      return this.normalized && (e = qn(e, this.array)), e;
    }
    setW(t2, e) {
      return this.normalized && (e = Yn(e, this.array)), this.array[t2 * this.itemSize + 3] = e, this;
    }
    setXY(t2, e, n) {
      return t2 *= this.itemSize, this.normalized && (e = Yn(e, this.array), n = Yn(n, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this;
    }
    setXYZ(t2, e, n, i) {
      return t2 *= this.itemSize, this.normalized && (e = Yn(e, this.array), n = Yn(n, this.array), i = Yn(i, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this.array[t2 + 2] = i, this;
    }
    setXYZW(t2, e, n, i, r) {
      return t2 *= this.itemSize, this.normalized && (e = Yn(e, this.array), n = Yn(n, this.array), i = Yn(i, this.array), r = Yn(r, this.array)), this.array[t2 + 0] = e, this.array[t2 + 1] = n, this.array[t2 + 2] = i, this.array[t2 + 3] = r, this;
    }
    onUpload(t2) {
      return this.onUploadCallback = t2, this;
    }
    clone() {
      return new this.constructor(this.array, this.itemSize).copy(this);
    }
    toJSON() {
      const t2 = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
      return "" !== this.name && (t2.name = this.name), this.usage !== wn && (t2.usage = this.usage), t2;
    }
  };
  var ms = class extends cs {
    constructor(t2, e, n) {
      super(new Uint16Array(t2), e, n);
    }
  };
  var gs = class extends cs {
    constructor(t2, e, n) {
      super(new Uint32Array(t2), e, n);
    }
  };
  var _s = class extends cs {
    constructor(t2, e, n) {
      super(new Float32Array(t2), e, n);
    }
  };
  var xs = 0;
  var ys = new sr();
  var Ms = new Lr();
  var Ss = new Ci();
  var bs = new Li();
  var Ts = new Li();
  var ws = new Ci();
  var Es = class _Es extends Bn {
    constructor() {
      super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: xs++ }), this.uuid = Gn(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
    }
    getIndex() {
      return this.index;
    }
    setIndex(t2) {
      return Array.isArray(t2) ? this.index = new (Qn(t2) ? gs : ms)(t2, 1) : this.index = t2, this;
    }
    setIndirect(t2) {
      return this.indirect = t2, this;
    }
    getIndirect() {
      return this.indirect;
    }
    getAttribute(t2) {
      return this.attributes[t2];
    }
    setAttribute(t2, e) {
      return this.attributes[t2] = e, this;
    }
    deleteAttribute(t2) {
      return delete this.attributes[t2], this;
    }
    hasAttribute(t2) {
      return void 0 !== this.attributes[t2];
    }
    addGroup(t2, e, n = 0) {
      this.groups.push({ start: t2, count: e, materialIndex: n });
    }
    clearGroups() {
      this.groups = [];
    }
    setDrawRange(t2, e) {
      this.drawRange.start = t2, this.drawRange.count = e;
    }
    applyMatrix4(t2) {
      const e = this.attributes.position;
      void 0 !== e && (e.applyMatrix4(t2), e.needsUpdate = true);
      const n = this.attributes.normal;
      if (void 0 !== n) {
        const e2 = new Kn().getNormalMatrix(t2);
        n.applyNormalMatrix(e2), n.needsUpdate = true;
      }
      const i = this.attributes.tangent;
      return void 0 !== i && (i.transformDirection(t2), i.needsUpdate = true), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this;
    }
    applyQuaternion(t2) {
      return ys.makeRotationFromQuaternion(t2), this.applyMatrix4(ys), this;
    }
    rotateX(t2) {
      return ys.makeRotationX(t2), this.applyMatrix4(ys), this;
    }
    rotateY(t2) {
      return ys.makeRotationY(t2), this.applyMatrix4(ys), this;
    }
    rotateZ(t2) {
      return ys.makeRotationZ(t2), this.applyMatrix4(ys), this;
    }
    translate(t2, e, n) {
      return ys.makeTranslation(t2, e, n), this.applyMatrix4(ys), this;
    }
    scale(t2, e, n) {
      return ys.makeScale(t2, e, n), this.applyMatrix4(ys), this;
    }
    lookAt(t2) {
      return Ms.lookAt(t2), Ms.updateMatrix(), this.applyMatrix4(Ms.matrix), this;
    }
    center() {
      return this.computeBoundingBox(), this.boundingBox.getCenter(Ss).negate(), this.translate(Ss.x, Ss.y, Ss.z), this;
    }
    setFromPoints(t2) {
      const e = this.getAttribute("position");
      if (void 0 === e) {
        const e2 = [];
        for (let n = 0, i = t2.length; n < i; n++) {
          const i2 = t2[n];
          e2.push(i2.x, i2.y, i2.z || 0);
        }
        this.setAttribute("position", new _s(e2, 3));
      } else {
        for (let n = 0, i = e.count; n < i; n++) {
          const i2 = t2[n];
          e.setXYZ(n, i2.x, i2.y, i2.z || 0);
        }
        t2.length > e.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = true;
      }
      return this;
    }
    computeBoundingBox() {
      null === this.boundingBox && (this.boundingBox = new Li());
      const t2 = this.attributes.position, e = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new Ci(-1 / 0, -1 / 0, -1 / 0), new Ci(1 / 0, 1 / 0, 1 / 0));
      if (void 0 !== t2) {
        if (this.boundingBox.setFromBufferAttribute(t2), e) for (let t3 = 0, n = e.length; t3 < n; t3++) {
          const n2 = e[t3];
          bs.setFromBufferAttribute(n2), this.morphTargetsRelative ? (ws.addVectors(this.boundingBox.min, bs.min), this.boundingBox.expandByPoint(ws), ws.addVectors(this.boundingBox.max, bs.max), this.boundingBox.expandByPoint(ws)) : (this.boundingBox.expandByPoint(bs.min), this.boundingBox.expandByPoint(bs.max));
        }
      } else this.boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
    }
    computeBoundingSphere() {
      null === this.boundingSphere && (this.boundingSphere = new Ji());
      const t2 = this.attributes.position, e = this.morphAttributes.position;
      if (t2 && t2.isGLBufferAttribute) return console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new Ci(), 1 / 0);
      if (t2) {
        const n = this.boundingSphere.center;
        if (bs.setFromBufferAttribute(t2), e) for (let t3 = 0, n2 = e.length; t3 < n2; t3++) {
          const n3 = e[t3];
          Ts.setFromBufferAttribute(n3), this.morphTargetsRelative ? (ws.addVectors(bs.min, Ts.min), bs.expandByPoint(ws), ws.addVectors(bs.max, Ts.max), bs.expandByPoint(ws)) : (bs.expandByPoint(Ts.min), bs.expandByPoint(Ts.max));
        }
        bs.getCenter(n);
        let i = 0;
        for (let e2 = 0, r = t2.count; e2 < r; e2++) ws.fromBufferAttribute(t2, e2), i = Math.max(i, n.distanceToSquared(ws));
        if (e) for (let r = 0, s = e.length; r < s; r++) {
          const s2 = e[r], a = this.morphTargetsRelative;
          for (let e2 = 0, r2 = s2.count; e2 < r2; e2++) ws.fromBufferAttribute(s2, e2), a && (Ss.fromBufferAttribute(t2, e2), ws.add(Ss)), i = Math.max(i, n.distanceToSquared(ws));
        }
        this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
      }
    }
    computeTangents() {
      const t2 = this.index, e = this.attributes;
      if (null === t2 || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      const n = e.position, i = e.normal, r = e.uv;
      false === this.hasAttribute("tangent") && this.setAttribute("tangent", new cs(new Float32Array(4 * n.count), 4));
      const s = this.getAttribute("tangent"), a = [], o = [];
      for (let t3 = 0; t3 < n.count; t3++) a[t3] = new Ci(), o[t3] = new Ci();
      const l = new Ci(), c = new Ci(), h = new Ci(), u2 = new Jn(), d2 = new Jn(), p2 = new Jn(), m = new Ci(), f = new Ci();
      function g(t3, e2, i2) {
        l.fromBufferAttribute(n, t3), c.fromBufferAttribute(n, e2), h.fromBufferAttribute(n, i2), u2.fromBufferAttribute(r, t3), d2.fromBufferAttribute(r, e2), p2.fromBufferAttribute(r, i2), c.sub(l), h.sub(l), d2.sub(u2), p2.sub(u2);
        const s2 = 1 / (d2.x * p2.y - p2.x * d2.y);
        isFinite(s2) && (m.copy(c).multiplyScalar(p2.y).addScaledVector(h, -d2.y).multiplyScalar(s2), f.copy(h).multiplyScalar(d2.x).addScaledVector(c, -p2.x).multiplyScalar(s2), a[t3].add(m), a[e2].add(m), a[i2].add(m), o[t3].add(f), o[e2].add(f), o[i2].add(f));
      }
      let v = this.groups;
      0 === v.length && (v = [{ start: 0, count: t2.count }]);
      for (let e2 = 0, n2 = v.length; e2 < n2; ++e2) {
        const n3 = v[e2], i2 = n3.start;
        for (let e3 = i2, r2 = i2 + n3.count; e3 < r2; e3 += 3) g(t2.getX(e3 + 0), t2.getX(e3 + 1), t2.getX(e3 + 2));
      }
      const _ = new Ci(), x = new Ci(), y2 = new Ci(), M2 = new Ci();
      function S2(t3) {
        y2.fromBufferAttribute(i, t3), M2.copy(y2);
        const e2 = a[t3];
        _.copy(e2), _.sub(y2.multiplyScalar(y2.dot(e2))).normalize(), x.crossVectors(M2, e2);
        const n2 = x.dot(o[t3]) < 0 ? -1 : 1;
        s.setXYZW(t3, _.x, _.y, _.z, n2);
      }
      for (let e2 = 0, n2 = v.length; e2 < n2; ++e2) {
        const n3 = v[e2], i2 = n3.start;
        for (let e3 = i2, r2 = i2 + n3.count; e3 < r2; e3 += 3) S2(t2.getX(e3 + 0)), S2(t2.getX(e3 + 1)), S2(t2.getX(e3 + 2));
      }
    }
    computeVertexNormals() {
      const t2 = this.index, e = this.getAttribute("position");
      if (void 0 !== e) {
        let n = this.getAttribute("normal");
        if (void 0 === n) n = new cs(new Float32Array(3 * e.count), 3), this.setAttribute("normal", n);
        else for (let t3 = 0, e2 = n.count; t3 < e2; t3++) n.setXYZ(t3, 0, 0, 0);
        const i = new Ci(), r = new Ci(), s = new Ci(), a = new Ci(), o = new Ci(), l = new Ci(), c = new Ci(), h = new Ci();
        if (t2) for (let u2 = 0, d2 = t2.count; u2 < d2; u2 += 3) {
          const d3 = t2.getX(u2 + 0), p2 = t2.getX(u2 + 1), m = t2.getX(u2 + 2);
          i.fromBufferAttribute(e, d3), r.fromBufferAttribute(e, p2), s.fromBufferAttribute(e, m), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), a.fromBufferAttribute(n, d3), o.fromBufferAttribute(n, p2), l.fromBufferAttribute(n, m), a.add(c), o.add(c), l.add(c), n.setXYZ(d3, a.x, a.y, a.z), n.setXYZ(p2, o.x, o.y, o.z), n.setXYZ(m, l.x, l.y, l.z);
        }
        else for (let t3 = 0, a2 = e.count; t3 < a2; t3 += 3) i.fromBufferAttribute(e, t3 + 0), r.fromBufferAttribute(e, t3 + 1), s.fromBufferAttribute(e, t3 + 2), c.subVectors(s, r), h.subVectors(i, r), c.cross(h), n.setXYZ(t3 + 0, c.x, c.y, c.z), n.setXYZ(t3 + 1, c.x, c.y, c.z), n.setXYZ(t3 + 2, c.x, c.y, c.z);
        this.normalizeNormals(), n.needsUpdate = true;
      }
    }
    normalizeNormals() {
      const t2 = this.attributes.normal;
      for (let e = 0, n = t2.count; e < n; e++) ws.fromBufferAttribute(t2, e), ws.normalize(), t2.setXYZ(e, ws.x, ws.y, ws.z);
    }
    toNonIndexed() {
      function t2(t3, e2) {
        const n2 = t3.array, i2 = t3.itemSize, r2 = t3.normalized, s2 = new n2.constructor(e2.length * i2);
        let a = 0, o = 0;
        for (let r3 = 0, l = e2.length; r3 < l; r3++) {
          a = t3.isInterleavedBufferAttribute ? e2[r3] * t3.data.stride + t3.offset : e2[r3] * i2;
          for (let t4 = 0; t4 < i2; t4++) s2[o++] = n2[a++];
        }
        return new cs(s2, i2, r2);
      }
      if (null === this.index) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
      const e = new _Es(), n = this.index.array, i = this.attributes;
      for (const r2 in i) {
        const s2 = t2(i[r2], n);
        e.setAttribute(r2, s2);
      }
      const r = this.morphAttributes;
      for (const i2 in r) {
        const s2 = [], a = r[i2];
        for (let e2 = 0, i3 = a.length; e2 < i3; e2++) {
          const i4 = t2(a[e2], n);
          s2.push(i4);
        }
        e.morphAttributes[i2] = s2;
      }
      e.morphTargetsRelative = this.morphTargetsRelative;
      const s = this.groups;
      for (let t3 = 0, n2 = s.length; t3 < n2; t3++) {
        const n3 = s[t3];
        e.addGroup(n3.start, n3.count, n3.materialIndex);
      }
      return e;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
      if (t2.uuid = this.uuid, t2.type = this.type, "" !== this.name && (t2.name = this.name), Object.keys(this.userData).length > 0 && (t2.userData = this.userData), void 0 !== this.parameters) {
        const e2 = this.parameters;
        for (const n2 in e2) void 0 !== e2[n2] && (t2[n2] = e2[n2]);
        return t2;
      }
      t2.data = { attributes: {} };
      const e = this.index;
      null !== e && (t2.data.index = { type: e.array.constructor.name, array: Array.prototype.slice.call(e.array) });
      const n = this.attributes;
      for (const e2 in n) {
        const i2 = n[e2];
        t2.data.attributes[e2] = i2.toJSON(t2.data);
      }
      const i = {};
      let r = false;
      for (const e2 in this.morphAttributes) {
        const n2 = this.morphAttributes[e2], s2 = [];
        for (let e3 = 0, i2 = n2.length; e3 < i2; e3++) {
          const i3 = n2[e3];
          s2.push(i3.toJSON(t2.data));
        }
        s2.length > 0 && (i[e2] = s2, r = true);
      }
      r && (t2.data.morphAttributes = i, t2.data.morphTargetsRelative = this.morphTargetsRelative);
      const s = this.groups;
      s.length > 0 && (t2.data.groups = JSON.parse(JSON.stringify(s)));
      const a = this.boundingSphere;
      return null !== a && (t2.data.boundingSphere = { center: a.center.toArray(), radius: a.radius }), t2;
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
      const e = {};
      this.name = t2.name;
      const n = t2.index;
      null !== n && this.setIndex(n.clone(e));
      const i = t2.attributes;
      for (const t3 in i) {
        const n2 = i[t3];
        this.setAttribute(t3, n2.clone(e));
      }
      const r = t2.morphAttributes;
      for (const t3 in r) {
        const n2 = [], i2 = r[t3];
        for (let t4 = 0, r2 = i2.length; t4 < r2; t4++) n2.push(i2[t4].clone(e));
        this.morphAttributes[t3] = n2;
      }
      this.morphTargetsRelative = t2.morphTargetsRelative;
      const s = t2.groups;
      for (let t3 = 0, e2 = s.length; t3 < e2; t3++) {
        const e3 = s[t3];
        this.addGroup(e3.start, e3.count, e3.materialIndex);
      }
      const a = t2.boundingBox;
      null !== a && (this.boundingBox = a.clone());
      const o = t2.boundingSphere;
      return null !== o && (this.boundingSphere = o.clone()), this.drawRange.start = t2.drawRange.start, this.drawRange.count = t2.drawRange.count, this.userData = t2.userData, this;
    }
    dispose() {
      this.dispatchEvent({ type: "dispose" });
    }
  };
  var As = new sr();
  var Rs = new rr();
  var Cs = new Ji();
  var Is = new Ci();
  var Ps = new Ci();
  var Ls = new Ci();
  var Us = new Ci();
  var Ds = new Ci();
  var Ns = new Ci();
  var Os = new Ci();
  var Fs = new Ci();
  var Bs = class extends Lr {
    constructor(t2 = new Es(), e = new es()) {
      super(), this.isMesh = true, this.type = "Mesh", this.geometry = t2, this.material = e, this.updateMorphTargets();
    }
    copy(t2, e) {
      return super.copy(t2, e), void 0 !== t2.morphTargetInfluences && (this.morphTargetInfluences = t2.morphTargetInfluences.slice()), void 0 !== t2.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t2.morphTargetDictionary)), this.material = Array.isArray(t2.material) ? t2.material.slice() : t2.material, this.geometry = t2.geometry, this;
    }
    updateMorphTargets() {
      const t2 = this.geometry.morphAttributes, e = Object.keys(t2);
      if (e.length > 0) {
        const n = t2[e[0]];
        if (void 0 !== n) {
          this.morphTargetInfluences = [], this.morphTargetDictionary = {};
          for (let t3 = 0, e2 = n.length; t3 < e2; t3++) {
            const e3 = n[t3].name || String(t3);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[e3] = t3;
          }
        }
      }
    }
    getVertexPosition(t2, e) {
      const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, s = n.morphTargetsRelative;
      e.fromBufferAttribute(i, t2);
      const a = this.morphTargetInfluences;
      if (r && a) {
        Ns.set(0, 0, 0);
        for (let n2 = 0, i2 = r.length; n2 < i2; n2++) {
          const i3 = a[n2], o = r[n2];
          0 !== i3 && (Ds.fromBufferAttribute(o, t2), s ? Ns.addScaledVector(Ds, i3) : Ns.addScaledVector(Ds.sub(e), i3));
        }
        e.add(Ns);
      }
      return e;
    }
    raycast(t2, e) {
      const n = this.geometry, i = this.material, r = this.matrixWorld;
      if (void 0 !== i) {
        if (null === n.boundingSphere && n.computeBoundingSphere(), Cs.copy(n.boundingSphere), Cs.applyMatrix4(r), Rs.copy(t2.ray).recast(t2.near), false === Cs.containsPoint(Rs.origin)) {
          if (null === Rs.intersectSphere(Cs, Is)) return;
          if (Rs.origin.distanceToSquared(Is) > (t2.far - t2.near) ** 2) return;
        }
        As.copy(r).invert(), Rs.copy(t2.ray).applyMatrix4(As), null !== n.boundingBox && false === Rs.intersectsBox(n.boundingBox) || this._computeIntersections(t2, e, Rs);
      }
    }
    _computeIntersections(t2, e, n) {
      let i;
      const r = this.geometry, s = this.material, a = r.index, o = r.attributes.position, l = r.attributes.uv, c = r.attributes.uv1, h = r.attributes.normal, u2 = r.groups, d2 = r.drawRange;
      if (null !== a) if (Array.isArray(s)) for (let r2 = 0, o2 = u2.length; r2 < o2; r2++) {
        const o3 = u2[r2], p2 = s[o3.materialIndex];
        for (let r3 = Math.max(o3.start, d2.start), s2 = Math.min(a.count, Math.min(o3.start + o3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = zs(this, p2, t2, n, l, c, h, a.getX(r3), a.getX(r3 + 1), a.getX(r3 + 2)), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = o3.materialIndex, e.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), o2 = Math.min(a.count, d2.start + d2.count); r2 < o2; r2 += 3) {
          i = zs(this, s, t2, n, l, c, h, a.getX(r2), a.getX(r2 + 1), a.getX(r2 + 2)), i && (i.faceIndex = Math.floor(r2 / 3), e.push(i));
        }
      }
      else if (void 0 !== o) if (Array.isArray(s)) for (let r2 = 0, a2 = u2.length; r2 < a2; r2++) {
        const a3 = u2[r2], p2 = s[a3.materialIndex];
        for (let r3 = Math.max(a3.start, d2.start), s2 = Math.min(o.count, Math.min(a3.start + a3.count, d2.start + d2.count)); r3 < s2; r3 += 3) {
          i = zs(this, p2, t2, n, l, c, h, r3, r3 + 1, r3 + 2), i && (i.faceIndex = Math.floor(r3 / 3), i.face.materialIndex = a3.materialIndex, e.push(i));
        }
      }
      else {
        for (let r2 = Math.max(0, d2.start), a2 = Math.min(o.count, d2.start + d2.count); r2 < a2; r2 += 3) {
          i = zs(this, s, t2, n, l, c, h, r2, r2 + 1, r2 + 2), i && (i.faceIndex = Math.floor(r2 / 3), e.push(i));
        }
      }
    }
  };
  function zs(t2, e, n, i, r, s, a, o, l, c) {
    t2.getVertexPosition(o, Ps), t2.getVertexPosition(l, Ls), t2.getVertexPosition(c, Us);
    const h = (function(t3, e2, n2, i2, r2, s2, a2, o2) {
      let l2;
      if (l2 = 1 === e2.side ? i2.intersectTriangle(a2, s2, r2, true, o2) : i2.intersectTriangle(r2, s2, a2, 0 === e2.side, o2), null === l2) return null;
      Fs.copy(o2), Fs.applyMatrix4(t3.matrixWorld);
      const c2 = n2.ray.origin.distanceTo(Fs);
      return c2 < n2.near || c2 > n2.far ? null : { distance: c2, point: Fs.clone(), object: t3 };
    })(t2, e, n, i, Ps, Ls, Us, Os);
    if (h) {
      const t3 = new Ci();
      jr.getBarycoord(Os, Ps, Ls, Us, t3), r && (h.uv = jr.getInterpolatedAttribute(r, o, l, c, t3, new Jn())), s && (h.uv1 = jr.getInterpolatedAttribute(s, o, l, c, t3, new Jn())), a && (h.normal = jr.getInterpolatedAttribute(a, o, l, c, t3, new Ci()), h.normal.dot(i.direction) > 0 && h.normal.multiplyScalar(-1));
      const e2 = { a: o, b: l, c, normal: new Ci(), materialIndex: 0 };
      jr.getNormal(Ps, Ls, Us, e2.normal), h.face = e2, h.barycoord = t3;
    }
    return h;
  }
  var ks = class _ks extends Es {
    constructor(t2 = 1, e = 1, n = 1, i = 1, r = 1, s = 1) {
      super(), this.type = "BoxGeometry", this.parameters = { width: t2, height: e, depth: n, widthSegments: i, heightSegments: r, depthSegments: s };
      const a = this;
      i = Math.floor(i), r = Math.floor(r), s = Math.floor(s);
      const o = [], l = [], c = [], h = [];
      let u2 = 0, d2 = 0;
      function p2(t3, e2, n2, i2, r2, s2, p3, m, f, g, v) {
        const _ = s2 / f, x = p3 / g, y2 = s2 / 2, M2 = p3 / 2, S2 = m / 2, b = f + 1, T = g + 1;
        let w2 = 0, E2 = 0;
        const A2 = new Ci();
        for (let s3 = 0; s3 < T; s3++) {
          const a2 = s3 * x - M2;
          for (let o2 = 0; o2 < b; o2++) {
            const u3 = o2 * _ - y2;
            A2[t3] = u3 * i2, A2[e2] = a2 * r2, A2[n2] = S2, l.push(A2.x, A2.y, A2.z), A2[t3] = 0, A2[e2] = 0, A2[n2] = m > 0 ? 1 : -1, c.push(A2.x, A2.y, A2.z), h.push(o2 / f), h.push(1 - s3 / g), w2 += 1;
          }
        }
        for (let t4 = 0; t4 < g; t4++) for (let e3 = 0; e3 < f; e3++) {
          const n3 = u2 + e3 + b * t4, i3 = u2 + e3 + b * (t4 + 1), r3 = u2 + (e3 + 1) + b * (t4 + 1), s3 = u2 + (e3 + 1) + b * t4;
          o.push(n3, i3, s3), o.push(i3, r3, s3), E2 += 6;
        }
        a.addGroup(d2, E2, v), d2 += E2, u2 += w2;
      }
      p2("z", "y", "x", -1, -1, n, e, t2, s, r, 0), p2("z", "y", "x", 1, -1, n, e, -t2, s, r, 1), p2("x", "z", "y", 1, 1, t2, n, e, i, s, 2), p2("x", "z", "y", 1, -1, t2, n, -e, i, s, 3), p2("x", "y", "z", 1, -1, t2, e, n, i, r, 4), p2("x", "y", "z", -1, -1, t2, e, -n, i, r, 5), this.setIndex(o), this.setAttribute("position", new _s(l, 3)), this.setAttribute("normal", new _s(c, 3)), this.setAttribute("uv", new _s(h, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ks(t2.width, t2.height, t2.depth, t2.widthSegments, t2.heightSegments, t2.depthSegments);
    }
  };
  function Vs(t2) {
    const e = {};
    for (const n in t2) {
      e[n] = {};
      for (const i in t2[n]) {
        const r = t2[n][i];
        r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[n][i] = null) : e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r;
      }
    }
    return e;
  }
  function Hs(t2) {
    const e = {};
    for (let n = 0; n < t2.length; n++) {
      const i = Vs(t2[n]);
      for (const t3 in i) e[t3] = i[t3];
    }
    return e;
  }
  function Gs(t2) {
    const e = t2.getRenderTarget();
    return null === e ? t2.outputColorSpace : true === e.isXRRenderTarget ? e.texture.colorSpace : ai.workingColorSpace;
  }
  var Ws = { clone: Vs, merge: Hs };
  var Xs = class extends ts {
    static get type() {
      return "ShaderMaterial";
    }
    constructor(t2) {
      super(), this.isShaderMaterial = true, this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}", this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}", this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, void 0 !== t2 && this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.fragmentShader = t2.fragmentShader, this.vertexShader = t2.vertexShader, this.uniforms = Vs(t2.uniforms), this.uniformsGroups = (function(t3) {
        const e = [];
        for (let n = 0; n < t3.length; n++) e.push(t3[n].clone());
        return e;
      })(t2.uniformsGroups), this.defines = Object.assign({}, t2.defines), this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this.fog = t2.fog, this.lights = t2.lights, this.clipping = t2.clipping, this.extensions = Object.assign({}, t2.extensions), this.glslVersion = t2.glslVersion, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      e.glslVersion = this.glslVersion, e.uniforms = {};
      for (const n2 in this.uniforms) {
        const i = this.uniforms[n2].value;
        i && i.isTexture ? e.uniforms[n2] = { type: "t", value: i.toJSON(t2).uuid } : i && i.isColor ? e.uniforms[n2] = { type: "c", value: i.getHex() } : i && i.isVector2 ? e.uniforms[n2] = { type: "v2", value: i.toArray() } : i && i.isVector3 ? e.uniforms[n2] = { type: "v3", value: i.toArray() } : i && i.isVector4 ? e.uniforms[n2] = { type: "v4", value: i.toArray() } : i && i.isMatrix3 ? e.uniforms[n2] = { type: "m3", value: i.toArray() } : i && i.isMatrix4 ? e.uniforms[n2] = { type: "m4", value: i.toArray() } : e.uniforms[n2] = { value: i };
      }
      Object.keys(this.defines).length > 0 && (e.defines = this.defines), e.vertexShader = this.vertexShader, e.fragmentShader = this.fragmentShader, e.lights = this.lights, e.clipping = this.clipping;
      const n = {};
      for (const t3 in this.extensions) true === this.extensions[t3] && (n[t3] = true);
      return Object.keys(n).length > 0 && (e.extensions = n), e;
    }
  };
  var js = class extends Lr {
    constructor() {
      super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new sr(), this.projectionMatrix = new sr(), this.projectionMatrixInverse = new sr(), this.coordinateSystem = On;
    }
    copy(t2, e) {
      return super.copy(t2, e), this.matrixWorldInverse.copy(t2.matrixWorldInverse), this.projectionMatrix.copy(t2.projectionMatrix), this.projectionMatrixInverse.copy(t2.projectionMatrixInverse), this.coordinateSystem = t2.coordinateSystem, this;
    }
    getWorldDirection(t2) {
      return super.getWorldDirection(t2).negate();
    }
    updateMatrixWorld(t2) {
      super.updateMatrixWorld(t2), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    updateWorldMatrix(t2, e) {
      super.updateWorldMatrix(t2, e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var qs = new Ci();
  var Ys = new Jn();
  var Zs = new Jn();
  var Js = class extends js {
    constructor(t2 = 50, e = 1, n = 0.1, i = 2e3) {
      super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = t2, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = e, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.fov = t2.fov, this.zoom = t2.zoom, this.near = t2.near, this.far = t2.far, this.focus = t2.focus, this.aspect = t2.aspect, this.view = null === t2.view ? null : Object.assign({}, t2.view), this.filmGauge = t2.filmGauge, this.filmOffset = t2.filmOffset, this;
    }
    setFocalLength(t2) {
      const e = 0.5 * this.getFilmHeight() / t2;
      this.fov = 2 * Hn * Math.atan(e), this.updateProjectionMatrix();
    }
    getFocalLength() {
      const t2 = Math.tan(0.5 * Vn * this.fov);
      return 0.5 * this.getFilmHeight() / t2;
    }
    getEffectiveFOV() {
      return 2 * Hn * Math.atan(Math.tan(0.5 * Vn * this.fov) / this.zoom);
    }
    getFilmWidth() {
      return this.filmGauge * Math.min(this.aspect, 1);
    }
    getFilmHeight() {
      return this.filmGauge / Math.max(this.aspect, 1);
    }
    getViewBounds(t2, e, n) {
      qs.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), e.set(qs.x, qs.y).multiplyScalar(-t2 / qs.z), qs.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(qs.x, qs.y).multiplyScalar(-t2 / qs.z);
    }
    getViewSize(t2, e) {
      return this.getViewBounds(t2, Ys, Zs), e.subVectors(Zs, Ys);
    }
    setViewOffset(t2, e, n, i, r, s) {
      this.aspect = t2 / e, null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = this.near;
      let e = t2 * Math.tan(0.5 * Vn * this.fov) / this.zoom, n = 2 * e, i = this.aspect * n, r = -0.5 * i;
      const s = this.view;
      if (null !== this.view && this.view.enabled) {
        const t3 = s.fullWidth, a2 = s.fullHeight;
        r += s.offsetX * i / t3, e -= s.offsetY * n / a2, i *= s.width / t3, n *= s.height / a2;
      }
      const a = this.filmOffset;
      0 !== a && (r += t2 * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, e, e - n, t2, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.fov = this.fov, e.object.zoom = this.zoom, e.object.near = this.near, e.object.far = this.far, e.object.focus = this.focus, e.object.aspect = this.aspect, null !== this.view && (e.object.view = Object.assign({}, this.view)), e.object.filmGauge = this.filmGauge, e.object.filmOffset = this.filmOffset, e;
    }
  };
  var Ks = -90;
  var $s = class extends Lr {
    constructor(t2, e, n) {
      super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
      const i = new Js(Ks, 1, t2, e);
      i.layers = this.layers, this.add(i);
      const r = new Js(Ks, 1, t2, e);
      r.layers = this.layers, this.add(r);
      const s = new Js(Ks, 1, t2, e);
      s.layers = this.layers, this.add(s);
      const a = new Js(Ks, 1, t2, e);
      a.layers = this.layers, this.add(a);
      const o = new Js(Ks, 1, t2, e);
      o.layers = this.layers, this.add(o);
      const l = new Js(Ks, 1, t2, e);
      l.layers = this.layers, this.add(l);
    }
    updateCoordinateSystem() {
      const t2 = this.coordinateSystem, e = this.children.concat(), [n, i, r, s, a, o] = e;
      for (const t3 of e) this.remove(t3);
      if (t2 === On) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), s.up.set(0, 0, 1), s.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), o.up.set(0, 1, 0), o.lookAt(0, 0, -1);
      else {
        if (t2 !== Fn) throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + t2);
        n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), s.up.set(0, 0, -1), s.lookAt(0, -1, 0), a.up.set(0, -1, 0), a.lookAt(0, 0, 1), o.up.set(0, -1, 0), o.lookAt(0, 0, -1);
      }
      for (const t3 of e) this.add(t3), t3.updateMatrixWorld();
    }
    update(t2, e) {
      null === this.parent && this.updateMatrixWorld();
      const { renderTarget: n, activeMipmapLevel: i } = this;
      this.coordinateSystem !== t2.coordinateSystem && (this.coordinateSystem = t2.coordinateSystem, this.updateCoordinateSystem());
      const [r, s, a, o, l, c] = this.children, h = t2.getRenderTarget(), u2 = t2.getActiveCubeFace(), d2 = t2.getActiveMipmapLevel(), p2 = t2.xr.enabled;
      t2.xr.enabled = false;
      const m = n.texture.generateMipmaps;
      n.texture.generateMipmaps = false, t2.setRenderTarget(n, 0, i), t2.render(e, r), t2.setRenderTarget(n, 1, i), t2.render(e, s), t2.setRenderTarget(n, 2, i), t2.render(e, a), t2.setRenderTarget(n, 3, i), t2.render(e, o), t2.setRenderTarget(n, 4, i), t2.render(e, l), n.texture.generateMipmaps = m, t2.setRenderTarget(n, 5, i), t2.render(e, c), t2.setRenderTarget(h, u2, d2), t2.xr.enabled = p2, n.texture.needsPMREMUpdate = true;
    }
  };
  var Qs = class extends yi {
    constructor(t2, e, n, i, r, s, a, o, l, c) {
      super(t2 = void 0 !== t2 ? t2 : [], e = void 0 !== e ? e : lt, n, i, r, s, a, o, l, c), this.isCubeTexture = true, this.flipY = false;
    }
    get images() {
      return this.image;
    }
    set images(t2) {
      this.image = t2;
    }
  };
  var ta = class extends bi {
    constructor(t2 = 1, e = {}) {
      super(t2, t2, e), this.isWebGLCubeRenderTarget = true;
      const n = { width: t2, height: t2, depth: 1 }, i = [n, n, n, n, n, n];
      this.texture = new Qs(i, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps, this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : Mt;
    }
    fromEquirectangularTexture(t2, e) {
      this.texture.type = e.type, this.texture.colorSpace = e.colorSpace, this.texture.generateMipmaps = e.generateMipmaps, this.texture.minFilter = e.minFilter, this.texture.magFilter = e.magFilter;
      const n = { uniforms: { tEquirect: { value: null } }, vertexShader: "\n\n				varying vec3 vWorldDirection;\n\n				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n				}\n\n				void main() {\n\n					vWorldDirection = transformDirection( position, modelMatrix );\n\n					#include <begin_vertex>\n					#include <project_vertex>\n\n				}\n			", fragmentShader: "\n\n				uniform sampler2D tEquirect;\n\n				varying vec3 vWorldDirection;\n\n				#include <common>\n\n				void main() {\n\n					vec3 direction = normalize( vWorldDirection );\n\n					vec2 sampleUV = equirectUv( direction );\n\n					gl_FragColor = texture2D( tEquirect, sampleUV );\n\n				}\n			" }, i = new ks(5, 5, 5), r = new Xs({ name: "CubemapFromEquirect", uniforms: Vs(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 });
      r.uniforms.tEquirect.value = e;
      const s = new Bs(i, r), a = e.minFilter;
      e.minFilter === Tt && (e.minFilter = Mt);
      return new $s(1, 10, this).update(t2, s), e.minFilter = a, s.geometry.dispose(), s.material.dispose(), this;
    }
    clear(t2, e, n, i) {
      const r = t2.getRenderTarget();
      for (let r2 = 0; r2 < 6; r2++) t2.setRenderTarget(this, r2), t2.clear(e, n, i);
      t2.setRenderTarget(r);
    }
  };
  var ea = new Ci();
  var na = new Ci();
  var ia = new Kn();
  var ra = class {
    constructor(t2 = new Ci(1, 0, 0), e = 0) {
      this.isPlane = true, this.normal = t2, this.constant = e;
    }
    set(t2, e) {
      return this.normal.copy(t2), this.constant = e, this;
    }
    setComponents(t2, e, n, i) {
      return this.normal.set(t2, e, n), this.constant = i, this;
    }
    setFromNormalAndCoplanarPoint(t2, e) {
      return this.normal.copy(t2), this.constant = -e.dot(this.normal), this;
    }
    setFromCoplanarPoints(t2, e, n) {
      const i = ea.subVectors(n, e).cross(na.subVectors(t2, e)).normalize();
      return this.setFromNormalAndCoplanarPoint(i, t2), this;
    }
    copy(t2) {
      return this.normal.copy(t2.normal), this.constant = t2.constant, this;
    }
    normalize() {
      const t2 = 1 / this.normal.length();
      return this.normal.multiplyScalar(t2), this.constant *= t2, this;
    }
    negate() {
      return this.constant *= -1, this.normal.negate(), this;
    }
    distanceToPoint(t2) {
      return this.normal.dot(t2) + this.constant;
    }
    distanceToSphere(t2) {
      return this.distanceToPoint(t2.center) - t2.radius;
    }
    projectPoint(t2, e) {
      return e.copy(t2).addScaledVector(this.normal, -this.distanceToPoint(t2));
    }
    intersectLine(t2, e) {
      const n = t2.delta(ea), i = this.normal.dot(n);
      if (0 === i) return 0 === this.distanceToPoint(t2.start) ? e.copy(t2.start) : null;
      const r = -(t2.start.dot(this.normal) + this.constant) / i;
      return r < 0 || r > 1 ? null : e.copy(t2.start).addScaledVector(n, r);
    }
    intersectsLine(t2) {
      const e = this.distanceToPoint(t2.start), n = this.distanceToPoint(t2.end);
      return e < 0 && n > 0 || n < 0 && e > 0;
    }
    intersectsBox(t2) {
      return t2.intersectsPlane(this);
    }
    intersectsSphere(t2) {
      return t2.intersectsPlane(this);
    }
    coplanarPoint(t2) {
      return t2.copy(this.normal).multiplyScalar(-this.constant);
    }
    applyMatrix4(t2, e) {
      const n = e || ia.getNormalMatrix(t2), i = this.coplanarPoint(ea).applyMatrix4(t2), r = this.normal.applyMatrix3(n).normalize();
      return this.constant = -i.dot(r), this;
    }
    translate(t2) {
      return this.constant -= t2.dot(this.normal), this;
    }
    equals(t2) {
      return t2.normal.equals(this.normal) && t2.constant === this.constant;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  var sa = new Ji();
  var aa = new Ci();
  var oa = class {
    constructor(t2 = new ra(), e = new ra(), n = new ra(), i = new ra(), r = new ra(), s = new ra()) {
      this.planes = [t2, e, n, i, r, s];
    }
    set(t2, e, n, i, r, s) {
      const a = this.planes;
      return a[0].copy(t2), a[1].copy(e), a[2].copy(n), a[3].copy(i), a[4].copy(r), a[5].copy(s), this;
    }
    copy(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) e[n].copy(t2.planes[n]);
      return this;
    }
    setFromProjectionMatrix(t2, e = 2e3) {
      const n = this.planes, i = t2.elements, r = i[0], s = i[1], a = i[2], o = i[3], l = i[4], c = i[5], h = i[6], u2 = i[7], d2 = i[8], p2 = i[9], m = i[10], f = i[11], g = i[12], v = i[13], _ = i[14], x = i[15];
      if (n[0].setComponents(o - r, u2 - l, f - d2, x - g).normalize(), n[1].setComponents(o + r, u2 + l, f + d2, x + g).normalize(), n[2].setComponents(o + s, u2 + c, f + p2, x + v).normalize(), n[3].setComponents(o - s, u2 - c, f - p2, x - v).normalize(), n[4].setComponents(o - a, u2 - h, f - m, x - _).normalize(), e === On) n[5].setComponents(o + a, u2 + h, f + m, x + _).normalize();
      else {
        if (e !== Fn) throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + e);
        n[5].setComponents(a, h, m, _).normalize();
      }
      return this;
    }
    intersectsObject(t2) {
      if (void 0 !== t2.boundingSphere) null === t2.boundingSphere && t2.computeBoundingSphere(), sa.copy(t2.boundingSphere).applyMatrix4(t2.matrixWorld);
      else {
        const e = t2.geometry;
        null === e.boundingSphere && e.computeBoundingSphere(), sa.copy(e.boundingSphere).applyMatrix4(t2.matrixWorld);
      }
      return this.intersectsSphere(sa);
    }
    intersectsSprite(t2) {
      return sa.center.set(0, 0, 0), sa.radius = 0.7071067811865476, sa.applyMatrix4(t2.matrixWorld), this.intersectsSphere(sa);
    }
    intersectsSphere(t2) {
      const e = this.planes, n = t2.center, i = -t2.radius;
      for (let t3 = 0; t3 < 6; t3++) {
        if (e[t3].distanceToPoint(n) < i) return false;
      }
      return true;
    }
    intersectsBox(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) {
        const i = e[n];
        if (aa.x = i.normal.x > 0 ? t2.max.x : t2.min.x, aa.y = i.normal.y > 0 ? t2.max.y : t2.min.y, aa.z = i.normal.z > 0 ? t2.max.z : t2.min.z, i.distanceToPoint(aa) < 0) return false;
      }
      return true;
    }
    containsPoint(t2) {
      const e = this.planes;
      for (let n = 0; n < 6; n++) if (e[n].distanceToPoint(t2) < 0) return false;
      return true;
    }
    clone() {
      return new this.constructor().copy(this);
    }
  };
  function la() {
    let t2 = null, e = false, n = null, i = null;
    function r(e2, s) {
      n(e2, s), i = t2.requestAnimationFrame(r);
    }
    return { start: function() {
      true !== e && null !== n && (i = t2.requestAnimationFrame(r), e = true);
    }, stop: function() {
      t2.cancelAnimationFrame(i), e = false;
    }, setAnimationLoop: function(t3) {
      n = t3;
    }, setContext: function(e2) {
      t2 = e2;
    } };
  }
  function ca(t2) {
    const e = /* @__PURE__ */ new WeakMap();
    return { get: function(t3) {
      return t3.isInterleavedBufferAttribute && (t3 = t3.data), e.get(t3);
    }, remove: function(n) {
      n.isInterleavedBufferAttribute && (n = n.data);
      const i = e.get(n);
      i && (t2.deleteBuffer(i.buffer), e.delete(n));
    }, update: function(n, i) {
      if (n.isInterleavedBufferAttribute && (n = n.data), n.isGLBufferAttribute) {
        const t3 = e.get(n);
        return void ((!t3 || t3.version < n.version) && e.set(n, { buffer: n.buffer, type: n.type, bytesPerElement: n.elementSize, version: n.version }));
      }
      const r = e.get(n);
      if (void 0 === r) e.set(n, (function(e2, n2) {
        const i2 = e2.array, r2 = e2.usage, s = i2.byteLength, a = t2.createBuffer();
        let o;
        if (t2.bindBuffer(n2, a), t2.bufferData(n2, i2, r2), e2.onUploadCallback(), i2 instanceof Float32Array) o = t2.FLOAT;
        else if (i2 instanceof Uint16Array) o = e2.isFloat16BufferAttribute ? t2.HALF_FLOAT : t2.UNSIGNED_SHORT;
        else if (i2 instanceof Int16Array) o = t2.SHORT;
        else if (i2 instanceof Uint32Array) o = t2.UNSIGNED_INT;
        else if (i2 instanceof Int32Array) o = t2.INT;
        else if (i2 instanceof Int8Array) o = t2.BYTE;
        else if (i2 instanceof Uint8Array) o = t2.UNSIGNED_BYTE;
        else {
          if (!(i2 instanceof Uint8ClampedArray)) throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + i2);
          o = t2.UNSIGNED_BYTE;
        }
        return { buffer: a, type: o, bytesPerElement: i2.BYTES_PER_ELEMENT, version: e2.version, size: s };
      })(n, i));
      else if (r.version < n.version) {
        if (r.size !== n.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
        !(function(e2, n2, i2) {
          const r2 = n2.array, s = n2.updateRanges;
          if (t2.bindBuffer(i2, e2), 0 === s.length) t2.bufferSubData(i2, 0, r2);
          else {
            s.sort(((t3, e4) => t3.start - e4.start));
            let e3 = 0;
            for (let t3 = 1; t3 < s.length; t3++) {
              const n3 = s[e3], i3 = s[t3];
              i3.start <= n3.start + n3.count + 1 ? n3.count = Math.max(n3.count, i3.start + i3.count - n3.start) : (++e3, s[e3] = i3);
            }
            s.length = e3 + 1;
            for (let e4 = 0, n3 = s.length; e4 < n3; e4++) {
              const n4 = s[e4];
              t2.bufferSubData(i2, n4.start * r2.BYTES_PER_ELEMENT, r2, n4.start, n4.count);
            }
            n2.clearUpdateRanges();
          }
          n2.onUploadCallback();
        })(r.buffer, n, i), r.version = n.version;
      }
    } };
  }
  var ha = class _ha extends Es {
    constructor(t2 = 1, e = 1, n = 1, i = 1) {
      super(), this.type = "PlaneGeometry", this.parameters = { width: t2, height: e, widthSegments: n, heightSegments: i };
      const r = t2 / 2, s = e / 2, a = Math.floor(n), o = Math.floor(i), l = a + 1, c = o + 1, h = t2 / a, u2 = e / o, d2 = [], p2 = [], m = [], f = [];
      for (let t3 = 0; t3 < c; t3++) {
        const e2 = t3 * u2 - s;
        for (let n2 = 0; n2 < l; n2++) {
          const i2 = n2 * h - r;
          p2.push(i2, -e2, 0), m.push(0, 0, 1), f.push(n2 / a), f.push(1 - t3 / o);
        }
      }
      for (let t3 = 0; t3 < o; t3++) for (let e2 = 0; e2 < a; e2++) {
        const n2 = e2 + l * t3, i2 = e2 + l * (t3 + 1), r2 = e2 + 1 + l * (t3 + 1), s2 = e2 + 1 + l * t3;
        d2.push(n2, i2, s2), d2.push(i2, r2, s2);
      }
      this.setIndex(d2), this.setAttribute("position", new _s(p2, 3)), this.setAttribute("normal", new _s(m, 3)), this.setAttribute("uv", new _s(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ha(t2.width, t2.height, t2.widthSegments, t2.heightSegments);
    }
  };
  var ua = { alphahash_fragment: "#ifdef USE_ALPHAHASH\n	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;\n#endif", alphahash_pars_fragment: "#ifdef USE_ALPHAHASH\n	const float ALPHA_HASH_SCALE = 0.05;\n	float hash2D( vec2 value ) {\n		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );\n	}\n	float hash3D( vec3 value ) {\n		return hash2D( vec2( hash2D( value.xy ), value.z ) );\n	}\n	float getAlphaHashThreshold( vec3 position ) {\n		float maxDeriv = max(\n			length( dFdx( position.xyz ) ),\n			length( dFdy( position.xyz ) )\n		);\n		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );\n		vec2 pixScales = vec2(\n			exp2( floor( log2( pixScale ) ) ),\n			exp2( ceil( log2( pixScale ) ) )\n		);\n		vec2 alpha = vec2(\n			hash3D( floor( pixScales.x * position.xyz ) ),\n			hash3D( floor( pixScales.y * position.xyz ) )\n		);\n		float lerpFactor = fract( log2( pixScale ) );\n		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;\n		float a = min( lerpFactor, 1.0 - lerpFactor );\n		vec3 cases = vec3(\n			x * x / ( 2.0 * a * ( 1.0 - a ) ),\n			( x - 0.5 * a ) / ( 1.0 - a ),\n			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )\n		);\n		float threshold = ( x < ( 1.0 - a ) )\n			? ( ( x < a ) ? cases.x : cases.y )\n			: cases.z;\n		return clamp( threshold , 1.0e-6, 1.0 );\n	}\n#endif", alphamap_fragment: "#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;\n#endif", alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", alphatest_fragment: "#ifdef USE_ALPHATEST\n	#ifdef ALPHA_TO_COVERAGE\n	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );\n	if ( diffuseColor.a == 0.0 ) discard;\n	#else\n	if ( diffuseColor.a < alphaTest ) discard;\n	#endif\n#endif", alphatest_pars_fragment: "#ifdef USE_ALPHATEST\n	uniform float alphaTest;\n#endif", aomap_fragment: "#ifdef USE_AOMAP\n	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;\n	reflectedLight.indirectDiffuse *= ambientOcclusion;\n	#if defined( USE_CLEARCOAT ) \n		clearcoatSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_SHEEN ) \n		sheenSpecularIndirect *= ambientOcclusion;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD )\n		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );\n		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );\n	#endif\n#endif", aomap_pars_fragment: "#ifdef USE_AOMAP\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n#endif", batching_pars_vertex: "#ifdef USE_BATCHING\n	#if ! defined( GL_ANGLE_multi_draw )\n	#define gl_DrawID _gl_DrawID\n	uniform int _gl_DrawID;\n	#endif\n	uniform highp sampler2D batchingTexture;\n	uniform highp usampler2D batchingIdTexture;\n	mat4 getBatchingMatrix( const in float i ) {\n		int size = textureSize( batchingTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n	float getIndirectIndex( const in int i ) {\n		int size = textureSize( batchingIdTexture, 0 ).x;\n		int x = i % size;\n		int y = i / size;\n		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );\n	}\n#endif\n#ifdef USE_BATCHING_COLOR\n	uniform sampler2D batchingColorTexture;\n	vec3 getBatchingColor( const in float i ) {\n		int size = textureSize( batchingColorTexture, 0 ).x;\n		int j = int( i );\n		int x = j % size;\n		int y = j / size;\n		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;\n	}\n#endif", batching_vertex: "#ifdef USE_BATCHING\n	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );\n#endif", begin_vertex: "vec3 transformed = vec3( position );\n#ifdef USE_ALPHAHASH\n	vPosition = vec3( position );\n#endif", beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n	vec3 objectTangent = vec3( tangent.xyz );\n#endif", bsdfs: "float G_BlinnPhong_Implicit( ) {\n	return 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( specularColor, 1.0, dotVH );\n	float G = G_BlinnPhong_Implicit( );\n	float D = D_BlinnPhong( shininess, dotNH );\n	return F * ( G * D );\n} // validated", iridescence_fragment: "#ifdef USE_IRIDESCENCE\n	const mat3 XYZ_TO_REC709 = mat3(\n		 3.2404542, -0.9692660,  0.0556434,\n		-1.5371385,  1.8760108, -0.2040259,\n		-0.4985314,  0.0415560,  1.0572252\n	);\n	vec3 Fresnel0ToIor( vec3 fresnel0 ) {\n		vec3 sqrtF0 = sqrt( fresnel0 );\n		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );\n	}\n	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );\n	}\n	float IorToFresnel0( float transmittedIor, float incidentIor ) {\n		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));\n	}\n	vec3 evalSensitivity( float OPD, vec3 shift ) {\n		float phase = 2.0 * PI * OPD * 1.0e-9;\n		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );\n		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );\n		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );\n		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );\n		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );\n		xyz /= 1.0685e-7;\n		vec3 rgb = XYZ_TO_REC709 * xyz;\n		return rgb;\n	}\n	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {\n		vec3 I;\n		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );\n		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );\n		float cosTheta2Sq = 1.0 - sinTheta2Sq;\n		if ( cosTheta2Sq < 0.0 ) {\n			return vec3( 1.0 );\n		}\n		float cosTheta2 = sqrt( cosTheta2Sq );\n		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );\n		float R12 = F_Schlick( R0, 1.0, cosTheta1 );\n		float T121 = 1.0 - R12;\n		float phi12 = 0.0;\n		if ( iridescenceIOR < outsideIOR ) phi12 = PI;\n		float phi21 = PI - phi12;\n		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );\n		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );\n		vec3 phi23 = vec3( 0.0 );\n		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;\n		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;\n		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;\n		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;\n		vec3 phi = vec3( phi21 ) + phi23;\n		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );\n		vec3 r123 = sqrt( R123 );\n		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );\n		vec3 C0 = R12 + Rs;\n		I = C0;\n		vec3 Cm = Rs - T121;\n		for ( int m = 1; m <= 2; ++ m ) {\n			Cm *= r123;\n			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );\n			I += Cm * Sm;\n		}\n		return max( I, vec3( 0.0 ) );\n	}\n#endif", bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n	vec2 dHdxy_fwd() {\n		vec2 dSTdx = dFdx( vBumpMapUv );\n		vec2 dSTdy = dFdy( vBumpMapUv );\n		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;\n		return vec2( dBx, dBy );\n	}\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {\n		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );\n		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n		float fDet = dot( vSigmaX, R1 ) * faceDirection;\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n	}\n#endif", clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n	vec4 plane;\n	#ifdef ALPHA_TO_COVERAGE\n		float distanceToPlane, distanceGradient;\n		float clipOpacity = 1.0;\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n			distanceGradient = fwidth( distanceToPlane ) / 2.0;\n			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			if ( clipOpacity == 0.0 ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			float unionClipOpacity = 1.0;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;\n				distanceGradient = fwidth( distanceToPlane ) / 2.0;\n				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );\n			}\n			#pragma unroll_loop_end\n			clipOpacity *= 1.0 - unionClipOpacity;\n		#endif\n		diffuseColor.a *= clipOpacity;\n		if ( diffuseColor.a == 0.0 ) discard;\n	#else\n		#pragma unroll_loop_start\n		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n			plane = clippingPlanes[ i ];\n			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;\n		}\n		#pragma unroll_loop_end\n		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n			bool clipped = true;\n			#pragma unroll_loop_start\n			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n				plane = clippingPlanes[ i ];\n				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;\n			}\n			#pragma unroll_loop_end\n			if ( clipped ) discard;\n		#endif\n	#endif\n#endif", clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif", clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0\n	varying vec3 vClipPosition;\n#endif", clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0\n	vClipPosition = - mvPosition.xyz;\n#endif", color_fragment: "#if defined( USE_COLOR_ALPHA )\n	diffuseColor *= vColor;\n#elif defined( USE_COLOR )\n	diffuseColor.rgb *= vColor;\n#endif", color_pars_fragment: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR )\n	varying vec3 vColor;\n#endif", color_pars_vertex: "#if defined( USE_COLOR_ALPHA )\n	varying vec4 vColor;\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	varying vec3 vColor;\n#endif", color_vertex: "#if defined( USE_COLOR_ALPHA )\n	vColor = vec4( 1.0 );\n#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )\n	vColor = vec3( 1.0 );\n#endif\n#ifdef USE_COLOR\n	vColor *= color;\n#endif\n#ifdef USE_INSTANCING_COLOR\n	vColor.xyz *= instanceColor.xyz;\n#endif\n#ifdef USE_BATCHING_COLOR\n	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );\n	vColor.xyz *= batchingColor.xyz;\n#endif", common: "#define PI 3.141592653589793\n#define PI2 6.283185307179586\n#define PI_HALF 1.5707963267948966\n#define RECIPROCAL_PI 0.3183098861837907\n#define RECIPROCAL_PI2 0.15915494309189535\n#define EPSILON 1e-6\n#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\n#define whiteComplement( a ) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nvec3 pow2( const in vec3 x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }\nfloat average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }\nhighp float rand( const in vec2 uv ) {\n	const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n	return fract( sin( sn ) * c );\n}\n#ifdef HIGH_PRECISION\n	float precisionSafeLength( vec3 v ) { return length( v ); }\n#else\n	float precisionSafeLength( vec3 v ) {\n		float maxComponent = max3( abs( v ) );\n		return length( v / maxComponent ) * maxComponent;\n	}\n#endif\nstruct IncidentLight {\n	vec3 color;\n	vec3 direction;\n	bool visible;\n};\nstruct ReflectedLight {\n	vec3 directDiffuse;\n	vec3 directSpecular;\n	vec3 indirectDiffuse;\n	vec3 indirectSpecular;\n};\n#ifdef USE_ALPHAHASH\n	varying vec3 vPosition;\n#endif\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nmat3 transposeMat3( const in mat3 m ) {\n	mat3 tmp;\n	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n	return tmp;\n}\nbool isPerspectiveMatrix( mat4 m ) {\n	return m[ 2 ][ 3 ] == - 1.0;\n}\nvec2 equirectUv( in vec3 dir ) {\n	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;\n	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n	return vec2( u, v );\n}\nvec3 BRDF_Lambert( const in vec3 diffuseColor ) {\n	return RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n}\nfloat F_Schlick( const in float f0, const in float f90, const in float dotVH ) {\n	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );\n	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );\n} // validated", cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n	#define cubeUV_minMipLevel 4.0\n	#define cubeUV_minTileSize 16.0\n	float getFace( vec3 direction ) {\n		vec3 absDirection = abs( direction );\n		float face = - 1.0;\n		if ( absDirection.x > absDirection.z ) {\n			if ( absDirection.x > absDirection.y )\n				face = direction.x > 0.0 ? 0.0 : 3.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		} else {\n			if ( absDirection.z > absDirection.y )\n				face = direction.z > 0.0 ? 2.0 : 5.0;\n			else\n				face = direction.y > 0.0 ? 1.0 : 4.0;\n		}\n		return face;\n	}\n	vec2 getUV( vec3 direction, float face ) {\n		vec2 uv;\n		if ( face == 0.0 ) {\n			uv = vec2( direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 1.0 ) {\n			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );\n		} else if ( face == 2.0 ) {\n			uv = vec2( - direction.x, direction.y ) / abs( direction.z );\n		} else if ( face == 3.0 ) {\n			uv = vec2( - direction.z, direction.y ) / abs( direction.x );\n		} else if ( face == 4.0 ) {\n			uv = vec2( - direction.x, direction.z ) / abs( direction.y );\n		} else {\n			uv = vec2( direction.x, direction.y ) / abs( direction.z );\n		}\n		return 0.5 * ( uv + 1.0 );\n	}\n	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {\n		float face = getFace( direction );\n		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );\n		mipInt = max( mipInt, cubeUV_minMipLevel );\n		float faceSize = exp2( mipInt );\n		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;\n		if ( face > 2.0 ) {\n			uv.y += faceSize;\n			face -= 3.0;\n		}\n		uv.x += face * faceSize;\n		uv.x += filterInt * 3.0 * cubeUV_minTileSize;\n		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );\n		uv.x *= CUBEUV_TEXEL_WIDTH;\n		uv.y *= CUBEUV_TEXEL_HEIGHT;\n		#ifdef texture2DGradEXT\n			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;\n		#else\n			return texture2D( envMap, uv ).rgb;\n		#endif\n	}\n	#define cubeUV_r0 1.0\n	#define cubeUV_m0 - 2.0\n	#define cubeUV_r1 0.8\n	#define cubeUV_m1 - 1.0\n	#define cubeUV_r4 0.4\n	#define cubeUV_m4 2.0\n	#define cubeUV_r5 0.305\n	#define cubeUV_m5 3.0\n	#define cubeUV_r6 0.21\n	#define cubeUV_m6 4.0\n	float roughnessToMip( float roughness ) {\n		float mip = 0.0;\n		if ( roughness >= cubeUV_r1 ) {\n			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;\n		} else if ( roughness >= cubeUV_r4 ) {\n			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;\n		} else if ( roughness >= cubeUV_r5 ) {\n			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;\n		} else if ( roughness >= cubeUV_r6 ) {\n			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;\n		} else {\n			mip = - 2.0 * log2( 1.16 * roughness );		}\n		return mip;\n	}\n	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {\n		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );\n		float mipF = fract( mip );\n		float mipInt = floor( mip );\n		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );\n		if ( mipF == 0.0 ) {\n			return vec4( color0, 1.0 );\n		} else {\n			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );\n			return vec4( mix( color0, color1, mipF ), 1.0 );\n		}\n	}\n#endif", defaultnormal_vertex: "vec3 transformedNormal = objectNormal;\n#ifdef USE_TANGENT\n	vec3 transformedTangent = objectTangent;\n#endif\n#ifdef USE_BATCHING\n	mat3 bm = mat3( batchingMatrix );\n	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );\n	transformedNormal = bm * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = bm * transformedTangent;\n	#endif\n#endif\n#ifdef USE_INSTANCING\n	mat3 im = mat3( instanceMatrix );\n	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );\n	transformedNormal = im * transformedNormal;\n	#ifdef USE_TANGENT\n		transformedTangent = im * transformedTangent;\n	#endif\n#endif\ntransformedNormal = normalMatrix * transformedNormal;\n#ifdef FLIP_SIDED\n	transformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;\n	#ifdef FLIP_SIDED\n		transformedTangent = - transformedTangent;\n	#endif\n#endif", displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n#endif", displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );\n#endif", emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE\n		emissiveColor = sRGBTransferEOTF( emissiveColor );\n	#endif\n	totalEmissiveRadiance *= emissiveColor.rgb;\n#endif", emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n	uniform sampler2D emissiveMap;\n#endif", colorspace_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );", colorspace_pars_fragment: "vec4 LinearTransferOETF( in vec4 value ) {\n	return value;\n}\nvec4 sRGBTransferEOTF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 sRGBTransferOETF( in vec4 value ) {\n	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}", envmap_fragment: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vec3 cameraToFrag;\n		if ( isOrthographic ) {\n			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToFrag = normalize( vWorldPosition - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vec3 reflectVec = reflect( cameraToFrag, worldNormal );\n		#else\n			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );\n		#endif\n	#else\n		vec3 reflectVec = vReflect;\n	#endif\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n	#else\n		vec4 envColor = vec4( 0.0 );\n	#endif\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_MIX )\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n	#elif defined( ENVMAP_BLENDING_ADD )\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n	#endif\n#endif", envmap_common_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float envMapIntensity;\n	uniform float flipEnvMap;\n	uniform mat3 envMapRotation;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	\n#endif", envmap_pars_fragment: "#ifdef USE_ENVMAP\n	uniform float reflectivity;\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		varying vec3 vWorldPosition;\n		uniform float refractionRatio;\n	#else\n		varying vec3 vReflect;\n	#endif\n#endif", envmap_pars_vertex: "#ifdef USE_ENVMAP\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )\n		#define ENV_WORLDPOS\n	#endif\n	#ifdef ENV_WORLDPOS\n		\n		varying vec3 vWorldPosition;\n	#else\n		varying vec3 vReflect;\n		uniform float refractionRatio;\n	#endif\n#endif", envmap_physical_pars_fragment: "#ifdef USE_ENVMAP\n	vec3 getIBLIrradiance( const in vec3 normal ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );\n			return PI * envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {\n		#ifdef ENVMAP_TYPE_CUBE_UV\n			vec3 reflectVec = reflect( - viewDir, normal );\n			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );\n			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );\n			return envMapColor.rgb * envMapIntensity;\n		#else\n			return vec3( 0.0 );\n		#endif\n	}\n	#ifdef USE_ANISOTROPY\n		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {\n			#ifdef ENVMAP_TYPE_CUBE_UV\n				vec3 bentNormal = cross( bitangent, viewDir );\n				bentNormal = normalize( cross( bentNormal, bitangent ) );\n				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );\n				return getIBLRadiance( viewDir, bentNormal, roughness );\n			#else\n				return vec3( 0.0 );\n			#endif\n		}\n	#endif\n#endif", envmap_vertex: "#ifdef USE_ENVMAP\n	#ifdef ENV_WORLDPOS\n		vWorldPosition = worldPosition.xyz;\n	#else\n		vec3 cameraToVertex;\n		if ( isOrthographic ) {\n			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );\n		} else {\n			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n		}\n		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n		#ifdef ENVMAP_MODE_REFLECTION\n			vReflect = reflect( cameraToVertex, worldNormal );\n		#else\n			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n		#endif\n	#endif\n#endif", fog_vertex: "#ifdef USE_FOG\n	vFogDepth = - mvPosition.z;\n#endif", fog_pars_vertex: "#ifdef USE_FOG\n	varying float vFogDepth;\n#endif", fog_fragment: "#ifdef USE_FOG\n	#ifdef FOG_EXP2\n		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );\n	#else\n		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );\n	#endif\n	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif", fog_pars_fragment: "#ifdef USE_FOG\n	uniform vec3 fogColor;\n	varying float vFogDepth;\n	#ifdef FOG_EXP2\n		uniform float fogDensity;\n	#else\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n#endif", gradientmap_pars_fragment: "#ifdef USE_GRADIENTMAP\n	uniform sampler2D gradientMap;\n#endif\nvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n	float dotNL = dot( normal, lightDirection );\n	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n	#ifdef USE_GRADIENTMAP\n		return vec3( texture2D( gradientMap, coord ).r );\n	#else\n		vec2 fw = fwidth( coord ) * 0.5;\n		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );\n	#endif\n}", lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n#endif", lights_lambert_fragment: "LambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularStrength = specularStrength;", lights_lambert_pars_fragment: "varying vec3 vViewPosition;\nstruct LambertMaterial {\n	vec3 diffuseColor;\n	float specularStrength;\n};\nvoid RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Lambert\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert", lights_pars_begin: "uniform bool receiveShadow;\nuniform vec3 ambientLightColor;\n#if defined( USE_LIGHT_PROBES )\n	uniform vec3 lightProbe[ 9 ];\n#endif\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n	float x = normal.x, y = normal.y, z = normal.z;\n	vec3 result = shCoefficients[ 0 ] * 0.886227;\n	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n	return result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {\n	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n	return irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n	vec3 irradiance = ambientLightColor;\n	return irradiance;\n}\nfloat getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n	if ( cutoffDistance > 0.0 ) {\n		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n	}\n	return distanceFalloff;\n}\nfloat getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {\n	return smoothstep( coneCosine, penumbraCosine, angleCosine );\n}\n#if NUM_DIR_LIGHTS > 0\n	struct DirectionalLight {\n		vec3 direction;\n		vec3 color;\n	};\n	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {\n		light.color = directionalLight.color;\n		light.direction = directionalLight.direction;\n		light.visible = true;\n	}\n#endif\n#if NUM_POINT_LIGHTS > 0\n	struct PointLight {\n		vec3 position;\n		vec3 color;\n		float distance;\n		float decay;\n	};\n	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = pointLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float lightDistance = length( lVector );\n		light.color = pointLight.color;\n		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );\n		light.visible = ( light.color != vec3( 0.0 ) );\n	}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n	struct SpotLight {\n		vec3 position;\n		vec3 direction;\n		vec3 color;\n		float distance;\n		float decay;\n		float coneCos;\n		float penumbraCos;\n	};\n	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {\n		vec3 lVector = spotLight.position - geometryPosition;\n		light.direction = normalize( lVector );\n		float angleCos = dot( light.direction, spotLight.direction );\n		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n		if ( spotAttenuation > 0.0 ) {\n			float lightDistance = length( lVector );\n			light.color = spotLight.color * spotAttenuation;\n			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );\n			light.visible = ( light.color != vec3( 0.0 ) );\n		} else {\n			light.color = vec3( 0.0 );\n			light.visible = false;\n		}\n	}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n	struct RectAreaLight {\n		vec3 color;\n		vec3 position;\n		vec3 halfWidth;\n		vec3 halfHeight;\n	};\n	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;\n	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n	struct HemisphereLight {\n		vec3 direction;\n		vec3 skyColor;\n		vec3 groundColor;\n	};\n	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {\n		float dotNL = dot( normal, hemiLight.direction );\n		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n		return irradiance;\n	}\n#endif", lights_toon_fragment: "ToonMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;", lights_toon_pars_fragment: "varying vec3 vViewPosition;\nstruct ToonMaterial {\n	vec3 diffuseColor;\n};\nvoid RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_Toon\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon", lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;", lights_phong_pars_fragment: "varying vec3 vViewPosition;\nstruct BlinnPhongMaterial {\n	vec3 diffuseColor;\n	vec3 specularColor;\n	float specularShininess;\n	float specularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\n#define RE_Direct				RE_Direct_BlinnPhong\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong", lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nvec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );\nfloat geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );\nmaterial.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;\nmaterial.roughness = min( material.roughness, 1.0 );\n#ifdef IOR\n	material.ior = ior;\n	#ifdef USE_SPECULAR\n		float specularIntensityFactor = specularIntensity;\n		vec3 specularColorFactor = specularColor;\n		#ifdef USE_SPECULAR_COLORMAP\n			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;\n		#endif\n		#ifdef USE_SPECULAR_INTENSITYMAP\n			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;\n		#endif\n		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );\n	#else\n		float specularIntensityFactor = 1.0;\n		vec3 specularColorFactor = vec3( 1.0 );\n		material.specularF90 = 1.0;\n	#endif\n	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );\n#else\n	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );\n	material.specularF90 = 1.0;\n#endif\n#ifdef USE_CLEARCOAT\n	material.clearcoat = clearcoat;\n	material.clearcoatRoughness = clearcoatRoughness;\n	material.clearcoatF0 = vec3( 0.04 );\n	material.clearcoatF90 = 1.0;\n	#ifdef USE_CLEARCOATMAP\n		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;\n	#endif\n	#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;\n	#endif\n	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );\n	material.clearcoatRoughness += geometryRoughness;\n	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );\n#endif\n#ifdef USE_DISPERSION\n	material.dispersion = dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	material.iridescence = iridescence;\n	material.iridescenceIOR = iridescenceIOR;\n	#ifdef USE_IRIDESCENCEMAP\n		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;\n	#endif\n	#ifdef USE_IRIDESCENCE_THICKNESSMAP\n		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;\n	#else\n		material.iridescenceThickness = iridescenceThicknessMaximum;\n	#endif\n#endif\n#ifdef USE_SHEEN\n	material.sheenColor = sheenColor;\n	#ifdef USE_SHEEN_COLORMAP\n		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;\n	#endif\n	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	#ifdef USE_ANISOTROPYMAP\n		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );\n		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;\n		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;\n	#else\n		vec2 anisotropyV = anisotropyVector;\n	#endif\n	material.anisotropy = length( anisotropyV );\n	if( material.anisotropy == 0.0 ) {\n		anisotropyV = vec2( 1.0, 0.0 );\n	} else {\n		anisotropyV /= material.anisotropy;\n		material.anisotropy = saturate( material.anisotropy );\n	}\n	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );\n	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;\n	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;\n#endif", lights_physical_pars_fragment: "struct PhysicalMaterial {\n	vec3 diffuseColor;\n	float roughness;\n	vec3 specularColor;\n	float specularF90;\n	float dispersion;\n	#ifdef USE_CLEARCOAT\n		float clearcoat;\n		float clearcoatRoughness;\n		vec3 clearcoatF0;\n		float clearcoatF90;\n	#endif\n	#ifdef USE_IRIDESCENCE\n		float iridescence;\n		float iridescenceIOR;\n		float iridescenceThickness;\n		vec3 iridescenceFresnel;\n		vec3 iridescenceF0;\n	#endif\n	#ifdef USE_SHEEN\n		vec3 sheenColor;\n		float sheenRoughness;\n	#endif\n	#ifdef IOR\n		float ior;\n	#endif\n	#ifdef USE_TRANSMISSION\n		float transmission;\n		float transmissionAlpha;\n		float thickness;\n		float attenuationDistance;\n		vec3 attenuationColor;\n	#endif\n	#ifdef USE_ANISOTROPY\n		float anisotropy;\n		float alphaT;\n		vec3 anisotropyT;\n		vec3 anisotropyB;\n	#endif\n};\nvec3 clearcoatSpecularDirect = vec3( 0.0 );\nvec3 clearcoatSpecularIndirect = vec3( 0.0 );\nvec3 sheenSpecularDirect = vec3( 0.0 );\nvec3 sheenSpecularIndirect = vec3(0.0 );\nvec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {\n    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );\n    float x2 = x * x;\n    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );\n    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );\n}\nfloat V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n	float a2 = pow2( alpha );\n	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n	return 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n	float a2 = pow2( alpha );\n	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n	return RECIPROCAL_PI * a2 / pow2( denom );\n}\n#ifdef USE_ANISOTROPY\n	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {\n		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );\n		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );\n		float v = 0.5 / ( gv + gl );\n		return saturate(v);\n	}\n	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {\n		float a2 = alphaT * alphaB;\n		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );\n		highp float v2 = dot( v, v );\n		float w2 = a2 / v2;\n		return RECIPROCAL_PI * a2 * pow2 ( w2 );\n	}\n#endif\n#ifdef USE_CLEARCOAT\n	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {\n		vec3 f0 = material.clearcoatF0;\n		float f90 = material.clearcoatF90;\n		float roughness = material.clearcoatRoughness;\n		float alpha = pow2( roughness );\n		vec3 halfDir = normalize( lightDir + viewDir );\n		float dotNL = saturate( dot( normal, lightDir ) );\n		float dotNV = saturate( dot( normal, viewDir ) );\n		float dotNH = saturate( dot( normal, halfDir ) );\n		float dotVH = saturate( dot( viewDir, halfDir ) );\n		vec3 F = F_Schlick( f0, f90, dotVH );\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n		return F * ( V * D );\n	}\n#endif\nvec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {\n	vec3 f0 = material.specularColor;\n	float f90 = material.specularF90;\n	float roughness = material.roughness;\n	float alpha = pow2( roughness );\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotVH = saturate( dot( viewDir, halfDir ) );\n	vec3 F = F_Schlick( f0, f90, dotVH );\n	#ifdef USE_IRIDESCENCE\n		F = mix( F, material.iridescenceFresnel, material.iridescence );\n	#endif\n	#ifdef USE_ANISOTROPY\n		float dotTL = dot( material.anisotropyT, lightDir );\n		float dotTV = dot( material.anisotropyT, viewDir );\n		float dotTH = dot( material.anisotropyT, halfDir );\n		float dotBL = dot( material.anisotropyB, lightDir );\n		float dotBV = dot( material.anisotropyB, viewDir );\n		float dotBH = dot( material.anisotropyB, halfDir );\n		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );\n		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );\n	#else\n		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n		float D = D_GGX( alpha, dotNH );\n	#endif\n	return F * ( V * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n	const float LUT_SIZE = 64.0;\n	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n	const float LUT_BIAS = 0.5 / LUT_SIZE;\n	float dotNV = saturate( dot( N, V ) );\n	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n	uv = uv * LUT_SCALE + LUT_BIAS;\n	return uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n	float l = length( f );\n	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n	float x = dot( v1, v2 );\n	float y = abs( x );\n	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n	float b = 3.4175940 + ( 4.1616724 + y ) * y;\n	float v = a / b;\n	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n	return cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n	vec3 lightNormal = cross( v1, v2 );\n	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n	vec3 T1, T2;\n	T1 = normalize( V - N * dot( V, N ) );\n	T2 = - cross( N, T1 );\n	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n	vec3 coords[ 4 ];\n	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n	coords[ 0 ] = normalize( coords[ 0 ] );\n	coords[ 1 ] = normalize( coords[ 1 ] );\n	coords[ 2 ] = normalize( coords[ 2 ] );\n	coords[ 3 ] = normalize( coords[ 3 ] );\n	vec3 vectorFormFactor = vec3( 0.0 );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n	return vec3( result );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie( float roughness, float dotNH ) {\n	float alpha = pow2( roughness );\n	float invAlpha = 1.0 / alpha;\n	float cos2h = dotNH * dotNH;\n	float sin2h = max( 1.0 - cos2h, 0.0078125 );\n	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );\n}\nfloat V_Neubelt( float dotNV, float dotNL ) {\n	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );\n}\nvec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {\n	vec3 halfDir = normalize( lightDir + viewDir );\n	float dotNL = saturate( dot( normal, lightDir ) );\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float D = D_Charlie( sheenRoughness, dotNH );\n	float V = V_Neubelt( dotNV, dotNL );\n	return sheenColor * ( D * V );\n}\n#endif\nfloat IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	float r2 = roughness * roughness;\n	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;\n	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;\n	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );\n	return saturate( DG * RECIPROCAL_PI );\n}\nvec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {\n	float dotNV = saturate( dot( normal, viewDir ) );\n	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n	vec4 r = roughness * c0 + c1;\n	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;\n	return fab;\n}\nvec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	return specularColor * fab.x + specularF90 * fab.y;\n}\n#ifdef USE_IRIDESCENCE\nvoid computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#else\nvoid computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n#endif\n	vec2 fab = DFGApprox( normal, viewDir, roughness );\n	#ifdef USE_IRIDESCENCE\n		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );\n	#else\n		vec3 Fr = specularColor;\n	#endif\n	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;\n	float Ess = fab.x + fab.y;\n	float Ems = 1.0 - Ess;\n	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n	singleScatter += FssEss;\n	multiScatter += Fms * Ems;\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n		vec3 normal = geometryNormal;\n		vec3 viewDir = geometryViewDir;\n		vec3 position = geometryPosition;\n		vec3 lightPos = rectAreaLight.position;\n		vec3 halfWidth = rectAreaLight.halfWidth;\n		vec3 halfHeight = rectAreaLight.halfHeight;\n		vec3 lightColor = rectAreaLight.color;\n		float roughness = material.roughness;\n		vec3 rectCoords[ 4 ];\n		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n		vec2 uv = LTC_Uv( normal, viewDir, roughness );\n		vec4 t1 = texture2D( ltc_1, uv );\n		vec4 t2 = texture2D( ltc_2, uv );\n		mat3 mInv = mat3(\n			vec3( t1.x, 0, t1.y ),\n			vec3(    0, 1,    0 ),\n			vec3( t1.z, 0, t1.w )\n		);\n		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n	}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );\n	vec3 irradiance = dotNL * directLight.color;\n	#ifdef USE_CLEARCOAT\n		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );\n		vec3 ccIrradiance = dotNLcc * directLight.color;\n		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );\n	#endif\n	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );\n	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n	#ifdef USE_CLEARCOAT\n		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );\n	#endif\n	#ifdef USE_SHEEN\n		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );\n	#endif\n	vec3 singleScattering = vec3( 0.0 );\n	vec3 multiScattering = vec3( 0.0 );\n	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n	#ifdef USE_IRIDESCENCE\n		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );\n	#else\n		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );\n	#endif\n	vec3 totalScattering = singleScattering + multiScattering;\n	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );\n	reflectedLight.indirectSpecular += radiance * singleScattering;\n	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;\n	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n}\n#define RE_Direct				RE_Direct_Physical\n#define RE_Direct_RectArea		RE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular		RE_IndirectSpecular_Physical\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}", lights_fragment_begin: "\nvec3 geometryPosition = - vViewPosition;\nvec3 geometryNormal = normal;\nvec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );\nvec3 geometryClearcoatNormal = vec3( 0.0 );\n#ifdef USE_CLEARCOAT\n	geometryClearcoatNormal = clearcoatNormal;\n#endif\n#ifdef USE_IRIDESCENCE\n	float dotNVi = saturate( dot( normal, geometryViewDir ) );\n	if ( material.iridescenceThickness == 0.0 ) {\n		material.iridescence = 0.0;\n	} else {\n		material.iridescence = saturate( material.iridescence );\n	}\n	if ( material.iridescence > 0.0 ) {\n		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );\n		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );\n	}\n#endif\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n	PointLight pointLight;\n	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n		pointLight = pointLights[ i ];\n		getPointLightInfo( pointLight, geometryPosition, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )\n		pointLightShadow = pointLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n	SpotLight spotLight;\n	vec4 spotColor;\n	vec3 spotLightCoord;\n	bool inSpotLightMap;\n	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n		spotLight = spotLights[ i ];\n		getSpotLightInfo( spotLight, geometryPosition, directLight );\n		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX\n		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS\n		#else\n		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )\n		#endif\n		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )\n			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;\n			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );\n			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );\n			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;\n		#endif\n		#undef SPOT_LIGHT_MAP_INDEX\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n		spotLightShadow = spotLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n	DirectionalLight directionalLight;\n	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLightShadow;\n	#endif\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n		directionalLight = directionalLights[ i ];\n		getDirectionalLightInfo( directionalLight, directLight );\n		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n		directionalLightShadow = directionalLightShadows[ i ];\n		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n		#endif\n		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n	RectAreaLight rectAreaLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n		rectAreaLight = rectAreaLights[ i ];\n		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n	}\n	#pragma unroll_loop_end\n#endif\n#if defined( RE_IndirectDiffuse )\n	vec3 iblIrradiance = vec3( 0.0 );\n	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n	#if defined( USE_LIGHT_PROBES )\n		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );\n	#endif\n	#if ( NUM_HEMI_LIGHTS > 0 )\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if defined( RE_IndirectSpecular )\n	vec3 radiance = vec3( 0.0 );\n	vec3 clearcoatRadiance = vec3( 0.0 );\n#endif", lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;\n		irradiance += lightMapIrradiance;\n	#endif\n	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )\n		iblIrradiance += getIBLIrradiance( geometryNormal );\n	#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n	#ifdef USE_ANISOTROPY\n		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );\n	#else\n		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );\n	#endif\n	#ifdef USE_CLEARCOAT\n		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );\n	#endif\n#endif", lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n#endif", logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF )\n	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif", logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF )\n	uniform float logDepthBufFC;\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n	varying float vFragDepth;\n	varying float vIsPerspective;\n#endif", logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n	vFragDepth = 1.0 + gl_Position.w;\n	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );\n#endif", map_fragment: "#ifdef USE_MAP\n	vec4 sampledDiffuseColor = texture2D( map, vMapUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );\n	#endif\n	diffuseColor *= sampledDiffuseColor;\n#endif", map_pars_fragment: "#ifdef USE_MAP\n	uniform sampler2D map;\n#endif", map_particle_fragment: "#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n	#if defined( USE_POINTS_UV )\n		vec2 uv = vUv;\n	#else\n		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n	#endif\n#endif\n#ifdef USE_MAP\n	diffuseColor *= texture2D( map, uv );\n#endif\n#ifdef USE_ALPHAMAP\n	diffuseColor.a *= texture2D( alphaMap, uv ).g;\n#endif", map_particle_pars_fragment: "#if defined( USE_POINTS_UV )\n	varying vec2 vUv;\n#else\n	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )\n		uniform mat3 uvTransform;\n	#endif\n#endif\n#ifdef USE_MAP\n	uniform sampler2D map;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform sampler2D alphaMap;\n#endif", metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );\n	metalnessFactor *= texelMetalness.b;\n#endif", metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n	uniform sampler2D metalnessMap;\n#endif", morphinstance_vertex: "#ifdef USE_INSTANCING_MORPH\n	float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;\n	}\n#endif", morphcolor_vertex: "#if defined( USE_MORPHCOLORS )\n	vColor *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		#if defined( USE_COLOR_ALPHA )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];\n		#elif defined( USE_COLOR )\n			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];\n		#endif\n	}\n#endif", morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n	objectNormal *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n	#ifndef USE_INSTANCING_MORPH\n		uniform float morphTargetBaseInfluence;\n		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];\n	#endif\n	uniform sampler2DArray morphTargetsTexture;\n	uniform ivec2 morphTargetsTextureSize;\n	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {\n		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;\n		int y = texelIndex / morphTargetsTextureSize.x;\n		int x = texelIndex - y * morphTargetsTextureSize.x;\n		ivec3 morphUV = ivec3( x, y, morphTargetIndex );\n		return texelFetch( morphTargetsTexture, morphUV, 0 );\n	}\n#endif", morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n	transformed *= morphTargetBaseInfluence;\n	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {\n		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];\n	}\n#endif", normal_fragment_begin: "float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;\n#ifdef FLAT_SHADED\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n#else\n	vec3 normal = normalize( vNormal );\n	#ifdef DOUBLE_SIDED\n		normal *= faceDirection;\n	#endif\n#endif\n#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )\n	#ifdef USE_TANGENT\n		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn = getTangentFrame( - vViewPosition, normal,\n		#if defined( USE_NORMALMAP )\n			vNormalMapUv\n		#elif defined( USE_CLEARCOAT_NORMALMAP )\n			vClearcoatNormalMapUv\n		#else\n			vUv\n		#endif\n		);\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn[0] *= faceDirection;\n		tbn[1] *= faceDirection;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	#ifdef USE_TANGENT\n		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );\n	#else\n		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );\n	#endif\n	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )\n		tbn2[0] *= faceDirection;\n		tbn2[1] *= faceDirection;\n	#endif\n#endif\nvec3 nonPerturbedNormal = normal;", normal_fragment_maps: "#ifdef USE_NORMALMAP_OBJECTSPACE\n	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	#ifdef FLIP_SIDED\n		normal = - normal;\n	#endif\n	#ifdef DOUBLE_SIDED\n		normal = normal * faceDirection;\n	#endif\n	normal = normalize( normalMatrix * normal );\n#elif defined( USE_NORMALMAP_TANGENTSPACE )\n	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;\n	mapN.xy *= normalScale;\n	normal = normalize( tbn * mapN );\n#elif defined( USE_BUMPMAP )\n	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );\n#endif", normal_pars_fragment: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_pars_vertex: "#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n	#ifdef USE_TANGENT\n		varying vec3 vTangent;\n		varying vec3 vBitangent;\n	#endif\n#endif", normal_vertex: "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n	#ifdef USE_TANGENT\n		vTangent = normalize( transformedTangent );\n		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n	#endif\n#endif", normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n#endif\n#ifdef USE_NORMALMAP_OBJECTSPACE\n	uniform mat3 normalMatrix;\n#endif\n#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )\n	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( uv.st );\n		vec2 st1 = dFdy( uv.st );\n		vec3 N = surf_norm;\n		vec3 q1perp = cross( q1, N );\n		vec3 q0perp = cross( N, q0 );\n		vec3 T = q1perp * st0.x + q0perp * st1.x;\n		vec3 B = q1perp * st0.y + q0perp * st1.y;\n		float det = max( dot( T, T ), dot( B, B ) );\n		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );\n		return mat3( T * scale, B * scale, N );\n	}\n#endif", clearcoat_normal_fragment_begin: "#ifdef USE_CLEARCOAT\n	vec3 clearcoatNormal = nonPerturbedNormal;\n#endif", clearcoat_normal_fragment_maps: "#ifdef USE_CLEARCOAT_NORMALMAP\n	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;\n	clearcoatMapN.xy *= clearcoatNormalScale;\n	clearcoatNormal = normalize( tbn2 * clearcoatMapN );\n#endif", clearcoat_pars_fragment: "#ifdef USE_CLEARCOATMAP\n	uniform sampler2D clearcoatMap;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform sampler2D clearcoatNormalMap;\n	uniform vec2 clearcoatNormalScale;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform sampler2D clearcoatRoughnessMap;\n#endif", iridescence_pars_fragment: "#ifdef USE_IRIDESCENCEMAP\n	uniform sampler2D iridescenceMap;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform sampler2D iridescenceThicknessMap;\n#endif", opaque_fragment: "#ifdef OPAQUE\ndiffuseColor.a = 1.0;\n#endif\n#ifdef USE_TRANSMISSION\ndiffuseColor.a *= material.transmissionAlpha;\n#endif\ngl_FragColor = vec4( outgoingLight, diffuseColor.a );", packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n	return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n	return 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;\nconst float Inv255 = 1. / 255.;\nconst vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );\nconst vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );\nconst vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );\nconst vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );\nvec4 packDepthToRGBA( const in float v ) {\n	if( v <= 0.0 )\n		return vec4( 0., 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec4( 1., 1., 1., 1. );\n	float vuf;\n	float af = modf( v * PackFactors.a, vuf );\n	float bf = modf( vuf * ShiftRight8, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );\n}\nvec3 packDepthToRGB( const in float v ) {\n	if( v <= 0.0 )\n		return vec3( 0., 0., 0. );\n	if( v >= 1.0 )\n		return vec3( 1., 1., 1. );\n	float vuf;\n	float bf = modf( v * PackFactors.b, vuf );\n	float gf = modf( vuf * ShiftRight8, vuf );\n	return vec3( vuf * Inv255, gf * PackUpscale, bf );\n}\nvec2 packDepthToRG( const in float v ) {\n	if( v <= 0.0 )\n		return vec2( 0., 0. );\n	if( v >= 1.0 )\n		return vec2( 1., 1. );\n	float vuf;\n	float gf = modf( v * 256., vuf );\n	return vec2( vuf * Inv255, gf );\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n	return dot( v, UnpackFactors4 );\n}\nfloat unpackRGBToDepth( const in vec3 v ) {\n	return dot( v, UnpackFactors3 );\n}\nfloat unpackRGToDepth( const in vec2 v ) {\n	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;\n}\nvec4 pack2HalfToRGBA( const in vec2 v ) {\n	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );\n	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );\n}\nvec2 unpackRGBATo2Half( const in vec4 v ) {\n	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return depth * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {\n	return ( near * far ) / ( ( far - near ) * depth - far );\n}", premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n	gl_FragColor.rgb *= gl_FragColor.a;\n#endif", project_vertex: "vec4 mvPosition = vec4( transformed, 1.0 );\n#ifdef USE_BATCHING\n	mvPosition = batchingMatrix * mvPosition;\n#endif\n#ifdef USE_INSTANCING\n	mvPosition = instanceMatrix * mvPosition;\n#endif\nmvPosition = modelViewMatrix * mvPosition;\ngl_Position = projectionMatrix * mvPosition;", dithering_fragment: "#ifdef DITHERING\n	gl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif", dithering_pars_fragment: "#ifdef DITHERING\n	vec3 dithering( vec3 color ) {\n		float grid_position = rand( gl_FragCoord.xy );\n		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n		return color + dither_shift_RGB;\n	}\n#endif", roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );\n	roughnessFactor *= texelRoughness.g;\n#endif", roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n	uniform sampler2D roughnessMap;\n#endif", shadowmap_pars_fragment: "#if NUM_SPOT_LIGHT_COORDS > 0\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#if NUM_SPOT_LIGHT_MAPS > 0\n	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n	}\n	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {\n		return unpackRGBATo2Half( texture2D( shadow, uv ) );\n	}\n	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){\n		float occlusion = 1.0;\n		vec2 distribution = texture2DDistribution( shadow, uv );\n		float hard_shadow = step( compare , distribution.x );\n		if (hard_shadow != 1.0 ) {\n			float distance = compare - distribution.x ;\n			float variance = max( 0.00000, distribution.y * distribution.y );\n			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );\n		}\n		return occlusion;\n	}\n	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n		float shadow = 1.0;\n		shadowCoord.xyz /= shadowCoord.w;\n		shadowCoord.z += shadowBias;\n		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;\n		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;\n		if ( frustumTest ) {\n		#if defined( SHADOWMAP_TYPE_PCF )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx0 = - texelSize.x * shadowRadius;\n			float dy0 = - texelSize.y * shadowRadius;\n			float dx1 = + texelSize.x * shadowRadius;\n			float dy1 = + texelSize.y * shadowRadius;\n			float dx2 = dx0 / 2.0;\n			float dy2 = dy0 / 2.0;\n			float dx3 = dx1 / 2.0;\n			float dy3 = dy1 / 2.0;\n			shadow = (\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n			) * ( 1.0 / 17.0 );\n		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n			float dx = texelSize.x;\n			float dy = texelSize.y;\n			vec2 uv = shadowCoord.xy;\n			vec2 f = fract( uv * shadowMapSize + 0.5 );\n			uv -= f * texelSize;\n			shadow = (\n				texture2DCompare( shadowMap, uv, shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +\n				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),\n					 f.x ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),\n					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),\n					 f.y ) +\n				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),\n						  f.x ),\n					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),\n						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),\n						  f.x ),\n					 f.y )\n			) * ( 1.0 / 9.0 );\n		#elif defined( SHADOWMAP_TYPE_VSM )\n			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#else\n			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n		#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n	vec2 cubeToUV( vec3 v, float texelSizeY ) {\n		vec3 absV = abs( v );\n		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n		absV *= scaleToCube;\n		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n		vec2 planar = v.xy;\n		float almostATexel = 1.5 * texelSizeY;\n		float almostOne = 1.0 - almostATexel;\n		if ( absV.z >= almostOne ) {\n			if ( v.z > 0.0 )\n				planar.x = 4.0 - v.x;\n		} else if ( absV.x >= almostOne ) {\n			float signX = sign( v.x );\n			planar.x = v.z * signX + 2.0 * signX;\n		} else if ( absV.y >= almostOne ) {\n			float signY = sign( v.y );\n			planar.x = v.x + 2.0 * signY + 2.0;\n			planar.y = v.z * signY - 2.0;\n		}\n		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n	}\n	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n		float shadow = 1.0;\n		vec3 lightToPosition = shadowCoord.xyz;\n		\n		float lightToPositionLength = length( lightToPosition );\n		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {\n			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;\n			vec3 bd3D = normalize( lightToPosition );\n			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )\n				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n				shadow = (\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n				) * ( 1.0 / 9.0 );\n			#else\n				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n			#endif\n		}\n		return mix( 1.0, shadow, shadowIntensity );\n	}\n#endif", shadowmap_pars_vertex: "#if NUM_SPOT_LIGHT_COORDS > 0\n	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];\n	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];\n#endif\n#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];\n		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];\n		struct DirectionalLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n		struct SpotLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n		};\n		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];\n		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];\n		struct PointLightShadow {\n			float shadowIntensity;\n			float shadowBias;\n			float shadowNormalBias;\n			float shadowRadius;\n			vec2 shadowMapSize;\n			float shadowCameraNear;\n			float shadowCameraFar;\n		};\n		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];\n	#endif\n#endif", shadowmap_vertex: "#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )\n	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n	vec4 shadowWorldPosition;\n#endif\n#if defined( USE_SHADOWMAP )\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );\n			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n		#pragma unroll_loop_start\n		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );\n			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;\n		}\n		#pragma unroll_loop_end\n	#endif\n#endif\n#if NUM_SPOT_LIGHT_COORDS > 0\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {\n		shadowWorldPosition = worldPosition;\n		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )\n			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;\n		#endif\n		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;\n	}\n	#pragma unroll_loop_end\n#endif", shadowmask_pars_fragment: "float getShadowMask() {\n	float shadow = 1.0;\n	#ifdef USE_SHADOWMAP\n	#if NUM_DIR_LIGHT_SHADOWS > 0\n	DirectionalLightShadow directionalLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {\n		directionalLight = directionalLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_SPOT_LIGHT_SHADOWS > 0\n	SpotLightShadow spotLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {\n		spotLight = spotLightShadows[ i ];\n		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#if NUM_POINT_LIGHT_SHADOWS > 0\n	PointLightShadow pointLight;\n	#pragma unroll_loop_start\n	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {\n		pointLight = pointLightShadows[ i ];\n		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n	}\n	#pragma unroll_loop_end\n	#endif\n	#endif\n	return shadow;\n}", skinbase_vertex: "#ifdef USE_SKINNING\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif", skinning_pars_vertex: "#ifdef USE_SKINNING\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n	uniform highp sampler2D boneTexture;\n	mat4 getBoneMatrix( const in float i ) {\n		int size = textureSize( boneTexture, 0 ).x;\n		int j = int( i ) * 4;\n		int x = j % size;\n		int y = j / size;\n		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );\n		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );\n		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );\n		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );\n		return mat4( v1, v2, v3, v4 );\n	}\n#endif", skinning_vertex: "#ifdef USE_SKINNING\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	transformed = ( bindMatrixInverse * skinned ).xyz;\n#endif", skinnormal_vertex: "#ifdef USE_SKINNING\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n	#ifdef USE_TANGENT\n		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n	#endif\n#endif", specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );\n	specularStrength = texelSpecular.r;\n#else\n	specularStrength = 1.0;\n#endif", specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n	uniform sampler2D specularMap;\n#endif", tonemapping_fragment: "#if defined( TONE_MAPPING )\n	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif", tonemapping_pars_fragment: "#ifndef saturate\n#define saturate( a ) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nvec3 LinearToneMapping( vec3 color ) {\n	return saturate( toneMappingExposure * color );\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	return saturate( color / ( vec3( 1.0 ) + color ) );\n}\nvec3 CineonToneMapping( vec3 color ) {\n	color *= toneMappingExposure;\n	color = max( vec3( 0.0 ), color - 0.004 );\n	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 RRTAndODTFit( vec3 v ) {\n	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;\n	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;\n	return a / b;\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n	const mat3 ACESInputMat = mat3(\n		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),\n		vec3( 0.04823, 0.01566, 0.83777 )\n	);\n	const mat3 ACESOutputMat = mat3(\n		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),\n		vec3( -0.07367, -0.00605,  1.07602 )\n	);\n	color *= toneMappingExposure / 0.6;\n	color = ACESInputMat * color;\n	color = RRTAndODTFit( color );\n	color = ACESOutputMat * color;\n	return saturate( color );\n}\nconst mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(\n	vec3( 1.6605, - 0.1246, - 0.0182 ),\n	vec3( - 0.5876, 1.1329, - 0.1006 ),\n	vec3( - 0.0728, - 0.0083, 1.1187 )\n);\nconst mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(\n	vec3( 0.6274, 0.0691, 0.0164 ),\n	vec3( 0.3293, 0.9195, 0.0880 ),\n	vec3( 0.0433, 0.0113, 0.8956 )\n);\nvec3 agxDefaultContrastApprox( vec3 x ) {\n	vec3 x2 = x * x;\n	vec3 x4 = x2 * x2;\n	return + 15.5 * x4 * x2\n		- 40.14 * x4 * x\n		+ 31.96 * x4\n		- 6.868 * x2 * x\n		+ 0.4298 * x2\n		+ 0.1191 * x\n		- 0.00232;\n}\nvec3 AgXToneMapping( vec3 color ) {\n	const mat3 AgXInsetMatrix = mat3(\n		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),\n		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),\n		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )\n	);\n	const mat3 AgXOutsetMatrix = mat3(\n		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),\n		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),\n		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )\n	);\n	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;\n	color *= toneMappingExposure;\n	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;\n	color = AgXInsetMatrix * color;\n	color = max( color, 1e-10 );	color = log2( color );\n	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );\n	color = clamp( color, 0.0, 1.0 );\n	color = agxDefaultContrastApprox( color );\n	color = AgXOutsetMatrix * color;\n	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );\n	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;\n	color = clamp( color, 0.0, 1.0 );\n	return color;\n}\nvec3 NeutralToneMapping( vec3 color ) {\n	const float StartCompression = 0.8 - 0.04;\n	const float Desaturation = 0.15;\n	color *= toneMappingExposure;\n	float x = min( color.r, min( color.g, color.b ) );\n	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;\n	color -= offset;\n	float peak = max( color.r, max( color.g, color.b ) );\n	if ( peak < StartCompression ) return color;\n	float d = 1. - StartCompression;\n	float newPeak = 1. - d * d / ( peak + d - StartCompression );\n	color *= newPeak / peak;\n	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );\n	return mix( color, vec3( newPeak ), g );\n}\nvec3 CustomToneMapping( vec3 color ) { return color; }", transmission_fragment: "#ifdef USE_TRANSMISSION\n	material.transmission = transmission;\n	material.transmissionAlpha = 1.0;\n	material.thickness = thickness;\n	material.attenuationDistance = attenuationDistance;\n	material.attenuationColor = attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;\n	#endif\n	vec3 pos = vWorldPosition;\n	vec3 v = normalize( cameraPosition - pos );\n	vec3 n = inverseTransformDirection( normal, viewMatrix );\n	vec4 transmitted = getIBLVolumeRefraction(\n		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,\n		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,\n		material.attenuationColor, material.attenuationDistance );\n	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );\n	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );\n#endif", transmission_pars_fragment: "#ifdef USE_TRANSMISSION\n	uniform float transmission;\n	uniform float thickness;\n	uniform float attenuationDistance;\n	uniform vec3 attenuationColor;\n	#ifdef USE_TRANSMISSIONMAP\n		uniform sampler2D transmissionMap;\n	#endif\n	#ifdef USE_THICKNESSMAP\n		uniform sampler2D thicknessMap;\n	#endif\n	uniform vec2 transmissionSamplerSize;\n	uniform sampler2D transmissionSamplerMap;\n	uniform mat4 modelMatrix;\n	uniform mat4 projectionMatrix;\n	varying vec3 vWorldPosition;\n	float w0( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );\n	}\n	float w1( float a ) {\n		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );\n	}\n	float w2( float a ){\n		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );\n	}\n	float w3( float a ) {\n		return ( 1.0 / 6.0 ) * ( a * a * a );\n	}\n	float g0( float a ) {\n		return w0( a ) + w1( a );\n	}\n	float g1( float a ) {\n		return w2( a ) + w3( a );\n	}\n	float h0( float a ) {\n		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );\n	}\n	float h1( float a ) {\n		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );\n	}\n	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {\n		uv = uv * texelSize.zw + 0.5;\n		vec2 iuv = floor( uv );\n		vec2 fuv = fract( uv );\n		float g0x = g0( fuv.x );\n		float g1x = g1( fuv.x );\n		float h0x = h0( fuv.x );\n		float h1x = h1( fuv.x );\n		float h0y = h0( fuv.y );\n		float h1y = h1( fuv.y );\n		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;\n		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;\n		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +\n			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );\n	}\n	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {\n		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );\n		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );\n		vec2 fLodSizeInv = 1.0 / fLodSize;\n		vec2 cLodSizeInv = 1.0 / cLodSize;\n		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );\n		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );\n		return mix( fSample, cSample, fract( lod ) );\n	}\n	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {\n		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );\n		vec3 modelScale;\n		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );\n		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );\n		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );\n		return normalize( refractionVector ) * thickness * modelScale;\n	}\n	float applyIorToRoughness( const in float roughness, const in float ior ) {\n		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );\n	}\n	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {\n		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );\n		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );\n	}\n	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {\n		if ( isinf( attenuationDistance ) ) {\n			return vec3( 1.0 );\n		} else {\n			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;\n			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;\n		}\n	}\n	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,\n		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,\n		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,\n		const in vec3 attenuationColor, const in float attenuationDistance ) {\n		vec4 transmittedLight;\n		vec3 transmittance;\n		#ifdef USE_DISPERSION\n			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;\n			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );\n			for ( int i = 0; i < 3; i ++ ) {\n				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );\n				vec3 refractedRayExit = position + transmissionRay;\n		\n				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n				vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n				refractionCoords += 1.0;\n				refractionCoords /= 2.0;\n		\n				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );\n				transmittedLight[ i ] = transmissionSample[ i ];\n				transmittedLight.a += transmissionSample.a;\n				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];\n			}\n			transmittedLight.a /= 3.0;\n		\n		#else\n		\n			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );\n			vec3 refractedRayExit = position + transmissionRay;\n			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );\n			vec2 refractionCoords = ndcPos.xy / ndcPos.w;\n			refractionCoords += 1.0;\n			refractionCoords /= 2.0;\n			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );\n			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );\n		\n		#endif\n		vec3 attenuatedColor = transmittance * transmittedLight.rgb;\n		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );\n		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;\n		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );\n	}\n#endif", uv_pars_fragment: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_pars_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	varying vec2 vUv;\n#endif\n#ifdef USE_MAP\n	uniform mat3 mapTransform;\n	varying vec2 vMapUv;\n#endif\n#ifdef USE_ALPHAMAP\n	uniform mat3 alphaMapTransform;\n	varying vec2 vAlphaMapUv;\n#endif\n#ifdef USE_LIGHTMAP\n	uniform mat3 lightMapTransform;\n	varying vec2 vLightMapUv;\n#endif\n#ifdef USE_AOMAP\n	uniform mat3 aoMapTransform;\n	varying vec2 vAoMapUv;\n#endif\n#ifdef USE_BUMPMAP\n	uniform mat3 bumpMapTransform;\n	varying vec2 vBumpMapUv;\n#endif\n#ifdef USE_NORMALMAP\n	uniform mat3 normalMapTransform;\n	varying vec2 vNormalMapUv;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	uniform mat3 displacementMapTransform;\n	varying vec2 vDisplacementMapUv;\n#endif\n#ifdef USE_EMISSIVEMAP\n	uniform mat3 emissiveMapTransform;\n	varying vec2 vEmissiveMapUv;\n#endif\n#ifdef USE_METALNESSMAP\n	uniform mat3 metalnessMapTransform;\n	varying vec2 vMetalnessMapUv;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	uniform mat3 roughnessMapTransform;\n	varying vec2 vRoughnessMapUv;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	uniform mat3 anisotropyMapTransform;\n	varying vec2 vAnisotropyMapUv;\n#endif\n#ifdef USE_CLEARCOATMAP\n	uniform mat3 clearcoatMapTransform;\n	varying vec2 vClearcoatMapUv;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	uniform mat3 clearcoatNormalMapTransform;\n	varying vec2 vClearcoatNormalMapUv;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	uniform mat3 clearcoatRoughnessMapTransform;\n	varying vec2 vClearcoatRoughnessMapUv;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	uniform mat3 sheenColorMapTransform;\n	varying vec2 vSheenColorMapUv;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	uniform mat3 sheenRoughnessMapTransform;\n	varying vec2 vSheenRoughnessMapUv;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	uniform mat3 iridescenceMapTransform;\n	varying vec2 vIridescenceMapUv;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	uniform mat3 iridescenceThicknessMapTransform;\n	varying vec2 vIridescenceThicknessMapUv;\n#endif\n#ifdef USE_SPECULARMAP\n	uniform mat3 specularMapTransform;\n	varying vec2 vSpecularMapUv;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	uniform mat3 specularColorMapTransform;\n	varying vec2 vSpecularColorMapUv;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	uniform mat3 specularIntensityMapTransform;\n	varying vec2 vSpecularIntensityMapUv;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	uniform mat3 transmissionMapTransform;\n	varying vec2 vTransmissionMapUv;\n#endif\n#ifdef USE_THICKNESSMAP\n	uniform mat3 thicknessMapTransform;\n	varying vec2 vThicknessMapUv;\n#endif", uv_vertex: "#if defined( USE_UV ) || defined( USE_ANISOTROPY )\n	vUv = vec3( uv, 1 ).xy;\n#endif\n#ifdef USE_MAP\n	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ALPHAMAP\n	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_LIGHTMAP\n	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_AOMAP\n	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_BUMPMAP\n	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_NORMALMAP\n	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_DISPLACEMENTMAP\n	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_EMISSIVEMAP\n	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_METALNESSMAP\n	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ROUGHNESSMAP\n	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_ANISOTROPYMAP\n	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOATMAP\n	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_NORMALMAP\n	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_CLEARCOAT_ROUGHNESSMAP\n	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCEMAP\n	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_IRIDESCENCE_THICKNESSMAP\n	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_COLORMAP\n	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SHEEN_ROUGHNESSMAP\n	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULARMAP\n	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_COLORMAP\n	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_SPECULAR_INTENSITYMAP\n	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_TRANSMISSIONMAP\n	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;\n#endif\n#ifdef USE_THICKNESSMAP\n	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;\n#endif", worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0\n	vec4 worldPosition = vec4( transformed, 1.0 );\n	#ifdef USE_BATCHING\n		worldPosition = batchingMatrix * worldPosition;\n	#endif\n	#ifdef USE_INSTANCING\n		worldPosition = instanceMatrix * worldPosition;\n	#endif\n	worldPosition = modelMatrix * worldPosition;\n#endif", background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	gl_Position = vec4( position.xy, 1.0, 1.0 );\n}", background_frag: "uniform sampler2D t2D;\nuniform float backgroundIntensity;\nvarying vec2 vUv;\nvoid main() {\n	vec4 texColor = texture2D( t2D, vUv );\n	#ifdef DECODE_VIDEO_TEXTURE\n		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", backgroundCube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", backgroundCube_frag: "#ifdef ENVMAP_TYPE_CUBE\n	uniform samplerCube envMap;\n#elif defined( ENVMAP_TYPE_CUBE_UV )\n	uniform sampler2D envMap;\n#endif\nuniform float flipEnvMap;\nuniform float backgroundBlurriness;\nuniform float backgroundIntensity;\nuniform mat3 backgroundRotation;\nvarying vec3 vWorldDirection;\n#include <cube_uv_reflection_fragment>\nvoid main() {\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );\n	#elif defined( ENVMAP_TYPE_CUBE_UV )\n		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );\n	#else\n		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n	#endif\n	texColor.rgb *= backgroundIntensity;\n	gl_FragColor = texColor;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n	gl_Position.z = gl_Position.w;\n}", cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n	gl_FragColor = texColor;\n	gl_FragColor.a *= opacity;\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", depth_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vHighPrecisionZW = gl_Position.zw;\n}", depth_frag: "#if DEPTH_PACKING == 3200\n	uniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvarying vec2 vHighPrecisionZW;\nvoid main() {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#if DEPTH_PACKING == 3200\n		diffuseColor.a = opacity;\n	#endif\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <logdepthbuf_fragment>\n	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;\n	#if DEPTH_PACKING == 3200\n		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );\n	#elif DEPTH_PACKING == 3201\n		gl_FragColor = packDepthToRGBA( fragCoordZ );\n	#elif DEPTH_PACKING == 3202\n		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );\n	#elif DEPTH_PACKING == 3203\n		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );\n	#endif\n}", distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <skinbase_vertex>\n	#include <morphinstance_vertex>\n	#ifdef USE_DISPLACEMENTMAP\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <worldpos_vertex>\n	#include <clipping_planes_vertex>\n	vWorldPosition = worldPosition.xyz;\n}", distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n	vec4 diffuseColor = vec4( 1.0 );\n	#include <clipping_planes_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	float dist = length( vWorldPosition - referencePosition );\n	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n	dist = saturate( dist );\n	gl_FragColor = packDepthToRGBA( dist );\n}", equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vWorldDirection = transformDirection( position, modelMatrix );\n	#include <begin_vertex>\n	#include <project_vertex>\n}", equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n	vec3 direction = normalize( vWorldDirection );\n	vec2 sampleUV = equirectUv( direction );\n	gl_FragColor = texture2D( tEquirect, sampleUV );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n}", linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	vLineDistance = scale * lineDistance;\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", meshbasic_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )\n		#include <beginnormal_vertex>\n		#include <morphnormal_vertex>\n		#include <skinbase_vertex>\n		#include <skinnormal_vertex>\n		#include <defaultnormal_vertex>\n	#endif\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <fog_vertex>\n}", meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	#ifdef USE_LIGHTMAP\n		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );\n		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;\n	#else\n		reflectedLight.indirectDiffuse += vec3( 1.0 );\n	#endif\n	#include <aomap_fragment>\n	reflectedLight.indirectDiffuse *= diffuseColor.rgb;\n	vec3 outgoingLight = reflectedLight.indirectDiffuse;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshlambert_vert: "#define LAMBERT\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshlambert_frag: "#define LAMBERT\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_lambert_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_lambert_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <color_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n	vViewPosition = - mvPosition.xyz;\n}", meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#include <common>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	vec3 viewDir = normalize( vViewPosition );\n	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n	vec3 y = cross( viewDir, x );\n	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n	#ifdef USE_MATCAP\n		vec4 matcapColor = texture2D( matcap, uv );\n	#else\n		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );\n	#endif\n	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshnormal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	vViewPosition = - mvPosition.xyz;\n#endif\n}", meshnormal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )\n	varying vec3 vViewPosition;\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <normal_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );\n	#include <clipping_planes_fragment>\n	#include <logdepthbuf_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );\n	#ifdef OPAQUE\n		gl_FragColor.a = 1.0;\n	#endif\n}", meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <envmap_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <specularmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_phong_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n	#include <envmap_fragment>\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshphysical_vert: "#define STANDARD\nvarying vec3 vViewPosition;\n#ifdef USE_TRANSMISSION\n	varying vec3 vWorldPosition;\n#endif\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n#ifdef USE_TRANSMISSION\n	vWorldPosition = worldPosition.xyz;\n#endif\n}", meshphysical_frag: "#define STANDARD\n#ifdef PHYSICAL\n	#define IOR\n	#define USE_SPECULAR\n#endif\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifdef IOR\n	uniform float ior;\n#endif\n#ifdef USE_SPECULAR\n	uniform float specularIntensity;\n	uniform vec3 specularColor;\n	#ifdef USE_SPECULAR_COLORMAP\n		uniform sampler2D specularColorMap;\n	#endif\n	#ifdef USE_SPECULAR_INTENSITYMAP\n		uniform sampler2D specularIntensityMap;\n	#endif\n#endif\n#ifdef USE_CLEARCOAT\n	uniform float clearcoat;\n	uniform float clearcoatRoughness;\n#endif\n#ifdef USE_DISPERSION\n	uniform float dispersion;\n#endif\n#ifdef USE_IRIDESCENCE\n	uniform float iridescence;\n	uniform float iridescenceIOR;\n	uniform float iridescenceThicknessMinimum;\n	uniform float iridescenceThicknessMaximum;\n#endif\n#ifdef USE_SHEEN\n	uniform vec3 sheenColor;\n	uniform float sheenRoughness;\n	#ifdef USE_SHEEN_COLORMAP\n		uniform sampler2D sheenColorMap;\n	#endif\n	#ifdef USE_SHEEN_ROUGHNESSMAP\n		uniform sampler2D sheenRoughnessMap;\n	#endif\n#endif\n#ifdef USE_ANISOTROPY\n	uniform vec2 anisotropyVector;\n	#ifdef USE_ANISOTROPYMAP\n		uniform sampler2D anisotropyMap;\n	#endif\n#endif\nvarying vec3 vViewPosition;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <iridescence_fragment>\n#include <cube_uv_reflection_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_physical_pars_fragment>\n#include <transmission_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <clearcoat_pars_fragment>\n#include <iridescence_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <roughnessmap_fragment>\n	#include <metalnessmap_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <clearcoat_normal_fragment_begin>\n	#include <clearcoat_normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_physical_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;\n	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;\n	#include <transmission_fragment>\n	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;\n	#ifdef USE_SHEEN\n		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );\n		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;\n	#endif\n	#ifdef USE_CLEARCOAT\n		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );\n		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );\n		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;\n	#endif\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", meshtoon_vert: "#define TOON\nvarying vec3 vViewPosition;\n#include <common>\n#include <batching_pars_vertex>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <normal_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <normal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <displacementmap_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	vViewPosition = - mvPosition.xyz;\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", meshtoon_frag: "#define TOON\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <normal_pars_fragment>\n#include <lights_toon_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n	vec3 totalEmissiveRadiance = emissive;\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <color_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	#include <normal_fragment_begin>\n	#include <normal_fragment_maps>\n	#include <emissivemap_fragment>\n	#include <lights_toon_fragment>\n	#include <lights_fragment_begin>\n	#include <lights_fragment_maps>\n	#include <lights_fragment_end>\n	#include <aomap_fragment>\n	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n	#include <dithering_fragment>\n}", points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\n#ifdef USE_POINTS_UV\n	varying vec2 vUv;\n	uniform mat3 uvTransform;\n#endif\nvoid main() {\n	#ifdef USE_POINTS_UV\n		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n	#endif\n	#include <color_vertex>\n	#include <morphinstance_vertex>\n	#include <morphcolor_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <project_vertex>\n	gl_PointSize = size;\n	#ifdef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n	#endif\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <worldpos_vertex>\n	#include <fog_vertex>\n}", points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_particle_fragment>\n	#include <color_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n	#include <premultiplied_alpha_fragment>\n}", shadow_vert: "#include <common>\n#include <batching_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n	#include <batching_vertex>\n	#include <beginnormal_vertex>\n	#include <morphinstance_vertex>\n	#include <morphnormal_vertex>\n	#include <skinbase_vertex>\n	#include <skinnormal_vertex>\n	#include <defaultnormal_vertex>\n	#include <begin_vertex>\n	#include <morphtarget_vertex>\n	#include <skinning_vertex>\n	#include <project_vertex>\n	#include <logdepthbuf_vertex>\n	#include <worldpos_vertex>\n	#include <shadowmap_vertex>\n	#include <fog_vertex>\n}", shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <logdepthbuf_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n	#include <logdepthbuf_fragment>\n	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}", sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n	#include <uv_vertex>\n	vec4 mvPosition = modelViewMatrix[ 3 ];\n	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );\n	#ifndef USE_SIZEATTENUATION\n		bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n		if ( isPerspective ) scale *= - mvPosition.z;\n	#endif\n	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n	vec2 rotatedPosition;\n	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n	mvPosition.xy += rotatedPosition;\n	gl_Position = projectionMatrix * mvPosition;\n	#include <logdepthbuf_vertex>\n	#include <clipping_planes_vertex>\n	#include <fog_vertex>\n}", sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <alphatest_pars_fragment>\n#include <alphahash_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	#include <clipping_planes_fragment>\n	vec3 outgoingLight = vec3( 0.0 );\n	#include <logdepthbuf_fragment>\n	#include <map_fragment>\n	#include <alphamap_fragment>\n	#include <alphatest_fragment>\n	#include <alphahash_fragment>\n	outgoingLight = diffuseColor.rgb;\n	#include <opaque_fragment>\n	#include <tonemapping_fragment>\n	#include <colorspace_fragment>\n	#include <fog_fragment>\n}" };
  var da = { common: { diffuse: { value: new Kr(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Kn() }, alphaMap: { value: null }, alphaMapTransform: { value: new Kn() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Kn() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Kn() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Kn() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Kn() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Kn() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Kn() }, normalScale: { value: new Jn(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Kn() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Kn() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Kn() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Kn() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Kr(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Kr(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Kn() }, alphaTest: { value: 0 }, uvTransform: { value: new Kn() } }, sprite: { diffuse: { value: new Kr(16777215) }, opacity: { value: 1 }, center: { value: new Jn(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Kn() }, alphaMap: { value: null }, alphaMapTransform: { value: new Kn() }, alphaTest: { value: 0 } } };
  var pa = { basic: { uniforms: Hs([da.common, da.specularmap, da.envmap, da.aomap, da.lightmap, da.fog]), vertexShader: ua.meshbasic_vert, fragmentShader: ua.meshbasic_frag }, lambert: { uniforms: Hs([da.common, da.specularmap, da.envmap, da.aomap, da.lightmap, da.emissivemap, da.bumpmap, da.normalmap, da.displacementmap, da.fog, da.lights, { emissive: { value: new Kr(0) } }]), vertexShader: ua.meshlambert_vert, fragmentShader: ua.meshlambert_frag }, phong: { uniforms: Hs([da.common, da.specularmap, da.envmap, da.aomap, da.lightmap, da.emissivemap, da.bumpmap, da.normalmap, da.displacementmap, da.fog, da.lights, { emissive: { value: new Kr(0) }, specular: { value: new Kr(1118481) }, shininess: { value: 30 } }]), vertexShader: ua.meshphong_vert, fragmentShader: ua.meshphong_frag }, standard: { uniforms: Hs([da.common, da.envmap, da.aomap, da.lightmap, da.emissivemap, da.bumpmap, da.normalmap, da.displacementmap, da.roughnessmap, da.metalnessmap, da.fog, da.lights, { emissive: { value: new Kr(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: ua.meshphysical_vert, fragmentShader: ua.meshphysical_frag }, toon: { uniforms: Hs([da.common, da.aomap, da.lightmap, da.emissivemap, da.bumpmap, da.normalmap, da.displacementmap, da.gradientmap, da.fog, da.lights, { emissive: { value: new Kr(0) } }]), vertexShader: ua.meshtoon_vert, fragmentShader: ua.meshtoon_frag }, matcap: { uniforms: Hs([da.common, da.bumpmap, da.normalmap, da.displacementmap, da.fog, { matcap: { value: null } }]), vertexShader: ua.meshmatcap_vert, fragmentShader: ua.meshmatcap_frag }, points: { uniforms: Hs([da.points, da.fog]), vertexShader: ua.points_vert, fragmentShader: ua.points_frag }, dashed: { uniforms: Hs([da.common, da.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: ua.linedashed_vert, fragmentShader: ua.linedashed_frag }, depth: { uniforms: Hs([da.common, da.displacementmap]), vertexShader: ua.depth_vert, fragmentShader: ua.depth_frag }, normal: { uniforms: Hs([da.common, da.bumpmap, da.normalmap, da.displacementmap, { opacity: { value: 1 } }]), vertexShader: ua.meshnormal_vert, fragmentShader: ua.meshnormal_frag }, sprite: { uniforms: Hs([da.sprite, da.fog]), vertexShader: ua.sprite_vert, fragmentShader: ua.sprite_frag }, background: { uniforms: { uvTransform: { value: new Kn() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: ua.background_vert, fragmentShader: ua.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Kn() } }, vertexShader: ua.backgroundCube_vert, fragmentShader: ua.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: ua.cube_vert, fragmentShader: ua.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: ua.equirect_vert, fragmentShader: ua.equirect_frag }, distanceRGBA: { uniforms: Hs([da.common, da.displacementmap, { referencePosition: { value: new Ci() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: ua.distanceRGBA_vert, fragmentShader: ua.distanceRGBA_frag }, shadow: { uniforms: Hs([da.lights, da.fog, { color: { value: new Kr(0) }, opacity: { value: 1 } }]), vertexShader: ua.shadow_vert, fragmentShader: ua.shadow_frag } };
  pa.physical = { uniforms: Hs([pa.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Kn() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Kn() }, clearcoatNormalScale: { value: new Jn(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Kn() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Kn() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Kn() }, sheen: { value: 0 }, sheenColor: { value: new Kr(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Kn() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Kn() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Kn() }, transmissionSamplerSize: { value: new Jn() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Kn() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Kr(0) }, specularColor: { value: new Kr(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Kn() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Kn() }, anisotropyVector: { value: new Jn() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Kn() } }]), vertexShader: ua.meshphysical_vert, fragmentShader: ua.meshphysical_frag };
  var ma = { r: 0, b: 0, g: 0 };
  var fa = new fr();
  var ga = new sr();
  function va(t2, e, n, i, r, s, a) {
    const o = new Kr(0);
    let l, c, h = true === s ? 0 : 1, u2 = null, d2 = 0, p2 = null;
    function m(t3) {
      let i2 = true === t3.isScene ? t3.background : null;
      if (i2 && i2.isTexture) {
        i2 = (t3.backgroundBlurriness > 0 ? n : e).get(i2);
      }
      return i2;
    }
    function f(e2, n2) {
      e2.getRGB(ma, Gs(t2)), i.buffers.color.setClear(ma.r, ma.g, ma.b, n2, a);
    }
    return { getClearColor: function() {
      return o;
    }, setClearColor: function(t3, e2 = 1) {
      o.set(t3), h = e2, f(o, h);
    }, getClearAlpha: function() {
      return h;
    }, setClearAlpha: function(t3) {
      h = t3, f(o, h);
    }, render: function(e2) {
      let n2 = false;
      const r2 = m(e2);
      null === r2 ? f(o, h) : r2 && r2.isColor && (f(r2, 1), n2 = true);
      const s2 = t2.xr.getEnvironmentBlendMode();
      "additive" === s2 ? i.buffers.color.setClear(0, 0, 0, 1, a) : "alpha-blend" === s2 && i.buffers.color.setClear(0, 0, 0, 0, a), (t2.autoClear || n2) && (i.buffers.depth.setTest(true), i.buffers.depth.setMask(true), i.buffers.color.setMask(true), t2.clear(t2.autoClearColor, t2.autoClearDepth, t2.autoClearStencil));
    }, addToRenderList: function(e2, n2) {
      const i2 = m(n2);
      i2 && (i2.isCubeTexture || i2.mapping === dt) ? (void 0 === c && (c = new Bs(new ks(1, 1, 1), new Xs({ name: "BackgroundCubeMaterial", uniforms: Vs(pa.backgroundCube.uniforms), vertexShader: pa.backgroundCube.vertexShader, fragmentShader: pa.backgroundCube.fragmentShader, side: 1, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), c.geometry.deleteAttribute("uv"), c.onBeforeRender = function(t3, e3, n3) {
        this.matrixWorld.copyPosition(n3.matrixWorld);
      }, Object.defineProperty(c.material, "envMap", { get: function() {
        return this.uniforms.envMap.value;
      } }), r.update(c)), fa.copy(n2.backgroundRotation), fa.x *= -1, fa.y *= -1, fa.z *= -1, i2.isCubeTexture && false === i2.isRenderTargetTexture && (fa.y *= -1, fa.z *= -1), c.material.uniforms.envMap.value = i2, c.material.uniforms.flipEnvMap.value = i2.isCubeTexture && false === i2.isRenderTargetTexture ? -1 : 1, c.material.uniforms.backgroundBlurriness.value = n2.backgroundBlurriness, c.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, c.material.uniforms.backgroundRotation.value.setFromMatrix4(ga.makeRotationFromEuler(fa)), c.material.toneMapped = ai.getTransfer(i2.colorSpace) !== Qe, u2 === i2 && d2 === i2.version && p2 === t2.toneMapping || (c.material.needsUpdate = true, u2 = i2, d2 = i2.version, p2 = t2.toneMapping), c.layers.enableAll(), e2.unshift(c, c.geometry, c.material, 0, 0, null)) : i2 && i2.isTexture && (void 0 === l && (l = new Bs(new ha(2, 2), new Xs({ name: "BackgroundMaterial", uniforms: Vs(pa.background.uniforms), vertexShader: pa.background.vertexShader, fragmentShader: pa.background.fragmentShader, side: 0, depthTest: false, depthWrite: false, fog: false })), l.geometry.deleteAttribute("normal"), Object.defineProperty(l.material, "map", { get: function() {
        return this.uniforms.t2D.value;
      } }), r.update(l)), l.material.uniforms.t2D.value = i2, l.material.uniforms.backgroundIntensity.value = n2.backgroundIntensity, l.material.toneMapped = ai.getTransfer(i2.colorSpace) !== Qe, true === i2.matrixAutoUpdate && i2.updateMatrix(), l.material.uniforms.uvTransform.value.copy(i2.matrix), u2 === i2 && d2 === i2.version && p2 === t2.toneMapping || (l.material.needsUpdate = true, u2 = i2, d2 = i2.version, p2 = t2.toneMapping), l.layers.enableAll(), e2.unshift(l, l.geometry, l.material, 0, 0, null));
    } };
  }
  function _a(t2, e) {
    const n = t2.getParameter(t2.MAX_VERTEX_ATTRIBS), i = {}, r = c(null);
    let s = r, a = false;
    function o(e2) {
      return t2.bindVertexArray(e2);
    }
    function l(e2) {
      return t2.deleteVertexArray(e2);
    }
    function c(t3) {
      const e2 = [], i2 = [], r2 = [];
      for (let t4 = 0; t4 < n; t4++) e2[t4] = 0, i2[t4] = 0, r2[t4] = 0;
      return { geometry: null, program: null, wireframe: false, newAttributes: e2, enabledAttributes: i2, attributeDivisors: r2, object: t3, attributes: {}, index: null };
    }
    function h() {
      const t3 = s.newAttributes;
      for (let e2 = 0, n2 = t3.length; e2 < n2; e2++) t3[e2] = 0;
    }
    function u2(t3) {
      d2(t3, 0);
    }
    function d2(e2, n2) {
      const i2 = s.newAttributes, r2 = s.enabledAttributes, a2 = s.attributeDivisors;
      i2[e2] = 1, 0 === r2[e2] && (t2.enableVertexAttribArray(e2), r2[e2] = 1), a2[e2] !== n2 && (t2.vertexAttribDivisor(e2, n2), a2[e2] = n2);
    }
    function p2() {
      const e2 = s.newAttributes, n2 = s.enabledAttributes;
      for (let i2 = 0, r2 = n2.length; i2 < r2; i2++) n2[i2] !== e2[i2] && (t2.disableVertexAttribArray(i2), n2[i2] = 0);
    }
    function m(e2, n2, i2, r2, s2, a2, o2) {
      true === o2 ? t2.vertexAttribIPointer(e2, n2, i2, s2, a2) : t2.vertexAttribPointer(e2, n2, i2, r2, s2, a2);
    }
    function f() {
      g(), a = true, s !== r && (s = r, o(s.object));
    }
    function g() {
      r.geometry = null, r.program = null, r.wireframe = false;
    }
    return { setup: function(n2, r2, l2, f2, g2) {
      let v = false;
      const _ = (function(e2, n3, r3) {
        const s2 = true === r3.wireframe;
        let a2 = i[e2.id];
        void 0 === a2 && (a2 = {}, i[e2.id] = a2);
        let o2 = a2[n3.id];
        void 0 === o2 && (o2 = {}, a2[n3.id] = o2);
        let l3 = o2[s2];
        void 0 === l3 && (l3 = c(t2.createVertexArray()), o2[s2] = l3);
        return l3;
      })(f2, l2, r2);
      s !== _ && (s = _, o(s.object)), v = (function(t3, e2, n3, i2) {
        const r3 = s.attributes, a2 = e2.attributes;
        let o2 = 0;
        const l3 = n3.getAttributes();
        for (const e3 in l3) {
          if (l3[e3].location >= 0) {
            const n4 = r3[e3];
            let i3 = a2[e3];
            if (void 0 === i3 && ("instanceMatrix" === e3 && t3.instanceMatrix && (i3 = t3.instanceMatrix), "instanceColor" === e3 && t3.instanceColor && (i3 = t3.instanceColor)), void 0 === n4) return true;
            if (n4.attribute !== i3) return true;
            if (i3 && n4.data !== i3.data) return true;
            o2++;
          }
        }
        return s.attributesNum !== o2 || s.index !== i2;
      })(n2, f2, l2, g2), v && (function(t3, e2, n3, i2) {
        const r3 = {}, a2 = e2.attributes;
        let o2 = 0;
        const l3 = n3.getAttributes();
        for (const e3 in l3) {
          if (l3[e3].location >= 0) {
            let n4 = a2[e3];
            void 0 === n4 && ("instanceMatrix" === e3 && t3.instanceMatrix && (n4 = t3.instanceMatrix), "instanceColor" === e3 && t3.instanceColor && (n4 = t3.instanceColor));
            const i3 = {};
            i3.attribute = n4, n4 && n4.data && (i3.data = n4.data), r3[e3] = i3, o2++;
          }
        }
        s.attributes = r3, s.attributesNum = o2, s.index = i2;
      })(n2, f2, l2, g2), null !== g2 && e.update(g2, t2.ELEMENT_ARRAY_BUFFER), (v || a) && (a = false, (function(n3, i2, r3, s2) {
        h();
        const a2 = s2.attributes, o2 = r3.getAttributes(), l3 = i2.defaultAttributeValues;
        for (const i3 in o2) {
          const r4 = o2[i3];
          if (r4.location >= 0) {
            let o3 = a2[i3];
            if (void 0 === o3 && ("instanceMatrix" === i3 && n3.instanceMatrix && (o3 = n3.instanceMatrix), "instanceColor" === i3 && n3.instanceColor && (o3 = n3.instanceColor)), void 0 !== o3) {
              const i4 = o3.normalized, a3 = o3.itemSize, l4 = e.get(o3);
              if (void 0 === l4) continue;
              const c2 = l4.buffer, h2 = l4.type, p3 = l4.bytesPerElement, f3 = h2 === t2.INT || h2 === t2.UNSIGNED_INT || o3.gpuType === It;
              if (o3.isInterleavedBufferAttribute) {
                const e2 = o3.data, l5 = e2.stride, g3 = o3.offset;
                if (e2.isInstancedInterleavedBuffer) {
                  for (let t3 = 0; t3 < r4.locationSize; t3++) d2(r4.location + t3, e2.meshPerAttribute);
                  true !== n3.isInstancedMesh && void 0 === s2._maxInstanceCount && (s2._maxInstanceCount = e2.meshPerAttribute * e2.count);
                } else for (let t3 = 0; t3 < r4.locationSize; t3++) u2(r4.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, c2);
                for (let t3 = 0; t3 < r4.locationSize; t3++) m(r4.location + t3, a3 / r4.locationSize, h2, i4, l5 * p3, (g3 + a3 / r4.locationSize * t3) * p3, f3);
              } else {
                if (o3.isInstancedBufferAttribute) {
                  for (let t3 = 0; t3 < r4.locationSize; t3++) d2(r4.location + t3, o3.meshPerAttribute);
                  true !== n3.isInstancedMesh && void 0 === s2._maxInstanceCount && (s2._maxInstanceCount = o3.meshPerAttribute * o3.count);
                } else for (let t3 = 0; t3 < r4.locationSize; t3++) u2(r4.location + t3);
                t2.bindBuffer(t2.ARRAY_BUFFER, c2);
                for (let t3 = 0; t3 < r4.locationSize; t3++) m(r4.location + t3, a3 / r4.locationSize, h2, i4, a3 * p3, a3 / r4.locationSize * t3 * p3, f3);
              }
            } else if (void 0 !== l3) {
              const e2 = l3[i3];
              if (void 0 !== e2) switch (e2.length) {
                case 2:
                  t2.vertexAttrib2fv(r4.location, e2);
                  break;
                case 3:
                  t2.vertexAttrib3fv(r4.location, e2);
                  break;
                case 4:
                  t2.vertexAttrib4fv(r4.location, e2);
                  break;
                default:
                  t2.vertexAttrib1fv(r4.location, e2);
              }
            }
          }
        }
        p2();
      })(n2, r2, l2, f2), null !== g2 && t2.bindBuffer(t2.ELEMENT_ARRAY_BUFFER, e.get(g2).buffer));
    }, reset: f, resetDefaultState: g, dispose: function() {
      f();
      for (const t3 in i) {
        const e2 = i[t3];
        for (const t4 in e2) {
          const n2 = e2[t4];
          for (const t5 in n2) l(n2[t5].object), delete n2[t5];
          delete e2[t4];
        }
        delete i[t3];
      }
    }, releaseStatesOfGeometry: function(t3) {
      if (void 0 === i[t3.id]) return;
      const e2 = i[t3.id];
      for (const t4 in e2) {
        const n2 = e2[t4];
        for (const t5 in n2) l(n2[t5].object), delete n2[t5];
        delete e2[t4];
      }
      delete i[t3.id];
    }, releaseStatesOfProgram: function(t3) {
      for (const e2 in i) {
        const n2 = i[e2];
        if (void 0 === n2[t3.id]) continue;
        const r2 = n2[t3.id];
        for (const t4 in r2) l(r2[t4].object), delete r2[t4];
        delete n2[t3.id];
      }
    }, initAttributes: h, enableAttribute: u2, disableUnusedAttributes: p2 };
  }
  function xa(t2, e, n) {
    let i;
    function r(e2, r2, s) {
      0 !== s && (t2.drawArraysInstanced(i, e2, r2, s), n.update(r2, i, s));
    }
    this.setMode = function(t3) {
      i = t3;
    }, this.render = function(e2, r2) {
      t2.drawArrays(i, e2, r2), n.update(r2, i, 1);
    }, this.renderInstances = r, this.renderMultiDraw = function(t3, r2, s) {
      if (0 === s) return;
      e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i, t3, 0, r2, 0, s);
      let a = 0;
      for (let t4 = 0; t4 < s; t4++) a += r2[t4];
      n.update(a, i, 1);
    }, this.renderMultiDrawInstances = function(t3, s, a, o) {
      if (0 === a) return;
      const l = e.get("WEBGL_multi_draw");
      if (null === l) for (let e2 = 0; e2 < t3.length; e2++) r(t3[e2], s[e2], o[e2]);
      else {
        l.multiDrawArraysInstancedWEBGL(i, t3, 0, s, 0, o, 0, a);
        let e2 = 0;
        for (let t4 = 0; t4 < a; t4++) e2 += s[t4] * o[t4];
        n.update(e2, i, 1);
      }
    };
  }
  function ya(t2, e, n, i) {
    let r;
    function s(e2) {
      if ("highp" === e2) {
        if (t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.HIGH_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.HIGH_FLOAT).precision > 0) return "highp";
        e2 = "mediump";
      }
      return "mediump" === e2 && t2.getShaderPrecisionFormat(t2.VERTEX_SHADER, t2.MEDIUM_FLOAT).precision > 0 && t2.getShaderPrecisionFormat(t2.FRAGMENT_SHADER, t2.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
    }
    let a = void 0 !== n.precision ? n.precision : "highp";
    const o = s(a);
    o !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", o, "instead."), a = o);
    const l = true === n.logarithmicDepthBuffer, c = true === n.reverseDepthBuffer && e.has("EXT_clip_control"), h = t2.getParameter(t2.MAX_TEXTURE_IMAGE_UNITS), u2 = t2.getParameter(t2.MAX_VERTEX_TEXTURE_IMAGE_UNITS);
    return { isWebGL2: true, getMaxAnisotropy: function() {
      if (void 0 !== r) return r;
      if (true === e.has("EXT_texture_filter_anisotropic")) {
        const n2 = e.get("EXT_texture_filter_anisotropic");
        r = t2.getParameter(n2.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
      } else r = 0;
      return r;
    }, getMaxPrecision: s, textureFormatReadable: function(e2) {
      return e2 === kt || i.convert(e2) === t2.getParameter(t2.IMPLEMENTATION_COLOR_READ_FORMAT);
    }, textureTypeReadable: function(n2) {
      const r2 = n2 === Ut && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
      return !(n2 !== Et && i.convert(n2) !== t2.getParameter(t2.IMPLEMENTATION_COLOR_READ_TYPE) && n2 !== Lt && !r2);
    }, precision: a, logarithmicDepthBuffer: l, reverseDepthBuffer: c, maxTextures: h, maxVertexTextures: u2, maxTextureSize: t2.getParameter(t2.MAX_TEXTURE_SIZE), maxCubemapSize: t2.getParameter(t2.MAX_CUBE_MAP_TEXTURE_SIZE), maxAttributes: t2.getParameter(t2.MAX_VERTEX_ATTRIBS), maxVertexUniforms: t2.getParameter(t2.MAX_VERTEX_UNIFORM_VECTORS), maxVaryings: t2.getParameter(t2.MAX_VARYING_VECTORS), maxFragmentUniforms: t2.getParameter(t2.MAX_FRAGMENT_UNIFORM_VECTORS), vertexTextures: u2 > 0, maxSamples: t2.getParameter(t2.MAX_SAMPLES) };
  }
  function Ma(t2) {
    const e = this;
    let n = null, i = 0, r = false, s = false;
    const a = new ra(), o = new Kn(), l = { value: null, needsUpdate: false };
    function c(t3, n2, i2, r2) {
      const s2 = null !== t3 ? t3.length : 0;
      let c2 = null;
      if (0 !== s2) {
        if (c2 = l.value, true !== r2 || null === c2) {
          const e2 = i2 + 4 * s2, r3 = n2.matrixWorldInverse;
          o.getNormalMatrix(r3), (null === c2 || c2.length < e2) && (c2 = new Float32Array(e2));
          for (let e3 = 0, n3 = i2; e3 !== s2; ++e3, n3 += 4) a.copy(t3[e3]).applyMatrix4(r3, o), a.normal.toArray(c2, n3), c2[n3 + 3] = a.constant;
        }
        l.value = c2, l.needsUpdate = true;
      }
      return e.numPlanes = s2, e.numIntersection = 0, c2;
    }
    this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(t3, e2) {
      const n2 = 0 !== t3.length || e2 || 0 !== i || r;
      return r = e2, i = t3.length, n2;
    }, this.beginShadows = function() {
      s = true, c(null);
    }, this.endShadows = function() {
      s = false;
    }, this.setGlobalState = function(t3, e2) {
      n = c(t3, e2, 0);
    }, this.setState = function(a2, o2, h) {
      const u2 = a2.clippingPlanes, d2 = a2.clipIntersection, p2 = a2.clipShadows, m = t2.get(a2);
      if (!r || null === u2 || 0 === u2.length || s && !p2) s ? c(null) : (function() {
        l.value !== n && (l.value = n, l.needsUpdate = i > 0);
        e.numPlanes = i, e.numIntersection = 0;
      })();
      else {
        const t3 = s ? 0 : i, e2 = 4 * t3;
        let r2 = m.clippingState || null;
        l.value = r2, r2 = c(u2, o2, e2, h);
        for (let t4 = 0; t4 !== e2; ++t4) r2[t4] = n[t4];
        m.clippingState = r2, this.numIntersection = d2 ? this.numPlanes : 0, this.numPlanes += t3;
      }
    };
  }
  function Sa(t2) {
    let e = /* @__PURE__ */ new WeakMap();
    function n(t3, e2) {
      return e2 === ht ? t3.mapping = lt : e2 === ut && (t3.mapping = ct), t3;
    }
    function i(t3) {
      const n2 = t3.target;
      n2.removeEventListener("dispose", i);
      const r = e.get(n2);
      void 0 !== r && (e.delete(n2), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping;
        if (s === ht || s === ut) {
          if (e.has(r)) {
            return n(e.get(r).texture, r.mapping);
          }
          {
            const s2 = r.image;
            if (s2 && s2.height > 0) {
              const a = new ta(s2.height);
              return a.fromEquirectangularTexture(t2, r), e.set(r, a), r.addEventListener("dispose", i), n(a.texture, r.mapping);
            }
            return null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap();
    } };
  }
  var ba = class extends js {
    constructor(t2 = -1, e = 1, n = 1, i = -1, r = 0.1, s = 2e3) {
      super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = t2, this.right = e, this.top = n, this.bottom = i, this.near = r, this.far = s, this.updateProjectionMatrix();
    }
    copy(t2, e) {
      return super.copy(t2, e), this.left = t2.left, this.right = t2.right, this.top = t2.top, this.bottom = t2.bottom, this.near = t2.near, this.far = t2.far, this.zoom = t2.zoom, this.view = null === t2.view ? null : Object.assign({}, t2.view), this;
    }
    setViewOffset(t2, e, n, i, r, s) {
      null === this.view && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = t2, this.view.fullHeight = e, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = s, this.updateProjectionMatrix();
    }
    clearViewOffset() {
      null !== this.view && (this.view.enabled = false), this.updateProjectionMatrix();
    }
    updateProjectionMatrix() {
      const t2 = (this.right - this.left) / (2 * this.zoom), e = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
      let r = n - t2, s = n + t2, a = i + e, o = i - e;
      if (null !== this.view && this.view.enabled) {
        const t3 = (this.right - this.left) / this.view.fullWidth / this.zoom, e2 = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        r += t3 * this.view.offsetX, s = r + t3 * this.view.width, a -= e2 * this.view.offsetY, o = a - e2 * this.view.height;
      }
      this.projectionMatrix.makeOrthographic(r, s, a, o, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return e.object.zoom = this.zoom, e.object.left = this.left, e.object.right = this.right, e.object.top = this.top, e.object.bottom = this.bottom, e.object.near = this.near, e.object.far = this.far, null !== this.view && (e.object.view = Object.assign({}, this.view)), e;
    }
  };
  var Ta = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582];
  var wa = 20;
  var Ea = new ba();
  var Aa = new Kr();
  var Ra = null;
  var Ca = 0;
  var Ia = 0;
  var Pa = false;
  var La = (1 + Math.sqrt(5)) / 2;
  var Ua = 1 / La;
  var Da = [new Ci(-La, Ua, 0), new Ci(La, Ua, 0), new Ci(-Ua, 0, La), new Ci(Ua, 0, La), new Ci(0, La, -Ua), new Ci(0, La, Ua), new Ci(-1, 1, -1), new Ci(1, 1, -1), new Ci(-1, 1, 1), new Ci(1, 1, 1)];
  var Na = class {
    constructor(t2) {
      this._renderer = t2, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
    }
    fromScene(t2, e = 0, n = 0.1, i = 100) {
      Ra = this._renderer.getRenderTarget(), Ca = this._renderer.getActiveCubeFace(), Ia = this._renderer.getActiveMipmapLevel(), Pa = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
      const r = this._allocateTargets();
      return r.depthBuffer = true, this._sceneToCubeUV(t2, n, i, r), e > 0 && this._blur(r, 0, 0, e), this._applyPMREM(r), this._cleanup(r), r;
    }
    fromEquirectangular(t2, e = null) {
      return this._fromTexture(t2, e);
    }
    fromCubemap(t2, e = null) {
      return this._fromTexture(t2, e);
    }
    compileCubemapShader() {
      null === this._cubemapMaterial && (this._cubemapMaterial = za(), this._compileMaterial(this._cubemapMaterial));
    }
    compileEquirectangularShader() {
      null === this._equirectMaterial && (this._equirectMaterial = Ba(), this._compileMaterial(this._equirectMaterial));
    }
    dispose() {
      this._dispose(), null !== this._cubemapMaterial && this._cubemapMaterial.dispose(), null !== this._equirectMaterial && this._equirectMaterial.dispose();
    }
    _setSize(t2) {
      this._lodMax = Math.floor(Math.log2(t2)), this._cubeSize = Math.pow(2, this._lodMax);
    }
    _dispose() {
      null !== this._blurMaterial && this._blurMaterial.dispose(), null !== this._pingPongRenderTarget && this._pingPongRenderTarget.dispose();
      for (let t2 = 0; t2 < this._lodPlanes.length; t2++) this._lodPlanes[t2].dispose();
    }
    _cleanup(t2) {
      this._renderer.setRenderTarget(Ra, Ca, Ia), this._renderer.xr.enabled = Pa, t2.scissorTest = false, Fa(t2, 0, 0, t2.width, t2.height);
    }
    _fromTexture(t2, e) {
      t2.mapping === lt || t2.mapping === ct ? this._setSize(0 === t2.image.length ? 16 : t2.image[0].width || t2.image[0].image.width) : this._setSize(t2.image.width / 4), Ra = this._renderer.getRenderTarget(), Ca = this._renderer.getActiveCubeFace(), Ia = this._renderer.getActiveMipmapLevel(), Pa = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
      const n = e || this._allocateTargets();
      return this._textureToCubeUV(t2, n), this._applyPMREM(n), this._cleanup(n), n;
    }
    _allocateTargets() {
      const t2 = 3 * Math.max(this._cubeSize, 112), e = 4 * this._cubeSize, n = { magFilter: Mt, minFilter: Mt, generateMipmaps: false, type: Ut, format: kt, colorSpace: Ke, depthBuffer: false }, i = Oa(t2, e, n);
      if (null === this._pingPongRenderTarget || this._pingPongRenderTarget.width !== t2 || this._pingPongRenderTarget.height !== e) {
        null !== this._pingPongRenderTarget && this._dispose(), this._pingPongRenderTarget = Oa(t2, e, n);
        const { _lodMax: i2 } = this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = (function(t3) {
          const e2 = [], n2 = [], i3 = [];
          let r = t3;
          const s = t3 - 4 + 1 + Ta.length;
          for (let a = 0; a < s; a++) {
            const s2 = Math.pow(2, r);
            n2.push(s2);
            let o = 1 / s2;
            a > t3 - 4 ? o = Ta[a - t3 + 4 - 1] : 0 === a && (o = 0), i3.push(o);
            const l = 1 / (s2 - 2), c = -l, h = 1 + l, u2 = [c, c, h, c, h, h, c, c, h, h, c, h], d2 = 6, p2 = 6, m = 3, f = 2, g = 1, v = new Float32Array(m * p2 * d2), _ = new Float32Array(f * p2 * d2), x = new Float32Array(g * p2 * d2);
            for (let t4 = 0; t4 < d2; t4++) {
              const e3 = t4 % 3 * 2 / 3 - 1, n3 = t4 > 2 ? 0 : -1, i4 = [e3, n3, 0, e3 + 2 / 3, n3, 0, e3 + 2 / 3, n3 + 1, 0, e3, n3, 0, e3 + 2 / 3, n3 + 1, 0, e3, n3 + 1, 0];
              v.set(i4, m * p2 * t4), _.set(u2, f * p2 * t4);
              const r2 = [t4, t4, t4, t4, t4, t4];
              x.set(r2, g * p2 * t4);
            }
            const y2 = new Es();
            y2.setAttribute("position", new cs(v, m)), y2.setAttribute("uv", new cs(_, f)), y2.setAttribute("faceIndex", new cs(x, g)), e2.push(y2), r > 4 && r--;
          }
          return { lodPlanes: e2, sizeLods: n2, sigmas: i3 };
        })(i2)), this._blurMaterial = (function(t3, e2, n2) {
          const i3 = new Float32Array(wa), r = new Ci(0, 1, 0), s = new Xs({ name: "SphericalGaussianBlur", defines: { n: wa, CUBEUV_TEXEL_WIDTH: 1 / e2, CUBEUV_TEXEL_HEIGHT: 1 / n2, CUBEUV_MAX_MIP: `${t3}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: i3 }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: r } }, vertexShader: ka(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n			uniform int samples;\n			uniform float weights[ n ];\n			uniform bool latitudinal;\n			uniform float dTheta;\n			uniform float mipInt;\n			uniform vec3 poleAxis;\n\n			#define ENVMAP_TYPE_CUBE_UV\n			#include <cube_uv_reflection_fragment>\n\n			vec3 getSample( float theta, vec3 axis ) {\n\n				float cosTheta = cos( theta );\n				// Rodrigues' axis-angle rotation\n				vec3 sampleDirection = vOutputDirection * cosTheta\n					+ cross( axis, vOutputDirection ) * sin( theta )\n					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );\n\n				return bilinearCubeUV( envMap, sampleDirection, mipInt );\n\n			}\n\n			void main() {\n\n				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );\n\n				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {\n\n					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );\n\n				}\n\n				axis = normalize( axis );\n\n				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );\n				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );\n\n				for ( int i = 1; i < n; i++ ) {\n\n					if ( i >= samples ) {\n\n						break;\n\n					}\n\n					float theta = dTheta * float( i );\n					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );\n					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );\n\n				}\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
          return s;
        })(i2, t2, e);
      }
      return i;
    }
    _compileMaterial(t2) {
      const e = new Bs(this._lodPlanes[0], t2);
      this._renderer.compile(e, Ea);
    }
    _sceneToCubeUV(t2, e, n, i) {
      const r = new Js(90, 1, e, n), s = [1, -1, 1, 1, 1, 1], a = [1, 1, 1, -1, -1, -1], o = this._renderer, l = o.autoClear, c = o.toneMapping;
      o.getClearColor(Aa), o.toneMapping = 0, o.autoClear = false;
      const h = new es({ name: "PMREM.Background", side: 1, depthWrite: false, depthTest: false }), u2 = new Bs(new ks(), h);
      let d2 = false;
      const p2 = t2.background;
      p2 ? p2.isColor && (h.color.copy(p2), t2.background = null, d2 = true) : (h.color.copy(Aa), d2 = true);
      for (let e2 = 0; e2 < 6; e2++) {
        const n2 = e2 % 3;
        0 === n2 ? (r.up.set(0, s[e2], 0), r.lookAt(a[e2], 0, 0)) : 1 === n2 ? (r.up.set(0, 0, s[e2]), r.lookAt(0, a[e2], 0)) : (r.up.set(0, s[e2], 0), r.lookAt(0, 0, a[e2]));
        const l2 = this._cubeSize;
        Fa(i, n2 * l2, e2 > 2 ? l2 : 0, l2, l2), o.setRenderTarget(i), d2 && o.render(u2, r), o.render(t2, r);
      }
      u2.geometry.dispose(), u2.material.dispose(), o.toneMapping = c, o.autoClear = l, t2.background = p2;
    }
    _textureToCubeUV(t2, e) {
      const n = this._renderer, i = t2.mapping === lt || t2.mapping === ct;
      i ? (null === this._cubemapMaterial && (this._cubemapMaterial = za()), this._cubemapMaterial.uniforms.flipEnvMap.value = false === t2.isRenderTargetTexture ? -1 : 1) : null === this._equirectMaterial && (this._equirectMaterial = Ba());
      const r = i ? this._cubemapMaterial : this._equirectMaterial, s = new Bs(this._lodPlanes[0], r);
      r.uniforms.envMap.value = t2;
      const a = this._cubeSize;
      Fa(e, 0, 0, 3 * a, 2 * a), n.setRenderTarget(e), n.render(s, Ea);
    }
    _applyPMREM(t2) {
      const e = this._renderer, n = e.autoClear;
      e.autoClear = false;
      const i = this._lodPlanes.length;
      for (let e2 = 1; e2 < i; e2++) {
        const n2 = Math.sqrt(this._sigmas[e2] * this._sigmas[e2] - this._sigmas[e2 - 1] * this._sigmas[e2 - 1]), r = Da[(i - e2 - 1) % Da.length];
        this._blur(t2, e2 - 1, e2, n2, r);
      }
      e.autoClear = n;
    }
    _blur(t2, e, n, i, r) {
      const s = this._pingPongRenderTarget;
      this._halfBlur(t2, s, e, n, i, "latitudinal", r), this._halfBlur(s, t2, n, n, i, "longitudinal", r);
    }
    _halfBlur(t2, e, n, i, r, s, a) {
      const o = this._renderer, l = this._blurMaterial;
      "latitudinal" !== s && "longitudinal" !== s && console.error("blur direction must be either latitudinal or longitudinal!");
      const c = new Bs(this._lodPlanes[i], l), h = l.uniforms, u2 = this._sizeLods[n] - 1, d2 = isFinite(r) ? Math.PI / (2 * u2) : 2 * Math.PI / 39, p2 = r / d2, m = isFinite(r) ? 1 + Math.floor(3 * p2) : wa;
      m > wa && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to 20`);
      const f = [];
      let g = 0;
      for (let t3 = 0; t3 < wa; ++t3) {
        const e2 = t3 / p2, n2 = Math.exp(-e2 * e2 / 2);
        f.push(n2), 0 === t3 ? g += n2 : t3 < m && (g += 2 * n2);
      }
      for (let t3 = 0; t3 < f.length; t3++) f[t3] = f[t3] / g;
      h.envMap.value = t2.texture, h.samples.value = m, h.weights.value = f, h.latitudinal.value = "latitudinal" === s, a && (h.poleAxis.value = a);
      const { _lodMax: v } = this;
      h.dTheta.value = d2, h.mipInt.value = v - n;
      const _ = this._sizeLods[i];
      Fa(e, 3 * _ * (i > v - 4 ? i - v + 4 : 0), 4 * (this._cubeSize - _), 3 * _, 2 * _), o.setRenderTarget(e), o.render(c, Ea);
    }
  };
  function Oa(t2, e, n) {
    const i = new bi(t2, e, n);
    return i.texture.mapping = dt, i.texture.name = "PMREM.cubeUv", i.scissorTest = true, i;
  }
  function Fa(t2, e, n, i, r) {
    t2.viewport.set(e, n, i, r), t2.scissor.set(e, n, i, r);
  }
  function Ba() {
    return new Xs({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: ka(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			varying vec3 vOutputDirection;\n\n			uniform sampler2D envMap;\n\n			#include <common>\n\n			void main() {\n\n				vec3 outputDirection = normalize( vOutputDirection );\n				vec2 uv = equirectUv( outputDirection );\n\n				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function za() {
    return new Xs({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: ka(), fragmentShader: "\n\n			precision mediump float;\n			precision mediump int;\n\n			uniform float flipEnvMap;\n\n			varying vec3 vOutputDirection;\n\n			uniform samplerCube envMap;\n\n			void main() {\n\n				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );\n\n			}\n		", blending: 0, depthTest: false, depthWrite: false });
  }
  function ka() {
    return "\n\n		precision mediump float;\n		precision mediump int;\n\n		attribute float faceIndex;\n\n		varying vec3 vOutputDirection;\n\n		// RH coordinate system; PMREM face-indexing convention\n		vec3 getDirection( vec2 uv, float face ) {\n\n			uv = 2.0 * uv - 1.0;\n\n			vec3 direction = vec3( uv, 1.0 );\n\n			if ( face == 0.0 ) {\n\n				direction = direction.zyx; // ( 1, v, u ) pos x\n\n			} else if ( face == 1.0 ) {\n\n				direction = direction.xzy;\n				direction.xz *= -1.0; // ( -u, 1, -v ) pos y\n\n			} else if ( face == 2.0 ) {\n\n				direction.x *= -1.0; // ( -u, v, 1 ) pos z\n\n			} else if ( face == 3.0 ) {\n\n				direction = direction.zyx;\n				direction.xz *= -1.0; // ( -1, v, -u ) neg x\n\n			} else if ( face == 4.0 ) {\n\n				direction = direction.xzy;\n				direction.xy *= -1.0; // ( -u, -1, v ) neg y\n\n			} else if ( face == 5.0 ) {\n\n				direction.z *= -1.0; // ( u, v, -1 ) neg z\n\n			}\n\n			return direction;\n\n		}\n\n		void main() {\n\n			vOutputDirection = getDirection( uv, faceIndex );\n			gl_Position = vec4( position, 1.0 );\n\n		}\n	";
  }
  function Va(t2) {
    let e = /* @__PURE__ */ new WeakMap(), n = null;
    function i(t3) {
      const n2 = t3.target;
      n2.removeEventListener("dispose", i);
      const r = e.get(n2);
      void 0 !== r && (e.delete(n2), r.dispose());
    }
    return { get: function(r) {
      if (r && r.isTexture) {
        const s = r.mapping, a = s === ht || s === ut, o = s === lt || s === ct;
        if (a || o) {
          let s2 = e.get(r);
          const l = void 0 !== s2 ? s2.texture.pmremVersion : 0;
          if (r.isRenderTargetTexture && r.pmremVersion !== l) return null === n && (n = new Na(t2)), s2 = a ? n.fromEquirectangular(r, s2) : n.fromCubemap(r, s2), s2.texture.pmremVersion = r.pmremVersion, e.set(r, s2), s2.texture;
          if (void 0 !== s2) return s2.texture;
          {
            const l2 = r.image;
            return a && l2 && l2.height > 0 || o && l2 && (function(t3) {
              let e2 = 0;
              const n2 = 6;
              for (let i2 = 0; i2 < n2; i2++) void 0 !== t3[i2] && e2++;
              return e2 === n2;
            })(l2) ? (null === n && (n = new Na(t2)), s2 = a ? n.fromEquirectangular(r) : n.fromCubemap(r), s2.texture.pmremVersion = r.pmremVersion, e.set(r, s2), r.addEventListener("dispose", i), s2.texture) : null;
          }
        }
      }
      return r;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap(), null !== n && (n.dispose(), n = null);
    } };
  }
  function Ha(t2) {
    const e = {};
    function n(n2) {
      if (void 0 !== e[n2]) return e[n2];
      let i;
      switch (n2) {
        case "WEBGL_depth_texture":
          i = t2.getExtension("WEBGL_depth_texture") || t2.getExtension("MOZ_WEBGL_depth_texture") || t2.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          i = t2.getExtension("EXT_texture_filter_anisotropic") || t2.getExtension("MOZ_EXT_texture_filter_anisotropic") || t2.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          i = t2.getExtension("WEBGL_compressed_texture_s3tc") || t2.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          i = t2.getExtension("WEBGL_compressed_texture_pvrtc") || t2.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          i = t2.getExtension(n2);
      }
      return e[n2] = i, i;
    }
    return { has: function(t3) {
      return null !== n(t3);
    }, init: function() {
      n("EXT_color_buffer_float"), n("WEBGL_clip_cull_distance"), n("OES_texture_float_linear"), n("EXT_color_buffer_half_float"), n("WEBGL_multisampled_render_to_texture"), n("WEBGL_render_shared_exponent");
    }, get: function(t3) {
      const e2 = n(t3);
      return null === e2 && si("THREE.WebGLRenderer: " + t3 + " extension not supported."), e2;
    } };
  }
  function Ga(t2, e, n, i) {
    const r = {}, s = /* @__PURE__ */ new WeakMap();
    function a(t3) {
      const o2 = t3.target;
      null !== o2.index && e.remove(o2.index);
      for (const t4 in o2.attributes) e.remove(o2.attributes[t4]);
      for (const t4 in o2.morphAttributes) {
        const n2 = o2.morphAttributes[t4];
        for (let t5 = 0, i2 = n2.length; t5 < i2; t5++) e.remove(n2[t5]);
      }
      o2.removeEventListener("dispose", a), delete r[o2.id];
      const l = s.get(o2);
      l && (e.remove(l), s.delete(o2)), i.releaseStatesOfGeometry(o2), true === o2.isInstancedBufferGeometry && delete o2._maxInstanceCount, n.memory.geometries--;
    }
    function o(t3) {
      const n2 = [], i2 = t3.index, r2 = t3.attributes.position;
      let a2 = 0;
      if (null !== i2) {
        const t4 = i2.array;
        a2 = i2.version;
        for (let e2 = 0, i3 = t4.length; e2 < i3; e2 += 3) {
          const i4 = t4[e2 + 0], r3 = t4[e2 + 1], s2 = t4[e2 + 2];
          n2.push(i4, r3, r3, s2, s2, i4);
        }
      } else {
        if (void 0 === r2) return;
        {
          const t4 = r2.array;
          a2 = r2.version;
          for (let e2 = 0, i3 = t4.length / 3 - 1; e2 < i3; e2 += 3) {
            const t5 = e2 + 0, i4 = e2 + 1, r3 = e2 + 2;
            n2.push(t5, i4, i4, r3, r3, t5);
          }
        }
      }
      const o2 = new (Qn(n2) ? gs : ms)(n2, 1);
      o2.version = a2;
      const l = s.get(t3);
      l && e.remove(l), s.set(t3, o2);
    }
    return { get: function(t3, e2) {
      return true === r[e2.id] || (e2.addEventListener("dispose", a), r[e2.id] = true, n.memory.geometries++), e2;
    }, update: function(n2) {
      const i2 = n2.attributes;
      for (const n3 in i2) e.update(i2[n3], t2.ARRAY_BUFFER);
      const r2 = n2.morphAttributes;
      for (const n3 in r2) {
        const i3 = r2[n3];
        for (let n4 = 0, r3 = i3.length; n4 < r3; n4++) e.update(i3[n4], t2.ARRAY_BUFFER);
      }
    }, getWireframeAttribute: function(t3) {
      const e2 = s.get(t3);
      if (e2) {
        const n2 = t3.index;
        null !== n2 && e2.version < n2.version && o(t3);
      } else o(t3);
      return s.get(t3);
    } };
  }
  function Wa(t2, e, n) {
    let i, r, s;
    function a(e2, a2, o) {
      0 !== o && (t2.drawElementsInstanced(i, a2, r, e2 * s, o), n.update(a2, i, o));
    }
    this.setMode = function(t3) {
      i = t3;
    }, this.setIndex = function(t3) {
      r = t3.type, s = t3.bytesPerElement;
    }, this.render = function(e2, a2) {
      t2.drawElements(i, a2, r, e2 * s), n.update(a2, i, 1);
    }, this.renderInstances = a, this.renderMultiDraw = function(t3, s2, a2) {
      if (0 === a2) return;
      e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i, s2, 0, r, t3, 0, a2);
      let o = 0;
      for (let t4 = 0; t4 < a2; t4++) o += s2[t4];
      n.update(o, i, 1);
    }, this.renderMultiDrawInstances = function(t3, o, l, c) {
      if (0 === l) return;
      const h = e.get("WEBGL_multi_draw");
      if (null === h) for (let e2 = 0; e2 < t3.length; e2++) a(t3[e2] / s, o[e2], c[e2]);
      else {
        h.multiDrawElementsInstancedWEBGL(i, o, 0, r, t3, 0, c, 0, l);
        let e2 = 0;
        for (let t4 = 0; t4 < l; t4++) e2 += o[t4] * c[t4];
        n.update(e2, i, 1);
      }
    };
  }
  function Xa(t2) {
    const e = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
    return { memory: { geometries: 0, textures: 0 }, render: e, programs: null, autoReset: true, reset: function() {
      e.calls = 0, e.triangles = 0, e.points = 0, e.lines = 0;
    }, update: function(n, i, r) {
      switch (e.calls++, i) {
        case t2.TRIANGLES:
          e.triangles += r * (n / 3);
          break;
        case t2.LINES:
          e.lines += r * (n / 2);
          break;
        case t2.LINE_STRIP:
          e.lines += r * (n - 1);
          break;
        case t2.LINE_LOOP:
          e.lines += r * n;
          break;
        case t2.POINTS:
          e.points += r * n;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", i);
      }
    } };
  }
  function ja(t2, e, n) {
    const i = /* @__PURE__ */ new WeakMap(), r = new Mi();
    return { update: function(s, a, o) {
      const l = s.morphTargetInfluences, c = a.morphAttributes.position || a.morphAttributes.normal || a.morphAttributes.color, h = void 0 !== c ? c.length : 0;
      let u2 = i.get(a);
      if (void 0 === u2 || u2.count !== h) {
        let T = function() {
          S2.dispose(), i.delete(a), a.removeEventListener("dispose", T);
        };
        void 0 !== u2 && u2.texture.dispose();
        const d2 = void 0 !== a.morphAttributes.position, p2 = void 0 !== a.morphAttributes.normal, m = void 0 !== a.morphAttributes.color, f = a.morphAttributes.position || [], g = a.morphAttributes.normal || [], v = a.morphAttributes.color || [];
        let _ = 0;
        true === d2 && (_ = 1), true === p2 && (_ = 2), true === m && (_ = 3);
        let x = a.attributes.position.count * _, y2 = 1;
        x > e.maxTextureSize && (y2 = Math.ceil(x / e.maxTextureSize), x = e.maxTextureSize);
        const M2 = new Float32Array(x * y2 * 4 * h), S2 = new Ti(M2, x, y2, h);
        S2.type = Lt, S2.needsUpdate = true;
        const b = 4 * _;
        for (let w2 = 0; w2 < h; w2++) {
          const E2 = f[w2], A2 = g[w2], R2 = v[w2], C2 = x * y2 * 4 * w2;
          for (let I2 = 0; I2 < E2.count; I2++) {
            const P2 = I2 * b;
            true === d2 && (r.fromBufferAttribute(E2, I2), M2[C2 + P2 + 0] = r.x, M2[C2 + P2 + 1] = r.y, M2[C2 + P2 + 2] = r.z, M2[C2 + P2 + 3] = 0), true === p2 && (r.fromBufferAttribute(A2, I2), M2[C2 + P2 + 4] = r.x, M2[C2 + P2 + 5] = r.y, M2[C2 + P2 + 6] = r.z, M2[C2 + P2 + 7] = 0), true === m && (r.fromBufferAttribute(R2, I2), M2[C2 + P2 + 8] = r.x, M2[C2 + P2 + 9] = r.y, M2[C2 + P2 + 10] = r.z, M2[C2 + P2 + 11] = 4 === R2.itemSize ? r.w : 1);
          }
        }
        u2 = { count: h, texture: S2, size: new Jn(x, y2) }, i.set(a, u2), a.addEventListener("dispose", T);
      }
      if (true === s.isInstancedMesh && null !== s.morphTexture) o.getUniforms().setValue(t2, "morphTexture", s.morphTexture, n);
      else {
        let L2 = 0;
        for (let D2 = 0; D2 < l.length; D2++) L2 += l[D2];
        const U2 = a.morphTargetsRelative ? 1 : 1 - L2;
        o.getUniforms().setValue(t2, "morphTargetBaseInfluence", U2), o.getUniforms().setValue(t2, "morphTargetInfluences", l);
      }
      o.getUniforms().setValue(t2, "morphTargetsTexture", u2.texture, n), o.getUniforms().setValue(t2, "morphTargetsTextureSize", u2.size);
    } };
  }
  function qa(t2, e, n, i) {
    let r = /* @__PURE__ */ new WeakMap();
    function s(t3) {
      const e2 = t3.target;
      e2.removeEventListener("dispose", s), n.remove(e2.instanceMatrix), null !== e2.instanceColor && n.remove(e2.instanceColor);
    }
    return { update: function(a) {
      const o = i.render.frame, l = a.geometry, c = e.get(a, l);
      if (r.get(c) !== o && (e.update(c), r.set(c, o)), a.isInstancedMesh && (false === a.hasEventListener("dispose", s) && a.addEventListener("dispose", s), r.get(a) !== o && (n.update(a.instanceMatrix, t2.ARRAY_BUFFER), null !== a.instanceColor && n.update(a.instanceColor, t2.ARRAY_BUFFER), r.set(a, o))), a.isSkinnedMesh) {
        const t3 = a.skeleton;
        r.get(t3) !== o && (t3.update(), r.set(t3, o));
      }
      return c;
    }, dispose: function() {
      r = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Ya = class extends yi {
    constructor(t2, e, n, i, r, s, a, o, l, c = 1026) {
      if (c !== Gt && c !== Wt) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
      void 0 === n && c === Gt && (n = Pt), void 0 === n && c === Wt && (n = Ot), super(null, i, r, s, a, o, c, n, l), this.isDepthTexture = true, this.image = { width: t2, height: e }, this.magFilter = void 0 !== a ? a : gt, this.minFilter = void 0 !== o ? o : gt, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
    }
    copy(t2) {
      return super.copy(t2), this.compareFunction = t2.compareFunction, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return null !== this.compareFunction && (e.compareFunction = this.compareFunction), e;
    }
  };
  var Za = new yi();
  var Ja = new Ya(1, 1);
  var Ka = new Ti();
  var $a = new Ei();
  var Qa = new Qs();
  var to = [];
  var eo = [];
  var no = new Float32Array(16);
  var io = new Float32Array(9);
  var ro = new Float32Array(4);
  function so(t2, e, n) {
    const i = t2[0];
    if (i <= 0 || i > 0) return t2;
    const r = e * n;
    let s = to[r];
    if (void 0 === s && (s = new Float32Array(r), to[r] = s), 0 !== e) {
      i.toArray(s, 0);
      for (let i2 = 1, r2 = 0; i2 !== e; ++i2) r2 += n, t2[i2].toArray(s, r2);
    }
    return s;
  }
  function ao(t2, e) {
    if (t2.length !== e.length) return false;
    for (let n = 0, i = t2.length; n < i; n++) if (t2[n] !== e[n]) return false;
    return true;
  }
  function oo(t2, e) {
    for (let n = 0, i = e.length; n < i; n++) t2[n] = e[n];
  }
  function lo(t2, e) {
    let n = eo[e];
    void 0 === n && (n = new Int32Array(e), eo[e] = n);
    for (let i = 0; i !== e; ++i) n[i] = t2.allocateTextureUnit();
    return n;
  }
  function co(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1f(this.addr, e), n[0] = e);
  }
  function ho(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2f(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (ao(n, e)) return;
      t2.uniform2fv(this.addr, e), oo(n, e);
    }
  }
  function uo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3f(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else if (void 0 !== e.r) n[0] === e.r && n[1] === e.g && n[2] === e.b || (t2.uniform3f(this.addr, e.r, e.g, e.b), n[0] = e.r, n[1] = e.g, n[2] = e.b);
    else {
      if (ao(n, e)) return;
      t2.uniform3fv(this.addr, e), oo(n, e);
    }
  }
  function po(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4f(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (ao(n, e)) return;
      t2.uniform4fv(this.addr, e), oo(n, e);
    }
  }
  function mo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (ao(n, e)) return;
      t2.uniformMatrix2fv(this.addr, false, e), oo(n, e);
    } else {
      if (ao(n, i)) return;
      ro.set(i), t2.uniformMatrix2fv(this.addr, false, ro), oo(n, i);
    }
  }
  function fo(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (ao(n, e)) return;
      t2.uniformMatrix3fv(this.addr, false, e), oo(n, e);
    } else {
      if (ao(n, i)) return;
      io.set(i), t2.uniformMatrix3fv(this.addr, false, io), oo(n, i);
    }
  }
  function go(t2, e) {
    const n = this.cache, i = e.elements;
    if (void 0 === i) {
      if (ao(n, e)) return;
      t2.uniformMatrix4fv(this.addr, false, e), oo(n, e);
    } else {
      if (ao(n, i)) return;
      no.set(i), t2.uniformMatrix4fv(this.addr, false, no), oo(n, i);
    }
  }
  function vo(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1i(this.addr, e), n[0] = e);
  }
  function _o(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2i(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (ao(n, e)) return;
      t2.uniform2iv(this.addr, e), oo(n, e);
    }
  }
  function xo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3i(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
      if (ao(n, e)) return;
      t2.uniform3iv(this.addr, e), oo(n, e);
    }
  }
  function yo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4i(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (ao(n, e)) return;
      t2.uniform4iv(this.addr, e), oo(n, e);
    }
  }
  function Mo(t2, e) {
    const n = this.cache;
    n[0] !== e && (t2.uniform1ui(this.addr, e), n[0] = e);
  }
  function So(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y || (t2.uniform2ui(this.addr, e.x, e.y), n[0] = e.x, n[1] = e.y);
    else {
      if (ao(n, e)) return;
      t2.uniform2uiv(this.addr, e), oo(n, e);
    }
  }
  function bo(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z || (t2.uniform3ui(this.addr, e.x, e.y, e.z), n[0] = e.x, n[1] = e.y, n[2] = e.z);
    else {
      if (ao(n, e)) return;
      t2.uniform3uiv(this.addr, e), oo(n, e);
    }
  }
  function To(t2, e) {
    const n = this.cache;
    if (void 0 !== e.x) n[0] === e.x && n[1] === e.y && n[2] === e.z && n[3] === e.w || (t2.uniform4ui(this.addr, e.x, e.y, e.z, e.w), n[0] = e.x, n[1] = e.y, n[2] = e.z, n[3] = e.w);
    else {
      if (ao(n, e)) return;
      t2.uniform4uiv(this.addr, e), oo(n, e);
    }
  }
  function wo(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    let s;
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), this.type === t2.SAMPLER_2D_SHADOW ? (Ja.compareFunction = 515, s = Ja) : s = Za, n.setTexture2D(e || s, r);
  }
  function Eo(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTexture3D(e || $a, r);
  }
  function Ao(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTextureCube(e || Qa, r);
  }
  function Ro(t2, e, n) {
    const i = this.cache, r = n.allocateTextureUnit();
    i[0] !== r && (t2.uniform1i(this.addr, r), i[0] = r), n.setTexture2DArray(e || Ka, r);
  }
  function Co(t2, e) {
    t2.uniform1fv(this.addr, e);
  }
  function Io(t2, e) {
    const n = so(e, this.size, 2);
    t2.uniform2fv(this.addr, n);
  }
  function Po(t2, e) {
    const n = so(e, this.size, 3);
    t2.uniform3fv(this.addr, n);
  }
  function Lo(t2, e) {
    const n = so(e, this.size, 4);
    t2.uniform4fv(this.addr, n);
  }
  function Uo(t2, e) {
    const n = so(e, this.size, 4);
    t2.uniformMatrix2fv(this.addr, false, n);
  }
  function Do(t2, e) {
    const n = so(e, this.size, 9);
    t2.uniformMatrix3fv(this.addr, false, n);
  }
  function No(t2, e) {
    const n = so(e, this.size, 16);
    t2.uniformMatrix4fv(this.addr, false, n);
  }
  function Oo(t2, e) {
    t2.uniform1iv(this.addr, e);
  }
  function Fo(t2, e) {
    t2.uniform2iv(this.addr, e);
  }
  function Bo(t2, e) {
    t2.uniform3iv(this.addr, e);
  }
  function zo(t2, e) {
    t2.uniform4iv(this.addr, e);
  }
  function ko(t2, e) {
    t2.uniform1uiv(this.addr, e);
  }
  function Vo(t2, e) {
    t2.uniform2uiv(this.addr, e);
  }
  function Ho(t2, e) {
    t2.uniform3uiv(this.addr, e);
  }
  function Go(t2, e) {
    t2.uniform4uiv(this.addr, e);
  }
  function Wo(t2, e, n) {
    const i = this.cache, r = e.length, s = lo(n, r);
    ao(i, s) || (t2.uniform1iv(this.addr, s), oo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture2D(e[t3] || Za, s[t3]);
  }
  function Xo(t2, e, n) {
    const i = this.cache, r = e.length, s = lo(n, r);
    ao(i, s) || (t2.uniform1iv(this.addr, s), oo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture3D(e[t3] || $a, s[t3]);
  }
  function jo(t2, e, n) {
    const i = this.cache, r = e.length, s = lo(n, r);
    ao(i, s) || (t2.uniform1iv(this.addr, s), oo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTextureCube(e[t3] || Qa, s[t3]);
  }
  function qo(t2, e, n) {
    const i = this.cache, r = e.length, s = lo(n, r);
    ao(i, s) || (t2.uniform1iv(this.addr, s), oo(i, s));
    for (let t3 = 0; t3 !== r; ++t3) n.setTexture2DArray(e[t3] || Ka, s[t3]);
  }
  var Yo = class {
    constructor(t2, e, n) {
      this.id = t2, this.addr = n, this.cache = [], this.type = e.type, this.setValue = (function(t3) {
        switch (t3) {
          case 5126:
            return co;
          case 35664:
            return ho;
          case 35665:
            return uo;
          case 35666:
            return po;
          case 35674:
            return mo;
          case 35675:
            return fo;
          case 35676:
            return go;
          case 5124:
          case 35670:
            return vo;
          case 35667:
          case 35671:
            return _o;
          case 35668:
          case 35672:
            return xo;
          case 35669:
          case 35673:
            return yo;
          case 5125:
            return Mo;
          case 36294:
            return So;
          case 36295:
            return bo;
          case 36296:
            return To;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return wo;
          case 35679:
          case 36299:
          case 36307:
            return Eo;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return Ao;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return Ro;
        }
      })(e.type);
    }
  };
  var Zo = class {
    constructor(t2, e, n) {
      this.id = t2, this.addr = n, this.cache = [], this.type = e.type, this.size = e.size, this.setValue = (function(t3) {
        switch (t3) {
          case 5126:
            return Co;
          case 35664:
            return Io;
          case 35665:
            return Po;
          case 35666:
            return Lo;
          case 35674:
            return Uo;
          case 35675:
            return Do;
          case 35676:
            return No;
          case 5124:
          case 35670:
            return Oo;
          case 35667:
          case 35671:
            return Fo;
          case 35668:
          case 35672:
            return Bo;
          case 35669:
          case 35673:
            return zo;
          case 5125:
            return ko;
          case 36294:
            return Vo;
          case 36295:
            return Ho;
          case 36296:
            return Go;
          case 35678:
          case 36198:
          case 36298:
          case 36306:
          case 35682:
            return Wo;
          case 35679:
          case 36299:
          case 36307:
            return Xo;
          case 35680:
          case 36300:
          case 36308:
          case 36293:
            return jo;
          case 36289:
          case 36303:
          case 36311:
          case 36292:
            return qo;
        }
      })(e.type);
    }
  };
  var Jo = class {
    constructor(t2) {
      this.id = t2, this.seq = [], this.map = {};
    }
    setValue(t2, e, n) {
      const i = this.seq;
      for (let r = 0, s = i.length; r !== s; ++r) {
        const s2 = i[r];
        s2.setValue(t2, e[s2.id], n);
      }
    }
  };
  var Ko = /(\w+)(\])?(\[|\.)?/g;
  function $o(t2, e) {
    t2.seq.push(e), t2.map[e.id] = e;
  }
  function Qo(t2, e, n) {
    const i = t2.name, r = i.length;
    for (Ko.lastIndex = 0; ; ) {
      const s = Ko.exec(i), a = Ko.lastIndex;
      let o = s[1];
      const l = "]" === s[2], c = s[3];
      if (l && (o |= 0), void 0 === c || "[" === c && a + 2 === r) {
        $o(n, void 0 === c ? new Yo(o, t2, e) : new Zo(o, t2, e));
        break;
      }
      {
        let t3 = n.map[o];
        void 0 === t3 && (t3 = new Jo(o), $o(n, t3)), n = t3;
      }
    }
  }
  var tl = class {
    constructor(t2, e) {
      this.seq = [], this.map = {};
      const n = t2.getProgramParameter(e, t2.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; ++i) {
        const n2 = t2.getActiveUniform(e, i);
        Qo(n2, t2.getUniformLocation(e, n2.name), this);
      }
    }
    setValue(t2, e, n, i) {
      const r = this.map[e];
      void 0 !== r && r.setValue(t2, n, i);
    }
    setOptional(t2, e, n) {
      const i = e[n];
      void 0 !== i && this.setValue(t2, n, i);
    }
    static upload(t2, e, n, i) {
      for (let r = 0, s = e.length; r !== s; ++r) {
        const s2 = e[r], a = n[s2.id];
        false !== a.needsUpdate && s2.setValue(t2, a.value, i);
      }
    }
    static seqWithValue(t2, e) {
      const n = [];
      for (let i = 0, r = t2.length; i !== r; ++i) {
        const r2 = t2[i];
        r2.id in e && n.push(r2);
      }
      return n;
    }
  };
  function el(t2, e, n) {
    const i = t2.createShader(e);
    return t2.shaderSource(i, n), t2.compileShader(i), i;
  }
  var nl = 0;
  var il = new Kn();
  function rl(t2, e, n) {
    const i = t2.getShaderParameter(e, t2.COMPILE_STATUS), r = t2.getShaderInfoLog(e).trim();
    if (i && "" === r) return "";
    const s = /ERROR: 0:(\d+)/.exec(r);
    if (s) {
      const i2 = parseInt(s[1]);
      return n.toUpperCase() + "\n\n" + r + "\n\n" + (function(t3, e2) {
        const n2 = t3.split("\n"), i3 = [], r2 = Math.max(e2 - 6, 0), s2 = Math.min(e2 + 6, n2.length);
        for (let t4 = r2; t4 < s2; t4++) {
          const r3 = t4 + 1;
          i3.push(`${r3 === e2 ? ">" : " "} ${r3}: ${n2[t4]}`);
        }
        return i3.join("\n");
      })(t2.getShaderSource(e), i2);
    }
    return r;
  }
  function sl(t2, e) {
    const n = (function(t3) {
      ai._getMatrix(il, ai.workingColorSpace, t3);
      const e2 = `mat3( ${il.elements.map(((t4) => t4.toFixed(4)))} )`;
      switch (ai.getTransfer(t3)) {
        case $e:
          return [e2, "LinearTransferOETF"];
        case Qe:
          return [e2, "sRGBTransferOETF"];
        default:
          return console.warn("THREE.WebGLProgram: Unsupported color space: ", t3), [e2, "LinearTransferOETF"];
      }
    })(e);
    return [`vec4 ${t2}( vec4 value ) {`, `	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`, "}"].join("\n");
  }
  function al(t2, e) {
    let n;
    switch (e) {
      case 1:
        n = "Linear";
        break;
      case 2:
        n = "Reinhard";
        break;
      case 3:
        n = "Cineon";
        break;
      case 4:
        n = "ACESFilmic";
        break;
      case 6:
        n = "AgX";
        break;
      case 7:
        n = "Neutral";
        break;
      case 5:
        n = "Custom";
        break;
      default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), n = "Linear";
    }
    return "vec3 " + t2 + "( vec3 color ) { return " + n + "ToneMapping( color ); }";
  }
  var ol = new Ci();
  function ll() {
    ai.getLuminanceCoefficients(ol);
    return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${ol.x.toFixed(4)}, ${ol.y.toFixed(4)}, ${ol.z.toFixed(4)} );`, "	return dot( weights, rgb );", "}"].join("\n");
  }
  function cl(t2) {
    return "" !== t2;
  }
  function hl(t2, e) {
    const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return t2.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, n).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
  }
  function ul(t2, e) {
    return t2.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
  }
  var dl = /^[ \t]*#include +<([\w\d./]+)>/gm;
  function pl(t2) {
    return t2.replace(dl, fl);
  }
  var ml = /* @__PURE__ */ new Map();
  function fl(t2, e) {
    let n = ua[e];
    if (void 0 === n) {
      const t3 = ml.get(e);
      if (void 0 === t3) throw new Error("Can not resolve #include <" + e + ">");
      n = ua[t3], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, t3);
    }
    return pl(n);
  }
  var gl = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
  function vl(t2) {
    return t2.replace(gl, _l);
  }
  function _l(t2, e, n, i) {
    let r = "";
    for (let t3 = parseInt(e); t3 < parseInt(n); t3++) r += i.replace(/\[\s*i\s*\]/g, "[ " + t3 + " ]").replace(/UNROLLED_LOOP_INDEX/g, t3);
    return r;
  }
  function xl(t2) {
    let e = `precision ${t2.precision} float;
	precision ${t2.precision} int;
	precision ${t2.precision} sampler2D;
	precision ${t2.precision} samplerCube;
	precision ${t2.precision} sampler3D;
	precision ${t2.precision} sampler2DArray;
	precision ${t2.precision} sampler2DShadow;
	precision ${t2.precision} samplerCubeShadow;
	precision ${t2.precision} sampler2DArrayShadow;
	precision ${t2.precision} isampler2D;
	precision ${t2.precision} isampler3D;
	precision ${t2.precision} isamplerCube;
	precision ${t2.precision} isampler2DArray;
	precision ${t2.precision} usampler2D;
	precision ${t2.precision} usampler3D;
	precision ${t2.precision} usamplerCube;
	precision ${t2.precision} usampler2DArray;
	`;
    return "highp" === t2.precision ? e += "\n#define HIGH_PRECISION" : "mediump" === t2.precision ? e += "\n#define MEDIUM_PRECISION" : "lowp" === t2.precision && (e += "\n#define LOW_PRECISION"), e;
  }
  function yl(t2, e, n, i) {
    const r = t2.getContext(), s = n.defines;
    let a = n.vertexShader, o = n.fragmentShader;
    const l = (function(t3) {
      let e2 = "SHADOWMAP_TYPE_BASIC";
      return 1 === t3.shadowMapType ? e2 = "SHADOWMAP_TYPE_PCF" : 2 === t3.shadowMapType ? e2 = "SHADOWMAP_TYPE_PCF_SOFT" : 3 === t3.shadowMapType && (e2 = "SHADOWMAP_TYPE_VSM"), e2;
    })(n), c = (function(t3) {
      let e2 = "ENVMAP_TYPE_CUBE";
      if (t3.envMap) switch (t3.envMapMode) {
        case lt:
        case ct:
          e2 = "ENVMAP_TYPE_CUBE";
          break;
        case dt:
          e2 = "ENVMAP_TYPE_CUBE_UV";
      }
      return e2;
    })(n), h = (function(t3) {
      let e2 = "ENVMAP_MODE_REFLECTION";
      t3.envMap && t3.envMapMode === ct && (e2 = "ENVMAP_MODE_REFRACTION");
      return e2;
    })(n), u2 = (function(t3) {
      let e2 = "ENVMAP_BLENDING_NONE";
      if (t3.envMap) switch (t3.combine) {
        case 0:
          e2 = "ENVMAP_BLENDING_MULTIPLY";
          break;
        case 1:
          e2 = "ENVMAP_BLENDING_MIX";
          break;
        case 2:
          e2 = "ENVMAP_BLENDING_ADD";
      }
      return e2;
    })(n), d2 = (function(t3) {
      const e2 = t3.envMapCubeUVHeight;
      if (null === e2) return null;
      const n2 = Math.log2(e2) - 2, i2 = 1 / e2;
      return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n2), 112)), texelHeight: i2, maxMip: n2 };
    })(n), p2 = (function(t3) {
      return [t3.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", t3.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(cl).join("\n");
    })(n), m = (function(t3) {
      const e2 = [];
      for (const n2 in t3) {
        const i2 = t3[n2];
        false !== i2 && e2.push("#define " + n2 + " " + i2);
      }
      return e2.join("\n");
    })(s), f = r.createProgram();
    let g, v, _ = n.glslVersion ? "#version " + n.glslVersion + "\n" : "";
    n.isRawShaderMaterial ? (g = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m].filter(cl).join("\n"), g.length > 0 && (g += "\n"), v = ["#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m].filter(cl).join("\n"), v.length > 0 && (v += "\n")) : (g = [xl(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m, n.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", n.batching ? "#define USE_BATCHING" : "", n.batchingColor ? "#define USE_BATCHING_COLOR" : "", n.instancing ? "#define USE_INSTANCING" : "", n.instancingColor ? "#define USE_INSTANCING_COLOR" : "", n.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.map ? "#define USE_MAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + h : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.mapUv ? "#define MAP_UV " + n.mapUv : "", n.alphaMapUv ? "#define ALPHAMAP_UV " + n.alphaMapUv : "", n.lightMapUv ? "#define LIGHTMAP_UV " + n.lightMapUv : "", n.aoMapUv ? "#define AOMAP_UV " + n.aoMapUv : "", n.emissiveMapUv ? "#define EMISSIVEMAP_UV " + n.emissiveMapUv : "", n.bumpMapUv ? "#define BUMPMAP_UV " + n.bumpMapUv : "", n.normalMapUv ? "#define NORMALMAP_UV " + n.normalMapUv : "", n.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + n.displacementMapUv : "", n.metalnessMapUv ? "#define METALNESSMAP_UV " + n.metalnessMapUv : "", n.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + n.roughnessMapUv : "", n.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + n.anisotropyMapUv : "", n.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + n.clearcoatMapUv : "", n.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + n.clearcoatNormalMapUv : "", n.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + n.clearcoatRoughnessMapUv : "", n.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + n.iridescenceMapUv : "", n.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + n.iridescenceThicknessMapUv : "", n.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + n.sheenColorMapUv : "", n.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + n.sheenRoughnessMapUv : "", n.specularMapUv ? "#define SPECULARMAP_UV " + n.specularMapUv : "", n.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + n.specularColorMapUv : "", n.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + n.specularIntensityMapUv : "", n.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + n.transmissionMapUv : "", n.thicknessMapUv ? "#define THICKNESSMAP_UV " + n.thicknessMapUv : "", n.vertexTangents && false === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.skinning ? "#define USE_SKINNING" : "", n.morphTargets ? "#define USE_MORPHTARGETS" : "", n.morphNormals && false === n.flatShading ? "#define USE_MORPHNORMALS" : "", n.morphColors ? "#define USE_MORPHCOLORS" : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + n.morphTextureStride : "", n.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + n.morphTargetsCount : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(cl).join("\n"), v = [xl(n), "#define SHADER_TYPE " + n.shaderType, "#define SHADER_NAME " + n.shaderName, m, n.useFog && n.fog ? "#define USE_FOG" : "", n.useFog && n.fogExp2 ? "#define FOG_EXP2" : "", n.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", n.map ? "#define USE_MAP" : "", n.matcap ? "#define USE_MATCAP" : "", n.envMap ? "#define USE_ENVMAP" : "", n.envMap ? "#define " + c : "", n.envMap ? "#define " + h : "", n.envMap ? "#define " + u2 : "", d2 ? "#define CUBEUV_TEXEL_WIDTH " + d2.texelWidth : "", d2 ? "#define CUBEUV_TEXEL_HEIGHT " + d2.texelHeight : "", d2 ? "#define CUBEUV_MAX_MIP " + d2.maxMip + ".0" : "", n.lightMap ? "#define USE_LIGHTMAP" : "", n.aoMap ? "#define USE_AOMAP" : "", n.bumpMap ? "#define USE_BUMPMAP" : "", n.normalMap ? "#define USE_NORMALMAP" : "", n.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", n.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", n.emissiveMap ? "#define USE_EMISSIVEMAP" : "", n.anisotropy ? "#define USE_ANISOTROPY" : "", n.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", n.clearcoat ? "#define USE_CLEARCOAT" : "", n.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", n.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", n.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", n.dispersion ? "#define USE_DISPERSION" : "", n.iridescence ? "#define USE_IRIDESCENCE" : "", n.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", n.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", n.specularMap ? "#define USE_SPECULARMAP" : "", n.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", n.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", n.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", n.metalnessMap ? "#define USE_METALNESSMAP" : "", n.alphaMap ? "#define USE_ALPHAMAP" : "", n.alphaTest ? "#define USE_ALPHATEST" : "", n.alphaHash ? "#define USE_ALPHAHASH" : "", n.sheen ? "#define USE_SHEEN" : "", n.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", n.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", n.transmission ? "#define USE_TRANSMISSION" : "", n.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", n.thicknessMap ? "#define USE_THICKNESSMAP" : "", n.vertexTangents && false === n.flatShading ? "#define USE_TANGENT" : "", n.vertexColors || n.instancingColor || n.batchingColor ? "#define USE_COLOR" : "", n.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", n.vertexUv1s ? "#define USE_UV1" : "", n.vertexUv2s ? "#define USE_UV2" : "", n.vertexUv3s ? "#define USE_UV3" : "", n.pointsUvs ? "#define USE_POINTS_UV" : "", n.gradientMap ? "#define USE_GRADIENTMAP" : "", n.flatShading ? "#define FLAT_SHADED" : "", n.doubleSided ? "#define DOUBLE_SIDED" : "", n.flipSided ? "#define FLIP_SIDED" : "", n.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", n.shadowMapEnabled ? "#define " + l : "", n.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", n.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", n.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", n.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", n.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", n.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", 0 !== n.toneMapping ? "#define TONE_MAPPING" : "", 0 !== n.toneMapping ? ua.tonemapping_pars_fragment : "", 0 !== n.toneMapping ? al("toneMapping", n.toneMapping) : "", n.dithering ? "#define DITHERING" : "", n.opaque ? "#define OPAQUE" : "", ua.colorspace_pars_fragment, sl("linearToOutputTexel", n.outputColorSpace), ll(), n.useDepthPacking ? "#define DEPTH_PACKING " + n.depthPacking : "", "\n"].filter(cl).join("\n")), a = pl(a), a = hl(a, n), a = ul(a, n), o = pl(o), o = hl(o, n), o = ul(o, n), a = vl(a), o = vl(o), true !== n.isRawShaderMaterial && (_ = "#version 300 es\n", g = [p2, "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + g, v = ["#define varying in", n.glslVersion === Nn ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", n.glslVersion === Nn ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + v);
    const x = _ + g + a, y2 = _ + v + o, M2 = el(r, r.VERTEX_SHADER, x), S2 = el(r, r.FRAGMENT_SHADER, y2);
    function b(e2) {
      if (t2.debug.checkShaderErrors) {
        const n2 = r.getProgramInfoLog(f).trim(), i2 = r.getShaderInfoLog(M2).trim(), s2 = r.getShaderInfoLog(S2).trim();
        let a2 = true, o2 = true;
        if (false === r.getProgramParameter(f, r.LINK_STATUS)) if (a2 = false, "function" == typeof t2.debug.onShaderError) t2.debug.onShaderError(r, f, M2, S2);
        else {
          const t3 = rl(r, M2, "vertex"), i3 = rl(r, S2, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " + r.getProgramParameter(f, r.VALIDATE_STATUS) + "\n\nMaterial Name: " + e2.name + "\nMaterial Type: " + e2.type + "\n\nProgram Info Log: " + n2 + "\n" + t3 + "\n" + i3);
        }
        else "" !== n2 ? console.warn("THREE.WebGLProgram: Program Info Log:", n2) : "" !== i2 && "" !== s2 || (o2 = false);
        o2 && (e2.diagnostics = { runnable: a2, programLog: n2, vertexShader: { log: i2, prefix: g }, fragmentShader: { log: s2, prefix: v } });
      }
      r.deleteShader(M2), r.deleteShader(S2), T = new tl(r, f), w2 = (function(t3, e3) {
        const n2 = {}, i2 = t3.getProgramParameter(e3, t3.ACTIVE_ATTRIBUTES);
        for (let r2 = 0; r2 < i2; r2++) {
          const i3 = t3.getActiveAttrib(e3, r2), s2 = i3.name;
          let a2 = 1;
          i3.type === t3.FLOAT_MAT2 && (a2 = 2), i3.type === t3.FLOAT_MAT3 && (a2 = 3), i3.type === t3.FLOAT_MAT4 && (a2 = 4), n2[s2] = { type: i3.type, location: t3.getAttribLocation(e3, s2), locationSize: a2 };
        }
        return n2;
      })(r, f);
    }
    let T, w2;
    r.attachShader(f, M2), r.attachShader(f, S2), void 0 !== n.index0AttributeName ? r.bindAttribLocation(f, 0, n.index0AttributeName) : true === n.morphTargets && r.bindAttribLocation(f, 0, "position"), r.linkProgram(f), this.getUniforms = function() {
      return void 0 === T && b(this), T;
    }, this.getAttributes = function() {
      return void 0 === w2 && b(this), w2;
    };
    let E2 = false === n.rendererExtensionParallelShaderCompile;
    return this.isReady = function() {
      return false === E2 && (E2 = r.getProgramParameter(f, 37297)), E2;
    }, this.destroy = function() {
      i.releaseStatesOfProgram(this), r.deleteProgram(f), this.program = void 0;
    }, this.type = n.shaderType, this.name = n.shaderName, this.id = nl++, this.cacheKey = e, this.usedTimes = 1, this.program = f, this.vertexShader = M2, this.fragmentShader = S2, this;
  }
  var Ml = 0;
  var Sl = class {
    constructor() {
      this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
    }
    update(t2) {
      const e = t2.vertexShader, n = t2.fragmentShader, i = this._getShaderStage(e), r = this._getShaderStage(n), s = this._getShaderCacheForMaterial(t2);
      return false === s.has(i) && (s.add(i), i.usedTimes++), false === s.has(r) && (s.add(r), r.usedTimes++), this;
    }
    remove(t2) {
      const e = this.materialCache.get(t2);
      for (const t3 of e) t3.usedTimes--, 0 === t3.usedTimes && this.shaderCache.delete(t3.code);
      return this.materialCache.delete(t2), this;
    }
    getVertexShaderID(t2) {
      return this._getShaderStage(t2.vertexShader).id;
    }
    getFragmentShaderID(t2) {
      return this._getShaderStage(t2.fragmentShader).id;
    }
    dispose() {
      this.shaderCache.clear(), this.materialCache.clear();
    }
    _getShaderCacheForMaterial(t2) {
      const e = this.materialCache;
      let n = e.get(t2);
      return void 0 === n && (n = /* @__PURE__ */ new Set(), e.set(t2, n)), n;
    }
    _getShaderStage(t2) {
      const e = this.shaderCache;
      let n = e.get(t2);
      return void 0 === n && (n = new bl(t2), e.set(t2, n)), n;
    }
  };
  var bl = class {
    constructor(t2) {
      this.id = Ml++, this.code = t2, this.usedTimes = 0;
    }
  };
  function Tl(t2, e, n, i, r, s, a) {
    const o = new gr(), l = new Sl(), c = /* @__PURE__ */ new Set(), h = [], u2 = r.logarithmicDepthBuffer, d2 = r.vertexTextures;
    let p2 = r.precision;
    const m = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
    function f(t3) {
      return c.add(t3), 0 === t3 ? "uv" : `uv${t3}`;
    }
    return { getParameters: function(s2, o2, h2, g, v) {
      const _ = g.fog, x = v.geometry, y2 = s2.isMeshStandardMaterial ? g.environment : null, M2 = (s2.isMeshStandardMaterial ? n : e).get(s2.envMap || y2), S2 = M2 && M2.mapping === dt ? M2.image.height : null, b = m[s2.type];
      null !== s2.precision && (p2 = r.getMaxPrecision(s2.precision), p2 !== s2.precision && console.warn("THREE.WebGLProgram.getParameters:", s2.precision, "not supported, using", p2, "instead."));
      const T = x.morphAttributes.position || x.morphAttributes.normal || x.morphAttributes.color, w2 = void 0 !== T ? T.length : 0;
      let E2, A2, R2, C2, I2 = 0;
      if (void 0 !== x.morphAttributes.position && (I2 = 1), void 0 !== x.morphAttributes.normal && (I2 = 2), void 0 !== x.morphAttributes.color && (I2 = 3), b) {
        const t3 = pa[b];
        E2 = t3.vertexShader, A2 = t3.fragmentShader;
      } else E2 = s2.vertexShader, A2 = s2.fragmentShader, l.update(s2), R2 = l.getVertexShaderID(s2), C2 = l.getFragmentShaderID(s2);
      const P2 = t2.getRenderTarget(), L2 = t2.state.buffers.depth.getReversed(), U2 = true === v.isInstancedMesh, D2 = true === v.isBatchedMesh, N2 = !!s2.map, O2 = !!s2.matcap, F2 = !!M2, B2 = !!s2.aoMap, z2 = !!s2.lightMap, k2 = !!s2.bumpMap, V2 = !!s2.normalMap, H2 = !!s2.displacementMap, G2 = !!s2.emissiveMap, W2 = !!s2.metalnessMap, X2 = !!s2.roughnessMap, j2 = s2.anisotropy > 0, q2 = s2.clearcoat > 0, Y = s2.dispersion > 0, Z = s2.iridescence > 0, J = s2.sheen > 0, K = s2.transmission > 0, $ = j2 && !!s2.anisotropyMap, Q = q2 && !!s2.clearcoatMap, tt = q2 && !!s2.clearcoatNormalMap, et = q2 && !!s2.clearcoatRoughnessMap, nt = Z && !!s2.iridescenceMap, it = Z && !!s2.iridescenceThicknessMap, rt = J && !!s2.sheenColorMap, st = J && !!s2.sheenRoughnessMap, at = !!s2.specularMap, ot2 = !!s2.specularColorMap, lt2 = !!s2.specularIntensityMap, ct2 = K && !!s2.transmissionMap, ht2 = K && !!s2.thicknessMap, ut2 = !!s2.gradientMap, pt2 = !!s2.alphaMap, mt2 = s2.alphaTest > 0, ft2 = !!s2.alphaHash, gt2 = !!s2.extensions;
      let vt2 = 0;
      s2.toneMapped && (null !== P2 && true !== P2.isXRRenderTarget || (vt2 = t2.toneMapping));
      const _t = { shaderID: b, shaderType: s2.type, shaderName: s2.name, vertexShader: E2, fragmentShader: A2, defines: s2.defines, customVertexShaderID: R2, customFragmentShaderID: C2, isRawShaderMaterial: true === s2.isRawShaderMaterial, glslVersion: s2.glslVersion, precision: p2, batching: D2, batchingColor: D2 && null !== v._colorsTexture, instancing: U2, instancingColor: U2 && null !== v.instanceColor, instancingMorph: U2 && null !== v.morphTexture, supportsVertexTextures: d2, outputColorSpace: null === P2 ? t2.outputColorSpace : true === P2.isXRRenderTarget ? P2.texture.colorSpace : Ke, alphaToCoverage: !!s2.alphaToCoverage, map: N2, matcap: O2, envMap: F2, envMapMode: F2 && M2.mapping, envMapCubeUVHeight: S2, aoMap: B2, lightMap: z2, bumpMap: k2, normalMap: V2, displacementMap: d2 && H2, emissiveMap: G2, normalMapObjectSpace: V2 && 1 === s2.normalMapType, normalMapTangentSpace: V2 && 0 === s2.normalMapType, metalnessMap: W2, roughnessMap: X2, anisotropy: j2, anisotropyMap: $, clearcoat: q2, clearcoatMap: Q, clearcoatNormalMap: tt, clearcoatRoughnessMap: et, dispersion: Y, iridescence: Z, iridescenceMap: nt, iridescenceThicknessMap: it, sheen: J, sheenColorMap: rt, sheenRoughnessMap: st, specularMap: at, specularColorMap: ot2, specularIntensityMap: lt2, transmission: K, transmissionMap: ct2, thicknessMap: ht2, gradientMap: ut2, opaque: false === s2.transparent && 1 === s2.blending && false === s2.alphaToCoverage, alphaMap: pt2, alphaTest: mt2, alphaHash: ft2, combine: s2.combine, mapUv: N2 && f(s2.map.channel), aoMapUv: B2 && f(s2.aoMap.channel), lightMapUv: z2 && f(s2.lightMap.channel), bumpMapUv: k2 && f(s2.bumpMap.channel), normalMapUv: V2 && f(s2.normalMap.channel), displacementMapUv: H2 && f(s2.displacementMap.channel), emissiveMapUv: G2 && f(s2.emissiveMap.channel), metalnessMapUv: W2 && f(s2.metalnessMap.channel), roughnessMapUv: X2 && f(s2.roughnessMap.channel), anisotropyMapUv: $ && f(s2.anisotropyMap.channel), clearcoatMapUv: Q && f(s2.clearcoatMap.channel), clearcoatNormalMapUv: tt && f(s2.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: et && f(s2.clearcoatRoughnessMap.channel), iridescenceMapUv: nt && f(s2.iridescenceMap.channel), iridescenceThicknessMapUv: it && f(s2.iridescenceThicknessMap.channel), sheenColorMapUv: rt && f(s2.sheenColorMap.channel), sheenRoughnessMapUv: st && f(s2.sheenRoughnessMap.channel), specularMapUv: at && f(s2.specularMap.channel), specularColorMapUv: ot2 && f(s2.specularColorMap.channel), specularIntensityMapUv: lt2 && f(s2.specularIntensityMap.channel), transmissionMapUv: ct2 && f(s2.transmissionMap.channel), thicknessMapUv: ht2 && f(s2.thicknessMap.channel), alphaMapUv: pt2 && f(s2.alphaMap.channel), vertexTangents: !!x.attributes.tangent && (V2 || j2), vertexColors: s2.vertexColors, vertexAlphas: true === s2.vertexColors && !!x.attributes.color && 4 === x.attributes.color.itemSize, pointsUvs: true === v.isPoints && !!x.attributes.uv && (N2 || pt2), fog: !!_, useFog: true === s2.fog, fogExp2: !!_ && _.isFogExp2, flatShading: true === s2.flatShading, sizeAttenuation: true === s2.sizeAttenuation, logarithmicDepthBuffer: u2, reverseDepthBuffer: L2, skinning: true === v.isSkinnedMesh, morphTargets: void 0 !== x.morphAttributes.position, morphNormals: void 0 !== x.morphAttributes.normal, morphColors: void 0 !== x.morphAttributes.color, morphTargetsCount: w2, morphTextureStride: I2, numDirLights: o2.directional.length, numPointLights: o2.point.length, numSpotLights: o2.spot.length, numSpotLightMaps: o2.spotLightMap.length, numRectAreaLights: o2.rectArea.length, numHemiLights: o2.hemi.length, numDirLightShadows: o2.directionalShadowMap.length, numPointLightShadows: o2.pointShadowMap.length, numSpotLightShadows: o2.spotShadowMap.length, numSpotLightShadowsWithMaps: o2.numSpotLightShadowsWithMaps, numLightProbes: o2.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: s2.dithering, shadowMapEnabled: t2.shadowMap.enabled && h2.length > 0, shadowMapType: t2.shadowMap.type, toneMapping: vt2, decodeVideoTexture: N2 && true === s2.map.isVideoTexture && ai.getTransfer(s2.map.colorSpace) === Qe, decodeVideoTextureEmissive: G2 && true === s2.emissiveMap.isVideoTexture && ai.getTransfer(s2.emissiveMap.colorSpace) === Qe, premultipliedAlpha: s2.premultipliedAlpha, doubleSided: 2 === s2.side, flipSided: 1 === s2.side, useDepthPacking: s2.depthPacking >= 0, depthPacking: s2.depthPacking || 0, index0AttributeName: s2.index0AttributeName, extensionClipCullDistance: gt2 && true === s2.extensions.clipCullDistance && i.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (gt2 && true === s2.extensions.multiDraw || D2) && i.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: i.has("KHR_parallel_shader_compile"), customProgramCacheKey: s2.customProgramCacheKey() };
      return _t.vertexUv1s = c.has(1), _t.vertexUv2s = c.has(2), _t.vertexUv3s = c.has(3), c.clear(), _t;
    }, getProgramCacheKey: function(e2) {
      const n2 = [];
      if (e2.shaderID ? n2.push(e2.shaderID) : (n2.push(e2.customVertexShaderID), n2.push(e2.customFragmentShaderID)), void 0 !== e2.defines) for (const t3 in e2.defines) n2.push(t3), n2.push(e2.defines[t3]);
      return false === e2.isRawShaderMaterial && (!(function(t3, e3) {
        t3.push(e3.precision), t3.push(e3.outputColorSpace), t3.push(e3.envMapMode), t3.push(e3.envMapCubeUVHeight), t3.push(e3.mapUv), t3.push(e3.alphaMapUv), t3.push(e3.lightMapUv), t3.push(e3.aoMapUv), t3.push(e3.bumpMapUv), t3.push(e3.normalMapUv), t3.push(e3.displacementMapUv), t3.push(e3.emissiveMapUv), t3.push(e3.metalnessMapUv), t3.push(e3.roughnessMapUv), t3.push(e3.anisotropyMapUv), t3.push(e3.clearcoatMapUv), t3.push(e3.clearcoatNormalMapUv), t3.push(e3.clearcoatRoughnessMapUv), t3.push(e3.iridescenceMapUv), t3.push(e3.iridescenceThicknessMapUv), t3.push(e3.sheenColorMapUv), t3.push(e3.sheenRoughnessMapUv), t3.push(e3.specularMapUv), t3.push(e3.specularColorMapUv), t3.push(e3.specularIntensityMapUv), t3.push(e3.transmissionMapUv), t3.push(e3.thicknessMapUv), t3.push(e3.combine), t3.push(e3.fogExp2), t3.push(e3.sizeAttenuation), t3.push(e3.morphTargetsCount), t3.push(e3.morphAttributeCount), t3.push(e3.numDirLights), t3.push(e3.numPointLights), t3.push(e3.numSpotLights), t3.push(e3.numSpotLightMaps), t3.push(e3.numHemiLights), t3.push(e3.numRectAreaLights), t3.push(e3.numDirLightShadows), t3.push(e3.numPointLightShadows), t3.push(e3.numSpotLightShadows), t3.push(e3.numSpotLightShadowsWithMaps), t3.push(e3.numLightProbes), t3.push(e3.shadowMapType), t3.push(e3.toneMapping), t3.push(e3.numClippingPlanes), t3.push(e3.numClipIntersection), t3.push(e3.depthPacking);
      })(n2, e2), (function(t3, e3) {
        o.disableAll(), e3.supportsVertexTextures && o.enable(0);
        e3.instancing && o.enable(1);
        e3.instancingColor && o.enable(2);
        e3.instancingMorph && o.enable(3);
        e3.matcap && o.enable(4);
        e3.envMap && o.enable(5);
        e3.normalMapObjectSpace && o.enable(6);
        e3.normalMapTangentSpace && o.enable(7);
        e3.clearcoat && o.enable(8);
        e3.iridescence && o.enable(9);
        e3.alphaTest && o.enable(10);
        e3.vertexColors && o.enable(11);
        e3.vertexAlphas && o.enable(12);
        e3.vertexUv1s && o.enable(13);
        e3.vertexUv2s && o.enable(14);
        e3.vertexUv3s && o.enable(15);
        e3.vertexTangents && o.enable(16);
        e3.anisotropy && o.enable(17);
        e3.alphaHash && o.enable(18);
        e3.batching && o.enable(19);
        e3.dispersion && o.enable(20);
        e3.batchingColor && o.enable(21);
        t3.push(o.mask), o.disableAll(), e3.fog && o.enable(0);
        e3.useFog && o.enable(1);
        e3.flatShading && o.enable(2);
        e3.logarithmicDepthBuffer && o.enable(3);
        e3.reverseDepthBuffer && o.enable(4);
        e3.skinning && o.enable(5);
        e3.morphTargets && o.enable(6);
        e3.morphNormals && o.enable(7);
        e3.morphColors && o.enable(8);
        e3.premultipliedAlpha && o.enable(9);
        e3.shadowMapEnabled && o.enable(10);
        e3.doubleSided && o.enable(11);
        e3.flipSided && o.enable(12);
        e3.useDepthPacking && o.enable(13);
        e3.dithering && o.enable(14);
        e3.transmission && o.enable(15);
        e3.sheen && o.enable(16);
        e3.opaque && o.enable(17);
        e3.pointsUvs && o.enable(18);
        e3.decodeVideoTexture && o.enable(19);
        e3.decodeVideoTextureEmissive && o.enable(20);
        e3.alphaToCoverage && o.enable(21);
        t3.push(o.mask);
      })(n2, e2), n2.push(t2.outputColorSpace)), n2.push(e2.customProgramCacheKey), n2.join();
    }, getUniforms: function(t3) {
      const e2 = m[t3.type];
      let n2;
      if (e2) {
        const t4 = pa[e2];
        n2 = Ws.clone(t4.uniforms);
      } else n2 = t3.uniforms;
      return n2;
    }, acquireProgram: function(e2, n2) {
      let i2;
      for (let t3 = 0, e3 = h.length; t3 < e3; t3++) {
        const e4 = h[t3];
        if (e4.cacheKey === n2) {
          i2 = e4, ++i2.usedTimes;
          break;
        }
      }
      return void 0 === i2 && (i2 = new yl(t2, n2, e2, s), h.push(i2)), i2;
    }, releaseProgram: function(t3) {
      if (0 == --t3.usedTimes) {
        const e2 = h.indexOf(t3);
        h[e2] = h[h.length - 1], h.pop(), t3.destroy();
      }
    }, releaseShaderCache: function(t3) {
      l.remove(t3);
    }, programs: h, dispose: function() {
      l.dispose();
    } };
  }
  function wl() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { has: function(e) {
      return t2.has(e);
    }, get: function(e) {
      let n = t2.get(e);
      return void 0 === n && (n = {}, t2.set(e, n)), n;
    }, remove: function(e) {
      t2.delete(e);
    }, update: function(e, n, i) {
      t2.get(e)[n] = i;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function El(t2, e) {
    return t2.groupOrder !== e.groupOrder ? t2.groupOrder - e.groupOrder : t2.renderOrder !== e.renderOrder ? t2.renderOrder - e.renderOrder : t2.material.id !== e.material.id ? t2.material.id - e.material.id : t2.z !== e.z ? t2.z - e.z : t2.id - e.id;
  }
  function Al(t2, e) {
    return t2.groupOrder !== e.groupOrder ? t2.groupOrder - e.groupOrder : t2.renderOrder !== e.renderOrder ? t2.renderOrder - e.renderOrder : t2.z !== e.z ? e.z - t2.z : t2.id - e.id;
  }
  function Rl() {
    const t2 = [];
    let e = 0;
    const n = [], i = [], r = [];
    function s(n2, i2, r2, s2, a, o) {
      let l = t2[e];
      return void 0 === l ? (l = { id: n2.id, object: n2, geometry: i2, material: r2, groupOrder: s2, renderOrder: n2.renderOrder, z: a, group: o }, t2[e] = l) : (l.id = n2.id, l.object = n2, l.geometry = i2, l.material = r2, l.groupOrder = s2, l.renderOrder = n2.renderOrder, l.z = a, l.group = o), e++, l;
    }
    return { opaque: n, transmissive: i, transparent: r, init: function() {
      e = 0, n.length = 0, i.length = 0, r.length = 0;
    }, push: function(t3, e2, a, o, l, c) {
      const h = s(t3, e2, a, o, l, c);
      a.transmission > 0 ? i.push(h) : true === a.transparent ? r.push(h) : n.push(h);
    }, unshift: function(t3, e2, a, o, l, c) {
      const h = s(t3, e2, a, o, l, c);
      a.transmission > 0 ? i.unshift(h) : true === a.transparent ? r.unshift(h) : n.unshift(h);
    }, finish: function() {
      for (let n2 = e, i2 = t2.length; n2 < i2; n2++) {
        const e2 = t2[n2];
        if (null === e2.id) break;
        e2.id = null, e2.object = null, e2.geometry = null, e2.material = null, e2.group = null;
      }
    }, sort: function(t3, e2) {
      n.length > 1 && n.sort(t3 || El), i.length > 1 && i.sort(e2 || Al), r.length > 1 && r.sort(e2 || Al);
    } };
  }
  function Cl() {
    let t2 = /* @__PURE__ */ new WeakMap();
    return { get: function(e, n) {
      const i = t2.get(e);
      let r;
      return void 0 === i ? (r = new Rl(), t2.set(e, [r])) : n >= i.length ? (r = new Rl(), i.push(r)) : r = i[n], r;
    }, dispose: function() {
      t2 = /* @__PURE__ */ new WeakMap();
    } };
  }
  function Il() {
    const t2 = {};
    return { get: function(e) {
      if (void 0 !== t2[e.id]) return t2[e.id];
      let n;
      switch (e.type) {
        case "DirectionalLight":
          n = { direction: new Ci(), color: new Kr() };
          break;
        case "SpotLight":
          n = { position: new Ci(), direction: new Ci(), color: new Kr(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
          break;
        case "PointLight":
          n = { position: new Ci(), color: new Kr(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          n = { direction: new Ci(), skyColor: new Kr(), groundColor: new Kr() };
          break;
        case "RectAreaLight":
          n = { color: new Kr(), position: new Ci(), halfWidth: new Ci(), halfHeight: new Ci() };
      }
      return t2[e.id] = n, n;
    } };
  }
  var Pl = 0;
  function Ll(t2, e) {
    return (e.castShadow ? 2 : 0) - (t2.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t2.map ? 1 : 0);
  }
  function Ul(t2) {
    const e = new Il(), n = /* @__PURE__ */ (function() {
      const t3 = {};
      return { get: function(e2) {
        if (void 0 !== t3[e2.id]) return t3[e2.id];
        let n2;
        switch (e2.type) {
          case "DirectionalLight":
          case "SpotLight":
            n2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Jn() };
            break;
          case "PointLight":
            n2 = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Jn(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        }
        return t3[e2.id] = n2, n2;
      } };
    })(), i = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
    for (let t3 = 0; t3 < 9; t3++) i.probe.push(new Ci());
    const r = new Ci(), s = new sr(), a = new sr();
    return { setup: function(r2) {
      let s2 = 0, a2 = 0, o = 0;
      for (let t3 = 0; t3 < 9; t3++) i.probe[t3].set(0, 0, 0);
      let l = 0, c = 0, h = 0, u2 = 0, d2 = 0, p2 = 0, m = 0, f = 0, g = 0, v = 0, _ = 0;
      r2.sort(Ll);
      for (let t3 = 0, x2 = r2.length; t3 < x2; t3++) {
        const x3 = r2[t3], y2 = x3.color, M2 = x3.intensity, S2 = x3.distance, b = x3.shadow && x3.shadow.map ? x3.shadow.map.texture : null;
        if (x3.isAmbientLight) s2 += y2.r * M2, a2 += y2.g * M2, o += y2.b * M2;
        else if (x3.isLightProbe) {
          for (let t4 = 0; t4 < 9; t4++) i.probe[t4].addScaledVector(x3.sh.coefficients[t4], M2);
          _++;
        } else if (x3.isDirectionalLight) {
          const t4 = e.get(x3);
          if (t4.color.copy(x3.color).multiplyScalar(x3.intensity), x3.castShadow) {
            const t5 = x3.shadow, e2 = n.get(x3);
            e2.shadowIntensity = t5.intensity, e2.shadowBias = t5.bias, e2.shadowNormalBias = t5.normalBias, e2.shadowRadius = t5.radius, e2.shadowMapSize = t5.mapSize, i.directionalShadow[l] = e2, i.directionalShadowMap[l] = b, i.directionalShadowMatrix[l] = x3.shadow.matrix, p2++;
          }
          i.directional[l] = t4, l++;
        } else if (x3.isSpotLight) {
          const t4 = e.get(x3);
          t4.position.setFromMatrixPosition(x3.matrixWorld), t4.color.copy(y2).multiplyScalar(M2), t4.distance = S2, t4.coneCos = Math.cos(x3.angle), t4.penumbraCos = Math.cos(x3.angle * (1 - x3.penumbra)), t4.decay = x3.decay, i.spot[h] = t4;
          const r3 = x3.shadow;
          if (x3.map && (i.spotLightMap[g] = x3.map, g++, r3.updateMatrices(x3), x3.castShadow && v++), i.spotLightMatrix[h] = r3.matrix, x3.castShadow) {
            const t5 = n.get(x3);
            t5.shadowIntensity = r3.intensity, t5.shadowBias = r3.bias, t5.shadowNormalBias = r3.normalBias, t5.shadowRadius = r3.radius, t5.shadowMapSize = r3.mapSize, i.spotShadow[h] = t5, i.spotShadowMap[h] = b, f++;
          }
          h++;
        } else if (x3.isRectAreaLight) {
          const t4 = e.get(x3);
          t4.color.copy(y2).multiplyScalar(M2), t4.halfWidth.set(0.5 * x3.width, 0, 0), t4.halfHeight.set(0, 0.5 * x3.height, 0), i.rectArea[u2] = t4, u2++;
        } else if (x3.isPointLight) {
          const t4 = e.get(x3);
          if (t4.color.copy(x3.color).multiplyScalar(x3.intensity), t4.distance = x3.distance, t4.decay = x3.decay, x3.castShadow) {
            const t5 = x3.shadow, e2 = n.get(x3);
            e2.shadowIntensity = t5.intensity, e2.shadowBias = t5.bias, e2.shadowNormalBias = t5.normalBias, e2.shadowRadius = t5.radius, e2.shadowMapSize = t5.mapSize, e2.shadowCameraNear = t5.camera.near, e2.shadowCameraFar = t5.camera.far, i.pointShadow[c] = e2, i.pointShadowMap[c] = b, i.pointShadowMatrix[c] = x3.shadow.matrix, m++;
          }
          i.point[c] = t4, c++;
        } else if (x3.isHemisphereLight) {
          const t4 = e.get(x3);
          t4.skyColor.copy(x3.color).multiplyScalar(M2), t4.groundColor.copy(x3.groundColor).multiplyScalar(M2), i.hemi[d2] = t4, d2++;
        }
      }
      u2 > 0 && (true === t2.has("OES_texture_float_linear") ? (i.rectAreaLTC1 = da.LTC_FLOAT_1, i.rectAreaLTC2 = da.LTC_FLOAT_2) : (i.rectAreaLTC1 = da.LTC_HALF_1, i.rectAreaLTC2 = da.LTC_HALF_2)), i.ambient[0] = s2, i.ambient[1] = a2, i.ambient[2] = o;
      const x = i.hash;
      x.directionalLength === l && x.pointLength === c && x.spotLength === h && x.rectAreaLength === u2 && x.hemiLength === d2 && x.numDirectionalShadows === p2 && x.numPointShadows === m && x.numSpotShadows === f && x.numSpotMaps === g && x.numLightProbes === _ || (i.directional.length = l, i.spot.length = h, i.rectArea.length = u2, i.point.length = c, i.hemi.length = d2, i.directionalShadow.length = p2, i.directionalShadowMap.length = p2, i.pointShadow.length = m, i.pointShadowMap.length = m, i.spotShadow.length = f, i.spotShadowMap.length = f, i.directionalShadowMatrix.length = p2, i.pointShadowMatrix.length = m, i.spotLightMatrix.length = f + g - v, i.spotLightMap.length = g, i.numSpotLightShadowsWithMaps = v, i.numLightProbes = _, x.directionalLength = l, x.pointLength = c, x.spotLength = h, x.rectAreaLength = u2, x.hemiLength = d2, x.numDirectionalShadows = p2, x.numPointShadows = m, x.numSpotShadows = f, x.numSpotMaps = g, x.numLightProbes = _, i.version = Pl++);
    }, setupView: function(t3, e2) {
      let n2 = 0, o = 0, l = 0, c = 0, h = 0;
      const u2 = e2.matrixWorldInverse;
      for (let e3 = 0, d2 = t3.length; e3 < d2; e3++) {
        const d3 = t3[e3];
        if (d3.isDirectionalLight) {
          const t4 = i.directional[n2];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), r.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(r), t4.direction.transformDirection(u2), n2++;
        } else if (d3.isSpotLight) {
          const t4 = i.spot[l];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), t4.direction.setFromMatrixPosition(d3.matrixWorld), r.setFromMatrixPosition(d3.target.matrixWorld), t4.direction.sub(r), t4.direction.transformDirection(u2), l++;
        } else if (d3.isRectAreaLight) {
          const t4 = i.rectArea[c];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), a.identity(), s.copy(d3.matrixWorld), s.premultiply(u2), a.extractRotation(s), t4.halfWidth.set(0.5 * d3.width, 0, 0), t4.halfHeight.set(0, 0.5 * d3.height, 0), t4.halfWidth.applyMatrix4(a), t4.halfHeight.applyMatrix4(a), c++;
        } else if (d3.isPointLight) {
          const t4 = i.point[o];
          t4.position.setFromMatrixPosition(d3.matrixWorld), t4.position.applyMatrix4(u2), o++;
        } else if (d3.isHemisphereLight) {
          const t4 = i.hemi[h];
          t4.direction.setFromMatrixPosition(d3.matrixWorld), t4.direction.transformDirection(u2), h++;
        }
      }
    }, state: i };
  }
  function Dl(t2) {
    const e = new Ul(t2), n = [], i = [];
    const r = { lightsArray: n, shadowsArray: i, camera: null, lights: e, transmissionRenderTarget: {} };
    return { init: function(t3) {
      r.camera = t3, n.length = 0, i.length = 0;
    }, state: r, setupLights: function() {
      e.setup(n);
    }, setupLightsView: function(t3) {
      e.setupView(n, t3);
    }, pushLight: function(t3) {
      n.push(t3);
    }, pushShadow: function(t3) {
      i.push(t3);
    } };
  }
  function Nl(t2) {
    let e = /* @__PURE__ */ new WeakMap();
    return { get: function(n, i = 0) {
      const r = e.get(n);
      let s;
      return void 0 === r ? (s = new Dl(t2), e.set(n, [s])) : i >= r.length ? (s = new Dl(t2), r.push(s)) : s = r[i], s;
    }, dispose: function() {
      e = /* @__PURE__ */ new WeakMap();
    } };
  }
  var Ol = class extends ts {
    static get type() {
      return "MeshDepthMaterial";
    }
    constructor(t2) {
      super(), this.isMeshDepthMaterial = true, this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.depthPacking = t2.depthPacking, this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this.wireframe = t2.wireframe, this.wireframeLinewidth = t2.wireframeLinewidth, this;
    }
  };
  var Fl = class extends ts {
    static get type() {
      return "MeshDistanceMaterial";
    }
    constructor(t2) {
      super(), this.isMeshDistanceMaterial = true, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(t2);
    }
    copy(t2) {
      return super.copy(t2), this.map = t2.map, this.alphaMap = t2.alphaMap, this.displacementMap = t2.displacementMap, this.displacementScale = t2.displacementScale, this.displacementBias = t2.displacementBias, this;
    }
  };
  function Bl(t2, e, n) {
    let i = new oa();
    const r = new Jn(), s = new Jn(), a = new Mi(), o = new Ol({ depthPacking: 3201 }), l = new Fl(), c = {}, h = n.maxTextureSize, m = { [u]: 1, [d]: 0, [p]: 2 }, f = new Xs({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Jn() }, radius: { value: 4 } }, vertexShader: "void main() {\n	gl_Position = vec4( position, 1.0 );\n}", fragmentShader: "uniform sampler2D shadow_pass;\nuniform vec2 resolution;\nuniform float radius;\n#include <packing>\nvoid main() {\n	const float samples = float( VSM_SAMPLES );\n	float mean = 0.0;\n	float squared_mean = 0.0;\n	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );\n	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;\n	for ( float i = 0.0; i < samples; i ++ ) {\n		float uvOffset = uvStart + i * uvStride;\n		#ifdef HORIZONTAL_PASS\n			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );\n			mean += distribution.x;\n			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;\n		#else\n			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );\n			mean += depth;\n			squared_mean += depth * depth;\n		#endif\n	}\n	mean = mean / samples;\n	squared_mean = squared_mean / samples;\n	float std_dev = sqrt( squared_mean - mean * mean );\n	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );\n}" }), g = f.clone();
    g.defines.HORIZONTAL_PASS = 1;
    const v = new Es();
    v.setAttribute("position", new cs(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
    const _ = new Bs(v, f), x = this;
    this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = 1;
    let y2 = this.type;
    function M2(n2, i2) {
      const s2 = e.update(_);
      f.defines.VSM_SAMPLES !== n2.blurSamples && (f.defines.VSM_SAMPLES = n2.blurSamples, g.defines.VSM_SAMPLES = n2.blurSamples, f.needsUpdate = true, g.needsUpdate = true), null === n2.mapPass && (n2.mapPass = new bi(r.x, r.y)), f.uniforms.shadow_pass.value = n2.map.texture, f.uniforms.resolution.value = n2.mapSize, f.uniforms.radius.value = n2.radius, t2.setRenderTarget(n2.mapPass), t2.clear(), t2.renderBufferDirect(i2, null, s2, f, _, null), g.uniforms.shadow_pass.value = n2.mapPass.texture, g.uniforms.resolution.value = n2.mapSize, g.uniforms.radius.value = n2.radius, t2.setRenderTarget(n2.map), t2.clear(), t2.renderBufferDirect(i2, null, s2, g, _, null);
    }
    function S2(e2, n2, i2, r2) {
      let s2 = null;
      const a2 = true === i2.isPointLight ? e2.customDistanceMaterial : e2.customDepthMaterial;
      if (void 0 !== a2) s2 = a2;
      else if (s2 = true === i2.isPointLight ? l : o, t2.localClippingEnabled && true === n2.clipShadows && Array.isArray(n2.clippingPlanes) && 0 !== n2.clippingPlanes.length || n2.displacementMap && 0 !== n2.displacementScale || n2.alphaMap && n2.alphaTest > 0 || n2.map && n2.alphaTest > 0) {
        const t3 = s2.uuid, e3 = n2.uuid;
        let i3 = c[t3];
        void 0 === i3 && (i3 = {}, c[t3] = i3);
        let r3 = i3[e3];
        void 0 === r3 && (r3 = s2.clone(), i3[e3] = r3, n2.addEventListener("dispose", T)), s2 = r3;
      }
      if (s2.visible = n2.visible, s2.wireframe = n2.wireframe, s2.side = 3 === r2 ? null !== n2.shadowSide ? n2.shadowSide : n2.side : null !== n2.shadowSide ? n2.shadowSide : m[n2.side], s2.alphaMap = n2.alphaMap, s2.alphaTest = n2.alphaTest, s2.map = n2.map, s2.clipShadows = n2.clipShadows, s2.clippingPlanes = n2.clippingPlanes, s2.clipIntersection = n2.clipIntersection, s2.displacementMap = n2.displacementMap, s2.displacementScale = n2.displacementScale, s2.displacementBias = n2.displacementBias, s2.wireframeLinewidth = n2.wireframeLinewidth, s2.linewidth = n2.linewidth, true === i2.isPointLight && true === s2.isMeshDistanceMaterial) {
        t2.properties.get(s2).light = i2;
      }
      return s2;
    }
    function b(n2, r2, s2, a2, o2) {
      if (false === n2.visible) return;
      if (n2.layers.test(r2.layers) && (n2.isMesh || n2.isLine || n2.isPoints) && (n2.castShadow || n2.receiveShadow && 3 === o2) && (!n2.frustumCulled || i.intersectsObject(n2))) {
        n2.modelViewMatrix.multiplyMatrices(s2.matrixWorldInverse, n2.matrixWorld);
        const i2 = e.update(n2), l3 = n2.material;
        if (Array.isArray(l3)) {
          const e2 = i2.groups;
          for (let c2 = 0, h2 = e2.length; c2 < h2; c2++) {
            const h3 = e2[c2], u2 = l3[h3.materialIndex];
            if (u2 && u2.visible) {
              const e3 = S2(n2, u2, a2, o2);
              n2.onBeforeShadow(t2, n2, r2, s2, i2, e3, h3), t2.renderBufferDirect(s2, null, i2, e3, n2, h3), n2.onAfterShadow(t2, n2, r2, s2, i2, e3, h3);
            }
          }
        } else if (l3.visible) {
          const e2 = S2(n2, l3, a2, o2);
          n2.onBeforeShadow(t2, n2, r2, s2, i2, e2, null), t2.renderBufferDirect(s2, null, i2, e2, n2, null), n2.onAfterShadow(t2, n2, r2, s2, i2, e2, null);
        }
      }
      const l2 = n2.children;
      for (let t3 = 0, e2 = l2.length; t3 < e2; t3++) b(l2[t3], r2, s2, a2, o2);
    }
    function T(t3) {
      t3.target.removeEventListener("dispose", T);
      for (const e2 in c) {
        const n2 = c[e2], i2 = t3.target.uuid;
        if (i2 in n2) {
          n2[i2].dispose(), delete n2[i2];
        }
      }
    }
    this.render = function(e2, n2, o2) {
      if (false === x.enabled) return;
      if (false === x.autoUpdate && false === x.needsUpdate) return;
      if (0 === e2.length) return;
      const l2 = t2.getRenderTarget(), c2 = t2.getActiveCubeFace(), u2 = t2.getActiveMipmapLevel(), d2 = t2.state;
      d2.setBlending(0), d2.buffers.color.setClear(1, 1, 1, 1), d2.buffers.depth.setTest(true), d2.setScissorTest(false);
      const p2 = 3 !== y2 && 3 === this.type, m2 = 3 === y2 && 3 !== this.type;
      for (let l3 = 0, c3 = e2.length; l3 < c3; l3++) {
        const c4 = e2[l3], u3 = c4.shadow;
        if (void 0 === u3) {
          console.warn("THREE.WebGLShadowMap:", c4, "has no shadow.");
          continue;
        }
        if (false === u3.autoUpdate && false === u3.needsUpdate) continue;
        r.copy(u3.mapSize);
        const f2 = u3.getFrameExtents();
        if (r.multiply(f2), s.copy(u3.mapSize), (r.x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / f2.x), r.x = s.x * f2.x, u3.mapSize.x = s.x), r.y > h && (s.y = Math.floor(h / f2.y), r.y = s.y * f2.y, u3.mapSize.y = s.y)), null === u3.map || true === p2 || true === m2) {
          const t3 = 3 !== this.type ? { minFilter: gt, magFilter: gt } : {};
          null !== u3.map && u3.map.dispose(), u3.map = new bi(r.x, r.y, t3), u3.map.texture.name = c4.name + ".shadowMap", u3.camera.updateProjectionMatrix();
        }
        t2.setRenderTarget(u3.map), t2.clear();
        const g2 = u3.getViewportCount();
        for (let t3 = 0; t3 < g2; t3++) {
          const e3 = u3.getViewport(t3);
          a.set(s.x * e3.x, s.y * e3.y, s.x * e3.z, s.y * e3.w), d2.viewport(a), u3.updateMatrices(c4, t3), i = u3.getFrustum(), b(n2, o2, u3.camera, c4, this.type);
        }
        true !== u3.isPointLightShadow && 3 === this.type && M2(u3, o2), u3.needsUpdate = false;
      }
      y2 = this.type, x.needsUpdate = false, t2.setRenderTarget(l2, c2, u2);
    };
  }
  var zl = { [k]: 1, [H]: 6, [W]: 7, [G]: 5, [V]: 0, [j]: 2, [q]: 4, [X]: 3 };
  function kl(t2, e) {
    const n = new function() {
      let e2 = false;
      const n2 = new Mi();
      let i2 = null;
      const r2 = new Mi(0, 0, 0, 0);
      return { setMask: function(n3) {
        i2 === n3 || e2 || (t2.colorMask(n3, n3, n3, n3), i2 = n3);
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3, i3, s2, a2, o2) {
        true === o2 && (e3 *= a2, i3 *= a2, s2 *= a2), n2.set(e3, i3, s2, a2), false === r2.equals(n2) && (t2.clearColor(e3, i3, s2, a2), r2.copy(n2));
      }, reset: function() {
        e2 = false, i2 = null, r2.set(-1, 0, 0, 0);
      } };
    }(), i = new function() {
      let n2 = false, i2 = false, r2 = null, s2 = null, a2 = null;
      return { setReversed: function(t3) {
        if (i2 !== t3) {
          const t4 = e.get("EXT_clip_control");
          i2 ? t4.clipControlEXT(t4.LOWER_LEFT_EXT, t4.ZERO_TO_ONE_EXT) : t4.clipControlEXT(t4.LOWER_LEFT_EXT, t4.NEGATIVE_ONE_TO_ONE_EXT);
          const n3 = a2;
          a2 = null, this.setClear(n3);
        }
        i2 = t3;
      }, getReversed: function() {
        return i2;
      }, setTest: function(e2) {
        e2 ? rt(t2.DEPTH_TEST) : st(t2.DEPTH_TEST);
      }, setMask: function(e2) {
        r2 === e2 || n2 || (t2.depthMask(e2), r2 = e2);
      }, setFunc: function(e2) {
        if (i2 && (e2 = zl[e2]), s2 !== e2) {
          switch (e2) {
            case 0:
              t2.depthFunc(t2.NEVER);
              break;
            case 1:
              t2.depthFunc(t2.ALWAYS);
              break;
            case 2:
              t2.depthFunc(t2.LESS);
              break;
            case 3:
            default:
              t2.depthFunc(t2.LEQUAL);
              break;
            case 4:
              t2.depthFunc(t2.EQUAL);
              break;
            case 5:
              t2.depthFunc(t2.GEQUAL);
              break;
            case 6:
              t2.depthFunc(t2.GREATER);
              break;
            case 7:
              t2.depthFunc(t2.NOTEQUAL);
          }
          s2 = e2;
        }
      }, setLocked: function(t3) {
        n2 = t3;
      }, setClear: function(e2) {
        a2 !== e2 && (i2 && (e2 = 1 - e2), t2.clearDepth(e2), a2 = e2);
      }, reset: function() {
        n2 = false, r2 = null, s2 = null, a2 = null, i2 = false;
      } };
    }(), r = new function() {
      let e2 = false, n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l2 = null, c2 = null;
      return { setTest: function(n3) {
        e2 || (n3 ? rt(t2.STENCIL_TEST) : st(t2.STENCIL_TEST));
      }, setMask: function(i3) {
        n2 === i3 || e2 || (t2.stencilMask(i3), n2 = i3);
      }, setFunc: function(e3, n3, a3) {
        i2 === e3 && r2 === n3 && s2 === a3 || (t2.stencilFunc(e3, n3, a3), i2 = e3, r2 = n3, s2 = a3);
      }, setOp: function(e3, n3, i3) {
        a2 === e3 && o2 === n3 && l2 === i3 || (t2.stencilOp(e3, n3, i3), a2 = e3, o2 = n3, l2 = i3);
      }, setLocked: function(t3) {
        e2 = t3;
      }, setClear: function(e3) {
        c2 !== e3 && (t2.clearStencil(e3), c2 = e3);
      }, reset: function() {
        e2 = false, n2 = null, i2 = null, r2 = null, s2 = null, a2 = null, o2 = null, l2 = null, c2 = null;
      } };
    }(), s = /* @__PURE__ */ new WeakMap(), a = /* @__PURE__ */ new WeakMap();
    let o = {}, l = {}, c = /* @__PURE__ */ new WeakMap(), h = [], u2 = null, d2 = false, p2 = null, m = null, f = null, g = null, v = null, _ = null, x = null, b = new Kr(0, 0, 0), T = 0, k2 = false, V2 = null, H2 = null, G2 = null, W2 = null, X2 = null;
    const j2 = t2.getParameter(t2.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let q2 = false, Y = 0;
    const Z = t2.getParameter(t2.VERSION);
    -1 !== Z.indexOf("WebGL") ? (Y = parseFloat(/^WebGL (\d)/.exec(Z)[1]), q2 = Y >= 1) : -1 !== Z.indexOf("OpenGL ES") && (Y = parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]), q2 = Y >= 2);
    let J = null, K = {};
    const $ = t2.getParameter(t2.SCISSOR_BOX), Q = t2.getParameter(t2.VIEWPORT), tt = new Mi().fromArray($), et = new Mi().fromArray(Q);
    function nt(e2, n2, i2, r2) {
      const s2 = new Uint8Array(4), a2 = t2.createTexture();
      t2.bindTexture(e2, a2), t2.texParameteri(e2, t2.TEXTURE_MIN_FILTER, t2.NEAREST), t2.texParameteri(e2, t2.TEXTURE_MAG_FILTER, t2.NEAREST);
      for (let a3 = 0; a3 < i2; a3++) e2 === t2.TEXTURE_3D || e2 === t2.TEXTURE_2D_ARRAY ? t2.texImage3D(n2, 0, t2.RGBA, 1, 1, r2, 0, t2.RGBA, t2.UNSIGNED_BYTE, s2) : t2.texImage2D(n2 + a3, 0, t2.RGBA, 1, 1, 0, t2.RGBA, t2.UNSIGNED_BYTE, s2);
      return a2;
    }
    const it = {};
    function rt(e2) {
      true !== o[e2] && (t2.enable(e2), o[e2] = true);
    }
    function st(e2) {
      false !== o[e2] && (t2.disable(e2), o[e2] = false);
    }
    it[t2.TEXTURE_2D] = nt(t2.TEXTURE_2D, t2.TEXTURE_2D, 1), it[t2.TEXTURE_CUBE_MAP] = nt(t2.TEXTURE_CUBE_MAP, t2.TEXTURE_CUBE_MAP_POSITIVE_X, 6), it[t2.TEXTURE_2D_ARRAY] = nt(t2.TEXTURE_2D_ARRAY, t2.TEXTURE_2D_ARRAY, 1, 1), it[t2.TEXTURE_3D] = nt(t2.TEXTURE_3D, t2.TEXTURE_3D, 1, 1), n.setClear(0, 0, 0, 1), i.setClear(1), r.setClear(0), rt(t2.DEPTH_TEST), i.setFunc(3), ct2(false), ht2(1), rt(t2.CULL_FACE), lt2(0);
    const at = { [y]: t2.FUNC_ADD, [M]: t2.FUNC_SUBTRACT, [S]: t2.FUNC_REVERSE_SUBTRACT };
    at[103] = t2.MIN, at[104] = t2.MAX;
    const ot2 = { [w]: t2.ZERO, [E]: t2.ONE, [A]: t2.SRC_COLOR, [C]: t2.SRC_ALPHA, [N]: t2.SRC_ALPHA_SATURATE, [U]: t2.DST_COLOR, [P]: t2.DST_ALPHA, [R]: t2.ONE_MINUS_SRC_COLOR, [I]: t2.ONE_MINUS_SRC_ALPHA, [D]: t2.ONE_MINUS_DST_COLOR, [L]: t2.ONE_MINUS_DST_ALPHA, [O]: t2.CONSTANT_COLOR, [F]: t2.ONE_MINUS_CONSTANT_COLOR, [B]: t2.CONSTANT_ALPHA, [z]: t2.ONE_MINUS_CONSTANT_ALPHA };
    function lt2(e2, n2, i2, r2, s2, a2, o2, l2, c2, h2) {
      if (0 !== e2) {
        if (false === d2 && (rt(t2.BLEND), d2 = true), 5 === e2) s2 = s2 || n2, a2 = a2 || i2, o2 = o2 || r2, n2 === m && s2 === v || (t2.blendEquationSeparate(at[n2], at[s2]), m = n2, v = s2), i2 === f && r2 === g && a2 === _ && o2 === x || (t2.blendFuncSeparate(ot2[i2], ot2[r2], ot2[a2], ot2[o2]), f = i2, g = r2, _ = a2, x = o2), false !== l2.equals(b) && c2 === T || (t2.blendColor(l2.r, l2.g, l2.b, c2), b.copy(l2), T = c2), p2 = e2, k2 = false;
        else if (e2 !== p2 || h2 !== k2) {
          if (m === y && v === y || (t2.blendEquation(t2.FUNC_ADD), m = y, v = y), h2) switch (e2) {
            case 1:
              t2.blendFuncSeparate(t2.ONE, t2.ONE_MINUS_SRC_ALPHA, t2.ONE, t2.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t2.blendFunc(t2.ONE, t2.ONE);
              break;
            case 3:
              t2.blendFuncSeparate(t2.ZERO, t2.ONE_MINUS_SRC_COLOR, t2.ZERO, t2.ONE);
              break;
            case 4:
              t2.blendFuncSeparate(t2.ZERO, t2.SRC_COLOR, t2.ZERO, t2.SRC_ALPHA);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e2);
          }
          else switch (e2) {
            case 1:
              t2.blendFuncSeparate(t2.SRC_ALPHA, t2.ONE_MINUS_SRC_ALPHA, t2.ONE, t2.ONE_MINUS_SRC_ALPHA);
              break;
            case 2:
              t2.blendFunc(t2.SRC_ALPHA, t2.ONE);
              break;
            case 3:
              t2.blendFuncSeparate(t2.ZERO, t2.ONE_MINUS_SRC_COLOR, t2.ZERO, t2.ONE);
              break;
            case 4:
              t2.blendFunc(t2.ZERO, t2.SRC_COLOR);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", e2);
          }
          f = null, g = null, _ = null, x = null, b.set(0, 0, 0), T = 0, p2 = e2, k2 = h2;
        }
      } else true === d2 && (st(t2.BLEND), d2 = false);
    }
    function ct2(e2) {
      V2 !== e2 && (e2 ? t2.frontFace(t2.CW) : t2.frontFace(t2.CCW), V2 = e2);
    }
    function ht2(e2) {
      0 !== e2 ? (rt(t2.CULL_FACE), e2 !== H2 && (1 === e2 ? t2.cullFace(t2.BACK) : 2 === e2 ? t2.cullFace(t2.FRONT) : t2.cullFace(t2.FRONT_AND_BACK))) : st(t2.CULL_FACE), H2 = e2;
    }
    function ut2(e2, n2, i2) {
      e2 ? (rt(t2.POLYGON_OFFSET_FILL), W2 === n2 && X2 === i2 || (t2.polygonOffset(n2, i2), W2 = n2, X2 = i2)) : st(t2.POLYGON_OFFSET_FILL);
    }
    return { buffers: { color: n, depth: i, stencil: r }, enable: rt, disable: st, bindFramebuffer: function(e2, n2) {
      return l[e2] !== n2 && (t2.bindFramebuffer(e2, n2), l[e2] = n2, e2 === t2.DRAW_FRAMEBUFFER && (l[t2.FRAMEBUFFER] = n2), e2 === t2.FRAMEBUFFER && (l[t2.DRAW_FRAMEBUFFER] = n2), true);
    }, drawBuffers: function(e2, n2) {
      let i2 = h, r2 = false;
      if (e2) {
        i2 = c.get(n2), void 0 === i2 && (i2 = [], c.set(n2, i2));
        const s2 = e2.textures;
        if (i2.length !== s2.length || i2[0] !== t2.COLOR_ATTACHMENT0) {
          for (let e3 = 0, n3 = s2.length; e3 < n3; e3++) i2[e3] = t2.COLOR_ATTACHMENT0 + e3;
          i2.length = s2.length, r2 = true;
        }
      } else i2[0] !== t2.BACK && (i2[0] = t2.BACK, r2 = true);
      r2 && t2.drawBuffers(i2);
    }, useProgram: function(e2) {
      return u2 !== e2 && (t2.useProgram(e2), u2 = e2, true);
    }, setBlending: lt2, setMaterial: function(e2, s2) {
      2 === e2.side ? st(t2.CULL_FACE) : rt(t2.CULL_FACE);
      let a2 = 1 === e2.side;
      s2 && (a2 = !a2), ct2(a2), 1 === e2.blending && false === e2.transparent ? lt2(0) : lt2(e2.blending, e2.blendEquation, e2.blendSrc, e2.blendDst, e2.blendEquationAlpha, e2.blendSrcAlpha, e2.blendDstAlpha, e2.blendColor, e2.blendAlpha, e2.premultipliedAlpha), i.setFunc(e2.depthFunc), i.setTest(e2.depthTest), i.setMask(e2.depthWrite), n.setMask(e2.colorWrite);
      const o2 = e2.stencilWrite;
      r.setTest(o2), o2 && (r.setMask(e2.stencilWriteMask), r.setFunc(e2.stencilFunc, e2.stencilRef, e2.stencilFuncMask), r.setOp(e2.stencilFail, e2.stencilZFail, e2.stencilZPass)), ut2(e2.polygonOffset, e2.polygonOffsetFactor, e2.polygonOffsetUnits), true === e2.alphaToCoverage ? rt(t2.SAMPLE_ALPHA_TO_COVERAGE) : st(t2.SAMPLE_ALPHA_TO_COVERAGE);
    }, setFlipSided: ct2, setCullFace: ht2, setLineWidth: function(e2) {
      e2 !== G2 && (q2 && t2.lineWidth(e2), G2 = e2);
    }, setPolygonOffset: ut2, setScissorTest: function(e2) {
      e2 ? rt(t2.SCISSOR_TEST) : st(t2.SCISSOR_TEST);
    }, activeTexture: function(e2) {
      void 0 === e2 && (e2 = t2.TEXTURE0 + j2 - 1), J !== e2 && (t2.activeTexture(e2), J = e2);
    }, bindTexture: function(e2, n2, i2) {
      void 0 === i2 && (i2 = null === J ? t2.TEXTURE0 + j2 - 1 : J);
      let r2 = K[i2];
      void 0 === r2 && (r2 = { type: void 0, texture: void 0 }, K[i2] = r2), r2.type === e2 && r2.texture === n2 || (J !== i2 && (t2.activeTexture(i2), J = i2), t2.bindTexture(e2, n2 || it[e2]), r2.type = e2, r2.texture = n2);
    }, unbindTexture: function() {
      const e2 = K[J];
      void 0 !== e2 && void 0 !== e2.type && (t2.bindTexture(e2.type, null), e2.type = void 0, e2.texture = void 0);
    }, compressedTexImage2D: function() {
      try {
        t2.compressedTexImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexImage3D: function() {
      try {
        t2.compressedTexImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texImage2D: function() {
      try {
        t2.texImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texImage3D: function() {
      try {
        t2.texImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, updateUBOMapping: function(e2, n2) {
      let i2 = a.get(n2);
      void 0 === i2 && (i2 = /* @__PURE__ */ new WeakMap(), a.set(n2, i2));
      let r2 = i2.get(e2);
      void 0 === r2 && (r2 = t2.getUniformBlockIndex(n2, e2.name), i2.set(e2, r2));
    }, uniformBlockBinding: function(e2, n2) {
      const i2 = a.get(n2).get(e2);
      s.get(n2) !== i2 && (t2.uniformBlockBinding(n2, i2, e2.__bindingPointIndex), s.set(n2, i2));
    }, texStorage2D: function() {
      try {
        t2.texStorage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texStorage3D: function() {
      try {
        t2.texStorage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texSubImage2D: function() {
      try {
        t2.texSubImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, texSubImage3D: function() {
      try {
        t2.texSubImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexSubImage2D: function() {
      try {
        t2.compressedTexSubImage2D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, compressedTexSubImage3D: function() {
      try {
        t2.compressedTexSubImage3D.apply(t2, arguments);
      } catch (t3) {
        console.error("THREE.WebGLState:", t3);
      }
    }, scissor: function(e2) {
      false === tt.equals(e2) && (t2.scissor(e2.x, e2.y, e2.z, e2.w), tt.copy(e2));
    }, viewport: function(e2) {
      false === et.equals(e2) && (t2.viewport(e2.x, e2.y, e2.z, e2.w), et.copy(e2));
    }, reset: function() {
      t2.disable(t2.BLEND), t2.disable(t2.CULL_FACE), t2.disable(t2.DEPTH_TEST), t2.disable(t2.POLYGON_OFFSET_FILL), t2.disable(t2.SCISSOR_TEST), t2.disable(t2.STENCIL_TEST), t2.disable(t2.SAMPLE_ALPHA_TO_COVERAGE), t2.blendEquation(t2.FUNC_ADD), t2.blendFunc(t2.ONE, t2.ZERO), t2.blendFuncSeparate(t2.ONE, t2.ZERO, t2.ONE, t2.ZERO), t2.blendColor(0, 0, 0, 0), t2.colorMask(true, true, true, true), t2.clearColor(0, 0, 0, 0), t2.depthMask(true), t2.depthFunc(t2.LESS), i.setReversed(false), t2.clearDepth(1), t2.stencilMask(4294967295), t2.stencilFunc(t2.ALWAYS, 0, 4294967295), t2.stencilOp(t2.KEEP, t2.KEEP, t2.KEEP), t2.clearStencil(0), t2.cullFace(t2.BACK), t2.frontFace(t2.CCW), t2.polygonOffset(0, 0), t2.activeTexture(t2.TEXTURE0), t2.bindFramebuffer(t2.FRAMEBUFFER, null), t2.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), t2.bindFramebuffer(t2.READ_FRAMEBUFFER, null), t2.useProgram(null), t2.lineWidth(1), t2.scissor(0, 0, t2.canvas.width, t2.canvas.height), t2.viewport(0, 0, t2.canvas.width, t2.canvas.height), o = {}, J = null, K = {}, l = {}, c = /* @__PURE__ */ new WeakMap(), h = [], u2 = null, d2 = false, p2 = null, m = null, f = null, g = null, v = null, _ = null, x = null, b = new Kr(0, 0, 0), T = 0, k2 = false, V2 = null, H2 = null, G2 = null, W2 = null, X2 = null, tt.set(0, 0, t2.canvas.width, t2.canvas.height), et.set(0, 0, t2.canvas.width, t2.canvas.height), n.reset(), i.reset(), r.reset();
    } };
  }
  function Vl(t2, e, n, i) {
    const r = (function(t3) {
      switch (t3) {
        case Et:
        case At:
          return { byteLength: 1, components: 1 };
        case Ct:
        case Rt:
        case Ut:
          return { byteLength: 2, components: 1 };
        case Dt:
        case Nt:
          return { byteLength: 2, components: 4 };
        case Pt:
        case It:
        case Lt:
          return { byteLength: 4, components: 1 };
        case Ft:
          return { byteLength: 4, components: 3 };
      }
      throw new Error(`Unknown texture type ${t3}.`);
    })(i);
    switch (n) {
      case Bt:
      case Vt:
        return t2 * e;
      case Ht:
        return t2 * e * 2;
      case Xt:
      case jt:
        return t2 * e / r.components * r.byteLength;
      case qt:
      case Yt:
        return t2 * e * 2 / r.components * r.byteLength;
      case zt:
        return t2 * e * 3 / r.components * r.byteLength;
      case kt:
      case Jt:
        return t2 * e * 4 / r.components * r.byteLength;
      case Kt:
      case $t:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case Qt:
      case te:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case ne:
      case re:
        return Math.max(t2, 16) * Math.max(e, 8) / 4;
      case ee:
      case ie:
        return Math.max(t2, 8) * Math.max(e, 8) / 2;
      case se:
      case ae:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 8;
      case oe:
      case le:
        return Math.floor((t2 + 3) / 4) * Math.floor((e + 3) / 4) * 16;
      case ce:
        return Math.floor((t2 + 4) / 5) * Math.floor((e + 3) / 4) * 16;
      case he:
        return Math.floor((t2 + 4) / 5) * Math.floor((e + 4) / 5) * 16;
      case ue:
        return Math.floor((t2 + 5) / 6) * Math.floor((e + 4) / 5) * 16;
      case de:
        return Math.floor((t2 + 5) / 6) * Math.floor((e + 5) / 6) * 16;
      case pe:
        return Math.floor((t2 + 7) / 8) * Math.floor((e + 4) / 5) * 16;
      case me:
        return Math.floor((t2 + 7) / 8) * Math.floor((e + 5) / 6) * 16;
      case fe:
        return Math.floor((t2 + 7) / 8) * Math.floor((e + 7) / 8) * 16;
      case ge:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 4) / 5) * 16;
      case ve:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 5) / 6) * 16;
      case _e:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 7) / 8) * 16;
      case xe:
        return Math.floor((t2 + 9) / 10) * Math.floor((e + 9) / 10) * 16;
      case ye:
        return Math.floor((t2 + 11) / 12) * Math.floor((e + 9) / 10) * 16;
      case Me:
        return Math.floor((t2 + 11) / 12) * Math.floor((e + 11) / 12) * 16;
      case Se:
      case be:
      case Te:
        return Math.ceil(t2 / 4) * Math.ceil(e / 4) * 16;
      case we:
      case Ee:
        return Math.ceil(t2 / 4) * Math.ceil(e / 4) * 8;
      case Ae:
      case Re:
        return Math.ceil(t2 / 4) * Math.ceil(e / 4) * 16;
    }
    throw new Error(`Unable to determine texture byte length for ${n} format.`);
  }
  function Gl(t2, e, n, i, r, s, a) {
    const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = "undefined" != typeof navigator && /OculusBrowser/g.test(navigator.userAgent), c = new Jn(), h = /* @__PURE__ */ new WeakMap();
    let u2;
    const d2 = /* @__PURE__ */ new WeakMap();
    let p2 = false;
    try {
      p2 = "undefined" != typeof OffscreenCanvas && null !== new OffscreenCanvas(1, 1).getContext("2d");
    } catch (t3) {
    }
    function m(t3, e2) {
      return p2 ? new OffscreenCanvas(t3, e2) : ni("canvas");
    }
    function f(t3, e2, n2) {
      let i2 = 1;
      const r2 = V2(t3);
      if ((r2.width > n2 || r2.height > n2) && (i2 = n2 / Math.max(r2.width, r2.height)), i2 < 1) {
        if ("undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t3 instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t3 instanceof ImageBitmap || "undefined" != typeof VideoFrame && t3 instanceof VideoFrame) {
          const n3 = Math.floor(i2 * r2.width), s2 = Math.floor(i2 * r2.height);
          void 0 === u2 && (u2 = m(n3, s2));
          const a2 = e2 ? m(n3, s2) : u2;
          a2.width = n3, a2.height = s2;
          return a2.getContext("2d").drawImage(t3, 0, 0, n3, s2), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + r2.width + "x" + r2.height + ") to (" + n3 + "x" + s2 + ")."), a2;
        }
        return "data" in t3 && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + r2.width + "x" + r2.height + ")."), t3;
      }
      return t3;
    }
    function g(t3) {
      return t3.generateMipmaps;
    }
    function v(e2) {
      t2.generateMipmap(e2);
    }
    function _(e2) {
      return e2.isWebGLCubeRenderTarget ? t2.TEXTURE_CUBE_MAP : e2.isWebGL3DRenderTarget ? t2.TEXTURE_3D : e2.isWebGLArrayRenderTarget || e2.isCompressedArrayTexture ? t2.TEXTURE_2D_ARRAY : t2.TEXTURE_2D;
    }
    function x(n2, i2, r2, s2, a2 = false) {
      if (null !== n2) {
        if (void 0 !== t2[n2]) return t2[n2];
        console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + n2 + "'");
      }
      let o2 = i2;
      if (i2 === t2.RED && (r2 === t2.FLOAT && (o2 = t2.R32F), r2 === t2.HALF_FLOAT && (o2 = t2.R16F), r2 === t2.UNSIGNED_BYTE && (o2 = t2.R8)), i2 === t2.RED_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.R8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.R16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.R32UI), r2 === t2.BYTE && (o2 = t2.R8I), r2 === t2.SHORT && (o2 = t2.R16I), r2 === t2.INT && (o2 = t2.R32I)), i2 === t2.RG && (r2 === t2.FLOAT && (o2 = t2.RG32F), r2 === t2.HALF_FLOAT && (o2 = t2.RG16F), r2 === t2.UNSIGNED_BYTE && (o2 = t2.RG8)), i2 === t2.RG_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.RG8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.RG16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.RG32UI), r2 === t2.BYTE && (o2 = t2.RG8I), r2 === t2.SHORT && (o2 = t2.RG16I), r2 === t2.INT && (o2 = t2.RG32I)), i2 === t2.RGB_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.RGB8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.RGB16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.RGB32UI), r2 === t2.BYTE && (o2 = t2.RGB8I), r2 === t2.SHORT && (o2 = t2.RGB16I), r2 === t2.INT && (o2 = t2.RGB32I)), i2 === t2.RGBA_INTEGER && (r2 === t2.UNSIGNED_BYTE && (o2 = t2.RGBA8UI), r2 === t2.UNSIGNED_SHORT && (o2 = t2.RGBA16UI), r2 === t2.UNSIGNED_INT && (o2 = t2.RGBA32UI), r2 === t2.BYTE && (o2 = t2.RGBA8I), r2 === t2.SHORT && (o2 = t2.RGBA16I), r2 === t2.INT && (o2 = t2.RGBA32I)), i2 === t2.RGB && r2 === t2.UNSIGNED_INT_5_9_9_9_REV && (o2 = t2.RGB9_E5), i2 === t2.RGBA) {
        const e2 = a2 ? $e : ai.getTransfer(s2);
        r2 === t2.FLOAT && (o2 = t2.RGBA32F), r2 === t2.HALF_FLOAT && (o2 = t2.RGBA16F), r2 === t2.UNSIGNED_BYTE && (o2 = e2 === Qe ? t2.SRGB8_ALPHA8 : t2.RGBA8), r2 === t2.UNSIGNED_SHORT_4_4_4_4 && (o2 = t2.RGBA4), r2 === t2.UNSIGNED_SHORT_5_5_5_1 && (o2 = t2.RGB5_A1);
      }
      return o2 !== t2.R16F && o2 !== t2.R32F && o2 !== t2.RG16F && o2 !== t2.RG32F && o2 !== t2.RGBA16F && o2 !== t2.RGBA32F || e.get("EXT_color_buffer_float"), o2;
    }
    function y2(e2, n2) {
      let i2;
      return e2 ? null === n2 || n2 === Pt || n2 === Ot ? i2 = t2.DEPTH24_STENCIL8 : n2 === Lt ? i2 = t2.DEPTH32F_STENCIL8 : n2 === Ct && (i2 = t2.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : null === n2 || n2 === Pt || n2 === Ot ? i2 = t2.DEPTH_COMPONENT24 : n2 === Lt ? i2 = t2.DEPTH_COMPONENT32F : n2 === Ct && (i2 = t2.DEPTH_COMPONENT16), i2;
    }
    function M2(t3, e2) {
      return true === g(t3) || t3.isFramebufferTexture && t3.minFilter !== gt && t3.minFilter !== Mt ? Math.log2(Math.max(e2.width, e2.height)) + 1 : void 0 !== t3.mipmaps && t3.mipmaps.length > 0 ? t3.mipmaps.length : t3.isCompressedTexture && Array.isArray(t3.image) ? e2.mipmaps.length : 1;
    }
    function S2(t3) {
      const e2 = t3.target;
      e2.removeEventListener("dispose", S2), (function(t4) {
        const e3 = i.get(t4);
        if (void 0 === e3.__webglInit) return;
        const n2 = t4.source, r2 = d2.get(n2);
        if (r2) {
          const i2 = r2[e3.__cacheKey];
          i2.usedTimes--, 0 === i2.usedTimes && T(t4), 0 === Object.keys(r2).length && d2.delete(n2);
        }
        i.remove(t4);
      })(e2), e2.isVideoTexture && h.delete(e2);
    }
    function b(e2) {
      const n2 = e2.target;
      n2.removeEventListener("dispose", b), (function(e3) {
        const n3 = i.get(e3);
        e3.depthTexture && (e3.depthTexture.dispose(), i.remove(e3.depthTexture));
        if (e3.isWebGLCubeRenderTarget) for (let e4 = 0; e4 < 6; e4++) {
          if (Array.isArray(n3.__webglFramebuffer[e4])) for (let i2 = 0; i2 < n3.__webglFramebuffer[e4].length; i2++) t2.deleteFramebuffer(n3.__webglFramebuffer[e4][i2]);
          else t2.deleteFramebuffer(n3.__webglFramebuffer[e4]);
          n3.__webglDepthbuffer && t2.deleteRenderbuffer(n3.__webglDepthbuffer[e4]);
        }
        else {
          if (Array.isArray(n3.__webglFramebuffer)) for (let e4 = 0; e4 < n3.__webglFramebuffer.length; e4++) t2.deleteFramebuffer(n3.__webglFramebuffer[e4]);
          else t2.deleteFramebuffer(n3.__webglFramebuffer);
          if (n3.__webglDepthbuffer && t2.deleteRenderbuffer(n3.__webglDepthbuffer), n3.__webglMultisampledFramebuffer && t2.deleteFramebuffer(n3.__webglMultisampledFramebuffer), n3.__webglColorRenderbuffer) for (let e4 = 0; e4 < n3.__webglColorRenderbuffer.length; e4++) n3.__webglColorRenderbuffer[e4] && t2.deleteRenderbuffer(n3.__webglColorRenderbuffer[e4]);
          n3.__webglDepthRenderbuffer && t2.deleteRenderbuffer(n3.__webglDepthRenderbuffer);
        }
        const r2 = e3.textures;
        for (let e4 = 0, n4 = r2.length; e4 < n4; e4++) {
          const n5 = i.get(r2[e4]);
          n5.__webglTexture && (t2.deleteTexture(n5.__webglTexture), a.memory.textures--), i.remove(r2[e4]);
        }
        i.remove(e3);
      })(n2);
    }
    function T(e2) {
      const n2 = i.get(e2);
      t2.deleteTexture(n2.__webglTexture);
      const r2 = e2.source;
      delete d2.get(r2)[n2.__cacheKey], a.memory.textures--;
    }
    let w2 = 0;
    function E2(e2, r2) {
      const s2 = i.get(e2);
      if (e2.isVideoTexture && (function(t3) {
        const e3 = a.render.frame;
        h.get(t3) !== e3 && (h.set(t3, e3), t3.update());
      })(e2), false === e2.isRenderTargetTexture && e2.version > 0 && s2.__version !== e2.version) {
        const t3 = e2.image;
        if (null === t3) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
        else {
          if (false !== t3.complete) return void L2(s2, e2, r2);
          console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
        }
      }
      n.bindTexture(t2.TEXTURE_2D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }
    const A2 = { [pt]: t2.REPEAT, [mt]: t2.CLAMP_TO_EDGE, [ft]: t2.MIRRORED_REPEAT }, R2 = { [gt]: t2.NEAREST, [vt]: t2.NEAREST_MIPMAP_NEAREST, [xt]: t2.NEAREST_MIPMAP_LINEAR, [Mt]: t2.LINEAR, [St]: t2.LINEAR_MIPMAP_NEAREST, [Tt]: t2.LINEAR_MIPMAP_LINEAR }, C2 = { [vn]: t2.NEVER, [Tn]: t2.ALWAYS, [_n]: t2.LESS, [yn]: t2.LEQUAL, [xn]: t2.EQUAL, [bn]: t2.GEQUAL, [Mn]: t2.GREATER, [Sn]: t2.NOTEQUAL };
    function I2(n2, s2) {
      if (s2.type !== Lt || false !== e.has("OES_texture_float_linear") || s2.magFilter !== Mt && s2.magFilter !== St && s2.magFilter !== xt && s2.magFilter !== Tt && s2.minFilter !== Mt && s2.minFilter !== St && s2.minFilter !== xt && s2.minFilter !== Tt || console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), t2.texParameteri(n2, t2.TEXTURE_WRAP_S, A2[s2.wrapS]), t2.texParameteri(n2, t2.TEXTURE_WRAP_T, A2[s2.wrapT]), n2 !== t2.TEXTURE_3D && n2 !== t2.TEXTURE_2D_ARRAY || t2.texParameteri(n2, t2.TEXTURE_WRAP_R, A2[s2.wrapR]), t2.texParameteri(n2, t2.TEXTURE_MAG_FILTER, R2[s2.magFilter]), t2.texParameteri(n2, t2.TEXTURE_MIN_FILTER, R2[s2.minFilter]), s2.compareFunction && (t2.texParameteri(n2, t2.TEXTURE_COMPARE_MODE, t2.COMPARE_REF_TO_TEXTURE), t2.texParameteri(n2, t2.TEXTURE_COMPARE_FUNC, C2[s2.compareFunction])), true === e.has("EXT_texture_filter_anisotropic")) {
        if (s2.magFilter === gt) return;
        if (s2.minFilter !== xt && s2.minFilter !== Tt) return;
        if (s2.type === Lt && false === e.has("OES_texture_float_linear")) return;
        if (s2.anisotropy > 1 || i.get(s2).__currentAnisotropy) {
          const a2 = e.get("EXT_texture_filter_anisotropic");
          t2.texParameterf(n2, a2.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(s2.anisotropy, r.getMaxAnisotropy())), i.get(s2).__currentAnisotropy = s2.anisotropy;
        }
      }
    }
    function P2(e2, n2) {
      let i2 = false;
      void 0 === e2.__webglInit && (e2.__webglInit = true, n2.addEventListener("dispose", S2));
      const r2 = n2.source;
      let s2 = d2.get(r2);
      void 0 === s2 && (s2 = {}, d2.set(r2, s2));
      const o2 = (function(t3) {
        const e3 = [];
        return e3.push(t3.wrapS), e3.push(t3.wrapT), e3.push(t3.wrapR || 0), e3.push(t3.magFilter), e3.push(t3.minFilter), e3.push(t3.anisotropy), e3.push(t3.internalFormat), e3.push(t3.format), e3.push(t3.type), e3.push(t3.generateMipmaps), e3.push(t3.premultiplyAlpha), e3.push(t3.flipY), e3.push(t3.unpackAlignment), e3.push(t3.colorSpace), e3.join();
      })(n2);
      if (o2 !== e2.__cacheKey) {
        void 0 === s2[o2] && (s2[o2] = { texture: t2.createTexture(), usedTimes: 0 }, a.memory.textures++, i2 = true), s2[o2].usedTimes++;
        const r3 = s2[e2.__cacheKey];
        void 0 !== r3 && (s2[e2.__cacheKey].usedTimes--, 0 === r3.usedTimes && T(n2)), e2.__cacheKey = o2, e2.__webglTexture = s2[o2].texture;
      }
      return i2;
    }
    function L2(e2, a2, o2) {
      let l2 = t2.TEXTURE_2D;
      (a2.isDataArrayTexture || a2.isCompressedArrayTexture) && (l2 = t2.TEXTURE_2D_ARRAY), a2.isData3DTexture && (l2 = t2.TEXTURE_3D);
      const c2 = P2(e2, a2), h2 = a2.source;
      n.bindTexture(l2, e2.__webglTexture, t2.TEXTURE0 + o2);
      const u3 = i.get(h2);
      if (h2.version !== u3.__version || true === c2) {
        n.activeTexture(t2.TEXTURE0 + o2);
        const e3 = ai.getPrimaries(ai.workingColorSpace), i2 = a2.colorSpace === Ze ? null : ai.getPrimaries(a2.colorSpace), d3 = a2.colorSpace === Ze || e3 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
        t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a2.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a2.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a2.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, d3);
        let p3 = f(a2.image, false, r.maxTextureSize);
        p3 = k2(a2, p3);
        const m2 = s.convert(a2.format, a2.colorSpace), _2 = s.convert(a2.type);
        let S3, b2 = x(a2.internalFormat, m2, _2, a2.colorSpace, a2.isVideoTexture);
        I2(l2, a2);
        const T2 = a2.mipmaps, w3 = true !== a2.isVideoTexture, E3 = void 0 === u3.__version || true === c2, A3 = h2.dataReady, R3 = M2(a2, p3);
        if (a2.isDepthTexture) b2 = y2(a2.format === Wt, a2.type), E3 && (w3 ? n.texStorage2D(t2.TEXTURE_2D, 1, b2, p3.width, p3.height) : n.texImage2D(t2.TEXTURE_2D, 0, b2, p3.width, p3.height, 0, m2, _2, null));
        else if (a2.isDataTexture) if (T2.length > 0) {
          w3 && E3 && n.texStorage2D(t2.TEXTURE_2D, R3, b2, T2[0].width, T2[0].height);
          for (let e4 = 0, i3 = T2.length; e4 < i3; e4++) S3 = T2[e4], w3 ? A3 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, S3.width, S3.height, m2, _2, S3.data) : n.texImage2D(t2.TEXTURE_2D, e4, b2, S3.width, S3.height, 0, m2, _2, S3.data);
          a2.generateMipmaps = false;
        } else w3 ? (E3 && n.texStorage2D(t2.TEXTURE_2D, R3, b2, p3.width, p3.height), A3 && n.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, p3.width, p3.height, m2, _2, p3.data)) : n.texImage2D(t2.TEXTURE_2D, 0, b2, p3.width, p3.height, 0, m2, _2, p3.data);
        else if (a2.isCompressedTexture) if (a2.isCompressedArrayTexture) {
          w3 && E3 && n.texStorage3D(t2.TEXTURE_2D_ARRAY, R3, b2, T2[0].width, T2[0].height, p3.depth);
          for (let e4 = 0, i3 = T2.length; e4 < i3; e4++) if (S3 = T2[e4], a2.format !== kt) if (null !== m2) if (w3) {
            if (A3) if (a2.layerUpdates.size > 0) {
              const i4 = Vl(S3.width, S3.height, a2.format, a2.type);
              for (const r2 of a2.layerUpdates) {
                const s2 = S3.data.subarray(r2 * i4 / S3.data.BYTES_PER_ELEMENT, (r2 + 1) * i4 / S3.data.BYTES_PER_ELEMENT);
                n.compressedTexSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, r2, S3.width, S3.height, 1, m2, s2);
              }
              a2.clearLayerUpdates();
            } else n.compressedTexSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, 0, S3.width, S3.height, p3.depth, m2, S3.data);
          } else n.compressedTexImage3D(t2.TEXTURE_2D_ARRAY, e4, b2, S3.width, S3.height, p3.depth, 0, S3.data, 0, 0);
          else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          else w3 ? A3 && n.texSubImage3D(t2.TEXTURE_2D_ARRAY, e4, 0, 0, 0, S3.width, S3.height, p3.depth, m2, _2, S3.data) : n.texImage3D(t2.TEXTURE_2D_ARRAY, e4, b2, S3.width, S3.height, p3.depth, 0, m2, _2, S3.data);
        } else {
          w3 && E3 && n.texStorage2D(t2.TEXTURE_2D, R3, b2, T2[0].width, T2[0].height);
          for (let e4 = 0, i3 = T2.length; e4 < i3; e4++) S3 = T2[e4], a2.format !== kt ? null !== m2 ? w3 ? A3 && n.compressedTexSubImage2D(t2.TEXTURE_2D, e4, 0, 0, S3.width, S3.height, m2, S3.data) : n.compressedTexImage2D(t2.TEXTURE_2D, e4, b2, S3.width, S3.height, 0, S3.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : w3 ? A3 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, S3.width, S3.height, m2, _2, S3.data) : n.texImage2D(t2.TEXTURE_2D, e4, b2, S3.width, S3.height, 0, m2, _2, S3.data);
        }
        else if (a2.isDataArrayTexture) if (w3) {
          if (E3 && n.texStorage3D(t2.TEXTURE_2D_ARRAY, R3, b2, p3.width, p3.height, p3.depth), A3) if (a2.layerUpdates.size > 0) {
            const e4 = Vl(p3.width, p3.height, a2.format, a2.type);
            for (const i3 of a2.layerUpdates) {
              const r2 = p3.data.subarray(i3 * e4 / p3.data.BYTES_PER_ELEMENT, (i3 + 1) * e4 / p3.data.BYTES_PER_ELEMENT);
              n.texSubImage3D(t2.TEXTURE_2D_ARRAY, 0, 0, 0, i3, p3.width, p3.height, 1, m2, _2, r2);
            }
            a2.clearLayerUpdates();
          } else n.texSubImage3D(t2.TEXTURE_2D_ARRAY, 0, 0, 0, 0, p3.width, p3.height, p3.depth, m2, _2, p3.data);
        } else n.texImage3D(t2.TEXTURE_2D_ARRAY, 0, b2, p3.width, p3.height, p3.depth, 0, m2, _2, p3.data);
        else if (a2.isData3DTexture) w3 ? (E3 && n.texStorage3D(t2.TEXTURE_3D, R3, b2, p3.width, p3.height, p3.depth), A3 && n.texSubImage3D(t2.TEXTURE_3D, 0, 0, 0, 0, p3.width, p3.height, p3.depth, m2, _2, p3.data)) : n.texImage3D(t2.TEXTURE_3D, 0, b2, p3.width, p3.height, p3.depth, 0, m2, _2, p3.data);
        else if (a2.isFramebufferTexture) {
          if (E3) if (w3) n.texStorage2D(t2.TEXTURE_2D, R3, b2, p3.width, p3.height);
          else {
            let e4 = p3.width, i3 = p3.height;
            for (let r2 = 0; r2 < R3; r2++) n.texImage2D(t2.TEXTURE_2D, r2, b2, e4, i3, 0, m2, _2, null), e4 >>= 1, i3 >>= 1;
          }
        } else if (T2.length > 0) {
          if (w3 && E3) {
            const e4 = V2(T2[0]);
            n.texStorage2D(t2.TEXTURE_2D, R3, b2, e4.width, e4.height);
          }
          for (let e4 = 0, i3 = T2.length; e4 < i3; e4++) S3 = T2[e4], w3 ? A3 && n.texSubImage2D(t2.TEXTURE_2D, e4, 0, 0, m2, _2, S3) : n.texImage2D(t2.TEXTURE_2D, e4, b2, m2, _2, S3);
          a2.generateMipmaps = false;
        } else if (w3) {
          if (E3) {
            const e4 = V2(p3);
            n.texStorage2D(t2.TEXTURE_2D, R3, b2, e4.width, e4.height);
          }
          A3 && n.texSubImage2D(t2.TEXTURE_2D, 0, 0, 0, m2, _2, p3);
        } else n.texImage2D(t2.TEXTURE_2D, 0, b2, m2, _2, p3);
        g(a2) && v(l2), u3.__version = h2.version, a2.onUpdate && a2.onUpdate(a2);
      }
      e2.__version = a2.version;
    }
    function U2(e2, r2, a2, l2, c2, h2) {
      const u3 = s.convert(a2.format, a2.colorSpace), d3 = s.convert(a2.type), p3 = x(a2.internalFormat, u3, d3, a2.colorSpace), m2 = i.get(r2), f2 = i.get(a2);
      if (f2.__renderTarget = r2, !m2.__hasExternalTextures) {
        const e3 = Math.max(1, r2.width >> h2), i2 = Math.max(1, r2.height >> h2);
        c2 === t2.TEXTURE_3D || c2 === t2.TEXTURE_2D_ARRAY ? n.texImage3D(c2, h2, p3, e3, i2, r2.depth, 0, u3, d3, null) : n.texImage2D(c2, h2, p3, e3, i2, 0, u3, d3, null);
      }
      n.bindFramebuffer(t2.FRAMEBUFFER, e2), z2(r2) ? o.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, l2, c2, f2.__webglTexture, 0, B2(r2)) : (c2 === t2.TEXTURE_2D || c2 >= t2.TEXTURE_CUBE_MAP_POSITIVE_X && c2 <= t2.TEXTURE_CUBE_MAP_NEGATIVE_Z) && t2.framebufferTexture2D(t2.FRAMEBUFFER, l2, c2, f2.__webglTexture, h2), n.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    function D2(e2, n2, i2) {
      if (t2.bindRenderbuffer(t2.RENDERBUFFER, e2), n2.depthBuffer) {
        const r2 = n2.depthTexture, s2 = r2 && r2.isDepthTexture ? r2.type : null, a2 = y2(n2.stencilBuffer, s2), l2 = n2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, c2 = B2(n2);
        z2(n2) ? o.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, c2, a2, n2.width, n2.height) : i2 ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, c2, a2, n2.width, n2.height) : t2.renderbufferStorage(t2.RENDERBUFFER, a2, n2.width, n2.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, l2, t2.RENDERBUFFER, e2);
      } else {
        const e3 = n2.textures;
        for (let r2 = 0; r2 < e3.length; r2++) {
          const a2 = e3[r2], l2 = s.convert(a2.format, a2.colorSpace), c2 = s.convert(a2.type), h2 = x(a2.internalFormat, l2, c2, a2.colorSpace), u3 = B2(n2);
          i2 && false === z2(n2) ? t2.renderbufferStorageMultisample(t2.RENDERBUFFER, u3, h2, n2.width, n2.height) : z2(n2) ? o.renderbufferStorageMultisampleEXT(t2.RENDERBUFFER, u3, h2, n2.width, n2.height) : t2.renderbufferStorage(t2.RENDERBUFFER, h2, n2.width, n2.height);
        }
      }
      t2.bindRenderbuffer(t2.RENDERBUFFER, null);
    }
    function N2(e2) {
      const r2 = i.get(e2), s2 = true === e2.isWebGLCubeRenderTarget;
      if (r2.__boundDepthTexture !== e2.depthTexture) {
        const t3 = e2.depthTexture;
        if (r2.__depthDisposeCallback && r2.__depthDisposeCallback(), t3) {
          const e3 = () => {
            delete r2.__boundDepthTexture, delete r2.__depthDisposeCallback, t3.removeEventListener("dispose", e3);
          };
          t3.addEventListener("dispose", e3), r2.__depthDisposeCallback = e3;
        }
        r2.__boundDepthTexture = t3;
      }
      if (e2.depthTexture && !r2.__autoAllocateDepthBuffer) {
        if (s2) throw new Error("target.depthTexture not supported in Cube render targets");
        !(function(e3, r3) {
          if (r3 && r3.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
          if (n.bindFramebuffer(t2.FRAMEBUFFER, e3), !r3.depthTexture || !r3.depthTexture.isDepthTexture) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
          const s3 = i.get(r3.depthTexture);
          s3.__renderTarget = r3, s3.__webglTexture && r3.depthTexture.image.width === r3.width && r3.depthTexture.image.height === r3.height || (r3.depthTexture.image.width = r3.width, r3.depthTexture.image.height = r3.height, r3.depthTexture.needsUpdate = true), E2(r3.depthTexture, 0);
          const a2 = s3.__webglTexture, l2 = B2(r3);
          if (r3.depthTexture.format === Gt) z2(r3) ? o.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, a2, 0, l2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_ATTACHMENT, t2.TEXTURE_2D, a2, 0);
          else {
            if (r3.depthTexture.format !== Wt) throw new Error("Unknown depthTexture format");
            z2(r3) ? o.framebufferTexture2DMultisampleEXT(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, a2, 0, l2) : t2.framebufferTexture2D(t2.FRAMEBUFFER, t2.DEPTH_STENCIL_ATTACHMENT, t2.TEXTURE_2D, a2, 0);
          }
        })(r2.__webglFramebuffer, e2);
      } else if (s2) {
        r2.__webglDepthbuffer = [];
        for (let i2 = 0; i2 < 6; i2++) if (n.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer[i2]), void 0 === r2.__webglDepthbuffer[i2]) r2.__webglDepthbuffer[i2] = t2.createRenderbuffer(), D2(r2.__webglDepthbuffer[i2], e2, false);
        else {
          const n2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, s3 = r2.__webglDepthbuffer[i2];
          t2.bindRenderbuffer(t2.RENDERBUFFER, s3), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, n2, t2.RENDERBUFFER, s3);
        }
      } else if (n.bindFramebuffer(t2.FRAMEBUFFER, r2.__webglFramebuffer), void 0 === r2.__webglDepthbuffer) r2.__webglDepthbuffer = t2.createRenderbuffer(), D2(r2.__webglDepthbuffer, e2, false);
      else {
        const n2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, i2 = r2.__webglDepthbuffer;
        t2.bindRenderbuffer(t2.RENDERBUFFER, i2), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, n2, t2.RENDERBUFFER, i2);
      }
      n.bindFramebuffer(t2.FRAMEBUFFER, null);
    }
    const O2 = [], F2 = [];
    function B2(t3) {
      return Math.min(r.maxSamples, t3.samples);
    }
    function z2(t3) {
      const n2 = i.get(t3);
      return t3.samples > 0 && true === e.has("WEBGL_multisampled_render_to_texture") && false !== n2.__useRenderToTexture;
    }
    function k2(t3, e2) {
      const n2 = t3.colorSpace, i2 = t3.format, r2 = t3.type;
      return true === t3.isCompressedTexture || true === t3.isVideoTexture || n2 !== Ke && n2 !== Ze && (ai.getTransfer(n2) === Qe ? i2 === kt && r2 === Et || console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", n2)), e2;
    }
    function V2(t3) {
      return "undefined" != typeof HTMLImageElement && t3 instanceof HTMLImageElement ? (c.width = t3.naturalWidth || t3.width, c.height = t3.naturalHeight || t3.height) : "undefined" != typeof VideoFrame && t3 instanceof VideoFrame ? (c.width = t3.displayWidth, c.height = t3.displayHeight) : (c.width = t3.width, c.height = t3.height), c;
    }
    this.allocateTextureUnit = function() {
      const t3 = w2;
      return t3 >= r.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + t3 + " texture units while this GPU supports only " + r.maxTextures), w2 += 1, t3;
    }, this.resetTextureUnits = function() {
      w2 = 0;
    }, this.setTexture2D = E2, this.setTexture2DArray = function(e2, r2) {
      const s2 = i.get(e2);
      e2.version > 0 && s2.__version !== e2.version ? L2(s2, e2, r2) : n.bindTexture(t2.TEXTURE_2D_ARRAY, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTexture3D = function(e2, r2) {
      const s2 = i.get(e2);
      e2.version > 0 && s2.__version !== e2.version ? L2(s2, e2, r2) : n.bindTexture(t2.TEXTURE_3D, s2.__webglTexture, t2.TEXTURE0 + r2);
    }, this.setTextureCube = function(e2, a2) {
      const o2 = i.get(e2);
      e2.version > 0 && o2.__version !== e2.version ? (function(e3, a3, o3) {
        if (6 !== a3.image.length) return;
        const l2 = P2(e3, a3), c2 = a3.source;
        n.bindTexture(t2.TEXTURE_CUBE_MAP, e3.__webglTexture, t2.TEXTURE0 + o3);
        const h2 = i.get(c2);
        if (c2.version !== h2.__version || true === l2) {
          n.activeTexture(t2.TEXTURE0 + o3);
          const e4 = ai.getPrimaries(ai.workingColorSpace), i2 = a3.colorSpace === Ze ? null : ai.getPrimaries(a3.colorSpace), u3 = a3.colorSpace === Ze || e4 === i2 ? t2.NONE : t2.BROWSER_DEFAULT_WEBGL;
          t2.pixelStorei(t2.UNPACK_FLIP_Y_WEBGL, a3.flipY), t2.pixelStorei(t2.UNPACK_PREMULTIPLY_ALPHA_WEBGL, a3.premultiplyAlpha), t2.pixelStorei(t2.UNPACK_ALIGNMENT, a3.unpackAlignment), t2.pixelStorei(t2.UNPACK_COLORSPACE_CONVERSION_WEBGL, u3);
          const d3 = a3.isCompressedTexture || a3.image[0].isCompressedTexture, p3 = a3.image[0] && a3.image[0].isDataTexture, m2 = [];
          for (let t3 = 0; t3 < 6; t3++) m2[t3] = d3 || p3 ? p3 ? a3.image[t3].image : a3.image[t3] : f(a3.image[t3], true, r.maxCubemapSize), m2[t3] = k2(a3, m2[t3]);
          const _2 = m2[0], y3 = s.convert(a3.format, a3.colorSpace), S3 = s.convert(a3.type), b2 = x(a3.internalFormat, y3, S3, a3.colorSpace), T2 = true !== a3.isVideoTexture, w3 = void 0 === h2.__version || true === l2, E3 = c2.dataReady;
          let A3, R3 = M2(a3, _2);
          if (I2(t2.TEXTURE_CUBE_MAP, a3), d3) {
            T2 && w3 && n.texStorage2D(t2.TEXTURE_CUBE_MAP, R3, b2, _2.width, _2.height);
            for (let e5 = 0; e5 < 6; e5++) {
              A3 = m2[e5].mipmaps;
              for (let i3 = 0; i3 < A3.length; i3++) {
                const r2 = A3[i3];
                a3.format !== kt ? null !== y3 ? T2 ? E3 && n.compressedTexSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, 0, 0, r2.width, r2.height, y3, r2.data) : n.compressedTexImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, b2, r2.width, r2.height, 0, r2.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : T2 ? E3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, 0, 0, r2.width, r2.height, y3, S3, r2.data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3, b2, r2.width, r2.height, 0, y3, S3, r2.data);
              }
            }
          } else {
            if (A3 = a3.mipmaps, T2 && w3) {
              A3.length > 0 && R3++;
              const e5 = V2(m2[0]);
              n.texStorage2D(t2.TEXTURE_CUBE_MAP, R3, b2, e5.width, e5.height);
            }
            for (let e5 = 0; e5 < 6; e5++) if (p3) {
              T2 ? E3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, 0, 0, m2[e5].width, m2[e5].height, y3, S3, m2[e5].data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, b2, m2[e5].width, m2[e5].height, 0, y3, S3, m2[e5].data);
              for (let i3 = 0; i3 < A3.length; i3++) {
                const r2 = A3[i3].image[e5].image;
                T2 ? E3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, 0, 0, r2.width, r2.height, y3, S3, r2.data) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, b2, r2.width, r2.height, 0, y3, S3, r2.data);
              }
            } else {
              T2 ? E3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, 0, 0, y3, S3, m2[e5]) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, 0, b2, y3, S3, m2[e5]);
              for (let i3 = 0; i3 < A3.length; i3++) {
                const r2 = A3[i3];
                T2 ? E3 && n.texSubImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, 0, 0, y3, S3, r2.image[e5]) : n.texImage2D(t2.TEXTURE_CUBE_MAP_POSITIVE_X + e5, i3 + 1, b2, y3, S3, r2.image[e5]);
              }
            }
          }
          g(a3) && v(t2.TEXTURE_CUBE_MAP), h2.__version = c2.version, a3.onUpdate && a3.onUpdate(a3);
        }
        e3.__version = a3.version;
      })(o2, e2, a2) : n.bindTexture(t2.TEXTURE_CUBE_MAP, o2.__webglTexture, t2.TEXTURE0 + a2);
    }, this.rebindTextures = function(e2, n2, r2) {
      const s2 = i.get(e2);
      void 0 !== n2 && U2(s2.__webglFramebuffer, e2, e2.texture, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, 0), void 0 !== r2 && N2(e2);
    }, this.setupRenderTarget = function(e2) {
      const r2 = e2.texture, o2 = i.get(e2), l2 = i.get(r2);
      e2.addEventListener("dispose", b);
      const c2 = e2.textures, h2 = true === e2.isWebGLCubeRenderTarget, u3 = c2.length > 1;
      if (u3 || (void 0 === l2.__webglTexture && (l2.__webglTexture = t2.createTexture()), l2.__version = r2.version, a.memory.textures++), h2) {
        o2.__webglFramebuffer = [];
        for (let e3 = 0; e3 < 6; e3++) if (r2.mipmaps && r2.mipmaps.length > 0) {
          o2.__webglFramebuffer[e3] = [];
          for (let n2 = 0; n2 < r2.mipmaps.length; n2++) o2.__webglFramebuffer[e3][n2] = t2.createFramebuffer();
        } else o2.__webglFramebuffer[e3] = t2.createFramebuffer();
      } else {
        if (r2.mipmaps && r2.mipmaps.length > 0) {
          o2.__webglFramebuffer = [];
          for (let e3 = 0; e3 < r2.mipmaps.length; e3++) o2.__webglFramebuffer[e3] = t2.createFramebuffer();
        } else o2.__webglFramebuffer = t2.createFramebuffer();
        if (u3) for (let e3 = 0, n2 = c2.length; e3 < n2; e3++) {
          const n3 = i.get(c2[e3]);
          void 0 === n3.__webglTexture && (n3.__webglTexture = t2.createTexture(), a.memory.textures++);
        }
        if (e2.samples > 0 && false === z2(e2)) {
          o2.__webglMultisampledFramebuffer = t2.createFramebuffer(), o2.__webglColorRenderbuffer = [], n.bindFramebuffer(t2.FRAMEBUFFER, o2.__webglMultisampledFramebuffer);
          for (let n2 = 0; n2 < c2.length; n2++) {
            const i2 = c2[n2];
            o2.__webglColorRenderbuffer[n2] = t2.createRenderbuffer(), t2.bindRenderbuffer(t2.RENDERBUFFER, o2.__webglColorRenderbuffer[n2]);
            const r3 = s.convert(i2.format, i2.colorSpace), a2 = s.convert(i2.type), l3 = x(i2.internalFormat, r3, a2, i2.colorSpace, true === e2.isXRRenderTarget), h3 = B2(e2);
            t2.renderbufferStorageMultisample(t2.RENDERBUFFER, h3, l3, e2.width, e2.height), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + n2, t2.RENDERBUFFER, o2.__webglColorRenderbuffer[n2]);
          }
          t2.bindRenderbuffer(t2.RENDERBUFFER, null), e2.depthBuffer && (o2.__webglDepthRenderbuffer = t2.createRenderbuffer(), D2(o2.__webglDepthRenderbuffer, e2, true)), n.bindFramebuffer(t2.FRAMEBUFFER, null);
        }
      }
      if (h2) {
        n.bindTexture(t2.TEXTURE_CUBE_MAP, l2.__webglTexture), I2(t2.TEXTURE_CUBE_MAP, r2);
        for (let n2 = 0; n2 < 6; n2++) if (r2.mipmaps && r2.mipmaps.length > 0) for (let i2 = 0; i2 < r2.mipmaps.length; i2++) U2(o2.__webglFramebuffer[n2][i2], e2, r2, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n2, i2);
        else U2(o2.__webglFramebuffer[n2], e2, r2, t2.COLOR_ATTACHMENT0, t2.TEXTURE_CUBE_MAP_POSITIVE_X + n2, 0);
        g(r2) && v(t2.TEXTURE_CUBE_MAP), n.unbindTexture();
      } else if (u3) {
        for (let r3 = 0, s2 = c2.length; r3 < s2; r3++) {
          const s3 = c2[r3], a2 = i.get(s3);
          n.bindTexture(t2.TEXTURE_2D, a2.__webglTexture), I2(t2.TEXTURE_2D, s3), U2(o2.__webglFramebuffer, e2, s3, t2.COLOR_ATTACHMENT0 + r3, t2.TEXTURE_2D, 0), g(s3) && v(t2.TEXTURE_2D);
        }
        n.unbindTexture();
      } else {
        let i2 = t2.TEXTURE_2D;
        if ((e2.isWebGL3DRenderTarget || e2.isWebGLArrayRenderTarget) && (i2 = e2.isWebGL3DRenderTarget ? t2.TEXTURE_3D : t2.TEXTURE_2D_ARRAY), n.bindTexture(i2, l2.__webglTexture), I2(i2, r2), r2.mipmaps && r2.mipmaps.length > 0) for (let n2 = 0; n2 < r2.mipmaps.length; n2++) U2(o2.__webglFramebuffer[n2], e2, r2, t2.COLOR_ATTACHMENT0, i2, n2);
        else U2(o2.__webglFramebuffer, e2, r2, t2.COLOR_ATTACHMENT0, i2, 0);
        g(r2) && v(i2), n.unbindTexture();
      }
      e2.depthBuffer && N2(e2);
    }, this.updateRenderTargetMipmap = function(t3) {
      const e2 = t3.textures;
      for (let r2 = 0, s2 = e2.length; r2 < s2; r2++) {
        const s3 = e2[r2];
        if (g(s3)) {
          const e3 = _(t3), r3 = i.get(s3).__webglTexture;
          n.bindTexture(e3, r3), v(e3), n.unbindTexture();
        }
      }
    }, this.updateMultisampleRenderTarget = function(e2) {
      if (e2.samples > 0) {
        if (false === z2(e2)) {
          const r2 = e2.textures, s2 = e2.width, a2 = e2.height;
          let o2 = t2.COLOR_BUFFER_BIT;
          const c2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT, h2 = i.get(e2), u3 = r2.length > 1;
          if (u3) for (let e3 = 0; e3 < r2.length; e3++) n.bindFramebuffer(t2.FRAMEBUFFER, h2.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.RENDERBUFFER, null), n.bindFramebuffer(t2.FRAMEBUFFER, h2.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.TEXTURE_2D, null, 0);
          n.bindFramebuffer(t2.READ_FRAMEBUFFER, h2.__webglMultisampledFramebuffer), n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, h2.__webglFramebuffer);
          for (let n2 = 0; n2 < r2.length; n2++) {
            if (e2.resolveDepthBuffer && (e2.depthBuffer && (o2 |= t2.DEPTH_BUFFER_BIT), e2.stencilBuffer && e2.resolveStencilBuffer && (o2 |= t2.STENCIL_BUFFER_BIT)), u3) {
              t2.framebufferRenderbuffer(t2.READ_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.RENDERBUFFER, h2.__webglColorRenderbuffer[n2]);
              const e3 = i.get(r2[n2]).__webglTexture;
              t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0, t2.TEXTURE_2D, e3, 0);
            }
            t2.blitFramebuffer(0, 0, s2, a2, 0, 0, s2, a2, o2, t2.NEAREST), true === l && (O2.length = 0, F2.length = 0, O2.push(t2.COLOR_ATTACHMENT0 + n2), e2.depthBuffer && false === e2.resolveDepthBuffer && (O2.push(c2), F2.push(c2), t2.invalidateFramebuffer(t2.DRAW_FRAMEBUFFER, F2)), t2.invalidateFramebuffer(t2.READ_FRAMEBUFFER, O2));
          }
          if (n.bindFramebuffer(t2.READ_FRAMEBUFFER, null), n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, null), u3) for (let e3 = 0; e3 < r2.length; e3++) {
            n.bindFramebuffer(t2.FRAMEBUFFER, h2.__webglMultisampledFramebuffer), t2.framebufferRenderbuffer(t2.FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.RENDERBUFFER, h2.__webglColorRenderbuffer[e3]);
            const s3 = i.get(r2[e3]).__webglTexture;
            n.bindFramebuffer(t2.FRAMEBUFFER, h2.__webglFramebuffer), t2.framebufferTexture2D(t2.DRAW_FRAMEBUFFER, t2.COLOR_ATTACHMENT0 + e3, t2.TEXTURE_2D, s3, 0);
          }
          n.bindFramebuffer(t2.DRAW_FRAMEBUFFER, h2.__webglMultisampledFramebuffer);
        } else if (e2.depthBuffer && false === e2.resolveDepthBuffer && l) {
          const n2 = e2.stencilBuffer ? t2.DEPTH_STENCIL_ATTACHMENT : t2.DEPTH_ATTACHMENT;
          t2.invalidateFramebuffer(t2.DRAW_FRAMEBUFFER, [n2]);
        }
      }
    }, this.setupDepthRenderbuffer = N2, this.setupFrameBufferTexture = U2, this.useMultisampledRTT = z2;
  }
  function Wl(t2, e) {
    return { convert: function(n, i = "") {
      let r;
      const s = ai.getTransfer(i);
      if (n === Et) return t2.UNSIGNED_BYTE;
      if (n === Dt) return t2.UNSIGNED_SHORT_4_4_4_4;
      if (n === Nt) return t2.UNSIGNED_SHORT_5_5_5_1;
      if (n === Ft) return t2.UNSIGNED_INT_5_9_9_9_REV;
      if (n === At) return t2.BYTE;
      if (n === Rt) return t2.SHORT;
      if (n === Ct) return t2.UNSIGNED_SHORT;
      if (n === It) return t2.INT;
      if (n === Pt) return t2.UNSIGNED_INT;
      if (n === Lt) return t2.FLOAT;
      if (n === Ut) return t2.HALF_FLOAT;
      if (n === Bt) return t2.ALPHA;
      if (n === zt) return t2.RGB;
      if (n === kt) return t2.RGBA;
      if (n === Vt) return t2.LUMINANCE;
      if (n === Ht) return t2.LUMINANCE_ALPHA;
      if (n === Gt) return t2.DEPTH_COMPONENT;
      if (n === Wt) return t2.DEPTH_STENCIL;
      if (n === Xt) return t2.RED;
      if (n === jt) return t2.RED_INTEGER;
      if (n === qt) return t2.RG;
      if (n === Yt) return t2.RG_INTEGER;
      if (n === Jt) return t2.RGBA_INTEGER;
      if (n === Kt || n === $t || n === Qt || n === te) if (s === Qe) {
        if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), null === r) return null;
        if (n === Kt) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
        if (n === $t) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
        if (n === Qt) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
        if (n === te) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
      } else {
        if (r = e.get("WEBGL_compressed_texture_s3tc"), null === r) return null;
        if (n === Kt) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === $t) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Qt) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === te) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      }
      if (n === ee || n === ne || n === ie || n === re) {
        if (r = e.get("WEBGL_compressed_texture_pvrtc"), null === r) return null;
        if (n === ee) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === ne) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === ie) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === re) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      }
      if (n === se || n === ae || n === oe) {
        if (r = e.get("WEBGL_compressed_texture_etc"), null === r) return null;
        if (n === se || n === ae) return s === Qe ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === oe) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
      }
      if (n === le || n === ce || n === he || n === ue || n === de || n === pe || n === me || n === fe || n === ge || n === ve || n === _e || n === xe || n === ye || n === Me) {
        if (r = e.get("WEBGL_compressed_texture_astc"), null === r) return null;
        if (n === le) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === ce) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === he) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === ue) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === de) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === pe) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === me) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === fe) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === ge) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === ve) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === _e) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === xe) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === ye) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === Me) return s === Qe ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      }
      if (n === Se || n === be || n === Te) {
        if (r = e.get("EXT_texture_compression_bptc"), null === r) return null;
        if (n === Se) return s === Qe ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === be) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Te) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      }
      if (n === we || n === Ee || n === Ae || n === Re) {
        if (r = e.get("EXT_texture_compression_rgtc"), null === r) return null;
        if (n === Se) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === Ee) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Ae) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Re) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      }
      return n === Ot ? t2.UNSIGNED_INT_24_8 : void 0 !== t2[n] ? t2[n] : null;
    } };
  }
  var Xl = class extends Js {
    constructor(t2 = []) {
      super(), this.isArrayCamera = true, this.cameras = t2;
    }
  };
  var jl = class extends Lr {
    constructor() {
      super(), this.isGroup = true, this.type = "Group";
    }
  };
  var ql = { type: "move" };
  var Yl = class {
    constructor() {
      this._targetRay = null, this._grip = null, this._hand = null;
    }
    getHandSpace() {
      return null === this._hand && (this._hand = new jl(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
    }
    getTargetRaySpace() {
      return null === this._targetRay && (this._targetRay = new jl(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new Ci(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new Ci()), this._targetRay;
    }
    getGripSpace() {
      return null === this._grip && (this._grip = new jl(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new Ci(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new Ci()), this._grip;
    }
    dispatchEvent(t2) {
      return null !== this._targetRay && this._targetRay.dispatchEvent(t2), null !== this._grip && this._grip.dispatchEvent(t2), null !== this._hand && this._hand.dispatchEvent(t2), this;
    }
    connect(t2) {
      if (t2 && t2.hand) {
        const e = this._hand;
        if (e) for (const n of t2.hand.values()) this._getHandJoint(e, n);
      }
      return this.dispatchEvent({ type: "connected", data: t2 }), this;
    }
    disconnect(t2) {
      return this.dispatchEvent({ type: "disconnected", data: t2 }), null !== this._targetRay && (this._targetRay.visible = false), null !== this._grip && (this._grip.visible = false), null !== this._hand && (this._hand.visible = false), this;
    }
    update(t2, e, n) {
      let i = null, r = null, s = null;
      const a = this._targetRay, o = this._grip, l = this._hand;
      if (t2 && "visible-blurred" !== e.session.visibilityState) {
        if (l && t2.hand) {
          s = true;
          for (const i3 of t2.hand.values()) {
            const t3 = e.getJointPose(i3, n), r3 = this._getHandJoint(l, i3);
            null !== t3 && (r3.matrix.fromArray(t3.transform.matrix), r3.matrix.decompose(r3.position, r3.rotation, r3.scale), r3.matrixWorldNeedsUpdate = true, r3.jointRadius = t3.radius), r3.visible = null !== t3;
          }
          const i2 = l.joints["index-finger-tip"], r2 = l.joints["thumb-tip"], a2 = i2.position.distanceTo(r2.position), o2 = 0.02, c = 5e-3;
          l.inputState.pinching && a2 > o2 + c ? (l.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: t2.handedness, target: this })) : !l.inputState.pinching && a2 <= o2 - c && (l.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: t2.handedness, target: this }));
        } else null !== o && t2.gripSpace && (r = e.getPose(t2.gripSpace, n), null !== r && (o.matrix.fromArray(r.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, r.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(r.linearVelocity)) : o.hasLinearVelocity = false, r.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(r.angularVelocity)) : o.hasAngularVelocity = false));
        null !== a && (i = e.getPose(t2.targetRaySpace, n), null === i && null !== r && (i = r), null !== i && (a.matrix.fromArray(i.transform.matrix), a.matrix.decompose(a.position, a.rotation, a.scale), a.matrixWorldNeedsUpdate = true, i.linearVelocity ? (a.hasLinearVelocity = true, a.linearVelocity.copy(i.linearVelocity)) : a.hasLinearVelocity = false, i.angularVelocity ? (a.hasAngularVelocity = true, a.angularVelocity.copy(i.angularVelocity)) : a.hasAngularVelocity = false, this.dispatchEvent(ql)));
      }
      return null !== a && (a.visible = null !== i), null !== o && (o.visible = null !== r), null !== l && (l.visible = null !== s), this;
    }
    _getHandJoint(t2, e) {
      if (void 0 === t2.joints[e.jointName]) {
        const n = new jl();
        n.matrixAutoUpdate = false, n.visible = false, t2.joints[e.jointName] = n, t2.add(n);
      }
      return t2.joints[e.jointName];
    }
  };
  var Zl = class {
    constructor() {
      this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
    }
    init(t2, e, n) {
      if (null === this.texture) {
        const i = new yi();
        t2.properties.get(i).__webglTexture = e.texture, e.depthNear == n.depthNear && e.depthFar == n.depthFar || (this.depthNear = e.depthNear, this.depthFar = e.depthFar), this.texture = i;
      }
    }
    getMesh(t2) {
      if (null !== this.texture && null === this.mesh) {
        const e = t2.cameras[0].viewport, n = new Xs({ vertexShader: "\nvoid main() {\n\n	gl_Position = vec4( position, 1.0 );\n\n}", fragmentShader: "\nuniform sampler2DArray depthColor;\nuniform float depthWidth;\nuniform float depthHeight;\n\nvoid main() {\n\n	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );\n\n	if ( coord.x >= 1.0 ) {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;\n\n	} else {\n\n		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;\n\n	}\n\n}", uniforms: { depthColor: { value: this.texture }, depthWidth: { value: e.z }, depthHeight: { value: e.w } } });
        this.mesh = new Bs(new ha(20, 20), n);
      }
      return this.mesh;
    }
    reset() {
      this.texture = null, this.mesh = null;
    }
    getDepthTexture() {
      return this.texture;
    }
  };
  var Jl = class extends Bn {
    constructor(t2, e) {
      super();
      const n = this;
      let i = null, r = 1, s = null, a = "local-floor", o = 1, l = null, c = null, h = null, u2 = null, d2 = null, p2 = null;
      const m = new Zl(), f = e.getContextAttributes();
      let g = null, v = null;
      const _ = [], x = [], y2 = new Jn();
      let M2 = null;
      const S2 = new Js();
      S2.viewport = new Mi();
      const b = new Js();
      b.viewport = new Mi();
      const T = [S2, b], w2 = new Xl();
      let E2 = null, A2 = null;
      function R2(t3) {
        const e2 = x.indexOf(t3.inputSource);
        if (-1 === e2) return;
        const n2 = _[e2];
        void 0 !== n2 && (n2.update(t3.inputSource, t3.frame, l || s), n2.dispatchEvent({ type: t3.type, data: t3.inputSource }));
      }
      function C2() {
        i.removeEventListener("select", R2), i.removeEventListener("selectstart", R2), i.removeEventListener("selectend", R2), i.removeEventListener("squeeze", R2), i.removeEventListener("squeezestart", R2), i.removeEventListener("squeezeend", R2), i.removeEventListener("end", C2), i.removeEventListener("inputsourceschange", I2);
        for (let t3 = 0; t3 < _.length; t3++) {
          const e2 = x[t3];
          null !== e2 && (x[t3] = null, _[t3].disconnect(e2));
        }
        E2 = null, A2 = null, m.reset(), t2.setRenderTarget(g), d2 = null, u2 = null, h = null, i = null, v = null, N2.stop(), n.isPresenting = false, t2.setPixelRatio(M2), t2.setSize(y2.width, y2.height, false), n.dispatchEvent({ type: "sessionend" });
      }
      function I2(t3) {
        for (let e2 = 0; e2 < t3.removed.length; e2++) {
          const n2 = t3.removed[e2], i2 = x.indexOf(n2);
          i2 >= 0 && (x[i2] = null, _[i2].disconnect(n2));
        }
        for (let e2 = 0; e2 < t3.added.length; e2++) {
          const n2 = t3.added[e2];
          let i2 = x.indexOf(n2);
          if (-1 === i2) {
            for (let t4 = 0; t4 < _.length; t4++) {
              if (t4 >= x.length) {
                x.push(n2), i2 = t4;
                break;
              }
              if (null === x[t4]) {
                x[t4] = n2, i2 = t4;
                break;
              }
            }
            if (-1 === i2) break;
          }
          const r2 = _[i2];
          r2 && r2.connect(n2);
        }
      }
      this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(t3) {
        let e2 = _[t3];
        return void 0 === e2 && (e2 = new Yl(), _[t3] = e2), e2.getTargetRaySpace();
      }, this.getControllerGrip = function(t3) {
        let e2 = _[t3];
        return void 0 === e2 && (e2 = new Yl(), _[t3] = e2), e2.getGripSpace();
      }, this.getHand = function(t3) {
        let e2 = _[t3];
        return void 0 === e2 && (e2 = new Yl(), _[t3] = e2), e2.getHandSpace();
      }, this.setFramebufferScaleFactor = function(t3) {
        r = t3, true === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
      }, this.setReferenceSpaceType = function(t3) {
        a = t3, true === n.isPresenting && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
      }, this.getReferenceSpace = function() {
        return l || s;
      }, this.setReferenceSpace = function(t3) {
        l = t3;
      }, this.getBaseLayer = function() {
        return null !== u2 ? u2 : d2;
      }, this.getBinding = function() {
        return h;
      }, this.getFrame = function() {
        return p2;
      }, this.getSession = function() {
        return i;
      }, this.setSession = async function(c2) {
        if (i = c2, null !== i) {
          if (g = t2.getRenderTarget(), i.addEventListener("select", R2), i.addEventListener("selectstart", R2), i.addEventListener("selectend", R2), i.addEventListener("squeeze", R2), i.addEventListener("squeezestart", R2), i.addEventListener("squeezeend", R2), i.addEventListener("end", C2), i.addEventListener("inputsourceschange", I2), true !== f.xrCompatible && await e.makeXRCompatible(), M2 = t2.getPixelRatio(), t2.getSize(y2), void 0 === i.renderState.layers) {
            const n2 = { antialias: f.antialias, alpha: true, depth: f.depth, stencil: f.stencil, framebufferScaleFactor: r };
            d2 = new XRWebGLLayer(i, e, n2), i.updateRenderState({ baseLayer: d2 }), t2.setPixelRatio(1), t2.setSize(d2.framebufferWidth, d2.framebufferHeight, false), v = new bi(d2.framebufferWidth, d2.framebufferHeight, { format: kt, type: Et, colorSpace: t2.outputColorSpace, stencilBuffer: f.stencil });
          } else {
            let n2 = null, s2 = null, a2 = null;
            f.depth && (a2 = f.stencil ? e.DEPTH24_STENCIL8 : e.DEPTH_COMPONENT24, n2 = f.stencil ? Wt : Gt, s2 = f.stencil ? Ot : Pt);
            const o2 = { colorFormat: e.RGBA8, depthFormat: a2, scaleFactor: r };
            h = new XRWebGLBinding(i, e), u2 = h.createProjectionLayer(o2), i.updateRenderState({ layers: [u2] }), t2.setPixelRatio(1), t2.setSize(u2.textureWidth, u2.textureHeight, false), v = new bi(u2.textureWidth, u2.textureHeight, { format: kt, type: Et, depthTexture: new Ya(u2.textureWidth, u2.textureHeight, s2, void 0, void 0, void 0, void 0, void 0, void 0, n2), stencilBuffer: f.stencil, colorSpace: t2.outputColorSpace, samples: f.antialias ? 4 : 0, resolveDepthBuffer: false === u2.ignoreDepthValues });
          }
          v.isXRRenderTarget = true, this.setFoveation(o), l = null, s = await i.requestReferenceSpace(a), N2.setContext(i), N2.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
        }
      }, this.getEnvironmentBlendMode = function() {
        if (null !== i) return i.environmentBlendMode;
      }, this.getDepthTexture = function() {
        return m.getDepthTexture();
      };
      const P2 = new Ci(), L2 = new Ci();
      function U2(t3, e2) {
        null === e2 ? t3.matrixWorld.copy(t3.matrix) : t3.matrixWorld.multiplyMatrices(e2.matrixWorld, t3.matrix), t3.matrixWorldInverse.copy(t3.matrixWorld).invert();
      }
      this.updateCamera = function(t3) {
        if (null === i) return;
        let e2 = t3.near, n2 = t3.far;
        null !== m.texture && (m.depthNear > 0 && (e2 = m.depthNear), m.depthFar > 0 && (n2 = m.depthFar)), w2.near = b.near = S2.near = e2, w2.far = b.far = S2.far = n2, E2 === w2.near && A2 === w2.far || (i.updateRenderState({ depthNear: w2.near, depthFar: w2.far }), E2 = w2.near, A2 = w2.far), S2.layers.mask = 2 | t3.layers.mask, b.layers.mask = 4 | t3.layers.mask, w2.layers.mask = S2.layers.mask | b.layers.mask;
        const r2 = t3.parent, s2 = w2.cameras;
        U2(w2, r2);
        for (let t4 = 0; t4 < s2.length; t4++) U2(s2[t4], r2);
        2 === s2.length ? (function(t4, e3, n3) {
          P2.setFromMatrixPosition(e3.matrixWorld), L2.setFromMatrixPosition(n3.matrixWorld);
          const i2 = P2.distanceTo(L2), r3 = e3.projectionMatrix.elements, s3 = n3.projectionMatrix.elements, a2 = r3[14] / (r3[10] - 1), o2 = r3[14] / (r3[10] + 1), l2 = (r3[9] + 1) / r3[5], c2 = (r3[9] - 1) / r3[5], h2 = (r3[8] - 1) / r3[0], u3 = (s3[8] + 1) / s3[0], d3 = a2 * h2, p3 = a2 * u3, m2 = i2 / (-h2 + u3), f2 = m2 * -h2;
          if (e3.matrixWorld.decompose(t4.position, t4.quaternion, t4.scale), t4.translateX(f2), t4.translateZ(m2), t4.matrixWorld.compose(t4.position, t4.quaternion, t4.scale), t4.matrixWorldInverse.copy(t4.matrixWorld).invert(), -1 === r3[10]) t4.projectionMatrix.copy(e3.projectionMatrix), t4.projectionMatrixInverse.copy(e3.projectionMatrixInverse);
          else {
            const e4 = a2 + m2, n4 = o2 + m2, r4 = d3 - f2, s4 = p3 + (i2 - f2), h3 = l2 * o2 / n4 * e4, u4 = c2 * o2 / n4 * e4;
            t4.projectionMatrix.makePerspective(r4, s4, h3, u4, e4, n4), t4.projectionMatrixInverse.copy(t4.projectionMatrix).invert();
          }
        })(w2, S2, b) : w2.projectionMatrix.copy(S2.projectionMatrix), (function(t4, e3, n3) {
          null === n3 ? t4.matrix.copy(e3.matrixWorld) : (t4.matrix.copy(n3.matrixWorld), t4.matrix.invert(), t4.matrix.multiply(e3.matrixWorld));
          t4.matrix.decompose(t4.position, t4.quaternion, t4.scale), t4.updateMatrixWorld(true), t4.projectionMatrix.copy(e3.projectionMatrix), t4.projectionMatrixInverse.copy(e3.projectionMatrixInverse), t4.isPerspectiveCamera && (t4.fov = 2 * Hn * Math.atan(1 / t4.projectionMatrix.elements[5]), t4.zoom = 1);
        })(t3, w2, r2);
      }, this.getCamera = function() {
        return w2;
      }, this.getFoveation = function() {
        if (null !== u2 || null !== d2) return o;
      }, this.setFoveation = function(t3) {
        o = t3, null !== u2 && (u2.fixedFoveation = t3), null !== d2 && void 0 !== d2.fixedFoveation && (d2.fixedFoveation = t3);
      }, this.hasDepthSensing = function() {
        return null !== m.texture;
      }, this.getDepthSensingMesh = function() {
        return m.getMesh(w2);
      };
      let D2 = null;
      const N2 = new la();
      N2.setAnimationLoop((function(e2, r2) {
        if (c = r2.getViewerPose(l || s), p2 = r2, null !== c) {
          const e3 = c.views;
          null !== d2 && (t2.setRenderTargetFramebuffer(v, d2.framebuffer), t2.setRenderTarget(v));
          let n2 = false;
          e3.length !== w2.cameras.length && (w2.cameras.length = 0, n2 = true);
          for (let i2 = 0; i2 < e3.length; i2++) {
            const r4 = e3[i2];
            let s2 = null;
            if (null !== d2) s2 = d2.getViewport(r4);
            else {
              const e4 = h.getViewSubImage(u2, r4);
              s2 = e4.viewport, 0 === i2 && (t2.setRenderTargetTextures(v, e4.colorTexture, u2.ignoreDepthValues ? void 0 : e4.depthStencilTexture), t2.setRenderTarget(v));
            }
            let a2 = T[i2];
            void 0 === a2 && (a2 = new Js(), a2.layers.enable(i2), a2.viewport = new Mi(), T[i2] = a2), a2.matrix.fromArray(r4.transform.matrix), a2.matrix.decompose(a2.position, a2.quaternion, a2.scale), a2.projectionMatrix.fromArray(r4.projectionMatrix), a2.projectionMatrixInverse.copy(a2.projectionMatrix).invert(), a2.viewport.set(s2.x, s2.y, s2.width, s2.height), 0 === i2 && (w2.matrix.copy(a2.matrix), w2.matrix.decompose(w2.position, w2.quaternion, w2.scale)), true === n2 && w2.cameras.push(a2);
          }
          const r3 = i.enabledFeatures;
          if (r3 && r3.includes("depth-sensing")) {
            const n3 = h.getDepthInformation(e3[0]);
            n3 && n3.isValid && n3.texture && m.init(t2, n3, i.renderState);
          }
        }
        for (let t3 = 0; t3 < _.length; t3++) {
          const e3 = x[t3], n2 = _[t3];
          null !== e3 && void 0 !== n2 && n2.update(e3, r2, l || s);
        }
        D2 && D2(e2, r2), r2.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: r2 }), p2 = null;
      })), this.setAnimationLoop = function(t3) {
        D2 = t3;
      }, this.dispose = function() {
      };
    }
  };
  var Kl = new fr();
  var $l = new sr();
  function Ql(t2, e) {
    function n(t3, e2) {
      true === t3.matrixAutoUpdate && t3.updateMatrix(), e2.value.copy(t3.matrix);
    }
    function i(t3, i2) {
      t3.opacity.value = i2.opacity, i2.color && t3.diffuse.value.copy(i2.color), i2.emissive && t3.emissive.value.copy(i2.emissive).multiplyScalar(i2.emissiveIntensity), i2.map && (t3.map.value = i2.map, n(i2.map, t3.mapTransform)), i2.alphaMap && (t3.alphaMap.value = i2.alphaMap, n(i2.alphaMap, t3.alphaMapTransform)), i2.bumpMap && (t3.bumpMap.value = i2.bumpMap, n(i2.bumpMap, t3.bumpMapTransform), t3.bumpScale.value = i2.bumpScale, 1 === i2.side && (t3.bumpScale.value *= -1)), i2.normalMap && (t3.normalMap.value = i2.normalMap, n(i2.normalMap, t3.normalMapTransform), t3.normalScale.value.copy(i2.normalScale), 1 === i2.side && t3.normalScale.value.negate()), i2.displacementMap && (t3.displacementMap.value = i2.displacementMap, n(i2.displacementMap, t3.displacementMapTransform), t3.displacementScale.value = i2.displacementScale, t3.displacementBias.value = i2.displacementBias), i2.emissiveMap && (t3.emissiveMap.value = i2.emissiveMap, n(i2.emissiveMap, t3.emissiveMapTransform)), i2.specularMap && (t3.specularMap.value = i2.specularMap, n(i2.specularMap, t3.specularMapTransform)), i2.alphaTest > 0 && (t3.alphaTest.value = i2.alphaTest);
      const r = e.get(i2), s = r.envMap, a = r.envMapRotation;
      s && (t3.envMap.value = s, Kl.copy(a), Kl.x *= -1, Kl.y *= -1, Kl.z *= -1, s.isCubeTexture && false === s.isRenderTargetTexture && (Kl.y *= -1, Kl.z *= -1), t3.envMapRotation.value.setFromMatrix4($l.makeRotationFromEuler(Kl)), t3.flipEnvMap.value = s.isCubeTexture && false === s.isRenderTargetTexture ? -1 : 1, t3.reflectivity.value = i2.reflectivity, t3.ior.value = i2.ior, t3.refractionRatio.value = i2.refractionRatio), i2.lightMap && (t3.lightMap.value = i2.lightMap, t3.lightMapIntensity.value = i2.lightMapIntensity, n(i2.lightMap, t3.lightMapTransform)), i2.aoMap && (t3.aoMap.value = i2.aoMap, t3.aoMapIntensity.value = i2.aoMapIntensity, n(i2.aoMap, t3.aoMapTransform));
    }
    return { refreshFogUniforms: function(e2, n2) {
      n2.color.getRGB(e2.fogColor.value, Gs(t2)), n2.isFog ? (e2.fogNear.value = n2.near, e2.fogFar.value = n2.far) : n2.isFogExp2 && (e2.fogDensity.value = n2.density);
    }, refreshMaterialUniforms: function(t3, r, s, a, o) {
      r.isMeshBasicMaterial || r.isMeshLambertMaterial ? i(t3, r) : r.isMeshToonMaterial ? (i(t3, r), (function(t4, e2) {
        e2.gradientMap && (t4.gradientMap.value = e2.gradientMap);
      })(t3, r)) : r.isMeshPhongMaterial ? (i(t3, r), (function(t4, e2) {
        t4.specular.value.copy(e2.specular), t4.shininess.value = Math.max(e2.shininess, 1e-4);
      })(t3, r)) : r.isMeshStandardMaterial ? (i(t3, r), (function(t4, e2) {
        t4.metalness.value = e2.metalness, e2.metalnessMap && (t4.metalnessMap.value = e2.metalnessMap, n(e2.metalnessMap, t4.metalnessMapTransform));
        t4.roughness.value = e2.roughness, e2.roughnessMap && (t4.roughnessMap.value = e2.roughnessMap, n(e2.roughnessMap, t4.roughnessMapTransform));
        e2.envMap && (t4.envMapIntensity.value = e2.envMapIntensity);
      })(t3, r), r.isMeshPhysicalMaterial && (function(t4, e2, i2) {
        t4.ior.value = e2.ior, e2.sheen > 0 && (t4.sheenColor.value.copy(e2.sheenColor).multiplyScalar(e2.sheen), t4.sheenRoughness.value = e2.sheenRoughness, e2.sheenColorMap && (t4.sheenColorMap.value = e2.sheenColorMap, n(e2.sheenColorMap, t4.sheenColorMapTransform)), e2.sheenRoughnessMap && (t4.sheenRoughnessMap.value = e2.sheenRoughnessMap, n(e2.sheenRoughnessMap, t4.sheenRoughnessMapTransform)));
        e2.clearcoat > 0 && (t4.clearcoat.value = e2.clearcoat, t4.clearcoatRoughness.value = e2.clearcoatRoughness, e2.clearcoatMap && (t4.clearcoatMap.value = e2.clearcoatMap, n(e2.clearcoatMap, t4.clearcoatMapTransform)), e2.clearcoatRoughnessMap && (t4.clearcoatRoughnessMap.value = e2.clearcoatRoughnessMap, n(e2.clearcoatRoughnessMap, t4.clearcoatRoughnessMapTransform)), e2.clearcoatNormalMap && (t4.clearcoatNormalMap.value = e2.clearcoatNormalMap, n(e2.clearcoatNormalMap, t4.clearcoatNormalMapTransform), t4.clearcoatNormalScale.value.copy(e2.clearcoatNormalScale), 1 === e2.side && t4.clearcoatNormalScale.value.negate()));
        e2.dispersion > 0 && (t4.dispersion.value = e2.dispersion);
        e2.iridescence > 0 && (t4.iridescence.value = e2.iridescence, t4.iridescenceIOR.value = e2.iridescenceIOR, t4.iridescenceThicknessMinimum.value = e2.iridescenceThicknessRange[0], t4.iridescenceThicknessMaximum.value = e2.iridescenceThicknessRange[1], e2.iridescenceMap && (t4.iridescenceMap.value = e2.iridescenceMap, n(e2.iridescenceMap, t4.iridescenceMapTransform)), e2.iridescenceThicknessMap && (t4.iridescenceThicknessMap.value = e2.iridescenceThicknessMap, n(e2.iridescenceThicknessMap, t4.iridescenceThicknessMapTransform)));
        e2.transmission > 0 && (t4.transmission.value = e2.transmission, t4.transmissionSamplerMap.value = i2.texture, t4.transmissionSamplerSize.value.set(i2.width, i2.height), e2.transmissionMap && (t4.transmissionMap.value = e2.transmissionMap, n(e2.transmissionMap, t4.transmissionMapTransform)), t4.thickness.value = e2.thickness, e2.thicknessMap && (t4.thicknessMap.value = e2.thicknessMap, n(e2.thicknessMap, t4.thicknessMapTransform)), t4.attenuationDistance.value = e2.attenuationDistance, t4.attenuationColor.value.copy(e2.attenuationColor));
        e2.anisotropy > 0 && (t4.anisotropyVector.value.set(e2.anisotropy * Math.cos(e2.anisotropyRotation), e2.anisotropy * Math.sin(e2.anisotropyRotation)), e2.anisotropyMap && (t4.anisotropyMap.value = e2.anisotropyMap, n(e2.anisotropyMap, t4.anisotropyMapTransform)));
        t4.specularIntensity.value = e2.specularIntensity, t4.specularColor.value.copy(e2.specularColor), e2.specularColorMap && (t4.specularColorMap.value = e2.specularColorMap, n(e2.specularColorMap, t4.specularColorMapTransform));
        e2.specularIntensityMap && (t4.specularIntensityMap.value = e2.specularIntensityMap, n(e2.specularIntensityMap, t4.specularIntensityMapTransform));
      })(t3, r, o)) : r.isMeshMatcapMaterial ? (i(t3, r), (function(t4, e2) {
        e2.matcap && (t4.matcap.value = e2.matcap);
      })(t3, r)) : r.isMeshDepthMaterial ? i(t3, r) : r.isMeshDistanceMaterial ? (i(t3, r), (function(t4, n2) {
        const i2 = e.get(n2).light;
        t4.referencePosition.value.setFromMatrixPosition(i2.matrixWorld), t4.nearDistance.value = i2.shadow.camera.near, t4.farDistance.value = i2.shadow.camera.far;
      })(t3, r)) : r.isMeshNormalMaterial ? i(t3, r) : r.isLineBasicMaterial ? ((function(t4, e2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, e2.map && (t4.map.value = e2.map, n(e2.map, t4.mapTransform));
      })(t3, r), r.isLineDashedMaterial && (function(t4, e2) {
        t4.dashSize.value = e2.dashSize, t4.totalSize.value = e2.dashSize + e2.gapSize, t4.scale.value = e2.scale;
      })(t3, r)) : r.isPointsMaterial ? (function(t4, e2, i2, r2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, t4.size.value = e2.size * i2, t4.scale.value = 0.5 * r2, e2.map && (t4.map.value = e2.map, n(e2.map, t4.uvTransform));
        e2.alphaMap && (t4.alphaMap.value = e2.alphaMap, n(e2.alphaMap, t4.alphaMapTransform));
        e2.alphaTest > 0 && (t4.alphaTest.value = e2.alphaTest);
      })(t3, r, s, a) : r.isSpriteMaterial ? (function(t4, e2) {
        t4.diffuse.value.copy(e2.color), t4.opacity.value = e2.opacity, t4.rotation.value = e2.rotation, e2.map && (t4.map.value = e2.map, n(e2.map, t4.mapTransform));
        e2.alphaMap && (t4.alphaMap.value = e2.alphaMap, n(e2.alphaMap, t4.alphaMapTransform));
        e2.alphaTest > 0 && (t4.alphaTest.value = e2.alphaTest);
      })(t3, r) : r.isShadowMaterial ? (t3.color.value.copy(r.color), t3.opacity.value = r.opacity) : r.isShaderMaterial && (r.uniformsNeedUpdate = false);
    } };
  }
  function tc(t2, e, n, i) {
    let r = {}, s = {}, a = [];
    const o = t2.getParameter(t2.MAX_UNIFORM_BUFFER_BINDINGS);
    function l(t3, e2, n2, i2) {
      const r2 = t3.value, s2 = e2 + "_" + n2;
      if (void 0 === i2[s2]) return i2[s2] = "number" == typeof r2 || "boolean" == typeof r2 ? r2 : r2.clone(), true;
      {
        const t4 = i2[s2];
        if ("number" == typeof r2 || "boolean" == typeof r2) {
          if (t4 !== r2) return i2[s2] = r2, true;
        } else if (false === t4.equals(r2)) return t4.copy(r2), true;
      }
      return false;
    }
    function c(t3) {
      const e2 = { boundary: 0, storage: 0 };
      return "number" == typeof t3 || "boolean" == typeof t3 ? (e2.boundary = 4, e2.storage = 4) : t3.isVector2 ? (e2.boundary = 8, e2.storage = 8) : t3.isVector3 || t3.isColor ? (e2.boundary = 16, e2.storage = 12) : t3.isVector4 ? (e2.boundary = 16, e2.storage = 16) : t3.isMatrix3 ? (e2.boundary = 48, e2.storage = 48) : t3.isMatrix4 ? (e2.boundary = 64, e2.storage = 64) : t3.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", t3), e2;
    }
    function h(e2) {
      const n2 = e2.target;
      n2.removeEventListener("dispose", h);
      const i2 = a.indexOf(n2.__bindingPointIndex);
      a.splice(i2, 1), t2.deleteBuffer(r[n2.id]), delete r[n2.id], delete s[n2.id];
    }
    return { bind: function(t3, e2) {
      const n2 = e2.program;
      i.uniformBlockBinding(t3, n2);
    }, update: function(n2, u2) {
      let d2 = r[n2.id];
      void 0 === d2 && (!(function(t3) {
        const e2 = t3.uniforms;
        let n3 = 0;
        const i2 = 16;
        for (let t4 = 0, r3 = e2.length; t4 < r3; t4++) {
          const r4 = Array.isArray(e2[t4]) ? e2[t4] : [e2[t4]];
          for (let t5 = 0, e3 = r4.length; t5 < e3; t5++) {
            const e4 = r4[t5], s2 = Array.isArray(e4.value) ? e4.value : [e4.value];
            for (let t6 = 0, r5 = s2.length; t6 < r5; t6++) {
              const r6 = c(s2[t6]), a2 = n3 % i2, o2 = a2 % r6.boundary, l2 = a2 + o2;
              n3 += o2, 0 !== l2 && i2 - l2 < r6.storage && (n3 += i2 - l2), e4.__data = new Float32Array(r6.storage / Float32Array.BYTES_PER_ELEMENT), e4.__offset = n3, n3 += r6.storage;
            }
          }
        }
        const r2 = n3 % i2;
        r2 > 0 && (n3 += i2 - r2);
        t3.__size = n3, t3.__cache = {};
      })(n2), d2 = (function(e2) {
        const n3 = (function() {
          for (let t3 = 0; t3 < o; t3++) if (-1 === a.indexOf(t3)) return a.push(t3), t3;
          return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
        })();
        e2.__bindingPointIndex = n3;
        const i2 = t2.createBuffer(), r2 = e2.__size, s2 = e2.usage;
        return t2.bindBuffer(t2.UNIFORM_BUFFER, i2), t2.bufferData(t2.UNIFORM_BUFFER, r2, s2), t2.bindBuffer(t2.UNIFORM_BUFFER, null), t2.bindBufferBase(t2.UNIFORM_BUFFER, n3, i2), i2;
      })(n2), r[n2.id] = d2, n2.addEventListener("dispose", h));
      const p2 = u2.program;
      i.updateUBOMapping(n2, p2);
      const m = e.render.frame;
      s[n2.id] !== m && (!(function(e2) {
        const n3 = r[e2.id], i2 = e2.uniforms, s2 = e2.__cache;
        t2.bindBuffer(t2.UNIFORM_BUFFER, n3);
        for (let e3 = 0, n4 = i2.length; e3 < n4; e3++) {
          const n5 = Array.isArray(i2[e3]) ? i2[e3] : [i2[e3]];
          for (let i3 = 0, r2 = n5.length; i3 < r2; i3++) {
            const r3 = n5[i3];
            if (true === l(r3, e3, i3, s2)) {
              const e4 = r3.__offset, n6 = Array.isArray(r3.value) ? r3.value : [r3.value];
              let i4 = 0;
              for (let s3 = 0; s3 < n6.length; s3++) {
                const a2 = n6[s3], o2 = c(a2);
                "number" == typeof a2 || "boolean" == typeof a2 ? (r3.__data[0] = a2, t2.bufferSubData(t2.UNIFORM_BUFFER, e4 + i4, r3.__data)) : a2.isMatrix3 ? (r3.__data[0] = a2.elements[0], r3.__data[1] = a2.elements[1], r3.__data[2] = a2.elements[2], r3.__data[3] = 0, r3.__data[4] = a2.elements[3], r3.__data[5] = a2.elements[4], r3.__data[6] = a2.elements[5], r3.__data[7] = 0, r3.__data[8] = a2.elements[6], r3.__data[9] = a2.elements[7], r3.__data[10] = a2.elements[8], r3.__data[11] = 0) : (a2.toArray(r3.__data, i4), i4 += o2.storage / Float32Array.BYTES_PER_ELEMENT);
              }
              t2.bufferSubData(t2.UNIFORM_BUFFER, e4, r3.__data);
            }
          }
        }
        t2.bindBuffer(t2.UNIFORM_BUFFER, null);
      })(n2), s[n2.id] = m);
    }, dispose: function() {
      for (const e2 in r) t2.deleteBuffer(r[e2]);
      a = [], r = {}, s = {};
    } };
  }
  var ec = class {
    constructor(e = {}) {
      const { canvas: n = ii(), context: i = null, depth: r = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u2 = false, reverseDepthBuffer: d2 = false } = e;
      let p2;
      if (this.isWebGLRenderer = true, null !== i) {
        if ("undefined" != typeof WebGLRenderingContext && i instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
        p2 = i.getContextAttributes().alpha;
      } else p2 = a;
      const m = new Uint32Array(4), f = new Int32Array(4);
      let g = null, v = null;
      const _ = [], x = [];
      this.domElement = n, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = Je, this.toneMapping = 0, this.toneMappingExposure = 1;
      const y2 = this;
      let M2 = false, S2 = 0, b = 0, T = null, w2 = -1, E2 = null;
      const A2 = new Mi(), R2 = new Mi();
      let C2 = null;
      const I2 = new Kr(0);
      let P2 = 0, L2 = n.width, U2 = n.height, D2 = 1, N2 = null, O2 = null;
      const F2 = new Mi(0, 0, L2, U2), B2 = new Mi(0, 0, L2, U2);
      let z2 = false;
      const k2 = new oa();
      let V2 = false, H2 = false;
      const G2 = new sr(), W2 = new sr(), X2 = new Ci(), j2 = new Mi(), q2 = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
      let Y = false;
      function Z() {
        return null === T ? D2 : 1;
      }
      let J, K, $, Q, tt, et, nt, it, rt, st, at, ot2, lt2, ct2, ht2, ut2, dt2, pt2, mt2, ft2, gt2, vt2, _t, xt2, yt = i;
      function Mt2(t2, e2) {
        return n.getContext(t2, e2);
      }
      try {
        const e2 = { alpha: true, depth: r, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u2 };
        if ("setAttribute" in n && n.setAttribute("data-engine", `three.js r${t}`), n.addEventListener("webglcontextlost", wt, false), n.addEventListener("webglcontextrestored", At2, false), n.addEventListener("webglcontextcreationerror", Rt2, false), null === yt) {
          const t2 = "webgl2";
          if (yt = Mt2(t2, e2), null === yt) throw Mt2(t2) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
        }
      } catch (t2) {
        throw console.error("THREE.WebGLRenderer: " + t2.message), t2;
      }
      function St2() {
        J = new Ha(yt), J.init(), vt2 = new Wl(yt, J), K = new ya(yt, J, e, vt2), $ = new kl(yt, J), K.reverseDepthBuffer && d2 && $.buffers.depth.setReversed(true), Q = new Xa(yt), tt = new wl(), et = new Gl(yt, J, $, tt, K, vt2, Q), nt = new Sa(y2), it = new Va(y2), rt = new ca(yt), _t = new _a(yt, rt), st = new Ga(yt, rt, Q, _t), at = new qa(yt, st, rt, Q), mt2 = new ja(yt, K, et), ut2 = new Ma(tt), ot2 = new Tl(y2, nt, it, J, K, _t, ut2), lt2 = new Ql(y2, tt), ct2 = new Cl(), ht2 = new Nl(J), pt2 = new va(y2, nt, it, $, at, p2, l), dt2 = new Bl(y2, at, K), xt2 = new tc(yt, Q, K, $), ft2 = new xa(yt, J, Q), gt2 = new Wa(yt, J, Q), Q.programs = ot2.programs, y2.capabilities = K, y2.extensions = J, y2.properties = tt, y2.renderLists = ct2, y2.shadowMap = dt2, y2.state = $, y2.info = Q;
      }
      St2();
      const bt = new Jl(y2, yt);
      function wt(t2) {
        t2.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), M2 = true;
      }
      function At2() {
        console.log("THREE.WebGLRenderer: Context Restored."), M2 = false;
        const t2 = Q.autoReset, e2 = dt2.enabled, n2 = dt2.autoUpdate, i2 = dt2.needsUpdate, r2 = dt2.type;
        St2(), Q.autoReset = t2, dt2.enabled = e2, dt2.autoUpdate = n2, dt2.needsUpdate = i2, dt2.type = r2;
      }
      function Rt2(t2) {
        console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", t2.statusMessage);
      }
      function It2(t2) {
        const e2 = t2.target;
        e2.removeEventListener("dispose", It2), (function(t3) {
          (function(t4) {
            const e3 = tt.get(t4).programs;
            void 0 !== e3 && (e3.forEach((function(t5) {
              ot2.releaseProgram(t5);
            })), t4.isShaderMaterial && ot2.releaseShaderCache(t4));
          })(t3), tt.remove(t3);
        })(e2);
      }
      function Lt2(t2, e2, n2) {
        true === t2.transparent && 2 === t2.side && false === t2.forceSinglePass ? (t2.side = 1, t2.needsUpdate = true, qt2(t2, e2, n2), t2.side = 0, t2.needsUpdate = true, qt2(t2, e2, n2), t2.side = 2) : qt2(t2, e2, n2);
      }
      this.xr = bt, this.getContext = function() {
        return yt;
      }, this.getContextAttributes = function() {
        return yt.getContextAttributes();
      }, this.forceContextLoss = function() {
        const t2 = J.get("WEBGL_lose_context");
        t2 && t2.loseContext();
      }, this.forceContextRestore = function() {
        const t2 = J.get("WEBGL_lose_context");
        t2 && t2.restoreContext();
      }, this.getPixelRatio = function() {
        return D2;
      }, this.setPixelRatio = function(t2) {
        void 0 !== t2 && (D2 = t2, this.setSize(L2, U2, false));
      }, this.getSize = function(t2) {
        return t2.set(L2, U2);
      }, this.setSize = function(t2, e2, i2 = true) {
        bt.isPresenting ? console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.") : (L2 = t2, U2 = e2, n.width = Math.floor(t2 * D2), n.height = Math.floor(e2 * D2), true === i2 && (n.style.width = t2 + "px", n.style.height = e2 + "px"), this.setViewport(0, 0, t2, e2));
      }, this.getDrawingBufferSize = function(t2) {
        return t2.set(L2 * D2, U2 * D2).floor();
      }, this.setDrawingBufferSize = function(t2, e2, i2) {
        L2 = t2, U2 = e2, D2 = i2, n.width = Math.floor(t2 * i2), n.height = Math.floor(e2 * i2), this.setViewport(0, 0, t2, e2);
      }, this.getCurrentViewport = function(t2) {
        return t2.copy(A2);
      }, this.getViewport = function(t2) {
        return t2.copy(F2);
      }, this.setViewport = function(t2, e2, n2, i2) {
        t2.isVector4 ? F2.set(t2.x, t2.y, t2.z, t2.w) : F2.set(t2, e2, n2, i2), $.viewport(A2.copy(F2).multiplyScalar(D2).round());
      }, this.getScissor = function(t2) {
        return t2.copy(B2);
      }, this.setScissor = function(t2, e2, n2, i2) {
        t2.isVector4 ? B2.set(t2.x, t2.y, t2.z, t2.w) : B2.set(t2, e2, n2, i2), $.scissor(R2.copy(B2).multiplyScalar(D2).round());
      }, this.getScissorTest = function() {
        return z2;
      }, this.setScissorTest = function(t2) {
        $.setScissorTest(z2 = t2);
      }, this.setOpaqueSort = function(t2) {
        N2 = t2;
      }, this.setTransparentSort = function(t2) {
        O2 = t2;
      }, this.getClearColor = function(t2) {
        return t2.copy(pt2.getClearColor());
      }, this.setClearColor = function() {
        pt2.setClearColor.apply(pt2, arguments);
      }, this.getClearAlpha = function() {
        return pt2.getClearAlpha();
      }, this.setClearAlpha = function() {
        pt2.setClearAlpha.apply(pt2, arguments);
      }, this.clear = function(t2 = true, e2 = true, n2 = true) {
        let i2 = 0;
        if (t2) {
          let t3 = false;
          if (null !== T) {
            const e3 = T.texture.format;
            t3 = e3 === Jt || e3 === Yt || e3 === jt;
          }
          if (t3) {
            const t4 = T.texture.type, e3 = t4 === Et || t4 === Pt || t4 === Ct || t4 === Ot || t4 === Dt || t4 === Nt, n3 = pt2.getClearColor(), i3 = pt2.getClearAlpha(), r2 = n3.r, s2 = n3.g, a2 = n3.b;
            e3 ? (m[0] = r2, m[1] = s2, m[2] = a2, m[3] = i3, yt.clearBufferuiv(yt.COLOR, 0, m)) : (f[0] = r2, f[1] = s2, f[2] = a2, f[3] = i3, yt.clearBufferiv(yt.COLOR, 0, f));
          } else i2 |= yt.COLOR_BUFFER_BIT;
        }
        e2 && (i2 |= yt.DEPTH_BUFFER_BIT), n2 && (i2 |= yt.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), yt.clear(i2);
      }, this.clearColor = function() {
        this.clear(true, false, false);
      }, this.clearDepth = function() {
        this.clear(false, true, false);
      }, this.clearStencil = function() {
        this.clear(false, false, true);
      }, this.dispose = function() {
        n.removeEventListener("webglcontextlost", wt, false), n.removeEventListener("webglcontextrestored", At2, false), n.removeEventListener("webglcontextcreationerror", Rt2, false), ct2.dispose(), ht2.dispose(), tt.dispose(), nt.dispose(), it.dispose(), at.dispose(), _t.dispose(), xt2.dispose(), ot2.dispose(), bt.dispose(), bt.removeEventListener("sessionstart", Bt2), bt.removeEventListener("sessionend", zt2), kt2.stop();
      }, this.renderBufferDirect = function(t2, e2, n2, i2, r2, s2) {
        null === e2 && (e2 = q2);
        const a2 = r2.isMesh && r2.matrixWorld.determinant() < 0, o2 = (function(t3, e3, n3, i3, r3) {
          true !== e3.isScene && (e3 = q2);
          et.resetTextureUnits();
          const s3 = e3.fog, a3 = i3.isMeshStandardMaterial ? e3.environment : null, o3 = null === T ? y2.outputColorSpace : true === T.isXRRenderTarget ? T.texture.colorSpace : Ke, l3 = (i3.isMeshStandardMaterial ? it : nt).get(i3.envMap || a3), c3 = true === i3.vertexColors && !!n3.attributes.color && 4 === n3.attributes.color.itemSize, h3 = !!n3.attributes.tangent && (!!i3.normalMap || i3.anisotropy > 0), u4 = !!n3.morphAttributes.position, d4 = !!n3.morphAttributes.normal, p4 = !!n3.morphAttributes.color;
          let m3 = 0;
          i3.toneMapped && (null !== T && true !== T.isXRRenderTarget || (m3 = y2.toneMapping));
          const f3 = n3.morphAttributes.position || n3.morphAttributes.normal || n3.morphAttributes.color, g3 = void 0 !== f3 ? f3.length : 0, _2 = tt.get(i3), x2 = v.state.lights;
          if (true === V2 && (true === H2 || t3 !== E2)) {
            const e4 = t3 === E2 && i3.id === w2;
            ut2.setState(i3, t3, e4);
          }
          let M3 = false;
          i3.version === _2.__version ? _2.needsLights && _2.lightsStateVersion !== x2.state.version || _2.outputColorSpace !== o3 || r3.isBatchedMesh && false === _2.batching ? M3 = true : r3.isBatchedMesh || true !== _2.batching ? r3.isBatchedMesh && true === _2.batchingColor && null === r3.colorTexture || r3.isBatchedMesh && false === _2.batchingColor && null !== r3.colorTexture || r3.isInstancedMesh && false === _2.instancing ? M3 = true : r3.isInstancedMesh || true !== _2.instancing ? r3.isSkinnedMesh && false === _2.skinning ? M3 = true : r3.isSkinnedMesh || true !== _2.skinning ? r3.isInstancedMesh && true === _2.instancingColor && null === r3.instanceColor || r3.isInstancedMesh && false === _2.instancingColor && null !== r3.instanceColor || r3.isInstancedMesh && true === _2.instancingMorph && null === r3.morphTexture || r3.isInstancedMesh && false === _2.instancingMorph && null !== r3.morphTexture || _2.envMap !== l3 || true === i3.fog && _2.fog !== s3 ? M3 = true : void 0 === _2.numClippingPlanes || _2.numClippingPlanes === ut2.numPlanes && _2.numIntersection === ut2.numIntersection ? (_2.vertexAlphas !== c3 || _2.vertexTangents !== h3 || _2.morphTargets !== u4 || _2.morphNormals !== d4 || _2.morphColors !== p4 || _2.toneMapping !== m3 || _2.morphTargetsCount !== g3) && (M3 = true) : M3 = true : M3 = true : M3 = true : M3 = true : (M3 = true, _2.__version = i3.version);
          let S3 = _2.currentProgram;
          true === M3 && (S3 = qt2(i3, e3, r3));
          let b2 = false, A3 = false, R3 = false;
          const C3 = S3.getUniforms(), I3 = _2.uniforms;
          $.useProgram(S3.program) && (b2 = true, A3 = true, R3 = true);
          i3.id !== w2 && (w2 = i3.id, A3 = true);
          if (b2 || E2 !== t3) {
            $.buffers.depth.getReversed() ? (G2.copy(t3.projectionMatrix), (function(t4) {
              const e5 = t4.elements;
              e5[2] = 0.5 * e5[2] + 0.5 * e5[3], e5[6] = 0.5 * e5[6] + 0.5 * e5[7], e5[10] = 0.5 * e5[10] + 0.5 * e5[11], e5[14] = 0.5 * e5[14] + 0.5 * e5[15];
            })(G2), (function(t4) {
              const e5 = t4.elements;
              -1 === e5[11] ? (e5[10] = -e5[10] - 1, e5[14] = -e5[14]) : (e5[10] = -e5[10], e5[14] = 1 - e5[14]);
            })(G2), C3.setValue(yt, "projectionMatrix", G2)) : C3.setValue(yt, "projectionMatrix", t3.projectionMatrix), C3.setValue(yt, "viewMatrix", t3.matrixWorldInverse);
            const e4 = C3.map.cameraPosition;
            void 0 !== e4 && e4.setValue(yt, X2.setFromMatrixPosition(t3.matrixWorld)), K.logarithmicDepthBuffer && C3.setValue(yt, "logDepthBufFC", 2 / (Math.log(t3.far + 1) / Math.LN2)), (i3.isMeshPhongMaterial || i3.isMeshToonMaterial || i3.isMeshLambertMaterial || i3.isMeshBasicMaterial || i3.isMeshStandardMaterial || i3.isShaderMaterial) && C3.setValue(yt, "isOrthographic", true === t3.isOrthographicCamera), E2 !== t3 && (E2 = t3, A3 = true, R3 = true);
          }
          if (r3.isSkinnedMesh) {
            C3.setOptional(yt, r3, "bindMatrix"), C3.setOptional(yt, r3, "bindMatrixInverse");
            const t4 = r3.skeleton;
            t4 && (null === t4.boneTexture && t4.computeBoneTexture(), C3.setValue(yt, "boneTexture", t4.boneTexture, et));
          }
          r3.isBatchedMesh && (C3.setOptional(yt, r3, "batchingTexture"), C3.setValue(yt, "batchingTexture", r3._matricesTexture, et), C3.setOptional(yt, r3, "batchingIdTexture"), C3.setValue(yt, "batchingIdTexture", r3._indirectTexture, et), C3.setOptional(yt, r3, "batchingColorTexture"), null !== r3._colorsTexture && C3.setValue(yt, "batchingColorTexture", r3._colorsTexture, et));
          const P3 = n3.morphAttributes;
          void 0 === P3.position && void 0 === P3.normal && void 0 === P3.color || mt2.update(r3, n3, S3);
          (A3 || _2.receiveShadow !== r3.receiveShadow) && (_2.receiveShadow = r3.receiveShadow, C3.setValue(yt, "receiveShadow", r3.receiveShadow));
          i3.isMeshGouraudMaterial && null !== i3.envMap && (I3.envMap.value = l3, I3.flipEnvMap.value = l3.isCubeTexture && false === l3.isRenderTargetTexture ? -1 : 1);
          i3.isMeshStandardMaterial && null === i3.envMap && null !== e3.environment && (I3.envMapIntensity.value = e3.environmentIntensity);
          A3 && (C3.setValue(yt, "toneMappingExposure", y2.toneMappingExposure), _2.needsLights && (N3 = R3, (L3 = I3).ambientLightColor.needsUpdate = N3, L3.lightProbe.needsUpdate = N3, L3.directionalLights.needsUpdate = N3, L3.directionalLightShadows.needsUpdate = N3, L3.pointLights.needsUpdate = N3, L3.pointLightShadows.needsUpdate = N3, L3.spotLights.needsUpdate = N3, L3.spotLightShadows.needsUpdate = N3, L3.rectAreaLights.needsUpdate = N3, L3.hemisphereLights.needsUpdate = N3), s3 && true === i3.fog && lt2.refreshFogUniforms(I3, s3), lt2.refreshMaterialUniforms(I3, i3, D2, U2, v.state.transmissionRenderTarget[t3.id]), tl.upload(yt, Zt(_2), I3, et));
          var L3, N3;
          i3.isShaderMaterial && true === i3.uniformsNeedUpdate && (tl.upload(yt, Zt(_2), I3, et), i3.uniformsNeedUpdate = false);
          i3.isSpriteMaterial && C3.setValue(yt, "center", r3.center);
          if (C3.setValue(yt, "modelViewMatrix", r3.modelViewMatrix), C3.setValue(yt, "normalMatrix", r3.normalMatrix), C3.setValue(yt, "modelMatrix", r3.matrixWorld), i3.isShaderMaterial || i3.isRawShaderMaterial) {
            const t4 = i3.uniformsGroups;
            for (let e4 = 0, n4 = t4.length; e4 < n4; e4++) {
              const n5 = t4[e4];
              xt2.update(n5, S3), xt2.bind(n5, S3);
            }
          }
          return S3;
        })(t2, e2, n2, i2, r2);
        $.setMaterial(i2, a2);
        let l2 = n2.index, c2 = 1;
        if (true === i2.wireframe) {
          if (l2 = st.getWireframeAttribute(n2), void 0 === l2) return;
          c2 = 2;
        }
        const h2 = n2.drawRange, u3 = n2.attributes.position;
        let d3 = h2.start * c2, p3 = (h2.start + h2.count) * c2;
        null !== s2 && (d3 = Math.max(d3, s2.start * c2), p3 = Math.min(p3, (s2.start + s2.count) * c2)), null !== l2 ? (d3 = Math.max(d3, 0), p3 = Math.min(p3, l2.count)) : null != u3 && (d3 = Math.max(d3, 0), p3 = Math.min(p3, u3.count));
        const m2 = p3 - d3;
        if (m2 < 0 || m2 === 1 / 0) return;
        let f2;
        _t.setup(r2, i2, o2, n2, l2);
        let g2 = ft2;
        if (null !== l2 && (f2 = rt.get(l2), g2 = gt2, g2.setIndex(f2)), r2.isMesh) true === i2.wireframe ? ($.setLineWidth(i2.wireframeLinewidth * Z()), g2.setMode(yt.LINES)) : g2.setMode(yt.TRIANGLES);
        else if (r2.isLine) {
          let t3 = i2.linewidth;
          void 0 === t3 && (t3 = 1), $.setLineWidth(t3 * Z()), r2.isLineSegments ? g2.setMode(yt.LINES) : r2.isLineLoop ? g2.setMode(yt.LINE_LOOP) : g2.setMode(yt.LINE_STRIP);
        } else r2.isPoints ? g2.setMode(yt.POINTS) : r2.isSprite && g2.setMode(yt.TRIANGLES);
        if (r2.isBatchedMesh) if (null !== r2._multiDrawInstances) g2.renderMultiDrawInstances(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount, r2._multiDrawInstances);
        else if (J.get("WEBGL_multi_draw")) g2.renderMultiDraw(r2._multiDrawStarts, r2._multiDrawCounts, r2._multiDrawCount);
        else {
          const t3 = r2._multiDrawStarts, e3 = r2._multiDrawCounts, n3 = r2._multiDrawCount, s3 = l2 ? rt.get(l2).bytesPerElement : 1, a3 = tt.get(i2).currentProgram.getUniforms();
          for (let i3 = 0; i3 < n3; i3++) a3.setValue(yt, "_gl_DrawID", i3), g2.render(t3[i3] / s3, e3[i3]);
        }
        else if (r2.isInstancedMesh) g2.renderInstances(d3, m2, r2.count);
        else if (n2.isInstancedBufferGeometry) {
          const t3 = void 0 !== n2._maxInstanceCount ? n2._maxInstanceCount : 1 / 0, e3 = Math.min(n2.instanceCount, t3);
          g2.renderInstances(d3, m2, e3);
        } else g2.render(d3, m2);
      }, this.compile = function(t2, e2, n2 = null) {
        null === n2 && (n2 = t2), v = ht2.get(n2), v.init(e2), x.push(v), n2.traverseVisible((function(t3) {
          t3.isLight && t3.layers.test(e2.layers) && (v.pushLight(t3), t3.castShadow && v.pushShadow(t3));
        })), t2 !== n2 && t2.traverseVisible((function(t3) {
          t3.isLight && t3.layers.test(e2.layers) && (v.pushLight(t3), t3.castShadow && v.pushShadow(t3));
        })), v.setupLights();
        const i2 = /* @__PURE__ */ new Set();
        return t2.traverse((function(t3) {
          if (!(t3.isMesh || t3.isPoints || t3.isLine || t3.isSprite)) return;
          const e3 = t3.material;
          if (e3) if (Array.isArray(e3)) for (let r2 = 0; r2 < e3.length; r2++) {
            const s2 = e3[r2];
            Lt2(s2, n2, t3), i2.add(s2);
          }
          else Lt2(e3, n2, t3), i2.add(e3);
        })), x.pop(), v = null, i2;
      }, this.compileAsync = function(t2, e2, n2 = null) {
        const i2 = this.compile(t2, e2, n2);
        return new Promise(((e3) => {
          function n3() {
            i2.forEach((function(t3) {
              tt.get(t3).currentProgram.isReady() && i2.delete(t3);
            })), 0 !== i2.size ? setTimeout(n3, 10) : e3(t2);
          }
          null !== J.get("KHR_parallel_shader_compile") ? n3() : setTimeout(n3, 10);
        }));
      };
      let Ft2 = null;
      function Bt2() {
        kt2.stop();
      }
      function zt2() {
        kt2.start();
      }
      const kt2 = new la();
      function Vt2(t2, e2, n2, i2) {
        if (false === t2.visible) return;
        if (t2.layers.test(e2.layers)) {
          if (t2.isGroup) n2 = t2.renderOrder;
          else if (t2.isLOD) true === t2.autoUpdate && t2.update(e2);
          else if (t2.isLight) v.pushLight(t2), t2.castShadow && v.pushShadow(t2);
          else if (t2.isSprite) {
            if (!t2.frustumCulled || k2.intersectsSprite(t2)) {
              i2 && j2.setFromMatrixPosition(t2.matrixWorld).applyMatrix4(W2);
              const e3 = at.update(t2), r3 = t2.material;
              r3.visible && g.push(t2, e3, r3, n2, j2.z, null);
            }
          } else if ((t2.isMesh || t2.isLine || t2.isPoints) && (!t2.frustumCulled || k2.intersectsObject(t2))) {
            const e3 = at.update(t2), r3 = t2.material;
            if (i2 && (void 0 !== t2.boundingSphere ? (null === t2.boundingSphere && t2.computeBoundingSphere(), j2.copy(t2.boundingSphere.center)) : (null === e3.boundingSphere && e3.computeBoundingSphere(), j2.copy(e3.boundingSphere.center)), j2.applyMatrix4(t2.matrixWorld).applyMatrix4(W2)), Array.isArray(r3)) {
              const i3 = e3.groups;
              for (let s2 = 0, a2 = i3.length; s2 < a2; s2++) {
                const a3 = i3[s2], o2 = r3[a3.materialIndex];
                o2 && o2.visible && g.push(t2, e3, o2, n2, j2.z, a3);
              }
            } else r3.visible && g.push(t2, e3, r3, n2, j2.z, null);
          }
        }
        const r2 = t2.children;
        for (let t3 = 0, s2 = r2.length; t3 < s2; t3++) Vt2(r2[t3], e2, n2, i2);
      }
      function Ht2(t2, e2, n2, i2) {
        const r2 = t2.opaque, s2 = t2.transmissive, a2 = t2.transparent;
        v.setupLightsView(n2), true === V2 && ut2.setGlobalState(y2.clippingPlanes, n2), i2 && $.viewport(A2.copy(i2)), r2.length > 0 && Wt2(r2, e2, n2), s2.length > 0 && Wt2(s2, e2, n2), a2.length > 0 && Wt2(a2, e2, n2), $.buffers.depth.setTest(true), $.buffers.depth.setMask(true), $.buffers.color.setMask(true), $.setPolygonOffset(false);
      }
      function Gt2(t2, e2, n2, i2) {
        if (null !== (true === n2.isScene ? n2.overrideMaterial : null)) return;
        void 0 === v.state.transmissionRenderTarget[i2.id] && (v.state.transmissionRenderTarget[i2.id] = new bi(1, 1, { generateMipmaps: true, type: J.has("EXT_color_buffer_half_float") || J.has("EXT_color_buffer_float") ? Ut : Et, minFilter: Tt, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: ai.workingColorSpace }));
        const r2 = v.state.transmissionRenderTarget[i2.id], a2 = i2.viewport || A2;
        r2.setSize(a2.z, a2.w);
        const o2 = y2.getRenderTarget();
        y2.setRenderTarget(r2), y2.getClearColor(I2), P2 = y2.getClearAlpha(), P2 < 1 && y2.setClearColor(16777215, 0.5), y2.clear(), Y && pt2.render(n2);
        const l2 = y2.toneMapping;
        y2.toneMapping = 0;
        const c2 = i2.viewport;
        if (void 0 !== i2.viewport && (i2.viewport = void 0), v.setupLightsView(i2), true === V2 && ut2.setGlobalState(y2.clippingPlanes, i2), Wt2(t2, n2, i2), et.updateMultisampleRenderTarget(r2), et.updateRenderTargetMipmap(r2), false === J.has("WEBGL_multisampled_render_to_texture")) {
          let t3 = false;
          for (let r3 = 0, s2 = e2.length; r3 < s2; r3++) {
            const s3 = e2[r3], a3 = s3.object, o3 = s3.geometry, l3 = s3.material, c3 = s3.group;
            if (2 === l3.side && a3.layers.test(i2.layers)) {
              const e3 = l3.side;
              l3.side = 1, l3.needsUpdate = true, Xt2(a3, n2, i2, o3, l3, c3), l3.side = e3, l3.needsUpdate = true, t3 = true;
            }
          }
          true === t3 && (et.updateMultisampleRenderTarget(r2), et.updateRenderTargetMipmap(r2));
        }
        y2.setRenderTarget(o2), y2.setClearColor(I2, P2), void 0 !== c2 && (i2.viewport = c2), y2.toneMapping = l2;
      }
      function Wt2(t2, e2, n2) {
        const i2 = true === e2.isScene ? e2.overrideMaterial : null;
        for (let r2 = 0, s2 = t2.length; r2 < s2; r2++) {
          const s3 = t2[r2], a2 = s3.object, o2 = s3.geometry, l2 = null === i2 ? s3.material : i2, c2 = s3.group;
          a2.layers.test(n2.layers) && Xt2(a2, e2, n2, o2, l2, c2);
        }
      }
      function Xt2(t2, e2, n2, i2, r2, s2) {
        t2.onBeforeRender(y2, e2, n2, i2, r2, s2), t2.modelViewMatrix.multiplyMatrices(n2.matrixWorldInverse, t2.matrixWorld), t2.normalMatrix.getNormalMatrix(t2.modelViewMatrix), r2.onBeforeRender(y2, e2, n2, i2, t2, s2), true === r2.transparent && 2 === r2.side && false === r2.forceSinglePass ? (r2.side = 1, r2.needsUpdate = true, y2.renderBufferDirect(n2, e2, i2, r2, t2, s2), r2.side = 0, r2.needsUpdate = true, y2.renderBufferDirect(n2, e2, i2, r2, t2, s2), r2.side = 2) : y2.renderBufferDirect(n2, e2, i2, r2, t2, s2), t2.onAfterRender(y2, e2, n2, i2, r2, s2);
      }
      function qt2(t2, e2, n2) {
        true !== e2.isScene && (e2 = q2);
        const i2 = tt.get(t2), r2 = v.state.lights, s2 = v.state.shadowsArray, a2 = r2.state.version, o2 = ot2.getParameters(t2, r2.state, s2, e2, n2), l2 = ot2.getProgramCacheKey(o2);
        let c2 = i2.programs;
        i2.environment = t2.isMeshStandardMaterial ? e2.environment : null, i2.fog = e2.fog, i2.envMap = (t2.isMeshStandardMaterial ? it : nt).get(t2.envMap || i2.environment), i2.envMapRotation = null !== i2.environment && null === t2.envMap ? e2.environmentRotation : t2.envMapRotation, void 0 === c2 && (t2.addEventListener("dispose", It2), c2 = /* @__PURE__ */ new Map(), i2.programs = c2);
        let h2 = c2.get(l2);
        if (void 0 !== h2) {
          if (i2.currentProgram === h2 && i2.lightsStateVersion === a2) return Kt2(t2, o2), h2;
        } else o2.uniforms = ot2.getUniforms(t2), t2.onBeforeCompile(o2, y2), h2 = ot2.acquireProgram(o2, l2), c2.set(l2, h2), i2.uniforms = o2.uniforms;
        const u3 = i2.uniforms;
        return (t2.isShaderMaterial || t2.isRawShaderMaterial) && true !== t2.clipping || (u3.clippingPlanes = ut2.uniform), Kt2(t2, o2), i2.needsLights = (function(t3) {
          return t3.isMeshLambertMaterial || t3.isMeshToonMaterial || t3.isMeshPhongMaterial || t3.isMeshStandardMaterial || t3.isShadowMaterial || t3.isShaderMaterial && true === t3.lights;
        })(t2), i2.lightsStateVersion = a2, i2.needsLights && (u3.ambientLightColor.value = r2.state.ambient, u3.lightProbe.value = r2.state.probe, u3.directionalLights.value = r2.state.directional, u3.directionalLightShadows.value = r2.state.directionalShadow, u3.spotLights.value = r2.state.spot, u3.spotLightShadows.value = r2.state.spotShadow, u3.rectAreaLights.value = r2.state.rectArea, u3.ltc_1.value = r2.state.rectAreaLTC1, u3.ltc_2.value = r2.state.rectAreaLTC2, u3.pointLights.value = r2.state.point, u3.pointLightShadows.value = r2.state.pointShadow, u3.hemisphereLights.value = r2.state.hemi, u3.directionalShadowMap.value = r2.state.directionalShadowMap, u3.directionalShadowMatrix.value = r2.state.directionalShadowMatrix, u3.spotShadowMap.value = r2.state.spotShadowMap, u3.spotLightMatrix.value = r2.state.spotLightMatrix, u3.spotLightMap.value = r2.state.spotLightMap, u3.pointShadowMap.value = r2.state.pointShadowMap, u3.pointShadowMatrix.value = r2.state.pointShadowMatrix), i2.currentProgram = h2, i2.uniformsList = null, h2;
      }
      function Zt(t2) {
        if (null === t2.uniformsList) {
          const e2 = t2.currentProgram.getUniforms();
          t2.uniformsList = tl.seqWithValue(e2.seq, t2.uniforms);
        }
        return t2.uniformsList;
      }
      function Kt2(t2, e2) {
        const n2 = tt.get(t2);
        n2.outputColorSpace = e2.outputColorSpace, n2.batching = e2.batching, n2.batchingColor = e2.batchingColor, n2.instancing = e2.instancing, n2.instancingColor = e2.instancingColor, n2.instancingMorph = e2.instancingMorph, n2.skinning = e2.skinning, n2.morphTargets = e2.morphTargets, n2.morphNormals = e2.morphNormals, n2.morphColors = e2.morphColors, n2.morphTargetsCount = e2.morphTargetsCount, n2.numClippingPlanes = e2.numClippingPlanes, n2.numIntersection = e2.numClipIntersection, n2.vertexAlphas = e2.vertexAlphas, n2.vertexTangents = e2.vertexTangents, n2.toneMapping = e2.toneMapping;
      }
      kt2.setAnimationLoop((function(t2) {
        Ft2 && Ft2(t2);
      })), "undefined" != typeof self && kt2.setContext(self), this.setAnimationLoop = function(t2) {
        Ft2 = t2, bt.setAnimationLoop(t2), null === t2 ? kt2.stop() : kt2.start();
      }, bt.addEventListener("sessionstart", Bt2), bt.addEventListener("sessionend", zt2), this.render = function(t2, e2) {
        if (void 0 !== e2 && true !== e2.isCamera) return void console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        if (true === M2) return;
        if (true === t2.matrixWorldAutoUpdate && t2.updateMatrixWorld(), null === e2.parent && true === e2.matrixWorldAutoUpdate && e2.updateMatrixWorld(), true === bt.enabled && true === bt.isPresenting && (true === bt.cameraAutoUpdate && bt.updateCamera(e2), e2 = bt.getCamera()), true === t2.isScene && t2.onBeforeRender(y2, t2, e2, T), v = ht2.get(t2, x.length), v.init(e2), x.push(v), W2.multiplyMatrices(e2.projectionMatrix, e2.matrixWorldInverse), k2.setFromProjectionMatrix(W2), H2 = this.localClippingEnabled, V2 = ut2.init(this.clippingPlanes, H2), g = ct2.get(t2, _.length), g.init(), _.push(g), true === bt.enabled && true === bt.isPresenting) {
          const t3 = y2.xr.getDepthSensingMesh();
          null !== t3 && Vt2(t3, e2, -1 / 0, y2.sortObjects);
        }
        Vt2(t2, e2, 0, y2.sortObjects), g.finish(), true === y2.sortObjects && g.sort(N2, O2), Y = false === bt.enabled || false === bt.isPresenting || false === bt.hasDepthSensing(), Y && pt2.addToRenderList(g, t2), this.info.render.frame++, true === V2 && ut2.beginShadows();
        const n2 = v.state.shadowsArray;
        dt2.render(n2, t2, e2), true === V2 && ut2.endShadows(), true === this.info.autoReset && this.info.reset();
        const i2 = g.opaque, r2 = g.transmissive;
        if (v.setupLights(), e2.isArrayCamera) {
          const n3 = e2.cameras;
          if (r2.length > 0) for (let e3 = 0, s2 = n3.length; e3 < s2; e3++) {
            Gt2(i2, r2, t2, n3[e3]);
          }
          Y && pt2.render(t2);
          for (let e3 = 0, i3 = n3.length; e3 < i3; e3++) {
            const i4 = n3[e3];
            Ht2(g, t2, i4, i4.viewport);
          }
        } else r2.length > 0 && Gt2(i2, r2, t2, e2), Y && pt2.render(t2), Ht2(g, t2, e2);
        null !== T && (et.updateMultisampleRenderTarget(T), et.updateRenderTargetMipmap(T)), true === t2.isScene && t2.onAfterRender(y2, t2, e2), _t.resetDefaultState(), w2 = -1, E2 = null, x.pop(), x.length > 0 ? (v = x[x.length - 1], true === V2 && ut2.setGlobalState(y2.clippingPlanes, v.state.camera)) : v = null, _.pop(), g = _.length > 0 ? _[_.length - 1] : null;
      }, this.getActiveCubeFace = function() {
        return S2;
      }, this.getActiveMipmapLevel = function() {
        return b;
      }, this.getRenderTarget = function() {
        return T;
      }, this.setRenderTargetTextures = function(t2, e2, n2) {
        tt.get(t2.texture).__webglTexture = e2, tt.get(t2.depthTexture).__webglTexture = n2;
        const i2 = tt.get(t2);
        i2.__hasExternalTextures = true, i2.__autoAllocateDepthBuffer = void 0 === n2, i2.__autoAllocateDepthBuffer || true === J.has("WEBGL_multisampled_render_to_texture") && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), i2.__useRenderToTexture = false);
      }, this.setRenderTargetFramebuffer = function(t2, e2) {
        const n2 = tt.get(t2);
        n2.__webglFramebuffer = e2, n2.__useDefaultFramebuffer = void 0 === e2;
      }, this.setRenderTarget = function(t2, e2 = 0, n2 = 0) {
        T = t2, S2 = e2, b = n2;
        let i2 = true, r2 = null, s2 = false, a2 = false;
        if (t2) {
          const o2 = tt.get(t2);
          if (void 0 !== o2.__useDefaultFramebuffer) $.bindFramebuffer(yt.FRAMEBUFFER, null), i2 = false;
          else if (void 0 === o2.__webglFramebuffer) et.setupRenderTarget(t2);
          else if (o2.__hasExternalTextures) et.rebindTextures(t2, tt.get(t2.texture).__webglTexture, tt.get(t2.depthTexture).__webglTexture);
          else if (t2.depthBuffer) {
            const e3 = t2.depthTexture;
            if (o2.__boundDepthTexture !== e3) {
              if (null !== e3 && tt.has(e3) && (t2.width !== e3.image.width || t2.height !== e3.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
              et.setupDepthRenderbuffer(t2);
            }
          }
          const l2 = t2.texture;
          (l2.isData3DTexture || l2.isDataArrayTexture || l2.isCompressedArrayTexture) && (a2 = true);
          const c2 = tt.get(t2).__webglFramebuffer;
          t2.isWebGLCubeRenderTarget ? (r2 = Array.isArray(c2[e2]) ? c2[e2][n2] : c2[e2], s2 = true) : r2 = t2.samples > 0 && false === et.useMultisampledRTT(t2) ? tt.get(t2).__webglMultisampledFramebuffer : Array.isArray(c2) ? c2[n2] : c2, A2.copy(t2.viewport), R2.copy(t2.scissor), C2 = t2.scissorTest;
        } else A2.copy(F2).multiplyScalar(D2).floor(), R2.copy(B2).multiplyScalar(D2).floor(), C2 = z2;
        if ($.bindFramebuffer(yt.FRAMEBUFFER, r2) && i2 && $.drawBuffers(t2, r2), $.viewport(A2), $.scissor(R2), $.setScissorTest(C2), s2) {
          const i3 = tt.get(t2.texture);
          yt.framebufferTexture2D(yt.FRAMEBUFFER, yt.COLOR_ATTACHMENT0, yt.TEXTURE_CUBE_MAP_POSITIVE_X + e2, i3.__webglTexture, n2);
        } else if (a2) {
          const i3 = tt.get(t2.texture), r3 = e2 || 0;
          yt.framebufferTextureLayer(yt.FRAMEBUFFER, yt.COLOR_ATTACHMENT0, i3.__webglTexture, n2 || 0, r3);
        }
        w2 = -1;
      }, this.readRenderTargetPixels = function(t2, e2, n2, i2, r2, s2, a2) {
        if (!t2 || !t2.isWebGLRenderTarget) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o2 = tt.get(t2).__webglFramebuffer;
        if (t2.isWebGLCubeRenderTarget && void 0 !== a2 && (o2 = o2[a2]), o2) {
          $.bindFramebuffer(yt.FRAMEBUFFER, o2);
          try {
            const a3 = t2.texture, o3 = a3.format, l2 = a3.type;
            if (!K.textureFormatReadable(o3)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            if (!K.textureTypeReadable(l2)) return void console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            e2 >= 0 && e2 <= t2.width - i2 && n2 >= 0 && n2 <= t2.height - r2 && yt.readPixels(e2, n2, i2, r2, vt2.convert(o3), vt2.convert(l2), s2);
          } finally {
            const t3 = null !== T ? tt.get(T).__webglFramebuffer : null;
            $.bindFramebuffer(yt.FRAMEBUFFER, t3);
          }
        }
      }, this.readRenderTargetPixelsAsync = async function(t2, e2, n2, i2, r2, s2, a2) {
        if (!t2 || !t2.isWebGLRenderTarget) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        let o2 = tt.get(t2).__webglFramebuffer;
        if (t2.isWebGLCubeRenderTarget && void 0 !== a2 && (o2 = o2[a2]), o2) {
          const a3 = t2.texture, l2 = a3.format, c2 = a3.type;
          if (!K.textureFormatReadable(l2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
          if (!K.textureTypeReadable(c2)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
          if (e2 >= 0 && e2 <= t2.width - i2 && n2 >= 0 && n2 <= t2.height - r2) {
            $.bindFramebuffer(yt.FRAMEBUFFER, o2);
            const t3 = yt.createBuffer();
            yt.bindBuffer(yt.PIXEL_PACK_BUFFER, t3), yt.bufferData(yt.PIXEL_PACK_BUFFER, s2.byteLength, yt.STREAM_READ), yt.readPixels(e2, n2, i2, r2, vt2.convert(l2), vt2.convert(c2), 0);
            const a4 = null !== T ? tt.get(T).__webglFramebuffer : null;
            $.bindFramebuffer(yt.FRAMEBUFFER, a4);
            const h2 = yt.fenceSync(yt.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return yt.flush(), await (function(t4, e3, n3) {
              return new Promise((function(i3, r3) {
                setTimeout((function s3() {
                  switch (t4.clientWaitSync(e3, t4.SYNC_FLUSH_COMMANDS_BIT, 0)) {
                    case t4.WAIT_FAILED:
                      r3();
                      break;
                    case t4.TIMEOUT_EXPIRED:
                      setTimeout(s3, n3);
                      break;
                    default:
                      i3();
                  }
                }), n3);
              }));
            })(yt, h2, 4), yt.bindBuffer(yt.PIXEL_PACK_BUFFER, t3), yt.getBufferSubData(yt.PIXEL_PACK_BUFFER, 0, s2), yt.deleteBuffer(t3), yt.deleteSync(h2), s2;
          }
          throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
        }
      }, this.copyFramebufferToTexture = function(t2, e2 = null, n2 = 0) {
        true !== t2.isTexture && (si("WebGLRenderer: copyFramebufferToTexture function signature has changed."), e2 = arguments[0] || null, t2 = arguments[1]);
        const i2 = Math.pow(2, -n2), r2 = Math.floor(t2.image.width * i2), s2 = Math.floor(t2.image.height * i2), a2 = null !== e2 ? e2.x : 0, o2 = null !== e2 ? e2.y : 0;
        et.setTexture2D(t2, 0), yt.copyTexSubImage2D(yt.TEXTURE_2D, n2, 0, 0, a2, o2, r2, s2), $.unbindTexture();
      }, this.copyTextureToTexture = function(t2, e2, n2 = null, i2 = null, r2 = 0) {
        let s2, a2, o2, l2, c2, h2, u3, d3, p3;
        true !== t2.isTexture && (si("WebGLRenderer: copyTextureToTexture function signature has changed."), i2 = arguments[0] || null, t2 = arguments[1], e2 = arguments[2], r2 = arguments[3] || 0, n2 = null);
        const m2 = t2.isCompressedTexture ? t2.mipmaps[r2] : t2.image;
        null !== n2 ? (s2 = n2.max.x - n2.min.x, a2 = n2.max.y - n2.min.y, o2 = n2.isBox3 ? n2.max.z - n2.min.z : 1, l2 = n2.min.x, c2 = n2.min.y, h2 = n2.isBox3 ? n2.min.z : 0) : (s2 = m2.width, a2 = m2.height, o2 = m2.depth || 1, l2 = 0, c2 = 0, h2 = 0), null !== i2 ? (u3 = i2.x, d3 = i2.y, p3 = i2.z) : (u3 = 0, d3 = 0, p3 = 0);
        const f2 = vt2.convert(e2.format), g2 = vt2.convert(e2.type);
        let v2;
        e2.isData3DTexture ? (et.setTexture3D(e2, 0), v2 = yt.TEXTURE_3D) : e2.isDataArrayTexture || e2.isCompressedArrayTexture ? (et.setTexture2DArray(e2, 0), v2 = yt.TEXTURE_2D_ARRAY) : (et.setTexture2D(e2, 0), v2 = yt.TEXTURE_2D), yt.pixelStorei(yt.UNPACK_FLIP_Y_WEBGL, e2.flipY), yt.pixelStorei(yt.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e2.premultiplyAlpha), yt.pixelStorei(yt.UNPACK_ALIGNMENT, e2.unpackAlignment);
        const _2 = yt.getParameter(yt.UNPACK_ROW_LENGTH), x2 = yt.getParameter(yt.UNPACK_IMAGE_HEIGHT), y3 = yt.getParameter(yt.UNPACK_SKIP_PIXELS), M3 = yt.getParameter(yt.UNPACK_SKIP_ROWS), S3 = yt.getParameter(yt.UNPACK_SKIP_IMAGES);
        yt.pixelStorei(yt.UNPACK_ROW_LENGTH, m2.width), yt.pixelStorei(yt.UNPACK_IMAGE_HEIGHT, m2.height), yt.pixelStorei(yt.UNPACK_SKIP_PIXELS, l2), yt.pixelStorei(yt.UNPACK_SKIP_ROWS, c2), yt.pixelStorei(yt.UNPACK_SKIP_IMAGES, h2);
        const b2 = t2.isDataArrayTexture || t2.isData3DTexture, T2 = e2.isDataArrayTexture || e2.isData3DTexture;
        if (t2.isRenderTargetTexture || t2.isDepthTexture) {
          const n3 = tt.get(t2), i3 = tt.get(e2), m3 = tt.get(n3.__renderTarget), f3 = tt.get(i3.__renderTarget);
          $.bindFramebuffer(yt.READ_FRAMEBUFFER, m3.__webglFramebuffer), $.bindFramebuffer(yt.DRAW_FRAMEBUFFER, f3.__webglFramebuffer);
          for (let n4 = 0; n4 < o2; n4++) b2 && yt.framebufferTextureLayer(yt.READ_FRAMEBUFFER, yt.COLOR_ATTACHMENT0, tt.get(t2).__webglTexture, r2, h2 + n4), t2.isDepthTexture ? (T2 && yt.framebufferTextureLayer(yt.DRAW_FRAMEBUFFER, yt.COLOR_ATTACHMENT0, tt.get(e2).__webglTexture, r2, p3 + n4), yt.blitFramebuffer(l2, c2, s2, a2, u3, d3, s2, a2, yt.DEPTH_BUFFER_BIT, yt.NEAREST)) : T2 ? yt.copyTexSubImage3D(v2, r2, u3, d3, p3 + n4, l2, c2, s2, a2) : yt.copyTexSubImage2D(v2, r2, u3, d3, p3 + n4, l2, c2, s2, a2);
          $.bindFramebuffer(yt.READ_FRAMEBUFFER, null), $.bindFramebuffer(yt.DRAW_FRAMEBUFFER, null);
        } else T2 ? t2.isDataTexture || t2.isData3DTexture ? yt.texSubImage3D(v2, r2, u3, d3, p3, s2, a2, o2, f2, g2, m2.data) : e2.isCompressedArrayTexture ? yt.compressedTexSubImage3D(v2, r2, u3, d3, p3, s2, a2, o2, f2, m2.data) : yt.texSubImage3D(v2, r2, u3, d3, p3, s2, a2, o2, f2, g2, m2) : t2.isDataTexture ? yt.texSubImage2D(yt.TEXTURE_2D, r2, u3, d3, s2, a2, f2, g2, m2.data) : t2.isCompressedTexture ? yt.compressedTexSubImage2D(yt.TEXTURE_2D, r2, u3, d3, m2.width, m2.height, f2, m2.data) : yt.texSubImage2D(yt.TEXTURE_2D, r2, u3, d3, s2, a2, f2, g2, m2);
        yt.pixelStorei(yt.UNPACK_ROW_LENGTH, _2), yt.pixelStorei(yt.UNPACK_IMAGE_HEIGHT, x2), yt.pixelStorei(yt.UNPACK_SKIP_PIXELS, y3), yt.pixelStorei(yt.UNPACK_SKIP_ROWS, M3), yt.pixelStorei(yt.UNPACK_SKIP_IMAGES, S3), 0 === r2 && e2.generateMipmaps && yt.generateMipmap(v2), $.unbindTexture();
      }, this.copyTextureToTexture3D = function(t2, e2, n2 = null, i2 = null, r2 = 0) {
        return true !== t2.isTexture && (si("WebGLRenderer: copyTextureToTexture3D function signature has changed."), n2 = arguments[0] || null, i2 = arguments[1] || null, t2 = arguments[2], e2 = arguments[3], r2 = arguments[4] || 0), si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(t2, e2, n2, i2, r2);
      }, this.initRenderTarget = function(t2) {
        void 0 === tt.get(t2).__webglFramebuffer && et.setupRenderTarget(t2);
      }, this.initTexture = function(t2) {
        t2.isCubeTexture ? et.setTextureCube(t2, 0) : t2.isData3DTexture ? et.setTexture3D(t2, 0) : t2.isDataArrayTexture || t2.isCompressedArrayTexture ? et.setTexture2DArray(t2, 0) : et.setTexture2D(t2, 0), $.unbindTexture();
      }, this.resetState = function() {
        S2 = 0, b = 0, T = null, $.reset(), _t.reset();
      }, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    get coordinateSystem() {
      return On;
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(t2) {
      this._outputColorSpace = t2;
      const e = this.getContext();
      e.drawingBufferColorspace = ai._getDrawingBufferColorSpace(t2), e.unpackColorSpace = ai._getUnpackColorSpace();
    }
  };
  var rc = class extends Lr {
    constructor() {
      super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new fr(), this.environmentIntensity = 1, this.environmentRotation = new fr(), this.overrideMaterial = null, "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
    }
    copy(t2, e) {
      return super.copy(t2, e), null !== t2.background && (this.background = t2.background.clone()), null !== t2.environment && (this.environment = t2.environment.clone()), null !== t2.fog && (this.fog = t2.fog.clone()), this.backgroundBlurriness = t2.backgroundBlurriness, this.backgroundIntensity = t2.backgroundIntensity, this.backgroundRotation.copy(t2.backgroundRotation), this.environmentIntensity = t2.environmentIntensity, this.environmentRotation.copy(t2.environmentRotation), null !== t2.overrideMaterial && (this.overrideMaterial = t2.overrideMaterial.clone()), this.matrixAutoUpdate = t2.matrixAutoUpdate, this;
    }
    toJSON(t2) {
      const e = super.toJSON(t2);
      return null !== this.fog && (e.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (e.object.backgroundBlurriness = this.backgroundBlurriness), 1 !== this.backgroundIntensity && (e.object.backgroundIntensity = this.backgroundIntensity), e.object.backgroundRotation = this.backgroundRotation.toArray(), 1 !== this.environmentIntensity && (e.object.environmentIntensity = this.environmentIntensity), e.object.environmentRotation = this.environmentRotation.toArray(), e;
    }
  };
  var ac = new Ci();
  var hc = new Ci();
  var uc = new Ci();
  var dc = new Ci();
  var pc = new Jn();
  var mc = new Jn();
  var fc = new sr();
  var gc = new Ci();
  var vc = new Ci();
  var _c = new Ci();
  var xc = new Jn();
  var yc = new Jn();
  var Mc = new Jn();
  var Tc = new Ci();
  var wc = new Ci();
  var Ac = new Ci();
  var Rc = new Mi();
  var Cc = new Mi();
  var Ic = new Ci();
  var Pc = new sr();
  var Lc = new Ci();
  var Uc = new Ji();
  var Dc = new sr();
  var Nc = new rr();
  var zc = new sr();
  var kc = new sr();
  var Gc = new sr();
  var Wc = new sr();
  var jc = new Li();
  var qc = new sr();
  var Yc = new Bs();
  var Zc = new Ji();
  var th = class {
    constructor() {
      this.index = 0, this.pool = [], this.list = [];
    }
    push(t2, e, n, i) {
      const r = this.pool, s = this.list;
      this.index >= r.length && r.push({ start: -1, count: -1, z: -1, index: -1 });
      const a = r[this.index];
      s.push(a), this.index++, a.start = t2, a.count = e, a.z = n, a.index = i;
    }
    reset() {
      this.list.length = 0, this.index = 0;
    }
  };
  var eh = new sr();
  var nh = new Kr(1, 1, 1);
  var ih = new oa();
  var rh = new Li();
  var sh = new Ji();
  var ah = new Ci();
  var oh = new Ci();
  var lh = new Ci();
  var ch = new th();
  var hh = new Bs();
  var gh = new Ci();
  var vh = new Ci();
  var _h = new sr();
  var xh = new rr();
  var yh = new Ji();
  var Mh = new Ci();
  var Sh = new Ci();
  var wh = new Ci();
  var Eh = new Ci();
  var Ih = new sr();
  var Ph = new rr();
  var Lh = new Ji();
  var Uh = new Ci();
  var Vh = class extends yi {
    constructor(t2, e, n, i, r, s, a, o, l) {
      super(t2, e, n, i, r, s, a, o, l), this.isCanvasTexture = true, this.needsUpdate = true;
    }
  };
  var Hh = class {
    constructor() {
      this.type = "Curve", this.arcLengthDivisions = 200;
    }
    getPoint() {
      return console.warn("THREE.Curve: .getPoint() not implemented."), null;
    }
    getPointAt(t2, e) {
      const n = this.getUtoTmapping(t2);
      return this.getPoint(n, e);
    }
    getPoints(t2 = 5) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPoint(n / t2));
      return e;
    }
    getSpacedPoints(t2 = 5) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPointAt(n / t2));
      return e;
    }
    getLength() {
      const t2 = this.getLengths();
      return t2[t2.length - 1];
    }
    getLengths(t2 = this.arcLengthDivisions) {
      if (this.cacheArcLengths && this.cacheArcLengths.length === t2 + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = false;
      const e = [];
      let n, i = this.getPoint(0), r = 0;
      e.push(0);
      for (let s = 1; s <= t2; s++) n = this.getPoint(s / t2), r += n.distanceTo(i), e.push(r), i = n;
      return this.cacheArcLengths = e, e;
    }
    updateArcLengths() {
      this.needsUpdate = true, this.getLengths();
    }
    getUtoTmapping(t2, e) {
      const n = this.getLengths();
      let i = 0;
      const r = n.length;
      let s;
      s = e || t2 * n[r - 1];
      let a, o = 0, l = r - 1;
      for (; o <= l; ) if (i = Math.floor(o + (l - o) / 2), a = n[i] - s, a < 0) o = i + 1;
      else {
        if (!(a > 0)) {
          l = i;
          break;
        }
        l = i - 1;
      }
      if (i = l, n[i] === s) return i / (r - 1);
      const c = n[i];
      return (i + (s - c) / (n[i + 1] - c)) / (r - 1);
    }
    getTangent(t2, e) {
      const n = 1e-4;
      let i = t2 - n, r = t2 + n;
      i < 0 && (i = 0), r > 1 && (r = 1);
      const s = this.getPoint(i), a = this.getPoint(r), o = e || (s.isVector2 ? new Jn() : new Ci());
      return o.copy(a).sub(s).normalize(), o;
    }
    getTangentAt(t2, e) {
      const n = this.getUtoTmapping(t2);
      return this.getTangent(n, e);
    }
    computeFrenetFrames(t2, e) {
      const n = new Ci(), i = [], r = [], s = [], a = new Ci(), o = new sr();
      for (let e2 = 0; e2 <= t2; e2++) {
        const n2 = e2 / t2;
        i[e2] = this.getTangentAt(n2, new Ci());
      }
      r[0] = new Ci(), s[0] = new Ci();
      let l = Number.MAX_VALUE;
      const c = Math.abs(i[0].x), h = Math.abs(i[0].y), u2 = Math.abs(i[0].z);
      c <= l && (l = c, n.set(1, 0, 0)), h <= l && (l = h, n.set(0, 1, 0)), u2 <= l && n.set(0, 0, 1), a.crossVectors(i[0], n).normalize(), r[0].crossVectors(i[0], a), s[0].crossVectors(i[0], r[0]);
      for (let e2 = 1; e2 <= t2; e2++) {
        if (r[e2] = r[e2 - 1].clone(), s[e2] = s[e2 - 1].clone(), a.crossVectors(i[e2 - 1], i[e2]), a.length() > Number.EPSILON) {
          a.normalize();
          const t3 = Math.acos(Wn(i[e2 - 1].dot(i[e2]), -1, 1));
          r[e2].applyMatrix4(o.makeRotationAxis(a, t3));
        }
        s[e2].crossVectors(i[e2], r[e2]);
      }
      if (true === e) {
        let e2 = Math.acos(Wn(r[0].dot(r[t2]), -1, 1));
        e2 /= t2, i[0].dot(a.crossVectors(r[0], r[t2])) > 0 && (e2 = -e2);
        for (let n2 = 1; n2 <= t2; n2++) r[n2].applyMatrix4(o.makeRotationAxis(i[n2], e2 * n2)), s[n2].crossVectors(i[n2], r[n2]);
      }
      return { tangents: i, normals: r, binormals: s };
    }
    clone() {
      return new this.constructor().copy(this);
    }
    copy(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
    toJSON() {
      const t2 = { metadata: { version: 4.6, type: "Curve", generator: "Curve.toJSON" } };
      return t2.arcLengthDivisions = this.arcLengthDivisions, t2.type = this.type, t2;
    }
    fromJSON(t2) {
      return this.arcLengthDivisions = t2.arcLengthDivisions, this;
    }
  };
  var Gh = class extends Hh {
    constructor(t2 = 0, e = 0, n = 1, i = 1, r = 0, s = 2 * Math.PI, a = false, o = 0) {
      super(), this.isEllipseCurve = true, this.type = "EllipseCurve", this.aX = t2, this.aY = e, this.xRadius = n, this.yRadius = i, this.aStartAngle = r, this.aEndAngle = s, this.aClockwise = a, this.aRotation = o;
    }
    getPoint(t2, e = new Jn()) {
      const n = e, i = 2 * Math.PI;
      let r = this.aEndAngle - this.aStartAngle;
      const s = Math.abs(r) < Number.EPSILON;
      for (; r < 0; ) r += i;
      for (; r > i; ) r -= i;
      r < Number.EPSILON && (r = s ? 0 : i), true !== this.aClockwise || s || (r === i ? r = -i : r -= i);
      const a = this.aStartAngle + t2 * r;
      let o = this.aX + this.xRadius * Math.cos(a), l = this.aY + this.yRadius * Math.sin(a);
      if (0 !== this.aRotation) {
        const t3 = Math.cos(this.aRotation), e2 = Math.sin(this.aRotation), n2 = o - this.aX, i2 = l - this.aY;
        o = n2 * t3 - i2 * e2 + this.aX, l = n2 * e2 + i2 * t3 + this.aY;
      }
      return n.set(o, l);
    }
    copy(t2) {
      return super.copy(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.aX = this.aX, t2.aY = this.aY, t2.xRadius = this.xRadius, t2.yRadius = this.yRadius, t2.aStartAngle = this.aStartAngle, t2.aEndAngle = this.aEndAngle, t2.aClockwise = this.aClockwise, t2.aRotation = this.aRotation, t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.aX = t2.aX, this.aY = t2.aY, this.xRadius = t2.xRadius, this.yRadius = t2.yRadius, this.aStartAngle = t2.aStartAngle, this.aEndAngle = t2.aEndAngle, this.aClockwise = t2.aClockwise, this.aRotation = t2.aRotation, this;
    }
  };
  var Wh = class extends Gh {
    constructor(t2, e, n, i, r, s) {
      super(t2, e, n, n, i, r, s), this.isArcCurve = true, this.type = "ArcCurve";
    }
  };
  function Xh() {
    let t2 = 0, e = 0, n = 0, i = 0;
    function r(r2, s, a, o) {
      t2 = r2, e = a, n = -3 * r2 + 3 * s - 2 * a - o, i = 2 * r2 - 2 * s + a + o;
    }
    return { initCatmullRom: function(t3, e2, n2, i2, s) {
      r(e2, n2, s * (n2 - t3), s * (i2 - e2));
    }, initNonuniformCatmullRom: function(t3, e2, n2, i2, s, a, o) {
      let l = (e2 - t3) / s - (n2 - t3) / (s + a) + (n2 - e2) / a, c = (n2 - e2) / a - (i2 - e2) / (a + o) + (i2 - n2) / o;
      l *= a, c *= a, r(e2, n2, l, c);
    }, calc: function(r2) {
      const s = r2 * r2;
      return t2 + e * r2 + n * s + i * (s * r2);
    } };
  }
  var jh = new Ci();
  var qh = new Xh();
  var Yh = new Xh();
  var Zh = new Xh();
  var Jh = class extends Hh {
    constructor(t2 = [], e = false, n = "centripetal", i = 0.5) {
      super(), this.isCatmullRomCurve3 = true, this.type = "CatmullRomCurve3", this.points = t2, this.closed = e, this.curveType = n, this.tension = i;
    }
    getPoint(t2, e = new Ci()) {
      const n = e, i = this.points, r = i.length, s = (r - (this.closed ? 0 : 1)) * t2;
      let a, o, l = Math.floor(s), c = s - l;
      this.closed ? l += l > 0 ? 0 : (Math.floor(Math.abs(l) / r) + 1) * r : 0 === c && l === r - 1 && (l = r - 2, c = 1), this.closed || l > 0 ? a = i[(l - 1) % r] : (jh.subVectors(i[0], i[1]).add(i[0]), a = jh);
      const h = i[l % r], u2 = i[(l + 1) % r];
      if (this.closed || l + 2 < r ? o = i[(l + 2) % r] : (jh.subVectors(i[r - 1], i[r - 2]).add(i[r - 1]), o = jh), "centripetal" === this.curveType || "chordal" === this.curveType) {
        const t3 = "chordal" === this.curveType ? 0.5 : 0.25;
        let e2 = Math.pow(a.distanceToSquared(h), t3), n2 = Math.pow(h.distanceToSquared(u2), t3), i2 = Math.pow(u2.distanceToSquared(o), t3);
        n2 < 1e-4 && (n2 = 1), e2 < 1e-4 && (e2 = n2), i2 < 1e-4 && (i2 = n2), qh.initNonuniformCatmullRom(a.x, h.x, u2.x, o.x, e2, n2, i2), Yh.initNonuniformCatmullRom(a.y, h.y, u2.y, o.y, e2, n2, i2), Zh.initNonuniformCatmullRom(a.z, h.z, u2.z, o.z, e2, n2, i2);
      } else "catmullrom" === this.curveType && (qh.initCatmullRom(a.x, h.x, u2.x, o.x, this.tension), Yh.initCatmullRom(a.y, h.y, u2.y, o.y, this.tension), Zh.initCatmullRom(a.z, h.z, u2.z, o.z, this.tension));
      return n.set(qh.calc(c), Yh.calc(c), Zh.calc(c)), n;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(n2.clone());
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n2 = this.points[e];
        t2.points.push(n2.toArray());
      }
      return t2.closed = this.closed, t2.curveType = this.curveType, t2.tension = this.tension, t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(new Ci().fromArray(n2));
      }
      return this.closed = t2.closed, this.curveType = t2.curveType, this.tension = t2.tension, this;
    }
  };
  function Kh(t2, e, n, i, r) {
    const s = 0.5 * (i - e), a = 0.5 * (r - n), o = t2 * t2;
    return (2 * n - 2 * i + s + a) * (t2 * o) + (-3 * n + 3 * i - 2 * s - a) * o + s * t2 + n;
  }
  function $h(t2, e, n, i) {
    return (function(t3, e2) {
      const n2 = 1 - t3;
      return n2 * n2 * e2;
    })(t2, e) + (function(t3, e2) {
      return 2 * (1 - t3) * t3 * e2;
    })(t2, n) + (function(t3, e2) {
      return t3 * t3 * e2;
    })(t2, i);
  }
  function Qh(t2, e, n, i, r) {
    return (function(t3, e2) {
      const n2 = 1 - t3;
      return n2 * n2 * n2 * e2;
    })(t2, e) + (function(t3, e2) {
      const n2 = 1 - t3;
      return 3 * n2 * n2 * t3 * e2;
    })(t2, n) + (function(t3, e2) {
      return 3 * (1 - t3) * t3 * t3 * e2;
    })(t2, i) + (function(t3, e2) {
      return t3 * t3 * t3 * e2;
    })(t2, r);
  }
  var tu = class extends Hh {
    constructor(t2 = new Jn(), e = new Jn(), n = new Jn(), i = new Jn()) {
      super(), this.isCubicBezierCurve = true, this.type = "CubicBezierCurve", this.v0 = t2, this.v1 = e, this.v2 = n, this.v3 = i;
    }
    getPoint(t2, e = new Jn()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(Qh(t2, i.x, r.x, s.x, a.x), Qh(t2, i.y, r.y, s.y, a.y)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var eu = class extends Hh {
    constructor(t2 = new Ci(), e = new Ci(), n = new Ci(), i = new Ci()) {
      super(), this.isCubicBezierCurve3 = true, this.type = "CubicBezierCurve3", this.v0 = t2, this.v1 = e, this.v2 = n, this.v3 = i;
    }
    getPoint(t2, e = new Ci()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2, a = this.v3;
      return n.set(Qh(t2, i.x, r.x, s.x, a.x), Qh(t2, i.y, r.y, s.y, a.y), Qh(t2, i.z, r.z, s.z, a.z)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this.v3.copy(t2.v3), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2.v3 = this.v3.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this.v3.fromArray(t2.v3), this;
    }
  };
  var nu = class extends Hh {
    constructor(t2 = new Jn(), e = new Jn()) {
      super(), this.isLineCurve = true, this.type = "LineCurve", this.v1 = t2, this.v2 = e;
    }
    getPoint(t2, e = new Jn()) {
      const n = e;
      return 1 === t2 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t2).add(this.v1)), n;
    }
    getPointAt(t2, e) {
      return this.getPoint(t2, e);
    }
    getTangent(t2, e = new Jn()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e) {
      return this.getTangent(t2, e);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var iu = class extends Hh {
    constructor(t2 = new Ci(), e = new Ci()) {
      super(), this.isLineCurve3 = true, this.type = "LineCurve3", this.v1 = t2, this.v2 = e;
    }
    getPoint(t2, e = new Ci()) {
      const n = e;
      return 1 === t2 ? n.copy(this.v2) : (n.copy(this.v2).sub(this.v1), n.multiplyScalar(t2).add(this.v1)), n;
    }
    getPointAt(t2, e) {
      return this.getPoint(t2, e);
    }
    getTangent(t2, e = new Ci()) {
      return e.subVectors(this.v2, this.v1).normalize();
    }
    getTangentAt(t2, e) {
      return this.getTangent(t2, e);
    }
    copy(t2) {
      return super.copy(t2), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var ru = class extends Hh {
    constructor(t2 = new Jn(), e = new Jn(), n = new Jn()) {
      super(), this.isQuadraticBezierCurve = true, this.type = "QuadraticBezierCurve", this.v0 = t2, this.v1 = e, this.v2 = n;
    }
    getPoint(t2, e = new Jn()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set($h(t2, i.x, r.x, s.x), $h(t2, i.y, r.y, s.y)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var su = class extends Hh {
    constructor(t2 = new Ci(), e = new Ci(), n = new Ci()) {
      super(), this.isQuadraticBezierCurve3 = true, this.type = "QuadraticBezierCurve3", this.v0 = t2, this.v1 = e, this.v2 = n;
    }
    getPoint(t2, e = new Ci()) {
      const n = e, i = this.v0, r = this.v1, s = this.v2;
      return n.set($h(t2, i.x, r.x, s.x), $h(t2, i.y, r.y, s.y), $h(t2, i.z, r.z, s.z)), n;
    }
    copy(t2) {
      return super.copy(t2), this.v0.copy(t2.v0), this.v1.copy(t2.v1), this.v2.copy(t2.v2), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.v0 = this.v0.toArray(), t2.v1 = this.v1.toArray(), t2.v2 = this.v2.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.v0.fromArray(t2.v0), this.v1.fromArray(t2.v1), this.v2.fromArray(t2.v2), this;
    }
  };
  var au = class extends Hh {
    constructor(t2 = []) {
      super(), this.isSplineCurve = true, this.type = "SplineCurve", this.points = t2;
    }
    getPoint(t2, e = new Jn()) {
      const n = e, i = this.points, r = (i.length - 1) * t2, s = Math.floor(r), a = r - s, o = i[0 === s ? s : s - 1], l = i[s], c = i[s > i.length - 2 ? i.length - 1 : s + 1], h = i[s > i.length - 3 ? i.length - 1 : s + 2];
      return n.set(Kh(a, o.x, l.x, c.x, h.x), Kh(a, o.y, l.y, c.y, h.y)), n;
    }
    copy(t2) {
      super.copy(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(n2.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.points = [];
      for (let e = 0, n = this.points.length; e < n; e++) {
        const n2 = this.points[e];
        t2.points.push(n2.toArray());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.points = [];
      for (let e = 0, n = t2.points.length; e < n; e++) {
        const n2 = t2.points[e];
        this.points.push(new Jn().fromArray(n2));
      }
      return this;
    }
  };
  var ou = Object.freeze({ __proto__: null, ArcCurve: Wh, CatmullRomCurve3: Jh, CubicBezierCurve: tu, CubicBezierCurve3: eu, EllipseCurve: Gh, LineCurve: nu, LineCurve3: iu, QuadraticBezierCurve: ru, QuadraticBezierCurve3: su, SplineCurve: au });
  var lu = class extends Hh {
    constructor() {
      super(), this.type = "CurvePath", this.curves = [], this.autoClose = false;
    }
    add(t2) {
      this.curves.push(t2);
    }
    closePath() {
      const t2 = this.curves[0].getPoint(0), e = this.curves[this.curves.length - 1].getPoint(1);
      if (!t2.equals(e)) {
        const n = true === t2.isVector2 ? "LineCurve" : "LineCurve3";
        this.curves.push(new ou[n](e, t2));
      }
      return this;
    }
    getPoint(t2, e) {
      const n = t2 * this.getLength(), i = this.getCurveLengths();
      let r = 0;
      for (; r < i.length; ) {
        if (i[r] >= n) {
          const t3 = i[r] - n, s = this.curves[r], a = s.getLength(), o = 0 === a ? 0 : 1 - t3 / a;
          return s.getPointAt(o, e);
        }
        r++;
      }
      return null;
    }
    getLength() {
      const t2 = this.getCurveLengths();
      return t2[t2.length - 1];
    }
    updateArcLengths() {
      this.needsUpdate = true, this.cacheLengths = null, this.getCurveLengths();
    }
    getCurveLengths() {
      if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
      const t2 = [];
      let e = 0;
      for (let n = 0, i = this.curves.length; n < i; n++) e += this.curves[n].getLength(), t2.push(e);
      return this.cacheLengths = t2, t2;
    }
    getSpacedPoints(t2 = 40) {
      const e = [];
      for (let n = 0; n <= t2; n++) e.push(this.getPoint(n / t2));
      return this.autoClose && e.push(e[0]), e;
    }
    getPoints(t2 = 12) {
      const e = [];
      let n;
      for (let i = 0, r = this.curves; i < r.length; i++) {
        const s = r[i], a = s.isEllipseCurve ? 2 * t2 : s.isLineCurve || s.isLineCurve3 ? 1 : s.isSplineCurve ? t2 * s.points.length : t2, o = s.getPoints(a);
        for (let t3 = 0; t3 < o.length; t3++) {
          const i2 = o[t3];
          n && n.equals(i2) || (e.push(i2), n = i2);
        }
      }
      return this.autoClose && e.length > 1 && !e[e.length - 1].equals(e[0]) && e.push(e[0]), e;
    }
    copy(t2) {
      super.copy(t2), this.curves = [];
      for (let e = 0, n = t2.curves.length; e < n; e++) {
        const n2 = t2.curves[e];
        this.curves.push(n2.clone());
      }
      return this.autoClose = t2.autoClose, this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.autoClose = this.autoClose, t2.curves = [];
      for (let e = 0, n = this.curves.length; e < n; e++) {
        const n2 = this.curves[e];
        t2.curves.push(n2.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.autoClose = t2.autoClose, this.curves = [];
      for (let e = 0, n = t2.curves.length; e < n; e++) {
        const n2 = t2.curves[e];
        this.curves.push(new ou[n2.type]().fromJSON(n2));
      }
      return this;
    }
  };
  var cu = class extends lu {
    constructor(t2) {
      super(), this.type = "Path", this.currentPoint = new Jn(), t2 && this.setFromPoints(t2);
    }
    setFromPoints(t2) {
      this.moveTo(t2[0].x, t2[0].y);
      for (let e = 1, n = t2.length; e < n; e++) this.lineTo(t2[e].x, t2[e].y);
      return this;
    }
    moveTo(t2, e) {
      return this.currentPoint.set(t2, e), this;
    }
    lineTo(t2, e) {
      const n = new nu(this.currentPoint.clone(), new Jn(t2, e));
      return this.curves.push(n), this.currentPoint.set(t2, e), this;
    }
    quadraticCurveTo(t2, e, n, i) {
      const r = new ru(this.currentPoint.clone(), new Jn(t2, e), new Jn(n, i));
      return this.curves.push(r), this.currentPoint.set(n, i), this;
    }
    bezierCurveTo(t2, e, n, i, r, s) {
      const a = new tu(this.currentPoint.clone(), new Jn(t2, e), new Jn(n, i), new Jn(r, s));
      return this.curves.push(a), this.currentPoint.set(r, s), this;
    }
    splineThru(t2) {
      const e = [this.currentPoint.clone()].concat(t2), n = new au(e);
      return this.curves.push(n), this.currentPoint.copy(t2[t2.length - 1]), this;
    }
    arc(t2, e, n, i, r, s) {
      const a = this.currentPoint.x, o = this.currentPoint.y;
      return this.absarc(t2 + a, e + o, n, i, r, s), this;
    }
    absarc(t2, e, n, i, r, s) {
      return this.absellipse(t2, e, n, n, i, r, s), this;
    }
    ellipse(t2, e, n, i, r, s, a, o) {
      const l = this.currentPoint.x, c = this.currentPoint.y;
      return this.absellipse(t2 + l, e + c, n, i, r, s, a, o), this;
    }
    absellipse(t2, e, n, i, r, s, a, o) {
      const l = new Gh(t2, e, n, i, r, s, a, o);
      if (this.curves.length > 0) {
        const t3 = l.getPoint(0);
        t3.equals(this.currentPoint) || this.lineTo(t3.x, t3.y);
      }
      this.curves.push(l);
      const c = l.getPoint(1);
      return this.currentPoint.copy(c), this;
    }
    copy(t2) {
      return super.copy(t2), this.currentPoint.copy(t2.currentPoint), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.currentPoint = this.currentPoint.toArray(), t2;
    }
    fromJSON(t2) {
      return super.fromJSON(t2), this.currentPoint.fromArray(t2.currentPoint), this;
    }
  };
  var hu = class _hu extends Es {
    constructor(t2 = [new Jn(0, -0.5), new Jn(0.5, 0), new Jn(0, 0.5)], e = 12, n = 0, i = 2 * Math.PI) {
      super(), this.type = "LatheGeometry", this.parameters = { points: t2, segments: e, phiStart: n, phiLength: i }, e = Math.floor(e), i = Wn(i, 0, 2 * Math.PI);
      const r = [], s = [], a = [], o = [], l = [], c = 1 / e, h = new Ci(), u2 = new Jn(), d2 = new Ci(), p2 = new Ci(), m = new Ci();
      let f = 0, g = 0;
      for (let e2 = 0; e2 <= t2.length - 1; e2++) switch (e2) {
        case 0:
          f = t2[e2 + 1].x - t2[e2].x, g = t2[e2 + 1].y - t2[e2].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, m.copy(d2), d2.normalize(), o.push(d2.x, d2.y, d2.z);
          break;
        case t2.length - 1:
          o.push(m.x, m.y, m.z);
          break;
        default:
          f = t2[e2 + 1].x - t2[e2].x, g = t2[e2 + 1].y - t2[e2].y, d2.x = 1 * g, d2.y = -f, d2.z = 0 * g, p2.copy(d2), d2.x += m.x, d2.y += m.y, d2.z += m.z, d2.normalize(), o.push(d2.x, d2.y, d2.z), m.copy(p2);
      }
      for (let r2 = 0; r2 <= e; r2++) {
        const d3 = n + r2 * c * i, p3 = Math.sin(d3), m2 = Math.cos(d3);
        for (let n2 = 0; n2 <= t2.length - 1; n2++) {
          h.x = t2[n2].x * p3, h.y = t2[n2].y, h.z = t2[n2].x * m2, s.push(h.x, h.y, h.z), u2.x = r2 / e, u2.y = n2 / (t2.length - 1), a.push(u2.x, u2.y);
          const i2 = o[3 * n2 + 0] * p3, c2 = o[3 * n2 + 1], d4 = o[3 * n2 + 0] * m2;
          l.push(i2, c2, d4);
        }
      }
      for (let n2 = 0; n2 < e; n2++) for (let e2 = 0; e2 < t2.length - 1; e2++) {
        const i2 = e2 + n2 * t2.length, s2 = i2, a2 = i2 + t2.length, o2 = i2 + t2.length + 1, l2 = i2 + 1;
        r.push(s2, a2, l2), r.push(o2, l2, a2);
      }
      this.setIndex(r), this.setAttribute("position", new _s(s, 3)), this.setAttribute("uv", new _s(a, 2)), this.setAttribute("normal", new _s(l, 3));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _hu(t2.points, t2.segments, t2.phiStart, t2.phiLength);
    }
  };
  var uu = class _uu extends hu {
    constructor(t2 = 1, e = 1, n = 4, i = 8) {
      const r = new cu();
      r.absarc(0, -e / 2, t2, 1.5 * Math.PI, 0), r.absarc(0, e / 2, t2, 0, 0.5 * Math.PI), super(r.getPoints(n), i), this.type = "CapsuleGeometry", this.parameters = { radius: t2, length: e, capSegments: n, radialSegments: i };
    }
    static fromJSON(t2) {
      return new _uu(t2.radius, t2.length, t2.capSegments, t2.radialSegments);
    }
  };
  var du = class _du extends Es {
    constructor(t2 = 1, e = 32, n = 0, i = 2 * Math.PI) {
      super(), this.type = "CircleGeometry", this.parameters = { radius: t2, segments: e, thetaStart: n, thetaLength: i }, e = Math.max(3, e);
      const r = [], s = [], a = [], o = [], l = new Ci(), c = new Jn();
      s.push(0, 0, 0), a.push(0, 0, 1), o.push(0.5, 0.5);
      for (let r2 = 0, h = 3; r2 <= e; r2++, h += 3) {
        const u2 = n + r2 / e * i;
        l.x = t2 * Math.cos(u2), l.y = t2 * Math.sin(u2), s.push(l.x, l.y, l.z), a.push(0, 0, 1), c.x = (s[h] / t2 + 1) / 2, c.y = (s[h + 1] / t2 + 1) / 2, o.push(c.x, c.y);
      }
      for (let t3 = 1; t3 <= e; t3++) r.push(t3, t3 + 1, 0);
      this.setIndex(r), this.setAttribute("position", new _s(s, 3)), this.setAttribute("normal", new _s(a, 3)), this.setAttribute("uv", new _s(o, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _du(t2.radius, t2.segments, t2.thetaStart, t2.thetaLength);
    }
  };
  var pu = class _pu extends Es {
    constructor(t2 = 1, e = 1, n = 1, i = 32, r = 1, s = false, a = 0, o = 2 * Math.PI) {
      super(), this.type = "CylinderGeometry", this.parameters = { radiusTop: t2, radiusBottom: e, height: n, radialSegments: i, heightSegments: r, openEnded: s, thetaStart: a, thetaLength: o };
      const l = this;
      i = Math.floor(i), r = Math.floor(r);
      const c = [], h = [], u2 = [], d2 = [];
      let p2 = 0;
      const m = [], f = n / 2;
      let g = 0;
      function v(n2) {
        const r2 = p2, s2 = new Jn(), m2 = new Ci();
        let v2 = 0;
        const _ = true === n2 ? t2 : e, x = true === n2 ? 1 : -1;
        for (let t3 = 1; t3 <= i; t3++) h.push(0, f * x, 0), u2.push(0, x, 0), d2.push(0.5, 0.5), p2++;
        const y2 = p2;
        for (let t3 = 0; t3 <= i; t3++) {
          const e2 = t3 / i * o + a, n3 = Math.cos(e2), r3 = Math.sin(e2);
          m2.x = _ * r3, m2.y = f * x, m2.z = _ * n3, h.push(m2.x, m2.y, m2.z), u2.push(0, x, 0), s2.x = 0.5 * n3 + 0.5, s2.y = 0.5 * r3 * x + 0.5, d2.push(s2.x, s2.y), p2++;
        }
        for (let t3 = 0; t3 < i; t3++) {
          const e2 = r2 + t3, i2 = y2 + t3;
          true === n2 ? c.push(i2, i2 + 1, e2) : c.push(i2 + 1, i2, e2), v2 += 3;
        }
        l.addGroup(g, v2, true === n2 ? 1 : 2), g += v2;
      }
      !(function() {
        const s2 = new Ci(), v2 = new Ci();
        let _ = 0;
        const x = (e - t2) / n;
        for (let l2 = 0; l2 <= r; l2++) {
          const c2 = [], g2 = l2 / r, _2 = g2 * (e - t2) + t2;
          for (let t3 = 0; t3 <= i; t3++) {
            const e2 = t3 / i, r2 = e2 * o + a, l3 = Math.sin(r2), m2 = Math.cos(r2);
            v2.x = _2 * l3, v2.y = -g2 * n + f, v2.z = _2 * m2, h.push(v2.x, v2.y, v2.z), s2.set(l3, x, m2).normalize(), u2.push(s2.x, s2.y, s2.z), d2.push(e2, 1 - g2), c2.push(p2++);
          }
          m.push(c2);
        }
        for (let n2 = 0; n2 < i; n2++) for (let i2 = 0; i2 < r; i2++) {
          const s3 = m[i2][n2], a2 = m[i2 + 1][n2], o2 = m[i2 + 1][n2 + 1], l2 = m[i2][n2 + 1];
          (t2 > 0 || 0 !== i2) && (c.push(s3, a2, l2), _ += 3), (e > 0 || i2 !== r - 1) && (c.push(a2, o2, l2), _ += 3);
        }
        l.addGroup(g, _, 0), g += _;
      })(), false === s && (t2 > 0 && v(true), e > 0 && v(false)), this.setIndex(c), this.setAttribute("position", new _s(h, 3)), this.setAttribute("normal", new _s(u2, 3)), this.setAttribute("uv", new _s(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _pu(t2.radiusTop, t2.radiusBottom, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var mu = class _mu extends pu {
    constructor(t2 = 1, e = 1, n = 32, i = 1, r = false, s = 0, a = 2 * Math.PI) {
      super(0, t2, e, n, i, r, s, a), this.type = "ConeGeometry", this.parameters = { radius: t2, height: e, radialSegments: n, heightSegments: i, openEnded: r, thetaStart: s, thetaLength: a };
    }
    static fromJSON(t2) {
      return new _mu(t2.radius, t2.height, t2.radialSegments, t2.heightSegments, t2.openEnded, t2.thetaStart, t2.thetaLength);
    }
  };
  var fu = class _fu extends Es {
    constructor(t2 = [], e = [], n = 1, i = 0) {
      super(), this.type = "PolyhedronGeometry", this.parameters = { vertices: t2, indices: e, radius: n, detail: i };
      const r = [], s = [];
      function a(t3, e2, n2, i2) {
        const r2 = i2 + 1, s2 = [];
        for (let i3 = 0; i3 <= r2; i3++) {
          s2[i3] = [];
          const a2 = t3.clone().lerp(n2, i3 / r2), o2 = e2.clone().lerp(n2, i3 / r2), l2 = r2 - i3;
          for (let t4 = 0; t4 <= l2; t4++) s2[i3][t4] = 0 === t4 && i3 === r2 ? a2 : a2.clone().lerp(o2, t4 / l2);
        }
        for (let t4 = 0; t4 < r2; t4++) for (let e3 = 0; e3 < 2 * (r2 - t4) - 1; e3++) {
          const n3 = Math.floor(e3 / 2);
          e3 % 2 == 0 ? (o(s2[t4][n3 + 1]), o(s2[t4 + 1][n3]), o(s2[t4][n3])) : (o(s2[t4][n3 + 1]), o(s2[t4 + 1][n3 + 1]), o(s2[t4 + 1][n3]));
        }
      }
      function o(t3) {
        r.push(t3.x, t3.y, t3.z);
      }
      function l(e2, n2) {
        const i2 = 3 * e2;
        n2.x = t2[i2 + 0], n2.y = t2[i2 + 1], n2.z = t2[i2 + 2];
      }
      function c(t3, e2, n2, i2) {
        i2 < 0 && 1 === t3.x && (s[e2] = t3.x - 1), 0 === n2.x && 0 === n2.z && (s[e2] = i2 / 2 / Math.PI + 0.5);
      }
      function h(t3) {
        return Math.atan2(t3.z, -t3.x);
      }
      !(function(t3) {
        const n2 = new Ci(), i2 = new Ci(), r2 = new Ci();
        for (let s2 = 0; s2 < e.length; s2 += 3) l(e[s2 + 0], n2), l(e[s2 + 1], i2), l(e[s2 + 2], r2), a(n2, i2, r2, t3);
      })(i), (function(t3) {
        const e2 = new Ci();
        for (let n2 = 0; n2 < r.length; n2 += 3) e2.x = r[n2 + 0], e2.y = r[n2 + 1], e2.z = r[n2 + 2], e2.normalize().multiplyScalar(t3), r[n2 + 0] = e2.x, r[n2 + 1] = e2.y, r[n2 + 2] = e2.z;
      })(n), (function() {
        const t3 = new Ci();
        for (let n2 = 0; n2 < r.length; n2 += 3) {
          t3.x = r[n2 + 0], t3.y = r[n2 + 1], t3.z = r[n2 + 2];
          const i2 = h(t3) / 2 / Math.PI + 0.5, a2 = (e2 = t3, Math.atan2(-e2.y, Math.sqrt(e2.x * e2.x + e2.z * e2.z)) / Math.PI + 0.5);
          s.push(i2, 1 - a2);
        }
        var e2;
        (function() {
          const t4 = new Ci(), e3 = new Ci(), n2 = new Ci(), i2 = new Ci(), a2 = new Jn(), o2 = new Jn(), l2 = new Jn();
          for (let u2 = 0, d2 = 0; u2 < r.length; u2 += 9, d2 += 6) {
            t4.set(r[u2 + 0], r[u2 + 1], r[u2 + 2]), e3.set(r[u2 + 3], r[u2 + 4], r[u2 + 5]), n2.set(r[u2 + 6], r[u2 + 7], r[u2 + 8]), a2.set(s[d2 + 0], s[d2 + 1]), o2.set(s[d2 + 2], s[d2 + 3]), l2.set(s[d2 + 4], s[d2 + 5]), i2.copy(t4).add(e3).add(n2).divideScalar(3);
            const p2 = h(i2);
            c(a2, d2 + 0, t4, p2), c(o2, d2 + 2, e3, p2), c(l2, d2 + 4, n2, p2);
          }
        })(), (function() {
          for (let t4 = 0; t4 < s.length; t4 += 6) {
            const e3 = s[t4 + 0], n2 = s[t4 + 2], i2 = s[t4 + 4], r2 = Math.max(e3, n2, i2), a2 = Math.min(e3, n2, i2);
            r2 > 0.9 && a2 < 0.1 && (e3 < 0.2 && (s[t4 + 0] += 1), n2 < 0.2 && (s[t4 + 2] += 1), i2 < 0.2 && (s[t4 + 4] += 1));
          }
        })();
      })(), this.setAttribute("position", new _s(r, 3)), this.setAttribute("normal", new _s(r.slice(), 3)), this.setAttribute("uv", new _s(s, 2)), 0 === i ? this.computeVertexNormals() : this.normalizeNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _fu(t2.vertices, t2.indices, t2.radius, t2.details);
    }
  };
  var gu = class _gu extends fu {
    constructor(t2 = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2, i = 1 / n;
      super([-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, -i, -n, 0, -i, n, 0, i, -n, 0, i, n, 0, -n, 0, -i, n, 0, -i, -n, 0, i, n, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], t2, e), this.type = "DodecahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _gu(t2.radius, t2.detail);
    }
  };
  var vu = new Ci();
  var _u = new Ci();
  var xu = new Ci();
  var yu = new jr();
  var Mu = class extends Es {
    constructor(t2 = null, e = 1) {
      if (super(), this.type = "EdgesGeometry", this.parameters = { geometry: t2, thresholdAngle: e }, null !== t2) {
        const n = 4, i = Math.pow(10, n), r = Math.cos(Vn * e), s = t2.getIndex(), a = t2.getAttribute("position"), o = s ? s.count : a.count, l = [0, 0, 0], c = ["a", "b", "c"], h = new Array(3), u2 = {}, d2 = [];
        for (let t3 = 0; t3 < o; t3 += 3) {
          s ? (l[0] = s.getX(t3), l[1] = s.getX(t3 + 1), l[2] = s.getX(t3 + 2)) : (l[0] = t3, l[1] = t3 + 1, l[2] = t3 + 2);
          const { a: e2, b: n2, c: o2 } = yu;
          if (e2.fromBufferAttribute(a, l[0]), n2.fromBufferAttribute(a, l[1]), o2.fromBufferAttribute(a, l[2]), yu.getNormal(xu), h[0] = `${Math.round(e2.x * i)},${Math.round(e2.y * i)},${Math.round(e2.z * i)}`, h[1] = `${Math.round(n2.x * i)},${Math.round(n2.y * i)},${Math.round(n2.z * i)}`, h[2] = `${Math.round(o2.x * i)},${Math.round(o2.y * i)},${Math.round(o2.z * i)}`, h[0] !== h[1] && h[1] !== h[2] && h[2] !== h[0]) for (let t4 = 0; t4 < 3; t4++) {
            const e3 = (t4 + 1) % 3, n3 = h[t4], i2 = h[e3], s2 = yu[c[t4]], a2 = yu[c[e3]], o3 = `${n3}_${i2}`, p2 = `${i2}_${n3}`;
            p2 in u2 && u2[p2] ? (xu.dot(u2[p2].normal) <= r && (d2.push(s2.x, s2.y, s2.z), d2.push(a2.x, a2.y, a2.z)), u2[p2] = null) : o3 in u2 || (u2[o3] = { index0: l[t4], index1: l[e3], normal: xu.clone() });
          }
        }
        for (const t3 in u2) if (u2[t3]) {
          const { index0: e2, index1: n2 } = u2[t3];
          vu.fromBufferAttribute(a, e2), _u.fromBufferAttribute(a, n2), d2.push(vu.x, vu.y, vu.z), d2.push(_u.x, _u.y, _u.z);
        }
        this.setAttribute("position", new _s(d2, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  var Su = class extends cu {
    constructor(t2) {
      super(t2), this.uuid = Gn(), this.type = "Shape", this.holes = [];
    }
    getPointsHoles(t2) {
      const e = [];
      for (let n = 0, i = this.holes.length; n < i; n++) e[n] = this.holes[n].getPoints(t2);
      return e;
    }
    extractPoints(t2) {
      return { shape: this.getPoints(t2), holes: this.getPointsHoles(t2) };
    }
    copy(t2) {
      super.copy(t2), this.holes = [];
      for (let e = 0, n = t2.holes.length; e < n; e++) {
        const n2 = t2.holes[e];
        this.holes.push(n2.clone());
      }
      return this;
    }
    toJSON() {
      const t2 = super.toJSON();
      t2.uuid = this.uuid, t2.holes = [];
      for (let e = 0, n = this.holes.length; e < n; e++) {
        const n2 = this.holes[e];
        t2.holes.push(n2.toJSON());
      }
      return t2;
    }
    fromJSON(t2) {
      super.fromJSON(t2), this.uuid = t2.uuid, this.holes = [];
      for (let e = 0, n = t2.holes.length; e < n; e++) {
        const n2 = t2.holes[e];
        this.holes.push(new cu().fromJSON(n2));
      }
      return this;
    }
  };
  var bu = function(t2, e, n = 2) {
    const i = e && e.length, r = i ? e[0] * n : t2.length;
    let s = Tu(t2, 0, r, n, true);
    const a = [];
    if (!s || s.next === s.prev) return a;
    let o, l, c, h, u2, d2, p2;
    if (i && (s = (function(t3, e2, n2, i2) {
      const r2 = [];
      let s2, a2, o2, l2, c2;
      for (s2 = 0, a2 = e2.length; s2 < a2; s2++) o2 = e2[s2] * i2, l2 = s2 < a2 - 1 ? e2[s2 + 1] * i2 : t3.length, c2 = Tu(t3, o2, l2, i2, false), c2 === c2.next && (c2.steiner = true), r2.push(Nu(c2));
      for (r2.sort(Pu), s2 = 0; s2 < r2.length; s2++) n2 = Lu(r2[s2], n2);
      return n2;
    })(t2, e, s, n)), t2.length > 80 * n) {
      o = c = t2[0], l = h = t2[1];
      for (let e2 = n; e2 < r; e2 += n) u2 = t2[e2], d2 = t2[e2 + 1], u2 < o && (o = u2), d2 < l && (l = d2), u2 > c && (c = u2), d2 > h && (h = d2);
      p2 = Math.max(c - o, h - l), p2 = 0 !== p2 ? 32767 / p2 : 0;
    }
    return Eu(s, a, n, o, l, p2, 0), a;
  };
  function Tu(t2, e, n, i, r) {
    let s, a;
    if (r === (function(t3, e2, n2, i2) {
      let r2 = 0;
      for (let s2 = e2, a2 = n2 - i2; s2 < n2; s2 += i2) r2 += (t3[a2] - t3[s2]) * (t3[s2 + 1] + t3[a2 + 1]), a2 = s2;
      return r2;
    })(t2, e, n, i) > 0) for (s = e; s < n; s += i) a = Xu(s, t2[s], t2[s + 1], a);
    else for (s = n - i; s >= e; s -= i) a = Xu(s, t2[s], t2[s + 1], a);
    return a && zu(a, a.next) && (ju(a), a = a.next), a;
  }
  function wu(t2, e) {
    if (!t2) return t2;
    e || (e = t2);
    let n, i = t2;
    do {
      if (n = false, i.steiner || !zu(i, i.next) && 0 !== Bu(i.prev, i, i.next)) i = i.next;
      else {
        if (ju(i), i = e = i.prev, i === i.next) break;
        n = true;
      }
    } while (n || i !== e);
    return e;
  }
  function Eu(t2, e, n, i, r, s, a) {
    if (!t2) return;
    !a && s && (function(t3, e2, n2, i2) {
      let r2 = t3;
      do {
        0 === r2.z && (r2.z = Du(r2.x, r2.y, e2, n2, i2)), r2.prevZ = r2.prev, r2.nextZ = r2.next, r2 = r2.next;
      } while (r2 !== t3);
      r2.prevZ.nextZ = null, r2.prevZ = null, (function(t4) {
        let e3, n3, i3, r3, s2, a2, o2, l2, c2 = 1;
        do {
          for (n3 = t4, t4 = null, s2 = null, a2 = 0; n3; ) {
            for (a2++, i3 = n3, o2 = 0, e3 = 0; e3 < c2 && (o2++, i3 = i3.nextZ, i3); e3++) ;
            for (l2 = c2; o2 > 0 || l2 > 0 && i3; ) 0 !== o2 && (0 === l2 || !i3 || n3.z <= i3.z) ? (r3 = n3, n3 = n3.nextZ, o2--) : (r3 = i3, i3 = i3.nextZ, l2--), s2 ? s2.nextZ = r3 : t4 = r3, r3.prevZ = s2, s2 = r3;
            n3 = i3;
          }
          s2.nextZ = null, c2 *= 2;
        } while (a2 > 1);
      })(r2);
    })(t2, i, r, s);
    let o, l, c = t2;
    for (; t2.prev !== t2.next; ) if (o = t2.prev, l = t2.next, s ? Ru(t2, i, r, s) : Au(t2)) e.push(o.i / n | 0), e.push(t2.i / n | 0), e.push(l.i / n | 0), ju(t2), t2 = l.next, c = l.next;
    else if ((t2 = l) === c) {
      a ? 1 === a ? Eu(t2 = Cu(wu(t2), e, n), e, n, i, r, s, 2) : 2 === a && Iu(t2, e, n, i, r, s) : Eu(wu(t2), e, n, i, r, s, 1);
      break;
    }
  }
  function Au(t2) {
    const e = t2.prev, n = t2, i = t2.next;
    if (Bu(e, n, i) >= 0) return false;
    const r = e.x, s = n.x, a = i.x, o = e.y, l = n.y, c = i.y, h = r < s ? r < a ? r : a : s < a ? s : a, u2 = o < l ? o < c ? o : c : l < c ? l : c, d2 = r > s ? r > a ? r : a : s > a ? s : a, p2 = o > l ? o > c ? o : c : l > c ? l : c;
    let m = i.next;
    for (; m !== e; ) {
      if (m.x >= h && m.x <= d2 && m.y >= u2 && m.y <= p2 && Ou(r, o, s, l, a, c, m.x, m.y) && Bu(m.prev, m, m.next) >= 0) return false;
      m = m.next;
    }
    return true;
  }
  function Ru(t2, e, n, i) {
    const r = t2.prev, s = t2, a = t2.next;
    if (Bu(r, s, a) >= 0) return false;
    const o = r.x, l = s.x, c = a.x, h = r.y, u2 = s.y, d2 = a.y, p2 = o < l ? o < c ? o : c : l < c ? l : c, m = h < u2 ? h < d2 ? h : d2 : u2 < d2 ? u2 : d2, f = o > l ? o > c ? o : c : l > c ? l : c, g = h > u2 ? h > d2 ? h : d2 : u2 > d2 ? u2 : d2, v = Du(p2, m, e, n, i), _ = Du(f, g, e, n, i);
    let x = t2.prevZ, y2 = t2.nextZ;
    for (; x && x.z >= v && y2 && y2.z <= _; ) {
      if (x.x >= p2 && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Ou(o, h, l, u2, c, d2, x.x, x.y) && Bu(x.prev, x, x.next) >= 0) return false;
      if (x = x.prevZ, y2.x >= p2 && y2.x <= f && y2.y >= m && y2.y <= g && y2 !== r && y2 !== a && Ou(o, h, l, u2, c, d2, y2.x, y2.y) && Bu(y2.prev, y2, y2.next) >= 0) return false;
      y2 = y2.nextZ;
    }
    for (; x && x.z >= v; ) {
      if (x.x >= p2 && x.x <= f && x.y >= m && x.y <= g && x !== r && x !== a && Ou(o, h, l, u2, c, d2, x.x, x.y) && Bu(x.prev, x, x.next) >= 0) return false;
      x = x.prevZ;
    }
    for (; y2 && y2.z <= _; ) {
      if (y2.x >= p2 && y2.x <= f && y2.y >= m && y2.y <= g && y2 !== r && y2 !== a && Ou(o, h, l, u2, c, d2, y2.x, y2.y) && Bu(y2.prev, y2, y2.next) >= 0) return false;
      y2 = y2.nextZ;
    }
    return true;
  }
  function Cu(t2, e, n) {
    let i = t2;
    do {
      const r = i.prev, s = i.next.next;
      !zu(r, s) && ku(r, i, i.next, s) && Gu(r, s) && Gu(s, r) && (e.push(r.i / n | 0), e.push(i.i / n | 0), e.push(s.i / n | 0), ju(i), ju(i.next), i = t2 = s), i = i.next;
    } while (i !== t2);
    return wu(i);
  }
  function Iu(t2, e, n, i, r, s) {
    let a = t2;
    do {
      let t3 = a.next.next;
      for (; t3 !== a.prev; ) {
        if (a.i !== t3.i && Fu(a, t3)) {
          let o = Wu(a, t3);
          return a = wu(a, a.next), o = wu(o, o.next), Eu(a, e, n, i, r, s, 0), void Eu(o, e, n, i, r, s, 0);
        }
        t3 = t3.next;
      }
      a = a.next;
    } while (a !== t2);
  }
  function Pu(t2, e) {
    return t2.x - e.x;
  }
  function Lu(t2, e) {
    const n = (function(t3, e2) {
      let n2, i2 = e2, r = -1 / 0;
      const s = t3.x, a = t3.y;
      do {
        if (a <= i2.y && a >= i2.next.y && i2.next.y !== i2.y) {
          const t4 = i2.x + (a - i2.y) * (i2.next.x - i2.x) / (i2.next.y - i2.y);
          if (t4 <= s && t4 > r && (r = t4, n2 = i2.x < i2.next.x ? i2 : i2.next, t4 === s)) return n2;
        }
        i2 = i2.next;
      } while (i2 !== e2);
      if (!n2) return null;
      const o = n2, l = n2.x, c = n2.y;
      let h, u2 = 1 / 0;
      i2 = n2;
      do {
        s >= i2.x && i2.x >= l && s !== i2.x && Ou(a < c ? s : r, a, l, c, a < c ? r : s, a, i2.x, i2.y) && (h = Math.abs(a - i2.y) / (s - i2.x), Gu(i2, t3) && (h < u2 || h === u2 && (i2.x > n2.x || i2.x === n2.x && Uu(n2, i2))) && (n2 = i2, u2 = h)), i2 = i2.next;
      } while (i2 !== o);
      return n2;
    })(t2, e);
    if (!n) return e;
    const i = Wu(n, t2);
    return wu(i, i.next), wu(n, n.next);
  }
  function Uu(t2, e) {
    return Bu(t2.prev, t2, e.prev) < 0 && Bu(e.next, t2, t2.next) < 0;
  }
  function Du(t2, e, n, i, r) {
    return (t2 = 1431655765 & ((t2 = 858993459 & ((t2 = 252645135 & ((t2 = 16711935 & ((t2 = (t2 - n) * r | 0) | t2 << 8)) | t2 << 4)) | t2 << 2)) | t2 << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = (e - i) * r | 0) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
  }
  function Nu(t2) {
    let e = t2, n = t2;
    do {
      (e.x < n.x || e.x === n.x && e.y < n.y) && (n = e), e = e.next;
    } while (e !== t2);
    return n;
  }
  function Ou(t2, e, n, i, r, s, a, o) {
    return (r - a) * (e - o) >= (t2 - a) * (s - o) && (t2 - a) * (i - o) >= (n - a) * (e - o) && (n - a) * (s - o) >= (r - a) * (i - o);
  }
  function Fu(t2, e) {
    return t2.next.i !== e.i && t2.prev.i !== e.i && !(function(t3, e2) {
      let n = t3;
      do {
        if (n.i !== t3.i && n.next.i !== t3.i && n.i !== e2.i && n.next.i !== e2.i && ku(n, n.next, t3, e2)) return true;
        n = n.next;
      } while (n !== t3);
      return false;
    })(t2, e) && (Gu(t2, e) && Gu(e, t2) && (function(t3, e2) {
      let n = t3, i = false;
      const r = (t3.x + e2.x) / 2, s = (t3.y + e2.y) / 2;
      do {
        n.y > s != n.next.y > s && n.next.y !== n.y && r < (n.next.x - n.x) * (s - n.y) / (n.next.y - n.y) + n.x && (i = !i), n = n.next;
      } while (n !== t3);
      return i;
    })(t2, e) && (Bu(t2.prev, t2, e.prev) || Bu(t2, e.prev, e)) || zu(t2, e) && Bu(t2.prev, t2, t2.next) > 0 && Bu(e.prev, e, e.next) > 0);
  }
  function Bu(t2, e, n) {
    return (e.y - t2.y) * (n.x - e.x) - (e.x - t2.x) * (n.y - e.y);
  }
  function zu(t2, e) {
    return t2.x === e.x && t2.y === e.y;
  }
  function ku(t2, e, n, i) {
    const r = Hu(Bu(t2, e, n)), s = Hu(Bu(t2, e, i)), a = Hu(Bu(n, i, t2)), o = Hu(Bu(n, i, e));
    return r !== s && a !== o || (!(0 !== r || !Vu(t2, n, e)) || (!(0 !== s || !Vu(t2, i, e)) || (!(0 !== a || !Vu(n, t2, i)) || !(0 !== o || !Vu(n, e, i)))));
  }
  function Vu(t2, e, n) {
    return e.x <= Math.max(t2.x, n.x) && e.x >= Math.min(t2.x, n.x) && e.y <= Math.max(t2.y, n.y) && e.y >= Math.min(t2.y, n.y);
  }
  function Hu(t2) {
    return t2 > 0 ? 1 : t2 < 0 ? -1 : 0;
  }
  function Gu(t2, e) {
    return Bu(t2.prev, t2, t2.next) < 0 ? Bu(t2, e, t2.next) >= 0 && Bu(t2, t2.prev, e) >= 0 : Bu(t2, e, t2.prev) < 0 || Bu(t2, t2.next, e) < 0;
  }
  function Wu(t2, e) {
    const n = new qu(t2.i, t2.x, t2.y), i = new qu(e.i, e.x, e.y), r = t2.next, s = e.prev;
    return t2.next = e, e.prev = t2, n.next = r, r.prev = n, i.next = n, n.prev = i, s.next = i, i.prev = s, i;
  }
  function Xu(t2, e, n, i) {
    const r = new qu(t2, e, n);
    return i ? (r.next = i.next, r.prev = i, i.next.prev = r, i.next = r) : (r.prev = r, r.next = r), r;
  }
  function ju(t2) {
    t2.next.prev = t2.prev, t2.prev.next = t2.next, t2.prevZ && (t2.prevZ.nextZ = t2.nextZ), t2.nextZ && (t2.nextZ.prevZ = t2.prevZ);
  }
  function qu(t2, e, n) {
    this.i = t2, this.x = e, this.y = n, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = false;
  }
  var Yu = class _Yu {
    static area(t2) {
      const e = t2.length;
      let n = 0;
      for (let i = e - 1, r = 0; r < e; i = r++) n += t2[i].x * t2[r].y - t2[r].x * t2[i].y;
      return 0.5 * n;
    }
    static isClockWise(t2) {
      return _Yu.area(t2) < 0;
    }
    static triangulateShape(t2, e) {
      const n = [], i = [], r = [];
      Zu(t2), Ju(n, t2);
      let s = t2.length;
      e.forEach(Zu);
      for (let t3 = 0; t3 < e.length; t3++) i.push(s), s += e[t3].length, Ju(n, e[t3]);
      const a = bu(n, i);
      for (let t3 = 0; t3 < a.length; t3 += 3) r.push(a.slice(t3, t3 + 3));
      return r;
    }
  };
  function Zu(t2) {
    const e = t2.length;
    e > 2 && t2[e - 1].equals(t2[0]) && t2.pop();
  }
  function Ju(t2, e) {
    for (let n = 0; n < e.length; n++) t2.push(e[n].x), t2.push(e[n].y);
  }
  var Ku = class _Ku extends Es {
    constructor(t2 = new Su([new Jn(0.5, 0.5), new Jn(-0.5, 0.5), new Jn(-0.5, -0.5), new Jn(0.5, -0.5)]), e = {}) {
      super(), this.type = "ExtrudeGeometry", this.parameters = { shapes: t2, options: e }, t2 = Array.isArray(t2) ? t2 : [t2];
      const n = this, i = [], r = [];
      for (let e2 = 0, n2 = t2.length; e2 < n2; e2++) {
        s(t2[e2]);
      }
      function s(t3) {
        const s2 = [], a = void 0 !== e.curveSegments ? e.curveSegments : 12, o = void 0 !== e.steps ? e.steps : 1, l = void 0 !== e.depth ? e.depth : 1;
        let c = void 0 === e.bevelEnabled || e.bevelEnabled, h = void 0 !== e.bevelThickness ? e.bevelThickness : 0.2, u2 = void 0 !== e.bevelSize ? e.bevelSize : h - 0.1, d2 = void 0 !== e.bevelOffset ? e.bevelOffset : 0, p2 = void 0 !== e.bevelSegments ? e.bevelSegments : 3;
        const m = e.extrudePath, f = void 0 !== e.UVGenerator ? e.UVGenerator : $u;
        let g, v, _, x, y2, M2 = false;
        m && (g = m.getSpacedPoints(o), M2 = true, c = false, v = m.computeFrenetFrames(o, false), _ = new Ci(), x = new Ci(), y2 = new Ci()), c || (p2 = 0, h = 0, u2 = 0, d2 = 0);
        const S2 = t3.extractPoints(a);
        let b = S2.shape;
        const T = S2.holes;
        if (!Yu.isClockWise(b)) {
          b = b.reverse();
          for (let t4 = 0, e2 = T.length; t4 < e2; t4++) {
            const e3 = T[t4];
            Yu.isClockWise(e3) && (T[t4] = e3.reverse());
          }
        }
        const w2 = Yu.triangulateShape(b, T), E2 = b;
        for (let t4 = 0, e2 = T.length; t4 < e2; t4++) {
          const e3 = T[t4];
          b = b.concat(e3);
        }
        function A2(t4, e2, n2) {
          return e2 || console.error("THREE.ExtrudeGeometry: vec does not exist"), t4.clone().addScaledVector(e2, n2);
        }
        const R2 = b.length, C2 = w2.length;
        function I2(t4, e2, n2) {
          let i2, r2, s3;
          const a2 = t4.x - e2.x, o2 = t4.y - e2.y, l2 = n2.x - t4.x, c2 = n2.y - t4.y, h2 = a2 * a2 + o2 * o2, u3 = a2 * c2 - o2 * l2;
          if (Math.abs(u3) > Number.EPSILON) {
            const u4 = Math.sqrt(h2), d3 = Math.sqrt(l2 * l2 + c2 * c2), p3 = e2.x - o2 / u4, m2 = e2.y + a2 / u4, f2 = ((n2.x - c2 / d3 - p3) * c2 - (n2.y + l2 / d3 - m2) * l2) / (a2 * c2 - o2 * l2);
            i2 = p3 + a2 * f2 - t4.x, r2 = m2 + o2 * f2 - t4.y;
            const g2 = i2 * i2 + r2 * r2;
            if (g2 <= 2) return new Jn(i2, r2);
            s3 = Math.sqrt(g2 / 2);
          } else {
            let t5 = false;
            a2 > Number.EPSILON ? l2 > Number.EPSILON && (t5 = true) : a2 < -Number.EPSILON ? l2 < -Number.EPSILON && (t5 = true) : Math.sign(o2) === Math.sign(c2) && (t5 = true), t5 ? (i2 = -o2, r2 = a2, s3 = Math.sqrt(h2)) : (i2 = a2, r2 = o2, s3 = Math.sqrt(h2 / 2));
          }
          return new Jn(i2 / s3, r2 / s3);
        }
        const P2 = [];
        for (let t4 = 0, e2 = E2.length, n2 = e2 - 1, i2 = t4 + 1; t4 < e2; t4++, n2++, i2++) n2 === e2 && (n2 = 0), i2 === e2 && (i2 = 0), P2[t4] = I2(E2[t4], E2[n2], E2[i2]);
        const L2 = [];
        let U2, D2 = P2.concat();
        for (let t4 = 0, e2 = T.length; t4 < e2; t4++) {
          const e3 = T[t4];
          U2 = [];
          for (let t5 = 0, n2 = e3.length, i2 = n2 - 1, r2 = t5 + 1; t5 < n2; t5++, i2++, r2++) i2 === n2 && (i2 = 0), r2 === n2 && (r2 = 0), U2[t5] = I2(e3[t5], e3[i2], e3[r2]);
          L2.push(U2), D2 = D2.concat(U2);
        }
        for (let t4 = 0; t4 < p2; t4++) {
          const e2 = t4 / p2, n2 = h * Math.cos(e2 * Math.PI / 2), i2 = u2 * Math.sin(e2 * Math.PI / 2) + d2;
          for (let t5 = 0, e3 = E2.length; t5 < e3; t5++) {
            const e4 = A2(E2[t5], P2[t5], i2);
            F2(e4.x, e4.y, -n2);
          }
          for (let t5 = 0, e3 = T.length; t5 < e3; t5++) {
            const e4 = T[t5];
            U2 = L2[t5];
            for (let t6 = 0, r2 = e4.length; t6 < r2; t6++) {
              const r3 = A2(e4[t6], U2[t6], i2);
              F2(r3.x, r3.y, -n2);
            }
          }
        }
        const N2 = u2 + d2;
        for (let t4 = 0; t4 < R2; t4++) {
          const e2 = c ? A2(b[t4], D2[t4], N2) : b[t4];
          M2 ? (x.copy(v.normals[0]).multiplyScalar(e2.x), _.copy(v.binormals[0]).multiplyScalar(e2.y), y2.copy(g[0]).add(x).add(_), F2(y2.x, y2.y, y2.z)) : F2(e2.x, e2.y, 0);
        }
        for (let t4 = 1; t4 <= o; t4++) for (let e2 = 0; e2 < R2; e2++) {
          const n2 = c ? A2(b[e2], D2[e2], N2) : b[e2];
          M2 ? (x.copy(v.normals[t4]).multiplyScalar(n2.x), _.copy(v.binormals[t4]).multiplyScalar(n2.y), y2.copy(g[t4]).add(x).add(_), F2(y2.x, y2.y, y2.z)) : F2(n2.x, n2.y, l / o * t4);
        }
        for (let t4 = p2 - 1; t4 >= 0; t4--) {
          const e2 = t4 / p2, n2 = h * Math.cos(e2 * Math.PI / 2), i2 = u2 * Math.sin(e2 * Math.PI / 2) + d2;
          for (let t5 = 0, e3 = E2.length; t5 < e3; t5++) {
            const e4 = A2(E2[t5], P2[t5], i2);
            F2(e4.x, e4.y, l + n2);
          }
          for (let t5 = 0, e3 = T.length; t5 < e3; t5++) {
            const e4 = T[t5];
            U2 = L2[t5];
            for (let t6 = 0, r2 = e4.length; t6 < r2; t6++) {
              const r3 = A2(e4[t6], U2[t6], i2);
              M2 ? F2(r3.x, r3.y + g[o - 1].y, g[o - 1].x + n2) : F2(r3.x, r3.y, l + n2);
            }
          }
        }
        function O2(t4, e2) {
          let n2 = t4.length;
          for (; --n2 >= 0; ) {
            const i2 = n2;
            let r2 = n2 - 1;
            r2 < 0 && (r2 = t4.length - 1);
            for (let t5 = 0, n3 = o + 2 * p2; t5 < n3; t5++) {
              const n4 = R2 * t5, s3 = R2 * (t5 + 1);
              z2(e2 + i2 + n4, e2 + r2 + n4, e2 + r2 + s3, e2 + i2 + s3);
            }
          }
        }
        function F2(t4, e2, n2) {
          s2.push(t4), s2.push(e2), s2.push(n2);
        }
        function B2(t4, e2, r2) {
          k2(t4), k2(e2), k2(r2);
          const s3 = i.length / 3, a2 = f.generateTopUV(n, i, s3 - 3, s3 - 2, s3 - 1);
          V2(a2[0]), V2(a2[1]), V2(a2[2]);
        }
        function z2(t4, e2, r2, s3) {
          k2(t4), k2(e2), k2(s3), k2(e2), k2(r2), k2(s3);
          const a2 = i.length / 3, o2 = f.generateSideWallUV(n, i, a2 - 6, a2 - 3, a2 - 2, a2 - 1);
          V2(o2[0]), V2(o2[1]), V2(o2[3]), V2(o2[1]), V2(o2[2]), V2(o2[3]);
        }
        function k2(t4) {
          i.push(s2[3 * t4 + 0]), i.push(s2[3 * t4 + 1]), i.push(s2[3 * t4 + 2]);
        }
        function V2(t4) {
          r.push(t4.x), r.push(t4.y);
        }
        !(function() {
          const t4 = i.length / 3;
          if (c) {
            let t5 = 0, e2 = R2 * t5;
            for (let t6 = 0; t6 < C2; t6++) {
              const n2 = w2[t6];
              B2(n2[2] + e2, n2[1] + e2, n2[0] + e2);
            }
            t5 = o + 2 * p2, e2 = R2 * t5;
            for (let t6 = 0; t6 < C2; t6++) {
              const n2 = w2[t6];
              B2(n2[0] + e2, n2[1] + e2, n2[2] + e2);
            }
          } else {
            for (let t5 = 0; t5 < C2; t5++) {
              const e2 = w2[t5];
              B2(e2[2], e2[1], e2[0]);
            }
            for (let t5 = 0; t5 < C2; t5++) {
              const e2 = w2[t5];
              B2(e2[0] + R2 * o, e2[1] + R2 * o, e2[2] + R2 * o);
            }
          }
          n.addGroup(t4, i.length / 3 - t4, 0);
        })(), (function() {
          const t4 = i.length / 3;
          let e2 = 0;
          O2(E2, e2), e2 += E2.length;
          for (let t5 = 0, n2 = T.length; t5 < n2; t5++) {
            const n3 = T[t5];
            O2(n3, e2), e2 += n3.length;
          }
          n.addGroup(t4, i.length / 3 - t4, 1);
        })();
      }
      this.setAttribute("position", new _s(i, 3)), this.setAttribute("uv", new _s(r, 2)), this.computeVertexNormals();
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e, n) {
        if (n.shapes = [], Array.isArray(t3)) for (let e2 = 0, i = t3.length; e2 < i; e2++) {
          const i2 = t3[e2];
          n.shapes.push(i2.uuid);
        }
        else n.shapes.push(t3.uuid);
        n.options = Object.assign({}, e), void 0 !== e.extrudePath && (n.options.extrudePath = e.extrudePath.toJSON());
        return n;
      })(this.parameters.shapes, this.parameters.options, t2);
    }
    static fromJSON(t2, e) {
      const n = [];
      for (let i2 = 0, r = t2.shapes.length; i2 < r; i2++) {
        const r2 = e[t2.shapes[i2]];
        n.push(r2);
      }
      const i = t2.options.extrudePath;
      return void 0 !== i && (t2.options.extrudePath = new ou[i.type]().fromJSON(i)), new _Ku(n, t2.options);
    }
  };
  var $u = { generateTopUV: function(t2, e, n, i, r) {
    const s = e[3 * n], a = e[3 * n + 1], o = e[3 * i], l = e[3 * i + 1], c = e[3 * r], h = e[3 * r + 1];
    return [new Jn(s, a), new Jn(o, l), new Jn(c, h)];
  }, generateSideWallUV: function(t2, e, n, i, r, s) {
    const a = e[3 * n], o = e[3 * n + 1], l = e[3 * n + 2], c = e[3 * i], h = e[3 * i + 1], u2 = e[3 * i + 2], d2 = e[3 * r], p2 = e[3 * r + 1], m = e[3 * r + 2], f = e[3 * s], g = e[3 * s + 1], v = e[3 * s + 2];
    return Math.abs(o - h) < Math.abs(a - c) ? [new Jn(a, 1 - l), new Jn(c, 1 - u2), new Jn(d2, 1 - m), new Jn(f, 1 - v)] : [new Jn(o, 1 - l), new Jn(h, 1 - u2), new Jn(p2, 1 - m), new Jn(g, 1 - v)];
  } };
  var Qu = class _Qu extends fu {
    constructor(t2 = 1, e = 0) {
      const n = (1 + Math.sqrt(5)) / 2;
      super([-1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, 0, 0, -1, n, 0, 1, n, 0, -1, -n, 0, 1, -n, n, 0, -1, n, 0, 1, -n, 0, -1, -n, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], t2, e), this.type = "IcosahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _Qu(t2.radius, t2.detail);
    }
  };
  var td = class _td extends fu {
    constructor(t2 = 1, e = 0) {
      super([1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], t2, e), this.type = "OctahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _td(t2.radius, t2.detail);
    }
  };
  var ed = class _ed extends Es {
    constructor(t2 = 0.5, e = 1, n = 32, i = 1, r = 0, s = 2 * Math.PI) {
      super(), this.type = "RingGeometry", this.parameters = { innerRadius: t2, outerRadius: e, thetaSegments: n, phiSegments: i, thetaStart: r, thetaLength: s }, n = Math.max(3, n);
      const a = [], o = [], l = [], c = [];
      let h = t2;
      const u2 = (e - t2) / (i = Math.max(1, i)), d2 = new Ci(), p2 = new Jn();
      for (let t3 = 0; t3 <= i; t3++) {
        for (let t4 = 0; t4 <= n; t4++) {
          const i2 = r + t4 / n * s;
          d2.x = h * Math.cos(i2), d2.y = h * Math.sin(i2), o.push(d2.x, d2.y, d2.z), l.push(0, 0, 1), p2.x = (d2.x / e + 1) / 2, p2.y = (d2.y / e + 1) / 2, c.push(p2.x, p2.y);
        }
        h += u2;
      }
      for (let t3 = 0; t3 < i; t3++) {
        const e2 = t3 * (n + 1);
        for (let t4 = 0; t4 < n; t4++) {
          const i2 = t4 + e2, r2 = i2, s2 = i2 + n + 1, o2 = i2 + n + 2, l2 = i2 + 1;
          a.push(r2, s2, l2), a.push(s2, o2, l2);
        }
      }
      this.setIndex(a), this.setAttribute("position", new _s(o, 3)), this.setAttribute("normal", new _s(l, 3)), this.setAttribute("uv", new _s(c, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ed(t2.innerRadius, t2.outerRadius, t2.thetaSegments, t2.phiSegments, t2.thetaStart, t2.thetaLength);
    }
  };
  var nd = class _nd extends Es {
    constructor(t2 = new Su([new Jn(0, 0.5), new Jn(-0.5, -0.5), new Jn(0.5, -0.5)]), e = 12) {
      super(), this.type = "ShapeGeometry", this.parameters = { shapes: t2, curveSegments: e };
      const n = [], i = [], r = [], s = [];
      let a = 0, o = 0;
      if (false === Array.isArray(t2)) l(t2);
      else for (let e2 = 0; e2 < t2.length; e2++) l(t2[e2]), this.addGroup(a, o, e2), a += o, o = 0;
      function l(t3) {
        const a2 = i.length / 3, l2 = t3.extractPoints(e);
        let c = l2.shape;
        const h = l2.holes;
        false === Yu.isClockWise(c) && (c = c.reverse());
        for (let t4 = 0, e2 = h.length; t4 < e2; t4++) {
          const e3 = h[t4];
          true === Yu.isClockWise(e3) && (h[t4] = e3.reverse());
        }
        const u2 = Yu.triangulateShape(c, h);
        for (let t4 = 0, e2 = h.length; t4 < e2; t4++) {
          const e3 = h[t4];
          c = c.concat(e3);
        }
        for (let t4 = 0, e2 = c.length; t4 < e2; t4++) {
          const e3 = c[t4];
          i.push(e3.x, e3.y, 0), r.push(0, 0, 1), s.push(e3.x, e3.y);
        }
        for (let t4 = 0, e2 = u2.length; t4 < e2; t4++) {
          const e3 = u2[t4], i2 = e3[0] + a2, r2 = e3[1] + a2, s2 = e3[2] + a2;
          n.push(i2, r2, s2), o += 3;
        }
      }
      this.setIndex(n), this.setAttribute("position", new _s(i, 3)), this.setAttribute("normal", new _s(r, 3)), this.setAttribute("uv", new _s(s, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return (function(t3, e) {
        if (e.shapes = [], Array.isArray(t3)) for (let n = 0, i = t3.length; n < i; n++) {
          const i2 = t3[n];
          e.shapes.push(i2.uuid);
        }
        else e.shapes.push(t3.uuid);
        return e;
      })(this.parameters.shapes, t2);
    }
    static fromJSON(t2, e) {
      const n = [];
      for (let i = 0, r = t2.shapes.length; i < r; i++) {
        const r2 = e[t2.shapes[i]];
        n.push(r2);
      }
      return new _nd(n, t2.curveSegments);
    }
  };
  var id = class _id extends Es {
    constructor(t2 = 1, e = 32, n = 16, i = 0, r = 2 * Math.PI, s = 0, a = Math.PI) {
      super(), this.type = "SphereGeometry", this.parameters = { radius: t2, widthSegments: e, heightSegments: n, phiStart: i, phiLength: r, thetaStart: s, thetaLength: a }, e = Math.max(3, Math.floor(e)), n = Math.max(2, Math.floor(n));
      const o = Math.min(s + a, Math.PI);
      let l = 0;
      const c = [], h = new Ci(), u2 = new Ci(), d2 = [], p2 = [], m = [], f = [];
      for (let d3 = 0; d3 <= n; d3++) {
        const g = [], v = d3 / n;
        let _ = 0;
        0 === d3 && 0 === s ? _ = 0.5 / e : d3 === n && o === Math.PI && (_ = -0.5 / e);
        for (let n2 = 0; n2 <= e; n2++) {
          const o2 = n2 / e;
          h.x = -t2 * Math.cos(i + o2 * r) * Math.sin(s + v * a), h.y = t2 * Math.cos(s + v * a), h.z = t2 * Math.sin(i + o2 * r) * Math.sin(s + v * a), p2.push(h.x, h.y, h.z), u2.copy(h).normalize(), m.push(u2.x, u2.y, u2.z), f.push(o2 + _, 1 - v), g.push(l++);
        }
        c.push(g);
      }
      for (let t3 = 0; t3 < n; t3++) for (let i2 = 0; i2 < e; i2++) {
        const e2 = c[t3][i2 + 1], r2 = c[t3][i2], a2 = c[t3 + 1][i2], l2 = c[t3 + 1][i2 + 1];
        (0 !== t3 || s > 0) && d2.push(e2, r2, l2), (t3 !== n - 1 || o < Math.PI) && d2.push(r2, a2, l2);
      }
      this.setIndex(d2), this.setAttribute("position", new _s(p2, 3)), this.setAttribute("normal", new _s(m, 3)), this.setAttribute("uv", new _s(f, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _id(t2.radius, t2.widthSegments, t2.heightSegments, t2.phiStart, t2.phiLength, t2.thetaStart, t2.thetaLength);
    }
  };
  var rd = class _rd extends fu {
    constructor(t2 = 1, e = 0) {
      super([1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], t2, e), this.type = "TetrahedronGeometry", this.parameters = { radius: t2, detail: e };
    }
    static fromJSON(t2) {
      return new _rd(t2.radius, t2.detail);
    }
  };
  var sd = class _sd extends Es {
    constructor(t2 = 1, e = 0.4, n = 12, i = 48, r = 2 * Math.PI) {
      super(), this.type = "TorusGeometry", this.parameters = { radius: t2, tube: e, radialSegments: n, tubularSegments: i, arc: r }, n = Math.floor(n), i = Math.floor(i);
      const s = [], a = [], o = [], l = [], c = new Ci(), h = new Ci(), u2 = new Ci();
      for (let s2 = 0; s2 <= n; s2++) for (let d2 = 0; d2 <= i; d2++) {
        const p2 = d2 / i * r, m = s2 / n * Math.PI * 2;
        h.x = (t2 + e * Math.cos(m)) * Math.cos(p2), h.y = (t2 + e * Math.cos(m)) * Math.sin(p2), h.z = e * Math.sin(m), a.push(h.x, h.y, h.z), c.x = t2 * Math.cos(p2), c.y = t2 * Math.sin(p2), u2.subVectors(h, c).normalize(), o.push(u2.x, u2.y, u2.z), l.push(d2 / i), l.push(s2 / n);
      }
      for (let t3 = 1; t3 <= n; t3++) for (let e2 = 1; e2 <= i; e2++) {
        const n2 = (i + 1) * t3 + e2 - 1, r2 = (i + 1) * (t3 - 1) + e2 - 1, a2 = (i + 1) * (t3 - 1) + e2, o2 = (i + 1) * t3 + e2;
        s.push(n2, r2, o2), s.push(r2, a2, o2);
      }
      this.setIndex(s), this.setAttribute("position", new _s(a, 3)), this.setAttribute("normal", new _s(o, 3)), this.setAttribute("uv", new _s(l, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _sd(t2.radius, t2.tube, t2.radialSegments, t2.tubularSegments, t2.arc);
    }
  };
  var ad = class _ad extends Es {
    constructor(t2 = 1, e = 0.4, n = 64, i = 8, r = 2, s = 3) {
      super(), this.type = "TorusKnotGeometry", this.parameters = { radius: t2, tube: e, tubularSegments: n, radialSegments: i, p: r, q: s }, n = Math.floor(n), i = Math.floor(i);
      const a = [], o = [], l = [], c = [], h = new Ci(), u2 = new Ci(), d2 = new Ci(), p2 = new Ci(), m = new Ci(), f = new Ci(), g = new Ci();
      for (let a2 = 0; a2 <= n; ++a2) {
        const _ = a2 / n * r * Math.PI * 2;
        v(_, r, s, t2, d2), v(_ + 0.01, r, s, t2, p2), f.subVectors(p2, d2), g.addVectors(p2, d2), m.crossVectors(f, g), g.crossVectors(m, f), m.normalize(), g.normalize();
        for (let t3 = 0; t3 <= i; ++t3) {
          const r2 = t3 / i * Math.PI * 2, s2 = -e * Math.cos(r2), p3 = e * Math.sin(r2);
          h.x = d2.x + (s2 * g.x + p3 * m.x), h.y = d2.y + (s2 * g.y + p3 * m.y), h.z = d2.z + (s2 * g.z + p3 * m.z), o.push(h.x, h.y, h.z), u2.subVectors(h, d2).normalize(), l.push(u2.x, u2.y, u2.z), c.push(a2 / n), c.push(t3 / i);
        }
      }
      for (let t3 = 1; t3 <= n; t3++) for (let e2 = 1; e2 <= i; e2++) {
        const n2 = (i + 1) * (t3 - 1) + (e2 - 1), r2 = (i + 1) * t3 + (e2 - 1), s2 = (i + 1) * t3 + e2, o2 = (i + 1) * (t3 - 1) + e2;
        a.push(n2, r2, o2), a.push(r2, s2, o2);
      }
      function v(t3, e2, n2, i2, r2) {
        const s2 = Math.cos(t3), a2 = Math.sin(t3), o2 = n2 / e2 * t3, l2 = Math.cos(o2);
        r2.x = i2 * (2 + l2) * 0.5 * s2, r2.y = i2 * (2 + l2) * a2 * 0.5, r2.z = i2 * Math.sin(o2) * 0.5;
      }
      this.setIndex(a), this.setAttribute("position", new _s(o, 3)), this.setAttribute("normal", new _s(l, 3)), this.setAttribute("uv", new _s(c, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    static fromJSON(t2) {
      return new _ad(t2.radius, t2.tube, t2.tubularSegments, t2.radialSegments, t2.p, t2.q);
    }
  };
  var od = class _od extends Es {
    constructor(t2 = new su(new Ci(-1, -1, 0), new Ci(-1, 1, 0), new Ci(1, 1, 0)), e = 64, n = 1, i = 8, r = false) {
      super(), this.type = "TubeGeometry", this.parameters = { path: t2, tubularSegments: e, radius: n, radialSegments: i, closed: r };
      const s = t2.computeFrenetFrames(e, r);
      this.tangents = s.tangents, this.normals = s.normals, this.binormals = s.binormals;
      const a = new Ci(), o = new Ci(), l = new Jn();
      let c = new Ci();
      const h = [], u2 = [], d2 = [], p2 = [];
      function m(r2) {
        c = t2.getPointAt(r2 / e, c);
        const l2 = s.normals[r2], d3 = s.binormals[r2];
        for (let t3 = 0; t3 <= i; t3++) {
          const e2 = t3 / i * Math.PI * 2, r3 = Math.sin(e2), s2 = -Math.cos(e2);
          o.x = s2 * l2.x + r3 * d3.x, o.y = s2 * l2.y + r3 * d3.y, o.z = s2 * l2.z + r3 * d3.z, o.normalize(), u2.push(o.x, o.y, o.z), a.x = c.x + n * o.x, a.y = c.y + n * o.y, a.z = c.z + n * o.z, h.push(a.x, a.y, a.z);
        }
      }
      !(function() {
        for (let t3 = 0; t3 < e; t3++) m(t3);
        m(false === r ? e : 0), (function() {
          for (let t3 = 0; t3 <= e; t3++) for (let n2 = 0; n2 <= i; n2++) l.x = t3 / e, l.y = n2 / i, d2.push(l.x, l.y);
        })(), (function() {
          for (let t3 = 1; t3 <= e; t3++) for (let e2 = 1; e2 <= i; e2++) {
            const n2 = (i + 1) * (t3 - 1) + (e2 - 1), r2 = (i + 1) * t3 + (e2 - 1), s2 = (i + 1) * t3 + e2, a2 = (i + 1) * (t3 - 1) + e2;
            p2.push(n2, r2, a2), p2.push(r2, s2, a2);
          }
        })();
      })(), this.setIndex(p2), this.setAttribute("position", new _s(h, 3)), this.setAttribute("normal", new _s(u2, 3)), this.setAttribute("uv", new _s(d2, 2));
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
    toJSON() {
      const t2 = super.toJSON();
      return t2.path = this.parameters.path.toJSON(), t2;
    }
    static fromJSON(t2) {
      return new _od(new ou[t2.path.type]().fromJSON(t2.path), t2.tubularSegments, t2.radius, t2.radialSegments, t2.closed);
    }
  };
  var ld = class extends Es {
    constructor(t2 = null) {
      if (super(), this.type = "WireframeGeometry", this.parameters = { geometry: t2 }, null !== t2) {
        const e = [], n = /* @__PURE__ */ new Set(), i = new Ci(), r = new Ci();
        if (null !== t2.index) {
          const s = t2.attributes.position, a = t2.index;
          let o = t2.groups;
          0 === o.length && (o = [{ start: 0, count: a.count, materialIndex: 0 }]);
          for (let t3 = 0, l = o.length; t3 < l; ++t3) {
            const l2 = o[t3], c = l2.start;
            for (let t4 = c, o2 = c + l2.count; t4 < o2; t4 += 3) for (let o3 = 0; o3 < 3; o3++) {
              const l3 = a.getX(t4 + o3), c2 = a.getX(t4 + (o3 + 1) % 3);
              i.fromBufferAttribute(s, l3), r.fromBufferAttribute(s, c2), true === cd(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
            }
          }
        } else {
          const s = t2.attributes.position;
          for (let t3 = 0, a = s.count / 3; t3 < a; t3++) for (let a2 = 0; a2 < 3; a2++) {
            const o = 3 * t3 + a2, l = 3 * t3 + (a2 + 1) % 3;
            i.fromBufferAttribute(s, o), r.fromBufferAttribute(s, l), true === cd(i, r, n) && (e.push(i.x, i.y, i.z), e.push(r.x, r.y, r.z));
          }
        }
        this.setAttribute("position", new _s(e, 3));
      }
    }
    copy(t2) {
      return super.copy(t2), this.parameters = Object.assign({}, t2.parameters), this;
    }
  };
  function cd(t2, e, n) {
    const i = `${t2.x},${t2.y},${t2.z}-${e.x},${e.y},${e.z}`, r = `${e.x},${e.y},${e.z}-${t2.x},${t2.y},${t2.z}`;
    return true !== n.has(i) && true !== n.has(r) && (n.add(i), n.add(r), true);
  }
  var hd = Object.freeze({ __proto__: null, BoxGeometry: ks, CapsuleGeometry: uu, CircleGeometry: du, ConeGeometry: mu, CylinderGeometry: pu, DodecahedronGeometry: gu, EdgesGeometry: Mu, ExtrudeGeometry: Ku, IcosahedronGeometry: Qu, LatheGeometry: hu, OctahedronGeometry: td, PlaneGeometry: ha, PolyhedronGeometry: fu, RingGeometry: ed, ShapeGeometry: nd, SphereGeometry: id, TetrahedronGeometry: rd, TorusGeometry: sd, TorusKnotGeometry: ad, TubeGeometry: od, WireframeGeometry: ld });
  function Md(t2, e, n) {
    return !t2 || !n && t2.constructor === e ? t2 : "number" == typeof e.BYTES_PER_ELEMENT ? new e(t2) : Array.prototype.slice.call(t2);
  }
  function Sd(t2) {
    return ArrayBuffer.isView(t2) && !(t2 instanceof DataView);
  }
  var Ad = class {
    constructor(t2, e, n, i) {
      this.parameterPositions = t2, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(n), this.sampleValues = e, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
    }
    evaluate(t2) {
      const e = this.parameterPositions;
      let n = this._cachedIndex, i = e[n], r = e[n - 1];
      t: {
        e: {
          let s;
          n: {
            i: if (!(t2 < i)) {
              for (let s2 = n + 2; ; ) {
                if (void 0 === i) {
                  if (t2 < r) break i;
                  return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
                }
                if (n === s2) break;
                if (r = i, i = e[++n], t2 < i) break e;
              }
              s = e.length;
              break n;
            }
            if (t2 >= r) break t;
            {
              const a = e[1];
              t2 < a && (n = 2, r = a);
              for (let s2 = n - 2; ; ) {
                if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
                if (n === s2) break;
                if (i = r, r = e[--n - 1], t2 >= r) break e;
              }
              s = n, n = 0;
            }
          }
          for (; n < s; ) {
            const i2 = n + s >>> 1;
            t2 < e[i2] ? s = i2 : n = i2 + 1;
          }
          if (i = e[n], r = e[n - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
          if (void 0 === i) return n = e.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
        }
        this._cachedIndex = n, this.intervalChanged_(n, r, i);
      }
      return this.interpolate_(n, r, t2, i);
    }
    getSettings_() {
      return this.settings || this.DefaultSettings_;
    }
    copySampleValue_(t2) {
      const e = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = t2 * i;
      for (let t3 = 0; t3 !== i; ++t3) e[t3] = n[r + t3];
      return e;
    }
    interpolate_() {
      throw new Error("call to abstract method");
    }
    intervalChanged_() {
    }
  };
  var Rd = class extends Ad {
    constructor(t2, e, n, i) {
      super(t2, e, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: Ne, endingEnd: Ne };
    }
    intervalChanged_(t2, e, n) {
      const i = this.parameterPositions;
      let r = t2 - 2, s = t2 + 1, a = i[r], o = i[s];
      if (void 0 === a) switch (this.getSettings_().endingStart) {
        case Oe:
          r = t2, a = 2 * e - n;
          break;
        case Fe:
          r = i.length - 2, a = e + i[r] - i[r + 1];
          break;
        default:
          r = t2, a = n;
      }
      if (void 0 === o) switch (this.getSettings_().endingEnd) {
        case Oe:
          s = t2, o = 2 * n - e;
          break;
        case Fe:
          s = 1, o = n + i[1] - i[0];
          break;
        default:
          s = t2 - 1, o = e;
      }
      const l = 0.5 * (n - e), c = this.valueSize;
      this._weightPrev = l / (e - a), this._weightNext = l / (o - n), this._offsetPrev = r * c, this._offsetNext = s * c;
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l = o - a, c = this._offsetPrev, h = this._offsetNext, u2 = this._weightPrev, d2 = this._weightNext, p2 = (n - e) / (i - e), m = p2 * p2, f = m * p2, g = -u2 * f + 2 * u2 * m - u2 * p2, v = (1 + u2) * f + (-1.5 - 2 * u2) * m + (-0.5 + u2) * p2 + 1, _ = (-1 - d2) * f + (1.5 + d2) * m + 0.5 * p2, x = d2 * f - d2 * m;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = g * s[c + t3] + v * s[l + t3] + _ * s[o + t3] + x * s[h + t3];
      return r;
    }
  };
  var Cd = class extends Ad {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = t2 * a, l = o - a, c = (n - e) / (i - e), h = 1 - c;
      for (let t3 = 0; t3 !== a; ++t3) r[t3] = s[l + t3] * h + s[o + t3] * c;
      return r;
    }
  };
  var Id = class extends Ad {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2) {
      return this.copySampleValue_(t2 - 1);
    }
  };
  var Pd = class {
    constructor(t2, e, n, i) {
      if (void 0 === t2) throw new Error("THREE.KeyframeTrack: track name is undefined");
      if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t2);
      this.name = t2, this.times = Md(e, this.TimeBufferType), this.values = Md(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
    }
    static toJSON(t2) {
      const e = t2.constructor;
      let n;
      if (e.toJSON !== this.toJSON) n = e.toJSON(t2);
      else {
        n = { name: t2.name, times: Md(t2.times, Array), values: Md(t2.values, Array) };
        const e2 = t2.getInterpolation();
        e2 !== t2.DefaultInterpolation && (n.interpolation = e2);
      }
      return n.type = t2.ValueTypeName, n;
    }
    InterpolantFactoryMethodDiscrete(t2) {
      return new Id(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodLinear(t2) {
      return new Cd(this.times, this.values, this.getValueSize(), t2);
    }
    InterpolantFactoryMethodSmooth(t2) {
      return new Rd(this.times, this.values, this.getValueSize(), t2);
    }
    setInterpolation(t2) {
      let e;
      switch (t2) {
        case Le:
          e = this.InterpolantFactoryMethodDiscrete;
          break;
        case Ue:
          e = this.InterpolantFactoryMethodLinear;
          break;
        case De:
          e = this.InterpolantFactoryMethodSmooth;
      }
      if (void 0 === e) {
        const e2 = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
        if (void 0 === this.createInterpolant) {
          if (t2 === this.DefaultInterpolation) throw new Error(e2);
          this.setInterpolation(this.DefaultInterpolation);
        }
        return console.warn("THREE.KeyframeTrack:", e2), this;
      }
      return this.createInterpolant = e, this;
    }
    getInterpolation() {
      switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
          return Le;
        case this.InterpolantFactoryMethodLinear:
          return Ue;
        case this.InterpolantFactoryMethodSmooth:
          return De;
      }
    }
    getValueSize() {
      return this.values.length / this.times.length;
    }
    shift(t2) {
      if (0 !== t2) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] += t2;
      }
      return this;
    }
    scale(t2) {
      if (1 !== t2) {
        const e = this.times;
        for (let n = 0, i = e.length; n !== i; ++n) e[n] *= t2;
      }
      return this;
    }
    trim(t2, e) {
      const n = this.times, i = n.length;
      let r = 0, s = i - 1;
      for (; r !== i && n[r] < t2; ) ++r;
      for (; -1 !== s && n[s] > e; ) --s;
      if (++s, 0 !== r || s !== i) {
        r >= s && (s = Math.max(s, 1), r = s - 1);
        const t3 = this.getValueSize();
        this.times = n.slice(r, s), this.values = this.values.slice(r * t3, s * t3);
      }
      return this;
    }
    validate() {
      let t2 = true;
      const e = this.getValueSize();
      e - Math.floor(e) != 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), t2 = false);
      const n = this.times, i = this.values, r = n.length;
      0 === r && (console.error("THREE.KeyframeTrack: Track is empty.", this), t2 = false);
      let s = null;
      for (let e2 = 0; e2 !== r; e2++) {
        const i2 = n[e2];
        if ("number" == typeof i2 && isNaN(i2)) {
          console.error("THREE.KeyframeTrack: Time is not a valid number.", this, e2, i2), t2 = false;
          break;
        }
        if (null !== s && s > i2) {
          console.error("THREE.KeyframeTrack: Out of order keys.", this, e2, i2, s), t2 = false;
          break;
        }
        s = i2;
      }
      if (void 0 !== i && Sd(i)) for (let e2 = 0, n2 = i.length; e2 !== n2; ++e2) {
        const n3 = i[e2];
        if (isNaN(n3)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, e2, n3), t2 = false;
          break;
        }
      }
      return t2;
    }
    optimize() {
      const t2 = this.times.slice(), e = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === De, r = t2.length - 1;
      let s = 1;
      for (let a = 1; a < r; ++a) {
        let r2 = false;
        const o = t2[a];
        if (o !== t2[a + 1] && (1 !== a || o !== t2[0])) if (i) r2 = true;
        else {
          const t3 = a * n, i2 = t3 - n, s2 = t3 + n;
          for (let a2 = 0; a2 !== n; ++a2) {
            const n2 = e[t3 + a2];
            if (n2 !== e[i2 + a2] || n2 !== e[s2 + a2]) {
              r2 = true;
              break;
            }
          }
        }
        if (r2) {
          if (a !== s) {
            t2[s] = t2[a];
            const i2 = a * n, r3 = s * n;
            for (let t3 = 0; t3 !== n; ++t3) e[r3 + t3] = e[i2 + t3];
          }
          ++s;
        }
      }
      if (r > 0) {
        t2[s] = t2[r];
        for (let t3 = r * n, i2 = s * n, a = 0; a !== n; ++a) e[i2 + a] = e[t3 + a];
        ++s;
      }
      return s !== t2.length ? (this.times = t2.slice(0, s), this.values = e.slice(0, s * n)) : (this.times = t2, this.values = e), this;
    }
    clone() {
      const t2 = this.times.slice(), e = this.values.slice(), n = new (0, this.constructor)(this.name, t2, e);
      return n.createInterpolant = this.createInterpolant, n;
    }
  };
  Pd.prototype.TimeBufferType = Float32Array, Pd.prototype.ValueBufferType = Float32Array, Pd.prototype.DefaultInterpolation = Ue;
  var Ld = class extends Pd {
    constructor(t2, e, n) {
      super(t2, e, n);
    }
  };
  Ld.prototype.ValueTypeName = "bool", Ld.prototype.ValueBufferType = Array, Ld.prototype.DefaultInterpolation = Le, Ld.prototype.InterpolantFactoryMethodLinear = void 0, Ld.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Ud = class extends Pd {
  };
  Ud.prototype.ValueTypeName = "color";
  var Dd = class extends Pd {
  };
  Dd.prototype.ValueTypeName = "number";
  var Nd = class extends Ad {
    constructor(t2, e, n, i) {
      super(t2, e, n, i);
    }
    interpolate_(t2, e, n, i) {
      const r = this.resultBuffer, s = this.sampleValues, a = this.valueSize, o = (n - e) / (i - e);
      let l = t2 * a;
      for (let t3 = l + a; l !== t3; l += 4) Ri.slerpFlat(r, 0, s, l - a, s, l, o);
      return r;
    }
  };
  var Od = class extends Pd {
    InterpolantFactoryMethodLinear(t2) {
      return new Nd(this.times, this.values, this.getValueSize(), t2);
    }
  };
  Od.prototype.ValueTypeName = "quaternion", Od.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Fd = class extends Pd {
    constructor(t2, e, n) {
      super(t2, e, n);
    }
  };
  Fd.prototype.ValueTypeName = "string", Fd.prototype.ValueBufferType = Array, Fd.prototype.DefaultInterpolation = Le, Fd.prototype.InterpolantFactoryMethodLinear = void 0, Fd.prototype.InterpolantFactoryMethodSmooth = void 0;
  var Bd = class extends Pd {
  };
  Bd.prototype.ValueTypeName = "vector";
  var Hd = class {
    constructor(t2, e, n) {
      const i = this;
      let r, s = false, a = 0, o = 0;
      const l = [];
      this.onStart = void 0, this.onLoad = t2, this.onProgress = e, this.onError = n, this.itemStart = function(t3) {
        o++, false === s && void 0 !== i.onStart && i.onStart(t3, a, o), s = true;
      }, this.itemEnd = function(t3) {
        a++, void 0 !== i.onProgress && i.onProgress(t3, a, o), a === o && (s = false, void 0 !== i.onLoad && i.onLoad());
      }, this.itemError = function(t3) {
        void 0 !== i.onError && i.onError(t3);
      }, this.resolveURL = function(t3) {
        return r ? r(t3) : t3;
      }, this.setURLModifier = function(t3) {
        return r = t3, this;
      }, this.addHandler = function(t3, e2) {
        return l.push(t3, e2), this;
      }, this.removeHandler = function(t3) {
        const e2 = l.indexOf(t3);
        return -1 !== e2 && l.splice(e2, 2), this;
      }, this.getHandler = function(t3) {
        for (let e2 = 0, n2 = l.length; e2 < n2; e2 += 2) {
          const n3 = l[e2], i2 = l[e2 + 1];
          if (n3.global && (n3.lastIndex = 0), n3.test(t3)) return i2;
        }
        return null;
      };
    }
  };
  var Gd = new Hd();
  var Wd = class {
    constructor(t2) {
      this.manager = void 0 !== t2 ? t2 : Gd, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
    }
    load() {
    }
    loadAsync(t2, e) {
      const n = this;
      return new Promise((function(i, r) {
        n.load(t2, i, e, r);
      }));
    }
    parse() {
    }
    setCrossOrigin(t2) {
      return this.crossOrigin = t2, this;
    }
    setWithCredentials(t2) {
      return this.withCredentials = t2, this;
    }
    setPath(t2) {
      return this.path = t2, this;
    }
    setResourcePath(t2) {
      return this.resourcePath = t2, this;
    }
    setRequestHeader(t2) {
      return this.requestHeader = t2, this;
    }
  };
  Wd.DEFAULT_MATERIAL_NAME = "__DEFAULT";
  var np = new sr();
  var ip = new Ci();
  var rp = new Ci();
  var lp = new sr();
  var cp = new Ci();
  var hp = new Ci();
  var Pp = new sr();
  var Lp = new sr();
  var Up = new sr();
  var Fp = new Ci();
  var Bp = new Ri();
  var zp = new Ci();
  var kp = new Ci();
  var Gp = new Ci();
  var Wp = new Ri();
  var Xp = new Ci();
  var jp = new Ci();
  var Jp = "\\[\\]\\.:\\/";
  var Kp = new RegExp("[" + Jp + "]", "g");
  var $p = "[^" + Jp + "]";
  var Qp = "[^" + Jp.replace("\\.", "") + "]";
  var tm = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", $p) + /(WCOD+)?/.source.replace("WCOD", Qp) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", $p) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", $p) + "$");
  var em = ["material", "materials", "bones", "map"];
  var nm = class _nm {
    constructor(t2, e, n) {
      this.path = e, this.parsedPath = n || _nm.parseTrackName(e), this.node = _nm.findNode(t2, this.parsedPath.nodeName), this.rootNode = t2, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
    static create(t2, e, n) {
      return t2 && t2.isAnimationObjectGroup ? new _nm.Composite(t2, e, n) : new _nm(t2, e, n);
    }
    static sanitizeNodeName(t2) {
      return t2.replace(/\s/g, "_").replace(Kp, "");
    }
    static parseTrackName(t2) {
      const e = tm.exec(t2);
      if (null === e) throw new Error("PropertyBinding: Cannot parse trackName: " + t2);
      const n = { nodeName: e[2], objectName: e[3], objectIndex: e[4], propertyName: e[5], propertyIndex: e[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
      if (void 0 !== i && -1 !== i) {
        const t3 = n.nodeName.substring(i + 1);
        -1 !== em.indexOf(t3) && (n.nodeName = n.nodeName.substring(0, i), n.objectName = t3);
      }
      if (null === n.propertyName || 0 === n.propertyName.length) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + t2);
      return n;
    }
    static findNode(t2, e) {
      if (void 0 === e || "" === e || "." === e || -1 === e || e === t2.name || e === t2.uuid) return t2;
      if (t2.skeleton) {
        const n = t2.skeleton.getBoneByName(e);
        if (void 0 !== n) return n;
      }
      if (t2.children) {
        const n = function(t3) {
          for (let i2 = 0; i2 < t3.length; i2++) {
            const r = t3[i2];
            if (r.name === e || r.uuid === e) return r;
            const s = n(r.children);
            if (s) return s;
          }
          return null;
        }, i = n(t2.children);
        if (i) return i;
      }
      return null;
    }
    _getValue_unavailable() {
    }
    _setValue_unavailable() {
    }
    _getValue_direct(t2, e) {
      t2[e] = this.targetObject[this.propertyName];
    }
    _getValue_array(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) t2[e++] = n[i];
    }
    _getValue_arrayElement(t2, e) {
      t2[e] = this.resolvedProperty[this.propertyIndex];
    }
    _getValue_toArray(t2, e) {
      this.resolvedProperty.toArray(t2, e);
    }
    _setValue_direct(t2, e) {
      this.targetObject[this.propertyName] = t2[e];
    }
    _setValue_direct_setNeedsUpdate(t2, e) {
      this.targetObject[this.propertyName] = t2[e], this.targetObject.needsUpdate = true;
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(t2, e) {
      this.targetObject[this.propertyName] = t2[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_array(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
    }
    _setValue_array_setNeedsUpdate(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
      this.targetObject.needsUpdate = true;
    }
    _setValue_array_setMatrixWorldNeedsUpdate(t2, e) {
      const n = this.resolvedProperty;
      for (let i = 0, r = n.length; i !== r; ++i) n[i] = t2[e++];
      this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_arrayElement(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e];
    }
    _setValue_arrayElement_setNeedsUpdate(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e], this.targetObject.needsUpdate = true;
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(t2, e) {
      this.resolvedProperty[this.propertyIndex] = t2[e], this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _setValue_fromArray(t2, e) {
      this.resolvedProperty.fromArray(t2, e);
    }
    _setValue_fromArray_setNeedsUpdate(t2, e) {
      this.resolvedProperty.fromArray(t2, e), this.targetObject.needsUpdate = true;
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(t2, e) {
      this.resolvedProperty.fromArray(t2, e), this.targetObject.matrixWorldNeedsUpdate = true;
    }
    _getValue_unbound(t2, e) {
      this.bind(), this.getValue(t2, e);
    }
    _setValue_unbound(t2, e) {
      this.bind(), this.setValue(t2, e);
    }
    bind() {
      let t2 = this.node;
      const e = this.parsedPath, n = e.objectName, i = e.propertyName;
      let r = e.propertyIndex;
      if (t2 || (t2 = _nm.findNode(this.rootNode, e.nodeName), this.node = t2), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t2) return void console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      if (n) {
        let i2 = e.objectIndex;
        switch (n) {
          case "materials":
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.materials) return void console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            t2 = t2.material.materials;
            break;
          case "bones":
            if (!t2.skeleton) return void console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            t2 = t2.skeleton.bones;
            for (let e2 = 0; e2 < t2.length; e2++) if (t2[e2].name === i2) {
              i2 = e2;
              break;
            }
            break;
          case "map":
            if ("map" in t2) {
              t2 = t2.map;
              break;
            }
            if (!t2.material) return void console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            if (!t2.material.map) return void console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            t2 = t2.material.map;
            break;
          default:
            if (void 0 === t2[n]) return void console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            t2 = t2[n];
        }
        if (void 0 !== i2) {
          if (void 0 === t2[i2]) return void console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t2);
          t2 = t2[i2];
        }
      }
      const s = t2[i];
      if (void 0 === s) {
        const n2 = e.nodeName;
        return void console.error("THREE.PropertyBinding: Trying to update property for track: " + n2 + "." + i + " but it wasn't found.", t2);
      }
      let a = this.Versioning.None;
      this.targetObject = t2, void 0 !== t2.needsUpdate ? a = this.Versioning.NeedsUpdate : void 0 !== t2.matrixWorldNeedsUpdate && (a = this.Versioning.MatrixWorldNeedsUpdate);
      let o = this.BindingType.Direct;
      if (void 0 !== r) {
        if ("morphTargetInfluences" === i) {
          if (!t2.geometry) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          if (!t2.geometry.morphAttributes) return void console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          void 0 !== t2.morphTargetDictionary[r] && (r = t2.morphTargetDictionary[r]);
        }
        o = this.BindingType.ArrayElement, this.resolvedProperty = s, this.propertyIndex = r;
      } else void 0 !== s.fromArray && void 0 !== s.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = s) : Array.isArray(s) ? (o = this.BindingType.EntireArray, this.resolvedProperty = s) : this.propertyName = i;
      this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
    }
    unbind() {
      this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
    }
  };
  nm.Composite = class {
    constructor(t2, e, n) {
      const i = n || nm.parseTrackName(e);
      this._targetGroup = t2, this._bindings = t2.subscribe_(e, i);
    }
    getValue(t2, e) {
      this.bind();
      const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
      void 0 !== i && i.getValue(t2, e);
    }
    setValue(t2, e) {
      const n = this._bindings;
      for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(t2, e);
    }
    bind() {
      const t2 = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t2.length; e !== n; ++e) t2[e].bind();
    }
    unbind() {
      const t2 = this._bindings;
      for (let e = this._targetGroup.nCachedObjects_, n = t2.length; e !== n; ++e) t2[e].unbind();
    }
  }, nm.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 }, nm.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 }, nm.prototype.GetterByBindingType = [nm.prototype._getValue_direct, nm.prototype._getValue_array, nm.prototype._getValue_arrayElement, nm.prototype._getValue_toArray], nm.prototype.SetterByBindingTypeAndVersioning = [[nm.prototype._setValue_direct, nm.prototype._setValue_direct_setNeedsUpdate, nm.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [nm.prototype._setValue_array, nm.prototype._setValue_array_setNeedsUpdate, nm.prototype._setValue_array_setMatrixWorldNeedsUpdate], [nm.prototype._setValue_arrayElement, nm.prototype._setValue_arrayElement_setNeedsUpdate, nm.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [nm.prototype._setValue_fromArray, nm.prototype._setValue_fromArray_setNeedsUpdate, nm.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
  var sm = new Float32Array(1);
  var dm = new sr();
  var xm = new Jn();
  var Mm = new Ci();
  var Sm = new Ci();
  var Tm = new Ci();
  var Em = new Ci();
  var Am = new sr();
  var Rm = new sr();
  var Lm = new Ci();
  var Um = new Kr();
  var Dm = new Kr();
  var Bm = new Ci();
  var zm = new Ci();
  var km = new Ci();
  var Hm = new Ci();
  var Gm = new js();
  var jm = new Li();
  var Jm = new Ci();
  "undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: t } })), "undefined" != typeof window && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = t);

  // mockups/toon3d.js
  function hexToHsl(hex) {
    const n = hex.replace("#", "");
    const r = parseInt(n.slice(0, 2), 16) / 255, g = parseInt(n.slice(2, 4), 16) / 255, b = parseInt(n.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, l = (max + min) / 2;
    if (max !== min) {
      const d2 = max - min;
      s = l > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      if (max === r) h = (g - b) / d2 + (g < b ? 6 : 0);
      else if (max === g) h = (b - r) / d2 + 2;
      else h = (r - g) / d2 + 4;
      h *= 60;
    }
    return [h, s * 100, l * 100];
  }
  function toward(h, target, deg) {
    const d2 = (target - h + 540) % 360 - 180;
    return h + Math.sign(d2) * Math.min(Math.abs(d2), deg);
  }
  function three(h, s, l) {
    return new Kr().setHSL((h % 360 + 360) % 360 / 360, Math.max(0, Math.min(1, s / 100)), Math.max(0, Math.min(1, l / 100)));
  }
  function ramp(hex, toon) {
    const [h, s, l] = hexToHsl(hex);
    if (!toon) {
      return {
        lit: three(h, s * 0.9, Math.min(88, l + 14)),
        mid: three(h, s, l),
        shadow: three(h, s * 0.95, Math.max(12, l - 22)),
        deep: three(h, s * 0.9, Math.max(7, l - 38)),
        edge: three(h, s * 0.8, 14),
        rim: three(h, 30, 92),
        back: three(toward(h, 40, 25), 40, 80)
      };
    }
    return {
      lit: three(toward(h, 52, 5), s * 0.92, Math.min(90, l + 9)),
      mid: three(h, s, l),
      shadow: three(toward(h, 300, 14), Math.min(100, s * 1.06), Math.max(14, l - 6)),
      deep: three(toward(h, 300, 22), s * 0.92, Math.max(9, l - 17)),
      edge: three(toward(h, 306, 20), s * 0.9, Math.max(16, l - 30)),
      rim: three(toward(h, 48, 26), Math.min(100, s * 0.42 + 34), Math.min(94, l + 34)),
      back: three(toward(h, 34, 30), Math.min(100, s * 0.7 + 12), Math.min(92, l + 26))
    };
  }
  var SURF_VS = `
varying vec3 vN;
varying vec3 vV;
varying vec2 vUv;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vN = normalize(mat3(modelMatrix) * normal);
  vUv = uv;
  vV = normalize(cameraPosition - world.xyz);
  gl_Position = projectionMatrix * viewMatrix * world;
}`;
  var SURF_FS = `
uniform vec3 uLit, uMid, uShadow, uDeep, uKey, uRim, uBack;
uniform float uToon, uSoft, uRimW, uBackW, uAlpha;
uniform vec3 uTintMul;
varying vec3 vN;
varying vec3 vV;
varying vec2 vUv;
#ifdef USE_MAP
uniform sampler2D uMap;
uniform vec2 uMapS;
uniform vec2 uMapO;
#endif
void main() {
  vec3 N = normalize(vN);
  vec3 V = normalize(vV);
  vec3 K = normalize(uKey);
  float ndl = dot(N, K) * 0.5 + 0.5;
  float band = smoothstep(0.50 - uSoft, 0.50 + uSoft, ndl);
  float core = smoothstep(0.26 - uSoft, 0.26 + uSoft, ndl);
  float flatL = smoothstep(0.12, 0.92, ndl);
  float flatD = smoothstep(0.02, 0.42, ndl);
  float t = mix(flatL, band, uToon);
  float d = mix(flatD, core, uToon);
  vec3 c = mix(uShadow, uMid, t);
  c = mix(uDeep, c, d);
  c *= uTintMul;
  #ifdef USE_MAP
  c *= texture2D(uMap, vUv * uMapS + uMapO).rgb * 1.25;
  #endif
  float fres = pow(1.0 - max(dot(N, V), 0.0), 2.6);
  c += uRim * fres * uRimW * (0.30 + 0.70 * max(N.y, 0.0));
  float back = pow(max(dot(N, -K) * 0.5 + 0.5, 0.0), 3.0) * fres;
  c += uBack * back * uBackW;
  gl_FragColor = vec4(c, uAlpha);
}`;
  var HULL_VS = `
uniform float uThick;
void main() {
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vec3 n = normalize(normalMatrix * normal);
  mv.xy += n.xy * uThick;
  gl_Position = projectionMatrix * mv;
}`;
  var HULL_FS = `
uniform vec3 uColor;
uniform float uAlpha;
void main() { gl_FragColor = vec4(uColor, uAlpha); }`;
  var GEO = {
    mantle: new id(0.62, 48, 32),
    eye: new id(0.135, 26, 18),
    pupil: new id(0.072, 18, 12),
    leg: new pu(0.115, 0.05, 0.82, 22, 6),
    fin: new id(0.19, 26, 18),
    shell: new id(0.62, 48, 32),
    arm: new pu(0.1, 0.13, 0.44, 20, 4),
    jaw: new mu(0.115, 0.34, 18, 4),
    cleg: new pu(0.06, 0.022, 0.62, 18, 5)
  };
  var GAME_COLOR = { squid: "#99d4ff", crab: "#ffd26b", octopus: "#9fffc9" };
  function surfMaterial(color, cfg) {
    const r = ramp(color, cfg.toon);
    const hasMap = Boolean(cfg.map);
    return new Xs({
      vertexShader: hasMap ? "#define USE_MAP\n" + SURF_VS : SURF_VS,
      fragmentShader: hasMap ? "#define USE_MAP\n" + SURF_FS : SURF_FS,
      uniforms: {
        uMap: { value: cfg.map || new yi() },
        uMapS: { value: cfg.mapS || new Jn(1, 1) },
        uMapO: { value: cfg.mapO || new Jn(0, 0) },
        uTintMul: { value: new Ci(1, 1, 1) },
        uLit: { value: r.lit },
        uMid: { value: r.mid },
        uShadow: { value: r.shadow },
        uDeep: { value: r.deep },
        uKey: { value: new Ci(-0.55, 0.72, 0.62) },
        uRim: { value: r.rim },
        uBack: { value: r.back },
        uToon: { value: cfg.toon ? 1 : 0 },
        uSoft: { value: 0.035 },
        uRimW: { value: cfg.rim },
        uBackW: { value: cfg.backRim },
        uAlpha: { value: cfg.alpha === void 0 ? 1 : cfg.alpha }
      }
    });
  }
  function hullMaterial(hex, thick, cfg) {
    const mode = cfg.inkHull ? "thin" : "off";
    const thickMode = false;
    return new Xs({
      vertexShader: HULL_VS,
      fragmentShader: HULL_FS,
      uniforms: {
        uThick: { value: mode === "off" ? 0 : thick * (thickMode ? 2.9 : 1) },
        uColor: { value: thickMode ? new Kr("#04030a") : ramp(hex, cfg.toon).edge },
        uAlpha: { value: thickMode ? 1 : 0.8 }
      },
      side: d
    });
  }
  function addHull(parent, mesh, geo, thick, cfg, color) {
    const hull = new Bs(geo, hullMaterial(color, thick, cfg));
    hull.scale.copy(mesh.scale);
    hull.position.copy(mesh.position);
    hull.rotation.copy(mesh.rotation);
    parent.add(hull);
    return hull;
  }
  function buildSquid(cfg, baseHex) {
    const group = new jl();
    const body = surfMaterial(baseHex, cfg);
    const eyeMat = surfMaterial("#f6fbff", cfg);
    const pupilMat = surfMaterial("#141020", cfg);
    const mantle = new Bs(GEO.mantle, body);
    mantle.scale.set(1, 1.22, 0.92);
    mantle.position.y = 0.6;
    addHull(group, mantle, GEO.mantle, 0.022, cfg, baseHex);
    group.add(mantle);
    for (const side of [-1, 1]) {
      const fin = new Bs(GEO.fin, body);
      fin.scale.set(0.9, 0.55, 0.42);
      fin.position.set(side * 0.56, 0.92, -0.06);
      fin.rotation.z = side * 0.5;
      addHull(group, fin, GEO.fin, 0.014, cfg, baseHex);
      group.add(fin);
      const eye = new Bs(GEO.eye, eyeMat);
      eye.scale.set(1, 1.12, 0.72);
      eye.position.set(side * 0.23, 0.6, 0.47);
      addHull(group, eye, GEO.eye, 0.01, cfg, "#f6fbff");
      group.add(eye);
      const pupil = new Bs(GEO.pupil, pupilMat);
      pupil.position.set(side * 0.24, 0.58, 0.57);
      addHull(group, pupil, GEO.pupil, 6e-3, cfg, "#141020");
      group.add(pupil);
    }
    const legs = [];
    [-0.5, -0.3, -0.1, 0.1, 0.3, 0.5].forEach((x, i) => {
      const pivot = new jl();
      pivot.position.set(x * 0.82, 0.2, i % 2 ? 0.1 : -0.08);
      pivot.rotation.z = x * 0.62;
      pivot.rotation.x = i % 2 ? 0.24 : -0.18;
      const leg = new Bs(GEO.leg, body);
      leg.position.y = -0.42;
      addHull(pivot, leg, GEO.leg, 0.014, cfg, baseHex);
      pivot.add(leg);
      group.add(pivot);
      legs.push(pivot);
    });
    group.userData.legs = legs;
    return group;
  }
  function buildCrab(cfg, baseHex) {
    const group = new jl();
    const body = surfMaterial(baseHex, cfg);
    const eyeMat = surfMaterial("#f6fbff", cfg);
    const pupilMat = surfMaterial("#141020", cfg);
    const shell = new Bs(GEO.shell, body);
    shell.scale.set(1.42, 0.78, 0.98);
    shell.position.y = 0.5;
    addHull(group, shell, GEO.shell, 0.022, cfg, baseHex);
    group.add(shell);
    const brow = new Bs(GEO.shell, body);
    brow.scale.set(0.62, 0.3, 0.62);
    brow.position.set(0, 0.78, 0.24);
    addHull(group, brow, GEO.shell, 0.016, cfg, baseHex);
    group.add(brow);
    for (const side of [-1, 1]) {
      const eye = new Bs(GEO.eye, eyeMat);
      eye.scale.set(0.86, 1, 0.7);
      eye.position.set(side * 0.25, 0.76, 0.42);
      addHull(group, eye, GEO.eye, 0.01, cfg, "#f6fbff");
      group.add(eye);
      const pupil = new Bs(GEO.pupil, pupilMat);
      pupil.position.set(side * 0.26, 0.76, 0.52);
      addHull(group, pupil, GEO.pupil, 6e-3, cfg, "#141020");
      group.add(pupil);
      const armPivot = new jl();
      armPivot.position.set(side * 0.72, 0.5, 0.26);
      armPivot.rotation.z = side * 1.15;
      armPivot.rotation.x = -0.35;
      const arm = new Bs(GEO.arm, body);
      arm.position.y = 0.2;
      addHull(armPivot, arm, GEO.arm, 0.014, cfg, baseHex);
      armPivot.add(arm);
      for (const jawSide of [-1, 1]) {
        const jawPivot = new jl();
        jawPivot.position.set(0, 0.42, 0);
        jawPivot.rotation.z = jawSide * 0.42;
        const jaw = new Bs(GEO.jaw, body);
        jaw.position.y = 0.16;
        addHull(jawPivot, jaw, GEO.jaw, 0.012, cfg, baseHex);
        jawPivot.add(jaw);
        armPivot.add(jawPivot);
      }
      armPivot.userData.claw = side;
      group.add(armPivot);
      (group.userData.claws = group.userData.claws || []).push(armPivot);
    }
    const legs = [];
    for (const side of [-1, 1]) {
      [-0.16, 0.14, 0.4].forEach((z2, i) => {
        const pivot = new jl();
        pivot.position.set(side * 0.6, 0.34, z2);
        pivot.rotation.z = side * (0.7 + i * 0.16);
        pivot.rotation.x = -0.2 + i * 0.22;
        const leg = new Bs(GEO.cleg, body);
        leg.position.y = -0.3;
        addHull(pivot, leg, GEO.cleg, 0.012, cfg, baseHex);
        pivot.add(leg);
        group.add(pivot);
        legs.push(pivot);
      });
    }
    group.userData.legs = legs;
    return group;
  }
  var SHAPES = {
    ufo: { path(c) {
      c.beginPath();
      c.moveTo(-26, 4);
      c.quadraticCurveTo(0, -12, 26, 4);
      c.quadraticCurveTo(0, 20, -26, 4);
      c.closePath();
    } },
    player: { path(c) {
      c.beginPath();
      c.moveTo(0, -11);
      c.lineTo(4, -3);
      c.lineTo(12, 1);
      c.lineTo(28, 7);
      c.lineTo(16, 9);
      c.lineTo(6, 6);
      c.lineTo(-6, 6);
      c.lineTo(-16, 9);
      c.lineTo(-28, 7);
      c.lineTo(-12, 1);
      c.lineTo(-4, -3);
      c.closePath();
    } },
    scrap: { path(c) {
      c.beginPath();
      c.moveTo(-22, 18);
      c.lineTo(-18, -6);
      c.lineTo(-6, -14);
      c.lineTo(14, -14);
      c.lineTo(22, -2);
      c.lineTo(22, 18);
      c.closePath();
    } },
    sentry: { path(c) {
      c.beginPath();
      c.moveTo(0, -20);
      c.lineTo(6, -8);
      c.lineTo(12, -12);
      c.lineTo(8, -2);
      c.lineTo(12, 10);
      c.lineTo(5, 8);
      c.lineTo(0, 20);
      c.lineTo(-5, 8);
      c.lineTo(-12, 10);
      c.lineTo(-8, -2);
      c.lineTo(-12, -12);
      c.lineTo(-6, -8);
      c.closePath();
    } },
    skull: { path(c) {
      c.beginPath();
      c.moveTo(-20, -10);
      c.quadraticCurveTo(-22, -19, 0, -19);
      c.quadraticCurveTo(22, -19, 20, -10);
      c.quadraticCurveTo(14, 2, 10, 4);
      c.lineTo(10, 14);
      c.lineTo(-10, 14);
      c.lineTo(-10, 4);
      c.quadraticCurveTo(-14, 2, -20, -10);
      c.closePath();
    } },
    viper: { path(c) {
      c.beginPath();
      c.moveTo(0, -12);
      c.lineTo(8, -4);
      c.lineTo(26, -9);
      c.lineTo(16, 2);
      c.lineTo(6, 6);
      c.lineTo(0, 14);
      c.lineTo(-6, 6);
      c.lineTo(-16, 2);
      c.lineTo(-26, -9);
      c.lineTo(-8, -4);
      c.closePath();
    } },
    box: { path(c) {
      c.beginPath();
      c.moveTo(-12, -8);
      c.arc(-8, -8, 4, Math.PI, Math.PI * 1.5);
      c.arc(8, -8, 4, Math.PI * 1.5, 0);
      c.arc(8, 8, 4, 0, Math.PI * 0.5);
      c.arc(-8, 8, 4, Math.PI * 0.5, Math.PI);
      c.closePath();
    } },
    turtle: { path(c) {
      c.beginPath();
      c.moveTo(-38, 10);
      c.quadraticCurveTo(-40, -26, 0, -28);
      c.quadraticCurveTo(40, -26, 38, 10);
      c.quadraticCurveTo(20, 22, 0, 22);
      c.quadraticCurveTo(-20, 22, -38, 10);
      c.closePath();
    } }
  };
  function shapeOf(def) {
    const sh2 = new Su();
    const c = {
      beginPath() {
      },
      closePath() {
        sh2.closePath();
      },
      moveTo(x, y2) {
        sh2.moveTo(x, y2);
      },
      lineTo(x, y2) {
        sh2.lineTo(x, y2);
      },
      quadraticCurveTo(a, b, x, y2) {
        sh2.quadraticCurveTo(a, b, x, y2);
      },
      arc(x, y2, r, a0, a1, ccw) {
        sh2.absarc(x, y2, r, a0, a1, !!ccw);
      }
    };
    def.path(c);
    return sh2;
  }
  function bodyFromShape(name, cfg, hex, group) {
    const shape = shapeOf(SHAPES[name]);
    const probe = new nd(shape, 16);
    probe.computeBoundingBox();
    const pb = probe.boundingBox;
    probe.dispose();
    const span = Math.max(pb.max.x - pb.min.x, pb.max.y - pb.min.y);
    const geo = new Ku(shape, {
      depth: span * 0.3,
      bevelEnabled: true,
      bevelThickness: span * 0.055,
      bevelSize: span * 0.05,
      bevelSegments: 3,
      curveSegments: 18
    });
    geo.center();
    const mesh = new Bs(geo, surfMaterial(hex, cfg));
    addHull(group, mesh, geo, 0.022, cfg, hex);
    group.add(mesh);
    return { geo, span, front: span * 0.21 };
  }
  function finishMob(group, target) {
    const box = new Li().setFromObject(group);
    const size = box.getSize(new Ci());
    const center = box.getCenter(new Ci());
    const k2 = target / Math.max(size.x, size.y, size.z);
    const outer = new jl();
    group.scale.setScalar(k2);
    group.position.set(-center.x * k2, -center.y * k2, -center.z * k2);
    outer.add(group);
    return outer;
  }
  function part(group, geo, hex, cfg, x, y2, z2, thick, sx, sy, sz) {
    const mesh = new Bs(geo, surfMaterial(hex, cfg));
    mesh.position.set(x, y2, z2);
    if (sx) mesh.scale.set(sx, sy, sz);
    addHull(group, mesh, geo, thick || 0.012, cfg, hex);
    group.add(mesh);
    return mesh;
  }
  function buildUfo(cfg, hex) {
    const g = new jl();
    const b = bodyFromShape("ufo", cfg, hex, g);
    const dome = new id(11, 28, 18);
    part(g, dome, "#f2f8ff", cfg, 0, 8.5, 0, 0.012, 1, 0.72, 0.9);
    const light = new id(2.6, 16, 12);
    [-14, 0, 14].forEach((x) => part(g, light, "#ffe066", cfg, x, -3.5, 7, 8e-3));
    part(g, new sd(19, 2.1, 10, 34), hex, cfg, 0, 2, 0, 0.01, 1, 0.55, 1);
    return finishMob(g, 2.3);
  }
  function buildPlayer(cfg, hex) {
    const g = new jl();
    const b = bodyFromShape("player", cfg, hex, g);
    part(g, new id(4.4, 22, 14), "#dff6ff", cfg, 0, 1.5, 3.5, 0.01, 1, 0.85, 1.5);
    const tip = new ks(4, 2.4, 6);
    [-24, 24].forEach((x) => part(g, tip, hex, cfg, x, 4.5, 0, 0.01));
    part(g, new mu(3.2, 7, 16), hex, cfg, 0, -8, 0, 0.01, 1, 1, 1);
    g.userData.nose = true;
    return finishMob(g, 2.3);
  }
  function buildScrap(cfg, hex) {
    const g = new jl();
    bodyFromShape("scrap", cfg, hex, g);
    const wheel = new pu(5, 5, 4.6, 20);
    const wheels = [];
    [-12, 1, 14].forEach((x) => {
      const m = part(g, wheel, "#3a3f52", cfg, x, -14, 0, 0.01);
      m.rotation.x = Math.PI / 2;
      wheels.push(m);
    });
    g.userData.legs = wheels;
    part(g, new ks(12, 4, 7), hex, cfg, 8, 12, 2, 0.01);
    part(g, new id(3, 16, 12), "#ffe066", cfg, -12, 8, 6, 8e-3);
    return finishMob(g, 2.3);
  }
  function buildSentry(cfg, hex) {
    const g = new jl();
    bodyFromShape("sentry", cfg, hex, g);
    const spike = new mu(2.6, 9, 14);
    [[-13, 0, 1], [13, 0, -1]].forEach(([x, y2, s]) => {
      const m = part(g, spike, "#e8fff0", cfg, x, y2, 2, 0.01);
      m.rotation.z = s * Math.PI / 2;
    });
    part(g, new id(3.4, 18, 12), "#ffe066", cfg, 0, -2, 6, 8e-3);
    part(g, new id(1.7, 14, 10), "#141020", cfg, 0, -2, 8.5, 6e-3);
    return finishMob(g, 2.3);
  }
  function buildSkull(cfg, hex) {
    const g = new jl();
    bodyFromShape("skull", cfg, hex, g);
    const eye = new id(6, 22, 14);
    [-9, 9].forEach((x) => part(g, eye, "#0d0d14", cfg, x, -6, 5, 0.01, 1, 1, 0.6));
    const tooth = new ks(3, 6, 5);
    [-6, -2, 2, 6].forEach((x) => part(g, tooth, "#f2f2f8", cfg, x, 11, 3, 8e-3));
    part(g, new ks(22, 3.4, 6), "#0d0d14", cfg, 0, 6.5, 4, 8e-3);
    return finishMob(g, 2.3);
  }
  function buildViper(cfg, hex) {
    const g = new jl();
    bodyFromShape("viper", cfg, hex, g);
    const wing = new ks(22, 3, 9);
    const wings = [];
    [-15, 15].forEach((x) => {
      const m = part(g, wing, hex, cfg, x, 2, -2, 0.01);
      m.rotation.z = x > 0 ? -0.22 : 0.22;
      wings.push(m);
    });
    g.userData.claws = wings;
    part(g, new id(5.4, 20, 14), hex, cfg, 0, -10, 3, 0.01, 1, 0.9, 1.1);
    part(g, new mu(2.4, 6, 14), "#ffe066", cfg, 0, -16, 3, 8e-3);
    part(g, new id(1.5, 12, 8), "#141020", cfg, 2.4, -11, 7, 6e-3);
    return finishMob(g, 2.3);
  }
  function buildTurtle(cfg, hex) {
    const g = new jl();
    bodyFromShape("turtle", cfg, hex, g);
    const rib = new ks(2.6, 44, 4);
    [-24, -8, 8, 24].forEach((x) => {
      const m = part(g, rib, hex, cfg, x, 0, 9, 0.01);
      m.rotation.z = x * 0.012;
    });
    part(g, new id(7, 22, 14), "#9fffc9", cfg, 0, -16, 6, 0.01, 1.1, 0.8, 1);
    [-3, 3].forEach((x) => part(g, new id(1.9, 12, 8), "#141020", cfg, x, -18, 11, 6e-3));
    const foot = new id(6, 18, 12);
    const feet = [];
    [-30, 30].forEach((x) => {
      const m = part(g, foot, "#2a8f5c", cfg, x, -14, 4, 0.01, 1.2, 0.7, 1);
      feet.push(m);
    });
    g.userData.claws = feet;
    return finishMob(g, 2.3);
  }
  function letterTexture(label, color) {
    const c = document.createElement("canvas");
    c.width = c.height = 128;
    const g = c.getContext("2d");
    g.fillStyle = color || "#0d0d14";
    g.font = "bold 92px 'Courier New', monospace";
    g.textAlign = "center";
    g.textBaseline = "middle";
    g.fillText(label, 64, 70);
    const tex = new Vh(c);
    tex.anisotropy = 4;
    return tex;
  }
  var QUALITY_COLOR = { 1: "#ffe066", 2: "#62ffa1", 3: "#ff3366" };
  function dropBuilder(letter, hex, quality) {
    return function(cfg, color) {
      const g = new jl();
      const body = bodyFromShape("box", cfg, color || hex, g);
      const label = new Bs(
        new ha(15, 15),
        new es({ map: letterTexture(letter), transparent: true, depthWrite: false })
      );
      label.position.set(0, 0, body.front + body.span * 0.055 + 0.4);
      g.add(label);
      if (quality) {
        const qc2 = QUALITY_COLOR[quality] || QUALITY_COLOR[1];
        const bar = new ks(31, 2.2, 2.2);
        const vbar = new ks(2.2, 31, 2.2);
        [[-15.5, 0, vbar], [15.5, 0, vbar]].forEach(([x, y2, geo]) => {
          const m = new Bs(geo, new es({ color: qc2 }));
          m.position.set(x, y2, body.front + 1.2);
          g.add(m);
        });
        [[0, -15.5, bar], [0, 15.5, bar]].forEach(([x, y2, geo]) => {
          const m = new Bs(geo, new es({ color: qc2 }));
          m.position.set(x, y2, body.front + 1.2);
          g.add(m);
        });
      }
      return finishMob(g, 2);
    };
  }
  var DROPS = {
    drop_rapid: dropBuilder("R", "#ff6655", 0),
    drop_double: dropBuilder("D", "#ffb04c", 0),
    drop_laser: dropBuilder("L", "#6fdcff", 0),
    drop_shield: dropBuilder("S", "#62ffa1", 0),
    drop_slow: dropBuilder("Z", "#bf9cff", 0),
    drop_bomb: dropBuilder("B", "#ffe66a", 0),
    drop_loot: dropBuilder("C", "#ffd166", 2)
  };
  var MOBS = {
    squid: buildSquid,
    crab: buildCrab,
    ufo: buildUfo,
    player: buildPlayer,
    scrap: buildScrap,
    sentry: buildSentry,
    skull: buildSkull,
    viper: buildViper,
    turtle: buildTurtle,
    drop_rapid: DROPS.drop_rapid,
    drop_double: DROPS.drop_double,
    drop_laser: DROPS.drop_laser,
    drop_shield: DROPS.drop_shield,
    drop_slow: DROPS.drop_slow,
    drop_bomb: DROPS.drop_bomb,
    drop_loot: DROPS.drop_loot
  };
  Object.assign(GAME_COLOR, {
    ufo: "#ff55aa",
    player: "#78ff78",
    scrap: "#99d4ff",
    sentry: "#9fffc9",
    skull: "#ff3366",
    viper: "#2fc96f",
    turtle: "#2fc96f",
    drop_rapid: "#ff6655",
    drop_double: "#ffb04c",
    drop_laser: "#6fdcff",
    drop_shield: "#62ffa1",
    drop_slow: "#bf9cff",
    drop_bomb: "#ffe66a",
    drop_loot: "#ffd166"
  });

  // mockups/toon3d.v2.js
  function polyShape(pts, close) {
    const sh2 = new Su();
    pts.forEach(([x, y2], i) => i ? sh2.lineTo(x, -y2) : sh2.moveTo(x, -y2));
    if (close !== false) sh2.closePath();
    return sh2;
  }
  function roundedShape(pts, radius) {
    const n = pts.length;
    const P2 = pts.map(([x, y2]) => new Jn(x, -y2));
    let r = radius;
    for (let i = 0; i < n; i += 1) {
      const len = P2[i].distanceTo(P2[(i + 1) % n]);
      r = Math.min(r, len * 0.45);
    }
    const sh2 = new Su();
    for (let i = 0; i < n; i += 1) {
      const cur = P2[i];
      const a = cur.clone().sub(P2[(i - 1 + n) % n]).normalize().multiplyScalar(r);
      const b = P2[(i + 1) % n].clone().sub(cur).normalize().multiplyScalar(r);
      const from = cur.clone().sub(a);
      const to2 = cur.clone().add(b);
      if (i === 0) sh2.moveTo(from.x, from.y);
      else sh2.lineTo(from.x, from.y);
      sh2.quadraticCurveTo(cur.x, cur.y, to2.x, to2.y);
    }
    sh2.closePath();
    return sh2;
  }
  function extrudePoly(pts, cfg, hex, group, opts) {
    const o = opts || {};
    const sh2 = o.round ? roundedShape(pts, o.round) : polyShape(pts);
    let minx = 1e9, maxx = -1e9, miny = 1e9, maxy = -1e9;
    pts.forEach(([x, y2]) => {
      minx = Math.min(minx, x);
      maxx = Math.max(maxx, x);
      miny = Math.min(miny, y2);
      maxy = Math.max(maxy, y2);
    });
    const span = Math.max(maxx - minx, maxy - miny);
    const depth = o.depth || span * 0.34;
    const bev = o.bevel === void 0 ? span * 0.06 : o.bevel;
    const geo = new Ku(sh2, {
      depth,
      bevelEnabled: bev > 0,
      bevelThickness: bev,
      bevelSize: bev * 0.9,
      bevelSegments: 3,
      curveSegments: 12
    });
    geo.center();
    const mesh = new Bs(geo, surfMaterial(hex, o.map ? Object.assign({}, cfg, { map: o.map, mapS: o.mapS, mapO: o.mapO }) : cfg));
    addHull(group, mesh, geo, 0.02, cfg, hex);
    group.add(mesh);
    return { mesh, span, front: depth / 2 + bev };
  }
  function buildSaucer(cfg, hex) {
    const g = new jl();
    const pink = hex || GAME_COLOR.ufo;
    const profile = [
      [0, -9],
      [6, -8.6],
      [12, -6.4],
      [19, -3],
      [25.5, 0.4],
      [26, 1.6],
      [23, 3.4],
      [17, 5.4],
      [10, 6.8],
      [4, 7.4],
      [0, 7.5]
    ].map(([x, y2]) => new Jn(x, -y2));
    const disc = new Bs(new hu(profile, 56), surfMaterial(pink, cfg));
    addHull(g, disc, disc.geometry, 0.02, cfg, pink);
    g.add(disc);
    const dome = new Bs(
      new id(9.4, 40, 22, 0, Math.PI * 2, 0, Math.PI * 0.52),
      surfMaterial("#dff2ff", cfg)
    );
    dome.position.y = 7;
    addHull(g, dome, dome.geometry, 0.012, cfg, "#dff2ff");
    g.add(dome);
    const pilot = new Bs(new id(3.4, 20, 14), surfMaterial(pink, cfg));
    pilot.scale.set(1, 0.9, 1);
    pilot.position.y = 7.6;
    g.add(pilot);
    const lights = new jl();
    for (let i = 0; i < 6; i += 1) {
      const a = i / 6 * Math.PI * 2;
      const l = new Bs(
        new id(2.5, 18, 12),
        new es({ color: "#ffe9a8" })
      );
      l.position.set(Math.cos(a) * 21.5, -1.4, Math.sin(a) * 21.5);
      lights.add(l);
    }
    g.add(lights);
    g.userData.spin = [lights];
    const beam = new Bs(
      new du(8.5, 34),
      new es({ color: "#ffe066", side: p })
    );
    beam.rotation.x = Math.PI / 2;
    beam.position.y = -9.1;
    g.add(beam);
    return finishMob(g, 2.35);
  }
  function buildPlayerC(cfg, hex) {
    const g = new jl();
    const green = hex || GAME_COLOR.player;
    const hull = new Bs(new ks(30, 12, 16), surfMaterial(green, cfg));
    addHull(g, hull, hull.geometry, 0.02, cfg, green);
    g.add(hull);
    const strip = new Bs(new ks(14, 5, 7), surfMaterial("#dff6ff", cfg));
    strip.position.set(0, 6.5, 5);
    addHull(g, strip, strip.geometry, 0.012, cfg, "#dff6ff");
    g.add(strip);
    const wing = new ks(24, 4, 12);
    const pods = [];
    [-1, 1].forEach((s) => {
      const w2 = part(g, wing, green, cfg, s * 24, 0, -2, 0.016);
      w2.rotation.z = s * 0.12;
      [-6, 4].forEach((z2) => {
        const pod = part(g, new pu(3.2, 3.2, 10, 18), "#2a3038", cfg, s * 30, -3, z2, 0.01);
        pod.rotation.x = Math.PI / 2;
        pods.push(pod);
        const glow = new Bs(
          new du(2.7, 20),
          new es({ color: "#7888ff" })
        );
        glow.position.set(s * 30, -3, z2 - 5.2);
        glow.rotation.y = Math.PI;
        g.add(glow);
      });
      part(g, new ks(3, 10, 9), green, cfg, s * 33, 6, -4, 0.01);
    });
    part(g, new ks(10, 3, 8), "#2a3038", cfg, 0, -2, -10, 0.01);
    const barrel = new pu(1.5, 1.7, 13, 14);
    const muzzle = new pu(2.3, 2.3, 2.6, 14);
    [0].forEach((x) => {
      const gun = part(g, barrel, "#2a3038", cfg, x, 0.5, 12, 0.01);
      gun.rotation.x = Math.PI / 2;
      const tip = part(g, muzzle, "#ffd166", cfg, x, 0.5, 18.5, 8e-3);
      tip.rotation.x = Math.PI / 2;
    });
    part(g, new ks(8, 4.5, 5), "#2a3038", cfg, 0, 0.5, 8, 0.01);
    g.userData.spin = [];
    g.userData.claws = [];
    return finishMob(g, 2.35);
  }
  function buildCrabB(cfg, hex, opts) {
    const o = opts || {};
    const g = new jl();
    const yellow = hex || GAME_COLOR.crab;
    const shell = extrudePoly([
      [-14, -8],
      [14, -8],
      [18, 2],
      [12, 10],
      [-12, 10],
      [-18, 2]
    ], cfg, yellow, g, { depth: 18, bevel: 3.4, round: 6, map: o.map, mapS: o.mapS, mapO: o.mapO });
    g.userData.shell = shell.mesh;
    part(g, new id(6, 24, 14), yellow, cfg, 0, 12, 2, 0.014, 2.1, 0.5, 1.2);
    for (const s of [-1, 1]) {
      part(g, new pu(1.7, 1.7, 7, 14), yellow, cfg, s * 5.5, 15, 2, 0.01);
      part(g, new id(3.1, 18, 12), "#f6fbff", cfg, s * 5.5, 19, 2, 0.01);
      part(g, new id(1.5, 12, 8), "#141020", cfg, s * 5.5, 19.5, 4.4, 6e-3);
    }
    const legs = [];
    for (const s of [-1, 1]) {
      [[-11, 4], [-3, 8], [5, 10], [12, 8]].forEach(([x, z2], i) => {
        const p2 = new jl();
        p2.position.set(x, -8, z2 - 6);
        p2.rotation.z = s * (0.5 + i * 0.14);
        p2.rotation.x = -0.3 + i * 0.2;
        const seg = part(p2, new pu(1.9, 1, 13, 14), yellow, cfg, s * 5, -3, 0, 0.012);
        seg.rotation.z = s * 0.5;
        const foot = part(p2, new mu(1.5, 8, 12), yellow, cfg, s * 9, -8, 0, 0.01);
        foot.rotation.z = s * 1.1;
        g.add(p2);
        legs.push(p2);
      });
    }
    g.userData.legs = legs;
    const claws = [];
    for (const s of [-1, 1]) {
      const p2 = new jl();
      p2.position.set(s * 15, -6, 6);
      p2.rotation.z = s * 0.5;
      part(p2, new pu(2.4, 2, 9, 14), yellow, cfg, 0, 4, 0, 0.012);
      part(p2, new id(4.2, 20, 14), yellow, cfg, 0, 11, 0, 0.012, 1, 1.2, 0.8);
      part(p2, new mu(1.9, 7, 12), yellow, cfg, s * 3.4, 15, 0, 0.01);
      g.add(p2);
      claws.push(p2);
    }
    g.userData.claws = claws;
    return finishMob(g, 2.3);
  }
  function buildCrabC(cfg, hex) {
    const g = new jl();
    const yellow = hex || GAME_COLOR.crab;
    const shell = new Bs(new id(15, 44, 26), surfMaterial(yellow, cfg));
    shell.scale.set(1.5, 1.15, 1.25);
    shell.position.y = 6;
    addHull(g, shell, shell.geometry, 0.022, cfg, yellow);
    g.add(shell);
    const rim = new Bs(new sd(19, 2.6, 12, 40), surfMaterial("#e0a83c", cfg));
    rim.rotation.x = Math.PI / 2;
    rim.position.y = 2;
    rim.scale.set(1.45, 1.1, 1);
    addHull(g, rim, rim.geometry, 0.014, cfg, "#e0a83c");
    g.add(rim);
    for (const s of [-1, 1]) {
      part(g, new pu(2.1, 2.1, 10, 14), yellow, cfg, s * 7, 19, 2, 0.01);
      part(g, new id(4, 20, 14), "#f6fbff", cfg, s * 7, 25, 2, 0.012);
      part(g, new id(1.9, 12, 8), "#141020", cfg, s * 7, 25.5, 5.4, 6e-3);
    }
    const legs = [];
    for (const s of [-1, 1]) {
      [[-16, 8], [-4, 12], [8, 10]].forEach(([x, z2], i) => {
        const p2 = new jl();
        p2.position.set(x, 0, z2 - 8);
        p2.rotation.z = s * (0.55 + i * 0.16);
        const seg = part(p2, new pu(2.2, 1.2, 16, 14), yellow, cfg, s * 6, -6, 0, 0.012);
        seg.rotation.z = s * 0.55;
        const low = part(p2, new pu(1.2, 0.7, 12, 12), yellow, cfg, s * 12, -13, 0, 0.01);
        low.rotation.z = s * 0.35;
        g.add(p2);
        legs.push(p2);
      });
    }
    g.userData.legs = legs;
    const claws = [];
    for (const s of [-1, 1]) {
      const p2 = new jl();
      p2.position.set(s * 20, 4, 6);
      p2.rotation.z = s * 0.35;
      part(p2, new pu(3.2, 2.6, 12, 16), yellow, cfg, 0, 7, 0, 0.014);
      const palm = part(p2, new id(6.4, 22, 16), yellow, cfg, 0, 16, 0, 0.016, 1, 1.25, 0.85);
      palm.position.x = s * 1.5;
      const fixed = part(p2, new mu(3.1, 12, 14), "#e0a83c", cfg, s * 5, 23, 0, 0.012);
      fixed.rotation.z = -s * 0.35;
      const dactyl = new jl();
      dactyl.position.set(s * 4, 18, 0);
      dactyl.rotation.z = s * 0.9;
      const mov = part(dactyl, new mu(2.6, 11, 14), "#e0a83c", cfg, 0, 5, 0, 0.012);
      mov.rotation.z = -s * 0.5;
      p2.add(dactyl);
      g.add(p2);
      claws.push(p2);
    }
    g.userData.claws = claws;
    part(g, new ks(12, 3.4, 8), "#8a5a20", cfg, 0, -6, 12, 0.01);
    return finishMob(g, 2.3);
  }
  function buildScrapB(cfg, hex) {
    const g = new jl();
    const blue = hex || GAME_COLOR.scrap;
    const body = extrudePoly([
      [-22, 18],
      [-18, -6],
      [-6, -14],
      [14, -14],
      [22, -2],
      [22, 18]
    ], cfg, blue, g, { depth: 20, bevel: 1.6 });
    const front = body.front;
    part(g, new ks(16, 5, 13), "#4f8cff", cfg, 6, 17, 2, 0.012);
    part(g, new pu(2.4, 2.4, 14, 14), "#4f8cff", cfg, -14, 12, 4, 0.01);
    part(g, new id(3, 14, 10), "#3a3f52", cfg, -14, 20, 4, 8e-3);
    [-16, 16].forEach((x) => part(g, new ks(4, 4, 4), "#4f8cff", cfg, x, 4, front - 1, 0.01));
    for (const s of [-1, 1]) {
      part(g, new id(4.4, 20, 14), "#f6fbff", cfg, s * 8, 4, front - 0.5, 0.012, 1, 1, 0.7);
      part(g, new id(2.1, 14, 10), "#0d0d14", cfg, s * 8, 4, front + 2.6, 6e-3);
    }
    const wheel = new pu(5.2, 5.2, 26, 22);
    const hub = new pu(2.2, 2.2, 27, 14);
    const roll = new jl();
    [-12, 1, 14].forEach((x) => {
      const w2 = part(roll, wheel, "#22262f", cfg, x, -18, 0, 0.014);
      w2.rotation.x = Math.PI / 2;
      const h = part(roll, hub, "#ffd166", cfg, x, -18, 0, 8e-3);
      h.rotation.x = Math.PI / 2;
    });
    g.add(roll);
    g.userData.roll = [roll];
    g.userData.legs = [];
    g.userData.claws = [];
    return finishMob(g, 2.35);
  }
  function makeBone(cfg, hex, len, shaft, knob, flat) {
    const bone = new jl();
    const barGeo = new pu(shaft, shaft, len, 22);
    const bar = new Bs(barGeo, surfMaterial(hex, cfg));
    bar.rotation.z = Math.PI / 2;
    bar.scale.z = flat;
    addHull(bone, bar, barGeo, 0.016, cfg, hex);
    bone.add(bar);
    const lobeGeo = new id(knob, 24, 16);
    [-1, 1].forEach((ex) => [-1, 1].forEach((ey) => {
      const lobe = new Bs(lobeGeo, surfMaterial(hex, cfg));
      lobe.position.set(ex * len / 2, ey * knob * 0.8, 0);
      lobe.scale.set(1, 1, flat);
      addHull(bone, lobe, lobeGeo, 0.014, cfg, hex);
      bone.add(lobe);
    }));
    return bone;
  }
  function buildSkullB(cfg, hex) {
    const g = new jl();
    const pink = hex || GAME_COLOR.skull;
    const bone = "#f2f4f8";
    const boneA = makeBone(cfg, bone, 88, 5.5, 8.6, 0.55);
    boneA.rotation.z = Math.PI / 4;
    boneA.position.set(0, 3, -14);
    g.add(boneA);
    const boneB = makeBone(cfg, bone, 88, 5.5, 8.6, 0.55);
    boneB.rotation.z = -Math.PI / 4;
    boneB.position.set(0, 3, -14);
    g.add(boneB);
    const head = extrudePoly([
      [-20, -10],
      [-22, -19],
      [0, -19],
      [22, -19],
      [20, -10],
      [14, 2],
      [10, 4],
      [10, 14],
      [-10, 14],
      [-10, 4],
      [-14, 2]
    ], cfg, pink, g, { depth: 22, bevel: 2.2 });
    const front = head.front;
    for (const s of [-1, 1]) {
      part(g, new id(6.4, 22, 14), "#0d0d14", cfg, s * 9.5, 4, front - 1.5, 0.01, 1, 1.15, 0.55);
      part(g, new id(2.2, 14, 10), "#ff77aa", cfg, s * 9.5, 4.5, front + 1.2, 6e-3);
    }
    const nose = extrudePoly([[0, -5], [3.5, 3], [-3.5, 3]], cfg, "#0d0d14", g, { depth: 4, bevel: 0.6 });
    nose.mesh.position.set(0, -1, front - 1.5);
    part(g, new ks(22, 6, 6), "#0d0d14", cfg, 0, -11, front - 2, 8e-3);
    const jaw = extrudePoly([[-11, 0], [11, 0], [8, -9], [-8, -9]], cfg, pink, g, { depth: 16, bevel: 1.4 });
    jaw.mesh.position.set(0, -14, -1);
    const tooth = new ks(3.4, 3.6, 4.4);
    for (let i = 0; i < 4; i += 1) {
      const x = -9 + i * 6;
      part(g, tooth, bone, cfg, x, -9.5, front - 2.5, 8e-3);
      part(g, tooth, bone, cfg, x - 3, -14.5, front - 2.5, 8e-3);
    }
    const orb = new Bs(
      new id(4.2, 22, 16),
      new es({ color: "#ff3366" })
    );
    orb.position.set(0, -13, front - 1);
    g.add(orb);
    g.userData.spin = [];
    g.userData.claws = [];
    g.userData.legs = [];
    const spike = new mu(3.4, 12, 14);
    [-26, -14, 14, 26].forEach((x) => part(g, spike, "#ffd166", cfg, x, 24, -2, 0.012));
    return finishMob(g, 2.45);
  }
  var SKIN_CACHE = {};
  function hexPath(ctx, cx, cy, rad, rot) {
    ctx.beginPath();
    for (let i = 0; i < 6; i += 1) {
      const a = rot + i / 6 * Math.PI * 2;
      const x = cx + Math.cos(a) * rad;
      const y2 = cy + Math.sin(a) * rad;
      if (i) ctx.lineTo(x, y2);
      else ctx.moveTo(x, y2);
    }
    ctx.closePath();
  }
  function domeSkinTexture(S2) {
    if (SKIN_CACHE["d" + S2]) return SKIN_CACHE["d" + S2];
    const PL = 1024;
    const pc2 = document.createElement("canvas");
    pc2.width = PL;
    pc2.height = PL;
    const p2 = pc2.getContext("2d");
    p2.setTransform(1, 0, 0, 1, 0, 0);
    p2.fillStyle = "#1c6f3c";
    p2.fillRect(0, 0, PL, PL);
    const WX = 29.75 * 1.25;
    const WZ = 29.75 * 1.05;
    p2.setTransform(PL / 2 / WX, 0, 0, PL / 2 / WZ, PL / 2, PL / 2);
    const N2 = 6;
    const s3 = Math.sqrt(3) * S2;
    const s15 = 1.5 * S2;
    for (let q2 = -N2; q2 <= N2; q2 += 1) {
      for (let r = Math.max(-N2, -q2 - N2); r <= Math.min(N2, -q2 + N2); r += 1) {
        const gx = s3 * (q2 + r / 2);
        const gz = s15 * r;
        if (gx / WX * (gx / WX) + gz / WZ * (gz / WZ) > 1) continue;
        const ring = Math.max(Math.abs(q2), Math.abs(r), Math.abs(q2 + r));
        const lit = ring === 0 ? "#5cf0a2" : Math.hypot(gx, gz) > 26 ? "#43c477" : "#4de692";
        const dk = ring === 0 ? "#2f9e60" : Math.hypot(gx, gz) > 26 ? "#24764a" : "#2c9257";
        const rad = S2 * 0.93;
        const gr2 = p2.createRadialGradient(gx, gz, rad * 0.12, gx, gz, rad);
        gr2.addColorStop(0, lit);
        gr2.addColorStop(0.72, lit);
        gr2.addColorStop(1, dk);
        p2.fillStyle = gr2;
        hexPath(p2, gx, gz, rad, Math.PI / 6);
        p2.fill();
      }
    }
    p2.setTransform(1, 0, 0, 1, 0, 0);
    const src = p2.getImageData(0, 0, PL, PL).data;
    const TW = 1024;
    const TH = 512;
    const tc2 = document.createElement("canvas");
    tc2.width = TW;
    tc2.height = TH;
    const t2 = tc2.getContext("2d");
    const out = t2.createImageData(TW, TH);
    const K = PL / 2 / 29.75;
    const capPhi = Math.PI * 0.54;
    for (let y2 = 0; y2 < TH; y2 += 1) {
      const phi = (y2 + 0.5) / TH * capPhi;
      const rho = 30 * Math.sin(phi);
      for (let x = 0; x < TW; x += 1) {
        const th2 = (x + 0.5) / TW * Math.PI * 2;
        let px = PL / 2 + Math.cos(th2) * rho * K;
        let py = PL / 2 + Math.sin(th2) * rho * K;
        px = Math.max(0, Math.min(PL - 1, px)) | 0;
        py = Math.max(0, Math.min(PL - 1, py)) | 0;
        const si2 = (py * PL + px) * 4;
        const di2 = ((TH - 1 - y2) * TW + x) * 4;
        out.data[di2] = src[si2];
        out.data[di2 + 1] = src[si2 + 1];
        out.data[di2 + 2] = src[si2 + 2];
        out.data[di2 + 3] = 255;
      }
    }
    t2.putImageData(out, 0, 0);
    const tex = new Vh(tc2);
    tex.colorSpace = Je;
    SKIN_CACHE["d" + S2] = tex;
    return tex;
  }
  function bandSkinTexture() {
    if (SKIN_CACHE.band) return SKIN_CACHE.band;
    const W2 = 1024;
    const H2 = 128;
    const c = document.createElement("canvas");
    c.width = W2;
    c.height = H2;
    const g = c.getContext("2d");
    g.fillStyle = "#1c6f3c";
    g.fillRect(0, 0, W2, H2);
    const cols = 26;
    const cw = W2 / cols;
    for (let row = 0; row < 3; row += 1) {
      const cy = 28 + row * 36;
      for (let i = -1; i <= cols; i += 1) {
        const cx = (i + 0.5) * cw + (row % 2 ? cw / 2 : 0);
        const gr2 = g.createRadialGradient(cx, cy, 4, cx, cy, cw * 0.95);
        gr2.addColorStop(0, "#43c477");
        gr2.addColorStop(1, "#256f47");
        g.fillStyle = gr2;
        hexPath(g, cx, cy, cw * 0.62, Math.PI / 6);
        g.fill();
      }
    }
    const tex = new Vh(c);
    tex.colorSpace = Je;
    SKIN_CACHE.band = tex;
    return tex;
  }
  function buildTurtleB(cfg, hex) {
    const g = new jl();
    const green = hex || GAME_COLOR.turtle;
    const dark = "#188a4c";
    const cream = "#d8f5c0";
    const R2 = 30;
    const rings = cfg.plateRings === void 0 ? 3 : cfg.plateRings;
    const flat = cfg.flatBelly === void 0 ? 1 : cfg.flatBelly;
    const noRim = Object.assign({}, cfg, { rim: 0, backRim: 0 });
    const SX = 1.25;
    const SY = 0.8;
    const SZ = 1.05;
    const SIZES = [8.6, 7.4, 6.4, 5.4, 4.6];
    const S2 = SIZES[Math.max(0, Math.min(4, rings - 1))];
    const skin = domeSkinTexture(S2);
    const dome = new Bs(
      new id(R2, 64, 32, 0, Math.PI * 2, 0, Math.PI * (flat ? 0.54 : 0.995)),
      surfMaterial("#ffffff", Object.assign({}, cfg, { map: skin }))
    );
    dome.scale.set(1.25, 0.8, 1.05);
    dome.position.y = 2;
    addHull(g, dome, dome.geometry, 0.024, cfg, green);
    g.add(dome);
    if (flat) {
      const lid = new Bs(new du(R2 * 1, 52), surfMaterial(dark, noRim));
      lid.rotation.x = Math.PI / 2;
      lid.scale.set(SX, SZ, 1);
      lid.position.y = -0.4;
      addHull(g, lid, lid.geometry, 0.012, noRim, dark);
      g.add(lid);
    }
    const rim = new Bs(new pu(R2 * 1.02, R2 * 0.99, 3.6, 52), surfMaterial("#ffffff", Object.assign({}, noRim, { map: bandSkinTexture() })));
    rim.scale.set(SX, 1, SZ);
    rim.position.y = -1;
    addHull(g, rim, rim.geometry, 0.016, noRim, dark);
    g.add(rim);
    part(g, new ks(52, 2.6, 38), cream, noRim, 0, -11, 0, 0.014);
    const neck = part(g, new pu(6.2, 7.6, 20, 20), "#6fd698", cfg, 0, 0.5, 26, 0.014);
    neck.rotation.x = Math.PI / 2;
    const fold = part(g, new sd(6.9, 1.7, 10, 26), "#4fae78", cfg, 0, 0.5, 20.5, 0.01);
    fold.rotation.x = Math.PI / 2;
    const head = new jl();
    head.position.set(0, 2, 33);
    part(head, new id(11, 26, 18), "#7ee6a4", cfg, 0, 2, 4, 0.016, 1.05, 0.95, 1.15);
    part(head, new id(5.4, 20, 14), "#5fd08a", cfg, 0, -1, 13, 0.012, 1.2, 0.7, 0.9);
    for (const s of [-1, 1]) {
      part(head, new id(3.1, 18, 12), "#f6fbff", cfg, s * 5, 6, 10, 0.01);
      part(head, new id(1.6, 12, 8), "#141020", cfg, s * 5, 6, 12.6, 6e-3);
      part(head, new ks(5, 1.6, 3), "#3a8f5c", cfg, s * 5, 9.4, 10.5, 6e-3);
    }
    part(head, new ks(9, 1.6, 4), "#2a5f3c", cfg, 0, -3, 15, 6e-3);
    g.add(head);
    const paddles = [];
    [[-1, 24, 1.35], [1, 24, 1.35], [-1, -20, 0.9], [1, -20, 0.9]].forEach(([s, z2, k2]) => {
      const p2 = new jl();
      p2.position.set(s * 24, -4, z2);
      p2.rotation.y = s * (z2 > 0 ? -0.5 : 0.5);
      const pad = part(p2, new id(10, 22, 14), "#7ee6a4", cfg, s * 8, 0, 0, 0.014, 1.3, 0.35, 0.8 * k2);
      pad.rotation.z = s * 0.35;
      g.add(p2);
      paddles.push(p2);
    });
    g.userData.claws = paddles;
    g.userData.legs = [];
    g.userData.spin = [];
    const tail = part(g, new mu(5, 14, 14), "#5fd08a", cfg, 0, -2, -32, 0.012);
    tail.rotation.x = Math.PI / 2.2;
    void tail;
    return finishMob(g, 2.5);
  }
  var QUALITY = { 1: "#ffe066", 2: "#62ffa1", 3: "#ff3366" };
  var GLYPH = "#141420";
  var SHIELD_GREEN = "#0c6b3d";
  function dropBase(cfg, hex, g) {
    const shape = polyShape([[-12, -8], [-8, -12], [8, -12], [12, -8], [12, 8], [8, 12], [-8, 12], [-12, 8]]);
    const geo = new Ku(shape, {
      depth: 9,
      bevelEnabled: true,
      bevelThickness: 2.4,
      bevelSize: 2.2,
      bevelSegments: 3
    });
    geo.center();
    const mesh = new Bs(geo, surfMaterial(hex, cfg));
    addHull(g, mesh, geo, 0.022, cfg, hex);
    g.add(mesh);
    return { front: 4.5 + 2.4 };
  }
  function qualityFrame(g, qc2, z2) {
    const bar = new ks(32, 2.4, 2.4);
    const vbar = new ks(2.4, 32, 2.4);
    const mat = new es({ color: qc2 });
    [[0, -16, bar], [0, 16, bar], [-16, 0, vbar], [16, 0, vbar]].forEach(([x, y2, geo]) => {
      const m = new Bs(geo, mat);
      m.position.set(x, y2, z2);
      g.add(m);
    });
  }
  function dropIcon(g, z2, add) {
    const inner = new jl();
    inner.position.z = z2;
    add(inner, z2);
    g.add(inner);
  }
  var DROPS_V2 = {
    drop_bomb(cfg, color) {
      const g = new jl();
      const b = dropBase(cfg, color || "#ffe66a", g);
      dropIcon(g, b.front + 1.5, (inner) => {
        const ball = part(inner, new id(6.6, 26, 18), GLYPH, cfg, 0, -1.5, 1, 0.014);
        ball.position.set(0, -1.5, 1);
        const curve = new su(
          new Ci(3.5, 3, 2),
          new Ci(8, 8, 3),
          new Ci(7, 13, 4)
        );
        const fuse = new Bs(
          new od(curve, 16, 1.5, 10, false),
          surfMaterial("#ffd166", cfg)
        );
        inner.add(fuse);
        const spark = new Bs(
          new id(2.6, 16, 12),
          new es({ color: "#ff7a00" })
        );
        spark.position.set(7, 13, 4);
        inner.add(spark);
      });
      return finishMob(g, 2.1);
    },
    drop_shield(cfg, color) {
      const g = new jl();
      const b = dropBase(cfg, color || "#62ffa1", g);
      dropIcon(g, b.front + 0.5, (inner) => {
        extrudePoly(
          [[0, -11], [9, -6], [7, 8], [0, 12], [-7, 8], [-9, -6]],
          cfg,
          SHIELD_GREEN,
          inner,
          { depth: 5.5, bevel: 1.2 }
        );
        extrudePoly(
          [[0, -6], [5, -3], [4, 4], [0, 7], [-4, 4], [-5, -3]],
          cfg,
          "#d9ffe9",
          inner,
          { depth: 2.4, bevel: 0.5 }
        ).mesh.position.z = 3.6;
      });
      return finishMob(g, 2.1);
    },
    drop_laser(cfg, color) {
      const g = new jl();
      const hex = color || "#6fdcff";
      const b = dropBase(cfg, hex, g);
      dropIcon(g, b.front + 1, (inner) => {
        [[12, 0.18], [6.5, 0.5], [2.6, 1]].forEach(([w2, a]) => {
          const m = new Bs(
            new ks(w2, 24, 3),
            new es({ color: "#f6fbff", transparent: true, opacity: a })
          );
          m.position.z = 1;
          inner.add(m);
        });
        part(inner, new ks(1.6, 24, 4), "#ffffff", cfg, 0, 0, 1.6, 6e-3);
        part(inner, new id(4, 20, 14), "#f6fbff", cfg, 0, -11, 2, 0.012, 1, 0.8, 1);
        part(inner, new pu(2, 3.4, 6, 16), GLYPH, cfg, 0, -13, 1, 0.01);
      });
      return finishMob(g, 2.1);
    },
    drop_rapid(cfg, color) {
      const g = new jl();
      const hex = color || "#ff6655";
      const b = dropBase(cfg, hex, g);
      dropIcon(g, b.front + 0.5, (inner) => {
        extrudePoly(
          [[-2, -12], [-11, 2], [-3, 2], [2, 12], [11, -2], [3, -2]],
          cfg,
          GLYPH,
          inner,
          { depth: 6, bevel: 1.4 }
        );
      });
      return finishMob(g, 2.1);
    },
    drop_double(cfg, color) {
      const g = new jl();
      const hex = color || "#ffb04c";
      const b = dropBase(cfg, hex, g);
      dropIcon(g, b.front + 0.5, (inner) => {
        [0, 14].forEach((off) => {
          const pts = [[17, 8], [24, 22], [20, 22], [20, 37], [14, 37], [14, 22], [10, 22]].map(([x, y2]) => [(x - 24) * 0.62 + off * 0.5, (y2 - 22) * 0.62]);
          extrudePoly(pts, cfg, GLYPH, inner, { depth: 5, bevel: 1 });
        });
      });
      return finishMob(g, 2.1);
    },
    drop_slow(cfg, color) {
      const g = new jl();
      const hex = color || "#bf9cff";
      const b = dropBase(cfg, hex, g);
      dropIcon(g, b.front + 0.5, (inner) => {
        extrudePoly(
          [[-8, -10], [8, -10], [2, 0], [8, 10], [-8, 10], [-2, 0]],
          cfg,
          GLYPH,
          inner,
          { depth: 6, bevel: 1.2 }
        );
      });
      return finishMob(g, 2.1);
    },
    drop_loot(cfg, color, quality) {
      const g = new jl();
      const hex = color || "#ffd166";
      const body = part(g, new ks(20, 18, 16), hex, cfg, 0, 0, 0, 0.016);
      addHull(g, body, body.geometry, 0.022, cfg, hex);
      part(g, new ks(20.6, 3, 16.6), "#8a6a20", cfg, 0, 6, 0, 0.01);
      part(g, new ks(3, 18.6, 16.6), "#8a6a20", cfg, 0, 0, 0, 0.01);
      part(g, new ks(20.6, 18.6, 3), "#8a6a20", cfg, 0, 0, 0, 0.01);
      part(g, new ks(5, 4.4, 3), "#2b2b0e", cfg, 0, 1.5, 8.6, 8e-3);
      part(g, new id(1.1, 10, 8), "#ffe066", cfg, 0, 1.5, 10.2, 5e-3);
      qualityFrame(g, QUALITY[quality] || QUALITY[2], 11.5);
      return finishMob(g, 2.1);
    }
  };
  function buildPlayerTri(cfg, hex) {
    const g = new jl();
    const green = hex || GAME_COLOR.player;
    const tri = extrudePoly([[0, -30], [24, 20], [-24, 20]], cfg, green, g, { depth: 14, bevel: 2.8, round: 9 });
    tri.mesh.rotation.x = Math.PI / 2;
    const canopy = new Bs(new id(6, 26, 16), surfMaterial("#dff6ff", cfg));
    canopy.scale.set(0.95, 0.7, 1.9);
    canopy.position.set(0, 7, 4);
    addHull(g, canopy, canopy.geometry, 0.012, cfg, "#dff6ff");
    g.add(canopy);
    const dorsal = extrudePoly([[-3, 16], [3, 16], [1, -12], [-1, -12]], cfg, "#2a3038", g, { depth: 4, bevel: 0.8 });
    dorsal.mesh.rotation.y = Math.PI / 2;
    dorsal.mesh.position.set(0, 8, -6);
    const wing = new ks(24, 4, 13);
    [-1, 1].forEach((sd2) => {
      const w2 = part(g, wing, green, cfg, sd2 * 26, -1, -4, 0.016);
      w2.rotation.z = sd2 * 0.1;
      w2.rotation.y = sd2 * 0.22;
      [-6, 5].forEach((z2) => {
        const pod = part(g, new pu(3.2, 3.2, 10, 18), "#2a3038", cfg, sd2 * 32, -4, z2 - 4, 0.01);
        pod.rotation.x = Math.PI / 2;
        const glow = new Bs(
          new du(2.7, 20),
          new es({ color: "#7888ff" })
        );
        glow.position.set(sd2 * 32, -4, z2 - 9.2);
        glow.rotation.y = Math.PI;
        g.add(glow);
      });
      part(g, new ks(3, 11, 9), green, cfg, sd2 * 35, 6, -6, 0.01);
    });
    const nose = new Bs(new mu(4.4, 12, 16), surfMaterial("#ffd166", cfg));
    nose.rotation.x = -Math.PI / 2;
    nose.position.set(0, 0, 26);
    addHull(g, nose, nose.geometry, 0.012, cfg, "#ffd166");
    g.add(nose);
    g.userData.spin = [];
    g.userData.claws = [];
    return finishMob(g, 2.35);
  }
  var MOB_V2 = {
    ufo: buildSaucer,
    player: buildPlayerC,
    player_b: buildPlayerTri,
    crab_b: buildCrabB,
    crab_c: buildCrabC,
    scrap: buildScrapB,
    skull: buildSkullB,
    turtle: buildTurtleB,
    drop_bomb: DROPS_V2.drop_bomb,
    drop_shield: DROPS_V2.drop_shield,
    drop_laser: DROPS_V2.drop_laser,
    drop_rapid: DROPS_V2.drop_rapid,
    drop_double: DROPS_V2.drop_double,
    drop_slow: DROPS_V2.drop_slow,
    drop_loot: DROPS_V2.drop_loot
  };

  // mockups/powerup-blink.app.js
  var DROP_TTL = 6;
  var WARN = 1.8;
  var BLACK = new Kr("#000000");
  var CFG = { toon: 1, inkHull: 0, inkBlack: 0, inkPx: 4, rim: 0.55, backRim: 0.35 };
  var BASE_SCALE = 30 / 2.35 * 1.35;
  var POWERUPS = [
    { key: "drop_rapid", label: "RAPID FIRE", color: "#ff6655" },
    { key: "drop_double", label: "DOUBLE SHOT", color: "#ffb04c" },
    { key: "drop_laser", label: "LASER", color: "#6fdcff" },
    { key: "drop_shield", label: "SHIELD", color: "#62ffa1" },
    { key: "drop_slow", label: "TIME WARP", color: "#bf9cff" },
    { key: "drop_bomb", label: "BOMB", color: "#ffe66a" },
    { key: "drop_loot", label: "LOOT CRATE", color: "#ffd166" }
  ];
  function makeBlack(uniforms) {
    ["uLit", "uMid", "uShadow", "uDeep", "uRim", "uBack"].forEach((name) => {
      if (uniforms[name]) uniforms[name].value.copy(BLACK);
    });
    if (uniforms.uAlpha) uniforms.uAlpha.value = 1;
  }
  function makeAssetOpaqueBlack(model) {
    model.traverse((obj) => {
      if (!obj.isMesh || !obj.material.uniforms) return;
      const uniforms = obj.material.uniforms;
      if (uniforms.uColor && uniforms.uThick) {
        uniforms.uColor.value.copy(BLACK);
        uniforms.uAlpha.value = 1;
        obj.material.transparent = false;
        return;
      }
      if (uniforms.uMid) {
        const c = uniforms.uMid.value;
        const lum = 0.2126 * c.r + 0.7152 * c.g + 0.0722 * c.b;
        if (lum < 0.18) {
          makeBlack(uniforms);
          obj.material.transparent = false;
        }
      }
    });
  }
  function collectParts(model) {
    const allMeshes = [];
    const solidMeshes = [];
    model.traverse((obj) => {
      if (!obj.isMesh) return;
      allMeshes.push(obj);
      if (obj.material.isMeshBasicMaterial && obj.material.color.getHex() === 6487969) {
        obj.material.depthTest = false;
        obj.material.depthWrite = false;
        obj.material.transparent = false;
        solidMeshes.push(obj);
      }
    });
    const nonSolidMeshes = allMeshes.filter((obj) => solidMeshes.indexOf(obj) < 0);
    return { allMeshes, solidMeshes, nonSolidMeshes };
  }
  function buildCard(option, index) {
    const card = document.createElement("div");
    card.className = "card";
    const canvas = document.createElement("canvas");
    canvas.width = 180;
    canvas.height = 120;
    const overlay = document.createElement("canvas");
    overlay.className = "overlay";
    overlay.width = canvas.width;
    overlay.height = canvas.height;
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = option.label;
    card.append(canvas, overlay, name);
    document.getElementById("grid").appendChild(card);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const renderer = new ec({ canvas, alpha: true, antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(dpr);
    renderer.setSize(canvas.width, canvas.height, false);
    renderer.setClearColor(0, 0);
    renderer.autoClear = false;
    const scene = new rc();
    const camera = new ba(0, canvas.width, 0, -canvas.height, -4e3, 4e3);
    const model = MOB_V2[option.key](CFG, option.color);
    model.scale.setScalar(BASE_SCALE);
    model.position.set(canvas.width / 2, -canvas.height / 2, 0);
    scene.add(model);
    makeAssetOpaqueBlack(model);
    const target = new bi(canvas.width * dpr, canvas.height * dpr, {
      format: kt,
      minFilter: Mt,
      magFilter: Mt,
      depthBuffer: true,
      stencilBuffer: false
    });
    target.texture.colorSpace = Je;
    const compositeScene = new rc();
    const compositeCamera = new ba(0, canvas.width, 0, -canvas.height, -4e3, 4e3);
    const plane = new Bs(
      new ha(1, 1),
      new es({
        map: target.texture,
        transparent: true,
        depthTest: false,
        depthWrite: false
      })
    );
    plane.scale.set(canvas.width, canvas.height, 1);
    plane.position.set(canvas.width / 2, -canvas.height / 2, 0);
    compositeScene.add(plane);
    const parts = collectParts(model);
    Object.assign(option, {
      canvas,
      overlayCtx: overlay.getContext("2d"),
      renderer,
      scene,
      camera,
      model,
      target,
      compositeScene,
      compositeCamera,
      plane,
      allMeshes: parts.allMeshes,
      solidMeshes: parts.solidMeshes,
      nonSolidMeshes: parts.nonSolidMeshes,
      phase: index * 0.7,
      alphaCur: 1
    });
  }
  function renderCard(option, alpha) {
    option.nonSolidMeshes.forEach((mesh) => {
      mesh.visible = true;
    });
    option.solidMeshes.forEach((mesh) => {
      mesh.visible = false;
    });
    option.renderer.setRenderTarget(option.target);
    option.renderer.setClearColor(0, 0);
    option.renderer.clear();
    option.renderer.render(option.scene, option.camera);
    option.renderer.setRenderTarget(null);
    option.renderer.setClearColor(0, 0);
    option.renderer.clear();
    option.plane.material.opacity = alpha;
    option.renderer.render(option.compositeScene, option.compositeCamera);
    option.nonSolidMeshes.forEach((mesh) => {
      mesh.visible = false;
    });
    option.solidMeshes.forEach((mesh) => {
      mesh.visible = true;
    });
    option.renderer.render(option.scene, option.camera);
  }
  function applyOption(option, t2, progress, now) {
    const target = progress < WARN ? 1 : 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(now / 240));
    option.alphaCur += (target - option.alphaCur) * 0.25;
    if (Math.abs(target - option.alphaCur) <= 4e-3) option.alphaCur = target;
    const sway = Math.sin(now / 1100 + option.phase) * 0.34;
    option.model.rotation.y = sway;
    renderCard(option, option.alphaCur);
  }
  function drawOverlay(option, progress) {
    const g = option.overlayCtx;
    g.clearRect(0, 0, option.canvas.width, option.canvas.height);
    g.fillStyle = "#6a8fa5";
    g.font = "10px 'Courier New', monospace";
    g.fillText(`TTL ${Math.max(0, DROP_TTL - progress).toFixed(1)}s`, 8, 14);
  }
  function frame(now) {
    const t2 = now / 1e3;
    const progress = t2 % DROP_TTL;
    POWERUPS.forEach((option) => {
      applyOption(option, t2, progress, now);
      drawOverlay(option, progress);
    });
    requestAnimationFrame(frame);
  }
  POWERUPS.forEach(buildCard);
  window.__powerupBlink = POWERUPS;
  window.__powerupBlinkRender = renderCard;
  requestAnimationFrame(frame);
})();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
