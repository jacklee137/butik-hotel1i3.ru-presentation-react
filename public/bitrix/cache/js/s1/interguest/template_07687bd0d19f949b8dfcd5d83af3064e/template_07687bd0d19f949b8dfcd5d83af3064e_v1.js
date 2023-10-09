/* Start:"a:4:{s:4:"full";s:70:"/local/templates/interguest/assets/scripts/lazySizes.js?16738785717889";s:6:"source";s:55:"/local/templates/interguest/assets/scripts/lazySizes.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/*! lazysizes - v5.3.2 */

!(function (e) {
    var t = (function (u, D, f) {
        "use strict";
        var k, H;
        if (
            ((function () {
                var e;
                var t = {
                    lazyClass: "lazyload",
                    loadedClass: "lazyloaded",
                    loadingClass: "lazyloading",
                    preloadClass: "lazypreload",
                    errorClass: "lazyerror",
                    autosizesClass: "lazyautosizes",
                    fastLoadedClass: "ls-is-cached",
                    iframeLoadMode: 0,
                    srcAttr: "data-src",
                    srcsetAttr: "data-srcset",
                    sizesAttr: "data-sizes",
                    minSize: 40,
                    customMedia: {},
                    init: true,
                    expFactor: 1.5,
                    hFac: 0.8,
                    loadMode: 2,
                    loadHidden: true,
                    ricTimeout: 0,
                    throttleDelay: 125,
                };
                H = u.lazySizesConfig || u.lazysizesConfig || {};
                for (e in t) {
                    if (!(e in H)) {
                        H[e] = t[e];
                    }
                }
            })(),
            !D || !D.getElementsByClassName)
        ) {
            return { init: function () {}, cfg: H, noSupport: true };
        }
        var O = D.documentElement,
            i = u.HTMLPictureElement,
            P = "addEventListener",
            $ = "getAttribute",
            q = u[P].bind(u),
            I = u.setTimeout,
            U = u.requestAnimationFrame || I,
            o = u.requestIdleCallback,
            j = /^picture$/i,
            r = ["load", "error", "lazyincluded", "_lazyloaded"],
            a = {},
            G = Array.prototype.forEach,
            J = function (e, t) {
                if (!a[t]) {
                    a[t] = new RegExp("(\\s|^)" + t + "(\\s|$)");
                }
                return a[t].test(e[$]("class") || "") && a[t];
            },
            K = function (e, t) {
                if (!J(e, t)) {
                    e.setAttribute(
                        "class",
                        (e[$]("class") || "").trim() + " " + t
                    );
                }
            },
            Q = function (e, t) {
                var a;
                if ((a = J(e, t))) {
                    e.setAttribute(
                        "class",
                        (e[$]("class") || "").replace(a, " ")
                    );
                }
            },
            V = function (t, a, e) {
                var i = e ? P : "removeEventListener";
                if (e) {
                    V(t, a);
                }
                r.forEach(function (e) {
                    t[i](e, a);
                });
            },
            X = function (e, t, a, i, r) {
                var n = D.createEvent("Event");
                if (!a) {
                    a = {};
                }
                a.instance = k;
                n.initEvent(t, !i, !r);
                n.detail = a;
                e.dispatchEvent(n);
                return n;
            },
            Y = function (e, t) {
                var a;
                if (!i && (a = u.picturefill || H.pf)) {
                    if (t && t.src && !e[$]("srcset")) {
                        e.setAttribute("srcset", t.src);
                    }
                    a({ reevaluate: true, elements: [e] });
                } else if (t && t.src) {
                    e.src = t.src;
                }
            },
            Z = function (e, t) {
                return (getComputedStyle(e, null) || {})[t];
            },
            s = function (e, t, a) {
                a = a || e.offsetWidth;
                while (a < H.minSize && t && !e._lazysizesWidth) {
                    a = t.offsetWidth;
                    t = t.parentNode;
                }
                return a;
            },
            ee = (function () {
                var a, i;
                var t = [];
                var r = [];
                var n = t;
                var s = function () {
                    var e = n;
                    n = t.length ? r : t;
                    a = true;
                    i = false;
                    while (e.length) {
                        e.shift()();
                    }
                    a = false;
                };
                var e = function (e, t) {
                    if (a && !t) {
                        e.apply(this, arguments);
                    } else {
                        n.push(e);
                        if (!i) {
                            i = true;
                            (D.hidden ? I : U)(s);
                        }
                    }
                };
                e._lsFlush = s;
                return e;
            })(),
            te = function (a, e) {
                return e
                    ? function () {
                          ee(a);
                      }
                    : function () {
                          var e = this;
                          var t = arguments;
                          ee(function () {
                              a.apply(e, t);
                          });
                      };
            },
            ae = function (e) {
                var a;
                var i = 0;
                var r = H.throttleDelay;
                var n = H.ricTimeout;
                var t = function () {
                    a = false;
                    i = f.now();
                    e();
                };
                var s =
                    o && n > 49
                        ? function () {
                              o(t, { timeout: n });
                              if (n !== H.ricTimeout) {
                                  n = H.ricTimeout;
                              }
                          }
                        : te(function () {
                              I(t);
                          }, true);
                return function (e) {
                    var t;
                    if ((e = e === true)) {
                        n = 33;
                    }
                    if (a) {
                        return;
                    }
                    a = true;
                    t = r - (f.now() - i);
                    if (t < 0) {
                        t = 0;
                    }
                    if (e || t < 9) {
                        s();
                    } else {
                        I(s, t);
                    }
                };
            },
            ie = function (e) {
                var t, a;
                var i = 99;
                var r = function () {
                    t = null;
                    e();
                };
                var n = function () {
                    var e = f.now() - a;
                    if (e < i) {
                        I(n, i - e);
                    } else {
                        (o || r)(r);
                    }
                };
                return function () {
                    a = f.now();
                    if (!t) {
                        t = I(n, i);
                    }
                };
            },
            e = (function () {
                var v, m, c, h, e;
                var y, z, g, p, C, b, A;
                var n = /^img$/i;
                var d = /^iframe$/i;
                var E =
                    "onscroll" in u &&
                    !/(gle|ing)bot/.test(navigator.userAgent);
                var _ = 0;
                var w = 0;
                var M = 0;
                var N = -1;
                var L = function (e) {
                    M--;
                    if (!e || M < 0 || !e.target) {
                        M = 0;
                    }
                };
                var x = function (e) {
                    if (A == null) {
                        A = Z(D.body, "visibility") == "hidden";
                    }
                    return (
                        A ||
                        !(
                            Z(e.parentNode, "visibility") == "hidden" &&
                            Z(e, "visibility") == "hidden"
                        )
                    );
                };
                var W = function (e, t) {
                    var a;
                    var i = e;
                    var r = x(e);
                    g -= t;
                    b += t;
                    p -= t;
                    C += t;
                    while (r && (i = i.offsetParent) && i != D.body && i != O) {
                        r = (Z(i, "opacity") || 1) > 0;
                        if (r && Z(i, "overflow") != "visible") {
                            a = i.getBoundingClientRect();
                            r =
                                C > a.left &&
                                p < a.right &&
                                b > a.top - 1 &&
                                g < a.bottom + 1;
                        }
                    }
                    return r;
                };
                var t = function () {
                    var e, t, a, i, r, n, s, o, l, u, f, c;
                    var d = k.elements;
                    if ((h = H.loadMode) && M < 8 && (e = d.length)) {
                        t = 0;
                        N++;
                        for (; t < e; t++) {
                            if (!d[t] || d[t]._lazyRace) {
                                continue;
                            }
                            if (
                                !E ||
                                (k.prematureUnveil && k.prematureUnveil(d[t]))
                            ) {
                                R(d[t]);
                                continue;
                            }
                            if (!(o = d[t][$]("data-expand")) || !(n = o * 1)) {
                                n = w;
                            }
                            if (!u) {
                                u =
                                    !H.expand || H.expand < 1
                                        ? O.clientHeight > 500 &&
                                          O.clientWidth > 500
                                            ? 500
                                            : 370
                                        : H.expand;
                                k._defEx = u;
                                f = u * H.expFactor;
                                c = H.hFac;
                                A = null;
                                if (
                                    w < f &&
                                    M < 1 &&
                                    N > 2 &&
                                    h > 2 &&
                                    !D.hidden
                                ) {
                                    w = f;
                                    N = 0;
                                } else if (h > 1 && N > 1 && M < 6) {
                                    w = u;
                                } else {
                                    w = _;
                                }
                            }
                            if (l !== n) {
                                y = innerWidth + n * c;
                                z = innerHeight + n;
                                s = n * -1;
                                l = n;
                            }
                            a = d[t].getBoundingClientRect();
                            if (
                                (b = a.bottom) >= s &&
                                (g = a.top) <= z &&
                                (C = a.right) >= s * c &&
                                (p = a.left) <= y &&
                                (b || C || p || g) &&
                                (H.loadHidden || x(d[t])) &&
                                ((m && M < 3 && !o && (h < 3 || N < 4)) ||
                                    W(d[t], n))
                            ) {
                                R(d[t]);
                                r = true;
                                if (M > 9) {
                                    break;
                                }
                            } else if (
                                !r &&
                                m &&
                                !i &&
                                M < 4 &&
                                N < 4 &&
                                h > 2 &&
                                (v[0] || H.preloadAfterLoad) &&
                                (v[0] ||
                                    (!o &&
                                        (b ||
                                            C ||
                                            p ||
                                            g ||
                                            d[t][$](H.sizesAttr) != "auto")))
                            ) {
                                i = v[0] || d[t];
                            }
                        }
                        if (i && !r) {
                            R(i);
                        }
                    }
                };
                var a = ae(t);
                var S = function (e) {
                    var t = e.target;
                    if (t._lazyCache) {
                        delete t._lazyCache;
                        return;
                    }
                    L(e);
                    K(t, H.loadedClass);
                    Q(t, H.loadingClass);
                    V(t, B);
                    X(t, "lazyloaded");
                };
                var i = te(S);
                var B = function (e) {
                    i({ target: e.target });
                };
                var T = function (e, t) {
                    var a =
                        e.getAttribute("data-load-mode") || H.iframeLoadMode;
                    if (a == 0) {
                        e.contentWindow.location.replace(t);
                    } else if (a == 1) {
                        e.src = t;
                    }
                };
                var F = function (e) {
                    var t;
                    var a = e[$](H.srcsetAttr);
                    if (
                        (t = H.customMedia[e[$]("data-media") || e[$]("media")])
                    ) {
                        e.setAttribute("media", t);
                    }
                    if (a) {
                        e.setAttribute("srcset", a);
                    }
                };
                var s = te(function (t, e, a, i, r) {
                    var n, s, o, l, u, f;
                    if (!(u = X(t, "lazybeforeunveil", e)).defaultPrevented) {
                        if (i) {
                            if (a) {
                                K(t, H.autosizesClass);
                            } else {
                                t.setAttribute("sizes", i);
                            }
                        }
                        s = t[$](H.srcsetAttr);
                        n = t[$](H.srcAttr);
                        if (r) {
                            o = t.parentNode;
                            l = o && j.test(o.nodeName || "");
                        }
                        f = e.firesLoad || ("src" in t && (s || n || l));
                        u = { target: t };
                        K(t, H.loadingClass);
                        if (f) {
                            clearTimeout(c);
                            c = I(L, 2500);
                            V(t, B, true);
                        }
                        if (l) {
                            G.call(o.getElementsByTagName("source"), F);
                        }
                        if (s) {
                            t.setAttribute("srcset", s);
                        } else if (n && !l) {
                            if (d.test(t.nodeName)) {
                                T(t, n);
                            } else {
                                t.src = n;
                            }
                        }
                        if (r && (s || l)) {
                            Y(t, { src: n });
                        }
                    }
                    if (t._lazyRace) {
                        delete t._lazyRace;
                    }
                    Q(t, H.lazyClass);
                    ee(function () {
                        var e = t.complete && t.naturalWidth > 1;
                        if (!f || e) {
                            if (e) {
                                K(t, H.fastLoadedClass);
                            }
                            S(u);
                            t._lazyCache = true;
                            I(function () {
                                if ("_lazyCache" in t) {
                                    delete t._lazyCache;
                                }
                            }, 9);
                        }
                        if (t.loading == "lazy") {
                            M--;
                        }
                    }, true);
                });
                var R = function (e) {
                    if (e._lazyRace) {
                        return;
                    }
                    var t;
                    var a = n.test(e.nodeName);
                    var i = a && (e[$](H.sizesAttr) || e[$]("sizes"));
                    var r = i == "auto";
                    if (
                        (r || !m) &&
                        a &&
                        (e[$]("src") || e.srcset) &&
                        !e.complete &&
                        !J(e, H.errorClass) &&
                        J(e, H.lazyClass)
                    ) {
                        return;
                    }
                    t = X(e, "lazyunveilread").detail;
                    if (r) {
                        re.updateElem(e, true, e.offsetWidth);
                    }
                    e._lazyRace = true;
                    M++;
                    s(e, t, r, i, a);
                };
                var r = ie(function () {
                    H.loadMode = 3;
                    a();
                });
                var o = function () {
                    if (H.loadMode == 3) {
                        H.loadMode = 2;
                    }
                    r();
                };
                var l = function () {
                    if (m) {
                        return;
                    }
                    if (f.now() - e < 999) {
                        I(l, 999);
                        return;
                    }
                    m = true;
                    H.loadMode = 3;
                    a();
                    q("scroll", o, true);
                };
                return {
                    _: function () {
                        e = f.now();
                        k.elements = D.getElementsByClassName(H.lazyClass);
                        v = D.getElementsByClassName(
                            H.lazyClass + " " + H.preloadClass
                        );
                        q("scroll", a, true);
                        q("resize", a, true);
                        q("pageshow", function (e) {
                            if (e.persisted) {
                                var t = D.querySelectorAll(
                                    "." + H.loadingClass
                                );
                                if (t.length && t.forEach) {
                                    U(function () {
                                        t.forEach(function (e) {
                                            if (e.complete) {
                                                R(e);
                                            }
                                        });
                                    });
                                }
                            }
                        });
                        if (u.MutationObserver) {
                            new MutationObserver(a).observe(O, {
                                childList: true,
                                subtree: true,
                                attributes: true,
                            });
                        } else {
                            O[P]("DOMNodeInserted", a, true);
                            O[P]("DOMAttrModified", a, true);
                            setInterval(a, 999);
                        }
                        q("hashchange", a, true);
                        [
                            "focus",
                            "mouseover",
                            "click",
                            "load",
                            "transitionend",
                            "animationend",
                        ].forEach(function (e) {
                            D[P](e, a, true);
                        });
                        if (/d$|^c/.test(D.readyState)) {
                            l();
                        } else {
                            q("load", l);
                            D[P]("DOMContentLoaded", a);
                            I(l, 2e4);
                        }
                        if (k.elements.length) {
                            t();
                            ee._lsFlush();
                        } else {
                            a();
                        }
                    },
                    checkElems: a,
                    unveil: R,
                    _aLSL: o,
                };
            })(),
            re = (function () {
                var a;
                var n = te(function (e, t, a, i) {
                    var r, n, s;
                    e._lazysizesWidth = i;
                    i += "px";
                    e.setAttribute("sizes", i);
                    if (j.test(t.nodeName || "")) {
                        r = t.getElementsByTagName("source");
                        for (n = 0, s = r.length; n < s; n++) {
                            r[n].setAttribute("sizes", i);
                        }
                    }
                    if (!a.detail.dataAttr) {
                        Y(e, a.detail);
                    }
                });
                var i = function (e, t, a) {
                    var i;
                    var r = e.parentNode;
                    if (r) {
                        a = s(e, r, a);
                        i = X(e, "lazybeforesizes", {
                            width: a,
                            dataAttr: !!t,
                        });
                        if (!i.defaultPrevented) {
                            a = i.detail.width;
                            if (a && a !== e._lazysizesWidth) {
                                n(e, r, i, a);
                            }
                        }
                    }
                };
                var e = function () {
                    var e;
                    var t = a.length;
                    if (t) {
                        e = 0;
                        for (; e < t; e++) {
                            i(a[e]);
                        }
                    }
                };
                var t = ie(e);
                return {
                    _: function () {
                        a = D.getElementsByClassName(H.autosizesClass);
                        q("resize", t);
                    },
                    checkElems: t,
                    updateElem: i,
                };
            })(),
            t = function () {
                if (!t.i && D.getElementsByClassName) {
                    t.i = true;
                    re._();
                    e._();
                }
            };
        return (
            I(function () {
                H.init && t();
            }),
            (k = {
                cfg: H,
                autoSizer: re,
                loader: e,
                init: t,
                uP: Y,
                aC: K,
                rC: Q,
                hC: J,
                fire: X,
                gW: s,
                rAF: ee,
            })
        );
    })(e, e.document, Date);
    (e.lazySizes = t),
        "object" == typeof module && module.exports && (module.exports = t);
})(
    "undefined" != typeof window ? window : {}
); /* Start:"a:4:{s:4:"full";s:73:"/local/templates/interguest/assets/scripts/script.min.js?1669980267204584";s:6:"source";s:56:"/local/templates/interguest/assets/scripts/script.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
("use strict");
var _this = void 0;
function _createForOfIteratorHelper(e, t) {
    var i,
        a,
        n,
        s,
        r =
            ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
            e["@@iterator"];
    if (r)
        return (
            (a = !(i = !0)),
            {
                s: function () {
                    r = r.call(e);
                },
                n: function () {
                    var e = r.next();
                    return (i = e.done), e;
                },
                e: function (e) {
                    (a = !0), (n = e);
                },
                f: function () {
                    try {
                        i || null == r.return || r.return();
                    } finally {
                        if (a) throw n;
                    }
                },
            }
        );
    if (
        Array.isArray(e) ||
        (r = _unsupportedIterableToArray(e)) ||
        (t && e && "number" == typeof e.length)
    )
        return (
            r && (e = r),
            (s = 0),
            {
                s: (t = function () {}),
                n: function () {
                    return s >= e.length
                        ? { done: !0 }
                        : { done: !1, value: e[s++] };
                },
                e: function (e) {
                    throw e;
                },
                f: t,
            }
        );
    throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _slicedToArray(e, t) {
    return (
        _arrayWithHoles(e) ||
        _iterableToArrayLimit(e, t) ||
        _unsupportedIterableToArray(e, t) ||
        _nonIterableRest()
    );
}
function _nonIterableRest() {
    throw new TypeError(
        "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _iterableToArrayLimit(e, t) {
    var i =
        null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
    if (null != i) {
        var a,
            n,
            s = [],
            r = !0,
            o = !1;
        try {
            for (
                i = i.call(e);
                !(r = (a = i.next()).done) &&
                (s.push(a.value), !t || s.length !== t);
                r = !0
            );
        } catch (e) {
            (o = !0), (n = e);
        } finally {
            try {
                r || null == i.return || i.return();
            } finally {
                if (o) throw n;
            }
        }
        return s;
    }
}
function _arrayWithHoles(e) {
    if (Array.isArray(e)) return e;
}
function _defineProperty(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = i),
        e
    );
}
function _toConsumableArray(e) {
    return (
        _arrayWithoutHoles(e) ||
        _iterableToArray(e) ||
        _unsupportedIterableToArray(e) ||
        _nonIterableSpread()
    );
}
function _nonIterableSpread() {
    throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
}
function _unsupportedIterableToArray(e, t) {
    var i;
    if (e)
        return "string" == typeof e
            ? _arrayLikeToArray(e, t)
            : "Map" ===
                  (i =
                      "Object" ===
                          (i = Object.prototype.toString
                              .call(e)
                              .slice(8, -1)) && e.constructor
                          ? e.constructor.name
                          : i) || "Set" === i
            ? Array.from(e)
            : "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
            ? _arrayLikeToArray(e, t)
            : void 0;
}
function _iterableToArray(e) {
    if (
        ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
        null != e["@@iterator"]
    )
        return Array.from(e);
}
function _arrayWithoutHoles(e) {
    if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _arrayLikeToArray(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var i = 0, a = new Array(t); i < t; i++) a[i] = e[i];
    return a;
}
function _defineProperties(e, t) {
    for (var i = 0; i < t.length; i++) {
        var a = t[i];
        (a.enumerable = a.enumerable || !1),
            (a.configurable = !0),
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a);
    }
}
function _createClass(e, t, i) {
    return (
        t && _defineProperties(e.prototype, t),
        i && _defineProperties(e, i),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        e
    );
}
function _classCallCheck(e, t) {
    if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
}
function _inherits(e, t) {
    if ("function" != typeof t && null !== t)
        throw new TypeError(
            "Super expression must either be null or a function"
        );
    (e.prototype = Object.create(t && t.prototype, {
        constructor: { value: e, writable: !0, configurable: !0 },
    })),
        Object.defineProperty(e, "prototype", { writable: !1 }),
        t && _setPrototypeOf(e, t);
}
function _createSuper(i) {
    var a = _isNativeReflectConstruct();
    return function () {
        var e,
            t = _getPrototypeOf(i);
        return _possibleConstructorReturn(
            this,
            a
                ? ((e = _getPrototypeOf(this).constructor),
                  Reflect.construct(t, arguments, e))
                : t.apply(this, arguments)
        );
    };
}
function _possibleConstructorReturn(e, t) {
    if (t && ("object" === _typeof(t) || "function" == typeof t)) return t;
    if (void 0 !== t)
        throw new TypeError(
            "Derived constructors may only return object or undefined"
        );
    return _assertThisInitialized(e);
}
function _assertThisInitialized(e) {
    if (void 0 === e)
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    return e;
}
function _wrapNativeSuper(e) {
    var i = "function" == typeof Map ? new Map() : void 0;
    return (_wrapNativeSuper = function (e) {
        if (null === e || !_isNativeFunction(e)) return e;
        if ("function" != typeof e)
            throw new TypeError(
                "Super expression must either be null or a function"
            );
        if (void 0 !== i) {
            if (i.has(e)) return i.get(e);
            i.set(e, t);
        }
        function t() {
            return _construct(e, arguments, _getPrototypeOf(this).constructor);
        }
        return (
            (t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                },
            })),
            _setPrototypeOf(t, e)
        );
    })(e);
}
function _construct(e, t, i) {
    return (_construct = _isNativeReflectConstruct()
        ? Reflect.construct.bind()
        : function (e, t, i) {
              var a = [null];
              a.push.apply(a, t);
              t = new (Function.bind.apply(e, a))();
              return i && _setPrototypeOf(t, i.prototype), t;
          }).apply(null, arguments);
}
function _isNativeReflectConstruct() {
    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
    if (Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
        return (
            Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
            ),
            !0
        );
    } catch (e) {
        return !1;
    }
}
function _isNativeFunction(e) {
    return -1 !== Function.toString.call(e).indexOf("[native code]");
}
function _setPrototypeOf(e, t) {
    return (_setPrototypeOf = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
              return (e.__proto__ = t), e;
          })(e, t);
}
function _getPrototypeOf(e) {
    return (_getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf.bind()
        : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
          })(e);
}
function _typeof(e) {
    return (_typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e &&
                      "function" == typeof Symbol &&
                      e.constructor === Symbol &&
                      e !== Symbol.prototype
                      ? "symbol"
                      : typeof e;
              })(e);
}
document.addEventListener("DOMContentLoaded", function () {
    var e, t;
    (window.app = {}),
        (e = _this),
        (t = function () {
            function a(e) {
                return (
                    null !== e &&
                    "object" == _typeof(e) &&
                    "constructor" in e &&
                    e.constructor === Object
                );
            }
            function n(t, i) {
                void 0 === t && (t = {}),
                    void 0 === i && (i = {}),
                    Object.keys(i).forEach(function (e) {
                        void 0 === t[e]
                            ? (t[e] = i[e])
                            : a(i[e]) &&
                              a(t[e]) &&
                              0 < Object.keys(i[e]).length &&
                              n(t[e], i[e]);
                    });
            }
            var t = {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                    return null;
                },
                querySelectorAll: function () {
                    return [];
                },
                getElementById: function () {
                    return null;
                },
                createEvent: function () {
                    return { initEvent: function () {} };
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return [];
                        },
                    };
                },
                createElementNS: function () {
                    return {};
                },
                importNode: function () {
                    return null;
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: "",
                },
            };
            function E() {
                var e = "undefined" != typeof document ? document : {};
                return n(e, t), e;
            }
            var w = {
                document: t,
                navigator: { userAgent: "" },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: "",
                },
                history: {
                    replaceState: function () {},
                    pushState: function () {},
                    go: function () {},
                    back: function () {},
                },
                CustomEvent: function () {
                    return this;
                },
                addEventListener: function () {},
                removeEventListener: function () {},
                getComputedStyle: function () {
                    return {
                        getPropertyValue: function () {
                            return "";
                        },
                    };
                },
                Image: function () {},
                Date: function () {},
                screen: {},
                setTimeout: function () {},
                clearTimeout: function () {},
                matchMedia: function () {
                    return {};
                },
                requestAnimationFrame: function (e) {
                    return "undefined" == typeof setTimeout
                        ? (e(), null)
                        : setTimeout(e, 0);
                },
                cancelAnimationFrame: function (e) {
                    "undefined" != typeof setTimeout && clearTimeout(e);
                },
            };
            function L() {
                var e = "undefined" != typeof window ? window : {};
                return n(e, w), e;
            }
            var d = (function () {
                _inherits(n, _wrapNativeSuper(Array));
                var a = _createSuper(n);
                function n(e) {
                    var t, i;
                    return (
                        _classCallCheck(this, n),
                        "number" == typeof e
                            ? (t = a.call(this, e))
                            : ((t = a.call.apply(
                                  a,
                                  [this].concat(_toConsumableArray(e || []))
                              )),
                              (e = _assertThisInitialized(t)),
                              (i = e.__proto__),
                              Object.defineProperty(e, "__proto__", {
                                  get: function () {
                                      return i;
                                  },
                                  set: function (e) {
                                      i.__proto__ = e;
                                  },
                              })),
                        _possibleConstructorReturn(t)
                    );
                }
                return _createClass(n);
            })();
            function s(e) {
                var t = [];
                return (
                    (e = void 0 === e ? [] : e).forEach(function (e) {
                        Array.isArray(e)
                            ? t.push.apply(t, _toConsumableArray(s(e)))
                            : t.push(e);
                    }),
                    t
                );
            }
            function r(e, t) {
                return Array.prototype.filter.call(e, t);
            }
            function z(e, n) {
                var t = L(),
                    s = E(),
                    i = [];
                if (!n && e instanceof d) return e;
                if (!e) return new d(i);
                if ("string" == typeof e) {
                    var a = e.trim();
                    if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                        var r = "div",
                            o =
                                (0 === a.indexOf("<li") && (r = "ul"),
                                0 === a.indexOf("<tr") && (r = "tbody"),
                                (0 !== a.indexOf("<td") &&
                                    0 !== a.indexOf("<th")) ||
                                    (r = "tr"),
                                0 === a.indexOf("<tbody") && (r = "table"),
                                0 === a.indexOf("<option") && (r = "select"),
                                s.createElement(r));
                        o.innerHTML = a;
                        for (var l = 0; l < o.childNodes.length; l += 1)
                            i.push(o.childNodes[l]);
                    } else
                        i = (function (e) {
                            if ("string" != typeof e) return [e];
                            for (
                                var t = [],
                                    i = (n || s).querySelectorAll(e),
                                    a = 0;
                                a < i.length;
                                a += 1
                            )
                                t.push(i[a]);
                            return t;
                        })(e.trim());
                } else if (e.nodeType || e === t || e === s) i.push(e);
                else if (Array.isArray(e)) {
                    if (e instanceof d) return e;
                    i = e;
                }
                return new d(
                    (function (e) {
                        for (var t = [], i = 0; i < e.length; i += 1)
                            -1 === t.indexOf(e[i]) && t.push(e[i]);
                        return t;
                    })(i)
                );
            }
            z.fn = d.prototype;
            var o,
                b,
                x,
                i = {
                    addClass: function () {
                        for (
                            var e = arguments.length, t = new Array(e), i = 0;
                            i < e;
                            i++
                        )
                            t[i] = arguments[i];
                        var a = s(
                            t.map(function (e) {
                                return e.split(" ");
                            })
                        );
                        return (
                            this.forEach(function (e) {
                                (e = e.classList).add.apply(
                                    e,
                                    _toConsumableArray(a)
                                );
                            }),
                            this
                        );
                    },
                    removeClass: function () {
                        for (
                            var e = arguments.length, t = new Array(e), i = 0;
                            i < e;
                            i++
                        )
                            t[i] = arguments[i];
                        var a = s(
                            t.map(function (e) {
                                return e.split(" ");
                            })
                        );
                        return (
                            this.forEach(function (e) {
                                (e = e.classList).remove.apply(
                                    e,
                                    _toConsumableArray(a)
                                );
                            }),
                            this
                        );
                    },
                    hasClass: function () {
                        for (
                            var e = arguments.length, t = new Array(e), i = 0;
                            i < e;
                            i++
                        )
                            t[i] = arguments[i];
                        var a = s(
                            t.map(function (e) {
                                return e.split(" ");
                            })
                        );
                        return (
                            0 <
                            r(this, function (t) {
                                return (
                                    0 <
                                    a.filter(function (e) {
                                        return t.classList.contains(e);
                                    }).length
                                );
                            }).length
                        );
                    },
                    toggleClass: function () {
                        for (
                            var e = arguments.length, t = new Array(e), i = 0;
                            i < e;
                            i++
                        )
                            t[i] = arguments[i];
                        var a = s(
                            t.map(function (e) {
                                return e.split(" ");
                            })
                        );
                        this.forEach(function (t) {
                            a.forEach(function (e) {
                                t.classList.toggle(e);
                            });
                        });
                    },
                    attr: function (e, t) {
                        if (1 === arguments.length && "string" == typeof e)
                            return this[0] ? this[0].getAttribute(e) : void 0;
                        for (var i = 0; i < this.length; i += 1)
                            if (2 === arguments.length)
                                this[i].setAttribute(e, t);
                            else
                                for (var a in e)
                                    (this[i][a] = e[a]),
                                        this[i].setAttribute(a, e[a]);
                        return this;
                    },
                    removeAttr: function (e) {
                        for (var t = 0; t < this.length; t += 1)
                            this[t].removeAttribute(e);
                        return this;
                    },
                    transform: function (e) {
                        for (var t = 0; t < this.length; t += 1)
                            this[t].style.transform = e;
                        return this;
                    },
                    transition: function (e) {
                        for (var t = 0; t < this.length; t += 1)
                            this[t].style.transitionDuration =
                                "string" != typeof e ? "".concat(e, "ms") : e;
                        return this;
                    },
                    on: function () {
                        for (
                            var e = arguments.length, t = new Array(e), i = 0;
                            i < e;
                            i++
                        )
                            t[i] = arguments[i];
                        var a = t[0],
                            s = t[1],
                            r = t[2],
                            n = t[3];
                        function o(e) {
                            var t = e.target;
                            if (t) {
                                var i = e.target.dom7EventData || [];
                                if (
                                    (i.indexOf(e) < 0 && i.unshift(e),
                                    z(t).is(s))
                                )
                                    r.apply(t, i);
                                else
                                    for (
                                        var a = z(t).parents(), n = 0;
                                        n < a.length;
                                        n += 1
                                    )
                                        z(a[n]).is(s) && r.apply(a[n], i);
                            }
                        }
                        function l(e) {
                            var t =
                                (e && e.target && e.target.dom7EventData) || [];
                            t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
                        }
                        "function" == typeof t[1] &&
                            ((a = t[0]), (r = t[1]), (n = t[2]), (s = void 0));
                        for (
                            var d, n = n || !1, c = a.split(" "), u = 0;
                            u < this.length;
                            u += 1
                        ) {
                            var p = this[u];
                            if (s)
                                for (d = 0; d < c.length; d += 1) {
                                    var h = c[d];
                                    p.dom7LiveListeners ||
                                        (p.dom7LiveListeners = {}),
                                        p.dom7LiveListeners[h] ||
                                            (p.dom7LiveListeners[h] = []),
                                        p.dom7LiveListeners[h].push({
                                            listener: r,
                                            proxyListener: o,
                                        }),
                                        p.addEventListener(h, o, n);
                                }
                            else
                                for (d = 0; d < c.length; d += 1) {
                                    var f = c[d];
                                    p.dom7Listeners || (p.dom7Listeners = {}),
                                        p.dom7Listeners[f] ||
                                            (p.dom7Listeners[f] = []),
                                        p.dom7Listeners[f].push({
                                            listener: r,
                                            proxyListener: l,
                                        }),
                                        p.addEventListener(f, l, n);
                                }
                        }
                        return this;
                    },
                    off: function () {
                        for (
                            var e = arguments.length, t = new Array(e), i = 0;
                            i < e;
                            i++
                        )
                            t[i] = arguments[i];
                        for (
                            var a = t[0],
                                n = t[1],
                                s = t[2],
                                r = t[3],
                                o =
                                    ("function" == typeof t[1] &&
                                        ((a = t[0]),
                                        (s = t[1]),
                                        (r = t[2]),
                                        (n = void 0)),
                                    (r = r || !1),
                                    a.split(" ")),
                                l = 0;
                            l < o.length;
                            l += 1
                        )
                            for (var d = o[l], c = 0; c < this.length; c += 1) {
                                var u = this[c],
                                    p = void 0;
                                if (
                                    (!n && u.dom7Listeners
                                        ? (p = u.dom7Listeners[d])
                                        : n &&
                                          u.dom7LiveListeners &&
                                          (p = u.dom7LiveListeners[d]),
                                    p && p.length)
                                )
                                    for (var h = p.length - 1; 0 <= h; --h) {
                                        var f = p[h];
                                        ((s && f.listener === s) ||
                                            (s &&
                                                f.listener &&
                                                f.listener.dom7proxy &&
                                                f.listener.dom7proxy === s) ||
                                            !s) &&
                                            (u.removeEventListener(
                                                d,
                                                f.proxyListener,
                                                r
                                            ),
                                            p.splice(h, 1));
                                    }
                            }
                        return this;
                    },
                    trigger: function () {
                        for (
                            var e = L(),
                                t = arguments.length,
                                i = new Array(t),
                                a = 0;
                            a < t;
                            a++
                        )
                            i[a] = arguments[a];
                        for (
                            var n = i[0].split(" "), s = i[1], r = 0;
                            r < n.length;
                            r += 1
                        )
                            for (var o = n[r], l = 0; l < this.length; l += 1) {
                                var d,
                                    c = this[l];
                                e.CustomEvent &&
                                    ((d = new e.CustomEvent(o, {
                                        detail: s,
                                        bubbles: !0,
                                        cancelable: !0,
                                    })),
                                    (c.dom7EventData = i.filter(function (
                                        e,
                                        t
                                    ) {
                                        return 0 < t;
                                    })),
                                    c.dispatchEvent(d),
                                    (c.dom7EventData = []),
                                    delete c.dom7EventData);
                            }
                        return this;
                    },
                    transitionEnd: function (i) {
                        var a = this;
                        return (
                            i &&
                                a.on("transitionend", function e(t) {
                                    t.target === this &&
                                        (i.call(this, t),
                                        a.off("transitionend", e));
                                }),
                            this
                        );
                    },
                    outerWidth: function (e) {
                        return 0 < this.length
                            ? e
                                ? ((e = this.styles()),
                                  this[0].offsetWidth +
                                      parseFloat(
                                          e.getPropertyValue("margin-right")
                                      ) +
                                      parseFloat(
                                          e.getPropertyValue("margin-left")
                                      ))
                                : this[0].offsetWidth
                            : null;
                    },
                    outerHeight: function (e) {
                        return 0 < this.length
                            ? e
                                ? ((e = this.styles()),
                                  this[0].offsetHeight +
                                      parseFloat(
                                          e.getPropertyValue("margin-top")
                                      ) +
                                      parseFloat(
                                          e.getPropertyValue("margin-bottom")
                                      ))
                                : this[0].offsetHeight
                            : null;
                    },
                    styles: function () {
                        var e = L();
                        return this[0] ? e.getComputedStyle(this[0], null) : {};
                    },
                    offset: function () {
                        var e, t, i, a, n, s;
                        return 0 < this.length
                            ? ((s = L()),
                              (a = E()),
                              (t = (e = this[0]).getBoundingClientRect()),
                              (a = a.body),
                              (i = e.clientTop || a.clientTop || 0),
                              (a = e.clientLeft || a.clientLeft || 0),
                              (n = e === s ? s.scrollY : e.scrollTop),
                              (s = e === s ? s.scrollX : e.scrollLeft),
                              { top: t.top + n - i, left: t.left + s - a })
                            : null;
                    },
                    css: function (e, t) {
                        var i,
                            a = L();
                        if (1 === arguments.length) {
                            if ("string" != typeof e) {
                                for (i = 0; i < this.length; i += 1)
                                    for (var n in e) this[i].style[n] = e[n];
                                return this;
                            }
                            if (this[0])
                                return a
                                    .getComputedStyle(this[0], null)
                                    .getPropertyValue(e);
                        }
                        if (2 === arguments.length && "string" == typeof e)
                            for (i = 0; i < this.length; i += 1)
                                this[i].style[e] = t;
                        return this;
                    },
                    each: function (i) {
                        return (
                            i &&
                                this.forEach(function (e, t) {
                                    i.apply(e, [e, t]);
                                }),
                            this
                        );
                    },
                    html: function (e) {
                        if (void 0 === e)
                            return this[0] ? this[0].innerHTML : null;
                        for (var t = 0; t < this.length; t += 1)
                            this[t].innerHTML = e;
                        return this;
                    },
                    text: function (e) {
                        if (void 0 === e)
                            return this[0] ? this[0].textContent.trim() : null;
                        for (var t = 0; t < this.length; t += 1)
                            this[t].textContent = e;
                        return this;
                    },
                    is: function (e) {
                        var t,
                            i,
                            a = L(),
                            n = E(),
                            s = this[0];
                        if (s && void 0 !== e)
                            if ("string" == typeof e) {
                                if (s.matches) return s.matches(e);
                                if (s.webkitMatchesSelector)
                                    return s.webkitMatchesSelector(e);
                                if (s.msMatchesSelector)
                                    return s.msMatchesSelector(e);
                                for (t = z(e), i = 0; i < t.length; i += 1)
                                    if (t[i] === s) return !0;
                            } else {
                                if (e === n) return s === n;
                                if (e === a) return s === a;
                                if (e.nodeType || e instanceof d)
                                    for (
                                        t = e.nodeType ? [e] : e, i = 0;
                                        i < t.length;
                                        i += 1
                                    )
                                        if (t[i] === s) return !0;
                            }
                        return !1;
                    },
                    index: function () {
                        var e,
                            t = this[0];
                        if (t) {
                            for (e = 0; null !== (t = t.previousSibling); )
                                1 === t.nodeType && (e += 1);
                            return e;
                        }
                    },
                    eq: function (e) {
                        var t;
                        return void 0 === e
                            ? this
                            : z(
                                  (t = this.length) - 1 < e
                                      ? []
                                      : e < 0
                                      ? (t = t + e) < 0
                                          ? []
                                          : [this[t]]
                                      : [this[e]]
                              );
                    },
                    append: function () {
                        for (var e = E(), t = 0; t < arguments.length; t += 1)
                            for (
                                var i =
                                        t < 0 || arguments.length <= t
                                            ? void 0
                                            : arguments[t],
                                    a = 0;
                                a < this.length;
                                a += 1
                            )
                                if ("string" == typeof i) {
                                    var n = e.createElement("div");
                                    for (n.innerHTML = i; n.firstChild; )
                                        this[a].appendChild(n.firstChild);
                                } else if (i instanceof d)
                                    for (var s = 0; s < i.length; s += 1)
                                        this[a].appendChild(i[s]);
                                else this[a].appendChild(i);
                        return this;
                    },
                    prepend: function (e) {
                        for (var t, i = E(), a = 0; a < this.length; a += 1)
                            if ("string" == typeof e) {
                                var n = i.createElement("div");
                                for (
                                    n.innerHTML = e,
                                        t = n.childNodes.length - 1;
                                    0 <= t;
                                    --t
                                )
                                    this[a].insertBefore(
                                        n.childNodes[t],
                                        this[a].childNodes[0]
                                    );
                            } else if (e instanceof d)
                                for (t = 0; t < e.length; t += 1)
                                    this[a].insertBefore(
                                        e[t],
                                        this[a].childNodes[0]
                                    );
                            else this[a].insertBefore(e, this[a].childNodes[0]);
                        return this;
                    },
                    next: function (e) {
                        return 0 < this.length
                            ? e
                                ? this[0].nextElementSibling &&
                                  z(this[0].nextElementSibling).is(e)
                                    ? z([this[0].nextElementSibling])
                                    : z([])
                                : this[0].nextElementSibling
                                ? z([this[0].nextElementSibling])
                                : z([])
                            : z([]);
                    },
                    nextAll: function (e) {
                        var t = [],
                            i = this[0];
                        if (!i) return z([]);
                        for (; i.nextElementSibling; ) {
                            var a = i.nextElementSibling;
                            (e && !z(a).is(e)) || t.push(a), (i = a);
                        }
                        return z(t);
                    },
                    prev: function (e) {
                        var t;
                        return 0 < this.length
                            ? ((t = this[0]),
                              e
                                  ? t.previousElementSibling &&
                                    z(t.previousElementSibling).is(e)
                                      ? z([t.previousElementSibling])
                                      : z([])
                                  : t.previousElementSibling
                                  ? z([t.previousElementSibling])
                                  : z([]))
                            : z([]);
                    },
                    prevAll: function (e) {
                        var t = [],
                            i = this[0];
                        if (!i) return z([]);
                        for (; i.previousElementSibling; ) {
                            var a = i.previousElementSibling;
                            (e && !z(a).is(e)) || t.push(a), (i = a);
                        }
                        return z(t);
                    },
                    parent: function (e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            null === this[i].parentNode ||
                                (e && !z(this[i].parentNode).is(e)) ||
                                t.push(this[i].parentNode);
                        return z(t);
                    },
                    parents: function (e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            for (var a = this[i].parentNode; a; )
                                (e && !z(a).is(e)) || t.push(a),
                                    (a = a.parentNode);
                        return z(t);
                    },
                    closest: function (e) {
                        var t = this;
                        return void 0 === e
                            ? z([])
                            : (t = t.is(e) ? t : t.parents(e).eq(0));
                    },
                    find: function (e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            for (
                                var a = this[i].querySelectorAll(e), n = 0;
                                n < a.length;
                                n += 1
                            )
                                t.push(a[n]);
                        return z(t);
                    },
                    children: function (e) {
                        for (var t = [], i = 0; i < this.length; i += 1)
                            for (
                                var a = this[i].children, n = 0;
                                n < a.length;
                                n += 1
                            )
                                (e && !z(a[n]).is(e)) || t.push(a[n]);
                        return z(t);
                    },
                    filter: function (e) {
                        return z(r(this, e));
                    },
                    remove: function () {
                        for (var e = 0; e < this.length; e += 1)
                            this[e].parentNode &&
                                this[e].parentNode.removeChild(this[e]);
                        return this;
                    },
                };
            function T(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t);
            }
            function S() {
                return Date.now();
            }
            function I(e, t) {
                void 0 === t && (t = "x");
                var i,
                    a,
                    n,
                    s,
                    r = L(),
                    o =
                        ((e = e),
                        (o = L()),
                        (s =
                            (s =
                                !(s = o.getComputedStyle
                                    ? o.getComputedStyle(e, null)
                                    : s) && e.currentStyle
                                    ? e.currentStyle
                                    : s) || e.style));
                return (
                    r.WebKitCSSMatrix
                        ? (6 <
                              (a = o.transform || o.webkitTransform).split(",")
                                  .length &&
                              (a = a
                                  .split(", ")
                                  .map(function (e) {
                                      return e.replace(",", ".");
                                  })
                                  .join(", ")),
                          (n = new r.WebKitCSSMatrix("none" === a ? "" : a)))
                        : (i = (n =
                              o.MozTransform ||
                              o.OTransform ||
                              o.MsTransform ||
                              o.msTransform ||
                              o.transform ||
                              o
                                  .getPropertyValue("transform")
                                  .replace("translate(", "matrix(1, 0, 0, 1,"))
                              .toString()
                              .split(",")),
                    "x" === t &&
                        (a = r.WebKitCSSMatrix
                            ? n.m41
                            : 16 === i.length
                            ? parseFloat(i[12])
                            : parseFloat(i[4])),
                    (a =
                        "y" === t
                            ? r.WebKitCSSMatrix
                                ? n.m42
                                : 16 === i.length
                                ? parseFloat(i[13])
                                : parseFloat(i[5])
                            : a) || 0
                );
            }
            function u(e) {
                return (
                    "object" == _typeof(e) &&
                    null !== e &&
                    e.constructor &&
                    "Object" === Object.prototype.toString.call(e).slice(8, -1)
                );
            }
            function C(e) {
                for (
                    var t,
                        i = Object(arguments.length <= 0 ? void 0 : e),
                        a = ["__proto__", "constructor", "prototype"],
                        n = 1;
                    n < arguments.length;
                    n += 1
                ) {
                    var s =
                        n < 0 || arguments.length <= n ? void 0 : arguments[n];
                    if (
                        null != s &&
                        ((t = s),
                        !("undefined" != typeof window &&
                        void 0 !== window.HTMLElement
                            ? t instanceof HTMLElement
                            : t && (1 === t.nodeType || 11 === t.nodeType)))
                    )
                        for (
                            var r = Object.keys(Object(s)).filter(function (e) {
                                    return a.indexOf(e) < 0;
                                }),
                                o = 0,
                                l = r.length;
                            o < l;
                            o += 1
                        ) {
                            var d = r[o],
                                c = Object.getOwnPropertyDescriptor(s, d);
                            void 0 !== c &&
                                c.enumerable &&
                                (u(i[d]) && u(s[d])
                                    ? s[d].__swiper__
                                        ? (i[d] = s[d])
                                        : C(i[d], s[d])
                                    : u(i[d]) ||
                                      !u(s[d]) ||
                                      ((i[d] = {}), s[d].__swiper__)
                                    ? (i[d] = s[d])
                                    : C(i[d], s[d]));
                        }
                }
                return i;
            }
            function R(e, t, i) {
                e.style.setProperty(t, i);
            }
            function M(e) {
                function a(e, t) {
                    return ("next" === i && t <= e) || ("prev" === i && e <= t);
                }
                var n,
                    s = e.swiper,
                    r = e.targetPosition,
                    o = e.side,
                    l = L(),
                    d = -s.translate,
                    c = null,
                    u = s.params.speed,
                    i =
                        ((s.wrapperEl.style.scrollSnapType = "none"),
                        l.cancelAnimationFrame(s.cssModeFrameID),
                        d < r ? "next" : "prev");
                (function e() {
                    (n = new Date().getTime()), null === c && (c = n);
                    var t = Math.max(Math.min((n - c) / u, 1), 0),
                        t = 0.5 - Math.cos(t * Math.PI) / 2,
                        i = d + t * (r - d);
                    a(i, r) && (i = r),
                        s.wrapperEl.scrollTo(_defineProperty({}, o, i)),
                        a(i, r)
                            ? ((s.wrapperEl.style.overflow = "hidden"),
                              (s.wrapperEl.style.scrollSnapType = ""),
                              setTimeout(function () {
                                  (s.wrapperEl.style.overflow = ""),
                                      s.wrapperEl.scrollTo(
                                          _defineProperty({}, o, i)
                                      );
                              }),
                              l.cancelAnimationFrame(s.cssModeFrameID))
                            : (s.cssModeFrameID = l.requestAnimationFrame(e));
                })();
            }
            function k() {
                return (
                    o ||
                        ((i = L()),
                        (e = E()),
                        (o = {
                            smoothScroll:
                                e.documentElement &&
                                "scrollBehavior" in e.documentElement.style,
                            touch: !!(
                                "ontouchstart" in i ||
                                (i.DocumentTouch &&
                                    e instanceof i.DocumentTouch)
                            ),
                            passiveListener: (function () {
                                var e = !1;
                                try {
                                    var t = Object.defineProperty(
                                        {},
                                        "passive",
                                        {
                                            get: function () {
                                                e = !0;
                                            },
                                        }
                                    );
                                    i.addEventListener(
                                        "testPassiveListener",
                                        null,
                                        t
                                    );
                                } catch (e) {}
                                return e;
                            })(),
                            gestures: "ongesturestart" in i,
                        })),
                    o
                );
                var i, e;
            }
            function l(e) {
                var t = e.swiper,
                    i = e.runCallbacks,
                    a = e.direction,
                    e = e.step,
                    n = t.activeIndex,
                    s = t.previousIndex,
                    a = (a = a) || (s < n ? "next" : n < s ? "prev" : "reset");
                if ((t.emit("transition".concat(e)), i && n !== s)) {
                    if ("reset" === a)
                        return t.emit("slideResetTransition".concat(e));
                    t.emit("slideChangeTransition".concat(e)),
                        "next" === a
                            ? t.emit("slideNextTransition".concat(e))
                            : t.emit("slidePrevTransition".concat(e));
                }
            }
            function p() {
                var e,
                    t,
                    i = this,
                    a = i.params,
                    n = i.el;
                (n && 0 === n.offsetWidth) ||
                    (a.breakpoints && i.setBreakpoint(),
                    (n = i.allowSlideNext),
                    (e = i.allowSlidePrev),
                    (t = i.snapGrid),
                    (i.allowSlideNext = !0),
                    (i.allowSlidePrev = !0),
                    i.updateSize(),
                    i.updateSlides(),
                    i.updateSlidesClasses(),
                    ("auto" === a.slidesPerView || 1 < a.slidesPerView) &&
                    i.isEnd &&
                    !i.isBeginning &&
                    !i.params.centeredSlides
                        ? i.slideTo(i.slides.length - 1, 0, !1, !0)
                        : i.slideTo(i.activeIndex, 0, !1, !0),
                    i.autoplay &&
                        i.autoplay.running &&
                        i.autoplay.paused &&
                        i.autoplay.run(),
                    (i.allowSlidePrev = e),
                    (i.allowSlideNext = n),
                    i.params.watchOverflow &&
                        t !== i.snapGrid &&
                        i.checkOverflow());
            }
            Object.keys(i).forEach(function (e) {
                Object.defineProperty(z.fn, e, { value: i[e], writable: !0 });
            });
            var c = !1;
            function N() {}
            function h(e, t) {
                var i,
                    a = E(),
                    n = e.params,
                    s = e.touchEvents,
                    r = e.el,
                    o = e.wrapperEl,
                    l = e.device,
                    d = e.support,
                    c = !!n.nested,
                    u = "on" === t ? "addEventListener" : "removeEventListener";
                d.touch
                    ? ((i = !(
                          "touchstart" !== s.start ||
                          !d.passiveListener ||
                          !n.passiveListeners
                      ) && { passive: !0, capture: !1 }),
                      r[u](s.start, e.onTouchStart, i),
                      r[u](
                          s.move,
                          e.onTouchMove,
                          d.passiveListener ? { passive: !1, capture: c } : c
                      ),
                      r[u](s.end, e.onTouchEnd, i),
                      s.cancel && r[u](s.cancel, e.onTouchEnd, i))
                    : (r[u](s.start, e.onTouchStart, !1),
                      a[u](s.move, e.onTouchMove, c),
                      a[u](s.end, e.onTouchEnd, !1)),
                    (n.preventClicks || n.preventClicksPropagation) &&
                        r[u]("click", e.onClick, !0),
                    n.cssMode && o[u]("scroll", e.onScroll),
                    n.updateOnWindowResize
                        ? e[t](
                              l.ios || l.android
                                  ? "resize orientationchange observerUpdate"
                                  : "resize observerUpdate",
                              p,
                              !0
                          )
                        : e[t]("observerUpdate", p, !0);
            }
            function f(e, t) {
                return e.grid && t.grid && 1 < t.grid.rows;
            }
            var P = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements:
                    "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                loopPreventsSlide: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
                _emitClasses: !1,
            };
            var m = {
                    eventsEmitter: {
                        on: function (e, t, i) {
                            var a,
                                n = this;
                            return (
                                n.eventsListeners &&
                                    !n.destroyed &&
                                    "function" == typeof t &&
                                    ((a = i ? "unshift" : "push"),
                                    e.split(" ").forEach(function (e) {
                                        n.eventsListeners[e] ||
                                            (n.eventsListeners[e] = []),
                                            n.eventsListeners[e][a](t);
                                    })),
                                n
                            );
                        },
                        once: function (a, n, e) {
                            var s = this;
                            return !s.eventsListeners ||
                                s.destroyed ||
                                "function" != typeof n
                                ? s
                                : ((r.__emitterProxy = n), s.on(a, r, e));
                            function r() {
                                s.off(a, r),
                                    r.__emitterProxy && delete r.__emitterProxy;
                                for (
                                    var e = arguments.length,
                                        t = new Array(e),
                                        i = 0;
                                    i < e;
                                    i++
                                )
                                    t[i] = arguments[i];
                                n.apply(s, t);
                            }
                        },
                        onAny: function (e, t) {
                            var i = this;
                            return (
                                i.eventsListeners &&
                                    !i.destroyed &&
                                    "function" == typeof e &&
                                    ((t = t ? "unshift" : "push"),
                                    i.eventsAnyListeners.indexOf(e) < 0) &&
                                    i.eventsAnyListeners[t](e),
                                i
                            );
                        },
                        offAny: function (e) {
                            var t = this;
                            return (
                                t.eventsListeners &&
                                    !t.destroyed &&
                                    t.eventsAnyListeners &&
                                    0 <=
                                        (e = t.eventsAnyListeners.indexOf(e)) &&
                                    t.eventsAnyListeners.splice(e, 1),
                                t
                            );
                        },
                        off: function (e, a) {
                            var n = this;
                            return (
                                !n.eventsListeners ||
                                    n.destroyed ||
                                    (n.eventsListeners &&
                                        e.split(" ").forEach(function (i) {
                                            void 0 === a
                                                ? (n.eventsListeners[i] = [])
                                                : n.eventsListeners[i] &&
                                                  n.eventsListeners[i].forEach(
                                                      function (e, t) {
                                                          (e === a ||
                                                              (e.__emitterProxy &&
                                                                  e.__emitterProxy ===
                                                                      a)) &&
                                                              n.eventsListeners[
                                                                  i
                                                              ].splice(t, 1);
                                                      }
                                                  );
                                        })),
                                n
                            );
                        },
                        emit: function () {
                            var e = this;
                            if (
                                e.eventsListeners &&
                                !e.destroyed &&
                                e.eventsListeners
                            ) {
                                for (
                                    var t,
                                        i,
                                        a,
                                        n = arguments.length,
                                        s = new Array(n),
                                        r = 0;
                                    r < n;
                                    r++
                                )
                                    s[r] = arguments[r];
                                (a =
                                    "string" == typeof s[0] ||
                                    Array.isArray(s[0])
                                        ? ((t = s[0]),
                                          (i = s.slice(1, s.length)),
                                          e)
                                        : ((t = s[0].events),
                                          (i = s[0].data),
                                          s[0].context || e)),
                                    i.unshift(a),
                                    (Array.isArray(t)
                                        ? t
                                        : t.split(" ")
                                    ).forEach(function (t) {
                                        e.eventsAnyListeners &&
                                            e.eventsAnyListeners.length &&
                                            e.eventsAnyListeners.forEach(
                                                function (e) {
                                                    e.apply(
                                                        a,
                                                        [t].concat(
                                                            _toConsumableArray(
                                                                i
                                                            )
                                                        )
                                                    );
                                                }
                                            ),
                                            e.eventsListeners &&
                                                e.eventsListeners[t] &&
                                                e.eventsListeners[t].forEach(
                                                    function (e) {
                                                        e.apply(a, i);
                                                    }
                                                );
                                    });
                            }
                            return e;
                        },
                    },
                    update: {
                        updateSize: function () {
                            var e = this,
                                t = e.$el,
                                i =
                                    void 0 !== e.params.width &&
                                    null !== e.params.width
                                        ? e.params.width
                                        : t[0].clientWidth,
                                a =
                                    void 0 !== e.params.height &&
                                    null !== e.params.height
                                        ? e.params.height
                                        : t[0].clientHeight;
                            (0 === i && e.isHorizontal()) ||
                                (0 === a && e.isVertical()) ||
                                ((i =
                                    i -
                                    parseInt(t.css("padding-left") || 0, 10) -
                                    parseInt(t.css("padding-right") || 0, 10)),
                                (a =
                                    a -
                                    parseInt(t.css("padding-top") || 0, 10) -
                                    parseInt(t.css("padding-bottom") || 0, 10)),
                                Number.isNaN(i) && (i = 0),
                                Number.isNaN(a) && (a = 0),
                                Object.assign(e, {
                                    width: i,
                                    height: a,
                                    size: e.isHorizontal() ? i : a,
                                }));
                        },
                        updateSlides: function () {
                            var t = this;
                            function i(e) {
                                return t.isHorizontal()
                                    ? e
                                    : {
                                          width: "height",
                                          "margin-top": "margin-left",
                                          "margin-bottom ": "margin-right",
                                          "margin-left": "margin-top",
                                          "margin-right": "margin-bottom",
                                          "padding-left": "padding-top",
                                          "padding-right": "padding-bottom",
                                          marginRight: "marginBottom",
                                      }[e];
                            }
                            function e(e, t) {
                                return parseFloat(
                                    e.getPropertyValue(i(t)) || 0
                                );
                            }
                            var a = t.params,
                                n = t.$wrapperEl,
                                s = t.size,
                                r = t.rtlTranslate,
                                o = t.wrongRTL,
                                l = t.virtual && a.virtual.enabled,
                                D = (l ? t.virtual : t).slides.length,
                                d = n.children(".".concat(t.params.slideClass)),
                                c = (l ? t.virtual.slides : d).length,
                                u = [],
                                p = [],
                                h = [],
                                f = a.slidesOffsetBefore,
                                m =
                                    ("function" == typeof f &&
                                        (f = a.slidesOffsetBefore.call(t)),
                                    a.slidesOffsetAfter),
                                N =
                                    ("function" == typeof m &&
                                        (m = a.slidesOffsetAfter.call(t)),
                                    t.snapGrid.length),
                                X = t.slidesGrid.length,
                                v = a.spaceBetween,
                                g = -f,
                                y = 0,
                                w = 0;
                            if (void 0 !== s) {
                                "string" == typeof v &&
                                    0 <= v.indexOf("%") &&
                                    (v =
                                        (parseFloat(v.replace("%", "")) / 100) *
                                        s),
                                    (t.virtualSize = -v),
                                    r
                                        ? d.css({
                                              marginLeft: "",
                                              marginBottom: "",
                                              marginTop: "",
                                          })
                                        : d.css({
                                              marginRight: "",
                                              marginBottom: "",
                                              marginTop: "",
                                          }),
                                    a.centeredSlides &&
                                        a.cssMode &&
                                        (R(
                                            t.wrapperEl,
                                            "--swiper-centered-offset-before",
                                            ""
                                        ),
                                        R(
                                            t.wrapperEl,
                                            "--swiper-centered-offset-after",
                                            ""
                                        ));
                                for (
                                    var b,
                                        x,
                                        S,
                                        E,
                                        B,
                                        Y,
                                        T = a.grid && 1 < a.grid.rows && t.grid,
                                        q =
                                            (T && t.grid.initSlides(c),
                                            "auto" === a.slidesPerView &&
                                                a.breakpoints &&
                                                0 <
                                                    Object.keys(
                                                        a.breakpoints
                                                    ).filter(function (e) {
                                                        return (
                                                            void 0 !==
                                                            a.breakpoints[e]
                                                                .slidesPerView
                                                        );
                                                    }).length),
                                        C = 0;
                                    C < c;
                                    C += 1
                                ) {
                                    z = 0;
                                    var M,
                                        k,
                                        P,
                                        H,
                                        G,
                                        A,
                                        O,
                                        L,
                                        W,
                                        z,
                                        I = d.eq(C);
                                    T && t.grid.updateSlide(C, I, c, i),
                                        "none" !== I.css("display") &&
                                            ("auto" === a.slidesPerView
                                                ? (q &&
                                                      (d[C].style[i("width")] =
                                                          ""),
                                                  (L = getComputedStyle(I[0])),
                                                  (M = I[0].style.transform),
                                                  (k =
                                                      I[0].style
                                                          .webkitTransform),
                                                  M &&
                                                      (I[0].style.transform =
                                                          "none"),
                                                  k &&
                                                      (I[0].style.webkitTransform =
                                                          "none"),
                                                  (z = a.roundLengths
                                                      ? t.isHorizontal()
                                                          ? I.outerWidth(!0)
                                                          : I.outerHeight(!0)
                                                      : ((P = e(L, "width")),
                                                        (H = e(
                                                            L,
                                                            "padding-left"
                                                        )),
                                                        (G = e(
                                                            L,
                                                            "padding-right"
                                                        )),
                                                        (A = e(
                                                            L,
                                                            "margin-left"
                                                        )),
                                                        (O = e(
                                                            L,
                                                            "margin-right"
                                                        )),
                                                        (L =
                                                            L.getPropertyValue(
                                                                "box-sizing"
                                                            )) &&
                                                        "border-box" === L
                                                            ? P + A + O
                                                            : ((W = (L = I[0])
                                                                  .clientWidth),
                                                              P +
                                                                  H +
                                                                  G +
                                                                  A +
                                                                  O +
                                                                  (L.offsetWidth -
                                                                      W)))),
                                                  M &&
                                                      (I[0].style.transform =
                                                          M),
                                                  k &&
                                                      (I[0].style.webkitTransform =
                                                          k),
                                                  a.roundLengths &&
                                                      (z = Math.floor(z)))
                                                : ((z =
                                                      (s -
                                                          (a.slidesPerView -
                                                              1) *
                                                              v) /
                                                      a.slidesPerView),
                                                  a.roundLengths &&
                                                      (z = Math.floor(z)),
                                                  d[C] &&
                                                      (d[C].style[i("width")] =
                                                          "".concat(z, "px"))),
                                            d[C] && (d[C].swiperSlideSize = z),
                                            h.push(z),
                                            a.centeredSlides
                                                ? ((g = g + z / 2 + y / 2 + v),
                                                  0 === y &&
                                                      0 !== C &&
                                                      (g = g - s / 2 - v),
                                                  0 === C &&
                                                      (g = g - s / 2 - v),
                                                  Math.abs(g) < 0.001 &&
                                                      (g = 0),
                                                  a.roundLengths &&
                                                      (g = Math.floor(g)),
                                                  w % a.slidesPerGroup == 0 &&
                                                      u.push(g),
                                                  p.push(g))
                                                : (a.roundLengths &&
                                                      (g = Math.floor(g)),
                                                  (w -
                                                      Math.min(
                                                          t.params
                                                              .slidesPerGroupSkip,
                                                          w
                                                      )) %
                                                      t.params.slidesPerGroup ==
                                                      0 && u.push(g),
                                                  p.push(g),
                                                  (g = g + z + v)),
                                            (t.virtualSize += z + v),
                                            (y = z),
                                            (w += 1));
                                }
                                if (
                                    ((t.virtualSize =
                                        Math.max(t.virtualSize, s) + m),
                                    r &&
                                        o &&
                                        ("slide" === a.effect ||
                                            "coverflow" === a.effect) &&
                                        n.css({
                                            width: "".concat(
                                                t.virtualSize + a.spaceBetween,
                                                "px"
                                            ),
                                        }),
                                    a.setWrapperSize &&
                                        n.css(
                                            _defineProperty(
                                                {},
                                                i("width"),
                                                "".concat(
                                                    t.virtualSize +
                                                        a.spaceBetween,
                                                    "px"
                                                )
                                            )
                                        ),
                                    T && t.grid.updateWrapperSize(z, u, i),
                                    !a.centeredSlides)
                                ) {
                                    for (
                                        var j = [], $ = 0;
                                        $ < u.length;
                                        $ += 1
                                    ) {
                                        var _ = u[$];
                                        a.roundLengths && (_ = Math.floor(_)),
                                            u[$] <= t.virtualSize - s &&
                                                j.push(_);
                                    }
                                    (u = j),
                                        1 <
                                            Math.floor(t.virtualSize - s) -
                                                Math.floor(u[u.length - 1]) &&
                                            u.push(t.virtualSize - s);
                                }
                                0 === u.length && (u = [0]),
                                    0 !== a.spaceBetween &&
                                        ((o =
                                            t.isHorizontal() && r
                                                ? "marginLeft"
                                                : i("marginRight")),
                                        d
                                            .filter(function (e, t) {
                                                return (
                                                    !a.cssMode ||
                                                    t !== d.length - 1
                                                );
                                            })
                                            .css(
                                                _defineProperty(
                                                    {},
                                                    o,
                                                    "".concat(v, "px")
                                                )
                                            )),
                                    a.centeredSlides &&
                                        a.centeredSlidesBounds &&
                                        ((b = 0),
                                        h.forEach(function (e) {
                                            b += e + (a.spaceBetween || 0);
                                        }),
                                        (x = (b -= a.spaceBetween) - s),
                                        (u = u.map(function (e) {
                                            return e < 0
                                                ? -f
                                                : x < e
                                                ? x + m
                                                : e;
                                        }))),
                                    a.centerInsufficientSlides &&
                                        ((S = 0),
                                        h.forEach(function (e) {
                                            S += e + (a.spaceBetween || 0);
                                        }),
                                        (S -= a.spaceBetween) < s) &&
                                        ((E = (s - S) / 2),
                                        u.forEach(function (e, t) {
                                            u[t] = e - E;
                                        }),
                                        p.forEach(function (e, t) {
                                            p[t] = e + E;
                                        })),
                                    Object.assign(t, {
                                        slides: d,
                                        snapGrid: u,
                                        slidesGrid: p,
                                        slidesSizesGrid: h,
                                    }),
                                    a.centeredSlides &&
                                        a.cssMode &&
                                        !a.centeredSlidesBounds &&
                                        (R(
                                            t.wrapperEl,
                                            "--swiper-centered-offset-before",
                                            -u[0] + "px"
                                        ),
                                        R(
                                            t.wrapperEl,
                                            "--swiper-centered-offset-after",
                                            t.size / 2 -
                                                h[h.length - 1] / 2 +
                                                "px"
                                        ),
                                        (B = -t.snapGrid[0]),
                                        (Y = -t.slidesGrid[0]),
                                        (t.snapGrid = t.snapGrid.map(function (
                                            e
                                        ) {
                                            return e + B;
                                        })),
                                        (t.slidesGrid = t.slidesGrid.map(
                                            function (e) {
                                                return e + Y;
                                            }
                                        ))),
                                    c !== D && t.emit("slidesLengthChange"),
                                    u.length !== N &&
                                        (t.params.watchOverflow &&
                                            t.checkOverflow(),
                                        t.emit("snapGridLengthChange")),
                                    p.length !== X &&
                                        t.emit("slidesGridLengthChange"),
                                    a.watchSlidesProgress &&
                                        t.updateSlidesOffset(),
                                    l ||
                                        a.cssMode ||
                                        ("slide" !== a.effect &&
                                            "fade" !== a.effect) ||
                                        ((n = "".concat(
                                            a.containerModifierClass,
                                            "backface-hidden"
                                        )),
                                        (r = t.$el.hasClass(n)),
                                        c <= a.maxBackfaceHiddenSlides
                                            ? r || t.$el.addClass(n)
                                            : r && t.$el.removeClass(n));
                            }
                        },
                        updateAutoHeight: function (e) {
                            function t(t) {
                                return (
                                    r
                                        ? n.slides.filter(function (e) {
                                              return (
                                                  parseInt(
                                                      e.getAttribute(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      10
                                                  ) === t
                                              );
                                          })
                                        : n.slides.eq(t)
                                )[0];
                            }
                            var i,
                                a,
                                n = this,
                                s = [],
                                r = n.virtual && n.params.virtual.enabled,
                                o = 0;
                            "number" == typeof e
                                ? n.setTransition(e)
                                : !0 === e && n.setTransition(n.params.speed);
                            if (
                                "auto" !== n.params.slidesPerView &&
                                1 < n.params.slidesPerView
                            )
                                if (n.params.centeredSlides)
                                    (n.visibleSlides || z([])).each(function (
                                        e
                                    ) {
                                        s.push(e);
                                    });
                                else
                                    for (
                                        i = 0;
                                        i < Math.ceil(n.params.slidesPerView);
                                        i += 1
                                    ) {
                                        var l = n.activeIndex + i;
                                        if (l > n.slides.length && !r) break;
                                        s.push(t(l));
                                    }
                            else s.push(t(n.activeIndex));
                            for (i = 0; i < s.length; i += 1)
                                void 0 !== s[i] &&
                                    (o = o < (a = s[i].offsetHeight) ? a : o);
                            (!o && 0 !== o) ||
                                n.$wrapperEl.css("height", "".concat(o, "px"));
                        },
                        updateSlidesOffset: function () {
                            for (
                                var e = this.slides, t = 0;
                                t < e.length;
                                t += 1
                            )
                                e[t].swiperSlideOffset = this.isHorizontal()
                                    ? e[t].offsetLeft
                                    : e[t].offsetTop;
                        },
                        updateSlidesProgress: function (e) {
                            void 0 === e && (e = (this && this.translate) || 0);
                            var t = this,
                                i = t.params,
                                a = t.slides,
                                n = t.rtlTranslate,
                                s = t.snapGrid;
                            if (0 !== a.length) {
                                void 0 === a[0].swiperSlideOffset &&
                                    t.updateSlidesOffset();
                                var r = n ? e : -e;
                                a.removeClass(i.slideVisibleClass),
                                    (t.visibleSlidesIndexes = []),
                                    (t.visibleSlides = []);
                                for (var o = 0; o < a.length; o += 1) {
                                    var l = a[o],
                                        d = l.swiperSlideOffset,
                                        c =
                                            (i.cssMode &&
                                                i.centeredSlides &&
                                                (d -= a[0].swiperSlideOffset),
                                            (r +
                                                (i.centeredSlides
                                                    ? t.minTranslate()
                                                    : 0) -
                                                d) /
                                                (l.swiperSlideSize +
                                                    i.spaceBetween)),
                                        u =
                                            (r -
                                                s[0] +
                                                (i.centeredSlides
                                                    ? t.minTranslate()
                                                    : 0) -
                                                d) /
                                            (l.swiperSlideSize +
                                                i.spaceBetween),
                                        d = -(r - d),
                                        p = d + t.slidesSizesGrid[o];
                                    ((0 <= d && d < t.size - 1) ||
                                        (1 < p && p <= t.size) ||
                                        (d <= 0 && p >= t.size)) &&
                                        (t.visibleSlides.push(l),
                                        t.visibleSlidesIndexes.push(o),
                                        a.eq(o).addClass(i.slideVisibleClass)),
                                        (l.progress = n ? -c : c),
                                        (l.originalProgress = n ? -u : u);
                                }
                                t.visibleSlides = z(t.visibleSlides);
                            }
                        },
                        updateProgress: function (e) {
                            var t = this,
                                i =
                                    (void 0 === e &&
                                        ((i = t.rtlTranslate ? -1 : 1),
                                        (e =
                                            (t &&
                                                t.translate &&
                                                t.translate * i) ||
                                            0)),
                                    t.params),
                                a = t.maxTranslate() - t.minTranslate(),
                                n = t.progress,
                                s = t.isBeginning,
                                r = s,
                                o = (l = t.isEnd),
                                l =
                                    0 == a
                                        ? (s = !(n = 0))
                                        : ((s =
                                              (n =
                                                  (e - t.minTranslate()) / a) <=
                                              0),
                                          1 <= n);
                            Object.assign(t, {
                                progress: n,
                                isBeginning: s,
                                isEnd: l,
                            }),
                                (i.watchSlidesProgress ||
                                    (i.centeredSlides && i.autoHeight)) &&
                                    t.updateSlidesProgress(e),
                                s && !r && t.emit("reachBeginning toEdge"),
                                l && !o && t.emit("reachEnd toEdge"),
                                ((r && !s) || (o && !l)) && t.emit("fromEdge"),
                                t.emit("progress", n);
                        },
                        updateSlidesClasses: function () {
                            var e = this,
                                t = e.slides,
                                i = e.params,
                                a = e.$wrapperEl,
                                n = e.activeIndex,
                                s = e.realIndex,
                                r = e.virtual && i.virtual.enabled,
                                n =
                                    (t.removeClass(
                                        ""
                                            .concat(i.slideActiveClass, " ")
                                            .concat(i.slideNextClass, " ")
                                            .concat(i.slidePrevClass, " ")
                                            .concat(
                                                i.slideDuplicateActiveClass,
                                                " "
                                            )
                                            .concat(
                                                i.slideDuplicateNextClass,
                                                " "
                                            )
                                            .concat(i.slideDuplicatePrevClass)
                                    ),
                                    (r = r
                                        ? e.$wrapperEl.find(
                                              "."
                                                  .concat(
                                                      i.slideClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(n, '"]')
                                          )
                                        : t.eq(n)).addClass(i.slideActiveClass),
                                    i.loop &&
                                        (r.hasClass(i.slideDuplicateClass)
                                            ? a.children(
                                                  "."
                                                      .concat(
                                                          i.slideClass,
                                                          ":not(."
                                                      )
                                                      .concat(
                                                          i.slideDuplicateClass,
                                                          ')[data-swiper-slide-index="'
                                                      )
                                                      .concat(s, '"]')
                                              )
                                            : a.children(
                                                  "."
                                                      .concat(i.slideClass, ".")
                                                      .concat(
                                                          i.slideDuplicateClass,
                                                          '[data-swiper-slide-index="'
                                                      )
                                                      .concat(s, '"]')
                                              )
                                        ).addClass(i.slideDuplicateActiveClass),
                                    r
                                        .nextAll(".".concat(i.slideClass))
                                        .eq(0)
                                        .addClass(i.slideNextClass)),
                                s =
                                    (i.loop &&
                                        0 === n.length &&
                                        (n = t.eq(0)).addClass(
                                            i.slideNextClass
                                        ),
                                    r
                                        .prevAll(".".concat(i.slideClass))
                                        .eq(0)
                                        .addClass(i.slidePrevClass));
                            i.loop &&
                                0 === s.length &&
                                (s = t.eq(-1)).addClass(i.slidePrevClass),
                                i.loop &&
                                    ((n.hasClass(i.slideDuplicateClass)
                                        ? a.children(
                                              "."
                                                  .concat(
                                                      i.slideClass,
                                                      ":not(."
                                                  )
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      ')[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      n.attr(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                        : a.children(
                                              "."
                                                  .concat(i.slideClass, ".")
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      n.attr(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                    ).addClass(i.slideDuplicateNextClass),
                                    (s.hasClass(i.slideDuplicateClass)
                                        ? a.children(
                                              "."
                                                  .concat(
                                                      i.slideClass,
                                                      ":not(."
                                                  )
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      ')[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      s.attr(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                        : a.children(
                                              "."
                                                  .concat(i.slideClass, ".")
                                                  .concat(
                                                      i.slideDuplicateClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(
                                                      s.attr(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      '"]'
                                                  )
                                          )
                                    ).addClass(i.slideDuplicatePrevClass)),
                                e.emitSlidesClasses();
                        },
                        updateActiveIndex: function (e) {
                            var t = this,
                                i = t.rtlTranslate ? t.translate : -t.translate,
                                a = t.slidesGrid,
                                n = t.snapGrid,
                                s = t.params,
                                r = t.activeIndex,
                                o = t.realIndex,
                                l = t.snapIndex,
                                d = e;
                            if (void 0 === d) {
                                for (var c = 0; c < a.length; c += 1)
                                    void 0 !== a[c + 1]
                                        ? i >= a[c] &&
                                          i < a[c + 1] - (a[c + 1] - a[c]) / 2
                                            ? (d = c)
                                            : i >= a[c] &&
                                              i < a[c + 1] &&
                                              (d = c + 1)
                                        : i >= a[c] && (d = c);
                                s.normalizeSlideIndex &&
                                    (d < 0 || void 0 === d) &&
                                    (d = 0);
                            }
                            (e =
                                0 <= n.indexOf(i)
                                    ? n.indexOf(i)
                                    : (e = Math.min(s.slidesPerGroupSkip, d)) +
                                      Math.floor((d - e) / s.slidesPerGroup)) >=
                                n.length && (e = n.length - 1),
                                d === r
                                    ? e !== l &&
                                      ((t.snapIndex = e),
                                      t.emit("snapIndexChange"))
                                    : ((s = parseInt(
                                          t.slides
                                              .eq(d)
                                              .attr(
                                                  "data-swiper-slide-index"
                                              ) || d,
                                          10
                                      )),
                                      Object.assign(t, {
                                          snapIndex: e,
                                          realIndex: s,
                                          previousIndex: r,
                                          activeIndex: d,
                                      }),
                                      t.emit("activeIndexChange"),
                                      t.emit("snapIndexChange"),
                                      o !== s && t.emit("realIndexChange"),
                                      (t.initialized ||
                                          t.params.runCallbacksOnInit) &&
                                          t.emit("slideChange"));
                        },
                        updateClickedSlide: function (e) {
                            var t,
                                i = this,
                                a = i.params,
                                n = z(e).closest(".".concat(a.slideClass))[0],
                                s = !1;
                            if (n)
                                for (var r = 0; r < i.slides.length; r += 1)
                                    if (i.slides[r] === n) {
                                        (s = !0), (t = r);
                                        break;
                                    }
                            n && s
                                ? ((i.clickedSlide = n),
                                  i.virtual && i.params.virtual.enabled
                                      ? (i.clickedIndex = parseInt(
                                            z(n).attr(
                                                "data-swiper-slide-index"
                                            ),
                                            10
                                        ))
                                      : (i.clickedIndex = t),
                                  a.slideToClickedSlide &&
                                      void 0 !== i.clickedIndex &&
                                      i.clickedIndex !== i.activeIndex &&
                                      i.slideToClickedSlide())
                                : ((i.clickedSlide = void 0),
                                  (i.clickedIndex = void 0));
                        },
                    },
                    translate: {
                        getTranslate: function (e) {
                            void 0 === e &&
                                (e = this.isHorizontal() ? "x" : "y");
                            var t = this.params,
                                i = this.rtlTranslate,
                                a = this.translate,
                                n = this.$wrapperEl;
                            return t.virtualTranslate
                                ? i
                                    ? -a
                                    : a
                                : t.cssMode
                                ? a
                                : ((t = I(n[0], e)), (t = i ? -t : t) || 0);
                        },
                        setTranslate: function (e, t) {
                            var i = this,
                                a = i.rtlTranslate,
                                n = i.params,
                                s = i.$wrapperEl,
                                r = i.wrapperEl,
                                o = i.progress,
                                l = 0,
                                d = 0,
                                a =
                                    (i.isHorizontal()
                                        ? (l = a ? -e : e)
                                        : (d = e),
                                    n.roundLengths &&
                                        ((l = Math.floor(l)),
                                        (d = Math.floor(d))),
                                    n.cssMode
                                        ? (r[
                                              i.isHorizontal()
                                                  ? "scrollLeft"
                                                  : "scrollTop"
                                          ] = i.isHorizontal() ? -l : -d)
                                        : n.virtualTranslate ||
                                          s.transform(
                                              "translate3d("
                                                  .concat(l, "px, ")
                                                  .concat(d, "px, 0px)")
                                          ),
                                    (i.previousTranslate = i.translate),
                                    (i.translate = i.isHorizontal() ? l : d),
                                    i.maxTranslate() - i.minTranslate());
                            (0 == a ? 0 : (e - i.minTranslate()) / a) !== o &&
                                i.updateProgress(e),
                                i.emit("setTranslate", i.translate, t);
                        },
                        minTranslate: function () {
                            return -this.snapGrid[0];
                        },
                        maxTranslate: function () {
                            return -this.snapGrid[this.snapGrid.length - 1];
                        },
                        translateTo: function (e, t, i, a, n) {
                            void 0 === e && (e = 0),
                                void 0 === t && (t = this.params.speed),
                                void 0 === i && (i = !0),
                                void 0 === a && (a = !0);
                            var s = this,
                                r = s.params,
                                o = s.wrapperEl;
                            if (s.animating && r.preventInteractionOnTransition)
                                return !1;
                            var l = s.minTranslate(),
                                d = s.maxTranslate(),
                                l = a && l < e ? l : a && e < d ? d : e;
                            if ((s.updateProgress(l), r.cssMode)) {
                                a = s.isHorizontal();
                                if (0 === t)
                                    o[a ? "scrollLeft" : "scrollTop"] = -l;
                                else {
                                    if (!s.support.smoothScroll)
                                        return (
                                            M({
                                                swiper: s,
                                                targetPosition: -l,
                                                side: a ? "left" : "top",
                                            }),
                                            !0
                                        );
                                    o.scrollTo(
                                        (_defineProperty(
                                            (d = {}),
                                            a ? "left" : "top",
                                            -l
                                        ),
                                        _defineProperty(
                                            d,
                                            "behavior",
                                            "smooth"
                                        ),
                                        d)
                                    );
                                }
                            } else
                                0 === t
                                    ? (s.setTransition(0),
                                      s.setTranslate(l),
                                      i &&
                                          (s.emit(
                                              "beforeTransitionStart",
                                              t,
                                              n
                                          ),
                                          s.emit("transitionEnd")))
                                    : (s.setTransition(t),
                                      s.setTranslate(l),
                                      i &&
                                          (s.emit(
                                              "beforeTransitionStart",
                                              t,
                                              n
                                          ),
                                          s.emit("transitionStart")),
                                      s.animating ||
                                          ((s.animating = !0),
                                          s.onTranslateToWrapperTransitionEnd ||
                                              (s.onTranslateToWrapperTransitionEnd =
                                                  function (e) {
                                                      s &&
                                                          !s.destroyed &&
                                                          e.target === this &&
                                                          (s.$wrapperEl[0].removeEventListener(
                                                              "transitionend",
                                                              s.onTranslateToWrapperTransitionEnd
                                                          ),
                                                          s.$wrapperEl[0].removeEventListener(
                                                              "webkitTransitionEnd",
                                                              s.onTranslateToWrapperTransitionEnd
                                                          ),
                                                          (s.onTranslateToWrapperTransitionEnd =
                                                              null),
                                                          delete s.onTranslateToWrapperTransitionEnd,
                                                          i) &&
                                                          s.emit(
                                                              "transitionEnd"
                                                          );
                                                  }),
                                          s.$wrapperEl[0].addEventListener(
                                              "transitionend",
                                              s.onTranslateToWrapperTransitionEnd
                                          ),
                                          s.$wrapperEl[0].addEventListener(
                                              "webkitTransitionEnd",
                                              s.onTranslateToWrapperTransitionEnd
                                          )));
                            return !0;
                        },
                    },
                    transition: {
                        setTransition: function (e, t) {
                            this.params.cssMode ||
                                this.$wrapperEl.transition(e),
                                this.emit("setTransition", e, t);
                        },
                        transitionStart: function (e, t) {
                            void 0 === e && (e = !0);
                            var i = this.params;
                            i.cssMode ||
                                (i.autoHeight && this.updateAutoHeight(),
                                l({
                                    swiper: this,
                                    runCallbacks: e,
                                    direction: t,
                                    step: "Start",
                                }));
                        },
                        transitionEnd: function (e, t) {
                            void 0 === e && (e = !0);
                            var i = this.params;
                            (this.animating = !1),
                                i.cssMode ||
                                    (this.setTransition(0),
                                    l({
                                        swiper: this,
                                        runCallbacks: e,
                                        direction: t,
                                        step: "End",
                                    }));
                        },
                    },
                    slide: {
                        slideTo: function (e, t, i, a, n) {
                            if (
                                (void 0 === t && (t = this.params.speed),
                                void 0 === i && (i = !0),
                                "number" != typeof (e = void 0 === e ? 0 : e) &&
                                    "string" != typeof e)
                            )
                                throw new Error(
                                    "The 'index' argument cannot have type other than 'number' or 'string'. [".concat(
                                        _typeof(e),
                                        "] given."
                                    )
                                );
                            if ("string" == typeof e) {
                                var s = parseInt(e, 10);
                                if (!isFinite(s))
                                    throw new Error(
                                        "The passed-in 'index' (string) couldn't be converted to 'number'. [".concat(
                                            e,
                                            "] given."
                                        )
                                    );
                                e = s;
                            }
                            var r = this,
                                o = e,
                                s = (o < 0 && (o = 0), r.params),
                                e = r.snapGrid,
                                l = r.slidesGrid,
                                d = r.previousIndex,
                                c = r.activeIndex,
                                u = r.rtlTranslate,
                                p = r.wrapperEl,
                                h = r.enabled;
                            if (
                                (r.animating &&
                                    s.preventInteractionOnTransition) ||
                                (!h && !a && !n)
                            )
                                return !1;
                            var f,
                                h = Math.min(r.params.slidesPerGroupSkip, o),
                                n =
                                    h +
                                    Math.floor(
                                        (o - h) / r.params.slidesPerGroup
                                    ),
                                m =
                                    (n >= e.length && (n = e.length - 1),
                                    (c || s.initialSlide || 0) === (d || 0) &&
                                        i &&
                                        r.emit("beforeSlideChangeStart"),
                                    -e[n]);
                            if ((r.updateProgress(m), s.normalizeSlideIndex))
                                for (var v = 0; v < l.length; v += 1) {
                                    var g = -Math.floor(100 * m),
                                        y = Math.floor(100 * l[v]),
                                        w = Math.floor(100 * l[v + 1]);
                                    void 0 !== l[v + 1]
                                        ? y <= g && g < w - (w - y) / 2
                                            ? (o = v)
                                            : y <= g && g < w && (o = v + 1)
                                        : y <= g && (o = v);
                                }
                            if (r.initialized && o !== c) {
                                if (
                                    !r.allowSlideNext &&
                                    m < r.translate &&
                                    m < r.minTranslate()
                                )
                                    return !1;
                                if (
                                    !r.allowSlidePrev &&
                                    m > r.translate &&
                                    m > r.maxTranslate() &&
                                    (c || 0) !== o
                                )
                                    return !1;
                            }
                            if (
                                ((f =
                                    c < o ? "next" : o < c ? "prev" : "reset"),
                                (u && -m === r.translate) ||
                                    (!u && m === r.translate))
                            )
                                return (
                                    r.updateActiveIndex(o),
                                    s.autoHeight && r.updateAutoHeight(),
                                    r.updateSlidesClasses(),
                                    "slide" !== s.effect && r.setTranslate(m),
                                    "reset" != f &&
                                        (r.transitionStart(i, f),
                                        r.transitionEnd(i, f)),
                                    !1
                                );
                            if (s.cssMode) {
                                (h = r.isHorizontal()), (d = u ? m : -m);
                                if (0 === t) {
                                    e = r.virtual && r.params.virtual.enabled;
                                    e &&
                                        ((r.wrapperEl.style.scrollSnapType =
                                            "none"),
                                        (r._immediateVirtual = !0)),
                                        (p[h ? "scrollLeft" : "scrollTop"] = d),
                                        e &&
                                            requestAnimationFrame(function () {
                                                (r.wrapperEl.style.scrollSnapType =
                                                    ""),
                                                    (r._swiperImmediateVirtual =
                                                        !1);
                                            });
                                } else {
                                    if (!r.support.smoothScroll)
                                        return (
                                            M({
                                                swiper: r,
                                                targetPosition: d,
                                                side: h ? "left" : "top",
                                            }),
                                            !0
                                        );
                                    p.scrollTo(
                                        (_defineProperty(
                                            (n = {}),
                                            h ? "left" : "top",
                                            d
                                        ),
                                        _defineProperty(
                                            n,
                                            "behavior",
                                            "smooth"
                                        ),
                                        n)
                                    );
                                }
                            } else
                                r.setTransition(t),
                                    r.setTranslate(m),
                                    r.updateActiveIndex(o),
                                    r.updateSlidesClasses(),
                                    r.emit("beforeTransitionStart", t, a),
                                    r.transitionStart(i, f),
                                    0 === t
                                        ? r.transitionEnd(i, f)
                                        : r.animating ||
                                          ((r.animating = !0),
                                          r.onSlideToWrapperTransitionEnd ||
                                              (r.onSlideToWrapperTransitionEnd =
                                                  function (e) {
                                                      r &&
                                                          !r.destroyed &&
                                                          e.target === this &&
                                                          (r.$wrapperEl[0].removeEventListener(
                                                              "transitionend",
                                                              r.onSlideToWrapperTransitionEnd
                                                          ),
                                                          r.$wrapperEl[0].removeEventListener(
                                                              "webkitTransitionEnd",
                                                              r.onSlideToWrapperTransitionEnd
                                                          ),
                                                          (r.onSlideToWrapperTransitionEnd =
                                                              null),
                                                          delete r.onSlideToWrapperTransitionEnd,
                                                          r.transitionEnd(
                                                              i,
                                                              f
                                                          ));
                                                  }),
                                          r.$wrapperEl[0].addEventListener(
                                              "transitionend",
                                              r.onSlideToWrapperTransitionEnd
                                          ),
                                          r.$wrapperEl[0].addEventListener(
                                              "webkitTransitionEnd",
                                              r.onSlideToWrapperTransitionEnd
                                          ));
                            return !0;
                        },
                        slideToLoop: function (e, t, i, a) {
                            void 0 === t && (t = this.params.speed);
                            e = void 0 === e ? 0 : e;
                            return (
                                this.params.loop && (e += this.loopedSlides),
                                this.slideTo(
                                    e,
                                    t,
                                    (i = void 0 === i ? !0 : i),
                                    a
                                )
                            );
                        },
                        slideNext: function (e, t, i) {
                            void 0 === e && (e = this.params.speed),
                                void 0 === t && (t = !0);
                            var a = this,
                                n = a.animating,
                                s = a.enabled,
                                r = a.params;
                            if (!s) return a;
                            (s = r.slidesPerGroup),
                                "auto" === r.slidesPerView &&
                                    1 === r.slidesPerGroup &&
                                    r.slidesPerGroupAuto &&
                                    (s = Math.max(
                                        a.slidesPerViewDynamic("current", !0),
                                        1
                                    )),
                                (s =
                                    a.activeIndex < r.slidesPerGroupSkip
                                        ? 1
                                        : s);
                            if (r.loop) {
                                if (n && r.loopPreventsSlide) return !1;
                                a.loopFix(),
                                    (a._clientLeft =
                                        a.$wrapperEl[0].clientLeft);
                            }
                            return r.rewind && a.isEnd
                                ? a.slideTo(0, e, t, i)
                                : a.slideTo(a.activeIndex + s, e, t, i);
                        },
                        slidePrev: function (e, t, i) {
                            void 0 === e && (e = this.params.speed),
                                void 0 === t && (t = !0);
                            var a = this,
                                n = a.params,
                                s = a.animating,
                                r = a.snapGrid,
                                o = a.slidesGrid,
                                l = a.rtlTranslate;
                            if (!a.enabled) return a;
                            if (n.loop) {
                                if (s && n.loopPreventsSlide) return !1;
                                a.loopFix(),
                                    (a._clientLeft =
                                        a.$wrapperEl[0].clientLeft);
                            }
                            function d(e) {
                                return e < 0
                                    ? -Math.floor(Math.abs(e))
                                    : Math.floor(e);
                            }
                            var c,
                                u = d(l ? a.translate : -a.translate),
                                s = r.map(d),
                                l = r[s.indexOf(u) - 1],
                                s = 0;
                            return (
                                void 0 !==
                                    (l =
                                        void 0 === l &&
                                        n.cssMode &&
                                        (r.forEach(function (e, t) {
                                            e <= u && (c = t);
                                        }),
                                        void 0 !== c)
                                            ? r[0 < c ? c - 1 : c]
                                            : l) &&
                                    ((s = o.indexOf(l)) < 0 &&
                                        (s = a.activeIndex - 1),
                                    "auto" === n.slidesPerView) &&
                                    1 === n.slidesPerGroup &&
                                    n.slidesPerGroupAuto &&
                                    ((s =
                                        s -
                                        a.slidesPerViewDynamic("previous", !0) +
                                        1),
                                    (s = Math.max(s, 0))),
                                n.rewind && a.isBeginning
                                    ? ((r =
                                          a.params.virtual &&
                                          a.params.virtual.enabled &&
                                          a.virtual
                                              ? a.virtual.slides.length - 1
                                              : a.slides.length - 1),
                                      a.slideTo(r, e, t, i))
                                    : a.slideTo(s, e, t, i)
                            );
                        },
                        slideReset: function (e, t, i) {
                            return (
                                void 0 === e && (e = this.params.speed),
                                this.slideTo(
                                    this.activeIndex,
                                    e,
                                    (t = void 0 === t ? !0 : t),
                                    i
                                )
                            );
                        },
                        slideToClosest: function (e, t, i, a) {
                            void 0 === e && (e = this.params.speed),
                                void 0 === t && (t = !0),
                                void 0 === a && (a = 0.5);
                            var n,
                                s = this,
                                r = s.activeIndex,
                                o = Math.min(s.params.slidesPerGroupSkip, r),
                                o =
                                    o +
                                    Math.floor(
                                        (r - o) / s.params.slidesPerGroup
                                    ),
                                l = s.rtlTranslate ? s.translate : -s.translate;
                            return (
                                l >= s.snapGrid[o]
                                    ? l - (n = s.snapGrid[o]) >
                                          (s.snapGrid[o + 1] - n) * a &&
                                      (r += s.params.slidesPerGroup)
                                    : l - (n = s.snapGrid[o - 1]) <=
                                          (s.snapGrid[o] - n) * a &&
                                      (r -= s.params.slidesPerGroup),
                                (r = Math.max(r, 0)),
                                (r = Math.min(r, s.slidesGrid.length - 1)),
                                s.slideTo(r, e, t, i)
                            );
                        },
                        slideToClickedSlide: function () {
                            var e,
                                t = this,
                                i = t.params,
                                a = t.$wrapperEl,
                                n =
                                    "auto" === i.slidesPerView
                                        ? t.slidesPerViewDynamic()
                                        : i.slidesPerView,
                                s = t.clickedIndex;
                            i.loop
                                ? t.animating ||
                                  ((e = parseInt(
                                      z(t.clickedSlide).attr(
                                          "data-swiper-slide-index"
                                      ),
                                      10
                                  )),
                                  i.centeredSlides
                                      ? s < t.loopedSlides - n / 2 ||
                                        s >
                                            t.slides.length -
                                                t.loopedSlides +
                                                n / 2
                                          ? (t.loopFix(),
                                            (s = a
                                                .children(
                                                    "."
                                                        .concat(
                                                            i.slideClass,
                                                            '[data-swiper-slide-index="'
                                                        )
                                                        .concat(e, '"]:not(.')
                                                        .concat(
                                                            i.slideDuplicateClass,
                                                            ")"
                                                        )
                                                )
                                                .eq(0)
                                                .index()),
                                            T(function () {
                                                t.slideTo(s);
                                            }))
                                          : t.slideTo(s)
                                      : s > t.slides.length - n
                                      ? (t.loopFix(),
                                        (s = a
                                            .children(
                                                "."
                                                    .concat(
                                                        i.slideClass,
                                                        '[data-swiper-slide-index="'
                                                    )
                                                    .concat(e, '"]:not(.')
                                                    .concat(
                                                        i.slideDuplicateClass,
                                                        ")"
                                                    )
                                            )
                                            .eq(0)
                                            .index()),
                                        T(function () {
                                            t.slideTo(s);
                                        }))
                                      : t.slideTo(s))
                                : t.slideTo(s);
                        },
                    },
                    loop: {
                        loopCreate: function () {
                            var a = this,
                                e = E(),
                                t = a.params,
                                i = a.$wrapperEl,
                                n =
                                    0 < i.children().length
                                        ? z(i.children()[0].parentNode)
                                        : i,
                                s =
                                    (n
                                        .children(
                                            "."
                                                .concat(t.slideClass, ".")
                                                .concat(t.slideDuplicateClass)
                                        )
                                        .remove(),
                                    n.children(".".concat(t.slideClass)));
                            if (t.loopFillGroupWithBlank) {
                                var r =
                                    t.slidesPerGroup -
                                    (s.length % t.slidesPerGroup);
                                if (r !== t.slidesPerGroup) {
                                    for (var o = 0; o < r; o += 1) {
                                        var l = z(
                                            e.createElement("div")
                                        ).addClass(
                                            ""
                                                .concat(t.slideClass, " ")
                                                .concat(t.slideBlankClass)
                                        );
                                        n.append(l);
                                    }
                                    s = n.children(".".concat(t.slideClass));
                                }
                            }
                            "auto" !== t.slidesPerView ||
                                t.loopedSlides ||
                                (t.loopedSlides = s.length),
                                (a.loopedSlides = Math.ceil(
                                    parseFloat(
                                        t.loopedSlides || t.slidesPerView,
                                        10
                                    )
                                )),
                                (a.loopedSlides += t.loopAdditionalSlides),
                                a.loopedSlides > s.length &&
                                    (a.loopedSlides = s.length);
                            var d = [],
                                c = [];
                            s.each(function (e, t) {
                                var i = z(e);
                                t < a.loopedSlides && c.push(e),
                                    t < s.length &&
                                        t >= s.length - a.loopedSlides &&
                                        d.push(e),
                                    i.attr("data-swiper-slide-index", t);
                            });
                            for (var u = 0; u < c.length; u += 1)
                                n.append(
                                    z(c[u].cloneNode(!0)).addClass(
                                        t.slideDuplicateClass
                                    )
                                );
                            for (var p = d.length - 1; 0 <= p; --p)
                                n.prepend(
                                    z(d[p].cloneNode(!0)).addClass(
                                        t.slideDuplicateClass
                                    )
                                );
                        },
                        loopFix: function () {
                            var e,
                                t = this,
                                i = (t.emit("beforeLoopFix"), t.activeIndex),
                                a = t.slides,
                                n = t.loopedSlides,
                                s = t.allowSlidePrev,
                                r = t.allowSlideNext,
                                o = t.snapGrid,
                                l = t.rtlTranslate,
                                o =
                                    ((t.allowSlidePrev = !0),
                                    (t.allowSlideNext = !0),
                                    -o[i] - t.getTranslate());
                            i < n
                                ? ((e = a.length - 3 * n + i),
                                  t.slideTo((e += n), 0, !1, !0) &&
                                      0 != o &&
                                      t.setTranslate(
                                          (l ? -t.translate : t.translate) - o
                                      ))
                                : i >= a.length - n &&
                                  ((e = -a.length + i + n),
                                  t.slideTo((e += n), 0, !1, !0)) &&
                                  0 != o &&
                                  t.setTranslate(
                                      (l ? -t.translate : t.translate) - o
                                  ),
                                (t.allowSlidePrev = s),
                                (t.allowSlideNext = r),
                                t.emit("loopFix");
                        },
                        loopDestroy: function () {
                            var e = this.$wrapperEl,
                                t = this.params,
                                i = this.slides;
                            e
                                .children(
                                    "."
                                        .concat(t.slideClass, ".")
                                        .concat(t.slideDuplicateClass, ",.")
                                        .concat(t.slideClass, ".")
                                        .concat(t.slideBlankClass)
                                )
                                .remove(),
                                i.removeAttr("data-swiper-slide-index");
                        },
                    },
                    grabCursor: {
                        setGrabCursor: function (e) {
                            var t = this;
                            t.support.touch ||
                                !t.params.simulateTouch ||
                                (t.params.watchOverflow && t.isLocked) ||
                                t.params.cssMode ||
                                (((t =
                                    "container" === t.params.touchEventsTarget
                                        ? t.el
                                        : t.wrapperEl).style.cursor = "move"),
                                (t.style.cursor = e ? "grabbing" : "grab"));
                        },
                        unsetGrabCursor: function () {
                            var e = this;
                            e.support.touch ||
                                (e.params.watchOverflow && e.isLocked) ||
                                e.params.cssMode ||
                                (e[
                                    "container" === e.params.touchEventsTarget
                                        ? "el"
                                        : "wrapperEl"
                                ].style.cursor = "");
                        },
                    },
                    events: {
                        attachEvents: function () {
                            var e = this,
                                t = E(),
                                i = e.params,
                                a = e.support;
                            (e.onTouchStart = function (e) {
                                var t = this,
                                    i = E(),
                                    a = L(),
                                    n = t.touchEventsData,
                                    s = t.params,
                                    r = t.touches,
                                    o = t.enabled;
                                if (
                                    o &&
                                    (!t.animating ||
                                        !s.preventInteractionOnTransition)
                                ) {
                                    !t.animating &&
                                        s.cssMode &&
                                        s.loop &&
                                        t.loopFix();
                                    var o = e,
                                        l = z(
                                            (o = o.originalEvent
                                                ? o.originalEvent
                                                : o).target
                                        );
                                    if (
                                        ("wrapper" !== s.touchEventsTarget ||
                                            l.closest(t.wrapperEl).length) &&
                                        ((n.isTouchEvent =
                                            "touchstart" === o.type),
                                        n.isTouchEvent ||
                                            !("which" in o) ||
                                            3 !== o.which) &&
                                        !(
                                            (!n.isTouchEvent &&
                                                "button" in o &&
                                                0 < o.button) ||
                                            (n.isTouched && n.isMoved)
                                        )
                                    ) {
                                        s.noSwipingClass &&
                                            "" !== s.noSwipingClass &&
                                            o.target &&
                                            o.target.shadowRoot &&
                                            e.path &&
                                            e.path[0] &&
                                            (l = z(e.path[0]));
                                        var d =
                                                s.noSwipingSelector ||
                                                ".".concat(s.noSwipingClass),
                                            c = !(
                                                !o.target ||
                                                !o.target.shadowRoot
                                            );
                                        if (
                                            s.noSwiping &&
                                            (c
                                                ? (function (a, e) {
                                                      return (function e(t) {
                                                          var i;
                                                          return t &&
                                                              t !== E() &&
                                                              t !== L() &&
                                                              ((i = (t =
                                                                  t.assignedSlot
                                                                      ? t.assignedSlot
                                                                      : t).closest(
                                                                  a
                                                              )) ||
                                                                  t.getRootNode)
                                                              ? i ||
                                                                    e(
                                                                        t.getRootNode()
                                                                            .host
                                                                    )
                                                              : null;
                                                      })(
                                                          (e =
                                                              void 0 === e
                                                                  ? this
                                                                  : e)
                                                      );
                                                  })(d, l[0])
                                                : l.closest(d)[0])
                                        )
                                            t.allowClick = !0;
                                        else if (
                                            !s.swipeHandler ||
                                            l.closest(s.swipeHandler)[0]
                                        ) {
                                            (r.currentX = (
                                                "touchstart" === o.type
                                                    ? o.targetTouches[0]
                                                    : o
                                            ).pageX),
                                                (r.currentY = (
                                                    "touchstart" === o.type
                                                        ? o.targetTouches[0]
                                                        : o
                                                ).pageY);
                                            var c = r.currentX,
                                                d = r.currentY,
                                                u =
                                                    s.edgeSwipeDetection ||
                                                    s.iOSEdgeSwipeDetection,
                                                p =
                                                    s.edgeSwipeThreshold ||
                                                    s.iOSEdgeSwipeThreshold;
                                            if (
                                                u &&
                                                (c <= p ||
                                                    c >= a.innerWidth - p)
                                            ) {
                                                if ("prevent" !== u) return;
                                                e.preventDefault();
                                            }
                                            Object.assign(n, {
                                                isTouched: !0,
                                                isMoved: !1,
                                                allowTouchCallbacks: !0,
                                                isScrolling: void 0,
                                                startMoving: void 0,
                                            }),
                                                (r.startX = c),
                                                (r.startY = d),
                                                (n.touchStartTime = S()),
                                                (t.allowClick = !0),
                                                t.updateSize(),
                                                (t.swipeDirection = void 0),
                                                0 < s.threshold &&
                                                    (n.allowThresholdMove = !1),
                                                "touchstart" !== o.type &&
                                                    ((a = !0),
                                                    l.is(n.focusableElements) &&
                                                        ((a = !1),
                                                        "SELECT" ===
                                                            l[0].nodeName) &&
                                                        (n.isTouched = !1),
                                                    i.activeElement &&
                                                        z(i.activeElement).is(
                                                            n.focusableElements
                                                        ) &&
                                                        i.activeElement !==
                                                            l[0] &&
                                                        i.activeElement.blur(),
                                                    (p =
                                                        a &&
                                                        t.allowTouchMove &&
                                                        s.touchStartPreventDefault),
                                                    (!s.touchStartForcePreventDefault &&
                                                        !p) ||
                                                        l[0]
                                                            .isContentEditable ||
                                                        o.preventDefault()),
                                                t.params.freeMode &&
                                                    t.params.freeMode.enabled &&
                                                    t.freeMode &&
                                                    t.animating &&
                                                    !s.cssMode &&
                                                    t.freeMode.onTouchStart(),
                                                t.emit("touchStart", o);
                                        }
                                    }
                                }
                            }.bind(e)),
                                (e.onTouchMove = function (e) {
                                    var t = E(),
                                        i = this,
                                        a = i.touchEventsData,
                                        n = i.params,
                                        s = i.touches,
                                        r = i.rtlTranslate;
                                    if (i.enabled)
                                        if (
                                            (e.originalEvent &&
                                                (e = e.originalEvent),
                                            a.isTouched)
                                        ) {
                                            if (
                                                !a.isTouchEvent ||
                                                "touchmove" === e.type
                                            ) {
                                                var o =
                                                        "touchmove" ===
                                                            e.type &&
                                                        e.targetTouches &&
                                                        (e.targetTouches[0] ||
                                                            e
                                                                .changedTouches[0]),
                                                    l = (
                                                        "touchmove" === e.type
                                                            ? o
                                                            : e
                                                    ).pageX,
                                                    o = (
                                                        "touchmove" === e.type
                                                            ? o
                                                            : e
                                                    ).pageY;
                                                if (e.preventedByNestedSwiper)
                                                    (s.startX = l),
                                                        (s.startY = o);
                                                else if (i.allowTouchMove) {
                                                    if (
                                                        a.isTouchEvent &&
                                                        n.touchReleaseOnEdges &&
                                                        !n.loop
                                                    )
                                                        if (i.isVertical()) {
                                                            if (
                                                                (o < s.startY &&
                                                                    i.translate <=
                                                                        i.maxTranslate()) ||
                                                                (o > s.startY &&
                                                                    i.translate >=
                                                                        i.minTranslate())
                                                            )
                                                                return (
                                                                    (a.isTouched =
                                                                        !1),
                                                                    void (a.isMoved =
                                                                        !1)
                                                                );
                                                        } else if (
                                                            (l < s.startX &&
                                                                i.translate <=
                                                                    i.maxTranslate()) ||
                                                            (l > s.startX &&
                                                                i.translate >=
                                                                    i.minTranslate())
                                                        )
                                                            return;
                                                    if (
                                                        a.isTouchEvent &&
                                                        t.activeElement &&
                                                        e.target ===
                                                            t.activeElement &&
                                                        z(e.target).is(
                                                            a.focusableElements
                                                        )
                                                    )
                                                        (a.isMoved = !0),
                                                            (i.allowClick = !1);
                                                    else if (
                                                        (a.allowTouchCallbacks &&
                                                            i.emit(
                                                                "touchMove",
                                                                e
                                                            ),
                                                        !(
                                                            e.targetTouches &&
                                                            1 <
                                                                e.targetTouches
                                                                    .length
                                                        ))
                                                    ) {
                                                        (s.currentX = l),
                                                            (s.currentY = o);
                                                        var t =
                                                                s.currentX -
                                                                s.startX,
                                                            d =
                                                                s.currentY -
                                                                s.startY;
                                                        if (
                                                            !(
                                                                i.params
                                                                    .threshold &&
                                                                Math.sqrt(
                                                                    Math.pow(
                                                                        t,
                                                                        2
                                                                    ) +
                                                                        Math.pow(
                                                                            d,
                                                                            2
                                                                        )
                                                                ) <
                                                                    i.params
                                                                        .threshold
                                                            )
                                                        )
                                                            if (
                                                                (void 0 ===
                                                                    a.isScrolling &&
                                                                    ((i.isHorizontal() &&
                                                                        s.currentY ===
                                                                            s.startY) ||
                                                                    (i.isVertical() &&
                                                                        s.currentX ===
                                                                            s.startX)
                                                                        ? (a.isScrolling =
                                                                              !1)
                                                                        : 25 <=
                                                                              t *
                                                                                  t +
                                                                                  d *
                                                                                      d &&
                                                                          ((c =
                                                                              (180 *
                                                                                  Math.atan2(
                                                                                      Math.abs(
                                                                                          d
                                                                                      ),
                                                                                      Math.abs(
                                                                                          t
                                                                                      )
                                                                                  )) /
                                                                              Math.PI),
                                                                          (a.isScrolling =
                                                                              i.isHorizontal()
                                                                                  ? c >
                                                                                    n.touchAngle
                                                                                  : 90 -
                                                                                        c >
                                                                                    n.touchAngle))),
                                                                a.isScrolling &&
                                                                    i.emit(
                                                                        "touchMoveOpposite",
                                                                        e
                                                                    ),
                                                                void 0 !==
                                                                    a.startMoving ||
                                                                    (s.currentX ===
                                                                        s.startX &&
                                                                        s.currentY ===
                                                                            s.startY) ||
                                                                    (a.startMoving =
                                                                        !0),
                                                                a.isScrolling)
                                                            )
                                                                a.isTouched =
                                                                    !1;
                                                            else if (
                                                                a.startMoving
                                                            ) {
                                                                (i.allowClick =
                                                                    !1),
                                                                    !n.cssMode &&
                                                                        e.cancelable &&
                                                                        e.preventDefault(),
                                                                    n.touchMoveStopPropagation &&
                                                                        !n.nested &&
                                                                        e.stopPropagation(),
                                                                    a.isMoved ||
                                                                        (n.loop &&
                                                                            !n.cssMode &&
                                                                            i.loopFix(),
                                                                        (a.startTranslate =
                                                                            i.getTranslate()),
                                                                        i.setTransition(
                                                                            0
                                                                        ),
                                                                        i.animating &&
                                                                            i.$wrapperEl.trigger(
                                                                                "webkitTransitionEnd transitionend"
                                                                            ),
                                                                        (a.allowMomentumBounce =
                                                                            !1),
                                                                        !n.grabCursor ||
                                                                            (!0 !==
                                                                                i.allowSlideNext &&
                                                                                !0 !==
                                                                                    i.allowSlidePrev) ||
                                                                            i.setGrabCursor(
                                                                                !0
                                                                            ),
                                                                        i.emit(
                                                                            "sliderFirstMove",
                                                                            e
                                                                        )),
                                                                    i.emit(
                                                                        "sliderMove",
                                                                        e
                                                                    ),
                                                                    (a.isMoved =
                                                                        !0);
                                                                var c =
                                                                        i.isHorizontal()
                                                                            ? t
                                                                            : d,
                                                                    t =
                                                                        ((s.diff =
                                                                            c),
                                                                        (c *=
                                                                            n.touchRatio),
                                                                        (i.swipeDirection =
                                                                            0 <
                                                                            (c =
                                                                                r
                                                                                    ? -c
                                                                                    : c)
                                                                                ? "prev"
                                                                                : "next"),
                                                                        (a.currentTranslate =
                                                                            c +
                                                                            a.startTranslate),
                                                                        !0),
                                                                    d =
                                                                        n.resistanceRatio;
                                                                if (
                                                                    (n.touchReleaseOnEdges &&
                                                                        (d = 0),
                                                                    0 < c &&
                                                                    a.currentTranslate >
                                                                        i.minTranslate()
                                                                        ? ((t =
                                                                              !1),
                                                                          n.resistance &&
                                                                              (a.currentTranslate =
                                                                                  i.minTranslate() -
                                                                                  1 +
                                                                                  Math.pow(
                                                                                      -i.minTranslate() +
                                                                                          a.startTranslate +
                                                                                          c,
                                                                                      d
                                                                                  )))
                                                                        : c <
                                                                              0 &&
                                                                          a.currentTranslate <
                                                                              i.maxTranslate() &&
                                                                          ((t =
                                                                              !1),
                                                                          n.resistance) &&
                                                                          (a.currentTranslate =
                                                                              i.maxTranslate() +
                                                                              1 -
                                                                              Math.pow(
                                                                                  i.maxTranslate() -
                                                                                      a.startTranslate -
                                                                                      c,
                                                                                  d
                                                                              )),
                                                                    t &&
                                                                        (e.preventedByNestedSwiper =
                                                                            !0),
                                                                    !i.allowSlideNext &&
                                                                        "next" ===
                                                                            i.swipeDirection &&
                                                                        a.currentTranslate <
                                                                            a.startTranslate &&
                                                                        (a.currentTranslate =
                                                                            a.startTranslate),
                                                                    !i.allowSlidePrev &&
                                                                        "prev" ===
                                                                            i.swipeDirection &&
                                                                        a.currentTranslate >
                                                                            a.startTranslate &&
                                                                        (a.currentTranslate =
                                                                            a.startTranslate),
                                                                    i.allowSlidePrev ||
                                                                        i.allowSlideNext ||
                                                                        (a.currentTranslate =
                                                                            a.startTranslate),
                                                                    0 <
                                                                        n.threshold)
                                                                ) {
                                                                    if (
                                                                        !(
                                                                            Math.abs(
                                                                                c
                                                                            ) >
                                                                                n.threshold ||
                                                                            a.allowThresholdMove
                                                                        )
                                                                    )
                                                                        return void (a.currentTranslate =
                                                                            a.startTranslate);
                                                                    if (
                                                                        !a.allowThresholdMove
                                                                    )
                                                                        return (
                                                                            (a.allowThresholdMove =
                                                                                !0),
                                                                            (s.startX =
                                                                                s.currentX),
                                                                            (s.startY =
                                                                                s.currentY),
                                                                            (a.currentTranslate =
                                                                                a.startTranslate),
                                                                            void (s.diff =
                                                                                i.isHorizontal()
                                                                                    ? s.currentX -
                                                                                      s.startX
                                                                                    : s.currentY -
                                                                                      s.startY)
                                                                        );
                                                                }
                                                                n.followFinger &&
                                                                    !n.cssMode &&
                                                                    (((n.freeMode &&
                                                                        n
                                                                            .freeMode
                                                                            .enabled &&
                                                                        i.freeMode) ||
                                                                        n.watchSlidesProgress) &&
                                                                        (i.updateActiveIndex(),
                                                                        i.updateSlidesClasses()),
                                                                    i.params
                                                                        .freeMode &&
                                                                        n
                                                                            .freeMode
                                                                            .enabled &&
                                                                        i.freeMode &&
                                                                        i.freeMode.onTouchMove(),
                                                                    i.updateProgress(
                                                                        a.currentTranslate
                                                                    ),
                                                                    i.setTranslate(
                                                                        a.currentTranslate
                                                                    ));
                                                            }
                                                    }
                                                } else
                                                    z(e.target).is(
                                                        a.focusableElements
                                                    ) || (i.allowClick = !1),
                                                        a.isTouched &&
                                                            (Object.assign(s, {
                                                                startX: l,
                                                                startY: o,
                                                                currentX: l,
                                                                currentY: o,
                                                            }),
                                                            (a.touchStartTime =
                                                                S()));
                                            }
                                        } else
                                            a.startMoving &&
                                                a.isScrolling &&
                                                i.emit("touchMoveOpposite", e);
                                }.bind(e)),
                                (e.onTouchEnd = function (e) {
                                    var t = this,
                                        i = t.touchEventsData,
                                        a = t.params,
                                        n = t.touches,
                                        s = t.rtlTranslate,
                                        r = t.slidesGrid;
                                    if (t.enabled)
                                        if (
                                            (e.originalEvent &&
                                                (e = e.originalEvent),
                                            i.allowTouchCallbacks &&
                                                t.emit("touchEnd", e),
                                            (i.allowTouchCallbacks = !1),
                                            i.isTouched)
                                        ) {
                                            a.grabCursor &&
                                                i.isMoved &&
                                                i.isTouched &&
                                                (!0 === t.allowSlideNext ||
                                                    !0 === t.allowSlidePrev) &&
                                                t.setGrabCursor(!1);
                                            var o,
                                                l = S(),
                                                d = l - i.touchStartTime;
                                            if (
                                                (t.allowClick &&
                                                    ((f =
                                                        e.path ||
                                                        (e.composedPath &&
                                                            e.composedPath())),
                                                    t.updateClickedSlide(
                                                        (f && f[0]) || e.target
                                                    ),
                                                    t.emit("tap click", e),
                                                    d < 300) &&
                                                    l - i.lastClickTime < 300 &&
                                                    t.emit(
                                                        "doubleTap doubleClick",
                                                        e
                                                    ),
                                                (i.lastClickTime = S()),
                                                T(function () {
                                                    t.destroyed ||
                                                        (t.allowClick = !0);
                                                }),
                                                i.isTouched &&
                                                    i.isMoved &&
                                                    t.swipeDirection &&
                                                    0 !== n.diff &&
                                                    i.currentTranslate !==
                                                        i.startTranslate)
                                            ) {
                                                if (
                                                    ((i.isTouched = !1),
                                                    (i.isMoved = !1),
                                                    (i.startMoving = !1),
                                                    (o = a.followFinger
                                                        ? s
                                                            ? t.translate
                                                            : -t.translate
                                                        : -i.currentTranslate),
                                                    !a.cssMode)
                                                )
                                                    if (
                                                        t.params.freeMode &&
                                                        a.freeMode.enabled
                                                    )
                                                        t.freeMode.onTouchEnd({
                                                            currentPos: o,
                                                        });
                                                    else {
                                                        for (
                                                            var c = 0,
                                                                u =
                                                                    t
                                                                        .slidesSizesGrid[0],
                                                                p = 0;
                                                            p < r.length;
                                                            p +=
                                                                p <
                                                                a.slidesPerGroupSkip
                                                                    ? 1
                                                                    : a.slidesPerGroup
                                                        ) {
                                                            var h =
                                                                p <
                                                                a.slidesPerGroupSkip -
                                                                    1
                                                                    ? 1
                                                                    : a.slidesPerGroup;
                                                            void 0 !== r[p + h]
                                                                ? o >= r[p] &&
                                                                  o <
                                                                      r[
                                                                          p + h
                                                                      ] &&
                                                                  (u =
                                                                      r[
                                                                          (c =
                                                                              p) +
                                                                              h
                                                                      ] - r[p])
                                                                : o >= r[p] &&
                                                                  ((c = p),
                                                                  (u =
                                                                      r[
                                                                          r.length -
                                                                              1
                                                                      ] -
                                                                      r[
                                                                          r.length -
                                                                              2
                                                                      ]));
                                                        }
                                                        var f = null,
                                                            l = null,
                                                            n =
                                                                (a.rewind &&
                                                                    (t.isBeginning
                                                                        ? (l =
                                                                              t
                                                                                  .params
                                                                                  .virtual &&
                                                                              t
                                                                                  .params
                                                                                  .virtual
                                                                                  .enabled &&
                                                                              t.virtual
                                                                                  ? t
                                                                                        .virtual
                                                                                        .slides
                                                                                        .length -
                                                                                    1
                                                                                  : t
                                                                                        .slides
                                                                                        .length -
                                                                                    1)
                                                                        : t.isEnd &&
                                                                          (f = 0)),
                                                                (o - r[c]) / u),
                                                            s =
                                                                c <
                                                                a.slidesPerGroupSkip -
                                                                    1
                                                                    ? 1
                                                                    : a.slidesPerGroup;
                                                        d > a.longSwipesMs
                                                            ? a.longSwipes
                                                                ? ("next" ===
                                                                      t.swipeDirection &&
                                                                      (n >=
                                                                      a.longSwipesRatio
                                                                          ? t.slideTo(
                                                                                a.rewind &&
                                                                                    t.isEnd
                                                                                    ? f
                                                                                    : c +
                                                                                          s
                                                                            )
                                                                          : t.slideTo(
                                                                                c
                                                                            )),
                                                                  "prev" ===
                                                                      t.swipeDirection &&
                                                                      (n >
                                                                      1 -
                                                                          a.longSwipesRatio
                                                                          ? t.slideTo(
                                                                                c +
                                                                                    s
                                                                            )
                                                                          : null !==
                                                                                l &&
                                                                            n <
                                                                                0 &&
                                                                            Math.abs(
                                                                                n
                                                                            ) >
                                                                                a.longSwipesRatio
                                                                          ? t.slideTo(
                                                                                l
                                                                            )
                                                                          : t.slideTo(
                                                                                c
                                                                            )))
                                                                : t.slideTo(
                                                                      t.activeIndex
                                                                  )
                                                            : a.shortSwipes
                                                            ? !t.navigation ||
                                                              (e.target !==
                                                                  t.navigation
                                                                      .nextEl &&
                                                                  e.target !==
                                                                      t
                                                                          .navigation
                                                                          .prevEl)
                                                                ? ("next" ===
                                                                      t.swipeDirection &&
                                                                      t.slideTo(
                                                                          null !==
                                                                              f
                                                                              ? f
                                                                              : c +
                                                                                    s
                                                                      ),
                                                                  "prev" ===
                                                                      t.swipeDirection &&
                                                                      t.slideTo(
                                                                          null !==
                                                                              l
                                                                              ? l
                                                                              : c
                                                                      ))
                                                                : e.target ===
                                                                  t.navigation
                                                                      .nextEl
                                                                ? t.slideTo(
                                                                      c + s
                                                                  )
                                                                : t.slideTo(c)
                                                            : t.slideTo(
                                                                  t.activeIndex
                                                              );
                                                    }
                                            } else
                                                (i.isTouched = !1),
                                                    (i.isMoved = !1),
                                                    (i.startMoving = !1);
                                        } else
                                            i.isMoved &&
                                                a.grabCursor &&
                                                t.setGrabCursor(!1),
                                                (i.isMoved = !1),
                                                (i.startMoving = !1);
                                }.bind(e)),
                                i.cssMode &&
                                    (e.onScroll = function () {
                                        var e = this,
                                            t = e.wrapperEl,
                                            i = e.rtlTranslate;
                                        e.enabled &&
                                            ((e.previousTranslate =
                                                e.translate),
                                            e.isHorizontal()
                                                ? (e.translate = -t.scrollLeft)
                                                : (e.translate = -t.scrollTop),
                                            0 === e.translate &&
                                                (e.translate = 0),
                                            e.updateActiveIndex(),
                                            e.updateSlidesClasses(),
                                            (0 ==
                                            (t =
                                                e.maxTranslate() -
                                                e.minTranslate())
                                                ? 0
                                                : (e.translate -
                                                      e.minTranslate()) /
                                                  t) !== e.progress &&
                                                e.updateProgress(
                                                    i
                                                        ? -e.translate
                                                        : e.translate
                                                ),
                                            e.emit(
                                                "setTranslate",
                                                e.translate,
                                                !1
                                            ));
                                    }.bind(e)),
                                (e.onClick = function (e) {
                                    var t = this;
                                    t.enabled &&
                                        !t.allowClick &&
                                        (t.params.preventClicks &&
                                            e.preventDefault(),
                                        t.params.preventClicksPropagation) &&
                                        t.animating &&
                                        (e.stopPropagation(),
                                        e.stopImmediatePropagation());
                                }.bind(e)),
                                a.touch &&
                                    !c &&
                                    (t.addEventListener("touchstart", N),
                                    (c = !0)),
                                h(e, "on");
                        },
                        detachEvents: function () {
                            h(this, "off");
                        },
                    },
                    breakpoints: {
                        setBreakpoint: function () {
                            var e,
                                t,
                                i,
                                a,
                                n = this,
                                s = n.activeIndex,
                                r = n.initialized,
                                o = n.loopedSlides,
                                o = void 0 === o ? 0 : o,
                                l = n.params,
                                d = n.$el,
                                c = l.breakpoints;
                            c &&
                                0 !== Object.keys(c).length &&
                                (e = n.getBreakpoint(
                                    c,
                                    n.params.breakpointsBase,
                                    n.el
                                )) &&
                                n.currentBreakpoint !== e &&
                                ((c =
                                    (e in c ? c[e] : void 0) ||
                                    n.originalParams),
                                (i = f(n, l)),
                                (a = f(n, c)),
                                (t = l.enabled),
                                i && !a
                                    ? (d.removeClass(
                                          ""
                                              .concat(
                                                  l.containerModifierClass,
                                                  "grid "
                                              )
                                              .concat(
                                                  l.containerModifierClass,
                                                  "grid-column"
                                              )
                                      ),
                                      n.emitContainerClasses())
                                    : !i &&
                                      a &&
                                      (d.addClass(
                                          "".concat(
                                              l.containerModifierClass,
                                              "grid"
                                          )
                                      ),
                                      ((c.grid.fill &&
                                          "column" === c.grid.fill) ||
                                          (!c.grid.fill &&
                                              "column" === l.grid.fill)) &&
                                          d.addClass(
                                              "".concat(
                                                  l.containerModifierClass,
                                                  "grid-column"
                                              )
                                          ),
                                      n.emitContainerClasses()),
                                (i =
                                    c.direction && c.direction !== l.direction),
                                (a =
                                    l.loop &&
                                    (c.slidesPerView !== l.slidesPerView || i)),
                                i && r && n.changeDirection(),
                                C(n.params, c),
                                (d = n.params.enabled),
                                Object.assign(n, {
                                    allowTouchMove: n.params.allowTouchMove,
                                    allowSlideNext: n.params.allowSlideNext,
                                    allowSlidePrev: n.params.allowSlidePrev,
                                }),
                                t && !d ? n.disable() : !t && d && n.enable(),
                                (n.currentBreakpoint = e),
                                n.emit("_beforeBreakpoint", c),
                                a &&
                                    r &&
                                    (n.loopDestroy(),
                                    n.loopCreate(),
                                    n.updateSlides(),
                                    n.slideTo(s - o + n.loopedSlides, 0, !1)),
                                n.emit("breakpoint", c));
                        },
                        getBreakpoint: function (e, t, i) {
                            if (
                                (void 0 === t && (t = "window"),
                                e && ("container" !== t || i))
                            ) {
                                var a = !1,
                                    n = L(),
                                    s =
                                        "window" === t
                                            ? n.innerHeight
                                            : i.clientHeight,
                                    r = Object.keys(e).map(function (e) {
                                        var t;
                                        return "string" == typeof e &&
                                            0 === e.indexOf("@")
                                            ? ((t = parseFloat(e.substr(1))),
                                              { value: s * t, point: e })
                                            : { value: e, point: e };
                                    });
                                r.sort(function (e, t) {
                                    return (
                                        parseInt(e.value, 10) -
                                        parseInt(t.value, 10)
                                    );
                                });
                                for (var o = 0; o < r.length; o += 1) {
                                    var l = r[o],
                                        d = l.point,
                                        l = l.value;
                                    "window" === t
                                        ? n.matchMedia(
                                              "(min-width: ".concat(l, "px)")
                                          ).matches && (a = d)
                                        : l <= i.clientWidth && (a = d);
                                }
                                return a || "max";
                            }
                        },
                    },
                    checkOverflow: {
                        checkOverflow: function () {
                            var e,
                                t = this,
                                i = t.isLocked,
                                a = t.params,
                                n = a.slidesOffsetBefore;
                            n
                                ? ((e = t.slides.length - 1),
                                  (e =
                                      t.slidesGrid[e] +
                                      t.slidesSizesGrid[e] +
                                      2 * n),
                                  (t.isLocked = t.size > e))
                                : (t.isLocked = 1 === t.snapGrid.length),
                                !0 === a.allowSlideNext &&
                                    (t.allowSlideNext = !t.isLocked),
                                !0 === a.allowSlidePrev &&
                                    (t.allowSlidePrev = !t.isLocked),
                                i && i !== t.isLocked && (t.isEnd = !1),
                                i !== t.isLocked &&
                                    t.emit(t.isLocked ? "lock" : "unlock");
                        },
                    },
                    classes: {
                        addClasses: function () {
                            var i,
                                a,
                                e = this,
                                t = e.classNames,
                                n = e.params,
                                s = e.rtl,
                                r = e.$el,
                                o = e.device,
                                l = e.support,
                                s =
                                    ((l = [
                                        "initialized",
                                        n.direction,
                                        { "pointer-events": !l.touch },
                                        {
                                            "free-mode":
                                                e.params.freeMode &&
                                                n.freeMode.enabled,
                                        },
                                        { autoheight: n.autoHeight },
                                        { rtl: s },
                                        { grid: n.grid && 1 < n.grid.rows },
                                        {
                                            "grid-column":
                                                n.grid &&
                                                1 < n.grid.rows &&
                                                "column" === n.grid.fill,
                                        },
                                        { android: o.android },
                                        { ios: o.ios },
                                        { "css-mode": n.cssMode },
                                        {
                                            centered:
                                                n.cssMode && n.centeredSlides,
                                        },
                                        {
                                            "watch-progress":
                                                n.watchSlidesProgress,
                                        },
                                    ]),
                                    (i = n.containerModifierClass),
                                    (a = []),
                                    l.forEach(function (t) {
                                        "object" == _typeof(t)
                                            ? Object.keys(t).forEach(function (
                                                  e
                                              ) {
                                                  t[e] && a.push(i + e);
                                              })
                                            : "string" == typeof t &&
                                              a.push(i + t);
                                    }),
                                    a);
                            t.push.apply(t, _toConsumableArray(s)),
                                r.addClass(_toConsumableArray(t).join(" ")),
                                e.emitContainerClasses();
                        },
                        removeClasses: function () {
                            var e = this.$el,
                                t = this.classNames;
                            e.removeClass(t.join(" ")),
                                this.emitContainerClasses();
                        },
                    },
                    images: {
                        loadImage: function (e, t, i, a, n, s) {
                            var r = L();
                            function o() {
                                s && s();
                            }
                            !(z(e).parent("picture")[0] || (e.complete && n)) &&
                            t
                                ? (((e = new r.Image()).onload = o),
                                  (e.onerror = o),
                                  a && (e.sizes = a),
                                  i && (e.srcset = i),
                                  t && (e.src = t))
                                : o();
                        },
                        preloadImages: function () {
                            var e = this;
                            function t() {
                                null != e &&
                                    e &&
                                    !e.destroyed &&
                                    (void 0 !== e.imagesLoaded &&
                                        (e.imagesLoaded += 1),
                                    e.imagesLoaded === e.imagesToLoad.length) &&
                                    (e.params.updateOnImagesReady && e.update(),
                                    e.emit("imagesReady"));
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                                var a = e.imagesToLoad[i];
                                e.loadImage(
                                    a,
                                    a.currentSrc || a.getAttribute("src"),
                                    a.srcset || a.getAttribute("srcset"),
                                    a.sizes || a.getAttribute("sizes"),
                                    !0,
                                    t
                                );
                            }
                        },
                    },
                },
                A = {},
                v = (function () {
                    function w() {
                        var e, t;
                        _classCallCheck(this, w);
                        for (
                            var i,
                                s,
                                a,
                                n,
                                r,
                                o,
                                l,
                                d,
                                c,
                                u,
                                p,
                                h,
                                f,
                                m,
                                v = arguments.length,
                                g = new Array(v),
                                y = 0;
                            y < v;
                            y++
                        )
                            g[y] = arguments[y];
                        return (
                            (t =
                                1 === g.length &&
                                g[0].constructor &&
                                "Object" ===
                                    Object.prototype.toString
                                        .call(g[0])
                                        .slice(8, -1)
                                    ? g[0]
                                    : ((e = (a = _slicedToArray(g, 2))[0]),
                                      a[1])),
                            (t = C({}, (t = t || {}))),
                            e && !t.el && (t.el = e),
                            t.el && 1 < z(t.el).length
                                ? ((i = []),
                                  z(t.el).each(function (e) {
                                      e = C({}, t, { el: e });
                                      i.push(new w(e));
                                  }),
                                  i)
                                : (((s = this).__swiper__ = !0),
                                  (s.support = k()),
                                  (s.device =
                                      (void 0 ===
                                          (a = { userAgent: t.userAgent }) &&
                                          (a = {}),
                                      b ||
                                          ((a = (void 0 === a ? {} : a)
                                              .userAgent),
                                          (n = k()),
                                          (h = L()),
                                          (r = h.navigator.platform),
                                          (a = a || h.navigator.userAgent),
                                          (o = { ios: !1, android: !1 }),
                                          (l = h.screen.width),
                                          (h = h.screen.height),
                                          (f = a.match(
                                              /(Android);?[\s\/]+([\d.]+)?/
                                          )),
                                          (d = a.match(/(iPad).*OS\s([\d_]+)/)),
                                          (c = a.match(
                                              /(iPod)(.*OS\s([\d_]+))?/
                                          )),
                                          (u =
                                              !d &&
                                              a.match(
                                                  /(iPhone\sOS|iOS)\s([\d_]+)/
                                              )),
                                          (m = "Win32" === r),
                                          (r = "MacIntel" === r),
                                          !d &&
                                              r &&
                                              n.touch &&
                                              0 <=
                                                  [
                                                      "1024x1366",
                                                      "1366x1024",
                                                      "834x1194",
                                                      "1194x834",
                                                      "834x1112",
                                                      "1112x834",
                                                      "768x1024",
                                                      "1024x768",
                                                      "820x1180",
                                                      "1180x820",
                                                      "810x1080",
                                                      "1080x810",
                                                  ].indexOf(
                                                      ""
                                                          .concat(l, "x")
                                                          .concat(h)
                                                  ) &&
                                              (d = (d =
                                                  a.match(
                                                      /(Version)\/([\d.]+)/
                                                  )) || [0, 1, "13_0_0"]),
                                          f &&
                                              !m &&
                                              ((o.os = "android"),
                                              (o.android = !0)),
                                          (d || u || c) &&
                                              ((o.os = "ios"), (o.ios = !0)),
                                          (b = o)),
                                      b)),
                                  (s.browser =
                                      (x ||
                                          ((r = L()),
                                          (x = {
                                              isSafari:
                                                  0 <=
                                                      (n =
                                                          r.navigator.userAgent.toLowerCase()).indexOf(
                                                          "safari"
                                                      ) &&
                                                  n.indexOf("chrome") < 0 &&
                                                  n.indexOf("android") < 0,
                                              isWebView:
                                                  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                                                      r.navigator.userAgent
                                                  ),
                                          })),
                                      x)),
                                  (s.eventsListeners = {}),
                                  (s.eventsAnyListeners = []),
                                  (s.modules = _toConsumableArray(
                                      s.__modules__
                                  )),
                                  t.modules &&
                                      Array.isArray(t.modules) &&
                                      (l = s.modules).push.apply(
                                          l,
                                          _toConsumableArray(t.modules)
                                      ),
                                  (p = {}),
                                  s.modules.forEach(function (e) {
                                      var a, n;
                                      e({
                                          swiper: s,
                                          extendParams:
                                              ((a = t),
                                              (n = p),
                                              function (e) {
                                                  void 0 === e && (e = {});
                                                  var t = Object.keys(e)[0],
                                                      i = e[t];
                                                  "object" == _typeof(i) &&
                                                      null !== i &&
                                                      (0 <=
                                                          [
                                                              "navigation",
                                                              "pagination",
                                                              "scrollbar",
                                                          ].indexOf(t) &&
                                                          !0 === a[t] &&
                                                          (a[t] = { auto: !0 }),
                                                      t in a) &&
                                                      "enabled" in i &&
                                                      (!0 === a[t] &&
                                                          (a[t] = {
                                                              enabled: !0,
                                                          }),
                                                      "object" !=
                                                          _typeof(a[t]) ||
                                                          "enabled" in a[t] ||
                                                          (a[t].enabled = !0),
                                                      a[t] ||
                                                          (a[t] = {
                                                              enabled: !1,
                                                          })),
                                                      C(n, e);
                                              }),
                                          on: s.on.bind(s),
                                          once: s.once.bind(s),
                                          off: s.off.bind(s),
                                          emit: s.emit.bind(s),
                                      });
                                  }),
                                  (h = C({}, P, p)),
                                  (s.params = C({}, h, A, t)),
                                  (s.originalParams = C({}, s.params)),
                                  (s.passedParams = C({}, t)),
                                  s.params &&
                                      s.params.on &&
                                      Object.keys(s.params.on).forEach(
                                          function (e) {
                                              s.on(e, s.params.on[e]);
                                          }
                                      ),
                                  s.params &&
                                      s.params.onAny &&
                                      s.onAny(s.params.onAny),
                                  (s.$ = z),
                                  Object.assign(s, {
                                      enabled: s.params.enabled,
                                      el: e,
                                      classNames: [],
                                      slides: z(),
                                      slidesGrid: [],
                                      snapGrid: [],
                                      slidesSizesGrid: [],
                                      isHorizontal: function () {
                                          return (
                                              "horizontal" ===
                                              s.params.direction
                                          );
                                      },
                                      isVertical: function () {
                                          return (
                                              "vertical" === s.params.direction
                                          );
                                      },
                                      activeIndex: 0,
                                      realIndex: 0,
                                      isBeginning: !0,
                                      isEnd: !1,
                                      translate: 0,
                                      previousTranslate: 0,
                                      progress: 0,
                                      velocity: 0,
                                      animating: !1,
                                      allowSlideNext: s.params.allowSlideNext,
                                      allowSlidePrev: s.params.allowSlidePrev,
                                      touchEvents:
                                          ((f = [
                                              "touchstart",
                                              "touchmove",
                                              "touchend",
                                              "touchcancel",
                                          ]),
                                          (m = [
                                              "pointerdown",
                                              "pointermove",
                                              "pointerup",
                                          ]),
                                          (s.touchEventsTouch = {
                                              start: f[0],
                                              move: f[1],
                                              end: f[2],
                                              cancel: f[3],
                                          }),
                                          (s.touchEventsDesktop = {
                                              start: m[0],
                                              move: m[1],
                                              end: m[2],
                                          }),
                                          s.support.touch ||
                                          !s.params.simulateTouch
                                              ? s.touchEventsTouch
                                              : s.touchEventsDesktop),
                                      touchEventsData: {
                                          isTouched: void 0,
                                          isMoved: void 0,
                                          allowTouchCallbacks: void 0,
                                          touchStartTime: void 0,
                                          isScrolling: void 0,
                                          currentTranslate: void 0,
                                          startTranslate: void 0,
                                          allowThresholdMove: void 0,
                                          focusableElements:
                                              s.params.focusableElements,
                                          lastClickTime: S(),
                                          clickTimeout: void 0,
                                          velocities: [],
                                          allowMomentumBounce: void 0,
                                          isTouchEvent: void 0,
                                          startMoving: void 0,
                                      },
                                      allowClick: !0,
                                      allowTouchMove: s.params.allowTouchMove,
                                      touches: {
                                          startX: 0,
                                          startY: 0,
                                          currentX: 0,
                                          currentY: 0,
                                          diff: 0,
                                      },
                                      imagesToLoad: [],
                                      imagesLoaded: 0,
                                  }),
                                  s.emit("_swiper"),
                                  s.params.init && s.init(),
                                  s)
                        );
                    }
                    return (
                        _createClass(
                            w,
                            [
                                {
                                    key: "enable",
                                    value: function () {
                                        var e = this;
                                        e.enabled ||
                                            ((e.enabled = !0),
                                            e.params.grabCursor &&
                                                e.setGrabCursor(),
                                            e.emit("enable"));
                                    },
                                },
                                {
                                    key: "disable",
                                    value: function () {
                                        var e = this;
                                        e.enabled &&
                                            ((e.enabled = !1),
                                            e.params.grabCursor &&
                                                e.unsetGrabCursor(),
                                            e.emit("disable"));
                                    },
                                },
                                {
                                    key: "setProgress",
                                    value: function (e, t) {
                                        var i = this,
                                            a =
                                                ((e = Math.min(
                                                    Math.max(e, 0),
                                                    1
                                                )),
                                                i.minTranslate()),
                                            e = (i.maxTranslate() - a) * e + a;
                                        i.translateTo(e, void 0 === t ? 0 : t),
                                            i.updateActiveIndex(),
                                            i.updateSlidesClasses();
                                    },
                                },
                                {
                                    key: "emitContainerClasses",
                                    value: function () {
                                        var e,
                                            t = this;
                                        t.params._emitClasses &&
                                            t.el &&
                                            ((e = t.el.className
                                                .split(" ")
                                                .filter(function (e) {
                                                    return (
                                                        0 ===
                                                            e.indexOf(
                                                                "swiper"
                                                            ) ||
                                                        0 ===
                                                            e.indexOf(
                                                                t.params
                                                                    .containerModifierClass
                                                            )
                                                    );
                                                })),
                                            t.emit(
                                                "_containerClasses",
                                                e.join(" ")
                                            ));
                                    },
                                },
                                {
                                    key: "getSlideClasses",
                                    value: function (e) {
                                        var t = this;
                                        return t.destroyed
                                            ? ""
                                            : e.className
                                                  .split(" ")
                                                  .filter(function (e) {
                                                      return (
                                                          0 ===
                                                              e.indexOf(
                                                                  "swiper-slide"
                                                              ) ||
                                                          0 ===
                                                              e.indexOf(
                                                                  t.params
                                                                      .slideClass
                                                              )
                                                      );
                                                  })
                                                  .join(" ");
                                    },
                                },
                                {
                                    key: "emitSlidesClasses",
                                    value: function () {
                                        var i,
                                            a = this;
                                        a.params._emitClasses &&
                                            a.el &&
                                            ((i = []),
                                            a.slides.each(function (e) {
                                                var t = a.getSlideClasses(e);
                                                i.push({
                                                    slideEl: e,
                                                    classNames: t,
                                                }),
                                                    a.emit("_slideClass", e, t);
                                            }),
                                            a.emit("_slideClasses", i));
                                    },
                                },
                                {
                                    key: "slidesPerViewDynamic",
                                    value: function (e, t) {
                                        void 0 === e && (e = "current"),
                                            void 0 === t && (t = !1);
                                        var i = this.params,
                                            a = this.slides,
                                            n = this.slidesGrid,
                                            s = this.slidesSizesGrid,
                                            r = this.size,
                                            o = this.activeIndex,
                                            l = 1;
                                        if (i.centeredSlides) {
                                            for (
                                                var d,
                                                    c = a[o].swiperSlideSize,
                                                    u = o + 1;
                                                u < a.length;
                                                u += 1
                                            )
                                                a[u] &&
                                                    !d &&
                                                    ((l += 1),
                                                    r <
                                                        (c +=
                                                            a[u]
                                                                .swiperSlideSize)) &&
                                                    (d = !0);
                                            for (var p = o - 1; 0 <= p; --p)
                                                a[p] &&
                                                    !d &&
                                                    ((l += 1),
                                                    r <
                                                        (c +=
                                                            a[p]
                                                                .swiperSlideSize)) &&
                                                    (d = !0);
                                        } else if ("current" === e)
                                            for (
                                                var h = o + 1;
                                                h < a.length;
                                                h += 1
                                            )
                                                (t
                                                    ? n[h] + s[h] - n[o] < r
                                                    : n[h] - n[o] < r) &&
                                                    (l += 1);
                                        else
                                            for (var f = o - 1; 0 <= f; --f)
                                                n[o] - n[f] < r && (l += 1);
                                        return l;
                                    },
                                },
                                {
                                    key: "update",
                                    value: function () {
                                        var e,
                                            t,
                                            i = this;
                                        function a() {
                                            var e = i.rtlTranslate
                                                    ? -1 * i.translate
                                                    : i.translate,
                                                e = Math.min(
                                                    Math.max(
                                                        e,
                                                        i.maxTranslate()
                                                    ),
                                                    i.minTranslate()
                                                );
                                            i.setTranslate(e),
                                                i.updateActiveIndex(),
                                                i.updateSlidesClasses();
                                        }
                                        i &&
                                            !i.destroyed &&
                                            ((e = i.snapGrid),
                                            (t = i.params).breakpoints &&
                                                i.setBreakpoint(),
                                            i.updateSize(),
                                            i.updateSlides(),
                                            i.updateProgress(),
                                            i.updateSlidesClasses(),
                                            i.params.freeMode &&
                                            i.params.freeMode.enabled
                                                ? (a(),
                                                  i.params.autoHeight &&
                                                      i.updateAutoHeight())
                                                : (("auto" ===
                                                      i.params.slidesPerView ||
                                                      1 <
                                                          i.params
                                                              .slidesPerView) &&
                                                  i.isEnd &&
                                                  !i.params.centeredSlides
                                                      ? i.slideTo(
                                                            i.slides.length - 1,
                                                            0,
                                                            !1,
                                                            !0
                                                        )
                                                      : i.slideTo(
                                                            i.activeIndex,
                                                            0,
                                                            !1,
                                                            !0
                                                        )) || a(),
                                            t.watchOverflow &&
                                                e !== i.snapGrid &&
                                                i.checkOverflow(),
                                            i.emit("update"));
                                    },
                                },
                                {
                                    key: "changeDirection",
                                    value: function (t, e) {
                                        void 0 === e && (e = !0);
                                        var i = this,
                                            a = i.params.direction;
                                        return (
                                            (t =
                                                t ||
                                                ("horizontal" === a
                                                    ? "vertical"
                                                    : "horizontal")) === a ||
                                                ("horizontal" !== t &&
                                                    "vertical" !== t) ||
                                                (i.$el
                                                    .removeClass(
                                                        ""
                                                            .concat(
                                                                i.params
                                                                    .containerModifierClass
                                                            )
                                                            .concat(a)
                                                    )
                                                    .addClass(
                                                        ""
                                                            .concat(
                                                                i.params
                                                                    .containerModifierClass
                                                            )
                                                            .concat(t)
                                                    ),
                                                i.emitContainerClasses(),
                                                (i.params.direction = t),
                                                i.slides.each(function (e) {
                                                    "vertical" === t
                                                        ? (e.style.width = "")
                                                        : (e.style.height = "");
                                                }),
                                                i.emit("changeDirection"),
                                                e && i.update()),
                                            i
                                        );
                                    },
                                },
                                {
                                    key: "mount",
                                    value: function (e) {
                                        var t = this;
                                        if (!t.mounted) {
                                            var i = z(e || t.params.el);
                                            if (!(e = i[0])) return !1;
                                            e.swiper = t;
                                            var a,
                                                n = function () {
                                                    return ".".concat(
                                                        (
                                                            t.params
                                                                .wrapperClass ||
                                                            ""
                                                        )
                                                            .trim()
                                                            .split(" ")
                                                            .join(".")
                                                    );
                                                },
                                                s =
                                                    e &&
                                                    e.shadowRoot &&
                                                    e.shadowRoot.querySelector
                                                        ? (((a = z(
                                                              e.shadowRoot.querySelector(
                                                                  n()
                                                              )
                                                          )).children =
                                                              function (e) {
                                                                  return i.children(
                                                                      e
                                                                  );
                                                              }),
                                                          a)
                                                        : (i.children
                                                              ? i
                                                              : z(i)
                                                          ).children(n());
                                            0 === s.length &&
                                                t.params.createElements &&
                                                ((a = E().createElement("div")),
                                                (s = z(a)),
                                                (a.className =
                                                    t.params.wrapperClass),
                                                i.append(a),
                                                i
                                                    .children(
                                                        ".".concat(
                                                            t.params.slideClass
                                                        )
                                                    )
                                                    .each(function (e) {
                                                        s.append(e);
                                                    })),
                                                Object.assign(t, {
                                                    $el: i,
                                                    el: e,
                                                    $wrapperEl: s,
                                                    wrapperEl: s[0],
                                                    mounted: !0,
                                                    rtl:
                                                        "rtl" ===
                                                            e.dir.toLowerCase() ||
                                                        "rtl" ===
                                                            i.css("direction"),
                                                    rtlTranslate:
                                                        "horizontal" ===
                                                            t.params
                                                                .direction &&
                                                        ("rtl" ===
                                                            e.dir.toLowerCase() ||
                                                            "rtl" ===
                                                                i.css(
                                                                    "direction"
                                                                )),
                                                    wrongRTL:
                                                        "-webkit-box" ===
                                                        s.css("display"),
                                                });
                                        }
                                        return !0;
                                    },
                                },
                                {
                                    key: "init",
                                    value: function (e) {
                                        var t = this;
                                        return (
                                            t.initialized ||
                                                (!1 !== t.mount(e) &&
                                                    (t.emit("beforeInit"),
                                                    t.params.breakpoints &&
                                                        t.setBreakpoint(),
                                                    t.addClasses(),
                                                    t.params.loop &&
                                                        t.loopCreate(),
                                                    t.updateSize(),
                                                    t.updateSlides(),
                                                    t.params.watchOverflow &&
                                                        t.checkOverflow(),
                                                    t.params.grabCursor &&
                                                        t.enabled &&
                                                        t.setGrabCursor(),
                                                    t.params.preloadImages &&
                                                        t.preloadImages(),
                                                    t.params.loop
                                                        ? t.slideTo(
                                                              t.params
                                                                  .initialSlide +
                                                                  t.loopedSlides,
                                                              0,
                                                              t.params
                                                                  .runCallbacksOnInit,
                                                              !1,
                                                              !0
                                                          )
                                                        : t.slideTo(
                                                              t.params
                                                                  .initialSlide,
                                                              0,
                                                              t.params
                                                                  .runCallbacksOnInit,
                                                              !1,
                                                              !0
                                                          ),
                                                    t.attachEvents(),
                                                    (t.initialized = !0),
                                                    t.emit("init"),
                                                    t.emit("afterInit"))),
                                            t
                                        );
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function (e, t) {
                                        void 0 === e && (e = !0),
                                            void 0 === t && (t = !0);
                                        var i,
                                            a = this,
                                            n = a.params,
                                            s = a.$el,
                                            r = a.$wrapperEl,
                                            o = a.slides;
                                        return (
                                            void 0 === a.params ||
                                                a.destroyed ||
                                                (a.emit("beforeDestroy"),
                                                (a.initialized = !1),
                                                a.detachEvents(),
                                                n.loop && a.loopDestroy(),
                                                t &&
                                                    (a.removeClasses(),
                                                    s.removeAttr("style"),
                                                    r.removeAttr("style"),
                                                    o) &&
                                                    o.length &&
                                                    o
                                                        .removeClass(
                                                            [
                                                                n.slideVisibleClass,
                                                                n.slideActiveClass,
                                                                n.slideNextClass,
                                                                n.slidePrevClass,
                                                            ].join(" ")
                                                        )
                                                        .removeAttr("style")
                                                        .removeAttr(
                                                            "data-swiper-slide-index"
                                                        ),
                                                a.emit("destroy"),
                                                Object.keys(
                                                    a.eventsListeners
                                                ).forEach(function (e) {
                                                    a.off(e);
                                                }),
                                                !1 !== e &&
                                                    ((a.$el[0].swiper = null),
                                                    (i = a),
                                                    Object.keys(i).forEach(
                                                        function (e) {
                                                            try {
                                                                i[e] = null;
                                                            } catch (e) {}
                                                            try {
                                                                delete i[e];
                                                            } catch (e) {}
                                                        }
                                                    )),
                                                (a.destroyed = !0)),
                                            null
                                        );
                                    },
                                },
                            ],
                            [
                                {
                                    key: "extendDefaults",
                                    value: function (e) {
                                        C(A, e);
                                    },
                                },
                                {
                                    key: "extendedDefaults",
                                    get: function () {
                                        return A;
                                    },
                                },
                                {
                                    key: "defaults",
                                    get: function () {
                                        return P;
                                    },
                                },
                                {
                                    key: "installModule",
                                    value: function (e) {
                                        var t = (w.prototype.__modules__ = w
                                            .prototype.__modules__
                                            ? w.prototype.__modules__
                                            : []);
                                        "function" == typeof e &&
                                            t.indexOf(e) < 0 &&
                                            t.push(e);
                                    },
                                },
                                {
                                    key: "use",
                                    value: function (e) {
                                        return (
                                            Array.isArray(e)
                                                ? e.forEach(function (e) {
                                                      return w.installModule(e);
                                                  })
                                                : w.installModule(e),
                                            w
                                        );
                                    },
                                },
                            ]
                        ),
                        w
                    );
                })();
            function O(i, a, n, s) {
                var r = E();
                return (
                    i.params.createElements &&
                        Object.keys(s).forEach(function (e) {
                            var t;
                            n[e] ||
                                !0 !== n.auto ||
                                ((t = i.$el.children(".".concat(s[e]))[0]) ||
                                    (((t = r.createElement("div")).className =
                                        s[e]),
                                    i.$el.append(t)),
                                (n[e] = t),
                                (a[e] = t));
                        }),
                    n
                );
            }
            function $(e) {
                return ".".concat(
                    (e = void 0 === e ? "" : e)
                        .trim()
                        .replace(/([\.:!\/])/g, "\\$1")
                        .replace(/ /g, ".")
                );
            }
            function g(e) {
                var t,
                    i = e.effect,
                    a = e.swiper,
                    n = e.on,
                    s = e.setTranslate,
                    r = e.setTransition,
                    o = e.overwriteParams,
                    l = e.perspective,
                    d = e.recreateShadows,
                    c = e.getEffectParams;
                n("beforeInit", function () {
                    var e;
                    a.params.effect === i &&
                        (a.classNames.push(
                            "".concat(a.params.containerModifierClass).concat(i)
                        ),
                        l &&
                            l() &&
                            a.classNames.push(
                                "".concat(a.params.containerModifierClass, "3d")
                            ),
                        (e = o ? o() : {}),
                        Object.assign(a.params, e),
                        Object.assign(a.originalParams, e));
                }),
                    n("setTranslate", function () {
                        a.params.effect === i && s();
                    }),
                    n("setTransition", function (e, t) {
                        a.params.effect === i && r(t);
                    }),
                    n("transitionEnd", function () {
                        a.params.effect === i &&
                            d &&
                            c &&
                            c().slideShadows &&
                            (a.slides.each(function (e) {
                                a.$(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .remove();
                            }),
                            d());
                    }),
                    n("virtualUpdate", function () {
                        a.params.effect === i &&
                            (a.slides.length || (t = !0),
                            requestAnimationFrame(function () {
                                t &&
                                    a.slides &&
                                    a.slides.length &&
                                    (s(), (t = !1));
                            }));
                    });
            }
            function _(e, t) {
                return e.transformEl
                    ? t
                          .find(e.transformEl)
                          .css({
                              "backface-visibility": "hidden",
                              "-webkit-backface-visibility": "hidden",
                          })
                    : t;
            }
            function y(e) {
                var i,
                    a = e.swiper,
                    t = e.duration,
                    n = e.transformEl,
                    e = e.allSlides,
                    s = a.slides,
                    r = a.activeIndex,
                    o = a.$wrapperEl;
                a.params.virtualTranslate &&
                    0 !== t &&
                    ((i = !1),
                    (e
                        ? n
                            ? s.find(n)
                            : s
                        : n
                        ? s.eq(r).find(n)
                        : s.eq(r)
                    ).transitionEnd(function () {
                        if (!i && a && !a.destroyed) {
                            (i = !0), (a.animating = !1);
                            for (
                                var e = [
                                        "webkitTransitionEnd",
                                        "transitionend",
                                    ],
                                    t = 0;
                                t < e.length;
                                t += 1
                            )
                                o.trigger(e[t]);
                        }
                    }));
            }
            function D(e, t, i) {
                var a = "swiper-slide-shadow" + (i ? "-".concat(i) : ""),
                    e = e.transformEl ? t.find(e.transformEl) : t,
                    t = e.children(".".concat(a));
                return (
                    t.length ||
                        ((t = z(
                            '<div class="swiper-slide-shadow'.concat(
                                i ? "-".concat(i) : "",
                                '"></div>'
                            )
                        )),
                        e.append(t)),
                    t
                );
            }
            return (
                Object.keys(m).forEach(function (t) {
                    Object.keys(m[t]).forEach(function (e) {
                        v.prototype[e] = m[t][e];
                    });
                }),
                v.use([
                    function (e) {
                        function s() {
                            r &&
                                !r.destroyed &&
                                r.initialized &&
                                (a("beforeResize"), a("resize"));
                        }
                        function t() {
                            r &&
                                !r.destroyed &&
                                r.initialized &&
                                a("orientationchange");
                        }
                        var r = e.swiper,
                            i = e.on,
                            a = e.emit,
                            n = L(),
                            o = null,
                            l = null;
                        i("init", function () {
                            r.params.resizeObserver &&
                            void 0 !== n.ResizeObserver
                                ? r &&
                                  !r.destroyed &&
                                  r.initialized &&
                                  (o = new ResizeObserver(function (i) {
                                      l = n.requestAnimationFrame(function () {
                                          var e = r.width,
                                              t = r.height,
                                              a = e,
                                              n = t;
                                          i.forEach(function (e) {
                                              var t = e.contentBoxSize,
                                                  i = e.contentRect,
                                                  e = e.target;
                                              (e && e !== r.el) ||
                                                  ((a = i
                                                      ? i.width
                                                      : (t[0] || t).inlineSize),
                                                  (n = i
                                                      ? i.height
                                                      : (t[0] || t).blockSize));
                                          }),
                                              (a === e && n === t) || s();
                                      });
                                  })).observe(r.el)
                                : (n.addEventListener("resize", s),
                                  n.addEventListener("orientationchange", t));
                        }),
                            i("destroy", function () {
                                l && n.cancelAnimationFrame(l),
                                    o &&
                                        o.unobserve &&
                                        r.el &&
                                        (o.unobserve(r.el), (o = null)),
                                    n.removeEventListener("resize", s),
                                    n.removeEventListener(
                                        "orientationchange",
                                        t
                                    );
                            });
                    },
                    function (e) {
                        function i(e, t) {
                            void 0 === t && (t = {});
                            var i = new (o.MutationObserver ||
                                o.WebkitMutationObserver)(function (e) {
                                var t;
                                1 === e.length
                                    ? s("observerUpdate", e[0])
                                    : ((t = function () {
                                          s("observerUpdate", e[0]);
                                      }),
                                      o.requestAnimationFrame
                                          ? o.requestAnimationFrame(t)
                                          : o.setTimeout(t, 0));
                            });
                            i.observe(e, {
                                attributes:
                                    void 0 === t.attributes || t.attributes,
                                childList:
                                    void 0 === t.childList || t.childList,
                                characterData:
                                    void 0 === t.characterData ||
                                    t.characterData,
                            }),
                                r.push(i);
                        }
                        var a = e.swiper,
                            t = e.extendParams,
                            n = e.on,
                            s = e.emit,
                            r = [],
                            o = L();
                        t({
                            observer: !1,
                            observeParents: !1,
                            observeSlideChildren: !1,
                        }),
                            n("init", function () {
                                if (a.params.observer) {
                                    if (a.params.observeParents)
                                        for (
                                            var e = a.$el.parents(), t = 0;
                                            t < e.length;
                                            t += 1
                                        )
                                            i(e[t]);
                                    i(a.$el[0], {
                                        childList:
                                            a.params.observeSlideChildren,
                                    }),
                                        i(a.$wrapperEl[0], { attributes: !1 });
                                }
                            }),
                            n("destroy", function () {
                                r.forEach(function (e) {
                                    e.disconnect();
                                }),
                                    r.splice(0, r.length);
                            });
                    },
                ]),
                v.use([
                    function (e) {
                        var t,
                            x = e.swiper,
                            i = e.extendParams,
                            a = e.on,
                            S = e.emit;
                        function E(e, t) {
                            var i = x.params.virtual;
                            return i.cache && x.virtual.cache[t]
                                ? x.virtual.cache[t]
                                : ((e = i.renderSlide
                                      ? z(i.renderSlide.call(x, e, t))
                                      : z(
                                            '<div class="'
                                                .concat(
                                                    x.params.slideClass,
                                                    '" data-swiper-slide-index="'
                                                )
                                                .concat(t, '">')
                                                .concat(e, "</div>")
                                        )).attr("data-swiper-slide-index") ||
                                      e.attr("data-swiper-slide-index", t),
                                  i.cache && (x.virtual.cache[t] = e),
                                  e);
                        }
                        function o(e) {
                            var t,
                                i = x.params,
                                a = i.slidesPerView,
                                n = i.slidesPerGroup,
                                i = i.centeredSlides,
                                s = x.params.virtual,
                                r = s.addSlidesBefore,
                                s = s.addSlidesAfter,
                                o = x.virtual,
                                l = o.from,
                                d = o.to,
                                c = o.slides,
                                u = o.slidesGrid,
                                o = o.offset,
                                p =
                                    (x.params.cssMode || x.updateActiveIndex(),
                                    x.activeIndex || 0),
                                h = x.rtlTranslate
                                    ? "right"
                                    : x.isHorizontal()
                                    ? "left"
                                    : "top",
                                i = i
                                    ? ((t = Math.floor(a / 2) + n + s),
                                      Math.floor(a / 2) + n + r)
                                    : ((t = a + (n - 1) + s), n + r),
                                f = Math.max((p || 0) - i, 0),
                                m = Math.min((p || 0) + t, c.length - 1),
                                a =
                                    (x.slidesGrid[f] || 0) -
                                    (x.slidesGrid[0] || 0);
                            function v() {
                                x.updateSlides(),
                                    x.updateProgress(),
                                    x.updateSlidesClasses(),
                                    x.lazy &&
                                        x.params.lazy.enabled &&
                                        x.lazy.load(),
                                    S("virtualUpdate");
                            }
                            if (
                                (Object.assign(x.virtual, {
                                    from: f,
                                    to: m,
                                    offset: a,
                                    slidesGrid: x.slidesGrid,
                                }),
                                l !== f || d !== m || e)
                            )
                                if (x.params.virtual.renderExternal)
                                    x.params.virtual.renderExternal.call(x, {
                                        offset: a,
                                        from: f,
                                        to: m,
                                        slides: (function () {
                                            for (
                                                var e = [], t = f;
                                                t <= m;
                                                t += 1
                                            )
                                                e.push(c[t]);
                                            return e;
                                        })(),
                                    }),
                                        x.params.virtual.renderExternalUpdate
                                            ? v()
                                            : S("virtualUpdate");
                                else {
                                    var g = [],
                                        y = [];
                                    if (e)
                                        x.$wrapperEl
                                            .find(
                                                ".".concat(x.params.slideClass)
                                            )
                                            .remove();
                                    else
                                        for (var w = l; w <= d; w += 1)
                                            (w < f || m < w) &&
                                                x.$wrapperEl
                                                    .find(
                                                        "."
                                                            .concat(
                                                                x.params
                                                                    .slideClass,
                                                                '[data-swiper-slide-index="'
                                                            )
                                                            .concat(w, '"]')
                                                    )
                                                    .remove();
                                    for (var b = 0; b < c.length; b += 1)
                                        f <= b &&
                                            b <= m &&
                                            (void 0 === d || e
                                                ? y.push(b)
                                                : (d < b && y.push(b),
                                                  b < l && g.push(b)));
                                    y.forEach(function (e) {
                                        x.$wrapperEl.append(E(c[e], e));
                                    }),
                                        g
                                            .sort(function (e, t) {
                                                return t - e;
                                            })
                                            .forEach(function (e) {
                                                x.$wrapperEl.prepend(
                                                    E(c[e], e)
                                                );
                                            }),
                                        x.$wrapperEl
                                            .children(".swiper-slide")
                                            .css(h, "".concat(a, "px")),
                                        v();
                                }
                            else
                                x.slidesGrid !== u &&
                                    a !== o &&
                                    x.slides.css(h, "".concat(a, "px")),
                                    x.updateProgress(),
                                    S("virtualUpdate");
                        }
                        i({
                            virtual: {
                                enabled: !1,
                                slides: [],
                                cache: !0,
                                renderSlide: null,
                                renderExternal: null,
                                renderExternalUpdate: !0,
                                addSlidesBefore: 0,
                                addSlidesAfter: 0,
                            },
                        }),
                            (x.virtual = {
                                cache: {},
                                from: void 0,
                                to: void 0,
                                slides: [],
                                offset: 0,
                                slidesGrid: [],
                            }),
                            a("beforeInit", function () {
                                x.params.virtual.enabled &&
                                    ((x.virtual.slides =
                                        x.params.virtual.slides),
                                    x.classNames.push(
                                        "".concat(
                                            x.params.containerModifierClass,
                                            "virtual"
                                        )
                                    ),
                                    (x.params.watchSlidesProgress = !0),
                                    (x.originalParams.watchSlidesProgress = !0),
                                    x.params.initialSlide || o());
                            }),
                            a("setTranslate", function () {
                                x.params.virtual.enabled &&
                                    (x.params.cssMode && !x._immediateVirtual
                                        ? (clearTimeout(t),
                                          (t = setTimeout(function () {
                                              o();
                                          }, 100)))
                                        : o());
                            }),
                            a("init update resize", function () {
                                x.params.virtual.enabled &&
                                    x.params.cssMode &&
                                    R(
                                        x.wrapperEl,
                                        "--swiper-virtual-size",
                                        "".concat(x.virtualSize, "px")
                                    );
                            }),
                            Object.assign(x.virtual, {
                                appendSlide: function (e) {
                                    if ("object" == _typeof(e) && "length" in e)
                                        for (var t = 0; t < e.length; t += 1)
                                            e[t] && x.virtual.slides.push(e[t]);
                                    else x.virtual.slides.push(e);
                                    o(!0);
                                },
                                prependSlide: function (e) {
                                    var a,
                                        n,
                                        t = x.activeIndex,
                                        i = t + 1,
                                        s = 1;
                                    if (Array.isArray(e)) {
                                        for (var r = 0; r < e.length; r += 1)
                                            e[r] &&
                                                x.virtual.slides.unshift(e[r]);
                                        (i = t + e.length), (s = e.length);
                                    } else x.virtual.slides.unshift(e);
                                    x.params.virtual.cache &&
                                        ((a = x.virtual.cache),
                                        (n = {}),
                                        Object.keys(a).forEach(function (e) {
                                            var t = a[e],
                                                i = t.attr(
                                                    "data-swiper-slide-index"
                                                );
                                            i &&
                                                t.attr(
                                                    "data-swiper-slide-index",
                                                    parseInt(i, 10) + s
                                                ),
                                                (n[parseInt(e, 10) + s] = t);
                                        }),
                                        (x.virtual.cache = n)),
                                        o(!0),
                                        x.slideTo(i, 0);
                                },
                                removeSlide: function (e) {
                                    if (null != e) {
                                        var t = x.activeIndex;
                                        if (Array.isArray(e))
                                            for (
                                                var i = e.length - 1;
                                                0 <= i;
                                                --i
                                            )
                                                x.virtual.slides.splice(
                                                    e[i],
                                                    1
                                                ),
                                                    x.params.virtual.cache &&
                                                        delete x.virtual.cache[
                                                            e[i]
                                                        ],
                                                    e[i] < t && --t,
                                                    (t = Math.max(t, 0));
                                        else
                                            x.virtual.slides.splice(e, 1),
                                                x.params.virtual.cache &&
                                                    delete x.virtual.cache[e],
                                                e < t && --t,
                                                (t = Math.max(t, 0));
                                        o(!0), x.slideTo(t, 0);
                                    }
                                },
                                removeAllSlides: function () {
                                    (x.virtual.slides = []),
                                        x.params.virtual.cache &&
                                            (x.virtual.cache = {}),
                                        o(!0),
                                        x.slideTo(0, 0);
                                },
                                update: o,
                            });
                    },
                    function (e) {
                        var y = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            w = e.emit,
                            b = E(),
                            x = L();
                        function a(e) {
                            if (y.enabled) {
                                var t = y.rtlTranslate,
                                    i =
                                        (e = e.originalEvent
                                            ? e.originalEvent
                                            : e).keyCode || e.charCode,
                                    a = y.params.keyboard.pageUpDown,
                                    n = a && 33 === i,
                                    a = a && 34 === i,
                                    s = 37 === i,
                                    r = 39 === i,
                                    o = 38 === i,
                                    l = 40 === i;
                                if (
                                    !y.allowSlideNext &&
                                    ((y.isHorizontal() && r) ||
                                        (y.isVertical() && l) ||
                                        a)
                                )
                                    return !1;
                                if (
                                    !y.allowSlidePrev &&
                                    ((y.isHorizontal() && s) ||
                                        (y.isVertical() && o) ||
                                        n)
                                )
                                    return !1;
                                if (
                                    !(
                                        e.shiftKey ||
                                        e.altKey ||
                                        e.ctrlKey ||
                                        e.metaKey ||
                                        (b.activeElement &&
                                            b.activeElement.nodeName &&
                                            ("input" ===
                                                b.activeElement.nodeName.toLowerCase() ||
                                                "textarea" ===
                                                    b.activeElement.nodeName.toLowerCase()))
                                    )
                                ) {
                                    if (
                                        y.params.keyboard.onlyInViewport &&
                                        (n || a || s || r || o || l)
                                    ) {
                                        var d = !1;
                                        if (
                                            0 <
                                                y.$el.parents(
                                                    ".".concat(
                                                        y.params.slideClass
                                                    )
                                                ).length &&
                                            0 ===
                                                y.$el.parents(
                                                    ".".concat(
                                                        y.params
                                                            .slideActiveClass
                                                    )
                                                ).length
                                        )
                                            return;
                                        for (
                                            var c = y.$el,
                                                u = c[0].clientWidth,
                                                c = c[0].clientHeight,
                                                p = x.innerWidth,
                                                h = x.innerHeight,
                                                f = y.$el.offset(),
                                                m =
                                                    (t &&
                                                        (f.left -=
                                                            y.$el[0].scrollLeft),
                                                    [
                                                        [f.left, f.top],
                                                        [f.left + u, f.top],
                                                        [f.left, f.top + c],
                                                        [f.left + u, f.top + c],
                                                    ]),
                                                v = 0;
                                            v < m.length;
                                            v += 1
                                        ) {
                                            var g = m[v];
                                            0 <= g[0] &&
                                                g[0] <= p &&
                                                0 <= g[1] &&
                                                g[1] <= h &&
                                                ((0 === g[0] && 0 === g[1]) ||
                                                    (d = !0));
                                        }
                                        if (!d) return;
                                    }
                                    y.isHorizontal()
                                        ? ((n || a || s || r) &&
                                              (e.preventDefault
                                                  ? e.preventDefault()
                                                  : (e.returnValue = !1)),
                                          (((a || r) && !t) ||
                                              ((n || s) && t)) &&
                                              y.slideNext(),
                                          (((n || s) && !t) ||
                                              ((a || r) && t)) &&
                                              y.slidePrev())
                                        : ((n || a || o || l) &&
                                              (e.preventDefault
                                                  ? e.preventDefault()
                                                  : (e.returnValue = !1)),
                                          (a || l) && y.slideNext(),
                                          (n || o) && y.slidePrev()),
                                        w("keyPress", i);
                                }
                            }
                        }
                        function n() {
                            y.keyboard.enabled ||
                                (z(b).on("keydown", a),
                                (y.keyboard.enabled = !0));
                        }
                        function s() {
                            y.keyboard.enabled &&
                                (z(b).off("keydown", a),
                                (y.keyboard.enabled = !1));
                        }
                        t({
                            keyboard: {
                                enabled: !(y.keyboard = { enabled: !1 }),
                                onlyInViewport: !0,
                                pageUpDown: !0,
                            },
                        }),
                            i("init", function () {
                                y.params.keyboard.enabled && n();
                            }),
                            i("destroy", function () {
                                y.keyboard.enabled && s();
                            }),
                            Object.assign(y.keyboard, {
                                enable: n,
                                disable: s,
                            });
                    },
                    function (e) {
                        var h,
                            f = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            m = e.emit,
                            a = L();
                        t({
                            mousewheel: {
                                enabled: !1,
                                releaseOnEdges: !1,
                                invert: !1,
                                forceToAxis: !1,
                                sensitivity: 1,
                                eventsTarget: "container",
                                thresholdDelta: null,
                                thresholdTime: null,
                            },
                        }),
                            (f.mousewheel = { enabled: !1 });
                        var v,
                            n = S(),
                            g = [];
                        function s() {
                            f.enabled && (f.mouseEntered = !0);
                        }
                        function r() {
                            f.enabled && (f.mouseEntered = !1);
                        }
                        function y(e) {
                            (f.params.mousewheel.thresholdDelta &&
                                e.delta < f.params.mousewheel.thresholdDelta) ||
                                (f.params.mousewheel.thresholdTime &&
                                    S() - n <
                                        f.params.mousewheel.thresholdTime) ||
                                (6 <= e.delta && S() - n < 60) ||
                                (e.direction < 0
                                    ? (f.isEnd && !f.params.loop) ||
                                      f.animating ||
                                      (f.slideNext(), m("scroll", e.raw))
                                    : (f.isBeginning && !f.params.loop) ||
                                      f.animating ||
                                      (f.slidePrev(), m("scroll", e.raw)),
                                (n = new a.Date().getTime()));
                        }
                        function o(e) {
                            var t = e;
                            if (f.enabled) {
                                var i = f.params.mousewheel,
                                    a =
                                        (f.params.cssMode && t.preventDefault(),
                                        f.$el);
                                if (
                                    ("container" !==
                                        f.params.mousewheel.eventsTarget &&
                                        (a = z(
                                            f.params.mousewheel.eventsTarget
                                        )),
                                    !f.mouseEntered &&
                                        !a[0].contains(t.target) &&
                                        !i.releaseOnEdges)
                                )
                                    return !0;
                                t.originalEvent && (t = t.originalEvent);
                                var a = 0,
                                    n = f.rtlTranslate ? -1 : 1,
                                    s =
                                        ((u = c = l = r = 0),
                                        "detail" in (s = t) && (l = s.detail),
                                        "wheelDelta" in s &&
                                            (l = -s.wheelDelta / 120),
                                        "wheelDeltaY" in s &&
                                            (l = -s.wheelDeltaY / 120),
                                        "wheelDeltaX" in s &&
                                            (r = -s.wheelDeltaX / 120),
                                        "axis" in s &&
                                            s.axis === s.HORIZONTAL_AXIS &&
                                            ((r = l), (l = 0)),
                                        (c = 10 * r),
                                        (u = 10 * l),
                                        "deltaY" in s && (u = s.deltaY),
                                        "deltaX" in s && (c = s.deltaX),
                                        s.shiftKey && !c && ((c = u), (u = 0)),
                                        (c || u) &&
                                            s.deltaMode &&
                                            (1 === s.deltaMode
                                                ? ((c *= 40), (u *= 40))
                                                : ((c *= 800), (u *= 800))),
                                        {
                                            spinX: (r =
                                                c && !r ? (c < 1 ? -1 : 1) : r),
                                            spinY: (l =
                                                u && !l ? (u < 1 ? -1 : 1) : l),
                                            pixelX: c,
                                            pixelY: u,
                                        });
                                if (i.forceToAxis)
                                    if (f.isHorizontal()) {
                                        if (
                                            !(
                                                Math.abs(s.pixelX) >
                                                Math.abs(s.pixelY)
                                            )
                                        )
                                            return !0;
                                        a = -s.pixelX * n;
                                    } else {
                                        if (
                                            !(
                                                Math.abs(s.pixelY) >
                                                Math.abs(s.pixelX)
                                            )
                                        )
                                            return !0;
                                        a = -s.pixelY;
                                    }
                                else
                                    a =
                                        Math.abs(s.pixelX) > Math.abs(s.pixelY)
                                            ? -s.pixelX * n
                                            : -s.pixelY;
                                if (0 === a) return !0;
                                i.invert && (a = -a);
                                var r = f.getTranslate() + a * i.sensitivity;
                                if (
                                    ((r =
                                        r >= f.minTranslate()
                                            ? f.minTranslate()
                                            : r) <= f.maxTranslate() &&
                                        (r = f.maxTranslate()),
                                    (!!f.params.loop ||
                                        !(
                                            r === f.minTranslate() ||
                                            r === f.maxTranslate()
                                        )) &&
                                        f.params.nested &&
                                        t.stopPropagation(),
                                    f.params.freeMode &&
                                        f.params.freeMode.enabled)
                                ) {
                                    var o = {
                                            time: S(),
                                            delta: Math.abs(a),
                                            direction: Math.sign(a),
                                        },
                                        l =
                                            v &&
                                            o.time < v.time + 500 &&
                                            o.delta <= v.delta &&
                                            o.direction === v.direction;
                                    if (!l) {
                                        (v = void 0),
                                            f.params.loop && f.loopFix();
                                        var d,
                                            c =
                                                f.getTranslate() +
                                                a * i.sensitivity,
                                            u = f.isBeginning,
                                            n = f.isEnd;
                                        if (
                                            ((c =
                                                c >= f.minTranslate()
                                                    ? f.minTranslate()
                                                    : c) <= f.maxTranslate() &&
                                                (c = f.maxTranslate()),
                                            f.setTransition(0),
                                            f.setTranslate(c),
                                            f.updateProgress(),
                                            f.updateActiveIndex(),
                                            f.updateSlidesClasses(),
                                            ((!u && f.isBeginning) ||
                                                (!n && f.isEnd)) &&
                                                f.updateSlidesClasses(),
                                            f.params.freeMode.sticky &&
                                                (clearTimeout(h),
                                                (h = void 0),
                                                15 <= g.length && g.shift(),
                                                (s = g.length
                                                    ? g[g.length - 1]
                                                    : void 0),
                                                (r = g[0]),
                                                g.push(o),
                                                s &&
                                                (o.delta > s.delta ||
                                                    o.direction !== s.direction)
                                                    ? g.splice(0)
                                                    : 15 <= g.length &&
                                                      o.time - r.time < 500 &&
                                                      1 <= r.delta - o.delta &&
                                                      o.delta <= 6 &&
                                                      ((d = 0 < a ? 0.8 : 0.2),
                                                      (v = o),
                                                      g.splice(0),
                                                      (h = T(function () {
                                                          f.slideToClosest(
                                                              f.params.speed,
                                                              !0,
                                                              void 0,
                                                              d
                                                          );
                                                      }, 0))),
                                                (h =
                                                    h ||
                                                    T(function () {
                                                        (v = o),
                                                            g.splice(0),
                                                            f.slideToClosest(
                                                                f.params.speed,
                                                                !0,
                                                                void 0,
                                                                0.5
                                                            );
                                                    }, 500))),
                                            l || m("scroll", t),
                                            f.params.autoplay &&
                                                f.params
                                                    .autoplayDisableOnInteraction &&
                                                f.autoplay.stop(),
                                            c === f.minTranslate() ||
                                                c === f.maxTranslate())
                                        )
                                            return !0;
                                    }
                                } else {
                                    var p = {
                                            time: S(),
                                            delta: Math.abs(a),
                                            direction: Math.sign(a),
                                            raw: e,
                                        },
                                        i =
                                            (2 <= g.length && g.shift(),
                                            g.length
                                                ? g[g.length - 1]
                                                : void 0);
                                    if (
                                        (g.push(p),
                                        (!i ||
                                            p.direction !== i.direction ||
                                            p.delta > i.delta ||
                                            p.time > i.time + 150) &&
                                            y(p),
                                        (function () {
                                            var e = f.params.mousewheel;
                                            if (p.direction < 0) {
                                                if (
                                                    f.isEnd &&
                                                    !f.params.loop &&
                                                    e.releaseOnEdges
                                                )
                                                    return 1;
                                            } else if (
                                                f.isBeginning &&
                                                !f.params.loop &&
                                                e.releaseOnEdges
                                            )
                                                return 1;
                                        })())
                                    )
                                        return !0;
                                }
                                return (
                                    t.preventDefault
                                        ? t.preventDefault()
                                        : (t.returnValue = !1),
                                    !1
                                );
                            }
                        }
                        function l(e) {
                            var t = f.$el;
                            (t =
                                "container" !== f.params.mousewheel.eventsTarget
                                    ? z(f.params.mousewheel.eventsTarget)
                                    : t)[e]("mouseenter", s),
                                t[e]("mouseleave", r),
                                t[e]("wheel", o);
                        }
                        function d() {
                            return f.params.cssMode
                                ? (f.wrapperEl.removeEventListener("wheel", o),
                                  !0)
                                : !f.mousewheel.enabled &&
                                      (l("on"), (f.mousewheel.enabled = !0));
                        }
                        function c() {
                            return f.params.cssMode
                                ? (f.wrapperEl.addEventListener(event, o), !0)
                                : !!f.mousewheel.enabled &&
                                      (l("off"), !(f.mousewheel.enabled = !1));
                        }
                        i("init", function () {
                            !f.params.mousewheel.enabled &&
                                f.params.cssMode &&
                                c(),
                                f.params.mousewheel.enabled && d();
                        }),
                            i("destroy", function () {
                                f.params.cssMode && d(),
                                    f.mousewheel.enabled && c();
                            }),
                            Object.assign(f.mousewheel, {
                                enable: d,
                                disable: c,
                            });
                    },
                    function (e) {
                        var s = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            r = e.emit;
                        function a(e) {
                            var t;
                            return (t =
                                e &&
                                ((t = z(e)), s.params.uniqueNavElements) &&
                                "string" == typeof e &&
                                1 < t.length &&
                                1 === s.$el.find(e).length
                                    ? s.$el.find(e)
                                    : t);
                        }
                        function n(e, t) {
                            var i = s.params.navigation;
                            e &&
                                0 < e.length &&
                                (e[t ? "addClass" : "removeClass"](
                                    i.disabledClass
                                ),
                                e[0] &&
                                    "BUTTON" === e[0].tagName &&
                                    (e[0].disabled = t),
                                s.params.watchOverflow) &&
                                s.enabled &&
                                e[s.isLocked ? "addClass" : "removeClass"](
                                    i.lockClass
                                );
                        }
                        function o() {
                            var e, t;
                            s.params.loop ||
                                ((t = (e = s.navigation).$nextEl),
                                n(e.$prevEl, s.isBeginning && !s.params.rewind),
                                n(t, s.isEnd && !s.params.rewind));
                        }
                        function l(e) {
                            e.preventDefault(),
                                (s.isBeginning &&
                                    !s.params.loop &&
                                    !s.params.rewind) ||
                                    s.slidePrev();
                        }
                        function d(e) {
                            e.preventDefault(),
                                (s.isEnd &&
                                    !s.params.loop &&
                                    !s.params.rewind) ||
                                    s.slideNext();
                        }
                        function c() {
                            var e,
                                t,
                                i = s.params.navigation;
                            (s.params.navigation = O(
                                s,
                                s.originalParams.navigation,
                                s.params.navigation,
                                {
                                    nextEl: "swiper-button-next",
                                    prevEl: "swiper-button-prev",
                                }
                            )),
                                (i.nextEl || i.prevEl) &&
                                    ((e = a(i.nextEl)),
                                    (t = a(i.prevEl)),
                                    e && 0 < e.length && e.on("click", d),
                                    t && 0 < t.length && t.on("click", l),
                                    Object.assign(s.navigation, {
                                        $nextEl: e,
                                        nextEl: e && e[0],
                                        $prevEl: t,
                                        prevEl: t && t[0],
                                    }),
                                    s.enabled ||
                                        (e && e.addClass(i.lockClass),
                                        t && t.addClass(i.lockClass)));
                        }
                        function u() {
                            var e = s.navigation,
                                t = e.$nextEl,
                                e = e.$prevEl;
                            t &&
                                t.length &&
                                (t.off("click", d),
                                t.removeClass(
                                    s.params.navigation.disabledClass
                                )),
                                e &&
                                    e.length &&
                                    (e.off("click", l),
                                    e.removeClass(
                                        s.params.navigation.disabledClass
                                    ));
                        }
                        t({
                            navigation: {
                                nextEl: null,
                                prevEl: null,
                                hideOnClick: !1,
                                disabledClass: "swiper-button-disabled",
                                hiddenClass: "swiper-button-hidden",
                                lockClass: "swiper-button-lock",
                            },
                        }),
                            (s.navigation = {
                                nextEl: null,
                                $nextEl: null,
                                prevEl: null,
                                $prevEl: null,
                            }),
                            i("init", function () {
                                c(), o();
                            }),
                            i("toEdge fromEdge lock unlock", function () {
                                o();
                            }),
                            i("destroy", function () {
                                u();
                            }),
                            i("enable disable", function () {
                                var e = s.navigation,
                                    t = e.$nextEl,
                                    e = e.$prevEl;
                                t &&
                                    t[s.enabled ? "removeClass" : "addClass"](
                                        s.params.navigation.lockClass
                                    ),
                                    e &&
                                        e[
                                            s.enabled
                                                ? "removeClass"
                                                : "addClass"
                                        ](s.params.navigation.lockClass);
                            }),
                            i("click", function (e, t) {
                                var i,
                                    a = s.navigation,
                                    n = a.$nextEl,
                                    a = a.$prevEl,
                                    t = t.target;
                                !s.params.navigation.hideOnClick ||
                                    z(t).is(a) ||
                                    z(t).is(n) ||
                                    (s.pagination &&
                                        s.params.pagination &&
                                        s.params.pagination.clickable &&
                                        (s.pagination.el === t ||
                                            s.pagination.el.contains(t))) ||
                                    (n
                                        ? (i = n.hasClass(
                                              s.params.navigation.hiddenClass
                                          ))
                                        : a &&
                                          (i = a.hasClass(
                                              s.params.navigation.hiddenClass
                                          )),
                                    r(
                                        !0 === i
                                            ? "navigationShow"
                                            : "navigationHide"
                                    ),
                                    n &&
                                        n.toggleClass(
                                            s.params.navigation.hiddenClass
                                        ),
                                    a &&
                                        a.toggleClass(
                                            s.params.navigation.hiddenClass
                                        ));
                            }),
                            Object.assign(s.navigation, {
                                update: o,
                                init: c,
                                destroy: u,
                            });
                    },
                    function (e) {
                        var f,
                            m = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            v = e.emit,
                            e = "swiper-pagination",
                            g =
                                (t({
                                    pagination: {
                                        el: null,
                                        bulletElement: "span",
                                        clickable: !1,
                                        hideOnClick: !1,
                                        renderBullet: null,
                                        renderProgressbar: null,
                                        renderFraction: null,
                                        renderCustom: null,
                                        progressbarOpposite: !1,
                                        type: "bullets",
                                        dynamicBullets: !1,
                                        dynamicMainBullets: 1,
                                        formatFractionCurrent: function (e) {
                                            return e;
                                        },
                                        formatFractionTotal: function (e) {
                                            return e;
                                        },
                                        bulletClass: "".concat(e, "-bullet"),
                                        bulletActiveClass: "".concat(
                                            e,
                                            "-bullet-active"
                                        ),
                                        modifierClass: "".concat(e, "-"),
                                        currentClass: "".concat(e, "-current"),
                                        totalClass: "".concat(e, "-total"),
                                        hiddenClass: "".concat(e, "-hidden"),
                                        progressbarFillClass: "".concat(
                                            e,
                                            "-progressbar-fill"
                                        ),
                                        progressbarOppositeClass: "".concat(
                                            e,
                                            "-progressbar-opposite"
                                        ),
                                        clickableClass: "".concat(
                                            e,
                                            "-clickable"
                                        ),
                                        lockClass: "".concat(e, "-lock"),
                                        horizontalClass: "".concat(
                                            e,
                                            "-horizontal"
                                        ),
                                        verticalClass: "".concat(
                                            e,
                                            "-vertical"
                                        ),
                                    },
                                }),
                                (m.pagination = {
                                    el: null,
                                    $el: null,
                                    bullets: [],
                                }),
                                0);
                        function y() {
                            return (
                                !m.params.pagination.el ||
                                !m.pagination.el ||
                                !m.pagination.$el ||
                                0 === m.pagination.$el.length
                            );
                        }
                        function w(e, t) {
                            var i = m.params.pagination.bulletActiveClass;
                            e[t]()
                                .addClass("".concat(i, "-").concat(t))
                                [t]()
                                .addClass(
                                    "".concat(i, "-").concat(t, "-").concat(t)
                                );
                        }
                        function a() {
                            var e = m.rtl,
                                i = m.params.pagination;
                            if (!y()) {
                                var a,
                                    t = (
                                        m.virtual && m.params.virtual.enabled
                                            ? m.virtual
                                            : m
                                    ).slides.length,
                                    n = m.pagination.$el,
                                    s = m.params.loop
                                        ? Math.ceil(
                                              (t - 2 * m.loopedSlides) /
                                                  m.params.slidesPerGroup
                                          )
                                        : m.snapGrid.length;
                                if (
                                    (m.params.loop
                                        ? ((a = Math.ceil(
                                              (m.activeIndex - m.loopedSlides) /
                                                  m.params.slidesPerGroup
                                          )) >
                                              t - 1 - 2 * m.loopedSlides &&
                                              (a -= t - 2 * m.loopedSlides),
                                          s - 1 < a && (a -= s),
                                          a < 0 &&
                                              "bullets" !==
                                                  m.params.paginationType &&
                                              (a = s + a))
                                        : (a =
                                              void 0 !== m.snapIndex
                                                  ? m.snapIndex
                                                  : m.activeIndex || 0),
                                    "bullets" === i.type &&
                                        m.pagination.bullets &&
                                        0 < m.pagination.bullets.length)
                                ) {
                                    var r,
                                        o,
                                        l,
                                        d = m.pagination.bullets;
                                    if (
                                        (i.dynamicBullets &&
                                            ((f = d
                                                .eq(0)
                                                [
                                                    m.isHorizontal()
                                                        ? "outerWidth"
                                                        : "outerHeight"
                                                ](!0)),
                                            n.css(
                                                m.isHorizontal()
                                                    ? "width"
                                                    : "height",
                                                f * (i.dynamicMainBullets + 4) +
                                                    "px"
                                            ),
                                            1 < i.dynamicMainBullets &&
                                                void 0 !== m.previousIndex &&
                                                ((g +=
                                                    a -
                                                    (m.previousIndex -
                                                        m.loopedSlides || 0)) >
                                                i.dynamicMainBullets - 1
                                                    ? (g =
                                                          i.dynamicMainBullets -
                                                          1)
                                                    : g < 0 && (g = 0)),
                                            (r = Math.max(a - g, 0)),
                                            (l =
                                                ((o =
                                                    r +
                                                    (Math.min(
                                                        d.length,
                                                        i.dynamicMainBullets
                                                    ) -
                                                        1)) +
                                                    r) /
                                                2)),
                                        d.removeClass(
                                            [
                                                "",
                                                "-next",
                                                "-next-next",
                                                "-prev",
                                                "-prev-prev",
                                                "-main",
                                            ]
                                                .map(function (e) {
                                                    return ""
                                                        .concat(
                                                            i.bulletActiveClass
                                                        )
                                                        .concat(e);
                                                })
                                                .join(" ")
                                        ),
                                        1 < n.length)
                                    )
                                        d.each(function (e) {
                                            var e = z(e),
                                                t = e.index();
                                            t === a &&
                                                e.addClass(i.bulletActiveClass),
                                                i.dynamicBullets &&
                                                    (r <= t &&
                                                        t <= o &&
                                                        e.addClass(
                                                            "".concat(
                                                                i.bulletActiveClass,
                                                                "-main"
                                                            )
                                                        ),
                                                    t === r && w(e, "prev"),
                                                    t === o) &&
                                                    w(e, "next");
                                        });
                                    else {
                                        var t = d.eq(a),
                                            c = t.index();
                                        if (
                                            (t.addClass(i.bulletActiveClass),
                                            i.dynamicBullets)
                                        ) {
                                            for (
                                                var t = d.eq(r),
                                                    u = d.eq(o),
                                                    p = r;
                                                p <= o;
                                                p += 1
                                            )
                                                d.eq(p).addClass(
                                                    "".concat(
                                                        i.bulletActiveClass,
                                                        "-main"
                                                    )
                                                );
                                            if (m.params.loop)
                                                if (c >= d.length) {
                                                    for (
                                                        var h =
                                                            i.dynamicMainBullets;
                                                        0 <= h;
                                                        --h
                                                    )
                                                        d.eq(
                                                            d.length - h
                                                        ).addClass(
                                                            "".concat(
                                                                i.bulletActiveClass,
                                                                "-main"
                                                            )
                                                        );
                                                    d.eq(
                                                        d.length -
                                                            i.dynamicMainBullets -
                                                            1
                                                    ).addClass(
                                                        "".concat(
                                                            i.bulletActiveClass,
                                                            "-prev"
                                                        )
                                                    );
                                                } else
                                                    w(t, "prev"), w(u, "next");
                                            else w(t, "prev"), w(u, "next");
                                        }
                                    }
                                    i.dynamicBullets &&
                                        ((c = Math.min(
                                            d.length,
                                            i.dynamicMainBullets + 4
                                        )),
                                        (t = (f * c - f) / 2 - l * f),
                                        (u = e ? "right" : "left"),
                                        d.css(
                                            m.isHorizontal() ? u : "top",
                                            "".concat(t, "px")
                                        ));
                                }
                                "fraction" === i.type &&
                                    (n
                                        .find($(i.currentClass))
                                        .text(i.formatFractionCurrent(a + 1)),
                                    n
                                        .find($(i.totalClass))
                                        .text(i.formatFractionTotal(s))),
                                    "progressbar" === i.type &&
                                        ((c = i.progressbarOpposite
                                            ? m.isHorizontal()
                                                ? "vertical"
                                                : "horizontal"
                                            : m.isHorizontal()
                                            ? "horizontal"
                                            : "vertical"),
                                        (l = (a + 1) / s),
                                        (u = e = 1),
                                        "horizontal" == c ? (e = l) : (u = l),
                                        n
                                            .find($(i.progressbarFillClass))
                                            .transform(
                                                "translate3d(0,0,0) scaleX("
                                                    .concat(e, ") scaleY(")
                                                    .concat(u, ")")
                                            )
                                            .transition(m.params.speed)),
                                    "custom" === i.type && i.renderCustom
                                        ? (n.html(i.renderCustom(m, a + 1, s)),
                                          v("paginationRender", n[0]))
                                        : v("paginationUpdate", n[0]),
                                    m.params.watchOverflow &&
                                        m.enabled &&
                                        n[
                                            m.isLocked
                                                ? "addClass"
                                                : "removeClass"
                                        ](i.lockClass);
                            }
                        }
                        function n() {
                            var e = m.params.pagination;
                            if (!y()) {
                                var t = (
                                        m.virtual && m.params.virtual.enabled
                                            ? m.virtual
                                            : m
                                    ).slides.length,
                                    i = m.pagination.$el,
                                    a = "";
                                if ("bullets" === e.type) {
                                    var n = m.params.loop
                                        ? Math.ceil(
                                              (t - 2 * m.loopedSlides) /
                                                  m.params.slidesPerGroup
                                          )
                                        : m.snapGrid.length;
                                    m.params.freeMode &&
                                        m.params.freeMode.enabled &&
                                        !m.params.loop &&
                                        t < n &&
                                        (n = t);
                                    for (var s = 0; s < n; s += 1)
                                        e.renderBullet
                                            ? (a += e.renderBullet.call(
                                                  m,
                                                  s,
                                                  e.bulletClass
                                              ))
                                            : (a += "<"
                                                  .concat(
                                                      e.bulletElement,
                                                      ' class="'
                                                  )
                                                  .concat(e.bulletClass, '"></')
                                                  .concat(
                                                      e.bulletElement,
                                                      ">"
                                                  ));
                                    i.html(a),
                                        (m.pagination.bullets = i.find(
                                            $(e.bulletClass)
                                        ));
                                }
                                "fraction" === e.type &&
                                    ((a = e.renderFraction
                                        ? e.renderFraction.call(
                                              m,
                                              e.currentClass,
                                              e.totalClass
                                          )
                                        : '<span class="'
                                              .concat(
                                                  e.currentClass,
                                                  '"></span> / <span class="'
                                              )
                                              .concat(
                                                  e.totalClass,
                                                  '"></span>'
                                              )),
                                    i.html(a)),
                                    "progressbar" === e.type &&
                                        ((a = e.renderProgressbar
                                            ? e.renderProgressbar.call(
                                                  m,
                                                  e.progressbarFillClass
                                              )
                                            : '<span class="'.concat(
                                                  e.progressbarFillClass,
                                                  '"></span>'
                                              )),
                                        i.html(a)),
                                    "custom" !== e.type &&
                                        v(
                                            "paginationRender",
                                            m.pagination.$el[0]
                                        );
                            }
                        }
                        function s() {
                            m.params.pagination = O(
                                m,
                                m.originalParams.pagination,
                                m.params.pagination,
                                { el: "swiper-pagination" }
                            );
                            var e,
                                t = m.params.pagination;
                            t.el &&
                                0 !== (e = z(t.el)).length &&
                                (m.params.uniqueNavElements &&
                                    "string" == typeof t.el &&
                                    1 < e.length &&
                                    1 < (e = m.$el.find(t.el)).length &&
                                    (e = e.filter(function (e) {
                                        return (
                                            z(e).parents(".swiper")[0] === m.el
                                        );
                                    })),
                                "bullets" === t.type &&
                                    t.clickable &&
                                    e.addClass(t.clickableClass),
                                e.addClass(t.modifierClass + t.type),
                                e.addClass(
                                    m.isHorizontal()
                                        ? t.horizontalClass
                                        : t.verticalClass
                                ),
                                "bullets" === t.type &&
                                    t.dynamicBullets &&
                                    (e.addClass(
                                        ""
                                            .concat(t.modifierClass)
                                            .concat(t.type, "-dynamic")
                                    ),
                                    (g = 0),
                                    t.dynamicMainBullets < 1) &&
                                    (t.dynamicMainBullets = 1),
                                "progressbar" === t.type &&
                                    t.progressbarOpposite &&
                                    e.addClass(t.progressbarOppositeClass),
                                t.clickable &&
                                    e.on(
                                        "click",
                                        $(t.bulletClass),
                                        function (e) {
                                            e.preventDefault();
                                            e =
                                                z(this).index() *
                                                m.params.slidesPerGroup;
                                            m.params.loop &&
                                                (e += m.loopedSlides),
                                                m.slideTo(e);
                                        }
                                    ),
                                Object.assign(m.pagination, {
                                    $el: e,
                                    el: e[0],
                                }),
                                m.enabled || e.addClass(t.lockClass));
                        }
                        function r() {
                            var e,
                                t = m.params.pagination;
                            y() ||
                                ((e = m.pagination.$el).removeClass(
                                    t.hiddenClass
                                ),
                                e.removeClass(t.modifierClass + t.type),
                                e.removeClass(
                                    m.isHorizontal()
                                        ? t.horizontalClass
                                        : t.verticalClass
                                ),
                                m.pagination.bullets &&
                                    m.pagination.bullets.removeClass &&
                                    m.pagination.bullets.removeClass(
                                        t.bulletActiveClass
                                    ),
                                t.clickable &&
                                    e.off("click", $(t.bulletClass)));
                        }
                        i("init", function () {
                            s(), n(), a();
                        }),
                            i("activeIndexChange", function () {
                                (!m.params.loop && void 0 !== m.snapIndex) ||
                                    a();
                            }),
                            i("snapIndexChange", function () {
                                m.params.loop || a();
                            }),
                            i("slidesLengthChange", function () {
                                m.params.loop && (n(), a());
                            }),
                            i("snapGridLengthChange", function () {
                                m.params.loop || (n(), a());
                            }),
                            i("destroy", function () {
                                r();
                            }),
                            i("enable disable", function () {
                                var e = m.pagination.$el;
                                e &&
                                    e[m.enabled ? "removeClass" : "addClass"](
                                        m.params.pagination.lockClass
                                    );
                            }),
                            i("lock unlock", function () {
                                a();
                            }),
                            i("click", function (e, t) {
                                var t = t.target,
                                    i = m.pagination.$el;
                                m.params.pagination.el &&
                                    m.params.pagination.hideOnClick &&
                                    0 < i.length &&
                                    !z(t).hasClass(
                                        m.params.pagination.bulletClass
                                    ) &&
                                    ((m.navigation &&
                                        ((m.navigation.nextEl &&
                                            t === m.navigation.nextEl) ||
                                            (m.navigation.prevEl &&
                                                t === m.navigation.prevEl))) ||
                                        ((t = i.hasClass(
                                            m.params.pagination.hiddenClass
                                        )),
                                        v(
                                            !0 === t
                                                ? "paginationShow"
                                                : "paginationHide"
                                        ),
                                        i.toggleClass(
                                            m.params.pagination.hiddenClass
                                        )));
                            }),
                            Object.assign(m.pagination, {
                                render: n,
                                update: a,
                                init: s,
                                destroy: r,
                            });
                    },
                    function (e) {
                        var s,
                            r,
                            o,
                            a,
                            l = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            d = e.emit,
                            c = E(),
                            u = !1,
                            p = null,
                            h = null;
                        function n() {
                            var e, t, i, a, n, s;
                            l.params.scrollbar.el &&
                                l.scrollbar.el &&
                                ((a = l.scrollbar),
                                (e = l.rtlTranslate),
                                (s = l.progress),
                                (t = a.$dragEl),
                                (i = a.$el),
                                (a = l.params.scrollbar),
                                (s = (o - (n = r)) * s),
                                e
                                    ? 0 < (s = -s)
                                        ? ((n = r - s), (s = 0))
                                        : o < -s + r && (n = o + s)
                                    : s < 0
                                    ? ((n = r + s), (s = 0))
                                    : o < s + r && (n = o - s),
                                l.isHorizontal()
                                    ? (t.transform(
                                          "translate3d(".concat(s, "px, 0, 0)")
                                      ),
                                      (t[0].style.width = "".concat(n, "px")))
                                    : (t.transform(
                                          "translate3d(0px, ".concat(
                                              s,
                                              "px, 0)"
                                          )
                                      ),
                                      (t[0].style.height = "".concat(n, "px"))),
                                a.hide) &&
                                (clearTimeout(p),
                                (i[0].style.opacity = 1),
                                (p = setTimeout(function () {
                                    (i[0].style.opacity = 0), i.transition(400);
                                }, 1e3)));
                        }
                        function f() {
                            var e, t, i;
                            l.params.scrollbar.el &&
                                l.scrollbar.el &&
                                ((t = (e = l.scrollbar).$dragEl),
                                (i = e.$el),
                                (t[0].style.width = ""),
                                (t[0].style.height = ""),
                                (o = l.isHorizontal()
                                    ? i[0].offsetWidth
                                    : i[0].offsetHeight),
                                (a =
                                    l.size /
                                    (l.virtualSize +
                                        l.params.slidesOffsetBefore -
                                        (l.params.centeredSlides
                                            ? l.snapGrid[0]
                                            : 0))),
                                (r =
                                    "auto" === l.params.scrollbar.dragSize
                                        ? o * a
                                        : parseInt(
                                              l.params.scrollbar.dragSize,
                                              10
                                          )),
                                l.isHorizontal()
                                    ? (t[0].style.width = "".concat(r, "px"))
                                    : (t[0].style.height = "".concat(r, "px")),
                                (i[0].style.display = 1 <= a ? "none" : ""),
                                l.params.scrollbar.hide &&
                                    (i[0].style.opacity = 0),
                                l.params.watchOverflow) &&
                                l.enabled &&
                                e.$el[l.isLocked ? "addClass" : "removeClass"](
                                    l.params.scrollbar.lockClass
                                );
                        }
                        function m(e) {
                            return l.isHorizontal()
                                ? ("touchstart" === e.type ||
                                  "touchmove" === e.type
                                      ? e.targetTouches[0]
                                      : e
                                  ).clientX
                                : ("touchstart" === e.type ||
                                  "touchmove" === e.type
                                      ? e.targetTouches[0]
                                      : e
                                  ).clientY;
                        }
                        function v(e) {
                            var t = l.scrollbar,
                                i = l.rtlTranslate,
                                t = t.$el,
                                e =
                                    (m(e) -
                                        t.offset()[
                                            l.isHorizontal() ? "left" : "top"
                                        ] -
                                        (null !== s ? s : r / 2)) /
                                    (o - r),
                                t =
                                    ((e = Math.max(Math.min(e, 1), 0)),
                                    i && (e = 1 - e),
                                    l.minTranslate() +
                                        (l.maxTranslate() - l.minTranslate()) *
                                            e);
                            l.updateProgress(t),
                                l.setTranslate(t),
                                l.updateActiveIndex(),
                                l.updateSlidesClasses();
                        }
                        function g(e) {
                            var t = l.params.scrollbar,
                                i = l.scrollbar,
                                a = l.$wrapperEl,
                                n = i.$el,
                                i = i.$dragEl;
                            (u = !0),
                                (s =
                                    e.target === i[0] || e.target === i
                                        ? m(e) -
                                          e.target.getBoundingClientRect()[
                                              l.isHorizontal() ? "left" : "top"
                                          ]
                                        : null),
                                e.preventDefault(),
                                e.stopPropagation(),
                                a.transition(100),
                                i.transition(100),
                                v(e),
                                clearTimeout(h),
                                n.transition(0),
                                t.hide && n.css("opacity", 1),
                                l.params.cssMode &&
                                    l.$wrapperEl.css(
                                        "scroll-snap-type",
                                        "none"
                                    ),
                                d("scrollbarDragStart", e);
                        }
                        function y(e) {
                            var t = l.scrollbar,
                                i = l.$wrapperEl,
                                a = t.$el,
                                t = t.$dragEl;
                            u &&
                                (e.preventDefault
                                    ? e.preventDefault()
                                    : (e.returnValue = !1),
                                v(e),
                                i.transition(0),
                                a.transition(0),
                                t.transition(0),
                                d("scrollbarDragMove", e));
                        }
                        function w(e) {
                            var t = l.params.scrollbar,
                                i = l.scrollbar,
                                a = l.$wrapperEl,
                                n = i.$el;
                            u &&
                                ((u = !1),
                                l.params.cssMode &&
                                    (l.$wrapperEl.css("scroll-snap-type", ""),
                                    a.transition("")),
                                t.hide &&
                                    (clearTimeout(h),
                                    (h = T(function () {
                                        n.css("opacity", 0), n.transition(400);
                                    }, 1e3))),
                                d("scrollbarDragEnd", e),
                                t.snapOnRelease) &&
                                l.slideToClosest();
                        }
                        function b(e) {
                            var t = l.scrollbar,
                                i = l.touchEventsTouch,
                                a = l.touchEventsDesktop,
                                n = l.params,
                                s = l.support,
                                t = t.$el[0],
                                r = !(
                                    !s.passiveListener || !n.passiveListeners
                                ) && { passive: !1, capture: !1 },
                                n = !(
                                    !s.passiveListener || !n.passiveListeners
                                ) && { passive: !0, capture: !1 };
                            t &&
                                ((e =
                                    "on" === e
                                        ? "addEventListener"
                                        : "removeEventListener"),
                                s.touch
                                    ? (t[e](i.start, g, r),
                                      t[e](i.move, y, r),
                                      t[e](i.end, w, n))
                                    : (t[e](a.start, g, r),
                                      c[e](a.move, y, r),
                                      c[e](a.end, w, n)));
                        }
                        function x() {
                            var e,
                                t = l.scrollbar,
                                i = l.$el,
                                a =
                                    ((l.params.scrollbar = O(
                                        l,
                                        l.originalParams.scrollbar,
                                        l.params.scrollbar,
                                        { el: "swiper-scrollbar" }
                                    )),
                                    l.params.scrollbar);
                            a.el &&
                                ((e = z(a.el)),
                                0 ===
                                    (i = (e =
                                        l.params.uniqueNavElements &&
                                        "string" == typeof a.el &&
                                        1 < e.length &&
                                        1 === i.find(a.el).length
                                            ? i.find(a.el)
                                            : e).find(
                                        ".".concat(l.params.scrollbar.dragClass)
                                    )).length &&
                                    ((i = z(
                                        '<div class="'.concat(
                                            l.params.scrollbar.dragClass,
                                            '"></div>'
                                        )
                                    )),
                                    e.append(i)),
                                Object.assign(t, {
                                    $el: e,
                                    el: e[0],
                                    $dragEl: i,
                                    dragEl: i[0],
                                }),
                                a.draggable && l.params.scrollbar.el && b("on"),
                                e) &&
                                e[l.enabled ? "removeClass" : "addClass"](
                                    l.params.scrollbar.lockClass
                                );
                        }
                        function S() {
                            l.params.scrollbar.el && b("off");
                        }
                        t({
                            scrollbar: {
                                el: null,
                                dragSize: "auto",
                                hide: !1,
                                draggable: !1,
                                snapOnRelease: !0,
                                lockClass: "swiper-scrollbar-lock",
                                dragClass: "swiper-scrollbar-drag",
                            },
                        }),
                            (l.scrollbar = {
                                el: null,
                                dragEl: null,
                                $el: null,
                                $dragEl: null,
                            }),
                            i("init", function () {
                                x(), f(), n();
                            }),
                            i(
                                "update resize observerUpdate lock unlock",
                                function () {
                                    f();
                                }
                            ),
                            i("setTranslate", function () {
                                n();
                            }),
                            i("setTransition", function (e, t) {
                                l.params.scrollbar.el &&
                                    l.scrollbar.el &&
                                    l.scrollbar.$dragEl.transition(t);
                            }),
                            i("enable disable", function () {
                                var e = l.scrollbar.$el;
                                e &&
                                    e[l.enabled ? "removeClass" : "addClass"](
                                        l.params.scrollbar.lockClass
                                    );
                            }),
                            i("destroy", function () {
                                S();
                            }),
                            Object.assign(l.scrollbar, {
                                updateSize: f,
                                setTranslate: n,
                                init: x,
                                destroy: S,
                            });
                    },
                    function (e) {
                        function s(e, t) {
                            var i = l.rtl ? -1 : 1,
                                a =
                                    (e = z(e)).attr("data-swiper-parallax") ||
                                    "0",
                                n = e.attr("data-swiper-parallax-x"),
                                s = e.attr("data-swiper-parallax-y"),
                                r = e.attr("data-swiper-parallax-scale"),
                                o = e.attr("data-swiper-parallax-opacity");
                            n || s
                                ? ((n = n || "0"), (s = s || "0"))
                                : l.isHorizontal()
                                ? ((n = a), (s = "0"))
                                : ((s = a), (n = "0")),
                                (n =
                                    0 <= n.indexOf("%")
                                        ? parseInt(n, 10) * t * i + "%"
                                        : n * t * i + "px"),
                                (s =
                                    0 <= s.indexOf("%")
                                        ? parseInt(s, 10) * t + "%"
                                        : s * t + "px"),
                                null != o &&
                                    ((a = o - (o - 1) * (1 - Math.abs(t))),
                                    (e[0].style.opacity = a)),
                                null == r
                                    ? e.transform(
                                          "translate3d("
                                              .concat(n, ", ")
                                              .concat(s, ", 0px)")
                                      )
                                    : ((i = r - (r - 1) * (1 - Math.abs(t))),
                                      e.transform(
                                          "translate3d("
                                              .concat(n, ", ")
                                              .concat(s, ", 0px) scale(")
                                              .concat(i, ")")
                                      ));
                        }
                        function t() {
                            var e = l.$el,
                                t = l.slides,
                                a = l.progress,
                                n = l.snapGrid;
                            e
                                .children(
                                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                )
                                .each(function (e) {
                                    s(e, a);
                                }),
                                t.each(function (e, t) {
                                    var i = e.progress;
                                    1 < l.params.slidesPerGroup &&
                                        "auto" !== l.params.slidesPerView &&
                                        (i +=
                                            Math.ceil(t / 2) -
                                            a * (n.length - 1)),
                                        (i = Math.min(Math.max(i, -1), 1)),
                                        z(e)
                                            .find(
                                                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                            )
                                            .each(function (e) {
                                                s(e, i);
                                            });
                                });
                        }
                        var l = e.swiper,
                            i = e.extendParams,
                            e = e.on;
                        i({ parallax: { enabled: !1 } });
                        e("beforeInit", function () {
                            l.params.parallax.enabled &&
                                ((l.params.watchSlidesProgress = !0),
                                (l.originalParams.watchSlidesProgress = !0));
                        }),
                            e("init", function () {
                                l.params.parallax.enabled && t();
                            }),
                            e("setTranslate", function () {
                                l.params.parallax.enabled && t();
                            }),
                            e("setTransition", function (e, t) {
                                var i;
                                l.params.parallax.enabled &&
                                    (void 0 === (i = t) && (i = l.params.speed),
                                    l.$el
                                        .find(
                                            "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                                        )
                                        .each(function (e) {
                                            var e = z(e),
                                                t =
                                                    parseInt(
                                                        e.attr(
                                                            "data-swiper-parallax-duration"
                                                        ),
                                                        10
                                                    ) || i;
                                            0 === i && (t = 0), e.transition(t);
                                        }));
                            });
                    },
                    function (e) {
                        var l = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            a = e.emit,
                            d = L();
                        t({
                            zoom: {
                                enabled: !1,
                                maxRatio: 3,
                                minRatio: 1,
                                toggle: !0,
                                containerClass: "swiper-zoom-container",
                                zoomedSlideClass: "swiper-slide-zoomed",
                            },
                        }),
                            (l.zoom = { enabled: !1 });
                        var n,
                            s,
                            r,
                            c = 1,
                            o = !1,
                            u = {
                                $slideEl: void 0,
                                slideWidth: void 0,
                                slideHeight: void 0,
                                $imageEl: void 0,
                                $imageWrapEl: void 0,
                                maxRatio: 3,
                            },
                            p = {
                                isTouched: void 0,
                                isMoved: void 0,
                                currentX: void 0,
                                currentY: void 0,
                                minX: void 0,
                                minY: void 0,
                                maxX: void 0,
                                maxY: void 0,
                                width: void 0,
                                height: void 0,
                                startX: void 0,
                                startY: void 0,
                                touchesStart: {},
                                touchesCurrent: {},
                            },
                            h = {
                                x: void 0,
                                y: void 0,
                                prevPositionX: void 0,
                                prevPositionY: void 0,
                                prevTime: void 0,
                            },
                            f = 1;
                        function m(e) {
                            var t, i, a;
                            return e.targetTouches.length < 2
                                ? 1
                                : ((t = e.targetTouches[0].pageX),
                                  (i = e.targetTouches[0].pageY),
                                  (a = e.targetTouches[1].pageX),
                                  (e = e.targetTouches[1].pageY),
                                  Math.sqrt(
                                      Math.pow(a - t, 2) + Math.pow(e - i, 2)
                                  ));
                        }
                        function v(e) {
                            var t = l.support,
                                i = l.params.zoom;
                            if (((r = s = !1), !t.gestures)) {
                                if (
                                    "touchstart" !== e.type ||
                                    ("touchstart" === e.type &&
                                        e.targetTouches.length < 2)
                                )
                                    return;
                                (s = !0), (u.scaleStart = m(e));
                            }
                            (u.$slideEl && u.$slideEl.length) ||
                            ((u.$slideEl = z(e.target).closest(
                                ".".concat(l.params.slideClass)
                            )),
                            0 === u.$slideEl.length &&
                                (u.$slideEl = l.slides.eq(l.activeIndex)),
                            (u.$imageEl = u.$slideEl
                                .find(".".concat(i.containerClass))
                                .eq(0)
                                .find(
                                    "picture, img, svg, canvas, .swiper-zoom-target"
                                )
                                .eq(0)),
                            (u.$imageWrapEl = u.$imageEl.parent(
                                ".".concat(i.containerClass)
                            )),
                            (u.maxRatio =
                                u.$imageWrapEl.attr("data-swiper-zoom") ||
                                i.maxRatio),
                            0 !== u.$imageWrapEl.length)
                                ? (u.$imageEl && u.$imageEl.transition(0),
                                  (o = !0))
                                : (u.$imageEl = void 0);
                        }
                        function g(e) {
                            var t = l.support,
                                i = l.params.zoom,
                                a = l.zoom;
                            if (!t.gestures) {
                                if (
                                    "touchmove" !== e.type ||
                                    ("touchmove" === e.type &&
                                        e.targetTouches.length < 2)
                                )
                                    return;
                                (r = !0), (u.scaleMove = m(e));
                            }
                            u.$imageEl && 0 !== u.$imageEl.length
                                ? (t.gestures
                                      ? (a.scale = e.scale * c)
                                      : (a.scale =
                                            (u.scaleMove / u.scaleStart) * c),
                                  a.scale > u.maxRatio &&
                                      (a.scale =
                                          u.maxRatio -
                                          1 +
                                          Math.pow(
                                              a.scale - u.maxRatio + 1,
                                              0.5
                                          )),
                                  a.scale < i.minRatio &&
                                      (a.scale =
                                          i.minRatio +
                                          1 -
                                          Math.pow(
                                              i.minRatio - a.scale + 1,
                                              0.5
                                          )),
                                  u.$imageEl.transform(
                                      "translate3d(0,0,0) scale(".concat(
                                          a.scale,
                                          ")"
                                      )
                                  ))
                                : "gesturechange" === e.type && v(e);
                        }
                        function y(e) {
                            var t = l.device,
                                i = l.support,
                                a = l.params.zoom,
                                n = l.zoom;
                            if (!i.gestures) {
                                if (!s || !r) return;
                                if (
                                    "touchend" !== e.type ||
                                    ("touchend" === e.type &&
                                        e.changedTouches.length < 2 &&
                                        !t.android)
                                )
                                    return;
                                r = s = !1;
                            }
                            u.$imageEl &&
                                0 !== u.$imageEl.length &&
                                ((n.scale = Math.max(
                                    Math.min(n.scale, u.maxRatio),
                                    a.minRatio
                                )),
                                u.$imageEl
                                    .transition(l.params.speed)
                                    .transform(
                                        "translate3d(0,0,0) scale(".concat(
                                            n.scale,
                                            ")"
                                        )
                                    ),
                                (c = n.scale),
                                (o = !1),
                                1 === n.scale) &&
                                (u.$slideEl = void 0);
                        }
                        function w(e) {
                            var t = l.zoom;
                            if (
                                u.$imageEl &&
                                0 !== u.$imageEl.length &&
                                ((l.allowClick = !1), p.isTouched) &&
                                u.$slideEl
                            ) {
                                p.isMoved ||
                                    ((p.width = u.$imageEl[0].offsetWidth),
                                    (p.height = u.$imageEl[0].offsetHeight),
                                    (p.startX = I(u.$imageWrapEl[0], "x") || 0),
                                    (p.startY = I(u.$imageWrapEl[0], "y") || 0),
                                    (u.slideWidth = u.$slideEl[0].offsetWidth),
                                    (u.slideHeight =
                                        u.$slideEl[0].offsetHeight),
                                    u.$imageWrapEl.transition(0));
                                var i = p.width * t.scale,
                                    t = p.height * t.scale;
                                if (!(i < u.slideWidth && t < u.slideHeight)) {
                                    if (
                                        ((p.minX = Math.min(
                                            u.slideWidth / 2 - i / 2,
                                            0
                                        )),
                                        (p.maxX = -p.minX),
                                        (p.minY = Math.min(
                                            u.slideHeight / 2 - t / 2,
                                            0
                                        )),
                                        (p.maxY = -p.minY),
                                        (p.touchesCurrent.x = (
                                            "touchmove" === e.type
                                                ? e.targetTouches[0]
                                                : e
                                        ).pageX),
                                        (p.touchesCurrent.y = (
                                            "touchmove" === e.type
                                                ? e.targetTouches[0]
                                                : e
                                        ).pageY),
                                        !p.isMoved && !o)
                                    ) {
                                        if (
                                            l.isHorizontal() &&
                                            ((Math.floor(p.minX) ===
                                                Math.floor(p.startX) &&
                                                p.touchesCurrent.x <
                                                    p.touchesStart.x) ||
                                                (Math.floor(p.maxX) ===
                                                    Math.floor(p.startX) &&
                                                    p.touchesCurrent.x >
                                                        p.touchesStart.x))
                                        )
                                            return void (p.isTouched = !1);
                                        if (
                                            !l.isHorizontal() &&
                                            ((Math.floor(p.minY) ===
                                                Math.floor(p.startY) &&
                                                p.touchesCurrent.y <
                                                    p.touchesStart.y) ||
                                                (Math.floor(p.maxY) ===
                                                    Math.floor(p.startY) &&
                                                    p.touchesCurrent.y >
                                                        p.touchesStart.y))
                                        )
                                            return void (p.isTouched = !1);
                                    }
                                    e.cancelable && e.preventDefault(),
                                        e.stopPropagation(),
                                        (p.isMoved = !0),
                                        (p.currentX =
                                            p.touchesCurrent.x -
                                            p.touchesStart.x +
                                            p.startX),
                                        (p.currentY =
                                            p.touchesCurrent.y -
                                            p.touchesStart.y +
                                            p.startY),
                                        p.currentX < p.minX &&
                                            (p.currentX =
                                                p.minX +
                                                1 -
                                                Math.pow(
                                                    p.minX - p.currentX + 1,
                                                    0.8
                                                )),
                                        p.currentX > p.maxX &&
                                            (p.currentX =
                                                p.maxX -
                                                1 +
                                                Math.pow(
                                                    p.currentX - p.maxX + 1,
                                                    0.8
                                                )),
                                        p.currentY < p.minY &&
                                            (p.currentY =
                                                p.minY +
                                                1 -
                                                Math.pow(
                                                    p.minY - p.currentY + 1,
                                                    0.8
                                                )),
                                        p.currentY > p.maxY &&
                                            (p.currentY =
                                                p.maxY -
                                                1 +
                                                Math.pow(
                                                    p.currentY - p.maxY + 1,
                                                    0.8
                                                )),
                                        h.prevPositionX ||
                                            (h.prevPositionX =
                                                p.touchesCurrent.x),
                                        h.prevPositionY ||
                                            (h.prevPositionY =
                                                p.touchesCurrent.y),
                                        h.prevTime || (h.prevTime = Date.now()),
                                        (h.x =
                                            (p.touchesCurrent.x -
                                                h.prevPositionX) /
                                            (Date.now() - h.prevTime) /
                                            2),
                                        (h.y =
                                            (p.touchesCurrent.y -
                                                h.prevPositionY) /
                                            (Date.now() - h.prevTime) /
                                            2),
                                        Math.abs(
                                            p.touchesCurrent.x - h.prevPositionX
                                        ) < 2 && (h.x = 0),
                                        Math.abs(
                                            p.touchesCurrent.y - h.prevPositionY
                                        ) < 2 && (h.y = 0),
                                        (h.prevPositionX = p.touchesCurrent.x),
                                        (h.prevPositionY = p.touchesCurrent.y),
                                        (h.prevTime = Date.now()),
                                        u.$imageWrapEl.transform(
                                            "translate3d("
                                                .concat(p.currentX, "px, ")
                                                .concat(p.currentY, "px,0)")
                                        );
                                }
                            }
                        }
                        function b() {
                            var e = l.zoom;
                            u.$slideEl &&
                                l.previousIndex !== l.activeIndex &&
                                (u.$imageEl &&
                                    u.$imageEl.transform(
                                        "translate3d(0,0,0) scale(1)"
                                    ),
                                u.$imageWrapEl &&
                                    u.$imageWrapEl.transform(
                                        "translate3d(0,0,0)"
                                    ),
                                (e.scale = 1),
                                (c = 1),
                                (u.$slideEl = void 0),
                                (u.$imageEl = void 0),
                                (u.$imageWrapEl = void 0));
                        }
                        function x(e) {
                            var t,
                                i,
                                a,
                                n,
                                s,
                                r = l.zoom,
                                o = l.params.zoom;
                            u.$slideEl ||
                                (e &&
                                    e.target &&
                                    (u.$slideEl = z(e.target).closest(
                                        ".".concat(l.params.slideClass)
                                    )),
                                u.$slideEl ||
                                    (l.params.virtual &&
                                    l.params.virtual.enabled &&
                                    l.virtual
                                        ? (u.$slideEl = l.$wrapperEl.children(
                                              ".".concat(
                                                  l.params.slideActiveClass
                                              )
                                          ))
                                        : (u.$slideEl = l.slides.eq(
                                              l.activeIndex
                                          ))),
                                (u.$imageEl = u.$slideEl
                                    .find(".".concat(o.containerClass))
                                    .eq(0)
                                    .find(
                                        "picture, img, svg, canvas, .swiper-zoom-target"
                                    )
                                    .eq(0)),
                                (u.$imageWrapEl = u.$imageEl.parent(
                                    ".".concat(o.containerClass)
                                ))),
                                u.$imageEl &&
                                    0 !== u.$imageEl.length &&
                                    u.$imageWrapEl &&
                                    0 !== u.$imageWrapEl.length &&
                                    (l.params.cssMode &&
                                        ((l.wrapperEl.style.overflow =
                                            "hidden"),
                                        (l.wrapperEl.style.touchAction =
                                            "none")),
                                    u.$slideEl.addClass(
                                        "".concat(o.zoomedSlideClass)
                                    ),
                                    (t =
                                        void 0 === p.touchesStart.x && e
                                            ? ((s = (
                                                  "touchend" === e.type
                                                      ? e.changedTouches[0]
                                                      : e
                                              ).pageX),
                                              ("touchend" === e.type
                                                  ? e.changedTouches[0]
                                                  : e
                                              ).pageY)
                                            : ((s = p.touchesStart.x),
                                              p.touchesStart.y)),
                                    (r.scale =
                                        u.$imageWrapEl.attr(
                                            "data-swiper-zoom"
                                        ) || o.maxRatio),
                                    (c =
                                        u.$imageWrapEl.attr(
                                            "data-swiper-zoom"
                                        ) || o.maxRatio),
                                    e
                                        ? ((o = u.$slideEl[0].offsetWidth),
                                          (e = u.$slideEl[0].offsetHeight),
                                          (s =
                                              u.$slideEl.offset().left +
                                              d.scrollX +
                                              o / 2 -
                                              s),
                                          (t =
                                              u.$slideEl.offset().top +
                                              d.scrollY +
                                              e / 2 -
                                              t),
                                          (n = u.$imageEl[0].offsetWidth),
                                          (a = u.$imageEl[0].offsetHeight),
                                          (n = n * r.scale),
                                          (a = a * r.scale),
                                          (o = Math.min(o / 2 - n / 2, 0)),
                                          (n = Math.min(e / 2 - a / 2, 0)),
                                          (e = -o) <
                                              (a =
                                                  (a = s * r.scale) < o
                                                      ? o
                                                      : a) && (a = e),
                                          (s = -n) <
                                              (i =
                                                  (i = t * r.scale) < n
                                                      ? n
                                                      : i) && (i = s))
                                        : (i = a = 0),
                                    u.$imageWrapEl
                                        .transition(300)
                                        .transform(
                                            "translate3d("
                                                .concat(a, "px, ")
                                                .concat(i, "px,0)")
                                        ),
                                    u.$imageEl
                                        .transition(300)
                                        .transform(
                                            "translate3d(0,0,0) scale(".concat(
                                                r.scale,
                                                ")"
                                            )
                                        ));
                        }
                        function S() {
                            var e = l.zoom,
                                t = l.params.zoom;
                            u.$slideEl ||
                                (l.params.virtual &&
                                l.params.virtual.enabled &&
                                l.virtual
                                    ? (u.$slideEl = l.$wrapperEl.children(
                                          ".".concat(l.params.slideActiveClass)
                                      ))
                                    : (u.$slideEl = l.slides.eq(l.activeIndex)),
                                (u.$imageEl = u.$slideEl
                                    .find(".".concat(t.containerClass))
                                    .eq(0)
                                    .find(
                                        "picture, img, svg, canvas, .swiper-zoom-target"
                                    )
                                    .eq(0)),
                                (u.$imageWrapEl = u.$imageEl.parent(
                                    ".".concat(t.containerClass)
                                ))),
                                u.$imageEl &&
                                    0 !== u.$imageEl.length &&
                                    u.$imageWrapEl &&
                                    0 !== u.$imageWrapEl.length &&
                                    (l.params.cssMode &&
                                        ((l.wrapperEl.style.overflow = ""),
                                        (l.wrapperEl.style.touchAction = "")),
                                    (e.scale = 1),
                                    (c = 1),
                                    u.$imageWrapEl
                                        .transition(300)
                                        .transform("translate3d(0,0,0)"),
                                    u.$imageEl
                                        .transition(300)
                                        .transform(
                                            "translate3d(0,0,0) scale(1)"
                                        ),
                                    u.$slideEl.removeClass(
                                        "".concat(t.zoomedSlideClass)
                                    ),
                                    (u.$slideEl = void 0));
                        }
                        function E(e) {
                            var t = l.zoom;
                            t.scale && 1 !== t.scale ? S() : x(e);
                        }
                        function T() {
                            var e = l.support;
                            return {
                                passiveListener: !(
                                    "touchstart" !== l.touchEvents.start ||
                                    !e.passiveListener ||
                                    !l.params.passiveListeners
                                ) && { passive: !0, capture: !1 },
                                activeListenerWithCapture:
                                    !e.passiveListener || {
                                        passive: !1,
                                        capture: !0,
                                    },
                            };
                        }
                        function C() {
                            return ".".concat(l.params.slideClass);
                        }
                        function M(e) {
                            var t = T().passiveListener,
                                i = C();
                            l.$wrapperEl[e]("gesturestart", i, v, t),
                                l.$wrapperEl[e]("gesturechange", i, g, t),
                                l.$wrapperEl[e]("gestureend", i, y, t);
                        }
                        function k() {
                            n || ((n = !0), M("on"));
                        }
                        function P() {
                            n && ((n = !1), M("off"));
                        }
                        function A() {
                            var e,
                                t,
                                i,
                                a = l.zoom;
                            a.enabled ||
                                ((a.enabled = !0),
                                (a = l.support),
                                (e = (t = T()).passiveListener),
                                (t = t.activeListenerWithCapture),
                                (i = C()),
                                a.gestures
                                    ? (l.$wrapperEl.on(
                                          l.touchEvents.start,
                                          k,
                                          e
                                      ),
                                      l.$wrapperEl.on(l.touchEvents.end, P, e))
                                    : "touchstart" === l.touchEvents.start &&
                                      (l.$wrapperEl.on(
                                          l.touchEvents.start,
                                          i,
                                          v,
                                          e
                                      ),
                                      l.$wrapperEl.on(
                                          l.touchEvents.move,
                                          i,
                                          g,
                                          t
                                      ),
                                      l.$wrapperEl.on(
                                          l.touchEvents.end,
                                          i,
                                          y,
                                          e
                                      ),
                                      l.touchEvents.cancel) &&
                                      l.$wrapperEl.on(
                                          l.touchEvents.cancel,
                                          i,
                                          y,
                                          e
                                      ),
                                l.$wrapperEl.on(
                                    l.touchEvents.move,
                                    ".".concat(l.params.zoom.containerClass),
                                    w,
                                    t
                                ));
                        }
                        function O() {
                            var e,
                                t,
                                i,
                                a = l.zoom;
                            a.enabled &&
                                ((e = l.support),
                                (a.enabled = !1),
                                (t = (a = T()).passiveListener),
                                (a = a.activeListenerWithCapture),
                                (i = C()),
                                e.gestures
                                    ? (l.$wrapperEl.off(
                                          l.touchEvents.start,
                                          k,
                                          t
                                      ),
                                      l.$wrapperEl.off(l.touchEvents.end, P, t))
                                    : "touchstart" === l.touchEvents.start &&
                                      (l.$wrapperEl.off(
                                          l.touchEvents.start,
                                          i,
                                          v,
                                          t
                                      ),
                                      l.$wrapperEl.off(
                                          l.touchEvents.move,
                                          i,
                                          g,
                                          a
                                      ),
                                      l.$wrapperEl.off(
                                          l.touchEvents.end,
                                          i,
                                          y,
                                          t
                                      ),
                                      l.touchEvents.cancel) &&
                                      l.$wrapperEl.off(
                                          l.touchEvents.cancel,
                                          i,
                                          y,
                                          t
                                      ),
                                l.$wrapperEl.off(
                                    l.touchEvents.move,
                                    ".".concat(l.params.zoom.containerClass),
                                    w,
                                    a
                                ));
                        }
                        Object.defineProperty(l.zoom, "scale", {
                            get: function () {
                                return f;
                            },
                            set: function (e) {
                                var t, i;
                                f !== e &&
                                    ((t = u.$imageEl ? u.$imageEl[0] : void 0),
                                    (i = u.$slideEl ? u.$slideEl[0] : void 0),
                                    a("zoomChange", e, t, i)),
                                    (f = e);
                            },
                        }),
                            i("init", function () {
                                l.params.zoom.enabled && A();
                            }),
                            i("destroy", function () {
                                O();
                            }),
                            i("touchStart", function (e, t) {
                                var i;
                                l.zoom.enabled &&
                                    ((t = t), (i = l.device), u.$imageEl) &&
                                    0 !== u.$imageEl.length &&
                                    !p.isTouched &&
                                    (i.android &&
                                        t.cancelable &&
                                        t.preventDefault(),
                                    (p.isTouched = !0),
                                    (p.touchesStart.x = (
                                        "touchstart" === t.type
                                            ? t.targetTouches[0]
                                            : t
                                    ).pageX),
                                    (p.touchesStart.y = (
                                        "touchstart" === t.type
                                            ? t.targetTouches[0]
                                            : t
                                    ).pageY));
                            }),
                            i("touchEnd", function (e, t) {
                                if (l.zoom.enabled) {
                                    var i = l.zoom;
                                    if (u.$imageEl && 0 !== u.$imageEl.length) {
                                        if (!p.isTouched || !p.isMoved)
                                            return void ((p.isTouched = !1),
                                            (p.isMoved = !1));
                                        (p.isTouched = !1), (p.isMoved = !1);
                                        var a = 300,
                                            n = 300,
                                            s = h.x * a,
                                            s = p.currentX + s,
                                            r = h.y * n,
                                            r = p.currentY + r,
                                            a =
                                                (0 !== h.x &&
                                                    (a = Math.abs(
                                                        (s - p.currentX) / h.x
                                                    )),
                                                0 !== h.y &&
                                                    (n = Math.abs(
                                                        (r - p.currentY) / h.y
                                                    )),
                                                Math.max(a, n)),
                                            n =
                                                ((p.currentX = s),
                                                (p.currentY = r),
                                                p.width * i.scale),
                                            s = p.height * i.scale;
                                        (p.minX = Math.min(
                                            u.slideWidth / 2 - n / 2,
                                            0
                                        )),
                                            (p.maxX = -p.minX),
                                            (p.minY = Math.min(
                                                u.slideHeight / 2 - s / 2,
                                                0
                                            )),
                                            (p.maxY = -p.minY),
                                            (p.currentX = Math.max(
                                                Math.min(p.currentX, p.maxX),
                                                p.minX
                                            )),
                                            (p.currentY = Math.max(
                                                Math.min(p.currentY, p.maxY),
                                                p.minY
                                            )),
                                            u.$imageWrapEl
                                                .transition(a)
                                                .transform(
                                                    "translate3d("
                                                        .concat(
                                                            p.currentX,
                                                            "px, "
                                                        )
                                                        .concat(
                                                            p.currentY,
                                                            "px,0)"
                                                        )
                                                );
                                    }
                                }
                            }),
                            i("doubleTap", function (e, t) {
                                !l.animating &&
                                    l.params.zoom.enabled &&
                                    l.zoom.enabled &&
                                    l.params.zoom.toggle &&
                                    E(t);
                            }),
                            i("transitionEnd", function () {
                                l.zoom.enabled && l.params.zoom.enabled && b();
                            }),
                            i("slideChange", function () {
                                l.zoom.enabled &&
                                    l.params.zoom.enabled &&
                                    l.params.cssMode &&
                                    b();
                            }),
                            Object.assign(l.zoom, {
                                enable: A,
                                disable: O,
                                in: x,
                                out: S,
                                toggle: E,
                            });
                    },
                    function (e) {
                        var f = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            c = e.emit,
                            d =
                                (t({
                                    lazy: {
                                        checkInView: !1,
                                        enabled: !1,
                                        loadPrevNext: !1,
                                        loadPrevNextAmount: 1,
                                        loadOnTransitionStart: !1,
                                        scrollingElement: "",
                                        elementClass: "swiper-lazy",
                                        loadingClass: "swiper-lazy-loading",
                                        loadedClass: "swiper-lazy-loaded",
                                        preloaderClass: "swiper-lazy-preloader",
                                    },
                                }),
                                !(f.lazy = {})),
                            m = !1;
                        function v(e, o) {
                            void 0 === o && (o = !0);
                            var l,
                                d = f.params.lazy;
                            void 0 !== e &&
                                0 !== f.slides.length &&
                                ((e = (l =
                                    f.virtual && f.params.virtual.enabled
                                        ? f.$wrapperEl.children(
                                              "."
                                                  .concat(
                                                      f.params.slideClass,
                                                      '[data-swiper-slide-index="'
                                                  )
                                                  .concat(e, '"]')
                                          )
                                        : f.slides.eq(e)).find(
                                    "."
                                        .concat(d.elementClass, ":not(.")
                                        .concat(d.loadedClass, "):not(.")
                                        .concat(d.loadingClass, ")")
                                )),
                                !l.hasClass(d.elementClass) ||
                                    l.hasClass(d.loadedClass) ||
                                    l.hasClass(d.loadingClass) ||
                                    e.push(l[0]),
                                0 !== e.length) &&
                                e.each(function (e) {
                                    var t = z(e),
                                        i =
                                            (t.addClass(d.loadingClass),
                                            t.attr("data-background")),
                                        a = t.attr("data-src"),
                                        n = t.attr("data-srcset"),
                                        s = t.attr("data-sizes"),
                                        r = t.parent("picture");
                                    f.loadImage(
                                        t[0],
                                        a || i,
                                        n,
                                        s,
                                        !1,
                                        function () {
                                            var e;
                                            null == f ||
                                                !f ||
                                                (f && !f.params) ||
                                                f.destroyed ||
                                                (i
                                                    ? (t.css(
                                                          "background-image",
                                                          'url("'.concat(
                                                              i,
                                                              '")'
                                                          )
                                                      ),
                                                      t.removeAttr(
                                                          "data-background"
                                                      ))
                                                    : (n &&
                                                          (t.attr("srcset", n),
                                                          t.removeAttr(
                                                              "data-srcset"
                                                          )),
                                                      s &&
                                                          (t.attr("sizes", s),
                                                          t.removeAttr(
                                                              "data-sizes"
                                                          )),
                                                      r.length &&
                                                          r
                                                              .children(
                                                                  "source"
                                                              )
                                                              .each(function (
                                                                  e
                                                              ) {
                                                                  e = z(e);
                                                                  e.attr(
                                                                      "data-srcset"
                                                                  ) &&
                                                                      (e.attr(
                                                                          "srcset",
                                                                          e.attr(
                                                                              "data-srcset"
                                                                          )
                                                                      ),
                                                                      e.removeAttr(
                                                                          "data-srcset"
                                                                      ));
                                                              }),
                                                      a &&
                                                          (t.attr("src", a),
                                                          t.removeAttr(
                                                              "data-src"
                                                          ))),
                                                t
                                                    .addClass(d.loadedClass)
                                                    .removeClass(
                                                        d.loadingClass
                                                    ),
                                                l
                                                    .find(
                                                        ".".concat(
                                                            d.preloaderClass
                                                        )
                                                    )
                                                    .remove(),
                                                f.params.loop &&
                                                    o &&
                                                    ((e = l.attr(
                                                        "data-swiper-slide-index"
                                                    )),
                                                    l.hasClass(
                                                        f.params
                                                            .slideDuplicateClass
                                                    )
                                                        ? v(
                                                              f.$wrapperEl
                                                                  .children(
                                                                      '[data-swiper-slide-index="'
                                                                          .concat(
                                                                              e,
                                                                              '"]:not(.'
                                                                          )
                                                                          .concat(
                                                                              f
                                                                                  .params
                                                                                  .slideDuplicateClass,
                                                                              ")"
                                                                          )
                                                                  )
                                                                  .index(),
                                                              !1
                                                          )
                                                        : v(
                                                              f.$wrapperEl
                                                                  .children(
                                                                      "."
                                                                          .concat(
                                                                              f
                                                                                  .params
                                                                                  .slideDuplicateClass,
                                                                              '[data-swiper-slide-index="'
                                                                          )
                                                                          .concat(
                                                                              e,
                                                                              '"]'
                                                                          )
                                                                  )
                                                                  .index(),
                                                              !1
                                                          )),
                                                c("lazyImageReady", l[0], t[0]),
                                                f.params.autoHeight &&
                                                    f.updateAutoHeight());
                                        }
                                    ),
                                        c("lazyImageLoad", l[0], t[0]);
                                });
                        }
                        function u() {
                            var t = f.$wrapperEl,
                                i = f.params,
                                a = f.slides,
                                e = f.activeIndex,
                                n = f.virtual && i.virtual.enabled,
                                s = i.lazy,
                                r = i.slidesPerView;
                            function o(e) {
                                if (n) {
                                    if (
                                        t.children(
                                            "."
                                                .concat(
                                                    i.slideClass,
                                                    '[data-swiper-slide-index="'
                                                )
                                                .concat(e, '"]')
                                        ).length
                                    )
                                        return 1;
                                } else if (a[e]) return 1;
                            }
                            function l(e) {
                                return n
                                    ? z(e).attr("data-swiper-slide-index")
                                    : z(e).index();
                            }
                            if (
                                ("auto" === r && (r = 0),
                                (m = m || !0),
                                f.params.watchSlidesProgress)
                            )
                                t.children(
                                    ".".concat(i.slideVisibleClass)
                                ).each(function (e) {
                                    v(
                                        n
                                            ? z(e).attr(
                                                  "data-swiper-slide-index"
                                              )
                                            : z(e).index()
                                    );
                                });
                            else if (1 < r)
                                for (var d = e; d < e + r; d += 1) o(d) && v(d);
                            else v(e);
                            if (s.loadPrevNext)
                                if (
                                    1 < r ||
                                    (s.loadPrevNextAmount &&
                                        1 < s.loadPrevNextAmount)
                                ) {
                                    for (
                                        var s = s.loadPrevNextAmount,
                                            c = Math.ceil(r),
                                            u = Math.min(
                                                e + c + Math.max(s, c),
                                                a.length
                                            ),
                                            s = Math.max(e - Math.max(c, s), 0),
                                            p = e + c;
                                        p < u;
                                        p += 1
                                    )
                                        o(p) && v(p);
                                    for (var h = s; h < e; h += 1) o(h) && v(h);
                                } else {
                                    (c = t.children(
                                        ".".concat(i.slideNextClass)
                                    )),
                                        (s =
                                            (0 < c.length && v(l(c)),
                                            t.children(
                                                ".".concat(i.slidePrevClass)
                                            )));
                                    0 < s.length && v(l(s));
                                }
                        }
                        function p() {
                            var e = L();
                            if (f && !f.destroyed) {
                                for (
                                    var t = f.params.lazy.scrollingElement
                                            ? z(f.params.lazy.scrollingElement)
                                            : z(e),
                                        i = t[0] === e,
                                        a = i ? e.innerWidth : t[0].offsetWidth,
                                        n = i
                                            ? e.innerHeight
                                            : t[0].offsetHeight,
                                        i = f.$el.offset(),
                                        s = !1,
                                        r =
                                            (f.rtlTranslate &&
                                                (i.left -= f.$el[0].scrollLeft),
                                            [
                                                [i.left, i.top],
                                                [i.left + f.width, i.top],
                                                [i.left, i.top + f.height],
                                                [
                                                    i.left + f.width,
                                                    i.top + f.height,
                                                ],
                                            ]),
                                        o = 0;
                                    o < r.length;
                                    o += 1
                                ) {
                                    var l = r[o];
                                    0 <= l[0] &&
                                        l[0] <= a &&
                                        0 <= l[1] &&
                                        l[1] <= n &&
                                        ((0 === l[0] && 0 === l[1]) ||
                                            (s = !0));
                                }
                                e = !(
                                    "touchstart" !== f.touchEvents.start ||
                                    !f.support.passiveListener ||
                                    !f.params.passiveListeners
                                ) && { passive: !0, capture: !1 };
                                s
                                    ? (u(), t.off("scroll", p, e))
                                    : d || ((d = !0), t.on("scroll", p, e));
                            }
                        }
                        i("beforeInit", function () {
                            f.params.lazy.enabled &&
                                f.params.preloadImages &&
                                (f.params.preloadImages = !1);
                        }),
                            i("init", function () {
                                f.params.lazy.enabled &&
                                    (f.params.lazy.checkInView ? p : u)();
                            }),
                            i("scroll", function () {
                                f.params.freeMode &&
                                    f.params.freeMode.enabled &&
                                    !f.params.freeMode.sticky &&
                                    u();
                            }),
                            i(
                                "scrollbarDragMove resize _freeModeNoMomentumRelease",
                                function () {
                                    f.params.lazy.enabled &&
                                        (f.params.lazy.checkInView ? p : u)();
                                }
                            ),
                            i("transitionStart", function () {
                                f.params.lazy.enabled &&
                                    (f.params.lazy.loadOnTransitionStart ||
                                        (!f.params.lazy.loadOnTransitionStart &&
                                            !m)) &&
                                    (f.params.lazy.checkInView ? p : u)();
                            }),
                            i("transitionEnd", function () {
                                f.params.lazy.enabled &&
                                    !f.params.lazy.loadOnTransitionStart &&
                                    (f.params.lazy.checkInView ? p : u)();
                            }),
                            i("slideChange", function () {
                                var e = f.params,
                                    t = e.lazy,
                                    i = e.cssMode,
                                    a = e.watchSlidesProgress,
                                    n = e.touchReleaseOnEdges,
                                    e = e.resistanceRatio;
                                t.enabled &&
                                    (i || (a && (n || 0 === e))) &&
                                    u();
                            }),
                            i("destroy", function () {
                                f.$el &&
                                    f.$el
                                        .find(
                                            ".".concat(
                                                f.params.lazy.loadingClass
                                            )
                                        )
                                        .removeClass(
                                            f.params.lazy.loadingClass
                                        );
                            }),
                            Object.assign(f.lazy, { load: u, loadInSlide: v });
                    },
                    function (e) {
                        var l = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        function d(e, t) {
                            var i,
                                a,
                                n,
                                s,
                                r,
                                o = function (e, t) {
                                    for (a = -1, i = e.length; 1 < i - a; )
                                        e[(n = (i + a) >> 1)] <= t
                                            ? (a = n)
                                            : (i = n);
                                    return i;
                                };
                            return (
                                (this.x = e),
                                (this.y = t),
                                (this.lastIndex = e.length - 1),
                                (this.interpolate = function (e) {
                                    return e
                                        ? ((r = o(this.x, e)),
                                          (s = r - 1),
                                          ((e - this.x[s]) *
                                              (this.y[r] - this.y[s])) /
                                              (this.x[r] - this.x[s]) +
                                              this.y[s])
                                        : 0;
                                }),
                                this
                            );
                        }
                        function i() {
                            l.controller.control &&
                                l.controller.spline &&
                                ((l.controller.spline = void 0),
                                delete l.controller.spline);
                        }
                        t({
                            controller: {
                                control: void 0,
                                inverse: !1,
                                by: "slide",
                            },
                        }),
                            (l.controller = { control: void 0 }),
                            e("beforeInit", function () {
                                l.controller.control =
                                    l.params.controller.control;
                            }),
                            e("update", function () {
                                i();
                            }),
                            e("resize", function () {
                                i();
                            }),
                            e("observerUpdate", function () {
                                i();
                            }),
                            e("setTranslate", function (e, t, i) {
                                l.controller.control &&
                                    l.controller.setTranslate(t, i);
                            }),
                            e("setTransition", function (e, t, i) {
                                l.controller.control &&
                                    l.controller.setTransition(t, i);
                            }),
                            Object.assign(l.controller, {
                                setTranslate: function (e, t) {
                                    var a,
                                        n,
                                        i = l.controller.control,
                                        s = l.constructor;
                                    function r(e) {
                                        var t,
                                            i = l.rtlTranslate
                                                ? -l.translate
                                                : l.translate;
                                        "slide" === l.params.controller.by &&
                                            ((t = e),
                                            l.controller.spline ||
                                                (l.controller.spline = l.params
                                                    .loop
                                                    ? new d(
                                                          l.slidesGrid,
                                                          t.slidesGrid
                                                      )
                                                    : new d(
                                                          l.snapGrid,
                                                          t.snapGrid
                                                      )),
                                            (n =
                                                -l.controller.spline.interpolate(
                                                    -i
                                                ))),
                                            (n &&
                                                "container" !==
                                                    l.params.controller.by) ||
                                                ((a =
                                                    (e.maxTranslate() -
                                                        e.minTranslate()) /
                                                    (l.maxTranslate() -
                                                        l.minTranslate())),
                                                (n =
                                                    (i - l.minTranslate()) * a +
                                                    e.minTranslate())),
                                            l.params.controller.inverse &&
                                                (n = e.maxTranslate() - n),
                                            e.updateProgress(n),
                                            e.setTranslate(n, l),
                                            e.updateActiveIndex(),
                                            e.updateSlidesClasses();
                                    }
                                    if (Array.isArray(i))
                                        for (var o = 0; o < i.length; o += 1)
                                            i[o] !== t &&
                                                i[o] instanceof s &&
                                                r(i[o]);
                                    else i instanceof s && t !== i && r(i);
                                },
                                setTransition: function (t, e) {
                                    var i,
                                        a = l.constructor,
                                        n = l.controller.control;
                                    function s(e) {
                                        e.setTransition(t, l),
                                            0 !== t &&
                                                (e.transitionStart(),
                                                e.params.autoHeight &&
                                                    T(function () {
                                                        e.updateAutoHeight();
                                                    }),
                                                e.$wrapperEl.transitionEnd(
                                                    function () {
                                                        n &&
                                                            (e.params.loop &&
                                                                "slide" ===
                                                                    l.params
                                                                        .controller
                                                                        .by &&
                                                                e.loopFix(),
                                                            e.transitionEnd());
                                                    }
                                                ));
                                    }
                                    if (Array.isArray(n))
                                        for (i = 0; i < n.length; i += 1)
                                            n[i] !== e &&
                                                n[i] instanceof a &&
                                                s(n[i]);
                                    else n instanceof a && e !== n && s(n);
                                },
                            });
                    },
                    function (e) {
                        var r = e.swiper,
                            t = e.extendParams,
                            e = e.on,
                            o =
                                (t({
                                    a11y: {
                                        enabled: !0,
                                        notificationClass:
                                            "swiper-notification",
                                        prevSlideMessage: "Previous slide",
                                        nextSlideMessage: "Next slide",
                                        firstSlideMessage:
                                            "This is the first slide",
                                        lastSlideMessage:
                                            "This is the last slide",
                                        paginationBulletMessage:
                                            "Go to slide {{index}}",
                                        slideLabelMessage:
                                            "{{index}} / {{slidesLength}}",
                                        containerMessage: null,
                                        containerRoleDescriptionMessage: null,
                                        itemRoleDescriptionMessage: null,
                                        slideRole: "group",
                                        id: null,
                                    },
                                }),
                                null);
                        function i(e) {
                            var t = o;
                            0 !== t.length && (t.html(""), t.html(e));
                        }
                        function a(e) {
                            e.attr("tabIndex", "0");
                        }
                        function n(e) {
                            e.attr("tabIndex", "-1");
                        }
                        function s(e, t) {
                            e.attr("role", t);
                        }
                        function l(e, t) {
                            e.attr("aria-roledescription", t);
                        }
                        function d(e, t) {
                            e.attr("aria-label", t);
                        }
                        function c(e) {
                            e.attr("aria-disabled", !0);
                        }
                        function u(e) {
                            e.attr("aria-disabled", !1);
                        }
                        function p(e) {
                            var t;
                            (13 !== e.keyCode && 32 !== e.keyCode) ||
                                ((t = r.params.a11y),
                                (e = z(e.target)),
                                r.navigation &&
                                    r.navigation.$nextEl &&
                                    e.is(r.navigation.$nextEl) &&
                                    ((r.isEnd && !r.params.loop) ||
                                        r.slideNext(),
                                    r.isEnd
                                        ? i(t.lastSlideMessage)
                                        : i(t.nextSlideMessage)),
                                r.navigation &&
                                    r.navigation.$prevEl &&
                                    e.is(r.navigation.$prevEl) &&
                                    ((r.isBeginning && !r.params.loop) ||
                                        r.slidePrev(),
                                    r.isBeginning
                                        ? i(t.firstSlideMessage)
                                        : i(t.prevSlideMessage)),
                                r.pagination &&
                                    e.is($(r.params.pagination.bulletClass)) &&
                                    e[0].click());
                        }
                        function h() {
                            return (
                                r.pagination &&
                                r.pagination.bullets &&
                                r.pagination.bullets.length
                            );
                        }
                        function f() {
                            return h() && r.params.pagination.clickable;
                        }
                        function m(e, t, i) {
                            a(e),
                                "BUTTON" !== e[0].tagName &&
                                    (s(e, "button"), e.on("keydown", p)),
                                d(e, i),
                                e.attr("aria-controls", t);
                        }
                        function v(e) {
                            var t, i;
                            (e = e.target.closest(
                                ".".concat(r.params.slideClass)
                            )) &&
                                r.slides.includes(e) &&
                                ((t = r.slides.indexOf(e) === r.activeIndex),
                                (i =
                                    r.params.watchSlidesProgress &&
                                    r.visibleSlides &&
                                    r.visibleSlides.includes(e)),
                                t || i || r.slideTo(r.slides.indexOf(e), 0));
                        }
                        function g() {
                            var i = r.params.a11y,
                                a =
                                    (i.itemRoleDescriptionMessage &&
                                        l(
                                            z(r.slides),
                                            i.itemRoleDescriptionMessage
                                        ),
                                    s(z(r.slides), i.slideRole),
                                    (r.params.loop
                                        ? r.slides.filter(function (e) {
                                              return !e.classList.contains(
                                                  r.params.slideDuplicateClass
                                              );
                                          })
                                        : r.slides
                                    ).length);
                            r.slides.each(function (e, t) {
                                (e = z(e)),
                                    (t = r.params.loop
                                        ? parseInt(
                                              e.attr("data-swiper-slide-index"),
                                              10
                                          )
                                        : t);
                                d(
                                    e,
                                    i.slideLabelMessage
                                        .replace(/\{\{index\}\}/, t + 1)
                                        .replace(/\{\{slidesLength\}\}/, a)
                                );
                            });
                        }
                        e("beforeInit", function () {
                            o = z(
                                '<span class="'.concat(
                                    r.params.a11y.notificationClass,
                                    '" aria-live="assertive" aria-atomic="true"></span>'
                                )
                            );
                        }),
                            e("afterInit", function () {
                                var e, t, i, a, n, s;
                                r.params.a11y.enabled &&
                                    ((i = r.params.a11y),
                                    r.$el.append(o),
                                    (a = r.$el),
                                    i.containerRoleDescriptionMessage &&
                                        l(a, i.containerRoleDescriptionMessage),
                                    i.containerMessage &&
                                        d(a, i.containerMessage),
                                    (a = r.$wrapperEl),
                                    (n =
                                        i.id ||
                                        a.attr("id") ||
                                        "swiper-wrapper-".concat(
                                            "x"
                                                .repeat(
                                                    (n =
                                                        void 0 === (n = 16)
                                                            ? 16
                                                            : n)
                                                )
                                                .replace(/x/g, function () {
                                                    return Math.round(
                                                        16 * Math.random()
                                                    ).toString(16);
                                                })
                                        )),
                                    (s =
                                        r.params.autoplay &&
                                        r.params.autoplay.enabled
                                            ? "off"
                                            : "polite"),
                                    a.attr("id", n),
                                    a.attr("aria-live", s),
                                    g(),
                                    r.navigation &&
                                        r.navigation.$nextEl &&
                                        (e = r.navigation.$nextEl),
                                    r.navigation &&
                                        r.navigation.$prevEl &&
                                        (t = r.navigation.$prevEl),
                                    e &&
                                        e.length &&
                                        m(e, n, i.nextSlideMessage),
                                    t &&
                                        t.length &&
                                        m(t, n, i.prevSlideMessage),
                                    f() &&
                                        r.pagination.$el.on(
                                            "keydown",
                                            $(r.params.pagination.bulletClass),
                                            p
                                        ),
                                    r.$el.on("focus", v, !0));
                            }),
                            e(
                                "slidesLengthChange snapGridLengthChange slidesGridLengthChange",
                                function () {
                                    r.params.a11y.enabled && g();
                                }
                            ),
                            e(
                                "fromEdge toEdge afterInit lock unlock",
                                function () {
                                    var e, t;
                                    r.params.a11y.enabled &&
                                        !r.params.loop &&
                                        !r.params.rewind &&
                                        r.navigation &&
                                        ((e = (t = r.navigation).$nextEl),
                                        (t = t.$prevEl) &&
                                            0 < t.length &&
                                            (r.isBeginning
                                                ? (c(t), n)
                                                : (u(t), a))(t),
                                        e && 0 < e.length) &&
                                        (r.isEnd ? (c(e), n) : (u(e), a))(e);
                                }
                            ),
                            e("paginationUpdate", function () {
                                var t;
                                r.params.a11y.enabled &&
                                    ((t = r.params.a11y), h()) &&
                                    r.pagination.bullets.each(function (e) {
                                        e = z(e);
                                        r.params.pagination.clickable &&
                                            (a(e),
                                            r.params.pagination.renderBullet ||
                                                (s(e, "button"),
                                                d(
                                                    e,
                                                    t.paginationBulletMessage.replace(
                                                        /\{\{index\}\}/,
                                                        e.index() + 1
                                                    )
                                                ))),
                                            e.is(
                                                ".".concat(
                                                    r.params.pagination
                                                        .bulletActiveClass
                                                )
                                            )
                                                ? e.attr("aria-current", "true")
                                                : e.removeAttr("aria-current");
                                    });
                            }),
                            e("destroy", function () {
                                var e, t;
                                r.params.a11y.enabled &&
                                    (o && 0 < o.length && o.remove(),
                                    r.navigation &&
                                        r.navigation.$nextEl &&
                                        (e = r.navigation.$nextEl),
                                    r.navigation &&
                                        r.navigation.$prevEl &&
                                        (t = r.navigation.$prevEl),
                                    e && e.off("keydown", p),
                                    t && t.off("keydown", p),
                                    f() &&
                                        r.pagination.$el.off(
                                            "keydown",
                                            $(r.params.pagination.bulletClass),
                                            p
                                        ),
                                    r.$el.off("focus", v, !0));
                            });
                    },
                    function (e) {
                        function r(e) {
                            return e
                                .toString()
                                .replace(/\s+/g, "-")
                                .replace(/[^\w-]+/g, "")
                                .replace(/--+/g, "-")
                                .replace(/^-+/, "")
                                .replace(/-+$/, "");
                        }
                        function t(e) {
                            var t = L(),
                                t = (e = (e ? new URL(e) : t.location).pathname
                                    .slice(1)
                                    .split("/")
                                    .filter(function (e) {
                                        return "" !== e;
                                    })).length;
                            return { key: e[t - 2], value: e[t - 1] };
                        }
                        function i(e, t) {
                            var i,
                                a,
                                n = L();
                            l &&
                                o.params.history.enabled &&
                                ((i = o.params.url
                                    ? new URL(o.params.url)
                                    : n.location),
                                (t = o.slides.eq(t)),
                                (t = r(t.attr("data-history"))),
                                0 < o.params.history.root.length
                                    ? ("/" ===
                                          (a = o.params.history.root)[
                                              a.length - 1
                                          ] && (a = a.slice(0, a.length - 1)),
                                      (t = ""
                                          .concat(a, "/")
                                          .concat(e, "/")
                                          .concat(t)))
                                    : i.pathname.includes(e) ||
                                      (t = "".concat(e, "/").concat(t)),
                                o.params.history.keepQuery && (t += i.search),
                                ((a = n.history.state) && a.value === t) ||
                                    (o.params.history.replaceState
                                        ? n.history.replaceState(
                                              { value: t },
                                              null,
                                              t
                                          )
                                        : n.history.pushState(
                                              { value: t },
                                              null,
                                              t
                                          )));
                        }
                        function a(e, t, i) {
                            if (t)
                                for (
                                    var a = 0, n = o.slides.length;
                                    a < n;
                                    a += 1
                                ) {
                                    var s = o.slides.eq(a);
                                    r(s.attr("data-history")) !== t ||
                                        s.hasClass(
                                            o.params.slideDuplicateClass
                                        ) ||
                                        ((s = s.index()), o.slideTo(s, e, i));
                                }
                            else o.slideTo(0, e, i);
                        }
                        function n() {
                            (d = t(o.params.url)),
                                a(o.params.speed, d.value, !1);
                        }
                        var o = e.swiper,
                            s = e.extendParams,
                            e = e.on,
                            l =
                                (s({
                                    history: {
                                        enabled: !1,
                                        root: "",
                                        replaceState: !1,
                                        key: "slides",
                                        keepQuery: !1,
                                    },
                                }),
                                !1),
                            d = {};
                        e("init", function () {
                            if (o.params.history.enabled) {
                                var e = L();
                                if (o.params.history) {
                                    if (!e.history || !e.history.pushState)
                                        return void ((o.params.history.enabled =
                                            !1),
                                        (o.params.hashNavigation.enabled = !0));
                                    (l = !0),
                                        ((d = t(o.params.url)).key ||
                                            d.value) &&
                                            (a(
                                                0,
                                                d.value,
                                                o.params.runCallbacksOnInit
                                            ),
                                            o.params.history.replaceState ||
                                                e.addEventListener(
                                                    "popstate",
                                                    n
                                                ));
                                }
                            }
                        }),
                            e("destroy", function () {
                                var e;
                                o.params.history.enabled &&
                                    ((e = L()),
                                    o.params.history.replaceState ||
                                        e.removeEventListener("popstate", n));
                            }),
                            e(
                                "transitionEnd _freeModeNoMomentumRelease",
                                function () {
                                    l && i(o.params.history.key, o.activeIndex);
                                }
                            ),
                            e("slideChange", function () {
                                l &&
                                    o.params.cssMode &&
                                    i(o.params.history.key, o.activeIndex);
                            });
                    },
                    function (e) {
                        function n() {
                            a("hashChange");
                            var e = o.location.hash.replace("#", "");
                            e !==
                                s.slides.eq(s.activeIndex).attr("data-hash") &&
                                void 0 !==
                                    (e = s.$wrapperEl
                                        .children(
                                            "."
                                                .concat(
                                                    s.params.slideClass,
                                                    '[data-hash="'
                                                )
                                                .concat(e, '"]')
                                        )
                                        .index()) &&
                                s.slideTo(e);
                        }
                        function t() {
                            var e;
                            r &&
                                s.params.hashNavigation.enabled &&
                                (s.params.hashNavigation.replaceState &&
                                l.history &&
                                l.history.replaceState
                                    ? l.history.replaceState(
                                          null,
                                          null,
                                          "#".concat(
                                              s.slides
                                                  .eq(s.activeIndex)
                                                  .attr("data-hash")
                                          ) || ""
                                      )
                                    : ((e =
                                          (e = s.slides.eq(s.activeIndex)).attr(
                                              "data-hash"
                                          ) || e.attr("data-history")),
                                      (o.location.hash = e || "")),
                                a("hashSet"));
                        }
                        var s = e.swiper,
                            i = e.extendParams,
                            a = e.emit,
                            e = e.on,
                            r = !1,
                            o = E(),
                            l = L();
                        i({
                            hashNavigation: {
                                enabled: !1,
                                replaceState: !1,
                                watchState: !1,
                            },
                        });
                        e("init", function () {
                            if (
                                s.params.hashNavigation.enabled &&
                                !(
                                    !s.params.hashNavigation.enabled ||
                                    (s.params.history &&
                                        s.params.history.enabled)
                                )
                            ) {
                                r = !0;
                                var e = o.location.hash.replace("#", "");
                                if (e)
                                    for (
                                        var t = 0, i = s.slides.length;
                                        t < i;
                                        t += 1
                                    ) {
                                        var a = s.slides.eq(t);
                                        (a.attr("data-hash") ||
                                            a.attr("data-history")) !== e ||
                                            a.hasClass(
                                                s.params.slideDuplicateClass
                                            ) ||
                                            ((a = a.index()),
                                            s.slideTo(
                                                a,
                                                0,
                                                s.params.runCallbacksOnInit,
                                                !0
                                            ));
                                    }
                                s.params.hashNavigation.watchState &&
                                    z(l).on("hashchange", n);
                            }
                        }),
                            e("destroy", function () {
                                s.params.hashNavigation.enabled &&
                                    s.params.hashNavigation.watchState &&
                                    z(l).off("hashchange", n);
                            }),
                            e(
                                "transitionEnd _freeModeNoMomentumRelease",
                                function () {
                                    r && t();
                                }
                            ),
                            e("slideChange", function () {
                                r && s.params.cssMode && t();
                            });
                    },
                    function (e) {
                        var a,
                            n = e.swiper,
                            t = e.extendParams,
                            i = e.on,
                            s = e.emit;
                        function r() {
                            function e() {
                                var e;
                                n.params.autoplay.reverseDirection
                                    ? n.params.loop
                                        ? (n.loopFix(),
                                          (e = n.slidePrev(
                                              n.params.speed,
                                              !0,
                                              !0
                                          )),
                                          s("autoplay"))
                                        : n.isBeginning
                                        ? n.params.autoplay.stopOnLastSlide
                                            ? l()
                                            : ((e = n.slideTo(
                                                  n.slides.length - 1,
                                                  n.params.speed,
                                                  !0,
                                                  !0
                                              )),
                                              s("autoplay"))
                                        : ((e = n.slidePrev(
                                              n.params.speed,
                                              !0,
                                              !0
                                          )),
                                          s("autoplay"))
                                    : n.params.loop
                                    ? (n.loopFix(),
                                      (e = n.slideNext(n.params.speed, !0, !0)),
                                      s("autoplay"))
                                    : n.isEnd
                                    ? n.params.autoplay.stopOnLastSlide
                                        ? l()
                                        : ((e = n.slideTo(
                                              0,
                                              n.params.speed,
                                              !0,
                                              !0
                                          )),
                                          s("autoplay"))
                                    : ((e = n.slideNext(
                                          n.params.speed,
                                          !0,
                                          !0
                                      )),
                                      s("autoplay")),
                                    ((n.params.cssMode && n.autoplay.running) ||
                                        !1 === e) &&
                                        r();
                            }
                            var t = n.slides.eq(n.activeIndex),
                                i = n.params.autoplay.delay;
                            t.attr("data-swiper-autoplay") &&
                                (i =
                                    t.attr("data-swiper-autoplay") ||
                                    n.params.autoplay.delay);
                            clearTimeout(a),
                                0 !== i
                                    ? (a = T(function () {
                                          e();
                                      }, i))
                                    : e();
                        }
                        function o() {
                            return (
                                void 0 === a &&
                                !n.autoplay.running &&
                                ((n.autoplay.running = !0),
                                s("autoplayStart"),
                                r(),
                                !0)
                            );
                        }
                        function l() {
                            return (
                                !!n.autoplay.running &&
                                void 0 !== a &&
                                (a && (clearTimeout(a), (a = void 0)),
                                (n.autoplay.running = !1),
                                s("autoplayStop"),
                                !0)
                            );
                        }
                        function d(e) {
                            !n.autoplay.running ||
                                n.autoplay.paused ||
                                (a && clearTimeout(a),
                                (n.autoplay.paused = !0),
                                0 !== e && n.params.autoplay.waitForTransition
                                    ? [
                                          "transitionend",
                                          "webkitTransitionEnd",
                                      ].forEach(function (e) {
                                          n.$wrapperEl[0].addEventListener(
                                              e,
                                              u
                                          );
                                      })
                                    : ((n.autoplay.paused = !1), r()));
                        }
                        function c() {
                            var e = E();
                            "hidden" === e.visibilityState &&
                                n.autoplay.running &&
                                d(),
                                "visible" === e.visibilityState &&
                                    n.autoplay.paused &&
                                    (r(), (n.autoplay.paused = !1));
                        }
                        function u(e) {
                            n &&
                                !n.destroyed &&
                                n.$wrapperEl &&
                                e.target === n.$wrapperEl[0] &&
                                ([
                                    "transitionend",
                                    "webkitTransitionEnd",
                                ].forEach(function (e) {
                                    n.$wrapperEl[0].removeEventListener(e, u);
                                }),
                                (n.autoplay.paused = !1),
                                (n.autoplay.running ? r : l)());
                        }
                        function p() {
                            (n.params.autoplay.disableOnInteraction
                                ? l
                                : (s("autoplayPause"), d))(),
                                [
                                    "transitionend",
                                    "webkitTransitionEnd",
                                ].forEach(function (e) {
                                    n.$wrapperEl[0].removeEventListener(e, u);
                                });
                        }
                        function h() {
                            n.params.autoplay.disableOnInteraction ||
                                ((n.autoplay.paused = !1),
                                s("autoplayResume"),
                                r());
                        }
                        t({
                            autoplay: {
                                enabled: !(n.autoplay = {
                                    running: !1,
                                    paused: !1,
                                }),
                                delay: 3e3,
                                waitForTransition: !0,
                                disableOnInteraction: !0,
                                stopOnLastSlide: !1,
                                reverseDirection: !1,
                                pauseOnMouseEnter: !1,
                            },
                        }),
                            i("init", function () {
                                n.params.autoplay.enabled &&
                                    (o(),
                                    E().addEventListener("visibilitychange", c),
                                    n.params.autoplay.pauseOnMouseEnter) &&
                                    (n.$el.on("mouseenter", p),
                                    n.$el.on("mouseleave", h));
                            }),
                            i("beforeTransitionStart", function (e, t, i) {
                                n.autoplay.running &&
                                    (i ||
                                    !n.params.autoplay.disableOnInteraction
                                        ? n.autoplay.pause(t)
                                        : l());
                            }),
                            i("sliderFirstMove", function () {
                                n.autoplay.running &&
                                    (n.params.autoplay.disableOnInteraction
                                        ? l
                                        : d)();
                            }),
                            i("touchEnd", function () {
                                n.params.cssMode &&
                                    n.autoplay.paused &&
                                    !n.params.autoplay.disableOnInteraction &&
                                    r();
                            }),
                            i("destroy", function () {
                                n.$el.off("mouseenter", p),
                                    n.$el.off("mouseleave", h),
                                    n.autoplay.running && l(),
                                    E().removeEventListener(
                                        "visibilitychange",
                                        c
                                    );
                            }),
                            Object.assign(n.autoplay, {
                                pause: d,
                                run: r,
                                start: o,
                                stop: l,
                            });
                    },
                    function (e) {
                        var p = e.swiper,
                            t = e.extendParams,
                            e = e.on,
                            i =
                                (t({
                                    thumbs: {
                                        swiper: null,
                                        multipleActiveThumbs: !0,
                                        autoScrollOffset: 0,
                                        slideThumbActiveClass:
                                            "swiper-slide-thumb-active",
                                        thumbsContainerClass: "swiper-thumbs",
                                    },
                                }),
                                !1),
                            a = !1;
                        function n() {
                            var e,
                                t,
                                i,
                                a = p.thumbs.swiper;
                            !a ||
                                a.destroyed ||
                                ((e = a.clickedIndex),
                                (i = a.clickedSlide) &&
                                    z(i).hasClass(
                                        p.params.thumbs.slideThumbActiveClass
                                    )) ||
                                (null != e &&
                                    ((i = a.params.loop
                                        ? parseInt(
                                              z(a.clickedSlide).attr(
                                                  "data-swiper-slide-index"
                                              ),
                                              10
                                          )
                                        : e),
                                    p.params.loop &&
                                        ((a = p.activeIndex),
                                        p.slides
                                            .eq(a)
                                            .hasClass(
                                                p.params.slideDuplicateClass
                                            ) &&
                                            (p.loopFix(),
                                            (p._clientLeft =
                                                p.$wrapperEl[0].clientLeft),
                                            (a = p.activeIndex)),
                                        (e = p.slides
                                            .eq(a)
                                            .prevAll(
                                                '[data-swiper-slide-index="'.concat(
                                                    i,
                                                    '"]'
                                                )
                                            )
                                            .eq(0)
                                            .index()),
                                        (t = p.slides
                                            .eq(a)
                                            .nextAll(
                                                '[data-swiper-slide-index="'.concat(
                                                    i,
                                                    '"]'
                                                )
                                            )
                                            .eq(0)
                                            .index()),
                                        (i =
                                            void 0 === e ||
                                            (void 0 !== t && t - a < a - e)
                                                ? t
                                                : e)),
                                    p.slideTo(i)));
                        }
                        function s() {
                            var e = p.params.thumbs;
                            if (i) return !1;
                            i = !0;
                            var t = p.constructor;
                            return (
                                e.swiper instanceof t
                                    ? ((p.thumbs.swiper = e.swiper),
                                      Object.assign(
                                          p.thumbs.swiper.originalParams,
                                          {
                                              watchSlidesProgress: !0,
                                              slideToClickedSlide: !1,
                                          }
                                      ),
                                      Object.assign(p.thumbs.swiper.params, {
                                          watchSlidesProgress: !0,
                                          slideToClickedSlide: !1,
                                      }))
                                    : u(e.swiper) &&
                                      ((e = Object.assign({}, e.swiper)),
                                      Object.assign(e, {
                                          watchSlidesProgress: !0,
                                          slideToClickedSlide: !1,
                                      }),
                                      (p.thumbs.swiper = new t(e)),
                                      (a = !0)),
                                p.thumbs.swiper.$el.addClass(
                                    p.params.thumbs.thumbsContainerClass
                                ),
                                p.thumbs.swiper.on("tap", n),
                                !0
                            );
                        }
                        function r(e) {
                            var t = p.thumbs.swiper;
                            if (t && !t.destroyed) {
                                var i,
                                    a,
                                    n,
                                    s =
                                        "auto" === t.params.slidesPerView
                                            ? t.slidesPerViewDynamic()
                                            : t.params.slidesPerView,
                                    r = p.params.thumbs.autoScrollOffset,
                                    o = r && !t.params.loop,
                                    l =
                                        ((p.realIndex !== t.realIndex || o) &&
                                            ((i = t.activeIndex),
                                            (n = t.params.loop
                                                ? (t.slides
                                                      .eq(i)
                                                      .hasClass(
                                                          t.params
                                                              .slideDuplicateClass
                                                      ) &&
                                                      (t.loopFix(),
                                                      (t._clientLeft =
                                                          t.$wrapperEl[0].clientLeft),
                                                      (i = t.activeIndex)),
                                                  (n = t.slides
                                                      .eq(i)
                                                      .prevAll(
                                                          '[data-swiper-slide-index="'.concat(
                                                              p.realIndex,
                                                              '"]'
                                                          )
                                                      )
                                                      .eq(0)
                                                      .index()),
                                                  (a = t.slides
                                                      .eq(i)
                                                      .nextAll(
                                                          '[data-swiper-slide-index="'.concat(
                                                              p.realIndex,
                                                              '"]'
                                                          )
                                                      )
                                                      .eq(0)
                                                      .index()),
                                                  (a =
                                                      void 0 === n
                                                          ? a
                                                          : void 0 === a
                                                          ? n
                                                          : a - i == i - n
                                                          ? 1 <
                                                            t.params
                                                                .slidesPerGroup
                                                              ? a
                                                              : i
                                                          : a - i < i - n
                                                          ? a
                                                          : n),
                                                  p.activeIndex >
                                                  p.previousIndex
                                                      ? "next"
                                                      : "prev")
                                                : (a = p.realIndex) >
                                                  p.previousIndex
                                                ? "next"
                                                : "prev"),
                                            o &&
                                                (a +=
                                                    "next" === n ? r : -1 * r),
                                            t.visibleSlidesIndexes) &&
                                            t.visibleSlidesIndexes.indexOf(a) <
                                                0 &&
                                            (t.params.centeredSlides
                                                ? (a =
                                                      i < a
                                                          ? a -
                                                            Math.floor(s / 2) +
                                                            1
                                                          : a +
                                                            Math.floor(s / 2) -
                                                            1)
                                                : i < a &&
                                                  t.params.slidesPerGroup,
                                            t.slideTo(a, e ? 0 : void 0)),
                                        1),
                                    d = p.params.thumbs.slideThumbActiveClass;
                                if (
                                    (1 < p.params.slidesPerView &&
                                        !p.params.centeredSlides &&
                                        (l = p.params.slidesPerView),
                                    p.params.thumbs.multipleActiveThumbs ||
                                        (l = 1),
                                    (l = Math.floor(l)),
                                    t.slides.removeClass(d),
                                    t.params.loop ||
                                        (t.params.virtual &&
                                            t.params.virtual.enabled))
                                )
                                    for (var c = 0; c < l; c += 1)
                                        t.$wrapperEl
                                            .children(
                                                '[data-swiper-slide-index="'.concat(
                                                    p.realIndex + c,
                                                    '"]'
                                                )
                                            )
                                            .addClass(d);
                                else
                                    for (var u = 0; u < l; u += 1)
                                        t.slides
                                            .eq(p.realIndex + u)
                                            .addClass(d);
                            }
                        }
                        (p.thumbs = { swiper: null }),
                            e("beforeInit", function () {
                                var e = p.params.thumbs;
                                e && e.swiper && (s(), r(!0));
                            }),
                            e(
                                "slideChange update resize observerUpdate",
                                function () {
                                    r();
                                }
                            ),
                            e("setTransition", function (e, t) {
                                var i = p.thumbs.swiper;
                                i && !i.destroyed && i.setTransition(t);
                            }),
                            e("beforeDestroy", function () {
                                var e = p.thumbs.swiper;
                                e && !e.destroyed && a && e.destroy();
                            }),
                            Object.assign(p.thumbs, { init: s, update: r });
                    },
                    function (e) {
                        var f = e.swiper,
                            t = e.extendParams,
                            m = e.emit,
                            v = e.once;
                        t({
                            freeMode: {
                                enabled: !1,
                                momentum: !0,
                                momentumRatio: 1,
                                momentumBounce: !0,
                                momentumBounceRatio: 1,
                                momentumVelocityRatio: 1,
                                sticky: !1,
                                minimumVelocity: 0.02,
                            },
                        }),
                            Object.assign(f, {
                                freeMode: {
                                    onTouchStart: function () {
                                        var e = f.getTranslate();
                                        f.setTranslate(e),
                                            f.setTransition(0),
                                            (f.touchEventsData.velocities.length = 0),
                                            f.freeMode.onTouchEnd({
                                                currentPos: f.rtl
                                                    ? f.translate
                                                    : -f.translate,
                                            });
                                    },
                                    onTouchMove: function () {
                                        var e = f.touchEventsData,
                                            t = f.touches;
                                        0 === e.velocities.length &&
                                            e.velocities.push({
                                                position:
                                                    t[
                                                        f.isHorizontal()
                                                            ? "startX"
                                                            : "startY"
                                                    ],
                                                time: e.touchStartTime,
                                            }),
                                            e.velocities.push({
                                                position:
                                                    t[
                                                        f.isHorizontal()
                                                            ? "currentX"
                                                            : "currentY"
                                                    ],
                                                time: S(),
                                            });
                                    },
                                    onTouchEnd: function (e) {
                                        var e = e.currentPos,
                                            t = f.params,
                                            i = f.$wrapperEl,
                                            a = f.rtlTranslate,
                                            n = f.snapGrid,
                                            s = f.touchEventsData,
                                            r = S() - s.touchStartTime;
                                        if (e < -f.minTranslate())
                                            f.slideTo(f.activeIndex);
                                        else if (e > -f.maxTranslate())
                                            f.slides.length < n.length
                                                ? f.slideTo(n.length - 1)
                                                : f.slideTo(
                                                      f.slides.length - 1
                                                  );
                                        else {
                                            if (t.freeMode.momentum) {
                                                (!(1 < s.velocities.length) ||
                                                    ((e = s.velocities.pop()),
                                                    (l = s.velocities.pop()),
                                                    (o =
                                                        e.position -
                                                        l.position),
                                                    (l = e.time - l.time),
                                                    (f.velocity = o / l),
                                                    (f.velocity /= 2),
                                                    Math.abs(f.velocity) <
                                                        t.freeMode
                                                            .minimumVelocity &&
                                                        (f.velocity = 0),
                                                    150 < l) ||
                                                    300 < S() - e.time) &&
                                                    (f.velocity = 0),
                                                    (f.velocity *=
                                                        t.freeMode.momentumVelocityRatio),
                                                    (s.velocities.length = 0);
                                                var o =
                                                        1e3 *
                                                        t.freeMode
                                                            .momentumRatio,
                                                    l = f.velocity * o,
                                                    d = f.translate + l;
                                                a && (d = -d);
                                                var c,
                                                    u,
                                                    e = !1,
                                                    l =
                                                        20 *
                                                        Math.abs(f.velocity) *
                                                        t.freeMode
                                                            .momentumBounceRatio;
                                                if (d < f.maxTranslate())
                                                    t.freeMode.momentumBounce
                                                        ? (d +
                                                              f.maxTranslate() <
                                                              -l &&
                                                              (d =
                                                                  f.maxTranslate() -
                                                                  l),
                                                          (c =
                                                              f.maxTranslate()),
                                                          (s.allowMomentumBounce =
                                                              e =
                                                                  !0))
                                                        : (d =
                                                              f.maxTranslate()),
                                                        t.loop &&
                                                            t.centeredSlides &&
                                                            (u = !0);
                                                else if (d > f.minTranslate())
                                                    t.freeMode.momentumBounce
                                                        ? (d -
                                                              f.minTranslate() >
                                                              l &&
                                                              (d =
                                                                  f.minTranslate() +
                                                                  l),
                                                          (c =
                                                              f.minTranslate()),
                                                          (s.allowMomentumBounce =
                                                              e =
                                                                  !0))
                                                        : (d =
                                                              f.minTranslate()),
                                                        t.loop &&
                                                            t.centeredSlides &&
                                                            (u = !0);
                                                else if (t.freeMode.sticky) {
                                                    for (
                                                        var p, h = 0;
                                                        h < n.length;
                                                        h += 1
                                                    )
                                                        if (n[h] > -d) {
                                                            p = h;
                                                            break;
                                                        }
                                                    d = -(d =
                                                        Math.abs(n[p] - d) <
                                                            Math.abs(
                                                                n[p - 1] - d
                                                            ) ||
                                                        "next" ===
                                                            f.swipeDirection
                                                            ? n[p]
                                                            : n[p - 1]);
                                                }
                                                if (
                                                    (u &&
                                                        v(
                                                            "transitionEnd",
                                                            function () {
                                                                f.loopFix();
                                                            }
                                                        ),
                                                    0 !== f.velocity)
                                                )
                                                    (o = a
                                                        ? Math.abs(
                                                              (-d -
                                                                  f.translate) /
                                                                  f.velocity
                                                          )
                                                        : Math.abs(
                                                              (d -
                                                                  f.translate) /
                                                                  f.velocity
                                                          )),
                                                        t.freeMode.sticky &&
                                                            (o =
                                                                (l = Math.abs(
                                                                    (a
                                                                        ? -d
                                                                        : d) -
                                                                        f.translate
                                                                )) <
                                                                (u =
                                                                    f
                                                                        .slidesSizesGrid[
                                                                        f
                                                                            .activeIndex
                                                                    ])
                                                                    ? t.speed
                                                                    : l < 2 * u
                                                                    ? 1.5 *
                                                                      t.speed
                                                                    : 2.5 *
                                                                      t.speed);
                                                else if (t.freeMode.sticky)
                                                    return void f.slideToClosest();
                                                t.freeMode.momentumBounce && e
                                                    ? (f.updateProgress(c),
                                                      f.setTransition(o),
                                                      f.setTranslate(d),
                                                      f.transitionStart(
                                                          !0,
                                                          f.swipeDirection
                                                      ),
                                                      (f.animating = !0),
                                                      i.transitionEnd(
                                                          function () {
                                                              f &&
                                                                  !f.destroyed &&
                                                                  s.allowMomentumBounce &&
                                                                  (m(
                                                                      "momentumBounce"
                                                                  ),
                                                                  f.setTransition(
                                                                      t.speed
                                                                  ),
                                                                  setTimeout(
                                                                      function () {
                                                                          f.setTranslate(
                                                                              c
                                                                          ),
                                                                              i.transitionEnd(
                                                                                  function () {
                                                                                      f &&
                                                                                          !f.destroyed &&
                                                                                          f.transitionEnd();
                                                                                  }
                                                                              );
                                                                      },
                                                                      0
                                                                  ));
                                                          }
                                                      ))
                                                    : f.velocity
                                                    ? (m(
                                                          "_freeModeNoMomentumRelease"
                                                      ),
                                                      f.updateProgress(d),
                                                      f.setTransition(o),
                                                      f.setTranslate(d),
                                                      f.transitionStart(
                                                          !0,
                                                          f.swipeDirection
                                                      ),
                                                      f.animating ||
                                                          ((f.animating = !0),
                                                          i.transitionEnd(
                                                              function () {
                                                                  f &&
                                                                      !f.destroyed &&
                                                                      f.transitionEnd();
                                                              }
                                                          )))
                                                    : f.updateProgress(d),
                                                    f.updateActiveIndex(),
                                                    f.updateSlidesClasses();
                                            } else {
                                                if (t.freeMode.sticky)
                                                    return void f.slideToClosest();
                                                t.freeMode &&
                                                    m(
                                                        "_freeModeNoMomentumRelease"
                                                    );
                                            }
                                            (!t.freeMode.momentum ||
                                                r >= t.longSwipesMs) &&
                                                (f.updateProgress(),
                                                f.updateActiveIndex(),
                                                f.updateSlidesClasses());
                                        }
                                    },
                                },
                            });
                    },
                    function (e) {
                        var c,
                            u,
                            p,
                            h = e.swiper;
                        (0, e.extendParams)({
                            grid: { rows: 1, fill: "column" },
                        }),
                            (h.grid = {
                                initSlides: function (e) {
                                    var t = h.params.slidesPerView,
                                        i = h.params.grid,
                                        a = i.rows,
                                        i = i.fill;
                                    (u = c / a),
                                        (p = Math.floor(e / a)),
                                        (c =
                                            Math.floor(e / a) === e / a
                                                ? e
                                                : Math.ceil(e / a) * a),
                                        "auto" !== t &&
                                            "row" === i &&
                                            (c = Math.max(c, t * a));
                                },
                                updateSlide: function (e, t, i, a) {
                                    var n,
                                        s,
                                        r = h.params,
                                        o = r.slidesPerGroup,
                                        r = r.spaceBetween,
                                        l = h.params.grid,
                                        d = l.rows,
                                        l = l.fill;
                                    "row" === l && 1 < o
                                        ? ((n =
                                              e -
                                              d *
                                                  o *
                                                  (s = Math.floor(
                                                      e / (o * d)
                                                  ))),
                                          (i =
                                              0 === s
                                                  ? o
                                                  : Math.min(
                                                        Math.ceil(
                                                            (i - s * d * o) / d
                                                        ),
                                                        o
                                                    )),
                                          (i =
                                              (s =
                                                  n -
                                                  (n = Math.floor(n / i)) * i +
                                                  s * o) +
                                              (n * c) / d),
                                          t.css({
                                              "-webkit-order": i,
                                              order: i,
                                          }))
                                        : "column" === l
                                        ? ((n =
                                              e - (s = Math.floor(e / d)) * d),
                                          (p < s || (s === p && n === d - 1)) &&
                                              d <= (n += 1) &&
                                              ((n = 0), (s += 1)))
                                        : (s = e - (n = Math.floor(e / u)) * u),
                                        t.css(
                                            a("margin-top"),
                                            0 !== n
                                                ? r && "".concat(r, "px")
                                                : ""
                                        );
                                },
                                updateWrapperSize: function (e, t, i) {
                                    var a = h.params,
                                        n = a.spaceBetween,
                                        s = a.centeredSlides,
                                        r = a.roundLengths,
                                        a = h.params.grid.rows;
                                    if (
                                        ((h.virtualSize = (e + n) * c),
                                        (h.virtualSize =
                                            Math.ceil(h.virtualSize / a) - n),
                                        h.$wrapperEl.css(
                                            _defineProperty(
                                                {},
                                                i("width"),
                                                "".concat(
                                                    h.virtualSize + n,
                                                    "px"
                                                )
                                            )
                                        ),
                                        s)
                                    ) {
                                        t.splice(0, t.length);
                                        for (
                                            var o = [], l = 0;
                                            l < t.length;
                                            l += 1
                                        ) {
                                            var d = t[l];
                                            r && (d = Math.floor(d)),
                                                t[l] < h.virtualSize + t[0] &&
                                                    o.push(d);
                                        }
                                        t.push.apply(t, o);
                                    }
                                },
                            });
                    },
                    function (e) {
                        e = e.swiper;
                        Object.assign(e, {
                            appendSlide: function (e) {
                                var t = this,
                                    i = t.$wrapperEl,
                                    a = t.params;
                                if (
                                    (a.loop && t.loopDestroy(),
                                    "object" == _typeof(e) && "length" in e)
                                )
                                    for (var n = 0; n < e.length; n += 1)
                                        e[n] && i.append(e[n]);
                                else i.append(e);
                                a.loop && t.loopCreate(),
                                    a.observer || t.update();
                            }.bind(e),
                            prependSlide: function (e) {
                                var t = this,
                                    i = t.params,
                                    a = t.$wrapperEl,
                                    n = t.activeIndex,
                                    s = (i.loop && t.loopDestroy(), n + 1);
                                if ("object" == _typeof(e) && "length" in e) {
                                    for (var r = 0; r < e.length; r += 1)
                                        e[r] && a.prepend(e[r]);
                                    s = n + e.length;
                                } else a.prepend(e);
                                i.loop && t.loopCreate(),
                                    i.observer || t.update(),
                                    t.slideTo(s, 0, !1);
                            }.bind(e),
                            addSlide: function (e, t) {
                                var i = this,
                                    a = i.$wrapperEl,
                                    n = i.params,
                                    s = i.activeIndex,
                                    r =
                                        (n.loop &&
                                            ((s -= i.loopedSlides),
                                            i.loopDestroy(),
                                            (i.slides = a.children(
                                                ".".concat(n.slideClass)
                                            ))),
                                        i.slides.length);
                                if (e <= 0) i.prependSlide(t);
                                else if (r <= e) i.appendSlide(t);
                                else {
                                    for (
                                        var o = e < s ? s + 1 : s,
                                            l = [],
                                            d = r - 1;
                                        e <= d;
                                        --d
                                    ) {
                                        var c = i.slides.eq(d);
                                        c.remove(), l.unshift(c);
                                    }
                                    if (
                                        "object" == _typeof(t) &&
                                        "length" in t
                                    ) {
                                        for (var u = 0; u < t.length; u += 1)
                                            t[u] && a.append(t[u]);
                                        o = e < s ? s + t.length : s;
                                    } else a.append(t);
                                    for (var p = 0; p < l.length; p += 1)
                                        a.append(l[p]);
                                    n.loop && i.loopCreate(),
                                        n.observer || i.update(),
                                        n.loop
                                            ? i.slideTo(
                                                  o + i.loopedSlides,
                                                  0,
                                                  !1
                                              )
                                            : i.slideTo(o, 0, !1);
                                }
                            }.bind(e),
                            removeSlide: function (e) {
                                var t = this,
                                    i = t.params,
                                    a = t.$wrapperEl,
                                    n = t.activeIndex;
                                i.loop &&
                                    ((n -= t.loopedSlides),
                                    t.loopDestroy(),
                                    (t.slides = a.children(
                                        ".".concat(i.slideClass)
                                    )));
                                var s,
                                    r = n;
                                if ("object" == _typeof(e) && "length" in e)
                                    for (var o = 0; o < e.length; o += 1)
                                        (s = e[o]),
                                            t.slides[s] &&
                                                t.slides.eq(s).remove(),
                                            s < r && --r;
                                else
                                    t.slides[(s = e)] &&
                                        t.slides.eq(s).remove(),
                                        s < r && --r;
                                (r = Math.max(r, 0)),
                                    i.loop && t.loopCreate(),
                                    i.observer || t.update(),
                                    i.loop
                                        ? t.slideTo(r + t.loopedSlides, 0, !1)
                                        : t.slideTo(r, 0, !1);
                            }.bind(e),
                            removeAllSlides: function () {
                                for (
                                    var e = [], t = 0;
                                    t < this.slides.length;
                                    t += 1
                                )
                                    e.push(t);
                                this.removeSlide(e);
                            }.bind(e),
                        });
                    },
                    function (e) {
                        var o = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        t({ fadeEffect: { crossFade: !1, transformEl: null } }),
                            g({
                                effect: "fade",
                                swiper: o,
                                on: e,
                                setTranslate: function () {
                                    for (
                                        var e = o.slides,
                                            t = o.params.fadeEffect,
                                            i = 0;
                                        i < e.length;
                                        i += 1
                                    ) {
                                        var a = o.slides.eq(i),
                                            n = -a[0].swiperSlideOffset,
                                            s =
                                                (o.params.virtualTranslate ||
                                                    (n -= o.translate),
                                                0),
                                            r =
                                                (o.isHorizontal() ||
                                                    ((s = n), (n = 0)),
                                                o.params.fadeEffect.crossFade
                                                    ? Math.max(
                                                          1 -
                                                              Math.abs(
                                                                  a[0].progress
                                                              ),
                                                          0
                                                      )
                                                    : 1 +
                                                      Math.min(
                                                          Math.max(
                                                              a[0].progress,
                                                              -1
                                                          ),
                                                          0
                                                      ));
                                        _(t, a)
                                            .css({ opacity: r })
                                            .transform(
                                                "translate3d("
                                                    .concat(n, "px, ")
                                                    .concat(s, "px, 0px)")
                                            );
                                    }
                                },
                                setTransition: function (e) {
                                    var t = o.params.fadeEffect.transformEl;
                                    (t
                                        ? o.slides.find(t)
                                        : o.slides
                                    ).transition(e),
                                        y({
                                            swiper: o,
                                            duration: e,
                                            transformEl: t,
                                            allSlides: !0,
                                        });
                                },
                                overwriteParams: function () {
                                    return {
                                        slidesPerView: 1,
                                        slidesPerGroup: 1,
                                        watchSlidesProgress: !0,
                                        spaceBetween: 0,
                                        virtualTranslate: !o.params.cssMode,
                                    };
                                },
                            });
                    },
                    function (e) {
                        function E(e, t, i) {
                            var a = i
                                    ? e.find(".swiper-slide-shadow-left")
                                    : e.find(".swiper-slide-shadow-top"),
                                n = i
                                    ? e.find(".swiper-slide-shadow-right")
                                    : e.find(".swiper-slide-shadow-bottom");
                            0 === a.length &&
                                ((a = z(
                                    '<div class="swiper-slide-shadow-'.concat(
                                        i ? "left" : "top",
                                        '"></div>'
                                    )
                                )),
                                e.append(a)),
                                0 === n.length &&
                                    ((n = z(
                                        '<div class="swiper-slide-shadow-'.concat(
                                            i ? "right" : "bottom",
                                            '"></div>'
                                        )
                                    )),
                                    e.append(n)),
                                a.length &&
                                    (a[0].style.opacity = Math.max(-t, 0)),
                                n.length &&
                                    (n[0].style.opacity = Math.max(t, 0));
                        }
                        var T = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        t({
                            cubeEffect: {
                                slideShadows: !0,
                                shadow: !0,
                                shadowOffset: 20,
                                shadowScale: 0.94,
                            },
                        });
                        g({
                            effect: "cube",
                            swiper: T,
                            on: e,
                            setTranslate: function () {
                                var e = T.$el,
                                    t = T.$wrapperEl,
                                    i = T.slides,
                                    a = T.width,
                                    n = T.height,
                                    s = T.rtlTranslate,
                                    r = T.size,
                                    o = T.browser,
                                    l = T.params.cubeEffect,
                                    d = T.isHorizontal(),
                                    c = T.virtual && T.params.virtual.enabled,
                                    u = 0;
                                l.shadow &&
                                    (d
                                        ? (0 ===
                                              (S = t.find(
                                                  ".swiper-cube-shadow"
                                              )).length &&
                                              ((S = z(
                                                  '<div class="swiper-cube-shadow"></div>'
                                              )),
                                              t.append(S)),
                                          S.css({ height: "".concat(a, "px") }))
                                        : 0 ===
                                              (S = e.find(
                                                  ".swiper-cube-shadow"
                                              )).length &&
                                          ((S = z(
                                              '<div class="swiper-cube-shadow"></div>'
                                          )),
                                          e.append(S)));
                                for (var p, h = 0; h < i.length; h += 1) {
                                    var f = i.eq(h),
                                        m = h,
                                        v =
                                            90 *
                                            (m = c
                                                ? parseInt(
                                                      f.attr(
                                                          "data-swiper-slide-index"
                                                      ),
                                                      10
                                                  )
                                                : m),
                                        g = Math.floor(v / 360),
                                        y =
                                            (s &&
                                                ((v = -v),
                                                (g = Math.floor(-v / 360))),
                                            Math.max(
                                                Math.min(f[0].progress, 1),
                                                -1
                                            )),
                                        w = 0,
                                        b = 0,
                                        x = 0,
                                        g =
                                            (m % 4 == 0
                                                ? ((w = 4 * -g * r), (x = 0))
                                                : (m - 1) % 4 == 0
                                                ? ((w = 0), (x = 4 * -g * r))
                                                : (m - 2) % 4 == 0
                                                ? ((w = r + 4 * g * r), (x = r))
                                                : (m - 3) % 4 == 0 &&
                                                  ((w = -r),
                                                  (x = 3 * r + 4 * r * g)),
                                            s && (w = -w),
                                            d || ((b = w), (w = 0)),
                                            "rotateX("
                                                .concat(
                                                    d ? 0 : -v,
                                                    "deg) rotateY("
                                                )
                                                .concat(
                                                    d ? v : 0,
                                                    "deg) translate3d("
                                                )
                                                .concat(w, "px, ")
                                                .concat(b, "px, ")
                                                .concat(x, "px)"));
                                    y <= 1 &&
                                        -1 < y &&
                                        ((u = 90 * m + 90 * y), s) &&
                                        (u = 90 * -m - 90 * y),
                                        f.transform(g),
                                        l.slideShadows && E(f, y, d);
                                }
                                t.css({
                                    "-webkit-transform-origin":
                                        "50% 50% -".concat(r / 2, "px"),
                                    "transform-origin": "50% 50% -".concat(
                                        r / 2,
                                        "px"
                                    ),
                                }),
                                    l.shadow &&
                                        (d
                                            ? S.transform(
                                                  "translate3d(0px, "
                                                      .concat(
                                                          a / 2 +
                                                              l.shadowOffset,
                                                          "px, "
                                                      )
                                                      .concat(
                                                          -a / 2,
                                                          "px) rotateX(90deg) rotateZ(0deg) scale("
                                                      )
                                                      .concat(
                                                          l.shadowScale,
                                                          ")"
                                                      )
                                              )
                                            : ((e =
                                                  Math.abs(u) -
                                                  90 *
                                                      Math.floor(
                                                          Math.abs(u) / 90
                                                      )),
                                              (a =
                                                  1.5 -
                                                  (Math.sin(
                                                      (2 * e * Math.PI) / 360
                                                  ) /
                                                      2 +
                                                      Math.cos(
                                                          (2 * e * Math.PI) /
                                                              360
                                                      ) /
                                                          2)),
                                              (e = l.shadowScale),
                                              (a = l.shadowScale / a),
                                              (p = l.shadowOffset),
                                              S.transform(
                                                  "scale3d("
                                                      .concat(e, ", 1, ")
                                                      .concat(
                                                          a,
                                                          ") translate3d(0px, "
                                                      )
                                                      .concat(n / 2 + p, "px, ")
                                                      .concat(
                                                          -n / 2 / a,
                                                          "px) rotateX(-90deg)"
                                                      )
                                              )));
                                var S = o.isSafari || o.isWebView ? -r / 2 : 0;
                                t.transform(
                                    "translate3d(0px,0,"
                                        .concat(S, "px) rotateX(")
                                        .concat(
                                            T.isHorizontal() ? 0 : u,
                                            "deg) rotateY("
                                        )
                                        .concat(
                                            T.isHorizontal() ? -u : 0,
                                            "deg)"
                                        )
                                ),
                                    t[0].style.setProperty(
                                        "--swiper-cube-translate-z",
                                        "".concat(S, "px")
                                    );
                            },
                            setTransition: function (e) {
                                var t = T.$el;
                                T.slides
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e),
                                    T.params.cubeEffect.shadow &&
                                        !T.isHorizontal() &&
                                        t
                                            .find(".swiper-cube-shadow")
                                            .transition(e);
                            },
                            recreateShadows: function () {
                                var i = T.isHorizontal();
                                T.slides.each(function (e) {
                                    var t = Math.max(
                                        Math.min(e.progress, 1),
                                        -1
                                    );
                                    E(z(e), t, i);
                                });
                            },
                            getEffectParams: function () {
                                return T.params.cubeEffect;
                            },
                            perspective: function () {
                                return !0;
                            },
                            overwriteParams: function () {
                                return {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    resistanceRatio: 0,
                                    spaceBetween: 0,
                                    centeredSlides: !1,
                                    virtualTranslate: !0,
                                };
                            },
                        });
                    },
                    function (e) {
                        function c(e, t, i) {
                            var a = u.isHorizontal()
                                    ? e.find(".swiper-slide-shadow-left")
                                    : e.find(".swiper-slide-shadow-top"),
                                n = u.isHorizontal()
                                    ? e.find(".swiper-slide-shadow-right")
                                    : e.find(".swiper-slide-shadow-bottom");
                            0 === a.length &&
                                (a = D(
                                    i,
                                    e,
                                    u.isHorizontal() ? "left" : "top"
                                )),
                                0 === n.length &&
                                    (n = D(
                                        i,
                                        e,
                                        u.isHorizontal() ? "right" : "bottom"
                                    )),
                                a.length &&
                                    (a[0].style.opacity = Math.max(-t, 0)),
                                n.length &&
                                    (n[0].style.opacity = Math.max(t, 0));
                        }
                        var u = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        t({
                            flipEffect: {
                                slideShadows: !0,
                                limitRotation: !0,
                                transformEl: null,
                            },
                        });
                        g({
                            effect: "flip",
                            swiper: u,
                            on: e,
                            setTranslate: function () {
                                for (
                                    var e = u.slides,
                                        t = u.rtlTranslate,
                                        i = u.params.flipEffect,
                                        a = 0;
                                    a < e.length;
                                    a += 1
                                ) {
                                    var n = e.eq(a),
                                        s = n[0].progress,
                                        r =
                                            (u.params.flipEffect
                                                .limitRotation &&
                                                (s = Math.max(
                                                    Math.min(n[0].progress, 1),
                                                    -1
                                                )),
                                            n[0].swiperSlideOffset),
                                        o = -180 * s,
                                        l = 0,
                                        r = u.params.cssMode
                                            ? -r - u.translate
                                            : -r,
                                        d = 0,
                                        s =
                                            (u.isHorizontal()
                                                ? t && (o = -o)
                                                : ((d = r),
                                                  (l = -o),
                                                  (o = r = 0)),
                                            (n[0].style.zIndex =
                                                -Math.abs(Math.round(s)) +
                                                e.length),
                                            i.slideShadows && c(n, s, i),
                                            "translate3d("
                                                .concat(r, "px, ")
                                                .concat(d, "px, 0px) rotateX(")
                                                .concat(l, "deg) rotateY(")
                                                .concat(o, "deg)"));
                                    _(i, n).transform(s);
                                }
                            },
                            setTransition: function (e) {
                                var t = u.params.flipEffect.transformEl;
                                (t ? u.slides.find(t) : u.slides)
                                    .transition(e)
                                    .find(
                                        ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                    )
                                    .transition(e),
                                    y({
                                        swiper: u,
                                        duration: e,
                                        transformEl: t,
                                    });
                            },
                            recreateShadows: function () {
                                var a = u.params.flipEffect;
                                u.slides.each(function (e) {
                                    var t = z(e),
                                        i = t[0].progress;
                                    u.params.flipEffect.limitRotation &&
                                        (i = Math.max(
                                            Math.min(e.progress, 1),
                                            -1
                                        )),
                                        c(t, i, a);
                                });
                            },
                            getEffectParams: function () {
                                return u.params.flipEffect;
                            },
                            perspective: function () {
                                return !0;
                            },
                            overwriteParams: function () {
                                return {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    watchSlidesProgress: !0,
                                    spaceBetween: 0,
                                    virtualTranslate: !u.params.cssMode,
                                };
                            },
                        });
                    },
                    function (e) {
                        var b = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        t({
                            coverflowEffect: {
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                scale: 1,
                                modifier: 1,
                                slideShadows: !0,
                                transformEl: null,
                            },
                        }),
                            g({
                                effect: "coverflow",
                                swiper: b,
                                on: e,
                                setTranslate: function () {
                                    for (
                                        var e = b.width,
                                            t = b.height,
                                            i = b.slides,
                                            a = b.slidesSizesGrid,
                                            n = b.params.coverflowEffect,
                                            s = b.isHorizontal(),
                                            r = b.translate,
                                            o = s ? e / 2 - r : t / 2 - r,
                                            l = s ? n.rotate : -n.rotate,
                                            d = n.depth,
                                            c = 0,
                                            u = i.length;
                                        c < u;
                                        c += 1
                                    ) {
                                        var p = i.eq(c),
                                            h = a[c],
                                            f =
                                                (o -
                                                    p[0].swiperSlideOffset -
                                                    h / 2) /
                                                h,
                                            f =
                                                "function" == typeof n.modifier
                                                    ? n.modifier(f)
                                                    : f * n.modifier,
                                            m = s ? l * f : 0,
                                            v = s ? 0 : l * f,
                                            g = -d * Math.abs(f),
                                            y = n.stretch,
                                            h =
                                                ("string" == typeof y &&
                                                    -1 !== y.indexOf("%") &&
                                                    (y =
                                                        (parseFloat(n.stretch) /
                                                            100) *
                                                        h),
                                                s ? 0 : y * f),
                                            y = s ? y * f : 0,
                                            w = 1 - (1 - n.scale) * Math.abs(f),
                                            y =
                                                (Math.abs(y) < 0.001 && (y = 0),
                                                Math.abs(h) < 0.001 && (h = 0),
                                                Math.abs(g) < 0.001 && (g = 0),
                                                Math.abs(m) < 0.001 && (m = 0),
                                                Math.abs(v) < 0.001 && (v = 0),
                                                Math.abs(w) < 0.001 && (w = 0),
                                                "translate3d("
                                                    .concat(y, "px,")
                                                    .concat(h, "px,")
                                                    .concat(g, "px)  rotateX(")
                                                    .concat(v, "deg) rotateY(")
                                                    .concat(m, "deg) scale(")
                                                    .concat(w, ")"));
                                        _(n, p).transform(y),
                                            (p[0].style.zIndex =
                                                1 - Math.abs(Math.round(f))),
                                            n.slideShadows &&
                                                ((h = s
                                                    ? p.find(
                                                          ".swiper-slide-shadow-left"
                                                      )
                                                    : p.find(
                                                          ".swiper-slide-shadow-top"
                                                      )),
                                                (g = s
                                                    ? p.find(
                                                          ".swiper-slide-shadow-right"
                                                      )
                                                    : p.find(
                                                          ".swiper-slide-shadow-bottom"
                                                      )),
                                                0 === h.length &&
                                                    (h = D(
                                                        n,
                                                        p,
                                                        s ? "left" : "top"
                                                    )),
                                                0 === g.length &&
                                                    (g = D(
                                                        n,
                                                        p,
                                                        s ? "right" : "bottom"
                                                    )),
                                                h.length &&
                                                    (h[0].style.opacity =
                                                        0 < f ? f : 0),
                                                g.length) &&
                                                (g[0].style.opacity =
                                                    0 < -f ? -f : 0);
                                    }
                                },
                                setTransition: function (e) {
                                    var t =
                                        b.params.coverflowEffect.transformEl;
                                    (t ? b.slides.find(t) : b.slides)
                                        .transition(e)
                                        .find(
                                            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                                        )
                                        .transition(e);
                                },
                                perspective: function () {
                                    return !0;
                                },
                                overwriteParams: function () {
                                    return { watchSlidesProgress: !0 };
                                },
                            });
                    },
                    function (e) {
                        var f = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        t({
                            creativeEffect: {
                                transformEl: null,
                                limitProgress: 1,
                                shadowPerProgress: !1,
                                progressMultiplier: 1,
                                perspective: !0,
                                prev: {
                                    translate: [0, 0, 0],
                                    rotate: [0, 0, 0],
                                    opacity: 1,
                                    scale: 1,
                                },
                                next: {
                                    translate: [0, 0, 0],
                                    rotate: [0, 0, 0],
                                    opacity: 1,
                                    scale: 1,
                                },
                            },
                        });
                        g({
                            effect: "creative",
                            swiper: f,
                            on: e,
                            setTranslate: function () {
                                for (
                                    var c = f.slides,
                                        e = f.$wrapperEl,
                                        t = f.slidesSizesGrid,
                                        u = f.params.creativeEffect,
                                        p = u.progressMultiplier,
                                        h = f.params.centeredSlides,
                                        i =
                                            (h &&
                                                ((t =
                                                    t[0] / 2 -
                                                        f.params
                                                            .slidesOffsetBefore ||
                                                    0),
                                                e.transform(
                                                    "translateX(calc(50% - ".concat(
                                                        t,
                                                        "px))"
                                                    )
                                                )),
                                            0);
                                    i < c.length;
                                    i += 1
                                )
                                    !(function (e) {
                                        var e = c.eq(e),
                                            t = e[0].progress,
                                            i = Math.min(
                                                Math.max(
                                                    e[0].progress,
                                                    -u.limitProgress
                                                ),
                                                u.limitProgress
                                            ),
                                            a = i,
                                            n =
                                                (h ||
                                                    (a = Math.min(
                                                        Math.max(
                                                            e[0]
                                                                .originalProgress,
                                                            -u.limitProgress
                                                        ),
                                                        u.limitProgress
                                                    )),
                                                e[0].swiperSlideOffset),
                                            s = [
                                                f.params.cssMode
                                                    ? -n - f.translate
                                                    : -n,
                                                0,
                                                0,
                                            ],
                                            r = [0, 0, 0],
                                            n = !1,
                                            o =
                                                (f.isHorizontal() ||
                                                    ((s[1] = s[0]), (s[0] = 0)),
                                                {
                                                    translate: [0, 0, 0],
                                                    rotate: [0, 0, 0],
                                                    scale: 1,
                                                    opacity: 1,
                                                }),
                                            t =
                                                (i < 0
                                                    ? ((o = u.next), (n = !0))
                                                    : 0 < i &&
                                                      ((o = u.prev), (n = !0)),
                                                s.forEach(function (e, t) {
                                                    s[t] = "calc("
                                                        .concat(e, "px + (")
                                                        .concat(
                                                            "string" ==
                                                                typeof (e =
                                                                    o.translate[
                                                                        t
                                                                    ])
                                                                ? e
                                                                : "".concat(
                                                                      e,
                                                                      "px"
                                                                  ),
                                                            " * "
                                                        )
                                                        .concat(
                                                            Math.abs(i * p),
                                                            "))"
                                                        );
                                                }),
                                                r.forEach(function (e, t) {
                                                    r[t] =
                                                        o.rotate[t] *
                                                        Math.abs(i * p);
                                                }),
                                                (e[0].style.zIndex =
                                                    -Math.abs(Math.round(t)) +
                                                    c.length),
                                                s.join(", ")),
                                            l = "rotateX("
                                                .concat(r[0], "deg) rotateY(")
                                                .concat(r[1], "deg) rotateZ(")
                                                .concat(r[2], "deg)"),
                                            d = "scale(".concat(
                                                a < 0
                                                    ? 1 + (1 - o.scale) * a * p
                                                    : 1 - (1 - o.scale) * a * p,
                                                ")"
                                            ),
                                            a =
                                                a < 0
                                                    ? 1 +
                                                      (1 - o.opacity) * a * p
                                                    : 1 -
                                                      (1 - o.opacity) * a * p,
                                            t = "translate3d("
                                                .concat(t, ") ")
                                                .concat(l, " ")
                                                .concat(d),
                                            n =
                                                (((n && o.shadow) || !n) &&
                                                    (l =
                                                        0 ===
                                                            (l = e.children(
                                                                ".swiper-slide-shadow"
                                                            )).length &&
                                                        o.shadow
                                                            ? D(u, e)
                                                            : l).length &&
                                                    ((d = u.shadowPerProgress
                                                        ? i *
                                                          (1 / u.limitProgress)
                                                        : i),
                                                    (l[0].style.opacity =
                                                        Math.min(
                                                            Math.max(
                                                                Math.abs(d),
                                                                0
                                                            ),
                                                            1
                                                        ))),
                                                _(u, e));
                                        n.transform(t).css({ opacity: a }),
                                            o.origin &&
                                                n.css(
                                                    "transform-origin",
                                                    o.origin
                                                );
                                    })(i);
                            },
                            setTransition: function (e) {
                                var t = f.params.creativeEffect.transformEl;
                                (t ? f.slides.find(t) : f.slides)
                                    .transition(e)
                                    .find(".swiper-slide-shadow")
                                    .transition(e),
                                    y({
                                        swiper: f,
                                        duration: e,
                                        transformEl: t,
                                        allSlides: !0,
                                    });
                            },
                            perspective: function () {
                                return f.params.creativeEffect.perspective;
                            },
                            overwriteParams: function () {
                                return {
                                    watchSlidesProgress: !0,
                                    virtualTranslate: !f.params.cssMode,
                                };
                            },
                        });
                    },
                    function (e) {
                        var w = e.swiper,
                            t = e.extendParams,
                            e = e.on;
                        t({
                            cardsEffect: {
                                slideShadows: !0,
                                transformEl: null,
                                rotate: !0,
                            },
                        }),
                            g({
                                effect: "cards",
                                swiper: w,
                                on: e,
                                setTranslate: function () {
                                    for (
                                        var e = w.slides,
                                            t = w.activeIndex,
                                            i = w.params.cardsEffect,
                                            a = w.touchEventsData,
                                            n = a.startTranslate,
                                            s = a.isTouched,
                                            r = w.translate,
                                            o = 0;
                                        o < e.length;
                                        o += 1
                                    ) {
                                        var l = e.eq(o),
                                            d = l[0].progress,
                                            c = Math.min(Math.max(d, -4), 4),
                                            u = l[0].swiperSlideOffset,
                                            u =
                                                (w.params.centeredSlides &&
                                                    !w.params.cssMode &&
                                                    w.$wrapperEl.transform(
                                                        "translateX(".concat(
                                                            w.minTranslate(),
                                                            "px)"
                                                        )
                                                    ),
                                                w.params.centeredSlides &&
                                                    w.params.cssMode &&
                                                    (u -=
                                                        e[0].swiperSlideOffset),
                                                w.params.cssMode
                                                    ? -u - w.translate
                                                    : -u),
                                            p = 0,
                                            h = -100 * Math.abs(c),
                                            f = 1,
                                            m = -2 * c,
                                            v = 8 - 0.75 * Math.abs(c),
                                            g =
                                                w.virtual &&
                                                w.params.virtual.enabled
                                                    ? w.virtual.from + o
                                                    : o,
                                            y =
                                                (g === t || g === t - 1) &&
                                                0 < c &&
                                                c < 1 &&
                                                (s || w.params.cssMode) &&
                                                r < n,
                                            g =
                                                (g === t || g === t + 1) &&
                                                c < 0 &&
                                                -1 < c &&
                                                (s || w.params.cssMode) &&
                                                n < r,
                                            y =
                                                ((y || g) &&
                                                    ((m +=
                                                        -28 *
                                                        c *
                                                        (y = Math.pow(
                                                            1 -
                                                                Math.abs(
                                                                    (Math.abs(
                                                                        c
                                                                    ) -
                                                                        0.5) /
                                                                        0.5
                                                                ),
                                                            0.5
                                                        ))),
                                                    (f += -0.5 * y),
                                                    (v += 96 * y),
                                                    (p =
                                                        -25 * y * Math.abs(c) +
                                                        "%")),
                                                (u =
                                                    c < 0
                                                        ? "calc("
                                                              .concat(
                                                                  u,
                                                                  "px + ("
                                                              )
                                                              .concat(
                                                                  v *
                                                                      Math.abs(
                                                                          c
                                                                      ),
                                                                  "%))"
                                                              )
                                                        : 0 < c
                                                        ? "calc("
                                                              .concat(
                                                                  u,
                                                                  "px + (-"
                                                              )
                                                              .concat(
                                                                  v *
                                                                      Math.abs(
                                                                          c
                                                                      ),
                                                                  "%))"
                                                              )
                                                        : "".concat(u, "px")),
                                                w.isHorizontal() ||
                                                    ((g = p), (p = u), (u = g)),
                                                c < 0
                                                    ? "" + (1 + (1 - f) * c)
                                                    : "" + (1 - (1 - f) * c)),
                                            v = "\n        translate3d("
                                                .concat(u, ", ")
                                                .concat(p, ", ")
                                                .concat(
                                                    h,
                                                    "px)\n        rotateZ("
                                                )
                                                .concat(
                                                    i.rotate ? m : 0,
                                                    "deg)\n        scale("
                                                )
                                                .concat(y, ")\n      ");
                                        i.slideShadows &&
                                            (g =
                                                0 ===
                                                (g = l.find(
                                                    ".swiper-slide-shadow"
                                                )).length
                                                    ? D(i, l)
                                                    : g).length &&
                                            (g[0].style.opacity = Math.min(
                                                Math.max(
                                                    (Math.abs(c) - 0.5) / 0.5,
                                                    0
                                                ),
                                                1
                                            )),
                                            (l[0].style.zIndex =
                                                -Math.abs(Math.round(d)) +
                                                e.length),
                                            _(i, l).transform(v);
                                    }
                                },
                                setTransition: function (e) {
                                    var t = w.params.cardsEffect.transformEl;
                                    (t ? w.slides.find(t) : w.slides)
                                        .transition(e)
                                        .find(".swiper-slide-shadow")
                                        .transition(e),
                                        y({
                                            swiper: w,
                                            duration: e,
                                            transformEl: t,
                                        });
                                },
                                perspective: function () {
                                    return !0;
                                },
                                overwriteParams: function () {
                                    return {
                                        watchSlidesProgress: !0,
                                        virtualTranslate: !w.params.cssMode,
                                    };
                                },
                            });
                    },
                ]),
                v
            );
        }),
        "object" ==
            ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
        "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e =
                  "undefined" != typeof globalThis
                      ? globalThis
                      : e || self).Swiper = t()),
        (e = _this),
        (t = function () {
            function t(e) {
                return (t =
                    "function" == typeof Symbol &&
                    "symbol" == _typeof(Symbol.iterator)
                        ? function (e) {
                              return _typeof(e);
                          }
                        : function (e) {
                              return e &&
                                  "function" == typeof Symbol &&
                                  e.constructor === Symbol &&
                                  e !== Symbol.prototype
                                  ? "symbol"
                                  : _typeof(e);
                          })(e);
            }
            function r(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
            }
            function a(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var a = t[i];
                    (a.enumerable = a.enumerable || !1),
                        (a.configurable = !0),
                        "value" in a && (a.writable = !0),
                        Object.defineProperty(e, a.key, a);
                }
            }
            function e(e, t, i) {
                t && a(e.prototype, t), i && a(e, i);
            }
            var o = Date.now();
            function d(e) {
                var t = {},
                    i = !0,
                    a = 0,
                    n = arguments.length;
                "[object Boolean]" === Object.prototype.toString.call(e) &&
                    ((i = e), a++);
                for (; a < n; a++) {
                    s = void 0;
                    var s,
                        r = arguments[a];
                    for (s in r)
                        Object.prototype.hasOwnProperty.call(r, s) &&
                            (i &&
                            "[object Object]" ===
                                Object.prototype.toString.call(r[s])
                                ? (t[s] = d(!0, t[s], r[s]))
                                : (t[s] = r[s]));
                }
                return t;
            }
            function p(e, t) {
                if (
                    0 !=
                    A(
                        (e =
                            P(
                                (e =
                                    !q(e) && e !== window && e !== document
                                        ? e
                                        : [e])
                            ) || c(e)
                                ? e
                                : [e])
                    )
                )
                    if (P(e) && !c(e))
                        for (
                            var i = e.length, a = 0;
                            a < i && !1 !== t.call(e[a], e[a], a, e);
                            a++
                        );
                    else if (c(e))
                        for (var n in e)
                            if (b(e, n) && !1 === t.call(e[n], e[n], n, e))
                                break;
            }
            function T(e, t, i) {
                var a = 1 < arguments.length && void 0 !== t ? t : null,
                    n = 2 < arguments.length && void 0 !== i ? i : null,
                    t = (e[o] = e[o] || []),
                    s = { all: t, evt: null, found: null };
                return (
                    a &&
                        n &&
                        0 < A(t) &&
                        p(t, function (e, t) {
                            if (
                                e.eventName == a &&
                                e.fn.toString() == n.toString()
                            )
                                return (s.found = !0), (s.evt = t), !1;
                        }),
                    s
                );
            }
            function I(i, e, t) {
                var e = 1 < arguments.length && void 0 !== e ? e : {},
                    a = e.onElement,
                    n = e.withCallback,
                    s = e.avoidDuplicate,
                    r = void 0 === s || s,
                    s = e.once,
                    o = void 0 !== s && s,
                    s = e.useCapture,
                    l = void 0 !== s && s,
                    d = 2 < arguments.length ? t : void 0,
                    c = a || [];
                function u(e) {
                    Y(n) && n.call(d, e, this), o && u.destroy();
                }
                return (
                    w(c) && (c = document.querySelectorAll(c)),
                    (u.destroy = function () {
                        p(c, function (e) {
                            var t = T(e, i, u);
                            t.found && t.all.splice(t.evt, 1),
                                e.removeEventListener &&
                                    e.removeEventListener(i, u, l);
                        });
                    }),
                    p(c, function (e) {
                        var t = T(e, i, u);
                        ((e.addEventListener && r && !t.found) || !r) &&
                            (e.addEventListener(i, u, l),
                            t.all.push({ eventName: i, fn: u }));
                    }),
                    u
                );
            }
            function $(t, e) {
                p(e.split(" "), function (e) {
                    return t.classList.add(e);
                });
            }
            function _(t, e) {
                p(e.split(" "), function (e) {
                    return t.classList.remove(e);
                });
            }
            function D(e, t) {
                return e.classList.contains(t);
            }
            function N(e, t) {
                for (; e !== document.body; ) {
                    if (!(e = e.parentElement)) return !1;
                    if (
                        "function" == typeof e.matches
                            ? e.matches(t)
                            : e.msMatchesSelector(t)
                    )
                        return e;
                }
            }
            function X(t, e, i) {
                var a,
                    e = 1 < arguments.length && void 0 !== e ? e : "",
                    n = 2 < arguments.length && void 0 !== i && i;
                if (t && "" !== e)
                    return "none" === e
                        ? Y(n) && n()
                        : ((i = (function () {
                              var e,
                                  t = document.createElement("fakeelement"),
                                  i = {
                                      animation: "animationend",
                                      OAnimation: "oAnimationEnd",
                                      MozAnimation: "animationend",
                                      WebkitAnimation: "webkitAnimationEnd",
                                  };
                              for (e in i)
                                  if (void 0 !== t.style[e]) return i[e];
                          })()),
                          p((a = e.split(" ")), function (e) {
                              $(t, "g" + e);
                          }),
                          void I(i, {
                              onElement: t,
                              avoidDuplicate: !1,
                              once: !0,
                              withCallback: function (e, t) {
                                  p(a, function (e) {
                                      _(t, "g" + e);
                                  }),
                                      Y(n) && n();
                              },
                          }));
            }
            function B(e, t) {
                t = 1 < arguments.length && void 0 !== t ? t : "";
                if ("" === t)
                    return (
                        (e.style.webkitTransform = ""),
                        (e.style.MozTransform = ""),
                        (e.style.msTransform = ""),
                        (e.style.OTransform = ""),
                        (e.style.transform = ""),
                        !1
                    );
                (e.style.webkitTransform = t),
                    (e.style.MozTransform = t),
                    (e.style.msTransform = t),
                    (e.style.OTransform = t),
                    (e.style.transform = t);
            }
            function C(e) {
                e.style.display = "block";
            }
            function l(e) {
                e.style.display = "none";
            }
            function v(e) {
                var t = document.createDocumentFragment(),
                    i = document.createElement("div");
                for (i.innerHTML = e; i.firstChild; )
                    t.appendChild(i.firstChild);
                return t;
            }
            function j() {
                return {
                    width:
                        window.innerWidth ||
                        document.documentElement.clientWidth ||
                        document.body.clientWidth,
                    height:
                        window.innerHeight ||
                        document.documentElement.clientHeight ||
                        document.body.clientHeight,
                };
            }
            function g(e, t, i, a) {
                var n, s;
                e()
                    ? t()
                    : ((i = i || 100),
                      (s = setInterval(function () {
                          e() && (clearInterval(s), n && clearTimeout(n), t());
                      }, i)),
                      a &&
                          (n = setTimeout(function () {
                              clearInterval(s);
                          }, a)));
            }
            function M(e, t, i) {
                if (H(e)) console.error("Inject assets error");
                else if ((Y(t) && ((i = t), (t = !1)), w(t) && t in window))
                    Y(i) && i();
                else {
                    var a, n, s;
                    if (-1 !== e.indexOf(".css"))
                        return (
                            ((a = document.querySelectorAll(
                                'link[href="' + e + '"]'
                            )) &&
                                0 < a.length) ||
                                ((r = (n =
                                    document.getElementsByTagName(
                                        "head"
                                    )[0]).querySelectorAll(
                                    'link[rel="stylesheet"]'
                                )),
                                ((s = document.createElement("link")).rel =
                                    "stylesheet"),
                                (s.type = "text/css"),
                                (s.href = e),
                                (s.media = "all"),
                                r ? n.insertBefore(s, r[0]) : n.appendChild(s)),
                            Y(i) && i()
                        );
                    if (
                        (a = document.querySelectorAll(
                            'script[src="' + e + '"]'
                        )) &&
                        0 < a.length
                    ) {
                        if (Y(i)) {
                            if (w(t))
                                return g(
                                    function () {
                                        return void 0 !== window[t];
                                    },
                                    function () {
                                        i();
                                    }
                                );
                            i();
                        }
                    } else {
                        var r = document.createElement("script");
                        (r.type = "text/javascript"),
                            (r.src = e),
                            (r.onload = function () {
                                if (Y(i)) {
                                    if (w(t))
                                        return (
                                            g(
                                                function () {
                                                    return void 0 !== window[t];
                                                },
                                                function () {
                                                    i();
                                                }
                                            ),
                                            !1
                                        );
                                    i();
                                }
                            }),
                            document.body.appendChild(r);
                    }
                }
            }
            function y() {
                return (
                    "navigator" in window &&
                    window.navigator.userAgent.match(
                        /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i
                    )
                );
            }
            function Y(e) {
                return "function" == typeof e;
            }
            function w(e) {
                return "string" == typeof e;
            }
            function q(e) {
                return e && e.nodeType && 1 == e.nodeType;
            }
            function k(e) {
                return Array.isArray(e);
            }
            function P(e) {
                return e && e.length && isFinite(e.length);
            }
            function c(e) {
                return "object" === t(e) && null != e && !Y(e) && !k(e);
            }
            function H(e) {
                return null == e;
            }
            function b(e, t) {
                return null !== e && hasOwnProperty.call(e, t);
            }
            function A(e) {
                if (c(e)) {
                    if (e.keys) return e.keys().length;
                    var t,
                        i = 0;
                    for (t in e) b(e, t) && i++;
                    return i;
                }
                return e.length;
            }
            function G(e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            }
            function R(e) {
                var e = 0 < arguments.length && void 0 !== e ? e : -1,
                    t = document.querySelectorAll(
                        ".gbtn[data-taborder]:not(.disabled)"
                    );
                if (!t.length) return !1;
                if (1 == t.length) return t[0];
                "string" == typeof e && (e = parseInt(e));
                var i = [],
                    t =
                        (p(t, function (e) {
                            i.push(e.getAttribute("data-taborder"));
                        }),
                        Math.max.apply(
                            Math,
                            i.map(function (e) {
                                return parseInt(e);
                            })
                        )),
                    a = e < 0 ? 1 : e + 1;
                t < a && (a = "1");
                e = i
                    .filter(function (e) {
                        return e >= parseInt(a);
                    })
                    .sort()[0];
                return document.querySelector(
                    '.gbtn[data-taborder="'.concat(e, '"]')
                );
            }
            function h(e) {
                return Math.sqrt(e.x * e.x + e.y * e.y);
            }
            e(i, [
                {
                    key: "add",
                    value: function (e) {
                        this.handlers.push(e);
                    },
                },
                {
                    key: "del",
                    value: function (e) {
                        e || (this.handlers = []);
                        for (var t = this.handlers.length; 0 <= t; t--)
                            this.handlers[t] === e &&
                                this.handlers.splice(t, 1);
                    },
                },
                {
                    key: "dispatch",
                    value: function () {
                        for (var e = 0, t = this.handlers.length; e < t; e++) {
                            var i = this.handlers[e];
                            "function" == typeof i &&
                                i.apply(this.el, arguments);
                        }
                    },
                },
            ]);
            var O = i;
            function i(e) {
                r(this, i), (this.handlers = []), (this.el = e);
            }
            function n(e, t) {
                e = new O(e);
                return e.add(t), e;
            }
            e(s, [
                {
                    key: "start",
                    value: function (e) {
                        var t, i;
                        e.touches &&
                            (e.target &&
                            e.target.nodeName &&
                            0 <=
                                ["a", "button", "input"].indexOf(
                                    e.target.nodeName.toLowerCase()
                                )
                                ? console.log(
                                      "ignore drag for this touched element",
                                      e.target.nodeName.toLowerCase()
                                  )
                                : ((this.now = Date.now()),
                                  (this.x1 = e.touches[0].pageX),
                                  (this.y1 = e.touches[0].pageY),
                                  (this.delta =
                                      this.now - (this.last || this.now)),
                                  this.touchStart.dispatch(e, this.element),
                                  null !== this.preTapPosition.x &&
                                      ((this.isDoubleTap =
                                          0 < this.delta &&
                                          this.delta <= 250 &&
                                          Math.abs(
                                              this.preTapPosition.x - this.x1
                                          ) < 30 &&
                                          Math.abs(
                                              this.preTapPosition.y - this.y1
                                          ) < 30),
                                      this.isDoubleTap) &&
                                      clearTimeout(this.singleTapTimeout),
                                  (this.preTapPosition.x = this.x1),
                                  (this.preTapPosition.y = this.y1),
                                  (this.last = this.now),
                                  (t = this.preV),
                                  1 < e.touches.length &&
                                      (this._cancelLongTap(),
                                      this._cancelSingleTap(),
                                      (i = {
                                          x: e.touches[1].pageX - this.x1,
                                          y: e.touches[1].pageY - this.y1,
                                      }),
                                      (t.x = i.x),
                                      (t.y = i.y),
                                      (this.pinchStartLen = h(t)),
                                      this.multipointStart.dispatch(
                                          e,
                                          this.element
                                      )),
                                  (this._preventTap = !1),
                                  (this.longTapTimeout = setTimeout(
                                      function () {
                                          this.longTap.dispatch(
                                              e,
                                              this.element
                                          ),
                                              (this._preventTap = !0);
                                      }.bind(this),
                                      750
                                  ))));
                    },
                },
                {
                    key: "move",
                    value: function (e) {
                        var t, i, a, n, s, r, o, l, d, c, u, p;
                        e.touches &&
                            ((t = this.preV),
                            (i = e.touches.length),
                            (a = e.touches[0].pageX),
                            (n = e.touches[0].pageY),
                            (this.isDoubleTap = !1),
                            1 < i
                                ? ((s = e.touches[1].pageX),
                                  (r = e.touches[1].pageY),
                                  (o = {
                                      x: e.touches[1].pageX - a,
                                      y: e.touches[1].pageY - n,
                                  }),
                                  null !== t.x &&
                                      (0 < this.pinchStartLen &&
                                          ((e.zoom = h(o) / this.pinchStartLen),
                                          this.pinch.dispatch(e, this.element)),
                                      (e.angle =
                                          ((p = d = t),
                                          (p =
                                              0 == (u = h((c = l = o)) * h(p))
                                                  ? 0
                                                  : (1 <
                                                        (c =
                                                            (c.x * p.x +
                                                                c.y * p.y) /
                                                            u) && (c = 1),
                                                    Math.acos(c))),
                                          0 < l.x * d.y - d.x * l.y &&
                                              (p *= -1),
                                          (180 * p) / Math.PI)),
                                      this.rotate.dispatch(e, this.element)),
                                  (t.x = o.x),
                                  (t.y = o.y),
                                  null !== this.x2 && null !== this.sx2
                                      ? ((e.deltaX =
                                            (a - this.x2 + s - this.sx2) / 2),
                                        (e.deltaY =
                                            (n - this.y2 + r - this.sy2) / 2))
                                      : ((e.deltaX = 0), (e.deltaY = 0)),
                                  this.twoFingerPressMove.dispatch(
                                      e,
                                      this.element
                                  ),
                                  (this.sx2 = s),
                                  (this.sy2 = r))
                                : (null !== this.x2
                                      ? ((e.deltaX = a - this.x2),
                                        (e.deltaY = n - this.y2),
                                        (u = Math.abs(this.x1 - this.x2)),
                                        (c = Math.abs(this.y1 - this.y2)),
                                        (10 < u || 10 < c) &&
                                            (this._preventTap = !0))
                                      : ((e.deltaX = 0), (e.deltaY = 0)),
                                  this.pressMove.dispatch(e, this.element)),
                            this.touchMove.dispatch(e, this.element),
                            this._cancelLongTap(),
                            (this.x2 = a),
                            (this.y2 = n),
                            1 < i) &&
                            e.preventDefault();
                    },
                },
                {
                    key: "end",
                    value: function (e) {
                        var t;
                        e.changedTouches &&
                            (this._cancelLongTap(),
                            (t = this),
                            e.touches.length < 2 &&
                                (this.multipointEnd.dispatch(e, this.element),
                                (this.sx2 = this.sy2 = null)),
                            (this.x2 && 30 < Math.abs(this.x1 - this.x2)) ||
                            (this.y2 && 30 < Math.abs(this.y1 - this.y2))
                                ? ((e.direction = this._swipeDirection(
                                      this.x1,
                                      this.x2,
                                      this.y1,
                                      this.y2
                                  )),
                                  (this.swipeTimeout = setTimeout(function () {
                                      t.swipe.dispatch(e, t.element);
                                  }, 0)))
                                : ((this.tapTimeout = setTimeout(function () {
                                      t._preventTap ||
                                          t.tap.dispatch(e, t.element),
                                          t.isDoubleTap &&
                                              (t.doubleTap.dispatch(
                                                  e,
                                                  t.element
                                              ),
                                              (t.isDoubleTap = !1));
                                  }, 0)),
                                  t.isDoubleTap ||
                                      (t.singleTapTimeout = setTimeout(
                                          function () {
                                              t.singleTap.dispatch(
                                                  e,
                                                  t.element
                                              );
                                          },
                                          250
                                      ))),
                            this.touchEnd.dispatch(e, this.element),
                            (this.preV.x = 0),
                            (this.preV.y = 0),
                            (this.zoom = 1),
                            (this.pinchStartLen = null),
                            (this.x1 = this.x2 = this.y1 = this.y2 = null));
                    },
                },
                {
                    key: "cancelAll",
                    value: function () {
                        (this._preventTap = !0),
                            clearTimeout(this.singleTapTimeout),
                            clearTimeout(this.tapTimeout),
                            clearTimeout(this.longTapTimeout),
                            clearTimeout(this.swipeTimeout);
                    },
                },
                {
                    key: "cancel",
                    value: function (e) {
                        this.cancelAll(),
                            this.touchCancel.dispatch(e, this.element);
                    },
                },
                {
                    key: "_cancelLongTap",
                    value: function () {
                        clearTimeout(this.longTapTimeout);
                    },
                },
                {
                    key: "_cancelSingleTap",
                    value: function () {
                        clearTimeout(this.singleTapTimeout);
                    },
                },
                {
                    key: "_swipeDirection",
                    value: function (e, t, i, a) {
                        return Math.abs(e - t) >= Math.abs(i - a)
                            ? 0 < e - t
                                ? "Left"
                                : "Right"
                            : 0 < i - a
                            ? "Up"
                            : "Down";
                    },
                },
                {
                    key: "on",
                    value: function (e, t) {
                        this[e] && this[e].add(t);
                    },
                },
                {
                    key: "off",
                    value: function (e, t) {
                        this[e] && this[e].del(t);
                    },
                },
                {
                    key: "destroy",
                    value: function () {
                        return (
                            this.singleTapTimeout &&
                                clearTimeout(this.singleTapTimeout),
                            this.tapTimeout && clearTimeout(this.tapTimeout),
                            this.longTapTimeout &&
                                clearTimeout(this.longTapTimeout),
                            this.swipeTimeout &&
                                clearTimeout(this.swipeTimeout),
                            this.element.removeEventListener(
                                "touchstart",
                                this.start
                            ),
                            this.element.removeEventListener(
                                "touchmove",
                                this.move
                            ),
                            this.element.removeEventListener(
                                "touchend",
                                this.end
                            ),
                            this.element.removeEventListener(
                                "touchcancel",
                                this.cancel
                            ),
                            this.rotate.del(),
                            this.touchStart.del(),
                            this.multipointStart.del(),
                            this.multipointEnd.del(),
                            this.pinch.del(),
                            this.swipe.del(),
                            this.tap.del(),
                            this.doubleTap.del(),
                            this.longTap.del(),
                            this.singleTap.del(),
                            this.pressMove.del(),
                            this.twoFingerPressMove.del(),
                            this.touchMove.del(),
                            this.touchEnd.del(),
                            this.touchCancel.del(),
                            (this.preV =
                                this.pinchStartLen =
                                this.zoom =
                                this.isDoubleTap =
                                this.delta =
                                this.last =
                                this.now =
                                this.tapTimeout =
                                this.singleTapTimeout =
                                this.longTapTimeout =
                                this.swipeTimeout =
                                this.x1 =
                                this.x2 =
                                this.y1 =
                                this.y2 =
                                this.preTapPosition =
                                this.rotate =
                                this.touchStart =
                                this.multipointStart =
                                this.multipointEnd =
                                this.pinch =
                                this.swipe =
                                this.tap =
                                this.doubleTap =
                                this.longTap =
                                this.singleTap =
                                this.pressMove =
                                this.touchMove =
                                this.touchEnd =
                                this.touchCancel =
                                this.twoFingerPressMove =
                                    null),
                            window.removeEventListener(
                                "scroll",
                                this._cancelAllHandler
                            ),
                            null
                        );
                    },
                },
            ]);
            var V = s;
            function s(e, t) {
                r(this, s),
                    (this.element =
                        "string" == typeof e ? document.querySelector(e) : e),
                    (this.start = this.start.bind(this)),
                    (this.move = this.move.bind(this)),
                    (this.end = this.end.bind(this)),
                    (this.cancel = this.cancel.bind(this)),
                    this.element.addEventListener("touchstart", this.start, !1),
                    this.element.addEventListener("touchmove", this.move, !1),
                    this.element.addEventListener("touchend", this.end, !1),
                    this.element.addEventListener(
                        "touchcancel",
                        this.cancel,
                        !1
                    ),
                    (this.preV = { x: null, y: null }),
                    (this.pinchStartLen = null),
                    (this.zoom = 1),
                    (this.isDoubleTap = !1);
                function i() {}
                (this.rotate = n(this.element, t.rotate || i)),
                    (this.touchStart = n(this.element, t.touchStart || i)),
                    (this.multipointStart = n(
                        this.element,
                        t.multipointStart || i
                    )),
                    (this.multipointEnd = n(
                        this.element,
                        t.multipointEnd || i
                    )),
                    (this.pinch = n(this.element, t.pinch || i)),
                    (this.swipe = n(this.element, t.swipe || i)),
                    (this.tap = n(this.element, t.tap || i)),
                    (this.doubleTap = n(this.element, t.doubleTap || i)),
                    (this.longTap = n(this.element, t.longTap || i)),
                    (this.singleTap = n(this.element, t.singleTap || i)),
                    (this.pressMove = n(this.element, t.pressMove || i)),
                    (this.twoFingerPressMove = n(
                        this.element,
                        t.twoFingerPressMove || i
                    )),
                    (this.touchMove = n(this.element, t.touchMove || i)),
                    (this.touchEnd = n(this.element, t.touchEnd || i)),
                    (this.touchCancel = n(this.element, t.touchCancel || i)),
                    (this.translateContainer = this.element),
                    (this._cancelAllHandler = this.cancelAll.bind(this)),
                    window.addEventListener("scroll", this._cancelAllHandler),
                    (this.delta = null),
                    (this.last = null),
                    (this.now = null),
                    (this.tapTimeout = null),
                    (this.singleTapTimeout = null),
                    (this.longTapTimeout = null),
                    (this.swipeTimeout = null),
                    (this.x1 = this.x2 = this.y1 = this.y2 = null),
                    (this.preTapPosition = { x: null, y: null });
            }
            function W(e) {
                var t = (function () {
                        var e,
                            t = document.createElement("fakeelement"),
                            i = {
                                transition: "transitionend",
                                OTransition: "oTransitionEnd",
                                MozTransition: "transitionend",
                                WebkitTransition: "webkitTransitionEnd",
                            };
                        for (e in i) if (void 0 !== t.style[e]) return i[e];
                    })(),
                    i =
                        window.innerWidth ||
                        document.documentElement.clientWidth ||
                        document.body.clientWidth,
                    a = D(e, "gslide-media")
                        ? e
                        : e.querySelector(".gslide-media"),
                    n = N(a, ".ginner-container"),
                    e = e.querySelector(".gslide-description");
                $((a = 769 < i ? n : a), "greset"),
                    B(a, "translate3d(0, 0, 0)"),
                    I(t, {
                        onElement: a,
                        once: !0,
                        withCallback: function (e, t) {
                            _(a, "greset");
                        },
                    }),
                    (a.style.opacity = ""),
                    e && (e.style.opacity = "");
            }
            e(f, [
                {
                    key: "zoomIn",
                    value: function () {
                        var e,
                            t = this.widowWidth();
                        this.zoomedIn ||
                            t <= 768 ||
                            ((e = this.img).setAttribute(
                                "data-style",
                                e.getAttribute("style")
                            ),
                            (e.style.maxWidth = e.naturalWidth + "px"),
                            (e.style.maxHeight = e.naturalHeight + "px"),
                            e.naturalWidth > t &&
                                ((t = t / 2 - e.naturalWidth / 2),
                                this.setTranslate(this.img.parentNode, t, 0)),
                            this.slide.classList.add("zoomed"),
                            (this.zoomedIn = !0));
                    },
                },
                {
                    key: "zoomOut",
                    value: function () {
                        this.img.parentNode.setAttribute("style", ""),
                            this.img.setAttribute(
                                "style",
                                this.img.getAttribute("data-style")
                            ),
                            this.slide.classList.remove("zoomed"),
                            (this.zoomedIn = !1),
                            (this.currentX = null),
                            (this.currentY = null),
                            (this.initialX = null),
                            (this.initialY = null),
                            (this.xOffset = 0),
                            (this.yOffset = 0),
                            this.onclose &&
                                "function" == typeof this.onclose &&
                                this.onclose();
                    },
                },
                {
                    key: "dragStart",
                    value: function (e) {
                        e.preventDefault(),
                            this.zoomedIn
                                ? ("touchstart" === e.type
                                      ? ((this.initialX =
                                            e.touches[0].clientX -
                                            this.xOffset),
                                        (this.initialY =
                                            e.touches[0].clientY -
                                            this.yOffset))
                                      : ((this.initialX =
                                            e.clientX - this.xOffset),
                                        (this.initialY =
                                            e.clientY - this.yOffset)),
                                  e.target === this.img &&
                                      ((this.active = !0),
                                      this.img.classList.add("dragging")))
                                : (this.active = !1);
                    },
                },
                {
                    key: "dragEnd",
                    value: function (e) {
                        var t = this;
                        e.preventDefault(),
                            (this.initialX = this.currentX),
                            (this.initialY = this.currentY),
                            (this.active = !1),
                            setTimeout(function () {
                                (t.dragging = !1),
                                    (t.img.isDragging = !1),
                                    t.img.classList.remove("dragging");
                            }, 100);
                    },
                },
                {
                    key: "drag",
                    value: function (e) {
                        this.active &&
                            (e.preventDefault(),
                            "touchmove" === e.type
                                ? ((this.currentX =
                                      e.touches[0].clientX - this.initialX),
                                  (this.currentY =
                                      e.touches[0].clientY - this.initialY))
                                : ((this.currentX = e.clientX - this.initialX),
                                  (this.currentY = e.clientY - this.initialY)),
                            (this.xOffset = this.currentX),
                            (this.yOffset = this.currentY),
                            (this.img.isDragging = !0),
                            (this.dragging = !0),
                            this.setTranslate(
                                this.img,
                                this.currentX,
                                this.currentY
                            ));
                    },
                },
                {
                    key: "onMove",
                    value: function (e) {
                        var t;
                        this.zoomedIn &&
                            ((t = e.clientX - this.img.naturalWidth / 2),
                            (e = e.clientY - this.img.naturalHeight / 2),
                            this.setTranslate(this.img, t, e));
                    },
                },
                {
                    key: "setTranslate",
                    value: function (e, t, i) {
                        e.style.transform =
                            "translate3d(" + t + "px, " + i + "px, 0)";
                    },
                },
                {
                    key: "widowWidth",
                    value: function () {
                        return (
                            window.innerWidth ||
                            document.documentElement.clientWidth ||
                            document.body.clientWidth
                        );
                    },
                },
            ]);
            var L = f,
                z =
                    (e(u, [
                        {
                            key: "dragStart",
                            value: function (e) {
                                var t;
                                this.slide.classList.contains("zoomed") ||
                                ("touchstart" === e.type
                                    ? ((this.initialX =
                                          e.touches[0].clientX - this.xOffset),
                                      (this.initialY =
                                          e.touches[0].clientY - this.yOffset))
                                    : ((this.initialX =
                                          e.clientX - this.xOffset),
                                      (this.initialY =
                                          e.clientY - this.yOffset)),
                                (t = e.target.nodeName.toLowerCase()),
                                e.target.classList.contains("nodrag")) ||
                                N(e.target, ".nodrag") ||
                                -1 !==
                                    [
                                        "input",
                                        "select",
                                        "textarea",
                                        "button",
                                        "a",
                                    ].indexOf(t)
                                    ? (this.active = !1)
                                    : (e.preventDefault(),
                                      (e.target === this.el ||
                                          ("img" !== t &&
                                              N(e.target, ".gslide-inline"))) &&
                                          ((this.active = !0),
                                          this.el.classList.add("dragging"),
                                          (this.dragContainer = N(
                                              e.target,
                                              ".ginner-container"
                                          ))));
                            },
                        },
                        {
                            key: "dragEnd",
                            value: function (e) {
                                var t = this;
                                e && e.preventDefault(),
                                    (this.initialX = 0),
                                    (this.initialY = 0),
                                    (this.currentX = null),
                                    (this.currentY = null),
                                    (this.initialX = null),
                                    (this.initialY = null),
                                    (this.xOffset = 0),
                                    (this.yOffset = 0),
                                    (this.active = !1),
                                    this.doSlideChange &&
                                        ((this.instance.preventOutsideClick =
                                            !0),
                                        "right" == this.doSlideChange &&
                                            this.instance.prevSlide(),
                                        "left" == this.doSlideChange) &&
                                        this.instance.nextSlide(),
                                    this.doSlideClose && this.instance.close(),
                                    this.toleranceReached ||
                                        this.setTranslate(
                                            this.dragContainer,
                                            0,
                                            0,
                                            !0
                                        ),
                                    setTimeout(function () {
                                        (t.instance.preventOutsideClick = !1),
                                            (t.toleranceReached = !1),
                                            (t.lastDirection = null),
                                            (t.dragging = !1),
                                            (t.el.isDragging = !1),
                                            t.el.classList.remove("dragging"),
                                            t.slide.classList.remove(
                                                "dragging-nav"
                                            ),
                                            (t.dragContainer.style.transform =
                                                ""),
                                            (t.dragContainer.style.transition =
                                                "");
                                    }, 100);
                            },
                        },
                        {
                            key: "drag",
                            value: function (e) {
                                if (this.active) {
                                    e.preventDefault(),
                                        this.slide.classList.add(
                                            "dragging-nav"
                                        ),
                                        "touchmove" === e.type
                                            ? ((this.currentX =
                                                  e.touches[0].clientX -
                                                  this.initialX),
                                              (this.currentY =
                                                  e.touches[0].clientY -
                                                  this.initialY))
                                            : ((this.currentX =
                                                  e.clientX - this.initialX),
                                              (this.currentY =
                                                  e.clientY - this.initialY)),
                                        (this.xOffset = this.currentX),
                                        (this.yOffset = this.currentY),
                                        (this.el.isDragging = !0),
                                        (this.dragging = !0),
                                        (this.doSlideChange = !1),
                                        (this.doSlideClose = !1);
                                    var e = Math.abs(this.currentX),
                                        t = Math.abs(this.currentY);
                                    if (
                                        0 < e &&
                                        e >= Math.abs(this.currentY) &&
                                        (!this.lastDirection ||
                                            "x" == this.lastDirection)
                                    ) {
                                        (this.yOffset = 0),
                                            (this.lastDirection = "x"),
                                            this.setTranslate(
                                                this.dragContainer,
                                                this.currentX,
                                                0
                                            );
                                        var i = this.shouldChange();
                                        if (
                                            (!this.instance.settings
                                                .dragAutoSnap &&
                                                i &&
                                                (this.doSlideChange = i),
                                            this.instance.settings
                                                .dragAutoSnap && i)
                                        )
                                            return (
                                                (this.instance.preventOutsideClick =
                                                    !0),
                                                (this.toleranceReached = !0),
                                                (this.active = !1),
                                                (this.instance.preventOutsideClick =
                                                    !0),
                                                this.dragEnd(null),
                                                "right" == i &&
                                                    this.instance.prevSlide(),
                                                void (
                                                    "left" == i &&
                                                    this.instance.nextSlide()
                                                )
                                            );
                                    }
                                    0 < this.toleranceY &&
                                        0 < t &&
                                        e <= t &&
                                        (!this.lastDirection ||
                                            "y" == this.lastDirection) &&
                                        ((this.xOffset = 0),
                                        (this.lastDirection = "y"),
                                        this.setTranslate(
                                            this.dragContainer,
                                            0,
                                            this.currentY
                                        ),
                                        (i = this.shouldClose()),
                                        !this.instance.settings.dragAutoSnap &&
                                            i &&
                                            (this.doSlideClose = !0),
                                        this.instance.settings.dragAutoSnap) &&
                                        i &&
                                        this.instance.close();
                                }
                            },
                        },
                        {
                            key: "shouldChange",
                            value: function () {
                                var e,
                                    t = !1;
                                return (t =
                                    Math.abs(this.currentX) >=
                                        this.toleranceX &&
                                    (("left" ==
                                        (e =
                                            0 < this.currentX
                                                ? "right"
                                                : "left") &&
                                        this.slide !==
                                            this.slide.parentNode.lastChild) ||
                                        ("right" == e &&
                                            this.slide !==
                                                this.slide.parentNode
                                                    .firstChild))
                                        ? e
                                        : t);
                            },
                        },
                        {
                            key: "shouldClose",
                            value: function () {
                                var e = !1;
                                return (e =
                                    Math.abs(this.currentY) >= this.toleranceY
                                        ? !0
                                        : e);
                            },
                        },
                        {
                            key: "setTranslate",
                            value: function (e, t, i) {
                                (e.style.transition =
                                    3 < arguments.length &&
                                    void 0 !== arguments[3] &&
                                    arguments[3]
                                        ? "all .2s ease"
                                        : ""),
                                    (e.style.transform = "translate3d("
                                        .concat(t, "px, ")
                                        .concat(i, "px, 0)"));
                            },
                        },
                    ]),
                    u);
            function u() {
                var t = this,
                    e =
                        0 < arguments.length && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                    i = (r(this, u), e.dragEl),
                    a = e.toleranceX,
                    a = void 0 === a ? 40 : a,
                    n = e.toleranceY,
                    n = void 0 === n ? 65 : n,
                    s = e.slide,
                    s = void 0 === s ? null : s,
                    e = e.instance,
                    e = void 0 === e ? null : e;
                (this.el = i),
                    (this.active = !1),
                    (this.dragging = !1),
                    (this.currentX = null),
                    (this.currentY = null),
                    (this.initialX = null),
                    (this.initialY = null),
                    (this.xOffset = 0),
                    (this.yOffset = 0),
                    (this.direction = null),
                    (this.lastDirection = null),
                    (this.toleranceX = a),
                    (this.toleranceY = n),
                    (this.toleranceReached = !1),
                    (this.dragContainer = this.el),
                    (this.slide = s),
                    (this.instance = e),
                    this.el.addEventListener(
                        "mousedown",
                        function (e) {
                            return t.dragStart(e);
                        },
                        !1
                    ),
                    this.el.addEventListener(
                        "mouseup",
                        function (e) {
                            return t.dragEnd(e);
                        },
                        !1
                    ),
                    this.el.addEventListener(
                        "mousemove",
                        function (e) {
                            return t.drag(e);
                        },
                        !1
                    );
            }
            function f(e, t) {
                var i = this,
                    a =
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : null;
                if (
                    (r(this, f),
                    (this.img = e),
                    (this.slide = t),
                    (this.onclose = a),
                    this.img.setZoomEvents)
                )
                    return !1;
                (this.active = !1),
                    (this.zoomedIn = !1),
                    (this.dragging = !1),
                    (this.currentX = null),
                    (this.currentY = null),
                    (this.initialX = null),
                    (this.initialY = null),
                    (this.xOffset = 0),
                    (this.yOffset = 0),
                    this.img.addEventListener(
                        "mousedown",
                        function (e) {
                            return i.dragStart(e);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "mouseup",
                        function (e) {
                            return i.dragEnd(e);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "mousemove",
                        function (e) {
                            return i.drag(e);
                        },
                        !1
                    ),
                    this.img.addEventListener(
                        "click",
                        function (e) {
                            return i.slide.classList.contains("dragging-nav")
                                ? (i.zoomOut(), !1)
                                : i.zoomedIn
                                ? void (
                                      i.zoomedIn &&
                                      !i.dragging &&
                                      i.zoomOut()
                                  )
                                : i.zoomIn();
                        },
                        !1
                    ),
                    (this.img.setZoomEvents = !0);
            }
            function F(e) {
                var t = N(e.target, ".gslide-media");
                "enterfullscreen" === e.type && $(t, "fullscreen"),
                    "exitfullscreen" === e.type && _(t, "fullscreen");
            }
            e(E, [
                {
                    key: "sourceType",
                    value: function (e) {
                        var t = e;
                        return null !==
                            (e = e.toLowerCase()).match(
                                /\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/
                            )
                            ? "image"
                            : e.match(
                                  /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                              ) ||
                              e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) ||
                              e.match(
                                  /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                              ) ||
                              e.match(/vimeo\.com\/([0-9]*)/) ||
                              null !== e.match(/\.(mp4|ogg|webm|mov)/)
                            ? "video"
                            : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/)
                            ? "audio"
                            : -1 < e.indexOf("#") &&
                              "" !== t.split("#").pop().trim()
                            ? "inline"
                            : -1 < e.indexOf("goajax=true")
                            ? "ajax"
                            : "external";
                    },
                },
                {
                    key: "parseConfig",
                    value: function (a, n) {
                        var s = this,
                            r = d(
                                { descPosition: n.descPosition },
                                this.defaults
                            );
                        if (c(a) && !q(a))
                            return (
                                b(a, "type") ||
                                    (b(a, "content") && a.content
                                        ? (a.type = "inline")
                                        : b(a, "href") &&
                                          (a.type = this.sourceType(a.href))),
                                (t = d(r, a)),
                                this.setSize(t, n),
                                t
                            );
                        var o,
                            e,
                            t = "",
                            l = a.getAttribute("data-glightbox"),
                            i = a.nodeName.toLowerCase();
                        if (
                            ("a" === i && (t = a.href),
                            "img" === i && ((t = a.src), (r.alt = a.alt)),
                            (r.href = t),
                            p(r, function (e, t) {
                                b(n, t) && "width" !== t && (r[t] = n[t]);
                                var i = a.dataset[t];
                                H(i) || (r[t] = s.sanitizeValue(i));
                            }),
                            r.content && (r.type = "inline"),
                            !r.type && t && (r.type = this.sourceType(t)),
                            H(l)
                                ? (r.title ||
                                      "a" != i ||
                                      H((t = a.title)) ||
                                      "" === t ||
                                      (r.title = t),
                                  r.title ||
                                      "img" != i ||
                                      H((t = a.alt)) ||
                                      "" === t ||
                                      (r.title = t))
                                : ((o = []),
                                  p(r, function (e, t) {
                                      o.push(";\\s?" + t);
                                  }),
                                  (o = o.join("\\s?:|")),
                                  "" !== l.trim() &&
                                      p(r, function (e, t) {
                                          var i = l,
                                              a = new RegExp(
                                                  "s?" +
                                                      t +
                                                      "s?:s?(.*?)(" +
                                                      o +
                                                      "s?:|$)"
                                              ),
                                              i = i.match(a);
                                          i &&
                                              i.length &&
                                              i[1] &&
                                              ((a = i[1]
                                                  .trim()
                                                  .replace(/;\s*$/, "")),
                                              (r[t] = s.sanitizeValue(a)));
                                      })),
                            r.description &&
                                "." === r.description.substring(0, 1))
                        ) {
                            try {
                                e = document.querySelector(
                                    r.description
                                ).innerHTML;
                            } catch (a) {
                                if (!(a instanceof DOMException)) throw a;
                            }
                            e && (r.description = e);
                        }
                        return (
                            r.description ||
                                ((i = a.querySelector(".glightbox-desc")) &&
                                    (r.description = i.innerHTML)),
                            this.setSize(r, n, a),
                            (this.slideConfig = r)
                        );
                    },
                },
                {
                    key: "setSize",
                    value: function (e, t) {
                        var i =
                                2 < arguments.length && void 0 !== arguments[2]
                                    ? arguments[2]
                                    : null,
                            a =
                                "video" == e.type
                                    ? this.checkSize(t.videosWidth)
                                    : this.checkSize(t.width),
                            t = this.checkSize(t.height);
                        return (
                            (e.width =
                                b(e, "width") && "" !== e.width
                                    ? this.checkSize(e.width)
                                    : a),
                            (e.height =
                                b(e, "height") && "" !== e.height
                                    ? this.checkSize(e.height)
                                    : t),
                            i &&
                                "image" == e.type &&
                                ((e._hasCustomWidth = !!i.dataset.width),
                                (e._hasCustomHeight = !!i.dataset.height)),
                            e
                        );
                    },
                },
                {
                    key: "checkSize",
                    value: function (e) {
                        return G(e) ? "".concat(e, "px") : e;
                    },
                },
                {
                    key: "sanitizeValue",
                    value: function (e) {
                        return "true" !== e && "false" !== e ? e : "true" === e;
                    },
                },
            ]);
            var U = E,
                m =
                    (e(S, [
                        {
                            key: "setContent",
                            value: function () {
                                var t = this,
                                    i =
                                        0 < arguments.length &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null,
                                    e =
                                        1 < arguments.length &&
                                        void 0 !== arguments[1] &&
                                        arguments[1];
                                if (D(i, "loaded")) return !1;
                                var a,
                                    n = this.instance.settings,
                                    s = this.slideConfig,
                                    r = y(),
                                    o =
                                        (Y(n.beforeSlideLoad) &&
                                            n.beforeSlideLoad({
                                                index: this.index,
                                                slide: i,
                                                player: !1,
                                            }),
                                        s.type),
                                    l = s.descPosition,
                                    d = i.querySelector(".gslide-media"),
                                    c = i.querySelector(".gslide-title"),
                                    u = i.querySelector(".gslide-desc"),
                                    p = i.querySelector(".gdesc-inner"),
                                    h = e,
                                    f = "gSlideTitle_" + this.index,
                                    m = "gSlideDesc_" + this.index;
                                if (
                                    (Y(n.afterSlideLoad) &&
                                        (h = function () {
                                            Y(e) && e(),
                                                n.afterSlideLoad({
                                                    index: t.index,
                                                    slide: i,
                                                    player: t.instance.getSlidePlayerInstance(
                                                        t.index
                                                    ),
                                                });
                                        }),
                                    "" == s.title && "" == s.description
                                        ? p &&
                                          p.parentNode.parentNode.removeChild(
                                              p.parentNode
                                          )
                                        : (c && "" !== s.title
                                              ? ((c.id = f),
                                                (c.innerHTML = s.title))
                                              : c.parentNode.removeChild(c),
                                          u && "" !== s.description
                                              ? ((u.id = m),
                                                r && 0 < n.moreLength
                                                    ? ((s.smallDescription =
                                                          this.slideShortDesc(
                                                              s.description,
                                                              n.moreLength,
                                                              n.moreText
                                                          )),
                                                      (u.innerHTML =
                                                          s.smallDescription),
                                                      this.descriptionEvents(
                                                          u,
                                                          s
                                                      ))
                                                    : (u.innerHTML =
                                                          s.description))
                                              : u.parentNode.removeChild(u),
                                          $(d.parentNode, "desc-".concat(l)),
                                          $(
                                              p.parentNode,
                                              "description-".concat(l)
                                          )),
                                    $(d, "gslide-".concat(o)),
                                    $(i, "loaded"),
                                    "video" !== o)
                                ) {
                                    if ("external" !== o)
                                        return "inline" === o
                                            ? (function (e, t, i, a) {
                                                  var n,
                                                      s = this,
                                                      e =
                                                          e.querySelector(
                                                              ".gslide-media"
                                                          ),
                                                      r =
                                                          !(
                                                              !b(t, "href") ||
                                                              !t.href
                                                          ) &&
                                                          t.href
                                                              .split("#")
                                                              .pop()
                                                              .trim(),
                                                      o =
                                                          !(
                                                              !b(
                                                                  t,
                                                                  "content"
                                                              ) || !t.content
                                                          ) && t.content;
                                                  if (
                                                      (o &&
                                                          (w(o) &&
                                                              (n = v(
                                                                  '<div class="ginlined-content">'.concat(
                                                                      o,
                                                                      "</div>"
                                                                  )
                                                              )),
                                                          q(o)) &&
                                                          ("none" ==
                                                              o.style.display &&
                                                              (o.style.display =
                                                                  "block"),
                                                          ((l =
                                                              document.createElement(
                                                                  "div"
                                                              )).className =
                                                              "ginlined-content"),
                                                          l.appendChild(o),
                                                          (n = l)),
                                                      r)
                                                  ) {
                                                      o =
                                                          document.getElementById(
                                                              r
                                                          );
                                                      if (!o) return !1;
                                                      var l = o.cloneNode(!0);
                                                      (l.style.height =
                                                          t.height),
                                                          (l.style.maxWidth =
                                                              t.width),
                                                          $(
                                                              l,
                                                              "ginlined-content"
                                                          ),
                                                          (n = l);
                                                  }
                                                  if (!n)
                                                      return (
                                                          console.error(
                                                              "Unable to append inline slide content",
                                                              t
                                                          ),
                                                          !1
                                                      );
                                                  (e.style.height = t.height),
                                                      (e.style.width = t.width),
                                                      e.appendChild(n),
                                                      (this.events[
                                                          "inlineclose" + r
                                                      ] = I("click", {
                                                          onElement:
                                                              e.querySelectorAll(
                                                                  ".gtrigger-close"
                                                              ),
                                                          withCallback:
                                                              function (e) {
                                                                  e.preventDefault(),
                                                                      s.close();
                                                              },
                                                      })),
                                                      Y(a) && a();
                                              }.apply(this.instance, [
                                                  i,
                                                  s,
                                                  this.index,
                                                  h,
                                              ]),
                                              void (
                                                  s.draggable &&
                                                  new z({
                                                      dragEl: i.querySelector(
                                                          ".gslide-inline"
                                                      ),
                                                      toleranceX:
                                                          n.dragToleranceX,
                                                      toleranceY:
                                                          n.dragToleranceY,
                                                      slide: i,
                                                      instance: this.instance,
                                                  })
                                              ))
                                            : void ("image" !== o
                                                  ? Y(h) && h()
                                                  : ((f = i),
                                                    (c = s),
                                                    (m = this.index),
                                                    (a = function () {
                                                        var e =
                                                            i.querySelector(
                                                                "img"
                                                            );
                                                        s.draggable &&
                                                            new z({
                                                                dragEl: e,
                                                                toleranceX:
                                                                    n.dragToleranceX,
                                                                toleranceY:
                                                                    n.dragToleranceY,
                                                                slide: i,
                                                                instance:
                                                                    t.instance,
                                                            }),
                                                            s.zoomable &&
                                                                e.naturalWidth >
                                                                    e.offsetWidth &&
                                                                ($(
                                                                    e,
                                                                    "zoomable"
                                                                ),
                                                                new L(
                                                                    e,
                                                                    i,
                                                                    function () {
                                                                        t.instance.resize();
                                                                    }
                                                                )),
                                                            Y(h) && h();
                                                    }),
                                                    (f =
                                                        f.querySelector(
                                                            ".gslide-media"
                                                        )),
                                                    (r = new Image()),
                                                    (u = "gSlideTitle_" + m),
                                                    (m = "gSlideDesc_" + m),
                                                    r.addEventListener(
                                                        "load",
                                                        function () {
                                                            Y(a) && a();
                                                        },
                                                        !1
                                                    ),
                                                    (r.src = c.href),
                                                    "" != c.sizes &&
                                                        "" != c.srcset &&
                                                        ((r.sizes = c.sizes),
                                                        (r.srcset = c.srcset)),
                                                    (r.alt = ""),
                                                    H(c.alt) ||
                                                        "" === c.alt ||
                                                        (r.alt = c.alt),
                                                    "" !== c.title &&
                                                        r.setAttribute(
                                                            "aria-labelledby",
                                                            u
                                                        ),
                                                    "" !== c.description &&
                                                        r.setAttribute(
                                                            "aria-describedby",
                                                            m
                                                        ),
                                                    c.hasOwnProperty(
                                                        "_hasCustomWidth"
                                                    ) &&
                                                        c._hasCustomWidth &&
                                                        (r.style.width =
                                                            c.width),
                                                    c.hasOwnProperty(
                                                        "_hasCustomHeight"
                                                    ) &&
                                                        c._hasCustomHeight &&
                                                        (r.style.height =
                                                            c.height),
                                                    f.insertBefore(
                                                        r,
                                                        f.firstChild
                                                    )));
                                    !function (e, t, i, a) {
                                        var n,
                                            s,
                                            r,
                                            e =
                                                e.querySelector(
                                                    ".gslide-media"
                                                ),
                                            o =
                                                ((a = {
                                                    url: t.href,
                                                    callback: a,
                                                }),
                                                (o = a.url),
                                                (n = a.allow),
                                                (s = a.callback),
                                                (a = a.appendTo),
                                                ((r =
                                                    document.createElement(
                                                        "iframe"
                                                    )).className =
                                                    "vimeo-video gvideo"),
                                                (r.src = o),
                                                (r.style.width = "100%"),
                                                (r.style.height = "100%"),
                                                n && r.setAttribute("allow", n),
                                                (r.onload = function () {
                                                    (r.onload = null),
                                                        $(r, "node-ready"),
                                                        Y(s) && s();
                                                }),
                                                a && a.appendChild(r),
                                                r);
                                        (e.parentNode.style.maxWidth = t.width),
                                            (e.parentNode.style.height =
                                                t.height),
                                            e.appendChild(o);
                                    }.apply(this, [i, s, this.index, h]);
                                } else
                                    !function (t, i, a, n) {
                                        var s = this,
                                            e =
                                                t.querySelector(
                                                    ".ginner-container"
                                                ),
                                            r = "gvideo" + a,
                                            o =
                                                t.querySelector(
                                                    ".gslide-media"
                                                ),
                                            l = this.getAllPlayers(),
                                            d =
                                                ($(e, "gvideo-container"),
                                                o.insertBefore(
                                                    v(
                                                        '<div class="gvideo-wrapper"></div>'
                                                    ),
                                                    o.firstChild
                                                ),
                                                t.querySelector(
                                                    ".gvideo-wrapper"
                                                )),
                                            c =
                                                (M(
                                                    this.settings.plyr.css,
                                                    "Plyr"
                                                ),
                                                i.href),
                                            u =
                                                null == i
                                                    ? void 0
                                                    : i.videoProvider,
                                            p = !1;
                                        (o.style.maxWidth = i.width),
                                            M(
                                                this.settings.plyr.js,
                                                "Plyr",
                                                function () {
                                                    ("local" !==
                                                        (u =
                                                            !(u =
                                                                !u &&
                                                                c.match(
                                                                    /vimeo\.com\/([0-9]*)/
                                                                )
                                                                    ? "vimeo"
                                                                    : u) &&
                                                            (c.match(
                                                                /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/
                                                            ) ||
                                                                c.match(
                                                                    /youtu\.be\/([a-zA-Z0-9\-_]+)/
                                                                ) ||
                                                                c.match(
                                                                    /(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/
                                                                ))
                                                                ? "youtube"
                                                                : u) &&
                                                        u) ||
                                                        ((u = "local"),
                                                        (e =
                                                            (e =
                                                                (e =
                                                                    '<video id="' +
                                                                    r +
                                                                    '" ') +
                                                                'style="background:#000; max-width: '.concat(
                                                                    i.width,
                                                                    ';" '
                                                                ) +
                                                                'preload="metadata" x-webkit-airplay="allow" playsinline controls class="gvideo-local">') +
                                                            '<source src="'.concat(
                                                                c,
                                                                '">'
                                                            )),
                                                        (p = v(
                                                            (e += "</video>")
                                                        )));
                                                    var e =
                                                            p ||
                                                            v(
                                                                '<div id="'
                                                                    .concat(
                                                                        r,
                                                                        '" data-plyr-provider="'
                                                                    )
                                                                    .concat(
                                                                        u,
                                                                        '" data-plyr-embed-id="'
                                                                    )
                                                                    .concat(
                                                                        c,
                                                                        '"></div>'
                                                                    )
                                                            ),
                                                        e =
                                                            ($(
                                                                d,
                                                                "".concat(
                                                                    u,
                                                                    "-video gvideo"
                                                                )
                                                            ),
                                                            d.appendChild(e),
                                                            d.setAttribute(
                                                                "data-id",
                                                                r
                                                            ),
                                                            d.setAttribute(
                                                                "data-index",
                                                                a
                                                            ),
                                                            b(
                                                                s.settings.plyr,
                                                                "config"
                                                            )
                                                                ? s.settings
                                                                      .plyr
                                                                      .config
                                                                : {}),
                                                        e = new Plyr(
                                                            "#" + r,
                                                            e
                                                        );
                                                    e.on("ready", function (e) {
                                                        (l[r] = e.detail.plyr),
                                                            Y(n) && n();
                                                    }),
                                                        g(
                                                            function () {
                                                                return (
                                                                    t.querySelector(
                                                                        "iframe"
                                                                    ) &&
                                                                    "true" ==
                                                                        t.querySelector(
                                                                            "iframe"
                                                                        )
                                                                            .dataset
                                                                            .ready
                                                                );
                                                            },
                                                            function () {
                                                                s.resize(t);
                                                            }
                                                        ),
                                                        e.on(
                                                            "enterfullscreen",
                                                            F
                                                        ),
                                                        e.on(
                                                            "exitfullscreen",
                                                            F
                                                        );
                                                }
                                            );
                                    }.apply(this.instance, [
                                        i,
                                        s,
                                        this.index,
                                        h,
                                    ]);
                            },
                        },
                        {
                            key: "slideShortDesc",
                            value: function (e) {
                                var t =
                                        1 < arguments.length &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : 50,
                                    i =
                                        2 < arguments.length &&
                                        void 0 !== arguments[2] &&
                                        arguments[2],
                                    a = document.createElement("div");
                                a.innerHTML = e;
                                var n = i;
                                return !(
                                    (e = a.innerText.trim()).length <= t
                                ) && ((e = e.substr(0, t - 1)), n)
                                    ? ((a = null),
                                      e +
                                          '... <a href="#" class="desc-more">' +
                                          i +
                                          "</a>")
                                    : e;
                            },
                        },
                        {
                            key: "descriptionEvents",
                            value: function (e, s) {
                                var r = this,
                                    e = e.querySelector(".desc-more");
                                if (!e) return !1;
                                I("click", {
                                    onElement: e,
                                    withCallback: function (e, t) {
                                        e.preventDefault();
                                        var i = document.body,
                                            a = N(t, ".gslide-desc");
                                        if (!a) return !1;
                                        (a.innerHTML = s.description),
                                            $(i, "gdesc-open");
                                        var n = I("click", {
                                            onElement: [
                                                i,
                                                N(a, ".gslide-description"),
                                            ],
                                            withCallback: function (e, t) {
                                                "a" !==
                                                    e.target.nodeName.toLowerCase() &&
                                                    (_(i, "gdesc-open"),
                                                    $(i, "gdesc-closed"),
                                                    (a.innerHTML =
                                                        s.smallDescription),
                                                    r.descriptionEvents(a, s),
                                                    setTimeout(function () {
                                                        _(i, "gdesc-closed");
                                                    }, 400),
                                                    n.destroy());
                                            },
                                        });
                                    },
                                });
                            },
                        },
                        {
                            key: "create",
                            value: function () {
                                return v(this.instance.settings.slideHTML);
                            },
                        },
                        {
                            key: "getConfig",
                            value: function () {
                                q(this.element) ||
                                    this.element.hasOwnProperty("draggable") ||
                                    (this.element.draggable =
                                        this.instance.settings.draggable);
                                var e = new U(
                                    this.instance.settings.slideExtraAttributes
                                );
                                return (
                                    (this.slideConfig = e.parseConfig(
                                        this.element,
                                        this.instance.settings
                                    )),
                                    this.slideConfig
                                );
                            },
                        },
                    ]),
                    S),
                Z = y(),
                K =
                    null !== y() ||
                    void 0 !== document.createTouch ||
                    "ontouchstart" in window ||
                    "onmsgesturechange" in window ||
                    navigator.msMaxTouchPoints,
                Q = document.getElementsByTagName("html")[0],
                J = {
                    selector: ".glightbox",
                    elements: null,
                    skin: "clean",
                    theme: "clean",
                    closeButton: !0,
                    startAt: null,
                    autoplayVideos: !0,
                    autofocusVideos: !0,
                    descPosition: "bottom",
                    width: "900px",
                    height: "506px",
                    videosWidth: "960px",
                    beforeSlideChange: null,
                    afterSlideChange: null,
                    beforeSlideLoad: null,
                    afterSlideLoad: null,
                    slideInserted: null,
                    slideRemoved: null,
                    slideExtraAttributes: null,
                    onOpen: null,
                    onClose: null,
                    loop: !1,
                    zoomable: !0,
                    draggable: !0,
                    dragAutoSnap: !1,
                    dragToleranceX: 40,
                    dragToleranceY: 65,
                    preload: !0,
                    oneSlidePerOpen: !1,
                    touchNavigation: !0,
                    touchFollowAxis: !0,
                    keyboardNavigation: !0,
                    closeOnOutsideClick: !0,
                    plugins: !1,
                    plyr: {
                        css: "https://cdn.plyr.io/3.6.12/plyr.css",
                        js: "https://cdn.plyr.io/3.6.12/plyr.js",
                        config: {
                            ratio: "16:9",
                            fullscreen: { enabled: !0, iosNative: !0 },
                            youtube: {
                                noCookie: !0,
                                rel: 0,
                                showinfo: 0,
                                iv_load_policy: 3,
                            },
                            vimeo: {
                                byline: !1,
                                portrait: !1,
                                title: !1,
                                transparent: !1,
                            },
                        },
                    },
                    openEffect: "zoom",
                    closeEffect: "zoom",
                    slideEffect: "slide",
                    moreText: "See more",
                    moreLength: 60,
                    cssEfects: {
                        fade: { in: "fadeIn", out: "fadeOut" },
                        zoom: { in: "zoomIn", out: "zoomOut" },
                        slide: { in: "slideInRight", out: "slideOutLeft" },
                        slideBack: { in: "slideInLeft", out: "slideOutRight" },
                        none: { in: "none", out: "none" },
                    },
                    svg: {
                        close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                        next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                        prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>',
                    },
                    slideHTML:
                        '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
                    lightboxHTML:
                        '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>',
                },
                ee =
                    (e(x, [
                        {
                            key: "init",
                            value: function () {
                                var i = this,
                                    e = this.getSelector();
                                e &&
                                    (this.baseEvents = I("click", {
                                        onElement: e,
                                        withCallback: function (e, t) {
                                            e.preventDefault(), i.open(t);
                                        },
                                    })),
                                    (this.elements = this.getElements());
                            },
                        },
                        {
                            key: "open",
                            value: function () {
                                var e =
                                        0 < arguments.length &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null,
                                    t =
                                        1 < arguments.length &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null;
                                if (0 === this.elements.length) return !1;
                                (this.activeSlide = null),
                                    (this.prevActiveSlideIndex = null),
                                    (this.prevActiveSlide = null);
                                var i,
                                    s,
                                    a,
                                    n,
                                    r,
                                    o,
                                    l,
                                    d,
                                    c,
                                    u,
                                    p,
                                    h,
                                    f,
                                    m,
                                    v,
                                    g,
                                    y,
                                    w,
                                    b,
                                    x,
                                    S,
                                    E,
                                    T,
                                    C,
                                    M,
                                    k,
                                    P,
                                    A,
                                    O,
                                    L,
                                    t = G(t) ? t : this.settings.startAt,
                                    z =
                                        (G(
                                            (t =
                                                q(e) &&
                                                ((z =
                                                    e.getAttribute(
                                                        "data-gallery"
                                                    )) &&
                                                    ((this.fullElementsList =
                                                        this.elements),
                                                    (this.elements =
                                                        this.getGalleryElements(
                                                            this.elements,
                                                            z
                                                        ))),
                                                H(t)) &&
                                                (t = this.getElementIndex(e)) <
                                                    0
                                                    ? 0
                                                    : t)
                                        ) || (t = 0),
                                        this.build(),
                                        X(
                                            this.overlay,
                                            "none" === this.settings.openEffect
                                                ? "none"
                                                : this.settings.cssEfects.fade
                                                      .in
                                        ),
                                        document.body),
                                    e =
                                        window.innerWidth -
                                        document.documentElement.clientWidth;
                                0 < e &&
                                    (((i =
                                        document.createElement("style")).type =
                                        "text/css"),
                                    (i.className = "gcss-styles"),
                                    (i.innerText =
                                        ".gscrollbar-fixer {margin-right: ".concat(
                                            e,
                                            "px}"
                                        )),
                                    document.head.appendChild(i),
                                    $(z, "gscrollbar-fixer")),
                                    $(z, "glightbox-open"),
                                    $(Q, "glightbox-open"),
                                    Z &&
                                        ($(document.body, "glightbox-mobile"),
                                        (this.settings.slideEffect = "slide")),
                                    this.showSlide(t, !0),
                                    (1 === this.elements.length
                                        ? ($(
                                              this.prevButton,
                                              "glightbox-button-hidden"
                                          ),
                                          $)
                                        : (_(
                                              this.prevButton,
                                              "glightbox-button-hidden"
                                          ),
                                          _))(
                                        this.nextButton,
                                        "glightbox-button-hidden"
                                    ),
                                    (this.lightboxOpen = !0),
                                    this.trigger("open"),
                                    Y(this.settings.onOpen) &&
                                        this.settings.onOpen(),
                                    K &&
                                        this.settings.touchNavigation &&
                                        ((a = this).events.hasOwnProperty(
                                            "touch"
                                        ) ||
                                            ((e = j()),
                                            (l = e.width),
                                            (d = e.height),
                                            (f = c = !1),
                                            (S = x = b = w = h = p = u = null),
                                            (M = C = y = g = !(v = m = 1)),
                                            (k = {}),
                                            (P = {}),
                                            (O = A = T = E = 0),
                                            (e =
                                                document.getElementById(
                                                    "glightbox-slider"
                                                )),
                                            (L =
                                                document.querySelector(
                                                    ".goverlay"
                                                )),
                                            (e = new V(e, {
                                                touchStart: function (e) {
                                                    (c = !0),
                                                        (D(
                                                            e.targetTouches[0]
                                                                .target,
                                                            "ginner-container"
                                                        ) ||
                                                            N(
                                                                e
                                                                    .targetTouches[0]
                                                                    .target,
                                                                ".gslide-desc"
                                                            ) ||
                                                            "a" ==
                                                                e.targetTouches[0].target.nodeName.toLowerCase()) &&
                                                            (c = !1),
                                                        (c =
                                                            !(
                                                                N(
                                                                    e
                                                                        .targetTouches[0]
                                                                        .target,
                                                                    ".gslide-inline"
                                                                ) &&
                                                                !D(
                                                                    e
                                                                        .targetTouches[0]
                                                                        .target
                                                                        .parentNode,
                                                                    "gslide-inline"
                                                                )
                                                            ) && c) &&
                                                            ((P =
                                                                e
                                                                    .targetTouches[0]),
                                                            (k.pageX =
                                                                e.targetTouches[0].pageX),
                                                            (k.pageY =
                                                                e.targetTouches[0].pageY),
                                                            (A =
                                                                e
                                                                    .targetTouches[0]
                                                                    .clientX),
                                                            (O =
                                                                e
                                                                    .targetTouches[0]
                                                                    .clientY),
                                                            (u = a.activeSlide),
                                                            (p =
                                                                u.querySelector(
                                                                    ".gslide-media"
                                                                )),
                                                            (o =
                                                                u.querySelector(
                                                                    ".gslide-inline"
                                                                )),
                                                            (h = null),
                                                            D(
                                                                p,
                                                                "gslide-image"
                                                            ) &&
                                                                (h =
                                                                    p.querySelector(
                                                                        "img"
                                                                    )),
                                                            769 <
                                                                (window.innerWidth ||
                                                                    document
                                                                        .documentElement
                                                                        .clientWidth ||
                                                                    document
                                                                        .body
                                                                        .clientWidth) &&
                                                                (p =
                                                                    u.querySelector(
                                                                        ".ginner-container"
                                                                    )),
                                                            _(L, "greset"),
                                                            (20 < e.pageX &&
                                                                e.pageX <
                                                                    window.innerWidth -
                                                                        20) ||
                                                                e.preventDefault());
                                                },
                                                touchMove: function (e) {
                                                    if (
                                                        c &&
                                                        ((P =
                                                            e.targetTouches[0]),
                                                        !g) &&
                                                        !y
                                                    ) {
                                                        if (
                                                            o &&
                                                            o.offsetHeight > d
                                                        ) {
                                                            var t =
                                                                k.pageX -
                                                                P.pageX;
                                                            if (
                                                                Math.abs(t) <=
                                                                13
                                                            )
                                                                return !1;
                                                        }
                                                        f = !0;
                                                        var i,
                                                            t =
                                                                e
                                                                    .targetTouches[0]
                                                                    .clientX,
                                                            e =
                                                                e
                                                                    .targetTouches[0]
                                                                    .clientY,
                                                            t = A - t,
                                                            e = O - e;
                                                        if (
                                                            (Math.abs(t) >
                                                            Math.abs(e)
                                                                ? (M = !(C =
                                                                      !1))
                                                                : (C = !(M =
                                                                      !1)),
                                                            (n =
                                                                P.pageX -
                                                                k.pageX),
                                                            (E = (100 * n) / l),
                                                            (r =
                                                                P.pageY -
                                                                k.pageY),
                                                            (T = (100 * r) / d),
                                                            C &&
                                                                h &&
                                                                ((i =
                                                                    1 -
                                                                    Math.abs(
                                                                        r
                                                                    ) /
                                                                        d),
                                                                (L.style.opacity =
                                                                    i),
                                                                a.settings
                                                                    .touchFollowAxis) &&
                                                                (E = 0),
                                                            M &&
                                                                ((i =
                                                                    1 -
                                                                    Math.abs(
                                                                        n
                                                                    ) /
                                                                        l),
                                                                (p.style.opacity =
                                                                    i),
                                                                a.settings
                                                                    .touchFollowAxis) &&
                                                                (T = 0),
                                                            !h)
                                                        )
                                                            return B(
                                                                p,
                                                                "translate3d(".concat(
                                                                    E,
                                                                    "%, 0, 0)"
                                                                )
                                                            );
                                                        B(
                                                            p,
                                                            "translate3d("
                                                                .concat(
                                                                    E,
                                                                    "%, "
                                                                )
                                                                .concat(
                                                                    T,
                                                                    "%, 0)"
                                                                )
                                                        );
                                                    }
                                                },
                                                touchEnd: function () {
                                                    if (c) {
                                                        var e, t;
                                                        if (
                                                            ((f = !1), !y && !g)
                                                        )
                                                            return (
                                                                (e = Math.abs(
                                                                    parseInt(T)
                                                                )),
                                                                (t = Math.abs(
                                                                    parseInt(E)
                                                                )),
                                                                29 < e && h
                                                                    ? void a.close()
                                                                    : e < 29 &&
                                                                      t < 25
                                                                    ? ($(
                                                                          L,
                                                                          "greset"
                                                                      ),
                                                                      (L.style.opacity = 1),
                                                                      W(p))
                                                                    : void 0
                                                            );
                                                        (x = w), (S = b);
                                                    }
                                                },
                                                multipointEnd: function () {
                                                    setTimeout(function () {
                                                        g = !1;
                                                    }, 50);
                                                },
                                                multipointStart: function () {
                                                    (g = !0), (m = v || 1);
                                                },
                                                pinch: function (e) {
                                                    if (!h || f) return !1;
                                                    (g = !0),
                                                        (h.scaleX = h.scaleY =
                                                            m * e.zoom);
                                                    e = m * e.zoom;
                                                    (y = !0),
                                                        e <= 1
                                                            ? ((y = !1),
                                                              (e = 1),
                                                              (b =
                                                                  w =
                                                                  x =
                                                                  S =
                                                                      null),
                                                              h.setAttribute(
                                                                  "style",
                                                                  ""
                                                              ))
                                                            : ((h.style.transform =
                                                                  "scale3d("
                                                                      .concat(
                                                                          (e =
                                                                              4.5 <
                                                                              e
                                                                                  ? 4.5
                                                                                  : e),
                                                                          ", "
                                                                      )
                                                                      .concat(
                                                                          e,
                                                                          ", 1)"
                                                                      )),
                                                              (v = e));
                                                },
                                                pressMove: function (e) {
                                                    var t, i;
                                                    y &&
                                                        !g &&
                                                        ((i =
                                                            P.pageX - k.pageX),
                                                        (t = P.pageY - k.pageY),
                                                        x && (i += x),
                                                        S && (t += S),
                                                        (w = i),
                                                        (b = t),
                                                        (i = "translate3d("
                                                            .concat(i, "px, ")
                                                            .concat(
                                                                t,
                                                                "px, 0)"
                                                            )),
                                                        v &&
                                                            (i += " scale3d("
                                                                .concat(v, ", ")
                                                                .concat(
                                                                    v,
                                                                    ", 1)"
                                                                )),
                                                        B(h, i));
                                                },
                                                swipe: function (e) {
                                                    if (!y)
                                                        if (g) g = !1;
                                                        else {
                                                            if (
                                                                "Left" ==
                                                                e.direction
                                                            ) {
                                                                if (
                                                                    a.index ==
                                                                    a.elements
                                                                        .length -
                                                                        1
                                                                )
                                                                    return W(p);
                                                                a.nextSlide();
                                                            }
                                                            if (
                                                                "Right" ==
                                                                e.direction
                                                            ) {
                                                                if (
                                                                    0 == a.index
                                                                )
                                                                    return W(p);
                                                                a.prevSlide();
                                                            }
                                                        }
                                                },
                                            })),
                                            (a.events.touch = e))),
                                    !this.settings.keyboardNavigation ||
                                        (s = this).events.hasOwnProperty(
                                            "keyboard"
                                        ) ||
                                        (s.events.keyboard = I("keydown", {
                                            onElement: window,
                                            withCallback: function (e, t) {
                                                var i = (e = e || window.event)
                                                    .keyCode;
                                                if (9 == i) {
                                                    var a =
                                                        document.querySelector(
                                                            ".gbtn.focused"
                                                        );
                                                    if (!a) {
                                                        var n =
                                                            !(
                                                                !document.activeElement ||
                                                                !document
                                                                    .activeElement
                                                                    .nodeName
                                                            ) &&
                                                            document.activeElement.nodeName.toLocaleLowerCase();
                                                        if (
                                                            "input" == n ||
                                                            "textarea" == n ||
                                                            "button" == n
                                                        )
                                                            return;
                                                    }
                                                    e.preventDefault();
                                                    n =
                                                        document.querySelectorAll(
                                                            ".gbtn[data-taborder]"
                                                        );
                                                    if (!n || n.length <= 0)
                                                        return;
                                                    if (!a)
                                                        return void (
                                                            (e = R()) &&
                                                            (e.focus(),
                                                            $(e, "focused"))
                                                        );
                                                    n = R(
                                                        a.getAttribute(
                                                            "data-taborder"
                                                        )
                                                    );
                                                    _(a, "focused"),
                                                        n &&
                                                            (n.focus(),
                                                            $(n, "focused"));
                                                }
                                                39 == i && s.nextSlide(),
                                                    37 == i && s.prevSlide(),
                                                    27 == i && s.close();
                                            },
                                        }));
                            },
                        },
                        {
                            key: "openAt",
                            value: function () {
                                this.open(
                                    null,
                                    0 < arguments.length &&
                                        void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0
                                );
                            },
                        },
                        {
                            key: "showSlide",
                            value: function () {
                                var e,
                                    t = this,
                                    i =
                                        0 < arguments.length &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : 0,
                                    a =
                                        1 < arguments.length &&
                                        void 0 !== arguments[1] &&
                                        arguments[1],
                                    n =
                                        (C(this.loader),
                                        (this.index = parseInt(i)),
                                        this.slidesContainer.querySelector(
                                            ".current"
                                        )),
                                    s =
                                        (n && _(n, "current"),
                                        this.slideAnimateOut(),
                                        this.slidesContainer.querySelectorAll(
                                            ".gslide"
                                        )[i]);
                                D(s, "loaded")
                                    ? (this.slideAnimateIn(s, a),
                                      l(this.loader))
                                    : (C(this.loader),
                                      (n = this.elements[i]),
                                      (e = {
                                          index: this.index,
                                          slide: s,
                                          slideNode: s,
                                          slideConfig: n.slideConfig,
                                          slideIndex: this.index,
                                          trigger: n.node,
                                          player: null,
                                      }),
                                      this.trigger("slide_before_load", e),
                                      n.instance.setContent(s, function () {
                                          l(t.loader),
                                              t.resize(),
                                              t.slideAnimateIn(s, a),
                                              t.trigger("slide_after_load", e);
                                      })),
                                    (this.slideDescription = s.querySelector(
                                        ".gslide-description"
                                    )),
                                    (this.slideDescriptionContained =
                                        this.slideDescription &&
                                        D(
                                            this.slideDescription.parentNode,
                                            "gslide-media"
                                        )),
                                    this.settings.preload &&
                                        (this.preloadSlide(i + 1),
                                        this.preloadSlide(i - 1)),
                                    this.updateNavigationClasses(),
                                    (this.activeSlide = s);
                            },
                        },
                        {
                            key: "preloadSlide",
                            value: function (e) {
                                var t,
                                    i,
                                    a,
                                    n,
                                    s = this;
                                return (
                                    !(
                                        e < 0 ||
                                        e > this.elements.length - 1 ||
                                        H(this.elements[e]) ||
                                        D(
                                            (t =
                                                this.slidesContainer.querySelectorAll(
                                                    ".gslide"
                                                )[e]),
                                            "loaded"
                                        )
                                    ) &&
                                    ((a = (i = this.elements[e]).type),
                                    (n = {
                                        index: e,
                                        slide: t,
                                        slideNode: t,
                                        slideConfig: i.slideConfig,
                                        slideIndex: e,
                                        trigger: i.node,
                                        player: null,
                                    }),
                                    this.trigger("slide_before_load", n),
                                    void ("video" === a || "external" === a
                                        ? setTimeout(function () {
                                              i.instance.setContent(
                                                  t,
                                                  function () {
                                                      s.trigger(
                                                          "slide_after_load",
                                                          n
                                                      );
                                                  }
                                              );
                                          }, 200)
                                        : i.instance.setContent(t, function () {
                                              s.trigger("slide_after_load", n);
                                          })))
                                );
                            },
                        },
                        {
                            key: "prevSlide",
                            value: function () {
                                this.goToSlide(this.index - 1);
                            },
                        },
                        {
                            key: "nextSlide",
                            value: function () {
                                this.goToSlide(this.index + 1);
                            },
                        },
                        {
                            key: "goToSlide",
                            value: function () {
                                var e =
                                    0 < arguments.length &&
                                    void 0 !== arguments[0] &&
                                    arguments[0];
                                if (
                                    ((this.prevActiveSlide = this.activeSlide),
                                    (this.prevActiveSlideIndex = this.index),
                                    !this.loop() &&
                                        (e < 0 || e > this.elements.length - 1))
                                )
                                    return !1;
                                e < 0
                                    ? (e = this.elements.length - 1)
                                    : e >= this.elements.length && (e = 0),
                                    this.showSlide(e);
                            },
                        },
                        {
                            key: "insertSlide",
                            value: function () {
                                var e =
                                        0 < arguments.length &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : {},
                                    t =
                                        1 < arguments.length &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : -1,
                                    e =
                                        (t < 0 && (t = this.elements.length),
                                        new m(e, this, t)),
                                    i = e.getConfig(),
                                    a = d({}, i),
                                    n = e.create(),
                                    s = this.elements.length - 1,
                                    e =
                                        ((a.index = t),
                                        (a.node = !1),
                                        (a.instance = e),
                                        (a.slideConfig = i),
                                        this.elements.splice(t, 0, a),
                                        null),
                                    r = null;
                                this.slidesContainer &&
                                    (s < t
                                        ? this.slidesContainer.appendChild(n)
                                        : ((s =
                                              this.slidesContainer.querySelectorAll(
                                                  ".gslide"
                                              )[t]),
                                          this.slidesContainer.insertBefore(
                                              n,
                                              s
                                          )),
                                    ((this.settings.preload &&
                                        0 == this.index &&
                                        0 == t) ||
                                        this.index - 1 == t ||
                                        this.index + 1 == t) &&
                                        this.preloadSlide(t),
                                    0 === this.index &&
                                        0 === t &&
                                        (this.index = 1),
                                    this.updateNavigationClasses(),
                                    (e =
                                        this.slidesContainer.querySelectorAll(
                                            ".gslide"
                                        )[t]),
                                    (r = this.getSlidePlayerInstance(t)),
                                    (a.slideNode = e)),
                                    this.trigger("slide_inserted", {
                                        index: t,
                                        slide: e,
                                        slideNode: e,
                                        slideConfig: i,
                                        slideIndex: t,
                                        trigger: null,
                                        player: r,
                                    }),
                                    Y(this.settings.slideInserted) &&
                                        this.settings.slideInserted({
                                            index: t,
                                            slide: e,
                                            player: r,
                                        });
                            },
                        },
                        {
                            key: "removeSlide",
                            value: function () {
                                var e =
                                    0 < arguments.length &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : -1;
                                if (e < 0 || e > this.elements.length - 1)
                                    return !1;
                                var t =
                                    this.slidesContainer &&
                                    this.slidesContainer.querySelectorAll(
                                        ".gslide"
                                    )[e];
                                t &&
                                    (this.getActiveSlideIndex() == e &&
                                        (e == this.elements.length - 1
                                            ? this.prevSlide()
                                            : this.nextSlide()),
                                    t.parentNode.removeChild(t)),
                                    this.elements.splice(e, 1),
                                    this.trigger("slide_removed", e),
                                    Y(this.settings.slideRemoved) &&
                                        this.settings.slideRemoved(e);
                            },
                        },
                        {
                            key: "slideAnimateIn",
                            value: function (e, t) {
                                var i = this,
                                    a = e.querySelector(".gslide-media"),
                                    n = e.querySelector(".gslide-description"),
                                    s = {
                                        index: this.prevActiveSlideIndex,
                                        slide: this.prevActiveSlide,
                                        slideNode: this.prevActiveSlide,
                                        slideIndex: this.prevActiveSlide,
                                        slideConfig: H(
                                            this.prevActiveSlideIndex
                                        )
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].slideConfig,
                                        trigger: H(this.prevActiveSlideIndex)
                                            ? null
                                            : this.elements[
                                                  this.prevActiveSlideIndex
                                              ].node,
                                        player: this.getSlidePlayerInstance(
                                            this.prevActiveSlideIndex
                                        ),
                                    },
                                    r = {
                                        index: this.index,
                                        slide: this.activeSlide,
                                        slideNode: this.activeSlide,
                                        slideConfig:
                                            this.elements[this.index]
                                                .slideConfig,
                                        slideIndex: this.index,
                                        trigger: this.elements[this.index].node,
                                        player: this.getSlidePlayerInstance(
                                            this.index
                                        ),
                                    };
                                0 < a.offsetWidth &&
                                    n &&
                                    (l(n), (n.style.display = "")),
                                    _(e, this.effectsClasses),
                                    t
                                        ? X(
                                              e,
                                              this.settings.cssEfects[
                                                  this.settings.openEffect
                                              ].in,
                                              function () {
                                                  i.settings.autoplayVideos &&
                                                      i.slidePlayerPlay(e),
                                                      i.trigger(
                                                          "slide_changed",
                                                          {
                                                              prev: s,
                                                              current: r,
                                                          }
                                                      ),
                                                      Y(
                                                          i.settings
                                                              .afterSlideChange
                                                      ) &&
                                                          i.settings.afterSlideChange.apply(
                                                              i,
                                                              [s, r]
                                                          );
                                              }
                                          )
                                        : ((n =
                                              "none" !==
                                              (a = this.settings.slideEffect)
                                                  ? this.settings.cssEfects[a]
                                                        .in
                                                  : a),
                                          this.prevActiveSlideIndex >
                                              this.index &&
                                              "slide" ==
                                                  this.settings.slideEffect &&
                                              (n =
                                                  this.settings.cssEfects
                                                      .slideBack.in),
                                          X(e, n, function () {
                                              i.settings.autoplayVideos &&
                                                  i.slidePlayerPlay(e),
                                                  i.trigger("slide_changed", {
                                                      prev: s,
                                                      current: r,
                                                  }),
                                                  Y(
                                                      i.settings
                                                          .afterSlideChange
                                                  ) &&
                                                      i.settings.afterSlideChange.apply(
                                                          i,
                                                          [s, r]
                                                      );
                                          })),
                                    setTimeout(function () {
                                        i.resize(e);
                                    }, 100),
                                    $(e, "current");
                            },
                        },
                        {
                            key: "slideAnimateOut",
                            value: function () {
                                if (!this.prevActiveSlide) return !1;
                                var a = this.prevActiveSlide,
                                    e =
                                        (_(a, this.effectsClasses),
                                        $(a, "prev"),
                                        this.settings.slideEffect),
                                    e =
                                        "none" !== e
                                            ? this.settings.cssEfects[e].out
                                            : e;
                                this.slidePlayerPause(a),
                                    this.trigger("slide_before_change", {
                                        prev: {
                                            index: this.prevActiveSlideIndex,
                                            slide: this.prevActiveSlide,
                                            slideNode: this.prevActiveSlide,
                                            slideIndex:
                                                this.prevActiveSlideIndex,
                                            slideConfig: H(
                                                this.prevActiveSlideIndex
                                            )
                                                ? null
                                                : this.elements[
                                                      this.prevActiveSlideIndex
                                                  ].slideConfig,
                                            trigger: H(
                                                this.prevActiveSlideIndex
                                            )
                                                ? null
                                                : this.elements[
                                                      this.prevActiveSlideIndex
                                                  ].node,
                                            player: this.getSlidePlayerInstance(
                                                this.prevActiveSlideIndex
                                            ),
                                        },
                                        current: {
                                            index: this.index,
                                            slide: this.activeSlide,
                                            slideNode: this.activeSlide,
                                            slideIndex: this.index,
                                            slideConfig:
                                                this.elements[this.index]
                                                    .slideConfig,
                                            trigger:
                                                this.elements[this.index].node,
                                            player: this.getSlidePlayerInstance(
                                                this.index
                                            ),
                                        },
                                    }),
                                    Y(this.settings.beforeSlideChange) &&
                                        this.settings.beforeSlideChange.apply(
                                            this,
                                            [
                                                {
                                                    index: this
                                                        .prevActiveSlideIndex,
                                                    slide: this.prevActiveSlide,
                                                    player: this.getSlidePlayerInstance(
                                                        this
                                                            .prevActiveSlideIndex
                                                    ),
                                                },
                                                {
                                                    index: this.index,
                                                    slide: this.activeSlide,
                                                    player: this.getSlidePlayerInstance(
                                                        this.index
                                                    ),
                                                },
                                            ]
                                        ),
                                    this.prevActiveSlideIndex > this.index &&
                                        "slide" == this.settings.slideEffect &&
                                        (e =
                                            this.settings.cssEfects.slideBack
                                                .out),
                                    X(a, e, function () {
                                        var e =
                                                a.querySelector(
                                                    ".ginner-container"
                                                ),
                                            t =
                                                a.querySelector(
                                                    ".gslide-media"
                                                ),
                                            i = a.querySelector(
                                                ".gslide-description"
                                            );
                                        (e.style.transform = ""),
                                            (t.style.transform = ""),
                                            _(t, "greset"),
                                            (t.style.opacity = ""),
                                            i && (i.style.opacity = ""),
                                            _(a, "prev");
                                    });
                            },
                        },
                        {
                            key: "getAllPlayers",
                            value: function () {
                                return this.videoPlayers;
                            },
                        },
                        {
                            key: "getSlidePlayerInstance",
                            value: function (e) {
                                var e = "gvideo" + e,
                                    t = this.getAllPlayers();
                                return !(!b(t, e) || !t[e]) && t[e];
                            },
                        },
                        {
                            key: "stopSlideVideo",
                            value: function (e) {
                                q(e) &&
                                    (t = e.querySelector(".gvideo-wrapper")) &&
                                    (e = t.getAttribute("data-index")),
                                    console.log(
                                        "stopSlideVideo is deprecated, use slidePlayerPause"
                                    );
                                var t = this.getSlidePlayerInstance(e);
                                t && t.playing && t.pause();
                            },
                        },
                        {
                            key: "slidePlayerPause",
                            value: function (e) {
                                q(e) &&
                                    (t = e.querySelector(".gvideo-wrapper")) &&
                                    (e = t.getAttribute("data-index"));
                                var t = this.getSlidePlayerInstance(e);
                                t && t.playing && t.pause();
                            },
                        },
                        {
                            key: "playSlideVideo",
                            value: function (e) {
                                q(e) &&
                                    (t = e.querySelector(".gvideo-wrapper")) &&
                                    (e = t.getAttribute("data-index")),
                                    console.log(
                                        "playSlideVideo is deprecated, use slidePlayerPlay"
                                    );
                                var t = this.getSlidePlayerInstance(e);
                                t && !t.playing && t.play();
                            },
                        },
                        {
                            key: "slidePlayerPlay",
                            value: function (e) {
                                var t;
                                (!Z ||
                                    (null != (t = this.settings.plyr.config) &&
                                        t.muted)) &&
                                    (q(e) &&
                                        (t =
                                            e.querySelector(
                                                ".gvideo-wrapper"
                                            )) &&
                                        (e = t.getAttribute("data-index")),
                                    (t = this.getSlidePlayerInstance(e))) &&
                                    !t.playing &&
                                    (t.play(), this.settings.autofocusVideos) &&
                                    t.elements.container.focus();
                            },
                        },
                        {
                            key: "setElements",
                            value: function (e) {
                                var n = this,
                                    s = ((this.settings.elements = !1), []);
                                e &&
                                    e.length &&
                                    p(e, function (e, t) {
                                        var e = new m(e, n, t),
                                            i = e.getConfig(),
                                            a = d({}, i);
                                        (a.slideConfig = i),
                                            (a.instance = e),
                                            (a.index = t),
                                            s.push(a);
                                    }),
                                    (this.elements = s),
                                    this.lightboxOpen &&
                                        ((this.slidesContainer.innerHTML = ""),
                                        this.elements.length) &&
                                        (p(this.elements, function () {
                                            var e = v(n.settings.slideHTML);
                                            n.slidesContainer.appendChild(e);
                                        }),
                                        this.showSlide(0, !0));
                            },
                        },
                        {
                            key: "getElementIndex",
                            value: function (i) {
                                var a = !1;
                                return (
                                    p(this.elements, function (e, t) {
                                        if (b(e, "node") && e.node == i)
                                            return (a = t), !0;
                                    }),
                                    a
                                );
                            },
                        },
                        {
                            key: "getElements",
                            value: function () {
                                var s = this,
                                    r = [],
                                    e =
                                        ((this.elements = this.elements || []),
                                        !H(this.settings.elements) &&
                                            k(this.settings.elements) &&
                                            this.settings.elements.length &&
                                            p(
                                                this.settings.elements,
                                                function (e, t) {
                                                    var e = new m(e, s, t),
                                                        i = e.getConfig(),
                                                        a = d({}, i);
                                                    (a.node = !1),
                                                        (a.index = t),
                                                        (a.instance = e),
                                                        (a.slideConfig = i),
                                                        r.push(a);
                                                }
                                            ),
                                        !1);
                                return (
                                    (e = this.getSelector()
                                        ? document.querySelectorAll(
                                              this.getSelector()
                                          )
                                        : e) &&
                                        p(e, function (e, t) {
                                            var i = new m(e, s, t),
                                                a = i.getConfig(),
                                                n = d({}, a);
                                            (n.node = e),
                                                (n.index = t),
                                                (n.instance = i),
                                                (n.slideConfig = a),
                                                (n.gallery =
                                                    e.getAttribute(
                                                        "data-gallery"
                                                    )),
                                                r.push(n);
                                        }),
                                    r
                                );
                            },
                        },
                        {
                            key: "getGalleryElements",
                            value: function (e, t) {
                                return e.filter(function (e) {
                                    return e.gallery == t;
                                });
                            },
                        },
                        {
                            key: "getSelector",
                            value: function () {
                                return (
                                    !this.settings.elements &&
                                    (this.settings.selector &&
                                    "data-" ==
                                        this.settings.selector.substring(0, 5)
                                        ? "*[".concat(
                                              this.settings.selector,
                                              "]"
                                          )
                                        : this.settings.selector)
                                );
                            },
                        },
                        {
                            key: "getActiveSlide",
                            value: function () {
                                return this.slidesContainer.querySelectorAll(
                                    ".gslide"
                                )[this.index];
                            },
                        },
                        {
                            key: "getActiveSlideIndex",
                            value: function () {
                                return this.index;
                            },
                        },
                        {
                            key: "getAnimationClasses",
                            value: function () {
                                var e,
                                    t,
                                    i = [];
                                for (e in this.settings.cssEfects)
                                    this.settings.cssEfects.hasOwnProperty(e) &&
                                        ((t = this.settings.cssEfects[e]),
                                        i.push("g".concat(t.in)),
                                        i.push("g".concat(t.out)));
                                return i.join(" ");
                            },
                        },
                        {
                            key: "build",
                            value: function () {
                                var i = this;
                                if (this.built) return !1;
                                var e = document.body.childNodes,
                                    t = [],
                                    e =
                                        (p(e, function (e) {
                                            e.parentNode == document.body &&
                                                "#" !== e.nodeName.charAt(0) &&
                                                e.hasAttribute &&
                                                !e.hasAttribute(
                                                    "aria-hidden"
                                                ) &&
                                                (t.push(e),
                                                e.setAttribute(
                                                    "aria-hidden",
                                                    "true"
                                                ));
                                        }),
                                        b(this.settings.svg, "next")
                                            ? this.settings.svg.next
                                            : ""),
                                    a = b(this.settings.svg, "prev")
                                        ? this.settings.svg.prev
                                        : "",
                                    n = b(this.settings.svg, "close")
                                        ? this.settings.svg.close
                                        : "",
                                    s = v(
                                        (s = (s = (s = (s =
                                            this.settings.lightboxHTML).replace(
                                            /{nextSVG}/g,
                                            e
                                        )).replace(/{prevSVG}/g, a)).replace(
                                            /{closeSVG}/g,
                                            n
                                        ))
                                    ),
                                    e =
                                        (document.body.appendChild(s),
                                        document.getElementById(
                                            "glightbox-body"
                                        )),
                                    a = (this.modal = e).querySelector(
                                        ".gclose"
                                    );
                                (this.prevButton = e.querySelector(".gprev")),
                                    (this.nextButton =
                                        e.querySelector(".gnext")),
                                    (this.overlay =
                                        e.querySelector(".goverlay")),
                                    (this.loader = e.querySelector(".gloader")),
                                    (this.slidesContainer =
                                        document.getElementById(
                                            "glightbox-slider"
                                        )),
                                    (this.bodyHiddenChildElms = t),
                                    (this.events = {}),
                                    $(
                                        this.modal,
                                        "glightbox-" + this.settings.skin
                                    ),
                                    this.settings.closeButton &&
                                        a &&
                                        (this.events.close = I("click", {
                                            onElement: a,
                                            withCallback: function (e, t) {
                                                e.preventDefault(), i.close();
                                            },
                                        })),
                                    a &&
                                        !this.settings.closeButton &&
                                        a.parentNode.removeChild(a),
                                    this.nextButton &&
                                        (this.events.next = I("click", {
                                            onElement: this.nextButton,
                                            withCallback: function (e, t) {
                                                e.preventDefault(),
                                                    i.nextSlide();
                                            },
                                        })),
                                    this.prevButton &&
                                        (this.events.prev = I("click", {
                                            onElement: this.prevButton,
                                            withCallback: function (e, t) {
                                                e.preventDefault(),
                                                    i.prevSlide();
                                            },
                                        })),
                                    this.settings.closeOnOutsideClick &&
                                        (this.events.outClose = I("click", {
                                            onElement: e,
                                            withCallback: function (e, t) {
                                                i.preventOutsideClick ||
                                                    D(
                                                        document.body,
                                                        "glightbox-mobile"
                                                    ) ||
                                                    N(
                                                        e.target,
                                                        ".ginner-container"
                                                    ) ||
                                                    N(e.target, ".gbtn") ||
                                                    D(e.target, "gnext") ||
                                                    D(e.target, "gprev") ||
                                                    i.close();
                                            },
                                        })),
                                    p(this.elements, function (e, t) {
                                        i.slidesContainer.appendChild(
                                            e.instance.create()
                                        ),
                                            (e.slideNode =
                                                i.slidesContainer.querySelectorAll(
                                                    ".gslide"
                                                )[t]);
                                    }),
                                    K && $(document.body, "glightbox-touch"),
                                    (this.events.resize = I("resize", {
                                        onElement: window,
                                        withCallback: function () {
                                            i.resize();
                                        },
                                    })),
                                    (this.built = !0);
                            },
                        },
                        {
                            key: "resize",
                            value: function () {
                                var e,
                                    t,
                                    i,
                                    a,
                                    n,
                                    s,
                                    r,
                                    o =
                                        0 < arguments.length &&
                                        void 0 !== arguments[0]
                                            ? arguments[0]
                                            : null;
                                (o = o || this.activeSlide) &&
                                    !D(o, "zoomed") &&
                                    ((i = j()),
                                    (e = o.querySelector(".gvideo-wrapper")),
                                    (o = o.querySelector(".gslide-image")),
                                    (t = this.slideDescription),
                                    (s = i.width),
                                    (i = i.height),
                                    (s <= 768 ? $ : _)(
                                        document.body,
                                        "glightbox-mobile"
                                    ),
                                    e || o) &&
                                    ((a = !1),
                                    t &&
                                        (D(t, "description-bottom") ||
                                            D(t, "description-top")) &&
                                        !D(t, "gabsolute") &&
                                        (a = !0),
                                    o &&
                                        (s <= 768
                                            ? o.querySelector("img")
                                            : a &&
                                              ((n = t.offsetHeight),
                                              (o =
                                                  o.querySelector(
                                                      "img"
                                                  )).setAttribute(
                                                  "style",
                                                  "max-height: calc(100vh - ".concat(
                                                      n,
                                                      "px)"
                                                  )
                                              ),
                                              t.setAttribute(
                                                  "style",
                                                  "max-width: ".concat(
                                                      o.offsetWidth,
                                                      "px;"
                                                  )
                                              ))),
                                    e) &&
                                    ((n = b(this.settings.plyr.config, "ratio")
                                        ? this.settings.plyr.config.ratio
                                        : "") ||
                                        ((o = e.clientWidth),
                                        (r = e.clientHeight),
                                        (n = ""
                                            .concat(o / (o = o / r), ":")
                                            .concat(r / o))),
                                    (r = n.split(":")),
                                    (o = this.settings.videosWidth),
                                    (n = this.settings.videosWidth),
                                    (r =
                                        (n =
                                            G(o) || -1 !== o.indexOf("px")
                                                ? parseInt(o)
                                                : -1 !== o.indexOf("vw")
                                                ? (s * parseInt(o)) / 100
                                                : -1 !== o.indexOf("vh")
                                                ? (i * parseInt(o)) / 100
                                                : -1 !== o.indexOf("%")
                                                ? (s * parseInt(o)) / 100
                                                : parseInt(e.clientWidth)) /
                                        (parseInt(r[0]) / parseInt(r[1]))),
                                    (r = Math.floor(r)),
                                    a && (i -= t.offsetHeight),
                                    s < n || i < r || (i < r && n < s)
                                        ? ((r = e.offsetWidth),
                                          (n = e.offsetHeight),
                                          e.parentNode.setAttribute(
                                              "style",
                                              "max-width: ".concat(
                                                  (r = {
                                                      width: r * (s = i / n),
                                                      height: n * s,
                                                  }).width,
                                                  "px"
                                              )
                                          ),
                                          a &&
                                              t.setAttribute(
                                                  "style",
                                                  "max-width: ".concat(
                                                      r.width,
                                                      "px;"
                                                  )
                                              ))
                                        : ((e.parentNode.style.maxWidth =
                                              "".concat(o)),
                                          a &&
                                              t.setAttribute(
                                                  "style",
                                                  "max-width: ".concat(o, ";")
                                              )));
                            },
                        },
                        {
                            key: "reload",
                            value: function () {
                                this.init();
                            },
                        },
                        {
                            key: "updateNavigationClasses",
                            value: function () {
                                var e = this.loop();
                                _(this.nextButton, "disabled"),
                                    _(this.prevButton, "disabled"),
                                    0 == this.index &&
                                    this.elements.length - 1 == 0
                                        ? ($(this.prevButton, "disabled"),
                                          $(this.nextButton, "disabled"))
                                        : 0 !== this.index || e
                                        ? this.index !==
                                              this.elements.length - 1 ||
                                          e ||
                                          $(this.nextButton, "disabled")
                                        : $(this.prevButton, "disabled");
                            },
                        },
                        {
                            key: "loop",
                            value: function () {
                                var e = b(this.settings, "loopAtEnd")
                                    ? this.settings.loopAtEnd
                                    : null;
                                return b(this.settings, "loop")
                                    ? this.settings.loop
                                    : e;
                            },
                        },
                        {
                            key: "close",
                            value: function () {
                                var i = this;
                                if (!this.lightboxOpen) {
                                    if (this.events) {
                                        for (var e in this.events)
                                            this.events.hasOwnProperty(e) &&
                                                this.events[e].destroy();
                                        this.events = null;
                                    }
                                    return !1;
                                }
                                if (this.closing) return !1;
                                (this.closing = !0),
                                    this.slidePlayerPause(this.activeSlide),
                                    this.fullElementsList &&
                                        (this.elements = this.fullElementsList),
                                    this.bodyHiddenChildElms.length &&
                                        p(
                                            this.bodyHiddenChildElms,
                                            function (e) {
                                                e.removeAttribute(
                                                    "aria-hidden"
                                                );
                                            }
                                        ),
                                    $(this.modal, "glightbox-closing"),
                                    X(
                                        this.overlay,
                                        "none" == this.settings.openEffect
                                            ? "none"
                                            : this.settings.cssEfects.fade.out
                                    ),
                                    X(
                                        this.activeSlide,
                                        this.settings.cssEfects[
                                            this.settings.closeEffect
                                        ].out,
                                        function () {
                                            if (
                                                ((i.activeSlide = null),
                                                (i.prevActiveSlideIndex = null),
                                                (i.prevActiveSlide = null),
                                                (i.built = !1),
                                                i.events)
                                            ) {
                                                for (var e in i.events)
                                                    i.events.hasOwnProperty(
                                                        e
                                                    ) && i.events[e].destroy();
                                                i.events = null;
                                            }
                                            var t = document.body,
                                                t =
                                                    (_(Q, "glightbox-open"),
                                                    _(
                                                        t,
                                                        "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"
                                                    ),
                                                    i.modal.parentNode.removeChild(
                                                        i.modal
                                                    ),
                                                    i.trigger("close"),
                                                    Y(i.settings.onClose) &&
                                                        i.settings.onClose(),
                                                    document.querySelector(
                                                        ".gcss-styles"
                                                    ));
                                            t && t.parentNode.removeChild(t),
                                                (i.lightboxOpen = !1),
                                                (i.closing = null);
                                        }
                                    );
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.close(),
                                    this.clearAllEvents(),
                                    this.baseEvents &&
                                        this.baseEvents.destroy();
                            },
                        },
                        {
                            key: "on",
                            value: function (e, t) {
                                var i =
                                    2 < arguments.length &&
                                    void 0 !== arguments[2] &&
                                    arguments[2];
                                if (!e || !Y(t))
                                    throw new TypeError(
                                        "Event name and callback must be defined"
                                    );
                                this.apiEvents.push({
                                    evt: e,
                                    once: i,
                                    callback: t,
                                });
                            },
                        },
                        {
                            key: "once",
                            value: function (e, t) {
                                this.on(e, t, !0);
                            },
                        },
                        {
                            key: "trigger",
                            value: function (n) {
                                var t = this,
                                    s =
                                        1 < arguments.length &&
                                        void 0 !== arguments[1]
                                            ? arguments[1]
                                            : null,
                                    r = [];
                                p(this.apiEvents, function (e, t) {
                                    var i = e.evt,
                                        a = e.once,
                                        e = e.callback;
                                    i == n && (e(s), a) && r.push(t);
                                }),
                                    r.length &&
                                        p(r, function (e) {
                                            return t.apiEvents.splice(e, 1);
                                        });
                            },
                        },
                        {
                            key: "clearAllEvents",
                            value: function () {
                                this.apiEvents.splice(0, this.apiEvents.length);
                            },
                        },
                        {
                            key: "version",
                            value: function () {
                                return "3.1.0";
                            },
                        },
                    ]),
                    x);
            function x() {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                r(this, x),
                    (this.customOptions = e),
                    (this.settings = d(J, e)),
                    (this.effectsClasses = this.getAnimationClasses()),
                    (this.videoPlayers = {}),
                    (this.apiEvents = []),
                    (this.fullElementsList = !1);
            }
            function S(e, t, i) {
                r(this, S),
                    (this.element = e),
                    (this.instance = t),
                    (this.index = i);
            }
            function E() {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                r(this, E),
                    (this.defaults = {
                        href: "",
                        sizes: "",
                        srcset: "",
                        title: "",
                        type: "",
                        videoProvider: "",
                        description: "",
                        alt: "",
                        descPosition: "bottom",
                        effect: "",
                        width: "",
                        height: "",
                        content: !1,
                        zoomable: !0,
                        draggable: !0,
                    }),
                    c(e) && (this.defaults = d(this.defaults, e));
            }
            return function () {
                var e = new ee(
                    0 < arguments.length && void 0 !== arguments[0]
                        ? arguments[0]
                        : {}
                );
                return e.init(), e;
            };
        }),
        "object" ==
            ("undefined" == typeof exports ? "undefined" : _typeof(exports)) &&
        "undefined" != typeof module
            ? (module.exports = t())
            : "function" == typeof define && define.amd
            ? define(t)
            : ((e = e || self).GLightbox = t()),
        (window.app.openBurger = function () {
            var e, t;
            document.querySelector(".go-js-burger") &&
                ((e = document.querySelector(".menu__list")),
                (t = document.querySelector(".burger")).addEventListener(
                    "click",
                    function () {
                        e.classList.toggle("menu__list--active"),
                            t.classList.toggle("burger--active");
                    }
                ),
                window.addEventListener("scroll", function () {
                    e.classList.remove("menu__list--active"),
                        t.classList.remove("burger--active");
                }));
        }),
        window.app.openBurger(),
        (window.app.Scroll = function () {
            var e,
                t = _createForOfIteratorHelper(
                    document.querySelectorAll(".js-anchor")
                );
            try {
                for (t.s(); !(e = t.n()).done; )
                    !(function () {
                        var t = e.value;
                        t.addEventListener("click", function (e) {
                            e.preventDefault();
                            e = t.getAttribute("href");
                            document
                                .querySelector(e)
                                .scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                        });
                    })();
            } catch (e) {
                t.e(e);
            } finally {
                t.f();
            }
        }),
        window.app.Scroll(),
        (window.app.Sliders = function () {
            new Swiper(".go-js-gallery-slider-main ", {
                slidesPerView: 1,
                spaceBetween: 20,
                thumbs: {
                    swiper: {
                        el: ".go-js-gallery-slider-preview",
                        slidesPerView: 2,
                        spaceBetween: 15,
                        threshold: 20,
                        touchRatio: 0.2,
                        allowTouchMove: !0,
                        slideToClickedSlide: !0,
                        mousewheel: {
                            senstivity: 1,
                            eventsTarget: ".gallery-preview",
                        },
                        scrollbar: {
                            el: ".gallery-preview__scrollbar",
                            draggable: !0,
                        },
                        breakpoints: {
                            768: { direction: "vertical", spaceBetween: 20 },
                            1360: { direction: "vertical", spaceBetween: 30 },
                        },
                    },
                },
            }),
                new Swiper(".go-js-gallery-slider-popup-1", {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    thumbs: {
                        swiper: {
                            el: ".go-js-gallery-slider-popup-2",
                            slidesPerView: 2,
                            spaceBetween: 15,
                            touchRatio: 0.2,
                            threshold: 20,
                            slideToClickedSlide: !0,
                            allowTouchMove: !0,
                            navigation: {
                                nextEl: ".gallery-preview__btn--next",
                                prevEl: ".gallery-preview__btn--prev",
                            },
                            breakpoints: {
                                768: { slidesPerView: 4, spaceBetween: 20 },
                            },
                        },
                    },
                });
        }),
        window.app.Sliders(),
        (window.app.Init = function () {
            GLightbox({});
        }),
        window.app.Init(),
        (window.app.Popup = function () {
            var a = document.querySelector("body"),
                e = document.querySelectorAll(".go-js-open-popup");
            e &&
                e.forEach(function (t) {
                    t.addEventListener("click", function (e) {
                        var i;
                        e.preventDefault(),
                            (i = t.dataset.popupName),
                            (e = document.querySelectorAll(".go-js-popup")) &&
                                e.forEach(function (t) {
                                    t.dataset.popupName == i &&
                                        (t.classList.add("body__popup--active"),
                                        a.classList.add("lock"));
                                    var e =
                                        document.querySelectorAll(
                                            ".go-js-close-popup"
                                        );
                                    e &&
                                        e.forEach(function (e) {
                                            e.addEventListener(
                                                "click",
                                                function (e) {
                                                    t.classList.contains(
                                                        "body__popup--active"
                                                    ) &&
                                                        (t.classList.remove(
                                                            "body__popup--active"
                                                        ),
                                                        a.classList.remove(
                                                            "lock"
                                                        ));
                                                }
                                            );
                                        });
                                });
                    });
                });
        }),
        window.app.Popup(),
        (window.app.Scrolltop = function () {
            window.onscroll = function () {
                200 < document.body.scrollTop ||
                200 < document.documentElement.scrollTop
                    ? (document.getElementById("scroll-top").style.display =
                          "block")
                    : (document.getElementById("scroll-top").style.display =
                          "none");
            };
        }),
        window.app.Scrolltop();
}); /* Start:"a:4:{s:4:"full";s:66:"/local/templates/interguest/assets/scripts/custom.js?1669985392998";s:6:"source";s:52:"/local/templates/interguest/assets/scripts/custom.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/* End */
document.addEventListener("DOMContentLoaded", function () {
    const changeSiteButton = document.querySelectorAll(
        ".js-site-version-redirect"
    );

    for (let el of changeSiteButton) {
        let siteLink = el.getAttribute("data-redirect");
        el.addEventListener("change", () => {
            redirectSite(siteLink);
        });
    }
});

function closeRoomDetail() {
    let popupContainer = document.getElementById("room_detail_popup");
    popupContainer.innerHTML = "";
    popupContainer.classList.remove("body__popup--active");
    let bodyLock = document.querySelector("body");
    bodyLock.classList.remove("lock");
}

function openBookingWidget() {
    let iframe = document.getElementsByTagName("iframe")[0];
    let widgetButton = iframe.contentWindow.document.querySelector(
        ".openReceptionButton"
    );
    widgetButton.click();
}

function redirectSite(link) {
    window.location.href = link;
}

function openPhotoDetail(event) {
    event.preventDefault();
    GLightbox({});
} /* /local/templates/interguest/assets/scripts/lazySizes.js?16738785717889*/ /* /local/templates/interguest/assets/scripts/script.min.js?1669980267204584*/ /* /local/templates/interguest/assets/scripts/custom.js?1669985392998*/
/* End */
