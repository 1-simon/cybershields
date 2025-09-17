var ud = Object.defineProperty;
var dd = (e, t, n) =>
  t in e
    ? ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var Ze = (e, t, n) => dd(e, typeof t != "symbol" ? t + "" : t, n);
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const l of i)
      if (l.type === "childList")
        for (const a of l.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const l = {};
    return (
      i.integrity && (l.integrity = i.integrity),
      i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const l = n(i);
    fetch(i.href, l);
  }
})();
function Es(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Ro = { exports: {} },
  Ps = {},
  Wo = { exports: {} },
  D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gr = Symbol.for("react.element"),
  md = Symbol.for("react.portal"),
  fd = Symbol.for("react.fragment"),
  pd = Symbol.for("react.strict_mode"),
  hd = Symbol.for("react.profiler"),
  gd = Symbol.for("react.provider"),
  xd = Symbol.for("react.context"),
  yd = Symbol.for("react.forward_ref"),
  vd = Symbol.for("react.suspense"),
  wd = Symbol.for("react.memo"),
  bd = Symbol.for("react.lazy"),
  ga = Symbol.iterator;
function jd(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ga && e[ga]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Oo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Do = Object.assign,
  Fo = {};
function Tn(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fo),
    (this.updater = n || Oo);
}
Tn.prototype.isReactComponent = {};
Tn.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Tn.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function $o() {}
$o.prototype = Tn.prototype;
function vl(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Fo),
    (this.updater = n || Oo);
}
var wl = (vl.prototype = new $o());
wl.constructor = vl;
Do(wl, Tn.prototype);
wl.isPureReactComponent = !0;
var xa = Array.isArray,
  Uo = Object.prototype.hasOwnProperty,
  bl = { current: null },
  Ho = { key: !0, ref: !0, __self: !0, __source: !0 };
function Vo(e, t, n) {
  var r,
    i = {},
    l = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (l = "" + t.key),
    t))
      Uo.call(t, r) && !Ho.hasOwnProperty(r) && (i[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) i.children = n;
  else if (1 < o) {
    for (var c = Array(o), d = 0; d < o; d++) c[d] = arguments[d + 2];
    i.children = c;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) i[r] === void 0 && (i[r] = o[r]);
  return {
    $$typeof: gr,
    type: e,
    key: l,
    ref: a,
    props: i,
    _owner: bl.current,
  };
}
function Nd(e, t) {
  return {
    $$typeof: gr,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function jl(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function Sd(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ya = /\/+/g;
function Qs(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Sd("" + e.key)
    : t.toString(36);
}
function Ur(e, t, n, r, i) {
  var l = typeof e;
  (l === "undefined" || l === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (l) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case gr:
          case md:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === "" ? "." + Qs(a, 0) : r),
      xa(i)
        ? ((n = ""),
          e != null && (n = e.replace(ya, "$&/") + "/"),
          Ur(i, t, n, "", function (d) {
            return d;
          }))
        : i != null &&
          (jl(i) &&
            (i = Nd(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ""
                  : ("" + i.key).replace(ya, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), xa(e)))
    for (var o = 0; o < e.length; o++) {
      l = e[o];
      var c = r + Qs(l, o);
      a += Ur(l, t, n, c, i);
    }
  else if (((c = jd(e)), typeof c == "function"))
    for (e = c.call(e), o = 0; !(l = e.next()).done; )
      (l = l.value), (c = r + Qs(l, o++)), (a += Ur(l, t, n, c, i));
  else if (l === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return a;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    Ur(e, r, "", "", function (l) {
      return t.call(n, l, i++);
    }),
    r
  );
}
function kd(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ye = { current: null },
  Hr = { transition: null },
  Cd = {
    ReactCurrentDispatcher: ye,
    ReactCurrentBatchConfig: Hr,
    ReactCurrentOwner: bl,
  };
function Bo() {
  throw Error("act(...) is not supported in production builds of React.");
}
D.Children = {
  map: Sr,
  forEach: function (e, t, n) {
    Sr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Sr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Sr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!jl(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
D.Component = Tn;
D.Fragment = fd;
D.Profiler = hd;
D.PureComponent = vl;
D.StrictMode = pd;
D.Suspense = vd;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Cd;
D.act = Bo;
D.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Do({}, e.props),
    i = e.key,
    l = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((l = t.ref), (a = bl.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (c in t)
      Uo.call(t, c) &&
        !Ho.hasOwnProperty(c) &&
        (r[c] = t[c] === void 0 && o !== void 0 ? o[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1) r.children = n;
  else if (1 < c) {
    o = Array(c);
    for (var d = 0; d < c; d++) o[d] = arguments[d + 2];
    r.children = o;
  }
  return { $$typeof: gr, type: e.type, key: i, ref: l, props: r, _owner: a };
};
D.createContext = function (e) {
  return (
    (e = {
      $$typeof: xd,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: gd, _context: e }),
    (e.Consumer = e)
  );
};
D.createElement = Vo;
D.createFactory = function (e) {
  var t = Vo.bind(null, e);
  return (t.type = e), t;
};
D.createRef = function () {
  return { current: null };
};
D.forwardRef = function (e) {
  return { $$typeof: yd, render: e };
};
D.isValidElement = jl;
D.lazy = function (e) {
  return { $$typeof: bd, _payload: { _status: -1, _result: e }, _init: kd };
};
D.memo = function (e, t) {
  return { $$typeof: wd, type: e, compare: t === void 0 ? null : t };
};
D.startTransition = function (e) {
  var t = Hr.transition;
  Hr.transition = {};
  try {
    e();
  } finally {
    Hr.transition = t;
  }
};
D.unstable_act = Bo;
D.useCallback = function (e, t) {
  return ye.current.useCallback(e, t);
};
D.useContext = function (e) {
  return ye.current.useContext(e);
};
D.useDebugValue = function () {};
D.useDeferredValue = function (e) {
  return ye.current.useDeferredValue(e);
};
D.useEffect = function (e, t) {
  return ye.current.useEffect(e, t);
};
D.useId = function () {
  return ye.current.useId();
};
D.useImperativeHandle = function (e, t, n) {
  return ye.current.useImperativeHandle(e, t, n);
};
D.useInsertionEffect = function (e, t) {
  return ye.current.useInsertionEffect(e, t);
};
D.useLayoutEffect = function (e, t) {
  return ye.current.useLayoutEffect(e, t);
};
D.useMemo = function (e, t) {
  return ye.current.useMemo(e, t);
};
D.useReducer = function (e, t, n) {
  return ye.current.useReducer(e, t, n);
};
D.useRef = function (e) {
  return ye.current.useRef(e);
};
D.useState = function (e) {
  return ye.current.useState(e);
};
D.useSyncExternalStore = function (e, t, n) {
  return ye.current.useSyncExternalStore(e, t, n);
};
D.useTransition = function () {
  return ye.current.useTransition();
};
D.version = "18.3.1";
Wo.exports = D;
var N = Wo.exports;
const ze = Es(N);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td = N,
  Ed = Symbol.for("react.element"),
  Pd = Symbol.for("react.fragment"),
  Md = Object.prototype.hasOwnProperty,
  Ad = Td.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Ld = { key: !0, ref: !0, __self: !0, __source: !0 };
function qo(e, t, n) {
  var r,
    i = {},
    l = null,
    a = null;
  n !== void 0 && (l = "" + n),
    t.key !== void 0 && (l = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) Md.call(t, r) && !Ld.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: Ed,
    type: e,
    key: l,
    ref: a,
    props: i,
    _owner: Ad.current,
  };
}
Ps.Fragment = Pd;
Ps.jsx = qo;
Ps.jsxs = qo;
Ro.exports = Ps;
var s = Ro.exports,
  Qo = { exports: {} },
  Pe = {},
  Go = { exports: {} },
  Ko = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, R) {
    var O = M.length;
    M.push(R);
    e: for (; 0 < O; ) {
      var Z = (O - 1) >>> 1,
        ie = M[Z];
      if (0 < i(ie, R)) (M[Z] = R), (M[O] = ie), (O = Z);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var R = M[0],
      O = M.pop();
    if (O !== R) {
      M[0] = O;
      e: for (var Z = 0, ie = M.length, jr = ie >>> 1; Z < jr; ) {
        var At = 2 * (Z + 1) - 1,
          qs = M[At],
          Lt = At + 1,
          Nr = M[Lt];
        if (0 > i(qs, O))
          Lt < ie && 0 > i(Nr, qs)
            ? ((M[Z] = Nr), (M[Lt] = O), (Z = Lt))
            : ((M[Z] = qs), (M[At] = O), (Z = At));
        else if (Lt < ie && 0 > i(Nr, O)) (M[Z] = Nr), (M[Lt] = O), (Z = Lt);
        else break e;
      }
    }
    return R;
  }
  function i(M, R) {
    var O = M.sortIndex - R.sortIndex;
    return O !== 0 ? O : M.id - R.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var l = performance;
    e.unstable_now = function () {
      return l.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var c = [],
    d = [],
    h = 1,
    y = null,
    g = 3,
    j = !1,
    v = !1,
    w = !1,
    b = typeof setTimeout == "function" ? setTimeout : null,
    m = typeof clearTimeout == "function" ? clearTimeout : null,
    u = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function f(M) {
    for (var R = n(d); R !== null; ) {
      if (R.callback === null) r(d);
      else if (R.startTime <= M)
        r(d), (R.sortIndex = R.expirationTime), t(c, R);
      else break;
      R = n(d);
    }
  }
  function p(M) {
    if (((w = !1), f(M), !v))
      if (n(c) !== null) (v = !0), H(x);
      else {
        var R = n(d);
        R !== null && ne(p, R.startTime - M);
      }
  }
  function x(M, R) {
    (v = !1), w && ((w = !1), m(k), (k = -1)), (j = !0);
    var O = g;
    try {
      for (
        f(R), y = n(c);
        y !== null && (!(y.expirationTime > R) || (M && !A()));

      ) {
        var Z = y.callback;
        if (typeof Z == "function") {
          (y.callback = null), (g = y.priorityLevel);
          var ie = Z(y.expirationTime <= R);
          (R = e.unstable_now()),
            typeof ie == "function" ? (y.callback = ie) : y === n(c) && r(c),
            f(R);
        } else r(c);
        y = n(c);
      }
      if (y !== null) var jr = !0;
      else {
        var At = n(d);
        At !== null && ne(p, At.startTime - R), (jr = !1);
      }
      return jr;
    } finally {
      (y = null), (g = O), (j = !1);
    }
  }
  var S = !1,
    C = null,
    k = -1,
    P = 5,
    T = -1;
  function A() {
    return !(e.unstable_now() - T < P);
  }
  function I() {
    if (C !== null) {
      var M = e.unstable_now();
      T = M;
      var R = !0;
      try {
        R = C(!0, M);
      } finally {
        R ? z() : ((S = !1), (C = null));
      }
    } else S = !1;
  }
  var z;
  if (typeof u == "function")
    z = function () {
      u(I);
    };
  else if (typeof MessageChannel < "u") {
    var L = new MessageChannel(),
      W = L.port2;
    (L.port1.onmessage = I),
      (z = function () {
        W.postMessage(null);
      });
  } else
    z = function () {
      b(I, 0);
    };
  function H(M) {
    (C = M), S || ((S = !0), z());
  }
  function ne(M, R) {
    k = b(function () {
      M(e.unstable_now());
    }, R);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      v || j || ((v = !0), H(x));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (P = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(c);
    }),
    (e.unstable_next = function (M) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = g;
      }
      var O = g;
      g = R;
      try {
        return M();
      } finally {
        g = O;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, R) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var O = g;
      g = M;
      try {
        return R();
      } finally {
        g = O;
      }
    }),
    (e.unstable_scheduleCallback = function (M, R, O) {
      var Z = e.unstable_now();
      switch (
        (typeof O == "object" && O !== null
          ? ((O = O.delay), (O = typeof O == "number" && 0 < O ? Z + O : Z))
          : (O = Z),
        M)
      ) {
        case 1:
          var ie = -1;
          break;
        case 2:
          ie = 250;
          break;
        case 5:
          ie = 1073741823;
          break;
        case 4:
          ie = 1e4;
          break;
        default:
          ie = 5e3;
      }
      return (
        (ie = O + ie),
        (M = {
          id: h++,
          callback: R,
          priorityLevel: M,
          startTime: O,
          expirationTime: ie,
          sortIndex: -1,
        }),
        O > Z
          ? ((M.sortIndex = O),
            t(d, M),
            n(c) === null &&
              M === n(d) &&
              (w ? (m(k), (k = -1)) : (w = !0), ne(p, O - Z)))
          : ((M.sortIndex = ie), t(c, M), v || j || ((v = !0), H(x))),
        M
      );
    }),
    (e.unstable_shouldYield = A),
    (e.unstable_wrapCallback = function (M) {
      var R = g;
      return function () {
        var O = g;
        g = R;
        try {
          return M.apply(this, arguments);
        } finally {
          g = O;
        }
      };
    });
})(Ko);
Go.exports = Ko;
var _d = Go.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zd = N,
  Ee = _d;
function E(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Yo = new Set(),
  Jn = {};
function Gt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) Yo.add(t[e]);
}
var it = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Ni = Object.prototype.hasOwnProperty,
  Id =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  va = {},
  wa = {};
function Rd(e) {
  return Ni.call(wa, e)
    ? !0
    : Ni.call(va, e)
    ? !1
    : Id.test(e)
    ? (wa[e] = !0)
    : ((va[e] = !0), !1);
}
function Wd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Od(e, t, n, r) {
  if (t === null || typeof t > "u" || Wd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ve(e, t, n, r, i, l, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = l),
    (this.removeEmptyString = a);
}
var ue = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ue[t] = new ve(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ue[e] = new ve(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ue[e] = new ve(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ue[e] = new ve(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ue[e] = new ve(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ue[e] = new ve(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ue[e] = new ve(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Nl = /[\-:]([a-z])/g;
function Sl(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Sl);
    ue[t] = new ve(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Nl, Sl);
    ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Nl, Sl);
  ue[t] = new ve(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ue.xlinkHref = new ve(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ue[e] = new ve(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function kl(e, t, n, r) {
  var i = ue.hasOwnProperty(t) ? ue[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Od(t, n, i, r) && (n = null),
    r || i === null
      ? Rd(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ct = zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  kr = Symbol.for("react.element"),
  Zt = Symbol.for("react.portal"),
  Jt = Symbol.for("react.fragment"),
  Cl = Symbol.for("react.strict_mode"),
  Si = Symbol.for("react.profiler"),
  Xo = Symbol.for("react.provider"),
  Zo = Symbol.for("react.context"),
  Tl = Symbol.for("react.forward_ref"),
  ki = Symbol.for("react.suspense"),
  Ci = Symbol.for("react.suspense_list"),
  El = Symbol.for("react.memo"),
  dt = Symbol.for("react.lazy"),
  Jo = Symbol.for("react.offscreen"),
  ba = Symbol.iterator;
function Mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ba && e[ba]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Y = Object.assign,
  Gs;
function Fn(e) {
  if (Gs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Gs = (t && t[1]) || "";
    }
  return (
    `
` +
    Gs +
    e
  );
}
var Ks = !1;
function Ys(e, t) {
  if (!e || Ks) return "";
  Ks = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (d) {
          var r = d;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (d) {
          r = d;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (d) {
        r = d;
      }
      e();
    }
  } catch (d) {
    if (d && r && typeof d.stack == "string") {
      for (
        var i = d.stack.split(`
`),
          l = r.stack.split(`
`),
          a = i.length - 1,
          o = l.length - 1;
        1 <= a && 0 <= o && i[a] !== l[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (i[a] !== l[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || i[a] !== l[o])) {
                var c =
                  `
` + i[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    c.includes("<anonymous>") &&
                    (c = c.replace("<anonymous>", e.displayName)),
                  c
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Ks = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function Dd(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Ys(e.type, !1)), e;
    case 11:
      return (e = Ys(e.type.render, !1)), e;
    case 1:
      return (e = Ys(e.type, !0)), e;
    default:
      return "";
  }
}
function Ti(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Jt:
      return "Fragment";
    case Zt:
      return "Portal";
    case Si:
      return "Profiler";
    case Cl:
      return "StrictMode";
    case ki:
      return "Suspense";
    case Ci:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Zo:
        return (e.displayName || "Context") + ".Consumer";
      case Xo:
        return (e._context.displayName || "Context") + ".Provider";
      case Tl:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case El:
        return (
          (t = e.displayName || null), t !== null ? t : Ti(e.type) || "Memo"
        );
      case dt:
        (t = e._payload), (e = e._init);
        try {
          return Ti(e(t));
        } catch {}
    }
  return null;
}
function Fd(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ti(t);
    case 8:
      return t === Cl ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ec(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $d(e) {
  var t = ec(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      l = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (a) {
          (r = "" + a), l.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Cr(e) {
  e._valueTracker || (e._valueTracker = $d(e));
}
function tc(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ec(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ns(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return Y({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function ja(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function nc(e, t) {
  (t = t.checked), t != null && kl(e, "checked", t, !1);
}
function Pi(e, t) {
  nc(e, t);
  var n = kt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Mi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Mi(e, t.type, kt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Na(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Mi(e, t, n) {
  (t !== "number" || ns(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $n = Array.isArray;
function dn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ai(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Y({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Sa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(E(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kt(n) };
}
function rc(e, t) {
  var n = kt(t.value),
    r = kt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function ka(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Tr,
  ic = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Tr = Tr || document.createElement("div"),
          Tr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Tr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ud = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function (e) {
  Ud.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Vn[t] = Vn[e]);
  });
});
function lc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Vn.hasOwnProperty(e) && Vn[e])
    ? ("" + t).trim()
    : t + "px";
}
function ac(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = lc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var Hd = Y(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function _i(e, t) {
  if (t) {
    if (Hd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
  }
}
function zi(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
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
var Ii = null;
function Pl(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Ri = null,
  mn = null,
  fn = null;
function Ca(e) {
  if ((e = vr(e))) {
    if (typeof Ri != "function") throw Error(E(280));
    var t = e.stateNode;
    t && ((t = zs(t)), Ri(e.stateNode, e.type, t));
  }
}
function oc(e) {
  mn ? (fn ? fn.push(e) : (fn = [e])) : (mn = e);
}
function cc() {
  if (mn) {
    var e = mn,
      t = fn;
    if (((fn = mn = null), Ca(e), t)) for (e = 0; e < t.length; e++) Ca(t[e]);
  }
}
function uc(e, t) {
  return e(t);
}
function dc() {}
var Xs = !1;
function mc(e, t, n) {
  if (Xs) return e(t, n);
  Xs = !0;
  try {
    return uc(e, t, n);
  } finally {
    (Xs = !1), (mn !== null || fn !== null) && (dc(), cc());
  }
}
function tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = zs(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var Wi = !1;
if (it)
  try {
    var An = {};
    Object.defineProperty(An, "passive", {
      get: function () {
        Wi = !0;
      },
    }),
      window.addEventListener("test", An, An),
      window.removeEventListener("test", An, An);
  } catch {
    Wi = !1;
  }
function Vd(e, t, n, r, i, l, a, o, c) {
  var d = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, d);
  } catch (h) {
    this.onError(h);
  }
}
var Bn = !1,
  rs = null,
  ss = !1,
  Oi = null,
  Bd = {
    onError: function (e) {
      (Bn = !0), (rs = e);
    },
  };
function qd(e, t, n, r, i, l, a, o, c) {
  (Bn = !1), (rs = null), Vd.apply(Bd, arguments);
}
function Qd(e, t, n, r, i, l, a, o, c) {
  if ((qd.apply(this, arguments), Bn)) {
    if (Bn) {
      var d = rs;
      (Bn = !1), (rs = null);
    } else throw Error(E(198));
    ss || ((ss = !0), (Oi = d));
  }
}
function Kt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function fc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Ta(e) {
  if (Kt(e) !== e) throw Error(E(188));
}
function Gd(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Kt(e)), t === null)) throw Error(E(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var l = i.alternate;
    if (l === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === l.child) {
      for (l = i.child; l; ) {
        if (l === n) return Ta(i), e;
        if (l === r) return Ta(i), t;
        l = l.sibling;
      }
      throw Error(E(188));
    }
    if (n.return !== r.return) (n = i), (r = l);
    else {
      for (var a = !1, o = i.child; o; ) {
        if (o === n) {
          (a = !0), (n = i), (r = l);
          break;
        }
        if (o === r) {
          (a = !0), (r = i), (n = l);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = l.child; o; ) {
          if (o === n) {
            (a = !0), (n = l), (r = i);
            break;
          }
          if (o === r) {
            (a = !0), (r = l), (n = i);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function pc(e) {
  return (e = Gd(e)), e !== null ? hc(e) : null;
}
function hc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = hc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var gc = Ee.unstable_scheduleCallback,
  Ea = Ee.unstable_cancelCallback,
  Kd = Ee.unstable_shouldYield,
  Yd = Ee.unstable_requestPaint,
  J = Ee.unstable_now,
  Xd = Ee.unstable_getCurrentPriorityLevel,
  Ml = Ee.unstable_ImmediatePriority,
  xc = Ee.unstable_UserBlockingPriority,
  is = Ee.unstable_NormalPriority,
  Zd = Ee.unstable_LowPriority,
  yc = Ee.unstable_IdlePriority,
  Ms = null,
  Ye = null;
function Jd(e) {
  if (Ye && typeof Ye.onCommitFiberRoot == "function")
    try {
      Ye.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Ve = Math.clz32 ? Math.clz32 : nm,
  em = Math.log,
  tm = Math.LN2;
function nm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((em(e) / tm) | 0)) | 0;
}
var Er = 64,
  Pr = 4194304;
function Un(e) {
  switch (e & -e) {
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
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ls(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    l = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~i;
    o !== 0 ? (r = Un(o)) : ((l &= a), l !== 0 && (r = Un(l)));
  } else (a = n & ~i), a !== 0 ? (r = Un(a)) : l !== 0 && (r = Un(l));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Ve(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function rm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function sm(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      l = e.pendingLanes;
    0 < l;

  ) {
    var a = 31 - Ve(l),
      o = 1 << a,
      c = i[a];
    c === -1
      ? (!(o & n) || o & r) && (i[a] = rm(o, t))
      : c <= t && (e.expiredLanes |= o),
      (l &= ~o);
  }
}
function Di(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vc() {
  var e = Er;
  return (Er <<= 1), !(Er & 4194240) && (Er = 64), e;
}
function Zs(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function xr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Ve(t)),
    (e[t] = n);
}
function im(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Ve(n),
      l = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
  }
}
function Al(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Ve(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function wc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var bc,
  Ll,
  jc,
  Nc,
  Sc,
  Fi = !1,
  Mr = [],
  xt = null,
  yt = null,
  vt = null,
  nr = new Map(),
  rr = new Map(),
  ft = [],
  lm =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Pa(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      xt = null;
      break;
    case "dragenter":
    case "dragleave":
      yt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rr.delete(t.pointerId);
  }
}
function Ln(e, t, n, r, i, l) {
  return e === null || e.nativeEvent !== l
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: l,
        targetContainers: [i],
      }),
      t !== null && ((t = vr(t)), t !== null && Ll(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function am(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (xt = Ln(xt, e, t, n, r, i)), !0;
    case "dragenter":
      return (yt = Ln(yt, e, t, n, r, i)), !0;
    case "mouseover":
      return (vt = Ln(vt, e, t, n, r, i)), !0;
    case "pointerover":
      var l = i.pointerId;
      return nr.set(l, Ln(nr.get(l) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (l = i.pointerId), rr.set(l, Ln(rr.get(l) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function kc(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Kt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = fc(n)), t !== null)) {
          (e.blockedOn = t),
            Sc(e.priority, function () {
              jc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Vr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = $i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Ii = r), n.target.dispatchEvent(r), (Ii = null);
    } else return (t = vr(n)), t !== null && Ll(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ma(e, t, n) {
  Vr(e) && n.delete(t);
}
function om() {
  (Fi = !1),
    xt !== null && Vr(xt) && (xt = null),
    yt !== null && Vr(yt) && (yt = null),
    vt !== null && Vr(vt) && (vt = null),
    nr.forEach(Ma),
    rr.forEach(Ma);
}
function _n(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fi ||
      ((Fi = !0),
      Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, om)));
}
function sr(e) {
  function t(i) {
    return _n(i, e);
  }
  if (0 < Mr.length) {
    _n(Mr[0], e);
    for (var n = 1; n < Mr.length; n++) {
      var r = Mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    xt !== null && _n(xt, e),
      yt !== null && _n(yt, e),
      vt !== null && _n(vt, e),
      nr.forEach(t),
      rr.forEach(t),
      n = 0;
    n < ft.length;
    n++
  )
    (r = ft[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && ((n = ft[0]), n.blockedOn === null); )
    kc(n), n.blockedOn === null && ft.shift();
}
var pn = ct.ReactCurrentBatchConfig,
  as = !0;
function cm(e, t, n, r) {
  var i = U,
    l = pn.transition;
  pn.transition = null;
  try {
    (U = 1), _l(e, t, n, r);
  } finally {
    (U = i), (pn.transition = l);
  }
}
function um(e, t, n, r) {
  var i = U,
    l = pn.transition;
  pn.transition = null;
  try {
    (U = 4), _l(e, t, n, r);
  } finally {
    (U = i), (pn.transition = l);
  }
}
function _l(e, t, n, r) {
  if (as) {
    var i = $i(e, t, n, r);
    if (i === null) oi(e, t, r, os, n), Pa(e, r);
    else if (am(i, e, t, n, r)) r.stopPropagation();
    else if ((Pa(e, r), t & 4 && -1 < lm.indexOf(e))) {
      for (; i !== null; ) {
        var l = vr(i);
        if (
          (l !== null && bc(l),
          (l = $i(e, t, n, r)),
          l === null && oi(e, t, r, os, n),
          l === i)
        )
          break;
        i = l;
      }
      i !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var os = null;
function $i(e, t, n, r) {
  if (((os = null), (e = Pl(r)), (e = It(e)), e !== null))
    if (((t = Kt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = fc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (os = e), null;
}
function Cc(e) {
  switch (e) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Xd()) {
        case Ml:
          return 1;
        case xc:
          return 4;
        case is:
        case Zd:
          return 16;
        case yc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ht = null,
  zl = null,
  Br = null;
function Tc() {
  if (Br) return Br;
  var e,
    t = zl,
    n = t.length,
    r,
    i = "value" in ht ? ht.value : ht.textContent,
    l = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === i[l - r]; r++);
  return (Br = i.slice(e, 1 < r ? 1 - r : void 0));
}
function qr(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ar() {
  return !0;
}
function Aa() {
  return !1;
}
function Me(e) {
  function t(n, r, i, l, a) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = l),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(l) : l[o]));
    return (
      (this.isDefaultPrevented = (
        l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
      )
        ? Ar
        : Aa),
      (this.isPropagationStopped = Aa),
      this
    );
  }
  return (
    Y(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = Ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ar));
      },
      persist: function () {},
      isPersistent: Ar,
    }),
    t
  );
}
var En = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Il = Me(En),
  yr = Y({}, En, { view: 0, detail: 0 }),
  dm = Me(yr),
  Js,
  ei,
  zn,
  As = Y({}, yr, {
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
    getModifierState: Rl,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zn &&
            (zn && e.type === "mousemove"
              ? ((Js = e.screenX - zn.screenX), (ei = e.screenY - zn.screenY))
              : (ei = Js = 0),
            (zn = e)),
          Js);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ei;
    },
  }),
  La = Me(As),
  mm = Y({}, As, { dataTransfer: 0 }),
  fm = Me(mm),
  pm = Y({}, yr, { relatedTarget: 0 }),
  ti = Me(pm),
  hm = Y({}, En, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gm = Me(hm),
  xm = Y({}, En, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ym = Me(xm),
  vm = Y({}, En, { data: 0 }),
  _a = Me(vm),
  wm = {
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
    MozPrintableKey: "Unidentified",
  },
  bm = {
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
    224: "Meta",
  },
  jm = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Nm(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = jm[e]) ? !!t[e] : !1;
}
function Rl() {
  return Nm;
}
var Sm = Y({}, yr, {
    key: function (e) {
      if (e.key) {
        var t = wm[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? bm[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Rl,
    charCode: function (e) {
      return e.type === "keypress" ? qr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? qr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  km = Me(Sm),
  Cm = Y({}, As, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  za = Me(Cm),
  Tm = Y({}, yr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Rl,
  }),
  Em = Me(Tm),
  Pm = Y({}, En, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Mm = Me(Pm),
  Am = Y({}, As, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Lm = Me(Am),
  _m = [9, 13, 27, 32],
  Wl = it && "CompositionEvent" in window,
  qn = null;
it && "documentMode" in document && (qn = document.documentMode);
var zm = it && "TextEvent" in window && !qn,
  Ec = it && (!Wl || (qn && 8 < qn && 11 >= qn)),
  Ia = " ",
  Ra = !1;
function Pc(e, t) {
  switch (e) {
    case "keyup":
      return _m.indexOf(t.keyCode) !== -1;
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
function Mc(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var en = !1;
function Im(e, t) {
  switch (e) {
    case "compositionend":
      return Mc(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ra = !0), Ia);
    case "textInput":
      return (e = t.data), e === Ia && Ra ? null : e;
    default:
      return null;
  }
}
function Rm(e, t) {
  if (en)
    return e === "compositionend" || (!Wl && Pc(e, t))
      ? ((e = Tc()), (Br = zl = ht = null), (en = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ec && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Wm = {
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
  week: !0,
};
function Wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Wm[e.type] : t === "textarea";
}
function Ac(e, t, n, r) {
  oc(r),
    (t = cs(t, "onChange")),
    0 < t.length &&
      ((n = new Il("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Qn = null,
  ir = null;
function Om(e) {
  Uc(e, 0);
}
function Ls(e) {
  var t = rn(e);
  if (tc(t)) return e;
}
function Dm(e, t) {
  if (e === "change") return t;
}
var Lc = !1;
if (it) {
  var ni;
  if (it) {
    var ri = "oninput" in document;
    if (!ri) {
      var Oa = document.createElement("div");
      Oa.setAttribute("oninput", "return;"),
        (ri = typeof Oa.oninput == "function");
    }
    ni = ri;
  } else ni = !1;
  Lc = ni && (!document.documentMode || 9 < document.documentMode);
}
function Da() {
  Qn && (Qn.detachEvent("onpropertychange", _c), (ir = Qn = null));
}
function _c(e) {
  if (e.propertyName === "value" && Ls(ir)) {
    var t = [];
    Ac(t, ir, e, Pl(e)), mc(Om, t);
  }
}
function Fm(e, t, n) {
  e === "focusin"
    ? (Da(), (Qn = t), (ir = n), Qn.attachEvent("onpropertychange", _c))
    : e === "focusout" && Da();
}
function $m(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ls(ir);
}
function Um(e, t) {
  if (e === "click") return Ls(t);
}
function Hm(e, t) {
  if (e === "input" || e === "change") return Ls(t);
}
function Vm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var qe = typeof Object.is == "function" ? Object.is : Vm;
function lr(e, t) {
  if (qe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Ni.call(t, i) || !qe(e[i], t[i])) return !1;
  }
  return !0;
}
function Fa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function $a(e, t) {
  var n = Fa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Fa(n);
  }
}
function zc(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zc(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ic() {
  for (var e = window, t = ns(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ns(e.document);
  }
  return t;
}
function Ol(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Bm(e) {
  var t = Ic(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zc(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Ol(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          l = Math.min(r.start, i);
        (r = r.end === void 0 ? l : Math.min(r.end, i)),
          !e.extend && l > r && ((i = r), (r = l), (l = i)),
          (i = $a(n, l));
        var a = $a(n, r);
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          l > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var qm = it && "documentMode" in document && 11 >= document.documentMode,
  tn = null,
  Ui = null,
  Gn = null,
  Hi = !1;
function Ua(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Hi ||
    tn == null ||
    tn !== ns(r) ||
    ((r = tn),
    "selectionStart" in r && Ol(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Gn && lr(Gn, r)) ||
      ((Gn = r),
      (r = cs(Ui, "onSelect")),
      0 < r.length &&
        ((t = new Il("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = tn))));
}
function Lr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var nn = {
    animationend: Lr("Animation", "AnimationEnd"),
    animationiteration: Lr("Animation", "AnimationIteration"),
    animationstart: Lr("Animation", "AnimationStart"),
    transitionend: Lr("Transition", "TransitionEnd"),
  },
  si = {},
  Rc = {};
it &&
  ((Rc = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete nn.animationend.animation,
    delete nn.animationiteration.animation,
    delete nn.animationstart.animation),
  "TransitionEvent" in window || delete nn.transitionend.transition);
function _s(e) {
  if (si[e]) return si[e];
  if (!nn[e]) return e;
  var t = nn[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rc) return (si[e] = t[n]);
  return e;
}
var Wc = _s("animationend"),
  Oc = _s("animationiteration"),
  Dc = _s("animationstart"),
  Fc = _s("transitionend"),
  $c = new Map(),
  Ha =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Et(e, t) {
  $c.set(e, t), Gt(t, [e]);
}
for (var ii = 0; ii < Ha.length; ii++) {
  var li = Ha[ii],
    Qm = li.toLowerCase(),
    Gm = li[0].toUpperCase() + li.slice(1);
  Et(Qm, "on" + Gm);
}
Et(Wc, "onAnimationEnd");
Et(Oc, "onAnimationIteration");
Et(Dc, "onAnimationStart");
Et("dblclick", "onDoubleClick");
Et("focusin", "onFocus");
Et("focusout", "onBlur");
Et(Fc, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Gt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Gt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Gt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Gt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Gt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Hn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Km = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
function Va(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Qd(r, t, void 0, e), (e.currentTarget = null);
}
function Uc(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var l = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            c = o.instance,
            d = o.currentTarget;
          if (((o = o.listener), c !== l && i.isPropagationStopped())) break e;
          Va(i, o, d), (l = c);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (c = o.instance),
            (d = o.currentTarget),
            (o = o.listener),
            c !== l && i.isPropagationStopped())
          )
            break e;
          Va(i, o, d), (l = c);
        }
    }
  }
  if (ss) throw ((e = Oi), (ss = !1), (Oi = null), e);
}
function B(e, t) {
  var n = t[Gi];
  n === void 0 && (n = t[Gi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Hc(t, e, 2, !1), n.add(r));
}
function ai(e, t, n) {
  var r = 0;
  t && (r |= 4), Hc(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function ar(e) {
  if (!e[_r]) {
    (e[_r] = !0),
      Yo.forEach(function (n) {
        n !== "selectionchange" && (Km.has(n) || ai(n, !1, e), ai(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || ((t[_r] = !0), ai("selectionchange", !1, t));
  }
}
function Hc(e, t, n, r) {
  switch (Cc(t)) {
    case 1:
      var i = cm;
      break;
    case 4:
      i = um;
      break;
    default:
      i = _l;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !Wi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, i) {
  var l = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === i || (o.nodeType === 8 && o.parentNode === i)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var c = a.tag;
            if (
              (c === 3 || c === 4) &&
              ((c = a.stateNode.containerInfo),
              c === i || (c.nodeType === 8 && c.parentNode === i))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = It(o)), a === null)) return;
          if (((c = a.tag), c === 5 || c === 6)) {
            r = l = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  mc(function () {
    var d = l,
      h = Pl(n),
      y = [];
    e: {
      var g = $c.get(e);
      if (g !== void 0) {
        var j = Il,
          v = e;
        switch (e) {
          case "keypress":
            if (qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            j = km;
            break;
          case "focusin":
            (v = "focus"), (j = ti);
            break;
          case "focusout":
            (v = "blur"), (j = ti);
            break;
          case "beforeblur":
          case "afterblur":
            j = ti;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            j = La;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            j = fm;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            j = Em;
            break;
          case Wc:
          case Oc:
          case Dc:
            j = gm;
            break;
          case Fc:
            j = Mm;
            break;
          case "scroll":
            j = dm;
            break;
          case "wheel":
            j = Lm;
            break;
          case "copy":
          case "cut":
          case "paste":
            j = ym;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            j = za;
        }
        var w = (t & 4) !== 0,
          b = !w && e === "scroll",
          m = w ? (g !== null ? g + "Capture" : null) : g;
        w = [];
        for (var u = d, f; u !== null; ) {
          f = u;
          var p = f.stateNode;
          if (
            (f.tag === 5 &&
              p !== null &&
              ((f = p),
              m !== null && ((p = tr(u, m)), p != null && w.push(or(u, p, f)))),
            b)
          )
            break;
          u = u.return;
        }
        0 < w.length &&
          ((g = new j(g, v, null, n, h)), y.push({ event: g, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (j = e === "mouseout" || e === "pointerout"),
          g &&
            n !== Ii &&
            (v = n.relatedTarget || n.fromElement) &&
            (It(v) || v[lt]))
        )
          break e;
        if (
          (j || g) &&
          ((g =
            h.window === h
              ? h
              : (g = h.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          j
            ? ((v = n.relatedTarget || n.toElement),
              (j = d),
              (v = v ? It(v) : null),
              v !== null &&
                ((b = Kt(v)), v !== b || (v.tag !== 5 && v.tag !== 6)) &&
                (v = null))
            : ((j = null), (v = d)),
          j !== v)
        ) {
          if (
            ((w = La),
            (p = "onMouseLeave"),
            (m = "onMouseEnter"),
            (u = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = za),
              (p = "onPointerLeave"),
              (m = "onPointerEnter"),
              (u = "pointer")),
            (b = j == null ? g : rn(j)),
            (f = v == null ? g : rn(v)),
            (g = new w(p, u + "leave", j, n, h)),
            (g.target = b),
            (g.relatedTarget = f),
            (p = null),
            It(h) === d &&
              ((w = new w(m, u + "enter", v, n, h)),
              (w.target = f),
              (w.relatedTarget = b),
              (p = w)),
            (b = p),
            j && v)
          )
            t: {
              for (w = j, m = v, u = 0, f = w; f; f = Yt(f)) u++;
              for (f = 0, p = m; p; p = Yt(p)) f++;
              for (; 0 < u - f; ) (w = Yt(w)), u--;
              for (; 0 < f - u; ) (m = Yt(m)), f--;
              for (; u--; ) {
                if (w === m || (m !== null && w === m.alternate)) break t;
                (w = Yt(w)), (m = Yt(m));
              }
              w = null;
            }
          else w = null;
          j !== null && Ba(y, g, j, w, !1),
            v !== null && b !== null && Ba(y, b, v, w, !0);
        }
      }
      e: {
        if (
          ((g = d ? rn(d) : window),
          (j = g.nodeName && g.nodeName.toLowerCase()),
          j === "select" || (j === "input" && g.type === "file"))
        )
          var x = Dm;
        else if (Wa(g))
          if (Lc) x = Hm;
          else {
            x = $m;
            var S = Fm;
          }
        else
          (j = g.nodeName) &&
            j.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (x = Um);
        if (x && (x = x(e, d))) {
          Ac(y, x, n, h);
          break e;
        }
        S && S(e, g, d),
          e === "focusout" &&
            (S = g._wrapperState) &&
            S.controlled &&
            g.type === "number" &&
            Mi(g, "number", g.value);
      }
      switch (((S = d ? rn(d) : window), e)) {
        case "focusin":
          (Wa(S) || S.contentEditable === "true") &&
            ((tn = S), (Ui = d), (Gn = null));
          break;
        case "focusout":
          Gn = Ui = tn = null;
          break;
        case "mousedown":
          Hi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Hi = !1), Ua(y, n, h);
          break;
        case "selectionchange":
          if (qm) break;
        case "keydown":
        case "keyup":
          Ua(y, n, h);
      }
      var C;
      if (Wl)
        e: {
          switch (e) {
            case "compositionstart":
              var k = "onCompositionStart";
              break e;
            case "compositionend":
              k = "onCompositionEnd";
              break e;
            case "compositionupdate":
              k = "onCompositionUpdate";
              break e;
          }
          k = void 0;
        }
      else
        en
          ? Pc(e, n) && (k = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (k = "onCompositionStart");
      k &&
        (Ec &&
          n.locale !== "ko" &&
          (en || k !== "onCompositionStart"
            ? k === "onCompositionEnd" && en && (C = Tc())
            : ((ht = h),
              (zl = "value" in ht ? ht.value : ht.textContent),
              (en = !0))),
        (S = cs(d, k)),
        0 < S.length &&
          ((k = new _a(k, e, null, n, h)),
          y.push({ event: k, listeners: S }),
          C ? (k.data = C) : ((C = Mc(n)), C !== null && (k.data = C)))),
        (C = zm ? Im(e, n) : Rm(e, n)) &&
          ((d = cs(d, "onBeforeInput")),
          0 < d.length &&
            ((h = new _a("onBeforeInput", "beforeinput", null, n, h)),
            y.push({ event: h, listeners: d }),
            (h.data = C)));
    }
    Uc(y, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function cs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      l = i.stateNode;
    i.tag === 5 &&
      l !== null &&
      ((i = l),
      (l = tr(e, n)),
      l != null && r.unshift(or(e, l, i)),
      (l = tr(e, t)),
      l != null && r.push(or(e, l, i))),
      (e = e.return);
  }
  return r;
}
function Yt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ba(e, t, n, r, i) {
  for (var l = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      c = o.alternate,
      d = o.stateNode;
    if (c !== null && c === r) break;
    o.tag === 5 &&
      d !== null &&
      ((o = d),
      i
        ? ((c = tr(n, l)), c != null && a.unshift(or(n, c, o)))
        : i || ((c = tr(n, l)), c != null && a.push(or(n, c, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Ym = /\r\n?/g,
  Xm = /\u0000|\uFFFD/g;
function qa(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Ym,
      `
`
    )
    .replace(Xm, "");
}
function zr(e, t, n) {
  if (((t = qa(t)), qa(e) !== t && n)) throw Error(E(425));
}
function us() {}
var Vi = null,
  Bi = null;
function qi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Qi = typeof setTimeout == "function" ? setTimeout : void 0,
  Zm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Qa = typeof Promise == "function" ? Promise : void 0,
  Jm =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Qa < "u"
      ? function (e) {
          return Qa.resolve(null).then(e).catch(ef);
        }
      : Qi;
function ef(e) {
  setTimeout(function () {
    throw e;
  });
}
function ci(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), sr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  sr(t);
}
function wt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Ga(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Pn = Math.random().toString(36).slice(2),
  Ke = "__reactFiber$" + Pn,
  cr = "__reactProps$" + Pn,
  lt = "__reactContainer$" + Pn,
  Gi = "__reactEvents$" + Pn,
  tf = "__reactListeners$" + Pn,
  nf = "__reactHandles$" + Pn;
function It(e) {
  var t = e[Ke];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[lt] || n[Ke])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Ga(e); e !== null; ) {
          if ((n = e[Ke])) return n;
          e = Ga(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function vr(e) {
  return (
    (e = e[Ke] || e[lt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function zs(e) {
  return e[cr] || null;
}
var Ki = [],
  sn = -1;
function Pt(e) {
  return { current: e };
}
function q(e) {
  0 > sn || ((e.current = Ki[sn]), (Ki[sn] = null), sn--);
}
function V(e, t) {
  sn++, (Ki[sn] = e.current), (e.current = t);
}
var Ct = {},
  pe = Pt(Ct),
  je = Pt(!1),
  $t = Ct;
function wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ct;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    l;
  for (l in n) i[l] = t[l];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Ne(e) {
  return (e = e.childContextTypes), e != null;
}
function ds() {
  q(je), q(pe);
}
function Ka(e, t, n) {
  if (pe.current !== Ct) throw Error(E(168));
  V(pe, t), V(je, n);
}
function Vc(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(E(108, Fd(e) || "Unknown", i));
  return Y({}, n, r);
}
function ms(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ct),
    ($t = pe.current),
    V(pe, e),
    V(je, je.current),
    !0
  );
}
function Ya(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n
    ? ((e = Vc(e, t, $t)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      q(je),
      q(pe),
      V(pe, e))
    : q(je),
    V(je, n);
}
var et = null,
  Is = !1,
  ui = !1;
function Bc(e) {
  et === null ? (et = [e]) : et.push(e);
}
function rf(e) {
  (Is = !0), Bc(e);
}
function Mt() {
  if (!ui && et !== null) {
    ui = !0;
    var e = 0,
      t = U;
    try {
      var n = et;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (et = null), (Is = !1);
    } catch (i) {
      throw (et !== null && (et = et.slice(e + 1)), gc(Ml, Mt), i);
    } finally {
      (U = t), (ui = !1);
    }
  }
  return null;
}
var ln = [],
  an = 0,
  fs = null,
  ps = 0,
  Le = [],
  _e = 0,
  Ut = null,
  tt = 1,
  nt = "";
function _t(e, t) {
  (ln[an++] = ps), (ln[an++] = fs), (fs = e), (ps = t);
}
function qc(e, t, n) {
  (Le[_e++] = tt), (Le[_e++] = nt), (Le[_e++] = Ut), (Ut = e);
  var r = tt;
  e = nt;
  var i = 32 - Ve(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var l = 32 - Ve(t) + i;
  if (30 < l) {
    var a = i - (i % 5);
    (l = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (tt = (1 << (32 - Ve(t) + i)) | (n << i) | r),
      (nt = l + e);
  } else (tt = (1 << l) | (n << i) | r), (nt = e);
}
function Dl(e) {
  e.return !== null && (_t(e, 1), qc(e, 1, 0));
}
function Fl(e) {
  for (; e === fs; )
    (fs = ln[--an]), (ln[an] = null), (ps = ln[--an]), (ln[an] = null);
  for (; e === Ut; )
    (Ut = Le[--_e]),
      (Le[_e] = null),
      (nt = Le[--_e]),
      (Le[_e] = null),
      (tt = Le[--_e]),
      (Le[_e] = null);
}
var Te = null,
  Ce = null,
  Q = !1,
  Ue = null;
function Qc(e, t) {
  var n = Ie(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Xa(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Te = e), (Ce = wt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Te = e), (Ce = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ut !== null ? { id: tt, overflow: nt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ie(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Te = e),
            (Ce = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xi(e) {
  if (Q) {
    var t = Ce;
    if (t) {
      var n = t;
      if (!Xa(e, t)) {
        if (Yi(e)) throw Error(E(418));
        t = wt(n.nextSibling);
        var r = Te;
        t && Xa(e, t)
          ? Qc(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Q = !1), (Te = e));
      }
    } else {
      if (Yi(e)) throw Error(E(418));
      (e.flags = (e.flags & -4097) | 2), (Q = !1), (Te = e);
    }
  }
}
function Za(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Te = e;
}
function Ir(e) {
  if (e !== Te) return !1;
  if (!Q) return Za(e), (Q = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !qi(e.type, e.memoizedProps))),
    t && (t = Ce))
  ) {
    if (Yi(e)) throw (Gc(), Error(E(418)));
    for (; t; ) Qc(e, t), (t = wt(t.nextSibling));
  }
  if ((Za(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ce = wt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ce = null;
    }
  } else Ce = Te ? wt(e.stateNode.nextSibling) : null;
  return !0;
}
function Gc() {
  for (var e = Ce; e; ) e = wt(e.nextSibling);
}
function bn() {
  (Ce = Te = null), (Q = !1);
}
function $l(e) {
  Ue === null ? (Ue = [e]) : Ue.push(e);
}
var sf = ct.ReactCurrentBatchConfig;
function In(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var i = r,
        l = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === l
        ? t.ref
        : ((t = function (a) {
            var o = i.refs;
            a === null ? delete o[l] : (o[l] = a);
          }),
          (t._stringRef = l),
          t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function Rr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      E(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ja(e) {
  var t = e._init;
  return t(e._payload);
}
function Kc(e) {
  function t(m, u) {
    if (e) {
      var f = m.deletions;
      f === null ? ((m.deletions = [u]), (m.flags |= 16)) : f.push(u);
    }
  }
  function n(m, u) {
    if (!e) return null;
    for (; u !== null; ) t(m, u), (u = u.sibling);
    return null;
  }
  function r(m, u) {
    for (m = new Map(); u !== null; )
      u.key !== null ? m.set(u.key, u) : m.set(u.index, u), (u = u.sibling);
    return m;
  }
  function i(m, u) {
    return (m = St(m, u)), (m.index = 0), (m.sibling = null), m;
  }
  function l(m, u, f) {
    return (
      (m.index = f),
      e
        ? ((f = m.alternate),
          f !== null
            ? ((f = f.index), f < u ? ((m.flags |= 2), u) : f)
            : ((m.flags |= 2), u))
        : ((m.flags |= 1048576), u)
    );
  }
  function a(m) {
    return e && m.alternate === null && (m.flags |= 2), m;
  }
  function o(m, u, f, p) {
    return u === null || u.tag !== 6
      ? ((u = xi(f, m.mode, p)), (u.return = m), u)
      : ((u = i(u, f)), (u.return = m), u);
  }
  function c(m, u, f, p) {
    var x = f.type;
    return x === Jt
      ? h(m, u, f.props.children, p, f.key)
      : u !== null &&
        (u.elementType === x ||
          (typeof x == "object" &&
            x !== null &&
            x.$$typeof === dt &&
            Ja(x) === u.type))
      ? ((p = i(u, f.props)), (p.ref = In(m, u, f)), (p.return = m), p)
      : ((p = Jr(f.type, f.key, f.props, null, m.mode, p)),
        (p.ref = In(m, u, f)),
        (p.return = m),
        p);
  }
  function d(m, u, f, p) {
    return u === null ||
      u.tag !== 4 ||
      u.stateNode.containerInfo !== f.containerInfo ||
      u.stateNode.implementation !== f.implementation
      ? ((u = yi(f, m.mode, p)), (u.return = m), u)
      : ((u = i(u, f.children || [])), (u.return = m), u);
  }
  function h(m, u, f, p, x) {
    return u === null || u.tag !== 7
      ? ((u = Ft(f, m.mode, p, x)), (u.return = m), u)
      : ((u = i(u, f)), (u.return = m), u);
  }
  function y(m, u, f) {
    if ((typeof u == "string" && u !== "") || typeof u == "number")
      return (u = xi("" + u, m.mode, f)), (u.return = m), u;
    if (typeof u == "object" && u !== null) {
      switch (u.$$typeof) {
        case kr:
          return (
            (f = Jr(u.type, u.key, u.props, null, m.mode, f)),
            (f.ref = In(m, null, u)),
            (f.return = m),
            f
          );
        case Zt:
          return (u = yi(u, m.mode, f)), (u.return = m), u;
        case dt:
          var p = u._init;
          return y(m, p(u._payload), f);
      }
      if ($n(u) || Mn(u))
        return (u = Ft(u, m.mode, f, null)), (u.return = m), u;
      Rr(m, u);
    }
    return null;
  }
  function g(m, u, f, p) {
    var x = u !== null ? u.key : null;
    if ((typeof f == "string" && f !== "") || typeof f == "number")
      return x !== null ? null : o(m, u, "" + f, p);
    if (typeof f == "object" && f !== null) {
      switch (f.$$typeof) {
        case kr:
          return f.key === x ? c(m, u, f, p) : null;
        case Zt:
          return f.key === x ? d(m, u, f, p) : null;
        case dt:
          return (x = f._init), g(m, u, x(f._payload), p);
      }
      if ($n(f) || Mn(f)) return x !== null ? null : h(m, u, f, p, null);
      Rr(m, f);
    }
    return null;
  }
  function j(m, u, f, p, x) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (m = m.get(f) || null), o(u, m, "" + p, x);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case kr:
          return (m = m.get(p.key === null ? f : p.key) || null), c(u, m, p, x);
        case Zt:
          return (m = m.get(p.key === null ? f : p.key) || null), d(u, m, p, x);
        case dt:
          var S = p._init;
          return j(m, u, f, S(p._payload), x);
      }
      if ($n(p) || Mn(p)) return (m = m.get(f) || null), h(u, m, p, x, null);
      Rr(u, p);
    }
    return null;
  }
  function v(m, u, f, p) {
    for (
      var x = null, S = null, C = u, k = (u = 0), P = null;
      C !== null && k < f.length;
      k++
    ) {
      C.index > k ? ((P = C), (C = null)) : (P = C.sibling);
      var T = g(m, C, f[k], p);
      if (T === null) {
        C === null && (C = P);
        break;
      }
      e && C && T.alternate === null && t(m, C),
        (u = l(T, u, k)),
        S === null ? (x = T) : (S.sibling = T),
        (S = T),
        (C = P);
    }
    if (k === f.length) return n(m, C), Q && _t(m, k), x;
    if (C === null) {
      for (; k < f.length; k++)
        (C = y(m, f[k], p)),
          C !== null &&
            ((u = l(C, u, k)), S === null ? (x = C) : (S.sibling = C), (S = C));
      return Q && _t(m, k), x;
    }
    for (C = r(m, C); k < f.length; k++)
      (P = j(C, m, k, f[k], p)),
        P !== null &&
          (e && P.alternate !== null && C.delete(P.key === null ? k : P.key),
          (u = l(P, u, k)),
          S === null ? (x = P) : (S.sibling = P),
          (S = P));
    return (
      e &&
        C.forEach(function (A) {
          return t(m, A);
        }),
      Q && _t(m, k),
      x
    );
  }
  function w(m, u, f, p) {
    var x = Mn(f);
    if (typeof x != "function") throw Error(E(150));
    if (((f = x.call(f)), f == null)) throw Error(E(151));
    for (
      var S = (x = null), C = u, k = (u = 0), P = null, T = f.next();
      C !== null && !T.done;
      k++, T = f.next()
    ) {
      C.index > k ? ((P = C), (C = null)) : (P = C.sibling);
      var A = g(m, C, T.value, p);
      if (A === null) {
        C === null && (C = P);
        break;
      }
      e && C && A.alternate === null && t(m, C),
        (u = l(A, u, k)),
        S === null ? (x = A) : (S.sibling = A),
        (S = A),
        (C = P);
    }
    if (T.done) return n(m, C), Q && _t(m, k), x;
    if (C === null) {
      for (; !T.done; k++, T = f.next())
        (T = y(m, T.value, p)),
          T !== null &&
            ((u = l(T, u, k)), S === null ? (x = T) : (S.sibling = T), (S = T));
      return Q && _t(m, k), x;
    }
    for (C = r(m, C); !T.done; k++, T = f.next())
      (T = j(C, m, k, T.value, p)),
        T !== null &&
          (e && T.alternate !== null && C.delete(T.key === null ? k : T.key),
          (u = l(T, u, k)),
          S === null ? (x = T) : (S.sibling = T),
          (S = T));
    return (
      e &&
        C.forEach(function (I) {
          return t(m, I);
        }),
      Q && _t(m, k),
      x
    );
  }
  function b(m, u, f, p) {
    if (
      (typeof f == "object" &&
        f !== null &&
        f.type === Jt &&
        f.key === null &&
        (f = f.props.children),
      typeof f == "object" && f !== null)
    ) {
      switch (f.$$typeof) {
        case kr:
          e: {
            for (var x = f.key, S = u; S !== null; ) {
              if (S.key === x) {
                if (((x = f.type), x === Jt)) {
                  if (S.tag === 7) {
                    n(m, S.sibling),
                      (u = i(S, f.props.children)),
                      (u.return = m),
                      (m = u);
                    break e;
                  }
                } else if (
                  S.elementType === x ||
                  (typeof x == "object" &&
                    x !== null &&
                    x.$$typeof === dt &&
                    Ja(x) === S.type)
                ) {
                  n(m, S.sibling),
                    (u = i(S, f.props)),
                    (u.ref = In(m, S, f)),
                    (u.return = m),
                    (m = u);
                  break e;
                }
                n(m, S);
                break;
              } else t(m, S);
              S = S.sibling;
            }
            f.type === Jt
              ? ((u = Ft(f.props.children, m.mode, p, f.key)),
                (u.return = m),
                (m = u))
              : ((p = Jr(f.type, f.key, f.props, null, m.mode, p)),
                (p.ref = In(m, u, f)),
                (p.return = m),
                (m = p));
          }
          return a(m);
        case Zt:
          e: {
            for (S = f.key; u !== null; ) {
              if (u.key === S)
                if (
                  u.tag === 4 &&
                  u.stateNode.containerInfo === f.containerInfo &&
                  u.stateNode.implementation === f.implementation
                ) {
                  n(m, u.sibling),
                    (u = i(u, f.children || [])),
                    (u.return = m),
                    (m = u);
                  break e;
                } else {
                  n(m, u);
                  break;
                }
              else t(m, u);
              u = u.sibling;
            }
            (u = yi(f, m.mode, p)), (u.return = m), (m = u);
          }
          return a(m);
        case dt:
          return (S = f._init), b(m, u, S(f._payload), p);
      }
      if ($n(f)) return v(m, u, f, p);
      if (Mn(f)) return w(m, u, f, p);
      Rr(m, f);
    }
    return (typeof f == "string" && f !== "") || typeof f == "number"
      ? ((f = "" + f),
        u !== null && u.tag === 6
          ? (n(m, u.sibling), (u = i(u, f)), (u.return = m), (m = u))
          : (n(m, u), (u = xi(f, m.mode, p)), (u.return = m), (m = u)),
        a(m))
      : n(m, u);
  }
  return b;
}
var jn = Kc(!0),
  Yc = Kc(!1),
  hs = Pt(null),
  gs = null,
  on = null,
  Ul = null;
function Hl() {
  Ul = on = gs = null;
}
function Vl(e) {
  var t = hs.current;
  q(hs), (e._currentValue = t);
}
function Zi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function hn(e, t) {
  (gs = e),
    (Ul = on = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (be = !0), (e.firstContext = null));
}
function We(e) {
  var t = e._currentValue;
  if (Ul !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), on === null)) {
      if (gs === null) throw Error(E(308));
      (on = e), (gs.dependencies = { lanes: 0, firstContext: e });
    } else on = on.next = e;
  return t;
}
var Rt = null;
function Bl(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
function Xc(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Bl(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    at(e, r)
  );
}
function at(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var mt = !1;
function ql(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Zc(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function bt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), F & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      at(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Bl(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    at(e, n)
  );
}
function Qr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
  }
}
function eo(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      l = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        l === null ? (i = l = a) : (l = l.next = a), (n = n.next);
      } while (n !== null);
      l === null ? (i = l = t) : (l = l.next = t);
    } else i = l = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: l,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function xs(e, t, n, r) {
  var i = e.updateQueue;
  mt = !1;
  var l = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    o = i.shared.pending;
  if (o !== null) {
    i.shared.pending = null;
    var c = o,
      d = c.next;
    (c.next = null), a === null ? (l = d) : (a.next = d), (a = c);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (o = h.lastBaseUpdate),
      o !== a &&
        (o === null ? (h.firstBaseUpdate = d) : (o.next = d),
        (h.lastBaseUpdate = c)));
  }
  if (l !== null) {
    var y = i.baseState;
    (a = 0), (h = d = c = null), (o = l);
    do {
      var g = o.lane,
        j = o.eventTime;
      if ((r & g) === g) {
        h !== null &&
          (h = h.next =
            {
              eventTime: j,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = e,
            w = o;
          switch (((g = t), (j = n), w.tag)) {
            case 1:
              if (((v = w.payload), typeof v == "function")) {
                y = v.call(j, y, g);
                break e;
              }
              y = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (
                ((v = w.payload),
                (g = typeof v == "function" ? v.call(j, y, g) : v),
                g == null)
              )
                break e;
              y = Y({}, y, g);
              break e;
            case 2:
              mt = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (g = i.effects),
          g === null ? (i.effects = [o]) : g.push(o));
      } else
        (j = {
          eventTime: j,
          lane: g,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          h === null ? ((d = h = j), (c = y)) : (h = h.next = j),
          (a |= g);
      if (((o = o.next), o === null)) {
        if (((o = i.shared.pending), o === null)) break;
        (g = o),
          (o = g.next),
          (g.next = null),
          (i.lastBaseUpdate = g),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (c = y),
      (i.baseState = c),
      (i.firstBaseUpdate = d),
      (i.lastBaseUpdate = h),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (a |= i.lane), (i = i.next);
      while (i !== t);
    } else l === null && (i.shared.lanes = 0);
    (Vt |= a), (e.lanes = a), (e.memoizedState = y);
  }
}
function to(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(E(191, i));
        i.call(r);
      }
    }
}
var wr = {},
  Xe = Pt(wr),
  ur = Pt(wr),
  dr = Pt(wr);
function Wt(e) {
  if (e === wr) throw Error(E(174));
  return e;
}
function Ql(e, t) {
  switch ((V(dr, t), V(ur, e), V(Xe, wr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  q(Xe), V(Xe, t);
}
function Nn() {
  q(Xe), q(ur), q(dr);
}
function Jc(e) {
  Wt(dr.current);
  var t = Wt(Xe.current),
    n = Li(t, e.type);
  t !== n && (V(ur, e), V(Xe, n));
}
function Gl(e) {
  ur.current === e && (q(Xe), q(ur));
}
var G = Pt(0);
function ys(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var di = [];
function Kl() {
  for (var e = 0; e < di.length; e++)
    di[e]._workInProgressVersionPrimary = null;
  di.length = 0;
}
var Gr = ct.ReactCurrentDispatcher,
  mi = ct.ReactCurrentBatchConfig,
  Ht = 0,
  K = null,
  re = null,
  le = null,
  vs = !1,
  Kn = !1,
  mr = 0,
  lf = 0;
function de() {
  throw Error(E(321));
}
function Yl(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!qe(e[n], t[n])) return !1;
  return !0;
}
function Xl(e, t, n, r, i, l) {
  if (
    ((Ht = l),
    (K = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Gr.current = e === null || e.memoizedState === null ? uf : df),
    (e = n(r, i)),
    Kn)
  ) {
    l = 0;
    do {
      if (((Kn = !1), (mr = 0), 25 <= l)) throw Error(E(301));
      (l += 1),
        (le = re = null),
        (t.updateQueue = null),
        (Gr.current = mf),
        (e = n(r, i));
    } while (Kn);
  }
  if (
    ((Gr.current = ws),
    (t = re !== null && re.next !== null),
    (Ht = 0),
    (le = re = K = null),
    (vs = !1),
    t)
  )
    throw Error(E(300));
  return e;
}
function Zl() {
  var e = mr !== 0;
  return (mr = 0), e;
}
function Ge() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return le === null ? (K.memoizedState = le = e) : (le = le.next = e), le;
}
function Oe() {
  if (re === null) {
    var e = K.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = re.next;
  var t = le === null ? K.memoizedState : le.next;
  if (t !== null) (le = t), (re = e);
  else {
    if (e === null) throw Error(E(310));
    (re = e),
      (e = {
        memoizedState: re.memoizedState,
        baseState: re.baseState,
        baseQueue: re.baseQueue,
        queue: re.queue,
        next: null,
      }),
      le === null ? (K.memoizedState = le = e) : (le = le.next = e);
  }
  return le;
}
function fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function fi(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = re,
    i = r.baseQueue,
    l = n.pending;
  if (l !== null) {
    if (i !== null) {
      var a = i.next;
      (i.next = l.next), (l.next = a);
    }
    (r.baseQueue = i = l), (n.pending = null);
  }
  if (i !== null) {
    (l = i.next), (r = r.baseState);
    var o = (a = null),
      c = null,
      d = l;
    do {
      var h = d.lane;
      if ((Ht & h) === h)
        c !== null &&
          (c = c.next =
            {
              lane: 0,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null,
            }),
          (r = d.hasEagerState ? d.eagerState : e(r, d.action));
      else {
        var y = {
          lane: h,
          action: d.action,
          hasEagerState: d.hasEagerState,
          eagerState: d.eagerState,
          next: null,
        };
        c === null ? ((o = c = y), (a = r)) : (c = c.next = y),
          (K.lanes |= h),
          (Vt |= h);
      }
      d = d.next;
    } while (d !== null && d !== l);
    c === null ? (a = r) : (c.next = o),
      qe(r, t.memoizedState) || (be = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = c),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (l = i.lane), (K.lanes |= l), (Vt |= l), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function pi(e) {
  var t = Oe(),
    n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    l = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var a = (i = i.next);
    do (l = e(l, a.action)), (a = a.next);
    while (a !== i);
    qe(l, t.memoizedState) || (be = !0),
      (t.memoizedState = l),
      t.baseQueue === null && (t.baseState = l),
      (n.lastRenderedState = l);
  }
  return [l, r];
}
function eu() {}
function tu(e, t) {
  var n = K,
    r = Oe(),
    i = t(),
    l = !qe(r.memoizedState, i);
  if (
    (l && ((r.memoizedState = i), (be = !0)),
    (r = r.queue),
    Jl(su.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || l || (le !== null && le.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      pr(9, ru.bind(null, n, r, i, t), void 0, null),
      ae === null)
    )
      throw Error(E(349));
    Ht & 30 || nu(n, t, i);
  }
  return i;
}
function nu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ru(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), iu(t) && lu(e);
}
function su(e, t, n) {
  return n(function () {
    iu(t) && lu(e);
  });
}
function iu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !qe(e, n);
  } catch {
    return !0;
  }
}
function lu(e) {
  var t = at(e, 1);
  t !== null && Be(t, e, 1, -1);
}
function no(e) {
  var t = Ge();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cf.bind(null, K, e)),
    [t.memoizedState, e]
  );
}
function pr(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = K.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (K.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function au() {
  return Oe().memoizedState;
}
function Kr(e, t, n, r) {
  var i = Ge();
  (K.flags |= e),
    (i.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r));
}
function Rs(e, t, n, r) {
  var i = Oe();
  r = r === void 0 ? null : r;
  var l = void 0;
  if (re !== null) {
    var a = re.memoizedState;
    if (((l = a.destroy), r !== null && Yl(r, a.deps))) {
      i.memoizedState = pr(t, n, l, r);
      return;
    }
  }
  (K.flags |= e), (i.memoizedState = pr(1 | t, n, l, r));
}
function ro(e, t) {
  return Kr(8390656, 8, e, t);
}
function Jl(e, t) {
  return Rs(2048, 8, e, t);
}
function ou(e, t) {
  return Rs(4, 2, e, t);
}
function cu(e, t) {
  return Rs(4, 4, e, t);
}
function uu(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function du(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Rs(4, 4, uu.bind(null, t, e), n)
  );
}
function ea() {}
function mu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yl(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function fu(e, t) {
  var n = Oe();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Yl(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function pu(e, t, n) {
  return Ht & 21
    ? (qe(n, t) || ((n = vc()), (K.lanes |= n), (Vt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (be = !0)), (e.memoizedState = n));
}
function af(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = mi.transition;
  mi.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (mi.transition = r);
  }
}
function hu() {
  return Oe().memoizedState;
}
function of(e, t, n) {
  var r = Nt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    gu(e))
  )
    xu(t, n);
  else if (((n = Xc(e, t, n, r)), n !== null)) {
    var i = ge();
    Be(n, e, r, i), yu(n, t, r);
  }
}
function cf(e, t, n) {
  var r = Nt(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (gu(e)) xu(t, i);
  else {
    var l = e.alternate;
    if (
      e.lanes === 0 &&
      (l === null || l.lanes === 0) &&
      ((l = t.lastRenderedReducer), l !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = l(a, n);
        if (((i.hasEagerState = !0), (i.eagerState = o), qe(o, a))) {
          var c = t.interleaved;
          c === null
            ? ((i.next = i), Bl(t))
            : ((i.next = c.next), (c.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xc(e, t, i, r)),
      n !== null && ((i = ge()), Be(n, e, r, i), yu(n, t, r));
  }
}
function gu(e) {
  var t = e.alternate;
  return e === K || (t !== null && t === K);
}
function xu(e, t) {
  Kn = vs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function yu(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Al(e, n);
  }
}
var ws = {
    readContext: We,
    useCallback: de,
    useContext: de,
    useEffect: de,
    useImperativeHandle: de,
    useInsertionEffect: de,
    useLayoutEffect: de,
    useMemo: de,
    useReducer: de,
    useRef: de,
    useState: de,
    useDebugValue: de,
    useDeferredValue: de,
    useTransition: de,
    useMutableSource: de,
    useSyncExternalStore: de,
    useId: de,
    unstable_isNewReconciler: !1,
  },
  uf = {
    readContext: We,
    useCallback: function (e, t) {
      return (Ge().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: We,
    useEffect: ro,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Kr(4194308, 4, uu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Kr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Kr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ge();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ge();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = of.bind(null, K, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ge();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: no,
    useDebugValue: ea,
    useDeferredValue: function (e) {
      return (Ge().memoizedState = e);
    },
    useTransition: function () {
      var e = no(!1),
        t = e[0];
      return (e = af.bind(null, e[1])), (Ge().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = K,
        i = Ge();
      if (Q) {
        if (n === void 0) throw Error(E(407));
        n = n();
      } else {
        if (((n = t()), ae === null)) throw Error(E(349));
        Ht & 30 || nu(r, t, n);
      }
      i.memoizedState = n;
      var l = { value: n, getSnapshot: t };
      return (
        (i.queue = l),
        ro(su.bind(null, r, l, e), [e]),
        (r.flags |= 2048),
        pr(9, ru.bind(null, r, l, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ge(),
        t = ae.identifierPrefix;
      if (Q) {
        var n = nt,
          r = tt;
        (n = (r & ~(1 << (32 - Ve(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = mr++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = lf++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  df = {
    readContext: We,
    useCallback: mu,
    useContext: We,
    useEffect: Jl,
    useImperativeHandle: du,
    useInsertionEffect: ou,
    useLayoutEffect: cu,
    useMemo: fu,
    useReducer: fi,
    useRef: au,
    useState: function () {
      return fi(fr);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = Oe();
      return pu(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(fr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: eu,
    useSyncExternalStore: tu,
    useId: hu,
    unstable_isNewReconciler: !1,
  },
  mf = {
    readContext: We,
    useCallback: mu,
    useContext: We,
    useEffect: Jl,
    useImperativeHandle: du,
    useInsertionEffect: ou,
    useLayoutEffect: cu,
    useMemo: fu,
    useReducer: pi,
    useRef: au,
    useState: function () {
      return pi(fr);
    },
    useDebugValue: ea,
    useDeferredValue: function (e) {
      var t = Oe();
      return re === null ? (t.memoizedState = e) : pu(t, re.memoizedState, e);
    },
    useTransition: function () {
      var e = pi(fr)[0],
        t = Oe().memoizedState;
      return [e, t];
    },
    useMutableSource: eu,
    useSyncExternalStore: tu,
    useId: hu,
    unstable_isNewReconciler: !1,
  };
function Fe(e, t) {
  if (e && e.defaultProps) {
    (t = Y({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ji(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : Y({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ws = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Kt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      i = Nt(e),
      l = rt(r, i);
    (l.payload = t),
      n != null && (l.callback = n),
      (t = bt(e, l, i)),
      t !== null && (Be(t, e, i, r), Qr(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ge(),
      i = Nt(e),
      l = rt(r, i);
    (l.tag = 1),
      (l.payload = t),
      n != null && (l.callback = n),
      (t = bt(e, l, i)),
      t !== null && (Be(t, e, i, r), Qr(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ge(),
      r = Nt(e),
      i = rt(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = bt(e, i, r)),
      t !== null && (Be(t, e, r, n), Qr(t, e, r));
  },
};
function so(e, t, n, r, i, l, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, l, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !lr(n, r) || !lr(i, l)
      : !0
  );
}
function vu(e, t, n) {
  var r = !1,
    i = Ct,
    l = t.contextType;
  return (
    typeof l == "object" && l !== null
      ? (l = We(l))
      : ((i = Ne(t) ? $t : pe.current),
        (r = t.contextTypes),
        (l = (r = r != null) ? wn(e, i) : Ct)),
    (t = new t(n, l)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ws),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    t
  );
}
function io(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
}
function el(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), ql(e);
  var l = t.contextType;
  typeof l == "object" && l !== null
    ? (i.context = We(l))
    : ((l = Ne(t) ? $t : pe.current), (i.context = wn(e, l))),
    (i.state = e.memoizedState),
    (l = t.getDerivedStateFromProps),
    typeof l == "function" && (Ji(e, t, l, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && Ws.enqueueReplaceState(i, i.state, null),
      xs(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Sn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Dd(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (l) {
    i =
      `
Error generating stack: ` +
      l.message +
      `
` +
      l.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function hi(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function tl(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var ff = typeof WeakMap == "function" ? WeakMap : Map;
function wu(e, t, n) {
  (n = rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      js || ((js = !0), (dl = r)), tl(e, t);
    }),
    n
  );
}
function bu(e, t, n) {
  (n = rt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        tl(e, t);
      });
  }
  var l = e.stateNode;
  return (
    l !== null &&
      typeof l.componentDidCatch == "function" &&
      (n.callback = function () {
        tl(e, t),
          typeof r != "function" &&
            (jt === null ? (jt = new Set([this])) : jt.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function lo(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new ff();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = Tf.bind(null, e, t, n)), t.then(e, e));
}
function ao(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function oo(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rt(-1, 1)), (t.tag = 2), bt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var pf = ct.ReactCurrentOwner,
  be = !1;
function he(e, t, n, r) {
  t.child = e === null ? Yc(t, null, n, r) : jn(t, e.child, n, r);
}
function co(e, t, n, r, i) {
  n = n.render;
  var l = t.ref;
  return (
    hn(t, i),
    (r = Xl(e, t, n, r, l, i)),
    (n = Zl()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ot(e, t, i))
      : (Q && n && Dl(t), (t.flags |= 1), he(e, t, r, i), t.child)
  );
}
function uo(e, t, n, r, i) {
  if (e === null) {
    var l = n.type;
    return typeof l == "function" &&
      !oa(l) &&
      l.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = l), ju(e, t, l, r, i))
      : ((e = Jr(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((l = e.child), !(e.lanes & i))) {
    var a = l.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : lr), n(a, r) && e.ref === t.ref)
    )
      return ot(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = St(l, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function ju(e, t, n, r, i) {
  if (e !== null) {
    var l = e.memoizedProps;
    if (lr(l, r) && e.ref === t.ref)
      if (((be = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
        e.flags & 131072 && (be = !0);
      else return (t.lanes = e.lanes), ot(e, t, i);
  }
  return nl(e, t, n, r, i);
}
function Nu(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    l = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        V(un, ke),
        (ke |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = l !== null ? l.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          V(un, ke),
          (ke |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = l !== null ? l.baseLanes : n),
        V(un, ke),
        (ke |= r);
    }
  else
    l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
      V(un, ke),
      (ke |= r);
  return he(e, t, i, n), t.child;
}
function Su(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function nl(e, t, n, r, i) {
  var l = Ne(n) ? $t : pe.current;
  return (
    (l = wn(t, l)),
    hn(t, i),
    (n = Xl(e, t, n, r, l, i)),
    (r = Zl()),
    e !== null && !be
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        ot(e, t, i))
      : (Q && r && Dl(t), (t.flags |= 1), he(e, t, n, i), t.child)
  );
}
function mo(e, t, n, r, i) {
  if (Ne(n)) {
    var l = !0;
    ms(t);
  } else l = !1;
  if ((hn(t, i), t.stateNode === null))
    Yr(e, t), vu(t, n, r), el(t, n, r, i), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var c = a.context,
      d = n.contextType;
    typeof d == "object" && d !== null
      ? (d = We(d))
      : ((d = Ne(n) ? $t : pe.current), (d = wn(t, d)));
    var h = n.getDerivedStateFromProps,
      y =
        typeof h == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    y ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || c !== d) && io(t, a, r, d)),
      (mt = !1);
    var g = t.memoizedState;
    (a.state = g),
      xs(t, r, a, i),
      (c = t.memoizedState),
      o !== r || g !== c || je.current || mt
        ? (typeof h == "function" && (Ji(t, n, h, r), (c = t.memoizedState)),
          (o = mt || so(t, n, o, r, g, c, d))
            ? (y ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = c)),
          (a.props = r),
          (a.state = c),
          (a.context = d),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Zc(e, t),
      (o = t.memoizedProps),
      (d = t.type === t.elementType ? o : Fe(t.type, o)),
      (a.props = d),
      (y = t.pendingProps),
      (g = a.context),
      (c = n.contextType),
      typeof c == "object" && c !== null
        ? (c = We(c))
        : ((c = Ne(n) ? $t : pe.current), (c = wn(t, c)));
    var j = n.getDerivedStateFromProps;
    (h =
      typeof j == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== y || g !== c) && io(t, a, r, c)),
      (mt = !1),
      (g = t.memoizedState),
      (a.state = g),
      xs(t, r, a, i);
    var v = t.memoizedState;
    o !== y || g !== v || je.current || mt
      ? (typeof j == "function" && (Ji(t, n, j, r), (v = t.memoizedState)),
        (d = mt || so(t, n, d, r, g, v, c) || !1)
          ? (h ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, v, c),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, v, c)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = v)),
        (a.props = r),
        (a.state = v),
        (a.context = c),
        (r = d))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return rl(e, t, n, r, l, i);
}
function rl(e, t, n, r, i, l) {
  Su(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return i && Ya(t, n, !1), ot(e, t, l);
  (r = t.stateNode), (pf.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = jn(t, e.child, null, l)), (t.child = jn(t, null, o, l)))
      : he(e, t, o, l),
    (t.memoizedState = r.state),
    i && Ya(t, n, !0),
    t.child
  );
}
function ku(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ka(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ka(e, t.context, !1),
    Ql(e, t.containerInfo);
}
function fo(e, t, n, r, i) {
  return bn(), $l(i), (t.flags |= 256), he(e, t, n, r), t.child;
}
var sl = { dehydrated: null, treeContext: null, retryLane: 0 };
function il(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Cu(e, t, n) {
  var r = t.pendingProps,
    i = G.current,
    l = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    o
      ? ((l = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    V(G, i & 1),
    e === null)
  )
    return (
      Xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          l
            ? ((r = t.mode),
              (l = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && l !== null
                ? ((l.childLanes = 0), (l.pendingProps = a))
                : (l = Fs(a, r, 0, null)),
              (e = Ft(e, r, n, null)),
              (l.return = t),
              (e.return = t),
              (l.sibling = e),
              (t.child = l),
              (t.child.memoizedState = il(n)),
              (t.memoizedState = sl),
              e)
            : ta(t, a))
    );
  if (((i = e.memoizedState), i !== null && ((o = i.dehydrated), o !== null)))
    return hf(e, t, a, r, o, i, n);
  if (l) {
    (l = r.fallback), (a = t.mode), (i = e.child), (o = i.sibling);
    var c = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = c),
          (t.deletions = null))
        : ((r = St(i, c)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      o !== null ? (l = St(o, l)) : ((l = Ft(l, a, n, null)), (l.flags |= 2)),
      (l.return = t),
      (r.return = t),
      (r.sibling = l),
      (t.child = r),
      (r = l),
      (l = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? il(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (l.memoizedState = a),
      (l.childLanes = e.childLanes & ~n),
      (t.memoizedState = sl),
      r
    );
  }
  return (
    (l = e.child),
    (e = l.sibling),
    (r = St(l, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function ta(e, t) {
  return (
    (t = Fs({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Wr(e, t, n, r) {
  return (
    r !== null && $l(r),
    jn(t, e.child, null, n),
    (e = ta(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function hf(e, t, n, r, i, l, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = hi(Error(E(422)))), Wr(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((l = r.fallback),
        (i = t.mode),
        (r = Fs({ mode: "visible", children: r.children }, i, 0, null)),
        (l = Ft(l, i, a, null)),
        (l.flags |= 2),
        (r.return = t),
        (l.return = t),
        (r.sibling = l),
        (t.child = r),
        t.mode & 1 && jn(t, e.child, null, a),
        (t.child.memoizedState = il(a)),
        (t.memoizedState = sl),
        l);
  if (!(t.mode & 1)) return Wr(e, t, a, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (l = Error(E(419))), (r = hi(l, r, void 0)), Wr(e, t, a, r);
  }
  if (((o = (a & e.childLanes) !== 0), be || o)) {
    if (((r = ae), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== l.retryLane &&
          ((l.retryLane = i), at(e, i), Be(r, e, i, -1));
    }
    return aa(), (r = hi(Error(E(421)))), Wr(e, t, a, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Ef.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = l.treeContext),
      (Ce = wt(i.nextSibling)),
      (Te = t),
      (Q = !0),
      (Ue = null),
      e !== null &&
        ((Le[_e++] = tt),
        (Le[_e++] = nt),
        (Le[_e++] = Ut),
        (tt = e.id),
        (nt = e.overflow),
        (Ut = t)),
      (t = ta(t, r.children)),
      (t.flags |= 4096),
      t);
}
function po(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Zi(e.return, t, n);
}
function gi(e, t, n, r, i) {
  var l = e.memoizedState;
  l === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((l.isBackwards = t),
      (l.rendering = null),
      (l.renderingStartTime = 0),
      (l.last = r),
      (l.tail = n),
      (l.tailMode = i));
}
function Tu(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    l = r.tail;
  if ((he(e, t, r.children, n), (r = G.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && po(e, n, t);
        else if (e.tag === 19) po(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((V(G, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && ys(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          gi(t, !1, i, n, l);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && ys(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        gi(t, !0, n, null, l);
        break;
      case "together":
        gi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ot(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Vt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (
      e = t.child, n = St(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = St(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function gf(e, t, n) {
  switch (t.tag) {
    case 3:
      ku(t), bn();
      break;
    case 5:
      Jc(t);
      break;
    case 1:
      Ne(t.type) && ms(t);
      break;
    case 4:
      Ql(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      V(hs, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (V(G, G.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Cu(e, t, n)
          : (V(G, G.current & 1),
            (e = ot(e, t, n)),
            e !== null ? e.sibling : null);
      V(G, G.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Tu(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        V(G, G.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Nu(e, t, n);
  }
  return ot(e, t, n);
}
var Eu, ll, Pu, Mu;
Eu = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ll = function () {};
Pu = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Wt(Xe.current);
    var l = null;
    switch (n) {
      case "input":
        (i = Ei(e, i)), (r = Ei(e, r)), (l = []);
        break;
      case "select":
        (i = Y({}, i, { value: void 0 })),
          (r = Y({}, r, { value: void 0 })),
          (l = []);
        break;
      case "textarea":
        (i = Ai(e, i)), (r = Ai(e, r)), (l = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = us);
    }
    _i(n, r);
    var a;
    n = null;
    for (d in i)
      if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && i[d] != null)
        if (d === "style") {
          var o = i[d];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          d !== "dangerouslySetInnerHTML" &&
            d !== "children" &&
            d !== "suppressContentEditableWarning" &&
            d !== "suppressHydrationWarning" &&
            d !== "autoFocus" &&
            (Jn.hasOwnProperty(d)
              ? l || (l = [])
              : (l = l || []).push(d, null));
    for (d in r) {
      var c = r[d];
      if (
        ((o = i != null ? i[d] : void 0),
        r.hasOwnProperty(d) && c !== o && (c != null || o != null))
      )
        if (d === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (c && c.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in c)
              c.hasOwnProperty(a) &&
                o[a] !== c[a] &&
                (n || (n = {}), (n[a] = c[a]));
          } else n || (l || (l = []), l.push(d, n)), (n = c);
        else
          d === "dangerouslySetInnerHTML"
            ? ((c = c ? c.__html : void 0),
              (o = o ? o.__html : void 0),
              c != null && o !== c && (l = l || []).push(d, c))
            : d === "children"
            ? (typeof c != "string" && typeof c != "number") ||
              (l = l || []).push(d, "" + c)
            : d !== "suppressContentEditableWarning" &&
              d !== "suppressHydrationWarning" &&
              (Jn.hasOwnProperty(d)
                ? (c != null && d === "onScroll" && B("scroll", e),
                  l || o === c || (l = []))
                : (l = l || []).push(d, c));
    }
    n && (l = l || []).push("style", n);
    var d = l;
    (t.updateQueue = d) && (t.flags |= 4);
  }
};
Mu = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Rn(e, t) {
  if (!Q)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function me(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function xf(e, t, n) {
  var r = t.pendingProps;
  switch ((Fl(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return me(t), null;
    case 1:
      return Ne(t.type) && ds(), me(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Nn(),
        q(je),
        q(pe),
        Kl(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Ir(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Ue !== null && (pl(Ue), (Ue = null)))),
        ll(e, t),
        me(t),
        null
      );
    case 5:
      Gl(t);
      var i = Wt(dr.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Pu(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return me(t), null;
        }
        if (((e = Wt(Xe.current)), Ir(t))) {
          (r = t.stateNode), (n = t.type);
          var l = t.memoizedProps;
          switch (((r[Ke] = t), (r[cr] = l), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Hn.length; i++) B(Hn[i], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B("error", r), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              ja(r, l), B("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!l.multiple }),
                B("invalid", r);
              break;
            case "textarea":
              Sa(r, l), B("invalid", r);
          }
          _i(n, l), (i = null);
          for (var a in l)
            if (l.hasOwnProperty(a)) {
              var o = l[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (l.suppressHydrationWarning !== !0 &&
                      zr(r.textContent, o, e),
                    (i = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (l.suppressHydrationWarning !== !0 &&
                      zr(r.textContent, o, e),
                    (i = ["children", "" + o]))
                : Jn.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  B("scroll", r);
            }
          switch (n) {
            case "input":
              Cr(r), Na(r, l, !0);
              break;
            case "textarea":
              Cr(r), ka(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof l.onClick == "function" && (r.onclick = us);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[Ke] = t),
            (e[cr] = r),
            Eu(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = zi(n, r)), n)) {
              case "dialog":
                B("cancel", e), B("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Hn.length; i++) B(Hn[i], e);
                i = r;
                break;
              case "source":
                B("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                B("error", e), B("load", e), (i = r);
                break;
              case "details":
                B("toggle", e), (i = r);
                break;
              case "input":
                ja(e, r), (i = Ei(e, r)), B("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = Y({}, r, { value: void 0 })),
                  B("invalid", e);
                break;
              case "textarea":
                Sa(e, r), (i = Ai(e, r)), B("invalid", e);
                break;
              default:
                i = r;
            }
            _i(n, i), (o = i);
            for (l in o)
              if (o.hasOwnProperty(l)) {
                var c = o[l];
                l === "style"
                  ? ac(e, c)
                  : l === "dangerouslySetInnerHTML"
                  ? ((c = c ? c.__html : void 0), c != null && ic(e, c))
                  : l === "children"
                  ? typeof c == "string"
                    ? (n !== "textarea" || c !== "") && er(e, c)
                    : typeof c == "number" && er(e, "" + c)
                  : l !== "suppressContentEditableWarning" &&
                    l !== "suppressHydrationWarning" &&
                    l !== "autoFocus" &&
                    (Jn.hasOwnProperty(l)
                      ? c != null && l === "onScroll" && B("scroll", e)
                      : c != null && kl(e, l, c, a));
              }
            switch (n) {
              case "input":
                Cr(e), Na(e, r, !1);
                break;
              case "textarea":
                Cr(e), ka(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (l = r.value),
                  l != null
                    ? dn(e, !!r.multiple, l, !1)
                    : r.defaultValue != null &&
                      dn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = us);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return me(t), null;
    case 6:
      if (e && t.stateNode != null) Mu(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (((n = Wt(dr.current)), Wt(Xe.current), Ir(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ke] = t),
            (l = r.nodeValue !== n) && ((e = Te), e !== null))
          )
            switch (e.tag) {
              case 3:
                zr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  zr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          l && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ke] = t),
            (t.stateNode = r);
      }
      return me(t), null;
    case 13:
      if (
        (q(G),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Q && Ce !== null && t.mode & 1 && !(t.flags & 128))
          Gc(), bn(), (t.flags |= 98560), (l = !1);
        else if (((l = Ir(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!l) throw Error(E(318));
            if (
              ((l = t.memoizedState),
              (l = l !== null ? l.dehydrated : null),
              !l)
            )
              throw Error(E(317));
            l[Ke] = t;
          } else
            bn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          me(t), (l = !1);
        } else Ue !== null && (pl(Ue), (Ue = null)), (l = !0);
        if (!l) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || G.current & 1 ? se === 0 && (se = 3) : aa())),
          t.updateQueue !== null && (t.flags |= 4),
          me(t),
          null);
    case 4:
      return (
        Nn(), ll(e, t), e === null && ar(t.stateNode.containerInfo), me(t), null
      );
    case 10:
      return Vl(t.type._context), me(t), null;
    case 17:
      return Ne(t.type) && ds(), me(t), null;
    case 19:
      if ((q(G), (l = t.memoizedState), l === null)) return me(t), null;
      if (((r = (t.flags & 128) !== 0), (a = l.rendering), a === null))
        if (r) Rn(l, !1);
        else {
          if (se !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = ys(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Rn(l, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (l = n),
                    (e = r),
                    (l.flags &= 14680066),
                    (a = l.alternate),
                    a === null
                      ? ((l.childLanes = 0),
                        (l.lanes = e),
                        (l.child = null),
                        (l.subtreeFlags = 0),
                        (l.memoizedProps = null),
                        (l.memoizedState = null),
                        (l.updateQueue = null),
                        (l.dependencies = null),
                        (l.stateNode = null))
                      : ((l.childLanes = a.childLanes),
                        (l.lanes = a.lanes),
                        (l.child = a.child),
                        (l.subtreeFlags = 0),
                        (l.deletions = null),
                        (l.memoizedProps = a.memoizedProps),
                        (l.memoizedState = a.memoizedState),
                        (l.updateQueue = a.updateQueue),
                        (l.type = a.type),
                        (e = a.dependencies),
                        (l.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return V(G, (G.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          l.tail !== null &&
            J() > kn &&
            ((t.flags |= 128), (r = !0), Rn(l, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = ys(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Rn(l, !0),
              l.tail === null && l.tailMode === "hidden" && !a.alternate && !Q)
            )
              return me(t), null;
          } else
            2 * J() - l.renderingStartTime > kn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Rn(l, !1), (t.lanes = 4194304));
        l.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = l.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (l.last = a));
      }
      return l.tail !== null
        ? ((t = l.tail),
          (l.rendering = t),
          (l.tail = t.sibling),
          (l.renderingStartTime = J()),
          (t.sibling = null),
          (n = G.current),
          V(G, r ? (n & 1) | 2 : n & 1),
          t)
        : (me(t), null);
    case 22:
    case 23:
      return (
        la(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ke & 1073741824 && (me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : me(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function yf(e, t) {
  switch ((Fl(t), t.tag)) {
    case 1:
      return (
        Ne(t.type) && ds(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Nn(),
        q(je),
        q(pe),
        Kl(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Gl(t), null;
    case 13:
      if ((q(G), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(E(340));
        bn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return q(G), null;
    case 4:
      return Nn(), null;
    case 10:
      return Vl(t.type._context), null;
    case 22:
    case 23:
      return la(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1,
  fe = !1,
  vf = typeof WeakSet == "function" ? WeakSet : Set,
  _ = null;
function cn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        X(e, t, r);
      }
    else n.current = null;
}
function al(e, t, n) {
  try {
    n();
  } catch (r) {
    X(e, t, r);
  }
}
var ho = !1;
function wf(e, t) {
  if (((Vi = as), (e = Ic()), Ol(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            c = -1,
            d = 0,
            h = 0,
            y = e,
            g = null;
          t: for (;;) {
            for (
              var j;
              y !== n || (i !== 0 && y.nodeType !== 3) || (o = a + i),
                y !== l || (r !== 0 && y.nodeType !== 3) || (c = a + r),
                y.nodeType === 3 && (a += y.nodeValue.length),
                (j = y.firstChild) !== null;

            )
              (g = y), (y = j);
            for (;;) {
              if (y === e) break t;
              if (
                (g === n && ++d === i && (o = a),
                g === l && ++h === r && (c = a),
                (j = y.nextSibling) !== null)
              )
                break;
              (y = g), (g = y.parentNode);
            }
            y = j;
          }
          n = o === -1 || c === -1 ? null : { start: o, end: c };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Bi = { focusedElem: e, selectionRange: n }, as = !1, _ = t; _ !== null; )
    if (((t = _), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (_ = e);
    else
      for (; _ !== null; ) {
        t = _;
        try {
          var v = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var w = v.memoizedProps,
                    b = v.memoizedState,
                    m = t.stateNode,
                    u = m.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : Fe(t.type, w),
                      b
                    );
                  m.__reactInternalSnapshotBeforeUpdate = u;
                }
                break;
              case 3:
                var f = t.stateNode.containerInfo;
                f.nodeType === 1
                  ? (f.textContent = "")
                  : f.nodeType === 9 &&
                    f.documentElement &&
                    f.removeChild(f.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(E(163));
            }
        } catch (p) {
          X(t, t.return, p);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (_ = e);
          break;
        }
        _ = t.return;
      }
  return (v = ho), (ho = !1), v;
}
function Yn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var l = i.destroy;
        (i.destroy = void 0), l !== void 0 && al(t, n, l);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Os(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function ol(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Au(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Au(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ke], delete t[cr], delete t[Gi], delete t[tf], delete t[nf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lu(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function go(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lu(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function cl(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (cl(e, t, n), e = e.sibling; e !== null; ) cl(e, t, n), (e = e.sibling);
}
function ul(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ul(e, t, n), e = e.sibling; e !== null; ) ul(e, t, n), (e = e.sibling);
}
var oe = null,
  $e = !1;
function ut(e, t, n) {
  for (n = n.child; n !== null; ) _u(e, t, n), (n = n.sibling);
}
function _u(e, t, n) {
  if (Ye && typeof Ye.onCommitFiberUnmount == "function")
    try {
      Ye.onCommitFiberUnmount(Ms, n);
    } catch {}
  switch (n.tag) {
    case 5:
      fe || cn(n, t);
    case 6:
      var r = oe,
        i = $e;
      (oe = null),
        ut(e, t, n),
        (oe = r),
        ($e = i),
        oe !== null &&
          ($e
            ? ((e = oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : oe.removeChild(n.stateNode));
      break;
    case 18:
      oe !== null &&
        ($e
          ? ((e = oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ci(e.parentNode, n)
              : e.nodeType === 1 && ci(e, n),
            sr(e))
          : ci(oe, n.stateNode));
      break;
    case 4:
      (r = oe),
        (i = $e),
        (oe = n.stateNode.containerInfo),
        ($e = !0),
        ut(e, t, n),
        (oe = r),
        ($e = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !fe &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var l = i,
            a = l.destroy;
          (l = l.tag),
            a !== void 0 && (l & 2 || l & 4) && al(n, t, a),
            (i = i.next);
        } while (i !== r);
      }
      ut(e, t, n);
      break;
    case 1:
      if (
        !fe &&
        (cn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          X(n, t, o);
        }
      ut(e, t, n);
      break;
    case 21:
      ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((fe = (r = fe) || n.memoizedState !== null), ut(e, t, n), (fe = r))
        : ut(e, t, n);
      break;
    default:
      ut(e, t, n);
  }
}
function xo(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vf()),
      t.forEach(function (r) {
        var i = Pf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var l = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (oe = o.stateNode), ($e = !1);
              break e;
            case 3:
              (oe = o.stateNode.containerInfo), ($e = !0);
              break e;
            case 4:
              (oe = o.stateNode.containerInfo), ($e = !0);
              break e;
          }
          o = o.return;
        }
        if (oe === null) throw Error(E(160));
        _u(l, a, i), (oe = null), ($e = !1);
        var c = i.alternate;
        c !== null && (c.return = null), (i.return = null);
      } catch (d) {
        X(i, t, d);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zu(t, e), (t = t.sibling);
}
function zu(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Qe(e), r & 4)) {
        try {
          Yn(3, e, e.return), Os(3, e);
        } catch (w) {
          X(e, e.return, w);
        }
        try {
          Yn(5, e, e.return);
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 1:
      De(t, e), Qe(e), r & 512 && n !== null && cn(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Qe(e),
        r & 512 && n !== null && cn(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          er(i, "");
        } catch (w) {
          X(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var l = e.memoizedProps,
          a = n !== null ? n.memoizedProps : l,
          o = e.type,
          c = e.updateQueue;
        if (((e.updateQueue = null), c !== null))
          try {
            o === "input" && l.type === "radio" && l.name != null && nc(i, l),
              zi(o, a);
            var d = zi(o, l);
            for (a = 0; a < c.length; a += 2) {
              var h = c[a],
                y = c[a + 1];
              h === "style"
                ? ac(i, y)
                : h === "dangerouslySetInnerHTML"
                ? ic(i, y)
                : h === "children"
                ? er(i, y)
                : kl(i, h, y, d);
            }
            switch (o) {
              case "input":
                Pi(i, l);
                break;
              case "textarea":
                rc(i, l);
                break;
              case "select":
                var g = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!l.multiple;
                var j = l.value;
                j != null
                  ? dn(i, !!l.multiple, j, !1)
                  : g !== !!l.multiple &&
                    (l.defaultValue != null
                      ? dn(i, !!l.multiple, l.defaultValue, !0)
                      : dn(i, !!l.multiple, l.multiple ? [] : "", !1));
            }
            i[cr] = l;
          } catch (w) {
            X(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((De(t, e), Qe(e), r & 4)) {
        if (e.stateNode === null) throw Error(E(162));
        (i = e.stateNode), (l = e.memoizedProps);
        try {
          i.nodeValue = l;
        } catch (w) {
          X(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Qe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          sr(t.containerInfo);
        } catch (w) {
          X(e, e.return, w);
        }
      break;
    case 4:
      De(t, e), Qe(e);
      break;
    case 13:
      De(t, e),
        Qe(e),
        (i = e.child),
        i.flags & 8192 &&
          ((l = i.memoizedState !== null),
          (i.stateNode.isHidden = l),
          !l ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (sa = J())),
        r & 4 && xo(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((fe = (d = fe) || h), De(t, e), (fe = d)) : De(t, e),
        Qe(e),
        r & 8192)
      ) {
        if (
          ((d = e.memoizedState !== null),
          (e.stateNode.isHidden = d) && !h && e.mode & 1)
        )
          for (_ = e, h = e.child; h !== null; ) {
            for (y = _ = h; _ !== null; ) {
              switch (((g = _), (j = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Yn(4, g, g.return);
                  break;
                case 1:
                  cn(g, g.return);
                  var v = g.stateNode;
                  if (typeof v.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (v.props = t.memoizedProps),
                        (v.state = t.memoizedState),
                        v.componentWillUnmount();
                    } catch (w) {
                      X(r, n, w);
                    }
                  }
                  break;
                case 5:
                  cn(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    vo(y);
                    continue;
                  }
              }
              j !== null ? ((j.return = g), (_ = j)) : vo(y);
            }
            h = h.sibling;
          }
        e: for (h = null, y = e; ; ) {
          if (y.tag === 5) {
            if (h === null) {
              h = y;
              try {
                (i = y.stateNode),
                  d
                    ? ((l = i.style),
                      typeof l.setProperty == "function"
                        ? l.setProperty("display", "none", "important")
                        : (l.display = "none"))
                    : ((o = y.stateNode),
                      (c = y.memoizedProps.style),
                      (a =
                        c != null && c.hasOwnProperty("display")
                          ? c.display
                          : null),
                      (o.style.display = lc("display", a)));
              } catch (w) {
                X(e, e.return, w);
              }
            }
          } else if (y.tag === 6) {
            if (h === null)
              try {
                y.stateNode.nodeValue = d ? "" : y.memoizedProps;
              } catch (w) {
                X(e, e.return, w);
              }
          } else if (
            ((y.tag !== 22 && y.tag !== 23) ||
              y.memoizedState === null ||
              y === e) &&
            y.child !== null
          ) {
            (y.child.return = y), (y = y.child);
            continue;
          }
          if (y === e) break e;
          for (; y.sibling === null; ) {
            if (y.return === null || y.return === e) break e;
            h === y && (h = null), (y = y.return);
          }
          h === y && (h = null), (y.sibling.return = y.return), (y = y.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Qe(e), r & 4 && xo(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Qe(e);
  }
}
function Qe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lu(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (er(i, ""), (r.flags &= -33));
          var l = go(e);
          ul(e, l, i);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = go(e);
          cl(e, o, a);
          break;
        default:
          throw Error(E(161));
      }
    } catch (c) {
      X(e, e.return, c);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function bf(e, t, n) {
  (_ = e), Iu(e);
}
function Iu(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var i = _,
      l = i.child;
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Or;
      if (!a) {
        var o = i.alternate,
          c = (o !== null && o.memoizedState !== null) || fe;
        o = Or;
        var d = fe;
        if (((Or = a), (fe = c) && !d))
          for (_ = i; _ !== null; )
            (a = _),
              (c = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? wo(i)
                : c !== null
                ? ((c.return = a), (_ = c))
                : wo(i);
        for (; l !== null; ) (_ = l), Iu(l), (l = l.sibling);
        (_ = i), (Or = o), (fe = d);
      }
      yo(e);
    } else
      i.subtreeFlags & 8772 && l !== null ? ((l.return = i), (_ = l)) : yo(e);
  }
}
function yo(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              fe || Os(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !fe)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Fe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var l = t.updateQueue;
              l !== null && to(t, l, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                to(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var d = t.alternate;
                if (d !== null) {
                  var h = d.memoizedState;
                  if (h !== null) {
                    var y = h.dehydrated;
                    y !== null && sr(y);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(E(163));
          }
        fe || (t.flags & 512 && ol(t));
      } catch (g) {
        X(t, t.return, g);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function vo(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (_ = n);
      break;
    }
    _ = t.return;
  }
}
function wo(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Os(4, t);
          } catch (c) {
            X(t, n, c);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (c) {
              X(t, i, c);
            }
          }
          var l = t.return;
          try {
            ol(t);
          } catch (c) {
            X(t, l, c);
          }
          break;
        case 5:
          var a = t.return;
          try {
            ol(t);
          } catch (c) {
            X(t, a, c);
          }
      }
    } catch (c) {
      X(t, t.return, c);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (_ = o);
      break;
    }
    _ = t.return;
  }
}
var jf = Math.ceil,
  bs = ct.ReactCurrentDispatcher,
  na = ct.ReactCurrentOwner,
  Re = ct.ReactCurrentBatchConfig,
  F = 0,
  ae = null,
  te = null,
  ce = 0,
  ke = 0,
  un = Pt(0),
  se = 0,
  hr = null,
  Vt = 0,
  Ds = 0,
  ra = 0,
  Xn = null,
  we = null,
  sa = 0,
  kn = 1 / 0,
  Je = null,
  js = !1,
  dl = null,
  jt = null,
  Dr = !1,
  gt = null,
  Ns = 0,
  Zn = 0,
  ml = null,
  Xr = -1,
  Zr = 0;
function ge() {
  return F & 6 ? J() : Xr !== -1 ? Xr : (Xr = J());
}
function Nt(e) {
  return e.mode & 1
    ? F & 2 && ce !== 0
      ? ce & -ce
      : sf.transition !== null
      ? (Zr === 0 && (Zr = vc()), Zr)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Cc(e.type))),
        e)
    : 1;
}
function Be(e, t, n, r) {
  if (50 < Zn) throw ((Zn = 0), (ml = null), Error(E(185)));
  xr(e, n, r),
    (!(F & 2) || e !== ae) &&
      (e === ae && (!(F & 2) && (Ds |= n), se === 4 && pt(e, ce)),
      Se(e, r),
      n === 1 && F === 0 && !(t.mode & 1) && ((kn = J() + 500), Is && Mt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  sm(e, t);
  var r = ls(e, e === ae ? ce : 0);
  if (r === 0)
    n !== null && Ea(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ea(n), t === 1))
      e.tag === 0 ? rf(bo.bind(null, e)) : Bc(bo.bind(null, e)),
        Jm(function () {
          !(F & 6) && Mt();
        }),
        (n = null);
    else {
      switch (wc(r)) {
        case 1:
          n = Ml;
          break;
        case 4:
          n = xc;
          break;
        case 16:
          n = is;
          break;
        case 536870912:
          n = yc;
          break;
        default:
          n = is;
      }
      n = Hu(n, Ru.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ru(e, t) {
  if (((Xr = -1), (Zr = 0), F & 6)) throw Error(E(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = ls(e, e === ae ? ce : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Ss(e, r);
  else {
    t = r;
    var i = F;
    F |= 2;
    var l = Ou();
    (ae !== e || ce !== t) && ((Je = null), (kn = J() + 500), Dt(e, t));
    do
      try {
        kf();
        break;
      } catch (o) {
        Wu(e, o);
      }
    while (!0);
    Hl(),
      (bs.current = l),
      (F = i),
      te !== null ? (t = 0) : ((ae = null), (ce = 0), (t = se));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = Di(e)), i !== 0 && ((r = i), (t = fl(e, i)))), t === 1)
    )
      throw ((n = hr), Dt(e, 0), pt(e, r), Se(e, J()), n);
    if (t === 6) pt(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !Nf(i) &&
          ((t = Ss(e, r)),
          t === 2 && ((l = Di(e)), l !== 0 && ((r = l), (t = fl(e, l)))),
          t === 1))
      )
        throw ((n = hr), Dt(e, 0), pt(e, r), Se(e, J()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          zt(e, we, Je);
          break;
        case 3:
          if (
            (pt(e, r), (r & 130023424) === r && ((t = sa + 500 - J()), 10 < t))
          ) {
            if (ls(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              ge(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = Qi(zt.bind(null, e, we, Je), t);
            break;
          }
          zt(e, we, Je);
          break;
        case 4:
          if ((pt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - Ve(r);
            (l = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~l);
          }
          if (
            ((r = i),
            (r = J() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * jf(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Qi(zt.bind(null, e, we, Je), r);
            break;
          }
          zt(e, we, Je);
          break;
        case 5:
          zt(e, we, Je);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return Se(e, J()), e.callbackNode === n ? Ru.bind(null, e) : null;
}
function fl(e, t) {
  var n = Xn;
  return (
    e.current.memoizedState.isDehydrated && (Dt(e, t).flags |= 256),
    (e = Ss(e, t)),
    e !== 2 && ((t = we), (we = n), t !== null && pl(t)),
    e
  );
}
function pl(e) {
  we === null ? (we = e) : we.push.apply(we, e);
}
function Nf(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            l = i.getSnapshot;
          i = i.value;
          try {
            if (!qe(l(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function pt(e, t) {
  for (
    t &= ~ra,
      t &= ~Ds,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Ve(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function bo(e) {
  if (F & 6) throw Error(E(327));
  gn();
  var t = ls(e, 0);
  if (!(t & 1)) return Se(e, J()), null;
  var n = Ss(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && ((t = r), (n = fl(e, r)));
  }
  if (n === 1) throw ((n = hr), Dt(e, 0), pt(e, t), Se(e, J()), n);
  if (n === 6) throw Error(E(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    zt(e, we, Je),
    Se(e, J()),
    null
  );
}
function ia(e, t) {
  var n = F;
  F |= 1;
  try {
    return e(t);
  } finally {
    (F = n), F === 0 && ((kn = J() + 500), Is && Mt());
  }
}
function Bt(e) {
  gt !== null && gt.tag === 0 && !(F & 6) && gn();
  var t = F;
  F |= 1;
  var n = Re.transition,
    r = U;
  try {
    if (((Re.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (Re.transition = n), (F = t), !(F & 6) && Mt();
  }
}
function la() {
  (ke = un.current), q(un);
}
function Dt(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Zm(n)), te !== null))
    for (n = te.return; n !== null; ) {
      var r = n;
      switch ((Fl(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ds();
          break;
        case 3:
          Nn(), q(je), q(pe), Kl();
          break;
        case 5:
          Gl(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          q(G);
          break;
        case 19:
          q(G);
          break;
        case 10:
          Vl(r.type._context);
          break;
        case 22:
        case 23:
          la();
      }
      n = n.return;
    }
  if (
    ((ae = e),
    (te = e = St(e.current, null)),
    (ce = ke = t),
    (se = 0),
    (hr = null),
    (ra = Ds = Vt = 0),
    (we = Xn = null),
    Rt !== null)
  ) {
    for (t = 0; t < Rt.length; t++)
      if (((n = Rt[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          l = n.pending;
        if (l !== null) {
          var a = l.next;
          (l.next = i), (r.next = a);
        }
        n.pending = r;
      }
    Rt = null;
  }
  return e;
}
function Wu(e, t) {
  do {
    var n = te;
    try {
      if ((Hl(), (Gr.current = ws), vs)) {
        for (var r = K.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        vs = !1;
      }
      if (
        ((Ht = 0),
        (le = re = K = null),
        (Kn = !1),
        (mr = 0),
        (na.current = null),
        n === null || n.return === null)
      ) {
        (se = 1), (hr = t), (te = null);
        break;
      }
      e: {
        var l = e,
          a = n.return,
          o = n,
          c = t;
        if (
          ((t = ce),
          (o.flags |= 32768),
          c !== null && typeof c == "object" && typeof c.then == "function")
        ) {
          var d = c,
            h = o,
            y = h.tag;
          if (!(h.mode & 1) && (y === 0 || y === 11 || y === 15)) {
            var g = h.alternate;
            g
              ? ((h.updateQueue = g.updateQueue),
                (h.memoizedState = g.memoizedState),
                (h.lanes = g.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var j = ao(a);
          if (j !== null) {
            (j.flags &= -257),
              oo(j, a, o, l, t),
              j.mode & 1 && lo(l, d, t),
              (t = j),
              (c = d);
            var v = t.updateQueue;
            if (v === null) {
              var w = new Set();
              w.add(c), (t.updateQueue = w);
            } else v.add(c);
            break e;
          } else {
            if (!(t & 1)) {
              lo(l, d, t), aa();
              break e;
            }
            c = Error(E(426));
          }
        } else if (Q && o.mode & 1) {
          var b = ao(a);
          if (b !== null) {
            !(b.flags & 65536) && (b.flags |= 256),
              oo(b, a, o, l, t),
              $l(Sn(c, o));
            break e;
          }
        }
        (l = c = Sn(c, o)),
          se !== 4 && (se = 2),
          Xn === null ? (Xn = [l]) : Xn.push(l),
          (l = a);
        do {
          switch (l.tag) {
            case 3:
              (l.flags |= 65536), (t &= -t), (l.lanes |= t);
              var m = wu(l, c, t);
              eo(l, m);
              break e;
            case 1:
              o = c;
              var u = l.type,
                f = l.stateNode;
              if (
                !(l.flags & 128) &&
                (typeof u.getDerivedStateFromError == "function" ||
                  (f !== null &&
                    typeof f.componentDidCatch == "function" &&
                    (jt === null || !jt.has(f))))
              ) {
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var p = bu(l, o, t);
                eo(l, p);
                break e;
              }
          }
          l = l.return;
        } while (l !== null);
      }
      Fu(n);
    } catch (x) {
      (t = x), te === n && n !== null && (te = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ou() {
  var e = bs.current;
  return (bs.current = ws), e === null ? ws : e;
}
function aa() {
  (se === 0 || se === 3 || se === 2) && (se = 4),
    ae === null || (!(Vt & 268435455) && !(Ds & 268435455)) || pt(ae, ce);
}
function Ss(e, t) {
  var n = F;
  F |= 2;
  var r = Ou();
  (ae !== e || ce !== t) && ((Je = null), Dt(e, t));
  do
    try {
      Sf();
      break;
    } catch (i) {
      Wu(e, i);
    }
  while (!0);
  if ((Hl(), (F = n), (bs.current = r), te !== null)) throw Error(E(261));
  return (ae = null), (ce = 0), se;
}
function Sf() {
  for (; te !== null; ) Du(te);
}
function kf() {
  for (; te !== null && !Kd(); ) Du(te);
}
function Du(e) {
  var t = Uu(e.alternate, e, ke);
  (e.memoizedProps = e.pendingProps),
    t === null ? Fu(e) : (te = t),
    (na.current = null);
}
function Fu(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = yf(n, t)), n !== null)) {
        (n.flags &= 32767), (te = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (se = 6), (te = null);
        return;
      }
    } else if (((n = xf(n, t, ke)), n !== null)) {
      te = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      te = t;
      return;
    }
    te = t = e;
  } while (t !== null);
  se === 0 && (se = 5);
}
function zt(e, t, n) {
  var r = U,
    i = Re.transition;
  try {
    (Re.transition = null), (U = 1), Cf(e, t, n, r);
  } finally {
    (Re.transition = i), (U = r);
  }
  return null;
}
function Cf(e, t, n, r) {
  do gn();
  while (gt !== null);
  if (F & 6) throw Error(E(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(E(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var l = n.lanes | n.childLanes;
  if (
    (im(e, l),
    e === ae && ((te = ae = null), (ce = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Dr ||
      ((Dr = !0),
      Hu(is, function () {
        return gn(), null;
      })),
    (l = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || l)
  ) {
    (l = Re.transition), (Re.transition = null);
    var a = U;
    U = 1;
    var o = F;
    (F |= 4),
      (na.current = null),
      wf(e, n),
      zu(n, e),
      Bm(Bi),
      (as = !!Vi),
      (Bi = Vi = null),
      (e.current = n),
      bf(n),
      Yd(),
      (F = o),
      (U = a),
      (Re.transition = l);
  } else e.current = n;
  if (
    (Dr && ((Dr = !1), (gt = e), (Ns = i)),
    (l = e.pendingLanes),
    l === 0 && (jt = null),
    Jd(n.stateNode),
    Se(e, J()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (js) throw ((js = !1), (e = dl), (dl = null), e);
  return (
    Ns & 1 && e.tag !== 0 && gn(),
    (l = e.pendingLanes),
    l & 1 ? (e === ml ? Zn++ : ((Zn = 0), (ml = e))) : (Zn = 0),
    Mt(),
    null
  );
}
function gn() {
  if (gt !== null) {
    var e = wc(Ns),
      t = Re.transition,
      n = U;
    try {
      if (((Re.transition = null), (U = 16 > e ? 16 : e), gt === null))
        var r = !1;
      else {
        if (((e = gt), (gt = null), (Ns = 0), F & 6)) throw Error(E(331));
        var i = F;
        for (F |= 4, _ = e.current; _ !== null; ) {
          var l = _,
            a = l.child;
          if (_.flags & 16) {
            var o = l.deletions;
            if (o !== null) {
              for (var c = 0; c < o.length; c++) {
                var d = o[c];
                for (_ = d; _ !== null; ) {
                  var h = _;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, h, l);
                  }
                  var y = h.child;
                  if (y !== null) (y.return = h), (_ = y);
                  else
                    for (; _ !== null; ) {
                      h = _;
                      var g = h.sibling,
                        j = h.return;
                      if ((Au(h), h === d)) {
                        _ = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = j), (_ = g);
                        break;
                      }
                      _ = j;
                    }
                }
              }
              var v = l.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var b = w.sibling;
                    (w.sibling = null), (w = b);
                  } while (w !== null);
                }
              }
              _ = l;
            }
          }
          if (l.subtreeFlags & 2064 && a !== null) (a.return = l), (_ = a);
          else
            e: for (; _ !== null; ) {
              if (((l = _), l.flags & 2048))
                switch (l.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Yn(9, l, l.return);
                }
              var m = l.sibling;
              if (m !== null) {
                (m.return = l.return), (_ = m);
                break e;
              }
              _ = l.return;
            }
        }
        var u = e.current;
        for (_ = u; _ !== null; ) {
          a = _;
          var f = a.child;
          if (a.subtreeFlags & 2064 && f !== null) (f.return = a), (_ = f);
          else
            e: for (a = u; _ !== null; ) {
              if (((o = _), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Os(9, o);
                  }
                } catch (x) {
                  X(o, o.return, x);
                }
              if (o === a) {
                _ = null;
                break e;
              }
              var p = o.sibling;
              if (p !== null) {
                (p.return = o.return), (_ = p);
                break e;
              }
              _ = o.return;
            }
        }
        if (
          ((F = i), Mt(), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        )
          try {
            Ye.onPostCommitFiberRoot(Ms, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (Re.transition = t);
    }
  }
  return !1;
}
function jo(e, t, n) {
  (t = Sn(n, t)),
    (t = wu(e, t, 1)),
    (e = bt(e, t, 1)),
    (t = ge()),
    e !== null && (xr(e, 1, t), Se(e, t));
}
function X(e, t, n) {
  if (e.tag === 3) jo(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jo(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (jt === null || !jt.has(r)))
        ) {
          (e = Sn(n, e)),
            (e = bu(t, e, 1)),
            (t = bt(t, e, 1)),
            (e = ge()),
            t !== null && (xr(t, 1, e), Se(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Tf(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ge()),
    (e.pingedLanes |= e.suspendedLanes & n),
    ae === e &&
      (ce & n) === n &&
      (se === 4 || (se === 3 && (ce & 130023424) === ce && 500 > J() - sa)
        ? Dt(e, 0)
        : (ra |= n)),
    Se(e, t);
}
function $u(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Pr), (Pr <<= 1), !(Pr & 130023424) && (Pr = 4194304))
      : (t = 1));
  var n = ge();
  (e = at(e, t)), e !== null && (xr(e, t, n), Se(e, n));
}
function Ef(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), $u(e, n);
}
function Pf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(E(314));
  }
  r !== null && r.delete(t), $u(e, n);
}
var Uu;
Uu = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || je.current) be = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (be = !1), gf(e, t, n);
      be = !!(e.flags & 131072);
    }
  else (be = !1), Q && t.flags & 1048576 && qc(t, ps, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yr(e, t), (e = t.pendingProps);
      var i = wn(t, pe.current);
      hn(t, n), (i = Xl(null, t, r, e, i, n));
      var l = Zl();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ne(r) ? ((l = !0), ms(t)) : (l = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ql(t),
            (i.updater = Ws),
            (t.stateNode = i),
            (i._reactInternals = t),
            el(t, r, e, n),
            (t = rl(null, t, r, !0, l, n)))
          : ((t.tag = 0), Q && l && Dl(t), he(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yr(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = Af(r)),
          (e = Fe(r, e)),
          i)
        ) {
          case 0:
            t = nl(null, t, r, e, n);
            break e;
          case 1:
            t = mo(null, t, r, e, n);
            break e;
          case 11:
            t = co(null, t, r, e, n);
            break e;
          case 14:
            t = uo(null, t, r, Fe(r.type, e), n);
            break e;
        }
        throw Error(E(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Fe(r, i)),
        nl(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Fe(r, i)),
        mo(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((ku(t), e === null)) throw Error(E(387));
        (r = t.pendingProps),
          (l = t.memoizedState),
          (i = l.element),
          Zc(e, t),
          xs(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), l.isDehydrated))
          if (
            ((l = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = l),
            (t.memoizedState = l),
            t.flags & 256)
          ) {
            (i = Sn(Error(E(423)), t)), (t = fo(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Sn(Error(E(424)), t)), (t = fo(e, t, r, n, i));
            break e;
          } else
            for (
              Ce = wt(t.stateNode.containerInfo.firstChild),
                Te = t,
                Q = !0,
                Ue = null,
                n = Yc(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((bn(), r === i)) {
            t = ot(e, t, n);
            break e;
          }
          he(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Jc(t),
        e === null && Xi(t),
        (r = t.type),
        (i = t.pendingProps),
        (l = e !== null ? e.memoizedProps : null),
        (a = i.children),
        qi(r, i) ? (a = null) : l !== null && qi(r, l) && (t.flags |= 32),
        Su(e, t),
        he(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Xi(t), null;
    case 13:
      return Cu(e, t, n);
    case 4:
      return (
        Ql(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = jn(t, null, r, n)) : he(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Fe(r, i)),
        co(e, t, r, i, n)
      );
    case 7:
      return he(e, t, t.pendingProps, n), t.child;
    case 8:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return he(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (l = t.memoizedProps),
          (a = i.value),
          V(hs, r._currentValue),
          (r._currentValue = a),
          l !== null)
        )
          if (qe(l.value, a)) {
            if (l.children === i.children && !je.current) {
              t = ot(e, t, n);
              break e;
            }
          } else
            for (l = t.child, l !== null && (l.return = t); l !== null; ) {
              var o = l.dependencies;
              if (o !== null) {
                a = l.child;
                for (var c = o.firstContext; c !== null; ) {
                  if (c.context === r) {
                    if (l.tag === 1) {
                      (c = rt(-1, n & -n)), (c.tag = 2);
                      var d = l.updateQueue;
                      if (d !== null) {
                        d = d.shared;
                        var h = d.pending;
                        h === null
                          ? (c.next = c)
                          : ((c.next = h.next), (h.next = c)),
                          (d.pending = c);
                      }
                    }
                    (l.lanes |= n),
                      (c = l.alternate),
                      c !== null && (c.lanes |= n),
                      Zi(l.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  c = c.next;
                }
              } else if (l.tag === 10) a = l.type === t.type ? null : l.child;
              else if (l.tag === 18) {
                if (((a = l.return), a === null)) throw Error(E(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Zi(a, n, t),
                  (a = l.sibling);
              } else a = l.child;
              if (a !== null) a.return = l;
              else
                for (a = l; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((l = a.sibling), l !== null)) {
                    (l.return = a.return), (a = l);
                    break;
                  }
                  a = a.return;
                }
              l = a;
            }
        he(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        hn(t, n),
        (i = We(i)),
        (r = r(i)),
        (t.flags |= 1),
        he(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = Fe(r, t.pendingProps)),
        (i = Fe(r.type, i)),
        uo(e, t, r, i, n)
      );
    case 15:
      return ju(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Fe(r, i)),
        Yr(e, t),
        (t.tag = 1),
        Ne(r) ? ((e = !0), ms(t)) : (e = !1),
        hn(t, n),
        vu(t, r, i),
        el(t, r, i, n),
        rl(null, t, r, !0, e, n)
      );
    case 19:
      return Tu(e, t, n);
    case 22:
      return Nu(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Hu(e, t) {
  return gc(e, t);
}
function Mf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ie(e, t, n, r) {
  return new Mf(e, t, n, r);
}
function oa(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Af(e) {
  if (typeof e == "function") return oa(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Tl)) return 11;
    if (e === El) return 14;
  }
  return 2;
}
function St(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ie(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Jr(e, t, n, r, i, l) {
  var a = 2;
  if (((r = e), typeof e == "function")) oa(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Jt:
        return Ft(n.children, i, l, t);
      case Cl:
        (a = 8), (i |= 8);
        break;
      case Si:
        return (
          (e = Ie(12, n, t, i | 2)), (e.elementType = Si), (e.lanes = l), e
        );
      case ki:
        return (e = Ie(13, n, t, i)), (e.elementType = ki), (e.lanes = l), e;
      case Ci:
        return (e = Ie(19, n, t, i)), (e.elementType = Ci), (e.lanes = l), e;
      case Jo:
        return Fs(n, i, l, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xo:
              a = 10;
              break e;
            case Zo:
              a = 9;
              break e;
            case Tl:
              a = 11;
              break e;
            case El:
              a = 14;
              break e;
            case dt:
              (a = 16), (r = null);
              break e;
          }
        throw Error(E(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ie(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
  );
}
function Ft(e, t, n, r) {
  return (e = Ie(7, e, r, t)), (e.lanes = n), e;
}
function Fs(e, t, n, r) {
  return (
    (e = Ie(22, e, r, t)),
    (e.elementType = Jo),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function xi(e, t, n) {
  return (e = Ie(6, e, null, t)), (e.lanes = n), e;
}
function yi(e, t, n) {
  return (
    (t = Ie(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Lf(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Zs(0)),
    (this.expirationTimes = Zs(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Zs(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function ca(e, t, n, r, i, l, a, o, c) {
  return (
    (e = new Lf(e, t, n, o, c)),
    t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
    (l = Ie(3, null, null, t)),
    (e.current = l),
    (l.stateNode = e),
    (l.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ql(l),
    e
  );
}
function _f(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Zt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Vu(e) {
  if (!e) return Ct;
  e = e._reactInternals;
  e: {
    if (Kt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ne(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ne(n)) return Vc(e, n, t);
  }
  return t;
}
function Bu(e, t, n, r, i, l, a, o, c) {
  return (
    (e = ca(n, r, !0, e, i, l, a, o, c)),
    (e.context = Vu(null)),
    (n = e.current),
    (r = ge()),
    (i = Nt(n)),
    (l = rt(r, i)),
    (l.callback = t ?? null),
    bt(n, l, i),
    (e.current.lanes = i),
    xr(e, i, r),
    Se(e, r),
    e
  );
}
function $s(e, t, n, r) {
  var i = t.current,
    l = ge(),
    a = Nt(i);
  return (
    (n = Vu(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rt(l, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = bt(i, t, a)),
    e !== null && (Be(e, i, a, l), Qr(e, i, a)),
    a
  );
}
function ks(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function No(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ua(e, t) {
  No(e, t), (e = e.alternate) && No(e, t);
}
function zf() {
  return null;
}
var qu =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function da(e) {
  this._internalRoot = e;
}
Us.prototype.render = da.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  $s(e, t, null, null);
};
Us.prototype.unmount = da.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function () {
      $s(null, e, null, null);
    }),
      (t[lt] = null);
  }
};
function Us(e) {
  this._internalRoot = e;
}
Us.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Nc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++);
    ft.splice(n, 0, e), n === 0 && kc(e);
  }
};
function ma(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Hs(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function So() {}
function If(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var l = r;
      r = function () {
        var d = ks(a);
        l.call(d);
      };
    }
    var a = Bu(t, r, e, 0, null, !1, !1, "", So);
    return (
      (e._reactRootContainer = a),
      (e[lt] = a.current),
      ar(e.nodeType === 8 ? e.parentNode : e),
      Bt(),
      a
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var d = ks(c);
      o.call(d);
    };
  }
  var c = ca(e, 0, !1, null, null, !1, !1, "", So);
  return (
    (e._reactRootContainer = c),
    (e[lt] = c.current),
    ar(e.nodeType === 8 ? e.parentNode : e),
    Bt(function () {
      $s(t, c, n, r);
    }),
    c
  );
}
function Vs(e, t, n, r, i) {
  var l = n._reactRootContainer;
  if (l) {
    var a = l;
    if (typeof i == "function") {
      var o = i;
      i = function () {
        var c = ks(a);
        o.call(c);
      };
    }
    $s(t, a, e, i);
  } else a = If(n, t, e, i, r);
  return ks(a);
}
bc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Un(t.pendingLanes);
        n !== 0 &&
          (Al(t, n | 1), Se(t, J()), !(F & 6) && ((kn = J() + 500), Mt()));
      }
      break;
    case 13:
      Bt(function () {
        var r = at(e, 1);
        if (r !== null) {
          var i = ge();
          Be(r, e, 1, i);
        }
      }),
        ua(e, 1);
  }
};
Ll = function (e) {
  if (e.tag === 13) {
    var t = at(e, 134217728);
    if (t !== null) {
      var n = ge();
      Be(t, e, 134217728, n);
    }
    ua(e, 134217728);
  }
};
jc = function (e) {
  if (e.tag === 13) {
    var t = Nt(e),
      n = at(e, t);
    if (n !== null) {
      var r = ge();
      Be(n, e, t, r);
    }
    ua(e, t);
  }
};
Nc = function () {
  return U;
};
Sc = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
Ri = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Pi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = zs(r);
            if (!i) throw Error(E(90));
            tc(r), Pi(r, i);
          }
        }
      }
      break;
    case "textarea":
      rc(e, n);
      break;
    case "select":
      (t = n.value), t != null && dn(e, !!n.multiple, t, !1);
  }
};
uc = ia;
dc = Bt;
var Rf = { usingClientEntryPoint: !1, Events: [vr, rn, zs, oc, cc, ia] },
  Wn = {
    findFiberByHostInstance: It,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Wf = {
    bundleType: Wn.bundleType,
    version: Wn.version,
    rendererPackageName: Wn.rendererPackageName,
    rendererConfig: Wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: ct.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = pc(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Wn.findFiberByHostInstance || zf,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber)
    try {
      (Ms = Fr.inject(Wf)), (Ye = Fr);
    } catch {}
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rf;
Pe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ma(t)) throw Error(E(200));
  return _f(e, t, null, n);
};
Pe.createRoot = function (e, t) {
  if (!ma(e)) throw Error(E(299));
  var n = !1,
    r = "",
    i = qu;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = ca(e, 1, !1, null, null, n, !1, r, i)),
    (e[lt] = t.current),
    ar(e.nodeType === 8 ? e.parentNode : e),
    new da(t)
  );
};
Pe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(E(188))
      : ((e = Object.keys(e).join(",")), Error(E(268, e)));
  return (e = pc(t)), (e = e === null ? null : e.stateNode), e;
};
Pe.flushSync = function (e) {
  return Bt(e);
};
Pe.hydrate = function (e, t, n) {
  if (!Hs(t)) throw Error(E(200));
  return Vs(null, e, t, !0, n);
};
Pe.hydrateRoot = function (e, t, n) {
  if (!ma(e)) throw Error(E(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    l = "",
    a = qu;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = Bu(t, null, e, 1, n ?? null, i, !1, l, a)),
    (e[lt] = t.current),
    ar(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new Us(t);
};
Pe.render = function (e, t, n) {
  if (!Hs(t)) throw Error(E(200));
  return Vs(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function (e) {
  if (!Hs(e)) throw Error(E(40));
  return e._reactRootContainer
    ? (Bt(function () {
        Vs(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[lt] = null);
        });
      }),
      !0)
    : !1;
};
Pe.unstable_batchedUpdates = ia;
Pe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Hs(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Vs(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function Qu() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qu);
    } catch (e) {
      console.error(e);
    }
}
Qu(), (Qo.exports = Pe);
var Of = Qo.exports,
  Gu,
  ko = Of;
(Gu = ko.createRoot), ko.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Df = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ff = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $ = (e, t) => {
    const n = N.forwardRef(
      (
        {
          color: r = "currentColor",
          size: i = 24,
          strokeWidth: l = 2,
          absoluteStrokeWidth: a,
          className: o = "",
          children: c,
          ...d
        },
        h
      ) =>
        N.createElement(
          "svg",
          {
            ref: h,
            ...Df,
            width: i,
            height: i,
            stroke: r,
            strokeWidth: a ? (Number(l) * 24) / Number(i) : l,
            className: ["lucide", `lucide-${Ff(e)}`, o].join(" "),
            ...d,
          },
          [
            ...t.map(([y, g]) => N.createElement(y, g)),
            ...(Array.isArray(c) ? c : [c]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xe = $("AlertTriangle", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",
      key: "c3ski4",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cs = $("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bs = $("Brain", [
  [
    "path",
    {
      d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",
      key: "l5xja",
    },
  ],
  [
    "path",
    {
      d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",
      key: "ep3f8r",
    },
  ],
  ["path", { d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4", key: "1p4c4q" }],
  ["path", { d: "M17.599 6.5a3 3 0 0 0 .399-1.375", key: "tmeiqw" }],
  ["path", { d: "M6.003 5.125A3 3 0 0 0 6.401 6.5", key: "105sqy" }],
  ["path", { d: "M3.477 10.896a4 4 0 0 1 .585-.396", key: "ql3yin" }],
  ["path", { d: "M19.938 10.5a4 4 0 0 1 .585.396", key: "1qfode" }],
  ["path", { d: "M6 18a4 4 0 0 1-1.967-.516", key: "2e4loj" }],
  ["path", { d: "M19.967 17.484A4 4 0 0 1 18 18", key: "159ez6" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ee = $("CheckCircle", [
  ["path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", key: "g774vq" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tt = $("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $f = $("Code", [
  ["polyline", { points: "16 18 22 12 16 6", key: "z7tu5w" }],
  ["polyline", { points: "8 6 2 12 8 18", key: "1eg1df" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fa = $("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ku = $("EyeOff", [
  ["path", { d: "M9.88 9.88a3 3 0 1 0 4.24 4.24", key: "1jxqfv" }],
  [
    "path",
    {
      d: "M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",
      key: "9wicm4",
    },
  ],
  [
    "path",
    {
      d: "M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",
      key: "1jreej",
    },
  ],
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = $("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yu = $("Gamepad2", [
  ["line", { x1: "6", x2: "10", y1: "11", y2: "11", key: "1gktln" }],
  ["line", { x1: "8", x2: "8", y1: "9", y2: "13", key: "qnk9ow" }],
  ["line", { x1: "15", x2: "15.01", y1: "12", y2: "12", key: "krot7o" }],
  ["line", { x1: "18", x2: "18.01", y1: "10", y2: "10", key: "1lcuu1" }],
  [
    "path",
    {
      d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",
      key: "mfqc10",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uf = $("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ts = $("Key", [
  ["circle", { cx: "7.5", cy: "15.5", r: "5.5", key: "yqb3hr" }],
  ["path", { d: "m21 2-9.6 9.6", key: "1j0ho8" }],
  ["path", { d: "m15.5 7.5 3 3L22 7l-3-3", key: "1rn1fs" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Co = $("Keyboard", [
  ["path", { d: "M10 8h.01", key: "1r9ogq" }],
  ["path", { d: "M12 12h.01", key: "1mp3jc" }],
  ["path", { d: "M14 8h.01", key: "1primd" }],
  ["path", { d: "M16 12h.01", key: "1l6xoz" }],
  ["path", { d: "M18 8h.01", key: "emo2bl" }],
  ["path", { d: "M6 8h.01", key: "x9i8wu" }],
  ["path", { d: "M7 16h10", key: "wp8him" }],
  ["path", { d: "M8 12h.01", key: "czm47f" }],
  [
    "rect",
    { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const To = $("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xu = $("Lock", [
  [
    "rect",
    {
      width: "18",
      height: "11",
      x: "3",
      y: "11",
      rx: "2",
      ry: "2",
      key: "1w4ew1",
    },
  ],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zu = $("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = $("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = $("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ju = $("RotateCcw", [
  [
    "path",
    { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
  ],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ed = $("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = $("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qt = $("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = $("Siren", [
  ["path", { d: "M7 18v-6a5 5 0 1 1 10 0v6", key: "pcx96s" }],
  [
    "path",
    {
      d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",
      key: "1b4s83",
    },
  ],
  ["path", { d: "M21 12h1", key: "jtio3y" }],
  ["path", { d: "M18.5 4.5 18 5", key: "g5sp9y" }],
  ["path", { d: "M2 12h1", key: "1uaihz" }],
  ["path", { d: "M12 2v1", key: "11qlp1" }],
  ["path", { d: "m4.929 4.929.707.707", key: "1i51kw" }],
  ["path", { d: "M12 12v6", key: "3ahymv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = $("Smartphone", [
  [
    "rect",
    {
      width: "14",
      height: "20",
      x: "5",
      y: "2",
      rx: "2",
      ry: "2",
      key: "1yt0o3",
    },
  ],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const td = $("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cn = $("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = $("Terminal", [
  ["polyline", { points: "4 17 10 11 4 5", key: "akl6gq" }],
  ["line", { x1: "12", x2: "20", y1: "19", y2: "19", key: "q2wloq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const br = $("Trophy", [
  ["path", { d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6", key: "17hqa7" }],
  ["path", { d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18", key: "lmptdp" }],
  ["path", { d: "M4 22h16", key: "57wxv0" }],
  [
    "path",
    {
      d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
      key: "1nw9bq",
    },
  ],
  [
    "path",
    {
      d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
      key: "1np0yb",
    },
  ],
  ["path", { d: "M18 2H6v7a6 6 0 0 0 12 0V2Z", key: "u46fv3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Eo = $("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nd = $("Wifi", [
  ["path", { d: "M12 20h.01", key: "zekei9" }],
  ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }],
  ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }],
  ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qt = $("XCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
  ["path", { d: "m9 9 6 6", key: "z0biqf" }],
]);
var Kf = typeof Element < "u",
  Yf = typeof Map == "function",
  Xf = typeof Set == "function",
  Zf = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function es(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var n, r, i;
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!es(e[r], t[r])) return !1;
      return !0;
    }
    var l;
    if (Yf && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (l = e.entries(); !(r = l.next()).done; )
        if (!t.has(r.value[0])) return !1;
      for (l = e.entries(); !(r = l.next()).done; )
        if (!es(r.value[1], t.get(r.value[0]))) return !1;
      return !0;
    }
    if (Xf && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (l = e.entries(); !(r = l.next()).done; )
        if (!t.has(r.value[0])) return !1;
      return !0;
    }
    if (Zf && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1;
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == "function" &&
      typeof t.valueOf == "function"
    )
      return e.valueOf() === t.valueOf();
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == "function" &&
      typeof t.toString == "function"
    )
      return e.toString() === t.toString();
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1;
    if (Kf && e instanceof Element) return !1;
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === "_owner" || i[r] === "__v" || i[r] === "__o") &&
          e.$$typeof
        ) &&
        !es(e[i[r]], t[i[r]])
      )
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var Jf = function (t, n) {
  try {
    return es(t, n);
  } catch (r) {
    if ((r.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw r;
  }
};
const ep = Es(Jf);
var tp = function (e, t, n, r, i, l, a, o) {
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var d = [n, r, i, l, a, o],
          h = 0;
        (c = new Error(
          t.replace(/%s/g, function () {
            return d[h++];
          })
        )),
          (c.name = "Invariant Violation");
      }
      throw ((c.framesToPop = 1), c);
    }
  },
  np = tp;
const Po = Es(np);
var rp = function (t, n, r, i) {
  var l = r ? r.call(i, t, n) : void 0;
  if (l !== void 0) return !!l;
  if (t === n) return !0;
  if (typeof t != "object" || !t || typeof n != "object" || !n) return !1;
  var a = Object.keys(t),
    o = Object.keys(n);
  if (a.length !== o.length) return !1;
  for (
    var c = Object.prototype.hasOwnProperty.bind(n), d = 0;
    d < a.length;
    d++
  ) {
    var h = a[d];
    if (!c(h)) return !1;
    var y = t[h],
      g = n[h];
    if (
      ((l = r ? r.call(i, y, g, h) : void 0),
      l === !1 || (l === void 0 && y !== g))
    )
      return !1;
  }
  return !0;
};
const sp = Es(rp);
var rd = ((e) => (
    (e.BASE = "base"),
    (e.BODY = "body"),
    (e.HEAD = "head"),
    (e.HTML = "html"),
    (e.LINK = "link"),
    (e.META = "meta"),
    (e.NOSCRIPT = "noscript"),
    (e.SCRIPT = "script"),
    (e.STYLE = "style"),
    (e.TITLE = "title"),
    (e.FRAGMENT = "Symbol(react.fragment)"),
    e
  ))(rd || {}),
  vi = {
    link: { rel: ["amphtml", "canonical", "alternate"] },
    script: { type: ["application/ld+json"] },
    meta: {
      charset: "",
      name: ["generator", "robots", "description"],
      property: [
        "og:type",
        "og:title",
        "og:url",
        "og:image",
        "og:image:alt",
        "og:description",
        "twitter:url",
        "twitter:title",
        "twitter:description",
        "twitter:image",
        "twitter:image:alt",
        "twitter:card",
        "twitter:site",
      ],
    },
  },
  Mo = Object.values(rd),
  ha = {
    accesskey: "accessKey",
    charset: "charSet",
    class: "className",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    "http-equiv": "httpEquiv",
    itemprop: "itemProp",
    tabindex: "tabIndex",
  },
  ip = Object.entries(ha).reduce((e, [t, n]) => ((e[n] = t), e), {}),
  He = "data-rh",
  xn = {
    DEFAULT_TITLE: "defaultTitle",
    DEFER: "defer",
    ENCODE_SPECIAL_CHARACTERS: "encodeSpecialCharacters",
    ON_CHANGE_CLIENT_STATE: "onChangeClientState",
    TITLE_TEMPLATE: "titleTemplate",
    PRIORITIZE_SEO_TAGS: "prioritizeSeoTags",
  },
  yn = (e, t) => {
    for (let n = e.length - 1; n >= 0; n -= 1) {
      const r = e[n];
      if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
    }
    return null;
  },
  lp = (e) => {
    let t = yn(e, "title");
    const n = yn(e, xn.TITLE_TEMPLATE);
    if ((Array.isArray(t) && (t = t.join("")), n && t))
      return n.replace(/%s/g, () => t);
    const r = yn(e, xn.DEFAULT_TITLE);
    return t || r || void 0;
  },
  ap = (e) => yn(e, xn.ON_CHANGE_CLIENT_STATE) || (() => {}),
  wi = (e, t) =>
    t
      .filter((n) => typeof n[e] < "u")
      .map((n) => n[e])
      .reduce((n, r) => ({ ...n, ...r }), {}),
  op = (e, t) =>
    t
      .filter((n) => typeof n.base < "u")
      .map((n) => n.base)
      .reverse()
      .reduce((n, r) => {
        if (!n.length) {
          const i = Object.keys(r);
          for (let l = 0; l < i.length; l += 1) {
            const o = i[l].toLowerCase();
            if (e.indexOf(o) !== -1 && r[o]) return n.concat(r);
          }
        }
        return n;
      }, []),
  cp = (e) => console && typeof console.warn == "function" && console.warn(e),
  On = (e, t, n) => {
    const r = {};
    return n
      .filter((i) =>
        Array.isArray(i[e])
          ? !0
          : (typeof i[e] < "u" &&
              cp(
                `Helmet: ${e} should be of type "Array". Instead found type "${typeof i[
                  e
                ]}"`
              ),
            !1)
      )
      .map((i) => i[e])
      .reverse()
      .reduce((i, l) => {
        const a = {};
        l.filter((c) => {
          let d;
          const h = Object.keys(c);
          for (let g = 0; g < h.length; g += 1) {
            const j = h[g],
              v = j.toLowerCase();
            t.indexOf(v) !== -1 &&
              !(d === "rel" && c[d].toLowerCase() === "canonical") &&
              !(v === "rel" && c[v].toLowerCase() === "stylesheet") &&
              (d = v),
              t.indexOf(j) !== -1 &&
                (j === "innerHTML" || j === "cssText" || j === "itemprop") &&
                (d = j);
          }
          if (!d || !c[d]) return !1;
          const y = c[d].toLowerCase();
          return (
            r[d] || (r[d] = {}),
            a[d] || (a[d] = {}),
            r[d][y] ? !1 : ((a[d][y] = !0), !0)
          );
        })
          .reverse()
          .forEach((c) => i.push(c));
        const o = Object.keys(a);
        for (let c = 0; c < o.length; c += 1) {
          const d = o[c],
            h = { ...r[d], ...a[d] };
          r[d] = h;
        }
        return i;
      }, [])
      .reverse();
  },
  up = (e, t) => {
    if (Array.isArray(e) && e.length) {
      for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
    }
    return !1;
  },
  dp = (e) => ({
    baseTag: op(["href"], e),
    bodyAttributes: wi("bodyAttributes", e),
    defer: yn(e, xn.DEFER),
    encode: yn(e, xn.ENCODE_SPECIAL_CHARACTERS),
    htmlAttributes: wi("htmlAttributes", e),
    linkTags: On("link", ["rel", "href"], e),
    metaTags: On(
      "meta",
      ["name", "charset", "http-equiv", "property", "itemprop"],
      e
    ),
    noscriptTags: On("noscript", ["innerHTML"], e),
    onChangeClientState: ap(e),
    scriptTags: On("script", ["src", "innerHTML"], e),
    styleTags: On("style", ["cssText"], e),
    title: lp(e),
    titleAttributes: wi("titleAttributes", e),
    prioritizeSeoTags: up(e, xn.PRIORITIZE_SEO_TAGS),
  }),
  sd = (e) => (Array.isArray(e) ? e.join("") : e),
  mp = (e, t) => {
    const n = Object.keys(e);
    for (let r = 0; r < n.length; r += 1)
      if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
    return !1;
  },
  bi = (e, t) =>
    Array.isArray(e)
      ? e.reduce(
          (n, r) => (mp(r, t) ? n.priority.push(r) : n.default.push(r), n),
          { priority: [], default: [] }
        )
      : { default: e, priority: [] },
  Ao = (e, t) => ({ ...e, [t]: void 0 }),
  fp = ["noscript", "script", "style"],
  hl = (e, t = !0) =>
    t === !1
      ? String(e)
      : String(e)
          .replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#x27;"),
  id = (e) =>
    Object.keys(e).reduce((t, n) => {
      const r = typeof e[n] < "u" ? `${n}="${e[n]}"` : `${n}`;
      return t ? `${t} ${r}` : r;
    }, ""),
  pp = (e, t, n, r) => {
    const i = id(n),
      l = sd(t);
    return i
      ? `<${e} ${He}="true" ${i}>${hl(l, r)}</${e}>`
      : `<${e} ${He}="true">${hl(l, r)}</${e}>`;
  },
  hp = (e, t, n = !0) =>
    t.reduce((r, i) => {
      const l = i,
        a = Object.keys(l)
          .filter((d) => !(d === "innerHTML" || d === "cssText"))
          .reduce((d, h) => {
            const y = typeof l[h] > "u" ? h : `${h}="${hl(l[h], n)}"`;
            return d ? `${d} ${y}` : y;
          }, ""),
        o = l.innerHTML || l.cssText || "",
        c = fp.indexOf(e) === -1;
      return `${r}<${e} ${He}="true" ${a}${c ? "/>" : `>${o}</${e}>`}`;
    }, ""),
  ld = (e, t = {}) =>
    Object.keys(e).reduce((n, r) => {
      const i = ha[r];
      return (n[i || r] = e[r]), n;
    }, t),
  gp = (e, t, n) => {
    const r = { key: t, [He]: !0 },
      i = ld(n, r);
    return [ze.createElement("title", i, t)];
  },
  ts = (e, t) =>
    t.map((n, r) => {
      const i = { key: r, [He]: !0 };
      return (
        Object.keys(n).forEach((l) => {
          const o = ha[l] || l;
          if (o === "innerHTML" || o === "cssText") {
            const c = n.innerHTML || n.cssText;
            i.dangerouslySetInnerHTML = { __html: c };
          } else i[o] = n[l];
        }),
        ze.createElement(e, i)
      );
    }),
  Ae = (e, t, n = !0) => {
    switch (e) {
      case "title":
        return {
          toComponent: () => gp(e, t.title, t.titleAttributes),
          toString: () => pp(e, t.title, t.titleAttributes, n),
        };
      case "bodyAttributes":
      case "htmlAttributes":
        return { toComponent: () => ld(t), toString: () => id(t) };
      default:
        return { toComponent: () => ts(e, t), toString: () => hp(e, t, n) };
    }
  },
  xp = ({ metaTags: e, linkTags: t, scriptTags: n, encode: r }) => {
    const i = bi(e, vi.meta),
      l = bi(t, vi.link),
      a = bi(n, vi.script);
    return {
      priorityMethods: {
        toComponent: () => [
          ...ts("meta", i.priority),
          ...ts("link", l.priority),
          ...ts("script", a.priority),
        ],
        toString: () =>
          `${Ae("meta", i.priority, r)} ${Ae("link", l.priority, r)} ${Ae(
            "script",
            a.priority,
            r
          )}`,
      },
      metaTags: i.default,
      linkTags: l.default,
      scriptTags: a.default,
    };
  },
  yp = (e) => {
    const {
      baseTag: t,
      bodyAttributes: n,
      encode: r = !0,
      htmlAttributes: i,
      noscriptTags: l,
      styleTags: a,
      title: o = "",
      titleAttributes: c,
      prioritizeSeoTags: d,
    } = e;
    let { linkTags: h, metaTags: y, scriptTags: g } = e,
      j = { toComponent: () => {}, toString: () => "" };
    return (
      d &&
        ({
          priorityMethods: j,
          linkTags: h,
          metaTags: y,
          scriptTags: g,
        } = xp(e)),
      {
        priority: j,
        base: Ae("base", t, r),
        bodyAttributes: Ae("bodyAttributes", n, r),
        htmlAttributes: Ae("htmlAttributes", i, r),
        link: Ae("link", h, r),
        meta: Ae("meta", y, r),
        noscript: Ae("noscript", l, r),
        script: Ae("script", g, r),
        style: Ae("style", a, r),
        title: Ae("title", { title: o, titleAttributes: c }, r),
      }
    );
  },
  gl = yp,
  $r = [],
  ad = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  xl = class {
    constructor(e, t) {
      Ze(this, "instances", []);
      Ze(this, "canUseDOM", ad);
      Ze(this, "context");
      Ze(this, "value", {
        setHelmet: (e) => {
          this.context.helmet = e;
        },
        helmetInstances: {
          get: () => (this.canUseDOM ? $r : this.instances),
          add: (e) => {
            (this.canUseDOM ? $r : this.instances).push(e);
          },
          remove: (e) => {
            const t = (this.canUseDOM ? $r : this.instances).indexOf(e);
            (this.canUseDOM ? $r : this.instances).splice(t, 1);
          },
        },
      });
      (this.context = e),
        (this.canUseDOM = t || !1),
        t ||
          (e.helmet = gl({
            baseTag: [],
            bodyAttributes: {},
            encodeSpecialCharacters: !0,
            htmlAttributes: {},
            linkTags: [],
            metaTags: [],
            noscriptTags: [],
            scriptTags: [],
            styleTags: [],
            title: "",
            titleAttributes: {},
          }));
    }
  },
  vp = {},
  od = ze.createContext(vp),
  Ot,
  cd =
    ((Ot = class extends N.Component {
      constructor(n) {
        super(n);
        Ze(this, "helmetData");
        this.helmetData = new xl(this.props.context || {}, Ot.canUseDOM);
      }
      render() {
        return ze.createElement(
          od.Provider,
          { value: this.helmetData.value },
          this.props.children
        );
      }
    }),
    Ze(Ot, "canUseDOM", ad),
    Ot),
  Xt = (e, t) => {
    const n = document.head || document.querySelector("head"),
      r = n.querySelectorAll(`${e}[${He}]`),
      i = [].slice.call(r),
      l = [];
    let a;
    return (
      t &&
        t.length &&
        t.forEach((o) => {
          const c = document.createElement(e);
          for (const d in o)
            if (Object.prototype.hasOwnProperty.call(o, d))
              if (d === "innerHTML") c.innerHTML = o.innerHTML;
              else if (d === "cssText")
                c.styleSheet
                  ? (c.styleSheet.cssText = o.cssText)
                  : c.appendChild(document.createTextNode(o.cssText));
              else {
                const h = d,
                  y = typeof o[h] > "u" ? "" : o[h];
                c.setAttribute(d, y);
              }
          c.setAttribute(He, "true"),
            i.some((d, h) => ((a = h), c.isEqualNode(d)))
              ? i.splice(a, 1)
              : l.push(c);
        }),
      i.forEach((o) => {
        var c;
        return (c = o.parentNode) == null ? void 0 : c.removeChild(o);
      }),
      l.forEach((o) => n.appendChild(o)),
      { oldTags: i, newTags: l }
    );
  },
  yl = (e, t) => {
    const n = document.getElementsByTagName(e)[0];
    if (!n) return;
    const r = n.getAttribute(He),
      i = r ? r.split(",") : [],
      l = [...i],
      a = Object.keys(t);
    for (const o of a) {
      const c = t[o] || "";
      n.getAttribute(o) !== c && n.setAttribute(o, c),
        i.indexOf(o) === -1 && i.push(o);
      const d = l.indexOf(o);
      d !== -1 && l.splice(d, 1);
    }
    for (let o = l.length - 1; o >= 0; o -= 1) n.removeAttribute(l[o]);
    i.length === l.length
      ? n.removeAttribute(He)
      : n.getAttribute(He) !== a.join(",") && n.setAttribute(He, a.join(","));
  },
  wp = (e, t) => {
    typeof e < "u" && document.title !== e && (document.title = sd(e)),
      yl("title", t);
  },
  Lo = (e, t) => {
    const {
      baseTag: n,
      bodyAttributes: r,
      htmlAttributes: i,
      linkTags: l,
      metaTags: a,
      noscriptTags: o,
      onChangeClientState: c,
      scriptTags: d,
      styleTags: h,
      title: y,
      titleAttributes: g,
    } = e;
    yl("body", r), yl("html", i), wp(y, g);
    const j = {
        baseTag: Xt("base", n),
        linkTags: Xt("link", l),
        metaTags: Xt("meta", a),
        noscriptTags: Xt("noscript", o),
        scriptTags: Xt("script", d),
        styleTags: Xt("style", h),
      },
      v = {},
      w = {};
    Object.keys(j).forEach((b) => {
      const { newTags: m, oldTags: u } = j[b];
      m.length && (v[b] = m), u.length && (w[b] = j[b].oldTags);
    }),
      t && t(),
      c(e, v, w);
  },
  Dn = null,
  bp = (e) => {
    Dn && cancelAnimationFrame(Dn),
      e.defer
        ? (Dn = requestAnimationFrame(() => {
            Lo(e, () => {
              Dn = null;
            });
          }))
        : (Lo(e), (Dn = null));
  },
  jp = bp,
  _o = class extends N.Component {
    constructor() {
      super(...arguments);
      Ze(this, "rendered", !1);
    }
    shouldComponentUpdate(t) {
      return !sp(t, this.props);
    }
    componentDidUpdate() {
      this.emitChange();
    }
    componentWillUnmount() {
      const { helmetInstances: t } = this.props.context;
      t.remove(this), this.emitChange();
    }
    emitChange() {
      const { helmetInstances: t, setHelmet: n } = this.props.context;
      let r = null;
      const i = dp(
        t.get().map((l) => {
          const a = { ...l.props };
          return delete a.context, a;
        })
      );
      cd.canUseDOM ? jp(i) : gl && (r = gl(i)), n(r);
    }
    init() {
      if (this.rendered) return;
      this.rendered = !0;
      const { helmetInstances: t } = this.props.context;
      t.add(this), this.emitChange();
    }
    render() {
      return this.init(), null;
    }
  },
  ji,
  st =
    ((ji = class extends N.Component {
      shouldComponentUpdate(e) {
        return !ep(Ao(this.props, "helmetData"), Ao(e, "helmetData"));
      }
      mapNestedChildrenToProps(e, t) {
        if (!t) return null;
        switch (e.type) {
          case "script":
          case "noscript":
            return { innerHTML: t };
          case "style":
            return { cssText: t };
          default:
            throw new Error(
              `<${e.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`
            );
        }
      }
      flattenArrayTypeChildren(e, t, n, r) {
        return {
          ...t,
          [e.type]: [
            ...(t[e.type] || []),
            { ...n, ...this.mapNestedChildrenToProps(e, r) },
          ],
        };
      }
      mapObjectTypeChildren(e, t, n, r) {
        switch (e.type) {
          case "title":
            return { ...t, [e.type]: r, titleAttributes: { ...n } };
          case "body":
            return { ...t, bodyAttributes: { ...n } };
          case "html":
            return { ...t, htmlAttributes: { ...n } };
          default:
            return { ...t, [e.type]: { ...n } };
        }
      }
      mapArrayTypeChildrenToProps(e, t) {
        let n = { ...t };
        return (
          Object.keys(e).forEach((r) => {
            n = { ...n, [r]: e[r] };
          }),
          n
        );
      }
      warnOnInvalidChildren(e, t) {
        return (
          Po(
            Mo.some((n) => e.type === n),
            typeof e.type == "function"
              ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
              : `Only elements types ${Mo.join(
                  ", "
                )} are allowed. Helmet does not support rendering <${
                  e.type
                }> elements. Refer to our API for more information.`
          ),
          Po(
            !t ||
              typeof t == "string" ||
              (Array.isArray(t) && !t.some((n) => typeof n != "string")),
            `Helmet expects a string as a child of <${e.type}>. Did you forget to wrap your children in braces? ( <${e.type}>{\`\`}</${e.type}> ) Refer to our API for more information.`
          ),
          !0
        );
      }
      mapChildrenToProps(e, t) {
        let n = {};
        return (
          ze.Children.forEach(e, (r) => {
            if (!r || !r.props) return;
            const { children: i, ...l } = r.props,
              a = Object.keys(l).reduce(
                (c, d) => ((c[ip[d] || d] = l[d]), c),
                {}
              );
            let { type: o } = r;
            switch (
              (typeof o == "symbol"
                ? (o = o.toString())
                : this.warnOnInvalidChildren(r, i),
              o)
            ) {
              case "Symbol(react.fragment)":
                t = this.mapChildrenToProps(i, t);
                break;
              case "link":
              case "meta":
              case "noscript":
              case "script":
              case "style":
                n = this.flattenArrayTypeChildren(r, n, a, i);
                break;
              default:
                t = this.mapObjectTypeChildren(r, t, a, i);
                break;
            }
          }),
          this.mapArrayTypeChildrenToProps(n, t)
        );
      }
      render() {
        const { children: e, ...t } = this.props;
        let n = { ...t },
          { helmetData: r } = t;
        if (
          (e && (n = this.mapChildrenToProps(e, n)), r && !(r instanceof xl))
        ) {
          const i = r;
          (r = new xl(i.context, !0)), delete n.helmetData;
        }
        return r
          ? ze.createElement(_o, { ...n, context: r.value })
          : ze.createElement(od.Consumer, null, (i) =>
              ze.createElement(_o, { ...n, context: i })
            );
      }
    }),
    Ze(ji, "defaultProps", {
      defer: !0,
      encodeSpecialCharacters: !0,
      prioritizeSeoTags: !1,
    }),
    ji);
const zo = [
    {
      id: "phishing-spotter",
      title: "Phishing Email Spotter",
      icon: Zu,
      category: "Detection",
      description: "Learn to identify malicious emails",
    },
    {
      id: "password-challenge",
      title: "Password Strength Challenge",
      icon: Xu,
      category: "Defense",
      description: "Master password security",
    },
    {
      id: "firewall-defender",
      title: "Firewall Defender",
      icon: qf,
      category: "Defense",
      description: "Block malicious network traffic",
    },
    {
      id: "vulnerability-spotter",
      title: "Spot the Vulnerability",
      icon: ed,
      category: "Analysis",
      description: "Find security weaknesses",
    },
    {
      id: "cyber-escape",
      title: "Cyber Escape Room",
      icon: Eo,
      category: "Analysis",
      description: "Solve cybersecurity puzzles",
    },
    {
      id: "cyber-facts",
      title: "True or False: Cyber Facts",
      icon: Cn,
      category: "Knowledge",
      description: "Test your cyber knowledge",
    },
    {
      id: "hack-simulation",
      title: "Hack Me If You Can",
      icon: Yu,
      category: "Analysis",
      description: "Ethical hacking simulation",
    },
    {
      id: "cyber-wordle",
      title: "Cyber Wordle",
      icon: Bs,
      category: "Knowledge",
      description: "Guess cybersecurity terms",
    },
    {
      id: "drag-drop-quiz",
      title: "Drag-and-Drop Quiz",
      icon: Cn,
      category: "Knowledge",
      description: "Match threats and defenses",
    },
    {
      id: "social-media-scanner",
      title: "Social Media Risk Scanner",
      icon: Eo,
      category: "Detection",
      description: "Identify social media risks",
    },
    {
      id: "malware-typing",
      title: "Malware Typing Race",
      icon: Tt,
      category: "Knowledge",
      description: "Type fast, learn faster",
    },
    {
      id: "breach-reaction",
      title: "Breach Reaction Time",
      icon: Tt,
      category: "Defense",
      description: "Respond to security incidents",
    },
    {
      id: "2fa-cracker",
      title: "2FA Code Cracker",
      icon: Ts,
      category: "Defense",
      description: "Master two-factor authentication",
    },
    {
      id: "cyber-maze",
      title: "Cyber Maze",
      icon: Hf,
      category: "Analysis",
      description: "Navigate security challenges",
    },
    {
      id: "data-sorting",
      title: "Data Sorting Game",
      icon: fa,
      category: "Defense",
      description: "Classify sensitive information",
    },
    {
      id: "wifi-security",
      title: "Secure the WiFi",
      icon: nd,
      category: "Defense",
      description: "Protect wireless networks",
    },
  ],
  Np = {
    Detection: "border-red-400 text-red-400",
    Defense: "border-green-400 text-green-400",
    Analysis: "border-blue-400 text-blue-400",
    Knowledge: "border-yellow-400 text-yellow-400",
  },
  Sp = ({ onStartGame: e, onStartQuiz: t, progress: n }) => {
    const r = (a) => {
        const o = n[a];
        return o
          ? ([o.level1, o.level2, o.level3].filter((h) =>
              h == null ? void 0 : h.completed
            ).length /
              3) *
              100
          : 0;
      },
      i = (a) => {
        var c, d, h;
        const o = n[a];
        return (
          ((c = o == null ? void 0 : o.level1) == null
            ? void 0
            : c.completed) &&
          ((d = o == null ? void 0 : o.level2) == null
            ? void 0
            : d.completed) &&
          ((h = o == null ? void 0 : o.level3) == null ? void 0 : h.completed)
        );
      },
      l = zo.filter((a) => i(a.id)).length;
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(st, {
          children: [
            s.jsx("title", {
              children:
                "CyberShields - Gamified Cybersecurity Learning Platform",
            }),
            s.jsx("meta", {
              name: "description",
              content:
                "Master cybersecurity through interactive games and challenges. Learn to defend against real-world threats while having fun!",
            }),
            s.jsx("meta", {
              property: "og:title",
              content:
                "CyberShields - Gamified Cybersecurity Learning Platform",
            }),
            s.jsx("meta", {
              property: "og:description",
              content:
                "Master cybersecurity through interactive games and challenges. Learn to defend against real-world threats while having fun!",
            }),
            s.jsx("meta", { property: "og:type", content: "website" }),
            s.jsx("meta", {
              property: "og:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("meta", {
              property: "og:url",
              content: "https://yourdomain.com/",
            }),
            s.jsx("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            s.jsx("meta", {
              name: "twitter:title",
              content:
                "CyberShields - Gamified Cybersecurity Learning Platform",
            }),
            s.jsx("meta", {
              name: "twitter:description",
              content:
                "Master cybersecurity through interactive games and challenges. Learn to defend against real-world threats while having fun!",
            }),
            s.jsx("meta", {
              name: "twitter:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("link", {
              rel: "canonical",
              href: "https://yourdomain.com/",
            }),
          ],
        }),
        s.jsxs("section", {
          className: "container mx-auto px-4 py-8",
          "aria-labelledby": "cybershields-hero",
          children: [
            s.jsxs("header", {
              className: "text-center mb-12",
              id: "cybershields-hero",
              children: [
                s.jsxs("h2", {
                  className: "text-4xl font-bold mb-4 text-green-400",
                  children: [
                    "Welcome to ",
                    s.jsx("span", {
                      className: "text-blue-400",
                      children: "CyberShields",
                    }),
                  ],
                }),
                s.jsx("p", {
                  className: "text-xl text-gray-300 mb-6 max-w-3xl mx-auto",
                  children:
                    "Master cybersecurity through interactive games and challenges. Learn to defend against real-world threats while having fun!",
                }),
                s.jsxs("div", {
                  className: "flex justify-center space-x-8 mb-8",
                  "aria-label": "Platform Stats",
                  children: [
                    s.jsxs("div", {
                      className: "text-center",
                      children: [
                        s.jsx("div", {
                          className: "text-3xl font-bold text-green-400",
                          children: l,
                        }),
                        s.jsx("div", {
                          className: "text-sm text-gray-400",
                          children: "Games Completed",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "text-center",
                      children: [
                        s.jsx("div", {
                          className: "text-3xl font-bold text-blue-400",
                          children: "20",
                        }),
                        s.jsx("div", {
                          className: "text-sm text-gray-400",
                          children: "Total Games",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "text-center",
                      children: [
                        s.jsx("div", {
                          className: "text-3xl font-bold text-yellow-400",
                          children: "100",
                        }),
                        s.jsx("div", {
                          className: "text-sm text-gray-400",
                          children: "Quiz Questions",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "flex justify-center space-x-4 mb-8",
                  children: s.jsxs("button", {
                    onClick: t,
                    className:
                      "flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105",
                    "aria-label": "Take Quiz Challenge",
                    children: [
                      s.jsx(Bs, { className: "w-5 h-5" }),
                      s.jsx("span", { children: "Take Quiz Challenge" }),
                    ],
                  }),
                }),
              ],
            }),
            s.jsx("section", {
              className:
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
              "aria-label": "Games List",
              children: zo.map((a) => {
                const o = a.icon,
                  c = r(a.id),
                  d = i(a.id);
                return s.jsxs(
                  "article",
                  {
                    tabIndex: 0,
                    role: "button",
                    "aria-label": a.title,
                    onClick: () => e(a.id),
                    onKeyDown: (h) =>
                      (h.key === "Enter" || h.key === " ") && e(a.id),
                    className:
                      "bg-gray-800 border border-gray-700 rounded-lg p-6 cursor-pointer transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 relative overflow-hidden group",
                    style: { outline: "none" },
                    children: [
                      s.jsx("div", {
                        className:
                          "absolute inset-0 bg-gradient-to-br from-transparent to-gray-900 opacity-50",
                      }),
                      d &&
                        s.jsx("div", {
                          className: "absolute top-2 right-2 z-10",
                          children: s.jsx(br, {
                            className: "w-6 h-6 text-yellow-400",
                            "aria-label": "Completed",
                          }),
                        }),
                      s.jsxs("div", {
                        className: "relative z-10",
                        children: [
                          s.jsx("div", {
                            className:
                              "flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg mb-4 group-hover:bg-green-400 group-hover:text-gray-900 transition-all",
                            children: s.jsx(o, {
                              className: "w-6 h-6",
                              "aria-hidden": "true",
                              focusable: "false",
                            }),
                          }),
                          s.jsx("h3", {
                            className:
                              "text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors",
                            children: a.title,
                          }),
                          s.jsx("p", {
                            className: "text-sm text-gray-300 mb-3",
                            children: a.description,
                          }),
                          s.jsx("div", {
                            className: `inline-block px-2 py-1 rounded text-xs border ${
                              Np[a.category]
                            } mb-3`,
                            children: a.category,
                          }),
                          s.jsx("div", {
                            className:
                              "w-full bg-gray-700 rounded-full h-2 mb-2",
                            children: s.jsx("div", {
                              className:
                                "bg-green-400 h-2 rounded-full transition-all duration-500",
                              style: { width: `${c}%` },
                            }),
                          }),
                          s.jsxs("div", {
                            className:
                              "flex justify-between items-center text-xs text-gray-400",
                            children: [
                              s.jsxs("span", {
                                children: [Math.round(c), "% Complete"],
                              }),
                              s.jsx(Vf, {
                                className:
                                  "w-4 h-4 group-hover:text-green-400 transition-colors",
                                "aria-label": "Play",
                                "aria-hidden": "true",
                                focusable: "false",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  a.id
                );
              }),
            }),
            s.jsx("div", {
              className: "flex justify-center mt-12 mb-4 w-full",
              children: s.jsx("iframe", {
                src: "https://bots.easy-peasy.ai/bot/a9b1448f-26a4-4830-87c8-9000a30983f6?mode=iframe",
                title: "Easy Peasy AI Bot for CyberShields",
                className:
                  "w-full max-w-[400px] h-[500px] rounded-xl shadow-lg border border-blue-400 bg-white",
                style: { minWidth: "260px" },
                allow: "clipboard-write",
              }),
            }),
          ],
        }),
      ],
    });
  },
  kp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState([]),
      [a, o] = N.useState(!1),
      [c, d] = N.useState(0),
      h = {
        1: [
          {
            id: 1,
            from: "security@yourbankXXX.com",
            subject: "URGENT: Your account will be closed",
            content:
              "Dear Customer, Your account has been compromised. Click here immediately to verify your account or it will be closed within 24 hours. www.yourbankXXX-verify.com",
            isPhishing: !0,
            indicators: [
              "Urgent language",
              "Suspicious domain",
              "Threatening closure",
            ],
          },
          {
            id: 2,
            from: "noreply@company.com",
            subject: "Weekly Newsletter",
            content:
              "Hi there! Here are this week's updates from our team. Check out our latest blog posts and product updates.",
            isPhishing: !1,
            indicators: [],
          },
          {
            id: 3,
            from: "winner@lottery-prize.com",
            subject: "You won $1,000,000!",
            content:
              "Congratulations! You have won our international lottery. Send us your bank details to claim your prize immediately.",
            isPhishing: !0,
            indicators: [
              "Too good to be true",
              "Requests bank details",
              "Unknown sender",
            ],
          },
          {
            id: 4,
            from: "hr@yourcompany.com",
            subject: "Meeting reminder",
            content:
              "Don't forget about tomorrow's team meeting at 2 PM in the conference room.",
            isPhishing: !1,
            indicators: [],
          },
        ],
        2: [
          {
            id: 5,
            from: "apple-security@apple.com.verify.id",
            subject: "Your Apple ID has been disabled",
            content:
              "We detected unusual activity on your Apple ID. Please verify your account within 24 hours to prevent permanent deactivation.",
            isPhishing: !0,
            indicators: [
              "Suspicious subdomain",
              "Urgent timeframe",
              "Fake Apple branding",
            ],
          },
          {
            id: 6,
            from: "notifications@paypal.com",
            subject: "Payment received",
            content:
              "You received $50 from John Smith. Transaction ID: #PP12345678",
            isPhishing: !1,
            indicators: [],
          },
          {
            id: 7,
            from: "ceo@yourcompany.co.uk",
            subject: "Urgent wire transfer needed",
            content:
              "I need you to wire $5,000 to this account immediately for a client emergency. Don't tell anyone about this transaction.",
            isPhishing: !0,
            indicators: [
              "CEO impersonation",
              "Urgent money request",
              "Secrecy request",
            ],
          },
        ],
        3: [
          {
            id: 8,
            from: "admin@microsoft-office365.com",
            subject: "Security alert: New sign-in from Windows device",
            content:
              "We noticed a new sign-in to your account from a Windows device. If this wasn't you, please secure your account.",
            isPhishing: !0,
            indicators: [
              "Fake Microsoft domain",
              "Generic security alert",
              "Suspicious TLD",
            ],
          },
          {
            id: 9,
            from: "support@dropbox.com",
            subject: "Your Dropbox storage is almost full",
            content:
              "You're using 98% of your Dropbox storage. Upgrade your plan to continue syncing files.",
            isPhishing: !1,
            indicators: [],
          },
          {
            id: 10,
            from: "tax-refund@irs.gov.secure",
            subject: "IRS Tax Refund Pending",
            content:
              "You have a pending tax refund of $1,247. Verify your information to receive your refund.",
            isPhishing: !0,
            indicators: [
              "Fake government domain",
              "Unexpected refund",
              "Verification request",
            ],
          },
        ],
      };
    N.useEffect(() => {
      r(h[e] || []);
    }, [e]);
    const y = (w) => {
        a || l((b) => (b.includes(w) ? b.filter((m) => m !== w) : [...b, w]));
      },
      g = () => {
        const w = n.filter((C) => C.isPhishing).map((C) => C.id),
          b = i.filter((C) => w.includes(C)),
          m = i.filter((C) => !w.includes(C)),
          u = w.filter((C) => !i.includes(C)),
          f = w.length,
          p = b.length,
          x = (m.length + u.length) * 10,
          S = Math.max(0, (p / f) * 100 - x);
        d(S),
          o(!0),
          setTimeout(() => {
            t(e, S);
          }, 3e3);
      },
      j = (w) => {
        if (!a) return s.jsx(Zu, { className: "w-5 h-5" });
        const b = i.includes(w.id),
          m = w.isPhishing;
        return m && b
          ? s.jsx(ee, { className: "w-5 h-5 text-green-400" })
          : m && !b
          ? s.jsx(xe, { className: "w-5 h-5 text-red-400" })
          : !m && b
          ? s.jsx(Qt, { className: "w-5 h-5 text-red-400" })
          : s.jsx(ee, { className: "w-5 h-5 text-green-400" });
      },
      v = (w) => {
        if (!a)
          return i.includes(w.id)
            ? "border-red-400 bg-red-400/10"
            : "border-gray-600 hover:border-blue-400";
        const b = i.includes(w.id),
          m = w.isPhishing;
        return m && b
          ? "border-green-400 bg-green-400/10"
          : (m && !b) || (!m && b)
          ? "border-red-400 bg-red-400/10"
          : "border-green-400 bg-green-400/10";
      };
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(st, {
          children: [
            s.jsx("title", {
              children: "Phishing Email Spotter - CyberShields",
            }),
            s.jsx("meta", {
              name: "description",
              content:
                "Learn to identify phishing emails and protect yourself from scams in this interactive game.",
            }),
            s.jsx("meta", {
              property: "og:title",
              content: "Phishing Email Spotter - CyberShields",
            }),
            s.jsx("meta", {
              property: "og:description",
              content:
                "Learn to identify phishing emails and protect yourself from scams in this interactive game.",
            }),
            s.jsx("meta", { property: "og:type", content: "website" }),
            s.jsx("meta", {
              property: "og:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("meta", {
              property: "og:url",
              content: "https://yourdomain.com/games/phishing-spotter",
            }),
            s.jsx("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            s.jsx("meta", {
              name: "twitter:title",
              content: "Phishing Email Spotter - CyberShields",
            }),
            s.jsx("meta", {
              name: "twitter:description",
              content:
                "Learn to identify phishing emails and protect yourself from scams in this interactive game.",
            }),
            s.jsx("meta", {
              name: "twitter:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("link", {
              rel: "canonical",
              href: "https://yourdomain.com/games/phishing-spotter",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-6",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: ["Phishing Email Spotter - Level ", e],
                }),
                s.jsx("p", {
                  className: "text-gray-400",
                  children: "Click on emails you think are phishing attempts",
                }),
              ],
            }),
            s.jsx("div", {
              className: "grid gap-4 mb-6",
              children: n.map((w) =>
                s.jsx(
                  "div",
                  {
                    tabIndex: 0,
                    role: "button",
                    "aria-label": `Email from ${w.from}: ${w.subject}`,
                    onClick: () => y(w.id),
                    onKeyDown: (b) =>
                      (b.key === "Enter" || b.key === " ") && y(w.id),
                    className: `bg-gray-800 border-2 rounded-lg p-4 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${v(
                      w
                    )}`,
                    style: { outline: "none" },
                    children: s.jsxs("div", {
                      className: "flex items-start space-x-3",
                      children: [
                        s.jsx("div", {
                          className: "mt-1",
                          children: ze.cloneElement(j(w), {
                            "aria-hidden": !0,
                            focusable: !1,
                          }),
                        }),
                        s.jsxs("div", {
                          className: "flex-1",
                          children: [
                            s.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-2",
                              children: [
                                s.jsxs("span", {
                                  className: "text-sm text-gray-400",
                                  children: ["From: ", w.from],
                                }),
                                i.includes(w.id) &&
                                  !a &&
                                  s.jsx("span", {
                                    className:
                                      "text-xs bg-red-500 text-white px-2 py-1 rounded",
                                    children: "PHISHING?",
                                  }),
                              ],
                            }),
                            s.jsx("h3", {
                              className:
                                "text-lg font-semibold text-white mb-2",
                              children: w.subject,
                            }),
                            s.jsx("p", {
                              className: "text-gray-300 text-sm",
                              children: w.content,
                            }),
                            a &&
                              w.isPhishing &&
                              s.jsxs("div", {
                                className:
                                  "mt-3 p-3 bg-yellow-500/20 border border-yellow-400 rounded",
                                children: [
                                  s.jsx("h4", {
                                    className:
                                      "text-yellow-400 font-semibold mb-1",
                                    children: "Phishing Indicators:",
                                  }),
                                  s.jsx("ul", {
                                    className: "text-sm text-yellow-200",
                                    children: w.indicators.map((b, m) =>
                                      s.jsxs("li", { children: ["• ", b] }, m)
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      ],
                    }),
                  },
                  w.id
                )
              ),
            }),
            a
              ? s.jsxs("div", {
                  className:
                    "text-center bg-gray-800 border border-green-400 rounded-lg p-6",
                  children: [
                    s.jsx("h3", {
                      className: "text-xl font-bold text-white mb-2",
                      children: "Level Complete!",
                    }),
                    s.jsxs("p", {
                      className: "text-green-400 text-lg mb-4",
                      children: ["Score: ", Math.round(c), "%"],
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-300",
                      children: s.jsx("p", {
                        children:
                          "💡 Remember: Always verify sender addresses, avoid clicking suspicious links, and be wary of urgent requests for personal information.",
                      }),
                    }),
                  ],
                })
              : s.jsx("div", {
                  className: "text-center",
                  children: s.jsxs("button", {
                    onClick: g,
                    disabled: i.length === 0,
                    className:
                      "bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                    children: ["Submit Answers (", i.length, " selected)"],
                  }),
                }),
          ],
        }),
      ],
    });
  },
  Cp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(""),
      [i, l] = N.useState(!1),
      [a, o] = N.useState(0),
      [c, d] = N.useState([]);
    N.useState(1);
    const [h, y] = N.useState(0),
      [g, j] = N.useState(!1),
      v = {
        1: ["123456", "password", "Password123!"],
        2: ["admin", "qwerty123", "MyP@ssw0rd!"],
        3: ["P@ssw0rd", "SecureP@ss123", "MyUltraSecure!P@ssw0rd2024"],
      },
      w = (p) => {
        let x = 0;
        const S = [];
        return (
          p.length >= 8
            ? (x += 20)
            : S.push("Password should be at least 8 characters long"),
          p.length >= 12 && (x += 10),
          /[a-z]/.test(p) ? (x += 15) : S.push("Add lowercase letters"),
          /[A-Z]/.test(p) ? (x += 15) : S.push("Add uppercase letters"),
          /\d/.test(p) ? (x += 15) : S.push("Add numbers"),
          /[!@#$%^&*(),.?":{}|<>]/.test(p)
            ? (x += 15)
            : S.push("Add special characters"),
          /(.)\1{2,}/.test(p)
            ? S.push("Avoid repeating characters")
            : (x += 10),
          { score: x, feedback: S }
        );
      };
    N.useEffect(() => {
      if (n) {
        const p = w(n);
        o(p.score), d(p.feedback);
      } else o(0), d([]);
    }, [n]);
    const b = (p) =>
        p < 30
          ? "bg-red-500"
          : p < 60
          ? "bg-yellow-500"
          : p < 80
          ? "bg-blue-500"
          : "bg-green-500",
      m = (p) =>
        p < 30 ? "Weak" : p < 60 ? "Fair" : p < 80 ? "Good" : "Strong",
      u = () => {
        let p = 0;
        e === 1
          ? a >= 80
            ? (p = 100)
            : a >= 60
            ? (p = 75)
            : a >= 40
            ? (p = 50)
            : (p = 25)
          : e === 2
          ? ["123456", "password", "admin", "qwerty"].includes(n.toLowerCase())
            ? (p = 100)
            : a < 50
            ? (p = 75)
            : (p = 50)
          : e === 3 &&
            (a >= 90
              ? (p = 100)
              : a >= 80
              ? (p = 80)
              : a >= 70
              ? (p = 60)
              : (p = 40)),
          y(p),
          j(!0),
          setTimeout(() => {
            t(e, p);
          }, 3e3);
      },
      f = (p) => {
        r(p);
      };
    return g
      ? s.jsx("div", {
          className: "max-w-2xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(qt, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Level Complete!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", h, "%"],
              }),
              s.jsxs("div", {
                className:
                  "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-blue-400 font-semibold mb-2",
                    children: "💡 Password Security Tips:",
                  }),
                  s.jsxs("ul", {
                    className: "text-sm text-blue-200 space-y-1",
                    children: [
                      s.jsx("li", {
                        children:
                          "• Use a mix of uppercase, lowercase, numbers, and symbols",
                      }),
                      s.jsx("li", {
                        children:
                          "• Make passwords at least 12 characters long",
                      }),
                      s.jsx("li", {
                        children:
                          "• Avoid common words and personal information",
                      }),
                      s.jsx("li", {
                        children: "• Use unique passwords for each account",
                      }),
                      s.jsx("li", {
                        children: "• Consider using a password manager",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : s.jsxs("div", {
          className: "max-w-2xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-8",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: ["Password Challenge - Level ", e],
                }),
                s.jsxs("p", {
                  className: "text-gray-400",
                  children: [
                    e === 1 &&
                      "Test different passwords and learn about strength",
                    e === 2 &&
                      "Try to identify weak passwords that are easy to crack",
                    e === 3 && "Create the strongest password you can",
                  ],
                }),
              ],
            }),
            e === 2 &&
              s.jsxs("div", {
                className: "mb-6",
                children: [
                  s.jsx("h3", {
                    className: "text-lg font-semibold text-white mb-3",
                    children: "Test these passwords:",
                  }),
                  s.jsx("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-3",
                    children: v[e].map((p, x) =>
                      s.jsx(
                        "button",
                        {
                          onClick: () => f(p),
                          className:
                            "bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors",
                          children: p,
                        },
                        x
                      )
                    ),
                  }),
                ],
              }),
            s.jsxs("div", {
              className:
                "bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",
              children: [
                s.jsxs("div", {
                  className: "mb-4",
                  children: [
                    s.jsx("label", {
                      className: "block text-white font-semibold mb-2",
                      children:
                        e === 3
                          ? "Create your password:"
                          : "Enter password to test:",
                    }),
                    s.jsxs("div", {
                      className: "relative",
                      children: [
                        s.jsx("input", {
                          type: i ? "text" : "password",
                          value: n,
                          onChange: (p) => r(p.target.value),
                          className:
                            "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white pr-12 focus:border-blue-400 focus:outline-none",
                          placeholder: "Enter password...",
                        }),
                        s.jsx("button", {
                          onClick: () => l(!i),
                          className:
                            "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white",
                          children: i
                            ? s.jsx(Ku, { className: "w-5 h-5" })
                            : s.jsx(pa, { className: "w-5 h-5" }),
                        }),
                      ],
                    }),
                  ],
                }),
                n &&
                  s.jsxs(s.Fragment, {
                    children: [
                      s.jsxs("div", {
                        className: "mb-4",
                        children: [
                          s.jsxs("div", {
                            className: "flex items-center justify-between mb-2",
                            children: [
                              s.jsx("span", {
                                className: "text-white font-semibold",
                                children: "Password Strength",
                              }),
                              s.jsxs("span", {
                                className: `text-sm font-bold ${
                                  a < 30
                                    ? "text-red-400"
                                    : a < 60
                                    ? "text-yellow-400"
                                    : a < 80
                                    ? "text-blue-400"
                                    : "text-green-400"
                                }`,
                                children: [m(a), " (", a, "%)"],
                              }),
                            ],
                          }),
                          s.jsx("div", {
                            className: "w-full bg-gray-700 rounded-full h-3",
                            children: s.jsx("div", {
                              className: `h-3 rounded-full transition-all duration-500 ${b(
                                a
                              )}`,
                              style: { width: `${a}%` },
                            }),
                          }),
                        ],
                      }),
                      c.length > 0 &&
                        s.jsx("div", {
                          className:
                            "bg-yellow-500/20 border border-yellow-400 rounded-lg p-4 mb-4",
                          children: s.jsxs("div", {
                            className: "flex items-start space-x-2",
                            children: [
                              s.jsx(xe, {
                                className: "w-5 h-5 text-yellow-400 mt-0.5",
                              }),
                              s.jsxs("div", {
                                children: [
                                  s.jsx("h4", {
                                    className:
                                      "text-yellow-400 font-semibold mb-1",
                                    children: "Suggestions:",
                                  }),
                                  s.jsx("ul", {
                                    className: "text-sm text-yellow-200",
                                    children: c.map((p, x) =>
                                      s.jsxs("li", { children: ["• ", p] }, x)
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                    ],
                  }),
                s.jsx("button", {
                  onClick: u,
                  disabled: !n,
                  className:
                    "w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                  children: e === 2 ? "Check if Weak" : "Submit Password",
                }),
              ],
            }),
            s.jsx("div", {
              className: "text-center text-sm text-gray-400",
              children: s.jsx("p", {
                children:
                  "🔒 Your password is not stored or transmitted anywhere",
              }),
            }),
          ],
        });
  },
  Tp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState([]),
      [a, o] = N.useState(0),
      [c, d] = N.useState(60),
      [h, y] = N.useState(!1),
      [g, j] = N.useState(0),
      v = () => {
        const f = {
          1: [
            {
              source: "192.168.1.100",
              destination: "10.0.0.1",
              port: 80,
              protocol: "HTTP",
              isMalicious: !1,
              type: "Web Traffic",
            },
            {
              source: "203.0.113.0",
              destination: "10.0.0.1",
              port: 22,
              protocol: "SSH",
              isMalicious: !0,
              type: "Unauthorized SSH",
            },
            {
              source: "198.51.100.1",
              destination: "10.0.0.1",
              port: 1433,
              protocol: "SQL",
              isMalicious: !0,
              type: "SQL Injection",
            },
            {
              source: "192.168.1.50",
              destination: "10.0.0.1",
              port: 443,
              protocol: "HTTPS",
              isMalicious: !1,
              type: "Secure Web",
            },
          ],
          2: [
            {
              source: "192.168.1.100",
              destination: "10.0.0.1",
              port: 80,
              protocol: "HTTP",
              isMalicious: !1,
              type: "Web Traffic",
            },
            {
              source: "0.0.0.0",
              destination: "10.0.0.1",
              port: 135,
              protocol: "RPC",
              isMalicious: !0,
              type: "Port Scan",
            },
            {
              source: "203.0.113.0",
              destination: "255.255.255.255",
              port: 137,
              protocol: "NetBIOS",
              isMalicious: !0,
              type: "Broadcast Attack",
            },
            {
              source: "192.168.1.200",
              destination: "10.0.0.1",
              port: 25,
              protocol: "SMTP",
              isMalicious: !1,
              type: "Email",
            },
            {
              source: "198.51.100.1",
              destination: "10.0.0.1",
              port: 3389,
              protocol: "RDP",
              isMalicious: !0,
              type: "Brute Force RDP",
            },
          ],
          3: [
            {
              source: "192.168.1.100",
              destination: "10.0.0.1",
              port: 80,
              protocol: "HTTP",
              isMalicious: !1,
              type: "Web Traffic",
            },
            {
              source: "203.0.113.0",
              destination: "10.0.0.1",
              port: 0,
              protocol: "ICMP",
              isMalicious: !0,
              type: "Zero-day Exploit",
            },
            {
              source: "198.51.100.1",
              destination: "10.0.0.1",
              port: 8080,
              protocol: "HTTP",
              isMalicious: !0,
              type: "Backdoor Communication",
            },
            {
              source: "192.168.1.50",
              destination: "10.0.0.1",
              port: 443,
              protocol: "HTTPS",
              isMalicious: !1,
              type: "Secure Web",
            },
            {
              source: "10.0.0.100",
              destination: "203.0.113.0",
              port: 53,
              protocol: "DNS",
              isMalicious: !0,
              type: "DNS Tunneling",
            },
            {
              source: "192.168.1.200",
              destination: "10.0.0.1",
              port: 993,
              protocol: "IMAPS",
              isMalicious: !1,
              type: "Secure Email",
            },
          ],
        };
        return (f[e] || f[1]).map((x, S) => ({ ...x, id: S + 1 }));
      };
    N.useEffect(() => {
      r(v());
    }, [e]),
      N.useEffect(() => {
        if (c > 0 && !h) {
          const f = setTimeout(() => d(c - 1), 1e3);
          return () => clearTimeout(f);
        } else c === 0 && b();
      }, [c, h]);
    const w = (f) => {
        h || l((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]));
      },
      b = () => {
        const f = n.filter((T) => T.isMalicious),
          p = i.filter((T) => {
            var A;
            return (A = n.find((I) => I.id === T)) == null
              ? void 0
              : A.isMalicious;
          }),
          x = i.filter((T) => {
            var A;
            return !((A = n.find((I) => I.id === T)) != null && A.isMalicious);
          }),
          S = f.filter((T) => !i.includes(T.id)),
          C = f.length > 0 ? (p.length / f.length) * 100 : 100,
          k = (x.length + S.length) * 10,
          P = Math.max(0, C - k);
        o(P),
          y(!0),
          j(n.length),
          setTimeout(() => {
            t(e, P);
          }, 3e3);
      },
      m = (f) => {
        const p = i.includes(f.id);
        return h
          ? f.isMalicious && p
            ? "border-green-400 bg-green-400/20"
            : (f.isMalicious && !p) || (!f.isMalicious && p)
            ? "border-red-400 bg-red-400/20"
            : "border-green-400 bg-green-400/20"
          : p
          ? "border-red-400 bg-red-400/20"
          : "border-gray-600 hover:border-blue-400";
      },
      u = (f) => {
        if (!h)
          return i.includes(f.id)
            ? s.jsx(Qt, { className: "w-5 h-5 text-red-400" })
            : s.jsx(qt, { className: "w-5 h-5 text-gray-400" });
        const p = i.includes(f.id);
        return f.isMalicious && p
          ? s.jsx(ee, { className: "w-5 h-5 text-green-400" })
          : f.isMalicious && !p
          ? s.jsx(xe, { className: "w-5 h-5 text-red-400" })
          : !f.isMalicious && p
          ? s.jsx(Qt, { className: "w-5 h-5 text-red-400" })
          : s.jsx(ee, { className: "w-5 h-5 text-green-400" });
      };
    return h
      ? s.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(qt, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Firewall Defense Complete!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", Math.round(a), "%"],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-3 gap-4 mb-6",
                children: [
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-blue-400",
                        children: g,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Packets Analyzed",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-green-400",
                        children: n.filter(
                          (f) => f.isMalicious && i.includes(f.id)
                        ).length,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Threats Blocked",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-red-400",
                        children: n.filter(
                          (f) => f.isMalicious && !i.includes(f.id)
                        ).length,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Threats Missed",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-blue-400 font-semibold mb-2",
                    children: "🛡️ Firewall Security Tips:",
                  }),
                  s.jsxs("ul", {
                    className: "text-sm text-blue-200 space-y-1",
                    children: [
                      s.jsx("li", {
                        children: "• Block unnecessary ports and protocols",
                      }),
                      s.jsx("li", {
                        children: "• Monitor for suspicious IP addresses",
                      }),
                      s.jsx("li", {
                        children: "• Use whitelist and blacklist rules",
                      }),
                      s.jsx("li", {
                        children: "• Keep firewall rules updated",
                      }),
                      s.jsx("li", {
                        children: "• Log and analyze blocked attempts",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : s.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white",
                  children: ["Firewall Defender - Level ", e],
                }),
                s.jsxs("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    s.jsxs("div", {
                      className: "text-blue-400",
                      children: ["Time: ", c, "s"],
                    }),
                    s.jsxs("div", {
                      className: "text-green-400",
                      children: ["Blocked: ", i.length],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("p", {
              className: "text-gray-400 text-center mb-6",
              children:
                "Click on malicious packets to block them. Legitimate traffic should be allowed through.",
            }),
            s.jsx("div", {
              className: "grid gap-3",
              children: n.map((f) =>
                s.jsx(
                  "div",
                  {
                    tabIndex: 0,
                    role: "button",
                    "aria-label": `Packet from ${f.source} to ${f.destination}, port ${f.port}, protocol ${f.protocol}`,
                    onClick: () => w(f.id),
                    onKeyDown: (p) =>
                      (p.key === "Enter" || p.key === " ") && w(f.id),
                    className: `bg-gray-800 border-2 rounded-lg p-4 cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${m(
                      f
                    )}`,
                    style: { outline: "none" },
                    children: s.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            ze.cloneElement(u(f), {
                              "aria-hidden": !0,
                              focusable: !1,
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("div", {
                                  className: "text-white font-semibold",
                                  children: f.type,
                                }),
                                s.jsxs("div", {
                                  className: "text-sm text-gray-400",
                                  children: [f.source, " → ", f.destination],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "flex items-center space-x-6 text-sm",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsx("span", {
                                  className: "text-gray-400",
                                  children: "Port:",
                                }),
                                s.jsx("span", {
                                  className: "text-white ml-1",
                                  children: f.port,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("span", {
                                  className: "text-gray-400",
                                  children: "Protocol:",
                                }),
                                s.jsx("span", {
                                  className: "text-white ml-1",
                                  children: f.protocol,
                                }),
                              ],
                            }),
                            i.includes(f.id) &&
                              !h &&
                              s.jsx("span", {
                                className:
                                  "bg-red-500 text-white px-2 py-1 rounded text-xs",
                                children: "BLOCKED",
                              }),
                            h &&
                              f.isMalicious &&
                              s.jsx("span", {
                                className:
                                  "bg-orange-500 text-white px-2 py-1 rounded text-xs",
                                children: "MALICIOUS",
                              }),
                          ],
                        }),
                      ],
                    }),
                  },
                  f.id
                )
              ),
            }),
            s.jsx("div", {
              className: "text-center mt-6",
              children: s.jsx("button", {
                onClick: b,
                className:
                  "bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors",
                children: "Finish Defense",
              }),
            }),
          ],
        });
  },
  Ep = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState(!1),
      [a, o] = N.useState(0),
      d = {
        1: {
          title: "Login Page Security",
          code: `<form action="http://example.com/login" method="GET">
  <input type="text" name="username" placeholder="Username">
  <input type="password" name="password" placeholder="Password">
  <input type="submit" value="Login">
</form>

<script>
  function login() {
    var user = document.getElementById('username').value;
    var pass = document.getElementById('password').value;
    window.location = 'login.php?user=' + user + '&pass=' + pass;
  }
<\/script>`,
          type: "Web Security",
          description: "Identify security issues in this login form",
          vulnerabilities: [
            "HTTP instead of HTTPS",
            "GET method for passwords",
            "Password in URL",
          ],
          fix: "Use HTTPS, POST method, and proper form handling",
        },
        2: {
          title: "SQL Query Function",
          code: `function searchUsers($username) {
    $connection = mysql_connect("localhost", "root", "");
    $query = "SELECT * FROM users WHERE username = '" . $username . "'";
    $result = mysql_query($query, $connection);
    return $result;
}

// Usage
$username = $_GET['search'];
$users = searchUsers($username);`,
          type: "Database Security",
          description: "Find SQL injection vulnerabilities in this code",
          vulnerabilities: [
            "SQL Injection",
            "No input sanitization",
            "Deprecated mysql functions",
          ],
          fix: "Use prepared statements and input validation",
        },
        3: {
          title: "Comment System",
          code: `<div id="comments">
  <?php
    foreach($comments as $comment) {
      echo "<div class='comment'>";
      echo "<h4>" . $comment['author'] . "</h4>";
      echo "<p>" . $comment['text'] . "</p>";
      echo "</div>";
    }
  ?>
</div>

<form method="POST">
  <input type="text" name="author" placeholder="Your name">
  <textarea name="comment" placeholder="Your comment"></textarea>
  <input type="submit" value="Post Comment">
</form>`,
          type: "XSS Vulnerability",
          description: "Identify Cross-Site Scripting (XSS) vulnerabilities",
          vulnerabilities: [
            "No output encoding",
            "XSS in comments",
            "No input validation",
          ],
          fix: "Encode output and validate/sanitize input",
        },
      }[e],
      h = (v) => {
        i || r((w) => (w.includes(v) ? w.filter((b) => b !== v) : [...w, v]));
      },
      y = () => {
        const v = d.vulnerabilities,
          w = n.filter((x) => v.includes(x)),
          b = n.filter((x) => !v.includes(x)),
          m = v.filter((x) => !n.includes(x)),
          u = v.length > 0 ? (w.length / v.length) * 100 : 100,
          f = (b.length + m.length) * 15,
          p = Math.max(0, u - f);
        o(p),
          l(!0),
          setTimeout(() => {
            t(e, p);
          }, 3e3);
      },
      g = [
        "HTTP instead of HTTPS",
        "GET method for passwords",
        "Password in URL",
        "SQL Injection",
        "No input sanitization",
        "Deprecated mysql functions",
        "No output encoding",
        "XSS in comments",
        "No input validation",
        "Weak encryption",
        "Missing CSRF protection",
        "Information disclosure",
      ],
      j = (v) =>
        v.includes("Web")
          ? s.jsx(Uf, { className: "w-5 h-5" })
          : v.includes("Database")
          ? s.jsx(fa, { className: "w-5 h-5" })
          : s.jsx($f, { className: "w-5 h-5" });
    return i
      ? s.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(ed, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Vulnerability Analysis Complete!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", Math.round(a), "%"],
              }),
              s.jsxs("div", {
                className: "text-left bg-gray-700 rounded-lg p-6 mb-6",
                children: [
                  s.jsx("h4", {
                    className: "text-white font-semibold mb-3",
                    children: "Correct Vulnerabilities:",
                  }),
                  s.jsx("ul", {
                    className: "space-y-2",
                    children: d.vulnerabilities.map((v, w) =>
                      s.jsxs(
                        "li",
                        {
                          className: "flex items-center space-x-2",
                          children: [
                            s.jsx(ee, { className: "w-4 h-4 text-green-400" }),
                            s.jsx("span", {
                              className: "text-gray-300",
                              children: v,
                            }),
                            n.includes(v)
                              ? s.jsx("span", {
                                  className: "text-green-400 text-sm",
                                  children: "(Found ✓)",
                                })
                              : s.jsx("span", {
                                  className: "text-red-400 text-sm",
                                  children: "(Missed ✗)",
                                }),
                          ],
                        },
                        w
                      )
                    ),
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-blue-400 font-semibold mb-2",
                    children: "💡 How to Fix:",
                  }),
                  s.jsx("p", {
                    className: "text-blue-200 text-sm",
                    children: d.fix,
                  }),
                ],
              }),
            ],
          }),
        })
      : s.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-6",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: ["Vulnerability Spotter - Level ", e],
                }),
                s.jsx("p", {
                  className: "text-gray-400",
                  children:
                    "Analyze the code below and identify security vulnerabilities",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-800 border border-gray-700 rounded-lg",
                  children: [
                    s.jsxs("div", {
                      className:
                        "flex items-center space-x-2 bg-gray-900 px-4 py-3 border-b border-gray-700",
                      children: [
                        j(d.type),
                        s.jsx("h3", {
                          className: "text-white font-semibold",
                          children: d.title,
                        }),
                        s.jsx("span", {
                          className:
                            "text-xs bg-blue-500 text-white px-2 py-1 rounded",
                          children: d.type,
                        }),
                      ],
                    }),
                    s.jsx("pre", {
                      className: "text-sm text-gray-300 p-4 overflow-x-auto",
                      children: s.jsx("code", { children: d.code }),
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-gray-800 border border-gray-700 rounded-lg p-6",
                  children: [
                    s.jsx("h3", {
                      className: "text-white font-semibold mb-4",
                      children: "Select vulnerabilities you found:",
                    }),
                    s.jsx("div", {
                      className: "space-y-2 mb-6",
                      children: g.map((v) =>
                        s.jsx(
                          "button",
                          {
                            onClick: () => h(v),
                            className: `w-full text-left p-3 rounded-lg border transition-all ${
                              n.includes(v)
                                ? "border-red-400 bg-red-400/20 text-red-300"
                                : "border-gray-600 bg-gray-700 text-gray-300 hover:border-blue-400"
                            }`,
                            children: s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                n.includes(v)
                                  ? s.jsx(xe, {
                                      className: "w-4 h-4 text-red-400",
                                    })
                                  : s.jsx("div", {
                                      className:
                                        "w-4 h-4 border border-gray-500 rounded",
                                    }),
                                s.jsx("span", { children: v }),
                              ],
                            }),
                          },
                          v
                        )
                      ),
                    }),
                    s.jsxs("button", {
                      onClick: y,
                      disabled: n.length === 0,
                      className:
                        "w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                      children: ["Submit Analysis (", n.length, " selected)"],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "mt-6 bg-yellow-500/20 border border-yellow-400 rounded-lg p-4",
              children: s.jsxs("p", {
                className: "text-yellow-200 text-sm",
                children: [
                  s.jsx("strong", { children: "Tip:" }),
                  " ",
                  d.description,
                ],
              }),
            }),
          ],
        });
  },
  Pp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(0),
      [i, l] = N.useState([]),
      [a, o] = N.useState(!1),
      [c, d] = N.useState(100),
      y = {
        1: {
          title: "The Password Vault",
          description:
            "You've found a locked computer. Solve the clues to find the password.",
          steps: [
            {
              clue: "The password is the name of the first computer virus (uppercase) + the year it was created.",
              answer: "CREEPER1971",
              hint: "Think about early computer history... it was named after a character from Scooby-Doo!",
              explanation:
                'The first computer virus was called "Creeper" and was created in 1971.',
            },
            {
              clue: "What 3-letter acronym protects data by making it unreadable? + The number of bits in AES-256.",
              answer: "AES256",
              hint: "Advanced Encryption Standard + the key length number.",
              explanation:
                "AES (Advanced Encryption Standard) with 256-bit key length.",
            },
          ],
        },
        2: {
          title: "The Data Breach Investigation",
          description:
            "Investigate this simulated breach and find the exposed credentials.",
          steps: [
            {
              clue: 'In the log file: "User: admin, Pass: $2y$10$abcd1234... Time: 2024-01-15". What hashing algorithm was used?',
              answer: "BCRYPT",
              hint: "Look at the hash format - it starts with $2y$...",
              explanation:
                "Bcrypt hashes start with $2y$ or $2b$ followed by the cost parameter.",
            },
            {
              clue: "The breach happened on port 22. What service runs on this port by default?",
              answer: "SSH",
              hint: "This port is commonly used for secure remote access.",
              explanation:
                "Port 22 is the default port for SSH (Secure Shell) service.",
            },
            {
              clue: "The attacker used IP 203.0.113.0. What type of IP address is this?",
              answer: "TEST",
              hint: "This IP range is reserved for a specific purpose in networking.",
              explanation:
                "203.0.113.0/24 is a TEST-NET IP range reserved for documentation and examples.",
            },
          ],
        },
        3: {
          title: "Ransomware Defusal",
          description:
            "A ransomware has encrypted the system. Use cybersecurity knowledge to defuse it.",
          steps: [
            {
              clue: "The ransomware demands payment in cryptocurrency. What currency do most ransomware attacks prefer?",
              answer: "BITCOIN",
              hint: 'It starts with "B" and is the most well-known cryptocurrency.',
              explanation:
                "Bitcoin is preferred due to its perceived anonymity and wide acceptance.",
            },
            {
              clue: 'The file extension ".locked" was added to all files. What encryption algorithm uses 128, 192, or 256-bit keys?',
              answer: "AES",
              hint: "Advanced Encryption Standard - very commonly used.",
              explanation:
                "AES (Advanced Encryption Standard) supports 128, 192, and 256-bit key lengths.",
            },
            {
              clue: 'To prevent this in the future, what backup strategy follows the "3-2-1" rule?',
              answer: "3COPIES2MEDIA1OFFSITE",
              hint: "3 copies of data, 2 different media types, 1 offsite backup.",
              explanation:
                "The 3-2-1 backup rule: 3 copies of important data, on 2 different media, with 1 copy offsite.",
            },
            {
              clue: "What security measure could have prevented the initial infection if users couldn't install software?",
              answer: "UAC",
              hint: "User Account Control - prevents unauthorized changes.",
              explanation:
                "UAC (User Account Control) can prevent malware from making system changes without permission.",
            },
          ],
        },
      }[e],
      g = y == null ? void 0 : y.steps[n],
      j = (b) => {
        const m = b.toUpperCase() === g.answer;
        m || d(Math.max(0, c - 20)), a && d(Math.max(0, c - 10));
        const u = [...i, b];
        l(u),
          m &&
            (n < y.steps.length - 1
              ? setTimeout(() => {
                  r(n + 1), o(!1);
                }, 2e3)
              : setTimeout(() => {
                  t(e, c);
                }, 2e3));
      },
      v = () => {
        var b;
        return i.length <= n
          ? null
          : ((b = i[n]) == null ? void 0 : b.toUpperCase()) === g.answer;
      };
    if (!y)
      return s.jsxs("div", {
        className: "text-center text-red-400",
        children: [
          s.jsx("h3", {
            className: "text-xl font-bold mb-4",
            children: "Escape Room Not Available",
          }),
          s.jsx("p", { children: "This level is coming soon!" }),
        ],
      });
    const w = v();
    return s.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        s.jsxs("div", {
          className: "text-center mb-8",
          children: [
            s.jsx("h2", {
              className: "text-2xl font-bold text-white mb-2",
              children: y.title,
            }),
            s.jsx("p", { className: "text-gray-400", children: y.description }),
          ],
        }),
        s.jsxs("div", {
          className: "mb-8",
          children: [
            s.jsx("div", {
              className: "flex items-center justify-center space-x-4 mb-4",
              children: y.steps.map((b, m) =>
                s.jsx(
                  "div",
                  {
                    className: `w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                      m < n
                        ? "border-green-400 bg-green-400"
                        : m === n
                        ? "border-blue-400 bg-blue-400"
                        : "border-gray-600 bg-gray-700"
                    }`,
                    tabIndex: 0,
                    "aria-label": `Step ${m + 1} ${
                      m < n ? "completed" : m === n ? "current" : "upcoming"
                    }`,
                    children:
                      m < n
                        ? s.jsx(ee, {
                            className: "w-4 h-4 text-white",
                            "aria-hidden": "true",
                            focusable: "false",
                          })
                        : m === n
                        ? s.jsx(Ts, {
                            className: "w-4 h-4 text-white",
                            "aria-hidden": "true",
                            focusable: "false",
                          })
                        : s.jsx(Xu, {
                            className: "w-4 h-4 text-gray-400",
                            "aria-hidden": "true",
                            focusable: "false",
                          }),
                  },
                  m
                )
              ),
            }),
            s.jsx("div", {
              className: "w-full bg-gray-700 rounded-full h-2",
              children: s.jsx("div", {
                className:
                  "bg-blue-400 h-2 rounded-full transition-all duration-500",
                style: { width: `${((n + 1) / y.steps.length) * 100}%` },
              }),
            }),
          ],
        }),
        s.jsxs("div", {
          className: "bg-gray-800 border border-gray-700 rounded-lg p-8 mb-6",
          children: [
            s.jsxs("div", {
              className: "flex items-start space-x-4 mb-6",
              children: [
                s.jsx(Ts, {
                  className: "w-6 h-6 text-blue-400 mt-1",
                  "aria-hidden": "true",
                  focusable: "false",
                }),
                s.jsxs("div", {
                  children: [
                    s.jsxs("h3", {
                      className: "text-xl font-semibold text-white mb-3",
                      children: ["Step ", n + 1, ": Solve the Clue"],
                    }),
                    s.jsx("p", {
                      className: "text-gray-300 text-lg",
                      children: g == null ? void 0 : g.clue,
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "mb-4",
              children: s.jsx("input", {
                type: "text",
                placeholder: "Enter your answer...",
                className:
                  "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none",
                onKeyPress: (b) => {
                  b.key === "Enter" &&
                    (j(b.currentTarget.value), (b.currentTarget.value = ""));
                },
                disabled: w !== null,
              }),
            }),
            !a &&
              w === null &&
              s.jsx("button", {
                onClick: () => o(!0),
                className:
                  "bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-400",
                tabIndex: 0,
                "aria-label": "Show Hint",
                children: "Show Hint (-10 points)",
              }),
            a &&
              s.jsx("div", {
                className:
                  "bg-yellow-500/20 border border-yellow-400 rounded-lg p-4 mb-4",
                children: s.jsxs("div", {
                  className: "flex items-start space-x-2",
                  children: [
                    s.jsx(xe, {
                      className: "w-5 h-5 text-yellow-400 mt-0.5",
                      "aria-hidden": "true",
                      focusable: "false",
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h4", {
                          className: "text-yellow-400 font-semibold mb-1",
                          children: "Hint:",
                        }),
                        s.jsx("p", {
                          className: "text-yellow-200 text-sm",
                          children: g == null ? void 0 : g.hint,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            w === !0 &&
              s.jsx("div", {
                className:
                  "bg-green-500/20 border border-green-400 rounded-lg p-4 mb-4",
                children: s.jsxs("div", {
                  className: "flex items-start space-x-2",
                  children: [
                    s.jsx(ee, {
                      className: "w-5 h-5 text-green-400 mt-0.5",
                      "aria-hidden": "true",
                      focusable: "false",
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h4", {
                          className: "text-green-400 font-semibold mb-1",
                          children: "Correct!",
                        }),
                        s.jsx("p", {
                          className: "text-green-200 text-sm",
                          children: g == null ? void 0 : g.explanation,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            w === !1 &&
              s.jsx("div", {
                className:
                  "bg-red-500/20 border border-red-400 rounded-lg p-4 mb-4",
                children: s.jsxs("div", {
                  className: "flex items-start space-x-2",
                  children: [
                    s.jsx(xe, {
                      className: "w-5 h-5 text-red-400 mt-0.5",
                      "aria-hidden": "true",
                      focusable: "false",
                    }),
                    s.jsxs("div", {
                      children: [
                        s.jsx("h4", {
                          className: "text-red-400 font-semibold mb-1",
                          children: "Incorrect!",
                        }),
                        s.jsxs("p", {
                          className: "text-red-200 text-sm",
                          children: [
                            "Try again. The correct answer was: ",
                            g == null ? void 0 : g.answer,
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-red-200 text-sm mt-2",
                          children: g == null ? void 0 : g.explanation,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
          ],
        }),
        s.jsx("div", {
          className: "text-center",
          children: s.jsxs("div", {
            className:
              "inline-block bg-gray-800 border border-gray-600 rounded-lg px-6 py-3",
            children: [
              s.jsx("span", {
                className: "text-gray-400",
                children: "Current Score: ",
              }),
              s.jsxs("span", {
                className: "text-green-400 font-bold",
                children: [c, "/100"],
              }),
            ],
          }),
        }),
      ],
    });
  },
  Mp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(0),
      [i, l] = N.useState([]),
      [a, o] = N.useState(30),
      [c, d] = N.useState(!1),
      [h, y] = N.useState(0),
      g = {
        1: [
          { statement: "Phishing attacks only come through email", answer: !1 },
          {
            statement: "A strong password should be at least 8 characters long",
            answer: !0,
          },
          {
            statement: "Public WiFi is always safe to use for banking",
            answer: !1,
          },
          {
            statement:
              "Antivirus software can protect against all cyber threats",
            answer: !1,
          },
          {
            statement:
              "Two-factor authentication adds an extra layer of security",
            answer: !0,
          },
          {
            statement: "It's safe to click on links in suspicious emails",
            answer: !1,
          },
          {
            statement:
              "Regular software updates help protect against vulnerabilities",
            answer: !0,
          },
          {
            statement:
              "Social engineering attacks target technology, not people",
            answer: !1,
          },
        ],
        2: [
          {
            statement:
              "The Equifax breach in 2017 affected over 140 million people",
            answer: !0,
          },
          { statement: "Ransomware attacks decreased in 2023", answer: !1 },
          {
            statement:
              "The WannaCry attack spread through a Windows vulnerability",
            answer: !0,
          },
          {
            statement: "Most data breaches are caused by external hackers",
            answer: !1,
          },
          {
            statement:
              "The average cost of a data breach in 2023 was over $4 million",
            answer: !0,
          },
          {
            statement: "Cybercriminals never target small businesses",
            answer: !1,
          },
          {
            statement:
              "The NotPetya attack was classified as the most destructive cyberattack ever",
            answer: !0,
          },
          {
            statement: "Most organizations detect breaches within 24 hours",
            answer: !1,
          },
        ],
        3: [
          {
            statement:
              "Zero-day exploits are vulnerabilities with no available patches",
            answer: !0,
          },
          {
            statement: "APT stands for Advanced Persistent Threat",
            answer: !0,
          },
          {
            statement:
              "SQL injection attacks can only steal data, not modify it",
            answer: !1,
          },
          {
            statement: "A honeypot is designed to attract and trap attackers",
            answer: !0,
          },
          {
            statement: "Rainbow tables are used to crack hashed passwords",
            answer: !0,
          },
          {
            statement:
              "Cross-site scripting (XSS) only affects the attacker's browser",
            answer: !1,
          },
          {
            statement: "Buffer overflow attacks can lead to code execution",
            answer: !0,
          },
          {
            statement: "A VPN encrypts all internet traffic on your device",
            answer: !1,
          },
        ],
      },
      j = g[e] || g[1],
      v = j[n];
    N.useEffect(() => {
      if (e === 3 && a > 0 && !c) {
        const u = setTimeout(() => o(a - 1), 1e3);
        return () => clearTimeout(u);
      } else e === 3 && a === 0 && !c && b();
    }, [a, c, e]);
    const w = (u) => {
        const f = u === v.answer,
          p = [...i, u];
        l(p),
          f && y(h + 1),
          n < j.length - 1 ? (r(n + 1), e === 3 && o(15)) : b();
      },
      b = () => {
        d(!0);
        const u = (h / j.length) * 100;
        setTimeout(() => {
          t(e, u);
        }, 3e3);
      },
      m = (u) => {
        if (u < i.length) {
          const f = i[u],
            p = j[u].answer;
          return f === p
            ? s.jsx(ee, { className: "w-5 h-5 text-green-400" })
            : s.jsx(Qt, { className: "w-5 h-5 text-red-400" });
        }
        return u === n
          ? s.jsx(Cn, { className: "w-5 h-5 text-blue-400" })
          : s.jsx("div", {
              className: "w-5 h-5 border border-gray-500 rounded-full",
            });
      };
    if (c) {
      const u = (h / j.length) * 100;
      return s.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: s.jsxs("div", {
          className: "bg-gray-800 border border-green-400 rounded-lg p-8",
          children: [
            s.jsx(Cn, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
            s.jsx("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Cyber Facts Complete!",
            }),
            s.jsxs("p", {
              className: "text-green-400 text-xl mb-6",
              children: ["Score: ", Math.round(u), "%"],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-2 gap-4 mb-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-3xl font-bold text-green-400",
                      children: h,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Correct Answers",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-3xl font-bold text-red-400",
                      children: j.length - h,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Incorrect Answers",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "text-left mb-6",
              children: [
                s.jsx("h4", {
                  className: "text-white font-semibold mb-3",
                  children: "Review:",
                }),
                s.jsx("div", {
                  className: "space-y-2",
                  children: j.map((f, p) => {
                    const x = i[p],
                      S = x === f.answer;
                    return s.jsx(
                      "div",
                      {
                        className: `p-3 rounded-lg border ${
                          S
                            ? "border-green-400 bg-green-400/10"
                            : "border-red-400 bg-red-400/10"
                        }`,
                        children: s.jsxs("div", {
                          className: "flex items-start space-x-2",
                          children: [
                            S
                              ? s.jsx(ee, {
                                  className: "w-5 h-5 text-green-400 mt-0.5",
                                })
                              : s.jsx(Qt, {
                                  className: "w-5 h-5 text-red-400 mt-0.5",
                                }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("p", {
                                  className: "text-white text-sm",
                                  children: f.statement,
                                }),
                                s.jsxs("p", {
                                  className: `text-xs ${
                                    S ? "text-green-300" : "text-red-300"
                                  }`,
                                  children: [
                                    "Correct: ",
                                    f.answer ? "True" : "False",
                                    " | Your answer: ",
                                    x ? "True" : "False",
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      p
                    );
                  }),
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
              children: [
                s.jsx("h4", {
                  className: "text-blue-400 font-semibold mb-2",
                  children: "💡 Cybersecurity Tips:",
                }),
                s.jsxs("ul", {
                  className: "text-sm text-blue-200 space-y-1",
                  children: [
                    s.jsx("li", {
                      children:
                        "• Stay updated with the latest cybersecurity news",
                    }),
                    s.jsx("li", {
                      children:
                        "• Regularly review and update your security knowledge",
                    }),
                    s.jsx("li", {
                      children:
                        "• Practice good cyber hygiene in your daily activities",
                    }),
                    s.jsx("li", {
                      children:
                        "• Share security awareness with friends and colleagues",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(st, {
          children: [
            s.jsx("title", { children: "Cyber Facts - CyberShields" }),
            s.jsx("meta", {
              name: "description",
              content:
                "Test your knowledge of cybersecurity facts and myths in this true-or-false game!",
            }),
            s.jsx("meta", {
              property: "og:title",
              content: "Cyber Facts - CyberShields",
            }),
            s.jsx("meta", {
              property: "og:description",
              content:
                "Test your knowledge of cybersecurity facts and myths in this true-or-false game!",
            }),
            s.jsx("meta", { property: "og:type", content: "website" }),
            s.jsx("meta", {
              property: "og:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("meta", {
              property: "og:url",
              content: "https://yourdomain.com/games/cyber-facts",
            }),
            s.jsx("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            s.jsx("meta", {
              name: "twitter:title",
              content: "Cyber Facts - CyberShields",
            }),
            s.jsx("meta", {
              name: "twitter:description",
              content:
                "Test your knowledge of cybersecurity facts and myths in this true-or-false game!",
            }),
            s.jsx("meta", {
              name: "twitter:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("link", {
              rel: "canonical",
              href: "https://yourdomain.com/games/cyber-facts",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white",
                  children: ["Cyber Facts - Level ", e],
                }),
                s.jsxs("div", {
                  className: "flex items-center space-x-4",
                  children: [
                    e === 3 &&
                      s.jsxs("div", {
                        className:
                          "flex items-center space-x-2 text-orange-400",
                        children: [
                          s.jsx(Tt, { className: "w-5 h-5" }),
                          s.jsxs("span", {
                            className: "text-xl font-bold",
                            children: [a, "s"],
                          }),
                        ],
                      }),
                    s.jsxs("div", {
                      className: "text-green-400",
                      children: [n + 1, "/", j.length],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "flex items-center justify-center space-x-2 mb-8",
              children: j.map((u, f) =>
                s.jsx(
                  "div",
                  {
                    className: "flex items-center",
                    children: ze.cloneElement(m(f), {
                      "aria-hidden": !0,
                      focusable: !1,
                    }),
                  },
                  f
                )
              ),
            }),
            s.jsxs("div", {
              className:
                "bg-gray-800 border border-gray-700 rounded-lg p-8 mb-6",
              children: [
                s.jsx("h3", {
                  className:
                    "text-2xl font-semibold text-white mb-8 text-center",
                  children: v == null ? void 0 : v.statement,
                }),
                s.jsxs("div", {
                  className: "flex space-x-6 justify-center",
                  children: [
                    s.jsx("button", {
                      onClick: () => w(!0),
                      className:
                        "bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400",
                      tabIndex: 0,
                      "aria-label": "Answer True",
                      children: "TRUE",
                    }),
                    s.jsx("button", {
                      onClick: () => w(!1),
                      className:
                        "bg-red-500 hover:bg-red-600 text-white text-xl font-bold py-4 px-12 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-400",
                      tabIndex: 0,
                      "aria-label": "Answer False",
                      children: "FALSE",
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "text-center",
              children: s.jsxs("div", {
                className:
                  "inline-block bg-gray-800 border border-gray-600 rounded-lg px-6 py-3",
                children: [
                  s.jsx("span", {
                    className: "text-gray-400",
                    children: "Score: ",
                  }),
                  s.jsxs("span", {
                    className: "text-green-400 font-bold",
                    children: [h, "/", n + 1],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Ap = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(0),
      [i, l] = N.useState([]),
      [a, o] = N.useState(0),
      [c] = N.useState(5),
      [d, h] = N.useState(!1),
      [y, g] = N.useState(0),
      v = {
        1: {
          title: "Find the Admin Panel",
          description:
            "Explore this simulated website to find the hidden admin panel.",
          steps: [
            {
              challenge: "Look for common admin panel URLs",
              solution: "/admin",
              hints: [
                "Try common admin paths",
                "Check /admin, /administrator, /manage",
              ],
              found: !1,
            },
          ],
          targets: ["/admin", "/administrator", "/manage", "/control-panel"],
        },
        2: {
          title: "Test Weak Login",
          description:
            "Try to access the admin panel with common weak credentials.",
          steps: [
            {
              challenge: "Find the admin panel first",
              solution: "/admin",
              hints: ["Look for admin login page"],
              found: !1,
            },
            {
              challenge: "Try common username/password combinations",
              solution: "admin:admin",
              hints: ["Try admin/admin", "Try admin/password", "Try root/root"],
              found: !1,
            },
          ],
          targets: [
            "admin:admin",
            "admin:password",
            "root:root",
            "administrator:admin",
          ],
        },
        3: {
          title: "Basic SQL Injection",
          description:
            "Safely test for SQL injection vulnerabilities in a controlled environment.",
          steps: [
            {
              challenge: "Find a login form to test",
              solution: "/login",
              hints: ["Look for login pages", "Check common paths"],
              found: !1,
            },
            {
              challenge: "Test for SQL injection",
              solution: "admin' OR '1'='1",
              hints: [
                "Try SQL injection payloads",
                "Use OR statements",
                "Try admin' OR '1'='1",
              ],
              found: !1,
            },
          ],
          targets: [
            "admin' OR '1'='1",
            "' OR 1=1--",
            "admin'--",
            "' UNION SELECT * FROM users--",
          ],
        },
      }[e],
      w = v == null ? void 0 : v.steps[n],
      b = (m) => {
        if (a >= c) return;
        if ((o(a + 1), v.targets.includes(m.trim()))) {
          const f = [...i, m];
          if ((l(f), n < v.steps.length - 1)) r(n + 1);
          else {
            const p = Math.max(0, 100 - a * 10);
            g(p),
              h(!0),
              setTimeout(() => {
                t(e, p);
              }, 3e3);
          }
        }
      };
    return d
      ? s.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(Gf, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Simulation Complete!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", y, "%"],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-2 gap-4 mb-6",
                children: [
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-green-400",
                        children: i.length,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Vulnerabilities Found",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-blue-400",
                        children: a,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Attempts Used",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "text-left bg-red-500/20 border border-red-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-red-400 font-semibold mb-2",
                    children: "⚠️ Ethical Hacking Reminder:",
                  }),
                  s.jsxs("ul", {
                    className: "text-sm text-red-200 space-y-1",
                    children: [
                      s.jsx("li", {
                        children:
                          "• Only test systems you own or have explicit permission to test",
                      }),
                      s.jsx("li", {
                        children:
                          "• Unauthorized access to computer systems is illegal",
                      }),
                      s.jsx("li", {
                        children:
                          "• Use these skills responsibly to improve security",
                      }),
                      s.jsx("li", {
                        children:
                          "• Consider pursuing ethical hacking certifications (CEH, OSCP)",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-8",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: [v == null ? void 0 : v.title, " - Level ", e],
                }),
                s.jsx("p", {
                  className: "text-gray-400",
                  children: v == null ? void 0 : v.description,
                }),
              ],
            }),
            s.jsx("div", {
              className: "flex items-center justify-center space-x-4 mb-8",
              children:
                v == null
                  ? void 0
                  : v.steps.map((m, u) =>
                      s.jsx(
                        "div",
                        {
                          className: `w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                            u < n
                              ? "border-green-400 bg-green-400"
                              : u === n
                              ? "border-blue-400 bg-blue-400"
                              : "border-gray-600 bg-gray-700"
                          }`,
                          tabIndex: 0,
                          "aria-label": `Step ${u + 1} ${
                            u < n
                              ? "completed"
                              : u === n
                              ? "current"
                              : "upcoming"
                          }`,
                          children:
                            u < n
                              ? s.jsx(ee, {
                                  className: "w-4 h-4 text-white",
                                  "aria-hidden": "true",
                                  focusable: "false",
                                })
                              : s.jsx("span", {
                                  className: "text-white text-sm",
                                  children: u + 1,
                                }),
                        },
                        u
                      )
                    ),
            }),
            s.jsxs("div", {
              className: "bg-gray-900 border-2 border-gray-700 rounded-lg mb-6",
              children: [
                s.jsxs("div", {
                  className:
                    "bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center space-x-2",
                  children: [
                    s.jsxs("div", {
                      className: "flex space-x-1",
                      children: [
                        s.jsx("div", {
                          className: "w-3 h-3 bg-red-500 rounded-full",
                        }),
                        s.jsx("div", {
                          className: "w-3 h-3 bg-yellow-500 rounded-full",
                        }),
                        s.jsx("div", {
                          className: "w-3 h-3 bg-green-500 rounded-full",
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className:
                        "bg-gray-700 flex-1 px-3 py-1 rounded text-sm text-gray-300",
                      children: "https://vulnerable-site.example.com",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "p-8",
                  children: [
                    s.jsx("h3", {
                      className: "text-2xl font-bold text-white mb-4",
                      children: "Vulnerable Test Site",
                    }),
                    s.jsx("p", {
                      className: "text-gray-300 mb-6",
                      children:
                        "This is a simulated vulnerable website for educational purposes.",
                    }),
                    s.jsxs("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        s.jsxs("div", {
                          className:
                            "bg-gray-800 p-4 rounded-lg border border-gray-600",
                          children: [
                            s.jsx("h4", {
                              className: "text-white font-semibold mb-2",
                              children: "Navigation",
                            }),
                            s.jsxs("ul", {
                              className: "text-sm text-gray-300 space-y-1",
                              children: [
                                s.jsxs("li", {
                                  children: [
                                    "• ",
                                    s.jsx("a", {
                                      href: "#",
                                      className:
                                        "text-blue-400 hover:underline",
                                      children: "Home",
                                    }),
                                  ],
                                }),
                                s.jsxs("li", {
                                  children: [
                                    "• ",
                                    s.jsx("a", {
                                      href: "#",
                                      className:
                                        "text-blue-400 hover:underline",
                                      children: "About",
                                    }),
                                  ],
                                }),
                                s.jsxs("li", {
                                  children: [
                                    "• ",
                                    s.jsx("a", {
                                      href: "#",
                                      className:
                                        "text-blue-400 hover:underline",
                                      children: "Contact",
                                    }),
                                  ],
                                }),
                                s.jsxs("li", {
                                  children: [
                                    "• ",
                                    s.jsx("a", {
                                      href: "#",
                                      className:
                                        "text-blue-400 hover:underline",
                                      children: "Login",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        s.jsxs("div", {
                          className:
                            "bg-gray-800 p-4 rounded-lg border border-gray-600",
                          children: [
                            s.jsx("h4", {
                              className: "text-white font-semibold mb-2",
                              children: "Current Challenge",
                            }),
                            s.jsx("p", {
                              className: "text-gray-300 text-sm",
                              children: w == null ? void 0 : w.challenge,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "bg-gray-800 border border-gray-700 rounded-lg p-6 mb-6",
              children: [
                s.jsxs("h3", {
                  className: "text-white font-semibold mb-4",
                  children: ["Test Input (", a, "/", c, " attempts used)"],
                }),
                s.jsxs("div", {
                  className: "flex space-x-4",
                  children: [
                    s.jsx("input", {
                      type: "text",
                      placeholder:
                        e === 1
                          ? "Enter URL path (e.g., /admin)"
                          : e === 2
                          ? "Enter credentials (e.g., admin:password)"
                          : "Enter test input",
                      className:
                        "flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-blue-400 focus:outline-none",
                      onKeyPress: (m) => {
                        m.key === "Enter" &&
                          a < c &&
                          (b(m.currentTarget.value),
                          (m.currentTarget.value = ""));
                      },
                      disabled: a >= c,
                    }),
                    s.jsx("button", {
                      onClick: () => {
                        const m = document.querySelector("input");
                        m && a < c && (b(m.value), (m.value = ""));
                      },
                      disabled: a >= c,
                      className:
                        "bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                      children: "Test",
                    }),
                  ],
                }),
                a >= c &&
                  !d &&
                  s.jsx("div", {
                    className:
                      "mt-4 bg-red-500/20 border border-red-400 rounded-lg p-4",
                    children: s.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        s.jsx(xe, { className: "w-5 h-5 text-red-400" }),
                        s.jsx("span", {
                          className: "text-red-200",
                          children: "Maximum attempts reached. Try again!",
                        }),
                      ],
                    }),
                  }),
              ],
            }),
            s.jsxs("div", {
              className:
                "bg-yellow-500/20 border border-yellow-400 rounded-lg p-4 mb-6",
              children: [
                s.jsx("h4", {
                  className: "text-yellow-400 font-semibold mb-2",
                  children: "Hints:",
                }),
                s.jsx("ul", {
                  className: "text-yellow-200 text-sm space-y-1",
                  children:
                    w == null
                      ? void 0
                      : w.hints.map((m, u) =>
                          s.jsxs("li", { children: ["• ", m] }, u)
                        ),
                }),
              ],
            }),
            i.length > 0 &&
              s.jsxs("div", {
                className:
                  "bg-green-500/20 border border-green-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-green-400 font-semibold mb-2",
                    children: "Found Vulnerabilities:",
                  }),
                  s.jsx("ul", {
                    className: "text-green-200 text-sm space-y-1",
                    children: i.map((m, u) =>
                      s.jsxs(
                        "li",
                        {
                          className: "flex items-center space-x-2",
                          children: [
                            s.jsx(ee, {
                              className: "w-4 h-4",
                              "aria-hidden": "true",
                              focusable: "false",
                            }),
                            s.jsx("span", { children: m }),
                          ],
                        },
                        u
                      )
                    ),
                  }),
                ],
              }),
          ],
        });
  },
  Lp = ({ level: e, onComplete: t }) => {
    N.useState("");
    const [n, r] = N.useState([]),
      [i, l] = N.useState(""),
      [a, o] = N.useState(!1),
      [c, d] = N.useState(!1),
      [h, y] = N.useState(""),
      [g, j] = N.useState(6),
      v = {
        1: ["SPAM", "HACK", "WIFI", "CODE", "VIRUS", "PATCH", "LOGIN"],
        2: ["PHISH", "PROXY", "TOKEN", "CYBER", "GHOST", "FRAUD", "GUARD"],
        3: [
          "FIREWALL",
          "MALWARE",
          "EXPLOIT",
          "BOTNET",
          "SECURE",
          "CIPHER",
          "TROJAN",
        ],
      },
      w = {
        1: {
          SPAM: "Unwanted email messages",
          HACK: "Unauthorized access to systems",
          WIFI: "Wireless internet connection",
          CODE: "Programming instructions",
          VIRUS: "Malicious software that replicates",
          PATCH: "Software update to fix vulnerabilities",
          LOGIN: "Process of accessing an account",
        },
        2: {
          PHISH: "Fraudulent attempt to steal information",
          PROXY: "Intermediary server for requests",
          TOKEN: "Digital authentication credential",
          CYBER: "Related to computer networks",
          GHOST: "Hidden or stealthy presence",
          FRAUD: "Deceptive practice for gain",
          GUARD: "Protection or security measure",
        },
        3: {
          FIREWALL: "Network security barrier",
          MALWARE: "Malicious software",
          EXPLOIT: "Taking advantage of vulnerability",
          BOTNET: "Network of infected computers",
          SECURE: "Protected from threats",
          CIPHER: "Encryption algorithm",
          TROJAN: "Disguised malicious program",
        },
      };
    N.useEffect(() => {
      const p = v[e] || v[1],
        x = p[Math.floor(Math.random() * p.length)];
      y(x), j(e === 3 ? 8 : 6);
    }, [e]);
    const b = e === 3 ? 7 : e === 2 ? 5 : 4,
      m = () => {
        if (i.length !== b || a) return;
        const p = [...n, i.toUpperCase()];
        if ((r(p), i.toUpperCase() === h)) {
          d(!0), o(!0);
          const x = Math.max(0, 100 - (p.length - 1) * 15);
          setTimeout(() => t(e, x), 2e3);
        } else p.length >= g && (o(!0), setTimeout(() => t(e, 0), 2e3));
        l("");
      },
      u = (p, x, S) => {
        if (S >= n.length) return "bg-gray-700 border-gray-600";
        const k = n[S][x];
        return k === h[x]
          ? "bg-green-500 border-green-500 text-white"
          : h.includes(k)
          ? "bg-yellow-500 border-yellow-500 text-white"
          : "bg-gray-600 border-gray-600 text-white";
      },
      f = (p) =>
        p < i.length
          ? "bg-gray-600 border-blue-400 text-white"
          : "bg-gray-700 border-gray-600";
    if (a) {
      const p = w[e] || {};
      return s.jsx("div", {
        className: "max-w-2xl mx-auto text-center",
        children: s.jsxs("div", {
          className: "bg-gray-800 border border-green-400 rounded-lg p-8",
          children: [
            s.jsx(br, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
            s.jsx("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: c ? "Congratulations!" : "Game Over!",
            }),
            s.jsxs("p", {
              className: "text-lg text-gray-300 mb-4",
              children: [
                "The word was: ",
                s.jsx("span", {
                  className: "text-green-400 font-bold",
                  children: h,
                }),
              ],
            }),
            s.jsx("div", {
              className:
                "bg-blue-500/20 border border-blue-400 rounded-lg p-4 mb-6",
              children: s.jsxs("div", {
                className: "flex items-start space-x-2",
                children: [
                  s.jsx(To, {
                    className: "w-5 h-5 text-blue-400 mt-0.5",
                    "aria-hidden": "true",
                    focusable: "false",
                  }),
                  s.jsxs("div", {
                    className: "text-left",
                    children: [
                      s.jsx("h4", {
                        className: "text-blue-400 font-semibold mb-1",
                        children: "Definition:",
                      }),
                      s.jsx("p", {
                        className: "text-blue-200 text-sm",
                        children: p[h],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            c &&
              s.jsxs("div", {
                className: "grid grid-cols-2 gap-4 mb-6",
                children: [
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-green-400",
                        children: n.length,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Attempts Used",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsxs("div", {
                        className: "text-2xl font-bold text-blue-400",
                        children: [Math.max(0, 100 - (n.length - 1) * 15), "%"],
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Score",
                      }),
                    ],
                  }),
                ],
              }),
            s.jsxs("div", {
              className:
                "text-left bg-green-500/20 border border-green-400 rounded-lg p-4",
              children: [
                s.jsx("h4", {
                  className: "text-green-400 font-semibold mb-2",
                  children: "🎯 Cybersecurity Wordle Tips:",
                }),
                s.jsxs("ul", {
                  className: "text-sm text-green-200 space-y-1",
                  children: [
                    s.jsx("li", {
                      children: "• Green letters are in the correct position",
                    }),
                    s.jsx("li", {
                      children:
                        "• Yellow letters are in the word but wrong position",
                    }),
                    s.jsx("li", {
                      children: "• Gray letters are not in the word",
                    }),
                    s.jsx("li", {
                      children: "• Learn cybersecurity terms while playing!",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    return s.jsxs("div", {
      className: "max-w-2xl mx-auto",
      children: [
        s.jsxs("div", {
          className: "text-center mb-8",
          children: [
            s.jsxs("h2", {
              className: "text-2xl font-bold text-white mb-2",
              children: ["Cyber Wordle - Level ", e],
            }),
            s.jsxs("p", {
              className: "text-gray-400",
              children: [
                "Guess the ",
                b,
                "-letter cybersecurity term in ",
                g,
                " tries",
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "mb-8",
          children: s.jsx("div", {
            className: "flex flex-col items-center space-y-2",
            children: Array.from({ length: g }).map((p, x) =>
              s.jsx(
                "div",
                {
                  className: "flex space-x-2",
                  children: Array.from({ length: b }).map((S, C) =>
                    s.jsx(
                      "div",
                      {
                        className: `w-12 h-12 border-2 rounded flex items-center justify-center text-lg font-bold ${
                          x === n.length && !a ? f(C) : u("", C, x)
                        }`,
                        children:
                          x < n.length
                            ? n[x][C]
                            : x === n.length && C < i.length
                            ? i[C].toUpperCase()
                            : "",
                      },
                      C
                    )
                  ),
                },
                x
              )
            ),
          }),
        }),
        s.jsxs("div", {
          className: "flex space-x-4 mb-6",
          children: [
            s.jsx("input", {
              type: "text",
              value: i,
              onChange: (p) => {
                const x = p.target.value.toUpperCase();
                x.length <= b && /^[A-Z]*$/.test(x) && l(x);
              },
              onKeyPress: (p) => {
                p.key === "Enter" && m();
              },
              placeholder: `Enter ${b} letters...`,
              className:
                "flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-center text-lg font-bold focus:border-blue-400 focus:outline-none",
              maxLength: b,
              disabled: a,
            }),
            s.jsx("button", {
              onClick: m,
              disabled: i.length !== b || a,
              className:
                "bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-green-400",
              tabIndex: 0,
              "aria-label": "Submit Guess",
              children: "Guess",
            }),
          ],
        }),
        s.jsx("div", {
          className: "text-center",
          children: s.jsxs("div", {
            className:
              "inline-flex items-center space-x-6 bg-gray-800 border border-gray-600 rounded-lg px-6 py-3",
            children: [
              s.jsxs("div", {
                children: [
                  s.jsx("span", {
                    className: "text-gray-400",
                    children: "Attempts: ",
                  }),
                  s.jsxs("span", {
                    className: "text-white font-bold",
                    children: [n.length, "/", g],
                  }),
                ],
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("span", {
                    className: "text-gray-400",
                    children: "Letters: ",
                  }),
                  s.jsxs("span", {
                    className: "text-white font-bold",
                    children: [i.length, "/", b],
                  }),
                ],
              }),
            ],
          }),
        }),
        s.jsx("div", {
          className:
            "mt-6 bg-blue-500/20 border border-blue-400 rounded-lg p-4",
          children: s.jsxs("div", {
            className: "flex items-start space-x-2",
            children: [
              s.jsx(To, {
                className: "w-5 h-5 text-blue-400 mt-0.5",
                "aria-hidden": "true",
                focusable: "false",
              }),
              s.jsxs("div", {
                children: [
                  s.jsx("h4", {
                    className: "text-blue-400 font-semibold mb-1",
                    children: "Hint:",
                  }),
                  s.jsx("p", {
                    className: "text-blue-200 text-sm",
                    children: h && w[e] && w[e][h],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  _p = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState({}),
      [a, o] = N.useState(null),
      [c, d] = N.useState(!1),
      [h, y] = N.useState(0),
      g = {
        1: {
          title: "Match Threats with Definitions",
          items: [
            { id: "1", content: "Phishing", category: "definitions" },
            { id: "2", content: "Malware", category: "definitions" },
            { id: "3", content: "Ransomware", category: "definitions" },
            {
              id: "4",
              content: "Fraudulent emails to steal information",
              category: "threats",
            },
            { id: "5", content: "Malicious software", category: "threats" },
            {
              id: "6",
              content: "Encrypts files for money",
              category: "threats",
            },
          ],
          categoryNames: {
            threats: "Threat Types",
            definitions: "Definitions",
          },
          correctPairs: {
            Phishing: "Fraudulent emails to steal information",
            Malware: "Malicious software",
            Ransomware: "Encrypts files for money",
          },
        },
        2: {
          title: "Match Icons with Security Tools",
          items: [
            { id: "1", content: "🔥", category: "icons" },
            { id: "2", content: "🛡️", category: "icons" },
            { id: "3", content: "🔐", category: "icons" },
            { id: "4", content: "Firewall", category: "tools" },
            { id: "5", content: "Antivirus", category: "tools" },
            { id: "6", content: "Encryption", category: "tools" },
          ],
          categoryNames: { icons: "Security Icons", tools: "Security Tools" },
          correctPairs: {
            "🔥": "Firewall",
            "🛡️": "Antivirus",
            "🔐": "Encryption",
          },
        },
        3: {
          title: "Match Threats with Countermeasures",
          items: [
            { id: "1", content: "SQL Injection", category: "threats" },
            { id: "2", content: "Man-in-the-Middle", category: "threats" },
            { id: "3", content: "Brute Force Attack", category: "threats" },
            {
              id: "4",
              content: "Input Validation",
              category: "countermeasures",
            },
            { id: "5", content: "VPN Encryption", category: "countermeasures" },
            {
              id: "6",
              content: "Account Lockout",
              category: "countermeasures",
            },
          ],
          categoryNames: {
            threats: "Security Threats",
            countermeasures: "Countermeasures",
          },
          correctPairs: {
            "SQL Injection": "Input Validation",
            "Man-in-the-Middle": "VPN Encryption",
            "Brute Force Attack": "Account Lockout",
          },
        },
      };
    ze.useEffect(() => {
      const p = g[e];
      if (p) {
        r(p.items);
        const x = {};
        Object.keys(p.categoryNames).forEach((S) => {
          x[S] = [];
        }),
          l(x);
      }
    }, [e]);
    const j = g[e],
      v = (p, x) => {
        o(x), (p.dataTransfer.effectAllowed = "move");
      },
      w = (p) => {
        p.preventDefault(), (p.dataTransfer.dropEffect = "move");
      },
      b = (p, x) => {
        if ((p.preventDefault(), !a || !n.find((k) => k.id === a))) return;
        const C = { ...i };
        Object.keys(C).forEach((k) => {
          C[k] = C[k].filter((P) => P !== a);
        }),
          (C[x] = [...C[x], a]),
          l(C),
          o(null);
      },
      m = () => {
        let p = 0;
        const x = Object.keys(j.correctPairs).length;
        Object.entries(j.correctPairs).forEach(([C, k]) => {
          const P = n.find((A) => A.content === C),
            T = n.find((A) => A.content === k);
          if (P && T) {
            const A = Object.keys(i).find((z) => i[z].includes(P.id)),
              I = Object.keys(i).find((z) => i[z].includes(T.id));
            A && I && A !== I && p++;
          }
        });
        const S = (p / x) * 100;
        y(S),
          d(!0),
          setTimeout(() => {
            t(e, S);
          }, 3e3);
      },
      u = () => {
        const p = {};
        Object.keys(j.categoryNames).forEach((x) => {
          p[x] = [];
        }),
          l(p),
          d(!1),
          y(0);
      },
      f = () => {
        const p = Object.values(i).flat();
        return n.filter((x) => !p.includes(x.id));
      };
    return c
      ? s.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(ee, {
                className: "w-16 h-16 text-green-400 mx-auto mb-4",
                "aria-hidden": "true",
                focusable: "false",
              }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Quiz Complete!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", Math.round(h), "%"],
              }),
              s.jsxs("div", {
                className: "text-left mb-6",
                children: [
                  s.jsx("h4", {
                    className: "text-white font-semibold mb-3",
                    children: "Correct Matches:",
                  }),
                  s.jsx("div", {
                    className: "grid gap-2",
                    children: Object.entries(j.correctPairs).map(([p, x], S) =>
                      s.jsxs(
                        "div",
                        {
                          className:
                            "bg-gray-700 rounded-lg p-3 flex items-center justify-between",
                          children: [
                            s.jsx("span", {
                              className: "text-blue-300",
                              children: p,
                            }),
                            s.jsx("span", {
                              className: "text-gray-400",
                              children: "↔",
                            }),
                            s.jsx("span", {
                              className: "text-green-300",
                              children: x,
                            }),
                          ],
                        },
                        S
                      )
                    ),
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: u,
                className:
                  "bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors",
                children: "Try Again",
              }),
            ],
          }),
        })
      : s.jsxs("div", {
          className: "max-w-6xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-8",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: [j == null ? void 0 : j.title, " - Level ", e],
                }),
                s.jsx("p", {
                  className: "text-gray-400",
                  children: "Drag and drop items to match them correctly",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "mb-8",
              children: [
                s.jsx("h3", {
                  className: "text-lg font-semibold text-white mb-4",
                  children: "Items to Sort:",
                }),
                s.jsx("div", {
                  className:
                    "bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-4 min-h-24",
                  children: s.jsx("div", {
                    className: "flex flex-wrap gap-3",
                    children: f().map((p) =>
                      s.jsx(
                        "div",
                        {
                          draggable: !0,
                          onDragStart: (x) => v(x, p.id),
                          className:
                            "bg-blue-500 text-white px-4 py-2 rounded-lg cursor-move hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400",
                          tabIndex: 0,
                          role: "button",
                          "aria-label": `Draggable item: ${p.content}`,
                          children: p.content,
                        },
                        p.id
                      )
                    ),
                  }),
                }),
              ],
            }),
            s.jsx("div", {
              className: "grid md:grid-cols-2 gap-6 mb-8",
              children: Object.entries(
                (j == null ? void 0 : j.categoryNames) || {}
              ).map(([p, x]) => {
                var S;
                return s.jsxs(
                  "div",
                  {
                    className:
                      "bg-gray-800 border-2 border-gray-600 rounded-lg p-6",
                    onDragOver: w,
                    onDrop: (C) => b(C, p),
                    tabIndex: 0,
                    "aria-label": `Drop zone: ${x}`,
                    children: [
                      s.jsx("h3", {
                        className: "text-lg font-semibold text-white mb-4",
                        children: x,
                      }),
                      s.jsx("div", {
                        className: "min-h-32 space-y-2",
                        children:
                          (S = i[p]) == null
                            ? void 0
                            : S.map((C) => {
                                const k = n.find((P) => P.id === C);
                                return k
                                  ? s.jsx(
                                      "div",
                                      {
                                        draggable: !0,
                                        onDragStart: (P) => v(P, C),
                                        className:
                                          "bg-gray-700 text-white px-4 py-2 rounded-lg cursor-move hover:bg-gray-600 transition-colors",
                                        tabIndex: 0,
                                        role: "button",
                                        "aria-label": `Draggable item: ${k.content}`,
                                        children: k.content,
                                      },
                                      C
                                    )
                                  : null;
                              }),
                      }),
                    ],
                  },
                  p
                );
              }),
            }),
            s.jsxs("div", {
              className: "text-center",
              children: [
                s.jsx("button", {
                  onClick: m,
                  disabled: f().length > 0,
                  className:
                    "bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                  children: "Submit Matches",
                }),
                s.jsxs("button", {
                  onClick: u,
                  className:
                    "ml-4 bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors",
                  children: [
                    s.jsx(Ju, { className: "w-4 h-4 inline mr-2" }),
                    "Reset",
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "text-center mt-4 text-sm text-gray-400",
              children:
                f().length > 0 &&
                s.jsx("p", {
                  children: "Place all items in categories before submitting",
                }),
            }),
          ],
        });
  },
  zp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState(!1),
      [a, o] = N.useState(0),
      d = {
        1: {
          title: "Identify Risky Posts",
          type: "posts",
          data: [
            {
              id: 1,
              user: "Sarah_Travel",
              avatar: "👩",
              content:
                "Just checked into Hotel Paradise in Miami! Room 237 for the next 5 days. So excited! 🏖️ #vacation #miami",
              isRisky: !0,
              riskType: "Location Sharing",
              explanation:
                "Sharing real-time location and hotel details can attract burglars and stalkers.",
            },
            {
              id: 2,
              user: "FitnessJohn",
              avatar: "👨",
              content:
                "Great workout at the gym today! Feeling strong 💪 #fitness #motivation",
              isRisky: !1,
              riskType: "Safe",
              explanation:
                "General fitness content without specific location or personal details.",
            },
            {
              id: 3,
              user: "NewMom2024",
              avatar: "👩‍🍼",
              content:
                "My baby Emma was born on March 15th! She's perfect. Here's her first photo with her full name visible on the hospital bracelet.",
              isRisky: !0,
              riskType: "Personal Information",
              explanation:
                "Sharing baby's full name, birth date, and hospital details can enable identity theft.",
            },
            {
              id: 4,
              user: "TechGuru",
              avatar: "👨‍💻",
              content:
                "Working on an exciting new project. Can't wait to share more details soon! #coding #innovation",
              isRisky: !1,
              riskType: "Safe",
              explanation:
                "Vague professional content without sensitive details.",
            },
          ],
        },
        2: {
          title: "Spot Fake Profiles",
          type: "profiles",
          data: [
            {
              id: 1,
              name: "Jessica_Model2024",
              avatar: "👸",
              bio: "Professional model 📸 Looking for new opportunities! DM me 💕",
              followers: "50K followers",
              isRisky: !0,
              riskFactors: [
                "Generic stock photos",
                "New account with high followers",
                "Vague professional claims",
              ],
            },
            {
              id: 2,
              name: "Mike_Local_Photographer",
              avatar: "📷",
              bio: "Local photographer in Denver. Check out my portfolio link below. 5 years experience.",
              followers: "1.2K followers",
              isRisky: !1,
              riskFactors: [],
            },
            {
              id: 3,
              name: "Investment_Guru_Official",
              avatar: "💰",
              bio: "Make $5000/day with my proven system! Limited spots available. Message me NOW! 🚀💎",
              followers: "100K followers",
              isRisky: !0,
              riskFactors: [
                "Too good to be true claims",
                "Pressure tactics",
                "Money-focused content",
              ],
            },
            {
              id: 4,
              name: "LocalCoffeeShop",
              avatar: "☕",
              bio: "Best coffee in downtown Portland since 2015. Daily specials and community events!",
              followers: "2.8K followers",
              isRisky: !1,
              riskFactors: [],
            },
          ],
        },
        3: {
          title: "Fix Unsafe Privacy Settings",
          type: "settings",
          data: [
            {
              id: 1,
              setting: "Profile Visibility",
              currentValue: "Public",
              safeValue: "Friends Only",
              description: "Who can see your profile information",
            },
            {
              id: 2,
              setting: "Location Tracking",
              currentValue: "Always On",
              safeValue: "Off",
              description: "Allow apps to track your location",
            },
            {
              id: 3,
              setting: "Photo Tagging",
              currentValue: "Anyone",
              safeValue: "Friends Only",
              description: "Who can tag you in photos",
            },
            {
              id: 4,
              setting: "Data Sharing with Advertisers",
              currentValue: "Enabled",
              safeValue: "Disabled",
              description: "Share your data for targeted ads",
            },
            {
              id: 5,
              setting: "Two-Factor Authentication",
              currentValue: "Disabled",
              safeValue: "Enabled",
              description: "Extra security for your account",
            },
            {
              id: 6,
              setting: "Friend Requests",
              currentValue: "Anyone",
              safeValue: "Friends of Friends",
              description: "Who can send you friend requests",
            },
          ],
        },
      }[e],
      h = (w) => {
        i ||
          r((b) => (b.includes(w) ? b.filter((m) => m !== w) : [...b, riskId]));
      },
      y = () => {
        let w = 0,
          b = 0;
        if (d.type === "posts") {
          const f = d.data;
          (b = f.filter((p) => p.isRisky).length),
            (w = n.filter((p) => {
              var x;
              return (x = f.find((S) => S.id === p)) == null
                ? void 0
                : x.isRisky;
            }).length);
        } else if (d.type === "profiles") {
          const f = d.data;
          (b = f.filter((p) => p.isRisky).length),
            (w = n.filter((p) => {
              var x;
              return (x = f.find((S) => S.id === p)) == null
                ? void 0
                : x.isRisky;
            }).length);
        } else d.type === "settings" && ((b = d.data.length), (w = n.length));
        const m = n.filter((f) => {
            var p, x;
            return d.type === "posts"
              ? !((p = d.data.find((S) => S.id === f)) != null && p.isRisky)
              : d.type === "profiles"
              ? !((x = d.data.find((S) => S.id === f)) != null && x.isRisky)
              : !1;
          }).length,
          u = Math.max(0, (w / b) * 100 - m * 15);
        o(u),
          l(!0),
          setTimeout(() => {
            t(e, u);
          }, 3e3);
      },
      g = () => {
        const w = d.data;
        return s.jsx("div", {
          className: "space-y-4",
          children: w.map((b) =>
            s.jsx(
              "div",
              {
                onClick: () => h(b.id),
                className: `bg-gray-800 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  n.includes(b.id)
                    ? "border-red-400 bg-red-400/10"
                    : "border-gray-600 hover:border-blue-400"
                }`,
                children: s.jsxs("div", {
                  className: "flex items-start space-x-3",
                  children: [
                    s.jsx("div", { className: "text-2xl", children: b.avatar }),
                    s.jsxs("div", {
                      className: "flex-1",
                      children: [
                        s.jsxs("div", {
                          className: "flex items-center space-x-2 mb-2",
                          children: [
                            s.jsx("span", {
                              className: "font-semibold text-white",
                              children: b.user,
                            }),
                            n.includes(b.id) &&
                              !i &&
                              s.jsx(xe, { className: "w-4 h-4 text-red-400" }),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-gray-300 mb-2",
                          children: b.content,
                        }),
                        i &&
                          s.jsx("div", {
                            className: `mt-3 p-3 rounded-lg border ${
                              b.isRisky
                                ? "border-red-400 bg-red-400/20"
                                : "border-green-400 bg-green-400/20"
                            }`,
                            children: s.jsxs("div", {
                              className: "flex items-start space-x-2",
                              children: [
                                b.isRisky
                                  ? s.jsx(xe, {
                                      className: "w-5 h-5 text-red-400 mt-0.5",
                                    })
                                  : s.jsx(ee, {
                                      className:
                                        "w-5 h-5 text-green-400 mt-0.5",
                                    }),
                                s.jsxs("div", {
                                  children: [
                                    s.jsx("h4", {
                                      className: `font-semibold mb-1 ${
                                        b.isRisky
                                          ? "text-red-400"
                                          : "text-green-400"
                                      }`,
                                      children: b.riskType,
                                    }),
                                    s.jsx("p", {
                                      className: `text-sm ${
                                        b.isRisky
                                          ? "text-red-200"
                                          : "text-green-200"
                                      }`,
                                      children: b.explanation,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              },
              b.id
            )
          ),
        });
      },
      j = () => {
        const w = d.data;
        return s.jsx("div", {
          className: "grid md:grid-cols-2 gap-4",
          children: w.map((b) =>
            s.jsxs(
              "div",
              {
                onClick: () => h(b.id),
                className: `bg-gray-800 border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  n.includes(b.id)
                    ? "border-red-400 bg-red-400/10"
                    : "border-gray-600 hover:border-blue-400"
                }`,
                children: [
                  s.jsxs("div", {
                    className: "text-center mb-4",
                    children: [
                      s.jsx("div", {
                        className: "text-4xl mb-2",
                        children: b.avatar,
                      }),
                      s.jsx("h3", {
                        className: "text-white font-semibold",
                        children: b.name,
                      }),
                      s.jsx("p", {
                        className: "text-gray-400 text-sm",
                        children: b.followers,
                      }),
                    ],
                  }),
                  s.jsx("p", {
                    className: "text-gray-300 text-sm mb-4",
                    children: b.bio,
                  }),
                  n.includes(b.id) &&
                    !i &&
                    s.jsx("div", {
                      className:
                        "bg-red-500/20 border border-red-400 rounded p-2 text-center",
                      children: s.jsx("span", {
                        className: "text-red-400 text-sm",
                        children: "Marked as Suspicious",
                      }),
                    }),
                  i &&
                    b.isRisky &&
                    s.jsxs("div", {
                      className:
                        "bg-red-500/20 border border-red-400 rounded-lg p-3",
                      children: [
                        s.jsx("h4", {
                          className: "text-red-400 font-semibold mb-1",
                          children: "Risk Factors:",
                        }),
                        s.jsx("ul", {
                          className: "text-red-200 text-sm",
                          children: b.riskFactors.map((m, u) =>
                            s.jsxs("li", { children: ["• ", m] }, u)
                          ),
                        }),
                      ],
                    }),
                  i &&
                    !b.isRisky &&
                    s.jsx("div", {
                      className:
                        "bg-green-500/20 border border-green-400 rounded-lg p-3",
                      children: s.jsxs("div", {
                        className: "flex items-center space-x-2",
                        children: [
                          s.jsx(ee, { className: "w-4 h-4 text-green-400" }),
                          s.jsx("span", {
                            className: "text-green-400 text-sm",
                            children: "Legitimate Profile",
                          }),
                        ],
                      }),
                    }),
                ],
              },
              b.id
            )
          ),
        });
      },
      v = () => {
        const w = d.data;
        return s.jsx("div", {
          className: "space-y-4",
          children: w.map((b) =>
            s.jsx(
              "div",
              {
                onClick: () => h(b.id),
                className: `bg-gray-800 border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  n.includes(b.id)
                    ? "border-green-400 bg-green-400/10"
                    : "border-red-400 bg-red-400/10"
                }`,
                children: s.jsxs("div", {
                  className: "flex items-center justify-between",
                  children: [
                    s.jsxs("div", {
                      className: "flex-1",
                      children: [
                        s.jsx("h3", {
                          className: "text-white font-semibold mb-1",
                          children: b.setting,
                        }),
                        s.jsx("p", {
                          className: "text-gray-400 text-sm mb-2",
                          children: b.description,
                        }),
                        s.jsxs("div", {
                          className: "flex items-center space-x-4",
                          children: [
                            s.jsxs("div", {
                              children: [
                                s.jsx("span", {
                                  className: "text-gray-400",
                                  children: "Current: ",
                                }),
                                s.jsx("span", {
                                  className: "text-red-400 font-semibold",
                                  children: b.currentValue,
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              children: [
                                s.jsx("span", {
                                  className: "text-gray-400",
                                  children: "Safe: ",
                                }),
                                s.jsx("span", {
                                  className: "text-green-400 font-semibold",
                                  children: b.safeValue,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    s.jsx("div", {
                      className: "ml-4",
                      children: n.includes(b.id)
                        ? s.jsx("div", {
                            className: "bg-green-500 p-2 rounded-lg",
                            children: s.jsx(Bf, {
                              className: "w-5 h-5 text-white",
                            }),
                          })
                        : s.jsx("div", {
                            className: "bg-red-500 p-2 rounded-lg",
                            children: s.jsx(xe, {
                              className: "w-5 h-5 text-white",
                            }),
                          }),
                    }),
                  ],
                }),
              },
              b.id
            )
          ),
        });
      };
    return i
      ? s.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(pa, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Scan Complete!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", Math.round(a), "%"],
              }),
              s.jsxs("div", {
                className:
                  "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-blue-400 font-semibold mb-2",
                    children: "🔍 Social Media Security Tips:",
                  }),
                  s.jsxs("ul", {
                    className: "text-sm text-blue-200 space-y-1",
                    children: [
                      s.jsx("li", {
                        children:
                          "• Think before you post - once online, always online",
                      }),
                      s.jsx("li", {
                        children:
                          "• Avoid sharing real-time locations and travel plans",
                      }),
                      s.jsx("li", {
                        children:
                          "• Be skeptical of profiles that seem too good to be true",
                      }),
                      s.jsx("li", {
                        children:
                          "• Regularly review and update your privacy settings",
                      }),
                      s.jsx("li", {
                        children:
                          "• Enable two-factor authentication on all accounts",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "text-center mb-8",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white mb-2",
                  children: [d.title, " - Level ", e],
                }),
                s.jsxs("p", {
                  className: "text-gray-400",
                  children: [
                    d.type === "posts" &&
                      "Click on posts that contain security risks",
                    d.type === "profiles" &&
                      "Click on profiles that appear suspicious or fake",
                    d.type === "settings" &&
                      "Click on settings that need to be fixed for better security",
                  ],
                }),
              ],
            }),
            d.type === "posts" && g(),
            d.type === "profiles" && j(),
            d.type === "settings" && v(),
            s.jsx("div", {
              className: "text-center mt-8",
              children: s.jsxs("button", {
                onClick: y,
                className:
                  "bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors",
                children: ["Submit Scan (", n.length, " identified)"],
              }),
            }),
          ],
        });
  },
  Ip = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(0),
      [i, l] = N.useState(""),
      [a, o] = N.useState(60),
      [c, d] = N.useState(!1),
      [h, y] = N.useState(!1),
      [g, j] = N.useState(0),
      [v, w] = N.useState(0),
      [b, m] = N.useState(0),
      [u, f] = N.useState(0),
      p = {
        1: [
          "virus",
          "trojan",
          "worm",
          "spam",
          "hack",
          "phish",
          "malware",
          "spyware",
          "adware",
          "rootkit",
          "botnet",
          "keylog",
          "ransom",
          "breach",
          "exploit",
        ],
        2: [
          "firewall",
          "antivirus",
          "encryption",
          "password",
          "security",
          "protocol",
          "authentication",
          "vulnerability",
          "penetration",
          "intrusion",
          "detection",
          "prevention",
          "monitoring",
          "incident",
          "response",
        ],
        3: [
          "cybersecurity",
          "cryptography",
          "steganography",
          "reconnaissance",
          "enumeration",
          "exploitation",
          "privilege escalation",
          "lateral movement",
          "persistence",
          "command and control",
          "exfiltration",
          "impact assessment",
          "threat intelligence",
          "digital forensics",
          "incident handling",
        ],
      },
      x = {
        1: [
          "Viruses attach to files and spread when files are shared",
          "Trojans disguise themselves as legitimate software",
          "Worms can spread automatically across networks",
          "Always keep your antivirus software updated",
        ],
        2: [
          "Use strong, unique passwords for each account",
          "Enable two-factor authentication when available",
          "Keep software and systems regularly updated",
          "Be cautious when clicking links or downloading files",
        ],
        3: [
          "Implement defense in depth security strategies",
          "Regular security audits help identify vulnerabilities",
          "Incident response plans are crucial for organizations",
          "Threat intelligence helps predict and prevent attacks",
        ],
      },
      S = p[e] || p[1],
      C = S[n];
    N.useEffect(() => {
      if (c && a > 0 && !h) {
        const I = setTimeout(() => o(a - 1), 1e3);
        return () => clearTimeout(I);
      } else a === 0 && T();
    }, [a, c, h]);
    const k = () => {
        d(!0), o(e === 1 ? 60 : e === 2 ? 45 : 30);
      },
      P = (I) => {
        l(I),
          I === C &&
            (w(v + 1), m(b + 1), l(""), n < S.length - 1 ? r(n + 1) : r(0));
      },
      T = () => {
        y(!0);
        const I = v * (60 / (e === 1 ? 60 : e === 2 ? 45 : 30));
        f(I);
        let z = 0;
        e === 1
          ? (z = Math.min(100, v * 5))
          : e === 2
          ? (z = Math.min(100, v * 4))
          : (z = Math.min(100, v * 3)),
          j(z),
          setTimeout(() => {
            t(e, z);
          }, 3e3);
      },
      A = (I, z) =>
        z < i.length
          ? i[z] === I
            ? "text-green-400 bg-green-400/20"
            : "text-red-400 bg-red-400/20"
          : "text-gray-400";
    if (h) {
      const I = x[e] || x[1];
      return s.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: s.jsxs("div", {
          className: "bg-gray-800 border border-green-400 rounded-lg p-8",
          children: [
            s.jsx(Co, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
            s.jsx("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Typing Race Complete!",
            }),
            s.jsxs("p", {
              className: "text-green-400 text-xl mb-6",
              children: ["Score: ", g, "%"],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-3 gap-4 mb-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-green-400",
                      children: v,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Words Typed",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-blue-400",
                      children: Math.round(u),
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "WPM",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsxs("div", {
                      className: "text-2xl font-bold text-yellow-400",
                      children: [b > 0 ? Math.round((v / b) * 100) : 0, "%"],
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Accuracy",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
              children: [
                s.jsx("h4", {
                  className: "text-blue-400 font-semibold mb-2",
                  children: "⌨️ Cybersecurity Tips:",
                }),
                s.jsx("ul", {
                  className: "text-sm text-blue-200 space-y-1",
                  children: I.map((z, L) =>
                    s.jsxs("li", { children: ["• ", z] }, L)
                  ),
                }),
              ],
            }),
          ],
        }),
      });
    }
    return c
      ? s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between mb-8",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white",
                  children: ["Malware Typing Race - Level ", e],
                }),
                s.jsxs("div", {
                  className: "flex items-center space-x-6",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-2 text-orange-400",
                      children: [
                        s.jsx(Tt, { className: "w-5 h-5" }),
                        s.jsxs("span", {
                          className: "text-xl font-bold",
                          children: [a, "s"],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center space-x-2 text-green-400",
                      children: [
                        s.jsx(Cn, { className: "w-5 h-5" }),
                        s.jsx("span", {
                          className: "text-xl font-bold",
                          children: v,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "bg-gray-800 border border-gray-700 rounded-lg p-8 mb-6",
              children: [
                s.jsxs("div", {
                  className: "text-center mb-6",
                  children: [
                    s.jsx("h3", {
                      className: "text-lg text-gray-400 mb-4",
                      children: "Type this word:",
                    }),
                    s.jsx("div", {
                      className: "text-4xl font-mono font-bold mb-4",
                      children: C.split("").map((I, z) =>
                        s.jsx(
                          "span",
                          {
                            className: `px-1 py-2 rounded ${A(I, z)}`,
                            children: I,
                          },
                          z
                        )
                      ),
                    }),
                  ],
                }),
                s.jsx("input", {
                  type: "text",
                  value: i,
                  onChange: (I) => P(I.target.value),
                  className:
                    "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-center text-xl font-mono focus:border-blue-400 focus:outline-none",
                  placeholder: "Start typing...",
                  autoFocus: !0,
                }),
              ],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-4 gap-4",
              children: [
                s.jsxs("div", {
                  className:
                    "bg-gray-800 border border-gray-600 rounded-lg p-4 text-center",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-green-400",
                      children: v,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Words Completed",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-gray-800 border border-gray-600 rounded-lg p-4 text-center",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-blue-400",
                      children: Math.round(
                        (v / Math.max(1, (60 - a) / 60)) * 60
                      ),
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "WPM",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-gray-800 border border-gray-600 rounded-lg p-4 text-center",
                  children: [
                    s.jsxs("div", {
                      className: "text-2xl font-bold text-yellow-400",
                      children: [b > 0 ? Math.round((v / b) * 100) : 100, "%"],
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Accuracy",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "bg-gray-800 border border-gray-600 rounded-lg p-4 text-center",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-purple-400",
                      children: n + 1,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Current Word",
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      : s.jsx("div", {
          className: "max-w-2xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-gray-700 rounded-lg p-8",
            children: [
              s.jsx(Co, { className: "w-16 h-16 text-blue-400 mx-auto mb-4" }),
              s.jsxs("h2", {
                className: "text-2xl font-bold text-white mb-4",
                children: ["Malware Typing Race - Level ", e],
              }),
              s.jsxs("p", {
                className: "text-gray-400 mb-6",
                children: [
                  "Type cybersecurity terms as fast as you can!",
                  e === 1 && " You have 60 seconds.",
                  e === 2 && " You have 45 seconds.",
                  e === 3 && " You have 30 seconds.",
                ],
              }),
              s.jsxs("div", {
                className:
                  "bg-yellow-500/20 border border-yellow-400 rounded-lg p-4 mb-6",
                children: [
                  s.jsx("h4", {
                    className: "text-yellow-400 font-semibold mb-2",
                    children: "Instructions:",
                  }),
                  s.jsxs("ul", {
                    className: "text-yellow-200 text-sm space-y-1",
                    children: [
                      s.jsx("li", {
                        children:
                          "• Type the highlighted word exactly as shown",
                      }),
                      s.jsx("li", {
                        children:
                          "• Press Enter or complete the word to move to the next",
                      }),
                      s.jsx("li", {
                        children:
                          "• Green letters are correct, red letters are wrong",
                      }),
                      s.jsx("li", {
                        children:
                          "• Speed and accuracy both matter for your score",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: k,
                className:
                  "bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors",
                children: "Start Typing Race",
              }),
            ],
          }),
        });
  },
  Rp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(null),
      [i, l] = N.useState([]),
      [a, o] = N.useState(0),
      [c, d] = N.useState(0),
      [h, y] = N.useState(0),
      [g, j] = N.useState(!1),
      [v, w] = N.useState(""),
      [b, m] = N.useState(!1),
      u = {
        1: [
          {
            id: 1,
            type: "Malware Detection",
            severity: "high",
            message:
              "Antivirus detected suspicious file: trojan.exe in Downloads folder",
            correctAction: "Quarantine file immediately",
            timeLimit: 15,
            points: 20,
          },
          {
            id: 2,
            type: "Failed Login Attempts",
            severity: "medium",
            message:
              "5 failed login attempts detected for admin account in last 2 minutes",
            correctAction: "Lock account temporarily",
            timeLimit: 12,
            points: 15,
          },
          {
            id: 3,
            type: "Suspicious Email",
            severity: "low",
            message:
              "Email with suspicious attachment received from unknown sender",
            correctAction: "Delete email and warn users",
            timeLimit: 10,
            points: 10,
          },
          {
            id: 4,
            type: "Unauthorized Access",
            severity: "critical",
            message: "Login detected from unusual location: Russia at 3 AM",
            correctAction: "Immediately disable account",
            timeLimit: 20,
            points: 25,
          },
        ],
        2: [
          {
            id: 5,
            type: "Data Exfiltration",
            severity: "critical",
            message:
              "Large file transfer detected to external IP: 500GB uploaded",
            correctAction: "Block network traffic immediately",
            timeLimit: 18,
            points: 30,
          },
          {
            id: 6,
            type: "Ransomware Activity",
            severity: "critical",
            message: "Multiple files being encrypted rapidly in shared drive",
            correctAction: "Isolate affected systems",
            timeLimit: 25,
            points: 35,
          },
          {
            id: 7,
            type: "SQL Injection Attempt",
            severity: "high",
            message: "Database query contains malicious SQL code from web form",
            correctAction: "Block IP and patch vulnerability",
            timeLimit: 15,
            points: 25,
          },
          {
            id: 8,
            type: "Privilege Escalation",
            severity: "high",
            message:
              "User account gained admin privileges without authorization",
            correctAction: "Revoke privileges and investigate",
            timeLimit: 12,
            points: 20,
          },
        ],
        3: [
          {
            id: 9,
            type: "APT Activity",
            severity: "critical",
            message:
              "Advanced persistent threat detected: Command & Control communication",
            correctAction: "Activate incident response team",
            timeLimit: 30,
            points: 40,
          },
          {
            id: 10,
            type: "Zero-Day Exploit",
            severity: "critical",
            message: "Unknown vulnerability being exploited in web server",
            correctAction: "Take server offline immediately",
            timeLimit: 20,
            points: 35,
          },
          {
            id: 11,
            type: "Insider Threat",
            severity: "high",
            message: "Employee accessing sensitive files outside work hours",
            correctAction: "Monitor and restrict access",
            timeLimit: 25,
            points: 30,
          },
          {
            id: 12,
            type: "DDoS Attack",
            severity: "high",
            message:
              "Website receiving 10,000+ requests per second from botnet",
            correctAction: "Enable DDoS protection",
            timeLimit: 15,
            points: 25,
          },
        ],
      },
      f = [
        "Quarantine file immediately",
        "Lock account temporarily",
        "Delete email and warn users",
        "Immediately disable account",
        "Block network traffic immediately",
        "Isolate affected systems",
        "Block IP and patch vulnerability",
        "Revoke privileges and investigate",
        "Activate incident response team",
        "Take server offline immediately",
        "Monitor and restrict access",
        "Enable DDoS protection",
        "Ignore the alert",
        "Wait for more information",
        "Contact vendor support",
      ];
    N.useEffect(() => {
      var T;
      const P = u[e] || u[1];
      l([...P]), r(P[0]), o(((T = P[0]) == null ? void 0 : T.timeLimit) || 15);
    }, [e]),
      N.useEffect(() => {
        if (n && a > 0 && !b) {
          const P = setTimeout(() => o(a - 1), 1e3);
          return () => clearTimeout(P);
        } else a === 0 && n && !b && x();
      }, [a, n, b]);
    const p = (P) => {
        if (!n || b) return;
        w(P),
          m(!0),
          P === n.correctAction && d(c + n.points),
          setTimeout(() => {
            S();
          }, 2e3);
      },
      x = () => {
        w("TIMEOUT"),
          m(!0),
          setTimeout(() => {
            S();
          }, 2e3);
      },
      S = () => {
        y(h + 1), m(!1), w("");
        const P = i.slice(h + 1);
        P.length > 0 ? (r(P[0]), o(P[0].timeLimit)) : C();
      },
      C = () => {
        j(!0);
        const P = i.reduce((A, I) => A + I.points, 0),
          T = (c / P) * 100;
        setTimeout(() => {
          t(e, T);
        }, 3e3);
      },
      k = (P) => {
        switch (P) {
          case "low":
            return "text-yellow-400 border-yellow-400";
          case "medium":
            return "text-orange-400 border-orange-400";
          case "high":
            return "text-red-400 border-red-400";
          case "critical":
            return "text-red-500 border-red-500 animate-pulse";
          default:
            return "text-gray-400 border-gray-400";
        }
      };
    if (g) {
      const P = i.reduce((A, I) => A + I.points, 0),
        T = (c / P) * 100;
      return s.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: s.jsxs("div", {
          className: "bg-gray-800 border border-green-400 rounded-lg p-8",
          children: [
            s.jsx(qt, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
            s.jsx("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Incident Response Complete!",
            }),
            s.jsxs("p", {
              className: "text-green-400 text-xl mb-6",
              children: ["Score: ", Math.round(T), "%"],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-3 gap-4 mb-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-green-400",
                      children: c,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Points Earned",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-blue-400",
                      children: h,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Alerts Handled",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-yellow-400",
                      children: P,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Max Points",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
              children: [
                s.jsx("h4", {
                  className: "text-blue-400 font-semibold mb-2",
                  children: "🚨 Incident Response Tips:",
                }),
                s.jsxs("ul", {
                  className: "text-sm text-blue-200 space-y-1",
                  children: [
                    s.jsx("li", {
                      children: "• Speed is crucial in cybersecurity incidents",
                    }),
                    s.jsx("li", {
                      children: "• Always prioritize critical alerts first",
                    }),
                    s.jsx("li", {
                      children: "• Document all actions taken during incidents",
                    }),
                    s.jsx("li", {
                      children: "• Have an incident response plan ready",
                    }),
                    s.jsx("li", {
                      children:
                        "• Practice makes perfect in emergency situations",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    return n
      ? s.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                s.jsxs("h2", {
                  className: "text-2xl font-bold text-white",
                  children: ["Breach Reaction Time - Level ", e],
                }),
                s.jsxs("div", {
                  className: "flex items-center space-x-6",
                  children: [
                    s.jsxs("div", {
                      className: "flex items-center space-x-2 text-orange-400",
                      children: [
                        s.jsx(Tt, { className: "w-5 h-5" }),
                        s.jsxs("span", {
                          className: "text-xl font-bold",
                          children: [a, "s"],
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "text-green-400",
                      children: ["Alert ", h + 1, "/", i.length],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: `bg-gray-800 border-2 rounded-lg p-6 mb-6 ${k(
                n.severity
              )}`,
              children: s.jsxs("div", {
                className: "flex items-start space-x-4",
                children: [
                  s.jsx(xe, {
                    className: `w-8 h-8 mt-1 ${k(n.severity).split(" ")[0]}`,
                  }),
                  s.jsxs("div", {
                    className: "flex-1",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          s.jsx("h3", {
                            className: "text-xl font-bold text-white",
                            children: n.type,
                          }),
                          s.jsx("span", {
                            className: `px-3 py-1 rounded-full text-xs font-bold uppercase ${k(
                              n.severity
                            )}`,
                            children: n.severity,
                          }),
                        ],
                      }),
                      s.jsx("p", {
                        className: "text-gray-300 text-lg mb-4",
                        children: n.message,
                      }),
                      b &&
                        s.jsxs("div", {
                          className: `p-4 rounded-lg border ${
                            v === n.correctAction
                              ? "border-green-400 bg-green-400/20"
                              : "border-red-400 bg-red-400/20"
                          }`,
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                v === n.correctAction
                                  ? s.jsx(ee, {
                                      className: "w-5 h-5 text-green-400",
                                    })
                                  : s.jsx(Qt, {
                                      className: "w-5 h-5 text-red-400",
                                    }),
                                s.jsx("span", {
                                  className:
                                    v === n.correctAction
                                      ? "text-green-400"
                                      : "text-red-400",
                                  children:
                                    v === "TIMEOUT"
                                      ? "Time's up!"
                                      : v === n.correctAction
                                      ? "Correct Action!"
                                      : "Wrong Action!",
                                }),
                              ],
                            }),
                            s.jsxs("p", {
                              className: "text-sm text-gray-300 mt-2",
                              children: ["Correct action: ", n.correctAction],
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            }),
            !b &&
              s.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-3",
                children: f.map((P, T) =>
                  s.jsx(
                    "button",
                    {
                      onClick: () => p(P),
                      className:
                        "bg-gray-700 hover:bg-gray-600 text-white p-4 rounded-lg text-left transition-all transform hover:scale-102 border border-gray-600 hover:border-blue-400",
                      children: P,
                    },
                    T
                  )
                ),
              }),
            s.jsx("div", {
              className: "mt-6 text-center",
              children: s.jsxs("div", {
                className:
                  "inline-block bg-gray-800 border border-gray-600 rounded-lg px-6 py-3",
                children: [
                  s.jsx("span", {
                    className: "text-gray-400",
                    children: "Score: ",
                  }),
                  s.jsxs("span", {
                    className: "text-green-400 font-bold",
                    children: [c, " points"],
                  }),
                ],
              }),
            }),
          ],
        })
      : s.jsx("div", {
          className: "text-center text-white",
          children: "Loading...",
        });
  },
  Wp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState(""),
      [i, l] = N.useState(""),
      [a, o] = N.useState(30),
      [c, d] = N.useState(0),
      [h, y] = N.useState(5),
      [g, j] = N.useState(0),
      [v, w] = N.useState(!1),
      [b, m] = N.useState(1),
      [u] = N.useState(5),
      [f, p] = N.useState(!1),
      [x, S] = N.useState(""),
      C = {
        1: [
          {
            type: "SMS Code",
            length: 6,
            pattern: "numeric",
            hint: "Check your phone for SMS",
          },
          {
            type: "Email Code",
            length: 6,
            pattern: "numeric",
            hint: "Check your email inbox",
          },
          {
            type: "App Code",
            length: 6,
            pattern: "numeric",
            hint: "Open your authenticator app",
          },
        ],
        2: [
          {
            type: "TOTP Code",
            length: 6,
            pattern: "numeric",
            hint: "Time-based code from authenticator",
          },
          {
            type: "Backup Code",
            length: 8,
            pattern: "alphanumeric",
            hint: "Use one of your backup codes",
          },
          {
            type: "Hardware Token",
            length: 6,
            pattern: "numeric",
            hint: "Press button on your hardware token",
          },
        ],
        3: [
          {
            type: "Biometric + PIN",
            length: 4,
            pattern: "numeric",
            hint: "Use fingerprint then enter PIN",
          },
          {
            type: "Smart Card",
            length: 8,
            pattern: "alphanumeric",
            hint: "Insert smart card and enter PIN",
          },
          {
            type: "Push Notification",
            length: 0,
            pattern: "action",
            hint: "Approve the push notification",
          },
        ],
      };
    N.useEffect(() => {
      k();
    }, [e, b]),
      N.useEffect(() => {
        if (a > 0 && !v) {
          const W = setTimeout(() => o(a - 1), 1e3);
          return () => clearTimeout(W);
        } else a === 0 && T();
      }, [a, v]);
    const k = () => {
        const W = C[e] || C[1],
          H = W[Math.floor(Math.random() * W.length)];
        if ((S(H.type), H.pattern === "numeric")) {
          const ne = Math.floor(Math.random() * Math.pow(10, H.length))
            .toString()
            .padStart(H.length, "0");
          l(ne);
        } else if (H.pattern === "alphanumeric") {
          const ne = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
          let M = "";
          for (let R = 0; R < H.length; R++)
            M += ne.charAt(Math.floor(Math.random() * ne.length));
          l(M);
        } else l("APPROVE");
        o(e === 1 ? 30 : e === 2 ? 25 : 20), r(""), d(0), p(!1);
      },
      P = () => {
        n === i || (x === "Push Notification" && n === "APPROVE")
          ? (j(g + 100 / u), A())
          : (d(c + 1), c + 1 >= h && A());
      },
      T = () => {
        A();
      },
      A = () => {
        b < u ? (m(b + 1), k()) : I();
      },
      I = () => {
        w(!0),
          setTimeout(() => {
            t(e, g);
          }, 3e3);
      },
      z = () => {
        const W = C[e] || C[1];
        return W.find((H) => H.type === x) || W[0];
      };
    if (v)
      return s.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: s.jsxs("div", {
          className: "bg-gray-800 border border-green-400 rounded-lg p-8",
          children: [
            s.jsx(qt, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
            s.jsx("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "2FA Challenge Complete!",
            }),
            s.jsxs("p", {
              className: "text-green-400 text-xl mb-6",
              children: ["Score: ", Math.round(g), "%"],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-2 gap-4 mb-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-green-400",
                      children: Math.round(g / 20),
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Codes Entered",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-blue-400",
                      children: u,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Total Rounds",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
              children: [
                s.jsx("h4", {
                  className: "text-blue-400 font-semibold mb-2",
                  children: "🔐 2FA Security Tips:",
                }),
                s.jsxs("ul", {
                  className: "text-sm text-blue-200 space-y-1",
                  children: [
                    s.jsx("li", {
                      children: "• Always enable 2FA on important accounts",
                    }),
                    s.jsx("li", {
                      children:
                        "• Use authenticator apps instead of SMS when possible",
                    }),
                    s.jsx("li", {
                      children: "• Keep backup codes in a secure location",
                    }),
                    s.jsx("li", {
                      children: "• Never share your 2FA codes with anyone",
                    }),
                    s.jsx("li", {
                      children:
                        "• Consider hardware tokens for maximum security",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    const L = z();
    return s.jsxs("div", {
      className: "max-w-4xl mx-auto",
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            s.jsxs("h2", {
              className: "text-2xl font-bold text-white",
              children: ["2FA Code Cracker - Level ", e],
            }),
            s.jsxs("div", {
              className: "flex items-center space-x-6",
              children: [
                s.jsxs("div", {
                  className: "flex items-center space-x-2 text-orange-400",
                  children: [
                    s.jsx(Tt, { className: "w-5 h-5" }),
                    s.jsxs("span", {
                      className: "text-xl font-bold",
                      children: [a, "s"],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "text-green-400",
                  children: ["Round ", b, "/", u],
                }),
              ],
            }),
          ],
        }),
        s.jsxs("div", {
          className: "grid md:grid-cols-2 gap-6 mb-6",
          children: [
            s.jsxs("div", {
              className: "bg-gray-800 border border-gray-700 rounded-lg p-6",
              children: [
                s.jsxs("div", {
                  className: "flex items-center space-x-3 mb-4",
                  children: [
                    s.jsx(Qf, { className: "w-6 h-6 text-blue-400" }),
                    s.jsx("h3", {
                      className: "text-lg font-semibold text-white",
                      children: x,
                    }),
                  ],
                }),
                s.jsx("div", {
                  className: "bg-gray-900 rounded-lg p-4 mb-4",
                  children: s.jsx("div", {
                    className: "text-center",
                    children:
                      x === "Push Notification"
                        ? s.jsxs("div", {
                            className: "space-y-3",
                            children: [
                              s.jsx("div", {
                                className: "text-blue-400 text-lg",
                                children: "Login Attempt Detected",
                              }),
                              s.jsx("div", {
                                className: "text-gray-300 text-sm",
                                children: "Location: New York, NY",
                              }),
                              s.jsx("div", {
                                className: "text-gray-300 text-sm",
                                children: "Device: Chrome Browser",
                              }),
                              s.jsx("button", {
                                onClick: () => r("APPROVE"),
                                className:
                                  "bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors",
                                children: "Approve",
                              }),
                            ],
                          })
                        : s.jsx("div", {
                            className:
                              "text-3xl font-mono font-bold text-green-400 tracking-wider",
                            children: f ? i : "••••••",
                          }),
                  }),
                }),
                !f &&
                  x !== "Push Notification" &&
                  s.jsx("button", {
                    onClick: () => p(!0),
                    className:
                      "w-full bg-yellow-500 text-gray-900 py-2 rounded-lg hover:bg-yellow-600 transition-colors",
                    children: "Show Code (Hint)",
                  }),
              ],
            }),
            s.jsxs("div", {
              className: "bg-gray-800 border border-gray-700 rounded-lg p-6",
              children: [
                s.jsx("h3", {
                  className: "text-lg font-semibold text-white mb-4",
                  children: "Enter Authentication Code",
                }),
                s.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    x !== "Push Notification"
                      ? s.jsx("input", {
                          type: "text",
                          value: n,
                          onChange: (W) => r(W.target.value.toUpperCase()),
                          placeholder: `Enter ${L.length}-character code`,
                          className:
                            "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white text-center text-xl font-mono focus:border-blue-400 focus:outline-none",
                          maxLength: L.length,
                        })
                      : s.jsx("div", {
                          className: "text-center text-gray-400",
                          children:
                            "Use the device on the left to approve the login attempt",
                        }),
                    s.jsx("button", {
                      onClick: P,
                      disabled:
                        x !== "Push Notification" && n.length !== L.length,
                      className:
                        "w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                      children:
                        x === "Push Notification"
                          ? "Check Approval"
                          : "Submit Code",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "mt-4 text-sm text-gray-400",
                  children: [
                    s.jsxs("p", { children: ["Attempts: ", c, "/", h] }),
                    s.jsx("p", { className: "mt-2", children: L.hint }),
                  ],
                }),
              ],
            }),
          ],
        }),
        s.jsx("div", {
          className: "text-center",
          children: s.jsxs("div", {
            className:
              "inline-block bg-gray-800 border border-gray-600 rounded-lg px-6 py-3",
            children: [
              s.jsx("span", {
                className: "text-gray-400",
                children: "Score: ",
              }),
              s.jsxs("span", {
                className: "text-green-400 font-bold",
                children: [Math.round(g), "%"],
              }),
            ],
          }),
        }),
        s.jsxs("div", {
          className:
            "mt-6 bg-blue-500/20 border border-blue-400 rounded-lg p-4",
          children: [
            s.jsx("h4", {
              className: "text-blue-400 font-semibold mb-2",
              children: "How 2FA Works:",
            }),
            s.jsx("p", {
              className: "text-blue-200 text-sm",
              children:
                "Two-Factor Authentication adds an extra layer of security by requiring something you know (password) and something you have (phone, token, or biometric). Enter the code from your authentication device to complete the login process.",
            }),
          ],
        }),
      ],
    });
  },
  Op = ({ level: e, onComplete: t }) => {
    var P;
    const [n, r] = N.useState([]),
      [i, l] = N.useState({ x: 0, y: 0 }),
      [a, o] = N.useState(0),
      [c, d] = N.useState(0),
      [h, y] = N.useState(!1),
      [g, j] = N.useState(!1),
      [v, w] = N.useState(0),
      [b, m] = N.useState(0),
      [u, f] = N.useState(""),
      p = {
        1: {
          size: 8,
          layout: [
            ["S", ".", "W", ".", ".", "W", ".", "."],
            [".", ".", "W", ".", "W", "W", ".", "W"],
            ["W", ".", ".", ".", "W", ".", ".", "."],
            ["W", "W", "W", ".", "W", ".", "W", "."],
            [".", ".", ".", ".", ".", ".", "W", "."],
            [".", "W", "W", "W", ".", "W", "W", "."],
            [".", ".", ".", ".", ".", ".", ".", "."],
            ["W", "W", ".", "W", "W", "W", ".", "E"],
          ],
          keys: 1,
          traps: [
            { x: 1, y: 1, message: "Phishing email detected! -10 points" },
            { x: 4, y: 3, message: "Malware found! -15 points" },
          ],
        },
        2: {
          size: 10,
          layout: [
            ["S", ".", "W", ".", ".", "W", ".", ".", "W", "."],
            [".", ".", "W", ".", "W", "W", ".", "W", ".", "."],
            ["W", ".", ".", ".", "W", ".", ".", ".", "W", "."],
            ["W", "W", "W", ".", "W", ".", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", "W", ".", "W", "W"],
            [".", "W", "W", "W", ".", "W", "W", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", ".", "W", "."],
            ["W", "W", ".", "W", "W", "W", ".", ".", ".", "."],
            [".", ".", ".", ".", ".", ".", ".", "W", "W", "."],
            ["W", ".", "W", ".", "W", ".", ".", ".", ".", "E"],
          ],
          keys: 2,
          traps: [
            { x: 2, y: 1, message: "SQL Injection attempt! -20 points" },
            { x: 5, y: 4, message: "Ransomware detected! -25 points" },
            { x: 7, y: 6, message: "Data breach! -30 points" },
          ],
        },
        3: {
          size: 12,
          layout: [
            ["S", ".", "W", ".", ".", "W", ".", ".", "W", ".", ".", "."],
            [".", ".", "W", ".", "W", "W", ".", "W", ".", ".", "W", "."],
            ["W", ".", ".", ".", "W", ".", ".", ".", "W", ".", ".", "."],
            ["W", "W", "W", ".", "W", ".", "W", ".", ".", ".", "W", "W"],
            [".", ".", ".", ".", ".", ".", "W", ".", "W", "W", ".", "."],
            [".", "W", "W", "W", ".", "W", "W", ".", ".", ".", ".", "W"],
            [".", ".", ".", ".", ".", ".", ".", ".", "W", ".", ".", "."],
            ["W", "W", ".", "W", "W", "W", ".", ".", ".", ".", "W", "."],
            [".", ".", ".", ".", ".", ".", ".", "W", "W", ".", ".", "."],
            ["W", ".", "W", ".", "W", ".", ".", ".", ".", ".", "W", "W"],
            [".", ".", ".", ".", ".", ".", "W", ".", ".", ".", ".", "."],
            ["W", "W", ".", "W", ".", "W", "W", "W", ".", "W", ".", "E"],
          ],
          keys: 3,
          traps: [
            { x: 3, y: 2, message: "Zero-day exploit! -30 points" },
            { x: 6, y: 5, message: "APT detected! -35 points" },
            { x: 8, y: 7, message: "Insider threat! -25 points" },
            { x: 9, y: 9, message: "DDoS attack! -20 points" },
          ],
        },
      };
    N.useEffect(() => {
      x();
    }, [e]);
    const x = () => {
        const T = p[e] || p[1],
          A = [];
        for (let z = 0; z < T.size; z++) {
          const L = [];
          for (let W = 0; W < T.size; W++) {
            const H = T.layout[z][W];
            let ne = "empty";
            switch (H) {
              case "S":
                ne = "start";
                break;
              case "E":
                ne = "end";
                break;
              case "W":
                ne = "wall";
                break;
              default:
                ne = "empty";
                break;
            }
            L.push({ x: W, y: z, type: ne, visited: !1 });
          }
          A.push(L);
        }
        let I = 0;
        for (; I < T.keys; ) {
          const z = Math.floor(Math.random() * T.size),
            L = Math.floor(Math.random() * T.size);
          A[L][z].type === "empty" && ((A[L][z].type = "key"), I++);
        }
        T.traps.forEach((z) => {
          A[z.y] &&
            A[z.y][z.x] &&
            A[z.y][z.x].type === "empty" &&
            ((A[z.y][z.x].type = "trap"), (A[z.y][z.x].content = z.message));
        }),
          r(A),
          l({ x: 0, y: 0 }),
          o(0),
          d(T.keys),
          w(0),
          m(0),
          y(!1),
          j(!1);
      },
      S = (T) => {
        if (h) return;
        let A = i.x,
          I = i.y;
        switch (T) {
          case "up":
            I = Math.max(0, i.y - 1);
            break;
          case "down":
            I = Math.min(n.length - 1, i.y + 1);
            break;
          case "left":
            A = Math.max(0, i.x - 1);
            break;
          case "right":
            A = Math.min(n[0].length - 1, i.x + 1);
            break;
        }
        if (n[I] && n[I][A] && n[I][A].type !== "wall") {
          l({ x: A, y: I }), w(v + 1);
          const z = n[I][A];
          if (z.type === "key") {
            o(a + 1);
            const L = [...n];
            (L[I][A].type = "empty"), r(L);
          } else if (z.type === "trap") {
            m(b + 1),
              f(z.content || "Trap triggered!"),
              setTimeout(() => f(""), 2e3);
            const L = [...n];
            (L[I][A].type = "empty"), r(L);
          } else if (z.type === "end" && a >= c) {
            j(!0), y(!0);
            const L = 100,
              W = Math.min(50, v * 2),
              H = b * 15,
              ne = Math.max(0, L - W - H);
            setTimeout(() => {
              t(e, ne);
            }, 2e3);
          }
        }
      };
    N.useEffect(() => {
      const T = (A) => {
        switch (A.key) {
          case "ArrowUp":
            S("up");
            break;
          case "ArrowDown":
            S("down");
            break;
          case "ArrowLeft":
            S("left");
            break;
          case "ArrowRight":
            S("right");
            break;
        }
      };
      return (
        window.addEventListener("keydown", T),
        () => window.removeEventListener("keydown", T)
      );
    }, [i, h, a, c]);
    const C = (T, A, I) => {
        if (i.x === A && i.y === I) return "bg-blue-500 text-white";
        switch (T.type) {
          case "wall":
            return "bg-gray-600";
          case "start":
            return "bg-green-500";
          case "end":
            return "bg-red-500";
          case "key":
            return "bg-yellow-500";
          case "trap":
            return "bg-orange-500";
          default:
            return "bg-gray-800 border border-gray-700";
        }
      },
      k = (T, A, I) => {
        if (i.x === A && i.y === I) return "🛡️";
        switch (T.type) {
          case "start":
            return "🏠";
          case "end":
            return "🎯";
          case "key":
            return "🔑";
          case "trap":
            return "⚠️";
          default:
            return "";
        }
      };
    return h && g
      ? s.jsx("div", {
          className: "max-w-4xl mx-auto text-center",
          children: s.jsxs("div", {
            className: "bg-gray-800 border border-green-400 rounded-lg p-8",
            children: [
              s.jsx(Cn, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Maze Completed!",
              }),
              s.jsxs("p", {
                className: "text-green-400 text-xl mb-6",
                children: ["Score: ", Math.max(0, 100 - v * 2 - b * 15), "%"],
              }),
              s.jsxs("div", {
                className: "grid grid-cols-3 gap-4 mb-6",
                children: [
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-blue-400",
                        children: v,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Moves Made",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-yellow-400",
                        children: a,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Keys Collected",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "bg-gray-700 rounded-lg p-4",
                    children: [
                      s.jsx("div", {
                        className: "text-2xl font-bold text-red-400",
                        children: b,
                      }),
                      s.jsx("div", {
                        className: "text-sm text-gray-400",
                        children: "Traps Hit",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className:
                  "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                children: [
                  s.jsx("h4", {
                    className: "text-blue-400 font-semibold mb-2",
                    children: "🗺️ Cybersecurity Navigation Tips:",
                  }),
                  s.jsxs("ul", {
                    className: "text-sm text-blue-200 space-y-1",
                    children: [
                      s.jsx("li", {
                        children:
                          "• Plan your path carefully to avoid security threats",
                      }),
                      s.jsx("li", {
                        children:
                          "• Collect all security keys before accessing sensitive areas",
                      }),
                      s.jsx("li", {
                        children:
                          "• Be aware of potential traps and vulnerabilities",
                      }),
                      s.jsx("li", {
                        children:
                          "• Efficient navigation reduces exposure time",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        })
      : s.jsxs(s.Fragment, {
          children: [
            s.jsxs(st, {
              children: [
                s.jsx("title", { children: "Cyber Maze - CyberShields" }),
                s.jsx("meta", {
                  name: "description",
                  content:
                    "Navigate the cyber maze, collect keys, and avoid traps in this fun cybersecurity challenge!",
                }),
                s.jsx("meta", {
                  property: "og:title",
                  content: "Cyber Maze - CyberShields",
                }),
                s.jsx("meta", {
                  property: "og:description",
                  content:
                    "Navigate the cyber maze, collect keys, and avoid traps in this fun cybersecurity challenge!",
                }),
                s.jsx("meta", { property: "og:type", content: "website" }),
                s.jsx("meta", {
                  property: "og:image",
                  content: "/src/assets/quick-heal-logo.png",
                }),
                s.jsx("meta", {
                  property: "og:url",
                  content: "https://yourdomain.com/games/cyber-maze",
                }),
                s.jsx("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                s.jsx("meta", {
                  name: "twitter:title",
                  content: "Cyber Maze - CyberShields",
                }),
                s.jsx("meta", {
                  name: "twitter:description",
                  content:
                    "Navigate the cyber maze, collect keys, and avoid traps in this fun cybersecurity challenge!",
                }),
                s.jsx("meta", {
                  name: "twitter:image",
                  content: "/src/assets/quick-heal-logo.png",
                }),
                s.jsx("link", {
                  rel: "canonical",
                  href: "https://yourdomain.com/games/cyber-maze",
                }),
              ],
            }),
            s.jsxs("div", {
              className: "max-w-6xl mx-auto",
              children: [
                s.jsxs("div", {
                  className: "flex items-center justify-between mb-6",
                  children: [
                    s.jsxs("h2", {
                      className: "text-2xl font-bold text-white",
                      children: ["Cyber Maze - Level ", e],
                    }),
                    s.jsxs("div", {
                      className: "flex items-center space-x-6",
                      children: [
                        s.jsxs("div", {
                          className:
                            "flex items-center space-x-2 text-yellow-400",
                          children: [
                            s.jsx(Ts, {
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                              focusable: "false",
                            }),
                            s.jsxs("span", { children: [a, "/", c] }),
                          ],
                        }),
                        s.jsxs("div", {
                          className: "text-blue-400",
                          children: ["Moves: ", v],
                        }),
                      ],
                    }),
                  ],
                }),
                u &&
                  s.jsxs("div", {
                    className:
                      "mb-4 bg-red-500/20 border border-red-400 rounded-lg p-3 text-center",
                    children: [
                      s.jsx(xe, {
                        className: "w-5 h-5 text-red-400 inline mr-2",
                        "aria-hidden": "true",
                        focusable: "false",
                      }),
                      s.jsx("span", { className: "text-red-200", children: u }),
                    ],
                  }),
                s.jsx("div", {
                  className: "bg-gray-900 p-4 rounded-lg mb-6 overflow-auto",
                  children: s.jsx("div", {
                    className: "grid gap-1",
                    style: {
                      gridTemplateColumns: `repeat(${
                        ((P = n[0]) == null ? void 0 : P.length) || 8
                      }, 1fr)`,
                    },
                    children: n.map((T, A) =>
                      T.map((I, z) =>
                        s.jsx(
                          "div",
                          {
                            className: `w-8 h-8 flex items-center justify-center text-xs rounded ${C(
                              I,
                              z,
                              A
                            )}`,
                            children: k(I, z, A),
                          },
                          `${z}-${A}`
                        )
                      )
                    ),
                  }),
                }),
                s.jsxs("div", {
                  className: "grid grid-cols-2 gap-6",
                  children: [
                    s.jsxs("div", {
                      className:
                        "bg-gray-800 border border-gray-700 rounded-lg p-6",
                      children: [
                        s.jsx("h3", {
                          className: "text-white font-semibold mb-4",
                          children: "Controls",
                        }),
                        s.jsxs("div", {
                          className: "grid grid-cols-3 gap-2",
                          children: [
                            s.jsx("div", {}),
                            s.jsx("button", {
                              onClick: () => S("up"),
                              className:
                                "bg-gray-700 hover:bg-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
                              children: "↑",
                            }),
                            s.jsx("div", {}),
                            s.jsx("button", {
                              onClick: () => S("left"),
                              className:
                                "bg-gray-700 hover:bg-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
                              children: "←",
                            }),
                            s.jsx("div", {
                              className:
                                "bg-blue-500 text-white p-2 rounded text-center",
                              children: "🛡️",
                            }),
                            s.jsx("button", {
                              onClick: () => S("right"),
                              className:
                                "bg-gray-700 hover:bg-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
                              children: "→",
                            }),
                            s.jsx("div", {}),
                            s.jsx("button", {
                              onClick: () => S("down"),
                              className:
                                "bg-gray-700 hover:bg-gray-600 text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400",
                              children: "↓",
                            }),
                            s.jsx("div", {}),
                          ],
                        }),
                        s.jsx("p", {
                          className: "text-gray-400 text-sm mt-4",
                          children: "Use arrow keys or buttons to move",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className:
                        "bg-gray-800 border border-gray-700 rounded-lg p-6",
                      children: [
                        s.jsx("h3", {
                          className: "text-white font-semibold mb-4",
                          children: "Legend",
                        }),
                        s.jsxs("div", {
                          className: "space-y-2 text-sm",
                          children: [
                            s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                s.jsx("div", {
                                  className: "w-4 h-4 bg-blue-500 rounded",
                                }),
                                s.jsx("span", {
                                  className: "text-gray-300",
                                  children: "🛡️ You (Security Agent)",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                s.jsx("div", {
                                  className: "w-4 h-4 bg-yellow-500 rounded",
                                }),
                                s.jsx("span", {
                                  className: "text-gray-300",
                                  children: "🔑 Security Key",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                s.jsx("div", {
                                  className: "w-4 h-4 bg-red-500 rounded",
                                }),
                                s.jsx("span", {
                                  className: "text-gray-300",
                                  children: "🎯 Secure Zone",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                s.jsx("div", {
                                  className: "w-4 h-4 bg-orange-500 rounded",
                                }),
                                s.jsx("span", {
                                  className: "text-gray-300",
                                  children: "⚠️ Security Threat",
                                }),
                              ],
                            }),
                            s.jsxs("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                s.jsx("div", {
                                  className: "w-4 h-4 bg-gray-600 rounded",
                                }),
                                s.jsx("span", {
                                  className: "text-gray-300",
                                  children: "Firewall",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "mt-6 bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                  children: [
                    s.jsx("h4", {
                      className: "text-blue-400 font-semibold mb-2",
                      children: "Objective:",
                    }),
                    s.jsxs("p", {
                      className: "text-blue-200 text-sm",
                      children: [
                        "Navigate through the cyber maze, collect all ",
                        c,
                        " security keys, and reach the secure zone. Avoid security threats (traps) that will reduce your score. Use arrow keys to move.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
  },
  Dp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState({
        public: [],
        internal: [],
        confidential: [],
        restricted: [],
      }),
      [a, o] = N.useState(null),
      [c, d] = N.useState(60),
      [h, y] = N.useState(0),
      [g, j] = N.useState(!1),
      [v, w] = N.useState(0),
      b = {
        1: [
          {
            id: 1,
            content: "Company Blog Post",
            category: "public",
            description: "Marketing content for website",
          },
          {
            id: 2,
            content: "Employee Email",
            category: "internal",
            description: "Internal communication",
          },
          {
            id: 3,
            content: "Customer Credit Card",
            category: "restricted",
            description: "Payment information",
          },
          {
            id: 4,
            content: "Product Brochure",
            category: "public",
            description: "Sales material",
          },
          {
            id: 5,
            content: "HR Policy Document",
            category: "internal",
            description: "Internal procedures",
          },
          {
            id: 6,
            content: "Social Security Number",
            category: "restricted",
            description: "Personal identifier",
          },
          {
            id: 7,
            content: "Press Release",
            category: "public",
            description: "Public announcement",
          },
          {
            id: 8,
            content: "Salary Information",
            category: "confidential",
            description: "Employee compensation",
          },
        ],
        2: [
          {
            id: 9,
            content: "Medical Records",
            category: "restricted",
            description: "Protected health information",
          },
          {
            id: 10,
            content: "Meeting Minutes",
            category: "internal",
            description: "Internal discussions",
          },
          {
            id: 11,
            content: "Trade Secrets",
            category: "restricted",
            description: "Proprietary information",
          },
          {
            id: 12,
            content: "Financial Reports",
            category: "confidential",
            description: "Company financials",
          },
          {
            id: 13,
            content: "Customer List",
            category: "confidential",
            description: "Business contacts",
          },
          {
            id: 14,
            content: "Public Website Content",
            category: "public",
            description: "Publicly available info",
          },
          {
            id: 15,
            content: "Employee Handbook",
            category: "internal",
            description: "Internal guidelines",
          },
          {
            id: 16,
            content: "Legal Contracts",
            category: "confidential",
            description: "Business agreements",
          },
          {
            id: 17,
            content: "Biometric Data",
            category: "restricted",
            description: "Personal biometric info",
          },
          {
            id: 18,
            content: "Training Materials",
            category: "internal",
            description: "Educational content",
          },
        ],
        3: [
          {
            id: 19,
            content: "Source Code",
            category: "confidential",
            description: "Proprietary software",
          },
          {
            id: 20,
            content: "Government ID Numbers",
            category: "restricted",
            description: "Official identification",
          },
          {
            id: 21,
            content: "Marketing Analytics",
            category: "internal",
            description: "Business intelligence",
          },
          {
            id: 22,
            content: "Patent Applications",
            category: "restricted",
            description: "Intellectual property",
          },
          {
            id: 23,
            content: "Public API Documentation",
            category: "public",
            description: "Developer resources",
          },
          {
            id: 24,
            content: "Executive Communications",
            category: "confidential",
            description: "Leadership messages",
          },
          {
            id: 25,
            content: "Security Audit Reports",
            category: "restricted",
            description: "Security assessments",
          },
          {
            id: 26,
            content: "Company Newsletter",
            category: "internal",
            description: "Internal updates",
          },
          {
            id: 27,
            content: "Encryption Keys",
            category: "restricted",
            description: "Cryptographic material",
          },
          {
            id: 28,
            content: "Product Roadmap",
            category: "confidential",
            description: "Strategic planning",
          },
          {
            id: 29,
            content: "Open Source Licenses",
            category: "public",
            description: "Legal compliance",
          },
          {
            id: 30,
            content: "Incident Response Plans",
            category: "restricted",
            description: "Security procedures",
          },
        ],
      },
      m = {
        public: "Information freely available to everyone",
        internal: "Information for employees and authorized personnel",
        confidential: "Sensitive business information with limited access",
        restricted: "Highly sensitive data requiring special protection",
      },
      u = {
        public: "border-green-400 bg-green-400/10",
        internal: "border-blue-400 bg-blue-400/10",
        confidential: "border-yellow-400 bg-yellow-400/10",
        restricted: "border-red-400 bg-red-400/10",
      };
    N.useEffect(() => {
      const S = [...(b[e] || b[1])].sort(() => Math.random() - 0.5);
      r(S), o(S[0]), d(e === 1 ? 60 : e === 2 ? 45 : 30);
    }, [e]),
      N.useEffect(() => {
        if (c > 0 && !g && a) {
          const x = setTimeout(() => d(c - 1), 1e3);
          return () => clearTimeout(x);
        } else (c === 0 || !a) && p();
      }, [c, g, a]);
    const f = (x) => {
        if (!a || g) return;
        a.category === x && y(h + 10), l((k) => ({ ...k, [x]: [...k[x], a] }));
        const C = n.slice(v + 1);
        w(v + 1), C.length > 0 ? o(C[0]) : o(null);
      },
      p = () => {
        j(!0);
        let x = 0;
        Object.entries(i).forEach(([P, T]) => {
          T.forEach((A) => {
            A.category === P && x++;
          });
        });
        const S = Object.values(i).flat().length,
          C = S > 0 ? (x / S) * 100 : 0,
          k = Math.round(C);
        setTimeout(() => {
          t(e, k);
        }, 3e3);
      };
    if (g) {
      let x = 0,
        S = 0;
      Object.entries(i).forEach(([k, P]) => {
        P.forEach((T) => {
          S++, T.category === k && x++;
        });
      });
      const C = S > 0 ? (x / S) * 100 : 0;
      return s.jsx("div", {
        className: "max-w-4xl mx-auto text-center",
        children: s.jsxs("div", {
          className: "bg-gray-800 border border-green-400 rounded-lg p-8",
          children: [
            s.jsx(fa, { className: "w-16 h-16 text-green-400 mx-auto mb-4" }),
            s.jsx("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "Data Sorting Complete!",
            }),
            s.jsxs("p", {
              className: "text-green-400 text-xl mb-6",
              children: ["Accuracy: ", Math.round(C), "%"],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-3 gap-4 mb-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-green-400",
                      children: x,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Correct",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-red-400",
                      children: S - x,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Incorrect",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-blue-400",
                      children: S,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Total Sorted",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "text-left mb-6",
              children: [
                s.jsx("h4", {
                  className: "text-white font-semibold mb-3",
                  children: "Sorting Results:",
                }),
                s.jsx("div", {
                  className: "grid grid-cols-2 gap-4",
                  children: Object.entries(i).map(([k, P]) =>
                    s.jsxs(
                      "div",
                      {
                        className: `border-2 rounded-lg p-3 ${u[k]}`,
                        children: [
                          s.jsx("h5", {
                            className: "font-semibold mb-2 capitalize",
                            children: k,
                          }),
                          s.jsx("div", {
                            className: "space-y-1",
                            children: P.map((T) =>
                              s.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center space-x-2 text-sm",
                                  children: [
                                    T.category === k
                                      ? s.jsx(ee, {
                                          className: "w-4 h-4 text-green-400",
                                          "aria-hidden": "true",
                                          focusable: "false",
                                        })
                                      : s.jsx(xe, {
                                          className: "w-4 h-4 text-red-400",
                                          "aria-hidden": "true",
                                          focusable: "false",
                                        }),
                                    s.jsx("span", {
                                      className:
                                        T.category === k
                                          ? "text-green-300"
                                          : "text-red-300",
                                      children: T.content,
                                    }),
                                  ],
                                },
                                T.id
                              )
                            ),
                          }),
                        ],
                      },
                      k
                    )
                  ),
                }),
              ],
            }),
            s.jsxs("div", {
              className:
                "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
              children: [
                s.jsx("h4", {
                  className: "text-blue-400 font-semibold mb-2",
                  children: "🗂️ Data Classification Tips:",
                }),
                s.jsxs("ul", {
                  className: "text-sm text-blue-200 space-y-1",
                  children: [
                    s.jsx("li", {
                      children:
                        "• Public: No harm if disclosed (marketing materials, press releases)",
                    }),
                    s.jsx("li", {
                      children:
                        "• Internal: For employees only (policies, procedures)",
                    }),
                    s.jsx("li", {
                      children:
                        "• Confidential: Business sensitive (financial data, customer lists)",
                    }),
                    s.jsx("li", {
                      children:
                        "• Restricted: Highly sensitive (personal data, trade secrets)",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      });
    }
    return s.jsxs("div", {
      className: "max-w-6xl mx-auto",
      children: [
        s.jsxs("div", {
          className: "flex items-center justify-between mb-6",
          children: [
            s.jsxs("h2", {
              className: "text-2xl font-bold text-white",
              children: ["Data Sorting Game - Level ", e],
            }),
            s.jsxs("div", {
              className: "flex items-center space-x-6",
              children: [
                s.jsxs("div", {
                  className: "flex items-center space-x-2 text-orange-400",
                  children: [
                    s.jsx(Tt, { className: "w-5 h-5" }),
                    s.jsxs("span", {
                      className: "text-xl font-bold",
                      children: [c, "s"],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "text-green-400",
                  children: [v, "/", n.length],
                }),
              ],
            }),
          ],
        }),
        a &&
          s.jsxs("div", {
            className:
              "bg-gray-800 border border-gray-700 rounded-lg p-8 mb-6 text-center",
            children: [
              s.jsx("h3", {
                className: "text-2xl font-bold text-white mb-4",
                children: "Classify This Data:",
              }),
              s.jsxs("div", {
                className: "bg-gray-900 rounded-lg p-6 mb-4",
                children: [
                  s.jsx("h4", {
                    className: "text-xl font-semibold text-blue-400 mb-2",
                    children: a.content,
                  }),
                  s.jsx("p", {
                    className: "text-gray-300",
                    children: a.description,
                  }),
                ],
              }),
              s.jsx("p", {
                className: "text-gray-400",
                children:
                  "Choose the appropriate security classification level",
              }),
            ],
          }),
        s.jsx("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6",
          children: Object.entries(m).map(([x, S]) =>
            s.jsx(
              "button",
              {
                onClick: () => f(x),
                disabled: !a,
                className: `border-2 rounded-lg p-6 transition-all transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 disabled:opacity-50 disabled:cursor-not-allowed ${u[x]} hover:shadow-lg`,
                tabIndex: 0,
                "aria-label": `Category: ${x}`,
                children: s.jsxs("div", {
                  className: "text-center",
                  children: [
                    s.jsxs("div", {
                      className: "text-2xl mb-2",
                      children: [
                        x === "public" && "🌐",
                        x === "internal" && "🏢",
                        x === "confidential" && "🔒",
                        x === "restricted" && "🚫",
                      ],
                    }),
                    s.jsx("h3", {
                      className: "text-lg font-bold text-white mb-2 capitalize",
                      children: x,
                    }),
                    s.jsx("p", {
                      className: "text-sm text-gray-300",
                      children: S,
                    }),
                    s.jsxs("div", {
                      className: "mt-3 text-xs text-gray-400",
                      children: ["Sorted: ", i[x].length],
                    }),
                  ],
                }),
              },
              x
            )
          ),
        }),
        s.jsx("div", {
          className: "text-center",
          children: s.jsxs("div", {
            className:
              "inline-block bg-gray-800 border border-gray-600 rounded-lg px-6 py-3",
            children: [
              s.jsx("span", {
                className: "text-gray-400",
                children: "Score: ",
              }),
              s.jsxs("span", {
                className: "text-green-400 font-bold",
                children: [h, " points"],
              }),
            ],
          }),
        }),
        s.jsxs("div", {
          className:
            "mt-6 bg-blue-500/20 border border-blue-400 rounded-lg p-4",
          children: [
            s.jsx("h4", {
              className: "text-blue-400 font-semibold mb-2",
              children: "How to Play:",
            }),
            s.jsx("p", {
              className: "text-blue-200 text-sm",
              children:
                "Quickly classify each piece of data into the correct security category. Consider the sensitivity and potential impact if the information were to be disclosed. Speed and accuracy both matter!",
            }),
          ],
        }),
      ],
    });
  },
  Fp = ({ level: e, onComplete: t }) => {
    const [n, r] = N.useState([]),
      [i, l] = N.useState(null),
      [a, o] = N.useState(0),
      [c, d] = N.useState([]),
      [h, y] = N.useState([]),
      [g, j] = N.useState(!1),
      [v, w] = N.useState(0),
      [b, m] = N.useState("select"),
      [u, f] = N.useState(""),
      [p, x] = N.useState(!1),
      S = {
        1: [
          {
            id: 1,
            name: "FreeWiFi",
            security: "Open",
            signal: 95,
            isSecure: !1,
            description: "Public open network",
            vulnerabilities: ["No encryption", "Man-in-the-middle attacks"],
          },
          {
            id: 2,
            name: "HomeNetwork_WEP",
            security: "WEP",
            signal: 80,
            isSecure: !1,
            description: "Old WEP security",
            vulnerabilities: ["Weak encryption", "Easy to crack"],
          },
          {
            id: 3,
            name: "SecureHome_WPA2",
            security: "WPA2",
            signal: 90,
            isSecure: !0,
            description: "WPA2 protected network",
            vulnerabilities: [],
          },
          {
            id: 4,
            name: "CoffeeShop",
            security: "Open",
            signal: 70,
            isSecure: !1,
            description: "Public hotspot",
            vulnerabilities: ["No encryption", "Untrusted network"],
          },
        ],
        2: [
          {
            id: 5,
            name: "Guest_Network",
            security: "WPA",
            signal: 85,
            isSecure: !1,
            description: "WPA security (outdated)",
            vulnerabilities: ["Weak encryption", "TKIP vulnerabilities"],
          },
          {
            id: 6,
            name: "Enterprise_WPA2",
            security: "WPA2",
            signal: 95,
            isSecure: !0,
            description: "Enterprise WPA2",
            vulnerabilities: [],
          },
          {
            id: 7,
            name: "Public_Library",
            security: "Open",
            signal: 60,
            isSecure: !1,
            description: "Library public WiFi",
            vulnerabilities: ["No encryption", "Shared network"],
          },
          {
            id: 8,
            name: "Neighbor_WiFi",
            security: "WEP",
            signal: 45,
            isSecure: !1,
            description: "Neighbor's old router",
            vulnerabilities: ["Weak WEP encryption"],
          },
        ],
        3: [
          {
            id: 9,
            name: "Modern_WPA3",
            security: "WPA3",
            signal: 100,
            isSecure: !0,
            description: "Latest WPA3 security",
            vulnerabilities: [],
          },
          {
            id: 10,
            name: "Corporate_Secure",
            security: "WPA2",
            signal: 90,
            isSecure: !0,
            description: "Corporate network",
            vulnerabilities: [],
          },
          {
            id: 11,
            name: "Hotel_WiFi",
            security: "Open",
            signal: 75,
            isSecure: !1,
            description: "Hotel public network",
            vulnerabilities: ["No encryption", "Shared with strangers"],
          },
          {
            id: 12,
            name: "Legacy_WEP",
            security: "WEP",
            signal: 30,
            isSecure: !1,
            description: "Very old router",
            vulnerabilities: ["Extremely weak", "Deprecated protocol"],
          },
        ],
      },
      C = {
        1: [
          {
            question: "Which WiFi security protocol is the most secure?",
            options: ["Open", "WEP", "WPA2", "No security"],
            correct: 2,
            explanation:
              "WPA2 provides strong encryption and is widely supported.",
          },
          {
            question: "What should you avoid on public WiFi?",
            options: [
              "Browsing news",
              "Online banking",
              "Checking weather",
              "Reading emails",
            ],
            correct: 1,
            explanation:
              "Online banking involves sensitive financial data that could be intercepted.",
          },
        ],
        2: [
          {
            question: "What makes WEP security vulnerable?",
            options: [
              "Strong encryption",
              "Weak encryption keys",
              "Too many users",
              "High signal strength",
            ],
            correct: 1,
            explanation:
              "WEP uses weak encryption that can be easily cracked by attackers.",
          },
          {
            question: "How can you protect yourself on public WiFi?",
            options: [
              "Use HTTP websites",
              "Disable firewall",
              "Use a VPN",
              "Share passwords",
            ],
            correct: 2,
            explanation:
              "A VPN encrypts your traffic, protecting it even on unsecured networks.",
          },
          {
            question: "What is a rogue access point?",
            options: [
              "A broken router",
              "A fake WiFi network",
              "A strong signal",
              "A password-protected network",
            ],
            correct: 1,
            explanation:
              "Rogue access points are fake networks set up by attackers to steal data.",
          },
        ],
        3: [
          {
            question: "What advantage does WPA3 have over WPA2?",
            options: [
              "Faster speed",
              "Better encryption",
              "More range",
              "Cheaper cost",
            ],
            correct: 1,
            explanation:
              "WPA3 provides stronger encryption and better protection against attacks.",
          },
          {
            question: "What is WPS and why is it risky?",
            options: [
              "WiFi Protected Setup - vulnerable to brute force",
              "WiFi Password Security - very secure",
              "WiFi Public Service - for guests",
              "WiFi Private System - for businesses",
            ],
            correct: 0,
            explanation:
              "WPS can be vulnerable to brute force attacks on its PIN system.",
          },
          {
            question:
              "What should you do if you suspect a man-in-the-middle attack?",
            options: [
              "Continue browsing",
              "Disconnect immediately",
              "Change WiFi password",
              "Restart router",
            ],
            correct: 1,
            explanation:
              "Disconnect immediately to prevent data theft and report the incident.",
          },
        ],
      };
    N.useEffect(() => {
      const L = S[e] || S[1],
        W = C[e] || C[1];
      r(L), d(W);
    }, [e]);
    const k = (L) => {
        l(L), L.isSecure ? m("configure") : setTimeout(() => m("quiz"), 2e3);
      },
      P = () => {
        u.length >= 8 && m("quiz");
      },
      T = (L) => {
        const W = [...h, L];
        y(W), a < c.length - 1 ? o(a + 1) : A();
      },
      A = () => {
        let L = 0;
        h.forEach((M, R) => {
          M === c[R].correct && L++;
        }),
          [...h],
          h.forEach((M, R) => {
            M === c[R].correct && L++;
          });
        let W = 0;
        i != null &&
          i.isSecure &&
          ((W = 50),
          u.length >= 12 && (W += 20),
          /[A-Z]/.test(u) &&
            /[a-z]/.test(u) &&
            /\d/.test(u) &&
            /[!@#$%^&*]/.test(u) &&
            (W += 30));
        const H = (L / c.length) * 50,
          ne = Math.min(100, W + H);
        w(ne),
          j(!0),
          setTimeout(() => {
            t(e, ne);
          }, 3e3);
      },
      I = (L) => {
        switch (L) {
          case "Open":
            return "🔓";
          case "WEP":
            return "🔒";
          case "WPA":
            return "🔐";
          case "WPA2":
            return "🛡️";
          case "WPA3":
            return "🔰";
          default:
            return "❓";
        }
      },
      z = (L, W) => {
        if (!W) return "border-red-400 bg-red-400/10";
        switch (L) {
          case "WPA2":
            return "border-green-400 bg-green-400/10";
          case "WPA3":
            return "border-blue-400 bg-blue-400/10";
          default:
            return "border-yellow-400 bg-yellow-400/10";
        }
      };
    if (g)
      return s.jsxs(s.Fragment, {
        children: [
          s.jsxs(st, {
            children: [
              s.jsx("title", { children: "Secure the WiFi - CyberShields" }),
              s.jsx("meta", {
                name: "description",
                content:
                  "Choose the safest WiFi network and learn about wireless security in this interactive game!",
              }),
              s.jsx("meta", {
                property: "og:title",
                content: "Secure the WiFi - CyberShields",
              }),
              s.jsx("meta", {
                property: "og:description",
                content:
                  "Choose the safest WiFi network and learn about wireless security in this interactive game!",
              }),
              s.jsx("meta", { property: "og:type", content: "website" }),
              s.jsx("meta", {
                property: "og:image",
                content: "/src/assets/quick-heal-logo.png",
              }),
              s.jsx("meta", {
                property: "og:url",
                content: "https://yourdomain.com/games/secure-wifi",
              }),
              s.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image",
              }),
              s.jsx("meta", {
                name: "twitter:title",
                content: "Secure the WiFi - CyberShields",
              }),
              s.jsx("meta", {
                name: "twitter:description",
                content:
                  "Choose the safest WiFi network and learn about wireless security in this interactive game!",
              }),
              s.jsx("meta", {
                name: "twitter:image",
                content: "/src/assets/quick-heal-logo.png",
              }),
              s.jsx("link", {
                rel: "canonical",
                href: "https://yourdomain.com/games/secure-wifi",
              }),
            ],
          }),
          s.jsx("div", {
            className: "max-w-4xl mx-auto text-center",
            children: s.jsxs("div", {
              className: "bg-gray-800 border border-green-400 rounded-lg p-8",
              children: [
                s.jsx(nd, {
                  className: "w-16 h-16 text-green-400 mx-auto mb-4",
                }),
                s.jsx("h3", {
                  className: "text-2xl font-bold text-white mb-4",
                  children: "WiFi Security Assessment Complete!",
                }),
                s.jsxs("p", {
                  className: "text-green-400 text-xl mb-6",
                  children: ["Score: ", Math.round(v), "%"],
                }),
                s.jsxs("div", {
                  className: "grid grid-cols-2 gap-4 mb-6",
                  children: [
                    s.jsxs("div", {
                      className: "bg-gray-700 rounded-lg p-4",
                      children: [
                        s.jsx("div", {
                          className: "text-2xl font-bold text-blue-400",
                          children:
                            i != null && i.isSecure ? "Secure" : "Insecure",
                        }),
                        s.jsx("div", {
                          className: "text-sm text-gray-400",
                          children: "Network Choice",
                        }),
                      ],
                    }),
                    s.jsxs("div", {
                      className: "bg-gray-700 rounded-lg p-4",
                      children: [
                        s.jsxs("div", {
                          className: "text-2xl font-bold text-green-400",
                          children: [
                            h.filter((L, W) => {
                              var H;
                              return (
                                L === ((H = c[W]) == null ? void 0 : H.correct)
                              );
                            }).length,
                            "/",
                            c.length,
                          ],
                        }),
                        s.jsx("div", {
                          className: "text-sm text-gray-400",
                          children: "Quiz Correct",
                        }),
                      ],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className:
                    "text-left bg-blue-500/20 border border-blue-400 rounded-lg p-4",
                  children: [
                    s.jsx("h4", {
                      className: "text-blue-400 font-semibold mb-2",
                      children: "📶 WiFi Security Tips:",
                    }),
                    s.jsxs("ul", {
                      className: "text-sm text-blue-200 space-y-1",
                      children: [
                        s.jsx("li", {
                          children:
                            "• Always use WPA2 or WPA3 encryption when available",
                        }),
                        s.jsx("li", {
                          children:
                            "• Avoid public WiFi for sensitive activities",
                        }),
                        s.jsx("li", {
                          children:
                            "• Use strong, unique passwords for your WiFi network",
                        }),
                        s.jsx("li", {
                          children: "• Consider using a VPN on public networks",
                        }),
                        s.jsx("li", {
                          children: "• Regularly update your router's firmware",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      });
    if (b === "select")
      return s.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          s.jsxs("div", {
            className: "text-center mb-8",
            children: [
              s.jsxs("h2", {
                className: "text-2xl font-bold text-white mb-2",
                children: ["Secure the WiFi - Level ", e],
              }),
              s.jsx("p", {
                className: "text-gray-400",
                children: "Choose the most secure WiFi network to connect to",
              }),
            ],
          }),
          s.jsx("div", {
            className: "space-y-4",
            children: n.map((L) =>
              s.jsx(
                "div",
                {
                  tabIndex: 0,
                  role: "button",
                  "aria-label": `WiFi network ${L.name}, security: ${L.security}`,
                  onClick: () => k(L),
                  onKeyDown: (W) =>
                    (W.key === "Enter" || W.key === " ") && k(L),
                  className: `border-2 rounded-lg p-6 cursor-pointer transition-all transform hover:scale-102 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${z(
                    L.security,
                    L.isSecure
                  )}`,
                  style: { outline: "none" },
                  children: s.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      s.jsxs("div", {
                        className: "flex items-center space-x-4",
                        children: [
                          s.jsx("div", {
                            className: "text-3xl",
                            children: I(L.security),
                          }),
                          s.jsxs("div", {
                            children: [
                              s.jsx("h3", {
                                className: "text-lg font-semibold text-white",
                                children: L.name,
                              }),
                              s.jsx("p", {
                                className: "text-gray-400 text-sm",
                                children: L.description,
                              }),
                              s.jsxs("div", {
                                className: "flex items-center space-x-4 mt-2",
                                children: [
                                  s.jsxs("span", {
                                    className: "text-sm text-gray-300",
                                    children: ["Security: ", L.security],
                                  }),
                                  s.jsxs("span", {
                                    className: "text-sm text-gray-300",
                                    children: ["Signal: ", L.signal, "%"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: "text-right",
                        children: [
                          L.isSecure
                            ? s.jsxs("div", {
                                className:
                                  "flex items-center space-x-2 text-green-400",
                                children: [
                                  s.jsx(qt, {
                                    className: "w-5 h-5",
                                    "aria-hidden": "true",
                                    focusable: "false",
                                  }),
                                  s.jsx("span", {
                                    className: "text-sm",
                                    children: "Secure",
                                  }),
                                ],
                              })
                            : s.jsxs("div", {
                                className:
                                  "flex items-center space-x-2 text-red-400",
                                children: [
                                  s.jsx(xe, {
                                    className: "w-5 h-5",
                                    "aria-hidden": "true",
                                    focusable: "false",
                                  }),
                                  s.jsx("span", {
                                    className: "text-sm",
                                    children: "Insecure",
                                  }),
                                ],
                              }),
                          L.vulnerabilities &&
                            L.vulnerabilities.length > 0 &&
                            s.jsxs("div", {
                              className: "mt-2",
                              children: [
                                s.jsx("p", {
                                  className: "text-xs text-red-300",
                                  children: "Vulnerabilities:",
                                }),
                                s.jsx("ul", {
                                  className: "text-xs text-red-200",
                                  children: L.vulnerabilities.map((W, H) =>
                                    s.jsxs("li", { children: ["• ", W] }, H)
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  }),
                },
                L.id
              )
            ),
          }),
        ],
      });
    if (b === "configure" && i)
      return s.jsxs("div", {
        className: "max-w-2xl mx-auto",
        children: [
          s.jsxs("div", {
            className: "text-center mb-8",
            children: [
              s.jsx("h2", {
                className: "text-2xl font-bold text-white mb-2",
                children: "Configure WiFi Security",
              }),
              s.jsxs("p", {
                className: "text-gray-400",
                children: ["Set up a strong password for ", i.name],
              }),
            ],
          }),
          s.jsxs("div", {
            className: "bg-gray-800 border border-gray-700 rounded-lg p-8",
            children: [
              s.jsxs("div", {
                className: "mb-6",
                children: [
                  s.jsx("label", {
                    className: "block text-white font-semibold mb-2",
                    children: "WiFi Password",
                  }),
                  s.jsxs("div", {
                    className: "relative",
                    children: [
                      s.jsx("input", {
                        type: p ? "text" : "password",
                        value: u,
                        onChange: (L) => f(L.target.value),
                        placeholder: "Enter a strong password...",
                        className:
                          "w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white pr-12 focus:border-blue-400 focus:outline-none",
                      }),
                      s.jsx("button", {
                        onClick: () => x(!p),
                        className:
                          "absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white",
                        children: p
                          ? s.jsx(Ku, {
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                              focusable: "false",
                            })
                          : s.jsx(pa, {
                              className: "w-5 h-5",
                              "aria-hidden": "true",
                              focusable: "false",
                            }),
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "mb-6",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                      s.jsx("span", {
                        className: "text-white font-semibold",
                        children: "Password Strength",
                      }),
                      s.jsx("span", {
                        className: "text-sm text-gray-400",
                        children:
                          u.length >= 12
                            ? "Strong"
                            : u.length >= 8
                            ? "Medium"
                            : "Weak",
                      }),
                    ],
                  }),
                  s.jsxs("div", {
                    className: "space-y-2 text-sm",
                    children: [
                      s.jsxs("div", {
                        className: `flex items-center space-x-2 ${
                          u.length >= 8 ? "text-green-400" : "text-gray-400"
                        }`,
                        children: [
                          u.length >= 8
                            ? s.jsx(ee, { className: "w-4 h-4" })
                            : s.jsx("div", {
                                className:
                                  "w-4 h-4 border border-gray-500 rounded-full",
                              }),
                          s.jsx("span", { children: "At least 8 characters" }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: `flex items-center space-x-2 ${
                          /[A-Z]/.test(u) && /[a-z]/.test(u)
                            ? "text-green-400"
                            : "text-gray-400"
                        }`,
                        children: [
                          /[A-Z]/.test(u) && /[a-z]/.test(u)
                            ? s.jsx(ee, { className: "w-4 h-4" })
                            : s.jsx("div", {
                                className:
                                  "w-4 h-4 border border-gray-500 rounded-full",
                              }),
                          s.jsx("span", {
                            children: "Upper and lowercase letters",
                          }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: `flex items-center space-x-2 ${
                          /\d/.test(u) ? "text-green-400" : "text-gray-400"
                        }`,
                        children: [
                          /\d/.test(u)
                            ? s.jsx(ee, { className: "w-4 h-4" })
                            : s.jsx("div", {
                                className:
                                  "w-4 h-4 border border-gray-500 rounded-full",
                              }),
                          s.jsx("span", { children: "Numbers" }),
                        ],
                      }),
                      s.jsxs("div", {
                        className: `flex items-center space-x-2 ${
                          /[!@#$%^&*]/.test(u)
                            ? "text-green-400"
                            : "text-gray-400"
                        }`,
                        children: [
                          /[!@#$%^&*]/.test(u)
                            ? s.jsx(ee, { className: "w-4 h-4" })
                            : s.jsx("div", {
                                className:
                                  "w-4 h-4 border border-gray-500 rounded-full",
                              }),
                          s.jsx("span", { children: "Special characters" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              s.jsx("button", {
                onClick: P,
                disabled: u.length < 8,
                className:
                  "w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed",
                children: "Secure Network",
              }),
            ],
          }),
        ],
      });
    if (b === "quiz") {
      const L = c[a];
      return s.jsxs("div", {
        className: "max-w-4xl mx-auto",
        children: [
          s.jsxs("div", {
            className: "text-center mb-8",
            children: [
              s.jsx("h2", {
                className: "text-2xl font-bold text-white mb-2",
                children: "WiFi Security Quiz",
              }),
              s.jsxs("p", {
                className: "text-gray-400",
                children: ["Question ", a + 1, " of ", c.length],
              }),
            ],
          }),
          !(i != null && i.isSecure) &&
            a === 0 &&
            s.jsx("div", {
              className:
                "bg-red-500/20 border border-red-400 rounded-lg p-4 mb-6",
              children: s.jsxs("div", {
                className: "flex items-center space-x-2",
                children: [
                  s.jsx(xe, { className: "w-5 h-5 text-red-400" }),
                  s.jsx("span", {
                    className: "text-red-200",
                    children:
                      "Warning: You selected an insecure network! This could expose your data to attackers.",
                  }),
                ],
              }),
            }),
          s.jsxs("div", {
            className: "bg-gray-800 border border-gray-700 rounded-lg p-8",
            children: [
              s.jsx("h3", {
                className: "text-xl font-semibold text-white mb-6",
                children: L == null ? void 0 : L.question,
              }),
              s.jsx("div", {
                className: "space-y-3",
                children:
                  L == null
                    ? void 0
                    : L.options.map((W, H) =>
                        s.jsx(
                          "button",
                          {
                            onClick: () => T(H),
                            className:
                              "w-full text-left p-4 rounded-lg border border-gray-600 bg-gray-700 text-white hover:border-blue-400 hover:bg-gray-600 transition-all focus:outline-none focus:ring-2 focus:ring-blue-400",
                            tabIndex: 0,
                            "aria-label": W,
                            children: s.jsxs("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                s.jsx("div", {
                                  className:
                                    "w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold",
                                  children: String.fromCharCode(65 + H),
                                }),
                                s.jsx("span", { children: W }),
                              ],
                            }),
                          },
                          H
                        )
                      ),
              }),
            ],
          }),
        ],
      });
    }
    return null;
  },
  $p = {
    "phishing-spotter": kp,
    "password-challenge": Cp,
    "firewall-defender": Tp,
    "vulnerability-spotter": Ep,
    "cyber-escape": Pp,
    "cyber-facts": Mp,
    "hack-simulation": Ap,
    "cyber-wordle": Lp,
    "drag-drop-quiz": _p,
    "social-media-scanner": zp,
    "malware-typing": Ip,
    "breach-reaction": Rp,
    "2fa-cracker": Wp,
    "cyber-maze": Op,
    "data-sorting": Dp,
    "wifi-security": Fp,
  },
  Up = {
    "phishing-spotter": "Phishing Email Spotter",
    "password-challenge": "Password Strength Challenge",
    "firewall-defender": "Firewall Defender",
    "vulnerability-spotter": "Spot the Vulnerability",
    "cyber-escape": "Cyber Escape Room",
    "cyber-facts": "True or False: Cyber Facts",
    "hack-simulation": "Hack Me If You Can",
    "cyber-wordle": "Cyber Wordle",
    "drag-drop-quiz": "Drag-and-Drop Quiz",
    "social-media-scanner": "Social Media Risk Scanner",
    "malware-typing": "Malware Typing Race",
    "breach-reaction": "Breach Reaction Time",
    "2fa-cracker": "2FA Code Cracker",
    "cyber-maze": "Cyber Maze",
    "data-sorting": "Data Sorting Game",
    "wifi-security": "Secure the WiFi",
  },
  Hp = ({ gameId: e, onBack: t, onUpdateProgress: n, progress: r }) => {
    const [i, l] = N.useState(1),
      [a, o] = N.useState(!0),
      [c, d] = N.useState(0),
      h = $p[e],
      y = Up[e] || "Unknown Game",
      g = (m, u) => {
        n(e, m, u, !0), o(!0);
      },
      j = (m) => {
        l(m), o(!1), d((u) => u + 1);
      },
      v = () => {
        d((m) => m + 1);
      },
      w = (m) => {
        const u = r[`level${m}`];
        return u != null && u.completed ? "completed" : "available";
      },
      b = (m) => {
        const u = r[`level${m}`];
        return (u == null ? void 0 : u.score) || 0;
      };
    return h
      ? a
        ? s.jsxs(s.Fragment, {
            children: [
              s.jsxs(st, {
                children: [
                  s.jsx("title", { children: "CyberShields - Games" }),
                  s.jsx("meta", {
                    name: "description",
                    content:
                      "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                  }),
                  s.jsx("meta", {
                    property: "og:title",
                    content: "CyberShields - Games",
                  }),
                  s.jsx("meta", {
                    property: "og:description",
                    content:
                      "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                  }),
                  s.jsx("meta", { property: "og:type", content: "website" }),
                  s.jsx("meta", {
                    property: "og:image",
                    content: "/src/assets/quick-heal-logo.png",
                  }),
                  s.jsx("meta", {
                    property: "og:url",
                    content: "https://yourdomain.com/games",
                  }),
                  s.jsx("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  s.jsx("meta", {
                    name: "twitter:title",
                    content: "CyberShields - Games",
                  }),
                  s.jsx("meta", {
                    name: "twitter:description",
                    content:
                      "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                  }),
                  s.jsx("meta", {
                    name: "twitter:image",
                    content: "/src/assets/quick-heal-logo.png",
                  }),
                  s.jsx("link", {
                    rel: "canonical",
                    href: "https://yourdomain.com/games",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between mb-8",
                    children: [
                      s.jsxs("button", {
                        onClick: t,
                        className:
                          "flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors",
                        children: [
                          s.jsx(Cs, { className: "w-5 h-5" }),
                          s.jsx("span", { children: "Back to Games" }),
                        ],
                      }),
                      s.jsx("h1", {
                        className: "text-3xl font-bold text-green-400",
                        children: y,
                      }),
                      s.jsx("div", { className: "w-24" }),
                    ],
                  }),
                  s.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
                    children: [1, 2, 3].map((m) => {
                      const u = w(m),
                        f = b(m),
                        p = ["Easy", "Medium", "Hard"];
                      return s.jsx(
                        "div",
                        {
                          tabIndex: 0,
                          role: "button",
                          "aria-label": `Level ${m}: ${p[m - 1]}`,
                          onClick: () => j(m),
                          onKeyDown: (x) =>
                            (x.key === "Enter" || x.key === " ") && j(m),
                          className: `bg-gray-800 border-2 rounded-lg p-6 cursor-pointer transition-all transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                            u === "completed"
                              ? "border-green-400 hover:border-green-300"
                              : "border-gray-600 hover:border-blue-400"
                          }`,
                          style: { outline: "none" },
                          children: s.jsxs("div", {
                            className: "text-center",
                            children: [
                              s.jsx("div", {
                                className:
                                  "flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mx-auto mb-4",
                                children:
                                  u === "completed"
                                    ? s.jsx(br, {
                                        className: "w-8 h-8 text-yellow-400",
                                        "aria-label": "Completed",
                                        "aria-hidden": "false",
                                        focusable: "false",
                                      })
                                    : s.jsx("span", {
                                        className:
                                          "text-2xl font-bold text-white",
                                        children: m,
                                      }),
                              }),
                              s.jsxs("h3", {
                                className: "text-xl font-bold text-white mb-2",
                                children: ["Level ", m, ": ", p[m - 1]],
                              }),
                              u === "completed" &&
                                s.jsx("div", {
                                  className:
                                    "flex items-center justify-center space-x-1 mb-2",
                                  children: [...Array(5)].map((x, S) =>
                                    s.jsx(
                                      td,
                                      {
                                        className: `w-4 h-4 ${
                                          S < Math.floor(f / 20)
                                            ? "text-yellow-400 fill-current"
                                            : "text-gray-600"
                                        }`,
                                        "aria-hidden": "true",
                                        focusable: "false",
                                      },
                                      S
                                    )
                                  ),
                                }),
                              s.jsx("p", {
                                className: "text-gray-400 text-sm mb-4",
                                children:
                                  u === "completed"
                                    ? `Score: ${f}%`
                                    : "Not started",
                              }),
                              s.jsx("button", {
                                className: `w-full py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                                  u === "completed"
                                    ? "bg-green-400 text-gray-900 hover:bg-green-500"
                                    : "bg-blue-500 text-white hover:bg-blue-600"
                                }`,
                                children:
                                  u === "completed"
                                    ? "Play Again"
                                    : "Start Level",
                              }),
                            ],
                          }),
                        },
                        m
                      );
                    }),
                  }),
                ],
              }),
            ],
          })
        : s.jsxs(s.Fragment, {
            children: [
              s.jsxs(st, {
                children: [
                  s.jsx("title", { children: "CyberShields - Games" }),
                  s.jsx("meta", {
                    name: "description",
                    content:
                      "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                  }),
                  s.jsx("meta", {
                    property: "og:title",
                    content: "CyberShields - Games",
                  }),
                  s.jsx("meta", {
                    property: "og:description",
                    content:
                      "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                  }),
                  s.jsx("meta", { property: "og:type", content: "website" }),
                  s.jsx("meta", {
                    property: "og:image",
                    content: "/src/assets/quick-heal-logo.png",
                  }),
                  s.jsx("meta", {
                    property: "og:url",
                    content: "https://yourdomain.com/games",
                  }),
                  s.jsx("meta", {
                    name: "twitter:card",
                    content: "summary_large_image",
                  }),
                  s.jsx("meta", {
                    name: "twitter:title",
                    content: "CyberShields - Games",
                  }),
                  s.jsx("meta", {
                    name: "twitter:description",
                    content:
                      "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                  }),
                  s.jsx("meta", {
                    name: "twitter:image",
                    content: "/src/assets/quick-heal-logo.png",
                  }),
                  s.jsx("link", {
                    rel: "canonical",
                    href: "https://yourdomain.com/games",
                  }),
                ],
              }),
              s.jsxs("div", {
                className: "container mx-auto px-4 py-8",
                children: [
                  s.jsxs("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                      s.jsxs("button", {
                        onClick: () => o(!0),
                        className:
                          "flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors",
                        children: [
                          s.jsx(Cs, { className: "w-5 h-5" }),
                          s.jsx("span", { children: "Back to Levels" }),
                        ],
                      }),
                      s.jsxs("h1", {
                        className: "text-2xl font-bold text-green-400",
                        children: [y, " - Level ", i],
                      }),
                      s.jsxs("button", {
                        onClick: v,
                        className:
                          "flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          s.jsx(Ju, { className: "w-5 h-5" }),
                          s.jsx("span", { children: "Reset" }),
                        ],
                      }),
                    ],
                  }),
                  s.jsx(h, { level: i, onComplete: g }, c),
                ],
              }),
            ],
          })
      : s.jsxs(s.Fragment, {
          children: [
            s.jsxs(st, {
              children: [
                s.jsx("title", { children: "CyberShields - Games" }),
                s.jsx("meta", {
                  name: "description",
                  content:
                    "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                }),
                s.jsx("meta", {
                  property: "og:title",
                  content: "CyberShields - Games",
                }),
                s.jsx("meta", {
                  property: "og:description",
                  content:
                    "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                }),
                s.jsx("meta", { property: "og:type", content: "website" }),
                s.jsx("meta", {
                  property: "og:image",
                  content: "/src/assets/quick-heal-logo.png",
                }),
                s.jsx("meta", {
                  property: "og:url",
                  content: "https://yourdomain.com/games",
                }),
                s.jsx("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                s.jsx("meta", {
                  name: "twitter:title",
                  content: "CyberShields - Games",
                }),
                s.jsx("meta", {
                  name: "twitter:description",
                  content:
                    "Play interactive cybersecurity games and challenges. Learn, compete, and improve your cyber skills!",
                }),
                s.jsx("meta", {
                  name: "twitter:image",
                  content: "/src/assets/quick-heal-logo.png",
                }),
                s.jsx("link", {
                  rel: "canonical",
                  href: "https://yourdomain.com/games",
                }),
              ],
            }),
            s.jsx("div", {
              className: "container mx-auto px-4 py-8",
              children: s.jsxs("div", {
                className: "text-center",
                children: [
                  s.jsx("h2", {
                    className: "text-2xl font-bold text-red-400 mb-4",
                    children: "Game Not Found",
                  }),
                  s.jsx("p", {
                    className: "text-gray-400 mb-4",
                    children: "This game is coming soon!",
                  }),
                  s.jsx("button", {
                    onClick: t,
                    className:
                      "bg-green-400 text-gray-900 px-6 py-2 rounded-lg hover:bg-green-500 transition-colors",
                    children: "Back to Games",
                  }),
                ],
              }),
            }),
          ],
        });
  },
  Io = [
    {
      id: "general-threats",
      title: "🔐 General Cyber Threats",
      description: "Basic cybersecurity threats and concepts",
      questions: [
        {
          id: 1,
          question: "What is a cyber threat?",
          options: [
            "A physical attack",
            "A potential malicious attempt to damage or steal data",
            "A backup system",
            "A web browser",
          ],
          correct: 1,
          explanation:
            "A cyber threat is any potential malicious attempt to damage, steal, or disrupt digital systems and data.",
        },
        {
          id: 2,
          question: "Which of the following is a common cyber threat?",
          options: ["HTTP", "VPN", "Phishing", "FTP"],
          correct: 2,
          explanation:
            "Phishing is a common cyber threat where attackers try to steal sensitive information by impersonating legitimate entities.",
        },
        {
          id: 3,
          question: "Malware is a combination of:",
          options: [
            "Malicious + Software",
            "Manual + Ware",
            "Mail + Hardware",
            "Mail + Software",
          ],
          correct: 0,
          explanation:
            'Malware is short for "malicious software" - any software designed to harm or exploit systems.',
        },
        {
          id: 4,
          question: "A cyber threat can cause:",
          options: [
            "Faster internet",
            "Data breach",
            "Battery recharge",
            "Internet bill payment",
          ],
          correct: 1,
          explanation:
            "Cyber threats can lead to data breaches, where sensitive information is stolen or compromised.",
        },
        {
          id: 5,
          question: "The goal of cyber attackers is typically:",
          options: [
            "Improve system performance",
            "Encrypt data for safety",
            "Steal or corrupt data",
            "Boost antivirus speed",
          ],
          correct: 2,
          explanation:
            "Cyber attackers typically aim to steal sensitive data, corrupt systems, or disrupt operations for financial gain or malicious purposes.",
        },
      ],
    },
    {
      id: "malware-types",
      title: "🦠 Types of Malware",
      description: "Learn about different types of malicious software",
      questions: [
        {
          id: 6,
          question:
            "Which malware replicates itself to spread to other systems?",
          options: ["Trojan", "Worm", "Spyware", "Ransomware"],
          correct: 1,
          explanation:
            "Worms are self-replicating malware that can spread across networks without user interaction.",
        },
        {
          id: 7,
          question: "Ransomware usually demands:",
          options: [
            "A social media follow",
            "A reward",
            "Money to unlock files",
            "A password reset",
          ],
          correct: 2,
          explanation:
            "Ransomware encrypts files and demands payment (usually cryptocurrency) to provide the decryption key.",
        },
        {
          id: 8,
          question: "A Trojan horse:",
          options: [
            "Encrypts data",
            "Disguises as legitimate software",
            "Fixes bugs",
            "Backs up data",
          ],
          correct: 1,
          explanation:
            "Trojans disguise themselves as legitimate software to trick users into installing them.",
        },
        {
          id: 9,
          question: "Spyware is used to:",
          options: [
            "Block ads",
            "Secure systems",
            "Monitor user activity secretly",
            "Format hard drives",
          ],
          correct: 2,
          explanation:
            "Spyware secretly monitors and collects user information without their knowledge or consent.",
        },
        {
          id: 10,
          question: "Adware is primarily used to:",
          options: [
            "Display unwanted ads",
            "Encrypt data",
            "Provide antivirus updates",
            "Scan QR codes",
          ],
          correct: 0,
          explanation:
            "Adware displays unwanted advertisements and can track user behavior for marketing purposes.",
        },
      ],
    },
    {
      id: "phishing-social",
      title: "📧 Phishing and Social Engineering",
      description: "Understand social engineering and phishing attacks",
      questions: [
        {
          id: 11,
          question: "Phishing attacks aim to:",
          options: [
            "Deliver games",
            "Steal sensitive information",
            "Boost your WiFi speed",
            "Send newsletters",
          ],
          correct: 1,
          explanation:
            "Phishing attacks trick users into revealing sensitive information like passwords, credit card numbers, or personal data.",
        },
        {
          id: 12,
          question: "Which is NOT a form of phishing?",
          options: [
            "Spear phishing",
            "Vishing",
            "Smishing",
            "Spamming antivirus updates",
          ],
          correct: 3,
          explanation:
            "Spamming antivirus updates is not a form of phishing. The others are: spear phishing (targeted), vishing (voice), and smishing (SMS).",
        },
        {
          id: 13,
          question: "Spear phishing targets:",
          options: [
            "Random users",
            "Specific individuals",
            "Entire internet",
            "Bots only",
          ],
          correct: 1,
          explanation:
            "Spear phishing is a targeted attack aimed at specific individuals or organizations, often using personal information.",
        },
        {
          id: 14,
          question: "Smishing involves:",
          options: [
            "Fake phone calls",
            "Social media attacks",
            "Fraudulent text messages",
            "Fake QR codes",
          ],
          correct: 2,
          explanation:
            "Smishing (SMS phishing) uses fraudulent text messages to trick victims into revealing information or clicking malicious links.",
        },
        {
          id: 15,
          question: "Vishing uses:",
          options: ["Voice calls", "Videos", "Email", "Biometrics"],
          correct: 0,
          explanation:
            "Vishing (voice phishing) uses phone calls to trick victims into revealing sensitive information.",
        },
      ],
    },
    {
      id: "dos-attacks",
      title: "💣 Denial-of-Service (DoS)",
      description: "Learn about DoS and DDoS attacks",
      questions: [
        {
          id: 16,
          question: "What is a DoS attack?",
          options: [
            "Download of Software",
            "Denial of Service",
            "Disk Operating System",
            "Domain of Security",
          ],
          correct: 1,
          explanation:
            "DoS stands for Denial of Service - an attack that makes a system unavailable to its intended users.",
        },
        {
          id: 17,
          question: "A DDoS attack uses:",
          options: [
            "One computer",
            "Multiple computers",
            "Only smartphones",
            "A printer",
          ],
          correct: 1,
          explanation:
            "DDoS (Distributed Denial of Service) attacks use multiple compromised computers to overwhelm a target.",
        },
        {
          id: 18,
          question: "The main purpose of a DoS attack is:",
          options: [
            "Protect servers",
            "Overwhelm a system",
            "Speed up a website",
            "Secure networks",
          ],
          correct: 1,
          explanation:
            "DoS attacks aim to overwhelm a system or network, making it unavailable to legitimate users.",
        },
        {
          id: 19,
          question: "Botnets are used in:",
          options: [
            "Antivirus",
            "Programming games",
            "Distributed attacks",
            "VPNs",
          ],
          correct: 2,
          explanation:
            "Botnets are networks of compromised computers often used to launch distributed attacks like DDoS.",
        },
        {
          id: 20,
          question: "Which is a tool used for DDoS attacks?",
          options: ["LOIC", "Kali Linux", "Notepad", "PowerPoint"],
          correct: 0,
          explanation:
            "LOIC (Low Orbit Ion Cannon) is a network stress testing tool that has been used for DDoS attacks.",
        },
      ],
    },
    {
      id: "network-web",
      title: "🔓 Network & Web Attacks",
      description: "Understand network and web-based security threats",
      questions: [
        {
          id: 21,
          question: "Man-in-the-Middle (MitM) attacks occur when:",
          options: [
            "Data is encrypted",
            "An attacker intercepts communication",
            "Firewalls are installed",
            "Users log in securely",
          ],
          correct: 1,
          explanation:
            "MitM attacks happen when an attacker secretly intercepts and potentially alters communication between two parties.",
        },
        {
          id: 22,
          question: "Which of the following is used to prevent MitM attacks?",
          options: ["VPN", "DNS", "Plaintext protocols", "Cookies"],
          correct: 0,
          explanation:
            "VPNs encrypt communications and help prevent MitM attacks by creating secure tunnels.",
        },
        {
          id: 23,
          question: "SQL Injection targets:",
          options: [
            "Operating system",
            "Programming language",
            "Database queries",
            "Audio drivers",
          ],
          correct: 2,
          explanation:
            "SQL injection attacks target database queries by inserting malicious SQL code through application inputs.",
        },
        {
          id: 24,
          question: "Cross-Site Scripting (XSS) is used to:",
          options: [
            "Run malicious scripts in the browser",
            "Access cloud storage",
            "Open emails",
            "Redirect to HTTPS",
          ],
          correct: 0,
          explanation:
            "XSS attacks inject malicious scripts into web pages that execute in users' browsers.",
        },
        {
          id: 25,
          question: "DNS spoofing is a type of:",
          options: [
            "Encryption",
            "Network attack",
            "Antivirus tool",
            "Patch management",
          ],
          correct: 1,
          explanation:
            "DNS spoofing is a network attack that redirects domain name queries to malicious IP addresses.",
        },
      ],
    },
    {
      id: "insider-threats",
      title: "🧑‍💻 Insider Threats & Human Factors",
      description: "Learn about threats from within organizations",
      questions: [
        {
          id: 26,
          question: "Insider threats originate from:",
          options: [
            "Hackers abroad",
            "Employees or trusted users",
            "Antivirus software",
            "IoT devices",
          ],
          correct: 1,
          explanation:
            "Insider threats come from people within the organization who have authorized access to systems.",
        },
        {
          id: 27,
          question:
            "Which of the following is NOT a form of social engineering?",
          options: ["Phishing", "Ransomware", "Baiting", "Pretexting"],
          correct: 1,
          explanation:
            "Ransomware is malware, not social engineering. The others manipulate people to reveal information or perform actions.",
        },
        {
          id: 28,
          question: "Shoulder surfing means:",
          options: [
            "Surfing on the internet",
            "Watching someone's screen secretly",
            "Browsing on a VPN",
            "Uploading files",
          ],
          correct: 1,
          explanation:
            "Shoulder surfing is observing someone's screen or keyboard to steal passwords or sensitive information.",
        },
        {
          id: 29,
          question: "Baiting attacks rely on:",
          options: [
            "Popups",
            "Curiosity of victims",
            "Secure DNS",
            "Antivirus apps",
          ],
          correct: 1,
          explanation:
            "Baiting attacks use human curiosity, often leaving infected USB drives or offering free downloads to lure victims.",
        },
        {
          id: 30,
          question: "Pretexting involves:",
          options: [
            "Code injection",
            "Lying to gain access",
            "File deletion",
            "Keylogging",
          ],
          correct: 1,
          explanation:
            "Pretexting uses fabricated scenarios or lies to trick people into revealing information or granting access.",
        },
      ],
    },
    {
      id: "security-measures",
      title: "🛡️ Security Measures",
      description: "Essential cybersecurity defense mechanisms",
      questions: [
        {
          id: 31,
          question: "The first line of defense in cybersecurity is:",
          options: [
            "Antivirus software",
            "Employees",
            "Firewalls",
            "Encryption",
          ],
          correct: 1,
          explanation:
            "Employees are often considered the first line of defense as they can identify and prevent many attacks through awareness.",
        },
        {
          id: 32,
          question: "What does a firewall do?",
          options: [
            "Increases battery life",
            "Blocks unauthorized access",
            "Formats hard disks",
            "Uploads backups",
          ],
          correct: 1,
          explanation:
            "Firewalls monitor and control network traffic, blocking unauthorized access while allowing legitimate communication.",
        },
        {
          id: 33,
          question: "Encryption protects data by:",
          options: [
            "Deleting it",
            "Making it unreadable without a key",
            "Uploading it to the cloud",
            "Making it public",
          ],
          correct: 1,
          explanation:
            "Encryption converts data into an unreadable format that requires a key to decrypt and access.",
        },
        {
          id: 34,
          question: "2FA stands for:",
          options: [
            "Two-Factor Authentication",
            "Two-File Agreement",
            "File Authorization",
            "Two-Firewall Access",
          ],
          correct: 0,
          explanation:
            "Two-Factor Authentication adds an extra layer of security by requiring two different forms of verification.",
        },
        {
          id: 35,
          question: "Which of the following is an example of 2FA?",
          options: [
            "Password only",
            "Username only",
            "Password + OTP",
            "None of the above",
          ],
          correct: 2,
          explanation:
            "Password plus OTP (One-Time Password) is a common example of two-factor authentication.",
        },
      ],
    },
    {
      id: "threat-actors",
      title: "🧠 Threat Actors and Motives",
      description: "Understanding different types of cyber attackers",
      questions: [
        {
          id: 36,
          question: "A script kiddie is:",
          options: [
            "A professional hacker",
            "A hacker using premade tools",
            "A cybersecurity teacher",
            "An antivirus engineer",
          ],
          correct: 1,
          explanation:
            "Script kiddies are inexperienced hackers who use existing tools and scripts rather than creating their own.",
        },
        {
          id: 37,
          question: "Hacktivists hack for:",
          options: [
            "Money",
            "Fame",
            "Political or social reasons",
            "Technical testing",
          ],
          correct: 2,
          explanation:
            "Hacktivists are motivated by political or social causes, using hacking to promote their agenda.",
        },
        {
          id: 38,
          question: "Cybercriminals aim to:",
          options: [
            "Fix software",
            "Improve system speed",
            "Steal, damage, or exploit",
            "Develop open-source tools",
          ],
          correct: 2,
          explanation:
            "Cybercriminals are motivated by financial gain and seek to steal, damage, or exploit systems for profit.",
        },
        {
          id: 39,
          question: "A state-sponsored threat actor is backed by:",
          options: [
            "Private companies",
            "Government agencies",
            "Individual bloggers",
            "NGOs",
          ],
          correct: 1,
          explanation:
            "State-sponsored actors are supported by government agencies and often have significant resources and advanced capabilities.",
        },
        {
          id: 40,
          question: "Advanced Persistent Threats (APTs) are:",
          options: [
            "Short-term malware",
            "Ongoing, stealthy threats",
            "Temporary disruptions",
            "Antivirus alerts",
          ],
          correct: 1,
          explanation:
            "APTs are sophisticated, long-term attacks that remain hidden in systems to steal data over extended periods.",
        },
      ],
    },
    {
      id: "data-privacy",
      title: "💾 Data Threats & Privacy",
      description: "Data protection and privacy concerns",
      questions: [
        {
          id: 41,
          question: "Data breach refers to:",
          options: [
            "Data storage",
            "Authorized data download",
            "Unauthorized access to data",
            "System backup",
          ],
          correct: 2,
          explanation:
            "A data breach occurs when unauthorized parties gain access to confidential or sensitive data.",
        },
        {
          id: 42,
          question: "Which is a cause of data breaches?",
          options: [
            "Software updates",
            "Weak passwords",
            "Strong encryption",
            "Cloud backups",
          ],
          correct: 1,
          explanation:
            "Weak passwords are a common vulnerability that can lead to unauthorized access and data breaches.",
        },
        {
          id: 43,
          question: "Which file is commonly targeted for personal data?",
          options: [".mp4", ".jpg", ".csv", ".log"],
          correct: 2,
          explanation:
            "CSV files often contain structured data including personal information, making them attractive targets.",
        },
        {
          id: 44,
          question: "Which is a personal data identifier (PII)?",
          options: [
            "IP address",
            "Social Security Number",
            "Browser type",
            "MAC address",
          ],
          correct: 1,
          explanation:
            "Social Security Numbers are personally identifiable information (PII) that can be used to identify individuals.",
        },
        {
          id: 45,
          question: "GDPR helps protect:",
          options: [
            "Server hardware",
            "User privacy in Europe",
            "American databases",
            "Mobile signal",
          ],
          correct: 1,
          explanation:
            "GDPR (General Data Protection Regulation) is European legislation that protects user privacy and data rights.",
        },
      ],
    },
    {
      id: "mobile-iot",
      title: "📱 Mobile & IoT Threats",
      description: "Security risks in mobile and IoT devices",
      questions: [
        {
          id: 46,
          question: "Which is a mobile-based threat?",
          options: ["Rootkit", "SIM swapping", "Firewall", "Patch update"],
          correct: 1,
          explanation:
            "SIM swapping is an attack where criminals transfer a victim's phone number to their own SIM card.",
        },
        {
          id: 47,
          question: "Mobile malware spreads via:",
          options: [
            "Power banks",
            "App downloads",
            "Cloud sync",
            "Wi-Fi boosters",
          ],
          correct: 1,
          explanation:
            "Mobile malware commonly spreads through malicious app downloads from unofficial sources.",
        },
        {
          id: 48,
          question: "IoT stands for:",
          options: [
            "Internet of Things",
            "Input on Transfer",
            "Internal on Time",
            "Interface of TCP",
          ],
          correct: 0,
          explanation:
            "IoT (Internet of Things) refers to connected devices that can communicate over the internet.",
        },
        {
          id: 49,
          question: "A major risk in IoT devices is:",
          options: [
            "Manual updates",
            "Default passwords",
            "Strong encryption",
            "5G support",
          ],
          correct: 1,
          explanation:
            "Many IoT devices ship with default passwords that users never change, creating security vulnerabilities.",
        },
        {
          id: 50,
          question: "Smart home devices can be hacked if:",
          options: [
            "VPN is used",
            "Devices are isolated",
            "Software is outdated",
            "Admin access is revoked",
          ],
          correct: 2,
          explanation:
            "Outdated software contains known vulnerabilities that can be exploited by attackers.",
        },
      ],
    },
  ],
  Vp = ({ onBack: e }) => {
    const [t, n] = N.useState(""),
      [r, i] = N.useState(0),
      [l, a] = N.useState(null),
      [o, c] = N.useState(!1),
      [d, h] = N.useState(0),
      [y, g] = N.useState(30),
      [j, v] = N.useState(!1),
      [w, b] = N.useState([]),
      m = Io.find((k) => k.id === t),
      u = (m == null ? void 0 : m.questions) || [],
      f = u[r];
    N.useEffect(() => {
      if (t && !j && y > 0) {
        const k = setTimeout(() => g(y - 1), 1e3);
        return () => clearTimeout(k);
      } else y === 0 && !o && x(-1);
    }, [y, t, j, o]);
    const p = (k) => {
        n(k), i(0), a(null), c(!1), h(0), g(30), v(!1), b([]);
      },
      x = (k) => {
        a(k), c(!0);
        const P = [...w, k];
        b(P),
          k === f.correct && h(d + 1),
          setTimeout(() => {
            r < u.length - 1 ? (i(r + 1), a(null), c(!1), g(30)) : v(!0);
          }, 2e3);
      },
      S = () => {
        n(""), i(0), a(null), c(!1), h(0), g(30), v(!1), b([]);
      },
      C = () => {
        const k = (d / u.length) * 100;
        return k >= 80
          ? "text-green-400"
          : k >= 60
          ? "text-yellow-400"
          : "text-red-400";
      };
    if (!t)
      return s.jsxs("div", {
        className: "container mx-auto px-4 py-8",
        children: [
          s.jsxs("div", {
            className: "flex items-center justify-between mb-8",
            children: [
              s.jsxs("button", {
                onClick: e,
                className:
                  "flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors",
                children: [
                  s.jsx(Cs, { className: "w-5 h-5" }),
                  s.jsx("span", { children: "Back to Home" }),
                ],
              }),
              s.jsx("h1", {
                className: "text-3xl font-bold text-green-400",
                children: "Cybersecurity Quiz",
              }),
              s.jsx("div", { className: "w-24" }),
            ],
          }),
          s.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: Io.map((k) =>
              s.jsxs(
                "div",
                {
                  onClick: () => p(k.id),
                  className:
                    "bg-gray-800 border border-gray-700 rounded-lg p-6 cursor-pointer transform hover:scale-105 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/20",
                  children: [
                    s.jsx("div", {
                      className:
                        "flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mb-4",
                      children: s.jsx(Bs, { className: "w-6 h-6 text-white" }),
                    }),
                    s.jsx("h3", {
                      className: "text-lg font-semibold text-white mb-2",
                      children: k.title,
                    }),
                    s.jsx("p", {
                      className: "text-sm text-gray-400 mb-4",
                      children: k.description,
                    }),
                    s.jsxs("div", {
                      className:
                        "flex items-center justify-between text-xs text-gray-400",
                      children: [
                        s.jsxs("span", {
                          children: [k.questions.length, " Questions"],
                        }),
                        s.jsx("span", { children: "30s per question" }),
                      ],
                    }),
                  ],
                },
                k.id
              )
            ),
          }),
        ],
      });
    if (j) {
      const k = (d / u.length) * 100;
      return s.jsx("div", {
        className: "container mx-auto px-4 py-8 max-w-2xl",
        children: s.jsxs("div", {
          className:
            "bg-gray-800 border border-gray-700 rounded-lg p-8 text-center",
          children: [
            s.jsx(br, { className: `w-16 h-16 mx-auto mb-4 ${C()}` }),
            s.jsx("h2", {
              className: "text-3xl font-bold text-white mb-4",
              children: "Quiz Completed!",
            }),
            s.jsxs("div", {
              className: `text-6xl font-bold mb-4 ${C()}`,
              children: [Math.round(k), "%"],
            }),
            s.jsxs("p", {
              className: "text-xl text-gray-300 mb-6",
              children: [
                "You scored ",
                d,
                " out of ",
                u.length,
                " questions correctly",
              ],
            }),
            s.jsxs("div", {
              className: "grid grid-cols-2 gap-4 mb-6",
              children: [
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-green-400",
                      children: d,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Correct",
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "bg-gray-700 rounded-lg p-4",
                  children: [
                    s.jsx("div", {
                      className: "text-2xl font-bold text-red-400",
                      children: u.length - d,
                    }),
                    s.jsx("div", {
                      className: "text-sm text-gray-400",
                      children: "Incorrect",
                    }),
                  ],
                }),
              ],
            }),
            s.jsxs("div", {
              className: "flex space-x-4 justify-center",
              children: [
                s.jsx("button", {
                  onClick: S,
                  className:
                    "bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors",
                  children: "Try Another Category",
                }),
                s.jsx("button", {
                  onClick: () => p(t),
                  className:
                    "bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors",
                  children: "Retake Quiz",
                }),
              ],
            }),
          ],
        }),
      });
    }
    return s.jsxs(s.Fragment, {
      children: [
        s.jsxs(st, {
          children: [
            s.jsx("title", { children: "CyberShields - Cybersecurity Quiz" }),
            s.jsx("meta", {
              name: "description",
              content:
                "Test your cybersecurity knowledge with our interactive quiz. Challenge yourself and learn new facts!",
            }),
            s.jsx("meta", {
              property: "og:title",
              content: "CyberShields - Cybersecurity Quiz",
            }),
            s.jsx("meta", {
              property: "og:description",
              content:
                "Test your cybersecurity knowledge with our interactive quiz. Challenge yourself and learn new facts!",
            }),
            s.jsx("meta", { property: "og:type", content: "website" }),
            s.jsx("meta", {
              property: "og:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("meta", {
              property: "og:url",
              content: "https://yourdomain.com/quiz",
            }),
            s.jsx("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            s.jsx("meta", {
              name: "twitter:title",
              content: "CyberShields - Cybersecurity Quiz",
            }),
            s.jsx("meta", {
              name: "twitter:description",
              content:
                "Test your cybersecurity knowledge with our interactive quiz. Challenge yourself and learn new facts!",
            }),
            s.jsx("meta", {
              name: "twitter:image",
              content: "/src/assets/quick-heal-logo.png",
            }),
            s.jsx("link", {
              rel: "canonical",
              href: "https://yourdomain.com/quiz",
            }),
          ],
        }),
        s.jsxs("div", {
          className: "container mx-auto px-4 py-8 max-w-4xl",
          children: [
            s.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                s.jsxs("button", {
                  onClick: S,
                  className:
                    "flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors",
                  children: [
                    s.jsx(Cs, { className: "w-5 h-5" }),
                    s.jsx("span", { children: "Back to Categories" }),
                  ],
                }),
                s.jsxs("div", {
                  className: "text-center",
                  children: [
                    s.jsx("h2", {
                      className: "text-xl font-bold text-white",
                      children: m == null ? void 0 : m.title,
                    }),
                    s.jsxs("p", {
                      className: "text-gray-400",
                      children: ["Question ", r + 1, " of ", u.length],
                    }),
                  ],
                }),
                s.jsxs("div", {
                  className: "flex items-center space-x-2 text-blue-400",
                  children: [
                    s.jsx(Tt, { className: "w-5 h-5" }),
                    s.jsxs("span", {
                      className: "text-xl font-bold",
                      children: [y, "s"],
                    }),
                  ],
                }),
              ],
            }),
            s.jsx("div", {
              className: "w-full bg-gray-700 rounded-full h-2 mb-8",
              children: s.jsx("div", {
                className:
                  "bg-blue-400 h-2 rounded-full transition-all duration-300",
                style: { width: `${((r + 1) / u.length) * 100}%` },
              }),
            }),
            s.jsxs("div", {
              className:
                "bg-gray-800 border border-gray-700 rounded-lg p-8 mb-6",
              children: [
                s.jsx("h3", {
                  className: "text-2xl font-semibold text-white mb-6",
                  children: f == null ? void 0 : f.question,
                }),
                s.jsx("div", {
                  className: "space-y-3",
                  children:
                    f == null
                      ? void 0
                      : f.options.map((k, P) => {
                          let T =
                            "w-full text-left p-4 rounded-lg border-2 transition-all transform hover:scale-102 ";
                          return (
                            o
                              ? P === f.correct
                                ? (T +=
                                    "border-green-400 bg-green-400/20 text-green-400")
                                : P === l && P !== f.correct
                                ? (T +=
                                    "border-red-400 bg-red-400/20 text-red-400")
                                : (T +=
                                    "border-gray-600 bg-gray-700 text-gray-400")
                              : (T +=
                                  "border-gray-600 bg-gray-700 text-white hover:border-blue-400 hover:bg-gray-600"),
                            (T +=
                              " focus:outline-none focus:ring-2 focus:ring-blue-400"),
                            s.jsx(
                              "button",
                              {
                                onClick: () => !o && x(P),
                                disabled: o,
                                className: T,
                                tabIndex: 0,
                                "aria-label": k,
                                children: s.jsxs("div", {
                                  className: "flex items-center space-x-3",
                                  children: [
                                    s.jsx("div", {
                                      className:
                                        "w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold",
                                      children: String.fromCharCode(65 + P),
                                    }),
                                    s.jsx("span", { children: k }),
                                    o &&
                                      P === f.correct &&
                                      s.jsx(ee, {
                                        className:
                                          "w-5 h-5 text-green-400 ml-auto",
                                        "aria-hidden": "true",
                                        focusable: "false",
                                      }),
                                    o &&
                                      P === l &&
                                      P !== f.correct &&
                                      s.jsx(Qt, {
                                        className:
                                          "w-5 h-5 text-red-400 ml-auto",
                                        "aria-hidden": "true",
                                        focusable: "false",
                                      }),
                                  ],
                                }),
                              },
                              P
                            )
                          );
                        }),
                }),
                o &&
                  f.explanation &&
                  s.jsx("div", {
                    className:
                      "mt-6 p-4 bg-blue-500/20 border border-blue-400 rounded-lg",
                    children: s.jsxs("p", {
                      className: "text-blue-200",
                      children: [
                        s.jsx("strong", { children: "Explanation:" }),
                        " ",
                        f.explanation,
                      ],
                    }),
                  }),
              ],
            }),
            s.jsx("div", {
              className: "text-center",
              children: s.jsxs("p", {
                className: "text-gray-400",
                children: [
                  "Current Score: ",
                  s.jsxs("span", {
                    className: "text-green-400 font-bold",
                    children: [d, "/", r + (o ? 1 : 0)],
                  }),
                ],
              }),
            }),
          ],
        }),
      ],
    });
  },
  Bp = ({ progress: e }) => {
    const n = Object.keys(e).filter((l) => {
        var o, c, d;
        const a = e[l];
        return (
          ((o = a == null ? void 0 : a.level1) == null
            ? void 0
            : o.completed) &&
          ((c = a == null ? void 0 : a.level2) == null
            ? void 0
            : c.completed) &&
          ((d = a == null ? void 0 : a.level3) == null ? void 0 : d.completed)
        );
      }).length,
      i =
        Object.values(e).reduce((l, a) => {
          var c, d, h;
          const o = [
            ((c = a == null ? void 0 : a.level1) == null ? void 0 : c.score) ||
              0,
            ((d = a == null ? void 0 : a.level2) == null ? void 0 : d.score) ||
              0,
            ((h = a == null ? void 0 : a.level3) == null ? void 0 : h.score) ||
              0,
          ];
          return l + o.reduce((y, g) => y + g, 0);
        }, 0) / Math.max(1, Object.keys(e).length * 3);
    return s.jsxs("div", {
      className: "flex items-center space-x-4",
      children: [
        s.jsxs("div", {
          className:
            "flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-600",
          children: [
            s.jsx(br, { className: "w-4 h-4 text-yellow-400" }),
            s.jsxs("span", {
              className: "text-sm text-white",
              children: [n, "/", 20],
            }),
          ],
        }),
        s.jsxs("div", {
          className:
            "flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg border border-gray-600",
          children: [
            s.jsx(td, { className: "w-4 h-4 text-blue-400" }),
            s.jsxs("span", {
              className: "text-sm text-white",
              children: [Math.round(i), "%"],
            }),
          ],
        }),
      ],
    });
  },
  qp = () => (
    N.useEffect(() => {
      const e = document.createElement("script");
      (e.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"),
        (e.async = !0),
        (e.type = "text/javascript"),
        document.body.appendChild(e);
      const t = document.createElement("elevenlabs-convai");
      return (
        t.setAttribute("agent-id", "agent_01k0qymaqcf2hawhs5hbreg8bj"),
        document.body.appendChild(t),
        () => {
          e.parentNode && e.parentNode.removeChild(e),
            t.parentNode && t.parentNode.removeChild(t);
        }
      );
    }, []),
    null
  ),
  Qp = "/assets/pce_logo-jpDcFc2q.jpg",
  Gp = "/assets/Screenshot%202025-07-21%20204534-B66s23bi.png";
function Kp() {
  const [e, t] = N.useState("home"),
    [n, r] = N.useState(""),
    [i, l] = N.useState({});
  N.useEffect(() => {
    const h = localStorage.getItem("cybershields-progress");
    h && l(JSON.parse(h));
  }, []);
  const a = (h, y, g, j) => {
      const v = {
        ...i,
        [h]: { ...i[h], [`level${y}`]: { score: g, completed: j } },
      };
      l(v), localStorage.setItem("cybershields-progress", JSON.stringify(v));
    },
    o = (h) => {
      r(h), t("game");
    },
    c = () => {
      t("quiz");
    },
    d = () => {
      t("home"), r("");
    };
  return s.jsxs("div", {
    className:
      "min-h-screen bg-gray-900 text-green-400 font-mono relative overflow-hidden",
    children: [
      s.jsx("div", {
        className: "fixed inset-0 opacity-10 pointer-events-none",
        children: s.jsx("div", {
          className:
            "absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900",
        }),
      }),
      s.jsx("header", {
        className:
          "bg-gray-800 border-b-2 border-green-400 shadow-lg relative z-10",
        role: "banner",
        children: s.jsx("div", {
          className: "container mx-auto px-4 py-4",
          children: s.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              s.jsxs("div", {
                className: "flex items-center space-x-3 cursor-pointer",
                onClick: d,
                children: [
                  s.jsx(qt, {
                    className: "w-8 h-8 text-green-400 animate-pulse",
                    "aria-label": "CyberShields Logo Icon",
                    focusable: "false",
                  }),
                  s.jsxs("h1", {
                    className:
                      "text-2xl font-bold text-green-400 tracking-wider",
                    children: [
                      "CYBER",
                      s.jsx("span", {
                        className: "text-blue-400",
                        children: "SHIELDS",
                      }),
                    ],
                  }),
                ],
              }),
              s.jsxs("nav", {
                className: "flex items-center space-x-6",
                "aria-label": "Main Navigation",
                children: [
                  s.jsxs("button", {
                    onClick: d,
                    className: `flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${
                      e === "home"
                        ? "bg-green-400 text-gray-900 border-green-400"
                        : "border-green-400 hover:bg-green-400 hover:text-gray-900"
                    }`,
                    "aria-current": e === "home" ? "page" : void 0,
                    children: [
                      s.jsx(Yu, {
                        className: "w-4 h-4",
                        "aria-hidden": "true",
                        focusable: "false",
                      }),
                      s.jsx("span", { children: "Games" }),
                    ],
                  }),
                  s.jsxs("button", {
                    onClick: c,
                    className: `flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      e === "quiz"
                        ? "bg-blue-400 text-gray-900 border-blue-400"
                        : "border-blue-400 hover:bg-blue-400 hover:text-gray-900"
                    }`,
                    "aria-current": e === "quiz" ? "page" : void 0,
                    children: [
                      s.jsx(Bs, {
                        className: "w-5 h-5",
                        "aria-hidden": "true",
                        focusable: "false",
                      }),
                      s.jsx("span", { children: "Quiz" }),
                    ],
                  }),
                  s.jsx(Bp, { progress: i }),
                ],
              }),
            ],
          }),
        }),
      }),
      s.jsxs("main", {
        className: "relative z-10",
        id: "main-content",
        children: [
          e === "home" &&
            s.jsx(Sp, { onStartGame: o, onStartQuiz: c, progress: i }),
          e === "game" &&
            n &&
            s.jsx(Hp, {
              gameId: n,
              onBack: d,
              onUpdateProgress: a,
              progress: i[n] || {},
            }),
          e === "quiz" && s.jsx(Vp, { onBack: d }),
        ],
      }),
      s.jsx("footer", {
        className:
          "mt-12 mb-2 w-full flex flex-col items-center justify-center font-mono text-center px-4",
        role: "contentinfo",
        children: s.jsxs("div", {
          className:
            "flex flex-col sm:flex-row items-center justify-center gap-4 w-full",
          children: [
            s.jsx("img", {
              src: Qp,
              alt: "Priyadarshini College of Engineering Logo",
              className: "h-12 w-auto",
              style: { maxWidth: "120px" },
              loading: "lazy",
              tabIndex: 0,
            }),
            s.jsxs("span", {
              className: "text-gray-300 text-base sm:text-lg max-w-xl mx-4",
              style: { lineHeight: "1.6" },
              children: [
                "This website is created by ",
                s.jsx("span", {
                  className: "text-green-400 font-semibold",
                  children: "Aditya Mishra",
                }),
                ", Activity Director of ",
                s.jsx("span", {
                  className: "text-orange-400 font-semibold",
                  children: "Quick Heal Cyber Warrior Club",
                }),
                ", Priyadarshini College of Engineering.",
              ],
            }),
            s.jsx("img", {
              src: Gp,
              alt: "CyberShields Event Screenshot Logo",
              className: "h-12 w-auto",
              style: { maxWidth: "120px" },
              loading: "lazy",
              tabIndex: 0,
            }),
          ],
        }),
      }),
      e === "home" && s.jsx(qp, {}),
      s.jsxs("div", {
        className:
          "fixed inset-0 pointer-events-none overflow-hidden opacity-20",
        children: [
          s.jsx("div", {
            className:
              "absolute -top-10 -left-10 w-20 h-20 bg-green-400 rounded-full blur-xl animate-pulse",
          }),
          s.jsx("div", {
            className:
              "absolute top-1/3 -right-10 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse delay-1000",
          }),
          s.jsx("div", {
            className:
              "absolute bottom-1/4 left-1/4 w-16 h-16 bg-orange-400 rounded-full blur-xl animate-pulse delay-2000",
          }),
        ],
      }),
    ],
  });
}
"serviceWorker" in navigator &&
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/src/service-worker.js");
  });
Gu(document.getElementById("root")).render(
  s.jsx(cd, { children: s.jsx(Kp, {}) })
);
