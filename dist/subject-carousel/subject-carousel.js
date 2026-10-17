var Sf = { exports: {} }, Nn = {};
var Bd;
function j0() {
  if (Bd) return Nn;
  Bd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.fragment");
  function S(o, C, H) {
    var N = null;
    if (H !== void 0 && (N = "" + H), C.key !== void 0 && (N = "" + C.key), "key" in C) {
      H = {};
      for (var w in C)
        w !== "key" && (H[w] = C[w]);
    } else H = C;
    return C = H.ref, {
      $$typeof: f,
      type: o,
      key: N,
      ref: C !== void 0 ? C : null,
      props: H
    };
  }
  return Nn.Fragment = E, Nn.jsx = S, Nn.jsxs = S, Nn;
}
var qd;
function G0() {
  return qd || (qd = 1, Sf.exports = j0()), Sf.exports;
}
var Ml = G0(), zf = { exports: {} }, $ = {};
var Yd;
function X0() {
  if (Yd) return $;
  Yd = 1;
  var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), E = /* @__PURE__ */ Symbol.for("react.portal"), S = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), H = /* @__PURE__ */ Symbol.for("react.consumer"), N = /* @__PURE__ */ Symbol.for("react.context"), w = /* @__PURE__ */ Symbol.for("react.forward_ref"), x = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), J = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), nl = Symbol.iterator;
  function yl(s) {
    return s === null || typeof s != "object" ? null : (s = nl && s[nl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Ul = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Q = Object.assign, Al = {};
  function Tl(s, z, D) {
    this.props = s, this.context = z, this.refs = Al, this.updater = D || Ul;
  }
  Tl.prototype.isReactComponent = {}, Tl.prototype.setState = function(s, z) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, z, "setState");
  }, Tl.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function ol() {
  }
  ol.prototype = Tl.prototype;
  function vl(s, z, D) {
    this.props = s, this.context = z, this.refs = Al, this.updater = D || Ul;
  }
  var _l = vl.prototype = new ol();
  _l.constructor = vl, Q(_l, Tl.prototype), _l.isPureReactComponent = !0;
  var gl = Array.isArray;
  function Cl() {
  }
  var k = { H: null, A: null, T: null, S: null }, R = Object.prototype.hasOwnProperty;
  function ul(s, z, D) {
    var B = D.ref;
    return {
      $$typeof: f,
      type: s,
      key: z,
      ref: B !== void 0 ? B : null,
      props: D
    };
  }
  function St(s, z) {
    return ul(s.type, z, s.props);
  }
  function kl(s) {
    return typeof s == "object" && s !== null && s.$$typeof === f;
  }
  function Ol(s) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(D) {
      return z[D];
    });
  }
  var Wl = /\/+/g;
  function jl(s, z) {
    return typeof s == "object" && s !== null && s.key != null ? Ol("" + s.key) : z.toString(36);
  }
  function Rl(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(Cl, Cl) : (s.status = "pending", s.then(
          function(z) {
            s.status === "pending" && (s.status = "fulfilled", s.value = z);
          },
          function(z) {
            s.status === "pending" && (s.status = "rejected", s.reason = z);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function p(s, z, D, B, X) {
    var L = typeof s;
    (L === "undefined" || L === "boolean") && (s = null);
    var I = !1;
    if (s === null) I = !0;
    else
      switch (L) {
        case "bigint":
        case "string":
        case "number":
          I = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case f:
            case E:
              I = !0;
              break;
            case J:
              return I = s._init, p(
                I(s._payload),
                z,
                D,
                B,
                X
              );
          }
      }
    if (I)
      return X = X(s), I = B === "" ? "." + jl(s, 0) : B, gl(X) ? (D = "", I != null && (D = I.replace(Wl, "$&/") + "/"), p(X, z, D, "", function(ie) {
        return ie;
      })) : X != null && (kl(X) && (X = St(
        X,
        D + (X.key == null || s && s.key === X.key ? "" : ("" + X.key).replace(
          Wl,
          "$&/"
        ) + "/") + I
      )), z.push(X)), 1;
    I = 0;
    var Gl = B === "" ? "." : B + ":";
    if (gl(s))
      for (var ll = 0; ll < s.length; ll++)
        B = s[ll], L = Gl + jl(B, ll), I += p(
          B,
          z,
          D,
          L,
          X
        );
    else if (ll = yl(s), typeof ll == "function")
      for (s = ll.call(s), ll = 0; !(B = s.next()).done; )
        B = B.value, L = Gl + jl(B, ll++), I += p(
          B,
          z,
          D,
          L,
          X
        );
    else if (L === "object") {
      if (typeof s.then == "function")
        return p(
          Rl(s),
          z,
          D,
          B,
          X
        );
      throw z = String(s), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return I;
  }
  function U(s, z, D) {
    if (s == null) return s;
    var B = [], X = 0;
    return p(s, B, "", "", function(L) {
      return z.call(D, L, X++);
    }), B;
  }
  function V(s) {
    if (s._status === -1) {
      var z = s._result;
      z = z(), z.then(
        function(D) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = D);
        },
        function(D) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = D);
        }
      ), s._status === -1 && (s._status = 0, s._result = z);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var O = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  }, A = {
    map: U,
    forEach: function(s, z, D) {
      U(
        s,
        function() {
          z.apply(this, arguments);
        },
        D
      );
    },
    count: function(s) {
      var z = 0;
      return U(s, function() {
        z++;
      }), z;
    },
    toArray: function(s) {
      return U(s, function(z) {
        return z;
      }) || [];
    },
    only: function(s) {
      if (!kl(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return $.Activity = q, $.Children = A, $.Component = Tl, $.Fragment = S, $.Profiler = C, $.PureComponent = vl, $.StrictMode = o, $.Suspense = x, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, $.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return k.H.useMemoCache(s);
    }
  }, $.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, $.cacheSignal = function() {
    return null;
  }, $.cloneElement = function(s, z, D) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var B = Q({}, s.props), X = s.key;
    if (z != null)
      for (L in z.key !== void 0 && (X = "" + z.key), z)
        !R.call(z, L) || L === "key" || L === "__self" || L === "__source" || L === "ref" && z.ref === void 0 || (B[L] = z[L]);
    var L = arguments.length - 2;
    if (L === 1) B.children = D;
    else if (1 < L) {
      for (var I = Array(L), Gl = 0; Gl < L; Gl++)
        I[Gl] = arguments[Gl + 2];
      B.children = I;
    }
    return ul(s.type, X, B);
  }, $.createContext = function(s) {
    return s = {
      $$typeof: N,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: H,
      _context: s
    }, s;
  }, $.createElement = function(s, z, D) {
    var B, X = {}, L = null;
    if (z != null)
      for (B in z.key !== void 0 && (L = "" + z.key), z)
        R.call(z, B) && B !== "key" && B !== "__self" && B !== "__source" && (X[B] = z[B]);
    var I = arguments.length - 2;
    if (I === 1) X.children = D;
    else if (1 < I) {
      for (var Gl = Array(I), ll = 0; ll < I; ll++)
        Gl[ll] = arguments[ll + 2];
      X.children = Gl;
    }
    if (s && s.defaultProps)
      for (B in I = s.defaultProps, I)
        X[B] === void 0 && (X[B] = I[B]);
    return ul(s, L, X);
  }, $.createRef = function() {
    return { current: null };
  }, $.forwardRef = function(s) {
    return { $$typeof: w, render: s };
  }, $.isValidElement = kl, $.lazy = function(s) {
    return {
      $$typeof: J,
      _payload: { _status: -1, _result: s },
      _init: V
    };
  }, $.memo = function(s, z) {
    return {
      $$typeof: g,
      type: s,
      compare: z === void 0 ? null : z
    };
  }, $.startTransition = function(s) {
    var z = k.T, D = {};
    k.T = D;
    try {
      var B = s(), X = k.S;
      X !== null && X(D, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(Cl, O);
    } catch (L) {
      O(L);
    } finally {
      z !== null && D.types !== null && (z.types = D.types), k.T = z;
    }
  }, $.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, $.use = function(s) {
    return k.H.use(s);
  }, $.useActionState = function(s, z, D) {
    return k.H.useActionState(s, z, D);
  }, $.useCallback = function(s, z) {
    return k.H.useCallback(s, z);
  }, $.useContext = function(s) {
    return k.H.useContext(s);
  }, $.useDebugValue = function() {
  }, $.useDeferredValue = function(s, z) {
    return k.H.useDeferredValue(s, z);
  }, $.useEffect = function(s, z) {
    return k.H.useEffect(s, z);
  }, $.useEffectEvent = function(s) {
    return k.H.useEffectEvent(s);
  }, $.useId = function() {
    return k.H.useId();
  }, $.useImperativeHandle = function(s, z, D) {
    return k.H.useImperativeHandle(s, z, D);
  }, $.useInsertionEffect = function(s, z) {
    return k.H.useInsertionEffect(s, z);
  }, $.useLayoutEffect = function(s, z) {
    return k.H.useLayoutEffect(s, z);
  }, $.useMemo = function(s, z) {
    return k.H.useMemo(s, z);
  }, $.useOptimistic = function(s, z) {
    return k.H.useOptimistic(s, z);
  }, $.useReducer = function(s, z, D) {
    return k.H.useReducer(s, z, D);
  }, $.useRef = function(s) {
    return k.H.useRef(s);
  }, $.useState = function(s) {
    return k.H.useState(s);
  }, $.useSyncExternalStore = function(s, z, D) {
    return k.H.useSyncExternalStore(
      s,
      z,
      D
    );
  }, $.useTransition = function() {
    return k.H.useTransition();
  }, $.version = "19.2.6", $;
}
var jd;
function Uf() {
  return jd || (jd = 1, zf.exports = X0()), zf.exports;
}
var zl = Uf(), Af = { exports: {} }, Hn = {}, Tf = { exports: {} }, Ef = {};
var Gd;
function Q0() {
  return Gd || (Gd = 1, (function(f) {
    function E(p, U) {
      var V = p.length;
      p.push(U);
      l: for (; 0 < V; ) {
        var O = V - 1 >>> 1, A = p[O];
        if (0 < C(A, U))
          p[O] = U, p[V] = A, V = O;
        else break l;
      }
    }
    function S(p) {
      return p.length === 0 ? null : p[0];
    }
    function o(p) {
      if (p.length === 0) return null;
      var U = p[0], V = p.pop();
      if (V !== U) {
        p[0] = V;
        l: for (var O = 0, A = p.length, s = A >>> 1; O < s; ) {
          var z = 2 * (O + 1) - 1, D = p[z], B = z + 1, X = p[B];
          if (0 > C(D, V))
            B < A && 0 > C(X, D) ? (p[O] = X, p[B] = V, O = B) : (p[O] = D, p[z] = V, O = z);
          else if (B < A && 0 > C(X, V))
            p[O] = X, p[B] = V, O = B;
          else break l;
        }
      }
      return U;
    }
    function C(p, U) {
      var V = p.sortIndex - U.sortIndex;
      return V !== 0 ? V : p.id - U.id;
    }
    if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var H = performance;
      f.unstable_now = function() {
        return H.now();
      };
    } else {
      var N = Date, w = N.now();
      f.unstable_now = function() {
        return N.now() - w;
      };
    }
    var x = [], g = [], J = 1, q = null, nl = 3, yl = !1, Ul = !1, Q = !1, Al = !1, Tl = typeof setTimeout == "function" ? setTimeout : null, ol = typeof clearTimeout == "function" ? clearTimeout : null, vl = typeof setImmediate < "u" ? setImmediate : null;
    function _l(p) {
      for (var U = S(g); U !== null; ) {
        if (U.callback === null) o(g);
        else if (U.startTime <= p)
          o(g), U.sortIndex = U.expirationTime, E(x, U);
        else break;
        U = S(g);
      }
    }
    function gl(p) {
      if (Q = !1, _l(p), !Ul)
        if (S(x) !== null)
          Ul = !0, Cl || (Cl = !0, Ol());
        else {
          var U = S(g);
          U !== null && Rl(gl, U.startTime - p);
        }
    }
    var Cl = !1, k = -1, R = 5, ul = -1;
    function St() {
      return Al ? !0 : !(f.unstable_now() - ul < R);
    }
    function kl() {
      if (Al = !1, Cl) {
        var p = f.unstable_now();
        ul = p;
        var U = !0;
        try {
          l: {
            Ul = !1, Q && (Q = !1, ol(k), k = -1), yl = !0;
            var V = nl;
            try {
              t: {
                for (_l(p), q = S(x); q !== null && !(q.expirationTime > p && St()); ) {
                  var O = q.callback;
                  if (typeof O == "function") {
                    q.callback = null, nl = q.priorityLevel;
                    var A = O(
                      q.expirationTime <= p
                    );
                    if (p = f.unstable_now(), typeof A == "function") {
                      q.callback = A, _l(p), U = !0;
                      break t;
                    }
                    q === S(x) && o(x), _l(p);
                  } else o(x);
                  q = S(x);
                }
                if (q !== null) U = !0;
                else {
                  var s = S(g);
                  s !== null && Rl(
                    gl,
                    s.startTime - p
                  ), U = !1;
                }
              }
              break l;
            } finally {
              q = null, nl = V, yl = !1;
            }
            U = void 0;
          }
        } finally {
          U ? Ol() : Cl = !1;
        }
      }
    }
    var Ol;
    if (typeof vl == "function")
      Ol = function() {
        vl(kl);
      };
    else if (typeof MessageChannel < "u") {
      var Wl = new MessageChannel(), jl = Wl.port2;
      Wl.port1.onmessage = kl, Ol = function() {
        jl.postMessage(null);
      };
    } else
      Ol = function() {
        Tl(kl, 0);
      };
    function Rl(p, U) {
      k = Tl(function() {
        p(f.unstable_now());
      }, U);
    }
    f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(p) {
      p.callback = null;
    }, f.unstable_forceFrameRate = function(p) {
      0 > p || 125 < p ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : R = 0 < p ? Math.floor(1e3 / p) : 5;
    }, f.unstable_getCurrentPriorityLevel = function() {
      return nl;
    }, f.unstable_next = function(p) {
      switch (nl) {
        case 1:
        case 2:
        case 3:
          var U = 3;
          break;
        default:
          U = nl;
      }
      var V = nl;
      nl = U;
      try {
        return p();
      } finally {
        nl = V;
      }
    }, f.unstable_requestPaint = function() {
      Al = !0;
    }, f.unstable_runWithPriority = function(p, U) {
      switch (p) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          p = 3;
      }
      var V = nl;
      nl = p;
      try {
        return U();
      } finally {
        nl = V;
      }
    }, f.unstable_scheduleCallback = function(p, U, V) {
      var O = f.unstable_now();
      switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? O + V : O) : V = O, p) {
        case 1:
          var A = -1;
          break;
        case 2:
          A = 250;
          break;
        case 5:
          A = 1073741823;
          break;
        case 4:
          A = 1e4;
          break;
        default:
          A = 5e3;
      }
      return A = V + A, p = {
        id: J++,
        callback: U,
        priorityLevel: p,
        startTime: V,
        expirationTime: A,
        sortIndex: -1
      }, V > O ? (p.sortIndex = V, E(g, p), S(x) === null && p === S(g) && (Q ? (ol(k), k = -1) : Q = !0, Rl(gl, V - O))) : (p.sortIndex = A, E(x, p), Ul || yl || (Ul = !0, Cl || (Cl = !0, Ol()))), p;
    }, f.unstable_shouldYield = St, f.unstable_wrapCallback = function(p) {
      var U = nl;
      return function() {
        var V = nl;
        nl = U;
        try {
          return p.apply(this, arguments);
        } finally {
          nl = V;
        }
      };
    };
  })(Ef)), Ef;
}
var Xd;
function Z0() {
  return Xd || (Xd = 1, Tf.exports = Q0()), Tf.exports;
}
var Mf = { exports: {} }, tt = {};
var Qd;
function L0() {
  if (Qd) return tt;
  Qd = 1;
  var f = Uf();
  function E(x) {
    var g = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var J = 2; J < arguments.length; J++)
        g += "&args[]=" + encodeURIComponent(arguments[J]);
    }
    return "Minified React error #" + x + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function S() {
  }
  var o = {
    d: {
      f: S,
      r: function() {
        throw Error(E(522));
      },
      D: S,
      C: S,
      L: S,
      m: S,
      X: S,
      S,
      M: S
    },
    p: 0,
    findDOMNode: null
  }, C = /* @__PURE__ */ Symbol.for("react.portal");
  function H(x, g, J) {
    var q = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: C,
      key: q == null ? null : "" + q,
      children: x,
      containerInfo: g,
      implementation: J
    };
  }
  var N = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(x, g) {
    if (x === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, tt.createPortal = function(x, g) {
    var J = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(E(299));
    return H(x, g, null, J);
  }, tt.flushSync = function(x) {
    var g = N.T, J = o.p;
    try {
      if (N.T = null, o.p = 2, x) return x();
    } finally {
      N.T = g, o.p = J, o.d.f();
    }
  }, tt.preconnect = function(x, g) {
    typeof x == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, o.d.C(x, g));
  }, tt.prefetchDNS = function(x) {
    typeof x == "string" && o.d.D(x);
  }, tt.preinit = function(x, g) {
    if (typeof x == "string" && g && typeof g.as == "string") {
      var J = g.as, q = w(J, g.crossOrigin), nl = typeof g.integrity == "string" ? g.integrity : void 0, yl = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      J === "style" ? o.d.S(
        x,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: q,
          integrity: nl,
          fetchPriority: yl
        }
      ) : J === "script" && o.d.X(x, {
        crossOrigin: q,
        integrity: nl,
        fetchPriority: yl,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, tt.preinitModule = function(x, g) {
    if (typeof x == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var J = w(
            g.as,
            g.crossOrigin
          );
          o.d.M(x, {
            crossOrigin: J,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && o.d.M(x);
  }, tt.preload = function(x, g) {
    if (typeof x == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var J = g.as, q = w(J, g.crossOrigin);
      o.d.L(x, J, {
        crossOrigin: q,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, tt.preloadModule = function(x, g) {
    if (typeof x == "string")
      if (g) {
        var J = w(g.as, g.crossOrigin);
        o.d.m(x, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: J,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else o.d.m(x);
  }, tt.requestFormReset = function(x) {
    o.d.r(x);
  }, tt.unstable_batchedUpdates = function(x, g) {
    return x(g);
  }, tt.useFormState = function(x, g, J) {
    return N.H.useFormState(x, g, J);
  }, tt.useFormStatus = function() {
    return N.H.useHostTransitionStatus();
  }, tt.version = "19.2.6", tt;
}
var Zd;
function V0() {
  if (Zd) return Mf.exports;
  Zd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (E) {
        console.error(E);
      }
  }
  return f(), Mf.exports = L0(), Mf.exports;
}
var Ld;
function w0() {
  if (Ld) return Hn;
  Ld = 1;
  var f = Z0(), E = Uf(), S = V0();
  function o(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function C(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function H(l) {
    var t = l, e = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (e = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? e : null;
  }
  function N(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function w(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function x(l) {
    if (H(l) !== l)
      throw Error(o(188));
  }
  function g(l) {
    var t = l.alternate;
    if (!t) {
      if (t = H(l), t === null) throw Error(o(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var n = e.return;
      if (n === null) break;
      var u = n.alternate;
      if (u === null) {
        if (a = n.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (n.child === u.child) {
        for (u = n.child; u; ) {
          if (u === e) return x(n), l;
          if (u === a) return x(n), t;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (e.return !== a.return) e = n, a = u;
      else {
        for (var i = !1, c = n.child; c; ) {
          if (c === e) {
            i = !0, e = n, a = u;
            break;
          }
          if (c === a) {
            i = !0, a = n, e = u;
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = u.child; c; ) {
            if (c === e) {
              i = !0, e = u, a = n;
              break;
            }
            if (c === a) {
              i = !0, a = u, e = n;
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(o(189));
        }
      }
      if (e.alternate !== a) throw Error(o(190));
    }
    if (e.tag !== 3) throw Error(o(188));
    return e.stateNode.current === e ? l : t;
  }
  function J(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = J(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var q = Object.assign, nl = /* @__PURE__ */ Symbol.for("react.element"), yl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ul = /* @__PURE__ */ Symbol.for("react.portal"), Q = /* @__PURE__ */ Symbol.for("react.fragment"), Al = /* @__PURE__ */ Symbol.for("react.strict_mode"), Tl = /* @__PURE__ */ Symbol.for("react.profiler"), ol = /* @__PURE__ */ Symbol.for("react.consumer"), vl = /* @__PURE__ */ Symbol.for("react.context"), _l = /* @__PURE__ */ Symbol.for("react.forward_ref"), gl = /* @__PURE__ */ Symbol.for("react.suspense"), Cl = /* @__PURE__ */ Symbol.for("react.suspense_list"), k = /* @__PURE__ */ Symbol.for("react.memo"), R = /* @__PURE__ */ Symbol.for("react.lazy"), ul = /* @__PURE__ */ Symbol.for("react.activity"), St = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), kl = Symbol.iterator;
  function Ol(l) {
    return l === null || typeof l != "object" ? null : (l = kl && l[kl] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Wl = /* @__PURE__ */ Symbol.for("react.client.reference");
  function jl(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Wl ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Q:
        return "Fragment";
      case Tl:
        return "Profiler";
      case Al:
        return "StrictMode";
      case gl:
        return "Suspense";
      case Cl:
        return "SuspenseList";
      case ul:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Ul:
          return "Portal";
        case vl:
          return l.displayName || "Context";
        case ol:
          return (l._context.displayName || "Context") + ".Consumer";
        case _l:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case k:
          return t = l.displayName || null, t !== null ? t : jl(l.type) || "Memo";
        case R:
          t = l._payload, l = l._init;
          try {
            return jl(l(t));
          } catch {
          }
      }
    return null;
  }
  var Rl = Array.isArray, p = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = S.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, O = [], A = -1;
  function s(l) {
    return { current: l };
  }
  function z(l) {
    0 > A || (l.current = O[A], O[A] = null, A--);
  }
  function D(l, t) {
    A++, O[A] = l.current, l.current = t;
  }
  var B = s(null), X = s(null), L = s(null), I = s(null);
  function Gl(l, t) {
    switch (D(L, t), D(X, l), D(B, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? nd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = nd(t), l = ud(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    z(B), D(B, l);
  }
  function ll() {
    z(B), z(X), z(L);
  }
  function ie(l) {
    l.memoizedState !== null && D(I, l);
    var t = B.current, e = ud(t, l.type);
    t !== e && (D(X, l), D(B, e));
  }
  function Xt(l) {
    X.current === l && (z(B), z(X)), I.current === l && (z(I), Dn._currentValue = V);
  }
  var ce, ta;
  function zt(l) {
    if (ce === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        ce = t && t[1] || "", ta = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ce + l + ta;
  }
  var ei = !1;
  function ai(l, t) {
    if (!l || ei) return "";
    ei = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var _ = function() {
                throw Error();
              };
              if (Object.defineProperty(_.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(_, []);
                } catch (b) {
                  var v = b;
                }
                Reflect.construct(l, [], _);
              } else {
                try {
                  _.call();
                } catch (b) {
                  v = b;
                }
                l.call(_.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (b) {
                v = b;
              }
              (_ = l()) && typeof _.catch == "function" && _.catch(function() {
              });
            }
          } catch (b) {
            if (b && v && typeof b.stack == "string")
              return [b.stack, v.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n && n.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
      if (i && c) {
        var r = i.split(`
`), y = c.split(`
`);
        for (n = a = 0; a < r.length && !r[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; n < y.length && !y[n].includes(
          "DetermineComponentFrameRoot"
        ); )
          n++;
        if (a === r.length || n === y.length)
          for (a = r.length - 1, n = y.length - 1; 1 <= a && 0 <= n && r[a] !== y[n]; )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (r[a] !== y[n]) {
            if (a !== 1 || n !== 1)
              do
                if (a--, n--, 0 > n || r[a] !== y[n]) {
                  var T = `
` + r[a].replace(" at new ", " at ");
                  return l.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", l.displayName)), T;
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      ei = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? zt(e) : "";
  }
  function ym(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return zt(l.type);
      case 16:
        return zt("Lazy");
      case 13:
        return l.child !== t && t !== null ? zt("Suspense Fallback") : zt("Suspense");
      case 19:
        return zt("SuspenseList");
      case 0:
      case 15:
        return ai(l.type, !1);
      case 11:
        return ai(l.type.render, !1);
      case 1:
        return ai(l.type, !0);
      case 31:
        return zt("Activity");
      default:
        return "";
    }
  }
  function Hf(l) {
    try {
      var t = "", e = null;
      do
        t += ym(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var ni = Object.prototype.hasOwnProperty, ui = f.unstable_scheduleCallback, ii = f.unstable_cancelCallback, vm = f.unstable_shouldYield, gm = f.unstable_requestPaint, st = f.unstable_now, bm = f.unstable_getCurrentPriorityLevel, Bf = f.unstable_ImmediatePriority, qf = f.unstable_UserBlockingPriority, qn = f.unstable_NormalPriority, pm = f.unstable_LowPriority, Yf = f.unstable_IdlePriority, Sm = f.log, zm = f.unstable_setDisableYieldValue, Xa = null, rt = null;
  function fe(l) {
    if (typeof Sm == "function" && zm(l), rt && typeof rt.setStrictMode == "function")
      try {
        rt.setStrictMode(Xa, l);
      } catch {
      }
  }
  var dt = Math.clz32 ? Math.clz32 : Em, Am = Math.log, Tm = Math.LN2;
  function Em(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (Am(l) / Tm | 0) | 0;
  }
  var Yn = 256, jn = 262144, Gn = 4194304;
  function Be(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Xn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var n = 0, u = l.suspendedLanes, i = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~u, a !== 0 ? n = Be(a) : (i &= c, i !== 0 ? n = Be(i) : e || (e = c & ~l, e !== 0 && (n = Be(e))))) : (c = a & ~u, c !== 0 ? n = Be(c) : i !== 0 ? n = Be(i) : e || (e = a & ~l, e !== 0 && (n = Be(e)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, e = t & -t, u >= e || u === 32 && (e & 4194048) !== 0) ? t : n;
  }
  function Qa(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Mm(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function jf() {
    var l = Gn;
    return Gn <<= 1, (Gn & 62914560) === 0 && (Gn = 4194304), l;
  }
  function ci(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function Za(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function _m(l, t, e, a, n, u) {
    var i = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var c = l.entanglements, r = l.expirationTimes, y = l.hiddenUpdates;
    for (e = i & ~e; 0 < e; ) {
      var T = 31 - dt(e), _ = 1 << T;
      c[T] = 0, r[T] = -1;
      var v = y[T];
      if (v !== null)
        for (y[T] = null, T = 0; T < v.length; T++) {
          var b = v[T];
          b !== null && (b.lane &= -536870913);
        }
      e &= ~_;
    }
    a !== 0 && Gf(l, a, 0), u !== 0 && n === 0 && l.tag !== 0 && (l.suspendedLanes |= u & ~(i & ~t));
  }
  function Gf(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - dt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Xf(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - dt(e), n = 1 << a;
      n & t | l[a] & t && (l[a] |= t), e &= ~n;
    }
  }
  function Qf(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : fi(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function fi(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function oi(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Zf() {
    var l = U.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : xd(l.type));
  }
  function Lf(l, t) {
    var e = U.p;
    try {
      return U.p = l, t();
    } finally {
      U.p = e;
    }
  }
  var oe = Math.random().toString(36).slice(2), $l = "__reactFiber$" + oe, at = "__reactProps$" + oe, ea = "__reactContainer$" + oe, si = "__reactEvents$" + oe, Om = "__reactListeners$" + oe, xm = "__reactHandles$" + oe, Vf = "__reactResources$" + oe, La = "__reactMarker$" + oe;
  function ri(l) {
    delete l[$l], delete l[at], delete l[si], delete l[Om], delete l[xm];
  }
  function aa(l) {
    var t = l[$l];
    if (t) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[ea] || e[$l]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = dd(l); l !== null; ) {
            if (e = l[$l]) return e;
            l = dd(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function na(l) {
    if (l = l[$l] || l[ea]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Va(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(o(33));
  }
  function ua(l) {
    var t = l[Vf];
    return t || (t = l[Vf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Kl(l) {
    l[La] = !0;
  }
  var wf = /* @__PURE__ */ new Set(), Kf = {};
  function qe(l, t) {
    ia(l, t), ia(l + "Capture", t);
  }
  function ia(l, t) {
    for (Kf[l] = t, l = 0; l < t.length; l++)
      wf.add(t[l]);
  }
  var Dm = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Jf = {}, kf = {};
  function Um(l) {
    return ni.call(kf, l) ? !0 : ni.call(Jf, l) ? !1 : Dm.test(l) ? kf[l] = !0 : (Jf[l] = !0, !1);
  }
  function Qn(l, t, e) {
    if (Um(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + e);
      }
  }
  function Zn(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + e);
    }
  }
  function Qt(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, "" + a);
    }
  }
  function At(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Wf(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Cm(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var n = a.get, u = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return n.call(this);
        },
        set: function(i) {
          e = "" + i, u.call(this, i);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(i) {
          e = "" + i;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function di(l) {
    if (!l._valueTracker) {
      var t = Wf(l) ? "checked" : "value";
      l._valueTracker = Cm(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function $f(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Wf(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  function Ln(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Rm = /[\n"\\]/g;
  function Tt(l) {
    return l.replace(
      Rm,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function mi(l, t, e, a, n, u, i, c) {
    l.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.type = i : l.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + At(t)) : l.value !== "" + At(t) && (l.value = "" + At(t)) : i !== "submit" && i !== "reset" || l.removeAttribute("value"), t != null ? hi(l, i, At(t)) : e != null ? hi(l, i, At(e)) : a != null && l.removeAttribute("value"), n == null && u != null && (l.defaultChecked = !!u), n != null && (l.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + At(c) : l.removeAttribute("name");
  }
  function Ff(l, t, e, a, n, u, i, c) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (l.type = u), t != null || e != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        di(l);
        return;
      }
      e = e != null ? "" + At(e) : "", t = t != null ? "" + At(t) : e, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (l.name = i), di(l);
  }
  function hi(l, t, e) {
    t === "number" && Ln(l.ownerDocument) === l || l.defaultValue === "" + e || (l.defaultValue = "" + e);
  }
  function ca(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var n = 0; n < e.length; n++)
        t["$" + e[n]] = !0;
      for (e = 0; e < l.length; e++)
        n = t.hasOwnProperty("$" + l[e].value), l[e].selected !== n && (l[e].selected = n), n && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + At(e), t = null, n = 0; n < l.length; n++) {
        if (l[n].value === e) {
          l[n].selected = !0, a && (l[n].defaultSelected = !0);
          return;
        }
        t !== null || l[n].disabled || (t = l[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function If(l, t, e) {
    if (t != null && (t = "" + At(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + At(e) : "";
  }
  function Pf(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(o(92));
        if (Rl(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = At(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), di(l);
  }
  function fa(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Nm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function lo(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Nm.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function to(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var n in t)
        a = t[n], t.hasOwnProperty(n) && e[n] !== a && lo(l, n, a);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && lo(l, u, t[u]);
  }
  function yi(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Hm = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Bm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vn(l) {
    return Bm.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Zt() {
  }
  var vi = null;
  function gi(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var oa = null, sa = null;
  function eo(l) {
    var t = na(l);
    if (t && (l = t.stateNode)) {
      var e = l[at] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (mi(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Tt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var n = a[at] || null;
                if (!n) throw Error(o(90));
                mi(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && $f(a);
          }
          break l;
        case "textarea":
          If(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && ca(l, !!e.multiple, t, !1);
      }
    }
  }
  var bi = !1;
  function ao(l, t, e) {
    if (bi) return l(t, e);
    bi = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (bi = !1, (oa !== null || sa !== null) && (Cu(), oa && (t = oa, l = sa, sa = oa = null, eo(t), l)))
        for (t = 0; t < l.length; t++) eo(l[t]);
    }
  }
  function wa(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[at] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        o(231, t, typeof e)
      );
    return e;
  }
  var Lt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pi = !1;
  if (Lt)
    try {
      var Ka = {};
      Object.defineProperty(Ka, "passive", {
        get: function() {
          pi = !0;
        }
      }), window.addEventListener("test", Ka, Ka), window.removeEventListener("test", Ka, Ka);
    } catch {
      pi = !1;
    }
  var se = null, Si = null, wn = null;
  function no() {
    if (wn) return wn;
    var l, t = Si, e = t.length, a, n = "value" in se ? se.value : se.textContent, u = n.length;
    for (l = 0; l < e && t[l] === n[l]; l++) ;
    var i = e - l;
    for (a = 1; a <= i && t[e - a] === n[u - a]; a++) ;
    return wn = n.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Kn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function Jn() {
    return !0;
  }
  function uo() {
    return !1;
  }
  function nt(l) {
    function t(e, a, n, u, i) {
      this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (e = l[c], this[c] = e ? e(u) : u[c]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Jn : uo, this.isPropagationStopped = uo, this;
    }
    return q(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = Jn);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = Jn);
      },
      persist: function() {
      },
      isPersistent: Jn
    }), t;
  }
  var Ye = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, kn = nt(Ye), Ja = q({}, Ye, { view: 0, detail: 0 }), qm = nt(Ja), zi, Ai, ka, Wn = q({}, Ja, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ei,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== ka && (ka && l.type === "mousemove" ? (zi = l.screenX - ka.screenX, Ai = l.screenY - ka.screenY) : Ai = zi = 0, ka = l), zi);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : Ai;
    }
  }), io = nt(Wn), Ym = q({}, Wn, { dataTransfer: 0 }), jm = nt(Ym), Gm = q({}, Ja, { relatedTarget: 0 }), Ti = nt(Gm), Xm = q({}, Ye, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qm = nt(Xm), Zm = q({}, Ye, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Lm = nt(Zm), Vm = q({}, Ye, { data: 0 }), co = nt(Vm), wm = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Km = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Jm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function km(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Jm[l]) ? !!t[l] : !1;
  }
  function Ei() {
    return km;
  }
  var Wm = q({}, Ja, {
    key: function(l) {
      if (l.key) {
        var t = wm[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Kn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Km[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ei,
    charCode: function(l) {
      return l.type === "keypress" ? Kn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Kn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), $m = nt(Wm), Fm = q({}, Wn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), fo = nt(Fm), Im = q({}, Ja, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ei
  }), Pm = nt(Im), lh = q({}, Ye, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), th = nt(lh), eh = q({}, Wn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ah = nt(eh), nh = q({}, Ye, {
    newState: 0,
    oldState: 0
  }), uh = nt(nh), ih = [9, 13, 27, 32], Mi = Lt && "CompositionEvent" in window, Wa = null;
  Lt && "documentMode" in document && (Wa = document.documentMode);
  var ch = Lt && "TextEvent" in window && !Wa, oo = Lt && (!Mi || Wa && 8 < Wa && 11 >= Wa), so = " ", ro = !1;
  function mo(l, t) {
    switch (l) {
      case "keyup":
        return ih.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ho(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ra = !1;
  function fh(l, t) {
    switch (l) {
      case "compositionend":
        return ho(t);
      case "keypress":
        return t.which !== 32 ? null : (ro = !0, so);
      case "textInput":
        return l = t.data, l === so && ro ? null : l;
      default:
        return null;
    }
  }
  function oh(l, t) {
    if (ra)
      return l === "compositionend" || !Mi && mo(l, t) ? (l = no(), wn = Si = se = null, ra = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return oo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sh = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function yo(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!sh[l.type] : t === "textarea";
  }
  function vo(l, t, e, a) {
    oa ? sa ? sa.push(a) : sa = [a] : oa = a, t = ju(t, "onChange"), 0 < t.length && (e = new kn(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var $a = null, Fa = null;
  function rh(l) {
    Ir(l, 0);
  }
  function $n(l) {
    var t = Va(l);
    if ($f(t)) return l;
  }
  function go(l, t) {
    if (l === "change") return t;
  }
  var bo = !1;
  if (Lt) {
    var _i;
    if (Lt) {
      var Oi = "oninput" in document;
      if (!Oi) {
        var po = document.createElement("div");
        po.setAttribute("oninput", "return;"), Oi = typeof po.oninput == "function";
      }
      _i = Oi;
    } else _i = !1;
    bo = _i && (!document.documentMode || 9 < document.documentMode);
  }
  function So() {
    $a && ($a.detachEvent("onpropertychange", zo), Fa = $a = null);
  }
  function zo(l) {
    if (l.propertyName === "value" && $n(Fa)) {
      var t = [];
      vo(
        t,
        Fa,
        l,
        gi(l)
      ), ao(rh, t);
    }
  }
  function dh(l, t, e) {
    l === "focusin" ? (So(), $a = t, Fa = e, $a.attachEvent("onpropertychange", zo)) : l === "focusout" && So();
  }
  function mh(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return $n(Fa);
  }
  function hh(l, t) {
    if (l === "click") return $n(t);
  }
  function yh(l, t) {
    if (l === "input" || l === "change")
      return $n(t);
  }
  function vh(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var mt = typeof Object.is == "function" ? Object.is : vh;
  function Ia(l, t) {
    if (mt(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var n = e[a];
      if (!ni.call(t, n) || !mt(l[n], t[n]))
        return !1;
    }
    return !0;
  }
  function Ao(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function To(l, t) {
    var e = Ao(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = Ao(e);
    }
  }
  function Eo(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Eo(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Mo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = Ln(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = Ln(l.document);
    }
    return t;
  }
  function xi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var gh = Lt && "documentMode" in document && 11 >= document.documentMode, da = null, Di = null, Pa = null, Ui = !1;
  function _o(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    Ui || da == null || da !== Ln(a) || (a = da, "selectionStart" in a && xi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pa && Ia(Pa, a) || (Pa = a, a = ju(Di, "onSelect"), 0 < a.length && (t = new kn(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = da)));
  }
  function je(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var ma = {
    animationend: je("Animation", "AnimationEnd"),
    animationiteration: je("Animation", "AnimationIteration"),
    animationstart: je("Animation", "AnimationStart"),
    transitionrun: je("Transition", "TransitionRun"),
    transitionstart: je("Transition", "TransitionStart"),
    transitioncancel: je("Transition", "TransitionCancel"),
    transitionend: je("Transition", "TransitionEnd")
  }, Ci = {}, Oo = {};
  Lt && (Oo = document.createElement("div").style, "AnimationEvent" in window || (delete ma.animationend.animation, delete ma.animationiteration.animation, delete ma.animationstart.animation), "TransitionEvent" in window || delete ma.transitionend.transition);
  function Ge(l) {
    if (Ci[l]) return Ci[l];
    if (!ma[l]) return l;
    var t = ma[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in Oo)
        return Ci[l] = t[e];
    return l;
  }
  var xo = Ge("animationend"), Do = Ge("animationiteration"), Uo = Ge("animationstart"), bh = Ge("transitionrun"), ph = Ge("transitionstart"), Sh = Ge("transitioncancel"), Co = Ge("transitionend"), Ro = /* @__PURE__ */ new Map(), Ri = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ri.push("scrollEnd");
  function Rt(l, t) {
    Ro.set(l, t), qe(t, [l]);
  }
  var Fn = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Et = [], ha = 0, Ni = 0;
  function In() {
    for (var l = ha, t = Ni = ha = 0; t < l; ) {
      var e = Et[t];
      Et[t++] = null;
      var a = Et[t];
      Et[t++] = null;
      var n = Et[t];
      Et[t++] = null;
      var u = Et[t];
      if (Et[t++] = null, a !== null && n !== null) {
        var i = a.pending;
        i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
      }
      u !== 0 && No(e, n, u);
    }
  }
  function Pn(l, t, e, a) {
    Et[ha++] = l, Et[ha++] = t, Et[ha++] = e, Et[ha++] = a, Ni |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Hi(l, t, e, a) {
    return Pn(l, t, e, a), lu(l);
  }
  function Xe(l, t) {
    return Pn(l, null, null, t), lu(l);
  }
  function No(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var n = !1, u = l.return; u !== null; )
      u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (l = u.stateNode, l === null || l._visibility & 1 || (n = !0)), l = u, u = u.return;
    return l.tag === 3 ? (u = l.stateNode, n && t !== null && (n = 31 - dt(e), l = u.hiddenUpdates, a = l[n], a === null ? l[n] = [t] : a.push(t), t.lane = e | 536870912), u) : null;
  }
  function lu(l) {
    if (50 < An)
      throw An = 0, Lc = null, Error(o(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ya = {};
  function zh(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ht(l, t, e, a) {
    return new zh(l, t, e, a);
  }
  function Bi(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function Vt(l, t) {
    var e = l.alternate;
    return e === null ? (e = ht(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 65011712, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function Ho(l, t) {
    l.flags &= 65011714;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function tu(l, t, e, a, n, u) {
    var i = 0;
    if (a = l, typeof l == "function") Bi(l) && (i = 1);
    else if (typeof l == "string")
      i = _0(
        l,
        e,
        B.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case ul:
          return l = ht(31, e, t, n), l.elementType = ul, l.lanes = u, l;
        case Q:
          return Qe(e.children, n, u, t);
        case Al:
          i = 8, n |= 24;
          break;
        case Tl:
          return l = ht(12, e, t, n | 2), l.elementType = Tl, l.lanes = u, l;
        case gl:
          return l = ht(13, e, t, n), l.elementType = gl, l.lanes = u, l;
        case Cl:
          return l = ht(19, e, t, n), l.elementType = Cl, l.lanes = u, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case vl:
                i = 10;
                break l;
              case ol:
                i = 9;
                break l;
              case _l:
                i = 11;
                break l;
              case k:
                i = 14;
                break l;
              case R:
                i = 16, a = null;
                break l;
            }
          i = 29, e = Error(
            o(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ht(i, e, t, n), t.elementType = l, t.type = a, t.lanes = u, t;
  }
  function Qe(l, t, e, a) {
    return l = ht(7, l, a, t), l.lanes = e, l;
  }
  function qi(l, t, e) {
    return l = ht(6, l, null, t), l.lanes = e, l;
  }
  function Bo(l) {
    var t = ht(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Yi(l, t, e) {
    return t = ht(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var qo = /* @__PURE__ */ new WeakMap();
  function Mt(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = qo.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Hf(t)
      }, qo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Hf(t)
    };
  }
  var va = [], ga = 0, eu = null, ln = 0, _t = [], Ot = 0, re = null, Bt = 1, qt = "";
  function wt(l, t) {
    va[ga++] = ln, va[ga++] = eu, eu = l, ln = t;
  }
  function Yo(l, t, e) {
    _t[Ot++] = Bt, _t[Ot++] = qt, _t[Ot++] = re, re = l;
    var a = Bt;
    l = qt;
    var n = 32 - dt(a) - 1;
    a &= ~(1 << n), e += 1;
    var u = 32 - dt(t) + n;
    if (30 < u) {
      var i = n - n % 5;
      u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Bt = 1 << 32 - dt(t) + n | e << n | a, qt = u + l;
    } else
      Bt = 1 << u | e << n | a, qt = l;
  }
  function ji(l) {
    l.return !== null && (wt(l, 1), Yo(l, 1, 0));
  }
  function Gi(l) {
    for (; l === eu; )
      eu = va[--ga], va[ga] = null, ln = va[--ga], va[ga] = null;
    for (; l === re; )
      re = _t[--Ot], _t[Ot] = null, qt = _t[--Ot], _t[Ot] = null, Bt = _t[--Ot], _t[Ot] = null;
  }
  function jo(l, t) {
    _t[Ot++] = Bt, _t[Ot++] = qt, _t[Ot++] = re, Bt = t.id, qt = t.overflow, re = l;
  }
  var Fl = null, xl = null, fl = !1, de = null, xt = !1, Xi = Error(o(519));
  function me(l) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw tn(Mt(t, l)), Xi;
  }
  function Go(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[$l] = l, t[at] = a, e) {
      case "dialog":
        al("cancel", t), al("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        al("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < En.length; e++)
          al(En[e], t);
        break;
      case "source":
        al("error", t);
        break;
      case "img":
      case "image":
      case "link":
        al("error", t), al("load", t);
        break;
      case "details":
        al("toggle", t);
        break;
      case "input":
        al("invalid", t), Ff(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        al("invalid", t);
        break;
      case "textarea":
        al("invalid", t), Pf(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || ed(t.textContent, e) ? (a.popover != null && (al("beforetoggle", t), al("toggle", t)), a.onScroll != null && al("scroll", t), a.onScrollEnd != null && al("scrollend", t), a.onClick != null && (t.onclick = Zt), t = !0) : t = !1, t || me(l, !0);
  }
  function Xo(l) {
    for (Fl = l.return; Fl; )
      switch (Fl.tag) {
        case 5:
        case 31:
        case 13:
          xt = !1;
          return;
        case 27:
        case 3:
          xt = !0;
          return;
        default:
          Fl = Fl.return;
      }
  }
  function ba(l) {
    if (l !== Fl) return !1;
    if (!fl) return Xo(l), fl = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || nf(l.type, l.memoizedProps)), e = !e), e && xl && me(l), Xo(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      xl = rd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
      xl = rd(l);
    } else
      t === 27 ? (t = xl, Oe(l.type) ? (l = sf, sf = null, xl = l) : xl = t) : xl = Fl ? Ut(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Ze() {
    xl = Fl = null, fl = !1;
  }
  function Qi() {
    var l = de;
    return l !== null && (ft === null ? ft = l : ft.push.apply(
      ft,
      l
    ), de = null), l;
  }
  function tn(l) {
    de === null ? de = [l] : de.push(l);
  }
  var Zi = s(null), Le = null, Kt = null;
  function he(l, t, e) {
    D(Zi, t._currentValue), t._currentValue = e;
  }
  function Jt(l) {
    l._currentValue = Zi.current, z(Zi);
  }
  function Li(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Vi(l, t, e, a) {
    var n = l.child;
    for (n !== null && (n.return = l); n !== null; ) {
      var u = n.dependencies;
      if (u !== null) {
        var i = n.child;
        u = u.firstContext;
        l: for (; u !== null; ) {
          var c = u;
          u = n;
          for (var r = 0; r < t.length; r++)
            if (c.context === t[r]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Li(
                u.return,
                e,
                l
              ), a || (i = null);
              break l;
            }
          u = c.next;
        }
      } else if (n.tag === 18) {
        if (i = n.return, i === null) throw Error(o(341));
        i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Li(i, e, l), i = null;
      } else i = n.child;
      if (i !== null) i.return = n;
      else
        for (i = n; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
      n = i;
    }
  }
  function pa(l, t, e, a) {
    l = null;
    for (var n = t, u = !1; n !== null; ) {
      if (!u) {
        if ((n.flags & 524288) !== 0) u = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var i = n.alternate;
        if (i === null) throw Error(o(387));
        if (i = i.memoizedProps, i !== null) {
          var c = n.type;
          mt(n.pendingProps.value, i.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (n === I.current) {
        if (i = n.alternate, i === null) throw Error(o(387));
        i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (l !== null ? l.push(Dn) : l = [Dn]);
      }
      n = n.return;
    }
    l !== null && Vi(
      t,
      l,
      e,
      a
    ), t.flags |= 262144;
  }
  function au(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!mt(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ve(l) {
    Le = l, Kt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Il(l) {
    return Qo(Le, l);
  }
  function nu(l, t) {
    return Le === null && Ve(l), Qo(l, t);
  }
  function Qo(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, Kt === null) {
      if (l === null) throw Error(o(308));
      Kt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Kt = Kt.next = t;
    return e;
  }
  var Ah = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, Th = f.unstable_scheduleCallback, Eh = f.unstable_NormalPriority, Xl = {
    $$typeof: vl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function wi() {
    return {
      controller: new Ah(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function en(l) {
    l.refCount--, l.refCount === 0 && Th(Eh, function() {
      l.controller.abort();
    });
  }
  var an = null, Ki = 0, Sa = 0, za = null;
  function Mh(l, t) {
    if (an === null) {
      var e = an = [];
      Ki = 0, Sa = Wc(), za = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Ki++, t.then(Zo, Zo), t;
  }
  function Zo() {
    if (--Ki === 0 && an !== null) {
      za !== null && (za.status = "fulfilled");
      var l = an;
      an = null, Sa = 0, za = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function _h(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(n) {
        e.push(n);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < e.length; n++) (0, e[n])(t);
      },
      function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++)
          (0, e[n])(void 0);
      }
    ), a;
  }
  var Lo = p.S;
  p.S = function(l, t) {
    _r = st(), typeof t == "object" && t !== null && typeof t.then == "function" && Mh(l, t), Lo !== null && Lo(l, t);
  };
  var we = s(null);
  function Ji() {
    var l = we.current;
    return l !== null ? l : El.pooledCache;
  }
  function uu(l, t) {
    t === null ? D(we, we.current) : D(we, t.pool);
  }
  function Vo() {
    var l = Ji();
    return l === null ? null : { parent: Xl._currentValue, pool: l };
  }
  var Aa = Error(o(460)), ki = Error(o(474)), iu = Error(o(542)), cu = { then: function() {
  } };
  function wo(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Ko(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(Zt, Zt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, ko(l), l;
      default:
        if (typeof t.status == "string") t.then(Zt, Zt);
        else {
          if (l = El, l !== null && 100 < l.shellSuspendCounter)
            throw Error(o(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, ko(l), l;
        }
        throw Je = t, Aa;
    }
  }
  function Ke(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Je = e, Aa) : e;
    }
  }
  var Je = null;
  function Jo() {
    if (Je === null) throw Error(o(459));
    var l = Je;
    return Je = null, l;
  }
  function ko(l) {
    if (l === Aa || l === iu)
      throw Error(o(483));
  }
  var Ta = null, nn = 0;
  function fu(l) {
    var t = nn;
    return nn += 1, Ta === null && (Ta = []), Ko(Ta, l, t);
  }
  function un(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function ou(l, t) {
    throw t.$$typeof === nl ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(
      o(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Wo(l) {
    function t(m, d) {
      if (l) {
        var h = m.deletions;
        h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d);
      }
    }
    function e(m, d) {
      if (!l) return null;
      for (; d !== null; )
        t(m, d), d = d.sibling;
      return null;
    }
    function a(m) {
      for (var d = /* @__PURE__ */ new Map(); m !== null; )
        m.key !== null ? d.set(m.key, m) : d.set(m.index, m), m = m.sibling;
      return d;
    }
    function n(m, d) {
      return m = Vt(m, d), m.index = 0, m.sibling = null, m;
    }
    function u(m, d, h) {
      return m.index = h, l ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 67108866, d) : h) : (m.flags |= 67108866, d)) : (m.flags |= 1048576, d);
    }
    function i(m) {
      return l && m.alternate === null && (m.flags |= 67108866), m;
    }
    function c(m, d, h, M) {
      return d === null || d.tag !== 6 ? (d = qi(h, m.mode, M), d.return = m, d) : (d = n(d, h), d.return = m, d);
    }
    function r(m, d, h, M) {
      var K = h.type;
      return K === Q ? T(
        m,
        d,
        h.props.children,
        M,
        h.key
      ) : d !== null && (d.elementType === K || typeof K == "object" && K !== null && K.$$typeof === R && Ke(K) === d.type) ? (d = n(d, h.props), un(d, h), d.return = m, d) : (d = tu(
        h.type,
        h.key,
        h.props,
        null,
        m.mode,
        M
      ), un(d, h), d.return = m, d);
    }
    function y(m, d, h, M) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Yi(h, m.mode, M), d.return = m, d) : (d = n(d, h.children || []), d.return = m, d);
    }
    function T(m, d, h, M, K) {
      return d === null || d.tag !== 7 ? (d = Qe(
        h,
        m.mode,
        M,
        K
      ), d.return = m, d) : (d = n(d, h), d.return = m, d);
    }
    function _(m, d, h) {
      if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
        return d = qi(
          "" + d,
          m.mode,
          h
        ), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case yl:
            return h = tu(
              d.type,
              d.key,
              d.props,
              null,
              m.mode,
              h
            ), un(h, d), h.return = m, h;
          case Ul:
            return d = Yi(
              d,
              m.mode,
              h
            ), d.return = m, d;
          case R:
            return d = Ke(d), _(m, d, h);
        }
        if (Rl(d) || Ol(d))
          return d = Qe(
            d,
            m.mode,
            h,
            null
          ), d.return = m, d;
        if (typeof d.then == "function")
          return _(m, fu(d), h);
        if (d.$$typeof === vl)
          return _(
            m,
            nu(m, d),
            h
          );
        ou(m, d);
      }
      return null;
    }
    function v(m, d, h, M) {
      var K = d !== null ? d.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint")
        return K !== null ? null : c(m, d, "" + h, M);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case yl:
            return h.key === K ? r(m, d, h, M) : null;
          case Ul:
            return h.key === K ? y(m, d, h, M) : null;
          case R:
            return h = Ke(h), v(m, d, h, M);
        }
        if (Rl(h) || Ol(h))
          return K !== null ? null : T(m, d, h, M, null);
        if (typeof h.then == "function")
          return v(
            m,
            d,
            fu(h),
            M
          );
        if (h.$$typeof === vl)
          return v(
            m,
            d,
            nu(m, h),
            M
          );
        ou(m, h);
      }
      return null;
    }
    function b(m, d, h, M, K) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return m = m.get(h) || null, c(d, m, "" + M, K);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case yl:
            return m = m.get(
              M.key === null ? h : M.key
            ) || null, r(d, m, M, K);
          case Ul:
            return m = m.get(
              M.key === null ? h : M.key
            ) || null, y(d, m, M, K);
          case R:
            return M = Ke(M), b(
              m,
              d,
              h,
              M,
              K
            );
        }
        if (Rl(M) || Ol(M))
          return m = m.get(h) || null, T(d, m, M, K, null);
        if (typeof M.then == "function")
          return b(
            m,
            d,
            h,
            fu(M),
            K
          );
        if (M.$$typeof === vl)
          return b(
            m,
            d,
            h,
            nu(d, M),
            K
          );
        ou(d, M);
      }
      return null;
    }
    function G(m, d, h, M) {
      for (var K = null, sl = null, Z = d, P = d = 0, cl = null; Z !== null && P < h.length; P++) {
        Z.index > P ? (cl = Z, Z = null) : cl = Z.sibling;
        var rl = v(
          m,
          Z,
          h[P],
          M
        );
        if (rl === null) {
          Z === null && (Z = cl);
          break;
        }
        l && Z && rl.alternate === null && t(m, Z), d = u(rl, d, P), sl === null ? K = rl : sl.sibling = rl, sl = rl, Z = cl;
      }
      if (P === h.length)
        return e(m, Z), fl && wt(m, P), K;
      if (Z === null) {
        for (; P < h.length; P++)
          Z = _(m, h[P], M), Z !== null && (d = u(
            Z,
            d,
            P
          ), sl === null ? K = Z : sl.sibling = Z, sl = Z);
        return fl && wt(m, P), K;
      }
      for (Z = a(Z); P < h.length; P++)
        cl = b(
          Z,
          m,
          P,
          h[P],
          M
        ), cl !== null && (l && cl.alternate !== null && Z.delete(
          cl.key === null ? P : cl.key
        ), d = u(
          cl,
          d,
          P
        ), sl === null ? K = cl : sl.sibling = cl, sl = cl);
      return l && Z.forEach(function(Re) {
        return t(m, Re);
      }), fl && wt(m, P), K;
    }
    function W(m, d, h, M) {
      if (h == null) throw Error(o(151));
      for (var K = null, sl = null, Z = d, P = d = 0, cl = null, rl = h.next(); Z !== null && !rl.done; P++, rl = h.next()) {
        Z.index > P ? (cl = Z, Z = null) : cl = Z.sibling;
        var Re = v(m, Z, rl.value, M);
        if (Re === null) {
          Z === null && (Z = cl);
          break;
        }
        l && Z && Re.alternate === null && t(m, Z), d = u(Re, d, P), sl === null ? K = Re : sl.sibling = Re, sl = Re, Z = cl;
      }
      if (rl.done)
        return e(m, Z), fl && wt(m, P), K;
      if (Z === null) {
        for (; !rl.done; P++, rl = h.next())
          rl = _(m, rl.value, M), rl !== null && (d = u(rl, d, P), sl === null ? K = rl : sl.sibling = rl, sl = rl);
        return fl && wt(m, P), K;
      }
      for (Z = a(Z); !rl.done; P++, rl = h.next())
        rl = b(Z, m, P, rl.value, M), rl !== null && (l && rl.alternate !== null && Z.delete(rl.key === null ? P : rl.key), d = u(rl, d, P), sl === null ? K = rl : sl.sibling = rl, sl = rl);
      return l && Z.forEach(function(Y0) {
        return t(m, Y0);
      }), fl && wt(m, P), K;
    }
    function Sl(m, d, h, M) {
      if (typeof h == "object" && h !== null && h.type === Q && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case yl:
            l: {
              for (var K = h.key; d !== null; ) {
                if (d.key === K) {
                  if (K = h.type, K === Q) {
                    if (d.tag === 7) {
                      e(
                        m,
                        d.sibling
                      ), M = n(
                        d,
                        h.props.children
                      ), M.return = m, m = M;
                      break l;
                    }
                  } else if (d.elementType === K || typeof K == "object" && K !== null && K.$$typeof === R && Ke(K) === d.type) {
                    e(
                      m,
                      d.sibling
                    ), M = n(d, h.props), un(M, h), M.return = m, m = M;
                    break l;
                  }
                  e(m, d);
                  break;
                } else t(m, d);
                d = d.sibling;
              }
              h.type === Q ? (M = Qe(
                h.props.children,
                m.mode,
                M,
                h.key
              ), M.return = m, m = M) : (M = tu(
                h.type,
                h.key,
                h.props,
                null,
                m.mode,
                M
              ), un(M, h), M.return = m, m = M);
            }
            return i(m);
          case Ul:
            l: {
              for (K = h.key; d !== null; ) {
                if (d.key === K)
                  if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                    e(
                      m,
                      d.sibling
                    ), M = n(d, h.children || []), M.return = m, m = M;
                    break l;
                  } else {
                    e(m, d);
                    break;
                  }
                else t(m, d);
                d = d.sibling;
              }
              M = Yi(h, m.mode, M), M.return = m, m = M;
            }
            return i(m);
          case R:
            return h = Ke(h), Sl(
              m,
              d,
              h,
              M
            );
        }
        if (Rl(h))
          return G(
            m,
            d,
            h,
            M
          );
        if (Ol(h)) {
          if (K = Ol(h), typeof K != "function") throw Error(o(150));
          return h = K.call(h), W(
            m,
            d,
            h,
            M
          );
        }
        if (typeof h.then == "function")
          return Sl(
            m,
            d,
            fu(h),
            M
          );
        if (h.$$typeof === vl)
          return Sl(
            m,
            d,
            nu(m, h),
            M
          );
        ou(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint" ? (h = "" + h, d !== null && d.tag === 6 ? (e(m, d.sibling), M = n(d, h), M.return = m, m = M) : (e(m, d), M = qi(h, m.mode, M), M.return = m, m = M), i(m)) : e(m, d);
    }
    return function(m, d, h, M) {
      try {
        nn = 0;
        var K = Sl(
          m,
          d,
          h,
          M
        );
        return Ta = null, K;
      } catch (Z) {
        if (Z === Aa || Z === iu) throw Z;
        var sl = ht(29, Z, null, m.mode);
        return sl.lanes = M, sl.return = m, sl;
      }
    };
  }
  var ke = Wo(!0), $o = Wo(!1), ye = !1;
  function Wi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function $i(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function ve(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ge(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (dl & 2) !== 0) {
      var n = a.pending;
      return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = lu(l), No(l, null, e), t;
    }
    return Pn(l, a, t, e), lu(l);
  }
  function cn(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Xf(l, e);
    }
  }
  function Fi(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var n = null, u = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var i = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          u === null ? n = u = i : u = u.next = i, e = e.next;
        } while (e !== null);
        u === null ? n = u = t : u = u.next = t;
      } else n = u = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var Ii = !1;
  function fn() {
    if (Ii) {
      var l = za;
      if (l !== null) throw l;
    }
  }
  function on(l, t, e, a) {
    Ii = !1;
    var n = l.updateQueue;
    ye = !1;
    var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
    if (c !== null) {
      n.shared.pending = null;
      var r = c, y = r.next;
      r.next = null, i === null ? u = y : i.next = y, i = r;
      var T = l.alternate;
      T !== null && (T = T.updateQueue, c = T.lastBaseUpdate, c !== i && (c === null ? T.firstBaseUpdate = y : c.next = y, T.lastBaseUpdate = r));
    }
    if (u !== null) {
      var _ = n.baseState;
      i = 0, T = y = r = null, c = u;
      do {
        var v = c.lane & -536870913, b = v !== c.lane;
        if (b ? (il & v) === v : (a & v) === v) {
          v !== 0 && v === Sa && (Ii = !0), T !== null && (T = T.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var G = l, W = c;
            v = t;
            var Sl = e;
            switch (W.tag) {
              case 1:
                if (G = W.payload, typeof G == "function") {
                  _ = G.call(Sl, _, v);
                  break l;
                }
                _ = G;
                break l;
              case 3:
                G.flags = G.flags & -65537 | 128;
              case 0:
                if (G = W.payload, v = typeof G == "function" ? G.call(Sl, _, v) : G, v == null) break l;
                _ = q({}, _, v);
                break l;
              case 2:
                ye = !0;
            }
          }
          v = c.callback, v !== null && (l.flags |= 64, b && (l.flags |= 8192), b = n.callbacks, b === null ? n.callbacks = [v] : b.push(v));
        } else
          b = {
            lane: v,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, T === null ? (y = T = b, r = _) : T = T.next = b, i |= v;
        if (c = c.next, c === null) {
          if (c = n.shared.pending, c === null)
            break;
          b = c, c = b.next, b.next = null, n.lastBaseUpdate = b, n.shared.pending = null;
        }
      } while (!0);
      T === null && (r = _), n.baseState = r, n.firstBaseUpdate = y, n.lastBaseUpdate = T, u === null && (n.shared.lanes = 0), Ae |= i, l.lanes = i, l.memoizedState = _;
    }
  }
  function Fo(l, t) {
    if (typeof l != "function")
      throw Error(o(191, l));
    l.call(t);
  }
  function Io(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        Fo(e[l], t);
  }
  var Ea = s(null), su = s(0);
  function Po(l, t) {
    l = ee, D(su, l), D(Ea, t), ee = l | t.baseLanes;
  }
  function Pi() {
    D(su, ee), D(Ea, Ea.current);
  }
  function lc() {
    ee = su.current, z(Ea), z(su);
  }
  var yt = s(null), Dt = null;
  function be(l) {
    var t = l.alternate;
    D(ql, ql.current & 1), D(yt, l), Dt === null && (t === null || Ea.current !== null || t.memoizedState !== null) && (Dt = l);
  }
  function tc(l) {
    D(ql, ql.current), D(yt, l), Dt === null && (Dt = l);
  }
  function ls(l) {
    l.tag === 22 ? (D(ql, ql.current), D(yt, l), Dt === null && (Dt = l)) : pe();
  }
  function pe() {
    D(ql, ql.current), D(yt, yt.current);
  }
  function vt(l) {
    z(yt), Dt === l && (Dt = null), z(ql);
  }
  var ql = s(0);
  function ru(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || ff(e) || of(e)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var kt = 0, F = null, bl = null, Ql = null, du = !1, Ma = !1, We = !1, mu = 0, sn = 0, _a = null, Oh = 0;
  function Hl() {
    throw Error(o(321));
  }
  function ec(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!mt(l[e], t[e])) return !1;
    return !0;
  }
  function ac(l, t, e, a, n, u) {
    return kt = u, F = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, p.H = l === null || l.memoizedState === null ? Ys : bc, We = !1, u = e(a, n), We = !1, Ma && (u = es(
      t,
      e,
      a,
      n
    )), ts(l), u;
  }
  function ts(l) {
    p.H = mn;
    var t = bl !== null && bl.next !== null;
    if (kt = 0, Ql = bl = F = null, du = !1, sn = 0, _a = null, t) throw Error(o(300));
    l === null || Zl || (l = l.dependencies, l !== null && au(l) && (Zl = !0));
  }
  function es(l, t, e, a) {
    F = l;
    var n = 0;
    do {
      if (Ma && (_a = null), sn = 0, Ma = !1, 25 <= n) throw Error(o(301));
      if (n += 1, Ql = bl = null, l.updateQueue != null) {
        var u = l.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      p.H = js, u = t(e, a);
    } while (Ma);
    return u;
  }
  function xh() {
    var l = p.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? rn(t) : t, l = l.useState()[0], (bl !== null ? bl.memoizedState : null) !== l && (F.flags |= 1024), t;
  }
  function nc() {
    var l = mu !== 0;
    return mu = 0, l;
  }
  function uc(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function ic(l) {
    if (du) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      du = !1;
    }
    kt = 0, Ql = bl = F = null, Ma = !1, sn = mu = 0, _a = null;
  }
  function et() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ql === null ? F.memoizedState = Ql = l : Ql = Ql.next = l, Ql;
  }
  function Yl() {
    if (bl === null) {
      var l = F.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = bl.next;
    var t = Ql === null ? F.memoizedState : Ql.next;
    if (t !== null)
      Ql = t, bl = l;
    else {
      if (l === null)
        throw F.alternate === null ? Error(o(467)) : Error(o(310));
      bl = l, l = {
        memoizedState: bl.memoizedState,
        baseState: bl.baseState,
        baseQueue: bl.baseQueue,
        queue: bl.queue,
        next: null
      }, Ql === null ? F.memoizedState = Ql = l : Ql = Ql.next = l;
    }
    return Ql;
  }
  function hu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function rn(l) {
    var t = sn;
    return sn += 1, _a === null && (_a = []), l = Ko(_a, l, t), t = F, (Ql === null ? t.memoizedState : Ql.next) === null && (t = t.alternate, p.H = t === null || t.memoizedState === null ? Ys : bc), l;
  }
  function yu(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return rn(l);
      if (l.$$typeof === vl) return Il(l);
    }
    throw Error(o(438, String(l)));
  }
  function cc(l) {
    var t = null, e = F.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = F.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(n) {
          return n.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = hu(), F.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = St;
    return t.index++, e;
  }
  function Wt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function vu(l) {
    var t = Yl();
    return fc(t, bl, l);
  }
  function fc(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var n = l.baseQueue, u = a.pending;
    if (u !== null) {
      if (n !== null) {
        var i = n.next;
        n.next = u.next, u.next = i;
      }
      t.baseQueue = n = u, a.pending = null;
    }
    if (u = l.baseState, n === null) l.memoizedState = u;
    else {
      t = n.next;
      var c = i = null, r = null, y = t, T = !1;
      do {
        var _ = y.lane & -536870913;
        if (_ !== y.lane ? (il & _) === _ : (kt & _) === _) {
          var v = y.revertLane;
          if (v === 0)
            r !== null && (r = r.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }), _ === Sa && (T = !0);
          else if ((kt & v) === v) {
            y = y.next, v === Sa && (T = !0);
            continue;
          } else
            _ = {
              lane: 0,
              revertLane: y.revertLane,
              gesture: null,
              action: y.action,
              hasEagerState: y.hasEagerState,
              eagerState: y.eagerState,
              next: null
            }, r === null ? (c = r = _, i = u) : r = r.next = _, F.lanes |= v, Ae |= v;
          _ = y.action, We && e(u, _), u = y.hasEagerState ? y.eagerState : e(u, _);
        } else
          v = {
            lane: _,
            revertLane: y.revertLane,
            gesture: y.gesture,
            action: y.action,
            hasEagerState: y.hasEagerState,
            eagerState: y.eagerState,
            next: null
          }, r === null ? (c = r = v, i = u) : r = r.next = v, F.lanes |= _, Ae |= _;
        y = y.next;
      } while (y !== null && y !== t);
      if (r === null ? i = u : r.next = c, !mt(u, l.memoizedState) && (Zl = !0, T && (e = za, e !== null)))
        throw e;
      l.memoizedState = u, l.baseState = i, l.baseQueue = r, a.lastRenderedState = u;
    }
    return n === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function oc(l) {
    var t = Yl(), e = t.queue;
    if (e === null) throw Error(o(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, n = e.pending, u = t.memoizedState;
    if (n !== null) {
      e.pending = null;
      var i = n = n.next;
      do
        u = l(u, i.action), i = i.next;
      while (i !== n);
      mt(u, t.memoizedState) || (Zl = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), e.lastRenderedState = u;
    }
    return [u, a];
  }
  function as(l, t, e) {
    var a = F, n = Yl(), u = fl;
    if (u) {
      if (e === void 0) throw Error(o(407));
      e = e();
    } else e = t();
    var i = !mt(
      (bl || n).memoizedState,
      e
    );
    if (i && (n.memoizedState = e, Zl = !0), n = n.queue, dc(is.bind(null, a, n, l), [
      l
    ]), n.getSnapshot !== t || i || Ql !== null && Ql.memoizedState.tag & 1) {
      if (a.flags |= 2048, Oa(
        9,
        { destroy: void 0 },
        us.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), El === null) throw Error(o(349));
      u || (kt & 127) !== 0 || ns(a, t, e);
    }
    return e;
  }
  function ns(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = F.updateQueue, t === null ? (t = hu(), F.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function us(l, t, e, a) {
    t.value = e, t.getSnapshot = a, cs(t) && fs(l);
  }
  function is(l, t, e) {
    return e(function() {
      cs(t) && fs(l);
    });
  }
  function cs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !mt(l, e);
    } catch {
      return !0;
    }
  }
  function fs(l) {
    var t = Xe(l, 2);
    t !== null && ot(t, l, 2);
  }
  function sc(l) {
    var t = et();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), We) {
        fe(!0);
        try {
          e();
        } finally {
          fe(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wt,
      lastRenderedState: l
    }, t;
  }
  function os(l, t, e, a) {
    return l.baseState = e, fc(
      l,
      bl,
      typeof a == "function" ? a : Wt
    );
  }
  function Dh(l, t, e, a, n) {
    if (pu(l)) throw Error(o(485));
    if (l = t.action, l !== null) {
      var u = {
        payload: n,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(i) {
          u.listeners.push(i);
        }
      };
      p.T !== null ? e(!0) : u.isTransition = !1, a(u), e = t.pending, e === null ? (u.next = t.pending = u, ss(t, u)) : (u.next = e.next, t.pending = e.next = u);
    }
  }
  function ss(l, t) {
    var e = t.action, a = t.payload, n = l.state;
    if (t.isTransition) {
      var u = p.T, i = {};
      p.T = i;
      try {
        var c = e(n, a), r = p.S;
        r !== null && r(i, c), rs(l, t, c);
      } catch (y) {
        rc(l, t, y);
      } finally {
        u !== null && i.types !== null && (u.types = i.types), p.T = u;
      }
    } else
      try {
        u = e(n, a), rs(l, t, u);
      } catch (y) {
        rc(l, t, y);
      }
  }
  function rs(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        ds(l, t, a);
      },
      function(a) {
        return rc(l, t, a);
      }
    ) : ds(l, t, e);
  }
  function ds(l, t, e) {
    t.status = "fulfilled", t.value = e, ms(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, ss(l, e)));
  }
  function rc(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, ms(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function ms(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function hs(l, t) {
    return t;
  }
  function ys(l, t) {
    if (fl) {
      var e = El.formState;
      if (e !== null) {
        l: {
          var a = F;
          if (fl) {
            if (xl) {
              t: {
                for (var n = xl, u = xt; n.nodeType !== 8; ) {
                  if (!u) {
                    n = null;
                    break t;
                  }
                  if (n = Ut(
                    n.nextSibling
                  ), n === null) {
                    n = null;
                    break t;
                  }
                }
                u = n.data, n = u === "F!" || u === "F" ? n : null;
              }
              if (n) {
                xl = Ut(
                  n.nextSibling
                ), a = n.data === "F!";
                break l;
              }
            }
            me(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = et(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: hs,
      lastRenderedState: t
    }, e.queue = a, e = Hs.bind(
      null,
      F,
      a
    ), a.dispatch = e, a = sc(!1), u = gc.bind(
      null,
      F,
      !1,
      a.queue
    ), a = et(), n = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = n, e = Dh.bind(
      null,
      F,
      n,
      u,
      e
    ), n.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function vs(l) {
    var t = Yl();
    return gs(t, bl, l);
  }
  function gs(l, t, e) {
    if (t = fc(
      l,
      t,
      hs
    )[0], l = vu(Wt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = rn(t);
      } catch (i) {
        throw i === Aa ? iu : i;
      }
    else a = t;
    t = Yl();
    var n = t.queue, u = n.dispatch;
    return e !== t.memoizedState && (F.flags |= 2048, Oa(
      9,
      { destroy: void 0 },
      Uh.bind(null, n, e),
      null
    )), [a, u, l];
  }
  function Uh(l, t) {
    l.action = t;
  }
  function bs(l) {
    var t = Yl(), e = bl;
    if (e !== null)
      return gs(t, e, l);
    Yl(), t = t.memoizedState, e = Yl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function Oa(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = F.updateQueue, t === null && (t = hu(), F.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function ps() {
    return Yl().memoizedState;
  }
  function gu(l, t, e, a) {
    var n = et();
    F.flags |= l, n.memoizedState = Oa(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function bu(l, t, e, a) {
    var n = Yl();
    a = a === void 0 ? null : a;
    var u = n.memoizedState.inst;
    bl !== null && a !== null && ec(a, bl.memoizedState.deps) ? n.memoizedState = Oa(t, u, e, a) : (F.flags |= l, n.memoizedState = Oa(
      1 | t,
      u,
      e,
      a
    ));
  }
  function Ss(l, t) {
    gu(8390656, 8, l, t);
  }
  function dc(l, t) {
    bu(2048, 8, l, t);
  }
  function Ch(l) {
    F.flags |= 4;
    var t = F.updateQueue;
    if (t === null)
      t = hu(), F.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function zs(l) {
    var t = Yl().memoizedState;
    return Ch({ ref: t, nextImpl: l }), function() {
      if ((dl & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function As(l, t) {
    return bu(4, 2, l, t);
  }
  function Ts(l, t) {
    return bu(4, 4, l, t);
  }
  function Es(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Ms(l, t, e) {
    e = e != null ? e.concat([l]) : null, bu(4, 4, Es.bind(null, t, l), e);
  }
  function mc() {
  }
  function _s(l, t) {
    var e = Yl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ec(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function Os(l, t) {
    var e = Yl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ec(t, a[1]))
      return a[0];
    if (a = l(), We) {
      fe(!0);
      try {
        l();
      } finally {
        fe(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function hc(l, t, e) {
    return e === void 0 || (kt & 1073741824) !== 0 && (il & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = xr(), F.lanes |= l, Ae |= l, e);
  }
  function xs(l, t, e, a) {
    return mt(e, t) ? e : Ea.current !== null ? (l = hc(l, e, a), mt(l, t) || (Zl = !0), l) : (kt & 42) === 0 || (kt & 1073741824) !== 0 && (il & 261930) === 0 ? (Zl = !0, l.memoizedState = e) : (l = xr(), F.lanes |= l, Ae |= l, t);
  }
  function Ds(l, t, e, a, n) {
    var u = U.p;
    U.p = u !== 0 && 8 > u ? u : 8;
    var i = p.T, c = {};
    p.T = c, gc(l, !1, t, e);
    try {
      var r = n(), y = p.S;
      if (y !== null && y(c, r), r !== null && typeof r == "object" && typeof r.then == "function") {
        var T = _h(
          r,
          a
        );
        dn(
          l,
          t,
          T,
          pt(l)
        );
      } else
        dn(
          l,
          t,
          a,
          pt(l)
        );
    } catch (_) {
      dn(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: _ },
        pt()
      );
    } finally {
      U.p = u, i !== null && c.types !== null && (i.types = c.types), p.T = i;
    }
  }
  function Rh() {
  }
  function yc(l, t, e, a) {
    if (l.tag !== 5) throw Error(o(476));
    var n = Us(l).queue;
    Ds(
      l,
      n,
      t,
      V,
      e === null ? Rh : function() {
        return Cs(l), e(a);
      }
    );
  }
  function Us(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: V,
      baseState: V,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: V
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wt,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Cs(l) {
    var t = Us(l);
    t.next === null && (t = l.alternate.memoizedState), dn(
      l,
      t.next.queue,
      {},
      pt()
    );
  }
  function vc() {
    return Il(Dn);
  }
  function Rs() {
    return Yl().memoizedState;
  }
  function Ns() {
    return Yl().memoizedState;
  }
  function Nh(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = pt();
          l = ve(e);
          var a = ge(t, l, e);
          a !== null && (ot(a, t, e), cn(a, t, e)), t = { cache: wi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Hh(l, t, e) {
    var a = pt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pu(l) ? Bs(t, e) : (e = Hi(l, t, e, a), e !== null && (ot(e, l, a), qs(e, t, a)));
  }
  function Hs(l, t, e) {
    var a = pt();
    dn(l, t, e, a);
  }
  function dn(l, t, e, a) {
    var n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (pu(l)) Bs(t, n);
    else {
      var u = l.alternate;
      if (l.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var i = t.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = !0, n.eagerState = c, mt(c, i))
            return Pn(l, t, n, 0), El === null && In(), !1;
        } catch {
        }
      if (e = Hi(l, t, n, a), e !== null)
        return ot(e, l, a), qs(e, t, a), !0;
    }
    return !1;
  }
  function gc(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Wc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, pu(l)) {
      if (t) throw Error(o(479));
    } else
      t = Hi(
        l,
        e,
        a,
        2
      ), t !== null && ot(t, l, 2);
  }
  function pu(l) {
    var t = l.alternate;
    return l === F || t !== null && t === F;
  }
  function Bs(l, t) {
    Ma = du = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function qs(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Xf(l, e);
    }
  }
  var mn = {
    readContext: Il,
    use: yu,
    useCallback: Hl,
    useContext: Hl,
    useEffect: Hl,
    useImperativeHandle: Hl,
    useLayoutEffect: Hl,
    useInsertionEffect: Hl,
    useMemo: Hl,
    useReducer: Hl,
    useRef: Hl,
    useState: Hl,
    useDebugValue: Hl,
    useDeferredValue: Hl,
    useTransition: Hl,
    useSyncExternalStore: Hl,
    useId: Hl,
    useHostTransitionStatus: Hl,
    useFormState: Hl,
    useActionState: Hl,
    useOptimistic: Hl,
    useMemoCache: Hl,
    useCacheRefresh: Hl
  };
  mn.useEffectEvent = Hl;
  var Ys = {
    readContext: Il,
    use: yu,
    useCallback: function(l, t) {
      return et().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Il,
    useEffect: Ss,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, gu(
        4194308,
        4,
        Es.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return gu(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      gu(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = et();
      t = t === void 0 ? null : t;
      var a = l();
      if (We) {
        fe(!0);
        try {
          l();
        } finally {
          fe(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = et();
      if (e !== void 0) {
        var n = e(t);
        if (We) {
          fe(!0);
          try {
            e(t);
          } finally {
            fe(!1);
          }
        }
      } else n = t;
      return a.memoizedState = a.baseState = n, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: n
      }, a.queue = l, l = l.dispatch = Hh.bind(
        null,
        F,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = et();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = sc(l);
      var t = l.queue, e = Hs.bind(null, F, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: mc,
    useDeferredValue: function(l, t) {
      var e = et();
      return hc(e, l, t);
    },
    useTransition: function() {
      var l = sc(!1);
      return l = Ds.bind(
        null,
        F,
        l.queue,
        !0,
        !1
      ), et().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = F, n = et();
      if (fl) {
        if (e === void 0)
          throw Error(o(407));
        e = e();
      } else {
        if (e = t(), El === null)
          throw Error(o(349));
        (il & 127) !== 0 || ns(a, t, e);
      }
      n.memoizedState = e;
      var u = { value: e, getSnapshot: t };
      return n.queue = u, Ss(is.bind(null, a, u, l), [
        l
      ]), a.flags |= 2048, Oa(
        9,
        { destroy: void 0 },
        us.bind(
          null,
          a,
          u,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = et(), t = El.identifierPrefix;
      if (fl) {
        var e = qt, a = Bt;
        e = (a & ~(1 << 32 - dt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = mu++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = Oh++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: vc,
    useFormState: ys,
    useActionState: ys,
    useOptimistic: function(l) {
      var t = et();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = gc.bind(
        null,
        F,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: cc,
    useCacheRefresh: function() {
      return et().memoizedState = Nh.bind(
        null,
        F
      );
    },
    useEffectEvent: function(l) {
      var t = et(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((dl & 2) !== 0)
          throw Error(o(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, bc = {
    readContext: Il,
    use: yu,
    useCallback: _s,
    useContext: Il,
    useEffect: dc,
    useImperativeHandle: Ms,
    useInsertionEffect: As,
    useLayoutEffect: Ts,
    useMemo: Os,
    useReducer: vu,
    useRef: ps,
    useState: function() {
      return vu(Wt);
    },
    useDebugValue: mc,
    useDeferredValue: function(l, t) {
      var e = Yl();
      return xs(
        e,
        bl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = vu(Wt)[0], t = Yl().memoizedState;
      return [
        typeof l == "boolean" ? l : rn(l),
        t
      ];
    },
    useSyncExternalStore: as,
    useId: Rs,
    useHostTransitionStatus: vc,
    useFormState: vs,
    useActionState: vs,
    useOptimistic: function(l, t) {
      var e = Yl();
      return os(e, bl, l, t);
    },
    useMemoCache: cc,
    useCacheRefresh: Ns
  };
  bc.useEffectEvent = zs;
  var js = {
    readContext: Il,
    use: yu,
    useCallback: _s,
    useContext: Il,
    useEffect: dc,
    useImperativeHandle: Ms,
    useInsertionEffect: As,
    useLayoutEffect: Ts,
    useMemo: Os,
    useReducer: oc,
    useRef: ps,
    useState: function() {
      return oc(Wt);
    },
    useDebugValue: mc,
    useDeferredValue: function(l, t) {
      var e = Yl();
      return bl === null ? hc(e, l, t) : xs(
        e,
        bl.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = oc(Wt)[0], t = Yl().memoizedState;
      return [
        typeof l == "boolean" ? l : rn(l),
        t
      ];
    },
    useSyncExternalStore: as,
    useId: Rs,
    useHostTransitionStatus: vc,
    useFormState: bs,
    useActionState: bs,
    useOptimistic: function(l, t) {
      var e = Yl();
      return bl !== null ? os(e, bl, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: cc,
    useCacheRefresh: Ns
  };
  js.useEffectEvent = zs;
  function pc(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : q({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var Sc = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = pt(), n = ve(a);
      n.payload = t, e != null && (n.callback = e), t = ge(l, n, a), t !== null && (ot(t, l, a), cn(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = pt(), n = ve(a);
      n.tag = 1, n.payload = t, e != null && (n.callback = e), t = ge(l, n, a), t !== null && (ot(t, l, a), cn(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = pt(), a = ve(e);
      a.tag = 2, t != null && (a.callback = t), t = ge(l, a, e), t !== null && (ot(t, l, e), cn(t, l, e));
    }
  };
  function Gs(l, t, e, a, n, u, i) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Ia(e, a) || !Ia(n, u) : !0;
  }
  function Xs(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && Sc.enqueueReplaceState(t, t.state, null);
  }
  function $e(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = q({}, e));
      for (var n in l)
        e[n] === void 0 && (e[n] = l[n]);
    }
    return e;
  }
  function Qs(l) {
    Fn(l);
  }
  function Zs(l) {
    console.error(l);
  }
  function Ls(l) {
    Fn(l);
  }
  function Su(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Vs(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  function zc(l, t, e) {
    return e = ve(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Su(l, t);
    }, e;
  }
  function ws(l) {
    return l = ve(l), l.tag = 3, l;
  }
  function Ks(l, t, e, a) {
    var n = e.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var u = a.value;
      l.payload = function() {
        return n(u);
      }, l.callback = function() {
        Vs(t, e, a);
      };
    }
    var i = e.stateNode;
    i !== null && typeof i.componentDidCatch == "function" && (l.callback = function() {
      Vs(t, e, a), typeof n != "function" && (Te === null ? Te = /* @__PURE__ */ new Set([this]) : Te.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Bh(l, t, e, a, n) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && pa(
        t,
        e,
        n,
        !0
      ), e = yt.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
            return Dt === null ? Ru() : e.alternate === null && Bl === 0 && (Bl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === cu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Kc(l, a, n)), !1;
          case 22:
            return e.flags |= 65536, a === cu ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), Kc(l, a, n)), !1;
        }
        throw Error(o(435, e.tag));
      }
      return Kc(l, a, n), Ru(), !1;
    }
    if (fl)
      return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== Xi && (l = Error(o(422), { cause: a }), tn(Mt(l, e)))) : (a !== Xi && (t = Error(o(423), {
        cause: a
      }), tn(
        Mt(t, e)
      )), l = l.current.alternate, l.flags |= 65536, n &= -n, l.lanes |= n, a = Mt(a, e), n = zc(
        l.stateNode,
        a,
        n
      ), Fi(l, n), Bl !== 4 && (Bl = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = Mt(u, e), zn === null ? zn = [u] : zn.push(u), Bl !== 4 && (Bl = 2), t === null) return !0;
    a = Mt(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = n & -n, e.lanes |= l, l = zc(e.stateNode, a, l), Fi(e, l), !1;
        case 1:
          if (t = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Te === null || !Te.has(u))))
            return e.flags |= 65536, n &= -n, e.lanes |= n, n = ws(n), Ks(
              n,
              l,
              e,
              a
            ), Fi(e, n), !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var Ac = Error(o(461)), Zl = !1;
  function Pl(l, t, e, a) {
    t.child = l === null ? $o(t, null, e, a) : ke(
      t,
      l.child,
      e,
      a
    );
  }
  function Js(l, t, e, a, n) {
    e = e.render;
    var u = t.ref;
    if ("ref" in a) {
      var i = {};
      for (var c in a)
        c !== "ref" && (i[c] = a[c]);
    } else i = a;
    return Ve(t), a = ac(
      l,
      t,
      e,
      i,
      u,
      n
    ), c = nc(), l !== null && !Zl ? (uc(l, t, n), $t(l, t, n)) : (fl && c && ji(t), t.flags |= 1, Pl(l, t, a, n), t.child);
  }
  function ks(l, t, e, a, n) {
    if (l === null) {
      var u = e.type;
      return typeof u == "function" && !Bi(u) && u.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = u, Ws(
        l,
        t,
        u,
        a,
        n
      )) : (l = tu(
        e.type,
        null,
        a,
        t,
        t.mode,
        n
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (u = l.child, !Uc(l, n)) {
      var i = u.memoizedProps;
      if (e = e.compare, e = e !== null ? e : Ia, e(i, a) && l.ref === t.ref)
        return $t(l, t, n);
    }
    return t.flags |= 1, l = Vt(u, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Ws(l, t, e, a, n) {
    if (l !== null) {
      var u = l.memoizedProps;
      if (Ia(u, a) && l.ref === t.ref)
        if (Zl = !1, t.pendingProps = a = u, Uc(l, n))
          (l.flags & 131072) !== 0 && (Zl = !0);
        else
          return t.lanes = l.lanes, $t(l, t, n);
    }
    return Tc(
      l,
      t,
      e,
      a,
      n
    );
  }
  function $s(l, t, e, a) {
    var n = a.children, u = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, n = 0; a !== null; )
            n = n | a.lanes | a.childLanes, a = a.sibling;
          a = n & ~u;
        } else a = 0, t.child = null;
        return Fs(
          l,
          t,
          u,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && uu(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? Po(t, u) : Pi(), ls(t);
      else
        return a = t.lanes = 536870912, Fs(
          l,
          t,
          u !== null ? u.baseLanes | e : e,
          e,
          a
        );
    } else
      u !== null ? (uu(t, u.cachePool), Po(t, u), pe(), t.memoizedState = null) : (l !== null && uu(t, null), Pi(), pe());
    return Pl(l, t, n, e), t.child;
  }
  function hn(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Fs(l, t, e, a, n) {
    var u = Ji();
    return u = u === null ? null : { parent: Xl._currentValue, pool: u }, t.memoizedState = {
      baseLanes: e,
      cachePool: u
    }, l !== null && uu(t, null), Pi(), ls(t), l !== null && pa(l, t, a, !0), t.childLanes = n, null;
  }
  function zu(l, t) {
    return t = Tu(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Is(l, t, e) {
    return ke(t, l.child, null, e), l = zu(t, t.pendingProps), l.flags |= 2, vt(t), t.memoizedState = null, l;
  }
  function qh(l, t, e) {
    var a = t.pendingProps, n = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (fl) {
        if (a.mode === "hidden")
          return l = zu(t, a), t.lanes = 536870912, hn(null, l);
        if (tc(t), (l = xl) ? (l = sd(
          l,
          xt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: re !== null ? { id: Bt, overflow: qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Bo(l), e.return = t, t.child = e, Fl = t, xl = null)) : l = null, l === null) throw me(t);
        return t.lanes = 536870912, null;
      }
      return zu(t, a);
    }
    var u = l.memoizedState;
    if (u !== null) {
      var i = u.dehydrated;
      if (tc(t), n)
        if (t.flags & 256)
          t.flags &= -257, t = Is(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Zl || pa(l, t, e, !1), n = (e & l.childLanes) !== 0, Zl || n) {
        if (a = El, a !== null && (i = Qf(a, e), i !== 0 && i !== u.retryLane))
          throw u.retryLane = i, Xe(l, i), ot(a, l, i), Ac;
        Ru(), t = Is(
          l,
          t,
          e
        );
      } else
        l = u.treeContext, xl = Ut(i.nextSibling), Fl = t, fl = !0, de = null, xt = !1, l !== null && jo(t, l), t = zu(t, a), t.flags |= 4096;
      return t;
    }
    return l = Vt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Au(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(o(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function Tc(l, t, e, a, n) {
    return Ve(t), e = ac(
      l,
      t,
      e,
      a,
      void 0,
      n
    ), a = nc(), l !== null && !Zl ? (uc(l, t, n), $t(l, t, n)) : (fl && a && ji(t), t.flags |= 1, Pl(l, t, e, n), t.child);
  }
  function Ps(l, t, e, a, n, u) {
    return Ve(t), t.updateQueue = null, e = es(
      t,
      a,
      e,
      n
    ), ts(l), a = nc(), l !== null && !Zl ? (uc(l, t, u), $t(l, t, u)) : (fl && a && ji(t), t.flags |= 1, Pl(l, t, e, u), t.child);
  }
  function lr(l, t, e, a, n) {
    if (Ve(t), t.stateNode === null) {
      var u = ya, i = e.contextType;
      typeof i == "object" && i !== null && (u = Il(i)), u = new e(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Sc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Wi(t), i = e.contextType, u.context = typeof i == "object" && i !== null ? Il(i) : ya, u.state = t.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (pc(
        t,
        e,
        i,
        a
      ), u.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Sc.enqueueReplaceState(u, u.state, null), on(t, a, u, n), fn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      u = t.stateNode;
      var c = t.memoizedProps, r = $e(e, c);
      u.props = r;
      var y = u.context, T = e.contextType;
      i = ya, typeof T == "object" && T !== null && (i = Il(T));
      var _ = e.getDerivedStateFromProps;
      T = typeof _ == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, T || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || y !== i) && Xs(
        t,
        u,
        a,
        i
      ), ye = !1;
      var v = t.memoizedState;
      u.state = v, on(t, a, u, n), fn(), y = t.memoizedState, c || v !== y || ye ? (typeof _ == "function" && (pc(
        t,
        e,
        _,
        a
      ), y = t.memoizedState), (r = ye || Gs(
        t,
        e,
        r,
        a,
        v,
        y,
        i
      )) ? (T || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = y), u.props = a, u.state = y, u.context = i, a = r) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, $i(l, t), i = t.memoizedProps, T = $e(e, i), u.props = T, _ = t.pendingProps, v = u.context, y = e.contextType, r = ya, typeof y == "object" && y !== null && (r = Il(y)), c = e.getDerivedStateFromProps, (y = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== _ || v !== r) && Xs(
        t,
        u,
        a,
        r
      ), ye = !1, v = t.memoizedState, u.state = v, on(t, a, u, n), fn();
      var b = t.memoizedState;
      i !== _ || v !== b || ye || l !== null && l.dependencies !== null && au(l.dependencies) ? (typeof c == "function" && (pc(
        t,
        e,
        c,
        a
      ), b = t.memoizedState), (T = ye || Gs(
        t,
        e,
        T,
        a,
        v,
        b,
        r
      ) || l !== null && l.dependencies !== null && au(l.dependencies)) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, b, r), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        b,
        r
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = b), u.props = a, u.state = b, u.context = r, a = T) : (typeof u.componentDidUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === l.memoizedProps && v === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Au(l, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, l !== null && a ? (t.child = ke(
      t,
      l.child,
      null,
      n
    ), t.child = ke(
      t,
      null,
      e,
      n
    )) : Pl(l, t, e, n), t.memoizedState = u.state, l = t.child) : l = $t(
      l,
      t,
      n
    ), l;
  }
  function tr(l, t, e, a) {
    return Ze(), t.flags |= 256, Pl(l, t, e, a), t.child;
  }
  var Ec = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Mc(l) {
    return { baseLanes: l, cachePool: Vo() };
  }
  function _c(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= bt), l;
  }
  function er(l, t, e) {
    var a = t.pendingProps, n = !1, u = (t.flags & 128) !== 0, i;
    if ((i = u) || (i = l !== null && l.memoizedState === null ? !1 : (ql.current & 2) !== 0), i && (n = !0, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (fl) {
        if (n ? be(t) : pe(), (l = xl) ? (l = sd(
          l,
          xt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: re !== null ? { id: Bt, overflow: qt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Bo(l), e.return = t, t.child = e, Fl = t, xl = null)) : l = null, l === null) throw me(t);
        return of(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, n ? (pe(), n = t.mode, c = Tu(
        { mode: "hidden", children: c },
        n
      ), a = Qe(
        a,
        n,
        e,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = Mc(e), a.childLanes = _c(
        l,
        i,
        e
      ), t.memoizedState = Ec, hn(null, a)) : (be(t), Oc(t, c));
    }
    var r = l.memoizedState;
    if (r !== null && (c = r.dehydrated, c !== null)) {
      if (u)
        t.flags & 256 ? (be(t), t.flags &= -257, t = xc(
          l,
          t,
          e
        )) : t.memoizedState !== null ? (pe(), t.child = l.child, t.flags |= 128, t = null) : (pe(), c = a.fallback, n = t.mode, a = Tu(
          { mode: "visible", children: a.children },
          n
        ), c = Qe(
          c,
          n,
          e,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, ke(
          t,
          l.child,
          null,
          e
        ), a = t.child, a.memoizedState = Mc(e), a.childLanes = _c(
          l,
          i,
          e
        ), t.memoizedState = Ec, t = hn(null, a));
      else if (be(t), of(c)) {
        if (i = c.nextSibling && c.nextSibling.dataset, i) var y = i.dgst;
        i = y, a = Error(o(419)), a.stack = "", a.digest = i, tn({ value: a, source: null, stack: null }), t = xc(
          l,
          t,
          e
        );
      } else if (Zl || pa(l, t, e, !1), i = (e & l.childLanes) !== 0, Zl || i) {
        if (i = El, i !== null && (a = Qf(i, e), a !== 0 && a !== r.retryLane))
          throw r.retryLane = a, Xe(l, a), ot(i, l, a), Ac;
        ff(c) || Ru(), t = xc(
          l,
          t,
          e
        );
      } else
        ff(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = r.treeContext, xl = Ut(
          c.nextSibling
        ), Fl = t, fl = !0, de = null, xt = !1, l !== null && jo(t, l), t = Oc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return n ? (pe(), c = a.fallback, n = t.mode, r = l.child, y = r.sibling, a = Vt(r, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = r.subtreeFlags & 65011712, y !== null ? c = Vt(
      y,
      c
    ) : (c = Qe(
      c,
      n,
      e,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, hn(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = Mc(e) : (n = c.cachePool, n !== null ? (r = Xl._currentValue, n = n.parent !== r ? { parent: r, pool: r } : n) : n = Vo(), c = {
      baseLanes: c.baseLanes | e,
      cachePool: n
    }), a.memoizedState = c, a.childLanes = _c(
      l,
      i,
      e
    ), t.memoizedState = Ec, hn(l.child, a)) : (be(t), e = l.child, l = e.sibling, e = Vt(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (i = t.deletions, i === null ? (t.deletions = [l], t.flags |= 16) : i.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function Oc(l, t) {
    return t = Tu(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function Tu(l, t) {
    return l = ht(22, l, null, t), l.lanes = 0, l;
  }
  function xc(l, t, e) {
    return ke(t, l.child, null, e), l = Oc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function ar(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Li(l.return, t, e);
  }
  function Dc(l, t, e, a, n, u) {
    var i = l.memoizedState;
    i === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: n,
      treeForkCount: u
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
  }
  function nr(l, t, e) {
    var a = t.pendingProps, n = a.revealOrder, u = a.tail;
    a = a.children;
    var i = ql.current, c = (i & 2) !== 0;
    if (c ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, D(ql, i), Pl(l, t, a, e), a = fl ? ln : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && ar(l, e, t);
        else if (l.tag === 19)
          ar(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (n) {
      case "forwards":
        for (e = t.child, n = null; e !== null; )
          l = e.alternate, l !== null && ru(l) === null && (n = e), e = e.sibling;
        e = n, e === null ? (n = t.child, t.child = null) : (n = e.sibling, e.sibling = null), Dc(
          t,
          !1,
          n,
          e,
          u,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (e = null, n = t.child, t.child = null; n !== null; ) {
          if (l = n.alternate, l !== null && ru(l) === null) {
            t.child = n;
            break;
          }
          l = n.sibling, n.sibling = e, e = n, n = l;
        }
        Dc(
          t,
          !0,
          e,
          null,
          u,
          a
        );
        break;
      case "together":
        Dc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function $t(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), Ae |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (pa(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (l = t.child, e = Vt(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = Vt(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function Uc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && au(l)));
  }
  function Yh(l, t, e) {
    switch (t.tag) {
      case 3:
        Gl(t, t.stateNode.containerInfo), he(t, Xl, l.memoizedState.cache), Ze();
        break;
      case 27:
      case 5:
        ie(t);
        break;
      case 4:
        Gl(t, t.stateNode.containerInfo);
        break;
      case 10:
        he(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, tc(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (be(t), t.flags |= 128, null) : (e & t.child.childLanes) !== 0 ? er(l, t, e) : (be(t), l = $t(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        be(t);
        break;
      case 19:
        var n = (l.flags & 128) !== 0;
        if (a = (e & t.childLanes) !== 0, a || (pa(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), n) {
          if (a)
            return nr(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), D(ql, ql.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, $s(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        he(t, Xl, l.memoizedState.cache);
    }
    return $t(l, t, e);
  }
  function ur(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Zl = !0;
      else {
        if (!Uc(l, e) && (t.flags & 128) === 0)
          return Zl = !1, Yh(
            l,
            t,
            e
          );
        Zl = (l.flags & 131072) !== 0;
      }
    else
      Zl = !1, fl && (t.flags & 1048576) !== 0 && Yo(t, ln, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Ke(t.elementType), t.type = l, typeof l == "function")
            Bi(l) ? (a = $e(l, a), t.tag = 1, t = lr(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = Tc(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var n = l.$$typeof;
              if (n === _l) {
                t.tag = 11, t = Js(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (n === k) {
                t.tag = 14, t = ks(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              }
            }
            throw t = jl(l) || l, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Tc(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, n = $e(
          a,
          t.pendingProps
        ), lr(
          l,
          t,
          a,
          n,
          e
        );
      case 3:
        l: {
          if (Gl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(o(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          n = u.element, $i(l, t), on(t, a, null, e);
          var i = t.memoizedState;
          if (a = i.cache, he(t, Xl, a), a !== u.cache && Vi(
            t,
            [Xl],
            e,
            !0
          ), fn(), a = i.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = tr(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== n) {
              n = Mt(
                Error(o(424)),
                t
              ), tn(n), t = tr(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, xl = Ut(l.firstChild), Fl = t, fl = !0, de = null, xt = !0, e = $o(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 4096, e = e.sibling;
          else {
            if (Ze(), a === n) {
              t = $t(
                l,
                t,
                e
              );
              break l;
            }
            Pl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Au(l, t), l === null ? (e = vd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : fl || (e = t.type, l = t.pendingProps, a = Gu(
          L.current
        ).createElement(e), a[$l] = t, a[at] = l, lt(a, e, l), Kl(a), t.stateNode = a) : t.memoizedState = vd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return ie(t), l === null && fl && (a = t.stateNode = md(
          t.type,
          t.pendingProps,
          L.current
        ), Fl = t, xt = !0, n = xl, Oe(t.type) ? (sf = n, xl = Ut(a.firstChild)) : xl = n), Pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), Au(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && fl && ((n = a = xl) && (a = m0(
          a,
          t.type,
          t.pendingProps,
          xt
        ), a !== null ? (t.stateNode = a, Fl = t, xl = Ut(a.firstChild), xt = !1, n = !0) : n = !1), n || me(t)), ie(t), n = t.type, u = t.pendingProps, i = l !== null ? l.memoizedProps : null, a = u.children, nf(n, u) ? a = null : i !== null && nf(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = ac(
          l,
          t,
          xh,
          null,
          null,
          e
        ), Dn._currentValue = n), Au(l, t), Pl(l, t, a, e), t.child;
      case 6:
        return l === null && fl && ((l = e = xl) && (e = h0(
          e,
          t.pendingProps,
          xt
        ), e !== null ? (t.stateNode = e, Fl = t, xl = null, l = !0) : l = !1), l || me(t)), null;
      case 13:
        return er(l, t, e);
      case 4:
        return Gl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = ke(
          t,
          null,
          a,
          e
        ) : Pl(l, t, a, e), t.child;
      case 11:
        return Js(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return Pl(
          l,
          t,
          t.pendingProps,
          e
        ), t.child;
      case 8:
        return Pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return Pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return a = t.pendingProps, he(t, t.type, a.value), Pl(l, t, a.children, e), t.child;
      case 9:
        return n = t.type._context, a = t.pendingProps.children, Ve(t), n = Il(n), a = a(n), t.flags |= 1, Pl(l, t, a, e), t.child;
      case 14:
        return ks(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return Ws(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return nr(l, t, e);
      case 31:
        return qh(l, t, e);
      case 22:
        return $s(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return Ve(t), a = Il(Xl), l === null ? (n = Ji(), n === null && (n = El, u = wi(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), t.memoizedState = { parent: a, cache: n }, Wi(t), he(t, Xl, n)) : ((l.lanes & e) !== 0 && ($i(l, t), on(t, null, null, e), fn()), n = l.memoizedState, u = t.memoizedState, n.parent !== a ? (n = { parent: a, cache: a }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), he(t, Xl, a)) : (a = u.cache, he(t, Xl, a), a !== n.cache && Vi(
          t,
          [Xl],
          e,
          !0
        ))), Pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Ft(l) {
    l.flags |= 4;
  }
  function Cc(l, t, e, a, n) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (n & 335544128) === n)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Rr()) l.flags |= 8192;
        else
          throw Je = cu, ki;
    } else l.flags &= -16777217;
  }
  function ir(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !zd(t))
      if (Rr()) l.flags |= 8192;
      else
        throw Je = cu, ki;
  }
  function Eu(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? jf() : 536870912, l.lanes |= t, Ca |= t);
  }
  function yn(l, t) {
    if (!fl)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = l.tail;
          for (var a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function Dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = l, n = n.sibling;
    else
      for (n = l.child; n !== null; )
        e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = l, n = n.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function jh(l, t, e) {
    var a = t.pendingProps;
    switch (Gi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Dl(t), null;
      case 1:
        return Dl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Jt(Xl), ll(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (ba(t) ? Ft(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Qi())), Dl(t), null;
      case 26:
        var n = t.type, u = t.memoizedState;
        return l === null ? (Ft(t), u !== null ? (Dl(t), ir(t, u)) : (Dl(t), Cc(
          t,
          n,
          null,
          a,
          e
        ))) : u ? u !== l.memoizedState ? (Ft(t), Dl(t), ir(t, u)) : (Dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Ft(t), Dl(t), Cc(
          t,
          n,
          l,
          a,
          e
        )), null;
      case 27:
        if (Xt(t), e = L.current, n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Dl(t), null;
          }
          l = B.current, ba(t) ? Go(t) : (l = md(n, a, e), t.stateNode = l, Ft(t));
        }
        return Dl(t), null;
      case 5:
        if (Xt(t), n = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ft(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Dl(t), null;
          }
          if (u = B.current, ba(t))
            Go(t);
          else {
            var i = Gu(
              L.current
            );
            switch (u) {
              case 1:
                u = i.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                u = i.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    u = i.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    u = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? i.createElement("select", {
                      is: a.is
                    }) : i.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? i.createElement(n, { is: a.is }) : i.createElement(n);
                }
            }
            u[$l] = t, u[at] = a;
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6)
                u.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                i.child.return = i, i = i.child;
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t)
                  break l;
                i = i.return;
              }
              i.sibling.return = i.return, i = i.sibling;
            }
            t.stateNode = u;
            l: switch (lt(u, n, a), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Ft(t);
          }
        }
        return Dl(t), Cc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Ft(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(o(166));
          if (l = L.current, ba(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, n = Fl, n !== null)
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            l[$l] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || ed(l.nodeValue, e)), l || me(t, !0);
          } else
            l = Gu(l).createTextNode(
              a
            ), l[$l] = t, t.stateNode = l;
        }
        return Dl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ba(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(o(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
              l[$l] = t;
            } else
              Ze(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Dl(t), l = !1;
          } else
            e = Qi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (vt(t), t) : (vt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Dl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (n = ba(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!n) throw Error(o(318));
              if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
              n[$l] = t;
            } else
              Ze(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Dl(t), n = !1;
          } else
            n = Qi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = n), n = !0;
          if (!n)
            return t.flags & 256 ? (vt(t), t) : (vt(t), null);
        }
        return vt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), Eu(t, t.updateQueue), Dl(t), null);
      case 4:
        return ll(), l === null && Pc(t.stateNode.containerInfo), Dl(t), null;
      case 10:
        return Jt(t.type), Dl(t), null;
      case 19:
        if (z(ql), a = t.memoizedState, a === null) return Dl(t), null;
        if (n = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (n) yn(a, !1);
          else {
            if (Bl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (u = ru(l), u !== null) {
                  for (t.flags |= 128, yn(a, !1), l = u.updateQueue, t.updateQueue = l, Eu(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    Ho(e, l), e = e.sibling;
                  return D(
                    ql,
                    ql.current & 1 | 2
                  ), fl && wt(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && st() > Du && (t.flags |= 128, n = !0, yn(a, !1), t.lanes = 4194304);
          }
        else {
          if (!n)
            if (l = ru(u), l !== null) {
              if (t.flags |= 128, n = !0, l = l.updateQueue, t.updateQueue = l, Eu(t, l), yn(a, !0), a.tail === null && a.tailMode === "hidden" && !u.alternate && !fl)
                return Dl(t), null;
            } else
              2 * st() - a.renderingStartTime > Du && e !== 536870912 && (t.flags |= 128, n = !0, yn(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (l = a.last, l !== null ? l.sibling = u : t.child = u, a.last = u);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = st(), l.sibling = null, e = ql.current, D(
          ql,
          n ? e & 1 | 2 : e & 1
        ), fl && wt(t, a.treeForkCount), l) : (Dl(t), null);
      case 22:
      case 23:
        return vt(t), lc(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (Dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Dl(t), e = t.updateQueue, e !== null && Eu(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && z(we), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), Jt(Xl), Dl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Gh(l, t) {
    switch (Gi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Jt(Xl), ll(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Xt(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (vt(t), t.alternate === null)
            throw Error(o(340));
          Ze();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (vt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          Ze();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return z(ql), null;
      case 4:
        return ll(), null;
      case 10:
        return Jt(t.type), null;
      case 22:
      case 23:
        return vt(t), lc(), l !== null && z(we), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Jt(Xl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function cr(l, t) {
    switch (Gi(t), t.tag) {
      case 3:
        Jt(Xl), ll();
        break;
      case 26:
      case 27:
      case 5:
        Xt(t);
        break;
      case 4:
        ll();
        break;
      case 31:
        t.memoizedState !== null && vt(t);
        break;
      case 13:
        vt(t);
        break;
      case 19:
        z(ql);
        break;
      case 10:
        Jt(t.type);
        break;
      case 22:
      case 23:
        vt(t), lc(), l !== null && z(we);
        break;
      case 24:
        Jt(Xl);
    }
  }
  function vn(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var u = e.create, i = e.inst;
            a = u(), i.destroy = a;
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (c) {
      hl(t, t.return, c);
    }
  }
  function Se(l, t, e) {
    try {
      var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var u = n.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            var i = a.inst, c = i.destroy;
            if (c !== void 0) {
              i.destroy = void 0, n = t;
              var r = e, y = c;
              try {
                y();
              } catch (T) {
                hl(
                  n,
                  r,
                  T
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (T) {
      hl(t, t.return, T);
    }
  }
  function fr(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Io(t, e);
      } catch (a) {
        hl(l, l.return, a);
      }
    }
  }
  function or(l, t, e) {
    e.props = $e(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      hl(l, t, a);
    }
  }
  function gn(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (n) {
      hl(l, t, n);
    }
  }
  function Yt(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          hl(l, t, n);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (n) {
          hl(l, t, n);
        }
      else e.current = null;
  }
  function sr(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (n) {
      hl(l, l.return, n);
    }
  }
  function Rc(l, t, e) {
    try {
      var a = l.stateNode;
      c0(a, l.type, e, t), a[at] = t;
    } catch (n) {
      hl(l, l.return, n);
    }
  }
  function rr(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Oe(l.type) || l.tag === 4;
  }
  function Nc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || rr(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Oe(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Hc(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(l, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(l), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = Zt));
    else if (a !== 4 && (a === 27 && Oe(l.type) && (e = l.stateNode, t = null), l = l.child, l !== null))
      for (Hc(l, t, e), l = l.sibling; l !== null; )
        Hc(l, t, e), l = l.sibling;
  }
  function Mu(l, t, e) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? e.insertBefore(l, t) : e.appendChild(l);
    else if (a !== 4 && (a === 27 && Oe(l.type) && (e = l.stateNode), l = l.child, l !== null))
      for (Mu(l, t, e), l = l.sibling; l !== null; )
        Mu(l, t, e), l = l.sibling;
  }
  function dr(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      lt(t, a, e), t[$l] = l, t[at] = e;
    } catch (u) {
      hl(l, l.return, u);
    }
  }
  var It = !1, Ll = !1, Bc = !1, mr = typeof WeakSet == "function" ? WeakSet : Set, Jl = null;
  function Xh(l, t) {
    if (l = l.containerInfo, ef = Ku, l = Mo(l), xi(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, c = -1, r = -1, y = 0, T = 0, _ = l, v = null;
            t: for (; ; ) {
              for (var b; _ !== e || n !== 0 && _.nodeType !== 3 || (c = i + n), _ !== u || a !== 0 && _.nodeType !== 3 || (r = i + a), _.nodeType === 3 && (i += _.nodeValue.length), (b = _.firstChild) !== null; )
                v = _, _ = b;
              for (; ; ) {
                if (_ === l) break t;
                if (v === e && ++y === n && (c = i), v === u && ++T === a && (r = i), (b = _.nextSibling) !== null) break;
                _ = v, v = _.parentNode;
              }
              _ = b;
            }
            e = c === -1 || r === -1 ? null : { start: c, end: r };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (af = { focusedElem: l, selectionRange: e }, Ku = !1, Jl = t; Jl !== null; )
      if (t = Jl, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Jl = l;
      else
        for (; Jl !== null; ) {
          switch (t = Jl, u = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (e = 0; e < l.length; e++)
                  n = l[e], n.ref.impl = n.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && u !== null) {
                l = void 0, e = t, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
                try {
                  var G = $e(
                    e.type,
                    n
                  );
                  l = a.getSnapshotBeforeUpdate(
                    G,
                    u
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (W) {
                  hl(
                    e,
                    e.return,
                    W
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, e = l.nodeType, e === 9)
                  cf(l);
                else if (e === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      cf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(o(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Jl = l;
            break;
          }
          Jl = t.return;
        }
  }
  function hr(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        le(l, e), a & 4 && vn(5, e);
        break;
      case 1:
        if (le(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (i) {
              hl(e, e.return, i);
            }
          else {
            var n = $e(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                n,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (i) {
              hl(
                e,
                e.return,
                i
              );
            }
          }
        a & 64 && fr(e), a & 512 && gn(e, e.return);
        break;
      case 3:
        if (le(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Io(l, t);
          } catch (i) {
            hl(e, e.return, i);
          }
        }
        break;
      case 27:
        t === null && a & 4 && dr(e);
      case 26:
      case 5:
        le(l, e), t === null && a & 4 && sr(e), a & 512 && gn(e, e.return);
        break;
      case 12:
        le(l, e);
        break;
      case 31:
        le(l, e), a & 4 && gr(l, e);
        break;
      case 13:
        le(l, e), a & 4 && br(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Wh.bind(
          null,
          e
        ), y0(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || It, !a) {
          t = t !== null && t.memoizedState !== null || Ll, n = It;
          var u = Ll;
          It = a, (Ll = t) && !u ? te(
            l,
            e,
            (e.subtreeFlags & 8772) !== 0
          ) : le(l, e), It = n, Ll = u;
        }
        break;
      case 30:
        break;
      default:
        le(l, e);
    }
  }
  function yr(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, yr(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && ri(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var Nl = null, ut = !1;
  function Pt(l, t, e) {
    for (e = e.child; e !== null; )
      vr(l, t, e), e = e.sibling;
  }
  function vr(l, t, e) {
    if (rt && typeof rt.onCommitFiberUnmount == "function")
      try {
        rt.onCommitFiberUnmount(Xa, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        Ll || Yt(e, t), Pt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        Ll || Yt(e, t);
        var a = Nl, n = ut;
        Oe(e.type) && (Nl = e.stateNode, ut = !1), Pt(
          l,
          t,
          e
        ), _n(e.stateNode), Nl = a, ut = n;
        break;
      case 5:
        Ll || Yt(e, t);
      case 6:
        if (a = Nl, n = ut, Nl = null, Pt(
          l,
          t,
          e
        ), Nl = a, ut = n, Nl !== null)
          if (ut)
            try {
              (Nl.nodeType === 9 ? Nl.body : Nl.nodeName === "HTML" ? Nl.ownerDocument.body : Nl).removeChild(e.stateNode);
            } catch (u) {
              hl(
                e,
                t,
                u
              );
            }
          else
            try {
              Nl.removeChild(e.stateNode);
            } catch (u) {
              hl(
                e,
                t,
                u
              );
            }
        break;
      case 18:
        Nl !== null && (ut ? (l = Nl, fd(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), Ga(l)) : fd(Nl, e.stateNode));
        break;
      case 4:
        a = Nl, n = ut, Nl = e.stateNode.containerInfo, ut = !0, Pt(
          l,
          t,
          e
        ), Nl = a, ut = n;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Se(2, e, t), Ll || Se(4, e, t), Pt(
          l,
          t,
          e
        );
        break;
      case 1:
        Ll || (Yt(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && or(
          e,
          t,
          a
        )), Pt(
          l,
          t,
          e
        );
        break;
      case 21:
        Pt(
          l,
          t,
          e
        );
        break;
      case 22:
        Ll = (a = Ll) || e.memoizedState !== null, Pt(
          l,
          t,
          e
        ), Ll = a;
        break;
      default:
        Pt(
          l,
          t,
          e
        );
    }
  }
  function gr(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Ga(l);
      } catch (e) {
        hl(t, t.return, e);
      }
    }
  }
  function br(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Ga(l);
      } catch (e) {
        hl(t, t.return, e);
      }
  }
  function Qh(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new mr()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new mr()), t;
      default:
        throw Error(o(435, l.tag));
    }
  }
  function _u(l, t) {
    var e = Qh(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var n = $h.bind(null, l, a);
        a.then(n, n);
      }
    });
  }
  function it(l, t) {
    var e = t.deletions;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var n = e[a], u = l, i = t, c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Oe(c.type)) {
                Nl = c.stateNode, ut = !1;
                break l;
              }
              break;
            case 5:
              Nl = c.stateNode, ut = !1;
              break l;
            case 3:
            case 4:
              Nl = c.stateNode.containerInfo, ut = !0;
              break l;
          }
          c = c.return;
        }
        if (Nl === null) throw Error(o(160));
        vr(u, i, n), Nl = null, ut = !1, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        pr(t, l), t = t.sibling;
  }
  var Nt = null;
  function pr(l, t) {
    var e = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        it(t, l), ct(l), a & 4 && (Se(3, l, l.return), vn(3, l), Se(5, l, l.return));
        break;
      case 1:
        it(t, l), ct(l), a & 512 && (Ll || e === null || Yt(e, e.return)), a & 64 && It && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
        break;
      case 26:
        var n = Nt;
        if (it(t, l), ct(l), a & 512 && (Ll || e === null || Yt(e, e.return)), a & 4) {
          var u = e !== null ? e.memoizedState : null;
          if (a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, e = l.memoizedProps, n = n.ownerDocument || n;
                  t: switch (a) {
                    case "title":
                      u = n.getElementsByTagName("title")[0], (!u || u[La] || u[$l] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(
                        u,
                        n.querySelector("head > title")
                      )), lt(u, a, e), u[$l] = l, Kl(u), a = u;
                      break l;
                    case "link":
                      var i = pd(
                        "link",
                        "href",
                        n
                      ).get(a + (e.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), lt(u, a, e), n.head.appendChild(u);
                      break;
                    case "meta":
                      if (i = pd(
                        "meta",
                        "content",
                        n
                      ).get(a + (e.content || ""))) {
                        for (c = 0; c < i.length; c++)
                          if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      u = n.createElement(a), lt(u, a, e), n.head.appendChild(u);
                      break;
                    default:
                      throw Error(o(468, a));
                  }
                  u[$l] = l, Kl(u), a = u;
                }
                l.stateNode = a;
              } else
                Sd(
                  n,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = bd(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? Sd(
              n,
              l.type,
              l.stateNode
            ) : bd(
              n,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && Rc(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        }
        break;
      case 27:
        it(t, l), ct(l), a & 512 && (Ll || e === null || Yt(e, e.return)), e !== null && a & 4 && Rc(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (it(t, l), ct(l), a & 512 && (Ll || e === null || Yt(e, e.return)), l.flags & 32) {
          n = l.stateNode;
          try {
            fa(n, "");
          } catch (G) {
            hl(l, l.return, G);
          }
        }
        a & 4 && l.stateNode != null && (n = l.memoizedProps, Rc(
          l,
          n,
          e !== null ? e.memoizedProps : n
        )), a & 1024 && (Bc = !0);
        break;
      case 6:
        if (it(t, l), ct(l), a & 4) {
          if (l.stateNode === null)
            throw Error(o(162));
          a = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = a;
          } catch (G) {
            hl(l, l.return, G);
          }
        }
        break;
      case 3:
        if (Zu = null, n = Nt, Nt = Xu(t.containerInfo), it(t, l), Nt = n, ct(l), a & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            Ga(t.containerInfo);
          } catch (G) {
            hl(l, l.return, G);
          }
        Bc && (Bc = !1, Sr(l));
        break;
      case 4:
        a = Nt, Nt = Xu(
          l.stateNode.containerInfo
        ), it(t, l), ct(l), Nt = a;
        break;
      case 12:
        it(t, l), ct(l);
        break;
      case 31:
        it(t, l), ct(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, _u(l, a)));
        break;
      case 13:
        it(t, l), ct(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (xu = st()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, _u(l, a)));
        break;
      case 22:
        n = l.memoizedState !== null;
        var r = e !== null && e.memoizedState !== null, y = It, T = Ll;
        if (It = y || n, Ll = T || r, it(t, l), Ll = T, It = y, ct(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (e === null || r || It || Ll || Fe(l)), e = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (e === null) {
                r = e = t;
                try {
                  if (u = r.stateNode, n)
                    i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = r.stateNode;
                    var _ = r.memoizedProps.style, v = _ != null && _.hasOwnProperty("display") ? _.display : null;
                    c.style.display = v == null || typeof v == "boolean" ? "" : ("" + v).trim();
                  }
                } catch (G) {
                  hl(r, r.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (e === null) {
                r = t;
                try {
                  r.stateNode.nodeValue = n ? "" : r.memoizedProps;
                } catch (G) {
                  hl(r, r.return, G);
                }
              }
            } else if (t.tag === 18) {
              if (e === null) {
                r = t;
                try {
                  var b = r.stateNode;
                  n ? od(b, !0) : od(r.stateNode, !1);
                } catch (G) {
                  hl(r, r.return, G);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              e === t && (e = null), t = t.return;
            }
            e === t && (e = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, _u(l, e))));
        break;
      case 19:
        it(t, l), ct(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, _u(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        it(t, l), ct(l);
    }
  }
  function ct(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (rr(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        if (e == null) throw Error(o(160));
        switch (e.tag) {
          case 27:
            var n = e.stateNode, u = Nc(l);
            Mu(l, u, n);
            break;
          case 5:
            var i = e.stateNode;
            e.flags & 32 && (fa(i, ""), e.flags &= -33);
            var c = Nc(l);
            Mu(l, c, i);
            break;
          case 3:
          case 4:
            var r = e.stateNode.containerInfo, y = Nc(l);
            Hc(
              l,
              y,
              r
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (T) {
        hl(l, l.return, T);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Sr(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Sr(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function le(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        hr(l, t.alternate, t), t = t.sibling;
  }
  function Fe(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Se(4, t, t.return), Fe(t);
          break;
        case 1:
          Yt(t, t.return);
          var e = t.stateNode;
          typeof e.componentWillUnmount == "function" && or(
            t,
            t.return,
            e
          ), Fe(t);
          break;
        case 27:
          _n(t.stateNode);
        case 26:
        case 5:
          Yt(t, t.return), Fe(t);
          break;
        case 22:
          t.memoizedState === null && Fe(t);
          break;
        case 30:
          Fe(t);
          break;
        default:
          Fe(t);
      }
      l = l.sibling;
    }
  }
  function te(l, t, e) {
    for (e = e && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, n = l, u = t, i = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          te(
            n,
            u,
            e
          ), vn(4, u);
          break;
        case 1:
          if (te(
            n,
            u,
            e
          ), a = u, n = a.stateNode, typeof n.componentDidMount == "function")
            try {
              n.componentDidMount();
            } catch (y) {
              hl(a, a.return, y);
            }
          if (a = u, n = a.updateQueue, n !== null) {
            var c = a.stateNode;
            try {
              var r = n.shared.hiddenCallbacks;
              if (r !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < r.length; n++)
                  Fo(r[n], c);
            } catch (y) {
              hl(a, a.return, y);
            }
          }
          e && i & 64 && fr(u), gn(u, u.return);
          break;
        case 27:
          dr(u);
        case 26:
        case 5:
          te(
            n,
            u,
            e
          ), e && a === null && i & 4 && sr(u), gn(u, u.return);
          break;
        case 12:
          te(
            n,
            u,
            e
          );
          break;
        case 31:
          te(
            n,
            u,
            e
          ), e && i & 4 && gr(n, u);
          break;
        case 13:
          te(
            n,
            u,
            e
          ), e && i & 4 && br(n, u);
          break;
        case 22:
          u.memoizedState === null && te(
            n,
            u,
            e
          ), gn(u, u.return);
          break;
        case 30:
          break;
        default:
          te(
            n,
            u,
            e
          );
      }
      t = t.sibling;
    }
  }
  function qc(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && en(e));
  }
  function Yc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && en(l));
  }
  function Ht(l, t, e, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        zr(
          l,
          t,
          e,
          a
        ), t = t.sibling;
  }
  function zr(l, t, e, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ht(
          l,
          t,
          e,
          a
        ), n & 2048 && vn(9, t);
        break;
      case 1:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        Ht(
          l,
          t,
          e,
          a
        ), n & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && en(l)));
        break;
      case 12:
        if (n & 2048) {
          Ht(
            l,
            t,
            e,
            a
          ), l = t.stateNode;
          try {
            var u = t.memoizedProps, i = u.id, c = u.onPostCommit;
            typeof c == "function" && c(
              i,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (r) {
            hl(t, t.return, r);
          }
        } else
          Ht(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        Ht(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Ht(
          l,
          t,
          e,
          a
        ) : bn(l, t) : u._visibility & 2 ? Ht(
          l,
          t,
          e,
          a
        ) : (u._visibility |= 2, xa(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), n & 2048 && qc(i, t);
        break;
      case 24:
        Ht(
          l,
          t,
          e,
          a
        ), n & 2048 && Yc(t.alternate, t);
        break;
      default:
        Ht(
          l,
          t,
          e,
          a
        );
    }
  }
  function xa(l, t, e, a, n) {
    for (n = n && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = l, i = t, c = e, r = a, y = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          xa(
            u,
            i,
            c,
            r,
            n
          ), vn(8, i);
          break;
        case 23:
          break;
        case 22:
          var T = i.stateNode;
          i.memoizedState !== null ? T._visibility & 2 ? xa(
            u,
            i,
            c,
            r,
            n
          ) : bn(
            u,
            i
          ) : (T._visibility |= 2, xa(
            u,
            i,
            c,
            r,
            n
          )), n && y & 2048 && qc(
            i.alternate,
            i
          );
          break;
        case 24:
          xa(
            u,
            i,
            c,
            r,
            n
          ), n && y & 2048 && Yc(i.alternate, i);
          break;
        default:
          xa(
            u,
            i,
            c,
            r,
            n
          );
      }
      t = t.sibling;
    }
  }
  function bn(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            bn(e, a), n & 2048 && qc(
              a.alternate,
              a
            );
            break;
          case 24:
            bn(e, a), n & 2048 && Yc(a.alternate, a);
            break;
          default:
            bn(e, a);
        }
        t = t.sibling;
      }
  }
  var pn = 8192;
  function Da(l, t, e) {
    if (l.subtreeFlags & pn)
      for (l = l.child; l !== null; )
        Ar(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function Ar(l, t, e) {
    switch (l.tag) {
      case 26:
        Da(
          l,
          t,
          e
        ), l.flags & pn && l.memoizedState !== null && O0(
          e,
          Nt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        Da(
          l,
          t,
          e
        );
        break;
      case 3:
      case 4:
        var a = Nt;
        Nt = Xu(l.stateNode.containerInfo), Da(
          l,
          t,
          e
        ), Nt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = pn, pn = 16777216, Da(
          l,
          t,
          e
        ), pn = a) : Da(
          l,
          t,
          e
        ));
        break;
      default:
        Da(
          l,
          t,
          e
        );
    }
  }
  function Tr(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Sn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Jl = a, Mr(
            a,
            l
          );
        }
      Tr(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        Er(l), l = l.sibling;
  }
  function Er(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Sn(l), l.flags & 2048 && Se(9, l, l.return);
        break;
      case 3:
        Sn(l);
        break;
      case 12:
        Sn(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, Ou(l)) : Sn(l);
        break;
      default:
        Sn(l);
    }
  }
  function Ou(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Jl = a, Mr(
            a,
            l
          );
        }
      Tr(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, t, t.return), Ou(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, Ou(t));
          break;
        default:
          Ou(t);
      }
      l = l.sibling;
    }
  }
  function Mr(l, t) {
    for (; Jl !== null; ) {
      var e = Jl;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Se(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          en(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Jl = a;
      else
        l: for (e = l; Jl !== null; ) {
          a = Jl;
          var n = a.sibling, u = a.return;
          if (yr(a), a === e) {
            Jl = null;
            break l;
          }
          if (n !== null) {
            n.return = u, Jl = n;
            break l;
          }
          Jl = u;
        }
    }
  }
  var Zh = {
    getCacheForType: function(l) {
      var t = Il(Xl), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Il(Xl).controller.signal;
    }
  }, Lh = typeof WeakMap == "function" ? WeakMap : Map, dl = 0, El = null, el = null, il = 0, ml = 0, gt = null, ze = !1, Ua = !1, jc = !1, ee = 0, Bl = 0, Ae = 0, Ie = 0, Gc = 0, bt = 0, Ca = 0, zn = null, ft = null, Xc = !1, xu = 0, _r = 0, Du = 1 / 0, Uu = null, Te = null, Vl = 0, Ee = null, Ra = null, ae = 0, Qc = 0, Zc = null, Or = null, An = 0, Lc = null;
  function pt() {
    return (dl & 2) !== 0 && il !== 0 ? il & -il : p.T !== null ? Wc() : Zf();
  }
  function xr() {
    if (bt === 0)
      if ((il & 536870912) === 0 || fl) {
        var l = jn;
        jn <<= 1, (jn & 3932160) === 0 && (jn = 262144), bt = l;
      } else bt = 536870912;
    return l = yt.current, l !== null && (l.flags |= 32), bt;
  }
  function ot(l, t, e) {
    (l === El && (ml === 2 || ml === 9) || l.cancelPendingCommit !== null) && (Na(l, 0), Me(
      l,
      il,
      bt,
      !1
    )), Za(l, e), ((dl & 2) === 0 || l !== El) && (l === El && ((dl & 2) === 0 && (Ie |= e), Bl === 4 && Me(
      l,
      il,
      bt,
      !1
    )), jt(l));
  }
  function Dr(l, t, e) {
    if ((dl & 6) !== 0) throw Error(o(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Qa(l, t), n = a ? Kh(l, t) : wc(l, t, !0), u = a;
    do {
      if (n === 0) {
        Ua && !a && Me(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, u && !Vh(e)) {
          n = wc(l, t, !1), u = !1;
          continue;
        }
        if (n === 2) {
          if (u = t, l.errorRecoveryDisabledLanes & u)
            var i = 0;
          else
            i = l.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              n = zn;
              var r = c.current.memoizedState.isDehydrated;
              if (r && (Na(c, i).flags |= 256), i = wc(
                c,
                i,
                !1
              ), i !== 2) {
                if (jc && !r) {
                  c.errorRecoveryDisabledLanes |= u, Ie |= u, n = 4;
                  break l;
                }
                u = ft, ft = n, u !== null && (ft === null ? ft = u : ft.push.apply(
                  ft,
                  u
                ));
              }
              n = i;
            }
            if (u = !1, n !== 2) continue;
          }
        }
        if (n === 1) {
          Na(l, 0), Me(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, u = n, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Me(
                a,
                t,
                bt,
                !ze
              );
              break l;
            case 2:
              ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (n = xu + 300 - st(), 10 < n)) {
            if (Me(
              a,
              t,
              bt,
              !ze
            ), Xn(a, 0, !0) !== 0) break l;
            ae = t, a.timeoutHandle = id(
              Ur.bind(
                null,
                a,
                e,
                ft,
                Uu,
                Xc,
                t,
                bt,
                Ie,
                Ca,
                ze,
                u,
                "Throttled",
                -0,
                0
              ),
              n
            );
            break l;
          }
          Ur(
            a,
            e,
            ft,
            Uu,
            Xc,
            t,
            bt,
            Ie,
            Ca,
            ze,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    jt(l);
  }
  function Ur(l, t, e, a, n, u, i, c, r, y, T, _, v, b) {
    if (l.timeoutHandle = -1, _ = t.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) {
      _ = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Zt
      }, Ar(
        t,
        u,
        _
      );
      var G = (u & 62914560) === u ? xu - st() : (u & 4194048) === u ? _r - st() : 0;
      if (G = x0(
        _,
        G
      ), G !== null) {
        ae = u, l.cancelPendingCommit = G(
          jr.bind(
            null,
            l,
            t,
            u,
            e,
            a,
            n,
            i,
            c,
            r,
            T,
            _,
            null,
            v,
            b
          )
        ), Me(l, u, i, !y);
        return;
      }
    }
    jr(
      l,
      t,
      u,
      e,
      a,
      n,
      i,
      c,
      r
    );
  }
  function Vh(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!mt(u(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Me(l, t, e, a) {
    t &= ~Gc, t &= ~Ie, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var n = t; 0 < n; ) {
      var u = 31 - dt(n), i = 1 << u;
      a[u] = -1, n &= ~i;
    }
    e !== 0 && Gf(l, e, t);
  }
  function Cu() {
    return (dl & 6) === 0 ? (Tn(0), !1) : !0;
  }
  function Vc() {
    if (el !== null) {
      if (ml === 0)
        var l = el.return;
      else
        l = el, Kt = Le = null, ic(l), Ta = null, nn = 0, l = el;
      for (; l !== null; )
        cr(l.alternate, l), l = l.return;
      el = null;
    }
  }
  function Na(l, t) {
    var e = l.timeoutHandle;
    e !== -1 && (l.timeoutHandle = -1, s0(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ae = 0, Vc(), El = l, el = e = Vt(l.current, null), il = t, ml = 0, gt = null, ze = !1, Ua = Qa(l, t), jc = !1, Ca = bt = Gc = Ie = Ae = Bl = 0, ft = zn = null, Xc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var n = 31 - dt(a), u = 1 << n;
        t |= l[n], a &= ~u;
      }
    return ee = t, In(), e;
  }
  function Cr(l, t) {
    F = null, p.H = mn, t === Aa || t === iu ? (t = Jo(), ml = 3) : t === ki ? (t = Jo(), ml = 4) : ml = t === Ac ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, gt = t, el === null && (Bl = 1, Su(
      l,
      Mt(t, l.current)
    ));
  }
  function Rr() {
    var l = yt.current;
    return l === null ? !0 : (il & 4194048) === il ? Dt === null : (il & 62914560) === il || (il & 536870912) !== 0 ? l === Dt : !1;
  }
  function Nr() {
    var l = p.H;
    return p.H = mn, l === null ? mn : l;
  }
  function Hr() {
    var l = p.A;
    return p.A = Zh, l;
  }
  function Ru() {
    Bl = 4, ze || (il & 4194048) !== il && yt.current !== null || (Ua = !0), (Ae & 134217727) === 0 && (Ie & 134217727) === 0 || El === null || Me(
      El,
      il,
      bt,
      !1
    );
  }
  function wc(l, t, e) {
    var a = dl;
    dl |= 2;
    var n = Nr(), u = Hr();
    (El !== l || il !== t) && (Uu = null, Na(l, t)), t = !1;
    var i = Bl;
    l: do
      try {
        if (ml !== 0 && el !== null) {
          var c = el, r = gt;
          switch (ml) {
            case 8:
              Vc(), i = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              yt.current === null && (t = !0);
              var y = ml;
              if (ml = 0, gt = null, Ha(l, c, r, y), e && Ua) {
                i = 0;
                break l;
              }
              break;
            default:
              y = ml, ml = 0, gt = null, Ha(l, c, r, y);
          }
        }
        wh(), i = Bl;
        break;
      } catch (T) {
        Cr(l, T);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Kt = Le = null, dl = a, p.H = n, p.A = u, el === null && (El = null, il = 0, In()), i;
  }
  function wh() {
    for (; el !== null; ) Br(el);
  }
  function Kh(l, t) {
    var e = dl;
    dl |= 2;
    var a = Nr(), n = Hr();
    El !== l || il !== t ? (Uu = null, Du = st() + 500, Na(l, t)) : Ua = Qa(
      l,
      t
    );
    l: do
      try {
        if (ml !== 0 && el !== null) {
          t = el;
          var u = gt;
          t: switch (ml) {
            case 1:
              ml = 0, gt = null, Ha(l, t, u, 1);
              break;
            case 2:
            case 9:
              if (wo(u)) {
                ml = 0, gt = null, qr(t);
                break;
              }
              t = function() {
                ml !== 2 && ml !== 9 || El !== l || (ml = 7), jt(l);
              }, u.then(t, t);
              break l;
            case 3:
              ml = 7;
              break l;
            case 4:
              ml = 5;
              break l;
            case 7:
              wo(u) ? (ml = 0, gt = null, qr(t)) : (ml = 0, gt = null, Ha(l, t, u, 7));
              break;
            case 5:
              var i = null;
              switch (el.tag) {
                case 26:
                  i = el.memoizedState;
                case 5:
                case 27:
                  var c = el;
                  if (i ? zd(i) : c.stateNode.complete) {
                    ml = 0, gt = null;
                    var r = c.sibling;
                    if (r !== null) el = r;
                    else {
                      var y = c.return;
                      y !== null ? (el = y, Nu(y)) : el = null;
                    }
                    break t;
                  }
              }
              ml = 0, gt = null, Ha(l, t, u, 5);
              break;
            case 6:
              ml = 0, gt = null, Ha(l, t, u, 6);
              break;
            case 8:
              Vc(), Bl = 6;
              break l;
            default:
              throw Error(o(462));
          }
        }
        Jh();
        break;
      } catch (T) {
        Cr(l, T);
      }
    while (!0);
    return Kt = Le = null, p.H = a, p.A = n, dl = e, el !== null ? 0 : (El = null, il = 0, In(), Bl);
  }
  function Jh() {
    for (; el !== null && !vm(); )
      Br(el);
  }
  function Br(l) {
    var t = ur(l.alternate, l, ee);
    l.memoizedProps = l.pendingProps, t === null ? Nu(l) : el = t;
  }
  function qr(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ps(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          il
        );
        break;
      case 11:
        t = Ps(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          il
        );
        break;
      case 5:
        ic(t);
      default:
        cr(e, t), t = el = Ho(t, ee), t = ur(e, t, ee);
    }
    l.memoizedProps = l.pendingProps, t === null ? Nu(l) : el = t;
  }
  function Ha(l, t, e, a) {
    Kt = Le = null, ic(t), Ta = null, nn = 0;
    var n = t.return;
    try {
      if (Bh(
        l,
        n,
        t,
        e,
        il
      )) {
        Bl = 1, Su(
          l,
          Mt(e, l.current)
        ), el = null;
        return;
      }
    } catch (u) {
      if (n !== null) throw el = n, u;
      Bl = 1, Su(
        l,
        Mt(e, l.current)
      ), el = null;
      return;
    }
    t.flags & 32768 ? (fl || a === 1 ? l = !0 : Ua || (il & 536870912) !== 0 ? l = !1 : (ze = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Yr(t, l)) : Nu(t);
  }
  function Nu(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Yr(
          t,
          ze
        );
        return;
      }
      l = t.return;
      var e = jh(
        t.alternate,
        t,
        ee
      );
      if (e !== null) {
        el = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        el = t;
        return;
      }
      el = t = l;
    } while (t !== null);
    Bl === 0 && (Bl = 5);
  }
  function Yr(l, t) {
    do {
      var e = Gh(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, el = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        el = l;
        return;
      }
      el = l = e;
    } while (l !== null);
    Bl = 6, el = null;
  }
  function jr(l, t, e, a, n, u, i, c, r) {
    l.cancelPendingCommit = null;
    do
      Hu();
    while (Vl !== 0);
    if ((dl & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === l.current) throw Error(o(177));
      if (u = t.lanes | t.childLanes, u |= Ni, _m(
        l,
        e,
        u,
        i,
        c,
        r
      ), l === El && (el = El = null, il = 0), Ra = t, Ee = l, ae = e, Qc = u, Zc = n, Or = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Fh(qn, function() {
        return Lr(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = p.T, p.T = null, n = U.p, U.p = 2, i = dl, dl |= 4;
        try {
          Xh(l, t, e);
        } finally {
          dl = i, U.p = n, p.T = a;
        }
      }
      Vl = 1, Gr(), Xr(), Qr();
    }
  }
  function Gr() {
    if (Vl === 1) {
      Vl = 0;
      var l = Ee, t = Ra, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = p.T, p.T = null;
        var a = U.p;
        U.p = 2;
        var n = dl;
        dl |= 4;
        try {
          pr(t, l);
          var u = af, i = Mo(l.containerInfo), c = u.focusedElem, r = u.selectionRange;
          if (i !== c && c && c.ownerDocument && Eo(
            c.ownerDocument.documentElement,
            c
          )) {
            if (r !== null && xi(c)) {
              var y = r.start, T = r.end;
              if (T === void 0 && (T = y), "selectionStart" in c)
                c.selectionStart = y, c.selectionEnd = Math.min(
                  T,
                  c.value.length
                );
              else {
                var _ = c.ownerDocument || document, v = _ && _.defaultView || window;
                if (v.getSelection) {
                  var b = v.getSelection(), G = c.textContent.length, W = Math.min(r.start, G), Sl = r.end === void 0 ? W : Math.min(r.end, G);
                  !b.extend && W > Sl && (i = Sl, Sl = W, W = i);
                  var m = To(
                    c,
                    W
                  ), d = To(
                    c,
                    Sl
                  );
                  if (m && d && (b.rangeCount !== 1 || b.anchorNode !== m.node || b.anchorOffset !== m.offset || b.focusNode !== d.node || b.focusOffset !== d.offset)) {
                    var h = _.createRange();
                    h.setStart(m.node, m.offset), b.removeAllRanges(), W > Sl ? (b.addRange(h), b.extend(d.node, d.offset)) : (h.setEnd(d.node, d.offset), b.addRange(h));
                  }
                }
              }
            }
            for (_ = [], b = c; b = b.parentNode; )
              b.nodeType === 1 && _.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < _.length; c++) {
              var M = _[c];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          Ku = !!ef, af = ef = null;
        } finally {
          dl = n, U.p = a, p.T = e;
        }
      }
      l.current = t, Vl = 2;
    }
  }
  function Xr() {
    if (Vl === 2) {
      Vl = 0;
      var l = Ee, t = Ra, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = p.T, p.T = null;
        var a = U.p;
        U.p = 2;
        var n = dl;
        dl |= 4;
        try {
          hr(l, t.alternate, t);
        } finally {
          dl = n, U.p = a, p.T = e;
        }
      }
      Vl = 3;
    }
  }
  function Qr() {
    if (Vl === 4 || Vl === 3) {
      Vl = 0, gm();
      var l = Ee, t = Ra, e = ae, a = Or;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Vl = 5 : (Vl = 0, Ra = Ee = null, Zr(l, l.pendingLanes));
      var n = l.pendingLanes;
      if (n === 0 && (Te = null), oi(e), t = t.stateNode, rt && typeof rt.onCommitFiberRoot == "function")
        try {
          rt.onCommitFiberRoot(
            Xa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = p.T, n = U.p, U.p = 2, p.T = null;
        try {
          for (var u = l.onRecoverableError, i = 0; i < a.length; i++) {
            var c = a[i];
            u(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          p.T = t, U.p = n;
        }
      }
      (ae & 3) !== 0 && Hu(), jt(l), n = l.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? l === Lc ? An++ : (An = 0, Lc = l) : An = 0, Tn(0);
    }
  }
  function Zr(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, en(t)));
  }
  function Hu() {
    return Gr(), Xr(), Qr(), Lr();
  }
  function Lr() {
    if (Vl !== 5) return !1;
    var l = Ee, t = Qc;
    Qc = 0;
    var e = oi(ae), a = p.T, n = U.p;
    try {
      U.p = 32 > e ? 32 : e, p.T = null, e = Zc, Zc = null;
      var u = Ee, i = ae;
      if (Vl = 0, Ra = Ee = null, ae = 0, (dl & 6) !== 0) throw Error(o(331));
      var c = dl;
      if (dl |= 4, Er(u.current), zr(
        u,
        u.current,
        i,
        e
      ), dl = c, Tn(0, !1), rt && typeof rt.onPostCommitFiberRoot == "function")
        try {
          rt.onPostCommitFiberRoot(Xa, u);
        } catch {
        }
      return !0;
    } finally {
      U.p = n, p.T = a, Zr(l, t);
    }
  }
  function Vr(l, t, e) {
    t = Mt(e, t), t = zc(l.stateNode, t, 2), l = ge(l, t, 2), l !== null && (Za(l, 2), jt(l));
  }
  function hl(l, t, e) {
    if (l.tag === 3)
      Vr(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Vr(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Te === null || !Te.has(a))) {
            l = Mt(e, l), e = ws(2), a = ge(t, e, 2), a !== null && (Ks(
              e,
              a,
              t,
              l
            ), Za(a, 2), jt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Kc(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Lh();
      var n = /* @__PURE__ */ new Set();
      a.set(t, n);
    } else
      n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
    n.has(e) || (jc = !0, n.add(e), l = kh.bind(null, l, t, e), t.then(l, l));
  }
  function kh(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, El === l && (il & e) === e && (Bl === 4 || Bl === 3 && (il & 62914560) === il && 300 > st() - xu ? (dl & 2) === 0 && Na(l, 0) : Gc |= e, Ca === il && (Ca = 0)), jt(l);
  }
  function wr(l, t) {
    t === 0 && (t = jf()), l = Xe(l, t), l !== null && (Za(l, t), jt(l));
  }
  function Wh(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), wr(l, e);
  }
  function $h(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, n = l.memoizedState;
        n !== null && (e = n.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(t), wr(l, e);
  }
  function Fh(l, t) {
    return ui(l, t);
  }
  var Bu = null, Ba = null, Jc = !1, qu = !1, kc = !1, _e = 0;
  function jt(l) {
    l !== Ba && l.next === null && (Ba === null ? Bu = Ba = l : Ba = Ba.next = l), qu = !0, Jc || (Jc = !0, Ph());
  }
  function Tn(l, t) {
    if (!kc && qu) {
      kc = !0;
      do
        for (var e = !1, a = Bu; a !== null; ) {
          if (l !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var u = 0;
            else {
              var i = a.suspendedLanes, c = a.pingedLanes;
              u = (1 << 31 - dt(42 | l) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (e = !0, Wr(a, u));
          } else
            u = il, u = Xn(
              a,
              a === El ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Qa(a, u) || (e = !0, Wr(a, u));
          a = a.next;
        }
      while (e);
      kc = !1;
    }
  }
  function Ih() {
    Kr();
  }
  function Kr() {
    qu = Jc = !1;
    var l = 0;
    _e !== 0 && o0() && (l = _e);
    for (var t = st(), e = null, a = Bu; a !== null; ) {
      var n = a.next, u = Jr(a, t);
      u === 0 ? (a.next = null, e === null ? Bu = n : e.next = n, n === null && (Ba = e)) : (e = a, (l !== 0 || (u & 3) !== 0) && (qu = !0)), a = n;
    }
    Vl !== 0 && Vl !== 5 || Tn(l), _e !== 0 && (_e = 0);
  }
  function Jr(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, n = l.expirationTimes, u = l.pendingLanes & -62914561; 0 < u; ) {
      var i = 31 - dt(u), c = 1 << i, r = n[i];
      r === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = Mm(c, t)) : r <= t && (l.expiredLanes |= c), u &= ~c;
    }
    if (t = El, e = il, e = Xn(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (ml === 2 || ml === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && ii(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || Qa(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && ii(a), oi(e)) {
        case 2:
        case 8:
          e = qf;
          break;
        case 32:
          e = qn;
          break;
        case 268435456:
          e = Yf;
          break;
        default:
          e = qn;
      }
      return a = kr.bind(null, l), e = ui(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && ii(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function kr(l, t) {
    if (Vl !== 0 && Vl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (Hu() && l.callbackNode !== e)
      return null;
    var a = il;
    return a = Xn(
      l,
      l === El ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Dr(l, a, t), Jr(l, st()), l.callbackNode != null && l.callbackNode === e ? kr.bind(null, l) : null);
  }
  function Wr(l, t) {
    if (Hu()) return null;
    Dr(l, t, !0);
  }
  function Ph() {
    r0(function() {
      (dl & 6) !== 0 ? ui(
        Bf,
        Ih
      ) : Kr();
    });
  }
  function Wc() {
    if (_e === 0) {
      var l = Sa;
      l === 0 && (l = Yn, Yn <<= 1, (Yn & 261888) === 0 && (Yn = 256)), _e = l;
    }
    return _e;
  }
  function $r(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Vn("" + l);
  }
  function Fr(l, t) {
    var e = t.ownerDocument.createElement("input");
    return e.name = t.name, e.value = t.value, l.id && e.setAttribute("form", l.id), t.parentNode.insertBefore(e, t), l = new FormData(l), e.parentNode.removeChild(e), l;
  }
  function l0(l, t, e, a, n) {
    if (t === "submit" && e && e.stateNode === n) {
      var u = $r(
        (n[at] || null).action
      ), i = a.submitter;
      i && (t = (t = i[at] || null) ? $r(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
      var c = new kn(
        "action",
        "action",
        null,
        a,
        n
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (_e !== 0) {
                  var r = i ? Fr(n, i) : new FormData(n);
                  yc(
                    e,
                    {
                      pending: !0,
                      data: r,
                      method: n.method,
                      action: u
                    },
                    null,
                    r
                  );
                }
              } else
                typeof u == "function" && (c.preventDefault(), r = i ? Fr(n, i) : new FormData(n), yc(
                  e,
                  {
                    pending: !0,
                    data: r,
                    method: n.method,
                    action: u
                  },
                  u,
                  r
                ));
            },
            currentTarget: n
          }
        ]
      });
    }
  }
  for (var $c = 0; $c < Ri.length; $c++) {
    var Fc = Ri[$c], t0 = Fc.toLowerCase(), e0 = Fc[0].toUpperCase() + Fc.slice(1);
    Rt(
      t0,
      "on" + e0
    );
  }
  Rt(xo, "onAnimationEnd"), Rt(Do, "onAnimationIteration"), Rt(Uo, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(bh, "onTransitionRun"), Rt(ph, "onTransitionStart"), Rt(Sh, "onTransitionCancel"), Rt(Co, "onTransitionEnd"), ia("onMouseEnter", ["mouseout", "mouseover"]), ia("onMouseLeave", ["mouseout", "mouseover"]), ia("onPointerEnter", ["pointerout", "pointerover"]), ia("onPointerLeave", ["pointerout", "pointerover"]), qe(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), qe(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), qe("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), qe(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), qe(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), qe(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var En = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), a0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(En)
  );
  function Ir(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], n = a.event;
      a = a.listeners;
      l: {
        var u = void 0;
        if (t)
          for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], r = c.instance, y = c.currentTarget;
            if (c = c.listener, r !== u && n.isPropagationStopped())
              break l;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (T) {
              Fn(T);
            }
            n.currentTarget = null, u = r;
          }
        else
          for (i = 0; i < a.length; i++) {
            if (c = a[i], r = c.instance, y = c.currentTarget, c = c.listener, r !== u && n.isPropagationStopped())
              break l;
            u = c, n.currentTarget = y;
            try {
              u(n);
            } catch (T) {
              Fn(T);
            }
            n.currentTarget = null, u = r;
          }
      }
    }
  }
  function al(l, t) {
    var e = t[si];
    e === void 0 && (e = t[si] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (Pr(t, l, 2, !1), e.add(a));
  }
  function Ic(l, t, e) {
    var a = 0;
    t && (a |= 4), Pr(
      e,
      l,
      a,
      t
    );
  }
  var Yu = "_reactListening" + Math.random().toString(36).slice(2);
  function Pc(l) {
    if (!l[Yu]) {
      l[Yu] = !0, wf.forEach(function(e) {
        e !== "selectionchange" && (a0.has(e) || Ic(e, !1, l), Ic(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Yu] || (t[Yu] = !0, Ic("selectionchange", !1, t));
    }
  }
  function Pr(l, t, e, a) {
    switch (xd(t)) {
      case 2:
        var n = C0;
        break;
      case 8:
        n = R0;
        break;
      default:
        n = yf;
    }
    e = n.bind(
      null,
      t,
      e,
      l
    ), n = void 0, !pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = !0), a ? n !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: n
    }) : l.addEventListener(t, e, !0) : n !== void 0 ? l.addEventListener(t, e, {
      passive: n
    }) : l.addEventListener(t, e, !1);
  }
  function lf(l, t, e, a, n) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var r = i.tag;
              if ((r === 3 || r === 4) && i.stateNode.containerInfo === n)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (i = aa(c), i === null) return;
            if (r = i.tag, r === 5 || r === 6 || r === 26 || r === 27) {
              a = u = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    ao(function() {
      var y = u, T = gi(e), _ = [];
      l: {
        var v = Ro.get(l);
        if (v !== void 0) {
          var b = kn, G = l;
          switch (l) {
            case "keypress":
              if (Kn(e) === 0) break l;
            case "keydown":
            case "keyup":
              b = $m;
              break;
            case "focusin":
              G = "focus", b = Ti;
              break;
            case "focusout":
              G = "blur", b = Ti;
              break;
            case "beforeblur":
            case "afterblur":
              b = Ti;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              b = io;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              b = jm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              b = Pm;
              break;
            case xo:
            case Do:
            case Uo:
              b = Qm;
              break;
            case Co:
              b = th;
              break;
            case "scroll":
            case "scrollend":
              b = qm;
              break;
            case "wheel":
              b = ah;
              break;
            case "copy":
            case "cut":
            case "paste":
              b = Lm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              b = fo;
              break;
            case "toggle":
            case "beforetoggle":
              b = uh;
          }
          var W = (t & 4) !== 0, Sl = !W && (l === "scroll" || l === "scrollend"), m = W ? v !== null ? v + "Capture" : null : v;
          W = [];
          for (var d = y, h; d !== null; ) {
            var M = d;
            if (h = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || h === null || m === null || (M = wa(d, m), M != null && W.push(
              Mn(d, M, h)
            )), Sl) break;
            d = d.return;
          }
          0 < W.length && (v = new b(
            v,
            G,
            null,
            e,
            T
          ), _.push({ event: v, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (v = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", v && e !== vi && (G = e.relatedTarget || e.fromElement) && (aa(G) || G[ea]))
            break l;
          if ((b || v) && (v = T.window === T ? T : (v = T.ownerDocument) ? v.defaultView || v.parentWindow : window, b ? (G = e.relatedTarget || e.toElement, b = y, G = G ? aa(G) : null, G !== null && (Sl = H(G), W = G.tag, G !== Sl || W !== 5 && W !== 27 && W !== 6) && (G = null)) : (b = null, G = y), b !== G)) {
            if (W = io, M = "onMouseLeave", m = "onMouseEnter", d = "mouse", (l === "pointerout" || l === "pointerover") && (W = fo, M = "onPointerLeave", m = "onPointerEnter", d = "pointer"), Sl = b == null ? v : Va(b), h = G == null ? v : Va(G), v = new W(
              M,
              d + "leave",
              b,
              e,
              T
            ), v.target = Sl, v.relatedTarget = h, M = null, aa(T) === y && (W = new W(
              m,
              d + "enter",
              G,
              e,
              T
            ), W.target = h, W.relatedTarget = Sl, M = W), Sl = M, b && G)
              t: {
                for (W = n0, m = b, d = G, h = 0, M = m; M; M = W(M))
                  h++;
                M = 0;
                for (var K = d; K; K = W(K))
                  M++;
                for (; 0 < h - M; )
                  m = W(m), h--;
                for (; 0 < M - h; )
                  d = W(d), M--;
                for (; h--; ) {
                  if (m === d || d !== null && m === d.alternate) {
                    W = m;
                    break t;
                  }
                  m = W(m), d = W(d);
                }
                W = null;
              }
            else W = null;
            b !== null && ld(
              _,
              v,
              b,
              W,
              !1
            ), G !== null && Sl !== null && ld(
              _,
              Sl,
              G,
              W,
              !0
            );
          }
        }
        l: {
          if (v = y ? Va(y) : window, b = v.nodeName && v.nodeName.toLowerCase(), b === "select" || b === "input" && v.type === "file")
            var sl = go;
          else if (yo(v))
            if (bo)
              sl = yh;
            else {
              sl = mh;
              var Z = dh;
            }
          else
            b = v.nodeName, !b || b.toLowerCase() !== "input" || v.type !== "checkbox" && v.type !== "radio" ? y && yi(y.elementType) && (sl = go) : sl = hh;
          if (sl && (sl = sl(l, y))) {
            vo(
              _,
              sl,
              e,
              T
            );
            break l;
          }
          Z && Z(l, v, y), l === "focusout" && y && v.type === "number" && y.memoizedProps.value != null && hi(v, "number", v.value);
        }
        switch (Z = y ? Va(y) : window, l) {
          case "focusin":
            (yo(Z) || Z.contentEditable === "true") && (da = Z, Di = y, Pa = null);
            break;
          case "focusout":
            Pa = Di = da = null;
            break;
          case "mousedown":
            Ui = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Ui = !1, _o(_, e, T);
            break;
          case "selectionchange":
            if (gh) break;
          case "keydown":
          case "keyup":
            _o(_, e, T);
        }
        var P;
        if (Mi)
          l: {
            switch (l) {
              case "compositionstart":
                var cl = "onCompositionStart";
                break l;
              case "compositionend":
                cl = "onCompositionEnd";
                break l;
              case "compositionupdate":
                cl = "onCompositionUpdate";
                break l;
            }
            cl = void 0;
          }
        else
          ra ? mo(l, e) && (cl = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (cl = "onCompositionStart");
        cl && (oo && e.locale !== "ko" && (ra || cl !== "onCompositionStart" ? cl === "onCompositionEnd" && ra && (P = no()) : (se = T, Si = "value" in se ? se.value : se.textContent, ra = !0)), Z = ju(y, cl), 0 < Z.length && (cl = new co(
          cl,
          l,
          null,
          e,
          T
        ), _.push({ event: cl, listeners: Z }), P ? cl.data = P : (P = ho(e), P !== null && (cl.data = P)))), (P = ch ? fh(l, e) : oh(l, e)) && (cl = ju(y, "onBeforeInput"), 0 < cl.length && (Z = new co(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          T
        ), _.push({
          event: Z,
          listeners: cl
        }), Z.data = P)), l0(
          _,
          l,
          y,
          e,
          T
        );
      }
      Ir(_, t);
    });
  }
  function Mn(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function ju(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var n = l, u = n.stateNode;
      if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = wa(l, e), n != null && a.unshift(
        Mn(l, n, u)
      ), n = wa(l, t), n != null && a.push(
        Mn(l, n, u)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function n0(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ld(l, t, e, a, n) {
    for (var u = t._reactName, i = []; e !== null && e !== a; ) {
      var c = e, r = c.alternate, y = c.stateNode;
      if (c = c.tag, r !== null && r === a) break;
      c !== 5 && c !== 26 && c !== 27 || y === null || (r = y, n ? (y = wa(e, u), y != null && i.unshift(
        Mn(e, y, r)
      )) : n || (y = wa(e, u), y != null && i.push(
        Mn(e, y, r)
      ))), e = e.return;
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var u0 = /\r\n?/g, i0 = /\u0000|\uFFFD/g;
  function td(l) {
    return (typeof l == "string" ? l : "" + l).replace(u0, `
`).replace(i0, "");
  }
  function ed(l, t) {
    return t = td(t), td(l) === t;
  }
  function pl(l, t, e, a, n, u) {
    switch (e) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || fa(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && fa(l, "" + a);
        break;
      case "className":
        Zn(l, "class", a);
        break;
      case "tabIndex":
        Zn(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zn(l, e, a);
        break;
      case "style":
        to(l, a, u);
        break;
      case "data":
        if (t !== "object") {
          Zn(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Vn("" + a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (e === "formAction" ? (t !== "input" && pl(l, t, "name", n.name, n, null), pl(
            l,
            t,
            "formEncType",
            n.formEncType,
            n,
            null
          ), pl(
            l,
            t,
            "formMethod",
            n.formMethod,
            n,
            null
          ), pl(
            l,
            t,
            "formTarget",
            n.formTarget,
            n,
            null
          )) : (pl(l, t, "encType", n.encType, n, null), pl(l, t, "method", n.method, n, null), pl(l, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Vn("" + a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        break;
      case "onScroll":
        a != null && al("scroll", l);
        break;
      case "onScrollEnd":
        a != null && al("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(o(60));
            l.innerHTML = e;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = Vn("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "" + a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        al("beforetoggle", l), al("toggle", l), Qn(l, "popover", a);
        break;
      case "xlinkActuate":
        Qt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Qt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Qt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Qt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Qt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Qt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Qt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Qt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Qt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Qn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Hm.get(e) || e, Qn(l, e, a));
    }
  }
  function tf(l, t, e, a, n, u) {
    switch (e) {
      case "style":
        to(l, a, u);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (e = a.__html, e != null) {
            if (n.children != null) throw Error(o(60));
            l.innerHTML = e;
          }
        }
        break;
      case "children":
        typeof a == "string" ? fa(l, a) : (typeof a == "number" || typeof a == "bigint") && fa(l, "" + a);
        break;
      case "onScroll":
        a != null && al("scroll", l);
        break;
      case "onScrollEnd":
        a != null && al("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Zt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Kf.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), t = e.slice(2, n ? e.length - 7 : void 0), u = l[at] || null, u = u != null ? u[e] : null, typeof u == "function" && l.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(t, a, n);
              break l;
            }
            e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : Qn(l, e, a);
          }
    }
  }
  function lt(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        al("error", l), al("load", l);
        var a = !1, n = !1, u;
        for (u in e)
          if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  pl(l, t, u, i, e, null);
              }
          }
        n && pl(l, t, "srcSet", e.srcSet, e, null), a && pl(l, t, "src", e.src, e, null);
        return;
      case "input":
        al("invalid", l);
        var c = u = i = n = null, r = null, y = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var T = e[a];
            if (T != null)
              switch (a) {
                case "name":
                  n = T;
                  break;
                case "type":
                  i = T;
                  break;
                case "checked":
                  r = T;
                  break;
                case "defaultChecked":
                  y = T;
                  break;
                case "value":
                  u = T;
                  break;
                case "defaultValue":
                  c = T;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (T != null)
                    throw Error(o(137, t));
                  break;
                default:
                  pl(l, t, a, T, e, null);
              }
          }
        Ff(
          l,
          u,
          c,
          r,
          y,
          i,
          n,
          !1
        );
        return;
      case "select":
        al("invalid", l), a = i = u = null;
        for (n in e)
          if (e.hasOwnProperty(n) && (c = e[n], c != null))
            switch (n) {
              case "value":
                u = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                a = c;
              default:
                pl(l, t, n, c, e, null);
            }
        t = u, e = i, l.multiple = !!a, t != null ? ca(l, !!a, t, !1) : e != null && ca(l, !!a, e, !0);
        return;
      case "textarea":
        al("invalid", l), u = n = a = null;
        for (i in e)
          if (e.hasOwnProperty(i) && (c = e[i], c != null))
            switch (i) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                n = c;
                break;
              case "children":
                u = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                pl(l, t, i, c, e, null);
            }
        Pf(l, a, n, u);
        return;
      case "option":
        for (r in e)
          e.hasOwnProperty(r) && (a = e[r], a != null) && (r === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : pl(l, t, r, a, e, null));
        return;
      case "dialog":
        al("beforetoggle", l), al("toggle", l), al("cancel", l), al("close", l);
        break;
      case "iframe":
      case "object":
        al("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < En.length; a++)
          al(En[a], l);
        break;
      case "image":
        al("error", l), al("load", l);
        break;
      case "details":
        al("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        al("error", l), al("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (y in e)
          if (e.hasOwnProperty(y) && (a = e[y], a != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                pl(l, t, y, a, e, null);
            }
        return;
      default:
        if (yi(t)) {
          for (T in e)
            e.hasOwnProperty(T) && (a = e[T], a !== void 0 && tf(
              l,
              t,
              T,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (c in e)
      e.hasOwnProperty(c) && (a = e[c], a != null && pl(l, t, c, a, e, null));
  }
  function c0(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null, u = null, i = null, c = null, r = null, y = null, T = null;
        for (b in e) {
          var _ = e[b];
          if (e.hasOwnProperty(b) && _ != null)
            switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                r = _;
              default:
                a.hasOwnProperty(b) || pl(l, t, b, null, a, _);
            }
        }
        for (var v in a) {
          var b = a[v];
          if (_ = e[v], a.hasOwnProperty(v) && (b != null || _ != null))
            switch (v) {
              case "type":
                u = b;
                break;
              case "name":
                n = b;
                break;
              case "checked":
                y = b;
                break;
              case "defaultChecked":
                T = b;
                break;
              case "value":
                i = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(o(137, t));
                break;
              default:
                b !== _ && pl(
                  l,
                  t,
                  v,
                  b,
                  a,
                  _
                );
            }
        }
        mi(
          l,
          i,
          c,
          r,
          y,
          T,
          u,
          n
        );
        return;
      case "select":
        b = i = c = v = null;
        for (u in e)
          if (r = e[u], e.hasOwnProperty(u) && r != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                b = r;
              default:
                a.hasOwnProperty(u) || pl(
                  l,
                  t,
                  u,
                  null,
                  a,
                  r
                );
            }
        for (n in a)
          if (u = a[n], r = e[n], a.hasOwnProperty(n) && (u != null || r != null))
            switch (n) {
              case "value":
                v = u;
                break;
              case "defaultValue":
                c = u;
                break;
              case "multiple":
                i = u;
              default:
                u !== r && pl(
                  l,
                  t,
                  n,
                  u,
                  a,
                  r
                );
            }
        t = c, e = i, a = b, v != null ? ca(l, !!e, v, !1) : !!a != !!e && (t != null ? ca(l, !!e, t, !0) : ca(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        b = v = null;
        for (c in e)
          if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                pl(l, t, c, null, a, n);
            }
        for (i in a)
          if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null))
            switch (i) {
              case "value":
                v = n;
                break;
              case "defaultValue":
                b = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(o(91));
                break;
              default:
                n !== u && pl(l, t, i, n, a, u);
            }
        If(l, v, b);
        return;
      case "option":
        for (var G in e)
          v = e[G], e.hasOwnProperty(G) && v != null && !a.hasOwnProperty(G) && (G === "selected" ? l.selected = !1 : pl(
            l,
            t,
            G,
            null,
            a,
            v
          ));
        for (r in a)
          v = a[r], b = e[r], a.hasOwnProperty(r) && v !== b && (v != null || b != null) && (r === "selected" ? l.selected = v && typeof v != "function" && typeof v != "symbol" : pl(
            l,
            t,
            r,
            v,
            a,
            b
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in e)
          v = e[W], e.hasOwnProperty(W) && v != null && !a.hasOwnProperty(W) && pl(l, t, W, null, a, v);
        for (y in a)
          if (v = a[y], b = e[y], a.hasOwnProperty(y) && v !== b && (v != null || b != null))
            switch (y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (v != null)
                  throw Error(o(137, t));
                break;
              default:
                pl(
                  l,
                  t,
                  y,
                  v,
                  a,
                  b
                );
            }
        return;
      default:
        if (yi(t)) {
          for (var Sl in e)
            v = e[Sl], e.hasOwnProperty(Sl) && v !== void 0 && !a.hasOwnProperty(Sl) && tf(
              l,
              t,
              Sl,
              void 0,
              a,
              v
            );
          for (T in a)
            v = a[T], b = e[T], !a.hasOwnProperty(T) || v === b || v === void 0 && b === void 0 || tf(
              l,
              t,
              T,
              v,
              a,
              b
            );
          return;
        }
    }
    for (var m in e)
      v = e[m], e.hasOwnProperty(m) && v != null && !a.hasOwnProperty(m) && pl(l, t, m, null, a, v);
    for (_ in a)
      v = a[_], b = e[_], !a.hasOwnProperty(_) || v === b || v == null && b == null || pl(l, t, _, v, a, b);
  }
  function ad(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function f0() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
        if (u && c && ad(i)) {
          for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
            var r = e[a], y = r.startTime;
            if (y > c) break;
            var T = r.transferSize, _ = r.initiatorType;
            T && ad(_) && (r = r.responseEnd, i += T * (r < c ? 1 : (c - y) / (r - y)));
          }
          if (--a, t += 8 * (u + i) / (n.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var ef = null, af = null;
  function Gu(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function nd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function ud(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function nf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var uf = null;
  function o0() {
    var l = window.event;
    return l && l.type === "popstate" ? l === uf ? !1 : (uf = l, !0) : (uf = null, !1);
  }
  var id = typeof setTimeout == "function" ? setTimeout : void 0, s0 = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = typeof Promise == "function" ? Promise : void 0, r0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof cd < "u" ? function(l) {
    return cd.resolve(null).then(l).catch(d0);
  } : id;
  function d0(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Oe(l) {
    return l === "head";
  }
  function fd(l, t) {
    var e = t, a = 0;
    do {
      var n = e.nextSibling;
      if (l.removeChild(e), n && n.nodeType === 8)
        if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(n), Ga(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          _n(l.ownerDocument.documentElement);
        else if (e === "head") {
          e = l.ownerDocument.head, _n(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[La] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else
          e === "body" && _n(l.ownerDocument.body);
      e = n;
    } while (e);
    Ga(t);
  }
  function od(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function cf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          cf(e), ri(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function m0(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var n = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[La])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (u = l.getAttribute("rel"), u === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (u !== n.rel || l.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || l.getAttribute("title") !== (n.title == null ? null : n.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (u = l.getAttribute("src"), (u !== (n.src == null ? null : n.src) || l.getAttribute("type") !== (n.type == null ? null : n.type) || l.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var u = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && l.getAttribute("name") === u)
          return l;
      } else return l;
      if (l = Ut(l.nextSibling), l === null) break;
    }
    return null;
  }
  function h0(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Ut(l.nextSibling), l === null)) return null;
    return l;
  }
  function sd(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Ut(l.nextSibling), l === null)) return null;
    return l;
  }
  function ff(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function of(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function y0(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Ut(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var sf = null;
  function rd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return Ut(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function dd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function md(l, t, e) {
    switch (t = Gu(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(o(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(o(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(o(454));
        return l;
      default:
        throw Error(o(451));
    }
  }
  function _n(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    ri(l);
  }
  var Ct = /* @__PURE__ */ new Map(), hd = /* @__PURE__ */ new Set();
  function Xu(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ne = U.d;
  U.d = {
    f: v0,
    r: g0,
    D: b0,
    C: p0,
    L: S0,
    m: z0,
    X: T0,
    S: A0,
    M: E0
  };
  function v0() {
    var l = ne.f(), t = Cu();
    return l || t;
  }
  function g0(l) {
    var t = na(l);
    t !== null && t.tag === 5 && t.type === "form" ? Cs(t) : ne.r(l);
  }
  var qa = typeof document > "u" ? null : document;
  function yd(l, t, e) {
    var a = qa;
    if (a && typeof t == "string" && t) {
      var n = Tt(t);
      n = 'link[rel="' + l + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), hd.has(n) || (hd.add(n), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(n) === null && (t = a.createElement("link"), lt(t, "link", l), Kl(t), a.head.appendChild(t)));
    }
  }
  function b0(l) {
    ne.D(l), yd("dns-prefetch", l, null);
  }
  function p0(l, t) {
    ne.C(l, t), yd("preconnect", l, t);
  }
  function S0(l, t, e) {
    ne.L(l, t, e);
    var a = qa;
    if (a && l && t) {
      var n = 'link[rel="preload"][as="' + Tt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + Tt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + Tt(
        e.imageSizes
      ) + '"]')) : n += '[href="' + Tt(l) + '"]';
      var u = n;
      switch (t) {
        case "style":
          u = Ya(l);
          break;
        case "script":
          u = ja(l);
      }
      Ct.has(u) || (l = q(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Ct.set(u, l), a.querySelector(n) !== null || t === "style" && a.querySelector(On(u)) || t === "script" && a.querySelector(xn(u)) || (t = a.createElement("link"), lt(t, "link", l), Kl(t), a.head.appendChild(t)));
    }
  }
  function z0(l, t) {
    ne.m(l, t);
    var e = qa;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Tt(a) + '"][href="' + Tt(l) + '"]', u = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ja(l);
      }
      if (!Ct.has(u) && (l = q({ rel: "modulepreload", href: l }, t), Ct.set(u, l), e.querySelector(n) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(xn(u)))
              return;
        }
        a = e.createElement("link"), lt(a, "link", l), Kl(a), e.head.appendChild(a);
      }
    }
  }
  function A0(l, t, e) {
    ne.S(l, t, e);
    var a = qa;
    if (a && l) {
      var n = ua(a).hoistableStyles, u = Ya(l);
      t = t || "default";
      var i = n.get(u);
      if (!i) {
        var c = { loading: 0, preload: null };
        if (i = a.querySelector(
          On(u)
        ))
          c.loading = 5;
        else {
          l = q(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Ct.get(u)) && rf(l, e);
          var r = i = a.createElement("link");
          Kl(r), lt(r, "link", l), r._p = new Promise(function(y, T) {
            r.onload = y, r.onerror = T;
          }), r.addEventListener("load", function() {
            c.loading |= 1;
          }), r.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Qu(i, t, a);
        }
        i = {
          type: "stylesheet",
          instance: i,
          count: 1,
          state: c
        }, n.set(u, i);
      }
    }
  }
  function T0(l, t) {
    ne.X(l, t);
    var e = qa;
    if (e && l) {
      var a = ua(e).hoistableScripts, n = ja(l), u = a.get(n);
      u || (u = e.querySelector(xn(n)), u || (l = q({ src: l, async: !0 }, t), (t = Ct.get(n)) && df(l, t), u = e.createElement("script"), Kl(u), lt(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function E0(l, t) {
    ne.M(l, t);
    var e = qa;
    if (e && l) {
      var a = ua(e).hoistableScripts, n = ja(l), u = a.get(n);
      u || (u = e.querySelector(xn(n)), u || (l = q({ src: l, async: !0, type: "module" }, t), (t = Ct.get(n)) && df(l, t), u = e.createElement("script"), Kl(u), lt(u, "link", l), e.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(n, u));
    }
  }
  function vd(l, t, e, a) {
    var n = (n = L.current) ? Xu(n) : null;
    if (!n) throw Error(o(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (t = Ya(e.href), e = ua(
          n
        ).hoistableStyles, a = e.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = Ya(e.href);
          var u = ua(
            n
          ).hoistableStyles, i = u.get(l);
          if (i || (n = n.ownerDocument || n, i = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(l, i), (u = n.querySelector(
            On(l)
          )) && !u._p && (i.instance = u, i.state.loading = 5), Ct.has(l) || (e = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Ct.set(l, e), u || M0(
            n,
            l,
            e,
            i.state
          ))), t && a === null)
            throw Error(o(528, ""));
          return i;
        }
        if (t && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ja(e), e = ua(
          n
        ).hoistableScripts, a = e.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, l));
    }
  }
  function Ya(l) {
    return 'href="' + Tt(l) + '"';
  }
  function On(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function gd(l) {
    return q({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function M0(l, t, e, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), lt(t, "link", e), Kl(t), l.head.appendChild(t));
  }
  function ja(l) {
    return '[src="' + Tt(l) + '"]';
  }
  function xn(l) {
    return "script[async]" + l;
  }
  function bd(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + Tt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Kl(a), a;
          var n = q({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Kl(a), lt(a, "style", n), Qu(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          n = Ya(e.href);
          var u = l.querySelector(
            On(n)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, Kl(u), u;
          a = gd(e), (n = Ct.get(n)) && rf(a, n), u = (l.ownerDocument || l).createElement("link"), Kl(u);
          var i = u;
          return i._p = new Promise(function(c, r) {
            i.onload = c, i.onerror = r;
          }), lt(u, "link", a), t.state.loading |= 4, Qu(u, e.precedence, l), t.instance = u;
        case "script":
          return u = ja(e.src), (n = l.querySelector(
            xn(u)
          )) ? (t.instance = n, Kl(n), n) : (a = e, (n = Ct.get(u)) && (a = q({}, e), df(a, n)), l = l.ownerDocument || l, n = l.createElement("script"), Kl(n), lt(n, "link", a), l.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Qu(a, e.precedence, l));
    return t.instance;
  }
  function Qu(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
      var c = a[i];
      if (c.dataset.precedence === t) u = c;
      else if (u !== n) break;
    }
    u ? u.parentNode.insertBefore(l, u.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function rf(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function df(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Zu = null;
  function pd(l, t, e) {
    if (Zu === null) {
      var a = /* @__PURE__ */ new Map(), n = Zu = /* @__PURE__ */ new Map();
      n.set(e, a);
    } else
      n = Zu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), n = 0; n < e.length; n++) {
      var u = e[n];
      if (!(u[La] || u[$l] || l === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var i = u.getAttribute(t) || "";
        i = l + i;
        var c = a.get(i);
        c ? c.push(u) : a.set(i, [u]);
      }
    }
    return a;
  }
  function Sd(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function _0(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function zd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function O0(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var n = Ya(a.href), u = t.querySelector(
          On(n)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Lu.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = u, Kl(u);
          return;
        }
        u = t.ownerDocument || t, a = gd(a), (n = Ct.get(n)) && rf(a, n), u = u.createElement("link"), Kl(u);
        var i = u;
        i._p = new Promise(function(c, r) {
          i.onload = c, i.onerror = r;
        }), lt(u, "link", a), e.instance = u;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = Lu.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var mf = 0;
  function x0(l, t) {
    return l.stylesheets && l.count === 0 && wu(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && wu(l, l.stylesheets), l.unsuspend) {
          var u = l.unsuspend;
          l.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < l.imgBytes && mf === 0 && (mf = 62500 * f0());
      var n = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && wu(l, l.stylesheets), l.unsuspend)) {
            var u = l.unsuspend;
            l.unsuspend = null, u();
          }
        },
        (l.imgBytes > mf ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(n);
      };
    } : null;
  }
  function Lu() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) wu(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Vu = null;
  function wu(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Vu = /* @__PURE__ */ new Map(), t.forEach(D0, l), Vu = null, Lu.call(l));
  }
  function D0(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Vu.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Vu.set(l, e);
        for (var n = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < n.length; u++) {
          var i = n[u];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
        }
        a && e.set(null, a);
      }
      n = t.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Lu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(n, l.firstChild)), t.state.loading |= 4;
    }
  }
  var Dn = {
    $$typeof: vl,
    Provider: null,
    Consumer: null,
    _currentValue: V,
    _currentValue2: V,
    _threadCount: 0
  };
  function U0(l, t, e, a, n, u, i, c, r) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ci(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ci(0), this.hiddenUpdates = ci(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = r, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ad(l, t, e, a, n, u, i, c, r, y, T, _) {
    return l = new U0(
      l,
      t,
      e,
      i,
      r,
      y,
      T,
      _,
      c
    ), t = 1, u === !0 && (t |= 24), u = ht(3, null, null, t), l.current = u, u.stateNode = l, t = wi(), t.refCount++, l.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, Wi(u), l;
  }
  function Td(l) {
    return l ? (l = ya, l) : ya;
  }
  function Ed(l, t, e, a, n, u) {
    n = Td(n), a.context === null ? a.context = n : a.pendingContext = n, a = ve(t), a.payload = { element: e }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = ge(l, a, t), e !== null && (ot(e, l, t), cn(e, l, t));
  }
  function Md(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function hf(l, t) {
    Md(l, t), (l = l.alternate) && Md(l, t);
  }
  function _d(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Xe(l, 67108864);
      t !== null && ot(t, l, 67108864), hf(l, 67108864);
    }
  }
  function Od(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = pt();
      t = fi(t);
      var e = Xe(l, t);
      e !== null && ot(e, l, t), hf(l, t);
    }
  }
  var Ku = !0;
  function C0(l, t, e, a) {
    var n = p.T;
    p.T = null;
    var u = U.p;
    try {
      U.p = 2, yf(l, t, e, a);
    } finally {
      U.p = u, p.T = n;
    }
  }
  function R0(l, t, e, a) {
    var n = p.T;
    p.T = null;
    var u = U.p;
    try {
      U.p = 8, yf(l, t, e, a);
    } finally {
      U.p = u, p.T = n;
    }
  }
  function yf(l, t, e, a) {
    if (Ku) {
      var n = vf(a);
      if (n === null)
        lf(
          l,
          t,
          a,
          Ju,
          e
        ), Dd(l, a);
      else if (H0(
        n,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (Dd(l, a), t & 4 && -1 < N0.indexOf(l)) {
        for (; n !== null; ) {
          var u = na(n);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Be(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var r = 1 << 31 - dt(i);
                      c.entanglements[1] |= r, i &= ~r;
                    }
                    jt(u), (dl & 6) === 0 && (Du = st() + 500, Tn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Xe(u, 2), c !== null && ot(c, u, 2), Cu(), hf(u, 2);
            }
          if (u = vf(a), u === null && lf(
            l,
            t,
            a,
            Ju,
            e
          ), u === n) break;
          n = u;
        }
        n !== null && a.stopPropagation();
      } else
        lf(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function vf(l) {
    return l = gi(l), gf(l);
  }
  var Ju = null;
  function gf(l) {
    if (Ju = null, l = aa(l), l !== null) {
      var t = H(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = N(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = w(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Ju = l, null;
  }
  function xd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (bm()) {
          case Bf:
            return 2;
          case qf:
            return 8;
          case qn:
          case pm:
            return 32;
          case Yf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var bf = !1, xe = null, De = null, Ue = null, Un = /* @__PURE__ */ new Map(), Cn = /* @__PURE__ */ new Map(), Ce = [], N0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Dd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        xe = null;
        break;
      case "dragenter":
      case "dragleave":
        De = null;
        break;
      case "mouseover":
      case "mouseout":
        Ue = null;
        break;
      case "pointerover":
      case "pointerout":
        Un.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cn.delete(t.pointerId);
    }
  }
  function Rn(l, t, e, a, n, u) {
    return l === null || l.nativeEvent !== u ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [n]
    }, t !== null && (t = na(t), t !== null && _d(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), l);
  }
  function H0(l, t, e, a, n) {
    switch (t) {
      case "focusin":
        return xe = Rn(
          xe,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "dragenter":
        return De = Rn(
          De,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "mouseover":
        return Ue = Rn(
          Ue,
          l,
          t,
          e,
          a,
          n
        ), !0;
      case "pointerover":
        var u = n.pointerId;
        return Un.set(
          u,
          Rn(
            Un.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
      case "gotpointercapture":
        return u = n.pointerId, Cn.set(
          u,
          Rn(
            Cn.get(u) || null,
            l,
            t,
            e,
            a,
            n
          )
        ), !0;
    }
    return !1;
  }
  function Ud(l) {
    var t = aa(l.target);
    if (t !== null) {
      var e = H(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = N(e), t !== null) {
            l.blockedOn = t, Lf(l.priority, function() {
              Od(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = w(e), t !== null) {
            l.blockedOn = t, Lf(l.priority, function() {
              Od(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function ku(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = vf(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        vi = a, e.target.dispatchEvent(a), vi = null;
      } else
        return t = na(e), t !== null && _d(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function Cd(l, t, e) {
    ku(l) && e.delete(t);
  }
  function B0() {
    bf = !1, xe !== null && ku(xe) && (xe = null), De !== null && ku(De) && (De = null), Ue !== null && ku(Ue) && (Ue = null), Un.forEach(Cd), Cn.forEach(Cd);
  }
  function Wu(l, t) {
    l.blockedOn === t && (l.blockedOn = null, bf || (bf = !0, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      B0
    )));
  }
  var $u = null;
  function Rd(l) {
    $u !== l && ($u = l, f.unstable_scheduleCallback(
      f.unstable_NormalPriority,
      function() {
        $u === l && ($u = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], n = l[t + 2];
          if (typeof a != "function") {
            if (gf(a || e) === null)
              continue;
            break;
          }
          var u = na(e);
          u !== null && (l.splice(t, 3), t -= 3, yc(
            u,
            {
              pending: !0,
              data: n,
              method: e.method,
              action: a
            },
            a,
            n
          ));
        }
      }
    ));
  }
  function Ga(l) {
    function t(r) {
      return Wu(r, l);
    }
    xe !== null && Wu(xe, l), De !== null && Wu(De, l), Ue !== null && Wu(Ue, l), Un.forEach(t), Cn.forEach(t);
    for (var e = 0; e < Ce.length; e++) {
      var a = Ce[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < Ce.length && (e = Ce[0], e.blockedOn === null); )
      Ud(e), e.blockedOn === null && Ce.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[at] || null;
        if (typeof u == "function")
          i || Rd(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[at] || null)
              c = i.formAction;
            else if (gf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), Rd(e);
        }
      }
  }
  function Nd() {
    function l(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(i) {
            return n = i;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      n !== null && (n(), n = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, n = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
      };
    }
  }
  function pf(l) {
    this._internalRoot = l;
  }
  Fu.prototype.render = pf.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var e = t.current, a = pt();
    Ed(e, a, l, t, null, null);
  }, Fu.prototype.unmount = pf.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Ed(l.current, 2, null, l, null, null), Cu(), t[ea] = null;
    }
  };
  function Fu(l) {
    this._internalRoot = l;
  }
  Fu.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Zf();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < Ce.length && t !== 0 && t < Ce[e].priority; e++) ;
      Ce.splice(e, 0, l), e === 0 && Ud(l);
    }
  };
  var Hd = E.version;
  if (Hd !== "19.2.6")
    throw Error(
      o(
        527,
        Hd,
        "19.2.6"
      )
    );
  U.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
    return l = g(t), l = l !== null ? J(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var q0 = {
    bundleType: 0,
    version: "19.2.6",
    rendererPackageName: "react-dom",
    currentDispatcherRef: p,
    reconcilerVersion: "19.2.6"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Iu = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Iu.isDisabled && Iu.supportsFiber)
      try {
        Xa = Iu.inject(
          q0
        ), rt = Iu;
      } catch {
      }
  }
  return Hn.createRoot = function(l, t) {
    if (!C(l)) throw Error(o(299));
    var e = !1, a = "", n = Qs, u = Zs, i = Ls;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ad(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      n,
      u,
      i,
      Nd
    ), l[ea] = t.current, Pc(l), new pf(t);
  }, Hn.hydrateRoot = function(l, t, e) {
    if (!C(l)) throw Error(o(299));
    var a = !1, n = "", u = Qs, i = Zs, c = Ls, r = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (r = e.formState)), t = Ad(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      n,
      r,
      u,
      i,
      c,
      Nd
    ), t.context = Td(null), e = t.current, a = pt(), a = fi(a), n = ve(a), n.callback = null, ge(e, n, a), e = a, t.current.lanes = e, Za(t, e), jt(t), l[ea] = t.current, Pc(l), new Fu(t);
  }, Hn.version = "19.2.6", Hn;
}
var Vd;
function K0() {
  if (Vd) return Af.exports;
  Vd = 1;
  function f() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (E) {
        console.error(E);
      }
  }
  return f(), Af.exports = w0(), Af.exports;
}
var J0 = K0();
const Id = (...f) => f.filter((E, S, o) => !!E && E.trim() !== "" && o.indexOf(E) === S).join(" ").trim();
const k0 = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const W0 = (f) => f.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (E, S, o) => o ? o.toUpperCase() : S.toLowerCase()
);
const wd = (f) => {
  const E = W0(f);
  return E.charAt(0).toUpperCase() + E.slice(1);
};
var _f = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const $0 = (f) => {
  for (const E in f)
    if (E.startsWith("aria-") || E === "role" || E === "title")
      return !0;
  return !1;
}, F0 = zl.createContext({}), I0 = () => zl.useContext(F0), P0 = zl.forwardRef(
  ({ color: f, size: E, strokeWidth: S, absoluteStrokeWidth: o, className: C = "", children: H, iconNode: N, ...w }, x) => {
    const {
      size: g = 24,
      strokeWidth: J = 2,
      absoluteStrokeWidth: q = !1,
      color: nl = "currentColor",
      className: yl = ""
    } = I0() ?? {}, Ul = o ?? q ? Number(S ?? J) * 24 / Number(E ?? g) : S ?? J;
    return zl.createElement(
      "svg",
      {
        ref: x,
        ..._f,
        width: E ?? g ?? _f.width,
        height: E ?? g ?? _f.height,
        stroke: f ?? nl,
        strokeWidth: Ul,
        className: Id("lucide", yl, C),
        ...!H && !$0(w) && { "aria-hidden": "true" },
        ...w
      },
      [
        ...N.map(([Q, Al]) => zl.createElement(Q, Al)),
        ...Array.isArray(H) ? H : [H]
      ]
    );
  }
);
const Cf = (f, E) => {
  const S = zl.forwardRef(
    ({ className: o, ...C }, H) => zl.createElement(P0, {
      ref: H,
      iconNode: E,
      className: Id(
        `lucide-${k0(wd(f))}`,
        `lucide-${f}`,
        o
      ),
      ...C
    })
  );
  return S.displayName = wd(f), S;
};
const ly = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
], ty = Cf("arrow-right", ly);
const ey = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], ay = Cf("chevron-left", ey);
const ny = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], uy = Cf("chevron-right", ny);
function Pd(f) {
  var E, S, o = "";
  if (typeof f == "string" || typeof f == "number") o += f;
  else if (typeof f == "object") if (Array.isArray(f)) {
    var C = f.length;
    for (E = 0; E < C; E++) f[E] && (S = Pd(f[E])) && (o && (o += " "), o += S);
  } else for (S in f) f[S] && (o && (o += " "), o += S);
  return o;
}
function iy() {
  for (var f, E, S = 0, o = "", C = arguments.length; S < C; S++) (f = arguments[S]) && (E = Pd(f)) && (o && (o += " "), o += E);
  return o;
}
const cy = (f, E) => {
  const S = new Array(f.length + E.length);
  for (let o = 0; o < f.length; o++)
    S[o] = f[o];
  for (let o = 0; o < E.length; o++)
    S[f.length + o] = E[o];
  return S;
}, fy = (f, E) => ({
  classGroupId: f,
  validator: E
}), lm = (f = /* @__PURE__ */ new Map(), E = null, S) => ({
  nextPart: f,
  validators: E,
  classGroupId: S
}), ti = "-", Kd = [], oy = "arbitrary..", sy = (f) => {
  const E = dy(f), {
    conflictingClassGroups: S,
    conflictingClassGroupModifiers: o
  } = f;
  return {
    getClassGroupId: (N) => {
      if (N.startsWith("[") && N.endsWith("]"))
        return ry(N);
      const w = N.split(ti), x = w[0] === "" && w.length > 1 ? 1 : 0;
      return tm(w, x, E);
    },
    getConflictingClassGroupIds: (N, w) => {
      if (w) {
        const x = o[N], g = S[N];
        return x ? g ? cy(g, x) : x : g || Kd;
      }
      return S[N] || Kd;
    }
  };
}, tm = (f, E, S) => {
  if (f.length - E === 0)
    return S.classGroupId;
  const C = f[E], H = S.nextPart.get(C);
  if (H) {
    const g = tm(f, E + 1, H);
    if (g) return g;
  }
  const N = S.validators;
  if (N === null)
    return;
  const w = E === 0 ? f.join(ti) : f.slice(E).join(ti), x = N.length;
  for (let g = 0; g < x; g++) {
    const J = N[g];
    if (J.validator(w))
      return J.classGroupId;
  }
}, ry = (f) => f.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const E = f.slice(1, -1), S = E.indexOf(":"), o = E.slice(0, S);
  return o ? oy + o : void 0;
})(), dy = (f) => {
  const {
    theme: E,
    classGroups: S
  } = f;
  return my(S, E);
}, my = (f, E) => {
  const S = lm();
  for (const o in f) {
    const C = f[o];
    Rf(C, S, o, E);
  }
  return S;
}, Rf = (f, E, S, o) => {
  const C = f.length;
  for (let H = 0; H < C; H++) {
    const N = f[H];
    hy(N, E, S, o);
  }
}, hy = (f, E, S, o) => {
  if (typeof f == "string") {
    yy(f, E, S);
    return;
  }
  if (typeof f == "function") {
    vy(f, E, S, o);
    return;
  }
  gy(f, E, S, o);
}, yy = (f, E, S) => {
  const o = f === "" ? E : em(E, f);
  o.classGroupId = S;
}, vy = (f, E, S, o) => {
  if (by(f)) {
    Rf(f(o), E, S, o);
    return;
  }
  E.validators === null && (E.validators = []), E.validators.push(fy(S, f));
}, gy = (f, E, S, o) => {
  const C = Object.entries(f), H = C.length;
  for (let N = 0; N < H; N++) {
    const [w, x] = C[N];
    Rf(x, em(E, w), S, o);
  }
}, em = (f, E) => {
  let S = f;
  const o = E.split(ti), C = o.length;
  for (let H = 0; H < C; H++) {
    const N = o[H];
    let w = S.nextPart.get(N);
    w || (w = lm(), S.nextPart.set(N, w)), S = w;
  }
  return S;
}, by = (f) => "isThemeGetter" in f && f.isThemeGetter === !0, py = (f) => {
  if (f < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let E = 0, S = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const C = (H, N) => {
    S[H] = N, E++, E > f && (E = 0, o = S, S = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(H) {
      let N = S[H];
      if (N !== void 0)
        return N;
      if ((N = o[H]) !== void 0)
        return C(H, N), N;
    },
    set(H, N) {
      H in S ? S[H] = N : C(H, N);
    }
  };
}, Df = "!", Jd = ":", Sy = [], kd = (f, E, S, o, C) => ({
  modifiers: f,
  hasImportantModifier: E,
  baseClassName: S,
  maybePostfixModifierPosition: o,
  isExternal: C
}), zy = (f) => {
  const {
    prefix: E,
    experimentalParseClassName: S
  } = f;
  let o = (C) => {
    const H = [];
    let N = 0, w = 0, x = 0, g;
    const J = C.length;
    for (let Q = 0; Q < J; Q++) {
      const Al = C[Q];
      if (N === 0 && w === 0) {
        if (Al === Jd) {
          H.push(C.slice(x, Q)), x = Q + 1;
          continue;
        }
        if (Al === "/") {
          g = Q;
          continue;
        }
      }
      Al === "[" ? N++ : Al === "]" ? N-- : Al === "(" ? w++ : Al === ")" && w--;
    }
    const q = H.length === 0 ? C : C.slice(x);
    let nl = q, yl = !1;
    q.endsWith(Df) ? (nl = q.slice(0, -1), yl = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      q.startsWith(Df) && (nl = q.slice(1), yl = !0)
    );
    const Ul = g && g > x ? g - x : void 0;
    return kd(H, yl, nl, Ul);
  };
  if (E) {
    const C = E + Jd, H = o;
    o = (N) => N.startsWith(C) ? H(N.slice(C.length)) : kd(Sy, !1, N, void 0, !0);
  }
  if (S) {
    const C = o;
    o = (H) => S({
      className: H,
      parseClassName: C
    });
  }
  return o;
}, Ay = (f) => {
  const E = /* @__PURE__ */ new Map();
  return f.orderSensitiveModifiers.forEach((S, o) => {
    E.set(S, 1e6 + o);
  }), (S) => {
    const o = [];
    let C = [];
    for (let H = 0; H < S.length; H++) {
      const N = S[H], w = N[0] === "[", x = E.has(N);
      w || x ? (C.length > 0 && (C.sort(), o.push(...C), C = []), o.push(N)) : C.push(N);
    }
    return C.length > 0 && (C.sort(), o.push(...C)), o;
  };
}, Ty = (f) => ({
  cache: py(f.cacheSize),
  parseClassName: zy(f),
  sortModifiers: Ay(f),
  postfixLookupClassGroupIds: Ey(f),
  ...sy(f)
}), Ey = (f) => {
  const E = /* @__PURE__ */ Object.create(null), S = f.postfixLookupClassGroups;
  if (S)
    for (let o = 0; o < S.length; o++)
      E[S[o]] = !0;
  return E;
}, My = /\s+/, _y = (f, E) => {
  const {
    parseClassName: S,
    getClassGroupId: o,
    getConflictingClassGroupIds: C,
    sortModifiers: H,
    postfixLookupClassGroupIds: N
  } = E, w = [], x = f.trim().split(My);
  let g = "";
  for (let J = x.length - 1; J >= 0; J -= 1) {
    const q = x[J], {
      isExternal: nl,
      modifiers: yl,
      hasImportantModifier: Ul,
      baseClassName: Q,
      maybePostfixModifierPosition: Al
    } = S(q);
    if (nl) {
      g = q + (g.length > 0 ? " " + g : g);
      continue;
    }
    let Tl = !!Al, ol;
    if (Tl) {
      const k = Q.substring(0, Al);
      ol = o(k);
      const R = ol && N[ol] ? o(Q) : void 0;
      R && R !== ol && (ol = R, Tl = !1);
    } else
      ol = o(Q);
    if (!ol) {
      if (!Tl) {
        g = q + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (ol = o(Q), !ol) {
        g = q + (g.length > 0 ? " " + g : g);
        continue;
      }
      Tl = !1;
    }
    const vl = yl.length === 0 ? "" : yl.length === 1 ? yl[0] : H(yl).join(":"), _l = Ul ? vl + Df : vl, gl = _l + ol;
    if (w.indexOf(gl) > -1)
      continue;
    w.push(gl);
    const Cl = C(ol, Tl);
    for (let k = 0; k < Cl.length; ++k) {
      const R = Cl[k];
      w.push(_l + R);
    }
    g = q + (g.length > 0 ? " " + g : g);
  }
  return g;
}, Oy = (...f) => {
  let E = 0, S, o, C = "";
  for (; E < f.length; )
    (S = f[E++]) && (o = am(S)) && (C && (C += " "), C += o);
  return C;
}, am = (f) => {
  if (typeof f == "string")
    return f;
  let E, S = "";
  for (let o = 0; o < f.length; o++)
    f[o] && (E = am(f[o])) && (S && (S += " "), S += E);
  return S;
}, xy = (f, ...E) => {
  let S, o, C, H;
  const N = (x) => {
    const g = E.reduce((J, q) => q(J), f());
    return S = Ty(g), o = S.cache.get, C = S.cache.set, H = w, w(x);
  }, w = (x) => {
    const g = o(x);
    if (g)
      return g;
    const J = _y(x, S);
    return C(x, J), J;
  };
  return H = N, (...x) => H(Oy(...x));
}, Dy = [], wl = (f) => {
  const E = (S) => S[f] || Dy;
  return E.isThemeGetter = !0, E;
}, nm = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, um = /^\((?:(\w[\w-]*):)?(.+)\)$/i, Uy = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, Cy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ry = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ny = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, Hy = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, By = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ne = (f) => Uy.test(f), tl = (f) => !!f && !Number.isNaN(Number(f)), Gt = (f) => !!f && Number.isInteger(Number(f)), Of = (f) => f.endsWith("%") && tl(f.slice(0, -1)), ue = (f) => Cy.test(f), im = () => !0, qy = (f) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ry.test(f) && !Ny.test(f)
), Nf = () => !1, Yy = (f) => Hy.test(f), jy = (f) => By.test(f), Gy = (f) => !Y(f) && !j(f), Xy = (f) => f.startsWith("@container") && (f[10] === "/" && f[11] !== void 0 || f[11] === "s" && f[16] !== void 0 && f.startsWith("-size/", 10) || f[11] === "n" && f[18] !== void 0 && f.startsWith("-normal/", 10)), Qy = (f) => He(f, om, Nf), Y = (f) => nm.test(f), Pe = (f) => He(f, sm, qy), Wd = (f) => He(f, Wy, tl), Zy = (f) => He(f, dm, im), Ly = (f) => He(f, rm, Nf), $d = (f) => He(f, cm, Nf), Vy = (f) => He(f, fm, jy), Pu = (f) => He(f, mm, Yy), j = (f) => um.test(f), Bn = (f) => la(f, sm), wy = (f) => la(f, rm), Fd = (f) => la(f, cm), Ky = (f) => la(f, om), Jy = (f) => la(f, fm), li = (f) => la(f, mm, !0), ky = (f) => la(f, dm, !0), He = (f, E, S) => {
  const o = nm.exec(f);
  return o ? o[1] ? E(o[1]) : S(o[2]) : !1;
}, la = (f, E, S = !1) => {
  const o = um.exec(f);
  return o ? o[1] ? E(o[1]) : S : !1;
}, cm = (f) => f === "position" || f === "percentage", fm = (f) => f === "image" || f === "url", om = (f) => f === "length" || f === "size" || f === "bg-size", sm = (f) => f === "length", Wy = (f) => f === "number", rm = (f) => f === "family-name", dm = (f) => f === "number" || f === "weight", mm = (f) => f === "shadow", $y = () => {
  const f = wl("color"), E = wl("font"), S = wl("text"), o = wl("font-weight"), C = wl("tracking"), H = wl("leading"), N = wl("breakpoint"), w = wl("container"), x = wl("spacing"), g = wl("radius"), J = wl("shadow"), q = wl("inset-shadow"), nl = wl("text-shadow"), yl = wl("drop-shadow"), Ul = wl("blur"), Q = wl("perspective"), Al = wl("aspect"), Tl = wl("ease"), ol = wl("animate"), vl = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _l = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], gl = () => [..._l(), j, Y], Cl = () => ["auto", "hidden", "clip", "visible", "scroll"], k = () => ["auto", "contain", "none"], R = () => [j, Y, x], ul = () => [Ne, "full", "auto", ...R()], St = () => [Gt, "none", "subgrid", j, Y], kl = () => ["auto", {
    span: ["full", Gt, j, Y]
  }, Gt, j, Y], Ol = () => [Gt, "auto", j, Y], Wl = () => ["auto", "min", "max", "fr", j, Y], jl = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], Rl = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], p = () => ["auto", ...R()], U = () => [Ne, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...R()], V = () => [Ne, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...R()], O = () => [Ne, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...R()], A = () => [f, j, Y], s = () => [..._l(), Fd, $d, {
    position: [j, Y]
  }], z = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], D = () => ["auto", "cover", "contain", Ky, Qy, {
    size: [j, Y]
  }], B = () => [Of, Bn, Pe], X = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    j,
    Y
  ], L = () => ["", tl, Bn, Pe], I = () => ["solid", "dashed", "dotted", "double"], Gl = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ll = () => [tl, Of, Fd, $d], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    Ul,
    j,
    Y
  ], Xt = () => ["none", tl, j, Y], ce = () => ["none", tl, j, Y], ta = () => [tl, j, Y], zt = () => [Ne, "full", ...R()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ue],
      breakpoint: [ue],
      color: [im],
      container: [ue],
      "drop-shadow": [ue],
      ease: ["in", "out", "in-out"],
      font: [Gy],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ue],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ue],
      shadow: [ue],
      spacing: ["px", tl],
      text: [ue],
      "text-shadow": [ue],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Ne, Y, j, Al]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", j, Y]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [Xy],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [tl, Y, j, w]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": vl()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": vl()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: gl()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Cl()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Cl()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Cl()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: k()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": k()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": k()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: ul()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ul()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ul()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": ul(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: ul()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": ul(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: ul()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": ul()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": ul()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ul()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ul()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ul()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ul()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Gt, "auto", j, Y]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Ne, "full", "auto", w, ...R()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [tl, Ne, "auto", "initial", "none", Y]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", tl, j, Y]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", tl, j, Y]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Gt, "first", "last", "none", j, Y]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": St()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: kl()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ol()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ol()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": St()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: kl()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ol()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ol()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": Wl()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": Wl()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: R()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": R()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": R()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...jl(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...Rl(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...Rl()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...jl()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...Rl(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...Rl(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": jl()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...Rl(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...Rl()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: R()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: R()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: R()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: R()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: R()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: R()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: R()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: R()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: R()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: R()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: R()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: p()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: p()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: p()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: p()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: p()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: p()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: p()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: p()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: p()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: p()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: p()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": R()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": R()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: U()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/width
       */
      "inline-size": [{
        inline: ["auto", ...V()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...V()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-inline-size": [{
        "max-inline": ["none", ...V()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/height
       */
      "block-size": [{
        block: ["auto", ...O()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-block-size": [{
        "min-block": ["auto", ...O()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-block-size": [{
        "max-block": ["none", ...O()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [w, "screen", ...U()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          w,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...U()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          w,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [N]
          },
          ...U()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...U()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...U()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...U()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", S, Bn, Pe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [o, ky, Zy]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Of, Y]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [wy, Ly, E]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [Y]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [C, j, Y]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [tl, "none", j, Wd]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          H,
          ...R()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", j, Y]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", j, Y]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: A()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: A()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...I(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [tl, "from-font", "auto", j, Pe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: A()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [tl, "auto", j, Y]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: R()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Gt, j, Y]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", j, Y]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", j, Y]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: s()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: z()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: D()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Gt, j, Y],
          radial: ["", j, Y],
          conic: [Gt, j, Y]
        }, Jy, Vy]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: A()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: B()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: B()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: B()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: A()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: A()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: A()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: X()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": X()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": X()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": X()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": X()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": X()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": X()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": X()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": X()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": X()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": X()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": X()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": X()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": X()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": X()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": L()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": L()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...I(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...I(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: A()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": A()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": A()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": A()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": A()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": A()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": A()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": A()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": A()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": A()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": A()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: A()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...I(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [tl, j, Y]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", tl, Bn, Pe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: A()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          J,
          li,
          Pu
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: A()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", q, li, Pu]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": A()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: A()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [tl, Pe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": A()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": A()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", nl, li, Pu]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": A()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [tl, j, Y]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...Gl(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Gl()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [tl]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ll()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ll()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": A()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": A()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ll()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ll()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": A()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": A()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ll()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ll()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": A()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": A()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ll()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ll()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": A()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": A()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ll()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ll()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": A()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": A()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ll()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ll()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": A()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": A()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ll()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ll()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": A()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": A()
      }],
      "mask-image-radial": [{
        "mask-radial": [j, Y]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ll()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ll()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": A()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": A()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": _l()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [tl]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ll()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ll()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": A()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": A()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: s()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: z()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: D()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", j, Y]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          j,
          Y
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ie()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [tl, j, Y]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [tl, j, Y]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          yl,
          li,
          Pu
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": A()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", tl, j, Y]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [tl, j, Y]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", tl, j, Y]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [tl, j, Y]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", tl, j, Y]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          j,
          Y
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ie()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [tl, j, Y]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [tl, j, Y]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", tl, j, Y]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [tl, j, Y]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", tl, j, Y]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [tl, j, Y]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [tl, j, Y]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", tl, j, Y]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": R()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": R()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": R()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", j, Y]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [tl, "initial", j, Y]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", Tl, j, Y]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [tl, j, Y]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", ol, j, Y]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [Q, j, Y]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": gl()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Xt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Xt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Xt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Xt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ce()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ce()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ce()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ce()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: ta()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": ta()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": ta()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [j, Y, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: gl()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: zt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": zt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": zt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": zt()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Gt, j, Y]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: A()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: A()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", j, Y]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": A()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": A()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": R()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": R()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": R()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": R()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": R()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": R()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": R()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": R()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": R()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": R()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": R()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": R()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": R()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": R()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": R()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": R()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": R()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": R()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": R()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": R()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": R()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": R()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", j, Y]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...A()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [tl, Bn, Pe, Wd]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...A()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Fy = /* @__PURE__ */ xy($y);
function xf(...f) {
  return Fy(iy(f));
}
const Iy = typeof window < "u" ? zl.useLayoutEffect : zl.useEffect;
function Py({
  slides: f,
  rotate: E = 38,
  depth: S = 0.42,
  perspective: o = 3,
  falloff: C = 0.56,
  fade: H = 0.12,
  cardWidth: N = "clamp(164px, 23vw, 256px)",
  gap: w = -0.06,
  loop: x = !0,
  showCaption: g = !0,
  showPagination: J = !0,
  showNavigation: q = !0,
  label: nl = "Fachbereich auswählen",
  className: yl,
  cardClassName: Ul
}) {
  const Q = f.length, Al = zl.useRef(null), Tl = zl.useRef([]), ol = zl.useRef(0), vl = zl.useRef(0), _l = zl.useRef(0), gl = zl.useRef(null), Cl = zl.useRef(!1), k = zl.useRef(!1), R = zl.useRef(null), [ul, St] = zl.useState(0), kl = zl.useCallback((O) => {
    const A = Math.max(1, Q);
    return (Math.round(O) % A + A) % A;
  }, [Q]), Ol = zl.useCallback((O) => x ? O : Math.max(0, Math.min(Q - 1, O)), [Q, x]), Wl = zl.useCallback(() => {
    const O = _l.current;
    !O || !Q || Tl.current.forEach((A, s) => {
      if (!A || s >= Q) return;
      let z = s - ol.current;
      x && (z = (z % Q + Q) % Q, z > Q / 2 && (z -= Q));
      const D = Math.abs(z), B = _l.current < 200 ? 0.37 : 0.73, X = Math.max(0.78, 1 - 0.055 * D), L = O * 0.055 * D * D;
      A.style.transform = `translateX(calc(-50% + ${z * O * B}px)) translateY(${L}px) rotate(${z * 10}deg) scale(${X})`;
      const I = x ? Math.min(1, Math.max(0, Q / 2 + 0.5 - D)) : 1;
      A.style.opacity = String(I), A.style.zIndex = String(Q + 1 - Math.round(D)), A.style.pointerEvents = I < 0.1 ? "none" : "auto";
    });
  }, [Q, S, H, C, w, x, E]), jl = zl.useCallback((O, A = !1) => {
    if (!Q) return;
    gl.current !== null && cancelAnimationFrame(gl.current), vl.current = O;
    const s = kl(O), z = Tl.current.indexOf(document.activeElement);
    if (z !== -1 && z !== s && Al.current?.focus({ preventScroll: !0 }), St(s), A || Cl.current) {
      ol.current = O, gl.current = null, Wl();
      return;
    }
    const D = ol.current, B = performance.now(), X = (L) => {
      const I = Math.min(1, (L - B) / 240), Gl = 1 - Math.pow(1 - I, 4);
      ol.current = D + (O - D) * Gl, Wl(), gl.current = I < 1 ? requestAnimationFrame(X) : null;
    };
    gl.current = requestAnimationFrame(X);
  }, [Q, kl, Wl]), Rl = zl.useCallback((O, A = !1) => {
    if (!Q) return;
    const s = x ? O + Math.round((vl.current - O) / Q) * Q : O;
    jl(Ol(s), A);
  }, [Ol, Q, x, jl]), p = (O, A = !1) => jl(Ol(Math.round(vl.current) + O), A);
  Iy(() => {
    const O = Al.current;
    if (!O) return;
    const A = () => {
      _l.current = Tl.current[0]?.offsetWidth ?? 0, Wl();
    };
    A();
    const s = new ResizeObserver(A);
    return s.observe(O), () => s.disconnect();
  }, [Wl]), zl.useEffect(() => {
    const O = matchMedia("(prefers-reduced-motion: reduce)"), A = () => {
      Cl.current = O.matches, O.matches && jl(vl.current, !0);
    };
    return A(), O.addEventListener("change", A), () => O.removeEventListener("change", A);
  }, [jl]), zl.useEffect(() => () => {
    gl.current !== null && cancelAnimationFrame(gl.current);
  }, []), zl.useEffect(() => {
    Tl.current.length = Q, ul >= Q && Q > 0 && Rl(0, !0);
  }, [Q, ul, Rl]);
  const U = (O, A = !1) => {
    const s = R.current;
    if (!s || s.id !== O.pointerId || (R.current = null, !s.moved)) return;
    const z = performance.now() - s.t < 100 ? s.v : 0, D = A ? 0 : Math.max(-1, Math.min(1, z * 0.14));
    jl(Ol(Math.round(ol.current + D))), O.currentTarget.hasPointerCapture(O.pointerId) && O.currentTarget.releasePointerCapture(O.pointerId);
  }, V = f[ul] ?? f[0];
  return V ? /* @__PURE__ */ Ml.jsxs(
    "div",
    {
      className: xf("cf-carousel w-full", yl),
      style: { "--cf-card": N },
      role: "region",
      "aria-roledescription": "Karussell",
      "aria-label": nl,
      children: [
        /* @__PURE__ */ Ml.jsxs("div", { className: xf("cf-gallery", q && "cf-gallery-navigation"), children: [
          q && /* @__PURE__ */ Ml.jsx(
            "button",
            {
              type: "button",
              className: "cf-arrow",
              "aria-label": "Vorherigen Fachbereich auswählen",
              disabled: Q < 2 || !x && ul === 0,
              onClick: (O) => p(-1, O.detail === 0),
              children: /* @__PURE__ */ Ml.jsx(ay, { size: 22, "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ Ml.jsx(
            "div",
            {
              className: "cf-frame",
              ref: Al,
              tabIndex: 0,
              "aria-label": "Fachauswahl. Mit den Pfeiltasten blättern, mit Tab zum ausgewählten Fach.",
              onKeyDown: (O) => {
                O.key === "ArrowLeft" || O.key === "ArrowRight" ? (O.preventDefault(), p(O.key === "ArrowLeft" ? -1 : 1, !0)) : (O.key === "Home" || O.key === "End") && (O.preventDefault(), Rl(O.key === "Home" ? 0 : Q - 1, !0));
              },
              onPointerDown: (O) => {
                !O.isPrimary || O.button !== 0 || R.current || (gl.current !== null && cancelAnimationFrame(gl.current), gl.current = null, k.current = !1, vl.current = ol.current, R.current = { id: O.pointerId, x: O.clientX, y: O.clientY, pos: ol.current, v: 0, t: performance.now(), moved: !1 });
              },
              onPointerMove: (O) => {
                const A = R.current;
                if (!A || A.id !== O.pointerId || !_l.current) return;
                const s = O.clientX - A.x, z = O.clientY - A.y;
                if (!A.moved) {
                  if (Math.max(Math.abs(s), Math.abs(z)) < 8) return;
                  if (Math.abs(z) > Math.abs(s)) {
                    R.current = null;
                    return;
                  }
                }
                A.moved || (A.moved = !0, k.current = !0, O.currentTarget.focus({ preventScroll: !0 }), O.currentTarget.setPointerCapture(O.pointerId));
                const D = performance.now(), B = ol.current;
                ol.current = Ol(A.pos - (O.clientX - A.x) / (_l.current * (1 + w))), A.v = (ol.current - B) / Math.max(D - A.t, 1) * 1e3, A.t = D, St(kl(ol.current)), Wl();
              },
              onPointerUp: (O) => U(O),
              onPointerCancel: (O) => U(O, !0),
              onLostPointerCapture: (O) => {
                O.target === O.currentTarget && R.current?.id === O.pointerId && U(O, !0);
              },
              style: { touchAction: "pan-y pinch-zoom" },
              children: /* @__PURE__ */ Ml.jsx("div", { className: "cf-stage", children: f.map((O, A) => /* @__PURE__ */ Ml.jsxs(
                "a",
                {
                  ref: (s) => {
                    Tl.current[A] = s;
                  },
                  href: O.href,
                  tabIndex: A === ul ? 0 : -1,
                  "aria-hidden": A !== ul,
                  "aria-label": `${O.title} öffnen, ${O.subtitle}`,
                  "aria-current": A === ul ? "true" : void 0,
                  className: xf("cf-card", Ul),
                  onClick: (s) => {
                    if (k.current && s.detail !== 0) {
                      s.preventDefault(), k.current = !1;
                      return;
                    }
                    k.current = !1, A !== ul && (s.preventDefault(), Rl(A));
                  },
                  onDragStart: (s) => s.preventDefault(),
                  children: [
                    /* @__PURE__ */ Ml.jsx("img", { src: O.src, alt: O.alt, draggable: !1, width: "800", height: "800" }),
                    /* @__PURE__ */ Ml.jsxs("span", { className: "cf-card-content", children: [
                      /* @__PURE__ */ Ml.jsx("span", { className: "cf-class", children: O.subtitle }),
                      /* @__PURE__ */ Ml.jsx("strong", { children: O.title }),
                      /* @__PURE__ */ Ml.jsxs("span", { className: "cf-card-action", children: [
                        "Angebote öffnen ",
                        /* @__PURE__ */ Ml.jsx(ty, { size: 18, "aria-hidden": "true" })
                      ] })
                    ] })
                  ]
                },
                O.href
              )) })
            }
          ),
          q && /* @__PURE__ */ Ml.jsx(
            "button",
            {
              type: "button",
              className: "cf-arrow",
              "aria-label": "Nächsten Fachbereich auswählen",
              disabled: Q < 2 || !x && ul === Q - 1,
              onClick: (O) => p(1, O.detail === 0),
              children: /* @__PURE__ */ Ml.jsx(uy, { size: 22, "aria-hidden": "true" })
            }
          )
        ] }),
        /* @__PURE__ */ Ml.jsx("div", { className: "cf-toolbar", children: /* @__PURE__ */ Ml.jsx("div", { className: "cf-caption", "aria-live": "polite", "aria-atomic": "true", children: g && /* @__PURE__ */ Ml.jsxs(Ml.Fragment, { children: [
          /* @__PURE__ */ Ml.jsxs("span", { className: "cf-count", children: [
            V.title,
            " · ",
            ul + 1,
            " von ",
            Q
          ] }),
          /* @__PURE__ */ Ml.jsx("p", { children: V.description })
        ] }) }) }),
        J && /* @__PURE__ */ Ml.jsx("div", { className: "cf-pagination", role: "group", "aria-label": "Fachbereich direkt auswählen", children: f.map((O, A) => /* @__PURE__ */ Ml.jsx(
          "button",
          {
            type: "button",
            "aria-label": `${O.title} auswählen`,
            "aria-current": ul === A ? "true" : void 0,
            onClick: (s) => Rl(A, s.detail === 0),
            children: /* @__PURE__ */ Ml.jsx("span", { "aria-hidden": "true" })
          },
          O.href
        )) }),
        /* @__PURE__ */ Ml.jsx("p", { className: "cf-hint", children: "Wischen oder mit den Pfeilen blättern. Karte antippen, um den Bereich zu öffnen." })
      ]
    }
  ) : null;
}
const lv = [
  { src: "/Q12/Fabrik/assets/factory.png", alt: "Die Schokoladenfabrik bei Abendlicht.", title: "Wirtschaft & Recht", subtitle: "Klasse 10, 11 & Q12", href: "/wirtschaft-recht/", description: "Zusammenhänge verstehen. Entscheidungen begründen." },
  { src: "/assets/subjects/books.jpg", alt: "Ein Regal voller Bücher.", title: "Deutsch", subtitle: "Klasse 5", href: "/deutsch/", description: "Geschichten lesen. Sprache entdecken." },
  { src: "/assets/subjects/london.jpg", alt: "Die Tower Bridge und die Themse in London.", title: "Englisch", subtitle: "Klasse 7, 10 & 11", href: "/englisch/", description: "Wörter lernen. Dein Wissen spielerisch überprüfen." },
  { src: "/assets/subjects/school.jpg", alt: "Bücher und Buntstifte auf einem Schreibtisch.", title: "Schulleben", subtitle: "SMV-Zimmer buchen", href: "/schulleben/", description: "Freie Termine finden. Platz für eure Ideen." },
  { src: "/10/Kreuzfahrt/assets/sonnendeck.webp", alt: "Sonnendeck des Kreuzfahrtschiffs mit Pool und Meerblick.", title: "Mission Traumschiff", subtitle: "Wirtschaft & Recht · Klasse 10", href: "/10/Kreuzfahrt/", description: "Drei Bordakten. Ein eigenes Urteil zur Nachhaltigkeit." }
];
class tv extends zl.Component {
  state = { failed: !1 };
  static getDerivedStateFromError() {
    return { failed: !0 };
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}
const ev = {
  "#wirtschaft": "/wirtschaft-recht/",
  "#deutsch": "/deutsch/",
  "#englisch": "/englisch/",
  "#schulleben": "/schulleben/"
}, hm = () => {
  const f = ev[window.location.hash];
  return f && window.location.replace(f), !!f;
};
window.addEventListener("hashchange", hm);
if (!hm()) {
  const f = document.getElementById("subject-carousel-root");
  f && J0.createRoot(f).render(/* @__PURE__ */ Ml.jsx(tv, { children: /* @__PURE__ */ Ml.jsx(Py, { slides: lv, showPagination: !1 }) }));
}
