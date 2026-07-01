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

// ../../node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "../../node_modules/dayjs/dayjs.min.js"(exports, module2) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
    }(exports, function() {
      "use strict";
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, c), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = "$isDayjsObject", S = function(t2) {
        return t2 instanceof _ || !(!t2 || !t2[p]);
      }, w = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, O = function(t2, e2) {
        if (S(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, b = v;
      b.l = w, b.i = S, b.w = function(t2, e2) {
        return O(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = w(t2.locale, null, true), this.parse(t2), this.$x = this.$x || t2.x || {}, this[p] = true;
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (b.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return b;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = O(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return O(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < O(t2);
        }, m2.$g = function(t2, e2, n2) {
          return b.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!b.u(e2) || e2, f2 = b.p(t2), l2 = function(t3, e3) {
            var i2 = b.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return b.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (f2) {
            case h:
              return r2 ? l2(1, 0) : l2(31, 11);
            case c:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = b.p(t2), f2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = f2 + "Date", n2[d] = f2 + "Date", n2[c] = f2 + "Month", n2[h] = f2 + "FullYear", n2[u] = f2 + "Hours", n2[s] = f2 + "Minutes", n2[i] = f2 + "Seconds", n2[r] = f2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === c || o2 === h) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[b.p(t2)]();
        }, m2.add = function(r2, f2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = b.p(f2), y2 = function(t2) {
            var e2 = O(l2);
            return b.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === c) return this.set(c, this.$M + r2);
          if ($2 === h) return this.set(h, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return b.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = b.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, c2 = n2.months, f2 = n2.meridiem, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, d2 = function(t3) {
            return b.s(s2 % 12 || 12, t3, "0");
          }, $2 = f2 || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          };
          return r2.replace(y, function(t3, r3) {
            return r3 || function(t4) {
              switch (t4) {
                case "YY":
                  return String(e2.$y).slice(-2);
                case "YYYY":
                  return b.s(e2.$y, 4, "0");
                case "M":
                  return a2 + 1;
                case "MM":
                  return b.s(a2 + 1, 2, "0");
                case "MMM":
                  return h2(n2.monthsShort, a2, c2, 3);
                case "MMMM":
                  return h2(c2, a2);
                case "D":
                  return e2.$D;
                case "DD":
                  return b.s(e2.$D, 2, "0");
                case "d":
                  return String(e2.$W);
                case "dd":
                  return h2(n2.weekdaysMin, e2.$W, o2, 2);
                case "ddd":
                  return h2(n2.weekdaysShort, e2.$W, o2, 3);
                case "dddd":
                  return o2[e2.$W];
                case "H":
                  return String(s2);
                case "HH":
                  return b.s(s2, 2, "0");
                case "h":
                  return d2(1);
                case "hh":
                  return d2(2);
                case "a":
                  return $2(s2, u2, true);
                case "A":
                  return $2(s2, u2, false);
                case "m":
                  return String(u2);
                case "mm":
                  return b.s(u2, 2, "0");
                case "s":
                  return String(e2.$s);
                case "ss":
                  return b.s(e2.$s, 2, "0");
                case "SSS":
                  return b.s(e2.$ms, 3, "0");
                case "Z":
                  return i2;
              }
              return null;
            }(t3) || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = this, M3 = b.p(d2), m3 = O(r2), v2 = (m3.utcOffset() - this.utcOffset()) * e, g2 = this - m3, D2 = function() {
            return b.m(y2, m3);
          };
          switch (M3) {
            case h:
              $2 = D2() / 12;
              break;
            case c:
              $2 = D2();
              break;
            case f:
              $2 = D2() / 3;
              break;
            case o:
              $2 = (g2 - v2) / 6048e5;
              break;
            case a:
              $2 = (g2 - v2) / 864e5;
              break;
            case u:
              $2 = g2 / n;
              break;
            case s:
              $2 = g2 / e;
              break;
            case i:
              $2 = g2 / t;
              break;
            default:
              $2 = g2;
          }
          return l2 ? $2 : b.a($2);
        }, m2.daysInMonth = function() {
          return this.endOf(c).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = w(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return b.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), k = _.prototype;
      return O.prototype = k, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", c], ["$y", h], ["$D", d]].forEach(function(t2) {
        k[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), O.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, O), t2.$i = true), O;
      }, O.locale = w, O.isDayjs = S, O.unix = function(t2) {
        return O(1e3 * t2);
      }, O.en = D[g], O.Ls = D, O.p = {}, O;
    });
  }
});

// lib/date-picker/index.ts
var date_picker_exports = {};
__export(date_picker_exports, {
  DatePicker: () => DatePicker,
  RangeDatePicker: () => RangeDatePicker,
  buildShouldDisableDate: () => buildShouldDisableDate,
  isDisabledDateRange: () => isDisabledDateRange
});
module.exports = __toCommonJS(date_picker_exports);

// lib/input-adornment/component.tsx
var import_material = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var InputAdornment = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_material.InputAdornment, { ...props });

// lib/icon-button/component.tsx
var import_material3 = require("@mui/material");

// lib/layout/index.ts
var import_material2 = require("@mui/material");

// lib/utils/components.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");

// lib/utils/index.ts
var omitCustomProps = (obj = {}, keys) => {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!keys.includes(key)) {
      result[key] = value;
    }
  }
  return result;
};

// lib/icon-button/component.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var IconButton = (props) => {
  const propsWithDefault = {
    variant: "transparent",
    shape: "circle",
    ...props
  };
  const {
    variant = "transparent",
    shape = "circle",
    children,
    className,
    ...rest
  } = propsWithDefault;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_material3.IconButton,
    {
      className: `T1-icon-button MuiIconButton-${variant} MuiIconButton-${shape} ${className}`,
      ...omitCustomProps(rest, ["disableRipple", "disableFocusRipple"]),
      sx: props.sx,
      disableRipple: true,
      disableFocusRipple: true,
      children
    }
  );
};

// lib/input-label/theme.ts
var getInputLabelStyles = ({ theme }) => ({
  color: theme.palette.textField.label.text,
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  background: "transparent",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "15.625rem",
  paddingRight: theme.spacing(2.5),
  top: theme.spacing(-1),
  right: theme.spacing(5),
  "&.Mui-focused": {
    right: "unset",
    top: theme.spacing(0),
    transform: `translate(${theme.spacing(2)}, ${theme.spacing(-3)}) scale(1)`
  },
  "&.MuiInputLabel-sizeSmall": {
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    top: -1
  },
  "&.MuiInputLabel-shrink": {
    fontFamily: theme.typography.paragraph.xs.regular.fontFamily,
    fontSize: theme.typography.paragraph.xs.regular.fontSize,
    lineHeight: theme.typography.paragraph.xs.regular.lineHeight,
    top: 0,
    height: theme.typography.paragraph.xs.regular.lineHeight,
    paddingLeft: theme.spacing(1.5),
    transform: `translate(${theme.spacing(2)}, ${theme.spacing(-2)}) scale(1)`,
    background: "transparent",
    "&.Mui-error": {
      color: theme.palette.textField.error.text,
      "&.Mui-focused": {
        color: theme.palette.textField.focus.border
      }
    },
    "&.MuiInputLabel-sizeSmall": {}
  },
  "&.Mui-error": {
    color: theme.palette.textField.label.text
  },
  "&.Mui-disabled": {
    opacity: 1,
    color: theme.palette.textField.disabled.text,
    background: theme.palette.textField.disabled.background
  },
  "&.Mui-focused.Mui-readOnly": {
    color: theme.palette.textField.label.text
  },
  zIndex: 0
});

// lib/divider/component.tsx
var import_material4 = require("@mui/material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Divider = (props) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material4.Divider, { ...props });

// lib/date-picker/rangeDatePicker.tsx
var import_styles2 = require("@mui/material/styles");
var import_x_date_pickers2 = require("@mui/x-date-pickers");
var import_material8 = require("@mui/material");
var import_react4 = require("react");
var import_dayjs2 = __toESM(require_dayjs_min(), 1);
var import_icons_material2 = require("@mui/icons-material");

// lib/calendar/component.tsx
var import_react = __toESM(require("react"), 1);
var import_x_date_pickers = require("@mui/x-date-pickers");
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_jsx_runtime5 = require("react/jsx-runtime");
var setCurrentYear = (view) => {
  if (view === "year") {
    const currentYear = (0, import_dayjs.default)().year();
    setTimeout(() => {
      const buttons = document.querySelectorAll(".MuiYearCalendar-button");
      console.log(buttons);
      buttons.forEach((button) => {
        if (button.textContent.trim() === `${currentYear}`) {
          button.classList.add("MuiPickersYear-currentYear");
        }
      });
    }, 0);
  }
};
var CalendarContext = import_react.default.createContext({
  enableRange: false,
  enableWeek: false,
  rangeStart: null,
  rangeEnd: null,
  weekStart: null,
  onDaySelect: () => {
  }
});
var DayComponent = import_react.default.forwardRef(
  (pickersDayProps, ref) => {
    const {
      enableRange,
      enableWeek,
      rangeStart,
      rangeEnd,
      weekStart,
      onDaySelect
    } = (0, import_react.useContext)(CalendarContext);
    const day = pickersDayProps.day;
    const internalRef = import_react.default.useRef(null);
    const setRef = (0, import_react.useCallback)(
      (el) => {
        internalRef.current = el;
        if (typeof ref === "function") ref(el);
        else if (ref)
          ref.current = el;
      },
      [ref]
    );
    (0, import_react.useEffect)(() => {
      if (enableWeek && weekStart && internalRef.current) {
        const isInSelectedWeek = day.isSame(weekStart, "week");
        const container = internalRef.current.closest(
          ".MuiDayCalendar-weekContainer"
        );
        if (isInSelectedWeek) {
          container?.classList.add("week-selected");
        }
      }
    });
    const defaultSelected = !!pickersDayProps.selected;
    const isInRange = (date) => rangeStart && rangeEnd && date.isBetween(rangeStart, rangeEnd, "day", "[]");
    const isInWeek = (date) => weekStart && date.isSame(weekStart, "week");
    const isSelected = defaultSelected || enableRange && isInRange(day) || enableWeek && isInWeek(day);
    const isRangeStart = enableRange && rangeStart && day.isSame(rangeStart, "day");
    const isRangeEnd = enableRange && rangeEnd && day.isSame(rangeEnd, "day");
    const isBetweenRange = enableRange && rangeStart && rangeEnd && day.isBetween(rangeStart, rangeEnd);
    const handleMouseEnter = (event) => {
      if (enableWeek) {
        const weekContainer = event.currentTarget.closest(
          ".MuiDayCalendar-weekContainer"
        );
        weekContainer?.classList.add("week-hovers");
      }
    };
    const handleMouseLeave = (event) => {
      if (enableWeek) {
        const weekContainer = event.currentTarget.closest(
          ".MuiDayCalendar-weekContainer"
        );
        weekContainer?.classList.remove("week-hovers");
      }
    };
    let rangeClass = "";
    if (isBetweenRange) rangeClass = "range-between";
    else if (isRangeStart) rangeClass = "range-start";
    else if (isRangeEnd) rangeClass = "range-end";
    else if (isSelected) rangeClass = "Mui-selected";
    const handleClick = (e) => {
      onDaySelect(day);
      if (enableWeek) {
        const allWeekContainers = document.querySelectorAll(
          ".MuiDayCalendar-weekContainer"
        );
        allWeekContainers.forEach((container) => {
          container.classList.remove("week-selected");
        });
        const weekContainer = e.currentTarget.closest(
          ".MuiDayCalendar-weekContainer"
        );
        weekContainer?.classList.remove("week-hovers");
        weekContainer?.classList.add("week-selected");
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      import_x_date_pickers.PickersDay,
      {
        ref: setRef,
        ...pickersDayProps,
        "data-day": day.format("YYYY-MM-DD"),
        className: `${pickersDayProps.className ?? ""} ${enableWeek ? "week-enabled" : ""} ${rangeClass}`.trim(),
        selected: isSelected ?? void 0,
        onClick: handleClick,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave
      }
    );
  }
);
var DateCalendar = ({
  onViewChange,
  enableRange = false,
  enableWeek = false,
  ...props
}) => {
  const onChange = props.onChange;
  const rangeValueProp = enableRange ? props.value : null;
  const [rangeStart, setRangeStart] = (0, import_react.useState)(
    rangeValueProp?.start ?? null
  );
  const [rangeEnd, setRangeEnd] = (0, import_react.useState)(
    rangeValueProp?.end ?? null
  );
  const [weekStart, setWeekStart] = (0, import_react.useState)(null);
  (0, import_react.useEffect)(() => {
    if (enableRange) {
      setRangeStart(rangeValueProp?.start ?? null);
      setRangeEnd(rangeValueProp?.end ?? null);
    }
  }, [enableRange, rangeValueProp?.start, rangeValueProp?.end]);
  const handleDaySelect = (date) => {
    if (enableRange) {
      if (!rangeStart || rangeStart && rangeEnd) {
        setRangeStart(date);
        setRangeEnd(null);
        if (onChange) onChange({ start: date, end: null });
      } else {
        const newEnd = date.isBefore(rangeStart) ? rangeStart : date;
        setRangeEnd(newEnd);
        if (onChange) onChange({ start: rangeStart, end: newEnd });
      }
    } else if (enableWeek) {
      const newWeekStart = date.startOf("week");
      setWeekStart(newWeekStart);
      if (onChange)
        onChange({
          start: newWeekStart,
          end: newWeekStart.add(6, "day")
        });
    } else {
      if (onChange) onChange(date);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    CalendarContext.Provider,
    {
      value: {
        enableRange,
        enableWeek,
        rangeStart,
        rangeEnd,
        weekStart,
        onDaySelect: handleDaySelect
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_x_date_pickers.DateCalendar,
        {
          slots: { day: DayComponent },
          onViewChange: (view) => {
            setCurrentYear(view);
            if (onViewChange) onViewChange(view);
          },
          showDaysOutsideCurrentMonth: true,
          ...(({ onChange: _onChange, value: _value, ...rest }) => rest)(
            props
          ),
          value: enableRange ? rangeStart ?? void 0 : props.value
        }
      )
    }
  );
};

// lib/text-field/component.tsx
var import_react3 = require("react");
var import_styles = require("@mui/material/styles");
var import_material7 = require("@mui/material");

// lib/cms/component.tsx
var import_react2 = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime6 = require("react/jsx-runtime");
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

// lib/input-label/component.tsx
var import_material5 = require("@mui/material");
var import_jsx_runtime7 = require("react/jsx-runtime");
var InputLabel = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_material5.InputLabel, { ...props });
};

// lib/form-helper-text/component.tsx
var import_material6 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime8 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_material6.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_icons_material.WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/text-field/component.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
var TextField = (0, import_react3.forwardRef)(
  ({ contentId, slotProps, ...rest }, ref) => {
    const getCMSContent = useGetCMSContent();
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      import_material7.TextField,
      {
        ref,
        ...rest,
        slots: {
          input: StyledOutlinedInput,
          inputLabel: InputLabel,
          formHelperText: FormHelperText
        },
        slotProps: {
          inputLabel: {
            children: contentId ? getCMSContent({
              contentId,
              key: ".label",
              fallbackContent: rest.label
            }) : rest.label
          },
          ...slotProps
        }
      }
    );
  }
);
var getOutlinedInputStyles = ({ theme }) => ({
  alignItems: "center",
  outline: "none",
  padding: 0,
  height: "3rem",
  color: theme.palette.textField.text,
  fontFamily: theme.typography.paragraph.md.regular.fontFamily,
  fontSize: theme.typography.paragraph.md.regular.fontSize,
  lineHeight: theme.typography.paragraph.md.regular.lineHeight,
  ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
    padding: `${theme.spacing(3)}`
  },
  ".MuiIconButton-edgeEnd": {
    marginRight: theme.spacing(1)
  },
  ".MuiIconButton-root": {
    ".MuiSvgIcon-root": {
      fill: "#242936"
    }
  },
  "&.MuiInputBase-sizeSmall": {
    input: {
      padding: `${theme.spacing(2, 3)}`
    },
    height: "2.25rem",
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    fieldset: {
      span: {
        paddingRight: theme.spacing(2.75)
      }
    }
  },
  "&:hover, &.T1-hover": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.hover.border
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.hover.border
    }
  },
  ".MuiIconButton-edgeEnd:focus-visible": {
    borderRadius: "2px",
    outline: `dashed 1px ${theme.palette.checkbox.outlineFocus}`
  },
  ".MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.textField.border
  },
  "&.Mui-error, &:hover.Mui-error": {
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.error.border,
      color: theme.palette.textField.text
    }
  },
  "&.Mui-disabled": {
    background: theme.palette.textField.disabled.background,
    opacity: 1,
    ".MuiOutlinedInput-input, .MuiPickersSectionList-root": {
      "-webkit-text-fill-color": `${theme.palette.textField.disabled.text}`
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: theme.palette.textField.disabled.border
    }
  },
  "&.Mui-focused, &.T1-focused": {
    fieldset: {
      "&.MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${theme.palette.textField.focus.border}`
      }
    },
    ".MuiIconButton-edgeEnd": {
      color: theme.palette.textField.focus.border
    }
  },
  "&.MuiSearch": {
    backgroundColor: theme.palette.textField.search.background,
    "&.Mui-focused": {
      backgroundColor: "white"
    },
    input: {
      "&::placeholder": {
        color: theme.palette.textField.search.placeholder
      }
    }
  },
  /* Text Area styles */
  "&.MuiInputBase-multiline": {
    height: "auto"
  },
  input: {
    "&::-ms-reveal, &::-ms-clear": {
      display: "none"
    }
  }
});
var StyledOutlinedInput = (0, import_styles.styled)(import_material7.OutlinedInput)(
  getOutlinedInputStyles
);

// lib/date-picker/rangeDatePicker.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var StyledDivider = (0, import_styles2.styled)(Divider)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  width: "10px"
}));
var StyledPopover = (0, import_styles2.styled)(import_material8.Popover)(({ theme }) => ({
  ".MuiPaper-root": {
    transform: `translateY(${theme.spacing(2)})!important`
  }
}));
var StyledDateField = (0, import_styles2.styled)(import_x_date_pickers2.DateField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    ...getInputLabelStyles({ theme })
  },
  ".MuiPickersInputBase-root": {
    ...getOutlinedInputStyles({ theme })
  }
}));
var SeparatedInputs = (0, import_styles2.styled)(import_material2.Stack)(({ theme }) => ({
  "&.T1-range-date-picker-conjoined": {
    ".MuiFormControl-root": {
      "&:first-of-type": {
        marginRight: theme.spacing(-0.25),
        ".MuiPickersInputBase-root": {
          "&:not(.Mui-focused):not(:hover)": {
            fieldset: {
              borderRight: "none"
            },
            borderRadius: theme.spacing(1, 0, 0, 1)
          }
        }
      },
      "&:last-of-type": {
        ".MuiPickersInputBase-root": {
          "&:not(.Mui-focused):not(:hover)": {
            fieldset: {
              borderLeft: "none"
            },
            borderRadius: theme.spacing(0, 1, 1, 0)
          }
        }
      }
    },
    ".T1-range-date-picker-separator": {
      display: "flex",
      alignItems: "center",
      ".MuiDivider-root": {
        height: 24,
        width: 0,
        margin: 0
      }
    }
  }
}));
var RangeDatePicker = (props) => {
  const {
    startDateLabel = props.variant === "conjoined" ? "Date Picker" : "Date Begin",
    endDateLabel = "Date End",
    onChange,
    disabled,
    variant = "regular"
  } = props;
  let { value } = props;
  const [dayA, setDayA] = (0, import_react4.useState)(value[0]);
  const [dayB, setDayB] = (0, import_react4.useState)(value[1]);
  const dayAFieldRef = (0, import_react4.useRef)(null);
  const dayBFieldRef = (0, import_react4.useRef)(null);
  const [anchorElement, setAnchorElement] = (0, import_react4.useState)(null);
  const [selectedRange, setSelectedRange] = (0, import_react4.useState)(0);
  const [isSingleInputFocused, setIsSingleInputFocused] = (0, import_react4.useState)(false);
  const [resetInteraction, setResetInteraction] = (0, import_react4.useState)(true);
  (0, import_react4.useEffect)(() => {
    value = [dayA, dayB];
    if (onChange) onChange(value);
  }, [dayA, dayB]);
  const handleInputClick = (inputRef) => {
    setAnchorElement(inputRef);
  };
  const handleSingleInputTouch = (e) => {
    const inputElement = e.target;
    if (typeof inputElement.className === "string" && inputElement.className.includes("MuiInputBase-input")) {
      setCurrentSelection(inputElement, selectedRange);
      setIsSingleInputFocused(true);
    }
  };
  const handleSingleInputBlur = () => {
    setSelectedRange(0);
    setIsSingleInputFocused(false);
  };
  const getSignleInputFieldValue = () => {
    return `${dayA?.format("MM/DD/YYYY") ?? "MM/DD/YYYY"} - ${dayB?.format("MM/DD/YYYY") ?? "MM/DD/YYYY"}`;
  };
  const setCurrentSelection = (input, range) => {
    switch (range) {
      case 0: {
        input.setSelectionRange(0, 2);
        break;
      }
      case 1: {
        input.setSelectionRange(3, 5);
        break;
      }
      case 2: {
        input.setSelectionRange(6, 10);
        break;
      }
      case 3: {
        input.setSelectionRange(13, 15);
        break;
      }
      case 4: {
        input.setSelectionRange(16, 18);
        break;
      }
      case 5: {
        input.setSelectionRange(19, 23);
        break;
      }
      default: {
        return;
      }
    }
  };
  (0, import_react4.useEffect)(() => {
    if (variant === "singleInput") {
      let input = dayAFieldRef.current;
      if (input && isSingleInputFocused) {
        input = input.querySelector("input");
        if (!input) return;
        setCurrentSelection(input, selectedRange);
      }
    }
  }, [dayA, dayB]);
  const handleNumericKey = (key) => {
    if (selectedRange >= 0 && selectedRange <= 2 && !dayA) {
      switch (selectedRange) {
        case 0: {
          setDayA((0, import_dayjs2.default)().set("month", key === 0 ? key : key - 1));
          break;
        }
        case 1: {
          setDayA((0, import_dayjs2.default)().set("date", key === 0 ? 1 : key));
          break;
        }
        case 2: {
          setDayA((0, import_dayjs2.default)().set("year", key));
          break;
        }
        default:
          return;
      }
      setResetInteraction(false);
    } else if (selectedRange >= 3 && selectedRange <= 5 && !dayB) {
      switch (selectedRange) {
        case 3: {
          setDayB((0, import_dayjs2.default)().set("month", key === 0 ? key : key - 1));
          break;
        }
        case 4: {
          setDayB((0, import_dayjs2.default)().set("date", key === 0 ? 1 : key));
          break;
        }
        case 5: {
          setDayB((0, import_dayjs2.default)().set("year", key));
          break;
        }
        default:
          return;
      }
      setResetInteraction(false);
    } else {
      switch (selectedRange) {
        case 0:
        case 3: {
          if (resetInteraction) {
            if (selectedRange === 0) {
              setDayA(dayA?.set("month", key === 0 ? key : key - 1) ?? null);
              setResetInteraction(false);
            } else {
              setDayB(dayB?.set("month", key === 0 ? key : key - 1) ?? null);
              setResetInteraction(false);
            }
          } else {
            switch (selectedRange) {
              case 0: {
                if (dayA?.month() === 0 && key <= 2 && key !== 0) {
                  setDayA(
                    dayA?.set(
                      "month",
                      dayA?.month() + 10 + (key === 0 ? key : key - 1)
                    ) ?? null
                  );
                }
                break;
              }
              case 3: {
                if (key <= 2 && dayB?.month() === 0 && key !== 0) {
                  setDayB(
                    dayB?.set(
                      "month",
                      dayB?.month() + 10 + (key === 0 ? key : key - 1)
                    ) ?? null
                  );
                }
                break;
              }
            }
          }
          break;
        }
        case 1:
        case 4: {
          if (resetInteraction) {
            if (selectedRange === 1) {
              setDayA(dayA?.date(key === 0 ? 1 : key) ?? null);
              setResetInteraction(false);
            } else {
              setDayB(dayB?.date(key === 0 ? 1 : key) ?? null);
              setResetInteraction(false);
            }
          } else if (selectedRange === 1) {
            if ((dayA?.date() ?? 0) <= 2 || dayA?.date() === 3 && key <= 1) {
              setDayA(
                dayA?.set("date", (dayA?.date() ?? 0) * 10 + key) ?? null
              );
            }
          } else if ((dayB?.date() ?? 0) <= 2 || dayB?.date() === 3 && key <= 1) {
            setDayB(dayB?.set("date", (dayB?.date() ?? 0) * 10 + key) ?? null);
          }
          break;
        }
        case 2:
        case 5: {
          if (resetInteraction) {
            if (selectedRange === 2) {
              setDayA(dayA?.set("year", key) ?? null);
              setResetInteraction(false);
            } else {
              setDayB(dayB?.set("year", key) ?? null);
              setResetInteraction(false);
            }
          } else if (selectedRange === 2) {
            const currentYear = dayA?.year().toString() ?? "";
            if (currentYear.length < 4) {
              setDayA(dayA?.set("year", parseInt(currentYear + key)) ?? null);
            }
          } else {
            const currentYear = dayB?.year().toString() ?? "";
            if (currentYear.length < 4) {
              setDayB(dayB?.set("year", parseInt(currentYear + key)) ?? null);
            }
          }
        }
      }
    }
  };
  const moveToRange = (input, range) => {
    if (range === "next") {
      switch (selectedRange) {
        case 0: {
          setSelectedRange(1);
          input.setSelectionRange(3, 5);
          setResetInteraction(true);
          break;
        }
        case 1: {
          setSelectedRange(2);
          input.setSelectionRange(6, 10);
          setResetInteraction(true);
          break;
        }
        case 2: {
          setSelectedRange(3);
          input.setSelectionRange(13, 15);
          setResetInteraction(true);
          break;
        }
        case 3: {
          setSelectedRange(4);
          input.setSelectionRange(16, 18);
          setResetInteraction(true);
          break;
        }
        case 4: {
          setSelectedRange(5);
          input.setSelectionRange(19, 23);
          setResetInteraction(true);
          break;
        }
        default: {
          return;
        }
      }
    } else {
      switch (selectedRange) {
        case 5: {
          setSelectedRange(4);
          input.setSelectionRange(16, 18);
          setResetInteraction(true);
          break;
        }
        case 4: {
          setSelectedRange(3);
          input.setSelectionRange(13, 15);
          setResetInteraction(true);
          break;
        }
        case 3: {
          setSelectedRange(2);
          input.setSelectionRange(6, 10);
          setResetInteraction(true);
          break;
        }
        case 2: {
          setSelectedRange(1);
          input.setSelectionRange(3, 5);
          setResetInteraction(true);
          break;
        }
        case 1: {
          setSelectedRange(0);
          input.setSelectionRange(0, 2);
          setResetInteraction(true);
          break;
        }
        default: {
          return;
        }
      }
    }
  };
  const handleSingleInputKeyDown = (e) => {
    const inputElement = e.target;
    switch (e.key) {
      case "Tab": {
        if (e.shiftKey && inputElement.className.includes("MuiInputBase-input")) {
          if (selectedRange > 0) {
            e.preventDefault();
          } else {
            setSelectedRange(5);
          }
          moveToRange(inputElement, "previous");
        } else if (selectedRange < 5 && inputElement.className.includes("MuiInputBase-input")) {
          e.preventDefault();
          moveToRange(inputElement, "next");
        }
        break;
      }
      case "ArrowRight": {
        moveToRange(inputElement, "next");
        break;
      }
      case "ArrowLeft": {
        moveToRange(inputElement, "previous");
        break;
      }
      case "ArrowUp": {
        if (selectedRange >= 0 && selectedRange <= 2 && !dayA) {
          setDayA((0, import_dayjs2.default)());
        } else if (selectedRange >= 3 && selectedRange <= 5 && !dayB) {
          setDayB((0, import_dayjs2.default)());
        } else {
          switch (selectedRange) {
            case 0: {
              setDayA(dayA?.add(1, "month") ?? null);
              break;
            }
            case 1: {
              setDayA(dayA?.add(1, "day") ?? null);
              break;
            }
            case 2: {
              setDayA(dayA?.add(1, "year") ?? null);
              break;
            }
            case 3: {
              setDayB(dayB?.add(1, "month") ?? null);
              break;
            }
            case 4: {
              setDayB(dayB?.add(1, "day") ?? null);
              break;
            }
            case 5: {
              setDayB(dayB?.add(1, "year") ?? null);
              break;
            }
            default: {
              return;
            }
          }
        }
        setResetInteraction(false);
        break;
      }
      case "ArrowDown": {
        if (selectedRange >= 0 && selectedRange <= 2 && !dayA) {
          setDayA((0, import_dayjs2.default)());
        } else if (selectedRange >= 3 && selectedRange <= 5 && !dayB) {
          setDayB((0, import_dayjs2.default)());
        } else {
          switch (selectedRange) {
            case 0: {
              setDayA(dayA?.subtract(1, "month") ?? null);
              break;
            }
            case 1: {
              setDayA(dayA?.subtract(1, "day") ?? null);
              break;
            }
            case 2: {
              setDayA(dayA?.subtract(1, "year") ?? null);
              break;
            }
            case 3: {
              setDayB(dayB?.subtract(1, "month") ?? null);
              break;
            }
            case 4: {
              setDayB(dayB?.subtract(1, "day") ?? null);
              break;
            }
            case 5: {
              setDayB(dayB?.subtract(1, "year") ?? null);
              break;
            }
            default: {
              return;
            }
          }
        }
        setResetInteraction(false);
        break;
      }
      default: {
        if (e.key >= "0" && e.key <= "9") {
          handleNumericKey(parseInt(e.key));
        }
        break;
      }
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_jsx_runtime10.Fragment, { children: [
    variant === "regular" || variant === "conjoined" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      SeparatedInputs,
      {
        direction: "row",
        className: `${variant === "conjoined" ? "T1-range-date-picker-conjoined" : ""}`,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            StyledDateField,
            {
              label: startDateLabel,
              value: dayA,
              disabled,
              ref: dayAFieldRef,
              onChange: (val) => {
                setDayA((0, import_dayjs2.default)(val));
              },
              error: dayA && dayB && dayA.isAfter(dayB) || props.error,
              InputProps: {
                readOnly: true,
                startAdornment: variant === "conjoined" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  InputAdornment,
                  {
                    position: "end",
                    "data-testid": "T1-range-date-picker-start-date-start-adornment",
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      IconButton,
                      {
                        variant: "input",
                        shape: "circle",
                        disableRipple: true,
                        disableFocusRipple: true,
                        "data-testid": "T1-range-date-picker-start-date-start-icon",
                        onClick: () => {
                          handleInputClick(dayAFieldRef.current);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material2.CalendarToday, {})
                      }
                    )
                  }
                ) : null,
                endAdornment: variant !== "conjoined" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  InputAdornment,
                  {
                    position: "end",
                    "data-testid": "T1-range-date-picker-start-date-end-adornment",
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      IconButton,
                      {
                        variant: "input",
                        shape: "circle",
                        disableRipple: true,
                        disableFocusRipple: true,
                        "data-testid": "T1-range-date-picker-start-date-end-icon",
                        onClick: () => {
                          handleInputClick(dayAFieldRef.current);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material2.CalendarToday, {})
                      }
                    )
                  }
                ) : null
              }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            import_material2.Box,
            {
              display: "flex",
              className: "T1-range-date-picker-separator",
              alignItems: "center",
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                StyledDivider,
                {
                  orientation: variant === "conjoined" ? "vertical" : "horizontal"
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            StyledDateField,
            {
              label: variant === "conjoined" ? null : endDateLabel,
              value: dayB,
              disabled,
              ref: dayBFieldRef,
              onChange: (val) => {
                setDayB((0, import_dayjs2.default)(val));
              },
              error: dayA && dayB && dayA.isAfter(dayB) || props.error,
              InputProps: {
                readOnly: true,
                placeholder: "MM/DD/YYYY",
                endAdornment: variant !== "conjoined" ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                  InputAdornment,
                  {
                    position: "end",
                    "data-testid": "T1-range-date-picker-end-date-end-adornment",
                    children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      IconButton,
                      {
                        "data-testid": "T1-range-date-picker-end-date-end-icon",
                        variant: "input",
                        shape: "circle",
                        onClick: () => {
                          handleInputClick(dayBFieldRef.current);
                        },
                        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material2.CalendarToday, {})
                      }
                    )
                  }
                ) : null
              }
            }
          )
        ]
      }
    ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      TextField,
      {
        sx: { input: { minWidth: "235px" } },
        ref: dayAFieldRef,
        onFocus: handleSingleInputTouch,
        onClick: handleSingleInputTouch,
        label: startDateLabel,
        value: getSignleInputFieldValue(),
        onKeyDown: handleSingleInputKeyDown,
        onBlur: handleSingleInputBlur,
        error: dayA && dayB && dayA.isAfter(dayB) || props.error,
        "data-testid": "T1-range-date-picker-single-input",
        slotProps: {
          input: {
            readOnly: true,
            endAdornment: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              IconButton,
              {
                variant: "input",
                shape: "circle",
                disableRipple: true,
                disableFocusRipple: true,
                onClick: () => {
                  handleInputClick(dayAFieldRef.current);
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material2.CalendarToday, {})
              }
            ) })
          }
        }
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      StyledPopover,
      {
        open: Boolean(anchorElement),
        anchorEl: anchorElement,
        "data-testid": "T1-range-date-picker-popover",
        slotProps: {
          paper: {
            elevation: 2
          }
        },
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left"
        },
        transformOrigin: {
          vertical: "top",
          horizontal: "left"
        },
        onClose: () => {
          setAnchorElement(null);
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          DateCalendar,
          {
            showDaysOutsideCurrentMonth: true,
            enableRange: true,
            value: { start: dayA, end: dayB },
            onChange: (rangeValue) => {
              if (!rangeValue || !("start" in rangeValue)) return;
              const { start, end } = rangeValue;
              setDayA(start);
              setDayB(end);
              if (end) setAnchorElement(null);
            }
          }
        )
      }
    )
  ] });
};

// lib/date-picker/component.tsx
var import_x_date_pickers3 = require("@mui/x-date-pickers");

// lib/date-picker/utils.ts
var import_dayjs3 = __toESM(require_dayjs_min(), 1);
function isDisabledDateRange(entry) {
  return typeof entry === "object" && entry !== null && !import_dayjs3.default.isDayjs(entry) && "from" in entry && "to" in entry;
}
function isDayjs(entry) {
  return import_dayjs3.default.isDayjs(entry) && entry.isValid();
}
function matchesEntry(day, entry) {
  if (entry === "weekends") return day.day() === 0 || day.day() === 6;
  if (entry === "weekdays") return day.day() >= 1 && day.day() <= 5;
  if (isDisabledDateRange(entry))
    return !day.isBefore(entry.from, "day") && !day.isAfter(entry.to, "day");
  if (isDayjs(entry)) return day.isSame(entry, "day");
  return false;
}
function buildShouldDisableDate(entries, existing) {
  return (day) => {
    if (existing?.(day)) return true;
    return entries.some((entry) => matchesEntry(day, entry));
  };
}

// lib/date-picker/component.tsx
var import_react5 = require("react");
var import_jsx_runtime11 = require("react/jsx-runtime");
var DatePicker = ({
  slots,
  slotProps,
  format,
  disabledDates,
  shouldDisableDate,
  ...props
}) => {
  const { onError, value } = props;
  const hasInvertedRange = (0, import_react5.useMemo)(
    () => disabledDates?.some(
      (entry) => isDisabledDateRange(entry) && entry.from.isAfter(entry.to, "day")
    ) ?? false,
    [disabledDates]
  );
  const resolvedShouldDisableDate = (0, import_react5.useMemo)(
    () => disabledDates?.length ? buildShouldDisableDate(disabledDates, shouldDisableDate ?? void 0) : shouldDisableDate,
    [disabledDates, shouldDisableDate]
  );
  (0, import_react5.useEffect)(() => {
    if (hasInvertedRange) {
      onError?.("invalidDate", value ?? null);
    } else {
      onError?.(null, value ?? null);
    }
  }, [hasInvertedRange, onError, value]);
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    import_x_date_pickers3.DesktopDatePicker,
    {
      showDaysOutsideCurrentMonth: true,
      format: format ?? "MM/DD/YYYY",
      shouldDisableDate: resolvedShouldDisableDate,
      slots: {
        // @ts-ignore
        openPickerButton: IconButton,
        ...slots ?? {}
      },
      slotProps: {
        openPickerButton: {
          //@ts-ignore //This is ignored because the component doesn't accept the custom props of IconButton.
          variant: "input",
          shape: "circle"
        },
        ...slotProps ?? {},
        textField: {
          ...typeof slotProps?.textField === "function" ? void 0 : slotProps?.textField,
          error: hasInvertedRange || typeof slotProps?.textField !== "function" && !!slotProps?.textField?.error
        }
      },
      ...props
    }
  );
};
