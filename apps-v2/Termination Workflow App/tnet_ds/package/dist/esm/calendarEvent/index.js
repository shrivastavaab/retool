var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
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

// ../../node_modules/dayjs/dayjs.min.js
var require_dayjs_min = __commonJS({
  "../../node_modules/dayjs/dayjs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).dayjs = e();
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

// ../../node_modules/dayjs/plugin/isBetween.js
var require_isBetween = __commonJS({
  "../../node_modules/dayjs/plugin/isBetween.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isBetween = i();
    }(exports, function() {
      "use strict";
      return function(e, i, t) {
        i.prototype.isBetween = function(e2, i2, s, f) {
          var n = t(e2), o = t(i2), r = "(" === (f = f || "()")[0], u = ")" === f[1];
          return (r ? this.isAfter(n, s) : !this.isBefore(n, s)) && (u ? this.isBefore(o, s) : !this.isAfter(o, s)) || (r ? this.isBefore(n, s) : !this.isAfter(n, s)) && (u ? this.isAfter(o, s) : !this.isBefore(o, s));
        };
      };
    });
  }
});

// ../../node_modules/dayjs/plugin/isSameOrAfter.js
var require_isSameOrAfter = __commonJS({
  "../../node_modules/dayjs/plugin/isSameOrAfter.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrAfter = t();
    }(exports, function() {
      "use strict";
      return function(e, t) {
        t.prototype.isSameOrAfter = function(e2, t2) {
          return this.isSame(e2, t2) || this.isAfter(e2, t2);
        };
      };
    });
  }
});

// ../../node_modules/dayjs/plugin/isSameOrBefore.js
var require_isSameOrBefore = __commonJS({
  "../../node_modules/dayjs/plugin/isSameOrBefore.js"(exports, module) {
    !function(e, i) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = i() : "function" == typeof define && define.amd ? define(i) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_plugin_isSameOrBefore = i();
    }(exports, function() {
      "use strict";
      return function(e, i) {
        i.prototype.isSameOrBefore = function(e2, i2) {
          return this.isSame(e2, i2) || this.isBefore(e2, i2);
        };
      };
    });
  }
});

// lib/calendarEvent/component.tsx
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_isBetween = __toESM(require_isBetween(), 1);
var import_isSameOrAfter = __toESM(require_isSameOrAfter(), 1);
var import_isSameOrBefore = __toESM(require_isSameOrBefore(), 1);
import {
  DateCalendar as MuiDateCalendar,
  PickersDay,
  yearCalendarClasses
} from "@mui/x-date-pickers";
import { styled, useTheme } from "@mui/material";
import { jsx, jsxs } from "react/jsx-runtime";
import_dayjs.default.extend(import_isBetween.default);
import_dayjs.default.extend(import_isSameOrAfter.default);
import_dayjs.default.extend(import_isSameOrBefore.default);
var setCurrentYear = (view) => {
  if (view === "year") {
    const currentYear = (0, import_dayjs.default)().year();
    setTimeout(() => {
      const buttons = document.querySelectorAll(".MuiYearCalendar-button");
      buttons.forEach((button) => {
        if (button.textContent?.trim() === `${currentYear}`) {
          button.classList.add("MuiPickersYear-currentYear");
        }
      });
    }, 0);
  }
};
var calculateEndDate = (startDate, selectionRange) => {
  switch (selectionRange) {
    case "weekly":
      return startDate.add(6, "day");
    case "biweekly":
      return startDate.add(13, "day");
    case "bimonthly":
      return startDate.add(14, "day");
    case "monthly":
      return startDate.endOf("month");
    default:
      return startDate;
  }
};
var StyledPickersDay = styled(PickersDay)(({ theme }) => {
  return {
    fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
    fontSize: theme.typography.paragraph.sm.medium.fontSize,
    width: "calc(100% / 7)",
    height: "40px",
    margin: 0,
    color: theme.palette.calendar.selectionButton.text.default,
    border: "none",
    flex: "0 0 calc(100% / 7)",
    "&.Mui-focusVisible": {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background,
      outline: `1px dashed ${theme.palette.outline}`
    },
    "&:hover": {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background
    },
    "&.MuiPickersDay-today:not(.Mui-selected):not(.in-range)": {
      border: "none",
      backgroundColor: theme.palette.calendar.selectionButton.background.current,
      color: theme.palette.calendar.selectionButton.text.current
    },
    "&.MuiPickersDay-dayOutsideMonth": {
      color: theme.palette.calendarEvent.dayOutsideMonth
    },
    // Inactive week styling - days in the same week but outside the range
    "&.inactive-week": {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background,
      color: theme.palette.calendar.selectionButton.text.default,
      borderRadius: 0,
      marginTop: "3px",
      marginBottom: "3px",
      "&:hover": {
        backgroundColor: theme.palette.calendarEvent.range.inactive.background
      },
      "&.MuiPickersDay-dayOutsideMonth": {
        color: theme.palette.calendarEvent.dayOutsideMonth
      }
    },
    // Week start for inactive week
    "&.inactive-week-start": {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background,
      borderRadius: "50% 0 0 50%",
      color: theme.palette.calendar.selectionButton.text.default,
      marginTop: "3px",
      marginBottom: "3px",
      "&:hover": {
        backgroundColor: theme.palette.calendarEvent.range.inactive.background
      },
      "&.MuiPickersDay-dayOutsideMonth": {
        color: theme.palette.calendarEvent.dayOutsideMonth
      }
    },
    // Week end for inactive week
    "&.inactive-week-end": {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background,
      borderRadius: "0 50% 50% 0",
      color: theme.palette.calendar.selectionButton.text.default,
      marginTop: "3px",
      marginBottom: "3px",
      marginRight: "3px",
      "&:hover": {
        backgroundColor: theme.palette.calendarEvent.range.inactive.background
      },
      "&.MuiPickersDay-dayOutsideMonth": {
        color: theme.palette.calendarEvent.dayOutsideMonth
      }
    },
    // Range styling - active range with specific color
    "&.in-range": {
      backgroundColor: theme.palette.calendarEvent.range.active.background,
      color: theme.palette.calendarEvent.range.active.text,
      borderRadius: 0,
      "&:hover": {
        backgroundColor: theme.palette.calendarEvent.range.active.background
      },
      "&.MuiPickersDay-dayOutsideMonth": {
        color: theme.palette.calendarEvent.dayOutsideMonth
      }
    },
    // Start date - rounded left corners
    "&.range-start": {
      backgroundColor: theme.palette.calendarEvent.range.active.background,
      borderRadius: "50% 0 0 50%",
      color: theme.palette.calendarEvent.range.active.text,
      fontWeight: theme.typography.fontWeightBold,
      "&:hover": {
        backgroundColor: theme.palette.calendarEvent.range.active.background
      },
      "&.MuiPickersDay-dayOutsideMonth": {
        color: theme.palette.calendarEvent.dayOutsideMonth
      }
    },
    // End date - rounded right corners
    "&.range-end": {
      backgroundColor: theme.palette.calendarEvent.range.active.background,
      borderRadius: "0 50% 50% 0",
      color: theme.palette.calendarEvent.range.active.text,
      fontWeight: theme.typography.fontWeightBold,
      marginRight: "3px",
      "&:hover": {
        backgroundColor: theme.palette.calendarEvent.range.active.background
      },
      "&.MuiPickersDay-dayOutsideMonth": {
        color: theme.palette.calendarEvent.dayOutsideMonth
      }
    },
    // Single day range (start and end are same day)
    "&.range-start.range-end": {
      borderRadius: "50%",
      backgroundColor: theme.palette.calendarEvent.range.active.background
    }
  };
});
var StyledCalendar = styled(MuiDateCalendar)(({ theme }) => ({
  height: "auto",
  backgroundColor: theme.palette.calendarEvent.background,
  margin: 0,
  borderRadius: "12px",
  border: `1px solid ${theme.palette.calendarEvent.border}`,
  minHeight: "350px",
  ".MuiDayCalendar-slideTransition": {
    minHeight: "320px",
    overflow: "hidden"
  },
  ".MuiDayCalendar-monthContainer": {
    padding: theme.spacing(3, 0),
    position: "relative",
    width: "100%",
    height: "320px",
    "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit": {
      position: "absolute",
      width: "100%"
    }
  },
  ".MuiDayCalendar-header": {
    width: "100%",
    borderTop: `1px solid ${theme.palette.calendar.weekBorder}`,
    borderBottom: `1px solid ${theme.palette.calendar.weekBorder}`,
    ".MuiDayCalendar-weekDayLabel": {
      color: theme.palette.calendar.typographySecondary,
      fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
      fontSize: theme.typography.paragraph.sm.medium.fontSize,
      width: "calc(100% / 7)",
      height: "40px",
      margin: 0,
      flex: "0 0 calc(100% / 7)"
    }
  },
  ".MuiPickersCalendarHeader-root": {
    padding: "16px 12px 8px 24px",
    margin: 0,
    ".MuiButtonBase-root": {
      "&.Mui-focusVisible": {
        outline: `1px dashed ${theme.palette.outline}`
      }
    },
    ".MuiPickersCalendarHeader-labelContainer": {
      pointerEvents: "none",
      ".MuiPickersCalendarHeader-label": {
        color: theme.palette.calendar.typography,
        fontFamily: theme.typography.paragraph.md.bold.fontFamily,
        fontSize: theme.typography.paragraph.md.bold.fontSize,
        fontWeight: theme.typography.fontWeightBold
      },
      ".MuiPickersCalendarHeader-switchViewButton": {
        display: "none"
      }
    },
    ".MuiPickersArrowSwitcher-root": {
      ".MuiPickersArrowSwitcher-spacer": {
        display: "none"
      },
      ".MuiPickersArrowSwitcher-button": {
        margin: 0,
        color: theme.palette.calendar.typographyButtons,
        ".MuiTouchRipple-root": {
          display: "none"
        }
      }
    }
  },
  ".MuiDayCalendar-weekContainer": {
    margin: 0,
    width: "100%",
    justifyContent: "space-between",
    minHeight: "46px"
  },
  [`.${yearCalendarClasses.button}`]: {
    fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
    fontSize: theme.typography.paragraph.sm.medium.fontSize,
    margin: theme.spacing(0.5, 0),
    color: theme.palette.calendar.selectionButton.text.default,
    '&[tabindex="0"]:not(.Mui-selected)': {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background,
      outline: `1px dashed ${theme.palette.outline}`
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.calendar.selectionButton.background.selected,
      color: theme.palette.calendar.selectionButton.text.selected,
      '&[tabindex="0"]': {
        outline: `1px dashed ${theme.palette.outline}`
      }
    },
    "&:hover": {
      backgroundColor: theme.palette.calendarEvent.range.inactive.background,
      color: theme.palette.calendar.selectionButton.text.default
    },
    "&.MuiPickersYear-currentYear:not(.Mui-selected)": {
      backgroundColor: theme.palette.calendar.selectionButton.background.current,
      color: theme.palette.calendar.selectionButton.text.current
    }
  }
}));
var getInactiveWeekClasses = (day, inactivePeriodStart, inactivePeriodEnd) => {
  const isInactiveStart = day.isSame(inactivePeriodStart, "day");
  const isInactiveEnd = day.isSame(inactivePeriodEnd, "day");
  if (isInactiveStart) return "inactive-week-start";
  if (isInactiveEnd) return "inactive-week-end";
  return "inactive-week";
};
var CustomDay = (props) => {
  const { day, startDate, endDate, selectedDays = [], ...other } = props;
  const theme = useTheme();
  const isInRange = day.isBetween(startDate, endDate, "day", "[]");
  const isStart = day.isSame(startDate, "day");
  const isEnd = day.isSame(endDate, "day");
  const activeDuration = endDate.diff(startDate, "day") + 1;
  let isInInactiveWeek = false;
  let inactivePeriodStart = null;
  let inactivePeriodEnd = null;
  if (!isInRange) {
    if (day.isBefore(startDate, "day")) {
      const daysSinceStart = startDate.diff(day, "day");
      const periodIndex = Math.ceil(daysSinceStart / activeDuration);
      inactivePeriodEnd = startDate.subtract(
        (periodIndex - 1) * activeDuration + 1,
        "day"
      );
      inactivePeriodStart = inactivePeriodEnd.subtract(
        activeDuration - 1,
        "day"
      );
      isInInactiveWeek = day.isBetween(
        inactivePeriodStart,
        inactivePeriodEnd,
        "day",
        "[]"
      );
    } else if (day.isAfter(endDate, "day")) {
      const daysSinceEnd = day.diff(endDate, "day");
      const periodIndex = Math.ceil(daysSinceEnd / activeDuration);
      inactivePeriodStart = endDate.add(
        (periodIndex - 1) * activeDuration + 1,
        "day"
      );
      inactivePeriodEnd = inactivePeriodStart.add(activeDuration - 1, "day");
      isInInactiveWeek = day.isBetween(
        inactivePeriodStart,
        inactivePeriodEnd,
        "day",
        "[]"
      );
    }
  }
  const classNames = [];
  if (isInRange) classNames.push("in-range");
  if (isStart) classNames.push("range-start");
  if (isEnd) classNames.push("range-end");
  if (isInInactiveWeek && inactivePeriodStart && inactivePeriodEnd) {
    const inactiveClass = getInactiveWeekClasses(
      day,
      inactivePeriodStart,
      inactivePeriodEnd
    );
    classNames.push(inactiveClass);
  }
  const dayEvents = selectedDays.find((selectedDay) => {
    const selectedDayjs = (0, import_dayjs.default)(selectedDay.date);
    return selectedDayjs.isSame(day, "day");
  });
  const hasHoliday = dayEvents?.events.some((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType === "holiday";
  });
  const hasPayDate = dayEvents?.events.some((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType === "pay-date";
  });
  const hasChangesDue = dayEvents?.events.some((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType === "changes-due";
  });
  const hasApproveByDate = dayEvents?.events.some((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType === "approve-by-date";
  });
  const hasNoBenefitsDeduction = dayEvents?.events.some((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType === "no-benefits-deduction";
  });
  const hasPayPeriodEndDate = dayEvents?.events.some((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType === "pay-period-end-date";
  });
  const isApproveByDateWithPayPeriodEndDatePayDateAndNoBenefits = hasApproveByDate && hasPayPeriodEndDate && hasPayDate && hasNoBenefitsDeduction;
  const isChangesDueWithPayPeriodEndDatePayDateAndNoBenefits = hasChangesDue && hasPayPeriodEndDate && hasPayDate && hasNoBenefitsDeduction;
  const isPayPeriodEndDateWithPayDateAndNoBenefits = hasPayPeriodEndDate && hasPayDate && hasNoBenefitsDeduction;
  const isApproveByDateWithPayPeriodEndDateAndPayDate = hasApproveByDate && hasPayPeriodEndDate && hasPayDate;
  const isChangesDueWithPayPeriodEndDateAndPayDate = hasChangesDue && hasPayPeriodEndDate && hasPayDate && (hasNoBenefitsDeduction || hasApproveByDate);
  const isHolidayWithPayDate = hasHoliday && hasPayDate;
  const isHolidayWithPayDateAndNoBenefits = hasHoliday && hasPayDate && hasNoBenefitsDeduction;
  const isChangesDueWithApproveByDate = hasChangesDue && hasApproveByDate;
  const isPayDateWithPayPeriodEndDate = hasPayDate && hasPayPeriodEndDate && isInInactiveWeek && !isPayPeriodEndDateWithPayDateAndNoBenefits && !isChangesDueWithPayPeriodEndDateAndPayDate;
  const isPayPeriodEndDateWithPayDateAndChangesDue = hasPayPeriodEndDate && hasPayDate && hasChangesDue && !hasNoBenefitsDeduction && !hasApproveByDate;
  const isChangesDueWithApproveByDateHasPayDate = hasChangesDue && hasApproveByDate && hasPayDate;
  const regularEvents = dayEvents?.events.filter((event) => {
    const eventType = typeof event === "string" ? event : event.type;
    return eventType !== "holiday" && eventType !== "pay-date" && eventType !== "changes-due" && eventType !== "approve-by-date" && eventType !== "no-benefits-deduction" && eventType !== "pay-period-end-date";
  });
  return /* @__PURE__ */ jsxs(
    StyledPickersDay,
    {
      ...other,
      day,
      className: classNames.join(" "),
      disableMargin: true,
      disableHighlightToday: isInRange,
      style: {
        ...(hasHoliday || hasPayDate || hasChangesDue || hasApproveByDate || hasPayPeriodEndDate) && {
          position: "relative"
        }
      },
      children: [
        (() => {
          if (isPayDateWithPayPeriodEndDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-period-end-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["pay-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                },
                children: day.format("D")
              }
            );
          }
          if (isChangesDueWithApproveByDate && !isChangesDueWithApproveByDateHasPayDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["approve-by-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["approve-by-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                },
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: theme.palette.calendarEvent.events["changes-due"].background,
                      border: `1px solid ${theme.palette.calendarEvent.events["changes-due"].border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 500
                    },
                    children: day.format("D")
                  }
                )
              }
            );
          }
          if (isHolidayWithPayDateAndNoBenefits) {
            return /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["pay-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events.holiday.background,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: theme.palette.calendarEvent.events.holiday.text,
                        fontSize: "12px",
                        fontWeight: 500
                      },
                      children: day.format("D")
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        bottom: "2px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["no-benefits-deduction"].dot
                      }
                    }
                  )
                ]
              }
            );
          }
          if (isHolidayWithPayDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["pay-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative"
                },
                children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    style: {
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      backgroundColor: theme.palette.calendarEvent.events.holiday.background,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: theme.palette.calendarEvent.events.holiday.text,
                      fontSize: "12px",
                      fontWeight: 500
                    },
                    children: day.format("D")
                  }
                )
              }
            );
          }
          if (hasHoliday) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events.holiday.background,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.palette.calendarEvent.events.holiday.text,
                  fontSize: "12px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          if (isApproveByDateWithPayPeriodEndDatePayDateAndNoBenefits) {
            return /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                        border: `2px solid ${theme.palette.calendarEvent.events["approve-by-date"].border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 500
                      },
                      children: day.format("D")
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        bottom: "6px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["no-benefits-deduction"].dot
                      }
                    }
                  )
                ]
              }
            );
          }
          if (isChangesDueWithPayPeriodEndDatePayDateAndNoBenefits) {
            return /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                        border: `2px solid ${theme.palette.calendarEvent.events["changes-due"].border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 500
                      },
                      children: day.format("D")
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        bottom: "6px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["no-benefits-deduction"].dot
                      }
                    }
                  )
                ]
              }
            );
          }
          if (isPayPeriodEndDateWithPayDateAndNoBenefits) {
            return /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                        border: `2px solid ${theme.palette.calendarEvent.events["pay-date"].border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 500
                      },
                      children: day.format("D")
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        bottom: "6px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["no-benefits-deduction"].dot
                      }
                    }
                  )
                ]
              }
            );
          }
          if (isApproveByDateWithPayPeriodEndDateAndPayDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["approve-by-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          if (isChangesDueWithPayPeriodEndDateAndPayDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["changes-due"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          if (isPayPeriodEndDateWithPayDateAndChangesDue) {
            const bgColor = theme.palette.mode === "dark" ? "#75443f99" : "#ff806440";
            const outlineColor = theme.palette.mode === "dark" ? theme.palette.calendarEvent.events["pay-date"].border : "#0091C8";
            const borderColor = theme.palette.mode === "dark" ? theme.palette.calendarEvent.events["changes-due"].border : "#F4C006";
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "60px",
                  height: "60px",
                  borderRadius: "50%",
                  backgroundColor: bgColor,
                  outline: `2px solid ${outlineColor}`,
                  border: `2px solid ${borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: theme.palette.calendarEvent.events["changes-due"].text
                },
                children: day.format("D")
              }
            );
          }
          if (hasPayDate || isChangesDueWithApproveByDateHasPayDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["pay-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          if (hasChangesDue) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["changes-due"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["changes-due"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          if (hasApproveByDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["approve-by-date"].background,
                  border: `2px solid ${theme.palette.calendarEvent.events["approve-by-date"].border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.palette.calendarEvent.events["approve-by-date"].text,
                  fontSize: "14px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          if (hasNoBenefitsDeduction) {
            return /* @__PURE__ */ jsxs(
              "div",
              {
                style: {
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["no-benefits-deduction"].background,
                        border: `2px solid ${theme.palette.calendarEvent.events["no-benefits-deduction"].border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        fontWeight: 500
                      },
                      children: day.format("D")
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      style: {
                        position: "absolute",
                        bottom: "6px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: theme.palette.calendarEvent.events["no-benefits-deduction"].dot
                      }
                    }
                  )
                ]
              }
            );
          }
          if (hasPayPeriodEndDate) {
            return /* @__PURE__ */ jsx(
              "div",
              {
                style: {
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  backgroundColor: theme.palette.calendarEvent.events["pay-period-end-date"].background,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  fontWeight: 500
                },
                children: day.format("D")
              }
            );
          }
          return day.format("D");
        })(),
        regularEvents && regularEvents.length > 0 && /* @__PURE__ */ jsx("div", { style: { display: "flex", gap: "2px", marginTop: "2px" }, children: regularEvents.map((event, index) => {
          const eventType = typeof event === "string" ? event : event.type;
          const key = typeof event === "string" ? `${eventType}-${index}` : `${event.type}-${event.label}-${index}`;
          return /* @__PURE__ */ jsx(
            "div",
            {
              style: {
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: getEventColor(eventType, theme.palette)
              },
              title: typeof event === "object" ? event.label : eventType
            },
            key
          );
        }) })
      ]
    }
  );
};
var getEventColor = (eventType, themePalette) => {
  const eventColors = themePalette?.calendarEvent?.events;
  switch (eventType) {
    case "pay-period":
      return eventColors?.["pay-period"]?.background || "#FF8064";
    case "pay-period-end-date":
      return eventColors?.["pay-period-end-date"]?.background || "#75443F";
    case "pay-date":
      return eventColors?.["pay-date"]?.border || "#00A3E0";
    case "changes-due":
      return eventColors?.["changes-due"]?.border || "#FFA500";
    case "approve-by-date":
      return eventColors?.["approve-by-date"]?.border || "#9C27B0";
    case "no-benefits-deduction":
      return eventColors?.["no-benefits-deduction"]?.dot || "#4CAF50";
    case "holiday":
      return eventColors?.holiday?.background || "#F44336";
    default:
      return "#757575";
  }
};
var T1CalendarEvent = ({
  startDate,
  endDate,
  selectionRange,
  selectedDays = [],
  onMonthChange,
  onYearChange
}) => {
  return /* @__PURE__ */ jsx(
    StyledCalendar,
    {
      value: startDate,
      readOnly: true,
      showDaysOutsideCurrentMonth: true,
      fixedWeekNumber: 6,
      onMonthChange,
      onYearChange,
      onViewChange: (view) => {
        setCurrentYear(view);
      },
      slots: {
        day: CustomDay
      },
      slotProps: {
        day: {
          startDate,
          endDate,
          selectionRange,
          selectedDays
        }
      }
    }
  );
};

// lib/calendarEvent/CalendarLegend.tsx
import { useMemo } from "react";
import { Box as Box2, styled as styled3 } from "@mui/material";

// lib/layout/index.ts
import { Box, Stack, Grid2 } from "@mui/material";

// lib/utils/components.tsx
import { jsx as jsx2 } from "react/jsx-runtime";

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
import { Typography as MuiTypography } from "@mui/material";
import { styled as styled2 } from "@mui/material/styles";
import { forwardRef } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
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
var Typography = forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ jsx3(
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
var StyledTypography = styled2(MuiTypography)(({
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

// lib/calendarEvent/CalendarLegend.tsx
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
var EVENT_LABELS = {
  "pay-period": "Pay Period",
  "pay-period-end-date": "Pay Period End Date",
  "pay-date": "Pay Date",
  "changes-due": "Changes Due",
  "approve-by-date": "Approve By Date",
  "no-benefits-deduction": "No Benefits Deduction",
  holiday: "Holiday"
};
var ALL_LEGEND_ITEMS = [
  "pay-period",
  "pay-period-end-date",
  "pay-date",
  "changes-due",
  "approve-by-date",
  "no-benefits-deduction",
  "holiday"
];
var LegendContainer = styled3(Box2)(({ theme }) => ({
  width: "320px",
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(3),
  alignItems: "center"
}));
var LegendItem = styled3(Box2)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1)
}));
var LegendDot = styled3("div")(({
  theme,
  $eventType
}) => {
  const eventColors = theme.palette.calendarEvent?.events;
  let backgroundColor = "#757575";
  let border = "none";
  switch ($eventType) {
    case "pay-period":
      backgroundColor = theme.palette.calendarEvent?.range.active.background;
      break;
    case "pay-period-end-date":
      backgroundColor = eventColors?.["pay-period-end-date"]?.background;
      break;
    case "pay-date":
      backgroundColor = eventColors?.["pay-date"]?.background;
      border = `2px solid ${eventColors?.["pay-date"]?.border}`;
      break;
    case "changes-due":
      backgroundColor = eventColors?.["changes-due"]?.background;
      border = `2px solid ${eventColors?.["changes-due"]?.border}`;
      break;
    case "approve-by-date":
      backgroundColor = eventColors?.["approve-by-date"]?.background;
      border = `2px solid ${eventColors?.["approve-by-date"]?.border}`;
      break;
    case "no-benefits-deduction":
      backgroundColor = eventColors?.["no-benefits-deduction"]?.background;
      break;
    case "holiday":
      backgroundColor = eventColors?.holiday?.background || "#DB0661";
      break;
  }
  const hasCenterDot = $eventType === "no-benefits-deduction" || $eventType === "pay-period";
  const dotColor = $eventType === "pay-period" ? theme.palette.calendarEvent?.range.active.text : eventColors?.["no-benefits-deduction"]?.dot;
  return {
    width: "13px",
    height: "13px",
    borderRadius: "50%",
    backgroundColor,
    flexShrink: 0,
    border,
    boxSizing: "border-box",
    position: hasCenterDot ? "relative" : void 0,
    "&::after": hasCenterDot ? {
      content: '""',
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "6px",
      height: "6px",
      borderRadius: "50%",
      backgroundColor: dotColor
    } : void 0
  };
});
var CalendarLegend = ({
  selectedDays = []
}) => {
  const displayedEventTypes = useMemo(() => {
    const eventTypesSet = /* @__PURE__ */ new Set();
    eventTypesSet.add("pay-period");
    selectedDays.forEach((selectedDay) => {
      selectedDay.events.forEach((event) => {
        const eventType = typeof event === "string" ? event : event.type;
        eventTypesSet.add(eventType);
      });
    });
    return ALL_LEGEND_ITEMS.filter((eventType) => eventTypesSet.has(eventType));
  }, [selectedDays]);
  if (displayedEventTypes.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx4(LegendContainer, { children: displayedEventTypes.map((eventType) => /* @__PURE__ */ jsxs2(LegendItem, { children: [
    /* @__PURE__ */ jsx4(LegendDot, { $eventType: eventType }),
    /* @__PURE__ */ jsx4(Typography, { variant: "paragraphSm", component: "span", children: EVENT_LABELS[eventType] })
  ] }, eventType)) });
};
export {
  CalendarLegend,
  T1CalendarEvent,
  calculateEndDate
};
