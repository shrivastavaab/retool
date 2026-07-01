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

// lib/theme/index.ts
var theme_exports = {};
__export(theme_exports, {
  ThemeProvider: () => ThemeProvider,
  dark: () => dark,
  getTheme: () => getTheme,
  light: () => light
});
module.exports = __toCommonJS(theme_exports);
var import_styles24 = require("@mui/material/styles");

// lib/accordion/theme.ts
var import_styles = require("@mui/material/styles");

// lib/layout/index.ts
var import_material = require("@mui/material");

// lib/accordion/theme.ts
var import_material2 = require("@mui/material");
var accordionTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        divider: theme.palette.t1.system.slate,
        background: {
          resting: theme.palette.t1.transparent,
          hover: theme.palette.t1.system.slate,
          active: theme.palette.t1.system.dark30,
          disabled: theme.palette.t1.system.dark60
        },
        body: theme.palette.t1.system.ink,
        text: {
          regular: theme.palette.t1.system.white,
          disabled: theme.palette.t1.system.pewter,
          advancedAccordion: {
            heading: theme.palette.t1.secondary.blue40,
            subheading: theme.palette.t1.system.silver
          }
        },
        icons: {
          error: theme.palette.t1.error.error30,
          success: theme.palette.t1.success.success30,
          indeterminate: theme.palette.t1.system.dark30
        },
        outline: theme.palette.t1.secondary.blue40
      };
    case "light":
      return {
        divider: theme.palette.t1.system.misty,
        background: {
          resting: theme.palette.t1.system.white,
          hover: theme.palette.t1.secondary.blue10,
          active: theme.palette.t1.secondary.blue20,
          disabled: theme.palette.t1.system.misty
        },
        body: theme.palette.t1.system.white,
        text: {
          regular: theme.palette.t1.system.ink,
          disabled: theme.palette.t1.system.silver,
          advancedAccordion: {
            heading: theme.palette.t1.secondary.blue60,
            subheading: theme.palette.t1.system.dark30
          }
        },
        icons: {
          error: theme.palette.t1.error.error40,
          success: theme.palette.t1.success.success40,
          indeterminate: theme.palette.t1.secondary.blue30
        },
        outline: theme.palette.t1.secondary.blue60
      };
  }
};
var StyledAccordion = (0, import_styles.styled)(import_material2.Accordion)(({ theme }) => {
  const palette = accordionTheme(theme);
  return {
    borderRadius: theme.spacing(1.5),
    padding: theme.spacing(6),
    cursor: "pointer",
    boxShadow: theme.shadows[1],
    "&.T1-advancedAccordion-error": {
      borderLeft: `2px solid ${palette.icons.error}`
    },
    "&.Mui-expanded": {
      backgroundColor: palette.background.resting
    }
  };
});
var StyledAccordionSummary = (0, import_styles.styled)(import_material2.AccordionSummary)(({ theme }) => {
  const palette = accordionTheme(theme);
  return {
    flexDirection: "row-reverse",
    padding: 0,
    "&.Mui-focusVisible": {
      backgroundColor: `${palette.background.resting} !important`,
      outline: "none"
    },
    ".MuiAccordionSummary-expandIconWrapper": {
      "&.Mui-expanded": {
        transform: "rotate(90deg)"
      }
    },
    [`& .${import_material2.accordionSummaryClasses.content}`]: {
      justifyContent: "space-between",
      gap: theme.spacing(3),
      padding: theme.spacing(0, 0, 0, 3)
    },
    ".T1-accordionSummary-heading": {
      color: palette.text.advancedAccordion.heading
    },
    ".T1-accordionSummary-subheading": {
      color: palette.text.advancedAccordion.subheading
    }
  };
});
var StyledAccordionDetails = (0, import_styles.styled)(import_material2.AccordionDetails)(({ theme }) => {
  const palette = accordionTheme(theme);
  return {
    backgroundColor: palette.background.hover,
    borderRadius: theme.spacing(3)
  };
});
var StyledSummarySection = (0, import_styles.styled)(import_material.Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  margin: theme.spacing(0),
  gap: theme.spacing(1.5)
}));
var MuiAccordion = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = accordionTheme(theme);
      return {
        gap: theme.spacing(3),
        boxShadow: "none",
        backgroundColor: palette.background.resting,
        "&:hover": {
          backgroundColor: palette.background.hover
        },
        "&:active": {
          backgroundColor: palette.background.active
        },
        "&:before": {
          opacity: 0
        },
        "&:focus-visible": {
          backgroundColor: palette.background.active,
          outline: `1px dashed ${theme.palette.outline}`
        },
        borderBottom: `1px solid ${palette.divider}`,
        "&.T1-accordion-boxless": {
          border: "none !important",
          "&:hover": {
            backgroundColor: "unset"
          },
          ".MuiAccordionSummary-root": {
            flexDirection: "row-reverse",
            padding: 0,
            gap: theme.spacing(1),
            fontSize: theme.typography.paragraph.sm.regular.fontSize,
            minHeight: "unset",
            color: palette.text.advancedAccordion.subheading,
            svg: {
              fontSize: theme.typography.paragraph.sm.regular.fontSize,
              color: palette.text.advancedAccordion.subheading
            }
          },
          ".MuiAccordionDetails-root": {
            marginLeft: theme.spacing(4),
            padding: theme.spacing(3),
            borderRadius: theme.spacing(1)
          }
        },
        "&.T1-accordion-simpleLink": {
          border: "none !important",
          "&:hover": {
            backgroundColor: "unset"
          },
          ".MuiAccordionSummary-root": {
            padding: 0,
            fontSize: theme.typography.paragraph.sm.regular.fontSize,
            minHeight: "unset",
            color: palette.outline,
            svg: {
              fontSize: theme.typography.paragraph.sm.regular.fontSize,
              color: palette.outline
            }
          },
          ".MuiAccordionDetails-root": {
            borderRadius: theme.spacing(1),
            padding: 0
          }
        },
        "&.T1-accordion-noSpace": {
          ".MuiAccordionSummary-root": {
            minHeight: "40px",
            padding: theme.spacing(2, 4)
          },
          svg: {
            color: palette.text.advancedAccordion.subheading
          },
          ".MuiAccordionDetails-root": {
            padding: 0,
            backgroundColor: palette.background.hover
          }
        },
        variants: [
          {
            props: { disabled: true },
            style: {
              backgroundColor: `${palette.background.disabled} !important`,
              color: palette.text.disabled,
              cursor: "not-allowed"
            }
          }
        ]
      };
    }
  }
};
var MuiAccordionSummary = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = accordionTheme(theme);
      return {
        gap: theme.spacing(3),
        boxShadow: "none",
        color: palette.text.regular,
        fontFamily: theme.typography.paragraph.md.regular.fontFamily,
        fontSize: theme.typography.paragraph.md.regular.fontSize,
        lineHeight: theme.typography.paragraph.md.regular.lineHeight,
        padding: theme.spacing(0, 6),
        "&.Mui-focusVisible": {
          backgroundColor: palette.background.active,
          outline: `1px dashed ${palette.outline}`,
          outlineOffset: "-2px"
        },
        ".MuiAccordionSummary-content": {
          margin: 0,
          "&.Mui-disabled": {
            backgroundColor: "transparent"
          },
          ".T1-accordionSummary-icon": {
            marginRight: theme.spacing(3),
            "&.T1-accordionSummary-indeterminate-icon": {
              color: palette.icons.indeterminate
            },
            "&.T1-accordionSummary-success-icon": {
              color: palette.icons.success
            },
            "&.T1-accordionSummary-error-icon": {
              color: palette.icons.error
            }
          }
        },
        variants: [
          {
            props: { disabled: true },
            style: {
              backgroundColor: "transparent",
              color: palette.text.disabled
            }
          }
        ]
      };
    }
  }
};
var MuiAccordionDetails = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = accordionTheme(theme);
      return {
        backgroundColor: palette.body,
        padding: theme.spacing(6)
      };
    }
  }
};
var AccordionContainer = (0, import_styles.styled)(import_material.Stack)(
  ({ theme, variant = "regular" }) => {
    const palette = accordionTheme(theme);
    return {
      ...variant === "regular" && {
        boxShadow: theme.shadows[0]
      },
      ...variant === "elevation" && {
        boxShadow: theme.shadows[2],
        borderRadius: theme.spacing(1)
      },
      overflow: "hidden",
      ".MuiAccordion-root": {
        "&:before": {
          opacity: 0
        },
        borderBottom: `1px solid ${palette.divider}`,
        "&:first-of-type": {
          borderTop: variant === "regular" ? `1px solid ${palette.divider}` : "none"
        },
        "&:last-of-type": {
          borderBottom: variant === "regular" ? `1px solid ${palette.divider}` : "none"
        }
      }
    };
  }
);

// lib/alert/theme.ts
var alertTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        filled: {
          error: {
            link: theme.palette.t1.system.dark70,
            closeIcon: theme.palette.t1.system.ink,
            icon: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.error.error20
          },
          warning: {
            link: theme.palette.t1.system.dark70,
            closeIcon: theme.palette.t1.system.ink,
            icon: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.accent.yellow20
          },
          info: {
            link: theme.palette.t1.system.dark70,
            closeIcon: theme.palette.t1.system.ink,
            icon: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.info.info20
          },
          success: {
            link: theme.palette.t1.system.dark70,
            closeIcon: theme.palette.t1.system.ink,
            icon: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.success.success20
          },
          promotion: {
            link: theme.palette.t1.system.dark70,
            closeIcon: theme.palette.t1.system.ink,
            icon: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.accent.violet20
          }
        },
        outlined: {
          error: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.error.error20,
            text: theme.palette.t1.error.error20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          warning: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.warning.warning20,
            text: theme.palette.t1.warning.warning20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          info: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.info.info20,
            text: theme.palette.t1.info.info20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          success: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.accent.green20,
            text: theme.palette.t1.accent.green20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          promotion: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.accent.violet20,
            text: theme.palette.t1.accent.violet20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          }
        },
        unfilled: {
          error: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.error.error20,
            text: theme.palette.t1.error.error20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          warning: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.warning.warning20,
            text: theme.palette.t1.warning.warning20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          info: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.info.info20,
            text: theme.palette.t1.info.info20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          success: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.accent.green20,
            text: theme.palette.t1.accent.green20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          },
          promotion: {
            link: theme.palette.t1.secondary.blue40,
            closeIcon: theme.palette.t1.system.silver,
            icon: theme.palette.t1.accent.violet20,
            text: theme.palette.t1.accent.violet20,
            border: theme.palette.t1.system.slate,
            background: theme.palette.t1.system.dark60
          }
        }
      };
    case "light":
      return {
        filled: {
          error: {
            link: theme.palette.t1.system.white,
            closeIcon: theme.palette.t1.system.white,
            icon: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.error.error40
          },
          warning: {
            link: theme.palette.t1.system.dark70,
            closeIcon: theme.palette.t1.system.ink,
            icon: theme.palette.t1.warning.warning50,
            text: theme.palette.t1.warning.warning50,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.accent.yellow40
          },
          info: {
            link: theme.palette.t1.system.white,
            closeIcon: theme.palette.t1.system.white,
            icon: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.info.info40
          },
          success: {
            link: theme.palette.t1.system.white,
            closeIcon: theme.palette.t1.system.white,
            icon: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.success.success40
          },
          promotion: {
            link: theme.palette.t1.system.white,
            closeIcon: theme.palette.t1.system.white,
            icon: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.accent.violet40
          }
        },
        outlined: {
          error: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.error.error40,
            text: theme.palette.t1.error.error50,
            border: theme.palette.t1.error.error20,
            background: theme.palette.t1.error.error10
          },
          warning: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.warning.warning40,
            text: theme.palette.t1.warning.warning50,
            border: theme.palette.t1.warning.warning20,
            background: theme.palette.t1.warning.warning10
          },
          info: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.info.info40,
            text: theme.palette.t1.info.info50,
            border: theme.palette.t1.info.info20,
            background: theme.palette.t1.info.info10
          },
          success: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.success.success40,
            text: theme.palette.t1.success.success50,
            border: theme.palette.t1.success.success20,
            background: theme.palette.t1.success.success10
          },
          promotion: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.accent.violet40,
            text: theme.palette.t1.accent.violet50,
            border: theme.palette.t1.accent.violet20,
            background: theme.palette.t1.accent.violet10
          }
        },
        unfilled: {
          error: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.error.error40,
            text: theme.palette.t1.error.error50,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.error.error10
          },
          warning: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.warning.warning40,
            text: theme.palette.t1.warning.warning50,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.warning.warning10
          },
          info: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.info.info40,
            text: theme.palette.t1.system.ink,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.info.info10
          },
          success: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.success.success40,
            text: theme.palette.t1.success.success50,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.success.success10
          },
          promotion: {
            link: theme.palette.t1.secondary.blue60,
            closeIcon: theme.palette.t1.system.pewter,
            icon: theme.palette.t1.accent.violet40,
            text: theme.palette.t1.accent.violet50,
            border: theme.palette.t1.transparent,
            background: theme.palette.t1.accent.violet10
          }
        }
      };
  }
};
var MuiAlert = {
  defaultProps: {
    variant: "filled",
    severity: "error"
  },
  styleOverrides: {
    root: ({ theme }) => {
      const palette = alertTheme(theme);
      return {
        padding: theme.spacing(2, 4),
        boxSizing: "border-box",
        gap: theme.spacing(4),
        ".MuiAlert-action": {
          display: "flex",
          alignItems: "center",
          padding: 0,
          button: {
            svg: {
              width: "20px",
              height: "20px"
            }
          }
        },
        ".MuiAlert-icon": {
          padding: 0,
          margin: 0,
          svg: {
            height: "22px",
            width: "22px"
          }
        },
        ".MuiAlert-message": {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: theme.spacing(4),
          padding: 0,
          overflow: "visible",
          ".T1-alert-content": {
            strong: {
              fontFamily: theme.typography.paragraph.md.medium.fontFamily,
              fontWeight: theme.typography.fontWeightBold
            },
            a: {
              textDecoration: "none",
              borderRadius: "0.5px",
              "&:focus-visible": {
                outline: `1px dashed ${theme.palette.outline}`,
                outlineOffset: theme.spacing(1)
              }
            }
          }
        },
        [theme.breakpoints.down("sm")]: {
          padding: theme.spacing(3, 6),
          height: "auto",
          display: "flex",
          alignItems: "flex-start",
          gap: theme.spacing(3),
          ".MuiAlert-message": {
            height: "auto",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: theme.spacing(3),
            ".MuiButton-root": {
              alignSelf: "self-start",
              margin: 0
            }
          },
          ".MuiAlert-action": {
            alignItems: "self-start",
            padding: 0
          }
        },
        variants: [
          {
            props: { variant: "filled" },
            style: {
              borderRadius: 0,
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    "&.Mui-disabled": {
                      color: theme.palette.button.link.disabled.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${theme.palette.button.link.disabled.text}`
                      }
                    }
                  }
                }
              }
            }
          },
          {
            props: { variant: "filled", severity: "error" },
            style: {
              backgroundColor: palette.filled.error.background,
              border: `1px solid ${palette.filled.error.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.filled.error.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.error.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.filled.error.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.error.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.error.text}`
                    },
                    "&:hover": {
                      color: palette.filled.error.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.error.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.error.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.error.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.error.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.error.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.error.text,
                    borderBottom: `1.5px solid ${palette.filled.error.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.filled.error.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.error.link,
                  borderColor: palette.filled.error.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.error.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "filled", severity: "warning" },
            style: {
              backgroundColor: palette.filled.warning.background,
              border: `1px solid ${palette.filled.warning.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.filled.warning.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.warning.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.filled.warning.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.warning.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.warning.text}`
                    },
                    "&:hover": {
                      color: palette.filled.warning.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.warning.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.warning.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.warning.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.warning.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.warning.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.warning.text,
                    borderBottom: `1.5px solid ${palette.filled.warning.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.filled.warning.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.warning.link,
                  borderColor: palette.filled.warning.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.warning.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "filled", severity: "info" },
            style: {
              backgroundColor: palette.filled.info.background,
              border: `1px solid ${palette.filled.info.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.filled.info.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.info.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.filled.info.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.info.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.info.text}`
                    },
                    "&:hover": {
                      color: palette.filled.info.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.info.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.info.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.info.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.info.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.info.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.info.text,
                    borderBottom: `1.5px solid ${palette.filled.info.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.filled.info.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.info.link,
                  borderColor: palette.filled.info.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.info.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "filled", severity: "success" },
            style: {
              backgroundColor: palette.filled.success.background,
              border: `1px solid ${palette.filled.success.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.filled.success.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.success.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.filled.success.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.success.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.success.text}`
                    },
                    "&:hover": {
                      color: palette.filled.success.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.success.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.success.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.success.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.success.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.success.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.success.text,
                    borderBottom: `1.5px solid ${palette.filled.success.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.filled.success.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.success.link,
                  borderColor: palette.filled.success.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.success.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "filled", severity: "promotion" },
            style: {
              backgroundColor: palette.filled.promotion.background,
              border: `1px solid ${palette.filled.promotion.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.filled.promotion.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.promotion.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.filled.promotion.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.promotion.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                    },
                    "&:hover": {
                      color: palette.filled.promotion.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.promotion.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.promotion.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.promotion.text,
                    borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.filled.promotion.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.promotion.link,
                  borderColor: palette.filled.promotion.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.promotion.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "outlined" },
            style: {
              borderRadius: theme.spacing(2),
              border: `1px solid`,
              ".T1-alert-content": {
                a: {
                  color: theme.palette.button.link.default.text,
                  "&:hover, &hover:focus-visible": {
                    borderColor: theme.palette.button.link.hover.text,
                    color: theme.palette.button.link.hover.text
                  },
                  "&:active": {
                    color: theme.palette.button.link.active.text,
                    borderColor: theme.palette.button.link.active.text
                  },
                  "&:focus-visible": {
                    color: theme.palette.button.link.active.text,
                    borderBottom: `1.5px solid ${theme.palette.button.link.active.text}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "outlined", severity: "error" },
            style: {
              backgroundColor: palette.outlined.error.background,
              border: `1px solid ${palette.outlined.error.border}`,
              ".MuiAlert-icon svg": {
                color: palette.outlined.error.icon
              },
              ".MuiAlert-action button": {
                "&:focus": {
                  outline: `1px dashed ${palette.outlined.error.link}`,
                  borderRadius: "2px"
                },
                svg: {
                  color: palette.outlined.error.closeIcon
                }
              },
              ".MuiAlert-message": {
                ".MuiTypography-root": {
                  color: `${palette.outlined.error.text}`
                },
                ".MuiButton-link": {
                  color: palette.outlined.error.link,
                  borderColor: palette.outlined.error.link,
                  marginLeft: theme.spacing(-2.25)
                }
              }
            }
          },
          {
            props: { variant: "outlined", severity: "warning" },
            style: {
              backgroundColor: palette.outlined.warning.background,
              border: `1px solid ${palette.outlined.warning.border}`,
              ".MuiAlert-icon svg": {
                color: palette.outlined.warning.icon
              },
              ".MuiAlert-action button": {
                "&:focus": {
                  outline: `1px dashed ${palette.outlined.warning.link}`,
                  borderRadius: "2px"
                },
                svg: {
                  color: palette.outlined.warning.closeIcon
                }
              },
              ".MuiAlert-message": {
                ".MuiTypography-root": {
                  color: `${palette.outlined.warning.text}`
                },
                ".MuiButton-link": {
                  color: palette.outlined.warning.link,
                  borderColor: palette.outlined.warning.link,
                  marginLeft: theme.spacing(-2.25)
                }
              }
            }
          },
          {
            props: { variant: "outlined", severity: "success" },
            style: {
              backgroundColor: palette.outlined.success.background,
              border: `1px solid ${palette.outlined.success.border}`,
              ".MuiAlert-icon svg": {
                color: palette.outlined.success.icon
              },
              ".MuiAlert-action button": {
                "&:focus": {
                  outline: `1px dashed ${palette.outlined.success.link}`,
                  borderRadius: "2px"
                },
                svg: {
                  color: palette.outlined.success.closeIcon
                }
              },
              ".MuiAlert-message": {
                ".MuiTypography-root": {
                  color: `${palette.outlined.success.text}`
                },
                ".MuiButton-link": {
                  color: palette.outlined.success.link,
                  borderColor: palette.outlined.success.link,
                  marginLeft: theme.spacing(-2.25)
                }
              }
            }
          },
          {
            props: { variant: "outlined", severity: "info" },
            style: {
              backgroundColor: palette.outlined.info.background,
              border: `1px solid ${palette.outlined.info.border}`,
              ".MuiAlert-icon svg": {
                color: palette.outlined.info.icon
              },
              ".MuiAlert-action button": {
                "&:focus": {
                  outline: `1px dashed ${palette.outlined.info.link}`,
                  borderRadius: "2px"
                },
                svg: {
                  color: palette.outlined.info.closeIcon
                }
              },
              ".MuiAlert-message": {
                ".MuiTypography-root": {
                  color: `${palette.outlined.info.text}`
                },
                ".MuiButton-link": {
                  color: palette.outlined.info.link,
                  borderColor: palette.outlined.info.link,
                  marginLeft: theme.spacing(-2.25)
                }
              }
            }
          },
          {
            props: { variant: "outlined", severity: "promotion" },
            style: {
              backgroundColor: palette.outlined.promotion.background,
              border: `1px solid ${palette.outlined.promotion.border}`,
              ".MuiAlert-icon svg": {
                color: palette.outlined.promotion.icon
              },
              ".MuiAlert-action button": {
                "&:focus": {
                  outline: `1px dashed ${palette.outlined.promotion.link}`,
                  borderRadius: "2px"
                },
                svg: {
                  color: palette.outlined.promotion.closeIcon
                }
              },
              ".MuiAlert-message": {
                ".MuiTypography-root": {
                  color: `${palette.outlined.promotion.text}`
                },
                ".MuiButton-link": {
                  color: palette.outlined.promotion.link,
                  borderColor: palette.outlined.promotion.link,
                  marginLeft: theme.spacing(-2.25)
                }
              }
            }
          },
          {
            props: { variant: "unfilled" },
            style: {
              "&.MuiAlert-root": {
                gap: "2px",
                padding: 0
              },
              ".MuiAlert-action": {
                padding: "6px"
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    "&.Mui-disabled": {
                      color: theme.palette.button.link.disabled.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${theme.palette.button.link.disabled.text}`
                      }
                    }
                  }
                }
              }
            }
          },
          {
            props: { variant: "unfilled", severity: "error" },
            style: {
              borderRadius: 0,
              border: `1px solid ${palette.unfilled.error.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: `${palette.unfilled.error.text}`
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.error.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.outlined.error.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.error.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.error.text}`
                    },
                    "&:hover": {
                      color: palette.filled.error.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.error.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.error.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.error.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.error.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.error.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.error.text,
                    borderBottom: `1.5px solid ${palette.filled.error.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: `${palette.unfilled.error.text}`
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.error.link,
                  borderColor: palette.filled.error.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.error.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "unfilled", severity: "warning" },
            style: {
              border: `1px solid ${palette.unfilled.warning.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.unfilled.warning.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.unfilled.warning.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.unfilled.warning.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.warning.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.warning.text}`
                    },
                    "&:hover": {
                      color: palette.filled.warning.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.warning.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.warning.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.warning.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.warning.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.warning.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.warning.text,
                    borderBottom: `1.5px solid ${palette.filled.warning.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.unfilled.warning.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.warning.link,
                  borderColor: palette.filled.warning.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.warning.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "unfilled", severity: "info" },
            style: {
              border: `1px solid ${palette.unfilled.info.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.unfilled.info.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.unfilled.info.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.unfilled.info.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.info.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.info.text}`
                    },
                    "&:hover": {
                      color: palette.filled.info.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.info.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.info.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.info.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.info.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.info.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.info.text,
                    borderBottom: `1.5px solid ${palette.filled.info.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.unfilled.info.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.info.link,
                  borderColor: palette.filled.info.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.info.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "unfilled", severity: "success" },
            style: {
              border: `1px solid ${palette.unfilled.success.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.unfilled.success.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.success.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.unfilled.success.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.success.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.success.text}`
                    },
                    "&:hover": {
                      color: palette.filled.success.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.success.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.success.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.success.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.success.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.success.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.success.text,
                    borderBottom: `1.5px solid ${palette.filled.success.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.unfilled.success.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.success.link,
                  borderColor: palette.filled.success.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.success.link}`
                  }
                }
              }
            }
          },
          {
            props: { variant: "unfilled", severity: "promotion" },
            style: {
              border: `1px solid ${palette.unfilled.promotion.border}`,
              ".MuiAlert-icon": {
                svg: {
                  color: palette.unfilled.promotion.icon
                }
              },
              ".MuiAlert-action": {
                button: {
                  "&:focus-visible": {
                    outline: `1px dashed ${palette.filled.promotion.closeIcon}`,
                    outlineOffset: theme.spacing(1)
                  },
                  svg: {
                    color: palette.unfilled.promotion.closeIcon
                  }
                }
              },
              ".MuiAlert-message": {
                ".T1-alert-content": {
                  ".T1-button-link": {
                    color: palette.filled.promotion.text,
                    "&:after": {
                      borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                    },
                    "&:hover": {
                      color: palette.filled.promotion.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                      }
                    },
                    "&:active": {
                      color: palette.filled.promotion.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                      }
                    },
                    "&.Mui-focusVisible": {
                      color: palette.filled.promotion.text,
                      "&:after": {
                        borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                      }
                    }
                  },
                  a: {
                    color: palette.filled.promotion.text,
                    borderBottom: `1.5px solid ${palette.filled.promotion.text}`
                  }
                },
                ".MuiTypography-root": {
                  color: palette.unfilled.promotion.text
                },
                ".MuiButton-contrastOutline": {
                  color: palette.filled.promotion.link,
                  borderColor: palette.filled.promotion.link,
                  "&:focus": {
                    outline: `1px dashed ${palette.filled.promotion.link}`
                  }
                }
              }
            }
          }
        ]
      };
    }
  }
};
var MuiAlertTitle = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: theme.typography.paragraph.md.medium.fontFamily,
      lineHeight: theme.typography.paragraph.md.medium.lineHeight,
      fontSize: theme.typography.paragraph.md.medium.fontSize,
      margin: 0
    })
  }
};

// lib/avatar/theme.ts
var avatarTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        text: theme.palette.t1.system.ink,
        background: {
          orange: theme.palette.t1.primary.orange40,
          blue: theme.palette.t1.secondary.blue40,
          green: theme.palette.t1.accent.green20,
          violet: theme.palette.t1.accent.violet20,
          magenta: theme.palette.t1.accent.magenta20
        },
        badgeBorder: theme.palette.t1.system.ink,
        borderGroup: theme.palette.t1.system.ink,
        onlineBg: theme.palette.t1.success.success40
      };
    case "light":
      return {
        text: theme.palette.t1.system.white,
        background: {
          orange: theme.palette.t1.primary.orange60,
          blue: theme.palette.t1.secondary.blue60,
          green: theme.palette.t1.accent.green40,
          violet: theme.palette.t1.accent.violet40,
          magenta: theme.palette.t1.accent.magenta40
        },
        badgeBorder: theme.palette.t1.system.white,
        borderGroup: theme.palette.t1.system.white,
        onlineBg: theme.palette.t1.success.success40
      };
  }
};
var MuiAvatar = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = avatarTheme(theme);
      return {
        color: palette.text,
        "&.T1-avatar-small": {
          width: 24,
          height: 24,
          fontSize: theme.typography.caption.medium.fontSize,
          fontFamily: theme.typography.caption.medium.fontFamily,
          lineHeight: theme.typography.caption.medium.lineHeight,
          svg: {
            width: 20,
            height: 20
          },
          "& + .MuiBadge-badge.T1-badge-dot": {
            top: 18,
            width: 4,
            height: 4,
            outline: `2px solid ${palette.badgeBorder}`,
            right: 2,
            bottom: 2,
            "&, &:hover": {
              backgroundColor: palette.onlineBg
            }
          }
        },
        "&.T1-avatar-medium": {
          width: 32,
          height: 32,
          fontSize: theme.typography.paragraph.md.medium.fontSize,
          fontFamily: theme.typography.paragraph.md.medium.fontFamily,
          lineHeight: theme.typography.paragraph.md.medium.lineHeight,
          svg: {
            width: 24,
            height: 24
          },
          "& + .MuiBadge-badge.T1-badge-dot": {
            width: 8,
            height: 8,
            borderRadius: 4,
            outline: `2px solid ${palette.badgeBorder}`,
            right: 4,
            bottom: 4,
            "&, &:hover": {
              backgroundColor: palette.onlineBg
            }
          }
        },
        "&.T1-avatar-large": {
          width: 40,
          height: 40,
          fontSize: theme.typography.paragraph.lg.medium.fontSize,
          fontFamily: theme.typography.paragraph.lg.medium.fontFamily,
          lineHeight: theme.typography.paragraph.lg.medium.lineHeight,
          svg: {
            width: 24,
            height: 24
          },
          "& + .MuiBadge-badge.T1-badge-legend": {
            width: 14,
            height: 14,
            lineHeight: "12px"
          },
          "& + .MuiBadge-badge.T1-badge-dot": {
            width: 8,
            height: 8,
            right: 4,
            bottom: 4,
            outline: `2px solid ${palette.badgeBorder}`,
            "&, &:hover": {
              backgroundColor: palette.onlineBg
            }
          }
        },
        "&.T1-avatar-extraLarge": {
          width: 96,
          height: 96,
          fontSize: theme.typography.h1sm.medium.fontSize,
          fontFamily: theme.typography.paragraph.lg.medium.fontFamily,
          lineHeight: theme.typography.paragraph.lg.medium.lineHeight,
          svg: {
            width: 35,
            height: 35
          },
          "& + .MuiBadge-badge.T1-badge-dot": {
            width: 12,
            height: 12,
            borderRadius: 6,
            outline: `2px solid ${palette.badgeBorder}`,
            right: 12,
            bottom: 12,
            "&, &:hover": {
              backgroundColor: palette.onlineBg
            }
          },
          "& + .MuiBadge-badge.T1-badge-legend": {
            width: 25,
            height: 25,
            fontSize: "20px",
            lineHeight: "12px",
            borderRadius: "50%",
            bottom: 0,
            right: 0,
            padding: 5
          }
        },
        "&.T1-avatar-orange": {
          backgroundColor: palette.background.orange
        },
        "&.T1-avatar-blue": {
          backgroundColor: palette.background.blue
        },
        "&.T1-avatar-green": {
          backgroundColor: palette.background.green
        },
        "&.T1-avatar-violet": {
          backgroundColor: palette.background.violet
        },
        "&.T1-avatar-magenta": {
          backgroundColor: palette.background.magenta
        }
      };
    }
  }
};
var MuiAvatarGroup = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = avatarTheme(theme);
      return {
        alignItems: "center",
        ".MuiAvatarGroup-avatar": {
          "&:first-of-type": { border: 0 }
        },
        ".MuiAvatar-root": {
          border: `2px solid ${palette.borderGroup}`,
          color: palette.text
        },
        ".MuiBadge-badge": {
          display: "none"
        },
        "&.T1-avatarGroup-orange .MuiAvatarGroup-avatar:first-child": {
          backgroundColor: palette.background.orange
        },
        "&.T1-avatarGroup-blue .MuiAvatarGroup-avatar:first-child": {
          backgroundColor: palette.background.blue
        },
        "&.T1-avatarGroup-green .MuiAvatarGroup-avatar:first-child": {
          backgroundColor: palette.background.green
        },
        "&.T1-avatarGroup-violet .MuiAvatarGroup-avatar:first-child": {
          backgroundColor: palette.background.violet
        },
        "&.T1-avatarGroup-magenta .MuiAvatarGroup-avatar:first-child": {
          backgroundColor: palette.background.magenta
        },
        "&.T1-avatarGroup-small .MuiAvatarGroup-avatar:first-child": {
          width: 24,
          height: 24,
          fontSize: theme.typography.caption.medium.fontSize,
          fontFamily: theme.typography.caption.medium.fontFamily,
          lineHeight: theme.typography.caption.medium.lineHeight,
          svg: {
            width: 20,
            height: 20
          }
        },
        "&.T1-avatarGroup-medium .MuiAvatarGroup-avatar:first-child": {
          width: 32,
          height: 32,
          fontSize: theme.typography.paragraph.md.medium.fontSize,
          fontFamily: theme.typography.paragraph.md.medium.fontFamily,
          lineHeight: theme.typography.paragraph.md.medium.lineHeight,
          svg: {
            width: 24,
            height: 24
          }
        },
        "&.T1-avatarGroup-large .MuiAvatarGroup-avatar:first-child": {
          width: 40,
          height: 40,
          fontSize: theme.typography.paragraph.lg.medium.fontSize,
          fontFamily: theme.typography.paragraph.lg.medium.fontFamily,
          lineHeight: theme.typography.paragraph.lg.medium.lineHeight,
          svg: {
            width: 24,
            height: 24
          }
        },
        "&.T1-avatarGroup-spacing-small": {
          ".MuiAvatarGroup-avatar": {
            marginLeft: theme.spacing(-4.5)
          }
        },
        "&.T1-avatarGroup-spacing-medium": {
          ".MuiAvatarGroup-avatar": {
            marginLeft: theme.spacing(-2.5)
          }
        },
        "&.T1-avatarGroup-spacing-large": {
          ".MuiAvatarGroup-avatar": {
            marginLeft: theme.spacing(-1)
          }
        }
      };
    }
  }
};

// lib/badge/theme.ts
var badgeTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        bgColor: theme.palette.t1.primary.orange40,
        hoverBgColor: theme.palette.t1.primary.orange45,
        textColor: theme.palette.t1.system.white,
        variant: {
          color: theme.palette.t1.system.dark80,
          add: {
            bgColor: theme.palette.t1.accent.green30,
            hoverBgColor: theme.palette.t1.accent.green20
          },
          info: {
            bgColor: theme.palette.t1.info.info20,
            hoverBgColor: theme.palette.t1.secondary.blue30
          },
          remove: {
            bgColor: theme.palette.t1.error.error30,
            hoverBgColor: theme.palette.t1.error.error20
          },
          legend: {
            bgColor: theme.palette.t1.system.cloudy,
            contentColor: theme.palette.t1.system.ink
          },
          icon: {
            bgColor: theme.palette.t1.system.ink,
            borderColor: theme.palette.t1.system.dark30,
            contentColor: theme.palette.t1.system.white,
            outlineColor: theme.palette.t1.system.ink
          },
          online: {
            bgColor: theme.palette.t1.success.success40,
            bgColorHover: theme.palette.t1.primary.orange40,
            border: theme.palette.t1.system.ink
          }
        }
      };
    }
    case "light":
    default: {
      return {
        bgColor: theme.palette.t1.primary.orange60,
        hoverBgColor: theme.palette.t1.primary.orange50,
        textColor: theme.palette.t1.system.white,
        variant: {
          color: theme.palette.t1.system.white,
          add: {
            bgColor: theme.palette.t1.success.success40,
            hoverBgColor: theme.palette.t1.success.success50
          },
          info: {
            bgColor: theme.palette.t1.info.info30,
            hoverBgColor: theme.palette.t1.info.info40
          },
          remove: {
            bgColor: theme.palette.t1.error.error40,
            hoverBgColor: theme.palette.t1.error.error50
          },
          legend: {
            bgColor: theme.palette.t1.secondary.blue80,
            contentColor: theme.palette.t1.system.white
          },
          icon: {
            bgColor: theme.palette.t1.system.white,
            borderColor: theme.palette.t1.system.cloudy,
            contentColor: theme.palette.t1.system.black,
            outlineColor: theme.palette.t1.system.white
          },
          online: {
            bgColor: theme.palette.t1.success.success40,
            bgColorHover: theme.palette.t1.primary.orange60,
            border: theme.palette.t1.system.white
          }
        }
      };
    }
  }
};
var MuiBadge = {
  defaultProps: {
    variant: "standard"
  },
  styleOverrides: {
    badge: ({ theme }) => {
      const palette = badgeTheme(theme);
      return {
        color: palette.textColor,
        backgroundColor: palette.bgColor,
        fontSize: theme.typography.paragraph.xs.regular.fontSize,
        fontFamily: theme.typography.paragraph.xs.regular.fontFamily,
        lineHeight: theme.typography.paragraph.xs.regular.lineHeight,
        width: 16,
        height: 16,
        padding: theme.spacing(0),
        minWidth: 16,
        ".MuiSvgIcon-root": {
          width: 16,
          color: palette.variant.color
        }
      };
    },
    root: ({ theme }) => {
      const palette = badgeTheme(theme);
      return {
        width: "fit-content",
        height: "fit-content",
        "&:hover": {
          ".MuiBadge-dot": {
            color: palette.textColor,
            backgroundColor: palette.hoverBgColor
          },
          ".MuiBadge-online": {
            backgroundColor: palette.variant.online.bgColorHover
          }
        },
        variants: [
          {
            props: { variant: "dot" },
            style: {
              ".MuiBadge-badge": {
                color: palette.textColor,
                backgroundColor: palette.bgColor,
                width: 8,
                height: 8,
                minWidth: 4
              }
            }
          },
          {
            props: { variant: "add" },
            style: {
              ".MuiBadge-badge": {
                backgroundColor: palette.variant.add.bgColor
              },
              "&:hover": {
                ".MuiBadge-badge": {
                  backgroundColor: palette.variant.add.hoverBgColor
                }
              }
            }
          },
          {
            props: { variant: "info" },
            style: {
              ".MuiBadge-badge": {
                backgroundColor: palette.variant.info.bgColor
              },
              "&:hover": {
                ".MuiBadge-badge": {
                  backgroundColor: palette.variant.info.hoverBgColor
                }
              }
            }
          },
          {
            props: { variant: "remove" },
            style: {
              ".MuiBadge-badge": {
                backgroundColor: palette.variant.remove.bgColor
              },
              "&:hover": {
                ".MuiBadge-badge": {
                  backgroundColor: palette.variant.remove.hoverBgColor
                }
              }
            }
          },
          {
            props: { variant: "legend" },
            style: {
              ".MuiBadge-badge": {
                transform: "none",
                bottom: theme.spacing(-0.5),
                right: theme.spacing(-0.5),
                minWidth: 12,
                width: 12,
                height: 12,
                backgroundColor: palette.variant.legend.bgColor,
                fontFamily: theme.typography.paragraph.xs.bold.fontFamily,
                fontSize: theme.typography.paragraph.xs.bold.fontSize,
                lineHeight: "10px",
                display: "flex",
                alignContent: "baseline",
                color: palette.variant.legend.contentColor
              },
              "&.T1-badge-large": {
                ".MuiBadge-badge": {
                  bottom: theme.spacing(-0.5),
                  right: theme.spacing(-0.5),
                  width: 14,
                  height: 14,
                  lineHeight: 11,
                  fontSize: theme.typography.paragraph.sm.bold.fontSize
                }
              }
            }
          },
          {
            props: { variant: "icon" },
            style: {
              ".MuiBadge-badge": {
                bottom: theme.spacing(0),
                right: theme.spacing(0),
                transform: "none",
                border: `1px solid ${palette.variant.icon.borderColor}`,
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: palette.variant.icon.bgColor,
                outline: `2px solid ${palette.variant.icon.outlineColor}`,
                ".MuiSvgIcon-root": {
                  color: palette.variant.icon.contentColor
                }
              }
            }
          }
        ]
      };
    }
  }
};

// lib/breadcrumbs/theme.ts
var import_material4 = require("@mui/material");
var import_material5 = require("@mui/material");

// lib/menu-item/component.tsx
var import_styles2 = require("@mui/material/styles");
var import_material3 = require("@mui/material");
var import_jsx_runtime = require("react/jsx-runtime");
var StyledMenuItem = (0, import_styles2.styled)(import_material3.MenuItem)(({ theme }) => ({
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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

// lib/utils/components.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var CursorController = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    import_material.Box,
    {
      ...omitCustomProps(props, ["sx"]),
      sx: { ...props.sx, cursor: props.cursor },
      children: props.children
    }
  );
};

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
var t1 = {
  transparent: "transparent",
  brand: {
    trinetOrange: "#E14700",
    trinetNavy: "#0B0134"
  },
  primary: {
    orange10: "#FFF1EB",
    orange20: "#FFD4C7",
    orange30: "#FFB199",
    orange40: "#FF8064",
    orange45: "#FA6C4D",
    orange50: "#E14700",
    orange60: "#D14200",
    orange70: "#a83706",
    orange75: "#75443F",
    orange80: "#2F120E"
  },
  secondary: {
    blue10: "#F8FAFF",
    blue20: "#F0F5FF",
    blue30: "#D0E4FF",
    blue40: "#94BEFD",
    blue50: "#5C9DFF",
    blue60: "#0A62E6",
    blue70: "#044DBB",
    blue80: "#0B0134"
  },
  system: {
    white: "#FFFFFF",
    offWhite: "#F8F9FA",
    misty: "#EEF0F2",
    cloudy: "#DDE1E6",
    silver: "#B3BDC7",
    pewter: "#6E7789",
    dark30: "#646C7D",
    slate: "#444C5C",
    ink: "#242936",
    dark60: "#20242F",
    dark70: "#191D26",
    dark80: "#07080B",
    black: "#000000"
  },
  info: {
    info10: "#F3F6FF",
    info20: "#AECFFF",
    info30: "#56ABFF",
    info40: "#0070E0",
    info50: "#012596"
  },
  success: {
    success10: "#F2FBF5",
    success20: "#B7E9C9",
    success30: "#33E173",
    success40: "#008531",
    success50: "#044E1F"
  },
  warning: {
    warning10: "#FFF7ED",
    warning20: "#FDD7B5",
    warning30: "#FFB258",
    warning40: "#FF8C22",
    warning50: "#682F03"
  },
  error: {
    error10: "#FFF2F2",
    error20: "#FFB4B4",
    error30: "#FF6359",
    error40: "#E01021",
    error50: "#AF0A0A"
  },
  accent: {
    violet10: "#F2ECFB",
    violet20: "#C3AFEF",
    violet30: "#875FDE",
    violet40: "#661CC8",
    violet50: "#3F0066",
    teal10: "#DBE4F6",
    teal20: "#9BAFD4",
    teal30: "#587AB8",
    teal40: "#355287",
    teal50: "#213762",
    green10: "#F2FBF5",
    green20: "#A5EDD3",
    green30: "#45D8B4",
    green40: "#02936F",
    green50: "#00434A",
    magenta10: "#FFE8F5",
    magenta20: "#FF8DCB",
    magenta30: "#D95188",
    magenta40: "#DB0661",
    magenta50: "#6B003D",
    yellow10: "#FEF9E7",
    yellow20: "#FFEEB2",
    yellow30: "#FFD649",
    yellow40: "#F4C006",
    yellow50: "#CB7A00"
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

// lib/breadcrumbs/theme.ts
var breadcrumbsTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        iconColor: theme.palette.t1.system.cloudy,
        color: theme.palette.t1.system.silver,
        active: {
          activeSeparator: theme.palette.t1.primary.orange40,
          color: theme.palette.t1.system.white,
          iconColor: theme.palette.t1.system.offWhite
        },
        hover: {
          backgroundColor: theme.palette.t1.system.dark70,
          border: theme.palette.t1.system.slate
        },
        focus: {
          border: theme.palette.t1.secondary.blue40
        },
        menu: {
          backgroundColor: theme.palette.t1.system.dark60,
          border: theme.palette.t1.system.slate,
          color: theme.palette.t1.system.silver,
          activeBorder: theme.palette.t1.primary.orange40,
          activeColor: theme.palette.t1.system.white
        },
        externalIcon: theme.palette.t1.system.silver
      };
    }
    case "light":
    default: {
      return {
        iconColor: theme.palette.t1.system.pewter,
        color: theme.palette.t1.system.dark30,
        active: {
          activeSeparator: theme.palette.t1.primary.orange50,
          color: theme.palette.t1.system.ink,
          iconColor: theme.palette.t1.system.ink
        },
        hover: {
          backgroundColor: theme.palette.t1.system.white,
          border: theme.palette.t1.transparent
        },
        focus: {
          border: theme.palette.t1.secondary.blue60
        },
        menu: {
          backgroundColor: theme.palette.t1.system.white,
          border: theme.palette.t1.transparent,
          color: theme.palette.t1.system.dark30,
          activeBorder: theme.palette.t1.primary.orange60,
          activeColor: theme.palette.t1.system.ink
        },
        externalIcon: theme.palette.t1.system.silver
      };
    }
  }
};
var MuiBreadcrumbs = {
  defaultProps: {
    separator: ""
  },
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiBreadcrumbs-separator": {
        marginRight: theme.spacing(0.75),
        marginLeft: theme.spacing(0.75)
      }
    })
  }
};
var StyledBreadcrumbsItem = (0, import_material4.styled)(import_material5.Button)(({ theme }) => {
  const palette = breadcrumbsTheme(theme);
  return {
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5),
    borderRadius: "0.25rem",
    fontSize: theme.typography.paragraph.xs.regular.fontSize,
    lineHeight: theme.typography.paragraph.xs.regular.lineHeight,
    fontFamily: theme.typography.paragraph.xs.regular.fontFamily,
    color: palette.color,
    maxWidth: "200px",
    textOverflow: "ellipsis",
    gap: theme.spacing(2),
    textTransform: "none",
    whiteSpace: "nowrap",
    overflow: "ellipsis",
    ".MuiSvgIcon-root": {
      fontSize: "18px",
      color: palette.iconColor
    },
    "&.active, &:hover, &:focus, &.T1-breadcrumbsItem-active": {
      color: palette.active.color,
      boxShadow: theme.shadows[1],
      ".MuiSvgIcon-root": {
        color: palette.active.iconColor
      }
    },
    "&:hover, &.active, &.Mui-focusVisible, &.Mui-focusVisible:hover, &.T1-breadcrumbsItem-hover": {
      backgroundColor: palette.hover.backgroundColor,
      outline: `1px solid ${palette.hover.border}`,
      boxShadow: theme.shadows[1]
    },
    "&.Mui-focusVisible, &.Mui-focusVisible:hover": {
      outline: `1px dashed ${palette.focus.border}`
    },
    ".T1-breadcrumbsItem-arrow.T1-active, &.T1-breadcrumbsItem-active-test": {
      transform: "rotate(90deg)",
      color: palette.active.activeSeparator
    },
    "&.T1-breadcrumbsItem-active-icon": {
      ".MuiSvgIcon-root:last-child": {
        transform: "rotate(90deg)",
        color: palette.active.activeSeparator
      }
    }
  };
});
var StyledBreadcrumbsSubItem = (0, import_material4.styled)(MenuItem)(({ theme }) => {
  const palette = breadcrumbsTheme(theme);
  return {
    height: 48,
    ".T1-breadcrumbs-navLink": {
      position: "absolute",
      padding: theme.spacing(3),
      textDecoration: "none",
      height: 24,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      color: "inherit"
    },
    "&.T1-breadcrumbsSubItem-active": {
      "&:before": {
        content: "''",
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 2,
        backgroundColor: palette.menu.activeBorder
      }
    }
  };
});

// lib/buttons/theme.ts
var import_styles3 = require("@mui/material/styles");
var import_material6 = require("@mui/material");
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
var MuiButton2 = {
  defaultProps: {
    variant: "primary"
  },
  styleOverrides: {
    root: ({ theme, ownerState }) => {
      const palette = _buttonTheme(theme);
      return {
        ...ownerState.disabled && {
          pointerEvents: "all",
          cursor: "not-allowed"
        },
        minWidth: 0,
        whiteSpace: "nowrap",
        textTransform: "none",
        fontFamily: theme.typography.paragraph.md.medium.fontFamily,
        fontSize: theme.typography.paragraph.md.medium.fontSize,
        boxShadow: "none",
        padding: 0,
        margin: 0,
        ".MuiSvgIcon-root": {
          color: "inherit"
        },
        ".T1-CircularProgress-wrapper": {
          marginRight: theme.spacing(2)
        },
        ".CircularProgress-background": {
          circle: {
            opacity: 0.3,
            stroke: palette.loadingBackground
          }
        },
        ".MuiCircularProgress-circle": {
          stroke: palette.loadingForeground
        },
        "&:after": {
          content: '""',
          position: "absolute",
          left: theme.spacing(2),
          right: theme.spacing(2),
          bottom: theme.spacing(1)
        },
        variants: [
          {
            props: { variant: "primary" },
            style: {
              backgroundColor: palette.primary.default.body,
              color: palette.primary.text,
              ".CircularProgress-background": {
                circle: {
                  stroke: palette.primary.disabled.body
                }
              },
              ".MuiCircularProgress-circle": {
                stroke: palette.primary.text
              },
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                backgroundColor: palette.primary.hover.body
              },
              "&:active, &.isActive": {
                backgroundColor: palette.primary.active.body
              },
              "&.Mui-focusVisible, &.EllipsisButtonDropdown-icon:focus": {
                outline: `dashed 1px ${theme.palette.outline}`,
                backgroundColor: palette.primary.active.body
              },
              "&.Mui-disabled": {
                backgroundColor: palette.primary.disabled.body,
                color: palette.primary.disabled.text
              }
            }
          },
          {
            props: { variant: "secondary" },
            style: {
              backgroundColor: palette.secondary.body,
              color: palette.secondary.default.text,
              border: `1.5px solid ${palette.secondary.default.border}`,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                color: palette.secondary.hover.text,
                backgroundColor: palette.secondary.body,
                border: `1.5px solid ${palette.secondary.hover.border}`
              },
              "&:active, &.isActive": {
                color: palette.secondary.active.text,
                border: `1.5px solid ${palette.secondary.active.border}`
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                color: palette.secondary.active.text,
                border: `1.5px solid ${palette.secondary.active.border}`
              },
              "&.Mui-disabled": {
                color: palette.secondary.disabled.text,
                border: `1.5px solid ${palette.secondary.disabled.border}`
              }
            }
          },
          {
            props: { variant: "tertiary" },
            style: {
              backgroundColor: palette.tertiary.default.body,
              color: palette.tertiary.text,
              outline: `1px solid ${palette.tertiary.default.border}`,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                backgroundColor: palette.tertiary.hover.body,
                outline: "none"
              },
              "&:active, &.isActive": {
                backgroundColor: palette.tertiary.active.body,
                outline: `1px solid ${palette.tertiary.default.border}`
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                backgroundColor: palette.tertiary.active.body
              },
              "&.Mui-disabled": {
                backgroundColor: palette.tertiary.disabled.body,
                color: palette.tertiary.disabled.text,
                outline: `1px solid ${palette.tertiary.default.border}`
              }
            }
          },
          {
            props: { variant: "contrast" },
            style: {
              color: palette.contrast.text,
              backgroundColor: palette.contrast.default.body,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                backgroundColor: palette.contrast.hover.body,
                color: palette.contrast.hover.text
              },
              "&:active, &.isActive": {
                backgroundColor: palette.contrast.active.body
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                backgroundColor: palette.contrast.active.body
              },
              "&.Mui-disabled": {
                backgroundColor: palette.contrast.disabled.body,
                color: palette.contrast.disabled.text
              }
            }
          },
          {
            props: {
              variant: "contrastOutline"
            },
            style: {
              color: palette.contrastOutline.default.text,
              border: `1.5px solid ${palette.contrastOutline.default.border}`,
              backgroundColor: palette.contrastOutline.body,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                color: palette.contrastOutline.hover.text,
                border: `1.5px solid ${palette.contrastOutline.hover.border}`,
                backgroundColor: palette.contrastOutline.body
              },
              "&:active, &.isActive": {
                color: palette.contrastOutline.active.text,
                border: `1.5px solid ${palette.contrastOutline.active.border}`
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                color: palette.contrastOutline.active.text,
                border: `1.5px solid ${palette.contrastOutline.active.border}`
              },
              "&.Mui-disabled": {
                color: palette.contrastOutline.disabled.text,
                border: `1.5px solid ${palette.contrastOutline.disabled.border}`
              }
            }
          },
          {
            props: {
              variant: "contrastReverse"
            },
            style: {
              color: palette.contrastReverse.text,
              backgroundColor: palette.contrastReverse.default.body,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                backgroundColor: palette.contrastReverse.hover.body,
                color: palette.contrastReverse.hover.text
              },
              "&:active, &.isActive": {
                backgroundColor: palette.contrastReverse.active.body
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                backgroundColor: palette.contrastReverse.active.body
              },
              "&.Mui-disabled": {
                backgroundColor: palette.contrastReverse.disabled.body,
                color: palette.contrastReverse.disabled.text
              }
            }
          },
          {
            props: {
              variant: "contrastOutlineReverse"
            },
            style: {
              color: palette.contrastOutlineReverse.default.text,
              border: `1.5px solid ${palette.contrastOutlineReverse.default.border}`,
              backgroundColor: palette.contrastOutlineReverse.body,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                color: palette.contrastOutlineReverse.hover.text,
                border: `1.5px solid ${palette.contrastOutlineReverse.hover.border}`,
                backgroundColor: palette.contrastOutlineReverse.body
              },
              "&:active, &.isActive": {
                color: palette.contrastOutlineReverse.active.text,
                border: `1.5px solid ${palette.contrastOutlineReverse.active.border}`
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                color: palette.contrastOutlineReverse.active.text,
                border: `1.5px solid ${palette.contrastOutlineReverse.active.border}`
              },
              "&.Mui-disabled": {
                color: palette.contrastOutlineReverse.disabled.text,
                border: `1.5px solid ${palette.contrastOutlineReverse.disabled.border}`
              }
            }
          },
          {
            props: {
              variant: "transparent"
            },
            style: {
              backgroundColor: palette.transparent.body,
              color: palette.transparent.default.text,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                color: palette.transparent.hover.text,
                backgroundColor: palette.transparent.hover.body,
                outline: `1px solid ${palette.transparent.hover.border}`
              },
              "&:active, &.isActive": {
                backgroundColor: palette.transparent.active.body,
                color: palette.transparent.active.text,
                outline: "none"
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                backgroundColor: palette.transparent.active.body
              },
              "&.Mui-disabled": {
                color: palette.transparent.disabled.text
              }
            }
          },
          {
            props: {
              variant: "link"
            },
            style: {
              backgroundColor: palette.link.body,
              color: palette.link.default.text,
              position: "relative",
              outlineOffset: theme.spacing(1),
              minWidth: 0,
              borderRadius: "0.5px",
              "&:after": {
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0
              },
              "&:hover": {
                color: palette.link.hover.text,
                backgroundColor: palette.link.body,
                "&:after": {
                  borderBottom: `1.5px solid ${palette.link.hover.text}`
                }
              },
              "&:active": {
                color: palette.link.active.text,
                "&:after": {
                  borderBottom: `1.5px solid ${palette.link.active.text}`
                }
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                color: palette.link.active.text,
                "&:after": {
                  borderBottom: `1.5px solid ${palette.link.active.text}`
                }
              },
              "&.Mui-disabled": {
                color: palette.link.disabled.text
              }
            }
          },
          {
            props: {
              variant: "header"
            },
            style: {
              backgroundColor: palette.header.default.body,
              color: palette.header.default.text,
              "&:hover": {
                color: palette.header.hover.text,
                backgroundColor: palette.header.hover.body
              },
              "&:active": {
                backgroundColor: palette.header.active.body
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${theme.palette.outline}`,
                backgroundColor: palette.header.active.body
              },
              "&.Mui-disabled": {
                color: palette.header.disabled.body,
                backgroundColor: palette.header.disabled.body
              }
            }
          },
          {
            props: {
              size: "large"
            },
            style: {
              padding: theme.spacing(2, 6),
              height: 48,
              fontSize: theme.typography.paragraph.md.medium.fontSize,
              ".T1-CircularProgress-wrapper": {
                width: 24,
                height: 24,
                minWidth: 24,
                minHeight: 24
              }
            }
          },
          {
            props: {
              size: "large",
              variant: "link"
            },
            style: {
              padding: theme.spacing(0),
              height: 24
            }
          },
          {
            props: {
              size: "large",
              variant: "header"
            },
            style: {
              padding: theme.spacing(3),
              height: 58
            }
          },
          {
            props: { size: "medium" },
            style: {
              padding: theme.spacing(1.5, 4),
              height: 40,
              fontSize: theme.typography.paragraph.sm.medium.fontSize,
              ".T1-CircularProgress-wrapper": {
                width: 20,
                height: 20,
                minWidth: 20,
                minHeight: 20
              }
            }
          },
          {
            props: {
              size: "medium",
              variant: "link"
            },
            style: {
              padding: theme.spacing(0),
              height: 20
            }
          },
          {
            props: {
              size: "small"
            },
            style: {
              padding: theme.spacing(1, 3),
              height: 36,
              fontSize: theme.typography.paragraph.xs.medium.fontSize,
              ".T1-CircularProgress-wrapper": {
                width: 16,
                height: 16,
                minWidth: 16,
                minHeight: 16
              }
            }
          },
          {
            props: {
              size: "small",
              variant: "link"
            },
            style: {
              padding: theme.spacing(0),
              height: 18
            }
          },
          {
            props: {
              size: "extraSmall"
            },
            style: {
              padding: theme.spacing(0, 2.25),
              height: 24,
              fontSize: theme.typography.paragraph.xs.medium.fontSize,
              ".T1-CircularProgress-wrapper": {
                width: 14,
                height: 14,
                minWidth: 14,
                minHeight: 14
              },
              ".MuiButton-endIcon": {
                ".MuiSvgIcon-root": {
                  fontSize: 18
                }
              }
            }
          }
        ]
      };
    }
  }
};
var MuiFab = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: ({ theme }) => {
      const palette = _buttonTheme(theme);
      return {
        fontFamily: theme.typography.paragraph.md.medium.fontFamily,
        fontSize: theme.typography.paragraph.md.medium.fontSize,
        boxShadow: theme.shadows[2],
        textTransform: "none",
        gap: theme.spacing(2),
        ".MuiSvgIcon-root": {
          color: "inherit"
        },
        variants: [
          {
            props: { color: "default" },
            style: {
              backgroundColor: palette.fab.default.default.body,
              color: palette.fab.default.default.text,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                backgroundColor: palette.fab.default.hover.body
              },
              "&:active, &.isActive": {
                backgroundColor: palette.fab.default.active.body
              },
              "&.Mui-focusVisible": {
                outline: `dashed 1px ${palette.fab.default.active.border}`,
                backgroundColor: palette.fab.default.active.body
              },
              "&.Mui-disabled": {
                backgroundColor: palette.fab.default.disabled.body,
                color: palette.fab.default.disabled.text
              }
            }
          },
          {
            props: { color: "primary" },
            style: {
              backgroundColor: palette.primary.default.body,
              color: palette.primary.text,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                backgroundColor: palette.primary.hover.body
              },
              "&:active, &.isActive": {
                backgroundColor: palette.primary.active.body
              },
              "&.Mui-focusVisible": {
                outline: `1px dashed ${palette.fab.primary.active.border}`,
                backgroundColor: palette.primary.active.body
              },
              "&.Mui-disabled": {
                backgroundColor: palette.primary.disabled.body,
                color: palette.primary.disabled.text
              }
            }
          },
          {
            props: { color: "secondary" },
            style: {
              backgroundColor: palette.fab.secondary.default.body,
              color: palette.fab.secondary.default.text,
              "&:hover, &.Mui-focusVisible:hover, &.isHover": {
                color: palette.fab.secondary.hover.text,
                backgroundColor: palette.fab.secondary.hover.body
              },
              "&:active": {
                color: palette.fab.secondary.active.text,
                backgroundColor: palette.fab.secondary.active.body
              },
              "&.Mui-focusVisible": {
                backgroundColor: palette.fab.secondary.active.body,
                color: palette.fab.secondary.active.text,
                outline: `1px dashed ${palette.fab.secondary.active.border}`
              },
              "&.Mui-disabled": {
                color: palette.fab.secondary.disabled.text,
                backgroundColor: palette.fab.secondary.disabled.body
              }
            }
          },
          {
            props: { variant: "circular", size: "small" },
            style: {
              width: 40,
              height: 40,
              padding: theme.spacing(2)
            }
          },
          {
            props: { variant: "circular", size: "medium" },
            style: {
              width: 48,
              height: 48,
              padding: theme.spacing(3)
            }
          },
          {
            props: { variant: "circular", size: "large" },
            style: {
              width: 56,
              height: 56,
              padding: theme.spacing(4)
            }
          },
          {
            props: { variant: "extended", size: "small" },
            style: {
              height: 36,
              padding: theme.spacing(1.25, 2.5),
              fontSize: theme.typography.paragraph.xs.medium.fontSize
            }
          },
          {
            props: { variant: "extended", size: "medium" },
            style: {
              height: 40,
              padding: theme.spacing(2, 4),
              fontSize: theme.typography.paragraph.sm.medium.fontSize
            }
          },
          {
            props: { variant: "extended", size: "large" },
            style: {
              height: 48,
              padding: theme.spacing(3, 4),
              fontSize: theme.typography.paragraph.md.medium.fontSize
            }
          }
        ]
      };
    }
  }
};
var MuiButtonGroup = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = _buttonTheme(theme);
      return {
        width: "fit-content",
        ".dropdownButton": {
          minWidth: "0px",
          "&-label": {
            marginRight: theme.spacing(1)
          },
          ".MuiButton-endIcon": {
            margin: 0
          }
        },
        ".MuiButton-root": {
          borderRadius: "0px",
          width: "100%",
          "&:first-of-type": {
            borderRadius: theme.spacing(1, 0, 0, 1)
          },
          "&:last-of-type": {
            borderRadius: theme.spacing(0, 1, 1, 0)
          }
        },
        variants: [
          {
            props: { variant: "primary", orientation: "vertical" },
            style: {
              ".MuiButton-root:not(:last-of-type)": {
                borderBottom: `2px solid ${palette.primary.active.body}`
              },
              ".MuiButton-root": {
                border: "none"
              }
            }
          },
          {
            props: { variant: "primary", orientation: "horizontal" },
            style: {
              ".MuiButton-root:not(:last-of-type)": {
                borderRight: `2px solid ${palette.primary.active.body}`
              }
            }
          },
          {
            props: { variant: "secondary", orientation: "vertical" },
            style: {
              ".MuiButton-root:not(:last-of-type)": {
                borderBottom: "none"
              }
            }
          },
          {
            props: { variant: "secondary", orientation: "horizontal" },
            style: {
              ".MuiButton-root:not(:last-of-type)": {
                borderRight: "none"
              }
            }
          },
          {
            props: { variant: "contrastOutline", orientation: "vertical" },
            style: {
              ".MuiButton-root:not(:last-of-type)": {
                borderBottom: "none"
              }
            }
          },
          {
            props: { variant: "contrastOutline", orientation: "horizontal" },
            style: {
              ".MuiButton-root:not(:last-of-type)": {
                borderRight: "none"
              }
            }
          },
          {
            props: { size: "large" },
            style: {
              ".dropdownButton": {
                padding: theme.spacing(3)
              }
            }
          },
          {
            props: { size: "medium" },
            style: {
              ".dropdownButton": {
                padding: theme.spacing(2.5)
              }
            }
          },
          {
            props: { size: "small" },
            style: {
              ".dropdownButton": {
                padding: theme.spacing(2.25)
              }
            }
          },
          {
            props: { size: "extraSmall" },
            style: {
              ".dropdownButton": {
                padding: theme.spacing(0.75)
              }
            }
          },
          {
            props: { orientation: "vertical" },
            style: {
              ".MuiButton-root": {
                borderRadius: "0px",
                width: "100%",
                "&:first-of-type": {
                  borderRadius: theme.spacing(1, 1, 0, 0)
                },
                "&:last-of-type": {
                  borderRadius: theme.spacing(0, 0, 1, 1)
                }
              },
              ".dropdownButton": {
                width: "100%",
                "&-anchor": {
                  top: "0px !important"
                }
              }
            }
          }
        ]
      };
    }
  }
};
var StyledChipButton = (0, import_styles3.styled)(import_material6.Button)(({
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
var StyledToggleIconButton = (0, import_styles3.styled)(import_material6.Button)(({ theme, buttontype = "center", selected = false }) => {
  const getBorderRadius2 = () => {
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
    borderRadius: getBorderRadius2(),
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
var StyledSimpleIconButton = (0, import_styles3.styled)(import_material6.IconButton)(({ theme, variant, selected }) => ({
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

// lib/card/theme.ts
var import_styles4 = require("@mui/material/styles");
var import_material7 = require("@mui/material");
var StyledInfoCard = (0, import_styles4.styled)(import_material7.Card)(({ theme }) => {
  const palette = infoCardTheme(theme);
  return {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(2, 3),
    borderRadius: theme.spacing(1.5),
    backgroundColor: palette.container.background,
    border: palette.container.border,
    "&.MuiPaper-root": {
      boxShadow: "none"
    }
  };
});
var StyledInfoIconContainer = (0, import_styles4.styled)(import_material7.Box)(({ theme }) => {
  const palette = infoCardTheme(theme);
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    minWidth: 44,
    minHeight: 44,
    borderRadius: "50%",
    backgroundColor: palette.icon.background,
    color: palette.icon.color,
    "& .MuiSvgIcon-root": {
      fontSize: 24
    }
  };
});
var StyledInfoTextContainer = (0, import_styles4.styled)(import_material7.Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(0.5),
  minWidth: 0
}));
var infoCardTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        container: {
          background: theme.palette.t1.system.ink,
          border: `1px solid ${theme.palette.t1.system.slate}`
        },
        icon: {
          background: theme.palette.t1.system.dark80,
          color: theme.palette.t1.system.silver
        }
      };
    }
    case "light":
    default: {
      return {
        container: {
          background: theme.palette.t1.secondary.blue10,
          border: "transparent"
        },
        icon: {
          background: theme.palette.t1.primary.orange10,
          color: theme.palette.t1.primary.orange50
        }
      };
    }
  }
};
var cardTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        background: theme.palette.t1.system.ink,
        backgroundTinted: theme.palette.t1.system.slate,
        border: theme.palette.t1.system.slate,
        divider: theme.palette.t1.system.slate,
        dividerTinted: theme.palette.t1.system.dark30,
        borderCardPaper: theme.palette.t1.system.ink,
        icon: theme.palette.t1.system.silver
      };
    }
    case "light":
    default: {
      return {
        background: theme.palette.t1.system.white,
        backgroundTinted: theme.palette.t1.system.offWhite,
        border: theme.palette.t1.system.misty,
        divider: theme.palette.t1.system.misty,
        dividerTinted: theme.palette.t1.system.misty,
        borderCardPaper: theme.palette.t1.system.cloudy,
        icon: theme.palette.t1.system.pewter
      };
    }
  }
};
var eventCardTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        published: {
          background: theme.palette.t1.accent.teal50,
          border: theme.palette.t1.accent.teal40,
          color: theme.palette.t1.system.white,
          hover: {
            background: theme.palette.t1.accent.teal40
          }
        },
        draft: {
          background: theme.palette.t1.secondary.blue10,
          border: theme.palette.t1.secondary.blue70,
          color: theme.palette.t1.secondary.blue70,
          hover: {
            background: theme.palette.t1.secondary.blue20
          }
        },
        publishedGreen: {
          background: theme.palette.t1.accent.green20,
          border: theme.palette.t1.accent.green30,
          color: theme.palette.t1.accent.green50,
          hover: {
            background: theme.palette.t1.accent.green30
          }
        }
      };
    }
    case "light":
    default: {
      return {
        published: {
          background: theme.palette.t1.accent.teal50,
          border: theme.palette.t1.accent.teal40,
          color: theme.palette.t1.system.white,
          hover: {
            background: theme.palette.t1.accent.teal40
          }
        },
        draft: {
          background: theme.palette.t1.secondary.blue10,
          border: theme.palette.t1.secondary.blue70,
          color: theme.palette.t1.secondary.blue70,
          hover: {
            background: theme.palette.t1.secondary.blue20
          }
        },
        publishedGreen: {
          background: theme.palette.t1.success.success50,
          border: theme.palette.t1.success.success40,
          color: theme.palette.t1.system.white,
          hover: {
            background: theme.palette.t1.success.success40
          }
        }
      };
    }
  }
};
var actionCardHeaderTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        neutral: {
          background: theme.palette.t1.system.slate
        },
        success: {
          background: theme.palette.t1.accent.green50
        },
        info: {
          background: theme.palette.t1.secondary.blue80
        },
        promotion: {
          background: theme.palette.t1.accent.violet50
        },
        error: {
          background: theme.palette.t1.primary.orange80
        },
        warning: {
          background: theme.palette.t1.warning.warning50
        }
      };
    }
    case "light":
    default: {
      return {
        neutral: {
          background: theme.palette.t1.system.offWhite
        },
        success: {
          background: theme.palette.t1.success.success10
        },
        info: {
          background: theme.palette.t1.secondary.blue20
        },
        promotion: {
          background: theme.palette.t1.accent.violet10
        },
        error: {
          background: theme.palette.t1.error.error10
        },
        warning: {
          background: theme.palette.t1.warning.warning10
        }
      };
    }
  }
};
var MuiCard = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = cardTheme(theme);
      return {
        backgroundColor: palette.background,
        borderRadius: "0.25rem",
        border: `1px solid ${palette.borderCardPaper}`,
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        "&.MuiPaper-elevation1": {
          boxShadow: theme.shadows[1]
        },
        "&.MuiPaper-elevation2": {
          boxShadow: theme.shadows[2]
        },
        variants: [
          {
            props: { variant: "tinted" },
            style: {
              ".MuiCardHeader-root": {
                backgroundColor: palette.backgroundTinted,
                outline: `1px solid ${palette.dividerTinted} `,
                padding: theme.spacing(4, 6)
              }
            }
          },
          {
            props: { variant: "regular" },
            style: {
              ".MuiCardHeader-root": {
                "&.T1-cardHeader-withDivider": {
                  outline: `1px solid ${palette.divider} `,
                  padding: theme.spacing(4, 6)
                }
              }
            }
          }
        ]
      };
    }
  }
};
var MuiCardHeader = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = cardTheme(theme);
      return {
        display: "flex",
        padding: theme.spacing(4, 6, 0, 6),
        alignItems: "center",
        alignSelf: "stretch",
        borderRadius: theme.spacing(2, 2, 0, 0),
        ".MuiCardHeader-title": {
          fontFamily: theme.typography.paragraph.lg.medium.fontFamily,
          fontSize: theme.typography.paragraph.md.medium.fontSize,
          lineHeight: theme.typography.paragraph.lg.medium.lineHeight,
          color: theme.palette.typography.color
        },
        ".MuiCardHeader-action": {
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          button: {
            padding: 0,
            svg: {
              color: palette.icon,
              height: "20px",
              width: "20px"
            }
          }
        }
      };
    }
  }
};
var MuiCardActions = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = cardTheme(theme);
      return {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        flexDirection: "row",
        padding: theme.spacing(4, 6),
        borderTop: `1px solid ${palette.divider} `,
        ".T1-cardActions-primaryActionsContainer": {
          display: "flex",
          justifyContent: "end",
          alignItems: "flex-start",
          gap: theme.spacing(3)
        }
      };
    }
  }
};
var MuiCardContent = {
  styleOverrides: {
    root: ({ theme }) => {
      return {
        padding: theme.spacing(6),
        margin: "auto 0",
        fontFamily: theme.typography.paragraph.md.regular.fontFamily,
        fontSize: theme.typography.paragraph.md.regular.fontSize,
        lineHeight: theme.typography.paragraph.md.regular.lineHeight,
        ".CMS-content": {
          fontFamily: theme.typography.paragraph.lg.regular.fontFamily
        }
      };
    }
  }
};
var StyledEventCard = (0, import_styles4.styled)(import_material7.Card)(({ theme }) => {
  const palette = eventCardTheme(theme);
  return {
    position: "relative",
    padding: theme.spacing(3, 2),
    backgroundColor: palette.published.background,
    border: `1px solid ${palette.published.border}`,
    borderRadius: theme.spacing(1),
    "&:hover": {
      backgroundColor: palette.published.hover.background,
      ".T1-event-menu": {
        display: "block"
      }
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-content": {
      color: palette.published.color,
      fontFamily: "Centra Regular",
      fontSize: "12px",
      fontWeight: 700,
      lineHeight: "16px"
    },
    ".MuiTypography-root": {
      color: palette.published.color,
      fontFamily: "Centra Regular",
      fontSize: "12px",
      fontWeight: 500,
      lineHeight: "16px"
    },
    svg: {
      color: palette.published.color,
      fontFamily: "Centra Regular",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "16px"
    },
    "&.MuiPaper-published": {
      ".T1-event-card-actions, .T1-event-menu": {
        svg: {
          "&:hover": {
            color: palette.published.color
          },
          color: palette.published.color
        }
      }
    },
    "&.MuiPaper-draft": {
      backgroundColor: palette.draft.background,
      border: `1px dashed ${palette.draft.border}`,
      "&:hover": {
        backgroundColor: palette.draft.hover.background
      },
      "&:focus": {
        boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
      },
      ".MuiCardHeader-title": {
        color: palette.draft.color
      },
      ".MuiTypography-root": {
        color: palette.draft.color
      },
      svg: {
        color: palette.draft.color
      },
      ".T1-event-card-actions, .T1-event-menu": {
        svg: {
          "&:hover": {
            color: palette.draft.color
          },
          color: palette.draft.color
        }
      }
    },
    "&.MuiPaper-greenPublished": {
      backgroundColor: palette.publishedGreen.background,
      border: `1px dashed ${palette.publishedGreen.border}`,
      "&:hover": {
        backgroundColor: palette.publishedGreen.hover.background
      },
      "&:focus": {
        boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
      },
      ".MuiCardHeader-title": {
        color: palette.publishedGreen.color
      },
      ".MuiTypography-root": {
        color: palette.publishedGreen.color
      },
      svg: {
        color: palette.publishedGreen.color
      },
      ".T1-event-card-actions, .T1-event-menu": {
        svg: {
          "&:hover": {
            color: palette.publishedGreen.color
          },
          color: palette.publishedGreen.color
        }
      }
    }
  };
});
var StyledEventCardContent = (0, import_styles4.styled)(import_material7.CardContent)(
  ({ theme }) => ({
    padding: theme.spacing(0, 4, 0, 1),
    marginBottom: "8px"
  })
);
var StyledEventCardActions = (0, import_styles4.styled)(import_material7.CardActions)(() => ({
  "&.T1-event-card-actions": {
    padding: 0,
    justifyContent: "end",
    ".MuiIconButton-root": {
      padding: 0,
      "&:hover": {
        backgroundColor: "transparent"
      }
    }
  }
}));
var StyledEventMenu = (0, import_styles4.styled)(import_material7.Box)(() => ({
  display: "none",
  position: "absolute",
  right: "5px",
  top: "8px",
  ".MuiIconButton-root": {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent!important"
    }
  }
}));
var StyledEventEmptyCell = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  const palette = eventCardTheme(theme);
  return {
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "94px",
    width: "212px",
    backgroundColor: palette.draft.background,
    border: `1px dashed ${palette.draft.border}`,
    "&:hover": {
      backgroundColor: palette.draft.hover.background
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-title": {
      color: palette.draft.color
    },
    ".MuiTypography-root": {
      color: palette.draft.color
    },
    svg: {
      color: palette.draft.color,
      fontSize: "14px"
    },
    ".T1-event-card-actions, .T1-event-menu": {
      svg: {
        "&:hover": {
          color: palette.draft.color
        },
        color: palette.draft.color
      }
    },
    cursor: "pointer"
  };
});
var StyledEventHeaderCell = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  const palette = eventCardTheme(theme);
  return {
    padding: theme.spacing(1.25, 2, 1.25, 2),
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "left",
    height: "14px",
    width: "139px",
    backgroundColor: palette.draft.background,
    border: `1px dashed ${palette.draft.border}`,
    "&:hover": {
      backgroundColor: palette.draft.hover.background
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-title": {
      color: palette.draft.color
    },
    ".MuiTypography-root": {
      color: palette.draft.color
    },
    svg: {
      color: palette.draft.color,
      fontSize: "14px"
    },
    ".T1-event-card-actions, .T1-event-menu": {
      svg: {
        "&:hover": {
          color: palette.draft.color
        },
        color: palette.draft.color
      }
    },
    cursor: "pointer"
  };
});
var StyledEventFooterCell = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  const palette = eventCardTheme(theme);
  return {
    padding: theme.spacing(1.25, 2, 1.25, 2),
    borderRadius: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "14px",
    width: "139px",
    backgroundColor: palette.draft.background,
    border: `1px dashed ${palette.draft.border}`,
    "&:hover": {
      backgroundColor: palette.draft.hover.background
    },
    "&:focus": {
      boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.75)"
    },
    ".MuiCardHeader-title": {
      color: palette.draft.color
    },
    ".MuiTypography-root": {
      color: palette.draft.color
    },
    svg: {
      color: palette.draft.color,
      fontSize: "14px"
    },
    ".T1-event-card-actions, .T1-event-menu": {
      svg: {
        "&:hover": {
          color: palette.draft.color
        },
        color: palette.draft.color
      }
    },
    cursor: "pointer"
  };
});
var StyledEventCardHeader = (0, import_styles4.styled)(import_material7.CardHeader)(
  ({ theme }) => ({
    padding: theme.spacing(0, 4, 0, 1),
    marginBottom: "8px"
  })
);
var StyledActionCard = (0, import_styles4.styled)(import_material7.Card)(({ theme }) => {
  const palette = cardTheme(theme);
  return {
    backgroundColor: palette.background,
    border: `1px solid ${palette.border}`,
    borderRadius: theme.spacing(1),
    boxShadow: "none",
    display: "flex",
    flexDirection: "column"
  };
});
var StyledActionCardHeader = (0, import_styles4.styled)(import_material7.Box)(({ theme, variant = "neutral" }) => {
  const palette = cardTheme(theme);
  const headerPalette = actionCardHeaderTheme(theme);
  const variantKey = variant;
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(4, 6),
    borderBottom: `1px solid ${palette.divider}`,
    gap: theme.spacing(3),
    backgroundColor: headerPalette[variantKey]?.background || headerPalette.neutral.background
  };
});
var StyledActionCardContent = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  return {
    padding: theme.spacing(6),
    flexGrow: 1,
    fontFamily: theme.typography.paragraph.md.regular.fontFamily,
    fontSize: theme.typography.paragraph.md.regular.fontSize,
    lineHeight: theme.typography.paragraph.md.regular.lineHeight,
    color: theme.palette.typography.color
  };
});
var StyledActionCardFooter = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  const palette = cardTheme(theme);
  return {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(4, 6),
    borderTop: `1px solid ${palette.divider}`,
    gap: theme.spacing(3)
  };
});
var StyledActionCardFooterLeft = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2)
  };
});
var StyledActionCardFooterRight = (0, import_styles4.styled)(import_material7.Box)(({
  theme
}) => {
  return {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3)
  };
});

// lib/chip/theme.ts
var chipTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        editBorder: COLORS.SYSTEM.WHITE,
        bgEdit: theme.palette.t1.system.dark80,
        primary: {
          text: theme.palette.t1.system.white,
          background: theme.palette.t1.system.ink,
          hover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter,
          border: theme.palette.t1.system.slate
        },
        neutral: {
          text: theme.palette.t1.system.white,
          background: theme.palette.t1.system.dark60,
          bgHover: theme.palette.t1.system.dark80,
          border: theme.palette.t1.system.slate,
          hover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter
        },
        warning: {
          text: theme.palette.t1.system.white,
          border: theme.palette.t1.warning.warning50,
          background: theme.palette.t1.system.ink,
          hover: theme.palette.t1.warning.warning50,
          bgHover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter
        },
        error: {
          text: theme.palette.t1.system.white,
          border: theme.palette.t1.error.error50,
          background: theme.palette.t1.system.ink,
          hover: theme.palette.t1.system.dark80,
          icon: theme.palette.t1.system.pewter
        },
        info: {
          text: theme.palette.t1.system.white,
          border: theme.palette.t1.system.slate,
          background: theme.palette.t1.system.dark70,
          hover: theme.palette.t1.system.dark70,
          icon: theme.palette.t1.system.pewter
        },
        pill: {
          text: theme.palette.t1.system.white,
          selectedText: theme.palette.t1.system.white,
          border: theme.palette.t1.system.dark30,
          background: theme.palette.t1.system.dark70,
          selectedBorder: theme.palette.t1.primary.orange40,
          icon: theme.palette.t1.system.silver
        }
      };
    }
    case "light": {
      return {
        editBorder: theme.palette.t1.secondary.blue60,
        bgEdit: theme.palette.t1.system.white,
        primary: {
          text: theme.palette.t1.system.ink,
          background: theme.palette.t1.secondary.blue10,
          border: theme.palette.t1.secondary.blue40,
          hover: theme.palette.t1.secondary.blue20,
          icon: theme.palette.t1.system.pewter
        },
        neutral: {
          text: theme.palette.t1.system.dark30,
          background: theme.palette.t1.system.offWhite,
          border: theme.palette.t1.system.cloudy,
          bgHover: theme.palette.t1.system.misty,
          hover: theme.palette.t1.system.cloudy,
          icon: theme.palette.t1.system.pewter
        },
        warning: {
          text: theme.palette.t1.system.slate,
          border: theme.palette.t1.warning.warning30,
          background: theme.palette.t1.system.white,
          bgHover: theme.palette.t1.warning.warning10,
          hover: theme.palette.t1.warning.warning30,
          icon: theme.palette.t1.system.pewter
        },
        error: {
          text: theme.palette.t1.system.slate,
          border: theme.palette.t1.error.error40,
          background: theme.palette.t1.system.white,
          hover: theme.palette.t1.error.error10,
          icon: theme.palette.t1.system.pewter
        },
        info: {
          text: theme.palette.t1.system.slate,
          border: "transparent",
          background: theme.palette.t1.system.offWhite,
          hover: theme.palette.t1.system.offWhite,
          icon: theme.palette.t1.system.pewter
        },
        pill: {
          text: theme.palette.t1.system.slate,
          selectedText: theme.palette.t1.system.ink,
          border: theme.palette.t1.system.misty,
          background: theme.palette.t1.system.white,
          selectedBorder: theme.palette.t1.primary.orange60,
          icon: theme.palette.t1.system.slate
        }
      };
    }
  }
};
var MuiChip = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = chipTheme(theme);
      return {
        padding: theme.spacing(1.5, 3),
        color: palette.primary.text,
        background: palette.primary.background,
        border: `1px solid ${palette.primary.border}`,
        fontFamily: theme.typography.paragraph.md.bold.fontFamily,
        fontSize: theme.typography.paragraph.md.regular.fontSize,
        lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "flex-start",
        ":focus": {
          outline: `1px dashed ${palette.editBorder}`
        },
        ":active, :selected": {
          border: `1px solid ${palette.primary.background}`
        },
        "svg:active, svg:focus, svg:visited, svg:target": {
          outline: `1px dashed ${palette.editBorder}`
        },
        ".MuiAvatar-root": {
          margin: 0,
          marginRight: theme.spacing(1.5)
        },
        "&.Mui-disabled": {
          opacity: "0.5",
          cursor: "not-allowed"
        },
        ".MuiInputBase-root": {
          color: palette.primary.text,
          position: "absolute",
          top: theme.spacing(-1),
          left: 0,
          right: 0,
          height: "100%",
          display: "inline-block",
          whiteSpace: "normal",
          fontFamily: theme.typography.paragraph.md.regular.fontFamily,
          fontSize: theme.typography.paragraph.sm.regular.fontSize,
          lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
          ".MuiInputBase-input": {
            padding: theme.spacing(1.5, 0)
          }
        },
        "&.T1-chip-editing": {
          border: `1px solid ${palette.editBorder}!important`,
          background: `${palette.bgEdit}!important`
        },
        ".MuiIconButton-root:focus": {
          border: "none",
          boxShadow: "none"
        },
        ".MuiChip-label": {
          padding: theme.spacing(0.5, 0),
          paddingRight: theme.spacing(1),
          fontSize: theme.typography.paragraph.sm.regular.fontSize,
          fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
          position: "relative",
          ".MuiBox-root": {
            paddingRight: theme.spacing(1)
          }
        },
        ".MuiSvgIcon-root": {
          fontSize: theme.typography.paragraph.md.regular.fontSize,
          marginLeft: theme.spacing(1),
          cursor: "pointer",
          padding: 0
        },
        ".T1-InvisibleChipLabel": { width: "auto", opacity: 0, padding: "1px" },
        variants: [
          {
            props: { variant: "primary" },
            style: {
              color: palette.primary.text,
              background: palette.primary.background,
              "&:hover, &.MuiChipPrimary-hover": {
                background: palette.primary.hover
              }
            }
          },
          {
            props: { variant: "neutral" },
            style: {
              color: palette.neutral.text,
              background: palette.neutral.background,
              border: `1px solid ${palette.neutral.border}`,
              "&:hover, &.MuiChipNeutral-hover": {
                background: palette.neutral.bgHover,
                border: `1px solid ${palette.neutral.hover}`
              },
              "&:focus, &.MuiChipNeutral-focus": {
                outline: `1px dashed ${palette.editBorder}`,
                border: `1px solid ${palette.neutral.border}`
              }
            }
          },
          {
            props: { variant: "warning" },
            style: {
              color: palette.warning.text,
              border: `1px solid ${palette.warning.border}`,
              background: palette.warning.background,
              "&:hover, &.MuiChipWarning-hover": {
                color: palette.warning.text,
                background: palette.warning.bgHover,
                border: `1px solid ${palette.warning.hover}`
              },
              "&:focus, &.MuiChipWarning-focus": {
                outline: `1px dashed ${palette.editBorder}`,
                border: `1px solid ${palette.warning.border}`
              }
            }
          },
          {
            props: { variant: "error" },
            style: {
              color: palette.error.text,
              border: `1px solid ${palette.error.border}`,
              background: palette.error.background,
              "&:hover, MuiChipError-hover": {
                color: palette.error.text,
                background: palette.error.hover
              },
              "&:focus, &.MuiChipError-focus": {
                outline: `1px dashed ${palette.editBorder}`,
                border: `1px solid ${palette.error.border}`
              }
            }
          },
          {
            props: { variant: "info" },
            style: {
              color: palette.info.text,
              border: `1px solid ${palette.info.border}`,
              background: palette.info.background,
              outline: "none",
              "&:hover, &.MuiChipInfo-hover": {
                color: palette.info.text,
                background: palette.info.hover
              },
              "&:focus, &.MuiChipInfo-focus": {
                outline: `1px dashed ${palette.editBorder}`,
                border: palette.info.border === "none" ? "none" : `1px solid ${palette.info.border}`
              }
            }
          },
          {
            props: { variant: "pill" },
            style: {
              "&.MuiChip-pill, &.MuiChip-pill:hover, &.MuiChipPillHover": {
                border: `1px solid ${palette.pill.border}`,
                color: palette.pill.text,
                backgroundColor: palette.pill.background,
                ".MuiChip-label": {
                  fontFamily: theme.typography.paragraph.md.regular.fontFamily
                },
                "&.T1-pill-chip-selected": {
                  border: `1px solid ${palette.pill.selectedBorder}`,
                  color: palette.pill.selectedText,
                  ".MuiChip-label": {
                    fontFamily: theme.typography.paragraph.md.medium.fontFamily
                  }
                }
              }
            }
          },
          {
            props: { size: "extraExtraLarge" },
            style: {
              height: theme.spacing(12),
              borderRadius: theme.spacing(6),
              padding: theme.spacing(1.5, 6)
            }
          },
          {
            props: { size: "extraLarge" },
            style: {
              height: theme.spacing(10),
              borderRadius: theme.spacing(5),
              padding: theme.spacing(1.5, 5)
            }
          },
          {
            props: { size: "large" },
            style: {
              height: theme.spacing(9),
              borderRadius: theme.spacing(6)
            }
          },
          {
            props: { size: "medium" },
            style: {
              height: theme.spacing(8),
              padding: theme.spacing(1, 2),
              fontSize: theme.typography.paragraph.sm.regular.fontSize,
              "&.T1-chip-editable": {
                padding: theme.spacing(1, 2, 1, 3)
              }
            }
          },
          {
            props: { size: "small" },
            style: {
              height: theme.spacing(7),
              padding: theme.spacing(0.5),
              paddingLeft: theme.spacing(1),
              paddingRight: theme.spacing(2),
              "&.T1-chip-editable": {
                padding: theme.spacing(0.5, 2, 0.5, 3)
              }
            }
          }
        ]
      };
    }
  }
};

// lib/checkbox/theme.ts
var import_material9 = require("@mui/material");

// lib/form-helper-text/component.tsx
var import_material8 = require("@mui/material");
var import_icons_material = require("@mui/icons-material");
var import_jsx_runtime3 = require("react/jsx-runtime");
var FormHelperText = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_material8.FormHelperText, { ...props, variant: "outlined", children: [
    props.error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_icons_material.WarningAmberOutlined, {}),
    props.children
  ] });
};

// lib/form-helper-text/theme.ts
var formHelperTextTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        text: theme.palette.t1.error.error30
      };
    }
    case "light": {
      return {
        text: theme.palette.t1.error.error50
      };
    }
  }
};
var MuiFormHelperText2 = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = formHelperTextTheme(theme);
      return {
        marginLeft: 0,
        color: theme.palette.textField.text,
        // TO DO: change this when modifying the textField theme implementation
        outline: "none",
        fontFamily: theme.typography.fontFamily,
        minWidth: "120px",
        paddingTop: theme.spacing(1.5),
        svg: {
          fontSize: "14px",
          marginRight: theme.spacing(1),
          verticalAlign: "sub"
        },
        "&.Mui-error": {
          color: palette.text
        }
      };
    }
  }
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
var MuiCheckbox = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = _checkboxTheme(theme);
      return {
        width: "18px",
        height: "18px",
        padding: theme.spacing(1),
        boxSizing: "content-box",
        ".MuiSvgIcon-root": {
          color: palette.default.unchecked
        },
        "&.Mui-checked, &.MuiCheckbox-indeterminate": {
          "& .MuiSvgIcon-root": {
            color: palette.default.checked
          }
        },
        "&.Mui-disabled": {
          cursor: "not-allowed",
          pointerEvents: "auto",
          "& .MuiSvgIcon-root": {
            color: palette.disabled.unchecked
          },
          "&.Mui-checked, &.MuiCheckbox-indeterminate": {
            "& .MuiSvgIcon-root": {
              color: palette.disabled.checked
            }
          }
        },
        "&.Mui-focusVisible": {
          "& .MuiSvgIcon-root": {
            color: palette.focus.unchecked
          },
          "&.Mui-checked, &.MuiCheckbox-indeterminate": {
            "& .MuiSvgIcon-root": {
              color: palette.focus.checked
            }
          }
        }
      };
    }
  }
};
var StyledCheckboxHelperText = (0, import_material9.styled)(FormHelperText)(({
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

// lib/drawer/theme.ts
var drawerTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        header: theme.palette.t1.system.dark60,
        borderHeader: theme.palette.t1.system.slate,
        body: theme.palette.t1.system.ink,
        backdrop: theme.palette.t1.system.dark80,
        draggable: theme.palette.t1.system.slate,
        borderFooter: theme.palette.t1.system.slate
      };
    }
    case "light": {
      return {
        header: theme.palette.t1.secondary.blue10,
        borderHeader: theme.palette.t1.transparent,
        body: theme.palette.t1.system.white,
        backdrop: theme.palette.t1.system.dark80,
        draggable: theme.palette.t1.system.cloudy,
        borderFooter: theme.palette.t1.system.misty
      };
    }
  }
};
var MuiDrawer = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = drawerTheme(theme);
      return {
        position: "absolute",
        nav: {
          "&.T1-inner": {
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }
        },
        ".MuiBackdrop-root": {
          backgroundColor: palette.backdrop,
          opacity: "0.75!important",
          position: "absolute"
        },
        ".MuiDrawer-root": {
          background: palette.body,
          backgroundColor: "red",
          width: "320px"
        },
        ".MuiPaper-root": {
          background: palette.body,
          borderRadius: theme.spacing(1),
          width: "320px",
          outline: `1px solid ${palette.borderHeader}`,
          outlineOffset: "-1px",
          boxShadow: theme.shadows[2],
          ".MuiDrawer-header": {
            background: palette.header,
            width: "320px",
            outline: `1px solid ${palette.borderHeader}`,
            borderRadius: "4px 4px 0 0",
            padding: `${theme.spacing(4, 6)}`,
            ".MuiTypography-root": {
              fontSize: theme.typography.paragraph.lg.regular.fontSize,
              lineHeight: theme.typography.paragraph.lg.regular.lineHeight
            },
            "&.T1-drawerContainer": {
              justifyContent: "space-between",
              display: "flex",
              position: "sticky",
              top: 0,
              zIndex: 1,
              svg: {
                cursor: "pointer"
              }
            }
          },
          ".MuiDrawer-container": {
            width: "320px",
            padding: theme.spacing(6),
            "&.T1-inner": {
              height: "100%",
              overflowY: "auto"
            }
          },
          ".MuiDrawer-footer": {
            backgroundColor: palette.body,
            position: "sticky",
            bottom: 0,
            zIndex: 1,
            padding: theme.spacing(4, 6),
            borderTop: `1px solid ${palette.borderFooter}`,
            ".MuiButtonBase-root": {
              width: "100%"
            }
          },
          ".MuiBox-root": {
            width: "auto"
          },
          ".MuiDrawer-container.MuiBox-root": {
            width: "auto"
          },
          [theme.breakpoints.down("sm")]: {
            ".MuiDrawer-header": {
              boxSizing: "border-box",
              background: palette.body,
              width: "100%",
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              ".draggable": {
                width: "30px",
                height: "6px",
                backgroundColor: palette.draggable,
                borderRadius: "3px"
              }
            },
            ".MuiDrawer-container": {
              padding: theme.spacing(6),
              height: "100%",
              overflow: "auto",
              width: "auto",
              ".MuiBox-root": {
                boxSizing: "border-box",
                width: "auto"
              }
            }
          },
          "&.MuiDrawer-paper.MuiDrawer-paperAnchorBottom": {
            width: "100%"
          }
        }
      };
    }
  }
};
var MuiSwipeableDrawer = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = drawerTheme(theme);
      return {
        ".MuiBackdrop-root": {
          backgroundColor: palette.backdrop,
          opacity: "0.75!important"
        },
        ".MuiDrawer-root": {
          background: palette.body,
          width: "320px"
        },
        ".MuiPaper-root": {
          background: palette.body,
          borderRadius: "4px 4px 0 0",
          width: "320px",
          top: "30px",
          outline: `1px solid ${theme.palette.stepper.primary.default.border}`,
          outlineOffset: "-1px",
          ".MuiDrawer-header": {
            background: palette.header,
            width: "320px",
            borderRadius: "4px 4px 0 0",
            padding: `${theme.spacing(6, 4)}`,
            ".MuiTypography-root": {
              fontSize: theme.typography.paragraph.lg.regular.fontSize,
              lineHeight: theme.typography.paragraph.lg.regular.lineHeight
            }
          },
          ".MuiDrawer-container": {
            width: "320px",
            padding: theme.spacing(6)
          },
          ".MuiBox-root": {
            width: "auto"
          },
          ".MuiDrawer-container.MuiBox-root": {
            width: "auto"
          },
          [theme.breakpoints.down("sm")]: {
            ".MuiDrawer-header": {
              boxSizing: "border-box",
              background: palette.body,
              width: "100%",
              height: "fit-content",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(4),
              ".draggable": {
                width: "30px",
                height: "6px",
                backgroundColor: palette.draggable,
                borderRadius: "12px"
              }
            },
            ".MuiDrawer-container": {
              padding: theme.spacing(6),
              height: "100%",
              overflow: "auto",
              width: "auto",
              ".MuiBox-root": {
                boxSizing: "border-box",
                width: "auto"
              }
            }
          },
          "&.MuiDrawer-paper.MuiDrawer-paperAnchorBottom": {
            width: "100%"
          }
        }
      };
    }
  }
};

// lib/form-control/theme.ts
var MuiFormControl = {
  styleOverrides: {
    root: ({ theme }) => ({
      outline: "none",
      fontFamily: theme.typography.fontFamily,
      width: "100%",
      select: {
        padding: 0
      },
      ".MuiInput-input:focus": {
        backgroundColor: theme.palette.background.paper
      },
      ".MuiSelect-outlined": {
        outline: "none"
      },
      ".MuiSelect-standard,.MuiSelect-outlined:hover": {
        outline: "none"
      },
      ".Mui-disabled": {
        opacity: 0.5
      },
      "&.MuiFormControl-fullWidth": {
        maxWidth: "100%"
      },
      "&.form-control-checkbox": {
        minWidth: 0
      },
      ".MuiInputBase-root": {
        "&.Mui-disabled": {
          fieldset: {
            pointerEvents: "auto"
          },
          cursor: "not-allowed"
        }
      },
      ".MuiFormGroup-root": {
        "& .MuiFormControl-root": {
          padding: theme.spacing(1.5, 0)
        }
      }
    })
  },
  defaultProps: {
    variant: "outlined"
  }
};

// lib/date-picker/theme.ts
var import_material10 = require("@mui/material");
var import_x_date_pickers = require("@mui/x-date-pickers");
var datePickerTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        selectionButton: {
          text: {
            default: theme.palette.t1.system.white,
            current: theme.palette.t1.primary.orange20,
            selected: theme.palette.t1.system.ink
          },
          background: {
            active: theme.palette.t1.system.ink,
            selected: theme.palette.t1.secondary.blue40,
            current: theme.palette.t1.primary.orange75
          }
        },
        content: {
          background: theme.palette.t1.system.dark80,
          typography: theme.palette.t1.system.white,
          typographySecondary: theme.palette.t1.system.silver,
          weekBorder: theme.palette.t1.system.dark30
        }
      };
    case "light":
    default:
      return {
        selectionButton: {
          text: {
            default: theme.palette.t1.system.ink,
            current: theme.palette.t1.primary.orange70,
            selected: theme.palette.t1.system.white
          },
          background: {
            active: theme.palette.t1.secondary.blue20,
            selected: theme.palette.t1.secondary.blue60,
            current: theme.palette.t1.primary.orange10
          }
        },
        content: {
          background: theme.palette.t1.system.white,
          typography: theme.palette.t1.system.ink,
          typographySecondary: theme.palette.t1.system.silver,
          weekBorder: theme.palette.t1.system.misty
        }
      };
  }
};
var MuiPickersLayout = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = datePickerTheme(theme);
      return {
        [`.${import_x_date_pickers.pickersLayoutClasses.contentWrapper}`]: {
          boxShadow: theme.shadows[2],
          backgroundColor: palette.content.background,
          [`.${import_x_date_pickers.dateCalendarClasses.root}`]: {
            height: "auto",
            minHeight: "340px",
            maxHeight: "none"
          },
          [`.${import_x_date_pickers.dayCalendarClasses.monthContainer}`]: {
            padding: theme.spacing(3, 0),
            position: "relative",
            [`&.${import_x_date_pickers.pickersSlideTransitionClasses.slideEnterActive}, &.${import_x_date_pickers.pickersSlideTransitionClasses.slideExit}`]: {
              position: "absolute"
            }
          },
          [`.${import_x_date_pickers.dayCalendarClasses.header}`]: {
            borderTop: `1px solid ${palette.content.weekBorder}`,
            borderBottom: `1px solid ${palette.content.weekBorder}`,
            [`.${import_x_date_pickers.dayCalendarClasses.weekDayLabel}`]: {
              color: palette.content.typographySecondary
            }
          },
          [`.${import_x_date_pickers.pickersCalendarHeaderClasses.labelContainer}`]: {
            [`.${import_x_date_pickers.pickersCalendarHeaderClasses.label}`]: {
              color: palette.content.typography
            },
            [`.${import_x_date_pickers.pickersCalendarHeaderClasses.switchViewButton}`]: {
              color: palette.content.typography,
              [`.${import_material10.touchRippleClasses.root}`]: {
                display: "none"
              }
            }
          },
          // pickersArrowSwitcherClasses is not exported from the public API
          ".MuiPickersArrowSwitcher-root": {
            ".MuiPickersArrowSwitcher-spacer": {
              display: "none"
            },
            ".MuiPickersArrowSwitcher-button": {
              margin: 0,
              color: palette.content.typographySecondary,
              [`.${import_material10.touchRippleClasses.root}`]: {
                display: "none"
              }
            }
          }
        },
        [`.${import_x_date_pickers.yearCalendarClasses.button}`]: {
          fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
          fontSize: theme.typography.paragraph.sm.medium.fontSize,
          margin: 0,
          color: palette.selectionButton.text.default,
          '&[tabindex="0"]:not(.Mui-selected)': {
            backgroundColor: palette.selectionButton.background.active,
            color: palette.selectionButton.text.default,
            outline: `1px dashed ${theme.palette.outline}`
          },
          "&.Mui-selected": {
            backgroundColor: palette.selectionButton.background.selected,
            color: palette.selectionButton.text.selected,
            '&[tabindex="0"]': {
              outline: `1px dashed ${theme.palette.outline}`
            }
          },
          "&:hover": {
            backgroundColor: palette.selectionButton.background.active,
            color: palette.selectionButton.text.default
          },
          "&[aria-current='date']:not(.Mui-selected)": {
            backgroundColor: palette.selectionButton.background.current,
            color: palette.selectionButton.text.current
          }
        }
      };
    }
  }
};

// lib/icon-button/theme.ts
var iconButtonTheme = (theme) => {
  switch (theme.name) {
    case "dark": {
      return {
        primary: {
          default: {
            body: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange80
          },
          hover: {
            body: theme.palette.t1.primary.orange45
          },
          focus: {
            body: theme.palette.t1.primary.orange30,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.primary.orange30
          },
          disabled: {
            body: theme.palette.t1.primary.orange75
          }
        },
        secondary: {
          default: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.primary.orange40,
            text: theme.palette.t1.primary.orange40
          },
          hover: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.primary.orange45,
            text: theme.palette.t1.primary.orange45
          },
          focus: {
            body: theme.palette.t1.transparent,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.primary.orange30
          },
          active: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.primary.orange30,
            text: theme.palette.t1.primary.orange30
          },
          disabled: {
            border: theme.palette.t1.primary.orange75,
            text: theme.palette.t1.primary.orange75
          }
        },
        tertiary: {
          default: {
            body: theme.palette.t1.system.ink,
            outline: `1px solid ${theme.palette.t1.system.slate}`,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            outline: `1px solid ${theme.palette.t1.system.slate}`
          },
          focus: {
            body: theme.palette.t1.system.dark60,
            outline: `1px dashed ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark60,
            outline: `1px solid ${theme.palette.t1.system.slate}`
          },
          disabled: {
            outline: `1px solid ${theme.palette.t1.system.slate}`,
            text: theme.palette.t1.system.pewter
          }
        },
        transparent: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.transparent,
            border: theme.palette.t1.system.slate,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            body: theme.palette.t1.transparent,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue60
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
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue70
          },
          active: {
            text: theme.palette.t1.secondary.blue70
          },
          disabled: {
            text: theme.palette.t1.system.silver
          }
        },
        contrast: {
          default: {
            body: theme.palette.t1.system.white,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.cloudy
          },
          focus: {
            body: theme.palette.t1.system.misty,
            outline: `dashed 1px ${theme.palette.outline}`
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
          default: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.white,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          },
          focus: {
            body: theme.palette.t1.system.dark70,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          active: {
            body: theme.palette.t1.system.dark70,
            border: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.misty
          },
          disabled: {
            border: theme.palette.t1.system.dark30,
            text: theme.palette.t1.system.dark30
          }
        },
        elevated: {
          default: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.slate,
            text: theme.palette.t1.system.white
          },
          focus: {
            body: theme.palette.t1.system.ink,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.system.white
          },
          active: {
            text: theme.palette.t1.system.white
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
          hover: {
            body: theme.palette.t1.system.dark70
          },
          focus: {
            body: theme.palette.t1.system.dark70,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        },
        input: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.dark70
          },
          focus: {
            body: theme.palette.t1.system.dark70,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.dark70
          },
          disabled: {
            body: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.pewter
          }
        }
      };
    }
    case "light":
    default: {
      return {
        primary: {
          default: {
            body: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.primary.orange50
          },
          focus: {
            body: theme.palette.t1.primary.orange70,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.primary.orange70
          },
          disabled: {
            body: theme.palette.t1.primary.orange20
          }
        },
        secondary: {
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.primary.orange60,
            text: theme.palette.t1.primary.orange60
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.primary.orange50,
            text: theme.palette.t1.primary.orange50
          },
          focus: {
            body: theme.palette.t1.system.white,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.primary.orange70
          },
          active: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.primary.orange70,
            text: theme.palette.t1.primary.orange70
          },
          disabled: {
            border: theme.palette.t1.primary.orange20,
            text: theme.palette.t1.primary.orange20
          }
        },
        tertiary: {
          default: {
            body: theme.palette.t1.system.misty,
            outline: `1px solid ${theme.palette.t1.transparent}`,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.cloudy,
            outline: `1px solid ${theme.palette.t1.transparent}`
          },
          focus: {
            body: theme.palette.t1.system.offWhite,
            outline: `1px dashed ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.offWhite,
            outline: `1px solid ${theme.palette.t1.transparent}`
          },
          disabled: {
            outline: `1px solid ${theme.palette.t1.transparent}`,
            text: theme.palette.t1.system.silver
          }
        },
        transparent: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue60
          },
          hover: {
            body: theme.palette.t1.secondary.blue10,
            border: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            body: theme.palette.t1.transparent,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue40
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
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.secondary.blue40
          },
          hover: {
            body: theme.palette.t1.system.ink,
            text: theme.palette.t1.secondary.blue50
          },
          focus: {
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.secondary.blue30
          },
          active: {
            text: theme.palette.t1.secondary.blue30
          },
          disabled: {
            text: theme.palette.t1.system.pewter
          }
        },
        contrast: {
          default: {
            body: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.white
          },
          hover: {
            body: theme.palette.t1.system.dark80
          },
          focus: {
            body: theme.palette.t1.system.dark60,
            outline: `dashed 1px ${theme.palette.outline}`
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
          default: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.dark70,
            text: theme.palette.t1.system.dark70
          },
          hover: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.dark80,
            text: theme.palette.t1.system.dark80
          },
          focus: {
            body: theme.palette.t1.system.white,
            outline: `dashed 1px ${theme.palette.outline}`,
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          active: {
            body: theme.palette.t1.system.white,
            border: theme.palette.t1.system.dark60,
            text: theme.palette.t1.system.dark60
          },
          disabled: {
            border: theme.palette.t1.system.cloudy,
            text: theme.palette.t1.system.cloudy
          }
        },
        elevated: {
          default: {
            body: theme.palette.t1.system.white,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite,
            text: theme.palette.t1.system.ink
          },
          focus: {
            body: theme.palette.t1.system.white,
            outline: `dashed 1px ${theme.palette.outline}`,
            text: theme.palette.t1.system.ink
          },
          active: {
            body: theme.palette.t1.system.misty,
            text: theme.palette.t1.system.ink
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
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          focus: {
            body: theme.palette.t1.system.offWhite,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        },
        input: {
          default: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.ink
          },
          hover: {
            body: theme.palette.t1.system.offWhite
          },
          focus: {
            body: theme.palette.t1.system.offWhite,
            outline: `dashed 1px ${theme.palette.outline}`
          },
          active: {
            body: theme.palette.t1.system.offWhite
          },
          disabled: {
            body: theme.palette.t1.transparent,
            text: theme.palette.t1.system.silver
          }
        }
      };
    }
  }
};
var MuiIconButton = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = iconButtonTheme(theme);
      return {
        cursor: "pointer",
        "&.Mui-disabled": {
          pointerEvents: "auto",
          cursor: "not-allowed"
        },
        "&.MuiIconButton-square": {
          borderRadius: "0.25rem"
        },
        "&.MuiIconButton-circle": {
          borderRadius: "50%"
        },
        "&.MuiIconButton-primary": {
          backgroundColor: palette.primary.default.body,
          svg: {
            color: palette.primary.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.primary.hover.body
          },
          "&.Mui-focusVisible": {
            outline: palette.primary.focus.outline,
            backgroundColor: palette.primary.focus.body
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.primary.active.body
          },
          "&.Mui-disabled": {
            backgroundColor: palette.primary.disabled.body
          },
          "&.MuiIconButton-sizeSmall": {
            padding: theme.spacing(1.5),
            svg: {
              width: "20px",
              height: "20px"
            }
          }
        },
        "&.MuiIconButton-secondary": {
          backgroundColor: palette.secondary.default.body,
          border: `1.5px solid ${palette.secondary.default.border}`,
          svg: {
            color: palette.secondary.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.secondary.hover.body,
            borderColor: palette.secondary.hover.border,
            svg: {
              color: palette.secondary.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.secondary.focus.body,
            outline: palette.secondary.focus.outline,
            borderColor: palette.secondary.focus.border
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.secondary.active.body,
            borderColor: palette.secondary.active.border,
            svg: {
              color: palette.secondary.active.text
            }
          },
          "&.Mui-disabled": {
            borderColor: palette.secondary.disabled.border,
            svg: {
              color: palette.secondary.disabled.text
            }
          }
        },
        "&.MuiIconButton-tertiary": {
          backgroundColor: palette.tertiary.default.body,
          outline: palette.tertiary.default.outline,
          svg: {
            color: palette.tertiary.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.tertiary.hover.body,
            outline: palette.tertiary.hover.outline,
            svg: {
              color: palette.tertiary.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.tertiary.focus.body,
            outline: palette.tertiary.focus.outline,
            borderColor: palette.tertiary.focus.border
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: `${palette.tertiary.active.body}!important`,
            outline: palette.tertiary.active.outline,
            svg: {
              color: palette.tertiary.active.text
            }
          },
          "&.Mui-disabled": {
            outline: palette.tertiary.disabled.outline,
            svg: {
              color: palette.tertiary.disabled.text
            }
          }
        },
        "&.MuiIconButton-transparent": {
          backgroundColor: palette.transparent.default.body,
          svg: {
            color: palette.transparent.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.transparent.hover.body,
            borderColor: palette.transparent.hover.border,
            svg: {
              color: palette.transparent.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.transparent.focus.body,
            outline: palette.transparent.focus.outline,
            svg: {
              color: palette.transparent.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.transparent.active.body,
            svg: {
              color: palette.transparent.active.text
            }
          },
          "&.Mui-disabled": {
            backgroundColor: palette.transparent.default.body,
            svg: {
              color: palette.transparent.disabled.text
            },
            ":hover, :active": {
              backgroundColor: palette.transparent.default.body,
              svg: {
                color: palette.transparent.disabled.text
              }
            }
          }
        },
        "&.MuiIconButton-transparentReverse": {
          backgroundColor: palette.transparentReverse.default.body,
          border: `1.5px solid ${palette.transparentReverse.default.border}`,
          svg: {
            color: palette.transparentReverse.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.transparentReverse.hover.body,
            borderColor: palette.transparentReverse.hover.border,
            svg: {
              color: palette.transparentReverse.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.transparentReverse.focus.body,
            outline: palette.transparentReverse.focus.outline,
            svg: {
              color: palette.transparentReverse.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.transparentReverse.active.body,
            svg: {
              color: palette.transparentReverse.active.text
            }
          },
          "&.Mui-disabled": {
            svg: {
              color: palette.transparentReverse.disabled.text
            }
          }
        },
        "&.MuiIconButton-contrast": {
          backgroundColor: palette.contrast.default.body,
          border: `1.5px solid ${palette.contrast.default.border}`,
          svg: {
            color: palette.contrast.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.contrast.hover.body,
            svg: {
              color: palette.contrast.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.contrast.focus.body,
            outline: palette.contrast.focus.outline,
            svg: {
              color: palette.contrast.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.contrast.active.body,
            svg: {
              color: palette.contrast.active.text
            }
          },
          "&.Mui-disabled": {
            backgroundColor: palette.contrast.disabled.body,
            svg: {
              color: palette.contrast.disabled.text
            }
          }
        },
        "&.MuiIconButton-contrastOutline": {
          backgroundColor: palette.contrastOutline.default.body,
          border: `1.5px solid ${palette.contrastOutline.default.border}`,
          svg: {
            color: palette.contrastOutline.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.contrastOutline.hover.body,
            borderColor: palette.contrastOutline.hover.border,
            svg: {
              color: palette.contrastOutline.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.contrastOutline.focus.body,
            outline: palette.contrastOutline.focus.outline,
            borderColor: palette.contrastOutline.focus.border,
            svg: {
              color: palette.contrastOutline.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.contrastOutline.active.body,
            borderColor: palette.contrastOutline.active.border,
            svg: {
              color: palette.contrastOutline.active.text
            }
          },
          "&.Mui-disabled": {
            borderColor: palette.contrastOutline.disabled.border,
            svg: {
              color: palette.contrastOutline.disabled.text
            }
          }
        },
        "&.MuiIconButton-elevated": {
          boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
          backgroundColor: palette.elevated.default.body,
          border: `1.5px solid ${palette.elevated.default.border}`,
          svg: {
            color: palette.elevated.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.elevated.hover.body,
            borderColor: palette.elevated.hover.border,
            svg: {
              color: palette.elevated.hover.text
            }
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.elevated.focus.body,
            svg: {
              color: palette.elevated.focus.text
            },
            outline: palette.elevated.focus.outline
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.elevated.active.body,
            svg: {
              color: palette.elevated.active.text
            }
          },
          "&.Mui-disabled": {
            backgroundColor: palette.elevated.default.body,
            borderColor: palette.elevated.disabled.border,
            svg: {
              color: palette.elevated.disabled.text
            },
            ":hover, :active": {
              backgroundColor: palette.elevated.default.body,
              borderColor: palette.elevated.disabled.border,
              svg: {
                color: palette.elevated.disabled.text
              }
            }
          }
        },
        "&.MuiIconButton-header, &.MuiIconButton-input": {
          backgroundColor: palette.header.default.body,
          svg: {
            color: palette.header.default.text
          },
          ":hover, &.Mui-focusVisible:hover, &.Mui-hoverVisible": {
            backgroundColor: palette.header.hover.body
          },
          "&.Mui-focusVisible": {
            backgroundColor: palette.header.focus.body,
            outline: palette.header.focus.outline,
            svg: {
              color: palette.header.focus.text
            }
          },
          ":active, &.Mui-activeVisible": {
            backgroundColor: palette.header.active.body
          },
          "&.Mui-disabled": {
            backgroundColor: palette.header.disabled.body,
            svg: {
              color: palette.header.disabled.text
            }
          }
        },
        "&.MuiIconButton-header": {
          width: "48px",
          height: "48px"
        },
        "&.MuiIconButton-input": {
          padding: theme.spacing(1.5),
          svg: {
            width: "24px",
            height: "24px",
            color: palette.input.default.text
          },
          width: "36px",
          height: "36px",
          "&.MuiIconButton-sizeSmall": {
            svg: {
              width: "20px",
              height: "20px"
            },
            width: "28px",
            height: "28px"
          }
        }
      };
    }
  }
};

// lib/autocomplete/theme.ts
var autocompleteTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        menuBackground: theme.palette.t1.system.dark60
      };
    case "light":
      return {
        menuBackground: theme.palette.t1.system.white
      };
  }
};
var MuiAutocomplete = {
  styleOverrides: {
    root: {
      minWidth: 220
    }
  }
};
var MuiPaper = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = autocompleteTheme(theme);
      return {
        "&.MuiAutocomplete-paper": {
          padding: 0,
          ".MuiAutocomplete-listbox": {
            backgroundColor: palette.menuBackground,
            padding: 0
          }
        }
      };
    }
  }
};

// lib/tabs/theme.ts
var tabsTheme = (theme) => {
  switch (theme.name) {
    case "light": {
      return {
        text: {
          default: theme.palette.t1.system.dark30,
          active: theme.palette.t1.system.ink,
          selectedHover: theme.palette.t1.primary.orange60,
          disabled: theme.palette.t1.system.silver
        },
        background: {
          default: theme.palette.t1.system.white,
          hover: theme.palette.t1.secondary.blue10,
          active: theme.palette.t1.secondary.blue20
        },
        border: theme.palette.t1.primary.orange60
      };
    }
    case "dark": {
      return {
        text: {
          default: theme.palette.t1.system.silver,
          active: theme.palette.t1.system.white,
          selectedHover: theme.palette.t1.primary.orange40,
          disabled: theme.palette.t1.system.pewter
        },
        background: {
          default: theme.palette.t1.system.ink,
          hover: theme.palette.t1.system.dark60,
          active: theme.palette.t1.system.dark70
        },
        border: theme.palette.t1.primary.orange40
      };
    }
  }
};
var MuiTab = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: ({ theme }) => {
      const palette = tabsTheme(theme);
      return {
        textTransform: "none",
        fontSize: theme.typography.paragraph.md.regular.fontSize,
        fontFamily: theme.typography.paragraph.md.regular.fontFamily,
        padding: theme.spacing(0, 6),
        height: 48,
        background: palette.background.default,
        color: palette.text.default,
        "&:hover": {
          background: palette.background.hover,
          color: palette.text.active
        },
        "&:active": {
          background: palette.background.active,
          color: palette.text.active
        },
        "&.Mui-disabled": {
          background: palette.background.default,
          color: palette.text.disabled
        },
        "&.Mui-focusVisible": {
          border: `1px dashed ${theme.palette.outline}`
        },
        "&.Mui-selected": {
          background: palette.background.active,
          color: palette.text.active,
          fontFamily: theme.typography.paragraph.md.medium.fontFamily,
          "&:hover": {
            background: palette.background.active,
            color: palette.text.selectedHover
          }
        }
      };
    }
  }
};
var MuiTabs = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = tabsTheme(theme);
      return {
        ".MuiTabs-indicator": {
          backgroundColor: palette.border
        }
      };
    }
  }
};

// lib/divider/theme.ts
var dividerTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return { borderColor: theme.palette.t1.system.slate };
    case "light":
    default:
      return { borderColor: theme.palette.t1.system.silver };
  }
};
var MuiDivider = {
  styleOverrides: {
    root: ({ theme }) => dividerTheme(theme)
  }
};

// lib/theme/themes/common.ts
var import_styles5 = require("@mui/material/styles");
var baseFontStyles = {
  h1: { fontSize: "4.5rem", lineHeight: "5.625rem" },
  h2: { fontSize: "3.75rem", lineHeight: "4.625rem" },
  h3: { fontSize: "3rem", lineHeight: "3.75rem" },
  h4: { fontSize: "2.25rem", lineHeight: "2.75rem" },
  h5: { fontSize: "1.875rem", lineHeight: "2.275rem" },
  h6: { fontSize: "1.5rem", lineHeight: "2rem" },
  h1sm: { fontSize: "2.25rem", lineHeight: "2.75rem" },
  h2sm: { fontSize: "1.875rem", lineHeight: "2.375rem" },
  h3sm: { fontSize: "1.5rem", lineHeight: "2rem" },
  h4sm: { fontSize: "1.25rem", lineHeight: "1.875rem" },
  h5sm: { fontSize: "1.25rem", lineHeight: "1.875rem" },
  h6sm: { fontSize: "1.125rem", lineHeight: "1.75rem" },
  paragraph: {
    xl: { fontSize: "1.25rem", lineHeight: "1.875rem" },
    lg: { fontSize: "1.125rem", lineHeight: "1.75rem" },
    md: { fontSize: "1rem", lineHeight: "1.5rem" },
    sm: { fontSize: "0.875rem", lineHeight: "1.25rem" },
    xs: { fontSize: "0.75rem", lineHeight: "1.125rem" }
  },
  caption: { fontSize: "0.625rem", lineHeight: "1rem" },
  overline: {
    fontSize: "0.75rem",
    lineHeight: 1.33,
    textTransform: "uppercase",
    letterSpacing: "0.00344rem"
  }
};
var common = (0, import_styles5.createTheme)({
  name: "common",
  breakpoints: {
    values: {
      xs: 0,
      xsTypo: 0,
      sm: 600,
      smTypo: 376,
      md: 900,
      mdTypo: 768,
      lgTypo: 1024,
      lg: 1200,
      xlTypo: 1440,
      xl: 1536
    }
  },
  components: {
    MuiFab: { defaultProps: { size: "medium" } },
    MuiListItem: { defaultProps: { dense: false } },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          width: "auto"
        }
      }
    }
  },
  spacing: 4,
  shadows: [
    "none",
    "0px 2px 5px 0px rgba(0, 0, 0, 0.10)",
    // Depth 1
    "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
    // Depth 2
    "0px 1px 4px 0px rgba(0, 0, 0, 0.16)",
    // Header Depth
    ...Array(21).fill("none")
  ],
  shape: { borderRadius: 4 },
  typography: {
    fontFamily: "Centra Regular",
    h1: {
      regular: { ...baseFontStyles.h1, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h1, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h1, fontFamily: "Centra Bold" }
    },
    h2: {
      regular: { ...baseFontStyles.h2, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h2, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h2, fontFamily: "Centra Bold" }
    },
    h3: {
      regular: { ...baseFontStyles.h3, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h3, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h3, fontFamily: "Centra Bold" }
    },
    h4: {
      regular: { ...baseFontStyles.h4, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h4, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h4, fontFamily: "Centra Bold" }
    },
    h5: {
      regular: { ...baseFontStyles.h5, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h5, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h5, fontFamily: "Centra Bold" }
    },
    h6: {
      regular: { ...baseFontStyles.h6, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h6, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h6, fontFamily: "Centra Bold" }
    },
    h1sm: {
      regular: { ...baseFontStyles.h1sm, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h1sm, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h1sm, fontFamily: "Centra Bold" }
    },
    h2sm: {
      regular: { ...baseFontStyles.h2sm, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h2sm, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h2sm, fontFamily: "Centra Bold" }
    },
    h3sm: {
      regular: { ...baseFontStyles.h3sm, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h3sm, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h3sm, fontFamily: "Centra Bold" }
    },
    h4sm: {
      regular: { ...baseFontStyles.h4sm, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h4sm, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h4sm, fontFamily: "Centra Bold" }
    },
    h5sm: {
      regular: { ...baseFontStyles.h5sm, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h5sm, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h5sm, fontFamily: "Centra Bold" }
    },
    h6sm: {
      regular: { ...baseFontStyles.h6sm, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.h6sm, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.h6sm, fontFamily: "Centra Bold" }
    },
    paragraph: {
      xl: {
        regular: {
          ...baseFontStyles.paragraph.xl,
          fontFamily: "Centra Regular"
        },
        medium: {
          ...baseFontStyles.paragraph.xl,
          fontFamily: "Centra Medium"
        },
        bold: { ...baseFontStyles.paragraph.xl, fontFamily: "Centra Bold" }
      },
      lg: {
        regular: {
          ...baseFontStyles.paragraph.lg,
          fontFamily: "Centra Regular"
        },
        medium: {
          ...baseFontStyles.paragraph.lg,
          fontFamily: "Centra Medium"
        },
        bold: { ...baseFontStyles.paragraph.lg, fontFamily: "Centra Bold" }
      },
      md: {
        regular: {
          ...baseFontStyles.paragraph.md,
          fontFamily: "Centra Regular"
        },
        medium: {
          ...baseFontStyles.paragraph.md,
          fontFamily: "Centra Medium"
        },
        bold: { ...baseFontStyles.paragraph.md, fontFamily: "Centra Bold" }
      },
      sm: {
        regular: {
          ...baseFontStyles.paragraph.sm,
          fontFamily: "Centra Regular"
        },
        medium: {
          ...baseFontStyles.paragraph.sm,
          fontFamily: "Centra Medium"
        },
        bold: { ...baseFontStyles.paragraph.sm, fontFamily: "Centra Bold" }
      },
      xs: {
        regular: {
          ...baseFontStyles.paragraph.xs,
          fontFamily: "Centra Regular"
        },
        medium: {
          ...baseFontStyles.paragraph.xs,
          fontFamily: "Centra Medium"
        },
        bold: { ...baseFontStyles.paragraph.xs, fontFamily: "Centra Bold" }
      }
    },
    caption: {
      regular: { ...baseFontStyles.caption, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.caption, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.caption, fontFamily: "Centra Bold" }
    },
    overline: {
      regular: { ...baseFontStyles.overline, fontFamily: "Centra Regular" },
      medium: { ...baseFontStyles.overline, fontFamily: "Centra Medium" },
      bold: { ...baseFontStyles.overline, fontFamily: "Centra Bold" }
    }
  }
});

// lib/calendar/theme.ts
var import_x_date_pickers2 = require("@mui/x-date-pickers");
var getCalendarPalette = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        background: theme.palette.t1.system.dark80,
        typography: theme.palette.t1.system.white,
        typographySecondary: theme.palette.t1.system.pewter,
        typographyButtons: theme.palette.t1.system.cloudy,
        weekBorder: theme.palette.t1.system.dark30,
        outsideMonthText: theme.palette.t1.system.silver,
        selectionButton: {
          text: {
            default: theme.palette.t1.system.white,
            current: theme.palette.t1.primary.orange20,
            selected: theme.palette.t1.system.ink
          },
          background: {
            active: theme.palette.t1.system.ink,
            selected: theme.palette.t1.secondary.blue40,
            current: theme.palette.t1.primary.orange75
          }
        }
      };
    case "light":
    default:
      return {
        background: theme.palette.t1.system.white,
        typography: theme.palette.t1.system.ink,
        typographySecondary: theme.palette.t1.system.silver,
        typographyButtons: theme.palette.t1.system.pewter,
        weekBorder: theme.palette.t1.system.misty,
        outsideMonthText: theme.palette.t1.system.silver,
        selectionButton: {
          text: {
            default: theme.palette.t1.system.ink,
            current: theme.palette.t1.primary.orange70,
            selected: theme.palette.t1.system.white
          },
          background: {
            active: theme.palette.t1.secondary.blue20,
            selected: theme.palette.t1.secondary.blue60,
            current: theme.palette.t1.primary.orange10
          }
        }
      };
  }
};
var MuiPickersDay = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: ({ theme }) => {
      const palette = getCalendarPalette(theme);
      return {
        fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
        fontSize: theme.typography.paragraph.sm.medium.fontSize,
        width: "40px",
        height: "40px",
        margin: 0,
        color: palette.selectionButton.text.default,
        "&.week-enabled": {
          borderRadius: 0
        },
        "&.Mui-focusVisible": {
          backgroundColor: palette.selectionButton.background.active,
          outline: `1px dashed ${theme.palette.outline}`
        },
        "&.Mui-selected": {
          backgroundColor: palette.selectionButton.background.selected,
          color: palette.selectionButton.text.selected,
          "&.week-enabled": {
            backgroundColor: "transparent"
          }
        },
        "&:hover": {
          backgroundColor: palette.selectionButton.background.active,
          "&.week-enabled": {
            backgroundColor: "transparent"
          }
        },
        "&.MuiPickersDay-today": {
          border: "none",
          backgroundColor: "transparent",
          backgroundImage: `radial-gradient(circle closest-side, ${palette.selectionButton.background.current} 100%, transparent 100%)`,
          color: palette.selectionButton.text.current
        },
        "&.MuiPickersDay-dayOutsideMonth": {
          color: palette.outsideMonthText
        },
        "&.range-start": {
          position: "relative",
          zIndex: 1,
          borderRadius: "50%",
          "& > *": {
            position: "relative",
            zIndex: 2
          }
        },
        "&.range-start::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          right: 0,
          height: "100%",
          width: "50%",
          backgroundColor: palette.selectionButton.background.active,
          zIndex: -2,
          pointerEvents: "none"
        },
        "&.range-start::after": {
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          backgroundColor: palette.selectionButton.background.selected,
          zIndex: -1,
          pointerEvents: "none"
        },
        "&.range-end": {
          position: "relative",
          zIndex: 1,
          borderRadius: "50%",
          "& > *": {
            position: "relative",
            zIndex: 2
          },
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: "50%",
            left: 0,
            height: "100%",
            width: "50%",
            backgroundColor: palette.selectionButton.background.active,
            zIndex: -2,
            pointerEvents: "none"
          },
          "&:after": {
            content: '""',
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backgroundColor: palette.selectionButton.background.selected,
            zIndex: -1,
            pointerEvents: "none"
          }
        },
        "&.range-between": {
          borderRadius: "0px",
          backgroundColor: palette.selectionButton.background.active,
          color: palette.selectionButton.text.default,
          "&:hover": {
            backgroundColor: palette.selectionButton.background.active,
            color: palette.selectionButton.text.default
          }
        }
      };
    }
  }
};
var MuiDateCalendar = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = getCalendarPalette(theme);
      return {
        ".MuiDayCalendar-weekContainer": {
          position: "relative",
          "&.week-hovers, &:has(.Mui-focusVisible)": {
            "&:before": {
              backgroundColor: palette.selectionButton.background.active,
              borderRadius: theme.spacing(6),
              content: '""',
              position: "absolute",
              top: 0,
              left: 20,
              right: 20,
              bottom: 0,
              pointerEvents: "none"
            }
          },
          "&.week-selected": {
            "&:before": {
              backgroundColor: palette.selectionButton.background.selected,
              borderRadius: theme.spacing(6),
              content: '""',
              position: "absolute",
              top: 0,
              left: 20,
              right: 20,
              bottom: 0,
              pointerEvents: "none"
            }
          }
        },
        height: "auto",
        minHeight: "340px",
        maxHeight: "none",
        backgroundColor: palette.background,
        margin: 0,
        ".MuiDayCalendar-monthContainer": {
          padding: theme.spacing(3, 0),
          position: "relative",
          "&.MuiPickersSlideTransition-slideEnterActive, &.MuiPickersSlideTransition-slideExit": {
            position: "absolute"
          }
        },
        ".MuiDayCalendar-header": {
          borderTop: `1px solid ${palette.weekBorder}`,
          borderBottom: `1px solid ${palette.weekBorder}`,
          ".MuiDayCalendar-weekDayLabel": {
            color: palette.typographySecondary
          }
        },
        ".MuiPickersCalendarHeader-root": {
          ".MuiButtonBase-root": {
            "&.Mui-focusVisible": {
              outline: `1px dashed ${theme.palette.outline}`
            }
          },
          ".MuiPickersCalendarHeader-labelContainer": {
            ".MuiPickersCalendarHeader-label": {
              color: palette.typography
            },
            ".MuiPickersCalendarHeader-switchViewButton": {
              color: palette.typography,
              ".MuiTouchRipple-root": {
                display: "none"
              }
            }
          },
          ".MuiPickersArrowSwitcher-root": {
            ".MuiPickersArrowSwitcher-spacer": {
              display: "none"
            },
            ".MuiPickersArrowSwitcher-button": {
              margin: 0,
              color: palette.typographyButtons,
              ".MuiTouchRipple-root": {
                display: "none"
              }
            }
          }
        },
        [`.${import_x_date_pickers2.yearCalendarClasses.button}`]: {
          fontFamily: theme.typography.paragraph.sm.medium.fontFamily,
          fontSize: theme.typography.paragraph.sm.medium.fontSize,
          margin: theme.spacing(0.5, 0),
          color: palette.selectionButton.text.default,
          '&[tabindex="0"]:not(.Mui-selected)': {
            backgroundColor: palette.selectionButton.background.active,
            outline: `1px dashed ${theme.palette.outline}`
          },
          "&.Mui-selected": {
            backgroundColor: palette.selectionButton.background.selected,
            color: palette.selectionButton.text.selected,
            '&[tabindex="0"]': {
              outline: `1px dashed ${theme.palette.outline}`
            }
          },
          "&:hover": {
            backgroundColor: palette.selectionButton.background.active,
            color: palette.selectionButton.text.default
          },
          "&.MuiPickersYear-currentYear:not(.Mui-selected)": {
            backgroundColor: palette.selectionButton.background.current,
            color: palette.selectionButton.text.current
          }
        }
      };
    }
  }
};
var calendarTheme = {
  dark: {
    name: "calendar",
    styles: {
      background: COLORS.SYSTEM.DARK_80,
      typography: COLORS.SYSTEM.WHITE,
      typographySecondary: COLORS.SYSTEM.PEWTER,
      typographyButtons: COLORS.SYSTEM.CLOUDY,
      weekBorder: COLORS.SYSTEM.DARK_30,
      selectionButton: {
        text: {
          default: COLORS.SYSTEM.WHITE,
          current: COLORS.PRIMARY.ORANGE_20,
          selected: COLORS.SYSTEM.INK
        },
        background: {
          active: COLORS.SYSTEM.INK,
          selected: COLORS.SECONDARY.BLUE_40,
          current: COLORS.PRIMARY.ORANGE_75
        }
      }
    }
  },
  light: {
    name: "calendar",
    styles: {
      background: COLORS.SYSTEM.WHITE,
      typography: COLORS.SYSTEM.INK,
      typographySecondary: COLORS.SYSTEM.SILVER,
      typographyButtons: COLORS.SYSTEM.PEWTER,
      weekBorder: COLORS.SYSTEM.MISTY,
      selectionButton: {
        text: {
          default: COLORS.SYSTEM.INK,
          current: COLORS.PRIMARY.ORANGE_70,
          selected: COLORS.SYSTEM.WHITE
        },
        background: {
          active: COLORS.SECONDARY.BLUE_20,
          selected: COLORS.SECONDARY.BLUE_60,
          current: COLORS.PRIMARY.ORANGE_10
        }
      }
    }
  }
};

// lib/linear-progress/theme.ts
var linearProgressTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        default: theme.palette.t1.secondary.blue40,
        success: theme.palette.t1.accent.green30,
        error: theme.palette.t1.error.error30,
        brand: theme.palette.t1.primary.orange40,
        background: theme.palette.t1.system.slate
      };
    case "light":
    default:
      return {
        default: theme.palette.t1.secondary.blue60,
        success: theme.palette.t1.success.success40,
        error: theme.palette.t1.error.error40,
        brand: theme.palette.t1.primary.orange50,
        background: theme.palette.t1.system.misty
      };
  }
};
var MuiLinearProgress = {
  defaultProps: {
    variant: "indeterminate",
    color: "default"
  },
  styleOverrides: {
    root: ({ theme }) => {
      const palette = linearProgressTheme(theme);
      return {
        backgroundColor: palette.background,
        "&.T1-linearProgress": {
          "&-xs": {
            height: "4px",
            borderRadius: "2px",
            "& .MuiLinearProgress-bar": { borderRadius: "2px" }
          },
          "&-sm": {
            height: "8px",
            borderRadius: "4px",
            "& .MuiLinearProgress-bar": { borderRadius: "4px" }
          },
          "&-md": {
            height: "12px",
            borderRadius: "6px",
            "& .MuiLinearProgress-bar": { borderRadius: "6px" }
          },
          "&-lg": {
            height: "16px",
            borderRadius: "8px",
            "& .MuiLinearProgress-bar": { borderRadius: "8px" }
          },
          "&-xl": {
            height: "20px",
            borderRadius: "10px",
            "& .MuiLinearProgress-bar": { borderRadius: "10px" }
          },
          "&-xxl": {
            height: "24px",
            borderRadius: "12px",
            "& .MuiLinearProgress-bar": { borderRadius: "12px" }
          }
        }
      };
    },
    bar: ({
      theme,
      ownerState
    }) => {
      const palette = linearProgressTheme(theme);
      const colorMap = {
        default: palette.default,
        success: palette.success,
        error: palette.error,
        brand: palette.brand
      };
      return {
        backgroundColor: colorMap[ownerState.color ?? "default"] ?? palette.default
      };
    }
  }
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
var MuiInputLabel = {
  defaultProps: {
    variant: "outlined"
  },
  styleOverrides: {
    root: getInputLabelStyles
  }
};

// lib/link/theme.ts
var linkTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        default: theme.palette.t1.secondary.blue40,
        hover: theme.palette.t1.secondary.blue50,
        active: theme.palette.t1.secondary.blue30,
        disabled: theme.palette.t1.system.pewter
      };
    case "light":
    default:
      return {
        default: theme.palette.t1.secondary.blue60,
        hover: theme.palette.t1.secondary.blue50,
        active: theme.palette.t1.secondary.blue70,
        disabled: theme.palette.t1.system.silver
      };
  }
};
var MuiLink = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = linkTheme(theme);
      return {
        color: palette.default,
        fontFamily: theme.typography.paragraph.md.medium.fontFamily,
        fontSize: theme.typography.paragraph.md.medium.fontSize,
        textDecoration: "none",
        cursor: "pointer",
        display: "inline-block",
        padding: theme.spacing(1, 2),
        borderRadius: theme.spacing(1),
        position: "relative",
        height: theme.typography.paragraph.md.medium.lineHeight,
        whiteSpace: "nowrap",
        "&:after": {
          content: '""',
          position: "absolute",
          left: theme.spacing(2),
          right: theme.spacing(2),
          bottom: theme.spacing(1)
        },
        "&:hover": {
          color: palette.hover,
          "&:after": {
            borderBottom: `1.5px solid ${palette.hover}`
          }
        },
        "&:active": {
          color: palette.active,
          "&:after": {
            borderBottom: `1.5px solid ${palette.active}`
          }
        },
        "&:focus": {
          color: palette.active,
          outline: `dashed 1px ${theme.palette.outline}`,
          "&:after": {
            borderBottom: `1.5px solid ${palette.active}`
          }
        },
        "&.T1-link-disabled": {
          color: palette.disabled,
          pointerEvents: "auto",
          cursor: "not-allowed",
          "&:hover, &:active, &:focus": {
            color: palette.disabled,
            "&:after": {
              borderBottom: "none"
            }
          }
        },
        "&.T1-link-medium": {
          fontSize: theme.typography.paragraph.sm.medium.fontSize,
          lineHeight: theme.typography.paragraph.sm.medium.lineHeight,
          padding: theme.spacing(1, 1.5),
          height: theme.typography.paragraph.sm.medium.lineHeight,
          "&:after": {
            left: theme.spacing(1.5),
            right: theme.spacing(1.5),
            bottom: theme.spacing(1)
          }
        },
        "&.T1-link-small": {
          fontSize: theme.typography.paragraph.xs.medium.fontSize,
          lineHeight: theme.typography.paragraph.xs.medium.lineHeight,
          padding: theme.spacing(0.75),
          height: theme.typography.paragraph.xs.medium.lineHeight,
          "&:after": {
            left: theme.spacing(0.75),
            right: theme.spacing(0.75),
            bottom: theme.spacing(0.75)
          }
        }
      };
    }
  }
};

// lib/list/theme.ts
var listTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        text: theme.palette.t1.system.white,
        secondaryText: theme.palette.t1.system.silver,
        divider: theme.palette.t1.system.slate,
        background: theme.palette.t1.system.ink,
        primary: {
          icon: theme.palette.t1.primary.orange40,
          iconBackground: theme.palette.t1.primary.orange80
        },
        secondary: {
          icon: theme.palette.t1.secondary.blue40,
          iconBackground: theme.palette.t1.system.slate
        },
        hover: {
          background: theme.palette.t1.system.slate,
          iconBackground: theme.palette.t1.system.slate
        },
        active: {
          background: theme.palette.t1.system.dark80
        },
        focused: {
          background: theme.palette.t1.system.slate,
          iconBackground: theme.palette.t1.system.slate
        },
        disabled: {
          background: theme.palette.t1.system.dark60
        }
      };
    case "light":
    default:
      return {
        text: theme.palette.t1.system.ink,
        secondaryText: theme.palette.t1.system.dark30,
        divider: theme.palette.t1.system.cloudy,
        background: theme.palette.t1.system.white,
        primary: {
          icon: theme.palette.t1.primary.orange50,
          iconBackground: theme.palette.t1.primary.orange10
        },
        secondary: {
          icon: theme.palette.t1.secondary.blue60,
          iconBackground: theme.palette.t1.secondary.blue10
        },
        hover: {
          background: theme.palette.t1.secondary.blue10,
          iconBackground: theme.palette.t1.secondary.blue10
        },
        active: {
          background: theme.palette.t1.secondary.blue20
        },
        focused: {
          background: theme.palette.t1.secondary.blue20,
          iconBackground: theme.palette.t1.secondary.blue20
        },
        disabled: {
          background: theme.palette.t1.system.offWhite
        }
      };
  }
};
var MuiList = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = listTheme(theme);
      return {
        boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)",
        padding: 0,
        flexGrow: 1,
        ".MuiListItem-root": {
          padding: theme.spacing(1.5, 3),
          position: "relative",
          alignItems: "flex-start",
          cursor: "pointer",
          backgroundColor: palette.background,
          "&:focus-visible": {
            outline: `1px dashed ${theme.palette.outline}`,
            backgroundColor: palette.focused.background,
            zIndex: 1,
            "&.T1-listItem-secondary": {
              ".MuiListItemIcon-root": {
                backgroundColor: palette.focused.iconBackground
              }
            }
          },
          "&.T1-listItem-primary": {
            ".MuiListItemIcon-root": {
              backgroundColor: palette.primary.iconBackground,
              svg: {
                fill: palette.primary.icon
              }
            }
          },
          "&.T1-listItem-secondary": {
            ".MuiListItemIcon-root": {
              backgroundColor: palette.secondary.iconBackground,
              svg: {
                fill: palette.secondary.icon
              }
            }
          },
          ".MuiListItemIcon-root": {
            minWidth: 0,
            width: "24px",
            height: "24px",
            borderRadius: "100px",
            margin: theme.spacing(1.5),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            svg: {
              width: "15px",
              height: "15px"
            }
          },
          ".MuiListItemText-root": {
            padding: theme.spacing(1.5),
            margin: 0,
            ".MuiListItemText-primary": {
              fontFamily: theme.typography.paragraph.md.regular.fontFamily,
              color: palette.text,
              fontSize: theme.typography.paragraph.md.regular.fontSize,
              lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
              height: "24px",
              display: "flex",
              alignItems: "center"
            },
            ".MuiListItemText-secondary": {
              fontFamily: theme.typography.paragraph.md.regular.fontFamily,
              color: palette.secondaryText,
              fontSize: theme.typography.paragraph.sm.regular.fontSize,
              lineHeight: theme.typography.paragraph.xs.regular.lineHeight,
              height: "20px",
              display: "flex",
              alignItems: "center"
            }
          },
          ".MuiListItemSecondaryAction-root": {
            color: palette.secondaryText,
            position: "static",
            paddingLeft: theme.spacing(2),
            transform: "none",
            alignSelf: "center"
          },
          "&.T1-listItem-highlight": {
            "&:after": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "2px"
            },
            "&.T1-listItem-primary": {
              "&:after": {
                backgroundColor: palette.primary.icon
              }
            },
            "&.T1-listItem-secondary": {
              "&:after": {
                backgroundColor: palette.secondary.icon
              }
            }
          },
          "&:hover": {
            backgroundColor: palette.hover.background,
            "&.T1-listItem-secondary": {
              ".MuiListItemIcon-root": {
                backgroundColor: palette.hover.iconBackground
              }
            }
          },
          "&:active": {
            backgroundColor: palette.active.background
          },
          "&.Mui-disabled": {
            opacity: 1,
            backgroundColor: palette.disabled.background
          },
          "&.MuiListItem-divider": {
            borderBottom: "none",
            "&:before": {
              content: '""',
              position: "absolute",
              bottom: 0,
              right: 0,
              left: 0,
              height: "1px",
              backgroundColor: palette.divider
            }
          }
        },
        ".MuiListItem-dense": {
          padding: theme.spacing(0.75, 1.5),
          ".MuiListItemIcon-root": {
            svg: {
              width: "11px",
              height: "11px"
            }
          },
          ".MuiListItemText-root": {
            padding: theme.spacing(1.5),
            margin: 0,
            ".MuiListItemText-primary": {
              fontSize: theme.typography.paragraph.sm.regular.fontSize,
              lineHeight: theme.typography.paragraph.xs.regular.lineHeight
            },
            ".MuiListItemText-secondary": {
              fontSize: theme.typography.paragraph.xs.regular.fontSize,
              lineHeight: theme.typography.paragraph.xs.regular.lineHeight
            }
          }
        }
      };
    }
  }
};

// lib/input-adornment/theme.ts
var inputAdornmentTheme = (theme) => {
  switch (theme.name) {
    case "dark":
      return {
        resting: theme.palette.t1.system.pewter,
        disabled: theme.palette.t1.system.pewter
      };
    case "light":
    default:
      return {
        resting: theme.palette.t1.system.pewter,
        disabled: theme.palette.t1.system.silver
      };
  }
};
var MuiInputAdornment = {
  styleOverrides: {
    root: ({ theme }) => {
      const palette = inputAdornmentTheme(theme);
      return {
        height: "100%",
        padding: theme.spacing(3),
        boxSizing: "border-box",
        margin: 0,
        "&& .MuiTypography-root": {
          color: palette.resting
        },
        "&& .MuiSvgIcon-root": {
          fill: palette.resting
        },
        "&& .MuiIconButton-root .MuiSvgIcon-root": {
          fill: palette.resting
        },
        ".Mui-disabled &": {
          "&& .MuiTypography-root": {
            color: palette.disabled
          },
          "&& .MuiSvgIcon-root": {
            fill: palette.disabled
          },
          "&& .MuiIconButton-root .MuiSvgIcon-root": {
            fill: palette.disabled
          }
        }
      };
    }
  }
};

// lib/skeleton/theme.ts
var barChartLoadingSkeletonTheme = {
  dark: {
    name: "barChartLoadingSkeleton",
    styles: {
      containerBg: COLORS.SYSTEM.INK,
      containerBorder: "rgba(255, 255, 255, 0.12)",
      titleColor: COLORS.SYSTEM.OFF_WHITE,
      skeletonBg: COLORS.SYSTEM.SLATE,
      gridLineBg: COLORS.SYSTEM.INK,
      shimmerGradient: "linear-gradient(90deg, transparent 0%, rgba(71, 85, 105, 0.6) 50%, transparent 100%)"
    }
  },
  light: {
    name: "barChartLoadingSkeleton",
    styles: {
      containerBg: COLORS.SYSTEM.WHITE,
      containerBorder: "rgba(0, 0, 0, 0.12)",
      titleColor: COLORS.SYSTEM.INK,
      skeletonBg: COLORS.SYSTEM.MISTY,
      gridLineBg: COLORS.SYSTEM.OFF_WHITE,
      shimmerGradient: "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)"
    }
  }
};

// lib/buttons/component.tsx
var import_react5 = __toESM(require("react"), 1);
var import_material16 = require("@mui/material");
var import_useMediaQuery = __toESM(require("@mui/material/useMediaQuery"), 1);
var import_styles9 = require("@mui/material/styles");

// lib/buttons/constants.ts
var STROKE_WIDTH = {
  large: "3px",
  medium: "4px",
  small: "5px",
  extraSmall: "5.5px"
};

// lib/circular-progress/theme.ts
var import_material11 = require("@mui/material");

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
var StyledCircularProgressWrapper = (0, import_material11.styled)(
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
var StyledStepperCircularProgressWrapper = (0, import_material11.styled)("div")(({
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
var import_material12 = require("@mui/material");
var import_jsx_runtime4 = require("react/jsx-runtime");
var CircularProgress = ({
  color = "default",
  size = "medium",
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    StyledCircularProgressWrapper,
    {
      size,
      color,
      className: "T1-CircularProgress-wrapper",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "svg",
          {
            className: "CircularProgress-background",
            viewBox: "22 22 44 44",
            xmlns: "http://www.w3.org/2000/svg",
            style: { maxWidth: "100%", maxHeight: "100%" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("circle", { cx: "44", cy: "44", r: "20.2" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_material12.CircularProgress, { ...props, size: SIZE_MAP[size] })
      ]
    }
  );
};

// lib/buttons/component.tsx
var import_icons_material2 = require("@mui/icons-material");

// lib/menu/component.tsx
var import_react2 = __toESM(require("react"), 1);
var import_material13 = require("@mui/material");

// lib/cms/component.tsx
var import_react = require("react");
var import_react_intl = require("react-intl");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
    mapper[tag] = (chunks) => (0, import_react.createElement)(tag, {}, chunks);
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

// lib/menu/component.tsx
var import_styles6 = require("@mui/material/styles");
var import_jsx_runtime6 = require("react/jsx-runtime");
var StyledMenu = (0, import_styles6.styled)(import_material13.Menu)(() => ({
  padding: 0,
  ".MuiList-root": {
    padding: 0
  }
}));
var Menu = import_react2.default.forwardRef(
  (props, ref) => {
    const propsWithDefault = {
      variant: "default",
      ...props
    };
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
var MenuWithCMS = import_react2.default.forwardRef(
  ({ contentId, variant, ...rest }, ref) => {
    const intl = (0, import_react_intl.useIntl)();
    const keys = Object.keys(intl.messages).filter(
      (key) => key.startsWith(`${contentId}.items`) && key.endsWith(".label")
    ).map((key) => intl.messages[key]);
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      StyledMenu,
      {
        ...rest,
        elevation: 1,
        ref,
        className: variant ? "menu-breadcrumbs" : "",
        "data-testid": "menu",
        children: keys.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(MenuItem, { children: item }, item.toString()))
      }
    );
  }
);

// lib/checkbox/component.tsx
var import_react3 = require("react");
var import_material14 = require("@mui/material");
var import_styles7 = require("@mui/material/styles");
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
var import_material15 = require("@mui/material");
var import_styles8 = require("@mui/material/styles");
var import_react4 = require("react");
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
var Typography = (0, import_react4.forwardRef)(
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
var StyledTypography = (0, import_styles8.styled)(import_material15.Typography)(({
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
    import_material16.Button,
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

// lib/calendarEvent/theme.ts
var calendarEventTheme = {
  dark: {
    name: "calendarEvent",
    styles: {
      background: COLORS.SYSTEM.DARK_80,
      border: COLORS.SYSTEM.DARK_30,
      range: {
        active: {
          background: "#FF806440",
          text: COLORS.PRIMARY.ORANGE_40
        },
        inactive: {
          background: "rgba(117, 68, 63, 0.15)"
        }
      },
      dayOutsideMonth: COLORS.SYSTEM.SILVER,
      events: {
        "pay-period": {
          background: COLORS.PRIMARY.ORANGE_40,
          border: COLORS.PRIMARY.ORANGE_40,
          text: COLORS.SYSTEM.WHITE
        },
        "pay-period-end-date": {
          background: COLORS.PRIMARY.ORANGE_75,
          text: COLORS.SYSTEM.WHITE
        },
        "pay-date": {
          background: "rgba(248, 250, 255, 0.10)",
          border: COLORS.SECONDARY.BLUE_40,
          text: COLORS.SYSTEM.WHITE
        },
        "changes-due": {
          background: "rgba(248, 250, 255, 0.10)",
          border: COLORS.ACCENT.YELLOW_20,
          text: COLORS.SYSTEM.WHITE
        },
        "approve-by-date": {
          background: "rgba(248, 250, 255, 0.10)",
          border: COLORS.WARNING.WARNING_40,
          text: COLORS.SYSTEM.WHITE
        },
        "no-benefits-deduction": {
          background: "rgba(248, 250, 255, 0.1)",
          border: COLORS.SECONDARY.BLUE_40,
          dot: COLORS.SECONDARY.BLUE_40,
          text: COLORS.SECONDARY.BLUE_60
        },
        holiday: {
          background: COLORS.ACCENT.MAGENTA_20,
          text: COLORS.SYSTEM.INK
        }
      }
    }
  },
  light: {
    name: "calendarEvent",
    styles: {
      background: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.MISTY,
      range: {
        active: {
          background: "#FF806440",
          text: COLORS.ERROR.ERROR_50
        },
        inactive: {
          background: "#FF80640D"
        }
      },
      dayOutsideMonth: COLORS.SYSTEM.SILVER,
      events: {
        "pay-period": {
          background: COLORS.PRIMARY.ORANGE_40,
          border: COLORS.PRIMARY.ORANGE_40,
          text: COLORS.SYSTEM.WHITE
        },
        "pay-period-end-date": {
          background: "#FF806440",
          text: COLORS.SYSTEM.WHITE
        },
        "pay-date": {
          background: COLORS.SECONDARY.BLUE_20,
          border: COLORS.SECONDARY.BLUE_50,
          text: COLORS.SECONDARY.BLUE_60
        },
        "changes-due": {
          background: COLORS.ACCENT.YELLOW_10,
          border: COLORS.ACCENT.YELLOW_40,
          text: COLORS.ACCENT.YELLOW_40
        },
        "approve-by-date": {
          background: COLORS.WARNING.WARNING_10,
          border: COLORS.WARNING.WARNING_50,
          text: COLORS.WARNING.WARNING_50
        },
        "no-benefits-deduction": {
          background: COLORS.SECONDARY.BLUE_20,
          border: COLORS.SECONDARY.BLUE_50,
          dot: COLORS.SECONDARY.BLUE_50,
          text: COLORS.SECONDARY.BLUE_60
        },
        holiday: {
          background: COLORS.ACCENT.MAGENTA_40,
          text: COLORS.SYSTEM.WHITE
        }
      }
    }
  }
};

// lib/avatar/component.tsx
var import_material18 = require("@mui/material");

// lib/badge/component.tsx
var import_material17 = require("@mui/material");
var import_icons_material3 = require("@mui/icons-material");
var import_jsx_runtime10 = require("react/jsx-runtime");

// lib/avatar/component.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");

// lib/navigation/profile.tsx
var import_styles10 = require("@mui/material/styles");
var import_jsx_runtime12 = require("react/jsx-runtime");
var ProfileContainer = (0, import_styles10.styled)(import_material.Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: "6px",
  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
  boxSizing: "border-box"
}));
var ProfileHeader = (0, import_styles10.styled)(import_material.Box)(({ theme }) => ({
  display: "flex",
  padding: "24px",
  alignItems: "flex-start",
  gap: "12px",
  backgroundColor: theme.palette.navigationProfile.background,
  width: "100%",
  boxSizing: "border-box"
}));
var ProfileItem = (0, import_styles10.styled)(import_material.Box)(({ theme }) => ({
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

// lib/navigation/companySelector.tsx
var import_react6 = require("react");
var import_styles11 = require("@mui/material/styles");
var import_CheckCircle = __toESM(require("@mui/icons-material/CheckCircle"), 1);
var import_jsx_runtime13 = require("react/jsx-runtime");
var CompaniesWrapper = (0, import_styles11.styled)(import_material.Stack)(({ theme }) => ({
  overflowY: "auto",
  maxHeight: "500px",
  display: "inline-flex",
  flexDirection: "column",
  alignItems: "flex-start",
  borderRadius: theme.spacing(1.5),
  boxShadow: theme.shadows[2]
}));
var Company = (0, import_styles11.styled)(import_material.Stack)(({ theme, disabled }) => ({
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
var import_styles12 = require("@mui/material/styles");
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_relativeTime = __toESM(require_relativeTime(), 1);
var import_jsx_runtime14 = require("react/jsx-runtime");
import_dayjs.default.extend(import_relativeTime.default);
var NotificationWrapper = (0, import_styles12.styled)(import_material.Stack)(({ theme }) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  boxSizing: "border-box",
  borderRadius: theme.spacing(1.5),
  boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)",
  maxHeight: "500px"
}));
var NotificationHeader = (0, import_styles12.styled)(import_material.Stack)(({ theme }) => ({
  boxSizing: "border-box",
  padding: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.navigationNotification.border}`,
  width: "100%",
  backgroundColor: theme.palette.navigationNotification.background
}));
var NotificationFooter = (0, import_styles12.styled)(import_material.Stack)(({ theme }) => ({
  width: "100%",
  boxSizing: "border-box",
  padding: theme.spacing(3),
  alignContent: "center",
  borderTop: `1px solid ${theme.palette.navigationNotification.border}`,
  backgroundColor: theme.palette.navigationNotification.background
}));
var ButtonFooter = (0, import_styles12.styled)(Button)(() => ({
  display: "flex",
  alignContent: "center"
}));
var NotificationContainer = (0, import_styles12.styled)(import_material.Stack)(() => ({
  overflowY: "auto"
}));
var Notification = (0, import_styles12.styled)(import_material.Stack)(({ theme }) => ({
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
var StyledTypography2 = (0, import_styles12.styled)(Typography)(({ theme }) => ({
  color: theme.palette.navigationNotification.color
}));

// lib/data-visualization/theme.ts
var dataVisualizationTheme = {
  dark: {
    name: "dataVisualization",
    styles: {
      colors: [
        COLORS.ACCENT.GREEN_20,
        COLORS.SECONDARY.BLUE_40,
        COLORS.ACCENT.VIOLET_20,
        COLORS.ACCENT.MAGENTA_20,
        COLORS.ACCENT.VIOLET_30,
        "#FF9E71",
        "#FBA5A5"
      ],
      // Define tus colores aquí
      chart: {
        backgroundColor: COLORS.SYSTEM.INK,
        style: {
          fontFamily: "Centra No2"
        },
        width: null,
        height: null
      },
      yAxis: {
        gridLineColor: COLORS.SYSTEM.SLATE,
        gridLineWidth: 2,
        labels: {
          style: {
            color: COLORS.SYSTEM.SILVER
          }
        }
      },
      xAxis: {
        labels: {
          style: {
            color: COLORS.SYSTEM.DARK_30
          }
        }
      },
      legend: {
        itemStyle: {
          color: COLORS.SYSTEM.WHITE
        }
      }
    }
  },
  light: {
    name: "dataVisualization",
    styles: {
      colors: [
        COLORS.ACCENT.GREEN_30,
        COLORS.SECONDARY.BLUE_60,
        "#7F3ED6",
        COLORS.ACCENT.MAGENTA_40,
        COLORS.ACCENT.VIOLET_30,
        "#F8601A",
        "#E90C0C"
      ],
      // Define tus colores aquí
      chart: {
        backgroundColor: COLORS.SYSTEM.WHITE,
        style: {
          fontFamily: "Centra No2"
        }
      },
      yAxis: {
        gridLineColor: COLORS.SYSTEM.MISTY,
        gridLineWidth: 2,
        labels: {
          style: {
            color: COLORS.SYSTEM.DARK_30
          }
        }
      },
      xAxis: {
        labels: {
          style: {
            color: COLORS.SYSTEM.DARK_30
          }
        }
      },
      legend: {
        itemStyle: {
          color: COLORS.SYSTEM.INK
        }
      }
    }
  }
};

// lib/generic-classes/theme.ts
var genericClassesTheme = {
  dark: {
    name: "genericClasses",
    styles: {
      backgroundColorLightBlue: COLORS.SYSTEM.DARK_70,
      backgroundColorLightGray: COLORS.SYSTEM.DARK_60,
      backgroundColorWhiteBox: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SLATE,
      depth: {
        background: {
          bg: COLORS.SYSTEM.DARK_70
        },
        depth0: {
          bg: COLORS.SYSTEM.INK,
          border: `1px solid ${COLORS.SYSTEM.SLATE}`
        },
        depth1: {
          bg: COLORS.SYSTEM.INK,
          border: `1px solid ${COLORS.SYSTEM.SLATE}`,
          shadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)"
        },
        depth2: {
          bg: COLORS.SYSTEM.INK,
          border: `1px solid ${COLORS.SYSTEM.SLATE}`,
          shadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)"
        },
        headerDepth: {
          bg: COLORS.SYSTEM.DARK_60,
          shadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.16)"
        }
      }
    }
  },
  light: {
    name: "genericClasses",
    styles: {
      backgroundColorLightBlue: COLORS.SECONDARY.BLUE_10,
      backgroundColorLightGray: COLORS.SYSTEM.OFF_WHITE,
      backgroundColorWhiteBox: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.MISTY,
      depth: {
        background: {
          bg: COLORS.SYSTEM.OFF_WHITE
        },
        depth0: {
          bg: COLORS.SYSTEM.WHITE,
          border: `1px solid ${COLORS.SYSTEM.MISTY}`
        },
        depth1: {
          bg: COLORS.SYSTEM.WHITE,
          shadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)"
        },
        depth2: {
          bg: COLORS.SYSTEM.WHITE,
          shadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.20)"
        },
        headerDepth: {
          bg: COLORS.SYSTEM.WHITE,
          shadow: "0px 1px 4px 0px rgba(0, 0, 0, 0.16)"
        }
      }
    }
  }
};

// lib/generic-classes/component.tsx
var import_material19 = require("@mui/material");
var import_jsx_runtime15 = require("react/jsx-runtime");
var GenericClasses = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_material19.GlobalStyles,
    {
      styles: (theme) => ({
        ".T1-container-lightblue": {
          backgroundColor: theme.palette.genericClasses.backgroundColorLightBlue,
          border: `1px solid ${theme.palette.genericClasses.border}`
        },
        ".T1-container-lightgray": {
          backgroundColor: theme.palette.genericClasses.backgroundColorLightGray,
          border: `1px solid ${theme.palette.genericClasses.border}`
        },
        ".T1-container-whiteBox": {
          backgroundColor: theme.palette.genericClasses.backgroundColorWhiteBox,
          border: `1px solid ${theme.palette.genericClasses.border}`
        },
        ".T1-background": {
          backgroundColor: theme.palette.genericClasses.depth.background.bg
        },
        ".T1-depth-0": {
          backgroundColor: theme.palette.genericClasses.depth.depth0.bg,
          border: theme.palette.genericClasses.depth.depth0.border
        },
        ".T1-depth-1": {
          backgroundColor: theme.palette.genericClasses.depth.depth1.bg,
          border: theme.palette.genericClasses.depth.depth1.border,
          boxShadow: theme.palette.genericClasses.depth.depth1.shadow
        },
        ".T1-depth-2": {
          backgroundColor: theme.palette.genericClasses.depth.depth2.bg,
          border: theme.palette.genericClasses.depth.depth2.border,
          boxShadow: theme.palette.genericClasses.depth.depth2.shadow
        },
        ".T1-depth-header": {
          backgroundColor: theme.palette.genericClasses.depth.headerDepth.bg,
          boxShadow: theme.palette.genericClasses.depth.headerDepth.shadow
        },
        ".T1-highlight-external-component": {
          position: "relative",
          zIndex: 1001,
          backgroundColor: theme.name === "dark" ? theme.palette.t1.system.ink : theme.palette.t1.system.white
        }
      })
    }
  );
};

// lib/link-dropdown/theme.ts
var linkDropdownTheme = {
  dark: {
    name: "linkDropdown",
    styles: {
      link: {
        color: COLORS.SECONDARY.BLUE_40,
        hover: {
          color: COLORS.SECONDARY.BLUE_30
        }
      },
      button: {
        bg: COLORS.PRIMARY.ORANGE_40,
        color: COLORS.SYSTEM.INK,
        hover: {
          bg: COLORS.PRIMARY.ORANGE_30
        },
        separator: "rgba(255, 255, 255, 0.4)"
      }
    }
  },
  light: {
    name: "linkDropdown",
    styles: {
      link: {
        color: COLORS.SECONDARY.BLUE_60,
        hover: {
          color: COLORS.SECONDARY.BLUE_70
        }
      },
      button: {
        bg: COLORS.PRIMARY.ORANGE_60,
        color: COLORS.SYSTEM.WHITE,
        hover: {
          bg: COLORS.PRIMARY.ORANGE_70
        },
        separator: "rgba(0, 0, 0, 0.4)"
      }
    }
  }
};

// lib/select/theme.ts
var multiSelectTheme = {
  dark: {
    name: "multiSelect",
    styles: {
      border: COLORS.ERROR.ERROR_20,
      color: COLORS.SYSTEM.WHITE
    }
  },
  light: {
    name: "multiSelect",
    styles: {
      border: COLORS.ERROR.ERROR_40,
      color: COLORS.SYSTEM.INK
    }
  }
};
var arrowedSelectTheme = {
  dark: {
    name: "arrowedSelect",
    styles: {
      border: COLORS.SYSTEM.DARK_30,
      disabled: {
        border: COLORS.SYSTEM.DARK_30,
        background: COLORS.SYSTEM.INK
      },
      error: {
        border: COLORS.ERROR.ERROR_20
      },
      hover: {
        border: COLORS.SYSTEM.SILVER
      },
      item: {
        title: COLORS.SYSTEM.WHITE,
        background: COLORS.SYSTEM.DARK_60,
        content: COLORS.SYSTEM.SILVER,
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
    }
  },
  light: {
    name: "arrowedSelect",
    styles: {
      border: COLORS.SYSTEM.MISTY,
      disabled: {
        border: COLORS.SYSTEM.SILVER,
        background: COLORS.SYSTEM.MISTY
      },
      error: {
        border: COLORS.ERROR.ERROR_50
      },
      hover: {
        border: COLORS.SYSTEM.SLATE
      },
      item: {
        title: COLORS.SYSTEM.INK,
        background: COLORS.SYSTEM.WHITE,
        content: COLORS.SYSTEM.DARK_30,
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
  }
};

// lib/nested-table/theme.ts
var nestedTableTheme = {
  dark: {
    name: "nestedTable",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      background: COLORS.SYSTEM.DARK_70,
      border: COLORS.SYSTEM.DARK_30
    }
  },
  light: {
    name: "nestedTable",
    styles: {
      text: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.OFF_WHITE,
      border: COLORS.SYSTEM.CLOUDY
    }
  }
};

// lib/page-footer/theme.ts
var pageFooterTheme = {
  dark: {
    name: "pageFooter",
    styles: {
      text: COLORS.SYSTEM.SILVER,
      background: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SLATE
    }
  },
  light: {
    name: "pageFooter",
    styles: {
      background: COLORS.SYSTEM.WHITE,
      text: COLORS.SYSTEM.DARK_30,
      border: COLORS.SYSTEM.OFF_WHITE
    }
  }
};

// lib/paginator/theme.ts
var paginatorTheme = {
  dark: {
    name: "paginator",
    styles: {
      borderColor: COLORS.SYSTEM.DARK_30,
      actionBackground: COLORS.SYSTEM.INK,
      actionColor: COLORS.SYSTEM.WHITE,
      actionBackgroundDisabled: COLORS.SYSTEM.DARK_60,
      actionColorDisabled: COLORS.SYSTEM.PEWTER,
      dropdownColor: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "paginator",
    styles: {
      borderColor: COLORS.SYSTEM.SILVER,
      actionBackground: COLORS.SYSTEM.MISTY,
      actionColor: COLORS.SYSTEM.INK,
      actionBackgroundDisabled: COLORS.SYSTEM.MISTY,
      actionColorDisabled: COLORS.SYSTEM.SILVER,
      dropdownColor: COLORS.SYSTEM.PEWTER
    }
  }
};

// lib/popover/theme.ts
var popoverTheme = {
  dark: {
    name: "popover",
    styles: {
      background: COLORS.SYSTEM.DARK_80,
      color: COLORS.SYSTEM.WHITE,
      iconColor: COLORS.SYSTEM.SILVER,
      border: COLORS.SYSTEM.SLATE
    }
  },
  light: {
    name: "popover",
    styles: {
      background: COLORS.SYSTEM.WHITE,
      color: COLORS.SYSTEM.INK,
      iconColor: COLORS.SYSTEM.PEWTER,
      border: COLORS.SYSTEM.CLOUDY
    }
  }
};

// lib/radio-button/theme.ts
var radioButtonTheme = {
  dark: {
    name: "radioButton",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_40,
      default: {
        checked: COLORS.SECONDARY.BLUE_40,
        unchecked: COLORS.SYSTEM.MISTY,
        label: COLORS.SYSTEM.WHITE
      },
      hover: {
        color: COLORS.SECONDARY.BLUE_40
      },
      focus: {
        color: COLORS.SECONDARY.BLUE_40
      },
      error: {
        color: COLORS.ERROR.ERROR_20
      },
      disabled: {
        color: COLORS.SYSTEM.PEWTER,
        label: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "radioButton",
    styles: {
      outlineFocus: COLORS.SECONDARY.BLUE_60,
      default: {
        checked: COLORS.SECONDARY.BLUE_60,
        unchecked: COLORS.SYSTEM.PEWTER,
        label: COLORS.SYSTEM.INK
      },
      hover: {
        color: COLORS.SECONDARY.BLUE_60
      },
      focus: {
        color: COLORS.SECONDARY.BLUE_70
      },
      error: {
        color: COLORS.ERROR.ERROR_40
      },
      disabled: {
        color: COLORS.SYSTEM.SILVER,
        label: COLORS.SYSTEM.SILVER
      }
    }
  }
};

// lib/rating-scale/theme.ts
var ratingScaleTheme = {
  dark: {
    name: "ratingScale",
    styles: {
      backgroundColor: {
        default: COLORS.SYSTEM.INK,
        disabled: COLORS.SYSTEM.DARK_60
      },
      border: {
        default: COLORS.SYSTEM.SLATE,
        hover: COLORS.SYSTEM.DARK_30,
        active: COLORS.SYSTEM.PEWTER,
        selected: COLORS.SECONDARY.BLUE_40,
        disabled: COLORS.SYSTEM.SLATE,
        focus: COLORS.SYSTEM.SLATE
      },
      first: {
        sectionColor: COLORS.ERROR.ERROR_30,
        backgroundColor: {
          default: COLORS.ERROR.ERROR_50,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      second: {
        sectionColor: COLORS.WARNING.WARNING_40,
        backgroundColor: {
          default: COLORS.WARNING.WARNING_50,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      third: {
        sectionColor: COLORS.ERROR.ERROR_30,
        backgroundColor: {
          default: "rgba(244, 192, 6, 0.30)",
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fourth: {
        sectionColor: COLORS.SYSTEM.SILVER,
        backgroundColor: {
          default: COLORS.SYSTEM.SLATE,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fifth: {
        sectionColor: COLORS.INFO.INFO_20,
        backgroundColor: {
          default: COLORS.ACCENT.TEAL_40,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      sixth: {
        sectionColor: COLORS.ACCENT.GREEN_20,
        backgroundColor: {
          default: "rgba(2, 147, 111, 0.70)",
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      seventh: {
        sectionColor: COLORS.SUCCESS.SUCCESS_30,
        backgroundColor: {
          default: COLORS.SUCCESS.SUCCESS_40,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      }
    }
  },
  light: {
    name: "ratingScale",
    styles: {
      backgroundColor: {
        default: COLORS.SYSTEM.WHITE,
        disabled: COLORS.SYSTEM.MISTY
      },
      border: {
        default: COLORS.SYSTEM.CLOUDY,
        hover: COLORS.SYSTEM.SILVER,
        active: COLORS.SECONDARY.BLUE_60,
        focus: COLORS.SECONDARY.BLUE_60,
        disabled: COLORS.SYSTEM.CLOUDY,
        selected: COLORS.SECONDARY.BLUE_60
      },
      first: {
        sectionColor: COLORS.ERROR.ERROR_40,
        backgroundColor: {
          default: COLORS.ERROR.ERROR_20,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      second: {
        sectionColor: COLORS.WARNING.WARNING_40,
        backgroundColor: {
          default: COLORS.WARNING.WARNING_10,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      third: {
        sectionColor: COLORS.ACCENT.YELLOW_30,
        backgroundColor: {
          default: COLORS.ACCENT.YELLOW_10,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fourth: {
        sectionColor: COLORS.SYSTEM.SILVER,
        backgroundColor: {
          default: COLORS.SYSTEM.CLOUDY,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      fifth: {
        sectionColor: COLORS.ACCENT.TEAL_30,
        backgroundColor: {
          default: COLORS.SYSTEM.CLOUDY,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      sixth: {
        sectionColor: COLORS.ACCENT.GREEN_30,
        backgroundColor: {
          default: COLORS.ACCENT.GREEN_10,
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      },
      seventh: {
        sectionColor: COLORS.SUCCESS.SUCCESS_40,
        backgroundColor: {
          default: "rgba(51, 225, 115, 0.20)",
          disabled: COLORS.SYSTEM.DARK_60,
          selected: COLORS.SYSTEM.DARK_60
        }
      }
    }
  }
};

// lib/signature/theme.ts
var signatureTheme = {
  dark: {
    name: "signature",
    styles: {
      border: {
        default: COLORS.SYSTEM.PEWTER,
        hover: COLORS.SYSTEM.SILVER,
        active: COLORS.SYSTEM.CLOUDY
      },
      underline: {
        default: COLORS.SYSTEM.PEWTER,
        hover: COLORS.SYSTEM.SILVER
      },
      penColor: COLORS.SYSTEM.WHITE
    }
  },
  light: {
    name: "signature",
    styles: {
      border: {
        default: COLORS.SYSTEM.CLOUDY,
        hover: COLORS.SYSTEM.SILVER,
        active: COLORS.SYSTEM.PEWTER
      },
      underline: {
        default: COLORS.SYSTEM.CLOUDY,
        hover: COLORS.SYSTEM.SILVER
      },
      penColor: COLORS.SYSTEM.INK
    }
  }
};

// lib/scrollbars/theme.ts
var scrollBarsTheme = {
  dark: {
    name: "scrollbars",
    styles: {
      background: COLORS.SYSTEM.DARK_80,
      color: COLORS.SYSTEM.SLATE,
      hover: {
        background: COLORS.SYSTEM.DARK_30
      },
      active: {
        background: COLORS.SYSTEM.PEWTER
      }
    }
  },
  light: {
    name: "scrollbars",
    styles: {
      background: COLORS.SYSTEM.MISTY,
      color: COLORS.SYSTEM.SILVER,
      hover: {
        background: COLORS.SYSTEM.PEWTER
      },
      active: {
        background: COLORS.SYSTEM.DARK_30
      }
    }
  }
};

// lib/side-bar-navigation/theme.ts
var sideIconItemTheme = {
  dark: {
    name: "sideIconItem",
    styles: {
      color: COLORS.SYSTEM.SILVER,
      hover: {
        color: COLORS.SYSTEM.WHITE
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_50
      },
      selected: {
        background: COLORS.SYSTEM.DARK_60,
        icon: {
          color: COLORS.PRIMARY.ORANGE_40
        }
      }
    }
  },
  light: {
    name: "sideIconItem",
    styles: {
      color: COLORS.SYSTEM.DARK_30,
      hover: {
        color: COLORS.SYSTEM.INK
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_60
      },
      selected: {
        background: COLORS.SECONDARY.BLUE_10,
        icon: {
          color: COLORS.PRIMARY.ORANGE_60
        }
      }
    }
  }
};

// lib/snackbar/theme.ts
var snackbarTheme = {
  dark: {
    name: "snackbar",
    styles: {
      background: COLORS.SECONDARY.BLUE_30,
      icon: COLORS.SECONDARY.BLUE_60,
      text: COLORS.SYSTEM.INK
    }
  },
  light: {
    name: "snackbar",
    styles: {
      background: COLORS.BRAND.TRINET_NAVY,
      icon: COLORS.SYSTEM.WHITE,
      text: COLORS.SYSTEM.WHITE
    }
  }
};

// lib/slider/theme.ts
var sliderTheme = {
  dark: {
    name: "sliderTheme",
    styles: {
      default: {
        thumb: {
          color: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.PEWTER
        },
        rail: {
          color: COLORS.SYSTEM.DARK_30
        },
        track: {
          color: COLORS.SECONDARY.BLUE_40
        },
        label: {
          color: COLORS.SYSTEM.WHITE,
          background: COLORS.SYSTEM.DARK_80
        }
      },
      disabled: {
        thumb: {
          color: COLORS.SYSTEM.INK,
          border: COLORS.SYSTEM.PEWTER
        },
        rail: {
          color: COLORS.SYSTEM.SLATE
        },
        track: {
          color: COLORS.SYSTEM.DARK_30
        },
        label: {
          color: COLORS.SYSTEM.WHITE,
          background: COLORS.SYSTEM.DARK_80
        }
      }
    }
  },
  light: {
    name: "sliderTheme",
    styles: {
      default: {
        thumb: {
          color: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        rail: {
          color: COLORS.SYSTEM.SILVER
        },
        track: {
          color: COLORS.SECONDARY.BLUE_60
        },
        label: {
          color: COLORS.SYSTEM.INK,
          background: COLORS.SYSTEM.WHITE
        }
      },
      disabled: {
        thumb: {
          color: COLORS.SYSTEM.WHITE,
          border: COLORS.SYSTEM.CLOUDY
        },
        rail: {
          color: COLORS.SYSTEM.CLOUDY
        },
        track: {
          color: COLORS.SECONDARY.BLUE_30
        },
        label: {
          color: COLORS.SYSTEM.INK,
          background: COLORS.SYSTEM.WHITE
        }
      }
    }
  }
};

// lib/statistics/theme.ts
var payRunsTheme = {
  dark: {
    name: "payRuns",
    styles: {
      color: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "payRuns",
    styles: {
      color: COLORS.SYSTEM.DARK_30
    }
  }
};
var labeledIcon = {
  dark: {
    name: "labeledIcon",
    styles: {
      icon: {
        success: COLORS.SUCCESS.SUCCESS_20,
        neutral: COLORS.SYSTEM.SILVER
      },
      primaryText: COLORS.SYSTEM.WHITE,
      secondaryText: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "labeledIcon",
    styles: {
      icon: {
        success: COLORS.SUCCESS.SUCCESS_40,
        neutral: COLORS.SYSTEM.SILVER
      },
      primaryText: COLORS.SYSTEM.INK,
      secondaryText: COLORS.SYSTEM.DARK_30
    }
  }
};
var reportsTheme = {
  dark: {
    name: "reports",
    styles: {
      title: COLORS.SYSTEM.WHITE,
      subtitle: COLORS.SYSTEM.SILVER,
      percentagePill: {
        rise: {
          background: COLORS.SUCCESS.SUCCESS_20,
          text: COLORS.SUCCESS.SUCCESS_50
        },
        stagnant: {
          background: COLORS.SYSTEM.SILVER,
          text: COLORS.SYSTEM.INK
        },
        down: {
          background: COLORS.ERROR.ERROR_20,
          text: COLORS.SYSTEM.INK
        }
      }
    }
  },
  light: {
    name: "reports",
    styles: {
      title: COLORS.SYSTEM.INK,
      subtitle: COLORS.SYSTEM.DARK_30,
      percentagePill: {
        rise: {
          background: COLORS.SUCCESS.SUCCESS_10,
          text: COLORS.SUCCESS.SUCCESS_40
        },
        stagnant: {
          background: COLORS.SYSTEM.MISTY,
          text: COLORS.SYSTEM.PEWTER
        },
        down: {
          background: COLORS.ERROR.ERROR_10,
          text: COLORS.ERROR.ERROR_40
        }
      }
    }
  }
};
var statisticsIconTheme = {
  dark: {
    name: "statisticsIcon",
    styles: {
      background: COLORS.SYSTEM.INK,
      icon: COLORS.SECONDARY.BLUE_30
    }
  },
  light: {
    name: "statisticsIcon",
    styles: {
      background: COLORS.SECONDARY.BLUE_20,
      icon: COLORS.SECONDARY.BLUE_70
    }
  }
};
var statisticsOverviewTheme = {
  dark: {
    name: "statisticsOverview",
    styles: {
      background: COLORS.SYSTEM.DARK_70,
      title: COLORS.SYSTEM.WHITE,
      content: COLORS.SYSTEM.SILVER,
      icon: {
        up: COLORS.SUCCESS.SUCCESS_20,
        flat: COLORS.SYSTEM.SILVER,
        down: COLORS.ERROR.ERROR_20
      }
    }
  },
  light: {
    name: "statisticsOverview",
    styles: {
      background: COLORS.SECONDARY.BLUE_10,
      title: COLORS.SYSTEM.INK,
      content: COLORS.SYSTEM.DARK_30,
      icon: {
        up: COLORS.SUCCESS.SUCCESS_40,
        flat: COLORS.SYSTEM.PEWTER,
        down: COLORS.ERROR.ERROR_40
      }
    }
  }
};
var timeOffCardTheme = {
  dark: {
    name: "timeOffCard",
    styles: {
      container: {
        border: COLORS.SYSTEM.SLATE,
        background: COLORS.SYSTEM.INK
      },
      accordion: {
        link: COLORS.SECONDARY.BLUE_40,
        iconColor: COLORS.SYSTEM.SILVER
      },
      totalHoursContainer: {
        color: COLORS.SYSTEM.SILVER,
        availableHoursColor: COLORS.INFO.INFO_20,
        maxHoursColor: COLORS.SYSTEM.SILVER
      },
      toolTip: {
        background: COLORS.SYSTEM.CLOUDY
      }
    }
  },
  light: {
    name: "timeOffCard",
    styles: {
      container: {
        border: COLORS.SYSTEM.MISTY,
        background: COLORS.SYSTEM.WHITE
      },
      accordion: {
        link: COLORS.SECONDARY.BLUE_60,
        iconColor: COLORS.SYSTEM.PEWTER
      },
      totalHoursContainer: {
        color: COLORS.SYSTEM.DARK_30,
        availableHoursColor: COLORS.INFO.INFO_50,
        maxHoursColor: COLORS.SYSTEM.DARK_30
      },
      toolTip: {
        background: COLORS.SYSTEM.CLOUDY
      }
    }
  }
};
var holidayTheme = {
  dark: {
    name: "holiday",
    styles: {
      container: {
        border: COLORS.SYSTEM.SLATE,
        background: COLORS.SYSTEM.INK,
        color: COLORS.SYSTEM.SILVER
      },
      icon: {
        background: COLORS.SYSTEM.DARK_70,
        color: COLORS.SECONDARY.BLUE_30
      }
    }
  },
  light: {
    name: "holiday",
    styles: {
      container: {
        border: COLORS.SYSTEM.MISTY,
        background: COLORS.SECONDARY.BLUE_10,
        color: COLORS.SYSTEM.DARK_30
      },
      icon: {
        background: COLORS.SECONDARY.BLUE_20,
        color: COLORS.SECONDARY.BLUE_70
      }
    }
  }
};

// lib/status/theme.ts
var statusTheme = {
  dark: {
    name: "status",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      active: COLORS.SUCCESS.SUCCESS_30,
      inProgress: COLORS.INFO.INFO_30,
      denied: COLORS.ERROR.ERROR_40,
      warning: COLORS.WARNING.WARNING_40,
      pending: COLORS.ACCENT.YELLOW_30,
      expired: COLORS.SYSTEM.SILVER,
      inactive: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "status",
    styles: {
      text: COLORS.SYSTEM.INK,
      active: COLORS.SUCCESS.SUCCESS_40,
      inProgress: COLORS.INFO.INFO_40,
      denied: COLORS.ERROR.ERROR_40,
      warning: COLORS.WARNING.WARNING_40,
      pending: COLORS.ACCENT.YELLOW_30,
      expired: COLORS.SYSTEM.SILVER,
      inactive: COLORS.SYSTEM.SILVER
    }
  }
};

// lib/status-tag/theme.ts
var statusTagTheme = {
  dark: {
    name: "statusTag",
    styles: {
      affirmation: {
        body: COLORS.ACCENT.GREEN_50,
        color: COLORS.SUCCESS.SUCCESS_20,
        border: COLORS.SUCCESS.SUCCESS_20
      },
      neutral: {
        body: COLORS.SYSTEM.SLATE,
        color: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.SILVER
      },
      caution: {
        body: COLORS.WARNING.WARNING_50,
        color: COLORS.WARNING.WARNING_20,
        border: COLORS.WARNING.WARNING_20
      },
      negation: {
        body: COLORS.PRIMARY.ORANGE_80,
        color: COLORS.ERROR.ERROR_30,
        border: COLORS.ERROR.ERROR_20
      },
      information: {
        body: COLORS.SECONDARY.BLUE_80,
        color: COLORS.INFO.INFO_20,
        border: COLORS.INFO.INFO_20
      },
      alert: {
        body: COLORS.WARNING.WARNING_50,
        color: COLORS.WARNING.WARNING_20,
        border: COLORS.WARNING.WARNING_40
      }
    }
  },
  light: {
    name: "statusTag",
    styles: {
      affirmation: {
        body: COLORS.SUCCESS.SUCCESS_10,
        color: COLORS.SUCCESS.SUCCESS_50,
        border: COLORS.SUCCESS.SUCCESS_40
      },
      neutral: {
        body: COLORS.SYSTEM.WHITE,
        color: COLORS.SYSTEM.INK,
        border: COLORS.SYSTEM.SLATE
      },
      caution: {
        body: COLORS.WARNING.WARNING_10,
        color: COLORS.WARNING.WARNING_50,
        border: COLORS.WARNING.WARNING_40
      },
      negation: {
        body: COLORS.ERROR.ERROR_10,
        color: COLORS.ERROR.ERROR_50,
        border: COLORS.ERROR.ERROR_20
      },
      information: {
        body: COLORS.SECONDARY.BLUE_20,
        color: COLORS.INFO.INFO_50,
        border: COLORS.INFO.INFO_40
      },
      alert: {
        body: COLORS.WARNING.WARNING_10,
        color: COLORS.WARNING.WARNING_50,
        border: COLORS.WARNING.WARNING_40
      }
    }
  }
};
var productBadgeTheme = {
  dark: {
    name: "productBadge",
    styles: {
      orange: {
        bgColor: COLORS.PRIMARY.ORANGE_40,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.PRIMARY.ORANGE_30
      },
      blue: {
        bgColor: COLORS.SECONDARY.BLUE_50,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.SECONDARY.BLUE_30
      },
      navy: {
        bgColor: COLORS.BRAND.TRINET_NAVY,
        border: COLORS.SYSTEM.DARK_30,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SYSTEM.PEWTER
      },
      green: {
        bgColor: COLORS.SUCCESS.SUCCESS_30,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.SUCCESS.SUCCESS_50
      },
      grey: {
        bgColor: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.DARK_30,
        vector: COLORS.SYSTEM.DARK_30
      },
      violet: {
        bgColor: COLORS.ACCENT.VIOLET_20,
        color: COLORS.SYSTEM.INK,
        vector: COLORS.ACCENT.VIOLET_10
      }
    }
  },
  light: {
    name: "productBadge",
    styles: {
      orange: {
        bgColor: COLORS.PRIMARY.ORANGE_50,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.PRIMARY.ORANGE_70
      },
      blue: {
        bgColor: COLORS.SECONDARY.BLUE_60,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SECONDARY.BLUE_70
      },
      navy: {
        bgColor: COLORS.BRAND.TRINET_NAVY,
        border: COLORS.TRANSPARENT,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SYSTEM.PEWTER
      },
      green: {
        bgColor: COLORS.SUCCESS.SUCCESS_40,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.SUCCESS.SUCCESS_50
      },
      grey: {
        bgColor: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.SLATE,
        vector: COLORS.SYSTEM.DARK_30
      },
      violet: {
        bgColor: COLORS.ACCENT.VIOLET_40,
        color: COLORS.SYSTEM.WHITE,
        vector: COLORS.ACCENT.VIOLET_10
      }
    }
  }
};

// lib/stepper/theme.ts
var stepperTheme = {
  dark: {
    name: "stepper",
    styles: {
      primary: {
        text: COLORS.SYSTEM.WHITE,
        body: COLORS.SYSTEM.INK,
        iconText: COLORS.SYSTEM.WHITE,
        iconBody: COLORS.SECONDARY.BLUE_40,
        default: {
          body: COLORS.SYSTEM.SLATE,
          border: COLORS.SYSTEM.SLATE
        },
        hover: {
          body: COLORS.SYSTEM.DARK_30,
          activeBody: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.WHITE,
          activeText: COLORS.SECONDARY.BLUE_40
        },
        active: {
          body: COLORS.SYSTEM.DARK_60,
          text: COLORS.SYSTEM.WHITE,
          activeText: COLORS.SYSTEM.WHITE,
          iconText: COLORS.SYSTEM.WHITE,
          iconBody: COLORS.SYSTEM.SILVER
        },
        blocked: {
          iconText: COLORS.SYSTEM.SILVER
        },
        completed: {
          iconBody: COLORS.ACCENT.GREEN_30
        }
      },
      subStep: {
        text: COLORS.SYSTEM.DARK_30,
        iconColor: COLORS.SECONDARY.BLUE_50,
        completedIconColor: COLORS.SUCCESS.SUCCESS_40,
        hover: {
          text: COLORS.SYSTEM.WHITE,
          activeText: COLORS.SECONDARY.BLUE_40
        },
        active: {
          text: COLORS.SECONDARY.BLUE_40
        },
        completed: {
          text: COLORS.SYSTEM.WHITE
        }
      }
    }
  },
  light: {
    name: "stepper",
    styles: {
      primary: {
        text: COLORS.SYSTEM.DARK_30,
        body: COLORS.SYSTEM.WHITE,
        iconText: COLORS.SECONDARY.BLUE_70,
        iconBody: COLORS.SECONDARY.BLUE_30,
        default: {
          body: COLORS.SECONDARY.BLUE_30,
          border: COLORS.SYSTEM.CLOUDY
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SYSTEM.INK,
          activeBody: COLORS.SECONDARY.BLUE_20,
          activeText: COLORS.SECONDARY.BLUE_60
        },
        active: {
          body: COLORS.SECONDARY.BLUE_10,
          text: COLORS.SYSTEM.INK,
          activeText: COLORS.SECONDARY.BLUE_60,
          iconText: COLORS.SYSTEM.WHITE,
          iconBody: COLORS.SECONDARY.BLUE_60
        },
        blocked: {
          iconText: COLORS.SECONDARY.BLUE_50
        },
        completed: {
          iconBody: COLORS.SUCCESS.SUCCESS_40
        }
      },
      subStep: {
        text: COLORS.SYSTEM.DARK_30,
        iconColor: COLORS.SECONDARY.BLUE_50,
        completedIconColor: COLORS.SUCCESS.SUCCESS_40,
        hover: {
          text: COLORS.SYSTEM.INK,
          activeText: COLORS.SECONDARY.BLUE_60
        },
        active: {
          text: COLORS.SECONDARY.BLUE_60
        },
        completed: {
          text: COLORS.SYSTEM.INK
        }
      }
    }
  }
};

// lib/table/theme.ts
var tableTheme = {
  dark: {
    name: "table",
    styles: {
      text: COLORS.SYSTEM.SILVER,
      body: COLORS.SYSTEM.DARK_70,
      default: {
        body: COLORS.SYSTEM.INK,
        border: COLORS.SYSTEM.SLATE
      },
      focused: {
        body: COLORS.SYSTEM.DARK_70
      }
    }
  },
  light: {
    name: "table",
    styles: {
      text: COLORS.SYSTEM.DARK_30,
      body: COLORS.SECONDARY.BLUE_10,
      default: {
        body: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.MISTY
      },
      focused: {
        body: COLORS.SYSTEM.OFF_WHITE
      }
    }
  }
};

// lib/text-field/component.tsx
var import_react7 = require("react");
var import_styles13 = require("@mui/material/styles");
var import_material21 = require("@mui/material");

// lib/input-label/component.tsx
var import_material20 = require("@mui/material");
var import_jsx_runtime16 = require("react/jsx-runtime");
var InputLabel = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_material20.InputLabel, { ...props });
};

// lib/text-field/component.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var TextField = (0, import_react7.forwardRef)(
  ({ contentId, slotProps, ...rest }, ref) => {
    const getCMSContent = useGetCMSContent();
    return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      import_material21.TextField,
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
var StyledOutlinedInput = (0, import_styles13.styled)(import_material21.OutlinedInput)(
  getOutlinedInputStyles
);

// lib/text-field/theme.ts
var textFieldTheme = {
  dark: {
    name: "textField",
    styles: {
      text: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.DARK_30,
      background: COLORS.SYSTEM.INK,
      icon: COLORS.SYSTEM.SILVER,
      label: {
        text: COLORS.SYSTEM.SILVER
      },
      disabled: {
        text: COLORS.SYSTEM.PEWTER,
        border: COLORS.SYSTEM.PEWTER,
        background: COLORS.SYSTEM.DARK_70
      },
      error: {
        text: COLORS.ERROR.ERROR_30,
        border: COLORS.ERROR.ERROR_30
      },
      hover: {
        border: COLORS.SYSTEM.SILVER
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_40
      },
      search: {
        background: COLORS.SYSTEM.DARK_80,
        placeholder: COLORS.SYSTEM.SILVER
      }
    }
  },
  light: {
    name: "textField",
    styles: {
      text: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SILVER,
      background: COLORS.SYSTEM.OFF_WHITE,
      icon: COLORS.SYSTEM.PEWTER,
      label: {
        text: COLORS.SYSTEM.DARK_30
      },
      disabled: {
        text: COLORS.SYSTEM.SILVER,
        border: COLORS.SYSTEM.CLOUDY,
        background: COLORS.TRANSPARENT
      },
      error: {
        text: COLORS.ERROR.ERROR_50,
        border: COLORS.ERROR.ERROR_40
      },
      hover: {
        border: COLORS.SYSTEM.SLATE
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_60
      },
      search: {
        background: COLORS.SYSTEM.OFF_WHITE,
        placeholder: COLORS.SYSTEM.PEWTER
      }
    }
  }
};

// lib/tile/theme.ts
var tileTheme = {
  dark: {
    name: "tile",
    styles: {
      background: COLORS.SYSTEM.INK,
      border: COLORS.SYSTEM.SLATE,
      text: COLORS.SYSTEM.WHITE,
      badgeBackground: COLORS.SYSTEM.INK,
      hover: {
        border: COLORS.SYSTEM.DARK_30
      },
      active: {
        border: COLORS.SYSTEM.PEWTER
      },
      selected: {
        border: COLORS.SECONDARY.BLUE_40
      },
      error: {
        border: COLORS.ERROR.ERROR_30
      },
      disabled: {
        background: COLORS.SYSTEM.DARK_60,
        border: COLORS.SYSTEM.SLATE,
        text: COLORS.SYSTEM.SILVER
      }
    }
  },
  light: {
    name: "tile",
    styles: {
      background: COLORS.SYSTEM.WHITE,
      border: COLORS.SYSTEM.MISTY,
      text: COLORS.SYSTEM.INK,
      badgeBackground: COLORS.SYSTEM.WHITE,
      hover: {
        border: COLORS.SYSTEM.CLOUDY
      },
      active: {
        border: COLORS.SYSTEM.SILVER
      },
      selected: {
        border: COLORS.SECONDARY.BLUE_60
      },
      error: {
        border: COLORS.ERROR.ERROR_50
      },
      disabled: {
        background: COLORS.SYSTEM.OFF_WHITE,
        border: COLORS.SYSTEM.MISTY,
        text: COLORS.SYSTEM.PEWTER
      }
    }
  }
};
var inputTileTheme = {
  dark: {
    name: "inputTile",
    styles: {
      border: COLORS.SYSTEM.SLATE,
      hover: {
        border: COLORS.SECONDARY.BLUE_40
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_50
      },
      active: {
        border: COLORS.SECONDARY.BLUE_50
      },
      selected: {
        border: COLORS.SECONDARY.BLUE_50,
        background: COLORS.SECONDARY.BLUE_50,
        text: COLORS.SYSTEM.INK
      },
      disabled: {
        border: COLORS.SYSTEM.DARK_30,
        background: COLORS.SYSTEM.INK,
        text: COLORS.SYSTEM.SILVER
      }
    }
  },
  light: {
    name: "inputTile",
    styles: {
      border: COLORS.SYSTEM.CLOUDY,
      hover: {
        border: COLORS.SECONDARY.BLUE_60
      },
      focus: {
        border: COLORS.SECONDARY.BLUE_70
      },
      active: {
        border: COLORS.SECONDARY.BLUE_70
      },
      selected: {
        border: COLORS.SECONDARY.BLUE_70,
        background: COLORS.SECONDARY.BLUE_70,
        text: COLORS.SYSTEM.WHITE
      },
      disabled: {
        border: COLORS.SYSTEM.CLOUDY,
        background: COLORS.SYSTEM.MISTY,
        text: COLORS.SYSTEM.SILVER
      }
    }
  }
};

// lib/tile/component.tsx
var import_styles17 = require("@mui/material/styles");
var import_icons_material4 = require("@mui/icons-material");

// lib/radio-button/component.tsx
var import_material25 = require("@mui/material");
var import_styles16 = require("@mui/material/styles");

// lib/form-control/component.tsx
var import_material22 = require("@mui/material");
var import_jsx_runtime18 = require("react/jsx-runtime");

// lib/form-control-label/component.tsx
var import_react8 = __toESM(require("react"), 1);
var import_material23 = require("@mui/material");
var import_styles14 = require("@mui/material/styles");
var import_jsx_runtime19 = require("react/jsx-runtime");
var StyledFormControlLabel = (0, import_styles14.styled)(import_material23.FormControlLabel)(
  ({ theme }) => {
    const checkboxPalette = _checkboxTheme(theme);
    return {
      margin: 0,
      color: theme.palette.typography.color,
      gap: theme.spacing(3),
      ".MuiSwitch-root + .MuiFormControlLabel-label": {
        fontSize: theme.typography.paragraph.sm.regular.fontSize,
        fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
        lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
        color: theme.palette.toggle.label
      },
      "&:focus-visible": {
        color: theme.palette.textField.focus.border,
        borderWidth: "1px!important"
      },
      ".MuiCheckbox-root": {
        paddingRight: theme.spacing(0)
      },
      "&.T1-formControlLabel-checkbox": {
        height: "24px",
        ".MuiFormControlLabel-label": {
          fontSize: theme.typography.paragraph.md.regular.fontSize,
          fontFamily: theme.typography.paragraph.md.regular.fontFamily,
          lineHeight: theme.typography.paragraph.md.regular.lineHeight,
          padding: theme.spacing(0, 1, 0, 0)
        },
        "&.Mui-error": {
          "&>.MuiCheckbox-root": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.error.unchecked
            }
          },
          "&>.Mui-checked, &>.MuiCheckbox-indeterminate": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.error.checked
            }
          },
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.error.label
            }
          }
        },
        "&>.Mui-disabled.MuiFormControlLabel-label": {
          "& .MuiSvgIcon-root": {
            color: checkboxPalette.disabled.label
          }
        },
        "&:hover:not(.Mui-disabled, .Mui-error), &.hoverStories:not(.Mui-disabled, .Mui-error)": {
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.hover.label
            }
          },
          "&>.MuiCheckbox-root": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.hover.unchecked
            }
          },
          "&>.Mui-checked, &>.MuiCheckbox-indeterminate": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.hover.checked
            }
          }
        },
        "&.T1-formControlLabel-checkbox-focused": {
          outline: `dashed 1px ${checkboxPalette.outlineFocus}`,
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: checkboxPalette.focus.label
            }
          }
        }
      },
      "&.T1-formControlLabel-radio-checked": {
        outline: `dashed 1px ${checkboxPalette.outlineFocus}`
      },
      "&.T1-formControlLabel-radio": {
        gap: theme.spacing(1.5),
        paddingRight: theme.spacing(0.75),
        width: "fit-content",
        ".MuiFormControlLabel-label": {
          fontSize: theme.typography.paragraph.md.regular.fontSize,
          fontFamily: theme.typography.paragraph.md.regular.fontFamily,
          lineHeight: theme.typography.paragraph.md.regular.lineHeight
        },
        "&.Mui-error": {
          ".MuiRadio-root": {
            ".MuiSvgIcon-root, .MuiSvgIcon-root:nth-of-type(2)": {
              color: theme.palette.radioButton.error.color
            }
          }
        },
        "&>.Mui-disabled.MuiFormControlLabel-label": {
          color: theme.palette.radioButton.disabled.label,
          ".MuiRadio-root .MuiSvgIcon-root": {
            color: theme.palette.radioButton.disabled.color
          }
        },
        "&:hover:not(.Mui-disabled, .Mui-error), &.hoverStories:not(.Mui-disabled, .Mui-error)": {
          ".MuiRadio-root .MuiSvgIcon-root": {
            color: theme.palette.radioButton.hover.color
          }
        },
        "&.T1-formControlLabel-radio-focused": {
          outline: `dashed 1px ${theme.palette.radioButton.outlineFocus}`,
          "&>.MuiFormControlLabel-label": {
            "& .MuiSvgIcon-root": {
              color: theme.palette.radioButton.focus.color
            }
          }
        }
      }
    };
  }
);

// lib/form-label/component.tsx
var import_material24 = require("@mui/material");
var import_styles15 = require("@mui/material/styles");
var import_jsx_runtime20 = require("react/jsx-runtime");
var StyledFormLabel = (0, import_styles15.styled)(import_material24.FormLabel)(({ theme }) => ({
  color: theme.palette.typography.color,
  fontSize: theme.typography.paragraph.md.medium.fontSize,
  fontFamily: theme.typography.paragraph.md.medium.fontFamily,
  lineHeight: theme.typography.paragraph.md.medium.lineHeight,
  paddingBottom: theme.spacing(1.5),
  "&.Mui-focused:not(.Mui-error)": {
    color: theme.palette.text.primary
  }
}));

// lib/radio-button/component.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var StyledRadio = (0, import_styles16.styled)(import_material25.Radio)(({ theme }) => ({
  padding: theme.spacing(1),
  ".MuiSvgIcon-root": {
    color: theme.palette.radioButton.default.unchecked,
    width: "16px",
    height: "16px"
  },
  ".MuiSvgIcon-root:nth-of-type(2)": {
    color: theme.palette.radioButton.default.checked
  },
  "&.Mui-disabled": {
    "& .MuiSvgIcon-root": {
      color: theme.palette.checkbox.disabled.unchecked
    },
    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
      "& .MuiSvgIcon-root": {
        color: theme.palette.checkbox.disabled.checked
      }
    }
  },
  "&.Mui-focusVisible": {
    "& .MuiSvgIcon-root": {
      color: theme.palette.checkbox.focus.unchecked
    },
    "&.Mui-checked, &.MuiCheckbox-indeterminate": {
      "& .MuiSvgIcon-root": {
        color: theme.palette.checkbox.focus.checked
      }
    }
  }
}));

// lib/tile/component.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
var StyledTile = (0, import_styles17.styled)(import_material.Box)(({ theme }) => {
  return {
    padding: theme.spacing(6),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.tile.border}`,
    outline: "none",
    backgroundColor: theme.palette.tile.background,
    display: "flex",
    justifyContent: "flex-start",
    position: "relative",
    minWidth: "280px",
    ".T1-badge-tile-icon": {
      width: "32px",
      height: "32px",
      position: "absolute",
      right: "-16px",
      top: "-16px",
      color: theme.palette.tile.selected.border,
      backgroundColor: theme.palette.tile.badgeBackground,
      borderRadius: "50%",
      path: {
        transform: "scale(1.20)",
        transformOrigin: "50% 50%"
      }
    },
    ".T1-tile-action-container": {
      position: "absolute",
      right: theme.spacing(6),
      top: theme.spacing(6),
      pointerEvents: "none"
    },
    "&:hover, &.T1-tile-hover": {
      cursor: "pointer",
      borderColor: theme.palette.tile.hover.border
    },
    "&:active:not(.T1-tile-selected, .T1-tile-error, :is(div)), &.T1-tile-active:not(.T1-tile-selected, .T1-tile-error)": {
      borderColor: theme.palette.tile.active.border
    },
    "&.T1-tile-error": {
      borderColor: theme.palette.tile.error.border
    },
    "&.T1-tile-selected": {
      borderColor: theme.palette.tile.selected.border
    },
    "&:focus-visible, &.T1-tile-focus": {
      outline: `1px dashed ${theme.palette.outline}`
    },
    ".T1-typography": {
      color: theme.palette.tile.text
    },
    "&.T1-tile-disabled": {
      backgroundColor: theme.palette.tile.disabled.background,
      pointerEvents: "none",
      color: theme.palette.tile.disabled.text,
      "&.T1-typography": {
        color: theme.palette.tile.disabled.text
      }
    },
    "&.T1-tile-elevated": {
      boxShadow: theme.shadows[1],
      border: "none",
      "&.T1-tile-selected": {
        border: `1px solid ${theme.palette.tile.selected.border}`
      },
      "&.T1-tile-error": {
        boxShadow: theme.shadows[0],
        border: `1px solid ${theme.palette.tile.error.border}`
      },
      "&:hover, &.T1-tile-hover": {
        cursor: "pointer",
        "&:not(:is(div))": {
          boxShadow: theme.shadows[2]
        }
      },
      "&:active, &.T1-tile-active": {
        boxShadow: theme.shadows[3]
      }
    }
  };
});

// lib/tile/tileInput.tsx
var import_react9 = __toESM(require("react"), 1);
var import_styles18 = require("@mui/material/styles");
var import_jsx_runtime23 = require("react/jsx-runtime");
var Tile = (0, import_styles18.styled)(import_material.Stack)(({ theme, tilePosition }) => ({
  minWidth: "31px",
  width: "100%",
  padding: theme.spacing(3),
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  borderRadius: getBorderRadius(tilePosition, 4),
  border: `1px solid ${theme.palette.inputTile.border}`,
  cursor: "pointer",
  "&:hover, &.hover-input-tile": {
    border: `1px solid ${theme.palette.inputTile.hover.border}`
  },
  "&:active, &.active-input-tile": {
    border: `1px solid ${theme.palette.inputTile.active.border}`
  },
  "&:focus": {
    outline: `1px dashed ${theme.palette.inputTile.focus.border}`
  },
  "&.selected": {
    border: `1px solid ${theme.palette.inputTile.selected.border}`,
    background: theme.palette.inputTile.selected.background,
    ".MuiTypography-root": {
      color: theme.palette.inputTile.selected.text
    }
  },
  "&.disabled": {
    background: theme.palette.inputTile.disabled.background,
    border: `1px solid ${theme.palette.inputTile.disabled.border}`,
    cursor: "not-allowed",
    ".MuiTypography-root": {
      color: theme.palette.inputTile.disabled.text
    }
  },
  "&:not(:last-child)": {
    marginLeft: "-1px",
    marginBottom: "-1px"
  }
}));
var getBorderRadius = (tilePosition, borderRadius) => ({
  top: `${borderRadius}px ${borderRadius}px 0px 0px`,
  right: `0px ${borderRadius}px ${borderRadius}px 0px`,
  bottom: `0px 0px ${borderRadius}px ${borderRadius}px`,
  left: `${borderRadius}px 0px 0px ${borderRadius}px`,
  middle: `0px 0px 0px 0px`
})[tilePosition ?? "top"];
var InputScaleContainer = (0, import_styles18.styled)(import_material.Stack)(
  ({ variant }) => ({
    width: variant === "row" ? "100%" : "auto",
    flexDirection: variant
  })
);

// lib/timeline/component.tsx
var import_lab = require("@mui/lab");
var import_material26 = require("@mui/material");
var import_jsx_runtime24 = require("react/jsx-runtime");
var StyledTimeline = (0, import_material26.styled)(import_lab.Timeline)(({ theme }) => {
  return {
    ".MuiTimelineItem-root": {
      "&:before": {
        display: "none"
      },
      "&:hover": {
        ".MuiTimelineDot-root, .MuiTimelineConnector-root": {
          backgroundColor: theme.palette.timeline.hover
        },
        ".MuiTimelineDot-outlined": {
          outline: `2px solid ${theme.palette.timeline.hover}`,
          backgroundColor: "transparent"
        }
      },
      "&:active": {
        ".MuiTimelineDot-root, .MuiTimelineConnector-root": {
          backgroundColor: theme.palette.timeline.active
        },
        ".MuiTimelineDot-outlined": {
          outline: `2px solid ${theme.palette.timeline.active}`,
          backgroundColor: "transparent"
        }
      },
      "&:not(:first-of-type)": {
        ".MuiTimelineContent-root": {
          transform: `translateY(${theme.spacing(-1.5)})`
        }
      }
    },
    ".MuiTimelineSeparator-root": {
      width: 24,
      flex: "none"
    },
    ".MuiTimelineDot-root": {
      border: "none",
      margin: 0,
      backgroundColor: theme.palette.timeline.regular,
      width: 12,
      height: 12,
      boxSizing: "border-box",
      padding: 0,
      outlineOffset: -2,
      "&.MuiTimelineDot-outlined": {
        outline: `2px solid ${theme.palette.timeline.regular}`,
        backgroundColor: "transparent"
      },
      "&:not(:has(*))": {
        transform: `translateX(${theme.spacing(1.5)})`
      },
      "&:has(*)": {
        padding: 0,
        width: "auto",
        height: "auto"
      }
    },
    ".MuiTimelineConnector-root": {
      backgroundColor: theme.palette.timeline.regular
    },
    ".MuiTimelineContent-root": {
      padding: theme.spacing(3),
      paddingTop: 0,
      ".T1-timeline-primaryContent": {
        color: theme.palette.timeline.primaryContent
      },
      ".T1-timeline-secondaryContent": {
        color: theme.palette.timeline.secondaryContent
      }
    }
  };
});

// lib/timeline/theme.ts
var timelineTheme = {
  dark: {
    name: "timeline",
    styles: {
      regular: COLORS.SYSTEM.SILVER,
      hover: COLORS.SYSTEM.MISTY,
      active: COLORS.SECONDARY.BLUE_40,
      primaryContent: COLORS.SYSTEM.WHITE,
      secondaryContent: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "timeline",
    styles: {
      regular: COLORS.SYSTEM.SILVER,
      hover: COLORS.SYSTEM.PEWTER,
      active: COLORS.SECONDARY.BLUE_60,
      primaryContent: COLORS.SYSTEM.INK,
      secondaryContent: COLORS.SYSTEM.DARK_30
    }
  }
};

// lib/time-picker/theme.ts
var timePickerTheme = {
  dark: {
    name: "timePicker",
    styles: {
      selectionBand: COLORS.SYSTEM.INK,
      background: COLORS.SYSTEM.DARK_80,
      formColumnHeader: COLORS.SYSTEM.SILVER,
      formButtonColor: COLORS.SYSTEM.WHITE
    }
  },
  light: {
    name: "timePicker",
    styles: {
      selectionBand: COLORS.SECONDARY.BLUE_20,
      background: COLORS.SYSTEM.WHITE,
      formColumnHeader: COLORS.SYSTEM.DARK_30,
      formButtonColor: COLORS.SYSTEM.INK
    }
  }
};

// lib/time-picker/component.tsx
var import_react12 = require("react");

// lib/icon-button/component.tsx
var import_material27 = require("@mui/material");
var import_jsx_runtime25 = require("react/jsx-runtime");
var IconButton2 = (props) => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_material27.IconButton,
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

// lib/time-picker/TimePickerForm.tsx
var import_react11 = require("react");
var import_styles20 = require("@mui/material/styles");

// lib/time-picker/state.tsx
var import_jotai = require("jotai");
var import_utils43 = require("jotai/utils");

// lib/time-picker/utils.tsx
var addZeroes = (number) => {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
};
var parseTimeObject = (timeObject) => {
  return `${addZeroes(timeObject.hours)}:${addZeroes(timeObject.minutes)} ${clockValues.aa[timeObject.aa - 1]} ${timeObject.timeZone ? clockValues.timeZone[timeObject.timeZone - 1] : ""}`;
};

// lib/time-picker/state.tsx
var import_jotai_scope = require("jotai-scope");
var import_vanilla = require("jotai/vanilla");
var { Provider, useAtom: useMyAtom } = (0, import_jotai_scope.createIsolation)();
var clockValues = {
  hours: 12,
  minutes: 60,
  aa: ["AM", "PM"],
  timeZone: ["CST", "PST", "EST", "AKST", "HST"]
};
var initialTimeValuesAtomStartingValue = {
  hours: 1,
  minutes: 0,
  aa: 1
};
var initialTimeValuesAtom_ = (0, import_jotai.atom)(
  initialTimeValuesAtomStartingValue
);
var timeValuesAtom_ = (0, import_utils43.atomWithDefault)(
  (get) => get(initialTimeValuesAtom_)
);
var unconfirmedInputValueAtom_ = (0, import_jotai.atom)(
  (get) => parseTimeObject(get(timeValuesAtom_))
);
var inputValueAtom_ = (0, import_jotai.atom)(`01:00 AM`);

// lib/divider/component.tsx
var import_material28 = require("@mui/material");
var import_jsx_runtime26 = require("react/jsx-runtime");
var Divider = (props) => /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_material28.Divider, { ...props });

// lib/time-picker/TimePickerFormColumn.tsx
var import_react10 = __toESM(require("react"), 1);
var import_styles19 = require("@mui/material/styles");
var import_jsx_runtime27 = require("react/jsx-runtime");
var propsAreEqual = (oldProps, newProps) => {
  return oldProps.selectedIndex === newProps.selectedIndex;
};
var StyledColumn = (0, import_styles19.styled)(import_material.Stack, {
  shouldForwardProp: (prop) => prop !== "selectedIndex"
})(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
  overflow: "scroll",
  scrollBehavior: "smooth",
  scrollbarWidth: "none",
  "::-webkit-scrollbar": {
    display: "none"
  },
  ".selectionFormColumnScroll": {
    display: "flex",
    flexDirection: "column",
    "&:before": {
      content: "''",
      height: "80px",
      width: "100%"
    },
    "&:after": {
      content: "''",
      height: "80px",
      width: "100%"
    }
  },
  ".selectionFormColumn-element": {
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    backgroundColor: "transparent",
    borderRadius: 0,
    border: "none",
    cursor: "pointer",
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    color: theme.palette.timePicker.formButtonColor,
    outlineOffset: -1,
    "&.active": {
      fontFamily: theme.typography.paragraph.sm.medium.fontFamily
    },
    "&:focus": {
      outline: `1px dashed ${theme.palette.checkbox.outlineFocus}`
    }
  },
  ".selectionFormColumn-element.active": {
    fontFamily: theme.typography.paragraph.sm.medium.fontFamily
  }
}));
var StyledColumnHeader = (0, import_styles19.styled)(import_material.Stack)(({ theme }) => ({
  width: "100%",
  height: "40px",
  backgroundColor: theme.palette.timePicker.background,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ".MuiTypography-root": {
    color: theme.palette.timePicker.formColumnHeader
  }
}));
var TimePickerFormColumn = (0, import_react10.memo)(
  ({
    children,
    type,
    selectedIndex,
    setTimeValues
  }) => {
    const columnRef = import_react10.default.useRef(null);
    const [scrolling, setScrolling] = import_react10.default.useState(false);
    const scrollTimeoutRef = (0, import_react10.useRef)(null);
    (0, import_react10.useEffect)(() => {
      if (!scrolling) {
        columnRef.current.scrollTo({ top: 40 * selectedIndex });
      }
    }, [selectedIndex]);
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        setScrolling(false);
        if (columnRef.current.scrollTop % 40 < 20) {
          const newIndex = type === "minutes" ? columnRef.current.scrollTop / 40 : columnRef.current.scrollTop / 40 + 1;
          setTimeValues((prev) => ({
            ...prev,
            [type]: Math.floor(newIndex)
          }));
          columnRef.current.scrollTop = 40 * selectedIndex;
        } else {
          const newIndex = type === "minutes" ? columnRef.current.scrollTop / 40 + 1 : columnRef.current.scrollTop / 40 + 2;
          setTimeValues((prev) => ({
            ...prev,
            [type]: Math.floor(newIndex)
          }));
          columnRef.current.scrollTop = 40 * selectedIndex;
        }
      }, 200);
      if (!scrolling) {
        setScrolling(true);
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      StyledColumn,
      {
        selectedIndex,
        flexWrap: "nowrap",
        className: `selectionFormColumn selectionFormColumn-${type}`,
        ref: columnRef,
        onScroll: handleScroll,
        "data-testid": `time-picker-form-column-${type}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)("div", { className: "selectionFormColumnScroll", children })
      }
    );
  },
  propsAreEqual
);
var TimePickerFormColumnHeader = (0, import_react10.memo)(
  ({ label }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      StyledColumnHeader,
      {
        flexWrap: "nowrap",
        className: `selectionFormColumnHeader selectionFormColumnHeader-${label}`,
        children: /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(Typography, { variant: "paragraphSm", children: label })
      }
    );
  }
);

// lib/time-picker/TimePickerForm.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var StyledTimePickerFormContainer = (0, import_styles20.styled)(import_material.Stack)(({ theme }) => ({
  backgroundColor: theme.palette.timePicker.background,
  "&::before": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "40px",
    backgroundColor: theme.palette.timePicker.selectionBand,
    top: "120px"
  }
}));
var TimePickerForm = ({
  closeMenu,
  setInputValue,
  timeValues,
  setTimeValues,
  unconfirmedInputValue,
  setInitialTimeValues
}) => {
  const selectionFormRef = (0, import_react11.useRef)();
  (0, import_react11.useLayoutEffect)(() => {
    focusNextButton("minutes");
  }, [timeValues.minutes]);
  (0, import_react11.useLayoutEffect)(() => {
    focusNextButton("aa");
  }, [timeValues.aa]);
  (0, import_react11.useLayoutEffect)(() => {
    if (timeValues.timeZone) {
      focusNextButton("timeZone");
    }
  }, [timeValues.timeZone]);
  (0, import_react11.useLayoutEffect)(() => {
    focusNextButton("hours");
  }, [timeValues.hours]);
  const handleSelectionFormKeyDown = (event) => {
    event.stopPropagation();
    if (event.key === "Tab" && document.activeElement === selectionFormRef.current) {
      const firstButton = selectionFormRef.current?.querySelector(
        ".active"
      );
      firstButton?.focus();
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  };
  const focusNextButton = (column) => {
    const currentColumn = selectionFormRef.current?.querySelector(
      `.selectionFormColumn-${column}`
    );
    const buttonToFocus = currentColumn?.querySelector(
      ".active"
    );
    buttonToFocus.focus();
  };
  const handleSelectionFormButtonKeyDown = (event, column) => {
    event.stopPropagation();
    if (event.key === "ArrowDown") {
      event.preventDefault();
      switch (column) {
        case "hours": {
          if (timeValues.hours < clockValues.hours) {
            setTimeValues((prev) => ({ ...prev, hours: prev.hours + 1 }));
          }
          break;
        }
        case "minutes": {
          if (timeValues.minutes < clockValues.minutes - 1) {
            setTimeValues((prev) => ({ ...prev, minutes: prev.minutes + 1 }));
          }
          break;
        }
        case "aa": {
          if (timeValues.aa < clockValues.aa.length) {
            setTimeValues((prev) => ({ ...prev, aa: prev.aa + 1 }));
          }
          break;
        }
        case "timeZone": {
          if (timeValues.timeZone < clockValues.timeZone.length) {
            setTimeValues((prev) => ({
              ...prev,
              timeZone: prev.timeZone + 1
            }));
          }
          break;
        }
      }
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      switch (column) {
        case "hours": {
          if (timeValues.hours > 1) {
            setTimeValues((prev) => ({ ...prev, hours: prev.hours - 1 }));
          }
          break;
        }
        case "minutes": {
          if (timeValues.minutes > 0) {
            setTimeValues((prev) => ({ ...prev, minutes: prev.minutes - 1 }));
          }
          break;
        }
        case "aa": {
          if (timeValues.aa > 1) {
            setTimeValues((prev) => ({ ...prev, aa: prev.aa - 1 }));
          }
          break;
        }
        case "timeZone": {
          if (timeValues.timeZone > 1) {
            setTimeValues((prev) => ({
              ...prev,
              timeZone: prev.timeZone - 1
            }));
          }
          break;
        }
      }
    }
    if (event.key === "Escape") {
      closeMenu();
    }
  };
  const handleSelectionFormButtonClick = (column, index) => {
    setTimeValues((prev) => {
      switch (column) {
        case "hours": {
          return { ...prev, hours: index + 1 };
        }
        case "minutes": {
          return { ...prev, minutes: index };
        }
        case "aa": {
          return { ...prev, aa: index + 1 };
        }
        case "timeZone": {
          return { ...prev, timeZone: index + 1 };
        }
      }
    });
  };
  const getActiveClass = (column, index) => {
    switch (column) {
      case "hours": {
        return timeValues.hours === index + 1 ? "active" : "";
      }
      case "minutes": {
        return timeValues.minutes === index ? "active" : "";
      }
      case "aa": {
        return timeValues.aa === index + 1 ? "active" : "";
      }
      case "timeZone": {
        return timeValues.timeZone === index + 1 ? "active" : "";
      }
    }
  };
  const getTabIndex = (column, index) => {
    switch (column) {
      case "hours": {
        return timeValues.hours === index + 1 ? 0 : -1;
      }
      case "minutes": {
        return timeValues.minutes === index ? 0 : -1;
      }
      case "aa": {
        return timeValues.aa === index + 1 ? 0 : -1;
      }
      case "timeZone": {
        return timeValues.timeZone === index + 1 ? 0 : -1;
      }
    }
  };
  const renderNumbers = (number, column) => {
    return Array.from({ length: number }).map((_, index) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "button",
      {
        onKeyDown: (e) => {
          handleSelectionFormButtonKeyDown(e, column);
        },
        className: `selectionFormColumn-element ${getActiveClass(
          column,
          index
        )}`,
        tabIndex: getTabIndex(column, index),
        onClick: () => {
          handleSelectionFormButtonClick(column, index);
        },
        children: column === "minutes" ? index < 10 ? `0${index}` : `${index}` : index < 9 ? `0${index + 1}` : `${index + 1}`
      },
      `clockNumber-${index + 1}`
    ));
  };
  const renderStringValues = (values, column) => {
    return values.map((value, index) => /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
      "button",
      {
        onKeyDown: (e) => {
          handleSelectionFormButtonKeyDown(e, column);
        },
        className: `selectionFormColumn-element ${getActiveClass(
          column,
          index
        )}`,
        tabIndex: getTabIndex(column, index),
        onClick: () => {
          handleSelectionFormButtonClick(column, index);
        },
        children: value
      },
      `clockValue-${value}`
    ));
  };
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(StyledTimePickerFormContainer, { "data-testid": "time-picker-menu", children: [
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_material.Stack, { direction: "row", children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TimePickerFormColumnHeader, { label: "Hour" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TimePickerFormColumnHeader, { label: "Minute" }),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TimePickerFormColumnHeader, { label: "AM/PM" }),
      timeValues.timeZone && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(TimePickerFormColumnHeader, { label: "Time zone" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
      import_material.Stack,
      {
        onKeyDown: handleSelectionFormKeyDown,
        ref: selectionFormRef,
        direction: "row",
        className: "selectionForm-root",
        "data-testid": "selectionForm",
        sx: {
          overflow: "hidden",
          position: "relative",
          height: "200px",
          width: "360px"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "hours",
              selectedIndex: timeValues.hours - 1,
              children: renderNumbers(clockValues.hours, "hours")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "minutes",
              selectedIndex: timeValues.minutes,
              children: renderNumbers(clockValues.minutes, "minutes")
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "aa",
              selectedIndex: timeValues.aa - 1,
              children: renderStringValues(clockValues.aa, "aa")
            }
          ),
          timeValues.timeZone && /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
            TimePickerFormColumn,
            {
              setTimeValues,
              type: "timeZone",
              selectedIndex: timeValues.timeZone - 1,
              children: renderStringValues(clockValues.timeZone, "timeZone")
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(Divider, {}),
    /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_material.Stack, { direction: "row", px: 6, py: 4, gap: 3, children: [
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        Button,
        {
          onKeyDown: (e) => {
            e.stopPropagation();
          },
          tabIndex: 0,
          size: "medium",
          fullWidth: true,
          variant: "secondary",
          onClick: () => {
            closeMenu();
          },
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
        Button,
        {
          tabIndex: 0,
          size: "medium",
          fullWidth: true,
          onKeyDown: (e) => {
            e.stopPropagation();
          },
          onClick: () => {
            setInitialTimeValues(timeValues);
            setInputValue(unconfirmedInputValue);
            closeMenu();
          },
          children: "Set"
        }
      )
    ] })
  ] });
};

// lib/input-adornment/component.tsx
var import_material29 = require("@mui/material");
var import_jsx_runtime29 = require("react/jsx-runtime");
var InputAdornment = (props) => /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_material29.InputAdornment, { ...props });

// lib/time-picker/component.tsx
var import_icons_material5 = require("@mui/icons-material");
var import_utils45 = require("jotai/utils");
var import_jsx_runtime30 = require("react/jsx-runtime");
var TimePicker_ = (0, import_react12.memo)(
  ({ variant = "regular", onValueChange }) => {
    const timePickerRef = (0, import_react12.useRef)();
    const [inputFocused, setInputFocused] = (0, import_react12.useState)(false);
    const [anchorEl, setAnchorEl] = (0, import_react12.useState)(null);
    const [selectedRange, setSelectedRange] = (0, import_react12.useState)(0);
    const [newInteraction, setNewInteraction] = (0, import_react12.useState)(true);
    const [timeValues, setTimeValues] = useMyAtom(timeValuesAtom_);
    const [inputValue, setInputValue] = useMyAtom(inputValueAtom_);
    const [initialTimeValues, setInitialTimeValues] = useMyAtom(
      initialTimeValuesAtom_
    );
    const [unconfirmedInputValue] = useMyAtom(unconfirmedInputValueAtom_);
    (0, import_react12.useEffect)(() => {
      if (!Boolean(anchorEl)) {
        setInputValue(unconfirmedInputValue);
      }
    }, [unconfirmedInputValue]);
    (0, import_react12.useEffect)(() => {
      setInitialTimeValues(timeValues);
    }, [inputValue]);
    const handleIconClick = () => {
      setAnchorEl(timePickerRef.current);
    };
    const handleClose = () => {
      setTimeValues(import_utils45.RESET);
      setAnchorEl(null);
    };
    (0, import_react12.useEffect)(() => {
      if (variant === "timezone") {
        setInitialTimeValues({ ...initialTimeValues, timeZone: 1 });
        setTimeValues({ ...initialTimeValues, timeZone: 1 });
        setInputValue(`${inputValue} ${clockValues.timeZone[0]}`);
      }
      if (onValueChange) {
        onValueChange(inputValue);
      }
    }, []);
    (0, import_react12.useEffect)(() => {
      setNewInteraction(false);
      if (onValueChange) {
        onValueChange(inputValue);
      }
      if (inputFocused) {
        if (selectedRange === 0) {
          timePickerRef.current.setSelectionRange(0, 2);
        } else if (selectedRange === 1) {
          timePickerRef.current.setSelectionRange(3, 5);
        } else if (selectedRange === 2) {
          timePickerRef.current.setSelectionRange(6, 8);
        } else if (variant === "timezone") {
          timePickerRef.current.setSelectionRange(9, -1);
        }
      }
    }, [inputValue]);
    const handleInputTouch = (e) => {
      setNewInteraction(true);
      const inputElement = e.target;
      if (typeof e.target.className === "string" && e.target.className.includes("MuiInputBase-input")) {
        const selectionStart = inputElement.selectionStart;
        if (selectionStart < 3) {
          setSelectedRange(0);
          inputElement.setSelectionRange(0, 2);
        } else if (selectionStart < 6) {
          setSelectedRange(1);
          inputElement.setSelectionRange(3, 5);
        } else if (selectionStart < 9) {
          setSelectedRange(2);
          inputElement.setSelectionRange(6, 8);
        } else {
          setSelectedRange(3);
          inputElement.setSelectionRange(9, -1);
        }
      }
    };
    const handleKeyDown = (e) => {
      const inputElement = e.target;
      if (e.key !== "Tab" && e.key !== "Shift" && e.key !== " " && e.key !== "Enter") {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowRight": {
          if (selectedRange === 0) {
            setNewInteraction(true);
            setSelectedRange(1);
            inputElement.setSelectionRange(3, 5);
          } else if (selectedRange === 1) {
            setNewInteraction(true);
            setSelectedRange(2);
            inputElement.setSelectionRange(6, 8);
          } else if (variant === "timezone") {
            setNewInteraction(true);
            setSelectedRange(3);
            inputElement.setSelectionRange(9, -1);
          }
          break;
        }
        case "ArrowLeft": {
          if (selectedRange === 3) {
            setNewInteraction(true);
            setSelectedRange(2);
            inputElement.setSelectionRange(6, 8);
          } else if (selectedRange === 2) {
            setNewInteraction(true);
            setSelectedRange(1);
            inputElement.setSelectionRange(3, 5);
          } else {
            setNewInteraction(true);
            setSelectedRange(0);
            inputElement.setSelectionRange(0, 2);
          }
          break;
        }
        case "ArrowUp": {
          if (selectedRange === 0) {
            if (timeValues.hours < clockValues.hours) {
              setTimeValues((prev) => ({ ...prev, hours: prev.hours + 1 }));
            } else {
              setTimeValues((prev) => ({ ...prev, hours: 1 }));
            }
          } else if (selectedRange === 1) {
            if (timeValues.minutes < clockValues.minutes - 1) {
              setTimeValues((prev) => ({ ...prev, minutes: prev.minutes + 1 }));
            } else {
              setTimeValues((prev) => ({ ...prev, minutes: 0 }));
            }
          } else if (selectedRange === 2) {
            if (timeValues.aa < clockValues.aa.length) {
              setTimeValues((prev) => ({ ...prev, aa: prev.aa + 1 }));
            } else {
              setTimeValues((prev) => ({ ...prev, aa: 1 }));
            }
          } else if (selectedRange === 3) {
            if (timeValues.timeZone < clockValues.timeZone.length) {
              setTimeValues((prev) => ({
                ...prev,
                timeZone: prev.timeZone + 1
              }));
            } else {
              setTimeValues((prev) => ({ ...prev, timeZone: 1 }));
            }
          }
          break;
        }
        case "ArrowDown": {
          switch (selectedRange) {
            case 0: {
              if (timeValues.hours > 1) {
                setTimeValues((prev) => ({ ...prev, hours: prev.hours - 1 }));
              } else {
                setTimeValues((prev) => ({ ...prev, hours: 12 }));
              }
              break;
            }
            case 1: {
              if (timeValues.minutes > 0) {
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: prev.minutes - 1
                }));
              } else {
                setTimeValues((prev) => ({ ...prev, minutes: 59 }));
              }
              break;
            }
            case 2: {
              if (timeValues.aa > 1) {
                setTimeValues((prev) => ({ ...prev, aa: prev.aa - 1 }));
              } else {
                setTimeValues((prev) => ({
                  ...prev,
                  aa: clockValues.aa.length
                }));
              }
              break;
            }
            case 3: {
              if (timeValues.timeZone > 1) {
                setTimeValues((prev) => ({
                  ...prev,
                  timeZone: prev.timeZone - 1
                }));
              } else {
                setTimeValues((prev) => ({
                  ...prev,
                  timeZone: clockValues.timeZone.length
                }));
              }
              break;
            }
          }
          break;
        }
        case "Tab": {
          setSelectedRange(4);
          setNewInteraction(true);
          break;
        }
        case "0": {
          switch (selectedRange) {
            case 0: {
              if (!newInteraction && timeValues.hours === 1) {
                setTimeValues((prev) => ({ ...prev, hours: 10 }));
                setSelectedRange(1);
                inputElement.setSelectionRange(3, 5);
                setNewInteraction(true);
              }
              break;
            }
            case 1: {
              if (newInteraction) {
                setTimeValues((prev) => ({ ...prev, minutes: 0 }));
              } else {
                switch (timeValues.minutes) {
                  case 1:
                  case 2:
                  case 3:
                  case 4:
                  case 5: {
                    const newMinutes = `${timeValues.minutes}${e.key}`;
                    setTimeValues((prev) => ({
                      ...prev,
                      minutes: parseInt(newMinutes)
                    }));
                    setSelectedRange(2);
                    inputElement.setSelectionRange(6, 8);
                    setNewInteraction(true);
                    break;
                  }
                }
              }
              break;
            }
          }
          break;
        }
        case "1":
        case "2": {
          switch (selectedRange) {
            case 0: {
              if (newInteraction) {
                setTimeValues((prev) => ({ ...prev, hours: parseInt(e.key) }));
                setNewInteraction(false);
                if (e.key !== "1") {
                  setSelectedRange(1);
                  inputElement.setSelectionRange(3, 5);
                  setNewInteraction(true);
                }
              } else {
                if (timeValues.hours === 1) {
                  const newHours = `${timeValues.hours}${e.key}`;
                  setTimeValues((prev) => ({
                    ...prev,
                    hours: parseInt(newHours)
                  }));
                  setSelectedRange(1);
                  inputElement.setSelectionRange(3, 5);
                  setNewInteraction(true);
                }
              }
              break;
            }
            case 1: {
              if (newInteraction) {
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: parseInt(e.key)
                }));
                setNewInteraction(false);
              } else {
                if (timeValues.minutes < 6) {
                  const newMinutes = `${timeValues.minutes}${e.key}`;
                  setTimeValues((prev) => ({
                    ...prev,
                    minutes: parseInt(newMinutes)
                  }));
                  if (parseInt(newMinutes) > 3) {
                    setSelectedRange(2);
                    inputElement.setSelectionRange(6, 8);
                    setNewInteraction(true);
                  }
                }
              }
              break;
            }
          }
          break;
        }
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          switch (selectedRange) {
            case 0: {
              setTimeValues((prev) => ({ ...prev, hours: parseInt(e.key) }));
              setSelectedRange(1);
              inputElement.setSelectionRange(3, 5);
              setNewInteraction(true);
              break;
            }
            case 1: {
              if (timeValues.minutes > 0 && timeValues.minutes < 6) {
                const newMinutes = `${timeValues.minutes}${e.key}`;
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: parseInt(newMinutes)
                }));
                setSelectedRange(2);
                inputElement.setSelectionRange(6, 8);
                setNewInteraction(true);
              } else {
                setTimeValues((prev) => ({
                  ...prev,
                  minutes: parseInt(e.key)
                }));
                if (parseInt(e.key) > 5) {
                  setSelectedRange(2);
                  inputElement.setSelectionRange(6, 8);
                  setNewInteraction(true);
                }
              }
              break;
            }
          }
          break;
        }
        case "a":
        case "A": {
          switch (selectedRange) {
            case 2: {
              setTimeValues((prev) => ({ ...prev, aa: 1 }));
              if (variant === "timezone") {
                setSelectedRange(3);
                inputElement.setSelectionRange(9, -1);
              }
              break;
            }
            case 3: {
              setTimeValues((prev) => ({ ...prev, timeZone: 4 }));
              break;
            }
          }
          break;
        }
        case "c":
        case "C": {
          if (selectedRange === 3) {
            setTimeValues((prev) => ({ ...prev, timeZone: 1 }));
          }
          break;
        }
        case "e":
        case "E": {
          if (selectedRange === 3) {
            setTimeValues((prev) => ({ ...prev, timeZone: 3 }));
          }
          break;
        }
        case "h":
        case "H": {
          if (selectedRange === 3) {
            setTimeValues((prev) => ({ ...prev, timeZone: 5 }));
          }
          break;
        }
        case "p":
        case "P": {
          switch (selectedRange) {
            case 2: {
              setTimeValues((prev) => ({ ...prev, aa: 2 }));
              if (variant === "timezone") {
                setSelectedRange(3);
                inputElement.setSelectionRange(9, -1);
              }
              break;
            }
            case 3: {
              setTimeValues((prev) => ({ ...prev, timeZone: 2 }));
              break;
            }
          }
        }
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(Provider, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        TextField,
        {
          className: "timePicker",
          value: Boolean(anchorEl) ? unconfirmedInputValue : inputValue,
          onKeyDown: handleKeyDown,
          placeholder: "Select a time",
          InputProps: {
            onClick: (e) => {
              handleInputTouch(e);
            },
            onFocus: (e) => {
              timePickerRef.current = e.target;
              setInputFocused(true);
              handleInputTouch(e);
            },
            onBlur: () => {
              setInputFocused(false);
              setSelectedRange(4);
            },
            ref: timePickerRef,
            endAdornment: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(InputAdornment, { position: "end", children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
              IconButton2,
              {
                variant: "input",
                shape: "circle",
                onClick: () => {
                  handleIconClick();
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_icons_material5.AccessTime, {})
              }
            ) })
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
        Menu,
        {
          onClose: handleClose,
          open: Boolean(anchorEl),
          anchorEl,
          children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            TimePickerForm,
            {
              closeMenu: handleClose,
              setInputValue,
              timeValues,
              setTimeValues,
              unconfirmedInputValue,
              setInitialTimeValues
            }
          )
        }
      )
    ] });
  }
);

// lib/toggle-button/component.tsx
var import_react13 = require("react");

// lib/toggle-button/theme.tsx
var import_material30 = require("@mui/material");
var import_styles21 = require("@mui/material/styles");
var toggleButtonTheme = {
  dark: {
    name: "toggleButton",
    styles: {
      primary: {
        text: COLORS.PRIMARY.ORANGE_80,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.TRANSPARENT
        },
        hover: {
          body: COLORS.SYSTEM.INK
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SYSTEM.INK
        },
        active: {
          body: COLORS.SYSTEM.DARK_60
        },
        disabled: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.PEWTER
        }
      },
      selected: {
        text: COLORS.SYSTEM.DARK_80,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.SYSTEM.INK
        },
        hover: {
          body: COLORS.SYSTEM.DARK_60
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SYSTEM.DARK_60
        },
        active: {
          body: COLORS.SYSTEM.DARK_70
        },
        disabled: {
          body: COLORS.SYSTEM.INK,
          text: COLORS.SYSTEM.PEWTER
        }
      }
    }
  },
  light: {
    name: "toggleButton",
    styles: {
      primary: {
        text: COLORS.SYSTEM.WHITE,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SYSTEM.WHITE
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SYSTEM.WHITE
        },
        active: {
          body: COLORS.SYSTEM.OFF_WHITE
        },
        disabled: {
          body: COLORS.TRANSPARENT,
          text: COLORS.SYSTEM.SILVER
        }
      },
      selected: {
        text: COLORS.SYSTEM.WHITE,
        body: COLORS.TRANSPARENT,
        default: {
          body: COLORS.SYSTEM.WHITE
        },
        hover: {
          body: COLORS.SECONDARY.BLUE_10
        },
        focused: {
          border: COLORS.SECONDARY.BLUE_60,
          body: COLORS.SECONDARY.BLUE_10
        },
        active: {
          body: COLORS.SECONDARY.BLUE_20
        },
        disabled: {
          body: COLORS.SYSTEM.WHITE,
          text: COLORS.SYSTEM.SILVER
        }
      }
    }
  }
};
var StyledToggleButton = (0, import_styles21.styled)(import_material30.Button)(({ theme, selected, hasIcon, hasLabel }) => {
  return {
    borderRadius: "100px",
    textTransform: "none",
    fontWeight: theme.typography.button.fontWeight,
    fontFamily: theme.typography.button.fontFamily,
    fontSize: theme.typography.button.fontSize,
    lineHeight: theme.typography.button.lineHeight,
    padding: theme.spacing(0, 3),
    width: "50%",
    minWidth: hasIcon && !hasLabel ? theme.spacing(5) : "auto",
    height: "28px",
    whiteSpace: "nowrap",
    border: "none",
    position: "relative",
    gap: hasIcon && hasLabel ? theme.spacing(1) : 0,
    backgroundColor: theme.palette.toggleButton.primary.body,
    "& .MuiSvgIcon-root": {
      fontSize: theme.typography.paragraph.xs,
      color: theme.palette.typography.color
    },
    "&.Mui-focusVisible": {
      outline: `2px dashed ${theme.palette.toggleButton.primary.focused.border}`,
      outlineOffset: "2px",
      backgroundColor: theme.palette.toggleButton.primary.focused.body
    },
    "&:disabled": {
      backgroundColor: theme.palette.toggleButton.primary.disabled.body,
      p: {
        color: theme.palette.toggleButton.primary.disabled.text
      },
      cursor: "not-allowed"
    },
    "&:hover": {
      backgroundColor: theme.palette.toggleButton.primary.hover.body
    },
    "&:active": {
      backgroundColor: theme.palette.toggleButton.primary.active.body
    },
    ...selected && {
      backgroundColor: theme.palette.toggleButton.selected.default.body,
      boxShadow: theme.shadows[3],
      "&:hover:not(:disabled)": {
        backgroundColor: theme.palette.toggleButton.selected.hover.body
      },
      "&:active:not(:disabled)": {
        backgroundColor: theme.palette.toggleButton.selected.active.body
      },
      "&.Mui-focusVisible": {
        outline: `2px dashed ${theme.palette.toggleButton.selected.focused.border}`,
        outlineOffset: "2px",
        backgroundColor: theme.palette.toggleButton.selected.focused.body
      },
      "&:disabled": {
        backgroundColor: theme.palette.toggleButton.selected.disabled.body,
        p: {
          color: theme.palette.toggleButton.primary.disabled.text
        },
        cursor: "not-allowed"
      },
      "&:hover": {
        backgroundColor: theme.palette.toggleButton.selected.hover.body
      },
      "&:active": {
        backgroundColor: theme.palette.toggleButton.selected.active.body
      }
    }
  };
});
var StyledButtonGroup = (0, import_styles21.styled)(import_material.Box)(({ theme }) => ({
  display: "flex",
  width: "100%",
  backgroundColor: theme.palette.toggleButton.primary.body,
  padding: theme.spacing(1),
  gap: theme.spacing(1.5)
}));

// lib/toggle-button/component.tsx
var import_jsx_runtime31 = require("react/jsx-runtime");

// lib/toggle/component.tsx
var import_react14 = __toESM(require("react"), 1);
var import_styles22 = require("@mui/material/styles");
var import_material31 = require("@mui/material");
var import_jsx_runtime32 = require("react/jsx-runtime");
var StyledToggle = (0, import_styles22.styled)(import_material31.Switch)(({ theme }) => ({
  width: "44px",
  height: "24px",
  padding: 0,
  position: "relative",
  borderRadius: "12px",
  overflow: "visible",
  ".MuiSwitch-track": {
    opacity: 1,
    borderRadius: "12px"
  },
  ".MuiSwitch-switchBase": {
    width: "24px",
    height: "100%",
    padding: theme.spacing(0.25),
    opacity: 1,
    ".MuiTouchRipple-root": {
      display: "none"
    },
    ".MuiSwitch-thumb": {
      width: "100%",
      height: "100%",
      boxShadow: theme.shadows[1],
      backgroundColor: theme.palette.toggle.thumbUnchecked
    },
    ".PrivateSwitchBase-input": {
      position: "absolute",
      top: 0,
      left: "-24px",
      bottom: 0,
      width: "300%",
      height: "100%"
    },
    "&:hover": {
      ".MuiSwitch-thumb": {
        backgroundColor: theme.palette.toggle.thumbHover
      }
    },
    "& + .MuiSwitch-track": {
      backgroundColor: theme.palette.toggle.trackUnchecked
    },
    "&.Mui-checked": {
      ".MuiSwitch-thumb:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
          theme.palette.toggle.checkIcon
        )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
      },
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.toggle.trackChecked,
        opacity: 1
      }
    },
    "&.Mui-disabled": {
      ".MuiSwitch-thumb": {
        backgroundColor: theme.palette.toggle.thumbDisabled
      },
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.toggle.disabledUnchecked,
        opacity: 1
      },
      "&.Mui-checked": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        },
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.toggle.disabledChecked
        }
      }
    },
    "&.Mui-focusVisible": {
      "& + .MuiSwitch-track": {
        outline: `1px dashed ${theme.palette.outline}`
      }
    }
  },
  "&.MuiSwitch-sizeLarge": {
    width: "52px",
    height: "32px",
    borderRadius: "16px",
    ".MuiSwitch-track": {
      borderRadius: "16px"
    },
    ".MuiSwitch-switchBase": {
      width: "32px",
      "&.Mui-checked": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.checkIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      },
      "&.Mui-disabled": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      }
    },
    ".PrivateSwitchBase-input": {
      left: "-26px",
      width: "300%",
      height: "100%"
    }
  },
  "&.MuiSwitch-sizeSmall": {
    width: "38px",
    height: "18px",
    borderRadius: "9px",
    ".MuiSwitch-track": {
      borderRadius: "9px"
    },
    ".MuiSwitch-switchBase": {
      width: "18px",
      "&.Mui-checked": {
        transform: "translateX(20px)",
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.checkIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      },
      "&.Mui-disabled": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      }
    },
    ".PrivateSwitchBase-input": {
      left: "-9px",
      width: "300%",
      height: "100%"
    }
  },
  "&.MuiSwitch-sizeExtraSmall": {
    width: "26px",
    height: "13px",
    borderRadius: "6.5px",
    ".MuiSwitch-track": {
      borderRadius: "6.5px"
    },
    ".MuiSwitch-switchBase": {
      width: "13px",
      "&.Mui-checked": {
        transform: "translateX(13px)",
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.checkIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      },
      "&.Mui-disabled": {
        ".MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 18 18"><path fill="${encodeURIComponent(
            theme.palette.toggle.disabledCheckIcon
          )}" d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z"/></svg>')`
        }
      }
    },
    ".PrivateSwitchBase-input": {
      left: "-6.5px",
      width: "300%",
      height: "100%"
    }
  }
}));
var Toggle = import_react14.default.forwardRef(
  (props, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
      CursorController,
      {
        cursor: `${props.disabled ? "not-allowed" : "pointer"}`,
        sx: props.sx,
        children: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
          StyledToggle,
          {
            role: "checkbox",
            type: "checkbox",
            ref,
            ...omitCustomProps(props, ["sx"])
          }
        )
      }
    );
  }
);

// lib/toggle/theme.ts
var toggleTheme = {
  dark: {
    name: "toggle",
    styles: {
      label: COLORS.SYSTEM.SILVER,
      trackChecked: COLORS.SECONDARY.BLUE_40,
      trackUnchecked: COLORS.SYSTEM.DARK_30,
      thumbUnchecked: COLORS.SYSTEM.DARK_80,
      thumbChecked: COLORS.SECONDARY.BLUE_80,
      thumbHover: COLORS.SYSTEM.INK,
      thumbDisabled: COLORS.SYSTEM.INK,
      checkIcon: COLORS.SECONDARY.BLUE_40,
      disabledCheckIcon: COLORS.SYSTEM.INK,
      disabledChecked: COLORS.SYSTEM.DARK_80,
      disabledUnchecked: COLORS.SYSTEM.DARK_80
    }
  },
  light: {
    name: "toggle",
    styles: {
      label: COLORS.SYSTEM.DARK_30,
      trackChecked: COLORS.SECONDARY.BLUE_60,
      trackUnchecked: COLORS.SYSTEM.CLOUDY,
      thumbUnchecked: COLORS.SYSTEM.WHITE,
      thumbChecked: COLORS.SYSTEM.WHITE,
      thumbHover: COLORS.SECONDARY.BLUE_20,
      thumbDisabled: COLORS.SYSTEM.WHITE,
      checkIcon: COLORS.SECONDARY.BLUE_60,
      disabledCheckIcon: COLORS.SECONDARY.BLUE_30,
      disabledChecked: COLORS.SECONDARY.BLUE_20,
      disabledUnchecked: COLORS.SYSTEM.OFF_WHITE
    }
  }
};

// lib/tooltip/component.tsx
var import_material32 = require("@mui/material");
var import_styles23 = require("@mui/material/styles");
var import_jsx_runtime33 = require("react/jsx-runtime");
var StyledUnderlinedSpan = (0, import_styles23.styled)("span")(({ theme }) => ({
  "& > *": {
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
    textDecorationSkipInk: "auto",
    textDecorationColor: theme.palette.tooltip.underline,
    textDecorationThickness: "7.5%",
    textUnderlineOffset: "20%",
    textUnderlinePosition: "from-font"
  }
}));
var StyledTooltip = (0, import_styles23.styled)(import_material.Box)(({
  theme
}) => {
  return {
    padding: theme.spacing(3.5),
    "&.MuiTooltip-tooltipPlacementBottom": {
      transform: `translate(0, ${theme.spacing(3.5)})!important`
    },
    "&.MuiTooltip-tooltipPlacementTop": {
      transform: `translate(0, -${theme.spacing(3.5)})!important`
    },
    "&.MuiTooltip-tooltipPlacementRight": {
      transform: `translate(${theme.spacing(3.5)}, 0)!important`
    },
    "&.MuiTooltip-tooltipPlacementLeft": {
      transform: `translate(-${theme.spacing(3.5)}, 0)!important`
    },
    boxShadow: "0px 2px 5px 0px rgba(0, 0, 0, 0.10)",
    borderRadius: "1px",
    fontSize: theme.typography.paragraph.sm.regular.fontSize,
    fontFamily: theme.typography.paragraph.sm.regular.fontFamily,
    lineHeight: theme.typography.paragraph.sm.regular.lineHeight,
    "&.tooltip-light": {
      backgroundColor: theme.palette.tooltip.light.bg,
      color: theme.palette.tooltip.light.color,
      outline: `1px solid ${theme.palette.tooltip.light.border}`
    },
    "&.tooltip-dark": {
      backgroundColor: theme.palette.tooltip.dark.bg,
      color: theme.palette.tooltip.dark.color,
      outline: `1px solid ${theme.palette.tooltip.dark.border}`
    },
    "&.tooltip-error": {
      backgroundColor: theme.palette.tooltip.error.bg,
      color: theme.palette.tooltip.error.color,
      outline: `1px solid ${theme.palette.tooltip.error.border}`
    },
    ".MuiTooltip-arrow": {
      "&.tooltip-light:before": {
        outline: `1px solid ${theme.palette.tooltip.light.border}`,
        color: theme.palette.tooltip.light.bg
      },
      "&.tooltip-dark:before": {
        outline: `1px solid ${theme.palette.tooltip.dark.border}`,
        color: theme.palette.tooltip.dark.bg
      },
      "&.tooltip-error:before": {
        outline: `1px solid ${theme.palette.tooltip.error.border}`,
        color: theme.palette.tooltip.error.bg
      }
    }
  };
});

// lib/tooltip/theme.ts
var tooltipTheme = {
  dark: {
    name: "tooltip",
    styles: {
      dark: {
        bg: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.SLATE,
        color: COLORS.SYSTEM.INK
      },
      error: {
        bg: COLORS.ERROR.ERROR_20,
        border: COLORS.SYSTEM.INK,
        color: COLORS.SYSTEM.INK
      },
      light: {
        bg: COLORS.SYSTEM.DARK_80,
        border: COLORS.SYSTEM.SLATE,
        color: COLORS.SYSTEM.WHITE
      },
      popover: {
        closeBtn: COLORS.SYSTEM.SILVER
      },
      underline: COLORS.SYSTEM.SILVER
    }
  },
  light: {
    name: "tooltip",
    styles: {
      dark: {
        bg: COLORS.SYSTEM.DARK_80,
        border: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.WHITE
      },
      error: {
        bg: COLORS.ERROR.ERROR_50,
        border: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.WHITE
      },
      light: {
        bg: COLORS.SYSTEM.WHITE,
        border: COLORS.SYSTEM.CLOUDY,
        color: COLORS.SYSTEM.INK
      },
      popover: {
        closeBtn: COLORS.SYSTEM.PEWTER
      },
      underline: COLORS.SYSTEM.DARK_30
    }
  }
};

// lib/theme/themes/components.ts
var brandTheme = {
  dark: {
    name: "brand",
    styles: {}
  },
  light: {
    name: "brand",
    styles: {}
  }
};
var outlineTheme = {
  dark: {
    name: "outline",
    styles: COLORS.SECONDARY.BLUE_40
  },
  light: {
    name: "outline",
    styles: COLORS.SECONDARY.BLUE_60
  }
};
var components = [
  arrowedSelectTheme,
  barChartLoadingSkeletonTheme,
  brandTheme,
  buttonTheme,
  calendarTheme,
  calendarEventTheme,
  checkboxTheme,
  companySelectorTheme,
  dataVisualizationTheme,
  genericClassesTheme,
  holidayTheme,
  labeledIcon,
  inputTileTheme,
  linkDropdownTheme,
  menuItemTheme,
  multiSelectTheme,
  navigationProfileTheme,
  navigationNotificationTheme,
  nestedTableTheme,
  outlineTheme,
  pageFooterTheme,
  paginatorTheme,
  payRunsTheme,
  popoverTheme,
  productBadgeTheme,
  radioButtonTheme,
  ratingScaleTheme,
  reportsTheme,
  scrollBarsTheme,
  sideIconItemTheme,
  snackbarTheme,
  signatureTheme,
  sliderTheme,
  statisticsIconTheme,
  statisticsOverviewTheme,
  statusTheme,
  statusTagTheme,
  stepperTheme,
  tableTheme,
  textFieldTheme,
  tileTheme,
  timelineTheme,
  timePickerTheme,
  toggleButtonTheme,
  toggleTheme,
  tooltipTheme,
  typographyTheme,
  timeOffCardTheme
];

// lib/theme/themeProvider.tsx
var import_material34 = require("@mui/material");
var import_styled_components = require("styled-components");

// lib/scrollbars/component.tsx
var import_material33 = require("@mui/material");
var import_jsx_runtime34 = require("react/jsx-runtime");
var ScrollBars = () => {
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    import_material33.GlobalStyles,
    {
      styles: (theme) => ({
        "*::-webkit-scrollbar": {
          borderRadius: "50px",
          background: theme.palette.scrollbars.background,
          width: "13px",
          height: "13px"
        },
        "*::-webkit-scrollbar-button": {
          width: "0px",
          height: "0px"
        },
        "*::-webkit-scrollbar-thumb": {
          borderRadius: "50px",
          background: theme.palette.scrollbars.color,
          backgroundClip: "padding-box",
          border: `3px solid ${theme.palette.scrollbars.background}`
        },
        "*::-webkit-scrollbar-thumb:hover": {
          background: theme.palette.scrollbars.hover.background
        },
        "*::-webkit-scrollbar-thumb:active": {
          background: theme.palette.scrollbars.active.background
        },
        "*::-webkit-scrollbar-track": {
          borderWidth: "0px",
          borderStyle: "none",
          borderRadius: "50px"
        }
      })
    }
  );
};

// lib/theme/themeProvider.tsx
var import_CentraNo2_Book = __toESM(require("../CentraNo2-Book-WB4IP4OE.woff2"), 1);
var import_CentraNo2_Medium = __toESM(require("../CentraNo2-Medium-W5T546CA.woff2"), 1);
var import_CentraNo2_Bold = __toESM(require("../CentraNo2-Bold-EIQ7MHPN.woff2"), 1);
var import_jsx_runtime35 = require("react/jsx-runtime");
var MuiGlobalStyles = import_styled_components.createGlobalStyle`

  @font-face {
    font-family: 'Centra Regular';
    src: local('Centra Regular'), local('Centra Regular');
    src: url(${import_CentraNo2_Book.default}) format('woff2');
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Centra Medium';
    src: local('Centra Medium'), local('Centra Medium');
    src: url(${import_CentraNo2_Medium.default}) format('woff2');
    font-style: normal;
  }

  @font-face {
    font-family: 'Centra Bold';
    src: local('Centra Bold'), local('Centra Bold');
    src: url(${import_CentraNo2_Bold.default}) format('woff2');
    font-style: normal;
  }
`;
function ThemeProvider({
  theme,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_material34.ThemeProvider, { theme, children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(MuiGlobalStyles, {}),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(GenericClasses, {}),
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ScrollBars, {}),
    children
  ] });
}

// lib/theme/index.ts
var getTheme = (themeName, components2) => {
  if (components2.length) {
    let componentsMap = {};
    components2.forEach((component) => {
      componentsMap = {
        ...componentsMap,
        [component[themeName].name]: component[themeName].styles
      };
    });
    const newTheme = {
      name: themeName,
      palette: {
        ...componentsMap,
        t1,
        divider: themeName === "dark" ? t1.system.slate : t1.system.silver
      },
      components: {
        MuiAccordion,
        MuiAccordionSummary,
        MuiAccordionDetails,
        MuiAlert,
        MuiAlertTitle,
        MuiAutocomplete,
        MuiAvatar,
        MuiAvatarGroup,
        MuiBadge,
        MuiBreadcrumbs,
        MuiButton: MuiButton2,
        MuiButtonGroup,
        MuiCard,
        MuiCardHeader,
        MuiCardContent,
        MuiCardActions,
        MuiChip,
        MuiCheckbox,
        MuiDrawer,
        MuiFab,
        MuiFormControl,
        MuiFormHelperText: MuiFormHelperText2,
        MuiDateCalendar,
        MuiPickersDay,
        MuiDivider,
        MuiIconButton,
        MuiInputAdornment,
        MuiInputLabel,
        MuiLinearProgress,
        MuiList,
        MuiLink,
        MuiPickersLayout,
        MuiPaper,
        MuiSwipeableDrawer,
        MuiTab,
        MuiTabs
      }
    };
    return (0, import_styles24.createTheme)(common, newTheme);
  }
  return common;
};
var light = getTheme("light", components);
var dark = getTheme("dark", components);
