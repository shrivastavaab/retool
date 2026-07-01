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

// ../../node_modules/dayjs/plugin/relativeTime.js
var require_relativeTime = __commonJS({
  "../../node_modules/dayjs/plugin/relativeTime.js"(exports, module2) {
    !function(r, e) {
      "object" == typeof exports && "undefined" != typeof module2 ? module2.exports = e() : "function" == typeof define && define.amd ? define(e) : (r = "undefined" != typeof globalThis ? globalThis : r || self).dayjs_plugin_relativeTime = e();
    }(exports, function() {
      "use strict";
      return function(r, e, t) {
        r = r || {};
        var n = e.prototype, o = { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" };
        function i(r2, e2, t2, o2) {
          return n.fromToBase(r2, e2, t2, o2);
        }
        t.en.relativeTime = o, n.fromToBase = function(e2, n2, i2, d2, u) {
          for (var f, a, s, l = i2.$locale().relativeTime || o, h = r.thresholds || [{ l: "s", r: 44, d: "second" }, { l: "m", r: 89 }, { l: "mm", r: 44, d: "minute" }, { l: "h", r: 89 }, { l: "hh", r: 21, d: "hour" }, { l: "d", r: 35 }, { l: "dd", r: 25, d: "day" }, { l: "M", r: 45 }, { l: "MM", r: 10, d: "month" }, { l: "y", r: 17 }, { l: "yy", d: "year" }], m = h.length, c = 0; c < m; c += 1) {
            var y = h[c];
            y.d && (f = d2 ? t(e2).diff(i2, y.d, true) : i2.diff(e2, y.d, true));
            var p = (r.rounding || Math.round)(Math.abs(f));
            if (s = f > 0, p <= y.r || !y.r) {
              p <= 1 && c > 0 && (y = h[c - 1]);
              var v = l[y.l];
              u && (p = u("" + p)), a = "string" == typeof v ? v.replace("%d", p) : v(p, n2, y.l, s);
              break;
            }
          }
          if (n2) return a;
          var M = s ? l.future : l.past;
          return "function" == typeof M ? M(a) : M.replace("%s", a);
        }, n.to = function(r2, e2) {
          return i(r2, e2, this, true);
        }, n.from = function(r2, e2) {
          return i(r2, e2, this);
        };
        var d = function(r2) {
          return r2.$u ? t.utc() : t();
        };
        n.toNow = function(r2) {
          return this.to(d(this), r2);
        }, n.fromNow = function(r2) {
          return this.from(d(this), r2);
        };
      };
    });
  }
});

// lib/navigation/index.ts
var navigation_exports = {};
__export(navigation_exports, {
  CompanySelector: () => CompanySelector,
  NotificationBell: () => NotificationBell,
  Profile: () => Profile,
  companySelectorTheme: () => companySelectorTheme,
  navigationProfileTheme: () => navigationProfileTheme
});
module.exports = __toCommonJS(navigation_exports);

// lib/layout/index.ts
var import_material = require("@mui/material");

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
var import_material2 = require("@mui/material");
var import_styles = require("@mui/material/styles");
var import_react = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
var Typography = (0, import_react.forwardRef)(
  (props, ref) => {
    const propsWithDefault = {
      weight: "regular",
      variant: "paragraphMd",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
var StyledTypography = (0, import_styles.styled)(import_material2.Typography)(({
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

// lib/avatar/component.tsx
var import_material4 = require("@mui/material");

// lib/badge/component.tsx
var import_material3 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Badge = ({
  badgeContent,
  variant = "standard",
  slotProps,
  ...rest
}) => {
  const getBadgeContent = (variant2) => {
    switch (variant2) {
      case "add":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_icons_material.Add, {});
      case "info":
        return "i";
      case "remove":
        return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_icons_material.Remove, {});
      default:
        return badgeContent;
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_material3.Badge,
    {
      anchorOrigin: {
        vertical: "top",
        horizontal: "right"
      },
      variant,
      badgeContent: getBadgeContent(variant),
      "aria-label": `badge ${variant}`,
      tabIndex: 0,
      ...rest,
      slotProps: {
        badge: {
          className: `T1-badge-${variant}`,
          ...slotProps?.badge
        },
        ...omitCustomProps(slotProps, ["badge"])
      }
    }
  );
};

// lib/avatar/component.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var Avatar = ({
  size = "medium",
  color = "orange",
  badge,
  ...props
}) => {
  return badge ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Badge,
    {
      badgeContent: badge.content,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "right"
      },
      ...omitCustomProps(badge.props, ["anchorOrigin"]),
      children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_material4.Avatar,
        {
          "data-testid": "avatar-badge",
          className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
          ...omitCustomProps(props, ["className"]),
          variant: "circular"
        }
      )
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_material4.Avatar,
    {
      "data-testid": "avatar-without-badge",
      className: `${props.className ?? ""} T1-avatar-${size} T1-avatar-${color}`,
      ...omitCustomProps(props, ["className"])
    }
  );
};

// lib/navigation/profile.tsx
var import_styles2 = require("@mui/material/styles");
var import_jsx_runtime5 = require("react/jsx-runtime");
var ProfileContainer = (0, import_styles2.styled)(import_material.Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "6px",
  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
  boxSizing: "border-box"
}));
var ProfileHeader = (0, import_styles2.styled)(import_material.Box)(({ theme }) => ({
  display: "flex",
  padding: "24px",
  alignItems: "flex-start",
  gap: "12px",
  backgroundColor: theme.palette.navigationProfile.background,
  width: "100%",
  boxSizing: "border-box"
}));
var ProfileItem = (0, import_styles2.styled)(import_material.Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "12px",
  gap: "12px",
  borderBottom: `1px solid ${theme.palette.navigationProfile.item.border}`,
  background: theme.palette.navigationProfile.item.background,
  boxSizing: "border-box",
  cursor: "pointer",
  "&:hover": {
    background: theme.palette.navigationProfile.item.hover
  },
  "&:focus, &:focus-visible": {
    border: `1px dashed ${theme.palette.navigationProfile.item.focus}`,
    borderRadius: "2px",
    outline: "none"
  },
  svg: {
    fontSize: "18px",
    color: theme.palette.typography.color
  }
}));
var getInitials = (text) => {
  const words = text.trim().split(/\s+/);
  const initials = words.slice(0, 2).map((word) => word.slice(0, 1).toUpperCase());
  return initials.join("");
};
var Profile = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ProfileContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(ProfileHeader, { children: [
      props.workerName && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Avatar, { children: getInitials(props.workerName) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_material.Stack, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Typography, { variant: "paragraphMd", weight: "medium", display: "block", children: props.workerName }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Typography, { variant: "paragraphSm", weight: "regular", display: "block", children: [
          props.workerId,
          " \u2022 ",
          props.workerPosition
        ] })
      ] })
    ] }),
    props.items.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      ProfileItem,
      {
        onClick: () => item.action(),
        tabIndex: 0,
        children: [
          item.icon,
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Typography, { variant: "paragraphSm", weight: "regular", display: "block", children: item.label })
        ]
      },
      index + item.label
    ))
  ] });
};

// lib/navigation/companySelector.tsx
var import_react6 = require("react");

// lib/buttons/component.tsx
var import_react5 = __toESM(require("react"), 1);
var import_material13 = require("@mui/material");
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);
var import_styles7 = require("@mui/material/styles");

// lib/buttons/theme.ts
var import_styles3 = require("@mui/material/styles");
var import_material5 = require("@mui/material");
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
var StyledChipButton = (0, import_styles3.styled)(import_material5.Button)(({
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
var StyledToggleIconButton = (0, import_styles3.styled)(import_material5.Button)(({ theme, buttontype = "center", selected = false }) => {
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
var StyledSimpleIconButton = (0, import_styles3.styled)(import_material5.IconButton)(({ theme, variant, selected }) => ({
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
var StyledButtonArrangement = (0, import_styles3.styled)(import_material.Stack)(({
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
var import_material6 = require("@mui/material");

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
var StyledCircularProgressWrapper = (0, import_material6.styled)(
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
var StyledStepperCircularProgressWrapper = (0, import_material6.styled)("div")(({
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
var import_material7 = require("@mui/material");
var import_jsx_runtime6 = require("react/jsx-runtime");
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_material7.CircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};

// lib/buttons/component.tsx
var import_icons_material3 = require("@mui/icons-material");

// lib/menu/component.tsx
var import_react3 = __toESM(require("react"), 1);
var import_material9 = require("@mui/material");

// lib/cms/component.tsx
var import_react2 = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime7 = require("react/jsx-runtime");
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
var import_styles4 = require("@mui/material/styles");
var import_material8 = require("@mui/material");
var import_jsx_runtime8 = require("react/jsx-runtime");
var StyledMenuItem = (0, import_styles4.styled)(import_material8.MenuItem)(({ theme }) => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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
var import_styles5 = require("@mui/material/styles");
var import_jsx_runtime9 = require("react/jsx-runtime");
var StyledMenu = (0, import_styles5.styled)(import_material9.Menu)(() => ({
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
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/checkbox/theme.ts
var import_material11 = require("@mui/material");

// lib/form-helper-text/component.tsx
var import_material10 = require("@mui/material");
var import_icons_material2 = require("@mui/icons-material");
var import_jsx_runtime10 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_material10.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons_material2.WarningAmberOutlined, {}),
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
var StyledCheckboxHelperText = (0, import_material11.styled)(FormHelperText)(({
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
var import_material12 = require("@mui/material");
var import_styles6 = require("@mui/material/styles");
var import_SvgIcon = __toESM(require("@mui/material/SvgIcon"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");

// lib/buttons/component.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_material13.Button,
    {
      disabled: disabled || loading,
      size,
      ...props,
      disableRipple: true,
      className: `T1-button ${className}`,
      children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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

// lib/navigation/companySelector.tsx
var import_styles8 = require("@mui/material/styles");
var import_CheckCircle = __toESM(require("@mui/icons-material/CheckCircle"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var CompaniesWrapper = (0, import_styles8.styled)(import_material.Stack)(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "500px",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: theme.spacing(1.5),
  boxShadow: theme.shadows[2]
}));
var Company = (0, import_styles8.styled)(import_material.Stack)(({ theme, disabled }) => ({
  width: "360px",
  height: "44px",
  padding: theme.spacing(3),
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "12px",
  svg: {
    color: theme.palette.companySelector.item.icon
  },
  borderBottom: `1px solid ${theme.palette.companySelector.item.border}`,
  backgroundColor: theme.palette.companySelector.item.background,
  "&:hover": {
    backgroundColor: theme.palette.companySelector.item.hover
  },
  "&.disabled": {
    backgroundColor: theme.palette.companySelector.item.background,
    ".MuiTypography-root": {
      color: theme.palette.companySelector.item.disabled
    }
  },
  cursor: disabled ? "auto" : "pointer"
}));
var CompanySelector = ({
  companies,
  selectedIndex = 0,
  byDefault = 0,
  onSelect,
  onDefaultChange
}) => {
  const [selected, setSelected] = (0, import_react6.useState)(selectedIndex);
  const [defaultIndex, setDefaultIndex] = (0, import_react6.useState)(byDefault);
  const handleSelect = (index, disabled) => {
    setSelected(index);
    if (onSelect && !disabled) {
      onSelect(index);
    }
  };
  const handleDefault = (index) => {
    setDefaultIndex(index);
    if (onDefaultChange) {
      onDefaultChange(index);
    }
  };
  const isSelected = (index) => index === selected;
  const isDefault = (index) => index === defaultIndex;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CompaniesWrapper, { children: companies.map((company, index) => {
    const key = index + 1;
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
      Company,
      {
        disabled: company.disabled,
        onClick: () => company.disabled ? () => {
        } : handleSelect(index, company.disabled),
        className: `${company.disabled ? "disabled" : ""} ${isSelected(index) ? "Mui-selected" : ""}`,
        "data-testid": company.code + index,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material.Stack, { direction: "column", children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              Typography,
              {
                variant: "paragraphMd",
                weight: "regular",
                display: "block",
                children: company.name
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_material.Stack, { direction: "row", gap: 1, children: [
              /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                Typography,
                {
                  variant: "paragraphSm",
                  weight: "regular",
                  display: "block",
                  children: company.code
                }
              ),
              (() => {
                if (isDefault(index)) {
                  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    Typography,
                    {
                      variant: "paragraphSm",
                      weight: "regular",
                      display: "block",
                      children: "Default"
                    }
                  );
                } else if (company.disabled) {
                  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    Typography,
                    {
                      variant: "paragraphSm",
                      weight: "regular",
                      display: "block",
                      children: "Set as default"
                    }
                  );
                } else {
                  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                    Button,
                    {
                      sx: {
                        display: "inline-block"
                      },
                      variant: "link",
                      size: "medium",
                      onClick: (e) => {
                        e.stopPropagation();
                        handleDefault(index);
                      },
                      "data-testid": "default" + company.code + index,
                      children: "Set as default"
                    }
                  );
                }
              })()
            ] })
          ] }),
          isSelected(index) && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_material.Stack, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_CheckCircle.default, {}) })
        ]
      },
      key
    );
  }) });
};

// lib/navigation/theme.ts
var navigationProfileTheme = {
  dark: {
    name: "navigationProfile",
    styles: {
      background: COLORS.SYSTEM.DARK_60,
      item: {
        background: COLORS.SYSTEM.INK,
        border: COLORS.SYSTEM.SLATE,
        hover: COLORS.SYSTEM.DARK_70,
        focus: COLORS.SECONDARY.BLUE_50
      }
    }
  },
  light: {
    name: "navigationProfile",
    styles: {
      background: COLORS.SYSTEM.OFF_WHITE,
      item: {
        background: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.MISTY,
        hover: COLORS.SYSTEM.MISTY,
        focus: COLORS.SECONDARY.BLUE_60
      }
    }
  }
};
var companySelectorTheme = {
  dark: {
    name: "companySelector",
    styles: {
      background: COLORS.SYSTEM.DARK_60,
      item: {
        background: COLORS.SYSTEM.INK,
        border: COLORS.SYSTEM.SLATE,
        hover: COLORS.SYSTEM.DARK_60,
        focus: COLORS.SECONDARY.BLUE_50,
        icon: COLORS.SUCCESS.SUCCESS_20,
        disabled: COLORS.SYSTEM.SILVER
      }
    }
  },
  light: {
    name: "companySelector",
    styles: {
      background: COLORS.SYSTEM.OFF_WHITE,
      item: {
        background: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.MISTY,
        hover: COLORS.SECONDARY.BLUE_10,
        focus: COLORS.SECONDARY.BLUE_60,
        icon: COLORS.SUCCESS.SUCCESS_40,
        disabled: COLORS.SYSTEM.SILVER
      }
    }
  }
};
var navigationNotificationTheme = {
  dark: {
    name: "navigationNotification",
    styles: {
      background: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SLATE,
      hover: COLORS.SYSTEM.DARK_60,
      color: COLORS.SYSTEM.SILVER,
      svg: {
        color: COLORS.SECONDARY.BLUE_40,
        disabled: COLORS.SYSTEM.DARK_30
      },
      disabled: {
        background: COLORS.SYSTEM.DARK_60,
        color: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "navigationNotification",
    styles: {
      background: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.MISTY,
      hover: COLORS.SECONDARY.BLUE_10,
      color: COLORS.SYSTEM.DARK_30,
      svg: {
        color: COLORS.SECONDARY.BLUE_60,
        disabled: COLORS.SYSTEM.DARK_30
      },
      disabled: {
        background: COLORS.SYSTEM.OFF_WHITE,
        color: COLORS.SYSTEM.DARK_30
      }
    }
  }
};

// lib/navigation/notificationBell.tsx
var import_ErrorOutlineOutlined = __toESM(require("@mui/icons-material/ErrorOutlineOutlined"), 1);
var import_styles9 = require("@mui/material/styles");
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_relativeTime = __toESM(require_relativeTime(), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
import_dayjs.default.extend(import_relativeTime.default);
function timeAgo(date) {
  return (0, import_dayjs.default)(date).fromNow();
}
var NotificationWrapper = (0, import_styles9.styled)(import_material.Stack)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  boxSizing: "border-box",
  borderRadius: theme.spacing(1.5),
  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
  maxHeight: "500px"
}));
var NotificationHeader = (0, import_styles9.styled)(import_material.Stack)(({ theme }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.navigationNotification.border}`,
  width: "100%",
  backgroundColor: theme.palette.navigationNotification.background
}));
var NotificationFooter = (0, import_styles9.styled)(import_material.Stack)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: theme.spacing(3),
  alignContent: "center",
  borderTop: `1px solid ${theme.palette.navigationNotification.border}`,
  backgroundColor: theme.palette.navigationNotification.background
}));
var ButtonFooter = (0, import_styles9.styled)(Button)(() => ({
  display: "flex",
  alignContent: "center"
}));
var NotificationContainer = (0, import_styles9.styled)(import_material.Stack)(() => ({
  overflowY: "auto"
}));
var Notification = (0, import_styles9.styled)(import_material.Stack)(({ theme }) => ({
  width: "360px",
  padding: theme.spacing(3),
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: theme.spacing(3),
  boxSizing: "border-box",
  borderBottom: `1px solid ${theme.palette.navigationNotification.border}`,
  backgroundColor: theme.palette.navigationNotification.background,
  svg: {
    fontSize: "18px",
    color: theme.palette.navigationNotification.svg.color,
    padding: theme.spacing(1)
  },
  "&:hover": {
    background: theme.palette.navigationNotification.hover
  },
  "&.readed": {
    background: theme.palette.navigationNotification.disabled.background,
    color: theme.palette.navigationNotification.disabled.color,
    svg: {
      color: theme.palette.navigationNotification.svg.disabled
    }
  }
}));
var StyledTypography2 = (0, import_styles9.styled)(Typography)(({ theme }) => ({
  color: theme.palette.navigationNotification.color
}));
var NotificationBell = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(NotificationWrapper, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(NotificationHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Typography, { variant: "paragraphMd", weight: "medium", display: "block", children: props.label }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(NotificationContainer, { children: props.itemNotifications.map((noti, index) => /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      Notification,
      {
        className: noti.readed ? "readed" : "",
        "data-testid": noti.title + index,
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_material.Stack, { direction: "row", gap: 1.5, children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_ErrorOutlineOutlined.default, {}),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_material.Stack, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              Typography,
              {
                variant: "paragraphMd",
                weight: "medium",
                display: "block",
                children: noti.title
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              StyledTypography2,
              {
                variant: "paragraphSm",
                weight: "regular",
                display: "block",
                children: noti.description
              }
            ),
            noti.actions && /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_material.Stack, { direction: "row", gap: 3, marginTop: 3, children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { onClick: noti.actions.onDeny, variant: "secondary", children: "Deny" }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(Button, { onClick: noti.actions.onApprove, children: "Approve" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
              StyledTypography2,
              {
                variant: "paragraphSm",
                weight: "regular",
                display: "block",
                marginTop: 3,
                children: timeAgo(noti.date)
              }
            )
          ] })
        ] })
      },
      index + noti.title + noti.date
    )) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(NotificationFooter, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      ButtonFooter,
      {
        variant: "link",
        sx: { display: "flex", alignItems: "center" },
        onClick: props.onViewAll,
        children: "View all"
      }
    ) })
  ] });
};
