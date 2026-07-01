var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../../node_modules/trim-canvas/build/index.js
var require_build = __commonJS({
  "../../node_modules/trim-canvas/build/index.js"(exports, module2) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module2 ? module2.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.trimCanvas = t() : e.trimCanvas = t();
    }(exports, function() {
      return function(e) {
        function t(n) {
          if (r[n]) return r[n].exports;
          var o = r[n] = { exports: {}, id: n, loaded: false };
          return e[n].call(o.exports, o, o.exports, t), o.loaded = true, o.exports;
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0);
      }([function(e, t) {
        "use strict";
        function r(e2) {
          var t2 = e2.getContext("2d"), r2 = e2.width, n2 = e2.height, o2 = t2.getImageData(0, 0, r2, n2).data, f = a(true, r2, n2, o2), i = a(false, r2, n2, o2), c = u(true, r2, n2, o2), d = u(false, r2, n2, o2), p = d - c + 1, l = i - f + 1, s = t2.getImageData(c, f, p, l);
          return e2.width = p, e2.height = l, t2.clearRect(0, 0, p, l), t2.putImageData(s, 0, 0), e2;
        }
        function n(e2, t2, r2, n2) {
          return { red: n2[4 * (r2 * t2 + e2)], green: n2[4 * (r2 * t2 + e2) + 1], blue: n2[4 * (r2 * t2 + e2) + 2], alpha: n2[4 * (r2 * t2 + e2) + 3] };
        }
        function o(e2, t2, r2, o2) {
          return n(e2, t2, r2, o2).alpha;
        }
        function a(e2, t2, r2, n2) {
          for (var a2 = e2 ? 1 : -1, u2 = e2 ? 0 : r2 - 1, f = u2; e2 ? f < r2 : f > -1; f += a2) for (var i = 0; i < t2; i++) if (o(i, f, t2, n2)) return f;
          return null;
        }
        function u(e2, t2, r2, n2) {
          for (var a2 = e2 ? 1 : -1, u2 = e2 ? 0 : t2 - 1, f = u2; e2 ? f < t2 : f > -1; f += a2) for (var i = 0; i < r2; i++) if (o(f, i, t2, n2)) return f;
          return null;
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
      }]);
    });
  }
});

// lib/signature/index.ts
var signature_exports = {};
__export(signature_exports, {
  Signature: () => Signature
});
module.exports = __toCommonJS(signature_exports);

// lib/signature/component.tsx
var import_react7 = require("react");

// lib/layout/index.ts
var import_material = require("@mui/material");

// ../../node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}

// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}

// ../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o, r, i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}

// ../../node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}

// ../../node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

// ../../node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

// ../../node_modules/@babel/runtime/helpers/esm/createClass.js
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: false
  }), e;
}

// ../../node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}

// ../../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}

// ../../node_modules/@babel/runtime/helpers/esm/inherits.js
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: true,
      configurable: true
    }
  }), Object.defineProperty(t, "prototype", {
    writable: false
  }), e && _setPrototypeOf(t, e);
}

// ../../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}

// ../../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}

// ../../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// ../../node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}

// ../../node_modules/@babel/runtime/helpers/esm/createSuper.js
function _createSuper(t) {
  var r = _isNativeReflectConstruct();
  return function() {
    var e, o = _getPrototypeOf(t);
    if (r) {
      var s = _getPrototypeOf(this).constructor;
      e = Reflect.construct(o, arguments, s);
    } else e = o.apply(this, arguments);
    return _possibleConstructorReturn(this, e);
  };
}

// ../../node_modules/react-signature-canvas/dist/index.mjs
var import_prop_types = __toESM(require("prop-types"), 1);
var import_react = __toESM(require("react"), 1);

// ../../node_modules/signature_pad/dist/signature_pad.mjs
function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || (/* @__PURE__ */ new Date()).getTime();
}
Point.prototype.velocityFrom = function(start) {
  return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
};
Point.prototype.distanceTo = function(start) {
  return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
};
Point.prototype.equals = function(other) {
  return this.x === other.x && this.y === other.y && this.time === other.time;
};
function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}
Bezier.prototype.length = function() {
  var steps = 10;
  var length = 0;
  var px = void 0;
  var py = void 0;
  for (var i = 0; i <= steps; i += 1) {
    var t = i / steps;
    var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
    var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
    if (i > 0) {
      var xdiff = cx - px;
      var ydiff = cy - py;
      length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
    }
    px = cx;
    py = cy;
  }
  return length;
};
Bezier.prototype._point = function(t, start, c1, c2, end) {
  return start * (1 - t) * (1 - t) * (1 - t) + 3 * c1 * (1 - t) * (1 - t) * t + 3 * c2 * (1 - t) * t * t + end * t * t * t;
};
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function later2() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};
  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = "throttle" in opts ? opts.throttle : 16;
  this.minDistance = "minDistance" in opts ? opts.minDistance : 5;
  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }
  this.dotSize = opts.dotSize || function() {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || "black";
  this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;
  this._canvas = canvas;
  this._ctx = canvas.getContext("2d");
  this.clear();
  this._handleMouseDown = function(event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };
  this._handleMouseMove = function(event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };
  this._handleMouseUp = function(event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };
  this._handleTouchStart = function(event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };
  this._handleTouchMove = function(event) {
    event.preventDefault();
    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };
  this._handleTouchEnd = function(event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };
  this.on();
}
SignaturePad.prototype.clear = function() {
  var ctx = this._ctx;
  var canvas = this._canvas;
  ctx.fillStyle = this.backgroundColor;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this._data = [];
  this._reset();
  this._isEmpty = true;
};
SignaturePad.prototype.fromDataURL = function(dataUrl) {
  var _this = this;
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var image = new Image();
  var ratio = options.ratio || window.devicePixelRatio || 1;
  var width = options.width || this._canvas.width / ratio;
  var height = options.height || this._canvas.height / ratio;
  this._reset();
  image.src = dataUrl;
  image.onload = function() {
    _this._ctx.drawImage(image, 0, 0, width, height);
  };
  this._isEmpty = false;
};
SignaturePad.prototype.toDataURL = function(type) {
  var _canvas;
  switch (type) {
    case "image/svg+xml":
      return this._toSVG();
    default:
      for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        options[_key - 1] = arguments[_key];
      }
      return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
  }
};
SignaturePad.prototype.on = function() {
  this._handleMouseEvents();
  this._handleTouchEvents();
};
SignaturePad.prototype.off = function() {
  this._canvas.removeEventListener("mousedown", this._handleMouseDown);
  this._canvas.removeEventListener("mousemove", this._handleMouseMove);
  document.removeEventListener("mouseup", this._handleMouseUp);
  this._canvas.removeEventListener("touchstart", this._handleTouchStart);
  this._canvas.removeEventListener("touchmove", this._handleTouchMove);
  this._canvas.removeEventListener("touchend", this._handleTouchEnd);
};
SignaturePad.prototype.isEmpty = function() {
  return this._isEmpty;
};
SignaturePad.prototype._strokeBegin = function(event) {
  this._data.push([]);
  this._reset();
  this._strokeUpdate(event);
  if (typeof this.onBegin === "function") {
    this.onBegin(event);
  }
};
SignaturePad.prototype._strokeUpdate = function(event) {
  var x = event.clientX;
  var y = event.clientY;
  var point = this._createPoint(x, y);
  var lastPointGroup = this._data[this._data.length - 1];
  var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
  var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;
  if (!(lastPoint && isLastPointTooClose)) {
    var _addPoint = this._addPoint(point), curve = _addPoint.curve, widths = _addPoint.widths;
    if (curve && widths) {
      this._drawCurve(curve, widths.start, widths.end);
    }
    this._data[this._data.length - 1].push({
      x: point.x,
      y: point.y,
      time: point.time,
      color: this.penColor
    });
  }
};
SignaturePad.prototype._strokeEnd = function(event) {
  var canDrawCurve = this.points.length > 2;
  var point = this.points[0];
  if (!canDrawCurve && point) {
    this._drawDot(point);
  }
  if (point) {
    var lastPointGroup = this._data[this._data.length - 1];
    var lastPoint = lastPointGroup[lastPointGroup.length - 1];
    if (!point.equals(lastPoint)) {
      lastPointGroup.push({
        x: point.x,
        y: point.y,
        time: point.time,
        color: this.penColor
      });
    }
  }
  if (typeof this.onEnd === "function") {
    this.onEnd(event);
  }
};
SignaturePad.prototype._handleMouseEvents = function() {
  this._mouseButtonDown = false;
  this._canvas.addEventListener("mousedown", this._handleMouseDown);
  this._canvas.addEventListener("mousemove", this._handleMouseMove);
  document.addEventListener("mouseup", this._handleMouseUp);
};
SignaturePad.prototype._handleTouchEvents = function() {
  this._canvas.style.msTouchAction = "none";
  this._canvas.style.touchAction = "none";
  this._canvas.addEventListener("touchstart", this._handleTouchStart);
  this._canvas.addEventListener("touchmove", this._handleTouchMove);
  this._canvas.addEventListener("touchend", this._handleTouchEnd);
};
SignaturePad.prototype._reset = function() {
  this.points = [];
  this._lastVelocity = 0;
  this._lastWidth = (this.minWidth + this.maxWidth) / 2;
  this._ctx.fillStyle = this.penColor;
};
SignaturePad.prototype._createPoint = function(x, y, time) {
  var rect = this._canvas.getBoundingClientRect();
  return new Point(x - rect.left, y - rect.top, time || (/* @__PURE__ */ new Date()).getTime());
};
SignaturePad.prototype._addPoint = function(point) {
  var points = this.points;
  var tmp = void 0;
  points.push(point);
  if (points.length > 2) {
    if (points.length === 3) points.unshift(points[0]);
    tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
    var c2 = tmp.c2;
    tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
    var c3 = tmp.c1;
    var curve = new Bezier(points[1], c2, c3, points[2]);
    var widths = this._calculateCurveWidths(curve);
    points.shift();
    return { curve, widths };
  }
  return {};
};
SignaturePad.prototype._calculateCurveControlPoints = function(s1, s2, s3) {
  var dx1 = s1.x - s2.x;
  var dy1 = s1.y - s2.y;
  var dx2 = s2.x - s3.x;
  var dy2 = s2.y - s3.y;
  var m1 = { x: (s1.x + s2.x) / 2, y: (s1.y + s2.y) / 2 };
  var m2 = { x: (s2.x + s3.x) / 2, y: (s2.y + s3.y) / 2 };
  var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
  var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
  var dxm = m1.x - m2.x;
  var dym = m1.y - m2.y;
  var k = l2 / (l1 + l2);
  var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };
  var tx = s2.x - cm.x;
  var ty = s2.y - cm.y;
  return {
    c1: new Point(m1.x + tx, m1.y + ty),
    c2: new Point(m2.x + tx, m2.y + ty)
  };
};
SignaturePad.prototype._calculateCurveWidths = function(curve) {
  var startPoint = curve.startPoint;
  var endPoint = curve.endPoint;
  var widths = { start: null, end: null };
  var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
  var newWidth = this._strokeWidth(velocity);
  widths.start = this._lastWidth;
  widths.end = newWidth;
  this._lastVelocity = velocity;
  this._lastWidth = newWidth;
  return widths;
};
SignaturePad.prototype._strokeWidth = function(velocity) {
  return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
};
SignaturePad.prototype._drawPoint = function(x, y, size) {
  var ctx = this._ctx;
  ctx.moveTo(x, y);
  ctx.arc(x, y, size, 0, 2 * Math.PI, false);
  this._isEmpty = false;
};
SignaturePad.prototype._drawCurve = function(curve, startWidth, endWidth) {
  var ctx = this._ctx;
  var widthDelta = endWidth - startWidth;
  var drawSteps = Math.floor(curve.length());
  ctx.beginPath();
  for (var i = 0; i < drawSteps; i += 1) {
    var t = i / drawSteps;
    var tt = t * t;
    var ttt = tt * t;
    var u = 1 - t;
    var uu = u * u;
    var uuu = uu * u;
    var x = uuu * curve.startPoint.x;
    x += 3 * uu * t * curve.control1.x;
    x += 3 * u * tt * curve.control2.x;
    x += ttt * curve.endPoint.x;
    var y = uuu * curve.startPoint.y;
    y += 3 * uu * t * curve.control1.y;
    y += 3 * u * tt * curve.control2.y;
    y += ttt * curve.endPoint.y;
    var width = startWidth + ttt * widthDelta;
    this._drawPoint(x, y, width);
  }
  ctx.closePath();
  ctx.fill();
};
SignaturePad.prototype._drawDot = function(point) {
  var ctx = this._ctx;
  var width = typeof this.dotSize === "function" ? this.dotSize() : this.dotSize;
  ctx.beginPath();
  this._drawPoint(point.x, point.y, width);
  ctx.closePath();
  ctx.fill();
};
SignaturePad.prototype._fromData = function(pointGroups, drawCurve, drawDot) {
  for (var i = 0; i < pointGroups.length; i += 1) {
    var group = pointGroups[i];
    if (group.length > 1) {
      for (var j = 0; j < group.length; j += 1) {
        var rawPoint = group[j];
        var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
        var color = rawPoint.color;
        if (j === 0) {
          this.penColor = color;
          this._reset();
          this._addPoint(point);
        } else if (j !== group.length - 1) {
          var _addPoint2 = this._addPoint(point), curve = _addPoint2.curve, widths = _addPoint2.widths;
          if (curve && widths) {
            drawCurve(curve, widths, color);
          }
        } else {
        }
      }
    } else {
      this._reset();
      var _rawPoint = group[0];
      drawDot(_rawPoint);
    }
  }
};
SignaturePad.prototype._toSVG = function() {
  var _this2 = this;
  var pointGroups = this._data;
  var canvas = this._canvas;
  var ratio = Math.max(window.devicePixelRatio || 1, 1);
  var minX = 0;
  var minY = 0;
  var maxX = canvas.width / ratio;
  var maxY = canvas.height / ratio;
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "width", canvas.width);
  svg.setAttributeNS(null, "height", canvas.height);
  this._fromData(pointGroups, function(curve, widths, color) {
    var path = document.createElement("path");
    if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
      var attr = "M " + curve.startPoint.x.toFixed(3) + "," + curve.startPoint.y.toFixed(3) + " " + ("C " + curve.control1.x.toFixed(3) + "," + curve.control1.y.toFixed(3) + " ") + (curve.control2.x.toFixed(3) + "," + curve.control2.y.toFixed(3) + " ") + (curve.endPoint.x.toFixed(3) + "," + curve.endPoint.y.toFixed(3));
      path.setAttribute("d", attr);
      path.setAttribute("stroke-width", (widths.end * 2.25).toFixed(3));
      path.setAttribute("stroke", color);
      path.setAttribute("fill", "none");
      path.setAttribute("stroke-linecap", "round");
      svg.appendChild(path);
    }
  }, function(rawPoint) {
    var circle = document.createElement("circle");
    var dotSize = typeof _this2.dotSize === "function" ? _this2.dotSize() : _this2.dotSize;
    circle.setAttribute("r", dotSize);
    circle.setAttribute("cx", rawPoint.x);
    circle.setAttribute("cy", rawPoint.y);
    circle.setAttribute("fill", rawPoint.color);
    svg.appendChild(circle);
  });
  var prefix = "data:image/svg+xml;base64,";
  var header = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + " " + minY + " " + maxX + " " + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + ">";
  var body = svg.innerHTML;
  if (body === void 0) {
    var dummy = document.createElement("dummy");
    var nodes = svg.childNodes;
    dummy.innerHTML = "";
    for (var i = 0; i < nodes.length; i += 1) {
      dummy.appendChild(nodes[i].cloneNode(true));
    }
    body = dummy.innerHTML;
  }
  var footer = "</svg>";
  var data = header + body + footer;
  return prefix + btoa(data);
};
SignaturePad.prototype.fromData = function(pointGroups) {
  var _this3 = this;
  this.clear();
  this._fromData(pointGroups, function(curve, widths) {
    return _this3._drawCurve(curve, widths.start, widths.end);
  }, function(rawPoint) {
    return _this3._drawDot(rawPoint);
  });
  this._data = pointGroups;
};
SignaturePad.prototype.toData = function() {
  return this._data;
};
var signature_pad_default = SignaturePad;

// ../../node_modules/react-signature-canvas/dist/index.mjs
var import_trim_canvas = __toESM(require_build(), 1);
var _excluded = ["canvasProps", "clearOnResize"];
var SignatureCanvas = /* @__PURE__ */ function(_Component) {
  _inherits(SignatureCanvas2, _Component);
  var _super = _createSuper(SignatureCanvas2);
  function SignatureCanvas2() {
    var _this;
    _classCallCheck(this, SignatureCanvas2);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _this.staticThis = _this.constructor;
    _this._sigPad = null;
    _this._canvas = null;
    _this.setRef = function(ref) {
      _this._canvas = ref;
      if (_this._canvas === null) {
        _this._sigPad = null;
      }
    };
    _this._excludeOurProps = function() {
      var _this$props = _this.props;
      _this$props.canvasProps;
      _this$props.clearOnResize;
      var sigPadProps = _objectWithoutProperties(_this$props, _excluded);
      return sigPadProps;
    };
    _this.componentDidMount = function() {
      var canvas = _this.getCanvas();
      _this._sigPad = new signature_pad_default(canvas, _this._excludeOurProps());
      _this._resizeCanvas();
      _this.on();
    };
    _this.componentWillUnmount = function() {
      _this.off();
    };
    _this.componentDidUpdate = function() {
      Object.assign(_this._sigPad, _this._excludeOurProps());
    };
    _this.getCanvas = function() {
      if (_this._canvas === null) {
        throw _this.staticThis.refNullError;
      }
      return _this._canvas;
    };
    _this.getTrimmedCanvas = function() {
      var canvas = _this.getCanvas();
      var copy = document.createElement("canvas");
      copy.width = canvas.width;
      copy.height = canvas.height;
      copy.getContext("2d").drawImage(canvas, 0, 0);
      return (0, import_trim_canvas.default)(copy);
    };
    _this.getSignaturePad = function() {
      if (_this._sigPad === null) {
        throw _this.staticThis.refNullError;
      }
      return _this._sigPad;
    };
    _this._checkClearOnResize = function() {
      if (!_this.props.clearOnResize) {
        return;
      }
      _this._resizeCanvas();
    };
    _this._resizeCanvas = function() {
      var _this$props$canvasPro, _window$devicePixelRa;
      var canvasProps = (_this$props$canvasPro = _this.props.canvasProps) !== null && _this$props$canvasPro !== void 0 ? _this$props$canvasPro : {};
      var width = canvasProps.width, height = canvasProps.height;
      if (typeof width !== "undefined" && typeof height !== "undefined") {
        return;
      }
      var canvas = _this.getCanvas();
      var ratio = Math.max((_window$devicePixelRa = window.devicePixelRatio) !== null && _window$devicePixelRa !== void 0 ? _window$devicePixelRa : 1, 1);
      if (typeof width === "undefined") {
        canvas.width = canvas.offsetWidth * ratio;
      }
      if (typeof height === "undefined") {
        canvas.height = canvas.offsetHeight * ratio;
      }
      canvas.getContext("2d").scale(ratio, ratio);
      _this.clear();
    };
    _this.render = function() {
      var canvasProps = _this.props.canvasProps;
      return /* @__PURE__ */ import_react.default.createElement("canvas", _extends({
        ref: _this.setRef
      }, canvasProps));
    };
    _this.on = function() {
      window.addEventListener("resize", _this._checkClearOnResize);
      return _this.getSignaturePad().on();
    };
    _this.off = function() {
      window.removeEventListener("resize", _this._checkClearOnResize);
      return _this.getSignaturePad().off();
    };
    _this.clear = function() {
      return _this.getSignaturePad().clear();
    };
    _this.isEmpty = function() {
      return _this.getSignaturePad().isEmpty();
    };
    _this.fromDataURL = function(dataURL, options) {
      return _this.getSignaturePad().fromDataURL(dataURL, options);
    };
    _this.toDataURL = function(type, encoderOptions) {
      return _this.getSignaturePad().toDataURL(type, encoderOptions);
    };
    _this.fromData = function(pointGroups) {
      return _this.getSignaturePad().fromData(pointGroups);
    };
    _this.toData = function() {
      return _this.getSignaturePad().toData();
    };
    return _this;
  }
  return _createClass(SignatureCanvas2);
}(import_react.Component);
SignatureCanvas.propTypes = {
  // signature_pad's props
  velocityFilterWeight: import_prop_types.default.number,
  minWidth: import_prop_types.default.number,
  maxWidth: import_prop_types.default.number,
  minDistance: import_prop_types.default.number,
  dotSize: import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.func]),
  penColor: import_prop_types.default.string,
  throttle: import_prop_types.default.number,
  onEnd: import_prop_types.default.func,
  onBegin: import_prop_types.default.func,
  // props specific to the React wrapper
  canvasProps: import_prop_types.default.object,
  clearOnResize: import_prop_types.default.bool
};
SignatureCanvas.defaultProps = {
  clearOnResize: true
};
SignatureCanvas.refNullError = new Error("react-signature-canvas is currently mounting or unmounting: React refs are null during this phase.");

// lib/signature/component.tsx
var import_icons_material3 = require("@mui/icons-material");

// lib/buttons/component.tsx
var import_react6 = __toESM(require("react"), 1);
var import_material11 = require("@mui/material");
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);
var import_styles6 = require("@mui/material/styles");

// lib/buttons/theme.ts
var import_styles = require("@mui/material/styles");
var import_material2 = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime = require("react/jsx-runtime");

// lib/utils/index.ts
var COLORS = {
  TRANSPARENT: "transparent",
  BRAND: {
    TRINET_ORANGE: "#E14700",
    TRINET_NAVY: "#0B0134"
  },
  PRIMARY: {
    ORANGE_10: "#FFF1EB",
    ORANGE_20: "#FFD4C7",
    ORANGE_30: "#FFB199",
    ORANGE_40: "#FF8064",
    ORANGE_45: "#FA6C4D",
    ORANGE_50: "#E14700",
    ORANGE_60: "#D14200",
    ORANGE_70: "#a83706",
    ORANGE_75: "#75443F",
    ORANGE_80: "#2F120E"
  },
  SECONDARY: {
    BLUE_10: "#F8FAFF",
    BLUE_20: "#F0F5FF",
    BLUE_30: "#D0E4FF",
    BLUE_40: "#94BEFD",
    BLUE_50: "#5C9DFF",
    BLUE_60: "#0A62E6",
    BLUE_70: "#044DBB",
    BLUE_80: "#0B0134"
  },
  SYSTEM: {
    WHITE: "#FFFFFF",
    OFF_WHITE: "#F8F9FA",
    MISTY: "#EEF0F2",
    CLOUDY: "#DDE1E6",
    SILVER: "#B3BDC7",
    PEWTER: "#6E7789",
    DARK_30: "#646C7D",
    SLATE: "#444C5C",
    INK: "#242936",
    DARK_60: "#20242F",
    DARK_70: "#191D26",
    DARK_80: "#07080B",
    BLACK: "#000000"
  },
  INFO: {
    INFO_10: "#F3F6FF",
    INFO_20: "#AECFFF",
    INFO_30: "#56ABFF",
    INFO_40: "#0070E0",
    INFO_50: "#012596"
  },
  SUCCESS: {
    SUCCESS_10: "#F2FBF5",
    SUCCESS_20: "#B7E9C9",
    SUCCESS_30: "#33E173",
    SUCCESS_40: "#008531",
    SUCCESS_50: "#044E1F"
  },
  WARNING: {
    WARNING_10: "#FFF7ED",
    WARNING_20: "#FDD7B5",
    WARNING_30: "#FFB258",
    WARNING_40: "#FF8C22",
    WARNING_50: "#682F03"
  },
  ERROR: {
    ERROR_10: "#FFF2F2",
    ERROR_20: "#FFB4B4",
    ERROR_30: "#FF6359",
    ERROR_40: "#E01021",
    ERROR_50: "#AF0A0A"
  },
  ACCENT: {
    VIOLET_10: "#F2ECFB",
    VIOLET_20: "#C3AFEF",
    VIOLET_30: "#875FDE",
    VIOLET_40: "#661CC8",
    VIOLET_50: "#3F0066",
    TEAL_10: "#DBE4F6",
    TEAL_20: "#9BAFD4",
    TEAL_30: "#587AB8",
    TEAL_40: "#355287",
    TEAL_50: "#213762",
    GREEN_10: "#F2FBF5",
    GREEN_20: "#A5EDD3",
    GREEN_30: "#45D8B4",
    GREEN_40: "#02936F",
    GREEN_50: "#00434A",
    MAGENTA_10: "#FFE8F5",
    MAGENTA_20: "#FF8DCB",
    MAGENTA_30: "#D95188",
    MAGENTA_40: "#DB0661",
    MAGENTA_50: "#6B003D",
    YELLOW_10: "#FEF9E7",
    YELLOW_20: "#FFEEB2",
    YELLOW_30: "#FFD649",
    YELLOW_40: "#F4C006",
    YELLOW_50: "#CB7A00"
  }
};
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/buttons/theme.ts
var buttonTheme = {
  dark: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.SILVER,
      loadingForeground: COLORS.SYSTEM.CLOUDY,
      primary: {
        text: COLORS.PRIMARY.ORANGE_80,
        default: {
          body: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_75
        }
      },
      secondary: {
        body: COLORS.TRANSPARENT,
        default: {
          border: COLORS.PRIMARY.ORANGE_40,
          text: COLORS.PRIMARY.ORANGE_40
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_45,
          text: COLORS.PRIMARY.ORANGE_45
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_30,
          text: COLORS.PRIMARY.ORANGE_30
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_75,
          text: COLORS.PRIMARY.ORANGE_75
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.INK,
        default: {
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        active: {
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.CLOUDY
        },
        hover: { body: COLORS.SYSTEM.DARK_70 },
        active: { body: COLORS.SYSTEM.DARK_70 },
        disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.INK,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SYSTEM.SLATE },
          active: { body: COLORS.SYSTEM.DARK_60, border: COLORS.SYSTEM.WHITE },
          disabled: { body: COLORS.SYSTEM.DARK_60, text: COLORS.SYSTEM.PEWTER }
        },
        primary: {
          text: COLORS.PRIMARY.ORANGE_80,
          default: {
            body: COLORS.PRIMARY.ORANGE_40
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_45
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_75
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_40,
            text: COLORS.SECONDARY.BLUE_80
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_30,
            border: COLORS.SYSTEM.WHITE
          },
          disabled: { body: COLORS.SYSTEM.INK, text: COLORS.SYSTEM.PEWTER }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_40,
        default: {
          body: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.SLATE
        },
        active: {
          body: COLORS.SYSTEM.DARK_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.PEWTER
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_60,
          border: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.SLATE
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_40
        },
        active: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        },
        selected: {
          body: COLORS.SYSTEM.DARK_70,
          border: COLORS.SYSTEM.SLATE,
          text: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_40
        },
        icon: {
          body: COLORS.SYSTEM.SILVER
        }
      }
    }
  },
  light: {
    name: "button",
    styles: {
      loadingBackground: COLORS.SYSTEM.PEWTER,
      loadingForeground: COLORS.SYSTEM.PEWTER,
      primary: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          body: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          body: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          body: COLORS.PRIMARY.ORANGE_20
        }
      },
      secondary: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.PRIMARY.ORANGE_60,
          text: COLORS.PRIMARY.ORANGE_60
        },
        hover: {
          border: COLORS.PRIMARY.ORANGE_50,
          text: COLORS.PRIMARY.ORANGE_50
        },
        active: {
          border: COLORS.PRIMARY.ORANGE_70,
          text: COLORS.PRIMARY.ORANGE_70
        },
        disabled: {
          border: COLORS.PRIMARY.ORANGE_20,
          text: COLORS.PRIMARY.ORANGE_20
        }
      },
      tertiary: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.TRANSPARENT
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.SILVER
        }
      },
      contrast: {
        text: COLORS.SYSTEM.WHITE,
        default: {
          body: COLORS.SYSTEM.DARK_70
        },
        hover: {
          body: COLORS.SYSTEM.DARK_80
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      contrastOutline: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          border: COLORS.SYSTEM.DARK_70,
          text: COLORS.SYSTEM.DARK_70
        },
        hover: {
          border: COLORS.SYSTEM.DARK_80,
          text: COLORS.SYSTEM.DARK_80
        },
        active: {
          border: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        }
      },
      contrastReverse: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.CLOUDY
        },
        active: {
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          body: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.INK
        }
      },
      contrastOutlineReverse: {
        body: COLORS.SYSTEM.DARK_70,
        default: {
          border: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.WHITE
        },
        hover: {
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.CLOUDY
        },
        active: {
          border: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.MISTY
        },
        disabled: {
          border: COLORS.SYSTEM.DARK_30,
          text: COLORS.SYSTEM.DARK_30
        }
      },
      transparent: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SECONDARY.BLUE_50,
          border: COLORS.TRANSPARENT
        },
        active: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      transparentReverse: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_40
        },
        hover: {
          body: COLORS.SYSTEM.INK,
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          text: COLORS.SYSTEM.PEWTER
        }
      },
      link: {
        body: COLORS.TRANSPARENT,
        default: {
          text: COLORS.SECONDARY.BLUE_60
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_50
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      elevated: {
        body: COLORS.SYSTEM.WHITE,
        default: {
          text: COLORS.SYSTEM.INK
        },
        hover: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        active: {
          text: COLORS.SECONDARY.BLUE_70,
          body: COLORS.SYSTEM.MISTY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        }
      },
      header: {
        default: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.PEWTER
        },
        hover: { body: COLORS.SYSTEM.OFF_WHITE },
        active: { body: COLORS.SYSTEM.OFF_WHITE },
        disabled: { body: COLORS.TRANSPARENT, text: COLORS.SYSTEM.SILVER }
      },
      fab: {
        default: {
          default: {
            body: COLORS.SYSTEM.MISTY,
            text: COLORS.SYSTEM.INK
          },
          hover: { body: COLORS.SYSTEM.CLOUDY },
          active: {
            body: COLORS.SYSTEM.OFF_WHITE,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: { body: COLORS.SYSTEM.CLOUDY, text: COLORS.SYSTEM.SILVER }
        },
        primary: {
          text: COLORS.SYSTEM.WHITE,
          default: {
            body: COLORS.PRIMARY.ORANGE_60
          },
          hover: {
            body: COLORS.PRIMARY.ORANGE_50
          },
          active: {
            body: COLORS.PRIMARY.ORANGE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.PRIMARY.ORANGE_20
          }
        },
        secondary: {
          default: {
            body: COLORS.SECONDARY.BLUE_60,
            text: COLORS.SYSTEM.WHITE
          },
          hover: { body: COLORS.SECONDARY.BLUE_50 },
          active: {
            body: COLORS.SECONDARY.BLUE_70,
            border: COLORS.SYSTEM.DARK_80
          },
          disabled: {
            body: COLORS.SECONDARY.BLUE_20,
            text: COLORS.SYSTEM.SILVER
          }
        }
      },
      chip: {
        text: COLORS.SECONDARY.BLUE_60,
        default: {
          body: COLORS.SECONDARY.BLUE_10
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_20
        },
        active: {
          body: COLORS.SECONDARY.BLUE_30
        },
        disabled: {
          body: COLORS.SECONDARY.BLUE_60,
          text: COLORS.SECONDARY.BLUE_60
        }
      },
      toggleIcon: {
        text: COLORS.SYSTEM.PEWTER,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.SILVER
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      },
      simpleIcon: {
        text: COLORS.SYSTEM.INK,
        default: {
          body: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          text: COLORS.SECONDARY.BLUE_60
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        disabled: {
          text: COLORS.SYSTEM.SILVER
        },
        selected: {
          body: COLORS.SYSTEM.MISTY,
          border: COLORS.SYSTEM.CLOUDY,
          text: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60
        },
        icon: {
          body: COLORS.SYSTEM.PEWTER
        }
      }
    }
  }
};
var _buttonTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        loadingBackground: theme.palette.t1.system.silver,
        loadingForeground: theme.palette.t1.system.cloudy,
        primary: {
          text: theme.palette.t1.primary.orange80,
          default: {
            body: theme.palette.t1.primary.orange40
          },
          hover: {
            body: theme.palette.t1.primary.orange45
          },
          active: {
            body: theme.palette.t1.primary.orange30
          },
          disabled: {
            body: theme.palette.t1.primary.orange75
          }
        },
        secondary: {
          body: theme.palette.t1.transparent,
          default: {
            border: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange40
          },
          hover: {
            border: theme.palette.t1.primary.orange45,
            text: theme.palette.t1.primary.orange45
          },
          active: {
            border: theme.palette.t1.primary.orange30,
            text: theme.palette.t1.primary.orange30
          },
          disabled: {
            border: theme.palette.t1.primary.orange75,
            text: theme.palette.t1.primary.orange75
          }
        },
        tertiary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        contrast: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        elevated: {
          body: theme.palette.t1.system.ink,
          default: {
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            text: theme.palette.t1.system.white
          },
          active: {
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.cloudy
          },
          hover: { body: theme.palette.t1.system.dark70 },
          active: { body: theme.palette.t1.system.dark70 },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.system.slate },
            active: {
              body: theme.palette.t1.system.dark60,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.dark60,
              text: theme.palette.t1.system.pewter
            }
          },
          primary: {
            text: theme.palette.t1.primary.orange80,
            default: {
              body: theme.palette.t1.primary.orange40
            },
            hover: {
              body: theme.palette.t1.primary.orange45
            },
            active: {
              body: theme.palette.t1.primary.orange30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.primary.orange75
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue40,
              text: theme.palette.t1.secondary.blue80
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue30,
              border: theme.palette.t1.system.white
            },
            disabled: {
              body: theme.palette.t1.system.ink,
              text: theme.palette.t1.system.pewter
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue40,
          default: {
            body: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.slate
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.slate
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.pewter
          },
          active: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.slate
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            border: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.slate
          },
          selected: {
            body: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.system.slate
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.silver
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue40
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue40
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
    case "light":
    default: {
      return {
        loadingBackground: theme.palette.t1.system.pewter,
        loadingForeground: theme.palette.t1.system.pewter,
        primary: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.primary.orange60
          },
          hover: {
            body: theme.palette.t1.primary.orange50
          },
          active: {
            body: theme.palette.t1.primary.orange70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        secondary: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.primary.orange60
          },
          hover: {
            border: theme.palette.t1.primary.orange50,
            text: theme.palette.t1.primary.orange50
          },
          active: {
            border: theme.palette.t1.primary.orange70,
            text: theme.palette.t1.primary.orange70
          },
          disabled: {
            border: theme.palette.t1.primary.orange20,
            text: theme.palette.t1.primary.orange20
          }
        },
        tertiary: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.transparent
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.silver
          }
        },
        contrast: {
          text: theme.palette.t1.system.white,
          default: {
            body: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          active: {
            body: theme.palette.t1.system.dark60
          },
          disabled: {
            body: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.pewter
          }
        },
        contrastOutline: {
          body: theme.palette.t1.system.white,
          default: {
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          active: {
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        contrastReverse: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          active: {
            body: theme.palette.t1.system.misty
          },
          disabled: {
            body: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.ink
          }
        },
        contrastOutlineReverse: {
          body: theme.palette.t1.system.dark70,
          default: {
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          active: {
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        transparent: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50,
            border: theme.palette.t1.transparent
          },
          active: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        transparentReverse: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        link: {
          body: theme.palette.t1.transparent,
          default: {
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            text: theme.palette.t1.secondary.blue50
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        elevated: {
          body: theme.palette.t1.system.white,
          default: {
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          active: {
            text: theme.palette.t1.secondary.blue70,
            body: theme.palette.t1.system.misty
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        header: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.pewter
          },
          hover: { body: theme.palette.t1.system.offWhite },
          active: { body: theme.palette.t1.system.offWhite },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        },
        fab: {
          default: {
            default: {
              body: theme.palette.t1.system.misty,
              text: theme.palette.t1.system.ink
            },
            hover: { body: theme.palette.t1.system.cloudy },
            active: {
              body: theme.palette.t1.system.offWhite,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.system.cloudy,
              text: theme.palette.t1.system.silver
            }
          },
          primary: {
            text: theme.palette.t1.system.white,
            default: {
              body: theme.palette.t1.primary.orange60
            },
            hover: {
              body: theme.palette.t1.primary.orange50
            },
            active: {
              body: theme.palette.t1.primary.orange70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.primary.orange20
            }
          },
          secondary: {
            default: {
              body: theme.palette.t1.secondary.blue60,
              text: theme.palette.t1.system.white
            },
            hover: { body: theme.palette.t1.secondary.blue50 },
            active: {
              body: theme.palette.t1.secondary.blue70,
              border: theme.palette.t1.system.dark80
            },
            disabled: {
              body: theme.palette.t1.secondary.blue20,
              text: theme.palette.t1.system.silver
            }
          }
        },
        chip: {
          text: theme.palette.t1.secondary.blue60,
          default: {
            body: theme.palette.t1.secondary.blue10
          },
          hover: {
            body: theme.palette.t1.secondary.blue20
          },
          active: {
            body: theme.palette.t1.secondary.blue30
          },
          disabled: {
            body: theme.palette.t1.secondary.blue60,
            text: theme.palette.t1.secondary.blue60
          }
        },
        toggleIcon: {
          text: theme.palette.t1.system.pewter,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.silver
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            body: theme.palette.t1.system.misty,
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        },
        simpleIcon: {
          text: theme.palette.t1.system.ink,
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.cloudy
          },
          hover: {
            text: theme.palette.t1.secondary.blue60
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            border: theme.palette.t1.system.cloudy
          },
          disabled: {
            text: theme.palette.t1.system.silver
          },
          selected: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.system.cloudy
          },
          focused: {
            border: theme.palette.t1.secondary.blue60
          },
          icon: {
            body: theme.palette.t1.system.pewter
          }
        }
      };
    }
  }
};
var StyledChipButton = (0, import_styles.styled)(import_material2.Button)(({
  theme
}) => {
  const palette = _buttonTheme(theme);
  return {
    ".MuiSvgIcon-root": {
      color: "inherit"
    },
    whiteSpace: "nowrap",
    textTransform: "none",
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    fontSize: theme.typography.paragraph.md.medium.fontSize,
    boxShadow: "none",
    backgroundColor: palette.chip.default.body,
    height: "20px",
    padding: theme.spacing(4),
    borderRadius: "24px",
    color: palette.chip.text,
    margin: 0,
    "&:hover": {
      backgroundColor: palette.chip.hover.body
    },
    "&:active, &.T1-chipButton-active": {
      backgroundColor: palette.chip.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: palette.chip.default.body,
      outline: `1px dashed ${palette.chip.text}`,
      "&:hover": {
        backgroundColor: palette.chip.hover.body
      },
      "&:active, &.T1-chipButton-active": {
        backgroundColor: palette.chip.active.body
      }
    },
    "&.Mui-disabled": {
      color: palette.chip.text,
      backgroundColor: palette.chip.default.body,
      opacity: "50%",
      cursor: "not-allowed",
      pointerEvents: "all"
    }
  };
});
var StyledToggleIconButton = (0, import_styles.styled)(import_material2.Button)(({ theme, buttontype = "center", selected = false }) => {
  const getBorderRadius = () => {
    switch (buttontype) {
      case "left":
        return `${theme.shape.borderRadius}px 0 0 ${theme.shape.borderRadius}px`;
      case "right":
        return `0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0`;
      case "top":
        return `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`;
      case "bottom":
        return `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`;
      case "center":
      default:
        return "0";
    }
  };
  return {
    minWidth: "auto",
    width: "54px",
    height: "36px",
    padding: 0,
    borderRadius: getBorderRadius(),
    position: "relative",
    boxSizing: "content-box",
    backgroundColor: selected ? theme.palette.button.toggleIcon.selected.body : theme.palette.button.toggleIcon.default.body,
    color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.text,
    border: selected ? `1px solid ${theme.palette.button.toggleIcon.selected.border}` : `1px solid ${theme.palette.button.toggleIcon.default.border}`,
    "&:hover, &.Mui-HoverVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px solid ${theme.palette.button.toggleIcon.hover.border}`
    },
    "&:active, &.isActive": {
      backgroundColor: theme.palette.button.toggleIcon.active.body
    },
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.button.toggleIcon.default.body,
      border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
      outline: "none",
      "&:hover": {
        backgroundColor: theme.palette.button.toggleIcon.default.body
      }
    },
    "&.Mui-disabled": {
      backgroundColor: theme.palette.button.toggleIcon.disabled.body,
      color: theme.palette.action.disabled,
      border: `1px solid ${theme.palette.button.toggleIcon.disabled.border}`,
      ".MuiSvgIcon-root": {
        color: theme.palette.button.toggleIcon.disabled.text
      }
    },
    "& .MuiSvgIcon-root": {
      fontSize: "20px",
      color: selected ? theme.palette.button.toggleIcon.selected.text : theme.palette.button.toggleIcon.icon.body
    }
  };
});
var StyledSimpleIconButton = (0, import_styles.styled)(import_material2.IconButton)(({ theme, variant, selected }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  transition: "color 0.2s ease-in-out",
  width: "24px",
  height: "24px",
  color: theme.palette.button.simpleIcon.text,
  "&:hover:not(:disabled), &.Mui-HoverVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text
  },
  ...selected && {
    color: variant === "heart" ? "#C62828" : "#FBC02D",
    "&:hover:not(:disabled)": {
      color: variant === "heart" ? "#C62828" : "#FBC02D"
    }
  },
  "&.Mui-focusVisible": {
    backgroundColor: "transparent",
    color: theme.palette.button.simpleIcon.hover.text,
    border: `1px dashed ${theme.palette.button.toggleIcon.focused.border}`,
    outlineOffset: "2px"
  },
  "&:disabled": {
    color: theme.palette.button.simpleIcon.disabled.text,
    cursor: "not-allowed"
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
    transition: "inherit"
  }
}));
var StyledButtonArrangement = (0, import_styles.styled)(import_material.Stack)(({
  theme
}) => {
  return {
    display: "flex",
    gap: theme.spacing(3),
    justifyContent: "end",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
      ".MuiButtonBase-root": { width: "100%" }
    }
  };
});

// lib/buttons/constants.ts
var STROKE_WIDTH = {
  large: "3px",
  medium: "4px",
  small: "5px",
  extraSmall: "5.5px"
};

// lib/circular-progress/theme.ts
var import_material3 = require("@mui/material");

// lib/circular-progress/constants.ts
var SIZE_MAP = {
  extraLarge: "90px",
  large: "60px",
  medium: "48px",
  small: "30px",
  extraSmall: "18px"
};
var STROKE_WIDTH2 = {
  extraLarge: "0.9px",
  large: "1.2px",
  medium: "1.5px",
  small: "2.4px",
  extraSmall: "4px"
};

// lib/circular-progress/theme.ts
var circularProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        default: {
          background: theme.palette.t1.system.slate,
          foreground: theme.palette.t1.system.white
        },
        brand: {
          background: theme.palette.t1.primary.orange75,
          foreground: theme.palette.t1.primary.orange30
        },
        stepper: {
          background: theme.palette.t1.system.silver,
          foreground: theme.palette.t1.secondary.blue40
        }
      };
    }
    case "light": {
      return {
        default: {
          background: theme.palette.t1.secondary.blue20,
          foreground: theme.palette.t1.secondary.blue80
        },
        brand: {
          background: theme.palette.t1.primary.orange10,
          foreground: theme.palette.t1.primary.orange50
        },
        stepper: {
          background: theme.palette.t1.secondary.blue30,
          foreground: theme.palette.t1.secondary.blue60
        }
      };
    }
  }
};
var StyledCircularProgressWrapper = (0, import_material3.styled)(
  "div"
)(({
  theme,
  size,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: `${SIZE_MAP[size]}`,
    height: `${SIZE_MAP[size]}`,
    stroke: `${palette[color].background}`,
    circle: {
      strokeWidth: `${STROKE_WIDTH2[size]}`,
      fill: "transparent"
    },
    ".MuiCircularProgress-root": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: `${palette[color].foreground}`
    }
  };
});
var StyledStepperCircularProgressWrapper = (0, import_material3.styled)("div")(({
  theme,
  color
}) => {
  const palette = circularProgressTheme(theme);
  return {
    position: "relative",
    width: "24px",
    height: "24px",
    strokeWidth: "2.5",
    stroke: palette.default.background,
    svg: {
      position: "absolute",
      left: 0
    },
    circle: {
      fill: "transparent"
    },
    "&.T1-CircularProgressWrapper-Stepper": {
      stroke: palette.stepper.background
    },
    ".T1-CircularProgress-Stepper": {
      stroke: palette.stepper.foreground
    },
    ".MuiCircularProgress-root": {
      maxWidth: "100%",
      maxHeight: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      color: palette[color].foreground
    }
  };
});

// lib/circular-progress/component.tsx
var import_material4 = require("@mui/material");
var import_jsx_runtime2 = require("react/jsx-runtime");
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_material4.CircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};

// lib/buttons/component.tsx
var import_icons_material2 = require("@mui/icons-material");

// lib/menu/component.tsx
var import_react3 = __toESM(require("react"), 1);
var import_material6 = require("@mui/material");

// lib/cms/component.tsx
var import_react2 = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime3 = require("react/jsx-runtime");
var createHTMLTagsMapper = () => {
  const htmlTags = [
    // Document structure
    "html",
    "head",
    "body",
    "title",
    "meta",
    "link",
    "style",
    "script",
    "noscript",
    "base",
    // Sections
    "header",
    "nav",
    "main",
    "section",
    "article",
    "aside",
    "footer",
    "address",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    // Grouping content
    "div",
    "p",
    "hr",
    "pre",
    "blockquote",
    "ol",
    "ul",
    "li",
    "dl",
    "dt",
    "dd",
    "figure",
    "figcaption",
    // Text-level semantics
    "a",
    "em",
    "strong",
    "small",
    "mark",
    "del",
    "ins",
    "q",
    "cite",
    "abbr",
    "dfn",
    "time",
    "code",
    "var",
    "samp",
    "kbd",
    "sub",
    "sup",
    "i",
    "b",
    "u",
    "s",
    "span",
    "br",
    "wbr",
    "bdi",
    "bdo",
    "ruby",
    "rt",
    "rp",
    // Embedded content
    "img",
    "iframe",
    "embed",
    "object",
    "param",
    "video",
    "audio",
    "source",
    "track",
    "map",
    "area",
    "svg",
    "math",
    // Tabular data
    "table",
    "caption",
    "colgroup",
    "col",
    "tbody",
    "thead",
    "tfoot",
    "tr",
    "td",
    "th",
    // Forms
    "form",
    "fieldset",
    "legend",
    "label",
    "input",
    "button",
    "select",
    "datalist",
    "optgroup",
    "option",
    "textarea",
    "output",
    "progress",
    "meter",
    // Interactive elements
    "details",
    "summary",
    "dialog",
    // Web Components
    "slot",
    "template",
    // Deprecated but still used
    "center",
    "font",
    "big",
    "small",
    "tt"
  ];
  const mapper = {};
  htmlTags.forEach((tag) => {
    mapper[tag] = (chunks) => (0, import_react2.createElement)(tag, {}, chunks);
  });
  return mapper;
};
var htmlTagsMapper = createHTMLTagsMapper();
var useGetCMSContent = () => {
  const intl = (0, import_react_intl.useIntl)();
  return ({
    contentId,
    key,
    fallbackContent = "Content not found",
    values,
    enableHTMLTags = false
  }) => {
    const id = key || null;
    const messageId = `${contentId}${id}`;
    const notFoundMarker = `__CMS_NOT_FOUND__${messageId}__`;
    const formatValues = enableHTMLTags ? { ...htmlTagsMapper, ...values } : values;
    const cmsMessage = intl.formatMessage(
      {
        id: messageId,
        defaultMessage: notFoundMarker
      },
      formatValues
    );
    return cmsMessage === notFoundMarker ? fallbackContent : cmsMessage;
  };
};

// lib/menu-item/component.tsx
var import_styles2 = require("@mui/material/styles");
var import_material5 = require("@mui/material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var StyledMenuItem = (0, import_styles2.styled)(import_material5.MenuItem)(({ theme }) => ({
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  padding: theme.spacing(3),
  color: theme.palette.menuItem.text,
  backgroundColor: theme.palette.menuItem.background,
  minWidth: 220,
  "&.MuiAutocomplete-option.Mui-focused": {
    backgroundColor: theme.palette.menuItem.background
  },
  "&.MuiMenuItem-divider": {
    borderBottom: `1px solid ${theme.palette.menuItem.divider}`
  },
  "&.menuItemLvl-1": {
    paddingLeft: theme.spacing(9)
  },
  "&.menuItemLvl-2": {
    paddingLeft: theme.spacing(15)
  },
  "&:hover, &.Mui-selected:hover, &.Mui-focusVisible:hover, &.Mui-selected.Mui-focusVisible:hover, &.MuiAutocomplete-option:hover, &.MuiAutocomplete-option[aria-selected=true]:hover": {
    backgroundColor: theme.palette.menuItem.hover.background
  },
  "&:active, &.Mui-selected:active, &.Mui-selected.Mui-focusVisible:active, &.Mui-focusVisible:active, &.MuiAutocomplete-option:active, &.MuiAutocomplete-option[aria-selected=true], &.MuiAutocomplete-option[aria-selected=true].Mui-focused": {
    backgroundColor: `${theme.palette.menuItem.active.background}`
  },
  "&.Mui-focusVisible, &.Mui-selected.Mui-focusVisible": {
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`,
    outlineOffset: "-1px",
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-selected": {
    fontFamily: theme.typography.paragraph.md.medium.fontFamily,
    backgroundColor: theme.palette.menuItem.background
  },
  "&.Mui-disabled": {
    color: theme.palette.menuItem.disabled.text,
    opacity: 1,
    cursor: "not-allowed"
  },
  "&.menuItemHeader": {
    fontSize: theme.typography.paragraph.xs.medium.fontSize,
    lineHeight: theme.typography.paragraph.xs.medium.lineHeight,
    fontFamily: theme.typography.paragraph.xs.medium.fontFamily,
    textTransform: "uppercase",
    tabIndex: "-1",
    pointerEvents: "none",
    backgroundColor: theme.palette.menuItem.headerBackground,
    color: theme.palette.menuItem.headerText
  }
}));
var MenuItem = ({
  children,
  className = "",
  header,
  lvl = 0,
  ...rest
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    StyledMenuItem,
    {
      ...rest,
      disableRipple: true,
      disableTouchRipple: true,
      className: `${className} ${header ? "menuItemHeader" : ""} menuItemLvl-${lvl}`,
      children
    }
  );
};

// lib/menu-item/theme.ts
var menuItemTheme = {
  dark: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      background: COLORS.SYSTEM.DARK_60,
      headerBackground: COLORS.SYSTEM.INK,
      headerText: COLORS.SYSTEM.SILVER,
      divider: COLORS.SYSTEM.SLATE,
      hover: {
        background: COLORS.SYSTEM.DARK_70
      },
      active: {
        background: COLORS.SYSTEM.DARK_80
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "menuItem",
    styles: {
      text: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.WHITE,
      headerBackground: COLORS.SYSTEM.OFF_WHITE,
      headerText: COLORS.SYSTEM.DARK_30,
      divider: COLORS.SYSTEM.MISTY,
      hover: {
        background: COLORS.SECONDARY.BLUE_10
      },
      active: {
        background: COLORS.SECONDARY.BLUE_20
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER
      }
    }
  }
};

// lib/menu/component.tsx
var import_styles3 = require("@mui/material/styles");
var import_jsx_runtime5 = require("react/jsx-runtime");
var StyledMenu = (0, import_styles3.styled)(import_material6.Menu)(() => ({
  padding: 0,
  ".MuiList-root": {
    padding: 0
  }
}));
var Menu = import_react3.default.forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      variant: "default",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      StyledMenu,
      {
        ...omitCustomProps(propsWithDefault, ["variant"]),
        elevation: 1,
        ref,
        className: propsWithDefault.variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: propsWithDefault.children
      }
    );
  }
);
var MenuWithCMS = import_react3.default.forwardRef(
  ({ contentId, variant, ...rest }, ref) => {
    const intl = (0, import_react_intl.useIntl)();
    const keys = Object.keys(intl.messages).filter(
      (key) => key.startsWith(`${contentId}.items`) && key.endsWith(".label")
    ).map((key) => intl.messages[key]);
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/checkbox/theme.ts
var import_material8 = require("@mui/material");

// lib/form-helper-text/component.tsx
var import_material7 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_material7.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_icons_material.WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/checkbox/theme.ts
var checkboxTheme = {
  dark: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_40,
      subheading: COLORS.SYSTEM.SILVER,
      svgColor: COLORS.SYSTEM.DARK_70,
      default: {
        checked: COLORS.SECONDARY.BLUE_40,
        unchecked: COLORS.SYSTEM.MISTY,
        label: COLORS.SYSTEM.WHITE
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_30,
        unchecked: COLORS.SECONDARY.BLUE_40,
        label: COLORS.SYSTEM.WHITE
      },
      error: {
        checked: COLORS.ERROR.ERROR_20,
        unchecked: COLORS.ERROR.ERROR_20,
        label: COLORS.SYSTEM.WHITE
      },
      disabled: {
        checked: COLORS.SYSTEM.PEWTER,
        unchecked: COLORS.SYSTEM.PEWTER,
        label: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "checkbox",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_60,
      subheading: COLORS.SYSTEM.DARK_30,
      svgColor: COLORS.SYSTEM.WHITE,
      default: {
        checked: COLORS.SECONDARY.BLUE_60,
        unchecked: COLORS.SYSTEM.SLATE,
        label: COLORS.SYSTEM.INK
      },
      hover: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      focus: {
        checked: COLORS.SECONDARY.BLUE_70,
        unchecked: COLORS.SECONDARY.BLUE_60,
        label: COLORS.SYSTEM.INK
      },
      error: {
        checked: COLORS.ERROR.ERROR_40,
        unchecked: COLORS.ERROR.ERROR_40,
        label: COLORS.SYSTEM.INK
      },
      disabled: {
        checked: COLORS.SYSTEM.SILVER,
        unchecked: COLORS.SYSTEM.SILVER,
        label: COLORS.SYSTEM.SILVER
      }
    }
  }
};
var _checkboxTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue40,
        subheading: theme.palette.t1.system.silver,
        svgColor: theme.palette.t1.system.dark70,
        default: {
          checked: theme.palette.t1.secondary.blue40,
          unchecked: theme.palette.t1.system.misty,
          label: theme.palette.t1.system.white
        },
        hover: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        focus: {
          checked: theme.palette.t1.secondary.blue30,
          unchecked: theme.palette.t1.secondary.blue40,
          label: theme.palette.t1.system.white
        },
        error: {
          checked: theme.palette.t1.error.error20,
          unchecked: theme.palette.t1.error.error20,
          label: theme.palette.t1.system.white
        },
        disabled: {
          checked: theme.palette.t1.system.pewter,
          unchecked: theme.palette.t1.system.pewter,
          label: theme.palette.t1.system.pewter
        }
      };
    }
    case "light": {
      return {
        outlineFocus: theme.palette.t1.secondary.blue60,
        subheading: theme.palette.t1.system.dark30,
        svgColor: theme.palette.t1.system.white,
        default: {
          checked: theme.palette.t1.secondary.blue60,
          unchecked: theme.palette.t1.system.slate,
          label: theme.palette.t1.system.ink
        },
        hover: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        focus: {
          checked: theme.palette.t1.secondary.blue70,
          unchecked: theme.palette.t1.secondary.blue60,
          label: theme.palette.t1.system.ink
        },
        error: {
          checked: theme.palette.t1.error.error40,
          unchecked: theme.palette.t1.error.error40,
          label: theme.palette.t1.system.ink
        },
        disabled: {
          checked: theme.palette.t1.system.silver,
          unchecked: theme.palette.t1.system.silver,
          label: theme.palette.t1.system.silver
        }
      };
    }
  }
};
var StyledCheckboxHelperText = (0, import_material8.styled)(FormHelperText)(({
  theme
}) => {
  const palette = _checkboxTheme(theme);
  return {
    fontWeight: theme.typography.fontWeightRegular,
    margin: 0,
    padding: 0,
    transform: `translateX(${theme.spacing(8.5)})`,
    color: palette.subheading,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight
  };
});

// lib/checkbox/component.tsx
var import_react4 = require("react");
var import_material9 = require("@mui/material");
var import_styles4 = require("@mui/material/styles");
var import_SvgIcon = __toESM(require("@mui/material/SvgIcon"), 1);
var import_jsx_runtime7 = require("react/jsx-runtime");

// lib/typography/theme.ts
var typographyTheme = {
  dark: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.WHITE,
      disabledColor: COLORS.SYSTEM.PEWTER
    }
  },
  light: {
    name: "typography",
    styles: {
      color: COLORS.SYSTEM.INK,
      disabledColor: COLORS.SYSTEM.SILVER
    }
  }
};

// lib/typography/component.tsx
var import_material10 = require("@mui/material");
var import_styles5 = require("@mui/material/styles");
var import_react5 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var getHeadingStyles = (theme, heading) => {
  return {
    fontSize: theme.typography[heading].regular.fontSize,
    lineHeight: theme.typography[heading].regular.lineHeight,
    fontFamily: theme.typography[heading].regular.fontFamily,
    [theme.breakpoints.down("smTypo")]: {
      fontSize: theme.typography[`${heading}sm`].regular.fontSize,
      lineHeight: theme.typography[`${heading}sm`].regular.lineHeight,
      fontFamily: theme.typography[`${heading}sm`].regular.fontFamily
    },
    "&.medium": {
      fontSize: theme.typography[heading].medium.fontSize,
      lineHeight: theme.typography[heading].medium.lineHeight,
      fontFamily: theme.typography[heading].medium.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].medium.fontSize,
        lineHeight: theme.typography[`${heading}sm`].medium.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].medium.fontFamily
      }
    },
    "&.bold": {
      fontSize: theme.typography[heading].bold.fontSize,
      lineHeight: theme.typography[heading].bold.lineHeight,
      fontFamily: theme.typography[heading].bold.fontFamily,
      [theme.breakpoints.down("smTypo")]: {
        fontSize: theme.typography[`${heading}sm`].bold.fontSize,
        lineHeight: theme.typography[`${heading}sm`].bold.lineHeight,
        fontFamily: theme.typography[`${heading}sm`].bold.fontFamily
      }
    }
  };
};
var getParagraphStyles = (theme, size) => ({
  fontSize: theme.typography.paragraph[size].regular.fontSize,
  lineHeight: theme.typography.paragraph[size].regular.lineHeight,
  fontFamily: theme.typography.paragraph[size].regular.fontFamily,
  "&.medium": {
    fontSize: theme.typography.paragraph[size].medium.fontSize,
    lineHeight: theme.typography.paragraph[size].medium.lineHeight,
    fontFamily: theme.typography.paragraph[size].medium.fontFamily
  },
  "&.bold, & strong": {
    fontSize: theme.typography.paragraph[size].bold.fontSize,
    lineHeight: theme.typography.paragraph[size].bold.lineHeight,
    fontFamily: theme.typography.paragraph[size].bold.fontFamily
  }
});
var Typography = (0, import_react5.forwardRef)(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      StyledTypography,
      {
        ref,
        className: `T1-typography T1-typography-${propsWithDefault.variant} ${propsWithDefault.weight} ${propsWithDefault.className ?? ""}`,
        ...omitCustomProps(propsWithDefault, [
          "className",
          "weight",
          "variant"
        ])
      }
    );
  }
);
var StyledTypography = (0, import_styles5.styled)(import_material10.Typography)(({
  theme
}) => {
  return {
    "&.T1-typography-h1": getHeadingStyles(theme, "h1"),
    "&.T1-typography-h2": getHeadingStyles(theme, "h2"),
    "&.T1-typography-h3": getHeadingStyles(theme, "h3"),
    "&.T1-typography-h4": getHeadingStyles(theme, "h4"),
    "&.T1-typography-h5": getHeadingStyles(theme, "h5"),
    "&.T1-typography-h6": getHeadingStyles(theme, "h6"),
    "&.T1-typography-caption": {
      fontSize: theme.typography.caption.regular.fontSize,
      lineHeight: theme.typography.caption.regular.lineHeight,
      fontFamily: theme.typography.caption.regular.fontFamily,
      "&.medium": {
        fontSize: theme.typography.caption.medium.fontSize,
        lineHeight: theme.typography.caption.medium.lineHeight,
        fontFamily: theme.typography.caption.medium.fontFamily
      },
      "&.bold": {
        fontSize: theme.typography.caption.bold.fontSize,
        lineHeight: theme.typography.caption.bold.lineHeight,
        fontFamily: theme.typography.caption.bold.fontFamily
      }
    },
    "&.T1-typography-paragraphXl": getParagraphStyles(theme, "xl"),
    "&.T1-typography-paragraphLg": getParagraphStyles(theme, "lg"),
    "&.T1-typography-paragraphMd": getParagraphStyles(theme, "md"),
    "&.T1-typography-paragraphSm": getParagraphStyles(theme, "sm"),
    "&.T1-typography-paragraphXs": getParagraphStyles(theme, "xs"),
    // TO-DO - Check if this line of code is necessary. Removed temporarily because of conflicts in Tile component.
    color: theme.palette.typography.color
  };
});

// lib/buttons/component.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var Button = ({
  size = "medium",
  loading,
  disabled,
  children,
  contentId,
  cmsOptions,
  className,
  ...props
}) => {
  const getContent = useGetCMSContent();
  const buttonChildren = contentId ? getContent({
    contentId,
    key: cmsOptions?.key || ".label",
    fallbackContent: cmsOptions?.fallbackContent || children,
    values: cmsOptions?.values || {}
  }) : children;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    import_material11.Button,
    {
      disabled: disabled || loading,
      size,
      ...props,
      disableRipple: true,
      className: `T1-button ${className}`,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          CircularProgress,
          {
            "data-testid": "circular-progress",
            sx: {
              circle: {
                strokeWidth: STROKE_WIDTH[size]
              }
            }
          }
        ),
        buttonChildren
      ]
    }
  );
};

// lib/signature/component.tsx
var import_material12 = require("@mui/material");
var import_jsx_runtime10 = require("react/jsx-runtime");
var StyledContainer = (0, import_material12.styled)(import_material.Box)(
  ({ theme }) => ({
    borderRadius: theme.spacing(0.25),
    border: `1px solid ${theme.palette.signature.border.default}`,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    ".T1-signature-reset-icon": {
      position: "absolute",
      top: 13,
      right: 20,
      color: theme.palette.signature.border.hover,
      cursor: "pointer",
      width: 18,
      height: 18,
      "&:focus-visible": {
        outline: `1px dashed ${theme.palette.outline}`
      }
    },
    ".T1-signature-unerline": {
      borderBottom: `1px solid ${theme.palette.signature.underline.default}`
    },
    "&:hover": {
      border: `1px solid ${theme.palette.signature.border.hover}`,
      "&:after": {
        backgroundColor: theme.palette.signature.underline.hover
      }
    },
    "&:active": {
      border: `1px solid ${theme.palette.signature.border.active}`
    },
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: 31,
      left: 16,
      right: 16,
      height: 1,
      backgroundColor: theme.palette.signature.underline.default
    }
  })
);
var Signature = ({
  width = 500,
  height = 170,
  onEnd,
  onReset
}) => {
  const [isSignatureCanvasActive, setIsSignatureCanvasActive] = (0, import_react7.useState)(false);
  const signatureRef = (0, import_react7.useRef)(null);
  const theme = (0, import_material12.useTheme)();
  const handleResetClick = () => {
    if (isSignatureCanvasActive) {
      signatureRef.current?.clear();
      onReset?.();
    }
  };
  const handleEnd = () => {
    const image = signatureRef.current?.getTrimmedCanvas().toDataURL("image/png", 1);
    onEnd?.(image);
  };
  const handleResetKeyPress = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      handleResetClick();
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(StyledContainer, { width, height, children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      import_icons_material3.Cached,
      {
        className: "T1-signature-reset-icon",
        onClick: handleResetClick,
        onKeyDown: handleResetKeyPress,
        "data-testid": "T1-signature-reset-button",
        tabIndex: isSignatureCanvasActive ? 0 : -1
      }
    ),
    isSignatureCanvasActive ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      SignatureCanvas,
      {
        canvasProps: { width, height },
        ref: signatureRef,
        onEnd: handleEnd,
        penColor: theme.palette.signature.penColor
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Button,
      {
        variant: "transparent",
        onClick: () => {
          setIsSignatureCanvasActive(true);
        },
        "data-testid": "T1-signature-sign-button",
        children: "Click to Sign"
      }
    )
  ] });
};
/*! Bundled license information:

signature_pad/dist/signature_pad.mjs:
  (*!
   * Signature Pad v2.3.2
   * https://github.com/szimek/signature_pad
   *
   * Copyright 2017 Szymon Nowak
   * Released under the MIT license
   *
   * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
   * http://corner.squareup.com/2012/07/smoother-signatures.html
   *
   * Implementation of interpolation using cubic Bézier curves is taken from:
   * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
   *
   * Algorithm for approximated length of a Bézier curve is taken from:
   * http://www.lemoda.net/maths/bezier-length/index.html
   *
   *)
*/
