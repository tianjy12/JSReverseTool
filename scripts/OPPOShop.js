const fs = require('fs');

// 模拟浏览器环境
const { navigator, window, location, document, sessionStorage } = require('./JSTemplate/BrowserEnvironment');
global.navigator = navigator;
global.window = window;
global.location = location;
global.document = document;
global.sessionStorage = sessionStorage;

// 工具函数

!function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).OTrack = t()
}(this, (function() {
    "use strict";
    function e(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function t(t) {
        for (var n = 1; arguments.length > n; n++) {
            var r = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(r), !0).forEach((function(e) {
                a(t, e, r[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : e(Object(r)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
            }
            ))
        }
        return t
    }
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        n(e)
    }
    function r(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(e, t) {
        for (var n = 0; t.length > n; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, k(r.key), r)
        }
    }
    function o(e, t, n) {
        return t && i(e.prototype, t),
        n && i(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function a(e, t, n) {
        return (t = k(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function s(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        t && u(e, t)
    }
    function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }
        ,
        c(e)
    }
    function u(e, t) {
        return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t,
            e
        }
        ,
        u(e, t)
    }
    function l(e, t) {
        if (null == e)
            return {};
        var n, r, i = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; o.length > r; r++)
                0 > t.indexOf(n = o[r]) && (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; o.length > r; r++)
                0 > t.indexOf(n = o[r]) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    function f(e) {
        if (void 0 === e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function d(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                ))),
                !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = c(e);
            if (t) {
                var i = c(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else
                n = r.apply(this, arguments);
            return function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return f(e)
            }(this, n)
        }
    }
    function h(e, t) {
        return p(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [], c = !0, u = !1;
                try {
                    if (o = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        c = !1
                    } else
                        for (; !(c = (r = o.call(n)).done) && (s.push(r.value),
                        s.length !== t); c = !0)
                            ;
                } catch (e) {
                    u = !0,
                    i = e
                } finally {
                    try {
                        if (!c && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (u)
                            throw i
                    }
                }
                return s
            }
        }(e, t) || m(e, t) || _()
    }
    function v(e) {
        return function(e) {
            if (Array.isArray(e))
                return y(e)
        }(e) || g(e) || m(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function p(e) {
        if (Array.isArray(e))
            return e
    }
    function g(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
            return Array.from(e)
    }
    function m(e, t) {
        if (e) {
            if ("string" == typeof e)
                return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(e, t) : void 0
        }
    }
    function y(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); t > n; n++)
            r[n] = e[n];
        return r
    }
    function _() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function k(e) {
        var t = function(e, t) {
            if ("object" != typeof e || null === e)
                return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var r = n.call(e, t || "default");
                if ("object" != typeof r)
                    return r;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" == typeof t ? t : t + ""
    }
    var w, b, T, S = {
        app_id: "",
        app_key: "",
        env: "prod",
        region: "sg",
        region_code: "",
        session_cutting_time: 30,
        sdk_auto_track: !0,
        is_single_page_app: !0,
        is_track_visittime: !0,
        log_level: "info",
        reported_platforms: ["web"],
        pageview: {
            delay: 100,
            track_pageview_type: "auto",
            track_ignore: function() {
                return !1
            },
            is_trigger_pageload: !0,
            watch_utm: !0,
            url_alias: {}
        },
        exposure: {
            once: !0,
            duration_threshold: 300,
            intersection_threshold: 1,
            root_margin: "0px"
        },
        develop: {
            catch_js_error: !1,
            performance: !1,
            errorRatio: .2,
            errorSplit: 500
        },
        app_version: "",
        is_cross_subdomain: !1,
        is_print_header: !1,
        event_rule: [],
        event_blacklist: [],
        project: "default",
        quarantine_report: !1
    }, E = {
        balance: !0,
        flush: !0,
        is_print_header: !1,
        interval_time: 1,
        max_batch_events: 10,
        max_request_queue: 10,
        fail_timeout: 5,
        fail_retry_count: 1
    };
    !function(e) {
        e[e.INIT = 0] = "INIT",
        e[e.FETCH_CONFIG = 1] = "FETCH_CONFIG",
        e[e.READY = 2] = "READY"
    }(w || (w = {})),
    function(e) {
        e.TRACK = "track",
        e.DEFERRED = "deferred",
        e.REQUEST = "request",
        e.TRACK_PENDING = "track-pending"
    }(b || (b = {})),
    function(e) {
        e.BALANCE = "balance",
        e.BALANCE_REQ = "balance_req"
    }(T || (T = {}));
    var C, I = [b.TRACK], O = {
        eventId: "$page_view",
        eventGroup: "$track_page_view"
    }, A = {
        eventId: "$page_duration",
        eventGroup: "$track_page_view"
    }, x = {
        eventId: "$page_load",
        eventGroup: "$track_page_load"
    }, D = {
        eventId: "$catch_error",
        eventGroup: "$track_develop"
    }, P = {
        eventId: "$track_version",
        eventGroup: "$track_develop"
    }, $ = {
        clickId: "$web_click",
        stayId: "$web_stay",
        eventGroup: "$track_heatmap"
    }, j = {
        eventId: "$",
        eventGroup: "$track_sensors"
    };
    !function(e) {
        e.DOMESTIC = "https://static-common.heytapdownload.com",
        e.FOREIGN = "https://static-common.heytapdl.com",
        e.INTRANET = "https://static-common.oppoer.me",
        e.FILES_COMMON = "common-files",
        e.OTRACK = "otrack"
    }(C || (C = {}));
    var L = {
        utm: ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
        search: ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
        social: ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
        keyword: {
            baidu: ["wd", "word", "kw", "keyword"],
            google: ["q"],
            bing: ["q"],
            yahoo: ["p"],
            sogou: ["query", "keyword"],
            so: ["q"],
            sm: ["q"]
        }
    }
      , N = Object.prototype.toString
      , R = {
        isObject: function(e) {
            return null != e && "[object Object]" == N.call(e)
        },
        isDate: function(e) {
            return "[object Date]" == N.call(e)
        },
        isArray: function(e) {
            return Array.isArray && Array.isArray(e) || "[object Array]" === N.call(e)
        },
        isFunction: function(e) {
            return "[object Function]" == N.call(e)
        },
        getType: function(e) {
            return N.call(e).slice(8, -1)
        }
    }
      , U = {
        addEvent: function(e, t, n) {
            e && (e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n)
        },
        removeEvent: function(e, t, n) {
            e && (e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent ? e.detachEvent("on" + t, n) : e["on" + t] = null)
        }
    };
    function M(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function q(e) {
        for (var t = 1; arguments.length > t; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? M(Object(n), !0).forEach((function(t) {
                G(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function F(e) {
        return F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ,
        F(e)
    }
    function H(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function W(e, t) {
        for (var n = 0; t.length > n; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, X(r.key), r)
        }
    }
    function V(e, t, n) {
        return t && W(e.prototype, t),
        n && W(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function G(e, t, n) {
        return (t = X(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Q(e, t) {
        if (null == e)
            return {};
        var n, r, i = function(e, t) {
            if (null == e)
                return {};
            var n, r, i = {}, o = Object.keys(e);
            for (r = 0; o.length > r; r++)
                0 > t.indexOf(n = o[r]) && (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; o.length > r; r++)
                0 > t.indexOf(n = o[r]) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }
    function B(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var r, i, o, a, s = [], c = !0, u = !1;
                try {
                    if (o = (n = n.call(e)).next,
                    0 === t) {
                        if (Object(n) !== n)
                            return;
                        c = !1
                    } else
                        for (; !(c = (r = o.call(n)).done) && (s.push(r.value),
                        s.length !== t); c = !0)
                            ;
                } catch (e) {
                    u = !0,
                    i = e
                } finally {
                    try {
                        if (!c && null != n.return && (a = n.return(),
                        Object(a) !== a))
                            return
                    } finally {
                        if (u)
                            throw i
                    }
                }
                return s
            }
        }(e, t) || z(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function K(e) {
        return function(e) {
            if (Array.isArray(e))
                return J(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || z(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function z(e, t) {
        if (e) {
            if ("string" == typeof e)
                return J(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? J(e, t) : void 0
        }
    }
    function J(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); t > n; n++)
            r[n] = e[n];
        return r
    }
    function X(e) {
        var t = function(e, t) {
            if ("object" !== n(e) || null === e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var i = r.call(e, t || "default");
                if ("object" !== n(i))
                    return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return ("string" === t ? String : Number)(e)
        }(e, "string");
        return "symbol" === n(t) ? t : t + ""
    }
    var Y = !0
      , Z = "info"
      , ee = {
        debug: 0,
        info: 10,
        warn: 100,
        error: 1e3
    };
    function te(e) {
        try {
            return JSON.stringify(e, null, "  ")
        } catch (t) {
            return fe(e)
        }
    }
    var ne = function(e) {
        return ["string", "number", "boolean", "undefined", "null"].indexOf(F(e)) > -1
    }
      , re = function() {
        function e(t) {
            H(this, e),
            this.namespace = "",
            this.isShowMills = !1,
            this.isShowLog = !0,
            this.info = this.genLog("info"),
            this.warn = this.genLog("warn"),
            this.error = this.genLog("error"),
            this.debug = this.genLog("debug"),
            t && this.setLogConfig(t)
        }
        return V(e, [{
            key: "setLogConfig",
            value: function(e) {
                var t = e.isShowLog
                  , n = e.isShowMills
                  , r = void 0 !== n && n
                  , i = e.namespace
                  , o = void 0 === i ? "" : i;
                this.isShowLog = void 0 === t || t,
                this.isShowMills = r,
                this.namespace = o
            }
        }, {
            key: "config",
            get: function() {
                return {
                    namespace: this.namespace,
                    isShowMills: this.isShowMills,
                    isShowLog: this.isShowLog
                }
            }
        }, {
            key: "clone",
            value: function(t) {
                return new e(q(q({}, this.config), t))
            }
        }, {
            key: "genLog",
            value: function(e) {
                var t = this;
                return function() {
                    var n = !1;
                    try {
                        var r;
                        n = JSON.parse((null === (r = localStorage) || void 0 === r ? void 0 : r.getItem("__otrack_debug")) || "false")
                    } catch (e) {}
                    if (n && (Y = !0),
                    !(Y && t.isShowLog || -1 !== ["warn", "error"].indexOf(e)))
                        return !1;
                    if (ee[Z] > ee[e])
                        return !1;
                    for (var i = arguments.length, o = Array(i), a = 0; i > a; a++)
                        o[a] = arguments[a];
                    var s = o.map((function(e, t, n) {
                        return R.isObject(e) ? te(e) : R.isArray(e) ? e.every((function(e) {
                            return ne(e) || R.isArray(e)
                        }
                        )) ? e : te(e) : ne(e) && t !== n.length - 1 ? e + "" : e
                    }
                    ))
                      , c = new Date;
                    "" !== t.namespace && s.unshift(t.namespace),
                    s.unshift("".concat(function(e, t) {
                        var n = {
                            "M+": e.getMonth() + 1,
                            "d+": e.getDate(),
                            "h+": e.getHours(),
                            "m+": e.getMinutes(),
                            "s+": e.getSeconds(),
                            "q+": Math.floor((e.getMonth() + 3) / 3),
                            S: e.getMilliseconds()
                        };
                        for (var r in /(y+)/.test(t) && (t = t.replace(RegExp.$1, (e.getFullYear() + "").substr(4 - RegExp.$1.length))),
                        n)
                            RegExp("(" + r + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? n[r] : ("00" + n[r]).substr(("" + n[r]).length)));
                        return t
                    }(c, "yyyy-MM-dd hh:mm:ss" + (t.isShowMills ? ".S" : ""))));
                    var u = s.filter((function(e) {
                        return "" !== e
                    }
                    ));
                    if ("object" === (void 0 === console ? "undefined" : F(console)) && console[e])
                        try {
                            return console[e].call(console, u.join(", "))
                        } catch (t) {
                            console[e](u[0])
                        }
                }
            }
        }]),
        e
    }();
    re.disableAllLog = function() {
        Y = !1,
        re.disableAllLog = function() {}
    }
    ,
    re.setLogLevel = function(e) {
        ["info", "debug", "error", "warn"].includes(e) && (Z = e)
    }
    ;
    var ie = new re
      , oe = "0123456789"
      , ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      , se = "~!@#$%^*()_+-=[]{}|;:,./<>?";
    /**
   * @copyright Maichong Software Ltd. 2016 http://maichong.it
   * @date 2016-01-20
   * @author Liang <liang@maichong.it>
   */
    function ce() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 8
          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            specials: !1,
            letters: !0,
            numbers: !0
        };
        e || (e = 8),
        t || (t = {});
        var n = ""
          , r = "";
        for (!0 === t ? n = oe + ae + se : "string" == typeof t ? n = t : (!1 !== t.numbers && (n += "string" == typeof t.numbers ? t.numbers : oe),
        !1 !== t.letters && (n += "string" == typeof t.letters ? t.letters : ae),
        t.specials && (n += "string" == typeof t.specials ? t.specials : se)); e > 0; )
            e--,
            r += n[Math.floor(Math.random() * n.length)];
        return r
    }
    var ue = ce(8);
    function le(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
          , r = {};
        return e.filter(Boolean).forEach((function(e) {
            var i = "function" == typeof t ? t(e) : t;
            r[e[i]] ? !n && r[e[i]].push(e) : r[e[i]] = n ? e : [e]
        }
        )),
        r
    }
    function fe(e, t, n, r, i) {
        t = void 0 !== t ? isNaN(+t) ? 6 : t : 6;
        var o = new WeakMap;
        return JSON.stringify(function e(t, r, a, s, c) {
            return t && "object" == F(t) ? (c = o.has(t),
            o.set(t, !0),
            s = Array.isArray(t),
            c ? a = i && i(t) || null : JSON.stringify(t, (function(i, o) {
                if (s || r > 0) {
                    if (n && (o = n(i, o)),
                    !i)
                        return s = Array.isArray(o),
                        t = o;
                    !a && (a = s ? [] : {}),
                    a[i] = e(o, s ? r : r - 1)
                }
            }
            )),
            void 0 === a ? s ? [] : {} : a) : t
        }(e, t), null, r)
    }
    function de(e) {
        if (null == e)
            return e;
        try {
            e = JSON.parse(e)
        } catch (e) {}
        return e
    }
    var he = function(e) {
        var t;
        if (!(e = e || (null === (t = location) || void 0 === t ? void 0 : t.hostname)))
            return "";
        var n = e.split(".");
        if (R.isArray(n) && n.length >= 2 && !/^(\d+\.)+\d+$/.test(e))
            for (var r = "." + n.splice(n.length - 1, 1); n.length > 0; )
                if (r = "." + n.splice(n.length - 1, 1) + r,
                document.cookie = "otrack_jssdk_domain_test=true; path=/; domain=" + r,
                -1 !== document.cookie.indexOf("otrack_jssdk_domain_test=true")) {
                    var i = new Date;
                    return i.setTime(i.getTime() - 1e3),
                    document.cookie = "otrack_jssdk_domain_test=true; expires=" + i.toUTCString() + "; path=/; domain=" + r,
                    r
                }
        return ""
    };
    function ve(e, t, n, r) {
        r = q({
            cross_subdomain: !1,
            domain: ""
        }, r);
        var i = new Date
          , o = 0;
        "number" == typeof n ? o = i.getTime() + 24 * n * 60 * 60 * 1e3 : R.isDate(n) && (o = n.getTime()),
        i.setTime(o);
        var a = "; expires=" + i.toUTCString();
        0 === n && (a = ""),
        r.cross_subdomain && (r.domain = he()),
        document.cookie = e + "=" + t + a + "; path=/" + (r.domain ? "; domain=" + r.domain : "")
    }
    function pe(e) {
        var t = [];
        for (var n in e)
            t.push(n + "=" + encodeURIComponent(e[n]));
        return t.join("&")
    }
    function ge(e) {
        for (var t = e + "=", n = document.cookie.split(";"), r = 0, i = n.length; i > r; r++) {
            for (var o = n[r]; " " === o.charAt(0); )
                o = o.substring(1, o.length);
            if (0 === o.indexOf(t))
                return o.substring(t.length, o.length)
        }
        return null
    }
    var me = !0;
    try {
        "undefined" != typeof localStorage && (localStorage.setItem("testLocal", "true"),
        localStorage.removeItem("testLocal"))
    } catch (kt) {
        ie.warn("localStorage不支持", kt),
        me = !1
    }
    function ye(e, t, n) {
        var r, i;
        if (e.indexOf("-queue") > 0 && (e = "".concat(e, "/").concat(ue)),
        n = void 0 === n || n,
        null != t)
            if (t = fe(t),
            me)
                try {
                    var o;
                    null === (o = localStorage) || void 0 === o || o.setItem(e, t)
                } catch (e) {
                    if (["QUOTA_EXCEEDED_ERR", "NS_ERROR_DOM_QUOTA_REACHED", "QuotaExceededError", "W3CException_DOM_QUOTA_EXCEEDED_ERR"].indexOf(e.name) > -1) {
                        try {
                            for (var a = 0; a < (null === (s = localStorage) || void 0 === s ? void 0 : s.length); a++) {
                                var s, c, u = null === (c = localStorage) || void 0 === c ? void 0 : c.key(a);
                                if (u && /^obus-track_/.test(u))
                                    if (-1 === u.indexOf("track-queue") && -1 === u.indexOf("request-queue")) {
                                        var l;
                                        null === (l = localStorage) || void 0 === l || l.removeItem(u)
                                    } else {
                                        var f, d, h = (null === (f = localStorage) || void 0 === f ? void 0 : f.getItem(u)) || [];
                                        null === (d = localStorage) || void 0 === d || d.setItem(u, fe({
                                            version: Date.now(),
                                            data: h.length > 100 ? h.slice(100 - h.length) : h
                                        }))
                                    }
                            }
                        } catch (e) {}
                        return
                    }
                    console.log("[OTrack] setStorage error")
                }
            else
                n || ve(e, t, 30);
        if (void 0 === t) {
            var v;
            if (me)
                r = null === (v = localStorage) || void 0 === v ? void 0 : v.getItem(e);
            else
                n || (r = ge(e));
            return de(r)
        }
        null === t && (me ? null === (i = localStorage) || void 0 === i || i.removeItem(e) : n || ve(e, "", -1))
    }
    var _e = !0;
    try {
        "undefined" != typeof sessionStorage && (sessionStorage.setItem("testLocal", "true"),
        sessionStorage.removeItem("testLocal"))
    } catch (kt) {
        ie.warn("sessionStorage不支持", kt),
        _e = !1
    }
    function ke(e, t, n) {
        var r;
        if (n = void 0 === n || n,
        null != t)
            if (t = fe(t),
            _e)
                try {
                    sessionStorage.setItem(e, t)
                } catch (e) {
                    console.log("[OTrack] sessionStorage error")
                }
            else
                n || ve(e, t, 30);
        if (void 0 === t)
            return _e ? r = sessionStorage.getItem(e) : n || (r = ge(e)),
            de(r);
        null === t && (_e ? sessionStorage.removeItem(e) : n || ve(e, "", -1))
    }
    function we(e) {
        var t = (new Date).getTime()
          , n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
            var n = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16),
            ("x" === e ? n : 3 & n | 8).toString(16)
        }
        ));
        return e && e > 0 ? n.slice(0, e) : n
    }
    function be() {
        return (new Date).getTime()
    }
    function Te(e, t) {
        var n = {};
        for (var r in e)
            e.hasOwnProperty(r) && t(e[r], r, e) && (n[r] = e[r]);
        return n
    }
    var Se = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      , Ee = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/
      , Ce = function(e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var c = function() {
            var t;
            s = !1 === (null === (t = n) || void 0 === t ? void 0 : t.leading) ? 0 : Date.now(),
            a = null,
            o = e.apply(r, i),
            a || (r = i = null)
        };
        return function() {
            for (var u, l, f = arguments.length, d = Array(f), h = 0; f > h; h++)
                d[h] = arguments[h];
            var v = Date.now();
            s || !1 !== (null === (u = n) || void 0 === u ? void 0 : u.leading) || (s = v);
            var p = t - (v - s);
            return r = this,
            i = arguments,
            0 >= p || p > t ? (a && (clearTimeout(a),
            a = null),
            s = v,
            o = e.apply(r, i),
            a || (r = i = null)) : a || !1 === (null === (l = n) || void 0 === l ? void 0 : l.trailing) || (a = setTimeout(c, p)),
            o
        }
    };
    function Ie(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
    function Oe(e) {
        var t, n = null === (t = location) || void 0 === t ? void 0 : t.search.substr(1), r = {};
        if (n)
            try {
                n.split("&").filter(Boolean).forEach((function(e) {
                    var t = B(e.split("="), 2);
                    r[t[0]] = decodeURIComponent(t[1])
                }
                ))
            } catch (e) {}
        return e ? r[e] || null : r
    }
    function Ae(e) {
        if (!e)
            return null;
        var t = e.match(/^(https?:\/\/)([^\/]+)(.*)$/i);
        if (t) {
            var n = B(t, 4)
              , r = n[1]
              , i = n[2]
              , o = B((n[3] || "").split("?"), 2)
              , a = o[0]
              , s = B((o[1] || "").split("#"), 2)
              , c = s[0]
              , u = s[1]
              , l = (c || "").split("&").filter(Boolean)
              , f = {};
            return l.forEach((function(e) {
                var t = B(e.split("="), 2);
                f[t[0]] = decodeURIComponent(t[1])
            }
            )),
            {
                schema: r,
                host: i,
                path: a,
                search: c,
                query: f,
                hash: u || ""
            }
        }
        return null
    }
    function xe(e) {
        var t = {};
        return R.isObject(e) && Object.keys(e).forEach((function(n) {
            t[n] = "function" == typeof e[n] ? e[n]() : e[n]
        }
        )),
        t
    }
    var De, Pe = (De = (new Date).getTime(),
    function(e) {
        return Math.ceil((De = (9301 * De + 49297) % 233280) / 233280 * e)
    }
    ), $e = function() {
        if ("function" == typeof Uint32Array) {
            var e = "";
            if ("undefined" != typeof crypto ? e = crypto : "undefined" != typeof msCrypto && (e = msCrypto),
            R.isObject(e) && e.getRandomValues) {
                var t = new Uint32Array(1);
                return e.getRandomValues(t)[0] / 4294967296
            }
        }
        return Pe(1e19) / 1e19
    }, je = function() {
        var e = function() {
            for (var e = 1 * (new Date).getTime(), t = 0; e == 1 * (new Date).getTime(); )
                t++;
            return e.toString(16) + t.toString(16)
        };
        return function() {
            var t = screen.height * screen.width;
            t = t && /\d{5,}/.test(t + "") ? t.toString(16) : (31242 * $e() + "").replace(".", "").slice(0, 8);
            var n = e() + "-" + $e().toString(16).replace(".", "") + "-" + function() {
                var e, t, n = navigator.userAgent, r = [], i = 0;
                function o(e, t) {
                    var n, i = 0;
                    for (n = 0; t.length > n; n++)
                        i |= r[n] << 8 * n;
                    return e ^ i
                }
                for (e = 0; n.length > e; e++)
                    t = n.charCodeAt(e),
                    r.unshift(255 & t),
                    4 > r.length || (i = o(i, r),
                    r = []);
                return r.length > 0 && (i = o(i, r)),
                i.toString(16)
            }() + "-" + t + "-" + e();
            return n || ($e() + "" + $e() + $e()).slice(2, 15)
        }
    }();
    !function() {
        var e = ke("LIFEID");
        e ? ue = e : ke("LIFEID", ue);
        try {
            for (var t = 0; t < localStorage.length; t++) {
                var n = localStorage.key(t);
                if (n && /^obus-track_/.test(n)) {
                    var r = localStorage.getItem(n)
                      , i = Date.now()
                      , o = (r = de(r) || {
                        version: 0
                    }).version;
                    o && i - o > 864e5 && localStorage.removeItem(n)
                }
            }
        } catch (e) {}
    }();
    var Le = !0;
    function Ne(e) {
        if (void 0 === e)
            return Le;
        Le = e
    }
    function Re(e, t) {
        var n, r, i = t.method, o = void 0 === i ? "GET" : i, a = t.data, s = void 0 === a ? {} : a, c = t.timeout, u = void 0 === c ? 20 : c, l = !("onLine"in (navigator || {})) || (null === (n = navigator) || void 0 === n ? void 0 : n.onLine), f = t.success, d = t.fail;
        u = u || 20;
        var h = function() {
            var e = window;
            if (void 0 !== e.XMLHttpRequest)
                return new e.XMLHttpRequest;
            if (e.ActiveXObject)
                try {
                    return new e.ActiveXObject("Msxml2.XMLHTTP")
                } catch (t) {
                    try {
                        return new e.ActiveXObject("Microsoft.XMLHTTP")
                    } catch (e) {
                        return ie.error(e),
                        null
                    }
                }
        }()
          , v = Ne();
        if (t.withCredentials && (h.withCredentials = t.withCredentials),
        o = o.toUpperCase(),
        null == h)
            return ie.error("xhr object is null, exiting"),
            !1;
        if (!l)
            return ie.warn("当前网络离线，请检查网络状态!"),
            t.fail && t.fail("NOT ONLINE", 404),
            !1;
        if (t.success = function(e) {
            f && f(e),
            r && (clearTimeout(r),
            r = 0)
        }
        ,
        t.fail = function() {
            for (var n = arguments.length, i = Array(n), o = 0; n > o; o++)
                i[o] = arguments[o];
            !function(n) {
                if (void 0 === t.reTryCount || 0 >= t.reTryCount)
                    return "function" == typeof n && n(!0),
                    !0;
                t.success = f,
                t.fail = d,
                ie.warn("retry fetch with ".concat(--t.reTryCount, " count.")),
                Re(e, t)
            }((function(e) {
                d && d.apply(null, i)
            }
            )),
            r && (clearTimeout(r),
            r = 0)
        }
        ,
        r = window.setTimeout((function() {
            !function() {
                try {
                    R.isObject(h) && h.abort()
                } catch (e) {
                    ie.error(e)
                }
                r && (clearTimeout(r),
                r = 0,
                t.fail && t.fail("TIMEOUT", 408),
                h.onreadystatechange = null,
                h.onload = null,
                h.onerror = null)
            }()
        }
        ), 1e3 * u),
        h.onreadystatechange = function() {
            try {
                4 == h.readyState && (h.status >= 200 && 300 > h.status || 304 == h.status ? t.success && t.success(function(e) {
                    if (!e)
                        return "";
                    try {
                        return JSON.parse(e)
                    } catch (e) {
                        return {}
                    }
                }(h.responseText)) : t.fail && t.fail(h.responseText, h.status),
                h.onreadystatechange = null,
                h.onload = null)
            } catch (e) {
                console.error(e),
                h.onreadystatechange = null,
                h.onload = null
            }
        }
        ,
        "GET" === o.toUpperCase()) {
            var p = function(e) {
                if (e)
                    for (var t in e)
                        if (Object.prototype.hasOwnProperty.call(e, t))
                            return !0;
                return !1
            }(s) ? "?" + pe(s) : "";
            h.open("GET", e + p, v)
        } else
            h.open("POST", e, v);
        if (R.isObject(t.headers))
            for (var g in t.headers)
                t.headers.hasOwnProperty(g) && h.setRequestHeader && h.setRequestHeader(g, t.headers[g]);
        if ("GET" === o)
            return h.send(),
            !0;
        var m, y = t.headers && (t.headers["Content-Type"] || t.headers["Content-type"]) || "";
        if (0 > y.indexOf("application/x-www-form-urlencoded"))
            0 > y.indexOf("application/json") ? h.send(s) : h.send(JSON.stringify(s));
        else if ((null === (m = navigator) || void 0 === m ? void 0 : m.sendBeacon) && !v && window.URLSearchParams) {
            var _ = new URLSearchParams;
            Object.keys(s).forEach((function(e) {
                _.append(e, s[e])
            }
            )),
            navigator.sendBeacon(e, _),
            t.success(s)
        } else
            h.send(pe(s))
    }
    var Ue = {
        AT: "EU",
        BE: "EU",
        DK: "EU",
        FI: "EU",
        FR: "EU",
        DE: "EU",
        GR: "EU",
        IE: "EU",
        IT: "EU",
        LU: "EU",
        NL: "EU",
        PT: "EU",
        ES: "EU",
        SE: "EU",
        GB: "EU",
        HU: "EU",
        PL: "EU",
        CZ: "EU",
        SI: "EU",
        SK: "EU",
        EE: "EU",
        LT: "EU",
        MT: "EU",
        CY: "EU",
        RO: "EU",
        BG: "EU",
        LV: "EU",
        HR: "EU",
        NO: "EU",
        IS: "EU",
        LI: "EU",
        CH: "EU",
        TR: "EU",
        RS: "EU",
        BA: "EU",
        MX: "US"
    }
      , Me = function() {
        var e, t, n = null === (e = navigator) || void 0 === e || null === (t = e.userAgent) || void 0 === t ? void 0 : t.toLowerCase(), r = function(e) {
            return e && (n = (e + "").toLowerCase()),
            /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(n) ? "tablet" : /(mobi|ipod|phone|blackberry|opera mini|fennec|minimo|symbian|psp|nintendo ds|archos|skyfire|puffin|blazer|bolt|gobrowser|iris|maemo|semc|teashark|uzard)/.test(n) ? "mobile" : "desktop"
        };
        return {
            device: r(),
            detect: r,
            isMobile: "desktop" !== r(),
            userAgent: n
        }
    }();
    function qe() {
        var e = document;
        return Math.max(Math.max(e.body.scrollWidth, e.documentElement.scrollWidth), Math.max(e.body.offsetWidth, e.documentElement.offsetWidth), Math.max(e.body.clientWidth, e.documentElement.clientWidth))
    }
    function Fe() {
        var e = document;
        return Math.min(Math.min(e.body.clientHeight, e.documentElement.clientHeight), Math.min(e.body.offsetHeight, e.documentElement.offsetHeight), window.innerHeight)
    }
    function He() {
        return window.innerWidth > window.innerHeight ? "landscape" : "portrait"
    }
    var We = {
        ucbrowser: "UC",
        sogou: "Sogou",
        "2345browser": "2345",
        baidu: "Baidu",
        liebao: "LieBao",
        huawei: "Huawei",
        360: 360,
        heytap: "oppo",
        oppo: "oppo",
        quark: "quark",
        vivo: "vivo",
        meizu: "meizu",
        samsung: "samsung",
        realme: "realme",
        oneplus: "oneplus",
        weibo: "Weibo"
    }
      , Ve = function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1
          , r = e.match(t);
        return r ? r[n] : "0"
    };
    var Ge = function() {
        var e, t, n, r;
        if ("object" !== ("undefined" == typeof __wxConfig ? "undefined" : F(__wxConfig))) {
            var i = window || Object.create(null)
              , o = (null === (e = navigator) || void 0 === e || null === (t = e.userAgent) || void 0 === t ? void 0 : t.toLowerCase()) || ""
              , a = {
                type: "",
                versions: ""
            }
              , s = {
                IE: i.ActiveXObject || "ActiveXObject"in i,
                Chrome: o.indexOf("chrome") > -1 && o.indexOf("safari") > -1,
                Firefox: o.indexOf("firefox") > -1,
                Opera: !!i.opr && !!i.opr.addons || !!i.opera || -1 !== (null === (n = navigator) || void 0 === n || null === (r = n.userAgent) || void 0 === r ? void 0 : r.indexOf("OPR/")),
                Safari: o.indexOf("safari") > -1 && -1 == o.indexOf("chrome"),
                Edge: o.indexOf("edge") > -1,
                QQBrowser: /qqbrowser/i.test(o),
                WeixinBrowser: /MicroMessenger/i.test(o),
                QQInnerBrowser: /QQ\//i.test(o),
                WeiboInnerBrowser: /weibo/i.test(o)
            };
            for (var c in s)
                if (s[c]) {
                    var u = "";
                    if ("IE" == c)
                        u = Ve(o, /(msie\s|trident.*rv:)([\w.]+)/, 2);
                    else if ("Chrome" == c) {
                        for (var l in navigator.mimeTypes)
                            "application/360softmgrplugin" == navigator.mimeTypes[l].type && (c = "360");
                        var f = RegExp("(".concat(Object.keys(We).join("|"), ")"), "gi")
                          , d = o.toLowerCase().match(f);
                        d && (c = We[d[0]] || "Chrome"),
                        u = Ve(o, /chrome\/([\d.]+)/, 1)
                    } else
                        "Firefox" == c ? u = Ve(o, /firefox\/([\d.]+)/, 1) : "Opera" == c ? u = Ve(o, /(?:opera|opr)\/([\d.]+)/, 1) : "Safari" == c ? u = Ve(o, /version\/([\d.]+)/, 1) : "Edge" == c ? u = Ve(o, /edge\/([\d.]+)/, 1) : "QQBrowser" == c ? u = Ve(o, /qqbrowser\/([\d.]+)/, 1) : "WeixinBrowser" == c ? u = Ve(o, /MicroMessenger\/([\d.]+)/, 1) : "QQInnerBrowser" == c ? u = Ve(o, /QQ\/([\d.]+)/, 1) : "WeiboInnerBrowser" == c && (u = Ve(o, /__weibo__([\d.]+)/, 1));
                    a.type = c,
                    a.versions = parseInt(u, 10)
                }
            return a
        }
        console.log("wx", __wxConfig, "__wxConfig")
    }()
      , Qe = function() {
        var e, t, n, r, i, o, a, s, c, u, l, f, d = (null === (e = navigator) || void 0 === e ? void 0 : e.userAgent) || "", h = "Win32" == (null === (t = navigator) || void 0 === t ? void 0 : t.platform) || "Windows" == (null === (n = navigator) || void 0 === n ? void 0 : n.platform), v = "Mac68K" == (null === (r = navigator) || void 0 === r ? void 0 : r.platform) || "MacPPC" == (null === (i = navigator) || void 0 === i ? void 0 : i.platform) || "Macintosh" == (null === (o = navigator) || void 0 === o ? void 0 : o.platform) || "MacIntel" == (null === (a = navigator) || void 0 === a ? void 0 : a.platform);
        if (v)
            return "Mac";
        if ((null === (s = navigator) || void 0 === s ? void 0 : s.platform) && "iphone" == (null === (c = navigator) || void 0 === c ? void 0 : c.platform.toLowerCase()))
            return "iPhone";
        if ("X11" == (null === (u = navigator) || void 0 === u ? void 0 : u.platform) && !h && !v)
            return "Unix";
        var p = ((null === (l = navigator) || void 0 === l ? void 0 : l.platform) + "").indexOf("Linux") > -1
          , g = null == d || null === (f = d.toLowerCase()) || void 0 === f ? void 0 : f.match(/android/i);
        if (p)
            return g ? "Android" : "Linux";
        if (h) {
            if (d.indexOf("Windows NT 5.0") > -1 || d.indexOf("Windows 2000") > -1)
                return "Win2000";
            if (d.indexOf("Windows NT 5.1") > -1 || d.indexOf("Windows XP") > -1 || d.indexOf("Windows XP") > -1)
                return "WinXP";
            if (d.indexOf("Windows NT 5.2") > -1 || d.indexOf("Windows 2003") > -1)
                return "Win2003";
            if (d.indexOf("Windows NT 6.0") > -1 || d.indexOf("Windows Vista") > -1)
                return "WinVista";
            if (d.indexOf("Windows NT 6.1") > -1 || d.indexOf("Windows 7") > -1)
                return "Win7";
            if (d.indexOf("Windows NT 6.2") > -1 || d.indexOf("Windows 8") > -1)
                return "Win8";
            if (d.indexOf("Windows NT 10.0") > -1 || d.indexOf("Windows 10") > -1)
                return "Win10"
        }
        return "Others"
    }()
      , Be = ["callback"]
      , Ke = function() {
        function e(t) {
            H(this, e),
            this.cacheMap = {},
            this.timeout = 0,
            this.pendingImgs = [],
            this.timeout = t || 3e3
        }
        return V(e, [{
            key: "pong",
            value: function(e) {
                var t = this;
                if (this.cacheMap[e.key])
                    return !1;
                var n = function() {
                    t.cacheMap[e.key] && (clearTimeout(t.cacheMap[e.key]),
                    r.src = "",
                    delete t.cacheMap[e.key],
                    t.pendingImgs = t.pendingImgs.filter((function(t) {
                        return t.alt !== e.key
                    }
                    )))
                }
                  , r = new Image
                  , i = e.callback || function(e, t) {}
                ;
                r.onload = function() {
                    i(!0, !0),
                    n()
                }
                ,
                r.onerror = function() {
                    i(!0, !1),
                    n()
                }
                ,
                r.alt = e.key,
                this.cacheMap[e.key] = window.setTimeout((function() {
                    i(!1, "timeout"),
                    n()
                }
                ), this.timeout),
                r.src = e.url + "/favicon.ico?v=" + +new Date,
                this.pendingImgs.push(r)
            }
        }, {
            key: "stopLoadImgs",
            value: function() {
                this.pendingImgs.forEach((function(e) {
                    e.src = ""
                }
                ))
            }
        }], [{
            key: "racePong",
            value: function(t, n) {
                var r = new e
                  , i = t.length
                  , o = !1
                  , a = setTimeout((function() {
                    o = !0,
                    n(null)
                }
                ), 3e3)
                  , s = function(e, t) {
                    o || t && (n(q(q({}, e), {}, {
                        connection: t
                    })),
                    r.stopLoadImgs(),
                    o = !0,
                    clearTimeout(a)),
                    0 == --i && (clearTimeout(a),
                    !o && n(null))
                };
                t.forEach((function(e) {
                    var t = Q(e, Be);
                    r.pong(q(q({}, e), {}, {
                        callback: function(e, n) {
                            s(t, !!e && n)
                        }
                    }))
                }
                ))
            }
        }]),
        e
    }()
      , ze = function() {
        function e(t) {
            H(this, e);
            var n = ye("is_virtual_env") || ""
              , r = B(n.split("|"), 2)[1];
            t && ("" === n || r && Date.now() - +r > 864e6) && this.refreshEnv()
        }
        return V(e, [{
            key: "isInCloud",
            value: function() {
                var e = ye("is_virtual_env");
                return null == e && (e = this.isNotVirtual() ? "false" : "true"),
                "true" === e.split("|")[0]
            }
        }, {
            key: "refreshEnv",
            value: function() {
                this.isNotVirtual() || Ke.racePong([{
                    key: "gitlab",
                    url: "http://gitlab.os.adc.com"
                }], (function(e) {
                    ye("is_virtual_env", "".concat(!(!e || "gitlab" !== e.key || !e.connection), "|", Date.now()))
                }
                ))
            }
        }, {
            key: "isNotVirtual",
            value: function() {
                return -1 === Qe.toLowerCase().indexOf("win") || 1240 > screen.width
            }
        }]),
        e
    }();
    function Je() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        return tt(!0 === t[0], !1, t)
    }
    function Xe() {
        for (var e = arguments.length, t = Array(e), n = 0; e > n; n++)
            t[n] = arguments[n];
        return tt(!0 === t[0], !0, t)
    }
    function Ye(e) {
        if (Array.isArray(e)) {
            for (var t = [], n = 0; e.length > n; ++n)
                t.push(Ye(e[n]));
            return t
        }
        if (Ze(e)) {
            var r = {};
            for (var i in e)
                r[i] = Ye(e[i]);
            return r
        }
        return e
    }
    function Ze(e) {
        return e && "object" === F(e) && !Array.isArray(e)
    }
    function et(e, t) {
        if (!Ze(e))
            return t;
        for (var n in t)
            "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = Ze(e[n]) && Ze(t[n]) ? et(e[n], t[n]) : t[n]);
        return e
    }
    function tt(e, t, n) {
        var r;
        !e && Ze(r = n.shift()) || (r = {});
        for (var i = 0; n.length > i; ++i) {
            var o = n[i];
            if (Ze(o))
                for (var a in o)
                    if ("__proto__" !== a && "constructor" !== a && "prototype" !== a) {
                        var s = e ? Ye(o[a]) : o[a];
                        r[a] = t ? et(r[a], s) : s
                    }
        }
        return r
    }
    var nt = function() {
        var e, t, n;
        return {
            origin: null === (e = location) || void 0 === e ? void 0 : e.origin,
            pathname: null === (t = location) || void 0 === t ? void 0 : t.pathname,
            href: null === (n = location) || void 0 === n ? void 0 : n.href
        }
    }
      , rt = null
      , it = nt()
      , ot = null
      , at = it
      , st = ""
      , ct = !1
      , ut = function(e) {
        return "function" == typeof e
    };
    function lt(e, t) {
        var n, r, i, o, a, s, c = null === (n = window) || void 0 === n || null === (r = n.history) || void 0 === r ? void 0 : r.pushState, u = null === (i = window) || void 0 === i || null === (o = i.history) || void 0 === o ? void 0 : o.replaceState, l = function() {
            t(location, rt) || e(location, rt)
        }, f = !0, d = function() {
            var e;
            (f = !f) ? history.__proto__.pushState.apply(history, arguments) : (st = "pushState",
            at = rt = nt(),
            null,
            c.apply(null === (e = window) || void 0 === e ? void 0 : e.history, arguments),
            it = nt(),
            f = !0,
            l(),
            ct ? ct = !1 : t(it, rt) || ft.watchRoutes().forEach((function(e) {
                return e(it, rt)
            }
            )))
        }, h = function() {
            var e;
            (f = !f) ? history.__proto__.replaceState.apply(history, arguments) : (st = "replaceState",
            at = rt = nt(),
            null,
            u.apply(null === (e = window) || void 0 === e ? void 0 : e.history, arguments),
            it = nt(),
            f = !0,
            l(),
            ct ? ct = !1 : t(it, rt) || ft.watchRoutes().forEach((function(e) {
                return e(it, rt)
            }
            )))
        }, v = function() {
            (rt = it) || ot || (ct = !0),
            ot = it,
            st || (rt = ot),
            st = "",
            it = at = nt(),
            l(),
            ct ? ct = !1 : t(at, ot) || ft.watchRoutes().forEach((function(e) {
                return e(at, ot)
            }
            ))
        };
        ut(c) && (window.history.pushState = d),
        ut(u) && (window.history.replaceState = h),
        s = (null === (a = window) || void 0 === a ? void 0 : a.document.documentMode) ? "hashchange" : c ? "popstate" : "hashchange",
        U.addEvent(window, s, v);
        setTimeout((function e() {
            var t, n = !1, r = (null === (t = window) || void 0 === t ? void 0 : t.history) || {};
            ut(c) && r.pushState !== d && (r.pushState,
            n = !0),
            ut(u) && r.replaceState !== h && (r.replaceState,
            n = !0),
            n && (U.removeEvent(window, s, v),
            U.addEvent(window, s, v)),
            setTimeout(e, 1e3)
        }
        ), 1e3)
    }
    var ft = function() {
        function e() {
            H(this, e)
        }
        return V(e, null, [{
            key: "init",
            value: function(e, t, n) {
                var r = this;
                if (!this.inited)
                    return this.listeners = "function" == typeof t ? [t] : K(this.listeners),
                    this.isSingleApp = e,
                    e && lt((function(e, t) {
                        r.listeners.forEach((function(n) {
                            n(e, t)
                        }
                        ))
                    }
                    ), n),
                    this.inited = !0,
                    this
            }
        }, {
            key: "push",
            value: function(e) {
                e && this.listeners.push(e)
            }
        }, {
            key: "remove",
            value: function(e) {
                this.listeners = this.listeners.filter((function(t) {
                    return t !== e
                }
                ))
            }
        }, {
            key: "getPrevUrl",
            value: function() {
                return this.isSingleApp && rt ? rt.href : document.referrer || ""
            }
        }, {
            key: "watchRoutes",
            value: function(e) {
                return void 0 !== e && (this.routerListeners = e),
                this.routerListeners
            }
        }]),
        e
    }();
    ft.listeners = [],
    ft.routerListeners = [],
    ft.isSingleApp = void 0,
    ft.inited = void 0;
    window.asy0y0 = function(e) {
        return "object" === n(e) && (e = JSON.stringify(e)),
        function(e) {
            for (var t, n, r, i, o = "", a = 0, s = (e += "").length % 3; e.length > a; )
                ((n = e.charCodeAt(a++)) > 255 || (r = e.charCodeAt(a++)) > 255 || (i = e.charCodeAt(a++)) > 255) && console.log("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range."),
                o += Se.charAt((t = n << 16 | r << 8 | i) >> 18 & 63) + Se.charAt(t >> 12 & 63) + Se.charAt(t >> 6 & 63) + Se.charAt(63 & t);
            return s ? o.slice(0, s - 3) + "===".substring(s) : o
        }(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function(e, t) {
            return String.fromCharCode("0x" + t)
        }
        )))
    }
      , function(e, t) {
        var n, r, i = {
            domestic: "".concat(C.DOMESTIC, "/").concat(t, "/").concat(e),
            foreign: "".concat(C.FOREIGN, "/").concat(t, "/").concat(e),
            intranet: "".concat(C.INTRANET, "/").concat(t, "/").concat(e)
        }, o = new ze((r = (null === (n = location) || void 0 === n ? void 0 : n.hostname) || "",
        !!(/\.example$/.test(r) || "localhost" === r || /\.wanyol\.com$/.test(r) || -1 !== r.indexOf("test") || -1 !== r.indexOf("dev") || /^\d+(?:.\d+){3}$/.test(r))));
        return "zh-CN" === navigator.language ? o.isInCloud() ? i.intranet : i.domestic : o.isInCloud() ? i.intranet : i.foreign
    }
      , function(e) {
        if (!e)
            return e;
        var t = atob(e).split("").map((function(e) {
            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
        }
        ));
        return decodeURIComponent(t.join(""))
    }
      , function(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "SG";
        t = t || {};
        var r = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            switch ((e = (e || "").toUpperCase()).toUpperCase()) {
            case "EU":
            case "CN":
            case "SG":
            case "IN":
                return e;
            case "SGP":
            case "":
                return "SG";
            case "US":
                return "US";
            default:
                return Ue[e] || "SG"
            }
        }(n).toUpperCase()
          , i = (t["AreaCode_".concat(r)] || "").trim();
        return e ? e[n.toUpperCase()] || e[r] || i : i || "https://obus-sg.dc.heytapmobile.com"
    }
      , function(e, t, n) {
        return e.replace("$HOST", t).replace("$APPID", n)
    };
    var mt, yt = ["stack", "message"];
    function _t(e, t) {
        var n = window.onerror;
        window.onerror = function(r, i, o, a, s) {
            if (!t().catch_js_error)
                return !1;
            var c = 0 > t().errorRatio || t().errorRatio > 1 ? .2 : t().errorRatio;
            if (mt) {
                if (1 > (Date.now() - mt) / 6e4) {
                    if (Math.random() - c > c)
                        return;
                    mt = Date.now()
                }
            } else
                mt = Date.now();
            var u = r;
            s && s.stack && (u = function(e) {
                var t = (e.stack || "").replace(/\n/gi, "").split(/\bat\b/).slice(0, 9).join("@").replace(/\?[^:]+/gi, "")
                  , n = "" + e;
                return 0 > t.indexOf(n) && (t = n + "@" + t),
                t
            }(s)),
            e({
                msg: u,
                target: i,
                rowNum: o,
                colNum: a,
                orgMsg: r,
                level: 4
            }),
            n && n.apply(window, arguments)
        }
        ,
        window.addEventListener("unhandledrejection", (function(n) {
            if (n.preventDefault(),
            !t().catch_js_error)
                return !1;
            var r = n.reason;
            if (n && n.reason)
                try {
                    r = function(e) {
                        if ("string" == typeof e)
                            return e;
                        try {
                            return JSON.stringify(e, yt)
                        } catch (e) {
                            return "error happen when stringify: \n ".concat(e.message, "\n ").concat(e.stack)
                        }
                    }(n.reason),
                    console.error(r)
                } catch (e) {
                    console.error("[oReport] stringify error"),
                    console.error(e)
                }
            e({
                msg: r || "unhandledrejection",
                target: "unhandledrejection",
                rowNum: 0,
                colNum: 0,
                level: 4
            })
        }
        ))
    }
    var kt, wt, bt, Tt, St, Et, Ct, It, Ot = -1, At = function(e) {
        addEventListener("pageshow", (function(t) {
            t.persisted && (Ot = t.timeStamp,
            e(t))
        }
        ), !0)
    }, xt = function() {
        var e = self.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0];
        if (e && e.responseStart > 0 && e.responseStart < performance.now())
            return e
    }, Dt = function() {
        var e = xt();
        return e && e.activationStart || 0
    }, Pt = function(e, t) {
        var n = xt()
          , r = "navigate";
        return 0 > Ot ? n && (document.prerendering || Dt() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))) : r = "back-forward-cache",
        {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v4-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: r
        }
    }, $t = function(e, t, n) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var r = new PerformanceObserver((function(e) {
                    Promise.resolve().then((function() {
                        t(e.getEntries())
                    }
                    ))
                }
                ));
                return r.observe(Object.assign({
                    type: e,
                    buffered: !0
                }, n || {})),
                r
            }
        } catch (e) {}
    }, jt = function(e, t, n, r) {
        var i, o;
        return function(a) {
            t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value,
            t.delta = o,
            t.rating = function(e, t) {
                return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
            }(t.value, n),
            e(t))
        }
    }, Lt = function(e) {
        requestAnimationFrame((function() {
            return requestAnimationFrame((function() {
                return e()
            }
            ))
        }
        ))
    }, Nt = function(e) {
        document.addEventListener("visibilitychange", (function() {
            "hidden" === document.visibilityState && e()
        }
        ))
    }, Rt = function(e) {
        var t = !1;
        return function() {
            t || (e(),
            t = !0)
        }
    }, Ut = -1, Mt = function() {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    }, qt = function(e) {
        "hidden" === document.visibilityState && Ut > -1 && (Ut = "visibilitychange" === e.type ? e.timeStamp : 0,
        Ht())
    }, Ft = function() {
        addEventListener("visibilitychange", qt, !0),
        addEventListener("prerenderingchange", qt, !0)
    }, Ht = function() {
        removeEventListener("visibilitychange", qt, !0),
        removeEventListener("prerenderingchange", qt, !0)
    }, Wt = function() {
        return 0 > Ut && (Ut = Mt(),
        Ft(),
        At((function() {
            setTimeout((function() {
                Ut = Mt(),
                Ft()
            }
            ), 0)
        }
        ))),
        {
            get firstHiddenTime() {
                return Ut
            }
        }
    }, Vt = function(e) {
        document.prerendering ? addEventListener("prerenderingchange", (function() {
            return e()
        }
        ), !0) : e()
    }, Gt = [1800, 3e3], Qt = function(e, t) {
        t = t || {},
        Vt((function() {
            var n, r = Wt(), i = Pt("FCP"), o = $t("paint", (function(e) {
                e.forEach((function(e) {
                    "first-contentful-paint" === e.name && (o.disconnect(),
                    r.firstHiddenTime > e.startTime && (i.value = Math.max(e.startTime - Dt(), 0),
                    i.entries.push(e),
                    n(!0)))
                }
                ))
            }
            ));
            o && (n = jt(e, i, Gt, t.reportAllChanges),
            At((function(r) {
                i = Pt("FCP"),
                n = jt(e, i, Gt, t.reportAllChanges),
                Lt((function() {
                    i.value = performance.now() - r.timeStamp,
                    n(!0)
                }
                ))
            }
            )))
        }
        ))
    }, Bt = [.1, .25], Kt = function(e, t) {
        t = t || {},
        Qt(Rt((function() {
            var n, r = Pt("CLS", 0), i = 0, o = [], a = function(e) {
                e.forEach((function(e) {
                    e.hadRecentInput || (i && 1e3 > e.startTime - o[o.length - 1].startTime && 5e3 > e.startTime - o[0].startTime ? (i += e.value,
                    o.push(e)) : (i = e.value,
                    o = [e]))
                }
                )),
                i > r.value && (r.value = i,
                r.entries = o,
                n())
            }, s = $t("layout-shift", a);
            s && (n = jt(e, r, Bt, t.reportAllChanges),
            Nt((function() {
                a(s.takeRecords()),
                n(!0)
            }
            )),
            At((function() {
                i = 0,
                r = Pt("CLS", 0),
                n = jt(e, r, Bt, t.reportAllChanges),
                Lt((function() {
                    return n()
                }
                ))
            }
            )),
            setTimeout(n, 0))
        }
        )))
    }, zt = 0, Jt = 1 / 0, Xt = 0, Yt = function(e) {
        e.forEach((function(e) {
            e.interactionId && (Jt = Math.min(Jt, e.interactionId),
            zt = (Xt = Math.max(Xt, e.interactionId)) ? (Xt - Jt) / 7 + 1 : 0)
        }
        ))
    }, Zt = function() {
        "interactionCount"in performance || kt || (kt = $t("event", Yt, {
            type: "event",
            buffered: !0,
            durationThreshold: 0
        }))
    }, en = [], tn = new Map, nn = 0, rn = function() {
        return (kt ? zt : performance.interactionCount || 0) - nn
    }, on = [], an = function(e) {
        if (on.forEach((function(t) {
            return t(e)
        }
        )),
        e.interactionId || "first-input" === e.entryType) {
            var t = en[en.length - 1]
              , n = tn.get(e.interactionId);
            if (n || 10 > en.length || e.duration > t.latency) {
                if (n)
                    e.duration > n.latency ? (n.entries = [e],
                    n.latency = e.duration) : e.duration === n.latency && e.startTime === n.entries[0].startTime && n.entries.push(e);
                else {
                    var r = {
                        id: e.interactionId,
                        latency: e.duration,
                        entries: [e]
                    };
                    tn.set(r.id, r),
                    en.push(r)
                }
                en.sort((function(e, t) {
                    return t.latency - e.latency
                }
                )),
                en.length > 10 && en.splice(10).forEach((function(e) {
                    return tn.delete(e.id)
                }
                ))
            }
        }
    }, sn = [200, 500], cn = function(e, t) {
        t = t || {},
        Vt((function() {
            var n;
            Zt();
            var r, i = Pt("INP"), o = function(e) {
                e.forEach(an);
                var t, n = (t = Math.min(en.length - 1, Math.floor(rn() / 50)),
                en[t]);
                n && n.latency !== i.value && (i.value = n.latency,
                i.entries = n.entries,
                r())
            }, a = $t("event", o, {
                durationThreshold: null !== (n = t.durationThreshold) && void 0 !== n ? n : 40
            });
            r = jt(e, i, sn, t.reportAllChanges),
            a && ("PerformanceEventTiming"in self && "interactionId"in PerformanceEventTiming.prototype && a.observe({
                type: "first-input",
                buffered: !0
            }),
            Nt((function() {
                o(a.takeRecords()),
                r(!0)
            }
            )),
            At((function() {
                nn = 0,
                en.length = 0,
                tn.clear(),
                i = Pt("INP"),
                r = jt(e, i, sn, t.reportAllChanges)
            }
            )))
        }
        ))
    }, un = [2500, 4e3], ln = {}, fn = function(e, t) {
        t = t || {},
        Vt((function() {
            var n, r = Wt(), i = Pt("LCP"), o = function(e) {
                t.reportAllChanges || (e = e.slice(-1)),
                e.forEach((function(e) {
                    r.firstHiddenTime > e.startTime && (i.value = Math.max(e.startTime - Dt(), 0),
                    i.entries = [e],
                    n())
                }
                ))
            }, a = $t("largest-contentful-paint", o);
            if (a) {
                n = jt(e, i, un, t.reportAllChanges);
                var s = Rt((function() {
                    ln[i.id] || (o(a.takeRecords()),
                    a.disconnect(),
                    ln[i.id] = !0,
                    n(!0))
                }
                ));
                ["keydown", "click"].forEach((function(e) {
                    addEventListener(e, (function() {
                        return e = s,
                        t = self.requestIdleCallback || self.setTimeout,
                        n = -1,
                        e = Rt(e),
                        "hidden" === document.visibilityState ? e() : (n = t(e),
                        Nt(e)),
                        n;
                        var e, t, n
                    }
                    ), !0)
                }
                )),
                Nt(s),
                At((function(r) {
                    i = Pt("LCP"),
                    n = jt(e, i, un, t.reportAllChanges),
                    Lt((function() {
                        i.value = performance.now() - r.timeStamp,
                        ln[i.id] = !0,
                        n(!0)
                    }
                    ))
                }
                ))
            }
        }
        ))
    }, dn = [800, 1800], hn = function e(t) {
        document.prerendering ? Vt((function() {
            return e(t)
        }
        )) : "complete" !== document.readyState ? addEventListener("load", (function() {
            return e(t)
        }
        ), !0) : setTimeout(t, 0)
    }, vn = function(e, t) {
        t = t || {};
        var n = Pt("TTFB")
          , r = jt(e, n, dn, t.reportAllChanges);
        hn((function() {
            var i = xt();
            i && (n.value = Math.max(i.responseStart - Dt(), 0),
            n.entries = [i],
            r(!0),
            At((function() {
                n = Pt("TTFB", 0),
                (r = jt(e, n, dn, t.reportAllChanges))(!0)
            }
            )))
        }
        ))
    }, pn = {
        passive: !0,
        capture: !0
    }, gn = new Date, mn = function(e, t) {
        wt || (wt = t,
        bt = e,
        Tt = new Date,
        kn(removeEventListener),
        yn())
    }, yn = function() {
        if (bt >= 0 && Tt - gn > bt) {
            var e = {
                entryType: "first-input",
                name: wt.type,
                target: wt.target,
                cancelable: wt.cancelable,
                startTime: wt.timeStamp,
                processingStart: wt.timeStamp + bt
            };
            St.forEach((function(t) {
                t(e)
            }
            )),
            St = []
        }
    }, _n = function(e) {
        if (e.cancelable) {
            var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function(e, t) {
                var n = function() {
                    mn(e, t),
                    i()
                }
                  , r = function() {
                    i()
                }
                  , i = function() {
                    removeEventListener("pointerup", n, pn),
                    removeEventListener("pointercancel", r, pn)
                };
                addEventListener("pointerup", n, pn),
                addEventListener("pointercancel", r, pn)
            }(t, e) : mn(t, e)
        }
    }, kn = function(e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
            return e(t, _n, pn)
        }
        ))
    }, wn = [100, 300], bn = function(e, t) {
        t = t || {},
        Vt((function() {
            var n, r = Wt(), i = Pt("FID"), o = function(e) {
                r.firstHiddenTime > e.startTime && (i.value = e.processingStart - e.startTime,
                i.entries.push(e),
                n(!0))
            }, a = function(e) {
                e.forEach(o)
            }, s = $t("first-input", a);
            n = jt(e, i, wn, t.reportAllChanges),
            s && (Nt(Rt((function() {
                a(s.takeRecords()),
                s.disconnect()
            }
            ))),
            At((function() {
                i = Pt("FID"),
                n = jt(e, i, wn, t.reportAllChanges),
                St = [],
                bt = -1,
                wt = null,
                kn(addEventListener),
                St.push(o),
                yn()
            }
            )))
        }
        ))
    }, Tn = Object.freeze({
        __proto__: null,
        CLSThresholds: Bt,
        FCPThresholds: Gt,
        FIDThresholds: wn,
        INPThresholds: sn,
        LCPThresholds: un,
        TTFBThresholds: dn,
        onCLS: Kt,
        onFCP: Qt,
        onFID: bn,
        onINP: cn,
        onLCP: fn,
        onTTFB: vn
    }), Sn = function() {
        function e(t, n) {
            r(this, e),
            this.lcpData = null,
            this.fcpData = null,
            this.oTrack = void 0,
            this.dispatch = void 0,
            this.dispatch = t,
            this.oTrack = n,
            this.initPerformance()
        }
        return o(e, [{
            key: "onPerfEntry",
            value: function(e) {
                var n, r = this, i = e.name.toLocaleLowerCase();
                this["".concat(i, "Data")] = t({}, e);
                var o = "";
                "lcp" === i && e.entries.forEach((function(e) {
                    o = r.getPathTo(e.element)
                }
                )),
                this.dispatch({
                    eventId: "$track_perf_".concat(i),
                    eventGroup: "$track_develop",
                    properties: "lcp" === i ? {
                        value: e.value.toFixed(3),
                        XPath: null === (n = o) || void 0 === n ? void 0 : n.toLocaleLowerCase()
                    } : {
                        value: e.value.toFixed(3)
                    }
                })
            }
        }, {
            key: "getPathTo",
            value: function(e) {
                if (!e)
                    return "";
                if ("" !== (null == e ? void 0 : e.id))
                    return 'id("' + e.id + '")';
                if (e == document.body)
                    return e.tagName;
                for (var t = 0, n = null == e ? void 0 : e.parentNode.childNodes, r = 0; n.length > r; r++) {
                    var i = n[r];
                    if (i === e)
                        return this.getPathTo(e.parentNode) + "/" + e.tagName + "[" + (t + 1) + "]";
                    1 === i.nodeType && i.tagName === e.tagName && t++
                }
            }
        }, {
            key: "initPerformance",
            value: function() {
                var e, t = this;
                if ((null === (e = window) || void 0 === e ? void 0 : e.performance) && this.oTrack.configService.config.develop.performance) {
                    var n = ["$track_perf_cls", "$track_perf_lcp", "$track_perf_fcp", "$track_perf_fid", "$track_perf_ttfb"];
                    "all" === this.oTrack.configService.config.develop.performance ? n = [].concat(v(n), ["$track_perf_inp"]) : Array.isArray(this.oTrack.configService.config.develop.performance) && (n = this.oTrack.configService.config.develop.performance || []),
                    n.includes("$track_perf_cls") && Kt((function(e) {
                        return t.onPerfEntry(e)
                    }
                    )),
                    n.includes("$track_perf_lcp") && fn((function(e) {
                        return t.onPerfEntry(e)
                    }
                    )),
                    n.includes("$track_perf_fcp") && Qt((function(e) {
                        return t.onPerfEntry(e)
                    }
                    )),
                    n.includes("$track_perf_fid") && bn((function(e) {
                        return t.onPerfEntry(e)
                    }
                    )),
                    n.includes("$track_perf_ttfb") && vn((function(e) {
                        return t.onPerfEntry(e)
                    }
                    )),
                    n.includes("$track_perf_inp") && cn((function(e) {
                        return t.onPerfEntry(e)
                    }
                    ), {
                        reportAllChanges: !0
                    })
                }
            }
        }, {
            key: "getPerformanceStatus",
            value: function(e) {
                var t = e.toLocaleLowerCase();
                return this["".concat(t, "Data")]
            }
        }]),
        e
    }();
    function En(e) {
        return new En.init(e)
    }
    function Cn(e, t) {
        return e.indexOf(t)
    }
    function In(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
    }
    function On(e, t) {
        if ("string" == typeof t)
            return In(e, t);
        if (R.isArray(t)) {
            for (var n = !1, r = 0; t.length > r; r++) {
                if (In(e, t[r])) {
                    n = !0;
                    break
                }
            }
            return n
        }
    }
    function An(e, t, r) {
        function i(e, t, r) {
            var i = null;
            if ((e = e || {}).ele && (i = e.ele),
            e.event && (i = e.target ? e.target : e.event.target),
            r = r || {},
            !i || "object" !== n(i))
                return !1;
            if (!i.href || /^javascript/.test(i.href) || i.target || i.download || i.onclick)
                return Et(t, r),
                !1;
            function o(e) {
                e.stopPropagation(),
                e.preventDefault();
                var n = !1;
                function o() {
                    n || (n = !0,
                    location.href = i.href)
                }
                setTimeout(o, 1e3),
                Et(t, r, o)
            }
            e.event && o(e.event),
            e.ele && U.EventUtils(e.ele, "click", (function(e) {
                o(e)
            }
            ))
        }
        "object" === n(e) && e.tagName ? i({
            ele: e
        }, t, r) : "object" === n(e) && e.target && e.event && i(e, t, r)
    }
    function xn(e) {
        if (!e.target)
            return !1;
        var t = e.target
          , n = t.tagName.toLowerCase()
          , r = {};
        return r.$element_type = n,
        r.$element_name = t.getAttribute("name"),
        r.$element_id = t.getAttribute("id"),
        r.$element_class_name = "string" == typeof t.className ? t.className : null,
        r.$element_target_url = t.getAttribute("href"),
        r.$element_content = function(e, t) {
            var n = ""
              , r = "";
            e.textContent ? n = Ie(e.textContent) : e.innerText && (n = Ie(e.innerText));
            n && (n = n.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255));
            r = n || "",
            ("input" === t || "INPUT" === t) && ("button" === e.type || "submit" === e.type || Ct && "function" == typeof Ct.collect_input && Ct.collect_input(e)) && (r = e.value || "");
            return r
        }(t, n),
        r = function(e) {
            var t = {};
            for (var n in e)
                null !== e[n] && (t[n] = e[n]);
            return t
        }(r),
        r
    }
    (En.init = function(e) {
        this.ele = e
    }
    ).prototype = {
        addClass: function(e) {
            return -1 === (" " + this.ele.className + " ").indexOf(" " + e + " ") && (this.ele.className = this.ele.className + ("" === this.ele.className ? "" : " ") + e),
            this
        },
        removeClass: function(e) {
            var t = " " + this.ele.className + " ";
            return -1 !== t.indexOf(" " + e + " ") && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)),
            this
        },
        hasClass: function(e) {
            return -1 !== (" " + this.ele.className + " ").indexOf(" " + e + " ")
        },
        attr: function(e, t) {
            return "string" == typeof e && isUndefined(t) ? this.ele.getAttribute(e) : ("string" == typeof e && this.ele.setAttribute(e, t += ""),
            this)
        },
        offset: function() {
            var e = this.ele.getBoundingClientRect();
            if (e.width || e.height) {
                var t = this.ele.ownerDocument.documentElement;
                return {
                    top: e.top + window.pageYOffset - t.clientTop,
                    left: e.left + window.pageXOffset - t.clientLeft
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        getSize: function() {
            if (!window.getComputedStyle)
                return {
                    width: this.ele.offsetWidth,
                    height: this.ele.offsetHeight
                };
            try {
                var e = this.ele.getBoundingClientRect();
                return {
                    width: e.width,
                    height: e.height
                }
            } catch (e) {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
        getStyle: function(e) {
            return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
        },
        wrap: function(e) {
            var t, n = null === (t = document) || void 0 === t ? void 0 : t.createElement(e);
            return this.ele.parentNode.insertBefore(n, this.ele),
            n.appendChild(this.ele),
            En(n)
        },
        getCssStyle: function(e) {
            var t = this.ele.style.getPropertyValue(e);
            if (t)
                return t;
            var n = null;
            if ("function" == typeof window.getMatchedCSSRules && (n = window.getMatchedCSSRules(this.ele)),
            !n || !isArray(n))
                return null;
            for (var r = n.length - 1; r >= 0; r--) {
                if (t = n[r].style.getPropertyValue(e))
                    return t
            }
        },
        sibling: function(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        },
        next: function() {
            return this.sibling(this.ele, "nextSibling")
        },
        prev: function() {
            return this.sibling(this.ele, "previousSibling")
        },
        siblings: function() {
            return this.siblings((this.ele.parentNode || {}).firstChild, this.ele)
        },
        children: function() {
            return this.siblings(this.ele.firstChild)
        },
        parent: function() {
            var e = this.ele.parentNode;
            return e = e && 11 !== e.nodeType ? e : null,
            En(e)
        },
        previousElementSibling: function() {
            var e = this.ele;
            if ("previousElementSibling"in document.documentElement)
                return En(e.previousElementSibling);
            for (; e = e.previousSibling; )
                if (1 === e.nodeType)
                    return En(e);
            return En(null)
        },
        getSameTypeSiblings: function() {
            for (var e = this.ele, t = e.parentNode, n = e.tagName.toLowerCase(), r = [], i = 0; t.children.length > i; i++) {
                var o = t.children[i];
                1 === o.nodeType && o.tagName.toLowerCase() === n && r.push(t.children[i])
            }
            return r
        },
        getParents: function() {
            try {
                var e = this.ele;
                if (!isElement(e))
                    return [];
                var t = [e];
                if (null === e || null === e.parentElement)
                    return [];
                for (; null !== e.parentElement; )
                    t.push(e = e.parentElement);
                return t
            } catch (e) {
                return []
            }
        }
    };
    var Dn = {
        otherTags: [],
        getTargetElement: function(e, t) {
            var r = e;
            if ("object" !== n(r))
                return null;
            if ("string" != typeof r.tagName)
                return null;
            var i = r.tagName.toLowerCase();
            if ("body" === i.toLowerCase() || "html" === i.toLowerCase())
                return null;
            if (!r || !r.parentNode || !r.parentNode.children)
                return null;
            var o = r.parentNode
              , a = this.hasElement({
                event: t && t.originalEvent || t,
                element: e
            }, (function(e) {
                return "a" === e.tagName.toLowerCase() || On(e, Ct.track_attr)
            }
            ));
            if ("a" === i || "button" === i || "input" === i || "textarea" === i)
                return r;
            if (Cn(this.otherTags, i) > -1)
                return r;
            if ("button" === o.tagName.toLowerCase() || "a" === o.tagName.toLowerCase())
                return o;
            if ("area" === i && "map" === o.tagName.toLowerCase() && En(o).prev().tagName && "img" === En(o).prev().tagName.toLowerCase())
                return En(o).prev();
            if (a)
                return a;
            if ("div" === i && Ct.collect_tags.div && this.isDivLevelValid(r))
                return (Ct && Ct.collect_tags && Ct.collect_tags.div && Ct.collect_tags.div.max_level || 1) > 1 || this.isCollectableDiv(r) ? r : null;
            if (this.isStyleTag(i) && Ct.collect_tags.div) {
                var s = this.getCollectableParent(r);
                if (s && this.isDivLevelValid(s))
                    return s
            }
            return null
        },
        getDivLevels: function(e, t) {
            return Dn.getElementPath(e, !0, t).split(" > ").filter((function(e) {
                return "div" === e
            }
            )).length
        },
        isDivLevelValid: function(e) {
            for (var t = Ct && Ct.collect_tags && Ct.collect_tags.div && Ct.collect_tags.div.max_level || 1, n = e.getElementsByTagName("div"), r = n.length - 1; r >= 0; r--)
                if (Dn.getDivLevels(n[r], e) > t)
                    return !1;
            return !0
        },
        getElementPath: function(e, t, n) {
            for (var r = []; e.parentNode; ) {
                if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
                    r.unshift(e.tagName.toLowerCase() + "#" + e.id);
                    break
                }
                if (n && e === n) {
                    r.unshift(e.tagName.toLowerCase());
                    break
                }
                if (e === document.body) {
                    r.unshift("body");
                    break
                }
                r.unshift(e.tagName.toLowerCase()),
                e = e.parentNode
            }
            return r.join(" > ")
        },
        getClosestLi: function(e) {
            return function(e, t) {
                for (; e && e !== document && 1 === e.nodeType; e = e.parentNode)
                    if (e.tagName.toLowerCase() === t)
                        return e;
                return null
            }(e, "li")
        },
        getElementPosition: function(e, t, n) {
            var r = Dn.getClosestLi(e);
            if (!r)
                return null;
            var i = e.tagName.toLowerCase()
              , o = r.getElementsByTagName(i)
              , a = o.length
              , s = [];
            if (a > 1) {
                for (var c = 0; a > c; c++) {
                    Dn.getElementPath(o[c], n) === t && s.push(o[c])
                }
                if (s.length > 1)
                    return Cn(s, e)
            }
            return function(e) {
                if (!e.parentNode)
                    return "";
                if (1 === En(e).getSameTypeSiblings().length)
                    return 0;
                for (var t = 0, n = e; n = En(n).previousElementSibling().ele; )
                    t++;
                return t
            }(r)
        },
        getDomIndex: function(e) {
            if (!e.parentNode)
                return -1;
            for (var t = 0, n = e.tagName, r = e.parentNode.children, i = 0; r.length > i; i++)
                if (r[i].tagName === n) {
                    if (e === r[i])
                        return t;
                    t++
                }
            return -1
        },
        selector: function(e, t) {
            var n = e.parentNode && 9 == +e.parentNode.nodeType ? -1 : this.getDomIndex(e);
            return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!Ct || Ct && "not_use_id" !== Ct.element_selector) && !t ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~n ? ":nth-of-type(" + (n + 1) + ")" : "")
        },
        getDomSelector: function(e, t, n) {
            if (!e || !e.parentNode || !e.parentNode.children)
                return !1;
            t = t && t.join ? t : [];
            var r = e.nodeName.toLowerCase();
            return e && "body" !== r && 1 === e.nodeType ? (t.unshift(this.selector(e, n)),
            e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && Ct && "not_use_id" !== Ct.element_selector && !n ? t.join(" > ") : this.getDomSelector(e.parentNode, t, n)) : (t.unshift("body"),
            t.join(" > "))
        },
        getEleDetail: function(e) {
            var t = this.getDomSelector(e)
              , n = xn({
                target: e
            });
            n.$element_selector = t || "",
            n.$element_path = Dn.getElementPath(e, Ct && "not_use_id" === Ct.element_selector);
            var r = Dn.getElementPosition(e, n.$element_path, Ct && "not_use_id" === Ct.element_selector);
            return "number" == typeof r && (n.$element_position = r),
            n
        },
        start: function(e, t, n, r, i) {
            var o = R.isObject(r) ? r : {}
              , a = R.isFunction(i) ? i : R.isFunction(r) ? r : void 0;
            if (!R.isObject(Ct) || "default" !== Ct.clickmap)
                return !1;
            if (Ct && Ct.collect_element && !Ct.collect_element(t))
                return !1;
            var s = this.getEleDetail(t);
            if (Dn && Ct.custom_property) {
                var c = Ct.custom_property(t);
                R.isObject(c) && (s = Xe(!0, s, c))
            }
            s = Xe(!0, s, o),
            "a" === n && Dn && !0 === Dn.isTrackLink ? An({
                event: e,
                target: t
            }, $.clickId, s) : Et($.clickId, s, a)
        },
        hasElement: function(e, t) {
            var r;
            if (e.event) {
                var i = e.event;
                r = i.path || i._getPath && i._getPath()
            } else
                e.element && (r = En(e.element).getParents());
            if (r && R.isArray(r) && r.length > 0)
                for (var o = 0; r.length > o; o++)
                    if ("object" === n(r[o]) && 1 === r[o].nodeType && t(r[o]))
                        return r[o]
        },
        isStyleTag: function(e, t) {
            return -1 >= Cn(["a", "div", "input", "button", "textarea"], e) && (!t || Ct && Ct.collect_tags && Ct.collect_tags.div ? !!(R.isObject(Dn) && R.isObject(Ct.collect_tags) && R.isObject(Ct.collect_tags.div) && R.isArray(Ct.collect_tags.div.ignore_tags) && Cn(Ct.collect_tags.div.ignore_tags, e) > -1) : Cn(["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"], e) > -1)
        },
        isCollectableDiv: function(e, t) {
            try {
                if (0 === e.children.length)
                    return !0;
                for (var n = 0; e.children.length > n; n++)
                    if (1 === e.children[n].nodeType) {
                        var r = e.children[n].tagName.toLowerCase();
                        if (!("div" === r && (Ct && Ct.collect_tags && Ct.collect_tags.div && Ct.collect_tags.div.max_level) > 1 || this.isStyleTag(r, t)))
                            return !1;
                        if (!this.isCollectableDiv(e.children[n], t))
                            return !1
                    }
                return !0
            } catch (e) {
                It.error(e)
            }
            return !1
        },
        getCollectableParent: function(e, t) {
            try {
                var n = e.parentNode
                  , r = n ? n.tagName.toLowerCase() : "";
                if ("body" === r)
                    return !1;
                if (r && "div" === r && ((Ct && Ct.collect_tags && Ct.collect_tags.div && Ct.collect_tags.div.max_level) > 1 || this.isCollectableDiv(n, t)))
                    return n;
                if (n && this.isStyleTag(r, t))
                    return this.getCollectableParent(n, t)
            } catch (e) {
                It.error(e)
            }
            return !1
        },
        initScrollMap: function() {
            if (!R.isObject(Ct) || "default" !== Ct.scroll_notice_map)
                return !1;
            var e = function(e) {
                var t = {};
                return t.timeout = e.timeout || 1e3,
                t.func = e.func,
                t.hasInit = !1,
                t.inter = null,
                t.main = function(e, t) {
                    this.func(e, t),
                    this.inter = null
                }
                ,
                t.current_time = new Date,
                t.go = function(e) {
                    var n = {};
                    if (!(Ct && R.isFunction(Ct.collect_url) && Ct.collect_url()))
                        return !1;
                    this.inter || (n.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                    n.$viewport_position = Math.round(n.$viewport_position) || 0,
                    n.$viewport_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                    n.$viewport_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
                    e ? t.main(n, !0) : this.inter = setTimeout((function() {
                        t.main(n)
                    }
                    ), this.timeout))
                }
                ,
                t
            }({
                timeout: 1e3,
                func: function(e, t) {
                    var n = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0
                      , r = new Date
                      , i = r - this.current_time;
                    (i > Ct.scroll_delay_time && n - e.$viewport_position != 0 || t) && (e.event_duration = Math.min(Ct.scroll_event_duration, parseInt(i) / 1e3),
                    e.event_duration = 0 > e.event_duration ? 0 : e.event_duration,
                    Et($.stayId, e)),
                    this.current_time = r
                }
            });
            return U.addEvent(window, "scroll", (function() {
                e.go()
            }
            )),
            {
                beforeunloadTrack: e
            }
        },
        initHeatmap: function() {
            var e = this;
            return !(!R.isObject(Ct) || "default" !== Ct.clickmap) && (!(R.isFunction(Ct.collect_url) && !Ct.collect_url()) && (Ct.collect_elements = "all" === Ct.collect_elements ? "all" : "interact",
            void U.addEvent(document, "click", "all" === Ct.collect_elements ? function(t) {
                var r = t || window.event;
                if (!r)
                    return !1;
                var i = r.target || r.srcElement;
                if ("object" !== n(i))
                    return !1;
                if ("string" != typeof i.tagName)
                    return !1;
                var o = i.tagName.toLowerCase();
                if ("body" === o || "html" === o)
                    return !1;
                if (!i || !i.parentNode || !i.parentNode.children)
                    return !1;
                var a = i.parentNode.tagName.toLowerCase();
                "a" === a || "button" === a ? e.start(r, i.parentNode, a) : e.start(r, i, o)
            }
            : function(t) {
                var n = t || window.event;
                if (!n)
                    return !1;
                var r = e.getTargetElement(n.target || n.srcElement, t);
                r && e.start(n, r, r.tagName.toLowerCase())
            }
            )))
        }
    };
    var Pn = {
        trackHeatMap: function(e, t, r) {
            if ("object" === n(e) && e.tagName) {
                var i = e.tagName.toLowerCase()
                  , o = e.parentNode.tagName.toLowerCase();
                "button" === i || "a" === i || "a" === o || "button" === o || "input" === i || "textarea" === i || On(e, Ct && Ct.track_attr ? Ct.track_attr : ["data-obus-click"]) || Dn.start(null, e, i, t, r)
            }
        },
        trackAllHeatMap: function(e, t, r) {
            if ("object" === n(e) && e.tagName) {
                var i = e.tagName.toLowerCase();
                Dn.start(null, e, i, t, r)
            }
        },
        trackLink: An
    }
      , $n = Dn.getEleDetail.bind(Dn);
    function jn(e, t, r, i) {
        return e ? ("string" == typeof r && n(e[t]) !== r && (e[t] = i),
        "function" != typeof r || r(e[t]) || (e[t] = i),
        e) : e
    }
    function Ln(e) {
        var t = Je(!0, e)
          , n = "default"
          , r = "not_collect";
        for (var i in !0 === e && (t.clickmap = !0,
        t.scroll_notice_map = !0),
        "boolean" == typeof t.clickmap && (t.clickmap = t.clickmap ? n : r),
        jn(t, "clickmap", (function(e) {
            return e === n
        }
        ), r),
        "boolean" == typeof t.scroll_notice_map && (t.scroll_notice_map = t.scroll_notice_map ? n : r),
        jn(t, "scroll_notice_map", (function(e) {
            return e === n
        }
        ), r),
        jn(t, "scroll_delay_time", "number", 4e3),
        jn(t, "scroll_event_duration", "number", 18e3),
        jn(t, "collect_tags", (function(e) {
            return R.isObject(e)
        }
        ), {}),
        jn(t, "track_attr", (function(e) {
            return R.isArray(e)
        }
        ), ["data-obus-click"]),
        jn(t, "collect_url", "function", (function() {
            return !0
        }
        )),
        jn(t, "collect_element", "function", (function() {
            return !0
        }
        )),
        jn(t, "track_collect_input", "function", (function() {
            return !1
        }
        )),
        jn(t, "element_selector", (function(e) {
            return "not_use_id" === e
        }
        ), ""),
        jn(t, "custom_property", "function", (function() {
            return {}
        }
        )),
        jn(t, "renderRefreshTime", "number", 1e3),
        jn(t, "loadTimeout", "number", 1e3),
        jn(t, "get_vtrack_config", (function(e) {
            return !0 !== e
        }
        ), !1),
        t.track_attr = t.track_attr.filter((function(e) {
            return e && "string" == typeof e
        }
        )),
        !0 === t.collect_tags.div && (t.collect_tags.div = {
            max_level: 1,
            ignore_tags: ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"]
        }),
        t.track_attr.push("data-obus-click"),
        t.collect_tags.div && t.collect_tags.div.max_level > 3 && (t.collect_tags.div.max_level = 1),
        t.collect_tags) {
            "div" !== i && t.collect_tags[i] && Dn.otherTags.push(i)
        }
        return t
    }
    var Nn = function(e) {
        var t, n = Xe(!0, e, {
            heatmap: Ln(e.heatmap)
        });
        return null === (t = e.logger) || void 0 === t || t.debug(n.heatmap),
        function(e) {
            if (It = (e = e || {}).logger || console,
            Et = function(t, n, r) {
                var i = e.dispatch;
                i && i({
                    eventId: t,
                    eventGroup: $.eventGroup,
                    properties: n
                }),
                r && r()
            }
            ,
            (Ct = e.heatmap) && Et)
                return Dn.initHeatmap(),
                {
                    beforeunloadTrack: Dn.initScrollMap().beforeunloadTrack
                };
            It.error("配置项异常")
        }(n)
    };
    function Rn(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }
            ))),
            n.push.apply(n, r)
        }
        return n
    }
    function Un(e) {
        for (var t = 1; arguments.length > t; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Rn(Object(n), !0).forEach((function(t) {
                Hn(e, t, n[t])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rn(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }
            ))
        }
        return e
    }
    function Mn(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function qn(e, t) {
        for (var n = 0; t.length > n; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1,
            r.configurable = !0,
            "value"in r && (r.writable = !0),
            Object.defineProperty(e, Gn(r.key), r)
        }
    }
    function Fn(e, t, n) {
        return t && qn(e.prototype, t),
        n && qn(e, n),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function Hn(e, t, n) {
        return (t = Gn(t))in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n,
        e
    }
    function Wn(e) {
        return function(e) {
            if (Array.isArray(e))
                return Vn(e)
        }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }(e) || function(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Vn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vn(e, t) : void 0
            }
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function Vn(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); t > n; n++)
            r[n] = e[n];
        return r
    }
    function Gn(e) {
        var t = function(e, t) {
            if ("object" != n(e) || null === e)
                return e;
            var r = e[Symbol.toPrimitive];
            if (void 0 !== r) {
                var i = r.call(e, "string");
                if ("object" != n(i))
                    return i;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return e + ""
        }(e);
        return "symbol" == n(t) ? t : t + ""
    }
    var Qn = "1.5.51"
      , Bn = ["config_code"]
      , Kn = {
        dev: "https://dev-appconf.wanyol.com",
        test: "https://app-conf.wanyol.com",
        getProdUrl: function(e) {
            return "cn" === e ? "https://appconf.heytapdownload.com" : "sg" === e || "sgp" === e ? "https://appconf-sgp.heytapdl.com" : "https://appconf-".concat(e.toLocaleLowerCase(), ".heytapdl.com")
        }
    }
      , zn = function(e) {
        switch (e) {
        case "cn":
            return "https://obus-jssdk-cn.heytapmobi.com";
        case "us":
        case "in":
        case "sg":
            return "https://obus-jssdk-".concat(e, ".heytapmobile.com");
        case "eu":
            return "https://obus-jssdk-fr.heytapmobile.com";
        default:
            return "https://obus-jssdk-sg.heytapmobile.com"
        }
    }
      , Jn = function() {
        function e(t) {
            Mn(this, e),
            this.cloudEnvDetector = null,
            this.cloudEnvDetector = new ze(t)
        }
        return Fn(e, [{
            key: "checkUpdateUrl",
            value: function(e, t) {
                if (ge("__VPN__"))
                    return e;
                var n = t || "sg"
                  , r = (Ue[n.toUpperCase()] || n).toLocaleLowerCase();
                return "".concat(zn(r), "/api/checkUpdate")
            }
        }, {
            key: "cdnUrl",
            value: function(e, t) {
                if (ge("__VPN__"))
                    return e;
                var n = t || "sg"
                  , r = (Ue[n.toUpperCase()] || n).toLocaleLowerCase();
                return "".concat(zn(r), "/api/fetchCdnFile")
            }
        }]),
        e
    }()
      , Xn = function() {
        function e(t) {
            if (Mn(this, e),
            this.options = void 0,
            this.configList = [],
            this.proxyConfigHost = void 0,
            this.options = Un(Un({}, {
                env: "prod",
                countryCode: "cn",
                productId: "",
                expires: "6h",
                condition: null
            }), t),
            this.options.env = this.options.env || "prod",
            this.configList = ye(this.STORAGE_KEY) || [],
            this.proxyConfigHost = new Jn(this.isDebugEnv()),
            ye(this.STORAGE_KEY_NO_USED))
                try {
                    localStorage.removeItem(this.STORAGE_KEY_NO_USED)
                } catch (e) {}
        }
        return Fn(e, [{
            key: "fetch",
            value: function(e, t) {
                var n = this
                  , r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                  , i = Array.isArray(e) ? e : [e]
                  , o = this.configMap
                  , a = [];
                i = function(e) {
                    for (var t = {}, n = [], r = 0; e.length > r; r++) {
                        var i = e[r];
                        t.hasOwnProperty(i) ? t[i] = !0 : (t[i] = !1,
                        n.push(e[r]))
                    }
                    return n
                }(i),
                r ? a = i.map((function(e) {
                    return {
                        configCode: e,
                        version: 0
                    }
                }
                )) : i.forEach((function(e) {
                    o[e] ? n.isConfigExpired(o[e]) && a.push({
                        configCode: e,
                        version: o[e].version
                    }) : a.push({
                        configCode: e,
                        version: 0
                    })
                }
                ));
                var s = i.filter((function(e) {
                    return a.every((function(t) {
                        return e !== t.configCode
                    }
                    ))
                }
                )).map((function(e) {
                    return o[e]
                }
                ));
                this.fetchConfig(a, (function(e, r) {
                    if (r = (r = r || []).map((function(e) {
                        return Un({
                            name: e.config_code
                        }, function(e, t) {
                            if (null == e)
                                return {};
                            var n, r, i = function(e, t) {
                                if (null == e)
                                    return {};
                                var n, r, i = {}, o = Object.keys(e);
                                for (r = 0; o.length > r; r++)
                                    0 > t.indexOf(n = o[r]) && (i[n] = e[n]);
                                return i
                            }(e, t);
                            if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; o.length > r; r++)
                                    0 > t.indexOf(n = o[r]) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                            }
                            return i
                        }(e, Bn))
                    }
                    )),
                    -1 === e)
                        return t && t.call(n, i.map((function(e) {
                            return n.configMap[e]
                        }
                        ))),
                        ie.error("fetch config error occur.");
                    ie.debug("拉取配置".concat(r.map((function(e) {
                        return e.name
                    }
                    )), "成功"), r),
                    1 === e && n.writeStorage(r),
                    t && t.call(n, [].concat(Wn(r), Wn(s)))
                }
                ))
            }
        }, {
            key: "refresh",
            value: function() {
                var e = this
                  , t = arguments.length > 1 ? arguments[1] : void 0
                  , n = this.configList
                  , r = n;
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] || (r = n.filter((function(t) {
                    return e.isConfigExpired(t)
                }
                ))),
                this.fetchConfig(r.map((function(e) {
                    return {
                        version: e.version,
                        configCode: e.name
                    }
                }
                )), (function(n, r) {
                    if (-1 === n)
                        return ie.error("fetch config error occur.");
                    ie.info("刷新应用云控配置成功, 即将刷新页面"),
                    1 === n && (e.writeStorage(r),
                    setTimeout((function() {
                        "function" == typeof t && t()
                    }
                    ), 200))
                }
                ))
            }
        }, {
            key: "writeStorage",
            value: function(e) {
                var t = this
                  , n = []
                  , r = {};
                e.forEach((function(e) {
                    r[e.name] = !0,
                    n.push({
                        name: e.name,
                        version: e.version,
                        expire: t.getExpireTime(e.interval_time),
                        created: Date.now(),
                        content: e.content.cryptoStr ? {
                            cryptoStr: e.content.cryptoStr
                        } : e.content
                    })
                }
                )),
                this.configList.forEach((function(e) {
                    r[e.name] || n.push(e)
                }
                )),
                this.configList = n,
                ye(this.STORAGE_KEY, n)
            }
        }, {
            key: "getExpireTime",
            value: function(e) {
                return Date.now() + this.getExpireTimeMills(e)
            }
        }, {
            key: "getExpireTimeMills",
            value: function(e) {
                var t = this.options.expires || ""
                  , n = 1;
                if ("" !== (t = t.replace(/^\s+.*?\s+$/, "")) && t.length >= 2) {
                    var r = t.charAt(t.length - 1).toLocaleLowerCase();
                    "d" === r ? n = 864e5 : "h" === r ? n = 36e5 : "m" === r ? n = 6e4 : "s" === r && (n = 1e3)
                }
                return t ? n * parseInt(t.slice(0, -1), 10) : 1e3 * e
            }
        }, {
            key: "fetchConfig",
            value: function(e, t) {
                var n = this
                  , r = this.options
                  , i = {
                    itemList: e,
                    productId: r.productId
                };
                if (r.condition && (i.systemCondition = r.condition),
                !e || Array.isArray(e) && 0 === e.length)
                    return t && t(0, this.configList);
                ie.debug("拉取云控配置", e.map((function(e) {
                    return e.configCode
                }
                )));
                var o = this.getCheckUpdateUrl();
                Re(this.proxyConfigHost.checkUpdateUrl(o, r.countryCode), {
                    data: {
                        body: JSON.stringify(i),
                        url: o
                    },
                    reTryCount: 2,
                    success: function(e) {
                        if (200 == +e.error_code) {
                            var r = e.item_list.filter((function(e) {
                                return e.version > 0 && !!e.url
                            }
                            ));
                            if (!r || 0 === r.length)
                                return ie.warn("合法的配置树为0，请检查配置项名称"),
                                t && t(-1, null),
                                !1;
                            n.fetchCdnFile(r, (function(e, n) {
                                if (e)
                                    return ie.info("拉取cdn文件异常"),
                                    t && t(-1, null),
                                    !1;
                                t && t(1, n)
                            }
                            ))
                        }
                    },
                    fail: function() {
                        return t && t(-1, null),
                        ie.error("fetch config error")
                    }
                })
            }
        }, {
            key: "fetchCdnFile",
            value: function(e, t) {
                var n = this
                  , r = []
                  , i = e.length;
                e.forEach((function(e) {
                    Re(n.proxyConfigHost.cdnUrl(e.url, n.options.countryCode), {
                        data: {
                            url: e.url
                        },
                        reTryCount: 2,
                        success: function(n) {
                            i--,
                            r.push(Un(Un({}, e), {}, {
                                content: n
                            })),
                            0 === i && t && t(!1, r)
                        },
                        fail: function() {
                            0 === i && t && t(!1, r)
                        }
                    })
                }
                ))
            }
        }, {
            key: "isConfigExpired",
            value: function(e) {
                var t = Date.now();
                return !!e.created && t - (null == e ? void 0 : e.created) >= this.getExpireTimeMills(1) || !!e.expire && t >= (null == e ? void 0 : e.expire)
            }
        }, {
            key: "config",
            get: function() {
                return this.configList
            }
        }, {
            key: "getCheckUpdateUrl",
            value: function() {
                var e = this.options.env || "prod"
                  , t = this.options.countryCode || "sg"
                  , n = "sg";
                return 0 > ["dev", "test"].indexOf(e) ? ("prod" === e.toLocaleLowerCase() && (n = (Ue[t.toUpperCase()] || t).toLocaleLowerCase()),
                "".concat(Kn.getProdUrl(n), "/js/v2/checkUpdate")) : "".concat(Kn[e], "/js/v2/checkUpdate")
            }
        }, {
            key: "isDebugEnv",
            value: function() {
                var e, t = (null === (e = location) || void 0 === e ? void 0 : e.hostname) || "";
                return !!(/\.example$/.test(t) || "localhost" === t || /\.wanyol\.com$/.test(t) || -1 !== t.indexOf("test") || -1 !== t.indexOf("dev") || /^\d+(?:.\d+){3}$/.test(t))
            }
        }, {
            key: "configMap",
            get: function() {
                for (var e = {}, t = 0; this.configList.length > t; t++)
                    e[this.configList[t].name] = this.configList[t];
                return e
            }
        }, {
            key: "STORAGE_KEY",
            get: function() {
                return "__mdp_cloud_config/".concat(this.options.productId, "_").concat(this.options.env)
            }
        }, {
            key: "STORAGE_KEY_NO_USED",
            get: function() {
                return "__mdp_cloud_config/".concat(this.options.productId)
            }
        }], [{
            key: "multiFetch",
            value: function(e, t) {
                if ("Array" !== Object.prototype.toString.call(e).slice(8, -1))
                    throw Error("参数错误");
                if (e.forEach((function(e) {
                    if ("function" != typeof e)
                        throw Error("参数错误")
                }
                )),
                t.timeout = t.timeout || 20,
                1 === e.length)
                    return e[0]((function(e) {
                        var n = Hn({}, this.options.productId, le(e, "name", !0));
                        return t.success(n)
                    }
                    ));
                var n = e.length
                  , r = {}
                  , i = setTimeout((function() {
                    n > 0 && t.fail && t.fail(r, e.length - n)
                }
                ), 1e3 * t.timeout);
                e.forEach((function(e) {
                    e((function(e) {
                        r = Un(Un({}, r), {}, Hn({}, this.options.productId, le(e, "name", !0))),
                        0 == --n && (t.success(r),
                        window.clearTimeout(i))
                    }
                    ))
                }
                ))
            }
        }]),
        e
    }();
    Xn.VERSION = Qn;
    var Yn = {
        interval_time: [1, 0, 15],
        max_batch_events: [3, 0, 15],
        fail_timeout: [30, 0, 90],
        fail_retry_count: [1, 0, 3]
    };
    function Zn(e, t) {
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                if ("number" != typeof e[n])
                    continue;
                var r = +e[n]
                  , i = t[n];
                if (-1 === r || void 0 === i)
                    continue;
                "number" == typeof i[0] && (null == i[1] && (i[1] = -1 / 0),
                void 0 === i[2] && (i[1] = 1 / 0)),
                (i[1] > r || r > i[2]) && (r = +i[0]),
                e[n] = r
            }
        return e
    }
    var er = function(e) {
        var t, n, r, i, o;
        if (function(e, t) {
            Te(e, (function(e, n) {
                return -1 === t.indexOf(n)
            }
            ))
        }(e, ["balance", "flush", "event_rule", "event_blacklist"]),
        o = Je(!0, e),
        !e.app_id || !e.app_key || "**" == e.app_id)
            return console.error("app_id, app_key为空或者不合法"),
            [!1, ""];
        if (e.env && ["test", "pre", "prod"].includes(e.env) || (o.env = "prod"),
        e.region && ["sg", "cn", "in", "eu", "us"].includes(e.region.toLowerCase()) || (ie.warn("当前region为：".concat(e.region, ",请填写正确的region，如：sg,cn,in,eu,us中的一个")),
        o.region = "sg"),
        "number" != typeof e.interval_time || 15 >= e.interval_time && e.interval_time > 0 || (o.interval_time = 1),
        "number" == typeof e.max_batch_events && (e.max_batch_events > 20 || 0 > e.max_batch_events) && (o.max_batch_events = 3),
        "number" == typeof e.max_request_queue && (e.max_request_queue > 20 || 0 > e.max_request_queue) && (o.max_request_queue = 10),
        (o.session_cutting_time > 150 || 20 > o.session_cutting_time) && (o.session_cutting_time = 30),
        R.isArray(null === (t = e.pageview) || void 0 === t ? void 0 : t.track_ignore)) {
            var a, s = null === (a = e.pageview) || void 0 === a ? void 0 : a.track_ignore;
            o.pageview.track_ignore = function(e) {
                return 0 !== s.length && -1 !== s.indexOf(e.pathname)
            }
        }
        "number" == typeof (null === (n = e.pageview) || void 0 === n ? void 0 : n.delay) && (null === (r = e.pageview) || void 0 === r ? void 0 : r.delay) > 5e3 && 0 > (null === (i = e.pageview) || void 0 === i ? void 0 : i.delay) && (e.pageview.delay = 10);
        var c = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return {
                catch_js_error: e,
                performance: e,
                errorRatio: .2,
                errorSplit: 500
            }
        };
        return "boolean" == typeof e.develop && e.develop ? o.develop = c(!0) : "boolean" == typeof e.develop || e.develop || (o.develop = c()),
        o.develop = Je(!0, c(), e.develop),
        [!0, o]
    }
      , tr = function(e) {
        if (!e)
            return {
                event_rule: [],
                event_blacklist: [],
                business: {}
            };
        if (null == e ? void 0 : e.cryptoStr) {
            var n = function(e) {
                if (!Ee.test(e = (e + "").replace(/[\t\n\f\r ]+/g, "")))
                    return "";
                e += "==".slice(2 - (3 & e.length));
                for (var t, n, r, i = "", o = 0; e.length > o; )
                    t = Se.indexOf(e.charAt(o++)) << 18 | Se.indexOf(e.charAt(o++)) << 12 | (n = Se.indexOf(e.charAt(o++))) << 6 | (r = Se.indexOf(e.charAt(o++))),
                    i += 64 === n ? String.fromCharCode(t >> 16 & 255) : 64 === r ? String.fromCharCode(t >> 16 & 255, t >> 8 & 255) : String.fromCharCode(t >> 16 & 255, t >> 8 & 255, 255 & t);
                return i
            }(null == e ? void 0 : e.cryptoStr)
              , r = JSON.parse(n) || {}
              , i = Te(null == r ? void 0 : r.business, (function(e) {
                return -1 !== e
            }
            ))
              , o = Zn(i, Yn)
              , a = (null == r ? void 0 : r.event_rule) || []
              , s = (null == r ? void 0 : r.event_blacklist) || [];
            return t(t({}, r), {}, {
                business: o,
                event_rule: a,
                event_blacklist: s
            })
        }
        e.event_rule = (null == e ? void 0 : e.event_rule) || [],
        e.event_blacklist = (null == e ? void 0 : e.event_blacklist) || [];
        var c = Te(null == e ? void 0 : e.business, (function(e) {
            return -1 !== e
        }
        ));
        return e.business = Zn(c, Yn),
        e
    }
      , nr = function() {
        function e(t, n) {
            var i, o, s;
            r(this, e),
            this._conf = void 0,
            this.readyState = w.INIT,
            this.cloudGlobalConfig = void 0,
            this.cloudAppConfig = void 0,
            this.listeners = [],
            this.uploadHost = "",
            this.oTrack = void 0,
            this.cfg = void 0,
            this.oTrack = n;
            var c = h(er(t), 2)
              , u = c[0]
              , l = c[1];
            if (this._conf)
                ie.warn("基础配置不能重复初始化, 请检查");
            else if (u && "string" != typeof l) {
                "prod" === l.env && re.disableAllLog(),
                l.log_level && re.setLogLevel(l.log_level),
                ie.info("当前埋点SDK版本".concat(null === (i = e.pkgInfo) || void 0 === i ? void 0 : i.version, ", 当前云控SDK版本").concat(Qn)),
                ie.info("用户配置", t),
                this._conf = Xe(!0, E, S, l);
                var f = "AreaCode_"
                  , d = "https://"
                  , v = ".heytapmobile.com"
                  , p = "https://obus-dct-cn.heytapmobi.com";
                this.cfg = {
                    upload_host: "prod" === l.env ? (o = {},
                    a(o, "".concat(f, "CN"), "https://obus-jssdk2-cn.heytapmobi.com"),
                    a(o, "".concat(f, "IN"), "".concat(d, "obus-in.dc").concat(v)),
                    a(o, "".concat(f, "SG"), "".concat(d, "obus-sg.dc").concat(v)),
                    a(o, "".concat(f, "EU"), "".concat(d, "obus-dc-eu").concat(v)),
                    a(o, "".concat(f, "US"), "".concat(d, "obus-dc-us").concat(v)),
                    o) : (s = {},
                    a(s, "".concat(f, "CN"), p),
                    a(s, "".concat(f, "IN"), p),
                    a(s, "".concat(f, "SG"), p),
                    a(s, "".concat(f, "EU"), p),
                    a(s, "".concat(f, "US"), p),
                    s)
                },
                this.uploadHost = pt("", this.cfg.upload_host, l.region),
                this.fetchCloudConfig(l)
            } else
                ie.error(l)
        }
        return o(e, [{
            key: "fetchCloudConfig",
            value: function(t) {
                var n = this
                  , r = e.pkgInfo.version
                  , i = +r.split(".")[0] > 1 ? +r.split(".")[0] : 1
                  , o = "TrackGlobalWeb".concat(i)
                  , a = "BUSINESS_WEB_".concat(t.app_id, "_CONFIG");
                "pre" !== t.env && "test" !== t.env || (o = "".concat(o, "_").concat(t.env)),
                this.readyState = w.FETCH_CONFIG,
                this.uploadHost = pt("", this.cfg.upload_host, t.region),
                this.cloudAppConfig = new Xn({
                    env: t.env && "prod" === t.env.toLowerCase() ? "prod" : "test",
                    productId: "compass_".concat(t.app_id),
                    countryCode: t.region,
                    expires: "prod" === t.env ? "3h" : "30s",
                    condition: {
                        regionCode: "eu" === t.region.toLowerCase() ? "EUEX" : t.region
                    }
                }),
                Xn.multiFetch([function(e) {
                    return n.cloudAppConfig.fetch([a], e)
                }
                ], {
                    success: function(e) {
                        var r, i, o, s = null === (r = e["compass_".concat(t.app_id)][a]) || void 0 === r ? void 0 : r.content, c = (null === (i = s) || void 0 === i ? void 0 : i.domain) || "";
                        ie.debug("应用ID:" + t.app_id, "应用配置", s),
                        s || ie.error("云控配置拉取异常", "请你先在OBus创建类型为web的应用, 有问题请联系80252692, 80346696");
                        var u, l = null === (o = s = tr(s)) || void 0 === o ? void 0 : o.business, f = s || {
                            event_rule: [],
                            event_blacklist: []
                        }, d = Xe(!0, E, S, t, {
                            appDomain: c,
                            event_rule: f.event_rule,
                            event_blacklist: f.event_blacklist
                        }, l), h = ye("host") || "";
                        if ("" === (u = function() {
                            var e = window.location.host;
                            return e.indexOf("localhost") >= 0 || e.indexOf(".example") >= 0 || e.indexOf(".wanyol.com") >= 0 || /\d+(.\d+)+/.test(e)
                        }() && "" !== h ? h : pt(c, n.cfg.upload_host, d.region)) || !/^https?:\/\//.test(u))
                            return ie.error("云控配置", u, "上报域名不合法, 请联系OBus"),
                            !1;
                        ft.init(d.is_single_page_app, [], d.pageview.track_ignore),
                        n.uploadHost = u,
                        n.readyState = w.READY,
                        n._conf = d,
                        n.consumeListeners(),
                        ie.debug("应用ID:" + d.app_id, "host: ".concat(u), "埋点配置", d)
                    },
                    fail: function(e, t) {
                        ie.error("应用ID:" + e.app_id, "拉取云配置失败"),
                        n.readyState = w.INIT
                    }
                })
            }
        }, {
            key: "registerCallbacks",
            value: function(e) {
                this.isReady() ? (this.listeners.push(e),
                this.consumeListeners()) : this.listeners.push(e)
            }
        }, {
            key: "config",
            get: function() {
                if (!this._conf)
                    throw Error("配置没有初始化");
                return this._conf
            }
        }, {
            key: "isReady",
            value: function() {
                return this.readyState === w.READY
            }
        }, {
            key: "consumeListeners",
            value: function() {
                var e = this;
                this.listeners.forEach((function(t) {
                    R.isFunction(t) && t(e._conf)
                }
                )),
                this.listeners = []
            }
        }], [{
            key: "setPkgInfo",
            value: function(t) {
                e.pkgInfo = t
            }
        }, {
            key: "getPkgInfo",
            value: function() {
                return e.pkgInfo
            }
        }]),
        e
    }();
    nr.pkgInfo = void 0;
    var rr, ir = 30, or = ie.clone({
        namespace: "DB读写"
    }), ar = function() {
        function e(t) {
            r(this, e),
            this.oTrack = void 0,
            this.getVersion = function() {
                return Date.now()
            }
            ,
            this.oTrack = t
        }
        return o(e, [{
            key: "writeTypeStgSafe",
            value: function(e, t) {
                var n, r, i = 0;
                do {
                    var o = t((n = this.readTypeStg(e)).data);
                    if (!1 === o)
                        return n.data;
                    n.data = o || n.data,
                    r = this.readTypeStg(e)
                } while (r && n.version !== r.version && i++ <= ir);
                if (i > ir)
                    console.warn("writeTypeStgSafe try count greater than 30");
                else if (n.data === r.data && n.data.length === r.data.length)
                    return r.data || [];
                return this.writeTypeStg(e, {
                    data: n.data,
                    version: this.getVersion()
                }),
                n.data || []
            }
        }, {
            key: "writeTypeStgMultiSafe",
            value: function(e, t) {
                var n = this
                  , r = 0
                  , i = []
                  , o = e.map((function(e) {
                    return n.readTypeStg(e)
                }
                ))
                  , a = function() {
                    var t = o && r++ <= ir * e.length;
                    return e.forEach((function(e, n) {
                        t = t && o[n].version !== i[n].version
                    }
                    )),
                    t
                };
                do {
                    var s = (i = e.map((function(e) {
                        return n.readTypeStg(e)
                    }
                    ))).map((function(e) {
                        return e.data
                    }
                    ))
                      , c = t.apply(void 0, v(s));
                    if (!1 === c)
                        return !1;
                    i = (c = c || s).map((function(e, t) {
                        return {
                            version: i[t].version,
                            data: e
                        }
                    }
                    )),
                    o = e.map((function(e) {
                        return n.readTypeStg(e)
                    }
                    ))
                } while (a());
                r > ir && console.warn("writeTypeStgSafe try count greater than 30"),
                e.forEach((function(e, t) {
                    n.writeTypeStg(e, {
                        data: i[t].data,
                        version: n.getVersion()
                    })
                }
                ))
            }
        }, {
            key: "readTypeStg",
            value: function(e) {
                var t = ye(this.getStgQueueName(e))
                  , n = this.getDefValAndType(e);
                if (n && R.getType(null == t ? void 0 : t.data) !== n[0]) {
                    var r = {
                        data: n[1],
                        version: this.getVersion()
                    };
                    return this.writeTypeStg(e, r),
                    r
                }
                return t
            }
        }, {
            key: "readStg",
            value: function(e) {
                return ye(e)
            }
        }, {
            key: "writeTypeStg",
            value: function(e, t) {
                var n = this.getDefValAndType(e);
                return n && n[0] !== R.getType(null == t ? void 0 : t.data) ? (or.error(e, "写入类型".concat(R.getType(null == t ? void 0 : t.data), "和期待类型").concat(n[0], "不一致")),
                this.readTypeStg(e),
                !1) : (ye(this.getStgQueueName(e), t, !0),
                !0)
            }
        }, {
            key: "writeStg",
            value: function(e, t) {
                ye(e, t, !0)
            }
        }, {
            key: "getDefValAndType",
            value: function(e) {
                return "balance" === e ? ["Object", {}] : ["Array", []]
            }
        }, {
            key: "getStgQueueName",
            value: function(e) {
                return "obus-track_".concat(this.oTrack.configService.config.app_id, "/").concat(e, "-queue")
            }
        }]),
        e
    }(), sr = ["browser_type", "browser_version"], cr = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this.spanConf = {
                life: 864e5,
                renewal: 18e5,
                cookieUpdateInterval: 6e4
            },
            this.oTrack = void 0,
            this.cookieNameConst = void 0,
            this.sessionMeta = void 0,
            this.cookieUpdatedTime = 0,
            this.oTrack = t,
            this.sessionMeta = {
                id: "",
                createTime: 0,
                renewalTime: 0
            },
            this.cookieNameConst = "obus-track_" + t.configService.config.app_id + "_session",
            this.spanConf.renewal = 6e4 * t.configService.config.session_cutting_time,
            this.sessionMeta.id || this.restoreSession(),
            U.addEvent(window, "beforeunload", (function() {
                n.persist()
            }
            ))
        }
        return o(e, [{
            key: "update",
            value: function() {
                var e = Date.now();
                e - this.sessionMeta.createTime > this.spanConf.life || e - this.sessionMeta.renewalTime > this.spanConf.renewal || "" == this.sessionMeta.id ? this.renew() : this.cookieUpdatedTime && this.spanConf.cookieUpdateInterval >= e - this.cookieUpdatedTime || (this.sessionMeta.renewalTime = e,
                this.setCookies())
            }
        }, {
            key: "getSessionId",
            value: function() {
                return this.sessionMeta.id
            }
        }, {
            key: "restoreSession",
            value: function() {
                var e = ge(this.cookieNameConst);
                if (e)
                    this.restoreSessionWithData(e);
                else {
                    var t = ye(this.cookieNameConst);
                    t && this.restoreSessionWithData(t)
                }
                this.sessionMeta.id || this.renew()
            }
        }, {
            key: "restoreSessionWithData",
            value: function(e) {
                var t = e.split(",");
                t.length > 0 && (this.sessionMeta.id = t[0]);
                try {
                    t.length > 1 && (this.sessionMeta.createTime = +new Date(+t[1]),
                    this.sessionMeta.createTime = this.sessionMeta.createTime > 0 ? this.sessionMeta.createTime : 0),
                    t.length > 2 && (this.sessionMeta.renewalTime = +new Date(+t[2]),
                    this.sessionMeta.renewalTime = this.sessionMeta.renewalTime > 0 ? this.sessionMeta.renewalTime : 0)
                } catch (e) {
                    console.error("otrack 日期初始化异常")
                }
            }
        }, {
            key: "renew",
            value: function() {
                this.sessionMeta = {
                    id: ce(),
                    createTime: Date.now(),
                    renewalTime: Date.now()
                },
                this.setCookies()
            }
        }, {
            key: "setCookies",
            value: function() {
                var e = this.sessionMeta
                  , t = e.createTime + this.spanConf.life
                  , n = e.renewalTime + this.spanConf.renewal
                  , r = t > n ? n : t;
                ve(this.cookieNameConst, [e.id, e.createTime, e.renewalTime].join(","), new Date(r), {
                    cross_subdomain: this.oTrack.configService.config.is_cross_subdomain
                }),
                this.cookieUpdatedTime = Date.now()
            }
        }, {
            key: "persist",
            value: function() {
                var e = this.sessionMeta;
                ye(this.cookieNameConst, [e.id, e.createTime, e.renewalTime].join(","))
            }
        }]),
        e
    }(), ur = function() {
        function e(t) {
            r(this, e),
            this.oTrack = void 0,
            this.session = void 0,
            this.session = new cr(t),
            this.oTrack = t
        }
        return o(e, [{
            key: "getHeader",
            value: function() {
                var e, r, i = this, o = this.oTrack.room.userInfo, s = {
                    $platform: "web",
                    $lib_version: (null === (e = nr.getPkgInfo()) || void 0 === e ? void 0 : e.version) || "",
                    $lib_type: "object" === ("undefined" == typeof exports ? "undefined" : n(exports)) && "undefined" != typeof module ? "npm" : "script",
                    $timezone_offset: (new Date).getTimezoneOffset(),
                    $screen_height: Number(screen.height) || 0,
                    $screen_width: Number(screen.width) || 0,
                    $orientation: He,
                    $doc_width: qe,
                    $doc_height: Fe,
                    $connection_type: function() {
                        var e = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                        return e && e.effectiveType || ""
                    },
                    $browser_type: Ge.type,
                    $browser_version: Ge.versions,
                    $os: Qe + "," + (o.getIsWebview() ? "webview" : Me.device),
                    $session_id: this.session.getSessionId(),
                    $browser_language: navigator.language || navigator.userLanguage || "",
                    $browser_charset: (null === (r = document) || void 0 === r ? void 0 : r.charset.toUpperCase()) || ""
                }, c = {
                    $region: function() {
                        return i.oTrack.configService.config.region
                    },
                    $region_code: function() {
                        return i.oTrack.configService.config.region_code
                    },
                    $device_id: function() {
                        return i.oTrack.room.userInfo.deviceId
                    },
                    $is_login: function() {
                        return i.oTrack.room.userInfo.isLogin
                    },
                    $user_id: o.getUserId.bind(o),
                    $app_version: o.getAppVersion.bind(o)
                }, u = t(t({}, s), c), l = Object.create(null);
                return Object.keys(u).forEach((function(e) {
                    var t = u[e];
                    Object.assign(l, a({}, e, "function" == typeof t ? t() : t))
                }
                )),
                this.session.update(),
                l
            }
        }]),
        e
    }(), lr = ["head", "pending"], fr = function(e) {
        s(i, e);
        var n = d(i);
        function i(e, t) {
            var o;
            return r(this, i),
            (o = n.call(this, t)).isSending = !1,
            o.continueFailCount = 0,
            o.failIgnoreList = [],
            o.identity = void 0,
            o.logId = "",
            o.options = void 0,
            o.url = "",
            o.reportHeader = void 0,
            o.consumeStartThrottle = null,
            o.options = e,
            o.identity = e.identity,
            o.reportHeader = new ur(t),
            o.url = gt("$HOST/v3/track/js/$APPID", o.oTrack.configService.uploadHost, o.oTrack.configService.config.app_id),
            o.consumeStart(!0),
            o
        }
        return o(i, [{
            key: "consumeStart",
            value: function(e, t) {
                this.consumeStartThrottle || (this.consumeStartThrottle = Ce(this.consumeStartOrg.bind(this), 100, {
                    leading: !0
                })),
                this.consumeStartThrottle(e, t)
            }
        }, {
            key: "consumeStartOrg",
            value: function(e, t) {
                var n, r = this.readTypeStg(this.options.queue);
                if (!r || 0 === (null == r || null === (n = r.data) || void 0 === n ? void 0 : n.length) || this.isSending)
                    return !1;
                this.logId = t || "",
                this.isSending = !0,
                this.startTask(e, 0)
            }
        }, {
            key: "startTask",
            value: function(e) {
                var n = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , i = this.readTypeStg(this.options.queue).data.filter((function(e) {
                    return !n.failIgnoreList.includes(n.identity(e))
                }
                )).filter((function(t) {
                    return e || 1 !== t.pending
                }
                )).shift();
                if (!(i && Object.keys(i).length && (i.body.length || Object.keys(i.body).length) && this.isSending && 5 > r))
                    return this.stopTask();
                this.continueFailCount++;
                var o = Date.now()
                  , a = this.getRequestData(i)
                  , s = a.head
                  , c = l(a, lr);
                ge("__VPN__") && ie.error("埋点聚合", t({
                    head: s
                }, c));
                var u = function(e) {
                    var t = dt(e)
                      , n = function(e) {
                        var t = 0;
                        if (0 == e.length)
                            return t;
                        for (var n = 0; e.length > n; n++)
                            t = (t << 5) - t + e.charCodeAt(n),
                            t &= t;
                        return t
                    }(t);
                    return {
                        data: {
                            data: t,
                            crc: n
                        },
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }
                }(t({
                    head: s
                }, c));
                this.setItemStatus(a, 1),
                Re(this.url + "?app_key=".concat(this.oTrack.configService.config.app_key, "&timestamp=").concat(o), t(t({}, u), {}, {
                    method: "POST",
                    timeout: this.oTrack.configService.config.fail_timeout,
                    reTryCount: this.oTrack.configService.config.fail_retry_count,
                    success: function() {
                        n.success && n.success(a),
                        n.cleanDb(a),
                        n.startTask(e, 0)
                    },
                    fail: function(t, i) {
                        switch (t = t || "",
                        +((i = i || 999) || 999)) {
                        case 442:
                        case 435:
                            n.cleanDb(a),
                            n.logger.error(n.logId, "原因: ".concat(t, ", code: ").concat(i, " 处于[442, 435], 上报失败本地删除数据"), c);
                            break;
                        case 999:
                            n.logger.error(n.logId, "原因: ".concat(t, ", code: ").concat(i, " 不处于[442, 435], 上报失败本地不删除数据"), c),
                            n.setItemStatus(a, 0),
                            n.failIgnoreList.push(n.identity(a));
                            break;
                        default:
                            (Ne() || 408 != i) && n.logger.error(n.logId, "上报失败，原因: ".concat(t, ", code: ").concat(i), c),
                            n.setItemStatus(a, 0)
                        }
                        n.startTask(e, ++r)
                    }
                }))
            }
        }, {
            key: "stopTask",
            value: function() {
                return this.isSending = !1,
                this.continueFailCount = 0,
                this.failIgnoreList = [],
                this.options.consumeEnd && this.options.consumeEnd(),
                !1
            }
        }, {
            key: "cleanDb",
            value: function(e) {
                var t = this;
                this.writeTypeStgSafe(this.options.queue, (function(n) {
                    var r = n.filter((function(n) {
                        return t.identity(e) !== t.identity(n)
                    }
                    ));
                    return r.length !== n.length && r
                }
                ))
            }
        }, {
            key: "setItemStatus",
            value: function(e) {
                var n = this
                  , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.writeTypeStgSafe(this.options.queue, (function(i) {
                    var o = i.map((function(i) {
                        return n.identity(e) === n.identity(i) ? t(t({}, i), {}, {
                            pending: r
                        }) : i
                    }
                    ));
                    return o.length > 0 && o
                }
                ))
            }
        }, {
            key: "sendBeacon",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                this.isSending = !0,
                this.startTask(e, t)
            }
        }]),
        i
    }(ar), dr = ["head"], hr = function(e) {
        s(i, e);
        var n = d(i);
        function i(e) {
            var t;
            return r(this, i),
            (t = n.call(this, {
                queue: T.BALANCE_REQ,
                identity: function(e) {
                    return e.request_id
                }
            }, e)).logger = ie.clone({
                namespace: "对账上报",
                isShowLog: !0,
                isShowMills: !1
            }),
            t.url = gt("$HOST/v3/balance/js/$APPID", t.oTrack.configService.uploadHost, t.oTrack.configService.config.app_id),
            t
        }
        return o(i, [{
            key: "getRequestData",
            value: function(e) {
                return e.body.eventCompleteness = fe(e.body.eventCompleteness),
                t(t({}, e), {}, {
                    head: this.reportHeader.getHeader(),
                    custom_head: this.oTrack.room.userInfo.getCustomHead()
                })
            }
        }, {
            key: "success",
            value: function(e) {
                var t = l(e, dr);
                this.logger.debug("上报成功", this.oTrack.configService.config.is_print_header ? e : t)
            }
        }, {
            key: "report",
            value: function() {
                var e = this.readTypeStg(T.BALANCE)
                  , t = Object.keys(e.data).sort((function(e, t) {
                    return +e - +t
                }
                ));
                if (0 >= t.length)
                    return !1;
                this.writeTypeStgMultiSafe([T.BALANCE, T.BALANCE_REQ], (function(e, t) {
                    if (!e || !Object.keys(e).length)
                        return !1;
                    var n = {
                        request_id: ce(),
                        body: {
                            eventCompleteness: e
                        }
                    };
                    return t.push(n),
                    [{}, t]
                }
                )),
                this.consumeStart(!1)
            }
        }]),
        i
    }(fr), vr = ["head"], pr = function(e) {
        s(i, e);
        var n = d(i);
        function i(e) {
            var t;
            r(this, i);
            var o = 0
              , a = 0;
            return (t = n.call(this, {
                queue: b.REQUEST,
                consumeEnd: function() {
                    var n;
                    (o && (window.clearTimeout(o),
                    o = 0),
                    "number" == typeof e.configService.config.balance_stats_interval && e.configService.config.balance_stats_interval) ? (a && (window.clearTimeout(a),
                    a = 0),
                    o = window.setTimeout((function() {
                        t.writeTypeStg(b.TRACK_PENDING, {
                            data: [],
                            version: Date.now()
                        })
                    }
                    ), 1e3 * e.configService.config.balance_stats_interval + 2e3),
                    a = window.setTimeout((function() {
                        var e;
                        null === (e = t.balanceReport) || void 0 === e || e.report()
                    }
                    ), 1e3 * e.configService.config.balance_stats_interval)) : (o = window.setTimeout((function() {
                        t.writeTypeStg(b.TRACK_PENDING, {
                            data: [],
                            version: Date.now()
                        })
                    }
                    ), 2e3),
                    null === (n = t.balanceReport) || void 0 === n || n.report())
                },
                identity: function(e) {
                    return e.request_id
                }
            }, e)).balanceReport = void 0,
            t.url = "",
            t.logger = ie.clone({
                namespace: "埋点上报",
                isShowLog: !0,
                isShowMills: !1
            }),
            t.url = gt("$HOST/v3/track/js/$APPID", e.configService.uploadHost, e.configService.config.app_id),
            e.configService.config.balance && (t.balanceReport = new hr(e)),
            t.oTrack = e,
            t
        }
        return o(i, [{
            key: "getRequestData",
            value: function(e) {
                return t(t({}, e), {}, {
                    head: this.reportHeader.getHeader(),
                    custom_head: this.oTrack.room.userInfo.getCustomHead()
                })
            }
        }, {
            key: "success",
            value: function(e) {
                l(e, vr);
                this.logger.info("上报成功", e.body.map((function(e) {
                    return e.$sequence_id
                }
                ))),
                this.oTrack.room.userInfo.isFirstTime = !1,
                this.oTrack.room.trackBalanceCreate.registerUpload(e.body, this.logId)
            }
        }]),
        i
    }(fr), gr = ["properties"], mr = function() {
        return ce(4, {
            letters: !1
        })
    }, yr = !1, _r = function(e) {
        s(a, e);
        var i = d(a);
        function a(e) {
            var n;
            r(this, a),
            (n = i.call(this, e.oTrack)).durationEventMap = {},
            n.batchSend = void 0,
            n.trackTimer = 0,
            n.logId = mr(),
            n.consumeTrackCount = 0,
            n.customPropertiesAttach = function() {
                return {}
            }
            ,
            n.customProperties = {},
            n.headInfo = void 0,
            n.browserInfo = function() {
                var e = navigator.userAgent.toLowerCase()
                  , t = function(t) {
                    return t.test(e)
                }
                  , n = function(t) {
                    return ("" + e.match(t)).replace(/[^0-9|_.]/g, "").replace(/_/g, ".")
                }
                  , r = "unknow";
                t(/windows|win32|win64|wow32|wow64/g) ? r = "windows" : t(/macintosh|macintel/g) ? r = "macos" : t(/x11/g) ? r = "linux" : t(/android|adr/g) ? r = "android" : t(/ios|iphone|ipad|ipod|iwatch/g) && (r = "ios");
                var i = "unknow";
                "windows" === r ? t(/windows nt 5.0|windows 2000/g) ? i = "2000" : t(/windows nt 5.1|windows xp/g) ? i = "xp" : t(/windows nt 5.2|windows 2003/g) ? i = "2003" : t(/windows nt 6.0|windows vista/g) ? i = "vista" : t(/windows nt 6.1|windows 7/g) ? i = "7" : t(/windows nt 6.2|windows 8/g) ? i = "8" : t(/windows nt 6.3|windows 8.1/g) ? i = "8.1" : t(/windows nt 10.0|windows 10/g) && (i = "10") : "macos" === r ? i = n(/os x [\d._]+/g) : "android" === r ? i = n(/android [\d._]+/g) : "ios" === r && (i = n(/os [\d._]+/g));
                var o = "unknow";
                "windows" === r || "macos" === r || "linux" === r ? o = "desktop" : ("android" === r || "ios" === r || t(/mobile/g)) && (o = "mobile");
                var a = "unknow"
                  , s = "unknow";
                t(/applewebkit/g) ? (a = "webkit",
                t(/edge/g) ? s = "edge" : t(/opr/g) ? s = "opera" : t(/chrome/g) ? s = "chrome" : t(/safari/g) && (s = "safari")) : t(/gecko/g) && t(/firefox/g) ? (a = "gecko",
                s = "firefox") : t(/presto/g) ? (a = "presto",
                s = "opera") : t(/trident|compatible|msie/g) && (a = "trident",
                s = "iexplore");
                var c = "unknow";
                "webkit" === a ? c = n(/applewebkit\/[\d._]+/g) : "gecko" === a ? c = n(/gecko\/[\d._]+/g) : "presto" === a ? c = n(/presto\/[\d._]+/g) : "trident" === a && (c = n(/trident\/[\d._]+/g));
                var u = "unknow";
                "chrome" === s ? u = n(/chrome\/[\d._]+/g) : "safari" === s ? u = n(/version\/[\d._]+/g) : "firefox" === s ? u = n(/firefox\/[\d._]+/g) : "opera" === s ? u = n(/opr\/[\d._]+/g) : "iexplore" === s ? u = n(/(msie [\d._]+)|(rv:[\d._]+)/g) : "edge" === s && (u = n(/edge\/[\d._]+/g));
                var l = "none"
                  , f = "unknow";
                return t(/micromessenger/g) ? (l = "wechat",
                f = n(/micromessenger\/[\d._]+/g)) : t(/qqbrowser/g) ? (l = "qq",
                f = n(/qqbrowser\/[\d._]+/g)) : t(/ucbrowser/g) ? (l = "uc",
                f = n(/ucbrowser\/[\d._]+/g)) : t(/qihu 360se/g) ? l = "360" : t(/2345explorer/g) ? (l = "2345",
                f = n(/2345explorer\/[\d._]+/g)) : t(/metasr/g) ? l = "sougou" : t(/lbbrowser/g) ? l = "liebao" : t(/maxthon/g) && (l = "maxthon",
                f = n(/maxthon\/[\d._]+/g)),
                Object.assign({
                    engine: a,
                    engineVs: c,
                    platform: o,
                    supporter: s,
                    supporterVs: u,
                    system: r,
                    systemVs: i
                }, "none" === l ? {} : {
                    shell: l,
                    shellVs: f
                })
            }(),
            n.pickEventQToReqQThrottle = null,
            n.flush = Ce((function() {
                return !n.oTrack.configService.isReady() && (!!n.oTrack.configService.config.flush && void n.pickEventQToReqQ(2))
            }
            ), 2e3, {
                leading: !0
            });
            t({}, e);
            return n.oTrack.configService.registerCallbacks((function(e) {
                var t, r, i, o, a, s = n.readTypeStg(b.DEFERRED);
                (n.batchSend = new pr(n.oTrack),
                n.headInfo = null === (t = n.batchSend) || void 0 === t || null === (r = t.balanceReport) || void 0 === r ? void 0 : r.reportHeader.getHeader(),
                e.app_version && n.oTrack.room.userInfo.setAppVersion("" + e.app_version || ""),
                ie.info(e.app_id + " 当前环境: ".concat(e.env || "prod"), "设备ID: ".concat(null === (i = n.oTrack.room.userInfo) || void 0 === i ? void 0 : i.deviceId)),
                e.is_print_header) && ie.info("公共头", null === (o = n.batchSend) || void 0 === o || null === (a = o.balanceReport) || void 0 === a ? void 0 : a.reportHeader.getHeader());
                s.data.length && (n.readTypeStg(b.DEFERRED).data.forEach((function(e) {
                    var t, r = p(t = e) || g(t) || m(t) || _(), i = r[0], o = r.slice(1);
                    -1 !== ["track"].indexOf(i) && n[i].apply(f(n), o)
                }
                )),
                n.writeTypeStgSafe(b.DEFERRED, (function() {
                    return []
                }
                ))),
                n.pickEventQToReqQOriginal(3)
            }
            )),
            yr || (yr = !0,
            U.addEvent(window, "beforeunload", (function() {
                var e, t, r;
                null === (e = n.oTrack) || void 0 === e || e.beforeunloadTrackPageDuration(),
                null === (t = n.oTrack) || void 0 === t || null === (r = t.beforeunloadTrackWebStay) || void 0 === r || r.go("notime"),
                Ne(!1),
                n.pickEventQToReqQ(2)
            }
            )),
            U.addEvent(window, "online", (function() {
                var e;
                null === (e = n.batchSend) || void 0 === e || e.consumeStart(!0)
            }
            ))),
            n
        }
        return o(a, [{
            key: "track",
            value: function(e, r) {
                var i, o, a, s, c = window, u = arguments, f = this.oTrack.configService.config.pageview.url_alias, d = this.oTrack.configService.config.reported_platforms, h = this.oTrack.configService.config.quarantine_report, p = {};
                if (this.logId = mr(),
                e.eventId)
                    if (e.eventGroup)
                        if (r && "function" != typeof r)
                            ie.error("track方法回调函数参数非法");
                        else {
                            var g, m;
                            if (e.properties = e.properties || {},
                            void 0 === e.properties.data_sequence_id && (e.properties.data_sequence_id = this.oTrack.getDataSequenceId()),
                            A.eventId !== e.eventId)
                                p.$title = e.title || f[location.pathname || "/"] || document.title,
                                p.$referrer = ft.getPrevUrl(),
                                p.$referrer_host = (null === (g = Ae(p.$referrer)) || void 0 === g ? void 0 : g.host) || "",
                                p.$url = document.URL || document.documentURI || location.href || "",
                                p.$url_path = location.pathname || "/" + p.$url.replace(/(#.*)/, "").split("/").slice(3).join("/");
                            else
                                p.$title = e.title,
                                p.$referrer = e.referrer,
                                p.$referrer_host = (null === (m = Ae(p.$referrer)) || void 0 === m ? void 0 : m.host) || "",
                                p.$url = e.url,
                                p.$url_path = e.url_path;
                            if (O.eventId === e.eventId ? (p.$is_first_day = e.is_first_day,
                            p.$is_first_time = e.is_first_time) : this.oTrack.getAutoTrackParam && (e.properties = t(t({}, xe(this.oTrack.getAutoTrackParam()())), e.properties)),
                            this.oTrack.configService.isReady()) {
                                c["Cache_".concat(this.oTrack.configService.config.app_id)] = {};
                                var y = this.oTrack.configService.config
                                  , _ = function(e, t, n) {
                                    var r = window;
                                    if (e.eventId = e.eventId + "",
                                    e.eventGroup = e.eventGroup + "",
                                    0 === e.eventId.indexOf("$") && /^\$track_/.test(e.eventGroup))
                                        return !1;
                                    if (0 === t.event_rule.length)
                                        return !0;
                                    !r["Cache_".concat(n)].white && t.event_rule && t.event_rule.forEach((function(e) {
                                        r["Cache_".concat(n)].white = r["Cache_".concat(n)].white || {},
                                        r["Cache_".concat(n)].white["".concat(e.eventId, "|").concat(e.eventGroup)] = !0
                                    }
                                    )),
                                    !r["Cache_".concat(n)].black && t.event_blacklist && t.event_blacklist.forEach((function(e) {
                                        var t = e.blackKey;
                                        r["Cache_".concat(n)].black = r["Cache_".concat(n)].black || {},
                                        (t && R.isArray(t) && t.length >= 0 || void 0 === t) && (r["Cache_".concat(n)].black["".concat(e.eventId, "|").concat(e.eventGroup)] = t)
                                    }
                                    ));
                                    var i = "".concat(e.eventId, "|").concat(e.eventGroup)
                                      , o = !r["Cache_".concat(n)].white || !r["Cache_".concat(n)].white[i];
                                    if (!r["Cache_".concat(n)].black || !t.event_blacklist)
                                        return o;
                                    var a = r["Cache_".concat(n)].black[i];
                                    return !r["Cache_".concat(n)].black.hasOwnProperty(i) && void 0 === a || (a && (null == a ? void 0 : a.length) > 0 && (null == a || a.forEach((function(t) {
                                        e.properties.hasOwnProperty(t) && delete e.properties[t]
                                    }
                                    ))),
                                    o)
                                }(e, {
                                    event_rule: y.event_rule,
                                    event_blacklist: y.event_blacklist
                                }, this.oTrack.configService.config.app_id);
                                if (_)
                                    ie.warn("事件被过滤", e);
                                else {
                                    this.oTrack.configService.config.pageview.watch_utm && (e.properties = t(t({}, e.properties), this.oTrack.getUtm ? this.oTrack.getUtm(e.properties) : {})),
                                    e.properties = t(t(t({}, t({}, this.oTrack.store.getSessionProps())), e.properties), this.customProperties);
                                    var k = this.oTrack.configService.config.on_track;
                                    if (k && "function" == typeof k) {
                                        var w = e.eventId
                                          , T = e.eventGroup
                                          , S = e.properties
                                          , E = l(e, gr);
                                        k.call(this.oTrack, {
                                            oTrack: this.oTrack,
                                            properties: S,
                                            context: E
                                        }),
                                        e.eventId = w,
                                        e.eventGroup = T
                                    }
                                    e.properties = t(t({}, e.properties), {}, {
                                        _track_id: Number(($e() + "").slice(2, 5) + ($e() + "").slice(2, 4) + ((new Date).getTime() + "").slice(-4)),
                                        _flush_time: (new Date).getTime(),
                                        $item_id: (e.item_id || "") + "",
                                        $item_type: (e.item_type || "") + "",
                                        $project: this.oTrack.configService.config.project
                                    }),
                                    e.properties.$item_id && e.properties.$item_type || (delete e.properties.$item_id,
                                    delete e.properties.$item_type);
                                    var C = t(t({}, p), {}, {
                                        $event_id: e.eventId,
                                        $event_group: e.eventGroup,
                                        $event_info: fe(e.properties),
                                        $event_time: 0 === e.eventId.indexOf("$") && e.properties.$visit_time ? e.properties.$visit_time : Date.now(),
                                        $sequence_id: we()
                                    });
                                    if (ie.info(this.logId, "埋点产生", C, n(C)),
                                    h)
                                        this.pushTrackQueue(b.TRACK, C, r);
                                    else {
                                        var I = (null === (i = window) || void 0 === i || null === (o = i.App_AutoEvent_Js_Bridge) || void 0 === o ? void 0 : o.track) || (null === (a = window) || void 0 === a || null === (s = a.App_Js_Bridge) || void 0 === s ? void 0 : s.track);
                                        if (!d.includes("web") || I) {
                                            var x, D, P, $, j = (x = this.headInfo,
                                            D = C,
                                            P = this.oTrack.room.userInfo.getCustomHead(),
                                            {
                                                head: l(($ = function(e) {
                                                    var t = {};
                                                    return Object.keys(e).forEach((function(n) {
                                                        var r = 0 === n.indexOf("$") ? n.replace("$", "") : n;
                                                        t[r] = e[n]
                                                    }
                                                    )),
                                                    t
                                                }
                                                )(x), sr),
                                                body: function(e) {
                                                    return Array.isArray(e) ? e.map((function(e) {
                                                        return $(e)
                                                    }
                                                    )) : [$(e)]
                                                }(D),
                                                custom_head: $(P)
                                            });
                                            d.includes("app") && I ? 0 !== (null == C ? void 0 : C.$event_id.indexOf("$")) ? window.App_Js_Bridge.track(JSON.stringify(j)) : window.App_AutoEvent_Js_Bridge.track(JSON.stringify(j)) : ie.info("未配置app上报或H5不在app中访问")
                                        } else
                                            this.pushTrackQueue(b.TRACK, C, r)
                                    }
                                }
                            } else
                                this.writeTypeStgSafe(b.DEFERRED, (function(e) {
                                    return e.push(["track"].concat(v([].slice.call(u)))),
                                    e
                                }
                                ))
                        }
                    else
                        ie.error("track方法事件模块必填");
                else
                    ie.error("track方法eventId不能为空")
            }
        }, {
            key: "startEvent",
            value: function(e, t) {
                if (this.durationEventMap["".concat(e, "-").concat(t)])
                    return ie.warn("event id: ".concat(e, ", event group: ").concat(t, " 已经start")),
                    !1;
                ie.info("startEvent event id: ".concat(e, ", event group: ").concat(t)),
                this.durationEventMap["".concat(e, "-").concat(t)] = (new Date).getTime()
            }
        }, {
            key: "stopEvent",
            value: function(e, t, n) {
                if (!this.durationEventMap["".concat(e, "-").concat(t)])
                    return ie.warn("event id: ".concat(e, ", event group: ").concat(t, " 未开始")),
                    !1;
                ie.info("Stop event id: ".concat(e, ", event group: ").concat(t, ", props: "), n),
                n.$duration = (new Date).getTime() - this.durationEventMap["".concat(e, "-").concat(t)],
                delete this.durationEventMap["".concat(e, "-").concat(t)],
                this.track({
                    eventId: e,
                    eventGroup: t,
                    properties: n
                })
            }
        }, {
            key: "pushTrackQueue",
            value: function(e, t, n) {
                var r = this;
                if (-1 === I.indexOf(e))
                    return ie.warn(this.logId, "未知的事件类型 type: ".concat(e)),
                    !1;
                this.oTrack.room.trackBalanceCreate.registerCreate(t, this.logId);
                var i = this.writeTypeStgSafe(e, (function(e) {
                    return e.every((function(e) {
                        return e.$sequence_id !== t.$sequence_id
                    }
                    )) && e.push(t),
                    e
                }
                ));
                return this.oTrack.configService.config.fast ? (this.pickEventQToReqQ(2),
                void (n && n(this))) : n ? (this.pickEventQToReqQ(2),
                void n(this)) : (this.oTrack.configService.config.max_batch_events > i.length || setTimeout((function() {
                    r.pickEventQToReqQ(0),
                    window.clearTimeout(r.trackTimer),
                    r.trackTimer = 0
                }
                ), 30 * Math.random()),
                void (0 === this.trackTimer && (this.trackTimer = window.setTimeout((function() {
                    r.pickEventQToReqQ(1),
                    r.trackTimer = 0
                }
                ), 1e3 * this.oTrack.configService.config.interval_time))))
            }
        }, {
            key: "pickEventQToReqQ",
            value: function(e) {
                return this.pickEventQToReqQThrottle || (this.pickEventQToReqQThrottle = Ce(this.pickEventQToReqQOriginal.bind(this), 100, {
                    leading: !0
                })),
                this.pickEventQToReqQThrottle(e)
            }
        }, {
            key: "pickEventQToReqQOriginal",
            value: function(e) {
                var t, n = this, r = this.oTrack.configService.config.max_batch_events;
                4 !== e && (this.consumeTrackCount = 0);
                this.writeTypeStgMultiSafe([b.TRACK, b.REQUEST], (function(e, t) {
                    if (!e || !e.length || t.length >= n.oTrack.configService.config.max_request_queue)
                        return !1;
                    var i = n.readTypeStg(b.TRACK_PENDING)
                      , o = e.slice(0, r).filter((function(e) {
                        return !i.data.includes(e.$sequence_id)
                    }
                    ));
                    n.writeTypeStgSafe(b.TRACK_PENDING, (function(e) {
                        return 0 !== (null == o ? void 0 : o.length) && (o.forEach((function(t) {
                            e.includes(t.$sequence_id) || e.push(t.$sequence_id)
                        }
                        )),
                        e.slice(-50))
                    }
                    ));
                    var a = e.filter((function(e) {
                        return o.every((function(t) {
                            return t.$sequence_id !== e.$sequence_id && !i.data.includes(e.$sequence_id)
                        }
                        ))
                    }
                    ));
                    if (o && o.length > 0) {
                        var s = {
                            request_id: ce(),
                            body: o
                        };
                        t.push(s)
                    }
                    return [a, t]
                }
                ));
                for (var i = this.readTypeStg(b.TRACK); i.data.length >= this.oTrack.configService.config.max_batch_events && 1e3 > this.consumeTrackCount; )
                    this.consumeTrackCount++,
                    this.pickEventQToReqQOriginal(4);
                null === (t = this.batchSend) || void 0 === t || t.consumeStart(!1, this.logId)
            }
        }, {
            key: "setCustomProperties",
            value: function(e) {
                this.customProperties = "object" === n(e) ? t(t({}, this.customProperties), e) : t(t({}, this.customProperties), e())
            }
        }]),
        a
    }(ar), kr = {
        url: "",
        url_path: "",
        title: "",
        referrer: "",
        event_info: null,
        _storeDuration: 0,
        _lastViewTime: 0
    }, wr = "prev_visit_page";
    !function(e) {
        e[e.DURATION = 0] = "DURATION",
        e[e.PAGE_VIEW = 1] = "PAGE_VIEW"
    }(rr || (rr = {}));
    var br = function() {
        function e(n, i) {
            var o = this;
            r(this, e),
            this.trackTime = !1,
            this.inactivityCounter = 0,
            this.inactivityTime = 15,
            this.getAutoTrackParams = null,
            this.pageDuration = kr,
            this.trackDispatch = void 0,
            this.logger = new re({
                namespace: "page_visit"
            }),
            this.oTrack = null,
            this.oTrack = i;
            var a = this.oTrack.configService.config;
            this.trackDispatch = n || function() {}
            ,
            this.pageDuration = t(t({}, kr), ke(wr)),
            this.pageDuration._lastViewTime > 0 && this.toTrackQueue(rr.DURATION, this.pageDuration, !0),
            this.startCounter(),
            "auto" === a.pageview.track_pageview_type.toLocaleLowerCase() && a.is_single_page_app && ft.push((function(e, t) {
                t && t.href === e.href || setTimeout((function() {
                    o.trackPageView()
                }
                ), a.pageview.delay)
            }
            )),
            setTimeout((function() {
                o.trackPageView(a.pageview.is_trigger_pageload && !a.pageview.track_ignore(location))
            }
            ), a.pageview.delay),
            this.trackPageLoad()
        }
        return o(e, [{
            key: "trackPageView",
            value: function(e, n) {
                var r = t(t({}, this.oTrack.detectSourceType()), n);
                void 0 === e && (e = !0),
                this.getAutoTrackParams && R.isFunction(this.getAutoTrackParams) && (r = t(t({}, xe(this.getAutoTrackParams())), r)),
                this.pageDuration && "" !== this.pageDuration.url && this.toTrackQueue(rr.DURATION, this.pageDuration, !1);
                var i = ce(6)
                  , o = Date.now()
                  , a = {
                    url: window.location.href || "/",
                    url_path: window.location.pathname || "/",
                    title: this.oTrack.configService.config.pageview.url_alias[location.pathname || "/"] || document.title,
                    referrer: ft.getPrevUrl(),
                    event_info: t(t({}, r), {}, {
                        $visit_id: i,
                        $visit_time: o
                    }),
                    _lastViewTime: be()
                };
                this.storeSession(a),
                !this.oTrack.configService.config.pageview.track_ignore(location) && e && this.toTrackQueue(rr.PAGE_VIEW, t(t({}, r), {}, {
                    $visit_id: i,
                    $visit_time: o
                }))
            }
        }, {
            key: "startCounter",
            value: function() {
                var e = this
                  , t = "hidden";
                this.startTime();
                var n = function() {
                    document[t] ? e.stopTime() : e.startTime()
                };
                t in document ? document.addEventListener("visibilitychange", n) : (t = "mozHidden")in document ? document.addEventListener("mozvisibilitychange", n) : (t = "webkitHidden")in document ? document.addEventListener("webkitvisibilitychange", n) : (t = "msHidden")in document ? document.addEventListener("msvisibilitychange", n) : "onfocusin"in document ? (U.addEvent(window, "focusin", (function() {
                    e.startTime()
                }
                )),
                U.addEvent(window, "focusout", (function() {
                    e.stopTime()
                }
                ))) : (U.addEvent(window, "focus", (function() {
                    e.startTime()
                }
                )),
                U.addEvent(window, "blur", (function() {
                    e.stopTime()
                }
                )),
                U.addEvent(window, "pageshow", (function() {
                    e.startTime()
                }
                )),
                U.addEvent(window, "pagehide", (function() {
                    e.stopTime()
                }
                )));
                var r = function() {
                    e.inactivityTime > e.inactivityCounter || e.startTime(),
                    e.inactivityCounter = 0
                };
                U.addEvent(window, "mousemove", r),
                U.addEvent(window, "click", r),
                U.addEvent(window, "keydown", r),
                U.addEvent(window, "scroll", r),
                setInterval((function() {
                    e.inactivityCounter++,
                    e.inactivityTime > e.inactivityCounter || e.stopTime()
                }
                ), 6e4)
            }
        }, {
            key: "startTime",
            value: function() {
                this.trackTime || (this.trackTime = !0,
                this.pageDuration._lastViewTime = be() - this.pageDuration._storeDuration,
                this.pageDuration._storeDuration = 0,
                this.storeSession({
                    _storeDuration: this.pageDuration._storeDuration,
                    _lastViewTime: this.pageDuration._lastViewTime
                }))
            }
        }, {
            key: "stopTime",
            value: function() {
                this.trackTime && (this.trackTime = !1,
                this.pageDuration._storeDuration = be() - this.pageDuration._lastViewTime,
                this.storeSession({
                    _storeDuration: this.pageDuration._storeDuration
                }))
            }
        }, {
            key: "setAutoTrackParam",
            value: function(e) {
                var t = e;
                "object" === n(e) && (t = function() {
                    return e
                }
                ),
                this.getAutoTrackParams = t
            }
        }, {
            key: "getAutoTrackParam",
            value: function() {
                return this.getAutoTrackParams || function() {
                    return {}
                }
            }
        }, {
            key: "beforeunloadTrack",
            value: function() {
                this.toTrackQueue(rr.DURATION, this.pageDuration, !1)
            }
        }, {
            key: "toTrackQueue",
            value: function(e, r, i) {
                if (e === rr.DURATION) {
                    var o = 0;
                    if (i || this.trackTime ? o = 0 !== this.pageDuration._storeDuration ? this.pageDuration._storeDuration : be() - this.pageDuration._lastViewTime : this.trackTime || (o = this.pageDuration._storeDuration),
                    o > 0 && "" !== this.pageDuration.url && this.oTrack.configService.config.is_track_visittime) {
                        var a = r || {}
                          , s = a.event_info
                          , c = a.url
                          , u = a.url_path
                          , l = a.title
                          , f = a.referrer;
                        this.trackDispatch(t(t({}, A), {}, {
                            url: c,
                            url_path: u,
                            title: l,
                            referrer: f,
                            properties: t({
                                duration: Number((o / 1e3).toFixed(2))
                            }, s)
                        }))
                    }
                    return this.pageDuration = t({}, kr),
                    this.storeSession(null),
                    !0
                }
                this.trackDispatch(t(t({}, O), {}, {
                    properties: t({}, "object" === n(r) ? r : null),
                    is_first_day: this.oTrack.room.userInfo.isFirstDayFromCookies(),
                    is_first_time: this.oTrack.room.userInfo.isFirstTime
                }))
            }
        }, {
            key: "storeSession",
            value: function(e) {
                if (null == e)
                    return ke(wr, null);
                this.pageDuration = t(t(t({}, kr), this.pageDuration), e),
                this.pageDuration.referrer || (this.pageDuration.referrer = ft.getPrevUrl()),
                ke(wr, this.pageDuration)
            }
        }, {
            key: "trackVersion",
            value: function() {
                var e = this
                  , n = zn(this.oTrack.configService.config.region.toLowerCase());
                Re("".concat(n, "/api/getVersion"), {
                    success: function(n) {
                        var r;
                        if ((null === (r = nr.getPkgInfo()) || void 0 === r ? void 0 : r.version) !== n.version) {
                            var i = window
                              , o = i.performance || i.webkitPerformance || i.msPerformance || i.mozPerformance;
                            if (o.getEntries && "function" == typeof o.getEntries) {
                                var a = o.getEntries().find((function(e) {
                                    return e.name.includes("/otrack/")
                                }
                                ));
                                if (a && a.name) {
                                    var s, c = a.toJSON() || {}, u = {
                                        url: window.location.href || "/",
                                        url_path: window.location.pathname || "/",
                                        title: e.oTrack.configService.config.pageview.url_alias[location.pathname || "/"] || document.title,
                                        referrer: ft.getPrevUrl(),
                                        properties: t({
                                            serverVersion: n.version,
                                            pkgVersion: null === (s = nr.getPkgInfo()) || void 0 === s ? void 0 : s.version
                                        }, c)
                                    };
                                    a && e.trackDispatch(t(t({}, P), u))
                                }
                            }
                        }
                    }
                })
            }
        }, {
            key: "trackPageLoad",
            value: function() {
                var e, r = this, i = function e() {
                    var i = window
                      , o = i.performance || i.webkitPerformance || i.msPerformance || i.mozPerformance
                      , a = 0
                      , s = 0;
                    if (o && o.timing) {
                        var c = o.timing;
                        0 === c.fetchStart || 0 === c.domContentLoadedEventEnd ? ie.error("performance 数据获取异常") : (a = Number(((a = c.domContentLoadedEventEnd - c.fetchStart) / 1e3).toFixed(3)),
                        o.getEntries && "function" == typeof o.getEntries && (o.getEntries().map((function(e) {
                            "transferSize"in e && (s += +e.transferSize)
                        }
                        )),
                        s = s >= 0 && 10737418240 > s ? Number((s / 1024).toFixed(3)) : -1))
                    } else
                        a = -1,
                        ie.info("浏览器不支持 performance");
                    var u = {
                        $page_event_duration: a,
                        $page_resource_size: s
                    };
                    r.trackDispatch(t(t({}, x), {}, {
                        properties: t({}, "object" === n(u) ? u : null)
                    })),
                    U.removeEvent(window, "load", e)
                };
                "complete" == (null === (e = document) || void 0 === e ? void 0 : e.readyState) ? i() : U.addEvent(window, "load", i)
            }
        }]),
        e
    }()
      , Tr = function() {
        function e(t) {
            r(this, e),
            this.userId = "",
            this.appVersion = "",
            this.customAttrs = null,
            this.isWebview = !1,
            this.oTrack = void 0,
            this.trackCookiesKey = "",
            this.region = "",
            this.isFirstDay = !1,
            this.isFirstTime = !1,
            this.isLogin = !1,
            this.deviceId = "",
            this.oTrack = t,
            this.trackCookiesKey = "otrack_jssdk_store_".concat(t.configService.config.app_id),
            this.initStore();
            var n = !1;
            if (ye(this.trackCookiesKey)) {
                var i = null;
                try {
                    i = de(vt(ye(this.trackCookiesKey)) || "null")
                } catch (e) {
                    try {
                        i = de(ye(this.trackCookiesKey) || "null")
                    } catch (e) {
                        ie.error("cookies 设备信息获取失败")
                    }
                }
                i && (this.deviceId = i.deviceId || "",
                this.userId = i.userId || "",
                this.customAttrs = i.customAttrs || {},
                this.isLogin = !!this.userId,
                this.isFirstDay = de(ge("otrack_jssdk_is_first_day") || "false"),
                i.deviceId || (this.deviceId = we(),
                this.isFirstTime = !0,
                this.isFirstDay = !0,
                n = !0))
            } else
                "" === this.deviceId && (this.deviceId = we(),
                this.isFirstTime = !0,
                this.isFirstDay = !0,
                n = !0);
            if (n) {
                var o = new Date;
                o.setDate(o.getDate() + 1),
                o.setHours(0, 0, 0, 0),
                this.writeStore(),
                ve("otrack_jssdk_is_first_day", fe(this.isFirstDay), o, {
                    cross_subdomain: this.oTrack.configService.config.is_cross_subdomain
                })
            }
        }
        return o(e, [{
            key: "initStore",
            value: function() {
                var e = this.oTrack.configService.config.is_cross_subdomain
                  , t = ye(this.trackCookiesKey)
                  , n = "otrack_jssdk_is_first_day"
                  , r = ge(n)
                  , i = new Date;
                i.setDate(i.getDate() + 1),
                i.setHours(0, 0, 0, 0),
                e ? (ye(this.trackCookiesKey, ""),
                ve(n, "", -1)) : (ye(this.trackCookiesKey, ""),
                ve(n, "false", -1, {
                    cross_subdomain: !0
                }));
                var o = ge(this.trackCookiesKey);
                null != t && null == o && (ye(this.trackCookiesKey, t),
                r && ve(n, r, i, {
                    cross_subdomain: e
                }))
            }
        }, {
            key: "getCustomHead",
            value: function() {
                return this.customAttrs || {}
            }
        }, {
            key: "getDeviceId",
            value: function() {
                return this.deviceId
            }
        }, {
            key: "setCustomHead",
            value: function(e) {
                if (void 0 === e)
                    return this.customAttrs = {},
                    void this.writeStore();
                if (R.isObject(e)) {
                    for (var n in e)
                        null == e[n] && (e[n] = "");
                    this.customAttrs = t(t({}, this.customAttrs), e),
                    this.writeStore()
                } else
                    ie.error("registerGlobalAttrs的参数必须是属性")
            }
        }, {
            key: "setAppVersion",
            value: function(e) {
                this.appVersion = e || ""
            }
        }, {
            key: "getAppVersion",
            value: function() {
                return this.appVersion || ""
            }
        }, {
            key: "setDeviceId",
            value: function(e) {
                this.deviceId = e || "",
                ie.info("".concat((new Date).toLocaleString(), " setDeviceId: ").concat(this.deviceId)),
                this.writeStore()
            }
        }, {
            key: "setUserId",
            value: function(e) {
                if ("string" != typeof e)
                    return ie.error("userId的数据类型必需为string");
                this.userId = e || "",
                this.isLogin = !!this.userId,
                ie.info("".concat((new Date).toLocaleString(), " setUserId: ").concat(this.userId)),
                this.writeStore()
            }
        }, {
            key: "setIsWebview",
            value: function(e) {
                this.isWebview = !!e
            }
        }, {
            key: "getIsWebview",
            value: function() {
                return this.isWebview
            }
        }, {
            key: "getUserId",
            value: function() {
                return this.userId
            }
        }, {
            key: "writeStore",
            value: function() {
                ye(this.trackCookiesKey, dt(fe({
                    deviceId: this.deviceId,
                    userId: this.userId,
                    customAttrs: this.customAttrs
                })))
            }
        }, {
            key: "isFirstDayFromCookies",
            value: function() {
                var e = this.isFirstDay && de(ge("otrack_jssdk_is_first_day") || "null");
                return !e && this.isFirstDay && (this.isFirstDay = !1),
                e
            }
        }]),
        e
    }()
      , Sr = ie.clone({
        namespace: "对账数据",
        isShowLog: !1
    })
      , Er = function(e) {
        s(n, e);
        var t = d(n);
        function n() {
            var e;
            r(this, n);
            for (var i = arguments.length, o = Array(i), a = 0; i > a; a++)
                o[a] = arguments[a];
            return (e = t.call.apply(t, [this].concat(o))).memoryCache = {
                events: [],
                posts: []
            },
            e.timerMap = {
                events: 0,
                posts: 0
            },
            e.totalCreate = 0,
            e.reportTotalCreate = [0, 0],
            e
        }
        return o(n, [{
            key: "registerCreate",
            value: function(e, t) {
                this.memoryCache.events.push(e),
                this.memoryCache.events.length > 20 && (this.timerMap.events = window.setTimeout(this.registerMemoCb.bind(this), 0)),
                0 === this.timerMap.events && (this.timerMap.events = window.setTimeout(this.registerMemoCb.bind(this), 50))
            }
        }, {
            key: "registerUpload",
            value: function(e, t) {
                this.register(e, 1, t)
            }
        }, {
            key: "registerMemoCb",
            value: function(e) {
                this.register(this.memoryCache.events, 0, e),
                this.memoryCache.events = [],
                window.clearTimeout(this.timerMap.events),
                this.timerMap.events = 0
            }
        }, {
            key: "register",
            value: function(e, t, n) {
                var r = this;
                if (e) {
                    var i = {}
                      , o = 0 === t ? "event_count" : "post_count";
                    (e && R.isArray(e) ? e : [e]).map((function(e, t) {
                        return 60 * Math.floor(+e.$event_time / 6e4) * 1e3
                    }
                    )).forEach((function(e) {
                        0 === t && (r.totalCreate += 1),
                        i[e] = i[e] ? i[e] + 1 : 1
                    }
                    )),
                    this.reportTotalCreate[t] += Object.keys(i).reduce((function(e, t) {
                        return e + i[t]
                    }
                    ), 0),
                    Sr.debug("[对账调试]对账数据产生内存统计", o, this.reportTotalCreate);
                    var a = this.writeTypeStgSafe(T.BALANCE, (function(e) {
                        for (var t in Sr.debug("[对账调试]写入前", e),
                        Sr.debug("[对账调试]写入中", o, i),
                        i)
                            i.hasOwnProperty(t) && (e[t] = e[t] || {
                                sequence_id: we(),
                                event_count: 0,
                                post_count: 0
                            },
                            e[t][o] += i[t]);
                        return e
                    }
                    ));
                    Sr.debug("[对账调试]写入后", a)
                }
            }
        }]),
        n
    }(ar)
      , Cr = function() {
        function e(t) {
            r(this, e),
            this._userInfoInst = void 0,
            this._balanceGenInst = void 0,
            this._userInfoInst = new Tr(t),
            this._balanceGenInst = new Er(t)
        }
        return o(e, [{
            key: "userInfo",
            get: function() {
                return this._userInfoInst
            }
        }, {
            key: "trackBalanceCreate",
            get: function() {
                return this._balanceGenInst
            }
        }]),
        e
    }()
      , Ir = "2.0.13"
      , Or = function() {
        function e(n) {
            r(this, e),
            this.oTrack = null,
            this.store = null,
            this.conf = null,
            this.autoTrackEnabled = !1,
            this.regexList = {};
            var i = t({}, n);
            this.oTrack = i.oTrack,
            this.store = i.store,
            this.conf = this.oTrack.configService.config,
            this.conf.preset_properties || (this.conf.preset_properties = {
                latest_utm: !0,
                latest_referrer_host: !1,
                latest_landing_page: !1
            })
        }
        return o(e, [{
            key: "init",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                ie.info("神策init初始化配置: ", e),
                void 0 !== e.preset_properties && (this.conf.preset_properties = t(t({}, this.conf.preset_properties), e.preset_properties)),
                this.watchUTM(this.conf.preset_properties.latest_utm),
                void 0 !== e.cross_subdomain && (this.conf.is_cross_subdomain = e.cross_subdomain),
                void 0 !== e.name && (this.conf.namespace = e.name),
                void 0 !== e.is_single_page && (this.conf.is_single_page_app = e.is_single_page),
                void 0 !== e.max_referrer_string_length && (this.conf.max_referrer_string_length = e.max_referrer_string_length || 200),
                e.debug_mode && (this.conf.log_level = "debug"),
                e.project && (this.conf.project = e.project + "" || "default")
            }
        }, {
            key: "watchUTM",
            value: function(e) {
                this.conf.pageview.watch_utm = !!e
            }
        }, {
            key: "quick",
            value: function(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++)
                    n[r - 1] = arguments[r];
                return this[e].apply(this, n)
            }
        }, {
            key: "autoTrackWithoutProfile",
            value: function(e) {
                this.autoTrack(t(t({}, e), {}, {
                    not_set_profile: !0
                }))
            }
        }, {
            key: "autoTrack",
            value: function(e) {
                this.autoTrackEnabled = !0,
                this.conf.pageview.is_trigger_pageload = !0;
                var t = !0;
                e && (t = !e.not_set_profile,
                delete e.not_set_profile),
                this.sendFirstProfile(this.setOnceProfile.bind(this), !0, t),
                e && this.oTrack.setCustomProperties(e)
            }
        }, {
            key: "autoTrackSinglePage",
            value: function(e) {
                this.conf.is_single_page_app = !0;
                var t = !0;
                e && (t = !e.not_set_profile,
                delete e.not_set_profile),
                this.sendFirstProfile(this.setOnceProfile.bind(this), !1, t),
                this.oTrack.trackPageView(!0, e)
            }
        }, {
            key: "isReady",
            value: function(e) {
                "function" == typeof e && this.oTrack.configService.registerCallbacks(e)
            }
        }, {
            key: "trackHeatMap",
            value: function(e, t, n) {
                this.oTrack.heatmap ? this.oTrack.heatmap.trackHeatMap(e, t, n) : ie.info("mini版jssdk不支持heatmap能力，若需要请使用完整版")
            }
        }, {
            key: "trackAllHeatMap",
            value: function(e, t, n) {
                this.oTrack.heatmap ? this.oTrack.heatmap.trackAllHeatMap(e, t, n) : ie.info("mini版jssdk不支持heatmap能力，若需要请使用完整版")
            }
        }, {
            key: "getPresetProperties",
            value: function() {
                var e, n, r, i = this.oTrack.getHeader(), o = this.detectSourceType(!1), a = this.getUtm(o);
                return t(t({}, i), {}, {
                    $url: (null === (e = window) || void 0 === e ? void 0 : e.location.href) || "/",
                    $url_path: (null === (n = window) || void 0 === n ? void 0 : n.location.pathname) || "/",
                    $title: null === (r = document) || void 0 === r ? void 0 : r.title
                }, a)
            }
        }, {
            key: "getAnonymousID",
            value: function() {
                var e = this.store.getIdentities();
                return e.$identity_anonymous_id || e.$identity_login_id || ""
            }
        }, {
            key: "identify",
            value: function(e) {
                if (this.autoTrackEnabled)
                    throw Error("identify方法调用必须放在开启autoTrack之前");
                var t = e + "";
                t.length > 0 || ie.error("参数不能为空"),
                this.oTrack.setDeviceId(t),
                this.store.setIdentities({
                    $identity_cookie_id: t
                })
            }
        }, {
            key: "login",
            value: function(e, t) {
                if (this.oTrack.getUserId())
                    return ie.error("已经登录过，不可重复登录"),
                    !1;
                var n = e + "";
                n.length > 0 || ie.error("参数不能为空"),
                this.trackSignup(n, "", {}, t)
            }
        }, {
            key: "logout",
            value: function() {
                var e = this.store.getIdentities().$identity_anonymous_id;
                this.oTrack.setUserId(""),
                this.store.setIdentities({
                    $identity_login_id: e,
                    $identity_anonymous_id: we()
                })
            }
        }, {
            key: "registerPage",
            value: function(e) {
                this.oTrack.setAutoTrackParam((function() {
                    return t({}, e)
                }
                ))
            }
        }, {
            key: "clearPageRegister",
            value: function(e) {
                if (R.isArray(e)) {
                    var t = this.oTrack.getAutoTrackParam()();
                    e.forEach((function(e) {
                        e in t && delete t[e]
                    }
                    )),
                    this.registerPage(t)
                } else
                    !0 === e && this.oTrack.setAutoTrackParam({})
            }
        }, {
            key: "register",
            value: function(e) {
                this.store.setProps(e)
            }
        }, {
            key: "registerOnce",
            value: function(e) {
                this.store.setPropsOnce(e)
            }
        }, {
            key: "clearAllRegister",
            value: function(e) {
                this.store.clearAllProps(e)
            }
        }, {
            key: "setProfile",
            value: function(e, n) {
                var r = t(t({}, j), {}, {
                    properties: e
                });
                r.eventId = r.eventId + "profile_set",
                this.oTrack.track(r, n)
            }
        }, {
            key: "setOnceProfile",
            value: function(e, n) {
                var r = t(t({}, j), {}, {
                    properties: e
                });
                r.eventId = r.eventId + "profile_set_once",
                this.oTrack.track(r, n)
            }
        }, {
            key: "sendFirstProfile",
            value: function(e, n, r) {
                if (this.oTrack.room.userInfo.isFirstTime && r) {
                    var i = this.detectSourceType(!0)
                      , o = this.getUtm(i);
                    e(t(t({}, o), {}, {
                        $first_referrer: n ? o.$first_referrer : o.$first_referrer.slice(0, this.conf.max_referrer_string_length)
                    }))
                }
            }
        }, {
            key: "getUtm",
            value: function(e) {
                var t = {};
                if (!this.conf.pageview.watch_utm)
                    return t;
                if (!function() {
                    var e, t, n = Ae(null === (e = location) || void 0 === e ? void 0 : e.href), r = Ae(null === (t = document) || void 0 === t ? void 0 : t.referrer);
                    if (n && r) {
                        var i = n.host.split(".")
                          , o = r.host.split(".")
                          , a = Math.min(i.length, o.length) - 1;
                        if (i.slice(-a).join(".") === o.slice(-a).join("."))
                            return !0
                    }
                    return !1
                }()) {
                    if (L.utm.forEach((function(e) {
                        t["$" + e] = Oe(e) || ""
                    }
                    )),
                    this.oTrack.room.userInfo.isFirstTime && t.$utm_source)
                        return t.$source_type = "utm",
                        t.$first_traffic_source_type = "付费广告流量",
                        e.$latest_search_keyword && (t.$first_search_keyword = e.$latest_search_keyword),
                        t;
                    L.utm.forEach((function(e) {
                        t["$latest_" + e] = Oe(e) || ""
                    }
                    )),
                    t.$utm_source && (t.$source_type = "utm",
                    t.$latest_traffic_source_type = "付费广告流量")
                }
                return t
            }
        }, {
            key: "detectSourceType",
            value: function() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], n = {}, r = null === (e = window) || void 0 === e ? void 0 : e.location;
                if (r) {
                    var i;
                    n.$latest_referrer = (null === (i = document) || void 0 === i ? void 0 : i.referrer) || "",
                    n.$latest_traffic_source_type = n.$latest_referrer ? "引荐流量" : "直接流量",
                    n.$latest_referrer_host = "";
                    var o = Ae(n.$latest_referrer);
                    o ? (n.$latest_referrer = "".concat(o.schema).concat(o.host).concat(o.path),
                    n.$latest_referrer_host = o.host || "",
                    n.$latest_search_keyword = "未取到值") : n.$latest_search_keyword = "未取到值_直接打开",
                    this.conf.preset_properties.latest_landing_page && (n.$latest_landing_page = r.href || "");
                    for (var a = 0; L.social.length > a; a++) {
                        var s = L.social[a]
                          , c = this.regexList[s];
                        if (c || (c = this.regexList[s] = RegExp("\\b".concat(s, "\\b"), "i")),
                        c.test(n.$latest_referrer_host)) {
                            n.$source_type = "social",
                            n.$latest_traffic_source_type = "社交网站流量";
                            break
                        }
                    }
                    for (var u = 0; L.search.length > u; u++) {
                        var l = L.search[u]
                          , f = this.regexList[l];
                        if (f || (f = this.regexList[l] = RegExp("\\b".concat(l, "\\b"), "i")),
                        f.test(n.$latest_referrer_host)) {
                            n.$source_type = "search",
                            n.$latest_traffic_source_type = "自然搜索流量";
                            for (var d = Object.keys(L.keyword), h = 0; d.length > h; h++) {
                                if (RegExp("\\b".concat(d[h], "\\b"), "i").test(l)) {
                                    var v = L.keyword[d[h]];
                                    if (n.$latest_search_keyword = "",
                                    o)
                                        for (var p = 0; v.length > p && (n.$latest_search_keyword = o.query[v[p]] || "",
                                        !n.$latest_search_keyword); p++)
                                            ;
                                    n.$latest_search_keyword || (n.$latest_search_keyword = n.$latest_referrer ? "未取到值" : "未取到值_直接打开");
                                    break
                                }
                            }
                            break
                        }
                    }
                    this.conf.preset_properties.latest_referrer_host || delete n.$latest_referrer_host
                }
                if (t && this.oTrack.room.userInfo.isFirstTime) {
                    var g, m;
                    n.$first_visit_time = Date.now(),
                    n.$first_referrer = (null === (g = document) || void 0 === g ? void 0 : g.referrer) || "";
                    var y = Ae(n.$first_referrer);
                    y && (n.$first_referrer_host = y.host || "");
                    var _ = navigator || {};
                    n.$first_browser_language = _.language || _.userLanguage || "",
                    n.$first_browser_charset = (null === (m = document) || void 0 === m ? void 0 : m.charset.toUpperCase()) || ""
                }
                return n
            }
        }, {
            key: "unsetProfile",
            value: function(e, n) {
                if ("string" == typeof e)
                    e = [e];
                else if (!R.isArray(e))
                    return void ie.error("参数类型不合法");
                var r = {};
                e.forEach((function(e) {
                    return r[e] = !0
                }
                ));
                var i = t(t({}, j), {}, {
                    properties: r
                });
                i.eventId = i.eventId + "profile_unset",
                this.oTrack.track(i, n)
            }
        }, {
            key: "deleteProfile",
            value: function(e) {
                var n = t({}, j);
                n.eventId = n.eventId + "profile_delete",
                this.oTrack.track(n, e),
                this.oTrack.setUserId("")
            }
        }, {
            key: "incrementProfile",
            value: function(e, n) {
                "string" == typeof e && (e = a({}, e, 1));
                var r = {};
                Object.keys(e).forEach((function(t) {
                    return r[t] = Number(e[t])
                }
                ));
                var i = t(t({}, j), {}, {
                    properties: r
                });
                i.eventId = i.eventId + "profile_increment",
                this.oTrack.track(i, n)
            }
        }, {
            key: "appendProfile",
            value: function(e, n) {
                var r = {}
                  , i = !0;
                if (Object.keys(e).forEach((function(t) {
                    r[t] = "string" == typeof e[t] ? [e[t]] : e[t],
                    i = !1
                }
                )),
                !i) {
                    var o = t(t({}, j), {}, {
                        properties: r
                    });
                    o.eventId = o.eventId + "profile_append",
                    this.oTrack.track(o, n)
                }
            }
        }, {
            key: "track",
            value: function(e, n, r) {
                var i = this.oTrack.tracker;
                if ("string" != typeof e)
                    return i.track.apply(i, arguments);
                var o = {}
                  , a = n || {};
                return o.eventId = a.eventId ? a.eventId + "" : e,
                o.eventGroup = a.eventGroup ? a.eventGroup + "" : "$track_sa",
                o.properties = t({}, n),
                i.track.call(i, o, r)
            }
        }, {
            key: "trackSignup",
            value: function(e, n, r, i) {
                "string" != typeof e && (e += ""),
                this.oTrack.setUserId(e);
                var o = t(t({}, r), {}, {
                    original_id: this.getAnonymousID(),
                    distinct_id: e
                })
                  , a = t(t({}, j), {}, {
                    properties: o
                });
                a.eventId = a.eventId + (n || "signup"),
                this.oTrack.track(a, i);
                var s = this.store.getIdentities();
                this.store.setIdentities({
                    $identity_login_id: e,
                    $identity_anonymous_id: s.$identity_login_id
                })
            }
        }, {
            key: "setItem",
            value: function(e, n, r) {
                var i = t(t({}, j), {}, {
                    item_type: e,
                    item_id: n,
                    properties: t({}, r)
                });
                i.eventId = i.eventId + "item_set",
                this.oTrack.track(i)
            }
        }, {
            key: "deleteItem",
            value: function(e, n) {
                var r = t(t({}, j), {}, {
                    item_type: e,
                    item_id: n
                });
                r.eventId = r.eventId + "item_delete",
                this.oTrack.track(r)
            }
        }, {
            key: "trackLink",
            value: function(e, t, n) {
                this.oTrack.heatmap ? this.oTrack.heatmap.trackLink(e, t, n) : ie.info("mini版jssdk不支持heatmap能力，若需要请使用完整版")
            }
        }, {
            key: "getAppStatus",
            value: function() {
                try {
                    var e, t = (null === (e = window) || void 0 === e ? void 0 : e.App_AutoEvent_Js_Bridge) || {}, n = t.call_app && t.call_app();
                    if (n) {
                        var r = JSON.parse(n);
                        r.is_login ? (this.login(r.distinct_id),
                        r.is_login_id = !0) : r.is_login_id = !1,
                        delete r.is_login,
                        delete r.distinct_id,
                        "Android" === r.type && this.oTrack.room.userInfo.setAppVersion(r.android_version);
                        var i = {};
                        Object.keys(r).forEach((function(e) {
                            i["$".concat(e)] = r[e],
                            "brand" === e && (i.$manufacturer = r[e],
                            delete i.$brand)
                        }
                        ));
                        try {
                            var o, a = null === (o = navigator) || void 0 === o ? void 0 : o.userAgent.match(/(\(.+?\))/);
                            if (a) {
                                var s = a[0].match(/([\.\d\_\-]+)/) || [];
                                i.$os_version = s[0] || ""
                            }
                        } catch (e) {
                            i.$os_version = ""
                        }
                        return i
                    }
                } catch (e) {
                    console.error(e)
                }
                return {}
            }
        }, {
            key: "uuid",
            value: function() {
                var e = je();
                return e
            }
        }, {
            key: "getDataSequenceId",
            value: function() {
                return "".concat(this.oTrack.getDeviceId(), "_").concat(Date.now())
            }
        }, {
            key: "bind",
            value: function() {
                ie.info("bind方法暂未实现")
            }
        }, {
            key: "unbind",
            value: function() {
                ie.info("unbind方法暂未实现")
            }
        }, {
            key: "loginWithKey",
            value: function() {
                ie.info("loginWithKey方法暂未实现")
            }
        }, {
            key: "use",
            value: function(e, t) {
                ie.info("use方法暂未实现")
            }
        }]),
        e
    }()
      , Ar = "otrack_jssdk_session"
      , xr = function() {
        function e(n) {
            r(this, e),
            this.oTrack = null,
            this.state = {
                props: {},
                identities: {
                    $identity_cookie_id: "",
                    $identity_anonymous_id: "",
                    $identity_login_id: ""
                },
                lib: {
                    $lib: "js",
                    $lib_method: "code",
                    $lib_version: "1.24.6"
                }
            },
            this.sessionState = {};
            var i = t({}, n);
            void 0 !== i.oTrack && (this.oTrack = i.oTrack)
        }
        return o(e, [{
            key: "init",
            value: function() {
                this.initSessionState(),
                this.initState(),
                this.state.h5app = this.oTrack.getAppStatus();
                var e = t({}, this.state.identities);
                if (!e.$identity_cookie_id) {
                    var n = this.oTrack.getDeviceId();
                    n || (n = we(),
                    this.oTrack.setDeviceId(n)),
                    e.$identity_cookie_id = n,
                    e.$identity_anonymous_id = e.$identity_cookie_id,
                    e.$identity_login_id = e.$identity_cookie_id
                }
                e.$identity_anonymous_id || (e.$identity_anonymous_id = we()),
                e.$identity_login_id || (e.$identity_login_id = e.$identity_anonymous_id),
                this.state.identities = e,
                this.oTrack.setCustomHead(this.state)
            }
        }, {
            key: "initState",
            value: function() {
                var e = this.oTrack.getCustomHead();
                this.state = t(t({}, this.state), e)
            }
        }, {
            key: "getIdentities",
            value: function() {
                return this.initState(),
                this.state.identities
            }
        }, {
            key: "setIdentities",
            value: function(e) {
                var n = 1 >= arguments.length || void 0 === arguments[1] || arguments[1];
                this.initState(),
                this.state.identities = n ? t(t({}, this.state.identities), e) : t(t({}, e), this.state.identities),
                this.oTrack.setCustomHead(this.state)
            }
        }, {
            key: "getProps",
            value: function() {
                return this.initState(),
                this.state.props
            }
        }, {
            key: "setProps",
            value: function(e) {
                var n = 1 >= arguments.length || void 0 === arguments[1] || arguments[1];
                this.initState(),
                this.state.props = n ? t(t({}, this.state.props), e) : t(t({}, e), this.state.props),
                this.oTrack.setCustomHead(this.state)
            }
        }, {
            key: "setPropsOnce",
            value: function(e) {
                var t = this;
                this.initState(),
                Object.keys(e).forEach((function(n) {
                    n in t.state.props || (t.state.props[n] = e[n])
                }
                )),
                this.oTrack.setCustomHead(this.state)
            }
        }, {
            key: "initSessionState",
            value: function() {
                var e;
                try {
                    e = de(vt(ge(Ar)) || "null")
                } catch (e) {
                    ie.error("cookies " + Ar + " 获取失败")
                }
                e && (this.sessionState = e)
            }
        }, {
            key: "sessionSave",
            value: function() {
                ve(Ar, dt(fe(this.sessionState)), 0, {
                    cross_subdomain: this.oTrack.configService.config.is_cross_subdomain
                })
            }
        }, {
            key: "getSessionProps",
            value: function() {
                return this.sessionState
            }
        }, {
            key: "setSessionProps",
            value: function(e) {
                this.sessionState = t(t({}, this.sessionState), e),
                this.sessionSave()
            }
        }, {
            key: "clearAllProps",
            value: function(e) {
                var t = this;
                this.sessionState = {},
                this.sessionSave(),
                e && R.isArray(e) ? e.forEach((function(e) {
                    e in t.state.props && delete t.state.props[e]
                }
                )) : this.state.props = {},
                this.oTrack.setCustomHead(this.state)
            }
        }, {
            key: "getDistinctId",
            value: function() {
                return this.oTrack.getUserId() || this.oTrack.getDeviceId()
            }
        }, {
            key: "getFirstId",
            value: function() {
                return this.oTrack.getDeviceId()
            }
        }, {
            key: "getOriginDistinctId",
            value: function() {
                return this.oTrack.getUserId() || this.getIdentities().$identity_cookie_id
            }
        }, {
            key: "getOriginUnionId",
            value: function() {
                var e = {}
                  , t = this.getOriginDistinctId()
                  , n = this.oTrack.getDeviceId();
                return t ? (e.login_id = t,
                e.anonymous_id = n) : e.anonymous_id = n,
                e
            }
        }, {
            key: "getUnionId",
            value: function() {
                return this.getOriginUnionId()
            }
        }]),
        e
    }();
    new Promise((function(e) {
        if (!(null == Array ? void 0 : Array.prototype.includes) || !(null == Object ? void 0 : Object.keys)) {
            var t = document.createElement("script");
            t.onload = function() {
                e(!0)
            }
            ,
            document.head.appendChild(t),
            t.setAttribute("async", "async"),
            t.setAttribute("src", ht("polyfill.umd.min.js", "common-files"))
        }
    }
    )),
    nr.setPkgInfo({
        name: "@oplus/obus-track-sdk",
        version: Ir
    });
    var Dr = ["track", "startEvent", "stopEvent", "flush", "setCustomProperties"]
      , Pr = ["setCustomHead", "getCustomHead", "getDeviceId", "setDeviceId", "setAppVersion", "getAppVersion", "setUserId", "getUserId", "setCustomClientId", "getCustomClientId", "isFirstDayFromCookies", "setIsWebview", "getIsWebview"];
    function $r(e) {
        var t = this;
        if (e) {
            for (var n = e.split("."), r = n[n.length - 1], i = 0; n.length - 1 > i && null != (t = t[n[i]]); i++)
                ;
            if (null != t) {
                if (t && "function" == typeof t[r]) {
                    for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), s = 1; o > s; s++)
                        a[s - 1] = arguments[s];
                    return t[r].apply(t, a)
                }
                return t[r]
            }
        } else
            ie.error("".concat(e, " 不能为空"))
    }
    var jr = function() {
        function e(t) {
            var n = this;
            r(this, e),
            this.trackEvent = void 0,
            this.sensorsStore = void 0,
            this.configService = void 0,
            this.room = void 0,
            this.dispatch = function(e) {
                n.configService.config.sdk_auto_track && n.trackEvent.track(e)
            }
            ,
            this.configService = new nr(t,this);
            var i = this.room = new Cr(this)
              , o = this.trackEvent = new _r({
                oTrack: this
            });
            Pr.forEach((function(e) {
                n[e] = function() {
                    return $r.apply(i.userInfo, [e].concat(Array.prototype.slice.call(arguments)))
                }
            }
            )),
            Dr.forEach((function(e) {
                n[e] = function() {
                    return $r.apply(o, [e].concat(Array.prototype.slice.call(arguments)))
                }
            }
            ));
            var a = this.sensorsStore = new xr({
                oTrack: this
            })
              , s = new Or({
                oTrack: this,
                store: a
            });
            Object.getOwnPropertyNames(Or.prototype).filter((function(e) {
                return "constructor" !== e
            }
            )).forEach((function(e) {
                n[e] = function() {
                    return $r.apply(s, [e].concat(Array.prototype.slice.call(arguments)))
                }
            }
            )),
            this.getHeader = function() {
                return $r.apply(o, ["batchSend.reportHeader.getHeader"].concat(Array.prototype.slice.call(arguments)))
            }
            ,
            this.updateCloudConfig = function(e) {
                return $r.call(o, "cloudAppConfig.refresh", !0, (function() {
                    (null == e || e) && window.location.reload()
                }
                ))
            }
            ;
            var c = new br(this.dispatch,this);
            this.setAutoTrackParam = c.setAutoTrackParam.bind(c),
            this.getAutoTrackParam = c.getAutoTrackParam.bind(c),
            this.trackPageView = c.trackPageView.bind(c),
            this.beforeunloadTrackPageDuration = c.beforeunloadTrack.bind(c),
            this.sensorsStore.init(),
            "function" == typeof t.on_created && t.on_created.call(this, {
                oTrack: this,
                options: t
            })
        }
        return o(e, [{
            key: "options",
            get: function() {
                return this.configService.config
            }
        }, {
            key: "store",
            get: function() {
                return this.sensorsStore
            }
        }, {
            key: "tracker",
            get: function() {
                return this.trackEvent
            }
        }], [{
            key: "VERSION",
            get: function() {
                return Ir
            }
        }]),
        e
    }();
    jr.CLOUD_VERSION = Xn.VERSION;
    var Lr = "data-exposure-id"
      , Nr = function() {
        function e(n, i) {
            r(this, e),
            this.observeNodeList = [],
            this.options = void 0,
            this.observer = null,
            this.durationTimer = {},
            this.options = Object.assign(t(t({}, i.configService.config.exposure), {}, {
                dispatch: n
            })),
            1 >= this.options.intersection_threshold && this.options.intersection_threshold > 0 || (this.options.intersection_threshold = 1),
            (this.options.duration_threshold > 3e3 || 0 > this.options.duration_threshold) && (this.options.duration_threshold = 0),
            this.init()
        }
        return o(e, [{
            key: "init",
            value: function() {
                var e = this;
                this.observer = new IntersectionObserver((function(t, n) {
                    t.forEach((function(t) {
                        var n = t.target
                          , r = n.getAttribute(Lr)
                          , i = e.observeNodeList.find((function(e) {
                            return e.el === n
                        }
                        ));
                        if (r && i)
                            if (t.isIntersecting && t.intersectionRatio >= e.options.intersection_threshold) {
                                if (e.durationTimer[r] && 0 !== e.durationTimer[r])
                                    return;
                                e.durationTimer[r] = window.setTimeout((function() {
                                    var t = Xe(!0, {
                                        properties: $n(n)
                                    }, i.data);
                                    e.options.dispatch(t),
                                    e.options.once ? e.unobserve(n) : e.clean(n)
                                }
                                ), e.options.duration_threshold)
                            } else
                                e.durationTimer[r] && e.clean(n)
                    }
                    ))
                }
                ),{
                    root: null,
                    rootMargin: this.options.root_margin,
                    threshold: this.options.intersection_threshold
                })
            }
        }, {
            key: "observe",
            value: function(e, t) {
                e.getAttribute(Lr) || e.setAttribute(Lr, ce(8)),
                this.observeNodeList.find((function(t) {
                    return t.el === e
                }
                )) || (this.observeNodeList.push({
                    el: e,
                    data: t
                }),
                this.observer && this.observer.observe(e))
            }
        }, {
            key: "unobserve",
            value: function(e) {
                var t;
                this.clean(e),
                this.observeNodeList = this.observeNodeList.filter((function(t) {
                    return t.el !== e
                }
                )),
                null === (t = this.observer) || void 0 === t || t.unobserve(e)
            }
        }, {
            key: "clean",
            value: function(e) {
                var t = e.getAttribute(Lr);
                t && (window.clearTimeout(this.durationTimer[t]),
                delete this.durationTimer[t])
            }
        }]),
        e
    }();
    !function() {
        if ("object" !== ("undefined" == typeof __wxConfig ? "undefined" : n(__wxConfig)))
            return new Promise((function(e) {
                var t;
                if (!("IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in (null === (t = window) || void 0 === t ? void 0 : t.IntersectionObserverEntry.prototype))) {
                    var n, r = null === (n = document) || void 0 === n ? void 0 : n.createElement("script");
                    r.onload = function() {
                        e(!0)
                    }
                    ,
                    document.head.appendChild(r),
                    r.setAttribute("async", "async"),
                    r.setAttribute("src", ht("IntersectionObserver.min.js", "common-files"))
                }
            }
            ));
        console.log("wx", __wxConfig, "__wxConfig 在index.ts")
    }();
    var Rr = function(e) {
        s(i, e);
        var n = d(i);
        function i(e) {
            var o;
            r(this, i),
            (o = n.call(this, e)).performanceReport = void 0;
            var a = window
              , s = o.dispatch;
            a.$WebVitals = Tn;
            var c = new Nr(s,f(o));
            o.exposure = {
                observe: c.observe.bind(c),
                unobserve: c.unobserve.bind(c)
            };
            var u = Nn({
                logger: ie.clone({
                    namespace: "heatmap"
                }),
                heatmap: o.configService.config.heatmap,
                dispatch: s
            });
            return o.beforeunloadTrackWebStay = u.beforeunloadTrack,
            o.heatmap = {
                trackHeatMap: Pn.trackHeatMap.bind(Pn),
                trackAllHeatMap: Pn.trackAllHeatMap.bind(Pn),
                trackLink: Pn.trackLink.bind(Pn)
            },
            o.performanceReport = new Sn(s,f(o)),
            _t((function(e) {
                s(t(t({}, D), {}, {
                    properties: t(t({}, e), {}, {
                        msg: "string" == typeof e.msg ? e.msg.slice(0, o.configService.config.develop.errorSplit) : e.msg
                    })
                }))
            }
            ), (function() {
                return {
                    catch_js_error: o.configService.config.develop.catch_js_error,
                    errorRatio: o.configService.config.develop.errorRatio
                }
            }
            )),
            o.getEleDetail = $n,
            o
        }
        return o(i)
    }(jr);
    return Rr
}
));


// 明文模板
const template = {
    "head": {
        "$platform": "web",
        "$lib_version": "2.0.13",
        "$lib_type": "script",
        "$timezone_offset": -480,
        "$screen_height": 1067,
        "$screen_width": 1707,
        "$orientation": "landscape",
        "$doc_width": 1693,
        "$doc_height": 150,
        "$connection_type": "4g",
        "$browser_type": "Chrome",
        "$browser_version": 129,
        "$os": "Win10,desktop",
        "$session_id": "iKyNIcuP",
        "$browser_language": "zh-CN",
        "$browser_charset": "UTF-8",
        "$region": "cn",
        "$region_code": "",
        "$device_id": "934ca5ac-2d3c-477e-8050-3b058e7f3a9c",
        "$is_login": true,
        "$user_id": "1190142494",
        "$app_version": ""
    },
    "request_id": "T80xiNAl",
    "body": {
        "eventCompleteness": "{\"1727843220000\":{\"sequence_id\":\"ea093cc8-2257-40e7-b306-bf160124d0c5\",\"event_count\":0,\"post_count\":1},\"1727843100000\":{\"sequence_id\":\"2059f517-fd07-413b-8449-ebb338cff044\",\"event_count\":0,\"post_count\":1},\"1727843400000\":{\"sequence_id\":\"00a781f8-82c7-410d-946c-20d56559afbc\",\"event_count\":0,\"post_count\":1}}"
    },
    "custom_head": {
        "props": {},
        "identities": {
            "$identity_cookie_id": "934ca5ac-2d3c-477e-8050-3b058e7f3a9c",
            "$identity_anonymous_id": "934ca5ac-2d3c-477e-8050-3b058e7f3a9c",
            "$identity_login_id": "934ca5ac-2d3c-477e-8050-3b058e7f3a9c"
        },
        "lib": {
            "$lib": "js",
            "$lib_method": "code",
            "$lib_version": "1.24.6"
        },
        "h5app": {},
        "userId": ""
    }
}

const mode = process.argv[2];

if (mode === "decrypt") {
    console.log(JSON.stringify(template));
    process.exit(0);
}

if (process.argv[2] === "encrypt") {
    const rawRequest = fs.readFileSync('temp/temp.txt', 'utf-8');
    const jsonData = JSON.parse(rawRequest);
    const encryptedData = window.asy0y0(jsonData); // 假设这是你的加密函数

    // 进行URL编码
    const encodedData = encodeURIComponent(encryptedData);

    console.log('data=' + encodedData + '&crc=1599647153');  // 输出符合原请求体格式的结果
    process.exit(0);
}